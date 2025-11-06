// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import ChainLogoDark from '@site/static/assets/website/chain/ChainLogoDark.svg';

// Internal Component
import { ItemV } from '../../src/css/SharedStyling';

// External Components
import { useTranslation } from 'react-i18next';

function donutTestnetSecretPage() {
  // Internationalization
  const { t } = useTranslation();

  // Redirect to Home Page
  useEffect(() => {
    window.location.href = 'https://t.me/+dHOCilvxNR9jZjM9';
  }, []);

  return (
    <Container>
      <Head>
        {/* Title and Description */}
        <title>t({'pages.donutsecret.seo.title'})</title>
        <meta
          name='description'
          content={t('pages.donutsecret.seo.description')}
        />

        {/* <!-- Update Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={t('pages.donutsecret.seo.og-title')}
        />
        <meta
          property='og:description'
          content={t('pages.donutsecret.seo.og-description')}
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/testnet-donut-secretpreview.webp')
              .default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta name='twitter:creator' content='@PushChain' />
        <meta
          name='twitter:title'
          content={t('pages.donutsecret.seo.twitter-title')}
        />
        <meta
          name='twitter:description'
          content={t('pages.donutsecret.seo.twitter-description')}
        />

        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/testnet-donut-secretpreview.webp')
              .default,
            { absolute: true }
          )}
        />
      </Head>

      <PushLogoBlackContainer className='headerlogo' flex='initial'>
        <ChainLogoDark />
      </PushLogoBlackContainer>
      <Message>Redirecting...</Message>
    </Container>
  );
}

export default donutTestnetSecretPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-condtent: center;
  height: 100dvh;
  background-color: black;
  color: white;
  text-align: center;
`;

const PushLogoBlackContainer = styled(ItemV)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--ifm-color-white);
`;

const Message = styled.p`
  font-size: 18px;
  margin-top: 8px;
`;
