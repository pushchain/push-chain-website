"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[5717],{

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

/***/ 192985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1f83eede85c81fc69e75ab32e5c6abb8.webp");

/***/ },

/***/ 646996
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1161/blog/wrapping-up-rockstars-of-epns-nft-drops","source":"@site/blog/2022-04-27-wrapping-up-rockstars/index.md","title":"Wrapping Up Rockstars of EPNS NFT Drops","description":"Wrapping Up Rockstars of EPNS NFT Drops","date":"2022-04-27T00:00:00.000Z","tags":[{"inline":true,"label":"Rockstar","permalink":"/push-chain-website/pr-preview/pr-1161/blog/tags/rockstar"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1161/blog/tags/epnsproject"},{"inline":true,"label":"Push","permalink":"/push-chain-website/pr-preview/pr-1161/blog/tags/push"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1161/blog/tags/blockchain"},{"inline":true,"label":"Nft","permalink":"/push-chain-website/pr-preview/pr-1161/blog/tags/nft"}],"readingTime":1.57,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1161/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1161/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"wrapping-up-rockstars-of-epns-nft-drops","title":"Wrapping Up Rockstars of EPNS NFT Drops","description":"Wrapping Up Rockstars of EPNS NFT Drops","authors":["push"],"image":"./cover-image.webp","text":"Exclusive Discord channel for all the Rockstar winners, Tipping Opportunities, Push Governance participation & more..","tags":["Rockstar","Epnsproject","Push","Blockchain","Nft"]},"unlisted":false,"prevItem":{"title":"EPNS x 0VIX: Enabling Communication for the Next-Generation of Money Markets","permalink":"/push-chain-website/pr-preview/pr-1161/blog/epns-x-ovix"},"nextItem":{"title":"EPNS Roadmap 2022","permalink":"/push-chain-website/pr-preview/pr-1161/blog/epns-roadmap-2022"}}');

/***/ },

/***/ 697516
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_27_wrapping_up_rockstars_index_md_d1a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_27_wrapping_up_rockstars_index_md_d1a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(646996);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'wrapping-up-rockstars-of-epns-nft-drops',
	title: 'Wrapping Up Rockstars of EPNS NFT Drops',
	description: 'Wrapping Up Rockstars of EPNS NFT Drops',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Exclusive Discord channel for all the Rockstar winners, Tipping Opportunities, Push Governance participation & more..',
	tags: [
		'Rockstar',
		'Epnsproject',
		'Push',
		'Blockchain',
		'Nft'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(984722)/* ["default"] */ .A),
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
      alt: "Cover image of Wrapping Up Rockstars of EPNS NFT Drops",
      src: (__webpack_require__(192985)/* ["default"] */ .A) + "",
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



/***/ },

/***/ 984722
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1f83eede85c81fc69e75ab32e5c6abb8.webp");

/***/ }

}]);