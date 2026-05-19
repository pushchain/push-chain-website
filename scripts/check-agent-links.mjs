#!/usr/bin/env node
/**
 * check-agent-links.mjs
 * Scrapes all URLs and relative agent paths from:
 *   - static/agents/** (all files)
 *   - static/llms.txt
 *   - static/llms-full.txt
 * Checks each target:
 *   - push.org/agents/* and relative agents/ paths → disk check
 *   - push.org/docs, push.org/blog, push.org/llms* → HTTP HEAD
 *   - external domains (npmjs, github, etc.) → skipped
 *
 * Run: node scripts/check-agent-links.mjs
 * Options:
 *   --no-http  Skip HTTP checks (disk only)
 *   --json     Output results as JSON to stdout
 */

import fs from 'fs/promises';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AGENTS_DIR = path.resolve(__dirname, '../static/agents');
const STATIC_DIR = path.resolve(__dirname, '../static');
const BASE_URL = 'https://push.org';

const CONCURRENCY = 12;

// ── Helpers ──────────────────────────────────────────────────────────────────

async function walkDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walkDir(full)));
    else files.push(full);
  }
  return files;
}

function extractUrls(content, filePath) {
  const found = new Set();

  const clean = (u) => u.trim().replace(/[.,;:!?)]+$/, '');

  // Markdown links: [text](url)
  for (const [, url] of content.matchAll(/\[(?:[^\]]*)\]\(([^)]+)\)/g)) {
    found.add({ url: clean(url), src: filePath });
  }

  // JSON string values that look like URLs or relative agent paths (no spaces = actual paths)
  for (const [, raw] of content.matchAll(
    /"((?:https?:\/\/|agents\/)[^"]+)"/g
  )) {
    const url = clean(raw);
    if (url.startsWith('http')) {
      found.add({ url, src: filePath });
    } else if (url.startsWith('agents/') && !url.includes(' ')) {
      found.add({ url, src: filePath });
    }
  }

  // Bare URLs in plain text / .txt / .md files
  for (const [url] of content.matchAll(/https?:\/\/[^\s"'\]>)]+/g)) {
    found.add({ url: clean(url), src: filePath });
  }

  return [...found];
}

function agentPathToFile(url) {
  // "agents/workflows/foo.md" → static/agents/workflows/foo.md
  return path.join(STATIC_DIR, url);
}

function pushOrgAgentsToFile(url) {
  // "https://push.org/agents/foo.json" → static/agents/foo.json
  const rel = url.replace(`${BASE_URL}/agents/`, '');
  return path.join(AGENTS_DIR, rel);
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function headRequest(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 6000 }, (res) => {
      resolve({ status: res.statusCode, ok: res.statusCode < 400 });
    });
    req.on('error', () => resolve({ status: 0, ok: false }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 0, ok: false, timedOut: true });
    });
    req.end();
  });
}

// ── Dedup helper ──────────────────────────────────────────────────────────────

function dedup(refs) {
  const seen = new Map();
  for (const r of refs) {
    if (!seen.has(r.url)) seen.set(r.url, r);
  }
  return [...seen.values()];
}

// ── Concurrency pool ─────────────────────────────────────────────────────────

async function pool(tasks, concurrency) {
  const results = [];
  let i = 0;
  async function run() {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await tasks[idx]();
    }
  }
  await Promise.all(Array.from({ length: concurrency }, run));
  return results;
}

// ── Main ──────────────────────────────────────────────────────────────────────

