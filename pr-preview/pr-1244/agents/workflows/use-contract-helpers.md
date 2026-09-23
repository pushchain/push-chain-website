# Use Contract Helpers

## Purpose

Interact with Push Chain's contract helpers. The deployed `UEAFactory` detects whether an address is a Universal Executor Account (UEA) or a native Push Chain EOA, maps between origin wallets and their Push Chain execution accounts, and computes deterministic UEA addresses. The `UniversalReadClient` base contract is the helper you inherit so your contract can request external state through Universal Read and receive the validator-agreed result in a callback.

## When to Use

- In smart contracts: checking if `msg.sender` is a UEA (cross-chain user) or a native Push Chain account
- Determining the origin chain and address of an inbound cross-chain user
- Off-chain scripts: resolving which Push Chain address belongs to a given external wallet
- Computing the deterministic UEA address for a given external account before deployment
- Receiving state from another chain or a web API inside your contract (inherit `UniversalReadClient`; see [Universal Read Client](#universal-read-client) below)

> For **off-chain** UEA/CEA derivation from TypeScript (backend scripts, frontend), use `PushChain.utils.account.deriveExecutorAccount(universalAccount, options?)` - no contract interaction needed. See [Use Utility Functions](https://push.org/agents/workflows/use-utility-functions.md). The UEAFactory below is for **on-chain Solidity** identity resolution.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Smart contract env | Solidity ≥0.8.0 |
| Off-chain env | Ethers.js or Viem connected to `https://evm.donut.rpc.push.org/` |
| UEAFactory address | `0x00000000000000000000000000000000000000eA` (deployed on Push Chain) |
| Universal Callback address | `0x00000000000000000000000000000000000000c2`, the constructor argument for a `UniversalReadClient` (Push Chain Donut Testnet) |

## Contract Reference

### UEAFactory - Deployed Address

```
0x00000000000000000000000000000000000000eA
```

### Interface

```solidity
struct UniversalAccountId {
    string chainNamespace; // e.g., "eip155" or "solana"
    string chainId;        // e.g., "11155111" for Ethereum Sepolia
    bytes  owner;          // EVM: 20-byte packed address - address(bytes20(owner))
                           // Solana: 32-byte base58 pubkey - bs58.encode(ethers.getBytes(owner))
}

interface IUEAFactory {
    function getOriginForUEA(address addr)
        external view
        returns (UniversalAccountId memory account, bool isUEA);

    function getUEAForOrigin(UniversalAccountId memory _id)
        external view
        returns (address uea, bool isDeployed);
}
```

## Steps

### On-Chain: Detect If Caller Is UEA or Native Account

1. **Import the interface**

   Option A - from Push Chain Core Repository:
   ```solidity
   import "push-chain-core-contracts/src/Interfaces/IUEAFactory.sol";
   ```

   Option B - define manually:
   ```solidity
   pragma solidity ^0.8.0;

   struct UniversalAccountId {
       string chainNamespace;
       string chainId;
       bytes  owner;
   }

   interface IUEAFactory {
       function getOriginForUEA(address addr) external view
           returns (UniversalAccountId memory account, bool isUEA);
       function getUEAForOrigin(UniversalAccountId memory _id) external view
           returns (address uea, bool isDeployed);
   }
   ```

2. **Call `getOriginForUEA` in your contract**
   ```solidity
   address constant FACTORY = 0x00000000000000000000000000000000000000eA;

   function checkCallerType() public view returns (bool) {
       (UniversalAccountId memory account, bool isUEA) =
           IUEAFactory(FACTORY).getOriginForUEA(msg.sender);

       if (isUEA) {
           // msg.sender is a cross-chain user from:
           // account.chainNamespace + ":" + account.chainId
           // account.owner = their address as bytes
       } else {
           // msg.sender is a native Push Chain EOA
       }
       return isUEA;
   }
   ```

### On-Chain: Get UEA Address for a Known Origin

```solidity
function getUEAAddress(
    string memory chainNamespace,
    string memory chainId,
    bytes  memory ownerAddress
) public view returns (address uea, bool isDeployed) {
    UniversalAccountId memory id = UniversalAccountId({
        chainNamespace: chainNamespace,
        chainId: chainId,
        owner: ownerAddress
    });
    return IUEAFactory(0x00000000000000000000000000000000000000eA).getUEAForOrigin(id);
}
```

### Off-Chain: Check Origin of Any Push Chain Address

```typescript
import { ethers } from 'ethers';

const RPC_URL       = 'https://evm.donut.rpc.push.org/';
const FACTORY_ADDR  = '0x00000000000000000000000000000000000000eA';

const ABI = [
  'function getOriginForUEA(address addr) view returns (tuple(string chainNamespace, string chainId, bytes owner) account, bool isUEA)',
];

async function getOrigin(address: string) {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const factory  = new ethers.Contract(FACTORY_ADDR, ABI, provider);

  const [account, isUEA] = await factory.getOriginForUEA(address);
  
  console.log('Is UEA:', isUEA);
  if (isUEA) {
    console.log('Chain Namespace:', account.chainNamespace); // e.g. "eip155"
    console.log('Chain ID:', account.chainId);               // e.g. "11155111"
    console.log('Owner (hex):', account.owner);
  }
  return { account, isUEA };
}

getOrigin('0xbCfaD05E5f19Ae46feAab2F72Ad9977BC239b395');
```

### Off-Chain: Decode Solana Owner Address

```typescript
import bs58 from 'bs58';
import { ethers } from 'ethers';

const [account, isUEA] = await factory.getOriginForUEA(address);

if (isUEA && account.chainNamespace === 'solana') {
  const bytesAddress = ethers.getBytes(account.owner);
  const base58Address = bs58.encode(bytesAddress);
  console.log('Solana (Base58) Address:', base58Address);
}
```

## Universal Read Client

The [Universal Read Client](https://github.com/pushchain/push-chain-core-contracts/blob/core-testnet/src/UniversalReadClient.sol) is an abstract base contract you inherit so your contract can request external state through Universal Read and receive the validator-agreed result in a callback. It is not a deployed helper you call: you deploy your own contract that inherits it and pass the Universal Callback address (`0x00000000000000000000000000000000000000c2` on Push Chain Donut Testnet) to the constructor. The request types live in [ReadTypes.sol](https://github.com/pushchain/push-chain-core-contracts/blob/core-testnet/src/libraries/ReadTypes.sol).

Features:

- **Request with local context**: `_requestRead` stores per-request bytes that you get back in the callback
- **Guarded callback**: `onUniversalData` accepts calls only from Universal Callback
- **Refund safety**: when a spec your contract builds leaves `revertRecipient` as `address(0)`, it defaults to the contract itself, so the contract needs a payable `receive()`, or you point `revertRecipient` at an EOA. Specs prepared by the SDK already carry the caller's Push account (or `refundTo`)
- **Gas bound**: callback gas is capped at `MAX_CALLBACK_GAS_LIMIT` (1,000,000)

### Interface

```solidity
pragma solidity ^0.8.0;

/// @title Universal Read Client
/// @notice Abstract base contract for requesting external state through Universal Read
abstract contract UniversalReadClient is IUniversalReadClient {
    IUniversalCallback internal immutable UNIVERSAL_CALLBACK;
    mapping(uint256 => bytes) private _localContext;

    /// @dev Reverts with ZeroAddressInit if universalCallback_ is the zero address
    constructor(address universalCallback_);

    /**
     * @dev Submits a read request and stores localState under the returned requestId.
     * Defaults `revertRecipient` to this contract when unset. Refunds are PUSHED there on
     * settlement, so an inheriting contract that keeps the default MUST declare a payable
     * receive(); otherwise the push is rejected and the refund is forfeited. Point
     * revertRecipient at an EOA to avoid that entirely.
     */
    function _requestRead(ReadSpec memory spec, bytes memory localState, uint64 callbackGasLimit)
        internal
        returns (uint256 requestId);
    // Forwards msg.value to UNIVERSAL_CALLBACK.requestExternalReadSelf(spec, this.onUniversalData.selector, callbackGasLimit)

    /// @dev Reverts with UnauthorizedCaller unless msg.sender is UNIVERSAL_CALLBACK.
    /// Loads and deletes the stored localState, then calls _onReadResult.
    function onUniversalData(uint256 requestId, bytes calldata resultData) external;

    /// @dev Override to handle the delivered result
    function _onReadResult(uint256 requestId, bytes calldata resultData, bytes memory localState) internal virtual;

    /// @dev Returns the Universal Callback contract this client is bound to
    function universalCallback() external view returns (IUniversalCallback);

    /// @dev Returns the localState still pending for requestId (empty once delivered)
    function getLocalContext(uint256 requestId) external view returns (bytes memory);
}
```

### What You Implement

- **`_requestRead(ReadSpec spec, bytes localState, uint64 callbackGasLimit) returns (uint256 requestId)`** (`internal`): call it from your own `payable` entrypoint; it forwards `msg.value` (protocol fee plus callback budget) to Universal Callback. The budget must cover `callbackGasLimit × Push base fee`, or the node never fulfils the request and it expires (`estimateFee` is 0 on Donut today). On the SDK path, forward the prepared spec and gas limit unchanged and call `_requestRead` exactly once; otherwise the SDK throws `READ_REQUEST_MISMATCH` after the transaction is mined. For Solana and Web2 envelopes, build the call with the SDK's `toCallData(prepared, { abi, functionName })`, which returns `{ data, value }`. The numeric `requestId` matches `requestIdUint` (a `bigint`) in the SDK response.
- **`_onReadResult(uint256 requestId, bytes resultData, bytes localState)`** (`internal virtual`): override it to store, decode or act on the result. Empty `resultData` means the source returned an error; return early. Starting another read from inside this callback is unsupported.

```solidity
contract ExternalStateReader is UniversalReadClient {
    address public immutable authorizedRequester;
    mapping(uint256 => bytes) public results;

    constructor(address universalCallback_, address authorizedRequester_)
        UniversalReadClient(universalCallback_)
    {
        authorizedRequester = authorizedRequester_;
    }

    function request(ReadSpec calldata spec, uint64 gasLimit) external payable returns (uint256) {
        require(msg.sender == authorizedRequester, "not authorized");
        return _requestRead(spec, abi.encode(msg.sender), gasLimit);
    }

    function _onReadResult(uint256 requestId, bytes calldata resultData, bytes memory) internal override {
        results[requestId] = resultData;
    }

    // Required while revertRecipient defaults to this contract
    receive() external payable {}
}
```

The deployed [Universal Read Registry](https://donut.push.network/address/0x00000000000000000000000000000000000000b2?tab=contract) (`PushChain.CONSTANTS.READ.UNIVERSAL_READ_REGISTRY_ADDRESS.TESTNET_DONUT`) is a production example of this pattern. Read what it recorded and stored with ethers (no signer needed): [read-client-request-context.md](https://push.org/agents/examples/read-client-request-context.md) (`readerOf`, `queryKeyOf`, `requestOrderOf`) and [read-client-stored-result.md](https://push.org/agents/examples/read-client-stored-result.md) (`hasResult`, `resultByRequestId`, with `trackRead` to confirm `callbackDelivered`).

### Also On The Base Contract

| Member | Visibility | Purpose |
| ------ | ---------- | ------- |
| `onUniversalData(uint256 requestId, bytes resultData)` | `external` | The entry Universal Callback uses to deliver a result. Reverts `UnauthorizedCaller` for any other sender and forwards to `_onReadResult`. Never call it yourself and never expose a replacement. |
| `getLocalContext(uint256 requestId)` | `external view` | Returns the `localState` stored by `_requestRead` while the request is pending; empty once the result has been delivered. |
| `universalCallback()` | `external view` | Returns the Universal Callback address this client was constructed with. |

The full flow (ReadSpec fields, both request paths, the EVM query envelope, fees and refunds) is in [universal-read.md](https://push.org/agents/workflows/universal-read.md).

## Expected Output

```typescript
// getOriginForUEA for a cross-chain user:
{
  account: {
    chainNamespace: 'eip155',
    chainId: '11155111',
    owner: '0xC8AE31cF444CAB447921277c4DcF65128d5B25a8'
  },
  isUEA: true
}

// getOriginForUEA for a native Push Chain EOA:
{
  account: { chainNamespace: '', chainId: '', owner: '0x' },
  isUEA: false
}
```

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `call revert` on `getOriginForUEA` | Address doesn't exist on Push Chain | Ensure address has interacted with Push Chain first |
| Solana address garbled | Returned as hex, not base58 | Use `bs58.encode(ethers.getBytes(owner))` to decode |
| `factory is not a contract` | Wrong address or wrong network | Verify you're on Push Chain (`chainId: 42101`) |
| `forge install` fails | No git available | Run in a git-initialized project directory |
| `UnauthorizedCaller` on `onUniversalData` | Something other than Universal Callback called the receiver | Never call or re-expose `onUniversalData`; only `0x00000000000000000000000000000000000000c2` delivers results |
| Read result never stored | `_onReadResult` reverted or ran out of gas (`callbackDelivered` is `false`, `outcome` is `CALLBACK_FAILED`), or `resultData` was empty (source error, `outcome` is `SOURCE_ERROR`) | Raise the callback gas (up to 1,000,000) and return early on empty `resultData` |
| Request never fulfils, then `EXPIRED` | The callback budget is below `callbackGasLimit × Push base fee` | Send more `msg.value` |
| Refund not delivered | The receiver has no payable `receive()` while `revertRecipient` defaults to it (a contract-built spec with `revertRecipient = address(0)`) | Add `receive() external payable {}` or set `revertRecipient` to an EOA; the SDK reports it as `fees.refundFailed` |

## Agent Notes

- **UEA Factory address is deterministic**: `0x00000000000000000000000000000000000000eA` - same on all Push Chain environments.
- **`account.owner` byte layout**: EVM chains return a 20-byte packed address - decode with `address(bytes20(account.owner))`. Solana returns a 32-byte base58 public key - decode off-chain with `bs58.encode(ethers.getBytes(account.owner))`.
- **`isUEA = false` means native EOA**: not all Push Chain addresses are UEAs; some are native accounts with no cross-chain origin.
- **`getUEAForOrigin` works before UEA is deployed**: it returns the deterministic address even if `isDeployed = false`.
- **`UniversalReadClient` is inherited, not called**: pass Universal Callback `0x00000000000000000000000000000000000000c2` to the constructor, call `_requestRead` from a payable entrypoint, and override `_onReadResult`.
- **Gate the request entrypoint to the `msg.sender` it will see**: for an SDK caller that is `pushChainClient.universal.account`, not necessarily the deploying wallet.

## MCP Mapping Candidates

- `resolve_helper_contract_address` - Return UEAFactory address for current network
- `call_origin_detection_function` - Invoke `getOriginForUEA` for a given address
- `parse_helper_response` - Decode `UniversalAccountId` struct including non-EVM addresses
- `track_universal_read` - Confirm a `UniversalReadClient` callback ran (`callbackDelivered`) for a request ID

## Docs

- Contract Helpers: https://push.org/docs/chain/build/contract-helpers/
- Universal Read Client: https://push.org/docs/chain/build/contract-helpers/#universal-read-client
- Contract-Initiated Universal Read and Callback: https://push.org/docs/chain/build/contract-initiated-universal-read-and-callback/
