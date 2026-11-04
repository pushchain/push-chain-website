import React, { type ReactNode } from 'react';
import SearchBar from '@theme-original/SearchBar';
import type SearchBarType from '@theme/SearchBar';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';

type Props = WrapperProps<typeof SearchBarType>;

// TODO: confirm with maintainers how blog records are tagged once the
// blog is added to the Algolia crawler (post pages currently use the
// "default" docusaurus_tag, the blog list page uses "blog_posts_list").
const BLOG_FACET_FILTER = 'docusaurus_tag:blog_posts_list';
const DOCS_FACET_FILTER = 'docusaurus_tag:docs-default-current';

export default function SearchBarWrapper(props: Props): ReactNode {
  const { pathname } = useLocation();
  const isBlog = pathname.startsWith('/blog');

  return (
    <SearchBar
      {...props}
      contextualSearch={false}
      searchParameters={{
        facetFilters: [isBlog ? BLOG_FACET_FILTER : DOCS_FACET_FILTER],
      }}
    />
  );
}
