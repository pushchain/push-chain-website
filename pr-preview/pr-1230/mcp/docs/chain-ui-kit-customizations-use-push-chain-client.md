---
title: "usePushChainClient"
url: "https://pushchain.github.io/docs/chain/ui-kit/customizations/use-push-chain-client/"
section: "ui-kit"
lastUpdated: "2026-07-28T15:25:29+04:00"
description: "usePushChainClient | Customizations | UI Kit | Push Chain Docs"
---

# usePushChainClient

The `usePushChainClient` hook initializes and manages a Push Chain client instance for blockchain interactions. It integrates with your wallet connection and handles network configuration automatically.

Like `usePushWalletContext`, This hook must also be used within a component that's wrapped by a `PushUniversalWalletProvider`.

## Usage

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushChainClient,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  // Create a component that uses the hook inside the provider context
  const ClientComponent = () => {
    const { pushChainClient, isInitialized, error } = usePushChainClient(); // optional: pass uid parameter for targeting a specific wallet instance

    return (
      <div>
        <h3>
          Chain Client Status:{' '}
          {isInitialized ? 'Initialized 🎉' : 'Not Initialized'}
        </h3>
        {pushChainClient && (
          <>
            <p>Executor: {pushChainClient.universal.account}</p>
            <p>
              Origin: {pushChainClient.universal.origin.address} | Chain:{' '}
              {pushChainClient.universal.origin.chain}
            </p>
          </>
        )}
        {error && <p>Error: {error.message}</p>}
      </div>
    );
  };

  return (
    <PushUniversalWalletProvider
      config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}
    >
      <PushUniversalAccountButton />
      <ClientComponent />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

### Parameters

| Arguments | Type | Description |
| --- | --- | --- |
| `uid` | `string` | Optional ID for targeting a specific wallet instance, must match `config.uid` of specific `PushUniversalWalletProvider` instance.  
   
See [multiple wallet example](/push-chain-website/pr-preview/pr-1230/docs/chain/ui-kit/examples/multiple-wallet-example/) for usage. |

### Returns

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `pushChainClient` | `PushChainClient` | `null` | \- | Your initialized client (once ready). |
| `isInitialized` | `boolean` | `false` | `false` while the client is booting up. |
| `error` | `Error` | `null` | \- | Failure information, if any. |

## Next Steps

-   Learn how to use [usePushChain](/push-chain-website/pr-preview/pr-1230/docs/chain/ui-kit/customizations/use-push-chain/) in your app
-   Explore utilizing usePushChainClient by sending transactions in [Examples](/push-chain-website/pr-preview/pr-1230/docs/chain/ui-kit/examples/)
-   Check out end to end [Tutorials](/push-chain-website/pr-preview/pr-1230/docs/chain/tutorials/) to see step by step implementation of Apps
