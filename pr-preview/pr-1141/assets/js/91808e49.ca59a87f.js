"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[68589],{

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

/***/ 158478:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1141/blog/epns-x-polychain-monsters-decentralized-communication-for-the-digital-collectible-ecosystem","source":"@site/blog/2022-07-21-epns-x-polychain-monsters-decentralized/index.md","title":"EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem","description":"Cover Image of EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem","date":"2022-07-21T00:00:00.000Z","tags":[{"inline":true,"label":"Nft","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/nft"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/ethereum"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/epnsproject"},{"inline":true,"label":"Nft Collectibles","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/nft-collectibles"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/blockchain"}],"readingTime":1.75,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1141/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1141/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-x-polychain-monsters-decentralized-communication-for-the-digital-collectible-ecosystem","title":"EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem","authors":["push"],"image":"./cover-image.png","text":"Polychain Monsters, the cross-chain digital collectible and gaming ecosystem, and EPNS team up in a pilot collaboration to bring decentralized push notifications for users. As such, Polychain Monsters will now be able to seamlessly interact with its users and keep them updated about the status of their various activities in the rapidly expanding “Polyverse”.","tags":["Nft","Ethereum","Epnsproject","Nft Collectibles","Blockchain"]},"unlisted":false,"prevItem":{"title":"Roadmap 2022 — Q2 Wrap Up","permalink":"/push-chain-website/pr-preview/pr-1141/blog/roadmap-2022-q2-wrap-up"},"nextItem":{"title":"Friday PUSH #19","permalink":"/push-chain-website/pr-preview/pr-1141/blog/friday-push-19"}}');

/***/ }),

/***/ 240760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_07_21_epns_x_polychain_monsters_decentralized_index_md_bae_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_07_21_epns_x_polychain_monsters_decentralized_index_md_bae_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158478);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-x-polychain-monsters-decentralized-communication-for-the-digital-collectible-ecosystem',
	title: 'EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem',
	authors: [
		'push'
	],
	image: './cover-image.png',
	text: 'Polychain Monsters, the cross-chain digital collectible and gaming ecosystem, and EPNS team up in a pilot collaboration to bring decentralized push notifications for users. As such, Polychain Monsters will now be able to seamlessly interact with its users and keep them updated about the status of their various activities in the rapidly expanding “Polyverse”.',
	tags: [
		'Nft',
		'Ethereum',
		'Epnsproject',
		'Nft Collectibles',
		'Blockchain'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(806037)/* ["default"] */ .A),
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
      alt: "Cover Image of EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem",
      src: (__webpack_require__(557304)/* ["default"] */ .A) + "",
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

/***/ 557304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8beb90af2da95dbbba46b77438e3d471.png");

/***/ }),

/***/ 806037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8beb90af2da95dbbba46b77438e3d471.png");

/***/ })

}]);