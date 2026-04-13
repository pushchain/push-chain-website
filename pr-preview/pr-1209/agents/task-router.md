# Push Chain Task Router

This guide maps common agent tasks to their recommended approaches, SDK methods, and implementation caveats.

---

## Move Value Between Chains

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

| Aspect | Details |
|--------|---------|
| **Problem** | Add wallet connection UI with support for EVM and non-EVM wallets |
| **Recommended Approach** | Use `@pushchain/ui-kit` with `PushUniversalWalletProvider` |
| **SDK Package** | `@pushchain/ui-kit` |
| **Components** | `PushUniversalWalletProvider`, `PushUniversalAccountButton` |
| **Hooks** | `usePushWalletContext`, `usePushChainClient`, `usePushChain` |
| **Caveats** | - Wrap app root with `PushUniversalWalletProvider`<br>- `usePushChainClient()` returns initialized client after connection<br>- Handles signer creation automatically |

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
  const { pushChainClient } = usePushChainClient();
  // pushChainClient is ready after wallet connects
}
```

---

## Read Contract State Without Signing

| Aspect | Details |
|--------|---------|
| **Problem** | Query on-chain data without a connected wallet or signer |
| **Recommended Approach** | Initialize client in read-only mode with `UniversalAccount` instead of `UniversalSigner` |
| **SDK Method** | `PushChain.initialize(universalAccount, { network })` |
| **What's Available** | `universal.origin`, `universal.account`, `explorer.getTransactionUrl()`, `getAccountStatus()` |
| **Caveats** | - Cannot call `signMessage`, `signTypedData`, or `sendTransaction`<br>- For direct contract reads, use ethers.js or viem with Push Chain RPC directly |

**Example:**
```typescript
const universalAccount = {
  address: '0xUserAddress',
  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
};

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

| Aspect | Details |
|--------|---------|
| **Problem** | Execute on Push Chain when user only has native tokens on their origin chain |
| **Recommended Approach** | No action needed—fee abstraction is built into the SDK |
| **How It Works** | User pays gas in native token (ETH, SOL, etc.) on origin chain; SDK handles conversion and UEA funding |
| **Caveats** | - User never needs to acquire or hold PC tokens<br>- Origin chain transaction covers all costs<br>- Progress events (SEND-TX-05-xx) show gas funding status |

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

## Quick Reference Table

| Task | Primary Method | Route |
|------|----------------|-------|
| Send value on Push Chain | `sendTransaction({ to: address, value })` | Route 1 |
| Call contract on Push Chain | `sendTransaction({ to: address, data })` | Route 1 |
| Call contract on external chain | `sendTransaction({ to: { address, chain }, data })` | Route 2 |
| Execute with external identity | `sendTransaction({ from: { chain }, to: address })` | Route 3 |
| Move assets cross-chain | `sendTransaction({ funds: { amount, token } })` | Route 1/2 |
| Sign message | `signMessage(Uint8Array)` | N/A |
| Track transaction | `tx.wait()` or `trackTransaction(hash)` | N/A |
| Check account status | `getAccountStatus()` | N/A |
| Upgrade UEA | `upgradeAccount()` | N/A |