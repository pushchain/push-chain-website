---
slug: rwa-scale-across-multiple-chains
title: 'What Happens When RWAs Scale Across Multiple Chains?'
authors: [push]
image: './cover-image.webp'
description: "Learn how RWA apps can become universally accessible to any user on any chain using Push Chain's Universal Execution Layer."
text: "Learn how RWA apps can become universally accessible to any user on any chain using Push Chain's Universal Execution Layer."
tags: [Key Features, Product]
twitterId: "2077756092994695420"
---

![Cover Image of What Happens When RWAs Scale Across Multiple Chains](./cover-image.webp)

<!--truncate-->

# What Happens When RWAs Scale Across Multiple Chains?

Consider you’re building a tokenized treasury fund.

Let's call it YieldVault.

YieldVault launches on Ethereum. It tokenizes short-duration U.S. Treasuries, issues yield-bearing tokens, and reaches $200M in AUM within six months. (Bravo!!!)

Then the requests start coming in.
* A DeFi lending protocol on Arbitrum wants YieldVault tokens as collateral.
* A payments company on Solana wants to integrate them into stablecoin yield strategies.
* An institutional desk running on Robinhood needs them for cross-border settlement.

This sure sounds like the road to PMF, right?

But do we (as an industry) have the right infra to fulfil all of the above requests? Without practically rewriting and re-deploying your product from the ground up?

YieldVault now has a choice to make: do you stay on one chain and limit your addressable market, or do you go multi-chain and inherit a coordination problem that gets exponentially harder with every deployment?

Let's assume YieldVault deploys on four different chains. Each deployment gets its own liquidity pool, which needs to be bootstrapped because the $200 AUM liquidity was localised to a single chain. 

This is where the liquidity fragmentation problem starts to kick in.
- Liquidity coordination
- Slippage issues
- Price discrepancies in assets now listed across different chains

A fund manager running a $500M allocation across tokenized treasuries cannot tolerate a world where the same instrument prices differently depending on which chain they're looking at. That's not a market. That's four separate markets we say are one.

## Every deployment is a separate product.

Four chains means four codebases, four audits, four oracle setups, four upgrade paths. When the yield rate updates or redemption logic changes, it has to land on all four. 
This is where Push Chain does it differently.

Push Chain is a universal Layer 1 blockchain designed from the ground up to solve the exact problem of liquidity fragmentation and siloed execution across all chains, both EVM and non-EVM.

YieldVault deploys once, on Push Chain and instantly becomes universally accessible to all EVM and Non-EVM chains like Solana.

A wallet on Solana, Arbitrum, or Ethereum interacts with that single deployment directly from their own wallet, paying gas in their own token, in one signature. No wrapping, no bridging, no second deployment.

And the contract doesn't see a bridge or a relayer as the sender. Push Chain maps every external wallet to a persistent account on Push Chain, so the contract sees a stable address that traces back to the origin wallet controlled by the user.

## Does YieldVault need to forgo its $200M Ethereum Liquidity after porting to Push Chain?

No. Not at all.

This is where most of you get it wrong. Migrating to the Push Universal Chain does not mean that you need to wind up your current deployments and liquidity strength. Your app or in this case YieldVault can choose to exist on Ethereum with all of its liquidity + coexist on Push Chain with a new universal liquidity pool which can now be accessed by users of Ethereum, Arbitrum, Robinhood, Base and even Non-Evm chains like Solana.

If you’re curious to know more about universal execution and a bridgeless cross-chain usage [experience universal apps](https://push.org/ecosystem/) and [read more about Push Chain](https://push.org/knowledge/) here.

Dive straight into the [docs](https://push.org/docs/) to know more about a single-deployment universal setup.
