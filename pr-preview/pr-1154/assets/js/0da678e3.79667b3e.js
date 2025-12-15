"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[89851],{

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

/***/ 30501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d4038b00a8858ea58e8de0bcc4b2a57e.webp");

/***/ }),

/***/ 110233:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1154/blog/were-still-pushing-a-deeper-look-into-push-chat","source":"@site/blog/2022-12-21-deeper-look-into-push-chat/index.md","title":"We’re Still Pushing: A Deeper Look Into Push Chat","description":"Cover image of We’re Still Pushing: A Deeper Look Into Push Chat","date":"2022-12-21T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/web-3"},{"inline":true,"label":"Developer","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/developer"},{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/push-notification"},{"inline":true,"label":"PushChat","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/push-chat"},{"inline":true,"label":"Messaging","permalink":"/push-chain-website/pr-preview/pr-1154/blog/tags/messaging"}],"readingTime":6.32,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1154/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1154/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"were-still-pushing-a-deeper-look-into-push-chat","title":"We’re Still Pushing: A Deeper Look Into Push Chat","authors":["push"],"image":"./cover-image.webp","text":"Launched in early October, Push Chat is providing secure and instant communication for all by connecting users and dapps across web3.","tags":["Web3","Developer","Push Notification","PushChat","Messaging"]},"unlisted":false,"prevItem":{"title":"Push Helps Mover — the First Crypto Debit Card, to Power Communication on the Platform","permalink":"/push-chain-website/pr-preview/pr-1154/blog/push-helps-mover-the-first-crypto-debit-card-to-power-communication-on-the-platform"},"nextItem":{"title":"Push and Tollan Worlds Partner to Level Up Communication With Gamers","permalink":"/push-chain-website/pr-preview/pr-1154/blog/push-and-tollan-worlds-partner-to-level-up-communication-with-gamers"}}');

/***/ }),

/***/ 396082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_12_21_deeper_look_into_push_chat_index_md_102_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_12_21_deeper_look_into_push_chat_index_md_102_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110233);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'were-still-pushing-a-deeper-look-into-push-chat',
	title: 'We’re Still Pushing: A Deeper Look Into Push Chat',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Launched in early October, Push Chat is providing secure and instant communication for all by connecting users and dapps across web3.',
	tags: [
		'Web3',
		'Developer',
		'Push Notification',
		'PushChat',
		'Messaging'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(679496)/* ["default"] */ .A),
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
      alt: "Cover image of We’re Still Pushing: A Deeper Look Into Push Chat",
      src: (__webpack_require__(30501)/* ["default"] */ .A) + "",
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

/***/ 679496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d4038b00a8858ea58e8de0bcc4b2a57e.webp");

/***/ })

}]);