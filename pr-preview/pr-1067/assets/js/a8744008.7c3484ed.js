"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[98745],{

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

/***/ 550601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2410a67c5a89b1712669ad76c3b8b62d.webp");

/***/ }),

/***/ 738577:
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
	slug: 'epns-at-ethdenver-2022-a-throwback',
	title: 'EPNS at ETHDenver 2022: A Throwback',
	description: 'EPNS at ETHDenver 2022: A Throwback',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Flipside Crypto, the project enabling communities to share data-driven insights on blockchain projects, joins forces with EPNS to bring decentralized push notifications to its users. As such, users of the platform are poised to receive updates about everything Flipside Crypto right on their devices.',
	tags: [
		'Ethdenver',
		'Epnsproject',
		'Ethereum',
		'Ethereum Blockchain',
		'Conference'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-at-ethdenver-2022-a-throwback",
  "source": "@site/blog/2022-03-21-epns-at-ethdenver-2022-a-throwback/index.md",
  "title": "EPNS at ETHDenver 2022: A Throwback",
  "description": "EPNS at ETHDenver 2022: A Throwback",
  "date": "2022-03-21T00:00:00.000Z",
  "formattedDate": "March 21, 2022",
  "tags": [
    {
      "label": "Ethdenver",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethdenver"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/epnsproject"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Ethereum Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum-blockchain"
    },
    {
      "label": "Conference",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/conference"
    }
  ],
  "readingTime": 2.0633333333333335,
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
    "slug": "epns-at-ethdenver-2022-a-throwback",
    "title": "EPNS at ETHDenver 2022: A Throwback",
    "description": "EPNS at ETHDenver 2022: A Throwback",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Flipside Crypto, the project enabling communities to share data-driven insights on blockchain projects, joins forces with EPNS to bring decentralized push notifications to its users. As such, users of the platform are poised to receive updates about everything Flipside Crypto right on their devices.",
    "tags": [
      "Ethdenver",
      "Epnsproject",
      "Ethereum",
      "Ethereum Blockchain",
      "Conference"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS and Flipside Crypto Join Forces to Facilitate Push Notifications for Users",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-and-flipside-crypto-join-forces"
  },
  "nextItem": {
    "title": "The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/the-developer-guide-to-enabling"
  }
};
const assets = {
"image": (__webpack_require__(550601)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS at ETHDenver 2022: A Throwback",
      src: (__webpack_require__(939392)/* ["default"] */ .A) + "",
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

/***/ 939392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2410a67c5a89b1712669ad76c3b8b62d.webp");

/***/ })

}]);