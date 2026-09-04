---
title: "Intro to Push Chain"
url: "https://pushchain.github.io/docs/chain/"
section: "chain"
lastUpdated: "2026-09-04T07:14:57Z"
description: "Introduction | Push Chain Docs"
---

# Intro to Push Chain

Push Chain is the first **True Universal Layer 1** blockchain, built as a **100% EVM-compatible** Proof of Stake (PoS) chain. It runs seamlessly across every chain and wallet.

Write your smart contract once, deploy it on Push Chain, and instantly reach users on Ethereum, Solana, and all other supported chains without changing on-chain code.

**Ready to build?**  

-   Follow our [Quickstart](/push-chain-website/pr-preview/pr-1234/docs/chain/quickstart/) to deploy your app in minutes.  
    
-   Explore core abstractions in [Important Concepts](/push-chain-website/pr-preview/pr-1234/docs/chain/important-concepts/).  
    

![Diagram to show how an existing EVM or non-EVM application can be deployed on Push Chain to instantly reach users on Ethereum, Solana, and all other supported chains without changing on-chain code.](/push-chain-website/pr-preview/pr-1234/assets/images/chain_comparision_light-75a87bb77fff65c71df009647c5ceb55.webp)![Diagram to show how an existing EVM or non-EVM application can be deployed on Push Chain to instantly reach users on Ethereum, Solana, and all other supported chains without changing on-chain code.](/push-chain-website/pr-preview/pr-1234/assets/images/chain_comparision_dark-b715327ac979621610708647019caafc.webp)

## Hello Push Chain 👋

-   Ethers (v6) Push Chain
-   Ethers (v6) Sepolia
-   Viem
-   Solana (Web3 JS)
-   UI Kit (React)

VIRTUAL NODE IDE

Copy playground link

Copy code

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
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushWalletContext,
  usePushChainClient,
  PushUI,
} from '@pushchain/ui-kit';
import { useState } from 'react';
import { PushChain } from '@pushchain/core';

function App() {
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

  function Component() {
    const [txnHash, setTxnHash] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { connectionStatus } = usePushWalletContext();
    const { pushChainClient } = usePushChainClient();

    const handleSendTransaction = async () => {
      if (!pushChainClient) return;
      setIsLoading(true);
      try {
        const res = await pushChainClient.universal.sendTransaction({
          to: '0x0000000000000000000000000000000000042101',
          value: PushChain.utils.helpers.parseUnits('0.001', 18), // 0.001 PC
        });
        setTxnHash(res.hash);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div>
        <PushUniversalAccountButton />

        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (
          <button
            disabled={isLoading}
            style={{
              background: 'transparent',
              border: '1px solid',
              borderRadius: '10px',
              padding: '12px 18px',
              cursor: 'pointer',
              margin: '8px 0',
            }}
            onClick={handleSendTransaction}
          >
            {isLoading ? 'Sending...' : 'Send Transaction'}
          </button>
        )}

        {txnHash && (
          <>
            <p>Txn Hash: {txnHash}</p>
            <a
              href={pushChainClient?.explorer.getTransactionUrl(txnHash)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View in Explorer
            </a>
          </>
        )}
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

## Key Innovations (Why Push Chain)

Push Chain provides a unified toolkit to build truly universal dApps. Without custom bridges or multi-chain deployments, you gain:

-   **Universal Smart Contracts**  
    Deploy your existing Solidity contract on Push Chain and instantly become compatible with every chain (even **different layer 1s**).
    
-   **Zero EVM Code Changes**  
    Deploy your existing Solidity contract on Push Chain without modifying ABI, bytecode, or on-chain logic.
    
-   **Single Transaction from any Chain**  
    Send transactions from any chain to Push Chain with just a single transaction, massively reducing the complexity of multi-chain users interaction.
    
-   **Universal Fee Abstraction**  
    Allow users to pay gas fees in their native tokens (for example ETH or SOL). Push Chain automatically routes fees so users do not have to bridge or hold $PC tokens (native token of Push Chain).
    
-   **Wallet Abstraction**  
    Support MetaMask, Phantom, and other wallets as well as social or email login through one unified provider. Users never need to create a new wallet simply to access your dApp.
    
-   **True Native Experience**  
    Users from any chain will always feel that they are **interacting natively** with your App. Drawbacks of multi-chain deployments are eliminated and transactions are natively attributed to the correct chain.
    

## Why Build on Push Chain?

Building on Push Chain delivers immediate benefits for developers and users:

-   **Expand Your Userbase Instantly**  
    Deploy your existing EVM or non-EVM application on Push Chain without any on-chain code changes. Users on Ethereum, Solana, and other supported chains can access your dApp right away.
    
-   **Avoid Audit Friction**  
    Since you do not modify your Solidity code, there is no need for a full re-audit. Simply deploy on Push Chain and use our SDKs to enable universal access.
    
-   **Deliver a Unified, Seamless UX**  
    One application, any wallet. Users can connect with MetaMask, Phantom, or a social/email login and pay gas fees in their native token (for example ETH or SOL). No bridges or extra steps required.
    
-   **Simplify Fee Management**  
    Push Chain automatically routes gas fees under the hood. Users do not need to hold $PC tokens or switch chains to complete transactions.
    
-   **Future-Proof Your Application**  
    Your App can orchestrate cross-chain workflows without building separate adapters. Any added chain support on Push natively flows to your app without any codebase changes.
    
-   **Consistent Developer Tooling**  
    Use one SDK, one set of JSON-RPC endpoints, and a unified API to build and deploy. Whether you prefer **Viem**, **Ethers**, or our **custom client**, the experience is the same across languages and frameworks.
    

## Developer SDKs

## Experience Push Chain

To get started with Push Chain, you can:

1.  **Checkout** [Ballsy App](https://ballsy.push.org) to experience Push Chain. _You can log in with your existing wallet, email, or social accounts._
    
    https://ballsy.push.org
    
2.  **Goto** [Send Transaction Example](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/examples/send-transaction-example/) to learn and play.
3.  **Use our live playgrounds** to experiment with code within our documentation.
4.  **Deep dive into Push Chain** fundamentals, how it works, and developer resources in our comprehensive [Knowledge Base](https://push.org/knowledge).

## Next Steps

-   Explore core abstractions in [Important Concepts](/push-chain-website/pr-preview/pr-1234/docs/chain/important-concepts/)
-   Jump to Frontend Integration via [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/integrate-push-universal-wallet/)
-   Try a full-app walkthrough in [Tutorials](/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/)
-   For deep dives visit our [Knowledge Base](https://push.org/knowledge/)
