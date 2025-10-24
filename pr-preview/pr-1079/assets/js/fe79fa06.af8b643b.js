"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[92325],{

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

/***/ 321263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_06_21_smart_contract_bug_bounty_index_md_478_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_06_21_smart_contract_bug_bounty_index_md_478_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(991106);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: '100-000-of-push-x-immune-fi-bug-bounty-program-goes-live',
	title: '$100,000 of Push x ImmuneFi Bug Bounty Program goes Live 🪲',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Are you a skilled security researchers looking for an exciting challenge and the opportunity to earn big? Look no further! We are thrilled to announce the launch of the Push’s collaborative Bug Bounty Program with Immunefi and calling all hackers to participate!',
	tags: [
		'Push Protocol',
		'Web3',
		'Bounty Program',
		'Immuenfi',
		'Bug bounty'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(671887)/* ["default"] */ .A),
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
      alt: "Cover image of $100,000 of Push x ImmuneFi Bug Bounty Program goes Live 🪲",
      src: (__webpack_require__(778164)/* ["default"] */ .A) + "",
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



/***/ }),

/***/ 671887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-16cca59d2afa42306e21cf101bd016b7.webp");

/***/ }),

/***/ 778164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-16cca59d2afa42306e21cf101bd016b7.webp");

/***/ }),

/***/ 991106:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1079/blog/100-000-of-push-x-immune-fi-bug-bounty-program-goes-live","source":"@site/blog/2023-06-21-smart-contract-bug-bounty/index.md","title":"$100,000 of Push x ImmuneFi Bug Bounty Program goes Live 🪲","description":"Cover image of $100,000 of Push x ImmuneFi Bug Bounty Program goes Live 🪲","date":"2023-06-21T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/web-3"},{"inline":true,"label":"Bounty Program","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/bounty-program"},{"inline":true,"label":"Immuenfi","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/immuenfi"},{"inline":true,"label":"Bug bounty","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/bug-bounty"}],"readingTime":2.34,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1079/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1079/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"100-000-of-push-x-immune-fi-bug-bounty-program-goes-live","title":"$100,000 of Push x ImmuneFi Bug Bounty Program goes Live 🪲","authors":["push"],"image":"./cover-image.webp","text":"Are you a skilled security researchers looking for an exciting challenge and the opportunity to earn big? Look no further! We are thrilled to announce the launch of the Push’s collaborative Bug Bounty Program with Immunefi and calling all hackers to participate!","tags":["Push Protocol","Web3","Bounty Program","Immuenfi","Bug bounty"]},"unlisted":false,"prevItem":{"title":"Empowering Decentralized Decision-Making: Push x ElementDAO💙💜","permalink":"/push-chain-website/pr-preview/pr-1079/blog/empowering-decentralized-decision-making-push-x-element-dao"},"nextItem":{"title":"What is ERC-6551 and How’s It Better than ERC-721?","permalink":"/push-chain-website/pr-preview/pr-1079/blog/what-is-erc-6551-and-how-s-it-better-than-erc-721"}}');

/***/ })

}]);