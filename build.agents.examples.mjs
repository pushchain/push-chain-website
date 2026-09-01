#!/usr/bin/env node
/**
 * build.agents.examples.mjs
 *
 * Auto-extracts code examples from MDX documentation pages into structured
 * static/agents/examples/ files. No Claude API needed — deterministic and
 * scales automatically as new doc pages are added.
 *
 * SDK pages: one file per {`...`} template literal that carries a
 *            // customPropGTagEvent=<slug> comment (the live playground marker).
 * Tutorials: all fenced code blocks combined into one comprehensive example file.
 *
 * Run:  node build.agents.examples.mjs
 * NPM:  yarn generate:agents:examples
 */

import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.join(__dirname, 'docs/chain');
const AGENTS_EXAMPLES_DIR = path.join(__dirname, 'static/agents/examples');
const INDEX_PATH = path.join(AGENTS_EXAMPLES_DIR, 'index.json');

// ─── SDK method surface for auto-detection ────────────────────────────────────

const SDK_METHODS = [
  'PushChain.utils.signer.toUniversal',
  'PushChain.utils.signer.toUniversalFromKeypair',
  'PushChain.utils.signer.construct',
  'PushChain.initialize',
  'pushChainClient.universal.sendTransaction',
  'pushChainClient.universal.trackTransaction',
  'pushChainClient.universal.signMessage',
  'pushChainClient.universal.signTypedData',
  'pushChainClient.getAccountStatus',
  'pushChainClient.upgradeAccount',
  'pushChainClient.reinitialize',
  'pushChainClient.explorer.getTransactionUrl',
  'pushChainClient.explorer.listUrls',
  'PushChain.utils.helpers.parseUnits',
  'PushChain.utils.helpers.formatUnits',
  'PushChain.utils.account.toUniversal',
  'PushChain.utils.account.toChainAgnostic',
  'PushChain.utils.account.fromChainAgnostic',
  'PushChain.utils.account.deriveExecutorAccount',
  'PushChain.utils.account.resolveControllerAccount',
  'PushChain.utils.chains.getChainNamespace',
  'PushChain.utils.chains.getChainName',
  'PushChain.utils.chains.getSupportedChains',
  'PushChain.utils.chains.getSupportedChainsByName',
  'PushChain.utils.helpers.encodeTxData',
  'PushChain.utils.tokens.getMoveableTokens',
  'PushChain.utils.tokens.getPayableTokens',
  'PushChain.utils.tokens.getPRC20Address',
  'PushChain.utils.tokens.getPC20Address',
  'PushChain.utils.account.convertOriginToExecutor',
  'PushChain.utils.account.convertExecutorToOriginAccount',
  'PushChain.utils.conversion.slippageToMinAmount',
];

// Match a method name only when it is followed by a non-identifier character,
// so a prefix never matches its longer sibling: `getChainName` must not fire
// on `getChainNamespace(`, `toUniversal` not on `toUniversalFromKeypair(`.
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const SDK_METHOD_PATTERNS = SDK_METHODS.map((m) => ({
  method: m,
  pattern: new RegExp(`${escapeRegExp(m)}(?![A-Za-z0-9_$])`),
}));

