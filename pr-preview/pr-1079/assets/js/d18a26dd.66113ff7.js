"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[54551],{

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

/***/ 551519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-0176f3f73cf5210e2db54ce48914a7ae.webp");

/***/ }),

/***/ 573375:
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
	slug: 'epns-monthly-blocks-2022-may',
	title: 'EPNS Monthly Blocks',
	description: 'EPNS Monthly Blocks',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Hi EPNS frens 👋🏽! In the blink of an eye we’ve come to the final stretch of Q2. Lots of things are coming together nicely, and it’s time for a recap!',
	tags: [
		'Newsletter',
		'Blockchain',
		'Ethereum',
		'Epnsproject',
		'Communication'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-monthly-blocks-2022-may",
  "source": "@site/blog/2022-06-02-epns-monthly-blocks/index.md",
  "title": "EPNS Monthly Blocks",
  "description": "EPNS Monthly Blocks",
  "date": "2022-06-02T00:00:00.000Z",
  "formattedDate": "June 2, 2022",
  "tags": [
    {
      "label": "Newsletter",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/newsletter"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/epnsproject"
    },
    {
      "label": "Communication",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/communication"
    }
  ],
  "readingTime": 3.6766666666666667,
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
    "slug": "epns-monthly-blocks-2022-may",
    "title": "EPNS Monthly Blocks",
    "description": "EPNS Monthly Blocks",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Hi EPNS frens 👋🏽! In the blink of an eye we’ve come to the final stretch of Q2. Lots of things are coming together nicely, and it’s time for a recap!",
    "tags": [
      "Newsletter",
      "Blockchain",
      "Ethereum",
      "Epnsproject",
      "Communication"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-x-the-graph-enabling-a-better-way-to-access-blockchain-data"
  },
  "nextItem": {
    "title": "EPNS and Hermes DeFi Form An Alliance to Enable Seamless Communication for Users",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-and-hermes"
  }
};
const assets = {
"image": (__webpack_require__(551519)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS Monthly Blocks",
      src: (__webpack_require__(972876)/* ["default"] */ .A) + "",
      width: "1400",
      height: "700"
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

/***/ 972876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-0176f3f73cf5210e2db54ce48914a7ae.webp");

/***/ })

}]);