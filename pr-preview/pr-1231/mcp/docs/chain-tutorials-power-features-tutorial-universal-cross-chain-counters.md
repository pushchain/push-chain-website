---
title: "Build Universal Cross-Chain Counters"
url: "https://pushchain.github.io/docs/chain/tutorials/power-features/tutorial-universal-cross-chain-counters/"
section: "tutorials"
lastUpdated: "2026-07-29T09:24:28Z"
description: "Build Universal Cross-Chain Counters | Tutorials | Push Chain Docs"
---

# Build Universal Cross-Chain Counters

20 mins

In the [Counter](/push-chain-website/pr-preview/pr-1231/docs/chain/tutorials/basics/tutorial-simple-counter/) and [Universal Counter](/push-chain-website/pr-preview/pr-1231/docs/chain/tutorials/basics/tutorial-universal-counter/) tutorials every increment landed on **one** Push Chain contract. Here we flip the model. A single click on a Push Chain contract increments separate counters on **Ethereum Sepolia, BNB Testnet, and Arbitrum Sepolia** at once. One contract orchestrates many.

By the end of this tutorial you'll be able to:

-   ✅ Deploy a Push Chain contract that fans out to multiple destination chains in one call
-   ✅ Use **IUniversalGatewayPC** (UGPC) to dispatch outbound transactions
-   ✅ Compute a contract's destination-chain CEA before any cross-chain activity has happened
-   ✅ See and verify `msg.sender` on the destination chain resolve to the deterministic CEA
-   ✅ (Optional) Harden the destination by gating `increment()` to the CEA so only your Push contract can drive it

Builds on Derive CEA

This tutorial puts the [Derive Chain Executor Account (CEA)](/push-chain-website/pr-preview/pr-1231/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account/) primitive to work. If you haven't read that one yet, skim it first. We'll be deriving CEAs and authorising them on destination chains.

## Understanding the Pattern

In order to create ticks across multiple chains, we need to design two contracts.

-   **MultiChainCounter**: This contract runs on Push Chain and is responsible for orchestrating the cross-chain increments.
-   **ExternalCounter**: This contract runs on each destination chain and is responsible for incrementing the counter.

The transaction from users from any chain lands on Push Chain, where the `MultiChainCounter` contract is deployed. It then uses the **IUniversalGatewayPC** (UGPC) to dispatch outbound transactions to each of the **ExternalCounter** contracts on the destination chains.

> **🚀 Why this matters**
> 
> No off-chain bots. No relayer keys. No per-chain hot wallets. The orchestrator lives entirely on Push Chain and reaches every external chain through a deterministic identity (its CEA) that destination protocols can pre-authorise from day zero.

## Write the Contracts

### Per Destination Chain → ExternalCounter.sol

This contract lives on **each destination chain**. It stores a `count` and records `lastCaller` on every increment so you can observe the orchestrator's CEA showing up after each tick.

External Counter (one per destination chain)

