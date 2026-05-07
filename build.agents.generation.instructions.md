# Push Chain Agent Layer — Generation Instructions

Reference document for humans and AI assistants generating, maintaining, or extending the Push Chain agent layer and `llms.txt` context files.

---

## Overview

The agent layer is a set of structured, machine-readable files under `static/agents/` plus `static/llms.txt`. It exists so AI coding assistants (Cursor, Windsurf, Claude Code) and RAG pipelines can ground themselves in accurate Push Chain SDK knowledge without hallucinating APIs, addresses, or patterns.

There are two complementary surfaces:

| File                      | Audience                             | Update cadence             |
| ------------------------- | ------------------------------------ | -------------------------- |
| `static/llms.txt`         | Agents loading a single context file | **Manual** — edit directly |
| `static/agents/` folder   | Agents doing structured retrieval    | **Manual** — edit directly |
| `static/llms-full.txt`    | Long-context RAG                     | **Auto** on every deploy   |
| `static/llms-preseed.txt` | RAG pre-seeding                      | **Auto** on every deploy   |

`llms.txt` and `agents/` are never overwritten by the build pipeline. `llms-full.txt` and `llms-preseed.txt` are regenerated from the docs tree on every `yarn deploy` / `yarn deploy:skip:translations` run via `buildAgentsPreseed()` in `build.mjs`.

If `node build.agents.llms.mjs` is run standalone it regenerates `llms.txt` from `build.agents.llms.mjs`. Keep `buildLlmsTxt()` in that script in sync with manual edits to `static/llms.txt`.

---

## Build Scripts

| Script                      | What it generates                                  | When to run                                        |
| --------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `build.agents.llms.mjs`     | `static/llms.txt` (standalone only)                | Manually, when regenerating llms.txt from scratch  |
| `build.agents.preseed.mjs`  | `static/llms-preseed.txt` + `static/llms-full.txt` | Auto via deploy; or `yarn generate:agents:preseed` |
| `build.agents.mjs`          | Bulk of `static/agents/` JSON files                | `yarn generate:agents`                             |
| `build.agents.examples.mjs` | `static/agents/examples/`                          | `yarn generate:agents:examples`                    |

Full regeneration: `yarn generate:agents:full`

---

## SDK Version Management

SDK versions are pinned in **two places** — both must be updated together:

1. `build.agents.llms.mjs` constants (top of file):

   ```js
   const SDK_VERSIONS = { core: '5.1.17', uiKit: '5.2.2' };
   const AGENT_LAYER_VERSION = '1.0.0';
   const AGENT_LAYER_DATE = '2026-04-17';
   ```

2. `static/agents/index.json` field:
   ```json
   "sdk_version": { "@pushchain/core": "5.1.17", "@pushchain/ui-kit": "5.2.2" }
   ```

When bumping SDK versions also update the versioning callout line in `static/llms.txt`:

```
> **Agent layer:** v1.0.0 | Last updated: YYYY-MM-DD | SDK: `@pushchain/core@X.Y.Z` · `@pushchain/ui-kit@X.Y.Z` | Network: ...
```

Add a bullet to `## Changelog` in `static/llms.txt` describing what changed.

---

## llms.txt Structure & Standards

### Section order (do not reorder)

1. `# Push Chain` — tagline + versioning callout blockquote
2. `## Who This Is For`
3. `## Key Concepts` — UOA, UEA, CEA, Universal Transaction, Routes 1–3
4. `## Packages` — ui-kit, core, create-universal-dapp
5. `## Network` — Donut testnet table
6. `## Start Here` — human docs links (agent redirect note at top)
7. `## Agent Layer` — Core / Extended tiered subsections
8. `## AI System Directives` — numbered, currently 7
9. `## Minimal Example` — inline TypeScript snippet
10. `## Canonical Workflows` — grouped by category (`###` subheadings)
11. `## Full Context` — llms-full.txt link
12. `## Add to Your AI Editor`
13. `## Changelog`
14. `## Background Reading` — blog (non-canonical, do not cite as API reference)

### Versioning callout

Must appear immediately after the tagline blockquote:

```
> **Agent layer:** vX.Y.Z | Last updated: YYYY-MM-DD | SDK: `@pushchain/core@X.Y.Z` · `@pushchain/ui-kit@X.Y.Z` | Network: Donut Testnet (Mainnet not yet launched)
```

