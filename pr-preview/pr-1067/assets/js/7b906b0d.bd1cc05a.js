"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[19559],{

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

/***/ 157609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-26765ba30880889b7618592693c7e2c3.webp");

/***/ }),

/***/ 293178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-26765ba30880889b7618592693c7e2c3.webp");

/***/ }),

/***/ 312748:
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
	slug: 'how-push-works-with-other-protocols',
	title: 'Ecosystem Integrations: How Push Works with Other Protocols',
	authors: [
		'sixty'
	],
	image: './cover-image.webp',
	description: 'Ecosystem Integrations: How Push Works with Other Protocols',
	text: 'As the web3 ecosystem expands, seamless communication and timely information flow have become essential for effective user engagement and enhanced user experience.',
	tags: [
		'Technical',
		'Push Tech'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-works-with-other-protocols",
  "source": "@site/blog/2024-11-08-how-push-works-with-other-protocols/index.md",
  "title": "Ecosystem Integrations: How Push Works with Other Protocols",
  "description": "Ecosystem Integrations: How Push Works with Other Protocols",
  "date": "2024-11-08T00:00:00.000Z",
  "formattedDate": "November 8, 2024",
  "tags": [
    {
      "label": "Technical",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/technical"
    },
    {
      "label": "Push Tech",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-tech"
    }
  ],
  "readingTime": 3.81,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "SixtyKeys",
      "title": "Guest Contributor",
      "url": "https://x.com/sixty_keys",
      "imageURL": "/assets/blog/authors/authorsixty.png",
      "key": "sixty"
    }
  ],
  "frontMatter": {
    "slug": "how-push-works-with-other-protocols",
    "title": "Ecosystem Integrations: How Push Works with Other Protocols",
    "authors": [
      "sixty"
    ],
    "image": "./cover-image.webp",
    "description": "Ecosystem Integrations: How Push Works with Other Protocols",
    "text": "As the web3 ecosystem expands, seamless communication and timely information flow have become essential for effective user engagement and enhanced user experience.",
    "tags": [
      "Technical",
      "Push Tech"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Protocol Monthly Updates - October",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/monthly-recap-october-2024"
  },
  "nextItem": {
    "title": "How Push Chat is Different from Traditional Chat Platforms ",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-chat-is-different-from-traditional-chat-platforms"
  }
};
const assets = {
"image": (__webpack_require__(293178)/* ["default"] */ .A),
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
      alt: "Cover Image of Ecosystem Integrations: How Push Works with Other Protocols",
      src: (__webpack_require__(157609)/* ["default"] */ .A) + "",
      width: "1920",
      height: "1080"
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