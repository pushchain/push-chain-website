## Sign Universal Message

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

  // Sign Message
  console.log('Signing Message...');
  const messageToSign = new TextEncoder().encode('Hello, Push Chain!');
  const messageSignature = await pushChainClient.universal.signMessage(messageToSign);
  console.log('Message signature:', messageSignature);
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.universal.signMessage`
