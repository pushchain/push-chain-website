"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[28789],{

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

/***/ 36799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5e936ef4929a9718dfa58f9cc2d5591b.webp");

/***/ }),

/***/ 638871:
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
	slug: 'epns-partners-with-snapshot',
	title: 'EPNS Partners with Snapshot to Deliver Notifications to Improve Community Governance',
	description: 'EPNS Partners with Snapshot to Deliver Notifications to Improve Community Governance',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Decentralized Autonomous Organisations (DAOs) are becoming increasingly popular with more and more projects becoming one. DAOs can be thought of as an internet-business that is managed by its community. DAOs allow the community to decide the future of the organization by submitting and voting on proposals, ensuring that everyone’s voice is heard.',
	tags: [
		'Snapshot',
		'Annoucements',
		'Governance',
		'Ethereum',
		'Blockchain'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-partners-with-snapshot",
  "source": "@site/blog/2021-07-14-epns-partners-with-snapshot/index.md",
  "title": "EPNS Partners with Snapshot to Deliver Notifications to Improve Community Governance",
  "description": "EPNS Partners with Snapshot to Deliver Notifications to Improve Community Governance",
  "date": "2021-07-14T00:00:00.000Z",
  "formattedDate": "July 14, 2021",
  "tags": [
    {
      "label": "Snapshot",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/snapshot"
    },
    {
      "label": "Annoucements",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/annoucements"
    },
    {
      "label": "Governance",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/governance"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/ethereum"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain"
    }
  ],
  "readingTime": 1.0466666666666666,
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
    "slug": "epns-partners-with-snapshot",
    "title": "EPNS Partners with Snapshot to Deliver Notifications to Improve Community Governance",
    "description": "EPNS Partners with Snapshot to Deliver Notifications to Improve Community Governance",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Decentralized Autonomous Organisations (DAOs) are becoming increasingly popular with more and more projects becoming one. DAOs can be thought of as an internet-business that is managed by its community. DAOs allow the community to decide the future of the organization by submitting and voting on proposals, ensuring that everyone’s voice is heard.",
    "tags": [
      "Snapshot",
      "Annoucements",
      "Governance",
      "Ethereum",
      "Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS Collaborates With Boardroom to Deliver Push Notifications for Protocol and DAO Governance",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-collaborates-with-boardroom"
  },
  "nextItem": {
    "title": "EPNS Push Notifications Arrive at DeFi on Oasis.app",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-push-notifications-arrive-at-defi"
  }
};
const assets = {
"image": (__webpack_require__(36799)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS Partners with Snapshot to Deliver Notifications to Improve Community Governance",
      src: (__webpack_require__(690996)/* ["default"] */ .A) + "",
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

/***/ 690996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5e936ef4929a9718dfa58f9cc2d5591b.webp");

/***/ })

}]);