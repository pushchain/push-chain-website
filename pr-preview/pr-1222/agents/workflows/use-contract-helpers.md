# Use Contract Helpers

## Purpose

Interact with Push Chain's deployed helper contracts - primarily the `UEAFactory` - to detect whether an address is a Universal Executor Account (UEA) or a native Push Chain EOA, map between origin wallets and their Push Chain execution accounts, and compute deterministic UEA addresses.

## When to Use

- In smart contracts: checking if `msg.sender` is a UEA (cross-chain user) or a native Push Chain account
- Determining the origin chain and address of an inbound cross-chain user
- Off-chain scripts: resolving which Push Chain address belongs to a given external wallet
- Computing the deterministic UEA address for a given external account before deployment

> For **off-chain** UEA/CEA derivation from TypeScript (backend scripts, frontend), use `PushChain.utils.account.deriveExecutorAccount(universalAccount, options?)` - no contract interaction needed. See [Use Utility Functions](https://push.org/agents/workflows/use-utility-functions.md). The UEAFactory below is for **on-chain Solidity** identity resolution.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Smart contract env | Solidity ≥0.8.0 |
| Off-chain env | Ethers.js or Viem connected to `https://evm.donut.rpc.push.org/` |
| UEAFactory address | `0x00000000000000000000000000000000000000eA` (deployed on Push Chain) |

## Contract Reference

### UEAFactory - Deployed Address

```
0x00000000000000000000000000000000000000eA
```

### Interface

```solidity
struct UniversalAccountId {
    string chainNamespace; // e.g., "eip155" or "solana"
    string chainId;        // e.g., "11155111" for Ethereum Sepolia
    bytes  owner;          // EVM: 20-byte packed address - address(bytes20(owner))
                           // Solana: 32-byte base58 pubkey - bs58.encode(ethers.getBytes(owner))
}

interface IUEAFactory {
    function getOriginForUEA(address addr)
        external view
        returns (UniversalAccountId memory account, bool isUEA);

    function getUEAForOrigin(UniversalAccountId memory _id)
        external view
        returns (address uea, bool isDeployed);
}
```

## Steps

### On-Chain: Detect If Caller Is UEA or Native Account

1. **Import the interface**

   Option A - from Push Chain Core Repository:
   ```solidity
   import "push-chain-core-contracts/src/Interfaces/IUEAFactory.sol";
   ```

   Option B - define manually:
   ```solidity
   pragma solidity ^0.8.0;

   struct UniversalAccountId {
       string chainNamespace;
       string chainId;
       bytes  owner;
   }

   interface IUEAFactory {
       function getOriginForUEA(address addr) external view
           returns (UniversalAccountId memory account, bool isUEA);
       function getUEAForOrigin(UniversalAccountId memory _id) external view
           returns (address uea, bool isDeployed);
   }
   ```

2. **Call `getOriginForUEA` in your contract**
   ```solidity
   address constant FACTORY = 0x00000000000000000000000000000000000000eA;

   function checkCallerType() public view returns (bool) {
       (UniversalAccountId memory account, bool isUEA) =
           IUEAFactory(FACTORY).getOriginForUEA(msg.sender);

       if (isUEA) {
           // msg.sender is a cross-chain user from:
           // account.chainNamespace + ":" + account.chainId
           // account.owner = their address as bytes
       } else {
           // msg.sender is a native Push Chain EOA
       }
       return isUEA;
   }
   ```

### On-Chain: Get UEA Address for a Known Origin

```solidity
function getUEAAddress(
    string memory chainNamespace,
    string memory chainId,
    bytes  memory ownerAddress
) public view returns (address uea, bool isDeployed) {
    UniversalAccountId memory id = UniversalAccountId({
        chainNamespace: chainNamespace,
        chainId: chainId,
        owner: ownerAddress
    });
    return IUEAFactory(0x00000000000000000000000000000000000000eA).getUEAForOrigin(id);
}
```

### Off-Chain: Check Origin of Any Push Chain Address

```typescript
import { ethers } from 'ethers';

const RPC_URL       = 'https://evm.donut.rpc.push.org/';
const FACTORY_ADDR  = '0x00000000000000000000000000000000000000eA';

const ABI = [
  'function getOriginForUEA(address addr) view returns (tuple(string chainNamespace, string chainId, bytes owner) account, bool isUEA)',
];

async function getOrigin(address: string) {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const factory  = new ethers.Contract(FACTORY_ADDR, ABI, provider);

  const [account, isUEA] = await factory.getOriginForUEA(address);
  
  console.log('Is UEA:', isUEA);
  if (isUEA) {
    console.log('Chain Namespace:', account.chainNamespace); // e.g. "eip155"
    console.log('Chain ID:', account.chainId);               // e.g. "11155111"
    console.log('Owner (hex):', account.owner);
  }
  return { account, isUEA };
}

getOrigin('0xbCfaD05E5f19Ae46feAab2F72Ad9977BC239b395');
```

### Off-Chain: Decode Solana Owner Address

```typescript
import { bs58 } from 'bs58';
import { ethers } from 'ethers';

const [account, isUEA] = await factory.getOriginForUEA(address);

if (isUEA && account.chainNamespace === 'solana') {
  const bytesAddress = ethers.getBytes(account.owner);
  const base58Address = bs58.encode(bytesAddress);
  console.log('Solana (Base58) Address:', base58Address);
}
```

## Expected Output

```typescript
// getOriginForUEA for a cross-chain user:
{
  account: {
    chainNamespace: 'eip155',
    chainId: '11155111',
    owner: '0xC8AE31cF444CAB447921277c4DcF65128d5B25a8'
  },
  isUEA: true
}

// getOriginForUEA for a native Push Chain EOA:
{
  account: { chainNamespace: '', chainId: '', owner: '0x' },
  isUEA: false
}
```

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `call revert` on `getOriginForUEA` | Address doesn't exist on Push Chain | Ensure address has interacted with Push Chain first |
| Solana address garbled | Returned as hex, not base58 | Use `bs58.encode(ethers.getBytes(owner))` to decode |
| `factory is not a contract` | Wrong address or wrong network | Verify you're on Push Chain (`chainId: 42101`) |
| `forge install` fails | No git available | Run in a git-initialized project directory |

## Agent Notes

- **UEA Factory address is deterministic**: `0x00000000000000000000000000000000000000eA` - same on all Push Chain environments.
- **`account.owner` byte layout**: EVM chains return a 20-byte packed address - decode with `address(bytes20(account.owner))`. Solana returns a 32-byte base58 public key - decode off-chain with `bs58.encode(ethers.getBytes(account.owner))`.
- **`isUEA = false` means native EOA**: not all Push Chain addresses are UEAs; some are native accounts with no cross-chain origin.
- **`getUEAForOrigin` works before UEA is deployed**: it returns the deterministic address even if `isDeployed = false`.

## MCP Mapping Candidates

- `resolve_helper_contract_address` - Return UEAFactory address for current network
- `call_origin_detection_function` - Invoke `getOriginForUEA` for a given address
- `parse_helper_response` - Decode `UniversalAccountId` struct including non-EVM addresses
