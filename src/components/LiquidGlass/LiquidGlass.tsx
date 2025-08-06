/* Credits: https://codesandbox.io/p/sandbox/liquid-glass-in-css-and-svg-g3mwqp?file=%2Fsrc%2FApp.tsx%3A1%2C10-1%2C22&from-embed */

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import {
  DisplacementOptions,
  getDisplacementFilter,
} from './getDisplacementFilter';
import { getDisplacementMap } from './getDisplacementMap';
import styles from './LiquidGlass.module.css';

type LiquidGlassProps = DisplacementOptions & {
  children?: ReactNode | undefined;
  blur?: number;
  debug?: boolean;
  autoResize?: boolean;
};

export const LiquidGlass = ({
  height,
  width,
  depth: baseDepth,
  radius,
  children,
  strength,
  chromaticAberration,
  blur = 2,
  debug = false,
  autoResize = false,
}: LiquidGlassProps) => {
  /* Change element depth on click */
  const [clicked, setClicked] = useState(false);
  let depth = baseDepth / (clicked ? 0.7 : 1);

  // Ref for auto-resize functionality
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoWidth, setAutoWidth] = useState(width || 0);
  const [autoHeight, setAutoHeight] = useState(height || 0);

  // Auto-resize effect
  useEffect(() => {
    if (!autoResize) return;

    const calculateDimensions = () => {
      if (containerRef.current && containerRef.current.parentElement) {
        const parent = containerRef.current.parentElement;
        const parentWidth = parent.offsetWidth;
        const parentHeight = parent.offsetHeight;

        setAutoWidth(parentWidth || 0);
        setAutoHeight(parentHeight || 0);
      }
    };

    calculateDimensions();

    // Listen for window resize
    window.addEventListener('resize', calculateDimensions);

    // Use ResizeObserver to detect parent container size changes
    let resizeObserver: ResizeObserver | null = null;
    if (containerRef.current && containerRef.current.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        calculateDimensions();
      });
      resizeObserver.observe(containerRef.current.parentElement);
    }

    return () => {
      window.removeEventListener('resize', calculateDimensions);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [autoResize]);

  // Use auto-calculated values if autoResize is enabled
  const finalWidth = autoResize ? autoWidth : width;
  const finalHeight = autoResize ? autoHeight : height;
  const finalRadius = radius ? radius : 24;

  /* Dynamic CSS properties */
  const style: CSSProperties = {
    height: `${finalHeight}px`,
    width: `${finalWidth}px`,
    borderRadius: `${finalRadius}px`,
    backdropFilter: `blur(${blur / 2}px) url('${getDisplacementFilter({
      height: finalHeight,
      width: finalWidth,
      radius: finalRadius,
      depth,
      strength,
      chromaticAberration,
    })}') blur(${blur}px) brightness(1.1) saturate(1.5) `,
  };

  /* Debug mode: display the displacement map instead of actual effect */
  if (debug === true) {
    style.background = `url("${getDisplacementMap({
      height: finalHeight,
      width: finalWidth,
      radius: finalRadius,
      depth,
    })}")`;
    style.boxShadow = 'none';
  }
  return (
    <div
      ref={containerRef}
      className={styles.box}
      style={style}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      {children}
    </div>
  );
};
