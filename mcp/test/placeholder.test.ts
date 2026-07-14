import { findPlaceholders, stripCodeAndLinks } from '../src/build/placeholder';

describe('findPlaceholders', () => {
  it('detects raw Docusaurus theme keys in prose', () => {
    expect(findPlaceholders('Intro. theme.docs.DocCard.categoryDescription here.')).toEqual([
      'theme.docs.DocCard.categoryDescription',
    ]);
  });

  it('detects raw site i18n keys in prose', () => {
    expect(findPlaceholders('See pages.knowledge.seo.title for details.')).toEqual([
      'pages.knowledge.seo.title',
    ]);
  });

  it('detects unresolved mustache interpolation', () => {
    // A namespaced key inside braces legitimately reports both patterns.
    expect(findPlaceholders('Welcome {{pages.faq.title}} user')).toContain('{{pages.faq.title}}');
    expect(findPlaceholders('Welcome {{count}} user')).toEqual(['{{count}}']);
  });

  it('ignores keys and mustaches inside code blocks and inline code', () => {
    const markdown = [
      'Legit prose.',
      '```ts',
      "const key = 'theme.docs.DocCard.categoryDescription';",
      "const tpl = '{{value}}';",
      '```',
      'Inline `pages.knowledge.seo.title` reference.',
    ].join('\n');
    expect(findPlaceholders(markdown)).toEqual([]);
  });

  it('ignores urls and link targets that look like dotted keys', () => {
    expect(findPlaceholders('Visit https://global.push.org/pages.thing.here now')).toEqual([]);
    expect(findPlaceholders('[label](https://x.dev/theme.docs.a.b)')).toEqual([]);
  });

  it('does not flag short dotted identifiers', () => {
    expect(findPlaceholders('The theme.docs page and footer.links entry are fine.')).toEqual([]);
  });
});

describe('stripCodeAndLinks', () => {
  it('removes fenced blocks, inline code, and urls', () => {
    const out = stripCodeAndLinks('a ```x\ncode\n``` b `inline` c https://push.org/d e');
    expect(out).not.toContain('code');
    expect(out).not.toContain('inline');
    expect(out).not.toContain('push.org');
  });
});
