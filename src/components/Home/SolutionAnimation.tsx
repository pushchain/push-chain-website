// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useEffect, useRef, useState } from 'react';

// External Components
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import styled from 'styled-components';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';
import {
  pauseScroll,
  resumeScroll,
  jumpScrollTo,
} from '@site/src/hooks/smoothScrollControl';

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
 * Pacing, taken from the reference's controls at the settings that were tuned
 * on it -- not its shipped defaults, which differ.
 *
 * Playback speed 1.00x, minimum chapter time 1.5s, settle softness 1.0, fast
 * chapter time 0.5s. So a chapter runs for its own length at the source's 30fps
 * unless that is under a second and a half, and softness 1.0 is a straight
 * line: no ease at either end. Every gap here is longer than the minimum -- the
 * shortest, 200 to 280, is 2.67s -- so in practice each chapter simply plays at
 * its true speed.
 */
const PLAYBACK_SPEED = 1.0;
const MIN_CHAPTER_MS = 1500;
const SETTLE_SOFTNESS = 1.0;
const FAST_CHAPTER_MS = 500;

/**
 * What counts as the very fast scroll that rushes through what is left: this
 * much wheel travel inside FAST_WINDOW_MS. It sets how hard a flick has to be,
 * not how fast the rush then runs -- that is FAST_CHAPTER_MS. Tuned on the
 * page: at 600 an ordinary swipe tripped it and the run went by quicker than
 * intended, so it takes a deliberate flick.
 */
const FAST_TRIGGER_PX = 800;

/**
 * Longest the page may be held for a single chapter. The walk always settles,
 * so this never fires in practice -- it is here so that a walk which somehow
 * did not could never leave the page unable to scroll.
 */
const HOLD_CEILING_MS = 9000;
const FAST_WINDOW_MS = 360;

/** Settle softness as the reference applies it. At 1.0 this is the identity. */
const settle = (t) => 1 - Math.pow(1 - t, SETTLE_SOFTNESS);

