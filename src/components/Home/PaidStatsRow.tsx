// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// External Components
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { Content, H2, ItemH, ItemV, Section, Span } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { device } from '@site/src/config/globals';
import { PaidStatsList } from '@site/src/config/PaidStatsList';

// Import Assets
import GlowEllipse from '@site/static/assets/website/home/paid-stats/glow-ellipse.svg';
import instantInteroperability from '@site/static/assets/website/interoperability/instant-interoperability.json';

const FONT_MONO = "'IBM Plex Mono', monospace";

// Chain marks are exported from Figma at 43.119px and overlap by 11.179px
// (node 49245:16690). Icons the design team hasn't supplied yet are skipped
// rather than crashing the build, so dropping the file in is all that's needed.
const chainIcon = (name) => {
  try {
    return require(
      `@site/static/assets/website/home/paid-stats/${name}.svg`
    ).default;
  } catch (err) {
    return null;
  }
};

export default function PaidStatsRow() {
  const { t } = useTranslation();

  return (
    <Section
      id='get-paid'
      aria-level='2'
      aria-label={t('pages.home.paid-stats.section-aria-label')}
    >
      <GlowBackground aria-hidden='true'>
        <GlowEllipse />
      </GlowBackground>

      <Content alignSelf='center'>
        <Eyebrow>
          <Span
            fontSize='0.75rem'
            fontWeight='700'
            letterSpacing='0.6px'
            lineHeight='120%'
            textTransform='uppercase'
            color='var(--ifm-color-pink-100)'
          >
            {t(PaidStatsList.meta.eyebrow)}
          </Span>
        </Eyebrow>

        <PaidHeaderRow>
          <TitleBlock
            fontFamily={FONT_MONO}
            fontWeight='500'
            letterSpacing='-0.06em'
            lineHeight='120%'
            color='var(--ifm-color-white)'
          >
            {t(PaidStatsList.meta.title)}{' '}
            <GradientWord>{t(PaidStatsList.meta.titleGradient)}</GradientWord>
          </TitleBlock>
          <HeaderParagraph>
            {t(PaidStatsList.meta.paragraph)}
          </HeaderParagraph>
        </PaidHeaderRow>

        <StatsStage>
          {/* The lines belong to the stats row, not the section — Figma anchors
              Layer_1's box 227px above Frame 37131, so the strands sweep up
              behind the heading and settle across the stats. */}
          <LinesAnimation aria-hidden='true'>
            <Lottie animationData={instantInteroperability} loop autoplay />
          </LinesAnimation>

          <StatRow>
          {PaidStatsList.stats.map((stat) => (
            <StatItem key={stat.id} $fill={stat.type === 'text'}>
              <StatTitle>{t(stat.titleKey)}</StatTitle>

              {stat.type === 'text' && (
                <StatValue>{t(stat.valueKey)}</StatValue>
              )}

              {stat.type === 'chains' && (
                <ChainRow>
                  <ChainIconStack>
                    {stat.chains
                      .map((chain) => ({ ...chain, src: chainIcon(chain.icon) }))
                      .filter((chain) => chain.src)
                      .map((chain) => (
                        <ChainIcon
                          key={chain.icon}
                          src={chain.src}
                          alt={t(chain.altKey)}
                        />
                      ))}
                  </ChainIconStack>
                  <MoreChainsBadge>{t(stat.badgeTextKey)}</MoreChainsBadge>
                </ChainRow>
              )}
            </StatItem>
          ))}
          </StatRow>
        </StatsStage>
      </Content>
    </Section>
  );
}

