"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[47484],{

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

/***/ 100321:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1104/blog/new-push-yield-farming-rewards-full-details","source":"@site/blog/2023-08-02-new-push-yield/index.md","title":"New Push Yield Farming Rewards: Full Details🪙","description":"Cover image of New Push Yield Farming Rewards: Full Details🪙","date":"2023-08-02T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1104/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1104/blog/tags/web-3"},{"inline":true,"label":"Yield Farming","permalink":"/push-chain-website/pr-preview/pr-1104/blog/tags/yield-farming"},{"inline":true,"label":"Liquidity Mining","permalink":"/push-chain-website/pr-preview/pr-1104/blog/tags/liquidity-mining"}],"readingTime":4.15,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1104/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1104/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"new-push-yield-farming-rewards-full-details","title":"New Push Yield Farming Rewards: Full Details🪙","authors":["push"],"image":"./cover-image.webp","text":"Push Liquidity Rewards Program v1 ended a few weeks ago and v2 is now HERE🎉 With v2 comes a whole new set of liquidity rewards that provide robust incentives for all liquidity providers and token holders.","tags":["Push Protocol","Web3","Yield Farming","Liquidity Mining"]},"unlisted":false,"prevItem":{"title":"Staking & Migration Guide for PushV2 Rewards Program📜","permalink":"/push-chain-website/pr-preview/pr-1104/blog/staking-and-migration-guide-for-push-v2-rewards-program"},"nextItem":{"title":"Push V2 is LIVE — New Rewards, Utility & Functionality 🚀","permalink":"/push-chain-website/pr-preview/pr-1104/blog/push-v2-is-live-new-rewards-utility-and-functionality"}}');

/***/ }),

/***/ 128168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_08_02_new_push_yield_index_md_236_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_08_02_new_push_yield_index_md_236_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100321);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'new-push-yield-farming-rewards-full-details',
	title: 'New Push Yield Farming Rewards: Full Details🪙',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Push Liquidity Rewards Program v1 ended a few weeks ago and v2 is now HERE🎉 With v2 comes a whole new set of liquidity rewards that provide robust incentives for all liquidity providers and token holders.',
	tags: [
		'Push Protocol',
		'Web3',
		'Yield Farming',
		'Liquidity Mining'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(432222)/* ["default"] */ .A),
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
      alt: "Cover image of New Push Yield Farming Rewards: Full Details🪙",
      src: (__webpack_require__(208995)/* ["default"] */ .A) + "",
      width: "1400",
      height: "735"
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

/***/ 208995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-22031eb9a96c83135d1af648e4d3ad37.webp");

/***/ }),

/***/ 432222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-22031eb9a96c83135d1af648e4d3ad37.webp");

/***/ })

}]);