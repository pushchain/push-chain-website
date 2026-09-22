## Contract Call (Chainlink ETH / USD price)

Source: https://push.org/docs/chain/build/universal-read/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/universal-read/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

// Chainlink ETH / USD price feed on Ethereum Sepolia, from Chainlink Data Feeds. The answer has 8 decimals.
// https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1#sepolia-testnet
const FEED = '0x694AA1769357215DE4FAC081bf1f309aDC325306';
const FEED_ABI = [
  { type: 'function', name: 'latestAnswer', stateMutability: 'view', inputs: [], outputs: [{ type: 'int256' }] },
];

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
    const pending = await pushChainClient.universal.read(FEED, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      abi: FEED_ABI,
      functionName: 'latestAnswer',
      waitForCompletion: false,
      progressHook: (progress) => console.log(progress.id + ': ' + progress.title),
    });
    console.log('Save requestId:', pending.requestId);
    console.log('Save txHash:', pending.txHash);

    console.log('Waiting for validators to reach quorum and deliver the callback (usually under a minute)...');
    const done = await pending.wait();
    console.log('Value:', ethers.formatUnits(done.value, 8), 'USD per ETH');
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
