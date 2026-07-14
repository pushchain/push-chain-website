import { handleMcp } from './handler';

/**
 * Web-standard method handlers in the shape Vercel functions and Next.js
 * route handlers expect. All verbs funnel into handleMcp, which enforces
 * the transport rules itself.
 */

export function POST(request: Request): Promise<Response> {
  return handleMcp(request);
}

export function GET(request: Request): Promise<Response> {
  return handleMcp(request);
}

export function DELETE(request: Request): Promise<Response> {
  return handleMcp(request);
}

export function OPTIONS(request: Request): Promise<Response> {
  return handleMcp(request);
}
