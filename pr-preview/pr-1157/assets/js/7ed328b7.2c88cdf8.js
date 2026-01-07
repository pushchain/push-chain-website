"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[35491],{

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

/***/ 305034:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1157/blog/just-what-can-you-use-epns-for","source":"@site/blog/2022-01-13-just-what-can-you-use-epns-for/index.md","title":"Just What Can You Use EPNS For?","description":"Just What Can You Use EPNS For?","date":"2022-01-13T00:00:00.000Z","tags":[{"inline":true,"label":"Mainnet","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/mainnet"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/ethereum"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/web-3"},{"inline":true,"label":"Notifications","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/notifications"},{"inline":true,"label":"Communication","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/communication"}],"readingTime":1.67,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1157/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1157/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"just-what-can-you-use-epns-for","title":"Just What Can You Use EPNS For?","description":"Just What Can You Use EPNS For?","authors":["push"],"image":"./cover-image.webp","text":"We’re pretty excited that the EPNS mainnet has launched. But behind all the celebration, we know you may be asking: “So what now? How do I actually start using EPNS today?” Well, we have a lot more updates in our roadmap, but here’s a look of precisely how you can use EPNS starting this very moment, whether you’re a crypto investor, DeFi degen, developer, journalist, or just a curious cat.","tags":["Mainnet","Ethereum","Web3","Notifications","Communication"]},"unlisted":false,"prevItem":{"title":"EPNS and Atlantis World Collaborate To Build a Communication Layer for the Social Metaverse","permalink":"/push-chain-website/pr-preview/pr-1157/blog/epns-and-atlantis-world-collaborate"},"nextItem":{"title":"Getting Started With EPNS","permalink":"/push-chain-website/pr-preview/pr-1157/blog/getting-started-with-epns"}}');

/***/ }),

/***/ 594304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d66ed0357d8d166a96faa1725d2c5dc4.webp");

/***/ }),

/***/ 770757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d66ed0357d8d166a96faa1725d2c5dc4.webp");

/***/ }),

/***/ 882978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_01_13_just_what_can_you_use_epns_for_index_md_f88_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_01_13_just_what_can_you_use_epns_for_index_md_f88_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(305034);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'just-what-can-you-use-epns-for',
	title: 'Just What Can You Use EPNS For?',
	description: 'Just What Can You Use EPNS For?',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We’re pretty excited that the EPNS mainnet has launched. But behind all the celebration, we know you may be asking: “So what now? How do I actually start using EPNS today?” Well, we have a lot more updates in our roadmap, but here’s a look of precisely how you can use EPNS starting this very moment, whether you’re a crypto investor, DeFi degen, developer, journalist, or just a curious cat.',
	tags: [
		'Mainnet',
		'Ethereum',
		'Web3',
		'Notifications',
		'Communication'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(594304)/* ["default"] */ .A),
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
      alt: "Cover image of Just What Can You Use EPNS For?",
      src: (__webpack_require__(770757)/* ["default"] */ .A) + "",
      width: "1400",
      height: "700"
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