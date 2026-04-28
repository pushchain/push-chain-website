---
name: push-backend
description: "Use when writing Node.js scripts, bots, or server-side code with @pushchain/core — covers PushChain.initialize, wrapping ethers/viem/Solana keypairs into a UniversalSigner, all three routes, multichain cascades, transaction tracking, and utility functions. Not for browser or React code. Triggers on: 'initialize PushChain client in Node.js', 'send transaction from backend script', 'wrap ethers signer with toUniversal', 'track transaction by hash'."
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

## Read Blockchain State

For read-only queries — transactions, blocks, balances, contract view calls, WebSocket subscriptions — no Push Chain SDK needed. Use standard ethers or viem pointed at the Push Chain RPC above.

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

// Never hardcode — load from env; never log the key
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const universalSigner = await PushChain.utils.signer.toUniversal(wallet);
```

For Solana, explicitly pass the chain and library:

```ts
import { Keypair } from '@solana/web3.js';

// Never hardcode — load from env; never log the key or the raw buffer
const solKeypair = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(process.env.SOLANA_KEY!))
);
const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(
  solKeypair,
  {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS, // Available LIBRARY values: SOLANA_WEB3JS (more may be added — see https://push.org/agents/workflows/constants-reference.md)
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

> ⚠️ Passing a `UniversalAccount` creates a **read-only client**. Calling `sendTransaction`, `signMessage`, `prepareTransaction`, or `executeTransactions` will throw. Use `UniversalSigner` for any write operation.

**Read-only** — pass a `UniversalAccount` (no private key). `universal.account`, `universal.origin`, and `explorer.*` still work:

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

**Verify initialization succeeded:**

```ts
console.log('origin:', client.universal.origin); // { address, chain } — matches your signer
console.log('account:', client.universal.account); // UEA (cross-chain) or EOA (Push-native)
```

**Account status** — UEA deployment and version (SDK handles upgrades automatically in most cases):

```ts
const status = await client.getAccountStatus();
// { mode: 'signer' | 'read-only', uea: { deployed, version, minRequiredVersion, requiresUpgrade } }
```

> **UI Kit (frontend):** `PushChain.initialize` is called automatically by `PushUniversalWalletProvider`. Use `usePushChainClient()` to access the ready client — no manual initialization needed.

> `client.orchestrator` is reserved for internal SDK use (RPC resolution, UEA management, gas orchestration) — do not call methods on it directly.

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

| Argument                  | Type                                                                                            | Description                                                                                                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _`tx.to`_                 | `string \| { address: string; chain: CHAIN }`                                                   | Execution target. Plain address → Route 1. `{ address, chain }` → Route 2.                                                                                                                             |
| `tx.from`                 | `{ chain: CHAIN }` _(optional)_                                                                 | Forces CEA on the specified external chain as execution origin → Route 3.                                                                                                                              |
| `tx.value`                | `bigint` _(optional)_                                                                           | Native value in smallest unit — uPC on Push Chain; native asset on external routes.                                                                                                                    |
| `tx.data`                 | `string \| Array<{ to: string; value: bigint; data: string }>` _(optional)_                     | Encoded calldata for a single call or multicall array. EVM: `encodeTxData({ abi, functionName, args })`. Solana: `encodeTxData({ idl, functionName, args })`. Multicall requires `tx.to: '0x000...0'`. |
| `tx.funds`                | `{ amount: bigint; token?: MOVEABLE.TOKEN }` _(optional)_                                       | Move supported assets as part of the tx. For Route 1: external origin only (Push-native users use ERC-20 `transfer` directly).                                                                         |
| `tx.progressHook`         | `(progress: ProgressHookType) => void` _(optional)_                                             | Callback for per-step lifecycle events. Event IDs are route-prefixed (`SEND-TX-1xx` Route 1, `SEND-TX-2xx` Route 2, `SEND-TX-3xx` Route 3). See [ProgressHook Events](#progresshook-events) below.     |
| `tx.payGasWith`           | `{ token?: PAYABLE.TOKEN; slippageBps?: number; minAmountOut?: bigint \| string }` _(optional)_ | Pay universal gas fees with a supported ERC-20 instead of native.                                                                                                                                      |
| `tx.gasLimit`             | `bigint` _(optional, SDK estimated)_                                                            | Override gas limit.                                                                                                                                                                                    |
| `tx.maxFeePerGas`         | `bigint` _(optional, SDK estimated)_                                                            | Override max fee per gas.                                                                                                                                                                              |
| `tx.maxPriorityFeePerGas` | `bigint` _(optional, SDK estimated)_                                                            | Override priority fee.                                                                                                                                                                                 |
| `tx.deadline`             | `bigint` _(optional)_                                                                           | Execution deadline.                                                                                                                                                                                    |

---

### ProgressHook Events

Each `progress` object passed to `tx.progressHook` has this shape:

```ts
{
  id: string; // e.g. 'SEND-TX-101'
  title: string;
  message: string;
  level: 'INFO' | 'SUCCESS' | 'ERROR';
  response: object | null; // extra data: chain, address, txHash, etc.
  timestamp: string; // ISO-8601
}
```

Event IDs are prefixed by route. Key milestones per route:

| Route                    | Prefix            | First event   | Success          | Failure          |
| ------------------------ | ----------------- | ------------- | ---------------- | ---------------- |
| Route 1 → Push Chain     | `SEND-TX-1xx`     | `SEND-TX-101` | `SEND-TX-199-01` | `SEND-TX-199-02` |
| Route 2 → External chain | `SEND-TX-2xx`     | `SEND-TX-201` | `SEND-TX-299-01` | `SEND-TX-299-02` |
| Route 3 CEA → Push Chain | `SEND-TX-3xx`     | `SEND-TX-301` | `SEND-TX-399-01` | `SEND-TX-399-02` |
| Multichain cascade       | `SEND-TX-0xx/9xx` | `SEND-TX-001` | `SEND-TX-999-01` | `SEND-TX-999-02` |

Full event list (all routes, all IDs, response shapes): https://push.org/agents/workflows/progress-hook-events.md

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
if (receipt.status !== 1) throw new Error(`tx failed: ${receipt.hash}`);
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

**Solana target variant** — same Route 2 shape; pass the Anchor IDL via `encodeTxData` and the SDK resolves all accounts, PDAs, and the CEA automatically:

```ts
import testCounterIdl from './target/idl/test_counter.json';

const data = PushChain.utils.helpers.encodeTxData({
  idl: testCounterIdl, // Anchor IDL from target/idl/*.json
  functionName: 'receive_sol', // snake_case or camelCase both accepted
  args: [BigInt(0)], // use BigInt for u64/u128 args
});
const tx = await client.universal.sendTransaction({
  to: {
    address: '8yNqjrMnFiFbVTVQcKij8tNWWTMdFkrDf9abCGgc2sgx',
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
  },
  value: BigInt(0),
  data,
});
const receipt = await tx.wait();
console.log('Solana tx hash:', receipt.externalTxHash);
console.log('Solana explorer:', receipt.externalExplorerUrl);
```

---

### Route 3 — CEA Origin → Push Chain

Add `from: { chain }` to use your CEA on an external chain as the execution origin on Push Chain. `msg.sender` inside the target contract will be the CEA, not the UEA.

**Why CEAs exist.** When your Push Chain account first interacts with an external chain (e.g. calling Aave on Ethereum), the protocol deterministically deploys a **Chain Executor Account (CEA)** for you on that chain. This CEA:

1. **Preserves identity** — your actions on Ethereum are traceable to a stable, deterministic address derived from your Push Chain account.
2. **Isolates risk** — the CEA is a dedicated smart account, separate from your home wallet. External-chain actions can't affect funds outside the CEA.
3. **Enables payload execution** — the CEA is what actually holds assets and executes calldata on the external chain.

**When to use Route 3.** Use it when you need to bring state or assets _back_ to Push Chain from a CEA you've already deployed — because only the CEA can speak for what happened on that external chain.

Example flow — a universal vault:

1. Route 2: vault calls Aave on Ethereum via your **Ethereum CEA** to withdraw USDC.
2. **Route 3**: the vault moves the withdrawn USDC from your Ethereum CEA back to Push Chain (`from: { chain: ETHEREUM_SEPOLIA }`) — `msg.sender` on Push Chain is your Ethereum CEA, which holds the tokens.
3. Route 2 again: Push Chain forwards to a Solana lending protocol via your **Solana CEA**.

```ts
// Bring assets/state back from the Ethereum CEA to Push Chain
const tx = await client.universal.sendTransaction({
  from: { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }, // your Ethereum CEA as origin
  to: '0xVaultOnPushChain',
  data: PushChain.utils.helpers.encodeTxData({
    abi,
    functionName: 'depositFromEthereum',
  }),
});
await tx.wait();
// Inside 0xVaultOnPushChain: msg.sender === CEA(Ethereum Sepolia, userAddress)
// The CEA is the only address that can prove "these assets came from your Ethereum side".
```

```
User → Push vault
  Route 2 → Ethereum CEA → Aave (withdraw USDC)
  Route 3 ← Ethereum CEA → Push vault (receive USDC, msg.sender = Ethereum CEA)
  Route 2 → Solana CEA → Solana lending (deposit)
```

> Route 3 isn't for new outbound flows — use Route 2 for those. Route 3 is the return path from a CEA you've already deployed via prior Route 2 activity.

**Solana CEA as origin** — set `from: { chain: SOLANA_DEVNET }` to use the user's Solana CEA as the origin. `msg.sender` on Push Chain will be the Solana CEA address. Use `deriveExecutorAccount` beforehand if you need to fund it.

```ts
// Route 3 — Solana CEA origin → Push Chain contract
const tx = await client.universal.sendTransaction({
  from: { chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET }, // Solana CEA as origin
  to: '0xContractOnPushChain',
  data: PushChain.utils.helpers.encodeTxData({
    abi,
    functionName: 'increment',
  }),
});
await tx.wait();
// Inside 0xContractOnPushChain: msg.sender === CEA(Solana Devnet, userAddress)
```

---

### Multicall — Batch Multiple Calls

Pass an array to `tx.data` and set `tx.to` to the zero address. The zero-address target signals multicall mode to the SDK; individual call targets are in the `data` array.

> **External-chain origin only.** Push-native senders cannot use multicall and the SDK will throw. Ensure the signer's origin is an external chain when using this pattern.

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
| `to`                   | `string \| null`                         | Target address                             |
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

> External chain fields (`externalTxHash`, `externalChain`, `externalExplorerUrl`) are only available on `TxReceipt` after `tx.wait()` — not on the initial `TxResponse`.

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

| Property            | Type                               | Description                                                                                                 |
| ------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `initialTxHash`     | `string`                           | Hash of the user-signed Push Chain transaction — use this to reference it downstream                        |
| `initialTxResponse` | `TxResponse`                       | Full `TxResponse` for the coordinating Push Chain tx — use this when you need nonce, gas, or block metadata |
| `hops`              | `CascadeHopInfo[]`                 | All hops with routing and status                                                                            |
| `hopCount`          | `number`                           | Total hop count                                                                                             |
| `wait(opts?)`       | `Promise<CascadeCompletionResult>` | Wait for all hops to confirm                                                                                |
| `waitForAll(opts?)` | `Promise<CascadeCompletionResult>` | Alias for `wait`                                                                                            |

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

| Argument                             | Type                               | Default                                        | Description                                                               |
| ------------------------------------ | ---------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------- |
| `txHash`                             | `string`                           | —                                              | Hash/signature of the transaction on its origin chain                     |
| `options.chain`                      | `CHAIN`                            | `PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT` | Chain where the tx was originally submitted                               |
| `options.progressHook`               | `(event) => void`                  | `undefined`                                    | Progress callback (same shape as `sendTransaction`)                       |
| `options.waitForCompletion`          | `boolean`                          | `true`                                         | `true` = wait for confirmation; `false` = return after first status check |
| `options.advanced.pollingIntervalMs` | `number`                           | `2000`                                         | Poll interval in ms (min `500`)                                           |
| `options.advanced.timeout`           | `number`                           | `60000`                                        | Max wait ms before timeout error                                          |
| `options.advanced.rpcUrls`           | `Partial<Record<CHAIN, string[]>>` | `{}`                                           | Custom RPC URLs for status queries                                        |

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
try {
  const tx = await client.universal.sendTransaction({
    to: '0xRecipient',
    value: 1n,
  });
  const receipt = await tx.wait();
  if (receipt.status !== 1) throw new Error(`tx failed: ${receipt.hash}`);
  console.log('success');
} catch (e) {
  // Error codes and recovery actions: https://push.org/agents/errors.json
  console.error(e);
}
```

---

## Sign a Message

```ts
const message = new TextEncoder().encode('Hello Push Chain'); // string also accepted; Uint8Array recommended
const signature = await client.universal.signMessage(message); // returns Uint8Array
// To get a hex string: Buffer.from(signature).toString('hex')
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

### `formatUnits(value, decimals)` → `string`

Converts a raw smallest-unit amount back to a human-readable string.

| Argument   | Type                                                 | Description                                                        |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------------------ |
| `value`    | `bigint \| string`                                   | Raw amount in smallest units                                       |
| `decimals` | `number \| { decimals: number; precision?: number }` | Decimal places; pass an object to also round to `precision` places |

**Returns**: `string` — e.g. `'1.5'`, `'100.50'`

### `encodeTxData({ abi | idl, functionName, args })` → `string`

Encodes smart contract calldata without needing viem or ethers.js. Works for both EVM (ABI) and Solana (Anchor IDL) targets.

| Argument       | Type                 | Description                                                                                                                                                                |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `abi` \| `idl` | `any[]`              | EVM ABI array (`abi`) or Anchor IDL object (`idl`). Determines encoding: ABI → 4-byte selector + ABI-encoded args; IDL → 8-byte Anchor discriminator + Borsh-encoded args. |
| `functionName` | `string`             | Function (EVM) or instruction (Solana) name. Both `snake_case` and `camelCase` accepted for Solana.                                                                        |
| `args`         | `any[]` _(optional)_ | Function arguments, default `[]`. Use `bigint` for `uint256`/`u64`/`u128`.                                                                                                 |

**Returns**: `string` — hex-encoded calldata, e.g. `'0xd09de08a'`

```ts
// EVM target — use `abi` key
PushChain.utils.helpers.encodeTxData({
  abi,
  functionName: 'transfer',
  args: ['0xabc...', 1000n],
});
// args follow ABI types — use bigint for uint256 (passing 1000 instead of 1000n will fail strict TypeScript)
```

```ts
// Solana target — use `idl` key (not `abi`)
PushChain.utils.helpers.encodeTxData({
  idl: testCounterIdl, // Anchor IDL from target/idl/*.json
  functionName: 'receive_sol', // snake_case or camelCase both accepted
  args: [BigInt(0)], // use BigInt for u64/u128
});
```

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

### `getMoveableTokens(chainOrClient?)` → `{ tokens: MoveableToken[] }`

Returns supported assets that can be moved across chains (used in `tx.funds.token`).

| Argument        | Type                                    | Description                        |
| --------------- | --------------------------------------- | ---------------------------------- |
| `chainOrClient` | `CHAIN \| PushChainClient` _(optional)_ | Filter tokens for a specific chain |

**Returns**: `{ tokens: Array<{ chain, symbol, decimals, address }> }`

### `getPayableTokens(chainOrClient?)` → `{ tokens: PayableToken[] }`

Returns supported assets that can be used to pay gas or fund token movement (used in `tx.payGasWith.token`).

| Argument        | Type                                    | Description                        |
| --------------- | --------------------------------------- | ---------------------------------- |
| `chainOrClient` | `CHAIN \| PushChainClient` _(optional)_ | Filter tokens for a specific chain |

**Returns**: `{ tokens: Array<{ chain, symbol, decimals, address }> }`

### `getPRC20Address(token, options?)` → `{ address, chain, symbol, decimals, network }`

Resolves the Push Chain synthetic PRC20 address for a supported origin-chain token. Accepts either a `MoveableToken` (e.g., from `getMoveableTokens()`) or an object containing the origin `chain` and token `address`.

| Argument          | Type                                                  | Description                                                                                                                  |
| ----------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| _`token`_         | `MoveableToken \| { chain: string; address: string }` | Origin token — from `getMoveableTokens()` or explicit chain + address                                                        |
| `options.network` | `PushChain.CONSTANTS.PUSH_NETWORK`                    | Override the Push network. Defaults to client's initialized network. For example: `PushChain.CONSTANTS.PUSH_NETWORK.TESTNET` |

**Returns**: `{ address: 0x${string}, chain: CHAIN, symbol: string, decimals: number, network: PUSH_NETWORK }`

```ts
// Using { chain, address }
const prc20Alt = PushChain.utils.tokens.getPRC20Address({
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  address: '0x97F477B7f970D47a87B42869ceeace218106152a',
});
console.log('USDC.eth:', JSON.stringify(prc20Alt));

// Using a MoveableToken directly
const { tokens: moveable } = PushChain.utils.tokens.getMoveableTokens(
  PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
);
const ethMoveable = moveable.find((t) => t.symbol === 'ETH');
const {
  address: prc20Addr,
  symbol,
  decimals,
  network,
} = PushChain.utils.tokens.getPRC20Address(ethMoveable);
```

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

### `resolveControllerAccount(account, options?)` → `Promise<{ accounts }>`

Reverse-maps any executor account (UEA or CEA) back to its origin controlling wallet. Complement of `deriveExecutorAccount` — forward is UOA→executor, this is executor→UOA.

| Argument                   | Type                   | Description                                                                    |
| -------------------------- | ---------------------- | ------------------------------------------------------------------------------ |
| `account`                  | `string`               | Executor address — can be a UEA, CEA, or Push Chain account address            |
| `options.chain`            | `CHAIN` _(optional)_   | Required for CEA context — specifies the external chain the CEA is deployed on |
| `options.skipNetworkCheck` | `boolean` _(optional)_ | Deterministic resolution only, skip existence check. Default `false`           |

**Returns**: `Promise<{ accounts: Array<{ chain, chainName, address, type, exists, role? }> }>` — `type`: `'uea' | 'uoa' | 'cea'`; `role: 'controller'` marks the root controlling account

---

### `slippageToMinAmount(amount, { slippageBps })` → `string`

Calculates the minimum acceptable output amount given a slippage tolerance. Used when constructing `tx.payGasWith.minAmountOut` or validating swap quotes.

| Argument              | Type     | Description                                                     |
| --------------------- | -------- | --------------------------------------------------------------- |
| _`amount`_            | `string` | Input amount in smallest units, e.g. `'100000000'` for 100 USDC |
| `options.slippageBps` | `number` | Slippage in basis points — `100 = 1%`, `50 = 0.5%`              |

**Returns**: `string` — minimum out amount in smallest units, e.g. `'99000000'`

Full reference: https://push.org/agents/workflows/use-utility-functions.md

---

## Contract Helpers

> For **off-chain** UEA/CEA derivation from TypeScript, use `PushChain.utils.account.deriveExecutorAccount()` — see Utility Functions above. The UEAFactory below is for **on-chain Solidity** identity resolution. For the full Solidity contract pattern, see the `push-contracts` skill.

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

## Common Mistakes

| Symptom / Mistake                                            | Fix                                                                                                            |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `receipt.hash` is undefined / `tx` has no `.hash`            | `sendTransaction` returns a `TxResponse`, not a receipt — call `await tx.wait()` to get the receipt            |
| `wallet.sendTransaction()` used — tx reverts or is malformed | ethers/viem cannot produce a valid universal tx — replace with `client.universal.sendTransaction()`            |
| `PushChain.initialize()` rejects the signer                  | Raw ethers/viem wallet passed without wrapping — call `await PushChain.utils.signer.toUniversal(wallet)` first |
| `signMessage` return treated as a string                     | It returns `Uint8Array` — use `Buffer.from(sig).toString('hex')` if you need a hex string                      |
| Silent tx failure (no throw, no logs)                        | `tx.wait()` resolves even on reverts — always check `receipt.status === 1`                                     |
| Private key in source code                                   | Use `process.env.PRIVATE_KEY` — never hardcode keys in scripts or commit them to version control               |

> For Solana targets, use `encodeTxData({ idl, functionName, args })` and pass the result as `tx.data` — same `{ to, value, data }` shape as EVM. The SDK resolves program accounts, PDAs, and the sender's CEA automatically from the IDL.
>
> For read-only queries, use ethers.js or viem directly with RPC `https://evm.donut.rpc.push.org/` — `@pushchain/core` is not required.

## Downloadable Resources

Copy these files into your project — self-contained and ready to run:

| File                                                                                  | Purpose                                                                                |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`package.json`](https://push.org/agents/resources/push-backend/package.json)         | Dependencies: @pushchain/core, ethers, viem, @solana/web3.js, tsx                      |
| [`client-ethers.ts`](https://push.org/agents/resources/push-backend/client-ethers.ts) | ethers.js signer — Route 1 + Route 2                                                   |
| [`client-viem.ts`](https://push.org/agents/resources/push-backend/client-viem.ts)     | viem signer — Route 1, Route 2, cascade                                                |
| [`client-solana.ts`](https://push.org/agents/resources/push-backend/client-solana.ts) | Solana Keypair signer — Route 1 + Route 2 (Solana program via `encodeTxData({ idl })`) |

> [Resource index](https://push.org/agents/resources/push-backend/index.json) — machine-readable file list

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
