"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[9883],{

/***/ 265302
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_01_21_introducing_push_cult_index_md_ad3_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_01_21_introducing_push_cult_index_md_ad3_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288734);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'introducing-the-push-cult',
	title: 'Introducing Push Cult 👁️⃤  -  Blood Pact for Creators',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'An exclusive order of 50 creators selected to split a 20M PC token bounty by delivering pure signal.',
	text: 'Push Cult is an exclusive order of 50 elite creators splitting 20M PC tokens. No AI slop. No empty engagement. Just pure signal from visionaries building the future of universal blockchain.',
	tags: [
		'Featured',
		'Programs',
		'Ecosystem',
		'Maker Monday'
	],
	twitterId: '2014337359064789182'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(941748)/* ["default"] */ .A),
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
      alt: "Introducing Push Cult 👁️⃤  - Blood Pact for Creators",
      src: (__webpack_require__(728095)/* ["default"] */ .A) + "",
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

/***/ 941748
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a6e3c9dcc5676655ca2c468b24546174.webp");

/***/ },

/***/ 728095
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a6e3c9dcc5676655ca2c468b24546174.webp");

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

/***/ 288734
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1194/blog/introducing-the-push-cult","source":"@site/blog/2026-01-21-introducing-push-cult/index.md","title":"Introducing Push Cult 👁️⃤  -  Blood Pact for Creators","description":"An exclusive order of 50 creators selected to split a 20M PC token bounty by delivering pure signal.","date":"2026-01-21T00:00:00.000Z","tags":[{"inline":true,"label":"Featured","permalink":"/push-chain-website/pr-preview/pr-1194/blog/tags/featured"},{"inline":true,"label":"Programs","permalink":"/push-chain-website/pr-preview/pr-1194/blog/tags/programs"},{"inline":true,"label":"Ecosystem","permalink":"/push-chain-website/pr-preview/pr-1194/blog/tags/ecosystem"},{"inline":true,"label":"Maker Monday","permalink":"/push-chain-website/pr-preview/pr-1194/blog/tags/maker-monday"}],"readingTime":2.11,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1194/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1194/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"introducing-the-push-cult","title":"Introducing Push Cult 👁️⃤  -  Blood Pact for Creators","authors":["push"],"image":"./cover-image.webp","description":"An exclusive order of 50 creators selected to split a 20M PC token bounty by delivering pure signal.","text":"Push Cult is an exclusive order of 50 elite creators splitting 20M PC tokens. No AI slop. No empty engagement. Just pure signal from visionaries building the future of universal blockchain.","tags":["Featured","Programs","Ecosystem","Maker Monday"],"twitterId":"2014337359064789182"},"unlisted":false,"prevItem":{"title":"Push Chain × Silence Labs: Building the Distributed Signing Mechanism","permalink":"/push-chain-website/pr-preview/pr-1194/blog/push-chain-silence-labs"},"nextItem":{"title":"What Push Chain Abstracts so You Don\'t Have to?","permalink":"/push-chain-website/pr-preview/pr-1194/blog/what-push-chain-abstracts"}}');

/***/ }

}]);