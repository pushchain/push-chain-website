"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[8577],{

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

/***/ 473915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-795636df73199722574cdcb0931a4bf7.gif");

/***/ }),

/***/ 622822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-795636df73199722574cdcb0931a4bf7.gif");

/***/ }),

/***/ 738524:
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
	slug: 'announcing-group-chat-from-push-unstoppable',
	title: 'Announcing “Group Chat” from Push Protocol and Unstoppable Domains ',
	authors: [
		'push'
	],
	image: './cover-image.gif',
	description: 'Announcing “Group Chat” from Push Protocol and Unstoppable Domains ',
	text: 'Today, we\'re thrilled to announce an exciting new chapter in our partnership with Unstoppable Domains (UD): the launch of \'Group Chat\' on the UD messaging platform! 🎉',
	tags: [
		'Push Protocol',
		'Web3',
		'Blockchain Technology',
		'Unstoppable Domains'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/announcing-group-chat-from-push-unstoppable",
  "source": "@site/blog/2024-01-17-announcing-group-chat-from-push-unstoppable/index.md",
  "title": "Announcing “Group Chat” from Push Protocol and Unstoppable Domains ",
  "description": "Announcing “Group Chat” from Push Protocol and Unstoppable Domains ",
  "date": "2024-01-17T00:00:00.000Z",
  "formattedDate": "January 17, 2024",
  "tags": [
    {
      "label": "Push Protocol",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-protocol"
    },
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/web-3"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain-technology"
    },
    {
      "label": "Unstoppable Domains",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/unstoppable-domains"
    }
  ],
  "readingTime": 2.18,
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
    "slug": "announcing-group-chat-from-push-unstoppable",
    "title": "Announcing “Group Chat” from Push Protocol and Unstoppable Domains ",
    "authors": [
      "push"
    ],
    "image": "./cover-image.gif",
    "description": "Announcing “Group Chat” from Push Protocol and Unstoppable Domains ",
    "text": "Today, we're thrilled to announce an exciting new chapter in our partnership with Unstoppable Domains (UD): the launch of 'Group Chat' on the UD messaging platform! 🎉",
    "tags": [
      "Push Protocol",
      "Web3",
      "Blockchain Technology",
      "Unstoppable Domains"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Monthly Recap January 🎉",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/monthly-recap-january-2024"
  },
  "nextItem": {
    "title": "Announcing Winners of Billion Reasons To Build Coding Challenge 🎉🔔",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/announcing-winners-of-billion-reasons"
  }
};
const assets = {
"image": (__webpack_require__(622822)/* ["default"] */ .A),
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
      alt: "Cover Image of Announcing “Group Chat” from Push Protocol and Unstoppable Domains ",
      src: (__webpack_require__(473915)/* ["default"] */ .A) + "",
      width: "800",
      height: "450"
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