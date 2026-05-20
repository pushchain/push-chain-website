# Connect Wallet with UI Kit

## Purpose

Integrate Push Universal Wallet into a React application using `@pushchain/ui-kit`, providing automatic wallet connection, universal signer creation, and Push Chain client initialization with minimal code.

## When to Use

- Building React/Next.js frontend applications
- When you want wallet connection UI handled automatically
- To support multiple wallet types (MetaMask, WalletConnect, Coinbase, etc.)
- For email login support for non-crypto users
- When you need automatic `pushChainClient` initialization after wallet connection

## Prerequisites

| Requirement | Details |
|-------------|---------|
| React 18+ | UI Kit uses React hooks and context |
| Package installed | `@pushchain/ui-kit` version ≥1.0.0 |
| Build tool | Vite, Next.js, or webpack-based bundler |

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `walletConfig.network` | `PushUI.CONSTANTS.PUSH_NETWORK` | Yes | Target Push Chain network |
| `walletConfig.rpcUrls` | `Partial<Record<CHAIN, string[]>>` | No | Custom RPC endpoints |
| `walletConfig.blockExplorers` | `Partial<Record<CHAIN, string[]>>` | No | Custom explorer URLs |
| Theme props | Various | No | UI customization options |

## Steps

### Step 1: Install UI Kit Package

```bash
npm install @pushchain/ui-kit
# or
yarn add @pushchain/ui-kit
# or
pnpm add @pushchain/ui-kit
```

### Step 2: Wrap App with PushUniversalWalletProvider

1. **Import required components**
   ```tsx
   import {
     PushUniversalWalletProvider,
     PushUniversalAccountButton,
     usePushWalletContext,
     usePushChainClient,
     PushUI,
   } from '@pushchain/ui-kit';
   ```

2. **Define wallet configuration**
   ```tsx
   export const walletConfig = {
     network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // required
     app: {
       title: 'My App',            // app name shown in the wallet modal
       description: 'App tagline', // subtitle shown in the wallet modal
     },
     login: {
       email: true,   // Push Wallet email login
       google: true,  // Google OAuth login
       wallet: true,  // external wallets (MetaMask, WalletConnect, etc.)
     },
   };
   ```

   | Field | Type | Required | Description |
   |---|---|---|---|
   | `network` | `PUSH_NETWORK` | Yes | Target network - use `PushUI.CONSTANTS.PUSH_NETWORK.TESTNET` |
   | `app.title` | `string` | No | App name displayed in the wallet connection modal |
   | `app.description` | `string` | No | App tagline displayed below the title in the modal |
   | `login.email` | `boolean` | No | Enable Push Wallet email login (default: false) |
   | `login.google` | `boolean` | No | Enable Google OAuth login (default: false) |
   | `login.wallet` | `boolean` | No | Enable external wallet login - MetaMask, WalletConnect, etc. (default: true) |

3. **Wrap your app at the root level** (`main.tsx` / `index.tsx`)
   ```tsx
   // main.tsx
   import { createRoot } from 'react-dom/client';
   import App from './App';

   createRoot(document.getElementById('root')!).render(
     <PushUniversalWalletProvider config={walletConfig}>
       <App />
     </PushUniversalWalletProvider>
   );
   ```

### Step 3: Add Connect Button

```tsx
function Header() {
  return (
    <nav>
      <PushUniversalAccountButton />
    </nav>
  );
}
```

The button automatically:
- Shows "Connect Wallet" when disconnected
- Opens wallet selection modal on click
- Shows connected account address when connected
- Provides disconnect option

### Step 4: Access Connection State with usePushWalletContext

`usePushWalletContext()` returns wallet state and control actions:

| Return value | Type | Description |
|---|---|---|
| `connectionStatus` | `PushUI.CONSTANTS.CONNECTION.STATUS` | Current connection state - compare against `PushUI.CONSTANTS.CONNECTION.STATUS.*` values |
| `handleConnectToPushWallet` | `() => void` | Open the wallet connection modal (use when building a custom connect button instead of `PushUniversalAccountButton`) |
| `handleUserLogOutEvent` | `() => void` | Disconnect the wallet and clear the session |

```tsx
function WalletStatus() {
  const {
    connectionStatus,
    handleConnectToPushWallet,
    handleUserLogOutEvent,
  } = usePushWalletContext();

  if (connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.NOT_CONNECTED) {
    return <button onClick={handleConnectToPushWallet}>Connect Wallet</button>;
  }

  if (connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTING) {
    return <p>Connecting...</p>;
  }

  return (
    <div>
      <p>Wallet connected</p>
      <button onClick={handleUserLogOutEvent}>Disconnect</button>
    </div>
  );
}
```

