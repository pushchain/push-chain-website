"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[30727],{

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

/***/ 317191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_05_29_decentralized_reputation_system_index_md_603_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_05_29_decentralized_reputation_system_index_md_603_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(448138);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'how-to-create-a-decentralized-reputation-system-with-alchemy-and-push-protocol',
	title: 'How to Create a Decentralized Reputation System with Alchemy and Push Protocol ✅',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'This article outlines the process of creating a decentralized reputation system using Alchemy and Push Protocol. We explore the advantages of these tools, provide a development guide, and discuss utilizing Push Protocol for decentralized messaging.',
	tags: [
		'Devtools',
		'Reputation System',
		'Web3',
		'Blockchain Development',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(757895)/* ["default"] */ .A),
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
      alt: "Cover image of How to Create a Decentralized Reputation System with Alchemy and Push Protocol ✅",
      src: (__webpack_require__(437752)/* ["default"] */ .A) + "",
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



/***/ }),

/***/ 437752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-e758f0fc1e06d9485c012f6455baa285.webp");

/***/ }),

/***/ 448138:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1136/blog/how-to-create-a-decentralized-reputation-system-with-alchemy-and-push-protocol","source":"@site/blog/2023-05-29-decentralized-reputation-system/index.md","title":"How to Create a Decentralized Reputation System with Alchemy and Push Protocol ✅","description":"Cover image of How to Create a Decentralized Reputation System with Alchemy and Push Protocol ✅","date":"2023-05-29T00:00:00.000Z","tags":[{"inline":true,"label":"Devtools","permalink":"/push-chain-website/pr-preview/pr-1136/blog/tags/devtools"},{"inline":true,"label":"Reputation System","permalink":"/push-chain-website/pr-preview/pr-1136/blog/tags/reputation-system"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1136/blog/tags/web-3"},{"inline":true,"label":"Blockchain Development","permalink":"/push-chain-website/pr-preview/pr-1136/blog/tags/blockchain-development"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1136/blog/tags/blockchain-technology"}],"readingTime":6.64,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1136/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1136/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"how-to-create-a-decentralized-reputation-system-with-alchemy-and-push-protocol","title":"How to Create a Decentralized Reputation System with Alchemy and Push Protocol ✅","authors":["push"],"image":"./cover-image.webp","text":"This article outlines the process of creating a decentralized reputation system using Alchemy and Push Protocol. We explore the advantages of these tools, provide a development guide, and discuss utilizing Push Protocol for decentralized messaging.","tags":["Devtools","Reputation System","Web3","Blockchain Development","Blockchain Technology"]},"unlisted":false,"prevItem":{"title":"Taking DAO Communication to New Heights | Push x Aragon🦅","permalink":"/push-chain-website/pr-preview/pr-1136/blog/taking-dao-communication-to-new-heights-push-x-aragon"},"nextItem":{"title":"How to Build a Real-Time Analytics Dashboard for Blockchain Transactions with Alchemy and Push 📊","permalink":"/push-chain-website/pr-preview/pr-1136/blog/how-to-build-a-real-time-analytics-dashboard-for-blockchain-transactions-with-alchemy-and-push"}}');

/***/ }),

/***/ 757895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-e758f0fc1e06d9485c012f6455baa285.webp");

/***/ })

}]);