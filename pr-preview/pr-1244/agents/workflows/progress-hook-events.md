# ProgressHook Events Reference

Complete list of `progressHook` event IDs emitted by `sendTransaction` and `executeTransactions` in `@pushchain/core@6.0.19`. Pass a callback to `tx.progressHook` to receive these events.

## Event Object Shape

```ts
{
  id: string;               // e.g. 'SEND-TX-101'
  title: string;
  message: string;
  level: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
  response: object | null;  // extra data: chain, address, txHash, etc.
  timestamp: string;        // ISO-8601
}
```

## Route Summary

| Route                    | Prefix            | First event   | Success          | Failure          |
| ------------------------ | ----------------- | ------------- | ---------------- | ---------------- |
| Route 1 → Push Chain     | `SEND-TX-1xx`     | `SEND-TX-101` | `SEND-TX-199-01` | `SEND-TX-199-02` |
| Route 2 → External chain | `SEND-TX-2xx`     | `SEND-TX-201` | `SEND-TX-299-01` | `SEND-TX-299-02` |
| Route 3 CEA → Push Chain | `SEND-TX-3xx`     | `SEND-TX-301` | `SEND-TX-399-01` | `SEND-TX-399-02` |
| Multichain cascade       | `SEND-TX-0xx/9xx` | `SEND-TX-001` | `SEND-TX-999-01` | `SEND-TX-999-02` |

## Pre-flight Balance Check Events

A pre-flight balance check fires after the executor account is resolved and before the user signs. The same three event shapes appear in three buckets depending on context:

| Bucket | Sufficient (INFO/WARNING) | Insufficient terminal (ERROR) | SVM warn (INFO) |
| ------ | ------------------------- | ----------------------------- | --------------- |
| Route 2 single-route | `SEND-TX-203-03` | `SEND-TX-203-04` | `SEND-TX-203-05` |
| Route 3 single-route | `SEND-TX-303-04` | `SEND-TX-303-05` | `SEND-TX-303-06` |
| Cascade (`pathTag === 'CASCADE'`) | `SEND-TX-003-03` | `SEND-TX-003-04` | `SEND-TX-003-05` |

Level semantics on the sufficient slot (`203-03 / 303-04 / 003-03`):

- `INFO` when UEA balance covers the required amount
- `WARNING` when short **and** `tx.options.enforceGasCheck === false` (default; SDK proceeds with fee-lock fallback)
- The ERROR terminal slot (`203-04 / 303-05 / 003-04`) only fires when `enforceGasCheck === true` and balance is short

The SVM warn slot (`203-05 / 303-06 / 003-05`) is informational only; it fires when a Solana pool quote is unusually large relative to a warn threshold. The pre-flight balance check then determines whether the actual balance covers it.

## Route 1: Any Origin → Push Chain