### Network table

Use a proper header row. The Donut explanation blockquote and public-RPC rate-limit note are mandatory:

```markdown
> **Donut** is the codename for the first public Push Chain testnet. Mainnet is not yet launched — do not apply these values to a production environment.

| Field              | Value                           |
| ------------------ | ------------------------------- |
| **Name**           | Push Chain Donut Testnet        |
| **Chain ID**       | 42101                           |
| **RPC URL**        | https://evm.donut.rpc.push.org/ |
| **WebSocket**      | wss://evm.donut.rpc.push.org    |
| **Block Explorer** | https://donut.push.network      |
| **Faucet**         | https://faucet.push.org         |
| **Mainnet**        | Not yet launched                |

> **Public RPC:** No API key required. Fair-use rate limits apply — use a dedicated RPC endpoint for production workloads.
```

### Route descriptions

Each route must cover **both** the external-chain user path and the native Push Chain account path. Route 3 explains CEA identity preservation:

- **Route 1** — target is Push Chain (`tx.to` = plain address). External user: UOA → UEA → Push Chain contract. Native account: wallet → Push Chain contract directly (no UEA hop).
- **Route 2** — target is external chain (`tx.to = { address, chain }`). External user: UOA → UEA → CEA → external chain. Native account: wallet → CEA → external chain.
- **Route 3** — CEA-originated inbound (`tx.from.chain` set). Every account acting on external chains gets a deterministic CEA per chain to preserve identity and prevent fund mixing. Route 3 invokes that CEA; the CEA makes the inbound call to Push Chain, so `msg.sender` = CEA address (not UEA).

### Packages section formatting

Each package gets one primary bullet with one `[npm]` link. Sub-links (guides, customization) go as indented sub-bullets with short descriptions. Do not chain multiple `[text](url)` links inline in a single bullet — strict parsers capture only the first.

```markdown
- `@pushchain/ui-kit` — **Frontend**: ... [npm](...)
  - [Guide](...): one-line description.
  - [Customization](...): one-line description.
- `@pushchain/core` — **Backend / Node.js**: ... [npm](...)
```

The note about EVM libraries for reading state should be a blockquote (`> Reading...`), not a `**Note:**` paragraph.

### Agent Layer tiers

Split into `### Core (always load)` and `### Extended (load if budget allows)`.

**Core** must contain:

- Agent Index
- Skills (with sub-bullets per skill)
- Capabilities
- Error Catalog
- Contract Addresses

**Extended** contains everything else. Never move Error Catalog or Contract Addresses to Extended.

### AI System Directives (currently 7)

| #   | Rule                                                                                        |
| --- | ------------------------------------------------------------------------------------------- |
| 1   | Load skill file before generating code                                                      |
| 2   | Source addresses from `contract-addresses.json` (authoritative); use skill for ABIs/context |
| 3   | No manual bridge logic                                                                      |
| 4   | Do not use ethers/viem to sign or send (produces incompatible tx formats)                   |
| 5   | ethers/viem/wagmi are correct for read-only EVM operations                                  |
| 6   | No SDK inside Solidity                                                                      |
| 7   | Agent key model: full private key, no session keys, treat as hot wallet                     |

Directive 2 and 4 are the most frequently violated by agents — keep them prominent and explicit. Directive 4 must state the consequence ("silently produce incompatible transaction formats").

### Minimal Example

Must stay in sync with actual SDK API. Security comment is mandatory on the private key line:

```typescript
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider); // Load from env; never hardcode, never log
```

### Canonical Workflows — categories

Workflows are grouped with `###` subheadings. The category is driven by `"category"` in `static/agents/workflows/index.json`. Category keys and display labels:

| Key                 | Label                     | Workflows                                                                                                              |
| ------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `core-execution`    | `### Core execution`      | initialize-client, create-universal-signer, send-universal-transaction, send-multichain-transaction, track-transaction |
| `reading-utilities` | `### Reading & utilities` | read-blockchain-state, initialize-evm-client, use-utility-functions, use-contract-helpers, constants-reference         |
| `frontend`          | `### Frontend (UI Kit)`   | connect-wallet-ui-kit, use-universal-wallet-provider                                                                   |
| `contracts`         | `### Contracts`           | contract-initiated-multichain-execution, deploy-push-chain-contract, sign-universal-message                            |
| `setup`             | `### Setup`               | configure-dev-environment                                                                                              |

