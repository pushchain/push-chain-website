"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[71134],{

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

/***/ 477241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_09_09_epns_gitcoin_2021_index_md_5d3_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_09_09_epns_gitcoin_2021_index_md_5d3_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-gitcoin-2021',
	title: 'EPNS 💕 Gitcoin',
	description: 'EPNS 💕 Gitcoin',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'With Gitcoin Grants Round 11 starting today, EPNS is proud to announce we will be sponsoring GR11 to continue supporting early projects in Web3.',
	tags: [
		'Ethereum',
		'Epnsproject',
		'Gitcoin',
		'Open Source'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(790441)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS 💕 Gitcoin",
      src: (__webpack_require__(973410)/* ["default"] */ .A) + "",
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



/***/ }),

/***/ 790441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d5f3899d53483ba988fe1f565c307141.webp");

/***/ }),

/***/ 973410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d5f3899d53483ba988fe1f565c307141.webp");

/***/ }),

/***/ 997725:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1067/blog/epns-gitcoin-2021","source":"@site/blog/2021-09-09-epns-gitcoin-2021/index.md","title":"EPNS 💕 Gitcoin","description":"EPNS 💕 Gitcoin","date":"2021-09-09T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1067/blog/tags/epnsproject"},{"inline":true,"label":"Gitcoin","permalink":"/push-chain-website/pr-preview/pr-1067/blog/tags/gitcoin"},{"inline":true,"label":"Open Source","permalink":"/push-chain-website/pr-preview/pr-1067/blog/tags/open-source"}],"readingTime":1.55,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1067/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1067/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-gitcoin-2021","title":"EPNS 💕 Gitcoin","description":"EPNS 💕 Gitcoin","authors":["push"],"image":"./cover-image.webp","text":"With Gitcoin Grants Round 11 starting today, EPNS is proud to announce we will be sponsoring GR11 to continue supporting early projects in Web3.","tags":["Ethereum","Epnsproject","Gitcoin","Open Source"]},"unlisted":false,"prevItem":{"title":"EPNS Push Notifications to Support Kyber’s Frictionless Liquidity Pools","permalink":"/push-chain-website/pr-preview/pr-1067/blog/epns-push-notifications-to-support-kyber"},"nextItem":{"title":"EPNS Governance goes Live! Let’s PUSH for Progressive Decentralized Governance","permalink":"/push-chain-website/pr-preview/pr-1067/blog/epns-governance-goes-live"}}');

/***/ })

}]);