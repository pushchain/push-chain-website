// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import { useEffect } from 'react';

// External Components
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Inertial ("smooth") scrolling, in the style of sohub.digital.
 *
 * Lenis keeps native scrolling and eases the scroll position toward the target
 * each frame, so `position: sticky` and anchor links keep working — which
 * matters here because the problem-narrative card stack is pure CSS sticky.
 *
 * Two things are deliberate:
 *  - GSAP drives the RAF loop instead of Lenis running its own, so ScrollTrigger
 *    reads the eased position in the same frame it was written. Running both
 *    loops independently makes pinned/scrubbed animations jitter.
 *  - Touch devices keep their native momentum. Smoothing a touch scroll fights
 *    the OS and feels laggy, so it stays off there.
 *
 * Returns nothing; safe to call from any client component (SSR is guarded).
 */
export default function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;
    if (typeof window === 'undefined') return undefined;

    // Anyone who asked their OS for less motion should not get eased scrolling.
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion) return undefined;

    let lenis;
    let onScroll;
    let rafId;
    let cancelled = false;

    // Loaded lazily so the library never lands in the SSR bundle.
    import('lenis')
      .then(({ default: Lenis }) => {
        if (cancelled) return;

        lenis = new Lenis({
          // ~1s to settle: enough glide to read as smooth, short enough that
          // the page still feels responsive to a flick.
          duration: 1.05,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          // Leave touch to the OS.
          syncTouch: false,
          touchMultiplier: 1,
        });

        gsap.registerPlugin(ScrollTrigger);

        // Keep ScrollTrigger in step with the eased position.
        onScroll = () => ScrollTrigger.update();
        lenis.on('scroll', onScroll);

        rafId = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(rafId);
        // Without this, a stutter makes GSAP fake a smaller delta and the
        // scroll visibly lurches.
        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.refresh();
      })
      .catch(() => {
        /* If the chunk fails to load the page just scrolls natively. */
      });

    return () => {
      cancelled = true;
      if (rafId) gsap.ticker.remove(rafId);
      if (lenis && onScroll) lenis.off('scroll', onScroll);
      if (lenis) lenis.destroy();
      gsap.ticker.lagSmoothing(500, 33); // restore GSAP's default
    };
  }, [enabled]);
}
