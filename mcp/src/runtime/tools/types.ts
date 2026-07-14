import type { z } from 'zod';
import type { DocsStore } from '../store';

export interface ToolContext {
  store: DocsStore;
}

/** Shape of a tools/call result, per the MCP 2025-11-25 tools spec. */
export interface McpToolResult {
  content: Array<{ type: 'text'; text: string }>;
  structuredContent?: Record<string, unknown>;
  isError?: boolean;
}

export type ToolOutcome =
  | { ok: true; result: McpToolResult }
  | { ok: false; invalidParams: { message: string; issues: unknown } };

export interface RegisteredTool {
  name: string;
  title: string;
  description: string;
  inputJsonSchema: Record<string, unknown>;
  execute(ctx: ToolContext, rawArgs: unknown): Promise<ToolOutcome>;
}

/**
 * Success result. Per spec, structured content SHOULD also be serialized
 * into a text block for backwards compatibility; `text` overrides that
 * serialization where raw markdown is more useful than JSON.
 */
export function okResult(structured: Record<string, unknown>, text?: string): ToolOutcome {
  return {
    ok: true,
    result: {
      content: [{ type: 'text', text: text ?? JSON.stringify(structured, null, 2) }],
      structuredContent: structured,
    },
  };
}

/**
 * Tool execution error (isError: true). Used for business-logic failures
 * the model can correct, e.g. an unknown page or section. Schema-invalid
 * params never reach here; those become JSON-RPC -32602 in the handler.
 */
export function errorResult(message: string): ToolOutcome {
  return {
    ok: true,
    result: {
      content: [{ type: 'text', text: message }],
      isError: true,
    },
  };
}

export function invalidParams(error: z.ZodError): ToolOutcome {
  return {
    ok: false,
    invalidParams: {
      message: error.issues.map((issue) => issue.message).join('; '),
      issues: error.issues,
    },
  };
}