| ID | Title | Level | Response |
| -- | ----- | ----- | -------- |
| `SEND-TX-101` | Origin Chain Detected | INFO | `{ chain, address }` |
| `SEND-TX-102-01` | Estimating Gas | INFO | `{ stage: 'estimating-gas' }` |
| `SEND-TX-103-01` | Resolving Universal Execution Account | INFO | `{ stage: 'resolving-uea' }` |
| `SEND-TX-103-02` | Universal Execution Account Resolved | SUCCESS | `{ uea, deployed }` |
| `SEND-TX-103-03` | Calculating Prepaid Deposit | INFO | `null` |
| `SEND-TX-103-03-01` | Adjusting Prepaid Deposit to be >$1 | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-103-03-02` | Prepaid Deposit in range (>=$1 and <$10) | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-103-03-03` | Prepaid Deposit Exceeds $10 Cap, splitting Gas and Funds | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-103-03-04` | Prepaid Deposit Estimated | SUCCESS | `{ totalPCDeposit, totalDepositUSD, chain }` |
| `SEND-TX-104-01` | Awaiting Transaction | INFO | `{ stage: 'awaiting-transaction' }` |
| `SEND-TX-104-02` | Awaiting Signature | INFO | `{ stage: 'awaiting-signature' }` |
| `SEND-TX-104-03` | Verification Success | SUCCESS | `{ stage: 'verified' }` |
| `SEND-TX-104-04` | Verification Declined / Signature Failed | ERROR | `{ error, isUserDecline }` |
| `SEND-TX-105-01` | Gas Funding In Progress | INFO | `{ txHash, originChainTx }` |
| `SEND-TX-105-02` | Gas Funding Confirmed | SUCCESS | `{ stage: 'gas-funded', txHash }` |
| `SEND-TX-106-01` | Preparing Funds Transfer | INFO | `{ amount, symbol }` |
| `SEND-TX-106-02` | Funds Lock Submitted | INFO | `{ txHash, amount, symbol, originChainTx }` |
| `SEND-TX-106-03` | Awaiting Confirmations | INFO | `{ current: 0, required }` |
| `SEND-TX-106-03-01` | Confirmation `<current>/<required>` Received | INFO | `{ current, required }` |
| `SEND-TX-106-03-02` | Confirmation `<current>/<required>` Received (final) | SUCCESS | `{ current, required }` |
| `SEND-TX-106-04` | Funds Confirmed | SUCCESS | `{ stage: 'funds-confirmed', txHash }` |
| `SEND-TX-106-05` | Syncing with Push Chain | INFO | `{ stage: 'syncing-push-chain' }` |
| `SEND-TX-106-06` | Funds Credited on Push Chain | SUCCESS | `{ amount, symbol }` |
| `SEND-TX-107` | Broadcasting to Push Chain | INFO | `{ stage: 'broadcasting', destination: 'push-chain' }` |
| `SEND-TX-199-01` | Push Chain Tx Success | SUCCESS | `{ txHash, response, receipt }` |
| `SEND-TX-199-02` | Push Chain Tx Failed | ERROR | `{ error, decodedError? }` |
| `SEND-TX-199-03` | Syncing State with Push Chain Timeout | ERROR | `{ error: 'relay timeout', chain, elapsedMs }` |
| `SEND-TX-199-99` | Intermediate Push Chain Tx Completed | INFO | `{ txHash }` |

## Route 2: Any Origin → External Chain (via CEA)

| ID | Title | Level | Response |
| -- | ----- | ----- | -------- |
| `SEND-TX-201` | `<chain>` Detected | INFO | `{ chain, address }` |
| `SEND-TX-202-01` | Estimating `<chain>` Chain Gas | INFO | `{ stage: 'estimating-gas', chain }` |
| `SEND-TX-202-02` | `<chain>` Chain Gas Estimated | SUCCESS | `{ gasEstimate, relayFee, totalCost, currency }` |
| `SEND-TX-203-01` | Resolving `<chain>` Execution Account | INFO | `{ stage: 'resolving-cea', chain }` |
| `SEND-TX-203-02` | `<chain>` Execution Account Resolved | SUCCESS | `{ uea, cea, chain, deployed }` |
| `SEND-TX-203-03` | Checking Balance Requirements | INFO / WARNING | `{ required, available, sufficient, ueaAddress, pathTag, kind, burnToken, segmentIndex, enforceGasCheck, warningOnly, shortfall }` |
| `SEND-TX-203-04` | Insufficient UEA Balance | ERROR | `{ required, available, shortfall, ueaAddress, pathTag, kind, burnToken, segmentIndex }` |
| `SEND-TX-203-05` | SVM Native-Value Warn Threshold | INFO | `{ quoted, threshold, gasToken, pathTag }` |
| `SEND-TX-204-01` | Awaiting Signature | INFO | `{ stage: 'awaiting-signature' }` |
| `SEND-TX-204-02` | Signature Received | SUCCESS | `{ stage: 'signed' }` |
| `SEND-TX-204-03` | Verification Success | SUCCESS | `{ stage: 'verified' }` |
| `SEND-TX-204-04` | Verification Declined / Signature Failed | ERROR | `{ error, isUserDecline }` |
| `SEND-TX-207` | Broadcasting from Push Chain → `<chain>` | INFO | `{ chain }` |
| `SEND-TX-209-01` | Awaiting Push Chain Relay | INFO | `{ chain }` |
| `SEND-TX-209-02` | Syncing State with `<chain>` | INFO | `{ chain, elapsedMs }` |
| `SEND-TX-299-01` | `<chain>` Tx Success | SUCCESS | `{ txHash, ...details }` |
| `SEND-TX-299-02` | `<chain>` Tx Failed | ERROR | `{ error, chain }` |
| `SEND-TX-299-03` | Syncing State with `<chain>` Timeout | ERROR | `{ error: 'relay timeout', chain, elapsedMs }` |
| `SEND-TX-299-99` | Intermediate `<chain>` Tx Completed | INFO | `{ chain, txHash }` |

## Route 3: CEA Origin → Push Chain

| ID | Title | Level | Response |
| -- | ----- | ----- | -------- |
| `SEND-TX-301` | `<chain>`'s Executor Account Detected | INFO | `{ chain, address }` |
| `SEND-TX-302-01` | Estimating `<chain>` Gas | INFO | `{ stage: 'estimating-gas', chain }` |
| `SEND-TX-302-02` | `<chain>` Gas Estimated | SUCCESS | `{ gasEstimate, relayFee, totalCost, currency }` |
| `SEND-TX-303-01` | Resolving Execution Accounts on Chains | INFO | `{ stage: 'resolving-cea-uea', chain }` |
| `SEND-TX-303-02` | Execution Accounts Resolved | SUCCESS | `{ uea, cea, chain, deployed: true }` |
| `SEND-TX-303-03-01` | Adjusting Prepaid Deposit to be >$1 | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-303-03-02` | Prepaid Deposit in range (>=$1 and <$10) | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-303-03-03` | Prepaid Deposit Exceeds $10 Cap, splitting Gas and Funds | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-303-04` | Checking Balance Requirements | INFO / WARNING | `{ required, available, sufficient, ueaAddress, pathTag, kind, burnToken, segmentIndex, enforceGasCheck, warningOnly, shortfall }` |
| `SEND-TX-303-05` | Insufficient UEA Balance | ERROR | `{ required, available, shortfall, ueaAddress, pathTag, kind, burnToken, segmentIndex }` |
| `SEND-TX-303-06` | SVM Native-Value Warn Threshold | INFO | `{ quoted, threshold, gasToken, pathTag }` |
| `SEND-TX-304-01` | Awaiting Signature | INFO | `{ stage: 'awaiting-signature' }` |
| `SEND-TX-304-02` | Signature Received | SUCCESS | `{ stage: 'signed' }` |
| `SEND-TX-304-03` | Verification Success | SUCCESS | `{ stage: 'verified' }` |
| `SEND-TX-304-04` | Verification Declined / Signature Failed | ERROR | `{ error, isUserDecline }` |
| `SEND-TX-307` | Broadcasting from Push Chain → `<chain>` | INFO | `{ chain }` |
| `SEND-TX-309-01` | Awaiting `<chain>` Relay | INFO | `{ chain }` |
| `SEND-TX-309-02` | Syncing State with `<chain>` | INFO | `{ chain, elapsedMs }` |
| `SEND-TX-309-03` | `<chain>` Tx Confirmed | INFO | `{ chain, txHash }` |
| `SEND-TX-310-01` | `<chain>` → Push Chain Inbound Tx Submitted | INFO | `{ chain }` |
| `SEND-TX-310-02` | Syncing State with Push Chain for Inbound Tx | INFO | `{ chain, elapsedMs }` |
| `SEND-TX-399-01` | Push Chain Inbound Tx Success | SUCCESS | `{ chain, txHash, receipt }` |
| `SEND-TX-399-02` | `<chain>` Tx Failed / Push Chain Tx Failed / Push Chain Inbound Tx Failed (title depends on `phase`) | ERROR | `{ error, phase, chain, decodedError? }` |
| `SEND-TX-399-03` | Push Chain Inbound Tx Timeout | ERROR | `{ error: 'outbound timeout' \| 'push timeout' \| 'inbound timeout', phase, chain, elapsedMs }` |
| `SEND-TX-399-99` | Intermediate `<chain>` to Push Tx Completed | INFO | `{ chain, txHash }` |

