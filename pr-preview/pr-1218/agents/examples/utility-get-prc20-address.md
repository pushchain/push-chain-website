## Get PRC20 Address

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    async function main() {
      // Using { chain, address }
      const prc20Alt = PushChain.utils.tokens.getPRC20Address({
        chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
        address: "0x97F477B7f970D47a87B42869ceeace218106152a",
      });
      console.log('USDC.eth:', JSON.stringify(prc20Alt));

      // Moveable token example (ETH on Sepolia)
      const { tokens: moveable } = PushChain.utils.tokens.getMoveableTokens(
        PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
      );
      const ethMoveable = moveable.find((t) => t.symbol === 'ETH');
      if (!ethMoveable) {
        throw new Error('ETH moveable token not found');
      }

      // Using MoveableToken directly
      const { address: prc20Addr, symbol, decimals, network } =
        PushChain.utils.tokens.getPRC20Address(ethMoveable);
      console.log('pETH address:', prc20Addr, '| symbol:', symbol, '| decimals:', decimals);
    }

    main();
```

## SDK Methods Used

- See code above
