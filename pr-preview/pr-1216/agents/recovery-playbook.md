---
schema_version: "1.0.0"
version: "1.1.0"
current_sdk_version: "5.1.7"
generated: "2026-04-20T00:00:00.000Z"
---

# Push Chain Error Recovery Playbook

This playbook provides structured recovery procedures for autonomous agents handling Push Chain SDK errors. Each section covers a failure category with decision trees and specific recovery actions.

---

## 1. Initialization Failures

### Decision Tree

```
Error during PushChain.initialize()?
├── Is signer undefined/null?
│   └── YES → [AUTO] Check signer creation code path
│       └── Was toUniversal() or toUniversalFromKeypair() called?
│           ├── NO → [AUTO] Add signer conversion step
│           └── YES → [ESCALATE] Signer creation succeeded but is undefined
│
├── Is network constant invalid?
│   └── YES → [AUTO] Replace with PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
│
├── Is origin chain unsupported?
│   └── YES → [USER] Prompt wallet network switch
│       └── List supported: Object.values(PushChain.CONSTANTS.CHAIN)
│
└── Is RPC unreachable?
    └── YES → [AUTO] Retry with backoff (1s, 2s, 4s)
        └── Still failing?
            ├── Custom RPC? → [AUTO] Fall back to default
            └── Default RPC? → [ESCALATE] Infrastructure issue
```

### Autonomous Recovery Steps

1. **missing_universal_signer**
   ```typescript
   // Before initialize, verify signer exists
   if (!universalSigner || !universalSigner.account) {
     // Recreate signer from wallet
     const signer = await getWalletSigner(); // App-specific
     universalSigner = await PushChain.utils.signer.toUniversal(signer);
   }
   ```

2. **invalid_network**
   ```typescript
   // Normalize network constant
   const network = PushChain.CONSTANTS.PUSH_NETWORK.TESTNET; // Always use constant
   ```

3. **rpc_unreachable**
   ```typescript
   async function initializeWithRetry(signer, options, maxRetries = 3) {
     for (let i = 0; i < maxRetries; i++) {
       try {
         return await PushChain.initialize(signer, options);
       } catch (e) {
         if (i === maxRetries - 1) throw e;
         await sleep(Math.pow(2, i) * 1000); // Exponential backoff
       }
     }
   }
   ```

### Escalation Triggers
- Signer creation succeeds but initialize() still fails with signer error
- Default Push Chain RPC unreachable from multiple retry attempts
- Error message references internal SDK state corruption

---

## 2. Transaction Submission Failures

### Decision Tree

```
Error during sendTransaction()?
├── Is tx.to address invalid?
│   └── YES → [AUTO] Validate address format before submission
│       ├── EVM: ethers.isAddress() or /^0x[a-fA-F0-9]{40}$/
│       └── Return validation error to user
│
├── Is fee balance insufficient?
│   └── YES → [USER] Show balance requirement
│       └── On testnet? → [USER] Direct to faucet
│
├── Did user reject signature (error code 4001)?
│   └── YES → [USER] Show "retry" option, do NOT auto-retry
│
├── Is UEA upgrade required?
│   └── YES → [AUTO] Call upgradeAccount() then retry
│
├── Is target chain unsupported for CEA?
│   └── YES → [USER] Show supported chains list
│       └── Offer Route 1 alternative if applicable
│
└── Is error transient (network/timeout)?
    └── YES → [AUTO] Retry with backoff (max 3 attempts)
```

### Autonomous Recovery Steps

1. **Pre-submission validation**
   ```typescript
   function validateTransaction(tx) {
     const errors = [];
     
     // Validate to address
     if (typeof tx.to === 'string') {
       if (!/^0x[a-fA-F0-9]{40}$/.test(tx.to)) {
         errors.push('invalid_to_address');
       }
     } else if (tx.to?.address) {
       if (!/^0x[a-fA-F0-9]{40}$/.test(tx.to.address)) {
         errors.push('invalid_to_address');
       }
     }
     
     return errors;
   }
   ```

2. **UEA upgrade flow**
   ```typescript
   async function sendWithUpgradeCheck(client, tx) {
     const status = await client.getAccountStatus();
     
     if (status.uea.requiresUpgrade) {
       await client.upgradeAccount({
         progressHook: (p) => console.log(`Upgrade: ${p.message}`)
       });
     }
     
     return client.universal.sendTransaction(tx);
   }
   ```

