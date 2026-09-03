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
const STEP_SCROLL = 320;

/** Seconds a span takes to play once its stop is picked. */
const SPAN_SECONDS = 1.1;

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
const GROUND_VISIBLE = 140;
const GROUND_TAIL = 480;

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
      const available =
        window.innerHeight - PIN_TOP - copyEl.offsetHeight - COPY_GAP - GROUND_VISIBLE;
      const pinned = available >= MIN_STAGE;
      runway.dataset.pinned = String(pinned);
      // Unpinned the scene keeps its natural 1440x849; pinned it takes what is
      // left, and the comp is cropped rather than shrunk so the character holds
      // his size.
      stage.style.height = pinned ? `${Math.round(available)}px` : '';
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

        {/* The strip of ground the character walks on, held with him. */}
        <Ground aria-hidden='true' />
      </Pinned>

      {/* The rest of the ground, which the next section is pulled up over. It
          sits outside the pinned box so it scrolls with the page and the panel
          can overlap it, leaving ground showing in the gutters either side. */}
      <GroundTail aria-hidden='true' />
    </Runway>
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

  /* Unpinned the scene keeps the comp's own 1440x849; pinned, the effect sets
     an explicit height and the comp is cropped to it. The character is centred,
     so it is the empty ends of the scene that go. */
  aspect-ratio: 1440 / 849;

  ${Runway}[data-pinned='true'] & {
    aspect-ratio: auto;
  }

  > div,
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
  background-position: top center;
  background-size: auto ${GROUND_VISIBLE + GROUND_TAIL}px;
  image-rendering: pixelated;
`;

const Ground = styled.div`
  ${fullBleed}
  height: ${GROUND_VISIBLE}px;
  ${groundTexture}
`;

/* Pinned to the runway's bottom rather than left in flow. In flow it lands
   immediately after the pinned box's *flow* position — near the top of the
   runway — where it painted over the header and clipped the title. */
const GroundTail = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: ${GROUND_TAIL}px;
  ${groundTexture}
  /* Continues the strip above rather than restarting the tile. */
  background-position: center -${GROUND_VISIBLE}px;
`;

export default SolutionAnimation;
