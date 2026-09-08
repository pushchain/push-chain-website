// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useEffect, useRef } from 'react';

// External Components
import styled from 'styled-components';

/**
 * The animated glyph field behind the agentic-scale banner, replacing the
 * static ring artwork that stood in for it.
 */
const GlyphRasterBackdrop: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const baseUrl = useBaseUrl('/assets/website/home/agentic-scale');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let instance: { destroy(): void; pause(): void; resume(): void } | null =
      null;
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    import('./glyphRaster/player')
      .then(({ createGlyphRaster }) => {
        if (cancelled || !canvasRef.current) return null;
        return createGlyphRaster(canvasRef.current, { baseUrl });
      })
      .then((created) => {
        if (!created) return;
        if (cancelled) {
          created.destroy();
          return;
        }
        instance = created;

        observer = new IntersectionObserver(
          ([entry]) => {
            if (!instance) return;
            if (entry.isIntersecting) instance.resume();
            else instance.pause();
          },
          { rootMargin: '160px' }
        );
        if (canvas.parentElement) observer.observe(canvas.parentElement);
      })
      .catch((err) => {
        console.error('[GlyphRasterBackdrop] failed to load', err);
      });

    return () => {
      cancelled = true;
      observer?.disconnect();
      instance?.destroy();
    };
  }, [baseUrl]);

  return (
    <Stage aria-hidden='true'>
      <canvas ref={canvasRef} />
    </Stage>
  );
};

const Stage = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 48px;
  pointer-events: none;

  /* Cleared through the middle, where the title sits, so what shows behind the
     title is the plate's own colour -- solid, and an exact match because it is
     the same paint, not a colour chosen to look like it. A panel with a fill
     of its own cannot manage that here: the plate is a gradient and the colour
     under the title moves with the viewport's height, so any one colour would
     band against it. The ramp from clear to full is what softens the edge.
     Centred, and the title's panel is centred in the same box. */
  --clear-x: 52%;
  --clear-y: 34%;
  -webkit-mask-image: radial-gradient(
    ellipse var(--clear-x) var(--clear-y) at 50% 50%,
    transparent 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.4) 74%,
    #000 100%
  );
  mask-image: radial-gradient(
    ellipse var(--clear-x) var(--clear-y) at 50% 50%,
    transparent 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.4) 74%,
    #000 100%
  );

  /* Narrower screens give the title a bigger share of the box, so the clearing
     has to grow with it or the glyphs come back under the copy. */
  @media (max-width: 1024px) {
    --clear-x: 62%;
    --clear-y: 30%;
  }

  canvas {
    display: block;
  }

  @media (max-width: 525px) {
    border-radius: 24px;
  }
`;

export default GlyphRasterBackdrop;
