# UI Components Reference - @pushchain/ui-kit

> Deep context for `push-frontend` skill. Load this file only when you need wallet provider customization, hook APIs, or connection state details.

## PushUniversalWalletProvider - Full Config

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

## usePushWalletContext - Full API

```tsx
import { usePushWalletContext, PushUI } from '@pushchain/ui-kit';

const {
  connectionStatus,          // PushUI.CONSTANTS.CONNECTION.STATUS
  handleConnectToPushWallet, // () => void - open wallet connection modal
  handleUserLogOutEvent,     // () => void - disconnect and clear session
} = usePushWalletContext();
// Advanced multi-instance: pass uid matching config.uid on the target provider
// usePushWalletContext('uid1') - must match usePushChainClient('uid1') and <PushUniversalAccountButton uid='uid1' />

// Compare against the enum:
const isConnected =
  connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED;

// connectionStatus values:
// PushUI.CONSTANTS.CONNECTION.STATUS.NOT_CONNECTED
// PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTING
// PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED
```

## usePushChainClient - Full API

```tsx
import { usePushChainClient } from '@pushchain/ui-kit';

const {
  pushChainClient, // PushChainClient | null - null until wallet connects
  isInitialized,   // boolean - false while client is booting
  error,           // Error | null - set if initialization fails
} = usePushChainClient(uid?); // uid: optional - target a specific PushUniversalWalletProvider instance
```

## usePushChain - Full API

```tsx
import { usePushChain } from '@pushchain/ui-kit';

const { PushChain } = usePushChain();
// PushChain is the @pushchain/core SDK - use for utilities and constants inside components.
// For transactions and signing, use usePushChainClient() instead.
// e.g. PushChain.utils.account.toChainAgnostic(address, { chain })
```

## PushUniversalAccountButton - Props

```tsx
import { PushUniversalAccountButton } from '@pushchain/ui-kit';

<PushUniversalAccountButton
  connectButtonText="Connect Wallet"          // default: 'Connect Account'
  loadingComponent={<MyLoader />}             // custom loading indicator
  uid="primary"                               // match provider config.uid (multi-instance)
  themeOverrides={{                           // --pwauth-* variables only
    '--pwauth-btn-connect-border-radius': '32px',
    light: { '--pwauth-btn-connect-bg-color': '#3459F0' },
    dark:  { '--pwauth-btn-connect-bg-color': '#6684FC' },
  }}
  loginAppOverride={{ title: 'My App', description: 'Tagline' }}
  modalAppOverride={{ title: 'My App' }}
  customConnectComponent={<MyConnectBtn />}   // replace default connect button
  customConnectedComponent={<MyConnected />}  // replace default connected button
  connectButtonClassName="my-connect"
  connectedButtonClassName="my-connected"
/>
```

Place it anywhere inside `<PushUniversalWalletProvider>`. No required props.

## Theme Customization

```tsx
// App-wide override (both themes)
<PushUniversalWalletProvider
  themeMode={PushUI.CONSTANTS.THEME.DARK}  // LIGHT | DARK
  themeOverrides={{
    '--pw-core-brand-primary-color': '#3459F0',
    '--pw-core-bg-primary-color': '#FAF3E0',
    light: { '--pw-core-bg-secondary-color': '#F9F7FC' },
    dark:  { '--pw-core-bg-secondary-color': '#2B2235' },
  }}
>
```

**Global overrides** - apply regardless of theme:

| Category | Variable | Default |
|---|---|---|
| Typography | `--pw-core-font-family` | `FK Grotesk Neu` |
| Typography | `--pw-core-text-size` | `26px` |
| Spacing | `--pw-core-list-spacing` | `12px` |
| Border | `--pw-core-modal-border` | `2px` |
| Border | `--pw-core-modal-border-radius` | `24px` |
| Layout | `--pw-core-modal-width` | `376px` |
| Layout | `--pw-core-modal-padding` | `24px` |
| Border | `--pw-core-btn-border-radius` | `12px` |
| Border | `--pwauth-btn-connect-border-radius` | `12px` |

**Color variables** - different defaults per theme:

