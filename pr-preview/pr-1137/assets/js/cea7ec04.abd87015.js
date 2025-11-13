"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[27515],{

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

/***/ 112699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-75eb299966c0fab6f5cd08a535e3bfd3.webp");

/***/ }),

/***/ 191142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-75eb299966c0fab6f5cd08a535e3bfd3.webp");

/***/ }),

/***/ 541443:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1137/blog/push-helps-mover-the-first-crypto-debit-card-to-power-communication-on-the-platform","source":"@site/blog/2022-12-22-mover-push/index.md","title":"Push Helps Mover — the First Crypto Debit Card, to Power Communication on the Platform","description":"Cover image of Push Helps Mover — the First Crypto Debit Card, to Power Communication on the Platform","date":"2022-12-22T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1137/blog/tags/web-3"},{"inline":true,"label":"Frensofpush","permalink":"/push-chain-website/pr-preview/pr-1137/blog/tags/frensofpush"},{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1137/blog/tags/push-notification"},{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1137/blog/tags/push-protocol"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1137/blog/tags/defi"},{"inline":true,"label":"Debitcard","permalink":"/push-chain-website/pr-preview/pr-1137/blog/tags/debitcard"}],"readingTime":2.84,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1137/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1137/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-helps-mover-the-first-crypto-debit-card-to-power-communication-on-the-platform","title":"Push Helps Mover — the First Crypto Debit Card, to Power Communication on the Platform","authors":["push"],"image":"./cover-image.webp","text":"In the fifth episode of “Frens of Push,” we are in conversation with Anton Mozgovoy, CEO and Co-Founder of Mover, to talk about how Push is fostering decentralized communication on the platform.","tags":["Web3","Frensofpush","Push Notification","Push Protocol","Defi","Debitcard"]},"unlisted":false,"prevItem":{"title":"Push 2022 Year in Review🎉","permalink":"/push-chain-website/pr-preview/pr-1137/blog/push-2022-year-in-review"},"nextItem":{"title":"We’re Still Pushing: A Deeper Look Into Push Chat","permalink":"/push-chain-website/pr-preview/pr-1137/blog/were-still-pushing-a-deeper-look-into-push-chat"}}');

/***/ }),

/***/ 658899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_12_22_mover_push_index_md_136_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_12_22_mover_push_index_md_136_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541443);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-helps-mover-the-first-crypto-debit-card-to-power-communication-on-the-platform',
	title: 'Push Helps Mover — the First Crypto Debit Card, to Power Communication on the Platform',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'In the fifth episode of “Frens of Push,” we are in conversation with Anton Mozgovoy, CEO and Co-Founder of Mover, to talk about how Push is fostering decentralized communication on the platform.',
	tags: [
		'Web3',
		'Frensofpush',
		'Push Notification',
		'Push Protocol',
		'Defi',
		'Debitcard'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(112699)/* ["default"] */ .A),
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
      alt: "Cover image of Push Helps Mover — the First Crypto Debit Card, to Power Communication on the Platform",
      src: (__webpack_require__(191142)/* ["default"] */ .A) + "",
      width: "720",
      height: "405"
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