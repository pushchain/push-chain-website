# Tutorial: Simple Counter

Source: https://push.org/docs/chain/tutorials/basics/tutorial-simple-counter/

## Overview

Deploy and interact with a simple counter contract on Push Chain from any wallet.

## Write the Contract

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
