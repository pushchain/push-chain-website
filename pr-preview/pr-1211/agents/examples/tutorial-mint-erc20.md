# Tutorial: Mint ERC-20 Tokens from Any Chain

Source: https://push.org/docs/chain/tutorials/basics/tutorial-mint-erc20/

## Overview

Deploy an ERC-20 on Push Chain and mint tokens from Ethereum, Solana, or any supported chain.

## Write the Contract

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