## Multichain Cascade (`executeTransactions`)

| ID | Title | Level | Response |
| -- | ----- | ----- | -------- |
| `SEND-TX-001` | Multichain Transactions Initiated | INFO | `{ hopCount, chains }` |
| `SEND-TX-002-01` | Starting Intermediate Transaction #`<n>`/`<total>` | INFO | `{ n, total, fromChain, toChain }` |
| `SEND-TX-002-99-99` | Intermediate Transaction #`<n>`/`<total>` Complete | INFO | `{ n, total }` |
| `SEND-TX-003-03` | Checking Balance Requirements | INFO / WARNING | `{ required, available, sufficient, ueaAddress, pathTag, kind, burnToken, segmentIndex, enforceGasCheck, warningOnly, shortfall }` |
| `SEND-TX-003-04` | Multichain Insufficient UEA Balance | ERROR | `{ required, available, shortfall, ueaAddress, pathTag, kind, burnToken, segmentIndex }` |
| `SEND-TX-003-05` | Multichain SVM Native-Value Warn Threshold | INFO | `{ quoted, threshold, gasToken, pathTag }` |
| `SEND-TX-999-01` | All Multichain Transactions Successful | SUCCESS | `{ hopCount }` |
| `SEND-TX-999-02` | Multichain Transactions Failed | ERROR | `{ failedAt, total, error }` |
| `SEND-TX-999-03` | Multichain Transactions Timeout | ERROR | `{ failedAt, total, error: 'cascade timeout' }` |

