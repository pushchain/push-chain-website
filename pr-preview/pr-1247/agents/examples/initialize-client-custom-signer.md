## Read-only Mode

Source: https://push.org/docs/chain/build/initialize-push-chain-client/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/initialize-push-chain-client/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';

async function main() {
    console.log('Initializing Read-only Push Chain Client');

    // Create a UniversalAccount (read-only)
    const universalAccount = {
        address: '0x1234567890123456789012345678901234567890',
        chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    };

    // Initialize read-only client
    const readOnlyClient = await PushChain.initialize(universalAccount, {
        network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });

    // Allowed operations (prettified)
    const origin = readOnlyClient.universal.origin;
    const account = readOnlyClient.universal.account;
    const txUrl = readOnlyClient.explorer.getTransactionUrl('0x123');
    console.log('✅ Initialized (read-only)');
    console.log('Origin:', 'address=' + origin.address + ', chain=' + origin.chain);
    console.log('Account:', account);
    console.log('Tx URL:', txUrl);

    // Restricted operations (will throw/reject)
    try {
        const message = new TextEncoder().encode('Hello, Push Chain!');
        await readOnlyClient.universal.signMessage(message);
    } catch (e) {
      console.log('🛡️ Restricted call blocked: ' + e.message);
    }

    try {
        await readOnlyClient.universal.sendTransaction({
          to: '0x0000000000000000000000000000000000042101',
          value: 1n,
        });
    } catch (e) {
      console.log('🛡️ Restricted call blocked: ' + e.message);
    }
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.initialize`
