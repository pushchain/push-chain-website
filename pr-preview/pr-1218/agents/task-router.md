<!-- version: 1.1.0 | schema_version: 1.0.0 | current_sdk_version: 5.1.12 | generated: 2026-04-21T00:00:00.000Z -->

# Push Chain Task Router

This guide maps common agent tasks to their recommended approaches, SDK methods, and implementation caveats.

---

## Move Value Between Chains

<!-- capability_ids: [send_universal_transaction, send_multichain_transaction] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Transfer tokens or native value from one chain to another through Push Chain |
| **Recommended Approach** | Use `sendTransaction` with `tx.funds` parameter for atomic asset movement |
| **SDK Method** | `pushChainClient.universal.sendTransaction({ to, funds: { amount: BigInt, token? } })` |
| **Route Used** | Route 1 (to Push Chain) or Route 2 (to external chain via CEA) depending on `tx.to` |
| **Caveats** | - `tx.funds.amount` is in smallest unit (e.g., wei equivalent)<br>- If `tx.data` is also provided, asset movement and execution happen atomically<br>- Check supported tokens via `PushChain.CONSTANTS.MOVEABLE.TOKEN` |

**Example:**
```typescript
await pushChainClient.universal.sendTransaction({
  to: '0xRecipient',
  funds: {
    amount: BigInt('1000000000000000000'), // 1 token in smallest unit
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETH
  }
});
```

---

## Sign a Message for Off-Chain Verification

<!-- capability_ids: [sign_universal_message] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Sign arbitrary data for signature verification (authentication, attestation) |
| **Recommended Approach** | Use `pushChainClient.universal.signMessage()` |
| **SDK Method** | `pushChainClient.universal.signMessage(message: Uint8Array)` |
| **Caveats** | - Message must be `Uint8Array` (use `new TextEncoder().encode('message')`)<br>- Returns signature compatible with origin chain's signing scheme<br>- Not available in read-only mode |

**Example:**
```typescript
const message = new TextEncoder().encode('Sign in to MyApp');
const signature = await pushChainClient.universal.signMessage(message);
```

---

## Check if a Transaction Confirmed

<!-- capability_ids: [track_transaction] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Verify a transaction has been included and executed on Push Chain |
| **Recommended Approach** | Use `tx.wait()` for transactions you just sent; use `trackTransaction()` for external tracking |
| **SDK Methods** | `txResponse.wait()` OR `pushChainClient.universal.trackTransaction(txHash)` |
| **When to Use Each** | - `tx.wait()`: Sequential flows where you wait immediately after sending<br>- `trackTransaction()`: Resuming tracking after page reload, tracking transactions sent elsewhere |
| **Caveats** | - `wait()` blocks until confirmation<br>- Both return receipt with `status`, `logs`, `gasUsed` |

**Example (wait):**
```typescript
const txResponse = await pushChainClient.universal.sendTransaction({ to, value });
const receipt = await txResponse.wait();
console.log('Confirmed:', receipt.status);
```

**Example (trackTransaction):**
```typescript
const receipt = await pushChainClient.universal.trackTransaction('0xTxHash...');
```

---

## Integrate Wallet for Users in a React App

<!-- capability_ids: [connect_wallet_ui, use_wallet_provider, use_push_chain_client_hook, use_push_wallet_context] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Add wallet connection UI with support for EVM and non-EVM wallets |
| **Recommended Approach** | Use `@pushchain/ui-kit` with `PushUniversalWalletProvider` |
| **SDK Package** | `@pushchain/ui-kit` |
| **Components** | `PushUniversalWalletProvider`, `PushUniversalAccountButton` |
| **Hooks** | `usePushWalletContext`, `usePushChainClient`, `usePushChain` |
| **Caveats** | - Wrap app root with `PushUniversalWalletProvider`<br>- `usePushChainClient()` returns `{ pushChainClient, isInitialized, error }` — guard with `isInitialized` before use<br>- Handles signer creation automatically |

**Example:**
```jsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushChainClient,
  PushUI
} from '@pushchain/ui-kit';

function App() {
  return (
    <PushUniversalWalletProvider config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}>
      <PushUniversalAccountButton />
      <MyComponent />
    </PushUniversalWalletProvider>
  );
}

function MyComponent() {
  const { pushChainClient, isInitialized } = usePushChainClient();
  if (!isInitialized || !pushChainClient) return null; // null until wallet connects
  // pushChainClient is ready to use
}
```

---

## Read Contract State Without Signing

<!-- capability_ids: [initialize_client, read_blockchain_state, initialize_evm_client] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Query on-chain data without a connected wallet or signer |
| **Recommended Approach** | Initialize client in read-only mode with `UniversalAccount` instead of `UniversalSigner` |
| **SDK Method** | `PushChain.initialize(universalAccount, { network })` |
| **What's Available** | `universal.origin`, `universal.account`, `explorer.getTransactionUrl()`, `getAccountStatus()` |
| **Caveats** | - Cannot call `signMessage`, `signTypedData`, or `sendTransaction`<br>- For direct contract reads, use ethers.js or viem with Push Chain RPC directly |

