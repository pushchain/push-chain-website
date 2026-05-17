# Contract-Initiated Multichain Execution

## Purpose

Enable a **Push Chain smart contract** to autonomously trigger execution on an external chain (Ethereum, Arbitrum, BNB Chain, etc.) via the `UniversalGatewayPC` (UGPC) - without requiring live user interaction - and optionally receive a response back on Push Chain via `executeUniversalTx()`.

## When to Use

- Smart contracts that need to call external chain contracts on-chain (e.g., staking, governance, liquidations)
- Scheduled or event-driven cross-chain jobs triggered by contract logic
- Contracts that bridge PRC20 tokens outbound and need to execute calldata on the destination
- Contracts that receive inbound callbacks after external chain execution

## How This Differs from Universal Transactions

| Dimension | Universal Transaction | Contract-Initiated |
|-----------|----------------------|--------------------|
| **Initiator** | User wallet (UOA) | Push Chain smart contract |
| **Trigger** | User signature | Any on-chain call into your contract |
| **Identity on external chain** | User's CEA | Contract's CEA (bound to contract address) |
| **SDK involved** | Yes (client side) | No (fully on-chain) |
| **Response handling** | SDK receives TxResponse | `executeUniversalTx()` callback on contract |

## Key Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| `UniversalGatewayPC` (UGPC) | `0x00000000000000000000000000000000000000C1` | Gateway - call to dispatch outbound cross-chain tx |
| `UNIVERSAL_EXECUTOR_MODULE` | `0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7` | Trusted module that delivers inbound callbacks |

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Solidity | ≥0.8.0 |
| Push Chain deployment | Contract deployed on Push Chain |
| Gas in $PC | `msg.value` must cover protocol fee for `sendUniversalTxOutbound` |
| Foundry (optional) | `forge install pushchain/push-chain-core-contracts` for interface import |

## Interfaces

```solidity
struct UniversalOutboundTxRequest {
    bytes   recipient;        // raw destination address on source chain (bytes for SVM compat). bytes("") parks funds in caller's CEA
    address token;            // PRC20 token address on Push Chain (address(0) for payload-only)
    uint256 amount;           // Amount to withdraw (burn on Push, unlock at origin)
    uint256 gasLimit;         // Gas limit for fee quote (0 = per-chain default)
    uint256 gasPrice;         // Gas price override (0 = per-chain default from UniversalCore; new in SDK v6)
    uint256 maxPCForGas;      // Max native PC for the gas swap (0 = no cap; new in SDK v6)
    bytes   payload;          // ABI-encoded calldata to execute on origin chain (empty for funds-only)
    address revertRecipient;  // Address to receive funds in case of revert
}

interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}
```

## Steps

### 1. Import Interface

**Option A - from npm/forge:**
```solidity
import "push-chain-core-contracts/src/Interfaces/IUniversalGatewayPC.sol";
```

**Option B - inline definition** (copy the structs/interface above into your contract).

### 2. Dispatch Outbound Cross-Chain Transaction

```solidity
address constant UGPC = 0x00000000000000000000000000000000000000C1;

function dispatchOutbound(
    address token,
    uint256 amount,
    bytes calldata recipient,  // raw destination address on source chain (bytes-encoded)
    bytes calldata payload,    // ABI-encoded calldata
    address revertRecipient
) external payable {
    if (amount > 0) {
        IPRC20(token).approve(UGPC, amount);
    }

    IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
        UniversalOutboundTxRequest({
            recipient:       recipient,
            token:           token,
            amount:          amount,
            gasLimit:        2_000_000,   // safe default; see "Round-Trip Pattern" for why <2M can silently drop
            gasPrice:        0,           // per-chain default from UniversalCore
            maxPCForGas:     0,           // no cap on PC for the gas swap
            payload:         payload,
            revertRecipient: revertRecipient
        })
    );
    emit OutboundDispatched(recipient, payload); // Security Rule #3 - required for inbound correlation
}
```

### 3. Implement Inbound Handler (optional - for round-trip back-legs only)

`executeUniversalTx` is the back-leg handler invoked by `UNIVERSAL_EXECUTOR_MODULE` when your own contract's CEA on an external chain triggers an inbound back to Push. **You do not need this handler for user-initiated inbounds** (external user calling Push via their UEA): the UEA's internal nonce handles replay and your target can be a plain Solidity function. The guards below apply only to the back-leg path.

