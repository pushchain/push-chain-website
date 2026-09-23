## Track a Read

Source: https://push.org/docs/chain/build/track-universal-read/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/track-universal-read/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

// A completed read: USDC held by the Push gateway vault on Solana Devnet, stored on the Universal Read Registry.
// https://donut.push.network/tx/0xf7efe7f3908f0fd4c8480352c23e678b55deeb5537ac8c2a7f6abdd6b6bb71d5
const REQUEST_ID = '0xcb23af06c1b2b933cb58240f72df881b2d3ca3d82021cbe1649dcee0ec92af3c';

// A Push Chain transaction that submitted one read: the ETH balance of vitalik.eth on Ethereum Sepolia.
// https://donut.push.network/tx/0x8a04e913102ae2db75ef6146b5cc25241637614b17b95b51008e3613d5fab544
const TX_HASH = '0x8a04e913102ae2db75ef6146b5cc25241637614b17b95b51008e3613d5fab544';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const print = (value) => JSON.stringify(value, (_, v) => typeof v === 'bigint' ? v.toString() : v);

async function main() {
  try {
    // Tracking needs no signer and no funds, so a read-only client is enough
    const account = PushChain.utils.account.toUniversal('0x000000000000000000000000000000000000dEaD', {
      chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
    });
    const pushChainClient = await PushChain.initialize(account, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
    });

    const target = await returnUserTrackSelection();

    if (target.txHash) {
      console.log('Looking up every read submitted in', target.txHash, '...');
      const reads = await pushChainClient.universal.trackRead({ txHash: target.txHash }, {
        progressHook: (progress) => console.log(progress.id + ': ' + progress.title),
      });
      console.log('Reads in this transaction:', reads.length);
      for (const read of reads) {
        const done = await read.wait();
        console.log('Value:', ethers.formatEther(done.value), 'ETH');
      }
      return;
    }

    console.log('Looking up request', target.requestId, '...');
    const snapshot = await pushChainClient.universal.trackRead({ requestId: target.requestId }, {
      progressHook: (progress) => console.log(progress.id + ': ' + progress.title),
    });
    console.log('Current status:', PushChain.CONSTANTS.READ.STATUS[snapshot.status]);

    console.log('Waiting for the read to reach a terminal state...');
    const done = await snapshot.wait();
    console.log('Value:', target.decimals ? ethers.formatUnits(done.value, target.decimals) + ' ' + target.symbol : print(done.value));
  } finally {
    rl.close();
  }
}

async function returnUserTrackSelection() {
  const selection = await rl.question('Select what to track (1 for a predefined request ID, 2 for a predefined transaction hash, 3 for your own request ID): ');
  if (selection !== '1' && selection !== '2' && selection !== '3') {
    console.log('Invalid selection. Please pick 1, 2 or 3.');
    process.exit(0);
  }
  if (selection === '2') return { txHash: TX_HASH };
  if (selection === '3') {
    const requestId = (await rl.question('Request ID (0x-prefixed, 32 bytes): ')).trim();
    if (!/^0x[0-9a-fA-F]{64}$/.test(requestId)) {
      console.log('Expected a 32-byte request ID.');
      process.exit(0);
    }
    return { requestId };
  }
  return { requestId: REQUEST_ID, decimals: 6, symbol: 'USDC' };
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
```

## SDK Methods Used

- `PushChain.initialize`
- `pushChainClient.universal.trackRead`
- `PushChain.utils.account.toUniversal`
