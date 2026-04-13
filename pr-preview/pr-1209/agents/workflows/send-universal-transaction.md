# Send Universal Transaction

## Purpose

Execute a transaction on Push Chain from any origin wallet (EVM or non-EVM), with automatic UEA resolution, gas funding, and execution orchestration.

## When to Use

- Transferring native PC tokens on Push Chain
- Calling smart contracts deployed on Push Chain
- Executing batched multicall transactions
- Moving assets into Push Chain as part of a transaction
- Any operation targeting Push Chain (Route 1)

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Initialized client | `pushChainClient` from `PushChain.initialize()` |
| Signer mode | Client must be initialized with `UniversalSigner` (not read-only) |
| Target address | Valid Push Chain address or contract |

## Inputs

### Standard Arguments

| Parameter | Type | Required | Description |
|-----------|------|----------|--------------|
| `tx.to` | `string` \| `{ address: string; chain: CHAIN }` | Yes | Plain address → Push Chain (Route 1). Object → external chain (Route 2) |
| `tx.from` | `{ chain: CHAIN }` | No | Forces CEA of that chain as execution origin (Route 3) |
| `tx.value` | `BigInt` | No | Native value in smallest unit (uPC on Push Chain, wei on EVM external chains). Default: `0n` |
| `tx.data` | `string` \| `Array<{to: string; value: bigint; data: string}>` | No | ABI-encoded calldata (string) or multicall array. **For multicall `tx.to` must be `0x0000000000000000000000000000000000000000`** |
| `tx.funds` | `{ amount: BigInt; token: PushChain.CONSTANTS.MOVEABLE.TOKEN.<CHAIN>.<TOKEN> }` | No | Move cross-chain asset atomically (external origin chains only) |
| `tx.progressHook` | `(progress: ProgressHookType) => void` | No | Callback for real-time progress updates |

### Advanced Arguments

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `tx.gasLimit` | `BigInt` | SDK estimated | Override transaction gas limit |
| `tx.maxFeePerGas` | `BigInt` | SDK estimated | Override max fee per gas (EIP-1559) |
| `tx.maxPriorityFeePerGas` | `BigInt` | SDK estimated | Override priority fee (EIP-1559) |
| `tx.payGasWith` | `{ token: PushChain.CONSTANTS.PAYABLE.TOKEN.<CHAIN>.<TOKEN>; slippageBps?: number; minAmountOut?: bigint \| string }` | — | Pay universal transaction fees with a supported token instead of native. `slippageBps` e.g. `100` = 1% |
| `tx.deadline` | `BigInt` | — | Optional execution deadline timestamp |

## Steps

### Basic Native Transfer

1. **Prepare the transaction parameters**
   ```typescript
   const recipientAddress = '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF';
   const amountInPC = '0.1'; // human-readable
   ```

2. **Convert amount to uPC (smallest unit)**
   ```typescript
   const valueInUPC = PushChain.utils.helpers.parseUnits(amountInPC, 18);
   // Or directly: BigInt('100000000000000000')
   ```

3. **Send the transaction**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: recipientAddress,
     value: valueInUPC,
   });
   ```

4. **Extract transaction hash**
   ```typescript
   console.log('Transaction hash:', txResponse.hash);
   ```

### Contract Call

1. **Encode the function call**
   ```typescript
   import { ethers } from 'ethers';
   
   const contractInterface = new ethers.Interface([
     'function transfer(address to, uint256 amount) returns (bool)'
   ]);
   const calldata = contractInterface.encodeFunctionData('transfer', [
     '0xRecipientAddress',
     BigInt('1000000000000000000')
   ]);
   ```

2. **Send with encoded data**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: '0xContractAddressOnPushChain',
     data: calldata,
     value: 0n,
   });
   ```

### With Progress Tracking

1. **Define progress handler**
   ```typescript
   const progressHandler = (progress) => {
     console.log(`[${progress.id}] ${progress.title}: ${progress.message}`);
     // Example output: [SEND-TX-03-02] UEA Resolved: UEA: 0x..., Deployed: true
   };
   ```

