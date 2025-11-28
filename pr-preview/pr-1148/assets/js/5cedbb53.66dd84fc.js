"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[57912],{

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

/***/ 160066:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1148/blog/push-protocol-launches-on-polygon-enabling-communication-for-thousands-of-dapps","source":"@site/blog/2022-09-29-pushprotocol-on-polygon-mainnet/index.md","title":"Push Protocol Launches on Polygon, Enabling Communication for Thousands of Dapps","description":"Cover image of Push Protocol Launches on Polygon, Enabling Communication for Thousands of Dapps","date":"2022-09-29T00:00:00.000Z","tags":[{"inline":true,"label":"Polygon","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/polygon"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/web-3"},{"inline":true,"label":"Communication","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/communication"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/ethereum"},{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/announcements"}],"readingTime":2.75,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1148/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1148/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-protocol-launches-on-polygon-enabling-communication-for-thousands-of-dapps","title":"Push Protocol Launches on Polygon, Enabling Communication for Thousands of Dapps","authors":["push"],"image":"./cover-image.webp","text":"Today, we’re thrilled to announce that Push Protocol, previously Ethereum Push Notification Service (EPNS), has launched on Polygon, enabling seamless, web3-native communication to the thousands of Polygon dApps and hundreds of thousands of active users.","tags":["Polygon","Web3","Communication","Ethereum","Announcements"]},"unlisted":false,"prevItem":{"title":"Push and Lens: Powering UX with Notifications and Aave’s Lens","permalink":"/push-chain-website/pr-preview/pr-1148/blog/push-and-lens-powering-ux-with-notifications-and-aaves-lens"},"nextItem":{"title":"EPNS Rebrands into Push Protocol, the Communication Protocol for Web3","permalink":"/push-chain-website/pr-preview/pr-1148/blog/epns-rebrands-into-push-protocol-the-communication-protocol-for-web3"}}');

/***/ }),

/***/ 301236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-c3e11128b9a69cafde99055ac5bfccaf.webp");

/***/ }),

/***/ 323507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-c3e11128b9a69cafde99055ac5bfccaf.webp");

/***/ }),

/***/ 892446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_09_29_pushprotocol_on_polygon_mainnet_index_md_a0c_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_09_29_pushprotocol_on_polygon_mainnet_index_md_a0c_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160066);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-protocol-launches-on-polygon-enabling-communication-for-thousands-of-dapps',
	title: 'Push Protocol Launches on Polygon, Enabling Communication for Thousands of Dapps',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Today, we’re thrilled to announce that Push Protocol, previously Ethereum Push Notification Service (EPNS), has launched on Polygon, enabling seamless, web3-native communication to the thousands of Polygon dApps and hundreds of thousands of active users.',
	tags: [
		'Polygon',
		'Web3',
		'Communication',
		'Ethereum',
		'Announcements'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(301236)/* ["default"] */ .A),
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
      alt: "Cover image of Push Protocol Launches on Polygon, Enabling Communication for Thousands of Dapps",
      src: (__webpack_require__(323507)/* ["default"] */ .A) + "",
      width: "1100",
      height: "561"
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