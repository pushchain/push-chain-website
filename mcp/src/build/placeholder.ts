/**
 * Detection of raw, untranslated i18n placeholder keys in extracted page
 * content. Pages that ship placeholder keys instead of copy must never be
 * indexed or served; they are logged to build/mcp/skipped.json instead so
 * the team can fix the source.
 *
 * Grounded in this repo's real key formats:
 *   Docusaurus theme keys:   theme.docs.DocCard.categoryDescription
 *   Site react-i18next keys: pages.knowledge.seo.title (namespaces below)
 *   Unresolved interpolation: {{someKey}}
 */

const I18N_NAMESPACES = [
  'theme',
  'global',
  'header',
  'footer',
  'pages',
  'components',
  'notifications',
];

const KEY_PATTERN = new RegExp(
  `(?<![\\w./@-])(?:${I18N_NAMESPACES.join('|')})(?:\\.[A-Za-z0-9_-]+){2,}(?![\\w-])`,
  'g'
);

const MUSTACHE_PATTERN = /\{\{\s*[\w.$-]{1,80}\s*\}\}/g;

/**
 * Removes regions where dotted keys and mustache braces are legitimate:
 * fenced code blocks, inline code, link targets, and bare URLs. Detection
 * runs on what a human actually reads.
 */
export function stripCodeAndLinks(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/https?:\/\/\S+/g, ' ');
}

export function findPlaceholders(markdown: string): string[] {
  const prose = stripCodeAndLinks(markdown);
  const found = new Set<string>();
  for (const match of prose.matchAll(KEY_PATTERN)) {
    found.add(match[0]);
    if (found.size >= 10) break;
  }
  if (found.size < 10) {
    for (const match of prose.matchAll(MUSTACHE_PATTERN)) {
      found.add(match[0]);
      if (found.size >= 10) break;
    }
  }
  return [...found];
}