New workflows must be added to `workflows/index.json` with a `category` field, then added to the `## Canonical Workflows` section in `llms.txt`, and listed in `static/agents/index.json` `files[]`.

### Changelog

Add a bullet for every meaningful update:

```markdown
- **YYYY-MM-DD vX.Y.Z** — Summary of what changed.
```

---

## agents/ Folder Standards

### index.json

Top-level fields:

```json
{
  "version": "1.0.0",
  "sdk_version": { "@pushchain/core": "X.Y.Z", "@pushchain/ui-kit": "X.Y.Z" },
  "generated": "ISO8601 timestamp",
  "start_here": { "developer": "...", "agent": "...", "retrieval_system": "..." },
  "files": [ ... ],
  "authority": { ... }
}
```

Every file in `static/agents/` must have a corresponding entry in `files[]` with `path`, `purpose`, and `type`.

### workflows/index.json

Every workflow entry requires:

- `id` — kebab-case, unique
- `category` — one of: `core-execution`, `reading-utilities`, `frontend`, `contracts`, `setup`
- `name` — title-case display name
- `file` — relative path from site root (e.g. `agents/workflows/foo.md`)
- `purpose` — one sentence, no trailing period
- `actor` — `developer`, `frontend_developer`, or `smart_contract`
- `operation` — `read`, `write`, or `tracking`
- `prerequisites` — array of workflow IDs
- `deterministic` — boolean
- `safe_for_autonomous_execution` — boolean
- `mcp_mapping_candidates` — array of snake_case tool name candidates
- `status` — `documented` | `stub`

### Workflow .md files

Each workflow markdown file must include:

- `# Workflow: <Name>` heading
- `## Purpose` — one paragraph
- `## Prerequisites` — list or "None"
- `## Steps` — numbered steps with code blocks where needed
- `## Common Failures` — table or list of error → fix mappings
- `## MCP Candidates` — reference the tool names from `mcp_mapping_candidates`
- `## See Also` — absolute URLs only (no relative paths)

### contract-addresses.json

This is the **authoritative source** for all Push Chain and external-chain contract addresses. The `push-contracts` skill is generated from it. Never hardcode addresses in skills, workflows, or llms.txt — always source from this file.

---

## MCP Candidates Standards

`static/agents/mcp-candidates.json` contains candidate MCP tool definitions. These are **reference implementations** — not a supported tool server. Language in llms.txt must reflect this: "adapt for your tool framework; not a supported tool server."

Each tool entry requires:

- `name` — snake_case
- `description` — what the tool does
- `inputs` — array of `{ name, type, description, required }`
- `outputs` — array of `{ name, type, description }`
- `notes` — implementation guidance
- `workflow_mapping` — array of workflow IDs this tool supports

---

## Content Rules

1. **Never fabricate SDK API.** If a method signature is uncertain, mark it as `// verify against skill file` or leave it out.
2. **All links in llms.txt must be absolute URLs** (`https://push.org/...`). Relative paths break agents loading the file from a cache.
3. **No event/webhook schemas** unless the platform data exists to back them.
4. **Blog posts and conceptual articles** go under `## Background Reading` only, with the non-canonical disclaimer. Never cite them as API reference.
5. **Mainnet values.** Until mainnet launches, all network values are Donut Testnet only. Never add a mainnet RPC, chain ID, or contract address without confirmation.
6. **Faucet limits (confirmed):** 1 PC token per address per 6 hours. CAPTCHA-gated — not scriptable. Never write agent logic that calls the faucet in a loop. If limits change, update the network table in `llms.txt`, the matching row in `build.agents.llms.mjs`, and this rule.

---

## agents/ File Catalog

Complete reference for every file under `static/agents/`. Files marked **manual** are edited directly; **generated** means a build script owns them. When in doubt, check `source-freshness.json` for the authoritative source section and refresh trigger for each file.

---

### index.json — Agent Discovery Map

**Manual.** Entry point for all agent retrieval. Every file added to `static/agents/` must also appear here.

Required top-level fields:

