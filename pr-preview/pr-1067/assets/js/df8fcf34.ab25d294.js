"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[43725],{

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

/***/ 335375:
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
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'truefi-taking-defi-to-new',
	title: 'TrueFi Taking DeFi to New Horizons with EPNS',
	description: 'TrueFi Taking DeFi to New Horizons with EPNS',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'DeFi is a space where maximum disruption happens every day. Thanks to the powerful composability of Ethereum, new solutions emerge quickly, and enable more people to participate in this financial revolution. When it comes to loans, collateralized and uncollateralized loans have attracted new kinds of players to the DeFi space.',
	tags: [
		'Defi',
		'Truefi',
		'Push',
		'Ethereum',
		'Blockchain'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/truefi-taking-defi-to-new",
  "source": "@site/blog/2021-07-12-truefi-taking-defi-to-new/index.md",
  "title": "TrueFi Taking DeFi to New Horizons with EPNS",
  "description": "TrueFi Taking DeFi to New Horizons with EPNS",
  "date": "2021-07-12T00:00:00.000Z",
  "formattedDate": "July 12, 2021",
  "tags": [
    {
      "label": "Defi",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/defi"
    },
    {
      "label": "Truefi",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/truefi"
    },
    {
      "label": "Push",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    }
  ],
  "readingTime": 1.0566666666666666,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Chain",
      "url": "https://x.com/PushChain",
      "page": true,
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    }
  ],
  "frontMatter": {
    "slug": "truefi-taking-defi-to-new",
    "title": "TrueFi Taking DeFi to New Horizons with EPNS",
    "description": "TrueFi Taking DeFi to New Horizons with EPNS",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "DeFi is a space where maximum disruption happens every day. Thanks to the powerful composability of Ethereum, new solutions emerge quickly, and enable more people to participate in this financial revolution. When it comes to loans, collateralized and uncollateralized loans have attracted new kinds of players to the DeFi space.",
    "tags": [
      "Defi",
      "Truefi",
      "Push",
      "Ethereum",
      "Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Welcome on board, Sandeep",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/welcome-on-board-sandeep"
  },
  "nextItem": {
    "title": "EPNS Ends H1 2021 with 25 Collaborations and $118m Volume on Uniswap",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-ends-h1-2021"
  }
};
const assets = {
"image": (__webpack_require__(693263)/* ["default"] */ .A),
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
      alt: "Cover Image of TrueFi Taking DeFi to New Horizons with EPNS",
      src: (__webpack_require__(960800)/* ["default"] */ .A) + "",
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

/***/ 693263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4b709b26378d73e3287f04987ac10fd3.webp");

/***/ }),

/***/ 960800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4b709b26378d73e3287f04987ac10fd3.webp");

/***/ })

}]);