/** A chapter's duration in seconds. `rushing` is the fast-scroll case. */
const chapterSeconds = (fromFrame, toFrame, rushing) => {
  if (rushing) return FAST_CHAPTER_MS / 1000;
  const source = (Math.abs(toFrame - fromFrame) / 30) * 1000;
  return Math.max(MIN_CHAPTER_MS, source / PLAYBACK_SPEED) / 1000;
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
 * How the room above the scene is split between the header and the copy.
 *
 * Not a fixed drop and not dead centre. The scene is sized to its own content
 * band, so on a tall screen there is height left over and on a short one there
 * is almost none -- the lead has to be a share of whatever is spare rather than
 * a number, or a big screen leaves the title stranded at the top and a laptop
 * has it sitting on the cards. This much of the spare goes above the title and
 * the rest stays as the gap down to the scene, which is what keeps the title
 * clear of the animation at every size.
 */
const COPY_LEAD_SHARE = 0.55;

/** Never less than this above the title, so it clears the floating navbar. */
const COPY_LEAD_MIN = 24;

/** Nor more than this, so the title does not drift into the middle of a very
    tall window and leave the scene marooned at the bottom. */
const COPY_LEAD_MAX = 240;

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
/**
 * The height the scene wants: its content band drawn as large as the page's
 * width allows, or as large as the room allows, whichever is smaller. Used to
 * work out what is spare above it before the copy is laid out.
 */
const sceneBandFor = (roomH, stageW) => {
  const byWidth = (stageW * COMP_H) / WINDOW_W;
  const wanted = Math.min(byWidth, sceneHeightFor(roomH));
  return wanted * (GROUND_LINE - CONTENT_TOP) + GROUND_SHOW_MIN;
};

const sceneHeightFor = (availableH) => {
  // Tallest the comp can be drawn and still keep GROUND_SHOW_MAX of floor
  // under the character.
  const withCappedFloor =
    (availableH - GROUND_SHOW_MAX) / (GROUND_LINE - CONTENT_TOP);
  // If that leaves more floor than the comp actually draws, the floor is the
  // limit instead and the comp is as tall as the band allows.
  return withCappedFloor * (1 - GROUND_LINE) >= GROUND_SHOW_MAX
    ? withCappedFloor
    : availableH / (1 - CONTENT_TOP);
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

/**
 * The composition, and the window shown of it.
 *
 * The file is 2446 wide; the reference draws all of it behind a 1920-wide
 * window centred on the character, who stands at x~1223 -- so the window opens
 * at 1223 - 1920/2 = 263. The stage is that window; the host is the whole comp,
 * pulled left by CAMERA_X.
 */
const COMP_W = 2446;
const WINDOW_W = 1920;
const CAMERA_X = 263;
const COMP_H = 849;

/* How much larger than its window the composition is drawn, from the
   reference. The scene is framed with room around it, and at 1.0 that room
   reads as the character standing in an empty field; 1.3 crops into it. */
const ZOOM = 1.3;

/**
 * The composition's own landmarks, as fractions of its height.
 *
 * Measured on this file rather than carried over: the 1440 cut was stepped
 * through all six stops at 1:1 and the ink bounds read off each. The stops do
 * not agree about the top -- 0.425 at the first, 0.293 in the middle, 0.421 at
 * the last -- because what reaches highest is the allow-list panel that opens
 * out of Universal Rules at stop 1, at 0.205. That is the one that has to fit,
 * so CONTENT_TOP is the union and not any single frame; the previous 0.268 was
 * measured off a frame that does not have the panel open, which is exactly the
 * thing that was being cut off the top.
 *
 * The floor is the first row that is more than half ink, at 711 of 849, and the
 * comp draws 138px of ground below it.
 */
const CONTENT_TOP = 0.311;
const GROUND_LINE = 0.7845;

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
  /* The 2446-wide master. The reference draws all of it and slides it behind a
     1920-wide window centred on the character, which is the framing here. */
  const dataUrl = useBaseUrl(
    '/assets/website/home/solution/push-8bit-2446.json'
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
      // Measure the copy without any lead first -- the lead is what is being
      // solved for, so leaving last pass's value on it would compound.
      copyEl.style.setProperty('--solution-copy-lead', '0px');
      const textH = copyEl.offsetHeight;

      const room = stableViewportH() - PIN_TOP - textH - COPY_GAP;

      // What the scene needs for its whole content band at the page's width,
      // and so what is left over to divide between the header and the title.
      const needs = sceneBandFor(room, stage.offsetWidth);
      const spare = Math.max(0, room - needs);
      const lead = Math.round(
        Math.min(COPY_LEAD_MAX, Math.max(COPY_LEAD_MIN, spare * COPY_LEAD_SHARE))
      );
      copyEl.style.setProperty('--solution-copy-lead', `${lead}px`);

      const copyH = textH + lead;
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

      // Declared out here: the ground strip below this section is drawn at
      // whatever scale the scene ended up at, and that is published after the
      // block closes.
      let sceneScale = 1;

      const host = stage.firstElementChild as HTMLElement | null;
      if (host) {
        const stageW = stage.offsetWidth;

        // Height first, at every width. The scene used to be drawn at the full
        // width of the page and cropped to whatever height was left, which on a
        // wide screen made it enormous -- the comp came out 891px tall in a
        // 510px box, so the panel that opens above Universal Rules was cut off
        // the top and most of the floor off the bottom. Sized to the band
        // instead and the whole thing is always in frame; the width follows,
        // and only narrows past the page when the height demands it.
        // The window is what has to fit the page; the comp behind it is wider
        // and is slid into place by the camera below.
        const wantH = sceneHeightFor(stageBox);
        const windowW = Math.min(stageW, (wantH * WINDOW_W) / COMP_H);
        const renderH = (windowW * COMP_H) / WINDOW_W;
        const renderW = (renderH * COMP_W) / COMP_H;
        sceneScale = windowW / stageW;
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
        // Camera, not centring: the comp is wider than the window and the
        // character does not sit at the comp's middle, so the two differ.
        host.style.left = `${Math.round(
          (stageW - windowW) / 2 - CAMERA_X * (renderH / COMP_H)
        )}px`;

        // The floor's position and the scene's drawn width, so the strip that
        // fills the page either side of the scene can line up with it. The
        // scene is no longer as wide as the page -- it is sized to its own
        // content band -- so without this the checkerboard stopped at the
        // scene's edges and left black down both sides.
        stage.style.setProperty(
          '--scene-floor',
          `${Math.round(stageH - groundShow)}px`
        );
        stage.style.setProperty('--scene-render-w', `${Math.round(renderW)}px`);

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
    // The reference's fast-scroll test, read off the wheel rather than off the
    // scroll position: 2400px of travel inside 360ms. Nothing deliberate gets
    // near that, and neither does a trackpad's inertia tail, so it only fires
    // when the reader is trying to get past the section. Passive -- the page
    // still scrolls; this only decides how fast the walk plays.
    // Which way a rush is running, and whether one is running at all. A
    // direction rather than a flag so it can be told when it has reached the
    // end of the run and stop there.
    let rushDir = 0;
    let boostInFlight = false;
    let gestureFrom = -1e9;
    let gestureTravel = 0;

    // Set by the loop below: true while a chapter is part way through and the
    // section is in the stretch it holds for.
    let holding = false;
    let heldSince = 0;

    /* Whether the scroll is inside the section's hold. Outside it the page is
       left alone -- holding above or below the section would stop the reader
       leaving a page they are not even looking at. */
    const inHold = () => {
      const { top, travel } = geometry();
      const y = window.scrollY;
      return y >= top - 2 && y <= top + travel + 2;
    };

    /* The hold itself. Non-passive, because preventing the scroll is the whole
       point: while a chapter plays the wheel and the finger move nothing, so
       the section cannot leave part way through a walk -- going forwards or
       back. Momentum left over after a chapter lands simply resumes. */
    const hold = (e: Event) => {
      if (holding && e.cancelable) e.preventDefault();
    };
    const onWheel = (e: WheelEvent) => {
      const now = performance.now();
      if (now - gestureFrom > FAST_WINDOW_MS) {
        gestureFrom = now;
        gestureTravel = 0;
      }
      let d = e.deltaY;
      if (e.deltaMode === 1) d *= 34;
      else if (e.deltaMode === 2) d *= window.innerHeight;
      gestureTravel += d;
      // Latched, not momentary. It is read when a chapter starts, and a
      // chapter runs for seconds where the gesture is over inside 360ms -- so
      // read momentarily only the first chapter of a rush ever ran fast and
      // the rest played at full length, which is the "still slow on a fast
      // scroll" of it. Cleared in the loop once the walk has caught up with
      // where the scroll is asking for, the way the reference's own sequence
      // runs itself out.
      if (Math.abs(gestureTravel) >= FAST_TRIGGER_PX && !rushDir) {
        rushDir = gestureTravel > 0 ? 1 : -1;
        // Cut the chapter already in flight short as well. The trigger can only
        // fire once enough scrolling has been seen, which takes a moment, and
        // that moment lands inside a chapter -- so without this the first one
        // still plays its full length and the rush only starts from the second.
        boostInFlight = true;
      }
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('wheel', hold, { passive: false });
    window.addEventListener('touchmove', hold, { passive: false });

    const walkTo = (to: number) => {
      // Direction first: idx is about to become `to`, and after that the two
      // are equal and the comparison says nothing.
      const withRush = rushDir !== 0 && Math.sign(to - idx) === rushDir;
      idx = to;
      fromFrame = shown;
      goneFor = 0;
      stepSeconds = chapterSeconds(fromFrame, STOPS[to], withRush);
    };

    let drawn = -1;
    let prevAt = 0;

    const tick = (now: number) => {
      const dt = prevAt ? Math.min(0.05, (now - prevAt) / 1000) : 0;
      prevAt = now;

      const p = frameFor();
      const landed = shown === STOPS[idx];

      // One chapter at a time, and only once the one before it has landed.
      // Resolving straight to the furthest stop the scroll had reached walked
      // the character there in a single motion, so a quick scroll skipped every
      // chapter in between rather than playing them. Both tests hang off the
      // line the scroll crossed to ask for the move, not off the stop itself:
      // hung off the stop, the last one was asked for and taken back on
      // alternate frames, because the scroll sat past the line that called for
      // it and short of the stop it called for.
      if (landed) {
        let want = idx;
        if (idx < LAST && p > STOPS[idx] + COMMIT_FRAMES) want = idx + 1;
        else if (idx > 0 && p < STOPS[idx - 1] + COMMIT_FRAMES - COMMIT_HYST)
          want = idx - 1;
        // A rush runs itself to the end of the run, without waiting to be
        // asked again. It has to: the page is held while a chapter plays and
        // the scrolling it holds is thrown away, so one flick could only ever
        // buy one chapter however hard it was -- which is the whole of "no
        // matter how fast I scroll it still runs slow". Once triggered it
        // chains its own chapters, the way the reference's sequence does, and
        // stops at the end of the run.
        boostInFlight = false;
        if (rushDir > 0 && idx < LAST) walkTo(idx + 1);
        else if (rushDir < 0 && idx > 0) walkTo(idx - 1);
        else if (rushDir) {
          // Arrived. Put the scroll where the animation now is, or the walk
          // would be asked to come straight back to wherever the reader had
          // actually reached.
          const { top, travel } = geometry();
          rushDir = 0;
          // Only ever reached at one end of the run, so the stop says which.
          jumpScrollTo(idx >= LAST ? top + travel : top);
        } else if (want !== idx) walkTo(want);
      }

      // Hold the page while a chapter plays, in either direction, so the
      // section cannot scroll away part way through one. Released the moment it
      // lands, so the next scroll moves on normally.
      const wantHold = !landed && inHold();
      if (!wantHold) heldSince = 0;
      else if (!heldSince) heldSince = now;
      // Never hold longer than a chapter could honestly take. Without this a
      // walk that failed to settle would leave the page stuck for good.
      const shouldHold =
        wantHold && !(heldSince && now - heldSince > HOLD_CEILING_MS);

      // Through Lenis, not through the event. Lenis takes the wheel first and
      // eases the page from its own loop, so preventing the event after it has
      // seen it changes nothing -- which is why the section still slid away
      // mid-chapter. Stopping it is the only thing that holds. The listeners
      // below stay for touch, which Lenis leaves to the OS.
      if (shouldHold !== holding) {
        holding = shouldHold;
        if (holding) pauseScroll();
        else resumeScroll();
      }

      if (shown !== STOPS[idx] && dt) {
        // Re-time the walk in flight, from where it has actually reached.
        if (boostInFlight) {
          boostInFlight = false;
          fromFrame = shown;
          goneFor = 0;
          stepSeconds = FAST_CHAPTER_MS / 1000;
        }
        goneFor += dt;
        // The clock alone, as the reference has it. The scroll used to be
        // allowed to overtake it -- whichever was further through the step won
        // -- which meant a step could never actually be slow: an ordinary
        // trackpad swipe covers more than a step's worth of runway, so the
        // reader dragged the walk along at their own pace and the jump and the
        // panel that opens on landing went past unread. The scroll chooses
        // which stop is wanted; how fast the walk gets there is the clock's,
        // and the clock is set by how hard they scrolled to ask for it.
        const t = Math.min(1, goneFor / stepSeconds);
        const eased = settle(t);
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
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('wheel', hold);
      window.removeEventListener('touchmove', hold);
      // Never leave the page unable to scroll behind us.
      resumeScroll();
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

/* Padding, not margin. The copy is the pinned box's first child and the box has
   no border or padding of its own, so a top margin collapses straight out of it
   -- the scene was charged for the lead and the title never moved. The value is
   set by the fit above, which is the only thing that knows what is spare. */
const Copy = styled.div`
  padding-top: var(--solution-copy-lead, ${COPY_LEAD_MIN}px);
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
  aspect-ratio: ${WINDOW_W} / ${COMP_H};

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
