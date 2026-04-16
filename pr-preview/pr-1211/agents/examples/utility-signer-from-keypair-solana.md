## Create Universal Signer from Keypair

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { Keypair } from '@solana/web3.js';

    async function main() {
      const keypair = Keypair.generate()

      const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(keypair, {
        chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
        library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
      });

      console.log(JSON.stringify(universalSigner, null, 2));
    }

    await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.utils.signer.toUniversalFromKeypair`
