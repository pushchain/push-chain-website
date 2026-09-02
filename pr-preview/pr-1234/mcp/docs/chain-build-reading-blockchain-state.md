---
title: "Reading Blockchain State"
url: "https://pushchain.github.io/docs/chain/build/reading-blockchain-state/"
section: "build"
lastUpdated: "2026-09-02T14:21:40Z"
description: "Reading Blockchain State | Build | Push Chain Docs"
---

# Reading Blockchain State

## Overview

Push Chain is an EVM-compatible blockchain, so you can use familiar Ethereum tools to fetch on-chain data. This guide shows you how to:

-   Initialize HTTP client for one-off requests
-   Choose between default (pruned) and archive RPC endpoints
-   Fetch transactions and blocks
-   Initialize WebSocket client for real-time streaming
-   Subscribe to new blocks and filter for specific transactions

For full reference on each library, see:

-   [ethers.js documentation](https://docs.ethers.org/)
-   [viem documentation](https://viem.sh/)

## Initialize HTTP Client

-   Ethers (v6)
-   Viem

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

## Fetch a Transaction by Hash

-   Ethers (v6)
-   Viem

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

## Fetch Blocks

### Latest Block

-   Ethers (v6)
-   Viem

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

  
  

### Block by Hash

-   Ethers (v6)
-   Viem

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

## Websocket Client

### Initialize WebSocket Client

-   Ethers (v6)
-   Viem

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

  
  

### Subscribing to New Blocks

-   Ethers (v6)
-   Viem

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

  
  

### Filtering New Blocks for Specific Transactions

-   Ethers (v6)
-   Viem

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Dive into our [Contract Helpers](/push-chain-website/pr-preview/pr-1234/docs/chain/build/contract-helpers/) to detect and work with both cross-chain accounts and native Push Chain smart accounts.
-   Use our [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/) to abstract away wallet and chain logic and accelerate your front-end development.
