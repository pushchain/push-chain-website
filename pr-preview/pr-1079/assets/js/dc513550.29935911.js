"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[86210],{

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

/***/ 105546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-3f0493d2ebc42babe4e9598017b56f79.webp");

/***/ }),

/***/ 832924:
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
	slug: 'epns-monthly-blocks-nov-2021',
	title: 'EPNS Monthly Blocks',
	description: 'EPNS Monthly Blocks',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We started the month strong with the big announcement of the successful Audit of the EPNS Push Protocol V1!💥. This marks one of the most important milestones in the 2021 roadmap, as it enables & ensures EPNS is ready to support cross-chain interoperability.',
	tags: [
		'Ethereum',
		'Newsletter',
		'Epnsproject',
		'Mainnet'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-monthly-blocks-nov-2021",
  "source": "@site/blog/2021-12-01-epns-monthly-blocks-nov-2021/index.md",
  "title": "EPNS Monthly Blocks",
  "description": "EPNS Monthly Blocks",
  "date": "2021-12-01T00:00:00.000Z",
  "formattedDate": "December 1, 2021",
  "tags": [
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/ethereum"
    },
    {
      "label": "Newsletter",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/newsletter"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/epnsproject"
    },
    {
      "label": "Mainnet",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/mainnet"
    }
  ],
  "readingTime": 3.27,
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
    "slug": "epns-monthly-blocks-nov-2021",
    "title": "EPNS Monthly Blocks",
    "description": "EPNS Monthly Blocks",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "We started the month strong with the big announcement of the successful Audit of the EPNS Push Protocol V1!💥. This marks one of the most important milestones in the 2021 roadmap, as it enables & ensures EPNS is ready to support cross-chain interoperability.",
    "tags": [
      "Ethereum",
      "Newsletter",
      "Epnsproject",
      "Mainnet"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Behold the Metaverse! What is it all about?",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/behold-the-metaverse"
  },
  "nextItem": {
    "title": "EPNS Enables Snapshot Voting for PUSH and PUSH/ETH LP Stakers!",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-enables-snapshot-voting"
  }
};
const assets = {
"image": (__webpack_require__(105546)/* ["default"] */ .A),
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
      src: (__webpack_require__(850203)/* ["default"] */ .A) + "",
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

/***/ 850203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-3f0493d2ebc42babe4e9598017b56f79.webp");

/***/ })

}]);