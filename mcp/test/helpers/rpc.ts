import { handleMcp } from '../../src/runtime/handler';

export interface RpcHttpResult {
  status: number;
  headers: Headers;
  body: unknown;
}

export async function postMcp(
  body: unknown,
  headers: Record<string, string> = {}
): Promise<RpcHttpResult> {
  const response = await handleMcp(
    new Request('http://localhost/api', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json, text/event-stream',
        ...headers,
      },
      body: typeof body === 'string' ? body : JSON.stringify(body),
    })
  );
  const text = await response.text();
  return {
    status: response.status,
    headers: response.headers,
    body: text.length > 0 ? JSON.parse(text) : null,
  };
}

let nextId = 1;

export async function callTool(
  name: string,
  args: Record<string, unknown>
): Promise<RpcHttpResult> {
  return postMcp({
    jsonrpc: '2.0',
    id: nextId++,
    method: 'tools/call',
    params: { name, arguments: args },
  });
}

interface RpcEnvelope {
  result?: Record<string, unknown>;
  error?: { code: number; message: string; data?: unknown };
}

export function rpcResultOf(http: RpcHttpResult): Record<string, unknown> {
  const envelope = http.body as RpcEnvelope;
  if (envelope.result === undefined) {
    throw new Error(`Expected result, got: ${JSON.stringify(http.body)}`);
  }
  return envelope.result;
}

export function rpcErrorOf(http: RpcHttpResult): { code: number; message: string; data?: unknown } {
  const envelope = http.body as RpcEnvelope;
  if (envelope.error === undefined) {
    throw new Error(`Expected error, got: ${JSON.stringify(http.body)}`);
  }
  return envelope.error;
}
