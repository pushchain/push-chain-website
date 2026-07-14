import type { RegisteredTool } from './types';
import { searchDocsTool } from './searchDocs';
import { getPageTool } from './getPage';
import { listSectionsTool } from './listSections';
import { getAgentResourceTool } from './getAgentResource';

/**
 * The complete tool surface. Read-only by design: no tool writes, creates,
 * or modifies documents, and none may be added that does.
 */
export const REGISTERED_TOOLS: readonly RegisteredTool[] = [
  searchDocsTool,
  getPageTool,
  listSectionsTool,
  getAgentResourceTool,
];

export function findTool(name: string): RegisteredTool | undefined {
  return REGISTERED_TOOLS.find((tool) => tool.name === name);
}

export function toolListForProtocol(): Array<Record<string, unknown>> {
  return REGISTERED_TOOLS.map((tool) => ({
    name: tool.name,
    title: tool.title,
    description: tool.description,
    inputSchema: tool.inputJsonSchema,
  }));
}
