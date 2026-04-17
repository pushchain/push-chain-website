## Cross-Chain AMM Swap: ETH → pSOL via Push Chain AMM

Source: https://push.org/docs/chain/build/send-multichain-transactions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/send-multichain-transactions/) for full context on when to apply this pattern.

## Code

```typescript
// 3-hop multichain cascade:
//   Hop 0 (CEA_TO_PUSH)  - Pull ETH from Ethereum Sepolia CEA into Push Chain
//   Hop 1 (UOA_TO_PUSH)  - Swap pETH → pSOL on Push Chain AMM
//   Hop 2 (UOA_TO_CEA)   - Send pSOL out to Solana Devnet
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Push Chain AMM (Uniswap V3 fork) - swap router on testnet
const SWAP_ROUTER_ADDRESS = '0x81b8Bca02580C7d6b636051FDb7baAC436bFb454';
const SWAP_ROUTER_ABI = [
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'tokenIn', type: 'address' },
          { internalType: 'address', name: 'tokenOut', type: 'address' },
          { internalType: 'uint24', name: 'fee', type: 'uint24' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOutMinimum', type: 'uint256' },
          { internalType: 'uint160', name: 'sqrtPriceLimitX96', type: 'uint160' },
        ],
        internalType: 'struct ISwapRouter.ExactInputSingleParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactInputSingle',
    outputs: [{ internalType: 'uint256', name: 'amountOut', type: 'uint256' }],
    stateMutability: 'payable',
    type: 'function',
  },
];

// Synthetic token addresses on Push Chain testnet
const pETH_ADDRESS = '0x2971824Db68229D087931155C2b8bB820B275809';
const pSOL_ADDRESS = '0x5D525Df2bD99a6e7ec58b76aF2fd95F39874EBed';

// Amount to move: 0.001 ETH
const AMOUNT_IN = PushChain.utils.helpers.parseUnits('0.001', 18);

async function main() {
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider(RPC_SEPOLIA);
  const signer = wallet.connect(provider);
  console.log('🔑 Wallet (UOA):', wallet.address);

  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const client = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  console.log('UEA on Push Chain:', client.universal.account);
  await rl.question(':::prompt:::Send at least 0.002 ETH (Sepolia) to: ' + wallet.address + ', ensure your UEA (' + client.universal.account + ') on Push Chain has pETH and at least 5 PC, and ensure your CEA on Sepolia has at least 0.001 ETH. Get testnet ETH from: https://cloud.google.com/application/web3/faucet/ethereum/sepolia. Press Enter when funded.');

  // ── Hop 0: CEA_TO_PUSH ─────────────────────────────────────────────────
  // Pull 0.001 ETH from the Ethereum Sepolia CEA into Push Chain.
  // The 'from' field signals this originates from the Sepolia CEA.
  const hop0 = await client.universal.prepareTransaction({
    from: { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
    to: wallet.address,           // receive into this UOA on Push Chain
    value: BigInt(0),
    data: '0x',
    funds: {
      amount: AMOUNT_IN,
      token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH,
    },
  });
  console.log('✅ hop0 prepared - route:', hop0.route);

  // ── Hop 1: UOA_TO_PUSH ─────────────────────────────────────────────────
  // Swap pETH → pSOL on the Push Chain AMM using exactInputSingle.
  const hop1 = await client.universal.prepareTransaction({
    to: SWAP_ROUTER_ADDRESS,
    value: BigInt(0),
    data: PushChain.utils.helpers.encodeTxData({
      abi: SWAP_ROUTER_ABI,
      functionName: 'exactInputSingle',
      args: [{
        tokenIn: pETH_ADDRESS,
        tokenOut: pSOL_ADDRESS,
        fee: 3000,                // 0.3% pool fee
        recipient: wallet.address,
        amountIn: AMOUNT_IN,
        amountOutMinimum: BigInt(0),
        sqrtPriceLimitX96: BigInt(0),
      }],
    }),
  });
  console.log('✅ hop1 prepared - route:', hop1.route);

  // ── Hop 2: UOA_TO_CEA ──────────────────────────────────────────────────
  // Derive the CEA (Chain Executor Account) on Solana Devnet for this wallet.
  const uoa = PushChain.utils.account.toUniversal(wallet.address, { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA });
  const solanaCEA = await PushChain.utils.account.deriveExecutorAccount(uoa, {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    skipNetworkCheck: true,
  });
  console.log('📍 Solana CEA (destination):', solanaCEA.address);
  const hop2 = await client.universal.prepareTransaction({
    to: { address: solanaCEA.address, chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET },
    value: BigInt(0),
    data: '0x',
    funds: {
      amount: AMOUNT_IN,
      token: PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSOL,
    },
  });
  console.log('✅ hop2 prepared - route:', hop2.route);

  // ── Execute all 3 hops as one user-signed transaction ──────────────────
  const cascade = await client.universal.executeTransactions([hop0, hop1, hop2]);
  console.log('🚀 Cascade submitted - initialTxHash:', cascade.initialTxHash);
  console.log('Hop Count:', cascade.hopCount);

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
- `PushChain.utils.helpers.parseUnits`
- `PushChain.utils.account.toUniversal`
- `PushChain.utils.account.deriveExecutorAccount`
