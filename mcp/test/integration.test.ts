/**
 * Integration test: the official MCP TypeScript SDK client connects to the
 * handler over real HTTP (Streamable HTTP transport), performs the
 * initialize handshake, and exercises every tool plus the resources
 * surface. Passing this proves interop with the reference implementation.
 */
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import type { FixtureSite } from './helpers/fixtureSite';
import { buildFixtureSite } from './helpers/fixtureSite';
import type { HttpBridge } from './helpers/httpBridge';
import { startHttpBridge } from './helpers/httpBridge';
import { resetStoreForTests } from '../src/runtime/store';

interface ToolCallShape {
  content?: Array<{ type: string; text?: string }>;
  structuredContent?: Record<string, unknown>;
  isError?: boolean;
}

describe('MCP SDK client integration', () => {
  let fixture: FixtureSite;
  let bridge: HttpBridge;
  let client: Client;

  beforeAll(async () => {
    fixture = await buildFixtureSite();
    process.env.MCP_ARTIFACTS_DIR = fixture.mcpDir;
    process.env.MCP_DISABLE_RATE_LIMIT = '1';
    resetStoreForTests();
    bridge = await startHttpBridge();

    client = new Client({ name: 'push-docs-integration-test', version: '1.0.0' });
    const transport = new StreamableHTTPClientTransport(new URL(`${bridge.url}/api/mcp`));
    await client.connect(transport);
  });

  afterAll(async () => {
    await client.close();
    await bridge.close();
    fixture.cleanup();
    delete process.env.MCP_ARTIFACTS_DIR;
    delete process.env.MCP_DISABLE_RATE_LIMIT;
    resetStoreForTests();
  });

  it('completes the initialize handshake with server metadata', () => {
    const serverInfo = client.getServerVersion();
    expect(serverInfo?.name).toBe('push-docs');
    const capabilities = client.getServerCapabilities();
    expect(capabilities?.tools).toBeDefined();
    expect(capabilities?.resources).toBeDefined();
  });

  it('lists the four tools', async () => {
    const { tools } = await client.listTools();
    expect(tools.map((tool) => tool.name).sort()).toEqual([
      'get_agent_resource',
      'get_page',
      'list_sections',
      'search_docs',
    ]);
  });

  it('calls search_docs', async () => {
    const result = (await client.callTool({
      name: 'search_docs',
      arguments: { query: 'constants', limit: 3 },
    })) as ToolCallShape;
    const structured = result.structuredContent as { results: Array<{ url: string }> };
    expect(structured.results[0]?.url).toBe('https://push.org/docs/chain/build/constants/');
  });

  it('calls get_page', async () => {
    const result = (await client.callTool({
      name: 'get_page',
      arguments: { path: '/docs/chain/build/constants/' },
    })) as ToolCallShape;
    expect(result.content?.[0]?.text).toContain('# Constants Reference');
  });

  it('calls list_sections', async () => {
    const result = (await client.callTool({
      name: 'list_sections',
      arguments: {},
    })) as ToolCallShape;
    const structured = result.structuredContent as { sections: Array<{ name: string }> };
    expect(structured.sections.some((section) => section.name === 'chain')).toBe(true);
  });

  it('calls get_agent_resource', async () => {
    const result = (await client.callTool({
      name: 'get_agent_resource',
      arguments: { resource: 'errors' },
    })) as ToolCallShape;
    expect(result.structuredContent).toMatchObject({ resource: 'errors' });
  });

  it('lists and reads resources', async () => {
    const { resources } = await client.listResources();
    expect(resources.length).toBe(12);
    const introResource = resources.find(
      (resource) => resource.uri === 'https://push.org/docs/chain/intro/'
    );
    expect(introResource).toBeDefined();

    const contents = await client.readResource({ uri: 'https://push.org/docs/chain/intro/' });
    const first = contents.contents[0];
    expect(first?.mimeType).toBe('text/markdown');
    if (first === undefined || !('text' in first)) {
      throw new Error('Expected text resource contents');
    }
    expect(String(first.text)).toContain('Intro to Push Chain');
  });

  it('surfaces tool execution errors through the SDK', async () => {
    const result = (await client.callTool({
      name: 'get_page',
      arguments: { path: '/docs/not-a-page/' },
    })) as ToolCallShape;
    expect(result.isError).toBe(true);
  });
});
