## Get Transaction URL

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

  const txHash = '0x828911db033c65de8faab4906cfcb7d13ce225c3cd283534d110414a5b78cf87';

  // Default: Push Chain explorer URL
  const pushChainUrl = pushChainClient.explorer.getTransactionUrl(txHash);
  console.log("Push Chain URL:", pushChainUrl);

  // Override: Ethereum Sepolia explorer URL
  const sepoliaUrl = pushChainClient.explorer.getTransactionUrl(txHash, {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
  });
  console.log("Sepolia URL:", sepoliaUrl);
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.explorer.getTransactionUrl`
