# Use Utility Functions

## Purpose

Leverage the `PushChain.utils` namespace for common operations: unit parsing, account conversion, chain queries, token lookups, and signer construction. Most utilities work without an initialized client.

## Prerequisites

| Requirement | Details |
|---|---|
| Package | `@pushchain/core` |
| Import | `import { PushChain } from '@pushchain/core'` |

## Available Utilities

| Namespace | Function | Needs client |
|---|---|---|
| `PushChain.utils.helpers` | `parseUnits`, `formatUnits`, `encodeTxData` | No |
| `PushChain.utils.chains` | `getSupportedChains`, `getSupportedChainsByName`, `getChainNamespace`, `getChainName` | No |
| `PushChain.utils.account` | `toUniversal`, `toChainAgnostic`, `fromChainAgnostic`, `deriveExecutorAccount`, `resolveControllerAccount` | No |
| `PushChain.utils.signer` | `toUniversal`, `toUniversalFromKeypair`, `construct` | No |
| `PushChain.utils.tokens` | `getMoveableTokens`, `getPayableTokens`, `getPRC20Address` | No |
| `PushChain.utils.conversion` | `slippageToMinAmount` | No |
| `pushChainClient.funds` | `getConversionQuote` | **Yes** |
| `pushChainClient.explorer` | `getTransactionUrl`, `listUrls`, `listAllUrls` | **Yes** |

---

## Helper Utilities

### `parseUnits(value, exponent)` → `bigint`

| Argument | Type | Description |
|---|---|---|
| `value` | `string` | Human-readable amount, e.g. `'1.5'` |
| `exponent` | `number \| { decimals: number }` | Decimal places — `18` for PC/ETH, `6` for USDC, `8` for BTC |

**Returns**: `bigint` — e.g. `1500000000000000000n`

### `formatUnits(value, options)` → `string`

| Argument | Type | Description |
|---|---|---|
| `value` | `bigint \| string` | Raw amount in smallest units |
| `options.decimals` | `number` | Decimal places to scale by |
| `options.precision` | `number` _(optional)_ | Round output to this many decimal places |

**Returns**: `string` — e.g. `'1.5'`, `'100.50'`

### `encodeTxData({ abi, functionName, args })` → `string`

Encodes smart contract calldata — no viem or ethers needed.

| Argument | Type | Description |
|---|---|---|
| `abi` | `any[]` | Contract ABI array |
| `functionName` | `string` | Function name to encode |
| `args` | `any[]` _(optional)_ | Arguments, default `[]` |

**Returns**: `string` — hex-encoded calldata, e.g. `'0xd09de08a'`

---

## Chain Utilities

### `getSupportedChains(pushNetwork)` → `{ chains: CHAIN[] }`

| Argument | Type | Description |
|---|---|---|
| `pushNetwork` | `PushChain.CONSTANTS.PUSH_NETWORK` | Network to query |

**Returns**: `{ chains }` — array of `PushChain.CONSTANTS.CHAIN.*` constant values

### `getSupportedChainsByName(pushNetwork)` → `{ chains: string[] }`

| Argument | Type | Description |
|---|---|---|
| `pushNetwork` | `PushChain.CONSTANTS.PUSH_NETWORK` | Network to query |

**Returns**: `{ chains }` — human-readable names, e.g. `['PUSH_TESTNET_DONUT', 'ETHEREUM_SEPOLIA', 'SOLANA_DEVNET', ...]`

### `getChainNamespace(chainName)` → `string`

| Argument | Type | Description |
|---|---|---|
| `chainName` | `string` | e.g. `'ETHEREUM_SEPOLIA'` |

**Returns**: CAIP-2 namespace, e.g. `'eip155:11155111'` — `undefined` if unsupported

### `getChainName(chainNamespace)` → `string`

| Argument | Type | Description |
|---|---|---|
| `chainNamespace` | `string` | CAIP-2 namespace, e.g. `'eip155:11155111'` |

**Returns**: Chain name, e.g. `'ETHEREUM_SEPOLIA'` — `undefined` if unsupported

---

## Account Utilities

### `toUniversal(address, { chain })` → `UniversalAccount`

Wraps an address and chain into a `UniversalAccount`. Can also be passed to `PushChain.initialize()` for read-only mode.

| Argument | Type | Description |
|---|---|---|
| `address` | `string` | Wallet address |
| `options.chain` | `CHAIN` | `PushChain.CONSTANTS.CHAIN.*` |

