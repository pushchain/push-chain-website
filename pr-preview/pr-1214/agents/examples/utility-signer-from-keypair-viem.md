## Create Universal Signer from Keypair

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core'
import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';
import { createWalletClient, http } from 'viem';
import { sepolia } from 'viem/chains';

async function main() {
  const account = privateKeyToAccount(generatePrivateKey());
  const walletClient = createWalletClient({
    account,
    chain: sepolia,
    transport: http(),
  });

  const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(walletClient, {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    library: PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM,
  })

  console.log(JSON.stringify(universalSigner, null, 2));
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.utils.signer.toUniversalFromKeypair`
