---
title: "Send Transaction Example"
url: "https://pushchain.github.io/docs/chain/ui-kit/examples/send-transaction-example/"
section: "ui-kit"
lastUpdated: "2026-09-01T13:23:12Z"
description: "Send Transaction Example | Examples | UI Kit | Push Chain Docs"
---

# Send Transaction Example

This example demonstrates:

-   Basic send transaction functionality using `pushChainClient` of `usePushChainClient`.

## Live playground

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
import { useState } from 'react';
import { PushChain } from '@pushchain/core';

function App() {
  // Define Wallet Config
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

  function Component() {
    const [txnHash, setTxnHash] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { connectionStatus } = usePushWalletContext();
    const { pushChainClient } = usePushChainClient();

    const handleSendTransaction = async () => {
      if (pushChainClient) {
        setIsLoading(true);
        try {
          const res = await pushChainClient.universal.sendTransaction({
            to: '0x0000000000000000000000000000000000042101',
            value: PushChain.utils.helpers.parseUnits('1', 18), // 1 PC in uPC
          });
          setTxnHash(res.hash);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    return (
      <div>
        <PushUniversalAccountButton />

        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED &&
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
            Send Transaction
          </button>
        }
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

## Next Steps

-   Explore [Chain Tools](/push-chain-website/pr-preview/pr-1233/docs/chain/node-and-system-tools/) to learn more about running validators, localnet or everything in between.
-   Dive deeper into concepts of Push Chain in [Deep Dives](/push-chain-website/pr-preview/pr-1233/docs/chain/deep-dives/)
-   Check out step by step implementation of App in end to end [Tutorials](/push-chain-website/pr-preview/pr-1233/docs/chain/tutorials/)
-   Follow or give a shoutout on X to our Intern at [@PushChain](https://x.com/PushChain)!
