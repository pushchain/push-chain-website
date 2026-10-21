// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

// External Components
import { useTranslation } from 'react-i18next';

// Internal Components
import SchemaMarkup from '@site/src/components/SEO/SchemaMarkup';
import HomeComp from '@site/src/pages-composition/homeComp';

// Create the HomePage component
function HomePage() {
  // Internationalization
  const { t } = useTranslation();

  const homeFaqs = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'].map(
    (faqKey) => ({
      question: t(`components.home-agent-faq.faqs.${faqKey}.question`),
      answer: t(`components.home-agent-faq.faqs.${faqKey}.answer`),
    })
  );

  return (
    <Layout
      title={t('pages.home.seo.title')}
      description={t('pages.home.seo.description')}
      showNavbar='website'
    >
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>{t('pages.home.seo.title')}</title>
        <meta name='description' content={t('pages.home.seo.description')} />
        <meta name='keywords' content={t('pages.home.seo.keywords')} />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={t('pages.home.seo.og-title')} />
        <meta
          property='og:description'
          content={t('pages.home.seo.og-description')}
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/homepreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta name='twitter:creator' content='@PushChain' />
        <meta
          name='twitter:title'
          content={t('pages.home.seo.twitter-title')}
        />
        <meta
          name='twitter:description'
          content={t('pages.home.seo.twitter-description')}
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/homepreview.png').default,
            { absolute: true }
          )}
        />
      </Head>

      {/* FAQ Schema Markup for the homepage's agent-focused FAQ */}
      <SchemaMarkup type='FAQPage' faqs={homeFaqs} />

      {/* Render Home Content */}
      <HomeComp />
    </Layout>
  );
}

export default HomePage;
