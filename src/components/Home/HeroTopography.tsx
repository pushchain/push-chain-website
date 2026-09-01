// React + Web3 Essentials
import React, { useEffect, useRef } from 'react';

// External Components
import styled from 'styled-components';

// Internal Configs
import { device } from '@site/src/config/globals';

/**
 * Hero background animation — the design team's canvas "topography" field
 * (contours + ASCII glyphs + roaming agent nodes).
 *
 * Figma "image 39" (49898:9881) places it 1859x921 against a 1440 canvas, i.e.
 * bleeding ~190px past each edge. The renderer is procedural rather than a
 * fixed composition, so we let it fill the width instead of reproducing that
 * overhang, and keep the designed 921px height.
 */
const STAGE_HEIGHT = 921;

const HeroTopography: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let instance: { destroy(): void; pause(): void; resume(): void } | null =
      null;
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    // Lazily imported so the ~37KB renderer lands in its own chunk rather than
    // the main bundle.
    import('./topography/pushTopography')
      .then(({ createTopography }) => {
        if (cancelled || !mountRef.current) return;
        instance = createTopography(mountRef.current);

        // The hero scrolls away and never comes back for most of the session —
        // stop burning frames on it once it is off screen.
        observer = new IntersectionObserver(
          ([entry]) => {
            if (!instance) return;
            if (entry.isIntersecting) instance.resume();
            else instance.pause();
          },
          { rootMargin: '120px' }
        );
        observer.observe(mount);
      })
      .catch((err) => {
        // A failed chunk load just leaves the plain background behind — but say
        // so, rather than swallowing it into a silently empty hero.
        console.error('[HeroTopography] renderer failed to load', err);
      });

    return () => {
      cancelled = true;
      observer?.disconnect();
      instance?.destroy();
    };
  }, []);

  return <Stage ref={mountRef} aria-hidden='true' />;
};

const Stage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${STAGE_HEIGHT}px;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  /* The canvas paints an opaque #090909 field, so without this it would end in
     a hard horizontal seam against the page's black. Fade the last third out
     instead. */
  -webkit-mask-image: linear-gradient(
    180deg,
    #000 0%,
    #000 62%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: linear-gradient(180deg, #000 0%, #000 62%, rgba(0, 0, 0, 0) 100%);

  .push-topography-canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media ${device.laptop} {
    height: 780px;
  }

  @media ${device.tablet} {
    height: 680px;
  }

  @media ${device.mobileL} {
    height: 560px;
  }
`;

export default HeroTopography;
