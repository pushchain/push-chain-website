# Send Multichain Transaction

## Purpose

Execute a transaction on an external chain (Ethereum, Solana, etc.) from any origin wallet, routed through Push Chain's coordination layer using the Chain Executor Account (CEA).

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

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tx.to` | `{ address: string; chain: CHAIN }` | Yes (Route 2) | Target address and chain for external execution |
| `tx.from` | `{ chain: CHAIN }` | Yes (Route 3) | Forces CEA on specified chain as execution origin |
| `tx.value` | `BigInt` | No | Native value in target chain's smallest unit |
| `tx.data` | `string` | No | ABI-encoded calldata for contract call |
| `tx.funds` | `{ amount: BigInt; token?: MOVEABLE.TOKEN }` | No | Assets to move as part of the transaction |
| `tx.progressHook` | `(progress: ProgressHookType) => void` | No | Callback for progress updates |

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
// Testnets
PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA   // eip155:11155111
PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET      // solana:devnet

// Check documentation for full list of supported chains
```

## Expected Output

```typescript
// TransactionResponse object
{
  hash: '0xPushChainCoordinationTxHash...',
  wait: [Function], // Waits for Push Chain confirmation
  // External chain execution details included in receipt
}
```

### Progress Hook Events (Route 2 specific)

| ID | Title | Description |
|----|-------|-------------|
| `SEND-TX-01` | Origin Chain Detected | Identifies user's wallet chain |
| `SEND-TX-03-01` | Resolving UEA | Sets up Push Chain executor |
| `SEND-TX-07` | Broadcasting to Push Chain | Submits coordination transaction |
| `SEND-TX-99-01` | Push Chain Tx Success | Coordination complete |

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
- **CEA is chain-specific**: Each external chain has its own CEA derived from your UEA.
- **Gas on external chains**: External execution may require native tokens on the target chain.
- **Push Chain is coordination layer**: The transaction hash returned is the Push Chain coordination tx; external execution follows.
- **Cross-chain latency**: External chain finality affects total confirmation time.
- **Solana requires different encoding**: For Solana targets, calldata format differs from EVM chains.

## MCP Mapping Candidates

- `send_external_chain_call` — Execute contract call on external chain via CEA
- `send_cea_origin_transaction` — Execute on Push Chain with external origin identity
- `get_cea_address` — Derive CEA address for specific external chain
- `check_cea_balance` — Verify CEA has sufficient funds on target chain
- `list_supported_chains` — Return all supported external chain constants