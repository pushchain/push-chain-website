import type { DocsStore } from './store';
import { normalizeDocPath } from '../shared/sections';

/**
 * Exposes the same content as the tools through the MCP resources
 * primitive, for clients that prefer resources. Docs pages use their
 * canonical https://push.org URLs as resource URIs (the https scheme is
 * appropriate here: the pages are directly fetchable on the web; this
 * server additionally serves them as clean markdown).
 */

interface ResourceDescriptor {
  uri: string;
  name: string;
  title: string;
  description?: string;
  mimeType: string;
}

interface ResourceContent {
  uri: string;
  mimeType: string;
  text: string;
}

interface ResourceEntry {
  descriptor: ResourceDescriptor;
  read(): Promise<string>;
}

function resourceEntries(store: DocsStore): ResourceEntry[] {
  const entries: ResourceEntry[] = [];
  for (const page of store.manifest.pages) {
    entries.push({
      descriptor: {
        uri: `${store.manifest.siteUrl}${page.path}`,
        name: page.id,
        title: page.title,
        ...(page.description !== undefined ? { description: page.description } : {}),
        mimeType: 'text/markdown',
      },
      read: () => store.readPageMarkdown(page),
    });
  }
  for (const [key, relative] of Object.entries(store.manifest.agentResources)) {
    const fileName = relative.split('/').pop() ?? relative;
    entries.push({
      descriptor: {
        uri: `${store.manifest.siteUrl}/agents/${fileName}`,
        name: `agents-${key}`,
        title: `Push Chain agent layer: ${key}`,
        description: `Machine-readable ${key} file from the push.org agent layer`,
        mimeType: 'application/json',
      },
      read: async () => {
        const text = await store.readAgentResource(key);
        if (text === undefined) {
          throw new Error(`Agent resource missing from artifacts: ${key}`);
        }
        return text;
      },
    });
  }
  return entries;
}

export function listResources(store: DocsStore): { resources: ResourceDescriptor[] } {
  return { resources: resourceEntries(store).map((entry) => entry.descriptor) };
}

function normalizeUri(uri: string): string | undefined {
  try {
    const parsed = new URL(uri);
    const pathPart = normalizeDocPath(parsed.pathname) ?? parsed.pathname;
    return `${parsed.origin}${pathPart}`;
  } catch {
    return undefined;
  }
}

export async function readResource(
  store: DocsStore,
  uri: string
): Promise<{ contents: ResourceContent[] } | undefined> {
  const target = normalizeUri(uri);
  if (target === undefined) return undefined;
  for (const entry of resourceEntries(store)) {
    const normalized = normalizeUri(entry.descriptor.uri);
    if (normalized !== undefined && normalized === target) {
      return {
        contents: [
          {
            uri: entry.descriptor.uri,
            mimeType: entry.descriptor.mimeType,
            text: await entry.read(),
          },
        ],
      };
    }
  }
  return undefined;
}
