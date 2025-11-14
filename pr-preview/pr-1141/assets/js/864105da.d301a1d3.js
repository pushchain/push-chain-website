"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[83556],{

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

/***/ 232395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2c0bf79f9a58f37bd8cd7d7648db85ec.gif");

/***/ }),

/***/ 291185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_02_15_building_a_better_ux_in_bnb_index_md_950_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_02_15_building_a_better_ux_in_bnb_index_md_950_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485993);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'building-a-better-ux-in-bnb-with-our-8-launch-collaborators',
	title: 'Building a Better UX in BNB With Our 8 Launch Collaborators🚀',
	authors: [
		'push'
	],
	image: './cover-image.gif',
	text: 'We’re extremely excited to announce Push has officially added BNB Chain to its list of supported chains!',
	tags: [
		'BNB',
		'BNBChain',
		'Blockchain',
		'Defi'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(232395)/* ["default"] */ .A),
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
      alt: "Cover image of Building a Better UX in BNB With Our 8 Launch Collaborators🚀",
      src: (__webpack_require__(587466)/* ["default"] */ .A) + "",
      width: "600",
      height: "338"
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

/***/ 485993:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1141/blog/building-a-better-ux-in-bnb-with-our-8-launch-collaborators","source":"@site/blog/2023-02-15-building-a-better-ux-in-bnb/index.md","title":"Building a Better UX in BNB With Our 8 Launch Collaborators🚀","description":"Cover image of Building a Better UX in BNB With Our 8 Launch Collaborators🚀","date":"2023-02-15T00:00:00.000Z","tags":[{"inline":true,"label":"BNB","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/bnb"},{"inline":true,"label":"BNBChain","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/bnb-chain"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/blockchain"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/defi"}],"readingTime":3.38,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1141/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1141/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"building-a-better-ux-in-bnb-with-our-8-launch-collaborators","title":"Building a Better UX in BNB With Our 8 Launch Collaborators🚀","authors":["push"],"image":"./cover-image.gif","text":"We’re extremely excited to announce Push has officially added BNB Chain to its list of supported chains!","tags":["BNB","BNBChain","Blockchain","Defi"]},"unlisted":false,"prevItem":{"title":"Empower Your Wallet, App, or Platform with Push Delivery Nodes⚡","permalink":"/push-chain-website/pr-preview/pr-1141/blog/empower-your-wallet-app-or-platform-with-push-delivery-nodes"},"nextItem":{"title":"Push Protocol Launches on BNB Chain!💛","permalink":"/push-chain-website/pr-preview/pr-1141/blog/push-protocol-launches-on-bnb-chain"}}');

/***/ }),

/***/ 587466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2c0bf79f9a58f37bd8cd7d7648db85ec.gif");

/***/ })

}]);