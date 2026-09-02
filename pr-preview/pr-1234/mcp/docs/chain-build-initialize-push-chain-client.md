---
title: "Initialize Push Chain Client"
url: "https://pushchain.github.io/docs/chain/build/initialize-push-chain-client/"
section: "build"
lastUpdated: "2026-09-02T13:01:57Z"
description: "Initialize Push Chain Client | Build | Push Chain Docs"
---

# Initialize Push Chain Client

## Overview

Initializing the SDK client gives you:

-   **Chain-agnostic** `PushChainClient` for submitting on-chain calls
-   Automatic **RPC & block-explorer resolution** (with optional overrides)
-   Built-in **UEA** (Universal Executor Account) and **origin-account** getters
-   End-to-end **Universal fee abstraction**, signature orchestration & debug traces

Just pass your universal signer and network, and you’re ready to write and transact on Push Chain from any wallet.

## Initialize Push Chain Client

**_`PushChain.initialize(signer, {options}): Promise<PushChainClient>`_**

```typescript
// Import @pushchain/core and ethers
// Ensure you have created Universal Signer.
// If not done, then check out Create Universal Signer.

// Initialize Push Chain Client
const pushChainClient = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});
```

These `Arguments` are mandatory

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| _`signer`_ | `UniversalSigner | UniversalAccount` | \- | Pass a `UniversalSigner` to enable full write/sign capabilities, or a `UniversalAccount` to initialize the client in read-only mode (no signing or transaction sending). |
| _`options.network`_ | `PushChain.CONSTANTS.PUSH_NETWORK` | \- | Push Chain network to connect to. For example: `PushChain.CONSTANTS.PUSH_NETWORK.TESTNET` PushChain.CONSTANTS.PUSH\_NETWORK
`PushChain.CONSTANTS.PUSH_NETWORK.TESTNET``PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET`

 |
| `options.rpcUrls` | `Partial<Record<CHAIN, string[]>>` | `{}` | Custom RPC URLs mapped by chain IDs. If not provided, the default RPC URLs for the network will be used. Example: `rpcUrls: {[CHAIN.ETHEREUM_SEPOLIA]: ['https://sepolia.infura.io/v3/your-api-key'], [CHAIN.SOLANA_DEVNET]: ['https://api.devnet.solana.com']}` |

Advanced Arguments

| Arguments | Type | Default | Description |
| --- | --- | --- | --- |
| `options.blockExplorers` | `Partial<Record<CHAIN, string[]>>` | `{[CHAIN.PUSH_TESTNET_DONUT]: ['https://donut.push.network']}` | Custom block explorer URLs mapped by chain IDs. If not provided, the default block explorer URLs for the network will be used. |
| `options.printTraces` | `boolean` | `false` | When true, console logs the internal trace logs for debugging requests to nodes |
| `options.progressHook` | `(progress: ProgressEvent) => void` | `undefined` | Optional callback to receive progress events from long-running operations. |

Returns \`PushChainClient\` <object>

```typescript
// PushChainClient object
{
  orchestrator: Orchestrator {
    universalSigner: {
      account: [Object],
      signMessage: [Function: signMessage],
      signAndSendTransaction: [Function: signAndSendTransaction],
      signTypedData: [Function: signTypedData]
    },
    pushNetwork: 'TESTNET_DONUT',
    rpcUrls: {},
    printTraces: false,
    progressHook: undefined,
    pushClient: PushClient {
      publicClient: [Object],
      pushChainInfo: [Object],
      ephemeralKey: '...'
    }
  },
  universalSigner: {
    account: {
      address: '0xC8AE31cF444CAB447921277c4DcF65128d5B25a8',
      chain: 'eip155:11155111'
    },
    signMessage: [Function: signMessage],
    signAndSendTransaction: [Function: signAndSendTransaction],
    signTypedData: [Function: signTypedData]
  },
  blockExplorers: { 'eip155:42101': [ 'https://donut.push.network' ] },
  universal: {
    origin: [Getter],
    account: [Getter],
    sendTransaction: [Function: bound execute],
    signMessage: [Function: signMessage],
    signTypedData: [Function: signTypedData]
  },
  explorer: {
    getTransactionUrl: [Function: getTransactionUrl],
    listUrls: [Function: listUrls]
  }
}
```

**Let's create your first Push Chain client!** Try the code in live playground 👇.

-   Ethers (v6)
-   Viem
-   Solana (Web3 JS)
-   UI Kit (Frontend / Abstracted)

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

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

  function Component() {
    const { connectionStatus } = usePushWalletContext();
    const { pushChainClient } = usePushChainClient();

    return (
      <div>
        <PushUniversalAccountButton />

        {connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED &&
          <p>Push Chain Client Initialized: {JSON.stringify(pushChainClient, (key, value) =>
            typeof value === 'bigint' ? value.toString() : value
          )}</p>
        }
      </div>
    );
  }

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <Component />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

## Read-only Mode

**_`PushChain.initialize(account, {options}): Promise<PushChainClient>`_**

You can initialize a **read-only** `PushChainClient` by passing a `UniversalAccount` (address + chain) instead of a `UniversalSigner`. This is useful when you want to inspect account state, resolve explorer URLs, or read metadata without signing or sending transactions.

```typescript
// Import @pushchain/core and ethers
// Ensure you have created Universal Account.
// If not done, then check out Create Universal Account under Utility Functions.

