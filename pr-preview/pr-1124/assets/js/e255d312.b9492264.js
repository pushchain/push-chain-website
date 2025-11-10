"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[40314],{

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

/***/ 178961:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1124/blog/pushing-ahead-in-time-push-and-timeswap","source":"@site/blog/2023-07-26-pushing-ahead-in-time/index.md","title":"Pushing Ahead in Time: $PUSH x Timeswap ⏳","description":"Cover image of Pushing Ahead in Time: $PUSH x Timeswap ⏳","date":"2023-07-26T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1124/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1124/blog/tags/web-3"},{"inline":true,"label":"Yield Farming","permalink":"/push-chain-website/pr-preview/pr-1124/blog/tags/yield-farming"},{"inline":true,"label":"Liquidity Mining","permalink":"/push-chain-website/pr-preview/pr-1124/blog/tags/liquidity-mining"},{"inline":true,"label":"Timeswap","permalink":"/push-chain-website/pr-preview/pr-1124/blog/tags/timeswap"}],"readingTime":2.62,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1124/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1124/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"pushing-ahead-in-time-push-and-timeswap","title":"Pushing Ahead in Time: $PUSH x Timeswap ⏳","authors":["push"],"image":"./cover-image.webp","text":"Following the exciting launch of $PUSH onto Polygon, we’re thrilled to announce the launch of Push’s lending and borrowing pool on TimeSwap. This partnership opens up new opportunities for users to borrow and lend Push native tokens ($PUSH) while benefiting from the extensive functionalities and composability offered by TimeSwap and the Polygon network.","tags":["Push Protocol","Web3","Yield Farming","Liquidity Mining","Timeswap"]},"unlisted":false,"prevItem":{"title":"Push V2 is LIVE — New Rewards, Utility & Functionality 🚀","permalink":"/push-chain-website/pr-preview/pr-1124/blog/push-v2-is-live-new-rewards-utility-and-functionality"},"nextItem":{"title":"$PUSH is Live on Polygon & Quickswap!💜","permalink":"/push-chain-website/pr-preview/pr-1124/blog/push-is-live-on-polygon-and-quickswap"}}');

/***/ }),

/***/ 228744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_07_26_pushing_ahead_in_time_index_md_65d_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_07_26_pushing_ahead_in_time_index_md_65d_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178961);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'pushing-ahead-in-time-push-and-timeswap',
	title: 'Pushing Ahead in Time: $PUSH x Timeswap ⏳',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Following the exciting launch of $PUSH onto Polygon, we’re thrilled to announce the launch of Push’s lending and borrowing pool on TimeSwap. This partnership opens up new opportunities for users to borrow and lend Push native tokens ($PUSH) while benefiting from the extensive functionalities and composability offered by TimeSwap and the Polygon network.',
	tags: [
		'Push Protocol',
		'Web3',
		'Yield Farming',
		'Liquidity Mining',
		'Timeswap'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(634830)/* ["default"] */ .A),
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
      alt: "Cover image of Pushing Ahead in Time: $PUSH x Timeswap ⏳",
      src: (__webpack_require__(632565)/* ["default"] */ .A) + "",
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

/***/ 632565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4a635ea9edc4d8ad87e04e44bdcf8275.webp");

/***/ }),

/***/ 634830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4a635ea9edc4d8ad87e04e44bdcf8275.webp");

/***/ })

}]);