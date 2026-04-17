---
id: push-backend
intent: Execute universal transactions from server-side code, scripts, bots, and automation
package: '@pushchain/core'
entry: 'PushChain.initialize'
resources: 'https://push.org/agents/resources/push-backend/index.json'
references:
  - references/signer-options.md
  - references/initialize-client.md
  - references/send-universal-transaction.md
  - ../../workflows/send-multichain-transaction.md
---

# Skill: Universal Transactions — Backend (Node.js / Scripts)

**Intent**: Execute universal transactions from server-side code, scripts, bots, and automation pipelines.
**Package**: `@pushchain/core` — no other library (ethers.js, viem, wagmi) can replace `sendTransaction`, `signMessage`, `prepareTransaction`, or `executeTransactions`.

## Install

```bash
npm install @pushchain/core
```

## Push Chain — EVM Compatible

Push Chain is **100% EVM-compatible**. Any ethers.js or viem code that targets Ethereum works on Push Chain by pointing at the Push Chain RPC — same API, same tooling, no changes needed.

|                    | Value                             |
| ------------------ | --------------------------------- |
| **HTTP RPC**       | `https://evm.donut.rpc.push.org/` |
| **WebSocket RPC**  | `wss://evm.donut.rpc.push.org`    |
| **Chain ID**       | `42101`                           |
| **Block Explorer** | `https://donut.push.network`      |

