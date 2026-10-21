// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { Content, H2, ItemV, Section, Span } from '@site/src/css/SharedStyling';
import SolutionAnimation from '@site/src/components/Home/SolutionAnimation';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { device } from '@site/src/config/globals';

const FONT_MONO = "'IBM Plex Mono', monospace";

/* Figma sets 32px between the title and the subtitle, but measures it between
   text boxes trimmed to the cap and the baseline. Our boxes carry their full
   leading -- about 12px under the 48px title and 8px over the 20px subtitle --
   so the gap that reproduces the design's 32px on screen is that much smaller.
   Checked by measuring the rendered cap-to-cap distance, not assumed. */
const TITLE_GAP = 13;

export default function SolutionPanel() {
  const { t } = useTranslation();

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
            <TextRow>
              <H2
                fontFamily={FONT_MONO}
                fontWeight='500'
                letterSpacing='-0.06em'
                lineHeight='120%'
                color='var(--ifm-color-white)'
              >
                {/* One line now, centred, per Figma 50179:32. Figma generates
                    -0.96px on the spans and -2.88px on the paragraph around
                    them; the two disagree, and the design renders at -2.88px --
                    its title inks 853px wide, which is what -0.06em gives and
                    -0.02em misses by 60. Measured off the node rather than read
                    off the generated code. */}
                {t('pages.home.solution-panel.title-prefix')}{' '}
                <GradientWord>
                  {t('pages.home.solution-panel.title-highlight')}
                </GradientWord>{' '}
                {t('pages.home.solution-panel.title-suffix')}
              </H2>
              {/* Span defaults text-align to initial, which beats the centre
                  it would otherwise inherit. On one line the shrink-to-fit
                  box hid that; the second line on a phone gave it away. */}
              <Span
                fontSize='1.25rem'
                lineHeight='150%'
                letterSpacing='0.4px'
                color='var(--ifm-color-white)'
                textAlign='center'
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

/* Figma 50179:31: a centred column, title over subtitle, 32px apart. It was a
   two-column row until the copy was cut to a single line each -- the block is
   80px tall in the design now, where it used to take a third of the screen,
   and the height it gives back is the room the scene grew into. */
const TextRow = styled(ItemV)`
  align-items: center;
  text-align: center;
  gap: ${TITLE_GAP}px;

  h2 {
    font-size: 3rem;
    margin: 0;

    @media ${device.mobileL} {
      font-size: 2rem;
    }
  }

  /* The design centres the subtitle across the full column width. */
  span {
    max-width: 100%;
  }
`;

const GradientWord = styled.span`
  color: var(--ifm-color-custom-pink);
`;

