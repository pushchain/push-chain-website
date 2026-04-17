# Deploy Smart Contract to Push Chain

## Purpose

Compile and deploy a Solidity smart contract to Push Chain Donut Testnet using Foundry, Hardhat, or Remix. Push Chain is 100% EVM-compatible — any standard EVM toolchain works unchanged by pointing to the Push Chain RPC.

## When to Use

- Deploying a new contract to Push Chain for the first time
- Deploying contracts that use UGPC for cross-chain dispatch or UEAFactory for caller identification
- Deploying supporting contracts on external chains (e.g. a UG caller or a CEA target)

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Push Chain RPC | `https://evm.donut.rpc.push.org/` |
| Chain ID | `42101` |
| Block Explorer | `https://donut.push.network` |
| Private key | Funded with `$PC` (testnet) for gas |
| Tooling | Foundry or Hardhat (see `configure-dev-environment.md`) |

## Contract Addresses (Push Chain Donut Testnet)

| Contract | Address |
|---|---|
| UEA Factory | `0x00000000000000000000000000000000000000eA` |
| UniversalGatewayPC (UGPC) | `0x00000000000000000000000000000000000000C1` |
| Universal Executor Module | `0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7` |
| UniversalCore | `0x00000000000000000000000000000000000000C0` |

> Full address book: `agents/contract-addresses.json`

## Steps

### Foundry

1. **Install Push Chain contract interfaces (optional)**
   ```bash
   forge install pushchain/push-chain-core-contracts
   forge install pushchain/push-chain-gateway-contracts
   ```

2. **Add to `foundry.toml`**
   ```toml
   [profile.default]
   src     = "src"
   out     = "out"
   libs    = ["lib"]
   solc    = "0.8.26"
   remappings = [
     "push-chain-core-contracts/=lib/push-chain-core-contracts/",
     "push-chain-gateway-contracts/=lib/push-chain-gateway-contracts/",
   ]

   [rpc_endpoints]
   push_testnet_donut = "https://evm.donut.rpc.push.org/"
   ```

3. **Build**
   ```bash
   forge build
   ```

4. **Deploy (no constructor args)**
   ```bash
   forge create \
     --rpc-url https://evm.donut.rpc.push.org/ \
     --private-key $PRIVATE_KEY \
     src/MyContract.sol:MyContract
   ```

5. **Deploy (with constructor args)**
   ```bash
   forge create \
     --rpc-url https://evm.donut.rpc.push.org/ \
     --private-key $PRIVATE_KEY \
     src/MyContract.sol:MyContract \
     --constructor-args \
       0x00000000000000000000000000000000000000C1 \
       0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7
   ```

6. **Verify on explorer (optional)**
   ```bash
   forge verify-contract <DEPLOYED_ADDRESS> \
     src/MyContract.sol:MyContract \
     --chain push_testnet_donut \
     --etherscan-api-key $ETHERSCAN_API_KEY
   ```

> **Shortcut**: `agents/skills/push-contracts/scripts/deploy.sh` — ready-to-run Foundry deploy + explorer link. Run with `PRIVATE_KEY=0x... bash deploy.sh`.

### Hardhat

1. **Install dependencies**
   ```bash
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
   ```

2. **Add Push Chain network to `hardhat.config.ts`**
   ```ts
   import { HardhatUserConfig } from 'hardhat/config';
   import '@nomicfoundation/hardhat-toolbox';

   const config: HardhatUserConfig = {
     solidity: '0.8.26',
     networks: {
       pushDonut: {
         url: 'https://evm.donut.rpc.push.org/',
         chainId: 42101,
         accounts: [process.env.PRIVATE_KEY!],
       },
     },
   };

   export default config;
   ```

3. **Write deploy script (`scripts/deploy.ts`)**
   ```ts
   import { ethers } from 'hardhat';

   async function main() {
     const Factory = await ethers.getContractFactory('MyContract');
     const contract = await Factory.deploy();
     await contract.waitForDeployment();

     const address = await contract.getAddress();
     console.log('Deployed:', address);
     console.log('Explorer: https://donut.push.network/address/' + address);
   }

   main().catch(console.error);
   ```

4. **Deploy**
   ```bash
   npx hardhat run scripts/deploy.ts --network pushDonut
   ```

### Remix

1. Open [Remix IDE](https://remix.ethereum.org/)
2. In **Deploy & Run Transactions**, select **Custom External HTTP Provider**
3. Set RPC URL to `https://evm.donut.rpc.push.org/`
4. Set Chain ID to `42101`
5. Compile and deploy normally — Push Chain is fully EVM-compatible

## Expected Output

```
Deployer:  0xYourWalletAddress
Deployed:  0xDeployedContractAddress
Explorer:  https://donut.push.network/address/0xDeployedContractAddress
```

## Common Failures

| Error | Cause | Recovery |
|---|---|---|
| `insufficient funds` | Wallet has no `$PC` testnet tokens | Fund via Push Chain faucet |
| `nonce too low` | Pending tx in mempool | Wait for pending tx to clear or reset nonce |
| `chain ID mismatch` | Wrong chainId in config | Ensure `chainId: 42101` in Hardhat / `--chain-id 42101` in forge |
| `connection refused` | Wrong RPC URL | Verify `https://evm.donut.rpc.push.org/` is reachable |
| `compiler version not supported` | Solc version mismatch | Use `solc = "0.8.26"` (Foundry) or `solidity: "0.8.26"` (Hardhat) |
| Constructor args missing | Contract has constructor params | Use `--constructor-args` (Foundry) or pass args to `deploy()` (Hardhat) |

## Agent Notes

- **Push Chain is 100% EVM-compatible** — no custom plugins or modifications needed for Foundry or Hardhat.
- **Use proxy addresses for interaction** — UGPC, UEAFactory, and UniversalCore are proxy contracts; always interact with the proxy address, not the implementation.
- **Contract CEA is derived from the deployed address** — deploying the same bytecode twice at different addresses results in different CEAs on external chains.
- **Proxy pattern**: if using a proxy (UUPS, Transparent), CEA is bound to the proxy address — implementation upgrades do not change CEA.
- **Inbound fee** — fund the deployed Push Chain contract with `$PC` before it can receive inbound callbacks via `executeUniversalTx()`.

## MCP Mapping Candidates

- `compile_solidity_contract` — Run `forge build` or `npx hardhat compile`
- `run_forge_create` — Execute `forge create` with RPC URL and private key
- `run_hardhat_deploy` — Execute `npx hardhat run scripts/deploy.ts --network pushDonut`
- `verify_on_explorer` — Run `forge verify-contract` against Push Chain block explorer

## See Also

- [Configure Development Environment](configure-dev-environment.md)
- [Contract-Initiated Multichain Execution](contract-initiated-multichain-execution.md)
- [Use Contract Helpers (IUEAFactory)](use-contract-helpers.md)
- [Skill reference](../skills/push-contracts/SKILL.md)
- [Downloadable Foundry config](../../resources/push-contracts/foundry.toml)
- [Deploy script](../skills/push-contracts/scripts/deploy.sh)
