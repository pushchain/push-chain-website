## Cross-Chain Reads in One Batch

Source: https://push.org/docs/chain/build/read-multiple-universal-states/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/read-multiple-universal-states/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

// Chainlink ETH / USD price feed on Ethereum Sepolia, from Chainlink Data Feeds. The answer has 8 decimals.
// https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1#sepolia-testnet
const FEED = '0x694AA1769357215DE4FAC081bf1f309aDC325306';
const FEED_ABI = [
  { type: 'function', name: 'latestAnswer', stateMutability: 'view', inputs: [], outputs: [{ type: 'int256' }] },
];

// Push gateway vault PDA on Solana Devnet, derived with the seed 'vault' from the Solana Universal Gateway in the Smart Contract Address Book.
// https://explorer.solana.com/address/89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi?cluster=devnet
const VAULT_PDA = '89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi';

// USDC mint on Solana Devnet, Circle's deployment, listed in the Smart Contract Address Book.
// https://explorer.solana.com/address/4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU?cluster=devnet
const USDC_MINT = '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU';

// JSONPlaceholder, a free public test API whose values do not change between fetches.
// https://jsonplaceholder.typicode.com/users/1
const ENDPOINT = 'https://jsonplaceholder.typicode.com/users/1';

async function main() {
  const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
  const wallet = ethers.Wallet.createRandom().connect(provider);
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    console.log('Temporary Donut wallet:', wallet.address);
    await rl.question(':::prompt:::Fund this temporary wallet with test PC, then press Enter: ' + wallet.address + ' Faucet: https://faucet.push.org/');
    const signer = await PushChain.utils.signer.toUniversal(wallet);
    const pushChainClient = await PushChain.initialize(signer, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
    });

    console.log('Preparing three reads across Ethereum, Solana and Web2...');
    const price = await pushChainClient.universal.prepareRead(FEED, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      abi: FEED_ABI,
      functionName: 'latestAnswer',
    });
    const usdc = await pushChainClient.universal.prepareRead(VAULT_PDA, {
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
      token: USDC_MINT,
    });
    const user = await pushChainClient.universal.prepareRead(ENDPOINT, {
      chain: PushChain.CONSTANTS.CHAIN.WEB2,
      web2: {
        extract: [
          { path: '$.id', valueType: 'uint256' },
          { path: '$.name', valueType: 'string' },
        ],
      },
    });
    console.log('Total fee:', ethers.formatEther(price.fees.total + usdc.fees.total + user.fees.total), 'PC');

    console.log('Submitting all three reads to Push Chain...');
    const batch = await pushChainClient.universal.executeReads([price, usdc, user], {
      waitForCompletion: false,
      progressHook: (progress) => console.log(progress.id + ': ' + progress.title),
    });
    console.log('Submission is atomic:', batch.atomic);
    console.log('Save request IDs:', batch.reads.map(read => read.requestId).join(', '));
    console.log('Save transaction hashes:', (batch.transactionHashes || [batch.txHash]).join(', '));

    console.log('Waiting for validators to reach quorum and deliver all three callbacks (usually under a minute)...');
    const [priceResult, usdcResult, userResult] = await batch.wait();
    // outcome is the success signal; value is set only when it is SUCCESS
    for (const read of [priceResult, usdcResult, userResult]) {
      if (read.outcome !== PushChain.CONSTANTS.READ.OUTCOME.SUCCESS) throw new Error('Read ' + read.requestId + ' ended ' + read.outcome);
    }
    console.log('Value:', ethers.formatUnits(priceResult.value, 8), 'USD per ETH');
    console.log('Value:', ethers.formatUnits(usdcResult.value, 6), 'USDC');
    console.log('Value:', JSON.stringify(userResult.value, (_, value) => typeof value === 'bigint' ? value.toString() : value));
    console.log('id:', userResult.value[0].toString(), 'name:', userResult.value[1]);
  } finally {
    rl.close();
    provider.destroy();
  }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `pushChainClient.universal.prepareRead`
- `pushChainClient.universal.executeReads`
