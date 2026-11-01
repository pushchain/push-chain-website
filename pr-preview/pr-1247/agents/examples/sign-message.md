## Sign Universal Message

## When to Use

Use this when you need to sign arbitrary messages for authentication, off-chain verification, or any use case requiring a cryptographic signature from the user's wallet.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

async function main() {
  // Initialize client
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
  const signer = wallet.connect(provider);
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  // Sign a message
  const message = new TextEncoder().encode('Hello, Push Chain!');
  const signature = await pushChainClient.universal.signMessage(message);

  console.log('Message:', 'Hello, Push Chain!');
  console.log('Signature:', signature);
}

main().catch(console.error);
```

## Key Points

- `signMessage` accepts a `Uint8Array` — use `TextEncoder` to convert strings
- Returns a signature in `Uint8Array` format
- Signing happens on the origin chain using the user's native wallet
- The signature can be verified against the user's UOA (Universal Origin Account)
- No gas is consumed — this is an off-chain operation