## Create Universal Signer from Keypair

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

async function main() {
  const provider = new ethers.JsonRpcProvider('https://sepolia.gateway.tenderly.co');
  const wallet = ethers.Wallet.createRandom(provider);

  const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(wallet, {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    library: PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6,
  });

  console.log(JSON.stringify(universalSigner, null, 2));
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.utils.signer.toUniversalFromKeypair`
