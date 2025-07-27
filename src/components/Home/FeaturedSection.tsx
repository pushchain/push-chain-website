// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */
import styled from 'styled-components';

import { H2, ItemV, Span } from '@site/src/css/SharedStyling';
import StarSolidIcon from '@site/static/assets/website/illustrations/starSolidIcon.svg';
import FeaturedBg from '@site/static/assets/website/coverage/FeaturedBg.webp';
import MobileFeaturedBg from '@site/static/assets/website/coverage/FeaturedBgMobile.webp';

import { FeaturedSectionMarquee } from './FeaturedSectionMarquee';

import useMediaQuery from '@site/src/hooks/useMediaQuery';
import { device } from '@site/src/config/globals';

export const FeaturedSection = () => {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <FeatureWrapper>
      <ItemV
        maxWidth={isTablet ? '100%' : '320px'}
        padding={isTablet && '64px 0 24px 0'}
        alignItems='flex-start'
      >
        <StarWithText>
          <StarSolidIcon color='#D98AEC' />
          <H2
            color='#D98AEC'
            fontSize={'0.875rem'}
            fontWeight='500'
            letterSpacing='0.6px'
            lineHeight='120%'
          >
            FEATURED ON
          </H2>
        </StarWithText>
        <H2
          color='#000'
          fontSize={'3rem'}
          fontWeight='600'
          lineHeight='130%'
          margin='8px 0 0 0'
        >
          Push Chain in the Spotlight
        </H2>

        <Span
          color='#514E4E'
          fontSize={'1.25rem'}
          fontWeight='400'
          letterSpacing='-0.4px'
          lineHeight='150%'
          margin='24px 0 0 0'
        >
          Don’t just take our word for it. See what the media is saying about
          the true universal chain.
        </Span>
      </ItemV>

      <FeaturedSectionMarquee />
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div`
  margin: 64px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 64px);
  background-color: #f8cefa;
  padding: 0px 64px;
  min-height: 610px;
  max-height: 610px;
  border-radius: 48px;

  background-image: url(${FeaturedBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1600px) {
    width: 1300px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    padding: 0px 24px;
    width: 100%;
    min-height: 950px;
    max-height: 950px;
  }

  @media ${device.mobileL} {
    background-image: url(${MobileFeaturedBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const StarWithText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
`;
