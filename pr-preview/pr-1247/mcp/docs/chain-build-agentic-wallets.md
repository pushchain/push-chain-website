---
title: "Agentic Wallets"
url: "https://pushchain.github.io/docs/chain/build/agentic-wallets/"
section: "build"
lastUpdated: "2026-11-01T17:05:31+05:30"
description: "Agentic Wallets | Build | Push Chain Docs"
---

# Agentic Wallets

SDK version

These examples use `@pushchain/core@6.0.27-alpha.9` with AGW v6 on Push Donut. They do not execute automatically.

## Overview

Agentic Wallets (AGWs) separate ownership from delegated execution on Push Donut. The owner creates the wallet and grants or removes permissions. The agent signs calls within those permissions and cannot be the owner.

An external signer's Universal Executor Account (UEA) is its Push identity. The AGW is a separate contract holding its own Push assets and PC. A destination Chain Executor Account (CEA) holds assets and executes calls on that destination. Use the agent's Push address in a rule, including its UEA when it signs from another chain.

Funding an AGW is separate from creating it. Review asset addresses, raw-unit caps, expiry and PC requirements before transferring funds. Permission does not imply a sufficient balance.

Read [Connect and manage wallets](/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-wallet-management/), [Rules](/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-rules/), [Presets](/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-presets/), then [Execution and recovery](/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-execution/). Reuse [client initialization](/push-chain-website/pr-preview/pr-1247/docs/chain/build/initialize-push-chain-client/) for signer setup.
