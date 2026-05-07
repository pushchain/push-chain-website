---
name: push-frontend
description: "Use when building React apps with @pushchain/ui-kit — covers PushUniversalWalletProvider setup, PushUniversalAccountButton, usePushChainClient hook, theme customization, and sending universal transactions (Route 1/2/3) from the browser. Triggers on: 'add wallet connect button in React', 'use @pushchain/ui-kit in Next.js or Vite', 'send universal transaction from browser', 'customize PushUniversalWalletProvider theme'."
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
**Quickstart**: `npx create-universal-dapp` — interactive CLI, choose Next.js or Vite (React SPA); scaffolds the chosen framework with `PushUniversalWalletProvider` pre-wired and a demo transaction component ready to run.

## Install

```bash
npm install @pushchain/ui-kit@latest
# or
npx create-universal-dapp my-app
```

> Interactive CLI — choose between Next.js or Vite (React SPA). Scaffolds `PushUniversalWalletProvider` pre-wired with a demo transaction component.

## Setup — Wrap Your App

`PushUniversalWalletProvider` must be at the root of your component tree (in `main.tsx` / `index.tsx`), not inside `App`.

```tsx
// main.tsx
import { createRoot } from 'react-dom/client';
import { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';
import App from './App';

export const walletConfig = {
  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // required
  themeMode: PushUI.CONSTANTS.THEME.LIGHT, // LIGHT | DARK — controls the whole app theme
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

> ⚠️ **Client-only** — `PushUniversalWalletProvider` uses browser APIs. In Next.js App Router, add `'use client'` at the top of the wrapper file and place the provider in a Client Component in `app/layout.tsx`.

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

| Prop                       | Type                                 | Default                       | Description                                                                                                       |
| -------------------------- | ------------------------------------ | ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `connectButtonText`        | `string`                             | `'Connect Account'`           | Label on the connect button                                                                                       |
| `loadingComponent`         | `React.ReactNode`                    | default loader                | Custom loading indicator while connecting                                                                         |
| `uid`                      | `string`                             | —                             | Match a specific `PushUniversalWalletProvider` by `config.uid` — needed when using multiple wallet instances      |
| `themeOverrides`           | `ThemeOverrides`                     | `{}`                          | CSS variable overrides scoped to this button instance                                                             |
| `loginAppOverride`         | `{ logoUrl?, title?, description? }` | from `app` in provider config | Override app branding on the **login screen** (appears before authentication)                                     |
| `modalAppOverride`         | `{ logoUrl?, title?, description? }` | from `app` in provider config | Override app branding in the **wallet modal** (appears after authentication, when managing the connected account) |
| `customConnectComponent`   | `React.ReactNode`                    | —                             | Replace the entire default connect button with a custom component                                                 |
| `customConnectedComponent` | `React.ReactNode`                    | —                             | Replace the entire connected button with a custom component                                                       |
| `connectButtonClassName`   | `string`                             | —                             | CSS class applied to the default connect button                                                                   |
| `connectedButtonClassName` | `string`                             | —                             | CSS class applied to the default connected button                                                                 |

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

### Canonical guard pattern

Always check `error` before checking `pushChainClient` — silent failures are the most common frontend bug:

```tsx
const { pushChainClient, isInitialized, error } = usePushChainClient();

