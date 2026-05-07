## Live Playground

Source: https://push.org/docs/chain/build/send-universal-transaction/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/send-universal-transaction/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { Connection, Keypair } from '@solana/web3.js';
import * as readline from 'node:readline/promises';

    // ——— CONFIG ———

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

      // 1) Create a keypair
      const keypair = Keypair.generate();
      console.log('🔑 Got keypair: ', keypair.publicKey.toBase58());

      // 2) Convert to Universal Signer from Keypair
      console.log('🔄 Converting to Universal Signer from Keypair...');
      const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(keypair, {
        chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
        library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
      });

      // 3) Initialize Push Chain Client
      console.log('🔗 Initializing Push Chain Client...');
      const pushChainClient = await PushChain.initialize(universalSigner, {
        network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
      });

      // 4) Prepare transaction parameters
      const txParams = {
        to: RECIPIENT,
        value: PushChain.utils.helpers.parseUnits('0.001', 18), // 0.001 PC in uPC
        // data: '0x...', // For contract interactions - hex encoded
      };

      // wait for user to send funds first
      await rl.question(':::prompt:::Please send funds to: ' + keypair.publicKey.toBase58() + ' on SOLANA_DEVNET to continue.');

      // 5) Send universal transaction
      console.log('📤 Sending transaction to:', RECIPIENT);

      try {
        // Note: This would fail in playground without funds
        // In production, ensure wallet has funds
        const txResponse = await pushChainClient.universal.sendTransaction({
          ...txParams,
          progressHook: (p) => console.log('🔄 Progress:', p.title || p.id),
        });
        console.log('✅ Transaction sent! Hash:', JSON.stringify(txResponse));
      } catch (error) {
        console.error('❌ Transaction failed:', error.message);
        // In playground, this will fail without funds
        console.log('Note: In playground, this might fail without funds. Ensure your wallet has PC tokens.');
      }
    }

    await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.utils.signer.toUniversalFromKeypair`
- `PushChain.initialize`
- `pushChainClient.universal.sendTransaction`
- `PushChain.utils.helpers.parseUnits`
