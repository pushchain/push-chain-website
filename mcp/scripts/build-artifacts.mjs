/**
 * Standalone artifact builder for local development. Runs the exact same
 * generation code as the Docusaurus plugin, but against an existing build
 * directory, so you can iterate on the MCP server without re-running the
 * full site build. Routes are discovered by walking build/docs for
 * index.html files (redirect stubs like foo.html/ are excluded).
 *
 * Usage:
 *   yarn build:mcp-plugin
 *   node mcp/scripts/build-artifacts.mjs [--out-dir build] [--site-url https://push.org]
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');

function argValue(flag, fallback) {
  const index = process.argv.indexOf(flag);
  return index !== -1 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

const outDir = path.resolve(repoRoot, argValue('--out-dir', 'build'));
const siteUrl = argValue('--site-url', 'https://push.org');

function discoverRoutes(dir, prefix) {
  const routes = [];
  if (!fs.existsSync(dir)) return routes;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (/\.html?$/i.test(entry.name)) continue;
    const routePath = `${prefix}${entry.name}/`;
    if (fs.existsSync(path.join(dir, entry.name, 'index.html'))) {
      routes.push(routePath);
    }
    routes.push(...discoverRoutes(path.join(dir, entry.name), routePath));
  }
  return routes;
}

const { buildMcpArtifacts } = require(path.join(repoRoot, 'mcp', 'dist', 'build', 'artifacts.js'));

const routes = discoverRoutes(path.join(outDir, 'docs'), '/docs/');
if (routes.length === 0) {
  console.error(`No docs routes found under ${path.join(outDir, 'docs')}. Run the site build first.`);
  process.exit(1);
}

const result = await buildMcpArtifacts({
  outDir,
  siteDir: repoRoot,
  siteUrl,
  baseUrl: '/',
  routes,
  docsRouteBasePath: '/docs',
  docsDir: path.join(repoRoot, 'docs'),
  agentsDir: path.join(repoRoot, 'static', 'agents'),
  locale: 'en',
  docsVersion: 'current',
});

console.log(`manifest: ${result.mcpDir}/manifest.json`);
if (result.skipped.length > 0) {
  console.log('skipped pages:');
  for (const page of result.skipped) {
    console.log(`  ${page.path} (${page.reason})${page.matches.length ? ': ' + page.matches.join(', ') : ''}`);
  }
}
