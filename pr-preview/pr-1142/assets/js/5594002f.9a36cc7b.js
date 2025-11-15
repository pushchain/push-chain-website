"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[85974],{

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

/***/ 52566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-53230251c56197ef10f6fdd8d7ded1ec.webp");

/***/ }),

/***/ 386779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-53230251c56197ef10f6fdd8d7ded1ec.webp");

/***/ }),

/***/ 506159:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1142/blog/epns-push-notifications-are-never-boring","source":"@site/blog/2020-05-13-epns-push-notifications-are-never-boring/index.md","title":"EPNS push notifications are never boring","description":"Cover Image of EPNS push notifications are never boring","date":"2020-05-13T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/ethereum"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/blockchain"},{"inline":true,"label":"Ethglobal","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/ethglobal"},{"inline":true,"label":"Blog","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/blog"},{"inline":true,"label":"Notifications","permalink":"/push-chain-website/pr-preview/pr-1142/blog/tags/notifications"}],"readingTime":3.51,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1142/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1142/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-push-notifications-are-never-boring","title":"EPNS push notifications are never boring","authors":["push"],"image":"./cover-image.webp","text":"We are back, sharing our ETHGlobal Hack Money hackathon story. Can’t believe it’s already week -3!! It’s been an amazing learning experience so far. A big shout out to the ETHGlobal Team for always being there to help and organizing the best AMAs and office hours sessions. Getting feedback and ideas from the devs at Aavesome Compound, etc has made this learning process about DeFi landscape and tech amazingly fun.","tags":["Ethereum","Blockchain","Ethglobal","Blog","Notifications"]},"unlisted":false,"prevItem":{"title":"EPNS Update : Gitcoin Kernel Week-1","permalink":"/push-chain-website/pr-preview/pr-1142/blog/epns-update-gitcoin-kernel-week-1"},"nextItem":{"title":"Hello World: BUIDLing a working EPNS Mobile app","permalink":"/push-chain-website/pr-preview/pr-1142/blog/hello-world-buid-ling-a-working-epns-mobile-app"}}');

/***/ }),

/***/ 940115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2020_05_13_epns_push_notifications_are_never_boring_index_md_622_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2020_05_13_epns_push_notifications_are_never_boring_index_md_622_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(506159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-push-notifications-are-never-boring',
	title: 'EPNS push notifications are never boring',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We are back, sharing our ETHGlobal Hack Money hackathon story. Can’t believe it’s already week -3!! It’s been an amazing learning experience so far. A big shout out to the ETHGlobal Team for always being there to help and organizing the best AMAs and office hours sessions. Getting feedback and ideas from the devs at Aavesome Compound, etc has made this learning process about DeFi landscape and tech amazingly fun.',
	tags: [
		'Ethereum',
		'Blockchain',
		'Ethglobal',
		'Blog',
		'Notifications'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(386779)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS push notifications are never boring",
      src: (__webpack_require__(52566)/* ["default"] */ .A) + "",
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