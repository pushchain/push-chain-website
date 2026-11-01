## Custom Universal Signer

Source: https://push.org/docs/chain/build/advanced/custom-universal-signer/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/advanced/custom-universal-signer/) for full context on when to apply this pattern.

## Code

```typescript
// Import Push Chain Core
import { PushChain } from '@pushchain/core';

    // Import if you are using ethers
    import { ethers } from 'ethers';
    import readline from 'readline';

    async function main() {
      // We need to pass the following to PushChain.utils.signer.construct(account, {options})
      // 1. account which is a universal account
      // 2. options which is an object with the following properties
      // 2.1 signAndSendTransaction
      // 2.2 signMessage
      // 2.3 signTypedData

      // 1. account to universal account
      // Create random wallet, attached to a provider so the custom signer can broadcast.
      const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
      const wallet = ethers.Wallet.createRandom(provider);

      // Convert wallet.address to Universal Account
      const universalAccount = PushChain.utils.account.toUniversal(wallet.address, {
        chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      });
      console.log('Created Universal Account', JSON.stringify(universalAccount))

      // 2. options to construct
      // 2.1 signAndSendTransaction

      // create custom Sign and Send Transaction
      // unsignedTx is a serialized transaction (Uint8Array). Sign it, broadcast,
      // and return the resulting tx hash as a Uint8Array.
      const customSignAndSendTransaction = async (unsignedTx) => {
        const parsedTx = ethers.Transaction.from(ethers.hexlify(unsignedTx));
        const signedTx = await wallet.signTransaction(parsedTx);
        const response = await wallet.provider.broadcastTransaction(signedTx);

        // Always a Uint8Array (the tx hash)
        return ethers.getBytes(response.hash);
      };

      // 2.2 signMessage
      const customSignMessage = async (message) => {
        // Sign message using ethers wallet
        const signature = await wallet.signMessage(message);

        // Always a Uint8Array (the signature bytes)
        return ethers.getBytes(signature);
      };

      // 2.3 signTypedData
      const customSignTypedData = async (domain, types, value) => {
        // Sign typed data using ethers wallet (v6: signTypedData, not _signTypedData)
        const signature = await wallet.signTypedData(domain, types, value);

        // Always a Uint8Array (the signature bytes)
        return ethers.getBytes(signature);
      };

      // * Construct the universal signer skeleton with custom signing functions
      const universalSignerSkeleton = PushChain.utils.signer.construct(universalAccount, {
        signAndSendTransaction: customSignAndSendTransaction,
        signMessage: customSignMessage,
        signTypedData: customSignTypedData
      });
      console.log('Created Universal Signer Skeleton', JSON.stringify(universalSignerSkeleton));


      // ** Pass constructed universal signer skeleton to create universal signer **
      const universalSigner = await PushChain.utils.signer.toUniversal(universalSignerSkeleton);
      console.log('Created Universal Signer', JSON.stringify(universalSigner));
    }
    await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.utils.signer.construct`
- `PushChain.utils.account.toUniversal`
