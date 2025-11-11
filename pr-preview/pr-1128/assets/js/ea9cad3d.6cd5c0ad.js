"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[88047],{

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

/***/ 237058:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1128/blog/let-s-embark-on-a-mission-w-push-protocol","source":"@site/blog/2023-05-08-push-missions/index.md","title":"Let’s Embark on a Mission w. Push Protocol 🔔","description":"Cover image of Let’s Embark on a Mission w. Push Protocol 🔔","date":"2023-05-08T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1128/blog/tags/ethereum"},{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1128/blog/tags/push-notification"},{"inline":true,"label":"Rewards","permalink":"/push-chain-website/pr-preview/pr-1128/blog/tags/rewards"},{"inline":true,"label":"Community","permalink":"/push-chain-website/pr-preview/pr-1128/blog/tags/community"}],"readingTime":2.2,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1128/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1128/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"let-s-embark-on-a-mission-w-push-protocol","title":"Let’s Embark on a Mission w. Push Protocol 🔔","authors":["push"],"image":"./cover-image.webp","text":"The Web3 ecosystem is continuously evolving, and the Push Missions program is an innovative initiative designed to engage and empower our community to help shape its future.","tags":["Ethereum","Push Notification","Rewards","Community"]},"unlisted":false,"prevItem":{"title":"Unlocking the Full Potential of Push: A Look at $PUSH Token Utility🪙","permalink":"/push-chain-website/pr-preview/pr-1128/blog/unlocking-the-full-potential-of-push-a-look-at-push-token-utility"},"nextItem":{"title":"Demystifying PGP Encryption in Push🛡️","permalink":"/push-chain-website/pr-preview/pr-1128/blog/demystifying-pgp-encryption-in-push"}}');

/***/ }),

/***/ 347550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-03cec08abf5ddc9d80fb53b0f7389d01.webp");

/***/ }),

/***/ 527201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-03cec08abf5ddc9d80fb53b0f7389d01.webp");

/***/ }),

/***/ 988664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_05_08_push_missions_index_md_fe9_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_05_08_push_missions_index_md_fe9_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'let-s-embark-on-a-mission-w-push-protocol',
	title: 'Let’s Embark on a Mission w. Push Protocol 🔔',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'The Web3 ecosystem is continuously evolving, and the Push Missions program is an innovative initiative designed to engage and empower our community to help shape its future.',
	tags: [
		'Ethereum',
		'Push Notification',
		'Rewards',
		'Community'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(347550)/* ["default"] */ .A),
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
      alt: "Cover image of Let’s Embark on a Mission w. Push Protocol 🔔",
      src: (__webpack_require__(527201)/* ["default"] */ .A) + "",
      width: "1100",
      height: "619"
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