## Prepare Transaction

Source: https://push.org/docs/chain/build/send-multichain-transactions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/send-multichain-transactions/) for full context on when to apply this pattern.

## Code

```typescript
// Inspect PreparedUniversalTx before sending
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';

const COUNTER_ABI = [
  { inputs: [], name: 'increment', outputs: [], stateMutability: 'nonpayable', type: 'function' },
];
const COUNTER_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

async function main() {
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider(RPC_SEPOLIA);
  const signer = wallet.connect(provider);
  console.log('🔑 Sepolia account:', wallet.address);

  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const client = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  // Route 1: prepare a Push Chain transaction without sending it
  const prepared = await client.universal.prepareTransaction({
    to: COUNTER_ADDRESS,
    value: BigInt(0),
    data: PushChain.utils.helpers.encodeTxData({
      abi: COUNTER_ABI,
      functionName: 'increment',
    }),
  });

  console.log('📋 route:', prepared.route);
  console.log('⛽ estimatedGas:', prepared.estimatedGas.toString());
  console.log('🔢 nonce:', prepared.nonce.toString());
  console.log('⏱️  deadline:', prepared.deadline.toString());
  console.log('📦 Returned PreparedUniversalTx:', JSON.stringify(prepared));

  // Route 2: prepare a cross-chain transaction
  const preparedCrossChain = await client.universal.prepareTransaction({
    to: { address: COUNTER_ADDRESS, chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
    value: BigInt(0),
    data: PushChain.utils.helpers.encodeTxData({
      abi: COUNTER_ABI,
      functionName: 'increment',
    }),
  });

  console.log('📋 cross-chain route:', preparedCrossChain.route);
  console.log('⛽ estimatedGas:', preparedCrossChain.estimatedGas.toString());

  console.log('📦 Returned PreparedUniversalTx:', JSON.stringify(preparedCrossChain));
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
