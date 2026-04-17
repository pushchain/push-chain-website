---
id: push-contracts
intent: Write Solidity contracts on Push Chain — identify cross-chain callers, dispatch outbound txs via UGPC, receive inbound callbacks
package: 'solidity (EVM-compatible — Hardhat / Foundry / Remix)'
entry: 'IUniversalGatewayPC.sendUniversalTxOutbound'
resources: 'https://push.org/agents/resources/push-contracts/index.json'
references:
  - references/contract-interfaces.md
scripts:
  - scripts/deploy.sh
---

# Skill: Smart Contracts on Push Chain

**Intent**: Write Solidity contracts that run on Push Chain, identify cross-chain callers, dispatch outbound transactions to external chains, and receive inbound callbacks.
**Tooling**: Standard EVM (Hardhat / Foundry / Remix) — Push Chain is fully EVM-compatible. No special SDK needed inside Solidity.

## Push Chain — Network Config

|                    | Value                             |
| ------------------ | --------------------------------- |
| **HTTP RPC**       | `https://evm.donut.rpc.push.org/` |
| **Chain ID**       | `42101`                           |
| **Block Explorer** | `https://donut.push.network`      |

Use these values in your tooling config:

```js
// hardhat.config.ts
networks: {
  pushDonut: {
    url: 'https://evm.donut.rpc.push.org/',
    chainId: 42101,
    accounts: [process.env.PRIVATE_KEY],
  },
}
```

```toml
# foundry.toml
[rpc_endpoints]
push_donut = "https://evm.donut.rpc.push.org/"
```

## Contract Addresses — Push Chain Donut Testnet

| Contract                      | Address                                      | Purpose                                                                                   |
| ----------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **UEA Factory**               | `0x00000000000000000000000000000000000000eA` | Derive/query Universal Executor Accounts                                                  |
| **UniversalGatewayPC (UGPC)** | `0x00000000000000000000000000000000000000C1` | Dispatch outbound cross-chain txs from your Push Chain contract                           |
| **Universal Executor Module** | `0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7` | Delivers inbound callbacks — only valid caller of `executeUniversalTx()`                  |
| **UniversalCore**             | `0x00000000000000000000000000000000000000C0` | On-chain oracle — read gas price, block height, observed timestamp for any external chain |

> Full address book: see https://push.org/agents/contract-addresses.json

## Universal Gateway (UG) — External Chain Addresses

Contracts deployed on external chains. **Users, scripts, and smart contracts** on external chains call UG to send transactions to Push Chain. The `@pushchain/core` SDK uses the correct UG address automatically based on the signer's origin chain.

When UG is called (from any source), the TSS network relays the call to Push Chain and creates/calls the sender's **UEA** — so on Push Chain, `msg.sender` of your contract = the caller's UEA address, not the original wallet or contract.

| Chain            | UG Address                                     |
| ---------------- | ---------------------------------------------- |
| Ethereum Sepolia | `0x05bD7a3D18324c1F7e216f7fBF2b15985aE5281A`   |
| Arbitrum Sepolia | `0x2cd870e0166Ba458dEC615168Fd659AacD795f34`   |
| Base Sepolia     | `0xFD4fef1F43aFEc8b5bcdEEc47f35a1431479aC16`   |
| BNB Testnet      | `0x44aFFC61983F4348DdddB886349eb992C061EaC0`   |
| Solana Devnet    | `CFVSincHYbETh2k7w6u1ENEkjbSLtveRCEBupKidw2VS` |

### Calling UG from an external chain (via SDK)

```ts
// Wallet is on Ethereum Sepolia — SDK routes through UG automatically
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider(
  'https://ethereum-sepolia-rpc.publicnode.com'
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const signer = await PushChain.utils.signer.toUniversal(wallet);
const client = await PushChain.initialize(signer);

// Routes through UG on Ethereum Sepolia → Push Chain target
const tx = await client.universal.sendTransaction({
  to: '0xYourPushChainContract',
  data: encodedCalldata,
});
const receipt = await tx.wait();
console.log('external tx hash:', receipt.externalTxHash);
```

### Calling UG directly (ethers.js, no SDK)

