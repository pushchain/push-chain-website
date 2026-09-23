---
title: "Recommended Practices"
url: "https://pushchain.github.io/docs/chain/build/recommended-practices/"
section: "build"
lastUpdated: "2026-09-23T15:00:20Z"
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

## Working with Users from Other Chains

On Push Chain, a user can call your contract directly or from another chain like Ethereum Sepolia or Solana Devnet. Either way the call arrives as a normal transaction, so by default your contract has no idea where the user came from. Push Chain provides helper contracts that resolve any caller to its origin: the chain they came from and their address on it. This lets you:

-   Tailor app behavior depending on user origin, such as showing chain-specific flows
-   Monitor multichain adoption of your app
-   Reward or incentivize activity coming from specific chains

The helpers are deployed and maintained by Push Chain, so it is one call from your contract. See [Contract Helpers](/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-helpers/) for the interface and examples.

## Working with Universal Read

[Read Universal State](/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read/) brings state from other blockchains, or from HTTPS endpoints, onto Push Chain with validator agreement. A typical use is a contract that needs a user's balance on Ethereum, a price from an API, or the state of a contract on Solana before it acts.

Use it when the result needs to land on-chain. When only your frontend or backend needs the data, a plain RPC call is cheaper and faster, and there is nothing to wait for.

A read is a paid, asynchronous request: it costs gas plus a protocol fee, and the result arrives after validators agree on it. So save the request references before waiting, and check the full result before using the value. The Read Universal State page covers the flow, failure handling and recovery.

## Moving Tokens Across Chains

Push Chain has two token standards:

-   **PRC-20** for tokens that come in from an external chain, and
-   **PC-20** for Push-native tokens that go out to one.

See [Token Types on Push Chain](/push-chain-website/pr-preview/pr-1244/docs/chain/important-concepts/#token-types-on-push-chain) for the distinction. Two habits will save you most of the debugging:

-   **Resolve decimals, never hardcode them.**  
    `parseUnits('1', 6)` is only correct for six-decimal tokens such as USDC and USDT. Both **getPRC20Address()** and **getPC20Address()** return the token's decimals.
    
    Resolve the token first, then pass what it reports. Hardcoding the wrong exponent does not throw; it silently moves the wrong amount.
    
-   **When naming a token's chain, name where it _is_.**  
    In `funds.token`, `chain` is the chain the tokens are sitting on right now, not the chain they are headed to. The destination is a separate field. Getting this backwards is rejected before anything is signed, so it fails loudly, but it is the single most common first mistake.
    

## Speed run

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Create [Universal Signer](/push-chain-website/pr-preview/pr-1244/docs/chain/build/create-universal-signer/) from existing signer
-   Abstract away creation of the Universal Signer using [UI Kit](/push-chain-website/pr-preview/pr-1244/docs/chain/ui-kit/)
-   Revist [Important Concepts](/push-chain-website/pr-preview/pr-1244/docs/chain/important-concepts/)
