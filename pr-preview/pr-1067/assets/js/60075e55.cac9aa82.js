"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[52602],{

/***/ 9848:
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
	slug: 'how-push-enhances-privacy-in-on-chain-communications',
	title: 'How Push Enhances Privacy in On-Chain Communications',
	authors: [
		'sixty'
	],
	image: './cover-image.webp',
	description: 'How Push Enhances Privacy in On-Chain Communications',
	text: 'While privacy is fundamental to blockchain technology, communicating on-chain poses distinct challenges. Because wallet addresses are public by design, users face risks from unsolicited messages, data mining, and phishing attempts.',
	tags: [
		'Technical',
		'Push Tech'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-enhances-privacy-in-on-chain-communications",
  "source": "@site/blog/2024-11-28-how-push-enhances-privacy-in-on-chain-comms/index.md",
  "title": "How Push Enhances Privacy in On-Chain Communications",
  "description": "How Push Enhances Privacy in On-Chain Communications",
  "date": "2024-11-28T00:00:00.000Z",
  "formattedDate": "November 28, 2024",
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
  "readingTime": 2.5766666666666667,
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
    "slug": "how-push-enhances-privacy-in-on-chain-communications",
    "title": "How Push Enhances Privacy in On-Chain Communications",
    "authors": [
      "sixty"
    ],
    "image": "./cover-image.webp",
    "description": "How Push Enhances Privacy in On-Chain Communications",
    "text": "While privacy is fundamental to blockchain technology, communicating on-chain poses distinct challenges. Because wallet addresses are public by design, users face risks from unsolicited messages, data mining, and phishing attempts.",
    "tags": [
      "Technical",
      "Push Tech"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Why Push Chain is the Missing Layer in Web3",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/why-push-chain"
  },
  "nextItem": {
    "title": "Push Protocol Monthly Updates - October",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/monthly-recap-october-2024"
  }
};
const assets = {
"image": (__webpack_require__(996086)/* ["default"] */ .A),
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
      alt: "Cover Image of How Push Enhances Privacy in On-Chain Communications",
      src: (__webpack_require__(438725)/* ["default"] */ .A) + "",
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



/***/ }),

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

/***/ 438725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-46e5069477dd11a8d4139816c39aebab.webp");

/***/ }),

/***/ 996086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-46e5069477dd11a8d4139816c39aebab.webp");

/***/ })

}]);