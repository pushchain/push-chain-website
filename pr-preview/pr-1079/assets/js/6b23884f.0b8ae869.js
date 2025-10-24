"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[28680],{

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

/***/ 261551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_02_09_superfluid_taps_push_to_update_index_md_035_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_02_09_superfluid_taps_push_to_update_index_md_035_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(742505);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'superfluid-taps-push-to-update-users-on-money-streaming',
	title: 'Superfluid Taps Push to Update Users on Money Streaming⚡',
	authors: [
		'push'
	],
	image: './cover-image.gif',
	text: 'Superfluid, the leading asset streaming protocol that enables web3 native subscriptions, salaries, and rewards for DAOs and crypto-native businesses, is partnering with Push to enable direct communication between users and their platform🎉',
	tags: [
		'Defi',
		'Web3',
		'Blockchain',
		'Blockchain Technology',
		'Announcements'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(737517)/* ["default"] */ .A),
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
      alt: "Cover image of Superfluid Taps Push to Update Users on Money Streaming⚡",
      src: (__webpack_require__(561666)/* ["default"] */ .A) + "",
      width: "800",
      height: "450"
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

/***/ 561666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-41ce26b0e1553799f5b4c6a12351cf44.gif");

/***/ }),

/***/ 737517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-41ce26b0e1553799f5b4c6a12351cf44.gif");

/***/ }),

/***/ 742505:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1079/blog/superfluid-taps-push-to-update-users-on-money-streaming","source":"@site/blog/2023-02-09-superfluid-taps-push-to-update/index.md","title":"Superfluid Taps Push to Update Users on Money Streaming⚡","description":"Cover image of Superfluid Taps Push to Update Users on Money Streaming⚡","date":"2023-02-09T00:00:00.000Z","tags":[{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/defi"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/web-3"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain-technology"},{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1079/blog/tags/announcements"}],"readingTime":2.37,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1079/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1079/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"superfluid-taps-push-to-update-users-on-money-streaming","title":"Superfluid Taps Push to Update Users on Money Streaming⚡","authors":["push"],"image":"./cover-image.gif","text":"Superfluid, the leading asset streaming protocol that enables web3 native subscriptions, salaries, and rewards for DAOs and crypto-native businesses, is partnering with Push to enable direct communication between users and their platform🎉","tags":["Defi","Web3","Blockchain","Blockchain Technology","Announcements"]},"unlisted":false,"prevItem":{"title":"Push and Phuture Finance Team Up to Enhance User Engagement🐋","permalink":"/push-chain-website/pr-preview/pr-1079/blog/push-and-phuture-finance-team-up-to-enhance-user-engagement"},"nextItem":{"title":"January Monthly Recap❄️","permalink":"/push-chain-website/pr-preview/pr-1079/blog/january-monthly-recap"}}');

/***/ })

}]);