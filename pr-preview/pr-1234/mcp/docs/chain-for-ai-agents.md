---
title: "For AI Agents & LLMs"
url: "https://pushchain.github.io/docs/chain/for-ai-agents/"
section: "chain"
lastUpdated: "2026-09-02T18:08:12Z"
description: "For AI Agents & LLMs | Push Chain Docs"
---

# For AI Agents & LLMs

Push Chain provides structured, machine-readable resources so AI coding assistants, agents, and automation pipelines can understand and execute cross-chain actions with maximum reliability.

## Context Files

AI models have a context window — the amount of text they can process at once. Providing structured documentation upfront helps models give precise answers without hallucinating.

Push Chain offers two context files:

| File | Best for |
| --- | --- |
| [`/llms.txt`](/push-chain-website/pr-preview/pr-1234/llms.txt) | Compact summary with links to every resource. Works with most models (100K+ token context). |
| [`/llms-full.txt`](/push-chain-website/pr-preview/pr-1234/llms-full.txt) | Full documentation corpus inline. Use when your model has a large context window or you want deep reference without following links. |

## Add to Your AI Code Editor

### Cursor

1.  Open **Cursor Settings → Features → Docs**
2.  Click **Add new doc** and paste one of the following:

```text
https://push.org/llms.txt
```

```text
https://push.org/llms-full.txt
```

3.  Use `@Docs → Push Chain` in the chat to reference Push Chain documentation.

### Windsurf

Add to the Cascade window (`CMD+L`) at the start of your conversation:

```text
@docs:https://push.org/llms.txt
```

```text
@docs:https://push.org/llms-full.txt
```

### Claude Code

Reference directly in your prompt or CLAUDE.md system context:

```text
https://push.org/llms.txt
```

For richer integration, use the structured `/agents/` layer below — it provides typed capabilities, execution workflows, and decision trees that go beyond static documentation.

### Zed / Other Editors

Paste the URL into your AI assistant's context or system prompt. The `/llms.txt` format is understood by any LLM.

## Agent Layer (`/agents/`)

Push Chain goes beyond static documentation with a full machine-readable execution layer at `/agents/`. This is organized as a layered stack: **discovery → capabilities → execution → validation**.

| File | What it contains |
| --- | --- |
| [/agents/index.json](/push-chain-website/pr-preview/pr-1234/agents/index.json) | Discovery map — every file, its purpose, and the recommended traversal order |
| [/agents/capabilities.json](/push-chain-website/pr-preview/pr-1234/agents/capabilities.json) | Every SDK capability with inputs, outputs, and method signatures |
| [/agents/sdk-capabilities.json](/push-chain-website/pr-preview/pr-1234/agents/sdk-capabilities.json) | Full SDK namespace map including all methods and advanced arguments |
| [/agents/supported-chains.json](/push-chain-website/pr-preview/pr-1234/agents/supported-chains.json) | Verified chain list with CAIP-2 IDs, RPC URLs, explorers, and contract addresses |
| [/agents/contract-addresses.json](/push-chain-website/pr-preview/pr-1234/agents/contract-addresses.json) | Verified smart contract addresses for Push Chain core contracts, PRC-20 tokens, AMM pools, and all external chain gateways |
| [/agents/workflows/index.json](/push-chain-website/pr-preview/pr-1234/agents/workflows/index.json) | Step-by-step execution guides for all common tasks |
| [/agents/schemas/index.json](/push-chain-website/pr-preview/pr-1234/agents/schemas/index.json) | JSON schemas for all SDK request/response types |
| [/agents/decision-tree.json](/push-chain-website/pr-preview/pr-1234/agents/decision-tree.json) | Branching logic to select the right capability from user intent |
| [/agents/task-router.md](/push-chain-website/pr-preview/pr-1234/agents/task-router.md) | Plain-language routing guide mapping goals to capabilities |
| [/agents/errors.json](/push-chain-website/pr-preview/pr-1234/agents/errors.json) | Error catalog with recovery actions for every known failure mode |
| [/agents/retrieval-map.json](/push-chain-website/pr-preview/pr-1234/agents/retrieval-map.json) | Maps every capability to its authoritative documentation source (for RAG) |

## Canonical Workflows

Ready-to-execute step-by-step guides for the most common Push Chain tasks:

