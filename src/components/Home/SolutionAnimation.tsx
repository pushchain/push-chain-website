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
 * Scroll the walk is spread over, per stop. Measured on this page: a mouse
 * notch and a light trackpad flick are both about 130px, an ordinary trackpad
 * swipe 580px, a hard flick 1600px. At 400 a stop takes a swipe or a couple of
 * notches to cross, which is slow enough to read what happens in it and short
 * enough that the section does not outstay its welcome. Five of them set how
 * long the section is pinned.
 */
const STEP_SCROLL = 400;

/**
 * How long a step takes, from the reference's own driver.
 *
 * Not a rate: each gap is timed in its own right, because two of them are
 * deliberately stretched past their real duration. Gap 1 is Universal Rules
 * pulling itself apart, 3.67s of animation held for 7.34s; gap 4 is the flight
 * to the end, 5.40s held for 7.40s so the levitation has room to read. The rest
 * run at their true 30fps length, capped so no single step outstays its
 * welcome. `null` means automatic.
 */
const SPAN_MS = [null, 7340, null, null, 7400];
const MAX_MS = 6000;
const PLAYBACK = 1.0;

/**
 * Skipping. A step called for within FAST_WINDOW of the last one is part of a
 * burst -- the reader is moving through rather than watching -- and every step
 * in that burst is capped to FAST_MS. It does not accelerate further, and it
 * does not reset just because one step happened to finish first.
 */
const FAST_MS = 1000;
const FAST_WINDOW = 1500;

/** The reference's own curve: quick away from the stop, settling into the next. */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * The duration for a step, in seconds. `gap` is the index of the gap being
 * crossed, which is the lower of the two stop indices.
 */
const spanSeconds = (gap, fromFrame, toFrame, bursting) => {
  const override = SPAN_MS[gap];
  const natural =
    override != null
      ? override
      : Math.min(MAX_MS, (Math.abs(toFrame - fromFrame) / 30) * 1000) / PLAYBACK;
  return (bursting ? Math.min(natural, FAST_MS) : natural) / 1000;
};

/**
 * How far past a stop the scroll has to reach, in animation frames, before the
 * next step is called for -- about a notch of a wheel. Without it, resting on
 * the line let the smallest movement flip the walk back and forth.
 */
const COMMIT_FRAMES = 20;

/** Slack on the way back, so resting on the line cannot flicker across it. */
const COMMIT_HYST = 8;

/** Where the pinned composition parks under the header. */
const PIN_TOP =
  GLOBALS.HEADER.HEIGHT + GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.TOP + 8;

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
 * How far the copy is dropped from the top of the pinned box.
 *
 * The composition draws nothing in its top CONTENT_TOP of height, so on a
 * desktop there is nearly a third of a screen of empty scene above the cards
 * and the copy, pinned to the very top, sat a long way above anything with a
 * band of black between. Dropping it by this much puts the title into that
 * band rather than against the header, which is what "almost centred" amounts
 * to while the scene keeps the bottom two thirds.
 *
 * Below laptop the scene is scaled up until it fills the height and that band
 * closes, so there is nothing to drop into; the lead there is only what it
 * takes to clear the floating navbar the title was sitting under.
 */
const COPY_LEAD = 160;
const COPY_LEAD_TABLET = 56;
const COPY_LEAD_MOBILE = 32;

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
/**
 * The viewport height with the browser's chrome hidden -- what CSS calls lvh.
 * `innerHeight` is the dynamic one: on a phone it changes by the height of the
 * address bar as it slides, and sizing the scene off it is what made the scene
 * resize mid-scroll. Read from a probe rather than guessed, and only when the
 * screen itself changes, so a step is always drawn at the size the one before
 * it was.
 */
const stableViewportH = () => {
  if (typeof document === 'undefined') return 0;
  const probe = document.createElement('div');
  probe.style.cssText =
    'position:fixed;top:0;left:0;width:0;height:100lvh;visibility:hidden;pointer-events:none';
  document.body.appendChild(probe);
  const h = probe.offsetHeight;
  probe.remove();
  return h || window.innerHeight;
};

const COMP_W = 1440;
const COMP_H = 849;

/* How much larger than its window the composition is drawn, from the
   reference. The scene is framed with room around it, and at 1.0 that room
   reads as the character standing in an empty field; 1.3 crops into it. */
