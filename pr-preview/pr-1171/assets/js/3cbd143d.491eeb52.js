"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[75565],{

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

/***/ 52547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1830e018dd8e6dacef177120336d7fae.webp");

/***/ },

/***/ 193838
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1171/blog/d-yd-x-x-push-empowering-traders-with-transparent-governance","source":"@site/blog/2023-06-29-frens-of-push-dydx/index.md","title":"dYdX x Push: Empowering Traders with Transparent Governance🤝","description":"Cover image of dYdX x Push: Empowering Traders with Transparent Governance🤝","date":"2023-06-29T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/push-protocol"},{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/newsletter"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/web-3"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/blockchain"},{"inline":true,"label":"Web3 Tools","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/web-3-tools"}],"readingTime":2.75,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1171/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1171/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"d-yd-x-x-push-empowering-traders-with-transparent-governance","title":"dYdX x Push: Empowering Traders with Transparent Governance🤝","authors":["push"],"image":"./cover-image.webp","text":"In the world of decentralized finance, dYdX is a prominent DEX that offers a unique trading experience. Built on the Ethereum layer 2 system StarkWare, dYdX leverages zero-knowledge proofs to provide enhanced security, decentralization, and privacy to its users.","tags":["Push Protocol","Newsletter","Web3","Blockchain","Web3 Tools"]},"unlisted":false,"prevItem":{"title":"June Monthly Recap 🌅","permalink":"/push-chain-website/pr-preview/pr-1171/blog/june-monthly-recap"},"nextItem":{"title":"How Push Protocol Can Revolutionize Data-Driven Decision Making📊","permalink":"/push-chain-website/pr-preview/pr-1171/blog/how-push-protocol-can-revolutionize-data-driven-decision-making"}}');

/***/ },

/***/ 831003
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_06_29_frens_of_push_dydx_index_md_016_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_06_29_frens_of_push_dydx_index_md_016_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193838);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'd-yd-x-x-push-empowering-traders-with-transparent-governance',
	title: 'dYdX x Push: Empowering Traders with Transparent Governance🤝',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'In the world of decentralized finance, dYdX is a prominent DEX that offers a unique trading experience. Built on the Ethereum layer 2 system StarkWare, dYdX leverages zero-knowledge proofs to provide enhanced security, decentralization, and privacy to its users.',
	tags: [
		'Push Protocol',
		'Newsletter',
		'Web3',
		'Blockchain',
		'Web3 Tools'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(52547)/* ["default"] */ .A),
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
      alt: "Cover image of dYdX x Push: Empowering Traders with Transparent Governance🤝",
      src: (__webpack_require__(886490)/* ["default"] */ .A) + "",
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



/***/ },

/***/ 886490
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1830e018dd8e6dacef177120336d7fae.webp");

/***/ }

}]);