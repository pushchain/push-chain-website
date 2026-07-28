## Create Universal Signer

Source: https://push.org/docs/chain/build/create-universal-signer/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/create-universal-signer/) for full context on when to apply this pattern.

## Code

```typescript
// Import Push Chain Core
import { PushChain } from '@pushchain/core';

// Import Solana Web3 JS
import { Keypair } from '@solana/web3.js';

async function main() {
  // Create random wallet
  const solKeypair = Keypair.generate();

  // Convert solana signer to Universal Signer
  const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(
    solKeypair,
    {
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
      library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
    }
  );
  console.log('🔑 Got universal signer');
  console.log(JSON.stringify(universalSigner));
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.utils.signer.toUniversalFromKeypair`
