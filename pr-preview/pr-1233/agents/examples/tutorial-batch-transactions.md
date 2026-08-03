# Tutorial: Batch Transactions

Source: https://push.org/docs/chain/tutorials/power-features/tutorial-batch-transactions/

## Overview

Execute multiple contract calls atomically in a single universal transaction.

## Contracts Used

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

## Contracts Used

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

## Build the Multicall Payload

```typescript
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
// highlight-start
const batchTx = await pushChainClient.universal.sendTransaction({
  to: '0x0000000000000000000000000000000000000000',
  data: [
    {to: counterAddress, value: 0n, data: incrementData},
    {to: erc20Address, value: 0n, data: mintData},
  ]
});
// highlight-end

// rest of the code...
```

## SDK Methods Used

- `pushChainClient.universal.sendTransaction`
- `PushChain.utils.helpers.parseUnits`
