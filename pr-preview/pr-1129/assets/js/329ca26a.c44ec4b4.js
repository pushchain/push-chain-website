"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[94950],{

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

/***/ 449136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a047c607f2eb96eb41a3103fef83854a.webp");

/***/ }),

/***/ 518759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a047c607f2eb96eb41a3103fef83854a.webp");

/***/ }),

/***/ 590820:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1129/blog/10-reasons-why-your-web3-project-should-embrace-push-protocol","source":"@site/blog/2023-04-25-10-reason-to-embrace-push/index.md","title":"10 Reasons Why Your Web3 Project Should Embrace Push Protocol🏆","description":"Cover image of 10 Reasons Why Your Web3 Project Should Embrace Push Protocol🏆","date":"2023-04-25T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1129/blog/tags/web-3"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1129/blog/tags/blockchain"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1129/blog/tags/blockchain-technology"}],"readingTime":3.3,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1129/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1129/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"10-reasons-why-your-web3-project-should-embrace-push-protocol","title":"10 Reasons Why Your Web3 Project Should Embrace Push Protocol🏆","authors":["push"],"image":"./cover-image.webp","text":"Push Protocol is an advanced communication layer built on distributed and peer-to-peer (P2P) principles. In this blog post, we will share ten reasons web3 enterprises should consider adopting Push Protocol for their web3 communication needs.","tags":["Web3","Blockchain","Blockchain Technology"]},"unlisted":false,"prevItem":{"title":"Superfluid Enhancing Web3 Asset-Streaming With Push💜💚","permalink":"/push-chain-website/pr-preview/pr-1129/blog/superfluid-enhancing-web3-asset-streaming-with-push"},"nextItem":{"title":"Shaping The Future of The DEX User Experience | Push x ShapeShift🦊","permalink":"/push-chain-website/pr-preview/pr-1129/blog/shaping-the-future-of-the-dex-user-experience-push-x-shape-shift"}}');

/***/ }),

/***/ 969919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_25_10_reason_to_embrace_push_index_md_42e_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_25_10_reason_to_embrace_push_index_md_42e_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(590820);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: '10-reasons-why-your-web3-project-should-embrace-push-protocol',
	title: '10 Reasons Why Your Web3 Project Should Embrace Push Protocol🏆',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Push Protocol is an advanced communication layer built on distributed and peer-to-peer (P2P) principles. In this blog post, we will share ten reasons web3 enterprises should consider adopting Push Protocol for their web3 communication needs.',
	tags: [
		'Web3',
		'Blockchain',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(518759)/* ["default"] */ .A),
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
      alt: "Cover image of 10 Reasons Why Your Web3 Project Should Embrace Push Protocol🏆",
      src: (__webpack_require__(449136)/* ["default"] */ .A) + "",
      width: "1100",
      height: "578"
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



/***/ })

}]);