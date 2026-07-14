import { extractPage, markdownToPlain } from '../src/build/extract';
import { codeBlock, docPage } from './helpers/html';

describe('extractPage', () => {
  it('extracts title, description, and markdown from a docs page', () => {
    const html = docPage({
      title: 'Constants Reference',
      description: 'All SDK constants',
      body: '<p>Intro paragraph.</p><h2>Networks</h2><p>Testnet and mainnet.</p>',
    });
    const extracted = extractPage(html);
    expect(extracted).not.toBeNull();
    expect(extracted?.title).toBe('Constants Reference');
    expect(extracted?.description).toBe('All SDK constants');
    expect(extracted?.markdown).toContain('# Constants Reference');
    expect(extracted?.markdown).toContain('## Networks');
    expect(extracted?.headings).toEqual(['Networks']);
  });

  it('strips navigation, breadcrumbs, footers, buttons, and pagination chrome', () => {
    const html = docPage({ title: 'Clean Page', body: '<p>Only the content.</p>' });
    const extracted = extractPage(html);
    const markdown = extracted?.markdown ?? '';
    expect(markdown).not.toContain('Edit this page');
    expect(markdown).not.toContain('Next page');
    expect(markdown).not.toContain('Breadcrumbs');
    expect(markdown).not.toContain('On this page');
    expect(markdown).not.toContain('Sidebar link');
    expect(markdown).not.toContain('Copy');
    expect(markdown).not.toContain('Site footer');
  });

  it('rebuilds fenced code blocks from Prism token lines with the right language', () => {
    const code = "import { PushChain } from '@pushchain/core';\nconst a = 1 && 2;\n\nconst b = 3;";
    const html = docPage({ title: 'Code Page', body: codeBlock('typescript', code) });
    const extracted = extractPage(html);
    const markdown = extracted?.markdown ?? '';
    expect(markdown).toContain('```typescript');
    // Entities must be decoded and Prism markup must not leak.
    expect(markdown).toContain('const a = 1 && 2;');
    expect(markdown).not.toContain('token-line');
    expect(markdown).not.toContain('&amp;');
    // Adjacent source lines stay adjacent (no double-spacing from the
    // per-line Prism newlines) and intentional blank lines survive.
    expect(markdown).toContain("core';\nconst a = 1 && 2;");
    expect(markdown).toContain('&& 2;\n\nconst b = 3;');
  });

  it('returns null when no article content exists', () => {
    expect(extractPage('<html><body><div>redirect stub</div></body></html>')).toBeNull();
  });
});

describe('markdownToPlain', () => {
  it('flattens markdown syntax to searchable text', () => {
    const plain = markdownToPlain('# Title\n\nSome **bold** and [a link](https://x.dev).\n\n```ts\nconst x = 1;\n```');
    expect(plain).toContain('Title');
    expect(plain).toContain('bold');
    expect(plain).toContain('a link');
    expect(plain).toContain('const x = 1;');
    expect(plain).not.toContain('```');
    expect(plain).not.toContain('**');
  });
});
