# Track Universal Transaction

## Purpose

Monitor the status and await confirmation of a universal transaction on Push Chain, including retrieving transaction details and execution receipts.

## When to Use

- After calling `sendTransaction()` to await confirmation
- To poll transaction status before showing success UI
- To retrieve transaction details by hash
- To get block explorer URLs for user verification
- Debugging transaction failures or delays

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Transaction hash | Hex-encoded hash from `sendTransaction().hash` |
| Initialized client | `pushChainClient` for explorer URL generation |
| Network access | RPC connectivity to Push Chain |

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `txResponse` | `TransactionResponse` | Yes (for `.wait()`) | Object returned by `sendTransaction()` |
| `txHash` | `string` | Yes (for lookup) | Transaction hash in hex format |
| `options.timeout` | `number` | No | Milliseconds to wait before timeout |
| `options.confirmations` | `number` | No | Number of block confirmations to await |

## Steps

### Method 1: Using `tx.wait()`

The simplest approach—call `.wait()` on the transaction response.

1. **Send transaction and capture response**
   ```typescript
   const txResponse = await pushChainClient.universal.sendTransaction({
     to: '0xRecipientAddress',
     value: BigInt('100000000000000000'),
   });
   console.log('Submitted:', txResponse.hash);
   ```

2. **Await confirmation with `.wait()`**
   ```typescript
   const receipt = await txResponse.wait();
   ```

3. **Check execution status**
   ```typescript
   if (receipt.status === 1) {
     console.log('Transaction successful');
     console.log('Block number:', receipt.blockNumber);
     console.log('Gas used:', receipt.gasUsed.toString());
   } else {
     console.log('Transaction failed');
   }
   ```

### Method 2: Using Block Explorer URL

1. **Get transaction URL for user verification**
   ```typescript
   const txHash = txResponse.hash;
   const explorerUrl = pushChainClient.explorer.getTransactionUrl(txHash);
   console.log('View on explorer:', explorerUrl);
   // Output: https://donut.push.network/tx/0x...
   ```

2. **List all configured explorer URLs**
   ```typescript
   const explorers = pushChainClient.explorer.listUrls();
   console.log('Configured explorers:', explorers);
   // Output: { 'eip155:42101': ['https://donut.push.network'] }
   ```

### Method 3: Using EVM Provider Directly

For advanced use cases or external hash lookup.

1. **Create provider for Push Chain**
   ```typescript
   import { ethers } from 'ethers';
   
   const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
   ```

2. **Fetch transaction by hash**
   ```typescript
   const tx = await provider.getTransaction(txHash);
   console.log('Transaction:', tx);
   ```

3. **Fetch transaction receipt**
   ```typescript
   const receipt = await provider.getTransactionReceipt(txHash);
   if (receipt) {
     console.log('Status:', receipt.status === 1 ? 'Success' : 'Failed');
     console.log('Block:', receipt.blockNumber);
   } else {
     console.log('Transaction pending or not found');
   }
   ```

4. **Wait for confirmations**
   ```typescript
   const confirmedReceipt = await provider.waitForTransaction(txHash, 2); // 2 confirmations
   console.log('Confirmed in block:', confirmedReceipt.blockNumber);
   ```

### With Viem

```typescript
import { createPublicClient, http } from 'viem';

const client = createPublicClient({
  transport: http('https://evm.donut.rpc.push.org/'),
});

// Get transaction
const tx = await client.getTransaction({ hash: txHash });

// Get receipt
const receipt = await client.getTransactionReceipt({ hash: txHash });

// Wait for confirmations
const confirmedReceipt = await client.waitForTransactionReceipt({
  hash: txHash,
  confirmations: 2,
});
```

### Polling Pattern (Custom)

For UI progress indicators or custom timeout handling.

```typescript
async function pollTransaction(hash: string, maxAttempts = 30, intervalMs = 2000) {
  const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
  
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const receipt = await provider.getTransactionReceipt(hash);
    
    if (receipt) {
      return receipt;
    }
    
    console.log(`Attempt ${attempt + 1}/${maxAttempts}: pending...`);
    await new Promise(resolve => setTimeout(resolve, intervalMs));
  }
  
  throw new Error('Transaction confirmation timeout');
}
```

## Expected Output

### TransactionReceipt Structure

```typescript
{
  hash: '0x04ee80f072ab06ec88092701e7ba223451d0a1376e26755085271bc6de45a6a1',
  blockNumber: 12345678,
  blockHash: '0x...',
  transactionIndex: 0,
  from: '0xUEAAddress',
  to: '0xRecipientOrContract',
  gasUsed: BigInt(21000),
  cumulativeGasUsed: BigInt(21000),
  status: 1, // 1 = success, 0 = failure
  logs: [], // Event logs if contract emitted events
  logsBloom: '0x...',
  effectiveGasPrice: BigInt(1000000000),
}
```

### Explorer URL Output

```
https://donut.push.network/tx/0x04ee80f072ab06ec88092701e7ba223451d0a1376e26755085271bc6de45a6a1
```

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `Transaction not found` | Hash invalid or tx not yet indexed | Verify hash; wait and retry |
| `Timeout waiting for transaction` | Network congestion or dropped tx | Increase timeout; check if tx was actually submitted |
| `Receipt status: 0` | Transaction reverted on-chain | Parse revert reason from logs or simulate tx |
| `null receipt` | Transaction still pending | Continue polling or increase wait time |
| `Invalid transaction hash` | Malformed hash string | Ensure hash is valid hex starting with `0x` |

## Agent Notes

- **`tx.wait()` is preferred**: Simplest approach; handles polling internally.
- **Receipt `null` means pending**: Transaction exists but not yet included in a block.
- **Status 1 = success**: EVM convention; status 0 indicates revert.
- **Block explorer is user-friendly**: Always provide explorer link for transparency.
- **Push Chain is EVM-compatible**: Standard ethers/viem receipt methods work.
- **Cross-chain tracking**: For Route 2/3, Push Chain tx confirms coordination; external chain execution may need separate tracking.

## MCP Mapping Candidates

- `wait_for_transaction` — Await confirmation with configurable timeout
- `get_transaction_receipt` — Fetch receipt by hash
- `get_transaction_details` — Fetch full transaction object
- `get_explorer_url` — Generate block explorer link
- `poll_transaction_status` — Custom polling with progress callback