# Create Universal Signer

## Purpose

Wrap any EVM or non-EVM signer (Ethers.js, Viem, Solana) into a `UniversalSigner` - the chain-agnostic signing interface required by `PushChain.initialize()` and all transaction operations.

## When to Use

- Before initializing `PushChainClient` (required first step)
- When building server-side scripts with private keys
- When supporting multiple wallet types in one app
- When integrating a non-EVM chain (e.g., Solana)
- When implementing a custom signing scheme

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Package installed | `@pushchain/core` version ≥1.0.0 |
| Signer ready | Ethers `Wallet`/`Signer`, Viem `WalletClient`, Solana `Keypair`, or custom skeleton |
| RPC URL | Provider connected to origin chain |

## Inputs

### `toUniversal` (EVM signers)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `signer` | `ethers.Wallet` \| `ethers.Signer` \| `viem.WalletClient` \| `UniversalSignerSkeleton` | Yes | Source signer to convert |

### `toUniversalFromKeypair` (non-EVM signers)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `keypair` | `Keypair` | Yes | Solana keypair or equivalent |
| `options.chain` | `PushChain.CONSTANTS.CHAIN` | Yes | Origin chain constant |
| `options.library` | `PushChain.CONSTANTS.LIBRARY` | Yes | Library constant (e.g., `SOLANA_WEB3JS`) |

## Steps

### For Ethers.js (v5 / v6)

1. **Import dependencies**
   ```typescript
   import { PushChain } from '@pushchain/core';
   import { ethers } from 'ethers';
   ```

2. **Create provider and wallet**
   ```typescript
   const provider = new ethers.JsonRpcProvider('https://gateway.tenderly.co/public/sepolia');
   // Never hardcode - load from env; never log the key
   const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
   ```

3. **Convert to UniversalSigner**
   ```typescript
   const universalSigner = await PushChain.utils.signer.toUniversal(wallet);
   ```

> **Note:** The RPC URL determines the origin chain. Sepolia RPC → Ethereum Sepolia; Donut RPC → Push Chain Testnet.

### For Viem

1. **Import dependencies**
   ```typescript
   import { PushChain } from '@pushchain/core';
   import { createWalletClient, http } from 'viem';
   import { privateKeyToAccount } from 'viem/accounts';
   import { sepolia } from 'viem/chains';
   ```

2. **Create wallet client**
   ```typescript
   // Never hardcode - load from env; never log the key
   const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
   const walletClient = createWalletClient({
     account,
     chain: sepolia,
     transport: http(),
   });
   ```

3. **Convert to UniversalSigner**
   ```typescript
   const universalSigner = await PushChain.utils.signer.toUniversal(walletClient);
   ```

### For Solana (Web3.js)

1. **Import dependencies**
   ```typescript
   import { PushChain } from '@pushchain/core';
   import { Keypair } from '@solana/web3.js';
   ```

2. **Load or generate keypair**
   ```typescript
   const keypair = Keypair.generate();
   // Or: Keypair.fromSecretKey(Uint8Array.from([...]));
   ```

3. **Convert using toUniversalFromKeypair**
   ```typescript
   const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(keypair, {
     chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
     library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS, // SOLANA_WEB3JS is the relevant LIBRARY constant for toUniversalFromKeypair
   });
   ```

> **Note:** All `LIBRARY` constants: see https://push.org/agents/workflows/constants-reference.md#library-constants

### Custom Signer (any wallet SDK)

1. **Construct skeleton manually**
   ```typescript
   const skeleton = PushChain.utils.signer.construct(
     {
       address: '0xYourAddress',
       chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
     },
     {
       signAndSendTransaction: async (unsignedTx: Uint8Array) => {
         // implement signing + broadcast
         return signedTxBytes;
       },
       signMessage: async (data: Uint8Array) => {
         return signatureBytes;
       },
       signTypedData: async (params) => {
         return signatureBytes;
       },
     }
   );
   ```

2. **Convert skeleton to UniversalSigner**
   ```typescript
   const universalSigner = await PushChain.utils.signer.toUniversal(skeleton);
   ```

## Expected Output

```typescript
// UniversalSigner object
{
  account: {
    address: '0xC8AE31cF444CAB447921277c4DcF65128d5B25a8',
    chain: 'eip155:11155111'   // CAIP-2 chain identifier
  },
  signMessage: [AsyncFunction],
  signAndSendTransaction: [AsyncFunction],
  signTypedData: [AsyncFunction]
}
```

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `toUniversal is not a function` | Wrong import path | Use `PushChain.utils.signer.toUniversal` |
| `Cannot read properties of undefined (reading 'getAddress')` | Signer has no provider | Connect wallet to provider: `wallet.connect(provider)` |
| `Unsupported library` | Library constant mismatch | Use `PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS` for Solana |
| `Invalid chain identifier` | Unknown chain string passed | Use constants from `PushChain.CONSTANTS.CHAIN.*` |

## Agent Notes

- **Chain is derived from RPC, not set explicitly** for EVM signers: the provider URL determines origin chain.
- **`toUniversal` wraps, not copies** - it adapts the underlying signer's signing functions into a unified interface.
- **Skeleton approach is for exotic signers**: hardware wallets, MPC wallets, or custom key management.
- **Result is required for `PushChain.initialize()`** - pass this `universalSigner` directly.

## MCP Mapping Candidates

- `convert_ethers_to_universal` - Wrap Ethers.js wallet/signer
- `convert_viem_to_universal` - Wrap Viem WalletClient
- `convert_solana_keypair_to_universal` - Wrap Solana keypair
- `detect_signer_type` - Identify which conversion path to use
