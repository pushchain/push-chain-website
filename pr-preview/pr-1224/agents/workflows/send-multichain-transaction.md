# Send Multichain Transaction

## Purpose

Two patterns for cross-chain execution via Push Chain:

1. **Single cross-chain call** - `sendTransaction` with `to: { address, chain }` (Route 2) or CEA origin (Route 3).
2. **Multi-hop cascade** - `prepareTransaction` + `executeTransactions` for composing multiple ordered steps across chains into a single user signature.

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

## Inputs - `sendTransaction` / `prepareTransaction`

### Standard Arguments

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tx.to` | `string` \| `{ address: string; chain: CHAIN }` | Yes | Object form triggers external chain execution (Route 2) |
| `tx.from` | `{ chain: CHAIN }` | No | Forces CEA on that chain as execution origin (Route 3) |
| `tx.value` | `BigInt` | No | Native value in target chain's smallest unit |
| `tx.data` | `string` \| `Array<{to, value, data}>` | No | ABI-encoded calldata or multicall array |
| `tx.funds` | `{ amount: BigInt; token: PushChain.CONSTANTS.MOVEABLE.TOKEN.<CHAIN>.<TOKEN> }` | No | Move cross-chain asset atomically |
| `tx.progressHook` | `(progress: ProgressHookType) => void` | No | Callback for progress updates |

### Advanced Arguments

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `tx.gasLimit` | `BigInt` | SDK estimated | Override gas limit |
| `tx.maxFeePerGas` | `BigInt` | SDK estimated | Override max fee per gas |
| `tx.maxPriorityFeePerGas` | `BigInt` | SDK estimated | Override priority fee |
| `tx.payGasWith` | `{ token: PushChain.CONSTANTS.PAYABLE.TOKEN.<CHAIN>.<TOKEN>; slippageBps?: number; minAmountOut?: bigint }` | - | Pay fees in supported token |
| `tx.deadline` | `BigInt` | - | Execution deadline |
| `tx.options.enforceGasCheck` | `boolean` | `false` | Carries strict pre-flight gas/balance enforcement into `executeTransactions`. When `true` on any hop, the cascade throws `InsufficientUEABalanceError` before broadcast if pre-flight detects a shortfall, instead of emitting a warning and proceeding. The flag set on one hop opts the whole cascade into strict mode. |

## Steps

### Route 2: Execute on External Chain

**Origin types.** The signer can be a wallet on an external chain (EVM or SVM) OR a Push Account (UEA, native Push Chain wallet, or smart contract on Push). Execution always lands on the target external chain via that signer's CEA.

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

**Origin types.** The authorizing signer is a Push Account: a UEA, a native Push Chain wallet, or a smart contract on Push Chain. That Push Account acts through its CEA on the external chain you pass in `from: { chain }`, and execution lands back on Push Chain. `msg.sender` inside the target contract will be the CEA, not the UEA.

Add `from: { chain }` to use your CEA on an external chain as the execution origin on Push Chain.

**Why CEAs exist.** When your Push Chain account first interacts with an external chain (e.g. calling Aave on Ethereum), the protocol deterministically deploys a **Chain Executor Account (CEA)** for you on that chain. This CEA:

1. **Preserves identity** - your actions on Ethereum are traceable to a stable, deterministic address derived from your Push Chain account.
2. **Isolates risk** - the CEA is a dedicated smart account, separate from your home wallet.
3. **Enables payload execution** - the CEA is what actually holds assets and executes calldata on the external chain.

**When to use Route 3.** Use it when you need to bring state or assets *back* to Push Chain from a CEA you’ve already deployed - because only the CEA can speak for what happened on that external chain.

Example flow - a universal vault:

1. Route 2: vault calls Aave on Ethereum via your **Ethereum CEA** to withdraw USDC.
2. **Route 3**: vault moves withdrawn USDC from Ethereum CEA back to Push Chain - `msg.sender` on Push Chain is your Ethereum CEA.
3. Route 2 again: Push Chain forwards to a Solana lending protocol via your **Solana CEA**.

```typescript
// Bring assets/state back from Ethereum CEA to Push Chain
const txResponse = await pushChainClient.universal.sendTransaction({
  from: { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }, // Ethereum CEA as origin
  to: '0xVaultOnPushChain',
  data: calldata,
});
// Inside 0xVaultOnPushChain: msg.sender === CEA(Ethereum Sepolia, userAddress)
```

```
User → Push vault
  Route 2 → Ethereum CEA → Aave (withdraw USDC)
  Route 3 ← Ethereum CEA → Push vault (receive USDC, msg.sender = Ethereum CEA)
  Route 2 → Solana CEA → Solana lending (deposit)
