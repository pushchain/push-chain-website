"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[13927],{

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

/***/ 529267
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_05_24_game_collectibles_push_alchemy_index_md_f71_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_05_24_game_collectibles_push_alchemy_index_md_f71_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639035);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'how-to-build-a-game-collectibles-d-app-with-push-and-alchemy',
	title: 'How to Build a Game Collectibles dApp with Push and Alchemy🎮',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'This blog post delves into the world of blockchain-based gaming collectibles and how using Alchemy and Push Protocol can revolutionize the development process. Alchemy provides a powerful infrastructure of nodes and enhanced APIs for managing blockchain interactions, while Push Protocol enables real-time communication within the gaming ecosystem.',
	tags: [
		'Web3',
		'Development',
		'Gaming',
		'Blockchain Development',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(946483)/* ["default"] */ .A),
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
      alt: "Cover image of How to Build a Game Collectibles dApp with Push and Alchemy🎮",
      src: (__webpack_require__(795714)/* ["default"] */ .A) + "",
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



/***/ },

/***/ 639035
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1170/blog/how-to-build-a-game-collectibles-d-app-with-push-and-alchemy","source":"@site/blog/2023-05-24-game-collectibles-push-alchemy/index.md","title":"How to Build a Game Collectibles dApp with Push and Alchemy🎮","description":"Cover image of How to Build a Game Collectibles dApp with Push and Alchemy🎮","date":"2023-05-24T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1170/blog/tags/web-3"},{"inline":true,"label":"Development","permalink":"/push-chain-website/pr-preview/pr-1170/blog/tags/development"},{"inline":true,"label":"Gaming","permalink":"/push-chain-website/pr-preview/pr-1170/blog/tags/gaming"},{"inline":true,"label":"Blockchain Development","permalink":"/push-chain-website/pr-preview/pr-1170/blog/tags/blockchain-development"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1170/blog/tags/blockchain-technology"}],"readingTime":6.34,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1170/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1170/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"how-to-build-a-game-collectibles-d-app-with-push-and-alchemy","title":"How to Build a Game Collectibles dApp with Push and Alchemy🎮","authors":["push"],"image":"./cover-image.webp","text":"This blog post delves into the world of blockchain-based gaming collectibles and how using Alchemy and Push Protocol can revolutionize the development process. Alchemy provides a powerful infrastructure of nodes and enhanced APIs for managing blockchain interactions, while Push Protocol enables real-time communication within the gaming ecosystem.","tags":["Web3","Development","Gaming","Blockchain Development","Blockchain Technology"]},"unlisted":false,"prevItem":{"title":"Enhancing Web3 Livestreaming | Push x Graviton🧲","permalink":"/push-chain-website/pr-preview/pr-1170/blog/enhancing-web3-livestreaming-push-x-graviton"},"nextItem":{"title":"Unlocking the Full Potential of Push: A Look at $PUSH Token Utility🪙","permalink":"/push-chain-website/pr-preview/pr-1170/blog/unlocking-the-full-potential-of-push-a-look-at-push-token-utility"}}');

/***/ },

/***/ 795714
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ed4975d0410099eecf195b65d38daee6.webp");

/***/ },

/***/ 946483
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ed4975d0410099eecf195b65d38daee6.webp");

/***/ }

}]);