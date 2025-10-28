/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import styled from 'styled-components';

export default function BlogPostItemContainer({ children, className }) {
  const {
    frontMatter,
    assets,
    metadata: { description },
  } = useBlogPost();
  const { withBaseUrl } = useBaseUrlUtils();
  const image = assets.image ?? frontMatter.image;
  const keywords = frontMatter.keywords ?? [];
  return (
    <StyledArticle
      className={className}
      itemProp='blogPost'
      itemScope
      itemType='https://schema.org/BlogPosting'
    >
      {description && <meta itemProp='description' content={description} />}
      {image && (
        <link itemProp='image' href={withBaseUrl(image, { absolute: true })} />
      )}
      {keywords.length > 0 && (
        <meta itemProp='keywords' content={keywords.join(',')} />
      )}
      {children}
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  @media (min-width: 1200px) {
    max-width: 75%;
  }
`;