export async function checkAgentLinks({ http = true, json = false } = {}) {
  const CHECK_HTTP = http;
  const JSON_OUTPUT = json;

  // Scan agents/ tree + llms.txt + llms-full.txt
  const agentFiles = await walkDir(AGENTS_DIR);
  const targetFiles = [
    ...agentFiles.filter((f) => /\.(json|md|txt|ts|tsx|sol)$/.test(f)),
    path.join(STATIC_DIR, 'llms.txt'),
    path.join(STATIC_DIR, 'llms-full.txt'),
  ];

  const allRefs = [];
  for (const f of targetFiles) {
    let content;
    try {
      content = await fs.readFile(f, 'utf-8');
    } catch {
      continue;
    }
    allRefs.push(
      ...extractUrls(content, f).map((r) => ({
        ...r,
        src: path.relative(STATIC_DIR, f),
      }))
    );
  }

  const refs = dedup(allRefs);

  // Categorise each ref into a task
  const results = { ok: [], broken: [], skipped: [] };

  const tasks = refs.map((ref) => async () => {
    const { url } = ref;

    // Strip any `#anchor` fragment before disk-existence checks — fragments
    // are addressing intra-file sections and have no bearing on whether the
    // file exists on disk. `?query` strings get the same treatment in case
    // any agent doc starts emitting them.
    const filePart = url.split('#')[0].split('?')[0];

    // Relative agent path → disk
    if (filePart.startsWith('agents/')) {
      const target = agentPathToFile(filePart);
      const exists = await fileExists(target);
      (exists ? results.ok : results.broken).push({
        ...ref,
        check: 'disk',
        target: path.relative(STATIC_DIR, target),
      });
      return;
    }

    // push.org/agents/ → disk
    if (filePart.startsWith(`${BASE_URL}/agents/`)) {
      const target = pushOrgAgentsToFile(filePart);
      const exists = await fileExists(target);
      (exists ? results.ok : results.broken).push({
        ...ref,
        check: 'disk',
        target: path.relative(STATIC_DIR, target),
      });
      return;
    }

    // push.org/llms* → disk
    if (filePart.startsWith(`${BASE_URL}/llms`)) {
      const file = path.join(STATIC_DIR, filePart.replace(`${BASE_URL}/`, ''));
      const exists = await fileExists(file);
      (exists ? results.ok : results.broken).push({
        ...ref,
        check: 'disk',
        target: path.relative(STATIC_DIR, file),
      });
      return;
    }

    // push.org/docs or /blog → HTTP HEAD
    if (
      url.startsWith(`${BASE_URL}/docs`) ||
      url.startsWith(`${BASE_URL}/blog`)
    ) {
      if (CHECK_HTTP) {
        const res = await headRequest(url);
        (res.ok ? results.ok : results.broken).push({
          ...ref,
          check: 'http',
          status: res.status,
        });
      } else {
        results.skipped.push({
          ...ref,
          check: 'skipped',
          reason: 'docs/blog — run without --no-http to verify',
        });
      }
      return;
    }

    // External (npmjs, github, etc.) → skip
    results.skipped.push({
      ...ref,
      check: 'skipped',
      reason: 'external domain',
    });
  });

  if (CHECK_HTTP) process.stdout.write('Checking links');
  await pool(tasks, CONCURRENCY);
  if (CHECK_HTTP) process.stdout.write('\n');

  // ── Output ────────────────────────────────────────────────────────────────

  if (JSON_OUTPUT) {
    console.log(JSON.stringify(results, null, 2));
    return;
  }

  const c = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    gray: '\x1b[90m',
    reset: '\x1b[0m',
    bold: '\x1b[1m',
  };

  console.log(`\n${c.bold}Push Chain Agent Link Checker${c.reset}`);
  console.log(
    `Scanned ${targetFiles.length} files, found ${refs.length} unique URLs\n`
  );

  // Print full link list
  console.log(`${c.bold}All links:${c.reset}`);
  const allChecked = [...results.ok, ...results.broken];
  allChecked.sort((a, b) => a.url.localeCompare(b.url));
  for (const r of allChecked) {
    const icon =
      r.check === 'http'
        ? r.ok !== false
          ? `${c.green}HTTP${c.reset}`
          : `${c.red}HTTP${c.reset}`
        : `${c.gray}DISK${c.reset}`;
    const status = r.status ? ` [${r.status}]` : '';
    const flag = results.broken.includes(r)
      ? ` ${c.red}✗${c.reset}`
      : ` ${c.green}✓${c.reset}`;
    console.log(`  ${flag} ${icon}${status} ${r.url}`);
    console.log(`       ${c.gray}${r.src}${c.reset}`);
  }
  console.log();

  if (results.broken.length === 0) {
    console.log(`${c.green}✓ No broken links found${c.reset}`);
  } else {
    console.log(
      `${c.red}${c.bold}✗ ${results.broken.length} broken link(s):${c.reset}\n`
    );
    for (const b of results.broken) {
      console.log(`  ${c.red}✗${c.reset} ${b.url}`);
      console.log(`    ${c.gray}in: ${b.src}${c.reset}`);
      if (b.target)
        console.log(`    ${c.gray}expected file: ${b.target}${c.reset}`);
      if (b.status !== undefined)
        console.log(`    ${c.gray}HTTP status: ${b.status}${c.reset}`);
    }
  }

  console.log(
    `\n${c.green}✓ ${results.ok.length} ok${c.reset}  ${c.yellow}⊘ ${results.skipped.length} skipped${c.reset}`
  );
  if (!CHECK_HTTP) {
    console.log(
      `${c.gray}  (remove --no-http flag to also HEAD-check /docs and /blog links)${c.reset}`
    );
  }

  return results;
}

// Run standalone
if (import.meta.url === `file://${process.argv[1]}`) {
  checkAgentLinks({
    http: !process.argv.includes('--no-http'),
    json: process.argv.includes('--json'),
  })
    .then(({ broken }) => process.exit(broken.length > 0 ? 1 : 0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
