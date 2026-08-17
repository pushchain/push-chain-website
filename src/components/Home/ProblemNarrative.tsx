// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import { useEffect, useRef } from 'react';

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

// Hard floor for where a stuck card parks, so it can never tuck under the
// fixed header on short viewports.
const HEADER_OFFSET = GLOBALS.HEADER.HEIGHT + GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.TOP + 24;

// Breathing room the parked card always keeps below the header, on top of the
// header floor. Centring alone is not enough: on a short laptop viewport
// (~740px) the centred position lands only a few pixels below the header, so
// the stack still reads as glued to the nav.
const MIN_PARK_GAP = 64;

// A parked card sits vertically centred in the viewport rather than pinned to
// the top, which reads far better when the card is shorter than the screen —
// but never closer to the nav than the gap above, and never so low that the
// card's bottom edge runs off the screen on a short window.
const parkOffset = (cardHeight) => {
  if (typeof window === 'undefined') return HEADER_OFFSET;

  const viewport = window.innerHeight;
  const centred = Math.round((viewport - cardHeight) / 2);
  const preferred = Math.max(HEADER_OFFSET + MIN_PARK_GAP, centred);
  const ceiling = Math.max(HEADER_OFFSET, viewport - cardHeight - 24);

  return Math.min(preferred, ceiling);
};

// Vertical gap between the cards while they are still stacked in flow.
const CARD_GAP = 48;

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
  const isMobile = useMediaQuery(device.mobileL);
  // Stack only where there's room for it; below this the cards read better
  // as a simple vertical list.
  const isCompact = useMediaQuery(device.laptop);

  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const parkRef = useRef(HEADER_OFFSET);
  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  // The stack is pure CSS `position: sticky` in natural document flow: every
  // card keeps its own place in the flow, so the section's height is always
  // the true sum of its cards and the following section can never ride up
  // underneath it. The cards differ by a line or two of wrapped copy though,
  // so equalise their heights — otherwise the incoming card is shorter than
  // the one it is meant to cover and leaves a sliver showing.
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (cards.length < 2) return undefined;

    const equalize = () => {
      cards.forEach((card) => {
        card.style.minHeight = '';
      });

      if (isCompact) {
        ScrollTrigger.refresh();
        return;
      }

      const tallest = Math.max(...cards.map((card) => card.offsetHeight));
      cards.forEach((card) => {
        card.style.minHeight = `${tallest}px`;
      });

      // Park the stack vertically centred for this viewport. Published as a
      // custom property so the sticky CSS and the GSAP trigger below always
      // read the exact same number.
      parkRef.current = parkOffset(tallest);
      stageRef.current?.style.setProperty('--stack-top', `${parkRef.current}px`);

      // Heights and offsets just changed, so every trigger needs recomputing.
      ScrollTrigger.refresh();
    };

    equalize();

    // Re-measure once webfonts land — IBM Plex Mono changes how the story
    // copy wraps, and therefore how tall each card is.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(equalize);
    }

    window.addEventListener('resize', equalize);
    return () => {
      window.removeEventListener('resize', equalize);
      cards.forEach((card) => {
        if (card) card.style.minHeight = '';
      });
    };
  }, [isCompact]);

  // Cosmetic only: as the incoming card climbs over the one beneath it, the
  // lower card recedes so the stack reads as depth rather than a flat swap.
  // This touches transform/opacity exclusively — never layout — so it cannot
  // disturb the sticky flow above.
  useEffect(() => {
    if (isCompact) return undefined;

    const cards = cardRefs.current.filter(Boolean);
    if (cards.length < 2 || !stageRef.current) return undefined;

    const ctx = gsap.context(() => {
      cards.slice(0, -1).forEach((card) => {
        gsap.to(card, {
          scale: 0.93,
          opacity: 0.45,
          ease: 'none',
          scrollTrigger: {
            trigger: stageRef.current,
            // From the moment the first card parks…
            start: () => `top top+=${parkRef.current}`,
            // …until the stack releases, i.e. the card above is fully covered.
            end: () => `bottom top+=${parkRef.current + card.offsetHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    }, stageRef);

    return () => ctx.revert();
  }, [isCompact]);

  return (
    <Section
      id='problem-narrative'
      aria-level='2'
      aria-label={t('pages.home.problem-narrative.section-aria-label')}
    >
      <Content alignSelf='center' overflow='visible'>
        <NarrativeHeader>
          <H2
            fontFamily={FONT_MONO}
            fontSize={isMobile ? '2rem' : '3rem'}
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
            margin='32px 0 0 0'
          >
            {t(ProblemNarrativeList.meta.subtitle)}
          </Span>
        </NarrativeHeader>

        <Stage ref={stageRef}>
          {ProblemNarrativeList.vignettes.map((vignette, index) => (
            <CardSlot key={vignette.id}>
              <VignetteCard
                ref={setCardRef(index)}
                bg={vignette.cardBg}
                align={vignette.align}
              >
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

                <ConsequenceRow flexDirection={isMobile ? 'column' : 'row'}>
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
            </CardSlot>
          ))}
        </Stage>
      </Content>
    </Section>
  );
}

const NarrativeHeader = styled(ItemV)`
  align-items: center;
  max-width: 780px;
  margin: 0 auto;
`;

const GradientWord = styled.span`
  color: var(--ifm-color-custom-pink);
`;

// Plain block in normal flow. Deliberately no overflow/transform/filter here:
// any of those would turn this into the sticky containing block and the stack
// would silently stop working.
const Stage = styled.div`
  position: relative;
  width: 100%;
  margin-top: 64px;

  @media ${device.mobileL} {
    margin-top: 40px;
  }
`;

// One slot per card, stacked normally. Each sticks at the same offset, so a
// later card climbs over an earlier one and — being later in the DOM — paints
// on top of it without needing any z-index juggling.
const CardSlot = styled.div`
  position: sticky;
  top: var(--stack-top, ${HEADER_OFFSET}px);
  width: 100%;

  &:not(:last-child) {
    margin-bottom: ${CARD_GAP}px;
  }

  @media ${device.laptop} {
    position: static;
    top: auto;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

const VignetteCard = styled(ItemV)`
  align-items: ${(props) => (props.align === 'right' ? 'flex-end' : 'flex-start')};
  justify-content: space-between;
  gap: 157px;
  width: 100%;
  padding: 48px;
  border-radius: 48px;
  background: ${(props) => props.bg};
  box-sizing: border-box;
  will-change: transform;

  @media ${device.laptop} {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 48px;
    padding: 40px 32px;
    min-height: 0 !important;
  }

  @media ${device.mobileL} {
    gap: 32px;
    padding: 28px 20px;
  }
`;

// 465px is the Figma width, but it has to be a cap rather than a fixed width:
// as a fixed width it becomes a min-content floor that inflates the card (and
// then the whole Content column) past the viewport on narrow screens.
const StoryText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 465px;
  min-width: 0;
`;

const ConsequenceRow = styled(ItemH)`
  gap: 64px;
  align-items: flex-start;
  width: 100%;

  @media ${device.laptop} {
    flex-direction: column;
    gap: 24px;
  }
`;

const ConsequenceItem = styled(ItemH)`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 24px;

  svg {
    flex: 0 0 auto;
  }
`;
