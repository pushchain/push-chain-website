---
title: "Round-Trip with Auto Back-Leg"
url: "https://pushchain.github.io/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg/"
section: "build"
lastUpdated: "2026-11-01T17:05:31+05:30"
description: "Round-Trip with Auto Back-Leg | Examples | Build | Push Chain Docs"
---

# Round-Trip with Auto Back-Leg

A single Push contract that dispatches an outbound to BNB Testnet and **automatically receives an inbound callback** when the destination chain finishes. One user signature on Push, two coordinated transactions across two chains.

This is a **loaded pattern example** where the operational knobs that the basics gloss over (**gasLimit floor**, destination **CEA prefunding**, the 6-arg **executeUniversalTx dispatch** path, refund accumulation) all become concrete here.

For the conceptual background, see [Contract-Initiated Multichain Execution](/push-chain-website/pr-preview/pr-1247/docs/chain/build/contract-initiated-multichain-execution/) (especially the [Round-Trip Wire Format](/push-chain-website/pr-preview/pr-1247/docs/chain/build/contract-initiated-multichain-execution/#round-trip-wire-format) and [Operational Knobs](/push-chain-website/pr-preview/pr-1247/docs/chain/build/contract-initiated-multichain-execution/#operational-knobs) sections).

## What this example shows

| Aspect | Details |
| --- | --- |
| **Direction** | Push -> BNB -> Push, all from one user signature on Push. |
| **Trigger** | EOA calls `kickOff(...)`. The contract dispatches outbound; TSS auto-fires the inbound callback when the BNB tx settles. |
| **Wire format** | The destination CEA's outer multicall self-calls `sendUniversalTxToUEA` on the CEA itself. The CEA wraps the inner payload and submits it through BNB's gateway. |
| **Inbound dispatch path** | The 6-arg `executeUniversalTx(string, bytes, bytes, uint256, address, bytes32)`. For Push-native contracts, TSS dispatches this signature; the 2-arg `executeUniversalTx(UniversalPayload, bytes)` overload in the codebase is reserved for UEA proxy accounts and is not invoked here. |
| **Verified on** | Donut Testnet. End-to-end run with `outboundCount` and `callbacks` both advancing. |

## The wire format

This is the part most newcomers get wrong. The destination CEA's outer multicall must include a step that **self-calls `sendUniversalTxToUEA` on the CEA itself**. The CEA wraps and routes the inner payload through its gateway internally; TSS reads the gateway event and fires the inbound back to Push. The full layered structure:

```text
Layer 4 - Outer multicall (what TSS submits to the destination CEA)
  ┌────────────────────────────────────────────────────────────────┐
  │ 0x2cc2842d || abi.encode(Multicall[] {                         │
  │   { to: destCEA, value: 0, data: <Layer 3> }                   │
  │ })                                                             │
  └────────────────────────────────────────────────────────────────┘
                              │
                              ▼
Layer 3 - CEA self-call to sendUniversalTxToUEA
  ┌────────────────────────────────────────────────────────────────┐
  │ sendUniversalTxToUEA(token=0, amount=0, <Layer 2>, refundTo)   │
  └────────────────────────────────────────────────────────────────┘
                              │
                              ▼
Layer 2 - Encoded UniversalPayload (vType = 1, inbound)
  ┌────────────────────────────────────────────────────────────────┐
  │ abi.encode(                                                    │
  │   address(0), uint256(0), <Layer 1>,                           │
  │   gasLimit, maxFeePerGas, 0, ueaNonce + 1, deadline, vType: 1  │
  │ )                                                              │
  └────────────────────────────────────────────────────────────────┘
                              │
                              ▼
Layer 1 - Inner multicall (what the Push UEA executes after the back-leg)
  ┌────────────────────────────────────────────────────────────────┐
  │ 0x2cc2842d || abi.encode(Multicall[] { /* no-op or your call */ })│
  └────────────────────────────────────────────────────────────────┘
```

The destination CEA receives Layer 4, executes the multicall step, which invokes Layer 3 (the CEA self-call), which submits Layer 2 to the BNB gateway. TSS picks up the gateway event and delivers Layer 1 to the original Push contract via the 6-arg `executeUniversalTx`.

> The four-layer encoding looks like a lot. In practice you write it once, encapsulate it in a helper function, and call that helper from every kickoff path. The runner in this example shows the helper.

## Solidity Code

Round-Trip Dispatcher

RoundtripDispatcher.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/core-sdk-functions/contract-initiated-roundtrip-execution/src/RoundtripDispatcher.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

struct UniversalOutboundTxRequest {
    bytes recipient;
    address token;
    uint256 amount;
    uint256 gasLimit;
    uint256 gasPrice;        // 0 = per-chain default from UniversalCore (new in SDK v6)
    uint256 maxPCForGas;     // 0 = no cap on PC the AMM may spend on the gas swap (new in SDK v6)
    bytes payload;
    address revertRecipient;
}

interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

contract RoundtripDispatcher {
    address public immutable ugpc;
    address public immutable universalExecutorModule;

    bytes4 internal constant UEA_MULTICALL_SELECTOR = 0x2cc2842d;

    uint256 public outboundCount;
    uint256 public callbacks;

    mapping(bytes32 => bool) public seenTxIds;
    bytes32 public lastTxId;

    event OutboundKicked(uint256 outboundCount, bytes payload);
    event Callback(uint256 sequence, bytes32 indexed txId, string sourceChainNamespace, bytes ceaAddress, address prc20, uint256 amount);

    error NotUniversalExecutor();
    error TxAlreadyExecuted();
    error InsufficientPC(uint256 required, uint256 available);

    struct Multicall { address to; uint256 value; bytes data; }

    constructor(address _ugpc, address _module) {
        ugpc = _ugpc;
        universalExecutorModule = _module;
    }

    function fund() external payable {}

    /// @notice Trigger the round-trip: dispatch outbound to BNB; TSS auto-fires the inbound callback.
    /// @param destinationCEAAddr This contract's CEA on the destination chain.
    /// @param tokenForRouting    PRC-20 on Push that selects the destination chain (e.g. pBNB).
    /// @param protocolFeePc      PC the contract forwards to UGPC for the outbound fee.
    /// @param ueaNonce           Current Push UEA nonce. 0 for fresh.
    function kickOff(
        address destinationCEAAddr,
        address tokenForRouting,
        uint256 protocolFeePc,
        uint256 ueaNonce
    ) external {
        if (address(this).balance < protocolFeePc) {
            revert InsufficientPC(protocolFeePc, address(this).balance);
        }

        // Layer 1: inner multicall (executes on Push UEA after the back-leg).
        Multicall[] memory innerCalls = new Multicall[](1);
        innerCalls[0] = Multicall({to: address(this), value: 0, data: ""});
        bytes memory innerMulticallData = abi.encodePacked(UEA_MULTICALL_SELECTOR, abi.encode(innerCalls));

        // Layer 2: encoded UniversalPayload struct (vType = 1, inbound).
        bytes memory inboundUniversalPayload = abi.encode(
            address(0), uint256(0), innerMulticallData,
            uint256(1e7), uint256(1e10), uint256(0),
            ueaNonce + 1, uint256(9999999999), uint8(1)
        );

        // Layer 3: CEA self-call to sendUniversalTxToUEA.
        bytes memory ceaSelfCallData = abi.encodeWithSelector(
            bytes4(keccak256("sendUniversalTxToUEA(address,uint256,bytes,address)")),
            address(0), uint256(0), inboundUniversalPayload, address(this)
        );

        // Layer 4: outer multicall delivered to the destination CEA.
        Multicall[] memory outerCalls = new Multicall[](1);
        outerCalls[0] = Multicall({to: destinationCEAAddr, value: 0, data: ceaSelfCallData});
        bytes memory outerMulticallData = abi.encodePacked(UEA_MULTICALL_SELECTOR, abi.encode(outerCalls));

        IUniversalGatewayPC(ugpc).sendUniversalTxOutbound{value: protocolFeePc}(
            UniversalOutboundTxRequest({
                recipient: abi.encodePacked(destinationCEAAddr),
                token: tokenForRouting,
                amount: 0,
                gasLimit: 2_000_000,        // CRITICAL: see What can go wrong below
                gasPrice: 0,                // per-chain default from UniversalCore
                maxPCForGas: 0,             // no cap on PC for the gas swap
                payload: outerMulticallData,
                revertRecipient: address(this)
            })
        );

        outboundCount += 1;
        emit OutboundKicked(outboundCount, outerMulticallData);
    }

    /// @notice Back-leg handler. TSS calls this via UNIVERSAL_EXECUTOR_MODULE
    /// when the destination CEA finishes its multicall. For Push-native
    /// contracts, this 6-arg signature is the path TSS dispatches to; the
    /// 2-arg `executeUniversalTx(UniversalPayload, bytes)` overload in the
    /// codebase is reserved for UEA proxy accounts and is not invoked here.
    function executeUniversalTx(
        string calldata sourceChainNamespace,
        bytes calldata ceaAddress,
        bytes calldata, /* payload */
        uint256 amount,
        address prc20,
        bytes32 txId
    ) external payable {
        if (msg.sender != universalExecutorModule) revert NotUniversalExecutor();
        if (seenTxIds[txId]) revert TxAlreadyExecuted();
        seenTxIds[txId] = true;
        callbacks += 1;
        lastTxId = txId;
        emit Callback(callbacks, txId, sourceChainNamespace, ceaAddress, prc20, amount);
    }

    receive() external payable {}
}
```

`kickOff` is the only entrypoint a caller needs. `executeUniversalTx` is the back-leg handler TSS invokes when the destination CEA's multicall completes. After running the example end to end on Donut, `outboundCount` and `callbacks` both advance to 1.

## Required configuration

Two knobs determine whether the back-leg lands. Wrong values cause TSS to silently drop the relay.

| Knob | Value | Why |
| --- | --- | --- |
| `gasLimit` on the UGPC outbound | **`2_000_000`** | UGPC's auto-floor for `gasLimit = 0` is 500k. Below ~1.5M the destination tx runs out of gas during the nested gateway call and TSS does not retry. UGPC charges only for actual gas used and refunds the surplus, so over-provisioning is essentially free. |
| Push contract `$PC` balance | covers `protocolFee + inbound execution fee` | Inbound execution on Push pays gas in `$PC`, charged to the dispatching contract. UGPC refunds surplus into `address(this)` via `receive()`. |

The destination CEA does not need pre-funding. When TSS submits the destination tx it forwards the converted gas value to the CEA as `msg.value`, so the CEA has the native balance it needs for the nested `gateway.sendUniversalTxFromCEA(...)` call during the duration of that tx.

## Source Code

### Run

The runner deploys the contract, funds it with PC if needed, derives the destination CEA, fires `kickOff()`, and watches both `outboundCount` and `callbacks` advance.

```bash
git clone https://github.com/pushchain/push-chain-examples.git
cd push-chain-examples/core-sdk-functions/contract-initiated-roundtrip-execution

forge build
npm install
cp .env.sample .env
# Edit .env: set PUSH_PRIVATE_KEY (Push native wallet with at least 12 PC).
npm start
```

### Prerequisites

-   Foundry and Node.js v18+.
-   A Push native wallet on Donut Testnet with at least 12 PC (deploy + 8 PC funded into the contract + protocol fees + headroom). [Push faucet](https://faucet.push.org).

The first run deploys `RoundtripDispatcher`, funds it with 8 PC, fires `kickOff`, and watches the cascade unfold. After ~30 to 90 seconds you should see the outbound on BNB and the inbound callback land on Push.

## What can go wrong

| Symptom | Cause | Fix |
| --- | --- | --- |
| Push tx succeeds but no BNB tx fires | `gasLimit` was 0 or under the auto-floor (~500k) | Pass `gasLimit: 2_000_000`. The example hardcodes this; do not lower it. |
| Both legs land but the back-leg never reaches `executeUniversalTx` | The outer multicall is missing the destination CEA's self-call to `sendUniversalTxToUEA` | Use the layered encoding above. Plain multicalls without that self-call step do not trigger a back-leg. |
| Inbound callback never lands on `executeUniversalTx` | Implementing the 2-arg `executeUniversalTx(UniversalPayload, bytes)` overload as your primary handler | TSS dispatches only the 6-arg overload `(string, bytes, bytes, uint256, address, bytes32)` to Push-native contracts. The 2-arg signature is reserved for UEA proxies. Implement only the 6-arg version. |
| Solana destination outbound reverts with `STF` | `msg.value` to UGPC under-sized the on-chain $PC -> pSOL Uniswap V3 swap | Off-chain compute the right value via the [Solana sizing snippet](/push-chain-website/pr-preview/pr-1247/docs/chain/build/contract-initiated-multichain-execution/#solana-outbound-value-sizing) and store it on the contract via a setter. Never use a flat `balance/2`. |
| EOA wallet drains over many runs even though the contract is funded | UGPC routes its surplus refund to `address(this)`, not back to the EOA that called `kickOff()` | Plan a `withdraw()` path or treasury sweep. Refunds accumulate on the contract over time. |

## Related

-   [Contract-Initiated Multichain Execution](/push-chain-website/pr-preview/pr-1247/docs/chain/build/contract-initiated-multichain-execution/) → The conceptual reference for everything related to contract-initiated execution.
-   Other Basic Examples → [Inbound to Push Chain](/push-chain-website/pr-preview/pr-1247/docs/chain/build/contract-initiated-examples/inbound-to-push-chain/) and [Outbound from Push Chain](/push-chain-website/pr-preview/pr-1247/docs/chain/build/contract-initiated-examples/outbound-from-push-chain/).
-   [Advanced Patterns](/push-chain-website/pr-preview/pr-1247/docs/chain/build/contract-initiated-examples/advanced-patterns/) → Harder variants: FIFO state machine, deposit-and-execute, recipient bridge, three-chain cascade.
-   [How CEA Works](/push-chain-website/pr-preview/pr-1247/docs/chain/deep-dives/how-cea-works/) → The identity model that makes the round-trip back-leg land on the same Push contract.
