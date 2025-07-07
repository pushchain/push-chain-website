"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[38472],{

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

/***/ 806344:
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
;// ./static/assets/website/docshub/WalletSVG.svg
var _path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9, _path0;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SvgWalletSvg = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 55,
    height: 56,
    viewBox: "0 0 55 56",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M37.062 14.206a6.77 6.77 0 1 0 0-13.54 6.77 6.77 0 0 0 0 13.54Z",
    fill: "#FFDD34"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M29.047 18.437a6.938 6.938 0 1 0 0-13.876 6.938 6.938 0 0 0 0 13.876Z",
    fill: "#FFF768"
  })), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M11.398 13.974H48.59l6.358 6.358v14.423l-21.246 4.123-26.317-4.123 4.013-20.781Z",
    fill: "#D548EC"
  })), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
    d: "M7.385 34.755h47.563v14.502l-6.358 6.358H11.398l-4.013-20.86Z",
    fill: "#B644C9"
  })), _path5 || (_path5 = /*#__PURE__*/react.createElement("path", {
    d: "M3.22 13.973h8.178v20.782l-4.013 3.539-4.165-3.54v-20.78Z",
    fill: "#B644C9"
  })), _path6 || (_path6 = /*#__PURE__*/react.createElement("path", {
    d: "M3.22 34.755h8.178v20.86H3.22v-20.86Z",
    fill: "#9B37AB"
  })), _path7 || (_path7 = /*#__PURE__*/react.createElement("path", {
    d: "M0 27.863h13.046c3.808 0 6.908 3.09 6.93 6.892l-6.948 3.484L0 34.755v-6.892Z",
    fill: "#F19BFF"
  })), _path8 || (_path8 = /*#__PURE__*/react.createElement("path", {
    d: "M0 34.755h19.976c0 .014 0-.013 0 0 0 3.822-3.108 6.97-6.93 6.97H0v-6.97Z",
    fill: "#D548EC"
  })), _path9 || (_path9 = /*#__PURE__*/react.createElement("path", {
    d: "M11.418 33.143h3.22v1.612l-1.389.893-1.831-.893v-1.612Z",
    fill: "#FFF768"
  })), _path0 || (_path0 = /*#__PURE__*/react.createElement("path", {
    d: "M11.418 34.755h3.22v1.608h-3.22v-1.608Z",
    fill: "#FFDD34"
  })));
};
/* harmony default export */ const WalletSVG = (SvgWalletSvg);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/theme/DocCard.js
/* eslint-disable @docusaurus/prefer-docusaurus-heading *//**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CardContainer(_ref){let{href,children}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:(0,useBaseUrl/* default */.A)(href),className:(0,clsx_m/* default */.A)('card padding--lg',styles_module.cardContainer),children:children});}function CardLayout(_ref2){let{href,icon,title,description}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsxs)(CardContainer,{href:(0,useBaseUrl/* default */.A)(href),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(WalletSVG,{className:styles_module.walletIcon}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.textDiv,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("h2",{className:(0,clsx_m/* default */.A)('text--truncate',styles_module.cardTitle),title:title,children:[icon," ",title]}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:(0,clsx_m/* default */.A)('text--truncate',styles_module.cardDescription),title:description,children:description})]})]});}function CardCategory(_ref3){var _item$description;let{item}=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{icon:"\uD83D\uDDC3\uFE0F",title:item.label,description:(_item$description=item.description)!==null&&_item$description!==void 0?_item$description:(0,Translate/* translate */.T)({message:'{count} items',id:'theme.docs.DocCard.categoryDescription',description:'The default description for a category card in the generated index about how many items this category includes'},{count:item.items.length})});}function CardLink(_ref4){var _item$docId,_item$description2;let{item}=_ref4;const doc=(0,docsUtils/* useDocById */.cC)((_item$docId=item.docId)!==null&&_item$docId!==void 0?_item$docId:undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{href:item.href,icon:'',title:item.label,description:(_item$description2=item.description)!==null&&_item$description2!==void 0?_item$description2:doc===null||doc===void 0?void 0:doc.description});}function DocCard(_ref5){let{item}=_ref5;switch(item.type){case'link':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLink,{item:item});case'category':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardCategory,{item:item});default:throw new Error(`unknown item type ${JSON.stringify(item)}`);}}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCardListForCurrentSidebarCategory(_ref){let{className}=_ref;const category=(0,docsUtils/* useCurrentSidebarCategory */.$S)();return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardList,{items:category.items,className:className});}function DocCardList(props){const{items,className}=props;if(!items){return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardListForCurrentSidebarCategory,{...props});}const filteredItems=(0,docsUtils/* filterDocCardListItems */.d1)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx/* default */.A)('row',className),children:filteredItems.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:"col col--6 margin-bottom--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocCard,{item:item})},index))});}

/***/ }),

/***/ 873884:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(806344);


const frontMatter = {
	id: 'rewards',
	title: 'Push Rewards',
	hide_title: true,
	displayed_sidebar: 'pushRewardsSidebar',
	slug: '/rewards',
	sidebar_position: 1,
	image: '/assets/docs/previews/rewards--push_rewards.png'
};
const contentTitle = 'Push Rewards';
const metadata = {
  "id": "rewards/rewards",
  "title": "Push Rewards",
  "description": "Welcome to the Push Rewards program! Select a season below:",
  "source": "@site/docs/rewards/101-rewards.mdx",
  "sourceDirName": "rewards",
  "slug": "/rewards",
  "permalink": "/push-chain-website/pr-preview/pr-1067/docs/rewards",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/pushchain/push-chain-website/blob/main/docs/rewards/101-rewards.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "id": "rewards",
    "title": "Push Rewards",
    "hide_title": true,
    "displayed_sidebar": "pushRewardsSidebar",
    "slug": "/rewards",
    "sidebar_position": 1,
    "image": "/assets/docs/previews/rewards--push_rewards.png"
  },
  "sidebar": "pushRewardsSidebar",
  "next": {
    "title": "Season 1",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/rewards/s1"
  }
};
const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "push-rewards",
      children: "Push Rewards"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Welcome to the Push Rewards program! Select a season below:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Each season brings exciting opportunities to earn rewards!"
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);