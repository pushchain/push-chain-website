"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[61834],{

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

/***/ 465223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5f71ebf14c55e14664855997b359f4d7.webp");

/***/ }),

/***/ 652162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5f71ebf14c55e14664855997b359f4d7.webp");

/***/ }),

/***/ 695463:
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
	slug: 'how-push-chat-is-different-from-traditional-chat-platforms',
	title: 'How Push Chat is Different from Traditional Chat Platforms ',
	authors: [
		'sixty'
	],
	image: './cover-image.webp',
	description: 'How Push Chat is Different from Traditional Chat Platforms?',
	text: 'Learn about the key USPs that position Push Chat as the go-to messaging tool for Web3.',
	tags: [
		'Technical',
		'Push Tech'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-chat-is-different-from-traditional-chat-platforms",
  "source": "@site/blog/2024-11-01-why-push-chat-is-diferent-from-other-traditional-platforms/index.md",
  "title": "How Push Chat is Different from Traditional Chat Platforms ",
  "description": "How Push Chat is Different from Traditional Chat Platforms?",
  "date": "2024-11-01T00:00:00.000Z",
  "formattedDate": "November 1, 2024",
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
  "readingTime": 4.743333333333333,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "SixtyKeys",
      "title": "Guest Contributor",
      "url": "https://x.com/sixty_keys",
      "page": true,
      "imageURL": "/assets/blog/authors/authorsixty.png",
      "key": "sixty"
    }
  ],
  "frontMatter": {
    "slug": "how-push-chat-is-different-from-traditional-chat-platforms",
    "title": "How Push Chat is Different from Traditional Chat Platforms ",
    "authors": [
      "sixty"
    ],
    "image": "./cover-image.webp",
    "description": "How Push Chat is Different from Traditional Chat Platforms?",
    "text": "Learn about the key USPs that position Push Chat as the go-to messaging tool for Web3.",
    "tags": [
      "Technical",
      "Push Tech"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Ecosystem Integrations: How Push Works with Other Protocols",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-works-with-other-protocols"
  },
  "nextItem": {
    "title": "What is Decentralized Social Media and Why Does it Matter?",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/what-is-decentralized-social-media"
  }
};
const assets = {
"image": (__webpack_require__(465223)/* ["default"] */ .A),
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
      alt: "Cover image of How Push Chat is Different from Traditional Chat Platforms",
      src: (__webpack_require__(652162)/* ["default"] */ .A) + "",
      width: "1280",
      height: "720"
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