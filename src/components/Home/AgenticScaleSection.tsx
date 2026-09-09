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
const BODY_TOP = 743; // Frame 37246
const ROW_ONE_HEIGHT = 400;
const ROW_TWO_HEIGHT = 330;

/* Rectangle 42282, read off the file (node 49243:16601 in Push Design
   Foundations). Its fill is a vertical linear gradient whose four stops sit at
   0.17308, 0.46008, 0.72196 and 0.9989 of a plate 2623 tall -- so, in design
   pixels down that plate: 454, 1207, 1893 and 2620. The plate's top is exactly
   the visual's top, the visual is 726, and the card grid ends at 1771, which is
   what the offsets below are measured against. */
const PLATE_HEIGHT = 2623;
const PLATE_PINK_END = 454;
const PLATE_LIGHT_AT = 1207;
const PLATE_DARK_AT = 1893;
const PLATE_NEAR_BLACK_AT = 2620;
const PLATE_CARDS_END = 1771;

/* Both ends of the fade, measured from the visual's end -- the one edge that
   scales here, since the visual is a screen tall rather than the design's 726
   while everything on either side of it is fixed-height content. The fade
   starts 272px ABOVE that edge, so the plate has already been lightening for a
   while by the time the grid's heading arrives, exactly as the file has it.
   Held as that distance rather than as a share of the visual: as a share, a
   screen-tall visual puts the start almost half way up the title and washes it
   out, which is a different bug entirely. */
const PINK_END_BELOW_VISUAL = PLATE_PINK_END - VISUAL_HEIGHT; // -272
const LIGHT_PEAK_BELOW_VISUAL = PLATE_LIGHT_AT - VISUAL_HEIGHT; // 481

/* The dark end is measured up from the plate's own bottom instead. Anchoring
   it below the visual too would put it in the middle of the card grid on a
   phone, where the cards stack and the grid runs twice as tall; the design has
   it arrive just after the cards wherever they end. */
const DARK_ABOVE_PLATE_END = PLATE_HEIGHT - PLATE_DARK_AT; // 730
const NEAR_BLACK_ABOVE_PLATE_END = PLATE_HEIGHT - PLATE_NEAR_BLACK_AT; // 3

/* How far the plate outlives the cards. This is why it cannot be the panel's
   own background: the panel ends a little after the last card, and the design's
   plate goes on for 852px past that, holding near-black behind the start of the
   next section. */
const PLATE_BELOW_CARDS = PLATE_HEIGHT - PLATE_CARDS_END; // 852

/* What the panel already spends below the last card, so the rest is what the
   plate has to add. */
const BODY_PAD_BOTTOM = 197;
const BODY_PAD_BOTTOM_MOBILE = 80;
const PLATE_TAIL = PLATE_BELOW_CARDS - BODY_PAD_BOTTOM; // 655
const PLATE_TAIL_MOBILE = PLATE_BELOW_CARDS - BODY_PAD_BOTTOM_MOBILE; // 772

/* Rectangle 42282's four colours, interpolated straight as the file does. An
   earlier pass eased these to head off Mach banding at the corners; the band it
   was defending against turned out to be the blurred wash that used to sit over
   this, and with that gone the easing only pulled the colours off the design's
   without buying anything back. */
const PLATE_PINK = [0xd5, 0x48, 0xec];
const PLATE_LIGHT = [0xfb, 0xe9, 0xfe];
const PLATE_DARK = [0x18, 0x06, 0x21];
const PLATE_NEAR_BLACK = [0x09, 0x09, 0x09];

const hex = (c) => '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');

/* calc() will not take a signed operand, so the sign picks the operator. */
const belowVisual = (px) => {
  const n = Math.round(px);
  return n < 0
    ? `calc(var(--visual-h) - ${-n}px)`
    : `calc(var(--visual-h) + ${n}px)`;
};

const PINK_END_AT = belowVisual(PINK_END_BELOW_VISUAL);
const LIGHT_AT = belowVisual(LIGHT_PEAK_BELOW_VISUAL);
const DARK_AT = `calc(100% - ${DARK_ABOVE_PLATE_END}px)`;
const NEAR_BLACK_AT = `calc(100% - ${NEAR_BLACK_ABOVE_PLATE_END}px)`;

