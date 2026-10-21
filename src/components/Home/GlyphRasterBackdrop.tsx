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

  canvas {
    display: block;
  }

  @media (max-width: 525px) {
    border-radius: 24px;
  }
`;

export default GlyphRasterBackdrop;
