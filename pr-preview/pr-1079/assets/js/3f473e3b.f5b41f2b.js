"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[32648],{

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

/***/ 801084:
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
	slug: 'the-developer-guide-to-enabling',
	title: 'The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.',
	description: 'The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Your users subscribe to your channel via our dApp, want to move this functionality to your dApp? Here’s a definitive guide on how to do it.',
	tags: [
		'Ethereum',
		'Defi',
		'Epnsproject',
		'Newsletter',
		'Blockchain'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/the-developer-guide-to-enabling",
  "source": "@site/blog/2022-03-21-the-developer-guide-to-enabling/index.md",
  "title": "The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.",
  "description": "The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.",
  "date": "2022-03-21T00:00:00.000Z",
  "formattedDate": "March 21, 2022",
  "tags": [
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Defi",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/defi"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/epnsproject"
    },
    {
      "label": "Newsletter",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/newsletter"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    }
  ],
  "readingTime": 2.71,
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
    "slug": "the-developer-guide-to-enabling",
    "title": "The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.",
    "description": "The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Your users subscribe to your channel via our dApp, want to move this functionality to your dApp? Here’s a definitive guide on how to do it.",
    "tags": [
      "Ethereum",
      "Defi",
      "Epnsproject",
      "Newsletter",
      "Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS at ETHDenver 2022: A Throwback",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-at-ethdenver-2022-a-throwback"
  },
  "nextItem": {
    "title": "EPNS Collaborates With Float Capital to Bring Push Notifications to Magic Internet Assets",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-collaborates-with-float-capital"
  }
};
const assets = {
"image": (__webpack_require__(805794)/* ["default"] */ .A),
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
      alt: "Cover image of The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.",
      src: (__webpack_require__(865533)/* ["default"] */ .A) + "",
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

/***/ 805794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-81e314c31c518944e9e9f1d301b5420f.webp");

/***/ }),

/***/ 865533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-81e314c31c518944e9e9f1d301b5420f.webp");

/***/ })

}]);