3. **Transient failure retry**
   ```typescript
   async function sendWithRetry(client, tx, maxRetries = 3) {
     for (let i = 0; i < maxRetries; i++) {
       try {
         return await client.universal.sendTransaction(tx);
       } catch (e) {
         const isTransient = e.message.includes('timeout') || 
                            e.message.includes('network') ||
                            e.message.includes('ECONNREFUSED');
         if (!isTransient || i === maxRetries - 1) throw e;
         await sleep(Math.pow(2, i) * 1000);
       }
     }
   }
   ```

### Escalation Triggers
- upgradeAccount() fails after 3 attempts
- Transaction consistently fails with non-transient error after validation passes
- Progress hook shows unexpected state transitions

---

## 3. Transaction Execution Failures (Post-Submission)

### Decision Tree

```
Transaction submitted but execution failed?
├── Did transaction timeout (no confirmation)?
│   └── YES → [AUTO] Check explorer for tx status
│       ├── Found & succeeded → [AUTO] Return success with explorer URL
│       ├── Found & failed → Process as revert
│       └── Not found → [USER] Transaction likely dropped, offer retry
│
├── Did transaction revert?
│   └── YES → [AUTO] Parse revert reason
│       ├── "insufficient balance" → [USER] Show balance requirement
│       ├── "not authorized" → [USER] Show access error
│       ├── Unparseable reason → [ESCALATE] With tx hash
│       └── Application-specific → [USER] Show decoded error
│
└── Did asset movement (tx.funds) fail?
    └── YES → [AUTO] Check origin chain state
        ├── Funds still in wallet → [AUTO] Safe to retry
        └── Funds locked but not credited → [ESCALATE] Bridge issue
```

### Autonomous Recovery Steps

1. **Timeout recovery**
   ```typescript
   async function handleTimeout(client, txHash) {
     const explorerUrl = client.explorer.getTransactionUrl(txHash);
     
     // Check via explorer API or RPC
     try {
       const receipt = await getTransactionReceipt(txHash);
       if (receipt) {
         return {
           status: receipt.status === 1 ? 'success' : 'reverted',
           url: explorerUrl
         };
       }
     } catch (e) {
       // Transaction not found
     }
     
     return {
       status: 'dropped',
       action: 'retry',
       message: 'Transaction may have been dropped. Safe to retry.'
     };
   }
   ```

2. **Revert reason parsing**
   ```typescript
   function parseRevertReason(error) {
     const knownErrors = {
       'insufficient balance': 'insufficient_fee_balance',
       'execution reverted': 'tx_reverted',
       'not owner': 'access_denied',
       'paused': 'contract_paused'
     };
     
     const message = error.message?.toLowerCase() || '';
     for (const [pattern, code] of Object.entries(knownErrors)) {
       if (message.includes(pattern)) {
         return { code, recoverable: code !== 'contract_paused' };
       }
     }
     
     return { code: 'unknown_revert', recoverable: false };
   }
   ```

### Escalation Triggers
- Revert reason cannot be parsed and transaction was valid
- Asset movement shows funds locked but not credited after 10 minutes
- Repeated timeouts on transactions that appear in explorer as successful

---

## 4. Wallet Connection Failures

### Decision Tree

```
Wallet connection failed?
├── Did user explicitly reject (4001)?
│   └── YES → [USER] Show "Connect Wallet" button, no auto-retry
│
├── Was popup blocked?
│   └── YES → [USER] Show popup blocker warning
│
├── Is wallet not installed?
│   └── YES → [USER] Show install link for detected wallet type
│
├── Is wallet locked?
│   └── YES → [USER] Prompt to unlock wallet
│
└── Did connection timeout?
    └── YES → [AUTO] Retry once
        └── Still failing? → [USER] Show manual reconnect option
```

### Autonomous Recovery Steps

1. **Connection with detection**
   ```typescript
   async function connectWallet() {
     try {
       const signer = await requestWalletConnection();
       return await PushChain.utils.signer.toUniversal(signer);
     } catch (e) {
       if (e.code === 4001) {
         return { error: 'rejected', userAction: 'retry_button' };
       }
       if (e.message.includes('not installed')) {
         return { error: 'not_installed', userAction: 'install_link' };
       }
       if (e.message.includes('popup')) {
         return { error: 'popup_blocked', userAction: 'popup_warning' };
       }
       throw e; // Unknown error, escalate
     }
   }
   ```

