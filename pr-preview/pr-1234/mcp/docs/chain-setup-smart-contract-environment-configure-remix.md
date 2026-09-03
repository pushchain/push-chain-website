---
title: "Remix IDE"
url: "https://pushchain.github.io/docs/chain/setup/smart-contract-environment/configure-remix/"
section: "setup"
lastUpdated: "2026-09-03T23:40:31Z"
description: "Remix IDE | Smart Contract Environment | Setup | Push Chain Docs"
---

# Remix IDE

Remix is a browser-based Solidity IDE that lets you write, compile, test and deploy smart contracts directly in your browser, no local setup required.

Let's use Remix to compile, deploy, and test smart contracts on Push Chain.

## Deploy Smart Contracts with Remix

### 1\. Add Push Chain to Your Wallet

> If you haven’t yet, follow [Wallet Setup](/push-chain-website/pr-preview/pr-1234/docs/chain/setup/tooling/wallet-setup/) to add Push Chain as a custom network in your wallet.

-   🍩 Donut Testnet
-   Mainnet - Coming Soon 🚀

| Field | Value |
| --- | --- |
| **Network Name** | `Push Chain Donut Testnet` |
| **RPC URL** | `https://evm.donut.rpc.push.org/` |
| **Chain ID** | `42101` |
| **Currency Symbol** | `PC` |
| **Block Explorer URL** | `https://donut.push.network` |

##### Coming Soon!

Push Chain Mainnet is currently in development. Stay tuned for updates!

-   Follow us on [X](https://x.com/pushchain) for announcements
-   Join our [Discord](https://discord.com/invite/pushchain) to be part of the community

### 2\. Launch Remix

Open [Remix IDE](https://remix.ethereum.org) or use the embedded IDE below.

Universal Counter Contract

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
}
```

  
  

### 3\. Configure “Deploy & Run Transactions”

1.  Click the **Deploy & Run Transactions** plugin in the left sidebar
2.  Under **Environment**, choose **Injected Provider - Web3**
3.  Approve the connection in your wallet, making sure it’s set to **Push Chain Donut Testnet (42101)**

  
  

### 4\. Compile Your Contract

1.  Open the **Solidity Compiler** plugin
2.  Select compiler version **0.8.22** (or match your `pragma`)
3.  Click **Compile** next to your contract file

  
  

### 5\. Deploy Your Contract

1.  Return to **Deploy & Run Transactions**
2.  Select your contract from the **Contract** dropdown
3.  Click **Deploy**
4.  Confirm the transaction in your wallet

  
  

## Next Steps

-   Deploy from the console with [Foundry](/push-chain-website/pr-preview/pr-1234/docs/chain/setup/smart-contract-environment/configure-foundry/)
-   Script deployments with [Hardhat](/push-chain-website/pr-preview/pr-1234/docs/chain/setup/smart-contract-environment/configure-hardhat/)
-   Call your contract from code via the [Push Chain SDK](/push-chain-website/pr-preview/pr-1234/docs/chain/build/)
