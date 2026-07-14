import { listSectionsInputSchema, toInputJsonSchema } from '../../shared/schemas';
import { buildSectionTree } from '../../shared/sections';
import type { SectionNode } from '../../shared/sections';
import type { RegisteredTool, ToolContext, ToolOutcome } from './types';
import { errorResult, invalidParams, okResult } from './types';

function findSection(nodes: SectionNode[], name: string): SectionNode | undefined {
  for (const node of nodes) {
    if (node.name === name) return node;
    const nested = findSection(node.children, name);
    if (nested !== undefined) return nested;
  }
  return undefined;
}

async function execute(ctx: ToolContext, rawArgs: unknown): Promise<ToolOutcome> {
  const parsed = listSectionsInputSchema.safeParse(rawArgs ?? {});
  if (!parsed.success) return invalidParams(parsed.error);

  const { manifest } = ctx.store;
  const tree = buildSectionTree(manifest.pages, manifest.siteUrl, '/docs');

  if (parsed.data.section !== undefined) {
    const node = findSection(tree, parsed.data.section);
    if (node === undefined) {
      return errorResult(
        `Unknown section "${parsed.data.section}". Available sections: ` +
          manifest.sections.join(', ')
      );
    }
    return okResult({ docCount: manifest.docCount, sections: [node] });
  }

  return okResult({ docCount: manifest.docCount, sections: tree });
}

export const listSectionsTool: RegisteredTool = {
  name: 'list_sections',
  title: 'List docs sections',
  description:
    'Returns the hierarchical map of the push.org docs tree: sections, page titles, and urls. ' +
    'Pass "section" to get a single subtree.',
  inputJsonSchema: toInputJsonSchema(listSectionsInputSchema),
  execute,
};
