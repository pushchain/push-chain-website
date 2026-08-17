---
title: "Create Universal Signer"
url: "https://pushchain.github.io/docs/chain/build/create-universal-signer/"
section: "build"
lastUpdated: "2026-08-17T16:17:48Z"
description: "Create Universal Signer | Build | Push Chain Docs"
---

# Create Universal Signer

## Overview

Wrap any EVM or non-EVM signer (ethers, viem, Solana, etc.) into a `UniversalSigner` so you can send cross-chain transactions on Push Chain without touching your on-chain code.

> **Prerequisite**  
> Remember to install and import required libraries. See [Quickstart](/push-chain-website/pr-preview/pr-1234/docs/chain/quickstart/) for install steps.

## Create Universal Signer

**_`PushChain.utils.signer.toUniversal(signer): Promise<UniversalSigner>`_**

The most common way to create a Universal Signer is by converting an existing signer from supported libraries (Ethers, Viem, Solana).

-   Ethers (v6)
-   Viem
-   Solana (Web3 JS)

```typescript
// Derive Ethers Signer
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');
const ethersSigner = new ethers.Wallet('<PRIVATE_KEY>', provider);

// Convert to Universal Signer
const universalSigner = await PushChain.utils.signer.toUniversal(ethersSigner);
```

Provider determines the chain of the account

-   RPC URL picks the chain – Sepolia RPC → Ethereum Sepolia, Donut RPC → Push Chain Testnet

```typescript
// Derive Wallet Client
const account = privateKeyToAccount('<PRIVATE_KEY>');
const viemClient = createWalletClient({
  transport: http('<RPC_URL>'), // or your preferred RPC URL
  account,
});

// Convert to Universal Signer
const universalSigner = await PushChain.utils.signer.toUniversal(viemClient);
```

Provider determines the chain of the account

-   RPC URL picks the chain – Sepolia RPC → Ethereum Sepolia, Donut RPC → Push Chain Testnet

```typescript
// Derive Solana Keypair
const solKeypair = Keypair.generate();

// Convert Keypair to Universal Signer
const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(
  solKeypair,
  {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
  }
);
```

These`Arguments`are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`signer`_ | `viem.WalletClient` | `ethers.Wallet` | `UniversalSignerSkeleton` | The signer to convert to Universal Signer format. |

Returns \`UniversalSigner\` <object>

```typescript
// UniversalSigner object
{
  account: {
    address: '0x32DE7d63C654d18F1382f5a30Ef69CB86b399ac7',
    chain: 'eip155:11155111'
  },
  signMessage: [Function: signMessage],
  signAndSendTransaction: [Function: signAndSendTransaction],
  signTypedData: [Function: signTypedData]
}
```

**Ready to dive in?** Try the code in live playground 👇.

-   Ethers (v6)
-   Viem
-   Solana (Web3 JS)
-   UI Kit (Frontend / Abstracted)

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
// Import necessary components from @pushchain/ui-kit
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushWalletContext,
  usePushChainClient,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  // Define Wallet Config
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

  function Component() {
    const { connectionStatus } = usePushWalletContext();
    const { pushChainClient } = usePushChainClient();

    return (
      <div>
        <PushUniversalAccountButton />

        {connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED &&
          <p>Push Chain Client Initialized with Universal Signer: ${JSON.stringify(pushChainClient)}</p>
        }
      </div>
    );
  }

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <Component />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

## Next Steps

-   [Initialize Push Chain Client](/push-chain-website/pr-preview/pr-1234/docs/chain/build/initialize-push-chain-client/) with the Universal Signer
-   Abstract away creation of the Universal Signer using [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/)
-   Learn how to create [Universal Signer from public / private keypair](/push-chain-website/pr-preview/pr-1234/docs/chain/build/utility-functions/#create-universal-signer-from-keypair)
-   Create [custom implementation](/push-chain-website/pr-preview/pr-1234/docs/chain/build/advanced/custom-universal-signer/) of universal signer (Advanced)
