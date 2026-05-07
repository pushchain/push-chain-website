# Read Blockchain State

## Purpose

Query on-chain data from Push Chain — transactions, blocks, balances, contract state — using standard EVM RPC methods via Ethers.js or Viem HTTP/WebSocket clients.

## When to Use

- Fetching transaction history or receipts
- Checking on-chain balances or token supplies
- Subscribing to real-time block events
- Querying contract state without signing
- Building analytics dashboards or indexers

## Prerequisites

| Requirement | Details |
|-------------|---------|
| EVM client | Ethers.js `JsonRpcProvider` or Viem `PublicClient` connected to Push Chain RPC |
| Network access | `https://evm.donut.rpc.push.org/` (HTTP) or `wss://evm.donut.rpc.push.org/` (WebSocket) |

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rpcUrl` | `string` | Yes | Push Chain HTTP or WebSocket RPC endpoint |
| `txHash` | `string` | No | Transaction hash to look up |
| `address` | `string` | No | Wallet or contract address to query |

## Steps

### Fetch a Transaction by Hash

#### Ethers.js
```typescript
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const txHash = '0x04ee80f072ab06ec88092701e7ba223451d0a1376e26755085271bc6de45a6a1';
const tx = await provider.getTransaction(txHash);
console.log('Transaction:', JSON.stringify(tx, null, 2));
```

#### Viem
```typescript
import { createPublicClient, http } from 'viem';

const client = createPublicClient({ transport: http('https://evm.donut.rpc.push.org/') });
const tx = await client.getTransaction({
  hash: '0x04ee80f072ab06ec88092701e7ba223451d0a1376e26755085271bc6de45a6a1',
});
console.log('Transaction:', JSON.stringify(tx, null, 2));
```

### Fetch the Latest Block

#### Ethers.js
```typescript
const block = await provider.getBlock('latest');
console.log('Block number:', block.number);
console.log('Timestamp:', block.timestamp);
console.log('Transactions count:', block.transactions.length);
```

#### Viem
```typescript
const block = await client.getBlock({ blockTag: 'latest' });
console.log('Block number:', block.number);
```

### Fetch a Block by Hash

#### Ethers.js
```typescript
const blockHash = '0xa1a69fa217d219f71d44f4707f8aa4ded2aec52a0c737e0dca0dbf9096252b89';
const block = await provider.getBlock(blockHash);
console.log(JSON.stringify(block, null, 2));
```

#### Viem
```typescript
const block = await client.getBlock({
  blockHash: '0xa1a69fa217d219f71d44f4707f8aa4ded2aec52a0c737e0dca0dbf9096252b89',
});
console.log(JSON.stringify(block, null, 2));
```

### Get Native Balance

#### Ethers.js
```typescript
const balance = await provider.getBalance('0xYourAddress');
console.log('Balance in uPC:', balance.toString());
console.log('Balance in PC:', ethers.formatEther(balance));
```

#### Viem
```typescript
import { formatEther } from 'viem';
const balance = await client.getBalance({ address: '0xYourAddress' });
console.log('Balance in PC:', formatEther(balance));
```

### Subscribe to New Blocks (WebSocket)

#### Ethers.js (WebSocket)
```typescript
import { ethers } from 'ethers';

const wsProvider = new ethers.WebSocketProvider('wss://evm.donut.rpc.push.org/');
wsProvider.on('block', (blockNumber) => {
  console.log('New block:', blockNumber);
});

// Cleanup when done
// wsProvider.destroy();
```

#### Viem (WebSocket)
```typescript
import { createPublicClient, webSocket } from 'viem';

const wsClient = createPublicClient({
  transport: webSocket('wss://evm.donut.rpc.push.org/'),
});

const unwatch = wsClient.watchBlocks({
  onBlock: (block) => console.log('New block:', block.number),
});

// Cleanup: unwatch();
```

### Filter New Blocks for Specific Transactions (WebSocket)

Watch every new block and check if it contains a transaction to/from a watched address:

#### Ethers.js
```typescript
import { ethers } from 'ethers';

