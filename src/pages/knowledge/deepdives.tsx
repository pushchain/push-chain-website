// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React from 'react';

// Internal Component
import ChainKnowledgeBaseArticle from '../../components/Chain/ChainKnowledgeBaseArticle/ChainKnowledgeBaseArticle';

// Internal Configs
import { deepDivesContent } from '@site/src/components/Chain/content/deepdives';
import { PageMeta } from '@site/src/config/pageMeta';
function Page() {
  return (
    <Layout
      title={PageMeta.DEEPDIVES.pageTitle}
      description={PageMeta.DEEPDIVES.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content='https://push.org/chain/knowledge/deepdives'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Deepdives | Knowledge Base | Push Chain'
        />
        <meta
          name='og:description'
          content='Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you ❤️'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainknowledgepreview.png')
              .default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta
          name='twitter:title'
          content='Deepdives | Knowledge Base | Push Chain'
        />
        <meta
          name='twitter:description'
          content='Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you ❤️'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainknowledgepreview.png')
              .default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Chain',
            description: 'Any Chain. Any User. Any App',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <ChainKnowledgeBaseArticle item={deepDivesContent} />
    </Layout>
  );
}

export default Page;
