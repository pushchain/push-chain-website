---
title: "Constants Reference"
url: "https://pushchain.github.io/docs/chain/build/constants/"
section: "build"
lastUpdated: "2026-09-23T13:14:19Z"
description: "Constants Reference | Build | Push Chain Docs"
---

# Constants Reference

## Overview

This page provides a comprehensive reference for all constants available in the Push Chain Core SDK (`@pushchain/core`). These constants are used throughout the SDK to ensure type safety and consistency when working with chains, networks, libraries, and other configurations.

All constants are accessed via the `PushChain.CONSTANTS` namespace.

## Push Network

**_`PushChain.CONSTANTS.PUSH_NETWORK`_**

Defines the Push Chain network environments available for initialization.

| Constant | Value | Description |
| --- | --- | --- |
| `PushChain.CONSTANTS.PUSH_NETWORK.MAINNET` | `MAINNET` | Push Chain mainnet environment |
| `PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT` | `TESTNET_DONUT` | Push Chain testnet environment (Donut) |
| `PushChain.CONSTANTS.PUSH_NETWORK.TESTNET` | `TESTNET` | Push Chain testnet environment (points to latest testnet) |
| `PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET` | `LOCALNET` | Local development environment |

### Usage Examples

```typescript
import { PushChain } from '@pushchain/core';

// Get supported chains for a network
// Note: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET always points to the latest version of the testnet
const chains = PushChain.utils.chains.getSupportedChains(
  PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
);

// Initialize client with testnet (Donut)
const client = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
});

// Initialize client with localnet
const localClient = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET,
});
```

## Chain Constants

**_`PushChain.CONSTANTS.CHAIN`_**

Defines all supported blockchain chains across the Push Chain ecosystem. These constants are used for chain-specific operations, account conversions, and cross-chain transactions.

| Constant | Chain Namespace | Description |
| --- | --- | --- |
| `PushChain.CONSTANTS.CHAIN.PUSH_TESTNET` | `eip155:42101` | Push Chain testnet, always points to latest version of testnet |
| `PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT` | `eip155:42101` | Push Chain testnet (Donut) |
| `PushChain.CONSTANTS.CHAIN.PUSH_LOCALNET` | `eip155:9001` | Push Chain local development |
| `PushChain.CONSTANTS.CHAIN.ETHEREUM_MAINNET` | `eip155:1` | Ethereum mainnet |
| `PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA` | `eip155:11155111` | Ethereum Sepolia testnet |
| `PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA` | `eip155:421614` | Arbitrum Sepolia testnet |
| `PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA` | `eip155:84532` | Base Sepolia testnet |
| `PushChain.CONSTANTS.CHAIN.BNB_TESTNET` | `eip155:97` | BNB Chain testnet |
| `PushChain.CONSTANTS.CHAIN.SOLANA_MAINNET` | `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` | Solana mainnet-beta |
| `PushChain.CONSTANTS.CHAIN.SOLANA_TESTNET` | `solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z` | Solana testnet |
| `PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET` | `solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1` | Solana devnet |
| `PushChain.CONSTANTS.CHAIN.WEB2` | `web2:https` | Web2 / HTTPS endpoint. A read-only destination for [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/), not a transaction destination |

### Usage Examples

```typescript
import { PushChain } from '@pushchain/core';

// Convert address to UniversalAccount
const account = PushChain.utils.account.toUniversal(address, {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});

// Resolve a CEA back to its controlling origin account (v6 replacement
// for the removed convertExecutorToOrigin / convertExecutorToOriginAccount).
const originInfo = await PushChain.utils.account.resolveControllerAccount(
  executorAddress,
  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
);

// Get explorer URL for specific chain
const explorerUrl = pushChainClient.explorer.getTransactionUrl(txHash, {
  chain: PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA
});
```

## Library Constants

**_`PushChain.CONSTANTS.LIBRARY`_**

