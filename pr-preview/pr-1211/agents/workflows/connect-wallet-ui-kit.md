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
   const walletConfig = {
     network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
     // Optional: custom RPC URLs
     // rpcUrls: { [PushUI.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA]: ['https://...'] }
   };
   ```

3. **Wrap your app with the provider**
   ```tsx
   function App() {
     return (
       <PushUniversalWalletProvider config={walletConfig}>
         <YourAppContent />
       </PushUniversalWalletProvider>
     );
   }
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

```tsx
function WalletStatus() {
  const { connectionStatus, universalSigner } = usePushWalletContext();
  
  if (connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.DISCONNECTED) {
    return <p>Please connect your wallet</p>;
  }
  
  if (connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTING) {
    return <p>Connecting...</p>;
  }
  
  if (connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED) {
    return (
      <div>
        <p>Connected: {universalSigner?.account?.address}</p>
        <p>Chain: {universalSigner?.account?.chain}</p>
      </div>
    );
  }
}
```

### Step 5: Access Push Chain Client with usePushChainClient

```tsx
function TransactionComponent() {
  const { pushChainClient } = usePushChainClient();
  const { connectionStatus } = usePushWalletContext();
  
  const sendTransaction = async () => {
    if (!pushChainClient) {
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

### Step 6: Use usePushChain Hook (Alternative)

For simpler access patterns:

```tsx
function SimpleComponent() {
  const { client, isConnected, account } = usePushChain();
  
  if (!isConnected) {
    return <PushUniversalAccountButton />;
  }
  
  return (
    <div>
      <p>Account: {account?.address}</p>
      {/* Use client for transactions */}
    </div>
  );
}
```

### Complete Example

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushWalletContext,
  usePushChainClient,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <Header />
      <MainContent />
    </PushUniversalWalletProvider>
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
  const { pushChainClient } = usePushChainClient();
  
  if (connectionStatus !== PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED) {
    return <p>Connect your wallet to get started</p>;
  }
  
  return (
    <div>
      <p>Origin: {JSON.stringify(pushChainClient?.universal.origin)}</p>
      <p>Execution Account: {JSON.stringify(pushChainClient?.universal.account)}</p>
    </div>
  );
}

export default App;
```

## Expected Output

### Connection States

```typescript
// usePushWalletContext() returns:
{
  connectionStatus: 'disconnected' | 'connecting' | 'connected',
  universalSigner: UniversalSigner | null,
  disconnect: () => void,
  // Additional context values
}

// usePushChainClient() returns:
{
  pushChainClient: PushChainClient | null,
  // Client is null until connected
}
```

### When Connected

- `PushUniversalAccountButton` displays truncated address
- `usePushWalletContext().universalSigner` is populated
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
- **Multiple hooks available**: `usePushWalletContext` for state, `usePushChainClient` for client, `usePushChain` for combined.
- **Theme customization available**: See UI Kit docs for `ThemeVariables` and button theming.
- **Email login supported**: Push Wallet enables non-crypto users via email authentication.

## MCP Mapping Candidates

- `check_wallet_connection_status` — Return current connection state
- `get_connected_account` — Return connected account details
- `disconnect_wallet` — Programmatically disconnect
- `get_push_chain_client_status` — Check if client is initialized