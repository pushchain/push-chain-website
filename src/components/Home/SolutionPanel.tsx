// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { Content, H2, ItemH, ItemV, Section, Span } from '@site/src/css/SharedStyling';
import SolutionAnimation from '@site/src/components/Home/SolutionAnimation';
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
      {/* overflow must stay visible: Content clips by default, which makes it
          a scroll container and stops the animation below from pinning. */}
      {/* overflow must stay visible: Content clips by default, which makes it
          a scroll container and stops the composition below from pinning. */}
      <SolutionContent alignSelf='center' overflow='visible'>
        <SolutionAnimation
          copy={
            <TextRow flexDirection={isMobile ? 'column' : 'row'}>
              <H2
                fontFamily={FONT_MONO}
                fontSize={isMobile ? '1.75rem' : '3rem'}
                fontWeight='500'
                letterSpacing='-0.06em'
                lineHeight='120%'
                color='var(--ifm-color-white)'
              >
                {/* Three fixed lines, per Figma. The design's 530px text box
                    wraps naturally into "Making AI / Universally / accountable";
                    forcing the breaks keeps that shape at any container width. */}
                {t('pages.home.solution-panel.title-prefix')}
                <br />
                <GradientWord>
                  {t('pages.home.solution-panel.title-highlight')}
                </GradientWord>
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
          }
        />
      </SolutionContent>
    </SolutionSection>
  );
}

// Figma puts 385px between the bottom of the last problem-narrative card and
// the top of this title (node 49233:16550 at y=2724 vs the card block ending
// at y=2339). The two sections' own paddings already supply 253px of that, so
// this makes up the remaining lead-in.
/* Spacing to the previous section now comes from the home page's shared
   section rhythm, so this no longer carries its own margin. */
const SolutionSection = styled(Section)``;

/* The pink panel stands on the ground the scene walks across, so this section
   gives up its bottom padding rather than leaving a black band between them. */
const SolutionContent = styled(Content)`
  padding-bottom: 0;
`;

const TextRow = styled(ItemH)`
  align-items: center;
  gap: 139px;

  h2,
  span {
    flex: 1;
  }

  @media ${device.laptop} {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

const GradientWord = styled.span`
  color: var(--ifm-color-custom-pink);
`;

