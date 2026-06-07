## Batch Contract Calls: Push Chain + BNB + Solana in One Signature

Source: https://push.org/docs/chain/build/send-multichain-transactions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/send-multichain-transactions/) for full context on when to apply this pattern.

## Code

```typescript
// Batch 3 contract calls across 3 chains - one user signature.
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';
const RPC_PUSH    = 'https://evm.donut.rpc.push.org/';
const RPC_BNB     = 'https://bsc-testnet-rpc.publicnode.com';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const COUNTER_ABI = [
  { inputs: [], name: 'increment', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  { inputs: [], name: 'count',   outputs: [{ name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'countPC', outputs: [{ name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
];
const COUNTER_PUSH = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Push Chain Testnet (Donut)
const COUNTER_BNB  = '0x7f0936bb90e7dcf3edb47199c2005e7184e44cf8'; // BNB Testnet
const SOL_TEST_PROGRAM = '8yNqjrMnFiFbVTVQcKij8tNWWTMdFkrDf9abCGgc2sgx'; // Solana Devnet, base58

// Anchor IDL for the Solana target — trimmed to just the receive_sol
// instruction we call below. In a real app this comes from your Anchor
// program's target/idl/*.json.
const testCounterIdl = {
  address: SOL_TEST_PROGRAM,
  metadata: { name: 'test_counter', version: '0.1.0', spec: '0.1.0' },
  instructions: [
    {
      name: 'receive_sol',
      discriminator: [121, 244, 250, 3, 8, 229, 225, 1],
      accounts: [
        { name: 'counter', writable: true, pda: { seeds: [{ kind: 'const', value: [99, 111, 117, 110, 116, 101, 114] }] } }, // 'counter'
        { name: 'recipient', writable: true, address: '89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi' },
        { name: 'cea_authority', writable: true }, // auto-populated with sender's CEA
        { name: 'system_program', address: '11111111111111111111111111111111' },
      ],
      args: [{ name: 'amount', type: 'u64' }],
    },
  ],
};

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
  await rl.question(':::prompt:::Fund these accounts, then press Enter:\\n  • UOA ' + wallet.address + ' on Sepolia — at least 0.005 ETH (gas to sign)\\n  • UEA ' + client.universal.account + ' on Push Chain — at least 5 PC (covers gas + per-hop gas-token swap for each Route 2 outbound)\\nSepolia faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia');

  // Read counters BEFORE
  const pushProvider = new ethers.JsonRpcProvider(RPC_PUSH);
  const bnbProvider  = new ethers.JsonRpcProvider(RPC_BNB);
  const pushCounter  = new ethers.Contract(COUNTER_PUSH, COUNTER_ABI, pushProvider);
  const bnbCounter   = new ethers.Contract(COUNTER_BNB,  COUNTER_ABI, bnbProvider);
  console.log('📊 Push Chain counter BEFORE:', (await pushCounter.countPC()).toString());
  console.log('📊 BNB counter BEFORE:',        (await bnbCounter.count()).toString());

  const calldata = PushChain.utils.helpers.encodeTxData({ abi: COUNTER_ABI, functionName: 'increment' });

  // Hop 0 (Route 1): increment counter on Push Chain
  const hop0 = await client.universal.prepareTransaction({
    to: COUNTER_PUSH,
    value: BigInt(0),
    data: calldata,
  });
  console.log('✅ hop0 prepared - route:', hop0.route);

  // Hop 1 (Route 2): increment counter on BNB Testnet via CEA
  const hop1 = await client.universal.prepareTransaction({
    to: { address: COUNTER_BNB, chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET },
    value: BigInt(0),
    data: calldata,
  });
  console.log('✅ hop1 prepared - route:', hop1.route);

  // Hop 2 (Route 2): call test_counter on Solana Devnet via CEA
  // Same shape as EVM (to, value, data). Accounts, PDAs and CEA come from the IDL.
  const solCalldata = PushChain.utils.helpers.encodeTxData({
    idl: testCounterIdl,
    functionName: 'receive_sol',
    args: [BigInt(0)],
  });

  const hop2 = await client.universal.prepareTransaction({
    to: {
      address: SOL_TEST_PROGRAM,
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    },
    value: BigInt(0),
    data: solCalldata,
  });
  console.log('✅ hop2 prepared - route:', hop2.route);

  // executeTransactions's progressHook streams ProgressEvent across every
  // phase (pre-flight, broadcast, cascade tracking). Each event has id,
  // title, message, and level — combine them for a full status line.
  const cascade = await client.universal.executeTransactions([hop0, hop1, hop2], {
    progressHook: (event) => {
      const icon = { INFO: 'ℹ️', SUCCESS: '✅', ERROR: '❌' }[event.level] || '•';
      console.log(icon + ' [' + event.id + '] ' + event.title + ' - ' + event.message);
    },
  });
  console.log('🚀 Cascade submitted - initialTxHash:', cascade.initialTxHash);
  console.log('📦 hopCount:', cascade.hopCount);

  // executeTransactions's progressHook above already streams per-hop tracking
  // events (SEND-TX-309-* and SEND-TX-399-*), so cascade.wait() doesn't need
  // its own progressHook — just await for completion.
  const result = await cascade.wait();
  console.log('🏁 All hops complete. Success:', result.success);

  if (result.success) {
    console.log('📊 Push Chain counter AFTER:', (await pushCounter.countPC()).toString());
    console.log('📊 BNB counter AFTER:',        (await bnbCounter.count()).toString());

    // Solana state isn't read via a public RPC contract call here —
    // surface the on-chain Solana hop's tx hash + explorer URL from
    // result.hops[].outboundDetails so devs can inspect it manually.
    const solanaHop = result.hops.find((h) => h.executionChain === PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET);
    if (solanaHop && solanaHop.outboundDetails) {
      console.log('🌞 Solana hop tx:', solanaHop.outboundDetails.externalTxHash);
      console.log('🔗 Solana explorer:', solanaHop.outboundDetails.explorerUrl);
    }
  }
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
