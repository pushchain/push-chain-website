---
title: "usePushWalletContext"
url: "https://pushchain.github.io/docs/chain/ui-kit/customizations/use-push-wallet-context/"
section: "ui-kit"
lastUpdated: "2026-09-02T13:01:57Z"
description: "usePushWalletContext | Customizations | UI Kit | Push Chain Docs"
---

# usePushWalletContext

The `usePushWalletContext` hook provides access to the current wallet state and methods to interact with the Push Wallet. This hook must be used within a component that's wrapped by a `PushUniversalWalletProvider`.

## Usage

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import { 
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushWalletContext,
  PushUI 
} from '@pushchain/ui-kit';

function App() {
  // Create a component that uses the hook inside the provider context
  const WalletContextComponent = () => {
    const { 
      connectionStatus, 
      handleConnectToPushWallet, 
      handleUserLogOutEvent 
    } = usePushWalletContext(); // optional: uid parameter for targeting a specific wallet instance

    return (
      <div>
        <h3 style={{ margin: '1rem 0' }}>Wallet Status: {connectionStatus}</h3>
        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.NOT_CONNECTED && (
          <button
            style={{
              background: 'transparent',
              padding: '12px 18px',
              borderRadius: '10px',
              border: '1px solid',
            }}
            onClick={() => handleConnectToPushWallet()}
          >
            Connect via Hook Call
          </button>
        )}
        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (
          <button
            style={{
              background: 'transparent',
              padding: '12px 18px',
              borderRadius: '10px',
              border: '1px solid',
            }}
            onClick={() => handleUserLogOutEvent()}
          >
            Disconnect via Hook Call
          </button>
        )}
      </div>
    );
  };

  return (
    <PushUniversalWalletProvider config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}>
      <PushUniversalAccountButton />
      <WalletContextComponent />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

### Parameters

| Arguments | Type | Description |
| --- | --- | --- |
| `uid` | `string` | Optional ID for targeting a specific wallet instance, must match `config.uid` of specific `PushUniversalWalletProvider` instance.  
   
See [multiple wallet example](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/examples/multiple-wallet-example/) for usage. |

### Returns

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `connectionStatus` | `PushUI.CONSTANTS.CONNECTION.STATUS` | `PushUI.CONSTANTS.CONNECTION.STATUS.NOT_CONNECTED` | It will be from one of the following: PushUI.CONSTANTS.CONNECTION.STATUS
`PushUI.CONSTANTS.CONNECTION.STATUS.NOT_CONNECTED` `PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTING` `PushUI.CONSTANTS.CONNECTION.STATUS.AUTHENTICATING` `PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED` `PushUI.CONSTANTS.CONNECTION.STATUS.RETRY`

 |
| `handleConnectToPushWallet` | `() => void` | _function_ | Call to open the wallet-connect modal (or trigger your chosen flow). |
| `handleUserLogOutEvent` | `() => void` | _function_ | Call to disconnect the wallet and clear the session. |

## Next Steps

-   Learn how to use [usePushChainClient](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/use-push-chain-client/) in your app
-   Dive into theme customizations with [Theme Variables](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/theme-variables/)
-   Check out how to implement usePushWalletContext in [Examples](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/examples/)
