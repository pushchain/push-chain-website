---
title: "Running Localnet"
url: "https://pushchain.github.io/docs/chain/node-and-system-tools/localnet/"
section: "node-and-system-tools"
lastUpdated: "2026-07-31T16:28:09+04:00"
description: "Localnet | Setup | Push Chain Docs"
---

# Running Localnet

Learn how to deploy localnet of Push Chain to understand or speed up the development of your app.

## Prerequisites

Ensure the following tools are installed:

-   [Go](https://go.dev/doc/install) (v1.23+)
-   [Foundry](https://book.getfoundry.sh/getting-started/installation)
-   Git

## Setup & Start Push Chain Localnet

### 1\. Clone and install Push Chain

```bash
git clone https://github.com/pushchain/push-chain-node
cd push-chain
make install
```

  
  

### 2\. Start the local testnet

```bash
make sh-testnet
```

This launches the local Push Chain node. You can now interact with it using the `pchaind` CLI.

## Deploy Protocol Contracts (UEA)

To enable universal execution from EVM/Solana chains, you need to deploy protocol contracts to your localnet.

### 1\. Clone and build smart account contracts

```bash
git clone https://github.com/pushchain/push-chain-core-contracts/
cd push-smart-account-v1
forge build
```

  
  

### 2\. Fund Your EVM Wallet on Localnet

Before deploying the contracts, your EVM wallet must have enough UPC tokens on the local Push Chain network.

To send funds, you need the **Bech32 format** of your EVM wallet address (since Push Chain uses Cosmos SDK-style addresses for transfers).

#### Step-by-step

1.  **Take your EVM address** (in hex, 0x-prefixed format) — for example:

```text
0x778d3206374f8ac265728e18e3fe2ae6b93e4ce4
```

2.  **Convert it to Bech32 format** using:

```bash
pchaind debug addr 778d3206374f8ac265728e18e3fe2ae6b93e4ce4
```

> 🔁 Replace `778d...ce4` with your **own EVM address** (without the `0x` prefix).

3.  You should get an output like this:

```text
Address (hex): 778D3206374F8AC265728E18E3FE2AE6B93E4CE4
Bech32 Acc: push1jtdw9kjc2yptl6yjyad69q73v2gcl29xfmmq5a
```

4.  **Use the Bech32 account address** (e.g. `push1jtdw9kjc2yptl6yjyad69q73v2gcl29xfmmq5a`) to receive funds:

```bash
pchaind tx bank send push1gjaw568e35hjc8udhat0xnsxxmkm2snrexxz20 push1jtdw9kjc2yptl6yjyad69q73v2gcl29xfmmq5a 100000000000000000000000upc --gas-prices 1000000000upc -y
```

> The `push1gjaw568e35hjc8udhat0xnsxxmkm2snrexxz20` address is pre-funded at genesis with **5 billion UPC**, so it’s safe to use as the sender.

  
  

### 3\. Deploy UEAFactory & Implementations

Once funded, run the deployment script:

```bash
forge script script/deployFactory.s.sol --rpc-url http://localhost:8545 --broadcast --private-key <YOUR_LOCAL_PRIVATE_KEY>
```

This sets up the UEAFactory and registers the EVM + SVM UEA implementations needed for universal execution.

## Add External Chain Configurations

Now configure Push Chain to interact with external chains.

### Solana Devnet

```bash
pchaind tx ue add-chain-config --chain-config "$(cat config/testnet-donut/solana_devnet_chain_config.json)" --from acc1 --gas-prices 100000000000upc -y
```

  
  

### Ethereum Sepolia

```bash
pchaind tx ue add-chain-config --chain-config "$(cat config/testnet-donut/eth_sepolia_chain_config.json)" --from acc1 --gas-prices 100000000000upc -y
```

> If you’ve deployed a custom `FeeGateway` contract, you can include its address in the chain config as well.

That’s it! You have successfully set up the Push Chain localnet and are ready to bring your imagination into reality.

## Next steps

-   Interact and make your app universal via [Core SDK](/push-chain-website/pr-preview/pr-1232/docs/chain/build/)
-   Abstract wallet and gas fee for your Users by implementing [UI Kit](/push-chain-website/pr-preview/pr-1232/docs/chain/ui-kit/)
