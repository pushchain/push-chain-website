/**
 * push-chain-backend: client-ethers.ts
 * Full working Node.js script using ethers.js as the signer.
 *
 * Setup:
 *   npm install
 *   PRIVATE_KEY=0x... npx tsx client-ethers.ts
 *
 * Covers:
 *   - Route 1: send to Push Chain
 *   - Route 2: send to an external chain (via CEA)
 */
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

const RPC_URL = 'https://evm.donut.rpc.push.org/';
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!PRIVATE_KEY) {
  console.error('Missing PRIVATE_KEY env var');
  process.exit(1);
}

async function main() {
  // ── Initialize ────────────────────────────────────────────────────────────
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY!, provider);
  const signer = await PushChain.utils.signer.toUniversal(wallet);
  const client = await PushChain.initialize(signer);

  console.log('✅ Client initialized | wallet:', wallet.address);

  // ── Route 1: Push Chain target ────────────────────────────────────────────
  console.log('\n→ Route 1: Send 0.01 PC to Push Chain…');
  const tx1 = await client.universal.sendTransaction({
    to: '0xFaE3594C68EDFc2A61b7527164BDAe80bC302108', // replace with actual address
    value: PushChain.utils.helpers.parseUnits('0.01', 18),
  });
  console.log('  Tx hash:', tx1.hash);
  const receipt1 = await tx1.wait();
  console.log('  Status:', receipt1.status === 1 ? 'Success' : 'Failed');

  // ── Route 2: External chain target (via CEA) ──────────────────────────────
  console.log('\n→ Route 2: Send to Ethereum Sepolia contract…');
  const tx2 = await client.universal.sendTransaction({
    to: {
      address: '0xContractOnEthereum', // replace with target contract
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    },
    data: '0x', // replace with ABI-encoded calldata
    funds: {
      amount: PushChain.utils.helpers.parseUnits('1', 6), // 1 USDT
      token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
    },
  });
  console.log('  Tx hash:', tx2.hash);
  const receipt2 = await tx2.wait();
  console.log('  External tx hash:', receipt2.externalTxHash);

  // ── Explorer URLs ─────────────────────────────────────────────────────────
  console.log('\nExplorer:', client.explorer.getTransactionUrl(tx1.hash));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
