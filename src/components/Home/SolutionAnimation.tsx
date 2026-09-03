// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useEffect, useRef, useState } from 'react';

// External Components
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import styled from 'styled-components';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';

/**
 * The 8-bit journey behind "Making AI universally accountable".
 *
 * The design team's reference drives this by hijacking the wheel: one notch
 * advances one stop and the animation eases across the span between them. That
 * cannot be lifted onto a page with other sections, so the same idea is
 * expressed through the scroll position instead — the section pins, and how far
 * the reader has scrolled into its runway picks the stop. The character is
 * already centred in the composition (world x ~1223 of 2446), so nothing pans:
 * he holds the middle and the scene moves around him.
 *
 * Frames each stop settles on, from the reference. They are chosen to land
 * between motions, never inside a walk or a transform, and 540 rather than 541
 * because Lottie's `op` is exclusive.
 */
const STOPS = [0, 90, 200, 280, 378, 540];

/** Scroll distance that advances one stop. */
const STEP_SCROLL = 460;

/** Seconds a span takes to play once its stop is picked. */
const SPAN_SECONDS = 2.2;

/** Where the pinned composition parks under the header. */
const PIN_TOP = GLOBALS.HEADER.HEIGHT + GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.TOP + 8;

const RUNWAY = (STOPS.length - 1) * STEP_SCROLL;

/**
 * The ground. Figma runs the band from y=3581 to 4399 — 818px — and starts the
 * pink panel at 3781, so a strip of it shows above the panel and the rest
 * continues behind, visible in the gutters either side of the inset panel.
 *
 * The strip is shorter than the design's 200px because every pixel of it comes
 * off the scene's height while the section is pinned, and a 743px laptop has
 * little to spare. It still reads as ground under the character.
 */
/**
 * The ground image at its own height. The next section is pulled up over it so
 * only the strip above and the gutters either side stay visible — Figma runs
 * the band 3581..4399 and starts the pink panel at 3781.
 */
const GROUND_FULL = 818;
const GROUND_ABOVE = 200;

/** The scene renders at this fraction of the stage's width. */
const COMP_SCALE = 0.8;

/** The ground at the scale the scene is drawn at. */
const GROUND_H = Math.round(GROUND_FULL * COMP_SCALE);

/**
 * How much of the ground is held inside the pinned box, so the character has
 * ground under him while the scene plays. The rest sits below the runway for
 * the next section to stand on.
 */
const GROUND_BAND = 120;

/** What the next section is pulled up over: everything but the strip above it. */
export const GROUND_OVERLAP =
  GROUND_H - GROUND_BAND - Math.round(GROUND_ABOVE * COMP_SCALE - GROUND_BAND);

/**
 * Where the ground line sits in the composition, as a fraction of its height.
 * Measured off a natural-aspect render: 684 of 891. The scene is anchored by
 * this rather than centred, so the cards, the character and the ground he
 * stands on all stay in frame when the stage is shorter than the comp.
 */
const GROUND_LINE = 0.768;

/**
 * The comp is cut exactly at its ground line and the full-width strip below
 * takes over from there. Keeping any of the comp's own ground would show it
 * inset by the scale above, with black either side of it, against a full-width
 * strip — the scene's own background is black, so above the ground line those
 * gaps are invisible.
 */
const GROUND_SHOW = 0;

/** Gap between the copy and the scene. */
const COPY_GAP = 32;

/**
 * Below this the scene is too short to read anything but the character, so the
 * section lays out in normal flow at the design's spacing rather than pinning
 * something cramped.
 */
const MIN_STAGE = 280;