**Returns**: `{ chain: string, address: string }` — e.g. `{ chain: 'eip155:11155111', address: '0xAbc...' }`

### `toChainAgnostic(address, { chain })` → `string`

| Argument | Type | Description |
|---|---|---|
| `address` | `string` | Wallet address |
| `options.chain` | `CHAIN` | `PushChain.CONSTANTS.CHAIN.*` |

**Returns**: `string` — fully-qualified CAIP-10 address, e.g. `'eip155:11155111:0xAbc...'`

### `fromChainAgnostic(chainAgnosticAddress)` → `UniversalAccount`

| Argument | Type | Description |
|---|---|---|
| `chainAgnosticAddress` | `string` | Full CAIP-10 string, e.g. `'eip155:11155111:0xAbc...'` |

**Returns**: `{ chain: string, address: string }`

### `deriveExecutorAccount(universalAccount, options?)` → `Promise<{ address, deployed? }>`

Derives a UEA on Push Chain from any UOA, or a CEA on an external chain from a Push/UOA account.

| Argument | Type | Description |
|---|---|---|
| `universalAccount` | `UniversalAccount` | Created via `toUniversal()` |
| `options.chain` | `CHAIN` _(optional)_ | When set, derives a CEA on that external chain instead of a UEA on Push Chain |
| `options.skipNetworkCheck` | `boolean` _(optional)_ | Deterministic derivation only — skip deployment check. Default `false` |

**Returns**: `{ address: string, deployed?: boolean }` — `deployed` included when `skipNetworkCheck` is `false`

### `resolveControllerAccount(account, options?)` → `Promise<{ accounts }>`

Recursively resolves the controller identity behind an executor account (UEA → UOA, or CEA → Push account → UOA).

| Argument | Type | Description |
|---|---|---|
| `account` | `string` | UEA, CEA, or Push Chain address to resolve |
| `options.chain` | `CHAIN` _(optional)_ | Required for CEA — specifies which chain the CEA is deployed on |
| `options.skipNetworkCheck` | `boolean` _(optional)_ | Deterministic resolution only. Default `false` |

**Returns**: `{ accounts: Array<{ chain, chainName, address, type, exists, role? }> }`
- `type` — `'uea'` | `'uoa'` | `'cea'`
- `role` — `'controller'` marks the controlling account

---

## Signer Utilities

### `toUniversal(signer)` → `Promise<UniversalSigner>`

Converts an ethers.js `Wallet` or viem `WalletClient` into a `UniversalSigner`.

| Argument | Type | Description |
|---|---|---|
| `signer` | `ethers.Wallet \| WalletClient` | EVM-compatible signer |

**Returns**: `UniversalSigner` — `{ account: UniversalAccount, signMessage, signAndSendTransaction, signTypedData }`

### `toUniversalFromKeypair(keypair, options)` → `Promise<UniversalSigner>`

Converts a Solana (or other non-EVM) keypair into a `UniversalSigner`.

| Argument | Type | Description |
|---|---|---|
| `keypair` | `Keypair` | Library keypair object (Solana, ethers, viem) |
| `options.chain` | `CHAIN` | Origin chain, e.g. `PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET` |
| `options.library` | `LIBRARY` | Library constant, e.g. `PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS` |

**Returns**: `UniversalSigner`

### `construct(account, signingMethods)` → `UniversalSignerSkeleton`

Builds a custom signer for any wallet type not natively supported.

| Argument | Type | Description |
|---|---|---|
| `account` | `{ address, chain }` | The account this signer represents |
| `signingMethods.signAndSendTransaction` | `(tx: Uint8Array) => Promise<Uint8Array>` | Sign and broadcast transaction bytes |
| `signingMethods.signMessage` | `(data: Uint8Array) => Promise<Uint8Array>` | Sign arbitrary message bytes |
| `signingMethods.signTypedData` | `(params) => Promise<Uint8Array>` | Sign EIP-712 typed data |

**Returns**: `UniversalSignerSkeleton` — pass to `PushChain.utils.signer.toUniversal(skeleton)` to get a `UniversalSigner`

---

## Token Utilities

### `getMoveableTokens(chainOrClient?)` → `{ tokens }`

Returns supported assets that can be moved across chains (used in `tx.funds.token`).

| Argument | Type | Description |
|---|---|---|
| `chainOrClient` | `CHAIN \| PushChainClient` _(optional)_ | Filter tokens for a specific chain |

