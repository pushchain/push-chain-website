---
title: "Paid Criteria Previews"
url: "https://pushchain.github.io/docs/chain/build/marketplace-previews/"
section: "build"
lastUpdated: "2026-11-01T17:05:31+05:30"
description: "Paid Criteria Previews | Build | Push Chain Docs"
---

# Paid Criteria Previews

SDK checkpoint

These examples target the Marketplace 2.1 SDK APIs in the 6.0.27-alpha.9 release. Confirm your installed package version before using them.

## Paid observations

`PushChain.utils.job.previewJobSpec` uses the canonical timing-free PRE/POST format. It prepares paid Universal Reads, enforces a total read-fee cap and returns values, checks, request IDs and fee evidence. Transaction gas is separate. A preview is an observation, not a job evaluator verdict.

```ts
import { PushChain, type JobSpecTemplate } from '@pushchain/core';
import type { Address } from 'viem';

async function previewCriteria(client: PushChain, template: JobSpecTemplate,
  wallet: Address, principal: bigint, blockNumbers: Record<number, bigint>) {
  return PushChain.utils.job.previewJobSpec(template, {
    client, wallet, principal, blockNumbers,
    maxTotalFee: 10n ** 16n,
    advanced: { timeout: 120_000 },
  });
}
```

Provide the reviewed historical block number for each PRE read, keyed by read index. POST reads default to a current observation. A present-day read cannot silently replace the baseline. Template wallet markers resolve to destination CEAs, not the AGW's Push address. Explicit accounts must identify the correct chain.

`pass` and checks can be true, false or unknown. Missing/unreadable results cannot establish success. Percentage evaluation uses exact cross-multiplication; nonpositive denominators fail. Criteria use summed left/right read indexes and do not contain execution timing fields.

## Recover without paying again

`PREVIEW_INCOMPLETE` retains known request IDs and transaction hashes. Inspect uncertain submissions before retrying. Pass `resume: requestIds` in read order to reuse requests; the SDK authenticates their destinations, calls and measurement requirements. Recovery accepts `maxTotalFee: 0n`, reports `fees.newlyPaid` as zero, and retains original deposits in `fees.paid`.

See [Track Universal Read](/push-chain-website/pr-preview/pr-1247/docs/chain/build/track-universal-read/) for saved requests. A local timeout does not cancel the request.