### Escalation Triggers
- Wallet appears connected but signer creation fails
- Repeated connection failures not matching known patterns

---

## 5. Cross-Chain (CEA) Failures

### Decision Tree

```
CEA operation failed?
├── Is target chain unsupported?
│   └── YES → [USER] Show supported chains
│       └── Offer Push Chain (Route 1) alternative
│
├── Did CEA deployment fail?
│   └── YES → [AUTO] Retry once
│       └── Still failing? → [ESCALATE] With origin account and target chain
│
├── Did external chain execution fail?
│   └── YES → Check origin chain status
│       ├── Transaction reverted on external chain → Process as revert
│       └── Bridge relay failed → [ESCALATE] With cross-chain tx details
│
└── Did confirmation sync timeout?
    └── YES → [AUTO] Check both chains
        └── Success on external, not synced? → [ESCALATE] Sync issue
```

### Autonomous Recovery Steps

1. **Route fallback**
   ```typescript
   async function sendWithRouteFallback(client, tx) {
     // If Route 2 fails due to unsupported chain, offer Route 1
     try {
       return await client.universal.sendTransaction(tx);
     } catch (e) {
       if (e.message.includes('unsupported') && tx.to?.chain) {
         const fallbackTx = {
           ...tx,
           to: tx.to.address, // Convert to Route 1
           // Note: Logic must be adjusted for Push Chain execution
         };
         throw new Error(
           `Target chain not supported for CEA. ` +
           `Consider Route 1 execution on Push Chain instead.`
         );
       }
       throw e;
     }
   }
   ```

### Escalation Triggers
- CEA deployment fails on supported chain
- Cross-chain transaction succeeds on external chain but fails to sync to Push Chain
- Confirmation count requirements not being met after extended time

---

## 6. Error-Specific Recovery Reference

