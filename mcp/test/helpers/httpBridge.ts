import * as http from 'node:http';
import { handleMcp } from '../../src/runtime/handler';

/**
 * Minimal HTTP server bridging Node's request/response objects to the
 * web-standard handler, so integration tests exercise the server over a
 * real TCP connection exactly as an MCP client would.
 */
export interface HttpBridge {
  url: string;
  close(): Promise<void>;
}

export async function startHttpBridge(): Promise<HttpBridge> {
  const server = http.createServer((incoming, outgoing) => {
    const chunks: Buffer[] = [];
    incoming.on('data', (chunk: Buffer) => chunks.push(chunk));
    incoming.on('end', () => {
      void (async () => {
        const headers = new Headers();
        for (const [key, value] of Object.entries(incoming.headers)) {
          if (typeof value === 'string') headers.set(key, value);
          else if (Array.isArray(value)) headers.set(key, value.join(', '));
        }
        const method = incoming.method ?? 'GET';
        const body = Buffer.concat(chunks);
        const request = new Request(`http://127.0.0.1${incoming.url ?? '/'}`, {
          method,
          headers,
          ...(body.length > 0 && method !== 'GET' && method !== 'HEAD'
            ? { body: new Uint8Array(body) }
            : {}),
        });
        const response = await handleMcp(request);
        const responseHeaders: Record<string, string> = {};
        response.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });
        outgoing.writeHead(response.status, responseHeaders);
        outgoing.end(Buffer.from(await response.arrayBuffer()));
      })().catch((error: unknown) => {
        outgoing.writeHead(500, { 'content-type': 'text/plain' });
        outgoing.end(String(error));
      });
    });
  });

  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  if (address === null || typeof address === 'string') {
    throw new Error('Failed to bind test server');
  }
  return {
    url: `http://127.0.0.1:${address.port}`,
    close: () =>
      new Promise<void>((resolve, reject) => {
        server.close((error) => (error !== undefined && error !== null ? reject(error) : resolve()));
      }),
  };
}
