## Execute Multiple Reads in One Flow

Source: https://push.org/docs/chain/build/read-multiple-universal-states/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/read-multiple-universal-states/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

// vitalik.eth on Ethereum Sepolia, the public ENS address.
// https://sepolia.etherscan.io/address/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
const HOLDER = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';

// Push gateway vault PDA on Solana Devnet, derived with the seed 'vault' from the Solana Universal Gateway in the Smart Contract Address Book.
// https://explorer.solana.com/address/89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi?cluster=devnet
const VAULT_PDA = '89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi';

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

    console.log('Preparing two reads and quoting their fees...');
    const ethBalance = await pushChainClient.universal.prepareRead(HOLDER, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    });
    const solBalance = await pushChainClient.universal.prepareRead(VAULT_PDA, {
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    });
    console.log('Total fee:', ethers.formatEther(ethBalance.fees.total + solBalance.fees.total), 'PC');

    console.log('Submitting both reads to Push Chain...');
    const batch = await pushChainClient.universal.executeReads([ethBalance, solBalance], {
      waitForCompletion: false,
      progressHook: (progress) => console.log(progress.id + ': ' + progress.title),
    });
    console.log('Submission is atomic:', batch.atomic);
    console.log('Save request IDs:', batch.reads.map(read => read.requestId).join(', '));
    console.log('Save transaction hashes:', (batch.transactionHashes || [batch.txHash]).join(', '));

    console.log('Waiting for validators to reach quorum and deliver both callbacks (usually under a minute)...');
    const [eth, sol] = await batch.wait();
    // outcome is the success signal; value is set only when it is SUCCESS
    for (const read of [eth, sol]) {
      if (read.outcome !== PushChain.CONSTANTS.READ.OUTCOME.SUCCESS) throw new Error('Read ' + read.requestId + ' ended ' + read.outcome);
    }
    console.log('Value:', ethers.formatEther(eth.value), 'ETH');
    console.log('Value:', ethers.formatUnits(sol.value, 9), 'SOL');
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
