---
title: "Send Multichain Transactions"
url: "https://pushchain.github.io/docs/chain/build/send-multichain-transactions/"
section: "build"
lastUpdated: "2026-09-05T01:00:08Z"
description: "Send Multichain Transactions | Build | Push Chain Docs"
---

# Send Multichain Transactions

## Overview

Multichain transactions let you compose multiple universal transactions into a single ordered flow across different routes.

This allows you to submit a **single user-signed transaction** to Push Chain that coordinates execution across Push Chain, external chains, or both.

**Prerequisite:** Familiarize yourself with [Send Universal Transaction](/push-chain-website/pr-preview/pr-1240/docs/chain/build/send-universal-transaction/) before reading this page.

### Mental Model

1.  **Prepare** each transaction step with `prepareTransaction`
2.  **Execute** all steps together with `executeTransactions`

## Prepare Transaction

**_`pushChainClient.universal.prepareTransaction({tx}): Promise<PreparedUniversalTx>`_**

Prepares a transaction without executing it. Returns a **PreparedUniversalTx** object that you pass to **executeTransactions**.

```typescript
const preparedTx = await pushChainClient.universal.prepareTransaction({
  to: '0xContractAddress',
  value: BigInt(0),
  data: PushChain.utils.helpers.encodeTxData({
    abi: MyABI,
    functionName: 'myFunction',
    args: [arg1, arg2],
  }),
});
```

info

**PreparedUniversalTx** is an intermediate object that you pass to `executeTransactions`. Most apps do not need to manually inspect or modify its fields.

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`tx.to`_ | `string` | `{ address: string; chain: CHAIN }` | Target address on Push Chain (plain string), or `{ address, chain }` for an external chain via CEA. PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.BNB_TESTNET``PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA``PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |
| `tx.from` | `{ chain: CHAIN }` | Optional. When set, originates from the CEA on that chain. |
| `tx.value` | `BigInt` | Native value to send in the smallest unit of the execution context. |
| `tx.data` | `string` | `Array<{ to: string; value: bigint; data: string }>` | Encoded calldata for a single call `string` or batched multicall `Array<{ to, value, data }>`.  
  
