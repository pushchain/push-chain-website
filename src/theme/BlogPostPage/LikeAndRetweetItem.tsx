// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
//
import React from 'react';

import styled from 'styled-components';
import Link from '@docusaurus/Link';
import { BsHeart, BsTwitterX } from 'react-icons/bs';

import { device } from '@site/src/config/globals';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import { useTweetMetrics } from '@site/src/api/GetTwitterMetrics';

import { H2, ItemH } from '@site/src/css/SharedStyling';
import { formatTwitterCount } from '@site/src/utils/FormatTwitterCount';

const LikeAndRetweetItem = ({ twitterId, text }) => {
  const isMobile = useMediaQuery(device.tablet);
  const { data: twitterData } = useTweetMetrics(twitterId);

  if (!twitterData) return null;

  return (
    <ShareRow>
      <ResponsiveH2
        weight='500'
        spacing='-0.02em'
        lineHeight='110%'
        color='#00000'
      >
        {text}
      </ResponsiveH2>

      <ItemH
        justifyContent='flex-end'
        flexWrap='nowrap'
        gap='8px'
        margin={isMobile && '20px 0 0 0'}
      >
        <LikeButton
          title='Developer Docs'
          self={isMobile ? 'stretch' : 'self'}
          href={`https://x.com/PushChain/status/${twitterId}`}
          target='_blank'
          rel='noopener noreferrer'
          title='Like this post'
        >
          <BsHeart
            size={22}
            color='var(--ifm-color-primary-text)'
            style={{ marginRight: '10px' }}
          />
          {formatTwitterCount(twitterData?.like_count) || ''}
        </LikeButton>

        <RetweetButton
          title='Developer Docs'
          href={`https://twitter.com/intent/retweet?tweet_id=${twitterId}`}
          target='_blank'
          rel='noopener noreferrer'
          title='Retweet this post'
        >
          <BsTwitterX
            size={22}
            color='var(--ifm-color-white)'
            style={{ marginRight: '10px' }}
          />
          Retweet
        </RetweetButton>
      </ItemH>
    </ShareRow>
  );
};

const ResponsiveH2 = styled(H2)`
  font-size: 1.25rem;

  @media ${device.mobileL} {
    font-size: 1.25rem;
  }
`;

const ShareRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const RetweetButton = styled(Link)`
  background: var(--ifm-color-custom-pink);
  border-radius: 16px;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  color: var(--ifm-color-white);
  align-self: ${(props) => props.self};

  &:hover {
    color: var(--ifm-color-white);
    opacity: 0.8;
    cursor: pointer;
  }

  @media ${device.mobileL} {
    width: 100%;
    justify-content: center;
  }
`;

const LikeButton = styled(Link)`
  background: transparent;
  border-radius: 16px;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid var(--ifm-like-border-color);
  color: var(--ifm-color-primary-text);
  align-self: ${(props) => props.self};

  &:hover {
    color: var(--ifm-color-primary-text);
    opacity: 0.8;
    cursor: pointer;
  }

  @media ${device.mobileL} {
    width: 100%;
    justify-content: center;
  }
`;

export default LikeAndRetweetItem;