**Example:**
```typescript
const universalAccount = PushChain.utils.account.toUniversal('0xUserAddress', {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});

const readOnlyClient = await PushChain.initialize(universalAccount, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
});

// Can query account info
const origin = readOnlyClient.universal.origin;
const account = readOnlyClient.universal.account;

// For contract reads, use ethers/viem directly
const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const contract = new ethers.Contract(address, abi, provider);
const result = await contract.someViewFunction();
```

---

## Execute Contract on External Chain

<!-- capability_ids: [send_multichain_transaction] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Call a contract on Ethereum, BNB Chain, or other supported chain from any origin |
| **Recommended Approach** | Use Route 2 by passing `tx.to` as `{ address, chain }` |
| **SDK Method** | `pushChainClient.universal.sendTransaction({ to: { address, chain }, data })` |
| **Executor** | CEA (Chain Executor Account) on the target chain |
| **Caveats** | - User signs from their origin chain; Push Chain coordinates execution<br>- CEA is deterministically derived; same user always has same CEA on each chain<br>- Ensure target chain is supported |

**Example:**
```typescript
const calldata = contractInterface.encodeFunctionData('deposit', [amount]);

await pushChainClient.universal.sendTransaction({
  to: {
    address: '0xContractOnEthereum',
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
  },
  data: calldata,
  value: BigInt(0)
});
```

---

## Pay Gas Without Holding PC Tokens

<!-- capability_ids: [send_universal_transaction] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Execute on Push Chain when user only has native tokens on their origin chain |
| **Recommended Approach** | No action needed—fee abstraction is built into the SDK |
| **How It Works** | User pays gas in native token (ETH, SOL, etc.) on origin chain; SDK handles conversion and UEA funding |
| **Caveats** | - User never needs to acquire or hold PC tokens<br>- Origin chain transaction covers all costs<br>- Progress events (`SEND-TX-105-01`/`02` on Route 1) show gas funding status |

**Example:**
```typescript
// User on Ethereum Sepolia with ETH, no PC tokens
// This just works—SDK handles fee abstraction
const tx = await pushChainClient.universal.sendTransaction({
  to: '0xContractOnPushChain',
  data: encodedCalldata
});
// Gas paid in ETH on Sepolia, execution happens on Push Chain
```

---

## Handle a Solana User Interacting with Push Chain Contract

<!-- capability_ids: [create_universal_signer_from_keypair, initialize_client, send_universal_transaction] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Enable Solana wallet users to call contracts deployed on Push Chain |
| **Recommended Approach** | Create UniversalSigner from Solana Keypair, initialize client, use Route 1 |
| **SDK Flow** | 1. `toUniversalFromKeypair(keypair, { chain, library })`<br>2. `PushChain.initialize(universalSigner, { network })`<br>3. `sendTransaction({ to: '0x...' })` |
| **Account Mapping** | Solana public key (UOA) → UEA on Push Chain (deterministic) |
| **Caveats** | - Solana keypair must be available (from wallet adapter or generated)<br>- Chain: `PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET`<br>- Library: `PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS` |

**Example:**
```typescript
import { Keypair } from '@solana/web3.js';

// From wallet adapter or generated
const solKeypair = Keypair.generate();

const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(
  solKeypair,
  {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS
  }
);

const pushChainClient = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
});

// Solana user can now interact with Push Chain contracts
await pushChainClient.universal.sendTransaction({
  to: '0xPushChainContract',
  data: encodedCalldata
});
```

---

## Execute Multiple Chains in a Single User Signature (Cascade)

<!-- capability_ids: [execute_transaction_cascade] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Chain A → Chain B → Chain C in one user gesture, with one signature |
| **Recommended Approach** | `prepareTransaction()` each hop, then `executeTransactions([...])` |
| **SDK Methods** | `pushChainClient.universal.prepareTransaction(tx)` + `pushChainClient.universal.executeTransactions(prepared[])` |
| **Returns** | `CascadedTxResponse` with `.wait()` per hop and `.waitForAll()` for full settlement |
| **Caveats** | - Each `PreparedUniversalTx` is signed when you call `executeTransactions`, not at prepare time<br>- Every per-hop arg (`value`, `funds`, `gasLimit`, `payGasWith`, `deadline`) is supported per hop<br>- Use `progressHook` per hop for granular UI updates across the cascade |

**Example:**
```typescript
const hop1 = await pushChainClient.universal.prepareTransaction({
  to: '0xPushChainContract',
  data: encodeCalldata(),
});

const hop2 = await pushChainClient.universal.prepareTransaction({
  to: { address: '0xEthereumContract', chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
  data: encodeCalldata2(),
});

const result = await pushChainClient.universal.executeTransactions([hop1, hop2]);
await result.waitForAll();
```

---

## Sign EIP-712 Typed Data (Permit2, Uniswap, Seaport)

