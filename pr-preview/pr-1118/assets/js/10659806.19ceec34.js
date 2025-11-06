"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[20382],{

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

/***/ 36435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2024_05_01_billion_reason_to_build_bootcamp_index_md_519_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2024_05_01_billion_reason_to_build_bootcamp_index_md_519_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(555896);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'billion-reason-to-build-bootcamp-covering-every-dimension-of-the-web3-ecosystem',
	title: 'Billion Reasons to Build Bootcamp: Covering Every Dimension of the Web3 Ecosystem',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Billion Reasons to Build Bootcamp: Covering Every Dimension of the Web3 Ecosystem',
	text: 'BRB was initiated with a vision to solve the 1 HARD problem with the first step taken in 2023 by traveling to 18 cities where amazing minds come together to learn and build with a chance to win over $50,000 in prizes!',
	tags: [
		'Push Protocol',
		'Web3',
		'Blockchain Technology',
		'BRB'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(648635)/* ["default"] */ .A),
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
      alt: "Cover Image of Billion Reasons to Build Bootcamp: Covering Every Dimension of the Web3 Ecosystem",
      src: (__webpack_require__(679678)/* ["default"] */ .A) + "",
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

/***/ 555896:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1118/blog/billion-reason-to-build-bootcamp-covering-every-dimension-of-the-web3-ecosystem","source":"@site/blog/2024-05-01-billion-reason-to-build-bootcamp/index.md","title":"Billion Reasons to Build Bootcamp: Covering Every Dimension of the Web3 Ecosystem","description":"Billion Reasons to Build Bootcamp: Covering Every Dimension of the Web3 Ecosystem","date":"2024-05-01T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1118/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1118/blog/tags/web-3"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1118/blog/tags/blockchain-technology"},{"inline":true,"label":"BRB","permalink":"/push-chain-website/pr-preview/pr-1118/blog/tags/brb"}],"readingTime":1.64,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1118/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1118/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"billion-reason-to-build-bootcamp-covering-every-dimension-of-the-web3-ecosystem","title":"Billion Reasons to Build Bootcamp: Covering Every Dimension of the Web3 Ecosystem","authors":["push"],"image":"./cover-image.webp","description":"Billion Reasons to Build Bootcamp: Covering Every Dimension of the Web3 Ecosystem","text":"BRB was initiated with a vision to solve the 1 HARD problem with the first step taken in 2023 by traveling to 18 cities where amazing minds come together to learn and build with a chance to win over $50,000 in prizes!","tags":["Push Protocol","Web3","Blockchain Technology","BRB"]},"unlisted":false,"prevItem":{"title":" Introducing Push Amplify Upgrade! ","permalink":"/push-chain-website/pr-preview/pr-1118/blog/amplify-campaign"},"nextItem":{"title":"Monthly Recap March 🎉","permalink":"/push-chain-website/pr-preview/pr-1118/blog/monthly-recap-march-2024"}}');

/***/ }),

/***/ 648635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8caac70bf9bb100efe7e3115a687bdc9.webp");

/***/ }),

/***/ 679678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8caac70bf9bb100efe7e3115a687bdc9.webp");

/***/ })

}]);