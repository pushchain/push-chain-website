import { execFileSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import matter from 'gray-matter';
import { normalizeDocPath } from '../shared/sections';

/**
 * Best-effort mapping from a docs route to its source file so pages can
 * carry a real lastUpdated date from git history. Follows the Docusaurus
 * conventions used in this repo: "NN-" number prefixes are stripped from
 * every path segment, frontmatter slug overrides the file name (absolute,
 * or relative to the containing directory route), and index/README files
 * map to the directory route. Routes that cannot be mapped fall back to
 * the build timestamp; that is recorded, never fatal.
 */

function stripNumberPrefix(segment: string): string {
  return segment.replace(/^\d+-/, '');
}

function walkMarkdownFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkMarkdownFiles(full));
    } else if (/\.mdx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

export function buildRouteToSourceMap(
  docsDir: string,
  docsRouteBasePath: string
): Map<string, string> {
  const map = new Map<string, string>();
  if (!fs.existsSync(docsDir)) return map;

  const base = docsRouteBasePath.replace(/\/+$/, '');
  for (const filePath of walkMarkdownFiles(docsDir)) {
    const rel = path.relative(docsDir, filePath);
    const segments = rel.split(path.sep);
    const fileName = segments.pop();
    if (fileName === undefined) continue;

    const dirSegments = segments.map(stripNumberPrefix);
    const dirRoute = [base, ...dirSegments].join('/');

    let route: string;
    let slug: unknown;
    try {
      slug = (matter(fs.readFileSync(filePath, 'utf8')).data as Record<string, unknown>).slug;
    } catch {
      slug = undefined;
    }

    if (typeof slug === 'string' && slug.length > 0) {
      route = slug.startsWith('/')
        ? `${base}${slug}`
        : path.posix.resolve(`${dirRoute}/`, slug);
    } else {
      const baseName = stripNumberPrefix(fileName.replace(/\.mdx?$/, ''));
      route = /^(index|readme)$/i.test(baseName) ? dirRoute : `${dirRoute}/${baseName}`;
    }

    const normalized = normalizeDocPath(route);
    if (normalized !== undefined && !map.has(normalized)) {
      map.set(normalized, filePath);
    }
  }
  return map;
}

export function gitLastUpdated(filePath: string, cwd: string): string | undefined {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', filePath], {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out.length > 0 ? out : undefined;
  } catch {
    return undefined;
  }
}
