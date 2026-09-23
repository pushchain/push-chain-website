## React Wallet Provider Integration

## When to Use

Use this when building a React frontend that needs wallet connection, account display, and Push Chain client access without manually managing signers or SDK initialization.

## Code

```tsx
// main.tsx — provider belongs at root, not inside App
import { createRoot } from 'react-dom/client';
import { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';
import App from './App';

const walletConfig = {
  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
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

function WalletStatus() {
  const { connectionStatus } = usePushWalletContext();
  const { pushChainClient, isInitialized } = usePushChainClient();

  if (connectionStatus !== PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED || !isInitialized || !pushChainClient) {
    return <p>Connect your wallet to continue</p>;
  }

  return (
    <div>
      <p>Origin: {pushChainClient.universal.origin.address}</p>
      <p>Chain: {pushChainClient.universal.origin.chain}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <PushUniversalAccountButton />
      <WalletStatus />
    </div>
  );
}
```

## Key Points

- `PushUniversalWalletProvider` wraps your app and manages wallet state
- `PushUniversalAccountButton` renders a connect/disconnect button with built-in modal
- `usePushWalletContext()` gives access to `connectionStatus` and wallet state
- `usePushChainClient()` returns `{ pushChainClient, isInitialized, error }` — guard with `isInitialized` before use
- Supports multi-chain connections — users can connect from Ethereum, Solana, or email login