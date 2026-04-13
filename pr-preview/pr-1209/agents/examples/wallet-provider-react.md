## React Wallet Provider Integration

## When to Use

Use this when building a React frontend that needs wallet connection, account display, and Push Chain client access without manually managing signers or SDK initialization.

## Code

```tsx
import React from 'react';
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushWalletContext,
  usePushChainClient,
  PushUI,
} from '@pushchain/ui-kit';

function WalletStatus() {
  const { connectionStatus } = usePushWalletContext();
  const { pushChainClient } = usePushChainClient();

  if (connectionStatus !== PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED) {
    return <p>Connect your wallet to continue</p>;
  }

  return (
    <div>
      <p>Origin: {pushChainClient.universal.origin.address}</p>
      <p>Chain: {pushChainClient.universal.origin.chain}</p>
    </div>
  );
}

function App() {
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <div>
        <PushUniversalAccountButton />
        <WalletStatus />
      </div>
    </PushUniversalWalletProvider>
  );
}

export default App;
```

## Key Points

- `PushUniversalWalletProvider` wraps your app and manages wallet state
- `PushUniversalAccountButton` renders a connect/disconnect button with built-in modal
- `usePushWalletContext()` gives access to `connectionStatus` and wallet state
- `usePushChainClient()` returns the initialized `pushChainClient` when connected
- Supports multi-chain connections — users can connect from Ethereum, Solana, or email login