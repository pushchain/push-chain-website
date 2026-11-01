## Initialize EVM Client

Source: https://push.org/docs/chain/build/initialize-evm-client/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/initialize-evm-client/) for full context on when to apply this pattern.

## Code

```typescript
import { ethers } from 'ethers';

// ——— CONFIG ———
const RPC_URL = 'https://evm.donut.rpc.push.org/';

function initEthers() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  console.log('Got Ethers.js provider methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(provider)));
}

initEthers();
```

## SDK Methods Used

- See code above
