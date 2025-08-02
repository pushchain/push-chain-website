import React from 'react';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
  list,
}) {
  return (
    <>
      {items?.map(({ content: BlogPostContent }, index) => {
        // Ensure BlogPostContent is a function/component
        if (typeof BlogPostContent !== 'function') {
          console.warn(
            `Skipping item at index ${index}: content is not a valid React component.`
          );
          return null;
        }

        const metadata = BlogPostContent?.metadata;
        const frontMatter = BlogPostContent?.frontMatter;

        if (!metadata || !frontMatter || !metadata.permalink) {
          console.warn(
            `Skipping invalid blog post metadata at index ${index}.`,
            {
              metadata,
              frontMatter,
            }
          );
          return null;
        }

        return (
          <BlogPostProvider key={metadata?.permalink} content={BlogPostContent}>
            <BlogPostItemComponent list={list}>
              <BlogPostContent />
            </BlogPostItemComponent>
          </BlogPostProvider>
        );
      })}
    </>
  );
}