Defines the supported blockchain libraries for creating Universal Signers from keypairs.

| Constant | Value | Description |
| --- | --- | --- |
| `PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6` | `'ethers-v6'` | Ethers.js v6 library |
| `PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM` | `'viem'` | Viem library for Ethereum |
| `PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS` | `'solana-web3js'` | Solana Web3.js library |

### Usage Examples

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

// Create Universal Signer with Ethers v6
const wallet = ethers.Wallet.createRandom();
const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(
  wallet,
  {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    library: PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6,
  }
);
```

```typescript
import { PushChain } from '@pushchain/core';
import { Keypair } from '@solana/web3.js';

// Create Universal Signer with Solana Web3.js
const keypair = Keypair.generate();
const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(
  keypair,
  {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
  }
);
```

## Moveable Token Constants

**_`PushChain.CONSTANTS.MOVEABLE.TOKEN`_**

Defines tokens that can be transferred across chains using Push Chain's universal transaction system.

| Constant | Chain | Description |
| --- | --- | --- |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH` | Ethereum Sepolia | Native ETH token |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT` | Ethereum Sepolia | Tether USD stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDC` | Ethereum Sepolia | USD Coin stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.WETH` | Ethereum Sepolia | Wrapped ETH |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.stETH` | Ethereum Sepolia | Staked ETH (Lido) |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.ETH` | Arbitrum Sepolia | Native ETH token |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDT` | Arbitrum Sepolia | Tether USD stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDC` | Arbitrum Sepolia | USD Coin stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.WETH` | Arbitrum Sepolia | Wrapped ETH |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.ETH` | Base Sepolia | Native ETH token |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDT` | Base Sepolia | Tether USD stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDC` | Base Sepolia | USD Coin stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.WETH` | Base Sepolia | Wrapped ETH |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.BNB` | BNB Testnet | Native BNB token |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDT` | BNB Testnet | Tether USD stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDC` | BNB Testnet | USD Coin stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL` | Solana Devnet | Native SOL token |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDT` | Solana Devnet | Tether USD stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDC` | Solana Devnet | USD Coin stablecoin |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEth` | Push Testnet Donut | Push-wrapped ETH from Ethereum |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthArb` | Push Testnet Donut | Push-wrapped ETH from Arbitrum |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthBase` | Push Testnet Donut | Push-wrapped ETH from Base |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pBnb` | Push Testnet Donut | Push-wrapped BNB from BNB Chain |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol` | Push Testnet Donut | Push-wrapped SOL from Solana |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.eth` | Push Testnet Donut | Push-wrapped USDT from Ethereum |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.arb` | Push Testnet Donut | Push-wrapped USDT from Arbitrum |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.base` | Push Testnet Donut | Push-wrapped USDT from Base |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.bnb` | Push Testnet Donut | Push-wrapped USDT from BNB Chain |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.sol` | Push Testnet Donut | Push-wrapped USDT from Solana |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.eth` | Push Testnet Donut | Push-wrapped USDC from Ethereum |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.arb` | Push Testnet Donut | Push-wrapped USDC from Arbitrum |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.base` | Push Testnet Donut | Push-wrapped USDC from Base |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.bsc` | Push Testnet Donut | Push-wrapped USDC from BNB Chain (renamed from `.bnb` in SDK v6.0.1; `.bnb` still resolves but is `@deprecated`) |
| `PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.sol` | Push Testnet Donut | Push-wrapped USDC from Solana |

### Usage Examples

```typescript
import { PushChain } from '@pushchain/core';

// Move USDT from Ethereum Sepolia to Push Chain
const txHash = await pushChainClient.universal.sendTransaction({
  to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',
  funds: {
    amount: PushChain.utils.helpers.parseUnits('100', 6), // 100 USDT
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
  },
});

// Move SOL from Solana to Push Chain
const solTxHash = await pushChainClient.universal.sendTransaction({
  to: 'FNDJWigdNWsmxXYGrFV2gCvioLYwXnsVxZ4stL33wFHf',
  funds: {
    amount: PushChain.utils.helpers.parseUnits('1', 9), // 1 SOL
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL,
  },
});
```

