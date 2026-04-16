# Signer Options Reference — @pushchain/core

> Deep context for `push-backend` skill. Load this file when you need all signer creation methods or a custom signing function.
>
> Drag-and-drop into your project — self-contained, no external dependencies required beyond `@pushchain/core`.
>
> See also: `references/send-universal-transaction.md` for all `sendTransaction` args, receipt fields, cascade pattern, and CONSTANTS.

---

## All Signer Creation Methods

### 1. ethers.js Wallet

```ts
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

// Option A — with provider (recommended for sending txs)
const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const wallet   = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const signer   = await PushChain.utils.signer.toUniversal(wallet);

// Option B — without provider (signing only, no RPC calls from ethers)
const walletNoProvider = new ethers.Wallet(process.env.PRIVATE_KEY!);
const signerNoProvider = await PushChain.utils.signer.toUniversal(walletNoProvider);
```

### 2. viem WalletClient

```ts
import { PushChain } from '@pushchain/core';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

const account      = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const walletClient = createWalletClient({
  account,
  transport: http('https://evm.donut.rpc.push.org/'),
});

const signer = await PushChain.utils.signer.toUniversal(walletClient);
```

### 3. Solana Keypair

```ts
import { PushChain } from '@pushchain/core';
import { Keypair } from '@solana/web3.js';

// From JSON array (e.g. ~/.config/solana/id.json)
const keypair = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(process.env.SOLANA_KEY!))
);
const signer = await PushChain.utils.signer.toUniversalFromKeypair(keypair);
```

### 4. Custom Signer (`construct`)

Use when you have a custom signing function (hardware wallet, KMS, MPC, etc.):

```ts
import { PushChain, CONSTANTS } from '@pushchain/core';

const signer = await PushChain.utils.signer.construct(
  '0xYourWalletAddress',               // address
  CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,    // origin chain
  async (message: Uint8Array): Promise<Uint8Array> => {
    // Your custom signing logic — must return raw signature bytes
    const sig = await yourKmsOrHardwareWallet.sign(message);
    return sig;
  }
);
```

---

## Signer Methods Quick Reference

| Library | Method | Notes |
|---|---|---|
| ethers.js `Wallet` | `toUniversal(wallet)` | With or without provider |
| viem `WalletClient` | `toUniversal(walletClient)` | Requires `privateKeyToAccount` |
| Solana `Keypair` | `toUniversalFromKeypair(keypair)` | Devnet + Mainnet |
| Any custom | `construct(address, chain, signFn)` | KMS, hardware wallet, MPC |

## Docs

- Signer reference: https://push.org/docs/chain/build/create-universal-signer/
