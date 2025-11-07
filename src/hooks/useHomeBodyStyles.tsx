import { useLayoutEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export function useHomepageStyles() {
  const location = useLocation();

  useLayoutEffect(() => {
    const isHomepage = location.pathname === '/';

    if (isHomepage) {
      document.body.classList.add('homepage-body');

      const observer = new MutationObserver(() => {
        if (!document.body.classList.contains('homepage-body')) {
          document.body.classList.add('homepage-body');
        }
      });

      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class'],
      });

      return () => {
        observer.disconnect();
        document.body.classList.remove('homepage-body');
      };
    } else {
      document.body.classList.remove('homepage-body');
    }
  }, [location.pathname]);
}
