// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import { useEffect, useLayoutEffect, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// External Components
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { Content, H2, ItemH, ItemV, Section, Span } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';
import { ProblemNarrativeList } from '@site/src/config/ProblemNarrativeList';

gsap.registerPlugin(ScrollTrigger);

// A phone's address bar sliding in and out changes the viewport height mid
// scroll. Every one of those fires a resize, and refreshing pin positions
// underneath a moving finger is what makes the page appear to jump to a
// different section. Height-only changes are ignored for that reason.
ScrollTrigger.config({ ignoreMobileResize: true });

// Runs before the browser paints on the client, and degrades to useEffect on
// the server where layout effects are not available.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Hard floor for where a stuck card parks, so it can never tuck under the
// fixed header on short viewports.
const HEADER_OFFSET = GLOBALS.HEADER.HEIGHT + GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.TOP + 24;

// The section pins as one piece: title, subtitle and the card stack all hold
// their place while the second card climbs over the first. Sticky alone cannot
// express that — a sticky element releases at its container's bottom minus its
// own height, so a short header always outlasts a tall card and the cards end
// up scrolling through the title. Instead one sticky viewport holds the whole
// group and the incoming card is driven by scroll progress inside it.

// Scroll distance the pinned group holds for while the second card travels.
const TRANSITION_SCROLL = 620;

// Where the pinned group parks. Tighter than the shared HEADER_OFFSET: the
// group is tall, so every pixel above it comes straight off the card's footer.
const PIN_TOP = GLOBALS.HEADER.HEIGHT + GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.TOP + 8;

// Gap between the header and the parked card.
const HEADER_GAP = 24;

// Room left under the card before the fold.
const FLOOR_GAP = 8;

/* Gap between the two columns a card is built on -- the illustration and the
   copy above, the two consequences below. */
const STORY_GAP = 64;

// A height change smaller than this is taken to be a phone's browser chrome
// sliding, not a real viewport change.
const VIEWPORT_NOISE = 120;

// Vertical space the card may occupy if the whole group is to sit on screen.
const cardBudget = (headerHeight) => {
  if (typeof window === 'undefined') return 0;
  return window.innerHeight - PIN_TOP - headerHeight - HEADER_GAP - FLOOR_GAP;
};

// The illustration is the one part of the card that can give ground: the copy
// and the consequences row have a natural floor. Shrinking it buys back enough
// height to keep the group pinned on a short laptop, where the full-size card
// would otherwise push its own footer off the bottom for the whole scroll.
const FIGURE_MAX = 300;
const FIGURE_MIN = 150;

// Height the card's own padding and inner gap give back in tight mode.
const TIGHT_SAVING = 72;

const CARD_GAP = 48;

/** Where the incoming card comes to rest, as a percentage of its own height. */
const DRAWER_REST = 6;

const FONT_MONO = "'IBM Plex Mono', monospace";

// Exact 5x5 dot-grid glyph from Figma (node 49322:1879 and its repeats) — red accent
// cells (rounded, 5.739px) and gray filler cells (3.826px) at fixed grid coordinates.
const RED_CELLS = [
  [0, 0], [0, 38.26], [9.57, 9.57], [9.57, 28.7], [19.13, 19.13],
  [28.7, 9.57], [28.7, 28.7], [38.26, 0], [38.26, 38.26],
];
const GRAY_CELLS = [
  [0, 9.57], [0, 19.13], [0, 28.7],
  [9.57, 0], [9.57, 19.13], [9.57, 38.26],
  [19.13, 0], [19.13, 9.57], [19.13, 28.7], [19.13, 38.26],
  [28.7, 0], [28.7, 19.13], [28.7, 38.26],
  [38.26, 9.57], [38.26, 19.13], [38.26, 28.7],
];

const DotGridIcon = () => (
  <svg width='44' height='44' viewBox='0 0 44 44' fill='none' aria-hidden='true'>
    {RED_CELLS.map(([x, y]) => (
      <rect key={`r-${x}-${y}`} x={x} y={y} width='5.739' height='5.739' rx='1' fill='#e94444' />
    ))}
    {GRAY_CELLS.map(([x, y]) => (
      <rect key={`g-${x}-${y}`} x={x} y={y} width='3.826' height='3.826' fill='#525252' />
    ))}
  </svg>
);