const ZOOM = 1.3;

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
  /* The 1440-wide cut. Same artwork as the 1920 one -- the two files differ in
     exactly one number -- but framed so the scene reads without a camera track
     to slide it, which is what the reference does. */
  const dataUrl = useBaseUrl(
    '/assets/website/home/solution/push-8bit-1440.json'
  );

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
      // offsetHeight already includes the lead, which is padding on the copy;
      // only the gap below it is separate.
      const copyH = copyEl.offsetHeight;
      const available = stableViewportH() - PIN_TOP - copyH - COPY_GAP;

      // The scene is scaled to whatever that leaves rather than needing a fixed
      // slab of it, so the floor is only what the scene needs to stay legible.
      const pinned = available >= MIN_STAGE;

      runway.dataset.pinned = String(pinned);

      // True below laptop -- where the comp is far too wide to fill the height
      // on its own and is scaled up until it does.
      const fillsHeight =
        typeof window.matchMedia === 'function' &&
        window.matchMedia(device.laptop).matches;

      // Published before the stage is measured, because below laptop it is what
      // the stage's height is worked out from in CSS.
      document.documentElement.style.setProperty(
        '--solution-copy',
        `${pinned ? copyH + COPY_GAP : 0}px`
      );

      // Below laptop the stage is left to the stylesheet, which reaches the
      // fold in a viewport unit that follows the address bar. Measuring it back
      // off the box rather than off `innerHeight` is what keeps the scene
      // scaled to the height it actually gets: scaled against the number this
      // effect last saw, the scene came up short and left the stage black above
      // it every time the bar slid.
      stage.style.height =
        pinned && !fillsHeight ? `${Math.round(available)}px` : '';
      const stageBox = pinned ? stage.offsetHeight : available;

      // Slide the comp so its ground line lands just above the stage's bottom
      // edge. Centring it — which is what a plain `slice` does — cut the
      // character in half on a short viewport.
      const sceneScale = fillsHeight
        ? sceneScaleFor(stageBox, stage.offsetWidth)
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

        // Above laptop a positive offset means the stage is taller than the
        // scene needs, and the height is given back so the box hugs the scene.
        // Below laptop it is not: the scene is scaled to fill the height, and
        // handing any of it back is what let the section underneath show at the
        // fold. A phone's address bar sliding grows the viewport by less than
        // the resize guard allows through, so the box kept a height measured
        // against the smaller screen and the pink panel below appeared in the
        // strip it no longer covered.
        if (offset > 0 && !fillsHeight) {
          stage.style.height = `${Math.round(stageH - offset)}px`;
          offset = 0;
        }

        host.style.width = `${Math.round(renderW)}px`;
        host.style.height = `${Math.round(renderH)}px`;
        host.style.left = `${Math.round((stageW - renderW) / 2)}px`;

        // Held against the stage's floor rather than measured down from its
        // top, so the scene stays on the fold when the stage grows underneath
        // it -- which it does, in CSS, every time the address bar slides.
        if (fillsHeight) {
          host.style.top = 'auto';
          host.style.bottom = `${Math.round(groundShow - drawnBelowGround)}px`;
        } else {
          host.style.bottom = 'auto';
          host.style.top = `${offset}px`;
        }
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
      // Only worth parking the next section under this one while the pinned box
      // hugs its scene. Below laptop it fills the screen now, so there is
      // nothing to park under and the page runs in its normal order.
      root.style.setProperty(
        '--solution-travel',
        `${pinned && !fillsHeight ? Math.max(0, runway.offsetHeight - pinnedEl.offsetHeight) : 0}px`
      );
    };

    fit();

    // A phone's address bar sliding changes innerHeight mid scroll, and this
    // effect resizes the pinned box off that number -- doing it under a moving
    // finger drags the scroll position and reads as the page jumping. Only a
    // width change, or a height change too large to be browser chrome, counts.
    let lastW = window.innerWidth;
    let lastH = stableViewportH();
    const onResize = () => {
      const w = window.innerWidth;
      // The stable height, so the address bar sliding is not a resize at all.
      // Compared against innerHeight this fired on every slide, and refitting
      // mid-scroll is what made the scene change size under the reader.
      const h = stableViewportH();
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
    const TOTAL = STOPS[LAST];

    const geometry = () => {
      const top = runway.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(
        1,
        runway.offsetHeight - pinned.offsetHeight - HOLD_TAIL
      );
      return { top, travel };
    };

    // Every frame of the walk owns a piece of the runway, in order. Reaching a
    // piece plays it, at whatever speed the reader is going, and scrolling past
    // the runway takes the section with it -- there is nothing to finish first.
    //
    // Nothing here writes the scroll. Every version that did fought the browser
    // for it: held at the pin, the browser kept the momentum it had not been
    // allowed to spend and spent it the moment the hold lifted, which is the
    // jump clean past the section below. A reading of the scroll cannot do
    // that, whatever speed it is read at.
    //
    // Read flat rather than a stop to each equal slice, so the character keeps
    // one pace: the last stop is nearly twice the walk of the third, and giving
    // them the same scroll ran it at nearly twice the speed.
    const frameFor = () => {
      const { top, travel } = geometry();
      const p = Math.max(0, Math.min(1, (window.scrollY - top) / travel));
      return p * TOTAL;
    };

    // The scroll picks the stop; it does not draw the way there. Once a step
    // is called for it is walked to its end on its own clock, so halting the
    // scroll halfway through one leaves the character mid-stride no longer --
    // it carries on and arrives. Scrolling further while it walks simply calls
    // for the stop after, and the walk carries on to that one instead.
    let idx = 0;
    {
      const p = frameFor();
      while (idx < LAST && p > STOPS[idx] + COMMIT_FRAMES) idx += 1;
    }

    let shown = STOPS[idx];
    let fromFrame = shown;
    let goneFor = 0;
    let stepSeconds = 0;
    let lastCalledAt = -1e9;

    const walkTo = (to: number) => {
      const now = performance.now();
      // A step called for close behind the last one means the reader is moving
      // through rather than watching, and the whole burst runs short.
      const bursting = now - lastCalledAt < FAST_WINDOW;
      lastCalledAt = now;
      // The gap being crossed is the lower of the two stop indices, so a step
      // is timed the same whichever way it is walked.
      const gap = Math.min(idx, to);
      idx = to;
      fromFrame = shown;
      goneFor = 0;
      stepSeconds = spanSeconds(gap, fromFrame, STOPS[to], bursting);
    };

    let drawn = -1;
    let prevAt = 0;

    const tick = (now: number) => {
      const dt = prevAt ? Math.min(0.05, (now - prevAt) / 1000) : 0;
      prevAt = now;

      // Settled in one pass. Advancing a stop per frame instead restarted the
      // step on each of them, so a scroll that had already reached the third
      // stop left the character creeping a frame at a time near the first.
      const p = frameFor();
      // Both tests hang off the same line -- the one the scroll crossed to ask
      // for this stop -- so they cannot disagree. Hung off the stop itself
      // instead, the last stop was asked for and taken back on alternate
      // frames, because the scroll was past the line that called for it and
      // short of the stop it called for.
      let want = idx;
      while (want < LAST && p > STOPS[want] + COMMIT_FRAMES) want += 1;
      while (want > 0 && p < STOPS[want - 1] + COMMIT_FRAMES - COMMIT_HYST)
        want -= 1;
      if (want !== idx) walkTo(want);

      if (shown !== STOPS[idx] && dt) {
        goneFor += dt;
        // Whichever is further through the step: the clock, or the reader.
        // The clock alone gave every step the same length however fast the
        // page was moving, so a quick scroll met a walk going at its reading
        // pace. The reader alone stopped the walk dead wherever they stopped.
        // Taking the greater of the two means the scroll sets the speed while
        // it is ahead, and the clock carries the step to its end once it is
        // not -- so a step always finishes, and never lags behind the page.
        const span = STOPS[idx] - fromFrame;
        const byScroll = span === 0 ? 1 : (p - fromFrame) / span;
        const t = Math.min(1, Math.max(goneFor / stepSeconds, byScroll));
        // Gentle off the mark and gentle into the stop, flat in between, so the
        // character reads as setting off and arriving rather than being dragged
        // at one rate and cut off.
        const eased = easeOutCubic(t);
        shown = fromFrame + (STOPS[idx] - fromFrame) * eased;
        if (t >= 1) shown = STOPS[idx];
      }

      const next = Math.round(shown);
      if (next !== drawn) {
        anim.goToAndStop(next, true);
        drawn = next;
      }
      raf = requestAnimationFrame(tick);
    };

    anim.goToAndStop(Math.round(shown), true);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
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
  /* Padding, not margin. The copy is the pinned box's first child and the box
     has no border or padding of its own, so a top margin collapses straight out
     of it -- the scene was charged for the lead and the title never moved. */
  padding-top: ${COPY_LEAD}px;
  margin-bottom: ${COPY_GAP}px;

  @media ${device.laptop} {
    padding-top: ${COPY_LEAD_TABLET}px;
  }

  @media ${device.mobileL} {
    padding-top: ${COPY_LEAD_MOBILE}px;
  }
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

  /* Reaching the fold is done here rather than in the effect above, in the
     viewport unit that tracks the address bar sliding. The effect is throttled
     -- it has to be, resizing the pinned box under a moving finger drags the
     scroll -- so a height it measured is always a little out of date, and the
     gap that left at the bottom is where the section below showed through. */
  @media ${device.laptop} {
    ${Runway}[data-pinned='true'] & {
      /* lvh, not dvh. dvh is the one unit that tracks the address bar, so the
         stage grew and shrank under the scene every time the bar slid and the
         scene was rescaled to match. lvh is the height with the bar hidden and
         never changes, so the box is sized once for the screen. When the bar is
         showing it overlaps the bottom of the scene, which is the ground -- the
         part that can afford to be covered. */
      min-height: calc(100lvh - ${PIN_TOP}px - var(--solution-copy, 0px));
    }
  }
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
