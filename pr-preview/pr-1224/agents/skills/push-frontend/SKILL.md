---
name: push-frontend
description: "Use when building React apps with @pushchain/ui-kit - covers PushUniversalWalletProvider setup, PushUniversalAccountButton, usePushChainClient hook, theme customization, and sending universal transactions (Route 1/2/3) from the browser. Triggers on: 'add wallet connect button in React', 'use @pushchain/ui-kit in Next.js or Vite', 'send universal transaction from browser', 'customize PushUniversalWalletProvider theme'."
id: push-frontend
intent: Enable universal transactions in a React frontend app
package: '@pushchain/ui-kit'
package_version: 6.0.9
current_sdk_version: 6.0.9
entry: 'usePushChainClient'
resources: 'https://push.org/agents/resources/push-frontend/index.json'
references:
  - references/ui-components.md
---

# Skill: Universal Transactions - Frontend (React)

**Intent**: Enable users to connect their wallet and execute universal transactions from a React app.
**Package**: `@pushchain/ui-kit` - bundles `@pushchain/core`, no separate install needed.
**Quickstart**: `npx create-universal-dapp` - interactive CLI, choose Next.js or Vite (React SPA); scaffolds the chosen framework with `PushUniversalWalletProvider` pre-wired and a demo transaction component ready to run.

