"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[36227],{

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

/***/ 460507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-eb2958fdad7cedf8de4abfb9cd0c20f0.webp");

/***/ }),

/***/ 497220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-eb2958fdad7cedf8de4abfb9cd0c20f0.webp");

/***/ }),

/***/ 563683:
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
	slug: 'calling-all-hobbyist-devs-channel-creation-gas-fee-is-now-refundable',
	title: 'Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'The main goal of EPNS is to be the gold standard of notifications in the web3 world. To receive a specific notification a user has to set up a channel by which they can send notifications. ',
	tags: [
		'Epnsproject',
		'Blockchain',
		'Notifications',
		'Governance',
		'Gas Fees'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/calling-all-hobbyist-devs-channel-creation-gas-fee-is-now-refundable",
  "source": "@site/blog/2022-07-06-calling-all-hobbyist-devs-channel/index.md",
  "title": "Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable",
  "description": "Cover image of Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable",
  "date": "2022-07-06T00:00:00.000Z",
  "formattedDate": "July 6, 2022",
  "tags": [
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/epnsproject"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Notifications",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/notifications"
    },
    {
      "label": "Governance",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/governance"
    },
    {
      "label": "Gas Fees",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/gas-fees"
    }
  ],
  "readingTime": 0.9666666666666667,
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
    "slug": "calling-all-hobbyist-devs-channel-creation-gas-fee-is-now-refundable",
    "title": "Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "The main goal of EPNS is to be the gold standard of notifications in the web3 world. To receive a specific notification a user has to set up a channel by which they can send notifications. ",
    "tags": [
      "Epnsproject",
      "Blockchain",
      "Notifications",
      "Governance",
      "Gas Fees"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS and Quest3 Unite in Pilot Collaboration to Bring Notifications for Users",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-and-quest3-unite-in-pilot-collaboration-to-bring-notifications-for-users"
  },
  "nextItem": {
    "title": "EPNS and Sturdy Form An Alliance to Enable Direct Communication for Users",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-and-sturdy-form-an-alliance-to-enable-direct-communication-for-users"
  }
};
const assets = {
"image": (__webpack_require__(460507)/* ["default"] */ .A),
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
      alt: "Cover image of Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable",
      src: (__webpack_require__(497220)/* ["default"] */ .A) + "",
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