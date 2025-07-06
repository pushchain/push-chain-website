"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[95700],{

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

/***/ 460108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5c051971b8e8818cad8b2b87e99a3478.webp");

/***/ }),

/***/ 544817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5c051971b8e8818cad8b2b87e99a3478.webp");

/***/ }),

/***/ 692406:
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
	slug: 'what-is-consumer-crypto-and-why-does-it-matter',
	title: 'What is consumer crypto and why does it matter?',
	authors: [
		'ian'
	],
	image: './cover-image.webp',
	description: ' What is consumer crypto and why does it matter?',
	text: 'Bitcoin showed us that a decentralized monetary system can work in practice. Ethereum did the same for applications of all shapes and sizes.',
	tags: [
		'Consumer Crypto',
		'Insights'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/what-is-consumer-crypto-and-why-does-it-matter",
  "source": "@site/blog/2024-09-26-what-is-consumer-crypto-and-why-does-it-matter/index.md",
  "title": "What is consumer crypto and why does it matter?",
  "description": " What is consumer crypto and why does it matter?",
  "date": "2024-09-26T00:00:00.000Z",
  "formattedDate": "September 26, 2024",
  "tags": [
    {
      "label": "Consumer Crypto",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/consumer-crypto"
    },
    {
      "label": "Insights",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/insights"
    }
  ],
  "readingTime": 7.246666666666667,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Ian LeViness",
      "url": "https://x.com/ExpatCrypto3",
      "imageURL": "/assets/blog/authors/authorian.png",
      "key": "ian"
    }
  ],
  "frontMatter": {
    "slug": "what-is-consumer-crypto-and-why-does-it-matter",
    "title": "What is consumer crypto and why does it matter?",
    "authors": [
      "ian"
    ],
    "image": "./cover-image.webp",
    "description": " What is consumer crypto and why does it matter?",
    "text": "Bitcoin showed us that a decentralized monetary system can work in practice. Ethereum did the same for applications of all shapes and sizes.",
    "tags": [
      "Consumer Crypto",
      "Insights"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Introducing the Push Points Program",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/introducing-the-push-points-program"
  },
  "nextItem": {
    "title": "Introducing Push Group Chats for Guilds!",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-group-chats-for-guilds"
  }
};
const assets = {
"image": (__webpack_require__(460108)/* ["default"] */ .A),
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
      alt: "Cover Image of What is consumer crypto and why does it matter?",
      src: (__webpack_require__(544817)/* ["default"] */ .A) + "",
      width: "1920",
      height: "1080"
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



/***/ })

}]);