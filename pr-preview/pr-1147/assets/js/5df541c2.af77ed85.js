"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[97569],{

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

/***/ 94862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-229948acc9e8bbf887bd651e3ad7045b.webp");

/***/ }),

/***/ 464449:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1147/blog/epns-teams-up-with-dydx","source":"@site/blog/2022-01-04-epns-teams-up-with-dydx/index.md","title":"EPNS Teams Up With dYdX Foundation to Enable Notifications for Governance Updates","description":"EPNS Teams Up With dYdX Foundation to Enable Notifications for Governance Updates","date":"2022-01-04T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1147/blog/tags/ethereum"},{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1147/blog/tags/newsletter"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1147/blog/tags/epnsproject"},{"inline":true,"label":"Collaboration","permalink":"/push-chain-website/pr-preview/pr-1147/blog/tags/collaboration"}],"readingTime":3.02,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1147/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1147/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-teams-up-with-dydx","title":"EPNS Teams Up With dYdX Foundation to Enable Notifications for Governance Updates","description":"EPNS Teams Up With dYdX Foundation to Enable Notifications for Governance Updates","authors":["push"],"image":"./cover-image.webp","text":"The term blockchain technology is almost synonymous with decentralization these days. This technology made it possible for a network of participants from different parts of the world who do not know each other to collaborate and run the blockchain network. All without the need for centralized authorities.","tags":["Ethereum","Newsletter","Epnsproject","Collaboration"]},"unlisted":false,"prevItem":{"title":"EPNS Integrates With Bancor Network to Facilitate Decentralized Push Notifications","permalink":"/push-chain-website/pr-preview/pr-1147/blog/epns-integrates-with-bancor-network"},"nextItem":{"title":"Our 2021 Year in Review 🎉🎉🎉","permalink":"/push-chain-website/pr-preview/pr-1147/blog/our-2021-year-in-review"}}');

/***/ }),

/***/ 709953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-229948acc9e8bbf887bd651e3ad7045b.webp");

/***/ }),

/***/ 811481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_01_04_epns_teams_up_with_dydx_index_md_503_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_01_04_epns_teams_up_with_dydx_index_md_503_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(464449);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-teams-up-with-dydx',
	title: 'EPNS Teams Up With dYdX Foundation to Enable Notifications for Governance Updates',
	description: 'EPNS Teams Up With dYdX Foundation to Enable Notifications for Governance Updates',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'The term blockchain technology is almost synonymous with decentralization these days. This technology made it possible for a network of participants from different parts of the world who do not know each other to collaborate and run the blockchain network. All without the need for centralized authorities.',
	tags: [
		'Ethereum',
		'Newsletter',
		'Epnsproject',
		'Collaboration'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(709953)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS Teams Up With dYdX Foundation to Enable Notifications for Governance Updates",
      src: (__webpack_require__(94862)/* ["default"] */ .A) + "",
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



/***/ })

}]);