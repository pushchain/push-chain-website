---
title: "Build a Universal Airdrop"
url: "https://pushchain.github.io/docs/chain/tutorials/token-systems/tutorial-universal-airdrop/"
section: "tutorials"
lastUpdated: "2026-08-11T06:03:12Z"
description: "Build a Universal Airdrop | Tutorials | Push Chain Docs"
---

# Build a Universal Airdrop

25 mins

In this tutorial, you'll build a **Universal Claimable Airdrop** system on Push Chain. You deploy an airdrop contract **once** on Push Chain, and users from **any supported chain** can claim using their existing wallets.

By the end of this tutorial you'll be able to:

-   ✅ Convert addresses from any chain to deterministic Push Chain addresses ([UEAs](/push-chain-website/pr-preview/pr-1233/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account/))
-   ✅ Generate Merkle trees for efficient airdrop verification
-   ✅ Deploy a universal airdrop contract with OpenZeppelin's Merkle proof system
-   ✅ Build a claim UI that works for users on any chain
-   ✅ Understand how Universal Executor Accounts enable cross-chain claiming

## What Makes This Universal?

Traditional airdrops often require:

-   Deploying contracts on multiple chains
-   Managing separate token supplies per chain
-   Forcing users to claim on a specific chain or do extra wallet ops

**Universal Airdrops on Push Chain:**

-   **Deploy once** on Push Chain
-   Users from **any chain** claim with their **existing wallet**
-   **No bridging** or chain-switching required
-   One contract, one token supply, reaching every chain
-   No per chain deployments or per chain token supplies

### Example Flow

-   Alice (Ethereum wallet `0xABC...`) → Claims directly from Ethereum
-   Bob (Solana wallet `7xKX...`) → Claims directly from Solana
-   Charlie (Base wallet `0xDEF...`) → Claims directly from Base

All three interact with the **same contract** on Push Chain through their [Universal Executor Accounts (UEAs)](/push-chain-website/pr-preview/pr-1233/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account/).

> **🚀 Why this matters**
> 
> This is the future of token distribution. Deploy once, reach everyone. No multi-chain complexity, no fragmented liquidity, just pure universal access.

## Understanding the Architecture

The Universal Airdrop system consists of four key components:

### 1\. Address Conversion

For each recipient, we convert their origin address to a deterministic **[Universal Executor Account (UEA)](/push-chain-website/pr-preview/pr-1233/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account/)** address on Push Chain:

### 2\. Merkle Tree Generation

We create a Merkle tree where each leaf contains:

-   UEA address (converted from origin address)
-   Token amount

Note: the demo stores origin address and chain only in the UI for display. They are not part of the Merkle leaf.

### 3\. Smart Contract Deployment

The airdrop contract:

-   Stores the Merkle root
-   Verifies proofs on-chain
-   Prevents double claiming
-   Distributes tokens to claimants

### 4\. Claim Interface

Users connect with their origin wallet and claim tokens through their UEA.

## Write the Contracts

We'll need two contracts for this tutorial:

1.  **ERC-20 Token Contract** - The token being airdropped ($UNICORN) - see [Mint Universal ERC-20 Tokens](/push-chain-website/pr-preview/pr-1233/docs/chain/tutorials/basics/tutorial-mint-erc-20-tokens/) for basics
2.  **Universal Airdrop Contract** - Handles Merkle proof verification and token distribution

> **Production note:** most real airdrops distribute an existing token. This tutorial deploys a fresh $UNICORN token to keep the demo self-contained. In production, deploy the airdrop against your existing token address and fund it with the distribution supply.

  

-   ERC-20 Token ($UNICORN)
-   Airdrop Factory
-   Universal Airdrop

Universal ERC-20 Token Contract

Token.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-claimable-airdrop/contracts/src/Token.sol)

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

**Key Features:**

-   Mints 1,000,000 tokens to the deployer
-   Has an open `mint()` function for easy testing
-   Uses OpenZeppelin's battle-tested ERC-20 implementation

Demo Only

Token.sol is a demo contract. Do not ship an open `mint()` in production. Gate minting (Ownable/AccessControl) or distribute from a fixed supply.

Universal Airdrop Factory Contract

UniversalAirdropFactory.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-claimable-airdrop/contracts/src/UniversalAirdropFactory.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "./UniversalAirdrop.sol";
import "./Token.sol";

