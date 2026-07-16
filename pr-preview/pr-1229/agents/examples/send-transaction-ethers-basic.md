## Live Playground

Source: https://push.org/docs/chain/build/send-universal-transaction/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/send-universal-transaction/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    async function main() {
      // Create a fresh wallet on Push Chain Testnet (Donut)
      const wallet = ethers.Wallet.createRandom();
      const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
      const signer = wallet.connect(provider);
      console.log('🔑 Push Chain account:', wallet.address);

      // Initialize Push Chain SDK
      const universalSigner = await PushChain.utils.signer.toUniversal(signer);
      const client = await PushChain.initialize(universalSigner, {
        network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
      });

      // Fund the wallet before sending
      await rl.question(':::prompt:::Please send Push Chain Testnet tokens to: ' + wallet.address + ' and press Enter to continue.');

      // Send a simple value transfer on Push Chain
      const tx = await client.universal.sendTransaction({
        to: '0x0000000000000000000000000000000000042101',
        value: PushChain.utils.helpers.parseUnits('0.001', 18), // 0.001 PC
        progressHook: (p) => console.log('🔄 Progress:', p.title || p.id),
      });

      console.log('✅ TX Hash:', tx.hash);
      console.log('⛓️  Chain ID:', tx.chainId);
    }

    await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `PushChain.utils.helpers.parseUnits`
