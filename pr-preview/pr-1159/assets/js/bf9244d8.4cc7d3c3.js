"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[13518],{

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

/***/ 97560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_09_20_epns_allies_with_commonwealth_index_md_aa6_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_09_20_epns_allies_with_commonwealth_index_md_aa6_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849542);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'epns-allies-with-commonwealth-to-bring-governance-notifications-to-users',
	title: 'EPNS Allies With Commonwealth to Bring Governance Notifications to Users',
	authors: [
		'push'
	],
	image: './cover-image.png',
	text: 'Commonwealth, the all-in-one platform that lets projects simplify their community management and governance, joins forces with EPNS to enable direct communication with platform users. As such, users of Commonwealth are poised to receive decentralized push notifications pertaining to the governance process. These notifications increase user participation and keep users updated about every step in the governance lifecycle.',
	tags: [
		'Push Notification',
		'Web3',
		'Ethereum',
		'Commonwealth',
		'Defi'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(396949)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS Allies With Commonwealth to Bring Governance Notifications to Users",
      src: (__webpack_require__(778496)/* ["default"] */ .A) + "",
      width: "1100",
      height: "550"
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

/***/ 396949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5dcef9748ca21edac68fedf31dfda3c9.png");

/***/ }),

/***/ 778496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5dcef9748ca21edac68fedf31dfda3c9.png");

/***/ }),

/***/ 849542:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1159/blog/epns-allies-with-commonwealth-to-bring-governance-notifications-to-users","source":"@site/blog/2022-09-20-epns-allies-with-commonwealth/index.md","title":"EPNS Allies With Commonwealth to Bring Governance Notifications to Users","description":"Cover image of EPNS Allies With Commonwealth to Bring Governance Notifications to Users","date":"2022-09-20T00:00:00.000Z","tags":[{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/push-notification"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/web-3"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/ethereum"},{"inline":true,"label":"Commonwealth","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/commonwealth"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1159/blog/tags/defi"}],"readingTime":1.38,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1159/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1159/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-allies-with-commonwealth-to-bring-governance-notifications-to-users","title":"EPNS Allies With Commonwealth to Bring Governance Notifications to Users","authors":["push"],"image":"./cover-image.png","text":"Commonwealth, the all-in-one platform that lets projects simplify their community management and governance, joins forces with EPNS to enable direct communication with platform users. As such, users of Commonwealth are poised to receive decentralized push notifications pertaining to the governance process. These notifications increase user participation and keep users updated about every step in the governance lifecycle.","tags":["Push Notification","Web3","Ethereum","Commonwealth","Defi"]},"unlisted":false,"prevItem":{"title":"EPNS Rebrands into Push Protocol, the Communication Protocol for Web3","permalink":"/push-chain-website/pr-preview/pr-1159/blog/epns-rebrands-into-push-protocol-the-communication-protocol-for-web3"},"nextItem":{"title":"An Introduction to Push Notification (Part 2.2): Governance Use Cases","permalink":"/push-chain-website/pr-preview/pr-1159/blog/an-introduction-to-push-notification-part-2-2-governance-use-cases"}}');

/***/ })

}]);