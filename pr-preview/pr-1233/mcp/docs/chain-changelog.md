---
title: "Changelog"
url: "https://pushchain.github.io/docs/chain/changelog/"
section: "chain"
lastUpdated: "2026-08-03T12:48:54Z"
description: "Changelog | Push Chain Docs"
---

# Changelog

Keep track of the latest changes and updates to the Push Chain Core and UI Kit SDKs.

## [@pushchain/core](https://www.npmjs.com/package/@pushchain/core)

### 6.0.20 (2026-07-10)

#### Fixes

-   support custom EIP-7702 signers and dynamic multicall gas

### 6.0.19 (2026-07-01)

#### Features

-   use OZ ERC-7821 executor for 7702 batching
-   native EIP-7702 atomic multicall for native-Push EOAs
-   archive-RPC fallback for prune-miss reads in tracking

### 6.0.17 (2026-06-09)

#### Fixes

-   make SVM payload encoding browser-safe
-   prevent underfunded outbound gas swaps

### 6.0.17 (unreleased)

#### Other Changes

-   Fixed outbound (UOA\_TO\_CEA) transactions reverting on-chain with Uniswap `STF`
-   Fixed SVM payload encoding in browser environments whose `Buffer` polyfill

### 6.0.16 (2026-06-05)

#### Other Changes

-   Fixed SVM domain-separator chainId encoding to match the pre-EIP-712 UEA\_SVM
-   Fixed Route 1 deposit-sizing progress-hook ordering: the `103-03-04` event is
-   Additional cascade execution test coverage and validation fixes.

### 6.0.15 (2026-06-02)

#### Other Changes

-   Internal fixes to response-building logic.

### 6.0.14 (2026-06-02)

#### Other Changes

-   `trackTransaction` now resolves the originating source chain correctly even when
-   Added `finalTxHash` to `UniversalTxResponse` — a single hash that resolves across

### 6.0.13 (2026-05-26)

#### Other Changes

-   Maintenance release (version bump only; no code changes).

### 6.0.12 (2026-05-26)

#### Other Changes

-   Maintenance release (version bump only; no code changes).

### 6.0.11 (2026-05-25)

#### Other Changes

-   Added transaction-indexing polling for SVM multihop: the SDK now retries with

### 6.0.10 (2026-05-23)

#### Other Changes

-   Added Borsh-encoded SVM-origin inbound relay payload building for Route 3
-   Improved SVM child-inbound detection using log index for more reliable

### 6.0.9 (2026-05-19)

#### Other Changes

-   Added a decoder for the `GasPriceBelowBase` (0x05aab006) error with an

### 6.0.8 (2026-05-19)

#### Other Changes

-   Maintenance release (version bump only; no code changes).

### 6.0.7 (2026-05-19)

#### Other Changes

-   Fixed corner-case bugs in cascade execution and funds-payload handling for

### 6.0.6 (2026-05-18)

#### Other Changes

-   Clarified progress-event message text (no functional changes).

### 6.0.5 (2026-05-18)

#### Other Changes

