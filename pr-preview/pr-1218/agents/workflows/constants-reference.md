# Constants Reference

## Purpose

Reference all constants in `PushChain.CONSTANTS` — network identifiers, chain IDs, library names, moveable tokens, and payable tokens — to build type-safe Push Chain integrations.

## When to Use

- Selecting the right network when calling `PushChain.initialize()`
- Specifying origin/target chains in transactions and signer creation
- Choosing which tokens to move or use for gas payment
- Specifying library types for non-EVM keypair conversion

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Package installed | `@pushchain/core` version ≥1.0.0 |
| Import | `import { PushChain } from '@pushchain/core'` |

## Network Constants

**`PushChain.CONSTANTS.PUSH_NETWORK`**

| Constant | Value | Description |
|----------|-------|-------------|
| `PUSH_NETWORK.MAINNET` | `'MAINNET'` | Push Chain mainnet |
| `PUSH_NETWORK.TESTNET` | `'TESTNET'` | Points to latest testnet (use this for development) |
| `PUSH_NETWORK.TESTNET_DONUT` | `'TESTNET_DONUT'` | Donut Testnet (specific version) |
| `PUSH_NETWORK.LOCALNET` | `'LOCALNET'` | Local development environment |

```typescript
import { PushChain } from '@pushchain/core';

const client = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});
```

## Chain Constants

**`PushChain.CONSTANTS.CHAIN`** — CAIP-2 format identifiers

| Constant | CAIP-2 Value | Description |
|----------|-------------|-------------|
| `CHAIN.PUSH_TESTNET` | `eip155:42101` | Push Chain testnet (latest) |
| `CHAIN.PUSH_TESTNET_DONUT` | `eip155:42101` | Push Chain Donut Testnet |
| `CHAIN.PUSH_LOCALNET` | `eip155:9001` | Push Chain local dev |
| `CHAIN.ETHEREUM_MAINNET` | `eip155:1` | Ethereum mainnet |
| `CHAIN.ETHEREUM_SEPOLIA` | `eip155:11155111` | Ethereum Sepolia testnet |
| `CHAIN.ARBITRUM_SEPOLIA` | `eip155:421614` | Arbitrum Sepolia testnet |
| `CHAIN.BASE_SEPOLIA` | `eip155:84532` | Base Sepolia testnet |
| `CHAIN.BNB_TESTNET` | `eip155:97` | BNB Chain testnet |
| `CHAIN.SOLANA_MAINNET` | `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` | Solana mainnet-beta |
| `CHAIN.SOLANA_TESTNET` | `solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z` | Solana testnet |
| `CHAIN.SOLANA_DEVNET` | `solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1` | Solana devnet |

```typescript
// Convert address to UniversalAccount
const account = PushChain.utils.account.toUniversal(address, {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});

// Multichain target
await pushChainClient.universal.sendTransaction({
  to: { address: '0xContract', chain: PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA },
});
```

## Library Constants

**`PushChain.CONSTANTS.LIBRARY`** — used with `toUniversalFromKeypair`

| Constant | Value | Description |
|----------|-------|-------------|
| `LIBRARY.ETHEREUM_ETHERSV6` | `'ethers-v6'` | Ethers.js v6 |
| `LIBRARY.ETHEREUM_VIEM` | `'viem'` | Viem |
| `LIBRARY.SOLANA_WEB3JS` | `'solana-web3js'` | Solana Web3.js |

```typescript
import { Keypair } from '@solana/web3.js';

const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(keypair, {
  chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
  library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
});
```

## Moveable Token Constants

**`PushChain.CONSTANTS.MOVEABLE.TOKEN`** — tokens that can be transferred cross-chain via `tx.funds`

### Ethereum Sepolia
| Constant | Token |
|----------|-------|
| `MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH` | Native ETH |
| `MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT` | Tether USD |
| `MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDC` | USD Coin |
| `MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.WETH` | Wrapped ETH |
| `MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.stETH` | Staked ETH (Lido) |

### Arbitrum Sepolia
| Constant | Token |
|----------|-------|
| `MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.ETH` | Native ETH |
| `MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDT` | Tether USD |
| `MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDC` | USD Coin |
| `MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.WETH` | Wrapped ETH |

