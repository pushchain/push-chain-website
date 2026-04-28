## Parse Units

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      console.log('=== Common Token Conversion Examples ===');
      
      // ETH to Wei or PC to uPC (18 decimals)
      const ethToWei = PushChain.utils.helpers.parseUnits('1.5', { decimals: 18 });
      console.log('1.5 ETH to Wei:', ethToWei.toString());
      
      // USDC amount (6 decimals) 
      const usdcAmount = PushChain.utils.helpers.parseUnits('100.50', { decimals: 6 });
      console.log('100.50 USDC to smallest unit:', usdcAmount.toString());
      
      // BTC to Satoshi (8 decimals)
      const btcToSatoshi = PushChain.utils.helpers.parseUnits('0.00000001', { decimals: 8 });
      console.log('0.00000001 BTC to Satoshi:', btcToSatoshi.toString());
      
      console.log('=== Basic Number Parsing ===');
      
      // Integer values
      const integerResult = PushChain.utils.helpers.parseUnits('420', { decimals: 9 });
      console.log('420 with 9 decimal places:', integerResult.toString());
      
      // Decimal values
      const decimalResult = PushChain.utils.helpers.parseUnits('0.1', { decimals: 6 });
      console.log('0.1 with 6 decimal places:', decimalResult.toString());
      
      console.log('=== Variation Examples ===');
      
      // PC token amount (18 decimals)
      const pushAmount = PushChain.utils.helpers.parseUnits('1000.5', 18);
      console.log('1000.5 PC tokens:', pushAmount.toString());
      
      // Precise decimal matching
      const preciseAmount = PushChain.utils.helpers.parseUnits('1.123456', 6);
      console.log('Precise 6-decimal amount:', preciseAmount.toString());
    }

    main();
```

## SDK Methods Used

- `PushChain.utils.helpers.parseUnits`
