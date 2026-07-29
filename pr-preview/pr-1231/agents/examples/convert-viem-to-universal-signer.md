## Create Universal Signer

Source: https://push.org/docs/chain/build/create-universal-signer/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/create-universal-signer/) for full context on when to apply this pattern.

## Code

```typescript
// Import Push Chain Core
import { PushChain } from '@pushchain/core';

// Import Viem
import { createWalletClient, http } from 'viem';
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';

async function main() {
  // Create random wallet
  const account = privateKeyToAccount(generatePrivateKey());

  // set chain to sepolia
  const walletClient = createWalletClient({
    account,
    transport: http('https://evm.donut.rpc.push.org/'),
  });

  // Convert viem signer to Universal Signer
  const universalSigner = await PushChain.utils.signer.toUniversal(walletClient);
  console.log('🔑 Got universal signer - Viem');
  console.log(JSON.stringify(universalSigner));
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
