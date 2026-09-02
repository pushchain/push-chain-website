---
title: "Batch Transactions (Multicall)"
url: "https://pushchain.github.io/docs/chain/tutorials/power-features/tutorial-batch-transactions/"
section: "tutorials"
lastUpdated: "2026-09-02T13:01:57Z"
description: "Batch Transactions | Tutorials | Push Chain Docs"
---

# Batch Transactions (Multicall)

8 mins

In this tutorial, you’ll learn how to **execute multiple smart contract calls in a single transaction** on Push Chain, also known as **Multicall** or **Batch Transactions**.

This is one of Push Chain’s most powerful features, letting you do multiple actions such as approvals, transfers, or any contract interactions in a single transaction.

By the end, you’ll be able to:

-   ✅ Bundle multiple contract calls into one universal transaction.
-   ✅ Execute them atomically on Push Chain (all succeed or none do).
-   ✅ Reuse the same approach for your own app logic.

## Understanding Multicall

In traditional dApps, every interaction requires its own transaction — users approve, then transfer, then call another contract.

With Push Chain’s **Universal Execution Account (UEA)** model, you can include an array of calls in a single `sendTransaction()`.

The SDK automatically encodes and executes them in sequence, ensuring atomicity.

**Requirements**: Batch transactions run from **external origin chains** and execute atomically on Push Chain.

## Contracts Used

We’ll reuse two contracts from earlier tutorials and interact with **both** from an external origin chain in a single universal transaction:

-   `Counter.sol` from [Simple Counter Tutorial](/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/basics/tutorial-simple-counter/) → to increment the counter.
-   `ERC20.sol` from [Mint Universal ERC-20 Tutorial](/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/basics/tutorial-mint-erc-20-tokens/) → to mint $UNICORN token.

-   Basic Counter
-   Universal ERC-20

Counter Contract

Counter.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/simple-counter/contracts/src/Counter.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract Counter {
    uint256 public countPC;
    event CountIncremented(uint256 indexed countPC, address indexed caller);

    function increment() public {
        countPC += 1;
        emit CountIncremented(countPC, msg.sender);
    }

    function reset() public {
        countPC = 0;
    }
}
```

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

Prefer to deploy your own?

Follow:  

-   [Build a Counter App](/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/basics/tutorial-simple-counter/)
-   [Mint Universal ERC-20 Token](/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/basics/tutorial-mint-erc-20-tokens/)

Then replace the example addresses in this tutorial with your deployments.

## Build the Multicall Payload

Multicall requirements

-   **Origin-only:** Batch transactions are supported **only from external origin chains** (not native Push).
-   **Atomicity:** If any call fails, the **entire batch reverts**.
-   For multicall, the `to` should always be zero address (`0x0000000000000000000000000000000000000000`). The SDK will `console.warn` if you pass any other address. This will become mandatory in a future release.

```ts
// rest of the code...

// Counter ABI on Push Chain (used in tests) with an increment function
const CounterABI = [
  {
    inputs: [],
    name: 'increment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'countPC',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

// Counter deployed on Push Chain Testnet
const counterAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

// Create function call for Counter.increment()
const incrementData = PushChain.utils.helpers.encodeTxData({
  abi: CounterABI,
  functionName: 'increment',
});

// ERC20 ABI on Push Chain (used in tests) with a mint function
const ERC20ABI = [
  {
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'account', type: 'address' },
    ],
    name: 'balanceOf',
    outputs: [
      { name: '', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

// ERC20 deployed on Push Chain Testnet
const erc20Address = '0x0165878A594ca255338adfa4d48449f69242Eb8F';

// Create function call for ERC20.mint()
const mintData = PushChain.utils.helpers.encodeTxData({
  abi: ERC20ABI,
  functionName: 'mint',
  args: [
    pushChainClient.universal.account, // recipient is the connected UEA
    PushChain.utils.helpers.parseUnits('11', 18), // 11 PC in uPC (ie: 18 decimal places),
  ],
});

// rest of the code...

// Send batch transaction (multicall)
const batchTx = await pushChainClient.universal.sendTransaction({
  to: '0x0000000000000000000000000000000000000000',
  data: [
    {to: counterAddress, value: 0n, data: incrementData},
    {to: erc20Address, value: 0n, data: mintData},
  ]
});

// rest of the code...
```

## Understanding Multicall Payload

In this example, we are interacting with two different contracts on Push Chain Testnet from an external origin chain in a single transaction.

Let’s break down how this transaction executes step-by-step.

-   We first construct specific function calls for each contract using the `encodeTxData` helper function.
-   We pass an array of function calls to the `data` parameter which contains `to`, `value` and `data` instead of a single function call.
-   We pass the Universal Account address to the `to` parameter instead of a contract address.

Troubleshooting

• **Origin-only error**: Multicall works only when initiated from an external chain.  
• **Wrong `to`**: The batch `to` **must** be `pushChainClient.universal.account`.  
• **Bad ABI/data**: Ensure `encodeTxData({ abi, functionName, args })` matches the contract exactly.

## Interact with Multicall

Both the counter and universal ERC-20 contracts are deployed on Push Chain Testnet.

This app lets any user — whether on Ethereum, Solana, or any other external chain to increment the counter and mint $UNICORN tokens in one single transaction.

> **Counter Contract Address:** [0x5FbDB2315678afecb367f032d93F642f64180aa3](https://donut.push.network/address/0x5FbDB2315678afecb367f032d93F642f64180aa3?tab=contract)  
> **Demo Token ERC-20 Contract Address:** [0x0165878A594ca255338adfa4d48449f69242Eb8F](https://donut.push.network/address/0x0165878A594ca255338adfa4d48449f69242Eb8F?tab=contract)

**Steps to interact:**

1.  Connect your wallet (Ethereum, Solana, or other chains).
2.  Click the **Batch Transaction** button — this will atomically increment the counter and mint $UNICORN tokens.
3.  Wait for the transaction to confirm.
4.  Your `Counter` will be incremented and `$UNICORN` balance will update in the UI automatically.
5.  (Optional) Click **View in Explorer** to inspect the transaction on Push Chain Explorer.

**Note**: You can also batch approvals or swaps the same way.

* * *

> 💡 **Tip: Why this matters**  
> Multicall drastically simplifies UX. Instead of asking users to sign multiple actions, you combine them into one universal transaction—fewer popups, fewer confirmations, less friction.

## Live Playground

REACT PLAYGROUND

Copy playground link

Copy code

LIVE APP PREVIEW

## Source Code

## What we Achieved

In this tutorial, we built multiple transactions into a single transaction.

-   We wrote and deployed a counter contract and ERC-20 contract.
-   We incremented counter and minted tokens, then confirmed balances via the frontend.

All with a single universal transaction from other source chains.

This forms the foundation for multi-action DeFi, gaming, and on-chain automation flows.

## What’s Next?

Batch transactions are executed by a user’s **Universal Executor Account (UEA)** on Push Chain.

Every multicall you just executed was routed through a UEA derived from the user’s origin wallet.  
Understanding UEAs unlocks how Push Chain enables universal identity, permissions, and execution.

* * *

Check out the next tutorial to learn how to [derive Universal Executor Accounts](/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account/).
