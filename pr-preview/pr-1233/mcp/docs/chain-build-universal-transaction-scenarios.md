---
title: "Universal Transaction Scenarios"
url: "https://pushchain.github.io/docs/chain/build/universal-transaction-scenarios/"
section: "build"
lastUpdated: "2026-08-11T06:03:12Z"
description: "Universal Transaction Scenarios | Build | Push Chain Docs"
---

# Universal Transaction Scenarios

## Overview

End-to-end playground examples for each universal transaction route. For API reference and argument details, see [Send Universal Transaction](/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-universal-transaction/).

## Route 1 → Execute on Push Chain

> **Route 1** originates from a wallet on an external chain or a native Push Chain wallet → routes through the UEA associated with your Push Account (when the origin is external) → executes the transaction on Push Chain. See [How Universal Routing Works](/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-universal-transaction/#how-routing-works) to learn more. Useful for funding your Push Account, bridging assets onto Push Chain, calling Push-side contracts from any source, etc.

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

Move a PC20 Token to Push Chain (wrapper burn)

Bring a [PC20](/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-universal-transaction/#moving-pc20-tokens) token home. The wrapper on Sepolia is burned and the canonical Push-native token is unlocked to your UEA. Unlike an ERC-20 bridge, **no approval transaction is sent** — the gateway's PC20Factory burns via `burnFrom`.

Getting the test token

These examples use `rain`, a test PC20 on Donut Testnet at `0x14693f665cE282A451ba9a86F2EC04B43F931145`. It has a public `mint(address,uint256)`, so you can mint yourself as much as you need on Push Chain.

The **Sepolia wrapper** (`0x81E05001A1f3fB574E18c1B0b2596163c68144ae`) is a different matter — only the gateway can mint it, and it only comes into existence when a PC20 is exported. So to run this example, first mint `rain` on Push and run the [Route 2 export](#route-2--execute-on-external-chain) with `TARGET` set to **your own address**. That delivers the wrapper to you; then come back here to burn it.

VIRTUAL NODE IDE

Copy playground link

Copy code

## Route 2 → Execute on External Chain

> **Route 2** originates from a wallet on an external chain or a Push Account (UEA, native Push Chain wallet, or smart contract on Push) → routes through your CEA on a target external chain → executes the transaction on that target chain. See [How Universal Routing Works](/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-universal-transaction/#how-routing-works) to learn more. Useful for cross-chain transfers, calling external-chain contracts from a single account, atomic move-and-call workflows, etc.

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

Export a PC20 Token to an External Chain

Send a Push-native [PC20](/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-universal-transaction/#moving-pc20-tokens) outward. The canonical token is approved and locked into VaultPC20, and the wrapper is minted on the destination chain. If the token has never been exported to that chain, the wrapper is **deployed as part of this transaction** and its address is predicted before anything is locked.

This is the example to run first — the test token's `mint(address,uint256)` is public on Push Chain, so you can self-serve the `rain` you need here. Set `TARGET` to your own address and this also delivers the Sepolia wrapper that the [Route 1](#route-1--execute-on-push-chain) and [Route 3](#route-3--execute-on-push-chain-from-cea) PC20 examples burn.

VIRTUAL NODE IDE

Copy playground link

Copy code

## Route 3 → Execute on Push Chain from CEA

> **Route 3** originates from a Push Account (UEA, native Push Chain wallet, or smart contract on Push) → bridges out through your CEA on an external chain → executes the transaction back on Push Chain. See [How Universal Routing Works](/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-universal-transaction/#how-routing-works) to learn more. Useful for rebalancing at the universal account level, executing DeFi strategies, settling external-chain holdings back to Push Chain, etc.

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

Bring a PC20 Back from your CEA

Settle a [PC20](/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-universal-transaction/#moving-pc20-tokens) wrapper held by your CEA on an external chain. The CEA burns its wrapper balance and the canonical Push-native token is unlocked to your UEA.

As with [Route 1](#route-1--execute-on-push-chain), you need the Sepolia wrapper before you can burn it — run the Route 2 export to your own address first.

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Sequence multiple transactions with [Send Multichain Transactions](/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-multichain-transactions/)
-   Trigger cross-chain execution from contracts with [Contract Initiated Multichain Execution](/push-chain-website/pr-preview/pr-1233/docs/chain/build/contract-initiated-multichain-execution/)
-   Track and poll transaction state with [Track Universal Transaction](/push-chain-website/pr-preview/pr-1233/docs/chain/build/track-universal-transaction/)
-   Sign arbitrary data with [Sign Universal Message](/push-chain-website/pr-preview/pr-1233/docs/chain/build/sign-universal-message/)