> For **read-only** queries (transactions, blocks, balances, contract view calls) — no SDK needed. Use `ethers.JsonRpcProvider` or `viem.createPublicClient` directly. See [Read Blockchain State](#read-blockchain-state).
>
> For **sending transactions** — use `@pushchain/core` (`PushChain.initialize` + `sendTransaction`). Standard ethers/viem cannot cross chains or route through UEAs.

---

## Universal Origin — Send from Any Chain

Universal transactions can originate from **any supported chain** — Push Chain, Ethereum, Solana, BNB, Arbitrum, Base, or any supported chain. The user's wallet stays on their home chain; Push Chain routes execution transparently.

**The primary pattern for all EVM chains** (ethers.js or viem) is identical — the **RPC URL determines the origin chain**, not a separate parameter:

```ts
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

// Origin chain = Ethereum Sepolia (Sepolia RPC)
const provider = new ethers.JsonRpcProvider(
  'https://sepolia.gateway.tenderly.co'
);
// Origin chain = Push Chain (Donut RPC)
// const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
// Origin chain = BNB Testnet (BNB RPC)
// const provider = new ethers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const universalSigner = await PushChain.utils.signer.toUniversal(wallet);
```

For Solana, explicitly pass the chain and library:

```ts
import { Keypair } from '@solana/web3.js';

const solKeypair = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(process.env.SOLANA_KEY!))
);
const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(
  solKeypair,
  {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
  }
);
```

After creating any signer, call `PushChain.initialize` to get the client:

```ts
const client = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET, // optional, defaults to TESTNET
});
// Returns PushChainClient — use client.universal.* for all operations
```

> **Frontend / React?** Use `@pushchain/ui-kit` instead — `PushUniversalWalletProvider` handles signer creation and `PushChain.initialize` automatically. Access the ready client via `usePushChainClient()`. See [push-frontend skill](https://push.org/agents/skills/push-frontend/SKILL.md).

**Quick reference (backend / scripts):**

Always two steps — create a chain-native signer, then convert it to a `UniversalSigner`:

| Origin                     | Step 1 — Create native signer                                             | Step 2 — Create Universal Signer                                             |
| -------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Ethereum / EVM (ethers.js) | `new ethers.Wallet(key, provider)` ← RPC picks chain                      | `PushChain.utils.signer.toUniversal(ethersSigner)`                           |
| Ethereum / EVM (viem)      | `createWalletClient({ account, transport: http(rpc) })` ← RPC picks chain | `PushChain.utils.signer.toUniversal(viemClient)`                             |
| Solana                     | `Keypair.fromSecretKey(...)`                                              | `PushChain.utils.signer.toUniversalFromKeypair(keypair, { chain, library })` |
| Custom / any               | implement `signMessage`, `signAndSendTransaction`, `signTypedData`        | `PushChain.utils.signer.construct(account, signingMethods)`                  |

See all supported chains: `PushChain.utils.chains.getSupportedChainsByName(PushChain.CONSTANTS.PUSH_NETWORK.TESTNET)`

## Initialize Client

`PushChain.initialize(signerOrAccount, options?)` → `Promise<PushChainClient>`

| Argument          | Type                                  | Default   | Description                                                             |
| ----------------- | ------------------------------------- | --------- | ----------------------------------------------------------------------- |
| `signerOrAccount` | `UniversalSigner \| UniversalAccount` | —         | `UniversalSigner` for full write/sign; `UniversalAccount` for read-only |
| `options.network` | `PushChain.CONSTANTS.PUSH_NETWORK`    | `TESTNET` | Push Chain network to connect to                                        |
| `options.rpcUrls` | `Partial<Record<CHAIN, string[]>>`    | `{}`      | Custom RPC URLs per chain                                               |

**Full write/sign** (pass a `UniversalSigner`):

```ts
const client = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});
```

**Read-only** — pass a `UniversalAccount` (no private key). `sendTransaction` / `signMessage` will throw; `universal.account`, `universal.origin`, and `explorer.*` still work:

```ts
const account = PushChain.utils.account.toUniversal('0xAddress', {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});
const client = await PushChain.initialize(account, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});
```

**Reinitialize** — swap signer/account or update options without creating a fresh instance:

```ts
const newClient = await client.reinitialize(newSignerOrAccount, {
  // override options as needed (rpcUrls, blockExplorers, etc.)
});
// reinitialize always returns a new client — update your reference
```

**Access account info** after initialization:

```ts
client.universal.origin; // source chain address: { address, chain } — e.g. Ethereum Sepolia wallet
client.universal.account; // Push Chain execution account: UEA for cross-chain users, EOA for Push-native
```

**Account status** — UEA deployment and version (SDK handles upgrades automatically in most cases):

```ts
const status = await client.getAccountStatus();
// { mode: 'signer' | 'read-only', uea: { deployed, version, minRequiredVersion, requiresUpgrade } }
```

> **UI Kit (frontend):** `PushChain.initialize` is called automatically by `PushUniversalWalletProvider`. Use `usePushChainClient()` to access the ready client — no manual initialization needed.

> **Reading blockchain state** does NOT require `@pushchain/core`. Use ethers.js or viem directly with the Push Chain RPC `https://evm.donut.rpc.push.org/`. The `PushChainClient` is for **sending and signing universal transactions** — not general-purpose EVM reads.

## Send Universal Transaction

`client.universal.sendTransaction(tx)` → `Promise<TxResponse>`

### Routing — determined by `tx.to` and `tx.from`

| Route   | `tx.to`                 | `tx.from`   | Executes on    | Via                           |
| ------- | ----------------------- | ----------- | -------------- | ----------------------------- |
| Route 1 | `'0x...'` plain address | omitted     | Push Chain     | UEA                           |
| Route 2 | `{ address, chain }`    | omitted     | External chain | CEA on target chain           |
| Route 3 | `'0x...'` plain address | `{ chain }` | Push Chain     | CEA on `from.chain` as origin |

### Arguments

| Argument                  | Type                                                                                            | Description                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| _`tx.to`_                 | `string \| { address: string; chain: CHAIN }`                                                   | Execution target. Plain address → Route 1. `{ address, chain }` → Route 2.                                                     |
| `tx.from`                 | `{ chain: CHAIN }` _(optional)_                                                                 | Forces CEA on the specified external chain as execution origin → Route 3.                                                      |
| `tx.value`                | `bigint` _(optional)_                                                                           | Native value in smallest unit — uPC on Push Chain; native asset on external routes.                                            |
| `tx.data`                 | `string \| Array<{ to: string; value: bigint; data: string }>` _(optional)_                     | ABI-encoded calldata (single call) or multicall array. Multicall requires `to: '0x000...0'`.                                   |
| `tx.funds`                | `{ amount: bigint; token?: MOVEABLE.TOKEN }` _(optional)_                                       | Move supported assets as part of the tx. For Route 1: external origin only (Push-native users use ERC-20 `transfer` directly). |
| `tx.progressHook`         | `(progress: ProgressHookType) => void` _(optional)_                                             | Callback for per-step lifecycle progress events (`SEND-TX-01` … `SEND-TX-99`).                                                 |
| `tx.payGasWith`           | `{ token?: PAYABLE.TOKEN; slippageBps?: number; minAmountOut?: bigint \| string }` _(optional)_ | Pay universal gas fees with a supported ERC-20 instead of native.                                                              |
| `tx.gasLimit`             | `bigint` _(optional, SDK estimated)_                                                            | Override gas limit.                                                                                                            |
| `tx.maxFeePerGas`         | `bigint` _(optional, SDK estimated)_                                                            | Override max fee per gas.                                                                                                      |
| `tx.maxPriorityFeePerGas` | `bigint` _(optional, SDK estimated)_                                                            | Override priority fee.                                                                                                         |
| `tx.deadline`             | `bigint` _(optional)_                                                                           | Execution deadline.                                                                                                            |

---

### Route 1 — Any Origin → Push Chain (via UEA)

`tx.to` is a plain address. The user's UEA executes the call on Push Chain.

```ts
const tx = await client.universal.sendTransaction({
  to: '0xContractOnPushChain',
  value: PushChain.utils.helpers.parseUnits('0.01', 18),
  data: PushChain.utils.helpers.encodeTxData({
    abi,
    functionName: 'increment',
  }),
});
const receipt = await tx.wait();
console.log('status:', receipt.status === 1 ? 'success' : 'failed');
```

> `funds` is only needed on Route 1 when the **origin is an external chain** and you want to move assets to Push Chain atomically. Push-native users call ERC-20 `transfer` directly instead.

---

### Route 2 — Any Origin → External Chain (via CEA)

`tx.to` is `{ address, chain }`. Push Chain coordinates execution through the user's CEA on the target chain.

```ts
const tx = await client.universal.sendTransaction({
  to: {
    address: '0xContractOnBnb',
    chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET,
  },
  data: PushChain.utils.helpers.encodeTxData({
    abi,
    functionName: 'increment',
  }),
  funds: {
    amount: PushChain.utils.helpers.parseUnits('1', 6),
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDT,
  },
});
const receipt = await tx.wait();
console.log('external hash:', receipt.externalTxHash);
console.log('explorer:', receipt.externalExplorerUrl);
```

> Route 2 receipt includes additional fields: `externalTxHash`, `externalChain`, `externalExplorerUrl`.

---

### Route 3 — CEA Origin → Push Chain

`tx.from = { chain }` forces the CEA on that external chain to be the execution origin on Push Chain. Used when execution on Push Chain must reflect an external chain identity (e.g. after depositing into Aave on Ethereum, return to Push Chain as your Ethereum identity).

```ts
const tx = await client.universal.sendTransaction({
  from: { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
  to: '0xContractOnPushChain',
  data: PushChain.utils.helpers.encodeTxData({ abi, functionName: 'claim' }),
});
```

---

### Multicall — Batch Multiple Calls

Pass an array to `tx.data` and set `tx.to` to the zero address. External origin only.

```ts
await client.universal.sendTransaction({
  to: '0x0000000000000000000000000000000000000000', // required for multicall
  data: [
    { to: '0xContract1', value: 0n, data: call1Data },
    { to: '0xContract2', value: 0n, data: call2Data },
  ],
});
```

---

### TxResponse

| Field                  | Type                                     | Description                                |
| ---------------------- | ---------------------------------------- | ------------------------------------------ |
| `hash`                 | `string`                                 | Push Chain transaction hash                |
| `origin`               | `string`                                 | CAIP-10 origin: `'eip155:chainId:address'` |
| `from`                 | `string`                                 | UEA address that executed on Push Chain    |
| `to`                   | `string`                                 | Target address                             |
| `value`                | `bigint`                                 | Value transferred (in smallest unit)       |
| `data`                 | `string`                                 | Calldata                                   |
| `chainId`              | `string`                                 | Push Chain ID (`'42101'` on testnet)       |
| `blockNumber`          | `bigint`                                 | Block number                               |
| `nonce`                | `number`                                 | UEA nonce                                  |
| `gasLimit`             | `bigint`                                 | Gas limit                                  |
| `gasPrice`             | `bigint`                                 | Gas price (wei)                            |
| `maxFeePerGas`         | `bigint`                                 | EIP-1559 max fee                           |
| `maxPriorityFeePerGas` | `bigint`                                 | EIP-1559 priority fee                      |
| `wait()`               | `(confirmations?) => Promise<TxReceipt>` | Wait for on-chain confirmation             |

### TxReceipt (from `await tx.wait()`)

| Field                 | Type                               | Description                                 |
| --------------------- | ---------------------------------- | ------------------------------------------- |
| `status`              | `number`                           | `1` = success, `0` = failure                |
| `hash`                | `string`                           | Transaction hash                            |
| `blockNumber`         | `bigint`                           | Confirmed block number                      |
| `from`                | `string`                           | Executor address (UEA)                      |
| `to`                  | `string \| null`                   | Target address                              |
| `gasUsed`             | `bigint`                           | Actual gas consumed                         |
| `gasPrice`            | `bigint`                           | Gas price used                              |
| `logs`                | `array`                            | Emitted event logs                          |
| `contractAddress`     | `string \| null`                   | Deployed contract address (deploy txs only) |
| `raw`                 | `{ from, to, nonce, data, value }` | Raw on-chain data                           |
| `externalTxHash`      | `string` _(Route 2 only)_          | Hash on the external chain                  |
| `externalChain`       | `string` _(Route 2 only)_          | External chain identifier                   |
| `externalExplorerUrl` | `string` _(Route 2 only)_          | External explorer URL                       |

## Prepare + Execute — Multichain Cascade

Use `prepareTransaction` + `executeTransactions` when you need **multiple ordered hops across chains under a single user signature**. Each hop is prepared independently, then all are submitted together.

### `prepareTransaction`

`client.universal.prepareTransaction(tx)` → `Promise<PreparedUniversalTx>`

Accepts the **same arguments as `sendTransaction`** (same routing rules: Route 1 / Route 2 / Route 3 via `tx.to` and `tx.from`). Does **not** submit — returns a prepared object.

```ts
// Hop 0: call a contract on Push Chain (Route 1)
const hop0 = await client.universal.prepareTransaction({
  to: '0xContractOnPushChain',
  data: PushChain.utils.helpers.encodeTxData({
    abi: MyABI,
    functionName: 'increment',
  }),
});

// Hop 1: call a contract on BNB Testnet (Route 2)
const hop1 = await client.universal.prepareTransaction({
  to: {
    address: '0xContractOnBnb',
    chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET,
  },
  data: PushChain.utils.helpers.encodeTxData({
    abi: MyABI,
    functionName: 'increment',
  }),
});
```

**`PreparedUniversalTx` shape:**

| Property       | Type                                                             | Description                                     |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| `route`        | `'UOA_TO_PUSH' \| 'UOA_TO_CEA' \| 'CEA_TO_PUSH' \| 'CEA_TO_CEA'` | Detected routing mode                           |
| `estimatedGas` | `bigint`                                                         | Estimated gas units                             |
| `nonce`        | `bigint`                                                         | Nonce for submission                            |
| `deadline`     | `bigint`                                                         | Signature expiry deadline                       |
| `payload`      | `string`                                                         | Encoded payload ready for `executeTransactions` |

---

### `executeTransactions`

`client.universal.executeTransactions(txs)` → `Promise<CascadedTxResponse>`

Submits all prepared hops as a single Push Chain transaction. The SDK coordinates downstream execution across chains.

```ts
const cascade = await client.universal.executeTransactions([hop0, hop1]);
console.log('Push Chain tx:', cascade.initialTxHash);
console.log('Hops:', cascade.hopCount);

// Wait for all hops to confirm
const result = await cascade.wait({
  progressHook: (e) =>
    console.log(`[Hop ${e.hopIndex}] ${e.status} on ${e.chain}`),
  pollingIntervalMs: 5000,
  timeout: 600_000, // 10 min
});
console.log('All complete:', result.success);
```

**`CascadedTxResponse` shape:**

| Property            | Type                               | Description                                     |
| ------------------- | ---------------------------------- | ----------------------------------------------- |
| `initialTxHash`     | `string`                           | Hash of the user-signed Push Chain transaction  |
| `initialTxResponse` | `TxResponse`                       | Full `TxResponse` for the initial Push Chain tx |
| `hops`              | `CascadeHopInfo[]`                 | All hops with routing and status                |
| `hopCount`          | `number`                           | Total hop count                                 |
| `wait(opts?)`       | `Promise<CascadeCompletionResult>` | Wait for all hops to confirm                    |
| `waitForAll(opts?)` | `Promise<CascadeCompletionResult>` | Alias for `wait`                                |

**`CascadeHopInfo` per hop:**

| Property          | Type                                                  | Description                                                   |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------------- |
| `hopIndex`        | `number`                                              | 0-indexed position                                            |
| `route`           | `string`                                              | Routing mode for this hop                                     |
| `executionChain`  | `CHAIN`                                               | Chain where this hop executes                                 |
| `status`          | `'pending' \| 'submitted' \| 'confirmed' \| 'failed'` | Current status                                                |
| `txHash`          | `string`                                              | Resolved transaction hash                                     |
| `outboundDetails` | `object`                                              | External chain details: hash, explorer URL, recipient, amount |

> **No atomicity across hops** — if a downstream hop fails, earlier hops are already on-chain. Design contracts to handle partial execution.

> **Single signature** — `executeTransactions` submits one transaction to Push Chain; the SDK coordinates all downstream hops automatically.

---

## Track Transaction

### `trackTransaction` — resume tracking any tx by hash

`client.universal.trackTransaction(txHash, options)` → `Promise<UniversalTxResponse>`

Use this to re-check progress of a previously submitted transaction — after a page refresh, from a backend poller, or for any tx hash retrieved from storage. Works for transactions that originated on Push Chain **or** any external chain.

| Argument                             | Type                               | Default                    | Description                                                               |
| ------------------------------------ | ---------------------------------- | -------------------------- | ------------------------------------------------------------------------- |
| `txHash`                             | `string`                           | —                          | Hash/signature of the transaction on its origin chain                     |
| `options.chain`                      | `CHAIN`                            | `CHAIN.PUSH_TESTNET_DONUT` | Chain where the tx was originally submitted                               |
| `options.progressHook`               | `(event) => void`                  | `undefined`                | Progress callback (same shape as `sendTransaction`)                       |
| `options.waitForCompletion`          | `boolean`                          | `true`                     | `true` = wait for confirmation; `false` = return after first status check |
| `options.advanced.pollingIntervalMs` | `number`                           | `2000`                     | Poll interval in ms (min `500`)                                           |
| `options.advanced.timeout`           | `number`                           | `60000`                    | Max wait ms before timeout error                                          |
| `options.advanced.rpcUrls`           | `Partial<Record<CHAIN, string[]>>` | `{}`                       | Custom RPC URLs for status queries                                        |

Returns the same `UniversalTxResponse` shape as `sendTransaction`.

```ts
// Track a Push Chain tx
const response = await client.universal.trackTransaction(
  '0xbd765a6b60da077eaa89a382cd59c0469a4eaabcaca2707d3e6dcdeafc497a39',
  {
    progressHook: (p) => console.log(`${p.id}: ${p.message}`),
    advanced: { timeout: 30_000 },
  }
);

// Track an Ethereum Sepolia-origin tx
const response2 = await client.universal.trackTransaction(
  '0x9b4743376689eb6f90f3aeb9eea58381b3bcc033e1de4709281fd58a77b85098',
  { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }
);
```

### `tx.wait()` — wait for confirmation inline

After `sendTransaction`, call `.wait()` on the response:

```ts
const tx = await client.universal.sendTransaction({
  to: '0xRecipient',
  value: 1n,
});
const receipt = await tx.wait();
console.log(receipt.status === 1 ? 'success' : 'failed');
```

---

## Sign a Message

```ts
const signature = await client.universal.signMessage('Hello Push Chain');
```

## Utility Functions

All utilities are available as `PushChain.utils.*` — no separate import needed.

### `parseUnits(value, exponent)` → `bigint`

Converts a human-readable token amount to its smallest unit.

| Argument   | Type                             | Description                                                 |
| ---------- | -------------------------------- | ----------------------------------------------------------- |
| `value`    | `string`                         | Human-readable amount, e.g. `'1.5'`                         |
| `exponent` | `number \| { decimals: number }` | Decimal places — `18` for PC/ETH, `6` for USDC, `8` for BTC |

**Returns**: `bigint` — e.g. `1500000000000000000n`

### `formatUnits(value, options)` → `string`

Converts a raw smallest-unit amount back to a human-readable string.

| Argument            | Type                  | Description                              |
| ------------------- | --------------------- | ---------------------------------------- |
| `value`             | `bigint \| string`    | Raw amount in smallest units             |
| `options.decimals`  | `number`              | Decimal places to scale by               |
| `options.precision` | `number` _(optional)_ | Round output to this many decimal places |

**Returns**: `string` — e.g. `'1.5'`, `'100.50'`

### `encodeTxData({ abi, functionName, args })` → `string`

Encodes smart contract calldata without needing viem or ethers.js.

| Argument       | Type                 | Description                      |
| -------------- | -------------------- | -------------------------------- |
| `abi`          | `any[]`              | Contract ABI array               |
| `functionName` | `string`             | Function name to encode          |
| `args`         | `any[]` _(optional)_ | Function arguments, default `[]` |

**Returns**: `string` — hex-encoded calldata, e.g. `'0xd09de08a'`

---

### `getSupportedChains(pushNetwork)` → `{ chains: CHAIN[] }`

| Argument      | Type                               | Description      |
| ------------- | ---------------------------------- | ---------------- |
| `pushNetwork` | `PushChain.CONSTANTS.PUSH_NETWORK` | Network to query |

**Returns**: `{ chains }` — array of `PushChain.CONSTANTS.CHAIN.*` constant values

### `getSupportedChainsByName(pushNetwork)` → `{ chains: string[] }`

| Argument      | Type                               | Description      |
| ------------- | ---------------------------------- | ---------------- |
| `pushNetwork` | `PushChain.CONSTANTS.PUSH_NETWORK` | Network to query |

**Returns**: `{ chains }` — human-readable names, e.g. `['PUSH_TESTNET_DONUT', 'ETHEREUM_SEPOLIA', 'SOLANA_DEVNET', ...]`

### `getChainNamespace(chainName)` → `string`

| Argument    | Type     | Description               |
| ----------- | -------- | ------------------------- |
| `chainName` | `string` | e.g. `'ETHEREUM_SEPOLIA'` |

**Returns**: CAIP-2 namespace string, e.g. `'eip155:11155111'` — `undefined` if unsupported

### `getChainName(chainNamespace)` → `string`

| Argument         | Type     | Description                                |
| ---------------- | -------- | ------------------------------------------ |
| `chainNamespace` | `string` | CAIP-2 namespace, e.g. `'eip155:11155111'` |

**Returns**: Chain name string, e.g. `'ETHEREUM_SEPOLIA'` — `undefined` if unsupported

---

### `toUniversal(address, { chain })` → `UniversalAccount`

Wraps an address and chain into a `UniversalAccount` object.

| Argument        | Type     | Description                   |
| --------------- | -------- | ----------------------------- |
| `address`       | `string` | Wallet address                |
| `options.chain` | `CHAIN`  | `PushChain.CONSTANTS.CHAIN.*` |

**Returns**: `{ chain: string, address: string }` — e.g. `{ chain: 'eip155:11155111', address: '0xAbc...' }`

### `toChainAgnostic(address, { chain })` → `string`

Produces a fully-qualified chain-agnostic address string.

| Argument        | Type     | Description                   |
| --------------- | -------- | ----------------------------- |
| `address`       | `string` | Wallet address                |
| `options.chain` | `CHAIN`  | `PushChain.CONSTANTS.CHAIN.*` |

**Returns**: `string` — e.g. `'eip155:11155111:0xAbc...'`

### `fromChainAgnostic(chainAgnosticAddress)` → `UniversalAccount`

Parses a chain-agnostic address string back into a `UniversalAccount`.

| Argument               | Type     | Description                                                   |
| ---------------------- | -------- | ------------------------------------------------------------- |
| `chainAgnosticAddress` | `string` | Full chain-agnostic string, e.g. `'eip155:11155111:0xAbc...'` |

**Returns**: `{ chain: string, address: string }`

### `deriveExecutorAccount(universalAccount, options?)` → `Promise<{ address, deployed? }>`

Derives a UEA on Push Chain from any origin account, or a CEA on an external chain from a Push/UOA account.

| Argument                   | Type                   | Description                                                                        |
| -------------------------- | ---------------------- | ---------------------------------------------------------------------------------- |
| `universalAccount`         | `UniversalAccount`     | Created via `toUniversal()`                                                        |
| `options.chain`            | `CHAIN` _(optional)_   | When provided, derives a CEA on that external chain instead of a UEA on Push Chain |
| `options.skipNetworkCheck` | `boolean` _(optional)_ | Deterministic derivation only, skip deployment check. Default `false`              |

**Returns**: `{ address: string, deployed?: boolean }` — `deployed` is included when `skipNetworkCheck` is `false`

Full reference: https://push.org/agents/workflows/use-utility-functions.md

---

## Contract Helpers

### UEAFactory — Identity Resolution On-Chain

The Universal Executor Account Factory is deployed at a fixed address on Push Chain and lets your smart contract identify callers from external chains.

**Address**: `0x00000000000000000000000000000000000000eA`

```solidity
import "push-chain-core-contracts/src/Interfaces/IUEAFactory.sol";
// or define the interface manually — see docs
```

#### getOriginForUEA — Who called me?

```solidity
// Inside your contract — identify if msg.sender is a UEA (external chain user) or a native Push account
(UniversalAccountId memory origin, bool isUEA) =
    IUEAFactory(0x00000000000000000000000000000000000000eA).getOriginForUEA(msg.sender);

// origin.chainNamespace  → "eip155" | "solana" | ...
// origin.chainId         → e.g. "11155111" (Sepolia)
// origin.owner           → caller's original address in bytes (hex-encode for EVM, base58 for Solana)
// isUEA                  → false if msg.sender is a native Push Chain EOA
```

#### getUEAForOrigin — What is a user's UEA address?

```solidity
(address uea, bool isDeployed) = IUEAFactory(0x00000000000000000000000000000000000000eA).getUEAForOrigin(
    UniversalAccountId({
        chainNamespace: "eip155",
        chainId: "11155111",
        owner: abi.encodePacked(userAddress)
    })
);
// uea — deterministic UEA address (CREATE2), usable even before deployment
// isDeployed — true once the UEA has been deployed (first tx from that user)
```

Off-chain equivalent (SDK): `PushChain.utils.account.deriveExecutorAccount(universalAccount)`

Full reference: https://push.org/agents/workflows/use-contract-helpers.md

---

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

## Read Blockchain State

For read-only queries — transactions, blocks, balances, contract view calls, WebSocket subscriptions — no Push Chain SDK needed. Use standard ethers or viem pointed at the Push Chain RPC.

### Push Chain Network Config

|                    | Value                             |
| ------------------ | --------------------------------- |
| **HTTP RPC**       | `https://evm.donut.rpc.push.org/` |
| **WebSocket RPC**  | `wss://evm.donut.rpc.push.org`    |
| **Chain ID**       | `42101`                           |
| **Block Explorer** | `https://donut.push.network`      |

### Initialize (ethers)

```ts
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const tx = await provider.getTransaction('0x...');
const block = await provider.getBlock('latest');
const bal = await provider.getBalance('0xAddress');
```

### Initialize (viem)

```ts
import { createPublicClient, http } from 'viem';

const client = createPublicClient({
  transport: http('https://evm.donut.rpc.push.org/'),
});
const block = await client.getBlock();
const bal = await client.getBalance({ address: '0xAddress' });
```

### WebSocket (real-time block subscription)

```ts
// ethers
const ws = new ethers.WebSocketProvider('wss://evm.donut.rpc.push.org');
ws.on('block', (n) => console.log('New block:', n));

// viem
import { createPublicClient, webSocket } from 'viem';
const wsClient = createPublicClient({
  transport: webSocket('wss://evm.donut.rpc.push.org'),
});
const stop = wsClient.watchBlocks({
  onBlock: (b) => console.log('New block:', b.number),
});
```

Full reference: https://push.org/agents/workflows/read-blockchain-state.md

---

## Extended Reference

- [Initialize Push Chain client](https://push.org/agents/workflows/initialize-client.md)
- [Create universal signer](https://push.org/agents/workflows/create-universal-signer.md)
- [Send universal transaction (all routes, advanced args)](https://push.org/agents/workflows/send-universal-transaction.md)
- [Send multichain transaction](https://push.org/agents/workflows/send-multichain-transaction.md)
- [Track transaction lifecycle](https://push.org/agents/workflows/track-transaction.md)
- [Read blockchain state](https://push.org/agents/workflows/read-blockchain-state.md)
- [Constants reference](https://push.org/agents/workflows/constants-reference.md)
- [Utility functions — full API](https://push.org/agents/workflows/use-utility-functions.md)
- [Contract helpers — UEAFactory](https://push.org/agents/workflows/use-contract-helpers.md)
- [Initialize with ethers.js example](https://push.org/agents/examples/initialize-client-ethers.md)
- [Initialize with viem example](https://push.org/agents/examples/initialize-client-viem.md)
- [Send to external chain example](https://push.org/agents/examples/send-transaction-external-chain.md)