```ts
import { ethers } from 'ethers';

const UG = '0x05bD7a3D18324c1F7e216f7fBF2b15985aE5281A'; // Ethereum Sepolia
const provider = new ethers.JsonRpcProvider(
  'https://ethereum-sepolia-rpc.publicnode.com'
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

const ug = new ethers.Contract(
  UG,
  [
    'function sendUniversalTx(bytes recipient, bytes payload, address token, uint256 amount) external payable',
  ],
  wallet
);

await ug.sendUniversalTx(
  ethers.solidityPacked(['address'], ['0xYourPushChainContract']),
  encodedCalldata,
  ethers.ZeroAddress, // no token bridge
  0,
  { value: ethers.parseEther('0.001') } // covers relay fee
);
```

### Calling UG from an external chain smart contract (Solidity)

Any Solidity contract on a supported external chain can call the UG to trigger execution on Push Chain. The UG interface uses `sendUniversalTx` (same 4-param signature confirmed above).

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @notice Universal Gateway interface on external chains.
/// Same 4-param signature used by all supported UG deployments.
interface IUniversalGateway {
    function sendUniversalTx(
        bytes calldata recipient, // Push Chain target address — abi.encodePacked(addr)
        bytes calldata payload,   // ABI-encoded calldata to execute on Push Chain
        address token,            // token to bridge (address(0) = no bridge)
        uint256 amount            // amount to bridge (0 if token == address(0))
    ) external payable;
}

contract ExternalChainCaller {
    // UG address for the chain this contract is deployed on.
    // Ethereum Sepolia: 0x05bD7a3D18324c1F7e216f7fBF2b15985aE5281A
    // Arbitrum Sepolia: 0x2cd870e0166Ba458dEC615168Fd659AacD795f34
    // Base Sepolia:     0xFD4fef1F43aFEc8b5bcdEEc47f35a1431479aC16
    // BNB Testnet:      0x44aFFC61983F4348DdddB886349eb992C061EaC0
    address public immutable ug;

    constructor(address _ug) {
        ug = _ug;
    }

    /// @notice Trigger a call on a Push Chain contract from this external chain contract.
    /// @dev msg.value must cover the relay fee. The caller's UEA on Push Chain will be
    ///      msg.sender in the Push Chain contract — use IUEAFactory.getOriginForUEA() there
    ///      to recover the origin chain and wallet address.
    /// @param pushChainContract Target contract address on Push Chain.
    /// @param calldata_         ABI-encoded calldata to execute.
    function callPushChain(
        address pushChainContract,
        bytes calldata calldata_
    ) external payable {
        IUniversalGateway(ug).sendUniversalTx{value: msg.value}(
            abi.encodePacked(pushChainContract), // bytes-encoded Push Chain address
            calldata_,                           // calldata to run on Push Chain
            address(0),                          // no token bridge
            0                                    // no amount
        );
    }
}
```

> On Push Chain, `msg.sender` in your target contract = the **caller contract's UEA** (not this contract's address directly). Use `IUEAFactory(0x00000000000000000000000000000000000000eA).getOriginForUEA(msg.sender)` to identify the origin.

---

## 1 — IUEAFactory: Identify Cross-Chain Callers

### How External Chain Users Execute on Push Chain

When a user on Ethereum (or any supported chain) calls your Push Chain contract, they don't interact directly. The flow is:

```
User (Ethereum wallet)
  → signs tx on Ethereum
    → Universal Gateway (UG) on Ethereum Sepolia
      → TSS network relays to Push Chain
        → Universal Executor Account (UEA) deployed/called on Push Chain
          → your Push Chain contract  ←  msg.sender = UEA address
```

**Key UEA properties:**

- `msg.sender` in your contract = the **UEA address**, not the original wallet
- UEA is deterministic (CREATE2) from `(chainNamespace, chainId, walletAddress)` — same user always maps to same UEA
- Lazy-deployed on first use — no pre-deployment needed
- Each external wallet gets its own UEA on Push Chain, scoped to that wallet only

This is why `IUEAFactory.getOriginForUEA(msg.sender)` exists — to recover the real origin chain and wallet address from the UEA that called you.

**Two directions — don't confuse them:**

|                        | External → Push Chain (user-initiated)    | Push Chain → External (contract-initiated) |
| ---------------------- | ----------------------------------------- | ------------------------------------------ |
| **Initiator**          | External chain user (UOA)                 | Your Push Chain contract                   |
| **On-chain identity**  | User's **UEA** (smart account)            | Contract's **CEA**                         |
| **Your contract sees** | `msg.sender` = UEA address                | N/A — you dispatched the call              |
| **SDK required**       | Yes — `@pushchain/core` on client side    | No — pure Solidity                         |
| **Identify origin**    | `IUEAFactory.getOriginForUEA(msg.sender)` | N/A                                        |
| **Inbound handler**    | Not needed                                | `executeUniversalTx()` (optional)          |

---

Use `IUEAFactory` when your Push Chain contract needs to know whether `msg.sender` is a native Push Chain account or an external chain user represented by a UEA.

### Import (Foundry)

```bash
forge install pushchain/push-chain-core-contracts
# Add to foundry.toml: remappings = ["push-chain-core-contracts/=lib/push-chain-core-contracts/"]
```

```solidity
import "push-chain-core-contracts/src/Interfaces/IUEAFactory.sol";
```

### Or inline the interface directly

```solidity
pragma solidity ^0.8.0;

