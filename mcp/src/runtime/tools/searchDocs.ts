import type { SearchResult } from 'minisearch';
import { searchDocsInputSchema, toInputJsonSchema } from '../../shared/schemas';
import type { RegisteredTool, ToolContext, ToolOutcome } from './types';
import { errorResult, invalidParams, okResult } from './types';

const SNIPPET_MAX = 300;

export function makeSnippet(plain: string, terms: string[], max: number = SNIPPET_MAX): string {
  const haystack = plain.toLowerCase();
  let matchIndex = -1;
  for (const term of terms) {
    const index = haystack.indexOf(term.toLowerCase());
    if (index !== -1 && (matchIndex === -1 || index < matchIndex)) {
      matchIndex = index;
    }
  }
  const start = matchIndex === -1 ? 0 : Math.max(0, matchIndex - 80);
  let snippet = plain.slice(start, start + max);
  if (start > 0) snippet = `...${snippet.replace(/^\S*\s/, '')}`;
  if (start + max < plain.length) snippet = `${snippet.replace(/\s\S*$/, '')}...`;
  return snippet;
}

function stored(result: SearchResult): {
  title: string;
  section: string;
  path: string;
  plain: string;
} {
  const record = result as unknown as Partial<Record<string, unknown>>;
  return {
    title: typeof record.title === 'string' ? record.title : '',
    section: typeof record.section === 'string' ? record.section : '',
    path: typeof record.path === 'string' ? record.path : '',
    plain: typeof record.plain === 'string' ? record.plain : '',
  };
}

async function execute(ctx: ToolContext, rawArgs: unknown): Promise<ToolOutcome> {
  const parsed = searchDocsInputSchema.safeParse(rawArgs ?? {});
  if (!parsed.success) return invalidParams(parsed.error);
  const { query, section, limit } = parsed.data;

  if (section !== undefined && !ctx.store.manifest.sections.includes(section)) {
    return errorResult(
      `Unknown section "${section}". Available sections: ${ctx.store.manifest.sections.join(', ')}`
    );
  }

  const hits = ctx.store.search.search(query, {
    prefix: true,
    fuzzy: 0.15,
    boost: { title: 3, headings: 2 },
    ...(section !== undefined
      ? { filter: (result: SearchResult) => stored(result).section === section }
      : {}),
  });

  const results = hits.slice(0, limit).map((hit) => {
    const fields = stored(hit);
    return {
      title: fields.title,
      url: `${ctx.store.manifest.siteUrl}${fields.path}`,
      section: fields.section,
      snippet: makeSnippet(fields.plain, hit.terms.length > 0 ? hit.terms : [query]),
      score: Math.round(hit.score * 1000) / 1000,
    };
  });

  return okResult({ query, total: hits.length, results });
}

export const searchDocsTool: RegisteredTool = {
  name: 'search_docs',
  title: 'Search push.org docs',
  description:
    'Full text search over push.org documentation. Returns ranked results with title, url, ' +
    'section, snippet, and score. Optionally filter by section.',
  inputJsonSchema: toInputJsonSchema(searchDocsInputSchema),
  execute,
};
