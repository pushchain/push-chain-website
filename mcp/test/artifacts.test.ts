import * as fs from 'node:fs';
import * as path from 'node:path';
import type { FixtureSite } from './helpers/fixtureSite';
import { buildFixtureSite, FIXTURE_NOW } from './helpers/fixtureSite';
import type { SkippedPage } from '../src/shared/types';

describe('buildMcpArtifacts', () => {
  let fixture: FixtureSite;

  beforeAll(async () => {
    fixture = await buildFixtureSite();
  });

  afterAll(() => {
    fixture.cleanup();
  });

  it('writes manifest, index, skipped log, and per-page markdown', () => {
    for (const file of ['manifest.json', 'index.json', 'skipped.json']) {
      expect(fs.existsSync(path.join(fixture.mcpDir, file))).toBe(true);
    }
    expect(fs.existsSync(path.join(fixture.mcpDir, 'docs', 'chain-build-constants.md'))).toBe(
      true
    );
  });

  it('indexes clean pages and skips pages with raw i18n placeholders', () => {
    const { manifest, skipped } = fixture.result;
    expect(manifest.docCount).toBe(6);
    expect(manifest.skippedCount).toBe(2);

    const reasons = new Map(skipped.map((page: SkippedPage) => [page.path, page]));
    const faq = reasons.get('/docs/chain/setup/faq/');
    expect(faq?.reason).toBe('i18n-placeholder');
    expect(faq?.matches).toContain('theme.docs.DocCard.categoryDescription');
    const wallets = reasons.get('/docs/chain/setup/wallets/');
    expect(wallets?.reason).toBe('i18n-placeholder');
    expect(wallets?.matches).toContain('{{pages.faq.title}}');

    // Mustache syntax inside a code fence must not cause a skip.
    expect(manifest.pages.some((page) => page.path === '/docs/chain/build/constants/')).toBe(
      true
    );
  });

  it('ignores redirect stubs and non-docs routes', () => {
    const paths = fixture.result.manifest.pages.map((page) => page.path);
    expect(paths).not.toContain('/docs/chain/intro.html/');
    expect(paths).not.toContain('/docs/chain/intro.htm/');
    expect(paths.every((p) => p.startsWith('/docs/'))).toBe(true);
  });

  it('assigns sections from the route structure', () => {
    const byPath = new Map(fixture.result.manifest.pages.map((page) => [page.path, page]));
    expect(byPath.get('/docs/chain/build/constants/')?.section).toBe('build');
    expect(byPath.get('/docs/chain/build/advanced/gas/')?.section).toBe('build');
    expect(byPath.get('/docs/chain/intro/')?.section).toBe('chain');
    expect(byPath.get('/docs/chain/setup/')?.section).toBe('setup');
    expect(fixture.result.manifest.sections).toEqual(['build', 'chain', 'setup']);
  });

  it('writes frontmatter with title, url, section, and lastUpdated', () => {
    const markdown = fs.readFileSync(
      path.join(fixture.mcpDir, 'docs', 'chain-build-constants.md'),
      'utf8'
    );
    expect(markdown).toMatch(/^---\n/);
    expect(markdown).toContain('title: "Constants Reference"');
    expect(markdown).toContain('url: "https://push.org/docs/chain/build/constants/"');
    expect(markdown).toContain('section: "build"');
    // No git history in the fixture, so lastUpdated falls back to the build clock.
    expect(markdown).toContain(`lastUpdated: ${JSON.stringify(FIXTURE_NOW.toISOString())}`);
    expect(markdown).toContain('```typescript');
  });

  it('bundles all six agent-layer resources and records them in the manifest', () => {
    const { agentResources } = fixture.result.manifest;
    expect(Object.keys(agentResources).sort()).toEqual([
      'capabilities',
      'changelog',
      'contract-addresses',
      'errors',
      'sdk-capabilities',
      'supported-chains',
    ]);
    for (const relative of Object.values(agentResources)) {
      expect(fs.existsSync(path.join(fixture.mcpDir, relative))).toBe(true);
    }
  });

  it('records build metadata in the manifest', () => {
    const { manifest } = fixture.result;
    expect(manifest.generated).toBe(FIXTURE_NOW.toISOString());
    expect(manifest.buildHash).toMatch(/^[0-9a-f]{64}$/);
    expect(manifest.indexBytes).toBeGreaterThan(0);
    expect(manifest.docsVersion).toBe('current');
    expect(manifest.locale).toBe('en');
  });
});
