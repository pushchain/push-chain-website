## Get Account Status

Source: https://push.org/docs/chain/build/initialize-push-chain-client/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/initialize-push-chain-client/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

async function main() {
  // Create a UniversalAccount (read-only)
  const universalAccount = {
      address: '0x6d66cc8cbea02496735a9eb89ac6c2e0fc3b6689',
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  };

  const pushChainClient = await PushChain.initialize(universalAccount, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });
  console.log('🔑 Push Chain client initialized');

  // Fetch account status
  const status = await pushChainClient.getAccountStatus();
  console.log('Account status:', JSON.stringify(status));

  if (!status.uea.deployed) {
    console.log('ℹ️ UEA not deployed yet for this account');
  } else {
    console.log('UEA version:', status.uea.version);
    console.log('Min required version:', status.uea.minRequiredVersion);
    console.log('Requires upgrade:', status.uea.requiresUpgrade);
  }
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.initialize`
- `pushChainClient.getAccountStatus`
