# Send Universal Transaction Reference — @pushchain/core

> Deep context for `push-backend` skill. Load this file when you need all `sendTransaction` arguments, receipt fields, cascade pattern, or CONSTANTS.
>
> Drag-and-drop into your project — self-contained, no external dependencies required beyond `@pushchain/core`.
>
> See also: `references/signer-options.md` for all signer creation methods.

---

## All `sendTransaction` Arguments

```ts
import { PushChain, CONSTANTS } from '@pushchain/core';

const tx = await client.universal.sendTransaction({
  // ── Required ──────────────────────────────────────────────────────
  to: '0xRecipientAddress',           // Push Chain address (Route 1)
  // OR to an external chain (Route 2):
  to: {
    address: '0xContractOnEthereum',
    chain: CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  },

  // ── Value / Calldata ──────────────────────────────────────────────
  value: PushChain.utils.helpers.parseUnits('0.01', 18), // native PC to send
  data: '0x1234abcd',                 // ABI-encoded calldata (optional)

  // ── Token bridge (from origin chain to target) ────────────────────
  funds: {
    amount: PushChain.utils.helpers.parseUnits('1', 6),
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
  },

  // ── Gas overrides (Push Chain EVM) ───────────────────────────────
  gasLimit: 200_000n,
  maxFeePerGas: PushChain.utils.helpers.parseUnits('2', 9),         // 2 gwei
  maxPriorityFeePerGas: PushChain.utils.helpers.parseUnits('1', 9), // 1 gwei

  // ── Pay gas with a bridged token instead of native PC ─────────────
  payGasWith: {
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
    maxAmount: PushChain.utils.helpers.parseUnits('0.5', 6),
  },

  // ── Expiry ────────────────────────────────────────────────────────
  deadline: Math.floor(Date.now() / 1000) + 3600, // Unix seconds

  // ── Solana-origin program execution ──────────────────────────────
  svmExecute: {
    targetProgram: 'YourBase58ProgramId',
    accounts: [{ pubkey: 'AccountPubkey', isSigner: false, isWritable: true }],
    ixData: Buffer.from('your instruction data'),
  },

  // ── Progress updates ──────────────────────────────────────────────
  progressHook: (update) => {
    console.log(update.status, update.txHash ?? '');
  },
});
```

---

## Receipt Fields

```ts
const receipt = await tx.wait();

receipt.status          // 1 = success, 0 = failed
receipt.transactionHash // Push Chain tx hash
receipt.externalTxHash  // tx hash on external chain (Route 2 only — may be undefined)
receipt.blockNumber     // block number on Push Chain
receipt.gasUsed         // gas used
```

---

## Cascade Pattern — `prepareTransaction` + `executeTransactions`

Use for ordered multi-hop execution across chains under a single user signature:

```ts
import { PushChain, CONSTANTS } from '@pushchain/core';

// Prepare each hop — does NOT submit yet
const hop1 = await client.universal.prepareTransaction({
  to: { address: '0xContractA', chain: CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
  data: encodeCallA(),
});
const hop2 = await client.universal.prepareTransaction({
  to: { address: '0xContractB', chain: CONSTANTS.CHAIN.ARBITRUM_SEPOLIA },
  data: encodeCallB(),
});

// Submit in order — single signature, sequential cross-chain execution
const result = await client.universal.executeTransactions([hop1, hop2]);
await result.waitForAll(); // resolves when all hops confirm
```

---

## Route Selection

| Scenario | `to` shape | Route |
|---|---|---|
| Push Chain contract | `"0x..."` (string) | Route 1 — native |
| External chain contract | `{ address, chain }` | Route 2 — via UG |
| Multi-hop across chains | `prepareTransaction` + `executeTransactions` | Cascade |

---

## CONSTANTS Reference

```ts
import { CONSTANTS, PushChain } from '@pushchain/core';

// Chains
CONSTANTS.CHAIN.PUSH_CHAIN
CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
CONSTANTS.CHAIN.ARBITRUM_SEPOLIA
CONSTANTS.CHAIN.BASE_SEPOLIA
CONSTANTS.CHAIN.BNB_TESTNET

// Moveable tokens (bridgeable PRC20s)
PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT
PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDC
PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDT
PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDT

// Helpers
PushChain.utils.helpers.parseUnits(value, decimals) // → bigint
```

---

## Docs

- sendTransaction: https://push.org/docs/chain/build/send-transaction/
- Cascade pattern: https://push.org/docs/chain/build/prepare-execute-transactions/
- Token constants: https://push.org/docs/chain/build/moveable-tokens/
