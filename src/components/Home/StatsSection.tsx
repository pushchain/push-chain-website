// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import { styled } from 'styled-components';

// External Components
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';

// Internal Components
import { device } from '@site/src/config/globals';
import instantInteroperability from '@site/static/assets/website/interoperability/instant-interoperability.json';

// Import Assets
import StatsBg from '../../../static/assets/website/chain/StatsSectionBG.webp';
import { H2, H3, ItemH, ItemV, Span } from '../../css/SharedStyling';
import useMediaQuery from '../../hooks/useMediaQuery';

// Internal Configs
import { StatsList } from '../../config/StatsList';

export const StatsSection = () => {
  // Internationalization
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery(device.mobileL);
  return (
    <StatsWrapper>
      <TextSection>
        <H2>
          {t('home.stats-section.title')} {isMobile && <br />}{' '}
          <ColoredText>{t('home.stats-section.titleGradient')}</ColoredText>{' '}
          <br /> {t('home.stats-section.titleThird')}
        </H2>

        <Span className='regular-text'>
          {t('home.stats-section.description')}
        </Span>
      </TextSection>

      {/* <LottieContainer>
        <Lottie animationData={instantInteroperability} loop={true} autoplay={true} />
      </LottieContainer> */}

      <StatsGrid>
        <Lottie
          animationData={instantInteroperability}
          loop={true}
          autoplay={true}
          style={{
            position: 'absolute',
            top: 85,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: 0.3,
          }}
        />
        {StatsList.map((item, index) => (
          <StatsItem key={index}>
            <H3>{t(item.title)}</H3>
            {item.image && (
              <img
                src={item.image}
                srcSet={item.srcSet}
                alt={t(item.imagealt)}
                title={t(item.imagetitle)}
              />
            )}
            <Span>{t(item.description)}</Span>
          </StatsItem>
        ))}
      </StatsGrid>
    </StatsWrapper>
  );
};

const GlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(179, 72, 236, 0.2);
  filter: blur(125px);
  pointer-events: none;
  z-index: 999999;

  width: 529px;
  height: 529px;
  left: 346px;
  top: 159px;

  @media ${device.tablet} {
    width: 438px;
    height: 438px;
    left: 178px;
    top: 159px;
  }

  @media ${device.mobileL} {
    width: 395px;
    height: 392px;
    left: 12px;
    top: 252px;
  }
`;

const StatsWrapper = styled.div`
  width: 100%;
  padding-bottom: 100px;
  margin-top: 100px;

  @media ${device.tablet} {
    background-size: contain;
    background-position: bottom;
    padding-bottom: 0px;
    margin-top: 0px;
  }

  @media ${device.mobileL} {
    background-size: contain;
    background-position: center 30%;
    padding-bottom: 0px;
  }
`;

const TextSection = styled(ItemH)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 99;

  h2 {
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-size: 3rem;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.96px;
  }

  .regular-text {
    max-width: 400px;

    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.4px;
  }

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobileL} {
    span {
      margin: 10px 0 0 0;
    }
  }
`;

const StatsGrid = styled.div`
  margin: 100px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }

  h3 {
    color: #FFF;
    text-align: center;
    text-edge: cap;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 120%
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  span {
    color: #FFF;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-size: 52px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -1.04px;
  }
`;

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;

  @media ${device.mobileL} {
    margin: 100px 0 0 0;
  }
`;

const ColoredText = styled.span`
  color: #d548ec;
  leading-trim: both;
  text-edge: cap;
  font-size: 3rem
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.96px;
`;

const LottieContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  @media ${device.tablet} {
    display: none;
  }
`;
