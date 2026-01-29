"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[12581],{

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

/***/ 350549
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a634ef4a90e5c3eb46f3c01f04f7c226.png");

/***/ },

/***/ 550684
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1173/blog/march-monthly-recap","source":"@site/blog/2023-04-05-march-monthly-recap/index.md","title":"March Monthly Recap🌄","description":"Cover image of March Monthly Recap🌄","date":"2023-04-05T00:00:00.000Z","tags":[{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1173/blog/tags/blockchain-technology"},{"inline":true,"label":"NewsLetter","permalink":"/push-chain-website/pr-preview/pr-1173/blog/tags/news-letter"},{"inline":true,"label":"Monthly Recap","permalink":"/push-chain-website/pr-preview/pr-1173/blog/tags/monthly-recap"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1173/blog/tags/web-3"}],"readingTime":4.5,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1173/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1173/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"march-monthly-recap","title":"March Monthly Recap🌄","authors":["push"],"image":"./cover-image.png","text":"Welcome to another exciting month at Push! As we reflect on the past few weeks, we are thrilled to share some of the major milestones we’ve achieved in the world of decentralized communication. From the introduction of exciting new Push Chat and Notification features to the highly anticipated launch of Push Chat Mobile, we’ve been working hard to enhance the Push Protocol. ","tags":["Blockchain Technology","NewsLetter","Monthly Recap","Web3"]},"unlisted":false,"prevItem":{"title":"Join us for the ETHGlobal Tokyo Hackathon🗼","permalink":"/push-chain-website/pr-preview/pr-1173/blog/join-us-for-the-eth-global-tokyo-hackathon"},"nextItem":{"title":"Enhancing Governance Through Web3 Communication Tools 🏛️","permalink":"/push-chain-website/pr-preview/pr-1173/blog/enhancing-governance-through-web3-communication-tools"}}');

/***/ },

/***/ 926700
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a634ef4a90e5c3eb46f3c01f04f7c226.png");

/***/ },

/***/ 943161
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_05_march_monthly_recap_index_md_c77_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_05_march_monthly_recap_index_md_c77_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(550684);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'march-monthly-recap',
	title: 'March Monthly Recap🌄',
	authors: [
		'push'
	],
	image: './cover-image.png',
	text: 'Welcome to another exciting month at Push! As we reflect on the past few weeks, we are thrilled to share some of the major milestones we’ve achieved in the world of decentralized communication. From the introduction of exciting new Push Chat and Notification features to the highly anticipated launch of Push Chat Mobile, we’ve been working hard to enhance the Push Protocol. ',
	tags: [
		'Blockchain Technology',
		'NewsLetter',
		'Monthly Recap',
		'Web3'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(926700)/* ["default"] */ .A),
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
      alt: "Cover image of March Monthly Recap🌄",
      src: (__webpack_require__(350549)/* ["default"] */ .A) + "",
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



/***/ }

}]);