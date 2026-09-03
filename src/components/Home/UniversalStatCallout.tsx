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
import { A, ItemH } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { device } from '@site/src/config/globals';

export default function UniversalStatCallout() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(device.mobileL);

  return (
    <CalloutRow flexDirection={isMobile ? 'column' : 'row'}>
      <CalloutLeft>
        <StatBlock>
          <StatValue>{t('pages.home.feature-grid-b.stat-callout.value')}</StatValue>
          <StatLabel>{t('pages.home.feature-grid-b.stat-callout.value-label')}</StatLabel>
        </StatBlock>
        <CalloutText>
          {t('pages.home.feature-grid-b.stat-callout.text')}
        </CalloutText>
      </CalloutLeft>

      <A
        href={useBaseUrl('/docs')}
        title={t('pages.home.feature-grid-b.stat-callout.cta-title')}
        aria-label={t('pages.home.feature-grid-b.stat-callout.cta-aria-label')}
        background='var(--ifm-color-custom-pink)'
        borderRadius='16px'
        border='1px solid rgba(255, 255, 255, 0.30)'
        fontSize='1.125rem'
        fontWeight='600'
        letterSpacing='-0.03em'
        lineHeight='1rem'
        padding='16px 32px'
        zIndex='2'
      >
        {t('pages.home.feature-grid-b.stat-callout.cta')}
        <BsArrowRight className='start-svg' />
      </A>
    </CalloutRow>
  );
}

const CalloutRow = styled(ItemH)`
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 24px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    /* Figma gives this button an explicit 58px height. */
    min-height: 58px;
    box-sizing: border-box;
  }

  @media ${device.laptop} {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  @media ${device.mobileL} {
    a {
      width: 100%;
    }
  }
`;

const CalloutLeft = styled(ItemH)`
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #f5f1ff 3.116%, #aa48ec 109.09%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
`;

const StatBlock = styled.div`
  display: flex;
  /* The number and the label sit on one baseline, as Figma draws them — its
     boxes both end at y=58 under cap-height trim. Aligning the boxes instead
     dropped the label 8px low: at 77px the value's baseline is 10.4px above
     its box bottom, at 20px the label's is only 2.7px above its own. Falls
     back to the box alignment where last-baseline is unsupported. */
  align-items: flex-end;
  align-items: last baseline;
`;

const StatValue = styled(GradientText)`
  font-size: 4.8125rem;
  letter-spacing: -1.54px;
  line-height: 1;
`;

const StatLabel = styled(GradientText)`
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  /* Figma sets 20px leading on the 20px label — the two lines sit tight. */
  line-height: 20px;
  white-space: pre-line;
  margin-left: 4px;
`;

const CalloutText = styled.p`
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 1.75rem;
  letter-spacing: -0.56px;
  line-height: 1.4;
  color: var(--ifm-color-white);
  /* Two fixed lines, per Figma's split of this sentence. */
  white-space: pre-line;

  @media ${device.tablet} {
    font-size: 1.375rem;
  }

  @media ${device.mobileL} {
    font-size: 1.125rem;
    /* Let the sentence reflow rather than forcing the desktop break. */
    white-space: normal;
  }
`;
