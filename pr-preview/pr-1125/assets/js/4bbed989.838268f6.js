"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[28706],{

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

/***/ 341273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7d0a7926f225c94a1dd68fca463b0d44.gif");

/***/ }),

/***/ 371976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7d0a7926f225c94a1dd68fca463b0d44.gif");

/***/ }),

/***/ 473050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_03_10_push_chat_index_md_ecb_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_03_10_push_chat_index_md_ecb_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(994706);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-chat-the-solution-to-centralized-messaging',
	title: 'Push Chat: The Solution To Centralized Messaging ✅',
	authors: [
		'push'
	],
	image: './cover-image.gif',
	text: 'Developers and researchers in computer networks are constantly seeking ways to improve messaging systems’ security, reliability, and scalability. Why? Because traditional centralized messaging systems have their drawbacks, including vulnerabilities to hacks, censorship and the risk of downtime.',
	tags: [
		'Web3',
		'Blockchain Technology',
		'Chat'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(371976)/* ["default"] */ .A),
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
      alt: "Cover image of Push Chat: The Solution To Centralized Messaging ✅",
      src: (__webpack_require__(341273)/* ["default"] */ .A) + "",
      width: "800",
      height: "450"
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

/***/ 994706:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1125/blog/push-chat-the-solution-to-centralized-messaging","source":"@site/blog/2023-03-10-push-chat/index.md","title":"Push Chat: The Solution To Centralized Messaging ✅","description":"Cover image of Push Chat: The Solution To Centralized Messaging ✅","date":"2023-03-10T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/web-3"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/blockchain-technology"},{"inline":true,"label":"Chat","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/chat"}],"readingTime":3.43,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1125/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1125/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-chat-the-solution-to-centralized-messaging","title":"Push Chat: The Solution To Centralized Messaging ✅","authors":["push"],"image":"./cover-image.gif","text":"Developers and researchers in computer networks are constantly seeking ways to improve messaging systems’ security, reliability, and scalability. Why? Because traditional centralized messaging systems have their drawbacks, including vulnerabilities to hacks, censorship and the risk of downtime.","tags":["Web3","Blockchain Technology","Chat"]},"unlisted":false,"prevItem":{"title":"Push DAO Extends Liquidity Rewards Program in v2.0","permalink":"/push-chain-website/pr-preview/pr-1125/blog/push-dao-extends-liquidity-rewards-program-in-v2-0"},"nextItem":{"title":"Going Bananas: Push Protocol Partners with ApeSwap for Seamless web3 Communication!🐵","permalink":"/push-chain-website/pr-preview/pr-1125/blog/going-bananas-push-protocol-partners-with-ape-swap-for-seamless-web3-communication"}}');

/***/ })

}]);