| Variable | Light | Dark |
|---|---|---|
| `--pw-core-brand-primary-color` | `#D548EC` | `#CF59E2` |
| `--pw-core-text-primary-color` | `#17181B` | `#F5F6F8` |
| `--pw-core-text-secondary-color` | `#313338` | `#C4CBD5` |
| `--pw-core-text-tertiary-color` | `#8C93A0` | `#757D8D` |
| `--pw-core-text-link-color` | `#C742DD` | `#CF59E2` |
| `--pw-core-text-disabled-color` | `#B0B3B9` | `#757D8D` |
| `--pw-core-bg-primary-color` | `#F5F6F8` | `#17181B` |
| `--pw-core-bg-secondary-color` | `#FFFFFF` | `#202124` |
| `--pw-core-bg-tertiary-color` | `#EAEBF2` | `#313338` |
| `--pw-core-bg-disabled-color` | `#EAEBF2` | `#313338` |
| `--pw-core-success-primary-color` | `#00A47F` | `#51DCBD` |
| `--pw-core-error-primary-color` | `#D43B3B` | `#FFB1B1` |
| `--pw-core-modal-border-color` | `#CF59E2` | `#D548EC` |
| `--pw-core-btn-primary-bg-color` | `#D548EC` | `#D548EC` |
| `--pw-core-btn-primary-text-color` | `#FFFFFF` | `#FFFFFF` |
| `--pwauth-btn-connect-text-color` | `#FFFFFF` | `#FFFFFF` |
| `--pwauth-btn-connect-bg-color` | `#D548EC` | `#D548EC` |
| `--pwauth-btn-connected-text-color` | `#FFFFFF` | `#FFFFFF` |
| `--pwauth-btn-connected-bg-color` | `#000000` | `#000000` |

> `--pwauth-*` variables can also be overridden per button via `PushUniversalAccountButton.themeOverrides`.

### Advanced CSS - className overrides

When CSS variables aren't granular enough (gradients, animations, box-shadow, pseudo-elements), use `connectButtonClassName` and `connectedButtonClassName` to attach your own classes:

```tsx
<PushUniversalAccountButton
  connectButtonClassName="my-connect-btn"
  connectedButtonClassName="my-connected-btn"
/>
```

```css
.my-connect-btn {
  background: linear-gradient(90deg, #3459F0, #8B5CF6);
  border-radius: 999px;
}
.my-connected-btn {
  border: 2px solid #3459F0;
  background: transparent;
}
```

> `themeOverrides` (`--pwauth-*`) still applies alongside `className`. Your class styles layer on top via standard CSS specificity.

## PushUI.CONSTANTS Reference

```ts
PushUI.CONSTANTS.PUSH_NETWORK.TESTNET              // network selector
PushUI.CONSTANTS.CONNECTION.STATUS.NOT_CONNECTED   // wallet not connected
PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTING      // wallet connecting
PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED       // wallet connected
PushUI.CONSTANTS.THEME.LIGHT                       // light theme mode
PushUI.CONSTANTS.THEME.DARK                        // dark theme mode
PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT                // modal login layout
PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER            // modal connected layout
```

## See Also

- Theme variables (full variable list with defaults): https://push.org/agents/workflows/theme-variables.md
- Connect wallet (full setup workflow): https://push.org/agents/workflows/connect-wallet-ui-kit.md
- Universal wallet provider hooks: https://push.org/agents/workflows/use-universal-wallet-provider.md
- Constants (CONNECTION.STATUS, PUSH_NETWORK): https://push.org/agents/workflows/constants-reference.md

## Docs

- Full provider reference: https://push.org/docs/chain/ui-kit/customizations/push-universal-wallet-provider/
- usePushWalletContext: https://push.org/docs/chain/ui-kit/customizations/use-push-wallet-context/
- usePushChainClient: https://push.org/docs/chain/ui-kit/customizations/use-push-chain-client/
- usePushChain: https://push.org/docs/chain/ui-kit/customizations/use-push-chain/
- Theme variables: https://push.org/docs/chain/ui-kit/customizations/theme-variables/