| Workflow | What it does |
| --- | --- |
| [/agents/workflows/initialize-client.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/initialize-client.md) | Create a `PushChainClient` from any signer |
| [/agents/workflows/create-universal-signer.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/create-universal-signer.md) | Wrap an EVM or Solana signer into a `UniversalSigner` |
| [/agents/workflows/send-universal-transaction.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/send-universal-transaction.md) | Execute a transaction on Push Chain from any origin chain |
| [/agents/workflows/send-multichain-transaction.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/send-multichain-transaction.md) | Send to an external chain via CEA or cascade pattern |
| [/agents/workflows/track-transaction.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/track-transaction.md) | Monitor universal transaction lifecycle |
| [/agents/workflows/sign-universal-message.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/sign-universal-message.md) | Sign a message for off-chain verification |
| [/agents/workflows/read-blockchain-state.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/read-blockchain-state.md) | Query on-chain state via EVM clients |
| [/agents/workflows/use-contract-helpers.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/use-contract-helpers.md) | Interact with UEA Factory and other native contracts |
| [/agents/workflows/constants-reference.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/constants-reference.md) | All chain IDs, token constants, and SDK enums |
| [/agents/workflows/configure-dev-environment.md](/push-chain-website/pr-preview/pr-1234/agents/workflows/configure-dev-environment.md) | Install SDK and configure Hardhat / Foundry / Remix |

## Integration Paths

### Human developer

1.  Follow the [Quickstart](/push-chain-website/pr-preview/pr-1234/docs/chain/quickstart/) to run your first transaction
2.  Work through [Tutorials](/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/) for end-to-end flows
3.  Use the [SDK](/push-chain-website/pr-preview/pr-1234/docs/chain/build/) and [UI Kit](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/integrate-push-universal-wallet/) for production integration

### AI agent / copilot

1.  Fetch [/llms.txt](/push-chain-website/pr-preview/pr-1234/llms.txt) as the entry layer
2.  Load [/agents/index.json](/push-chain-website/pr-preview/pr-1234/agents/index.json) to discover all capabilities and workflows
3.  Use [/agents/decision-tree.json](/push-chain-website/pr-preview/pr-1234/agents/decision-tree.json) to map user intent to the right capability
4.  Execute using the matching workflow from [/agents/workflows/](/push-chain-website/pr-preview/pr-1234/agents/workflows/index.json)
5.  Validate with schemas from [/agents/schemas/](/push-chain-website/pr-preview/pr-1234/agents/schemas/index.json)
6.  Fetch [/llms-full.txt](/push-chain-website/pr-preview/pr-1234/llms-full.txt) when full inline context is needed

### RAG / retrieval pipeline

1.  Index [/llms-full.txt](/push-chain-website/pr-preview/pr-1234/llms-full.txt) as your document corpus
2.  Use [/agents/retrieval-map.json](/push-chain-website/pr-preview/pr-1234/agents/retrieval-map.json) to map queries to authoritative sources
3.  Ground responses with canonical workflows from [/agents/workflows/](/push-chain-website/pr-preview/pr-1234/agents/workflows/)

## Notes

-   Treat [/llms.txt](/push-chain-website/pr-preview/pr-1234/llms.txt) as the **entry layer** and [/agents/](/push-chain-website/pr-preview/pr-1234/agents/) as the **execution layer**
-   Prefer [/agents/workflows/](/push-chain-website/pr-preview/pr-1234/agents/workflows/) over raw docs for execution-oriented tasks — workflows are structured for direct SDK use
-   Use [/agents/schemas/](/push-chain-website/pr-preview/pr-1234/agents/schemas/) for precise input validation before any transaction
-   [/agents/supported-chains.json](/push-chain-website/pr-preview/pr-1234/agents/supported-chains.json) contains verified RPC URLs, chain IDs, block explorers, and contract addresses — use it instead of guessing
-   [/agents/contract-addresses.json](/push-chain-website/pr-preview/pr-1234/agents/contract-addresses.json) is the authoritative registry for all Push Chain contract addresses — prefer it over the human-readable [Smart Contract Address Book](/push-chain-website/pr-preview/pr-1234/docs/chain/setup/smart-contract-address-book/) for programmatic use
-   All code examples in [/agents/examples/](/push-chain-website/pr-preview/pr-1234/agents/examples/) are minimal, self-contained, and ready to execute
