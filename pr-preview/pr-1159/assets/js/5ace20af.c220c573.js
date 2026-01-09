"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[69418],{

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

/***/ 124490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_14_announcing_our_series_a_index_md_8b6_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_14_announcing_our_series_a_index_md_8b6_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(285396);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'announcing-our-series-a',
	title: 'Announcing Our $10.1 Million Series A!',
	description: 'Announcing Our $10.1 Million Series A!',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We’re proud to announce that EPNS has raised $10.1 million to continue building out the communication infrastructure for the decentralized future.',
	tags: [
		'Fundraising',
		'Web3',
		'Decentralization',
		'Announcements',
		'Ethereum'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(332952)/* ["default"] */ .A),
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
      alt: "Cover image of Announcing Our $10.1 Million Series A!",
      src: (__webpack_require__(845791)/* ["default"] */ .A) + "",
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

/***/ 285396:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1159/blog/announcing-our-series-a","source":"@site/blog/2022-04-14-announcing-our-series-a/index.md","title":"Announcing Our $10.1 Million Series A!","description":"Announcing Our $10.1 Million Series A!","date":"2022-04-14T00:00:00.000Z","tags":[{"inline":true,"label":"Fundraising","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/fundraising"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/web-3"},{"inline":true,"label":"Decentralization","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/decentralization"},{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/announcements"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/ethereum"}],"readingTime":2.87,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1159/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1159/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"announcing-our-series-a","title":"Announcing Our $10.1 Million Series A!","description":"Announcing Our $10.1 Million Series A!","authors":["push"],"image":"./cover-image.webp","text":"We’re proud to announce that EPNS has raised $10.1 million to continue building out the communication infrastructure for the decentralized future.","tags":["Fundraising","Web3","Decentralization","Announcements","Ethereum"]},"unlisted":false,"prevItem":{"title":"EPNS Integration Underway to Enable Seamless Communication for Users Within the Cryptex Finance App","permalink":"/push-chain-website/pr-preview/pr-1159/blog/epns-integration-underway-to-enable"},"nextItem":{"title":"EPNS and CoinDesk Announce Media Push Notifications","permalink":"/push-chain-website/pr-preview/pr-1159/blog/epns-and-coindesk-announce-media-push-notifications"}}');

/***/ }),

/***/ 332952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8d435b7ef8f3f5821d69564ed857f34c.webp");

/***/ }),

/***/ 845791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8d435b7ef8f3f5821d69564ed857f34c.webp");

/***/ })

}]);