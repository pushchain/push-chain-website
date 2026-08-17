// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';

// External Components
import { useTranslation } from 'react-i18next';
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';

// Internal Components
import { A, Content, H2, ItemV, Section } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { device } from '@site/src/config/globals';

const FONT_MONO = "'IBM Plex Mono', monospace";

export default function ClosingCTA() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(device.mobileL);

  return (
    <Section
      id='closing-cta'
      aria-level='2'
      aria-label={t('pages.home.closing-cta.section-aria-label')}
    >
      <Content alignSelf='center' overflow='visible'>
        {/* Reserved for the dot-matrix hand animation. Held at the design's
            footprint so dropping the real asset in needs no layout change. */}
        <AnimationSlot
          role='img'
          aria-label={t('pages.home.closing-cta.animation-aria-label')}
        />

        <CTABody>
          <H2
            fontFamily={FONT_MONO}
            fontSize={isMobile ? '1.75rem' : '3rem'}
            fontWeight='500'
            letterSpacing='-0.06em'
            lineHeight='120%'
            textAlign='center'
            color='var(--ifm-color-white)'
          >
            <span>{t('pages.home.closing-cta.title-line1')}</span>
            <br />
            <span>{t('pages.home.closing-cta.title-line2')}</span>
          </H2>

          <Subtitle>{t('pages.home.closing-cta.subtitle')}</Subtitle>

          <CTAButton
            href={useBaseUrl('/docs')}
            title={t('pages.home.closing-cta.cta-title')}
            aria-label={t('pages.home.closing-cta.cta-aria-label')}
          >
            {t('pages.home.closing-cta.cta')}
            <BsArrowRight aria-hidden='true' />
          </CTAButton>
        </CTABody>
      </Content>
    </Section>
  );
}

const AnimationSlot = styled.div`
  width: 100%;
  height: 420px;

  @media ${device.laptop} {
    height: 320px;
  }

  @media ${device.tablet} {
    height: 240px;
  }

  @media ${device.mobileL} {
    height: 160px;
  }
`;

const CTABody = styled(ItemV)`
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 48px;

  @media ${device.mobileL} {
    margin-top: 24px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.36px;
  color: var(--ifm-color-white);

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;

const CTAButton = styled(A)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 58px;
  padding: 16px 32px;
  margin-top: 24px;
  box-sizing: border-box;
  background: var(--ifm-color-custom-pink);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  color: var(--ifm-color-white);
  font-family: 'DM Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.03em;
`;
