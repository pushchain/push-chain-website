"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[2206],{

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

/***/ 262948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_09_12_bringing_push_to_metamask_snaps_index_md_7d4_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_09_12_bringing_push_to_metamask_snaps_index_md_7d4_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(973131);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'bringing-push-to-meta-mask-snaps',
	title: 'Bringing Push to MetaMask Snaps',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Today we are excited to announce the launch of our brand new Push Snap — enabling Push Notification enhancements for MetaMask! To create new and enhanced web3 user experiences, MetaMask and Consensys have worked to introduce new integration possibilities for MetMask wallet holders via MetaMask Snaps — new features and functionality created by third-party developers that MetaMask users worldwide can install directly into their wallet.',
	tags: [
		'Push Protocol',
		'Metamask',
		'Metamask Wallet',
		'Web3',
		'Blockchain'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(751210)/* ["default"] */ .A),
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
      alt: "Cover image of Bringing Push to MetaMask Snaps",
      src: (__webpack_require__(909273)/* ["default"] */ .A) + "",
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

/***/ 751210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-290d97b43e9d7831af350bedbdeed2f0.webp");

/***/ }),

/***/ 909273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-290d97b43e9d7831af350bedbdeed2f0.webp");

/***/ }),

/***/ 973131:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1117/blog/bringing-push-to-meta-mask-snaps","source":"@site/blog/2023-09-12-bringing-push-to-metamask-snaps/index.md","title":"Bringing Push to MetaMask Snaps","description":"Cover image of Bringing Push to MetaMask Snaps","date":"2023-09-12T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/push-protocol"},{"inline":true,"label":"Metamask","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/metamask"},{"inline":true,"label":"Metamask Wallet","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/metamask-wallet"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/web-3"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/blockchain"}],"readingTime":2.5,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1117/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1117/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"bringing-push-to-meta-mask-snaps","title":"Bringing Push to MetaMask Snaps","authors":["push"],"image":"./cover-image.webp","text":"Today we are excited to announce the launch of our brand new Push Snap — enabling Push Notification enhancements for MetaMask! To create new and enhanced web3 user experiences, MetaMask and Consensys have worked to introduce new integration possibilities for MetMask wallet holders via MetaMask Snaps — new features and functionality created by third-party developers that MetaMask users worldwide can install directly into their wallet.","tags":["Push Protocol","Metamask","Metamask Wallet","Web3","Blockchain"]},"unlisted":false,"prevItem":{"title":"Deep-dive into Push Snaps Features & Getting Started 🛠️","permalink":"/push-chain-website/pr-preview/pr-1117/blog/deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need"},"nextItem":{"title":"Business-to-User Messaging: Push Protocol x Unstoppable Domains","permalink":"/push-chain-website/pr-preview/pr-1117/blog/business-to-user-messaging-push-protocol-x-unstoppable-domains"}}');

/***/ })

}]);