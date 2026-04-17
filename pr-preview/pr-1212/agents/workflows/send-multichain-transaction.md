# Send Multichain Transaction

## Purpose

Two patterns for cross-chain execution via Push Chain:

1. **Single cross-chain call** — `sendTransaction` with `to: { address, chain }` (Route 2) or CEA origin (Route 3).
2. **Multi-hop cascade** — `prepareTransaction` + `executeTransactions` for composing multiple ordered steps across chains into a single user signature.

## When to Use

- Calling contracts on Ethereum, BNB Chain, or other supported external chains
- Interacting with DeFi protocols on external chains without switching networks
- Executing cross-chain operations where the target is not Push Chain
- Route 2: `to: { address, chain }` pattern
- Route 3: Using CEA as execution origin (`from: { chain }`)

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Initialized client | `pushChainClient` from `PushChain.initialize()` |
| Signer mode | Client must have `UniversalSigner` (not read-only) |
| Target chain supported | Chain must be in `PushChain.CONSTANTS.CHAIN.*` |
| CEA funded | For external execution, CEA on target chain may need native tokens |

## Inputs — `sendTransaction` / `prepareTransaction`

### Standard Arguments

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tx.to` | `string` \| `{ address: string; chain: CHAIN }` | Yes | Object form triggers external chain execution (Route 2) |
| `tx.from` | `{ chain: CHAIN }` | No | Forces CEA on that chain as execution origin (Route 3) |
| `tx.value` | `BigInt` | No | Native value in target chain's smallest unit |
| `tx.data` | `string` \| `Array<{to, value, data}>` | No | ABI-encoded calldata or multicall array |
| `tx.funds` | `{ amount: BigInt; token: PushChain.CONSTANTS.MOVEABLE.TOKEN.<CHAIN>.<TOKEN> }` | No | Move cross-chain asset atomically |
| `tx.progressHook` | `(progress: ProgressHookType) => void` | No | Callback for progress updates |
| `tx.svmExecute` | `{ targetProgram: string; accounts: { pubkey: string; isWritable: boolean }[]; ixData: Uint8Array }` | No | **Solana only.** Borsh-encoded instruction for SVM program execution via CEA |

### Advanced Arguments

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `tx.gasLimit` | `BigInt` | SDK estimated | Override gas limit |
| `tx.maxFeePerGas` | `BigInt` | SDK estimated | Override max fee per gas |
| `tx.maxPriorityFeePerGas` | `BigInt` | SDK estimated | Override priority fee |
| `tx.payGasWith` | `{ token: PushChain.CONSTANTS.PAYABLE.TOKEN.<CHAIN>.<TOKEN>; slippageBps?: number; minAmountOut?: bigint }` | — | Pay fees in supported token |
| `tx.deadline` | `BigInt` | — | Execution deadline |

## Steps

### Route 2: Execute on External Chain

1. **Identify target contract and chain**
   ```typescript
   const targetContract = '0xContractOnEthereum';
   const targetChain = PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA;
   ```

2. **Encode the function call (if calling a contract)**
   ```typescript
   import { ethers } from 'ethers';
   
   const iface = new ethers.Interface([
     'function deposit() payable'
   ]);
   const calldata = iface.encodeFunctionData('deposit', []);
   ```

3. **Send with `{ address, chain }` target**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: {
       address: targetContract,
       chain: targetChain,
     },
     data: calldata,
     value: BigInt('100000000000000000'), // 0.1 ETH in wei
   });
   ```

4. **Track execution**
   ```typescript
   console.log('Push Chain coordination tx:', txResponse.hash);
   // External chain execution is coordinated through Push Chain
   ```

### Route 3: CEA-Origin to Push Chain

Use this when you need Push Chain execution to reflect an external chain identity (e.g., returning from Ethereum interaction).

