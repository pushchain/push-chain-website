/**
 * CommonJS shim so docusaurus.config.js can load the compiled TypeScript
 * plugin. Compile it with: yarn build:mcp-plugin (wired into yarn build).
 * In development the compiled output may be absent; postBuild never runs
 * there, so a no-op plugin with a warning is safe. Production builds fail
 * loudly instead of silently shipping without MCP artifacts.
 */

let plugin;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugin = require('../../mcp/dist/build/plugin').default;
} catch (error) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'docusaurus-plugin-push-mcp: compiled plugin not found. Run "yarn build:mcp-plugin" ' +
        'before "docusaurus build". Original error: ' +
        String(error)
    );
  }
  console.warn(
    '[docusaurus-plugin-push-mcp] compiled plugin not found; running as a no-op. ' +
      'Run "yarn build:mcp-plugin" to enable it.'
  );
  plugin = function noopPushMcpPlugin() {
    return { name: 'docusaurus-plugin-push-mcp' };
  };
}

module.exports = plugin;
