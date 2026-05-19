#!/usr/bin/env node
// build.agents.llms.mjs — Generates static/llms.txt from the /agents/ layer + blog + KB links.
// Runs as part of every regular build (does NOT call an external API).
// Run standalone: node build.agents.llms.mjs

import chalk from 'chalk';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATIC_DIR = path.join(__dirname, 'static');
const AGENTS_DIR = path.join(STATIC_DIR, 'agents');
const BLOG_DIR = path.join(__dirname, 'blog');
const OUTPUT_PATH = path.join(STATIC_DIR, 'llms.txt');
const WORKFLOWS_INDEX_PATH = path.join(AGENTS_DIR, 'workflows', 'index.json');
const SKILLS_INDEX_PATH = path.join(AGENTS_DIR, 'skills', 'index.json');
const RESOURCES_INDEX_PATH = path.join(AGENTS_DIR, 'resources', 'index.json');

const BASE_URL = 'https://push.org';
const MAX_BLOG_POSTS = 5;

const SDK_VERSIONS = {
  core: '6.0.9',
  uiKit: '6.0.9',
};
const AGENT_LAYER_VERSION = '1.0.19';
const AGENT_LAYER_DATE = '2026-05-19';
const ROUTES_PATH = path.join(AGENTS_DIR, 'routes.json');

const WORKFLOW_CATEGORIES = [
  { key: 'core-execution', label: '### Core execution' },
  { key: 'reading-utilities', label: '### Reading & utilities' },
  { key: 'frontend', label: '### Frontend (UI Kit)' },
  { key: 'contracts', label: '### Contracts' },
  { key: 'setup', label: '### Setup' },
];

// Hardcoded fallback workflow stubs when agents/ hasn't been generated yet
const FALLBACK_WORKFLOWS = [
  {
    id: 'send-universal-transaction',
    name: 'Send Universal Transaction',
    file: 'agents/workflows/send-universal-transaction.md',
    purpose:
      'Send a transaction from any chain to Push Chain or external chains',
  },
  {
    id: 'track-transaction',
    name: 'Track Universal Transaction',
    file: 'agents/workflows/track-transaction.md',
    purpose: 'Track and wait for transaction confirmation',
  },
  {
    id: 'connect-wallet-ui-kit',
    name: 'Connect Wallet via UI Kit',
    file: 'agents/workflows/connect-wallet-ui-kit.md',
    purpose: 'Integrate PushUniversalWalletProvider in a React app',
  },
  {
    id: 'initialize-client',
    name: 'Initialize Push Chain Client',
    file: 'agents/workflows/initialize-client.md',
    purpose: 'Initialize PushChain SDK with any wallet type',
  },
  {
    id: 'send-multichain-transaction',
    name: 'Send Multichain Transaction',
    file: 'agents/workflows/send-multichain-transaction.md',
    purpose: 'Execute a transaction on an external chain via Push Chain',
  },
  {
    id: 'sign-universal-message',
    name: 'Sign Universal Message',
    file: 'agents/workflows/sign-universal-message.md',
    purpose: 'Sign a message using the universal signer',
  },
];