1. **Specify from chain to set CEA as origin**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     from: { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
     to: '0xContractOnPushChain',
     data: calldata,
   });
   ```

2. **Result executes on Push Chain with Ethereum CEA as msg.sender**

### With Progress Tracking

1. **Define comprehensive progress handler**
   ```typescript
   const progressHandler = (progress) => {
     const timestamp = new Date(progress.timestamp).toLocaleTimeString();
     console.log(`[${timestamp}] ${progress.id} - ${progress.level}`);
     console.log(`  ${progress.title}: ${progress.message}`);
   };
   ```

2. **Send with progress tracking**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: {
       address: '0xExternalContract',
       chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
     },
     data: calldata,
     progressHook: progressHandler,
   });
   ```

### Common External Chain Constants

```typescript
PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA   // eip155:11155111
PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA   // eip155:421614
PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA       // eip155:84532
PushChain.CONSTANTS.CHAIN.BNB_TESTNET        // eip155:97
PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET      // solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1
```

### Route 2: Solana Target (svmExecute)

For Solana chain targets, use `svmExecute` instead of `data`. Encode instruction data using Borsh.

```typescript
const solanaCEA = await PushChain.utils.account.deriveExecutorAccount(
  PushChain.utils.account.toUniversal(wallet.address, { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }),
  { chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET, skipNetworkCheck: true }
);

const txResponse = await pushChainClient.universal.sendTransaction({
  to: { address: SOL_PROGRAM_ADDRESS, chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET },
  svmExecute: {
    targetProgram: SOL_PROGRAM_ADDRESS,
    accounts: [
      { pubkey: SOL_COUNTER_PDA, isWritable: true },
      { pubkey: solanaCEA.address, isWritable: true },
    ],
    ixData: new Uint8Array([/* Borsh-encoded instruction */]),
  },
});
```

## Multi-Hop Cascades: prepareTransaction + executeTransactions

Compose multiple ordered steps across chains into a single user signature.

### Step 1: Prepare Each Transaction

**`pushChainClient.universal.prepareTransaction({tx}): Promise<PreparedUniversalTx>`**

Accepts the same arguments as `sendTransaction`. Returns an intermediate `PreparedUniversalTx` object.

```typescript
const hop0 = await pushChainClient.universal.prepareTransaction({
  to: '0xContractOnPushChain',
  value: 0n,
  data: PushChain.utils.helpers.encodeTxData({ abi: MyABI, functionName: 'increment' }),
});

const hop1 = await pushChainClient.universal.prepareTransaction({
  to: { address: '0xContractOnBNB', chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET },
  value: 0n,
  data: PushChain.utils.helpers.encodeTxData({ abi: MyABI, functionName: 'increment' }),
});
```

`PreparedUniversalTx` shape:

| Property | Type | Description |
|----------|------|-------------|
| `route` | `'UOA_TO_PUSH'` \| `'UOA_TO_CEA'` \| `'CEA_TO_PUSH'` \| `'CEA_TO_CEA'` | Detected routing mode |
| `estimatedGas` | `bigint` | Estimated gas units |
| `nonce` | `bigint` | Nonce for submission |
| `deadline` | `bigint` | Signature expiry deadline |
| `payload` | `string` | Encoded payload ready for submission |

### Step 2: Execute All Hops

**`pushChainClient.universal.executeTransactions(txs: PreparedUniversalTx[]): Promise<CascadedTxResponse>`**

```typescript
const cascade = await pushChainClient.universal.executeTransactions([hop0, hop1]);
console.log('Initial Push Chain tx:', cascade.initialTxHash);
console.log('Hop count:', cascade.hopCount);

// Wait for all hops to complete
const result = await cascade.wait({
  progressHook: (e) => console.log(`[Hop ${e.hopIndex}] ${e.status} on ${e.chain}`),
  pollingIntervalMs: 5000, // default
  timeout: 600000,         // 10 min default
});
console.log('All complete:', result.success);
```

`CascadedTxResponse` shape:

| Property | Type | Description |
|----------|------|-------------|
| `initialTxHash` | `string` | Hash of the user-signed Push Chain transaction |
| `initialTxResponse` | `UniversalTxResponse` | Full response for initial Push Chain tx |
| `hops` | `CascadeHopInfo[]` | All hops with routing and status |
| `hopCount` | `number` | Total hop count |
| `wait(opts?)` | `Promise<CascadeCompletionResult>` | Waits for all hops to complete |
| `waitForAll(opts?)` | `Promise<CascadeCompletionResult>` | Alias for `wait` |

