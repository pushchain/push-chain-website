/**
 * Vercel serverless entry point for the push.org docs MCP server.
 * The implementation lives in mcp/src/runtime; artifacts are bundled from
 * build/mcp via the includeFiles setting in vercel.json.
 */
export { POST, GET, DELETE, OPTIONS } from '../mcp/src/runtime/vercel';
