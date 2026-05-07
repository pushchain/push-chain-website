## Calculate Minimum Amount from Slippage

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      const minOut = PushChain.utils.conversion.slippageToMinAmount('100000000', {
        slippageBps: 100,
      });
      console.log('Min out with 1% slippage:', minOut);
    }

    main();
```

## SDK Methods Used

- See code above