## Payable Token Constants

**_`PushChain.CONSTANTS.PAYABLE.TOKEN`_**

Defines tokens that can be used to pay for gas fees on Push Chain transactions.

| Constant | Chain | Description |
| --- | --- | --- |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.ETH` | Ethereum Sepolia | Native ETH token |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT` | Ethereum Sepolia | Tether USD stablecoin |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDC` | Ethereum Sepolia | USD Coin stablecoin |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH` | Ethereum Sepolia | Wrapped ETH |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.stETH` | Ethereum Sepolia | Staked ETH (Lido) |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.ETH` | Arbitrum Sepolia | Native ETH token |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDT` | Arbitrum Sepolia | Tether USD stablecoin |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDC` | Arbitrum Sepolia | USD Coin stablecoin |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.ETH` | Base Sepolia | Native ETH token |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDT` | Base Sepolia | Tether USD stablecoin |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDC` | Base Sepolia | USD Coin stablecoin |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.BNB` | BNB Testnet | Native BNB token |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDT` | BNB Testnet | Tether USD stablecoin |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDC` | BNB Testnet | USD Coin stablecoin |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.SOL` | Solana Devnet | Native SOL token |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDT` | Solana Devnet | Tether USD stablecoin |
| `PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDC` | Solana Devnet | USD Coin stablecoin |

### Usage Examples

```typescript
import { PushChain } from '@pushchain/core';

// Pay gas fees with USDT instead of native token
const txHash = await pushChainClient.universal.sendTransaction({
  to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',
  value: PushChain.utils.helpers.parseUnits('0.1', 18),
  payGasWith: {
    token: PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
    slippageBps: 100, // 1% slippage tolerance
  },
});

// Pay gas with USDC on Arbitrum
const arbTxHash = await pushChainClient.universal.sendTransaction({
  to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',
  value: PushChain.utils.helpers.parseUnits('0.05', 18),
  payGasWith: {
    token: PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDC,
    slippageBps: 50, // 0.5% slippage tolerance
  },
});
```

## Read Constants

**_`PushChain.CONSTANTS.READ`_**

Values used by [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/). Use them to compare a read's status and outcome, and to find the contracts that receive reads on Push Chain.

| Constant | Value | Description |
| --- | --- | --- |
| `PushChain.CONSTANTS.READ.UNIVERSAL_READ_REGISTRY_ADDRESS.TESTNET_DONUT` | `0x00000000000000000000000000000000000000b2` | Universal Read Registry. The default receiver when a read passes no callback; it stores every result by request ID |
| `PushChain.CONSTANTS.READ.UNIVERSAL_CALLBACK_ADDRESSES.TESTNET_DONUT` | `0x00000000000000000000000000000000000000c2` | Universal Callback. Accepts read requests and delivers results to receivers |
| `PushChain.CONSTANTS.READ.WEB2` | `web2:https` | Web2 read destination. Same as `PushChain.CONSTANTS.CHAIN.WEB2` |
| `PushChain.CONSTANTS.READ.DEFAULT_EXPIRY_BLOCKS` | `300n` | Push blocks a request stays open before it expires |
| `PushChain.CONSTANTS.READ.REGISTRY_CALLBACK_GAS` | `500000n` | Callback gas the registry receiver uses by default |
| `PushChain.CONSTANTS.READ.MAX_CALLBACK_GAS_LIMIT` | `1000000n` | Highest callback gas a read can declare |

**_`PushChain.CONSTANTS.READ.OUTCOME`_**

One field that answers "did the read work". Check `outcome` before trusting `value`.

