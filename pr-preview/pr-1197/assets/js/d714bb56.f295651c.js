"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[5426],{

/***/ 990847
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2025_10_28_interop_within_chain_vs_on_top_index_md_27d_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2025_10_28_interop_within_chain_vs_on_top_index_md_27d_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(741868);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'interop-within-chain-vs-on-top',
	title: 'Why Building Interop Within the Chain Makes More Sense vs. on Top of It?',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Chain-native interop bakes interoperability into the chain itself — so every app on top gets it for free, without bridges or intermediaries.',
	text: 'Projects keep treating interoperability as an afterthought — a feature duct-taped to a single-chain app. That\'s why users still can\'t move freely across chains without bridging or trusting intermediaries. Chain-native interop flips the model: the chain handles interop, not the app.',
	tags: [
		'Thought Leadership'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(396079)/* ["default"] */ .A),
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
      alt: "Cover Image of Why Building Interop Within the Chain Makes More Sense vs. on Top of It",
      src: (__webpack_require__(898482)/* ["default"] */ .A) + "",
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

/***/ 396079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4473bc202fe9ba54a79447ab7ca76d98.webp");

/***/ },

/***/ 898482
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4473bc202fe9ba54a79447ab7ca76d98.webp");

/***/ },

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

/***/ 741868
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1197/blog/interop-within-chain-vs-on-top","source":"@site/blog/2025-10-28-interop-within-chain-vs-on-top/index.md","title":"Why Building Interop Within the Chain Makes More Sense vs. on Top of It?","description":"Chain-native interop bakes interoperability into the chain itself — so every app on top gets it for free, without bridges or intermediaries.","date":"2025-10-28T00:00:00.000Z","tags":[{"inline":true,"label":"Thought Leadership","permalink":"/push-chain-website/pr-preview/pr-1197/blog/tags/thought-leadership"}],"readingTime":0.91,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1197/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1197/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"interop-within-chain-vs-on-top","title":"Why Building Interop Within the Chain Makes More Sense vs. on Top of It?","authors":["push"],"image":"./cover-image.webp","description":"Chain-native interop bakes interoperability into the chain itself — so every app on top gets it for free, without bridges or intermediaries.","text":"Projects keep treating interoperability as an afterthought — a feature duct-taped to a single-chain app. That\'s why users still can\'t move freely across chains without bridging or trusting intermediaries. Chain-native interop flips the model: the chain handles interop, not the app.","tags":["Thought Leadership"]},"unlisted":false,"prevItem":{"title":"State of x402 Rails Today","permalink":"/push-chain-website/pr-preview/pr-1197/blog/state-of-x402-rails-today"},"nextItem":{"title":"Apps of the Future - Building without the Chaos","permalink":"/push-chain-website/pr-preview/pr-1197/blog/apps-of-the-future-building-without-the-chaos"}}');

/***/ }

}]);