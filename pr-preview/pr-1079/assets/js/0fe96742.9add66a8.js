"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[35884],{

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

/***/ 134211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8fef209b02018162b80d8fdc5ee94416.webp");

/***/ }),

/***/ 149540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8fef209b02018162b80d8fdc5ee94416.webp");

/***/ }),

/***/ 726710:
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
	slug: 'getting-started-with-push-sdk-rest-api',
	title: 'Getting Started With Push SDK REST API⚙️',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'The PUSH-SDK, is a growing JavaScript-based SDK that allows developers to add push notification functionality to their dapps.',
	tags: [
		'Web3',
		'Blockchain',
		'SDK',
		'Push Notification Service',
		'Developer'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/getting-started-with-push-sdk-rest-api",
  "source": "@site/blog/2023-02-01-getting-started-with-push/index.md",
  "title": "Getting Started With Push SDK REST API⚙️",
  "description": "Cover image of Getting Started With Push SDK REST API⚙️",
  "date": "2023-02-01T00:00:00.000Z",
  "formattedDate": "February 1, 2023",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/web-3"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain"
    },
    {
      "label": "SDK",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/sdk"
    },
    {
      "label": "Push Notification Service",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/push-notification-service"
    },
    {
      "label": "Developer",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/developer"
    }
  ],
  "readingTime": 5.07,
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
    "slug": "getting-started-with-push-sdk-rest-api",
    "title": "Getting Started With Push SDK REST API⚙️",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "The PUSH-SDK, is a growing JavaScript-based SDK that allows developers to add push notification functionality to their dapps.",
    "tags": [
      "Web3",
      "Blockchain",
      "SDK",
      "Push Notification Service",
      "Developer"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/push-and-wherever-team-up-to-bring-web3-communication-tools-to-dapps"
  },
  "nextItem": {
    "title": "QiDAO Taps Push to Update Users on their Debt Positions🪙",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/qi-dao-taps-push-to-update-users-on-their-debt-positions"
  }
};
const assets = {
"image": (__webpack_require__(149540)/* ["default"] */ .A),
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
      alt: "Cover image of Getting Started With Push SDK REST API⚙️",
      src: (__webpack_require__(134211)/* ["default"] */ .A) + "",
      width: "1400",
      height: "735"
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