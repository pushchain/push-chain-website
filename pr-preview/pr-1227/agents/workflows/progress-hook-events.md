# ProgressHook Events Reference

Complete list of `progressHook` event IDs emitted by `sendTransaction` and `executeTransactions` in `@pushchain/core@6.0.9`. Pass a callback to `tx.progressHook` to receive these events.

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
| `SEND-TX-203-02` | `<chain>` Execution Account Ready | SUCCESS | `{ uea, cea, chain, deployed }` |
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
