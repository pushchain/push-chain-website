const baseTheme = require('prism-react-renderer').themes.dracula;

const lightCodeTheme = {
  ...baseTheme,
  plain: {
    ...baseTheme.plain,
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['keyword'],
      style: {
        color: '#8C59D6',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#BF2DD2',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#8e8e8e',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#3B65EA',
      },
    },
    {
      types: ['method, function,maybe-class-name property-access'],
      style: {
        color: '#187931',
      },
    },
  ],
};

const darkCodeTheme = require('prism-react-renderer').themes.dracula;

module.exports = {
  lightCodeTheme,
  darkCodeTheme,
};
