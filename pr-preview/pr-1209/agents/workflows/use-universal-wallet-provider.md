# Use Universal Wallet Provider

## Purpose

Configure `PushUniversalWalletProvider` with custom options — login methods, theme, chain restrictions, RPC overrides, and layout — to fine-tune wallet connection behavior in React applications.

## When to Use

- Customizing which login methods are available (email, Google, wallets)
- Restricting which chains users can connect from
- Applying dark/light theme or custom brand colors
- Disabling specific social logins or wallets
- Setting custom RPC URLs or block explorers
- Supporting multiple provider instances on one page

## Prerequisites

| Requirement | Details |
|-------------|---------|
| React 18+ | UI Kit requires React hooks and context |
| Package installed | `@pushchain/ui-kit` version ≥1.0.0 |
| Basic integration | App already wrapped with `PushUniversalWalletProvider` |

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `Object` | required | Wallet connection, login, and modal configuration |
| `config.network` | `PushUI.CONSTANTS.PUSH_NETWORK` | required | Target Push Chain network |
| `config.uid` | `string` | `'default'` | Unique identifier for this provider instance |
| `config.rpcUrl` | `string` | Public endpoints | Custom JSON-RPC endpoint |
| `config.login.email` | `boolean` | `true` | Enable email sign-in |
| `config.login.google` | `boolean` | `true` | Enable Google sign-in |
| `config.login.phone` | `boolean` | `true` | Enable phone sign-in |
| `config.login.socials.discord` | `boolean` | `true` | Enable Discord sign-in |
| `config.login.socials.github` | `boolean` | `true` | Enable GitHub sign-in |
| `config.login.socials.x` | `boolean` | `true` | Enable X (Twitter) sign-in |
| `config.login.socials.bluesky` | `boolean` | `true` | Enable Bluesky sign-in |
| `config.login.wallet.enabled` | `boolean` | `true` | Allow external wallet connections |
| `config.login.wallet.chains` | `PushUI.CONSTANTS.CHAIN[]` | All chains | Restrict to specific origin chains |
| `config.login.wallet.excludedChains` | `PushUI.CONSTANTS.CHAIN[]` | `[]` | Exclude specific origin chains |
| `config.chainConfig.rpcUrls` | `Record<CHAIN, string>` | `{}` | Per-chain custom RPC URLs |
| `config.chainConfig.blockExplorers` | `Record<CHAIN, string[]>` | Default explorers | Custom block explorer URLs |
| `config.chainConfig.printTraces` | `boolean` | `false` | Enable debug logging |
| `app` | `Object` | — | App metadata (name, logo) for modal display |
| `themeMode` | `PushUI.CONSTANTS.THEME` | `LIGHT` | `LIGHT` or `DARK` |
| `themeOverrides` | `Object` | — | CSS variable overrides for custom branding |

## Steps

### Basic Setup

```tsx
import { PushUniversalWalletProvider, PushUniversalAccountButton, PushUI } from '@pushchain/ui-kit';

function App() {
  return (
    <PushUniversalWalletProvider
      config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}
    >
      <PushUniversalAccountButton />
    </PushUniversalWalletProvider>
  );
}
```

### Custom Login Methods

```tsx
function App() {
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
    login: {
      email: true,
      google: false,       // disable Google
      phone: false,        // disable phone
      socials: {
        discord: true,
        github: true,
        x: false,          // disable X/Twitter
        bluesky: false,
      },
      wallet: {
        enabled: true,
        chains: [
          PushUI.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
          PushUI.CONSTANTS.CHAIN.SOLANA_DEVNET,
        ],
      },
    },
  };

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <PushUniversalAccountButton />
    </PushUniversalWalletProvider>
  );
}
```

### Dark Theme

```tsx
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

### Custom RPC and App Metadata

```tsx
function App() {
  return (
    <PushUniversalWalletProvider
      config={{
        network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
        chainConfig: {
          rpcUrls: {
            [PushUI.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA]: 'https://my-custom-rpc.example.com',
          },
          printTraces: false,
        },
      }}
      app={{
        name: 'My Universal App',
        logo: 'https://myapp.com/logo.png',
      }}
    >
      <PushUniversalAccountButton />
    </PushUniversalWalletProvider>
  );
}
```

### Multiple Provider Instances (Advanced)

```tsx
function App() {
  return (
    <>
      <PushUniversalWalletProvider
        config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, uid: 'primary' }}
      >
        <PrimarySection />
        <PushUniversalAccountButton uid="primary" />
      </PushUniversalWalletProvider>

      <PushUniversalWalletProvider
        config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, uid: 'secondary' }}
      >
        <SecondarySection />
        <PushUniversalAccountButton uid="secondary" />
      </PushUniversalWalletProvider>
    </>
  );
}
```

## Expected Output

After wrapping with provider, child components can access context:

```typescript
// usePushWalletContext() returns:
{
  connectionStatus: 'disconnected' | 'connecting' | 'connected',
  universalSigner: UniversalSigner | null,
  disconnect: () => void,
}

// usePushChainClient() returns:
{
  pushChainClient: PushChainClient | null,
}
```

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `useContext must be inside Provider` | Hook used outside provider tree | Move component inside `PushUniversalWalletProvider` |
| Modal not appearing | CSS not loaded | Ensure bundler imports UI Kit styles |
| `Invalid network` | Wrong constant used | Use `PushUI.CONSTANTS.PUSH_NETWORK.*` not strings |
| Multiple providers conflicting | No `uid` set | Add unique `uid` to each provider instance |

## Agent Notes

- **Provider must be at root level**: wrap your entire app (or the subtree that needs wallet access).
- **`uid` is required for multiple instances**: each `PushUniversalWalletProvider` on the same page must have a unique `uid`, and pass matching `uid` to `PushUniversalAccountButton`.
- **Login defaults are permissive**: all methods enabled by default; selectively disable what you don't want.
- **`chainConfig.rpcUrls` keys are CAIP-2 strings**: use `PushUI.CONSTANTS.CHAIN.*` values as keys.

## MCP Mapping Candidates

- `configure_wallet_options` — Build wallet config object with login and chain settings
- `apply_theme_overrides` — Set theme mode and custom CSS variables
- `access_wallet_context` — Retrieve connection status and client from context
