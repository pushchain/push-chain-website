# Initialize EVM Client

## Purpose

Create an Ethers.js or Viem read-only client connected to Push Chain's EVM RPC endpoint for direct blockchain queries — without needing a signer or `PushChainClient`.

## When to Use

- Reading on-chain state (balances, contract data, transaction receipts)
- Fetching block numbers or gas prices on Push Chain
- Building read-only dashboards or indexers
- Running contract view/pure function calls
- Verifying deployed contract state in tests or scripts

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Package installed | `ethers` ≥6.0 or `viem` ≥2.0 |
| Network access | `https://evm.donut.rpc.push.org/` reachable |

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rpcUrl` | `string` | Yes | Push Chain EVM RPC URL |

## Steps

### Using Ethers.js (v6)

1. **Import ethers**
   ```typescript
   import { ethers } from 'ethers';
   ```

2. **Create provider**
   ```typescript
   const RPC_URL = 'https://evm.donut.rpc.push.org/';
   const provider = new ethers.JsonRpcProvider(RPC_URL);
   ```

3. **Verify connection**
   ```typescript
   const blockNumber = await provider.getBlockNumber();
   console.log('Latest block:', blockNumber);
   ```

### Using Viem

1. **Import viem**
   ```typescript
   import { createPublicClient, http } from 'viem';
   ```

2. **Create public client**
   ```typescript
   const publicClient = createPublicClient({
     transport: http('https://evm.donut.rpc.push.org/'),
   });
   ```

3. **Verify connection**
   ```typescript
   const blockNumber = await publicClient.getBlockNumber();
   console.log('Latest block:', blockNumber);
   ```

### Fetch a Transaction by Hash

#### Ethers.js
```typescript
const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const txHash = '0x04ee80f072ab06ec88092701e7ba223451d0a1376e26755085271bc6de45a6a1';
const tx = await provider.getTransaction(txHash);
console.log('Transaction:', JSON.stringify(tx, null, 2));
```

#### Viem
```typescript
const client = createPublicClient({ transport: http('https://evm.donut.rpc.push.org/') });
const tx = await client.getTransaction({
  hash: '0x04ee80f072ab06ec88092701e7ba223451d0a1376e26755085271bc6de45a6a1',
});
console.log('Transaction:', JSON.stringify(tx, null, 2));
```

### Call a Contract View Function

#### Ethers.js
```typescript
const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const contract = new ethers.Contract(
  '0xContractAddress',
  ['function balanceOf(address) view returns (uint256)'],
  provider
);
const balance = await contract.balanceOf('0xUserAddress');
console.log('Balance:', balance.toString());
```

#### Viem
```typescript
const balance = await publicClient.readContract({
  address: '0xContractAddress',
  abi: [{ name: 'balanceOf', type: 'function', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view' }],
  functionName: 'balanceOf',
  args: ['0xUserAddress'],
});
console.log('Balance:', balance.toString());
```

### Get Native Balance

```typescript
// Ethers.js
const balance = await provider.getBalance('0xAddress');
console.log('Balance in uPC:', balance.toString());
console.log('Balance in PC:', ethers.formatEther(balance));

// Viem
const balance = await publicClient.getBalance({ address: '0xAddress' });
console.log('Balance in PC:', formatEther(balance));
```

## Expected Output

```typescript
// provider / publicClient object
{
  // Ethers.js JsonRpcProvider:
  _network: { name: 'unknown', chainId: 42101n },
  // Common methods:
  getBlockNumber, getTransaction, getTransactionReceipt,
  getBalance, call, getLogs, ...
}
```

## RPC Endpoints Reference

| Network | RPC URL | Chain ID |
|---------|---------|----------|
| Donut Testnet | `https://evm.donut.rpc.push.org/` | `42101` |
| Push Chain Localnet | `http://localhost:8545` | `9001` |

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `ECONNREFUSED` or `network error` | RPC URL unreachable | Check network connectivity and RPC URL |
| `invalid block tag` | Block parameter format wrong | Use `'latest'` or a block number as string |
| `contract call revert` | Calling non-existent function | Verify contract ABI and address |
| `unknown account` | Address not on chain | Address valid but no on-chain activity yet |

## Agent Notes

- **Read-only**: `JsonRpcProvider` and `createPublicClient` cannot sign or send transactions. Use `PushChain.initialize()` with a signer for write operations.
- **Chain ID 42101**: Push Chain Donut Testnet. All EVM tooling that accepts a custom RPC URL works.
- **No `@pushchain/core` required**: direct EVM clients use standard ethers/viem — no Push Chain SDK dependency needed for reads.
- **Prefer `PushChainClient` for writes**: when you need to send transactions, use the full client via `PushChain.initialize()`.

## MCP Mapping Candidates

- `create_ethers_provider` — Instantiate Ethers.js JsonRpcProvider
- `create_viem_public_client` — Instantiate Viem PublicClient
- `fetch_transaction_receipt` — Get receipt by tx hash
- `get_block_number` — Return latest block number
