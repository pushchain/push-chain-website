"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[14825],{

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

/***/ 83010:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1142/blog/epns-collaborates-with-new-order","source":"@site/blog/2022-04-06-epns-collaborates-with-new-order/index.md","title":"EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance","description":"EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance","date":"2022-04-06T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/ethereum"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/defi"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/epnsproject"},{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/newsletter"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/blockchain"}],"readingTime":1.68,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1142/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1142/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-collaborates-with-new-order","title":"EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance","description":"EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance","authors":["push"],"image":"./cover-image.webp","text":"EPNS and New Order collaborate to bring governance updates to users","tags":["Ethereum","Defi","Epnsproject","Newsletter","Blockchain"]},"unlisted":false,"prevItem":{"title":"EPNS Collaborates With TokenBrice to Bring Decentralized Push Notifications to Readers","permalink":"/push-chain-website/pr-preview/pr-1142/blog/epns-collaborates-with-tokenbrice"},"nextItem":{"title":"How to Implement Gasless Vote Delegation — A novel feature for Governance","permalink":"/push-chain-website/pr-preview/pr-1142/blog/how-to-implement-gasless-vote"}}');

/***/ }),

/***/ 165523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_06_epns_collaborates_with_new_order_index_md_153_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_06_epns_collaborates_with_new_order_index_md_153_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83010);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-collaborates-with-new-order',
	title: 'EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance',
	description: 'EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'EPNS and New Order collaborate to bring governance updates to users',
	tags: [
		'Ethereum',
		'Defi',
		'Epnsproject',
		'Newsletter',
		'Blockchain'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(902363)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance",
      src: (__webpack_require__(373462)/* ["default"] */ .A) + "",
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

/***/ 373462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-49a59d8723daf5dfa00f348cc47d8d10.webp");

/***/ }),

/***/ 902363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-49a59d8723daf5dfa00f348cc47d8d10.webp");

/***/ })

}]);