import { MCP_SERVER_VERSION } from '../build/artifacts';

/**
 * Protocol versions this server accepts, newest first. 2025-11-25 is the
 * current published MCP revision at the time of writing. Version
 * negotiation follows the lifecycle spec: echo the requested version when
 * supported, otherwise answer with our latest supported version.
 */
export const SUPPORTED_PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26'] as const;

export const LATEST_PROTOCOL_VERSION = SUPPORTED_PROTOCOL_VERSIONS[0];

export const SERVER_INFO = {
  name: 'push-docs',
  title: 'Push Chain Documentation',
  version: MCP_SERVER_VERSION,
  description:
    'Read-only MCP server for push.org documentation and the Push Chain agent layer. ' +
    'Content is a static snapshot generated at site build time.',
  websiteUrl: 'https://push.org',
} as const;

export const SERVER_CAPABILITIES = {
  tools: { listChanged: false },
  resources: { subscribe: false, listChanged: false },
} as const;

export const SERVER_INSTRUCTIONS =
  'This server exposes push.org documentation. Use search_docs to find pages by keyword, ' +
  'get_page to fetch a full page as clean markdown, list_sections to browse the docs tree, ' +
  'and get_agent_resource for machine-readable Push Chain metadata (capabilities, errors, ' +
  'contract-addresses, supported-chains, sdk-capabilities, changelog). All tools are ' +
  'read-only. Docs pages are also exposed as MCP resources with their canonical ' +
  'https://push.org URLs.';

export function negotiateProtocolVersion(requested: unknown): string {
  if (
    typeof requested === 'string' &&
    (SUPPORTED_PROTOCOL_VERSIONS as readonly string[]).includes(requested)
  ) {
    return requested;
  }
  return LATEST_PROTOCOL_VERSION;
}

export function isSupportedProtocolVersion(version: string): boolean {
  return (SUPPORTED_PROTOCOL_VERSIONS as readonly string[]).includes(version);
}
