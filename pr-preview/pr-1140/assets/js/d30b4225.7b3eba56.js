"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[2119],{

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

/***/ 45818:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1140/blog/epns-x-the-graph","source":"@site/blog/2022-06-05-epns-x-the-graph/index.md","title":"EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔","description":"EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔","date":"2022-06-05T00:00:00.000Z","tags":[{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1140/blog/tags/defi"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1140/blog/tags/ethereum"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1140/blog/tags/blockchain"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1140/blog/tags/epnsproject"}],"readingTime":3.31,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1140/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1140/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-x-the-graph","title":"EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔","description":"EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔","authors":["push"],"image":"./cover-image.webp","text":"EPNS and H2O collaborate to bring decentralized push notifications to the platform.","tags":["Defi","Ethereum","Blockchain","Epnsproject"]},"unlisted":false,"prevItem":{"title":"EPNS and H2O Ally to Enable Seamless Communication for Users","permalink":"/push-chain-website/pr-preview/pr-1140/blog/epns-and-h20-ally"},"nextItem":{"title":"EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔","permalink":"/push-chain-website/pr-preview/pr-1140/blog/epns-x-the-graph-enabling-a-better-way-to-access-blockchain-data"}}');

/***/ }),

/***/ 67814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1d7ce45fda53ffbf852efbd31ace1a96.webp");

/***/ }),

/***/ 417835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1d7ce45fda53ffbf852efbd31ace1a96.webp");

/***/ }),

/***/ 790787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_06_05_epns_x_the_graph_index_md_59c_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_06_05_epns_x_the_graph_index_md_59c_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-x-the-graph',
	title: 'EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔',
	description: 'EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'EPNS and H2O collaborate to bring decentralized push notifications to the platform.',
	tags: [
		'Defi',
		'Ethereum',
		'Blockchain',
		'Epnsproject'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(417835)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS x The Graph: Enabling a better way to access blockchain data 🧑‍🚀 🔔",
      src: (__webpack_require__(67814)/* ["default"] */ .A) + "",
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



/***/ })

}]);