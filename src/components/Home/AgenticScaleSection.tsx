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

/* The ground tile's native size. It is the scene's own ground image with the
   top cropped off -- the part the animation already draws -- so it continues
   only if it is drawn at the width the animation draws that image at, which is
   the full viewport. Matching a checker cell instead put it about fifteen
   times too small. */
const GROUND_TILE_W = 1222;
const GROUND_TILE_H = 623;

/* Both textures measured off a 1512px-wide render by autocorrelating a
   scanline: the scene's floor repeats every 39.8px, and this tile every 63.2px
   when drawn at the full viewport width. Drawn at this fraction of the
   viewport the two repeat at the same size, which is what makes the strip read
   as the scene's floor carrying on rather than a different texture. The scene
   is drawn larger than the viewport below laptop, so the strip follows it
   through --scene-scale rather than drifting out of step with it. */
const GROUND_TILE_FIT = 39.8 / 63.2;

// Vertical anchors, in design pixels measured from the top of that plate.
const VISUAL_HEIGHT = 726; // image 32 — the slot for the incoming animation
const PINK_CARD_TOP = 177;
const BLEND_TOP = 552; // Rectangle 42285
const BLEND_HEIGHT = 544;
const BODY_TOP = 743; // Frame 37246
const ROW_ONE_HEIGHT = 400;
const ROW_TWO_HEIGHT = 330;

/* How far the plate's tail runs below the panel before it is page colour. Far
   enough to carry past the section boundary and behind the next heading. */
const PANEL_TAIL_H = 420;

export default function AgenticScaleSection() {
  const { t } = useTranslation();

  return (
    <GroundGroup id='built-to-scale-group'>
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

            <CardRow $height={ROW_ONE_HEIGHT}>
              {AgentFeaturesListA.rowOne.map((item) => (
                <FeatureCard key={item.id} item={item} />
              ))}
            </CardRow>

            <CardRow $height={ROW_TWO_HEIGHT}>
              {AgentFeaturesListA.rowTwo.map((item) => (
                <FeatureCard key={item.id} item={item} />
              ))}
            </CardRow>
          </BodyInner>
        </Body>
      </Panel>
        <PanelTail aria-hidden='true' />
    </GroundSection>
      <GroundSpacer aria-hidden='true' />
    </GroundGroup>
  );
}

/* Below laptop the section above pins a box that only hugs its scene, so this
   one parks directly under it for the length of that hold instead of leaving
   the fold empty. Sticky travel is bounded by this group, and the spacer is
   what gives it that travel -- the runway above gave the same distance back
   with a negative margin, so the page's total scroll is unchanged. Inert on
   desktop, where --solution-travel is only set below laptop and the pinned box
   already fills the screen. */
const GroundGroup = styled.div`
  /* The page column centres its children and every Section carries its own
     width: 100%. This wrapper is a plain div, so without one it shrank to its
     content and pulled the whole pink panel in from both edges. */
  width: 100%;
  position: relative;
`;

const GroundSpacer = styled.div`
  height: 0;

  @media ${device.laptop} {
    height: var(--solution-travel, 0px);
  }
`;

// The single gradient plate behind the whole section. Its final stop is the
// page background, so the section dissolves into the page instead of ending on
// a seam. Stops are in design pixels from the top, because everything anchored
// to them (artwork, wash, card rows) is fixed-height too.
/* The ground the scene ends on carries on behind this section, so the strip
   either side of the inset panel reads as the same floor continuing down.
   The tile is the design's own (Figma 49456:681) with its top cropped off —
   that part is already drawn by the animation above. */
const GroundSection = styled(Section)`
  position: relative;

  @media ${device.laptop} {
    position: sticky;
    top: var(--solution-pin-bottom, 0px);
  }

  /* One tile-high band of ground across the top of the section, drawn at the
     scale the scene above draws its floor at so the two read as one surface.
     It repeats sideways, not down: the panel covers the middle, so what shows
     is the strip either side of it. */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: calc(
      100vw * ${GROUND_TILE_FIT.toFixed(4)} * var(--scene-scale, 1) *
        ${GROUND_TILE_H} / ${GROUND_TILE_W}
    );
    background-image: url('/assets/website/home/solution/ground-tile.webp');
    background-repeat: repeat-x;
    background-size: calc(
        100vw * ${GROUND_TILE_FIT.toFixed(4)} * var(--scene-scale, 1)
      )
      auto;
    image-rendering: pixelated;
    pointer-events: none;
  }
`;

