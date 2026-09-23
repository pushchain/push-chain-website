## Initialize EVM Client

Source: https://push.org/docs/chain/build/initialize-evm-client/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/initialize-evm-client/) for full context on when to apply this pattern.

## Code

```typescript
import { createPublicClient, http } from 'viem';

async function fetchTxViem() {
  const client      = createPublicClient({ transport: http('https://evm.donut.rpc.push.org/') });
  const txHash = '0x04ee80f072ab06ec88092701e7ba223451d0a1376e26755085271bc6de45a6a1';
  const tx = await client.getTransaction({ hash: txHash });
  console.log('Transaction:', JSON.stringify(tx, null, 2));
}

console.log('Fetching transaction...');
await fetchTxViem().catch(console.error);
```

## SDK Methods Used

- See code above
