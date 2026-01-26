"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[8967],{

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

/***/ 101459
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_01_07_epns_ideo_colab_product_index_md_8cc_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_01_07_epns_ideo_colab_product_index_md_8cc_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228311);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-ideo-colab-product',
	title: 'EPNS IDEO CoLab Product Validation Day 2020 Recap!',
	description: 'EPNS IDEO CoLab Product Validation Day 2020 Recap!',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Ethereum Push Notification Service(EPNS) was selected for IDEO CoLab Ventures’ Product Validation Day (PVD) on June 18, 2020. Out of the 120+ teams who applied, thrilled to share that we were accepted to join the prestigious design-thinking event!',
	tags: [
		'Defi',
		'Design Thinking',
		'Ideo',
		'Design Research',
		'Blog'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(110683)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS IDEO CoLab Product Validation Day 2020 Recap!",
      src: (__webpack_require__(237008)/* ["default"] */ .A) + "",
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

/***/ 110683
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cdd5ff6dc1685339b15fda2cf147ac41.webp");

/***/ },

/***/ 228311
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1171/blog/epns-ideo-colab-product","source":"@site/blog/2021-01-07-epns-ideo-colab-product/index.md","title":"EPNS IDEO CoLab Product Validation Day 2020 Recap!","description":"EPNS IDEO CoLab Product Validation Day 2020 Recap!","date":"2021-01-07T00:00:00.000Z","tags":[{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/defi"},{"inline":true,"label":"Design Thinking","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/design-thinking"},{"inline":true,"label":"Ideo","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/ideo"},{"inline":true,"label":"Design Research","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/design-research"},{"inline":true,"label":"Blog","permalink":"/push-chain-website/pr-preview/pr-1171/blog/tags/blog"}],"readingTime":1.5,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1171/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1171/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-ideo-colab-product","title":"EPNS IDEO CoLab Product Validation Day 2020 Recap!","description":"EPNS IDEO CoLab Product Validation Day 2020 Recap!","authors":["push"],"image":"./cover-image.webp","text":"Ethereum Push Notification Service(EPNS) was selected for IDEO CoLab Ventures’ Product Validation Day (PVD) on June 18, 2020. Out of the 120+ teams who applied, thrilled to share that we were accepted to join the prestigious design-thinking event!","tags":["Defi","Design Thinking","Ideo","Design Research","Blog"]},"unlisted":false,"prevItem":{"title":"EPNS Gitcoin #GR8 Hack 🏗 ️Bounties Winner Announcement!","permalink":"/push-chain-website/pr-preview/pr-1171/blog/epns-gitcoin-gr8-hack"},"nextItem":{"title":"It’s A Wrap For 2020. A Rewind On All Things EPNS!!","permalink":"/push-chain-website/pr-preview/pr-1171/blog/it-is-a-wrap-for-2020-a-rewind"}}');

/***/ },

/***/ 237008
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cdd5ff6dc1685339b15fda2cf147ac41.webp");

/***/ }

}]);