**Returns**: `{ tokens: Array<{ chain, symbol, decimals, address }> }`

### `getPayableTokens(chainOrClient?)` → `{ tokens }`

Returns supported assets that can be used to pay gas or fund token movement.

| Argument | Type | Description |
|---|---|---|
| `chainOrClient` | `CHAIN \| PushChainClient` _(optional)_ | Filter tokens for a specific chain |

**Returns**: `{ tokens: Array<{ chain, symbol, decimals, address }> }`

### `getPRC20Address(token)` → `string`

Resolves the Push Chain synthetic PRC20 address for a supported origin-chain token.

| Argument | Type | Description |
|---|---|---|
| `token` | `MoveableToken \| { chain: string, address: string }` | Origin token — from `getMoveableTokens()` or explicit chain + address |

**Returns**: `string` — PRC20 contract address on Push Chain (`0x...`)

---

## Conversion Utilities

### `slippageToMinAmount(amount, { slippageBps })` → `string`

Calculates the minimum acceptable output amount given a slippage tolerance.

| Argument | Type | Description |
|---|---|---|
| `amount` | `string` | Input amount in smallest units (e.g. `'100000000'` for 100 USDC) |
| `options.slippageBps` | `number` | Slippage in basis points — `100` = 1%, `50` = 0.5% |

**Returns**: `string` — minimum output amount in smallest units, e.g. `'99000000'`

---

## Client Utilities _(requires initialized PushChainClient)_

### `pushChainClient.funds.getConversionQuote(amount, { from, to })` → `Promise<ConversionQuote>`

Gets a quote for paying with one token while moving as another.

| Argument | Type | Description |
|---|---|---|
| `amount` | `string \| bigint` | Amount in smallest units |
| `options.from` | `PushChain.CONSTANTS.PAYABLE.TOKEN` | Token you pay with |
| `options.to` | `PushChain.CONSTANTS.MOVEABLE.TOKEN` | Token you move as |

**Returns**: `{ amountIn, amountOut, rate, route, timestamp }`

> Currently supported on Ethereum Mainnet and Sepolia only.

---

### `pushChainClient.explorer.getTransactionUrl(txHash, options?)` → `string`

| Argument | Type | Description |
|---|---|---|
| `txHash` | `string` | Transaction hash |
| `options.chain` | `CHAIN` _(optional)_ | Override chain — defaults to client's chain (Push Chain) |

**Returns**: `string` — explorer URL, e.g. `'https://donut.push.network/tx/0x...'`

### `pushChainClient.explorer.listUrls(options?)` → `{ explorers }`

| Argument | Type | Description |
|---|---|---|
| `options.chain` | `CHAIN` _(optional)_ | Override chain — defaults to client's chain |

**Returns**: `{ explorers: Array<{ chain, chainName, urls }> }`

### `pushChainClient.explorer.listAllUrls()` → `{ explorers }`

Returns explorer URLs for **all** supported chains in the current network.

**Returns**: `{ explorers: Array<{ chain, chainName, urls }> }`

---

## Agent Notes

- **`toUniversal` exists on both `account` and `signer` namespaces** — `account.toUniversal` creates a read-only `UniversalAccount`; `signer.toUniversal` wraps a wallet into a `UniversalSigner` with signing capabilities.
- **`parseUnits` accepts both `18` and `{ decimals: 18 }`** as second argument.
- **`deriveExecutorAccount` goes forward** (UOA → UEA, or Push/UOA → CEA); **`resolveControllerAccount` goes backward** (UEA/CEA → UOA).
- **No client needed** for all `PushChain.utils.*` functions. `pushChainClient.funds.*` and `pushChainClient.explorer.*` require an initialized client.
- **`getSupportedChains` is network-specific**: supported chains differ between testnet and mainnet.

## Common Failures

| Error | Cause | Recovery |
|---|---|---|
| `parseUnits is not a function` | Wrong namespace | Use `PushChain.utils.helpers.parseUnits` |
| `Invalid decimals` | Non-integer or negative value | Pass a non-negative integer: `18`, `6`, `8` |
| `toUniversal is not a function` on account | Namespace confusion | Account: `PushChain.utils.account.toUniversal`; Signer: `PushChain.utils.signer.toUniversal` |
| `getConversionQuote` fails | Client not initialized | Call `PushChain.initialize(signer)` first |
