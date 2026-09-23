---
title: "Read Multiple Universal States"
url: "https://pushchain.github.io/docs/chain/build/read-multiple-universal-states/"
section: "build"
lastUpdated: "2026-09-23T13:23:26Z"
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

> `prepareRead` accepts the same subject and query options as [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/#read-parameters). It does not take **waitForCompletion**, **progressHook** or **advanced**; those belong to [Execute Reads](#execute-reads).

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

Executes an ordered array of prepared reads as one flow. With an external-chain wallet (UEA), or a Push Chain wallet that can sign EIP-7702 authorizations, this is submitted as a **single atomic transaction**: you sign once, and the SDK submits every read and collects every result. A Push Chain wallet without EIP-7702 support sends one transaction per read instead; `atomic` is then `false` and `transactionHashes` lists every transaction.

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
| _`preparedReads`_ | `PreparedRead[]` | Reads returned by `prepareRead`. Results come back in this order. Each read is revalidated against current chain state before anything is sent. Without atomic batching in the wallet, they are submitted as sequential transactions. |
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
| `options.maxFee` | `bigint` | The estimated payment | Upper bound the contract enforces on the payment (protocol fee plus callback budget). It does not lower the payment: a value below the estimate throws `InvalidReadSpecError` with violation `EXCESSIVE_FEE`. |
| `options.refundTo` | `string` | Your Push account | Where unused callback budget is sent. Must accept native Push transfers; a contract without a payable `receive()` forfeits the refund. |
| `options.advanced.pollingIntervalMs` | `number` | `2000` | Milliseconds between status polls. Minimum `500`. |
| `options.advanced.timeout` | `number` | Derived from expiry, at most `180000` | Maximum milliseconds this caller waits. Timing out does not cancel the request; resume it with [`trackRead`](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/). An explicit value overrides the cap. |
| `options.advanced.enforceGasCheck` | `boolean` | `false` | `false` warns and proceeds when the pre-flight balance check finds a shortfall. `true` throws before broadcasting. |

ProgressHook Type and Response

Batch events wrap the single-read events documented in [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/#read-progress-hook); each read in the batch also emits its own `READ-TX-1xx` events. The `READ-TX-001`, `002` and `999` events below fire only when more than one read is executed.

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

-   **Single signature**: one atomic transaction submits every read with an external-chain wallet or an EIP-7702-capable Push Chain wallet. Otherwise the reads go out as sequential transactions (the SDK logs a warning), listed in **transactionHashes**.
-   **Fulfillment is per read**: **atomic** only describes the submission. Validators fulfill each read on its own, so check `outcome === PushChain.CONSTANTS.READ.OUTCOME.SUCCESS` on every response before using its **value**.
-   **Partial batches**: with sequential submission, an earlier read can exist even if a later transaction fails. The SDK then throws a `ReadStateError` with code `READ_REQUEST_TX_FAILED`, carrying `transactionHashes` (mined) and `pendingTransactionHash` (outcome unknown). Resume the mined ones with `trackRead({ txHash })` and check the pending receipt before resubmitting, or you pay twice.
-   **Prepare right before executing**: a prepared read fixes its expiry at prepare time (300 Push blocks by default, about 6.7 minutes). `executeReads` revalidates every read first and throws `InvalidReadSpecError` if one is no longer valid; a read prepared more than 60 seconds earlier is announced with `READ-TX-102-04`. Prepare it again rather than retrying.
-   **Fees**: each read carries its own fee and the batch costs their sum. Nothing is charged at prepare time.
-   **Tracking**: the progress hook streams batch events plus each read's own events. A timed-out wait cancels nothing; resume with [Track Universal Read](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/).

## Next Steps

-   Track a batch by transaction hash with [Track Universal Read](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/)
-   Act on results on-chain with [Contract-Initiated Universal Read and Callback](/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-initiated-universal-read-and-callback/)
-   Go back to single reads in [Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/)
-   Find every supported chain, including `CHAIN.WEB2`, in [Constants Reference](/push-chain-website/pr-preview/pr-1244/docs/chain/build/constants/#chain-constants)
