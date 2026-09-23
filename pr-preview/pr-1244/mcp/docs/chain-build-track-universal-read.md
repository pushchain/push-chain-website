---
title: "Track Universal Read"
url: "https://pushchain.github.io/docs/chain/build/track-universal-read/"
section: "build"
lastUpdated: "2026-09-23T13:23:26Z"
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
if (done.outcome === PushChain.CONSTANTS.READ.OUTCOME.SUCCESS) {
  console.log('Value:', done.value);
} else {
  console.log('Read did not succeed:', done.outcome);
}
```

`done.outcome` is the success signal. `value` is set only when `outcome` is `SUCCESS`. For the other outcomes, see [Outcome](#track-outcome) below.

These `Arguments` are mandatory

| **Arguments** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| _`ref.requestId`_ | _`ref.txHash`_ | `Hex` | `bigint` (`requestId`), `Hex` (`txHash`) | \- | The read's request ID (0x-hex or `bigint`), or the Push Chain transaction that submitted it. Pass one. |
| `options.resultShape` | `{ kind: 'evmCall', abi, functionName }` and others | Inferred | How to decode `resultData`. Balances, storage and Web2 reads are inferred from the on-chain query. A typed contract call resumed in a new session needs it because the ABI is not on chain; without it `value` stays raw bytes. |
| `options.progressHook` | `(progress: ProgressEvent) => void` | `undefined` | Callback invoked while the request is looked up, on `refresh()`, and at each lifecycle step while `wait()` polls. See [ProgressHook Type and Response](#track-progress-hook) below. |

Advanced Arguments

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| `options.advanced.pollingIntervalMs` | `number` | `2000` | Milliseconds between polls, both while the request is looked up and when calling `wait()`. Minimum: `500`. |
| `options.advanced.timeout` | `number` | Derived from expiry, at most `180000` | Maximum milliseconds `wait()` polls before throwing `ReadTimeoutError` with `code === 'READ_TIMEOUT'`. Timing out cancels nothing; the request keeps running and you can track it again. It does not change the lookup window below. |

`trackRead()` first looks the request up on Push Chain. A request is indexed once its block is processed, so the lookup retries for up to 30 seconds. If no record appears, it throws `ReadNotFoundError` with `code === 'READ_NOT_FOUND'`. A settled read is found on the first try. Retry `trackRead()` with the same reference; do not submit a new request.

`wait()` and `refresh()` are on every snapshot. `wait({ timeoutMs?, pollingIntervalMs?, resultShape? })` takes flat options (not `advanced.*`); options you passed to `trackRead()` carry into the snapshot's `wait()`. `refresh()` fetches one fresh snapshot without polling.

## Outcome

Outcome: what \`done.outcome\` means

`PushChain.CONSTANTS.READ.OUTCOME` gives one answer to "did the read work". `status`, `raw.status`, `callbackDelivered` and `decodeError` stay available for debugging.

| Outcome | Meaning | What to do |
| --- | --- | --- |
| `SUCCESS` | The source read succeeded, the callback ran, and `value` is set (raw bytes when no shape is known) | Use `value` |
| `SOURCE_ERROR` | FULFILLED, but the destination returned an error | Check `raw.errorCode`; fix the query and submit a new read |
| `CALLBACK_FAILED` | FULFILLED, but the receiver callback reverted or ran out of gas | Check `callbackFailReason`; raise `callback.gasLimit` or fix the receiver |
| `DECODE_FAILED` | Delivered, but `resultData` did not match the expected shape | Check `decodeError`; resume with the right `resultShape` |
| `EXPIRED` | Validators did not agree before the request expired | Check `fees.refunded`; submit a new read if still needed |
| `FAILED` | The request was settled another way on chain | Inspect `pcTx` |
| `ABORTED` | The request was aborted | Inspect `errorMsg` |
| `PENDING` | Not terminal yet | Call `wait()` |
| `UNKNOWN` | FULFILLED, but the fulfil receipt could not be read, so delivery is unconfirmed | Call `refresh()` later or check `pcTx` in the explorer. Do not resubmit |

`fees.burned`, `fees.refunded` and `fees.refundFailed` come from settlement logs. They stay `undefined` while a read is pending, for ABORTED reads, and when those receipts or block results cannot be read.

## ProgressHook Type and Response

ProgressHook Type and Response

| ID | Title | Message | Level | Response |
| --- | --- | --- | --- | --- |
| `READ-TX-104-03` | Looking Up Request | Looking up read `<requestId>` (or reads in `<txHash>`) on Push Chain | INFO | `{ requestId }` or `{ txHash }` |
| `READ-TX-104-04` | Request Found | Read `<requestId>` found (status `<status>`); once per record | SUCCESS | `{ requestId, status }` |
| `READ-TX-104-05` | Request Not Found | No read found for `<ref>` after `<n>`s | ERROR | `{ requestId | txHash, elapsedMs }` |
| `READ-TX-104-02` | Request Confirmed, Read Detected | Read `<requestId>` requested in `<txHash>` | SUCCESS | `{ txHash, requestId, logIndex }` |
| `READ-TX-105-01` | Awaiting Quorum | Validators are observing the destination for `<requestId>` | INFO | `{ requestId, status: 'PENDING' }` |
| `READ-TX-105-02` | Voting In Progress | Validators are voting on the result of `<requestId>` | INFO | `{ requestId, status: 'VOTING' }` |
| `READ-TX-105-04` | Approaching Expiry | `<n>` Push blocks until `<requestId>` expires; once per `wait()`, at 30 or fewer blocks left | WARNING | `{ requestId, pushBlocksRemaining }` |
| `READ-TX-106-02` | Callback Delivered | `ReadFulfilled` emitted for `<requestId>` | SUCCESS | `{ requestId }` |
| `READ-TX-106-03` | Callback Reverted | `CallbackFailed` for `<requestId>`; the read is still FULFILLED but your callback did not run | WARNING | `{ requestId, reason }` |
| `READ-TX-106-04` | Callback Gas Settled | Burned `<n>` UPC, refunding `<n>` UPC | INFO | `{ requestId, burned, refunded }` |
| `READ-TX-106-05` | Refund Sent | `<amount>` UPC pushed to `<refundTo>`; also for expired reads | INFO | `{ requestId, amount, refundTo }` |
| `READ-TX-106-06` | Refund Rejected | `<refundTo>` rejected the refund; it sits in the admin rescue pool; also for expired reads | WARNING | `{ requestId, amount, refundTo }` |
| `READ-TX-199-01` | Read Fulfilled | Read `<requestId>` fulfilled and delivered. Fires only when `outcome` is `SUCCESS` | SUCCESS | `{ requestId, value, resultData, callbackDelivered }` |
| `READ-TX-199-02` | Read Failed / Expired / Aborted | Read `<requestId>` ended `<status>`: `<error>`. For a FULFILLED read that did not work, `status` is its outcome (`SOURCE_ERROR`, `CALLBACK_FAILED`, `DECODE_FAILED`, `UNKNOWN`) | ERROR | `{ requestId, status, errorCode, errorMsg, refunded }` |
| `READ-TX-199-03` | Read Timeout | Gave up waiting for `<requestId>` after `<n>`s; resume with `trackRead` | ERROR | `{ requestId, lastStatus, elapsedMs }` |

Returns \`UniversalReadResponse\` <object>

The returned snapshot is the current state of the request. Call `wait()` to poll until the read reaches a terminal status, or `refresh()` to fetch one fresh snapshot.  
  

For the full response shape, see [Read Universal State - Returns UniversalReadResponse](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/#returns-universal-read-response).

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

-   Read a single value on any chain with [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/)
-   Batch several reads into one transaction with [Read Multiple Universal States](/push-chain-website/pr-preview/pr-1244/docs/chain/build/read-multiple-universal-states/)
-   Trigger reads from Solidity with [Contract-Initiated Universal Read and Callback](/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-initiated-universal-read-and-callback/)
-   Follow the transaction that carried your request with [Track Universal Transaction](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-transaction/)
