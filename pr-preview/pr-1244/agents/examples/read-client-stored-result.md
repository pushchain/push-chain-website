## UniversalReadClient → _onReadResult

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
  'function hasResult(uint256 requestId) view returns (bool)',
  'function resultByRequestId(uint256 requestId) view returns (tuple(uint256 requestId, bytes resultData, uint64 updatedAtBlock))',
];

// Shape of the EVM query envelope stored in ReadSpec.query (see Read Universal State)
const QueryEnvelope = 'tuple(uint8 queryType, tuple(uint8 refType, uint64 blockNumber) blockRef, bytes payload)';
const QUERY_TYPE = { 0: 'native balance', 1: 'contract call', 2: 'storage slot' };

async function main() {
  const abi = ethers.AbiCoder.defaultAbiCoder();

  // 1) read-only Push Chain client (tracking needs no signer or funds)
  const account = PushChain.utils.account.toUniversal('0x000000000000000000000000000000000000dEaD', {
    chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
  });
  const pushChainClient = await PushChain.initialize(account, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
  });

  // 2) confirm the callback ran: the read must be FULFILLED and callbackDelivered
  console.log('Looking up request ' + REQUEST_ID.slice(0, 10) + '... on Push Chain...');
  const snapshot = await pushChainClient.universal.trackRead({ requestId: REQUEST_ID }, {
    progressHook: (progress) => console.log(progress.id + ': ' + progress.title),
  });
  // wait() replays the read's lifecycle events through the hook; the read is already terminal, so this is instant
  const done = await snapshot.wait();
  const READ = PushChain.CONSTANTS.READ;
  const statusName = done.status === READ.STATUS.FULFILLED ? 'FULFILLED' : String(done.status);
  console.log('Status:', statusName, '| Callback delivered:', done.callbackDelivered);

  // 3) describe what was read, decoded from the request's own ReadSpec
  const [env] = abi.decode([QueryEnvelope], done.request.spec.query);
  const [target] = abi.decode(['address'], env.payload);
  console.log('Read type:', QUERY_TYPE[Number(env.queryType)] || String(env.queryType));
  console.log('Source:', done.request.spec.account.chainNamespace + ':' + done.request.spec.account.chainId, '(Ethereum Sepolia)');
  console.log('Target:', target, '(USDC)', 'at block', String(env.blockRef.blockNumber));

  // 4) read what _onReadResult stored on the registry
  console.log('Reading the stored result from the registry...');
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const registry = new ethers.Contract(REGISTRY_ADDRESS, RegistryABI, provider);
  const requestId = BigInt(REQUEST_ID);
  console.log('hasResult:', await registry.hasResult(requestId));
  const stored = await registry.resultByRequestId(requestId);
  console.log('Stored at Push block:', stored.updatedAtBlock.toString());
  console.log('Result bytes:', stored.resultData);

  // 5) decode the bytes. totalSupply() returns a uint256; USDC has 6 decimals.
  //    A native-balance read would be wei (18 decimals); a storage-slot read is a bytes32 word.
  const [supply] = abi.decode(['uint256'], stored.resultData);
  console.log('USDC total supply on Sepolia at that block:', ethers.formatUnits(supply, 6), 'USDC');

  provider.destroy();
}
main().catch(console.error);
```

## SDK Methods Used

- `PushChain.initialize`
- `pushChainClient.universal.trackRead`
- `PushChain.utils.account.toUniversal`
