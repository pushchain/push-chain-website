"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[98256],{

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

/***/ 33796
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2d2583ef9d66168cd27e4297b6330f23.webp");

/***/ },

/***/ 585003
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2d2583ef9d66168cd27e4297b6330f23.webp");

/***/ },

/***/ 723731
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1160/blog/timeswap-partners-with-epns","source":"@site/blog/2021-11-02-timeswap-partners-with-epns/index.md","title":"Timeswap Partners with EPNS To Bring Push Notifications to Its Users","description":"Timeswap Partners with EPNS To Bring Push Notifications to Its Users","date":"2021-11-02T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1160/blog/tags/ethereum"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1160/blog/tags/epnsproject"},{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1160/blog/tags/newsletter"}],"readingTime":1.98,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1160/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1160/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"timeswap-partners-with-epns","title":"Timeswap Partners with EPNS To Bring Push Notifications to Its Users","description":"Timeswap Partners with EPNS To Bring Push Notifications to Its Users","authors":["push"],"image":"./cover-image.webp","text":"With the rise of decentralized finance (DeFi), blockchain went from being just a “peer-to-peer electronic cash system” to a full-fledged financial sector offering a whole range of financial services in a decentralized fashion. However, the financial services that witnessed the biggest shift in their operations through decentralized finance are lending and borrowing.","tags":["Ethereum","Epnsproject","Newsletter"]},"unlisted":false,"prevItem":{"title":"Roadmap Q3: Audited EPNS Push Protocol V1 is here!","permalink":"/push-chain-website/pr-preview/pr-1160/blog/audited-epns-push-protocol-v1-is-here"},"nextItem":{"title":"EPNS Monthly Blocks","permalink":"/push-chain-website/pr-preview/pr-1160/blog/epns-monthly-blocks-oct-2021"}}');

/***/ },

/***/ 829115
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_11_02_timeswap_partners_with_epns_index_md_554_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_11_02_timeswap_partners_with_epns_index_md_554_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(723731);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'timeswap-partners-with-epns',
	title: 'Timeswap Partners with EPNS To Bring Push Notifications to Its Users',
	description: 'Timeswap Partners with EPNS To Bring Push Notifications to Its Users',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'With the rise of decentralized finance (DeFi), blockchain went from being just a “peer-to-peer electronic cash system” to a full-fledged financial sector offering a whole range of financial services in a decentralized fashion. However, the financial services that witnessed the biggest shift in their operations through decentralized finance are lending and borrowing.',
	tags: [
		'Ethereum',
		'Epnsproject',
		'Newsletter'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(585003)/* ["default"] */ .A),
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
      alt: "Cover Image of Timeswap Partners with EPNS To Bring Push Notifications to Its Users",
      src: (__webpack_require__(33796)/* ["default"] */ .A) + "",
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



/***/ }

}]);