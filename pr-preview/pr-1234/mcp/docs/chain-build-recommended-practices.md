---
title: "Recommended Practices"
url: "https://pushchain.github.io/docs/chain/build/recommended-practices/"
section: "build"
lastUpdated: "2026-08-17T16:17:48Z"
description: "Recommended Practices | Build | Push Chain Docs"
---

# Recommended Practices

Push Chain enables developers to instantly **10x their userbase** with the same codebase. This is possible because Push Chain is purpose built for true interoperability between chains. Since Push Chain is the first true universal blockchain, it's recommended to read through the best practices for building on Push Chain.

## Recommended Practices for Developers on Push Chain

Push Chain is a fully EVM-compatible blockchain, meaning that developers can deploy their existing Ethereum smart contracts to Push Chain without any code changes. If your contract is already built for Ethereum (e.g., tested on Sepolia or Mainnet), you can deploy it directly to Push Chain using the same deployment scripts and tooling, including Hardhat, Foundry, or Remix.

This compatibility makes onboarding to Push Chain seamless and efficient for teams familiar with the Ethereum development ecosystem.

## Backend SDK: `@pushchain/core`

If you're building backend services, automation scripts, bots, or analytics pipelines, Push Chain offers an official SDK: [@pushchain/core](https://npmjs.com/package/@pushchain/core).

`@pushchain/core` is ideal for:

-   Server-side integrations
-   Backend logic for dApps
-   Indexing or monitoring tools that need to interact with the Push Chain network reliably and efficiently.

## UI Kit SDK: `@pushchain/ui-kit`

Push Chain also offers [@pushchain/ui-kit](https://npmjs.com/package/@pushchain/ui-kit) which is a collection of React components that completely abstract away the complexity of wallet connections and user authentication.

`@pushchain/ui-kit` is ideal for:

-   Building user interfaces for dApps
-   Abstracting away the complexity of wallet connections and user authentication (abstracted initialization of pushChainClient)
-   Multi-chain connections: Users can sign in and connect using wallets from other blockchains
-   Email login: For non-crypto native users, Push Wallet supports email login and onboarding, enabling apps to attract wider audiences

## Smart Contract Helper Functions

To understand where your users are coming from—whether directly on Push Chain or via another chain like Sepolia or Solana Devnet—Push Chain provides helper smart contracts. These helpers make it easy to track and categorize users/protocol usage depending on their origin chain. This is especially useful if you want to:

-   Tailor app behavior depending on user origin
-   Monitor multichain adoption
-   Incentivize or reward activity coming from specific chains

These helpers are already deployed and maintained, so you can easily integrate them into your logic with minimal effort.

## Speed run

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Create [Universal Signer](/push-chain-website/pr-preview/pr-1234/docs/chain/build/create-universal-signer/) from existing signer
-   Abstract away creation of the Universal Signer using [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/)
-   Revist [Important Concepts](/push-chain-website/pr-preview/pr-1234/docs/chain/important-concepts/)