### Base Sepolia
| Constant | Token |
|----------|-------|
| `MOVEABLE.TOKEN.BASE_SEPOLIA.ETH` | Native ETH |
| `MOVEABLE.TOKEN.BASE_SEPOLIA.USDT` | Tether USD |
| `MOVEABLE.TOKEN.BASE_SEPOLIA.USDC` | USD Coin |
| `MOVEABLE.TOKEN.BASE_SEPOLIA.WETH` | Wrapped ETH |

### BNB Testnet
| Constant | Token |
|----------|-------|
| `MOVEABLE.TOKEN.BNB_TESTNET.ETH` | Native ETH |
| `MOVEABLE.TOKEN.BNB_TESTNET.USDT` | Tether USD |

### Solana Devnet
| Constant | Token |
|----------|-------|
| `MOVEABLE.TOKEN.SOLANA_DEVNET.SOL` | Native SOL |
| `MOVEABLE.TOKEN.SOLANA_DEVNET.USDT` | Tether USD |
| `MOVEABLE.TOKEN.SOLANA_DEVNET.USDC` | USD Coin |

### Push Testnet Donut (received tokens on Push Chain)
| Constant | Description |
|----------|-------------|
| `MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEth` | Push-wrapped ETH from Ethereum |
| `MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthArb` | Push-wrapped ETH from Arbitrum |
| `MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthBase` | Push-wrapped ETH from Base |
| `MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol` | Push-wrapped SOL from Solana |
| `MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.eth` | Push-wrapped USDT from Ethereum |
| `MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.eth` | Push-wrapped USDC from Ethereum |

```typescript
// Move 100 USDT from Ethereum Sepolia into Push Chain
await pushChainClient.universal.sendTransaction({
  to: '0xRecipient',
  funds: {
    amount: PushChain.utils.helpers.parseUnits('100', 6),
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
  },
});
```

## Payable Token Constants

**`PushChain.CONSTANTS.PAYABLE.TOKEN`** — tokens accepted for gas fee payment via `tx.payGasWith`

| Chain | Tokens Available |
|-------|----------------|
| Ethereum Sepolia | ETH, USDT, USDC, WETH, stETH |
| Arbitrum Sepolia | ETH, USDT, USDC |
| Base Sepolia | ETH, USDT, USDC |
| BNB Testnet | BNB, USDT |
| Solana Devnet | SOL, USDT, USDC |

```typescript
// Pay gas with USDT instead of native token
await pushChainClient.universal.sendTransaction({
  to: '0xRecipient',
  value: PushChain.utils.helpers.parseUnits('0.1', 18),
  payGasWith: {
    token: PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
    slippageBps: 100, // 1% slippage tolerance
  },
});
```

## Common Patterns

```typescript
import { PushChain } from '@pushchain/core';

// 1. Check available networks
console.log(PushChain.CONSTANTS.PUSH_NETWORK);

// 2. List all chain keys
console.log(Object.keys(PushChain.CONSTANTS.CHAIN));

// 3. Get supported chains for testnet
const chains = PushChain.utils.chains.getSupportedChains(
  PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
);
```

## Agent Notes

- **`PUSH_NETWORK.TESTNET` vs `TESTNET_DONUT`**: `TESTNET` always points to the latest testnet version; prefer `TESTNET` for development code.
- **CAIP-2 format**: all `CHAIN` constants use CAIP-2 format (`namespace:chainId`). This is what appears in `universalSigner.account.chain`.
- **MOVEABLE vs PAYABLE**: `MOVEABLE.TOKEN` is for `tx.funds` (what you move); `PAYABLE.TOKEN` is for `tx.payGasWith` (how you pay gas).
- **Solana addresses are hex-encoded on-chain**: when reading origin addresses via UEAFactory, Solana addresses come back as hex and must be base58-decoded.

## MCP Mapping Candidates

- `list_supported_chains` — Return all `CHAIN` constants for a network
- `get_chain_constant` — Look up the CAIP-2 string for a named chain
- `get_network_constant` — Look up PUSH_NETWORK value by name