-   Added multihop progress markers: `SEND_TX_199_03` / `SEND_TX_199_99` (Route 1

### 6.0.4 (2026-05-18)

#### Other Changes

-   Fixed payload-builder detection of executable data vs. value-only transfers,
-   Fixed progress-hook wiring for funds-only execution paths.

### 6.0.3 (2026-05-16)

#### Other Changes

-   Added per-call `progressHook` support: `sendTransaction(params, { progressHook })`

### 6.0.2 (2026-05-16)

#### Other Changes

-   Token constants now expose the missing `USDT.bsc` chain-suffix accessor,
-   Updated Donut testnet stable token metadata to match the current source of

### 6.0.1 (2026-05-15)

#### Other Changes

-   Pre-flight UEA balance checks now default to warning-only behavior and
-   Token constants added the `USDC.bsc` BSC suffix accessor while retaining
-   Consolidated tests, renamed transaction `target` fields to `recipient`, and

### 6.0.0 (2026-05-14)

#### Other Changes

-   Updated audit-driven contract and pool configuration, including BNB CEA
-   Fixed cascade, SVM payload, and SVM execution flows, with additional test-case
-   Improved PC amount formatting in transaction output and diagnostics.

### 5.1.18 (2026-05-12)

#### Other Changes

-   Added `executeTransactions` progress-hook coverage and fixed cascade
-   Removed the `allowUnderfundedSwap` parameter and tightened native PC

### 5.1.17 (2026-05-07)

#### Other Changes

-   Fixed the R3 EVM path tag so progress hooks emit the `303` route family

### 5.1.16 (2026-05-07)

#### Other Changes

-   Added pre-flight balance-check progress hooks.
-   Fixed SVM rent checks, SVM upward ceiling behavior, cascade progress-hook

### 5.1.5 (2026-04-20)

#### Other Changes

-   Route 1 (UOA → Push) now applies Case A/B/C USD-bucket sizing to the
-   Gas abstraction scope narrowed to R1 (fee-lock USD caps) and R3 (outbound

### 5.1.0 (2026-03-28)

#### Other Changes

-   release: bump to 5.0.0

### 3.0.4 (2025-11-11)

#### Other Changes

-   refactor: remove debug console logs from Orchestrator class
-   refactor: fix sendTxWithFunds\_new for new UEA

### 3.0.1 (2025-11-10)

#### Other Changes

-   release: bump to 3.0.0

### 3.0.0 (2025-11-10)

#### Features

-   add getPRC20Mapping utility in utils

#### Chores

-   add new PRC20 token and contract addresses

#### Other Changes

-   refactor: rename ExecuteParams.payWith to payGasWith (breaking)
-   refactor: implement \_buildMulticallPayloadData; allow BSC for multicall; rename MulticallCall type MultiCall
-   refactor: update RPC URLs and rename currency in Push Testnet Donut config
-   refactor: internal payload-builders improvements

### 2.1.1 (2025-10-26)

#### Other Changes

-   release: bump to 2.0.21

### 2.0.0 (2025-09-18)

#### Fixes

-   svm gateway idl
-   update contracts and price fn

### 1.1.35 (2025-08-26)

#### Chores

-   fix tc

### 1.1.34 (2025-08-18)

#### Fixes

-   update return type for encodeFunctionData method to ensure correct string format

### 1.1.33 (2025-08-13)

#### Chores

-   bump version to 1.1.32 and update GitHub Action test comment
-   Add fundGas property to sendTransaction
-   add reinitialize method to PushChain for dynamic signer updates

#### Other Changes

-   refactor: update error messages for fundGas validation in PushChain tests and orchestrator
-   refactor: add read-only accessors for Orchestrator configuration
-   refactor: make isReadMode property public in PushChain class
-   refactor: move isUniversalAccount function to static method in PushChain class
-   release: bump to 1.1.32 \[skip ci\]
-   patch: implement read-only mode for UniversalAccount in PushChain

### 1.1.31 (2025-08-12)

#### Chores

-   update test comment to trigger GitHub Action 10

### 1.1.30 (2025-08-12)

#### Chores

-   update test comment to trigger GitHub Action 9

### 1.1.29 (2025-08-11)

#### Chores

-   bump core version to ui-kit

### 0.4.0 (2025-08-11)

#### Features

-   Add UEA proxy (migration support) + testnet module renaming [#190](https://github.com/pushchain/push-chain-sdk/pull/190)

### 0.3.1 (2025-08-08)

#### Other Changes

-   refactor: rename and enhance executor-origin conversion utilities

### 0.3.0 (2025-08-05)

#### Features

-   enhance transaction handling and origin fetching

### 0.2.0 (2025-08-01)

#### Features

-   New response type [#180](https://github.com/pushchain/push-chain-sdk/pull/180)

### 0.1.43 (2025-07-30)

#### Other Changes

-   docs: update README with test change

### 0.1.42 (2025-07-29)

#### Features

-   implement getOriginForUEA function in Utils for Push Testnet

### 0.1.41 (2025-07-21)

#### Fixes

-   refine fee locking logic in Orchestrator to handle UEA deployment and fund sufficiency

### 0.1.40 (2025-07-09)

#### Features

-   1 Click Signature [#159](https://github.com/pushchain/push-chain-sdk/pull/159)

### 0.1.38 (2025-07-04)

#### Fixes

-   revert erip712Domain - does not work with ethers

### 0.1.37 (2025-07-04)

#### Fixes

-   add eip712Hash

### 0.1.35 (2025-07-03)

#### Chores

-   fix changelog gen [#158](https://github.com/pushchain/push-chain-sdk/pull/158)

### 0.1.34 (2025-07-03)

#### Chores

-   change release script

### 0.1.33 (2025-07-03)

#### Chores

-   revise changelog design, change release commands
-   revise changelog
-   changelog scripts changes

#### Fixes

-   revert package version
-   release fix

## [@pushchain/ui-kit](https://www.npmjs.com/package/@pushchain/ui-kit)

### 6.0.20 (2026-07-13)

#### Features

-   support EIP-7702 authorization signing

### 6.0.19 (2026-07-06)

#### Features

-   support phantom wallet connection on the mobile devices.

#### Chores

-   update bundled `@pushchain/core` to pull in the latest core features and fixes.

### 6.0.18 (2026-06-12)

#### Chores

-   update bundled `@pushchain/core` to pull in the latest core features and fixes.

### 6.0.17 (2026-06-09)

#### Chores

-   update bundled `@pushchain/core` to pull in the latest core features and fixes.

### 6.0.16 (2026-06-05)

#### Chores

-   update bundled `@pushchain/core` to pull in the latest core features and fixes.

#### Fixes

-   show progress events with `ERROR` level as failure toasts.

### 6.0.12 (2026-05-20)

#### Fixes

-   honor `config.toast.hidden` when rendering wallet progress toasts.
-   return `null` for hidden or missing toast content.

### 6.0.11 (2026-05-20)

#### Features

-   add configurable wallet toast placement through `config.toast.position`.
-   expose toast position constants through `PushUI.CONSTANTS.TOAST.POSITION`.

#### Chores

-   add direct ui-kit build targets for skip-deps and direct TypeScript builds.

#### Fixes

-   reset expanded toast details when a new progress event arrives.
-   improve long error-message wrapping and toast width on small screens.

### 6.0.0 (2026-05-14)

#### Other Changes

-   note: major release aligned ui-kit with `@pushchain/core` v6.0.0.

### 5.2.11 (2026-05-12)

#### Other Changes

-   release: bump to 5.2.10

### 5.2.7 (2026-04-24)

#### Other Changes

-   release: bump to 5.2.6
-   release: bump to 5.2.5
-   release: bump to 5.2.4

### 5.2.3 (2026-04-20)

#### Other Changes

-   release: bump to 5.1.1

### 5.2.3 (2026-04-20)

#### Other Changes

-   release: bump to 5.1.1

### 5.2.3 (2026-04-20)

#### Other Changes

-   release: bump to 5.1.1

### 5.2.3 (2026-04-20)

#### Other Changes

-   release: bump to 5.1.1

### 5.2.3 (2026-04-20)

#### Other Changes

-   release: bump to 5.1.1

### 5.1.0 (2026-03-28)

#### Other Changes

-   release: bump to 5.0.0

### 5.0.3 (2026-03-28)

#### Other Changes

-   release: bump to 5.0.0

### 5.0.2 (2026-03-28)

#### Other Changes

-   release: bump to 5.0.0

### 5.0.1 (2026-03-28)

#### Other Changes

-   release: bump to 5.0.0

### 4.0.6 (2026-01-13)

#### Chores

-   update yarn lock

#### Fixes

-   apply CSS variables via inline styles

### 4.0.2 (2025-12-25)

#### Features

-   add support for zerion and rabby

### 2.1.5 (2025-11-17)

#### Chores

-   update core sdk to v3.0.8

### 2.1.3 (2025-11-17)

#### Fixes

-   fix metamask signTypedData to handle BigInt

#### Other Changes

-   release: bump to 2.1.2
-   release: bump to 2.1.1

### 2.1.0 (2025-11-11)

#### Chores

-   update core to v3.0.4, update rpc urls and fix progress toast

#### Other Changes

-   release: bump to 2.0.16

### 2.0.13 (2025-10-23)

#### Features

-   add bnb and other fixes

### 2.0.11 (2025-10-21)

#### Features

-   Read Only feature implementation
-   cancel transaction on close drawer
-   add read only feature for ui-kit

#### Chores

-   update package json

#### Fixes

-   revert environment and polyfil changes
-   fix the params for reconnect external wallet

### 2.0.10 (2025-10-17)

#### Features

-   add base and arbitrum wallet

### 2.0.9 (2025-10-06)

#### Chores

-   update core version to 2.0.16

### 2.0.6 (2025-09-24)

#### Chores

-   update core sdk to v2.0.8

### 2.0.5 (2025-09-24)

#### Chores

-   update yarn lock

#### Fixes

-   update the variables affecting the DOM

### 2.0.2 (2025-09-19)

#### Features

-   update core sdk to 2.0.2

### 2.0.0 (2025-09-18)

#### Features

-   upgrade core sdk and fix big int check in send txn

### 1.1.34 (2025-09-04)

#### Chores

-   add chain config to the constants

### 1.1.33 (2025-08-13)

#### Chores

-   update GitHub Action test comment to trigger workflow

### 1.1.32 (2025-08-13)

#### Fixes

-   fix the zIndex for the blur background

### 1.1.31 (2025-08-12)

#### Chores

-   add test comment to trigger GitHub Action 1

### 1.1.30 (2025-08-11)

#### Fixes

-   fix the vertical position of the iframe modal

### 1.1.29 (2025-08-11)

#### Chores

-   upgrade the core sdk to v1.1.29

#### Fixes

-   add default connected layout

#### Other Changes

-   release: bump to 1.1.28

### 1.1.28 (2025-07-30)

#### Fixes

-   add default connected layout

### 1.1.27 (2025-07-29)

#### Features

-   new wallet UI

#### Chores

-   update package.json with homepage, keywords, repository, authors, and license

#### Other Changes

-   docs: update README to reflect new branding and provide installation instructions

### 1.1.24 (2025-07-18)

#### Other Changes

-   refactor: add changelog
