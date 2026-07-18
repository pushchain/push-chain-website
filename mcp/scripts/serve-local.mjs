/**
 * Local HTTP server for the MCP endpoint, for use with MCP Inspector or
 * any MCP client during development.
 *
 * Usage:
 *   yarn mcp:artifacts                 (build the artifacts once)
 *   node mcp/scripts/serve-local.mjs   (default port 3939)
 *
 * Then connect MCP Inspector to http://127.0.0.1:3939/api with the
 * Streamable HTTP transport.
 */
import http from 'node:http';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');

process.env.MCP_ARTIFACTS_DIR =
  process.env.MCP_ARTIFACTS_DIR ?? path.join(repoRoot, 'build', 'mcp');
process.env.MCP_DISABLE_RATE_LIMIT = process.env.MCP_DISABLE_RATE_LIMIT ?? '1';

const { handleMcp } = require(path.join(repoRoot, 'mcp', 'dist', 'runtime', 'handler.js'));

const port = Number(process.env.PORT ?? 3939);

const server = http.createServer((incoming, outgoing) => {
  const chunks = [];
  incoming.on('data', (chunk) => chunks.push(chunk));
  incoming.on('end', () => {
    (async () => {
      const headers = new Headers();
      for (const [key, value] of Object.entries(incoming.headers)) {
        if (typeof value === 'string') headers.set(key, value);
        else if (Array.isArray(value)) headers.set(key, value.join(', '));
      }
      const method = incoming.method ?? 'GET';
      const body = Buffer.concat(chunks);
      const request = new Request(`http://127.0.0.1:${port}${incoming.url ?? '/'}`, {
        method,
        headers,
        ...(body.length > 0 && method !== 'GET' && method !== 'HEAD'
          ? { body: new Uint8Array(body) }
          : {}),
      });
      const response = await handleMcp(request);
      const responseHeaders = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });
      outgoing.writeHead(response.status, responseHeaders);
      outgoing.end(Buffer.from(await response.arrayBuffer()));
    })().catch((error) => {
      outgoing.writeHead(500, { 'content-type': 'text/plain' });
      outgoing.end(String(error));
    });
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`push-docs MCP server listening on http://127.0.0.1:${port}/api`);
  console.log(`artifacts: ${process.env.MCP_ARTIFACTS_DIR}`);
});
