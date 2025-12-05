"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[96242],{

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

/***/ 28827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7dcb34d9bedc090c70c78c343d38f59c.webp");

/***/ }),

/***/ 315076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2020_12_29_it_is_a_wrap_for_2020_a_rewind_index_md_f25_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2020_12_29_it_is_a_wrap_for_2020_a_rewind_index_md_f25_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563453);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'it-is-a-wrap-for-2020-a-rewind',
	title: 'It’s A Wrap For 2020. A Rewind On All Things EPNS!!',
	description: 'It’s A Wrap For 2020. A Rewind On All Things EPNS!!',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: '2020 has been a year that would undoubtedly go down into the history books, for reasons that not only changed how the world runs but also how the world thinks and speaks. Despite the onset of the pandemic, we saw the crypto world booming, as DeFi started to explode and blockchain saw innovation at its height!',
	tags: [
		'Ethereum',
		'Annual Report',
		'Blockchain',
		'Roadmaps'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(434458)/* ["default"] */ .A),
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
      alt: "Cover Image of It’s A Wrap For 2020. A Rewind On All Things EPNS!!",
      src: (__webpack_require__(28827)/* ["default"] */ .A) + "",
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

/***/ 434458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7dcb34d9bedc090c70c78c343d38f59c.webp");

/***/ }),

/***/ 563453:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1151/blog/it-is-a-wrap-for-2020-a-rewind","source":"@site/blog/2020-12-29-it-is-a-wrap-for-2020-a-rewind/index.md","title":"It’s A Wrap For 2020. A Rewind On All Things EPNS!!","description":"It’s A Wrap For 2020. A Rewind On All Things EPNS!!","date":"2020-12-29T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1151/blog/tags/ethereum"},{"inline":true,"label":"Annual Report","permalink":"/push-chain-website/pr-preview/pr-1151/blog/tags/annual-report"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1151/blog/tags/blockchain"},{"inline":true,"label":"Roadmaps","permalink":"/push-chain-website/pr-preview/pr-1151/blog/tags/roadmaps"}],"readingTime":7.6,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1151/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1151/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"it-is-a-wrap-for-2020-a-rewind","title":"It’s A Wrap For 2020. A Rewind On All Things EPNS!!","description":"It’s A Wrap For 2020. A Rewind On All Things EPNS!!","authors":["push"],"image":"./cover-image.webp","text":"2020 has been a year that would undoubtedly go down into the history books, for reasons that not only changed how the world runs but also how the world thinks and speaks. Despite the onset of the pandemic, we saw the crypto world booming, as DeFi started to explode and blockchain saw innovation at its height!","tags":["Ethereum","Annual Report","Blockchain","Roadmaps"]},"unlisted":false,"prevItem":{"title":"EPNS IDEO CoLab Product Validation Day 2020 Recap!","permalink":"/push-chain-website/pr-preview/pr-1151/blog/epns-ideo-colab-product"},"nextItem":{"title":"A #GR8 Workshop — Gitcoin Hack","permalink":"/push-chain-website/pr-preview/pr-1151/blog/a-gr8-workshop—gitcoin-hack"}}');

/***/ })

}]);