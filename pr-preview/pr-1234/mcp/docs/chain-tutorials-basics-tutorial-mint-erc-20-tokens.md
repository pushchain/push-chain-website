---
title: "Mint Universal ERC-20 Tokens"
url: "https://pushchain.github.io/docs/chain/tutorials/basics/tutorial-mint-erc-20-tokens/"
section: "tutorials"
lastUpdated: "2026-09-02T09:34:10Z"
description: "Mint Universal ERC-20 Tokens | Tutorials | Push Chain Docs"
---

# Mint Universal ERC-20 Tokens

10 mins

In this tutorial, you'll create, deploy, and interact with a simple ERC-20 token on Push Chain. The main difference is that this ERC-20 token is a universal token that can be minted by anyone on any chain.

By the end of this tutorial you’ll be able to:

-   ✅ Build a universal ERC-20 token, we will call it **$UNICORN**.
-   ✅ Have users from any chain connect and interact with it.

## Write the Contract

We will start with taking the ERC-20 contract from OpenZeppelin. The only change we will make is removing the restriction of `onlyOwner` modifier in the functionality of minting new tokens.

Universal ERC-20 Contract

ERC20.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-erc-20-mint/contracts/src/ERC20.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
```

## Understanding the Contract

This contract is a simple ERC-20 token:

-   We are minting 1,000,000 tokens with 18 decimals and giving it to the deployer of the contract.
-   We have removed `onlyOwner` from `mint()` function in order to enable anyone to mint freely from this contract.

## Interact with Universal ERC-20 Token

The Universal ERC-20 contract is deployed on Push Chain Testnet. This app lets any user — whether on Ethereum, Solana, or Push Chain — mint `$UNICORN` tokens directly from the frontend.

> **Demo Token ERC-20 Contract Address:** [0x0165878A594ca255338adfa4d48449f69242Eb8F](https://donut.push.network/address/0x0165878A594ca255338adfa4d48449f69242Eb8F?tab=contract)

**Steps to interact:**

1.  Connect your wallet (Ethereum, Solana, or Push Chain).
2.  Click the **Mint Token** button — this calls the ERC-20’s `mint()` function through Push Universal Transactions.
3.  Wait for the transaction to confirm.
4.  Your `$UNICORN` balance will update in the UI automatically.
5.  (Optional) Click **View in Explorer** to inspect the transaction on Push Chain Explorer.

* * *

> 💡 **Tip: Why this matters**  
> This is the simplest form of a **Universal Token**.  
> Without bridges or wrapped assets, users on _any chain_ can mint and hold the same ERC-20 natively on Push Chain.

## Live Playground

REACT PLAYGROUND

Copy playground link

Copy code

LIVE APP PREVIEW

## Source Code

## What we Achieved

In this tutorial, we built the simplest possible ERC-20-style token interaction.

-   We wrote and deployed a minimal ERC-20 contract with an open mint() function.
-   We minted tokens and confirmed balances via the frontend.

With just these two functions, you now have the foundation of a token system.

## What's Next?

Up until now, we’ve been sending one transaction at a time.

In real-world apps, users often need to perform several actions together (for example: approve → transfer, or multiple contract calls in a single flow).

* * *

In the next tutorial, we’ll explore batching multiple transactions as one universal transaction:

1.  How to combine several actions into a single transaction.
2.  Why batching improves user experience (fewer wallet popups, less friction).
3.  Practical code examples of executing multiple calls in sequence or atomically.

This will help you take the step from simple token interactions to more powerful app logic on Push Chain. 🚀
