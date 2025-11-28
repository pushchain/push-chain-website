"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[87801],{

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

/***/ 124808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-b2fa3226a91c0e4328029f8b32a38d78.webp");

/***/ }),

/***/ 662995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-b2fa3226a91c0e4328029f8b32a38d78.webp");

/***/ }),

/***/ 676767:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1148/blog/push-going-big-on-polygon-with-frens","source":"@site/blog/2022-10-04-going-big-on-polygon-with-frens/index.md","title":"Push Going Big on Polygon with Frens","description":"Cover image of Push Going Big on Polygon with Frens","date":"2022-10-04T00:00:00.000Z","tags":[{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/announcements"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/web-3"},{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/push-notification"},{"inline":true,"label":"Polygon","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/polygon"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1148/blog/tags/ethereum"}],"readingTime":2.76,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1148/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1148/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-going-big-on-polygon-with-frens","title":"Push Going Big on Polygon with Frens","authors":["push"],"image":"./cover-image.webp","text":"Push Protocol has recently launched on Polygon with Lens being the official launch partner. Today, we are excited to announce, some old, and some new friends are combining forces with Push to grow and strengthen their presence in the Polygon ecosystem.","tags":["Announcements","Web3","Push Notification","Polygon","Ethereum"]},"unlisted":false,"prevItem":{"title":"Join Us for the ETHBogotá 2022 Hackathon","permalink":"/push-chain-website/pr-preview/pr-1148/blog/join-us-for-the-ethbogotá-2022-hackathon"},"nextItem":{"title":"Push and Lens: Powering UX with Notifications and Aave’s Lens","permalink":"/push-chain-website/pr-preview/pr-1148/blog/push-and-lens-powering-ux-with-notifications-and-aaves-lens"}}');

/***/ }),

/***/ 863771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_10_04_going_big_on_polygon_with_frens_index_md_c4a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_10_04_going_big_on_polygon_with_frens_index_md_c4a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(676767);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-going-big-on-polygon-with-frens',
	title: 'Push Going Big on Polygon with Frens',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Push Protocol has recently launched on Polygon with Lens being the official launch partner. Today, we are excited to announce, some old, and some new friends are combining forces with Push to grow and strengthen their presence in the Polygon ecosystem.',
	tags: [
		'Announcements',
		'Web3',
		'Push Notification',
		'Polygon',
		'Ethereum'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(662995)/* ["default"] */ .A),
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
      alt: "Cover image of Push Going Big on Polygon with Frens",
      src: (__webpack_require__(124808)/* ["default"] */ .A) + "",
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



/***/ })

}]);