struct UniversalAccountId {
    string chainNamespace; // "eip155" for EVM, "solana" for Solana
    string chainId;        // e.g. "11155111" for Ethereum Sepolia
    bytes  owner;          // wallet address in bytes (hex-encoded; base58-decode for Solana)
}

interface IUEAFactory {
    /// Returns owner info and whether addr is a UEA (vs native Push Chain EOA)
    function getOriginForUEA(address addr)
        external view
        returns (UniversalAccountId memory account, bool isUEA);

    /// Returns the deterministic UEA address for an external wallet, and deployment status
    function getUEAForOrigin(UniversalAccountId memory _id)
        external view
        returns (address uea, bool isDeployed);
}
```

### On-chain usage

```solidity
address constant UEA_FACTORY = 0x00000000000000000000000000000000000000eA;

function onlyExternalUser() external {
    (UniversalAccountId memory account, bool isUEA) =
        IUEAFactory(UEA_FACTORY).getOriginForUEA(msg.sender);

    if (isUEA) {
        // msg.sender is a UEA — account.chainNamespace, account.chainId, account.owner
        // identify the origin chain wallet
    } else {
        // msg.sender is a native Push Chain EOA
    }
}

function getUEAAddress(string memory ns, string memory chainId, address wallet)
    external view returns (address uea, bool isDeployed)
{
    return IUEAFactory(UEA_FACTORY).getUEAForOrigin(
        UniversalAccountId({ chainNamespace: ns, chainId: chainId, owner: abi.encodePacked(wallet) })
    );
}
```

### Off-chain query (ethers.js)

```ts
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const factory = new ethers.Contract(
  '0x00000000000000000000000000000000000000eA',
  [
    'function getOriginForUEA(address) view returns (tuple(string,string,bytes), bool)',
    'function getUEAForOrigin(tuple(string,string,bytes)) view returns (address, bool)',
  ],
  provider
);

// Check origin of any address
const [account, isUEA] = await factory.getOriginForUEA('0xSomeAddress');

// Derive UEA for an Ethereum Sepolia wallet
const [uea, isDeployed] = await factory.getUEAForOrigin({
  chainNamespace: 'eip155',
  chainId: '11155111',
  owner: '0xYourWalletAddress',
});
```

> Note: `account.owner` is always returned as hex bytes. For Solana addresses, decode with `bs58.encode(ethers.getBytes(account.owner))`.

---

## 2 — UGPC: Dispatch Outbound Cross-Chain Txs

Call `UGPC.sendUniversalTxOutbound()` from a Push Chain contract to execute calldata on an external chain via your contract's CEA. No SDK required — pure Solidity.

### Contract CEA — Who executes on the external chain?

Every Push Chain smart contract has a deterministic **Chain Executor Account (CEA)** on each supported external chain, derived from the **contract's Push Chain address** (not any user wallet). This is different from user-initiated transactions where the CEA is derived from the user's wallet.

- `msg.sender` on the external chain = the **contract's CEA**
- CEA is lazily deployed on first use by the TSS network
- CEA is scoped to the contract — different deployments (even same bytecode) have different CEAs
- **Proxy pattern**: CEA is bound to the **proxy address**, not the implementation — upgrades do not change the CEA
- Gas fees: `msg.value` in the `sendUniversalTxOutbound()` call covers UGPC protocol fees + estimated external-chain gas; converted automatically to the external chain's native token
- Push-side **inbound execution** fees are paid in `$PC` — fund your Push contract before dispatching

> This is contract-initiated multichain execution, not user-initiated. No live user interaction is required at call time — any on-chain trigger (governance vote, automation, user action, scheduled job) can initiate the outbound dispatch.

### Interface

```solidity
struct UniversalOutboundTxRequest {
    bytes   recipient;       // target address on external chain (abi.encodePacked(addr))
    address token;           // PRC20 token to bridge (address(0) = no bridge, payload only)
    uint256 amount;          // amount of PRC20 to bridge (0 if token == address(0))
    uint256 gasLimit;        // 0 = UGPC auto-estimates (recommended)
    bytes   payload;         // ABI-encoded calldata to execute on external chain
    address revertRecipient; // receives bridged funds if external tx reverts
}

interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}
```

TX types inferred by UGPC:

- `token=0, payload` → `GAS_AND_PAYLOAD`
- `token≠0, no payload` → `FUNDS`
- `token≠0, payload` → `FUNDS_AND_PAYLOAD`
- `token=0, no payload` → reverts

### Dispatch pattern

```solidity
address constant UGPC = 0x00000000000000000000000000000000000000C1;

function dispatchToExternalChain(
    address targetOnExternalChain,
    bytes calldata calldata_
) external payable {
    // msg.value must cover UGPC protocol fee + gas cost estimate
    IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
        UniversalOutboundTxRequest({
            recipient:       abi.encodePacked(targetOnExternalChain),
            token:           address(0),
            amount:          0,
            gasLimit:        0,             // auto-estimate
            payload:         calldata_,
            revertRecipient: msg.sender
        })
    );
}
```

### Inbound callback (optional — receive response after external execution)

Implement `executeUniversalTx()` if you need the result delivered back. The `UNIVERSAL_EXECUTOR_MODULE` is the **only** valid caller.

```solidity
address constant EXECUTOR_MOD = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

mapping(bytes32 => bool) public executedTxIds;

function executeUniversalTx(
    string  calldata sourceChainNamespace, // e.g. "eip155:97"
    bytes   calldata ceaAddress,           // CEA address on source chain (bytes)
    bytes   calldata payload,              // ABI-encoded response data
    uint256          amount,               // bridged PRC20 amount received
    address          prc20,               // PRC20 token address on Push Chain
    bytes32          txId                 // unique ID for replay protection
) external payable {
    require(msg.sender == EXECUTOR_MOD, "Unauthorized");
    require(!executedTxIds[txId], "Replay");
    executedTxIds[txId] = true;

    // decode and apply your logic
    // (uint256 result) = abi.decode(payload, (uint256));
}
```

### Execution flow

```
Your contract → UGPC.sendUniversalTxOutbound()
  → TSS picks up outbound event
    → Contract's CEA executes payload on external chain
      [optional] → EXECUTOR_MOD calls executeUniversalTx() on your contract
```

### Minimal complete contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

struct UniversalOutboundTxRequest {
    bytes recipient; address token; uint256 amount;
    uint256 gasLimit; bytes payload; address revertRecipient;
}
interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

contract MyMultichainApp {
    address constant UGPC         = 0x00000000000000000000000000000000000000C1;
    address constant EXECUTOR_MOD = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

    mapping(bytes32 => bool) public executedTxIds;

    function dispatch(address target, bytes calldata payload_) external payable {
        IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
            UniversalOutboundTxRequest({
                recipient: abi.encodePacked(target), token: address(0), amount: 0,
                gasLimit: 0, payload: payload_, revertRecipient: msg.sender
            })
        );
    }

    function executeUniversalTx(
        string calldata, bytes calldata, bytes calldata payload,
        uint256, address, bytes32 txId
    ) external payable {
        require(msg.sender == EXECUTOR_MOD, "Unauthorized");
        require(!executedTxIds[txId], "Replay");
        executedTxIds[txId] = true;
        // handle response
    }
}
```

### Security Rules

These rules apply to every contract that implements `executeUniversalTx()`:

- **Validate the caller** — `require(msg.sender == UNIVERSAL_EXECUTOR_MODULE)`. Anyone can call `executeUniversalTx()` with fabricated data if this check is missing.
- **Replay protection** — maintain `mapping(bytes32 => bool) executedTxIds` and revert on `executedTxIds[txId]`. Without this, the same inbound result could be applied multiple times.
- **Emit at dispatch** — include a request ID, target, and operation type in the outbound event so inbound payloads can be correlated with their originating outbound call.
- **Apply `nonReentrant`** — the inbound handler is called by an external module account; apply re-entrancy guards if it calls other contracts.
- **Fund `$PC` before dispatching** — verify the Push Chain contract has sufficient `$PC` to cover inbound execution fees.

