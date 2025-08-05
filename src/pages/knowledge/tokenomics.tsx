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
import { tokenomicsContent } from '@site/src/components/Chain/content/tokenomics';
import { PageMeta } from '@site/src/config/pageMeta';

function Page() {
  return (
    <Layout
      title={PageMeta.TOKENOMICS.pageTitle}
      description={PageMeta.TOKENOMICS.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content='https://push.org/chain/knowledge/push-chain-tokenomics'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Explore Tokenomics | Knowledge Base | Push Chain'
        />
        <meta
          name='og:description'
          content='Learn how Push Chains tokenomics incentivizes all actors and ensures sustainable network that is built to last'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/kbtokenomicspreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta
          name='twitter:title'
          content='Explore Tokenomics | Knowledge Base | Push Chain'
        />
        <meta
          name='twitter:description'
          content='Learn how Push Chains tokenomics incentivizes all actors and ensures sustainable network that is built to last'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/kbtokenomicspreview.png').default,
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

      <ChainKnowledgeBaseArticle item={tokenomicsContent} />
    </Layout>
  );
}

export default Page;
