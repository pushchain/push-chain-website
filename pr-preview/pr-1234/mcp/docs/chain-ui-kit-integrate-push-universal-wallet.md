---
title: "Integrate Push Universal Wallet"
url: "https://pushchain.github.io/docs/chain/ui-kit/integrate-push-universal-wallet/"
section: "ui-kit"
lastUpdated: "2026-09-04T07:14:57Z"
description: "{Integrate Push Universal Wallet | Customizations | UI Kit | Push Chain Docs}"
---

# Integrate Push Universal Wallet

## Overview

Push Universal Wallet gives your app:

-   **Seamless cross-chain** wallet integration (EVM, Solana, etc.)
-   **Provider/consumer** hook API for global state
-   Built-in **UI components** for connect buttons and modals
-   **Eliminates the need** to manage complex blockchain connections, authentication states, and cross-chain interactions manually

## How It Works

The Push Universal Wallet operates on a simple provider-consumer pattern:

1.  **Provider Setup**: Wrap your application with `PushUniversalWalletProvider` to initialize wallet functionality
2.  **Button Integration**: Add `PushUniversalAccountButton` components where users should connect
3.  **State Management**: Use the `usePushWalletContext` hook to access wallet state and methods throughout your app

The Push Universal Wallet provides a unified interface for connecting to multiple blockchains, automatically handling authentication and cross-chain interactions without complex blockchain-specific implementations.

## Installation

-   npm
-   yarn

```bash
npm install @pushchain/ui-kit
```

```bash
yarn add @pushchain/ui-kit
```

Note

If you are using **Vite with Plug'n'Play (PnP)** or encounter a **buffer error**, simply install `buffer` as a dependency.

The UI-kit already includes the necessary polyfills, so no extra configuration is required.

## Quickstart

-   Quickstart
-   With Hooks
-   With Customizations
-   With pushChainClient Interaction

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
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <PushUniversalAccountButton />
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
  usePushWalletContext,
  usePushChainClient,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  // Define Wallet Config
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

  function WalletUI() {
    const { connectionStatus } = usePushWalletContext();
    const { pushChainClient } = usePushChainClient();

    return (
      <div>
        <PushUniversalAccountButton />
        {connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (
          <p>
            LFG! Push Chain Executor Account (UEA): $
            {pushChainClient?.universal.account}
          </p>
        )}
      </div>
    );
  }

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <WalletUI />
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
  usePushWalletContext,
  usePushChainClient,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  // Define Wallet Config
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
    login: {
      email: true,
      google: true,
      wallet: {
        enabled: true,
      },
      appPreview: true,
    },
    modal: {
      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT,
      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER,
      appPreview: true,
    },
  };

  // Define Your App Preview
  const appMetadata = {
    logoUrl:
      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Test App Title',
    description: 'Test App Description',
  };

  function WalletUI() {
    const { connectionStatus } = usePushWalletContext();
    const { pushChainClient } = usePushChainClient();

    return (
      <div>
        <PushUniversalAccountButton />
        {connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (
          <p>
            LFG! Push Chain Executor Account (UEA): $
            {pushChainClient?.universal.account}
          </p>
        )}
      </div>
    );
  }

  return (
    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>
      <WalletUI />
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
import { PushChain } from '@pushchain/core';
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushWalletContext,
  usePushChainClient,
  PushUI,
} from '@pushchain/ui-kit';
import { useState } from 'react';

function App() {
  // Define Wallet Config
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
    login: {
      email: true,
      google: true,
      wallet: {
        enabled: true,
      },
      appPreview: true,
    },
    modal: {
      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT,
      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER,
      appPreview: true,
    },
  };

  // Define Your App Preview
  const appMetadata = {
    logoUrl:
      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Test App Title',
    description: 'Test App Description',
  };

  function WalletUI() {
    const [txnHash, setTxnHash] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { connectionStatus } = usePushWalletContext();
    const { pushChainClient } = usePushChainClient();

    const handleSendTransaction = async () => {
      if (pushChainClient) {
        setIsLoading(true);
        try {
          const res = await pushChainClient.universal.sendTransaction({
            to: '0x0000000000000000000000000000000000042101',
            value: PushChain.utils.helpers.parseUnits('0.01', 18), // 0.01 PC
          });
          setTxnHash(res.hash);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    return (
      <div>
        <PushUniversalAccountButton />
        {connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (
          <button
            disabled={isLoading}
            style={{
              background: 'transparent',
              border: '1px solid',
              borderRadius: '10px',
              padding: '12px 18px',
              cursor: 'pointer',
              marginTop: '8px',
            }}
            onClick={handleSendTransaction}
          >
            Send Transaction
          </button>
        )}
        {txnHash && (
          <>
            <p>Txn Hash: {txnHash}</p>
            <a
              href={pushChainClient?.explorer.getTransactionUrl(txnHash)}
              target='_blank'
              rel='noopener noreferrer'
            >
              View in Explorer
            </a>
          </>
        )}
      </div>
    );
  }

  return (
    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>
      <WalletUI />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

  
  

info

You can quickly scaffold a new Push Chain dapp with **UI-Kit** already configured using our CLI.

```bash
npx create-universal-dapp my-app
```

## Customization Parameters

Customize the parameters as per your need and the wallet functionality being used.

### PushUniversalWalletProvider

Below is a list of **minimum parameters** required to customize the Push Universal Wallet Provider. Check out [PushUniversalWalletProvider](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/push-universal-wallet-provider/) for more information on how to use and customize the Push Universal Wallet Provider.

These `Arguments` are mandatory

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| _`config`_ | `PushUniversalWalletProviderConfig` | \- | Core configuration object for wallet connections. |
| _`config.network`_ | `PushUI.CONSTANTS.PUSH_NETWORK.TESTNET` | \- | Push Chain network to conenct to. For example: `PushUI.CONSTANTS.PUSH_NETWORK.TESTNET` PushUI.CONSTANTS.PUSH\_NETWORK
`PushUI.CONSTANTS.PUSH_NETWORK.TESTNET` `PushUI.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT` `PushUI.CONSTANTS.PUSH_NETWORK.LOCALNET`

 |
| `config.app` | `{ title, description, logoUrl }` | \- | (Optional) app metadata for login/preview in the modal. |
| `config.login` | `{ email, google, wallet, appPreview }` | \- | Toggle login methods. |
| `config.modal` | `{ loginLayout, connectedLayout, connectedInteraction, appPreview }` | \- | Customize the modal layout and interaction. |
| `themeMode` | `'light'` | `'dark'` | `light` | Force a particular theme. |
| `themeOverrides` | `Record<string,string> & { light, dark }` | \- | Override CSS vars globally or per theme. |

  
  

### PushUniversalAccountButton

Check out [PushUniversalAccountButton](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/push-universal-account-button/) for more information on how to use and customize the Push Universal Account Button.

## Next Steps

-   Customize the provider in [PushUniversalWalletProvider](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/push-universal-wallet-provider/)
-   Style your connect button in [PushUniversalAccountButton](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/push-universal-account-button/)
-   Master hooks with [usePushWalletContext](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/customizations/use-push-wallet-context/)
