# Initialize Client Reference - @pushchain/core

> Deep context for `push-backend` skill. Load this file when you need `PushChain.initialize`, read-only mode, reinitialize, account info, or account status.
>
> See also: `references/signer-options.md` for creating a `UniversalSigner` first.
> See also: `references/send-universal-transaction.md` for `sendTransaction` and all 3 routes.

---

## `PushChain.initialize` Arguments

`PushChain.initialize(signerOrAccount, options?)` → `Promise<PushChainClient>`

| Argument | Type | Default | Description |
|---|---|---|---|
| `signerOrAccount` | `UniversalSigner \| UniversalAccount` | - | `UniversalSigner` for full write/sign; `UniversalAccount` (address + chain) for read-only |
| `options.network` | `PushChain.CONSTANTS.PUSH_NETWORK` | `TESTNET` | Push Chain network to connect to |
| `options.rpcUrls` | `Partial<Record<CHAIN, string[]>>` | `{}` | Custom RPC URLs per chain |
| `options.blockExplorers` | `Partial<Record<CHAIN, string[]>>` | default URLs | Custom explorer URLs per chain |
| `options.printTraces` | `boolean` | `false` | Log internal trace for debugging |
| `options.progressHook` | `(progress: ProgressEvent) => void` | `undefined` | Client-level hook for all tx lifecycle events |

---

## Full Write/Sign Mode

Pass a `UniversalSigner` (created via `signer-options.md`):

```ts
import { PushChain } from '@pushchain/core';

const client = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});
// client.universal.sendTransaction / signMessage / signTypedData all available
```

---

## Read-Only Mode

Pass a `UniversalAccount` - no private key needed. `sendTransaction` and `signMessage` will throw; `universal.account`, `universal.origin`, and `explorer.*` still work.

```ts
const account = PushChain.utils.account.toUniversal('0xAddress', {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});

const client = await PushChain.initialize(account, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});

// Allowed:
console.log(client.universal.origin);   // { address, chain }
console.log(client.universal.account);  // UEA address on Push Chain
const url = client.explorer.getTransactionUrl('0xTxHash');

// Will throw:
// await client.universal.sendTransaction(...)
// await client.universal.signMessage(...)
```

---

## Reinitialize

Swap signer/account or update options without constructing a fresh client from scratch.
**Always returns a new client instance - update your reference.**

```ts
const newClient = await client.reinitialize(newSignerOrAccount, {
  // only pass options you want to override
  rpcUrls: { [PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA]: ['https://my-infura-rpc'] },
  blockExplorers: { [PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT]: ['https://custom-explorer.push.network'] },
});
```

---

## Account Info

After initialization, the client exposes two account getters:

```ts
client.universal.origin
// Source-chain address: { address: '0xYourWallet', chain: 'eip155:11155111' }
// Represents the UOA - the actual user wallet that signed

client.universal.account
// Push Chain execution address (string)
// For cross-chain users: their UEA (Universal Executor Account) - smart contract on Push Chain
// For Push-native users: their EOA directly
```

---

## Account Status - `getAccountStatus`

`pushChainClient.getAccountStatus(options?)` → `Promise<AccountStatus>`

Returns UEA deployment state and version info. The SDK handles upgrades automatically in most cases - call this only when debugging account state.

```ts
const status = await client.getAccountStatus();
// { mode: 'signer' | 'read-only', uea: { loaded, deployed, version, minRequiredVersion, requiresUpgrade } }

if (status.uea.requiresUpgrade) {
  console.warn('UEA upgrade required:', status.uea.version, '→', status.uea.minRequiredVersion);
}
```

| Field | Type | Description |
|---|---|---|
| `mode` | `'signer' \| 'read-only'` | Whether the client has a signer or is read-only |
| `uea.loaded` | `boolean` | Whether status has been fetched from chain |
| `uea.deployed` | `boolean` | Whether the UEA proxy is deployed on Push Chain |
| `uea.version` | `string` | Current UEA implementation version, e.g. `'1.0.0'` |
| `uea.minRequiredVersion` | `string` | Latest required version from UEAFactory |
| `uea.requiresUpgrade` | `boolean` | `true` when `deployed && version < minRequiredVersion` |

| Option | Type | Default | Description |
|---|---|---|---|
| `options.forceRefresh` | `boolean` | `false` | Re-fetch status from chain even if cached |

---

## Reading Blockchain State

**`PushChainClient` is for sending and signing universal transactions - not general-purpose EVM reads.**

To query contracts, balances, or events on Push Chain, use ethers.js or viem directly with the Push Chain RPC:

```ts
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const balance = await provider.getBalance('0xAddress');
const contract = new ethers.Contract(contractAddress, abi, provider);
const result = await contract.someReadFunction();
```

---

## See Also

- Initialize client workflow: https://push.org/agents/workflows/initialize-client.md
- Create universal signer: https://push.org/agents/skills/push-backend/references/signer-options.md
- Send universal transaction: https://push.org/agents/skills/push-backend/references/send-universal-transaction.md
- Constants (PUSH_NETWORK, CHAIN): https://push.org/agents/workflows/constants-reference.md

## Docs

- Initialize client: https://push.org/docs/chain/build/initialize-push-chain-client/
- Create universal signer: https://push.org/docs/chain/build/create-universal-signer/
