---
title: "Track Universal Read"
url: "https://pushchain.github.io/docs/chain/build/track-universal-read/"
section: "build"
lastUpdated: "2026-09-23T21:31:30+05:30"
description: "Track Universal Read | Build | Push Chain Docs"
---

# Track Universal Read

## Overview

Track a Universal Read by its request ID, or by the Push Chain transaction that submitted it. You get the current state of the request and can wait for it to reach a terminal status.

Tracking works with a read-only client that has no signer and no funds. That makes it the right tool after a page refresh, from a backend, or when `read()` timed out at the client while the request kept running on chain.

> **Note**: `trackRead()` can be used independently of `read()`. Save the request ID or transaction hash and resume from any session.

## Track Universal Read

**_`pushChainClient.universal.trackRead({ requestId } | { txHash }, {options}): Promise<UniversalReadResponse | UniversalReadResponse[]>`_**

Tracking by transaction hash returns an array because one transaction can carry several reads.

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
console.log(done.status, done.value);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| _`ref.requestId`_ | _`ref.txHash`_ | `string` | `bigint` | \- | The read's request ID (hex or numeric), or the Push Chain transaction that submitted it. Pass one. |
| `options.resultShape` | `{ kind: 'evmCall', abi, functionName }` and others | Inferred | How to decode `resultData`. Balances, storage and Web2 reads are inferred from the on-chain query. A typed contract call resumed in a new session needs it because the ABI is not on chain; without it `value` stays raw bytes. |
| `options.progressHook` | `(progress: ProgressEvent) => void` | `undefined` | Callback invoked at each lifecycle step while `wait()` polls. See [ProgressHook Type and Response](#track-progress-hook) below. |

Advanced Arguments

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| `options.advanced.pollingIntervalMs` | `number` | `2000` | Milliseconds between polls when calling `wait()`. Minimum: `500`. |
| `options.advanced.timeout` | `number` | Derived from expiry, at most `180000` | Maximum milliseconds `wait()` polls before throwing `ReadTimeoutError` with `code === 'READ_TIMEOUT'`. Timing out cancels nothing; the request keeps running and you can track it again. |

## ProgressHook Type and Response

ProgressHook Type and Response

| ID | Title | Message | Level | Response |
| --- | --- | --- | --- | --- |
| `READ-TX-104-02` | Request Confirmed, Read Detected | Read `<requestId>` requested in `<txHash>` | SUCCESS | `{ txHash, requestId, logIndex }` |
| `READ-TX-105-01` | Awaiting Quorum | Validators are observing the destination for `<requestId>` | INFO | `{ requestId, status: 'PENDING' }` |
| `READ-TX-105-02` | Voting In Progress | Validators are voting on the result of `<requestId>` | INFO | `{ requestId, status: 'VOTING' }` |
| `READ-TX-105-04` | Approaching Expiry | `<n>` Push blocks until `<requestId>` expires | WARNING | `{ requestId, pushBlocksRemaining }` |
| `READ-TX-106-02` | Callback Delivered | `ReadFulfilled` emitted for `<requestId>` | SUCCESS | `{ requestId }` |
| `READ-TX-106-03` | Callback Reverted | `CallbackFailed` for `<requestId>`; the read is still FULFILLED but your callback did not run | WARNING | `{ requestId, reason }` |
| `READ-TX-106-04` | Callback Gas Settled | Burned `<n>` UPC, refunding `<n>` UPC | INFO | `{ requestId, burned, refunded }` |
| `READ-TX-106-05` | Refund Sent | `<amount>` UPC pushed to `<refundTo>` | INFO | `{ requestId, amount, refundTo }` |
| `READ-TX-106-06` | Refund Rejected | `<refundTo>` rejected the refund; it sits in the admin rescue pool | WARNING | `{ requestId, amount, refundTo }` |
| `READ-TX-199-01` | Read Fulfilled | Read `<requestId>` fulfilled and delivered | SUCCESS | `{ requestId, value, resultData, callbackDelivered }` |
| `READ-TX-199-02` | Read Failed / Expired / Aborted | Read `<requestId>` ended `<status>`: `<error>`. A fulfilled read whose callback was not delivered also ends here, with status `CALLBACK_FAILED` (or `SOURCE_ERROR`, `DECODE_FAILED`) | ERROR | `{ requestId, status, errorCode, errorMsg, refunded }` |
| `READ-TX-199-03` | Read Timeout | Gave up waiting for `<requestId>` after `<n>`s; resume with `trackRead` | ERROR | `{ requestId, lastStatus, elapsedMs }` |

Returns \`UniversalReadResponse\` <object>

The returned snapshot is the current state of the request. Call `wait()` to poll until the read reaches a terminal status, or `refresh()` to fetch one fresh snapshot.  
  

For the full response shape, see [Read Universal State - Returns UniversalReadResponse](/push-chain-website/pr-preview/pr-1245/docs/chain/build/universal-read/#returns-universal-read-response).

## Resume a Typed Contract Call

A typed contract call has no ABI on chain, so pass the ABI and function name through `resultShape` when you resume it in a new session.

```typescript
const snapshot = await pushChainClient.universal.trackRead(
  { requestId },
  { resultShape: { kind: 'evmCall', abi: tokenAbi, functionName: 'totalSupply' } },
);
```

> **Note**: Keep the ABI next to your stored request reference. `resultShape` supplies runtime decoding only; it cannot infer a TypeScript return type from a hash.

## Live Playground

Tracking needs no wallet and no funds. Pick a predefined read, or track a request ID of your own.

Live Playground: Track a Read

VIRTUAL NODE IDE

Copy playground link

Copy code

  

## Next Steps

-   Read a single value on any chain with [Read Universal State](/push-chain-website/pr-preview/pr-1245/docs/chain/build/universal-read/)
-   Batch several reads into one transaction with [Read Multiple Universal States](/push-chain-website/pr-preview/pr-1245/docs/chain/build/read-multiple-universal-states/)
-   Trigger reads from Solidity with [Contract-Initiated Universal Read and Callback](/push-chain-website/pr-preview/pr-1245/docs/chain/build/contract-initiated-universal-read-and-callback/)
-   Follow the transaction that carried your request with [Track Universal Transaction](/push-chain-website/pr-preview/pr-1245/docs/chain/build/track-universal-transaction/)
