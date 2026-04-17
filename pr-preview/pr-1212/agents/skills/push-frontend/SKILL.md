---
id: push-frontend
intent: Enable universal transactions in a React frontend app
package: '@pushchain/ui-kit'
entry: 'usePushChainClient'
resources: 'https://push.org/agents/resources/push-frontend/index.json'
references:
  - references/ui-components.md
---

# Skill: Universal Transactions — Frontend (React)

**Intent**: Enable users to connect their wallet and execute universal transactions from a React app.
**Package**: `@pushchain/ui-kit` — bundles `@pushchain/core`, no separate install needed.
**Quickstart**: `npx create-universal-dapp` — bootstraps a React app with UI Kit pre-integrated.

## Install

```bash
npm install @pushchain/ui-kit
# or
npx create-universal-dapp
```

## Setup — Wrap Your App

`PushUniversalWalletProvider` must be at the root of your component tree (in `main.tsx` / `index.tsx`), not inside `App`.

```tsx
// main.tsx
import { createRoot } from 'react-dom/client';
import { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';
import App from './App';

export const walletConfig = {
  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // required
  app: {
    title: 'My App', // shown in the wallet connection modal
    description: 'App tagline', // shown below the title in the modal
  },
  login: {
    email: true, // enable email login (Push Wallet)
    google: true, // enable Google OAuth login
    wallet: true, // enable external wallet login (MetaMask, WalletConnect, etc.)
  },
};

createRoot(document.getElementById('root')!).render(
  <PushUniversalWalletProvider config={walletConfig}>
    <App />
  </PushUniversalWalletProvider>
);
```

```tsx
// App.tsx — PushUniversalAccountButton can go anywhere inside the provider
import { PushUniversalAccountButton } from '@pushchain/ui-kit';

export default function App() {
  return (
    <>
      <PushUniversalAccountButton /> {/* pre-built connect/disconnect button */}
      <YourAppContent />
    </>
  );
}
```

Provider customization (theme, network, wallet options): https://push.org/agents/workflows/use-universal-wallet-provider.md

## PushUniversalAccountButton

A state-aware button that handles the full connection flow — not connected → authentication → connected account display. Must be rendered inside `PushUniversalWalletProvider`.

```tsx
<PushUniversalAccountButton
  connectButtonText='Connect Wallet'
  modalAppOverride={{ title: 'My App', description: 'App tagline' }}
  loginAppOverride={{ title: 'My App' }}
  themeOverrides={{ '--pwauth-btn-connect-bg-color': '#3459F0' }}
/>
```

### Props

| Prop                       | Type                                 | Default                       | Description                                                                                                  |
| -------------------------- | ------------------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `connectButtonText`        | `string`                             | `'Connect Account'`           | Label on the connect button                                                                                  |
| `loadingComponent`         | `React.ReactNode`                    | default loader                | Custom loading indicator while connecting                                                                    |
| `uid`                      | `string`                             | —                             | Match a specific `PushUniversalWalletProvider` by `config.uid` — needed when using multiple wallet instances |
| `themeOverrides`           | `ThemeOverrides`                     | `{}`                          | CSS variable overrides scoped to this button instance                                                        |
| `loginAppOverride`         | `{ logoUrl?, title?, description? }` | from `app` in provider config | Override app branding shown on the login screen                                                              |
| `modalAppOverride`         | `{ logoUrl?, title?, description? }` | from `app` in provider config | Override app branding shown in the wallet modal                                                              |
| `customConnectComponent`   | `React.ReactNode`                    | —                             | Replace the entire default connect button with a custom component                                            |
| `customConnectedComponent` | `React.ReactNode`                    | —                             | Replace the entire connected button with a custom component                                                  |
| `connectButtonClassName`   | `string`                             | —                             | CSS class applied to the default connect button                                                              |
| `connectedButtonClassName` | `string`                             | —                             | CSS class applied to the default connected button                                                            |

## Theme Customization

Override CSS variables to match your brand. Pass `themeOverrides` to `PushUniversalWalletProvider` for app-wide styles, or to `PushUniversalAccountButton` for button-specific overrides (`--pwauth-*` variables only).

### Global override (both themes)

```tsx
<PushUniversalWalletProvider
  config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}
  themeOverrides={{
    '--pw-core-bg-primary-color': '#FAF3E0',
    '--pw-core-bg-secondary-color': '#FFFDF9',
    '--pw-core-brand-primary-color': '#3459F0',
  }}
>
```

### Light / dark specific overrides + themeMode

