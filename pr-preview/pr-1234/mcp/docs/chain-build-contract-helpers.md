---
title: "Contract Helpers"
url: "https://pushchain.github.io/docs/chain/build/contract-helpers/"
section: "build"
lastUpdated: "2026-09-04T07:14:57Z"
description: "Contract Helpers | Build | Push Chain Docs"
---

# Contract Helpers

## Overview

When building smart contract applications on Push Chain, you’ll at times need helper contracts to surface on-chain metadata—like identifying external chain users or computing deterministic smart account addresses. Push Chain provides a set of helper interfaces under the hood to simplify these workflows.

One primary helper is the Universal Executor Account Factory (UEAFactory), which underpins Push Chain’s multi‐chain smart account abstraction.

## Universal Executor Account Factory

> As previously mentioned, [Universal Executor Accounts (UEAs)](/push-chain-website/pr-preview/pr-1234/docs/chain/important-concepts/#account-types-on-push-chain) are a type of executor smart accounts that represent external chain users on Push Chain, allowing them to interact with Push Chain applications without having to connect, bridge, or move to Push Chain.

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

> Note: UniversalAccountId is a struct that returns chainNamespace, chainId and owner. `chainNamespace` contains the [chain namespace](/push-chain-website/pr-preview/pr-1234/docs/chain/setup/chain-config/#universal-chain-namespace) (e.g., "eip155" for EVM based chains, "solana" for Solana, etc.) and `chainId` contains the chain ID of the source chain of the owner of this UEA. `owner` contains the wallet address in bytes.

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

## Next Steps

-   Wire up your SDK in [Initialize Push Chain Client](/push-chain-website/pr-preview/pr-1234/docs/chain/build/initialize-push-chain-client/)
-   Simplify cross-chain workflows via [Utility Functions](/push-chain-website/pr-preview/pr-1234/docs/chain/build/utility-functions/)
-   Dive into on-chain reads with [Reading Blockchain State](/push-chain-website/pr-preview/pr-1234/docs/chain/build/reading-blockchain-state/)
-   Abstract wallet & UI flows with our [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/)
-   Go deeper into advanced patterns in [Deep Dives](/push-chain-website/pr-preview/pr-1234/docs/chain/deep-dives/)
