# Signer Options Reference — @pushchain/core

> Deep context for `push-backend` skill. Load this file when you need all signer creation methods or a custom signing function.
>
> See also: `references/initialize-client.md` for `PushChain.initialize`, read-only mode, reinitialize, and account management.
> See also: `references/send-universal-transaction.md` for all `sendTransaction` args, receipt fields, and routing.

**Key rule: the RPC URL determines the origin chain.** The same `toUniversal()` call works for Ethereum Sepolia, BNB Testnet, Push Chain, or any EVM chain — just point the provider at the right RPC. No chain parameter needed for EVM signers.

---

## Primary Method — `toUniversal`

**`PushChain.utils.signer.toUniversal(signer)` → `Promise<UniversalSigner>`**

The primary way to create a `UniversalSigner`. Wraps any supported EVM or Solana signer into the unified format accepted by `PushChain.initialize`.

| Argument | Type | Description |
|---|---|---|
| `signer` | `ethers.Wallet \| viem.WalletClient \| UniversalSignerSkeleton` | The native signer to convert |

**Returns `UniversalSigner`:**

```ts
{
  account: {
    address: '0x32DE7d63C654d18F1382f5a30Ef69CB86b399ac7',
    chain: 'eip155:11155111'   // CAIP-2 chain identifier, derived from RPC URL
  },
  signMessage: [Function],
  signAndSendTransaction: [Function],
  signTypedData: [Function]
}
```

This `UniversalSigner` is passed directly to `PushChain.initialize(universalSigner, options)`.

---

## All Signer Creation Methods

### 1. ethers.js Wallet

```ts
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

// RPC URL picks the origin chain:
const provider = new ethers.JsonRpcProvider('https://sepolia.gateway.tenderly.co'); // → Ethereum Sepolia
// const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');  // → Push Chain Testnet
// const provider = new ethers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'); // → BNB Testnet

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const universalSigner = await PushChain.utils.signer.toUniversal(wallet);
```

### 2. viem WalletClient

```ts
import { PushChain } from '@pushchain/core';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

// Transport RPC URL picks the origin chain:
const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const walletClient = createWalletClient({
  account,
  transport: http('https://sepolia.gateway.tenderly.co'), // → Ethereum Sepolia
  // transport: http('https://evm.donut.rpc.push.org/'), // → Push Chain Testnet
});

const universalSigner = await PushChain.utils.signer.toUniversal(walletClient);
```

### 3. Solana Keypair

Solana requires explicit `chain` and `library` options since there is no provider RPC to detect the chain from:

```ts
import { PushChain } from '@pushchain/core';
import { Keypair } from '@solana/web3.js';

const keypair = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(process.env.SOLANA_KEY!))
);
const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(keypair, {
  chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
  library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
});
```

### 4. Custom Signer (`construct`)

**`PushChain.utils.signer.construct(account, options)` → `UniversalSignerSkeleton`**

Use when you have a custom signing function (hardware wallet, KMS, MPC, etc.). Chain must be explicit since there is no provider RPC to derive it from.

| Argument | Type | Required | Description |
|---|---|---|---|
| `account` | `UniversalAccount` | ✓ | `{ address, chain }` — chain must be `PushChain.CONSTANTS.CHAIN.*` |
| `options.signAndSendTransaction` | `(unsignedTx: Uint8Array) => Promise<Uint8Array>` | ✓ | Signs and broadcasts the transaction; returns the tx hash as `Uint8Array` |
| `options.signMessage` | `(data: Uint8Array) => Promise<Uint8Array>` | ✓ | Signs raw message data; returns signature as `Uint8Array` |
| `options.signTypedData` | `(params) => Promise<Uint8Array>` | — | Signs EIP-712 typed data; returns signature as `Uint8Array` |

**Returns `UniversalSignerSkeleton`:**

```ts
{
  signerId: 'CustomGeneratedSigner',
  account: {
    chain: 'eip155:42101',
    address: '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5'
  },
  signMessage: [AsyncFunction],
  signAndSendTransaction: [AsyncFunction],
  signTypedData: [AsyncFunction]
}
```

Pass the skeleton to `toUniversal()` to produce the final `UniversalSigner`:

```ts
import { PushChain } from '@pushchain/core';

const skeleton = PushChain.utils.signer.construct(
  {
    address: '0xYourWalletAddress',
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  },
  {
    signAndSendTransaction: async (tx: Uint8Array): Promise<Uint8Array> => {
      return yourKmsOrHardwareWallet.signAndSend(tx);
    },
    signMessage: async (data: Uint8Array): Promise<Uint8Array> => {
      return yourKmsOrHardwareWallet.sign(data);
    },
    signTypedData: async (params): Promise<Uint8Array> => {
      return yourKmsOrHardwareWallet.signTyped(params);
    },
  }
);
const universalSigner = await PushChain.utils.signer.toUniversal(skeleton);
```

---

## Two-Step Pattern Summary

Every signer follows the same two-step flow:

| Step | EVM (ethers/viem) | Solana | Custom |
|---|---|---|---|
| 1 — Create native signer | `new ethers.Wallet(key, provider)` | `Keypair.fromSecretKey(...)` | implement signing fns |
| 2 — Create Universal Signer | `toUniversal(wallet/walletClient)` | `toUniversalFromKeypair(keypair, { chain, library })` | `construct(account, signingMethods)` then `toUniversal(skeleton)` |

**Chain is determined by:**
- EVM: provider/transport RPC URL
- Solana: explicit `chain` option
- Custom: explicit `chain` in account object

## See Also

- Create universal signer workflow: https://push.org/agents/workflows/create-universal-signer.md
- Initialize client: https://push.org/agents/skills/push-backend/references/initialize-client.md
- Constants (CHAIN, LIBRARY): https://push.org/agents/workflows/constants-reference.md

## Docs

- Signer reference: https://push.org/docs/chain/build/create-universal-signer/
- Custom universal signer (advanced): https://push.org/docs/chain/build/advanced/custom-universal-signer/
