"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[7482],{

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

/***/ 390545:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1142/blog/push-protocol-selected-as-communication-partner-for-d-app-store-kit","source":"@site/blog/2023-04-17-dapp-store-communication-partner/index.md","title":"Push Protocol Selected as Communication Partner for dApp Store Kit! 🔔💜","description":"Cover image of Push Protocol Selected as Communication Partner for dApp Store Kit! 🔔💜","date":"2023-04-17T00:00:00.000Z","tags":[{"inline":true,"label":"Polygon Network","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/polygon-network"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/web-3"},{"inline":true,"label":"Partnerships","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/partnerships"},{"inline":true,"label":"Polygon","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/polygon"}],"readingTime":2.3,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1142/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1142/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-protocol-selected-as-communication-partner-for-d-app-store-kit","title":"Push Protocol Selected as Communication Partner for dApp Store Kit! 🔔💜","authors":["push"],"image":"./cover-image.webp","text":"Push Protocol is thrilled to announce that we have been selected as the communication solutions partner for dApp Store Kit!","tags":["Polygon Network","Web3","Partnerships","Polygon"]},"unlisted":false,"prevItem":{"title":"Understanding Delivery Nodes🚂","permalink":"/push-chain-website/pr-preview/pr-1142/blog/understanding-delivery-nodes"},"nextItem":{"title":"Push Protocolについて知っておくべきこと🔔","permalink":"/push-chain-website/pr-preview/pr-1142/blog/push-protocol-1"}}');

/***/ }),

/***/ 542446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_17_dapp_store_communication_partner_index_md_0b9_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_17_dapp_store_communication_partner_index_md_0b9_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390545);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-protocol-selected-as-communication-partner-for-d-app-store-kit',
	title: 'Push Protocol Selected as Communication Partner for dApp Store Kit! 🔔💜',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Push Protocol is thrilled to announce that we have been selected as the communication solutions partner for dApp Store Kit!',
	tags: [
		'Polygon Network',
		'Web3',
		'Partnerships',
		'Polygon'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(571476)/* ["default"] */ .A),
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
      alt: "Cover image of Push Protocol Selected as Communication Partner for dApp Store Kit! 🔔💜",
      src: (__webpack_require__(668381)/* ["default"] */ .A) + "",
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

/***/ 571476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7ae7cc6a0a92c0f7d6e36f02bfcf5e99.webp");

/***/ }),

/***/ 668381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7ae7cc6a0a92c0f7d6e36f02bfcf5e99.webp");

/***/ })

}]);