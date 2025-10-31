"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[84599],{

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

/***/ 180492:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1109/blog/understanding-nfts","source":"@site/blog/2021-06-28-understanding-nfts/index.md","title":"Understanding NFTs and Why We Need Push Notifications on NFT Marketplaces","description":"Understanding NFTs and Why We Need Push Notifications on NFT Marketplaces","date":"2021-06-28T00:00:00.000Z","tags":[{"inline":true,"label":"Nft","permalink":"/push-chain-website/pr-preview/pr-1109/blog/tags/nft"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1109/blog/tags/ethereum"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1109/blog/tags/blockchain"},{"inline":true,"label":"Notifications","permalink":"/push-chain-website/pr-preview/pr-1109/blog/tags/notifications"},{"inline":true,"label":"Twitter","permalink":"/push-chain-website/pr-preview/pr-1109/blog/tags/twitter"}],"readingTime":3.94,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1109/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1109/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"understanding-nfts","title":"Understanding NFTs and Why We Need Push Notifications on NFT Marketplaces","description":"Understanding NFTs and Why We Need Push Notifications on NFT Marketplaces","authors":["push"],"image":"./cover-image.webp","text":"Conversations about cryptocurrencies and blockchains are finally making it to dinner tables. Multiple factors such as the involvement of institutional investors, the spiking prices of cryptos, and the evolution of DeFi are majorly impacting the adoption. The latest in the series of things taking crypto to greater heights is the popularity of NFTs, or non-fungible tokens.","tags":["Nft","Ethereum","Blockchain","Notifications","Twitter"]},"unlisted":false,"prevItem":{"title":"EPNS Monthly Blocks","permalink":"/push-chain-website/pr-preview/pr-1109/blog/epns-monthly-blocks-jun-30"},"nextItem":{"title":"Roadmap Q2: EPNS Showrunners Framework and Backend SDK Beta v1.0 are Live!","permalink":"/push-chain-website/pr-preview/pr-1109/blog/epns-showrunners-framework-and-backend-sdk-beta"}}');

/***/ }),

/***/ 500863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_06_28_understanding_nfts_index_md_289_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_06_28_understanding_nfts_index_md_289_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180492);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'understanding-nfts',
	title: 'Understanding NFTs and Why We Need Push Notifications on NFT Marketplaces',
	description: 'Understanding NFTs and Why We Need Push Notifications on NFT Marketplaces',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Conversations about cryptocurrencies and blockchains are finally making it to dinner tables. Multiple factors such as the involvement of institutional investors, the spiking prices of cryptos, and the evolution of DeFi are majorly impacting the adoption. The latest in the series of things taking crypto to greater heights is the popularity of NFTs, or non-fungible tokens.',
	tags: [
		'Nft',
		'Ethereum',
		'Blockchain',
		'Notifications',
		'Twitter'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(727031)/* ["default"] */ .A),
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
      alt: "Cover Image of Understanding NFTs and Why We Need Push Notifications on NFT Marketplaces",
      src: (__webpack_require__(984582)/* ["default"] */ .A) + "",
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

/***/ 727031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d3739e8880ac0d7c0b7aebe1f827e5de.webp");

/***/ }),

/***/ 984582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d3739e8880ac0d7c0b7aebe1f827e5de.webp");

/***/ })

}]);