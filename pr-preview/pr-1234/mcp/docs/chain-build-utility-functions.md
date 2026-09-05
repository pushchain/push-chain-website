---
title: "Utility Functions"
url: "https://pushchain.github.io/docs/chain/build/utility-functions/"
section: "build"
lastUpdated: "2026-09-05T13:21:46Z"
description: "Utility Functions | Build | Push Chain Docs"
---

# Utility Functions

## Overview

This section covers the most commonly used helpers in the Push Chain Core SDK to simplify common workflows.

## Helper Utilities

### Parse Units

**_`PushChain.utils.helpers.parseUnits(value, exponent): bigint`_**

Converts a human-readable token amount into its smallest unit representation (bigint). It multiplies the given value by 10^decimals, ensuring amounts are safe for on-chain use.

Commonly used when preparing transaction parameters (e.g., converting `1.5` into `1500000000000000000`, similar to how you convert ETH to wei, PC to uPC, or any other tokens to its smallest denominator).

```typescript
const result = PushChain.utils.helpers.parseUnits('1.5', { decimals: 18 });
// variation: const result = PushChain.utils.helpers.parseUnits('1.5', 18);

// Returns: 1500000000000000000n (1.5 PC in uPC)
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`value`_ | `string` | The string representation of the number to parse. Can include decimals (e.g., `"1.5"`, `"420"`, `"0.1"`). |
| _`exponent`_ | `number | { decimals: number }` | Number of decimal places to scale by. Provide either a number (e.g., `18`) or an object with `decimals`. Must be a non-negative integer. Examples: `18` for PC/ETH, `6` for USDC, `8` for BTC. |

Returns \`value\` <bigint>

```typescript
// bigint - the scaled integer value
1500000000000000000n
```

Live Playground: Parse Units for Common Token Scenarios

VIRTUAL NODE IDE

Copy playground link

Copy code

### Format Units

**_`PushChain.utils.helpers.formatUnits(value, {options}): string`_**

Converts a raw token amount in smallest units (bigint) into a human-readable decimal string. It divides the given value by 10^decimals, making it easy to display amounts for users.

Commonly used in UI or logs (e.g., turning `1500000000000000000` into `1.5` or any token from smallest unit to its human-readable value).

```typescript
const result = PushChain.utils.helpers.formatUnits('1500000000000000000', { decimals: 18 });
// variation: const result = PushChain.utils.helpers.formatUnits('1500000000000000000', 18);

// Returns: 1.5 (1.5 PC in uPC)
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`value`_ | `bigint | string` | Raw amount in smallest units (e.g., `'1500000000000000000'` for 1.5 assuming `18` decimals). |
| _`options.decimals`_ | `number` | The number of decimal places to scale by. Must be a non-negative integer. For example, use `18` for PC or ETH, `6` for USDC, `8` for BTC. |
| `options.precision` | `number` | The number of precision to scale by, will round up the value. Must be a non-negative integer. For example, use `4` for returning 4 digits after the decimal. |

Returns \`value\` <string>

```typescript
// string - human readable value
1.5
```

Live Playground: Format Units for Common Token Scenarios

VIRTUAL NODE IDE

Copy playground link

Copy code

### Encode Transaction Data

**_`PushChain.utils.helpers.encodeTxData({abi_or_idl, functionName, args}): string`_**

-   EVM (ABI)
-   Solana (IDL)

```typescript
const encodedData = PushChain.utils.helpers.encodeTxData({
  abi: 'smart_contract_abi',
  functionName: 'functionName',
  args: []
});
```

```typescript
const encodedData = PushChain.utils.helpers.encodeTxData({
  idl: 'smart_contract_idl',
  functionName: 'receive_sol',
  args: [BigInt(0)],
});
```

`encodeTxData` produces chain-appropriate calldata based on the shape of `abi` or `idl`.

These `Arguments` are mandatory

| **Arguments** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| _`abi`_ | _`idl`_ | `any[]` | \- | Either an EVM ABI array or an Anchor IDL object. The input shape determines which encoding is produced. |
| _`functionName`_ | `string` | \- | The function (EVM) or instruction (Solana) name to encode. Both `snake_case` and `camelCase` are accepted and matched against the IDL. |
| `args` | `any[]` | `[]` | Positional arguments. Use `BigInt` for `u64`/`u128`; 0x-hex 32-byte strings are auto-converted to Solana `PublicKey` when the IDL declares a `pubkey` arg. |

Returns \`encodedData\` <string>

```typescript
// encodedData string - the encoded function call data
'0xd09de08a';
```

Live Playground: Encode Transaction Data for Smart Contract Function

-   EVM (ABI)
-   Solana (IDL)

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

## Chain Utilities

### Get Chain Namespace from Chain Name

**_`PushChain.utils.chains.getChainNamespace(chainName): string`_**

Every external chain is represented as a particular string on Push Chain. You can see the list of supported chains in the [Chain Configuration](/push-chain-website/pr-preview/pr-1234/docs/chain/setup/chain-config/#universal-chain-namespace) section.

```typescript
const chainName = PushChain.utils.chains.getChainNamespace('PUSH_TESTNET_DONUT');
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`name`_ | `string` | The chain name to convert to chain namespace. Eg: `PUSH_TESTNET_DONUT` converts to `eip155:42101`, `ETHEREUM_SEPOLIA` converts to `eip155:11155111`. |

