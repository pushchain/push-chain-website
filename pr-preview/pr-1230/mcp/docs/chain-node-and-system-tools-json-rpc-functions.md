---
title: "JSON-RPC Functions"
url: "https://pushchain.github.io/docs/chain/node-and-system-tools/json-rpc-functions/"
section: "node-and-system-tools"
lastUpdated: "2026-07-28T11:30:15Z"
description: "JSON-RPC Functions | Deep Dives | Push Chain Docs"
---

# JSON-RPC Functions

Push Chain is an EVM-compatible blockchain, and thus supports the standard JSON-RPC functions available on all Ethereum-compatible networks. This document provides examples of how to call basic JSON-RPC functions on Push Chain. For comprehensive details, visit the official [Ethereum JSON-RPC Documentation](https://ethereum.org/en/developers/docs/apis/json-rpc/).

## Examples

Here are examples showcasing how to make JSON-RPC requests using CURL.

### Get Block by Number

Fetch block details for a specific block number:

```bash
curl -X POST https://evm.donut.rpc.push.org/ \
     -H "Content-Type: application/json" \
     -d '{
       "jsonrpc":"2.0",
       "method":"eth_getBlockByNumber",
       "params":["0x10d4f", true],
       "id":1
     }'
```

  
  

### Get Current Block Number

Retrieve the current block number:

```bash
curl -X POST https://evm.donut.rpc.push.org/ \
     -H "Content-Type: application/json" \
     -d '{
       "jsonrpc":"2.0",
       "method":"eth_blockNumber",
       "params":[],
       "id":1
     }'
```

  
  

### Get Transaction by txHash

Fetch transaction details using its hash:

```bash
curl -X POST https://evm.donut.rpc.push.org/ \
     -H "Content-Type: application/json" \
     -d '{
       "jsonrpc":"2.0",
       "method":"eth_getTransactionByHash",
       "params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],
       "id":1
     }'
```

  
  

### Get Account Balance

Retrieve the balance of an address:

```bash
curl -X POST https://evm.donut.rpc.push.org/ \
     -H "Content-Type: application/json" \
     -d '{
       "jsonrpc":"2.0",
       "method":"eth_getBalance",
       "params":["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "latest"],
       "id":1
     }'
```

## Further Information

For more JSON-RPC methods and their usage, refer to the [Ethereum JSON-RPC API Reference](https://ethereum.org/en/developers/docs/apis/json-rpc/).
