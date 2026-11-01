## Inspect PreparedRead

Source: https://push.org/docs/chain/build/read-multiple-universal-states/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/read-multiple-universal-states/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

// vitalik.eth on Ethereum Sepolia, the public ENS address.
// https://sepolia.etherscan.io/address/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
const HOLDER = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';

async function main() {
  // Preparing a read costs nothing and needs no funds, so a fresh wallet is enough.
  const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
  const wallet = ethers.Wallet.createRandom().connect(provider);
  try {
    const signer = await PushChain.utils.signer.toUniversal(wallet);
    const pushChainClient = await PushChain.initialize(signer, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
    });

    console.log('Preparing the read...');
    const prepared = await pushChainClient.universal.prepareRead(HOLDER, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    });

    console.log('Query key:', prepared.queryKey);
    console.log('Chain:', prepared.chain);
    console.log('Pinned to block:', prepared.spec.blockNumber.toString());
    console.log('Expires at Push Chain height:', prepared.spec.expiryPushChainHeight.toString());
    console.log('Callback gas limit:', prepared.callbackGasLimit.toString());
    console.log('Result shape:', prepared.resultShape.kind);
    console.log('Protocol fee:', ethers.formatEther(prepared.fees.protocolFee), 'PC');
    console.log('Callback budget:', ethers.formatEther(prepared.fees.callbackBudget), 'PC');
    console.log('Total fee:', ethers.formatEther(prepared.fees.total), 'PC');
    console.log('Warnings:', prepared.warnings.length ? prepared.warnings.join('; ') : 'none');
  } finally {
    provider.destroy();
  }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.universal.prepareRead`
