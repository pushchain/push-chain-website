import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import { performance } from 'node:perf_hooks';
import MiniSearch from 'minisearch';
import type { Manifest, PageRecord, SearchIndexArtifact } from '../shared/types';
import type { IndexedDoc } from '../shared/searchOptions';
import { miniSearchOptions } from '../shared/searchOptions';
import { normalizeDocPath } from '../shared/sections';

/**
 * Loads the build-time artifacts once per serverless instance and caches
 * them in module scope. manifest.json and index.json are read eagerly on
 * the first request (cold start); page markdown and agent resources are
 * read lazily and kept in a small LRU cache.
 */

const PAGE_CACHE_MAX = 64;

export interface DocsStore {
  manifest: Manifest;
  search: MiniSearch<IndexedDoc>;
  artifactsDir: string;
  loadMs: number;
  getPageByPath(input: string): PageRecord | undefined;
  readPageMarkdown(page: PageRecord): Promise<string>;
  readAgentResource(key: string): Promise<string | undefined>;
}

function artifactsDirFromEnv(): string {
  const fromEnv = process.env.MCP_ARTIFACTS_DIR;
  if (fromEnv !== undefined && fromEnv.length > 0) {
    return path.resolve(fromEnv);
  }
  return path.resolve(process.cwd(), 'build', 'mcp');
}

/** Rejects any artifact path that escapes the artifacts directory. */
function resolveInside(artifactsDir: string, relativeFile: string): string {
  const resolved = path.resolve(artifactsDir, relativeFile);
  if (resolved !== artifactsDir && !resolved.startsWith(artifactsDir + path.sep)) {
    throw new Error(`Artifact path escapes artifacts directory: ${relativeFile}`);
  }
  return resolved;
}

class LruCache {
  private readonly map = new Map<string, string>();

  constructor(private readonly max: number) {}

  get(key: string): string | undefined {
    const value = this.map.get(key);
    if (value !== undefined) {
      this.map.delete(key);
      this.map.set(key, value);
    }
    return value;
  }

  set(key: string, value: string): void {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.max) {
      const oldest = this.map.keys().next().value;
      if (oldest !== undefined) this.map.delete(oldest);
    }
  }
}

async function loadStore(): Promise<DocsStore> {
  const started = performance.now();
  const artifactsDir = artifactsDirFromEnv();

  const [manifestRaw, indexRaw] = await Promise.all([
    fs.readFile(path.join(artifactsDir, 'manifest.json'), 'utf8'),
    fs.readFile(path.join(artifactsDir, 'index.json'), 'utf8'),
  ]);

  const manifest = JSON.parse(manifestRaw) as Manifest;
  const indexArtifact = JSON.parse(indexRaw) as SearchIndexArtifact;
  const search = MiniSearch.loadJSON<IndexedDoc>(indexArtifact.index, miniSearchOptions());

  const pagesByPath = new Map<string, PageRecord>();
  for (const page of manifest.pages) {
    const normalized = normalizeDocPath(page.path);
    if (normalized !== undefined) {
      pagesByPath.set(normalized, page);
    }
  }

  const fileCache = new LruCache(PAGE_CACHE_MAX);
  const loadMs = performance.now() - started;
  console.log(
    `[mcp] loaded ${manifest.docCount} pages (${(manifest.indexBytes / 1024).toFixed(1)} KiB index) ` +
      `from ${artifactsDir} in ${loadMs.toFixed(1)}ms`
  );

  return {
    manifest,
    search,
    artifactsDir,
    loadMs,
    getPageByPath(input: string): PageRecord | undefined {
      const normalized = normalizeDocPath(input);
      return normalized !== undefined ? pagesByPath.get(normalized) : undefined;
    },
    async readPageMarkdown(page: PageRecord): Promise<string> {
      const cached = fileCache.get(page.file);
      if (cached !== undefined) return cached;
      const text = await fs.readFile(resolveInside(artifactsDir, page.file), 'utf8');
      fileCache.set(page.file, text);
      return text;
    },
    async readAgentResource(key: string): Promise<string | undefined> {
      const relative = manifest.agentResources[key];
      if (relative === undefined) return undefined;
      const cacheKey = `agent:${relative}`;
      const cached = fileCache.get(cacheKey);
      if (cached !== undefined) return cached;
      const text = await fs.readFile(resolveInside(artifactsDir, relative), 'utf8');
      fileCache.set(cacheKey, text);
      return text;
    },
  };
}

let storePromise: Promise<DocsStore> | null = null;

export function getStore(): Promise<DocsStore> {
  if (storePromise === null) {
    storePromise = loadStore().catch((error: unknown) => {
      // Allow the next request to retry instead of caching the failure.
      storePromise = null;
      throw error;
    });
  }
  return storePromise;
}

export function resetStoreForTests(): void {
  storePromise = null;
}
