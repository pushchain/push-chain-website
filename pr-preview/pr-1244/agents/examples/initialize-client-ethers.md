## Initialize Push Chain Client with Ethers.js

## When to Use

Use this when building a backend service, script, or dApp that needs to interact with Push Chain from an Ethereum-based wallet using ethers v6.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

async function main() {
  // Create wallet connected to Ethereum Sepolia
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
  const signer = wallet.connect(provider);

  // Convert to Universal Signer
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);

  // Initialize Push Chain Client
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  console.log('Origin account:', pushChainClient.universal.origin);
  console.log('Execution account (UEA):', pushChainClient.universal.account);
}

main().catch(console.error);
```

## Key Points

- The RPC URL determines the origin chain — Sepolia RPC creates an Ethereum Sepolia origin account
- `toUniversal()` wraps any ethers signer into a UniversalSigner
- `pushChainClient.universal.origin` is your source wallet (UOA)
- `pushChainClient.universal.account` is your Push Chain execution account (UEA)
- No PC token required — gas is paid in native tokens via fee abstraction