# Tutorial: Universal Airdrop

Source: https://push.org/docs/chain/tutorials/token-systems/tutorial-universal-airdrop/

## Overview

Airdrop tokens to users across multiple chains in a single transaction using Push Chain.

## Write the Contracts

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

## Write the Contracts

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

## Write the Contracts

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

## Key Concepts

```solidity
bytes32 leaf = keccak256(
    bytes.concat(keccak256(abi.encode(msg.sender, amount)))
);

require(
    MerkleProof.verify(proof, merkleRoot, leaf),
    "Invalid proof"
);
```

## Key Concepts

```typescript
// Convert origin address to UEA
const account = PushChain.utils.account.toUniversal(originAddress, {
  chain: originChain,
});

const executorAddress =
  await PushChain.utils.account.convertOriginToExecutor(account);
```

## Step 1: Address Conversion

```typescript
const account = PushChain.utils.account.toUniversal(entry.address, {
  chain: entry.chain,
});

const executorAddress =
  await PushChain.utils.account.convertOriginToExecutor(account);
```

## Step 2: Merkle Tree Generation

```typescript
const values = convertedAddresses.map(([address, amount]) => [address, amount]);
const tree = StandardMerkleTree.of(values, ['address', 'uint256']);
const root = tree.root;
```

## Step 3: Contract Deployment

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

## Step 4: Claiming Tokens

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

## SDK Methods Used

- `PushChain.utils.account.toUniversal`
- `pushChainClient.universal.sendTransaction`