```

> Route 3 isn’t for new outbound flows - use Route 2 for those. Route 3 is the return path from a CEA you’ve already deployed via prior Route 2 activity.

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
  pollingIntervalMs: 3000, // default
  timeout: 300000,         // 5 min default
});
console.log('All complete:', result.success);
```

`CascadedTxResponse` shape:

| Property | Type | Description |
|----------|------|-------------|
| `initialTxHash` | `string` | Hash of the user-signed Push Chain transaction, use this to reference it downstream |
| `initialTxResponse` | `UniversalTxResponse` | Full response for the coordinating Push Chain tx; use this when you need nonce, gas, or block metadata |
| `hops` | `CascadeHopInfo[]` | All hops with routing and status |
| `hopCount` | `number` | Total hop count |
| `finalTxHash` _(optional)_ | `string` | Final tx hash resolved by `waitForAll()` / `wait()` once cascade tracking completes |
| `wait(opts?)` | `Promise<CascadeCompletionResult>` | Waits for all hops to complete |
| `waitForAll(opts?)` | `Promise<CascadeCompletionResult>` | Alias for `wait` |

`CascadeHopInfo` per hop:

| Property | Type | Description |
|----------|------|-------------|
| `hopIndex` | `number` | Position (0-indexed) |
| `route` | `TransactionRouteType` | `'UOA_TO_PUSH'`, `'UOA_TO_CEA'`, `'CEA_TO_PUSH'`, or `'CEA_TO_CEA'` |
| `executionChain` | `CHAIN` | Chain where this hop executes |
| `expectedSubTxId` _(optional)_ | `string` | Expected `universalSubTxId`, computed deterministically from the parent; available before `txHash` resolves |
| `status` | `'pending'` \| `'submitted'` \| `'confirmed'` \| `'failed'` | Current status |
| `txHash` _(optional)_ | `string` | Resolved transaction hash |
| `outboundDetails` _(optional, outbound hops only)_ | `OutboundTxDetails` | Fields: `externalTxHash`, `destinationChain`, `explorerUrl`, `recipient`, `amount`, `assetAddr` (`address(0)` for native) |

`CascadeCompletionResult` (from `wait()` / `waitForAll()`):

| Property | Type | Description |
|----------|------|-------------|
| `success` | `boolean` | True if all hops confirmed |
| `hops` | `CascadeHopInfo[]` | Final state of all hops |
| `finalTxHash` _(optional)_ | `string` | Final tx hash for the last confirmed hop |
| `finalTxResponse` _(optional)_ | `CascadedTxResponse` | Original cascade response, for consumers that need the full context |
| `failedAt` _(optional)_ | `number` | Index of first failed hop, if any |

`CascadeTrackOptions` (wait / waitForAll options):

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `pollingIntervalMs` | `number` | `3000` | Poll interval (ms) |
| `timeout` | `number` | `300000` | Total timeout (ms), default 5 min |
| `progressHook` | `(event: CascadeProgressEvent) => void` | - | Per-hop callback: `{ hopIndex, route, chain, status, txHash, elapsed }` |
| `eventHook` | `(event: ProgressEvent) => void` | - | Unified `ProgressEvent` stream for the cascade marker set (`001`, `002-xx`, `003-xx`, `203-xx`, `204-xx`, `209-xx`, `299-01`, `999-xx`, plus per-route awaiting/polling/success/failed/timeout). Also fans out to the init-time `progressHook` on `PushChain.initialize`; events are deduped when both channels are wired. |

## Expected Output

See `send-universal-transaction.md` for the full `TxResponse` and `UniversalTxReceipt` shapes - they apply to Route 2/3 `sendTransaction` calls identically.

For `executeTransactions`, see `CascadedTxResponse` table above.

### Progress Hook Events

