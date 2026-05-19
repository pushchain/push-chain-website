export const DocsResourcesList = {
  content: [
    {
      type: 'list',
      variant: 'tile',
      items: [
        {
          id: 'whatispush',
          url: '/docs/chain',
          valueKey:
            'pages.docs.grid-section.blocks.sections.resources.items.whatispush',
          target: '_self',
          image: '/static/assets/website/docshub/WhitePushLogo@3x',
          bgColor: '#dd6fff',
          bgStylizing: {
            type: 'sparkle',
            density: 40,
            size: 10,
            minOpacity: 0.25,
            maxOpacity: 0.55,
          },
          customWidth: '70px',
        },
        {
          id: 'builders',
          url: '/docs/chain/build/',
          valueKey:
            'pages.docs.grid-section.blocks.sections.resources.items.builders',
          target: '_self',
          image: '/static/assets/website/docshub/BuildOnPushIcon@3x',
          bgColor: 'var(--ifm-color-kb-blue)',
          bgStylizing: {
            type: 'lines',
            gridSize: 30,
            color: 'white',
            opacity: 0.2,
          },
          customWidth: '113px',
        },
        {
          id: 'ui-kit',
          url: '/docs/chain/ui-kit/',
          valueKey:
            'pages.docs.grid-section.blocks.sections.resources.items.ui-kit',
          target: '_self',
          image: '/static/assets/website/docshub/UIKit@3x',
          bgColor: 'var(--ifm-color-kb-blue)',
          bgStylizing: {
            type: 'lines',
            gridSize: 30,
            color: 'white',
            opacity: 0.2,
          },
          customWidth: '113px',
        },
        {
          id: 'pusd',
          url: 'https://pusd.push.org/docs',
          valueKey:
            'pages.docs.grid-section.blocks.sections.resources.items.pusd',
          target: '_blank',
          image: '/static/assets/website/docshub/PUSDIcon@3x',
          bgColor:
            'linear-gradient(35deg, #dd6fff 15%, var(--ifm-color-kb-blue) 100%)',
          bgStylizing: {
            type: 'lines',
            gridSize: 30,
            color: 'white',
            opacity: 0.2,
          },
          customWidth: '90px',
        },
      ],
    },
  ],
};
