## Get PC-20 Address

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    // A PC-20 deployed on Donut Testnet
    const PUSH_PC20 = '0x14693f665cE282A451ba9a86F2EC04B43F931145';

    async function main() {
      const token = await PushChain.utils.tokens.getPC20Address(PUSH_PC20, {
        chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
        network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
      });

      console.log('Canonical PC-20:', token.address);
      console.log('Metadata:', token.symbol, '| decimals:', token.decimals);

      // Every chain it is deployed on
      for (const entry of token.registry) {
        console.log('  -', entry.chainName, '→', entry.address);
      }

      // chain is optional — the SDK will find it
      const discovered = await PushChain.utils.tokens.getPC20Address(PUSH_PC20, {
        network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
      });
      console.log('Same token via auto-discovery:', discovered.address === token.address);
    }

    main();
```

## SDK Methods Used

- `PushChain.utils.tokens.getPC20Address`
