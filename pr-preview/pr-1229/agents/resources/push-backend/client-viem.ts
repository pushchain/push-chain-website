/**
 * push-chain-backend: client-viem.ts
 * Full working Node.js script using viem as the signer.
 *
 * Setup:
 *   npm install
 *   PRIVATE_KEY=0x... npx tsx client-viem.ts
 */
import { PushChain } from '@pushchain/core';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

const RPC_URL = 'https://evm.donut.rpc.push.org/';
const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;

if (!PRIVATE_KEY) {
  console.error('Missing PRIVATE_KEY env var');
  process.exit(1);
}

async function main() {
  // ── Initialize ────────────────────────────────────────────────────────────
  const account = privateKeyToAccount(PRIVATE_KEY);
  const walletClient = createWalletClient({
    account,
    transport: http(RPC_URL),
  });

  const signer = await PushChain.utils.signer.toUniversal(walletClient);
  const client = await PushChain.initialize(signer);

  console.log('✅ Client initialized | account:', account.address);

  // ── Route 1: Push Chain target ────────────────────────────────────────────
  console.log('\n→ Route 1: Send 0.01 PC to Push Chain…');
  const tx = await client.universal.sendTransaction({
    to: '0xFaE3594C68EDFc2A61b7527164BDAe80bC302108', // replace with actual address
    value: PushChain.utils.helpers.parseUnits('0.01', 18),
  });
  console.log('  Tx hash:', tx.hash);
  const receipt = await tx.wait();
  console.log('  Status:', receipt.status === 1 ? 'Success' : 'Failed');

  // ── Route 2: External chain target ────────────────────────────────────────
  console.log('\n→ Route 2: Send to Ethereum Sepolia…');
  const tx2 = await client.universal.sendTransaction({
    to: {
      address: '0xContractOnEthereum',
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    },
    data: '0x',
  });
  console.log('  Tx hash:', tx2.hash);
  await tx2.wait();

  // ── Cascade: prepare + execute ────────────────────────────────────────────
  console.log('\n→ Cascade: prepare + executeTransactions…');
  const prepared = await client.universal.prepareTransaction({
    to: {
      address: '0xContractOnEthereum',
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    },
    data: '0x',
  });
  const cascadeResult = await client.universal.executeTransactions([prepared]);
  await cascadeResult.waitForAll();
  console.log('  All hops confirmed');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
