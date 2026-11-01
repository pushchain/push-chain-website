## List Explorer URLs

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
// Using ethers for example - You can use any library
// ethers, viem, solana web3js, etc
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

async function main() {
  // Create random wallet
  const wallet = ethers.Wallet.createRandom()

  // Set up provider
  const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org')
  const signer = wallet.connect(provider)

  // Convert to Universal Signer
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);

  // Initialize Push Chain Client
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  // Default: Get explorer URLs for client's chain (Push Chain)
  const pushChainExplorers = pushChainClient.explorer.listUrls();
  console.log('Push Chain explorers:', JSON.stringify(pushChainExplorers, null, 2));

  // Override: Get explorer URLs for Ethereum Sepolia
  const sepoliaExplorers = pushChainClient.explorer.listUrls({
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
  });
  console.log('Sepolia explorers:', JSON.stringify(sepoliaExplorers, null, 2));
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.explorer.listUrls`