export default function ProblemNarrative() {
  const { t } = useTranslation();

  const stageRef = useRef(null);
  const viewportRef = useRef(null);
  const areaRef = useRef(null);
  const cardRefs = useRef([]);
  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  // Measure the group, decide whether it can be pinned on this viewport, and
  // publish the result as custom properties so the CSS and the scroll trigger
  // below always read the same numbers.
  useEffect(() => {
    const stage = stageRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!stage || cards.length < 2) return undefined;

    const measure = () => {
      cards.forEach((card) => {
        card.style.minHeight = '';
      });
      stage.style.removeProperty('--runway');
      stage.dataset.pinned = 'false';

      // Measure the cards in natural flow before fixing the area's height.
      // The layers are absolutely positioned inside that box, so reading them
      // while it is sized would just echo whatever height was set last time.
      const area = areaRef.current;
      const layers = cards.map((card) => card.parentElement);
      if (area) area.style.height = '';

      // Reset last run's tightening first, or the natural height measured below
      // is the already-shrunk one and the decision oscillates between runs.
      stage.dataset.tight = 'false';
      stage.style.setProperty('--figure-max', `${FIGURE_MAX}px`);
      layers.forEach((layer) => {
        if (layer) layer.style.position = 'static';
      });

      // The cards differ by a line or two of wrapped copy, so equalise them —
      // otherwise the incoming card is shorter than the one it covers and
      // leaves a sliver of the card beneath showing along one edge.
      const natural = Math.max(...cards.map((card) => card.offsetHeight));

      layers.forEach((layer) => {
        if (layer) layer.style.position = '';
      });

      // Read the header from the DOM rather than a ref: NarrativeHeader wraps
      // a styled ItemV, which does not forward one, so a ref here silently
      // measures 0 and the budget below comes out too generous.
      const headerEl = viewportRef.current?.firstElementChild;
      const headerHeight = headerEl?.offsetHeight ?? 0;

      // Holding the title in the pin costs the card its own height. A desktop
      // can afford that; a phone cannot -- the title runs to three lines, and
      // with the browser's own chrome eating the rest there was never a figure
      // small enough to fit, so the stack fell back to a plain list on every
      // real handset. When the title does not fit, it scrolls away and only the
      // cards pin. Decided by measurement, so a short desktop window gets the
      // same treatment rather than being judged on its width.
      // How much the card can actually give up. The illustration only yields
      // the difference between the height it renders at and its floor -- below
      // laptop it is bounded by the card's width, so that is tens of pixels,
      // not the FIGURE_MAX - FIGURE_MIN a desktop has to trade.
      const shownFigure = () =>
        Math.max(
          0,
          ...Array.from(stage.querySelectorAll('img')).map((i) => i.offsetHeight)
        );
      const smallestCard =
        natural - Math.max(0, shownFigure() - FIGURE_MIN) - TIGHT_SAVING;

      const keepHeader = cardBudget(headerHeight) >= smallestCard;

      // Dropped, the group hangs above the fold and the card owns everything
      // from PIN_TOP down; cardBudget's header gap is already spent up there.
      const budget = keepHeader
        ? cardBudget(headerHeight)
        : window.innerHeight - PIN_TOP - FLOOR_GAP;

      // Park the group so the cards land at PIN_TOP either way: with the title
      // dropped that means hanging the group's top above the fold by exactly
      // the title's height.
      stage.style.setProperty(
        '--pin-top',
        keepHeader ? `${PIN_TOP}px` : `${PIN_TOP - headerHeight - HEADER_GAP}px`
      );

      // Everything in the card that is not the illustration — padding, the gap
      // to the consequences row, and the row itself.
      const chrome = natural - FIGURE_MAX;
      let figure = FIGURE_MAX;
      let tight = false;

      if (natural > budget) {
        // Tighten the card's own padding first, then trade the illustration's
        // height for the room still missing.
        tight = true;
        figure = Math.round(budget - (chrome - TIGHT_SAVING));
      }

      const inFlow = () => {
        layers.forEach((layer) => {
          if (layer) layer.style.position = 'static';
        });
        const h = Math.max(...cards.map((card) => card.offsetHeight));
        layers.forEach((layer) => {
          if (layer) layer.style.position = '';
        });
        return h;
      };

      const applyFigure = (px) =>
        stage.style.setProperty(
          '--figure-max',
          `${Math.min(FIGURE_MAX, Math.max(FIGURE_MIN, px))}px`
        );

      stage.dataset.tight = String(tight);
      applyFigure(figure);

      // Predict, then verify. TIGHT_SAVING is one number but what tightening
      // actually gives back differs by breakpoint, so the prediction alone left
      // a phone's card standing past the fold. Correct against what the card
      // actually settled at -- and take the correction off the height the
      // figure is really rendering at, not off the cap: below laptop the
      // illustration is bounded by the card's width long before a 300px height
      // cap bites, so lowering the cap towards it changed nothing at all.
      let settled = inFlow();
      for (let pass = 0; pass < 3 && settled > budget; pass += 1) {
        figure = shownFigure() - (settled - budget);
        applyFigure(figure);
        settled = inFlow();
      }

      // Pin only if the group genuinely fits: a card taller than the budget
      // holds its own footer off the bottom of the screen for the whole scroll.
      const pinned = figure >= FIGURE_MIN && settled <= budget;
      stage.dataset.pinned = String(pinned);
      stage.dataset.tight = String(pinned && tight);
      stage.style.setProperty(
        '--runway',
        pinned ? `${TRANSITION_SCROLL}px` : '0px'
      );
      if (!pinned) applyFigure(FIGURE_MAX);

      cards.forEach((card) => {
        card.style.minHeight = `${settled}px`;
      });
      if (area) area.style.height = `${settled}px`;

      ScrollTrigger.refresh();
    };

    measure();

    // Same reason as ignoreMobileResize above: re-measuring on a height-only
    // change means re-measuring on every toolbar slide, which resizes the
    // pinned box and drags the scroll position with it.
    let lastW = window.innerWidth;
    let lastH = window.innerHeight;
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const widthChanged = w !== lastW;
      const heightJumped = Math.abs(h - lastH) > VIEWPORT_NOISE;
      lastW = w;
      lastH = h;
      if (widthChanged || heightJumped) measure();
    };

    // Re-measure once webfonts land — IBM Plex Mono changes how the story copy
    // wraps, and therefore how tall each card is.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }

    // The illustrations load lazily, so measure again once each lands.
    const figures = Array.from(stage.querySelectorAll('img'));
    figures.forEach((img) => {
      if (!img.complete) img.addEventListener('load', measure);
    });

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      figures.forEach((img) => img.removeEventListener('load', measure));
      cards.forEach((card) => {
        if (card) card.style.minHeight = '';
      });
    };
  }, []);

  // Park the incoming card below the fold before the browser paints. It cannot
  // be done in CSS: GSAP folds an element's existing transform into its own, so
  // a stylesheet offset here would compound with the timeline's and the card
  // would never arrive. A passive effect is too late and shows the card on top
  // for a frame.
  useIsomorphicLayoutEffect(() => {
    const incoming = cardRefs.current[1];
    if (incoming) gsap.set(incoming, { yPercent: 108 });
  }, []);

  // Drive the incoming card up over the one beneath it across the pinned
  // runway, and let the covered card recede so the pair reads as depth rather
  // than a flat swap.
  useEffect(() => {
    const stage = stageRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!stage || cards.length < 2) return undefined;

    const ctx = gsap.context(() => {
      const [beneath, incoming] = cards;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: () => `top top+=${PIN_TOP}`,
          end: () => `+=${TRANSITION_SCROLL}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        incoming,
        { yPercent: 108 },
        // Stops just short of covering the card beneath, so its top edge stays
        // showing and the pair reads as a drawer rather than a swap.
        { yPercent: DRAWER_REST, ease: 'none' },
        0
      ).fromTo(
        beneath,
        // Shrink from the top edge, not the centre. Scaling about the centre
        // walked this card's top down by half the height it lost -- 15px of the
        // 34px the drawer leaves showing -- so the stack read as a flat swap
        // with a hairline above it. Pinned at the top the edge holds still and
        // only the sides and foot draw in, which is what reads as depth.
        { scale: 1, opacity: 1, transformOrigin: '50% 0%' },
        { scale: 0.93, opacity: 0.45, ease: 'none' },
        0
      );
    }, stage);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      id='problem-narrative'
      aria-level='2'
      aria-label={t('pages.home.problem-narrative.section-aria-label')}
    >
      <Content alignSelf='center' overflow='visible'>
        <Stage ref={stageRef}>
          <PinnedViewport ref={viewportRef}>
        <NarrativeHeader>
          <H2
            fontFamily={FONT_MONO}
            fontWeight='500'
            letterSpacing='-0.06em'
            lineHeight='120%'
            color='var(--ifm-color-white)'
            textAlign='center'
          >
            <span>{t(ProblemNarrativeList.meta.titleLine1)}</span>
            <br />
            <span>
              {t(ProblemNarrativeList.meta.titleLine2)}{' '}
              <GradientWord>{t(ProblemNarrativeList.meta.titleGradient)}</GradientWord>
            </span>
          </H2>
          <Span
            fontSize='1.25rem'
            color='var(--ifm-color-white)'
            textAlign='center'
            letterSpacing='0.4px'
            lineHeight='150%'
            margin='16px 0 0 0'
          >
            {t(ProblemNarrativeList.meta.subtitle)}
          </Span>
        </NarrativeHeader>

        <CardsArea ref={areaRef}>
          {ProblemNarrativeList.vignettes.map((vignette, index) => (
            <CardLayer key={vignette.id} index={index}>
              <VignetteCard
                ref={setCardRef(index)}
                bg={vignette.cardBg}
                align={vignette.align}
              >
                <StoryRow imageSide={vignette.imageSide}>
                  <StoryFigure
                    src={useBaseUrl(vignette.image)}
                    alt={t(vignette.imageAlt)}
                    loading='lazy'
                    decoding='async'
                    width={498}
                    height={300}
                  />

                  <StoryText>
                    <Span
                      color='var(--ifm-color-white)'
                      fontSize='1.5rem'
                      fontFamily={FONT_MONO}
                      letterSpacing='-0.06em'
                      lineHeight='150%'
                    >
                      {t(vignette.story)}
                    </Span>
                  </StoryText>
                </StoryRow>

                <ConsequenceRow>
                  {vignette.consequences.map((consequence, i) => (
                    <ConsequenceItem key={i}>
                      <DotGridIcon />
                      <Span
                        color='var(--ifm-color-white)'
                        fontSize='1.25rem'
                        lineHeight='150%'
                      >
                        {t(consequence.text)}
                      </Span>
                    </ConsequenceItem>
                  ))}
                </ConsequenceRow>
              </VignetteCard>
            </CardLayer>
          ))}
        </CardsArea>
          </PinnedViewport>

          {/* The runway. A sibling rather than padding on Stage: sticky travel
              is bounded by the containing block's content box, so padding
              would give the pin no room to hold at all. */}
          <Runway aria-hidden='true' />
        </Stage>
      </Content>
    </Section>
  );
}

const NarrativeHeader = styled(ItemV)`
  h2 {
    font-size: 3rem;

    @media ${device.mobileL} {
      font-size: 2rem;
    }
  }

  align-items: center;
  max-width: 780px;
  margin: 0 auto;
`;

const GradientWord = styled.span`
  color: var(--ifm-color-custom-pink);
`;

// The scroll runway. Its extra height beyond the pinned group is exactly the
// distance the group holds for while the second card travels. Deliberately no
// overflow/transform/filter here: any of those would become the sticky
// containing block and the pin would silently stop working.
const Stage = styled.div`
  position: relative;
  width: 100%;
`;

const Runway = styled.div`
  height: var(--runway, 0px);

  ${Stage}[data-pinned='false'] & {
    height: 0;
  }
`;

// Holds the whole group — title, subtitle and the card stack — in place for
// the length of the runway, so the section reads as one piece.
const PinnedViewport = styled.div`
  position: sticky;
  top: var(--pin-top, ${PIN_TOP}px);

  ${Stage}[data-pinned='false'] & {
    position: static;
    top: auto;
  }
`;

// Fixed to the tallest card so both layers can occupy the same box.
const CardsArea = styled.div`
  position: relative;
  width: 100%;
  margin-top: ${HEADER_GAP}px;

  ${Stage}[data-pinned='false'] & {
    height: auto !important;
  }

  @media ${device.laptop} {
    margin-top: 40px;
  }
`;

// Both cards share one box; the later one paints on top and is translated down
// out of view until the scroll brings it up.
const CardLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: ${(props) => props.index + 1};
  will-change: transform;


  ${Stage}[data-pinned='false'] & {
    position: static;
    inset: auto;

    > * {
      transform: none !important;
      opacity: 1 !important;
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

const VignetteCard = styled(ItemV)`
  align-items: ${(props) => (props.align === 'right' ? 'flex-end' : 'flex-start')};
  justify-content: space-between;
  gap: 120px;
  width: 100%;
  padding: 48px;
  border-radius: 48px;
  background: ${(props) => props.bg};
  box-sizing: border-box;
  will-change: transform;

  ${Stage}[data-pinned='false'] & {
    min-height: 0 !important;
  }

  @media ${device.laptop} {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 48px;
    padding: 40px 32px;
  }

  @media ${device.mobileL} {
    gap: 32px;
    padding: 28px 20px;
  }

  /* Tight mode has to stay tighter than the card's own size at every width.
     Keyed only to the desktop numbers it outranked the media queries below --
     a data attribute beats a plain class -- so on a phone "tight" was handing
     the card desktop padding and a 72px gap and making it grow. */
  ${Stage}[data-tight='true'] & {
    gap: 72px;
    padding: 36px 48px;

    @media ${device.laptop} {
      gap: 32px;
      padding: 28px 24px;
    }

    @media ${device.mobileL} {
      gap: 20px;
      padding: 20px 16px;
    }
  }
`;

// Figma 37218: the chat and the copy sit side by side across the card's
// 1104px, 497.5 + 141.5 gap + 465. `imageSide` mirrors the pair on the second
// card. Below laptop they stack, illustration first, so the story still reads
// in the same order.
const StoryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) =>
    props.imageSide === 'right' ? 'row-reverse' : 'row'};
  /* The same two-column grid the consequences below use, so the illustration's
     left edge lands on the same line as the second consequence and as the
     other card's copy. At the design's 141px gap with unequal columns it sat
     ~85px right of both. */
  gap: ${STORY_GAP}px;
  width: 100%;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
  }

  @media ${device.tablet} {
    gap: 24px;
  }

  @media ${device.mobileL} {
    gap: 20px;
  }
`;

const StoryFigure = styled.img`
  /* The width tracks the height cap. Held at a flat 497.5px while max-height
     shrank the box, object-fit contain drew the picture short of its right
     edge and left a band of empty card beside it -- the taller the screen
     the smaller the cap, so it showed on some monitors and not others. */
  /* The other half of that grid. The picture is drawn at the cap's height and
     sits at the column's left edge, so its left edge is what lines up -- the
     slack falls to its right, where it reads as card, not as a gap in a row. */
  flex: 0 0 calc((100% - ${STORY_GAP}px) / 2);
  width: auto;
  max-width: 100%;
  height: var(--figure-max, 300px);
  max-height: var(--figure-max, none);
  /* Reserve the box before the lazy image arrives, so the card is measured at
     its true height rather than collapsing and skipping the tight mode. */
  aspect-ratio: 497.5 / 300;
  height: auto;
  object-fit: contain;
  object-position: left center;
  border-radius: 16px;
  display: block;

  @media ${device.laptop} {
    flex: 0 0 auto;
    width: min(100%, calc(var(--figure-max, 300px) * (465 / 300)));
  }
`;

// 465px is the Figma width, but it has to be a cap rather than a fixed width:
// as a fixed width it becomes a min-content floor that inflates the card (and
// then the whole Content column) past the viewport on narrow screens.
const StoryText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* Half the row, matching the consequence columns. */
  flex: 0 0 calc((100% - ${STORY_GAP}px) / 2);
  width: 100%;
  min-width: 0;

  @media ${device.laptop} {
    flex: 0 0 auto;
    max-width: 100%;
  }

  span {
    @media ${device.laptop} {
      font-size: 1.25rem;
    }

    @media ${device.tablet} {
      font-size: 1.125rem;
      letter-spacing: -0.04em;
    }

    @media ${device.mobileL} {
      font-size: 1rem;
      line-height: 145%;
    }
  }
`;

const ConsequenceRow = styled(ItemH)`
  gap: 64px;
  align-items: flex-start;
  width: 100%;

  @media ${device.laptop} {
    flex-direction: column;
    gap: 24px;
  }

  @media ${device.mobileL} {
    gap: 16px;
  }
`;

const ConsequenceItem = styled(ItemH)`
  flex: 1;
  /* The dot-grid mark centres against its line of text rather than hanging off
     the first line's top. */
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 24px;

  svg {
    flex: 0 0 auto;
  }

  @media ${device.tablet} {
    gap: 16px;
  }

  @media ${device.mobileL} {
    gap: 12px;
  }

  span {
    @media ${device.tablet} {
      font-size: 1rem;
    }

    @media ${device.mobileL} {
      font-size: 0.9375rem;
      line-height: 145%;
    }
  }
`;
