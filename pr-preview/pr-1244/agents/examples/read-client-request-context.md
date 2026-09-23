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
// A completed read on this registry: USDC totalSupply() on Ethereum Sepolia, pinned at Sepolia block 11763025
// https://donut.push.network/tx/0xe56ca590ba08fd2d09d04e478b16933f215f0c64e435c0e8be0b9d85116fe369
const REQUEST_ID = '0x9dd18b4139fe335e1848022503aabb699f319be395df5109c4e48754ea3d5bbe';

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
