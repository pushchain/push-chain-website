# Initialize Push Chain Client

## Purpose

Create a fully-configured `PushChainClient` instance that can send universal transactions, sign messages, and interact with Push Chain from any supported wallet (EVM or non-EVM).

## When to Use

- At application startup when a user connects their wallet
- When switching accounts or chains in a multi-wallet application
- Before any operation requiring `pushChainClient` (transactions, signing, reading account state)
- After obtaining a signer from UI Kit hooks or external wallet libraries

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Package installed | `@pushchain/core` version ≥1.0.0 |
| Signer available | Ethers.js `Wallet`/`Signer`, Viem `WalletClient`, or Solana `Keypair` |
| Network connectivity | RPC access to origin chain (for signer) and Push Chain |

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `signer` | `ethers.Wallet` \| `ethers.Signer` \| `viem.WalletClient` \| `Keypair` \| `UniversalSignerSkeleton` | Yes | The chain-native signer to wrap |
| `options.network` | `PushChain.CONSTANTS.PUSH_NETWORK` | Yes | Target network (`TESTNET` or `MAINNET`) |
| `options.rpcUrls` | `Partial<Record<CHAIN, string[]>>` | No | Custom RPC endpoints per chain |
| `options.blockExplorers` | `Partial<Record<CHAIN, string[]>>` | No | Custom explorer URLs per chain |
| `options.printTraces` | `boolean` | No | Enable debug logging (default: `false`) |
| `options.progressHook` | `(progress: ProgressEvent) => void` | No | Callback for initialization progress events |

## Steps

### For Ethers.js (v5 or v6)

1. **Import dependencies**
   ```typescript
   import { PushChain } from '@pushchain/core';
   import { ethers } from 'ethers';
   ```

2. **Create or obtain the ethers signer**
   ```typescript
   const provider = new ethers.JsonRpcProvider('https://gateway.tenderly.co/public/sepolia');
   const wallet = new ethers.Wallet('<PRIVATE_KEY>', provider);
   // Or: const signer = provider.getSigner(); // for browser wallets
   ```

3. **Convert to UniversalSigner**
   ```typescript
   const universalSigner = await PushChain.utils.signer.toUniversal(wallet);
   ```

4. **Initialize PushChainClient**
   ```typescript
   const pushChainClient = await PushChain.initialize(universalSigner, {
     network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
   });
   ```

5. **Verify initialization**
   ```typescript
   console.log('Origin:', pushChainClient.universal.origin);
   console.log('Execution Account:', pushChainClient.universal.account);
   ```

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
   const account = privateKeyToAccount('<PRIVATE_KEY>');
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

4. **Initialize PushChainClient**
   ```typescript
   const pushChainClient = await PushChain.initialize(universalSigner, {
     network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
   });
   ```

### For Solana

1. **Import dependencies**
   ```typescript
   import { PushChain } from '@pushchain/core';
   import { Keypair } from '@solana/web3.js';
   ```

2. **Create or load keypair**
   ```typescript
   const keypair = Keypair.generate();
   // Or: Keypair.fromSecretKey(Uint8Array.from([...]));
   ```

3. **Convert to UniversalSigner using toUniversalFromKeypair**
   ```typescript
   const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(keypair, {
     chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
     library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
   });
   ```

4. **Initialize PushChainClient**
   ```typescript
   const pushChainClient = await PushChain.initialize(universalSigner, {
     network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
   });
   ```

### Read-Only Mode (No Signing)

1. **Create UniversalAccount object**
   ```typescript
   const universalAccount = {
     address: '0x1234567890123456789012345678901234567890',
     chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
   };
   ```

2. **Initialize in read-only mode**
   ```typescript
   const pushChainClient = await PushChain.initialize(universalAccount, {
     network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
   });
   ```

## Expected Output

```typescript
// PushChainClient object structure
{
  orchestrator: Orchestrator { ... },
  universalSigner: {
    account: {
      address: '0xC8AE31cF444CAB447921277c4DcF65128d5B25a8',
      chain: 'eip155:11155111'
    },
    signMessage: [Function],
    signAndSendTransaction: [Function],
    signTypedData: [Function]
  },
  blockExplorers: { 'eip155:42101': ['https://donut.push.network'] },
  universal: {
    origin: { address: '0x...', chain: 'eip155:11155111' },   // UOA
    account: { address: '0x...', chain: 'eip155:42101' },     // UEA on Push Chain
    sendTransaction: [Function],
    signMessage: [Function],
    signTypedData: [Function]
  },
  explorer: {
    getTransactionUrl: [Function],
    listUrls: [Function]
  }
}
```

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `Cannot read properties of undefined (reading 'getAddress')` | Signer not connected to provider | Ensure signer has provider: `wallet.connect(provider)` |
| `Invalid chain identifier` | Unsupported chain in RPC or signer | Use supported chain from `PushChain.CONSTANTS.CHAIN.*` |
| `Network mismatch` | Signer RPC doesn't match expected chain | Verify RPC URL corresponds to intended chain |
| `toUniversal is not a function` | Wrong import or SDK version | Verify import: `PushChain.utils.signer.toUniversal` |
| `Restricted call blocked` (read-only mode) | Attempting sign/send on read-only client | Initialize with `UniversalSigner` instead of `UniversalAccount` for write operations |

## Agent Notes

- **Chain detection is automatic**: The RPC URL of the signer determines the origin chain. No manual chain ID needed.
- **UEA is lazily deployed**: The Universal Executor Account deploys automatically on first transaction, not during initialization.
- **Cache the client**: Store `pushChainClient` in application state; avoid re-initializing on every operation.
- **Check account status for upgrades**: After initialization, call `pushChainClient.getAccountStatus()` to detect if UEA upgrade is required.
- **Prefer UI Kit for frontend**: `@pushchain/ui-kit` handles signer creation automatically via `usePushChainClient()` hook.

## MCP Mapping Candidates

- `create_universal_signer_ethers` — Wrap ethers signer into UniversalSigner
- `create_universal_signer_viem` — Wrap viem WalletClient into UniversalSigner
- `create_universal_signer_solana` — Wrap Solana keypair into UniversalSigner
- `initialize_push_chain_client` — Execute full initialization sequence
- `get_account_status` — Check UEA deployment and version state