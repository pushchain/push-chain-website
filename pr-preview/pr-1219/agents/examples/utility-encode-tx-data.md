## Encode Transaction Data

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      // Example ABI for a simple counter contract
      const testAbi = [
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          inputs: [],
          name: 'increment',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [],
          name: 'countPC',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ];

      // Encode transaction data for the increment function
      const result = PushChain.utils.helpers.encodeTxData({
        abi: testAbi,
        functionName: 'increment'
      });
      
      console.log('Encoded transaction data:', result);
    }

    main();
```

## SDK Methods Used

- See code above
