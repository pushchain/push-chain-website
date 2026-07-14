import { parse } from 'node-html-parser';
import type { HTMLElement as ParsedElement } from 'node-html-parser';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import type { ExtractedPage } from '../shared/types';

/**
 * Turns one rendered Docusaurus HTML page into clean markdown. Everything
 * that is site chrome rather than document content is stripped: navbar,
 * breadcrumbs, table of contents, pagination, footers, edit links, copy
 * buttons, and skip links. Code blocks are rebuilt as fenced markdown from
 * the Prism token lines so no syntax highlighting markup leaks through.
 */

const CONTENT_SELECTORS = ['article .theme-doc-markdown', 'article', 'main'];

const STRIP_SELECTORS = [
  'script',
  'style',
  'svg',
  'button',
  'a.hash-link',
  'nav.theme-doc-breadcrumbs',
  'nav.pagination-nav',
  '.theme-doc-toc-mobile',
  '.theme-doc-toc-desktop',
  '.tocCollapsible',
  'footer.theme-doc-footer',
  '.theme-edit-this-page',
  '.theme-doc-version-badge',
  '.theme-doc-version-banner',
  '.theme-last-updated',
];

interface CapturedCodeBlock {
  lang: string;
  text: string;
}

const CODE_MARKER_ATTR = 'data-mcp-code';

function decodeBasicEntities(value: string): string {
  return value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&amp;/g, '&');
}

function languageFromClass(className: string): string {
  const match = /language-([\w+-]+)/.exec(className);
  return match?.[1] ?? '';
}

/**
 * Replaces every Docusaurus code block with a placeholder <pre> element and
 * records its language and exact text. A dedicated turndown rule later
 * emits the fenced block verbatim, bypassing markdown escaping.
 */
function captureCodeBlocks(content: ParsedElement): CapturedCodeBlock[] {
  const captured: CapturedCodeBlock[] = [];
  const containers = content.querySelectorAll('.theme-code-block, pre.prism-code');
  const seen = new Set<ParsedElement>();
  for (const el of containers) {
    const container = el.classList.contains('theme-code-block')
      ? el
      : (el.closest('.theme-code-block') as ParsedElement | null) ?? el;
    if (seen.has(container)) continue;
    seen.add(container);
    const pre = container.tagName === 'PRE' ? container : container.querySelector('pre');
    const classSource = `${container.getAttribute('class') ?? ''} ${pre?.getAttribute('class') ?? ''}`;
    const lang = languageFromClass(classSource);
    const lines = pre?.querySelectorAll('.token-line') ?? [];
    // Prism token lines already carry a trailing newline; strip it so the
    // join does not double-space the code.
    const text =
      lines.length > 0
        ? lines.map((line) => line.text.replace(/\n+$/, '')).join('\n')
        : (pre?.text ?? container.text);
    const index = captured.length;
    captured.push({ lang, text: text.replace(/\s+$/, '') });
    // The placeholder must have text content: turndown short-circuits
    // "blank" elements before rules run, so an empty pre would be dropped.
    container.replaceWith(`<pre ${CODE_MARKER_ATTR}="${index}">${index}</pre>`);
  }
  return captured;
}

function createTurndown(codeBlocks: CapturedCodeBlock[]): TurndownService {
  const service = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
  });
  service.use(gfm);
  service.addRule('mcpCapturedCode', {
    filter: (node) =>
      node.nodeName === 'PRE' && node.getAttribute(CODE_MARKER_ATTR) !== null,
    replacement: (_content, node) => {
      const attr = (node as HTMLElement).getAttribute(CODE_MARKER_ATTR);
      const block = attr !== null ? codeBlocks[Number(attr)] : undefined;
      if (block === undefined) return '';
      return `\n\n\`\`\`${block.lang}\n${block.text}\n\`\`\`\n\n`;
    },
  });
  return service;
}

/** Reduces markdown to plain text for search indexing and snippets. */
export function markdownToPlain(markdown: string): string {
  return markdown
    .replace(/```[\w+-]*\n?/g, ' ')
    .replace(/~~~[\w+-]*\n?/g, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[`*_>#|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractPage(html: string): ExtractedPage | null {
  // By default node-html-parser keeps <pre> content as raw unparsed text,
  // which would hide the Prism token lines from querySelectorAll. Only
  // script, noscript, and style stay raw; they are stripped anyway.
  const root = parse(html, {
    blockTextElements: { script: true, noscript: true, style: true },
  });

  let content: ParsedElement | null = null;
  for (const selector of CONTENT_SELECTORS) {
    content = root.querySelector(selector);
    if (content !== null) break;
  }
  if (content === null) return null;

  for (const selector of STRIP_SELECTORS) {
    for (const el of content.querySelectorAll(selector)) {
      el.remove();
    }
  }

  const h1 = content.querySelector('h1') ?? root.querySelector('h1');
  const docTitle = root.querySelector('title')?.text.split('|')[0]?.trim();
  const title = h1?.text.trim() ?? docTitle ?? '';
  if (title.length === 0) return null;

  const descriptionAttr = root
    .querySelector('meta[name="description"]')
    ?.getAttribute('content');
  const description =
    descriptionAttr !== undefined && descriptionAttr.length > 0
      ? decodeBasicEntities(descriptionAttr)
      : undefined;

  const headings = content
    .querySelectorAll('h2, h3')
    .map((el) => el.text.replace(/\u200B/g, '').trim())
    .filter((text) => text.length > 0);

  const codeBlocks = captureCodeBlocks(content);
  const markdown = createTurndown(codeBlocks)
    .turndown(content.toString())
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return {
    title,
    description,
    markdown: `${markdown}\n`,
    headings,
    plain: markdownToPlain(markdown),
  };
}
