import { agentResourceKeys, getAgentResourceInputSchema, toInputJsonSchema } from '../../shared/schemas';
import type { RegisteredTool, ToolContext, ToolOutcome } from './types';
import { errorResult, invalidParams, okResult } from './types';

async function execute(ctx: ToolContext, rawArgs: unknown): Promise<ToolOutcome> {
  const parsed = getAgentResourceInputSchema.safeParse(rawArgs ?? {});
  if (!parsed.success) return invalidParams(parsed.error);

  const raw = await ctx.store.readAgentResource(parsed.data.resource);
  if (raw === undefined) {
    return errorResult(
      `Agent resource "${parsed.data.resource}" was not bundled in this build. ` +
        `Available: ${Object.keys(ctx.store.manifest.agentResources).join(', ')}`
    );
  }

  // Artifact JSON was validated at build time; parse cannot fail here.
  const structured = JSON.parse(raw) as Record<string, unknown>;
  return okResult(structured, raw);
}

export const getAgentResourceTool: RegisteredTool = {
  name: 'get_agent_resource',
  title: 'Get a Push Chain agent-layer file',
  description:
    'Returns the raw JSON of one push.org agent-layer file, snapshotted at build time. ' +
    `Resources: ${agentResourceKeys.join(', ')}. These mirror https://push.org/agents/.`,
  inputJsonSchema: toInputJsonSchema(getAgentResourceInputSchema),
  execute,
};
