"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[57362],{

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

/***/ 106529:
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
	slug: 'defi-aggregator-frontier-to-support',
	title: 'DeFi Aggregator Frontier to Support Web3 Notifs',
	description: 'DeFi Aggregator Frontier to Support Web3 Notifs',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Ethereum Push Notification Service is proud to announce that we’ve formed a strategic partnership with Frontier.Frontier is a chain-agnostic DeFi aggregator that enables users to manage all of their DeFi applications and assets in a safe, simple portal. Frontier’s platform is blockchain-agnostic and currently supports multiple DeFi protocols, including Uniswap, Aave, Compound and MakerDAO.',
	tags: [
		'Announcements',
		'Notifications',
		'Polygon Network',
		'Partnerships',
		'Ethereum'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/defi-aggregator-frontier-to-support",
  "source": "@site/blog/2021-04-28-defi-aggregator-frontier-to-support/index.md",
  "title": "DeFi Aggregator Frontier to Support Web3 Notifs",
  "description": "DeFi Aggregator Frontier to Support Web3 Notifs",
  "date": "2021-04-28T00:00:00.000Z",
  "formattedDate": "April 28, 2021",
  "tags": [
    {
      "label": "Announcements",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/announcements"
    },
    {
      "label": "Notifications",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/notifications"
    },
    {
      "label": "Polygon Network",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/polygon-network"
    },
    {
      "label": "Partnerships",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/partnerships"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/ethereum"
    }
  ],
  "readingTime": 0.91,
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
    "slug": "defi-aggregator-frontier-to-support",
    "title": "DeFi Aggregator Frontier to Support Web3 Notifs",
    "description": "DeFi Aggregator Frontier to Support Web3 Notifs",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Ethereum Push Notification Service is proud to announce that we’ve formed a strategic partnership with Frontier.Frontier is a chain-agnostic DeFi aggregator that enables users to manage all of their DeFi applications and assets in a safe, simple portal. Frontier’s platform is blockchain-agnostic and currently supports multiple DeFi protocols, including Uniswap, Aave, Compound and MakerDAO.",
    "tags": [
      "Announcements",
      "Notifications",
      "Polygon Network",
      "Partnerships",
      "Ethereum"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Gitcoin Growing Open Source with Web3 Notifs",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/gitcoin-growing-open-source"
  },
  "nextItem": {
    "title": "EPNS Roadmap 2021",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-roadmap-2021"
  }
};
const assets = {
"image": (__webpack_require__(199169)/* ["default"] */ .A),
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
      alt: "Cover Image of DeFi Aggregator Frontier to Support Web3 Notifs",
      src: (__webpack_require__(692490)/* ["default"] */ .A) + "",
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

/***/ 199169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a8c52902b446e02d7ebaceda5f88ed11.webp");

/***/ }),

/***/ 692490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a8c52902b446e02d7ebaceda5f88ed11.webp");

/***/ })

}]);