// Load skills from agents/skills/index.json if available
const loadSkills = async () => {
  try {
    const raw = await fs.readFile(SKILLS_INDEX_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    const skills = parsed.skills ?? [];
    if (skills.length > 0) return skills;
  } catch {
    // skills not yet generated
  }
  return [];
};

// Load resources from agents/resources/index.json if available
const loadResources = async () => {
  try {
    const raw = await fs.readFile(RESOURCES_INDEX_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    return parsed.resources ?? [];
  } catch {
    return [];
  }
};

// Load the canonical route definitions from agents/routes.json. This is the
// single source of truth for route prose across the agent layer — when it
// fails to load, fall back to inline strings so a missing file doesn't break
// the build.
const loadRoutes = async () => {
  try {
    const raw = await fs.readFile(ROUTES_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    return parsed.routes ?? [];
  } catch {
    return [];
  }
};

// Load canonical workflows from agents/workflows/index.json if available
const loadWorkflows = async () => {
  try {
    const raw = await fs.readFile(WORKFLOWS_INDEX_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    const entries = Array.isArray(parsed)
      ? parsed
      : (parsed.workflows ?? parsed.entries ?? []);
    if (entries.length > 0) return entries;
  } catch {
    // file not yet generated — fall back to stubs
  }
  return FALLBACK_WORKFLOWS;
};

// Gather recent blog posts (mirrors logic in build.agents.preseed.mjs)
const gatherBlogPosts = async () => {
  let entries;
  try {
    entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  } catch {
    return [];
  }

  const blogDirs = entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()
    .reverse()
    .slice(0, MAX_BLOG_POSTS);

  const posts = [];

  for (const dirName of blogDirs) {
    const indexPath = path.join(BLOG_DIR, dirName, 'index.md');
    let raw;
    try {
      raw = await fs.readFile(indexPath, 'utf-8');
    } catch {
      continue;
    }

    let parsed;
    try {
      parsed = matter(raw);
    } catch {
      continue;
    }

    const { title, slug, description } = parsed.data;
    if (!title) continue;

    const blogSlug = slug ?? dirName;
    const url = `${BASE_URL}/blog/${blogSlug}/`.replace(/\/+$/, '/');
    posts.push({ title, description: description ?? null, url });
  }

  return posts;
};

// Build llms.txt — static sections hardcoded, workflows, skills, resources and blog posts dynamic
const buildLlmsTxt = async (workflows, skills, resources, routes, blogPosts) => {
  const lines = [];

  // ── Header ──────────────────────────────────────────────────────────────
  lines.push('# Push Chain');
  lines.push('');
  lines.push(
    '> Push Chain is a universal, shared-state Layer 1 blockchain. Developers deploy once on Push Chain and reach users from any EVM or non-EVM chain. Users transact from their home chain using any supported token — no bridging, no network switching.'
  );
  lines.push('');
  lines.push(
    `> **Agent layer:** v${AGENT_LAYER_VERSION} | Last updated: ${AGENT_LAYER_DATE} | SDK: \`@pushchain/core@${SDK_VERSIONS.core}\` · \`@pushchain/ui-kit@${SDK_VERSIONS.uiKit}\` | Network: Donut Testnet (Mainnet not yet launched)`
  );
  lines.push('');

  // ── Who This Is For ──────────────────────────────────────────────────────
  lines.push('## Who This Is For');
  lines.push('');
  lines.push('- Developers building universal dApps with the Push Chain SDK');
  lines.push(
    '- AI coding assistants and agents executing SDK tasks via Cursor, Windsurf, or Claude Code'
  );
  lines.push(
    '- RAG pipelines and retrieval systems indexing Push Chain documentation'
  );
  lines.push('');

  // ── Key Concepts ─────────────────────────────────────────────────────────
  lines.push('## Key Concepts');
  lines.push('');
  lines.push(
    "- **Universal Origin Account (UOA)**: The user's native wallet on their home chain (e.g. MetaMask on Ethereum, Phantom on Solana)."
  );
  lines.push(
    '- **Universal Executor Account (UEA)**: A deterministic smart account on Push Chain derived from the UOA. Executes transactions on behalf of the user.'
  );
  lines.push(
    '- **Chain Executor Account (CEA)**: A deterministic smart account on an external chain (e.g. Ethereum Sepolia) derived from the UEA. Enables Push Chain to execute transactions on external chains.'
  );
  lines.push(
    '- **Universal Transaction**: A single SDK call that routes funds and execution from any origin chain to Push Chain or an external target.'
  );
  // Route prose pulled from agents/routes.json (single source of truth).
  // Falls back to inline strings only if the JSON failed to load.
  if (routes.length > 0) {
    for (const route of routes) {
      lines.push(`- **${route.name}** — ${route.llms_summary}`);
    }
  } else {
    lines.push(
      '- **Route 1** — Target is Push Chain (`tx.to` = plain address). External-chain user: UOA → UEA → Push Chain contract. Native Push Chain account: wallet → Push Chain contract directly (no UEA hop). *(e.g. Ethereum user calls a Push Chain NFT contract signing once on Ethereum; or a Push Chain wallet calls the same contract directly.)*'
    );
    lines.push(
      '- **Route 2** — Target is an external chain (`tx.to = { address, chain }`). External-chain user: UOA → UEA → CEA → external chain. Native Push Chain account: wallet → CEA → external chain. *(e.g. Solana user pays in SOL to mint an NFT on Base; or a Push Chain wallet triggers the same Base contract via CEA.)*'
    );
    lines.push(
      "- **Route 3** — CEA-originated inbound to Push Chain (`tx.from.chain` set). Every account that acts on external chains gets a deterministic CEA deployed there — one per account, per chain — to preserve identity and prevent funds from mixing across accounts. Route 3 invokes that CEA on the specified external chain; the CEA then makes the inbound call to Push Chain, so `msg.sender` on Push Chain = the CEA address (not the UEA). *(e.g. a Push Chain contract that tracks per-chain identity uses Route 3 so each user's Ethereum CEA and Solana CEA are distinct `msg.sender` values.)*"
    );
  }
  lines.push('');

  // ── Packages ─────────────────────────────────────────────────────────────
  lines.push('## Packages');
  lines.push('');
  lines.push(
    `- \`@pushchain/ui-kit\` — **Frontend (React apps)**: Required to enable universal transactions in the browser. Bundles \`@pushchain/core\` — no separate install needed. Provides the \`usePushChainClient()\` hook for \`sendTransaction\`, \`signMessage\`, \`prepareTransaction\`, and \`executeTransactions\` in React. [npm](https://npmjs.com/package/@pushchain/ui-kit)`
  );
  lines.push(
    `  - [Integration guide](${BASE_URL}/agents/workflows/connect-wallet-ui-kit.md): Set up PushUniversalWalletProvider in a React app.`
  );
  lines.push(
    `  - [Customization](${BASE_URL}/agents/workflows/use-universal-wallet-provider.md): Theme overrides and advanced provider options.`
  );
  lines.push(
    '- `@pushchain/core` — **Backend / Node.js**: Required to enable universal transactions in scripts, bots, automation, and server-side code. No other library (ethers.js, viem, wagmi) can replace `sendTransaction`, `signMessage`, `prepareTransaction`, or `executeTransactions`. [npm](https://npmjs.com/package/@pushchain/core)'
  );
  lines.push(
    '- `npx create-universal-dapp` — Scaffolding CLI that bootstraps a universal dApp with `@pushchain/ui-kit` pre-integrated and ready to use.'
  );
  lines.push('');
  lines.push(
    '> Reading blockchain state from Push Chain can be done with any EVM-compatible library (ethers.js, viem, etc.) via the Push Chain RPC URL. Only transaction execution and signing require the Push Chain SDK.'
  );
  lines.push('');

  // ── Network ───────────────────────────────────────────────────────────────
  lines.push('## Network');
  lines.push('');
  lines.push(
    '> **Donut** is the codename for the first public Push Chain testnet. Mainnet is not yet launched — do not apply these values to a production environment.'
  );
  lines.push('');
  lines.push('| Field | Value |');
  lines.push('|---|---|');
  lines.push('| **Name** | Push Chain Donut Testnet |');
  lines.push('| **Chain ID** | 42101 |');
  lines.push('| **RPC URL** | https://evm.donut.rpc.push.org/ |');
  lines.push('| **WebSocket** | wss://evm.donut.rpc.push.org |');
  lines.push('| **Block Explorer** | https://donut.push.network |');
  lines.push(
    '| **Faucet** | https://faucet.push.org — 1 PC / 6 h per address |'
  );
  lines.push('| **Mainnet** | Not yet launched |');
  lines.push('');
  lines.push(
    '> **Public RPC:** No API key required. Fair-use rate limits apply — use a dedicated RPC endpoint for production workloads.'
  );
  lines.push('');
  lines.push(
    '> **Faucet:** 1 PC token per address per 6 hours. CAPTCHA-gated — not scriptable. Do not write agent loops that call the faucet automatically.'
  );
  lines.push('');

  // ── Start Here ────────────────────────────────────────────────────────────
  lines.push('## Start Here');
  lines.push('');
  lines.push(
    '> **Agents:** this section links human-oriented documentation. For execution tasks, prefer the **Agent Layer** section below.'
  );
  lines.push('');
  lines.push(
    `- [Docs](${BASE_URL}/docs/chain/): Full Push Chain documentation index.`
  );
  lines.push(
    `- [Quickstart](${BASE_URL}/docs/chain/quickstart/): Run your first universal transaction in under 5 minutes.`
  );
  lines.push(
    `- [Important Concepts](${BASE_URL}/docs/chain/important-concepts/): UOA, UEA, CEA, universal transactions, and routing explained.`
  );
  lines.push(
    `- [Chain Configuration](${BASE_URL}/docs/chain/setup/chain-config/): RPC URLs, chain IDs, block explorers, and contract addresses.`
  );
  lines.push(
    `- [For AI Agents & LLMs](${BASE_URL}/docs/chain/for-ai-agents/): Code editor setup, context files, and the full agent layer explained.`
  );
  lines.push('');

  // ── Agent Layer ───────────────────────────────────────────────────────────
  lines.push('## Agent Layer');
  lines.push('');
  lines.push(
    'Prefer these structured resources over the full docs tree for execution tasks.'
  );
  lines.push('');

  // ── Core sub-section
  lines.push('### Core (always load)');
  lines.push('');
  lines.push('Load these on every agent session regardless of context budget:');
  lines.push('');
  lines.push(
    `- [Agent Index](${BASE_URL}/agents/index.json): Discovery map listing every agent file, its purpose, and the recommended traversal order.`
  );

  // Skills — dynamic from skills/index.json, multi-line format
  lines.push(
    `- **Skills** ([index](${BASE_URL}/agents/skills/index.json)): Copyable, self-contained skill files. **Load the one matching your context before generating any code.**`
  );
  if (skills.length > 0) {
    for (const s of skills) {
      // External skills (e.g. push-pusd on pusd.push.org) carry an absolute
      // `url` plus optional `host` / `agent_layer`; internal skills have a
      // repo-relative `file`. Render each appropriately so the link is never
      // `${BASE_URL}/undefined`.
      const href = s.external
        ? s.url
        : s.file
        ? `${BASE_URL}/${s.file}`
        : s.url;
      if (s.external) {
        const brief =
          s.id === 'push-pusd'
            ? 'PUSD / PUSD+ stablecoin integration (mint, redeem, NAV quotes, cross-chain deposits)'
            : (s.description || '').split('.')[0];
        const hosting = s.host
          ? ` Hosted at \`${s.host}\`${s.agent_layer ? `; full agent layer at ${s.agent_layer}` : ''}.`
          : '';
        lines.push(`  - [${s.id}](${href}) - ${brief}.${hosting}`);
      } else {
        lines.push(`  - [${s.id}](${href})`);
      }
    }
  } else {
    lines.push(
      `  - [push-frontend](${BASE_URL}/agents/skills/push-frontend/SKILL.md)`
    );
    lines.push(
      `  - [push-backend](${BASE_URL}/agents/skills/push-backend/SKILL.md)`
    );
    lines.push(
      `  - [push-contracts](${BASE_URL}/agents/skills/push-contracts/SKILL.md)`
    );
  }

  lines.push(
    `- [Capabilities](${BASE_URL}/agents/capabilities.json): Every SDK capability with inputs, outputs, and method signatures.`
  );
  lines.push(
    `- [Error Catalog](${BASE_URL}/agents/errors.json): All known SDK errors with recovery actions.`
  );
  lines.push(
    `- [Contract Addresses](${BASE_URL}/agents/contract-addresses.json): Authoritative registry of all Push Chain and external-chain contract addresses. Never hallucinate addresses — always source from here.`
  );
  lines.push('');

  // ── Extended sub-section
  lines.push('### Extended (load if budget allows)');
  lines.push('');
  lines.push(
    'Load these for deeper context, RAG grounding, or tool-use integration:'
  );
  lines.push('');
  lines.push(
    `- [SDK Capabilities](${BASE_URL}/agents/sdk-capabilities.json): Full SDK namespace map — all namespaces, methods, and advanced arguments including prepareTransaction and executeTransactions.`
  );

  // Resources — dynamic from resources/index.json, multi-line format
  lines.push(
    `- [Resources](${BASE_URL}/agents/resources/index.json): Downloadable, runnable code files organized by skill.`
  );
  if (resources.length > 0) {
    for (const r of resources) {
      const fileList = (r.files ?? []).map((f) => `\`${f}\``).join(', ');
      lines.push(`  - [${r.id}](${BASE_URL}/${r.index}): ${fileList}`);
    }
  } else {
    lines.push(
      `  - [push-frontend](${BASE_URL}/agents/resources/push-frontend/index.json): \`package.json\`, \`app-wrapper.tsx\`, \`send-universal-tx.tsx\``
    );
    lines.push(
      `  - [push-backend](${BASE_URL}/agents/resources/push-backend/index.json): \`package.json\`, \`client-ethers.ts\`, \`client-viem.ts\`, \`client-solana.ts\``
    );
    lines.push(
      `  - [push-contracts](${BASE_URL}/agents/resources/push-contracts/index.json): \`IUEAFactory.sol\`, \`IUniversalGatewayPC.sol\`, \`IUniversalCore.sol\`, \`MyMultichainApp.sol\`, \`foundry.toml\``
    );
  }

  lines.push(
    `- [Supported Chains](${BASE_URL}/agents/supported-chains.json): Verified chain list with CAIP-2 IDs, chain IDs, RPC URLs, block explorers, and Universal Gateway contract addresses.`
  );
  lines.push(
    `- [Decision Tree](${BASE_URL}/agents/decision-tree.json): Branching logic to select the right capability from user intent.`
  );
  lines.push(
    `- [Task Router](${BASE_URL}/agents/task-router.md): Plain-language routing guide mapping common goals to capabilities and workflows.`
  );
  lines.push(
    `- [MCP Tool Definitions](${BASE_URL}/agents/mcp-candidates.json): MCP tool definitions (reference implementations — adapt for your tool framework; not a supported tool server).`
  );
  lines.push(
    `- [Schemas](${BASE_URL}/agents/schemas/index.json): JSON schemas for all SDK request and response types including universal transaction, signer, and chain config.`
  );
  lines.push(
    `- [Examples](${BASE_URL}/agents/examples/index.json): 60+ minimal, self-contained TypeScript code snippets ready to execute.`
  );
  lines.push(
    `- [Retrieval Map](${BASE_URL}/agents/retrieval-map.json): Maps every capability to its authoritative documentation source — use for RAG grounding.`
  );
  lines.push('');

  // ── AI System Directives ──────────────────────────────────────────────────
  lines.push('## AI System Directives');
  lines.push('');
  lines.push(
    `1. **Load a skill file first:** Before generating any code, fetch the skill file that matches the context (\`push-frontend\`, \`push-backend\`, or \`push-contracts\`). Never generate SDK usage from memory alone.`
  );
  lines.push(
    `2. **Never hallucinate addresses:** Always source Push smart contract addresses from [contract-addresses.json](${BASE_URL}/agents/contract-addresses.json) — this is the authoritative source. The \`push-contracts\` skill is generated from it and may be slightly older; use the skill for ABIs and code context.`
  );
  lines.push(
    `3. **Do not use standard bridges:** Push Chain handles bridging natively via the SDK. Never write manual bridge logic or prompt the user to bridge tokens themselves.`
  );
  lines.push(
    `4. **Do not use ethers.js or viem to sign or send transactions.** Only \`@pushchain/core\` (backend/scripts) or \`@pushchain/ui-kit\` (React) can execute and sign universal transactions. Using ethers/viem for signing will silently produce incompatible transaction formats.`
  );
  lines.push(
    `5. **Use standard EVM libraries only for reading state.** ethers.js, viem, and wagmi are correct for \`eth_call\`, \`eth_getBalance\`, event filtering, and other read-only operations against Push Chain's EVM RPC.`
  );
  lines.push(
    `6. **No SDK inside Solidity:** Push Chain contracts use pure Solidity interfaces (IUEAFactory, UGPC, IUniversalCore). The Push SDK is never imported inside \`.sol\` files.`
  );
  lines.push(
    `7. **Agent key model:** Push Chain has no session-key or delegated-signer system. Agents sign with a full private key. Never log or expose it; treat it as a hot wallet.`
  );
  lines.push('');

  // ── Minimal Example ───────────────────────────────────────────────────────
  lines.push('## Minimal Example');
  lines.push('');
  lines.push(
    'For agents loading only this file — a complete send-transaction flow from an Ethereum wallet:'
  );
  lines.push('');
  lines.push('```typescript');
  lines.push(
    '// Route 1: any origin chain → UEA (if external chain) → Push Chain contract'
  );
  lines.push(`import { PushChain } from '@pushchain/core';`);
  lines.push(`import { ethers } from 'ethers';`);
  lines.push('');
  lines.push(`// 1. Wrap any EVM signer into a UniversalSigner`);
  lines.push(
    `const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');`
  );
  lines.push(
    `// Push Chain native provider: 'https://evm.donut.rpc.push.org/'`
  );
  lines.push(`// For Solana origin: construct a Solana signer and wrap via`);
  lines.push(`//   PushChain.utils.signer.toUniversal(solanaSigner)`);
  lines.push(`// (See push-backend skill for the full Solana flow.)`);
  lines.push(
    `const wallet   = new ethers.Wallet(process.env.PRIVATE_KEY!, provider); // Load from env; never hardcode, never log`
  );
  lines.push(
    `const signer   = await PushChain.utils.signer.toUniversal(wallet);`
  );
  lines.push('');
  lines.push(
    `// 2. Initialize the client (routes through UG → Push Chain automatically)`
  );
  lines.push(`const client = await PushChain.initialize(signer);`);
  lines.push('');
  lines.push(`// 3. Send a transaction to a Push Chain contract`);
  lines.push(
    `const tx      = await client.universal.sendTransaction({ to: '0xYourContract', data: '0x' });`
  );
  lines.push(`const receipt = await tx.wait();`);
  lines.push(`console.log('tx hash:', receipt.hash);`);
  lines.push('```');
  lines.push('');
  lines.push(
    '> Load `push-backend` or `push-frontend` skill for a production-ready version with error handling and progress hooks.'
  );
  lines.push('');

  // ── Common Mistakes ────────────────────────────────────────────────────────
  lines.push('## Common Mistakes');
  lines.push('');
  lines.push('| Symptom | Likely cause | Fix |');
  lines.push('|---|---|---|');
  lines.push(
    '| `receipt.hash` is undefined / `tx` has no `.hash` | `sendTransaction` returns a `TxResponse`, not a receipt | Call `await tx.wait()` to get the receipt |'
  );
  lines.push(
    "| Tx executes on Push Chain instead of the intended external chain | `to` is a plain address string — treated as Route 1 | Use `to: { address: '0x...', chain: CHAIN.ETHEREUM_SEPOLIA }` for Route 2 |"
  );
  lines.push(
    '| `msg.sender` in your contract is an unexpected address | `msg.sender` is the user’s UEA, not their origin wallet | Call `IUEAFactory(UEA_FACTORY_ADDR).getOriginForUEA(msg.sender)` to recover `(chainNamespace, chainId, walletAddress)` |'
  );
  lines.push(
    '| `sendTransaction` throws / produces a malformed tx | ethers or viem `wallet.sendTransaction()` used instead of the SDK | Replace with `client.universal.sendTransaction()` \u2014 only the Push SDK can produce a valid universal tx |'
  );
  lines.push(
    '| `PushChain.initialize()` throws or rejects the signer | Raw ethers/viem signer passed without wrapping | Wrap first: `await PushChain.utils.signer.toUniversal(wallet)` |'
  );
  lines.push(
    '| RPC returns chain ID mismatch / nonce errors | Wallet configured for a different network; Donut Testnet is chain ID 42101 | Set both wallet and provider to chain ID `42101` with RPC `https://evm.donut.rpc.push.org/` |'
  );
  lines.push(
    '| Tx fails with "insufficient funds" even though origin wallet has balance | UEA on Push Chain has no PC token balance \u2014 gas abstraction requires a funded UEA | Fund the UEA address on Push Chain via https://faucet.push.org or transfer PC tokens to it |'
  );
  lines.push('');

  // ── Canonical Workflows (grouped by category) ─────────────────────────────
  lines.push('## Canonical Workflows');
  lines.push('');
  const grouped = new Map(WORKFLOW_CATEGORIES.map((c) => [c.key, []]));
  const uncategorized = [];
  for (const wf of workflows) {
    if (wf.category && grouped.has(wf.category)) {
      grouped.get(wf.category).push(wf);
    } else {
      uncategorized.push(wf);
    }
  }
  for (const { key, label } of WORKFLOW_CATEGORIES) {
    const entries = grouped.get(key);
    if (!entries || entries.length === 0) continue;
    lines.push(label);
    lines.push('');
    for (const wf of entries) {
      const url = `${BASE_URL}/${wf.file}`;
      const desc = wf.purpose ? `: ${wf.purpose}` : '';
      lines.push(`- [${wf.name}](${url})${desc}`);
    }
    lines.push('');
  }
  if (uncategorized.length > 0) {
    lines.push('### Other');
    lines.push('');
    for (const wf of uncategorized) {
      const url = `${BASE_URL}/${wf.file}`;
      const desc = wf.purpose ? `: ${wf.purpose}` : '';
      lines.push(`- [${wf.name}](${url})${desc}`);
    }
    lines.push('');
  }

  // ── Full Context ──────────────────────────────────────────────────────────
  lines.push('## Full Context');
  lines.push('');
  lines.push(
    'Full text of all canonical documentation pages, stripped of MDX/JSX markup. Suitable for single-fetch RAG ingestion or deep reference.'
  );
  lines.push('');
  lines.push(`- ${BASE_URL}/llms-full.txt`);
  lines.push('');

  // ── Add to Your AI Editor ─────────────────────────────────────────────────
  lines.push('## Add to Your AI Editor');
  lines.push('');
  lines.push(
    `- Cursor: Settings → Features → Docs → Add new doc → ${BASE_URL}/llms.txt`
  );
  lines.push(`- Windsurf: Add to Cascade window → @docs:${BASE_URL}/llms.txt`);
  lines.push(
    `- Claude Code: Add to CLAUDE.md or prompt → ${BASE_URL}/llms.txt`
  );
  lines.push(
    `- Claude.ai Projects: Project Knowledge → Add content → paste ${BASE_URL}/llms.txt`
  );
  lines.push('');

  // ── Changelog ──────────────────────────────────────────────────
  lines.push('## Changelog');
  lines.push('');
  lines.push(
    `> Machine-readable version: [changelog.json](${BASE_URL}/agents/changelog.json)`
  );
  lines.push('');
  lines.push(
    `- **${AGENT_LAYER_DATE} v${AGENT_LAYER_VERSION}** \u2014 SDK v6.0.9 bump (\`@pushchain/core\` 6.0.8 \u2192 6.0.9, \`@pushchain/ui-kit\` 6.0.8 \u2192 6.0.9). Fixes the UGPC \`GasPriceBelowBase()\` (selector \`0x05aab006\`) revert that intermittently failed Route 2 dispatches when the \`UniversalCore\` gas oracle lagged the destination chain's current base price. Tuned cascade tracking defaults: \`CascadeTrackOptions.pollingIntervalMs\` 5000 \u2192 3000, \`CascadeTrackOptions.timeout\` 600000 \u2192 300000 (10 min \u2192 5 min). Outbound polling: \`OUTBOUND_MAX_TIMEOUT_MS\` 180000 \u2192 300000; \`WaitForOutboundOptions\` initial wait 30000 \u2192 15000, poll 5000 \u2192 3000. New internal \`resolveR2DestinationFundsToken\` helper (no public API change). No progress hook ID changes; no type signature changes.`
  );
  lines.push(
    `- **2026-05-19 v1.0.18** \u2014 SDK v6.0.8 bump (\`@pushchain/core\` 6.0.6 \u2192 6.0.8, \`@pushchain/ui-kit\` 6.0.6 \u2192 6.0.8). Skill clarifications validated against the 6.0.8 source: \`client.universal.account\` is a plain \`\\\`0x\${string}\\\`\` address (not an object \u2014 reading \`.address\` on it is the silent-fail trap); \`PushUniversalWalletProvider\` takes \`app\` / \`themeMode\` / \`themeOverrides\` as **top-level props** (NOT inside \`config\`); \`login.wallet\` must be the object form \`{ enabled: true }\` (bare boolean is silently ignored). New **EIP-712 typed-data signing** sections in both push-frontend (signing side) and push-contracts (verification side) covering the cross-chain \`chainId\` trap: sign with the wallet's origin chainId, rebuild the EIP-712 domain dynamically from \`req.originChainId\` on the contract, branch on \`originChainId == block.chainid\` for native Push EOAs vs \`IUEAFactory.getUEAForOrigin\` for cross-chain origins; full pattern includes replay protection, ERC-1271 fallback, and anti-pattern table. Multichain swap example fixed to display Solana CEAs as base58 (the SDK returns hex internally) and reduced the Hop 0 PC seed from 200 to 30 (fee-lock cost scales accordingly).`
  );
  lines.push(
    `- **2026-05-18 v1.0.17** \u2014 SDK v6.0.6 bump (\`@pushchain/core\` 6.0.3 \u2192 6.0.6, \`@pushchain/ui-kit\` 6.0.2 \u2192 6.0.6). [progress-hook-events.md](${BASE_URL}/agents/workflows/progress-hook-events.md) rewritten against published SDK source. New pre-flight UEA balance check trio across Route 2 (\`SEND-TX-203-03/04/05\`), Route 3 (\`SEND-TX-303-04/05/06\`), and cascade (\`SEND-TX-003-03/04/05\`) with INFO / WARNING / ERROR level semantics gated by \`tx.options.enforceGasCheck\`. Route 1 gained \`SEND-TX-199-03\` (Push relay timeout) and \`SEND-TX-199-99\` (intermediate complete); Route 3 gained \`SEND-TX-399-99\` (intermediate inbound complete). Route 1 prepaid-deposit "Estimated" moved \`SEND-TX-103-04\` \u2192 \`SEND-TX-103-03-04\`; Route 3 prepaid-deposit cluster renumbered \`SEND-TX-302-03-XX\` \u2192 \`SEND-TX-303-03-XX\`. Removed: \`SEND-TX-102-02\`, \`SEND-TX-302-03\`, \`SEND-TX-302-04\`, \`SEND-TX-199-99-99\`. Migration table added.`
  );
  lines.push(
    `- **2026-05-17 v1.0.16** \u2014 Source-chain stablecoin re-deployment. New USDT contracts on Sepolia / Arbitrum Sepolia / Base Sepolia / BNB Testnet plus a new USDC on BNB Testnet. Gateway re-wired to the new sources; Push-side PRC-20 wrappers unchanged. Address tables in [Smart Contract Address Book](/docs/chain/setup/smart-contract-address-book) and [contract-addresses.json](${BASE_URL}/agents/contract-addresses.json) refreshed; \`pusd-mint-from-external-chain\` and related push-chain-examples updated to mint at the new USDT contract on Sepolia.`
  );
  lines.push(
    `- **2026-05-16 v1.0.13** \u2014 SDK v6.0.1 bump. New canonical accessor \`PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.bsc\` for Push-wrapped USDC from BNB Chain. Legacy \`USDC.bnb\` accessor still resolves to the same token but is marked \`@deprecated\`. Rename is USDC-only \u2014 \`USDT.bnb\` and \`pBnb\` are unchanged. All address tables and constants references updated.`
  );
  lines.push(
    `- **2026-05-15 v1.0.12** \u2014 SDK v6 bump. \`UniversalOutboundTxRequest\` struct gained \`gasPrice\` and \`maxPCForGas\` fields (8 fields total; \`recipient\` retained). Refreshed CEAFactory addresses on Sepolia / Arbitrum / Base / BNB testnets plus USDT PRC-20 addresses across all chains. Tutorial \`universal-cross-chain-counters\` redeployed against v6 layout (Push Donut orchestrator + Sepolia / BNB destination counters).`
  );
  lines.push(
    `- **2026-04-17 v1.0.0** \u2014 Pinned SDK versions (originally \`@pushchain/core@5.1.4\`, \`@pushchain/ui-kit@5.2.2\`). Corrected Route 1/2 for native Push Chain accounts. Added Route 3 CEA-identity semantics. Added Core / Extended agent layer tiers. Directives expanded to 7 (split ethers/viem rule; added agent hot-key model). Added \`## Minimal Example\`. Grouped canonical workflows by category. \`contract-addresses.json\` designated as authoritative address source.`
  );
  lines.push('');

  // ── Background Reading: Blog ─────────────────────────────────────────────
  lines.push('## Background Reading');
  lines.push('');
  lines.push(
    '> Non-canonical — do not cite as API reference. For conceptual background only.'
  );
  lines.push('');
  lines.push('### Blog — Recent Posts');
  lines.push('');
  if (blogPosts.length > 0) {
    for (const post of blogPosts) {
      lines.push(`- [${post.title}](${post.url})`);
    }
  }
  lines.push(`- [Blog index](${BASE_URL}/blog/)`);
  lines.push('');

  return lines.join('\n');
};

// ── Internal: generate llms.txt (called when run standalone) ─────────────────
const generateLlmsTxt = async () => {
  console.log(
    chalk.cyan('\n📄 Generating static/llms.txt from agents layer...')
  );

  const workflows = await loadWorkflows();

  const usingFallback = workflows === FALLBACK_WORKFLOWS;

  if (usingFallback) {
    console.log(
      chalk.yellow(
        '   ⚠ agents/workflows/index.json not found — using hardcoded fallback workflows'
      )
    );
    console.log(
      chalk.gray(
        '   Run node build.agents.mjs to generate the full /agents/ layer'
      )
    );
  } else {
    console.log(
      chalk.gray(
        `   Loaded ${workflows.length} workflows from agents/workflows/index.json`
      )
    );
  }

  const skills = await loadSkills();
  console.log(
    chalk.gray(
      `   Loaded ${skills.length} skills from agents/skills/index.json`
    )
  );

  const resources = await loadResources();
  console.log(
    chalk.gray(
      `   Loaded ${resources.length} resources from agents/resources/index.json`
    )
  );

  const routes = await loadRoutes();
  console.log(
    chalk.gray(
      `   Loaded ${routes.length} routes from agents/routes.json`
    )
  );

  const blogPosts = await gatherBlogPosts();
  console.log(chalk.gray(`   Found ${blogPosts.length} recent blog posts`));

  await fs.mkdir(STATIC_DIR, { recursive: true });

  const content = await buildLlmsTxt(workflows, skills, resources, routes, blogPosts);
  await fs.writeFile(OUTPUT_PATH, content, 'utf-8');

  console.log(chalk.green('✅ Generated static/llms.txt'));
};

// ── Exported: disk-only link checker (called during build) ───────────────────
export const buildAgentsLlms = async () => {
  const { checkAgentLinks } = await import('./scripts/check-agent-links.mjs');
  // http: false — disk-only during build; HTTP checks are for the standalone script
  const { broken } = await checkAgentLinks({ http: false });
  if (broken.length > 0) {
    console.warn(
      chalk.yellow(
        `⚠️  Agent links: ${broken.length} broken reference(s) found`
      )
    );
  }
};

// Run if executed directly → generate llms.txt
if (import.meta.url === `file://${process.argv[1]}`) {
  generateLlmsTxt().catch((err) => {
    console.error(chalk.red('❌ Failed to generate llms.txt:'), err);
    process.exit(1);
  });
}
