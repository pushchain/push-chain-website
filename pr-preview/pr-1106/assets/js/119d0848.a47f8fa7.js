"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[45562],{

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

/***/ 319635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_10_27_push_monthly_blocks_september_index_md_6d0_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_10_27_push_monthly_blocks_september_index_md_6d0_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(707619);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-monthly-blocks-september',
	title: 'Push Monthly Blocks',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Hi Push frens!✨ This one is a very special Monthly Blocks edition as it is the first Push Protocol edition. Let’s take time to recap briefly all the happenings this month! ',
	tags: [
		'Newsletter',
		'Blockchain',
		'Push Protocol',
		'Ethereum'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(991579)/* ["default"] */ .A),
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
      alt: "Cover image of Push Monthly Blocks",
      src: (__webpack_require__(868972)/* ["default"] */ .A) + "",
      width: "1100",
      height: "578"
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

/***/ 707619:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1106/blog/push-monthly-blocks-september","source":"@site/blog/2022-10-27-push-monthly-blocks-september/index.md","title":"Push Monthly Blocks","description":"Cover image of Push Monthly Blocks","date":"2022-10-27T00:00:00.000Z","tags":[{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/newsletter"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/blockchain"},{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/push-protocol"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/ethereum"}],"readingTime":2.26,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1106/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1106/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-monthly-blocks-september","title":"Push Monthly Blocks","authors":["push"],"image":"./cover-image.webp","text":"Hi Push frens!✨ This one is a very special Monthly Blocks edition as it is the first Push Protocol edition. Let’s take time to recap briefly all the happenings this month! ","tags":["Newsletter","Blockchain","Push Protocol","Ethereum"]},"unlisted":false,"prevItem":{"title":"Push Monthly Blocks","permalink":"/push-chain-website/pr-preview/pr-1106/blog/push-monthly-blocks-october"},"nextItem":{"title":"Push Protocol and Phuture Finance Partner to Bring Decentralized Notifications to the Platform","permalink":"/push-chain-website/pr-preview/pr-1106/blog/push-protocol-and-phuture-finance-partner-to-bring-decentralized-notifications-to-the-platform"}}');

/***/ }),

/***/ 868972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-540f19492dc25e81915fdcb9c4ef4d00.webp");

/***/ }),

/***/ 991579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-540f19492dc25e81915fdcb9c4ef4d00.webp");

/***/ })

}]);