```json
{
  "description": "...",
  "version": "1.0.0",
  "sdk_version": { "@pushchain/core": "X.Y.Z", "@pushchain/ui-kit": "X.Y.Z" },
  "generated": "ISO8601",
  "start_here": {
    "developer": "agents/workflows/send-universal-transaction.md",
    "agent": "agents/capabilities.json",
    "retrieval_system": "agents/retrieval-map.json"
  },
  "files": [ ... ],
  "authority": { ... }
}
```

Each `files[]` entry:

```json
{
  "path": "agents/foo.json",
  "purpose": "One sentence.",
  "type": "capability|workflow|skill|schema|example|governance"
}
```

---

### capabilities.json — SDK Capability Registry

**Manual.** The structured capability list agents use to understand what the SDK can do. Every SDK method that an agent might call should have an entry. This is distinct from `sdk-capabilities.json` (which is a raw namespace map).

Each entry requires:

```json
{
  "id": "snake_case_id",
  "name": "Human-readable name",
  "description": "What it does.",
  "actor": ["developer", "backend", "browser_agent"],
  "operation": "read|write",
  "prerequisites": ["other_capability_id"],
  "inputs": [
    {
      "name": "param",
      "type": "TypeScriptType",
      "required": true,
      "description": "..."
    }
  ],
  "outputs": [
    { "name": "result", "type": "TypeScriptType", "description": "..." }
  ],
  "sdk_method": "PushChain.namespace.method",
  "example_ids": ["example-file-id"],
  "notes": "Optional edge-case notes."
}
```

Update when: new SDK method added, existing method signature changes, new actor type supported.

---

### sdk-capabilities.json — Full SDK Namespace Map

**Manual.** Raw enumeration of every namespace and method in the SDK, with advanced arguments (`prepareTransaction`, `executeTransactions`, etc.). Used by agents that need to know the exact call surface without loading a skill file. Mirrors the capabilities.json entries but organized by SDK namespace rather than by use case.

Update when: SDK namespaces change, methods added/removed, argument shapes change.

---

### supported-chains.json — Verified Chain Registry

**Manual.** Authoritative list of all chains the SDK supports. Each entry includes CAIP-2 ID, EVM chain ID (if applicable), RPC URL, block explorer URL, and Universal Gateway contract address on that chain.

Rules:

- Never add a chain without confirming the Universal Gateway address from the contracts team.
- CAIP-2 format: `eip155:CHAIN_ID` for EVM, `solana:GENESIS_HASH` for Solana.
- Agents must use this file, not `contract-addresses.json`, when looking up chain-specific RPC or explorer URLs.

Update when: new chain support announced, RPC URLs rotate, explorer URLs change.

---

### contract-addresses.json — Authoritative Address Registry

**Manual.** Single source of truth for all Push Chain contract addresses (on Push Chain itself and on each external chain). The `push-contracts` skill is generated from this file. `llms.txt` Directive 2 designates this as the authoritative source.

Rules:

- Never hardcode an address in a skill, workflow, or llms.txt — always reference this file.
- When adding a new contract, add entries for every chain it is deployed on.
- If an address changes (upgrade), update here first, then regenerate the `push-contracts` skill.

Update when: new contracts deployed, contract upgrades, new external-chain deployments.

---

### decision-tree.json — Routing Logic

**Manual.** Branching decision tree agents use to map a user intent (e.g. "send tokens from Solana to an Ethereum contract") to the correct capability and workflow. Structured as nested nodes with `condition` → `result` or `children`.

Update when: new transaction patterns added (e.g. cascade transactions), routing rules change, new signer types supported.

---

### task-router.md — Plain-Language Routing Guide

**Manual.** Prose companion to `decision-tree.json`. Maps common developer goals to capabilities and workflows in natural language. Used by agents that prefer text over JSON branching logic.

Format: headed sections by goal type, each with a recommended capability, workflow link, and any caveats.

Update when: new integration patterns documented, common misrouting patterns identified.

---

### errors.json — Error Catalog

**Manual.** All known SDK errors with: error code, message pattern, cause, and recovery action. Agents load this file when a transaction or SDK call fails.

Each entry:

```json
{
  "code": "ERR_CODE",
  "message_pattern": "Regex or string to match the error message",
  "cause": "Why this happens.",
  "recovery": "What the agent should do.",
  "related_capability": "capability_id"
}
```

