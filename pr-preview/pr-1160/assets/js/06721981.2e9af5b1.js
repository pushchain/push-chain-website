"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[66785],{

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

/***/ 166081
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_07_15_epns_collaborates_with_boardroom_index_md_6f9_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_07_15_epns_collaborates_with_boardroom_index_md_6f9_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(658064);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-collaborates-with-boardroom',
	title: 'EPNS Collaborates With Boardroom to Deliver Push Notifications for Protocol and DAO Governance',
	description: 'EPNS Collaborates With Boardroom to Deliver Push Notifications for Protocol and DAO Governance',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'DAO and Protocol Governance supports transparent and inclusive decision-making, enabling a distributed set of stakeholders to adopt and implement key decisions that contribute to the operation and growth of a network and community ',
	tags: [
		'Announcements',
		'Boardroom',
		'Ethereum',
		'Dao',
		'Governance'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(794649)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS Collaborates With Boardroom to Deliver Push Notifications for Protocol and DAO Governance",
      src: (__webpack_require__(622180)/* ["default"] */ .A) + "",
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



/***/ },

/***/ 622180
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7302022fdd2e2e36e8c7a1fdf67ddfd7.webp");

/***/ },

/***/ 658064
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1160/blog/epns-collaborates-with-boardroom","source":"@site/blog/2021-07-15-epns-collaborates-with-boardroom/index.md","title":"EPNS Collaborates With Boardroom to Deliver Push Notifications for Protocol and DAO Governance","description":"EPNS Collaborates With Boardroom to Deliver Push Notifications for Protocol and DAO Governance","date":"2021-07-15T00:00:00.000Z","tags":[{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1160/blog/tags/announcements"},{"inline":true,"label":"Boardroom","permalink":"/push-chain-website/pr-preview/pr-1160/blog/tags/boardroom"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1160/blog/tags/ethereum"},{"inline":true,"label":"Dao","permalink":"/push-chain-website/pr-preview/pr-1160/blog/tags/dao"},{"inline":true,"label":"Governance","permalink":"/push-chain-website/pr-preview/pr-1160/blog/tags/governance"}],"readingTime":2.09,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1160/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1160/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-collaborates-with-boardroom","title":"EPNS Collaborates With Boardroom to Deliver Push Notifications for Protocol and DAO Governance","description":"EPNS Collaborates With Boardroom to Deliver Push Notifications for Protocol and DAO Governance","authors":["push"],"image":"./cover-image.webp","text":"DAO and Protocol Governance supports transparent and inclusive decision-making, enabling a distributed set of stakeholders to adopt and implement key decisions that contribute to the operation and growth of a network and community ","tags":["Announcements","Boardroom","Ethereum","Dao","Governance"]},"unlisted":false,"prevItem":{"title":"AMA with Alpha Finance Lab","permalink":"/push-chain-website/pr-preview/pr-1160/blog/ama-with-alpha-finance-lab"},"nextItem":{"title":"EPNS Partners with Snapshot to Deliver Notifications to Improve Community Governance","permalink":"/push-chain-website/pr-preview/pr-1160/blog/epns-partners-with-snapshot"}}');

/***/ },

/***/ 794649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7302022fdd2e2e36e8c7a1fdf67ddfd7.webp");

/***/ }

}]);