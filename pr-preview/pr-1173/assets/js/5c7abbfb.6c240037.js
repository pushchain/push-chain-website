"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[61487],{

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ 528246
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_03_29_accelerating_defi_with_epns_index_md_182_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_03_29_accelerating_defi_with_epns_index_md_182_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(917277);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'accelerating-defi-with-epns',
	title: 'Accelerating DeFi with EPNS',
	description: 'Accelerating DeFi with EPNS',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'The EPNS team is excited to announce our initial DEX offering (IDO) for the $PUSH token on Polkastarter. Soon, we will be releasing another post with information about the sale date and instructions for how to whitelist prior to the sale.',
	tags: [
		'Uniswap',
		'Ethereum',
		'Defi',
		'Announcements',
		'Protocol'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(826583)/* ["default"] */ .A),
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
      alt: "Cover Image of Accelerating DeFi with EPNS",
      src: (__webpack_require__(753675)/* ["default"] */ .A) + "",
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



/***/ },

/***/ 753675
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-fe648d4ed7081f00ce5c87805d2912bd.webp");

/***/ },

/***/ 826583
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-fe648d4ed7081f00ce5c87805d2912bd.webp");

/***/ },

/***/ 917277
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1173/blog/accelerating-defi-with-epns","source":"@site/blog/2021-03-29-accelerating-defi-with-epns/index.md","title":"Accelerating DeFi with EPNS","description":"Accelerating DeFi with EPNS","date":"2021-03-29T00:00:00.000Z","tags":[{"inline":true,"label":"Uniswap","permalink":"/push-chain-website/pr-preview/pr-1173/blog/tags/uniswap"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1173/blog/tags/ethereum"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1173/blog/tags/defi"},{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1173/blog/tags/announcements"},{"inline":true,"label":"Protocol","permalink":"/push-chain-website/pr-preview/pr-1173/blog/tags/protocol"}],"readingTime":2.71,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1173/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1173/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"accelerating-defi-with-epns","title":"Accelerating DeFi with EPNS","description":"Accelerating DeFi with EPNS","authors":["push"],"image":"./cover-image.webp","text":"The EPNS team is excited to announce our initial DEX offering (IDO) for the $PUSH token on Polkastarter. Soon, we will be releasing another post with information about the sale date and instructions for how to whitelist prior to the sale.","tags":["Uniswap","Ethereum","Defi","Announcements","Protocol"]},"unlisted":false,"prevItem":{"title":"PUSH Token Economics","permalink":"/push-chain-website/pr-preview/pr-1173/blog/push-token-economics"},"nextItem":{"title":"EPNS Announces IDO on Polkastarter","permalink":"/push-chain-website/pr-preview/pr-1173/blog/epns-announces-ido-on-polkastarter"}}');

/***/ }

}]);