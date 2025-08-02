/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';

// Safe wrapper for BlogPostProvider that validates content structure
function SafeBlogPostProvider({ content, children, ...props }) {
  // Validate that content has the required structure
  if (!content || typeof content !== 'function') {
    console.warn('Invalid content: expected function component', content);
    return null;
  }

  if (!content.metadata) {
    console.warn('Invalid content: missing metadata', content);
    return null;
  }

  if (!content.frontMatter) {
    console.warn('Invalid content: missing frontMatter', content);
    return null;
  }

  // Ensure required metadata properties exist
  if (!content.metadata.permalink) {
    console.warn(
      'Invalid content: missing permalink in metadata',
      content.metadata
    );
    return null;
  }

  // If all validations pass, render the BlogPostProvider
  return (
    <BlogPostProvider content={content} {...props}>
      {children}
    </BlogPostProvider>
  );
}

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
  list,
}) {
  return (
    <>
      {items?.map(({ content: BlogPostContent }) => {
        return (
          <SafeBlogPostProvider
            key={BlogPostContent?.metadata?.permalink || Math.random()}
            content={BlogPostContent}
          >
            <BlogPostItemComponent list={list}>
              <BlogPostContent />
            </BlogPostItemComponent>
          </SafeBlogPostProvider>
        );
      })}
    </>
  );
}
