## UniversalReadClient → _requestRead

Source: https://push.org/docs/chain/build/contract-helpers/

## When to Use

See the [source documentation](https://push.org/docs/chain/build/contract-helpers/) for full context on when to apply this pattern.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

// CONFIG
const RPC_URL = 'https://evm.donut.rpc.push.org/';
// The Universal Read Registry the SDK uses on Donut
const REGISTRY_ADDRESS = PushChain.CONSTANTS.READ.UNIVERSAL_READ_REGISTRY_ADDRESS.TESTNET_DONUT;
// A completed read on this registry: USDC totalSupply() on Ethereum Sepolia, pinned at Sepolia block 11721896
// https://donut.push.network/tx/0xace51f0b7b3d073aa2c3662df12509a41ae342af3572b5f42cae6b18409cb478
const REQUEST_ID = '0x9d276d87071f8478f817ef893d8fbb1ca4d8319f14bbf1dfba12cd73d02867f3';

const RegistryABI = [
  'function readerOf(uint256 requestId) view returns (address)',
  'function queryKeyOf(uint256 requestId) view returns (bytes32)',
  'function requestOrderOf(uint256 requestId) view returns (uint256)',
];

async function main() {
  // 1) set up a read-only provider and the registry contract (no signer needed)
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const registry = new ethers.Contract(REGISTRY_ADDRESS, RegistryABI, provider);
  console.log('Reading request context from the registry...');

  // 2) read back what the registry's entrypoint passed into _requestRead as localState
  //    (it encodes msg.sender, the query key and a request order, then mirrors them into these mappings)
  const requestId = BigInt(REQUEST_ID);
  // the account that called read(), i.e. msg.sender when the request was made
  console.log('Reader (msg.sender at request):', await registry.readerOf(requestId));
  // the key the registry derives from the ReadSpec to group reads of the same query
  console.log('Query key:', await registry.queryKeyOf(requestId));
  // the position of this request among reads of that query key
  console.log('Request order:', (await registry.requestOrderOf(requestId)).toString());

  provider.destroy();
}
main().catch(console.error);
```

## SDK Methods Used

- See code above
