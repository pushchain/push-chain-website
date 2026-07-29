## Get Supported Chains By Name

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      const chains = PushChain.utils.chains.getSupportedChainsByName(PushChain.CONSTANTS.PUSH_NETWORK.TESTNET);
      console.log(JSON.stringify(chains));
    }

    main();
```

## SDK Methods Used

- See code above
