"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[82451],{

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

/***/ 49057
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-996463fafa0c3c014315f4cd1970069a.webp");

/***/ },

/***/ 481998
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1164/blog/revolutionizing-virtual-events-and-social-interactions-with-decentralized-video-chat","source":"@site/blog/2023-08-30-revolutionizing-virtual-events/index.md","title":"Revolutionizing Virtual Events and Social Interactions with Decentralized Video Chat📹","description":"Cover image of Revolutionizing Virtual Events and Social Interactions with Decentralized Video Chat📹","date":"2023-08-30T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/web-3"},{"inline":true,"label":"Blockchain Technologies","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/blockchain-technologies"}],"readingTime":2.86,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1164/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1164/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"revolutionizing-virtual-events-and-social-interactions-with-decentralized-video-chat","title":"Revolutionizing Virtual Events and Social Interactions with Decentralized Video Chat📹","authors":["push"],"image":"./cover-image.webp","text":"Virtual events have become a cornerstone of modern communication, enabling people from around the world to connect and engage in a wide range of activities. However, traditional virtual event technologies often come with limitations that hinder the full potential of these experiences. With the emergence of Web3 and the power of decentralized technologies, there’s an opportunity to transform virtual events into more immersive, secure, and interactive experiences.","tags":["Push Protocol","Web3","Blockchain Technologies"]},"unlisted":false,"prevItem":{"title":"August Monthly Recap","permalink":"/push-chain-website/pr-preview/pr-1164/blog/august-monthly-recap"},"nextItem":{"title":"A Billion Reasons to Build: Finding India’s Best Web3 Developers 🇮🇳","permalink":"/push-chain-website/pr-preview/pr-1164/blog/a-billion-reasons-to-build-finding-india-s-best-web3-developers"}}');

/***/ },

/***/ 554474
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_08_30_revolutionizing_virtual_events_index_md_d06_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_08_30_revolutionizing_virtual_events_index_md_d06_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'revolutionizing-virtual-events-and-social-interactions-with-decentralized-video-chat',
	title: 'Revolutionizing Virtual Events and Social Interactions with Decentralized Video Chat📹',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Virtual events have become a cornerstone of modern communication, enabling people from around the world to connect and engage in a wide range of activities. However, traditional virtual event technologies often come with limitations that hinder the full potential of these experiences. With the emergence of Web3 and the power of decentralized technologies, there’s an opportunity to transform virtual events into more immersive, secure, and interactive experiences.',
	tags: [
		'Push Protocol',
		'Web3',
		'Blockchain Technologies'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(698248)/* ["default"] */ .A),
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
      alt: "Cover image of Revolutionizing Virtual Events and Social Interactions with Decentralized Video Chat📹",
      src: (__webpack_require__(49057)/* ["default"] */ .A) + "",
      width: "1400",
      height: "735"
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

/***/ 698248
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-996463fafa0c3c014315f4cd1970069a.webp");

/***/ }

}]);