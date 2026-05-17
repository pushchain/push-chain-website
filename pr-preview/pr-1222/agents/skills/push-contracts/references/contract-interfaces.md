# Contract Interfaces Reference - Push Chain Donut Testnet

> Deep context for `push-contracts` skill. Load this file when you need complete inline interfaces, ABI JSON for ethers.js, or all struct definitions in one place.
>
> Drag-and-drop into your project - self-contained, no imports required.

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
    uint256 gasPrice;        // 0 = per-chain default from UniversalCore (new in SDK v6)
    uint256 maxPCForGas;     // 0 = no cap on PC the AMM may spend on the gas swap (new in SDK v6)
    bytes   payload;         // ABI-encoded calldata for target contract
    address revertRecipient; // receives bridged funds back if external tx reverts
}

interface IUniversalGatewayPC {
    // msg.value must cover protocol fee + estimated gas on external chain
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

// ── IUniversalCore ───────────────────────────────────────────────────────────
// Use ONLY for reading chain state - not for fee estimation in contracts

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

// UEA Factory - read-only
const ueaFactory = new ethers.Contract(
  '0x00000000000000000000000000000000000000eA',
  [
    'function getOriginForUEA(address) view returns (tuple(string,string,bytes), bool)',
    'function getUEAForOrigin(tuple(string,string,bytes)) view returns (address, bool)',
  ],
  provider
);

// UGPC - write (needs signer)
const ugpc = new ethers.Contract(
  '0x00000000000000000000000000000000000000C1',
  ['function sendUniversalTxOutbound(tuple(bytes,address,uint256,uint256,bytes,address)) payable'],
  wallet
);

// UniversalCore - read-only
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
| `address(0)` | empty | - | **Reverts** |

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
    bytes32          txId                 // unique ID - MUST use for replay protection
) external payable;
```

> Push Chain exposes a separate 2-arg overload `executeUniversalTx(UniversalPayload, bytes)` for **UEA proxy accounts**. For Push-native contracts (the kind you write), TSS always dispatches the 6-arg signature above. Implement only the 6-arg version.

---

## Round-Trip: CEA Self-Call to `sendUniversalTxToUEA`

When the destination CEA's payload should automatically trigger an inbound back to the originating Push contract, encode the outer multicall as a self-call to the CEA's `sendUniversalTxToUEA`. This is the SDK's Route 3 wire format.

```solidity
// Build the inner UniversalPayload (vType=1 = inbound to Push UEA).
bytes memory innerMulticallData = abi.encodePacked(
    bytes4(keccak256("UEA_MULTICALL")),       // = 0x2cc2842d
    abi.encode(/* Multicall[] for Push-side actions, or empty */)
);
bytes memory inboundUniversalPayload = abi.encode(
    address(0), uint256(0), innerMulticallData,
    uint256(1e7), uint256(1e10), uint256(0),
    ueaNonce + 1, uint256(9999999999), uint8(1)  // vType = 1 (inbound)
);

// Wrap in a CEA self-call.
bytes memory ceaSelfCallData = abi.encodeWithSelector(
    bytes4(keccak256("sendUniversalTxToUEA(address,uint256,bytes,address)")),
    address(0), uint256(0), inboundUniversalPayload, address(this)
);

// Outer multicall delivered to the destination CEA.
Multicall[] memory outerCalls = new Multicall[](2);
outerCalls[0] = Multicall({                          // External-chain action
    to: targetOnExternalChain, value: 0, data: actionCalldata
});
outerCalls[1] = Multicall({                          // Self-call → fires back-leg
    to: destinationCEAAddr, value: 0, data: ceaSelfCallData
});
bytes memory outerMulticallData = abi.encodePacked(
    bytes4(keccak256("UEA_MULTICALL")),
    abi.encode(outerCalls)
);

// Dispatch with gasLimit ≥ 2_000_000 - the back-leg is silently dropped below this.
UGPC.sendUniversalTxOutbound{value: protocolFeePc}(UniversalOutboundTxRequest({
    recipient:       abi.encodePacked(destinationCEAAddr),
    token:           pBNB,                   // PRC20 routing token (selects destination chain)
    amount:          0,
    gasLimit:        2_000_000,              // ≥ 2M required for nested gateway calls
    payload:         outerMulticallData,
    revertRecipient: address(this)
}));
```

`sendUniversalTxToUEA` enforces `msg.sender == address(this)` (CEA self-call). The CEA wraps the inner payload and calls its gateway internally; TSS observes the gateway event and delivers `executeUniversalTx` (6-arg) on the originating Push contract.

---

## Solana Outbound Value Sizing (contract-initiated)

When dispatching to Solana from a Push contract (`token = pSOL`), `msg.value` must cover the on-chain $PC → pSOL Uniswap V3 swap. Compute the right value off-chain and store it on the contract before kickoff:

```ts
// Mirrors @pushchain/core/src/lib/orchestrator/internals/gas-calculator.js#estimateNativeValueForSwap
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
  universalCore.WPC(),
  universalCore.uniswapV3Factory(),
  universalCore.defaultFeeTier(gasToken),
]);
const factory = new ethers.Contract(factoryAddr, ['function getPool(address, address, uint24) view returns (address)'], provider);
const pool = new ethers.Contract(await factory.getPool(wpc, gasToken, feeTier), ['function slot0() view returns (uint160, int24, uint16, uint16, uint16, uint8, bool)'], provider);
const [sqrtPriceX96] = await pool.slot0();

const Q192 = 1n << 192n;
const priceNum = sqrtPriceX96 * sqrtPriceX96;
const isGasTokenToken0 = gasToken.toLowerCase() < wpc.toLowerCase();
const wpcNeeded = isGasTokenToken0 ? (gasFee * priceNum) / Q192 : (gasFee * Q192) / priceNum;
const valuePc = (wpcNeeded * 2n * 110n) / 100n;  // ×2 swap buffer × 1.1 executor buffer
```

UGPC refunds surplus; over-sizing is safe. A flat `balance/2` reverts with `STF`. Donut Testnet's PC↔pSOL pool is currently shallow - quote can be high relative to a contract's working balance.

---

## Source

- IUEAFactory: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/Interfaces/IUEAFactory.sol
- UGPC: https://github.com/pushchain/push-chain-gateway-contracts/blob/main/contracts/evm-gateway/src/UniversalGatewayPC.sol
- UniversalCore: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/UniversalCore.sol
- Address book: https://push.org/agents/contract-addresses.json
