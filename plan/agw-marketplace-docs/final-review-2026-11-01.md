# Final review — November 1, 2026

Reviewed all twelve authored pages, dependency/lock changes, sidebar additions, checker changes and metadata synchronization against installed @pushchain/core@6.0.27-alpha.9 and the latest v4 migration records.

## Findings addressed

- Card criteria example compared a receipt balance with raw principal without stating the unit/accounting assumption. Added explicit compatible-decimal and one-to-one accounting requirement; other conversions require different criteria.
- Marketplace execution prose did not explicitly identify AGW client configuration. Linked AGW execution and specified agenticWallet for the provider/agent execution client.
- Restored the one-active-marketplace-job-per-wallet boundary, confirmed by the published SDK's WALLET_HAS_ACTIVE_JOB guard.
- Replaced the dangling preset-update cross-reference with the effect of resetting counters and reviewing previously spent authority.
- Removed implementation acceptance history from the public evaluator overview; retained it in internal evidence.
- Enabled strict TypeScript checks for examples; all fifteen blocks pass.
- Formatted sidebar/checker changes consistently and removed an unused example import.

## Residual limits

- Multi-rule opening/deposit/funding intentionally remain gated pending compatible all-rule hook support; authoring and preview capacity do not establish execution support.
- Current docs are alpha.9/Marketplace 2.1 checkpoint-specific. October 29 live results are historical; November 1 live acceptance is SDK-recorded, not newly executed here.
- Existing global mobile header crowding and 13px page overflow remain, independently reproduced on the unchanged initialization page. No new docs-specific layout defect found in the preceding visual review.
- UI kit still has its existing 6.0.26 transitive core dependency. Build and offline checks pass; no UI-kit upgrade or wallet-connection regression suite is claimed.
- Generated agent workflows/LLMS have not been bulk-regenerated. Only three checked constant metadata values were synchronized to the new dependency; this is not a claim that the generated corpus documents all new APIs.

No private keys, funded tests, SDK/contracts edits, commits, pushes or deployments in this review.

## Final checks

Final English build passes (/tmp/agw-final-reviewed-build.log), including the restored active-job boundary. All twelve page routes and 51 local article links/anchors pass. All fifteen snippets pass strict TypeScript against alpha.9; twelve MDX pages compile; existing Universal Read offline assertions pass; git diff --check passes. Existing site warnings remain as previously recorded.

Concurrent SDK documentation updates appeared during this review: alpha.9 publication/release records and expanded multi-rule team questions. Read the diff and confirmed it agrees with the documented gate; left those changes untouched. V5 was advanced by the other session to release commit 19dbd3dd. Do not treat its current dirty documentation state as changes made by this website task.
