import type { FixtureSite } from './helpers/fixtureSite';
import { buildFixtureSite } from './helpers/fixtureSite';
import { resetStoreForTests } from '../src/runtime/store';
import { makeSnippet } from '../src/runtime/tools/searchDocs';
import { callTool, rpcErrorOf, rpcResultOf } from './helpers/rpc';

interface ToolCallResult {
  content: Array<{ type: string; text: string }>;
  structuredContent?: Record<string, unknown>;
  isError?: boolean;
}

function toolResult(result: Record<string, unknown>): ToolCallResult {
  return result as unknown as ToolCallResult;
}

describe('tools', () => {
  let fixture: FixtureSite;

  beforeAll(async () => {
    fixture = await buildFixtureSite();
    process.env.MCP_ARTIFACTS_DIR = fixture.mcpDir;
    process.env.MCP_DISABLE_RATE_LIMIT = '1';
    resetStoreForTests();
  });

  afterAll(() => {
    fixture.cleanup();
    delete process.env.MCP_ARTIFACTS_DIR;
    delete process.env.MCP_DISABLE_RATE_LIMIT;
    resetStoreForTests();
  });

  describe('search_docs', () => {
    it('returns ranked results with title, url, section, snippet, and score', async () => {
      const result = toolResult(rpcResultOf(await callTool('search_docs', { query: 'constants' })));
      expect(result.isError).toBeUndefined();
      const structured = result.structuredContent as {
        results: Array<{ title: string; url: string; section: string; snippet: string; score: number }>;
      };
      expect(structured.results.length).toBeGreaterThan(0);
      const top = structured.results[0];
      expect(top?.title).toBe('Constants Reference');
      expect(top?.url).toBe('https://push.org/docs/chain/build/constants/');
      expect(top?.section).toBe('build');
      expect(top?.snippet.length).toBeGreaterThan(0);
      expect(top?.snippet.length).toBeLessThanOrEqual(310);
      expect(top?.score).toBeGreaterThan(0);
    });

    it('filters by section', async () => {
      const result = toolResult(
        rpcResultOf(await callTool('search_docs', { query: 'push chain', section: 'build' }))
      );
      const structured = result.structuredContent as { results: Array<{ section: string }> };
      expect(structured.results.length).toBeGreaterThan(0);
      expect(structured.results.every((r) => r.section === 'build')).toBe(true);
    });

    it('reports an unknown section as a tool execution error', async () => {
      const result = toolResult(
        rpcResultOf(await callTool('search_docs', { query: 'x', section: 'nope' }))
      );
      expect(result.isError).toBe(true);
      expect(result.content[0]?.text).toContain('Unknown section');
    });

    it('rejects an out-of-range limit with JSON-RPC -32602', async () => {
      const error = rpcErrorOf(await callTool('search_docs', { query: 'x', limit: 25 }));
      expect(error.code).toBe(-32602);
    });

    it('never returns skipped pages', async () => {
      const result = toolResult(rpcResultOf(await callTool('search_docs', { query: 'wallets' })));
      const structured = result.structuredContent as { results: Array<{ url: string }> };
      expect(structured.results.every((r) => !r.url.includes('/setup/wallets/'))).toBe(true);
    });
  });

  describe('get_page', () => {
    it('returns full markdown with metadata for a url input', async () => {
      const result = toolResult(
        rpcResultOf(
          await callTool('get_page', { url: 'https://push.org/docs/chain/build/constants/' })
        )
      );
      const structured = result.structuredContent as Record<string, string>;
      expect(structured.title).toBe('Constants Reference');
      expect(structured.section).toBe('build');
      expect(structured.markdown).toContain('```typescript');
      // The text block is the markdown itself for direct consumption.
      expect(result.content[0]?.text).toBe(structured.markdown);
    });

    it('accepts a path input', async () => {
      const result = toolResult(
        rpcResultOf(await callTool('get_page', { path: '/docs/chain/intro/' }))
      );
      expect((result.structuredContent as Record<string, string>).title).toBe(
        'Intro to Push Chain'
      );
    });

    it('rejects pages outside the indexed set', async () => {
      const result = toolResult(
        rpcResultOf(await callTool('get_page', { path: '/docs/chain/setup/faq/' }))
      );
      expect(result.isError).toBe(true);
      expect(result.content[0]?.text).toContain('not found');
    });

    it('rejects path traversal attempts', async () => {
      const result = toolResult(
        rpcResultOf(await callTool('get_page', { path: '/docs/../../../etc/passwd' }))
      );
      expect(result.isError).toBe(true);
    });

    it('requires exactly one of url or path via -32602', async () => {
      expect(rpcErrorOf(await callTool('get_page', {})).code).toBe(-32602);
      expect(
        rpcErrorOf(
          await callTool('get_page', { url: 'https://push.org/docs/chain/', path: '/docs/chain/' })
        ).code
      ).toBe(-32602);
    });
  });

  describe('list_sections', () => {
    it('returns the hierarchical docs tree', async () => {
      const result = toolResult(rpcResultOf(await callTool('list_sections', {})));
      const structured = result.structuredContent as {
        docCount: number;
        sections: Array<{
          name: string;
          title: string;
          children: Array<{ name: string; pages: Array<{ title: string; url: string }> }>;
        }>;
      };
      expect(structured.docCount).toBe(6);
      const chain = structured.sections.find((s) => s.name === 'chain');
      expect(chain?.title).toBe('Push Chain Docs');
      const build = chain?.children.find((c) => c.name === 'build');
      expect(build?.pages.some((p) => p.title === 'Constants Reference')).toBe(true);
    });

    it('returns a single subtree when a section is given', async () => {
      const result = toolResult(rpcResultOf(await callTool('list_sections', { section: 'build' })));
      const structured = result.structuredContent as { sections: Array<{ name: string }> };
      expect(structured.sections).toHaveLength(1);
      expect(structured.sections[0]?.name).toBe('build');
    });

    it('reports unknown sections as a tool execution error', async () => {
      const result = toolResult(rpcResultOf(await callTool('list_sections', { section: 'zzz' })));
      expect(result.isError).toBe(true);
    });
  });

  describe('get_agent_resource', () => {
    it('returns the raw JSON of a bundled agent file', async () => {
      const result = toolResult(
        rpcResultOf(await callTool('get_agent_resource', { resource: 'capabilities' }))
      );
      expect(result.structuredContent).toEqual({
        resource: 'capabilities',
        version: '1.0.0',
        fixture: true,
      });
      expect(JSON.parse(result.content[0]?.text ?? '')).toEqual(result.structuredContent);
    });

    it('rejects unknown resource enums with -32602', async () => {
      const error = rpcErrorOf(await callTool('get_agent_resource', { resource: 'secrets' }));
      expect(error.code).toBe(-32602);
    });
  });
});

describe('makeSnippet', () => {
  it('centers the snippet on the first matched term and caps length', () => {
    const plain = `${'start '.repeat(50)}the universal transaction lives here ${'end '.repeat(80)}`;
    const snippet = makeSnippet(plain, ['universal']);
    expect(snippet).toContain('universal transaction');
    expect(snippet.length).toBeLessThanOrEqual(310);
    expect(snippet.startsWith('...')).toBe(true);
    expect(snippet.endsWith('...')).toBe(true);
  });

  it('falls back to the head of the text when no term matches', () => {
    expect(makeSnippet('short document text', ['missing'])).toBe('short document text');
  });
});
