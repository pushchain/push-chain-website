"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[43362],{

/***/ 858
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-099d7ad8e385eab2f3d071bfe423cb11.webp");

/***/ },

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

/***/ 146784
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1163/blog/enhancing-governance-through-web3-communication-tools","source":"@site/blog/2023-03-31-governance-through-web3-tools/index.md","title":"Enhancing Governance Through Web3 Communication Tools 🏛️","description":"Cover image of Enhancing Governance Through Web3 Communication Tools 🏛️","date":"2023-03-31T00:00:00.000Z","tags":[{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/blockchain-technology"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/web-3"},{"inline":true,"label":"Governance","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/governance"},{"inline":true,"label":"Decentralization","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/decentralization"}],"readingTime":2.37,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1163/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1163/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"enhancing-governance-through-web3-communication-tools","title":"Enhancing Governance Through Web3 Communication Tools 🏛️","authors":["push"],"image":"./cover-image.webp","text":"Push Protocol is ushering in a new era of sophisticated web3 middleware. We’re enabling a more efficient, effective, and democratic decentralized ecosystem.","tags":["Blockchain Technology","Web3","Governance","Decentralization"]},"unlisted":false,"prevItem":{"title":"March Monthly Recap🌄","permalink":"/push-chain-website/pr-preview/pr-1163/blog/march-monthly-recap"},"nextItem":{"title":"Push Protocol ($PUSH) is Now Listed On Crypto.com!","permalink":"/push-chain-website/pr-preview/pr-1163/blog/push-protocol-push-is-now-listed-on-crypto-com"}}');

/***/ },

/***/ 392004
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_03_31_governance_through_web_3_tools_index_md_36d_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_03_31_governance_through_web_3_tools_index_md_36d_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146784);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'enhancing-governance-through-web3-communication-tools',
	title: 'Enhancing Governance Through Web3 Communication Tools 🏛️',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Push Protocol is ushering in a new era of sophisticated web3 middleware. We’re enabling a more efficient, effective, and democratic decentralized ecosystem.',
	tags: [
		'Blockchain Technology',
		'Web3',
		'Governance',
		'Decentralization'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(858)/* ["default"] */ .A),
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
      alt: "Cover image of Enhancing Governance Through Web3 Communication Tools 🏛️",
      src: (__webpack_require__(629561)/* ["default"] */ .A) + "",
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



/***/ },

/***/ 629561
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-099d7ad8e385eab2f3d071bfe423cb11.webp");

/***/ }

}]);