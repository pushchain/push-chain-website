export const KBBuildersList = {
  title: 'pages.knowledge.builders.explainer-section.blocks.title',
  content: [
    {
      type: 'indexlist',
      topGap: false,
      bottomGap: false,
      value: [
        {
          type: 'text',
          valueKey:
            'pages.knowledge.builders.explainer-section.blocks.sections.builders-intro.items.intro',
        },
        {
          type: 'text',
          valueKey:
            'pages.knowledge.builders.explainer-section.blocks.sections.builders-intro.items.curated-reads',
          hidden: true,
        },
      ],
    },
    {
      type: 'list',
      title:
        'pages.knowledge.builders.explainer-section.blocks.sections.universal-apps.title',
      topGap: true,
      bottomGap: true,
      variant: 'row',
      items: [
        {
          valueKey: `pages.knowledge.push101.explainer-section.blocks.sections.why-push-chain-future.items.apps-of-the-future`,
          slug: 'apps-of-the-future-building-without-the-chaos',
          image:
            '/static/assets/website/chain/knowledge/apps-of-the-future-building-without-the-chaos',
          imageSrcSet: false,
          url: '/blog/apps-of-the-future-building-without-the-chaos',
          target: '_blank',
        },
        {
          slug: 'consumer-apps-that-can-be-built-on-push-chain',
          image: '/static/assets/website/chain/knowledge/consumer-apps',
          imageSrcSet: false,
          title: 'Consumer Apps 🫶🏽 Push Chain?',
          url: '/blog/consumer-apps-that-can-be-built-on-push-chain/',
          target: '_blank',
        },
        {
          slug: 'apps-only-possible-with-shared-state-v1',
          image:
            '/static/assets/website/chain/knowledge/apps-only-possible-with-shared-state-v1',
          imageSrcSet: false,
          title: 'Apps Possible Only with Shared State - Vol.1',
          url: '/blog/apps-only-possible-with-shared-state-v1',
          target: '_blank',
        },
        {
          slug: 'apps-only-possible-with-shared-state-v2',
          image:
            '/static/assets/website/chain/knowledge/apps-only-possible-with-shared-state-v2',
          imageSrcSet: false,
          title: 'Apps Possible Only with Shared State - Vol.2',
          url: '/blog/apps-only-possible-with-shared-state-v2',
          target: '_blank',
        },
      ],
    },

    {
      type: 'list',
      title:
        'pages.knowledge.builders.explainer-section.blocks.sections.developer-resources.title',
      topGap: true,
      bottomGap: true,
      variant: 'row',
      items: [
        {
          slug: 'developer-docs',
          image: '/static/assets/website/chain/knowledge/developer-docs',
          imageSrcSet: false,
          title: 'Explore Developer Documentation',
          url: '/docs/',
          target: '_blank',
        },
        {
          slug: 'faucet',
          image: '/static/assets/website/chain/knowledge/developer-faucet',
          imageSrcSet: false,
          title: 'Get Testnet Tokens',
          url: 'https://faucet.push.org',
          target: '_blank',
        },
        {
          slug: 'testnet-explorer',
          image: '/static/assets/website/chain/knowledge/developer-explorer',
          imageSrcSet: false,
          title: 'Push Testnet Explorer',
          url: 'https://donut.push.network',
          target: '_blank',
        },
      ],
    },
  ],
};
