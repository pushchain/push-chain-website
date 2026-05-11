# ProgressHook Events Reference

Complete list of `progressHook` event IDs emitted by `sendTransaction` and `executeTransactions`. Pass a callback to `tx.progressHook` to receive these events.

## Event Object Shape

```ts
{
  id: string;               // e.g. 'SEND-TX-101'
  title: string;
  message: string;
  level: 'INFO' | 'SUCCESS' | 'ERROR';
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

---

## Route 1 — Any Origin → Push Chain

| ID | Title | Level | Response |
| -- | ----- | ----- | -------- |
| `SEND-TX-101` | Origin Chain Detected | INFO | `{ chain, address }` |
| `SEND-TX-102-01` | Estimating Gas | INFO | `{ stage: 'estimating-gas' }` |
| `SEND-TX-102-02` | Gas Estimated | SUCCESS | `{ totalCost, currency }` |
| `SEND-TX-103-01` | Resolving Universal Execution Account | INFO | `{ stage: 'resolving-uea' }` |
| `SEND-TX-103-02` | Universal Execution Account Resolved | SUCCESS | `{ uea, deployed }` |
| `SEND-TX-103-03` | Calculating Prepaid Deposit | INFO | null |
| `SEND-TX-103-03-01` | Adjusting Prepaid Deposit to be >$1 | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD }` |
| `SEND-TX-103-03-02` | Prepaid Deposit in range (>=$1 and <$10) | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD }` |
| `SEND-TX-103-03-03` | Prepaid Deposit Exceeds $10 Cap, splitting Gas and Funds | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD }` |
| `SEND-TX-103-04` | Prepaid Deposit Estimated | SUCCESS | `{ totalPCDeposit, totalDepositUSD }` |
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
| `SEND-TX-199-02` | Push Chain Tx Failed | ERROR | `{ error }` |

---

## Route 2 — Any Origin → External Chain (via CEA)

| ID | Title | Level | Response |
| -- | ----- | ----- | -------- |
| `SEND-TX-201` | `<chain>` Detected | INFO | `{ chain, address }` |
| `SEND-TX-202-01` | Estimating `<chain>` Gas | INFO | `{ stage: 'estimating-gas', chain }` |
| `SEND-TX-202-02` | `<chain>` Gas Estimated | SUCCESS | `{ gasEstimate, relayFee, totalCost, currency }` |
| `SEND-TX-203-01` | Resolving `<chain>` Execution Account | INFO | `{ stage: 'resolving-cea', chain }` |
| `SEND-TX-203-02` | `<chain>` Execution Account Ready | SUCCESS | `{ uea, cea, chain, deployed }` |
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
| `SEND-TX-299-99` | `<chain>` Tx Completed (intermediate) | INFO | `{ chain, txHash }` |

---

## Route 3 — CEA Origin → Push Chain

| ID | Title | Level | Response |
| -- | ----- | ----- | -------- |
| `SEND-TX-199-99-99` | Push Chain TX Completed (intermediate) | INFO | `{ txHash }` |
| `SEND-TX-301` | `<chain>` Executor Account Detected | INFO | `{ chain, address }` |
| `SEND-TX-302-01` | Estimating `<chain>` Gas | INFO | `{ stage: 'estimating-gas', chain }` |
| `SEND-TX-302-02` | `<chain>` Gas Estimated | SUCCESS | `{ gasEstimate, relayFee, totalCost, currency }` |
| `SEND-TX-302-03` | Calculating Prepaid Deposit | INFO | null |
| `SEND-TX-302-03-01` | Adjusting Prepaid Deposit to be >$1 | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD }` |
| `SEND-TX-302-03-02` | Prepaid Deposit in range (>=$1 and <$10) | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD }` |
| `SEND-TX-302-03-03` | Prepaid Deposit Exceeds $10 Cap, splitting Gas and Funds | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD }` |
| `SEND-TX-302-04` | Prepaid Deposit Estimated | SUCCESS | `{ totalPCDeposit, totalDepositUSD }` |
| `SEND-TX-303-01` | Resolving Execution Accounts on Chains | INFO | `{ stage: 'resolving-cea-uea', chain }` |
| `SEND-TX-303-02` | Execution Accounts Resolved | SUCCESS | `{ uea, cea, chain, deployed }` |
| `SEND-TX-304-01` | Awaiting Signature | INFO | `{ stage: 'awaiting-signature' }` |
| `SEND-TX-304-02` | Signature Received | SUCCESS | `{ stage: 'signed' }` |
| `SEND-TX-304-03` | Verification Success | SUCCESS | `{ stage: 'verified' }` |
| `SEND-TX-304-04` | Verification Declined / Signature Failed | ERROR | `{ error, isUserDecline }` |
| `SEND-TX-307` | Broadcasting from Push Chain → `<chain>` | INFO | `{ chain }` |
| `SEND-TX-309-01` | Awaiting `<chain>` Relay | INFO | `{ chain }` |
| `SEND-TX-309-02` | Syncing State with `<chain>` | INFO | `{ chain, elapsedMs }` |
| `SEND-TX-309-03` | `<chain>` Tx Confirmed | INFO | `{ chain, txHash }` |
| `SEND-TX-310-01` | `<chain>` → Push Chain Inbound Submitted | INFO | `{ chain }` |
| `SEND-TX-310-02` | Syncing Push Chain for Inbound | INFO | `{ chain, elapsedMs }` |
| `SEND-TX-399-01` | Push Chain Inbound Tx Success | SUCCESS | `{ chain, txHash, receipt }` |
| `SEND-TX-399-02` | Tx Failed | ERROR | `{ error, phase, chain }` |
| `SEND-TX-399-03` | Timeout | ERROR | `{ error, phase, chain, elapsedMs }` |

---

## Multichain Cascade (`executeTransactions`)

| ID | Title | Level | Response |
| -- | ----- | ----- | -------- |
| `SEND-TX-001` | Multichain Transactions Initiated | INFO | `{ hopCount, chains }` |
| `SEND-TX-002-01` | Starting Intermediate Transaction #`<n>`/`<total>` | INFO | `{ n, total, fromChain, toChain }` |
| `SEND-TX-002-99-99` | Intermediate Transaction #`<n>`/`<total>` Complete | INFO | `{ n, total }` |
| `SEND-TX-999-01` | All Multichain Transactions Successful | SUCCESS | `{ hopCount }` |
| `SEND-TX-999-02` | Multichain Transactions Failed | ERROR | `{ failedAt, total, error }` |
| `SEND-TX-999-03` | Multichain Transactions Timeout | ERROR | `{ failedAt, total, error: 'cascade timeout' }` |
