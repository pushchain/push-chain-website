/* eslint-disable no-irregular-whitespace */
// Knowledge Base Content Configuration:
// - Add a new object with the following fields:
//   - `id`: identifier for the knowledge base item.
//   - `image`, `subtitle`: Metadata for the item.
//   - `title` & `content`: Each object has a title & content, which is in the /content folder. Add the title in the object in this directory and  // Use HTML or Markdown to create the article (similar to the blog section).
//   - `url`: For external links, provide the full URL instead of using `content`.

export const KBRootResourcesList = {
  content: [
    {
      type: 'list',
      title:
        'pages.knowledge.explainer-section.blocks.sections.resources.title',
      variant: 'tile',
      items: [
        {
          id: 'push101',
          url: 'push101',
          valueKey:
            'pages.knowledge.explainer-section.blocks.sections.resources.items.push101',
          target: '_self',
          image: '/static/assets/website/docshub/WhitePushLogo',
          imageSrcSet: true,
          // bgImage: require(`@site/static/assets/website/docshub/BG.png`).default,
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
          url: 'builders',
          valueKey:
            'pages.knowledge.explainer-section.blocks.sections.resources.items.builders',
          target: '_self',
          image: '/static/assets/website/docshub/BuildOnPushIcon',
          imageSrcSet: true,
          // bgImage: require(`@site/static/assets/website/docshub/BlackBG.png`).default,
          bgColor: '#101010',
          bgStylizing: {
            type: 'sparkle',
            density: 40,
            size: 10,
          },
          customWidth: '113px',
        },
        {
          id: 'deepdives',
          url: 'deepdives',
          valueKey:
            'pages.knowledge.explainer-section.blocks.sections.resources.items.deepdives',
          target: '_self',
          image: '/static/assets/website/docshub/TechnicalDeepDivesIcon',
          imageSrcSet: true,
          // bgImage: require(`@site/static/assets/website/docshub/BlackBG.png`).default,
          bgColor: 'var(--ifm-color-kb-dark)',
          bgStylizing: {
            type: 'sparkle',
            density: 40,
            size: 10,
          },
          customWidth: '103px',
        },
        {
          id: 'devdocs',
          url: '/docs',
          valueKey:
            'pages.knowledge.explainer-section.blocks.sections.resources.items.devdocs',
          target: '_self',
          image: '/static/assets/website/docshub/DeveloperDocsIcon',
          imageSrcSet: true,
          // bgImage: require(`@site/static/assets/website/docshub/BlueBG.png`).default,
          bgColor: 'var(--ifm-color-kb-blue)',
          bgStylizing: {
            type: 'lines',
            gridSize: 30,
            color: 'white',
            opacity: 0.2,
          },
          customWidth: '90px',
        },
        {
          id: 'tokenomics',
          url: 'tokenomics',
          valueKey:
            'pages.knowledge.explainer-section.blocks.sections.resources.items.tokenomics',
          target: '_self',
          image: '/static/assets/website/docshub/TokenomicsIcon',
          imageSrcSet: true,
          // bgImage: require(`@site/static/assets/website/docshub/BlackBG.png`).default,
          bgColor: 'var(--ifm-color-kb-dark)',
          bgStylizing: {
            type: 'sparkle',
            density: 40,
            size: 10,
          },
        },
        {
          id: 'faq',
          url: 'faq',
          valueKey:
            'pages.knowledge.explainer-section.blocks.sections.resources.items.faq',
          target: '_self',
          image: '/static/assets/website/docshub/FAQIcons',
          imageSrcSet: true,
          // bgImage: require(`@site/static/assets/website/docshub/BlackBG.png`).default,
          bgColor: 'var(--ifm-color-kb-dark)',
          bgStylizing: {
            type: 'sparkle',
            density: 40,
            size: 10,
          },
          customWidth: '70px',
        },
        {
          id: 'testnet',
          url: 'testnet',
          valueKey:
            'pages.knowledge.explainer-section.blocks.sections.resources.items.testnet',
          target: '_self',
          image: '/static/assets/website/docshub/TestnetDonutIcon',
          imageSrcSet: true,
          // bgImage: require(`@site/static/assets/website/docshub/BlackBG.png`).default,
          bgColor: 'var(--ifm-color-kb-dark)',
          bgStylizing: {
            type: 'sparkle',
            density: 40,
            size: 10,
          },
          customWidth: '70px',
        },
        {
          id: 'audit',
          url: 'audit',
          valueKey:
            'pages.knowledge.explainer-section.blocks.sections.resources.items.audit',
          target: '_self',
          image: '/static/assets/website/docshub/AuditIcon',
          imageSrcSet: true,
          bgColor: 'var(--ifm-color-kb-dark)',
          bgStylizing: {
            type: 'sparkle',
            density: 40,
            size: 10,
          },
          customWidth: '70px',
        },
        // {
        //   id: 'validators',
        //   url: 'validators',
        //   valueKey:
        //     'pages.knowledge.explainer-section.blocks.sections.resources.items.validators',
        //   target: '_self',
        //   image: '/static/assets/website/docshub/FAQIcons',
        //   imageSrcSet: true,
        //   // bgImage: require(`@site/static/assets/website/docshub/BlackBG.png`).default,
        //   bgColor: 'var(--ifm-color-kb-dark)',
        //   bgStylizing: {
        //     type: 'sparkle',
        //     density: 40,
        //     size: 10,
        //   },
        //   customWidth: '70px',
        // },
      ],
    },
  ],
};
