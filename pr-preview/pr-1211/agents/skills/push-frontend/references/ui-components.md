# UI Components Reference — @pushchain/ui-kit

> Deep context for `push-frontend` skill. Load this file only when you need wallet provider customization, hook APIs, or connection state details.

## PushUniversalWalletProvider — Full Config

```tsx
import { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';

<PushUniversalWalletProvider
  config={{
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // required
    login: {
      email: true,
      google: true,
      wallet: { enabled: true },
      appPreview: true,           // show app preview in login modal
    },
    modal: {
      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT,      // SPLIT | FULL
      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER, // HOVER | MODAL
      appPreview: true,
    },
  }}
  app={{
    title: 'My App',
    description: 'Short description shown in the login modal',
    logoUrl: 'https://example.com/logo.png',
  }}
>
  {children}
</PushUniversalWalletProvider>
```

### config.network values

| Constant | Network |
|---|---|
| `PushUI.CONSTANTS.PUSH_NETWORK.TESTNET` | Donut Testnet (use for development) |
| `PushUI.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT` | Alias for TESTNET |
| `PushUI.CONSTANTS.PUSH_NETWORK.LOCALNET` | Local dev node |

## usePushWalletContext — Full API

```tsx
import { usePushWalletContext, PushUI } from '@pushchain/ui-kit';

const {
  connectionStatus, // PushUI.CONSTANTS.CONNECTION.STATUS.*
  walletAddress,    // string | null — connected wallet address
  chainId,          // string | null — CAIP-2 chain ID
  disconnect,       // () => void
} = usePushWalletContext();

// connectionStatus values:
// PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED
// PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTING
// PushUI.CONSTANTS.CONNECTION.STATUS.DISCONNECTED
// PushUI.CONSTANTS.CONNECTION.STATUS.RECONNECTING
```

## usePushChainClient — Full API

```tsx
import { usePushChainClient } from '@pushchain/ui-kit';

const {
  pushChainClient, // PushChainClient | null — null before wallet connects
  error,           // Error | null
  isInitialized,   // boolean
} = usePushChainClient();
```

## PushUniversalAccountButton — Props

```tsx
import { PushUniversalAccountButton } from '@pushchain/ui-kit';

<PushUniversalAccountButton
  // No required props — works out of the box
  // Optional styling via className or style props
/>
```

The button handles connect/disconnect/account display automatically.
Place it anywhere inside `<PushUniversalWalletProvider>`.

## PushUI.CONSTANTS Reference

```ts
PushUI.CONSTANTS.PUSH_NETWORK.TESTNET         // network selector
PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED  // wallet status
PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT           // modal login layout
PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER       // modal connected layout
```

## Docs

- Full provider reference: https://push.org/docs/chain/ui-kit/customizations/push-universal-wallet-provider/
- usePushWalletContext: https://push.org/docs/chain/ui-kit/customizations/use-push-wallet-context/
- usePushChainClient: https://push.org/docs/chain/ui-kit/integrate-push-universal-wallet/
