export const NotifFeaturesList = {
  first: [
    {
      config: {
        id: 'native',
        padding: '32px',
        containerFlexDirection: 'column-reverse',
        height: '490px',
        fluid: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      body: [
        {
          type: 'image',
          imagesrc: 'chain/any-chain',
          videosrc: 'chain/any-chain-video',
          videowebm: true,
          imagealt: 'home.notification-section.box1.imagealt',
          imagetitle: 'home.notification-section.box1.imagetitle',
          imagewidth: 'auto',
          imageheight: 'auto',
          imagemargin: '0 0 auto 0',
        },
        {
          type: 'text',
          texttitle: 'Any Chain Transactions',
          bodytext:
            'Push Chain supports transactions from any blockchain. Users can pay gas in any token — No need for bridging.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
      ],
    },
    {
      config: {
        id: 'custom-notif',
        padding: '24px',
        height: '490px',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      body: [
        {
          type: 'text',
          texttitle: 'Wallet Abstraction',
          bodytext:
            'Let any wallet from any chain connect, interact, and transact. Break web3 barriers by using social login or email. User get to decide on Push Chain.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
        {
          type: 'styled-link',
          href: 'https://example.com/learn-more',
          hrefText: 'Learn More',
          margin: '0px 0 0 0',
          align: 'left',
        },
        {
          type: 'image',
          imagesrc: 'chain/wallet-abstraction',
          // videosrc: 'notifs/web3-native-video',
          // videowebm: false,
          imagealt: 'home.notification-section.box1.imagealt',
          imagetitle: 'home.notification-section.box1.imagetitle',
          imagewidth: 'auto',
          imageheight: 'auto',
          imagemargin: 'auto 0 0 0',
        },
      ],
    },
  ],
  second: [
    {
      config: {
        id: 'lightweight',
        containerFlexDirection: 'column-reverse',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: '100% EVM\nCompatible',
        align: 'left',
      },
      mockimage: true,
      body: [
        {
          type: 'text',
          bodytext:
            'Deploy with zero on-chain code. Turn your native app into a universal app in minutes.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
      ],
    },
    {
      config: {
        id: 'lightweight',
        height: '100%',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'Universal Smart Contracts',
        align: 'left',
      },
      mockimage: true,
      body: [
        {
          type: 'text',
          bodytext:
            'Build once, run cross chain, multi step experiences  with a single, future-proof contract.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
      ],
    },
    {
      config: {
        id: 'interoperable',
        containerFlexDirection: 'column-reverse',
        fluid: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: true,
        },
      },
      header: {
        title: 'Universal Fee\nAbstraction',
        align: 'left',
      },
      mockimage: true,
      body: [
        {
          type: 'text',
          bodytext:
            'Let’s users pay gas in any token, on any chain without bridging.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
      ],
    },
  ],
  third: [
    {
      config: {
        id: 'lightweight',
        containerFlexDirection: 'column-reverse',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'Universal Execution Layer',
        align: 'left',
      },
      mockimage: true,
      body: [
        {
          type: 'text',
          bodytext:
            'Build atomic, composable apps across web3. Create never seen before app experiences, by having multiple users of different chains transact with the same app.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
      ],
    },
    {
      config: {
        id: 'lightweight',
        height: '100%',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'Shared State',
        align: 'left',
      },
      mockimage: true,
      body: [
        {
          type: 'text',
          bodytext:
            'Access account and state data from other chains in your smart contract.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
      ],
    },
    {
      config: {
        id: 'interoperable',
        containerFlexDirection: 'column-reverse',
        fluid: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: true,
        },
      },
      header: {
        title: 'Programmable\nSolvers',
        align: 'left',
      },
      mockimage: true,
      body: [
        {
          type: 'text',
          bodytext:
            'Trigger, validate, and complete transactions across any chain using your smart contract.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
      ],
    },
  ],
  tabletOnly: [
    {
      config: {
        id: 'interoperable',
        containerFlexDirection: 'column-reverse',
        fluid: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: true,
        },
      },
      header: {
        title: 'Universal Fee\nAbstraction',
        align: 'left',
      },
      mockimage: true,
      body: [
        {
          type: 'text',
          bodytext:
            'Let’s users pay gas in any token, on any chain without bridging.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
      ],
    },
    {
      config: {
        id: 'lightweight',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'Universal Execution Layer',
        align: 'left',
      },
      mockimage: true,
      body: [
        {
          type: 'text',
          bodytext:
            'Build atomic, composable apps across web3. Create never seen before app experiences, by having multiple users of different chains transact with the same app.',
          bodytextcolor: 'linear-gradient(90deg, #B1B1B9 0%, #635D65 100%)',
          bodytextsize: '1.125rem',
          bodytextweight: '400',
          margin: '0px 0 0 0',
          align: 'left',
        },
      ],
    },
  ],
};
