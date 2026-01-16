"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[31243],{

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

/***/ 395106
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-b15fc2db1a0a6e52567ccc407829445c.webp");

/***/ },

/***/ 611372
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_01_20_building_a_leading_web_3_communication_index_md_fb9_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_01_20_building_a_leading_web_3_communication_index_md_fb9_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617718);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'building-a-leading-web3-communication-layer-what-s-it-take',
	title: 'Building a Leading Web3 Communication Layer: What’s it take?🛠️',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Decentralized communication is a hot topic in the web3 space as more and more developers are looking to build dapps that can function independently of any single central authority.',
	tags: [
		'Web3',
		'Buidl',
		'Blockchain Technology',
		'Blockchain Development',
		'Developer'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(395106)/* ["default"] */ .A),
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
      alt: "Cover image of Building a Leading Web3 Communication Layer: What’s it take?🛠️",
      src: (__webpack_require__(853709)/* ["default"] */ .A) + "",
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

/***/ 617718
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1163/blog/building-a-leading-web3-communication-layer-what-s-it-take","source":"@site/blog/2023-01-20-building-a-leading-web3-communication/index.md","title":"Building a Leading Web3 Communication Layer: What’s it take?🛠️","description":"Cover image of Building a Leading Web3 Communication Layer: What’s it take?🛠️","date":"2023-01-20T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/web-3"},{"inline":true,"label":"Buidl","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/buidl"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/blockchain-technology"},{"inline":true,"label":"Blockchain Development","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/blockchain-development"},{"inline":true,"label":"Developer","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/developer"}],"readingTime":2.26,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1163/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1163/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"building-a-leading-web3-communication-layer-what-s-it-take","title":"Building a Leading Web3 Communication Layer: What’s it take?🛠️","authors":["push"],"image":"./cover-image.webp","text":"Decentralized communication is a hot topic in the web3 space as more and more developers are looking to build dapps that can function independently of any single central authority.","tags":["Web3","Buidl","Blockchain Technology","Blockchain Development","Developer"]},"unlisted":false,"prevItem":{"title":"QiDAO Taps Push to Update Users on their Debt Positions🪙","permalink":"/push-chain-website/pr-preview/pr-1163/blog/qi-dao-taps-push-to-update-users-on-their-debt-positions"},"nextItem":{"title":"Push Notifications for Developer DAO to Boost Community Participation🚀","permalink":"/push-chain-website/pr-preview/pr-1163/blog/push-notifications-for-developer-dao-to-boost-community-participation"}}');

/***/ },

/***/ 853709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-b15fc2db1a0a6e52567ccc407829445c.webp");

/***/ }

}]);