## Convert to Universal Account

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      const account = PushChain.utils.account.toUniversal(
        '0xD8d6aF611a17C236b13235B5318508FA61dE3Dba', {
          chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
        }
      );
      console.log(JSON.stringify(account, null, 2));
    }

    main()
```

## SDK Methods Used

- `PushChain.utils.account.toUniversal`
