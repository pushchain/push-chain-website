import type { PageRecord } from './types';

/** Node in the hierarchical docs tree returned by list_sections. */
export interface SectionNode {
  name: string;
  title: string;
  url?: string;
  pages: Array<{ title: string; url: string }>;
  children: SectionNode[];
}

export function normalizeDocPath(input: string): string | undefined {
  let raw = input.trim();
  if (raw.length === 0) return undefined;
  if (/^https?:\/\//i.test(raw)) {
    try {
      raw = new URL(raw).pathname;
    } catch {
      return undefined;
    }
  }
  try {
    raw = decodeURIComponent(raw);
  } catch {
    return undefined;
  }
  if (!raw.startsWith('/')) raw = `/${raw}`;
  raw = raw.replace(/\/{2,}/g, '/');
  const segments = raw.split('/').filter(Boolean);
  if (segments.some((s) => s === '.' || s === '..')) return undefined;
  return `/${segments.join('/')}${segments.length > 0 ? '/' : ''}`;
}

export function pathSegments(routePath: string, docsRouteBasePath: string): string[] {
  const normalized = normalizeDocPath(routePath);
  if (normalized === undefined) return [];
  const base = docsRouteBasePath.replace(/\/+$/, '');
  if (!normalized.startsWith(`${base}/`)) return [];
  return normalized.slice(base.length).split('/').filter(Boolean);
}

/**
 * Derives the flat "section" label used in frontmatter and search filters.
 * A second-level segment counts as a section only when at least one route
 * nests below it; otherwise the page belongs to its first-level segment.
 * Examples with the push.org layout:
 *   /docs/chain/build/constants/  -> "build"
 *   /docs/chain/intro-push-chain/ -> "chain"
 *   /docs/chain/                  -> "chain"
 */
export function buildSectionAssigner(
  routes: string[],
  docsRouteBasePath: string
): (routePath: string) => string {
  const nestedSecondLevel = new Set<string>();
  for (const route of routes) {
    const segs = pathSegments(route, docsRouteBasePath);
    if (segs.length >= 3 && segs[1] !== undefined) {
      nestedSecondLevel.add(segs[1]);
    }
  }
  return (routePath: string): string => {
    const segs = pathSegments(routePath, docsRouteBasePath);
    if (segs.length >= 2 && segs[1] !== undefined && nestedSecondLevel.has(segs[1])) {
      return segs[1];
    }
    if (segs.length >= 1 && segs[0] !== undefined) {
      return segs[0];
    }
    return 'docs';
  };
}

function humanize(segment: string): string {
  return segment
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Builds the hierarchical docs tree from the manifest pages. Directory
 * levels become nodes; a page whose path equals a directory route becomes
 * that node's landing page and contributes its title.
 */
export function buildSectionTree(
  pages: PageRecord[],
  siteUrl: string,
  docsRouteBasePath: string
): SectionNode[] {
  const roots: SectionNode[] = [];

  const ensureNode = (segments: string[]): SectionNode => {
    let level = roots;
    let node: SectionNode | undefined;
    let prefix = docsRouteBasePath.replace(/\/+$/, '');
    for (const segment of segments) {
      prefix = `${prefix}/${segment}`;
      node = level.find((n) => n.name === segment);
      if (node === undefined) {
        node = { name: segment, title: humanize(segment), pages: [], children: [] };
        level.push(node);
      }
      level = node.children;
    }
    if (node === undefined) {
      throw new Error('ensureNode requires at least one segment');
    }
    return node;
  };

  const sorted = [...pages].sort((a, b) => a.path.localeCompare(b.path));
  for (const page of sorted) {
    const segs = pathSegments(page.path, docsRouteBasePath);
    const url = `${siteUrl}${page.path}`;
    if (segs.length === 0) continue;
    const isLanding = pages.some((other) =>
      other !== page ? other.path.startsWith(page.path) && other.path !== page.path : false
    );
    if (isLanding) {
      const node = ensureNode(segs);
      node.title = page.title;
      node.url = url;
    } else {
      const parent = segs.slice(0, -1);
      if (parent.length === 0) {
        const node = ensureNode(segs);
        node.title = page.title;
        node.url = url;
      } else {
        ensureNode(parent).pages.push({ title: page.title, url });
      }
    }
  }
  return roots;
}
