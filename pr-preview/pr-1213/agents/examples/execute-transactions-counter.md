## Execute Transactions

Source: https://push.org/docs/chain/build/send-multichain-transactions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/send-multichain-transactions/) for full context on when to apply this pattern.

## Code

```typescript
// UOA on Sepolia - 3 hops in one signature:
//   Hop 0 (Route 1): UOA → increment counter on Push Chain
//   Hop 1 (Route 2): UOA → increment counter on BNB Testnet via CEA
//   Hop 2 (Route 2): UOA → increment counter on Solana Devnet via CEA
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const COUNTER_ABI = [
  { inputs: [], name: 'increment', outputs: [], stateMutability: 'nonpayable', type: 'function' },
];
const COUNTER_PUSH = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Push Chain Testnet (Donut)
const COUNTER_BNB  = '0x7f0936bb90e7dcf3edb47199c2005e7184e44cf8'; // BNB Testnet

async function main() {
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider(RPC_SEPOLIA);
  const signer = wallet.connect(provider);
  console.log('🔑 Sepolia wallet (UOA):', wallet.address);

  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const client = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  console.log('UEA on Push Chain:', client.universal.account);
  await rl.question(':::prompt:::Send at least 0.01 ETH (Sepolia) to: ' + wallet.address + ', and ensure your UEA (' + client.universal.account + ') on Push Chain has at least 5 PC. Get testnet ETH from https://cloud.google.com/application/web3/faucet/ethereum/sepolia. Press Enter when funded.');

  const calldata = PushChain.utils.helpers.encodeTxData({ abi: COUNTER_ABI, functionName: 'increment' });

  // Hop 0 (Route 1): UOA → increment counter directly on Push Chain
  const hop0 = await client.universal.prepareTransaction({
    to: COUNTER_PUSH,
    value: BigInt(0),
    data: calldata,
  });
  console.log('✅ hop0 prepared - route:', hop0.route);

  // Hop 1 (Route 2): UOA → increment counter on BNB Testnet via CEA
  const hop1 = await client.universal.prepareTransaction({
    to: { address: COUNTER_BNB, chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET },
    value: BigInt(0),
    data: calldata,
  });
  console.log('✅ hop1 prepared - route:', hop1.route);

  // Hop 2 (Route 2): UOA → call test_counter on Solana Devnet via CEA
  // Solana requires svmExecute (not EVM data) with program accounts and Borsh-encoded instruction data
  const SOL_TEST_PROGRAM = '0x7673075a980bfd5d6b1dffe99c31f63e8938519cc1c2af009dda5e568a94460d';
  const SOL_COUNTER_PDA  = '0x4f12fe6816ae7e33ebf7db0b154ec3b09e3bf1a7690481e8e9477d5a278ad3af';
  const SOL_TARGET       = '0x6a44bb5ea802a001386a5b39708523e1a3e1bafc8164ffcb94d1f5afa4849c69';
  const SOL_ZERO         = '0x0000000000000000000000000000000000000000000000000000000000000000';

  // Derive Solana CEA PDA for this wallet
  const uoa = PushChain.utils.account.toUniversal(wallet.address, { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA });
  const solanaCEA = await PushChain.utils.account.deriveExecutorAccount(uoa, {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    skipNetworkCheck: true,
  });
  console.log('📍 Solana CEA:', solanaCEA.address);

  // receive_sol instruction: discriminator (8 bytes) + amount as u64 LE (8 bytes)
  const discriminator = new Uint8Array([121, 244, 250, 3, 8, 229, 225, 1]);
  const amountBuf = new Uint8Array(8);
  new DataView(amountBuf.buffer).setBigUint64(0, BigInt(0), true);
  const ixData = new Uint8Array([...discriminator, ...amountBuf]);

  const hop2 = await client.universal.prepareTransaction({
    to: { address: SOL_TEST_PROGRAM, chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET },
    svmExecute: {
      targetProgram: SOL_TEST_PROGRAM,
      accounts: [
        { pubkey: SOL_COUNTER_PDA, isWritable: true },
        { pubkey: SOL_TARGET, isWritable: true },
        { pubkey: solanaCEA.address, isWritable: true },
        { pubkey: SOL_ZERO, isWritable: false },
      ],
      ixData,
    },
  });
  console.log('✅ hop2 prepared - route:', hop2.route);

  // Execute all 3 hops as one user-signed Push Chain transaction
  const cascade = await client.universal.executeTransactions([hop0, hop1, hop2]);
  console.log('🚀 Cascade submitted - initialTxHash:', cascade.initialTxHash);
  console.log('📦 hopCount:', cascade.hopCount);

  const result = await cascade.wait({
    progressHook: (e) => console.log('  [Hop ' + e.hopIndex + '] ' + e.status + ' on ' + e.chain),
  });
  console.log('🏁 All hops complete. Success:', result.success);
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `PushChain.utils.account.toUniversal`
- `PushChain.utils.account.deriveExecutorAccount`
