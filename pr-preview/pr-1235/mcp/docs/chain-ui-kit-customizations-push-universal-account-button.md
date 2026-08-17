---
title: "Push Universal Account Button"
url: "https://pushchain.github.io/docs/chain/ui-kit/customizations/push-universal-account-button/"
section: "ui-kit"
lastUpdated: "2026-08-17T22:18:42+05:30"
description: "Push Universal Account Button | Customizations | UI Kit | Push Chain Docs"
---

# Push Universal Account Button

`PushUniversalAccountButton` is a versatile, state-aware button component for wallet connections in the Push Chain ecosystem. It handles the complete user journey from connection initiation through authentication to displaying the connected account state, with extensive customization options for each state.

## Installation

-   npm
-   yarn

```bash
# UI Kit SDK
npm install @pushchain/ui-kit
```

```bash
# UI Kit SDK
yarn add @pushchain/ui-kit
```

## Usage

Place the button in your UI where users should be able to connect. The button must be used within a `PushUniversalWalletProvider`.

-   Quickstart
-   Advanced

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  return (
    <PushUniversalWalletProvider
      config={{
        uid: 'basic',
        network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET
      }}
    >
      <PushUniversalAccountButton
        uid='basic'
        connectButtonText='Start Building 🔥'
        modalAppOverride={{
          title: 'Override App Title on Modal',
        }}
        loginAppOverride={{
          title: 'Override App Title on Login',
        }}
        themeOverrides={{
          '--pwauth-btn-connect-bg-color': ' #3459F0', // or override theme
        }}
      />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  // Custom loading component
  const CustomLoader = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          border: '3px solid rgba(0, 0, 0, 0.1)',
          borderTopColor: '#6B46C1',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <span>Loading wallet...</span>
    </div>
  );

  return (
    <PushUniversalWalletProvider
      config={{
        uid: 'advanced',
        network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET
      }}
      themeOverrides={{
        '--pw-core-bg-primary-color': '#FFFFFF33',
      }}
    >
      <PushUniversalAccountButton uid='advanced' loadingComponent={<CustomLoader />} />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

## Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `connectButtonText` | `string` | `Connect Account` | Text for the connect button. |
| `loadingComponent` | `React.ReactNode` | Uses default loader | Custom loading indicator. |
| `uid` | `string` | Uses default provider | Optional ID for targeting a specific wallet instance, must match `config.uid` of specific `PushUniversalWalletProvider` instance.  
   
See [multiple wallet example](/push-chain-website/pr-preview/pr-1235/docs/chain/ui-kit/examples/multiple-wallet-example/) for usage. |
| `themeOverrides` | `ThemeOverrides` | `{}` | Button theme overrides. Check out all the supported theme variables in [Theme Variables](/push-chain-website/pr-preview/pr-1235/docs/chain/ui-kit/customizations/theme-variables/). |
| `loginAppOverride` | `Object` | _\*\*_ | Used to override app preview in the login screen. _\*\*_ See `loginAppOverride` prop for more info. |
| `modalAppOverride` | `Object` | _\*\*_ | Used to override app preview in the modal presented. _\*\*_ See `modalAppOverride` prop for more info. |
| `customConnectComponent` | `React.ReactNode` | \- | Custom component to replace the default Connect Wallet button when the user is not connected. |
| `customConnectedComponent` | `React.ReactNode` | \- | Custom component to replace the default connected wallet button after the user connects. |
| `connectButtonClassName` | `string` | `"PUABConnect"` | CSS class applied to the default Connect Wallet button. |
| `connectedButtonClassName` | `string` | `"PUABConnected"` | CSS class applied to the default connected wallet button. |

### `loginAppOverride` props

Use this to override app preview that is provided on login screen for a particular button instance. This will override the app preview that is provided in the `app` prop of `PushUniversalWalletProvider`.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `logoUrl` | `string` | From `Provider's` -> `app.logoUrl` | Override app logo in login screen. |
| `title` | `string` | From `app.title` | Override app title in login screen. |
| `description` | `string` | From `app.description` | Override app description in login screen. |

### `modalAppOverride` props

Use this to override app preview that is provided on wallet modal for a particular button instance. This will override the app preview that is provided in the `app` prop of `PushUniversalWalletProvider`.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `logoUrl` | `string` | From `app.logoUrl` | Override app logo in modal. |
| `title` | `string` | From `app.title` | Override app title in modal. |
| `description` | `string` | From `app.description` | Override app description in modal. |

## Handling Connection Lifecycle

You can track and customize the wallet connection lifecycle with [usePushWalletContext](/push-chain-website/pr-preview/pr-1235/docs/chain/ui-kit/customizations/use-push-wallet-context/).

## Next Steps

-   Track the wallet connection lifecycle with [usePushWalletContext](/push-chain-website/pr-preview/pr-1235/docs/chain/ui-kit/customizations/use-push-wallet-context/)
-   Get initialized wallet instance with [usePushChainClient](/push-chain-website/pr-preview/pr-1235/docs/chain/ui-kit/customizations/use-push-chain-client/)
-   Customize user experience with [Theme Variables](/push-chain-website/pr-preview/pr-1235/docs/chain/ui-kit/customizations/theme-variables/)
