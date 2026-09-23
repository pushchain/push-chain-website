## ERC-20 Balance (USDC held by the Push Vault)

Source: https://push.org/docs/chain/build/universal-read/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/universal-read/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

// Push Vault on Ethereum Sepolia, from the Smart Contract Address Book.
// https://sepolia.etherscan.io/address/0xD019Eb12D0d6eF8D299661f22B4B7d262eD4b965
const VAULT = '0xD019Eb12D0d6eF8D299661f22B4B7d262eD4b965';
// USDC on Ethereum Sepolia, Circle's deployment.
// https://sepolia.etherscan.io/address/0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
const USDC = '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238';

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

    console.log('Submitting the read request to Push Chain...');
    const pending = await pushChainClient.universal.read(VAULT, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      token: USDC,
      waitForCompletion: false,
      progressHook: (progress) => console.log(progress.id + ': ' + progress.title),
    });
    console.log('Save requestId:', pending.requestId);
    console.log('Save txHash:', pending.txHash);

    console.log('Waiting for validators to reach quorum and deliver the callback (usually under a minute)...');
    const done = await pending.wait();
    console.log('Value:', ethers.formatUnits(done.value, 6), 'USDC');
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
- `pushChainClient.universal.read`
