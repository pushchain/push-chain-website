---
title: "Advanced Patterns"
url: "https://pushchain.github.io/docs/chain/build/contract-initiated-examples/advanced-patterns/"
section: "build"
lastUpdated: "2026-07-28T15:25:29+04:00"
description: "Advanced Patterns | Contract-Initiated Examples | Build | Push Chain Docs"
---

# Advanced Patterns

The three preceding pages cover the basics: [plain inbound](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-examples/inbound-to-push-chain/), [plain outbound](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-examples/outbound-from-push-chain/), and the [round-trip with auto back-leg](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg/). This page is the full reference for every contract-initiated pattern we have built, including five advanced ones that combine funds bridging, state machines, and multi-chain cascades.

Each entry links to a focused, single-purpose example in the [Push Chain Examples Repository](https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/) under `contract-initiated-*`.

Each example is self-contained: contract, runner, README, .env.sample, and a verified end-to-end run on Donut Testnet.

## All patterns

| Pattern | What it shows |
| --- | --- |
| **1\. Plain Inbound** | Trigger a state change on Push Chain from a smart contract on an external chain. The Push target sees the dispatching contract's UEA as `msg.sender`, so on-Push logic can attribute the call to a real external identity. Tutorial
[Inbound to Push Chain](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-examples/inbound-to-push-chain/)

 |
| **2\. Plain Outbound** | Run code on an external chain from a Push Chain contract without any live user driving the transaction. The destination sees the contract's CEA as `msg.sender`, so destination protocols can whitelist or pre-fund that CEA. Tutorial

[Outbound from Push Chain](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-examples/outbound-from-push-chain/)

 |
| **3\. Round-Trip with Auto Back-Leg** | Dispatch to an external chain and automatically receive the result back on Push from a single user signature. No off-chain orchestration, no separate inbound trigger. Tutorial

[Round-Trip with Auto Back-Leg](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg/)

 |
| **4\. Recipient Bridge** | Move native funds from an external chain to a Push wallet straight from contract logic. No payload, no contract call on Push, just a bridged balance bump for the recipient.

 |
| **5\. Inbound With Funds** | Bridge funds AND run a contract call on Push in the same transaction. The classic deposit-and-act pattern: a vault credits the depositor and runs business logic atomically with the funds arriving.

 |
| **6\. Outbound With Funds** | Bridge funds AND run a contract call on the destination chain in the same transaction. Symmetric to inbound-with-funds: pay an external protocol and trigger its action in one atomic move.

 |
| **7\. Round-Trip with Result** | Model a round-trip as a request-response on Push. A user opens a request; the destination chain performs the work; the result lands back on Push and resolves the original request. Useful for oracle-style flows where Push waits on external execution.

 |
| **8\. Cross-Chain Cascade** | One Push transaction fans out across multiple external chains in sequence. State changes land on two different external networks from a single user signature, with no off-chain glue between hops.

 |

## Related

-   [Contract-Initiated Multichain Execution](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-multichain-execution/) → The conceptual reference for everything related to contract-initiated execution.
-   Basic Examples → [Inbound to Push Chain](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-examples/inbound-to-push-chain/), [Outbound from Push Chain](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-examples/outbound-from-push-chain/), and the [Round-Trip with Auto Back-Leg](/push-chain-website/pr-preview/pr-1230/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg/).
-   [How CEA Works](/push-chain-website/pr-preview/pr-1230/docs/chain/deep-dives/how-cea-works/) → The identity model that makes the round-trip guarantees possible.
-   [Derive Chain Executor Accounts (CEAs)](/push-chain-website/pr-preview/pr-1230/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account/) → To pre-compute a contract's destination-chain CEA off-chain or on-chain.
