---
title: "Build a Counter App"
url: "https://pushchain.github.io/docs/chain/tutorials/basics/tutorial-simple-counter/"
section: "tutorials"
lastUpdated: "2026-09-03T09:30:20Z"
description: "Build a Counter App | Tutorials | Push Chain Docs"
---

# Build a Counter App

10 mins

In this tutorial, you’ll write, deploy, and interact with a Counter contract on Push Chain.

We will start with the most popular smart contract, i.e., `Counter.sol`, that all Solidity devs are familiar with. You would have done the following by the end:

-   ✅ Build and deploy Counter.sol
-   ✅ Interact with it from any chain
-   ✅ Understand the benefits of building Universal Apps
-   ✅ Use **Live Playground** to test and interact with Counter
-   🔜 Extend to a Universal Counter that tracks chain specific users

## Write the Contract

The process of building a simple smart contract like a counter is exactly similar to any other EVM Chain. You can use the same tools, such as, remix, foundry, hardhat, etc.

To get started, you can use the following contract:

Counter Contract

Counter.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/simple-counter/contracts/src/Counter.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract Counter {
    uint256 public countPC;
    event CountIncremented(uint256 indexed countPC, address indexed caller);

    function increment() public {
        countPC += 1;
        emit CountIncremented(countPC, msg.sender);
    }

    function reset() public {
        countPC = 0;
    }
}
```

## Understanding the Contract

This contract is a minimal counter:

-   The variable `count` stores the number of times the counter has been incremented.
-   The `increment()` function adds `+1` each time it is called.
-   The `getCount()` function lets anyone read the current counter value.

> **Key takeaway** On Push Chain, this contract works **universally**. A user on Ethereum, Solana, Push or any other chain itself can all call `increment()` — with no code changes.

## Interact with Counter

The easiest way to interact with the contract is through the Live Playground. The Counter is already deployed on Push Chain Testnet.

> **Counter Contract Address:** [0x5FbDB2315678afecb367f032d93F642f64180aa3](https://donut.push.network/address/0x5FbDB2315678afecb367f032d93F642f64180aa3?tab=contract)

**Steps to interact:**

-   Connect your wallet to the Live Playground.
-   You can connect a wallet from any supported chain (Push Chain, Ethereum, or Solana).
-   Click **Increment Counter** to increase the counter.
-   Click **Refresh Counter Values** to update the display.
-   After each transaction, use the transaction hash link to view details in Push Chain Explorer.

## Live Playground

REACT PLAYGROUND

Copy playground link

Copy code

LIVE APP PREVIEW

## Source Code

## What we Achieved

This was just a simple tutorial. What we did in this tutorial:

-   Deployed a counter contract on Push Chain.
-   Interacted seamlessly with the contract from any chain. (Ethereum, Solana or Push Chain)

## What's Next?

The next tutorial introduces the true power of **Universal Apps**.

* * *

In the next part, we modify this contract to implement the following:

1.  `increment()` called by users of **any chain** will now be attributed to them.
2.  The contract will natively detect which chain the `msg.sender` belongs to.
3.  The contract will maintain a `count` for each chain based on the caller’s origin.

> All of these features will be natively supported in the contract with no requirement of third-party oracles, interop providers or packages. **This is only possible on Push Chain.**
