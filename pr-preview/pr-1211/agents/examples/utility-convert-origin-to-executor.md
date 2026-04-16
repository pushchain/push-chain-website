## Convert Origin to Executor Account

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core'

    async function main() {
      // Create a universal account for Solana Devnet
      const account = PushChain.utils.account.toUniversal(
        'EUYcfSUScdFgKMbB3rRdgRZwXmcxY7QCRQa2JwrchP1Q', {
        chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
      })

      // Convert to executor address with deployment status
      const executorInfo = await PushChain.utils.account.convertOriginToExecutor(account, {
        onlyCompute: true,
      })

      console.log(JSON.stringify(executorInfo, null, 2));

      // Convert without deployment status
      const executorSimple = await PushChain.utils.account.convertOriginToExecutor(account, {
        onlyCompute: false,
      })

      console.log(JSON.stringify(executorSimple, null, 2));
    }

    await main().catch(console.error)
```

## SDK Methods Used

- `PushChain.utils.account.toUniversal`
