"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[98478],{

/***/ 24188
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5e49109b032458e48b900b6414140913.webp");

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

/***/ 149681
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1168/blog/developer-dao-x-push-enhancing-ux-through-web3-communication-tools","source":"@site/blog/2022-12-08-developer-dao-push/index.md","title":"Developer DAO x Push — Enhancing UX Through Web3 Communication Tools","description":"Cover image of Developer DAO x Push — Enhancing UX Through Web3 Communication Tools","date":"2022-12-08T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/web-3"},{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/push-notification"},{"inline":true,"label":"Giveaway","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/giveaway"},{"inline":true,"label":"Workshop","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/workshop"},{"inline":true,"label":"Developer","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/developer"}],"readingTime":2.24,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1168/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1168/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"developer-dao-x-push-enhancing-ux-through-web3-communication-tools","title":"Developer DAO x Push — Enhancing UX Through Web3 Communication Tools","authors":["push"],"image":"./cover-image.webp","text":"We are excited to have Developer DAO as a part of the Push ecosystem and look forward to enhancing the community experience via decentralized communication. This is only the start of an amazing journey with D_D!","tags":["Web3","Push Notification","Giveaway","Workshop","Developer"]},"unlisted":false,"prevItem":{"title":"Introducing Push Protocol v1.5 🎊","permalink":"/push-chain-website/pr-preview/pr-1168/blog/introducing-push-protocol-v1-5"},"nextItem":{"title":"Index Coop — Stay Updated About the Latest DeFi Products With Push","permalink":"/push-chain-website/pr-preview/pr-1168/blog/index-coop-stay-updated-about-the-latest-defi-products-with-push"}}');

/***/ },

/***/ 506629
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_12_08_developer_dao_push_index_md_4f0_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_12_08_developer_dao_push_index_md_4f0_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149681);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'developer-dao-x-push-enhancing-ux-through-web3-communication-tools',
	title: 'Developer DAO x Push — Enhancing UX Through Web3 Communication Tools',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We are excited to have Developer DAO as a part of the Push ecosystem and look forward to enhancing the community experience via decentralized communication. This is only the start of an amazing journey with D_D!',
	tags: [
		'Web3',
		'Push Notification',
		'Giveaway',
		'Workshop',
		'Developer'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(885677)/* ["default"] */ .A),
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
      alt: "Cover image of Developer DAO x Push — Enhancing UX Through Web3 Communication Tools",
      src: (__webpack_require__(24188)/* ["default"] */ .A) + "",
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

/***/ 885677
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5e49109b032458e48b900b6414140913.webp");

/***/ }

}]);