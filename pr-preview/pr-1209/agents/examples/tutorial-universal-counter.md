# Tutorial: Universal Counter — Per-Chain Tracking

Source: https://push.org/docs/chain/tutorials/basics/tutorial-universal-counter/

## Overview

Build a counter that tracks per-chain increments using UEAFactory and UniversalAccountId.

## Write the Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

// Universal Account ID Struct and IUEAFactory Interface
struct UniversalAccountId {
    string chainNamespace;
    string chainId;
    bytes owner;
}

interface IUEAFactory {
    function getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);
}

contract UniversalCounter {
    uint256 public countEth;
    uint256 public countSol;
    uint256 public countPC;

    event CountIncremented(
        uint256 newCount,
        address indexed caller,
        string chainNamespace,
        string chainId
    );

    constructor() {}

    function increment() public {
        address caller = msg.sender;
        (UniversalAccountId memory originAccount, bool isUEA) =
            IUEAFactory(0x00000000000000000000000000000000000000eA).getOriginForUEA(caller);

        if (!isUEA) {
            // If it's a native Push Chain EOA (isUEA = false)
            countPC += 1;
        } else {
            bytes32 chainHash = keccak256(abi.encodePacked(originAccount.chainNamespace, originAccount.chainId));

            if (chainHash == keccak256(abi.encodePacked("solana","EtWTRABZaYq6iMfeYKouRu166VU2xqa1"))) {
                countSol += 1;
            } else if (chainHash == keccak256(abi.encodePacked("eip155","11155111"))) {
                countEth += 1;
            } else {
                revert("Invalid chain");
            }
        }

        emit CountIncremented(getCount(), caller, originAccount.chainNamespace, originAccount.chainId);
    }

    function getCount() public view returns (uint256) {
        return countEth + countSol + countPC;
    }
}
```

## Write the Contract

```solidity
// Note: Unlike the Beginner version, this contract also tracks unique users per chain.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

// Universal Account ID Struct and IUEAFactory Interface
struct UniversalAccountId {
    string chainNamespace;
    string chainId;
    bytes owner;
}

interface IUEAFactory {
    function getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);
}

contract UniversalCounter {
    // Counter mapping to maintain individual chain counts
    mapping(bytes => uint256) public chainCount;
    mapping(bytes => uint256) public chainCountUnique;

    // Array of chain IDs to track unique chains
    bytes[] public chainIds;

    // Array of chain users to track unique counts
    mapping(address => bool) public chainUsers;

    event CountIncremented(
        uint256 newCount,
        uint256 newCountUnique,
        address indexed caller,
        string chainNamespace,
        string chainId
    );

    constructor() {}

    function increment() public {
        address caller = msg.sender;
        (UniversalAccountId memory originAccount, bool isUEA) =
            IUEAFactory(0x00000000000000000000000000000000000000eA).getOriginForUEA(caller);

        // Calculate chain hash
        bytes memory chainHash = abi.encodePacked(originAccount.chainNamespace, ":", originAccount.chainId);

        if (chainCount[chainHash] == 0) {
            // Add new chain to chainIds if it doesn't exist
            chainIds.push(chainHash);
        }

        if (chainUsers[caller] == false) {
          // add to chain unique count if user is not already counted
          chainCountUnique[chainHash] += 1;
          chainUsers[caller] = true;
        }

        // Add to chain count
        chainCount[chainHash] += 1;

        (uint256 totalCount, uint256 totalCountUnique) = getCount();
        emit CountIncremented(totalCount, totalCountUnique, caller, originAccount.chainNamespace, originAccount.chainId);
    }

    function getCount() public view returns (uint256 count, uint256 countUnique) {
      uint256 totalCount = 0;
      uint256 totalCountUnique = 0;

      for (uint256 i = 0; i < chainIds.length; i++) {
        totalCount += chainCount[chainIds[i]];
        totalCountUnique += chainCountUnique[chainIds[i]];
      }

      return (totalCount, totalCountUnique);
    }
}
```

## Understanding UEAFactory Interface

```solidity
/**
  * @dev Returns the owner key (UOA) for a given UEA address
  * @param addr Any given address ( msg.sender ) on push chain
  * @return account The Universal Account information associated with this UEA
  * @return isUEA True if the address addr is a UEA contract. Else it is a native EOA of PUSH chain (i.e., isUEA = false)
  */
function getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);
```
