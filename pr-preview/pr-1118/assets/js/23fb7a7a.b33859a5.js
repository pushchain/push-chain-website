"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[69998],{

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

/***/ 195752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-407c1bc3afffe5c195a05ff4f74725e0.webp");

/***/ }),

/***/ 262762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_03_31_announcing_the_epns_push_token_generation_event_index_md_174_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_03_31_announcing_the_epns_push_token_generation_event_index_md_174_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(755988);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'announcing-the-epns-push-token-generation-event',
	title: 'Announcing the EPNS $PUSH Token Generation Event',
	description: 'Announcing the EPNS $PUSH Token Generation Event',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Since we announced our seed round last fall, we’ve been heads down continuing to build the world’s first decentralized notification protocol for Ethereum. We’re fast approaching mainnet launch, so we’re taking the time today to explain to the community what they can expect for the $PUSH token generation event (TGE).',
	tags: [
		'Push Notifications Token',
		'Push Notifications Tge',
		'Push Notifications Tokenomics',
		'Push Notifications Announcements'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(195752)/* ["default"] */ .A),
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
      alt: "Cover Image of Announcing the EPNS $PUSH Token Generation Event",
      src: (__webpack_require__(415183)/* ["default"] */ .A) + "",
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

/***/ 415183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-407c1bc3afffe5c195a05ff4f74725e0.webp");

/***/ }),

/***/ 755988:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1118/blog/announcing-the-epns-push-token-generation-event","source":"@site/blog/2021-03-31-announcing-the-epns-push-token-generation-event/index.md","title":"Announcing the EPNS $PUSH Token Generation Event","description":"Announcing the EPNS $PUSH Token Generation Event","date":"2021-03-31T00:00:00.000Z","tags":[{"inline":true,"label":"Push Notifications Token","permalink":"/push-chain-website/pr-preview/pr-1118/blog/tags/push-notifications-token"},{"inline":true,"label":"Push Notifications Tge","permalink":"/push-chain-website/pr-preview/pr-1118/blog/tags/push-notifications-tge"},{"inline":true,"label":"Push Notifications Tokenomics","permalink":"/push-chain-website/pr-preview/pr-1118/blog/tags/push-notifications-tokenomics"},{"inline":true,"label":"Push Notifications Announcements","permalink":"/push-chain-website/pr-preview/pr-1118/blog/tags/push-notifications-announcements"}],"readingTime":2.6,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1118/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1118/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"announcing-the-epns-push-token-generation-event","title":"Announcing the EPNS $PUSH Token Generation Event","description":"Announcing the EPNS $PUSH Token Generation Event","authors":["push"],"image":"./cover-image.webp","text":"Since we announced our seed round last fall, we’ve been heads down continuing to build the world’s first decentralized notification protocol for Ethereum. We’re fast approaching mainnet launch, so we’re taking the time today to explain to the community what they can expect for the $PUSH token generation event (TGE).","tags":["Push Notifications Token","Push Notifications Tge","Push Notifications Tokenomics","Push Notifications Announcements"]},"unlisted":false,"prevItem":{"title":"EPNS Whitelist for Polkastarter is now OPEN!","permalink":"/push-chain-website/pr-preview/pr-1118/blog/epns-whitelist-for-polkastarter-is-now-open"},"nextItem":{"title":"PUSH Token Economics","permalink":"/push-chain-website/pr-preview/pr-1118/blog/push-token-economics"}}');

/***/ })

}]);