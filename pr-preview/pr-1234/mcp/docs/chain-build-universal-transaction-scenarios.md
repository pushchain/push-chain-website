---
title: "Universal Transaction Scenarios"
url: "https://pushchain.github.io/docs/chain/build/universal-transaction-scenarios/"
section: "build"
lastUpdated: "2026-08-19T11:27:12Z"
description: "Universal Transaction Scenarios | Build | Push Chain Docs"
---

# Universal Transaction Scenarios

## Overview

End-to-end playground examples for each universal transaction route. For API reference and argument details, see [Send Universal Transaction](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/).

## Route 1 → Execute on Push Chain

> **Route 1** originates from a wallet on an external chain or a native Push Chain wallet → routes through the UEA associated with your Push Account (when the origin is external) → executes the transaction on Push Chain. See [How Universal Routing Works](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/#how-routing-works) to learn more. Useful for funding your Push Account, bridging assets onto Push Chain, calling Push-side contracts from any source, etc.

Interact with Smart Contract

VIRTUAL NODE IDE

Copy playground link

Copy code

Move Native ETH to Push Chain (lands as pETH)

Bridge native Sepolia ETH into your UEA on Push Chain. It arrives as `pETH` (the Push Chain wrapper for ETH from Ethereum). Only the source-chain UOA needs funding.

VIRTUAL NODE IDE

Copy playground link

Copy code

Move ERC-20 (USDT) to Push Chain (lands as USDT.eth)

Bridge USDT from Sepolia into your UEA on Push Chain. It arrives as `USDT.eth` (the Push-side PRC-20 mirror; only native assets use the `p` prefix, ERC-20s keep their symbol plus a chain suffix like `.eth`, `.bsc`, `.sol`).

VIRTUAL NODE IDE

Copy playground link

Copy code

Move ERC-20 (USDT) + Call Contract in One Tx

Bridge USDT into Push Chain AND atomically call a contract in the same transaction. The funds land on the UEA, then the UEA executes your payload — all from one user signature.

VIRTUAL NODE IDE

Copy playground link

Copy code

Batch Transactions (Multicall)

Run two `increment()` calls on the same Push Chain contract atomically, from a single Sepolia signature. The inline `progressHook` lets you watch the full lifecycle (gas estimate -> UEA resolution -> fee-lock -> broadcast -> confirmation) without a separate tracking example.

VIRTUAL NODE IDE

Copy playground link

Copy code

## Route 2 → Execute on External Chain

> **Route 2** originates from a wallet on an external chain or a Push Account (UEA, native Push Chain wallet, or smart contract on Push) → routes through your CEA on a target external chain → executes the transaction on that target chain. See [How Universal Routing Works](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/#how-routing-works) to learn more. Useful for cross-chain transfers, calling external-chain contracts from a single account, atomic move-and-call workflows, etc.

Contract Call on External Chain

VIRTUAL NODE IDE

Copy playground link

Copy code

Funds Transfer (Native Value to External Chain)

VIRTUAL NODE IDE

Copy playground link

Copy code

Funds Transfer (Assets to External Chain)

VIRTUAL NODE IDE

Copy playground link

Copy code

Funds with Payload (Move Assets and Call Contract on External Chain)

VIRTUAL NODE IDE

Copy playground link

Copy code

Multicall (Batch Contract Calls on External Chain)

VIRTUAL NODE IDE

Copy playground link

Copy code

Contract Call on Solana from Ethereum Sepolia

VIRTUAL NODE IDE

Copy playground link

Copy code

## Route 3 → Execute on Push Chain from CEA

> **Route 3** originates from a Push Account (UEA, native Push Chain wallet, or smart contract on Push) → bridges out through your CEA on an external chain → executes the transaction back on Push Chain. See [How Universal Routing Works](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/#how-routing-works) to learn more. Useful for rebalancing at the universal account level, executing DeFi strategies, settling external-chain holdings back to Push Chain, etc.

Contract Call on Push Chain from BNB CEA

VIRTUAL NODE IDE

Copy playground link

Copy code

Bridge Native Back (Native Value from CEA to Push Chain)

VIRTUAL NODE IDE

Copy playground link

Copy code

Bridge Funds Back (Assets from CEA to Push Chain)

VIRTUAL NODE IDE

Copy playground link

Copy code

Funds with Payload (Bridge Assets and Call Contract on Push Chain)

VIRTUAL NODE IDE

Copy playground link

Copy code

Multicall (Batch Contract Calls on Push Chain from CEA)

VIRTUAL NODE IDE

Copy playground link

Copy code

Contract Call on Push Chain from a Solana CEA

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Sequence multiple transactions with [Send Multichain Transactions](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-multichain-transactions/)
-   Trigger cross-chain execution from contracts with [Contract Initiated Multichain Execution](/push-chain-website/pr-preview/pr-1234/docs/chain/build/contract-initiated-multichain-execution/)
-   Track and poll transaction state with [Track Universal Transaction](/push-chain-website/pr-preview/pr-1234/docs/chain/build/track-universal-transaction/)
-   Sign arbitrary data with [Sign Universal Message](/push-chain-website/pr-preview/pr-1234/docs/chain/build/sign-universal-message/)