function detectSdkMethods(code) {
  return SDK_METHOD_PATTERNS.filter(({ pattern }) => pattern.test(code)).map(
    ({ method }) => method
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Convert underscore_slug to hyphen-slug. */
function slugify(str) {
  return str.replace(/_/g, '-').toLowerCase();
}

/**
 * Walk backwards from `index` in `content` and return the text of the
 * nearest Markdown heading (# / ## / ### / ####).
 */
function nearestHeading(content, index) {
  const before = content.substring(0, index);
  const lines = before.split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    const m = lines[i].match(/^#{1,4}\s+(.+)$/);
    if (m) {
      // Strip inline JSX expressions  e.g. {children}
      return m[1].replace(/\{[^}]*\}/g, '').trim();
    }
  }
  return 'Code Example';
}

/**
 * Remove `// customProp*` directive lines and dedent by the minimum
 * indentation found across all non-empty lines.
 */
function cleanCode(raw) {
  const lines = raw.split('\n');
  const filtered = lines.filter((l) => !l.trim().startsWith('// customProp'));

  while (filtered.length && !filtered[0].trim()) filtered.shift();
  while (filtered.length && !filtered[filtered.length - 1].trim())
    filtered.pop();

  if (!filtered.length) return '';

  const minIndent = filtered
    .filter((l) => l.trim())
    .reduce((min, l) => Math.min(min, l.match(/^(\s*)/)[1].length), Infinity);

  const dedented =
    minIndent > 0 && minIndent !== Infinity
      ? filtered.map((l) => l.slice(minIndent)).join('\n')
      : filtered.join('\n');

  // Unescape MDX escape sequences present in template literal source
  // e.g. \* → * (namespace imports), \{ → {, \_ → _, \` → `
  return dedented
    .replace(/\\\*/g, '*')
    .replace(/\\_/g, '_')
    .replace(/\\\{/g, '{')
    .replace(/\\\}/g, '}')
    .replace(/\\`/g, '`');
}

/**
 * Fenced code blocks of an example markdown file, joined. Detection must run
 * on code only: every example ends with an auto-generated "## SDK Methods Used"
 * footer that lists method names in backticks, so scanning the whole file would
 * re-detect whatever the footer already says — including past false positives.
 */
function codeBlocksOf(markdown) {
  const blocks = [];
  const re = /```[^\n]*\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(markdown)) !== null) blocks.push(m[1]);
  return blocks.join('\n');
}

function sdkMethodsFooter(methods) {
  const list = methods.length
    ? methods.map((m) => `- \`${m}\``).join('\n')
    : '- See code above';
  return `## SDK Methods Used\n\n${list}\n`;
}

/** Rewrite the trailing "## SDK Methods Used" section to match `methods`. */
function syncSdkMethodsFooter(markdown, methods) {
  const idx = markdown.lastIndexOf('## SDK Methods Used');
  if (idx === -1) return markdown;
  return markdown.slice(0, idx) + sdkMethodsFooter(methods);
}

// ─── Extraction: SDK pages ────────────────────────────────────────────────────

/**
 * Extract every {`...`} template literal block that carries a
 * `// customPropGTagEvent=<slug>` comment.  These are the live playground
 * examples — one per distinct code variant.
 */
function extractTemplateLiterals(content, pageUrl) {
  const examples = [];
  const re = /\{`([\s\S]*?)`\}/g;
  let m;

  while ((m = re.exec(content)) !== null) {
    const raw = m[1];
    if (!raw.trim()) continue;

    const gtagMatch = raw.match(/\/\/\s*customPropGTagEvent=(\S+)/);
    if (!gtagMatch) continue;

    const id = slugify(gtagMatch[1]);
    const code = cleanCode(raw);
    if (!code) continue;

    examples.push({
      id,
      title: nearestHeading(content, m.index),
      code,
      lang: 'typescript',
      sourceUrl: pageUrl,
      sdkMethods: detectSdkMethods(code),
    });
  }

  return examples;
}

// ─── Extraction: tutorials ────────────────────────────────────────────────────

/**
 * Extract all meaningful fenced code blocks from a tutorial MDX file and
 * combine them into a single tutorial example object.
 */
function extractTutorialBlocks(content, page) {
  const blocks = [];
  const re = /```(typescript|javascript|solidity|jsx|ts|js)\n([\s\S]*?)```/g;
  let m;

  while ((m = re.exec(content)) !== null) {
    const rawLang = m[1];
    const code = m[2].trim();

    if (!code || code.split('\n').length < 3) continue;

    // Skip address-mapping diagrams and mermaid-style notation blocks
    if (
      /^\s*[A-Za-z0-9]+\s*(→|->)\s*[A-Za-z0-9]/.test(code) &&
      !code.includes('import')
    )
      continue;

    // Skip JSX fragments that are just display components without logic
    if (
      rawLang === 'jsx' &&
      !code.includes('import') &&
      !code.includes('function')
    )
      continue;

    const lang =
      rawLang === 'ts'
        ? 'typescript'
        : rawLang === 'js'
          ? 'javascript'
          : rawLang;
    const heading = nearestHeading(content, m.index);
    blocks.push({ heading, code, lang });
  }

  if (blocks.length === 0) return null;

  return {
    id: page.slug,
    title: page.title,
    description: page.description,
    sourceUrl: page.url,
    sdkMethods: [...new Set(blocks.flatMap((b) => detectSdkMethods(b.code)))],
    blocks,
  };
}

// ─── Markdown builders ────────────────────────────────────────────────────────

function buildSdkExampleMarkdown(example) {
  const methods = example.sdkMethods.length
    ? example.sdkMethods.map((m) => `- \`${m}\``).join('\n')
    : '- See code above';

  return `## ${example.title}

Source: ${example.sourceUrl}

## When to Use

See the [source documentation](${example.sourceUrl}) for full context on when to apply this pattern.

## Code

\`\`\`${example.lang}
${example.code}
\`\`\`

## SDK Methods Used

${methods}
`;
}

function buildTutorialMarkdown(tutorial) {
  const parts = [
    `# ${tutorial.title}`,
    ``,
    `Source: ${tutorial.sourceUrl}`,
    ``,
    `## Overview`,
    ``,
    tutorial.description,
    ``,
  ];

  for (const block of tutorial.blocks) {
    parts.push(
      `## ${block.heading}`,
      ``,
      `\`\`\`${block.lang}`,
      block.code,
      `\`\`\``,
      ``
    );
  }

  if (tutorial.sdkMethods.length) {
    parts.push(`## SDK Methods Used`, ``);
    for (const m of tutorial.sdkMethods) parts.push(`- \`${m}\``);
    parts.push(``);
  }

  return parts.join('\n');
}

// ─── Target pages ─────────────────────────────────────────────────────────────

const TARGET_PAGES = [
  // ── Tutorials ──────────────────────────────────────────────────────────────
  {
    file: '01-tutorials/01-basics/01-Tutorial-Simple-Counter.mdx',
    type: 'tutorial',
    slug: 'tutorial-simple-counter',
    title: 'Tutorial: Simple Counter',
    url: 'https://push.org/docs/chain/tutorials/basics/tutorial-simple-counter/',
    description:
      'Deploy and interact with a simple counter contract on Push Chain from any wallet.',
  },
  {
    file: '01-tutorials/01-basics/02-Tutorial-Universal-Counter.mdx',
    type: 'tutorial',
    slug: 'tutorial-universal-counter',
    title: 'Tutorial: Universal Counter — Per-Chain Tracking',
    url: 'https://push.org/docs/chain/tutorials/basics/tutorial-universal-counter/',
    description:
      'Build a counter that tracks per-chain increments using UEAFactory and UniversalAccountId.',
  },
  {
    file: '01-tutorials/01-basics/03-Tutorial-Mint-ERC-20-Tokens.mdx',
    type: 'tutorial',
    slug: 'tutorial-mint-erc20',
    title: 'Tutorial: Mint ERC-20 Tokens from Any Chain',
    url: 'https://push.org/docs/chain/tutorials/basics/tutorial-mint-erc20/',
    description:
      'Deploy an ERC-20 on Push Chain and mint tokens from Ethereum, Solana, or any supported chain.',
  },
  {
    file: '01-tutorials/02-power-features/01-Tutorial-Batch-Transactions.mdx',
    type: 'tutorial',
    slug: 'tutorial-batch-transactions',
    title: 'Tutorial: Batch Transactions',
    url: 'https://push.org/docs/chain/tutorials/power-features/tutorial-batch-transactions/',
    description:
      'Execute multiple contract calls atomically in a single universal transaction.',
  },
  {
    file: '01-tutorials/02-power-features/02-Tutorial-Derive-Universal-Executor-Account.mdx',
    type: 'tutorial',
    slug: 'tutorial-derive-uea',
    title: 'Tutorial: Derive Universal Executor Account (UEA)',
    url: 'https://push.org/docs/chain/tutorials/power-features/tutorial-derive-uea/',
    description:
      'Programmatically derive the UEA address for any wallet without deploying it first.',
  },
  {
    file: '01-tutorials/03-token-systems/01-Tutorial-Universal-Airdrop.mdx',
    type: 'tutorial',
    slug: 'tutorial-universal-airdrop',
    title: 'Tutorial: Universal Airdrop',
    url: 'https://push.org/docs/chain/tutorials/token-systems/tutorial-universal-airdrop/',
    description:
      'Airdrop tokens to users across multiple chains in a single transaction using Push Chain.',
  },

  // ── SDK pages — one file per customPropGTagEvent variant ───────────────────
  {
    file: '03-build/02-Create-Universal-Signer.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/create-universal-signer/',
  },
  {
    file: '03-build/03-Initialize-Push-Chain-Client.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/initialize-push-chain-client/',
  },
  {
    file: '03-build/04-Initialize-EVM-Client.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/initialize-evm-client/',
  },
  {
    file: '03-build/06-Send-Universal-Transaction.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/send-universal-transaction/',
  },
  {
    file: '03-build/08-Send-Multichain-Transactions.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/send-multichain-transactions/',
  },
  {
    file: '03-build/10-Track-Universal-Transaction.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/track-universal-transaction/',
  },
  {
    file: '03-build/11-Sign-Universal-Message.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/sign-universal-message/',
  },
  {
    file: '03-build/12-Utility-Functions.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/utility-functions/',
  },
  {
    file: '03-build/01-advanced/01-Custom-Universal-Signer.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/advanced/custom-universal-signer/',
  },
  {
    file: '03-build/01-advanced/02-Upgrade-Universal-Account.mdx',
    type: 'sdk',
    url: 'https://push.org/docs/chain/build/advanced/upgrade-account/',
  },
];

// ─── Main ─────────────────────────────────────────────────────────────────────

export const buildAgentsExamples = async () => {
  console.log(
    chalk.cyan('\n📚 Extracting examples from MDX docs → agents/examples/...')
  );

  await fs.mkdir(AGENTS_EXAMPLES_DIR, { recursive: true });

  // Load existing index so we can skip already-registered IDs.
  //
  // The index was migrated from a bare array to an object wrapper
  // (`{ schema_version, …, examples: [] }`) — see its own `migration_note`.
  // Both shapes are accepted, and whichever one was read is the one written
  // back, so the wrapper's metadata survives a regeneration.
  let existingIndex = [];
  let indexWrapper = null;
  try {
    const raw = await fs.readFile(INDEX_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existingIndex = parsed;
    } else if (parsed && Array.isArray(parsed.examples)) {
      existingIndex = parsed.examples;
      indexWrapper = parsed;
    }
  } catch {
    // No existing index — start fresh
  }
  const existingIds = new Set(existingIndex.map((e) => e.id));

  const newEntries = [];
  let written = 0;
  let skipped = 0;

  for (const page of TARGET_PAGES) {
    const filePath = path.join(DOCS_DIR, page.file);
    let content;
    try {
      content = await fs.readFile(filePath, 'utf-8');
    } catch {
      console.warn(chalk.yellow(`  ⚠  Not found: ${page.file}`));
      continue;
    }

    // ── Tutorial: combine all code blocks into one file ──────────────────────
    if (page.type === 'tutorial') {
      if (existingIds.has(page.slug)) {
        console.log(chalk.gray(`  ↷  ${page.slug} (already in index)`));
        skipped++;
        continue;
      }

      const tutorial = extractTutorialBlocks(content, page);
      if (!tutorial) {
        console.warn(
          chalk.yellow(`  ⚠  No code blocks found in: ${page.file}`)
        );
        continue;
      }

      const md = buildTutorialMarkdown(tutorial);
      await fs.writeFile(
        path.join(AGENTS_EXAMPLES_DIR, `${page.slug}.md`),
        md,
        'utf-8'
      );

      newEntries.push({
        id: page.slug,
        name: page.title,
        file: `${page.slug}.md`,
        description: page.description,
        sdk_methods_used: tutorial.sdkMethods,
        chains_involved: [],
        prerequisite_examples: [],
        type: 'tutorial',
        source_url: page.url,
      });

      existingIds.add(page.slug);
      written++;
      console.log(
        chalk.green(`  ✓  ${page.slug}.md`) +
          chalk.gray(` (${tutorial.blocks.length} blocks)`)
      );

      continue;
    }

    // ── SDK page: one file per customPropGTagEvent variant ───────────────────
    const examples = extractTemplateLiterals(content, page.url);

    if (examples.length === 0) {
      console.warn(chalk.yellow(`  ⚠  No labeled examples in: ${page.file}`));
      continue;
    }

    for (const example of examples) {
      if (existingIds.has(example.id)) {
        console.log(chalk.gray(`  ↷  ${example.id} (already in index)`));
        skipped++;
        continue;
      }

      const md = buildSdkExampleMarkdown(example);
      await fs.writeFile(
        path.join(AGENTS_EXAMPLES_DIR, `${example.id}.md`),
        md,
        'utf-8'
      );

      newEntries.push({
        id: example.id,
        name: example.title,
        file: `${example.id}.md`,
        description: `Code example: ${example.title} — ${page.url}`,
        sdk_methods_used: example.sdkMethods,
        chains_involved: [],
        prerequisite_examples: [],
        source_url: page.url,
      });

      existingIds.add(example.id);
      written++;
      console.log(chalk.green(`  ✓  ${example.id}.md`));
    }
  }

  // ── Backfill: re-detect sdk_methods_used for already-registered entries ──
  // The extraction loop skips registered IDs, so an empty sdk_methods_used
  // (the retrieval key) would otherwise stay empty forever. Entries with no
  // detectable SDK method (e.g. pure ethers/viem read examples) stay empty.
  let backfilled = 0;
  let pruned = 0;
  for (const entry of existingIndex) {
    // Tombstones (status: 'removed') document a deleted API; advertising that
    // API under sdk_methods_used would surface a removed method as usable.
    if (entry.status === 'removed') continue;

    if (
      Array.isArray(entry.sdk_methods_used) &&
      entry.sdk_methods_used.length > 0
    ) {
      // Prune substring false positives left by the old `includes()` matcher:
      // a method is dropped only when it is a strict prefix of another method
      // in the same list AND the boundary-aware detector cannot find it.
      const listed = entry.sdk_methods_used;
      const suspects = listed.filter((m) =>
        listed.some((other) => other !== m && other.startsWith(m))
      );
      if (suspects.length === 0) continue;
      try {
        const md = await fs.readFile(
          path.join(AGENTS_EXAMPLES_DIR, entry.file),
          'utf-8'
        );
        const detected = new Set(detectSdkMethods(codeBlocksOf(md)));
        const kept = listed.filter(
          (m) => !suspects.includes(m) || detected.has(m)
        );
        if (kept.length !== listed.length) {
          entry.sdk_methods_used = kept;
          await fs.writeFile(
            path.join(AGENTS_EXAMPLES_DIR, entry.file),
            syncSdkMethodsFooter(md, kept),
            'utf-8'
          );
          pruned++;
          console.log(
            chalk.yellow(`  ✂  ${entry.id}`) +
              chalk.gray(
                ` dropped [${listed.filter((m) => !kept.includes(m)).join(', ')}]`
              )
          );
        }
      } catch {
        // example file missing on disk — leave the entry untouched
      }
      continue;
    }
    try {
      const md = await fs.readFile(
        path.join(AGENTS_EXAMPLES_DIR, entry.file),
        'utf-8'
      );
      const detected = detectSdkMethods(codeBlocksOf(md));
      if (detected.length > 0) {
        entry.sdk_methods_used = detected;
        await fs.writeFile(
          path.join(AGENTS_EXAMPLES_DIR, entry.file),
          syncSdkMethodsFooter(md, detected),
          'utf-8'
        );
        backfilled++;
        console.log(
          chalk.green(`  ✚  ${entry.id}`) +
            chalk.gray(` sdk_methods_used ← [${detected.join(', ')}]`)
        );
      }
    } catch {
      // example file missing on disk — leave the entry untouched
    }
  }
  // ── Footer drift check: every example's "## SDK Methods Used" section must
  // mirror its index entry, regardless of whether this run changed the entry
  // (entries backfilled by an earlier run predate the footer sync).
  let footersSynced = 0;
  for (const entry of existingIndex) {
    if (entry.status === 'removed') continue; // hand-written migration stubs
    if (!Array.isArray(entry.sdk_methods_used)) continue;
    try {
      const filePath = path.join(AGENTS_EXAMPLES_DIR, entry.file);
      const md = await fs.readFile(filePath, 'utf-8');
      const synced = syncSdkMethodsFooter(md, entry.sdk_methods_used);
      if (synced !== md) {
        await fs.writeFile(filePath, synced, 'utf-8');
        footersSynced++;
        console.log(chalk.green(`  ≡  ${entry.id}`) + chalk.gray(' footer synced'));
      }
    } catch {
      // example file missing on disk — nothing to sync
    }
  }
  if (footersSynced > 0) {
    console.log(
      chalk.cyan(`\n≡ Synced "SDK Methods Used" footers on ${footersSynced} files`)
    );
  }

  if (backfilled > 0 || pruned > 0) {
    console.log(
      chalk.cyan(
        `\n🔁 sdk_methods_used: backfilled ${backfilled}, pruned ${pruned}`
      )
    );
  }

  // ── Refresh wrapper metadata from the installed SDK ──────────────────────
  // The wrapper used to be carried over verbatim ({...indexWrapper}), which
  // froze current_sdk_version/generated at their 2026-07-03 values forever.
  if (indexWrapper) {
    try {
      const corePkg = JSON.parse(
        await fs.readFile(
          path.join(__dirname, 'node_modules/@pushchain/core/package.json'),
          'utf-8'
        )
      );
      if (
        corePkg.version &&
        indexWrapper.current_sdk_version !== corePkg.version
      ) {
        indexWrapper.current_sdk_version = corePkg.version;
      }
    } catch {
      // SDK not installed — keep the recorded version
    }
  }

  // Persist updated index (only when content actually changed, so repeated
  // runs stay byte-identical and don't churn git or prettier).
  const merged = [...existingIndex, ...newEntries];
  const payload = indexWrapper ? { ...indexWrapper, examples: merged } : merged;
  const serialized = JSON.stringify(payload, null, 2) + '\n';
  let onDisk = null;
  try {
    onDisk = await fs.readFile(INDEX_PATH, 'utf-8');
  } catch {
    // no index yet
  }
  if (serialized !== onDisk) {
    if (indexWrapper) {
      payload.generated = new Date().toISOString();
    }
    await fs.writeFile(
      INDEX_PATH,
      JSON.stringify(payload, null, 2) + '\n',
      'utf-8'
    );
    console.log(
      chalk.cyan(
        `\n📖 Updated examples/index.json → ${merged.length} total entries`
      )
    );
  }

  console.log(
    chalk.green(
      `\n✅ Done: ${written} new example${written !== 1 ? 's' : ''} written`
    ) + (skipped ? chalk.gray(`, ${skipped} skipped`) : '')
  );
};

if (import.meta.url === `file://${process.argv[1]}`) {
  buildAgentsExamples().catch((err) => {
    console.error(chalk.red('❌ Failed to extract examples:'), err);
    process.exit(1);
  });
}