| Constant | Meaning |
| --- | --- |
| `SUCCESS` | The source read succeeded, the callback ran, and `value` is set |
| `SOURCE_ERROR` | The destination chain or URL returned an error. See `raw.errorCode` |
| `CALLBACK_FAILED` | The receiver callback reverted or ran out of gas. See `callbackFailReason` |
| `DECODE_FAILED` | The result arrived but did not match the expected shape. See `decodeError` |
| `EXPIRED` | Validators did not agree before the request expired. The budget is refunded |
| `FAILED` | The request was settled another way on-chain |
| `ABORTED` | The request was aborted |
| `PENDING` | The read has not finished yet |
| `UNKNOWN` | Fulfilled, but delivery could not be confirmed because the fulfil receipt was unavailable |

**_`PushChain.CONSTANTS.READ.STATUS`_** is the raw lifecycle status: `PENDING` (1), `VOTING` (2), `FULFILLED` (3), `EXPIRED` (4), `FAILED` (5), `ABORTED` (6). `FULFILLED` only means the result transaction landed, so prefer `OUTCOME`. **_`PushChain.CONSTANTS.READ.RESULT_STATUS`_** is the validators' result: `SUCCESS` (1) or `ERROR` (2).

### Usage Examples

```typescript
import { PushChain } from '@pushchain/core';

const READ = PushChain.CONSTANTS.READ;

const result = await pushChainClient.universal.read('0x000000000000000000000000000000000000dEaD', {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});

if (result.outcome === READ.OUTCOME.SUCCESS) {
  console.log('Balance:', result.value);
} else {
  console.log('Read did not succeed:', result.outcome);
}

// Where reads without a callback are stored
console.log(READ.UNIVERSAL_READ_REGISTRY_ADDRESS.TESTNET_DONUT);
```

## Common Patterns

### Chain Selection

When working with multiple chains, use the CHAIN constants to ensure consistency:

```typescript
// Define supported chains for your app
const SUPPORTED_CHAINS = [
  PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
  PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA,
  PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA,
  PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
];

// Get chain-specific configuration
function getChainConfig(chain: string) {
  switch (chain) {
    case PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA:
      return { rpc: 'https://sepolia.gateway.tenderly.co', explorer: 'https://sepolia.etherscan.io' };
    case PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET:
      return { rpc: 'https://api.devnet.solana.com', explorer: 'https://explorer.solana.com' };
    // ... more chains
  }
}
```

### Network-Specific Initialization

```typescript
// Development environment
if (process.env.NODE_ENV === 'development') {
  const client = await PushChain.initialize(signer, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET,
  });
}

// Production/Testnet environment
if (process.env.NODE_ENV === 'production') {
  const client = await PushChain.initialize(signer, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
  });
}
```

### Library Detection

```typescript
import { ethers } from 'ethers';
import * as viem from 'viem';

function detectLibrary(signer: any) {
  if (signer instanceof ethers.Wallet) {
    return PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6;
  } else if (signer.type === 'viem') {
    return PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM;
  }
  // ... more detection logic
}
```

## Type Safety

All constants are strongly typed in TypeScript. When using TypeScript, you'll get autocomplete and type checking:

```typescript
import { PushChain } from '@pushchain/core';

// TypeScript will autocomplete available chains
const chain: typeof PushChain.CONSTANTS.CHAIN = 
  PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA;

// TypeScript will catch invalid values
const invalidChain = PushChain.CONSTANTS.CHAIN.INVALID; // ❌ Type error
```

## Next Steps

-   Learn how to [initialize the Push Chain client](/push-chain-website/pr-preview/pr-1244/docs/chain/build/initialize-push-chain-client/)
-   Explore [utility functions](/push-chain-website/pr-preview/pr-1244/docs/chain/build/utility-functions/) that use these constants
-   Build [universal transactions](/push-chain-website/pr-preview/pr-1244/docs/chain/build/send-universal-transaction/) across chains