## UEA Migration

Emitted by the auto-upgrade flow when `getAccountStatus().uea.requiresUpgrade === true`.

| ID | Title | Level | Response |
| -- | ----- | ----- | -------- |
| `UEA-MIG-01` | Checking UEA | INFO | `null` |
| `UEA-MIG-02` | Awaiting Migration Signature | INFO | `null` |
| `UEA-MIG-03` | Broadcasting Migration TX | INFO | `null` |
| `UEA-MIG-9901` | UEA Migration Successful | SUCCESS | `{ version }` |
| `UEA-MIG-9902` | UEA Migration Failed | ERROR | `{ error: 'UEA migration failed' }` |
| `UEA-MIG-9903` | UEA Migration Skipped | INFO | `null` |

## Universal Read (`read`, `executeReads`, `trackRead`)

Same event object shape. Single reads (`read`, and `trackRead`: the lookup emits `READ-TX-104-03` / `104-04` (again on `refresh()`), then `wait()` continues from `READ-TX-104-02`). The final event follows `response.outcome`: `READ-TX-199-01` only for `SUCCESS`, otherwise `READ-TX-199-02`:

| ID | Title | Message | Level | Response |
| -- | ----- | ------- | ----- | -------- |
| `READ-TX-101` | `<chain>` Read Requested | Preparing a `<namespace>` read of `<chain>` | INFO | `{ chain, namespace, queryType }` |
| `READ-TX-102-01` | Fetching Destination Height & Fee | Reading the oracle height and protocol fee for `<chain>` | INFO | `{ chain, stage: 'preflight' }` |
| `READ-TX-102-02` | Read Spec Assembled | Pinned at block `<n>`, expires at Push height `<n>`; fee + budget = `<total>` UPC | SUCCESS | `{ protocolFee, callbackBudget, totalValue, blockNumber, expiryPushChainHeight }` |
| `READ-TX-102-03` | Destination Height Unavailable | The oracle has no height for `<chain>`, so it is not readable | ERROR | `{ chain }` |
| `READ-TX-102-04` | Preflight Stale, Refetching | Preflight is `<n>`s old, refetching the Push height. `executeReads` emits it for a read prepared more than 60 s earlier, before revalidating it | WARNING | `{ fetchedAt, ageMs }` |
| `READ-TX-102-05` | Refund Target Is A Contract | `<refundTo>` is a non-UEA contract; it needs a payable `receive()` or the unspent budget is forfeited | WARNING | `{ refundTo }` |
| `READ-TX-103-01` | Checking Balance Requirements | Balance `<n>` UPC covers / is short of the `<n>` UPC read | INFO when sufficient / WARNING when short | `{ required, available, sufficient, shortfall, enforceGasCheck }` |
| `READ-TX-103-02` | Insufficient Balance | Need `<n>` UPC, have `<n>` UPC | ERROR (only when `enforceGasCheck` is `true`) | `{ required, available, shortfall }` |
| `READ-TX-103-03` | Sensitive Header Detected | Headers are written to a public event log forever: `<headers>` | WARNING | `{ matchedHeaders }` |
| `READ-TX-104-01` | Broadcasting Read Request | Sending the read request to Push Chain | INFO | `{ stage: 'broadcasting' }` |
| `READ-TX-104-03` | Looking Up Request | Looking up read `<requestId>` (or reads in `<txHash>`) on Push Chain | INFO | `{ requestId }` or `{ txHash }` |
| `READ-TX-104-04` | Request Found | Read `<requestId>` found (status `<status>`); once per record | SUCCESS | `{ requestId, status }` (status is a name, e.g. `'FULFILLED'`) |
| `READ-TX-104-05` | Request Not Found | No read found for `<ref>` after `<n>`s; `trackRead` then throws `ReadNotFoundError` (`READ_NOT_FOUND`) | ERROR | `{ requestId \| txHash, elapsedMs }` |
| `READ-TX-104-02` | Request Confirmed, Read Detected | Read `<requestId>` requested in `<txHash>` | SUCCESS | `{ txHash, requestId, logIndex }` |
| `READ-TX-105-01` | Awaiting Quorum | Validators are observing the destination for `<requestId>` | INFO | `{ requestId, status: 'PENDING' }` |
| `READ-TX-105-02` | Voting In Progress | Validators are voting on the result of `<requestId>` | INFO | `{ requestId, status: 'VOTING' }` |
| `READ-TX-105-04` | Approaching Expiry | `<n>` Push blocks until `<requestId>` expires; once per `wait()`, at 30 or fewer blocks left | WARNING | `{ requestId, pushBlocksRemaining }` |
| `READ-TX-106-02` | Callback Delivered | `ReadFulfilled` emitted for `<requestId>` | SUCCESS | `{ requestId }` |
| `READ-TX-106-03` | Callback Reverted | `CallbackFailed` for `<requestId>`; the read is still FULFILLED but your callback did not run | WARNING | `{ requestId, reason }` |
| `READ-TX-106-04` | Callback Gas Settled | Burned `<n>` UPC, refunding `<n>` UPC | INFO | `{ requestId, burned, refunded }` |
| `READ-TX-106-05` | Refund Sent | `<amount>` UPC pushed to `<refundTo>` (fulfilled and expired reads) | INFO | `{ requestId, amount, refundTo }` |
| `READ-TX-106-06` | Refund Rejected | `<refundTo>` rejected the refund; it sits in the admin rescue pool (fulfilled and expired reads) | WARNING | `{ requestId, amount, refundTo }` |
| `READ-TX-199-01` | Read Fulfilled | Read `<requestId>` fulfilled and delivered. Only when `outcome` is `SUCCESS` | SUCCESS | `{ requestId, value, resultData, callbackDelivered }` |
| `READ-TX-199-02` | Read Failed / Expired / Aborted | Read `<requestId>` ended `<status>`: `<error>`. `status` is `EXPIRED` / `FAILED` / `ABORTED`, or the outcome of a FULFILLED read that did not work (`SOURCE_ERROR`, `CALLBACK_FAILED`, `DECODE_FAILED`, `UNKNOWN`) | ERROR | `{ requestId, status, errorCode, errorMsg, refunded }` |
| `READ-TX-199-03` | Read Timeout | Gave up waiting for `<requestId>` after `<n>`s; resume with `trackRead` | ERROR | `{ requestId, lastStatus, elapsedMs }` |

