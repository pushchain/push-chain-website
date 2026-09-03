// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useEffect, useRef } from 'react';

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

  const bin = useBaseUrl('/assets/website/home/closing/adamfield.bin');
  const atlas = useBaseUrl('/assets/website/home/closing/adamfield-atlas.png');
  const poster = useBaseUrl('/assets/website/home/closing/adamfield-poster.png');

  useEffect(() => {
    const runway = runwayRef.current;
    const pinned = pinnedRef.current;
    const host = hostRef.current;
    const copy = copyRef.current;
    if (!runway || !pinned || !host || !copy) return;

    let field: any = null;
    let raf = 0;
    let cancelled = false;

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

        // Without WebGL the engine mounts a poster image instead; there is no
        // timeline to drive, so leave the copy showing.
        if (field.poster || !field.setFrame) {
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
  }, [bin, atlas, poster]);

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
  grid-area: 1 / 1;
  width: 100vw;
  aspect-ratio: 1440 / 750;

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
