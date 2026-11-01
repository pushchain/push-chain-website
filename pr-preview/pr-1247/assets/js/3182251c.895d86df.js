"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[61066],{

/***/ 928888
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_07_27_understanding_the_crypto_ai_agent_stack_index_md_0bb_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_07_27_understanding_the_crypto_ai_agent_stack_index_md_0bb_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168926);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'understanding-the-crypto-ai-agent-stack',
	title: 'Understanding the Crypto AI Agent Stack (Layer by Layer)',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.',
	text: 'Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.',
	tags: [
		'Key Features',
		'Deep Dives'
	],
	twitterId: '2081756011715875292'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(706398)/* ["default"] */ .A),
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
      alt: "Cover Image of Understanding the crypto ai agent stack",
      src: (__webpack_require__(191341)/* ["default"] */ .A) + "",
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

/***/ 706398
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cc41a80bdefc97e7c2686fea58f4d567.webp");

/***/ },

/***/ 191341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cc41a80bdefc97e7c2686fea58f4d567.webp");

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

/***/ 168926
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1247/blog/understanding-the-crypto-ai-agent-stack","source":"@site/blog/2026-07-27-understanding-the-crypto-ai-agent-stack/index.md","title":"Understanding the Crypto AI Agent Stack (Layer by Layer)","description":"Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.","date":"2026-07-27T00:00:00.000Z","tags":[{"inline":true,"label":"Key Features","permalink":"/push-chain-website/pr-preview/pr-1247/blog/tags/key-features"},{"inline":true,"label":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1247/blog/tags/deep-dives"}],"readingTime":3.3,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1247/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1247/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"understanding-the-crypto-ai-agent-stack","title":"Understanding the Crypto AI Agent Stack (Layer by Layer)","authors":["push"],"image":"./cover-image.webp","description":"Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.","text":"Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.","tags":["Key Features","Deep Dives"],"twitterId":"2081756011715875292"},"unlisted":false,"prevItem":{"title":"How Do AI Agents Transact Onchain?","permalink":"/push-chain-website/pr-preview/pr-1247/blog/how-do-ai-agents-transact-onchain"},"nextItem":{"title":"What Happens When RWAs Scale Across Multiple Chains?","permalink":"/push-chain-website/pr-preview/pr-1247/blog/rwa-scale-across-multiple-chains"}}');

/***/ }

}]);