contract UniversalAirdropFactory {
    event AirdropCreated(
        address indexed airdrop,
        address indexed owner,
        uint256 totalAmount,
        bytes32 merkleRoot
    );

    function createAirdrop(
        uint256 _totalAmount,
        bytes32 _merkleRoot
    ) external returns (address) {
        // Deploy new Token contract
        Token token = new Token("Unicorn Token", "UNICORN");

        // Mint tokens to this factory
        token.mint(address(this), _totalAmount);

        // Deploy new UniversalAirdrop contract
        UniversalAirdrop airdrop = new UniversalAirdrop(
            address(token),
            _merkleRoot,
            msg.sender
        );

        // Transfer tokens to airdrop contract
        require(
            token.transfer(address(airdrop), _totalAmount),
            "Token transfer failed"
        );

        emit AirdropCreated(
            address(airdrop),
            msg.sender,
            _totalAmount,
            _merkleRoot
        );

        return address(airdrop);
    }
}
```

**Key Features:**

-   Deploys both the token and airdrop contracts in one transaction
-   Mints the required tokens automatically
-   Transfers tokens to the airdrop contract
-   Emits an event with the deployed addresses

Universal Airdrop Contract

UniversalAirdrop.sol

[Open in Remix](https://remix.ethereum.org/#url=https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-claimable-airdrop/contracts/src/UniversalAirdrop.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract UniversalAirdrop is Ownable, ReentrancyGuard {
    IERC20 public immutable token;
    bytes32 public merkleRoot;

    mapping(address => bool) public hasClaimed;

    event Claimed(address indexed claimer, uint256 amount);
    event MerkleRootUpdated(bytes32 newRoot);

    constructor(
        address _token,
        bytes32 _merkleRoot,
        address _owner
    ) Ownable(_owner) {
        token = IERC20(_token);
        merkleRoot = _merkleRoot;
    }

    function claim(
        uint256 amount,
        bytes32[] calldata proof
    ) external nonReentrant {
        require(!hasClaimed[msg.sender], "Already claimed");

        bytes32 leaf = keccak256(
            bytes.concat(keccak256(abi.encode(msg.sender, amount)))
        );

        require(
            MerkleProof.verify(proof, merkleRoot, leaf),
            "Invalid proof"
        );

        hasClaimed[msg.sender] = true;

        require(
            token.transfer(msg.sender, amount),
            "Token transfer failed"
        );

        emit Claimed(msg.sender, amount);
    }

    function updateMerkleRoot(bytes32 newRoot) external onlyOwner {
        merkleRoot = newRoot;
        emit MerkleRootUpdated(newRoot);
    }

    function withdrawTokens(address to, uint256 amount) external onlyOwner {
        require(token.transfer(to, amount), "Transfer failed");
    }
}
```

**Key Features:**

-   Uses OpenZeppelin's `MerkleProof.verify()` for efficient proof verification
-   Tracks claims with a mapping to prevent double-claiming
-   Includes reentrancy protection
-   Allows owner to update Merkle root for future rounds
-   Provides emergency withdrawal function

## Understanding the Contracts

### Key Concepts

**1\. Merkle Proof Verification**

The contract uses OpenZeppelin's standard Merkle proof implementation:

```solidity
bytes32 leaf = keccak256(
    bytes.concat(keccak256(abi.encode(msg.sender, amount)))
);

require(
    MerkleProof.verify(proof, merkleRoot, leaf),
    "Invalid proof"
);
```

**Important:** the leaf encoding used in the frontend and the leaf hash computed in the contract must match exactly. This tutorial uses OpenZeppelin `StandardMerkleTree` for proofs and OpenZeppelin `MerkleProof.verify()` in the contract so the hashing/ordering stays consistent.

**2\. Universal Executor Accounts (UEAs)**

When a user from Ethereum, Solana, or any other chain interacts with this contract:

-   Their wallet signs a transaction on their origin chain
-   Push Chain creates/uses their deterministic UEA address
-   The UEA executes the `claim()` function
-   `msg.sender` in the contract is the UEA address

This means the Merkle tree must contain **UEA addresses**, not origin addresses.

**3\. Address Conversion Process**

```typescript
// Convert origin address to UEA
const account = PushChain.utils.account.toUniversal(originAddress, {
  chain: originChain,
});

const executorAddress =
  await PushChain.utils.account.deriveExecutorAccount(account);
```

This deterministic conversion ensures:

-   Same origin address always maps to same UEA
-   Works across all supported chains
-   No registration or setup required

## Live Playground

Now let's build a complete frontend that handles the entire airdrop flow. This example demonstrates all four steps: adding recipients, generating Merkle tree, deploying contracts, and claiming tokens.