`CascadeHopInfo` per hop:

| Property | Type | Description |
|----------|------|-------------|
| `hopIndex` | `number` | Position (0-indexed) |
| `route` | `string` | Routing mode for this hop |
| `executionChain` | `CHAIN` | Chain where this hop executes |
| `status` | `'pending'` \| `'submitted'` \| `'confirmed'` \| `'failed'` | Current status |
| `txHash` | `string` | Resolved transaction hash |
| `outboundDetails` | `object` | External chain details (hash, explorer URL, recipient, amount) |

## Expected Output

See `send-universal-transaction.md` for the full `TxResponse` and `UniversalTxReceipt` shapes — they apply to Route 2/3 `sendTransaction` calls identically.

For `executeTransactions`, see `CascadedTxResponse` table above.

### Progress Hook Events (Route 2 specific)

| ID | Title | Level |
|----|-------|-------|
| `SEND-TX-01` | Origin Chain Detected | INFO |
| `SEND-TX-03-01` | Resolving UEA | INFO |
| `SEND-TX-03-02` | UEA Resolved | SUCCESS |
| `SEND-TX-04-02` | Awaiting Signature | INFO |
| `SEND-TX-04-03` | Verification Success | SUCCESS |
| `SEND-TX-05-01` | Gas Funding In Progress | INFO |
| `SEND-TX-05-02` | Gas Funding Confirmed | SUCCESS |
| `SEND-TX-07` | Broadcasting to Push Chain | INFO |
| `SEND-TX-99-01` | Push Chain Tx Success | SUCCESS |
| `SEND-TX-99-02` | Push Chain Tx Failed | ERROR |

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `Unsupported chain` | Target chain not in CONSTANTS.CHAIN | Use only supported chain identifiers |
| `CEA insufficient funds` | CEA on external chain lacks native tokens | Fund CEA or use `tx.funds` to move assets |
| `External execution failed` | Contract reverted on target chain | Check contract state and parameters on target chain |
| `Chain coordination timeout` | External chain finality delay | Increase timeout or retry; monitor via block explorer |
| `Invalid chain in to.chain` | Mismatched or malformed chain constant | Verify chain constant from `PushChain.CONSTANTS.CHAIN` |

## Agent Notes

- **Route 2 triggers automatically**: When `to` is `{ address, chain }`, SDK routes through CEA on that chain.
- **Route 3 is rare**: Only needed when Push Chain execution must show external chain identity as origin.
- **CEA is chain-specific**: Each external chain has its own CEA derived from your UEA. Use `PushChain.utils.account.deriveExecutorAccount(uoa, { chain })` to get CEA address.
- **Gas on external chains**: External execution may require native tokens on the target chain.
- **Push Chain is coordination layer**: The `txHash` returned is the Push Chain coordination tx; external execution follows asynchronously.
- **Cross-chain latency**: External chain finality affects total confirmation time.
- **Solana uses svmExecute**: For Solana targets use the `svmExecute` field with Borsh-encoded `ixData`; `tx.data` is EVM-only.
- **No atomicity in cascades**: If a downstream hop fails, earlier hops are already on-chain. Design contracts to handle partial execution.
- **Single signature for cascades**: `executeTransactions` submits one transaction to Push Chain; the SDK coordinates all downstream hops.

## MCP Mapping Candidates

- `send_external_chain_call` — Execute contract call on external chain via CEA
- `send_cea_origin_transaction` — Execute on Push Chain with external origin identity
- `prepare_transaction` — Prepare a single transaction hop without executing
- `execute_cascade` — Execute ordered array of prepared transactions as multi-hop cascade
- `get_cea_address` — Derive CEA address for specific external chain via `deriveExecutorAccount`
- `check_cea_balance` — Verify CEA has sufficient funds on target chain
- `list_supported_chains` — Return all supported external chain constants