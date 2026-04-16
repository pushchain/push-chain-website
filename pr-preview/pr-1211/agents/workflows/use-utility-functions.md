# Use Utility Functions

## Purpose

Leverage the `PushChain.utils` namespace for common operations: unit parsing, account conversion, chain queries, and custom signer construction — without needing a fully initialized client.

## When to Use

- Converting human-readable token amounts to BigInt (e.g., `"1.5"` → `1500000000000000000n`)
- Converting a plain address into a `UniversalAccount` with chain context
- Querying which chains are supported on a given network
- Building custom or skeleton signers for exotic wallet types

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Package installed | `@pushchain/core` version ≥1.0.0 |
| Import | `import { PushChain } from '@pushchain/core'` |

## Available Utilities

| Namespace | Function | Purpose |
|-----------|----------|---------|
| `PushChain.utils.helpers` | `parseUnits(value, decimals)` | Human-readable → BigInt |
| `PushChain.utils.account` | `toUniversal(address, { chain })` | Address → UniversalAccount |
| `PushChain.utils.account` | `convertExecutorToOrigin(executor, { chain })` | Reverse-map UEA → origin |
| `PushChain.utils.chains` | `getSupportedChains(network)` | List chains for a network |
| `PushChain.utils.signer` | `toUniversal(signer)` | EVM signer → UniversalSigner |
| `PushChain.utils.signer` | `toUniversalFromKeypair(keypair, opts)` | Non-EVM keypair → UniversalSigner |
| `PushChain.utils.signer` | `construct(account, opts)` | Build custom signer skeleton |

## Steps

### Parse Units (Human-Readable → BigInt)

**_`PushChain.utils.helpers.parseUnits(value, exponent): bigint`_**

```typescript
import { PushChain } from '@pushchain/core';

// 1.5 PC → uPC (18 decimals)
const uPC = PushChain.utils.helpers.parseUnits('1.5', 18);
console.log(uPC); // 1500000000000000000n

// With object syntax
const uPC2 = PushChain.utils.helpers.parseUnits('1.5', { decimals: 18 });

// USDC (6 decimals)
const usdc = PushChain.utils.helpers.parseUnits('100', 6);
console.log(usdc); // 100000000n

// BTC (8 decimals)
const btc = PushChain.utils.helpers.parseUnits('0.5', 8);
console.log(btc); // 50000000n
```

### Convert Address to UniversalAccount

**_`PushChain.utils.account.toUniversal(address, { chain }): UniversalAccount`_**

```typescript
const universalAccount = PushChain.utils.account.toUniversal(
  '0xC8AE31cF444CAB447921277c4DcF65128d5B25a8',
  { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }
);

console.log(universalAccount);
// { address: '0xC8AE...', chain: 'eip155:11155111' }
```

Use this to pass an address to `PushChain.initialize()` in read-only mode:

```typescript
const pushChainClient = await PushChain.initialize(universalAccount, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});
```

### Query Supported Chains

**_`PushChain.utils.chains.getSupportedChains(network): CHAIN[]`_**

```typescript
const chains = PushChain.utils.chains.getSupportedChains(
  PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
);
console.log('Supported chains:', chains);
// ['eip155:11155111', 'eip155:421614', 'eip155:84532', 'eip155:97', 'solana:EtWTRA...', ...]
```

### Convert Executor to Origin

**_`PushChain.utils.account.convertExecutorToOrigin(executor, { chain }): Promise<UniversalAccount>`_**

```typescript
const originAccount = await PushChain.utils.account.convertExecutorToOrigin(
  '0xUEAAddress',
  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
);
console.log('Origin wallet:', originAccount);
// { address: '0xOriginalWallet...', chain: 'eip155:97' }
```

### Construct Custom Signer Skeleton

```typescript
const skeleton = PushChain.utils.signer.construct(
  {
    address: '0xYourAddress',
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  },
  {
    signAndSendTransaction: async (unsignedTx: Uint8Array) => signedBytes,
    signMessage: async (data: Uint8Array) => signatureBytes,
    signTypedData: async (params) => signatureBytes,
  }
);

const universalSigner = await PushChain.utils.signer.toUniversal(skeleton);
```

## Expected Output

```typescript
// parseUnits output
1500000000000000000n

// toUniversal (account) output
{ address: '0xC8AE31cF...', chain: 'eip155:11155111' }

// getSupportedChains output
['eip155:11155111', 'eip155:421614', 'eip155:84532', 'eip155:97', ...]
```

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `parseUnits is not a function` | Wrong namespace | Use `PushChain.utils.helpers.parseUnits` |
| `Invalid decimals` | Non-integer or negative value | Pass a non-negative integer: `18`, `6`, `8` |
| `toUniversal is not a function` on account | Confusion with signer utils | Account conversion: `PushChain.utils.account.toUniversal`; Signer wrapping: `PushChain.utils.signer.toUniversal` |
| `Unsupported chain` in `convertExecutorToOrigin` | Chain not registered for that UEA | Verify the origin chain the UEA was created from |

## Agent Notes

- **`parseUnits` accepts both `18` and `{ decimals: 18 }`** as the second argument.
- **`toUniversal` exists on both `account` and `signer` namespaces** — these are different: `account.toUniversal` creates a read-only object; `signer.toUniversal` wraps a signing capability.
- **`getSupportedChains` is network-specific**: chains differ between testnet and mainnet.
- **No client needed**: all utilities in this guide work without an initialized `PushChainClient`.

## MCP Mapping Candidates

- `convert_address_to_universal_account` — Wrap address + chain into UniversalAccount
- `parse_units` — Convert decimal string to BigInt for on-chain use
- `format_units` — Convert BigInt to human-readable string
- `validate_caip10_format` — Check if a string is a valid CAIP-10 identifier