### Step 5: Access Push Chain Client with usePushChainClient

```tsx
function TransactionComponent() {
  const { pushChainClient, isInitialized, error } = usePushChainClient();
  const { connectionStatus } = usePushWalletContext();

  const sendTransaction = async () => {
    if (!isInitialized || !pushChainClient) {
      console.error('Client not initialized');
      return;
    }
    
    const txResponse = await pushChainClient.universal.sendTransaction({
      to: '0xRecipient',
      value: BigInt('100000000000000000'),
    });
    
    console.log('Transaction hash:', txResponse.hash);
  };
  
  if (connectionStatus !== PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED) {
    return <p>Connect wallet to send transactions</p>;
  }
  
  return (
    <button onClick={sendTransaction}>
      Send 0.1 PC
    </button>
  );
}
```

### Step 6: Use usePushChain Hook

`usePushChain()` provides direct access to the `PushChain` core SDK. Use it alongside `usePushChainClient()` when you need SDK utilities (constants, account helpers, etc.) inside a component.

```tsx
function ChainUtilsComponent() {
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

### Complete Example

```tsx
// main.tsx
import { createRoot } from 'react-dom/client';
import {
  PushUniversalWalletProvider,
  PushUI,
} from '@pushchain/ui-kit';
import App from './App';

export const walletConfig = {
  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  app: {
    title: 'My Universal App',
    description: 'Built on Push Chain',
  },
  login: {
    email: true,
    google: true,
    wallet: true,
  },
};

createRoot(document.getElementById('root')!).render(
  <PushUniversalWalletProvider config={walletConfig}>
    <App />
  </PushUniversalWalletProvider>
);
```

```tsx
// App.tsx
import {
  PushUniversalAccountButton,
  usePushWalletContext,
  usePushChainClient,
  PushUI,
} from '@pushchain/ui-kit';

export default function App() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>My Universal App</h1>
      <PushUniversalAccountButton />
    </header>
  );
}

function MainContent() {
  const { connectionStatus } = usePushWalletContext();
  const { pushChainClient, isInitialized } = usePushChainClient();

  if (connectionStatus !== PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED || !isInitialized || !pushChainClient) {
    return <p>Connect your wallet to get started</p>;
  }

  return (
    <div>
      <p>Origin: {JSON.stringify(pushChainClient.universal.origin)}</p>
      <p>Execution Account: {JSON.stringify(pushChainClient.universal.account)}</p>
    </div>
  );
}
```

## Expected Output

### Connection States

```typescript
// usePushWalletContext() returns:
{
  connectionStatus: PushUI.CONSTANTS.CONNECTION.STATUS, // NOT_CONNECTED | CONNECTING | CONNECTED
  handleConnectToPushWallet: () => void,
  handleUserLogOutEvent: () => void,
}

// usePushChainClient(uid?) returns:
{
  pushChainClient: PushChainClient | null, // null until wallet connects
  isInitialized: boolean,                  // false while booting
  error: Error | null,                     // set if initialization fails
}
```

### When Connected

- `PushUniversalAccountButton` displays truncated address
- `usePushWalletContext().connectionStatus` is `PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED`
- `usePushChainClient().pushChainClient` is ready for transactions

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `useContext must be inside Provider` | Component outside `PushUniversalWalletProvider` | Wrap component tree with provider |
| `pushChainClient is null` | Accessing client before connection | Check `connectionStatus === CONNECTED` first |
| `Module not found: @pushchain/ui-kit` | Package not installed | Run `npm install @pushchain/ui-kit` |
| Wallet modal not appearing | CSS not loaded or z-index conflict | Check bundler includes UI Kit styles |
| `Invalid network configuration` | Wrong network constant | Use `PushUI.CONSTANTS.PUSH_NETWORK.*` |

## Agent Notes

- **Provider must wrap entire app**: Place `PushUniversalWalletProvider` at root level.
- **Client is null until connected**: Always check `connectionStatus` before using `pushChainClient`.
- **Universal Signer is auto-created**: UI Kit handles `toUniversal()` conversion internally.
- **Multiple hooks available**: `usePushWalletContext` for connection state/actions, `usePushChainClient` for the initialized client, `usePushChain` for the `PushChain` core SDK (utilities, constants).
- **Theme customization available**: See UI Kit docs for `ThemeVariables` and button theming.
- **Email login supported**: Push Wallet enables non-crypto users via email authentication.

## MCP Mapping Candidates

- `check_wallet_connection_status` - Return current connection state
- `get_connected_account` - Return connected account details
- `disconnect_wallet` - Programmatically disconnect
- `get_push_chain_client_status` - Check if client is initialized