ExternalCounter.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-cross-chain-counters/contracts/src/ExternalCounter.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract ExternalCounter {
    uint256 public count;

    /// The address that most recently incremented. After a tickAll this will
    /// be the orchestrator's deterministic CEA on this chain.
    address public lastCaller;

    event CountIncremented(uint256 indexed newCount, address indexed caller);

    function increment() external {
        unchecked { count += 1; }
        lastCaller = msg.sender;
        emit CountIncremented(count, msg.sender);
    }
}
```

When the orchestrator dispatches via UGPC, the TSS network signs the destination tx **as the orchestrator's CEA on this chain**, so `lastCaller` ends up being that deterministic CEA address.

From the destination contract's perspective the CEA is just a regular address, but Push Chain guarantees only one Push-side contract can produce calls from it. Visible proof of identity, with no mandatory destination-side auth.

Why is `ExternalCounter.increment()` open?

We deliberately keep `increment()` callable by anyone in this tutorial so you can run the live playground below without a per-chain redeploy.  
  

To **enforce** that only the orchestrator's CEA can drive it, see the [production hardening snippet at the bottom of this tutorial](#production-hardening-gate-increment-to-the-cea).

### On Push Chain → MultiChainCounter.sol

This contract lives on **Push Chain**. It holds the list of destinations and fans out a single payload (the `increment()` calldata) to each one through `UGPC`.

Push-Chain Orchestrator

MultiChainCounter.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-cross-chain-counters/contracts/src/MultiChainCounter.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/// @notice UGPC outbound request shape. Mirrors the production type so this
/// tutorial doesn't need a hard dependency on push-chain-gateway-contracts.
struct UniversalOutboundTxRequest {
    bytes recipient;         // bytes-packed ExternalCounter address on the destination chain
    address token;           // address(0) — we are not bridging funds, just executing a payload
    uint256 amount;          // 0 because we are not bridging funds
    uint256 gasLimit;        // gas the destination CEA gets to run `increment()`
    uint256 gasPrice;        // 0 → per-chain default from UniversalCore (new in SDK v6)
    uint256 maxPCForGas;     // 0 → no cap on PC the AMM may spend on the gas swap (new in SDK v6)
    bytes payload;           // ABI-encoded calldata for the destination contract
    address revertRecipient; // refunded if the outbound cannot finalise
}

interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

interface IExternalCounter {
    function increment() external;
}

contract MultiChainCounter {
    /// @notice Predeploy address of UniversalGatewayPC on every Push Chain network.
    IUniversalGatewayPC public constant UGPC =
        IUniversalGatewayPC(0x00000000000000000000000000000000000000C1);

    struct Destination {
        bytes target;        // bytes-packed ExternalCounter address
        uint256 gasLimit;    // destination-chain gas budget for the CEA's call
    }

    Destination[] public destinations;
    address public immutable OWNER;

    event DestinationAdded(uint256 indexed index, bytes target);
    event DestinationGasLimitUpdated(uint256 indexed index, uint256 oldGasLimit, uint256 newGasLimit);
    event Ticked(uint256 nDestinations, uint256 totalValue);

    error NotOwner();
    error LengthMismatch();
    error InsufficientValue();
    error InvalidIndex();
    error ZeroGasLimit();

    modifier onlyOwner() {
        if (msg.sender != OWNER) revert NotOwner();
        _;
    }

    constructor() {
        OWNER = msg.sender;
    }

    /// @notice Register an `ExternalCounter` on a destination chain.
    function addDestination(bytes calldata target, uint256 gasLimit) external onlyOwner {
        if (gasLimit == 0) revert ZeroGasLimit();
        destinations.push(Destination({ target: target, gasLimit: gasLimit }));
        emit DestinationAdded(destinations.length - 1, target);
    }

    /// @notice Update the gas budget granted to a registered destination's CEA
    /// without redeploying.
    function setDestinationGasLimit(uint256 index, uint256 newGasLimit) external onlyOwner {
        if (index >= destinations.length) revert InvalidIndex();
        if (newGasLimit == 0) revert ZeroGasLimit();
        uint256 oldGasLimit = destinations[index].gasLimit;
        destinations[index].gasLimit = newGasLimit;
        emit DestinationGasLimitUpdated(index, oldGasLimit, newGasLimit);
    }

    /// @notice Tick every registered destination's counter.
    /// @param  perCallFee  protocolFee + gasFee for each destination, quoted via
    ///                     `UniversalCore.getOutboundTxGasAndFees(...)`.
    /// @param  revertRecipient Push-side address credited if any outbound reverts.
    function tickAll(uint256[] calldata perCallFee, address revertRecipient) external payable {
        uint256 n = destinations.length;
        if (perCallFee.length != n) revert LengthMismatch();

        // Checks-Effects-Interactions: sum and validate msg.value BEFORE
        // dispatching any UGPC outbound, so an under-funded call reverts
        // immediately without burning gas on outbounds the contract would
        // have to back-fund from its own balance.
        uint256 total;
        for (uint256 i = 0; i < n; i++) {
            total += perCallFee[i];
        }
        if (msg.value < total) revert InsufficientValue();

        bytes memory payload = abi.encodeCall(IExternalCounter.increment, ());

        for (uint256 i = 0; i < n; i++) {
            Destination memory d = destinations[i];

            UGPC.sendUniversalTxOutbound{value: perCallFee[i]}(
                UniversalOutboundTxRequest({
                    recipient: d.target,
                    token: address(0),
                    amount: 0,
                    gasLimit: d.gasLimit,
                    gasPrice: 0,            // per-chain default from UniversalCore
                    maxPCForGas: 0,         // no cap on PC for the gas swap
                    payload: payload,
                    revertRecipient: revertRecipient
                })
            );
        }

        emit Ticked(n, msg.value);
    }

    /// @notice View helper. Returns the number of registered destinations.
    function destinationCount() external view returns (uint256) {
        return destinations.length;
    }

    /// @notice Receive UniversalCore refunds and any incoming PC.
    receive() external payable {}
}
```

A few things to note about the outbound shape:

