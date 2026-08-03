---
title: "Custom Universal Signer"
url: "https://pushchain.github.io/docs/chain/build/advanced/custom-universal-signer/"
section: "build"
lastUpdated: "2026-08-03T12:48:54Z"
description: "Custom Universal Signer | Build | Advanced | Push Chain Docs"
---

# Custom Universal Signer

## Overview

If you don't have a supported library signer or want to create a custom implementation, you can construct a Universal Signer manually.

## Custom Universal Signer

**_`PushChain.utils.signer.construct(account, {options}): Promise<UniversalSigner>`_**

```typescript
const account = {
  address: '<WALLET_ADDRESS>',
  chain: '<PushChain.CONSTANTS.CHAIN.CHAIN_TYPE'>
};

const customSignAndSendTransaction = async (unsignedTx) => {
  return new Uint8Array('<RESPONSE_TO_SIGN_AND_SEND_TRANSACTION>');
};

const customSignMessage = async (data) => {
  return new Uint8Array('<RESPONSE_TO_SIGN_MESSAGE>');
};

const customSignTypedData = async (typedDataArgs) => {
  return new Uint8Array('<RESPONSE_TO_SIGN_TYPED_DATA>');
};

const skeleton = PushChain.utils.signer.construct(account, {
  signAndSendTransaction: customSignAndSendTransaction,
  signMessage: customSignMessage,
  signTypedData: customSignTypedData
});

const universalSigner = await PushChain.utils.signer.toUniversal(skeleton);
```

These`Arguments`are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`account`_ | `UniversalAccount` | Account information containing address and chain |
| _`options`_ | `Object` | Object containing the signing function implementations |
| _`options.signAndSendTransaction`_ | `(unsignedTx: Uint8Array) => Promise<Uint8Array>` | Function to sign transaction data |
| _`options.signMessage`_ | `(data: Uint8Array) => Promise<Uint8Array>` | Function to sign raw message data |
| `options.signTypedData` | `(params) => Promise<Uint8Array>` | Function to sign typed data (EIP-712) |
| `options.signAuthorization` | `(params: SignAuthorizationParams) => Promise<SignedAuthorization>` | Optional. Function to sign an EIP-7702 authorization delegating the EOA's code to a contract |

Optional \`signAuthorization\` for EIP-7702 atomic batching

Provide `signAuthorization` when your wallet can sign raw EIP-7702 authorizations. With it, multicall batches sent from a native Push Chain EOA execute atomically in a single EIP-7702 (type-4) transaction, which means that all calls succeed or the whole transaction reverts. Without it, the SDK safely falls back to the sequential per-call execution (the transaction response's `atomic` field tells you which path ran).  
  

The SDK wires this automatically for ethers v6 `Wallet` (local key) and viem local accounts (e.g. `privateKeyToAccount`). JSON-RPC accounts like browser wallets like MetaMask cannot sign raw EIP-7702 authorizations, and neither can ethers v5 signers.

```typescript
// SignAuthorizationParams
{
  contractAddress: `0x${string}`; // contract to delegate the EOA's code to
  chainId?: number;               // defaults to the signer's chain
  nonce?: number;                 // omit to let the wallet fill it
  executor?: 'self';              // set when the signing EOA also submits the tx
}

// SignedAuthorization (viem-compatible)
{
  address: `0x${string}`;
  chainId: number;
  nonce: number;
  r: `0x${string}`;
  s: `0x${string}`;
  yParity: number;
  v?: bigint;
}
```

Returns \`UniversalSignerSkeleton\` <object>

```typescript
// UniversalSignerSkeleton object
{
  signerId: 'CustomGeneratedSigner',
  account: {
    chain: 'eip155:42101',
    address: '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5'
  },
  signMessage: [AsyncFunction: customSignMessage],
  signAndSendTransaction: [AsyncFunction: customSignAndSendTransaction],
  signTypedData: [AsyncFunction: customSignTypedData]
}
```

**Live Playground**: Creating Custom Universal Signer from Ethers.js 👇.

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   [Initialize Push Chain Client](/push-chain-website/pr-preview/pr-1233/docs/chain/build/initialize-push-chain-client/) with the Universal Signer
-   Abstract away creation of the Universal Signer using [UI Kit](/push-chain-website/pr-preview/pr-1233/docs/chain/ui-kit/)
