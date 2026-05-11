# Contract Interfaces Reference — Push Chain Donut Testnet

> Deep context for `push-contracts` skill. Load this file when you need complete inline interfaces, ABI JSON for ethers.js, or all struct definitions in one place.
>
> Drag-and-drop into your project — self-contained, no imports required.

---

## Addresses (Donut Testnet)

| Contract | Address |
|---|---|
| UEA Factory | `0x00000000000000000000000000000000000000eA` |
| UniversalGatewayPC (UGPC) | `0x00000000000000000000000000000000000000C1` |
| Universal Executor Module | `0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7` |

**Universal Gateway (UG) on external chains:**

| Chain | Address |
|---|---|
| Ethereum Sepolia | `0x05bD7a3D18324c1F7e216f7fBF2b15985aE5281A` |
| Arbitrum Sepolia | `0x2cd870e0166Ba458dEC615168Fd659AacD795f34` |
| Base Sepolia | `0xFD4fef1F43aFEc8b5bcdEEc47f35a1431479aC16` |
| BNB Testnet | `0x44aFFC61983F4348DdddB886349eb992C061EaC0` |
| Solana Devnet | `CFVSincHYbETh2k7w6u1ENEkjbSLtveRCEBupKidw2VS` |

---

## Complete Solidity Interfaces (copy-paste block)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// ── IUEAFactory ──────────────────────────────────────────────────────────────

struct UniversalAccountId {
    string chainNamespace; // "eip155" for EVM, "solana" for Solana
    string chainId;        // e.g. "11155111" for Ethereum Sepolia, "97" for BNB Testnet
    bytes  owner;          // abi.encodePacked(evmAddress) for EVM; bs58-decoded bytes for Solana
}

interface IUEAFactory {
    function getOriginForUEA(address addr)
        external view
        returns (UniversalAccountId memory account, bool isUEA);

    function getUEAForOrigin(UniversalAccountId memory _id)
        external view
        returns (address uea, bool isDeployed);
}

// ── IUniversalGatewayPC ──────────────────────────────────────────────────────

struct UniversalOutboundTxRequest {
    bytes   recipient;       // abi.encodePacked(targetAddress) for EVM targets
    address token;           // PRC20 token to bridge (address(0) = no bridge)
    uint256 amount;          // PRC20 amount to bridge (0 if token == address(0))
    uint256 gasLimit;        // 0 = UGPC auto-estimates (recommended)
    bytes   payload;         // ABI-encoded calldata for target contract
    address revertRecipient; // receives bridged funds back if external tx reverts
}

interface IUniversalGatewayPC {
    // msg.value must cover protocol fee + estimated gas on external chain
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

// ── IUniversalCore ───────────────────────────────────────────────────────────
// Use ONLY for reading chain state — not for fee estimation in contracts

interface IUniversalCore {
    function gasPriceByChainNamespace(string calldata chainNamespace) external view returns (uint256);
    function chainHeightByChainNamespace(string calldata chainNamespace) external view returns (uint256);
    function timestampObservedAtByChainNamespace(string calldata chainNamespace) external view returns (uint256);
}
```

---

## ABI JSON (ethers.js / viem)

### UEA Factory

```ts
const UEA_FACTORY_ABI = [
  'function getOriginForUEA(address) view returns (tuple(string chainNamespace, string chainId, bytes owner), bool)',
  'function getUEAForOrigin(tuple(string chainNamespace, string chainId, bytes owner)) view returns (address, bool)',
];
```

### UGPC

```ts
const UGPC_ABI = [
  'function sendUniversalTxOutbound(tuple(bytes recipient, address token, uint256 amount, uint256 gasLimit, bytes payload, address revertRecipient)) payable',
];
```

### UniversalCore

```ts
const UNIVERSAL_CORE_ABI = [
  'function gasPriceByChainNamespace(string) view returns (uint256)',
  'function chainHeightByChainNamespace(string) view returns (uint256)',
  'function timestampObservedAtByChainNamespace(string) view returns (uint256)',
];
```

---

## Complete ethers.js Setup

```ts
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const wallet   = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

// UEA Factory — read-only
const ueaFactory = new ethers.Contract(
  '0x00000000000000000000000000000000000000eA',
  [
    'function getOriginForUEA(address) view returns (tuple(string,string,bytes), bool)',
    'function getUEAForOrigin(tuple(string,string,bytes)) view returns (address, bool)',
  ],
  provider
);

// UGPC — write (needs signer)
const ugpc = new ethers.Contract(
  '0x00000000000000000000000000000000000000C1',
  ['function sendUniversalTxOutbound(tuple(bytes,address,uint256,uint256,bytes,address)) payable'],
  wallet
);

// UniversalCore — read-only
const universalCore = new ethers.Contract(
  '0x00000000000000000000000000000000000000C0',
  [
    'function gasPriceByChainNamespace(string) view returns (uint256)',
    'function chainHeightByChainNamespace(string) view returns (uint256)',
    'function timestampObservedAtByChainNamespace(string) view returns (uint256)',
  ],
  provider
);
```

---

## TX Type Reference (UGPC)

| `token` | `payload` | TX type | Effect |
|---|---|---|---|
| `address(0)` | non-empty | `GAS_AND_PAYLOAD` | Execute calldata on external chain |
| non-zero | empty | `FUNDS` | Bridge tokens only |
| non-zero | non-empty | `FUNDS_AND_PAYLOAD` | Bridge tokens + execute atomically |
| `address(0)` | empty | — | **Reverts** |

---

## `executeUniversalTx` Callback Signature

```solidity
// Implement this in your Push Chain contract to receive inbound results.
// MUST guard with UNIVERSAL_EXECUTOR_MODULE check and txId replay protection.
function executeUniversalTx(
    string  calldata sourceChainNamespace, // e.g. "eip155:97" (BNB Testnet)
    bytes   calldata ceaAddress,           // CEA address on source chain (bytes)
    bytes   calldata payload,              // ABI-encoded result data from external chain
    uint256          amount,               // PRC20 amount received (0 if no bridge)
    address          prc20,               // PRC20 token on Push Chain (if bridged)
    bytes32          txId                 // unique ID — MUST use for replay protection
) external payable;
```

---

## Source

- IUEAFactory: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/Interfaces/IUEAFactory.sol
- UGPC: https://github.com/pushchain/push-chain-gateway-contracts/blob/main/contracts/evm-gateway/src/UniversalGatewayPC.sol
- UniversalCore: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/UniversalCore.sol
- Address book: https://push.org/agents/contract-addresses.json