```solidity
address constant UNIVERSAL_EXECUTOR_MODULE = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

mapping(bytes32 => bool) public executedTxIds;

modifier onlyUniversalExecutor() {
    require(msg.sender == UNIVERSAL_EXECUTOR_MODULE, "Not executor module");
    _;
}

function executeUniversalTx(
    string  calldata sourceChainNamespace, // e.g. "eip155:97"
    bytes   calldata ceaAddress,           // CEA that executed on source chain
    bytes   calldata payload,              // ABI-encoded response data
    uint256          amount,               // Bridged PRC20 amount
    address          prc20,               // PRC20 token address on Push Chain
    bytes32          txId                 // Unique ID - use for replay protection
) external payable onlyUniversalExecutor {
    require(!executedTxIds[txId], "Already executed");
    executedTxIds[txId] = true;

    // Decode and apply your app logic
    (uint8 action, address user) = abi.decode(payload, (uint8, address));

    if (action == 0) {
        stakedBalance[user][prc20] += amount;
        emit Staked(user, prc20, amount, txId);
    }
}
```

### 4. Minimal Complete Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

struct UniversalOutboundTxRequest {
    bytes recipient; address token; uint256 amount;
    uint256 gasLimit; uint256 gasPrice; uint256 maxPCForGas;
    bytes payload; address revertRecipient;
}

interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

contract MyMultichainApp {
    address constant UGPC           = 0x00000000000000000000000000000000000000C1;
    address constant UNIVERSAL_EXECUTOR_MODULE   = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

    mapping(bytes32 => bool) public executedTxIds;
    mapping(address => uint256) public stakedBalance;

    event Dispatched(bytes recipient);
    event InboundReceived(bytes32 txId, string chain, uint256 amount);

    function dispatch(bytes calldata recipient, bytes calldata payload) external payable {
        IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
            UniversalOutboundTxRequest({
                recipient: recipient, token: address(0), amount: 0,
                gasLimit: 2_000_000, gasPrice: 0, maxPCForGas: 0,
                payload: payload, revertRecipient: msg.sender
            })
        );
        emit Dispatched(recipient);
    }

    function executeUniversalTx(
        string calldata sourceChainNamespace, bytes calldata ceaAddress,
        bytes calldata payload, uint256 amount, address prc20, bytes32 txId
    ) external payable {
        require(msg.sender == UNIVERSAL_EXECUTOR_MODULE, "Unauthorized");
        require(!executedTxIds[txId], "Replay");
        executedTxIds[txId] = true;
        emit InboundReceived(txId, sourceChainNamespace, amount);
    }
}
```

## Expected Execution Flow

```
User/App calls dispatchOutbound() on Push Chain contract
  → Contract calls UGPC.sendUniversalTxOutbound()
    → TSS network picks up the outbound event
      → Contract CEA executes payload on external chain
        [Optional] → UNIVERSAL_EXECUTOR_MODULE calls executeUniversalTx() back on Push Chain contract
```

## Round-Trip Pattern (Auto-Triggered Inbound)

A round-trip is a single outbound whose destination-chain payload **automatically fires** an inbound back to the originating Push contract. The destination CEA's outer multicall has TWO steps:

1. The external-chain action you actually care about (e.g. `target.something()`).
2. A **self-call** to `CEA.sendUniversalTxToUEA(token, amount, encodedUniversalPayload, revertRecipient)` on the destination CEA itself. The CEA enforces `msg.sender == address(this)`, wraps the inner payload, and routes it through its gateway internally. This is what tells TSS to fire the inbound.

**Required configuration** (verified on Donut Testnet - wrong values cause TSS to silently drop the back-leg):

| Knob | Value | Why |
|---|---|---|
| `gasLimit` on UGPC outbound | **`≥ 2_000_000`** | UGPC's auto-floor for `gasLimit = 0` is 500k. Below ~1.5M, the destination tx runs out of gas during the nested gateway call and TSS does not retry. Push tx still succeeds and UGPC emits the event, but no destination tx fires. |
| Push contract balance | covers `protocolFee + inbound execution fee` | Inbound on Push pays gas in $PC, charged to the dispatching contract. |
| Wire format | Outer multicall self-calls `sendUniversalTxToUEA` on the destination CEA | Plain multicalls without that self-call step do NOT fire a back-leg, regardless of gasLimit. |

The inbound's `msg.sender` is **not** your Push contract - it's `UEA(externalCEA, PUSH)`, the UEA derived from the destination CEA. If you want to authenticate your own callbacks beyond the `UNIVERSAL_EXECUTOR_MODULE` check, compute the expected `UEA(deriveExecutorAccount(self, destChain), PUSH)` off-chain and stamp it on the contract via a setter.

## Inbound Signature: 6-Arg Path Only (Push-native Contracts)

Push Chain's codebase exposes two `executeUniversalTx` signatures: a 6-arg docs-style and a 2-arg UEA-style `(UniversalPayload, bytes)`. For a Push-native contract (the kind in this guide), TSS dispatches the **6-arg path only** - the 2-arg signature is reserved for actual UEA proxy accounts. Implement the 6-arg version.

## Solana Outbound Value Sizing (Contract-Initiated)

Dispatching to Solana from a Push contract requires `msg.value` to cover the on-chain $PC → pSOL Uniswap V3 swap. A flat `balance/2` reverts with `STF` (SafeTransferFrom). Off-chain compute:

```ts
const ugpc = new ethers.Contract(UGPC, ['function UNIVERSAL_CORE() view returns (address)'], provider);
const universalCoreAddr = await ugpc.UNIVERSAL_CORE();
const universalCore = new ethers.Contract(universalCoreAddr, [
  'function getOutboundTxGasAndFees(address, uint256) view returns (address, uint256, uint256, uint256)',
  'function WPC() view returns (address)',
  'function uniswapV3Factory() view returns (address)',
  'function defaultFeeTier(address) view returns (uint24)',
], provider);
const [gasToken, gasFee] = await universalCore.getOutboundTxGasAndFees(pSOL, 2_000_000n);
const [wpc, factoryAddr, feeTier] = await Promise.all([
  universalCore.WPC(), universalCore.uniswapV3Factory(), universalCore.defaultFeeTier(gasToken),
]);
const factory = new ethers.Contract(factoryAddr, ['function getPool(address, address, uint24) view returns (address)'], provider);
const pool = new ethers.Contract(await factory.getPool(wpc, gasToken, feeTier),
  ['function slot0() view returns (uint160, int24, uint16, uint16, uint16, uint8, bool)'], provider);
