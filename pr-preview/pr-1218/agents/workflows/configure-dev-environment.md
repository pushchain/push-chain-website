# Configure Development Environment

## Purpose

Install the required Push Chain SDK packages and configure your tooling (Node.js scripts, Hardhat, Foundry, or Remix) for Push Chain development.

## When to Use

- Starting a new Push Chain project from scratch
- Adding Push Chain support to an existing EVM project
- Setting up CI/CD or backend services that interact with Push Chain
- Configuring a smart contract development environment

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Node.js | v18 or higher |
| Package manager | npm, yarn, or pnpm |
| Network access | Ability to reach `https://evm.donut.rpc.push.org/` |

## Package Overview

| Package | Purpose |
|---------|---------|
| `@pushchain/core` | Core SDK: initialize client, send transactions, sign messages |
| `@pushchain/ui-kit` | React UI components: wallet connect button, hooks |

## Steps

### Install Core SDK (Node.js / Backend / Scripts)

```bash
npm install @pushchain/core
# or
yarn add @pushchain/core
# or
pnpm add @pushchain/core
```

### Install UI Kit (React / Next.js Frontend)

```bash
npm install @pushchain/ui-kit
# or
yarn add @pushchain/ui-kit
# or
pnpm add @pushchain/ui-kit
```

### Basic Import and Verify

```typescript
import { PushChain } from '@pushchain/core';

// Verify constants are accessible
console.log(PushChain.CONSTANTS.PUSH_NETWORK.TESTNET);
// Output: 'TESTNET'
console.log(PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA);
// Output: 'eip155:11155111'
```

### Chain Configuration Reference

| Network | RPC URL | Chain ID |
|---------|---------|----------|
| Donut Testnet (EVM RPC) | `https://evm.donut.rpc.push.org/` | `42101` |
| Push Chain Localnet | `http://localhost:8545` | `9001` |

### Configure Hardhat

1. **Install Hardhat dependencies**
   ```bash
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
   ```

2. **Add Push Chain network to `hardhat.config.ts`**
   ```typescript
   import { HardhatUserConfig } from 'hardhat/config';
   import '@nomicfoundation/hardhat-toolbox';

   const config: HardhatUserConfig = {
     solidity: '0.8.24',
     networks: {
       pushTestnet: {
         url: 'https://evm.donut.rpc.push.org/',
         chainId: 42101,
         accounts: ['<YOUR_PRIVATE_KEY>'],
       },
     },
   };

   export default config;
   ```

3. **Deploy a contract to Push Chain Testnet**
   ```bash
   npx hardhat run scripts/deploy.ts --network pushTestnet
   ```

### Configure Foundry

1. **Install Push Chain core contracts (optional, for contract helpers)**
   ```bash
   forge install pushchain/push-chain-core-contracts
   ```

2. **Add remappings to `foundry.toml`**
   ```toml
   [profile.default]
   src = "src"
   out = "out"
   libs = ["lib"]
   remappings = ["push-chain-core-contracts/=lib/push-chain-core-contracts/"]

   [rpc_endpoints]
   pushTestnet = "https://evm.donut.rpc.push.org/"
   ```

3. **Deploy with Foundry**
   ```bash
   forge create --rpc-url https://evm.donut.rpc.push.org/ \
     --private-key <YOUR_PRIVATE_KEY> \
     src/MyContract.sol:MyContract
   ```

### Configure Remix

1. Open [Remix IDE](https://remix.ethereum.org/)
2. In the **Deploy & Run Transactions** panel, select **Injected Provider** or **Custom RPC**
3. Set Custom RPC URL to `https://evm.donut.rpc.push.org/`
4. Set Chain ID to `42101`
5. Deploy contracts normally — Push Chain is EVM-compatible

### TypeScript Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
```

## Expected Output

After installation, the following should work without errors:

```typescript
import { PushChain } from '@pushchain/core';

const networks = Object.keys(PushChain.CONSTANTS.PUSH_NETWORK);
console.log('Available networks:', networks);
// Output: ['MAINNET', 'TESTNET', 'TESTNET_DONUT', 'LOCALNET']

const chains = Object.keys(PushChain.CONSTANTS.CHAIN);
console.log('Supported chains count:', chains.length);
```

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `Cannot find module '@pushchain/core'` | Package not installed | Run `npm install @pushchain/core` |
| `RPC connection refused` | Wrong RPC URL or network down | Verify `https://evm.donut.rpc.push.org/` is reachable |
| `Cannot use import statement` | CommonJS environment | Add `"type": "module"` to `package.json` or use `.mjs` extension |
| `SyntaxError: Unexpected token 'export'` | Bundler not configured for ESM | Configure Vite/webpack to handle `@pushchain` packages |
| Chain ID mismatch in Hardhat | `chainId` not set in network config | Add `chainId: 42101` to the network entry |

## Agent Notes

- **Only `@pushchain/core` needed for non-UI work**: scripts, backends, and smart contract tests only need the core package.
- **`@pushchain/ui-kit` requires React 18+**: do not install in non-React environments.
- **Push Chain is EVM-compatible**: any tool that works with Ethereum (Hardhat, Foundry, Remix, ethers, viem) works with Push Chain by changing the RPC URL.
- **Testnet RPC**: `https://evm.donut.rpc.push.org/` is the stable Donut Testnet endpoint.

## MCP Mapping Candidates

- `install_core_package` — Install `@pushchain/core` via package manager
- `install_ui_kit_package` — Install `@pushchain/ui-kit` via package manager
- `configure_hardhat` — Add Push Chain network to hardhat config
- `configure_foundry` — Add RPC endpoints and remappings to foundry.toml
- `configure_remix` — Set up Remix with Push Chain custom RPC