-   **`token` is `address(0)`.** We're executing a payload, not bridging funds. UGPC infers `TX_TYPE = GAS_AND_PAYLOAD` from `token == address(0) && payload.length > 0`.
-   **`recipient` is `bytes`, not `address`.** UGPC supports non-EVM destinations too, so addresses are bytes-packed (`abi.encodePacked(externalCounterAddress)` for EVM destinations).
-   **`payload` is the raw single-call calldata.** No multicall marker prefix — that's only required for multi-step destination payloads.
-   **Per-call fees, not flat.** Each destination has its own protocolFee + gasFee depending on its current gas price and configured `gasLimit`. Quote each one separately off-chain.

## Wire It Up

Three things to wire up, then we tick.

### Deploy the contracts

Deploy `MultiChainCounter` on Push Chain and `ExternalCounter` on each destination — Foundry, Hardhat, or Remix all work. See [smart contract deployment](/push-chain-website/pr-preview/pr-1231/docs/chain/setup/smart-contract-environment/) for setup.

Foundry one-liner per chain

```bash
# Push Chain Donut Testnet (orchestrator)
forge create src/MultiChainCounter.sol:MultiChainCounter \
  --rpc-url $PUSH_TESTNET_RPC --private-key $DEPLOYER_KEY

# Each destination — same command, different RPC + key
forge create src/ExternalCounter.sol:ExternalCounter \
  --rpc-url $DEST_RPC --private-key $DEST_KEY
```

### Register each destination

```typescript
import { PushChain } from '@pushchain/core';
import { encodePacked } from 'viem';

const DESTINATIONS = [
  { counter: '0xCounterEth...', gasLimit: 1_000_000n },
  { counter: '0xCounterBnb...', gasLimit: 1_000_000n },
  { counter: '0xCounterArb...', gasLimit: 1_000_000n },
];

for (const d of DESTINATIONS) {
  await pushChainClient.universal.sendTransaction({
    to: MULTICHAIN_COUNTER_ADDRESS,
    data: PushChain.utils.helpers.encodeTxData({
      abi: MULTICHAIN_COUNTER_ABI,
      functionName: 'addDestination',
      args: [encodePacked(['address'], [d.counter]), d.gasLimit],
    }),
  });
}
```

### Tick every counter

```typescript
const PER_CALL_FEE = 5n * 10n ** 18n; // 5 PC per destination — comfortable testnet headroom
const fees = DESTINATIONS.map(() => PER_CALL_FEE);
const total = fees.reduce((a, b) => a + b, 0n);

await pushChainClient.universal.sendTransaction({
  to:    MULTICHAIN_COUNTER_ADDRESS,
  value: total,
  data:  PushChain.utils.helpers.encodeTxData({
    abi: MULTICHAIN_COUNTER_ABI,
    functionName: 'tickAll',
    args: [fees, REVERT_RECIPIENT_ADDRESS],
  }),
});
```

A few seconds later, once the TSS network has relayed each outbound. You will see every `ExternalCounter` will have ticked exactly once. Verify with `count()` and `lastCaller()` reads on each destination chain.

Use a roomy `gasLimit` (>= 1\_000\_000)

The destination's CEA has to execute the Vault wrapper, decode the payload, and call your target, which requires more gas than the bare `increment()` itself.  
  
Tight budgets revert with selector `0xff633a38`. **Default to 1\_000\_000 per destination**, bump higher for complex payloads, and use `setDestinationGasLimit(index, newGasLimit)` to fix a too-low budget without redeploying.

## Understanding msg.sender on the Destination

When `ExternalCounter.increment()` runs on Ethereum from a `tickAll`, what does `msg.sender` resolve to?

```text
msg.sender == lastCaller
           == CEAFactory.getCEAForPushAccount(MULTICHAIN_COUNTER_ADDRESS)
           == ceaOnEth.address
```

This is the unique guarantee CEAs provide:

-   The Ethereum contract sees a normal `msg.sender` address. No exotic format, no special handling.
-   That address can only be **controlled** by exactly one Push Chain contract (`MultiChainCounter`).
-   The relationship is enforced by the destination chain's `CEAFactory`, not by anything off-chain.

In this base example anyone _can_ still call `increment()`, but only the orchestrator's CEA will appear as `lastCaller` when the call comes through UGPC. To enforce that only the CEA can drive the counter, see the next section.

## Production hardening → gate _increment()_ to the CEA

When you're ready to make the counter authoritative, where destination state can only advance through the orchestrator, swap `ExternalCounter` for the auth-gated variant. The diff is small:

ExternalCounter (production-hardened)

ExternalCounter.sol

