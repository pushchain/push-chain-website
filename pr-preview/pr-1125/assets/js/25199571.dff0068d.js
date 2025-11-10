"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[93908],{

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

/***/ 58024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_05_03_epns_x_ovix_index_md_ec7_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_05_03_epns_x_ovix_index_md_ec7_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(757527);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-x-ovix',
	title: 'EPNS x 0VIX: Enabling Communication for the Next-Generation of Money Markets',
	description: 'EPNS x 0VIX: Enabling Communication for the Next-Generation of Money Markets',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'EPNS and 0VIX team up in a pilot collaboration to enable direct communication through push notifications.',
	tags: [
		'Nft',
		'Newsletter',
		'Epnsproject',
		'Blockchain',
		'Digital Art'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(924854)/* ["default"] */ .A),
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
      alt: "Cover image of EPNS x 0VIX: Enabling Communication for the Next-Generation of Money Markets",
      src: (__webpack_require__(83565)/* ["default"] */ .A) + "",
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

/***/ 83565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2832a065cfdfca887cf24b96738020b5.webp");

/***/ }),

/***/ 757527:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1125/blog/epns-x-ovix","source":"@site/blog/2022-05-03-epns-x-ovix/index.md","title":"EPNS x 0VIX: Enabling Communication for the Next-Generation of Money Markets","description":"EPNS x 0VIX: Enabling Communication for the Next-Generation of Money Markets","date":"2022-05-03T00:00:00.000Z","tags":[{"inline":true,"label":"Nft","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/nft"},{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/newsletter"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/epnsproject"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/blockchain"},{"inline":true,"label":"Digital Art","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/digital-art"}],"readingTime":1.99,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1125/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1125/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-x-ovix","title":"EPNS x 0VIX: Enabling Communication for the Next-Generation of Money Markets","description":"EPNS x 0VIX: Enabling Communication for the Next-Generation of Money Markets","authors":["push"],"image":"./cover-image.webp","text":"EPNS and 0VIX team up in a pilot collaboration to enable direct communication through push notifications.","tags":["Nft","Newsletter","Epnsproject","Blockchain","Digital Art"]},"unlisted":false,"prevItem":{"title":"EPNS x DoinGud: Improving User Experience and Creating Impact in the NFT Market","permalink":"/push-chain-website/pr-preview/pr-1125/blog/epns-x-doingud"},"nextItem":{"title":"Wrapping Up Rockstars of EPNS NFT Drops","permalink":"/push-chain-website/pr-preview/pr-1125/blog/wrapping-up-rockstars-of-epns-nft-drops"}}');

/***/ }),

/***/ 924854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2832a065cfdfca887cf24b96738020b5.webp");

/***/ })

}]);