"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[91917],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 76533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-59fd1ad12af410bbcb30947cf215a303.webp");

/***/ }),

/***/ 97965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'enhancing-the-de-fi-ux-on-polygon-push-x-quick-swap',
	title: 'Enhancing the DeFi UX on Polygon | Push x QuickSwap🐲',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'QuickSwap is revolutionizing the DeFi landscape by offering lightning-fast transaction speeds and near-zero gas fees, making it an attractive platform for traders, swappers, liquidity providers, and yield farmers. Through its Automated Market Maker (AMM) model, QuickSwap enables users to exchange tokens seamlessly in liquidity pools without the need for a traditional order book.',
	tags: [
		'Push Protocol',
		'Frensofpush'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/enhancing-the-de-fi-ux-on-polygon-push-x-quick-swap",
  "source": "@site/blog/2023-08-17-enhancing-the-defi-ux/index.md",
  "title": "Enhancing the DeFi UX on Polygon | Push x QuickSwap🐲",
  "description": "Cover image of Enhancing the DeFi UX on Polygon | Push x QuickSwap🐲",
  "date": "2023-08-17T00:00:00.000Z",
  "formattedDate": "August 17, 2023",
  "tags": [
    {
      "label": "Push Protocol",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/push-protocol"
    },
    {
      "label": "Frensofpush",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/frensofpush"
    }
  ],
  "readingTime": 2.02,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Protocol",
      "url": "https://x.com/PushChain",
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    }
  ],
  "frontMatter": {
    "slug": "enhancing-the-de-fi-ux-on-polygon-push-x-quick-swap",
    "title": "Enhancing the DeFi UX on Polygon | Push x QuickSwap🐲",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "QuickSwap is revolutionizing the DeFi landscape by offering lightning-fast transaction speeds and near-zero gas fees, making it an attractive platform for traders, swappers, liquidity providers, and yield farmers. Through its Automated Market Maker (AMM) model, QuickSwap enables users to exchange tokens seamlessly in liquidity pools without the need for a traditional order book.",
    "tags": [
      "Push Protocol",
      "Frensofpush"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "A Billion Reasons to Build: Finding India’s Best Web3 Developers 🇮🇳",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/a-billion-reasons-to-build-finding-india-s-best-web3-developers"
  },
  "nextItem": {
    "title": "Introducing the Push Ambassador India Program🌸",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/introducing-the-push-ambassador-india-program"
  }
};
const assets = {
"image": (__webpack_require__(76533)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
      alt: "Cover image of Enhancing the DeFi UX on Polygon | Push x QuickSwap🐲",
      src: (__webpack_require__(447258)/* ["default"] */ .A) + "",
      width: "1400",
      height: "788"
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 447258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-59fd1ad12af410bbcb30947cf215a303.webp");

/***/ })

}]);