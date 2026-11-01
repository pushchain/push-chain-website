# Marketplace 2.1 / alpha.9 documentation migration

## Source checkpoint

V4: implementation 8bc8f9be, planning tip 12128155. V5: equivalent implementation ccc5d3dd. Read current SDK-CHANGELOG, MARKETPLACE.md, marketplace-2.1-migration.md, questions.md and November 1 live acceptance. AGW.md is unchanged from the prior reviewed checkpoint.

Registry initially returned 404; subsequent lookup confirmed @pushchain/core@6.0.27-alpha.9 with integrity sha512-OmSn4+KUYr+zaoWmcIHWzUhcOuywRqRwP2mS0tEPvM9NX7YLupRmqiRgAY7nyP0I4t/RsaKquLahw45Qp6B96Q==. Pin the actual published package, not v5's still-alpha.8 source metadata. Original website dependencies must remain unchanged; remove the documentation worktree's shared node_modules symlink before installing.

## Documentation changes

- Replace default manual 2.0/pUSDC model with 2.1/eUSD and automatic PRE/POST evaluation.
- Card rules are ordered arrays with per-rule chains. Exactly one principal total across the array. Cards have duration bounds, no listing-level chain/principal ranges/execution or settlement windows.
- Remove executeBy from opening inputs and timing fields from criteria. Check sides use left/right read-index arrays; logic leaf is COMPARE.
- JobPlan uses sessions; opening and mappings return rulesIds arrays.
- Preview/register support up to live cap four; opening/funding/deposit refuse multiple rules pending upgraded hook. Preserve single-rule operational examples.
- Funding reviews both expected budget and criteria hash; PC evaluator prepayment differs from deposit and eUSD escrow.
- Canonical utils.job and explicit utils.job.prePost use the same current format. withEvaluator is custom-deployment scoping, not required to activate the default evaluator.
- Unsupported criteria remain inspectable with evaluation unavailable and jobSpecDecodeError; status/watch, not list history scans, supply deliverables.

Keep the existing seven-page marketplace sequence and five AGW pages. Update package notes and snippet checker to use the installed published package. No executable playground or automatic minting/funding added.

## Evidence boundary

November 1 SDK record reports nine distinct live scenarios across reruns, 2312 unit passes and cleanup at block 24871325. Live evaluator case validates PRE/POST plumbing with nonnegative balance delta, not an investment strategy. Earlier October 29 website tests are historical 2.0 acceptance, not proof of 2.1 behavior. Do not relabel them as current.

Remaining contract dependency: all-rule hook binding ABI/deployment, including revocation and terminal cleanup. The timing/stack/payment-token questions are resolved for this checkpoint. Future changes still require source/package/deployment revalidation.

No funded tests, SDK edits, contract edits, pushes or deployment in this documentation migration.

## Package and checks

Published alpha.9 installed successfully in this worktree's own node_modules. Package/runtime inspection confirms Marketplace 2.1 addresses, eUSD, and canonical PRE/POST helpers. Fifteen TypeScript blocks typecheck independently by page against the installed package; twelve MDX pages compile. The original website remains on 6.0.26. UI kit retains its existing transitive 6.0.26 dependency; no UI-kit upgrade is included.

Dependency upgrade exposed stale Universal Read machine metadata: alpha.9 exports CHAIN.WEB2/READ.WEB2 as `web2`, whereas the static file recorded `web2:https`. Synchronized only current_sdk_version and those two constants; no bulk generation. Updated the existing checker to compare the installed version against package.json and generated metadata rather than hard-coding 6.0.26. All eleven existing Universal Read offline examples and parity assertions now pass. This does not establish fresh live Universal Read behavior under alpha.9.

Existing agent-link checker passes 175 local targets, skipping HTTP targets. Full English build and final route/render checks recorded below when complete. No newly executed live tests; November 1 SDK acceptance remains externally recorded evidence.

## Final validation

- English Docusaurus build passed: /tmp/agw-alpha9-build.log. Existing duplicate blog-route/broken-anchor warnings and viem/ox dynamic-dependency warnings remain; no new-page link failures.
- Built HTML contains all twelve new routes, headings and 50 resolving local article links/anchors.
- Twelve MDX sources compile; fifteen snippets typecheck against installed alpha.9.
- Eleven existing Universal Read offline examples and constant/address parity checks pass.
- Agent-resource local link check: 175 pass, 583 HTTP targets skipped.
- Fresh Chrome visual review blocked by unattached debugger, including attempted reconnection to the agent-created preview tab. Previous October 29 visual checks are not presented as fresh evidence. Layout components/styles unchanged.
- SDK checkouts remain clean/read-only; original website installed SDK remains 6.0.26. No funded transactions or deployment.

Changed beyond the documentation/records: package.json and yarn.lock pin alpha.9; scripts/check-universal-read-examples.mjs follows the declared pin; three static/agents/constants.json values synchronized. No translation or bulk generated-resource churn.

## Visual review follow-up — November 1

Browser connection recovered on a fresh Chrome tab; prior visual-review blocker is resolved. Inspected desktop overview, provider examples/API table and evaluator page, plus mobile funding/troubleshooting screenshots at 390×844. Browser DOM/layout checks covered all twelve new pages: headings present, each code block and table constrained to 358px content width with horizontal overflow:auto. Opened mobile navigation and followed AgentCards and JobSpec Templates successfully.

Existing global mobile header crowding/13px page overflow remains: the unchanged Initialize Push Chain Client page also reports 403px document width at a 390px viewport. No new documentation-specific layout defect found. Restored default viewport. No source/layout changes or additional live transactions were needed for reconnection/review.