if (error) return <div role='alert'>{error.message}</div>; // surface initialization failures
if (!isInitialized) return <div>Loading…</div>; // still booting
if (!pushChainClient) return null; // connected, client not yet ready
```

---

### `usePushChainClient(uid?)`

| Parameter / Return | Type                      | Description                                                                            |
| ------------------ | ------------------------- | -------------------------------------------------------------------------------------- |
| `uid` _(param)_    | `string`                  | Optional — match a specific `PushUniversalWalletProvider` by `config.uid`              |
| `pushChainClient`  | `PushChainClient \| null` | Initialized client — `null` until connected. Use for all tx, signing, and cascade ops. |
| `isInitialized`    | `boolean`                 | `false` while the client is booting up                                                 |
| `error`            | `Error \| null`           | Set if client initialization fails — always check before rendering                     |

> Primary hook for all on-chain operations. If you only import one hook, this is it. Pass `uid` only when using multiple `PushUniversalWalletProvider` instances — must match the same `uid` passed to `usePushWalletContext()` and `PushUniversalAccountButton`.

---

### `usePushWalletContext(uid?)`

| Parameter / Return          | Type                                 | Description                                                                                                    |
| --------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `uid` _(param)_             | `string`                             | Optional — must match `config.uid` on the target `PushUniversalWalletProvider` (advanced, multi-instance only) |
| `connectionStatus`          | `PushUI.CONSTANTS.CONNECTION.STATUS` | Current connection state — compare against the enum values below                                               |
| `handleConnectToPushWallet` | `() => void`                         | Open the wallet connection modal                                                                               |
| `handleUserLogOutEvent`     | `() => void`                         | Disconnect the wallet and clear the session                                                                    |

`connectionStatus` values:

- `PushUI.CONSTANTS.CONNECTION.STATUS.NOT_CONNECTED`
- `PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTING`
- `PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED`

> Use `connectionStatus` to gate UI states. Use `handleConnectToPushWallet` / `handleUserLogOutEvent` when building custom connect/disconnect buttons instead of `PushUniversalAccountButton`.

> **`uid` is an advanced pattern** — only needed when running two `PushUniversalWalletProvider` instances simultaneously (e.g. two independent wallet contexts in the same app). In that case, set `config.uid` on each provider and pass the **same uid** to every hook and button targeting that provider: `usePushChainClient('wallet-a')`, `usePushWalletContext('wallet-a')`, `<PushUniversalAccountButton uid='wallet-a' />`. Mismatching or omitting `uid` causes hooks to bind to the wrong provider instance.

---

### `usePushChain()`

Returns the `@pushchain/core` SDK from the UI Kit provider context — utilities, constants, and types. Use this instead of adding `@pushchain/core` as a direct dependency; `@pushchain/ui-kit` already bundles it.

| Return value | Type        | Description                                                                                                                             |
| ------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `PushChain`  | `PushChain` | The `@pushchain/core` SDK — access utilities (`parseUnits`, `encodeTxData`) and constants (`CHAIN`, `MOVEABLE.TOKEN`) inside components |

> **Do not install `@pushchain/core` separately in a UI Kit app.** Use `usePushChain()` to access the SDK — adding `@pushchain/core` to `package.json` duplicates the dependency, risks version drift, and is unnecessary. For transactions and signing, use `usePushChainClient()` instead.

```tsx
import { usePushChainClient, usePushChain } from '@pushchain/ui-kit';

