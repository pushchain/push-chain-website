---
title: "Configure Hardhat"
url: "https://pushchain.github.io/docs/chain/setup/smart-contract-environment/configure-hardhat/"
section: "setup"
lastUpdated: "2026-09-02T03:01:34+04:00"
description: "Configure Hardhat | Smart Contract Environment | Tooling | Setup | Push Chain Docs"
---

# Configure Hardhat

Hardhat is another popular development environment for Ethereum software, designed for professionals that need a flexible and extensible tool. Code with vibes and dawn your builder hat with Hardhat.

Push Chain Specs

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

## Deploy Smart Contracts with Hardhat

### 1\. Install Hardhat

First, create a new directory for your project and initialize it:

```bash
mkdir myToken
cd myToken
npm init -y
```

Install Hardhat and required dependencies:

```bash
npm install --save-dev \
  hardhat \
  @nomicfoundation/hardhat-toolbox \
  @nomicfoundation/hardhat-verify \
  dotenv \
  @openzeppelin/contracts
```

This installs:

-   Hardhat core framework
-   Hardhat toolbox with common plugins
-   Hardhat verify for contract verification
-   dotenv for environment variable management
-   OpenZeppelin contracts library

  
  

### 2\. Create a New Project

Initialize a new Hardhat project:

```bash
npx hardhat init
```

Select "Create a JavaScript project" when prompted. This will create a basic project structure:

```text
myToken/
├── contracts/
├── scripts/
├── test/
├── hardhat.config.js
├── package.json
└── node_modules/
```

  
  

### 3\. Configure for Push Chain

Update your `hardhat.config.js` file to include Push Chain testnet configuration:

```javascript
require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-verify');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.22',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    push_testnet: {
      url: 'https://evm.donut.rpc.push.org/',
      chainId: 42101,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      // Blockscout doesn't require an actual API key, any non-empty string will work
      push_testnet: 'blockscout',
    },
    customChains: [
      {
        network: 'push_testnet',
        chainId: 42101,
        urls: {
          apiURL: 'https://donut.push.network/api/v2/verifyContract',
          browserURL: 'https://donut.push.network/',
        },
      },
    ],
  },
  sourcify: {
    // Disable sourcify for manual verification
    enabled: false,
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 40000,
  },
};
```

This configuration includes:

-   Solidity compiler version and optimization settings
-   Push Chain testnet RPC endpoints
-   Blockscout integration for contract verification
-   Project structure paths
-   Test configuration

  
  

### 4\. Write a Smart Contract

Create a file at `contracts/MyToken.sol` with this ERC20 token implementation:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MyToken
 * @dev A simple ERC20 token for demonstration on PUSH CHAIN
 */
contract MyToken is ERC20, Ownable {
  constructor() ERC20("MyToken", "MT") Ownable(msg.sender) {
    _mint(msg.sender, 1000 * 10**18);
  }

  /**
    * @dev Returns the number of decimals used to get its user representation.
    */
  function decimals() public view virtual override returns (uint8) {
    return 18;
  }

  /**
    * @dev Allows the owner to mint new tokens
    * @param to The address that will receive the minted tokens.
    * @param amount The amount of tokens to mint.
    */
  function mint(address to, uint256 amount) public onlyOwner {
    _mint(to, amount);
  }
}
```

  
  

### 5\. Compile the Contract

Compile your contract with:

```bash
npx hardhat compile
```

If successful, you should see output indicating compilation was successful:

```text
Compiling 12 files with 0.8.22
Solidity compilation finished successfully
```

  
  

### 6\. Deploy to Push Chain

#### 6.1. Set up your deployer account

Create a `.env` file in your project root to securely store your private key:

Then create a deployment script at `scripts/deploy.js`:

```javascript
const hre = require('hardhat');

async function main() {
  console.log('Deploying MyToken to PUSH Chain...');

  const myToken = await hre.ethers.deployContract('MyToken');
  await myToken.waitForDeployment();

  const address = await myToken.getAddress();
  console.log(`MyToken deployed to: ${address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

warning

Never commit your .env file to version control. Add .env to your .gitignore file to prevent accidental exposure of private keys. Never use accounts with significant funds for test deployments.

#### 6.2. Get testnet tokens

Ensure you have testnet tokens to pay for deployment gas fees. If you don't have any, visit the [Push Chain Faucet](https://faucet.push.org/) to request test tokens.

#### 6.3. Deploy your contract

Run the deployment script with:

```bash
npx hardhat run scripts/deploy.js --network push_testnet
```

This command:

-   Runs your deployment script
-   Connects to Push Chain testnet
-   Uses your private key from the .env file
-   Deploys your contract and waits for confirmation

**Deployment Results**

If successful, you'll see output similar to:

```text
Deploying MyToken to PUSH Chain...
MyToken deployed to: 0x0B86e252B035027028C0d4D3B136d80Da4C98Ec1
```

Save the contract address for verification and interaction.

  
  

### 7\. Verify the Contract

Verify your contract on the Push Chain BlockScout explorer:

```bash
npx hardhat verify --network push_testnet 0x0B86e252B035027028C0d4D3B136d80Da4C98Ec1
```

> **Note**: Replace `0x0B86e252B035027028C0d4D3B136d80Da4C98Ec1` with your actual deployed contract address.

> **Note**: If you encounter issues with verification, you can refer to [Blockscout's Hardhat verification plugin documentation](https://docs.blockscout.com/devs/verification/hardhat-verification-plugin) for troubleshooting.

When successful, you'll receive a confirmation message with a link to view your verified contract on the Push Chain explorer.

That's it! You have successfully deployed and verified your smart contract on Push Chain using Hardhat.

## Next Steps

-   Jump into building and interacting with your smart contract using the [Push Chain SDK](/push-chain-website/pr-preview/pr-1238/docs/chain/build/)
-   Check out [chain configuration](/push-chain-website/pr-preview/pr-1238/docs/chain/setup/chain-config/) or [available helper contracts](/push-chain-website/pr-preview/pr-1238/docs/chain/build/contract-helpers/)
-   Abstract everything on frontend with [UI Kit](/push-chain-website/pr-preview/pr-1238/docs/chain/ui-kit/integrate-push-universal-wallet/)
