"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[17208],{

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

/***/ 81322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_09_12_load_update_high_utilization_low_liquidity_index_md_2e0_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_09_12_load_update_high_utilization_low_liquidity_index_md_2e0_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214295);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'loan-update-high-utilization-or-low-liquidity-please-check-your-position',
	title: 'Loan Update: High Utilization or Low Liquidity, Please Check Your Position',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Part 2 of the - An Introduction to Push Notification series will focus on use cases for push notifications in web3, and demonstrate how the web3 communication layer is the missing piece for the next iteration of the web. In this post, we will focus on decentralized finance (DeFi).',
	tags: [
		'Pn101',
		'Push Notification',
		'Web3',
		'Developer',
		'Blockchain'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(785328)/* ["default"] */ .A),
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
      alt: "Cover image of &#39;Loan Update: High Utilization or Low Liquidity, Please Check Your Position&#39;",
      src: (__webpack_require__(147485)/* ["default"] */ .A) + "",
      width: "1100",
      height: "578"
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

/***/ 147485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a4fc41f33296c887c9c45b256f1d165c.webp");

/***/ }),

/***/ 214295:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1148/blog/loan-update-high-utilization-or-low-liquidity-please-check-your-position","source":"@site/blog/2022-09-12-load-update-high-utilization-low-liquidity/index.md","title":"Loan Update: High Utilization or Low Liquidity, Please Check Your Position","description":"Cover image of \'Loan Update: High Utilization or Low Liquidity, Please Check Your Position\'","date":"2022-09-12T00:00:00.000Z","tags":[{"inline":true,"label":"Pn101","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/pn-101"},{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/push-notification"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/web-3"},{"inline":true,"label":"Developer","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/developer"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/blockchain"}],"readingTime":2.62,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1148/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1148/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"loan-update-high-utilization-or-low-liquidity-please-check-your-position","title":"Loan Update: High Utilization or Low Liquidity, Please Check Your Position","authors":["push"],"image":"./cover-image.webp","text":"Part 2 of the - An Introduction to Push Notification series will focus on use cases for push notifications in web3, and demonstrate how the web3 communication layer is the missing piece for the next iteration of the web. In this post, we will focus on decentralized finance (DeFi).","tags":["Pn101","Push Notification","Web3","Developer","Blockchain"]},"unlisted":false,"prevItem":{"title":"An Introduction to Push Notification (Part 2.2): Governance Use Cases","permalink":"/push-chain-website/pr-preview/pr-1148/blog/an-introduction-to-push-notification-part-2-2-governance-use-cases"},"nextItem":{"title":"Reef Chain Integrates EPNS to Enable Seamless Communication With Users","permalink":"/push-chain-website/pr-preview/pr-1148/blog/reef-chain-integrates-epns-to-enable-seamless-communication-with-users"}}');

/***/ }),

/***/ 785328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a4fc41f33296c887c9c45b256f1d165c.webp");

/***/ })

}]);