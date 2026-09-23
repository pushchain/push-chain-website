# Universal Read

## Purpose

Bring state from another blockchain (EVM or Solana) or from an HTTPS endpoint onto Push Chain, agreed on by validators and delivered on-chain. Balances, token balances, contract calls, storage slots, Solana program accounts and JSON fields from web APIs can all be read this way. The result lands in the **Universal Read Registry** (default) or in **your own contract** that inherits `UniversalReadClient`.

## When to Use

- A Push Chain contract must act on state from another chain or a web API: settle, unlock, pay out, rebalance
- A value from Ethereum, Solana or an API must be recorded on Push Chain with validator agreement
- Automation with no user online: keepers, governance outcomes, scheduled checks

**Do not use it** when only your frontend or backend needs the data and nothing on-chain acts on it. An ordinary RPC call is cheaper and instant; see [read-blockchain-state.md](https://push.org/agents/workflows/read-blockchain-state.md). A read is a paid, asynchronous request: it costs gas plus a protocol fee and a callback budget, and the result arrives after validators reach quorum.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Initialized client | `pushChainClient` from `PushChain.initialize(signer, { network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT })`, or `usePushChainClient()` in React |
| Funded Push account | Covers request gas, protocol fee and callback budget (test PC from https://faucet.push.org/). Not needed for `prepareRead` or `trackRead` |
| Registry | Universal Read Registry `0x00000000000000000000000000000000000000b2` on Donut (`PushChain.CONSTANTS.READ.UNIVERSAL_READ_REGISTRY_ADDRESS.TESTNET_DONUT`). On other networks, pass your own receiver through `callback` |
| Receiver contract (optional) | Inherits `UniversalReadClient`, constructed with Universal Callback `0x00000000000000000000000000000000000000c2` |

## Choose the Operation

| Goal | Method | Broadcasts? | Docs |
|------|--------|-------------|------|
| Read one value | `pushChainClient.universal.read(subject, {options})` | Yes, paid | https://push.org/docs/chain/build/universal-read/ |
| Quote a read without paying | `pushChainClient.universal.prepareRead(subject, {options})` | No, no funds needed | https://push.org/docs/chain/build/read-multiple-universal-states/ |
| Read several values with one signature | `prepareRead` for each, then `pushChainClient.universal.executeReads(preparedReads, {options})` | Yes, paid | https://push.org/docs/chain/build/read-multiple-universal-states/ |
| Resume or inspect a read | `pushChainClient.universal.trackRead({ requestId } \| { txHash }, {options})` | No, a read-only client is enough | https://push.org/docs/chain/build/track-universal-read/ |
| Act on the result in a contract | Receiver inheriting `UniversalReadClient`; request through the SDK (`read` with `callback`) or from within the contract (`_requestRead`) | Yes, paid | https://push.org/docs/chain/build/contract-initiated-universal-read-and-callback/ |

## Step 1: Read Universal State

**`pushChainClient.universal.read(subject, {options}): Promise<UniversalReadResponse>`**

```typescript
const result = await pushChainClient.universal.read(
  '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF', // account to read
  { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }, // native ETH balance on Sepolia
);

console.log(result.status); // READ.STATUS.FULFILLED once the read completes
console.log(result.value); // defined only when the read succeeded end to end
```

### Read Parameters

Pass at most one query option (`token`, `abi` or `idl` with `functionName` and `args`, `storageSlot`, or `web2`). With none, `read` returns the subject's native balance. Contract-call reads accept any function in the ABI.

| **Arguments** | **Type** | **Description** |
| ------------- | -------- | --------------- |
| _`subject`_ | `string` | What to read: an account address for a balance, a contract address for a contract call or storage slot, or a URL for a Web2 read. Solana subjects are base58. |
| _`options.chain`_ | `CHAIN` | Where to read from. Any supported EVM or Solana chain, or `CHAIN.WEB2` for an HTTPS endpoint. Decides which query option applies; see the branches below. Pass at most one query option; with none, `read` returns the subject's native balance. <ConstantsDropdown variant="CHAIN" /> |
| :: Pass one of the following, based on `options.chain` | | |
| ↳ **If `options.chain` is a Web3 chain** | | |
| `options.token` | `string` | Token balance of `subject`. EVM: the ERC-20 contract address, read via `balanceOf`. Solana: the SPL mint address; the SDK derives the associated token account. |
| `options.abi` \| `options.idl` | `any[]` | Either an EVM ABI array or an Anchor IDL object. The input shape determines which encoding is produced and how `value` is decoded, so the result is typed. |
| `options.functionName` | `string` | The function (EVM) or instruction (Solana) name to encode. Both `snake_case` and `camelCase` are accepted and matched against the IDL. |
| `options.args` | `any[]` | Positional arguments. Use `BigInt` for `u64`/`u128`; 0x-hex 32-byte strings are auto-converted to Solana `PublicKey` when the IDL declares a `pubkey` arg. |
| `options.storageSlot` | `bigint` \| `Hex` | EVM only. One storage word from the subject contract. Not needed for Solana, as Solana has no storage slots. |
| ↳ **If `options.chain` is a Web2 / HTTPS endpoint** | | |
| `options.web2` | `object` | Required. Describes the HTTPS request and which JSON fields to extract. Fields below. |
| `options.web2.extract` | `Array<{ path, valueType, decimals? }>` | Required. 1 to 16 JSONPath entries. Results come back as an array in this order. |
| `options.web2.extract[].path` | `string` | JSONPath into the response body, for example `$.data.price`. |
| `options.web2.extract[].valueType` | `'uint256'` \| `'int256'` \| `'bool'` \| `'string'` \| `'bytes'` | How the extracted value is encoded on-chain. |
| `options.web2.extract[].decimals` | `number` | Optional, numeric types only. The value is multiplied by 10 to this power and truncated before encoding, so `1.2345` with `decimals: 2` becomes `123`. |
| `options.web2.method` | `'GET'` \| `'POST'` | Optional. Defaults to `GET`. |
| `options.web2.headers` | `Record<string, string>` | Optional. Request headers. Written to a public event log forever, so never include secrets. |
| `options.web2.body` | `string` \| `Uint8Array` | Optional, `POST` only. A body on `GET` is rejected. |
| `options.web2.timeoutMs` | `number` | Optional. Validator fetch timeout, default `5000`, clamped by validators. |
| :: | | |
| `options.callback` | `{ target, gasLimit, abi, functionName, args? }` | Optional. Routes the request through your own receiver contract instead of the registry; fields in [Callback Arguments](/docs/chain/build/universal-read/#callback-arguments). |
| `options.waitForCompletion` | `boolean` | Default `true`. When `false`, resolves once the request is confirmed on Push Chain and indexed by the node (up to 30 s), before validators vote. If it is not indexed in that window it throws `ReadNotFoundError`; the request is already paid, so resume with `trackRead({ txHash: err.txHash })`.<br /><br />Call `wait()` on the response to finish. |
| `options.progressHook` | `(progress: ProgressEvent) => void` | Callback for progress updates through the read lifecycle. |

### Callback Arguments

| Arguments | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `options.callback.target` | `string` | Universal Read Registry | Address of your receiver contract on Push Chain (inherits `UniversalReadClient`). Omit to use the registry. |
| `options.callback.gasLimit` | `bigint` | `500_000n` | Gas reserved for the result callback (`_onReadResult`), not for the request entrypoint. |
| `options.callback.abi` | `Abi` | - | ABI of your receiver, used to call its payable request entrypoint. Required with `target`. |
| `options.callback.functionName` | `string` | - | The payable request entrypoint on your receiver, for example `request`. Required with `target`. It must emit exactly one `ReadRequested` per prepared read. |
| `options.callback.args` | `(spec, gasLimit) => unknown[]` | `(spec, gas) => [spec, gas]` | Optional. Only needed when your entrypoint does not take `(spec, gasLimit)` in that order.<br /><br />The SDK builds the request for you and calls this to map it and the callback gas onto your entrypoint's argument list, for example `(spec, gas) => [gas, spec, extra]`. |

### Advanced Arguments

| Arguments | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `options.blockNumber` | `bigint` | Oracle height minus `minConfirmations` | EVM only. Pins the read to a specific destination block. The oracle-observed height can lag the real head. |
| `options.minConfirmations` | `number` | `1` | EVM only. Confirmations the destination block must have before validators read it. |
| `options.expiryBlocks` | `bigint` | `300n` | Request lifetime in Push Chain blocks. An unfulfilled request expires and refunds the unused callback budget. |
| `options.maxFee` | `bigint` | SDK estimated | Cap on the upfront payment (protocol fee plus callback budget). |
| `options.refundTo` | `string` | Your Push account | Where unused callback budget is sent. Must accept native Push transfers; a contract without a payable `receive()` forfeits the refund. |
| `options.advanced.pollingIntervalMs` | `number` | `2000` | Milliseconds between status polls. Minimum `500`. |
| `options.advanced.timeout` | `number` | Derived from expiry, at most `180000` | Maximum milliseconds this caller waits. Timing out does not cancel the request; resume it with [`trackRead`](/docs/chain/build/track-universal-read/). An explicit value overrides the cap. |
| `options.advanced.enforceGasCheck` | `boolean` | `false` | `false` warns and proceeds when the pre-flight balance check finds a shortfall. `true` throws before broadcasting. |

### Types of Universal Read

**EVM** (Ethereum Sepolia, Arbitrum Sepolia, Base Sepolia, BNB Testnet). `blockNumber` and `minConfirmations` pin an EVM read to a specific block.

```typescript
const CHAIN = PushChain.CONSTANTS.CHAIN;

// Native balance (ETH)
await pushChainClient.universal.read(holder, { chain: CHAIN.ETHEREUM_SEPOLIA });

// Token balance: ERC-20 balanceOf(holder)
await pushChainClient.universal.read(holder, {
  chain: CHAIN.ETHEREUM_SEPOLIA,
  token: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
});

// Typed contract call: the ABI encodes the call and decodes the result
await pushChainClient.universal.read(tokenAddress, {
  chain: CHAIN.ETHEREUM_SEPOLIA,
  abi: [
    {
      type: 'function',
      name: 'totalSupply',
      stateMutability: 'view',
      inputs: [],
      outputs: [{ type: 'uint256' }],
    },
  ] as const,
  functionName: 'totalSupply',
});

// Storage slot
await pushChainClient.universal.read(contractAddress, {
  chain: CHAIN.ETHEREUM_SEPOLIA,
  storageSlot: 0n,
});
```

**Solana** (Solana Devnet). Solana reads use finalized state, so there is nothing to pin. Solana has no storage slots; a program account holds the state, and `idl` decodes it the way `abi` decodes a call result on EVM.

```typescript
const CHAIN = PushChain.CONSTANTS.CHAIN;

// Native balance (lamports)
await pushChainClient.universal.read(solanaHolder, { chain: CHAIN.SOLANA_DEVNET });

// Token balance: the holder's SPL token account for the mint
await pushChainClient.universal.read(solanaHolder, {
  chain: CHAIN.SOLANA_DEVNET,
  token: mintAddress,
});

// Program account, decoded with the program's Anchor IDL (the closest thing to a storage slot on Solana)
await pushChainClient.universal.read(accountAddress, {
  chain: CHAIN.SOLANA_DEVNET,
  idl: programIdl,
});
```

**Web2** (`CHAIN.WEB2`, an HTTPS endpoint). `extract` takes up to 16 entries and results come back as an array in the same order. Requests are GET by default; set `method` to POST to send a body, and `timeoutMs` to change the 5 second fetch timeout. Validators only agree when every one of them extracted identical bytes, so pick stable fields or lower numeric precision with `decimals`. URLs, headers and bodies are written to a public event log: never include API keys, bearer tokens or other secrets.

```typescript
const CHAIN = PushChain.CONSTANTS.CHAIN;

// Web2: JSON fields from an HTTPS endpoint
await pushChainClient.universal.read('https://jsonplaceholder.typicode.com/users/1', {
  chain: CHAIN.WEB2,
  web2: {
    extract: [
      { path: '$.id', valueType: 'uint256' },
      { path: '$.name', valueType: 'string' },
    ],
  },
});
```

## Step 2: Check the Result

**`outcome` is the success signal.** `done.outcome === PushChain.CONSTANTS.READ.OUTCOME.SUCCESS` means the source read succeeded, your callback ran and `value` is set. Any other outcome names what went wrong:

| `outcome` | Meaning | What to do |
| --------- | ------- | ---------- |
| `SUCCESS` | Source succeeded, callback delivered, `value` set (raw bytes when no shape is known) | Use `value` |
| `SOURCE_ERROR` | FULFILLED, but the destination returned an error | Check `raw.errorCode`; fix the query, submit a new read |
| `CALLBACK_FAILED` | FULFILLED, but the receiver reverted or ran out of gas | Check `callbackFailReason`; raise `callback.gasLimit` or fix the receiver |
| `DECODE_FAILED` | Delivered, but `resultData` did not match the expected shape | Check `decodeError`; resume with the right `resultShape` |
| `EXPIRED` / `FAILED` / `ABORTED` | The terminal status | Check `fees.refunded`, `errorMsg`, `pcTx` |
| `PENDING` | Not terminal yet | Call `wait()` |
| `UNKNOWN` | FULFILLED, but the fulfil receipt could not be read; delivery unconfirmed | `refresh()` later or check `pcTx`; never resubmit |

The debugging fields behind it:

| Field | What it tells you |
| ----- | ----------------- |
| `status` | Lifecycle of the request: `PENDING`, `VOTING`, `FULFILLED`, `EXPIRED`, `FAILED`, `ABORTED`. `FULFILLED` means the read completed; it does not by itself mean your callback succeeded. |
| `raw.status` | What the source returned: `READ.RESULT_STATUS.SUCCESS`, or `ERROR` with `raw.errorCode`. |
| `callbackDelivered` | Whether the receiver contract ran. `false` when it reverted or ran out of gas; `callbackFailReason` carries the revert data. |
| `decodeError` | Why the result bytes could not be decoded into `value`, for example an ABI that does not match the query. |

```typescript
const pending = await pushChainClient.universal.read(subject, { chain, waitForCompletion: false });
// Persist both references before waiting: either one resumes the read in any session.
save({ requestId: pending.requestId, txHash: pending.txHash });

const done = await pending.wait();
if (done.outcome !== PushChain.CONSTANTS.READ.OUTCOME.SUCCESS) {
  // The outcome says why: see the tables above.
  console.log({
    outcome: done.outcome,
    status: done.status,
    rawStatus: done.raw?.status,
    errorCode: done.raw?.errorCode,
    callbackDelivered: done.callbackDelivered,
    callbackFailReason: done.callbackFailReason,
    decodeError: done.decodeError,
  });
} else {
  use(done.value);
}
```

### UniversalReadResponse

| Property | Type | Description |
| -------- | ---- | ----------- |
| `requestId` | `string` | Unique identifier of this read. Use it to resume tracking in another session. |
| `requestIdUint` | `bigint` | The same ID as the `uint256` contracts key results by, for example registry `resultByRequestId`. |
| `txHash` | `string` | Push Chain transaction that submitted the request. |
| `chain` | `CHAIN` | Destination that was read. |
| `outcome` | `READ.OUTCOME` | The success signal: `SUCCESS`, `SOURCE_ERROR`, `CALLBACK_FAILED`, `DECODE_FAILED`, `EXPIRED`, `FAILED`, `ABORTED`, `PENDING`, `UNKNOWN`. |
| `status` | `READ.STATUS` | Lifecycle: `PENDING`, `VOTING`, `FULFILLED`, `EXPIRED`, `FAILED`, `ABORTED`. |
| `isTerminal` | `boolean` | `true` once the read can no longer change. |
| `callbackDelivered` | `boolean` | `FULFILLED` only. `true` when the receiver ran; `false` when it reverted or ran out of gas; `undefined` when the fulfil receipt could not be read (`outcome` `UNKNOWN`). |
| `callbackFailReason` | `string` | Revert data from a failed callback. |
| `value` | `T` | Decoded result. Present only when `outcome` is `SUCCESS`. Typed from your query: `bigint` for balances, `Hex` for storage, the ABI return type for calls, an array for Web2. |
| `decodeError` | `string` | Why `value` is absent although the read succeeded. |
| `raw` | `object` \| `null` | Consensus result: `status` (`READ.RESULT_STATUS`), `resultData` bytes and `errorCode`. `null` before validators have voted. |
| `errorMsg` | `string` | Node-reported error, if any. |
| `fees` | `object` | `paid`, `protocolFee`, `callbackBudget`, plus `burned`, `refunded` and `refundFailed` from settlement logs. They stay `undefined` while pending, for aborted reads, and when those receipts or block results cannot be read. |
| `request` | `object` | The on-chain request: `spec`, `callbackTarget`, `originalFunder`, `refundTo`, `callbackGasLimit`, `logIndex`, `createdAtHeight`. |
| `pcTx` | `array` | Push Chain transactions the node sent for this read (fulfil, settle, expiry). |
| `explorerUrl` | `string` | Explorer link for the request transaction (`https://donut.push.network/tx/<txHash>`). |
| `wait` | `function` | `wait({ timeoutMs?, pollingIntervalMs?, resultShape? })` polls until the read is terminal and returns the final response. Options are flat and optional. Only a timeout throws. |
| `refresh` | `function` | Re-runs the lookup and returns one fresh snapshot without polling. |

JSON Schema: https://push.org/agents/schemas/universal-read-response.json

### Progress Events

`progressHook` receives `READ-TX-101` (read requested) through `READ-TX-104-02` (request confirmed, `requestId` known); `READ-TX-104-03` / `104-04` / `104-05` while the request is looked up (looking up, found, not found); `READ-TX-105-*` (awaiting quorum, voting, approaching expiry at 30 or fewer Push blocks left); `READ-TX-106-*` (callback delivered, reverted, gas settled, refund sent or rejected, including on expiry) and a terminal `READ-TX-199-01` (only when `outcome` is `SUCCESS`), `READ-TX-199-02` (any other terminal outcome; `status` names it) or `READ-TX-199-03` (client timeout; resume with `trackRead`). Batches add `READ-TX-001` to `READ-TX-999-03`. Full table: https://push.org/docs/chain/build/universal-read/#read-progress-hook

## Step 3: Read Multiple Universal States (optional)

**`pushChainClient.universal.prepareRead(subject, {options}): Promise<PreparedRead>`** prepares a read without executing it. Nothing is broadcast and nothing is paid until you execute, so no funds are needed. It accepts the same subject and query options as `read`, plus `callback`, `blockNumber`, `minConfirmations`, `expiryBlocks`, `maxFee` and `refundTo`; it does not take `waitForCompletion`, `progressHook` or `advanced`, which belong to `executeReads`.

```typescript
const prepared = await pushChainClient.universal.prepareRead('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});

console.log(prepared.fees.total); // what this read will cost, in PC
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `queryKey` | `string` | Logical identity of the query, independent of pinning and payment. |
| `chain` | `CHAIN` | Destination the read was prepared for. |
| `spec` | `ReadSpec` | The validated on-chain request struct. |
| `specTuple` | `array` | Positional form of `spec` for `encodeFunctionData`. |
| `encodedSpec` | `string` | `abi.encode(spec)` for hand-assembled calldata. |
| `value` | `bigint` | `msg.value` to send: protocol fee plus callback budget. |
| `fees` | `object` | `protocolFee`, `callbackBudget` and `total` (equal to `value`). |
| `callbackGasLimit` | `bigint` | Gas reserved for the result callback. |
| `callback` | `object` | The request entrypoint retained for `executeReads`. |
| `resultShape` | `object` | How the result is decoded, retained through execution. |
| `preflight` | `object` | Oracle height, Push height, gas price and contract addresses used to build the spec. |
| `warnings` | `string[]` | Advisories such as a sensitive header or a non-UEA refund recipient. |

**`pushChainClient.universal.executeReads(preparedReads: PreparedRead[], options?: { waitForCompletion?, progressHook?, advanced? }): Promise<BatchReadResponse>`** executes an ordered array of prepared reads as one flow. Where the wallet supports atomic batching this is a single transaction; otherwise the reads go out as sequential transactions.

```typescript
const CHAIN = PushChain.CONSTANTS.CHAIN;

const ethBalance = await pushChainClient.universal.prepareRead(holder, { chain: CHAIN.ETHEREUM_SEPOLIA });
const solBalance = await pushChainClient.universal.prepareRead(solanaHolder, { chain: CHAIN.SOLANA_DEVNET });

// Live progress for submission and every read in the batch.
const batch = await pushChainClient.universal.executeReads([ethBalance, solBalance], {
  progressHook: (event) => {
    console.log('[' + event.id + '] ' + event.level + ' - ' + event.title);
  },
});

const [eth, sol] = await batch.wait(); // results in prepared order
```

| **Arguments** | **Type** | **Description** |
| ------------- | -------- | --------------- |
| _`preparedReads`_ | `PreparedRead[]` | Reads returned by `prepareRead`. Results come back in this order. Without atomic batching in the wallet, they are submitted as sequential transactions. |
| `options.waitForCompletion` | `boolean` | Default `true`. When `false`, returns as soon as the requests are submitted, before validators vote.<br /><br />Call `wait()` on the response to finish. |
| `options.progressHook` | `(progress: ProgressEvent) => void` | Callback for batch and per-read progress events; see [ProgressHook Type and Response](#execute-reads). |

`options.advanced` takes `pollingIntervalMs`, `timeout` and `enforceGasCheck` (see Advanced Arguments above).

| Property | Type | Description |
| -------- | ---- | ----------- |
| `txHash` | `string` | Primary Push Chain transaction hash. |
| `transactionHashes` | `string[]` | All request transactions in submission order when execution was not atomic. |
| `reads` | `UniversalReadResponse[]` | One response per prepared read, in input order. |
| `count` | `number` | Number of reads submitted. |
| `atomic` | `boolean` | Whether submission was all-or-nothing. It says nothing about validator fulfillment, which is per read. |
| `wait` | `function` | Waits until every read is terminal and returns the responses in input order. Only a timeout throws. |

- **Fulfillment is per read**: `atomic` only describes the submission. Validators fulfill each read on its own, so check `value` on every response.
- **Partial batches**: with sequential submission, an earlier read can exist even if a later transaction fails. Check the hashes on the error before resubmitting, or you pay twice. A prepared read that fails revalidation must be prepared again.
- **Fees**: each read carries its own fee and the batch costs their sum. Nothing is charged at prepare time.

## Step 4: Track Universal Read

**`pushChainClient.universal.trackRead({ requestId } | { txHash }, {options}): Promise<UniversalReadResponse | UniversalReadResponse[]>`**

Tracking by transaction hash returns an array because one transaction can carry several reads. Tracking works with a read-only client that has no signer and no funds: after a page refresh, from a backend, or when `read()` timed out at the client while the request kept running on chain.

```typescript
const snapshot = await pushChainClient.universal.trackRead(
  { requestId },
  {
    progressHook: (progress) => {
      console.log(progress.id + ': ' + progress.title);
    },
  }
);

const done = await snapshot.wait();
console.log(done.outcome, done.value); // value is set only when outcome is SUCCESS
```

`trackRead()` first looks the request up. It retries for up to 30 seconds while the node indexes the request, then throws `ReadNotFoundError` (`code === 'READ_NOT_FOUND'`); retry with the same reference, never resubmit. A settled read is found on the first try.

| **Arguments** | **Type** | **Default** | **Description** |
| ------------- | -------- | ----------- | --------------- |
| _`ref.requestId`_ \| _`ref.txHash`_ | `Hex` \| `bigint` (`requestId`), `Hex` (`txHash`) | - | The read's request ID (0x-hex or `bigint`), or the Push Chain transaction that submitted it. Pass one. |
| `options.resultShape` | `{ kind: 'evmCall', abi, functionName }` and others | Inferred | How to decode `resultData`. Balances, storage and Web2 reads are inferred from the on-chain query. A typed contract call resumed in a new session needs it because the ABI is not on chain; without it `value` stays raw bytes. |
| `options.progressHook` | `(progress: ProgressEvent) => void` | `undefined` | Callback invoked during the lookup, on `refresh()`, and at each lifecycle step while `wait()` polls. See [ProgressHook Type and Response](#track-progress-hook) below. |

| Arguments | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `options.advanced.pollingIntervalMs` | `number` | `2000` | Milliseconds between polls, during the lookup and when calling `wait()`. Minimum: `500`. |
| `options.advanced.timeout` | `number` | Derived from expiry, at most `180000` | Maximum milliseconds `wait()` polls before throwing `ReadTimeoutError` with `code === 'READ_TIMEOUT'`. Timing out cancels nothing; the request keeps running and you can track it again. It does not change the 30-second lookup window. |

Options passed to `trackRead()` carry into the snapshot's `wait()`, which also accepts flat `{ timeoutMs, pollingIntervalMs, resultShape }`.

A typed contract call has no ABI on chain, so pass the ABI and function name through `resultShape` when you resume it in a new session:

```typescript
const snapshot = await pushChainClient.universal.trackRead(
  { requestId },
  { resultShape: { kind: 'evmCall', abi: tokenAbi, functionName: 'totalSupply' } },
);
```

## Step 5: Contract-Initiated Universal Read and Callback (optional)

Your own Push Chain contract can receive the result and act on it. Validators read the source, agree on the bytes, and **Universal Callback** (`0x00000000000000000000000000000000000000c2`, address book name "Universal Read / Callback") delivers them into your contract. The result becomes contract state in the same transaction that delivers it.

| Dimension | Universal Read | Contract-Initiated Universal Read and Callback |
|-----------|----------------|-----------------------------------------------|
| **Who receives the result** | The Universal Read Registry. | Your contract, in `_onReadResult`. |
| **Where the result lives** | Registry storage, exposed by the SDK as `value`. | Your storage, in whatever shape you write. |
| **Who requests** | The SDK, through `read`. | The SDK through `read` with `callback`, or your contract on its own. |
| **Who pays** | The requesting wallet. | `msg.value` on your request entrypoint. The SDK quotes it; a contract sends it. |
| **Refunds** | Back to the requesting account. | To `revertRecipient`, which defaults to your contract. |
| **SDK involvement** | Required. | Optional. A contract can build the request itself. |

### UniversalReadClient

Inherit `UniversalReadClient` (source: https://github.com/pushchain/push-chain-core-contracts/blob/core-testnet/src/UniversalReadClient.sol). You write two functions: a payable request entrypoint that calls `_requestRead(spec, localState, callbackGasLimit)`, and `_onReadResult(requestId, resultData, localState)`, which receives the bytes. The base contract's `onUniversalData` accepts deliveries only from Universal Callback; `getLocalContext(requestId)` returns the pending `localState`; `universalCallback()` returns the bound address. `_requestRead` sets `revertRecipient` to your contract when you leave it empty, so keep a payable `receive()` or point it at an EOA.

### ReadSpec

```solidity
struct ReadSpec {
    UniversalAccountId account;      // { chainNamespace, chainId, owner }: where to read
    bytes   query;                   // Encoded query envelope for that chain family
    uint16  minConfirmations;        // At least 1
    uint64  blockNumber;             // Pinned source block, at most the oracle height
    uint64  expiryPushChainHeight;   // Push Chain block after which the request expires
    uint256 maxFee;                  // Upper bound on msg.value the request accepts
    address revertRecipient;         // Receives the unused callback budget
}
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| `account.chainNamespace` | `string` | Bare namespace: `eip155`, `solana` or `web2`. |
| `account.chainId` | `string` | Chain ID within the namespace, for example `11155111` for Ethereum Sepolia. |
| `account.owner` | `bytes` | The account being read on Solana (32 bytes). For EVM reads validators do not use it; any non-empty bytes are accepted. |
| `query` | `bytes` | The chain family's query envelope. For EVM: `abi.encode` of `(uint8 queryType, (uint8 refType, uint64 blockNumber) blockRef, bytes payload)`. |
| `minConfirmations` | `uint16` | Confirmations the source block must have before validators read it. Minimum `1`. |
| `blockNumber` | `uint64` | Source block to read at. Must be non-zero and at most the height Universal Core has observed for that chain. `0` for Web2. |
| `expiryPushChainHeight` | `uint64` | Must be greater than the current Push Chain block. The SDK uses the current block plus 300. |
| `maxFee` | `uint256` | The request reverts when `msg.value` exceeds it. Set it to `msg.value` when you have no separate cap. |
| `revertRecipient` | `address` | Receives the unused callback budget on settlement and the full budget on expiry. Must accept native transfers. |

### Deploy a Receiver

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {UniversalReadClient} from "push-chain-core-contracts/src/UniversalReadClient.sol";
import {ReadSpec} from "push-chain-core-contracts/src/libraries/ReadTypes.sol";

/**
 * @title ExternalStateInbox
 * @notice Requests universal reads and stores each delivered result by request ID.
 */
contract ExternalStateInbox is UniversalReadClient {
    /// @notice The only Push Chain account allowed to submit requests
    address public immutable REQUESTER;

    /// @notice Raw result bytes, keyed by the numeric request ID
    mapping(uint256 => bytes) public results;

    /**
     * @param callbackAddress The Universal Callback contract that delivers results
     * @param requester_ The Push Chain account that will submit requests
     */
    constructor(address callbackAddress, address requester_)
        UniversalReadClient(callbackAddress)
    {
        require(requester_ != address(0), "zero requester");
        REQUESTER = requester_;
    }

    /**
     * @notice Payable request entrypoint the SDK calls
     * @param spec The prepared read, supplied by the SDK
     * @param gasLimit Gas reserved for _onReadResult
     * @return The numeric request ID
     */
    function request(ReadSpec calldata spec, uint64 gasLimit)
        external payable returns (uint256)
    {
        require(msg.sender == REQUESTER, "only requester");
        return _requestRead(spec, abi.encode(msg.sender), gasLimit);
    }

    /**
     * @dev Called by the base contract when Universal Callback delivers a result.
     *      Empty resultData means the source returned an error.
     */
    function _onReadResult(uint256 requestId, bytes calldata resultData, bytes memory)
        internal override
    {
        if (resultData.length == 0) return;
        results[requestId] = resultData;
    }

    /// @dev Receives the unused callback budget
    receive() external payable {}
}
```

Constructor arguments on Donut:

| Argument | Value |
| -------- | ----- |
| `callbackAddress` | `0x00000000000000000000000000000000000000c2`, the [Universal Read / Callback](/docs/chain/setup/smart-contract-address-book/#push-chain-core-functionalities) contract. |
| `requester_` | The address that will submit requests. For an SDK caller, `pushChainClient.universal.account`. |

**`requester_` must equal the `msg.sender` your receiver sees when a read is requested.** For a caller using the SDK that is `pushChainClient.universal.account` on the client that will call `read`, which is not always the wallet that deployed the contract.

### Request Path A: Through the SDK

Point `read` at your receiver by passing `callback`. The SDK prepares the read, calls your payable entrypoint with the prepared `ReadSpec` and the callback gas, and waits for the result.

```typescript
const result = await pushChainClient.universal.read(holder, {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  callback: {
    target: receiverAddress,
    gasLimit: 200_000n,       // gas for _onReadResult, up to 1_000_000n
    abi: receiverAbi,
    functionName: 'request',  // your payable request entrypoint
  },
});

console.log(result.callbackDelivered); // true once _onReadResult ran
```

### Request Path B: From Within Your Contract

A contract that requests on its own builds the `ReadSpec` itself. This example pins the read at `UniversalCore.chainHeightByChainNamespace("eip155:11155111")`, reads the Ethereum Sepolia ETH balance of an address, and stores it by holder.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {UniversalReadClient} from "push-chain-core-contracts/src/UniversalReadClient.sol";
import {ReadSpec} from "push-chain-core-contracts/src/libraries/ReadTypes.sol";
import {UniversalAccountId} from "push-chain-core-contracts/src/libraries/Types.sol";

interface IUniversalCore {
    function chainHeightByChainNamespace(string calldata caip2) external view returns (uint256);
}

/**
 * @title BalanceWatcher
 * @notice Requests the Ethereum Sepolia ETH balance of an address with no SDK in the loop.
 */
contract BalanceWatcher is UniversalReadClient {
    /// @dev EVM query envelope. abi.encode of this struct is what validators decode.
    struct BlockRef { uint8 refType; uint64 blockNumber; }
    struct EvmQuery { uint8 queryType; BlockRef blockRef; bytes payload; }

    address public constant UNIVERSAL_CORE = 0x00000000000000000000000000000000000000C0;
    uint8 public constant QUERY_ACCOUNT_BALANCE = 0;

    /// @notice Latest delivered balance per holder, in wei
    mapping(address => uint256) public balances;

    constructor(address callbackAddress) UniversalReadClient(callbackAddress) {}

    /**
     * @notice Request the Sepolia ETH balance of `holder`
     * @dev msg.value must cover the protocol fee quoted by Universal Callback's estimateFee.
     *      The excess is the callback budget; what the callback does not use comes back.
     */
    function requestBalance(address holder) external payable returns (uint256) {
        uint64 height = uint64(IUniversalCore(UNIVERSAL_CORE).chainHeightByChainNamespace("eip155:11155111"));

        bytes memory query = abi.encode(EvmQuery({
            queryType: QUERY_ACCOUNT_BALANCE,
            blockRef: BlockRef({ refType: 0, blockNumber: height }),
            payload: abi.encode(holder)
        }));

        ReadSpec memory spec = ReadSpec({
            account: UniversalAccountId({ chainNamespace: "eip155", chainId: "11155111", owner: abi.encodePacked(holder) }),
            query: query,
            minConfirmations: 1,
            blockNumber: height,
            expiryPushChainHeight: uint64(block.number + 300),
            maxFee: msg.value,
            revertRecipient: address(this)
        });

        return _requestRead(spec, abi.encode(holder), 200_000);
    }

    /// @dev Empty resultData means the source returned an error; nothing is stored.
    function _onReadResult(uint256, bytes calldata resultData, bytes memory localState)
        internal override
    {
        if (resultData.length == 0) return;
        address holder = abi.decode(localState, (address));
        balances[holder] = abi.decode(resultData, (uint256));
    }

    /// @dev Receives the unused callback budget
    receive() external payable {}
}
```

The query envelope is rigid. Validators decode `query` as one ABI-encoded tuple, so build it with `abi.encode` of a struct, never as three separate parameters:

| Query | `queryType` | `payload` | `resultData` |
|-------|-------------|-----------|--------------|
| Native balance | `0` | `abi.encode(address holder)` | `abi.encode(uint256)` |
| Contract call | `1` | `abi.encode(address target, bytes callData)` | Raw return bytes of the call |
| Storage slot | `2` | `abi.encode(address target, bytes32 slot)` | The 32-byte word |

Solana and Web2 envelopes carry more fields. Build those with `prepareRead` and pass `prepared.specTuple` to your entrypoint.

### Read the Result On-Chain

```solidity
uint256 balance = abi.decode(resultData, (uint256));   // balance, token balance, lamports
address holder = abi.decode(localState, (address));    // whatever you stored at request time
```

**Empty `resultData` means the source returned an error** (the target had no code at that block, the call reverted, or the endpoint failed). Return early rather than decoding; decoding empty bytes reverts, burns the callback budget and marks the callback as failed. An expired request never reaches your callback.

### Verify From Off-Chain

```typescript
const done = await pushChainClient.universal.trackRead({ requestId: result.requestId }).then((read) => read.wait());
if (done.outcome !== PushChain.CONSTANTS.READ.OUTCOME.SUCCESS) throw new Error('Read did not succeed: ' + done.outcome);

const inbox = new ethers.Contract(receiverAddress, receiverAbi, provider);
const stored = await inbox.results(result.requestIdUint);
```

`results` is keyed by the numeric request ID, which the SDK exposes as `requestIdUint` next to the hex `requestId`.

### Fees and Refunds

| Item | What happens |
|------|--------------|
| **Protocol fee** | Quoted by `estimateFee(chainNamespace, chainId)` on Universal Callback. Taken from `msg.value` at request time and not refunded. |
| **Callback budget** | Everything in `msg.value` above the protocol fee. After the callback runs, the gas it consumed is burned from the budget and the rest is sent to `revertRecipient`. |
| **Expiry** | A request that is not executed by `expiryPushChainHeight` expires and the full callback budget is refunded. The protocol fee is not. |
| **Refund delivery** | Refunds are pushed to `revertRecipient`. A contract without a payable `receive()` rejects the push and the refund is not delivered. |

### Security

- Only Universal Callback can deliver: do not override `onUniversalData`; put your logic in `_onReadResult`.
- Gate the request entrypoint to the accounts you expect (as `REQUESTER` does), or make it deliberately public and treat each result as untrusted input.
- Callback arrival proves validators agreed on the bytes for the spec that was submitted, not that the spec was the one you wanted. Record what you expect in `localState` and check it in the callback.
- Starting a new `_requestRead` inside `_onReadResult` is not supported. Start follow-up reads in a separate transaction.

### Limitations

| Area | Constraint |
|------|------------|
| **No synchronous result** | The request and the delivery are separate transactions. There is no in-call return value. |
| **Callback gas** | At most 1,000,000 gas per callback. Larger work must be split across transactions. |
| **One request per prepared read** | On the SDK path the entrypoint must call `_requestRead` exactly once per prepared read. |
| **Query envelopes** | EVM envelopes are simple enough to build in Solidity. Solana and Web2 envelopes should come from the SDK. |
| **Supported sources** | Ethereum Sepolia, Arbitrum Sepolia, Base Sepolia, BNB Testnet, Solana Devnet and HTTPS endpoints on Donut. |

## Expected Output

```typescript
{
  requestId: '0x9c1f3c2b5c0d4a7e8f6b1a2c3d4e5f60718293a4b5c6d7e8f9a0b1c2d3e4f5a6',
  txHash: '0xe2302bd21ab0902f37cb605d491ce5f95ee35ce4083405dddf3657d782acae35',
  chain: 'eip155:11155111',
  destination: {
    chainNamespace: 'eip155',
    chainId: '11155111',
    caip2: 'eip155:11155111',
    namespace: 'eip155',
  },
  requestIdUint: 70615991911750399052925665541914898891038219178489833404284146365146480309670n,
  outcome: 'SUCCESS', // READ.OUTCOME.SUCCESS
  status: 3, // READ.STATUS.FULFILLED
  isTerminal: true,
  callbackDelivered: true,
  value: 1250000000000000000n,
  decoded: { kind: 'uint256', value: 1250000000000000000n },
  raw: { status: 1, resultData: '0x...', errorCode: 0 }, // READ.RESULT_STATUS.SUCCESS
  errorMsg: '',
  fees: {
    paid: 1500000000000000n,
    protocolFee: 0n,
    callbackBudget: 1500000000000000n,
    burned: 61200000000000n,
    refunded: 1438800000000000n,
    refundFailed: false,
  },
  request: {
    spec: { ... },
    callbackTarget: '0x00000000000000000000000000000000000000b2',
    originalFunder: '0x...',
    refundTo: '0x...',
    callbackGasLimit: 500000n,
    logIndex: 2,
    createdAtHeight: 3413247n,
  },
  pcTx: [{ txHash: '0x...', blockHeight: 3413260, status: 'SUCCESS', errorMsg: '' }],
  explorerUrl: 'https://donut.push.network/tx/0xe2302bd2...',
  wait: [Function: wait],
  refresh: [Function: refresh],
}
```

## Common Failures

| Symptom | Action |
| ------- | ------ |
| `value` is `undefined` (the playground fails inside `formatEther` or `formatUnits`) | `outcome` is not `SUCCESS`. Switch on `outcome` (Step 2); `raw.errorCode`, `callbackFailReason` and `decodeError` say why. |
| `outcome` is `UNKNOWN` | The fulfil receipt could not be read. Call `refresh()` later or check `pcTx`; never resubmit. |
| `ReadNotFoundError` (`READ_NOT_FOUND`) | The node had not indexed the request within 30 s. Retry `trackRead` with `err.txHash` or `err.requestId`; never resubmit. |
| Callback failed on a large result | Submit a new request with more callback gas, up to `1_000_000n`. Failed requests are not retried automatically. |
| Client timed out | Resume with [`trackRead`](/docs/chain/build/track-universal-read/) using the saved request ID or transaction hash. |
| Only some batch calls were submitted | Recover committed hashes; check the pending hash before resubmitting. |
| Web2 read never reaches quorum | Extract stable fields, or lower numeric precision with `decimals`. |
| `ReadRegistryUnavailableError` | The registry exists on Donut only. On other networks, provide your own receiver and request ABI. |
| Prepared read fails revalidation (`INVALID_READ_SPEC`) | Prepare a fresh request right before executing; the old pin, expiry (fixed at prepare time, about 6.7 minutes) or budget is no longer valid. |

Contract-initiated reads:

| Symptom | Likely cause | Fix |
|---|---|---|
| `outcome` is `CALLBACK_FAILED` (`callbackDelivered` is `false`) | `_onReadResult` reverted or ran out of gas | Raise `gasLimit`, up to `1_000_000n`, and make sure the callback cannot revert on empty `resultData`. |
| Entrypoint reverts with `only requester` | The caller is not the account you authorized | Pass `pushChainClient.universal.account` as `requester_`, not the deploying EOA. See [Deploy a Receiver](#deploy-a-receiver). |
| Request reverts with `InvalidBlockNumber` | `blockNumber` is `0` or above the height Universal Core has observed | Read `chainHeightByChainNamespace` with the full CAIP-2 key, for example `eip155:11155111`, and pin at or below it. |
| Request reverts with `InvalidExpiryHeight` | `expiryPushChainHeight` is not above the current block | Use `block.number + 300` or another future height. |
| Request reverts with `InsufficientFee` or `ExcessiveFee` | `msg.value` is below `estimateFee` or above `spec.maxFee` | Quote `estimateFee` before sending and set `maxFee` to `msg.value` when you have no separate cap. |
| SDK rejects the transaction over `ReadRequested` | Your entrypoint called `_requestRead` more or fewer than once | Keep one `_requestRead` per prepared read. |
| Refund never arrives | `revertRecipient` is a contract without a payable `receive()` | Add `receive() external payable {}` or point `revertRecipient` at an EOA. |
| Callback ran but stored nothing | The source returned an error and `resultData` was empty | Check the target, ABI and pinned block. The SDK shows the reason as `raw.errorCode`. |

Error entries: https://push.org/agents/errors.json (`read_timeout`, `read_not_found`, `read_invalid_query`, `read_invalid_spec`, `read_height_unavailable`, `read_unsupported_destination`, `read_decode_failed`, `read_insufficient_balance`, `read_callback_base_fee_unavailable`, `read_record_incomplete`, `read_request_mismatch`, `read_request_tx_failed`, `read_registry_unavailable`, `read_value_undefined`, `read_callback_not_delivered`, `read_web2_no_quorum`, `read_prepared_revalidation_failed`, `read_request_reverted`, `read_refund_not_delivered`).

## Agent Notes

- **Check `outcome` to decide success.** `SUCCESS` means `value` is usable. Otherwise report `outcome` with `raw.errorCode`, `callbackFailReason` and `decodeError`. On `UNKNOWN` or `READ_NOT_FOUND`, retry tracking; never resubmit.
- **Save `requestId` and `txHash` before waiting.** Submit with `waitForCompletion: false`, persist both, then call `wait()`. A client timeout (`READ_TIMEOUT`) cancels nothing: resume with `trackRead`; never resubmit just because the client timed out.
- **`read` and `executeReads` spend funds** and need user authorization. `prepareRead` and `trackRead` never broadcast.
- **`CHAIN.WEB2` is a read-only destination.** Never pass it to `sendTransaction`.
- **Never put secrets in Web2 requests.** URL, headers and body are public forever.
- **Callback gas**: the registry uses 500,000; a custom receiver can take up to 1,000,000. `callback.gasLimit` is the gas for `_onReadResult`, not for the request entrypoint.
- **Failed requests are not retried automatically.** Fix the cause and submit a new request.

## Live Playground Examples

| Example | What it reads |
|---------|---------------|
| [universal-read-evm-balance.md](https://push.org/agents/examples/universal-read-evm-balance.md) | ETH balance of vitalik.eth on Ethereum Sepolia |
| [universal-read-erc20-balance.md](https://push.org/agents/examples/universal-read-erc20-balance.md) | USDC held by the Push Vault on Ethereum Sepolia (`token`) |
| [universal-read-contract-call.md](https://push.org/agents/examples/universal-read-contract-call.md) | Chainlink ETH / USD `latestAnswer()` (`abi` + `functionName`) |
| [universal-read-storage-slot.md](https://push.org/agents/examples/universal-read-storage-slot.md) | WETH storage slot 2 (decimals) |
| [universal-read-sol-balance.md](https://push.org/agents/examples/universal-read-sol-balance.md) | SOL held by the Push gateway vault PDA on Solana Devnet |
| [universal-read-spl-token.md](https://push.org/agents/examples/universal-read-spl-token.md) | USDC (SPL) held by the same vault (`token` = mint) |
| [universal-read-web2.md](https://push.org/agents/examples/universal-read-web2.md) | `$.id` and `$.name` from https://jsonplaceholder.typicode.com/users/1 |
| [universal-read-prepare.md](https://push.org/agents/examples/universal-read-prepare.md) | Inspect a PreparedRead with an unfunded wallet |
| [universal-read-batch.md](https://push.org/agents/examples/universal-read-batch.md) | ETH and SOL balances in one flow |
| [universal-read-batch-three-sources.md](https://push.org/agents/examples/universal-read-batch-three-sources.md) | Ethereum, Solana and Web2 with one signature |
| [universal-read-resume.md](https://push.org/agents/examples/universal-read-resume.md) | Track a read by request ID or transaction hash |
| [read-client-request-context.md](https://push.org/agents/examples/read-client-request-context.md) | What the registry's `_requestRead` recorded |
| [read-client-stored-result.md](https://push.org/agents/examples/read-client-stored-result.md) | What the registry's `_onReadResult` stored |

## MCP Mapping Candidates

- `request_universal_read` - Submit a paid read and return the UniversalReadResponse
- `prepare_universal_read` - Quote a read without broadcasting
- `track_universal_read` - Resume a read by request ID or transaction hash

## See Also

- Read blockchain state over RPC: https://push.org/agents/workflows/read-blockchain-state.md
- Contract helpers (UniversalReadClient): https://push.org/agents/workflows/use-contract-helpers.md
- Constants (READ, CHAIN.WEB2): https://push.org/agents/workflows/constants-reference.md
- Contract addresses (Universal Callback, Universal Read Registry): https://push.org/agents/contract-addresses.json

## Docs

- Read Universal State: https://push.org/docs/chain/build/universal-read/
- Read Multiple Universal States: https://push.org/docs/chain/build/read-multiple-universal-states/
- Contract-Initiated Universal Read and Callback: https://push.org/docs/chain/build/contract-initiated-universal-read-and-callback/
- Track Universal Read: https://push.org/docs/chain/build/track-universal-read/
- Contract Helpers, Universal Read Client: https://push.org/docs/chain/build/contract-helpers/#universal-read-client
- Important Concepts, Universal Read: https://push.org/docs/chain/important-concepts/#universal-read-external-state-on-push-chain
