// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { Content, H2, ItemH, ItemV, Section, Span } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { device } from '@site/src/config/globals';

const FONT_MONO = "'IBM Plex Mono', monospace";

export default function SolutionPanel() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(device.mobileL);

  return (
    <SolutionSection
      id='solution'
      aria-level='2'
      aria-label={t('pages.home.solution-panel.section-aria-label')}
    >
      <Content alignSelf='center'>
        <TextRow flexDirection={isMobile ? 'column' : 'row'}>
          <H2
            fontFamily={FONT_MONO}
            fontSize={isMobile ? '1.75rem' : '3rem'}
            fontWeight='500'
            letterSpacing='-0.06em'
            lineHeight='120%'
            color='var(--ifm-color-white)'
          >
            {/* Three fixed lines, per Figma. The design's 530px text box wraps
                naturally into "Making AI / Universally / accountable"; forcing
                the breaks keeps that shape at any container width instead of
                depending on where the copy happens to wrap. */}
            {t('pages.home.solution-panel.title-prefix')}
            <br />
            <GradientWord>{t('pages.home.solution-panel.title-highlight')}</GradientWord>
            <br />
            {t('pages.home.solution-panel.title-suffix')}
          </H2>
          <Span
            fontSize='1.25rem'
            lineHeight='150%'
            letterSpacing='0.4px'
            color='var(--ifm-color-white)'
          >
            {t('pages.home.solution-panel.paragraph')}
          </Span>
        </TextRow>

        <SolutionPlaceholder aria-hidden='true' />
      </Content>
    </SolutionSection>
  );
}

// Figma puts 385px between the bottom of the last problem-narrative card and
// the top of this title (node 49233:16550 at y=2724 vs the card block ending
// at y=2339). The two sections' own paddings already supply 253px of that, so
// this makes up the remaining lead-in.
const SolutionSection = styled(Section)`
  margin-top: 132px;

  @media ${device.mobileL} {
    margin-top: 40px;
  }
`;

const TextRow = styled(ItemH)`
  align-items: center;
  gap: 139px;
  margin-bottom: 64px;

  h2,
  span {
    flex: 1;
  }

  @media ${device.laptop} {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 40px;
  }

  @media ${device.mobileL} {
    margin-bottom: 32px;
  }
`;

const GradientWord = styled.span`
  color: var(--ifm-color-custom-pink);
`;

const SolutionPlaceholder = styled.div`
  width: 100%;
  height: 635px;
  border-radius: 48px;
  background: #323232;

  @media ${device.laptop} {
    height: 420px;
    border-radius: 32px;
  }

  @media ${device.mobileL} {
    height: 240px;
    border-radius: 24px;
  }
`;