The deployed contracts are available on Push Chain Testnet:

> **Factory Contract:** [0xf5059a5D33d5853360D16C683c16e67980206f36](https://donut.push.network/address/0xf5059a5D33d5853360D16C683c16e67980206f36?tab=contract)

**Steps to interact:**

1.  **Step 1**: Add wallet addresses from different chains to your airdrop list
2.  **Step 2**: Generate Merkle tree and get the root hash
3.  **Step 3**: Deploy the airdrop contract with the Merkle root
4.  **Step 4**: Connect with a claimer wallet and claim tokens

REACT PLAYGROUND

Copy playground link

Copy code

LIVE APP PREVIEW

## Understanding the Code

### Step 1: Address Conversion

```typescript
const account = PushChain.utils.account.toUniversal(entry.address, {
  chain: entry.chain,
});

const executorAddress =
  await PushChain.utils.account.deriveExecutorAccount(account);
```

This converts each origin address to its deterministic UEA address on Push Chain. The same origin address will always produce the same UEA address.

### Step 2: Merkle Tree Generation

```typescript
const values = convertedAddresses.map(([address, amount]) => [address, amount]);
const tree = StandardMerkleTree.of(values, ['address', 'uint256']);
const root = tree.root;
```

We use OpenZeppelin's `StandardMerkleTree` which implements the same double-hashing pattern as the contract's `MerkleProof.verify()`.

### Step 3: Contract Deployment

```typescript
const txData = PushChain.utils.helpers.encodeTxData({
  abi: factoryABI,
  functionName: 'createAirdrop',
  args: [totalAmount, merkleRoot],
});

const tx = await pushChainClient.universal.sendTransaction({
  to: FACTORY_ADDRESS,
  data: txData,
  value: BigInt(0),
});
```

The factory deploys both the token and airdrop contracts, mints tokens, and transfers them to the airdrop contract.

### Step 4: Claiming Tokens

```typescript
// Generate proof for the claimer
let proof = [];
for (const [i, v] of merkleTree.tree.entries()) {
  if (v[0].toLowerCase() === claimAddr.toLowerCase()) {
    proof = merkleTree.tree.getProof(i);
    break;
  }
}

// Encode and send claim transaction
const txData = PushChain.utils.helpers.encodeTxData({
  abi: UniversalAirdropABI,
  functionName: 'claim',
  args: [amount, proof],
});

const tx = await pushChainClient.universal.sendTransaction({
  to: deployedAirdropAddress,
  data: txData,
  value: BigInt(0),
});
```

The claimer's UEA executes the `claim()` function with their proof, and the contract verifies and distributes tokens.

## Source Code

## What We Achieved

In this tutorial, we built a complete universal airdrop system:

-   **Converted addresses** from multiple chains to deterministic UEA addresses
-   **Generated Merkle trees** for efficient on-chain verification
-   **Deployed contracts** that mint and distribute tokens automatically
-   **Built a claim UI** that works seamlessly across all chains

## Key Takeaways

**1\. One Deployment, Infinite Reach**

-   Deploy your airdrop contract once on Push Chain
-   Users from any chain can claim with their existing wallet
-   No multi-chain deployment complexity

**2\. Universal Executor Accounts**

-   Every address on every chain has a deterministic UEA on Push Chain
-   UEAs enable cross-chain interactions without bridges
-   Same origin address always maps to the same UEA

**3\. Standard Merkle Proofs**

-   Uses OpenZeppelin's battle-tested implementation
-   No custom cryptography or modifications needed
-   Efficient on-chain verification

**4\. Seamless User Experience**

-   Users never leave their preferred chain
-   No token bridging or chain-switching required
-   One click to claim from any wallet

## What's Next?

Now that you've built a universal airdrop system, you can extend this pattern to create more advanced token distribution mechanisms.

**Understanding the Foundation:**

-   Every claim was executed through a [Universal Executor Account (UEA)](/push-chain-website/pr-preview/pr-1233/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account/)
-   The same UEA derivation enables all universal interactions on Push Chain
-   Merkle proofs provide efficient verification for large-scale distributions

**Advanced Patterns to Explore:**

-   **Multi-round airdrops** with updatable Merkle roots
-   **Vesting schedules** with time-locked claims
-   **Conditional claims** based on on-chain activity
-   **Cross-chain governance** token distribution
-   **Staking rewards** distributed to any chain

The possibilities are endless when you build universal!
