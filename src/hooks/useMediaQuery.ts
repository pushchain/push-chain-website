// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
//
import { useEffect, useState } from 'react';

function useMediaQuery(query: string): boolean {
  const getMatch = (q: string) =>
    typeof window !== 'undefined' ? window.matchMedia(q).matches : false;

  const [matches, setMatches] = useState<boolean>(getMatch(query));

  useEffect(() => {
    const mql = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', listener);
    } else if (typeof mql.addListener === 'function') {
      mql.addListener(listener);
    }

    return () => {
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener('change', listener);
      } else if (typeof mql.removeListener === 'function') {
        mql.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
