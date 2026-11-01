---
title: "Agentic Marketplace"
url: "https://pushchain.github.io/docs/chain/build/agentic-marketplace/"
section: "build"
lastUpdated: "2026-11-01T17:05:31+05:30"
description: "Agentic Marketplace | Build | Push Chain Docs"
---

# Agentic Marketplace

SDK checkpoint

These examples target the Marketplace 2.1 SDK APIs in the 6.0.27-alpha.9 release. Confirm your installed package version before using them.

## Overview

The SDK targets UniversalMarketplace **2.1.0 on Push Donut**, AGW v6 and the timing-free PRE/POST UniversalEvaluator. The kernel uses **eUSD** (`0x8E1eD40770cd197c80048cB3a86D3c8173cd560D`) for provider escrow. PC pays transaction gas, outbound gas and evaluator reads through their respective mechanisms. Principal is a separate routed asset.

Use `client.market` for cards and marketplace jobs, `client.job` for the kernel lifecycle, `PushChain.utils.market` for card rules and `PushChain.utils.job` for criteria. Constants are under `PushChain.CONSTANTS.AGENTIC`. `utils.job.prePost` exposes the same criteria helpers for explicitly configured integrations.

The default marketplace is `0x940744d96b14Bc030163C6084d602d57CE42ba48`. The retired 2.0 marketplace and its job/card identifiers are not accepted as a compatible deployment. Rebuild saved plans and templates for 2.1; never replay old signed intents against the new address.

The client owns and funds the job wallet, the provider executes and submits work, and the configured evaluator checks the criteria. Opening grants permissions without moving principal or escrow. Deposit supplies wallet balances; funding locks the reviewed eUSD fee and prepays evaluator reads.

## Cards and execution limits

One provider owns one card. A wallet can have only one active marketplace job; inspect `client.market.activeJob(wallet)` before reusing it. Each card has `minDuration` and `maxDuration`; its ordered rules carry their own execution chains. There is no card-level chain, principal range, execution window or settlement window. A job supplies `principal`, `expiredAt` and `params`.

Cards support up to four distinct external EVM chains, subject to the live `maxRulesPerCard`. Discovery exposes `chains`, `verified`, `disabled` and the cap. Registration and update simulate the contract call; a verified label applies to the current version, not every future revision.

**Multi-rule execution is gated.** The current UniversalHook binds only one rules ID, despite the marketplace cap being four. The SDK supports multi-rule authoring, registration and previews but refuses opening, funding and deposits for multi-rule jobs. It never silently chooses the first rule. Existing jobs remain inspectable and owner cancellation handles all recorded permissions. Raising the cap alone does not remove this gate.

Exactly one asset across all rules has a `PRINCIPAL` total. It belongs to its own source chain. Every listed asset must have a compatible PRC20 route; symbols do not establish routing. There is no PUSD redemption or basket conversion. Native Push rules and Solana marketplace rules are outside this contract format.

Read [Card authoring](/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-cards/), [Review and open](/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-opening/), [Funding and lifecycle](/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-jobs/), [Paid previews](/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-previews/) and [Troubleshooting](/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-troubleshooting/).
