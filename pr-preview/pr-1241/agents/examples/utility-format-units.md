## Format Units

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      console.log('=== Common Token Conversion Examples ===');
      
      // Wei to ETH or uPC to PC (18 decimals)
      const ethToWei = PushChain.utils.helpers.formatUnits('1500000000000000000', { decimals: 18 });
      console.log('1500000000000000000 Wei to ETH (1.5):', ethToWei);
      
      // USDC amount (6 decimals) 
      const usdcAmount = PushChain.utils.helpers.formatUnits('100500000', { decimals: 6 });
      console.log('100500000 unit of USDC to human readable USDC (100.5):', usdcAmount);
      
      console.log('=== Basic Number Formatting ===');
      
      // Integer values
      const integerResult = PushChain.utils.helpers.formatUnits('420000000000', { decimals: 9, precision: 2 });
      console.log('420000000000 with 9 decimals and 2 precision (420.00):', integerResult);
      
      // Decimal values
      const decimalResult = PushChain.utils.helpers.formatUnits('123456', { decimals: 5, precision: 4 });
      console.log('123456 with 6 decimal places and 4 precision (1.2346):', decimalResult);
      
      console.log('=== Variation Examples ===');
      
      // PC token amount (18 decimals)
      const pushAmount = PushChain.utils.helpers.formatUnits('1000500000000000000000', 18);
      console.log('1000500000000000000000 uPC tokens to PC tokens (1000.5):', pushAmount);
    }

    main();
```

## SDK Methods Used

- `PushChain.utils.helpers.formatUnits`
