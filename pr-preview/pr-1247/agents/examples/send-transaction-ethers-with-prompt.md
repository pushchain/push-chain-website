## Live Playground

Source: https://push.org/docs/chain/build/send-universal-transaction/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/send-universal-transaction/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

    // ——— CONFIG ———
    // RPC URL OF DIFFERENT CHAINS
    const RPC_PUSH = 'https://evm.donut.rpc.push.org/';
    const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';

    // Dummy Address
    const RECIPIENT = '0x0000000000000000000000000000000000042101';

    // Enable User Input
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // ⭐️ MAIN FUNCTION ⭐️
    async function main() {
      console.log('🚀 Initializing Universal Transaction Example');

      // Choose chain from which to send transaction
      const chainMeta = await returnUserChainSelection();

      // 1) Create a wallet (in production, you'd use your own wallet)
      const wallet = ethers.Wallet.createRandom();
      console.log('📝 Created wallet:', wallet.address);

      // 2) Set up provider and connect wallet
      const provider = new ethers.JsonRpcProvider(chainMeta.id === '1' ? RPC_PUSH : RPC_SEPOLIA);
      const signer = wallet.connect(provider);

      // 3) Convert to Universal Signer
      console.log('🔄 Converting to Universal Signer...');
      const universalSigner = await PushChain.utils.signer.toUniversal(signer);

      // 4) Initialize Push Chain Client
      console.log('🔗 Initializing Push Chain Client...');
      const pushChainClient = await PushChain.initialize(universalSigner, {
        network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
      });

      // 5) Prepare transaction parameters
      const txParams = {
        to: RECIPIENT,
        value: PushChain.utils.helpers.parseUnits('0.001', 18), // 0.001 PC in uPC (wei)
      };

      // wait for user to send funds first
      await rl.question(':::prompt:::Please send funds to: ' + wallet.address + ' on ' + chainMeta.name + ' to continue.');

      // 6) Send universal transaction
      console.log('📤 Sending transaction to:', RECIPIENT);

      try {
        // Note: This would fail in playground without funds
        // In production, ensure wallet has funds
        const txResponse = await pushChainClient.universal.sendTransaction({
          ...txParams,
          progressHook: (p) => console.log('🔄 Progress:', p.title || p.id),
        });
        console.log('✅ Transaction sent! Tx:', JSON.stringify(txResponse));
      } catch (error) {
        console.error('❌ Transaction failed:', error.message);
        // In playground, this will fail without funds
        console.log('Note: In playground, this might fail without funds. Ensure your wallet has PC tokens.');
      }
    }

    await main().catch(console.error);

    // --- HELPER FUNCTIONS ---
    async function returnUserChainSelection() {
      const selection = await rl.question('Please select the chain(1 for Push Testnet Donut, 2 for Ethereum Sepolia): ');

      if (selection !== '1' && selection !== '2') {
        console.log('Invalid selection. Please select 1 or 2.');
        process.exit(0);
      }

      const name = selection === '1' ? 'PUSH_TESTNET_DONUT' : 'ETHEREUM_SEPOLIA';

      return {id: selection, name: name};
    }
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.universal.sendTransaction`
- `PushChain.utils.helpers.parseUnits`