Returns \`chainNamespace\` <string>

```typescript
// chainNamespace string
'eip155:42101';

// NOTE: returns undefined if chainName is unsupported
```

Live Playground: Get Chain Namespace from Chain Name

VIRTUAL NODE IDE

Copy playground link

Copy code

### Get Chain Name from Chain Namespace

**_`PushChain.utils.chains.getChainName(chainNamespace): string`_**

Every external chain is represented as a particular string on Push Chain. You can see the list of supported chains in the [chain configuration](/push-chain-website/pr-preview/pr-1234/docs/chain/setup/chain-config/#universal-chain-namespace) section.

```typescript
const chainName = PushChain.utils.chains.getChainName('eip155:42101');
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`namespace`_ | `string` | The chain namespace to convert to chain name. Eg: `eip155:42101` converts to `PUSH_TESTNET_DONUT`, `eip155:11155111` converts to `ETHEREUM_SEPOLIA`. |

Returns \`chainName\` <string>

```typescript
// chainName string
'PUSH_TESTNET_DONUT';

// NOTE: returns undefined if chainNamespace is unsupported
```

Live Playground: Get Chain Name from Chain Namespace

VIRTUAL NODE IDE

Copy playground link

Copy code

### Get Supported Chains By Name

**_`PushChain.utils.chains.getSupportedChainsByName(pushNetwork): { chains: [] }`_**

Returns the list of supported chain names (human-readable strings) for a given Push Network.

```typescript
const chains = PushChain.utils.chains.getSupportedChainsByName(PushChain.CONSTANTS.PUSH_NETWORK.TESTNET);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`pushNetwork`_ | `PushChain.CONSTANTS.PUSH_NETWORK` | Push Chain network to retrieve list of supported chain names from. For example: `PushChain.CONSTANTS.PUSH_NETWORK.TESTNET` PushChain.CONSTANTS.PUSH\_NETWORK
`PushChain.CONSTANTS.PUSH_NETWORK.TESTNET``PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET`

 |

Returns \`{ chains }\` <object>

```typescript
// { chains } object - returns human-readable chain names as strings
{
  chains: [
    'PUSH_TESTNET_DONUT',
    'ETHEREUM_SEPOLIA',
    'ARBITRUM_SEPOLIA',
    'BASE_SEPOLIA',
    'BNB_TESTNET',
    'SOLANA_DEVNET',
    // ...
  ]
}

// NOTE: returns empty chains array if pushNetwork is unsupported
```

Live Playground: Get Supported Chains By Name for a given Push Network

VIRTUAL NODE IDE

Copy playground link

Copy code

### Get Supported Chains

**_`PushChain.utils.chains.getSupportedChains(pushNetwork): { chains: [] }`_**

Returns the list of chains supported for a given Push Network.

```typescript
const chains = PushChain.utils.chains.getSupportedChains(PushChain.CONSTANTS.PUSH_NETWORK.TESTNET);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`pushNetwork`_ | `PushChain.CONSTANTS.PUSH_NETWORK` | Push Chain network to retrieve list of supported chains from. For example: `PushChain.CONSTANTS.PUSH_NETWORK.TESTNET` PushChain.CONSTANTS.PUSH\_NETWORK
`PushChain.CONSTANTS.PUSH_NETWORK.TESTNET``PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET`

 |

