---
title: "Build a Universal Counter App"
url: "https://pushchain.github.io/docs/chain/tutorials/basics/tutorial-universal-counter/"
section: "tutorials"
lastUpdated: "2026-09-02T13:01:57Z"
description: "Build a Universal Counter App | Tutorials | Push Chain Docs"
---

# Build a Universal Counter App

18 mins

Extends Counter App

This tutorial builds on the [Counter](/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/basics/tutorial-simple-counter/). If you haven’t completed it yet, go there first as this tutorial builds directly on top of it.

In the last tutorial, you built a counter that worked across chains with no code changes.

Now, let’s take it further: instead of one shared counter, we’ll track **counts per chain**. This is your first truly **Universal App**. Let’s dive in 🤿.

By the end of this tutorial you’ll be able to:

-   ✅ Build a counter app that tracks transactions from **different chains**.
-   ✅ Use the **UEAFactory interface** to detect a user’s origin.
-   ✅ Work with the **UniversalAccountId struct** to fetch chain details.

## What’s Unique About This App?

In the **Counter**, every increment was added to a single shared value. That worked fine, but it didn’t tell us _who_ was incrementing or _from where_.

With the **Universal Counter**, we take the next step:

-   Each chain gets its **own counter** (`countEth`, `countPC`, `countSol`, …).
-   The contract can **natively detect the origin** of the caller (`msg.sender`).
-   The `increment()` function updates **only the counter for the caller’s chain**.

### Example

-   Alice (Ethereum) → calls `increment()` → only `countEth` goes up.
-   Bob (Push Chain) → calls `increment()` → only `countPC` goes up.

> **🚀 Why this matters**
> 
> You’re not just tracking clicks anymore. You’re building logic that’s aware of where your users come from. This is the foundation of truly universal apps, and it’s all **natively supported on Push Chain**.

## Write the Contract

Below is the Solidity code for the Universal Counter. In the Beginner version, chains are hardcoded for simplicity.

Beginner vs Pro

-   **Beginner:** Easier to follow. Great if you’re new to Solidity or Push Chain.
-   **Pro (Dynamic):** Slightly more advanced. Switch to the **Pro (Dynamic)** version once you’re comfortable — it scales to any chain without edits.

-   Universal Counter (Beginner)
-   Universal Counter (Dynamic / Pro)

Universal Counter Contract

UniversalCounter.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-counter/contracts/src/UniversalCounter.sol)

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

Universal Counter Dynamic Contract

UniversalCounterDynamic.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-counter-dynamic/contracts/src/UniversalCounterDynamic.sol)

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

## Understanding the Contract

This contract can now instantly determine key details about any user **(msg.sender)** instantly and natively.

In simpler terms, for any given **msg.sender** address, the contract is able to quickly identify:

1.  _the actual source chain of the caller_
2.  _the chain id of the source chain of the caller._
3.  _the address of the caller on the source chain._

These details are natively available for any smart contract built on Push Chain. This is enabled via **[UEAFactory Interface](https://github.com/pushchain/push-chain-core-contracts/blob/main/src/Interfaces/IUEAFactory.sol)**.

### Understanding UEAFactory Interface

We use UEAFactory interface to decide transaction origin of the user. It stands for **Universal Execution Account** (UEA). Think of a UEA like a passport contract, it proves which chain a user comes from.

_This can either be imported or directly included in your contract._

This interfaces provides you with the function - `getOriginForUEA()`.

```solidity
/**
  * @dev Returns the owner key (UOA) for a given UEA address
  * @param addr Any given address ( msg.sender ) on push chain
  * @return account The Universal Account information associated with this UEA
  * @return isUEA True if the address addr is a UEA contract. Else it is a native EOA of PUSH chain (i.e., isUEA = false)
  */
function getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);
```

The function mainly returns 2 crucial values:

-   The **UniversalAccountId** of the user, and
-   A boolean that indicates whether or not this caller is a UEA.

### Designing the Increment Function

```solidity
...
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
      }
      // ...
  }
  // ...
}
// ...
```

The `increment` function is the main logic of this contract that updates the count variables based on user’s origin type.

In order to achieve this, the `increment` function does the following:

-   calls the `getOriginForUEA()` with **msg.sender** as argument
-   this provides us with **isUEA and UniversalAccountId** for the caller.
-   then we check if **isUEA is false,** this means the caller is a native Push User.
-   for such users, the function increments `countPC` variable by 1

**Why isUEA = false means native Push User and true means other chains?**

1\. Every external chain user (ETH, Solana, etc) in Push Chain has a UEA account deployed for them.

2\. These UEA accounts represent the external chain users on Push Chain and are directly controlled by their signatures.

3\. UEAs allow external users to interact and use Push Chain apps without natively being on Push Chain.

4\. Therefore, for a given `msg.sender`:

-   **isUEA = false** → the caller is a native Push Chain account and not an external chain user.
-   **isUEA = true** → the caller is an external chain user interacting via a UEA. For such a user, the `UniversalAccountId` provides all information like _{ chainName, chainId, ownerAddress }_.

## Interact with Universal Counter

The easiest way to interact with the contract is through the Live Playground. The Universal Counter is already deployed on Push Chain Testnet.

> **UniversalCounter (Beginner) :** [0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512](https://donut.push.network/address/0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512?tab=contract) **UniversalCounter (Dynamic / Pro) :** [0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9](https://donut.push.network/address/0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9?tab=contract)

**Steps to interact:**

-   Connect your wallet to the Live Playground.
-   You can connect a wallet from any supported chain (Push Chain, Ethereum, or Solana).
-   Click **Increment Counter** to increase the counter for your chain.
-   Click **Refresh Counter Values** to see updated counts across chains.
-   Click **View in Explorer** to open the transaction in Push Chain Explorer.

## Live Playground

-   Universal Counter (Beginner)
-   Universal Counter (Dynamic / Pro)

REACT PLAYGROUND

Copy playground link

Copy code

LIVE APP PREVIEW

REACT PLAYGROUND

Copy playground link

Copy code

LIVE APP PREVIEW

## Source Code

## What we Achieved

With Universal Counter, you can now:

-   Identify callers natively from _any_ chain.
-   Build logic that adapts to the user’s origin chain.
-   Simplify the developer experience for multi-chain apps.
-   Eliminate reliance on third-party tooling or oracles.

This makes your Counter smart contract **truly universal, all in just a few lines of Solidity**.

## What's Next?

The next tutorial introduces **Universal ERC-20** tokens. Your tokens that can be minted by users of any chain.

* * *

In the next tutorial, you’ll learn how to:

1.  Deploy `ERC-20` contract.
2.  Introduce `mint()` functionality accessible to any user.
3.  Mint from any chain.

> All of these features will be natively supported in the contract with no requirement of third-party oracles, interop providers or packages. **This is only possible on Push Chain.**