Batches (`executeReads` with more than one read) wrap the single-read events; each read in the batch also emits its own `READ-TX-1xx` events. A single-read `executeReads` emits no `READ-TX-0xx` / `999` events:

| ID | Title | Message | Level | Response |
| -- | ----- | ------- | ----- | -------- |
| `READ-TX-001` | Batch Read Initiated | Preparing `<count>` reads across `<chains>` | INFO | `{ count, chains }` |
| `READ-TX-002-01` | Starting Read #`<n>`/`<total>` | Read `<n>` of `<total>` targets `<chain>` | INFO | `{ n, total, chain }` |
| `READ-TX-002-99-99` | Read #`<n>`/`<total>` Complete | Read `<n>` of `<total>` settled as `<requestId>` | INFO | `{ n, total, requestId }` |
| `READ-TX-999-01` | All Reads Fulfilled | All `<count>` reads fulfilled | SUCCESS | `{ count }` |
| `READ-TX-999-02` | Batch Reads Failed | Batch failed at read `<n>` of `<total>`: `<error>` | ERROR | `{ failedAt, total, error }` |
| `READ-TX-999-03` | Batch Reads Timeout | Batch timed out at read `<n>` of `<total>` | ERROR | `{ failedAt, total, error: 'read timeout' }` |

Workflow: https://push.org/agents/workflows/universal-read.md

