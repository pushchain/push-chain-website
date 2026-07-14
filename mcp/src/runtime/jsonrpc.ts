/**
 * Minimal JSON-RPC 2.0 framing verified against the MCP 2025-11-25 spec.
 * MCP restricts JSON-RPC in two ways that matter here: request ids MUST
 * NOT be null, and params are always objects when present.
 */

export const JSONRPC_VERSION = '2.0' as const;

export const ErrorCode = {
  ParseError: -32700,
  InvalidRequest: -32600,
  MethodNotFound: -32601,
  InvalidParams: -32602,
  InternalError: -32603,
  // MCP-defined: resources/read with an unknown URI.
  ResourceNotFound: -32002,
  // Implementation-defined server error range.
  RateLimited: -32000,
} as const;

export type JsonRpcId = string | number;

export interface JsonRpcRequest {
  jsonrpc: typeof JSONRPC_VERSION;
  id: JsonRpcId;
  method: string;
  params?: Record<string, unknown>;
}

export interface JsonRpcNotification {
  jsonrpc: typeof JSONRPC_VERSION;
  method: string;
  params?: Record<string, unknown>;
}

export interface JsonRpcErrorObject {
  code: number;
  message: string;
  data?: unknown;
}

export type JsonRpcResponse =
  | { jsonrpc: typeof JSONRPC_VERSION; id: JsonRpcId; result: unknown }
  | { jsonrpc: typeof JSONRPC_VERSION; id: JsonRpcId | null; error: JsonRpcErrorObject };

export function rpcResult(id: JsonRpcId, result: unknown): JsonRpcResponse {
  return { jsonrpc: JSONRPC_VERSION, id, result };
}

export function rpcError(
  id: JsonRpcId | null,
  code: number,
  message: string,
  data?: unknown
): JsonRpcResponse {
  return {
    jsonrpc: JSONRPC_VERSION,
    id,
    error: { code, message, ...(data !== undefined ? { data } : {}) },
  };
}

export type ClassifiedMessage =
  | { kind: 'request'; message: JsonRpcRequest }
  | { kind: 'notification'; message: JsonRpcNotification }
  | { kind: 'response' }
  | { kind: 'invalid'; reason: string };

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function classifyMessage(value: unknown): ClassifiedMessage {
  if (!isPlainObject(value)) {
    return { kind: 'invalid', reason: 'Message must be a JSON object' };
  }
  if (value.jsonrpc !== JSONRPC_VERSION) {
    return { kind: 'invalid', reason: 'Missing or invalid jsonrpc version, expected "2.0"' };
  }

  const { id, method, params } = value;

  if (typeof method === 'string') {
    if (params !== undefined && !isPlainObject(params)) {
      return { kind: 'invalid', reason: 'params must be an object when present' };
    }
    if (id === undefined) {
      return {
        kind: 'notification',
        message: {
          jsonrpc: JSONRPC_VERSION,
          method,
          ...(params !== undefined ? { params } : {}),
        },
      };
    }
    if (typeof id !== 'string' && typeof id !== 'number') {
      return { kind: 'invalid', reason: 'Request id must be a string or a number' };
    }
    return {
      kind: 'request',
      message: {
        jsonrpc: JSONRPC_VERSION,
        id,
        method,
        ...(params !== undefined ? { params } : {}),
      },
    };
  }

  if ('result' in value || 'error' in value) {
    return { kind: 'response' };
  }
  return { kind: 'invalid', reason: 'Message is neither a request, notification, nor response' };
}
