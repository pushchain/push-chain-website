## Native Balance (ETH of vitalik.eth)

Source: https://push.org/docs/chain/build/universal-read/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/universal-read/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

// vitalik.eth on Ethereum Sepolia, the public ENS address.
// https://sepolia.etherscan.io/address/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
const HOLDER = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';

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
    const pending = await pushChainClient.universal.read(HOLDER, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      waitForCompletion: false,
      progressHook: (progress) => console.log(progress.id + ': ' + progress.title),
    });
    console.log('Save requestId:', pending.requestId);
    console.log('Save txHash:', pending.txHash);

    console.log('Waiting for validators to reach quorum and deliver the callback (usually under a minute)...');
    const done = await pending.wait();
    console.log('Value:', ethers.formatEther(done.value), 'ETH');
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
