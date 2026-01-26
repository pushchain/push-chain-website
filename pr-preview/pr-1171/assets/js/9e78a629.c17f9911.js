"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[50218],{

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

/***/ 252555
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2f2450f92c6c9b4c2e6976d633a67835.webp");

/***/ },

/***/ 527992
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2f2450f92c6c9b4c2e6976d633a67835.webp");

/***/ },

/***/ 744338
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_08_18_introducing_sns_for_push_delivery_nodes_index_md_377_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_08_18_introducing_sns_for_push_delivery_nodes_index_md_377_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(972419);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'introducing-sns-for-push-nodes',
	title: 'Introducing SNS for Push Delivery Nodes — Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More',
	description: 'Introducing SNS for Push Delivery Nodes — Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Instantly integrate push notifications to your platform of choice, whether it\'s a wallet, browser extension, Telegram, Twitter, Discord, or any app.',
	tags: [
		'Push Notification',
		'Web3',
		'Development',
		'Blockchain',
		'Developers'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(527992)/* ["default"] */ .A),
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
      alt: "Cover image of Introducing SNS for Push Delivery Nodes — Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats &amp; More",
      src: (__webpack_require__(252555)/* ["default"] */ .A) + "",
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



/***/ },

/***/ 972419
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1171/blog/introducing-sns-for-push-nodes","source":"@site/blog/2022-08-18-introducing-sns-for-push-delivery-nodes/index.md","title":"Introducing SNS for Push Delivery Nodes — Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","description":"Introducing SNS for Push Delivery Nodes — Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","date":"2022-08-18T00:00:00.000Z","tags":[{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/push-notification"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/web-3"},{"inline":true,"label":"Development","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/development"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/blockchain"},{"inline":true,"label":"Developers","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/developers"}],"readingTime":2.92,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1171/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1171/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"introducing-sns-for-push-nodes","title":"Introducing SNS for Push Delivery Nodes — Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","description":"Introducing SNS for Push Delivery Nodes — Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","authors":["push"],"image":"./cover-image.webp","text":"Instantly integrate push notifications to your platform of choice, whether it\'s a wallet, browser extension, Telegram, Twitter, Discord, or any app.","tags":["Push Notification","Web3","Development","Blockchain","Developers"]},"unlisted":false,"prevItem":{"title":"BUIDLing the Future of Web3 Communication With EPNS at ETHOnline 2022","permalink":"/push-chain-website/pr-preview/pr-1171/blog/buid-ling-the-future-of-web3-communication-with-epns-at-eth-online-2022"},"nextItem":{"title":"Fast-tracking Proposals, Approved!","permalink":"/push-chain-website/pr-preview/pr-1171/blog/fast-tracking-proposals-approved"}}');

/***/ }

}]);