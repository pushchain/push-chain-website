## Get Chain Namespace from Chain Name

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      const chainName = PushChain.utils.chains.getChainNamespace('PUSH_TESTNET_DONUT');
      console.log(chainName);
    }

    main();
```

## SDK Methods Used

- See code above
