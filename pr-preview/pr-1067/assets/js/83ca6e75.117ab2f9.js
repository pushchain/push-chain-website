"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[5719],{

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

/***/ 377895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9fd20bc8bfd146e01bf52f31e60c450a.webp");

/***/ }),

/***/ 542782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9fd20bc8bfd146e01bf52f31e60c450a.webp");

/***/ }),

/***/ 941735:
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
	slug: 'push-dao-extends-liquidity-rewards-program-in-v2-0',
	title: 'Push DAO Extends Liquidity Rewards Program in v2.0',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Today we are announcing the extension of the Push Liquidity Rewards Program for 🎊84 more weeks🎊 The proposal was brought forth and voted for entirely by the Push community via the Push DAO',
	tags: [
		'Web3',
		'Liquidity Pool',
		'Liquidity Mining',
		'Push Notification'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-dao-extends-liquidity-rewards-program-in-v2-0",
  "source": "@site/blog/2023-03-14-liquidity-rewards-v2/index.md",
  "title": "Push DAO Extends Liquidity Rewards Program in v2.0",
  "description": "Cover image of Push DAO Extends Liquidity Rewards Program in v2.0",
  "date": "2023-03-14T00:00:00.000Z",
  "formattedDate": "March 14, 2023",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/web-3"
    },
    {
      "label": "Liquidity Pool",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/liquidity-pool"
    },
    {
      "label": "Liquidity Mining",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/liquidity-mining"
    },
    {
      "label": "Push Notification",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-notification"
    }
  ],
  "readingTime": 1.1266666666666667,
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
    "slug": "push-dao-extends-liquidity-rewards-program-in-v2-0",
    "title": "Push DAO Extends Liquidity Rewards Program in v2.0",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Today we are announcing the extension of the Push Liquidity Rewards Program for 🎊84 more weeks🎊 The proposal was brought forth and voted for entirely by the Push community via the Push DAO",
    "tags": [
      "Web3",
      "Liquidity Pool",
      "Liquidity Mining",
      "Push Notification"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Birth of a New Pantheon: THENA and Push Protocol Unite💜",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/birth-of-a-new-pantheon-thena-and-push-protocol-unite"
  },
  "nextItem": {
    "title": "Push Chat: The Solution To Centralized Messaging ✅",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chat-the-solution-to-centralized-messaging"
  }
};
const assets = {
"image": (__webpack_require__(377895)/* ["default"] */ .A),
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
      alt: "Cover image of Push DAO Extends Liquidity Rewards Program in v2.0",
      src: (__webpack_require__(542782)/* ["default"] */ .A) + "",
      width: "1100",
      height: "619"
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