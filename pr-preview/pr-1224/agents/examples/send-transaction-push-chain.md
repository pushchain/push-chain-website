## Send Transaction on Push Chain (Route 1)

## When to Use

Use this when sending native value or calling a contract on Push Chain. This is the most common route — your transaction executes directly on Push Chain via your UEA.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

async function main() {
  // Initialize client (see initialize-client-ethers example)
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
  const signer = wallet.connect(provider);
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  // Send 0.01 PC to a recipient on Push Chain
  const txResponse = await pushChainClient.universal.sendTransaction({
    to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',
    value: PushChain.utils.helpers.parseUnits('0.01', 18),
  });

  console.log('Transaction hash:', txResponse.hash);

  // Wait for confirmation
  const receipt = await txResponse.wait();
  console.log('Confirmed in block:', receipt.blockNumber);
}

main().catch(console.error);
```

## Key Points

- Plain address in `to` field triggers Route 1 (Push Chain execution)
- Value is in uPC (smallest unit) — use `parseUnits('0.01', 18)` for 0.01 PC
- `txResponse.wait()` returns the receipt after on-chain confirmation
- Gas is abstracted — user signs from Sepolia but execution happens on Push Chain
- UEA is automatically deployed on first transaction if needed