"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[11023],{

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

/***/ 334837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocCardList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(884142);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(175489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(721312);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
;// ./src/theme/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"cardContainer":"cardContainer_VPOR","walletIcon":"walletIcon_UaY0","textDiv":"textDiv_dQrk","cardTitle":"cardTitle_deVx","cardDescription":"cardDescription_crxe"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(486025);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/theme/DocCard.js
/* eslint-disable @docusaurus/prefer-docusaurus-heading *//**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// import WalletSvg from '../../static/assets/website/docshub/WalletSVG.svg';
function CardContainer(_ref){let{href,children}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:(0,useBaseUrl/* default */.A)(href),className:(0,clsx_m/* default */.A)('card padding--lg',styles_module.cardContainer),children:children});}function CardLayout(_ref2){let{href,icon,title,description}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)(CardContainer,{href:(0,useBaseUrl/* default */.A)(href),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.textDiv,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("h2",{className:(0,clsx_m/* default */.A)('text--truncate',styles_module.cardTitle),title:title,children:[icon," ",title]}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:(0,clsx_m/* default */.A)('text--truncate',styles_module.cardDescription),title:description,children:description})]})});}function CardCategory(_ref3){var _item$description;let{item}=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{icon:"\uD83D\uDDC3\uFE0F",href:item.href||'',title:item.label,description:(_item$description=item.description)!==null&&_item$description!==void 0?_item$description:(0,Translate/* translate */.T)({message:'{count} items',id:'theme.docs.DocCard.categoryDescription',description:'The default description for a category card in the generated index about how many items this category includes'},{count:item.items.length})});}function CardLink(_ref4){var _item$docId,_item$description2;let{item}=_ref4;const doc=(0,docsUtils/* useDocById */.cC)((_item$docId=item.docId)!==null&&_item$docId!==void 0?_item$docId:undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{href:item.href,icon:'',title:item.label,description:(_item$description2=item.description)!==null&&_item$description2!==void 0?_item$description2:doc===null||doc===void 0?void 0:doc.description});}function DocCard(_ref5){let{item}=_ref5;switch(item.type){case'link':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLink,{item:item});case'category':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardCategory,{item:item});default:throw new Error(`unknown item type ${JSON.stringify(item)}`);}}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCardListForCurrentSidebarCategory(_ref){let{className}=_ref;const category=(0,docsUtils/* useCurrentSidebarCategory */.$S)();return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardList,{items:category.items,className:className});}function DocCardList(props){const{items,className}=props;if(!items){return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardListForCurrentSidebarCategory,{...props});}const filteredItems=(0,docsUtils/* filterDocCardListItems */.d1)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx/* default */.A)('row',className),children:filteredItems.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:"col col--6 margin-bottom--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocCard,{item:item})},index))});}

/***/ }),

/***/ 914266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(334837);


const frontMatter = {
	id: 'docs-chain-ui-kit-customizations-section',
	title: 'Customizations',
	hide_title: false,
	slug: './customizations',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 101,
	image: '/assets/docs/previews/docs_chain_ui_kit__section--customizations.png'
};
const contentTitle = 'Customizations Section';
const metadata = {
  "id": "chain/ui-kit/docs-chain-ui-kit-customizations-section",
  "title": "Customizations",
  "description": "Customizations Section | UI Kit | Push Chain Docs",
  "source": "@site/docs/chain/04-ui-kit/101-Customizations.mdx",
  "sourceDirName": "chain/04-ui-kit",
  "slug": "/chain/ui-kit/customizations",
  "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/customizations",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-ui-kit/101-Customizations.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 101,
  "frontMatter": {
    "id": "docs-chain-ui-kit-customizations-section",
    "title": "Customizations",
    "hide_title": false,
    "slug": "./customizations",
    "displayed_sidebar": "pushChainSidebar",
    "sidebar_position": 101,
    "image": "/assets/docs/previews/docs_chain_ui_kit__section--customizations.png"
  },
  "sidebar": "pushChainSidebar",
  "previous": {
    "title": "Integrate Push Universal Wallet",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/integrate-push-universal-wallet"
  },
  "next": {
    "title": "Push Universal Wallet Provider",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/customizations/push-universal-wallet-provider"
  }
};
const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: "Customizations Section | UI Kit | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "customizations-section",
      children: "Customizations Section"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This section covers all the components of the Push Chain UI Kit."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ })

}]);