"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[9049],{

/***/ 24625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2025_09_18_project_gud_hackathon_index_md_2c7_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2025_09_18_project_gud_hackathon_index_md_2c7_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271008);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'announcing-project-gud-go-universal-and-deploy',
	title: 'Announcing Project G.U.D — Go Universal & Deploy on Push Chain, Win $5,000',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Announcing Project G.U.D — Go Universal & Deploy on Push Chain, Win $5,000',
	text: 'Project G.U.D is live! A 3-week deploython where developers can port EVM apps to Push Chain, make them universal, and compete for $5,000 in prizes. Build once, reach all chains.',
	tags: [
		'Programs',
		'Product'
	],
	twitterId: '1968676767419572683'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(879937)/* ["default"] */ .A),
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
      alt: "Announcing Project G.U.D — Go Universal &amp; Deploy on Push Chain, Win $5,000",
      src: (__webpack_require__(621650)/* ["default"] */ .A) + "",
      width: "1600",
      height: "900"
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

/***/ 879937
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7533b37f21ebcd1fd34ee7c6659a4135.webp");

/***/ },

/***/ 621650
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7533b37f21ebcd1fd34ee7c6659a4135.webp");

/***/ },

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

/***/ 271008
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1189/blog/announcing-project-gud-go-universal-and-deploy","source":"@site/blog/2025-09-18-project-gud-hackathon/index.md","title":"Announcing Project G.U.D — Go Universal & Deploy on Push Chain, Win $5,000","description":"Announcing Project G.U.D — Go Universal & Deploy on Push Chain, Win $5,000","date":"2025-09-18T00:00:00.000Z","tags":[{"inline":true,"label":"Programs","permalink":"/push-chain-website/pr-preview/pr-1189/blog/tags/programs"},{"inline":true,"label":"Product","permalink":"/push-chain-website/pr-preview/pr-1189/blog/tags/product"}],"readingTime":2.86,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1189/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1189/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"announcing-project-gud-go-universal-and-deploy","title":"Announcing Project G.U.D — Go Universal & Deploy on Push Chain, Win $5,000","authors":["push"],"image":"./cover-image.webp","description":"Announcing Project G.U.D — Go Universal & Deploy on Push Chain, Win $5,000","text":"Project G.U.D is live! A 3-week deploython where developers can port EVM apps to Push Chain, make them universal, and compete for $5,000 in prizes. Build once, reach all chains.","tags":["Programs","Product"],"twitterId":"1968676767419572683"},"unlisted":false,"prevItem":{"title":"Apps of the Future - Building without the Chaos","permalink":"/push-chain-website/pr-preview/pr-1189/blog/apps-of-the-future-building-without-the-chaos"},"nextItem":{"title":"Donut Testnet Closed Beta is Now Live!","permalink":"/push-chain-website/pr-preview/pr-1189/blog/donut-testnet-closed-beta-is-now-live"}}');

/***/ }

}]);