<!-- capability_ids: [sign_universal_typed_data] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Sign off-chain typed structured data for gasless approvals, order matching, or protocol authorizations |
| **Recommended Approach** | Use `pushChainClient.universal.signTypedData(typedDataArgs)` |
| **SDK Method** | `pushChainClient.universal.signTypedData({ domain, types, value })` |
| **Returns** | `Uint8Array` — EIP-712 signature bytes |
| **Caveats** | - Requires initialized client (wallet must be connected)<br>- `types` format: `Record<string, TypedDataField[]>` (same as ethers v6 / viem)<br>- Not available in read-only mode |

**Example:**
```typescript
const signature = await pushChainClient.universal.signTypedData({
  domain: { name: 'Permit2', chainId: 42101, verifyingContract: '0xPermit2Address' },
  types: {
    PermitTransferFrom: [
      { name: 'permitted', type: 'TokenPermissions' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ],
    TokenPermissions: [
      { name: 'token', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
  },
  value: { permitted: { token: '0xToken', amount: BigInt(1e18) }, nonce: 0n, deadline: 9999999999n },
});
```

---

## Derive UEA or CEA Address Without Sending a Transaction

<!-- capability_ids: [derive_executor_account] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Compute the deterministic executor address for any origin wallet before transacting — for balance checks, gas estimation, or whitelisting |
| **Recommended Approach** | Use `PushChain.utils.account.deriveExecutorAccount(uoa, { chain })` |
| **SDK Method** | `PushChain.utils.account.deriveExecutorAccount(uoa: UniversalAccount, { chain: CHAIN; skipNetworkCheck?: boolean })` |
| **Returns** | `Promise<{ address: string }>` — no on-chain call required |
| **Caveats** | - Use `CHAIN.PUSH_TESTNET_DONUT` to derive UEA; use any external chain constant for CEA<br>- Pass `skipNetworkCheck: true` for chains not yet live — returns address anyway<br>- Build `uoa` with `PushChain.utils.account.toUniversal(address, { chain })` |

**Example:**
```typescript
const uoa = PushChain.utils.account.toUniversal('0xUserWallet', {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});

// Derive UEA on Push Chain
const { address: ueaAddress } = await PushChain.utils.account.deriveExecutorAccount(uoa, {
  chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
});

// Derive CEA on Ethereum
const { address: ceaAddress } = await PushChain.utils.account.deriveExecutorAccount(uoa, {
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
});

console.log('UEA:', ueaAddress, '  CEA on Ethereum:', ceaAddress);
```

---

## Resolve the Controlling Wallet Behind a UEA or CEA Address

<!-- capability_ids: [resolve_controller_account] -->

| Aspect | Details |
|--------|---------|
| **Problem** | Given a UEA or CEA address, find which origin wallet ultimately controls it — for attribution, identity-aware UIs, or analytics |
| **Recommended Approach** | Use `PushChain.utils.account.resolveControllerAccount(address, options?)` |
| **SDK Method** | `PushChain.utils.account.resolveControllerAccount(account: string, { chain?: CHAIN; skipNetworkCheck?: boolean })` |
| **Returns** | `Promise<{ accounts: Array<{ chain, chainName, address, type, exists, role? }> }>` — the entry with `role: 'controller'` is the root UOA |
| **Caveats** | - Pass `options.chain` when resolving a CEA — required to know which external chain it lives on<br>- `type` values: `'uea'` `'uoa'` `'cea'`<br>- Reverse of `deriveExecutorAccount`: derive goes UOA→executor, resolve goes executor→UOA |

**Example:**
```typescript
// Who controls this UEA?
const { accounts } = await PushChain.utils.account.resolveControllerAccount(
  '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5'
);
const controller = accounts.find(a => a.role === 'controller');
console.log('Root wallet:', controller.address, 'on', controller.chainName);

// Who controls a CEA on BNB?
const { accounts: bnbAccounts } = await PushChain.utils.account.resolveControllerAccount(
  '0x5d71c70571789F0cd3bE84513523a9993740BDf6',
  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
);
```

---

## Quick Reference Table

<!-- capability_ids: [] | mapping_note: Aggregated summary table — see individual sections above for per-capability detail -->

| Task | Primary Method | Route |
|------|----------------|-------|
| Send value on Push Chain | `sendTransaction({ to: address, value })` | Route 1 |
| Call contract on Push Chain | `sendTransaction({ to: address, data })` | Route 1 |
| Call contract on external chain | `sendTransaction({ to: { address, chain }, data })` | Route 2 |
| Execute with external identity | `sendTransaction({ from: { chain }, to: address })` | Route 3 |
| Move assets cross-chain | `sendTransaction({ funds: { amount, token } })` | Route 1/2 |
| Multi-hop cascade (single signature) | `prepareTransaction()` × N → `executeTransactions([...])` | Multi |
| Sign arbitrary message | `signMessage(Uint8Array)` | N/A |
| Sign EIP-712 typed data | `signTypedData({ domain, types, value })` | N/A |
| Derive UEA / CEA address off-chain | `deriveExecutorAccount(uoa, { chain })` | N/A |
| Resolve UEA/CEA → controlling wallet | `resolveControllerAccount(address, { chain? })` | N/A |
| Track transaction | `tx.wait()` or `trackTransaction(hash)` | N/A |
| Check account status | `getAccountStatus()` | N/A |
| Upgrade UEA | `upgradeAccount()` | N/A |