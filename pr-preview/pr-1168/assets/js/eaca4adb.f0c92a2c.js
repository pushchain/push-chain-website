"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[12266],{

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

/***/ 93940
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_06_05_epns_x_the_graph_enabling_index_md_39d_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_06_05_epns_x_the_graph_enabling_index_md_39d_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(584590);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-x-the-graph-enabling-a-better-way-to-access-blockchain-data',
	title: 'EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'As the blockchain ecosystem has grown, so too has the challenge of accessing on-chain data across multiple blockchain networks. The Graph is an indexing protocol that indexes, organises and makes data accessible from networks like Ethereum and IPFS It is often referred to as “Google” for the blockchains. As more and more data finds its way on-chain, users and developers need to access organised data efficiently.',
	tags: [
		'Ethereum',
		'The Graph',
		'Blockchain',
		'Cryptocurrency',
		'Web3'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(540730)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔",
      src: (__webpack_require__(956409)/* ["default"] */ .A) + "",
      width: "1400",
      height: "700"
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

/***/ 540730
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1d7ce45fda53ffbf852efbd31ace1a96.webp");

/***/ },

/***/ 584590
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1168/blog/epns-x-the-graph-enabling-a-better-way-to-access-blockchain-data","source":"@site/blog/2022-06-05-epns-x-the-graph-enabling/index.md","title":"EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔","description":"Cover Image of EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔","date":"2022-06-05T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/ethereum"},{"inline":true,"label":"The Graph","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/the-graph"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/blockchain"},{"inline":true,"label":"Cryptocurrency","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/cryptocurrency"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/web-3"}],"readingTime":3.29,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1168/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1168/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-x-the-graph-enabling-a-better-way-to-access-blockchain-data","title":"EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔","authors":["push"],"image":"./cover-image.webp","text":"As the blockchain ecosystem has grown, so too has the challenge of accessing on-chain data across multiple blockchain networks. The Graph is an indexing protocol that indexes, organises and makes data accessible from networks like Ethereum and IPFS It is often referred to as “Google” for the blockchains. As more and more data finds its way on-chain, users and developers need to access organised data efficiently.","tags":["Ethereum","The Graph","Blockchain","Cryptocurrency","Web3"]},"unlisted":false,"prevItem":{"title":"EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔","permalink":"/push-chain-website/pr-preview/pr-1168/blog/epns-x-the-graph"},"nextItem":{"title":"EPNS Monthly Blocks","permalink":"/push-chain-website/pr-preview/pr-1168/blog/epns-monthly-blocks-2022-may"}}');

/***/ },

/***/ 956409
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1d7ce45fda53ffbf852efbd31ace1a96.webp");

/***/ }

}]);