export default function AgenticScaleSection() {
  const { t } = useTranslation();

  return (
    <GroundGroup id='built-to-scale-group'>
    <GroundSection
      id='built-to-scale'
      aria-level='2'
      aria-label={t('pages.home.built-to-scale.section-aria-label')}
    >
      <Plate aria-hidden='true' />
      <Panel>
        <TopVisual>
          <Artwork aria-hidden='true'>
            <GlyphRasterBackdrop />
          </Artwork>
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
  /* The title's screen. Held here rather than on the panel because the plate
     is the panel's sibling and has to measure from the same number. */
  --visual-h: max(100svh, 420px);

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

/* No colour of its own: the plate behind it paints that, and the plate has to
   run on past this box's bottom edge, which the overflow: hidden that clips the
   artwork to the rounded corners would otherwise cut off. */
const Panel = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  margin: 0 ${PANEL_INSET}px;
  border-radius: 48px 48px 0 0;
  overflow: hidden;

  @media ${device.mobileL} {
    margin: 0 12px;
    border-radius: 24px 24px 0 0;
  }
`;

/* Figma's Rectangle 42282. A sibling of the panel rather than its background,
   because the design's plate outlives the panel: it holds on for 852px past
   the last card, going dark and then settling to the page's own colour behind
   the start of the next section, and a background on a box that ends with the
   cards has nowhere to put that.

   Two ends, measured from two different edges. The light peak is fixed below
   the visual, which is the only part of the section whose height tracks the
   screen. The dark is fixed above the plate's own bottom, so it lands just
   after the cards wherever they end -- measuring it below the visual instead
   would drop it into the middle of the grid on a phone, where the cards stack
   and the grid runs twice as long. */
const Plate = styled.div`
  position: absolute;
  top: 0;
  left: ${PANEL_INSET}px;
  right: ${PANEL_INSET}px;
  height: calc(100% + ${PLATE_TAIL}px);
  border-radius: 48px 48px 0 0;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    ${hex(PLATE_PINK)} 0px,
    ${hex(PLATE_PINK)} ${PINK_END_AT},
    ${hex(PLATE_LIGHT)} ${LIGHT_AT},
    ${hex(PLATE_DARK)} ${DARK_AT},
    ${hex(PLATE_NEAR_BLACK)} ${NEAR_BLACK_AT}
  );

  @media ${device.mobileL} {
    left: 12px;
    right: 12px;
    height: calc(100% + ${PLATE_TAIL_MOBILE}px);
    border-radius: 24px 24px 0 0;
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

/**
 * How far the title's box is blurred. The design has a uniform layer blur of 31
 * on it, and Figma's blur number is twice CSS's -- its own Dev Mode export
 * halves it -- so 31 there is 15.5 here.
 */
const PANEL_BLUR = 15.5;

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
  /* Frame 37239, as the design has it: 800 wide, height hugging its contents,
     40 of padding, 44 between the mark and the copy. */
  width: 800px;
  max-width: calc(100% - 48px);
  padding: 40px;
  box-sizing: border-box;

  /* The box itself: a solid fill, blurred as a layer rather than blurring what
     is behind it. That is the difference between the two -- a background blur
     leaves the pattern present and smeared, which still reads as a panel laid
     over it, while blurring the layer softens the fill's own edges and leaves
     the middle solid. Drawn on a pseudo-element because the blur would
     otherwise take the copy with it. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #d548ec;
    filter: blur(${PANEL_BLUR}px);
    z-index: -1;
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
  /* The one heading that keeps its own ladder rather than the shared section
     size: it is two long lines inside a card, and at 3rem/2rem it took six
     lines of that card to say them. */
  font-size: 38px;
  letter-spacing: -0.06em;
  line-height: 1.2;

  span {
    display: block;
  }

  @media ${device.laptop} {
    font-size: 28px;
  }

  @media ${device.tablet} {
    font-size: 22px;
  }

  @media ${device.mobileL} {
    font-size: 17px;
  }
`;

/* The artwork dissolves into the plate rather than being covered by anything.
   A blurred rectangle used to do this job, and it was the source of both faults
   in the panel: blur pulls a box's edges inward, so it left a strip of
   uncovered artwork about 120px down each side, and its lower edge finished
   111px before the plate reached its own lightest point, so the brightness
   climbed, levelled off, then climbed again -- a line straight across the
   panel. Alpha carries no colour of its own and a mask cannot be narrower than
   the element, so neither fault can come back. */
const Artwork = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(
    180deg,
    #000 0%,
    #000 62%,
    transparent 100%
  );
  mask-image: linear-gradient(180deg, #000 0%, #000 62%, transparent 100%);
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
