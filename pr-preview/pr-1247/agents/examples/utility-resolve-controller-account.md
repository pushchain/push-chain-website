## Resolve Controller Account

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core'

    async function main() {
      // Example 1: Resolve controller from UEA
      const ueaAddress = '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5';
      const result1 = await PushChain.utils.account.resolveControllerAccount(ueaAddress);
      console.log('Resolution chain from UEA:');
      console.log(JSON.stringify(result1, null, 2));

      // Example 2: Resolve from CEA with chain context
      const ceaAddress = '0x5d71c70571789F0cd3bE84513523a9993740BDf6';
      const result2 = await PushChain.utils.account.resolveControllerAccount(
        ceaAddress,
        { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
      );
      console.log('Resolution chain from CEA:');
      console.log(JSON.stringify(result2, null, 2));

      // Example 3: Skip network check (deterministic only)
      const result3 = await PushChain.utils.account.resolveControllerAccount(
        ueaAddress,
        { skipNetworkCheck: true }
      );
      console.log('Deterministic resolution:');
      console.log(JSON.stringify(result3, null, 2));
    }

    await main().catch(console.error)
```

## SDK Methods Used

- `PushChain.utils.account.resolveControllerAccount`
