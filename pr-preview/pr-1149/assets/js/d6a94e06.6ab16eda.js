"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[61940],{

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

/***/ 544955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_07_25_push_is_live_on_index_md_068_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_07_25_push_is_live_on_index_md_068_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(927383);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-is-live-on-polygon-and-quickswap',
	title: '$PUSH is Live on Polygon & Quickswap!💜',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Today we are excited to announce the launch of the $PUSH token on Polygon! Following the successful launch of Push Protocol onto Polygon mainnet last year, we are now carrying over that multi-chain functionality and composability to our $PUSH token.',
	tags: [
		'Push Protocol',
		'Web3',
		'Yield Farming',
		'Liquidity Mining',
		'Polygon Network'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(952035)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
      alt: "Cover image of $PUSH is Live on Polygon &amp; Quickswap!💜",
      src: (__webpack_require__(853820)/* ["default"] */ .A) + "",
      width: "1400",
      height: "788"
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 853820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7a25aa1cf80cc1b3371fcf1704ab25ec.webp");

/***/ }),

/***/ 927383:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1149/blog/push-is-live-on-polygon-and-quickswap","source":"@site/blog/2023-07-25-push-is-live-on/index.md","title":"$PUSH is Live on Polygon & Quickswap!💜","description":"Cover image of $PUSH is Live on Polygon & Quickswap!💜","date":"2023-07-25T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/web-3"},{"inline":true,"label":"Yield Farming","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/yield-farming"},{"inline":true,"label":"Liquidity Mining","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/liquidity-mining"},{"inline":true,"label":"Polygon Network","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/polygon-network"}],"readingTime":1.58,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1149/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1149/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-is-live-on-polygon-and-quickswap","title":"$PUSH is Live on Polygon & Quickswap!💜","authors":["push"],"image":"./cover-image.webp","text":"Today we are excited to announce the launch of the $PUSH token on Polygon! Following the successful launch of Push Protocol onto Polygon mainnet last year, we are now carrying over that multi-chain functionality and composability to our $PUSH token.","tags":["Push Protocol","Web3","Yield Farming","Liquidity Mining","Polygon Network"]},"unlisted":false,"prevItem":{"title":"Pushing Ahead in Time: $PUSH x Timeswap ⏳","permalink":"/push-chain-website/pr-preview/pr-1149/blog/pushing-ahead-in-time-push-and-timeswap"},"nextItem":{"title":"Push Spaces is Live! Decentralized Audio and Video Streaming is Here","permalink":"/push-chain-website/pr-preview/pr-1149/blog/push-spaces-is-live-decentralized-audio-and-video-streaming-is-here"}}');

/***/ }),

/***/ 952035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7a25aa1cf80cc1b3371fcf1704ab25ec.webp");

/***/ })

}]);