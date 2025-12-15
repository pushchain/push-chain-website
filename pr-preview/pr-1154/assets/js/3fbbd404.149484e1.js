"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[76276],{

/***/ 22722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5cd699e8baeab8015a6f9597167571ea.webp");

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

/***/ 127476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2024_12_09_consumer_apps_that_can_be_built_on_push_chain_index_md_b93_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2024_12_09_consumer_apps_that_can_be_built_on_push_chain_index_md_b93_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(937596);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'consumer-apps-that-can-be-built-on-push-chain',
	title: 'Consumer Apps 🫶 Push Chain - Innovations that can be built on Push Chain',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Consumer Apps 🫶 Push Chain - Innovations that can be built on Push Chain',
	text: 'Web 3 is growing at lightning speed! Hundreds of L1s, Thousands of L2s and soon Tens of thousands of L3s!! While striving to make systems more scalable, decentralized and secure, we risk overlooking a crucial goal',
	tags: [
		'Push Chain',
		'Universal Apps',
		'Shared App Experience',
		'Consumer Crypto',
		'Community & Ecosystem'
	],
	twitterId: '1881607795570860403'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(22722)/* ["default"] */ .A),
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
      alt: "Cover Image of Consumer Apps 🫶 Push Chain - Innovations that can be built on Push Chain",
      src: (__webpack_require__(929021)/* ["default"] */ .A) + "",
      width: "1600",
      height: "900"
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

/***/ 929021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5cd699e8baeab8015a6f9597167571ea.webp");

/***/ }),

/***/ 937596:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1154/blog/consumer-apps-that-can-be-built-on-push-chain","source":"@site/blog/2024-12-09-consumer-apps-that-can-be-built-on-push-chain/index.md","title":"Consumer Apps 🫶 Push Chain - Innovations that can be built on Push Chain","description":"Consumer Apps 🫶 Push Chain - Innovations that can be built on Push Chain","date":"2024-12-09T00:00:00.000Z","tags":[{"inline":true,"label":"Push Chain","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/push-chain"},{"inline":true,"label":"Universal Apps","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/universal-apps"},{"inline":true,"label":"Shared App Experience","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/shared-app-experience"},{"inline":true,"label":"Consumer Crypto","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/consumer-crypto"},{"inline":true,"label":"Community & Ecosystem","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/community-ecosystem"}],"readingTime":4.54,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1154/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1154/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"consumer-apps-that-can-be-built-on-push-chain","title":"Consumer Apps 🫶 Push Chain - Innovations that can be built on Push Chain","authors":["push"],"image":"./cover-image.webp","description":"Consumer Apps 🫶 Push Chain - Innovations that can be built on Push Chain","text":"Web 3 is growing at lightning speed! Hundreds of L1s, Thousands of L2s and soon Tens of thousands of L3s!! While striving to make systems more scalable, decentralized and secure, we risk overlooking a crucial goal","tags":["Push Chain","Universal Apps","Shared App Experience","Consumer Crypto","Community & Ecosystem"],"twitterId":"1881607795570860403"},"unlisted":false,"prevItem":{"title":"Evolution of Push","permalink":"/push-chain-website/pr-preview/pr-1154/blog/evolution-of-push"},"nextItem":{"title":"Push Chain’s Frequently Asked Questions","permalink":"/push-chain-website/pr-preview/pr-1154/blog/faq-push-chain"}}');

/***/ })

}]);