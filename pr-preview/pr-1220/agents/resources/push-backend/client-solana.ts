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
    Uint8Array.from(JSON.parse(SOLANA_KEY!))
  );
  const signer = await PushChain.utils.signer.toUniversalFromKeypair(keypair, {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
  });
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

  // ── Route 2: Solana program target (encodeTxData with IDL) ─────────────────
  // Use encodeTxData({ idl }) for Solana program calls — the SDK resolves
  // accounts, PDAs, and the sender's CEA automatically from the Anchor IDL.
  // Replace testCounterIdl and args with your actual IDL and instruction args.
  console.log('\n→ Route 2: Solana program target…');
  // import testCounterIdl from './target/idl/test_counter.json';
  const data = PushChain.utils.helpers.encodeTxData({
    idl: {} as any, // replace with: import idl from './target/idl/your_program.json'
    functionName: 'receive_sol', // snake_case or camelCase both accepted
    args: [BigInt(0)], // use BigInt for u64/u128 args
  });
  const svmTx = await client.universal.sendTransaction({
    to: {
      address: 'YourProgramIdBase58Here', // replace with Solana program ID (base58)
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    },
    value: BigInt(0),
    data,
  });
  console.log('  Tx hash:', svmTx.hash);
  const receipt = await svmTx.wait();
  console.log('  Solana tx hash:', receipt.externalTxHash);
  console.log('  Explorer:', receipt.externalExplorerUrl);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
