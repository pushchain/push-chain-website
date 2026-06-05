## Get Payable Tokens

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      const { tokens: devnet } = PushChain.utils.tokens.getPayableTokens(
        PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET
      );
      console.log("Solana supported payable tokens:", JSON.stringify(devnet, null, 2));
    }

    main();
```

## SDK Methods Used

- See code above