## Changed in 6.0.17-6.0.19

No event IDs were added, removed, or renumbered between `6.0.16` and `6.0.19` - all tables above are unchanged. One additive payload change: the outbound wait-stage markers (the awaiting / polling / timeout / failed relay events, e.g. `SEND-TX-209-01/-02`, `SEND-TX-299-02/-03` and their Route 3 `309-xx` / `399-xx` counterparts) now include the coordinating Push Chain tx hash as `pushTxHash` in `response`; the failed marker can additionally carry the destination chain `txHash`.

## Removed in 6.0.6+

For agents migrating from earlier versions:

| Old ID | Replacement |
| ------ | ----------- |
| `SEND-TX-102-02` (Route 1 Gas Estimated, SUCCESS) | Removed, no replacement. `102-01` INFO is the only gas-estimation event. |
| `SEND-TX-103-04` (Route 1 Prepaid Deposit Estimated, SUCCESS) | Renamed to `SEND-TX-103-03-04`. |
| `SEND-TX-199-99-99` (5-part Intermediate Push Chain Tx) | Replaced by 4-part `SEND-TX-199-99`. |
| `SEND-TX-302-03` (Route 3 Calculating Prepaid Deposit, INFO) | Removed. The Route 3 prepaid-deposit cluster no longer has a parent INFO event. |
| `SEND-TX-302-03-01 / -02 / -03` (Route 3 deposit sub-events) | Renumbered to `SEND-TX-303-03-01 / -02 / -03`. |
| `SEND-TX-302-04` (Route 3 Prepaid Deposit Estimated, SUCCESS) | Removed. Route 3 has no terminal "estimated" wrapper; signature flow starts directly at `304-01`. |
