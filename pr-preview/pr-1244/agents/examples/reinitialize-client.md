## Reinitialize Client

Source: https://push.org/docs/chain/build/initialize-push-chain-client/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/initialize-push-chain-client/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';
import { createWalletClient, http } from 'viem';
import { sepolia } from 'viem/chains';

async function main() {
    console.log('Reinitialize Client Demo');

    // Single EVM signer
    const account = privateKeyToAccount(generatePrivateKey());
    const walletClient = createWalletClient({ account, chain: sepolia, transport: http() });
    const signer = await PushChain.utils.signer.toUniversal(walletClient);

    // Initialize with default options
    const client1 = await PushChain.initialize(signer, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });
    console.log('Before (explorer URLs):', JSON.stringify(client1.explorer.listUrls()));

    // Reinitialize with SAME signer, change only ONE option (blockExplorers)
    const client2 = await client1.reinitialize(signer, {
      blockExplorers: {
        [PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT]: ['https://custom-explorer.push.network'] },
      }
    );
    console.log('After  (explorer URLs):', JSON.stringify(client2.explorer.listUrls()));
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
