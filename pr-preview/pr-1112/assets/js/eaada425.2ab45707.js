"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[52870],{

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

/***/ 424406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-145d30c85d49dfc4ccc66698723ffdbc.webp");

/***/ }),

/***/ 505914:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1112/blog/epns-partners-with-unstoppable-domains","source":"@site/blog/2021-04-05-epns-partners-with-unstoppable-domains/index.md","title":"EPNS Partners with Unstoppable Domains! 💖💖💖","description":"EPNS Partners with Unstoppable Domains! 💖💖💖","date":"2021-04-05T00:00:00.000Z","tags":[{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/announcements"},{"inline":true,"label":"Unstoppable Domains","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/unstoppable-domains"},{"inline":true,"label":"Partnerships","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/partnerships"},{"inline":true,"label":"DNS","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/dns"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1112/blog/tags/ethereum"}],"readingTime":1.7,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1112/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1112/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-partners-with-unstoppable-domains","title":"EPNS Partners with Unstoppable Domains! 💖💖💖","description":"EPNS Partners with Unstoppable Domains! 💖💖💖","authors":["push"],"image":"./cover-image.webp","text":"We’re happy to announce our partnership with Unstoppable Domains!. Ethereum Push Notification Service (EPNS) has integrated crypto domains to the EPNS products (app and dApp) and will be working with UnstoppableDomains to explore various synergies between us in the future!","tags":["Announcements","Unstoppable Domains","Partnerships","DNS","Ethereum"]},"unlisted":false,"prevItem":{"title":"EPNS Whitelist Meme Competition #PUSHMEME","permalink":"/push-chain-website/pr-preview/pr-1112/blog/epns-whitelist-meme-competition"},"nextItem":{"title":"Win-Win for Users of PoolTogether and EPNS","permalink":"/push-chain-website/pr-preview/pr-1112/blog/win-win-for-users-of-pooltogether-and-epns"}}');

/***/ }),

/***/ 666439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-145d30c85d49dfc4ccc66698723ffdbc.webp");

/***/ }),

/***/ 790871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_04_05_epns_partners_with_unstoppable_domains_index_md_85b_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_04_05_epns_partners_with_unstoppable_domains_index_md_85b_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505914);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-partners-with-unstoppable-domains',
	title: 'EPNS Partners with Unstoppable Domains! 💖💖💖',
	description: 'EPNS Partners with Unstoppable Domains! 💖💖💖',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We’re happy to announce our partnership with Unstoppable Domains!. Ethereum Push Notification Service (EPNS) has integrated crypto domains to the EPNS products (app and dApp) and will be working with UnstoppableDomains to explore various synergies between us in the future!',
	tags: [
		'Announcements',
		'Unstoppable Domains',
		'Partnerships',
		'DNS',
		'Ethereum'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(666439)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS Partners with Unstoppable Domains! 💖💖💖",
      src: (__webpack_require__(424406)/* ["default"] */ .A) + "",
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