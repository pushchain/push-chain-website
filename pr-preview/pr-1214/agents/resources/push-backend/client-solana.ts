/**
 * push-chain-backend: client-solana.ts
 * Full working Node.js script using a Solana Keypair as the signer.
 *
 * Setup:
 *   npm install
 *   SOLANA_KEY='[1,2,3,...]' npx tsx client-solana.ts
 *
 * SOLANA_KEY: your keypair as a JSON number array (e.g. from ~/.config/solana/id.json)
 */
import { PushChain } from '@pushchain/core';
import { Keypair } from '@solana/web3.js';

const SOLANA_KEY = process.env.SOLANA_KEY;

if (!SOLANA_KEY) {
  console.error('Missing SOLANA_KEY env var (JSON number array)');
  process.exit(1);
}

async function main() {
  // ── Initialize ────────────────────────────────────────────────────────────
  const keypair = Keypair.fromSecretKey(
    Uint8Array.from(JSON.parse(SOLANA_KEY))
  );
  const signer = await PushChain.utils.signer.toUniversalFromKeypair(keypair);
  const client = await PushChain.initialize(signer);

  console.log('✅ Client initialized | pubkey:', keypair.publicKey.toBase58());

  // ── Route 1: Push Chain target (from Solana origin) ───────────────────────
  console.log('\n→ Route 1: Send 0.01 PC to Push Chain…');
  const tx = await client.universal.sendTransaction({
    to: '0xFaE3594C68EDFc2A61b7527164BDAe80bC302108', // replace with actual address
    value: PushChain.utils.helpers.parseUnits('0.01', 18),
  });
  console.log('  Tx hash:', tx.hash);
  await tx.wait();
  console.log('  Confirmed');

  // ── Solana program target (svmExecute) ────────────────────────────────────
  // Use svmExecute when the target is a Solana program.
  // Replace targetProgram, accounts, and ixData with your actual values.
  console.log('\n→ Solana program target (svmExecute)…');
  const svmTx = await client.universal.sendTransaction({
    to: {
      address: 'YourProgramIdBase58Here', // replace with Solana program ID
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    },
    svmExecute: {
      targetProgram: 'YourProgramIdBase58Here', // base58 program ID
      accounts: [], // AccountMeta[] — program accounts
      ixData: Buffer.from([]), // instruction data bytes
    },
    funds: {
      amount: PushChain.utils.helpers.parseUnits('0.1', 9), // 0.1 SOL
      token: PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL,
    },
  });
  console.log('  Tx hash:', svmTx.hash);
  await svmTx.wait();
  console.log('  Confirmed');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
