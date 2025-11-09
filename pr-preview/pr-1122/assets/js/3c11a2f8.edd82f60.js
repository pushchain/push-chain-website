"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[99692],{

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

/***/ 743628:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1122/blog/ama-with-satoshi-club","source":"@site/blog/2021-02-02-ama-with-satoshi-club/index.md","title":"🎙 AMA with Satoshi Club","description":"🎙 AMA with Satoshi Club","date":"2021-02-02T00:00:00.000Z","tags":[{"inline":true,"label":"Ama","permalink":"/push-chain-website/pr-preview/pr-1122/blog/tags/ama"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1122/blog/tags/ethereum"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1122/blog/tags/blockchain"},{"inline":true,"label":"Crypto","permalink":"/push-chain-website/pr-preview/pr-1122/blog/tags/crypto"},{"inline":true,"label":"Blog","permalink":"/push-chain-website/pr-preview/pr-1122/blog/tags/blog"}],"readingTime":14.13,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1122/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1122/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"ama-with-satoshi-club","title":"🎙 AMA with Satoshi Club","description":"🎙 AMA with Satoshi Club","authors":["push"],"image":"./cover-image.webp","text":"Ethereum Push Notification Service (EPNS) Founder and Project Lead, Harsh Rajat, and Co-founder, Richa Joshi, joined Satoshi Club community on 30th January 2021 for a live AMA session on their telegram group. We enjoyed answering awesome questions about EPNS and receiving notifications from Web3 on your wallet address.","tags":["Ama","Ethereum","Blockchain","Crypto","Blog"]},"unlisted":false,"prevItem":{"title":"AMA with Decentralized Club 👩‍🚀 👨‍🚀","permalink":"/push-chain-website/pr-preview/pr-1122/blog/ama-with-decentralized-club"},"nextItem":{"title":"EPNS Monthly Blocks (Genesis)","permalink":"/push-chain-website/pr-preview/pr-1122/blog/epns-monthly-blocks-genesis"}}');

/***/ }),

/***/ 790526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d19c6dc432c48a75c9f235d121e82958.webp");

/***/ }),

/***/ 965400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_02_02_ama_with_satoshi_club_index_md_716_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_02_02_ama_with_satoshi_club_index_md_716_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743628);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'ama-with-satoshi-club',
	title: '🎙 AMA with Satoshi Club',
	description: '🎙 AMA with Satoshi Club',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Ethereum Push Notification Service (EPNS) Founder and Project Lead, Harsh Rajat, and Co-founder, Richa Joshi, joined Satoshi Club community on 30th January 2021 for a live AMA session on their telegram group. We enjoyed answering awesome questions about EPNS and receiving notifications from Web3 on your wallet address.',
	tags: [
		'Ama',
		'Ethereum',
		'Blockchain',
		'Crypto',
		'Blog'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(790526)/* ["default"] */ .A),
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
      alt: "Cover Image of 🎙 AMA with Satoshi Club",
      src: (__webpack_require__(980949)/* ["default"] */ .A) + "",
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



/***/ }),

/***/ 980949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d19c6dc432c48a75c9f235d121e82958.webp");

/***/ })

}]);