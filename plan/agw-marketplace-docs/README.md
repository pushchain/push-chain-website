# AGW and marketplace documentation working record

**Current: November 1, 2026.** [Marketplace 2.1 / published alpha.9 migration](migration-2026-11-01.md) supersedes the default-deployment, package availability and external-decision statements in the October 29 records below. Earlier live results remain historical evidence only.

## 2026-10-29 — documentation delivery

Worktree: push-chain-website-agw-docs; branch docs/agw-marketplace; website base c1824661805. SDK checkouts left read-only: v4 tip 213fe1dd, v5 implementation 1076106b, package metadata 6.0.27-alpha.7. Contracts checkout tip a7a8547. Publication is not established.

Scope: five AGW pages and seven marketplace pages under Build; sidebars.js supplies ordered categories. Pages cover wallet management, rules, presets, recovery, cards, review/open, deposits and escrow, previews and explicit evaluators.

Style checklist: follow Initialize Push Chain Client and Read Universal State for frontmatter IDs, slugs, sidebar position, head title and progressive overview. Use fenced TypeScript, plain API names, tables and Docusaurus admonitions. No executable playgrounds with the website's pinned 6.0.26. Authored sources are docs MDX and sidebars.js; translations, static agent resources, LLMS and MCP artifacts have separate generation pipelines and were not regenerated.

Validation: final English Docusaurus build passes; 12 MDX pages compile; 18 TypeScript blocks pass independently by page against v5 built declarations and matching viem. All 51 local article links/anchors resolve. Desktop/mobile browser review completed, with existing global mobile overflow recorded. See [verification](verification.md) for evidence, limits and commands.

External dependencies: publication of a compatible SDK package remains unverified; examples are package-dependent and no playground is enabled. Compatible automatic evaluator rollout, marketplace timing decisions and multi-chain card design remain outside the documented default deployment. No documentation work is waiting on those decisions.

## Changed pages

AGW directory: `docs/chain/03-build/05-agentic-wallets/`

- 01-agentic-wallets.mdx — overview/account model
- 02-agentic-wallet-management.mdx — initialization, quickstart and management
- 03-agentic-rules.mdx — rules, budgets, EVM and Solana
- 04-agentic-presets.mdx — Uniswap V3 and Aave V3
- 05-agentic-execution.mdx — execution, errors and recovery

Marketplace directory: `docs/chain/03-build/06-agentic-marketplace/`

- 01-agentic-marketplace.mdx — overview/roles
- 02-marketplace-cards.mdx — cards, templates and provider management
- 03-marketplace-opening.mdx — discovery, review, opening and recovery
- 04-marketplace-jobs.mdx — deposits, pricing, escrow and lifecycle
- 05-marketplace-previews.mdx — paid reads and recovery
- 06-marketplace-evaluator.mdx — separate PRE/POST profile
- 07-marketplace-troubleshooting.mdx — compatibility and recovery

Also changed: sidebars.js. Validation helper: check-examples.cjs.

## Changelog

2026-10-29: isolated worktree created from clean main; initial pages drafted; bad relative links corrected after build; examples made self-contained per page; quickstart, provider updates, API tables and troubleshooting added; stale readiness and live liquidity claims corrected; retired API history removed; final build and rendered checks completed. SDK/contracts remain read-only, no dependency upgrades, pushes or deployments.

2026-10-29 follow-up: user authorized live testnet checks. See [live validation](live-validation-2026-10-29.md): 11 SDK cases and the exact website quickstart passed; six read-only preset checks passed; preset execution blocked by RPC/account lookup failures. SDK/contracts are explicitly provisional and require the update gate above. Earlier no-funded-E2E statements describe the initial documentation pass only.