```tsx
<PushUniversalWalletProvider
  config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}
  themeMode={PushUI.CONSTANTS.THEME.DARK}  // LIGHT | DARK
  themeOverrides={{
    light: {
      '--pw-core-bg-primary-color': '#F1ECF9',
    },
    dark: {
      '--pw-core-bg-primary-color': '#1F1B24',
    },
  }}
>
```

> Top-level properties apply to both themes; `light` and `dark` sub-objects override those values when the corresponding theme is active.

### Button-level override

Variables starting with `--pwauth-` can be overridden per button instance:

```tsx
<PushUniversalAccountButton
  themeOverrides={{
    '--pwauth-btn-connect-border-radius': '32px',
    light: { '--pwauth-btn-connect-bg-color': '#3459F0' },
    dark: { '--pwauth-btn-connect-bg-color': '#6684FC' },
  }}
/>
```

### Key CSS variables

| Category | Variable                             | Description                                     |
| -------- | ------------------------------------ | ----------------------------------------------- |
| Layout   | `--pw-core-modal-border-radius`      | Modal corner radius (default `24px`)            |
| Layout   | `--pw-core-modal-width`              | Modal width (default `376px`)                   |
| Layout   | `--pw-core-btn-border-radius`        | Shared button radius (default `12px`)           |
| Layout   | `--pwauth-btn-connect-border-radius` | Connect button radius (default `12px`)          |
| Color    | `--pw-core-brand-primary-color`      | Brand accent color                              |
| Color    | `--pw-core-bg-primary-color`         | Modal / page background                         |
| Color    | `--pw-core-bg-secondary-color`       | Surface / card background                       |
| Color    | `--pw-core-text-primary-color`       | Primary text                                    |
| Color    | `--pwauth-btn-connect-bg-color`      | Connect button background                       |
| Color    | `--pwauth-btn-connect-text-color`    | Connect button text color                       |
| Color    | `--pwauth-btn-connected-bg-color`    | Connected button background (default `#000000`) |
| Color    | `--pwauth-btn-connected-text-color`  | Connected button text color                     |

Full variable list: see https://push.org/agents/skills/push-frontend/references/ui-components.md

### Advanced CSS — className overrides

When CSS variables aren't granular enough, use `connectButtonClassName` and `connectedButtonClassName` to attach your own classes and write arbitrary CSS:

```tsx
<PushUniversalAccountButton
  connectButtonClassName='my-connect-btn'
  connectedButtonClassName='my-connected-btn'
/>
```

```css
/* Target the connect button */
.my-connect-btn {
  background: linear-gradient(90deg, #3459f0, #8b5cf6);
  border-radius: 999px;
  font-weight: 700;
}

/* Target the connected/account button */
.my-connected-btn {
  border: 2px solid #3459f0;
  background: transparent;
}
```

> Use `className` overrides for gradients, animations, box-shadow, pseudo-elements, or any style that CSS variables don't expose. `themeOverrides` (`--pwauth-*`) still applies; `className` styles layer on top via standard CSS specificity.

## Hooks

### `usePushChainClient(uid?)`

Returns the Push Chain client and its initialization state. `pushChainClient` is `null` until the wallet connects — **always guard before use**. Pass an optional `uid` to target a specific `PushUniversalWalletProvider` instance.

```tsx
const {
  pushChainClient, // PushChainClient | null — null until connected
  isInitialized, // boolean — false while the client is booting
  error, // Error | null — set if initialization fails
} = usePushChainClient();

if (!isInitialized || !pushChainClient) return;
```

### `usePushWalletContext()`

Returns wallet connection state and control actions.

```tsx
const {
  connectionStatus, // PushUI.CONSTANTS.CONNECTION.STATUS
  handleConnectToPushWallet, // () => void — open wallet connection modal
  handleUserLogOutEvent, // () => void — disconnect and clear session
} = usePushWalletContext();
```

Use `connectionStatus` to gate UI. Use `handleConnectToPushWallet` / `handleUserLogOutEvent` when you want to trigger connect/disconnect from your own buttons instead of `PushUniversalAccountButton`.

### `usePushChain()`

Provides direct access to the `PushChain` core SDK — utilities, constants, and the `PushChain.initialize()` method. Use alongside `usePushChainClient()` when you need SDK utilities in a component.

```tsx
import { usePushChain, usePushChainClient } from '@pushchain/ui-kit';

function MyComponent() {
  const { PushChain } = usePushChain();
  const { pushChainClient, isInitialized } = usePushChainClient();

  if (!isInitialized || !pushChainClient) return null;

  const chainAgnostic = PushChain.utils.account.toChainAgnostic(
    pushChainClient.universal.origin.address,
    { chain: pushChainClient.universal.origin.chain }
  );

  return <p>Chain Agnostic Address: {chainAgnostic}</p>;
}
```

