// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

/**
 * A handle on the page's inertial scrolling, so a section can hold the page
 * still while something plays out.
 *
 * Lenis takes the wheel event itself and eases the scroll position from its own
 * loop, so preventing the event downstream of it does nothing -- by the time a
 * listener on the window sees it, Lenis has already decided where the page is
 * going. Stopping it has to go through Lenis, which is what this is for.
 *
 * Held as a module rather than a global so there is one owner and the type is
 * real; the hook registers the instance and anything that needs the page still
 * asks here.
 */
let lenis = null;

/** Registered by useSmoothScroll. Passing null clears it on teardown. */
export function setSmoothScroll(instance) {
  lenis = instance;
}

/** Freeze the page. Safe to call repeatedly, and when Lenis never loaded. */
export function pauseScroll() {
  if (lenis && typeof lenis.stop === 'function') lenis.stop();
}

/** Let it go again. */
export function resumeScroll() {
  if (lenis && typeof lenis.start === 'function') lenis.start();
}

/**
 * Put the page at an exact position with no easing. Through Lenis where it is
 * running, because it keeps its own idea of where the page is heading and a
 * native scrollTo behind its back leaves the two disagreeing.
 */
export function jumpScrollTo(y) {
  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(y, { immediate: true, force: true });
    return;
  }
  if (typeof window !== 'undefined') window.scrollTo(0, y);
}

/**
 * Hand touch scrolling to Lenis, or give it back to the OS.
 *
 * The instance is built with `syncTouch: false` -- smoothing every touch
 * scroll on the site fights the OS and feels laggy. The cost is that Lenis is
 * not driving a touch scroll, so `pauseScroll` is a no-op against one: a
 * section cannot hold the page while something plays, because `preventDefault`
 * on `touchmove` only holds while the finger is down and nothing can cancel
 * the momentum after it lifts.
 *
 * Lenis reads the flag off `options` at event time, so a section that does
 * need the hold can take touch for as long as it is on screen and hand it
 * straight back. Scoped that way the rest of the page keeps native momentum.
 */
export function setTouchSync(on) {
  if (lenis && lenis.options) lenis.options.syncTouch = !!on;
}
