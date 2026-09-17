## Resume a request

Source: https://push.org/docs/chain/build/universal-read/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/universal-read/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import * as readline from 'node:readline/promises';

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const requestId = (await rl.question('Paste a Donut Universal Read request ID (0x-prefixed, 32 bytes):')).trim();
  if (!/^0x[0-9a-fA-F]{64}$/.test(requestId)) throw new Error('Expected a 32-byte request ID');
  const account = PushChain.utils.account.toUniversal('0x000000000000000000000000000000000000dEaD', {
    chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
  });
  const pushChainClient = await PushChain.initialize(account, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
  });
  const snapshot = await pushChainClient.universal.trackRead({ requestId });
  console.log('Current status:', snapshot.status);
  const done = await snapshot.wait();
  const READ = PushChain.CONSTANTS.READ;
  if (done.status !== READ.STATUS.FULFILLED || done.raw?.status !== READ.RESULT_STATUS.SUCCESS || done.callbackDelivered !== true || done.decodeError) {
    throw new Error('No usable result: ' + JSON.stringify({ status: done.status, raw: done.raw, delivered: done.callbackDelivered, decodeError: done.decodeError }));
  }
  console.log('Value:', JSON.stringify(done.value, (_, value) => typeof value === 'bigint' ? value.toString() : value));
  console.log('Callback delivered:', done.callbackDelivered);
  rl.close();
}
main().catch(error => console.error(error.message));
```

## SDK Methods Used

- `PushChain.initialize`
- `pushChainClient.universal.trackRead`
- `PushChain.utils.account.toUniversal`
