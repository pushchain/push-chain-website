import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

/**
 * Agent-layer files bundled into the artifacts at build time and served
 * through the get_agent_resource tool. Keys are the tool enum values,
 * values are the file names under static/agents/.
 */
export const AGENT_RESOURCES = {
  capabilities: 'capabilities.json',
  errors: 'errors.json',
  'contract-addresses': 'contract-addresses.json',
  'supported-chains': 'supported-chains.json',
  'sdk-capabilities': 'sdk-capabilities.json',
  changelog: 'changelog.json',
} as const;

export type AgentResourceKey = keyof typeof AGENT_RESOURCES;

export const agentResourceKeys = Object.keys(AGENT_RESOURCES) as AgentResourceKey[];

export const searchDocsInputSchema = z
  .object({
    query: z.string().min(1).max(500).describe('Full text search query'),
    section: z
      .string()
      .min(1)
      .max(100)
      .optional()
      .describe('Restrict results to one docs section, e.g. "build" or "setup"'),
    limit: z
      .number()
      .int()
      .min(1)
      .max(20)
      .optional()
      .default(5)
      .describe('Maximum number of results, default 5, max 20'),
  })
  .strict();

export type SearchDocsInput = z.infer<typeof searchDocsInputSchema>;

export const getPageInputSchema = z
  .object({
    url: z
      .string()
      .min(1)
      .max(2000)
      .optional()
      .describe('Absolute page URL, e.g. https://push.org/docs/chain/build/constants/'),
    path: z
      .string()
      .min(1)
      .max(2000)
      .optional()
      .describe('Site-absolute path, e.g. /docs/chain/build/constants/'),
  })
  .strict()
  .superRefine((value, ctx) => {
    const provided = [value.url, value.path].filter((v) => v !== undefined).length;
    if (provided !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Provide exactly one of "url" or "path"',
      });
    }
  });

export type GetPageInput = z.infer<typeof getPageInputSchema>;

export const listSectionsInputSchema = z
  .object({
    section: z
      .string()
      .min(1)
      .max(100)
      .optional()
      .describe('Return only the subtree for this section'),
  })
  .strict();

export type ListSectionsInput = z.infer<typeof listSectionsInputSchema>;

export const getAgentResourceInputSchema = z
  .object({
    resource: z
      .enum(agentResourceKeys as [AgentResourceKey, ...AgentResourceKey[]])
      .describe('Which agent-layer file to return'),
  })
  .strict();

export type GetAgentResourceInput = z.infer<typeof getAgentResourceInputSchema>;

/** Convert a zod schema to a JSON Schema object for tools/list. */
export function toInputJsonSchema(schema: z.ZodTypeAny): Record<string, unknown> {
  // Loosely typed call: the library's generic return type recurses deeply
  // enough to trip TS2589 without changing the runtime value at all.
  const convert = zodToJsonSchema as unknown as (
    input: z.ZodTypeAny,
    options: { $refStrategy: 'none' }
  ) => Record<string, unknown>;
  return convert(schema, { $refStrategy: 'none' });
}
