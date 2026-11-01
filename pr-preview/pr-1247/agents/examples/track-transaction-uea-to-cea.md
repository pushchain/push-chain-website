## Live Playground

Source: https://push.org/docs/chain/build/track-universal-transaction/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/track-universal-transaction/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

async function main() {
  console.log('Creating Universal Signer - Ethers V6');

  // Transaction Hashes
  // Originating from Push Chain
  // https://explorer.push.org/tx/0x169929f61574baf62b84ce68b944e09faf566129d0175b2ee1e020c76ae7bd2f
  const UNIVERSAL_TX_FROM_PUSH_TX_HASH = '0x169929f61574baf62b84ce68b944e09faf566129d0175b2ee1e020c76ae7bd2f';

  // Originating from Sepolia
  // https://sepolia.etherscan.io/tx/0x9b4743376689eb6f90f3aeb9eea58381b3bcc033e1de4709281fd58a77b85098
  const UNIVERSAL_TX_FROM_ETH_SEPOLIA_TX_HASH = '0x9b4743376689eb6f90f3aeb9eea58381b3bcc033e1de4709281fd58a77b85098';
  
  // Originating from Solana
  // https://explorer.solana.com/tx/22SirqSwhcSjgyb3wdrW9Zis19dxcLHD5yy3BtRbRoLmykrv8eCzKnPaRGxrrZ7a4A7yKGRMGMehqKpTcdF2ByFR?cluster=devnet
  const UNIVERSAL_TX_FROM_SOLANA_TX_HASH = '22SirqSwhcSjgyb3wdrW9Zis19dxcLHD5yy3BtRbRoLmykrv8eCzKnPaRGxrrZ7a4A7yKGRMGMehqKpTcdF2ByFR';

  // Initialize client
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider("https://evm.donut.rpc.push.org/");
  const signer = wallet.connect(provider);
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const pushChainClient = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });
  console.log('🔑 Push Chain client initialized');
    
  // Track transactions from different chains
  console.log('📡 Tracking universal tx from push chain:', UNIVERSAL_TX_FROM_PUSH_TX_HASH);
  const tx1Response = await pushChainClient.universal.trackTransaction(UNIVERSAL_TX_FROM_PUSH_TX_HASH, {
    progressHook: (progress) => {
      console.log('TX 1 Progress: ', progress.title, ' | Time:', progress.timestamp);
    },
    advanced: { timeout: 30000 },
  });
  console.log(JSON.stringify(tx1Response));

  console.log('📡 Tracking universal tx from eth sepolia:', UNIVERSAL_TX_FROM_ETH_SEPOLIA_TX_HASH);
  const tx2Response = await pushChainClient.universal.trackTransaction(UNIVERSAL_TX_FROM_ETH_SEPOLIA_TX_HASH, {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    progressHook: (progress) => {
      console.log('TX 2 Progress: ', progress.title, ' | Time:', progress.timestamp);
    },
    advanced: { timeout: 30000 },
  });
  console.log(JSON.stringify(tx2Response));

  console.log('📡 Tracking universal tx from solana:', UNIVERSAL_TX_FROM_SOLANA_TX_HASH);
  const tx3Response = await pushChainClient.universal.trackTransaction(UNIVERSAL_TX_FROM_SOLANA_TX_HASH, {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    progressHook: (progress) => {
      console.log('TX 3 Progress: ', progress.title, ' | Time:', progress.timestamp);
    },
    advanced: { timeout: 30000 },
  });
  console.log(JSON.stringify(tx3Response));
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.universal.trackTransaction`
