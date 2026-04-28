# Send Universal Transaction Reference — @pushchain/core

> Deep context for `push-backend` skill. Load this file when you need all `sendTransaction` arguments, receipt fields, all 3 routes, cascade pattern, or CONSTANTS.
>
> See also: `references/signer-options.md` for signer creation.
> See also: `references/initialize-client.md` for `PushChain.initialize` and account management.

---

## Routing — `tx.to` and `tx.from` determine the route

| Route | `tx.to` | `tx.from` | Executes on | Via |
|---|---|---|---|---|
| Route 1 | `'0x...'` plain address | omitted | Push Chain | UEA |
| Route 2 | `{ address, chain }` | omitted | External chain | CEA on target chain |
| Route 3 | `'0x...'` plain address | `{ chain }` | Push Chain | CEA on `from.chain` as origin |

## All `sendTransaction` Arguments

```ts
import { PushChain, CONSTANTS } from '@pushchain/core';

const tx = await client.universal.sendTransaction({
  // ── Required ──────────────────────────────────────────────────────
  to: '0xRecipientAddress',           // Push Chain address (Route 1)
  // OR to an external chain (Route 2):
  // to: { address: '0xContractOnEthereum', chain: CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
  // OR Route 3: CEA on external chain as origin
  // from: { chain: CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },

  // ── Value / Calldata ──────────────────────────────────────────────
  value: PushChain.utils.helpers.parseUnits('0.01', 18), // native PC to send
  data: '0x1234abcd',                 // ABI-encoded calldata (optional)

  // ── Token bridge (from origin chain to target) ────────────────────
  funds: {
    amount: PushChain.utils.helpers.parseUnits('1', 6),
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
  },

  // ── Pay gas with a bridged token instead of native PC ─────────────
  payGasWith: {
    token: PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDC,
    slippageBps: 100,        // optional: 1% slippage tolerance
    minAmountOut: 990000n,   // optional: minimum output amount in smallest unit
  },

  // ── Gas overrides (Push Chain EVM) ───────────────────────────────
  gasLimit: 200_000n,
  maxFeePerGas: PushChain.utils.helpers.parseUnits('2', 9),         // 2 gwei
  maxPriorityFeePerGas: PushChain.utils.helpers.parseUnits('1', 9), // 1 gwei

  // ── Expiry ────────────────────────────────────────────────────────
  deadline: BigInt(Math.floor(Date.now() / 1000) + 3600), // Unix seconds


  // ── Progress updates ──────────────────────────────────────────────
  progressHook: (update) => {
    console.log(update.status, update.txHash ?? '');
  },
});
```

---

## TxResponse Fields

```ts
tx.hash                 // Push Chain tx hash
tx.origin               // CAIP-10 origin: 'eip155:chainId:address'
tx.from                 // UEA address that executed on Push Chain
tx.to                   // target address
tx.chainId              // '42101' on testnet
tx.blockNumber          // bigint
tx.value                // bigint (smallest unit)
tx.gasLimit / tx.gasPrice / tx.maxFeePerGas / tx.maxPriorityFeePerGas // bigint
tx.nonce                // number (UEA nonce)
tx.wait()               // () => Promise<TxReceipt>
```

## TxReceipt Fields (`await tx.wait()`)

```ts
const receipt = await tx.wait();

receipt.status          // 1 = success, 0 = failure
receipt.hash            // transaction hash
receipt.from            // UEA executor address
receipt.to              // target address (null for deployments)
receipt.blockNumber     // bigint
receipt.gasUsed         // bigint
receipt.gasPrice        // bigint
receipt.logs            // emitted event logs
receipt.contractAddress // string | null (for contract deployments)
receipt.raw             // { from, to, nonce, data, value } — raw on-chain data

// Route 2 only:
receipt.externalTxHash      // tx hash on the external chain
receipt.externalChain       // external chain identifier
receipt.externalExplorerUrl // explorer URL for the external chain tx
```

---

## Cascade Pattern — `prepareTransaction` + `executeTransactions`

Use for ordered multi-hop execution across chains under a single user signature.

**`prepareTransaction` accepts the exact same arguments as `sendTransaction`** — same `tx.to`, `tx.from`, `tx.data`, `tx.value`, `tx.funds`, `tx.payGasWith`, etc., and the same Route 1 / Route 2 / Route 3 routing rules. The only difference is it does **not** submit — it returns a `PreparedUniversalTx` object for use in `executeTransactions`.

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

| Scenario | `tx.to` | `tx.from` | Route |
|---|---|---|---|
| Push Chain call/transfer | `'0x...'` plain address | omitted | Route 1 — via UEA |
| External chain call/transfer | `{ address, chain }` | omitted | Route 2 — via CEA |
| Push Chain, external chain identity | `'0x...'` plain address | `{ chain }` | Route 3 — CEA origin |
| Multi-hop across chains | `prepareTransaction` + `executeTransactions` | — | Cascade |

---

## CONSTANTS Reference

See https://push.org/agents/workflows/constants-reference.md for the full list of `CHAIN`, `PUSH_NETWORK`, `LIBRARY`, `MOVEABLE.TOKEN`, and `PAYABLE.TOKEN` constants.

---

## See Also

- Constants: https://push.org/agents/workflows/constants-reference.md
- Multichain cascade / prepareTransaction: https://push.org/agents/workflows/send-multichain-transaction.md
- Initialize client: https://push.org/agents/skills/push-backend/references/initialize-client.md
- Signer creation: https://push.org/agents/skills/push-backend/references/signer-options.md

## Docs

- sendTransaction: https://push.org/docs/chain/build/send-universal-transaction/
- Cascade pattern - multiple transactions as one transaction between chains: https://push.org/docs/chain/build/send-multichain-transactions/
- Token constants: https://push.org/docs/chain/build/constants/