const SolutionAnimation: React.FC<{ copy: React.ReactNode }> = ({ copy }) => {
  const runwayRef = useRef<HTMLDivElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [data, setData] = useState<object | null>(null);
  const [failed, setFailed] = useState(false);
  const dataUrl = useBaseUrl('/assets/website/home/solution/push-8bit.json');

  // 3MB of shape data, so it is fetched rather than bundled — it is served
  // gzipped at about 83KB and stays out of the JS chunk entirely.
  useEffect(() => {
    let cancelled = false;
    fetch(dataUrl)
      .then((r) => r.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch((err) => {
        console.error('[SolutionAnimation] failed to load', err);
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [dataUrl]);

  // Decide whether the whole composition — copy, scene and the strip of ground
  // the next section sits on — fits the viewport, and size the scene to what is
  // left once the copy and ground have taken theirs.
  useEffect(() => {
    const runway = runwayRef.current;
    const copyEl = copyRef.current;
    const stage = stageRef.current;
    if (!runway || !copyEl || !stage) return undefined;

    const fit = () => {
      // The strip of ground below the scene is outside the pinned box, so it
      // costs nothing here — the scene gets everything the copy leaves.
      const available =
        window.innerHeight - PIN_TOP - copyEl.offsetHeight - COPY_GAP - GROUND_BAND;
      const pinned = available >= MIN_STAGE;
      runway.dataset.pinned = String(pinned);
      stage.style.height = pinned ? `${Math.round(available)}px` : '';

      // Slide the comp so its ground line lands just above the stage's bottom
      // edge. Centring it — which is what a plain `slice` does — cut the
      // character in half on a short viewport.
      const host = stage.firstElementChild as HTMLElement | null;
      if (host) {
        const renderW = stage.offsetWidth * COMP_SCALE;
        const renderH = (renderW * 849) / 1440;
        const offset = pinned
          ? Math.round(stage.offsetHeight - (renderH * GROUND_LINE + GROUND_SHOW))
          : 0;
        host.style.width = `${Math.round(renderW)}px`;
        host.style.height = `${Math.round(renderH)}px`;
        host.style.left = `${Math.round((stage.offsetWidth - renderW) / 2)}px`;
        host.style.top = `${Math.min(0, offset)}px`;
      }
    };

    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [data]);

  useEffect(() => {
    const runway = runwayRef.current;
    const pinned = pinnedRef.current;
    const stage = stageRef.current;
    const anim = lottieRef.current;
    if (!runway || !pinned || !stage || !anim || !data) return;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // The pixel-art layers sit on a 9px grid; letting the browser antialias
    // them shows seams between adjacent squares.
    stage
      .querySelectorAll('svg g')
      .forEach((g) => g.setAttribute('shape-rendering', 'crispEdges'));

    if (reduced) {
      anim.goToAndStop(STOPS[STOPS.length - 1], true);
      return;
    }

    let raf = 0;
    let frame = 0;
    let from = 0;
    let to = 0;
    let startedAt = 0;
    let moving = false;
    let index = 0;

    // Which stop the reader has scrolled to. Measured against the runway, not
    // the pinned box: that one is the sticky element, so once it pins its
    // document position tracks the scroll and the distance travelled reads as
    // zero for the whole pinned stretch.
    const stopFromScroll = () => {
      if (runway.dataset.pinned !== 'true') return index;
      const top = runway.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(1, runway.offsetHeight - pinned.offsetHeight);
      const travelled = window.scrollY - top;
      const progress = Math.max(0, Math.min(1, travelled / travel));
      return Math.round(progress * (STOPS.length - 1));
    };

    const goTo = (next: number) => {
      if (next === index) return;
      index = next;
      from = frame;
      to = STOPS[index];
      startedAt = performance.now();
      moving = true;
    };

    const tick = (now: number) => {
      if (moving) {
        const t = Math.min(1, (now - startedAt) / (SPAN_SECONDS * 1000));
        // Cubic ease-out, as the reference uses, so a span decelerates into
        // its stop rather than arriving at speed.
        frame = from + (to - from) * (1 - Math.pow(1 - t, 3));
        if (t >= 1) {
          frame = to;
          moving = false;
        }
        anim.goToAndStop(Math.round(frame), true);
      }
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => goTo(stopFromScroll());

    index = stopFromScroll();
    frame = STOPS[index];
    anim.goToAndStop(frame, true);

    window.addEventListener('scroll', onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [data]);

  return (
    <>
      <Runway ref={runwayRef} data-pinned='false'>
      <Pinned ref={pinnedRef}>
        <Copy ref={copyRef}>{copy}</Copy>

        <Stage ref={stageRef}>
          {data && !failed && (
            <Lottie
              lottieRef={lottieRef}
              animationData={data}
              loop={false}
              autoplay={false}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: false,
              }}
            />
          )}
        </Stage>

        {/* Ground under the character, held with him. */}
        <GroundBand aria-hidden='true' />
      </Pinned>
      </Runway>

      {/* The ground continues below the scene and runs under the next section,
          which stands on it. Outside the runway so it never competes with the
          scene for the pinned box's height. */}
      <Ground aria-hidden='true' />
    </>
  );
};

/* The scroll runway. Its extra height beyond the pinned box is the distance
   the composition holds for while the character works through the stops. A real
   element rather than padding: sticky travel is bounded by the containing
   block's content box, and padding buys none of it. */
const Runway = styled.div`
  position: relative;
  width: 100%;

  &[data-pinned='true'] {
    height: calc(${RUNWAY}px + 100svh);
  }

  @media ${device.laptop} {
    &[data-pinned='true'] {
      height: calc(${Math.round(RUNWAY * 0.7)}px + 100svh);
    }
  }

  @media ${device.mobileL} {
    &[data-pinned='true'] {
      height: calc(${Math.round(RUNWAY * 0.55)}px + 100svh);
    }
  }
`;

/* Holds the copy, the scene and the ground together, so the whole section sits
   still and only the animation advances. When the viewport is too short for all
   three the runway drops its height and this falls back to normal flow at the
   design's own spacing. */
const Pinned = styled.div`
  position: sticky;
  top: ${PIN_TOP}px;

  ${Runway}[data-pinned='false'] & {
    position: static;
    top: auto;
  }
`;

const Copy = styled.div`
  margin-bottom: ${COPY_GAP}px;
`;

/* Full-bleed out of the page's max-width column. Done with left/margin rather
   than a transform: a transform would become the containing block for the
   sticky parent and the pin would stop working. */
const fullBleed = `
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
`;

const Stage = styled.div`
  ${fullBleed}
  overflow: hidden;
  /* The comp is positioned by the effect above, which anchors its ground line
     to this box's bottom edge. */
  /* Width, height and offset are all set by the effect above, which scales the
     comp and anchors its ground line to this box's bottom edge. */
  > div {
    display: block;
    position: absolute;
  }

  /* Unpinned the scene keeps the comp's own 1440x849; pinned, the effect sets
     an explicit height and the comp is cropped to it. The character is centred,
     so it is the empty ends of the scene that go. */
  aspect-ratio: 1440 / 849;

  ${Runway}[data-pinned='true'] & {
    aspect-ratio: auto;
  }

  /* Only the svg is forced to fill; the host div's height is set by the effect
     above, and an !important here would beat that inline value and squash the
     comp back to the stage's height. */
  svg {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }
`;

/* Figma 49456:681 — the ground tile, repeated across the width. It continues
   past the pinned box so the next section can be pulled up over it. */
const groundTexture = `
  background-image: url('/assets/website/home/solution/ground.webp');
  background-repeat: repeat-x;
  background-size: auto ${GROUND_H}px;
  image-rendering: pixelated;
`;

const GroundBand = styled.div`
  ${fullBleed}
  height: ${GROUND_BAND}px;
  ${groundTexture}
  background-position: top center;
`;

const Ground = styled.div`
  ${fullBleed}
  height: ${GROUND_H - GROUND_BAND}px;
  ${groundTexture}
  /* Continues the band above rather than restarting the tile. */
  background-position: center -${GROUND_BAND}px;
`;


export default SolutionAnimation;
