## Send Transaction to External Chain (Route 2)

## When to Use

Use this when you need to execute a transaction on an external chain (e.g., Ethereum Sepolia) while signing from any supported origin. Push Chain coordinates the execution via your CEA (Chain Executor Account).

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

  // Send transaction to external chain (Ethereum Sepolia)
  const txResponse = await pushChainClient.universal.sendTransaction({
    to: {
      address: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    },
    value: BigInt('10000000000000000'), // 0.01 ETH in wei
    data: '0x', // Empty data for simple transfer
  });

  console.log('Transaction submitted:', txResponse.hash);

  // Wait for cross-chain confirmation
  const receipt = await txResponse.wait();
  console.log('Execution confirmed');
}

main().catch(console.error);
```

## Key Points

- `to: { address, chain }` object triggers Route 2 (external chain execution)
- Execution happens on the specified external chain via your CEA
- Value is in the native unit of the target chain (wei for Ethereum)
- Push Chain acts as the coordination layer — no manual bridging required
- The user never switches networks; signing happens on the origin chain