// Figma's Ellipse 42 is a 587px circle whose blur spills 51.11% past its box,
// so the exported artwork is 1187px square. Centred on the section on both
// axes — the design places its centre on the content block's centre.
const GlowBackground = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1187px;
  height: 1187px;
  pointer-events: none;
  z-index: 0;

  @media ${device.laptop} {
    width: 820px;
    height: 820px;
  }

  @media ${device.mobileL} {
    width: 520px;
    height: 520px;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

// The flowing lines behind this section are the same Lottie the old
// interoperability section used, rather than a flat SVG.
// Positioning context for the lines so they track the stats row rather than
// the section as a whole.
const StatsStage = styled.div`
  position: relative;
  width: 100%;
  margin-top: 100px;

  @media ${device.mobileL} {
    margin-top: 48px;
  }
`;

// Anchored to the stats row so the strands keep crossing the stats however the
// copy above reflows. The offset is set from Layer_1's central axis (the
// zero-height vector at y=262.7 in its box), which Figma places ~33% down
// Frame 37131 — the Lottie's own artwork sits slightly higher inside its box
// than Figma's vectors do, so this is 40px lower than a box-to-box match.
const LinesAnimation = styled.div`
  position: absolute;
  left: 50%;
  top: -167px;
  transform: translateX(-50%);
  width: 1317px;
  height: 463px;
  max-width: none;
  /* Faint in the design — the lines read as texture behind the content. */
  opacity: 0.2;
  pointer-events: none;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* The strands are 1317px wide — narrower than that they're mostly cropped
     and just add noise behind the stats. */
  @media ${device.laptop} {
    display: none;
  }
`;

const Eyebrow = styled(ItemH)`
  justify-content: flex-start;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
`;

const PaidHeaderRow = styled(ItemV)`
  h2 {
    font-size: 3rem;

    @media ${device.mobileL} {
      font-size: 2rem;
    }
  }

  flex-direction: row;
  align-items: center;
  /* Figma pins the paragraph to the right edge of the 1200px content block
     (node 49245:16672 sits at x=806 with w=394). Our container is wider, so
     space-between keeps it flush right instead of leaving slack there. */
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
  gap: 236px;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

const TitleBlock = styled(H2)`
  margin: 0 !important;
  flex: 0 0 auto;
  max-width: 570px;

  @media ${device.laptop} {
    font-size: 2.25rem !important;
    max-width: 100%;
  }

  @media ${device.tablet} {
    font-size: 2rem !important;
  }
`;

const HeaderParagraph = styled.p`
  margin: 0;
  flex: 0 0 auto;
  max-width: 394px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.4px;
  color: var(--ifm-color-white);
  /* Two fixed lines, per the design's split of this copy. */
  white-space: pre-line;

  @media ${device.mobileL} {
    max-width: 100%;
  }
`;

const GradientWord = styled.span`
  color: var(--ifm-color-custom-pink);
`;

// No rule above this row in the design — the stats sit directly on the
// background, 100px below the header block (Frame 37131 at y=234, header 134).
const StatRow = styled(ItemH)`
  align-items: flex-start;
  justify-content: center;
  gap: 151px;
  position: relative;
  z-index: 1;

  /* Four stats across needs the full width; below that go two-up, then
     single column on phones. */
  @media ${device.laptop} {
    flex-wrap: wrap;
    gap: 48px 32px;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    gap: 32px;
  }
`;

const StatItem = styled(ItemV)`
  gap: 24px;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: ${(props) => (props.$fill ? '1 0 0' : '0 0 auto')};
  min-width: 0;

  /* Two-up, then single column. Declared here rather than as a child selector
     on the row, which this component's own flex above would override. */
  @media ${device.laptop} {
    flex: 1 1 40%;
    min-width: 220px;
  }

  @media ${device.mobileL} {
    flex: 1 1 100%;
    width: 100%;
  }
`;

const StatTitle = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  color: var(--ifm-color-white);

  @media ${device.laptop} {
    white-space: normal;
  }
`;

const StatValue = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 3.25rem;
  font-weight: 400;
  letter-spacing: -1.04px;
  line-height: 1.2;
  text-align: center;
  white-space: nowrap;
  color: var(--ifm-color-white);

  @media ${device.laptop} {
    white-space: normal;
  }
`;

const ChainRow = styled(ItemV)`
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ChainIconStack = styled(ItemH)`
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

const ChainIcon = styled.img`
  width: 43.119px;
  height: 43.119px;
  border-radius: 50%;
  flex: 0 0 auto;

  &:not(:last-child) {
    margin-right: -11.179px;
  }
`;

const MoreChainsBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 21px;
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid var(--ifm-color-pink-100);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.45px;
  color: var(--ifm-color-pink-100);
  white-space: nowrap;
`;
