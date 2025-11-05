"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[54583],{

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

/***/ 55304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_02_16_epns_and_lifi_index_md_dc7_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_02_16_epns_and_lifi_index_md_dc7_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(522548);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'epns-and-lifi-team-up',
	title: 'EPNS and LiFi Team Up To Improve User Experience Through Push Notifications',
	description: 'EPNS and LiFi Team Up To Improve User Experience Through Push Notifications',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Despite its monumental success over the past couple of years, the decentralized finance (DeFi) industry still largely remains to be fragmented. Every blockchain network within the industry seems to have created walled gardens for themselves that make it difficult for users to bypass.',
	tags: [
		'Newsletter',
		'Epnsproject',
		'Defi',
		'Ethereum',
		'Blockchain'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(856614)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS and LiFi Team Up To Improve User Experience Through Push Notifications",
      src: (__webpack_require__(274669)/* ["default"] */ .A) + "",
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

/***/ 274669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f66161cb04165382f0905b6438131cf1.webp");

/***/ }),

/***/ 522548:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1112/blog/epns-and-lifi-team-up","source":"@site/blog/2022-02-16-epns-and-lifi/index.md","title":"EPNS and LiFi Team Up To Improve User Experience Through Push Notifications","description":"EPNS and LiFi Team Up To Improve User Experience Through Push Notifications","date":"2022-02-16T00:00:00.000Z","tags":[{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/newsletter"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/epnsproject"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/defi"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/ethereum"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/blockchain"}],"readingTime":1.88,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1112/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1112/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-and-lifi-team-up","title":"EPNS and LiFi Team Up To Improve User Experience Through Push Notifications","description":"EPNS and LiFi Team Up To Improve User Experience Through Push Notifications","authors":["push"],"image":"./cover-image.webp","text":"Despite its monumental success over the past couple of years, the decentralized finance (DeFi) industry still largely remains to be fragmented. Every blockchain network within the industry seems to have created walled gardens for themselves that make it difficult for users to bypass.","tags":["Newsletter","Epnsproject","Defi","Ethereum","Blockchain"]},"unlisted":false,"prevItem":{"title":"EPNS and Nord Finance Team Up to Push Notifications for the Emergent DeFi Ecosystem","permalink":"/push-chain-website/pr-preview/pr-1112/blog/epns-and-nord-finance-team-up"},"nextItem":{"title":"EPNS x CryptoManga: Decentralized Communication for Decentralized Gaming","permalink":"/push-chain-website/pr-preview/pr-1112/blog/epns-and-cryptomanga-team-up"}}');

/***/ }),

/***/ 856614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f66161cb04165382f0905b6438131cf1.webp");

/***/ })

}]);