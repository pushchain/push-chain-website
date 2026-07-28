---
title: "Important Concepts"
url: "https://pushchain.github.io/docs/chain/important-concepts/"
section: "chain"
lastUpdated: "2026-07-28T15:25:29+04:00"
description: "Important Concepts | Push Chain Docs"
---

# Important Concepts

Before integrating the SDK, here are the core ideas you need to know to build truly universal dApps on Push Chain.

> **Deep dives and conceptual guides** live in our [Knowledge Base](/push-chain-website/pr-preview/pr-1230/knowledge/).

## 100% EVM Compatibility

Push Chain is an EVM-compatible Universal Layer 1 blockchain that runs any Solidity contract as-is. Your existing Ethereum dApp will work without touching a single byte of on-chain code.

## Wallet Integration Across Chains

Push Chain introduces groundbreaking support for wallets from different Layer 1 blockchains, enabling them to transact directly on Push Chain.

Users can leverage their existing wallets, whether Ethereum-based (MetaMask), Solana-based (Phantom), or wallets from other chains, to execute transactions seamlessly on Push Chain. Under the hood, we:

-   Detect the source-chain wallet signature.
-   Map it to a Push Chain Universal Executor Account (UEA).
-   Route the transaction through our gateway onto Push Chain.

**Your users sign exactly as they do today;** Push Chain handles the cross-chain plumbing.

## Fee Abstraction and Cross-Chain Execution

Push Chain lets users execute contracts without holding $PC (Push Chain native token). Instead, users can initiate transactions from their source chains, such as Ethereum Sepolia or Solana Devnet, and pay gas fees in their native tokens like ETH or SOL.

When a user signs a transaction from a source chain such as Ethereum Sepolia or Solana Devnet, the orchestrator deploys a smart wallet (UEA) on Push Chain for that user, locks the required gas fees in their native tokens, and executes the contract on Push Chain using the signed payload.

**Your users interact exactly as they would on their home chain**, with no additional steps.

## Universal Gateway (UG) Contracts

Push Chain uses a set of contracts to enable cross-chain transactions. These contracts are deployed on source chains from where the transactions originate and are used to route transactions from source chains to Push Chain.

## Account Types on Push Chain

As an EVM-compatible Universal Layer 1 blockchain, Push Chain naturally supports standard Ethereum accounts:

-   **Externally Owned Accounts (EOAs)**  
    Standard private-key-controlled addresses (e.g. MetaMask wallets).
    
-   **Smart Contract Accounts (Smart Accounts)**  
    On-chain contracts that hold logic (e.g. multisigs, social recovery wallets).
    

> Additionally, Push Chain innovates by introducing:

-   **Universal Executor Accounts (UEAs)**  
    Proxy accounts that represent external chain wallets (users) on Push Chain and act as their execution layer for all on-chain activity.
    
    UEAs enable Push Chain to:
    
    -   Execute transactions on behalf of users without requiring native Push wallets.
    -   Abstract away chain-specific differences in signing and execution.
    -   Provide a consistent execution identity for users across all interactions on Push Chain.
    
    In simple terms, a UEA is the user’s execution account on Push Chain. They are always deterministic and are derived from UOAs.
    
-   **Universal Origin Accounts (UOAs)**  
    The original source-chain wallet in chain agnostic address format that is behind each UEA. UOAs let you attribute activity back to the user’s home chain and act as the **controller identity** of their corresponding UEA.
    
-   **Chain Executor Accounts (CEAs)**  
    Chain-specific executor accounts deployed on external chains (e.g. Ethereum, BNB, Solana) that act on behalf of a user’s Universal Executor Account (UEA). They can also represent Push native accounts (including smart contracts) when interacting with external chains.
    
    CEAs enable Push Chain to:
    
    -   Execute outbound transactions on external chains.
    -   Route responses and callbacks back to Push Chain (inbound flows).
    -   Maintain a consistent execution identity across chains.
    
    In simple terms, if a UEA represents a user on Push Chain, a CEA represents that same user on an external chain.
    

> **Mental model**  
> UOA = user identity, UEA = execution on Push Chain,  
> CEA = execution on external chains.

## Understanding Universal Account

The `UniversalAccount` is a chain-agnostic way of representing a wallet address, designed to work seamlessly across multiple blockchain ecosystems.

VIRTUAL NODE IDE

Copy playground link

Copy code

-   `address` follows each chain’s format (EVM checksummed, Solana base58).
-   `chain` is the identifier of the origin chain of an address (e.g. `PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA` resolves to `eip155:11155111` for Sepolia)

> `UniversalAccount` return a [chain agnostic address](#chain-agnostic-address-examples "Examples of chain agnostic address") format. It can be used to represent any address from any chain.

## Understanding Universal Signer

A `UniversalSigner` extends `UniversalAccount` with signing capabilities.

VIRTUAL NODE IDE

Copy playground link

Copy code

-   `signer` is the signer object from the library you are using (e.g. ethers, viem, solana-web3.js)

## Chain Agnostic Address Examples

| Chain | Network | CAIP-10 Identifier |
| --- | --- | --- |
| Ethereum | Mainnet (1) | `eip155:1:0x742d35Cc6370C742Fc60f8b67da6c68F091C42b5` |
| Ethereum | Sepolia Testnet (11155111) | `eip155:11155111:0x5FbDB2315678afecB367f032d93F642f64180aa3` |
| Solana | Mainnet-Beta (5eykt4...) | `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:9xQeWvGFvPEZZY3Yvj5V14xi4tYmEXjfSDrm5sVqTvcAg` |
| Solana | Devnet (EtWTRA...) | `solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1:7fCAbbLejF64HTZ39rjFBUXJEMYT9z7d6NM6ovaoyNaW` |
| Cosmos | cosmoshub-4 (cosmos1sk8...) | `cosmos:cosmoshub-4:cosmos1sk8uyz4u6zmxus3aurayrjyvfgtytvpnr685ur` |

> The addresses are inspired from [caip-10](https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-10.md "Link to caip-10 proposal") format.

## Universal Chain Namespace

Every external chain is represented as a particular constant on Push Chain. Mentioned below are some of the supported testnet and mainnet chain namespaces on Push Chain. Some namespaces are only available on testnet or mainnet.

| Chain | Namespace | Assigned Constant |
| --- | --- | --- |
| Push Testnet (Donut) | `eip155:42101` | `PUSH_TESTNET_DONUT` |
| Ethereum Sepolia | `eip155:11155111` | `ETHEREUM_SEPOLIA` |
| Solana Devnet | `solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1` | `SOLANA_DEVNET` |
| Push Mainnet | `To Be Announced` | `PUSH_MAINNET` |
| Ethereum Mainnet | `eip155:1` | `ETHEREUM_MAINNET` |
| Solana Mainnet | `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` | `SOLANA_MAINNET` |

> The namespaces are inspired from [caip-10](https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-10.md "Link to caip-10 proposal") format.

## Next Steps

-   Setup your [Environment and Tooling](/push-chain-website/pr-preview/pr-1230/docs/chain/setup/)
-   See SDK reference in [Build](/push-chain-website/pr-preview/pr-1230/docs/chain/build/)
-   Try your first transaction in [Send Transaction](/push-chain-website/pr-preview/pr-1230/docs/chain/build/send-universal-transaction/)
-   Integrate and abstract implementation and UI via [UI Kit](/push-chain-website/pr-preview/pr-1230/docs/chain/ui-kit/)
-   Follow a full walkthrough in [Tutorials](/push-chain-website/pr-preview/pr-1230/docs/chain/tutorials/)
-   Dive deeper in the [Knowledge Base](https://push.org/knowledge/)
