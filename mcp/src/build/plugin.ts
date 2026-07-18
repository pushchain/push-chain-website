import * as path from 'node:path';
import type { LoadContext, Plugin } from '@docusaurus/types';
import { buildMcpArtifacts } from './artifacts';

export interface PushMcpPluginOptions {
  docsRouteBasePath?: string;
  /** Directory with the agent-layer JSON files, relative to the site dir. */
  agentsDir?: string;
  /** Directory with the docs markdown sources, relative to the site dir. */
  docsDir?: string;
}

/**
 * Docusaurus plugin that generates the MCP artifacts (search index, clean
 * markdown per page, manifest, skipped log, agent-layer copies) into
 * build/mcp/ after the site build finishes. The serverless /api
 * function serves exactly these artifacts; nothing is computed at runtime.
 */
export default function pushMcpPlugin(
  context: LoadContext,
  options: PushMcpPluginOptions = {}
): Plugin<undefined> {
  return {
    name: 'docusaurus-plugin-push-mcp',

    async postBuild({ outDir, routesPaths, siteConfig }): Promise<void> {
      await buildMcpArtifacts({
        outDir,
        siteDir: context.siteDir,
        siteUrl: siteConfig.url.replace(/\/+$/, ''),
        baseUrl: siteConfig.baseUrl,
        routes: [...routesPaths],
        docsRouteBasePath: options.docsRouteBasePath ?? '/docs',
        docsDir: path.join(context.siteDir, options.docsDir ?? 'docs'),
        agentsDir: path.join(context.siteDir, options.agentsDir ?? 'static/agents'),
        locale: siteConfig.i18n.defaultLocale,
        docsVersion: 'current',
      });
    },
  };
}
