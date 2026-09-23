---
name: push-contracts
description: "Use when writing Solidity contracts deployed on Push Chain - covers IUEAFactory for identifying cross-chain callers (UEA), IUniversalGatewayPC (UGPC) for dispatching outbound cross-chain transactions, executeUniversalTx inbound callbacks, UniversalCore oracle reads, UniversalReadClient for receiving external chain or Web2 state (Universal Read callbacks, contract-built ReadSpec), and Foundry/Hardhat deployment. No SDK inside .sol files. Triggers on: 'identify cross-chain caller in Solidity', 'dispatch outbound tx from Push Chain contract', 'implement executeUniversalTx callback', 'deploy Solidity contract with Foundry on Push Chain', 'read another chain's state from a Push Chain contract'."
metadata:
  id: push-contracts
  intent: 'Write Solidity contracts on Push Chain - identify cross-chain callers, dispatch outbound txs via UGPC, receive inbound callbacks, receive Universal Read results'
  package: 'solidity (EVM-compatible - Hardhat / Foundry / Remix)'
  current_sdk_version: '6.0.25'
  entry: 'IUniversalGatewayPC.sendUniversalTxOutbound'
  resources: 'https://push.org/agents/resources/push-contracts/index.json'
  references: 'references/contract-interfaces.md'
  scripts: 'scripts/deploy.sh'
---

# Skill: Smart Contracts on Push Chain

**Intent**: Write Solidity contracts that run on Push Chain, identify cross-chain callers, dispatch outbound transactions to external chains, receive inbound callbacks, and receive external chain or Web2 state through Universal Read.
**Tooling**: Standard EVM (Hardhat / Foundry / Remix) - Push Chain is fully EVM-compatible. No special SDK needed inside Solidity.

