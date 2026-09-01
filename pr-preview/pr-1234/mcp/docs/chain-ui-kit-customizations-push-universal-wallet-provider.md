---
title: "Push Universal Wallet Provider"
url: "https://pushchain.github.io/docs/chain/ui-kit/customizations/push-universal-wallet-provider/"
section: "ui-kit"
lastUpdated: "2026-09-01T21:11:33Z"
description: "{Push Universal Wallet Provider | Customizations | UI Kit | Push Chain Docs}"
---

# Push Universal Wallet Provider

`PushUniversalWalletProvider` is the top-level context provider component that initializes wallet functionality across your app, handling:

-   **Login Configuration**: What logins and wallets you want to enable in your app (email, OAuth, wallets).
-   **Application Metadata**: Allows you to display your application metadata such as logo, name, etc.
-   **Theme Overrides**: Customize or override default styles.

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

Wrap your application with `PushUniversalWalletProvider` to make wallet functionality available to all child components.

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI
} from '@pushchain/ui-kit';

function App() {
  return (
    <PushUniversalWalletProvider
      config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}
      themeMode={PushUI.CONSTANTS.THEME.DARK}
    >
      <PushUniversalAccountButton />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

## Props

These `Arguments` are mandatory

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| _`config`_ | `Object` | _\*\*_ | Used to configure the wallet connection, logins, and modals. _\*\*_ See `config` prop for more info. |
| `app` | `Object` | _\*\*_ | Used to display your application metadata such as logo, name, etc. _\*\*_ See `app` prop for more info. |
| `themeMode` | `PushUI.CONSTANTS.THEME` | `PushUI.CONSTANTS.THEME.LIGHT` | Theme mode to apply, you can use `LIGHT` or `DARK` option. PushUI.CONSTANTS.THEME
`PushUI.CONSTANTS.THEME.LIGHT` `PushUI.CONSTANTS.THEME.DARK`

 |
| `themeOverrides` | `Object` | _\*\*_ | Used to override default styles. _\*\*_ See `themeOverrides` prop for more info. |

### _`config`_ prop (required)

Customize the behavior of the wallet connection, logins, and modals by using the `config` prop.

These `Arguments` are mandatory

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| _`network`_ | `PushUI.CONSTANTS.PUSH_NETWORK` | \- | Push Chain network to connect to. For example: `PushUI.CONSTANTS.PUSH_NETWORK.TESTNET` PushUI.CONSTANTS.PUSH\_NETWORK
`PushUI.CONSTANTS.PUSH_NETWORK.TESTNET` `PushUI.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT` `PushUI.CONSTANTS.PUSH_NETWORK.LOCALNET`

 |
| `login` | `Object` | _\*\*_ | Login method configuration. _\*\*_ See `config.login` Options. |
| `modal` | `Object` | _\*\*_ | Global defaults for login and connected modal instances. _\*\*_ See `config.modal` Options. |
| `toast` | `Object` | _\*\*_ | Transaction toast configuration. _\*\*_ See `config.toast` Options. |
| `uid` | `string` | 'default' | Unique identifier for this provider. instance |
| `rpcUrl` | `string` | Public endpoints | Custom JSON-RPC endpoint for supported chains. |
| `chainConfig` | `Object` | _\*\*_ | Custom settings to configure the SDK instance. _\*\*_ See `config.chainConfig` Options. |

\`config.login\` Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `email` | `boolean` | `true` | Enables email sign in when `true` |
| `google` | `boolean` | `true` | Enables google sign in when `true` |
| `phone` | `boolean` | `true` | Enables phone sign in when `true` |
| `socials` | `Object` | _\*\*_ | Enables additional social login providers. _\*\*_ See `config.login.socials` Options. |
| `wallet` | `Object` | _\*\*_ | External wallet configuration. _\*\*_ See `config.login.wallet` Options. |
| `appPreview` | `boolean` | `false` | Show app preview in modal |

\`config.login.socials\` Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `discord` | `boolean` | `true` | Enables discord sign in when `true` |
| `github` | `boolean` | `true` | Enables github sign in when `true` |
| `x` | `boolean` | `true` | Enables twitter sign in when `true` |
| `bluesky` | `boolean` | `true` | Enables bluesky sign in when `true` |

\`config.login.wallet\` Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | `true` | Allow external wallet connections |
| `chains` | `PushUI.CONSTANTS.CHAIN[]` | All supported chains | You can choose to enable specific chains by passing them in an array. `PushUI.CONSTANTS.CHAIN` |
| `excludedChains` | `PushUI.CONSTANTS.CHAIN[]` | `[]` | You can choose to disable specific chains by passing them in an array. `PushUI.CONSTANTS.CHAIN` |

\`config.modal\` Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `loginLayout` | `PushUI.CONSTANTS.LOGIN.LAYOUT` | `PushUI.CONSTANTS.LOGIN.LAYOUT.SIMPLE` | Login modal layout type. PushUI.CONSTANTS.LOGIN.LAYOUT
`PushUI.CONSTANTS.LOGIN.LAYOUT.SIMPLE` `PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT`

 |
| `appPreview` | `boolean` | `false` | Show app preview in modal |
| `bgImage` | `string` | `null` | Background image for the login modal |
| `connectedLayout` | `PushUI.CONSTANTS.CONNECTED.LAYOUT` | `PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER` | Connected modal layout type. PushUI.CONSTANTS.CONNECTED.LAYOUT

`PushUI.CONSTANTS.CONNECTED.LAYOUT.FULL` `PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER`

 |
| `connectedInteraction` | `PushUI.CONSTANTS.CONNECTED.INTERACTION` | `PushUI.CONSTANTS.CONNECTED.INTERACTION.INTERACTABLE` | Connected modal outside interaction type. PushUI.CONSTANTS.CONNECTED.INTERACTION

`PushUI.CONSTANTS.CONNECTED.INTERACTION.INTERACTABLE` `PushUI.CONSTANTS.INTERACTION.BLUR`

 |

\`config.toast\` Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `PushUI.CONSTANTS.TOAST.POSITION` | `PushUI.CONSTANTS.TOAST.POSITION.BOTTOM_RIGHT` | Toast position. |
| `hidden` | `boolean` | `false` | Hide toast. |

note

The transaction toast uses `PUAToast` as the default root class name. You can target it in CSS to customize the toast container.

\`config.chainConfig\` Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `rpcUrls` | `Partial<Record<CHAIN, string>>` | `{}` | Custom RPC URLs mapped by chain IDs. |
| `blockExplorers` | `Partial<Record<CHAIN, string[]>` | `{[CHAIN.PUSH_TESTNET_DONUT]: ['https://donut.push.network']}` | Custom block explorer URLs mapped by chain IDs. |
| `printTraces` | `boolean` | `false` | When true, console logs the internal trace logs for debugging requests to nodes |

Live Playground: Creating basic and advanced config

-   Basic
-   Advanced

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
// Import necessary components from @pushchain/ui-kit
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  // Define Wallet Config
  const walletConfig = {
    uid: 'basic',
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // network to connect to
  };

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      {/* Your app logic */}

      {/* Push Universal Wallet Button to show the functionality */}
      <PushUniversalAccountButton uid='basic' />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
// Import necessary components from @pushchain/ui-kit
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  // Define Wallet Config
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // network to connect to
    login: {
      // login options to choose from
      email: true,
      google: false, // disable google login
      wallet: {
        enabled: true, // enable external wallet login
        chains: [
          PushUI.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
          PushUI.CONSTANTS.CHAIN.SOLANA_DEVNET,
          PushUI.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
        ],
      },
      appPreview: true, // enable app preview to be shown inside login modal. Need to provide app metadata as well
    },
    modal: {
      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SIMPLE, // login modal layout type
      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.FULL, // connected modal layout type
      appPreview: true, // enable app preview to be shown inside modal. Meed to provide app metadata as well
    },
    uid: 'your-uid', // unique identifier, only used if multiple wallet needs to be connected
    rpcURL: '<INFURA_RPC_URL>', // custom rpc url to connect to
    chainConfig: {}, // custom chain config to pass to push chain client if needed
  };

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      {/* Your app logic */}

      {/* Push Universal Wallet Button to show the functionality */}
      <PushUniversalAccountButton uid='your-uid' />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

### `app` prop

Display your app metadata in login screens and preview panes by using the `app` prop. **Note**: You will also need to enable `appPreview` in the `login` and `modal` section of `config` props to show them in different sections of the UI.

| Property | Type | Description |
| --- | --- | --- |
| `logoUrl` | `string` | URL to application logo or icon |
| `title` | `string` | Application name or title |
| `description` | `string` | Brief description of the application |

Live Playground: Creating your app metadata

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
// Import necessary components from @pushchain/ui-kit
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  // Define Wallet Config
  const walletConfig = {
    uid: 'custom-app-metadata',
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // network to connect to
    login: { appPreview: true },
  };

  // Define Your App Preview
  const appMetadata = {
    logoUrl: 'https://avatars.githubusercontent.com/u/64157541?v=4',
    title: 'Test App Title',
    description: 'Test App Description',
  };

  return (
    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>
      {/* Your app logic */}

      {/* Push Universal Wallet Button to show the functionality */}
      <PushUniversalAccountButton uid='custom-app-metadata' />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

### `themeOverrides` prop

Override different theme settings by using the `themeOverrides` prop. Check out all the supported theme variables in [Theme Variables](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/theme-variables/).

| Type | Default | Description |
| --- | --- | --- |
| `ThemeOverrides` | `{}` | Override the theme settings |

Live Playground: Customizing your theme

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
// Import necessary components from @pushchain/ui-kit
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  // Define Wallet Config
  const walletConfig = {
    uid: 'custom-theme',
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

  return (
    <PushUniversalWalletProvider
      config={walletConfig}
      themeOverrides={{
        '--pw-core-bg-primary-color': '#DBE3FF',
        '--pw-core-bg-secondary-color': '#EDEFFF',
        '--pw-core-font-family': 'Inter',
        '--pw-core-text-primary-color': '#1A1A1A',
        '--pw-core-text-secondary-color': '#4B4B4B',
      }}
    >
      <PushUniversalAccountButton uid='custom-theme' />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

## Next Steps

-   Customize the connect button with [Push Universal Account Button](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/push-universal-account-button/)
-   Use wallet context hooks via [usePushWalletContext](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/use-push-wallet-context/)
-   Access the Push Chain Client with [usePushChainClient](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/use-push-chain-client/)
