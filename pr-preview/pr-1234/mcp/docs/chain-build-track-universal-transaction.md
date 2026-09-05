---
title: "Track Universal Transaction"
url: "https://pushchain.github.io/docs/chain/build/track-universal-transaction/"
section: "build"
lastUpdated: "2026-09-05T06:39:51Z"
description: "Track Universal Transaction | Build | Push Chain Docs"
---

# Track Universal Transaction

## Overview

Track the status of a universal transaction using the hash of the chain where it was originally submitted, whether that transaction started on Push Chain or an external chain.

This is useful for re-checking transaction progress, restoring status after a page refresh, polling from a backend, or tracking a transaction created in a different session.

> **Note**: `trackTransaction()` can be used independently of `sendTransaction()`. You can pass any previously stored transaction hash and origin chain to resume tracking.

## Track Universal Transaction

**_`pushChainClient.universal.trackTransaction(txHash, {options}): Promise<UniversalTxResponse>`_**

```typescript
const response = await pushChainClient.universal.trackTransaction(
  '0xbd765a6b60da077eaa89a382cd59c0469a4eaabcaca2707d3e6dcdeafc497a39',
  {
    progressHook: (progress) => {
      console.log(`${progress.id}: ${progress.message}`);
    },
  }
);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| _`txHash`_ | `string` | \- | Transaction hash or signature to track on the origin chain. Format depends on the chain where the transaction was originally submitted. |
| `options.chain` | `CHAIN` | `CHAIN.PUSH_TESTNET_DONUT` | The chain on which the transaction was submitted. |
| `options.progressHook` | `(event: ProgressEvent) => void` | `undefined` | Callback invoked at each tracking step showing progress.  
  
Progress hook follows the same structure as [Send Universal Transaction - Progress Hook](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/#progress-hook-type-and-response). |
| `options.waitForCompletion` | `boolean` | `true` | When `true`, waits for on-chain confirmation before resolving. When `false`, returns immediately after the first status check. |

Advanced Arguments

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| `options.advanced.pollingIntervalMs` | `number` | `2000` | Milliseconds between polling attempts. Minimum: `500`. |
| `options.advanced.timeout` | `number` | `60000` | Maximum milliseconds to wait before throwing a timeout error. |
| `options.advanced.rpcUrls` | `Partial<Record<CHAIN, string[]>>` | `{}` | Custom RPC URLs to use when querying status. |

Returns \`UniversalTxResponse\` <object>

The returned `UniversalTxResponse` contains the latest resolved transaction state, including Push Chain execution details and external-chain details when applicable.  
  

For the full response shape, see [Send Universal Transaction - TxResponse object](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/#returns-tx-response).

## Live Playground

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Learn about signing messages with [Sign Universal Message](/push-chain-website/pr-preview/pr-1234/docs/chain/build/sign-universal-message/)
-   Explore helper functions in [Utility Functions](/push-chain-website/pr-preview/pr-1234/docs/chain/build/utility-functions/)
-   Build rich UIs with transaction tracking using the [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/)
-   Read blockchain state with [Reading Blockchain State](/push-chain-website/pr-preview/pr-1234/docs/chain/build/reading-blockchain-state/)
