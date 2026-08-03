## Get PC20 Address

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    // A Push-native PC20 deployed on Donut Testnet.
    const PUSH_PC20 = '0x14693f665cE282A451ba9a86F2EC04B43F931145';

    async function main() {
      // Resolve from the canonical Push-native token
      const token = await PushChain.utils.tokens.getPC20Address(PUSH_PC20, {
        chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
        network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
      });

      console.log('Canonical PC20:', token.address);
      console.log('Metadata:', token.symbol, '| decimals:', token.decimals);

      // Every confirmed deployment — wrappers first, Push last
      for (const entry of token.registry) {
        console.log('  -', entry.chainName, '→', entry.address);
      }

      // 'chain' is optional. Omit it and the SDK discovers where the address lives.
      const discovered = await PushChain.utils.tokens.getPC20Address(PUSH_PC20, {
        network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
      });
      console.log('Same token via auto-discovery:', discovered.address === token.address);
    }

    main();
```

## SDK Methods Used

- `PushChain.utils.tokens.getPC20Address`
