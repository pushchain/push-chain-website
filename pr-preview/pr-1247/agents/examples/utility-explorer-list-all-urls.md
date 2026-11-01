## List All Explorer URLs

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

  // Get all explorer URLs for all supported chains
  const allExplorers = pushChainClient.explorer.listAllUrls();
  console.log('All explorers:', JSON.stringify(allExplorers, null, 2));
  console.log('Total chains:', allExplorers.explorers.length);
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
