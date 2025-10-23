"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[97808],{

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

/***/ 443335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a21d0104920ef7edf238b45c991bf75d.webp");

/***/ }),

/***/ 521479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_07_19_5_tips_for_mastering_index_md_00a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_07_19_5_tips_for_mastering_index_md_00a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(819078);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: '5-tips-for-mastering-the-art-of-successful-grant-proposals',
	title: '5 Tips for Mastering The Art of Successful Grant Proposals📝',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'When it comes to project growth, seeking external assistance is crucial. In the web3 landscape, grants have emerged as a valuable form of funding, but navigating the intricacies of grant applications can be challenging.',
	tags: [
		'Web3',
		'Grant',
		'Web Grant',
		'Grant Writing'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(443335)/* ["default"] */ .A),
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
      alt: "Cover image of 5 Tips for Mastering The Art of Successful Grant Proposals📝",
      src: (__webpack_require__(629118)/* ["default"] */ .A) + "",
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



/***/ }),

/***/ 629118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a21d0104920ef7edf238b45c991bf75d.webp");

/***/ }),

/***/ 819078:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1100/blog/5-tips-for-mastering-the-art-of-successful-grant-proposals","source":"@site/blog/2023-07-19-5-tips-for-mastering/index.md","title":"5 Tips for Mastering The Art of Successful Grant Proposals📝","description":"Cover image of 5 Tips for Mastering The Art of Successful Grant Proposals📝","date":"2023-07-19T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/web-3"},{"inline":true,"label":"Grant","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/grant"},{"inline":true,"label":"Web Grant","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/web-grant"},{"inline":true,"label":"Grant Writing","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/grant-writing"}],"readingTime":1.85,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1100/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1100/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"5-tips-for-mastering-the-art-of-successful-grant-proposals","title":"5 Tips for Mastering The Art of Successful Grant Proposals📝","authors":["push"],"image":"./cover-image.webp","text":"When it comes to project growth, seeking external assistance is crucial. In the web3 landscape, grants have emerged as a valuable form of funding, but navigating the intricacies of grant applications can be challenging.","tags":["Web3","Grant","Web Grant","Grant Writing"]},"unlisted":false,"prevItem":{"title":"Push Spaces is Live! Decentralized Audio and Video Streaming is Here","permalink":"/push-chain-website/pr-preview/pr-1100/blog/push-spaces-is-live-decentralized-audio-and-video-streaming-is-here"},"nextItem":{"title":"Back 2 School Grant Program🎒💜","permalink":"/push-chain-website/pr-preview/pr-1100/blog/back-2-school-grant-program"}}');

/***/ })

}]);