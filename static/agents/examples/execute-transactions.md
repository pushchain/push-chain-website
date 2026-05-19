## Cross-Chain AMM Swap: ETH → pSOL via Push Chain AMM

Source: https://push.org/docs/chain/build/send-multichain-transactions/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/send-multichain-transactions/) for full context on when to apply this pattern.

## Code

```typescript
// 7-hop cross-chain cascade from a fresh Sepolia UOA:
//   Hop 0     (UOA_TO_PUSH) - value=200 PC seats UEA's PC budget via SDK fee-lock;
//                             funds attaches 0.001 ETH on the gateway tx.
//   hopBridge (UOA_TO_PUSH) - dedicated funds-only deposit hop that moves
//                             0.001 ETH from Sepolia UOA → 0.001 pETH on UEA
//                             before the swap hops fire.
//   Hop 1     (UOA_TO_PUSH) - Approve SwapRouter to spend pETH
//   Hop 2     (UOA_TO_PUSH) - Approve SwapRouter to spend WPC
//   Hop 3     (UOA_TO_PUSH) - Swap pETH → WPC on Push Chain AMM (Uniswap V3)
//   Hop 4     (UOA_TO_PUSH) - Swap WPC  → pSOL on Push Chain AMM
//   Hop 5     (UOA_TO_CEA)  - Bridge pSOL from UEA → Solana Devnet CEA
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';
const RPC_PUSH    = 'https://evm.donut.rpc.push.org/';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Push Chain AMM (Uniswap V3) on Donut Testnet
const SWAP_ROUTER_ADDRESS = '0x5D548bB9E305AAe0d6dc6e6fdc3ab419f6aC0037';
const QUOTER_V2_ADDRESS   = '0x83316275f7C2F79BC4E26f089333e88E89093037';
const WPC_ADDRESS         = '0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9'; // wrapped PC, AMM intermediate
const pETH_ADDRESS        = '0x2971824Db68229D087931155C2b8bB820B275809';
const pSOL_ADDRESS        = '0x5D525Df2bD99a6e7ec58b76aF2fd95F39874EBed';
const pSOL_DECIMALS       = 9; // pSOL mirrors native SOL's 9-decimal precision
const POOL_FEE = 500; // 0.05% fee tier of both pETH/WPC and pSOL/WPC pools on Donut
const AMOUNT_IN = PushChain.utils.helpers.parseUnits('0.001', 18);
const MAX_UINT256 = ethers.MaxUint256;
// Each swap call carries a 10-minute deadline. Refresh just before submit
// so the cascade has a healthy timestamp window when it lands on Push.
const swapDeadline = () => BigInt(Math.floor(Date.now() / 1000)) + BigInt(600);

const ERC20_APPROVE_ABI = [
  { inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }],
    name: 'approve', outputs: [{ type: 'bool' }], stateMutability: 'nonpayable', type: 'function' },
];

// Push Chain's deployed SwapRouter takes an 8-field ExactInputSingleParams
// tuple that includes 'deadline' between 'recipient' and 'amountIn' (Uniswap
// V3 SwapRouter V1 shape, NOT the 7-field SwapRouter02 shape).
const SWAP_ROUTER_ABI = [
  { inputs: [{
      components: [
        { name: 'tokenIn', type: 'address' },
        { name: 'tokenOut', type: 'address' },
        { name: 'fee', type: 'uint24' },
        { name: 'recipient', type: 'address' },
        { name: 'deadline', type: 'uint256' },
        { name: 'amountIn', type: 'uint256' },
        { name: 'amountOutMinimum', type: 'uint256' },
        { name: 'sqrtPriceLimitX96', type: 'uint160' },
      ], name: 'params', type: 'tuple' }],
    name: 'exactInputSingle',
    outputs: [{ name: 'amountOut', type: 'uint256' }],
    stateMutability: 'payable', type: 'function' },
];

const QUOTER_ABI = [
  { inputs: [{
      components: [
        { name: 'tokenIn', type: 'address' },
        { name: 'tokenOut', type: 'address' },
        { name: 'amountIn', type: 'uint256' },
        { name: 'fee', type: 'uint24' },
        { name: 'sqrtPriceLimitX96', type: 'uint160' },
      ], name: 'params', type: 'tuple' }],
    name: 'quoteExactInputSingle',
    outputs: [
      { name: 'amountOut', type: 'uint256' },
      { name: 'sqrtPriceX96After', type: 'uint160' },
      { name: 'initializedTicksCrossed', type: 'uint32' },
      { name: 'gasEstimate', type: 'uint256' },
    ],
    stateMutability: 'nonpayable', type: 'function' },
];

async function main() {
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider(RPC_SEPOLIA);
  const signer = wallet.connect(provider);
  console.log('🔑 Sepolia wallet (UOA):', wallet.address);

  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const client = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });
  console.log('🏠 UEA on Push Chain:', client.universal.account);

  // Derive the Solana CEA destination for Hop 5
  const uoa = PushChain.utils.account.toUniversal(wallet.address, {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  });
  const solanaCEA = await PushChain.utils.account.deriveExecutorAccount(uoa, {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    skipNetworkCheck: true,
  });
  console.log('📍 Solana CEA (Hop 5 destination):', solanaCEA.address);

  // Single funding ask. Hop 0 carries `value: 200 PC`, so the SDK fee-
  // locks Sepolia ETH worth ~200 PC into the UEA on first run and that
  // PC covers hops 1-5 plus the SVM outbound gas-swap (no manual UEA
  // top-up needed).
  await rl.question(':::prompt:::Send at least 0.1 Sepolia ETH to ' + wallet.address + ', then press Enter.\n(0.001 ETH bridges as pETH on Hop 0; the rest covers Sepolia signing gas + the SDK fee-lock that seats your UEA with ~200 PC.)\nSepolia faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia');

  // Quote both swap legs so we can size Hop 4 amountIn and Hop 5 bridge amount.
  // QuoterV2 is non-view, so call via staticCall to read return values.
  const pushProvider = new ethers.JsonRpcProvider(RPC_PUSH);
  const quoter = new ethers.Contract(QUOTER_V2_ADDRESS, QUOTER_ABI, pushProvider);
  const wpcQuote = await quoter.quoteExactInputSingle.staticCall({
    tokenIn: pETH_ADDRESS, tokenOut: WPC_ADDRESS,
    amountIn: AMOUNT_IN, fee: POOL_FEE, sqrtPriceLimitX96: BigInt(0),
  });
  const wpcAmount = (wpcQuote.amountOut * BigInt(99)) / BigInt(100); // 1% slippage buffer
  const pSolQuote = await quoter.quoteExactInputSingle.staticCall({
    tokenIn: WPC_ADDRESS, tokenOut: pSOL_ADDRESS,
    amountIn: wpcAmount, fee: POOL_FEE, sqrtPriceLimitX96: BigInt(0),
  });
  const pSolAmount = (pSolQuote.amountOut * BigInt(99)) / BigInt(100); // 1% slippage buffer
  console.log('💱 ' + ethers.formatUnits(AMOUNT_IN, 18) + ' pETH → ' + ethers.formatUnits(wpcQuote.amountOut, 18) + ' WPC → ' + ethers.formatUnits(pSolQuote.amountOut, pSOL_DECIMALS) + ' pSOL');

  // ── Hop 0 (UOA_TO_PUSH) ─ Deposit ETH from UOA → pETH on UEA ─────────
  // No 'from' field means Route 1 (UOA initiates). funds.amount attaches
  // 0.001 ETH as msg.value on the source-chain gateway tx, which mints
  // 0.001 pETH on the UEA. value=200 PC tells the SDK to fee-lock enough
  // Sepolia ETH from the same UOA tx to mint ~200 PC into the UEA - the
  // PC budget that hops 1-5 (2 approves, 2 swaps, 1 outbound) draw on.
  const hop0 = await client.universal.prepareTransaction({
    to: client.universal.account,
    value: PushChain.utils.helpers.parseUnits('200', 18),
    funds: {
      amount: AMOUNT_IN,
      token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH,
    },
  });
  console.log('✅ hop0 prepared (deposit ETH→pETH + 200 PC) - route:', hop0.route);

  // ── Hop Bridge (UOA_TO_PUSH) ─ Dedicated ETH→pETH bridge ─────────────
  // A pure "funds-only" Route 1 hop between Hop 0 and Hop 1 whose entire
  // job is to move 0.001 ETH from the Sepolia UOA into 0.001 pETH on the
  // UEA. Keeping it isolated (no value, no data) lets the SDK identify
  // it as a deposit hop and route the bridge through the gateway's
  // sendTxWithFunds path so pETH is credited before Hop 3's swap fires.
  const hopBridge = await client.universal.prepareTransaction({
    to: client.universal.account,
    funds: {
      amount: AMOUNT_IN,
      token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH,
    },
  });
  console.log('✅ hopBridge prepared (bridge ETH→pETH) - route:', hopBridge.route);

  // ── Hop 1 (UOA_TO_PUSH) ─ Approve SwapRouter for pETH ────────────────
  const hop1 = await client.universal.prepareTransaction({
    to: pETH_ADDRESS,
    data: PushChain.utils.helpers.encodeTxData({
      abi: ERC20_APPROVE_ABI, functionName: 'approve',
      args: [SWAP_ROUTER_ADDRESS, MAX_UINT256],
    }),
  });
  console.log('✅ hop1 prepared (approve pETH) - route:', hop1.route);

  // ── Hop 2 (UOA_TO_PUSH) ─ Approve SwapRouter for WPC ─────────────────
  const hop2 = await client.universal.prepareTransaction({
    to: WPC_ADDRESS,
    data: PushChain.utils.helpers.encodeTxData({
      abi: ERC20_APPROVE_ABI, functionName: 'approve',
      args: [SWAP_ROUTER_ADDRESS, MAX_UINT256],
    }),
  });
  console.log('✅ hop2 prepared (approve WPC) - route:', hop2.route);

  // ── Hop 3 (UOA_TO_PUSH) ─ Swap pETH → WPC on Push Chain AMM ──────────
  // Each call uses the 8-field SWAP_ROUTER_ABI defined above (the V1
  // tuple shape with `deadline` between `recipient` and `amountIn`).
  // viem encodes tuple components by NAME, so every numeric key has to
  // be present AND be a BigInt - otherwise the encoder calls
  // BigInt(undefined) and throws "Cannot convert undefined to a BigInt".
  const hop3 = await client.universal.prepareTransaction({
    to: SWAP_ROUTER_ADDRESS,
    data: PushChain.utils.helpers.encodeTxData({
      abi: SWAP_ROUTER_ABI, functionName: 'exactInputSingle',
      args: [{
        tokenIn: pETH_ADDRESS,
        tokenOut: WPC_ADDRESS,
        fee: BigInt(POOL_FEE),
        recipient: client.universal.account,
        deadline: swapDeadline(),
        amountIn: BigInt(AMOUNT_IN),
        amountOutMinimum: BigInt(0),
        sqrtPriceLimitX96: BigInt(0),
      }],
    }),
  });
  console.log('✅ hop3 prepared (pETH → WPC) - route:', hop3.route);

  // ── Hop 4 (UOA_TO_PUSH) ─ Swap WPC → pSOL on Push Chain AMM ──────────
  const hop4 = await client.universal.prepareTransaction({
    to: SWAP_ROUTER_ADDRESS,
    data: PushChain.utils.helpers.encodeTxData({
      abi: SWAP_ROUTER_ABI, functionName: 'exactInputSingle',
      args: [{
        tokenIn: WPC_ADDRESS,
        tokenOut: pSOL_ADDRESS,
        fee: BigInt(POOL_FEE),
        recipient: client.universal.account,
        deadline: swapDeadline(),
        amountIn: BigInt(wpcAmount),
        amountOutMinimum: BigInt(0),
        sqrtPriceLimitX96: BigInt(0),
      }],
    }),
  });
  console.log('✅ hop4 prepared (WPC → pSOL) - route:', hop4.route);

  // ── Hop 5 (UOA_TO_CEA) ─ Bridge pSOL out to Solana Devnet CEA ────────
  const hop5 = await client.universal.prepareTransaction({
    to: { address: solanaCEA.address, chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET },
    funds: {
      amount: pSolAmount,
      token: PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol,
    },
  });
  console.log('✅ hop5 prepared (pSOL → Solana CEA) - route:', hop5.route);

  // ── Execute all 7 hops as one user-signed transaction ────────────────
  // executeTransactions's progressHook streams ProgressEvent across every
  // phase (pre-flight, broadcast, cascade tracking). Each event has id,
  // title, message, and level - combine them for a full status line.
  const cascade = await client.universal.executeTransactions([hop0, hopBridge, hop1, hop2, hop3, hop4, hop5], {
    progressHook: (event) => {
      const icon = { INFO: 'ℹ️', SUCCESS: '✅', ERROR: '❌' }[event.level] || '•';
      console.log(icon + ' [' + event.id + '] ' + event.title + ' - ' + event.message);
    },
  });
  console.log('🚀 Cascade submitted - initialTxHash:', cascade.initialTxHash);
  console.log('📦 hopCount:', cascade.hopCount);

  // executeTransactions's progressHook above already streams per-hop tracking
  // events (SEND-TX-309-* and SEND-TX-399-*), so cascade.wait() doesn't need
  // its own progressHook - just await for completion.
  const result = await cascade.wait();
  console.log('🏁 All hops complete. Success:', result.success);

  // Solana outbound details from the cascade hops registry.
  const solanaHop = result.hops.find((h) => h.executionChain === PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET);
  if (solanaHop && solanaHop.outboundDetails) {
    console.log('🌞 Solana hop tx:', solanaHop.outboundDetails.externalTxHash);
    console.log('🔗 Solana explorer:', solanaHop.outboundDetails.explorerUrl);
  }
}

await main().catch(console.error);
```

## SDK Methods Used

- `PushChain.utils.signer.toUniversal`
- `PushChain.initialize`
- `PushChain.utils.helpers.parseUnits`
- `PushChain.utils.helpers.encodeTxData`
- `PushChain.utils.account.toUniversal`
- `PushChain.utils.account.deriveExecutorAccount`
