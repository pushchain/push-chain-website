## Encode Transaction Data

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

    function main() {
      // Anchor IDL for the Solana target — trimmed to just the receive_sol
      // instruction we call below. In a real app this comes from your Anchor
      // program's target/idl/*.json.
      const testCounterIdl = {
        address: '8yNqjrMnFiFbVTVQcKij8tNWWTMdFkrDf9abCGgc2sgx', // SOL_TEST_PROGRAM
        metadata: { name: 'test_counter', version: '0.1.0', spec: '0.1.0' },
        instructions: [
          {
            name: 'receive_sol',
            discriminator: [121, 244, 250, 3, 8, 229, 225, 1],
            accounts: [
              { name: 'counter', writable: true, pda: { seeds: [{ kind: 'const', value: [99, 111, 117, 110, 116, 101, 114] }] } }, // 'counter'
              { name: 'recipient', writable: true, address: '89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi' },
              { name: 'cea_authority', writable: true }, // auto-populated with sender's CEA
              { name: 'system_program', address: '11111111111111111111111111111111' },
            ],
            args: [{ name: 'amount', type: 'u64' }],
          },
        ],
      };

      const result = PushChain.utils.helpers.encodeTxData({
        idl: testCounterIdl,
        functionName: 'receive_sol',
        args: [BigInt(0)]
      });
      
      console.log('Encoded transaction data:', result);
    }

    main();
```

## SDK Methods Used

- `PushChain.utils.helpers.encodeTxData`
