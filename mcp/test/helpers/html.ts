/** Factories producing realistic Docusaurus theme-classic page HTML. */

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function codeBlock(lang: string, code: string): string {
  const lines = code
    .split('\n')
    .map(
      (line) =>
        `<div class="token-line" style="color:#2B2B30"><span class="token plain">${escapeHtml(line)}\n</span><br></div>`
    )
    .join('');
  return (
    `<div class="language-${lang} codeBlockContainer_x theme-code-block">` +
    `<div class="codeBlockContent_y">` +
    `<pre class="prism-code language-${lang} codeBlock_z thin-scrollbar"><code class="codeBlockLines_w">${lines}</code></pre>` +
    `<button type="button" class="clean-btn">Copy</button>` +
    `</div></div>`
  );
}

export function docPage(options: {
  title: string;
  description?: string;
  body: string;
}): string {
  const description = options.description ?? `${options.title} | Push Chain Docs`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(options.title)} | Push Chain Docs</title>
<meta name="description" content="${escapeHtml(description)}">
</head>
<body>
<nav class="navbar navbar--fixed-top"><a href="/">Push Logo</a><a href="/docs">Docs</a></nav>
<div id="__docusaurus">
<main class="docMainContainer_x">
<div class="container">
<aside class="theme-doc-sidebar-container"><nav class="menu"><a href="/docs/chain/">Sidebar link</a></nav></aside>
<article>
<nav class="theme-doc-breadcrumbs breadcrumbsContainer_x" aria-label="Breadcrumbs"><ul class="breadcrumbs"><li>Home</li><li>Docs</li></ul></nav>
<div class="theme-doc-markdown markdown">
<header><h1>${escapeHtml(options.title)}</h1></header>
${options.body}
</div>
<footer class="theme-doc-footer docusaurus-mt-lg"><a class="theme-edit-this-page" href="https://github.com/example/edit">Edit this page</a></footer>
<nav class="docusaurus-mt-lg pagination-nav" aria-label="Docs pages"><a class="pagination-nav__link" href="/next">Next page</a></nav>
</article>
<div class="theme-doc-toc-desktop"><ul><li><a href="#h">On this page</a></li></ul></div>
</div>
</main>
</div>
<footer class="footer">Site footer with theme.docs.leaked.key that must not count because it sits outside the article.</footer>
</body>
</html>`;
}