const [sqrtPriceX96] = await pool.slot0();
const Q192 = 1n << 192n;
const priceNum = sqrtPriceX96 * sqrtPriceX96;
const isGasTokenToken0 = gasToken.toLowerCase() < wpc.toLowerCase();
const wpcNeeded = isGasTokenToken0 ? (gasFee * priceNum) / Q192 : (gasFee * Q192) / priceNum;
const valuePc = (wpcNeeded * 2n * 110n) / 100n;  // ×2 swap buffer × 1.1 executor buffer
```

Mirrors `@pushchain/core/src/lib/orchestrator/internals/gas-calculator.js#estimateNativeValueForSwap`. Store `valuePc` on the contract via a setter; the contract uses it as `msg.value` when calling UGPC. UGPC refunds surplus to `address(this)` so over-sizing is safe.

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `revert: Not executor module` | Inbound caller is not `UNIVERSAL_EXECUTOR_MODULE` | Verify `UNIVERSAL_EXECUTOR_MODULE` address is `0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7` |
| `revert: Replay` | `txId` already processed | Idempotency guard is working; this tx was already handled |
| `insufficient msg.value` | Protocol fee not included | Pass enough ETH/PC as `msg.value` to cover UGPC fee |
| Outbound executed but no inbound | (a) No inbound handler implemented, OR (b) on a round-trip, `gasLimit < 2_000_000`, OR (c) wire format missing the CEA self-call | (a) Implement `executeUniversalTx()` 6-arg. (b) Set `gasLimit: 2_000_000` on UGPC outbound. (c) Include a step in the destination CEA's outer multicall that self-calls `sendUniversalTxToUEA` on the CEA itself. |
| Solana outbound reverts with `STF` | `msg.value` to UGPC under-sizes the $PC → pSOL Uniswap V3 swap | Use the off-chain sizing snippet above; never use a flat `balance/2`. |
| Push tx succeeds but no Sepolia activity | Push → Sepolia outbound is currently NOT relayed by TSS on Donut Testnet | Use BNB Testnet as the destination for now. Push → BNB outbound and Sepolia → Push inbound work. |
| Contract CEA has no gas | First call deploys CEA; needs funding | Ensure contract has $PC for gas; CEA auto-funds on first use |

## Agent Notes

- **No SDK required**: this is fully on-chain. The SDK is only needed for off-chain scripts that call your contract.
- **Contract CEA is derived from contract address**: not from any user wallet. Its identity on external chains is the contract's own account.
- **Default to `gasLimit: 2_000_000`.** `gasLimit: 0` is the UGPC auto-floor (500k) and is too tight for any payload that nests a gateway call (round-trip pattern). Below threshold, TSS silently drops the relay - your Push tx succeeds, UGPC emits the event, but no destination tx fires. UGPC charges only for actual gas used and refunds surplus into the contract via `receive()`, so over-provisioning is essentially free.
- **Always validate inbound**: anyone could try to call `executeUniversalTx()`; the `onlyUniversalExecutor` modifier is mandatory.
- **Replay protection is mandatory**: track `txId` in a mapping and reject duplicates.
- **Refunds collect on the contract.** UGPC routes surplus to `address(this)`, not to the EOA that called your contract. For long-running flows, plan a `withdraw()` path or treasury sweep.

## MCP Mapping Candidates

- `encode_contract_call` - ABI-encode calldata for the external chain payload
- `emit_cross_chain_event` - Construct and submit `sendUniversalTxOutbound` call
- `relay_to_external_chain` - Monitor TSS relay status and confirm outbound delivery
