# Live validation — 2026-10-29

User explicitly authorized funded testnet validation using the SDK E2E environment. This supersedes the earlier no-funded-E2E constraint for this validation only. No key values are printed, copied into docs or committed.

SDK implementation remains provisional. All results apply to 1076106b (v5) and the deployed contracts observed during this run, not future changes. Revalidate API exports, rule encoding/defaults, preset catalog, marketplace wire/timing, evaluator profile/wiring, funding/recovery and examples whenever the SDK/contracts checkpoint changes. Refresh typechecks, live evidence and website build together. Never promote local PRE/POST validation into a live rollout claim.

Execution uses a git-archive copy at /tmp/agw-docs-live-20261029 with shared read-only dependencies. Environment is loaded from the existing v4 packages/core/.env without copying it. SDK and contracts checkouts remain untouched. Native smoke funding is 0.05 PC per fresh agent, 0.01 PC for the native execution wallet, and 0.1 PC for the fresh marketplace owner, plus gas. Fresh cards/jobs are cleaned up by the harness.

Tests are SDK acceptance scenarios corresponding to documented APIs, not a claim that every illustrative website function was executed unchanged. Exact ERC-20 quickstart, all six protocol presets, Solana execution and PRE/POST live rollout must be distinguished from native/marketplace smoke results.

## Results

- Eight selected SDK smoke tests passed: two creation tests, five native owner/agent/policy tests, and one marketplace registration/open/cancel/revoke test. Three unselected cases skipped.
- Three funding/preview tests passed: AGW principal/fee/PC deposit and saved-opening recovery; AGW and native plain-job escrow, submit and manual payout; paid preview consensus and request-ID recovery with zero new payment. Three unselected cases skipped. Marketplace jobs 10 and 11 rejected/cleaned up; plain jobs 12 and 13 completed; cards 6 and 7 deactivated. Token funding tests returned balances to the configured master.
- Exact website quickstart functions extracted from 02-agentic-wallet-management.mdx passed with Donut pUSDC and 10 raw units. Recipient increased by exactly 10, receipt status 1, AGW/from and agent/origin displayed. Grant revoked after validation. [Evidence](live-evidence/exact-evidence.json).
- All six presets passed read-only protocol compatibility checks: native wrapping simulation, WETH/router identity and dust swap quotes, or Aave WETH reserve membership. [Report](live-evidence/preset-compatibility.json).
- All six preset execution cases failed before proving execution. Initial runner preflight failed with an HTTP request error and sent nothing. A second run passed balance preflight: DEX Sepolia failed loading its destination account; remaining five timed out on Donut eth_getCode for the URP/factory. No preset-created/delivered records exist. One fresh agent was funded; owner decrease 0.050023625 PC. Do not retry a whole funded suite blindly; first recheck RPC health and existing hashes.

Total source-wallet decrease across the completed runs: 0.964633723 PC, including amounts left in fresh test wallets/accounts, not a fee measurement. Preset 50-PC-per-wallet allocations were never reached. Existing harness leaves bare wallets and some fresh agent balances; they are not represented as recovered fees. No test credentials are retained in the documentation evidence.

Live PRE/POST automatic evaluation and Solana were not run. PRE/POST still requires a compatible deployed stack. This validation does not establish every illustrative snippet or every chain flow works end to end. No SDK or contract fixes were made for the RPC failures.

[Summary](live-evidence/summary.json) and [transaction/request events](live-evidence/sdk-events.json) retain current evidence. Temporary raw logs are under /tmp/agw-docs-live-20261029; only structured, secret-free evidence is retained here.

## Future update gate

When SDK/contracts change: record new Git/deployment revisions; compare public exports and signatures; recheck rule defaults/budgets, destinations, presets, JobSpec encoding/timing and evaluator wiring; update public pages; run page-by-page snippet checks and the website build; rerun affected bounded live cases. Keep manual v2, timing-first demos and PRE/POST compatibility separate. The current documentation is checkpoint-based, not a promise that upcoming interfaces are final.
