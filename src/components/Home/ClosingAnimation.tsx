// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useEffect, useRef, useState } from 'react';

// External Components
import styled from 'styled-components';

// Internal Configs
import { device } from '@site/src/config/globals';

/**
 * The hand field behind the closing call to action.
 *
 * The export ships its own scroll module, which builds a spacer and a sticky
 * pin inside its host. That is not used here: it would own DOM that React also
 * renders into, and the copy has to sit inside the pinned box to fade in over
 * it. Instead the field is mounted bare and driven from this component's own
 * pin, through the same `frameForProgress` map its scroll module uses.
 *
 * Burst timing rides along with the frame, so `burstProgress` runs 0..1 across
 * the explosion and the copy is faded in against the tail of it.
 */

/** The two compositions' aspect ratios, from their own grids: 120x62 and 60x106. */
const WIDE_ASPECT = '1440 / 750';
const TALL_ASPECT = '60 / 106';

/** Scroll distance the section holds for while the hands meet and burst. */
const RUNWAY = 1600;

/** The page's own background, which the field's base has to match. */
const PAGE_BACKGROUND = '#000000';

/** Burst progress over which the copy fades up, once the field has blown out. */
const COPY_FADE_FROM = 0.72;
const COPY_FADE_TO = 0.95;

/** Space left between the call to action and the footer once the pin releases. */
const TAIL_GAP = 160;

/** What the shared Content box already contributes below the runway. */
const CONTENT_PAD_BOTTOM = 125;

const ClosingAnimation: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const runwayRef = useRef<HTMLDivElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);

  // Two compositions of the same scene. The desktop one is 120x62 cells, near
  // 2:1, and on a phone it can only ever be a band across the middle. The
  // mobile one is 60x106 -- portrait, built to fill the screen. They share the
  // glyph atlas.
  const wideBin = useBaseUrl('/assets/website/home/closing/adamfield.bin');
  const tallBin = useBaseUrl('/assets/website/home/closing/adamfield-mobile.bin');
  const atlas = useBaseUrl('/assets/website/home/closing/adamfield-atlas.png');
  const widePoster = useBaseUrl(
    '/assets/website/home/closing/adamfield-poster.png'
  );
  const tallPoster = useBaseUrl(
    '/assets/website/home/closing/adamfield-mobile-poster.png'
  );

  // Bumped when the viewport crosses the breakpoint, so the field is rebuilt
  // with the other composition. Which one to use is read inside that effect
  // rather than held in state: as state the first render is always the wide
  // one, so a phone fetched that composition before replacing it with the
  // portrait one.
  const [breakpoint, setBreakpoint] = useState(0);
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;
    const mq = window.matchMedia(device.laptop);
    const bump = () => setBreakpoint((n) => n + 1);
    mq.addEventListener('change', bump);
    return () => mq.removeEventListener('change', bump);
  }, []);

  useEffect(() => {
    const runway = runwayRef.current;
    const pinned = pinnedRef.current;
    const host = hostRef.current;
    const copy = copyRef.current;
    if (!runway || !pinned || !host || !copy) return;

    let field: any = null;
    let raf = 0;
    let cancelled = false;

    // Which composition this viewport gets, and the sizing that goes with it.
    const tall =
      typeof window.matchMedia === 'function' &&
      window.matchMedia(device.laptop).matches;
    host.dataset.tall = String(tall);
    const bin = tall ? tallBin : wideBin;
    const poster = tall ? tallPoster : widePoster;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // How far the reader has scrolled through the pinned stretch.
    const progress = () => {
      const top = runway.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(1, runway.offsetHeight - pinned.offsetHeight);
      return Math.max(0, Math.min(1, (window.scrollY - top) / travel));
    };

    import('./adamField/field')
      .then(({ createAdamField, palettes }) =>
        createAdamField(host, {
          bin,
          atlas,
          poster,
          // From the field tool's saved settings. Block size, glyph size and
          // dot size are that panel's percentages; the dot grid is off and the
          // accent threshold is 7 there, which is what the build already used.
          tileScale: 0.66,
          fontScale: 0.68,
          dotScale: 0.15,
          dots: false,
          accentMinValue: 7,
          inkGamma: 0.3,
          // The preset's base is #090909, which reads as a lighter rectangle
          // against the page's black. Everything else about the palette stays.
          palette: { ...palettes.pushBrand, base: PAGE_BACKGROUND },
        })
      )
      .then((created: any) => {
        if (cancelled) {
          created?.destroy?.();
          return;
        }
        field = created;

        // Without WebGL -- or if the field's data will not load -- the engine
        // mounts a still of the hands instead. There is no timeline to drive,
        // so the copy has to be shown outright; but the copy sits in the same
        // grid cell, so leaving the still behind it printed the headline over
        // the hands. The still is the animation degrading, not part of the
        // message, so drop it and show the copy alone.
        if (field.poster || !field.setFrame) {
          host.style.display = 'none';
          copy.style.opacity = '1';
          return;
        }

        if (reduced) {
          field.setFrame(field.frameForProgress(1));
          copy.style.opacity = '1';
          return;
        }

        const tick = () => {
          if (cancelled) return;
          const p = progress();
          field.setFrame(field.frameForProgress(p));

          // The copy arrives on the tail of the burst, not on raw scroll, so it
          // always lands with the explosion however the two are paced.
          const burst = field.burstProgress ?? 0;
          const fade =
            (burst - COPY_FADE_FROM) / (COPY_FADE_TO - COPY_FADE_FROM);
          copy.style.opacity = String(Math.max(0, Math.min(1, fade)));

          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      })
      .catch((err) => {
        console.error('[ClosingAnimation] failed to load', err);
        copy.style.opacity = '1';
      });

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      field?.destroy?.();
    };
  }, [wideBin, tallBin, atlas, widePoster, tallPoster, breakpoint]);

  // The tail trim below needs the copy's height, which depends on how the
  // headline wraps, so publish it rather than guessing a constant.
  useEffect(() => {
    const copy = copyRef.current;
    const runway = runwayRef.current;
    if (!copy || !runway) return undefined;

    const publish = () =>
      runway.style.setProperty('--closing-copy-h', `${copy.offsetHeight}px`);
    publish();

    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(publish);
    ro.observe(copy);
    return () => ro.disconnect();
  }, []);

  return (
    <Runway ref={runwayRef}>
      <Pinned ref={pinnedRef}>
        <FieldHost ref={hostRef} aria-hidden='true' />
        <Copy ref={copyRef}>{children}</Copy>
      </Pinned>
    </Runway>
  );
};