2. **Send with progressHook**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: recipientAddress,
     value: valueInUPC,
     progressHook: progressHandler,
   });
   ```

### Multicall (Batched Transactions)

1. **Prepare multiple calls**
   ```typescript
   const calls = [
     {
       to: '0xContract1',
       data: encodedCall1,
       value: 0n,
     },
     {
       to: '0xContract2',
       data: encodedCall2,
       value: BigInt('50000000000000000'),
     },
   ];
   ```

2. **Send as batched transaction** — `to` **must be zero address** for multicall
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: '0x0000000000000000000000000000000000000000', // REQUIRED for multicall
     data: calls,
   });
   ```

> **Warning:** The SDK will `console.warn` if any other address is used for multicall. This restriction will become mandatory in a future release. Multicall is only supported from external origin chains.

### With Asset Movement (tx.funds)

Move a supported asset from origin chain to Push Chain atomically with your call. Only supported from external origin chains (not from a native Push Chain account).

1. **Specify funds to move (chain-scoped token accessor)**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: '0xContractOnPushChain',
     data: calldata,
     funds: {
       amount: PushChain.utils.helpers.parseUnits('1', 6), // 1 USDT (6 decimals)
       token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
     },
   });
   ```

### With Gas Paid in Token (tx.payGasWith)

Pay universal transaction fees with a supported token instead of native PC.

1. **Pay fees with USDT from Ethereum Sepolia**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: recipientAddress,
     value: valueInUPC,
     payGasWith: {
       token: PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
       slippageBps: 100, // 1% slippage tolerance for on-chain swap
     },
   });
   ```

### Using encodeTxData Utility

Use `PushChain.utils.helpers.encodeTxData` to ABI-encode contract calls without importing ethers/viem directly:

```typescript
const data = PushChain.utils.helpers.encodeTxData({
  abi: ['function transfer(address to, uint256 amount) returns (bool)'],
  functionName: 'transfer',
  args: ['0xRecipientAddress', PushChain.utils.helpers.parseUnits('10', 18)],
});

const txResponse = await pushChainClient.universal.sendTransaction({
  to: '0xTokenContractAddress',
  value: 0n,
  data,
});
```

### With Advanced Gas Overrides

```typescript
const txResponse = await pushChainClient.universal.sendTransaction({
  to: recipientAddress,
  value: valueInUPC,
  gasLimit: BigInt('100000'),
  maxFeePerGas: BigInt('2000000000'),
  maxPriorityFeePerGas: BigInt('200000000'),
  deadline: BigInt(Math.floor(Date.now() / 1000) + 3600), // 1 hour
});
```

## Expected Output

```typescript
// TransactionResponse object (full shape)
{
  hash: '0xe2302bd21ab0902f37cb605d491ce5f95ee35ce4083405dddf3657d782acae35',
  origin: 'eip155:42101:0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9', // CAIP-10 origin
  blockNumber: 0n,
  blockHash: '',
  transactionIndex: 0,
  chainId: '42101',
  from: '0xFd6C...', // UEA address
  to: '0x35B8...',
  nonce: 341,
  data: '0x',
  value: 1000n,
  gasLimit: 21000n,
  gasPrice: 1325000000n,
  maxFeePerGas: 1325000000n,
  maxPriorityFeePerGas: 125000000n,
  accessList: [],
  type: '2',
  typeVerbose: 'eip1559',
  signature: { r: '0x...', s: '0x...', v: 1, yParity: 1 },
  raw: { from: '0x...', to: '0x...', nonce: 341, data: '0x', value: 1000n },
  wait: [Function], // wait(confirmations?: number): Promise<UniversalTxReceipt>
}
```

