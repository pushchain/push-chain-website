## Convert Executor Address to Origin Account

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core'

    async function main() {
      const ueaAddress = '0xbCfaD05E5f19Ae46feAab2F72Ad9977BC239b395';
      const result = await PushChain.utils.account.convertExecutorToOriginAccount(
        ueaAddress
      );
      console.log('Has Executor Account');
      console.log(JSON.stringify(result, null, 2));

      const notUeaAddress = '0x35B84d6848D16415177c64D64504663b998A6ab4';
      const result2 = await PushChain.utils.account.convertExecutorToOriginAccount(
        notUeaAddress
      );
      console.log('Does not have Executor Account');
      console.log(JSON.stringify(result2, null, 2));
    }

    await main().catch(console.error)
```

## SDK Methods Used

- See code above
