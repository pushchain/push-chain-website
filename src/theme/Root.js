// React + Web3 Essentials
import { useLocation } from '@docusaurus/router';

import React, { useContext, useEffect } from 'react';

// External Components
import i18nInitialize from '@site/src/utils/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styled from 'styled-components';

// Internal Components
import { AccountProvider } from '@site/src/context/accountContext';
import ServerStyle from '@site/src/theme/ServerStyle';
import CookieComponent from '../components/CookieComponent';
import AccountContext from '../context/accountContext';
import { Notification } from '../hooks/useRewardsNotification';
import { useSiteBaseUrl } from '../hooks/useSiteBaseUrl';

// Initialize Internalization
i18nInitialize();

export default function Root({ children }) {
  const queryClient = new QueryClient();

  // superimposed conditions
  const superimposedConditions = [
    {
      classname: 'DocsHub PushDocs DocusaurusNavbar NavBarDark',
      pathname: '/DOCS',
      condition: 'exact',
    },
    {
      classname: 'PushDocs DocusaurusNavbar',
      pathname: '/DOCS',
      condition: 'subpaths',
    },
    {
      classname: 'BlogHub PushBlog DocusaurusNavbar',
      pathname: '/BLOG',
      condition: 'exact',
    },
    {
      classname: 'PushBlog DocusaurusNavbar',
      pathname: '/BLOG',
      condition: 'subpaths',
    },
  ];

  const location = useLocation();
  const baseURL = useSiteBaseUrl();
  const { showAlertBar } = useContext(AccountContext);
  const isPreview = /^\/push-chain-website\/pr-preview\/pr-\d+\/?$/.test(
    location.pathname
  );
  const isHome = (location.pathname === '/' || isPreview) && showAlertBar;

  // Set data-website-theme="dark" for non-docs/blog pages
  useEffect(() => {
    const pathname = location.pathname.toLowerCase();
    const isDocsOrBlog =
      pathname.startsWith('/docs') || pathname.startsWith('/blog');

    if (!isDocsOrBlog) {
      document.documentElement.setAttribute('data-website-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-website-theme');
    }
  }, [location.pathname]);

  const excludePaths = ['/BRB', '/DOCS'];
  const shouldRenderFooter = excludePaths.every((path) =>
    excludeDefaultConfigAt(path)
  );

  // return superimposed class names if conditions are met
  function returnAdditionalClasses(conditions) {
    let result = '';
    for (var i = 0; i < conditions.length; i++) {
      const item = conditions[i];
      const pathname = baseURL + item?.pathname;

      if (locationPathExists(pathname, item.condition)) {
        result = item.classname;
        break;
      }
    }

    return result;
  }

  // enable disable default config
  function excludeDefaultConfigAt(pathname, condition) {
    const fullPathname = baseURL + pathname;
    return !locationPathExists(fullPathname, condition);
  }

  // check if location path exists
  function locationPathExists(pathname, condition) {
    let result = false;
    pathname = pathname?.toUpperCase();

    const str = location?.pathname.toUpperCase();
    const modstr =
      str != null && str.length >= pathname.length
        ? str.substring(0, pathname.length)
        : null;

    result = modstr === pathname ? true : false;
    if (condition === 'exact' || condition === 'subpaths') {
      // check if sub path exist in pathname and change result;
      if (
        str.length > pathname.length &&
        str.substring(0, pathname.length) === pathname
      ) {
        // path has more
        const remainingLength =
          str.substring(pathname.length, pathname.length + 1) === '/'
            ? str.length - pathname.length - 1
            : str.length - pathname.length;

        if (condition === 'exact') {
          result = remainingLength == 0 ? true : false;
        } else if (condition === 'subpaths') {
          result = remainingLength > 0 ? true : false;
        }
      }
    }

    return result;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AccountProvider>
        <>
          <PageContainer
            className={returnAdditionalClasses(superimposedConditions)}
          >
            <ServerStyle from={children} />

            {/* Main react children */}
            <Content isHome={isHome}>{children}</Content>

            {/* Notifications - only render on client-side */}
            {typeof window !== 'undefined' && <Notification />}

            {shouldRenderFooter && (
              <>
                {/* <Footer /> */}
                {/* CookieComponent has its own hydration handling */}
                <CookieComponent />
              </>
            )}
          </PageContainer>
        </>
      </AccountProvider>
    </QueryClientProvider>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// The main content should take up all remaining space
const Content = styled.div`
  flex: 1;
  ${({ isHome }) =>
    isHome &&
    `background: linear-gradient(90deg, #f898f0 0%, #e670ee 25%, var(--ifm-color-custom-pink) 50%, #e670ee 75%, #f898f0 100%);
    `}
`;
