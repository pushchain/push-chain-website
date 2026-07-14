import type { FixtureSite } from './helpers/fixtureSite';
import { buildFixtureSite } from './helpers/fixtureSite';
import { resetStoreForTests } from '../src/runtime/store';
import { resetRateLimitForTests } from '../src/runtime/rateLimit';
import { handleMcp } from '../src/runtime/handler';
import { postMcp, rpcErrorOf, rpcResultOf } from './helpers/rpc';

describe('handleMcp protocol behavior', () => {
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

  describe('initialize', () => {
    it('echoes a supported protocol version and declares capabilities', async () => {
      const http = await postMcp({
        jsonrpc: '2.0',
        id: 1,
        method: 'initialize',
        params: {
          protocolVersion: '2025-06-18',
          capabilities: {},
          clientInfo: { name: 'test', version: '1.0.0' },
        },
      });
      expect(http.status).toBe(200);
      const result = rpcResultOf(http) as {
        protocolVersion: string;
        capabilities: Record<string, unknown>;
        serverInfo: { name: string; version: string };
        instructions: string;
      };
      expect(result.protocolVersion).toBe('2025-06-18');
      expect(result.capabilities).toHaveProperty('tools');
      expect(result.capabilities).toHaveProperty('resources');
      expect(result.serverInfo.name).toBe('push-docs');
      expect(result.instructions.length).toBeGreaterThan(0);
    });

    it('answers an unsupported requested version with the latest supported one', async () => {
      const http = await postMcp({
        jsonrpc: '2.0',
        id: 2,
        method: 'initialize',
        params: { protocolVersion: '1999-01-01', capabilities: {}, clientInfo: { name: 't', version: '0' } },
      });
      const result = rpcResultOf(http) as { protocolVersion: string };
      expect(result.protocolVersion).toBe('2025-11-25');
    });
  });

  it('answers ping with an empty result', async () => {
    const http = await postMcp({ jsonrpc: '2.0', id: 3, method: 'ping' });
    expect(rpcResultOf(http)).toEqual({});
  });

  it('lists all four read-only tools with input schemas', async () => {
    const http = await postMcp({ jsonrpc: '2.0', id: 4, method: 'tools/list' });
    const result = rpcResultOf(http) as {
      tools: Array<{ name: string; inputSchema: Record<string, unknown> }>;
    };
    expect(result.tools.map((tool) => tool.name)).toEqual([
      'search_docs',
      'get_page',
      'list_sections',
      'get_agent_resource',
    ]);
    for (const tool of result.tools) {
      expect(tool.inputSchema).toHaveProperty('type', 'object');
    }
  });

  it('lists and reads resources, including agent-layer files', async () => {
    const list = rpcResultOf(await postMcp({ jsonrpc: '2.0', id: 5, method: 'resources/list' })) as {
      resources: Array<{ uri: string; mimeType: string }>;
    };
    // 6 indexed pages plus 6 agent resources.
    expect(list.resources).toHaveLength(12);

    const read = rpcResultOf(
      await postMcp({
        jsonrpc: '2.0',
        id: 6,
        method: 'resources/read',
        params: { uri: 'https://push.org/docs/chain/build/constants/' },
      })
    ) as { contents: Array<{ uri: string; mimeType: string; text: string }> };
    expect(read.contents[0]?.mimeType).toBe('text/markdown');
    expect(read.contents[0]?.text).toContain('Constants Reference');
  });

  it('returns -32002 for unknown resource uris', async () => {
    const error = rpcErrorOf(
      await postMcp({
        jsonrpc: '2.0',
        id: 7,
        method: 'resources/read',
        params: { uri: 'https://push.org/docs/unknown/' },
      })
    );
    expect(error.code).toBe(-32002);
  });

  it('returns an empty resource template list', async () => {
    const result = rpcResultOf(
      await postMcp({ jsonrpc: '2.0', id: 8, method: 'resources/templates/list' })
    );
    expect(result).toEqual({ resourceTemplates: [] });
  });

  it('returns -32601 for unknown methods', async () => {
    const http = await postMcp({ jsonrpc: '2.0', id: 9, method: 'prompts/list' });
    expect(rpcErrorOf(http).code).toBe(-32601);
  });

  it('returns -32602 for unknown tools', async () => {
    const http = await postMcp({
      jsonrpc: '2.0',
      id: 10,
      method: 'tools/call',
      params: { name: 'create_document', arguments: {} },
    });
    const error = rpcErrorOf(http);
    expect(error.code).toBe(-32602);
    expect(error.message).toContain('Unknown tool');
  });

  it('returns -32700 with HTTP 400 for invalid JSON', async () => {
    const http = await postMcp('{not json');
    expect(http.status).toBe(400);
    expect(rpcErrorOf(http).code).toBe(-32700);
  });

  it('rejects batch arrays with -32600', async () => {
    const http = await postMcp([{ jsonrpc: '2.0', id: 1, method: 'ping' }]);
    expect(http.status).toBe(400);
    expect(rpcErrorOf(http).code).toBe(-32600);
  });

  it('rejects null request ids as invalid', async () => {
    const http = await postMcp({ jsonrpc: '2.0', id: null, method: 'ping' });
    expect(http.status).toBe(400);
    expect(rpcErrorOf(http).code).toBe(-32600);
  });

  it('accepts notifications and responses with 202 and no body', async () => {
    const notification = await postMcp({ jsonrpc: '2.0', method: 'notifications/initialized' });
    expect(notification.status).toBe(202);
    expect(notification.body).toBeNull();

    const response = await postMcp({ jsonrpc: '2.0', id: 11, result: {} });
    expect(response.status).toBe(202);
  });

  it('rejects unsupported MCP-Protocol-Version headers with 400', async () => {
    const http = await postMcp(
      { jsonrpc: '2.0', id: 12, method: 'ping' },
      { 'mcp-protocol-version': '2019-01-01' }
    );
    expect(http.status).toBe(400);
  });

  it('accepts a valid MCP-Protocol-Version header', async () => {
    const http = await postMcp(
      { jsonrpc: '2.0', id: 13, method: 'ping' },
      { 'mcp-protocol-version': '2025-11-25' }
    );
    expect(http.status).toBe(200);
  });

  it('answers GET and DELETE with 405 and an Allow header', async () => {
    for (const method of ['GET', 'DELETE']) {
      const response = await handleMcp(
        new Request('http://localhost/api/mcp', { method })
      );
      expect(response.status).toBe(405);
      expect(response.headers.get('allow')).toContain('POST');
    }
  });

  it('answers OPTIONS preflight with permissive CORS headers', async () => {
    const response = await handleMcp(
      new Request('http://localhost/api/mcp', { method: 'OPTIONS' })
    );
    expect(response.status).toBe(204);
    expect(response.headers.get('access-control-allow-origin')).toBe('*');
    expect(response.headers.get('access-control-allow-methods')).toContain('POST');
  });

  it('sets CORS headers on POST responses', async () => {
    const http = await postMcp({ jsonrpc: '2.0', id: 14, method: 'ping' });
    expect(http.headers.get('access-control-allow-origin')).toBe('*');
  });

  it('rate limits per client ip with 429 and Retry-After', async () => {
    delete process.env.MCP_DISABLE_RATE_LIMIT;
    resetRateLimitForTests();
    try {
      let limited = false;
      for (let i = 0; i < 40; i += 1) {
        const http = await postMcp(
          { jsonrpc: '2.0', id: 100 + i, method: 'ping' },
          { 'x-forwarded-for': '203.0.113.7' }
        );
        if (http.status === 429) {
          limited = true;
          expect(Number(http.headers.get('retry-after'))).toBeGreaterThan(0);
          expect(rpcErrorOf(http).code).toBe(-32000);
          break;
        }
      }
      expect(limited).toBe(true);

      // A different client ip is unaffected.
      const other = await postMcp(
        { jsonrpc: '2.0', id: 200, method: 'ping' },
        { 'x-forwarded-for': '198.51.100.9' }
      );
      expect(other.status).toBe(200);
    } finally {
      process.env.MCP_DISABLE_RATE_LIMIT = '1';
      resetRateLimitForTests();
    }
  });
});