Update when: new SDK errors added, error messages change, new recovery paths discovered.

---

### recovery-playbook.md

**Manual.** Step-by-step recovery flows for common failure scenarios (stuck transactions, failed CEA deployments, signature mismatches, etc.). More detailed than `errors.json` — written as narrative runbooks.

Update when: new failure modes documented, existing recovery flows change.

---

### mcp-candidates.json — MCP Tool Definitions

**Manual.** Reference MCP tool definitions that map SDK capabilities to tool-use frameworks. These are reference implementations — not a supported tool server. Framing in llms.txt must always say "adapt for your tool framework."

Each tool entry:

```json
{
  "name": "snake_case_tool_name",
  "description": "What the tool does.",
  "inputs": [
    {
      "name": "param",
      "type": "string|number|boolean|object",
      "description": "...",
      "required": true
    }
  ],
  "outputs": [{ "name": "result", "type": "...", "description": "..." }],
  "notes": "Implementation guidance or caveats.",
  "workflow_mapping": ["workflow-id"]
}
```

Update when: new SDK capabilities added, existing capabilities change, new cross-chain patterns documented.

---

### feature-matrix.json — Feature × Actor Matrix

**Manual.** Which features are available to which actor types (developer, end user, agent, backend). Used by agents doing capability planning.

Update when: feature availability changes across actor types, new actors defined.

---

### constants.json — SDK Constants Reference

**Manual.** All `PushChain.CONSTANTS.*` values: chain identifiers (`CHAIN`), network names (`PUSH_NETWORK`), token enums, library types. Agents use this to construct correct constant references without hardcoding strings.

Update when: new chains, networks, or token types added to `PushChain.CONSTANTS`.

---

### retrieval-map.json — Capability → Docs Source Map

**Manual.** Maps every capability ID to its authoritative documentation page URL. Used by RAG pipelines to ground responses in the correct doc section.

Each entry:

```json
{
  "capability": "capability_id",
  "doc_url": "https://push.org/docs/chain/...",
  "agent_file": "agents/capabilities.json",
  "llms_full_section": "Section heading in llms-full.txt"
}
```

Update when: new capabilities added, doc URLs change, section headings in llms-full.txt change.

---

### source-freshness.json — Staleness Tracker

**Manual.** Maps each agent file to its source doc sections, change frequency (`low`/`medium`/`high`), cache safety, and the human-readable `refresh_trigger` (what event requires the file to be updated).

Use this file to decide which agent files to audit after a SDK release or doc rewrite. Files with `"cache_safe": false` and `"change_frequency": "medium"` are the highest priority to refresh.

When adding a new agent file, also add a `source-freshness.json` entry.

---

### changelog.json — Machine-Readable Change History

**Manual.** Machine-readable version history for the agents layer. Complements the `## Changelog` section in `llms.txt`. Agents with cached copies compare this against their local state to decide whether to refetch.

```json
{
  "version": "1.0.0",
  "entries": [
    {
      "date": "YYYY-MM-DD",
      "version": "X.Y.Z",
      "changes": ["Short description of change."]
    }
  ]
}
```

---

### README.md — Human Introduction

**Manual.** Human-readable introduction to the agents layer, intended for developers browsing the repo. Not consumed by agents. Keep it short — one paragraph on purpose, one on how to use, a table of key files.

---

### schemas/ — JSON Schemas

**Manual.** JSON Schema (draft-07) definitions for all SDK request and response types. Agents use these for input validation and response parsing.

`schemas/index.json` — lists all schemas with their file path and description.

Individual schema files: `universal-transaction-request.json`, `universal-transaction-response.json`, `universal-signer.json`, `universal-account.json`, `chain-config.json`, `transaction-receipt.json`, `error-object.json`.

Each schema file must include `$schema`, `title`, `description`, `type`, and `properties`. All required fields must appear in `"required": []`.

Update when: SDK argument shapes change, new fields added to request/response types.

---

### skills/ — Skill Files

**Manual.** Domain-scoped context files. An agent loads exactly one skill based on their task.

`skills/index.json` — lists all skills. Each entry:

