/* eslint-disable @docusaurus/prefer-docusaurus-heading */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import styled from 'styled-components';

// Internal Configs
import { device } from '@site/src/config/globals';

// Very simple pluralization: probably good enough for now
function useBlogPostsPlural() {
  const { selectMessage } = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.blog.post.plurals',
          description:
            'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One post|{count} posts',
        },
        { count }
      )
    );
}
function useBlogTagsPostsPageTitle(tag) {
  const blogPostsPlural = useBlogPostsPlural();
  return translate(
    {
      id: 'theme.blog.tagTitle',
      description: 'The title of the page for a blog tag',
      message: '{nPosts} tagged with "{tagName}"',
    },
    { nPosts: blogPostsPlural(tag.count), tagName: tag.label }
  );
}
function BlogTagsPostsPageMetadata({ tag }) {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag='blog_tags_posts' />
    </>
  );
}
function BlogTagsPostsPageContent({ tag, items, listMetadata }) {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <BlogLayout>
      <TagsHeader>
        <h1>{title}</h1>

        <Link href={tag.allTagsPath}>
          <Translate
            id='theme.tags.tagsPageLink'
            description='The label of the link targeting the tag list page'
          >
            View All Tags
          </Translate>
        </Link>
      </TagsHeader>

      <GridItem>
        <BlogPostItems
          items={
            items?.filter((item) => {
              return (
                item &&
                item.content &&
                typeof item.content === 'function' &&
                item.content.metadata &&
                item.content.frontMatter
              );
            }) || []
          }
        />
        <BlogListPaginator metadata={listMetadata} />
      </GridItem>
    </BlogLayout>
  );
}
export default function BlogTagsPostsPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage
      )}
    >
      <BlogTagsPostsPageMetadata {...props} />
      <BlogTagsPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}

const TagsHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1120px !important;
  margin: 20px auto 0 auto;

  @media ${device.tablet} {
    flex-direction: column;
    width: 90% !important;
    align-items: flex-start;
  }
`;

const GridItem = styled.div`
  width: 1120px !important;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 33px;
  box-sizing: border-box;
  margin: 50px auto 0 auto;

  @media ${device.laptopL} {
    width: 90% !important;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
