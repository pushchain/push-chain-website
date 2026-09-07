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

/**
 * Scroll distance that calls for the next stop. Sized off what one scroll
 * actually moves this page, measured: a mouse notch and a light trackpad flick
 * are both about 130px, an ordinary trackpad swipe 580px, a hard flick 1600px.
 * A stop has to cost more than a swipe divided by one-plus-STEP_COMMIT, or a
 * single swipe crosses two of them -- at 130 it crossed four and a half, which
 * is why a step at a time turned into several. Four hundred puts an ordinary
 * swipe on exactly one stop and a couple of notches on one stop, and it is also
 * what sets how long the section is held.
 */
const STEP_SCROLL = 400;

/**
 * How fast a step is walked, in animation frames per second, and the shortest
 * and longest a step is allowed to take. Timing it by frame count rather than
 * giving every step the same duration is what keeps one pace across the whole
 * walk: the last stop is nearly twice the distance of the third, and a fixed
 * duration ran it at nearly twice the speed.
 */
const STEP_FPS = 145;
const STEP_MIN_SECONDS = 0.45;
const STEP_MAX_SECONDS = 1.25;

/**
 * How far past the halfway mark between two stops the scroll has to reach
 * before the next step is called for. Without it, resting exactly on the line
 * let the smallest movement flip the walk back and forth.
 */
const STEP_COMMIT = 0.55;

/**
 * How long the scroll has to be completely quiet -- gesture finished, momentum
 * spent -- before the page is settled onto the stop the walk is resting on, and
 * how long that settling takes. Without it the scroll comes to rest between two
 * stops and the leftover is carried into the next scroll, so an ordinary swipe
 * did one step and the next did two. Waiting for silence first is what keeps
 * this from fighting the browser: an earlier version settled the page while the
 * gesture was still running and the two moved it at once.
 */
const SETTLE_IDLE_MS = 190;
const SETTLE_SECONDS = 0.34;

/** Where the pinned composition parks under the header. */
const PIN_TOP = GLOBALS.HEADER.HEIGHT + GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.TOP + 8;

const RUNWAY = (STOPS.length - 1) * STEP_SCROLL;

/**
 * Scroll kept back at the end so the final stop is actually seen. Small now
 * that the walk lands on the last node rather than reaching it on the final
 * pixel: at 460 the reader scrolled several times against nothing before the
 * section would let go.
 */
const HOLD_TAIL = 120;

/** Gap between the copy and the scene. Every pixel here comes off the scene. */
const COPY_GAP = 24;

/**
 * Below this the scene is too short to read anything but the character, so the
 * section lays out in normal flow at the design's spacing rather than pinning
 * something cramped.
 */
/* Below this the scene is too short to read even scaled, and the section falls
   back to flowing normally. It only has to cover the scene now that the scene
   is scaled to the room it is given, rather than the slab a fixed-size one
   needed. */
const MIN_STAGE = 140;

// A height change smaller than this is a phone's browser chrome sliding, not a
// real viewport change.
const VIEWPORT_NOISE = 120;

/* Room left under the scene before the fold when the copy is not pinned. */
const FLOOR_GAP = 8;

/* The comp is 1920 wide, so at a phone's full width it renders about 170px
   tall -- a thin strip with the section below showing through the rest of the
   pinned box. Below laptop it is instead drawn large enough to fill the height
   the pin has to give, and the stage crops the ends: the comp pans with the
   character, so what goes is the empty lead-in and run-out at each moment
   rather than the steps themselves. Never smaller than full width.

   Solved rather than simply "as tall as the stage": the scene has to land so
   its ground line sits exactly GROUND_SHOW_MAX above the stage's bottom, or the
   offset below comes out positive, the stage gives that height back, and the
   section underneath shows through the difference. */
const sceneScaleFor = (availableH, stageW) => {
  const withCappedFloor = (availableH - GROUND_SHOW_MAX) / GROUND_LINE;
  const fillH =
    withCappedFloor * (1 - GROUND_LINE) >= GROUND_SHOW_MAX
      ? withCappedFloor
      : availableH;
  return Math.max(1, (fillH * COMP_W) / COMP_H / stageW);
};

/** The composition's own size. The wider export needs no scaling to fill. */
const COMP_W = 1920;
const COMP_H = 849;

