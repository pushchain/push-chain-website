## Native Balance (SOL held by the Push gateway vault)

Source: https://push.org/docs/chain/build/universal-read/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/universal-read/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

// Push gateway vault PDA on Solana Devnet, derived with the seed 'vault' from the Solana Universal Gateway in the Smart Contract Address Book.
// https://explorer.solana.com/address/89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi?cluster=devnet
const VAULT_PDA = '89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi';

async function main() {
  const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
  const wallet = ethers.Wallet.createRandom().connect(provider);
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    console.log('Temporary Donut wallet:', wallet.address);
    await rl.question(':::prompt:::Fund this temporary wallet with test PC, then press Enter: ' + wallet.address + ' Faucet: https://faucet.push.org/');
    const signer = await PushChain.utils.signer.toUniversal(wallet);
    const pushChainClient = await PushChain.initialize(signer, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
    });

    console.log('Submitting the read request to Push Chain...');
    const pending = await pushChainClient.universal.read(VAULT_PDA, {
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
      waitForCompletion: false,
      progressHook: (progress) => console.log(progress.id + ': ' + progress.title),
    });
    console.log('Save requestId:', pending.requestId);
    console.log('Save txHash:', pending.txHash);

    console.log('Waiting for validators to reach quorum and deliver the callback (usually under a minute)...');
    const done = await pending.wait();
    if (done.outcome !== PushChain.CONSTANTS.READ.OUTCOME.SUCCESS) {
      console.log('Read did not succeed:', done.outcome, done.raw?.errorCode ?? '', done.callbackFailReason ?? '', done.decodeError ?? '');
      return;
    }
    console.log('Value:', ethers.formatUnits(done.value, 9), 'SOL');
  } finally {
    rl.close();
    provider.destroy();
  }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.universal.read`
