"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[44000],{

/***/ 7616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-81e314c31c518944e9e9f1d301b5420f.webp");

/***/ }),

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

/***/ 495437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-81e314c31c518944e9e9f1d301b5420f.webp");

/***/ }),

/***/ 517549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_01_25_how_to_get_started_with_epns_index_md_c7a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_01_25_how_to_get_started_with_epns_index_md_c7a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(523830);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'how-to-get-started-with-epns',
	title: 'How to Get Started with EPNS (for Devs!)',
	description: 'How to Get Started with EPNS (for Devs!)',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'EPNS is an open-source, decentralized notification protocol. The protocol went live on Ethereum Mainnet on Jan 11th and it now has 19 official channels by major projects in Web3 including ENS, MakerDAO, Coindesk and dYdX.',
	tags: [
		'Epnsproject',
		'Web3',
		'Blockchain',
		'Notifications',
		'Developer'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(495437)/* ["default"] */ .A),
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
      alt: "Cover image of How to Get Started with EPNS (for Devs!)",
      src: (__webpack_require__(7616)/* ["default"] */ .A) + "",
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

/***/ 523830:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1117/blog/how-to-get-started-with-epns","source":"@site/blog/2022-01-25-how-to-get-started-with-epns/index.md","title":"How to Get Started with EPNS (for Devs!)","description":"How to Get Started with EPNS (for Devs!)","date":"2022-01-25T00:00:00.000Z","tags":[{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/epnsproject"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/web-3"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/blockchain"},{"inline":true,"label":"Notifications","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/notifications"},{"inline":true,"label":"Developer","permalink":"/push-chain-website/pr-preview/pr-1117/blog/tags/developer"}],"readingTime":3.68,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1117/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1117/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"how-to-get-started-with-epns","title":"How to Get Started with EPNS (for Devs!)","description":"How to Get Started with EPNS (for Devs!)","authors":["push"],"image":"./cover-image.webp","text":"EPNS is an open-source, decentralized notification protocol. The protocol went live on Ethereum Mainnet on Jan 11th and it now has 19 official channels by major projects in Web3 including ENS, MakerDAO, Coindesk and dYdX.","tags":["Epnsproject","Web3","Blockchain","Notifications","Developer"]},"unlisted":false,"prevItem":{"title":"Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap","permalink":"/push-chain-website/pr-preview/pr-1117/blog/dmitry-buterin—rockstars-of-ethereum-vol-2"},"nextItem":{"title":"EPNS Allies With Angle Protocol to Facilitate Push Notifications for Users","permalink":"/push-chain-website/pr-preview/pr-1117/blog/epns-allies-with-angle-protocol"}}');

/***/ })

}]);