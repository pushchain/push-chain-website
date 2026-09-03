// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { Section } from '@site/src/css/SharedStyling';
import FeatureCard from '@site/src/components/Home/FeatureCard';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { device } from '@site/src/config/globals';
import { AgentFeaturesListA } from '@site/src/config/AgentFeaturesListA';

// Import Assets
import RingPattern from '@site/static/assets/website/home/built-to-scale/ring-pattern.png';
import PushLogoMark from '@site/static/assets/website/home/built-to-scale/push-logo-mark.svg';
import GlyphRasterBackdrop from '@site/src/components/Home/GlyphRasterBackdrop';

const FONT_MONO = "'IBM Plex Mono', monospace";

// Figma's background plate (Rectangle 42282) is 1403px wide on a 1440px frame,
// i.e. inset by (1440 - 1403) / 2 on each side. It sits at Section level rather
// than inside the page's max-width Content container, so the page gutter can't
// constrain it — that's what makes it read as full-bleed.
const PANEL_INSET = 18.5;

// Vertical anchors, in design pixels measured from the top of that plate.
const VISUAL_HEIGHT = 726; // image 32 — the slot for the incoming animation
const PINK_CARD_TOP = 177;
const BLEND_TOP = 552; // Rectangle 42285
const BLEND_HEIGHT = 544;
const BODY_TOP = 743; // Frame 37246
const ROW_ONE_HEIGHT = 534;
const ROW_TWO_HEIGHT = 418;

export default function AgenticScaleSection() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(device.mobileL);

  return (
    <GroundSection
      id='built-to-scale'
      aria-level='2'
      aria-label={t('pages.home.built-to-scale.section-aria-label')}
    >
      <Panel>
        <TopVisual>
          <GlyphRasterBackdrop />
          <PinkCard>
            <LogoMark aria-hidden='true'>
              <PushLogoMark />
            </LogoMark>
            <BannerHeading>
              <span>{t('pages.home.built-to-scale.title-line1')}</span>
              <span>{t('pages.home.built-to-scale.title-line2')}</span>
            </BannerHeading>
          </PinkCard>
        </TopVisual>

        {/* Blurred wash that melts the artwork above into the card grid below. */}
        <BlendWash aria-hidden='true' />

        <Body
          id='innovations-of-push-chain'
          aria-label={t('pages.home.feature-grid-a.section-aria-label')}
        >
          <BodyInner>
            <GridTitle>{t(AgentFeaturesListA.meta.title)}</GridTitle>

            <CardRow $height={isMobile ? null : ROW_ONE_HEIGHT}>
              {AgentFeaturesListA.rowOne.map((item) => (
                <FeatureCard key={item.id} item={item} />
              ))}
            </CardRow>

            <CardRow $height={isMobile ? null : ROW_TWO_HEIGHT}>
              {AgentFeaturesListA.rowTwo.map((item) => (
                <FeatureCard key={item.id} item={item} />
              ))}
            </CardRow>
          </BodyInner>
        </Body>
      </Panel>
    </GroundSection>
  );
}

// The single gradient plate behind the whole section. Its final stop is the
// page background, so the section dissolves into the page instead of ending on
// a seam. Stops are in design pixels from the top, because everything anchored
// to them (artwork, wash, card rows) is fixed-height too.
/* The ground the scene ends on carries on behind this section, so the strip
   either side of the inset panel reads as the same floor continuing down.
   The tile is the design's own (Figma 49456:681) with its top cropped off —
   that part is already drawn by the animation above. */
const GroundSection = styled(Section)`
  background-image: url('/assets/website/home/solution/ground-tile.webp'),
    url('/assets/website/home/solution/ground-tile.webp');
  background-repeat: no-repeat, no-repeat;
  background-position: left top, right top;
  background-size: auto 623px, auto 623px;
  image-rendering: pixelated;
`;