/* The scroll the section holds for. A real element rather than padding: sticky
   travel is bounded by the containing block's content box. */
const Runway = styled.div`
  /* Full-bleed out of the page's max-width column, so the field centres on the
     viewport rather than on that column — inside it the field was 90px off
     centre and overflowed the right edge. left/margin rather than a transform,
     which would become the containing block for the sticky child below. */
  position: relative;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  height: calc(${RUNWAY}px + 100svh);

  /* The pin frame is a full viewport so the field centres on screen, but the
     copy sits in the middle of it, so once the pin releases the frame's lower
     half is empty -- and that band is half the window, so the taller the
     monitor the more black sat between the call to action and the footer.
     Pull the footer back up by exactly that band, leaving a fixed gap. Clamped
     at zero so a window shorter than the copy never pulls the footer over it. */
  margin-bottom: min(
    0px,
    calc(
      (var(--closing-copy-h, 304px) / 2) + ${TAIL_GAP - CONTENT_PAD_BOTTOM}px -
        50svh
    )
  );

  @media ${device.mobileL} {
    height: calc(${Math.round(RUNWAY * 0.7)}px + 100svh);
  }
`;

const Pinned = styled.div`
  position: sticky;
  top: 0;
  height: 100svh;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

/* The engine appends its canvas here and sizes it to fill. Capped to the
   viewport so a short window shrinks the field rather than cropping it. */
/* Full width. The pinned box crops it vertically rather than the field being
   shrunk to fit, and where the viewport is taller than the field its base now
   matches the page so the edges are invisible. */
const FieldHost = styled.div`
  /* Taken out of the grid rather than placed in it. Drawn larger than the
     viewport, a grid item widened the shared track and the copy -- sized at
     100% of it -- went off the side of the screen with it. Absolute sizes
     nothing, and centres it on both axes inside the pinned box. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  /* The wide composition, drawn at the viewport's width. */
  width: 100vw;
  aspect-ratio: ${WIDE_ASPECT};

  /* The portrait one covers the screen instead: scaled so neither axis falls
     short, which leaves a little of its width outside the pinned box's clip. */
  &[data-tall='true'] {
    width: max(100vw, calc(100svh * ${TALL_ASPECT}));
    aspect-ratio: ${TALL_ASPECT};
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

/* Sits over the field in the same grid cell, below the hands, and is faded up
   by the effect above as the burst finishes. */
/* Centred rather than sat at the bottom: by the time it fades up the hands
   have blown out and the field is black, so there is nothing above to sit
   under. */
const Copy = styled.div`
  grid-area: 1 / 1;
  align-self: center;
  justify-self: center;
  width: 100%;
  opacity: 0;
  transition: opacity 120ms linear;
  text-align: center;
  z-index: 1;
`;

export default ClosingAnimation;
