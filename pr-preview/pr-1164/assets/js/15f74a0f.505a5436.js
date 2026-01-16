"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[83995],{

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

/***/ 146251
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-17cb28768ad2cf41ab1c7b69e9ff6240.webp");

/***/ },

/***/ 179872
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-17cb28768ad2cf41ab1c7b69e9ff6240.webp");

/***/ },

/***/ 668763
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1164/blog/halo-fi-teams-up-with-push-to-enable-effortless-savings-with-real-time-notifications","source":"@site/blog/2023-03-21-halofi-push/index.md","title":"HaloFi Teams Up with Push to Enable Effortless Savings with Real-Time Notifications😇","description":"Cover image of HaloFi Teams Up with Push to Enable Effortless Savings with Real-Time Notifications😇","date":"2023-03-21T00:00:00.000Z","tags":[{"inline":true,"label":"Frensofpush","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/frensofpush"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/web-3"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/blockchain-technology"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/defi"}],"readingTime":3.62,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1164/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1164/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"halo-fi-teams-up-with-push-to-enable-effortless-savings-with-real-time-notifications","title":"HaloFi Teams Up with Push to Enable Effortless Savings with Real-Time Notifications😇","authors":["push"],"image":"./cover-image.webp","text":"This week, we’re delighted to showcase foremost DeFi savings platform and the newest addition to our ‘Frens of Push’, HaloFi","tags":["Frensofpush","Web3","Blockchain Technology","Defi"]},"unlisted":false,"prevItem":{"title":"Web3 & Push Protocol through the Lens of First Principle Thinking🔍","permalink":"/push-chain-website/pr-preview/pr-1164/blog/web3-and-push-protocol-through-the-lens-of-first-principle-thinking"},"nextItem":{"title":"Bankless Nation and Push Partner to Enable News Notifications 🔔","permalink":"/push-chain-website/pr-preview/pr-1164/blog/bankless-nation-and-push-partner-to-enable-news-notifications"}}');

/***/ },

/***/ 706691
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_03_21_halofi_push_index_md_88b_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_03_21_halofi_push_index_md_88b_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668763);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'halo-fi-teams-up-with-push-to-enable-effortless-savings-with-real-time-notifications',
	title: 'HaloFi Teams Up with Push to Enable Effortless Savings with Real-Time Notifications😇',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'This week, we’re delighted to showcase foremost DeFi savings platform and the newest addition to our ‘Frens of Push’, HaloFi',
	tags: [
		'Frensofpush',
		'Web3',
		'Blockchain Technology',
		'Defi'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(146251)/* ["default"] */ .A),
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
      alt: "Cover image of HaloFi Teams Up with Push to Enable Effortless Savings with Real-Time Notifications😇",
      src: (__webpack_require__(179872)/* ["default"] */ .A) + "",
      width: "1100",
      height: "619"
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



/***/ }

}]);