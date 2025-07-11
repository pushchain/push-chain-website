// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
//
//
import { useEffect, useState } from 'react';

function useMediaQuery(query: string): boolean {
  const getMatches = (q: string): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(q).matches;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};

    const mql = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // For Safari compatibility: older versions only support addListener/removeListener
    if (mql.addEventListener) {
      mql.addEventListener('change', handleChange);
    } else if (mql.addListener) {
      mql.addListener(handleChange);
    }

    // Always update state immediately in case initial value changed
    setMatches(mql.matches);

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', handleChange);
      } else if (mql.removeListener) {
        mql.removeListener(handleChange);
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