> **Full agent layer:** [push.org/llms.txt](https://push.org/llms.txt) indexes every skill, workflow, example, error code, constant, and routing decision in the Push Chain agent layer. Pull it when this skill points outside its domain — cross-skill context, unknown progress-hook IDs, error recovery, or constants lookups.

> **PUSD stablecoin?** If your contract holds, mints, or burns **PUSD** (par-backed) or **PUSD+** (yield-bearing) — both native on Push Chain Donut — see the dedicated [push-pusd skill](https://pusd.push.org/agents/skill/push-pusd/SKILL.md) (or [pusd.push.org/llms.txt](https://pusd.push.org/llms.txt) for the full PUSD agent-layer index: ABIs, deployment addresses, examples) for `IPUSD` / `IPUSDManager` / `IPUSDPlusVault` interfaces, the role model (`MINTER_ROLE` / `BURNER_ROLE` on PUSDManager), and patterns for `mintFor` / `redeemFor` wrappers in other contracts.

## Push Chain - Network Config

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

## Contract Addresses - Push Chain Donut Testnet

| Contract                      | Address                                      | Purpose                                                                                   |
| ----------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **UEA Factory**               | `0x00000000000000000000000000000000000000eA` | Derive/query Universal Executor Accounts                                                  |
| **UniversalGatewayPC (UGPC)** | `0x00000000000000000000000000000000000000C1` | Dispatch outbound cross-chain txs from your Push Chain contract                           |
| **Universal Executor Module** | `0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7` | Delivers inbound callbacks - only valid caller of `executeUniversalTx()`                  |
| **UniversalCore**             | `0x00000000000000000000000000000000000000C0` | On-chain oracle - read gas price, block height, observed timestamp for any external chain |
| **Universal Callback**        | `0x00000000000000000000000000000000000000c2` | "Universal Read / Callback": accepts read requests and delivers results; constructor argument for `UniversalReadClient` |
| **Universal Read Registry**   | `0x00000000000000000000000000000000000000b2` | Default Universal Read receiver used by the SDK when no `callback` is passed |

> Full address book: see https://push.org/agents/contract-addresses.json

## Universal Gateway (UG) - External Chain Addresses

Contracts deployed on external chains. **Users, scripts, and smart contracts** on external chains call UG to send transactions to Push Chain. The `@pushchain/core` SDK uses the correct UG address automatically based on the signer's origin chain.

When UG is called (from any source), the TSS network relays the call to Push Chain and creates/calls the sender's **UEA** - so on Push Chain, `msg.sender` of your contract = the caller's UEA address, not the original wallet or contract.

> **Two UG entry points - one is developer-facing, the other is internal.** `IUniversalGateway` exposes two relevant external functions:
>
> - **`sendUniversalTx(bytes recipient, bytes payload, address token, uint256 amount)`** - used by **EOAs and external-chain contracts** (the snippets in this section). Triggers a one-way inbound to Push Chain. The caller's UEA on Push Chain becomes `msg.sender` in the target contract.
> - **`sendUniversalTxFromCEA(UniversalTxRequest)`** - **not called by developer code**. The destination CEA calls this internally when its outer multicall self-calls `sendUniversalTxToUEA` during a round-trip back-leg (see the [Round-Trip Pattern](#round-trip-pattern-auto-triggered-inbound) section). Developers encode the self-call to `sendUniversalTxToUEA` only; the CEA handles the gateway dispatch on its own.
>
> If you're an external-chain user/contract calling INTO Push Chain → use `sendUniversalTx`. For round-trip back-legs, encode the destination CEA's self-call to `sendUniversalTxToUEA` (see Round-Trip Pattern below).

| Chain            | UG Address                                     | Verify on explorer                                                                                                 |
| ---------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Ethereum Sepolia | `0x05bD7a3D18324c1F7e216f7fBF2b15985aE5281A`   | [Sepolia Etherscan](https://sepolia.etherscan.io/address/0x05bD7a3D18324c1F7e216f7fBF2b15985aE5281A#code)          |
| Arbitrum Sepolia | `0x2cd870e0166Ba458dEC615168Fd659AacD795f34`   | [Sepolia Arbiscan](https://sepolia.arbiscan.io/address/0x2cd870e0166Ba458dEC615168Fd659AacD795f34#code)            |
| Base Sepolia     | `0xFD4fef1F43aFEc8b5bcdEEc47f35a1431479aC16`   | [Sepolia Basescan](https://sepolia.basescan.org/address/0xFD4fef1F43aFEc8b5bcdEEc47f35a1431479aC16#code)           |
| BNB Testnet      | `0x44aFFC61983F4348DdddB886349eb992C061EaC0`   | [BSCscan Testnet](https://testnet.bscscan.com/address/0x44aFFC61983F4348DdddB886349eb992C061EaC0#code)             |
| Solana Devnet    | `CFVSincHYbETh2k7w6u1ENEkjbSLtveRCEBupKidw2VS` | [Solana Explorer](https://explorer.solana.com/address/CFVSincHYbETh2k7w6u1ENEkjbSLtveRCEBupKidw2VS?cluster=devnet) |

### Calling UG from an external chain (via SDK)

```ts
// Wallet is on Ethereum Sepolia - SDK routes through UG automatically
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
        bytes calldata recipient, // Push Chain target address - abi.encodePacked(addr)
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
    ///      msg.sender in the Push Chain contract - use IUEAFactory.getOriginForUEA() there
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

## 1 - IUEAFactory: Identify Cross-Chain Callers

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
- UEA is deterministic (CREATE2) from `(chainNamespace, chainId, walletAddress)` - same user always maps to same UEA
- Lazy-deployed on first use - no pre-deployment needed
- Each external wallet gets its own UEA on Push Chain, scoped to that wallet only

This is why `IUEAFactory.getOriginForUEA(msg.sender)` exists - to recover the real origin chain and wallet address from the UEA that called you.

**Two directions - don't confuse them:**

|                        | External → Push Chain (user-initiated)    | Push Chain → External (contract-initiated) |
| ---------------------- | ----------------------------------------- | ------------------------------------------ |
| **Initiator**          | External chain user (UOA)                 | Your Push Chain contract                   |
| **On-chain identity**  | User's **UEA** (smart account)            | Contract's **CEA**                         |
| **Your contract sees** | `msg.sender` = UEA address                | N/A - you dispatched the call              |
| **SDK required**       | Yes - `@pushchain/core` on client side    | No - pure Solidity                         |
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

> Use this instead of the Foundry import above - **not both**. Declaring `UniversalAccountId` or `IUEAFactory` twice in the same compilation unit causes a duplicate-declaration error.

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

### Decoding `account.owner`

`account.owner` is `bytes` because the same struct carries both EVM (20-byte) and Solana (32-byte) addresses. Decode by chain type:

- **EVM chains** - 20-byte ABI-packed address:
  - Solidity: `address wallet = address(bytes20(account.owner))`
  - ethers.js: `const wallet = ethers.getAddress(ethers.hexlify(account.owner))`
- **Solana** - 32-byte base58 public key (off-chain only):
  - `const pubkey = bs58.encode(ethers.getBytes(account.owner))`

> The `ceaAddress` parameter in `executeUniversalTx` uses the same encoding - same chain type = same byte layout.

### On-chain usage

```solidity
address constant UEA_FACTORY = 0x00000000000000000000000000000000000000eA;

function onlyExternalUser() external {
    (UniversalAccountId memory account, bool isUEA) =
        IUEAFactory(UEA_FACTORY).getOriginForUEA(msg.sender);

    if (isUEA) {
        // msg.sender is a UEA - account.chainNamespace, account.chainId, account.owner
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

### Verifying EIP-712 Signatures from Cross-Chain Wallets

Use this section when your Push Chain contract receives an EIP-712 typed-data payload that was signed by a wallet on a **different** chain (e.g. MetaMask on Ethereum Sepolia, signing a `PaymentRequest` that lands on Push Chain). The frontend signing side is documented in the [push-frontend skill — EIP-712 Typed-Data Signing](https://push.org/agents/skills/push-frontend/SKILL.md#eip-712-typed-data-signing-cross-chain-wallets).

**Why this needs a special verifier.** EIP-712's domain hash binds the signature to `(name, version, chainId, verifyingContract)`. Wallets refuse to sign a domain whose `chainId` doesn't match their currently active chain — so a user on Sepolia signs with `domain.chainId = 11155111`, not Push Chain's `42101`. If your Push Chain verifier rebuilds the domain with `block.chainid`, signature recovery fails. The fix is to make `originChainId` part of the request payload, rebuild the domain dynamically from it, recover the signer's origin-chain EOA, and resolve that EOA's UEA via the factory.

**Inputs the frontend must send along with the signature:**

| Field | Why the verifier needs it |
| --- | --- |
| `originChainId` (uint256) | To rebuild the same EIP-712 domain the wallet signed against |
| `originAddress` (address) | The signer's origin-chain EOA — feeds into `IUEAFactory.getUEAForOrigin` to resolve the UEA. Optional if you trust `ECDSA.recover` to produce the same address (it should). |
| `signature` (bytes) | The 65-byte ECDSA signature returned by `signTypedData` |

#### Verification pattern

```solidity
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
// or inline the interface — see "Or inline the interface directly" above

address constant UEA_FACTORY = 0x00000000000000000000000000000000000000eA;

struct PaymentRequest {
    address recipient;       // UEA (cross-chain) or EOA (Push-native) — see branching below
    uint256 amount;
    uint256 nonce;
    uint256 originChainId;   // signed-in domain chainId; supplied by the frontend payload
}

bytes32 constant PAYMENT_TYPEHASH = keccak256(
    "PaymentRequest(address recipient,uint256 amount,uint256 nonce,uint256 originChainId)"
);

function verifyPaymentRequest(PaymentRequest calldata req, bytes calldata sig)
    external
    view
    returns (address signer, address resolvedUEA)
{
    // 1. Rebuild the EIP-712 domain with the *origin* chainId — NOT block.chainid.
    bytes32 domainSeparator = keccak256(abi.encode(
        keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
        keccak256(bytes("MyApp")),
        keccak256(bytes("1")),
        req.originChainId,
        address(this)
    ));

    // 2. Hash the struct and produce the EIP-712 digest.
    bytes32 structHash = keccak256(abi.encode(
        PAYMENT_TYPEHASH,
        req.recipient,
        req.amount,
        req.nonce,
        req.originChainId
    ));
    bytes32 digest = keccak256(abi.encodePacked("\x19\x01", domainSeparator, structHash));

    // 3. Recover the signer — this is the user's EOA on their origin chain.
    signer = ECDSA.recover(digest, sig);

    // 4. Branch on whether the signer is cross-chain or Push-native.
    if (req.originChainId == block.chainid) {
        // Push-native EOA: there is no UEA — `signer` IS the Push Chain address.
        require(signer == req.recipient, "bad signer (push-native)");
        resolvedUEA = signer;
    } else {
        // Cross-chain origin: resolve the signer's deterministic UEA on Push Chain.
        (address uea, ) = IUEAFactory(UEA_FACTORY).getUEAForOrigin(
            UniversalAccountId({
                chainNamespace: "eip155",
                chainId: Strings.toString(req.originChainId),
                owner: abi.encodePacked(signer)
            })
        );
        require(uea == req.recipient, "bad signer (cross-chain)");
        resolvedUEA = uea;
    }
}
```

> The Push-native branch matters because `IUEAFactory.getUEAForOrigin` is defined for *external-chain* origins. For a native Push EOA, there is no UEA — the EOA IS its own execution account on Push Chain. Calling the factory with `chainNamespace="eip155", chainId="42101"` is undefined; branch on `originChainId == block.chainid` instead.

#### Replay protection

EIP-712 alone is not replay protection. Add the usual primitives to your verifier:

- **Per-request nonce.** Store `mapping(address signer => uint256 nonce)`, require `req.nonce == nonces[signer]`, and increment on use. The nonce is keyed by the recovered signer (origin EOA), not the UEA.
- **Deadline.** Include `uint256 deadline` in the typed-data struct and `require(block.timestamp <= req.deadline, "expired")`.
- **Domain pinning to verifying contract.** The `verifyingContract` field in the domain already binds the signature to *this* contract; a payload signed for contract A cannot be replayed against contract B.
- **Cross-chain replay.** `originChainId` and `block.chainid` together prevent the same payload being replayed across forks or across origin chains: if a user re-signs the same struct on a different origin chain, `originChainId` differs and the domain hash differs.

#### Alternative: ERC-1271 for contract signers

For wallets that are themselves contracts (multisigs, account-abstraction wallets, UEAs once they implement it), skip the `ECDSA.recover` path entirely and call `IERC1271(signer).isValidSignature(digest, sig)`. Detect by `signer.code.length > 0` and dispatch accordingly:

```solidity
import "@openzeppelin/contracts/interfaces/IERC1271.sol";

bytes4 constant ERC1271_MAGIC_VALUE = 0x1626ba7e;

function _verifySig(address signer, bytes32 digest, bytes calldata sig) internal view returns (bool) {
    if (signer.code.length > 0) {
        try IERC1271(signer).isValidSignature(digest, sig) returns (bytes4 magic) {
            return magic == ERC1271_MAGIC_VALUE;
        } catch {
            return false;
        }
    }
    return ECDSA.recover(digest, sig) == signer;
}
```

#### Anti-patterns

| Don't | Why | Do |
| --- | --- | --- |
| Use `block.chainid` in the EIP-712 domain | Locks the contract to a single signing chain; cross-chain signatures fail | Use `req.originChainId` — supplied by the frontend, included in the signed payload |
| Skip the Push-native branch and always call `getUEAForOrigin` | `getUEAForOrigin` is undefined for Push-native origins; behavior is implementation-defined | Branch on `req.originChainId == block.chainid` and verify `signer == recipient` directly |
| Reuse `req.nonce` across signers | Two users can both submit nonce=0 and collide on the same key | Key the nonce map by `signer` (origin EOA), not by `recipient` (UEA) |
| Omit `verifyingContract` from the domain | Payload becomes portable across contracts — replay risk | Always include `address(this)` in the domain |
| Verify against `req.originAddress` instead of the recovered signer | The frontend-supplied `originAddress` is untrusted input | Always recover the signer via `ECDSA.recover` and use that as the authority |

---

## 2 - UGPC: Dispatch Outbound Cross-Chain Txs

Call `UGPC.sendUniversalTxOutbound()` from a Push Chain contract to execute calldata on an external chain via your contract's CEA. No SDK required - pure Solidity.

### Contract CEA - Who executes on the external chain?

Every Push Chain smart contract has a deterministic **Chain Executor Account (CEA)** on each supported external chain, derived from the **contract's Push Chain address** (not any user wallet). This is different from user-initiated transactions where the CEA is derived from the user's wallet.

- `msg.sender` on the external chain = the **contract's CEA**
- CEA is lazily deployed on first use by the TSS network
- CEA is scoped to the contract - different deployments (even same bytecode) have different CEAs
- **Proxy pattern**: CEA is bound to the **proxy address**, not the implementation - upgrades do not change the CEA
- Gas fees: `msg.value` in the `sendUniversalTxOutbound()` call covers UGPC protocol fees + estimated external-chain gas; converted automatically to the external chain's native token
- Push-side **inbound execution** fees are paid in `$PC` - fund your Push contract before dispatching

> This is contract-initiated multichain execution, not user-initiated. No live user interaction is required at call time - any on-chain trigger (governance vote, automation, user action, scheduled job) can initiate the outbound dispatch.

### Interface

```solidity
struct UniversalOutboundTxRequest {
    bytes   recipient;       // raw destination address on source chain (bytes for SVM compat). bytes("") parks funds in caller's CEA
    address token;           // PRC20 token address on Push Chain (address(0) = no bridge, payload only)
    uint256 amount;          // amount to withdraw (burn on Push, unlock at origin)
    uint256 gasLimit;        // gas limit for fee quote (0 = per-chain default)
    uint256 gasPrice;        // gas price override (0 = per-chain default from UniversalCore; new in SDK v6)
    uint256 maxPCForGas;     // max native PC for the gas swap (0 = no cap; new in SDK v6)
    bytes   payload;         // ABI-encoded calldata to execute on origin chain (empty for funds-only)
    address revertRecipient; // address to receive funds in case of revert
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

// Emit at dispatch so off-chain indexers can correlate outbound calls with inbound results.
event OutboundDispatched(address indexed target, bytes4 indexed selector, bytes payload);

function dispatchToExternalChain(
    address targetOnExternalChain,
    bytes calldata calldata_
) external payable {
    // msg.value must cover UGPC protocol fee + gas cost estimate
    IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
        UniversalOutboundTxRequest({
            recipient:          abi.encodePacked(targetOnExternalChain),
            token:           address(0),
            amount:          0,
            gasLimit:        0,             // auto-estimate
            gasPrice:        0,             // UniversalCore default
            maxPCForGas:     0,             // uncapped legacy behavior
            payload:         calldata_,
            revertRecipient: msg.sender
        })
    );
    emit OutboundDispatched(
        targetOnExternalChain,
        bytes4(calldata_),  // first 4 bytes = selector - identifies the operation
        calldata_
    );
}
```

### Inbound callback (optional - receive response after external execution)

`executeUniversalTx` is the **back-leg handler** in the contract-initiated round-trip pattern. Implement it ONLY if your contract dispatches an outbound and needs TSS to deliver the result back. `UNIVERSAL_EXECUTOR_MODULE` is the **only** valid caller.

> **You do NOT need `executeUniversalTx` for user-initiated inbounds.** If your contract is the target of a regular cross-chain user call (external chain EOA -> their UEA on Push -> your contract), `msg.sender` is the caller's UEA. The UEA's internal nonce handles replay; your target can be a plain Solidity function with no guards. The `UNIVERSAL_EXECUTOR_MODULE` check and `executedTxIds` map below apply only when your own contract receives a back-leg from its own CEA.

```solidity
address constant UNIVERSAL_EXECUTOR_MODULE = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

mapping(bytes32 => bool) public executedTxIds;

function executeUniversalTx(
    string  calldata sourceChainNamespace, // e.g. "eip155:97"
    bytes   calldata ceaAddress,           // CEA address on source chain (bytes)
    bytes   calldata payload,              // ABI-encoded response data
    uint256          amount,               // bridged PRC20 amount received
    address          prc20,               // PRC20 token address on Push Chain
    bytes32          txId                 // unique ID for replay protection
) external payable {
    require(msg.sender == UNIVERSAL_EXECUTOR_MODULE, "Unauthorized");
    require(!executedTxIds[txId], "Replay");
    executedTxIds[txId] = true;

    // decode and apply your logic
    // (uint256 result) = abi.decode(payload, (uint256));
}
```

### `executeUniversalTx` - parameter reference

| Parameter              | Type      | Shape / Notes                                                                                                                                                                        |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sourceChainNamespace` | `string`  | CAIP-2 `"namespace:chainId"` - e.g. `"eip155:11155111"` (Ethereum Sepolia), `"eip155:97"` (BNB Testnet), `"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"` (Solana Devnet)     |
| `ceaAddress`           | `bytes`   | **EVM**: 20-byte packed address - `address cea = address(bytes20(ceaAddress))`. **Solana**: 32-byte base58 public key - decode off-chain: `bs58.encode(ethers.getBytes(ceaAddress))` |
| `payload`              | `bytes`   | ABI-encoded return data from the external execution - `abi.decode(payload, (YourReturnType))`                                                                                        |
| `amount`               | `uint256` | Bridged PRC20 amount received; `0` if no bridge                                                                                                                                      |
| `prc20`                | `address` | PRC20 token address on Push Chain; `address(0)` if no bridge                                                                                                                         |
| `txId`                 | `bytes32` | Unique per-delivery ID assigned by the protocol - store in `executedTxIds` for replay protection; do not derive it yourself                                                          |

### Execution flow

```
Your contract → UGPC.sendUniversalTxOutbound()
  → TSS picks up outbound event
    → Contract's CEA executes payload on external chain
      [optional] → UNIVERSAL_EXECUTOR_MODULE calls executeUniversalTx() on your contract
```

### Partial-execution recovery - `revertRecipient`

When bridged assets are sent (`token ≠ address(0)`, `amount > 0`) but the external tx **reverts**, UGPC returns the bridged funds to `revertRecipient`. Set it to a trusted non-zero address - never `address(0)` (assets lost permanently).

```solidity
contract BridgeAndCall {
    address constant UGPC         = 0x00000000000000000000000000000000000000C1;
    address constant UNIVERSAL_EXECUTOR_MODULE = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

    address public immutable treasury;
    mapping(bytes32 => bool) public executedTxIds;

    event OutboundDispatched(address indexed target, bytes4 indexed selector, bytes payload);
    event InboundReceived(bytes32 indexed txId, uint256 amount);

    constructor(address _treasury) { treasury = _treasury; }

    /// @notice Bridge a PRC20 and call target on the external chain.
    /// @dev    If the external tx reverts, `treasury` receives the bridged amount back.
    function bridgeAndCall(
        address target,
        address token,
        uint256 amount,
        bytes calldata payload_
    ) external payable {
        IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
            UniversalOutboundTxRequest({
                recipient:          abi.encodePacked(target),
                token:           token,
                amount:          amount,
                gasLimit:        0,
                gasPrice:        0,
                maxPCForGas:     0,
                payload:         payload_,
                revertRecipient: treasury  // ← receives assets if external execution reverts
            })
        );
        emit OutboundDispatched(target, bytes4(payload_), payload_);
    }

    function executeUniversalTx(
        string calldata, bytes calldata, bytes calldata payload,
        uint256 amount, address, bytes32 txId
    ) external payable {
        require(msg.sender == UNIVERSAL_EXECUTOR_MODULE, "Unauthorized");
        require(!executedTxIds[txId], "Replay");
        executedTxIds[txId] = true;
        emit InboundReceived(txId, amount);
        // amount > 0 means external execution succeeded and assets were delivered
        // decode payload for any return data: abi.decode(payload, (YourReturnType))
    }
}
```

> **Lost assets**: if `revertRecipient` is `address(0)` and the external tx reverts, bridged funds are unrecoverable. Always set a non-zero fallback - typically a treasury or the originating caller.
>
> **No atomicity**: a reverting external tx does not revert Push-side state. Design contracts to handle partial failure explicitly - emit events at dispatch so off-chain monitors can detect unmatched outbound calls.

### Minimal complete contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

struct UniversalOutboundTxRequest {
    bytes recipient; address token; uint256 amount;
    uint256 gasLimit; uint256 gasPrice; uint256 maxPCForGas;
    bytes payload; address revertRecipient;
}
interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

contract MyMultichainApp {
    address constant UGPC         = 0x00000000000000000000000000000000000000C1;
    address constant UNIVERSAL_EXECUTOR_MODULE = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

    mapping(bytes32 => bool) public executedTxIds;

    event OutboundDispatched(address indexed target, bytes4 indexed selector, bytes payload);
    event InboundReceived(bytes32 indexed txId, uint256 amount);

    function dispatch(address target, bytes calldata payload_) external payable {
        IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
            UniversalOutboundTxRequest({
                recipient: abi.encodePacked(target), token: address(0), amount: 0,
                gasLimit: 0, gasPrice: 0, maxPCForGas: 0,
                payload: payload_, revertRecipient: msg.sender
            })
        );
        emit OutboundDispatched(target, bytes4(payload_), payload_);
    }

    function executeUniversalTx(
        string calldata, bytes calldata, bytes calldata payload,
        uint256 amount, address, bytes32 txId
    ) external payable {
        require(msg.sender == UNIVERSAL_EXECUTOR_MODULE, "Unauthorized");
        require(!executedTxIds[txId], "Replay");
        executedTxIds[txId] = true;
        emit InboundReceived(txId, amount);
        // handle response: abi.decode(payload, (YourReturnType))
    }
}
```

### Security Rules

These rules apply to every contract that implements `executeUniversalTx()`:

- **Validate the caller** - `require(msg.sender == UNIVERSAL_EXECUTOR_MODULE)`. Anyone can call `executeUniversalTx()` with fabricated data if this check is missing.
- **Replay protection** - maintain `mapping(bytes32 => bool) executedTxIds` and revert on `executedTxIds[txId]`. Without this, the same inbound result could be applied multiple times.
- **Emit at dispatch** - include a request ID, target, and operation type in the outbound event so inbound payloads can be correlated with their originating outbound call.
- **Apply `nonReentrant`** - the inbound handler is called by an external module account; apply re-entrancy guards if it calls other contracts.
- **Fund `$PC` before dispatching** - verify the Push Chain contract has sufficient `$PC` to cover inbound execution fees. UGPC refunds surplus to `address(this)` via `receive()`, so over-provisioning is safe - but those refunds **accumulate on the contract**, not on the EOA. Plan a `withdraw()` path or treasury sweep for long-running flows.

### Round-Trip Pattern (Auto-Triggered Inbound)

A contract that wants the destination CEA's execution to **automatically fire** an inbound back to itself uses a "round-trip" multicall payload. The destination CEA's outer multicall must include a step that **self-calls `sendUniversalTxToUEA` on the CEA itself**:

```solidity
Multicall({
    to:    destinationCEAAddr,            // self-call enforces msg.sender == address(this)
    value: 0,
    data:  abi.encodeWithSelector(
        bytes4(keccak256("sendUniversalTxToUEA(address,uint256,bytes,address)")),
        address(0),                       // token
        uint256(0),                       // amount
        encodedInboundUniversalPayload,   // inner payload that runs on Push UEA
        address(this)                     // refund recipient
    )
})
```

The CEA (under the `msg.sender == address(this)` self-call invariant) wraps the inner payload and calls its gateway internally; TSS observes that gateway event and delivers `executeUniversalTx` (6-arg) to the originating Push contract. This is the SDK's Route 3 wire format and is what every contract-initiated round-trip example uses.

**Required configuration for the back-leg to fire** (verified on Donut Testnet):

| Knob                        | Value                                                            | Why                                                                                                                                                                                                               |
| --------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gasLimit` on UGPC outbound | `≥ 2_000_000`                                                    | The 500k auto-floor is too tight when the destination payload nests a gateway call. Below threshold, **TSS silently drops the relay** - your Push tx succeeds, UGPC emits the event, but no destination tx fires. |
| Push contract balance       | sufficient to cover inbound fee on top of outbound `protocolFee` | Inbound execution on Push pays gas in $PC, charged to the dispatching contract.                                                                                                                                   |
| Wire format                 | Outer multicall self-calls `sendUniversalTxToUEA` on the CEA     | Plain multicalls without this self-call step DO NOT trigger a back-leg, regardless of gasLimit. The self-call is what tells TSS to fire the inbound.                                                              |

> **Destination CEA pre-funding is NOT required.** When TSS submits the destination tx it forwards the converted gas value to the CEA as `msg.value`, so the CEA has the native balance for nested gateway calls during the duration of that tx.

### Inbound Signature: Two Overloads, One Path

Push Chain's codebase exposes two `executeUniversalTx` signatures:

- `executeUniversalTx(UniversalPayload, bytes)` - the UEA proxy interface (2-arg)
- `executeUniversalTx(string, bytes, bytes, uint256, address, bytes32)` - the docs-style entrypoint (6-arg)

For a **Push-native contract** (the kind shown in this skill), TSS always calls the **6-arg path**. The 2-arg signature is reserved for actual UEA proxy accounts. Implement the 6-arg version.

### Limitations

| Area                                         | Constraint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No synchronous result**                    | Outbound and inbound are always separate transactions - no in-call return value                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **No cross-chain atomicity**                 | A failed external call does not revert Push-side state - handle partial failure explicitly                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **CEA as `msg.sender`**                      | External contracts with whitelists must explicitly whitelist the contract's CEA address                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Proxy upgrade safety**                     | CEA is bound to proxy address - new deployments at different addresses have different CEAs                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Inbound timing**                           | Depends on external chain finality and TSS observation - do not rely on delivery within a specific block window                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Supported chains**                         | Target chain must be supported by the TSS network - see `PushChain.CONSTANTS.CHAIN`                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Solana value sizing (contract-initiated)** | When dispatching to Solana from a Push contract, `msg.value` to UGPC must cover the on-chain $PC → pSOL Uniswap V3 swap. Off-chain compute via `UGPC.UNIVERSAL_CORE() → UniversalCore.{getOutboundTxGasAndFees, WPC, uniswapV3Factory, defaultFeeTier(pSOL)} → factory.getPool(...).slot0() → wpcNeeded × 2 × 1.1` and store the value on the contract. The SDK's `estimateNativeValueForSwap` (`@pushchain/core/src/lib/orchestrator/internals/gas-calculator.js`) is the canonical reference. A flat `balance/2` reverts with `STF`. |

---

## 3 - UniversalCore: Read Chain State

`UniversalCore` is the on-chain oracle maintained by the TSS network. Use it to read the **current gas price**, **block height**, and **last observed timestamp** for any external chain Push Chain tracks.

**Concrete use cases:**

- **Self-throttle outbound dispatches** - read `gasPriceByChainNamespace` before calling `sendUniversalTxOutbound` and revert if external gas exceeds your budget:
  ```solidity
  uint256 extGas = IUniversalCore(UNIVERSAL_CORE).gasPriceByChainNamespace("eip155:11155111");
  require(extGas < 50 gwei, "external gas too high - retry later");
  ```
- **User-facing gas quote** (off-chain) - show the estimated cost before asking the user to sign:
  ```ts
  const gasPrice = await core.gasPriceByChainNamespace('eip155:11155111');
  const estimatedFee = gasPrice * BigInt(estimatedGasUnits);
  console.log('Estimated fee:', ethers.formatEther(estimatedFee), 'ETH');
  ```
- **Liveness check** - compare `timestampObservedAtByChainNamespace` against the current block timestamp to detect stale TSS data before dispatching:
  ```solidity
  uint256 observedAt = IUniversalCore(UNIVERSAL_CORE).timestampObservedAtByChainNamespace("eip155:11155111");
  require(block.timestamp - observedAt < 300, "TSS data stale - retry"); // 5-minute threshold
  ```

> **Address**: `0x00000000000000000000000000000000000000C0` (Push Chain Donut Testnet)
> Source: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/UniversalCore.sol

### Interface (read-only getters)

```solidity
interface IUniversalCore {
    /// Current gas price (in wei) on the external chain - updated by TSS
    function gasPriceByChainNamespace(string calldata chainNamespace) external view returns (uint256);

    /// Most recently observed block height on the external chain - can be 0 for some chains
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

> Declare `IUniversalCore` in your contract before using this snippet - copy the interface block from the section above, or `import "push-chain-core-contracts/src/Interfaces/IUniversalCore.sol"`.

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

## 4 - UniversalReadClient: Receive External State

Universal Read brings state from another chain (EVM or Solana) or from an HTTPS endpoint onto Push Chain. Validators read the source and agree on the bytes, and **Universal Callback** (`0x00000000000000000000000000000000000000c2`) delivers them into a function on your contract. The result becomes contract state in the same transaction that delivers it: settle, unlock, pay out or rebalance with no off-chain relayer. The read is paid and asynchronous; your callback runs inside a gas bound you choose, up to 1,000,000 gas.

If only an app or backend needs the value, you do not need a contract: omit `callback` and the Universal Read Registry (`0x00000000000000000000000000000000000000b2`) stores the result (push-backend skill, `client.universal.read`).

**Universal Callback key properties:**

- **Single entry**: `requestExternalReadSelf(spec, callbackSelector, callbackGasLimit)` is the only way in. `UniversalReadClient` calls it for you.
- **Single delivery**: only Universal Callback may call your contract with a result. The base contract enforces this.
- **Gas bound**: `callbackGasLimit` caps what your callback may consume. The hard cap is 1,000,000 gas; the SDK defaults to 500,000 (`PushChain.CONSTANTS.READ.REGISTRY_CALLBACK_GAS`) when no `gasLimit` is passed.
- **Lifecycle**: `PENDING`, `EXECUTED` (result delivered; the callback was attempted, even if it reverted), `SETTLED` (gas reported, refund sent), or `EXPIRED`. `statusOf(requestId)` returns the current state; an unknown ID reads as `NONE`. Callback success is the `ReadFulfilled` / `CallbackFailed` event (SDK: `callbackDelivered`).
- **Fees**: `estimateFee(chainNamespace, chainId)` quotes the protocol fee (0 on Donut today). The callback budget on top must cover `callbackGasLimit × Push base fee`, or the node never fulfils the request and it expires.

### UniversalReadClient

Inherit `UniversalReadClient` (`import {UniversalReadClient} from "push-chain-core-contracts/src/UniversalReadClient.sol";`, types in `push-chain-core-contracts/src/libraries/ReadTypes.sol`). You write two functions:

- a **payable request entrypoint** that calls `_requestRead(ReadSpec spec, bytes localState, uint64 callbackGasLimit) returns (uint256 requestId)`, forwarding `msg.value` (protocol fee plus callback budget);
- **`_onReadResult(uint256 requestId, bytes calldata resultData, bytes memory localState)`**, which receives the validator-agreed bytes and the `localState` you passed at request time.

The base contract's `onUniversalData(requestId, resultData)` rejects every caller except Universal Callback (`UnauthorizedCaller`) and forwards to `_onReadResult`; never override it. `getLocalContext(requestId)` returns the pending `localState`; `universalCallback()` returns the bound address. When a spec your contract builds leaves `revertRecipient` as `address(0)`, `_requestRead` sets it to your contract, so declare `receive() external payable {}` or point it at an EOA. Specs prepared by the SDK already carry the caller's Push account (or `refundTo`). On the SDK path, forward the spec and gas limit unchanged and call `_requestRead` exactly once: the SDK matches the request by target, gas limit and spec and throws `READ_REQUEST_MISMATCH` after the transaction is mined (fee already paid) if they differ.

### ReadSpec

```solidity
struct ReadSpec {
    UniversalAccountId account;      // { chainNamespace, chainId, owner }: where to read
    bytes   query;                   // Encoded query envelope for that chain family
    uint16  minConfirmations;        // At least 1
    uint64  blockNumber;             // Pinned source block, at most the oracle height
    uint64  expiryPushChainHeight;   // Push Chain block after which the request expires
    uint256 maxFee;                  // Upper bound on msg.value the request accepts
    address revertRecipient;         // Receives the unused callback budget
}
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| `account.chainNamespace` | `string` | Bare namespace: `eip155`, `solana` or `web2`. |
| `account.chainId` | `string` | Chain ID within the namespace, for example `11155111` for Ethereum Sepolia. |
| `account.owner` | `bytes` | The account being read on Solana (32 bytes). For EVM reads validators do not use it; any non-empty bytes are accepted. |
| `query` | `bytes` | The chain family's query envelope. For EVM: `abi.encode` of `(uint8 queryType, (uint8 refType, uint64 blockNumber) blockRef, bytes payload)`. |
| `minConfirmations` | `uint16` | Confirmations the source block must have before validators read it. Minimum `1`. |
| `blockNumber` | `uint64` | Source block to read at. Must be non-zero and at most the height Universal Core has observed for that chain. `0` for Web2. |
| `expiryPushChainHeight` | `uint64` | Must be greater than the current Push Chain block. The SDK uses the current block plus 300. |
| `maxFee` | `uint256` | The request reverts when `msg.value` exceeds it. Set it to `msg.value` when you have no separate cap. |
| `revertRecipient` | `address` | Receives the unused callback budget on settlement and the full budget on expiry. Must accept native transfers. |

### Deploy a Receiver

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {UniversalReadClient} from "push-chain-core-contracts/src/UniversalReadClient.sol";
import {ReadSpec} from "push-chain-core-contracts/src/libraries/ReadTypes.sol";

/**
 * @title ExternalStateInbox
 * @notice Requests universal reads and stores each delivered result by request ID.
 */
contract ExternalStateInbox is UniversalReadClient {
    /// @notice The only Push Chain account allowed to submit requests
    address public immutable REQUESTER;

    /// @notice Raw result bytes, keyed by the numeric request ID
    mapping(uint256 => bytes) public results;

    /**
     * @param callbackAddress The Universal Callback contract that delivers results
     * @param requester_ The Push Chain account that will submit requests
     */
    constructor(address callbackAddress, address requester_)
        UniversalReadClient(callbackAddress)
    {
        require(requester_ != address(0), "zero requester");
        REQUESTER = requester_;
    }

    /**
     * @notice Payable request entrypoint the SDK calls
     * @param spec The prepared read, supplied by the SDK
     * @param gasLimit Gas reserved for _onReadResult
     * @return The numeric request ID
     */
    function request(ReadSpec calldata spec, uint64 gasLimit)
        external payable returns (uint256)
    {
        require(msg.sender == REQUESTER, "only requester");
        return _requestRead(spec, abi.encode(msg.sender), gasLimit);
    }

    /**
     * @dev Called by the base contract when Universal Callback delivers a result.
     *      Empty resultData means the source returned an error.
     */
    function _onReadResult(uint256 requestId, bytes calldata resultData, bytes memory)
        internal override
    {
        if (resultData.length == 0) return;
        results[requestId] = resultData;
    }

    /// @dev Receives the unused callback budget
    receive() external payable {}
}
```

| Argument | Value |
| -------- | ----- |
| `callbackAddress` | `0x00000000000000000000000000000000000000c2`, the [Universal Read / Callback](/docs/chain/setup/smart-contract-address-book/#push-chain-core-functionalities) contract. |
| `requester_` | The address that will submit requests. For an SDK caller, `pushChainClient.universal.account`. |

> **`requester_` must equal the `msg.sender` your receiver sees when a read is requested.** For a caller using the SDK that is `pushChainClient.universal.account` on the client that will call `read`, which is not always the wallet that deployed the contract (an external signer calls through its UEA).

### Request a Read: Two Paths

**Path A, through the SDK.** Off-chain code points `read` at your receiver by passing `callback`. The SDK prepares the read, calls your payable entrypoint with the prepared `ReadSpec` and the callback gas, and waits for the result.

```typescript
const result = await pushChainClient.universal.read(holder, {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  callback: {
    target: receiverAddress,
    gasLimit: 200_000n,       // gas for _onReadResult, up to 1_000_000n (default 500_000n)
    abi: receiverAbi,
    functionName: 'request',  // your payable request entrypoint
  },
});

console.log(result.callbackDelivered); // true once _onReadResult ran
console.log(result.outcome);           // PushChain.CONSTANTS.READ.OUTCOME.SUCCESS when it all worked
```

**Path B, from within your contract.** A contract that requests on its own builds the `ReadSpec` itself, with no SDK in the loop. This example pins the read one block below the height Universal Core observed for Ethereum Sepolia (so `minConfirmations: 1` is met) and stores the ETH balance of `holder`.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {UniversalReadClient} from "push-chain-core-contracts/src/UniversalReadClient.sol";
import {ReadSpec} from "push-chain-core-contracts/src/libraries/ReadTypes.sol";
import {UniversalAccountId} from "push-chain-core-contracts/src/libraries/Types.sol";

interface IUniversalCore {
    function chainHeightByChainNamespace(string calldata caip2) external view returns (uint256);
}

/**
 * @title BalanceWatcher
 * @notice Requests the Ethereum Sepolia ETH balance of an address with no SDK in the loop.
 */
contract BalanceWatcher is UniversalReadClient {
    /// @dev EVM query envelope. abi.encode of this struct is what validators decode.
    struct BlockRef { uint8 refType; uint64 blockNumber; }
    struct EvmQuery { uint8 queryType; BlockRef blockRef; bytes payload; }

    address public constant UNIVERSAL_CORE = 0x00000000000000000000000000000000000000C0;
    uint8 public constant QUERY_ACCOUNT_BALANCE = 0;
    uint64 public constant CALLBACK_GAS = 200_000;

    /// @notice Latest delivered balance per holder, in wei
    mapping(address => uint256) public balances;

    constructor(address callbackAddress) UniversalReadClient(callbackAddress) {}

    /**
     * @notice Request the Sepolia ETH balance of `holder`
     * @dev msg.value = protocol fee (Universal Callback's estimateFee, 0 on Donut today)
     *      + callback budget. The node only fulfils a request whose budget covers
     *      CALLBACK_GAS at the Push base fee; below that the request expires unfulfilled.
     *      Fund it with headroom; what the callback does not use comes back.
     */
    function requestBalance(address holder) external payable returns (uint256) {
        require(msg.value >= 2 * CALLBACK_GAS * block.basefee, "fund the callback budget");
        // Pin one block below the observed height so minConfirmations = 1 is already met.
        uint64 height = uint64(IUniversalCore(UNIVERSAL_CORE).chainHeightByChainNamespace("eip155:11155111")) - 1;

        bytes memory query = abi.encode(EvmQuery({
            queryType: QUERY_ACCOUNT_BALANCE,
            blockRef: BlockRef({ refType: 0, blockNumber: height }),
            payload: abi.encode(holder)
        }));

        ReadSpec memory spec = ReadSpec({
            account: UniversalAccountId({ chainNamespace: "eip155", chainId: "11155111", owner: abi.encodePacked(holder) }),
            query: query,
            minConfirmations: 1,
            blockNumber: height,
            expiryPushChainHeight: uint64(block.number + 300),
            maxFee: msg.value,
            revertRecipient: address(this)
        });

        return _requestRead(spec, abi.encode(holder), CALLBACK_GAS);
    }

    /// @dev Empty resultData means the source returned an error; nothing is stored.
    function _onReadResult(uint256, bytes calldata resultData, bytes memory localState)
        internal override
    {
        if (resultData.length == 0) return;
        address holder = abi.decode(localState, (address));
        balances[holder] = abi.decode(resultData, (uint256));
    }

    /// @dev Receives the unused callback budget
    receive() external payable {}
}
```

The query envelope is rigid: validators decode `query` as one ABI-encoded tuple, so build it with `abi.encode` of a struct, never as three separate parameters.

| Query | `queryType` | `payload` | `resultData` |
|-------|-------------|-----------|--------------|
| Native balance | `0` | `abi.encode(address holder)` | `abi.encode(uint256)` |
| Contract call | `1` | `abi.encode(address target, bytes callData)` | Raw return bytes of the call |
| Storage slot | `2` | `abi.encode(address target, bytes32 slot)` | The 32-byte word |

Solana and Web2 envelopes carry more fields. Build those off-chain with the SDK's `prepareRead` and send them to your entrypoint with `toCallData`, which encodes `(spec, callbackGasLimit)` and returns the `msg.value` to send (`prepared.value`):

```typescript
import { toCallData } from '@pushchain/core';

const prepared = await pushChainClient.universal.prepareRead(account, { chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET });
const { data, value } = toCallData(prepared, { abi: receiverAbi, functionName: 'request' }); // args?: (spec, gasLimit) => [...] to reorder
const tx = await pushChainClient.universal.sendTransaction({ to: receiverAddress, data, value });
```

Prepare right before sending: the spec's expiry is fixed at prepare time (300 Push blocks, about 6.7 minutes).

### Read the Result On-Chain

```solidity
uint256 balance = abi.decode(resultData, (uint256));   // balance, token balance, lamports
address holder = abi.decode(localState, (address));    // whatever you stored at request time
```

**Empty `resultData` means the source returned an error** (the target had no code at that block, the call reverted, or the endpoint failed). Return early rather than decoding, as both examples do; decoding empty bytes reverts, burns the callback budget and marks the callback as failed. An expired request never reaches your callback.

### Verify From Off-Chain

```typescript
const done = await pushChainClient.universal.trackRead({ requestId: result.requestId }).then((read) => read.wait());
if (done.callbackDelivered !== true) throw new Error('Receiver did not run');

const inbox = new ethers.Contract(receiverAddress, receiverAbi, provider);
const stored = await inbox.results(result.requestIdUint);
```

`callbackDelivered` is `false` when `_onReadResult` reverted or ran out of gas, and `outcome` is then `CALLBACK_FAILED`. `results` is keyed by the numeric request ID, which the SDK exposes as `requestIdUint` (a `bigint`) next to the hex `requestId`.

### Fees and Refunds

| Item | What happens |
|------|--------------|
| **Protocol fee** | Quoted by `estimateFee(chainNamespace, chainId)` on Universal Callback. Taken from `msg.value` at request time and not refunded. |
| **Callback budget** | Everything in `msg.value` above the protocol fee. It must cover `callbackGasLimit × Push base fee`, or the node never fulfils the request and it expires. After the callback runs, the gas it consumed is burned from the budget and the rest is sent to `revertRecipient`. |
| **Expiry** | A request that is not executed by `expiryPushChainHeight` expires and the full callback budget is refunded. The protocol fee is not. |
| **Refund delivery** | Refunds are pushed to `revertRecipient`. A contract without a payable `receive()` rejects the push; Universal Callback emits `RefundFailed` and keeps the amount, and the SDK reports `fees.refundFailed`. |

The SDK sizes the budget at three times `callbackGasLimit × gas price`. A contract that requests on its own must send at least `estimateFee(chainNamespace, chainId) + callbackGasLimit × block.basefee`, with headroom because the base fee can rise before fulfilment.

### Security Rules

- **Only Universal Callback can deliver.** Do not override `onUniversalData`; put your logic in `_onReadResult`.
- **Gate the request entrypoint.** A payable entrypoint anyone can call lets anyone write into your request bookkeeping. Restrict it (as `REQUESTER` does) or make it deliberately public and treat each result as untrusted input.
- **The result is only as good as the request.** Callback arrival proves validators agreed on the bytes for the spec that was submitted. When the SDK builds the spec, record what you expect (a query key or target address) in `localState` and check it in the callback.
- **Empty bytes are an error, not a zero.** Check `resultData.length` first.
- **No reads from inside a callback.** Start follow-up reads in a separate transaction.

### Limitations

| Area | Constraint |
|------|------------|
| **No synchronous result** | The request and the delivery are separate transactions. There is no in-call return value. |
| **Callback gas** | At most 1,000,000 gas per callback. Larger work must be split across transactions. |
| **One request per prepared read** | On the SDK path the entrypoint must call `_requestRead` exactly once per prepared read. |
| **Query envelopes** | EVM envelopes are simple enough to build in Solidity. Solana and Web2 envelopes should come from the SDK. |
| **Supported sources** | Ethereum Sepolia, Arbitrum Sepolia, Base Sepolia, BNB Testnet, Solana Devnet and HTTPS endpoints on Donut. |

### Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `callbackDelivered` is `false` | `_onReadResult` reverted or ran out of gas | Raise `gasLimit`, up to `1_000_000n`, and make sure the callback cannot revert on empty `resultData`. |
| Entrypoint reverts with `only requester` | The caller is not the account you authorized | Pass `pushChainClient.universal.account` as `requester_`, not the deploying EOA. See [Deploy a Receiver](#deploy-a-receiver). |
| Request reverts with `InvalidBlockNumber` | `blockNumber` is `0` or above the height Universal Core has observed | Read `chainHeightByChainNamespace` with the full CAIP-2 key, for example `eip155:11155111`, and pin `minConfirmations` below it (height − 1 for the minimum of 1). Web2 reads must use `0`. |
| Request reverts with `InvalidExpiryHeight` | `expiryPushChainHeight` is not above the current block | Use `block.number + 300` or another future height. |
| Request reverts with `InsufficientFee` or `ExcessiveFee` | `msg.value` is below `estimateFee` or above `spec.maxFee` | Quote `estimateFee` before sending and set `maxFee` to `msg.value` when you have no separate cap. |
| SDK throws `READ_REQUEST_MISMATCH` after the transaction is mined | Your entrypoint called `_requestRead` more or fewer than once, or changed the spec or gas limit | Forward the prepared spec and gas limit unchanged and call `_requestRead` once per prepared read. The fee is already paid; resume with the hashes on the error. |
| Request reverts with `InvalidAccountId`, `EmptyQuery` or `InvalidMinConfirmations` | `account` has an empty namespace, chain ID or owner, `query` is empty, or `minConfirmations` is 0 | Fill every `account` field (any non-empty owner for EVM), build `query` as one tuple, and use at least 1 confirmation. |
| Request reverts with `ZeroCallbackGasLimit` or `CallbackGasLimitExceeded` | `callbackGasLimit` is 0 or above 1,000,000 | Pass a gas limit between 1 and `1_000_000`. |
| Request reverts with `DomainBlocked` | The source chain is blocked on Universal Callback | Use a supported source. |
| Request succeeds but never fulfils, then `EXPIRED` | The callback budget is below `callbackGasLimit × base fee` | Send more `msg.value`. |
| Refund never arrives | `revertRecipient` is a contract without a payable `receive()` | Add `receive() external payable {}` or point `revertRecipient` at an EOA. |
| Callback ran but stored nothing | The source returned an error and `resultData` was empty | Check the target, ABI and pinned block. The SDK shows the reason as `raw.errorCode`. |

Full reference: https://push.org/agents/workflows/universal-read.md

---

## Deploy

### Foundry

```bash
# 1. Install interfaces
forge install pushchain/push-chain-core-contracts
forge install pushchain/push-chain-gateway-contracts

# 2. Build
forge build

# 3. Deploy to Push Chain Donut Testnet (no constructor args - constants hardcoded)
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

# hardhat.config.ts - network already in SKILL.md above

# Deploy
npx hardhat run scripts/deploy.ts --network pushDonut
```

```ts
// scripts/deploy.ts
import { ethers } from 'hardhat';

async function main() {
  const UGPC = '0x00000000000000000000000000000000000000C1';
  const UNIVERSAL_EXECUTOR_MODULE =
    '0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7';

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

> Script: `agents/skills/push-contracts/scripts/deploy.sh` - Foundry deploy + explorer link, ready to run with `PRIVATE_KEY=0x... bash deploy.sh`

### Verify your deployment

After deploying, confirm that the Push Chain precompiles are reachable and your contract exists:

```bash
# Confirm UEAFactory precompile is live - zero address returns empty, isUEA=false
cast call 0x00000000000000000000000000000000000000eA \
  "getOriginForUEA(address)((string,string,bytes),bool)" \
  0x0000000000000000000000000000000000000001 \
  --rpc-url https://evm.donut.rpc.push.org/

# Confirm UniversalCore is live - returns non-zero gas price for Ethereum Sepolia
cast call 0x00000000000000000000000000000000000000C0 \
  "gasPriceByChainNamespace(string)(uint256)" \
  "eip155:11155111" \
  --rpc-url https://evm.donut.rpc.push.org/

# Confirm your deployed contract exists (replace $CONTRACT with the deployed address)
cast code $CONTRACT --rpc-url https://evm.donut.rpc.push.org/
# Expected: non-empty bytecode (0x...)
```

---

## Common Mistakes

| Symptom / Mistake                                                                                                        | Fix                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `executeUniversalTx()` called with fabricated data - replayed or spoofed callbacks                                       | Add `require(msg.sender == UNIVERSAL_EXECUTOR_MODULE, "Unauthorized")` - without it, anyone can call this function                                                                                                                                                                                                                                                         |
| Same inbound callback applied twice - state corrupted                                                                    | Add `mapping(bytes32 => bool) executedTxIds` and `require(!executedTxIds[txId], "Replay")`                                                                                                                                                                                                                                                                                 |
| `msg.sender` in your Push Chain contract is not the external user's wallet address                                       | It never is - `msg.sender` is the user's **UEA**. Use `IUEAFactory(UEA_FACTORY).getOriginForUEA(msg.sender)` to recover the origin wallet                                                                                                                                                                                                                                  |
| Confused UGPC (outbound) with UG (inbound) - wrong address used                                                          | **UGPC** (`...00C1`) is on Push Chain for dispatching _outbound_ txs. **UG** contracts are on _external chains_ for sending txs _into_ Push Chain                                                                                                                                                                                                                          |
| `sendUniversalTxOutbound` call reverts immediately                                                                       | `msg.value` must cover UGPC protocol fee + external-chain gas estimate - do not send `0`                                                                                                                                                                                                                                                                                   |
| Push Chain contract runs out of gas for inbound execution                                                                | Fund the contract with `$PC` before dispatching outbound - inbound execution fees are paid in `$PC`                                                                                                                                                                                                                                                                        |
| CEA whitelist on external contract blocks calls                                                                          | The external contract sees the **contract's CEA** as `msg.sender`, not your Push Chain address - whitelist the CEA address on the external side                                                                                                                                                                                                                            |
| Outbound dispatched, Push tx succeeded, but no destination tx ever fires (round-trip back-leg never lands)               | UGPC's auto-floor for `gasLimit = 0` is 500k. When the destination payload nests a gateway call (round-trip wire format), TSS silently drops the relay below ~1.5M. Pass **`gasLimit: 2_000_000`** explicitly. UGPC charges only for actual gas used and refunds the surplus.                                                                                              |
| Solana outbound from a Push contract reverts with `STF` (SafeTransferFrom)                                               | `msg.value` to UGPC must cover the on-chain $PC → pSOL Uniswap V3 swap. A flat `balance/2` doesn't size against current pool depth. Off-chain compute via `UniversalCore.getOutboundTxGasAndFees(pSOL, gasLimit)` + pool slot0 math (mirrors the SDK's `estimateNativeValueForSwap`). Store the result on the contract via a setter; never use a flat fraction of balance. |
| TSS dispatches to the 2-arg `executeUniversalTx(UniversalPayload, bytes)` overload and the 6-arg version is never called | For Push-native contracts, TSS calls only the **6-arg** signature `executeUniversalTx(string, bytes, bytes, uint256, address, bytes32)`. The 2-arg signature is reserved for actual UEA proxy accounts. Implement the 6-arg version.                                                                                                                                       |
| Refunds drain the EOA over many runs                                                                                     | UGPC routes surplus refund to `address(this)`, not back to the user EOA that called your function. Plan a `withdraw()` path or treasury sweep. Expected behavior, not a bug.                                                                                                                                                                                               |
| Universal Read receiver entrypoint reverts with `only requester` | The gate authorized the deploying EOA, but `msg.sender` is the SDK caller's `pushChainClient.universal.account` (its UEA for an external signer). Pass that account as `requester_`. |
| `_onReadResult` decodes empty `resultData` and reverts - `callbackDelivered` is `false` | Empty `resultData` means the source returned an error. `if (resultData.length == 0) return;` before `abi.decode`. |
| Contract-built read reverts with `InvalidBlockNumber` | `blockNumber` must be non-zero and at most `UniversalCore.chainHeightByChainNamespace("eip155:11155111")` (full CAIP-2 key); pin at height − `minConfirmations`, and it must match the block inside `query`. |
| Validators cannot decode a contract-built `query` | Build it as `abi.encode(EvmQuery({ queryType, blockRef: BlockRef({ refType, blockNumber }), payload }))`, one tuple. For Solana and Web2, use the SDK's `prepareRead` and `toCallData`. |
| Universal Read refund never arrives | A contract-built spec with `revertRecipient = address(0)` defaults it to your receiver; add `receive() external payable {}` or point it at an EOA. SDK-prepared specs refund to the caller's Push account. |

## Source

- UEAFactory interface: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/Interfaces/IUEAFactory.sol
- UniversalReadClient: https://github.com/pushchain/push-chain-core-contracts/blob/core-testnet/src/UniversalReadClient.sol
- ReadTypes (ReadSpec): https://github.com/pushchain/push-chain-core-contracts/blob/core-testnet/src/libraries/ReadTypes.sol
- UGPC: https://github.com/pushchain/push-chain-gateway-contracts/blob/main/contracts/evm-gateway/src/UniversalGatewayPC.sol
- UEA_EVM: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/uea/UEA_EVM.sol
- UEA_SVM: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/uea/UEA_SVM.sol
- CEA: https://github.com/pushchain/push-chain-gateway-contracts/blob/main/

## Downloadable Resources

Copy these files into your contracts directory - self-contained and ready to compile with Hardhat or Foundry:

| File                                                                                                  | Purpose                                                                                    |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`IUEAFactory.sol`](https://push.org/agents/resources/push-contracts/IUEAFactory.sol)                 | Interface + struct + usage example for the UEA Factory precompile                          |
| [`IUniversalGatewayPC.sol`](https://push.org/agents/resources/push-contracts/IUniversalGatewayPC.sol) | UGPC interface + `UniversalOutboundTxRequest` struct + dispatch + inbound callback example |
| [`IUniversalCore.sol`](https://push.org/agents/resources/push-contracts/IUniversalCore.sol)           | UniversalCore interface + fee estimation + gas price reader example                        |
| [`MyMultichainApp.sol`](https://push.org/agents/resources/push-contracts/MyMultichainApp.sol)         | Minimal complete contract: caller identification + outbound dispatch + inbound callback    |
| [`foundry.toml`](https://push.org/agents/resources/push-contracts/foundry.toml)                       | Foundry config: RPC endpoints for all supported testnets                                   |

> [Resource index](https://push.org/agents/resources/push-contracts/index.json) - machine-readable file list

## Extended Reference

- [Contract-initiated multichain execution (full workflow)](https://push.org/agents/workflows/contract-initiated-multichain-execution.md)
- [Use contract helpers (UEA Factory, UniversalReadClient)](https://push.org/agents/workflows/use-contract-helpers.md)
- [Universal Read, including contract-initiated reads and callbacks](https://push.org/agents/workflows/universal-read.md)
- [UniversalReadClient: what `_requestRead` recorded on the registry](https://push.org/agents/examples/read-client-request-context.md)
- [UniversalReadClient: what `_onReadResult` stored on the registry](https://push.org/agents/examples/read-client-stored-result.md)
- [Configure dev environment](https://push.org/agents/workflows/configure-dev-environment.md)
- [Read blockchain state](https://push.org/agents/workflows/read-blockchain-state.md)
- [Mint ERC-20 tutorial](https://push.org/agents/examples/tutorial-mint-erc20.md)
- [Universal counter example](https://push.org/agents/examples/tutorial-universal-counter.md)
- [Derive UEA example](https://push.org/agents/examples/tutorial-derive-uea.md)
- [Batch transactions example](https://push.org/agents/examples/tutorial-batch-transactions.md)