> **Full agent layer:** [push.org/llms.txt](https://push.org/llms.txt) indexes every skill, workflow, example, error code, constant, and routing decision in the Push Chain agent layer. Pull it when this skill points outside its domain — cross-skill context, unknown progress-hook IDs, error recovery, or constants lookups.

> **PUSD stablecoin?** For minting, redeeming, or integrating **PUSD** (par-backed) and **PUSD+** (yield-bearing) — both native on Push Chain Donut — see the dedicated [push-pusd skill](https://pusd.push.org/agents/skill/push-pusd/SKILL.md) (or [pusd.push.org/llms.txt](https://pusd.push.org/llms.txt) for the full PUSD agent-layer index: ABIs, deployment addresses, examples). Covers cross-chain mint/redeem from any supported chain, NAV mechanics, and the three-tier redemption fulfillment (instant/convert/queue).

## Install

```bash
npm install @pushchain/ui-kit@latest
# or
npx create-universal-dapp my-app
```

> Interactive CLI - choose between Next.js or Vite (React SPA). Scaffolds `PushUniversalWalletProvider` pre-wired with a demo transaction component.

## Setup - Wrap Your App

`PushUniversalWalletProvider` must be at the root of your component tree (in `main.tsx` / `index.tsx`), not inside `App`.

```tsx
// main.tsx
import { createRoot } from 'react-dom/client';
import { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <PushUniversalWalletProvider
    config={{
      network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // required
      login: {
        email: true,            // email login (Push Wallet)
        google: true,           // Google OAuth login
        wallet: { enabled: true }, // external wallet login (MetaMask, WalletConnect, etc.)
      },
    }}
    app={{
      title: 'My App',         // shown in the wallet connection modal
      description: 'App tagline', // shown below the title in the modal
    }}
    themeMode={PushUI.CONSTANTS.THEME.LIGHT} // LIGHT | DARK - controls the whole app theme
  >
    <App />
  </PushUniversalWalletProvider>
);
```

> ⚠️ **Provider prop shape.** `app`, `themeMode`, and `themeOverrides` are **top-level props** on `PushUniversalWalletProvider`, NOT nested inside `config`. `config` only holds `network`, `login`, `uid`, `rpcUrl`, `modal`, `chainConfig`, `version`. Inside `login`, the wallet option is `wallet: { enabled: true }` (object form) — passing `wallet: true` as a bare boolean does not enable external wallet login and leaves `pushChainClient` null after connect.

```tsx
// App.tsx - PushUniversalAccountButton can go anywhere inside the provider
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

> ⚠️ **Client-only** - `PushUniversalWalletProvider` uses browser APIs. In Next.js App Router, add `'use client'` at the top of the wrapper file and place the provider in a Client Component in `app/layout.tsx`.

Provider customization (theme, network, wallet options): https://push.org/agents/workflows/use-universal-wallet-provider.md

## PushUniversalAccountButton

A state-aware button that handles the full connection flow - not connected → authentication → connected account display. Must be rendered inside `PushUniversalWalletProvider`.

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
| `uid`                      | `string`                             | -                             | Match a specific `PushUniversalWalletProvider` by `config.uid` - needed when using multiple wallet instances      |
| `themeOverrides`           | `ThemeOverrides`                     | `{}`                          | CSS variable overrides scoped to this button instance                                                             |
| `loginAppOverride`         | `{ logoUrl?, title?, description? }` | from `app` in provider config | Override app branding on the **login screen** (appears before authentication)                                     |
| `modalAppOverride`         | `{ logoUrl?, title?, description? }` | from `app` in provider config | Override app branding in the **wallet modal** (appears after authentication, when managing the connected account) |
| `customConnectComponent`   | `React.ReactNode`                    | -                             | Replace the entire default connect button with a custom component                                                 |
| `customConnectedComponent` | `React.ReactNode`                    | -                             | Replace the entire connected button with a custom component                                                       |
| `connectButtonClassName`   | `string`                             | -                             | CSS class applied to the default connect button                                                                   |
| `connectedButtonClassName` | `string`                             | -                             | CSS class applied to the default connected button                                                                 |

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

### Advanced CSS - className overrides

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

Always check `error` before checking `pushChainClient` - silent failures are the most common frontend bug:

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
| `uid` _(param)_    | `string`                  | Optional - match a specific `PushUniversalWalletProvider` by `config.uid`              |
| `pushChainClient`  | `PushChainClient \| null` | Initialized client - `null` until connected. Use for all tx, signing, and cascade ops. |
| `isInitialized`    | `boolean`                 | `false` while the client is booting up                                                 |
| `error`            | `Error \| null`           | Set if client initialization fails - always check before rendering                     |

> Primary hook for all on-chain operations. If you only import one hook, this is it. Pass `uid` only when using multiple `PushUniversalWalletProvider` instances - must match the same `uid` passed to `usePushWalletContext()` and `PushUniversalAccountButton`.

---

### `usePushWalletContext(uid?)`

| Parameter / Return          | Type                                 | Description                                                                                                    |
| --------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `uid` _(param)_             | `string`                             | Optional - must match `config.uid` on the target `PushUniversalWalletProvider` (advanced, multi-instance only) |
| `connectionStatus`          | `PushUI.CONSTANTS.CONNECTION.STATUS` | Current connection state - compare against the enum values below                                               |
| `handleConnectToPushWallet` | `() => void`                         | Open the wallet connection modal                                                                               |
| `handleUserLogOutEvent`     | `() => void`                         | Disconnect the wallet and clear the session                                                                    |

`connectionStatus` values:

- `PushUI.CONSTANTS.CONNECTION.STATUS.NOT_CONNECTED`
- `PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTING`
- `PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED`

> Use `connectionStatus` to gate UI states. Use `handleConnectToPushWallet` / `handleUserLogOutEvent` when building custom connect/disconnect buttons instead of `PushUniversalAccountButton`.

> **`uid` is an advanced pattern** - only needed when running two `PushUniversalWalletProvider` instances simultaneously (e.g. two independent wallet contexts in the same app). In that case, set `config.uid` on each provider and pass the **same uid** to every hook and button targeting that provider: `usePushChainClient('wallet-a')`, `usePushWalletContext('wallet-a')`, `<PushUniversalAccountButton uid='wallet-a' />`. Mismatching or omitting `uid` causes hooks to bind to the wrong provider instance.

---

### `usePushChain()`

Returns the `@pushchain/core` SDK from the UI Kit provider context - utilities, constants, and types. Use this instead of adding `@pushchain/core` as a direct dependency; `@pushchain/ui-kit` already bundles it.

| Return value | Type        | Description                                                                                                                             |
| ------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `PushChain`  | `PushChain` | The `@pushchain/core` SDK - access utilities (`parseUnits`, `encodeTxData`) and constants (`CHAIN`, `MOVEABLE.TOKEN`) inside components |

> **Do not install `@pushchain/core` separately in a UI Kit app.** Use `usePushChain()` to access the SDK - adding `@pushchain/core` to `package.json` duplicates the dependency, risks version drift, and is unnecessary. For transactions and signing, use `usePushChainClient()` instead.

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
// @pushchain/core is bundled in @pushchain/ui-kit - no separate install needed.
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
      // wallet rejection or network error - surface to user, don't swallow
    }
  };

  return <button onClick={send}>Send</button>;
}
```

## Send to an External Chain (Route 2 - via CEA)

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

## Route 3 - CEA Identity on Push Chain

Add `from: { chain }` to use your CEA on an external chain as the execution origin on Push Chain. `msg.sender` inside the target contract will be the CEA, not the UEA.

**Why CEAs exist.** When your Push Chain account first interacts with an external chain (e.g. calling Aave on Ethereum), the protocol deterministically deploys a **Chain Executor Account (CEA)** for you on that chain. This CEA:

1. **Preserves identity** - your actions on Ethereum are traceable to a stable, deterministic address derived from your Push Chain account.
2. **Isolates risk** - the CEA is a dedicated smart account, separate from your home wallet. External-chain actions can’t affect funds outside the CEA.
3. **Enables payload execution** - the CEA is what actually holds assets and executes calldata on the external chain.

**When to use Route 3.** Use it when you need to bring state or assets _back_ to Push Chain from a CEA you’ve already deployed - because only the CEA can speak for what happened on that external chain.

Example flow - a universal vault:

1. Route 2: vault calls Aave on Ethereum via your **Ethereum CEA** to withdraw USDC.
2. **Route 3**: the vault moves the withdrawn USDC from your Ethereum CEA back to Push Chain (`from: { chain: ETHEREUM_SEPOLIA }`) - `msg.sender` on Push Chain is your Ethereum CEA, which holds the tokens.
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

> Route 3 isn’t for new outbound flows - use Route 2 for those. Route 3 is the return path from a CEA you’ve already deployed via prior Route 2 activity.

## Prepare + Execute (Cascade Pattern)

Use when you need ordered multi-hop execution across chains in one user signature. Always use two or more hops - a single-element cascade adds overhead without benefit.

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

## EIP-712 Typed-Data Signing (Cross-Chain Wallets)

Use this section when your dApp asks the **connected wallet** to sign an EIP-712 `PaymentRequest` (or any other typed-data payload) that will be verified by a contract on Push Chain. EVM origins only - Solana wallets cannot produce EIP-712 signatures and `signTypedData` will throw `Typed data signing is not supported for Solana`.

### The trap

EIP-712's `domain` includes a `chainId` field. MetaMask (and most other injected wallets) enforce that **`domain.chainId` must equal the wallet's currently active chainId** at signing time. So a wallet sitting on Ethereum Sepolia (`11155111`) cannot directly sign a payload whose domain says `chainId: 42101` (Push Chain Donut). The wallet rejects with:

```
Provided chainId "42101" must match the active chainId "11155111"
```

This is correct anti-replay behavior on the wallet's side. It is the friction point that the universal-account model exists to remove.

### The pattern

Sign with the wallet's **origin chainId** in the domain — never hardcode Push Chain's chainId. Verify on Push Chain by recovering the signer (which is the user's EOA on their origin chain) and resolving it to their UEA via `IUEAFactory.getUEAForOrigin(...)`.

Use `pushChainClient.universal.signTypedData(...)` rather than calling the wallet directly. The SDK routes through the same signer the provider already holds, so it works for any connected EVM wallet (MetaMask, WalletConnect, ethers, viem) without grabbing `window.ethereum`.

```tsx
import { usePushChainClient } from '@pushchain/ui-kit';

const { pushChainClient } = usePushChainClient();
if (!pushChainClient) return; // gate on connection - see canonical guard pattern above

// 1. Read the wallet's origin chain from the SDK — DO NOT hardcode Push Chain's chainId.
const origin = pushChainClient.universal.origin; // { address: '0x...', chain: CHAIN }
const originChainId = Number(origin.chain.split(':')[1]); // CHAIN is a CAIP-2 string, e.g. 'eip155:11155111'

// 2. Build EIP-712 domain with the wallet's *current* chainId, not Push Chain's.
const domain = {
  name: 'MyApp',
  version: '1',
  chainId: originChainId,                       // the wallet's chain, not Push Chain's
  verifyingContract: '0xYourContractOnPushChain',
};

const types = {
  PaymentRequest: [
    { name: 'recipient', type: 'address' },
    { name: 'amount', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'originChainId', type: 'uint256' },
  ],
};

// 3. Sign through the SDK - it delegates to the wallet's signTypedData.
const sigHex = await pushChainClient.universal.signTypedData({
  domain,
  types,
  primaryType: 'PaymentRequest',
  message: value,
});

// 4. The signed payload must also carry the originChainId + origin address so the
//    Push Chain contract can rebuild the same domain during verification and resolve
//    the signer's UEA via the factory precompile.
const requestForChain = {
  ...value,
  originChainId,
  originAddress: origin.address,
  signature: sigHex,
};
```

### Verifying on Push Chain (Solidity)

The companion contract must rebuild the EIP-712 domain with `req.originChainId`, recover the signer, and resolve their UEA via `IUEAFactory.getUEAForOrigin`. Skeleton:

```solidity
bytes32 domainSeparator = keccak256(abi.encode(
    keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
    keccak256("MyApp"),
    keccak256("1"),
    req.originChainId,            // dynamic, NOT block.chainid
    address(this)
));
bytes32 digest = keccak256(abi.encodePacked("\x19\x01", domainSeparator, structHash));
address signer = ECDSA.recover(digest, sig);

if (req.originChainId == block.chainid) {
    require(signer == req.recipient, "bad signer (push-native)");  // Push-native EOA — no UEA
} else {
    (address uea, ) = IUEAFactory(0x00000000000000000000000000000000000000eA).getUEAForOrigin(
        UniversalAccountId({
            chainNamespace: "eip155",
            chainId: Strings.toString(req.originChainId),
            owner: abi.encodePacked(signer)
        })
    );
    require(uea == req.recipient, "bad signer (cross-chain)");
}
```

> **Full contract pattern with replay protection, ERC-1271 fallback, and anti-patterns:** see [push-contracts skill — Verifying EIP-712 Signatures from Cross-Chain Wallets](https://push.org/agents/skills/push-contracts/SKILL.md#verifying-eip-712-signatures-from-cross-chain-wallets).

### Alternative: ERC-1271

For wallets that implement ERC-1271 (multisigs, account-abstraction wallets, UEAs themselves once they support it), skip the EOA-recover dance and call `IERC1271(recipient).isValidSignature(digest, sig)`. This is more general but the recipient address must be a contract that implements ERC-1271.

### Anti-patterns

| Don't | Why | Do |
| --- | --- | --- |
| Hardcode `chainId: 42101` in the EIP-712 domain when the user signs from MetaMask | Wallet rejects — chainId mismatch with active chain | Read `originChainId` from `pushChainClient.universal.origin.chain` |
| Ask the user to switch their wallet to Push Chain just to sign | Defeats the universal-account UX entirely | Sign on origin chain, verify cross-chain via UEAFactory |
| Use `block.chainid` inside the contract's EIP-712 domain | Locks the contract to one chain and one signing path | Build domain dynamically from `req.originChainId` |
| Sign the EIP-712 digest as a raw `signMessage` to bypass the chainId check | Loses EIP-712 structured display in the wallet (user sees opaque hex), and the verifier must use `eth_sign` style recovery | Use `signTypedData` properly with the right chainId |
| Grab `window.ethereum` to sign typed data | Skips the SDK's signer abstraction, only works for injected wallets, breaks for WalletConnect / Push Wallet users | Call `pushChainClient.universal.signTypedData(...)` — same wallet, no provider gymnastics |

## Common Mistakes

| Mistake                                                                                       | Fix                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PushUniversalWalletProvider` wrapped inside `App` instead of at the tree root                | Move to `main.tsx` / `index.tsx` - hooks won't resolve without it above every consumer                                                                                                                                                 |
| Calling `sendTransaction` before `isInitialized === true`                                     | Gate with `isInitialized && pushChainClient` check before any tx trigger                                                                                                                                                               |
| Treating `signMessage` return value as a string                                               | It returns `Uint8Array` - use `Buffer.from(sig).toString('hex')` if you need a hex string                                                                                                                                              |
| Forgetting `'use client'` in Next.js App Router                                               | Add `'use client'` to the file that renders `PushUniversalWalletProvider`                                                                                                                                                              |
| Expecting `pushChainClient` to be non-null on first render                                    | It's `null` until wallet connects - always use the canonical guard pattern above                                                                                                                                                       |
| Hooks bind to wrong provider or return stale state (`uid` mismatch across multiple providers) | Pass the **same** `uid` to `usePushChainClient('wallet-a')`, `usePushWalletContext('wallet-a')`, and `<PushUniversalAccountButton uid='wallet-a' />` - omit `uid` entirely unless you are intentionally running two provider instances |
| Treating `pushChainClient.universal.account` as `{ address }` object — `account.address` returns `undefined` | `account` is a **plain address string**, not an object. Read it directly: ``const me = pushChainClient.universal.account; // `0x${string}` ``. Only `origin` is the `{ address, chain }` shape. |
| Wallet throws `Provided chainId "42101" must match the active chainId "<N>"` when signing EIP-712 | Don't hardcode Push Chain's chainId in the typed-data domain. Read `pushChainClient.universal.origin.chain`, stamp the origin chainId into the domain, sign via `pushChainClient.universal.signTypedData(...)`, and resolve the signer's UEA on the contract side via `IUEAFactory.getUEAForOrigin`. See [EIP-712 Typed-Data Signing](#eip-712-typed-data-signing-cross-chain-wallets). |
| `wallet: true` in `login` config — `pushChainClient` stays `null` after external-wallet connect | Use the object form `wallet: { enabled: true }`. The bare boolean is silently ignored by the provider. See [Setup - Wrap Your App](#setup---wrap-your-app). |
| `app`, `themeMode`, `themeOverrides` placed inside `config` — they're ignored and the provider falls back to defaults | These are **top-level props** on `PushUniversalWalletProvider`, NOT keys in `config`. `config` carries `network`, `login`, `uid`, `rpcUrl`, `modal`, `chainConfig`, `version`. |

> For read-only state queries (no transactions): use ethers.js or viem directly with `https://evm.donut.rpc.push.org/` (HTTP) or `wss://evm.donut.rpc.push.org` (WebSocket - for `watchBlocks`, event subscriptions). See [read-blockchain-state.md](https://push.org/agents/workflows/read-blockchain-state.md).

## Downloadable Resources

Copy these files into your project - self-contained and ready to run:

| File                                                                                             | Purpose                                                     |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`package.json`](https://push.org/agents/resources/push-frontend/package.json)                   | Dependencies: @pushchain/ui-kit, React 18, Vite, TypeScript |
| [`app-wrapper.tsx`](https://push.org/agents/resources/push-frontend/app-wrapper.tsx)             | Provider + AccountButton root setup                         |
| [`send-universal-tx.tsx`](https://push.org/agents/resources/push-frontend/send-universal-tx.tsx) | Complete component: Route 1, Route 2, cascade pattern       |

> [Resource index](https://push.org/agents/resources/push-frontend/index.json) - machine-readable file list

## Extended Reference

- [Full wallet connection workflow](https://push.org/agents/workflows/connect-wallet-ui-kit.md)
- [Provider customization](https://push.org/agents/workflows/use-universal-wallet-provider.md)
- [Send universal transaction (all routes, advanced args)](https://push.org/agents/workflows/send-universal-transaction.md)
- [Send multichain transaction](https://push.org/agents/workflows/send-multichain-transaction.md)
- [Track transaction lifecycle](https://push.org/agents/workflows/track-transaction.md)
- [Sign universal message](https://push.org/agents/workflows/sign-universal-message.md)
- [Wallet provider React example](https://push.org/agents/examples/wallet-provider-react.md)
- [Execute transaction examples](https://push.org/agents/examples/execute-transactions.md)