// Initialize Push Chain Client
const pushChainClient = await PushChain.initialize(universalAccount, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});
```

Live Playground: Initialize Read-only Push Chain Client

VIRTUAL NODE IDE

Copy playground link

Copy code

## Reinitialize Client

**_`pushChainClient.reinitialize(signerOrAccount, {options}): Promise<PushChainClient>`_**

You can reinitialize a `PushChainClient` with a different signer/account and/or updated configuration (RPCs, explorers, traces, progress hook).

-   Reinitialize will take the same parameters that you have passed for initializing the previous client.
-   To update the parameters, simply pass new ones in options object. **Parameters list** is same as [initialize(...)](#initialize-push-chain-client).
-   Reinitialize always returns a new client instance; swap references accordingly.
-   Changing the signer/account updates `universal.origin` and `universal.account`.

```typescript
// Import @pushchain/core and ethers
// Ensure you have created Universal Account.
// If not done, then check out Create Universal Account under Utility Functions.

// Initialize Push Chain Client
const pushChainClient2 = await pushChainClient1.reinitialize(newSignerOrAccount, {
  // pass new parameters if needed
});
```

Live Playground: Reinitialize Push Chain Client

VIRTUAL NODE IDE

Copy playground link

Copy code

## Manage Account

### Access Account Information

Once initialized, your `PushChainClient` exposes:

| Property | Description |
| --- | --- |
| `pushChainClient.universal.account` | Push Chain **execution account**: for native Push Chain wallets this is your EOA or smart account; for cross-chain wallets this is your UEA (Universal Executor Account) that holds gas and executes transactions. |
| `pushChainClient.universal.origin` | **Origin account** on the source chain (e.g. `eip155:1`), representing your wallet’s native address. |

```typescript
// execution vs. origin accounts
const execAccount = pushChainClient.universal.account; // Account that writes on Push Chain
const originAccount = pushChainClient.universal.origin; // Source chain account that is mapped to the execution account
```

### Get Account Status

**_`pushChainClient.getAccountStatus({options?}): Promise<AccountStatus>`_**

Returns the current UEA deployment and version information for the initialized account.

**Note**: In most cases, UEA deployment and upgrades are handled automatically by the SDK. Most apps do not need to call this directly unless they are debugging account state or checking upgrade requirements.

For advanced account management flows, read [Upgrade Universal Account](/push-chain-website/pr-preview/pr-1234/docs/chain/build/advanced/upgrade-universal-account/).

```typescript
const status = await pushChainClient.getAccountStatus();
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| `options.forceRefresh` | `boolean` | `false` | When `true`, re-fetches status from chain. |

Returns \`AccountStatus\` <object>

```typescript
{
  mode: 'read-only' | 'signer';
  uea: {
    loaded: boolean;            // Whether status has been fetched from chain
    deployed: boolean;          // Whether the UEA proxy is deployed on Push Chain
    version: string;            // Current UEA implementation version, e.g. "1.0.0"
    minRequiredVersion: string; // Latest required version from UEAFactory, e.g. "1.0.2"
    requiresUpgrade: boolean;   // true when deployed && version < minRequiredVersion
  };
}
```

If the UEA has not been deployed yet, `deployed` is `false`, `version` and `minRequiredVersion` are empty strings, and `requiresUpgrade` is `false`.

Live Playground: Get Account Status

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Initialize your EVM client with [Initialize EVM Client](/push-chain-website/pr-preview/pr-1234/docs/chain/build/initialize-evm-client/)
-   Send your first Universal Transaction with [Send Universal Transaction](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/)
-   Explore on-chain helper contracts in [Contract Helpers](/push-chain-website/pr-preview/pr-1234/docs/chain/build/contract-helpers/)
-   Build wallet flows and abstract core SDK with the [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/)
