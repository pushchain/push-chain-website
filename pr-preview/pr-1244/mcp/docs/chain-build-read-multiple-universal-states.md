---
title: "Read Multiple Universal States"
url: "https://pushchain.github.io/docs/chain/build/read-multiple-universal-states/"
section: "build"
lastUpdated: "2026-09-23T15:00:20Z"
description: "Read Multiple Universal States | Build | Push Chain Docs"
---

# Read Multiple Universal States

## Overview

Multiple reads let you compose several universal reads into a single ordered flow across chains and Web2 endpoints.

This allows you to submit a **single user-signed transaction** to Push Chain that requests state from Ethereum, Solana, HTTPS endpoints, or all three, and returns the results in the order you prepared them.

**Prerequisite:** Familiarize yourself with [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/) before reading this page.

### Mental Model

1.  **Prepare** each read with `prepareRead`
2.  **Execute** all reads together with `executeReads`

## Prepare Read

**_`pushChainClient.universal.prepareRead(subject, {options}): Promise<PreparedRead>`_**

Prepares a read without executing it. Returns a **PreparedRead** object that you pass to **executeReads**. Nothing is broadcast and nothing is paid until you execute.

```typescript
const prepared = await pushChainClient.universal.prepareRead('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});

console.log(prepared.fees.total); // what this read will cost, in PC
```

info