/**
 * The composition's own landmarks, as fractions of its height, measured off a
 * natural-aspect render: the step cards begin at 179 of 669 and the ground line
 * falls at 504. Everything between them — cards, character, ground — is what
 * has to stay in frame.
 */
const CONTENT_TOP = 0.268;
const GROUND_LINE = 0.753;

/**
 * Ground kept below the ground line. It is the part that gives first: the
 * stage is always shorter than the comp, so rather than anchoring at a fixed
 * depth and letting the cards clip off the top, the strip is traded away down
 * to the floor below and only then does the top start to go.
 */
const GROUND_SHOW_MAX = 90;
const GROUND_SHOW_MIN = 40;

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
  // gzipped at about 83KB and stays out of the JS chunk entirely. The transfer
  // is small but parsing it and building the several thousand nodes it draws is
  // not, so that work waits until the section is within a screen or two rather
  // than competing with everything else during the initial load.
  const [near, setNear] = useState(false);
  useEffect(() => {
    const runway = runwayRef.current;
    if (!runway) return undefined;
    if (typeof IntersectionObserver !== 'function') {
      setNear(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '250% 0px' }
    );
    io.observe(runway);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!near) return undefined;
    let cancelled = false;
    fetch(dataUrl)
      .then((r) => r.json())
      .then((json) => {
        if (cancelled) return;
        // Handing this to React builds the several thousand nodes the scene
        // draws, and that is a ~1s block of the main thread -- measured, it
        // landed mid-scroll as a single 1040ms frame. Waiting for an idle
        // moment puts it in a gap between scrolls instead; the timeout is the
        // backstop for a reader who never stops scrolling.
        const build = () => {
          if (!cancelled) setData(json);
        };
        if (typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(build, { timeout: 2000 });
        } else {
          build();
        }
      })
      .catch((err) => {
        console.error('[SolutionAnimation] failed to load', err);
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [dataUrl, near]);

  // Decide whether the whole composition — copy, scene and the strip of ground
  // the next section sits on — fits the viewport, and size the scene to what is
  // left once the copy and ground have taken theirs.
  useEffect(() => {
    const runway = runwayRef.current;
    const copyEl = copyRef.current;
    const stage = stageRef.current;
    const pinnedEl = pinnedRef.current;
    if (!runway || !copyEl || !stage || !pinnedEl) return undefined;

    const fit = () => {
      // The strip of ground below the scene is outside the pinned box, so it
      // costs nothing here — the scene gets everything the copy leaves.
      // Title, description and scene hold the screen together, the way they do
      // on a desktop: the copy keeps its place at the top and the scene takes
      // exactly what is left. Letting the copy scroll out of the pin instead
      // did get the scene running on a phone, but it pushed the title off the
      // top of the screen while the animation played.
      const copyH = copyEl.offsetHeight;
      const available = window.innerHeight - PIN_TOP - copyH - COPY_GAP;

      // The scene is scaled to whatever that leaves rather than needing a fixed
      // slab of it, so the floor is only what the scene needs to stay legible.
      const pinned = available >= MIN_STAGE;

      runway.dataset.pinned = String(pinned);
      stage.style.height = pinned ? `${Math.round(available)}px` : '';

      // Slide the comp so its ground line lands just above the stage's bottom
      // edge. Centring it — which is what a plain `slice` does — cut the
      // character in half on a short viewport.
      const wide =
        typeof window.matchMedia === 'function' &&
        window.matchMedia(device.laptop).matches;
      const sceneScale = wide
        ? sceneScaleFor(available, stage.offsetWidth)
        : 1;

      const host = stage.firstElementChild as HTMLElement | null;
      if (host) {
        const stageW = stage.offsetWidth;
        const renderW = stageW * sceneScale;
        const renderH = (renderW * COMP_H) / COMP_W;
        const stageH = stage.offsetHeight;

        // Deepest the scene can sit before the cards start leaving the top.
        // Solved rather than fixed: with a fixed depth the cards had 8px of
        // margin at 743px tall and clipped on anything shorter.
        const room = stageH + renderH * (CONTENT_TOP - GROUND_LINE);

        // Never ask for more floor than the composition actually draws below
        // its ground line. On a phone that is only ~42px, so a 90px ask left a
        // black band between the scene's floor and the section beneath it.
        const drawnBelowGround = renderH * (1 - GROUND_LINE);
        const groundShow = Math.max(
          GROUND_SHOW_MIN,
          Math.min(GROUND_SHOW_MAX, room, drawnBelowGround)
        );

        let offset = pinned
          ? Math.round(stageH - (renderH * GROUND_LINE + groundShow))
          : 0;

        // A positive offset means the stage is taller than the scene needs.
        // That is what a phone gets: the comp is 1920 wide, so at full width it
        // renders only ~170px tall and left two thirds of the pinned box empty
        // below it. Clamping the offset at 0 pinned the scene to the top of
        // that box and left the blank on show; pushing it down would only move
        // the blank above it. Give the height back instead so the pinned box
        // hugs the scene and its ground sits on the fold.
        if (offset > 0) {
          stage.style.height = `${Math.round(stageH - offset)}px`;
          offset = 0;
        }

        host.style.width = `${Math.round(renderW)}px`;
        host.style.height = `${Math.round(renderH)}px`;
        host.style.left = `${Math.round((stageW - renderW) / 2)}px`;
        host.style.top = `${offset}px`;
      }

      // Publish where the pinned box ends and how long it holds for, so the
      // section below can park itself directly underneath for exactly that
      // stretch instead of leaving the rest of a phone's screen empty.
      const root = document.documentElement;
      root.style.setProperty(
        '--solution-pin-bottom',
        `${pinned ? PIN_TOP + pinnedEl.offsetHeight : 0}px`
      );
      // The ground strip below carries on from this scene's floor, so it has to
      // be drawn at whatever scale the scene ended up at.
      root.style.setProperty('--scene-scale', String(sceneScale));
      root.style.setProperty(
        '--solution-travel',
        `${pinned ? Math.max(0, runway.offsetHeight - pinnedEl.offsetHeight) : 0}px`
      );
    };

    fit();

    // A phone's address bar sliding changes innerHeight mid scroll, and this
    // effect resizes the pinned box off that number -- doing it under a moving
    // finger drags the scroll position and reads as the page jumping. Only a
    // width change, or a height change too large to be browser chrome, counts.
    let lastW = window.innerWidth;
    let lastH = window.innerHeight;
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const changed = w !== lastW || Math.abs(h - lastH) > VIEWPORT_NOISE;
      lastW = w;
      lastH = h;
      if (changed) fit();
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
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
    const LAST = STOPS.length - 1;

    const geometry = () => {
      const top = runway.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(
        1,
        runway.offsetHeight - pinned.offsetHeight - HOLD_TAIL
      );
      return { top, travel };
    };

    // Where the scroll sits along the walk, counted in stops. Read straight,
    // with nothing carried over between steps -- the walk used to be measured
    // from wherever the last step settled, and that drift is why scrolling
    // back up ran out of runway around the third stop instead of returning to
    // the first.
    const placeNow = () => {
      const { top, travel } = geometry();
      const p = Math.max(0, Math.min(1, (window.scrollY - top) / travel));
      return p * LAST;
    };

    // The scroll chooses which stop the character is going to; it does not
    // draw the walk there. The walk plays on its own clock, so a step always
    // runs at one pace and always finishes, whether it was asked for by a
    // flick or by a single notch.
    //
    // Nothing here touches the scroll. Carrying it by hand is what made the
    // section fight the browser: both were moving the page, a step stalled
    // halfway while they disagreed and then crossed two stops at once when
    // they agreed again. The section stays put because the runway underneath
    // it is long, which needs no help.
    let want = Math.round(placeNow());
    let frame = STOPS[want];
    let fromFrame = frame;
    let goneFor = 0;
    let stepSeconds = 0;

    const walkTo = (node: number) => {
      want = node;
      fromFrame = frame;
      goneFor = 0;
      stepSeconds = Math.max(
        STEP_MIN_SECONDS,
        Math.min(STEP_MAX_SECONDS, Math.abs(STOPS[node] - frame) / STEP_FPS)
      );
    };

    // Settling the page onto a stop once the reader has actually stopped.
    // Only the wheel and the finger call the scroll off; the scroll event is
    // watched purely for silence, and is ignored while the settle is the thing
    // moving the page.
    let quietFrom = 0;
    let settling = false;
    let settleFrom = 0;
    let settleTo = 0;
    let settleAt = 0;

    const stopScrollFor = (node: number) => {
      const { top, travel } = geometry();
      return Math.round(top + (travel * node) / LAST);
    };

    const cancelSettle = () => {
      settling = false;
      quietFrom = 0;
    };

    const onScroll = () => {
      if (settling) return;
      quietFrom = performance.now();
    };
    const onInput = () => cancelSettle();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onInput, { passive: true });
    window.addEventListener('touchstart', onInput, { passive: true });

    let drawn = -1;
    let prevAt = 0;
    const tick = (now: number) => {
      const dt = prevAt ? Math.min(0.05, (now - prevAt) / 1000) : 0;
      prevAt = now;

      const place = placeNow();
      const nearest = Math.max(0, Math.min(LAST, Math.round(place)));
      const walking = frame !== STOPS[want];
      // One stop at a time, and only once the stop being walked to has been
      // reached. A scroll long enough to reach across several stops used to be
      // taken in a single stride, which read as two or three steps happening at
      // once; it is walked stop by stop now, each at the same pace, however far
      // the scroll went.
      if (!walking && nearest !== want && Math.abs(place - want) > STEP_COMMIT) {
        walkTo(want + (nearest > want ? 1 : -1));
      }

      if (walking && dt) {
        goneFor += dt;
        const t = Math.min(1, goneFor / stepSeconds);
        // Gentle off the mark and gentle into the stop, flat in between, so
        // the character reads as setting off and arriving rather than being
        // dragged at one rate and cut off.
        const eased = t < 0.5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t);
        frame = fromFrame + (STOPS[want] - fromFrame) * eased;
        if (t >= 1) frame = STOPS[want];
      }

      // Never while the walk is still going, never once the reader has scrolled
      // past the runway -- settling there would hold the section against them.
      const { top, travel } = geometry();
      const inside = window.scrollY > top && window.scrollY < top + travel;
      if (settling) {
        const t = Math.min(1, (now - settleAt) / (SETTLE_SECONDS * 1000));
        const eased = 1 - (1 - t) * (1 - t) * (1 - t);
        window.scrollTo(0, Math.round(settleFrom + (settleTo - settleFrom) * eased));
        if (t >= 1) cancelSettle();
      } else if (!walking && inside && quietFrom && now - quietFrom > SETTLE_IDLE_MS) {
        const to = stopScrollFor(want);
        quietFrom = 0;
        if (Math.abs(to - window.scrollY) > 2) {
          settleFrom = window.scrollY;
          settleTo = to;
          settleAt = now;
          settling = true;
        }
      }

      const next = Math.round(frame);
      if (next !== drawn) {
        anim.goToAndStop(next, true);
        drawn = next;
      }
      raf = requestAnimationFrame(tick);
    };

    anim.goToAndStop(Math.round(frame), true);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onInput);
      window.removeEventListener('touchstart', onInput);
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

      </Pinned>
      </Runway>
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
    height: calc(${RUNWAY + HOLD_TAIL}px + 100svh);
  }

  @media ${device.laptop} {
    &[data-pinned='true'] {
      height: calc(${Math.round(RUNWAY * 0.8) + HOLD_TAIL}px + 100svh);
    }
  }

  @media ${device.mobileL} {
    &[data-pinned='true'] {
      height: calc(${Math.round(RUNWAY * 0.75) + HOLD_TAIL}px + 100svh);
    }
  }

  /* Below laptop the pinned box hugs the scene rather than filling the screen,
     which left the rest of the fold empty for the whole hold. Pull the section
     below up by the hold's length so it starts directly under the pinned box;
     it parks itself there (see AgenticScaleSection) and the spacer at its foot
     puts the scroll distance back, so nothing else on the page moves. */
  @media ${device.laptop} {
    &[data-pinned='true'] {
      margin-bottom: calc(-1 * var(--solution-travel, 0px));
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

  /* Unpinned the scene keeps the comp's own aspect; pinned, the effect sets
     an explicit height and the comp is cropped to it. The character is centred,
     so it is the empty ends of the scene that go. */
  aspect-ratio: ${COMP_W} / ${COMP_H};

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


export default SolutionAnimation;
