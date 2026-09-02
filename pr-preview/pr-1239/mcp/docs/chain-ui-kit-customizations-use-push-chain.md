---
title: "usePushChain"
url: "https://pushchain.github.io/docs/chain/ui-kit/customizations/use-push-chain/"
section: "ui-kit"
lastUpdated: "2026-09-02T13:53:28+05:30"
description: "usePushChain | Customizations | UI Kit | Push Chain Docs"
---

# usePushChain

The `usePushChain` hook provides direct access to the `PushChain` core SDK from the `@pushchain/core` package. This hook makes it easier to use Push Chain utilities, constants and initialization methods.

It is particularly useful when you want to interact with core functionalities like account utilities, helper fucntions, signer construction, and the PushChain.initialize() method to create your own client.

## Usage

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushChainClient,
  usePushChain,
} from '@pushchain/ui-kit';

function App() {
  // Create a component that uses the hook inside the provider context
  const Component = () => {
    const { PushChain } = usePushChain();
    const { pushChainClient, isInitialized } = usePushChainClient();

    return (
        <>
            {isInitialized && pushChainClient && (
                <p>Chain Agnostic: {
                    PushChain.utils.account.toChainAgnostic(
                        pushChainClient.universal.origin.address,
                        {
                            chain: pushChainClient.universal.origin.chain
                        }
                    )}
                </p>  
            )}
        </>
    );
  }

  return (
    <PushUniversalWalletProvider
      config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}
    >
        <PushUniversalAccountButton />
        <Component />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

### Returns

| Property | Type | Description |
| --- | --- | --- |
| `PushChain` | `PushChain` | Your core SDK. |

## Next Steps

-   Customize UI Kit look and feel with [Theme Variables](/push-chain-website/pr-preview/pr-1239/docs/chain/ui-kit/customizations/theme-variables/)
-   Explore more about PushChain core SDK in [Build](/push-chain-website/pr-preview/pr-1239/docs/chain/build/)
-   Check out end to end [Tutorials](/push-chain-website/pr-preview/pr-1239/docs/chain/tutorials/) to see step by step implementation of Apps
