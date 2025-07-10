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
        <meta
          property='og:title'
          content='Push Chain | Any Chain. Any Wallet. Any App'
        />
        <meta
          name='og:description'
          content='Push Chain is a shared state L1 blockchain for Universal Apps. Capable of doing transactions from any chain, unifying L1s & L2s and enabling apps from any chain to be accessed by the users of any chain.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/testnet-donut-secret.webp')
              .default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta
          name='twitter:title'
          content='Push Chain | Any Chain. Any User. Any App'
        />
        <meta
          name='twitter:description'
          content='Push Chain is a shared state L1 blockchain for Universal Apps. Capable of doing transactions from any chain, unifying L1s & L2s and enabling apps from any chain to be accessed by the users of any chain.'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/testnet-donut-secret.webp')
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
