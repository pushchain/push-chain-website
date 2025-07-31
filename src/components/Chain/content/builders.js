export const buildersContent = {
  title: 'Build on Push Chain',
  content: [
    {
      type: 'indexlist',
      topGap: false,
      bottomGap: false,
      value: [
        {
          type: 'text',
          value: `## Builders
          
          Ready to build on Push Chain? Here are some resources to get you started.
          
          `,
        },
        {
          type: 'text',
          hidden: true,
          value: `## Curated Reads 👇`,
        },
      ],
    },

    {
      type: 'list',
      title: "Let's Build Universal Apps 💪",
      topGap: true,
      bottomGap: true,
      mode: 'playlist',
      items: [
        {
          slug: 'apps-only-possible-with-shared-state-v1',
          image: 'apps-only-possible-with-shared-state-v1',
          title: 'Apps Possible Only with Shared State - Vol.1',
          url: '/blog/apps-only-possible-with-shared-state-v1',
          target: '_blank',
        },
        {
          slug: 'apps-only-possible-with-shared-state-v2',
          image: 'apps-only-possible-with-shared-state-v2',
          title: 'Apps Possible Only with Shared State - Vol.2',
          url: '/blog/apps-only-possible-with-shared-state-v2',
          target: '_blank',
        },
        {
          slug: 'consumer-apps-that-can-be-built-on-push-chain',
          image: 'consumer-apps',
          title: 'Consumer Apps 🫶🏽 Push Chain?',
          url: '/blog/consumer-apps-that-can-be-built-on-push-chain/',
          target: '_blank',
        },
      ],
    },
  ],
};
