// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { lightCodeTheme, darkCodeTheme } = require('./src/theme/codeTheme');
const fs = require('fs');
const path = require('path');

// Determine blog directory based on mode
const getBlogPath = () => {
  const blogMode = process.env.BLOG_MODE || 'full';
  const blogLitePath = path.join(__dirname, 'blog-lite');

  if (blogMode === 'lite' && fs.existsSync(blogLitePath)) {
    console.log('🚀 Using blog-lite directory for faster development');
    return './blog-lite';
  }

  console.log('📚 Using full blog directory');
  return './blog';
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Push Chain — Universal Blockchain for Apps',
  tagline:
    'Shared-state blockchain for universal apps. Deploy once; reach users on any chain. Use any wallet. Pay with any token. No network switching.',
  favicon: '/assets/website/favicon.ico',

  // Set the production url of your site here
  url: process.env.GITHUB_ACTIONS
    ? `${process.env.REACT_APP_PUBLIC_URL}`
    : 'https://push.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.GITHUB_ACTIONS
    ? `/push-chain-website/pr-preview/${process.env.REACT_APP_PREVIEW_BASE}`
    : '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'push-chain', // Usually your GitHub org/user name.
  projectName: 'push-chain-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  // Internationalization configuration
  // Note: Using react-i18next for actual translations, Docusaurus i18n for base setup
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Themes
  themes: ['@docusaurus/theme-mermaid'],

  // Static linking
  staticDirectories: ['public', 'static'],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      './plugins/blog-plugin',
      {
        id: 'blog',
        path: getBlogPath(),
        routeBasePath: 'blog',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          createFeedItems: async (params) => {
            const { blogPosts, defaultCreateFeedItems, ...rest } = params;
            return defaultCreateFeedItems({
              // keep only the 10 most recent blog posts in the feed
              blogPosts: blogPosts.filter((item, index) => index < 30),
              ...rest,
            });
          },
        },
      },
    ],
    require.resolve('./plugins/custom-webpack-plugin'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          {
            from: '/docs/chat/build/get-started/',
            to: 'https://comms.push.org/docs',
          },
          {
            from: '/cheatsheet',
            to: 'https://comms.push.org/cheatsheet',
          },
          {
            from: '/bootcamp',
            to: 'https://comms.push.org/bootcamp',
          },
          {
            from: '/chain/knowledge',
            to: '/knowledge',
          },
          {
            from: '/frens',
            to: 'https://comms.push.org/frens',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/dev')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [existingPath.replace('/docs/dev', '/docs')];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-N9ZHXNRLYL',
        },
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the 'edit this page' links.
          editUrl: 'https://github.com/pushchain/push-chain-website/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Code:wght@300..700&display=swap" rel="stylesheet',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:6483480,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
       (function (l) {
          if (l.search[1] === '/') {
            var decoded = l.search
              .slice(1)
              .split('&')
              .map(function (s) {
                return s.replace(/~and~/g, '&');
              })
              .join('?');
            window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
          }
        })(window.location);
      `,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: "/assets/docs/social-card.jpg",
      themeconfig: {
        sidebarCollapsible: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Push Logo',
          src: '/assets/website/docshub/PushLogoBlack@3x.png',
          srcDark: '/assets/website/segments/PushLogoTextWhite@3x.webp',
          href: '/',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Homepage',
          },
          {
            to: '/docs',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'https://discord.com/invite/pushchain',
            label: 'Discord',
            position: 'right',
          },
          {
            to: 'https://portal.push.org/',
            label: 'Push Portal',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      algolia: {
        appId: 'LHUKHXUHQP',
        // Public API key: it is safe to commit it
        apiKey: 'f41c253713d3cee20253bd3bfb166cac',

        indexName: 'v2-push',
        insights: true,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target='_blank' rel='noopener' href='#'>this survey</a>',
      //   backgroundColor: 'var(--ifm-color-white)',
      //   textColor: '#e03dc1',
      //   isCloseable: true,
      // },
    }),
};

module.exports = config;