### Limitations

| Area                         | Constraint                                                                                                      |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **No synchronous result**    | Outbound and inbound are always separate transactions — no in-call return value                                 |
| **No cross-chain atomicity** | A failed external call does not revert Push-side state — handle partial failure explicitly                      |
| **CEA as `msg.sender`**      | External contracts with whitelists must explicitly whitelist the contract's CEA address                         |
| **Proxy upgrade safety**     | CEA is bound to proxy address — new deployments at different addresses have different CEAs                      |
| **Inbound timing**           | Depends on external chain finality and TSS observation — do not rely on delivery within a specific block window |
| **Supported chains**         | Target chain must be supported by the TSS network — see `PushChain.CONSTANTS.CHAIN`                             |

---

## 3 — UniversalCore: Read Chain State

`UniversalCore` is the on-chain oracle maintained by the TSS network. Use it to read the **current gas price**, **block height**, and **last observed timestamp** for any external chain Push Chain tracks.

> **Address**: `0x00000000000000000000000000000000000000C0` (Push Chain Donut Testnet)
> Source: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/UniversalCore.sol

### Interface (read-only getters)

```solidity
interface IUniversalCore {
    /// Current gas price (in wei) on the external chain — updated by TSS
    function gasPriceByChainNamespace(string calldata chainNamespace) external view returns (uint256);

    /// Most recently observed block height on the external chain — can be 0 for some chains
    function chainHeightByChainNamespace(string calldata chainNamespace) external view returns (uint256);

    /// Push Chain timestamp (Unix seconds) when the block height was last observed by TSS
    function timestampObservedAtByChainNamespace(string calldata chainNamespace) external view returns (uint256);
}
```

### Off-chain usage (ethers.js)

```ts
import { ethers } from 'ethers';

const UNIVERSAL_CORE = '0x00000000000000000000000000000000000000C0';
const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');

const core = new ethers.Contract(
  UNIVERSAL_CORE,
  [
    'function gasPriceByChainNamespace(string) view returns (uint256)',
    'function chainHeightByChainNamespace(string) view returns (uint256)',
    'function timestampObservedAtByChainNamespace(string) view returns (uint256)',
  ],
  provider
);

const chainNs = 'eip155:11155111'; // Ethereum Sepolia

const gasPrice = await core.gasPriceByChainNamespace(chainNs);
const height = await core.chainHeightByChainNamespace(chainNs); // can be 0 for some chains
const observedAt = await core.timestampObservedAtByChainNamespace(chainNs); // Push Chain timestamp when observed

console.log(`Gas price: ${ethers.formatUnits(gasPrice, 'gwei')} gwei`);
console.log(`Block height: ${height}`);
console.log(
  `Last observed at: ${new Date(Number(observedAt) * 1000).toISOString()}`
);
```

### On-chain usage (Solidity)

```solidity
address constant UNIVERSAL_CORE = 0x00000000000000000000000000000000000000C0;

function getChainState(string calldata chainNs)
    external view
    returns (uint256 gasPrice, uint256 height, uint256 observedAt)
{
    gasPrice   = IUniversalCore(UNIVERSAL_CORE).gasPriceByChainNamespace(chainNs);
    height     = IUniversalCore(UNIVERSAL_CORE).chainHeightByChainNamespace(chainNs);
    observedAt = IUniversalCore(UNIVERSAL_CORE).timestampObservedAtByChainNamespace(chainNs);
}
```

---

## Deploy

### Foundry

```bash
# 1. Install interfaces
forge install pushchain/push-chain-core-contracts
forge install pushchain/push-chain-gateway-contracts

# 2. Build
forge build

# 3. Deploy to Push Chain Donut Testnet (no constructor args — constants hardcoded)
forge create \
  --rpc-url https://evm.donut.rpc.push.org/ \
  --private-key $PRIVATE_KEY \
  src/MyMultichainApp.sol:MyMultichainApp

# If your contract takes constructor args (e.g. _ugpc and _universalExecutorModule):
forge create \
  --rpc-url https://evm.donut.rpc.push.org/ \
  --private-key $PRIVATE_KEY \
  src/MyContract.sol:MyContract \
  --constructor-args \
    0x00000000000000000000000000000000000000C1 \
    0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7
```

### Hardhat

```bash
# Install
npm install @pushchain/core hardhat @nomicfoundation/hardhat-toolbox

# hardhat.config.ts — network already in SKILL.md above

# Deploy
npx hardhat run scripts/deploy.ts --network pushDonut
```