Pinned to `@pushchain/core@6.0.9`. Full per-route reference: [progress-hook-events.md](https://push.org/agents/workflows/progress-hook-events.md). Key milestones for this workflow:

**Route 2 (external chain via CEA), prefix `SEND-TX-2xx`:**

| ID | Title | Level |
|----|-------|-------|
| `SEND-TX-201` | `<chain>` Detected | INFO |
| `SEND-TX-202-01` | Estimating `<chain>` Chain Gas | INFO |
| `SEND-TX-202-02` | `<chain>` Chain Gas Estimated | SUCCESS |
| `SEND-TX-203-01` | Resolving `<chain>` Execution Account | INFO |
| `SEND-TX-203-02` | `<chain>` Execution Account Ready | SUCCESS |
| `SEND-TX-203-03` | Checking Balance Requirements | INFO / WARNING |
| `SEND-TX-203-04` | Insufficient UEA Balance | ERROR (only when `enforceGasCheck === true`) |
| `SEND-TX-203-05` | SVM Native-Value Warn Threshold | INFO |
| `SEND-TX-204-01..04` | Signature lifecycle | INFO / SUCCESS / ERROR |
| `SEND-TX-207` | Broadcasting from Push Chain → `<chain>` | INFO |
| `SEND-TX-209-01..02` | Awaiting / syncing relay | INFO |
| `SEND-TX-299-01` | `<chain>` Tx Success | SUCCESS |
| `SEND-TX-299-02` | `<chain>` Tx Failed | ERROR |
| `SEND-TX-299-03` | Relay timeout | ERROR |
| `SEND-TX-299-99` | `<chain>` Tx Completed (intermediate) | INFO |

**Route 3 (CEA origin to Push Chain), prefix `SEND-TX-3xx`:** mirrors Route 2 lifecycle (`301`, `302-xx`, `303-xx`, `304-xx`, `307`, `309-xx`, `310-xx`, `399-xx`). See the canonical reference for the full list.

**Multichain cascade (`executeTransactions`), prefix `SEND-TX-0xx` / `9xx`:**

| ID | Title | Level |
|----|-------|-------|
| `SEND-TX-001` | Multichain Transactions Initiated | INFO |
| `SEND-TX-002-01` | Starting Intermediate Transaction #`<n>`/`<total>` | INFO |
| `SEND-TX-002-99-99` | Intermediate Transaction Complete | INFO |
| `SEND-TX-003-03/04/05` | Pre-flight balance check (cascade) | INFO / WARNING / ERROR |
| `SEND-TX-999-01` | All Multichain Transactions Successful | SUCCESS |
| `SEND-TX-999-02` | Multichain Transactions Failed | ERROR |
| `SEND-TX-999-03` | Multichain Transactions Timeout | ERROR |

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
- **CEA is chain-specific**: Each external chain has its own CEA derived from your UEA. Use `PushChain.utils.account.deriveExecutorAccount(uoa, { chain, skipNetworkCheck: true })` to get the CEA address off-chain. Never hand-roll the `CEAFactory.getCEAForPushAccount(...)` call when the SDK helper is available.
- **Funding pattern for Route 3 (examples / fresh wallets)**: For most Route 3 flows the dev only funds the **source-chain UOA** (e.g. Sepolia ETH). The SDK fee-locks part of that source-chain native asset, mints PC into the UEA on Push Chain, and routes PC → UGPC → destination-chain native to cover the CEA's own gas + first-time deployment. Manually fund the CEA **only** when an asset on that external chain is being bridged back to Push Chain (e.g. `value: BNB` or `funds: { token: USDT.bnb, amount }` against `from: { chain: BNB_TESTNET }` to `to: client.universal.account`). In that case the burn asset has to physically sit on the CEA before the call; the CEA's gas still comes from the source-chain fee-lock.
- **Gas on external chains**: External execution may require native tokens on the target chain.
- **Push Chain is coordination layer**: The `txHash` returned is the Push Chain coordination tx; external execution follows asynchronously.
- **Cross-chain latency**: External chain finality affects total confirmation time.
- **No atomicity in cascades**: If a downstream hop fails, earlier hops are already on-chain. Design contracts to handle partial execution.
- **Single signature for cascades**: `executeTransactions` submits one transaction to Push Chain; the SDK coordinates all downstream hops.

## MCP Mapping Candidates

- `send_external_chain_call` - Execute contract call on external chain via CEA
- `send_cea_origin_transaction` - Execute on Push Chain with external origin identity
- `prepare_transaction` - Prepare a single transaction hop without executing
- `execute_cascade` - Execute ordered array of prepared transactions as multi-hop cascade
- `get_cea_address` - Derive CEA address for specific external chain via `deriveExecutorAccount`
- `check_cea_balance` - Verify CEA has sufficient funds on target chain
- `list_supported_chains` - Return all supported external chain constants