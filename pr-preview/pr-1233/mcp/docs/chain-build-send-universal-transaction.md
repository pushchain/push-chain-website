---
title: "Send Universal Transaction"
url: "https://pushchain.github.io/docs/chain/build/send-universal-transaction/"
section: "build"
lastUpdated: "2026-08-03T12:33:04Z"
description: "Send Universal Transaction | Build | Push Chain Docs"
---

# Send Universal Transaction

## Overview

Universal transactions let you execute transfers, contract calls, asset movement, and batched transactions across **Push Chain** and **supported external chains** through one unified interface.

You do not need separate transactions, wrapping, manual bridging, or extra tooling.

To understand this concept in detail, please see [Understanding Universal Transactions](/push-chain-website/pr-preview/pr-1233/docs/chain/build/understanding-universal-transactions/).

### How Routing Works

`sendTransaction` automatically selects the execution route based on the `to` and `from` fields.

| Route | Input Shape | Executes On | Notes |
| --- | --- | --- | --- |
| Route 1 | `to: "0x..."` | Push Chain | Default route for Push Chain targets. |
| Route 2 | `to: { address, chain }` | External chain | Executes on the specified external chain. |
| Route 3 | `to: "0x..."` and `from: { chain }` | Push Chain | Uses your CEA on the specified external chain as the execution origin. |

## Send a Universal Transaction

**_`pushChainClient.universal.sendTransaction({tx}): Promise<TxResponse>`_**

```typescript
const txResponse = await pushChainClient.universal.sendTransaction({
  to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',
  value: PushChain.utils.helpers.parseUnits('0.1', 18), // 0.1 PC in uPC
  // value: BigInt('100000000000000000') is equivalent here
});
```

These`Arguments`are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`tx.to`_ | `string` | `{ address: string; chain: CHAIN }` | Defines the execution target. Passing a plain address triggers Push Chain execution.  
  
Passing `{ address, chain }` targets an external chain. |
| `tx.from` | `{ chain: PushChain.CONSTANTS.CHAIN }` | Optional. When set to an external chain, execution uses the Chain Executor Account (CEA) for that chain as the transaction origin.  
  
This is primarily used for external origin or CEA-based execution flows.  
PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.BNB_TESTNET``PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA``PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |
| `tx.value` | `BigInt` | Native value to send, expressed in the smallest unit of the execution context.  
  
On Push Chain this is uPC (the smallest unit, like wei in ETH).  
  
On external execution routes, this maps to the native asset amount of that route. |
| `tx.data` | `string` | `Array<{ to: string; value: bigint; data: string }>` | Encoded calldata for a single call `string` or batched multicall `Array<{ to, value, data }>`.  
  
Use `encodeTxData` to produce the correct bytes for EVM (ABI) or Solana (Anchor IDL) targets. |
| `tx.funds` | `{ amount: BigInt; token?: MoveableToken | { chain: CHAIN; address: string } }` | Moves supported assets as part of the transaction flow.  
  
Depending on the route, assets may be moved into Push Chain or between Push Chain and a supported external chain.  
  
If `tx.data` is provided, asset movement and execution happen atomically.  
  
