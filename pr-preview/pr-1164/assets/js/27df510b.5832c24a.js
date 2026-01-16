"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[17804],{

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

/***/ 429360
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-386b045cff83284e2d18bfe40b62f55d.webp");

/***/ },

/***/ 626671
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2025_11_10_introducing_push_chains_donut_testnet_index_md_fc6_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2025_11_10_introducing_push_chains_donut_testnet_index_md_fc6_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(644070);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'introducing-push-chains-donut-testnet',
	title: 'A Universal Era Begins. Introducing Push Chain’s Donut Testnet 🍩',
	authors: [
		'harsh'
	],
	image: './cover-image.webp',
	description: 'A Universal Era Begins. Introducing Push Chain’s Donut Testnet 🍩',
	text: 'After years of fragmentation, the time has come to unite all chains.',
	tags: [
		'Donut Testnet',
		'Universal Apps',
		'Shared App Experience',
		'Shared State Blockchain',
		'Universal Smart Contracts'
	],
	twitterId: '1988261231128703213'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(677191)/* ["default"] */ .A),
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
      alt: "A Universal Era Begins. Introducing Push Chain’s Donut Testnet 🍩",
      src: (__webpack_require__(429360)/* ["default"] */ .A) + "",
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

/***/ 644070
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1164/blog/introducing-push-chains-donut-testnet","source":"@site/blog/2025-11-10-introducing-push-chains-donut-testnet/index.md","title":"A Universal Era Begins. Introducing Push Chain’s Donut Testnet 🍩","description":"A Universal Era Begins. Introducing Push Chain’s Donut Testnet 🍩","date":"2025-11-10T00:00:00.000Z","tags":[{"inline":true,"label":"Donut Testnet","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/donut-testnet"},{"inline":true,"label":"Universal Apps","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/universal-apps"},{"inline":true,"label":"Shared App Experience","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/shared-app-experience"},{"inline":true,"label":"Shared State Blockchain","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/shared-state-blockchain"},{"inline":true,"label":"Universal Smart Contracts","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/universal-smart-contracts"}],"readingTime":3.5,"hasTruncateMarker":true,"authors":[{"name":"Harsh Rajat","title":"Co-Founder","url":"https://twitter.com/harshrajat","page":{"permalink":"/push-chain-website/pr-preview/pr-1164/blog/authors/harsh"},"imageURL":"/push-chain-website/pr-preview/pr-1164/assets/blog/authors/authorharsh.png","key":"harsh"}],"frontMatter":{"slug":"introducing-push-chains-donut-testnet","title":"A Universal Era Begins. Introducing Push Chain’s Donut Testnet 🍩","authors":["harsh"],"image":"./cover-image.webp","description":"A Universal Era Begins. Introducing Push Chain’s Donut Testnet 🍩","text":"After years of fragmentation, the time has come to unite all chains.","tags":["Donut Testnet","Universal Apps","Shared App Experience","Shared State Blockchain","Universal Smart Contracts"],"twitterId":"1988261231128703213"},"unlisted":false,"prevItem":{"title":"What is Universal Fee Abstraction?","permalink":"/push-chain-website/pr-preview/pr-1164/blog/what-is-universal-abstraction"},"nextItem":{"title":"What are Universal Executor Accounts (UEAs) and How do they work?","permalink":"/push-chain-website/pr-preview/pr-1164/blog/what-are-universal-executor-accounts"}}');

/***/ },

/***/ 677191
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-386b045cff83284e2d18bfe40b62f55d.webp");

/***/ }

}]);