"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[59339],{

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

/***/ 496439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-730c17b90203c951db1c0312959d6350.gif");

/***/ }),

/***/ 717306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-730c17b90203c951db1c0312959d6350.gif");

/***/ }),

/***/ 948053:
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
	slug: 'push-protocol-launches-on-bnb-chain',
	title: 'Push Protocol Launches on BNB Chain!💛',
	authors: [
		'push'
	],
	image: './cover-image.gif',
	text: 'Today, we’re excited to announce that Push Protocol is launching on the BNB Chain mainnets! This means the largest web3 communication platform is now available to BNB’s ecosystem of thousands of dapps and hundreds of thousands of daily users. ',
	tags: [
		'BNB',
		'BNBChain',
		'Blockchain',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-protocol-launches-on-bnb-chain",
  "source": "@site/blog/2023-02-15-push-protocol-launches-on-bnb-chain/index.md",
  "title": "Push Protocol Launches on BNB Chain!💛",
  "description": "Cover image of Push Protocol Launches on BNB Chain!💛",
  "date": "2023-02-15T00:00:00.000Z",
  "formattedDate": "February 15, 2023",
  "tags": [
    {
      "label": "BNB",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/bnb"
    },
    {
      "label": "BNBChain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/bnb-chain"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain-technology"
    }
  ],
  "readingTime": 1.8733333333333333,
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
    "slug": "push-protocol-launches-on-bnb-chain",
    "title": "Push Protocol Launches on BNB Chain!💛",
    "authors": [
      "push"
    ],
    "image": "./cover-image.gif",
    "text": "Today, we’re excited to announce that Push Protocol is launching on the BNB Chain mainnets! This means the largest web3 communication platform is now available to BNB’s ecosystem of thousands of dapps and hundreds of thousands of daily users. ",
    "tags": [
      "BNB",
      "BNBChain",
      "Blockchain",
      "Blockchain Technology"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Building a Better UX in BNB With Our 8 Launch Collaborators🚀",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/building-a-better-ux-in-bnb-with-our-8-launch-collaborators"
  },
  "nextItem": {
    "title": "Push and Phuture Finance Team Up to Enhance User Engagement🐋",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-and-phuture-finance-team-up-to-enhance-user-engagement"
  }
};
const assets = {
"image": (__webpack_require__(496439)/* ["default"] */ .A),
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
      alt: "Cover image of Push Protocol Launches on BNB Chain!💛",
      src: (__webpack_require__(717306)/* ["default"] */ .A) + "",
      width: "600",
      height: "338"
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