**PreparedRead** is an intermediate object that you pass to `executeReads`. Most apps do not need to manually inspect or modify its fields.

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`subject`_ | `string` | What to read: an account address for a balance, a contract address for a contract call or storage slot, or a URL for a Web2 read. Solana subjects are base58. |
| _`options.chain`_ | `CHAIN` | Where to read from. Any supported EVM or Solana chain, or `CHAIN.WEB2` for an HTTPS endpoint. Decides which query option applies; see the branches below. Pass at most one query option; with none, `read` returns the subject's native balance. PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.BNB_TESTNET``PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA``PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |
| :: Pass one of the following, based on `options.chain` |  |  |
| ↳ **If `options.chain` is a Web3 chain** \[collapsed\] |  |  |
|   `options.token` | `string` | Token balance of `subject`. EVM: the ERC-20 contract address, read via `balanceOf`. Solana: the SPL mint address; the SDK derives the associated token account. |
|   `options.abi` | `options.idl` | `Abi` | `Idl` | EVM: the contract ABI, used to encode the call and decode `value`. Solana: the program's Anchor IDL; the subject account is decoded with the layout whose discriminator matches its data. Reads never execute an instruction. |
|   `options.functionName` | `string` | EVM: the function to call (required with `abi`). Solana: the account layout to decode; optional, since it is inferred from the discriminator. Both `snake_case` and `camelCase` are accepted and matched against the IDL. |
|   `options.args` | `any[]` | EVM: positional function arguments. Solana: only when `subject` is the program id, the PDA seeds of the `functionName` account in IDL order; pubkeys accept base58 or 0x-hex 32-byte strings, integers take `BigInt`. |
|   `options.storageSlot` | `bigint` | `Hex` | EVM only. One storage word from the subject contract. Not needed for Solana, as Solana has no storage slots. |
| ↳ **If `options.chain` is a Web2 / HTTPS endpoint** \[collapsed\] |  |  |
|   `options.web2` | `object` | Required. Describes the HTTPS request and which JSON fields to extract. Fields below. |
|     `options.web2.extract` | `Array<{ path, valueType, decimals? }>` | Required. 1 to 16 JSONPath entries. Results come back as an array in this order. |
|     `options.web2.extract[].path` | `string` | JSONPath into the response body, for example `$.data.price`. |
|     `options.web2.extract[].valueType` | `'uint256'` | `'int256'` | `'bool'` | `'string'` | `'bytes'` | How the extracted value is encoded on-chain. |
|     `options.web2.extract[].decimals` | `number` | Optional, numeric types only. The value is multiplied by 10 to this power and truncated before encoding, so `1.2345` with `decimals: 2` becomes `123`. |
|     `options.web2.method` | `'GET'` | `'POST'` | Optional. Defaults to `GET`. |
|     `options.web2.headers` | `Record<string, string>` | Optional. Request headers. Written to a public event log forever, so never include secrets. |
|     `options.web2.body` | `string` | `Uint8Array` | Optional, `POST` only. A body on `GET` is rejected. |
|     `options.web2.timeoutMs` | `number` | Optional. Validator fetch timeout, default `5000`, clamped by validators. |
| :: |  |  |
| `options.callback` | `{ target, gasLimit, abi, functionName, args? }` | Optional. Routes the request through your own receiver contract instead of the registry; fields in [Callback Arguments](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/#callback-arguments). |
| `options.waitForCompletion` | `boolean` | Default `true`. When `false`, resolves as soon as the request is confirmed on Push Chain, before validators vote.  
  
Call `wait()` on the response to finish. |
| `options.progressHook` | `(progress: ProgressEvent) => void` | Callback for progress updates through the read lifecycle. |

> `prepareRead` accepts the same subject and query options as [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/#read-parameters). It does not take **waitForCompletion**, **progressHook** or **advanced**; those belong to [Execute Reads](#execute-reads).

Advanced Arguments

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| `options.blockNumber` | `bigint` | Oracle height minus `minConfirmations` | EVM only. Pins the read to a specific destination block. The oracle-observed height can lag the real head. |
| `options.minConfirmations` | `number` | `1` | EVM only. Confirmations the destination block must have before validators read it. |
| `options.expiryBlocks` | `bigint` | `300n` | Request lifetime in Push Chain blocks. An unfulfilled request expires and refunds the unused callback budget. |
| `options.maxFee` | `bigint` | SDK estimated | Cap on the upfront payment (protocol fee plus callback budget). |
| `options.refundTo` | `string` | Your Push account | Where unused callback budget is sent. Must accept native Push transfers; a contract without a payable `receive()` forfeits the refund. |
| `options.advanced.pollingIntervalMs` | `number` | `2000` | Milliseconds between status polls. Minimum `500`. |
| `options.advanced.timeout` | `number` | Derived from expiry, at most `180000` | Maximum milliseconds this caller waits. Timing out does not cancel the request; resume it with [`trackRead`](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/). An explicit value overrides the cap. |
| `options.advanced.enforceGasCheck` | `boolean` | `false` | `false` warns and proceeds when the pre-flight balance check finds a shortfall. `true` throws before broadcasting. |

Returns \`PreparedRead\` <object>

| Property | Type | Description |
| --- | --- | --- |
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

Live Playground: Inspect PreparedRead

VIRTUAL NODE IDE

Copy playground link

Copy code

## Execute Reads

**_`pushChainClient.universal.executeReads(preparedReads: PreparedRead[], options?: { waitForCompletion?, progressHook?, advanced? }): Promise<BatchReadResponse>`_**

Executes an ordered array of prepared reads as one flow. Where the wallet supports atomic batching this is submitted as a **single transaction**; you sign once, and the SDK submits every read and collects every result.

Each prepared read becomes one read in the batch, and results come back in the same order.

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

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`preparedReads`_ | `PreparedRead[]` | Reads returned by `prepareRead`. Results come back in this order. Without atomic batching in the wallet, they are submitted as sequential transactions. |
| `options.waitForCompletion` | `boolean` | Default `true`. When `false`, returns as soon as the requests are submitted, before validators vote.  
  
Call `wait()` on the response to finish. |
| `options.progressHook` | `(progress: ProgressEvent) => void` | Callback for batch and per-read progress events; see [ProgressHook Type and Response](#execute-reads). |

> In the API response, each executed read is reported in `reads`, in the order you prepared them.

Advanced Arguments

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| `options.blockNumber` | `bigint` | Oracle height minus `minConfirmations` | EVM only. Pins the read to a specific destination block. The oracle-observed height can lag the real head. |
| `options.minConfirmations` | `number` | `1` | EVM only. Confirmations the destination block must have before validators read it. |
| `options.expiryBlocks` | `bigint` | `300n` | Request lifetime in Push Chain blocks. An unfulfilled request expires and refunds the unused callback budget. |
| `options.maxFee` | `bigint` | SDK estimated | Cap on the upfront payment (protocol fee plus callback budget). |
| `options.refundTo` | `string` | Your Push account | Where unused callback budget is sent. Must accept native Push transfers; a contract without a payable `receive()` forfeits the refund. |
| `options.advanced.pollingIntervalMs` | `number` | `2000` | Milliseconds between status polls. Minimum `500`. |
| `options.advanced.timeout` | `number` | Derived from expiry, at most `180000` | Maximum milliseconds this caller waits. Timing out does not cancel the request; resume it with [`trackRead`](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/). An explicit value overrides the cap. |
| `options.advanced.enforceGasCheck` | `boolean` | `false` | `false` warns and proceeds when the pre-flight balance check finds a shortfall. `true` throws before broadcasting. |

ProgressHook Type and Response

Batch events wrap the single-read events documented in [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/#read-progress-hook); each read in the batch also emits its own `READ-TX-1xx` events.

| ID | Title | Message | Level | Response |
| --- | --- | --- | --- | --- |
| `READ-TX-001` | Batch Read Initiated | Preparing `<count>` reads across `<chains>` | INFO | `{ count, chains }` |
| `READ-TX-002-01` | Starting Read #`<n>`/`<total>` | Read `<n>` of `<total>` targets `<chain>` | INFO | `{ n, total, chain }` |
| `READ-TX-002-99-99` | Read #`<n>`/`<total>` Complete | Read `<n>` of `<total>` settled as `<requestId>` | INFO | `{ n, total, requestId }` |
| `READ-TX-999-01` | All Reads Fulfilled | All `<count>` reads fulfilled | SUCCESS | `{ count }` |
| `READ-TX-999-02` | Batch Reads Failed | Batch failed at read `<n>` of `<total>`: `<error>` | ERROR | `{ failedAt, total, error }` |
| `READ-TX-999-03` | Batch Reads Timeout | Batch timed out at read `<n>` of `<total>` | ERROR | `{ failedAt, total, error: 'read timeout' }` |

Returns \`BatchReadResponse\` <object>

| Property | Type | Description |
| --- | --- | --- |
| `txHash` | `string` | Primary Push Chain transaction hash. |
| `transactionHashes` | `string[]` | All request transactions in submission order when execution was not atomic. |
| `reads` | `UniversalReadResponse[]` | One response per prepared read, in input order. |
| `count` | `number` | Number of reads submitted. |
| `atomic` | `boolean` | Whether submission was all-or-nothing. It says nothing about validator fulfillment, which is per read. |
| `wait` | `function` | Waits until every read is terminal and returns the responses in input order. Only a timeout throws. |

Live Playground: Execute Multiple Reads in One Flow

VIRTUAL NODE IDE

Copy playground link

Copy code

## More Examples

### Read Ethereum, Solana and Web2 in One Signature

Read a Chainlink price on Ethereum Sepolia, a USDC balance on Solana Devnet and two fields from a public API, all requested with a single user signature and returned in order.

Live Playground: Cross-Chain Reads in One Batch

VIRTUAL NODE IDE

Copy playground link

Copy code

## Key Considerations

-   **Single signature**: one transaction submits every read when the wallet supports atomic batching. Otherwise the reads go out as sequential transactions, listed in **transactionHashes**.
-   **Fulfillment is per read**: **atomic** only describes the submission. Validators fulfill each read on its own, so check **value** on every response.
-   **Partial batches**: with sequential submission, an earlier read can exist even if a later transaction fails. Check the hashes on the error before resubmitting, or you pay twice. A prepared read that fails revalidation must be prepared again.
-   **Fees**: each read carries its own fee and the batch costs their sum. Nothing is charged at prepare time.
-   **Tracking**: the progress hook streams batch events plus each read's own events. A timed-out wait cancels nothing; resume with [Track Universal Read](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/).

## Next Steps

-   Track a batch by transaction hash with [Track Universal Read](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/)
-   Act on results on-chain with [Contract-Initiated Universal Read and Callback](/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-initiated-universal-read-and-callback/)
-   Go back to single reads in [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/)
-   Find every supported chain, including `CHAIN.WEB2`, in [Constants Reference](/push-chain-website/pr-preview/pr-1244/docs/chain/build/constants/#chain-constants)