```typescript
// UniversalTxReceipt from txResponse.wait(1)
{
  hash: '0xb52706...',
  blockNumber: 3413247n,
  blockHash: '0x5a7b6e...',
  transactionIndex: 0,
  from: '0xFd6C...', // UEA
  to: '0x35B8...',
  contractAddress: null,
  gasPrice: 1325000000n,
  gasUsed: 21000n,
  cumulativeGasUsed: 21000n,
  logs: [],
  status: 1, // 1 = success, 0 = failure
  raw: { from, to, nonce, data, value },
}
```

### Progress Hook Events (in order)

| ID | Title | Level |
|----|-------|-------|
| `SEND-TX-01` | Origin Chain Detected | INFO |
| `SEND-TX-02-01` | Estimating Gas | INFO |
| `SEND-TX-02-02` | Gas Estimated | SUCCESS |
| `SEND-TX-03-01` | Resolving UEA | INFO |
| `SEND-TX-03-02` | UEA Resolved | SUCCESS |
| `SEND-TX-04-01` | Awaiting Transaction | INFO |
| `SEND-TX-04-02` | Awaiting Signature | INFO |
| `SEND-TX-04-03` | Verification Success | SUCCESS |
| `SEND-TX-04-04` | Verification Declined | ERROR |
| `SEND-TX-05-01` | Gas Funding In Progress | INFO |
| `SEND-TX-05-02` | Gas Funding Confirmed | SUCCESS |
| `SEND-TX-06-01` | Preparing Funds Transfer | INFO |
| `SEND-TX-06-02` | Funds Lock Submitted | INFO |
| `SEND-TX-06-03` | Awaiting Confirmations | INFO |
| `SEND-TX-06-03-01` | Confirmation #N Received | INFO |
| `SEND-TX-06-03-02` | Confirmation #N Received | SUCCESS |
| `SEND-TX-06-04` | Funds Confirmed | SUCCESS |
| `SEND-TX-06-05` | Syncing State with Push Chain | SUCCESS |
| `SEND-TX-06-06` | Funds Credited on Push Chain | SUCCESS |
| `SEND-TX-07` | Broadcasting to Push Chain | INFO |
| `SEND-TX-99-01` | Push Chain Tx Success | SUCCESS |
| `SEND-TX-99-02` | Push Chain Tx Failed | ERROR |

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `Restricted call blocked` | Client initialized in read-only mode | Reinitialize with `UniversalSigner` |
| `Insufficient funds for gas` | UEA has no gas balance | Ensure origin wallet has native tokens; SDK auto-funds UEA |
| `User rejected signature` | User declined wallet prompt | Retry transaction; inform user why signature is needed |
| `Invalid recipient address` | Malformed `to` address | Validate address format before sending |
| `Execution reverted` | Contract call failed on-chain | Check contract state, parameters, and simulate call first |
| `SEND-TX-04-04` progress event | Verification declined by user | User cancelled; show appropriate UI message |
| `Gas estimation failed` | Contract will revert or invalid state | Simulate transaction or check contract preconditions |

## Agent Notes

- **Route 1 is default**: Plain `to` address always executes on Push Chain.
- **Value is in smallest unit**: Use `PushChain.utils.helpers.parseUnits()` for human-readable conversion.
- **UEA auto-deploys**: First transaction from a new origin wallet triggers automatic UEA deployment.
- **Gas is abstracted**: Users pay gas on their origin chain in native tokens; SDK handles UEA funding.
- **Signature prompt expected**: User will see one signature request from their wallet.
- **Use progressHook for UX**: Display step-by-step status in frontend for better user experience.
- **Check for reverts**: If `SEND-TX-99-02` fires, parse the error message for revert reason.

## MCP Mapping Candidates

- `send_native_transfer` — Simple PC token transfer to address
- `send_contract_call` — Execute encoded calldata on Push Chain contract
- `send_multicall` — Batch multiple calls in single transaction
- `encode_function_call` — Helper to generate ABI-encoded calldata
- `parse_units_to_bigint` — Convert human-readable amount to BigInt