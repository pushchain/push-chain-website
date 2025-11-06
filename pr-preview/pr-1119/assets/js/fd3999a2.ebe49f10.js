"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[55682],{

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

/***/ 51360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-e9b379d6d266d806f85aa1f4fef626c9.webp");

/***/ }),

/***/ 371659:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1119/blog/push-and-wherever-team-up-to-bring-web3-communication-tools-to-dapps","source":"@site/blog/2023-02-02-push-and-wherever-team-up/index.md","title":"Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️","description":"Cover image of Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️","date":"2023-02-02T00:00:00.000Z","tags":[{"inline":true,"label":"Frensofpush","permalink":"/push-chain-website/pr-preview/pr-1119/blog/tags/frensofpush"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1119/blog/tags/web-3"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1119/blog/tags/blockchain"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1119/blog/tags/blockchain-technology"},{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1119/blog/tags/push-notification"}],"readingTime":3.16,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1119/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1119/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-and-wherever-team-up-to-bring-web3-communication-tools-to-dapps","title":"Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️","authors":["push"],"image":"./cover-image.webp","text":"This week, our featured fren is a wallet-first customer communication platform, Wherever 😊 Imagine wallet-to-wallet communication on dapps that protects users’ data and privacy, all the while ensuring they get the best possible experience. That’s Wherever for you. The platform enables web3 dapps to communicate with wallets directly, no matter where they are. Communication wherever, literally!","tags":["Frensofpush","Web3","Blockchain","Blockchain Technology","Push Notification"]},"unlisted":false,"prevItem":{"title":"January Monthly Recap❄️","permalink":"/push-chain-website/pr-preview/pr-1119/blog/january-monthly-recap"},"nextItem":{"title":"Getting Started With Push SDK REST API⚙️","permalink":"/push-chain-website/pr-preview/pr-1119/blog/getting-started-with-push-sdk-rest-api"}}');

/***/ }),

/***/ 392343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-e9b379d6d266d806f85aa1f4fef626c9.webp");

/***/ }),

/***/ 498178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_02_02_push_and_wherever_team_up_index_md_ff9_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_02_02_push_and_wherever_team_up_index_md_ff9_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(371659);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-and-wherever-team-up-to-bring-web3-communication-tools-to-dapps',
	title: 'Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'This week, our featured fren is a wallet-first customer communication platform, Wherever 😊 Imagine wallet-to-wallet communication on dapps that protects users’ data and privacy, all the while ensuring they get the best possible experience. That’s Wherever for you. The platform enables web3 dapps to communicate with wallets directly, no matter where they are. Communication wherever, literally!',
	tags: [
		'Frensofpush',
		'Web3',
		'Blockchain',
		'Blockchain Technology',
		'Push Notification'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(51360)/* ["default"] */ .A),
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
      alt: "Cover image of Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️",
      src: (__webpack_require__(392343)/* ["default"] */ .A) + "",
      width: "720",
      height: "405"
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