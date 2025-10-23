"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[27530],{

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

/***/ 86185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9bdd17804875dfd83abd5a638b677248.webp");

/***/ }),

/***/ 283329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_08_17_epns_collaborates_with_idle_index_md_8ea_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_08_17_epns_collaborates_with_idle_index_md_8ea_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(860845);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-collaborates-with-idle',
	title: 'EPNS Collaborates With Idle to Enable Push Notifications for Governance Updates',
	description: 'EPNS Collaborates With Idle to Enable Push Notifications for Governance Updates',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'The crypto market among all other things is known for its volatility. Just a look at the charts of the past few months can tell what a wild ride it has been for investors across the globe. While some of them have made millions, others have lost a lot due to the high volatility.',
	tags: [
		'Epnsproject',
		'Ethereum',
		'Newsletter'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(86185)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS Collaborates With Idle to Enable Push Notifications for Governance Updates",
      src: (__webpack_require__(837606)/* ["default"] */ .A) + "",
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



/***/ }),

/***/ 837606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9bdd17804875dfd83abd5a638b677248.webp");

/***/ }),

/***/ 860845:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1100/blog/epns-collaborates-with-idle","source":"@site/blog/2021-08-17-epns-collaborates-with-idle/index.md","title":"EPNS Collaborates With Idle to Enable Push Notifications for Governance Updates","description":"EPNS Collaborates With Idle to Enable Push Notifications for Governance Updates","date":"2021-08-17T00:00:00.000Z","tags":[{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/epnsproject"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/ethereum"},{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/newsletter"}],"readingTime":1.86,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1100/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1100/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-collaborates-with-idle","title":"EPNS Collaborates With Idle to Enable Push Notifications for Governance Updates","description":"EPNS Collaborates With Idle to Enable Push Notifications for Governance Updates","authors":["push"],"image":"./cover-image.webp","text":"The crypto market among all other things is known for its volatility. Just a look at the charts of the past few months can tell what a wild ride it has been for investors across the globe. While some of them have made millions, others have lost a lot due to the high volatility.","tags":["Epnsproject","Ethereum","Newsletter"]},"unlisted":false,"prevItem":{"title":"EPNS Partners with Aragon to power unstoppable Decentralized Governance.","permalink":"/push-chain-website/pr-preview/pr-1100/blog/epns-partners-with-aragon"},"nextItem":{"title":"Announcing EPNS 🔔 x YAM 🍠 Meme Contest winners! 🙊","permalink":"/push-chain-website/pr-preview/pr-1100/blog/announcing-epns-x-yam"}}');

/***/ })

}]);