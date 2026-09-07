## Sign Typed Data

Source: https://push.org/docs/chain/build/sign-universal-message/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/sign-universal-message/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

async function main() {
  // Using ethers for this demo
  // Set up wallet, provider and signer
  const wallet = ethers.Wallet.createRandom();

  // Setup provide and signer
  const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
  const signer = wallet.connect(provider);

  // Convert to Universal Signer and Initialize Push Chain SDK
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  // Sign Typed Data Example
  console.log('Signing Typed Data...')
  const domain = {
    name: 'Push Chain',
    version: '1',
    chainId: 42101, // Push testnet
    verifyingContract:
      '0x1234567890123456789012345678901234567890',
  };

  const types = {
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallet', type: 'address' },
    ],
  };

  const message = {
    name: 'Alice',
    wallet: '0x9821655B609186a9296261638FA74e1DFBA4AC88',
  };

  // Sign the typed data
  const signature = await pushChainClient.universal.signTypedData({
    domain,
    types,
    primaryType: 'Person',
    message,
  })
  console.log('Typed data signature:', signature)
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.universal.signTypedData`
