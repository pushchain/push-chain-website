"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[77884],{

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

/***/ 119044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8f200b8891d3df1fbe8c9dd71233c631.webp");

/***/ }),

/***/ 330657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_27_asset_streaming_superfluid_push_index_md_6ba_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_27_asset_streaming_superfluid_push_index_md_6ba_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(892387);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'superfluid-enhancing-web3-asset-streaming-with-push',
	title: 'Superfluid Enhancing Web3 Asset-Streaming With Push💜💚',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'This week, we’re thrilled to feature our #FrensOfPush, Superfluid!🎉 The leading asset-streaming protocol revolutionizing the way web3-native organizations handle payments and subscriptions.',
	tags: [
		'Frensofpush',
		'Web3',
		'Push Protocol',
		'Superfluid Protocol'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(119044)/* ["default"] */ .A),
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
      alt: "Cover image of Superfluid Enhancing Web3 Asset-Streaming With Push💜💚",
      src: (__webpack_require__(422447)/* ["default"] */ .A) + "",
      width: "1100",
      height: "619"
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

/***/ 422447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8f200b8891d3df1fbe8c9dd71233c631.webp");

/***/ }),

/***/ 892387:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1151/blog/superfluid-enhancing-web3-asset-streaming-with-push","source":"@site/blog/2023-04-27-asset-streaming-superfluid-push/index.md","title":"Superfluid Enhancing Web3 Asset-Streaming With Push💜💚","description":"Cover image of Superfluid Enhancing Web3 Asset-Streaming With Push💜💚","date":"2023-04-27T00:00:00.000Z","tags":[{"inline":true,"label":"Frensofpush","permalink":"/push-chain-website/pr-preview/pr-1151/blog/tags/frensofpush"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1151/blog/tags/web-3"},{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1151/blog/tags/push-protocol"},{"inline":true,"label":"Superfluid Protocol","permalink":"/push-chain-website/pr-preview/pr-1151/blog/tags/superfluid-protocol"}],"readingTime":3.04,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1151/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1151/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"superfluid-enhancing-web3-asset-streaming-with-push","title":"Superfluid Enhancing Web3 Asset-Streaming With Push💜💚","authors":["push"],"image":"./cover-image.webp","text":"This week, we’re thrilled to feature our #FrensOfPush, Superfluid!🎉 The leading asset-streaming protocol revolutionizing the way web3-native organizations handle payments and subscriptions.","tags":["Frensofpush","Web3","Push Protocol","Superfluid Protocol"]},"unlisted":false,"prevItem":{"title":"April Monthly Recap✨","permalink":"/push-chain-website/pr-preview/pr-1151/blog/april-monthly-recap"},"nextItem":{"title":"10 Reasons Why Your Web3 Project Should Embrace Push Protocol🏆","permalink":"/push-chain-website/pr-preview/pr-1151/blog/10-reasons-why-your-web3-project-should-embrace-push-protocol"}}');

/***/ })

}]);