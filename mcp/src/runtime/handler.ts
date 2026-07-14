import { z } from 'zod';
import { CORS_HEADERS } from './cors';
import { checkRateLimit } from './rateLimit';
import {
  classifyMessage,
  ErrorCode,
  rpcError,
  rpcResult,
  type JsonRpcRequest,
  type JsonRpcResponse,
} from './jsonrpc';
import {
  isSupportedProtocolVersion,
  negotiateProtocolVersion,
  SERVER_CAPABILITIES,
  SERVER_INFO,
  SERVER_INSTRUCTIONS,
  SUPPORTED_PROTOCOL_VERSIONS,
} from './protocol';
import { getStore } from './store';
import { findTool, toolListForProtocol } from './tools';
import { listResources, readResource } from './resources';

/**
 * Stateless MCP server over Streamable HTTP, verified against the
 * 2025-11-25 transport spec:
 *   - every client message arrives as its own HTTP POST; requests are
 *     answered with Content-Type: application/json (one JSON object),
 *     which the spec allows in place of an SSE stream
 *   - notifications and responses are accepted with 202 and no body
 *   - GET (server-initiated streams) and DELETE (session termination)
 *     return 405, which the spec permits for servers that offer neither
 *   - no MCP-Session-Id is issued; sessions are optional and this server
 *     treats every request independently
 *   - an invalid MCP-Protocol-Version header is a 400; a missing header
 *     is tolerated per the spec's backwards-compatibility guidance
 */

function jsonResponse(status: number, body: unknown, extraHeaders?: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
      ...extraHeaders,
    },
  });
}

function emptyResponse(status: number, extraHeaders?: Record<string, string>): Response {
  return new Response(null, { status, headers: { ...CORS_HEADERS, ...extraHeaders } });
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded !== null) {
    const first = forwarded.split(',')[0]?.trim();
    if (first !== undefined && first.length > 0) return first;
  }
  return request.headers.get('x-real-ip') ?? 'unknown';
}

const toolsCallParamsSchema = z.object({
  name: z.string().min(1),
  arguments: z.record(z.unknown()).optional(),
});

const resourcesReadParamsSchema = z.object({
  uri: z.string().min(1),
});

function handleInitialize(message: JsonRpcRequest): JsonRpcResponse {
  const params = message.params ?? {};
  return rpcResult(message.id, {
    protocolVersion: negotiateProtocolVersion(params.protocolVersion),
    capabilities: SERVER_CAPABILITIES,
    serverInfo: SERVER_INFO,
    instructions: SERVER_INSTRUCTIONS,
  });
}

async function handleToolsCall(message: JsonRpcRequest): Promise<JsonRpcResponse> {
  const params = toolsCallParamsSchema.safeParse(message.params ?? {});
  if (!params.success) {
    return rpcError(message.id, ErrorCode.InvalidParams, 'Invalid tools/call params', {
      issues: params.error.issues,
    });
  }

  const tool = findTool(params.data.name);
  if (tool === undefined) {
    return rpcError(message.id, ErrorCode.InvalidParams, `Unknown tool: ${params.data.name}`);
  }

  const store = await getStore();
  const outcome = await tool.execute({ store }, params.data.arguments ?? {});
  if (!outcome.ok) {
    return rpcError(
      message.id,
      ErrorCode.InvalidParams,
      `Invalid params for ${tool.name}: ${outcome.invalidParams.message}`,
      { issues: outcome.invalidParams.issues }
    );
  }
  return rpcResult(message.id, outcome.result);
}

async function handleResourcesRead(message: JsonRpcRequest): Promise<JsonRpcResponse> {
  const params = resourcesReadParamsSchema.safeParse(message.params ?? {});
  if (!params.success) {
    return rpcError(message.id, ErrorCode.InvalidParams, 'Invalid resources/read params', {
      issues: params.error.issues,
    });
  }
  const store = await getStore();
  const contents = await readResource(store, params.data.uri);
  if (contents === undefined) {
    return rpcError(message.id, ErrorCode.ResourceNotFound, 'Resource not found', {
      uri: params.data.uri,
    });
  }
  return rpcResult(message.id, contents);
}

async function dispatch(message: JsonRpcRequest): Promise<JsonRpcResponse> {
  switch (message.method) {
    case 'initialize':
      return handleInitialize(message);
    case 'ping':
      return rpcResult(message.id, {});
    case 'tools/list':
      return rpcResult(message.id, { tools: toolListForProtocol() });
    case 'tools/call':
      return handleToolsCall(message);
    case 'resources/list': {
      const store = await getStore();
      return rpcResult(message.id, listResources(store));
    }
    case 'resources/templates/list':
      return rpcResult(message.id, { resourceTemplates: [] });
    case 'resources/read':
      return handleResourcesRead(message);
    default:
      return rpcError(message.id, ErrorCode.MethodNotFound, `Method not found: ${message.method}`);
  }
}

export async function handleMcp(request: Request): Promise<Response> {
  try {
    if (request.method === 'OPTIONS') {
      return emptyResponse(204);
    }
    if (request.method !== 'POST') {
      // GET would open a server-initiated SSE stream and DELETE would end a
      // session; this server supports neither, and 405 is the spec answer.
      return jsonResponse(
        405,
        rpcError(null, ErrorCode.InvalidRequest, `Method not allowed: ${request.method}`),
        { Allow: 'POST, OPTIONS' }
      );
    }

    const limit = checkRateLimit(clientKey(request));
    if (!limit.allowed) {
      return jsonResponse(429, rpcError(null, ErrorCode.RateLimited, 'Rate limit exceeded'), {
        'Retry-After': String(limit.retryAfterSeconds),
      });
    }

    const versionHeader = request.headers.get('mcp-protocol-version');
    if (versionHeader !== null && !isSupportedProtocolVersion(versionHeader)) {
      return jsonResponse(
        400,
        rpcError(null, ErrorCode.InvalidRequest, 'Unsupported MCP-Protocol-Version header', {
          requested: versionHeader,
          supported: [...SUPPORTED_PROTOCOL_VERSIONS],
        })
      );
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(await request.text());
    } catch {
      return jsonResponse(400, rpcError(null, ErrorCode.ParseError, 'Parse error: invalid JSON'));
    }

    if (Array.isArray(parsed)) {
      return jsonResponse(
        400,
        rpcError(null, ErrorCode.InvalidRequest, 'Batch requests are not supported')
      );
    }

    const classified = classifyMessage(parsed);
    switch (classified.kind) {
      case 'notification':
      case 'response':
        // Accepted per the transport spec: 202 with no body.
        return emptyResponse(202);
      case 'invalid':
        return jsonResponse(
          400,
          rpcError(null, ErrorCode.InvalidRequest, `Invalid request: ${classified.reason}`)
        );
      case 'request':
        return jsonResponse(200, await dispatch(classified.message));
    }
  } catch (error) {
    console.error('[mcp] internal error:', error);
    return jsonResponse(
      500,
      rpcError(null, ErrorCode.InternalError, 'Internal error', {
        message: error instanceof Error ? error.message : String(error),
      })
    );
  }
}
