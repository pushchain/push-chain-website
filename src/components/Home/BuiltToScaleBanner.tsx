// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { Content, Section } from '@site/src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';

// Import Assets
import RingPattern from '@site/static/assets/website/home/built-to-scale/ring-pattern.png';
import PushLogoMark from '@site/static/assets/website/home/built-to-scale/push-logo-mark.svg';

const FONT_MONO = "'IBM Plex Mono', monospace";

export default function BuiltToScaleBanner() {
  const { t } = useTranslation();

  return (
    <Section
      id='built-to-scale'
      aria-level='2'
      aria-label={t('pages.home.built-to-scale.section-aria-label')}
    >
      <Content alignSelf='center'>
        <BannerWrapper>
          <RingBackground aria-hidden='true' />
          <PinkCard>
            <LogoMark aria-hidden='true'>
              <PushLogoMark />
            </LogoMark>
            <Heading>
              <span>{t('pages.home.built-to-scale.title-line1')}</span>
              <span>{t('pages.home.built-to-scale.title-line2')}</span>
            </Heading>
          </PinkCard>
        </BannerWrapper>
      </Content>
    </Section>
  );
}

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 48px;
  padding: 44px 0;
  background: var(--ifm-color-custom-pink);
`;

const RingBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${RingPattern});
  background-size: cover;
  background-position: center 30%;
  mix-blend-mode: lighten;
  pointer-events: none;
`;

const PinkCard = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  background: var(--ifm-color-custom-pink);
  border-radius: 24px;

  @media ${device.mobileL} {
    max-width: 100%;
    margin: 0 16px;
  }
`;

const LogoMark = styled.div`
  width: 46px;
  height: auto;
  display: flex;

  svg {
    width: 100%;
    height: auto;
  }
`;

const Heading = styled.h2`
  margin: 0;
  text-align: center;
  color: var(--ifm-color-white);
  font-family: ${FONT_MONO};
  font-weight: 500;
  font-size: 38px;
  letter-spacing: -0.06em;
  line-height: 1.2;

  span {
    display: block;
  }

  @media ${device.mobileL} {
    font-size: 22px;
  }
`;