function MyComponent() {
  const { pushChainClient, isInitialized } = usePushChainClient();
  const { PushChain } = usePushChain();

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
// @pushchain/core is bundled in @pushchain/ui-kit — no separate install needed.
// Use usePushChain() to access the SDK; do not add @pushchain/core to package.json.
import { usePushChainClient, usePushChain } from '@pushchain/ui-kit';

function MyComponent() {
  const { pushChainClient } = usePushChainClient();
  const { PushChain } = usePushChain();

  const send = async () => {
    if (!pushChainClient) return; // guard: null before wallet connects

    try {
      const tx = await pushChainClient.universal.sendTransaction({
        to: '0xRecipientAddress',
        value: PushChain.utils.helpers.parseUnits('0.01', 18),
      });
      await tx.wait();
    } catch (err) {
      // wallet rejection or network error — surface to user, don't swallow
    }
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

## Route 3 — CEA Identity on Push Chain

Add `from: { chain }` to use your CEA on an external chain as the execution origin on Push Chain. `msg.sender` inside the target contract will be the CEA, not the UEA.

**Why CEAs exist.** When your Push Chain account first interacts with an external chain (e.g. calling Aave on Ethereum), the protocol deterministically deploys a **Chain Executor Account (CEA)** for you on that chain. This CEA:

1. **Preserves identity** — your actions on Ethereum are traceable to a stable, deterministic address derived from your Push Chain account.
2. **Isolates risk** — the CEA is a dedicated smart account, separate from your home wallet. External-chain actions can’t affect funds outside the CEA.
3. **Enables payload execution** — the CEA is what actually holds assets and executes calldata on the external chain.

**When to use Route 3.** Use it when you need to bring state or assets _back_ to Push Chain from a CEA you’ve already deployed — because only the CEA can speak for what happened on that external chain.

Example flow — a universal vault:

1. Route 2: vault calls Aave on Ethereum via your **Ethereum CEA** to withdraw USDC.
2. **Route 3**: the vault moves the withdrawn USDC from your Ethereum CEA back to Push Chain (`from: { chain: ETHEREUM_SEPOLIA }`) — `msg.sender` on Push Chain is your Ethereum CEA, which holds the tokens.
3. Route 2 again: Push Chain forwards to a Solana lending protocol via your **Solana CEA**.

```tsx
// Bring assets/state back from the Ethereum CEA to Push Chain
const tx = await pushChainClient.universal.sendTransaction({
  from: { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }, // your Ethereum CEA as origin
  to: '0xVaultOnPushChain',
  data: PushChain.utils.helpers.encodeTxData({
    abi,
    functionName: 'depositFromEthereum',
  }),
});
await tx.wait();
// Inside 0xVaultOnPushChain: msg.sender === CEA(Ethereum Sepolia, userAddress)
// The CEA is the only address that can prove “these assets came from your Ethereum side”.
```

```
User → Push vault
  Route 2 → Ethereum CEA → Aave (withdraw USDC)
  Route 3 ← Ethereum CEA → Push vault (receive USDC, msg.sender = Ethereum CEA)
  Route 2 → Solana CEA → Solana lending (deposit)
```

> Route 3 isn’t for new outbound flows — use Route 2 for those. Route 3 is the return path from a CEA you’ve already deployed via prior Route 2 activity.

## Prepare + Execute (Cascade Pattern)

Use when you need ordered multi-hop execution across chains in one user signature. Always use two or more hops — a single-element cascade adds overhead without benefit.

```tsx
const hopA = await pushChainClient.universal.prepareTransaction({
  to: {
    address: '0xContractA',
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  },
  data: callAData,
});
const hopB = await pushChainClient.universal.prepareTransaction({
  to: { address: '0xContractB', chain: PushChain.CONSTANTS.CHAIN.POLYGON_AMOY },
  data: callBData,
});
const result = await pushChainClient.universal.executeTransactions(
  [hopA, hopB],
  {
    progressHook: (progress) => setStatus(progress.message), // progress: { id, title, message, level, response, timestamp }
  }
);
if (!result.success) throw new Error('Cascade failed');
// progressHook event IDs (SEND-TX-001, SEND-TX-999-01, etc.): https://push.org/agents/workflows/progress-hook-events.md
```

## Sign a Message

```tsx
const message = new TextEncoder().encode('Hello Push Chain'); // string also accepted; Uint8Array recommended
const signature = await pushChainClient.universal.signMessage(message); // returns Uint8Array
// To get a hex string: Buffer.from(signature).toString('hex')
```

## Common Mistakes

| Mistake                                                                                       | Fix                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PushUniversalWalletProvider` wrapped inside `App` instead of at the tree root                | Move to `main.tsx` / `index.tsx` — hooks won't resolve without it above every consumer                                                                                                                                                 |
| Calling `sendTransaction` before `isInitialized === true`                                     | Gate with `isInitialized && pushChainClient` check before any tx trigger                                                                                                                                                               |
| Treating `signMessage` return value as a string                                               | It returns `Uint8Array` — use `Buffer.from(sig).toString('hex')` if you need a hex string                                                                                                                                              |
| Forgetting `'use client'` in Next.js App Router                                               | Add `'use client'` to the file that renders `PushUniversalWalletProvider`                                                                                                                                                              |
| Expecting `pushChainClient` to be non-null on first render                                    | It's `null` until wallet connects — always use the canonical guard pattern above                                                                                                                                                       |
| Hooks bind to wrong provider or return stale state (`uid` mismatch across multiple providers) | Pass the **same** `uid` to `usePushChainClient('wallet-a')`, `usePushWalletContext('wallet-a')`, and `<PushUniversalAccountButton uid='wallet-a' />` — omit `uid` entirely unless you are intentionally running two provider instances |

> For read-only state queries (no transactions): use ethers.js or viem directly with `https://evm.donut.rpc.push.org/` (HTTP) or `wss://evm.donut.rpc.push.org` (WebSocket — for `watchBlocks`, event subscriptions). See [read-blockchain-state.md](https://push.org/agents/workflows/read-blockchain-state.md).

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