> The entries below are dedicated recovery procedures for errors not fully covered in Sections 1–5. Each entry maps to an `id` in [errors.json](https://push.org/agents/errors.json). Entries marked **⚠ inferred** have detection signals derived from observed SDK behavior rather than official documentation — the exact error string may vary across SDK versions; match defensively with `includes()` rather than strict equality.

---

### unsupported_chain ⚠ inferred

The signer's origin chain is not in Push Chain's supported list. Triggered at `initialize()` or `sendTransaction()` when the wallet is connected to a chain Push Chain does not yet bridge.

**Detection**
```typescript
// Pre-flight: catch before initialize()
const supported = PushChain.utils.chains.getSupportedChains(
  PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
);
const originChain = signerAccount.chain; // CAIP-2 string
const isSupported = supported.includes(originChain as any);
```

**Recovery**

1. Call `PushChain.utils.chains.getSupportedChains(PUSH_NETWORK.TESTNET)` and cache the result.
2. Compare `signer.account.chain` against the returned array before calling `initialize()`.
3. If not supported, surface a network-switch prompt listing the supported chain names via `PushChain.utils.chains.getChainName()`.
4. Re-create the signer after the user switches networks.

```typescript
import { PushChain } from '@pushchain/core';

async function validateOriginChain(signerAccount: { chain: string }) {
  const supported = PushChain.utils.chains.getSupportedChains(
    PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
  );
  if (!supported.includes(signerAccount.chain as any)) {
    const names = supported.map(c => PushChain.utils.chains.getChainName(c));
    throw new Error(
      `unsupported_chain: switch wallet to one of [${names.join(', ')}]`
    );
  }
}
```

**Escalation**: If the user's required chain is not in the supported list, escalate as a feature request with the chain ID and use case. Do not retry autonomously — no amount of retrying enables an unsupported chain.

*References: [supported-chains.json](https://push.org/agents/supported-chains.json) · capability `send_universal_transaction`*

---

### signature_mismatch ⚠ inferred

The custom signer's output format does not match what the SDK expects. EVM signers must return a 65-byte `Uint8Array` (r + s + v); Solana signers must return a 64-byte `Uint8Array`. Detection signal is inferred — the error string is not stable across SDK versions; match with `includes()`.

**Detection**
```typescript
// Caught after signing but before tx submission
// error.message may include 'signature', 'invalid sig', or 'verification'
const isSignatureMismatch = (e: Error) =>
  /signature|invalid sig|verification/i.test(e.message);
```

**Recovery**

1. Verify the custom signer's `signMessage` and `signTypedData` functions return `Uint8Array`, not a hex string.
2. For EVM: assert `sig.length === 65`. For Solana: assert `sig.length === 64`.
3. Prefer `PushChain.utils.signer.toUniversal(evmSigner)` over a manual custom signer — the wrapper handles encoding automatically.
4. Read back the origin account via `pushChainClient.universal.origin` and confirm the chain matches the signer's reported chain.

```typescript
import { PushChain } from '@pushchain/core';

function assertSignatureShape(sig: Uint8Array, chainNamespace: 'eip155' | 'solana') {
  const expected = chainNamespace === 'eip155' ? 65 : 64;
  if (sig.length !== expected) {
    throw new Error(
      `signature_mismatch: expected ${expected} bytes, got ${sig.length}. ` +
      `Use PushChain.utils.signer.toUniversal() instead of a custom signer.`
    );
  }
}
```

**Escalation**: If `toUniversal()` is used (not a custom signer) and the mismatch persists, escalate with wallet type, library version, and the raw `sig.length` returned.

*References: [push-backend SKILL.md](https://push.org/agents/skills/push-backend/SKILL.md) · [push-frontend SKILL.md](https://push.org/agents/skills/push-frontend/SKILL.md)*

---

### invalid_tx_hash ⚠ inferred

A malformed hash was passed to `trackTransaction()`. This is a pre-flight validation failure — it throws immediately before any network call. The correct fix is input sanitization, not a retry.

**Detection**
```typescript
// Validate before calling trackTransaction
const isValidEvmHash = (h: string) => /^0x[a-fA-F0-9]{64}$/.test(h); // 66 chars
```

**Recovery**

1. Assert the hash is exactly 66 characters for EVM (`0x` + 64 hex digits).
2. Assert the `0x` prefix is present — do not auto-add it; a hash without the prefix was likely truncated or mangled.
3. Use the hash exactly as returned from the `sendTransaction()` response's `.hash` field.
4. Do not modify, trim, or slice the hash string after receipt.
5. If the hash came from an external source (user input, database), surface a validation error to the user — this is not machine-recoverable.

```typescript
import { PushChain } from '@pushchain/core';

async function trackWithValidation(
  client: Awaited<ReturnType<typeof PushChain.initialize>>,
  txHash: string
) {
  if (!/^0x[a-fA-F0-9]{64}$/.test(txHash)) {
    throw new Error(
      `invalid_tx_hash: expected 0x + 64 hex chars, got "${txHash.slice(0, 10)}…"`
    );
  }
  return client.universal.trackTransaction(txHash, {
    chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
    waitForCompletion: true,
  });
}
```

**Escalation**: If the malformed hash was returned directly by `sendTransaction()` without any downstream transformation, escalate as an SDK bug with the raw response object.

*References: [track-transaction workflow](https://push.org/agents/workflows/track-transaction.md) · capability `track_universal_transaction`*

---

### tx_timeout ⚠ inferred

`trackTransaction()` exhausted its timeout before receiving a final confirmation. Caused by network congestion, a dropped transaction, or a slow RPC endpoint.

**Detection**
```typescript
// trackTransaction rejects with a timeout error
const isTimeout = (e: Error) =>
  /timeout|timed out|exceeded/i.test(e.message);
```

**Recovery**

1. Retry tracking with `advanced.timeout` doubled (e.g., 60 000 ms → 120 000 ms) and a fresh `advanced.rpcUrls` set to the default Push Chain RPC.
2. On the first retry, set `waitForCompletion: false` to get a non-blocking status snapshot instead of waiting for finality.
3. If the snapshot shows the tx exists on-chain, return the explorer URL via `pushChainClient.explorer.getTransactionUrl(txHash)` — the tx succeeded; only the tracking timed out.
4. If the tx is not found after 3 retry attempts, treat it as dropped and offer a safe retry of the original transaction.

```typescript
import { PushChain } from '@pushchain/core';

async function trackWithExtendedTimeout(
  client: Awaited<ReturnType<typeof PushChain.initialize>>,
  txHash: string,
  attempt = 1
): Promise<{ status: string; explorerUrl?: string }> {
  const MAX = 3;
  try {
    const result = await client.universal.trackTransaction(txHash, {
      chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
      waitForCompletion: attempt < MAX,
      advanced: { timeout: 60_000 * attempt },
    });
    return { status: 'confirmed', explorerUrl: client.explorer.getTransactionUrl(txHash) };
  } catch (e) {
    if (/timeout/i.test((e as Error).message) && attempt < MAX) {
      return trackWithExtendedTimeout(client, txHash, attempt + 1);
    }
    return { status: 'dropped' };
  }
}
```

**Escalation**: If timeouts recur across multiple transactions and the Push Chain explorer shows them succeeding, escalate as an RPC reliability issue with the RPC URL and observed timeout frequency.

*References: [track-transaction workflow](https://push.org/agents/workflows/track-transaction.md) · capability `track_universal_transaction`*

---

### uea_not_deployed

First-time user: the Universal Executor Account has not been deployed on Push Chain yet. **This is not a failure** — UEA deployment is lazy and happens automatically on the first write transaction. The SDK handles it transparently via progress events.

**Detection**
```typescript
const status = await client.getAccountStatus();
const needsDeploy = !status.uea.deployed; // false on first use
```

**Recovery**

1. Call `pushChainClient.getAccountStatus()` as a pre-flight check.
2. If `status.uea.deployed === false`, inform the user that their first transaction will take slightly longer (UEA is being deployed).
3. Proceed with `sendTransaction()` as normal — the SDK deploys the UEA automatically within the same transaction flow.
4. Ensure the user has sufficient origin chain native token balance to cover both UEA deployment gas and the transaction gas.

```typescript
import { PushChain } from '@pushchain/core';

async function sendWithFirstUseWarning(
  client: Awaited<ReturnType<typeof PushChain.initialize>>,
  tx: Parameters<typeof client.universal.sendTransaction>[0],
  onFirstUse?: () => void
) {
  const status = await client.getAccountStatus();
  if (!status.uea.deployed) {
    onFirstUse?.(); // e.g., show "Setting up your account…" UI
  }
  // No other action needed — SDK deploys UEA automatically
  return client.universal.sendTransaction(tx);
}
```

**Escalation**: If the automatic UEA deployment step fails repeatedly (progress hook stalls at SEND-TX-03-01), escalate with the origin account address, origin chain, and the last progress event received.

*References: [push-contracts SKILL.md](https://push.org/agents/skills/push-contracts/SKILL.md) · capability `derive_executor_account`*

---

### chain_not_supported_for_cea ⚠ inferred

A Route 2 or Route 3 transaction was dispatched to a chain that does not have a deployed CEA system. This is a pre-flight validation failure — catch it before `sendTransaction()` is called.

**Detection**
```typescript
// Check supported-chains.json or pre-flight before Route 2/3 dispatch
// Error during sendTransaction() references 'unsupported chain' or 'CEA' not found
const isCeaError = (e: Error) =>
  /unsupported.*chain|cea.*not.*supported|external.*chain/i.test(e.message);
```

**Recovery**

1. Before constructing a Route 2/3 transaction (`tx.to.chain` or `tx.from.chain` set), fetch `supported-chains.json` and verify the target chain has `cea_supported: true`.
2. Use `PushChain.utils.chains.getSupportedChains(PUSH_NETWORK.TESTNET)` as a runtime check — only chains in that list have a functioning CEA relay.
3. If the target chain is not CEA-supported, offer the user a Route 1 alternative (execute on Push Chain only) or explain that cross-chain dispatch to that target is not yet available.
4. Do not retry with the same `tx.to.chain` value — this is a configuration error, not a transient failure.

```typescript
import { PushChain } from '@pushchain/core';

async function validateCeaTarget(targetChain: string) {
  const supported = PushChain.utils.chains.getSupportedChains(
    PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
  );
  if (!supported.includes(targetChain as any)) {
    throw new Error(
      `chain_not_supported_for_cea: "${targetChain}" has no CEA relay. ` +
      `Supported: [${supported.join(', ')}]. Use Route 1 (Push Chain only) instead.`
    );
  }
}
```

**Escalation**: If the target chain appears in `supported-chains.json` as CEA-supported but the error still fires, escalate with the chain ID, SDK version, and full error message — this may indicate a contract redeployment or stale chain registry.

*References: [supported-chains.json](https://push.org/agents/supported-chains.json) · [send-multichain-transaction workflow](https://push.org/agents/workflows/send-multichain-transaction.md) · capability `send_multichain_transaction`*

---

### uea_upgrade_required

The user's Universal Executor Account was deployed under an older protocol version and must be upgraded before transactions will succeed. `upgradeAccount()` is gasless and requires only a signature.

**Detection**
```typescript
const status = await client.getAccountStatus();
const needsUpgrade = status.uea.requiresUpgrade === true;
// Also: sendTransaction() throws with a version-mismatch message
```

**Recovery**

1. Call `pushChainClient.getAccountStatus()` before every transaction (or cache the result for the session).
2. If `status.uea.requiresUpgrade === true`, call `pushChainClient.upgradeAccount()` immediately — it is gasless and completes with a single wallet signature.
3. After `upgradeAccount()` resolves, call `getAccountStatus({ forceRefresh: true })` to confirm `requiresUpgrade === false`.
4. Retry the original transaction.

```typescript
import { PushChain } from '@pushchain/core';

async function ensureUpToDate(
  client: Awaited<ReturnType<typeof PushChain.initialize>>
): Promise<void> {
  const status = await client.getAccountStatus();
  if (!status.uea.requiresUpgrade) return;

  await client.upgradeAccount({
    progressHook: (p) => console.log(`[upgrade] ${p.message}`),
  });

  const refreshed = await client.getAccountStatus({ forceRefresh: true });
  if (refreshed.uea.requiresUpgrade) {
    throw new Error('uea_upgrade_required: upgrade completed but status unchanged — escalate');
  }
}
```

**Escalation**: If `upgradeAccount()` fails or `requiresUpgrade` remains `true` after upgrade, escalate with the account address, UEA version from `getAccountStatus()`, and the full error from `upgradeAccount()`.

*References: [push-backend SKILL.md](https://push.org/agents/skills/push-backend/SKILL.md) · capability `upgrade_account`*

---

### funds_transfer_failed ⚠ inferred

The `tx.funds` asset-transfer step failed during a universal transaction. Common causes: insufficient token balance, unsupported token, or non-`bigint` amount. Detection signal is inferred — the exact error string varies.

**Detection**
```typescript
// Progress hook stalls at or errors on SEND-TX-06-* events
const isFundsError = (e: Error) =>
  /fund|transfer|lock|bridge|insufficient/i.test(e.message);
```

**Recovery**

1. Verify the user's balance of the specified token on the origin chain covers `tx.funds.amount` plus estimated gas.
2. Confirm `tx.funds.token` is present in `PushChain.utils.tokens.getMoveableTokens(originChain).tokens`.
3. Assert `tx.funds.amount` is a `bigint` — passing a string or `number` type is a common cause of silent failures.
4. Retry once if the error appears transient (network-related). If error persists after the above checks pass, escalate.

```typescript
import { PushChain } from '@pushchain/core';

async function validateFundsField(
  originChain: typeof PushChain.CONSTANTS.CHAIN[keyof typeof PushChain.CONSTANTS.CHAIN],
  token: string,
  amount: bigint
) {
  const { tokens } = PushChain.utils.tokens.getMoveableTokens(originChain);
  const isMoveable = tokens.some(t => t.symbol === token || t.address === token);
  if (!isMoveable) {
    throw new Error(`funds_transfer_failed: "${token}" is not moveable on ${originChain}`);
  }
  if (typeof amount !== 'bigint') {
    throw new Error(`funds_transfer_failed: amount must be bigint, got ${typeof amount}`);
  }
}
```

**Escalation**: If balance is sufficient, the token is confirmed moveable, and `amount` is a `bigint`, but the error persists, escalate with the token type, amount in smallest units, origin chain, and the SEND-TX-06-* event sequence from the progress hook.

*References: [send-universal-transaction workflow](https://push.org/agents/workflows/send-universal-transaction.md) · capability `send_universal_transaction`*

---

### multicall_partial_failure ⚠ inferred

One or more sub-calls in a batched multicall reverted while the outer transaction was mined. Whether other sub-calls rolled back depends on the contract's atomicity configuration. Detection signal is inferred.

**Detection**
```typescript
// Transaction receipt exists (not a revert of the outer tx)
// but sub-call status events in logs show individual failures
const receipt = await txResponse.wait();
// receipt.status === 1 (outer tx mined) but individual operations may have failed
```

**Recovery**

1. Parse `receipt.logs` for per-call status events emitted by the multicall contract. If the contract emits a `CallExecuted(index, success, returnData)` pattern, identify which indices have `success === false`.
2. For failed sub-calls, extract the `returnData` and decode it against the target contract's ABI for a human-readable revert reason.
3. Retry only the failed operations as individual `sendTransaction()` calls — do not re-submit the full batch.
4. If per-call events are not emitted (opaque multicall), treat the entire batch as suspect: surface the tx hash to the user and ask them to verify on-chain state before retrying any sub-operation.

```typescript
import { PushChain } from '@pushchain/core';

async function handleMulticallResult(
  client: Awaited<ReturnType<typeof PushChain.initialize>>,
  txHash: string
) {
  const explorerUrl = client.explorer.getTransactionUrl(txHash);
  // Parse receipt logs — contract-specific; example uses a standard multicall pattern
  const receipt = await client.universal.trackTransaction(txHash, {
    chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
    waitForCompletion: true,
  });
  // Surface explorer URL regardless — agent cannot determine partial state without ABI
  return {
    explorerUrl,
    note: 'Inspect logs for per-call success flags before retrying individual operations.',
  };
}
```

> **Note**: Push Chain contracts have no cross-chain atomicity guarantee. A multicall spanning multiple chains may partially succeed. See the "No cross-chain atomicity" row in [push-contracts/SKILL.md](https://push.org/agents/skills/push-contracts/SKILL.md) for implications.

**Escalation**: If multicall behavior (atomicity or rollback semantics) differs from what the contract documentation claims, escalate with the full batch payload, the receipt, and the logs decoded from each sub-call.

*References: [push-contracts SKILL.md](https://push.org/agents/skills/push-contracts/SKILL.md) · capability `execute_transaction_cascade`*

---

## 7. General Recovery Patterns

### Retry with Exponential Backoff
```typescript
async function withRetry(fn, maxRetries = 3, baseDelay = 1000) {
  let lastError;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      if (isUserRejection(e)) throw e; // Never retry user rejections
      if (i < maxRetries - 1) {
        await sleep(baseDelay * Math.pow(2, i));
      }
    }
  }
  throw lastError;
}

function isUserRejection(e) {
  return e.code === 4001 || e.message?.includes('rejected');
}
```

### State Verification Before Action
```typescript
async function verifyBeforeTransaction(client, tx) {
  const checks = [];
  
  // Check account status
  const status = await client.getAccountStatus();
  if (status.uea.requiresUpgrade) {
    checks.push({ action: 'upgrade', blocking: true });
  }
  
  // Validate transaction params
  const validationErrors = validateTransaction(tx);
  if (validationErrors.length > 0) {
    checks.push({ action: 'fix_params', errors: validationErrors, blocking: true });
  }
  
  return checks;
}
```

### Progress Hook Integration
```typescript
function createProgressHandler(onUpdate, onError) {
  return (progress) => {
    onUpdate(progress);
    
    // Detect error states from progress
    if (progress.level === 'ERROR') {
      const errorId = progressIdToErrorId(progress.id);
      onError({ id: errorId, message: progress.message });
    }
  };
}

function progressIdToErrorId(progressId) {
  const mapping = {
    'SEND-TX-04-04': 'wallet_connection_rejected',
    'SEND-TX-99-02': 'tx_reverted',
    'UEA-MIG-9902': 'uea_upgrade_failed'
  };
  return mapping[progressId] || 'unknown_error';
}
```

---

## 8. Escalation Protocol

When autonomous recovery fails, escalate with:

1. **Error Context**
   - Full error message and stack trace
   - Error ID from errors.json
   - SDK version (`@pushchain/core` version)

2. **Account Context**
   - Origin account (chain + address)
   - UEA status (deployed, version, requires upgrade)
   - Account mode (signer vs read-only)

3. **Transaction Context** (if applicable)
   - Transaction hash
   - Transaction parameters (to, value, data summary)
   - Route type (1, 2, or 3)
   - Progress hook events received

4. **Environment Context**
   - Network (testnet/mainnet)
   - Custom RPC URLs if any
   - Browser/runtime environment

### Escalation Template
```
## Push Chain Error Report

**Error ID**: {error_id}
**Error Message**: {message}
**SDK Version**: {version}

### Account
- Origin: {chain}:{address}
- UEA Deployed: {yes/no}
- UEA Version: {version}
- Mode: {signer/read-only}

### Transaction (if applicable)
- Hash: {hash}
- Route: {1/2/3}
- Target: {to_address} on {chain}
- Last Progress Event: {event_id}

### Recovery Attempted
{list of recovery steps taken}

### Additional Context
{any relevant logs or state}
```