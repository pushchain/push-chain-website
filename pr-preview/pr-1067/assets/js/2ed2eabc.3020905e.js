"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[22489],{

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

/***/ 164258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7a987cba76951726caf02191d513e3f4.png");

/***/ }),

/***/ 787101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7a987cba76951726caf02191d513e3f4.png");

/***/ }),

/***/ 915083:
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
	slug: 'reef-chain-integrates-epns-to-enable-seamless-communication-with-users',
	title: 'Reef Chain Integrates EPNS to Enable Seamless Communication With Users',
	authors: [
		'push'
	],
	image: './cover-image.png',
	text: 'Reef Chain is a fast, scalable, efficient, and affordable Layer-1 network that aims to integrate all the best aspects of popular blockchains into one platform to offer a world-class experience to users and developers. It is designed to power the next generation of DeFi, NFT, GameFi, and metaverse projects.',
	tags: [
		'Push Notification',
		'Blockchain',
		'Web3',
		'Ethereum',
		'Announcements'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/reef-chain-integrates-epns-to-enable-seamless-communication-with-users",
  "source": "@site/blog/2022-09-06-reef-chain-integrates-epns/index.md",
  "title": "Reef Chain Integrates EPNS to Enable Seamless Communication With Users",
  "description": "Cover image of Reef Chain Integrates EPNS to Enable Seamless Communication With Users",
  "date": "2022-09-06T00:00:00.000Z",
  "formattedDate": "September 6, 2022",
  "tags": [
    {
      "label": "Push Notification",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-notification"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/web-3"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Announcements",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/announcements"
    }
  ],
  "readingTime": 1.47,
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
    "slug": "reef-chain-integrates-epns-to-enable-seamless-communication-with-users",
    "title": "Reef Chain Integrates EPNS to Enable Seamless Communication With Users",
    "authors": [
      "push"
    ],
    "image": "./cover-image.png",
    "text": "Reef Chain is a fast, scalable, efficient, and affordable Layer-1 network that aims to integrate all the best aspects of popular blockchains into one platform to offer a world-class experience to users and developers. It is designed to power the next generation of DeFi, NFT, GameFi, and metaverse projects.",
    "tags": [
      "Push Notification",
      "Blockchain",
      "Web3",
      "Ethereum",
      "Announcements"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Loan Update: High Utilization or Low Liquidity, Please Check Your Position",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/loan-update-high-utilization-or-low-liquidity-please-check-your-position"
  },
  "nextItem": {
    "title": "‘My Dapp’ Would Like to Send You Push Notifications",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/my-dapp-would-like-to-send-you-push-notifications"
  }
};
const assets = {
"image": (__webpack_require__(164258)/* ["default"] */ .A),
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
      alt: "Cover image of Reef Chain Integrates EPNS to Enable Seamless Communication With Users",
      src: (__webpack_require__(787101)/* ["default"] */ .A) + "",
      width: "1100",
      height: "550"
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