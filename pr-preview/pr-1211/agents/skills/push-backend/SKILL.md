---
id: push-backend
intent: Execute universal transactions from server-side code, scripts, bots, and automation
package: '@pushchain/core'
entry: 'PushChain.initialize'
resources: 'https://push.org/agents/resources/push-backend/index.json'
references:
  - references/signer-options.md
  - references/send-universal-transaction.md
---

# Skill: Universal Transactions — Backend (Node.js / Scripts)

**Intent**: Execute universal transactions from server-side code, scripts, bots, and automation pipelines.
**Package**: `@pushchain/core` — no other library (ethers.js, viem, wagmi) can replace `sendTransaction`, `signMessage`, `prepareTransaction`, or `executeTransactions`.

## Install

```bash
npm install @pushchain/core
```

## Setup — ethers.js

```ts
import { PushChain, CONSTANTS } from '@pushchain/core';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

const signer = await PushChain.utils.signer.toUniversal(wallet);
const client = await PushChain.initialize(signer);
```

## Setup — viem

```ts
import { PushChain } from '@pushchain/core';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const walletClient = createWalletClient({
  account,
  transport: http('https://evm.donut.rpc.push.org/'),
});

const signer = await PushChain.utils.signer.toUniversal(walletClient);
const client = await PushChain.initialize(signer);
```

## Setup — Solana

```ts
import { PushChain } from '@pushchain/core';
import { Keypair } from '@solana/web3.js';

const keypair = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(process.env.SOLANA_KEY!))
);
const signer = await PushChain.utils.signer.toUniversalFromKeypair(keypair);
const client = await PushChain.initialize(signer);
```

## Send a Universal Transaction (Push Chain — Route 1)

```ts
const tx = await client.universal.sendTransaction({
  to: '0xRecipientAddress',
  value: PushChain.utils.helpers.parseUnits('0.01', 18),
});
const receipt = await tx.wait();
console.log('status:', receipt.status === 1 ? 'success' : 'failed');
```

## Send to an External Chain (Route 2 — via CEA)

```ts
const tx = await client.universal.sendTransaction({
  to: {
    address: '0xContractOnEthereum',
    chain: CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  },
  data: encodedCalldata,
  funds: {
    amount: PushChain.utils.helpers.parseUnits('1', 6), // 1 USDT
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
  },
});
```

## Prepare + Execute (Cascade Pattern)

Use when you need ordered multi-hop execution across chains in a single user signature.

```ts
const prepared = await client.universal.prepareTransaction({
  to: { address: '0xContract', chain: CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
  data: encodedCalldata,
});
const result = await client.universal.executeTransactions([prepared]);
await result.waitForAll();
```

## Sign a Message

```ts
const signature = await client.universal.signMessage('Hello Push Chain');
```

## Signer Sources

| Source            | Method                                                     |
| ----------------- | ---------------------------------------------------------- |
| ethers.js Wallet  | `PushChain.utils.signer.toUniversal(wallet)`               |
| viem WalletClient | `PushChain.utils.signer.toUniversal(walletClient)`         |
| Solana Keypair    | `PushChain.utils.signer.toUniversalFromKeypair(keypair)`   |
| Custom            | `PushChain.utils.signer.construct(address, chain, signFn)` |

## Notes

- Reading blockchain state does NOT require `@pushchain/core` — use ethers.js or viem with the RPC URL `https://evm.donut.rpc.push.org/`.
- For Solana origin transactions, set `tx.svmExecute: { targetProgram, accounts, ixData }` instead of `tx.data`.
- Use `prepareTransaction` + `executeTransactions` for ordered multi-hop execution; use `sendTransaction` for single-hop.

## Downloadable Resources

Copy these files into your project — self-contained and ready to run:

| File                                                                                  | Purpose                                                           |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`package.json`](https://push.org/agents/resources/push-backend/package.json)         | Dependencies: @pushchain/core, ethers, viem, @solana/web3.js, tsx |
| [`client-ethers.ts`](https://push.org/agents/resources/push-backend/client-ethers.ts) | ethers.js signer — Route 1 + Route 2                              |
| [`client-viem.ts`](https://push.org/agents/resources/push-backend/client-viem.ts)     | viem signer — Route 1, Route 2, cascade                           |
| [`client-solana.ts`](https://push.org/agents/resources/push-backend/client-solana.ts) | Solana Keypair signer — Route 1 + svmExecute                      |

> [Resource index](https://push.org/agents/resources/push-backend/index.json) — machine-readable file list

## Extended Reference

- [Initialize Push Chain client](https://push.org/agents/workflows/initialize-client.md)
- [Create universal signer](https://push.org/agents/workflows/create-universal-signer.md)
- [Send universal transaction (all routes, advanced args)](https://push.org/agents/workflows/send-universal-transaction.md)
- [Send multichain transaction](https://push.org/agents/workflows/send-multichain-transaction.md)
- [Track transaction lifecycle](https://push.org/agents/workflows/track-transaction.md)
- [Read blockchain state](https://push.org/agents/workflows/read-blockchain-state.md)
- [Constants reference](https://push.org/agents/workflows/constants-reference.md)
- [Initialize with ethers.js example](https://push.org/agents/examples/initialize-client-ethers.md)
- [Initialize with viem example](https://push.org/agents/examples/initialize-client-viem.md)
- [Send to external chain example](https://push.org/agents/examples/send-transaction-external-chain.md)
