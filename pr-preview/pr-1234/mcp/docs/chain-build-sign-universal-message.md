---
title: "Sign Universal Message"
url: "https://pushchain.github.io/docs/chain/build/sign-universal-message/"
section: "build"
lastUpdated: "2026-09-03T23:40:31Z"
description: "Sign Message | Build | Push Chain Docs"
---

# Sign Universal Message

## Overview

Sign arbitrary data with your universal signer, across EVM, Solana, or any supported chain.

## Sign Universal Message

**_`pushChainClient.universal.signMessage(message): Promise<string>`_**

```typescript
// Create message data
const message = new TextEncoder().encode('Hello, Push Chain!')

// Sign the message
const signature = await pushChainClient.universal.signMessage(message)
```

Returns \`signedMessage\` <string>

```typescript
// Signed Message
'0xf10cabddd923cf05578dd253c0642009e7651286171a17b3d40f270f42e97aff56f8941ff9989333c23edb82ae1fad11b1e82b939b9e74a96ae6e3db9ae63e0b1c'
```

Live Playground: Get back Signed Message

VIRTUAL NODE IDE

Copy playground link

Copy code

## Sign Typed Data

**_`pushChainClient.universal.signTypedData({typedData}): Promise<string>`_**

The `signTypedData` function signs structured data following the EIP-712 standard. This function is only supported when connected to an **EVM compatible chain**.

```typescript
// Sign the message
const signature = await pushChainClient.universal.signTypedData({<TYPED_DATA>})
```

Returns \`signedTypedData\` <string>

```typescript
// Signed Message
'0x9356ffe552cf0bdaa624c5121b1da0598a65b6bba357ba33868f92c9dedd490e1b9757b64af7dd16d5797e0e151fe731858c49defcc04894f53a4ab10429499f1c'
```

Live Playground: Get back Signed Typed Data

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Query on-chain data with our [Utility Functions](/push-chain-website/pr-preview/pr-1234/docs/chain/build/utility-functions/)
-   Read contract state using the [Blockchain State Reader](/push-chain-website/pr-preview/pr-1234/docs/chain/build/reading-blockchain-state/)
-   Build rich UIs around your signer using the [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/)