---

## Send a Universal Transaction

```tsx
import { usePushChainClient } from '@pushchain/ui-kit';
import { PushChain } from '@pushchain/core';

function MyComponent() {
  const { pushChainClient } = usePushChainClient();

  const send = async () => {
    if (!pushChainClient) return; // guard: null before wallet connects

    const tx = await pushChainClient.universal.sendTransaction({
      to: '0xRecipientAddress',
      value: PushChain.utils.helpers.parseUnits('0.01', 18),
    });
    await tx.wait();
  };

  return <button onClick={send}>Send</button>;
}
```

## Send to an External Chain (Route 2 — via CEA)

```tsx
const tx = await pushChainClient.universal.sendTransaction({
  to: {
    address: '0xContractOnEthereum',
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  },
  data: encodedCalldata,
  funds: {
    amount: PushChain.utils.helpers.parseUnits('1', 6), // 1 USDT
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
  },
});
```

## Prepare + Execute (Cascade Pattern)

Use when you need ordered multi-hop execution across chains in one user signature.

```tsx
const prepared = await pushChainClient.universal.prepareTransaction({
  to: {
    address: '0xContract',
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  },
  data: '0x',
});
const result = await pushChainClient.universal.executeTransactions([prepared]);
await result.waitForAll();
```

## Sign a Message

```tsx
const signature =
  await pushChainClient.universal.signMessage('Hello Push Chain');
```

## Hooks Reference

### `usePushChainClient(uid?)`

| Parameter / Return | Type                      | Description                                                                            |
| ------------------ | ------------------------- | -------------------------------------------------------------------------------------- |
| `uid` _(param)_    | `string`                  | Optional — match a specific `PushUniversalWalletProvider` by `config.uid`              |
| `pushChainClient`  | `PushChainClient \| null` | Initialized client — `null` until connected. Use for all tx, signing, and cascade ops. |
| `isInitialized`    | `boolean`                 | `false` while the client is booting up                                                 |
| `error`            | `Error \| null`           | Set if client initialization fails                                                     |

### `usePushWalletContext()`

| Return value                | Type                                 | Description                                                                       |
| --------------------------- | ------------------------------------ | --------------------------------------------------------------------------------- |
| `connectionStatus`          | `PushUI.CONSTANTS.CONNECTION.STATUS` | Current connection state — compare against `PushUI.CONSTANTS.CONNECTION.STATUS.*` |
| `handleConnectToPushWallet` | `() => void`                         | Open the wallet connection modal                                                  |
| `handleUserLogOutEvent`     | `() => void`                         | Disconnect the wallet and clear the session                                       |

### `usePushChain()`

| Return value | Type        | Description                                                                           |
| ------------ | ----------- | ------------------------------------------------------------------------------------- |
| `PushChain`  | `PushChain` | The `@pushchain/core` SDK — access utilities, constants, and `PushChain.initialize()` |

## Notes

- Reading blockchain state (no transactions) can use ethers.js or viem with the Push Chain RPC URL directly — the SDK is only required for execution and signing.
- RPC URL: `https://evm.donut.rpc.push.org/`

## Downloadable Resources

Copy these files into your project — self-contained and ready to run:

| File                                                                                             | Purpose                                                     |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`package.json`](https://push.org/agents/resources/push-frontend/package.json)                   | Dependencies: @pushchain/ui-kit, React 18, Vite, TypeScript |
| [`app-wrapper.tsx`](https://push.org/agents/resources/push-frontend/app-wrapper.tsx)             | Provider + AccountButton root setup                         |
| [`send-universal-tx.tsx`](https://push.org/agents/resources/push-frontend/send-universal-tx.tsx) | Complete component: Route 1, Route 2, cascade pattern       |

> [Resource index](https://push.org/agents/resources/push-frontend/index.json) — machine-readable file list

## Extended Reference

- [Full wallet connection workflow](https://push.org/agents/workflows/connect-wallet-ui-kit.md)
- [Provider customization](https://push.org/agents/workflows/use-universal-wallet-provider.md)
- [Send universal transaction (all routes, advanced args)](https://push.org/agents/workflows/send-universal-transaction.md)
- [Send multichain transaction](https://push.org/agents/workflows/send-multichain-transaction.md)
- [Track transaction lifecycle](https://push.org/agents/workflows/track-transaction.md)
- [Sign universal message](https://push.org/agents/workflows/sign-universal-message.md)
- [Wallet provider React example](https://push.org/agents/examples/wallet-provider-react.md)
- [Execute transaction examples](https://push.org/agents/examples/execute-transactions.md)
