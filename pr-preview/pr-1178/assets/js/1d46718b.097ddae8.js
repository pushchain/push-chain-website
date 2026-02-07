"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[29912],{

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

/***/ 166555
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-dab8bc80d514c3ff8d4af196b4eefe17.webp");

/***/ },

/***/ 369662
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_01_16_case_study_hodl_fun_index_md_9bb_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_01_16_case_study_hodl_fun_index_md_9bb_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(433091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'case-study-hodl-fun',
	title: 'How Hodl Fun Hit ~$1,000,000 Volume as a Universal Token Launchpad - Case Study',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'How Hodl Fun Hit ~$1,000,000 Volume as a Universal Token Launchpad - Case Study',
	text: 'Hodl.fun, a universal token launchpad that launched 400K+ tokens across 80+ countries using Push Chain\'s universal blockchain.',
	tags: [
		'Donut Testnet',
		'Universal Apps',
		'Shared App Experience',
		'Shared State Blockchain',
		'Universal Smart Contracts',
		'Ecosystem',
		'Case Study'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(459844)/* ["default"] */ .A),
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
      alt: "How Hodl Fun Hit ~$1,000,000 Volume as a Universal Token Launchpad - Case Study",
      src: (__webpack_require__(166555)/* ["default"] */ .A) + "",
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



/***/ },

/***/ 433091
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1178/blog/case-study-hodl-fun","source":"@site/blog/2026-01-16-case-study-hodl-fun/index.md","title":"How Hodl Fun Hit ~$1,000,000 Volume as a Universal Token Launchpad - Case Study","description":"How Hodl Fun Hit ~$1,000,000 Volume as a Universal Token Launchpad - Case Study","date":"2026-01-16T00:00:00.000Z","tags":[{"inline":true,"label":"Donut Testnet","permalink":"/push-chain-website/pr-preview/pr-1178/blog/tags/donut-testnet"},{"inline":true,"label":"Universal Apps","permalink":"/push-chain-website/pr-preview/pr-1178/blog/tags/universal-apps"},{"inline":true,"label":"Shared App Experience","permalink":"/push-chain-website/pr-preview/pr-1178/blog/tags/shared-app-experience"},{"inline":true,"label":"Shared State Blockchain","permalink":"/push-chain-website/pr-preview/pr-1178/blog/tags/shared-state-blockchain"},{"inline":true,"label":"Universal Smart Contracts","permalink":"/push-chain-website/pr-preview/pr-1178/blog/tags/universal-smart-contracts"},{"inline":true,"label":"Ecosystem","permalink":"/push-chain-website/pr-preview/pr-1178/blog/tags/ecosystem"},{"inline":true,"label":"Case Study","permalink":"/push-chain-website/pr-preview/pr-1178/blog/tags/case-study"}],"readingTime":1.34,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1178/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1178/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"case-study-hodl-fun","title":"How Hodl Fun Hit ~$1,000,000 Volume as a Universal Token Launchpad - Case Study","authors":["push"],"image":"./cover-image.webp","description":"How Hodl Fun Hit ~$1,000,000 Volume as a Universal Token Launchpad - Case Study","text":"Hodl.fun, a universal token launchpad that launched 400K+ tokens across 80+ countries using Push Chain\'s universal blockchain.","tags":["Donut Testnet","Universal Apps","Shared App Experience","Shared State Blockchain","Universal Smart Contracts","Ecosystem","Case Study"]},"unlisted":false,"prevItem":{"title":"Introducing Push Cult 👁️⃤  -  Blood Pact for Creators","permalink":"/push-chain-website/pr-preview/pr-1178/blog/introducing-the-push-cult"},"nextItem":{"title":"How Universal Transaction Works","permalink":"/push-chain-website/pr-preview/pr-1178/blog/how-universal-transaction-works"}}');

/***/ },

/***/ 459844
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-dab8bc80d514c3ff8d4af196b4eefe17.webp");

/***/ }

}]);