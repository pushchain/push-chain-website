import { getPageInputSchema, toInputJsonSchema } from '../../shared/schemas';
import type { RegisteredTool, ToolContext, ToolOutcome } from './types';
import { errorResult, invalidParams, okResult } from './types';

async function execute(ctx: ToolContext, rawArgs: unknown): Promise<ToolOutcome> {
  const parsed = getPageInputSchema.safeParse(rawArgs ?? {});
  if (!parsed.success) return invalidParams(parsed.error);

  const requested = parsed.data.url ?? parsed.data.path ?? '';
  const page = ctx.store.getPageByPath(requested);
  if (page === undefined) {
    return errorResult(
      `Page not found in the indexed docs set: ${requested}. Only indexed push.org docs pages ` +
        'can be fetched. Use search_docs or list_sections to discover valid pages.'
    );
  }

  const markdown = await ctx.store.readPageMarkdown(page);
  return okResult(
    {
      url: `${ctx.store.manifest.siteUrl}${page.path}`,
      title: page.title,
      section: page.section,
      lastUpdated: page.lastUpdated,
      ...(page.description !== undefined ? { description: page.description } : {}),
      markdown,
    },
    markdown
  );
}

export const getPageTool: RegisteredTool = {
  name: 'get_page',
  title: 'Get a docs page as markdown',
  description:
    'Fetches one push.org docs page as clean markdown with frontmatter metadata (title, url, ' +
    'section, lastUpdated). Accepts exactly one of "url" or "path". Only pages inside the ' +
    'indexed docs set can be fetched.',
  inputJsonSchema: toInputJsonSchema(getPageInputSchema),
  execute,
};
