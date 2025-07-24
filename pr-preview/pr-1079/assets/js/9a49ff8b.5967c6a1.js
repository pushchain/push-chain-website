"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[36278],{

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

/***/ 341243:
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
	slug: 'dmitry-buterin—rockstars-of-ethereum-vol-2',
	title: 'Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap',
	description: 'Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Hello Awesome PUSH community, an amazing interview conducted by our founders ; Harsh and Richa and we would like to introduce to you the session where our guest was the one and only Dmitry Buterin.',
	tags: [
		'Interview',
		'Blockchain',
		'Cryptocurrency',
		'Ethereum',
		'YouTube'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/dmitry-buterin—rockstars-of-ethereum-vol-2",
  "source": "@site/blog/2022-01-25-dmitry-buterin—rockstars-of-ethereum/index.md",
  "title": "Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
  "description": "Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
  "date": "2022-01-25T00:00:00.000Z",
  "formattedDate": "January 25, 2022",
  "tags": [
    {
      "label": "Interview",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/interview"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Cryptocurrency",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/cryptocurrency"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "YouTube",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/you-tube"
    }
  ],
  "readingTime": 14.743333333333334,
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
    "slug": "dmitry-buterin—rockstars-of-ethereum-vol-2",
    "title": "Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
    "description": "Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Hello Awesome PUSH community, an amazing interview conducted by our founders ; Harsh and Richa and we would like to introduce to you the session where our guest was the one and only Dmitry Buterin.",
    "tags": [
      "Interview",
      "Blockchain",
      "Cryptocurrency",
      "Ethereum",
      "YouTube"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Grants Program Going Live!",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-grants-program-going-live"
  },
  "nextItem": {
    "title": "How to Get Started with EPNS (for Devs!)",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-to-get-started-with-epns"
  }
};
const assets = {
"image": (__webpack_require__(883427)/* ["default"] */ .A),
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
      alt: "Cover image of Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
      src: (__webpack_require__(981510)/* ["default"] */ .A) + "",
      width: "720",
      height: "360"
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

/***/ 883427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-21360116ab29b1e0bd25af7863404e34.webp");

/***/ }),

/***/ 981510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-21360116ab29b1e0bd25af7863404e34.webp");

/***/ })

}]);