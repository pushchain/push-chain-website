"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[43082],{

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

/***/ 156739:
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
	slug: 'how-push-protocol-helps-build-thriving-nft-and-defi',
	title: 'How Push Protocol Helps Build Thriving NFT and DeFi Communities Using Push Group Chats',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'How Push Protocol Helps Build Thriving NFT and DeFi Communities Using Push Group Chats',
	text: 'Learn how Push Group Chat empowers NFT brands and DeFi protocols to cultivate thriving communities through secure, token-gated experiences.',
	tags: [
		'Push Protocol',
		'Web3',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/how-push-protocol-helps-build-thriving-nft-and-defi",
  "source": "@site/blog/2024-05-10-how-push-protocol-helps-build-thriving-nft-and-defi-communities-using-push-group-chat/index.md",
  "title": "How Push Protocol Helps Build Thriving NFT and DeFi Communities Using Push Group Chats",
  "description": "How Push Protocol Helps Build Thriving NFT and DeFi Communities Using Push Group Chats",
  "date": "2024-05-10T00:00:00.000Z",
  "formattedDate": "May 10, 2024",
  "tags": [
    {
      "label": "Push Protocol",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/push-protocol"
    },
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/web-3"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain-technology"
    }
  ],
  "readingTime": 1.46,
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
    "slug": "how-push-protocol-helps-build-thriving-nft-and-defi",
    "title": "How Push Protocol Helps Build Thriving NFT and DeFi Communities Using Push Group Chats",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "How Push Protocol Helps Build Thriving NFT and DeFi Communities Using Push Group Chats",
    "text": "Learn how Push Group Chat empowers NFT brands and DeFi protocols to cultivate thriving communities through secure, token-gated experiences.",
    "tags": [
      "Push Protocol",
      "Web3",
      "Blockchain Technology"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": " QuickSwap: Leading Asset Exchange on Polygon Joins Frens Of Push ",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/quickswap-joins-frens-of-push"
  },
  "nextItem": {
    "title": " Revolutionising Communication for DeFi and NFT Brands with Push! ",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/revolutionising-communication-for-defi-and-nft-with-push"
  }
};
const assets = {
"image": (__webpack_require__(231835)/* ["default"] */ .A),
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
      alt: "Cover Image of How Push Protocol Helps Build Thriving NFT and DeFi Communities Using Push Group Chats Blog ",
      src: (__webpack_require__(781000)/* ["default"] */ .A) + "",
      width: "1600",
      height: "900"
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

/***/ 231835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f9f5895933518cea811176b969e8d1bf.webp");

/***/ }),

/***/ 781000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f9f5895933518cea811176b969e8d1bf.webp");

/***/ })

}]);