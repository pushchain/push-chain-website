## Convert Origin to Executor Account

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core'

    async function main() {
      // Create executor account object
      const ueaAccount = '0xbCfaD05E5f19Ae46feAab2F72Ad9977BC239b395';
      
      // Convert UEA to origin account
      const result = await PushChain.utils.account.convertExecutorToOrigin(
        ueaAccount
      );
      console.log('Origin account from UEA:');
      console.log(JSON.stringify(result, null, 2));

      // Example with options.chain (treats as CEA)
      const ceaAccount = '0x5d71c70571789F0cd3bE84513523a9993740BDf6';
      
      const result2 = await PushChain.utils.account.convertExecutorToOrigin(
        ceaAccount,
        { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
      );
      console.log('Origin account from CEA:');
      console.log(JSON.stringify(result2, null, 2));
    }

    await main().catch(console.error)
```

## SDK Methods Used

- See code above
