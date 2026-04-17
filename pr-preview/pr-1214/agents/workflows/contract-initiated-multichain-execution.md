# Contract-Initiated Multichain Execution

## Purpose

Enable a **Push Chain smart contract** to autonomously trigger execution on an external chain (Ethereum, Arbitrum, BNB Chain, etc.) via the `UniversalGatewayPC` (UGPC) — without requiring live user interaction — and optionally receive a response back on Push Chain via `executeUniversalTx()`.

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
| `UniversalGatewayPC` (UGPC) | `0x00000000000000000000000000000000000000C1` | Gateway — call to dispatch outbound cross-chain tx |
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
    bytes   recipient;        // CEA or target address on the external chain (bytes-encoded)
    address token;            // PRC20 token to bridge (address(0) for none)
    uint256 amount;           // Amount of PRC20 to bridge
    uint256 gasLimit;         // Gas limit for external execution (0 = auto)
    bytes   payload;          // ABI-encoded calldata to execute on external chain
    address revertRecipient;  // Receives funds if external tx reverts
}

interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}
```

## Steps

### 1. Import Interface

**Option A — from npm/forge:**
```solidity
import "push-chain-core-contracts/src/Interfaces/IUniversalGatewayPC.sol";
```

**Option B — inline definition** (copy the structs/interface above into your contract).

### 2. Dispatch Outbound Cross-Chain Transaction

```solidity
address constant UGPC = 0x00000000000000000000000000000000000000C1;

function dispatchOutbound(
    address token,
    uint256 amount,
    bytes calldata recipient,  // target address on external chain, bytes-encoded
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
            gasLimit:        0,           // 0 = UGPC estimates automatically
            payload:         payload,
            revertRecipient: revertRecipient
        })
    );
}
```

### 3. Implement Inbound Handler (optional — for responses)

```solidity
address constant EXECUTOR_MODULE = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

mapping(bytes32 => bool) public executedTxIds;

modifier onlyUniversalExecutor() {
    require(msg.sender == EXECUTOR_MODULE, "Not executor module");
    _;
}

function executeUniversalTx(
    string  calldata sourceChainNamespace, // e.g. "eip155:97"
    bytes   calldata ceaAddress,           // CEA that executed on source chain
    bytes   calldata payload,              // ABI-encoded response data
    uint256          amount,               // Bridged PRC20 amount
    address          prc20,               // PRC20 token address on Push Chain
    bytes32          txId                 // Unique ID — use for replay protection
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
    uint256 gasLimit; bytes payload; address revertRecipient;
}

interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

contract MyMultichainApp {
    address constant UGPC           = 0x00000000000000000000000000000000000000C1;
    address constant EXECUTOR_MOD   = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

    mapping(bytes32 => bool) public executedTxIds;
    mapping(address => uint256) public stakedBalance;

    event Dispatched(bytes recipient);
    event InboundReceived(bytes32 txId, string chain, uint256 amount);

    function dispatch(bytes calldata recipient, bytes calldata payload) external payable {
        IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
            UniversalOutboundTxRequest({
                recipient: recipient, token: address(0), amount: 0,
                gasLimit: 0, payload: payload, revertRecipient: msg.sender
            })
        );
        emit Dispatched(recipient);
    }

    function executeUniversalTx(
        string calldata sourceChainNamespace, bytes calldata ceaAddress,
        bytes calldata payload, uint256 amount, address prc20, bytes32 txId
    ) external payable {
        require(msg.sender == EXECUTOR_MOD, "Unauthorized");
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

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `revert: Not executor module` | Inbound caller is not `UNIVERSAL_EXECUTOR_MODULE` | Verify `EXECUTOR_MODULE` address is correct |
| `revert: Replay` | `txId` already processed | Idempotency guard is working; this tx was already handled |
| `insufficient msg.value` | Protocol fee not included | Pass enough ETH/PC as `msg.value` to cover UGPC fee |
| Outbound executed but no inbound | No inbound handler implemented | Implement `executeUniversalTx()` if you need the callback |
| Contract CEA has no gas | First call deploys CEA; needs funding | Ensure contract has $PC for gas; CEA auto-funds on first use |

## Agent Notes

- **No SDK required**: this is fully on-chain. The SDK is only needed for off-chain scripts that call your contract.
- **Contract CEA is derived from contract address**: not from any user wallet. Its identity on external chains is the contract's own account.
- **`gasLimit: 0` is recommended**: UGPC estimates gas automatically unless you have specific requirements.
- **Always validate inbound**: anyone could try to call `executeUniversalTx()`; the `onlyUniversalExecutor` modifier is mandatory.
- **Replay protection is mandatory**: track `txId` in a mapping and reject duplicates.

## MCP Mapping Candidates

- `encode_contract_call` — ABI-encode calldata for the external chain payload
- `emit_cross_chain_event` — Construct and submit `sendUniversalTxOutbound` call
- `relay_to_external_chain` — Monitor TSS relay status and confirm outbound delivery
