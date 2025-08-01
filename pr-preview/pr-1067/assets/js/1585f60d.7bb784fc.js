"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[20452],{

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

/***/ 325539:
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
	slug: 'zebpay-epns-rockstar',
	title: 'ZebPay ❤️ EPNS ROCKSTAR',
	description: 'ZebPay ❤️ EPNS ROCKSTAR',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We have awesome news to share! To celebrate $PUSH listing on ZebPay, we are thrilled to announce that this week’s $ROCKSTAR #NFT will be sponsored by none other than ZebPay. This week’s winner goes home with $ROCKSTAR NFT + 2400 $PUSH (~$6,500), and 10 top shortlisted entries win Goodies from ZebPay 🎁',
	tags: [
		'Ethereum',
		'Zebpay',
		'Mème',
		'Contests',
		'Push'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/zebpay-epns-rockstar",
  "source": "@site/blog/2021-09-29-zebpay-epns-rockstar/index.md",
  "title": "ZebPay ❤️ EPNS ROCKSTAR",
  "description": "ZebPay ❤️ EPNS ROCKSTAR",
  "date": "2021-09-29T00:00:00.000Z",
  "formattedDate": "September 29, 2021",
  "tags": [
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Zebpay",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/zebpay"
    },
    {
      "label": "Mème",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/meme"
    },
    {
      "label": "Contests",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/contests"
    },
    {
      "label": "Push",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push"
    }
  ],
  "readingTime": 0.72,
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
    "slug": "zebpay-epns-rockstar",
    "title": "ZebPay ❤️ EPNS ROCKSTAR",
    "description": "ZebPay ❤️ EPNS ROCKSTAR",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "We have awesome news to share! To celebrate $PUSH listing on ZebPay, we are thrilled to announce that this week’s $ROCKSTAR #NFT will be sponsored by none other than ZebPay. This week’s winner goes home with $ROCKSTAR NFT + 2400 $PUSH (~$6,500), and 10 top shortlisted entries win Goodies from ZebPay 🎁",
    "tags": [
      "Ethereum",
      "Zebpay",
      "Mème",
      "Contests",
      "Push"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS Push Notifications to Support EasyFi Lending Platform for Digital Assets",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-push-notifications-to-support"
  },
  "nextItem": {
    "title": "EPNS Partners With Armor to Enable Push Notifications for its Users",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-partners-with-armor"
  }
};
const assets = {
"image": (__webpack_require__(461587)/* ["default"] */ .A),
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
      alt: "Cover Image of ZebPay ❤️ EPNS ROCKSTAR",
      src: (__webpack_require__(707794)/* ["default"] */ .A) + "",
      width: "1400",
      height: "700"
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

/***/ 461587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d567ec2c437e25421469e626bdadec2c.webp");

/***/ }),

/***/ 707794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d567ec2c437e25421469e626bdadec2c.webp");

/***/ })

}]);