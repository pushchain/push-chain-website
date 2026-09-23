---
title: "Read Universal State"
url: "https://pushchain.github.io/docs/chain/build/universal-read/"
section: "build"
lastUpdated: "2026-09-23T13:23:26Z"
description: "Read Universal State | Build | Push Chain Docs"
---

# Read Universal State

## Overview

Universal Read lets your app request state from **another blockchain** or from an **HTTPS endpoint** and have the result delivered **on-chain to Push Chain**, agreed on by validators. Balances, token balances, contract calls, storage slots and JSON fields from web APIs can all be read this way.

A read is a paid, asynchronous request. It costs gas plus a protocol fee and a callback budget, and the result arrives after validators reach quorum. If only your frontend or backend needs the data, and nothing on-chain has to act on it, use an ordinary RPC call instead: see [Reading Blockchain State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/reading-blockchain-state/).

The receiver is either the **Universal Read Registry**, a shared contract on Push Chain that stores results for you, or **your own contract** that inherits `UniversalReadClient`. Omit `callback` to use the registry.

## Read Universal State

**_`pushChainClient.universal.read(subject, {options}): Promise<UniversalReadResponse>`_**

```typescript
const result = await pushChainClient.universal.read(
  '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF', // account to read
  { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }, // native ETH balance on Sepolia
);

const READ = PushChain.CONSTANTS.READ;
if (result.outcome === READ.OUTCOME.SUCCESS) {
  console.log(result.value); // set only when the outcome is SUCCESS
} else {
  console.log('Read did not succeed:', result.outcome);
}
```

**outcome** is the success signal. It is `SUCCESS` only when the read completed, the source returned data, your callback ran, and the bytes decoded; only then is **value** set.

Any other **outcome** names what happened:

| `outcome` | Meaning |
| --- | --- |
| `SUCCESS` | The source read succeeded, the callback ran, and `value` is set (when a result shape is known) |
| `SOURCE_ERROR` | The destination chain or URL returned an error. See `raw.errorCode` |
| `CALLBACK_FAILED` | The receiver callback reverted or ran out of gas. See `callbackFailReason` |
| `DECODE_FAILED` | The result arrived but did not match the expected shape. See `decodeError` |
| `EXPIRED` | Validators did not agree before the request expired. The unused budget is refunded |
| `FAILED` | The request was settled another way on-chain |
| `ABORTED` | The request was aborted |
| `PENDING` | The read has not finished yet |
| `UNKNOWN` | Fulfilled, but delivery could not be confirmed because the fulfil receipt was unavailable. Call `refresh()` later; do not resubmit |

How to debug the response

| Field | What it tells you |
| --- | --- |
| `outcome` | The single answer, derived from the fields below. |
| `status` | Lifecycle of the request: `PENDING`, `VOTING`, `FULFILLED`, `EXPIRED`, `FAILED`, `ABORTED`. `FULFILLED` means the read completed; it does not by itself mean your callback succeeded. |
| `raw.status` | What the source returned: `READ.RESULT_STATUS.SUCCESS`, or `ERROR` with `raw.errorCode`. |
| `callbackDelivered` | Whether the receiver contract ran. `false` when it reverted or ran out of gas; `callbackFailReason` carries the revert data. |
| `decodeError` | Why the result bytes could not be decoded into `value`, for example an ABI that does not match the query. |

