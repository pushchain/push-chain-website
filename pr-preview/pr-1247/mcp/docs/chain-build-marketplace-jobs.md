---
title: "Fund, Track and Cancel Jobs"
url: "https://pushchain.github.io/docs/chain/build/marketplace-jobs/"
section: "build"
lastUpdated: "2026-11-01T17:05:31+05:30"
description: "Fund, Track and Cancel Jobs | Build | Push Chain Docs"
---

# Fund, Track and Cancel Jobs

SDK checkpoint

These examples target the Marketplace 2.1 SDK APIs in the 6.0.27-alpha.9 release. Confirm your installed package version before using them.

## Deposit and fund

```ts
import { PushChain, type JobWatchCursor } from '@pushchain/core';
import { keccak256 } from 'viem';
async function deposit(owner: PushChain, jobId: bigint) {
  return owner.market.deposit(jobId, { pcAmount: 10n ** 18n, funding: 'push' });
}
async function fundReviewed(owner: PushChain, jobId: bigint, budget: bigint, specHash: `0x${string}`) {
  return owner.job.fund(jobId, {
    expectedBudget: budget,
    evaluation: { expectedSpecHash: specHash, maxReadFee: 10n ** 18n },
  });
}
```

Deposit reconstructs the exact opened card version and tops the wallet up to principal, provider-fee and PC targets. A shared principal/fee token combines requirements. A PC target is not a whole-job fee quote. `funding: 'origin'` requires actual registered routes for the needed assets; eUSD must be available on Push when no origin route exists. Deposit never substitutes today's card terms for the signed historical version.

The provider sets the budget. The client funds against its reviewed budget and criteria hash. Use `job.quoteEvaluation` to inspect snapshot/evaluation read costs and existing prepaid PC. Funding validates the compatible evaluator and hook, checks the criteria hash and batches required approvals, PC prepayment and kernel funding atomically. Read-fee caps bound the quoted/additional payment; they do not promise a fixed future fee.

Derive the expected hash from the criteria the client reviewed, rather than accepting a replacement read just before funding:

```ts
function reviewedHash(plan: import('@pushchain/core').JobPlan) {
  return keccak256(PushChain.utils.job.encodeJobSpec(plan.jobSpec.spec));
}
async function price(provider: PushChain, jobId: bigint, rawEusd: bigint) {
  const tx = await provider.job.setBudget(jobId, rawEusd);
  console.log('Save price hash:', tx.hash);
  await tx.wait();
}
function observe(client: PushChain, jobId: bigint, cursor?: JobWatchCursor) {
  return client.job.watch(jobId, event => {
    // Persist a non-error cursor only after processing the event.
    console.log(event.kind, event.cursor);
  }, cursor ? { cursor } : { pollIntervalMs: 3000 });
}
```

## Execute and evaluate

For execution, initialize a provider/agent client with the job wallet as `agenticWallet`, as shown in [AGW execution](/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-execution/). The provider executes only the granted rules, then calls `job.submit`. Optional `executionBlocks` maps each POST chain to the block containing actual work. The SDK checks that Push has tracked those blocks with fresh observations before submitting. This preflight does not change on-chain block selection or enable multi-rule marketplace funding.

`job.status` and `job.watch` expose kernel lifecycle and compatible evaluator facts. `job.verify` supports snapshot/evaluation retries and settlement; a retry may require the client, and retrying does not silently add funds. A recorded verdict may need settlement if kernel completion could not run. `job.claimReadFees` returns eligible remaining prepaid PC to the client.

`job.cancel` uses client authority and revokes recorded marketplace permissions in the owner batch. It does not withdraw deposited wallet assets. Expiry/grace refunds use `job.claimRefund`. Provider completion or evaluator rejection does not automatically acquire permission-revocation authority. Permission binding itself does not prevent later owner revocation.

Use structured errors and retain pending transaction hashes. A submitted atomic transaction never falls back to sequential transfers. Coordinate concurrent funding clients rather than automatically repeating a partially observed transaction.

| Operation | Funds / authority | Result |
| --- | --- | --- |
| `market.deposit` | Owner transfers required balances to AGW | Deposit steps and any pending hash. |
| `job.setBudget` | Provider proposes raw eUSD price | Transaction response. |
| `job.quoteEvaluation` | Read-only | Spec hash, snapshot/evaluation quote, prepaid PC and top-up. |
| `job.fund` | Client approves fee and criteria; prepays reads | Atomic transaction response. |
| `job.submit` | Provider submits deliverable and optional work blocks | Transaction response; not a completion guarantee. |
| `job.status` / `list` | Read-only | Job / `{ jobs }`. Use status/watch for deliverables. |
| `job.verify` | Retry or settle compatible evaluator | Transaction response; explicit value/cap for extra PC. |
| `job.claimReadFees` | Return eligible unused prepaid PC | Transaction response. |
| `job.cancel` | Client rejects Open job and revokes permissions | Transaction response; wallet balances remain. |
| `job.claimRefund` | Expiry/grace escrow refund to recorded client | Transaction response. |

Kernel states are `Open`, `Funded`, `Submitted`, `Completed`, `Rejected` and `Expired`. Watchers return a stop function; persist their exact block/log cursor. `WATCH_REORG` stops the watcher: reload status and choose a reviewed restart block. A successful submission is distinct from a verdict and settlement.

`DEPOSIT_INCOMPLETE` retains completed steps and pending broadcasts. Rehydrate hashes with `universal.trackTransaction(hash, { chain })` and pass recovered steps as `resume`; do not replenish a transfer whose balance was already consumed. `HISTORY_UNAVAILABLE` requires authentic opening/card history, not today's listing. Coordinate deposits with agent execution. `providerFee` overrides the deposit reserve; `pcAmount` is a target wallet PC balance, not a whole-job fee quote.
