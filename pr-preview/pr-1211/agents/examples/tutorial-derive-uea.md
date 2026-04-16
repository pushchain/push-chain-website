# Tutorial: Derive Universal Executor Account (UEA)

Source: https://push.org/docs/chain/tutorials/power-features/tutorial-derive-uea/

## Overview

Programmatically derive the UEA address for any wallet without deploying it first.

## Basic UEA Derivation

```typescript
import { PushChain } from '@pushchain/core';

// Convert origin address to Universal Account
const account = PushChain.utils.account.toUniversal(
  '0xYourEthereumAddress', 
  {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
  }
);

// Derive the UEA address
const executorAddress = await PushChain.utils.account.convertOriginToExecutor(account);

console.log('UEA Address:', executorAddress.address);
// Output: 0x... (deterministic Push Chain address)
```

## Interface

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct UniversalAccountId {
    string chainNamespace;
    string chainId;
    bytes owner;
}

interface IUEAFactory {
    function getUEAForOrigin(
        UniversalAccountId memory account
    ) external view returns (address uea, bool isDeployed);
    
    function getOriginForUEA(
        address uea
    ) external view returns (UniversalAccountId memory, bool);
}
```

## Example Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "push-chain-core-contracts/src/Interfaces/IUEAFactory.sol";

contract UEALookup {
    IUEAFactory constant FACTORY = 
        IUEAFactory(0x00000000000000000000000000000000000000eA);

    // Get UEA address for any origin wallet
    function getUEAForUser(
        string memory chainNamespace,
        string memory chainId,
        bytes memory owner
    ) public view returns (address uea, bool isDeployed) {
        UniversalAccountId memory account = UniversalAccountId({
            chainNamespace: chainNamespace,
            chainId: chainId,
            owner: owner
        });
        
        return FACTORY.getUEAForOrigin(account);
    }
    
    // Get origin wallet info from UEA address
    function getOriginForUEA(address ueaAddress) 
        public view returns (
            string memory chainNamespace,
            string memory chainId,
            bytes memory owner,
            bool exists
        ) 
    {
        (UniversalAccountId memory account, bool found) = 
            FACTORY.getOriginForUEA(ueaAddress);
        
        return (
            account.chainNamespace,
            account.chainId,
            account.owner,
            found
        );
    }
    
    // Check if a UEA is deployed
    function isUEADeployed(
        string memory chainNamespace,
        string memory chainId,
        bytes memory owner
    ) public view returns (bool) {
        UniversalAccountId memory account = UniversalAccountId({
            chainNamespace: chainNamespace,
            chainId: chainId,
            owner: owner
        });
        
        (, bool deployed) = FACTORY.getUEAForOrigin(account);
        return deployed;
    }
}
```

## Usage Example

```solidity
// Get UEA for an Ethereum Sepolia wallet
(address uea, bool deployed) = getUEAForUser(
    "eip155",
    "11155111",
    abi.encodePacked(0xYourEthereumAddress)
);

// Get UEA for a Solana wallet
(address solanaUEA, bool deployed) = getUEAForUser(
    "solana",
    "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    abi.encodePacked("Base58SolanaAddress")
);
```

## 1. Airdrop Systems

```typescript
const recipients = [
  { address: '0xEth...', chain: ETHEREUM_SEPOLIA },
  { address: '7xSol...', chain: SOLANA_DEVNET },
];

const ueas = await Promise.all(
  recipients.map(async (r) => {
    const account = PushChain.utils.account.toUniversal(r.address, { chain: r.chain });
    return await PushChain.utils.account.convertOriginToExecutor(account);
  })
);
```

## 2. Cross-Chain Identity

```solidity
function verifyUser(address uea) public view returns (bool) {
    (UniversalAccountId memory origin, bool exists) = 
        FACTORY.getOriginForUEA(uea);
    
    return exists && isAllowedChain(origin.chainNamespace);
}
```

## 3. Universal Allowlists

```solidity
mapping(address => bool) public allowlist;

function addToAllowlist(
    string memory chainNamespace,
    string memory chainId,
    bytes memory owner
) external onlyOwner {
    (address uea, ) = FACTORY.getUEAForOrigin(
        UniversalAccountId(chainNamespace, chainId, owner)
    );
    allowlist[uea] = true;
}
```

## SDK Methods Used

- `PushChain.utils.account.toUniversal`
