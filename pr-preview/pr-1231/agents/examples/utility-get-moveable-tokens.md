## Get Moveable Tokens

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      const { tokens: sepolia } = PushChain.utils.tokens.getMoveableTokens(
        PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
      );
      console.log("Sepolia moveable supported tokens:", JSON.stringify(sepolia, null, 2));
    }

    main();
```

## SDK Methods Used

- See code above
