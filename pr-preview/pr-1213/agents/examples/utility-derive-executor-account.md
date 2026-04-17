## Derive Executor Account

Source: https://push.org/docs/chain/build/utility-functions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/utility-functions/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core'

    async function main() {
      // Example 1: Derive UEA from Ethereum account
      const ethAccount = PushChain.utils.account.toUniversal(
        '0xe1ceea8efaf7fb973cb65653caa7dd3d59283f25',
        { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }
      );
      const ueaResult = await PushChain.utils.account.deriveExecutorAccount(ethAccount);
      console.log('UEA from Ethereum account:');
      console.log(JSON.stringify(ueaResult, null, 2));

      // Example 2: Derive UEA from Solana account
      const solanaAccount = PushChain.utils.account.toUniversal(
        '5BoLqCmrqbrqv2QwUnpccC62scUxDojpYw2UyM8aGpru',
        { chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET }
      );
      const ueaFromSolana = await PushChain.utils.account.deriveExecutorAccount(solanaAccount);
      console.log('UEA from Solana account:');
      console.log(JSON.stringify(ueaFromSolana, null, 2));

      // Example 3: Derive CEA from Push account
      const pushAccount = PushChain.utils.account.toUniversal(
        '0x3ee31c0C8b9888e267781b2FD73cDA1D7FfA46eE',
        { chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET }
      );
      const ceaResult = await PushChain.utils.account.deriveExecutorAccount(
        pushAccount,
        { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
      );
      console.log('CEA on BNB Testnet:');
      console.log(JSON.stringify(ceaResult, null, 2));

      // Example 4: Skip network check (deterministic only)
      const deterministicResult = await PushChain.utils.account.deriveExecutorAccount(
        uoaAccount,
        { skipNetworkCheck: true }
      );
      console.log('Deterministic derivation:');
      console.log(JSON.stringify(deterministicResult, null, 2));
    }

    await main().catch(console.error)
```

## SDK Methods Used

- `PushChain.utils.account.toUniversal`
- `PushChain.utils.account.deriveExecutorAccount`
