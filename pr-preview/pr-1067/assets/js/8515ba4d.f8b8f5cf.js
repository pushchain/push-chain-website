"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[50015],{

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

/***/ 488092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5e0694cc1a4b5f6d46b1f98b3426918e.png");

/***/ }),

/***/ 492821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5e0694cc1a4b5f6d46b1f98b3426918e.png");

/***/ }),

/***/ 646816:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'icymi-epns-at-eth-cc-2022-paris',
	title: 'ICYMI — EPNS at EthCC 2022 Paris 🇫🇷',
	authors: [
		'push'
	],
	image: './cover-image.png',
	text: 'While the sweltering heat was the talk of the town, we donned our cool collective hats and focused on being part of one of the largest Ethereum events focused on tech and community, with three intense days of conferences, networking and learning.',
	tags: [
		'Push Notification',
		'Ethereum',
		'Epnsproject',
		'Cryptocurrency',
		'Blockchain'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/icymi-epns-at-eth-cc-2022-paris",
  "source": "@site/blog/2022-07-27-icymi-epns-at-eth-cc-2022-paris/index.md",
  "title": "ICYMI — EPNS at EthCC 2022 Paris 🇫🇷",
  "description": "Cover Image of ICYMI — EPNS at EthCC 2022 Paris 🇫🇷",
  "date": "2022-07-27T00:00:00.000Z",
  "formattedDate": "July 27, 2022",
  "tags": [
    {
      "label": "Push Notification",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-notification"
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
      "label": "Cryptocurrency",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/cryptocurrency"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    }
  ],
  "readingTime": 2.9133333333333336,
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
    "slug": "icymi-epns-at-eth-cc-2022-paris",
    "title": "ICYMI — EPNS at EthCC 2022 Paris 🇫🇷",
    "authors": [
      "push"
    ],
    "image": "./cover-image.png",
    "text": "While the sweltering heat was the talk of the town, we donned our cool collective hats and focused on being part of one of the largest Ethereum events focused on tech and community, with three intense days of conferences, networking and learning.",
    "tags": [
      "Push Notification",
      "Ethereum",
      "Epnsproject",
      "Cryptocurrency",
      "Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS and Cryptocurrency Jobs Join Forces to Facilitate Push Notifications for Users",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-and-cryptocurrency-jobs-join-forces-to-facilitate-push-notifications-for-users"
  },
  "nextItem": {
    "title": "EPNS Collaborates With DXdao to Enable Notifications for Swapr Campaign Updates",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-collaborates-with-d-xdao-to-enable-notifications-for-swapr-campaign-updates"
  }
};
const assets = {
"image": (__webpack_require__(492821)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
      alt: "Cover Image of ICYMI — EPNS at EthCC 2022 Paris 🇫🇷",
      src: (__webpack_require__(488092)/* ["default"] */ .A) + "",
      width: "1400",
      height: "700"
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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