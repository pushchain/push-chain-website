"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[40175],{

/***/ 15057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-66b1cf20199ee9f9ee5a0ff0be6a578e.webp");

/***/ }),

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

/***/ 243136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_18_epns_integration_underway_to_enable_index_md_987_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_18_epns_integration_underway_to_enable_index_md_987_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(788956);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-integration-underway-to-enable',
	title: 'EPNS Integration Underway to Enable Seamless Communication for Users Within the Cryptex Finance App',
	description: 'EPNS Integration Underway to Enable Seamless Communication for Users Within the Cryptex Finance App',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'EPNS and Cryptex Finance collaborate to bring decentralized push notifications to the protocol.',
	tags: [
		'Epnsproject',
		'Blockchain',
		'Ethereum',
		'Defi',
		'Newsletter'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(980542)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS Integration Underway to Enable Seamless Communication for Users Within the Cryptex Finance App",
      src: (__webpack_require__(15057)/* ["default"] */ .A) + "",
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

/***/ 788956:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1106/blog/epns-integration-underway-to-enable","source":"@site/blog/2022-04-18-epns-integration-underway-to-enable/index.md","title":"EPNS Integration Underway to Enable Seamless Communication for Users Within the Cryptex Finance App","description":"EPNS Integration Underway to Enable Seamless Communication for Users Within the Cryptex Finance App","date":"2022-04-18T00:00:00.000Z","tags":[{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/epnsproject"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/blockchain"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/ethereum"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/defi"},{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/newsletter"}],"readingTime":1.44,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1106/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1106/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-integration-underway-to-enable","title":"EPNS Integration Underway to Enable Seamless Communication for Users Within the Cryptex Finance App","description":"EPNS Integration Underway to Enable Seamless Communication for Users Within the Cryptex Finance App","authors":["push"],"image":"./cover-image.webp","text":"EPNS and Cryptex Finance collaborate to bring decentralized push notifications to the protocol.","tags":["Epnsproject","Blockchain","Ethereum","Defi","Newsletter"]},"unlisted":false,"prevItem":{"title":"Devconnect 2022: EPNS is all set to meet you!","permalink":"/push-chain-website/pr-preview/pr-1106/blog/devconnect-2022-epns-is-all-set"},"nextItem":{"title":"Announcing Our $10.1 Million Series A!","permalink":"/push-chain-website/pr-preview/pr-1106/blog/announcing-our-series-a"}}');

/***/ }),

/***/ 980542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-66b1cf20199ee9f9ee5a0ff0be6a578e.webp");

/***/ })

}]);