`token` accepts either a **`MoveableToken`** (a supported asset from the static table, e.g. `PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT`) or a **PC20 reference** — `{ chain, address }`, resolved against the on-chain registry. See [Moving PC20 Tokens](#moving-pc20-tokens).  
PushChain.CONSTANTS.MOVEABLE.TOKEN

`PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.WETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.stETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.ETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.WETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.ETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.WETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.BNB``PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL``PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEth``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthArb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthBase``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pBnb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.eth``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.arb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.base``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.bnb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.sol``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.eth``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.arb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.base``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.bsc``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.sol`

 |
| `tx.progressHook` | `(progress: ProgressHookType) => void` | A callback function to receive progress updates during transaction lifecycle, especially useful for tracking cross-chain transactions. |

## Progress Hook Type and Response

ProgressHook Type and Response

| Field | Type | Description |
| --- | --- | --- |
| `progress` | `Object` | The progress of the transaction. |
| `progress.id` | `string` | Unique identifier for the progress event. |
| `progress.title` | `string` | Brief title of the progress event. |
| `progress.message` | `string` | Detailed message describing the event. |
| `progress.level` | `INFO` | `SUCCESS` | `ERROR` | Severity level of the event. |
| `progress.response` | `object` | `null` | Additional data object for the event, or `null` if not applicable. |
| `progress.timestamp` | `string` | ISO-8601 timestamp when the event occurred (e.g. `2025-06-26T15:04:05.000Z`). |

**Route 1 → Execute on Push Chain**

| ID | Title | Message | Level | Response |
| --- | --- | --- | --- | --- |
| `SEND-TX-101` | Origin Chain Detected | Origin chain: `<chain>` — Address: `<address>` | INFO | `{ chain, address }` |
| `SEND-TX-102-01` | Estimating Gas | Estimating and fetching gas limit, gas price for TX | INFO | `{ stage: 'estimating-gas' }` |
| `SEND-TX-103-01` | Resolving Universal Execution Account | Resolving UEA – computing address, checking deployment and balance | INFO | `{ stage: 'resolving-uea' }` |
| `SEND-TX-103-02` | Universal Execution Account Resolved | UEA: `<address>`, Deployed: `<true/false>` | SUCCESS | `{ uea, deployed }` |
| `SEND-TX-103-03` | Calculating Prepaid Deposit | Calculating required prepaid deposit (one-time >$1; refilled only when gas nears exhaustion) | INFO | null |
| `SEND-TX-103-03-01` | Adjusting Prepaid Deposit to be >$1 | Required deposit below $1 minimum — padding to $1 floor | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-103-03-02` | Prepaid Deposit in range (>=$1 and <$10) | Required deposit `${x}` within $1–$10 range — depositing as required | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-103-03-03` | Prepaid Deposit Exceeds $10 Cap, splitting Gas and Funds | Required deposit exceeds $10 cap — splitting: $10 gas leg + `${overflow}` UPC overflow bridged as funds | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-103-03-04` | Prepaid Deposit Estimated | Estimated prepaid deposit: $`<totalDepositUSD>` (`<totalPCDeposit>` UPC) | SUCCESS | `{ totalPCDeposit, totalDepositUSD, chain }` |
| `SEND-TX-104-01` | Awaiting Transaction | Awaiting user transaction on origin chain | INFO | `{ stage: 'awaiting-transaction' }` |
| `SEND-TX-104-02` | Awaiting Signature | Awaiting user signature for universal payload | INFO | `{ stage: 'awaiting-signature' }` |
| `SEND-TX-104-03` | Verification Success | Verification completed via Transaction or Signature | SUCCESS | `{ stage: 'verified' }` |
| `SEND-TX-104-04` | Verification Declined / Signature Failed | Verification declined by user | `<error>` | ERROR | `{ error, isUserDecline }` |
| `SEND-TX-105-01` | Gas Funding In Progress | Gas funding tx sent: `<txHash>` | INFO | `{ txHash, originChainTx }` |
| `SEND-TX-105-02` | Gas Funding Confirmed | Gas funding confirmed on origin chain | SUCCESS | `{ stage: 'gas-funded', txHash }` |
| `SEND-TX-106-01` | Preparing Funds Transfer | Preparing to move `<amount> <symbol>` from origin chain | INFO | `{ amount, symbol }` |
| `SEND-TX-106-02` | Funds Lock Submitted | Locking `<amount> <symbol>` — Tx: `<txHash>` | INFO | `{ txHash, amount, symbol, originChainTx }` |
| `SEND-TX-106-03` | Awaiting Confirmations | Waiting for `<required>` confirmations | INFO | `{ current: 0, required }` |
| `SEND-TX-106-03-01` | Confirmation `<current>/<required>` Received | `<current>/<required>` confirmations received | INFO | `{ current, required }` |
| `SEND-TX-106-03-02` | Confirmation `<current>/<required>` Received | `<current>/<required>` confirmations received | SUCCESS | `{ current, required }` |
| `SEND-TX-106-04` | Funds Confirmed | Origin chain lock confirmed | SUCCESS | `{ stage: 'funds-confirmed', txHash }` |
| `SEND-TX-106-05` | Syncing with Push Chain | Waiting for transaction to appear on Push Chain | INFO | `{ stage: 'syncing-push-chain' }` |
| `SEND-TX-106-06` | Funds Credited on Push Chain | Funds credited: `<amount> <symbol>` | SUCCESS | `{ amount, symbol }` |
| `SEND-TX-107` | Broadcasting to Push Chain | Sending tx to Push Chain... | INFO | `{ stage: 'broadcasting', destination: 'push-chain' }` |
| `SEND-TX-199-01` | Push Chain Tx Success | Tx confirmed: `<txHash>` | SUCCESS | `{ txHash, response, receipt }` |
| `SEND-TX-199-02` | Push Chain Tx Failed | `<error message>` | ERROR | `{ error, decodedError? }` |
| `SEND-TX-199-03` | Syncing State with Push Chain Timeout | Timed out waiting for relay to Push Chain | ERROR | `{ error: 'relay timeout', chain, elapsedMs }` |
| `SEND-TX-199-99` | Intermediate Push Chain Tx Completed | Intermediate Push Chain tx confirmed: `<txHash>`, progressing to next phase | INFO | `{ txHash }` |

**Route 2 → Execute on External Chain**

| ID | Title | Message | Level | Response |
| --- | --- | --- | --- | --- |
| `SEND-TX-201` | `<chain>` Detected | External chain: `<chain>` — Target address: `<address>` | INFO | `{ chain, address }` |
| `SEND-TX-202-01` | Estimating `<chain>` Chain Gas | Querying Push Chain gas and UGPC relay fee | INFO | `{ stage: 'estimating-gas', chain }` |
| `SEND-TX-202-02` | `<chain>` Chain Gas Estimated | Push gas: `<n>` UPC + UGPC relay: `<n>` UPC = `<total>` UPC | SUCCESS | `{ gasEstimate, relayFee, totalCost, currency }` |
| `SEND-TX-203-01` | Resolving `<chain>` Execution Account | Resolving UEA on Push Chain and CEA on `<chain>` | INFO | `{ stage: 'resolving-cea', chain }` |
| `SEND-TX-203-02` | `<chain>` Execution Account Resolved | UEA: `<ueaAddr>`. CEA: `<ceaAddr>` on `<chain>`. Deployed: `<true/false>` | SUCCESS | `{ uea, cea, chain, deployed }` |
| `SEND-TX-203-03` | Pre-flight Balance Check | UEA balance: `<n>` PC; required: `<n>` PC; `<sufficient/INSUFFICIENT>` (`<pathTag>`) | INFO when sufficient / WARNING when insufficient | `{ required, available, sufficient, ueaAddress, pathTag, kind, burnToken, segmentIndex }` |
| `SEND-TX-203-04` | Insufficient UEA Balance | Shortfall `<n>` PC on `<pathTag>`. Bridge >=`<n>` PC to UEA `<ueaAddr>` before retrying. | WARNING when `enforceGasCheck` is false / ERROR when `enforceGasCheck` is true. | `{ required, available, shortfall, ueaAddress, pathTag, kind, burnToken, segmentIndex }` |
| `SEND-TX-203-05` | SVM Native-Value Warn Threshold | Buffered pool quote `<n>` PC exceeds warn threshold `<n>` PC for `<gasToken>` (`<pathTag>`). Pool may be skewed. | INFO | `{ quoted, threshold, gasToken, pathTag }` |
| `SEND-TX-204-01` | Awaiting Signature | Awaiting user signature for universal payload | INFO | `{ stage: 'awaiting-signature' }` |
| `SEND-TX-204-02` | Signature Received | Universal payload signed — preparing broadcast | SUCCESS | `{ stage: 'signed' }` |
| `SEND-TX-204-03` | Verification Success | Verification completed | SUCCESS | `{ stage: 'verified' }` |
| `SEND-TX-204-04` | Verification Declined / Signature Failed | Verification declined by user | `<error>` | ERROR | `{ error, isUserDecline }` |
| `SEND-TX-207` | Broadcasting from Push Chain → `<chain>` | Sending tx to Push Chain... | INFO | `{ chain }` |
| `SEND-TX-209-01` | Awaiting Push Chain Relay | Waiting for UGPC to relay execution to `<chain>` | INFO | `{ chain, pushTxHash? }` |
| `SEND-TX-209-02` | Syncing State with `<chain>` | Polling `<chain>` for CEA execution | INFO | `{ chain, elapsedMs, pushTxHash? }` |
| `SEND-TX-299-01` | `<chain>` Tx Success | CEA executed on `<chain>` - tx: `<txHash>` | SUCCESS | `{ txHash, ...details }` |
| `SEND-TX-299-02` | `<chain>` Tx Failed | `<errorMessage>` | ERROR | `{ error, chain, pushTxHash?, txHash? }` |
| `SEND-TX-299-03` | Syncing State with `<chain>` Timeout | Timed out waiting for UGPC relay to `<chain>` | ERROR | `{ error: 'relay timeout', chain, elapsedMs, pushTxHash? }` |
| `SEND-TX-299-99` | Intermediate `<chain>` Tx Completed | Intermediate `<chain>` tx confirmed: `<txHash>`, progressing to next phase | INFO | `{ chain, txHash }` |

**Route 3 → Execute on Push Chain from CEA**

| ID | Title | Message | Level | Response |
| --- | --- | --- | --- | --- |
| `SEND-TX-301` | `<chain>`'s Executor Account Detected | Source chain: `<chain>` — CEA: `<ceaAddress>` | INFO | `{ chain, address }` |
| `SEND-TX-302-01` | Estimating `<chain>` Gas | Querying Push Chain gas and UGPC relay fee | INFO | `{ stage: 'estimating-gas', chain }` |
| `SEND-TX-302-02` | `<chain>` Gas Estimated | Push gas: `<n>` UPC + UGPC relay: `<n>` UPC = `<total>` UPC | SUCCESS | `{ gasEstimate, relayFee, totalCost, currency }` |
| `SEND-TX-303-01` | Resolving Execution Accounts on Chains | Resolving UEA on Push Chain and CEA on `<chain>` | INFO | `{ stage: 'resolving-cea-uea', chain }` |
| `SEND-TX-303-02` | Execution Accounts Resolved | UEA: `<ueaAddr>`. CEA: `<ceaAddr>` on `<chain>`. Deployed: true | SUCCESS | `{ uea, cea, chain, deployed: true }` |
| `SEND-TX-303-03-01` | Adjusting Prepaid Deposit to be >$1 | Required deposit below $1 minimum — padding to $1 floor | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-303-03-02` | Prepaid Deposit in range (>=$1 and <$10) | Required deposit `${x}` within $1–$10 range — depositing as required | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-303-03-03` | Prepaid Deposit Exceeds $10 Cap, splitting Gas and Funds | Required deposit exceeds $10 cap — splitting: $10 gas leg + `${overflow}` UPC overflow bridged as funds | INFO | `{ gasRequired, extraDepositPC, totalDepositUSD, chain }` |
| `SEND-TX-303-04` | Checking Balance Requirements | UEA balance: `<n>` PC; required: `<n>` PC; `<sufficient/INSUFFICIENT>` (`<pathTag>`) | INFO when sufficient / WARNING when insufficient based on `enforceGasCheck` | `{ required, available, sufficient, ueaAddress, pathTag, kind, burnToken, segmentIndex, enforceGasCheck, warningOnly, shortfall }` |
| `SEND-TX-303-05` | Insufficient UEA Balance | Shortfall `<n>` PC on `<pathTag>`. Bridge >=`<n>` PC to UEA `<ueaAddr>` before retrying. | ERROR (only when `enforceGasCheck === true`) | `{ required, available, shortfall, ueaAddress, pathTag, kind, burnToken, segmentIndex }` |
| `SEND-TX-303-06` | SVM Native-Value Warn Threshold | Buffered pool quote `<n>` PC exceeds warn threshold `<n>` PC for `<gasToken>` (`<pathTag>`). Pool may be skewed. | INFO | `{ quoted, threshold, gasToken, pathTag }` |
| `SEND-TX-304-01` | Awaiting Signature | Awaiting user signature for universal payload | INFO | `{ stage: 'awaiting-signature' }` |
| `SEND-TX-304-02` | Signature Received | Universal payload signed — preparing broadcast | SUCCESS | `{ stage: 'signed' }` |
| `SEND-TX-304-03` | Verification Success | Verification completed | SUCCESS | `{ stage: 'verified' }` |
| `SEND-TX-304-04` | Verification Declined / Signature Failed | Verification declined by user | `<error>` | ERROR | `{ error, isUserDecline }` |
| `SEND-TX-307` | Broadcasting from Push Chain → `<chain>` | Sending tx from Push Chain... | INFO | `{ chain }` |
| `SEND-TX-309-01` | Awaiting `<chain>` Relay | Waiting for UGPC to relay to CEA on `<chain>` | INFO | `{ chain, pushTxHash? }` |
| `SEND-TX-309-02` | Syncing State with `<chain>` | Polling `<chain>` for CEA execution | INFO | `{ chain, elapsedMs, pushTxHash? }` |
| `SEND-TX-309-03` | `<chain>` Tx Confirmed | CEA executed on `<chain>`: `<txHash>` — return inbound initiated | INFO | `{ chain, txHash }` |
| `SEND-TX-310-01` | `<chain>` → Push Chain Inbound Tx Submitted | CEA initiated return — waiting for Push Chain inbound from `<chain>` | INFO | `{ chain }` |
| `SEND-TX-310-02` | Syncing State with Push Chain for Inbound Tx | Polling Push Chain for inbound from `<chain>` | INFO | `{ chain, elapsedMs }` |
| `SEND-TX-399-01` | Push Chain Inbound Tx Success | Inbound from `<chain>` confirmed · Push tx: `<txHash>` | SUCCESS | `{ chain, txHash, receipt }` |
| `SEND-TX-399-02` | `<chain>` Tx Failed / Push Chain Tx Failed / Push Chain Inbound Tx Failed | `<errorMessage>` | ERROR | `{ error, phase, chain, pushTxHash?, txHash? }` |
| `SEND-TX-399-03` | `<chain>` Timeout / Push Chain Timeout / Push Chain Inbound Timeout | Timed out waiting for... | ERROR | `{ error, phase, chain, elapsedMs, pushTxHash? }` |
| `SEND-TX-399-99` | Intermediate `<chain>` to Push Tx Completed | Intermediate `<chain>` to Push tx confirmed: `<txHash>`, progressing to next phase | INFO | `{ chain, txHash }` |

**Executing multiple transactions (Send Multichain Transations)**

| ID | Title | Message | Level | Response |
| --- | --- | --- | --- | --- |
| `SEND-TX-001` | Multichain Transactions Initiated | `<hopCount>`\-hop transaction — `<chains>` | INFO | `{ hopCount, chains }` |
| `SEND-TX-002-01` | Starting Intermediate Transaction #`<n>`/`<total>` | Starting tx `<n>` of `<total>`: `<fromChain>` → `<toChain>` | INFO | `{ n, total, fromChain, toChain }` |
| `SEND-TX-002-99-99` | Intermediate Transaction #`<n>`/`<total>` Complete | Tx `<n>` of `<total>` confirmed — proceeding to tx `<n+1>` | INFO | `{ n, total }` |
| `SEND-TX-003-03` | Pre-flight Balance Check (cascade) | UEA balance: `<n>` PC; required: `<n>` PC; `<sufficient/INSUFFICIENT>` (CASCADE) | INFO when sufficient / WARNING when insufficient | `{ required, available, sufficient, ueaAddress, pathTag: 'CASCADE', kind, burnToken, segmentIndex }` |
| `SEND-TX-003-04` | Insufficient UEA Balance (cascade) | Shortfall `<n>` PC on CASCADE (segment `<segmentIndex>`). Bridge >=`<n>` PC to UEA `<ueaAddr>` before retrying. | WARNING when `enforceGasCheck` is false / ERROR when `enforceGasCheck` is true. | `{ required, available, shortfall, ueaAddress, pathTag: 'CASCADE', kind, burnToken, segmentIndex }` |
| `SEND-TX-003-05` | SVM Native-Value Warn Threshold (cascade) | Buffered pool quote `<n>` PC exceeds warn threshold `<n>` PC (CASCADE) | INFO | `{ quoted, threshold, gasToken, pathTag: 'CASCADE' }` |
| `SEND-TX-999-01` | All Multichain Transactions Successful | `<hopCount>`\-hop transaction confirmed across all chains | SUCCESS | `{ hopCount }` |
| `SEND-TX-999-02` | Multichain Transactions Failed | Cascade failed at hop `<failedAt>` of `<total>`: `<error>` | ERROR | `{ failedAt, total, error }` |
| `SEND-TX-999-03` | Multichain Transactions Timeout | Cascade timed out at hop `<failedAt>` of `<total>` | ERROR | `{ failedAt, total, error: 'cascade timeout' }` |

Advanced Arguments

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| `tx.gasLimit` | `BigInt` | `SDK Estimated` | Optional override for transaction gas limit. If omitted, the SDK estimates it. |
| `tx.maxFeePerGas` | `BigInt` | `SDK Estimated` | Optional override for max fee per gas. If omitted, the SDK estimates it when applicable. |
| `tx.maxPriorityFeePerGas` | `BigInt` | `SDK Estimated` | Optional override for priority fee. If omitted, the SDK estimates it when applicable. |
| `tx.options.enforceGasCheck` | `boolean` | `false` | Controls how the SDK reacts when the pre-flight gas / balance check detects a shortfall on the UEA (native PC) or, for `funds` flows, the bridged PRC-20 balance.  
  
`false` will still emit a `WARNING`\-level progress event and proceed. The transaction may still succeed (UEA gas is auto-refilled via fee locking; PRC-20 may settle on a follow-up leg).  
  
`true` will emit an `ERROR`\-level progress event and throw `InsufficientUEABalanceError` before broadcast, leaving on-chain state untouched. Use this when you want pre-flight guarantees over best-effort retries. |
| `tx.payGasWith` | `{ token?: PushChain.CONSTANTS.PAYABLE.TOKEN; slippageBps?: number; minAmountOut?: bigint | string }` | \- | Pay universal transaction fees using a supported token (e.g., `PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT`).  
   
Optional `slippageBps` (e.g., `100` = 1%) and `minAmountOut` (wei) let you control on-chain swap execution. PushChain.CONSTANTS.PAYABLE.TOKEN
`PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.ETH``PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDC``PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH``PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.stETH``PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.ETH``PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDC``PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.ETH``PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDC``PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.BNB``PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDC``PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.SOL``PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDC`

 |
| `tx.deadline` | `BigInt` | \- | Optional execution deadline for the transaction. |

## Returns TxResponse

Returns \`TxResponse\` <object>

```typescript
{
  hash: '0xe2302bd21ab0902f37cb605d491ce5f95ee35ce4083405dddf3657d782acae35',
  origin: 'eip155:42101:0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',
  blockNumber: 0n,
  blockHash: '',
  transactionIndex: 0,
  chainId: '42101',
  from: '0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',
  to: '0x35B84d6848D16415177c64D64504663b998A6ab4',
  nonce: 341,
  data: '0x',
  value: 1000n,
  gasLimit: 21000n,
  gasPrice: 1325000000n,
  maxFeePerGas: 1325000000n,
  maxPriorityFeePerGas: 125000000n,
  accessList: [],
  wait: [Function: wait],
  type: '2',
  typeVerbose: 'eip1559',
  atomic: true,
  signature: {
    r: '0x556566ba1304bf8e93025fc82daff32eb24b7ee9804a76d0baa0098dfa7237de',
    s: '0x4495d7811d3dcb1beac16f29261903b542b0b65f51aa5942f65dbaf67e735724',
    v: 1,
    yParity: 1
  },
  raw: {
    from: '0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',
    to: '0x35B84d6848D16415177c64D64504663b998A6ab4',
    nonce: 341,
    data: '0x',
    value: 1000n
  }
}
```

| Property | Type | Description |
| --- | --- | --- |
| `hash` | `string` | Unique transaction hash identifier |
| `origin` | `string` | Origin identifier in format "eip155:chainId:address" or "solana:chainId:address" |
| `blockNumber` | `BigInt` | Block number where transaction was included |
| `blockHash` | `string` | Hash of the block containing this transaction |
| `transactionIndex` | `number` | Position/index of transaction within the block |
| `chainId` | `string` | Chain identifier (e.g. Push Chain = `42101`) |
| `from` | `string` | UEA (Universal Executor Account) that executed the transaction |
| `to` | `string` | Target address the UEA executed against |
| `nonce` | `number` | Derived nonce for the UEA |
| `data` | `string` | Perceived calldata (transaction input data) |
| `value` | `BigInt` | Amount of native tokens transferred (in wei) |
| `gasLimit` | `BigInt` | Maximum gas units allocated for transaction |
| `gasPrice` | `BigInt` | Gas price for legacy transactions (in wei) |
| `maxFeePerGas` | `BigInt` | Maximum fee per gas for EIP-1559 transactions |
| `maxPriorityFeePerGas` | `BigInt` | Maximum priority fee (tip) per gas for EIP-1559 |
| `accessList` | `array` | EIP-2930 access list for optimized storage access |
| `type` | `string` | Transaction type identifier |
| `typeVerbose` | `string` | Human-readable transaction type |
| `atomic` | `boolean` | Whether execution was all-or-nothing. `true` for single transactions and atomic batches; `false` only when a native-origin multicall fell back to sequential per-call execution |
| `signature` | `object` | ECDSA signature components |
| `signature.r` | `string` | R component of ECDSA signature |
| `signature.s` | `string` | S component of ECDSA signature |
| `signature.v` | `number` | Recovery ID (legacy format) |
| `signature.yParity` | `number` | Y-parity for EIP-1559 (0 or 1) |
| `raw` | `object` | Original on-chain transaction data |
| `raw.from` | `string` | Actual from address that went on chain |
| `raw.to` | `string` | Actual to address that went on chain |
| `raw.nonce` | `number` | Actual raw nonce used on chain |
| `raw.data` | `string` | Actual raw data that went on chain |
| `raw.value` | `BigInt` | Actual derived value that went on chain |
| `wait` | `function` | Async function that returns a Promise resolving to UniversalTxReceipt |

Getting \`txReceipt\` <object> from \`txResponse\` <object>

  

Calling the `wait()` function from `txResponse` object will give you a `Promise<UniversalTxReceipt>` once the transaction is confirmed on-chain.

  

```typescript
const txReceipt = await txResponse.wait(1); // number of blocks confirmations to wait for
```

```typescript
{
  hash: '0xb52706db4116dd6bbea87be5142ac2c69b17fe8ccf8e2b88ac176adb30b90dd6',
  blockNumber: 3413247n,
  blockHash: '0x5a7b6e2716f7d4450b6ca08aebfe74cea3d876367a8afe6f603196ba8c346a2d',
  transactionIndex: 0,
  from: '0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',
  to: '0x35B84d6848D16415177c64D64504663b998A6ab4',
  contractAddress: null,
  gasPrice: 1325000000n,
  gasUsed: 21000n,
  cumulativeGasUsed: 21000n,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: 1,
  raw: {
    from: '0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',
    to: '0x35B84d6848D16415177c64D64504663b998A6ab4',
    nonce: 342,
    data: '0x',
    value: 1000n
  }
}
```

| Property | Type | Description |
| --- | --- | --- |
| `hash` | `string` | Transaction hash (same as in transaction response) |
| `blockNumber` | `BigInt` | Block number where transaction was confirmed |
| `blockHash` | `string` | Hash of the block containing the transaction |
| `transactionIndex` | `number` | Position/index of transaction within the block |
| `from` | `string` | Executor account address (UEA on Push Chain) |
| `to` | `string` | Actual intended target address of the transaction |
| `contractAddress` | `string` | `null` | Address of deployed contract (null for regular transfers) |
| `gasPrice` | `BigInt` | Gas price used for the transaction (in wei) |
| `gasUsed` | `BigInt` | Actual gas consumed by the transaction |
| `cumulativeGasUsed` | `BigInt` | Total gas used by all transactions in the block up to this one |
| `logs` | `array` | Array of log objects emitted by the transaction |
| `logsBloom` | `string` | Bloom filter for efficient log searching |
| `status` | `number` | Transaction status (1 = success, 0 = failure) |
| `raw` | `object` | Raw on-chain transaction data |
| `raw.from` | `string` | Actual from address that executed on chain |
| `raw.to` | `string` | Actual to address that was called on chain |
| `raw.nonce` | `number` | Actual nonce used on chain |
| `raw.data` | `string` | Actual calldata sent on chain |
| `raw.value` | `BigInt` | Actual value transferred on chain |

## Send Transaction with Contract Interaction

When calling a smart contract method via sendTransaction, supply the ABI-encoded function call as a **hex string in the data field**. You can choose `ethers` or `viem` or any of your favorite libraries to encode the function data. Or, use our utility function `PushChain.utils.helpers.encodeTxData` to encode the function data.

```typescript
// Define the ABI for the ERC20 transfer function
const erc20Abi = [
  'function transfer(address to, uint256 amount) returns (bool)',
];

// Generate the encoded function data using viem
const data = PushChain.utils.helpers.encodeTxData({
  abi: erc20Abi,
  functionName: 'transfer',
  // Transfer 10 tokens, converted to 18 decimal places
  args: ['0xRecipientAddress', PushChain.utils.helpers.parseUnits('10', 18)],
});

// Send the transaction using Push Chain SDK
const txResponse = await pushChainClient.universal.sendTransaction({
  to: '0xTokenContractAddress', // The smart contract address on Push Chain
  value: BigInt('0'), // No $PC being sent, just contract interaction
  data: data, // The encoded function call
});
```

## Send Transaction with Asset Movement

You can move supported assets (e.g., USDT, USDC, or other tokens) from your origin chain to Push Chain and execute your call in a single transaction.

Use the funds field to specify the amount of assets to move, and _optionally_ the data field to specify the function call to execute on Push Chain.

> **Note**: funds transactions are only supported from external origin chains.  
> Native Push Chain users should call ERC-20 `transfer` or `transferFrom` directly (instead of using funds).

```typescript
// Send 1 USDT to the recipient address
const txResponse = await pushChainClient.universal.sendTransaction({
  to: '0xRecipientAddress', // The recipient address on Push Chain
  data: data, // pass this if you want to execute a function on Push Chain as well
  funds: {
    amount: PushChain.utils.helpers.parseUnits('1', 6), // 1 USDT
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT, // MoveableToken accessor from client
  },
});
```

### Moving PC20 Tokens

`funds.token` also accepts a **PC20 reference** — a token identified by `{ chain, address }` alone, resolved against UniversalCore's on-chain registry instead of the SDK's static token table.

```typescript
const txResponse = await pushChainClient.universal.sendTransaction({
  to: '0xRecipientAddress',
  funds: {
    amount: PushChain.utils.helpers.parseUnits('1', 6),
    token: {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA, // where the token IS
      address: '0x81E05001A1f3fB574E18c1B0b2596163c68144ae',
    },
  },
});
```

The same shape exports a Push-native PC20 outward — name the Push chain in `funds.token.chain` and the destination in `to.chain`.

`chain` is where the token is, never where it is going

`funds.token.chain` is the chain the tokens are sitting on right now — the external chain for an inbound wrapper, the Push chain for an export. The destination is `to.chain`, a separate field.

Unlike [`getPC20Address`](/push-chain-website/pr-preview/pr-1233/docs/chain/build/utility-functions/#get-pc20-address), where `chain` is optional, spending **requires** it. A send whose `chain` disagrees with where the funds actually are is rejected with `PC20TokenChainMismatchError` before any approval is signed. Lookup is lenient; spending is not.

Never add `symbol` to a PC20 reference

A PC20 reference is exactly `{ chain, address }`. The SDK discriminates it from a `MoveableToken` by the **absence** of `symbol` and `mechanism`, so adding a `symbol` field silently routes the token down the static-table path instead of the registry resolver.

#### Route Coverage

| Route | Flow | EVM | Solana |
| --- | --- | --- | --- |
| Route 1 | External wrapper burn → unlock the canonical token on Push | ✅ | ✅ |
| Route 2 | Push → external export (lock + mint the wrapper) | ✅ | ✅ |
| Route 3 | CEA-held wrapper burns back, unlocks to the UEA | ✅ | ✅ |
| Route 4 | CEA → CEA | ❌ | ❌ |

Route 4 is **not yet supported** for PC20.

See [Universal Transaction Scenarios](/push-chain-website/pr-preview/pr-1233/docs/chain/build/universal-transaction-scenarios/) for a runnable example of each supported route.

#### Behavior Worth Knowing

-   **Inbound wrappers are never approved.** The gateway's PC20Factory burns via `burnFrom`, so no approval transaction is sent on the way in. Exports are the opposite: they approve and lock the canonical Push token into VaultPC20, and quote gas through `getPC20ExportGasAndFees`.
-   **First export predicts the wrapper address.** Exporting a PC20 to a chain that has never seen it deploys the wrapper as part of the flow. On Solana, delivery falls back to the sender's CEA associated token account when the recipient has none — an ATA cannot exist before its mint does.
-   **Funds plus a `data` payload transfer first, then call.** Tokens are transferred to `execute.to` and the call runs afterwards. No allowance is granted to the target, so calldata that uses `transferFrom` will revert. Use `transfer`\-style calldata, or have the target pull from a balance it already holds.

PC20 Errors

Every PC20 failure throws a subclass of `PC20Error`, exported from `@pushchain/core`. Each carries a stable `code`, plus `chain`, `address`, `expectedChain` (where relevant) and a `hint` describing the remediation.

```typescript
import { PC20Error, PC20TokenChainMismatchError } from '@pushchain/core';

try {
  await pushChainClient.universal.sendTransaction({ /* … */ });
} catch (err) {
  if (err instanceof PC20TokenChainMismatchError) {
    console.error(err.code, err.chain, err.expectedChain, err.hint);
  } else if (err instanceof PC20Error) {
    console.error(err.code, err.hint);
  }
}
```

| **Class** | **`code`** | **Thrown when** |
| --- | --- | --- |
| `PC20Error` | — | Base class. Catch this to handle every PC20 failure. |
| `InvalidPC20AddressError` | `PC20_INVALID_ADDRESS` | The address is malformed for its chain. Thrown before any network call. |
| `PC20TokenChainMismatchError` | `PC20_TOKEN_CHAIN_MISMATCH` | `funds.token.chain` is not where the funds actually are. |
| `PC20WrapperNotRegisteredError` | `PC20_WRAPPER_NOT_REGISTERED` | UniversalCore has no source mapping for this address on this chain. |
| `PC20RegistryMismatchError` | `PC20_REGISTRY_MISMATCH` | Forward and reverse registry lookups disagree. A registry inconsistency — do not retry blindly. |
| `PC20FactoryMismatchError` | `PC20_FACTORY_MISMATCH` | The live gateway's `pc20Factory` differs from UniversalCore's. The deployment is misconfigured; report it. |
| `InvalidPC20MetadataError` | `PC20_INVALID_METADATA` | The token does not implement `pc20Metadata()`, or the metadata fails validation. This is what a synthetic PRC20 such as `pETH` or `USDC.eth` raises — move those with the `MoveableToken` API instead. |
| `PC20ExpectedButPRC20Error` | `PC20_EXPECTED_BUT_PRC20` | The stricter variant of the above, raised when the token positively identifies itself as a synthetic PRC20 by exposing `CHAIN_NAMESPACE()`. Catch `InvalidPC20MetadataError` if you want to cover both. |
| `PC20AmbiguousAddressError` | `PC20_AMBIGUOUS_ADDRESS` | The address is registered on several chains with different Push sources and no `chain` was given. Carries `candidates`. |
| `UnsupportedPC20DestinationError` | `PC20_UNSUPPORTED_DESTINATION` | No PC20 factory is registered for the destination chain namespace. |
| `InsufficientPC20BalanceError` | `PC20_INSUFFICIENT_BALANCE` | The wrapper (inbound) or Push source (export) balance is short. Carries `required` and `available`. |
| `PC20UnknownChainNamespaceError` | `PC20_UNKNOWN_CHAIN_NAMESPACE` | A chain namespace could not be mapped in either direction. |
| `PC20WrapperPredictionUnavailableError` | `PC20_WRAPPER_PREDICTION_UNAVAILABLE` | A first export's destination wrapper address could not be predicted. Thrown **before** approval, so nothing is locked. |
| `PC20ExportRevertedError` | `PC20_EXPORT_REVERTED` | The export reverted after the source token was locked. Carries `outboundTxId`, `lockedAmount` and `revertRecipient`; funds return to the revert recipient on Push Chain. |
| `PC20UnsafeEmptyPayloadError` | `PC20_UNSAFE_EMPTY_PAYLOAD` | A wrapper burn was about to be submitted with no Push-side forwarding payload. The SDK fails closed rather than risk locking the canonical token. |

## Send Batch Transactions (Multicall)

You can batch multiple calls into a single transaction. This pattern is commonly referred to as **Multicall** in EVM ecosystems.

To do so, instead of passing a single `data` field, supply an array of calls (each with `to`, `value`, and `data`) to sendTransaction.

> **Note:** Batch transactions now works from any origin including external chains and native Push Chain wallets. see [Batch Atomicity for Native Push Chain Wallets](#batch-atomicity-for-native-push-chain-wallets) to learn more.

```typescript
// Execute two increment() calls atomically
const incrementData = PushChain.utils.helpers.encodeTxData({
  abi: CounterABI,
  functionName: 'increment',
});

await client.universal.sendTransaction({
  // Must be '0x0000000000000000000000000000000000000000' for multicall
  to: '0x0000000000000000000000000000000000000000',
  data: [
    { to: '0xCounterContract1', value: 0n, data: incrementData },
    { to: '0xCounterContract2', value: 0n, data: incrementData },
  ],
});
```

Multicall requirements

For multicall, the outer `to` should always be zero address (`0x0000000000000000000000000000000000000000`). The SDK will `console.warn` if you pass any other address.  
  

The inner entries are the opposite: every entry in the `data` array must have a **non-zero** `to`. A zero-address entry is rejected with a `PushChainExecutionError`, because the EIP-7702 executor reinterprets a zero target as the account itself.

### Batch Atomicity for Native Push Chain Wallets

When the origin is an external chain, the batch always executes atomically through the UEA. When the origin is a **native Push Chain EOA**, the SDK executes the whole batch atomically in a single [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) type-4 transaction: the EOA signs an authorization delegating to a batch executor contract (deployed on Push Chain Donut Testnet), so all calls succeed or the whole transaction reverts.

The atomic path requires a signer that can sign EIP-7702 authorizations. The SDK wires this automatically for all supported signers. Browser wallets (JSON-RPC accounts like MetaMask) cannot sign raw 7702 authorizations. For those, the SDK logs a **console.warn** and safely falls back to sequential per-call execution, which is non-atomic, ie: series of transactions are sent one by one.

Check the `atomic` field on the returned `TxResponse` to know which path ran: `true` for atomic execution, `false` only when a native-origin batch fell back to the sequential loop.

## Live Playground

-   Ethers (v6)
-   Viem
-   Solana (Web3 JS)
-   UI Kit

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import { useState } from 'react';
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushWalletContext,
  usePushChainClient,
  usePushChain,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

  function Component() {
    const [txnHash, setTxnHash] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { connectionStatus } = usePushWalletContext();
    const { pushChainClient } = usePushChainClient();
    // ui-kit re-exports the core PushChain class through this hook, so
    // you do NOT need to import @pushchain/core separately.
    const { PushChain } = usePushChain();

    const handleSendTransaction = async () => {
      if (!pushChainClient || !PushChain) return;
      setIsLoading(true);
      try {
        const res = await pushChainClient.universal.sendTransaction({
          to: '0x0000000000000000000000000000000000042101',
          value: PushChain.utils.helpers.parseUnits('0.001', 18), // 0.001 PC in uPC
        });
        setTxnHash(res.hash);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div>
        <PushUniversalAccountButton />

        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (
          <button
            disabled={isLoading}
            style={{
              background: 'transparent',
              border: '1px solid',
              borderRadius: '10px',
              padding: '12px 18px',
              cursor: 'pointer',
              margin: '8px 0',
            }}
            onClick={handleSendTransaction}
          >
            {isLoading ? 'Sending…' : 'Send Transaction'}
          </button>
        )}

        {txnHash && (
          <>
            <p>Txn Hash: {txnHash}</p>
            <a
              href={pushChainClient.explorer.getTransactionUrl(txnHash)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View in Explorer
            </a>
          </>
        )}
      </div>
    );
  }

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <Component />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

## Next Steps

-   Explore end-to-end examples for each route with [Universal Transaction Scenarios](/push-chain-website/pr-preview/pr-1233/docs/chain/build/universal-transaction-scenarios/)
-   Sequence multiple chain transactions in one go with [Send Multichain Transactions](/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-multichain-transactions/)
-   Trigger cross-chain execution directly from a smart contract with [Contract Initiated Multichain Execution](/push-chain-website/pr-preview/pr-1233/docs/chain/build/contract-initiated-multichain-execution/)
-   Integrate transaction flows into your frontend app using the [UI Kit](/push-chain-website/pr-preview/pr-1233/docs/chain/ui-kit/)
