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

## 6. General Recovery Patterns

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

## 7. Escalation Protocol

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