```ts
// scripts/deploy.ts
import { ethers } from 'hardhat';

async function main() {
  const UGPC = '0x00000000000000000000000000000000000000C1';
  const EXECUTOR_MOD = '0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7';

  const Factory = await ethers.getContractFactory('MyMultichainApp');
  const contract = await Factory.deploy();
  await contract.waitForDeployment();

  console.log('Deployed:', await contract.getAddress());
  console.log(
    'Explorer: https://donut.push.network/address/' +
      (await contract.getAddress())
  );
}

main().catch(console.error);
```

> Script: `agents/skills/push-contracts/scripts/deploy.sh` — Foundry deploy + explorer link, ready to run with `PRIVATE_KEY=0x... bash deploy.sh`

---

## Notes

- **UGPC** (`0x00000000000000000000000000000000000000C1`) is on **Push Chain** — for contracts dispatching _outbound_ txs to external chains.
- **UG** contracts are on **external chains** — entry points for users/scripts/contracts sending txs _into_ Push Chain. The SDK uses UG addresses automatically.
- **UniversalCore** is only used to read chain state (gasPrice, chainHeight, observedAt). Do not use it for fee estimation in Solidity.
- **No Push SDK needed** in Solidity — all cross-chain dispatch is pure on-chain calls.
- **Always guard** `executeUniversalTx()` with `require(msg.sender == EXECUTOR_MOD)` and replay protection.
- **`gasLimit: 0`** is recommended — UGPC estimates automatically.
- `account.owner` in `UniversalAccountId` is always hex bytes. Decode to base58 for Solana addresses.

## Source

- UEAFactory interface: https://github.com/pushchain/push-chain-core-contracts/blob/audit-main/src/Interfaces/IUEAFactory.sol
- UGPC: https://github.com/pushchain/push-chain-gateway-contracts/blob/audit-main-fixes/contracts/evm-gateway/src/UniversalGatewayPC.sol
- UEA_EVM: https://github.com/pushchain/push-chain-core-contracts/blob/audit-main/src/uea/UEA_EVM.sol
- UEA_SVM: https://github.com/pushchain/push-chain-core-contracts/blob/audit-main/src/uea/UEA_SVM.sol
- CEA: https://github.com/pushchain/push-chain-gateway-contracts/blob/audit-main-fixes/

## Downloadable Resources

Copy these files into your contracts directory — self-contained and ready to compile with Hardhat or Foundry:

| File                                                                                                  | Purpose                                                                                    |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`IUEAFactory.sol`](https://push.org/agents/resources/push-contracts/IUEAFactory.sol)                 | Interface + struct + usage example for the UEA Factory precompile                          |
| [`IUniversalGatewayPC.sol`](https://push.org/agents/resources/push-contracts/IUniversalGatewayPC.sol) | UGPC interface + `UniversalOutboundTxRequest` struct + dispatch + inbound callback example |
| [`IUniversalCore.sol`](https://push.org/agents/resources/push-contracts/IUniversalCore.sol)           | UniversalCore interface + fee estimation + gas price reader example                        |
| [`MyMultichainApp.sol`](https://push.org/agents/resources/push-contracts/MyMultichainApp.sol)         | Minimal complete contract: caller identification + outbound dispatch + inbound callback    |
| [`foundry.toml`](https://push.org/agents/resources/push-contracts/foundry.toml)                       | Foundry config: RPC endpoints for all supported testnets                                   |

> [Resource index](https://push.org/agents/resources/push-contracts/index.json) — machine-readable file list

## Extended Reference

- [Contract-initiated multichain execution (full workflow)](https://push.org/agents/workflows/contract-initiated-multichain-execution.md)
- [Use contract helpers (UEA Factory)](https://push.org/agents/workflows/use-contract-helpers.md)
- [Configure dev environment](https://push.org/agents/workflows/configure-dev-environment.md)
- [Read blockchain state](https://push.org/agents/workflows/read-blockchain-state.md)
- [Mint ERC-20 tutorial](https://push.org/agents/examples/tutorial-mint-erc20.md)
- [Universal counter example](https://push.org/agents/examples/tutorial-universal-counter.md)
- [Derive UEA example](https://push.org/agents/examples/tutorial-derive-uea.md)
- [Batch transactions example](https://push.org/agents/examples/tutorial-batch-transactions.md)
