import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { buildMcpArtifacts, type BuildArtifactsResult } from '../../src/build/artifacts';
import { agentResourceKeys, AGENT_RESOURCES } from '../../src/shared/schemas';
import { codeBlock, docPage } from './html';

export const FIXTURE_NOW = new Date('2026-07-15T00:00:00.000Z');
export const FIXTURE_SITE_URL = 'https://push.org';

export interface FixtureSite {
  rootDir: string;
  outDir: string;
  mcpDir: string;
  result: BuildArtifactsResult;
  cleanup(): void;
}

interface FixturePage {
  route: string;
  title: string;
  body: string;
}

export const FIXTURE_PAGES: FixturePage[] = [
  {
    route: '/docs/chain/',
    title: 'Push Chain Docs',
    body: '<p>Welcome to the Push Chain documentation. Deploy once, reach users on any chain.</p>',
  },
  {
    route: '/docs/chain/intro/',
    title: 'Intro to Push Chain',
    body: '<p>Push Chain is a universal shared-state blockchain for universal apps.</p><h2>Why universal</h2><p>Users transact from any chain.</p>',
  },
  {
    route: '/docs/chain/build/',
    title: 'Build',
    body: '<p>Guides for building on Push Chain.</p>',
  },
  {
    route: '/docs/chain/build/constants/',
    title: 'Constants Reference',
    body:
      '<p>All constants live under the <code>PushChain.CONSTANTS</code> namespace.</p>' +
      '<h2>Chain Constants</h2><p>Supported chain identifiers.</p>' +
      codeBlock(
        'typescript',
        "import { PushChain } from '@pushchain/core';\n\nconst chain = PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA;\nconst template = '{{value}}'; // mustache inside code is fine"
      ),
  },
  {
    route: '/docs/chain/build/advanced/gas/',
    title: 'Gas Deep Dive',
    body: '<h2>Fees</h2><p>How gas estimation works for universal transactions.</p>',
  },
  {
    route: '/docs/chain/setup/',
    title: 'Setup',
    body: '<p>Environment setup guides for wallets and networks.</p>',
  },
  {
    route: '/docs/chain/setup/faq/',
    title: 'FAQ',
    body: '<p>theme.docs.DocCard.categoryDescription</p><p>Real question here.</p>',
  },
  {
    route: '/docs/chain/setup/wallets/',
    title: 'Wallets',
    body: '<p>Connect with {{pages.faq.title}} to get started.</p>',
  },
];

export async function buildFixtureSite(): Promise<FixtureSite> {
  const rootDir = fs.mkdtempSync(path.join(os.tmpdir(), 'push-mcp-fixture-'));
  const outDir = path.join(rootDir, 'build');
  const agentsDir = path.join(rootDir, 'static', 'agents');
  const docsDir = path.join(rootDir, 'docs');
  fs.mkdirSync(agentsDir, { recursive: true });
  fs.mkdirSync(docsDir, { recursive: true });

  for (const page of FIXTURE_PAGES) {
    const dir = path.join(outDir, page.route);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      path.join(dir, 'index.html'),
      docPage({ title: page.title, body: page.body }),
      'utf8'
    );
  }

  for (const key of agentResourceKeys) {
    fs.writeFileSync(
      path.join(agentsDir, AGENT_RESOURCES[key]),
      JSON.stringify({ resource: key, version: '1.0.0', fixture: true }),
      'utf8'
    );
  }

  const result = await buildMcpArtifacts({
    outDir,
    siteDir: rootDir,
    siteUrl: FIXTURE_SITE_URL,
    baseUrl: '/',
    routes: [
      ...FIXTURE_PAGES.map((page) => page.route),
      // Redirect stubs from the client-redirects plugin must be ignored.
      '/docs/chain/intro.html/',
      '/docs/chain/intro.htm/',
      // Non-docs routes must be ignored.
      '/blog/some-post/',
      '/',
    ],
    docsRouteBasePath: '/docs',
    docsDir,
    agentsDir,
    locale: 'en',
    docsVersion: 'current',
    now: FIXTURE_NOW,
    log: () => undefined,
  });

  return {
    rootDir,
    outDir,
    mcpDir: result.mcpDir,
    result,
    cleanup: () => fs.rmSync(rootDir, { recursive: true, force: true }),
  };
}
