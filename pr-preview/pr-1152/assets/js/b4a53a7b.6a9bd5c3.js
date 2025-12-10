"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[89228],{

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

/***/ 305083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-61389f60de2ebdb4d8a889a1ae52954c.webp");

/***/ }),

/***/ 478356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-61389f60de2ebdb4d8a889a1ae52954c.webp");

/***/ }),

/***/ 583000:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1152/blog/how-wallets-use-push-to-become-a-super-app","source":"@site/blog/2024-07-01-case-study-how-wallets-use-push-to-become-super-app/index.md","title":"Case Study: How Wallets Use Push To Become a Super App?","description":"How wallets use Push to become a Super App","date":"2024-07-01T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1152/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1152/blog/tags/web-3"},{"inline":true,"label":"Wallets","permalink":"/push-chain-website/pr-preview/pr-1152/blog/tags/wallets"},{"inline":true,"label":"Adoption","permalink":"/push-chain-website/pr-preview/pr-1152/blog/tags/adoption"}],"readingTime":4.72,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1152/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1152/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"how-wallets-use-push-to-become-a-super-app","title":"Case Study: How Wallets Use Push To Become a Super App?","authors":["push"],"image":"./cover-image.webp","description":"How wallets use Push to become a Super App","text":"Learn how web3 wallets are adopting Push to become a Super App","tags":["Push Protocol","Web3","Wallets","Adoption"]},"unlisted":false,"prevItem":{"title":"How to create your community on Push Chat?","permalink":"/push-chain-website/pr-preview/pr-1152/blog/how-to-create-your-community-on-push-chat"},"nextItem":{"title":"How to claim Push Alpha Access NFT","permalink":"/push-chain-website/pr-preview/pr-1152/blog/how-to-claim-push-alpha-access-nft"}}');

/***/ }),

/***/ 840579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2024_07_01_case_study_how_wallets_use_push_to_become_super_app_index_md_c9c_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2024_07_01_case_study_how_wallets_use_push_to_become_super_app_index_md_c9c_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(583000);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'how-wallets-use-push-to-become-a-super-app',
	title: 'Case Study: How Wallets Use Push To Become a Super App?',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'How wallets use Push to become a Super App',
	text: 'Learn how web3 wallets are adopting Push to become a Super App',
	tags: [
		'Push Protocol',
		'Web3',
		'Wallets',
		'Adoption'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(305083)/* ["default"] */ .A),
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
      alt: "Cover image of Case Study - How Wallets use Push to become a Super App",
      src: (__webpack_require__(478356)/* ["default"] */ .A) + "",
      width: "2000",
      height: "1125"
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