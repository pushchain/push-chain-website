import React, { type ReactNode } from 'react';
import Head from '@docusaurus/Head';
import { PageMetadata } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function DocItemMetadata(): ReactNode {
  const { metadata, frontMatter, assets } = useDoc();
  const image = assets.image ?? frontMatter.image;
  return (
    <>
      <PageMetadata
        title={metadata.title}
        description={metadata.description}
        keywords={frontMatter.keywords}
        image={image}
      />
      {image && (
        <Head>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@PushChain' />
          <meta name='twitter:creator' content='@PushChain' />
        </Head>
      )}
    </>
  );
}