const ws = new ethers.WebSocketProvider('wss://evm.donut.rpc.push.org');
const watchedAddress = '0x0000000000000000000000000000000000042101';

ws.on('block', async (blockNumber) => {
  const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
  const block = await provider.getBlock(blockNumber, true);

  if (block?.transactions) {
    const txs = await Promise.all(block.transactions.map(hash => block.getTransaction(hash)));
    txs
      .filter(tx => tx.to === watchedAddress)
      .forEach(tx => console.log('Tx detected →', tx.hash));
  }
});

// Cleanup: ws.removeAllListeners(); ws.destroy();
```

#### Viem
```typescript
import { createPublicClient, webSocket } from 'viem';

const client = createPublicClient({ transport: webSocket('wss://evm.donut.rpc.push.org') });
const watchedAddress = '0x0000000000000000000000000000000000042101';

const stop = client.watchBlocks({
  onBlock: async (block) => {
    for (const txHash of block.transactions) {
      const tx = await client.getTransaction({ hash: txHash });
      if (tx.to?.toLowerCase() === watchedAddress.toLowerCase()) {
        console.log('Tx detected →', tx.hash);
      }
    }
  },
});

// Cleanup: stop();
```

### Call a Contract View Function

```typescript
// Ethers.js
const contract = new ethers.Contract(
  '0xContractAddress',
  ['function balanceOf(address) view returns (uint256)'],
  provider
);
const balance = await contract.balanceOf('0xUserAddress');
console.log('Token balance:', balance.toString());
```

### Fetch Transaction Receipt

```typescript
// Ethers.js
const receipt = await provider.getTransactionReceipt(txHash);
console.log('Status:', receipt.status); // 1 = success, 0 = failure
console.log('Gas used:', receipt.gasUsed.toString());
console.log('Block:', receipt.blockNumber);
```

## Expected Output

```typescript
// getTransaction() example
{
  hash: '0x04ee80f072ab06...',
  from: '0xC8AE31cF444CAB...',
  to: '0xa54E96d3fB93B...',
  value: 100000000000000000n,
  blockNumber: 123456n,
  gasLimit: 21000n,
  // ...
}
```

## RPC Endpoints Reference

| Network | HTTP RPC | WebSocket RPC | Chain ID |
|---------|----------|---------------|----------|
| Donut Testnet | `https://evm.donut.rpc.push.org/` | `wss://evm.donut.rpc.push.org/` | `42101` |

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `network error` / `ECONNREFUSED` | RPC not reachable | Verify RPC URL and network access |
| `null` returned for transaction | Tx hash not found or pending | Confirm hash is correct and transaction is mined |
| `WebSocket connection failed` | WSS endpoint not supported in environment | Use HTTP RPC for non-WebSocket environments |
| `call exception` | Contract call failed | Check contract address, ABI, and function name |

## Agent Notes

- **No signer needed**: all reads use unauthenticated JSON-RPC — no wallet or private key required.
- **Same API as Ethereum**: any ethers/viem code targeting Ethereum works on Push Chain by changing the RPC URL.
- **WebSocket for real-time**: use `WebSocketProvider` / `webSocket` transport for subscriptions; HTTP for one-off queries.
- **Block explorer**: for human-readable transaction lookup, use `https://donut.push.network`.

## MCP Mapping Candidates

- `create_public_client` — Initialize read-only EVM client
- `call_contract_view` — Execute view function on contract
- `fetch_transaction_receipt` — Get receipt and status for tx hash
- `get_block_number` — Return current block height

## See Also

- Track transaction (SDK trackTransaction method): https://push.org/agents/workflows/track-transaction.md
- Constants (CHAIN, RPC URLs): https://push.org/agents/workflows/constants-reference.md
- Initialize client: https://push.org/agents/skills/push-backend/references/initialize-client.md

## Docs

- Reading blockchain state: https://push.org/docs/chain/build/reading-blockchain-state/