## Read Parameters

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`subject`_ | `string` | What to read: an account address for a balance, a contract address for a contract call or storage slot, a Solana account (or its program id, to derive a PDA) for an `idl` read, or an `https://` URL for a Web2 read. Solana subjects are base58. |
| _`options.chain`_ | `CHAIN` | Where to read from. Any supported EVM or Solana chain, or `CHAIN.WEB2` for an HTTPS endpoint. Decides which query option applies; see the branches below. Pass at most one query option; with none, `read` returns the subject's native balance. PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.BNB_TESTNET``PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA``PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |
| :: Pass one of the following, based on `options.chain` |  |  |
| ↳ **If `options.chain` is a Web3 chain** \[collapsed\] |  |  |
|   `options.token` | `string` | Token balance of `subject`. EVM: the ERC-20 contract address, read via `balanceOf`. Solana: the SPL mint address; the SDK reads the mint's owner to detect SPL Token or Token-2022 and derives the associated token account. A missing or uninitialized mint throws before broadcast. |
|   `options.abi` | `Abi` | EVM only. The contract's ABI. Encodes the call and types the decoded `value`. Declare it `as const` so `value` is typed. |
|   `options.functionName` (with `abi`) | `string` | Required with `abi`. The function to call. Any mutability works, including `nonpayable` and `payable`: validators run the call as an `eth_call` simulation at the pinned block, so it returns data and never executes. |
|   `options.args` (with `abi`) | `any[]` | Positional function arguments, type-checked against the ABI. |
|   `options.idl` | `Idl` | Solana only. The program's Anchor IDL object. The subject account is decoded with the layout whose 8-byte discriminator matches its data. Reads never execute an instruction. |
|   `options.functionName` (with `idl`) | `string` | Optional. The account layout to decode, in `snake_case`, `camelCase` or the IDL's own spelling. When omitted, the layout is inferred from the discriminator. Passing it types `value` at compile time. Required when `subject` is the program id. |
|   `options.args` (with `idl`) | `any[]` | Only when `subject` is the program id: the non-constant PDA seeds of the `functionName` account, in the order the IDL declares them. The SDK derives the account address. Pubkey seeds accept base58, 0x-hex 32-byte strings or `PublicKey`; integer seeds take `bigint`. |
|   `options.storageSlot` | `bigint` | `Hex` | EVM only. One storage word from the subject contract. Not needed for Solana, as Solana has no storage slots. |
| ↳ **If `options.chain` is a Web2 / HTTPS endpoint** \[collapsed\] |  |  |
|   `options.web2` | `object` | Required. Describes the HTTPS request and which JSON fields to extract. Fields below. |
|     `options.web2.extract` | `Array<{ path, valueType, decimals? }>` | Required. 1 to 16 JSONPath entries. Results come back as an array in this order. |
|     `options.web2.extract[].path` | `string` | JSONPath into the response body, starting with `$`, for example `$.data.price`. |
|     `options.web2.extract[].valueType` | `'uint256'` | `'int256'` | `'bool'` | `'string'` | `'bytes'` | How the extracted value is encoded on-chain. |
|     `options.web2.extract[].decimals` | `number` | Optional, numeric types only, `0` to `255`. The value is multiplied by 10 to this power and truncated before encoding, so `1.2345` with `decimals: 2` becomes `123`. |
|     `options.web2.method` | `'GET'` | `'POST'` | Optional. Defaults to `GET`. |
|     `options.web2.headers` | `Record<string, string>` | Optional. Request headers. Written to a public event log forever, so never include secrets. |
|     `options.web2.body` | `string` | `Uint8Array` | Optional, `POST` only. A body on `GET` is rejected. |
|     `options.web2.timeoutMs` | `number` | Optional. Validator fetch timeout, default `5000`. Values above `15000` only produce an SDK warning; validators clamp them to `15000`. |
| :: |  |  |
| `options.callback` | `{ target, gasLimit, abi, functionName, args? }` | Optional. Routes the request through your own receiver contract instead of the registry; fields in [Callback Arguments](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/#callback-arguments). |
| `options.waitForCompletion` | `boolean` | Default `true`. When `false`, resolves once the request transaction is mined and the node has indexed the request (usually a few seconds, at most about 30 s), before validators vote. If the node has not indexed it by then, it throws `ReadNotFoundError`; the fees are already paid, so resume with `trackRead({ txHash })`.  
  
Call `wait()` on the response to finish. |
| `options.progressHook` | `(progress: ProgressEvent) => void` | Callback for progress updates through the read lifecycle. |

## Callback Arguments

Callback Arguments

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| `options.callback.target` | `string` | Universal Read Registry | Address of your receiver contract on Push Chain (inherits `UniversalReadClient`). Omit to use the registry. |
| `options.callback.gasLimit` | `bigint` | `500_000n` | Gas reserved for the result callback (`_onReadResult`), not for the request entrypoint. The same default applies to the registry and to your own receiver; at most `1_000_000n`. Unused callback budget is refunded. Pass it without `target` to raise the registry's callback gas. |
| `options.callback.abi` | `Abi` | \- | ABI of your receiver, used to call its payable request entrypoint. Required with `target`. |
| `options.callback.functionName` | `string` | \- | The payable request entrypoint on your receiver, for example `request`. Required with `target`. It must emit exactly one `ReadRequested` per prepared read. |
| `options.callback.args` | `(spec, gasLimit) => unknown[]` | `(spec, gas) => [spec, gas]` | Optional. Only needed when your entrypoint does not take `(spec, gasLimit)` in that order.  
  
The SDK builds the request for you and calls this to map it and the callback gas onto your entrypoint's argument list, for example `(spec, gas) => [gas, spec, extra]`. |

Advanced Arguments

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| `options.blockNumber` | `bigint` | Oracle height minus `minConfirmations` | EVM only. Pins the read to a specific destination block. The oracle-observed height can lag the real head. |
| `options.minConfirmations` | `number` | `1` | EVM only. Confirmations the destination block must have before validators read it. |
| `options.expiryBlocks` | `bigint` | `300n` | Request lifetime in Push Chain blocks. An unfulfilled request expires and refunds the unused callback budget. |
| `options.maxFee` | `bigint` | The estimated payment | Upper bound the contract enforces on the payment (protocol fee plus callback budget). It does not lower the payment: a value below the estimate throws `InvalidReadSpecError` with violation `EXCESSIVE_FEE`. |
| `options.refundTo` | `string` | Your Push account | Where unused callback budget is sent. Must accept native Push transfers; a contract without a payable `receive()` forfeits the refund. |
| `options.advanced.pollingIntervalMs` | `number` | `2000` | Milliseconds between status polls. Minimum `500`. |
| `options.advanced.timeout` | `number` | Derived from expiry, at most `180000` | Maximum milliseconds this caller waits. Timing out does not cancel the request; resume it with [`trackRead`](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/). An explicit value overrides the cap. |
| `options.advanced.enforceGasCheck` | `boolean` | `false` | `false` warns and proceeds when the pre-flight balance check finds a shortfall. `true` throws before broadcasting. |

## Read Progress Hook

ProgressHook Type and Response

| Field | Type | Description |
| --- | --- | --- |
| `progress` | `Object` | The progress of the transaction. |
| `progress.id` | `string` | Unique identifier for the progress event. |
| `progress.title` | `string` | Brief title of the progress event. |
| `progress.message` | `string` | Detailed message describing the event. |
| `progress.level` | `INFO` | `SUCCESS` | `WARNING` | `ERROR` | Severity level of the event. |
| `progress.response` | `object` | `null` | Additional data object for the event, or `null` if not applicable. |
| `progress.timestamp` | `string` | ISO-8601 timestamp when the event occurred (e.g. `2025-06-26T15:04:05.000Z`). |

| ID | Title | Message | Level | Response |
| --- | --- | --- | --- | --- |
| `READ-TX-101` | `<chain>` Read Requested | Preparing a `<namespace>` read of `<chain>` | INFO | `{ chain, namespace, queryType }` |
| `READ-TX-102-01` | Fetching Destination Height & Fee | Reading the oracle height and protocol fee for `<chain>` | INFO | `{ chain, stage: 'preflight' }` |
| `READ-TX-102-02` | Read Spec Assembled | Pinned at block `<n>`, expires at Push height `<n>`; fee + budget = `<total>` UPC | SUCCESS | `{ protocolFee, callbackBudget, totalValue, blockNumber, expiryPushChainHeight }` |
| `READ-TX-102-03` | Destination Height Unavailable | The oracle has no height for `<chain>`, so it is not readable | ERROR | `{ chain }` |
| `READ-TX-102-04` | Preflight Stale, Refetching | A read prepared more than 60 s earlier is revalidated against fresh preflight in `executeReads` | WARNING | `{ fetchedAt, ageMs }` |
| `READ-TX-102-05` | Refund Target Is A Contract | `<refundTo>` is a non-UEA contract; it needs a payable `receive()` or the unspent budget is forfeited | WARNING | `{ refundTo }` |
| `READ-TX-103-01` | Checking Balance Requirements | Balance `<n>` UPC covers / is short of the `<n>` UPC read | INFO when sufficient / WARNING when short | `{ required, available, sufficient, shortfall, enforceGasCheck }` |
| `READ-TX-103-02` | Insufficient Balance | Need `<n>` UPC, have `<n>` UPC | ERROR (only when `enforceGasCheck` is `true`) | `{ required, available, shortfall }` |
| `READ-TX-103-03` | Sensitive Header Detected | Headers are written to a public event log forever: `<headers>` | WARNING | `{ matchedHeaders }` |
| `READ-TX-104-01` | Broadcasting Read Request | Sending the read request to Push Chain | INFO | `{ stage: 'broadcasting' }` |
| `READ-TX-104-02` | Request Confirmed, Read Detected | Read `<requestId>` requested in `<txHash>` | SUCCESS | `{ txHash, requestId, logIndex }` |
| `READ-TX-104-03` | Looking Up Request | Looking up the read on Push Chain | INFO | `{ requestId }` or `{ txHash }` |
| `READ-TX-104-04` | Request Found | Read `<requestId>` found (status `<status>`), once per request | SUCCESS | `{ requestId, status }` |
| `READ-TX-104-05` | Request Not Found | No read found after `<n>`s (the lookup gives up at 30 s) | ERROR | `{ requestId }` or `{ txHash }`, plus `elapsedMs` |
| `READ-TX-105-01` | Awaiting Quorum | Validators are observing the destination for `<requestId>` | INFO | `{ requestId, status: 'PENDING' }` |
| `READ-TX-105-02` | Voting In Progress | Validators are voting on the result of `<requestId>` | INFO | `{ requestId, status: 'VOTING' }` |
| `READ-TX-105-04` | Approaching Expiry | `<n>` Push blocks until `<requestId>` expires; fires once per `wait()` at 30 or fewer blocks left | WARNING | `{ requestId, pushBlocksRemaining }` |
| `READ-TX-106-02` | Callback Delivered | `ReadFulfilled` emitted for `<requestId>` | SUCCESS | `{ requestId }` |
| `READ-TX-106-03` | Callback Reverted | `CallbackFailed` for `<requestId>`; the read is still FULFILLED but your callback did not run | WARNING | `{ requestId, reason }` |
| `READ-TX-106-04` | Callback Gas Settled | Burned `<n>` UPC, refunding `<n>` UPC | INFO | `{ requestId, burned, refunded }` |
| `READ-TX-106-05` | Refund Sent | `<amount>` UPC pushed to `<refundTo>`, for fulfilled and expired reads | INFO | `{ requestId, amount, refundTo }` |
| `READ-TX-106-06` | Refund Rejected | `<refundTo>` rejected the refund; it sits in the admin rescue pool | WARNING | `{ requestId, amount, refundTo }` |
| `READ-TX-199-01` | Read Fulfilled | Read `<requestId>` fulfilled and delivered; fires only when `outcome` is `SUCCESS` | SUCCESS | `{ requestId, value, resultData, callbackDelivered }` |
| `READ-TX-199-02` | Read Failed / Expired / Aborted | Read `<requestId>` ended `<status>`: `<error>`. Every terminal read that did not succeed ends here; for a fulfilled read, `status` is its outcome (`SOURCE_ERROR`, `CALLBACK_FAILED`, `DECODE_FAILED`, `UNKNOWN`) | ERROR | `{ requestId, status, errorCode, errorMsg, refunded }` |
| `READ-TX-199-03` | Read Timeout | Gave up waiting for `<requestId>` after `<n>`s; resume with `trackRead` | ERROR | `{ requestId, lastStatus, elapsedMs }` |

## Returns UniversalReadResponse

Returns \`UniversalReadResponse\` <object>

```typescript
{
  requestId: '0x9c1f3c2b5c0d4a7e8f6b1a2c3d4e5f60718293a4b5c6d7e8f9a0b1c2d3e4f5a6',
  requestIdUint: 70615991911750399052925665541914898891038219178489833404284146365146480309670n,
  txHash: '0xe2302bd21ab0902f37cb605d491ce5f95ee35ce4083405dddf3657d782acae35',
  chain: 'eip155:11155111',
  destination: {
    chainNamespace: 'eip155',
    chainId: '11155111',
    caip2: 'eip155:11155111',
    namespace: 'eip155',
  },
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

| Property | Type | Description |
| --- | --- | --- |
| `requestId` | `string` | Unique identifier of this read. Use it to resume tracking in another session. |
| `requestIdUint` | `bigint` | `requestId` as the `uint256` contracts key results by, for example the registry's `resultByRequestId`. |
| `txHash` | `string` | Push Chain transaction that submitted the request. |
| `chain` | `CHAIN` | Destination that was read. |
| `outcome` | `READ.OUTCOME` | The success signal: `SUCCESS` or the reason it did not work (see the table above). |
| `status` | `READ.STATUS` | Lifecycle: `PENDING`, `VOTING`, `FULFILLED`, `EXPIRED`, `FAILED`, `ABORTED`. |
| `isTerminal` | `boolean` | `true` once the read can no longer change. |
| `callbackDelivered` | `boolean` | `FULFILLED` only. `true` when the receiver ran; `false` when it reverted or ran out of gas; `undefined` if the fulfil receipt could not be read (`outcome` is then `UNKNOWN`). |
| `callbackFailReason` | `string` | Revert data from a failed callback. |
| `value` | `T` | Decoded result. Present only when `outcome` is `SUCCESS`. Typed from your query: `bigint` for balances, `Hex` for storage, the ABI return type for calls, an array for Web2. |
| `decodeError` | `string` | Why `value` is absent although the read succeeded. |
| `raw` | `object` | `null` | Consensus result: `status` (`READ.RESULT_STATUS`), `resultData` bytes and `errorCode`. `null` before validators have voted. |
| `errorMsg` | `string` | Node-reported error, if any. |
| `fees` | `object` | `paid`, `protocolFee`, `callbackBudget`, plus `burned`, `refunded` and `refundFailed` once settled. The settlement fields stay `undefined` when the settle receipt or block results cannot be read; expired reads never have `burned`. |
| `request` | `object` | The on-chain request: `spec`, `callbackTarget`, `originalFunder`, `refundTo`, `callbackGasLimit`, `logIndex`, `createdAtHeight`. |
| `pcTx` | `array` | Push Chain transactions the node sent for this read (fulfil, settle, expiry). |
| `explorerUrl` | `string` | Explorer link for the request transaction. |
| `wait` | `function` | `wait({ timeoutMs?, pollingIntervalMs?, resultShape? })`. Polls until the read is terminal and returns the final response. Only a timeout throws (`ReadTimeoutError`). |
| `refresh` | `function` | Returns one fresh snapshot without polling. |

## Types of Universal Read

What you pass as `subject`, plus one query option, decides what is read. Every shape below has a runnable version in the [Live Playground](#live-playground).

### EVM Reads

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

`functionName` can name a function of any mutability, including `nonpayable` and `payable`. Validators run the call as an `eth_call` simulation at the pinned block, so it returns data and never executes. This makes view-like functions such as quoters readable.

`blockNumber` and `minConfirmations` pin an EVM read to a specific block; see Advanced Arguments.

Run each of these against a real address in the [EVM Playground](#evm-playground).

### Solana Reads

```typescript
const CHAIN = PushChain.CONSTANTS.CHAIN;

// Native balance (lamports)
await pushChainClient.universal.read(solanaHolder, { chain: CHAIN.SOLANA_DEVNET });

// Token balance: the holder's token account for the mint (SPL Token or Token-2022, detected from the mint)
await pushChainClient.universal.read(solanaHolder, {
  chain: CHAIN.SOLANA_DEVNET,
  token: mintAddress,
});

// Program account, decoded with the program's Anchor IDL (the closest thing to a storage slot on Solana).
// The layout is picked by the account's 8-byte discriminator.
await pushChainClient.universal.read(accountAddress, {
  chain: CHAIN.SOLANA_DEVNET,
  idl: programIdl,
});

// Name the layout to type `value` at compile time (snake_case, camelCase or the IDL's spelling)
await pushChainClient.universal.read(accountAddress, {
  chain: CHAIN.SOLANA_DEVNET,
  idl: programIdl,
  functionName: 'counter',
});

// PDA: pass the program id as the subject, the account layout, and its seeds.
// The SDK derives the address from the seeds the IDL declares.
await pushChainClient.universal.read(programIdl.address, {
  chain: CHAIN.SOLANA_DEVNET,
  idl: programIdl,
  functionName: 'stake',
  args: [authority], // non-constant seeds in IDL order; pubkeys as base58, 0x-hex or PublicKey
});
```

Solana reads use finalized state, so there is nothing to pin. Solana has no storage slots; a program account holds the state, and `idl` decodes it the way `abi` decodes a call result on EVM. Reads never execute an instruction. `value` is the decoded Anchor account, and `decoded.accountName` is the layout it matched.

Run these against a real address in the [Solana Playground](#solana-playground).

### Web2 Reads

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

**Note:** `extract` can take up to 16 entries that need to be extracted. Results come back as an array in the same order. Each `path` starts with `$`, and the subject must be an `https://` URL.

Requests are GET by default. Set **method** to POST to send a body, and **timeoutMs** to change the 5 second fetch timeout. Validators clamp timeouts above 15 seconds.

**Note:** Validators only agree when every one of them extracted identical bytes, so a value that changes between fetches (a live price at full precision) may never reach quorum. Pick stable fields, or lower the precision with **decimals**.

Request data is public

URLs, headers and bodies are written to a public event log. Never include API keys, bearer tokens or other secrets. The SDK warns on headers that look sensitive, but it cannot catch everything.

Run this against a real endpoint in the [Web2 Playground](#web2-playground).

## Live Playground

The playground creates a temporary Donut wallet. Fund only the address it prints, with test PC from the [faucet](https://faucet.push.org/). The key lives in the browser session and is lost on reload, so use test funds only.

Every example reads real state on a real address. Each one says where the address was taken from.

### EVM Playground

> **EVM reads** target Ethereum Sepolia and are pinned to a block, so every validator sees the same state. See [Types of Universal Read](#evm-reads) for the query shapes.

Live Playground: Native Balance (ETH of vitalik.eth)

VIRTUAL NODE IDE

Copy playground link

Copy code

Live Playground: ERC-20 Balance (USDC held by the Push Vault)

VIRTUAL NODE IDE

Copy playground link

Copy code

Live Playground: Contract Call (Chainlink ETH / USD price)

VIRTUAL NODE IDE

Copy playground link

Copy code

Live Playground: Storage Slot (WETH decimals)

VIRTUAL NODE IDE

Copy playground link

Copy code

### Solana Playground

> **Solana reads** target Solana Devnet and use finalized state, so there is nothing to pin. See [Types of Universal Read](#solana-reads).

Live Playground: Native Balance (SOL held by the Push gateway vault)

VIRTUAL NODE IDE

Copy playground link

Copy code

Live Playground: SPL Token Balance (USDC held by the same vault)

VIRTUAL NODE IDE

Copy playground link

Copy code

### Web2 Playground

> **Web2 reads** fetch an HTTPS endpoint and extract JSON fields; validators only agree when every one of them got identical bytes. See [Types of Universal Read](#web2-reads).

Live Playground: JSON Fields (id and name from a public API)

VIRTUAL NODE IDE

Copy playground link

Copy code

  

## Troubleshooting

| Symptom | Action |
| --- | --- |
| `outcome` is not `SUCCESS` and `value` is `undefined` | `outcome` names the cause. `SOURCE_ERROR`: check `raw.errorCode`. `CALLBACK_FAILED`: check `callbackFailReason`. `DECODE_FAILED`: check `decodeError`. `UNKNOWN`: the fulfil receipt was unavailable; call `refresh()` later instead of resubmitting. |
| Callback failed on a large result | Submit a new request with more callback gas, up to `1_000_000n`. Failed requests are not retried automatically. |
| Client timed out (`ReadTimeoutError`, code `READ_TIMEOUT`) | The request continues on-chain. Resume with [`trackRead`](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/) using `err.requestId` or `err.txHash`; `err.lastStatus` is the last status seen. |
| `ReadNotFoundError` (code `READ_NOT_FOUND`) | The node had not indexed the request within 30 s, or the transaction made no read. If the transaction succeeded, retry `trackRead({ txHash })` later; the fees are already paid, so do not resubmit. |
| Only some batch calls were submitted (code `READ_REQUEST_TX_FAILED`) | `err.transactionHashes` lists the mined requests; resume each with `trackRead({ txHash })`. Check `err.pendingTransactionHash` before resubmitting anything. |
| Web2 read never reaches quorum | Extract stable fields, or lower numeric precision with `decimals`. |
| `ReadRegistryUnavailableError` | The registry exists on Donut only. On other networks, provide your own receiver and request ABI. |
| `InvalidReadSpecError` (code `INVALID_READ_SPEC`) | `err.violations` lists what failed, for example `EXCESSIVE_FEE` (`maxFee` below the payment) or `INSUFFICIENT_CALLBACK_BUDGET`. A prepared read that fails revalidation is stale: prepare a fresh request. |
| `InvalidReadQueryError` (code `INVALID_READ_QUERY`) | The options are malformed, for example two query options at once, `accountName` or `tokenProgram` passed, or a Solana token mint that does not exist. The message says which. |
| `ReadHeightUnavailableError` (code `READ_HEIGHT_UNAVAILABLE`) | The destination has no oracle height on Push Chain, so it cannot be read. Check the chain. |
| `UnsupportedReadDestinationError` (code `UNSUPPORTED_READ_DESTINATION`) | The destination is not routable or is blocked on-chain. |
| Code `INSUFFICIENT_READ_BALANCE` | The account cannot cover the reads (only thrown when `enforceGasCheck` is `true`). Fund it and retry. |

Every error extends `ReadStateError` and carries a stable `code` plus a `hint`. A result that does not decode is not thrown: it is reported as `decodeError` with `outcome` `DECODE_FAILED` (`ReadDecodeError`, code `READ_DECODE_FAILED`, is thrown only by the standalone decoder).

## Next Steps

-   Read several states in one transaction with [Read Multiple Universal States](/push-chain-website/pr-preview/pr-1244/docs/chain/build/read-multiple-universal-states/)
-   Act on results on-chain with [Contract-Initiated Universal Read and Callback](/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-initiated-universal-read-and-callback/)
-   Resume a read after a refresh or timeout with [Track Universal Read](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/)
-   Find every supported chain, including `CHAIN.WEB2`, in [Constants Reference](/push-chain-website/pr-preview/pr-1244/docs/chain/build/constants/#chain-constants)
