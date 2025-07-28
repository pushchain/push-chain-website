// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

import PushLogo from '@site/static/assets/website/brb/pushIcon.svg';
import ChainLogoDark from '@site/static/assets/website/chain/ChainLogoDark.svg';

import { ItemV } from '../../src/css/SharedStyling';

function TOS() {
  // Redirect to Home Page
  useEffect(() => {
    window.location.href = 'https://t.me/+dHOCilvxNR9jZjM9';
  }, []);

  return (
    <Container>
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Donut Early Pass is here' />
        <meta
          name='og:description'
          content='Donut is the closed beta for devs who don’t sleep.…mmm Donuts! 🍩 🎟️ Be one of the first to grab it and get access to Push Chain Testnet'
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
        <meta name='twitter:title' content='Donut Early Pass is here' />
        <meta
          name='twitter:description'
          content='Donut is the closed beta for devs who don’t sleep.…mmm Donuts! 🍩 🎟️ Be one of the first to grab it and get access to Push Chain Testnet'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/testnet-donut-secretpreview.webp')
              .default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Chain',
            description: 'Any Chain. Any Wallet. Any App',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-chain',
            ],
          })}
        </script>
      </Head>

      <PushLogoBlackContainer className='headerlogo' flex='initial'>
        <PushLogo style={{ margin: '0px 9px 0px 4px' }} />
        <ChainLogoDark />
      </PushLogoBlackContainer>
      <Message>Redirecting...</Message>
    </Container>
  );
}

export default TOS;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
  text-align: center;
`;

const PushLogoBlackContainer = styled(ItemV)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
`;

const Message = styled.p`
  font-size: 18px;
  margin-top: 8px;
`;
