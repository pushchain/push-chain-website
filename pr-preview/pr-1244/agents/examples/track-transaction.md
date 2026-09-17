## Track Universal Transaction

## When to Use

Use this when you need to monitor the progress of a cross-chain transaction, display status updates in your UI, or wait for final completion across all involved chains.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

async function main() {
  // Initialize client
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
  const signer = wallet.connect(provider);
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  // Send transaction with progress tracking
  const txResponse = await pushChainClient.universal.sendTransaction({
    to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',
    value: PushChain.utils.helpers.parseUnits('0.01', 18),
    progressHook: (progress) => {
      console.log(`[${progress.id}] ${progress.title}: ${progress.message}`);
    },
  });

  console.log('Transaction hash:', txResponse.hash);

  // Wait for full completion
  const receipt = await txResponse.wait();
  console.log('Transaction confirmed in block:', receipt.blockNumber);
}

main().catch(console.error);
```

## Key Points

- `progressHook` callback receives events at each lifecycle stage (SEND-TX-01 through SEND-TX-99)
- Progress events include `id`, `title`, `message`, `level`, and `timestamp`
- Levels are `INFO`, `SUCCESS`, or `ERROR` for UI styling
- `txResponse.wait()` blocks until the transaction is fully confirmed
- Use progress events to show real-time status in your application UI