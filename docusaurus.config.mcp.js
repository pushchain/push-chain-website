// @ts-check
/**
 * Docs-only Docusaurus config for the mcp.push.org deployment.
 *
 * The MCP artifacts are extracted from rendered docs pages, so the Vercel
 * build only needs the docs, not the blog, landing pages, or analytics.
 * This config derives from the main docusaurus.config.js at require time,
 * so changes to the docs setup propagate automatically; it overrides just
 * what the mirror should not ship:
 *   - no blog plugin, no src/pages, no sitemap, no gtag, no hotjar
 *   - onBrokenLinks downgraded to warn (links to routes that only exist
 *     on the full site, like the homepage, are expected here)
 *   - robots.txt overwritten to disallow all crawling; the canonical site
 *     stays push.org and this mirror must not be indexed (an X-Robots-Tag
 *     header in vercel.json covers crawlers that ignore robots.txt)
 *
 * The site url stays https://push.org on purpose: extracted pages, search
 * results, and MCP resource URIs must carry canonical push.org URLs.
 */
const fs = require('fs');
const path = require('path');
const base = require('./docusaurus.config.js');

function mirrorRobotsPlugin() {
  return {
    name: 'mcp-mirror-robots',
    async postBuild({ outDir }) {
      fs.writeFileSync(
        path.join(outDir, 'robots.txt'),
        'User-agent: *\nDisallow: /\n',
        'utf8'
      );
    },
  };
}

const [presetName, basePresetOptions] = base.presets[0];

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...base,
  onBrokenLinks: 'warn',
  headTags: (base.headTags ?? []).filter((tag) => tag.tagName !== 'script'),
  plugins: [
    // The blog does not ship on the mirror, and the client redirects point
    // at full-site routes (like /knowledge) that do not exist here, which
    // would fail the redirect plugin's target validation.
    ...(base.plugins ?? []).filter(
      (plugin) =>
        !(
          Array.isArray(plugin) &&
          ['./plugins/blog-plugin', '@docusaurus/plugin-client-redirects'].includes(plugin[0])
        )
    ),
    mirrorRobotsPlugin,
  ],
  presets: [
    [
      presetName,
      {
        ...basePresetOptions,
        gtag: false,
        pages: false,
        sitemap: false,
      },
    ],
  ],
};

module.exports = config;
