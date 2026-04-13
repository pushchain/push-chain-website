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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tx.to` | `string` | Yes | Target address on Push Chain (hex-encoded) |
| `tx.value` | `BigInt` | No | Native value in uPC (smallest unit, like wei). Default: `0n` |
| `tx.data` | `string` \| `Array<{to, data, value}>` | No | ABI-encoded calldata or multicall array |
| `tx.funds` | `{ amount: BigInt; token?: MOVEABLE.TOKEN }` | No | Assets to move into Push Chain atomically |
| `tx.progressHook` | `(progress: ProgressHookType) => void` | No | Callback for real-time progress updates |

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

2. **Send as batched transaction**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: '0xMulticallTarget', // often same as UEA or specific multicall contract
     data: calls,
   });
   ```

### With Asset Movement (tx.funds)

1. **Specify funds to move**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: '0xContractOnPushChain',
     data: calldata,
     funds: {
       amount: BigInt('1000000000000000000'), // 1 token
       token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETH, // if applicable
     },
   });
   ```

## Expected Output

```typescript
// TransactionResponse object
{
  hash: '0x04ee80f072ab06ec88092701e7ba223451d0a1376e26755085271bc6de45a6a1',
  wait: [Function], // Returns Promise<TransactionReceipt>
  // Additional fields may include execution metadata
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
| `SEND-TX-04-02` | Awaiting Signature | INFO |
| `SEND-TX-04-03` | Verification Success | SUCCESS |
| `SEND-TX-07` | Broadcasting to Push Chain | INFO |
| `SEND-TX-99-01` | Push Chain Tx Success | SUCCESS |

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