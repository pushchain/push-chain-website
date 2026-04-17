## Get PRC20 Address

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    async function main() {
      // Moveable token example (ETH on Sepolia)
      const { tokens: moveable } = PushChain.utils.tokens.getMoveableTokens(
        PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
      );
      const ethMoveable = moveable.find((t) => t.symbol === 'ETH');
      if (!ethMoveable) {
        throw new Error('ETH moveable token not found');
      }

      // Using MoveableToken directly
      const prc20FromMoveable = PushChain.utils.tokens.getPRC20Address(
        ethMoveable
      );
      console.log('pETH address (from MoveableToken):', prc20FromMoveable);

      // Using { chain, address }
      const prc20FromAddress = PushChain.utils.tokens.getPRC20Address({
        chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
        address: ethMoveable.address,
      });
      console.log('pETH address (from chain/address):', prc20FromAddress);
    }

    main();
```

## SDK Methods Used

- See code above
