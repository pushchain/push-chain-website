"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[23479],{

/***/ 565690
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_09_28_5_scenarios_that_would_destroy_your_trust_in_ai_agents_index_md_043_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_09_28_5_scenarios_that_would_destroy_your_trust_in_ai_agents_index_md_043_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423317);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: '5-scenarios-that-would-destroy-your-trust-in-ai-agents',
	title: '5 Scenarios That Would Destroy Your Trust in AI Agents',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Find out five everyday occurring situations that would make you think twice before hiring any AI agent for onchain work',
	text: 'Find out five everyday occurring situations that would make you think twice before hiring any AI agent for onchain work',
	tags: [
		'Maker Monday',
		'Thought Leadership'
	],
	twitterId: '2104574701515255830'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(747544)/* ["default"] */ .A),
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
      alt: "Cover Image of 5 Scenarios That Would Destroy Your Trust in AI Agents",
      src: (__webpack_require__(459297)/* ["default"] */ .A) + "",
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

/***/ 747544
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d872ae43b0f289a6233e27ab34633906.webp");

/***/ },

/***/ 459297
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d872ae43b0f289a6233e27ab34633906.webp");

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

/***/ 423317
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1247/blog/5-scenarios-that-would-destroy-your-trust-in-ai-agents","source":"@site/blog/2026-09-28-5-scenarios-that-would-destroy-your-trust-in-ai-agents/index.md","title":"5 Scenarios That Would Destroy Your Trust in AI Agents","description":"Find out five everyday occurring situations that would make you think twice before hiring any AI agent for onchain work","date":"2026-09-28T00:00:00.000Z","tags":[{"inline":true,"label":"Maker Monday","permalink":"/push-chain-website/pr-preview/pr-1247/blog/tags/maker-monday"},{"inline":true,"label":"Thought Leadership","permalink":"/push-chain-website/pr-preview/pr-1247/blog/tags/thought-leadership"}],"readingTime":3.08,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1247/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1247/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"5-scenarios-that-would-destroy-your-trust-in-ai-agents","title":"5 Scenarios That Would Destroy Your Trust in AI Agents","authors":["push"],"image":"./cover-image.webp","description":"Find out five everyday occurring situations that would make you think twice before hiring any AI agent for onchain work","text":"Find out five everyday occurring situations that would make you think twice before hiring any AI agent for onchain work","tags":["Maker Monday","Thought Leadership"],"twitterId":"2104574701515255830"},"unlisted":false,"prevItem":{"title":"4 Scenarios That Would Destroy Your Trust in AI Agents (Part II)","permalink":"/push-chain-website/pr-preview/pr-1247/blog/4-scenarios-that-would-destroy-your-trust-in-ai-agents-part-ii"},"nextItem":{"title":"5 Types of AI Agent Hacks You Should Be Aware Of","permalink":"/push-chain-website/pr-preview/pr-1247/blog/5-types-of-ai-agent-hacks-you-should-be-aware-of"}}');

/***/ }

}]);