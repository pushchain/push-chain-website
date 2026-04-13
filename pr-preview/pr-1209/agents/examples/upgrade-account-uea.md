## Live Playground

Source: https://push.org/docs/chain/build/advanced/upgrade-account/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/advanced/upgrade-account/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

async function main() {
  console.log('Initializing Push Chain Client');

  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
  const signer = wallet.connect(provider);
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  console.log('🔑 Push Chain client initialized');
  console.log('Origin account:', JSON.stringify(pushChainClient.universal.origin));
  console.log('Execution account:', JSON.stringify(pushChainClient.universal.account));

  // Check account status before attempting upgrade
  const status = await pushChainClient.getAccountStatus({ forceRefresh: true });
  console.log('Account status:', JSON.stringify(status));

  if (!status.uea.loaded) {
    console.log('⚠️ Account status could not be resolved yet.');
    return;
  }

  if (!status.uea.deployed) {
    console.log('ℹ️ Universal Account is not deployed yet, so no upgrade is needed.');
    return;
  }

  if (!status.uea.requiresUpgrade) {
    console.log('✅ Universal Account is already up to date (version: ' + status.uea.version + ')');
    return;
  }

  console.log(
    '⬆️ Upgrading Universal Account from ' + status.uea.version + ' to ' + status.uea.minRequiredVersion + '...'
  );

  await pushChainClient.upgradeAccount({
    progressHook: (progress) => {
      console.log('[' + progress.id + '] ' + progress.title + ': ' + progress.message);
    },
  });

  const updated = await pushChainClient.getAccountStatus({ forceRefresh: true });
  console.log('Updated account status:', JSON.stringify(updated));
  console.log('✅ Upgrade complete. New version: ' + updated.uea.version);
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.getAccountStatus`
- `pushChainClient.upgradeAccount`
