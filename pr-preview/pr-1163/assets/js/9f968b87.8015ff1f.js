"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[88190],{

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

/***/ 193032
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1163/blog/advancing-ceramic-networks-decentralized","source":"@site/blog/2021-05-06-advancing-ceramic-networks-decentralized/index.md","title":"Advancing Ceramic Networks Decentralized Identity Network with EPNS","description":"Advancing Ceramic Networks Decentralized Identity Network with EPNS","date":"2021-05-06T00:00:00.000Z","tags":[{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/announcements"},{"inline":true,"label":"Ceramic Network","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/ceramic-network"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/ethereum"},{"inline":true,"label":"Identity","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/identity"},{"inline":true,"label":"Decentralization","permalink":"/push-chain-website/pr-preview/pr-1163/blog/tags/decentralization"}],"readingTime":1.07,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1163/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1163/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"advancing-ceramic-networks-decentralized","title":"Advancing Ceramic Networks Decentralized Identity Network with EPNS","description":"Advancing Ceramic Networks Decentralized Identity Network with EPNS","authors":["push"],"image":"./cover-image.webp","text":"Giving back users full control on their identity it’s an absolute and unavoidable need. Thanks to the Web3.0 technologies users can again be the central actors controlling everything related to their identity, and this is a precious and complex concept.","tags":["Announcements","Ceramic Network","Ethereum","Identity","Decentralization"]},"unlisted":false,"prevItem":{"title":"Advancing CLR.fund Funding Protocol with Web3Notifs","permalink":"/push-chain-website/pr-preview/pr-1163/blog/advancing-clr-fund-funding-protocol"},"nextItem":{"title":"EPNS Partners With bZx to Deliver Crucial Margin Trading Push Notifications to Wallets","permalink":"/push-chain-website/pr-preview/pr-1163/blog/epns-partners-with-bZx-to-deliver"}}');

/***/ },

/***/ 666056
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-3ff4e90880c9647b1979c86d140e2b4f.webp");

/***/ },

/***/ 733437
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_05_06_advancing_ceramic_networks_decentralized_index_md_737_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_05_06_advancing_ceramic_networks_decentralized_index_md_737_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193032);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'advancing-ceramic-networks-decentralized',
	title: 'Advancing Ceramic Networks Decentralized Identity Network with EPNS',
	description: 'Advancing Ceramic Networks Decentralized Identity Network with EPNS',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Giving back users full control on their identity it’s an absolute and unavoidable need. Thanks to the Web3.0 technologies users can again be the central actors controlling everything related to their identity, and this is a precious and complex concept.',
	tags: [
		'Announcements',
		'Ceramic Network',
		'Ethereum',
		'Identity',
		'Decentralization'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(746349)/* ["default"] */ .A),
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
      alt: "Cover Image of Advancing Ceramic Networks Decentralized Identity Network with EPNS",
      src: (__webpack_require__(666056)/* ["default"] */ .A) + "",
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



/***/ },

/***/ 746349
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-3ff4e90880c9647b1979c86d140e2b4f.webp");

/***/ }

}]);