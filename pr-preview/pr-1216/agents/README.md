---
schema_version: 1.0.0
version: 1.0.0
current_sdk_version: 5.1.7
generated: 2026-04-21
description: Human and agent orientation doc for the /agents/ directory
---

# Push Chain — Agent Interface

Push Chain is a universal L1 blockchain that enables applications to deploy smart contracts once and execute transactions across all supported chains. Users sign from their native wallet (Ethereum, Solana, etc.) and the SDK handles:

- **Cross-chain routing**: Transactions execute on Push Chain or external chains based on `tx.to` shape
- **UEA resolution**: Universal Executor Accounts are derived deterministically and deployed lazily
- **Fee abstraction**: End users pay gas in their native token; no `$PC` acquisition required. Contracts dispatching outbound txs fund with `$PC` — see [push-contracts skill](https://push.org/agents/skills/push-contracts/SKILL.md).
- **Wallet abstraction**: Any supported wallet becomes a UniversalSigner with one conversion call

## How to Navigate /agents/

| Your Task | Start Here |
|-----------|------------|
| Build a frontend, backend, or smart contract | See [Skills](#skills) below — load the matching SKILL.md |
| Understand what Push Chain can do | [capabilities.json](https://push.org/agents/capabilities.json) |
| Find the right workflow for a user request | [decision-tree.json](https://push.org/agents/decision-tree.json) or [task-router.md](https://push.org/agents/task-router.md) |
| Get SDK method signatures | [sdk-capabilities.json](https://push.org/agents/sdk-capabilities.json) |
| Build a RAG retrieval index | [retrieval-map.json](https://push.org/agents/retrieval-map.json) |
| Handle an error or failure | [errors.json](https://push.org/agents/errors.json) → [recovery-playbook.md](https://push.org/agents/recovery-playbook.md) |
| See all available code examples | [examples/index.json](https://push.org/agents/examples/index.json) |
| Check supported chains | [supported-chains.json](https://push.org/agents/supported-chains.json) |

## Skills

Skills are the authoritative guides for building with Push Chain. Load the one that matches the application layer you're working on — each skill is self-contained and cites canonical workflows, resources, and APIs.

| Skill | Use When | File |
|-------|----------|------|
| **push-frontend** | Building a React app with `@pushchain/ui-kit` — wallet connection, hooks, `sendTransaction` from components, Route 1/2/3 from the browser | [skills/push-frontend/SKILL.md](https://push.org/agents/skills/push-frontend/SKILL.md) |
| **push-backend** | Writing Node.js scripts, bots, or backend services with `@pushchain/core` — ethers/viem/Solana signers, transaction cascades, lifecycle tracking | [skills/push-backend/SKILL.md](https://push.org/agents/skills/push-backend/SKILL.md) |
| **push-contracts** | Writing Solidity that dispatches cross-chain via UGPC, handles inbound callbacks via `executeUniversalTx`, or resolves UEA/CEA identity on-chain | [skills/push-contracts/SKILL.md](https://push.org/agents/skills/push-contracts/SKILL.md) |

> See [skills/index.json](https://push.org/agents/skills/index.json) for machine-readable skill metadata.

## Quick Decision Guide

| Agent Task | File to Read |
|------------|--------------|
| "Send tokens from Ethereum wallet to Push Chain" | [workflows/send-universal-transaction.md](https://push.org/agents/workflows/send-universal-transaction.md) |
| "Execute a contract on Ethereum from any wallet" | [workflows/send-multichain-transaction.md](https://push.org/agents/workflows/send-multichain-transaction.md) |
| "Connect a wallet in React" | [workflows/connect-wallet-ui-kit.md](https://push.org/agents/workflows/connect-wallet-ui-kit.md) |
| "Create a UniversalSigner (ethers / viem / Solana keypair)" | [workflows/create-universal-signer.md](https://push.org/agents/workflows/create-universal-signer.md) |
| "Track transaction status" | [workflows/track-transaction.md](https://push.org/agents/workflows/track-transaction.md) |

## Key SDK Entry Points

### PushChain.initialize(universalSigner, options)
Returns `PushChainClient`. The primary entry point for all SDK operations.

```typescript
const pushChainClient = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET, // alias → latest testnet
});
```

### pushChainClient.universal.sendTransaction(tx)
Sends a universal transaction. Route determined by `tx.to` shape:
- `to: "0x..."` → Route 1 (Push Chain)
- `to: { address, chain }` → Route 2 (external chain via CEA)
- `to: "0x..."` + `from: { chain }` → Route 3 (CEA origin to Push Chain)

```typescript
const response = await pushChainClient.universal.sendTransaction({
  to: '0xTargetAddress',
  value: BigInt('100000000000000000'),
});
```

### PushChain.utils.signer.toUniversal(signer)
Converts ethers/viem signer to UniversalSigner.

### PushChain.utils.signer.toUniversalFromKeypair(keypair, options)
Converts Solana keypair to UniversalSigner.

## Terminology Reference

| Term | Full Name | Description | See |
|------|-----------|-------------|-----|
| UOA | Universal Origin Account | User's actual wallet on source chain (Ethereum EOA, Solana pubkey, etc.). The controller that authorizes execution. | [capabilities.json](https://push.org/agents/capabilities.json) |
| UEA | Universal Executor Account | Smart contract account on Push Chain, deterministically derived from UOA. Executes transactions on Push Chain. Lazy-deployed on first use. | [push-contracts skill](https://push.org/agents/skills/push-contracts/SKILL.md) |
| CEA | Chain Executor Account | Executor account on external chains, derived from UEA or Push Chain account. Enables execution on Ethereum, Solana, etc. | [push-contracts skill](https://push.org/agents/skills/push-contracts/SKILL.md) |
| UniversalAccount | — | Chain-agnostic address format: `{ address: "0x...", chain: "eip155:11155111" }` | [sdk-capabilities.json](https://push.org/agents/sdk-capabilities.json) |
| UniversalSigner | — | UniversalAccount with signing capabilities. Created via `toUniversal()` or `toUniversalFromKeypair()`. | [workflows/create-universal-signer.md](https://push.org/agents/workflows/create-universal-signer.md) |
| PushChainClient | — | SDK client instance returned by `PushChain.initialize()`. Has `.universal`, `.orchestrator`, `.explorer` namespaces. | [push-backend skill](https://push.org/agents/skills/push-backend/SKILL.md) |

## SDK Packages

| Package | Purpose | Install |
|---------|---------|---------|
| `@pushchain/core` | Backend SDK, scripts, bots | `npm install @pushchain/core@latest` |
| `@pushchain/ui-kit` | React wallet UI components (bundles `@pushchain/core`) | `npm install @pushchain/ui-kit@latest` |

> UI Kit apps do **not** need `@pushchain/core` as a separate dependency — use `usePushChain()` to access the SDK.

## File Type Legend

- **discovery**: Entry points and navigation aids
- **capability**: What the SDK can do, method signatures, supported chains
- **decision**: Task routing and workflow selection logic
- **error**: Error codes and recovery procedures
- **workflow**: Step-by-step execution guides
- **schema**: JSON schemas for data structures
- **example**: Runnable code snippets
- **governance**: Source freshness and changelog tracking
- **retrieval**: RAG and semantic search mappings
- **mcp**: Model Context Protocol tool definitions