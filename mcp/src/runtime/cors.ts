/**
 * CORS policy: the endpoint is public, read-only, and unauthenticated, so
 * POST is allowed from any origin with no credentials. The transport spec
 * requires Origin validation to prevent DNS rebinding; that attack targets
 * servers bound to localhost with ambient authority, which does not apply
 * to this hosted, credential-free endpoint, so every origin is accepted.
 */
export const CORS_HEADERS: Readonly<Record<string, string>> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
  'Access-Control-Allow-Headers':
    'Content-Type, Accept, Authorization, Mcp-Protocol-Version, Mcp-Session-Id, Last-Event-ID',
  'Access-Control-Max-Age': '86400',
};
