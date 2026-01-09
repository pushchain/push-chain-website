"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[61684],{

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

/***/ 233003:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1159/blog/epns-and-pine-form-an-alliance-to-enable-seamless-communication-for-users","source":"@site/blog/2022-06-30-epns-and-pine-form-an-alliance/index.md","title":"EPNS and Pine Form An Alliance to Enable Seamless Communication for Users","description":"Cover image of EPNS and Pine Form An Alliance to Enable Seamless Communication for Users","date":"2022-06-30T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/web-3"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/blockchain"},{"inline":true,"label":"Crypto","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/crypto"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/ethereum"},{"inline":true,"label":"Cryptocurrency","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/cryptocurrency"}],"readingTime":1.7,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1159/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1159/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-and-pine-form-an-alliance-to-enable-seamless-communication-for-users","title":"EPNS and Pine Form An Alliance to Enable Seamless Communication for Users","authors":["push"],"image":"./cover-image.png","text":"EPNS and Pine, the decentralized NFT loan platform, join hands in a pilot collaboration to bring push notifications to users. As such, Pine will now be able to seamlessly interact with its users and keep them updated about the status of their loans on the platform.","tags":["Web3","Blockchain","Crypto","Ethereum","Cryptocurrency"]},"unlisted":false,"prevItem":{"title":"EPNS Monthly Blocks","permalink":"/push-chain-website/pr-preview/pr-1159/blog/epns-monthly-blocks"},"nextItem":{"title":"Announcing Volume 2 of Push #ROCKSTARS","permalink":"/push-chain-website/pr-preview/pr-1159/blog/announcing-volume-2-of-push-rockstars"}}');

/***/ }),

/***/ 254292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-3c483569ccf91c481868ed56b6e91119.png");

/***/ }),

/***/ 727985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_06_30_epns_and_pine_form_an_alliance_index_md_6cc_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_06_30_epns_and_pine_form_an_alliance_index_md_6cc_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-and-pine-form-an-alliance-to-enable-seamless-communication-for-users',
	title: 'EPNS and Pine Form An Alliance to Enable Seamless Communication for Users',
	authors: [
		'push'
	],
	image: './cover-image.png',
	text: 'EPNS and Pine, the decentralized NFT loan platform, join hands in a pilot collaboration to bring push notifications to users. As such, Pine will now be able to seamlessly interact with its users and keep them updated about the status of their loans on the platform.',
	tags: [
		'Web3',
		'Blockchain',
		'Crypto',
		'Ethereum',
		'Cryptocurrency'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(254292)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS and Pine Form An Alliance to Enable Seamless Communication for Users",
      src: (__webpack_require__(816075)/* ["default"] */ .A) + "",
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

/***/ 816075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-3c483569ccf91c481868ed56b6e91119.png");

/***/ })

}]);