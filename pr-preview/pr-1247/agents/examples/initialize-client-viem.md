## Initialize Push Chain Client

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
    console.log('Creating Universal Signer - Viem');

    // Create random wallet
    const account = privateKeyToAccount(generatePrivateKey());
    const walletClient = createWalletClient({
        account,
        chain: sepolia,
        transport: http(),
    });

    // Convert viem wallet client to Universal Signer
    const universalSigner = await PushChain.utils.signer.toUniversal(walletClient);
    console.log('🔑 Got universal signer');

    // Initialize Push Chain SDK
    const pushChainClient = await PushChain.initialize(universalSigner, {
        network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });
    console.log('🔑 Got push chain client');
    console.log(JSON.stringify(pushChainClient));
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
