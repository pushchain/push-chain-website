/**
 * Shared contracts between the build-time artifact generator and the
 * runtime MCP server. The runtime never recomputes anything that the
 * build wrote into these structures.
 */

export interface PageRecord {
  /** Stable id derived from the URL path, e.g. "chain-build-constants". */
  id: string;
  /** Site-absolute URL path with trailing slash, e.g. "/docs/chain/build/constants/". */
  path: string;
  /** Artifact-relative markdown file, e.g. "docs/chain-build-constants.md". */
  file: string;
  title: string;
  section: string;
  description?: string;
  /** ISO 8601 timestamp of the last git commit touching the source, or the build time. */
  lastUpdated: string;
}

export interface SkippedPage {
  path: string;
  reason: string;
  matches: string[];
}

export interface Manifest {
  schemaVersion: string;
  serverVersion: string;
  generated: string;
  buildHash: string;
  siteUrl: string;
  locale: string;
  /** Docusaurus docs version indexed by this build. "current" when versioning is off. */
  docsVersion: string;
  docCount: number;
  skippedCount: number;
  indexBytes: number;
  sections: string[];
  pages: PageRecord[];
  /** Agent-layer resource key to artifact-relative file, e.g. capabilities: "agents/capabilities.json". */
  agentResources: Record<string, string>;
}

export interface SearchIndexArtifact {
  engine: 'minisearch';
  options: {
    fields: string[];
    storeFields: string[];
  };
  /** Serialized MiniSearch index (JSON string) for MiniSearch.loadJSON. */
  index: string;
}

export interface ExtractedPage {
  title: string;
  description?: string;
  markdown: string;
  headings: string[];
  /** Plain text derived from the markdown, used for search and snippets. */
  plain: string;
}
