---
title: "Contract Helpers"
url: "https://pushchain.github.io/docs/chain/build/contract-helpers/"
section: "build"
lastUpdated: "2026-09-23T14:39:51Z"
description: "Contract Helpers | Build | Push Chain Docs"
---

# Contract Helpers

## Overview

When building smart contract applications on Push Chain, you’ll at times need helper contracts to surface on-chain metadata, like identifying external chain users or computing deterministic smart account addresses. Push Chain provides a set of helper interfaces under the hood to simplify these workflows.

Two helpers are covered here: the Universal Executor Account Factory (UEAFactory), which underpins Push Chain's multi-chain smart account abstraction, and the Universal Read Client, the base contract your app inherits to receive external chain state through Universal Read.

## Universal Executor Account Factory

> As previously mentioned, [Universal Executor Accounts (UEAs)](/push-chain-website/pr-preview/pr-1244/docs/chain/important-concepts/#account-types-on-push-chain) are a type of executor smart accounts that represent external chain users on Push Chain, allowing them to interact with Push Chain applications without having to connect, bridge, or move to Push Chain.

The [Universal Executor Account Factory](https://github.com/pushchain/push-chain-contracts/blob/main/src/Interfaces/IUEAFactory.sol) is the central contract responsible for deploying and managing Universal Executor Accounts (UEAs) for users from different blockchains.

  
  

### UEAFactory Features

The [UEA Factory](https://github.com/pushchain/push-chain-contracts/blob/main/src/UEAFactoryV1.sol) serves these key features:

-   **Multi-Chain Support**: Register and manage UEAs for users from different blockchains
-   **Deterministic Addresses**: Uses `CREATE2` + minimal proxies for predictable UEA addresses
-   **Deployment Status**: Optionally check if a UEA is already deployed
-   **Owner ↔ UEA Mapping**: Bidirectional mapping between Universal Accounts and their UEAs, VM types and implementations.

  
  

### UEAFactory Interface

**Deployed Address**: **_`0x00000000000000000000000000000000000000eA`_**

This helper contract helps in fetching cross-chain information about an address. It also provides identity-mapping between source chain wallet address and Push Chain address and can determine if the address is native to Push Chain or is proxy for external chain user.

In order to use the UEAFactory in your contract, you can either:

#### 1\. Import it directly from Push Chain Core Repository

```solidity
import "push-chain-core-contracts/src/Interfaces/IUEAFactory.sol";
```

For Foundry Developers

Do the additional steps to enable the same in your Foundry:  

  

1.  Run forge install

```bash
forge install pushchain/push-chain-core-contracts
```

2.  Add remappings to your **foundry.toml** file

```toml
remappings = ["push-chain-core-contracts/=lib/push-chain-core-contracts/"]
```

#### Or 2. Define the interface manually in your solidity contract

Use the following interface directly in your contract

```solidity
pragma solidity ^0.8.0;

struct UniversalAccountId {
    string chainNamespace; // Chain namespace identifier of the owner account (e.g., "eip155" or "solana")
    string chainId; // Chain ID of the source chain of the owner of this UEA.
    bytes owner; // Owner's public key or address in bytes format
}

/// @title Universal Executor Account Factory Interface
/// @notice Helper interface for deploying and querying UEAs on Push Chain
interface IUEAFactory {
    /**
     * @dev Returns the owner key (UOA) for a given UEA address
     * @param addr Any given address ( msg.sender ) on push chain
     * @return account The Universal Account identity information associated with this UEA
     * @return isUEA True if the address addr is a UEA contract. Else it is a native EOA of PUSH chain (i.e., isUEA = false)
     */
    function getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);

    /**
     * @dev Returns the computed UEA address for a given Universal Account ID and deployment status
     * @param _id The Universal Account identity information
     * @return uea The address of the UEA (computed deterministically)
     * @return isDeployed True if the UEA has already been deployed
     */
    function getUEAForOrigin(UniversalAccountId memory _id) external view returns (address uea, bool isDeployed);
}
```

  
  

### UEAFactory Methods

### UEAFactory → getOriginForUEA

**_`getOriginForUEA(address): (UniversalAccountId, bool)`_**

is _`external view`_

Returns the owner information and UEA status for a given address on Push Chain.

**Commonly used for**:

-   Checking if a given address is a native account on Push Chain or is controlled by another chain user.
-   Determining the source chain of a given address on Push Chain.
-   Getting the Universal Account identity information associated with this address.

> Note: The returned origin address will be encoded in Hex format. For example, for Solana addresses, a base58 conversion should be done to get the readable format.

```solidity
/**
 * @dev Returns the owner key (UOA) for a given UEA address
 * @param addr Any given address ( msg.sender ) on push chain
 * @return account The Universal Account identity information associated with this UEA
 * @return isUEA True if the address addr is a UEA contract. False if it is a native account on PUSH chain (i.e., isUEA = false)
*/
function getOriginForUEA(
    address addr
)
    external
    view
    returns (
        UniversalAccountId memory account,
        bool isUEA
    );
```

| Arguments | Type | Description |
| --- | --- | --- |
| _`addr`_ | `address` | Any address on Push Chain (typically msg.sender). |

Returns \`UniversalAccountId\`<struct> and \`bool\`

| Response | Type | Description |
| --- | --- | --- |
| account | `UniversalAccountId` | The Universal Account identity information containing:  
   
\- **chainNamespace**: Chain namespace identifier (e.g., "eip155" for EVM based chains, "solana" for Solana, etc.)  
\- **chainId**: Chain ID of the source chain of the owner of this UEA.  
\- **owner**: Owner's public key or address in bytes format. |
| isUEA | `bool` | True if the address addr is a UEA contract. False if it is a native address on PUSH chain (i.e., isUEA = false). |

On-chain usage

```solidity
function checkCallerType() public view returns (bool isUEA) {
  (UniversalAccountId memory account, bool isUEA) = IUEAFactory(0x00000000000000000000000000000000000000eA).getOriginForUEA(msg.sender);

  if (isUEA) {
      // Do something with the UEA
  } else {
      // Do something with the native account
  }
}
```

Off-chain usage

VIRTUAL NODE IDE

Copy playground link

Copy code

  
  

### UEAFactory → getUEAForOrigin

**_`getUEAForOrigin(UniversalAccountId): (address, bool)`_**

is _`external view`_

Returns the computed UEA address for a given Universal Account. Additionaly, it also returns the deployment status of the UEA.

**Commonly used for**:

-   Get or compute the UEA address for a given Universal Account.
-   Check if a given Universal Account is deployed or not.

> Note: UniversalAccountId is a struct that returns chainNamespace, chainId and owner. `chainNamespace` contains the [chain namespace](/push-chain-website/pr-preview/pr-1244/docs/chain/setup/chain-config/#universal-chain-namespace) (e.g., "eip155" for EVM based chains, "solana" for Solana, etc.) and `chainId` contains the chain ID of the source chain of the owner of this UEA. `owner` contains the wallet address in bytes.

```solidity
/**
 * @dev Returns the computed UEA address for a given Universal Account ID and deployment status
 * @param _id The Universal Account identity information
 * @return uea The address of the UEA (computed deterministically)
 * @return isDeployed True if the UEA has already been deployed
*/
function getUEAForOrigin(
    UniversalAccountId memory _id
)
    external
    view
    returns (
        address uea,
        bool    isDeployed
    );
```

| Arguments | Type | Description |
| --- | --- | --- |
| _`_id`_ | UniversalAccountId | The Universal Account identity information containing:  
   
\- **chainNamespace**: Chain namespace identifier (e.g., "eip155" for EVM based chains, "solana" for Solana, etc.)  
\- **chainId**: Chain ID of the source chain of the owner of this UEA.  
\- **owner**: Owner's public key or address in bytes format. |

Returns \`address\` and \`bool\`

| Response | Type | Description |
| --- | --- | --- |
| uea | address | The address of the UEA (computed deterministically). |
| isDeployed | bool | True if the UEA has already been deployed. |

On-chain usage

```solidity
function checkUEAType() public view returns (address uea, bool isDeployed) {
    (address uea, bool isDeployed) = IUEAFactory(0x00000000000000000000000000000000000000eA).getUEAForOrigin(account);

    if (isDeployed) {
        // Do something with the deployed UEA
    } else {
        // UEA is not deployed yet but you have deterministic address for the UEA.
    }
}
```

Off-chain usage

VIRTUAL NODE IDE

Copy playground link

Copy code

  
  

## Universal Read Client

The [Universal Read Client](https://github.com/pushchain/push-chain-core-contracts/blob/core-testnet/src/UniversalReadClient.sol) is an abstract base contract you inherit so your contract can request external state through [Universal Read](/push-chain-website/pr-preview/pr-1244/docs/chain/important-concepts/#universal-read-external-state-on-push-chain) and receive the validator-agreed result in a callback. The SDK side of the flow is covered in [Contract-Initiated Universal Read and Callback](/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-initiated-universal-read-and-callback/).

It is not a deployed helper you call. You deploy your own contract that inherits it, passing the Universal Callback address (`0x00000000000000000000000000000000000000c2` on Push Chain Donut Testnet, see the [Smart Contract Address Book](/push-chain-website/pr-preview/pr-1244/docs/chain/setup/smart-contract-address-book/)) to the constructor.

  
  

### UniversalReadClient Features

The [Universal Read Client](https://github.com/pushchain/push-chain-core-contracts/blob/core-testnet/src/UniversalReadClient.sol) serves these key features:

-   **Request with local context**: `_requestRead` stores per-request bytes that you get back in the callback
-   **Guarded callback**: `onUniversalData` accepts calls only from Universal Callback
-   **Refund safety**: `revertRecipient` defaults to the contract itself, so the contract needs a payable `receive()`, or you point `revertRecipient` at an EOA
-   **Gas bound**: Callback gas is capped at `MAX_CALLBACK_GAS_LIMIT` (1,000,000)

  
  

### UniversalReadClient Interface

**Universal Callback Address**: **_`0x00000000000000000000000000000000000000c2`_**

This is the constructor argument on Push Chain Donut Testnet: your inheriting contract sends read requests to Universal Callback and only accepts results delivered by it. The request types live in [ReadTypes.sol](https://github.com/pushchain/push-chain-core-contracts/blob/core-testnet/src/libraries/ReadTypes.sol).

UniversalReadClient (abstract)

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

ReadSpec struct

```solidity
pragma solidity ^0.8.0;

struct ReadSpec {
    UniversalAccountId account;   // chainNamespace, chainId, owner (bytes)
    bytes query;                  // encoded query envelope, built by the SDK
    uint16 minConfirmations;      // >= 1
    uint64 blockNumber;           // pinned source height; 0 for heightless sources (web2)
    uint64 expiryPushChainHeight; // > current Push height
    uint256 maxFee;               // >= msg.value
    address revertRecipient;      // where unused callback budget is pushed; must accept native transfers
}

uint64 constant MAX_CALLBACK_GAS_LIMIT = 1_000_000;
```

Most apps do not build a **ReadSpec** by hand. The SDK's [Universal Read](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/) abstracts it if you are using the SDK.

A contract can build one itself when no SDK is in the loop. See [Contract-Initiated Universal Read and Callback](/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-initiated-universal-read-and-callback/) for the end to end contract flow.

| Field | What to put there |
| --- | --- |
| `account` | The source chain as `chainNamespace` and `chainId` (for example `"eip155"` and `"11155111"`), plus `owner` bytes. Validators ignore `owner` for EVM reads. |
| `query` | The encoded read: which account, contract call or storage slot to read, and at which block. The layout is fixed by the validators; the SDK's `read-state/envelopes/` is the reference encoding. |
| `minConfirmations` | Confirmations the source block must have. At least `1`. |
| `blockNumber` | The source block to read at. Take `UniversalCore.chainHeightByChainNamespace("eip155:11155111")` and subtract `minConfirmations`. Must match the block inside `query`. |
| `expiryPushChainHeight` | When the request lapses, in Push Chain blocks: `block.number + N`. |
| `maxFee` | Upper bound on what you are paying; `msg.value` may not exceed it. |
| `revertRecipient` | Where unused callback budget is returned. `_requestRead` sets it to your contract when zero, so keep a payable `receive()` or point it at an EOA. |

  
  

### UniversalReadClient → What You Implement

Two members are your contract's contact points with Universal Read: you call `_requestRead` from your own payable entrypoint, and you override `_onReadResult` to receive the result.

> Note: The numeric `requestId` used by these methods matches `requestIdUint` in the SDK response. The SDK's hex `requestId` is the same value.

### UniversalReadClient → \_requestRead

**_`_requestRead(ReadSpec, bytes, uint64): uint256`_**

is _`internal`_

Submits a Universal Read request to Universal Callback and stores `localState` under the returned `requestId`.

**Commonly used for**:

-   Requesting external chain or web2 state from a payable entrypoint in your contract.
-   Carrying per-request context (such as the original requester) through to the callback.

> Note: `_requestRead` forwards `msg.value`, so the calling entrypoint must be `payable`. The value is the protocol fee plus the callback budget, as prepared by the SDK. If you gate the entrypoint, authorize the Push-side account that actually submits the request: `pushChainClient.universal.account` is a UEA for an external signer and the native address for a Push signer.

```solidity
/**
 * @dev Submits a read request and stores localState under the returned requestId
 * @param spec The read specification (source account, query, confirmations, pinned height, expiry, max fee, refund recipient)
 * @param localState Arbitrary bytes handed back to _onReadResult on delivery
 * @param callbackGasLimit Gas budget for the callback, at most MAX_CALLBACK_GAS_LIMIT
 * @return requestId The numeric id of the request
*/
function _requestRead(
    ReadSpec memory spec,
    bytes memory localState,
    uint64 callbackGasLimit
)
    internal
    returns (
        uint256 requestId
    );
```

| Arguments | Type | Description |
| --- | --- | --- |
| _`spec`_ | `ReadSpec` | The read specification: source `account`, encoded `query`, `minConfirmations`, pinned `blockNumber`, `expiryPushChainHeight`, `maxFee` and `revertRecipient`. See the ReadSpec struct above. |
| _`localState`_ | `bytes` | Arbitrary bytes stored under the request id and passed back to `_onReadResult`. |
| _`callbackGasLimit`_ | `uint64` | Gas budget for the callback, at most `MAX_CALLBACK_GAS_LIMIT` (1,000,000). |

Returns \`uint256\`

| Response | Type | Description |
| --- | --- | --- |
| requestId | `uint256` | The numeric id of the request. Matches `requestIdUint` in the SDK response. |

On-chain usage

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

The deployed [Universal Read Registry](https://donut.push.network/address/0x00000000000000000000000000000000000000b2?tab=contract) is a production example of this pattern.

Off-chain usage

You do not need your own receiver to see what `_requestRead` records: the deployed [Universal Read Registry](https://donut.push.network/address/0x00000000000000000000000000000000000000b2?tab=contract) is a `UniversalReadClient`, and its `read` entrypoint calls `_requestRead` with the caller and query key as local context. This reads that context back for a request that already completed:

VIRTUAL NODE IDE

Copy playground link

Copy code

With your own receiver, the SDK calls your entrypoint instead when you pass `callback`; see [Contract-Initiated Universal Read and Callback](/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-initiated-universal-read-and-callback/).

  
  

### UniversalReadClient → \_onReadResult

**_`_onReadResult(uint256, bytes, bytes)`_**

is _`internal virtual`_

Handles a delivered result. You override this in your contract; the base contract calls it from `onUniversalData` with the `localState` you stored at request time.

**Commonly used for**:

-   Storing the result for later reads.
-   Decoding the result bytes into typed values.
-   Acting on the result, such as updating balances or releasing a pending action.

> Note: The callback arriving does not by itself prove the source read succeeded. Validate the result bytes and their freshness before acting on them. Starting another read from inside this callback is unsupported.

```solidity
/**
 * @dev Override to handle the delivered result
 * @param requestId The numeric id of the request
 * @param resultData The validator-agreed result bytes
 * @param localState The bytes stored with the request, deleted after delivery
*/
function _onReadResult(
    uint256 requestId,
    bytes calldata resultData,
    bytes memory localState
)
    internal
    virtual;
```

| Arguments | Type | Description |
| --- | --- | --- |
| _`requestId`_ | `uint256` | The numeric id of the request. |
| _`resultData`_ | `bytes` | The validator-agreed result bytes. |
| _`localState`_ | `bytes` | The bytes you passed to `_requestRead` for this request. |

Returns nothing

This function has no return value.

On-chain usage

```solidity
mapping(uint256 => bytes) public results;

function _onReadResult(
    uint256 requestId,
    bytes calldata resultData,
    bytes memory /* localState */
) internal override {
    results[requestId] = resultData;
}
```

The deployed [Universal Read Registry](https://donut.push.network/address/0x00000000000000000000000000000000000000b2?tab=contract) is a production example of this pattern.

Off-chain usage

`_onReadResult` runs on-chain when validators deliver the result. The registry's override stores it, so you can confirm the callback landed and read what it stored, for the same completed request:

VIRTUAL NODE IDE

Copy playground link

Copy code

`callbackDelivered` is `false` when the override reverted or ran out of gas; the read is still `FULFILLED` in that case. See [Track Universal Read](/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read/).

  
  

### UniversalReadClient → Also On The Base Contract

You do not call these in normal use, but they are part of the contract you deploy.

| Member | Visibility | Purpose |
| --- | --- | --- |
| `onUniversalData(uint256 requestId, bytes resultData)` | `external` | The entry Universal Callback uses to deliver a result. Reverts `UnauthorizedCaller` for any other sender and forwards to `_onReadResult`. Never call it yourself and never expose a replacement. |
| `getLocalContext(uint256 requestId)` | `external view` | Returns the `localState` stored by `_requestRead` while the request is pending; empty once the result has been delivered. |
| `universalCallback()` | `external view` | Returns the Universal Callback address this client was constructed with. |

  
  

## Next Steps

-   Wire up your SDK in [Initialize Push Chain Client](/push-chain-website/pr-preview/pr-1244/docs/chain/build/initialize-push-chain-client/)
-   Simplify cross-chain workflows via [Utility Functions](/push-chain-website/pr-preview/pr-1244/docs/chain/build/utility-functions/)
-   Dive into on-chain reads with [Reading Blockchain State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/reading-blockchain-state/)
-   Receive external chain state in your contract with [Contract-Initiated Universal Read and Callback](/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-initiated-universal-read-and-callback/)
-   Abstract wallet & UI flows with our [UI Kit](/push-chain-website/pr-preview/pr-1244/docs/chain/ui-kit/)
-   Go deeper into advanced patterns in [Deep Dives](/push-chain-website/pr-preview/pr-1244/docs/chain/deep-dives/)
