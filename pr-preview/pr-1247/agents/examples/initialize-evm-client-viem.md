## Initialize EVM Client

Source: https://push.org/docs/chain/build/initialize-evm-client/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/initialize-evm-client/) for full context on when to apply this pattern.

## Code

```typescript
import { createPublicClient, http } from 'viem';

function initViem() {
  const publicClient = createPublicClient({ transport: http('https://evm.donut.rpc.push.org/') });
  console.log('Viem publicClient:', JSON.stringify(publicClient, null, 2));
}

initViem();
```

## SDK Methods Used

- See code above