[Open in Remix](https://remix.ethereum.org/)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract ExternalCounter {
    uint256 public count;
    address public immutable AUTHORIZED_CEA;

    event CountIncremented(uint256 indexed newCount, address indexed caller);
    error NotAuthorizedCEA();

    constructor(address authorizedCEA) {
        AUTHORIZED_CEA = authorizedCEA;
    }

    function increment() external {
        if (msg.sender != AUTHORIZED_CEA) revert NotAuthorizedCEA();
        unchecked { count += 1; }
        emit CountIncremented(count, msg.sender);
    }
}
```

Pass the orchestrator's per-chain CEA (from step 2 above) as the constructor argument. Now `increment()` reverts for anyone except the orchestrator's CEA. The destination chain's `CEAFactory` enforces that the CEA can only be controlled by your `MultiChainCounter` on Push, so the gating is end-to-end without any off-chain trust.

You can also pre-authorise the CEA on third-party destination protocols this way (whitelists, vault gating, etc.) before any cross-chain activity has happened. That's the [pre-authorise pattern from the Derive CEA tutorial](/push-chain-website/pr-preview/pr-1231/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account/#example-pre-compute-and-authorize-a-push-contracts-cea).

## Live Playground

Connect a wallet and click **Tick all destinations**. One Push transaction fans out three outbounds; when each `lastCaller` matches the derived CEA, you've watched the identity round-trip end to end. A **Lifecycle events** panel below the buttons surfaces every step from the SDK's `tx.progressHook(callback)`.

Wired to a reference deployment:

| Contract | Chain | Address |
| --- | --- | --- |
| `MultiChainCounter` | Push Donut Testnet | [`0x7dd8...fBDd`](https://donut.push.network/address/0x7dd80f17C593F73292b3c4B785C4dD0100C4fBDd) |
| `ExternalCounter` | Ethereum Sepolia | [`0xCf5D...Ee92`](https://sepolia.etherscan.io/address/0xCf5DB8F40F7dAA8Aa8Cb36C880F7207a65e2Ee92) |
| `ExternalCounter` | BNB Testnet | [`0xfEe7...57D5`](https://testnet.bscscan.com/address/0xfEe777Fbd341AC02d105037022fc03D3CcD757D5) |
| `ExternalCounter` | Arbitrum Sepolia | [`0xb3fB...6E79`](https://sepolia.arbiscan.io/address/0xb3fB98A3C6EEA643532198CF22cc50BC48026E79) |

To drive your own deployments, edit `ORCHESTRATOR` and `DEMO_DESTINATIONS` at the top of the playground source.

REACT PLAYGROUND

Copy playground link

Copy code

LIVE APP PREVIEW

## Source code

## What we achieved

In this tutorial, we built a true cross-chain orchestrator:

-   **One Push contract, many destinations.** `MultiChainCounter` fans out to Ethereum, BNB, and Arbitrum in a single Push transaction.
-   **Deterministic identity.** Each destination's CEA is computable from the orchestrator's address alone, before any deployment.
-   **Visible identity proof.** `ExternalCounter.lastCaller()` records exactly the deterministic CEA after each tick.
-   **Optional production gating.** Drop in the auth-gated `ExternalCounter` and only the orchestrator's CEA can drive destination state.
-   **One-shot UX.** Users (or other contracts) call `tickAll()` once on Push, and three chains' state updates as a result.

## Key takeaways

**1\. CEAs are computed before they exist**

-   `getCEAForPushAccount` (or the SDK's `deriveExecutorAccount`) returns a deterministic address.
-   That address can be authorised on destination protocols on day zero.
-   The TSS network deploys the actual contract on first use.

**2\. The Push-side address is the identity anchor**

-   A different `MultiChainCounter` deployment has a different CEA on every chain.
-   Re-deploying the orchestrator means re-authorising on every destination.
-   For upgradeable systems, use a proxy. The CEA stays bound to the proxy address.

**3\. Destination protocols don't need any Push Chain awareness**

-   `ExternalCounter` is plain Solidity. No Push-specific imports, no signatures to verify, no gateway calls.
-   The CEA looks like a normal EOA from the destination's perspective.
-   Universal execution is invisible at the destination layer.

## What's Next?

You've fanned **one Push contract out to many chains**. Now flip the direction. Let users on every chain claim from a single Push Chain contract. The Universal Airdrop tutorial uses Merkle proofs and UEAs to distribute tokens to recipients on Ethereum, Solana, BNB, and beyond, all from one contract on Push.

* * *

Check out the next tutorial to learn how to [build a Universal Airdrop](/push-chain-website/pr-preview/pr-1231/docs/chain/tutorials/token-systems/tutorial-universal-airdrop/): one contract, every chain, no bridging.
