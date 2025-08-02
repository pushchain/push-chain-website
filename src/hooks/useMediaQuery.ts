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

// // React + Web3 Essentials
// import { useEffect, useState } from 'react';

// function useMediaQuery(query: string): boolean {
//   const getMatches = (query: string): boolean => {
//     // Prevents SSR issues
//     if (typeof window !== 'undefined') {
//       return window.matchMedia(query).matches;
//     }
//     return false;
//   };

//   const [matches, setMatches] = useState<boolean>(getMatches(query));

//   function handleChange() {
//     setMatches(getMatches(query));
//   }

//   useEffect(() => {
//     const matchMedia = window.matchMedia(query);

//     // Triggered at the first client-side load and if query changes
//     handleChange();

//     // Listen matchMedia
//     if (matchMedia.addListener) {
//       matchMedia.addListener(handleChange);
//     } else {
//       matchMedia.addEventListener('change', handleChange, { passive: true });
//     }

//     return () => {
//       if (matchMedia.removeListener) {
//         matchMedia.removeListener(handleChange);
//       } else {
//         matchMedia.removeEventListener('change', handleChange);
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [query]);

//   return matches;
// }

// export default useMediaQuery;