Returns \`{ chains }\` <object>

```typescript
// { chains } object
{
  chains: [
    PushChain.CONSTANTS.CHAIN.PUSH_TESTNET,
    PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA,
    PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA,
    PushChain.CONSTANTS.CHAIN.BNB_TESTNET,
    PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    // ...
  ]
}

// NOTE: returns empty chains array if pushNetwork is unsupported
```

Live Playground: Get Supported Chains for a given Push Network

VIRTUAL NODE IDE

Copy playground link

Copy code

## Account Utilities

### Convert to Universal Account

**_`PushChain.utils.account.toUniversal(address, {options}): <UniversalAccount>`_**

```typescript
const account = PushChain.utils.account.toUniversal(address, {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`address`_ | `string` | An address string (e.g., `0xabc...`). |
| _`options.chain`_ | `CHAIN` | The target chain for the signer. For example: `PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT` PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_MAINNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.PUSH_LOCALNET``PushChain.CONSTANTS.CHAIN.ETHEREUM_MAINNET``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_MAINNET``PushChain.CONSTANTS.CHAIN.SOLANA_TESTNET``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |

Returns \`UniversalAccount\` <object>

```typescript
// UniversalAccount object
{
  chain: 'eip155:11155111',
  address: '0xD8d6aF611a17C236b13235B5318508FA61dE3Dba'
}
```

Live Playground: Convert Ethereum Sepolia Address to UniversalAccount

VIRTUAL NODE IDE

Copy playground link

Copy code

### Convert to Chain-Agnostic Address

**_`PushChain.utils.account.toChainAgnostic(address, {options}): string`_**

```typescript
const chainAgnosticAddress = PushChain.utils.account.toChainAgnostic(address, {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`address`_ | `string` | An address string (e.g., `0xabc...`). |
| _`options.chain`_ | `CHAIN` | The target chain for the signer. For example: `PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT` PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_MAINNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.PUSH_LOCALNET``PushChain.CONSTANTS.CHAIN.ETHEREUM_MAINNET``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_MAINNET``PushChain.CONSTANTS.CHAIN.SOLANA_TESTNET``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |

Returns \`ChainAgnosticAddress\` <string>

```typescript
// Chain Agnostic Address
'eip155:11155111:0xD8d6aF611a17C236b13235B5318508FA61dE3Dba';
```

Live Playground: Convert Ethereum Sepolia address to chain agnostic address

VIRTUAL NODE IDE

Copy playground link

Copy code

### Convert from Chain-Agnostic to Universal Account

**_`PushChain.utils.account.fromChainAgnostic(chainAgnosticAddress): <UniversalAccount>`_**

```typescript
const account = PushChain.utils.account.fromChainAgnostic(chainAgnosticAddress);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`chainAgnosticAddress`_ | `string` | A full chain agnostic address string (e.g., `eip155:11155111:0x35B84d6848D16415177c64D64504663b998A6ab4`). |

Returns \`UniversalAccount\` <object>

```typescript
// UniversalAccount object: { chain: string, address: string }
{
  chain: 'eip155:11155111',
  address: '0xD8d6aF611a17C236b13235B5318508FA61dE3Dba'
}
```

Live Playground: Convert Ethereum Sepolia chain agnostic address to UniversalAccount

VIRTUAL NODE IDE

Copy playground link

Copy code

### Derive Executor Account

**_`PushChain.utils.account.deriveExecutorAccount(universalAccount, { options? }): Promise<{ address: string, deployed?: boolean }>`_**

Derives the execution account for a given input account. This function supports multiple derivation flows based on the input and options provided.

**Use Cases:**

-   **UOA → UEA**: Derive a Universal Executor Account on Push Chain from a Universal Origin Account
-   **Push account / UOA → CEA**: Derive a Chain Executor Account on an external chain from a Push Chain account or UOA
-   **Push-native account**: Returns the same account if it's already a Push Chain native account

```typescript
// Derive UEA from UOA
const universalAccount = PushChain.utils.account.toUniversal(
  '0xD8d6aF611a17C236b13235B5318508FA61dE3Dba',
  { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }
);
const result = await PushChain.utils.account.deriveExecutorAccount(universalAccount);

// Derive UEA from Solana account
const solanaAccount = PushChain.utils.account.toUniversal(
  'EUYcfSUScdFgKMbB3rRdgRZwXmcxY7QCRQa2JwrchP1Q',
  { chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET }
);
const ueaResult = await PushChain.utils.account.deriveExecutorAccount(solanaAccount);

// Derive CEA from Push account
const pushAccount = PushChain.utils.account.toUniversal(
  '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5',
  { chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET }
);
const ceaResult = await PushChain.utils.account.deriveExecutorAccount(
  pushAccount,
  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
);

// Derive CEA from Solana account that will be there on BNB Testnet
const ceaSolanaResult = await PushChain.utils.account.deriveExecutorAccount(
  solanaAccount,
  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| _`universalAccount`_ | `UniversalAccount` | \- | UniversalAccount object created via `toUniversal()`. Represents any blockchain account in a universal format. |
| `options.chain` | `CHAIN` | `undefined` | Optional. When provided, derives a Chain Executor Account (CEA) on the specified external chain. Use `PushChain.CONSTANTS.CHAIN` values. PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.BNB_TESTNET``PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA``PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |
| `options.skipNetworkCheck` | `boolean` | `false` | When `true`, performs deterministic derivation only without checking deployment status. When `false`, includes deployment/existence check. |

Returns \`{ address, deployed? }\` <object>

```typescript
// Response object
{
  address: '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5',
  deployed: true  // Only included when skipNetworkCheck is false
}
```

Live Playground: Derive Executor Account

VIRTUAL NODE IDE

Copy playground link

Copy code

### Resolve Controller Account

**_`PushChain.utils.account.resolveControllerAccount(account, { options? }): Promise<{ accounts: Array<AccountInfo> }>`_**

Resolves the controller identity behind an execution account. This function supports recursive resolution to trace back to the original Universal Origin Account (UOA).

**Use Cases:**

-   **UEA → UOA**: Resolve the Universal Origin Account from a Universal Executor Account
-   **CEA → Push account → UOA**: Resolve through Chain Executor Account to Push account, then to UOA if applicable
-   **Recursive resolution**: Automatically follows the chain of derivation back to the controller identity

```typescript
// Resolve UOA from UEA
const result = await PushChain.utils.account.resolveControllerAccount('0xUEA...');

// Resolve from CEA with chain context
const ceaResult = await PushChain.utils.account.resolveControllerAccount(
  '0xCEA...',
  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| _`account`_ | `string` | \- | Executor account to resolve. Can be a UEA, CEA, or Push Chain account address. |
| `options.chain` | `CHAIN` | `undefined` | Required for CEA context. Specifies which chain the CEA is deployed on. Use `PushChain.CONSTANTS.CHAIN` values. PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.BNB_TESTNET``PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA``PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |
| `options.skipNetworkCheck` | `boolean` | `false` | When `true`, performs deterministic resolution only without checking existence. When `false`, includes existence check. |

Returns \`{ accounts }\` <object>

```typescript
// Example 1: Resolving CEA that has UEA with UOA controller
{
  accounts: [
    {
      chain: 'eip155:42101',
      chainName: 'PUSH_TESTNET_DONUT',
      address: '0x2Fd904d6f2C0b34d58426C8Ae9c5267E845CE98f',
      type: 'uea',
      exists: true
    },
    {
      chain: 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
      chainName: 'SOLANA_DEVNET',
      address: '72JBejJFXrRKpQ69Hmaqr7vWJr6pdZXFEL6jt3sadsXU',
      type: 'uoa',
      exists: true,
      role: 'controller'
    }
  ]
}

// Example 2: Resolving CEA from Push Account (EOA) or smart contract
{
  accounts: [
    {
      chain: 'eip155:42101',
      chainName: 'PUSH_TESTNET_DONUT',
      address: '0x2Fd904d6f2C0b34d58426C8Ae9c5267E845CE98f',
      type: 'uoa',
      exists: true,
      role: 'controller'
    }
  ]
}
```

| Field | Type | Description |
| --- | --- | --- |
| `accounts` | `Array` | Array of account objects in the resolution chain |
| `chain` | `string` | Chain namespace identifier (e.g., `eip155:42101`, `solana:EtWTRABZaYq...`) |
| `chainName` | `string` | Human-readable chain constant name (e.g., `PUSH_TESTNET_DONUT`, `SOLANA_DEVNET`) |
| `address` | `string` | Account address on the chain |
| `type` | `string` | Account type: `uea`, `uoa`, or `cea` |
| `exists` | `boolean` | Whether the account exists on-chain |
| `role` | `string` | `controller` indicates the controlling account in the resolution chain |

Live Playground: Resolve Controller Account

VIRTUAL NODE IDE

Copy playground link

Copy code

## Signer Utilities

### Create Universal Signer from Keypair

**_`PushChain.utils.signer.toUniversalFromKeypair(keypair, {options}): Promise<UniversalSigner>`_**

```typescript
const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(
  keypair,
  {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
  }
);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`keypair`_ | `Keypair` | A keypair object from one of the supported libraries (ethers v5/v6, viem, or a custom UniversalSignerSkeleton) |
| _`options.chain`_ | `CHAIN` | The target chain for the signer. For example: `PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT` PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_MAINNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.PUSH_LOCALNET``PushChain.CONSTANTS.CHAIN.ETHEREUM_MAINNET``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_MAINNET``PushChain.CONSTANTS.CHAIN.SOLANA_TESTNET``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |
| _`options.library`_ | `LIBRARY` | The library to use for the signer. For example: `PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6` PushChain.CONSTANTS.LIBRARY

`PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6``PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM``PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS`

 |

Returns \`UniversalSigner\` <object>

```typescript
// UniversalSigner object
{
  account: {
    address: '0xD173b7f04D539A5794e14030c4E172B2E3df92f3',
    chain: 'eip155:11155111'
  },
  signMessage: [Function: signMessage],
  signAndSendTransaction: [Function: signAndSendTransaction],
  signTypedData: [Function: signTypedData]
}
```

Live Playground: Create Universal Signer from Keypair

-   Ethers (v6)
-   Viem
-   Solana (Web3 JS)

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

VIRTUAL NODE IDE

Copy playground link

Copy code

## Token Utilities

### Get Moveable Tokens

**_`PushChain.utils.tokens.getMoveableTokens(chainOrClient?): { tokens: [] }`_**

Commonly used to get list of supported assets that can be moved across chains. See [send universal transaction](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/#send-a-universal-transaction) for more info.

```typescript
// All supported moveable tokens across chains
const { tokens: allMoveable } = PushChain.utils.tokens.getMoveableTokens();

// Filtered for a specific chain
const { tokens: sepoliaMoveable } = PushChain.utils.tokens.getMoveableTokens(
  PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`chainOrClient`_ | `CHAIN | PushChain` | Optional. A chain enum or an initialized client to filter tokens for that chain. |

Returns \`{ tokens }\` <object>

```typescript
// tokens object { tokens: [] }
{
  tokens: [
    { chain: 'eip155:11155111', symbol: 'ETH', decimals: 18, address: '0x...' },
    { chain: 'eip155:11155111', symbol: 'USDC', decimals: 6, address: '0x...' },
    // ...
  ]
}
```

Live Playground: List moveable tokens for a specific chain

VIRTUAL NODE IDE

Copy playground link

Copy code

### Get Payable Tokens

**_`PushChain.utils.tokens.getPayableTokens(chainOrClient?): { tokens: [] }`_**

Commonly used to get list of supported assets to pay with (either for gas or token movement) across chains. See [send universal transaction](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/#send-a-universal-transaction) for more info.

```typescript
// All supported payable tokens across chains
const { tokens: allPayable } = PushChain.utils.tokens.getPayableTokens();

// Filtered for a specific chain
const { tokens: solanaDevnetPayable } = PushChain.utils.tokens.getPayableTokens(
  PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET
);
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`chainOrClient`_ | `CHAIN | PushChain` | Optional. A chain enum or an initialized client to filter tokens for that chain. |

Returns \`{ tokens }\` <object>

```typescript
// tokens object { tokens: [] }
{
  tokens: [
    { chain: 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1', symbol: 'SOL', decimals: 9, address: 'So11111111111111111111111111111111111111112' },
    { chain: 'eip155:11155111', symbol: 'USDC', decimals: 6, address: '0x...' },
    // ...
  ]
}
```

Live Playground: List payable tokens for a specific chain

VIRTUAL NODE IDE

Copy playground link

Copy code

### Get PRC-20 Address

**_`PushChain.utils.tokens.getPRC20Address(token, options?): { address, chain, symbol, decimals, network }`_**

Resolves the [synthetic PRC-20 address](/push-chain-website/pr-preview/pr-1234/docs/chain/important-concepts/#token-types-on-push-chain) for a supported origin-chain token. Accepts either a [`MoveableToken`](#get-moveable-tokens) or an object containing the origin `chain` and token `address`.

```typescript
const { address, chain, symbol, decimals, network } =
  PushChain.utils.tokens.getPRC20Address(ethMoveableToken);

// Or with explicit chain/address input
const prc20Alt = PushChain.utils.tokens.getPRC20Address({
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  address: "0x97F477B7f970D47a87B42869ceeace218106152a",
});
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`token`_ | `MoveableToken | { chain: string; address: string }` | Origin token info. Either pass a `MoveableToken` (e.g., from `getMoveableTokens()`) or provide the origin chain plus token address. |
| `options.network` | `PushChain.CONSTANTS.PUSH_NETWORK` | Override the Push network to resolve the PRC-20 on. Defaults to the network the client was initialized with. For example: `PushChain.CONSTANTS.PUSH_NETWORK.TESTNET` PushChain.CONSTANTS.PUSH\_NETWORK
`PushChain.CONSTANTS.PUSH_NETWORK.TESTNET``PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET`

 |

Returns \`PRC20Token\` <object>

```typescript
{
  address: `0x${string}`; // PRC20 contract address on Push Chain
  chain: CHAIN;           // Always CHAIN.PUSH_TESTNET_DONUT (or mainnet when live)
  symbol: string;         // e.g. 'USDC.eth', 'pETH'
  decimals: number;       // Token decimals on Push Chain
  network: PUSH_NETWORK;  // The Push network this PRC20 belongs to
}
```

Live Playground: Map origin token to PRC-20 on Push Chain

VIRTUAL NODE IDE

Copy playground link

Copy code

### Get PC-20 Address

**_`PushChain.utils.tokens.getPC20Address(address, options): Promise<PC20AddressResult>`_**

Resolves a [PC-20](/push-chain-website/pr-preview/pr-1234/docs/chain/important-concepts/#token-types-on-push-chain) token and lists every chain it is deployed on. Pass either the external wrapper or the canonical token on Push Chain, and you always get the canonical one back.

PC-20 mappings live in UniversalCore's on-chain registry rather than a static table, so this call is asynchronous and looks tokens up by address, never by symbol.

> **Note:** Synthetic PRC-20s such as `pETH` and `USDC.eth` are not PC-20s. Use [getPRC20Address()](#get-prc-20-address) for those.

```typescript
// From an external wrapper
const token = await PushChain.utils.tokens.getPC20Address('0x81E05001A1f3fB574E18c1B0b2596163c68144ae', {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});

token.address; // canonical token on Push Chain
token.registry; // every chain it is deployed on

// chain is optional — the SDK will find it
const discovered = await PushChain.utils.tokens.getPC20Address('0x81E05001A1f3fB574E18c1B0b2596163c68144ae', {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`address`_ | `string` | The external wrapper or the canonical token on Push Chain. Checksummed hex on EVM, base58 on Solana. |
| _`options.network`_ | `PushChain.CONSTANTS.PUSH_NETWORK` | The Push network to resolve the PC-20 on. For example: `PushChain.CONSTANTS.PUSH_NETWORK.TESTNET` PushChain.CONSTANTS.PUSH\_NETWORK
`PushChain.CONSTANTS.PUSH_NETWORK.TESTNET``PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET`

 |
| `options.chain` | `PushChain.CONSTANTS.CHAIN` | Where the address lives. Omit to let the SDK find it. Throws `PC20AmbiguousAddressError` if more than one chain claims it. PushChain.CONSTANTS.CHAIN

`PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.BNB_TESTNET``PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA``PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |
| `options.rpcUrls` | `Partial<Record<CHAIN, string[]>>` | Per-chain RPC overrides for reading the registry. Defaults to the SDK's endpoints. |
| `options.strict` | `boolean` | Also verify factory identity against the live gateway. Slower; off by default. |

Returns \`PC20AddressResult\` <object>

```typescript
{
  address: `0x${string}`;  // Canonical PC-20 address on Push Chain
  name: string;            // Token name
  symbol: string;          // Token symbol
  decimals: number;        // Token decimals
  network: PUSH_NETWORK;   // The Push network this PC-20 belongs to
  registry: Array<{
    address: string;       // Checksummed hex on EVM, base58 on Solana
    chain: CHAIN;          // CAIP-2 chain id, e.g. 'eip155:11155111'
    chainName: string;     // Human-readable chain key, e.g. 'ETHEREUM_SEPOLIA'
  }>;
}
```

`registry` lists deployments that already exist — wrappers first, the Push Chain entry last. A wrapper address predicted for a first export is not included.

Live Playground: Resolve a PC-20 and list its deployments

VIRTUAL NODE IDE

Copy playground link

Copy code

## Conversion Utilities

### Calculate Minimum Amount from Slippage

**_`PushChain.utils.conversion.slippageToMinAmount(amount, { slippageBps }): string`_**

```typescript
const minOut = PushChain.utils.conversion.slippageToMinAmount('100000000', {
  slippageBps: 100, // 1%
});
// Returns: '99000000'
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`amount`_ | `string` | Input amount in smallest units (e.g., '100000000' for 100 USDC as it has 6 decimals). |
| _`options.slippageBps`_ | `number` (integer) | Slippage in basis points. `100 = 1%`, `50 = 0.5%`. |

Returns \`minOut\` <string>

```typescript
// minOut `string` (in smallest units)
'99000000'
```

Live Playground: Calculate minimum amount out from slippage

VIRTUAL NODE IDE

Copy playground link

Copy code

### Get Conversion Quote

**_`pushChainClient.funds.getConversionQuote(amount, {options}): Promise<ConversionQuote>`_**

> **Note**: This function is available only after initializing the Push Chain client.

The function is used to get conversion quote especially when you want to pay with (from) one token, move as (to) another token. Used in [send universal transaction](/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-universal-transaction/#send-a-universal-transaction) for token movement across chains or to pay gas in other tokens instead of native token of the source chain.

> **Convention:** from = the token you pay with (Payable), to = the token you move as (Moveable).

```typescript
const quote = pushChainClient.funds.getConversionQuote('100000000', {
  from: PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH,
  to: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
});

// Returns: { "amountIn": "5000000000000000", "amountOut": "11813463066488417", "rate": 2362692613297.683, "route": [ "WETH", "USDT" ], "timestamp": 1758582899267 }
```

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`amount`_ | `string` | The string representation of the amount to parse. Can include decimals (e.g., "1.5", "420", "0.1"). |
| _`options.from`_ | `PushChain.CONSTANTS.PAYABLE.TOKEN` | The token you pay with. PushChain.CONSTANTS.PAYABLE.TOKEN
`PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.ETH``PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDC``PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH``PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.stETH``PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.ETH``PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDC``PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.ETH``PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDC``PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.BNB``PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDC``PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.SOL``PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDT``PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDC`

 |
| _`options.to`_ | `PushChain.CONSTANTS.MOVEABLE.TOKEN` | The token you move as. PushChain.CONSTANTS.MOVEABLE.TOKEN

`PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.WETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.stETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.ETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.WETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.ETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.WETH``PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.BNB``PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL``PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDT``PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDC``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEth``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthArb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthBase``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pBnb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.eth``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.arb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.base``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.bnb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.sol``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.eth``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.arb``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.base``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.bsc``PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.sol`

 |

Supported chains

-   `funds.getConversionQuote` currently works on Ethereum Mainnet and Sepolia. Other origins will throw an error.

Returns \`ConversionQuote\` <object>

| Field | Type | Description |
| --- | --- | --- |
| `amountIn` | `string` | Input amount in smallest units |
| `amountOut` | `string` | Output amount in smallest units |
| `rate` | `number` | Normalized rate: tokenOut per tokenIn |
| `route` | `string[]` | Optional swap path (e.g., `["WETH","USDT"]`) |
| `timestamp` | `number` | Unix time (ms) |

Live Playground: Quote WETH → USDT on Sepolia

VIRTUAL NODE IDE

Copy playground link

Copy code

## Explorer Utilities

### Get Transaction URL

**_`pushChainClient.explorer.getTransactionUrl(txHash, { options? }): string`_**

> **Note**: This function is available only after initializing the Push Chain client.

Returns the explorer URL for a given transaction hash. By default, uses the chain from the initialized `pushChainClient`. When `options.chain` is provided, generates the explorer URL for that specific chain instead.

```typescript
// Default: Uses client's chain (Push Chain)
const url = pushChainClient.explorer.getTransactionUrl(txHash);

// Override: Generate URL for external chain explorer
const sepoliaUrl = pushChainClient.explorer.getTransactionUrl(txHash, {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
});
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| _`txHash`_ | `string` | The transaction hash to convert to explorer URL. |
| `options.chain` | `CHAIN` | Optional. Override the chain for explorer URL generation. When provided, generates the URL for that chain's explorer instead of the client's chain. Use `PushChain.CONSTANTS.CHAIN` values. PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_MAINNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.PUSH_LOCALNET``PushChain.CONSTANTS.CHAIN.ETHEREUM_MAINNET``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_MAINNET``PushChain.CONSTANTS.CHAIN.SOLANA_TESTNET``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |

Returns \`url\` <string>

```typescript
// Push Chain transaction URL (default)
'https://donut.push.network/tx/0x828911db033c65de8faab4906cfcb7d13ce225c3cd283534d110414a5b78cf87'

// External chain transaction URL (when options.chain is provided)
'https://sepolia.etherscan.io/tx/0x828911db033c65de8faab4906cfcb7d13ce225c3cd283534d110414a5b78cf87'
```

Live Playground: Get Explorer URL for a transaction hash

VIRTUAL NODE IDE

Copy playground link

Copy code

### List Explorer URLs

**_`pushChainClient.explorer.listUrls({ options? }): { explorers: [] }`_**

> **Note**: This function is available only after initializing the Push Chain client.

Returns explorer URLs for a specific chain. By default, uses the chain from the initialized `pushChainClient`. When `options.chain` is provided, returns explorer URLs for that specific chain instead.

```typescript
// Default: Uses client's chain
const result = pushChainClient.explorer.listUrls();

// Override: Get explorer URLs for specific chain
const sepoliaExplorers = pushChainClient.explorer.listUrls({
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
});
```

These `Arguments` are mandatory

| **Arguments** | **Type** | **Description** |
| --- | --- | --- |
| `options.chain` | `CHAIN` | Optional. Override the chain to get explorer URLs for. When provided, returns explorer URLs for that specific chain. Use `PushChain.CONSTANTS.CHAIN` values. PushChain.CONSTANTS.CHAIN
`PushChain.CONSTANTS.CHAIN.PUSH_TESTNET``PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT``PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.BNB_TESTNET``PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA``PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA``PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`

 |

Returns \`{ explorers }\` <object>

```typescript
// explorers object
{
  explorers: [
    {
      chain: 'eip155:42101',
      chainName: 'PUSH_TESTNET_DONUT',
      urls: ['https://donut.push.network', 'https://scan.push.org']
    }
  ]
}
```

Live Playground: List Explorer URLs for a specific chain

VIRTUAL NODE IDE

Copy playground link

Copy code

### List All Explorer URLs

**_`pushChainClient.explorer.listAllUrls(): { explorers: [] }`_**

> **Note**: This function is available only after initializing the Push Chain client.

Returns explorer URLs for all supported chains in the current Push Network.

```typescript
// ... Initialize Push Chain Client
const allExplorers = pushChainClient.explorer.listAllUrls();
```

Returns \`{ explorers }\` <object>

```typescript
// explorers object with all supported chains
{
  explorers: [
    {
      chain: 'eip155:42101',
      chainName: 'PUSH_TESTNET_DONUT',
      urls: ['https://donut.push.network', 'https://scan.push.org']
    },
    {
      chain: 'eip155:11155111',
      chainName: 'ETHEREUM_SEPOLIA',
      urls: ['https://sepolia.etherscan.io']
    },
    {
      chain: 'eip155:421614',
      chainName: 'ARBITRUM_SEPOLIA',
      urls: ['https://sepolia.arbiscan.io']
    },
    // ... more chains
  ]
}
```

Live Playground: List All Explorer URLs for all supported chains

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Dive into [reading blockchain state](/push-chain-website/pr-preview/pr-1234/docs/chain/build/reading-blockchain-state/)
-   Harness our [on-chain contract helpers](/push-chain-website/pr-preview/pr-1234/docs/chain/build/contract-helpers/) to supercharge your app
-   Explore and abstract away wallet and any chain-related logic using [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/)