const Panel = styled.div`
  /* The title's screen, shared by the artwork above and the wash that blends
     it into the grid below so the two cannot drift apart. */
  --visual-h: max(100svh, 420px);

  position: relative;
  flex: 1;
  margin: 0 ${PANEL_INSET}px;
  border-radius: 48px 48px 0 0;
  overflow: hidden;
  /* Figma's Rectangle 42282 stops, at their design pixel offsets. #fbe9fe is a
     single peak at 1207px — not a plateau — so the light stays a narrow band
     around the first card row and darkens continuously from there, reaching
     its darkest exactly at the panel's edge -- reaching it 144px above that
     made the purple read as starting before the section's block had ended.
     PanelTail carries the colour on below the section, as the design does; a
     black stop here would put a seam across the join. */
  background: linear-gradient(
    180deg,
    #d548ec 0px,
    #d548ec 454px,
    #fbe9fe 1207px,
    #180621 100%
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
      #180621 100%
    );
  }
`;

/* In the design the plate's dark end carries on past the panel and the next
   section's heading sits on it; the panel clips its own background, so the
   tail has to be drawn outside it. Positioned off the section's bottom edge so
   it adds no height -- it reaches down over the boundary and settles on the
   page colour, and the section below paints over it in the normal way. */
const PanelTail = styled.div`
  position: absolute;
  top: 100%;
  left: ${PANEL_INSET}px;
  right: ${PANEL_INSET}px;
  height: ${PANEL_TAIL_H}px;
  background: linear-gradient(
    180deg,
    #180621 0%,
    var(--ifm-color-black) 100%
  );
  pointer-events: none;

  @media ${device.mobileL} {
    left: 12px;
    right: 12px;
    height: ${Math.round(PANEL_TAIL_H * 0.6)}px;
  }
`;

/* The title holds a screen of its own, with the grid below starting on the
   next one. A floor keeps it from collapsing on a very short window. */
const TopVisual = styled.div`
  position: relative;
  width: 100%;
  height: var(--visual-h);
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
  /* Centred in that screen rather than hung from a fixed offset, so the space
     around it grows evenly with the viewport. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  /* A blurred plate rather than a solid fill, the way the hero's card is done:
     the glyph raster behind it stays visible through the blur instead of being
     covered by a flat rectangle. #d548ec is the same pink, carried at a
     fraction of its opacity. */
  background: rgba(213, 72, 236, 0.34);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    2.788px 2.598px 12px 0px rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0px rgba(255, 255, 255, 0.15) inset;

  @media ${device.laptop} {
    gap: 32px;
    padding: 32px 24px;
    max-width: calc(100% - 48px);
  }

  @media ${device.tablet} {
    gap: 24px;
  }

  @media ${device.mobileL} {
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
  /* The same size every other section heading uses. It was stepped down to
     17px on a phone to keep its two lines unwrapped; the card now has a screen
     to itself, so the lines wrap instead of the type shrinking. */
  font-size: 3rem;
  letter-spacing: -0.06em;
  line-height: 1.2;

  span {
    display: block;
  }

  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;

/* Straddles the join between the artwork and the card grid. It used to sit at
   a fixed offset that happened to land there; with the artwork now a screen
   tall that offset fell in the middle of it and bloomed as a white cloud over
   the title. It is measured back from the artwork's end instead -- the same
   174px above it and 544px below that the design's offsets described. */
const BlendWash = styled.div`
  position: absolute;
  top: calc(var(--visual-h) - ${VISUAL_HEIGHT - BLEND_TOP}px);
  left: 0;
  right: 0;
  height: ${BLEND_HEIGHT}px;
  z-index: 1;
  background: linear-gradient(180deg, #de6ef0 0%, #fae7fe 100%);
  filter: blur(50px);
  pointer-events: none;

  @media ${device.mobileL} {
    top: calc(var(--visual-h) - 20px);
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
    font-size: 2rem;
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
