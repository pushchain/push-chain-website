"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[60688],{

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

/***/ 542433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_06_08_frens_of_push_soclly_index_md_237_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_06_08_frens_of_push_soclly_index_md_237_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(988179);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'unleashing-a-new-era-of-social-networking-push-x-soclly',
	title: 'Unleashing a New Era of Social Networking | Push x SOCLLY🌿',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'This week we are thrilled to feature an excitingly innovative decentralized social network as our newest Frens of Push, SOCLLY🌿.',
	tags: [
		'Frensofpush',
		'Web3',
		'Partnership',
		'Blockchain Development'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(750177)/* ["default"] */ .A),
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
      alt: "Cover image of Unleashing a New Era of Social Networking | Push x SOCLLY🌿",
      src: (__webpack_require__(842364)/* ["default"] */ .A) + "",
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

/***/ 750177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9baf1a6b44cd42f81ba36112bb2978a7.webp");

/***/ }),

/***/ 842364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9baf1a6b44cd42f81ba36112bb2978a7.webp");

/***/ }),

/***/ 988179:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1145/blog/unleashing-a-new-era-of-social-networking-push-x-soclly","source":"@site/blog/2023-06-08-frens-of-push-soclly/index.md","title":"Unleashing a New Era of Social Networking | Push x SOCLLY🌿","description":"Cover image of Unleashing a New Era of Social Networking | Push x SOCLLY🌿","date":"2023-06-08T00:00:00.000Z","tags":[{"inline":true,"label":"Frensofpush","permalink":"/push-chain-website/pr-preview/pr-1145/blog/tags/frensofpush"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1145/blog/tags/web-3"},{"inline":true,"label":"Partnership","permalink":"/push-chain-website/pr-preview/pr-1145/blog/tags/partnership"},{"inline":true,"label":"Blockchain Development","permalink":"/push-chain-website/pr-preview/pr-1145/blog/tags/blockchain-development"}],"readingTime":7.23,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1145/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1145/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"unleashing-a-new-era-of-social-networking-push-x-soclly","title":"Unleashing a New Era of Social Networking | Push x SOCLLY🌿","authors":["push"],"image":"./cover-image.webp","text":"This week we are thrilled to feature an excitingly innovative decentralized social network as our newest Frens of Push, SOCLLY🌿.","tags":["Frensofpush","Web3","Partnership","Blockchain Development"]},"unlisted":false,"prevItem":{"title":"What is ERC-6551 and How’s It Better than ERC-721?","permalink":"/push-chain-website/pr-preview/pr-1145/blog/what-is-erc-6551-and-how-s-it-better-than-erc-721"},"nextItem":{"title":"Introducing Push NFT Chat — Chats and Comms Tied to Your NFTs… Done Right ✅","permalink":"/push-chain-website/pr-preview/pr-1145/blog/introducing-push-nft-chat-chats-and-comms-tied-to-your-nf-ts-done-right"}}');

/***/ })

}]);