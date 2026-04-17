"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[92184],{

/***/ 663827
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_102_power_features_section_mdx_a48_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-102-power-features-section-mdx-a48.json
const site_docs_chain_01_tutorials_102_power_features_section_mdx_a48_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/docs-chain-tutorial-power-features-section","title":"Power Features","description":"Power Features Section | Tutorials | Push Chain Docs","source":"@site/docs/chain/01-tutorials/102-Power-Features-Section.mdx","sourceDirName":"chain/01-tutorials","slug":"/chain/tutorials/power-features","permalink":"/push-chain-website/pr-preview/pr-1212/docs/chain/tutorials/power-features","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/102-Power-Features-Section.mdx","tags":[],"version":"current","sidebarPosition":101,"frontMatter":{"id":"docs-chain-tutorial-power-features-section","title":"Power Features","hide_title":false,"slug":"./power-features","displayed_sidebar":"pushChainSidebar","sidebar_position":101,"image":"/assets/docs/previews/docs_chain_tutorial__section--power_features.png"},"sidebar":"pushChainSidebar","previous":{"title":"Mint Universal ERC-20 Tokens","permalink":"/push-chain-website/pr-preview/pr-1212/docs/chain/tutorials/basics/tutorial-mint-erc-20-tokens"},"next":{"title":"Batch Transactions (Multicall)","permalink":"/push-chain-website/pr-preview/pr-1212/docs/chain/tutorials/power-features/tutorial-batch-transactions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js + 1 modules
var DocCardList = __webpack_require__(819715);
;// ./docs/chain/01-tutorials/102-Power-Features-Section.mdx


const frontMatter = {
	id: 'docs-chain-tutorial-power-features-section',
	title: 'Power Features',
	hide_title: false,
	slug: './power-features',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 101,
	image: '/assets/docs/previews/docs_chain_tutorial__section--power_features.png'
};
const contentTitle = 'Power Features Section';

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Power Features Section | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "power-features-section",
        children: "Power Features Section"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Learn the power features of Push Chain and how to leverage them to build apps of the future."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(DocCardList/* default */.A, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ },

/***/ 819715
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocCardList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__(326972);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(328774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(721312);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
// EXTERNAL MODULE: ./src/theme/styles.module.css
var styles_module = __webpack_require__(764255);
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
function CardContainer(_ref){let{href,children}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:(0,useBaseUrl/* default */.Ay)(href),className:(0,clsx_m/* default */.A)('card padding--lg',styles_module/* default */.A.cardContainer),children:children});}function CardLayout(_ref2){let{href,icon,title,description}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)(CardContainer,{href:(0,useBaseUrl/* default */.Ay)(href),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.textDiv,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("h2",{className:(0,clsx_m/* default */.A)('text--truncate',styles_module/* default */.A.cardTitle),title:title,children:[icon," ",title]}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:(0,clsx_m/* default */.A)('text--truncate',styles_module/* default */.A.cardDescription),title:description,children:description})]})});}function CardCategory(_ref3){var _item$description;let{item}=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{icon:"\uD83D\uDDC3\uFE0F",href:item.href||'',title:item.label,description:(_item$description=item.description)!==null&&_item$description!==void 0?_item$description:(0,Translate/* translate */.T)({message:'{count} items',id:'theme.docs.DocCard.categoryDescription',description:'The default description for a category card in the generated index about how many items this category includes'},{count:item.items.length})});}function CardLink(_ref4){var _item$docId,_item$description2;let{item}=_ref4;const doc=(0,docsUtils/* useDocById */.cC)((_item$docId=item.docId)!==null&&_item$docId!==void 0?_item$docId:undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{href:item.href,icon:'',title:item.label,description:(_item$description2=item.description)!==null&&_item$description2!==void 0?_item$description2:doc===null||doc===void 0?void 0:doc.description});}function DocCard(_ref5){let{item}=_ref5;switch(item.type){case'link':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLink,{item:item});case'category':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardCategory,{item:item});default:throw new Error(`unknown item type ${JSON.stringify(item)}`);}}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/styles.module.css
var DocCardList_styles_module = __webpack_require__(36918);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCardListForCurrentSidebarCategory(_ref){let{className}=_ref;const items=(0,docsUtils/* useCurrentSidebarSiblings */.a4)();return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardList,{items:items,className:className});}function DocCardListItem(_ref2){let{item}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:(0,clsx/* default */.A)(DocCardList_styles_module/* default */.A.docCardListItem,'col col--6'),children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocCard,{item:item})});}function DocCardList(props){const{items,className}=props;if(!items){return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardListForCurrentSidebarCategory,{...props});}const filteredItems=(0,docsUtils/* filterDocCardListItems */.d1)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx/* default */.A)('row',className),children:filteredItems.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardListItem,{item:item},index))});}

/***/ },

/***/ 36918
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"docCardListItem":"docCardListItem_W1sv"});
    if(true) {
      (function() {
        var localsJsonString = "{\"docCardListItem\":\"docCardListItem_W1sv\"}";
        // 1776395006436
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 764255
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"cardContainer":"cardContainer_VPOR","walletIcon":"walletIcon_UaY0","textDiv":"textDiv_dQrk","cardTitle":"cardTitle_deVx","cardDescription":"cardDescription_crxe"});
    if(true) {
      (function() {
        var localsJsonString = "{\"cardContainer\":\"cardContainer_VPOR\",\"walletIcon\":\"walletIcon_UaY0\",\"textDiv\":\"textDiv_dQrk\",\"cardTitle\":\"cardTitle_deVx\",\"cardDescription\":\"cardDescription_crxe\"}";
        // 1776395012575
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }

}]);