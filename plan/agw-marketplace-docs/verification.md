# Verification and delivery — 2026-10-29

## Source reconciliation

- v4 planning tip 213fe1dd; implementation ad75da0e. v5 implementation 1076106b; package metadata 6.0.27-alpha.7. Reviewed AGW.md, MARKETPLACE.md, newest SDK-CHANGELOG entries, AGW/marketplace planning indexes, marketplace status/readiness/questions and October 26 Git delivery/demo alignment records. Older planning statements about v5, unimplemented deposits and CEA mismatches are superseded.
- Public API signatures: agentic/agentic.ts, agentic/agentic.types.ts, market/types.ts, market/market.ts, job/types.ts and job/job.ts. Public authoring defaults checked in agentic/public-rule.ts. Preset catalog, options and policy checked in agentic/presets/{catalog,types,default-policy}. JobSpec helper exports and descriptions checked in job-spec/{index,helpers}. Evaluator scoping, submit-height and explicit-fee checks have focused evaluation.spec.ts evidence; deposit history, interrupted submission and consumed-step guards have deposit.spec.ts evidence.
- Contracts checkout a7a8547 is a different tip from the pinned deployed source. Do not infer the deployed ABI from that checkout's current branch. SDK deployment.ts pins marketplace v2 to 443b4e2; recorded evaluator acceptance uses 8666c2a. Historical acceptance: 2,306 unit tests, nine local evaluator scenarios, manually supplied consensus results. These were not rerun or represented as new chain validation.
- Actual installed website package inspection: version 6.0.26; PushChain.utils.agentic, market and job all absent. Website dependencies remain unchanged. Npm publication of implementation 1076106b remains unverified; no installation command claims that alpha.7 contains it.

## Style and generation

References: 03-Initialize-Push-Chain-Client.mdx; 03-universal-transactions/02-Send-Universal-Transaction.mdx; 04-universal-reads/01-Read-Universal-State.mdx and 04-Track-Universal-Read.mdx; tutorials/02-power-features/01-Tutorial-Batch-Transactions.mdx; 102-Build-Section.mdx.

Checklist: explicit stable ID/slug, displayed sidebar and order; head title; progressive concepts then examples and API tables; raw units and required context; normal Docusaurus callouts; existing PushAPIReference styling. Tabs/TabItem are useful for alternative runtimes, not needed for these single-context examples. TutorialTimer is a reading estimate, not execution timing. NodeJSVirtualIDE executes browser-loaded SDK examples, so it is intentionally absent with the incompatible installed package.

Author docs and sidebars only. build.agents.preseed.mjs reads docs into preseed; model-generated agent resources and extracted examples have separate scripts; LLMS assembly and MCP post-build artifacts are derivatives. Translations live separately and use merge/generation scripts. No translation, static agent or LLMS regeneration is included. Local ignored build outputs are validation artifacts.

## Scope delivered

AGW: account model; signer initialization; native quickstart with explicit separate funding; discovery and management API; rule fields/pins/expiry/asset/gas semantics; update/delete IDs; EVM and Solana restrictions; six preset configurations and customization; errors and recovery.

Marketplace: roles and default deployment; cards and templates; registration/update/activation; discovery/review/open with saved-plan recovery; deposit/price/fund/submit/status/watch; cancellation and refund; paid preview costs and recovery; separately configured PRE/POST profile; troubleshooting.

Files are listed by directory in README. Open external decisions remain rollout stack, timing fields and multi-chain cards, not prerequisites for documenting the currently supported default. No public docs speculate about their answers.

## New validation

- Twelve MDX pages compile.
- Eighteen TypeScript blocks typecheck independently by page against v5 built public declarations and its matching viem types. Helpers within a page share their imports/setup. No code is executed.
- Initial full build correctly found nine bad relative links; corrected to absolute documentation routes.
- MCP plugin compiles.
- Existing agent-link check: 175 local targets pass; 583 HTTP targets intentionally skipped. This check covers existing generated resources, not semantic freshness.
- git diff --check passes.
- Final English build and browser inspection results appended below.

No funded E2Es, public chain writes, deployment, publication, push or SDK/contracts changes.

### Final results

`node node_modules/@docusaurus/core/bin/docusaurus.mjs build --locale en` passes (log: /tmp/agw-docs-build-final.log). Existing duplicate blog routes and unrelated broken-anchor warnings remain; new pages have no broken article links. A separate built-HTML check verifies all 12 routes and 51 article-local links/anchors. Only English was built; translations were not regenerated.

Chrome inspection: desktop wallet quickstart and evaluator profile; mobile 390×844 headings, callouts, code and tables, with route/DOM inspection across all twelve pages. Code and tables retain local horizontal scrolling. A 403px page width at 390px viewport also occurs on the existing Initialize Push Chain Client page; header clipping/global overflow is pre-existing and unchanged. Temporary viewport override reset. No browser execution of SDK examples.

Final SDK and contracts Git status checks are clean. Website change scope is twelve MDX pages, sidebars.js and these internal records/checker. Installed dependencies are reused through an ignored node_modules symlink. Generated build/MCP outputs are ignored and not included in authored changes.