const Panel = styled.div`
  position: relative;
  flex: 1;
  margin: 0 ${PANEL_INSET}px;
  border-radius: 48px 48px 0 0;
  overflow: hidden;
  /* Figma's Rectangle 42282 stops, at their design pixel offsets. #fbe9fe is a
     single peak at 1207px — not a plateau — so the light stays a narrow band
     around the first card row and darkens continuously from there, reaching
     #180621 just below the second row (which ends ~1841px). The tail is only
     carried far enough to settle on the page colour without banding. */
  background: linear-gradient(
    180deg,
    #d548ec 0px,
    #d548ec 454px,
    #fbe9fe 1207px,
    #180621 1894px,
    var(--ifm-color-black) 97%
  );

  @media ${device.mobileL} {
    margin: 0 12px;
    border-radius: 24px 24px 0 0;
    /* Same shape as the design, in percentages — the stacked mobile layout's
       height varies with copy, so fixed pixel offsets wouldn't line up. */
    background: linear-gradient(
      180deg,
      #d548ec 0%,
      #d548ec 17%,
      #fbe9fe 46%,
      #180621 72%,
      var(--ifm-color-black) 95%
    );
  }
`;

const TopVisual = styled.div`
  position: relative;
  width: 100%;
  height: ${VISUAL_HEIGHT}px;

  @media ${device.laptop} {
    height: 560px;
  }

  @media ${device.tablet} {
    height: 440px;
  }

  @media ${device.mobileL} {
    height: 320px;
  }
`;

const RingArtwork = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${RingPattern});
  background-size: cover;
  background-position: center 30%;
  border-radius: 48px;
  mix-blend-mode: lighten;
  pointer-events: none;

  @media ${device.mobileL} {
    border-radius: 24px;
  }
`;

const PinkCard = styled.div`
  position: absolute;
  top: ${PINK_CARD_TOP}px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  width: 800px;
  max-width: calc(100% - 48px);
  padding: 40px;
  box-sizing: border-box;
  background: var(--ifm-color-custom-pink);

  @media ${device.laptop} {
    top: 140px;
    gap: 32px;
    padding: 32px 24px;
    max-width: calc(100% - 48px);
  }

  @media ${device.tablet} {
    top: 110px;
    gap: 24px;
  }

  @media ${device.mobileL} {
    top: 72px;
    gap: 16px;
    padding: 24px 16px;
    max-width: calc(100% - 32px);
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

  @media ${device.mobileL} {
    width: 32px;
  }
`;

const BannerHeading = styled.h2`
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
    white-space: nowrap;
  }

  /* The two lines are set nowrap at full size; below this they no longer fit,
     so let them wrap and step the size down instead of overflowing. */
  @media ${device.laptop} {
    font-size: 28px;

    span {
      white-space: normal;
    }
  }

  @media ${device.tablet} {
    font-size: 22px;
  }

  @media ${device.mobileL} {
    font-size: 17px;
  }
`;

const BlendWash = styled.div`
  position: absolute;
  top: ${BLEND_TOP}px;
  left: 0;
  right: 0;
  height: ${BLEND_HEIGHT}px;
  z-index: 1;
  background: linear-gradient(180deg, #de6ef0 0%, #fae7fe 100%);
  filter: blur(50px);
  pointer-events: none;

  @media ${device.mobileL} {
    top: 300px;
    height: 260px;
    filter: blur(30px);
  }
`;

const Body = styled.div`
  position: relative;
  z-index: 2;
  padding-top: ${BODY_TOP - VISUAL_HEIGHT}px;

  @media ${device.laptop} {
    padding-top: 40px;
  }
  /* Tail for the gradient to settle onto the page colour. Sized so the gap
     from the last card down to the Grid B title lands on Figma's 322px
     (node 49233:16551's block ends at 1074, Frame 37236 starts at 1396). */
  padding-bottom: 197px;

  @media ${device.mobileL} {
    padding-top: 48px;
    padding-bottom: 80px;
  }
`;

const BodyInner = styled.div`
  width: 100%;
  max-width: 1292px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const GridTitle = styled.h2`
  margin: 0 0 40px 0;
  text-align: center;
  color: var(--ifm-color-white);
  font-family: ${FONT_MONO};
  font-weight: 500;
  font-size: 3rem;
  letter-spacing: -0.06em;
  line-height: 1.2;

  @media ${device.mobileL} {
    margin: 0 0 8px 0;
    font-size: 1.75rem;
  }
`;

const CardRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 24px;

  /* A floor rather than a fixed height: the design's row heights assume its
     own copy at its own width, and a hard height simply spills the card's
     content out of the bottom once either grows. */
  > * {
    ${(props) => (props.$height ? `min-height: ${props.$height}px;` : '')}
  }

  /* Three fixed-height cards need real width; below the laptop breakpoint
     they'd squeeze to ~190px, so stack them and let height follow content. */
  @media ${device.laptop} {
    flex-direction: column;

    > * {
      height: auto;
      min-height: 260px;
    }
  }
`;
