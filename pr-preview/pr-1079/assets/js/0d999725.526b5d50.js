"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[43246],{

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

/***/ 155910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-39c85740009f0a41bb5500e569d6e480.webp");

/***/ }),

/***/ 583648:
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
	slug: 'bundle-africa-ama-ethereum',
	title: '🎙Bundle Africa AMA — Ethereum To The Moon',
	description: '🎙Bundle Africa AMA — Ethereum To The Moon',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Ethereum Push Notification Service (EPNS) Founder and Project Lead, Harsh Rajat, and Co-founder, Richa Joshi, joined  Bundle Africa community on 21st November 2020 for a lively discussion on “The potential of Ethereum and its likely future” AMA session. ',
	tags: [
		'Ama',
		'Crypto',
		'Ethereum',
		'Blockchain',
		'Blog'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/bundle-africa-ama-ethereum",
  "source": "@site/blog/2020-11-25-bundle-africa-ama-ethereum/index.md",
  "title": "🎙Bundle Africa AMA — Ethereum To The Moon",
  "description": "🎙Bundle Africa AMA — Ethereum To The Moon",
  "date": "2020-11-25T00:00:00.000Z",
  "formattedDate": "November 25, 2020",
  "tags": [
    {
      "label": "Ama",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ama"
    },
    {
      "label": "Crypto",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/crypto"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Blog",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blog"
    }
  ],
  "readingTime": 9.656666666666666,
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
    "slug": "bundle-africa-ama-ethereum",
    "title": "🎙Bundle Africa AMA — Ethereum To The Moon",
    "description": "🎙Bundle Africa AMA — Ethereum To The Moon",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Ethereum Push Notification Service (EPNS) Founder and Project Lead, Harsh Rajat, and Co-founder, Richa Joshi, joined  Bundle Africa community on 21st November 2020 for a lively discussion on “The potential of Ethereum and its likely future” AMA session. ",
    "tags": [
      "Ama",
      "Crypto",
      "Ethereum",
      "Blockchain",
      "Blog"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "🎙 AMA with Matic Network",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/ama-with-matic-network"
  },
  "nextItem": {
    "title": "EPNS AMA with 🎙 AMA LOVERS CLUB",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-ama-with-ama-lovers-club"
  }
};
const assets = {
"image": (__webpack_require__(155910)/* ["default"] */ .A),
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
      alt: "Cover Image of 🎙Bundle Africa AMA — Ethereum To The Moon",
      src: (__webpack_require__(671767)/* ["default"] */ .A) + "",
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



/***/ }),

/***/ 671767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-39c85740009f0a41bb5500e569d6e480.webp");

/***/ })

}]);