```json
{
  "id": "push-frontend|push-backend|push-contracts",
  "file": "agents/skills/SKILL_ID/SKILL.md",
  "url": "https://push.org/agents/skills/SKILL_ID/SKILL.md",
  "intent": "One sentence describing when to use this skill.",
  "package": "@pushchain/package-name or 'none'",
  "entry": "Primary entry point (method or hook name)",
  "quickstart": "CLI command if applicable",
  "references": ["agents/skills/SKILL_ID/references/foo.md"],
  "resources": "agents/resources/SKILL_ID/index.json"
}
```

**SKILL.md structure** (mandatory sections in order):

1. `# Skill: <Name>` — heading with skill name
2. `## When to use this skill` — one paragraph
3. `## Package` — install command
4. `## Entry point` — first method/hook to call
5. `## Key concepts` — 3–6 bullet points
6. `## Minimal example` — 10–20 line TypeScript/Solidity snippet
7. `## Directives` — rules specific to this skill (supplement the global directives, don't repeat them)
8. `## Workflows` — links to canonical workflows for this skill
9. `## Examples` — links to 3–5 representative examples
10. `## See Also` — absolute URLs to related resources

Rules:

- All links must be absolute URLs.
- The minimal example must be a working, copy-pastable snippet verified against the current SDK version.
- Directives in the skill file supplement (not replace) the 7 global directives in `llms.txt`.

---

### resources/ — Runnable Code Files

**Manual.** Downloadable, runnable code files organized by skill. Each skill subdirectory has an `index.json` listing the files.

`resources/index.json` — top-level listing:

```json
{
  "resources": [
    { "id": "push-frontend", "index": "agents/resources/push-frontend/index.json", "files": ["package.json", "app-wrapper.tsx", ...] }
  ]
}
```

Each `resources/SKILL_ID/index.json` lists the individual files with their purpose. The actual files (`.ts`, `.sol`, `.json`, etc.) live alongside the index.

Rules:

- All code files must be runnable as-is against the pinned SDK versions in `build.agents.llms.mjs`.
- When SDK versions are bumped, regenerate and re-test resource files.
- `package.json` files must pin exact versions, not ranges.

---

### examples/ — Minimal Code Snippets

**Manual.** 60+ minimal, self-contained TypeScript code snippets. One concept per file. Agents load these for copy-pastable seed code.

`examples/index.json` — array of entries:

```json
{
  "id": "kebab-case-id",
  "name": "Human-readable name",
  "file": "example-file.md",
  "description": "One sentence.",
  "sdk_methods_used": ["PushChain.namespace.method"],
  "chains_involved": ["eip155:11155111"],
  "prerequisite_examples": ["other-example-id"]
}
```

Individual example `.md` files — structure:

````markdown
# Example: <Name>

Short description of what this demonstrates.

## Code

```typescript
// working code
```
````

## Notes

Optional edge cases or caveats.

```

Rules:
- Each example must be self-contained — no implicit imports from other example files.
- `sdk_methods_used` must exactly match the method signatures in `capabilities.json`.
- `chains_involved` must use CAIP-2 format and match entries in `supported-chains.json`.
- When a new SDK method is added, add at least one minimal example for it.

---

## Cross-File Consistency Rules

When you change one file, these other files must also be checked:

| You changed | Also update |
|---|---|
| New SDK capability | `capabilities.json`, `sdk-capabilities.json`, `retrieval-map.json`, `mcp-candidates.json`, at least one `examples/` entry, relevant skill's `## Workflows` section |
| New workflow | `workflows/index.json` (add `category`), `static/agents/index.json` `files[]`, `llms.txt` Canonical Workflows, relevant skill's `## Workflows` section |
| New contract or address | `contract-addresses.json`, `push-contracts` skill, `supported-chains.json` if chain-specific |
| SDK version bump | `build.agents.llms.mjs` `SDK_VERSIONS`, `static/agents/index.json` `sdk_version`, versioning callout in `static/llms.txt`, `## Changelog` in `llms.txt`, `changelog.json`, all `resources/` package.json files |
| New chain support | `supported-chains.json`, `constants.json`, `capabilities.json` (actor/chain lists), `retrieval-map.json` |
| Error message / code change | `errors.json`, `recovery-playbook.md` |
| Doc URL changes | `retrieval-map.json`, `source-freshness.json` |
| New agent file added | `static/agents/index.json` `files[]`, `source-freshness.json` |
```
