"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[24426],{

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

/***/ 294164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cc026e92debc8378450504a05e2a3ff2.webp");

/***/ }),

/***/ 300545:
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
	slug: 'why-push-chain',
	title: 'Why Push Chain is the Missing Layer in Web3',
	authors: [
		'harsh'
	],
	image: './cover-image.webp',
	description: 'How a shared-state L1 can heal web3’s fragmentation and unleash web3’s true potential.',
	text: 'Today’s web3 is fractured - users bounce across 30+ chains, while developers gamble on choosing the ‘right chain’ to find traction, only to rebuild their app again and again for every new ecosystem; All of this is leading to a fragmented experience for everyone.',
	tags: [
		'Push Chain',
		'Any Chain Tx',
		'Universal Execution Layer',
		'Universal Smart Contracts',
		'Shared State Blockchain'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/why-push-chain",
  "source": "@site/blog/2024-12-09-why-push-chain/index.md",
  "title": "Why Push Chain is the Missing Layer in Web3",
  "description": "How a shared-state L1 can heal web3’s fragmentation and unleash web3’s true potential.",
  "date": "2024-12-09T00:00:00.000Z",
  "formattedDate": "December 9, 2024",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-chain"
    },
    {
      "label": "Any Chain Tx",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/any-chain-tx"
    },
    {
      "label": "Universal Execution Layer",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/universal-execution-layer"
    },
    {
      "label": "Universal Smart Contracts",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/universal-smart-contracts"
    },
    {
      "label": "Shared State Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/shared-state-blockchain"
    }
  ],
  "readingTime": 5.576666666666667,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Harsh Rajat",
      "title": "Co-Founder",
      "url": "https://twitter.com/harshrajat",
      "page": true,
      "imageURL": "/assets/blog/authors/authorharsh.png",
      "key": "harsh"
    }
  ],
  "frontMatter": {
    "slug": "why-push-chain",
    "title": "Why Push Chain is the Missing Layer in Web3",
    "authors": [
      "harsh"
    ],
    "image": "./cover-image.webp",
    "description": "How a shared-state L1 can heal web3’s fragmentation and unleash web3’s true potential.",
    "text": "Today’s web3 is fractured - users bounce across 30+ chains, while developers gamble on choosing the ‘right chain’ to find traction, only to rebuild their app again and again for every new ecosystem; All of this is leading to a fragmented experience for everyone.",
    "tags": [
      "Push Chain",
      "Any Chain Tx",
      "Universal Execution Layer",
      "Universal Smart Contracts",
      "Shared State Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Understand Proof of Stake (POS) and Push Chain PoS",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/understand-proof-of-stake-and-push-chain"
  },
  "nextItem": {
    "title": "How Push Enhances Privacy in On-Chain Communications",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-enhances-privacy-in-on-chain-communications"
  }
};
const assets = {
"image": (__webpack_require__(337977)/* ["default"] */ .A),
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
      alt: "Cover Image of Why Push Chain",
      src: (__webpack_require__(294164)/* ["default"] */ .A) + "",
      width: "1600",
      height: "900"
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

/***/ 337977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cc026e92debc8378450504a05e2a3ff2.webp");

/***/ })

}]);