"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[79872],{

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

/***/ 229253:
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
	slug: 'epns-update-gitcoin-week-2',
	title: 'EPNS Update: Gitcoin Week 2',
	description: 'EPNS Update: Gitcoin Week 2',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Following an amazing week 1, filled with conversations about design, research and users. We thought Week 2 would give us a breather as we felt we conquered the world! but oh boy! @Gitcoin had so much for week 2, week 1 feels like a distant past.',
	tags: [
		'Blockchain',
		'Gitcoin',
		'Notifications',
		'Ethereum',
		'Blog'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-update-gitcoin-week-2",
  "source": "@site/blog/2020-07-28-epns-update-gitcoin-week-2/index.md",
  "title": "EPNS Update: Gitcoin Week 2",
  "description": "EPNS Update: Gitcoin Week 2",
  "date": "2020-07-28T00:00:00.000Z",
  "formattedDate": "July 28, 2020",
  "tags": [
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Gitcoin",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/gitcoin"
    },
    {
      "label": "Notifications",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/notifications"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Blog",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blog"
    }
  ],
  "readingTime": 2.9266666666666667,
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
    "slug": "epns-update-gitcoin-week-2",
    "title": "EPNS Update: Gitcoin Week 2",
    "description": "EPNS Update: Gitcoin Week 2",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Following an amazing week 1, filled with conversations about design, research and users. We thought Week 2 would give us a breather as we felt we conquered the world! but oh boy! @Gitcoin had so much for week 2, week 1 feels like a distant past.",
    "tags": [
      "Blockchain",
      "Gitcoin",
      "Notifications",
      "Ethereum",
      "Blog"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS Update: Gitcoin Kernel Week 3",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-update-gitcoin-kernel-week-3"
  },
  "nextItem": {
    "title": "EPNS Update : Gitcoin Kernel Week-1",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-update-gitcoin-kernel-week-1"
  }
};
const assets = {
"image": (__webpack_require__(303485)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS Update: Gitcoin Week 2",
      src: (__webpack_require__(291956)/* ["default"] */ .A) + "",
      width: "1400",
      height: "788"
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

/***/ 291956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-c9e72143a2654a50ae2726409387b39a.webp");

/***/ }),

/***/ 303485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-c9e72143a2654a50ae2726409387b39a.webp");

/***/ })

}]);