Use [`encodeTxData`](/push-chain-website/pr-preview/pr-1240/docs/chain/build/utility-functions/#encode-transaction-data) to produce the correct bytes for EVM (ABI) or Solana (Anchor IDL) targets. |
| `tx.funds` | `{ amount: bigint; token?: MoveableToken }` | Move tokens from origin chain atomically with the call. Use `PushChain.CONSTANTS.MOVEABLE.TOKEN.<CHAIN>.<TOKEN>`. |

> `prepareTransaction` accepts the same transaction arguments as [Send Universal Transaction](/push-chain-website/pr-preview/pr-1240/docs/chain/build/send-universal-transaction/).

Returns \`PreparedUniversalTx\` <object>

| **Property** | **Type** | **Description** |
| --- | --- | --- |
| `route` | `'UOA_TO_PUSH'` | `'UOA_TO_CEA'` | `'CEA_TO_PUSH'` | `'CEA_TO_CEA'` | Detected routing mode for this transaction. |
| `estimatedGas` | `bigint` | Estimated gas units for execution. |
| `nonce` | `bigint` | Nonce to use for submission. |
| `deadline` | `bigint` | Signature expiry deadline. |
| `payload` | `string` | Encoded payload ready for submission. |
| `gatewayRequest` | `object` | Gateway request object (inbound or outbound). |

Live Playground: Inspect PreparedUniversalTx

VIRTUAL NODE IDE

Copy playground link

Copy code

## Execute Transactions

**_`pushChainClient.universal.executeTransactions(txs: PreparedUniversalTx[], options?: { progressHook? }): Promise<CascadedTxResponse>`_**

Executes an ordered array of prepared transactions as a multichain flow. This is submitted and handled as a **single transaction**. You sign once, and the SDK coordinates execution across Push Chain and supported external chains automatically.

Each prepared transaction becomes one ordered step in the multichain flow.

```typescript
const step1 = await pushChainClient.universal.prepareTransaction({...}); // Push Chain
const step2 = await pushChainClient.universal.prepareTransaction({...}); // BNB

// Live progress for pre-flight, broadcast, and cascade tracking.
const result = await pushChainClient.universal.executeTransactions([step1, step2], {
  progressHook: (event) => {
    console.log('[' + event.id + '] ' + event.level + ' - ' + event.title);
  },
});
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| `txs` | `PreparedUniversalTx[]` | Ordered array of prepared transactions from `prepareTransaction`. |
| `options.progressHook` | `(event: ProgressEvent) => void` | Optional per-call progress callback. Progress hook follows the same structure as [Send Universal Transaction - Progress Hook](/push-chain-website/pr-preview/pr-1240/docs/chain/build/send-universal-transaction/#progress-hook-type-and-response). |

> In the API response, each executed step is reported as a hop.

Returns \`CascadedTxResponse\` <object>

| Property | Type | Description |
| --- | --- | --- |
| `initialTxHash` | `string` | Hash of the user-signed Push Chain transaction that kicked off the cascade. |
| `initialTxResponse` | `UniversalTxResponse` | Full response object for the initial Push Chain transaction. |
| `hops` | `CascadeHopInfo[]` | Ordered list of all hops with routing and status information. |
| `hopCount` | `number` | Total number of hops in the cascade. |
| `finalTxHash` | `string` _(optional)_ | Final tx hash resolved by `waitForAll()` / `wait()`, when available. Populated after cascade tracking completes. |
| `wait(opts?)` | `Promise<CascadeCompletionResult>` | Alias for `waitForAll`. Waits for all hops to complete. |
| `waitForAll(opts?)` | `Promise<CascadeCompletionResult>` | Waits for all hops to complete across all chains. |

**CascadeHopInfo** fields:

| Property | Type | Description |
| --- | --- | --- |
| `hopIndex` | `number` | Position in the cascade (0-indexed). |
| `route` | `TransactionRouteType` | Routing mode for this hop: `UOA_TO_PUSH`, `UOA_TO_CEA`, `CEA_TO_PUSH`, or `CEA_TO_CEA`. |
| `executionChain` | `CHAIN` | Chain where this hop executes. |
| `expectedSubTxId` | `string` _(optional)_ | Expected `universalSubTxId` for this hop, computed deterministically from the parent. Available before the hop's tx hash resolves. |
| `status` | `'pending'` | `'submitted'` | `'confirmed'` | `'failed'` | Current hop status. |
| `txHash` | `string` _(optional)_ | Resolved transaction hash once available. |
| `outboundDetails` | `OutboundTxDetails` _(optional, outbound hops only)_ | External chain tx details. Fields: `externalTxHash`, `destinationChain` (CHAIN), `explorerUrl`, `recipient`, `amount`, `assetAddr` (`address(0)` for native). |

**CascadeCompletionResult** fields:

| Property | Type | Description |
| --- | --- | --- |
| `success` | `boolean` | Whether all hops completed successfully. |
| `hops` | `CascadeHopInfo[]` | Final state of all hops. |
| `finalTxHash` | `string` _(optional)_ | Final tx hash for the last confirmed hop, when available. |
| `finalTxResponse` | `CascadedTxResponse` _(optional)_ | Original cascaded response object for consumers that need the full context. |
| `failedAt` | `number` _(optional)_ | Index of first failed hop, if any. |

**waitForAll** options (`CascadeTrackOptions`):

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `pollingIntervalMs` | `number` | `3000` | Polling interval in milliseconds. |
| `timeout` | `number` | `300000` | Total timeout in milliseconds (5 min). |
| `progressHook` | `(event: CascadeProgressEvent) => void` | \- | Per-hop progress callback. Reports `hopIndex`, `route`, `chain`, `status`, `txHash`, `elapsed`. |
| `eventHook` | `(event: ProgressEvent) => void` | \- | Unified `ProgressEvent` stream for the cascade marker set (`001`, `002-xx`, `003-xx`, `203-xx`, `204-xx`, `209-xx`, `299-01`, `999-xx`, plus per-route awaiting/polling/success/failed/timeout hooks). Cascade markers also fan out to the init-time `progressHook` set on `PushChain.initialize`, so UI Kit consumers that wired progress at init receive the cascade stream automatically. When both `eventHook` and the init-time `progressHook` are wired, events are delivered to both with dedup. To opt out of cascade markers on the init-time channel, filter inside that handler. |

Live Playground: Execute Multiple Transactions in One Flow

VIRTUAL NODE IDE

Copy playground link

Copy code

## More Examples

### Batch Contract Calls: Push Chain + BNB + Solana in One Signature

Increment counters on Push Chain and BNB Testnet, then trigger a call on Solana Devnet. Three independent contract interactions across three chains, all composed into a single user signature.

Live Playground: Cross-Chain Contract Calls

VIRTUAL NODE IDE

Copy playground link

Copy code

### Cross-Chain AMM Swap: ETH → pSOL via Push Chain AMM

Swap ETH on Sepolia for pSOL on Solana Devnet in a single user signature. The user funds **only** their Sepolia UOA, the SDK fee-locks just enough Sepolia ETH to seat the UEA's PC budget on first run, and the cascade reuses that PC for all downstream hops.

-   Hop 0 bridges 0.001 ETH from the Sepolia UOA into 0.001 pETH on the UEA. SDK fee-locking handles the UEA's PC top-up automatically (no manual UEA funding step).
-   Hops 1 and 2 approve the SwapRouter for pETH and WPC.
-   Hops 3 and 4 swap pETH → WPC → pSOL via two `exactInputSingle` calls on the Push Chain AMM (no direct pETH/pSOL pool, so WPC is the intermediate).
-   Hop 5 bridges the pSOL out to the user's Solana Devnet CEA.

Live Playground: ETH → pETH → WPC → pSOL → Solana

VIRTUAL NODE IDE

Copy playground link

Copy code

## Key Considerations

-   **Single signature**: `executeTransactions` submits one transaction to Push Chain. You sign once, and the SDK coordinates the full multichain execution automatically.
-   **No atomicity guarantee**: If a downstream hop fails, earlier hops are already on-chain. Design contracts to handle partial execution.
-   **Gas per hop**: Each hop has its own estimated gas. Ensure gas is properly funded.
-   **Tracking**: Progress channel work side-by-side and can be wired too keep track of the execution flow:
    -   `executeTransactions(txs, { progressHook })` streams every `ProgressEvent` (rich marker ids like `SEND-TX-101`, severity, structured payload) across pre-flight, broadcast, and cascade phases. Best for UI step indicators and granular telemetry.

## Next Steps

-   [Track Universal Transaction](/push-chain-website/pr-preview/pr-1240/docs/chain/build/track-universal-transaction/) to monitor individual transaction confirmation status
-   [Contract Initiated Multichain Execution](/push-chain-website/pr-preview/pr-1240/docs/chain/build/contract-initiated-multichain-execution/) to trigger multichain flows from on-chain contracts
-   [Sign Universal Message](/push-chain-website/pr-preview/pr-1240/docs/chain/build/sign-universal-message/) to sign typed messages across chains with a universal signer
-   [Utility Functions](/push-chain-website/pr-preview/pr-1240/docs/chain/build/utility-functions/) for `encodeTxData`, `parseUnits`, and other helpers used in this page
