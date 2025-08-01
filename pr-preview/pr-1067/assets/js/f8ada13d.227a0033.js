"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[40801],{

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

/***/ 119365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){let{children,hidden,className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}

/***/ }),

/***/ 411470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(823104);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(956347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(300205);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(757485);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(231682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(289466);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){var _React$Children$toArr,_React$Children$toArr2;return(_React$Children$toArr=(_React$Children$toArr2=react.Children.toArray(children).filter(child=>child!=='\n').map(child=>{if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);}))===null||_React$Children$toArr2===void 0?void 0:_React$Children$toArr2.filter(Boolean))!==null&&_React$Children$toArr!==void 0?_React$Children$toArr:[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.X)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let{className,block,selectedValue,selectValue,tabValues}=_ref;const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>tabRefs.push(tabControl),onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value},value);})});}function TabContent(_ref3){let{lazy,children,selectedValue}=_ref3;const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:'margin-top--md'});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,{...props,...tabs}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,{...props,...tabs})]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,{...props,children:sanitizeTabsChildren(props.children)},String(isBrowser));}

/***/ }),

/***/ 574029:
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
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(411470);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(119365);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(113490);
/* harmony import */ var _site_src_components_IFrameModal_IFrameModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(602999);


const frontMatter = {
	id: 'docs-chain-tutorials-mint-erc-20-tokens',
	title: 'Mint Universal ERC-20 Tokens',
	hide_title: false,
	slug: './tutorial-mint-erc-20-tokens',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_chain_tutorials_mint_erc_20_tokens--mint_universal_erc-20_tokens.png'
};
const contentTitle = undefined;
const metadata = {
  "id": "chain/tutorials/docs-chain-tutorials-mint-erc-20-tokens",
  "title": "Mint Universal ERC-20 Tokens",
  "description": "Mint Universal ERC-20 Tokens | Tutorials | Push Chain Docs",
  "source": "@site/docs/chain/01-tutorials/03-Mint-ERC-20-Tokens.mdx",
  "sourceDirName": "chain/01-tutorials",
  "slug": "/chain/tutorials/tutorial-mint-erc-20-tokens",
  "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-mint-erc-20-tokens",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/03-Mint-ERC-20-Tokens.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "id": "docs-chain-tutorials-mint-erc-20-tokens",
    "title": "Mint Universal ERC-20 Tokens",
    "hide_title": false,
    "slug": "./tutorial-mint-erc-20-tokens",
    "displayed_sidebar": "pushChainSidebar",
    "sidebar_position": 2,
    "image": "/assets/docs/previews/docs_chain_tutorials_mint_erc_20_tokens--mint_universal_erc-20_tokens.png"
  },
  "sidebar": "pushChainSidebar",
  "previous": {
    "title": "Universal Counter App",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-counter"
  },
  "next": {
    "title": "Setup",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/setup"
  }
};
const assets = {

};







const toc = [{
  "value": "Tutorial Overview",
  "id": "tutorial-overview",
  "level": 2
}, {
  "value": "Part 1: Smart Contract Development &amp; Deployment",
  "id": "part-1-smart-contract-development--deployment",
  "level": 3
}, {
  "value": "Part 2: Building the Frontend UI",
  "id": "part-2-building-the-frontend-ui",
  "level": 3
}, {
  "value": "Part 1: Deploying a standard ERC-20 token to Push Chain’s testnet with Hardhat",
  "id": "part-1-deploying-a-standard-erc-20-token-to-push-chains-testnet-with-hardhat",
  "level": 2
}, {
  "value": "1.1. Setting up Hardhat",
  "id": "11-setting-up-hardhat",
  "level": 3
}, {
  "value": "1.2. Creating a new Hardhat project",
  "id": "12-creating-a-new-hardhat-project",
  "level": 3
}, {
  "value": "1.3. Configuring Hardhat",
  "id": "13-configuring-hardhat",
  "level": 3
}, {
  "value": "1.4. Writing the ERC-20 Contract",
  "id": "14-writing-the-erc-20-contract",
  "level": 3
}, {
  "value": "1.5. Compiling the Contract",
  "id": "15-compiling-the-contract",
  "level": 3
}, {
  "value": "1.6. Deploying the Contract to Push Chain",
  "id": "16-deploying-the-contract-to-push-chain",
  "level": 3
}, {
  "value": "Part 2: Building the Frontend UI",
  "id": "part-2-building-the-frontend-ui-1",
  "level": 2
}, {
  "value": "2.1. Setting up Vite + React + TypeScript frontend",
  "id": "21-setting-up-vite--react--typescript-frontend",
  "level": 3
}, {
  "value": "2.2. Installing <code>@pushchain/ui-kit</code>",
  "id": "22-installing-pushchainui-kit",
  "level": 3
}, {
  "value": "2.3. Setting up the Push Chain Wallet",
  "id": "23-setting-up-the-push-chain-wallet",
  "level": 3
}, {
  "value": "2.4. Creating the Application Component",
  "id": "24-creating-the-application-component",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: "Mint Universal ERC-20 Tokens | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Welcome to this developer-focused tutorial on building a truly universal ERC-20 token on Push Chain. We’ll walk through:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Deploying a standard ERC-20 token to Push Chain’s testnet with Hardhat"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Spinning up a minimal Vite + React + TypeScript frontend using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "@pushchain/ui-kit"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Fetching ERC-20 token balance from Push Chain"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Minting tokens from Push Chain or Sepolia with Universal Transaction"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you’ve shipped ERC-20s before, you’ll recognize the pieces—but this setup makes cross-chain-style interactions seamless. Let’s dive in 🤿."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "tutorial-overview",
      children: "Tutorial Overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This tutorial is divided into two main parts:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "part-1-smart-contract-development--deployment",
      children: "Part 1: Smart Contract Development & Deployment"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We'll deploy a standard ERC-20 token (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyToken"
      }), ") to Push Chain's testnet using Hardhat. This includes:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Setting up the development environment"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Writing and compiling the smart contract"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Deploying to Push Chain testnet"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "part-2-building-the-frontend-ui",
      children: "Part 2: Building the Frontend UI"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We'll create a React application using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@pushchain/ui-kit"
      }), " to interact with our deployed contract. This includes:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Setting up a Vite + React + TypeScript frontend"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Integrating Push Chain wallet functionality"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Calling the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "balanceOf"
        }), " function from the contract on Push Chain"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Implementing cross-chain transaction capabilities"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "part-1-deploying-a-standard-erc-20-token-to-push-chains-testnet-with-hardhat",
      children: "Part 1: Deploying a standard ERC-20 token to Push Chain’s testnet with Hardhat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Note:"
        }), " For a deeper dive on how to configure Hardhat to Push Chain, please refer to this page ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/push-chain-website/pr-preview/pr-1067/docs/chain/setup/smart-contract-environment/configure-hardhat",
          children: "Configure Hardhat"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "11-setting-up-hardhat",
      children: "1.1. Setting up Hardhat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "First, let’s set up a new Hardhat project."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "mkdir myToken\ncd myToken\nnpm init -y\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Install Hardhat and required dependencies:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install --save-dev \\\n  hardhat \\\n  @nomicfoundation/hardhat-toolbox \\\n  @nomicfoundation/hardhat-verify \\\n  dotenv \\\n  @openzeppelin/contracts\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "12-creating-a-new-hardhat-project",
      children: "1.2. Creating a new Hardhat project"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Initialize a new Hardhat project:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npx hardhat init\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Create a JavaScript project"
      }), " and press Enter."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "13-configuring-hardhat",
      children: "1.3. Configuring Hardhat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Configure Hardhat to use Push Chain by editing the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hardhat.config.js"
      }), " file:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javaScript",
        children: "require('@nomicfoundation/hardhat-toolbox');\nrequire('@nomicfoundation/hardhat-verify');\nrequire('dotenv').config();\n\n/** @type import('hardhat/config').HardhatUserConfig */\nmodule.exports = {\n  solidity: {\n    version: '0.8.22',\n    settings: {\n      optimizer: {\n        enabled: true,\n        runs: 200,\n      },\n    },\n  },\n  networks: {\n    push_testnet: {\n      url: 'https://evm.rpc-testnet-donut-node1.push.org/',\n      chainId: 42101,\n      accounts: [process.env.PRIVATE_KEY],\n    },\n    push_testnet_alt: {\n      url: 'https://evm.rpc-testnet-donut-node2.push.org/',\n      chainId: 42101,\n      accounts: [process.env.PRIVATE_KEY],\n    },\n  },\n  etherscan: {\n    apiKey: {\n      // Blockscout doesn't require an actual API key, any non-empty string will work\n      push_testnet: 'blockscout',\n    },\n    customChains: [\n      {\n        network: 'push_testnet',\n        chainId: 42101,\n        urls: {\n          apiURL: 'https://donut.push.network/api/v2/verifyContract',\n          browserURL: 'https://donut.push.network/',\n        },\n      },\n    ],\n  },\n  sourcify: {\n    // Disable sourcify for manual verification\n    enabled: false,\n  },\n  paths: {\n    sources: './contracts',\n    tests: './test',\n    cache: './cache',\n    artifacts: './artifacts',\n  },\n  mocha: {\n    timeout: 40000,\n  },\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "14-writing-the-erc-20-contract",
      children: "1.4. Writing the ERC-20 Contract"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Create a new file ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "contracts/MyToken.sol"
      }), " with the following content:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity 0.8.22;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\n\n/**\n * @title MyToken\n * @dev A simple ERC20 token for demonstration on PUSH CHAIN\n */\ncontract MyToken is ERC20 {\n    constructor() ERC20(\"MyToken\", \"MT\") {\n        _mint(msg.sender, 1000 * 10 ** 18);\n    }\n\n    /**\n     * @dev Returns the number of decimals used to get its user representation.\n     */\n    function decimals() public view virtual override returns (uint8) {\n        return 18;\n    }\n\n    /**\n     * @dev Allows anyone to mint new tokens\n     * @param to The address that will receive the minted tokens.\n     * @param amount The amount of tokens to mint.\n     */\n    function mint(address to, uint256 amount) public {\n        _mint(to, amount);\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "15-compiling-the-contract",
      children: "1.5. Compiling the Contract"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Compile the contract with:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npx hardhat compile\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "16-deploying-the-contract-to-push-chain",
      children: "1.6. Deploying the Contract to Push Chain"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".env"
      }), " file in the root directory and add your private key that you will use to deploy the contract to Push Chain.  If you need ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PC"
      }), " tokens to deploy the contract, you can get them from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://faucet.push.org/",
        children: "Push Chain Faucet"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Add the following to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".env"
      }), " file:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "PRIVATE_KEY=your_private_key\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Then create a deployment script at scripts/deploy.js:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "const hre = require('hardhat');\n\nasync function main() {\n  console.log('Deploying MyToken to PUSH Chain...');\n\n  const myToken = await hre.ethers.deployContract('MyToken');\n  await myToken.waitForDeployment();\n\n  const address = await myToken.getAddress();\n  console.log(`MyToken deployed to: ${address}`);\n}\n\n// We recommend this pattern to be able to use async/await everywhere\n// and properly handle errors.\nmain().catch((error) => {\n  console.error(error);\n  process.exitCode = 1;\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now, deploy the contract to Push Chain:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npx hardhat run scripts/deploy.js --network push_testnet\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After the deployment is complete, you will see the contract address in the terminal."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "Deploying MyToken to PUSH Chain...\nMyToken deployed to: 0x0B86e252B035027028C0d4D3B136d80Da4C98Ec1\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "part-2-building-the-frontend-ui-1",
      children: "Part 2: Building the Frontend UI"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Note:"
        }), " To learn more about how to integrate Push Universal Wallet, please refer to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/integrate-push-universal-wallet",
          children: "Integrate Push Universal Wallet"
        }), " page."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "21-setting-up-vite--react--typescript-frontend",
      children: "2.1. Setting up Vite + React + TypeScript frontend"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Create a new directory for the frontend and install the necessary dependencies:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npm create vite@latest my-react-ts-app -- --template react-ts\ncd my-react-ts-app\nnpm install\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "22-installing-pushchainui-kit",
      children: ["2.2. Installing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@pushchain/ui-kit"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Install ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@pushchain/ui-kit"
      }), " in the frontend directory and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ethers"
      }), " that we'll use to interact with the Push Chain network:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @pushchain/ui-kit ethers\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "23-setting-up-the-push-chain-wallet",
      children: "2.3. Setting up the Push Chain Wallet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To use the Push Universal Wallet in your application, you need to wrap your app with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PushUniversalWalletProvider"
      }), " component. This provider makes the wallet functionality available throughout your application."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Here's how to set it up in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "main.tsx"
      }), " file:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport './index.css';\nimport App from './App.tsx';\nimport { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';\n\nconst walletConfig = {\n  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n};\n\ncreateRoot(document.getElementById('root')!).render(\n  <StrictMode>\n    <PushUniversalWalletProvider config={walletConfig}>\n      <App />\n    </PushUniversalWalletProvider>\n  </StrictMode>\n);\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PushUniversalWalletProvider"
      }), " component requires a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "config"
      }), " prop that specifies the network configuration. In this example, we're using the Push Chain testnet."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "24-creating-the-application-component",
      children: "2.4. Creating the Application Component"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Open the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App.tsx"
      }), " and add the necessary imports:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useState } from 'react';\nimport { ethers } from 'ethers';\nimport { PushChain } from '@pushchain/core';\nimport { PushUniversalAccountButton, usePushWalletContext, usePushChainClient, PushUI } from '@pushchain/ui-kit';\nimport './App.css';\nimport React from 'react';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Let's add the required hooks to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App"
      }), " component:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const { connectionStatus } = usePushWalletContext();\nconst { pushChainClient } = usePushChainClient();\nconst [isLoading, setIsLoading] = useState(false);\nconst [txHash, setTxHash] = useState('');\nconst [tokenBalance, setTokenBalance] = useState<string>('0');\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "usePushChainClient"
      }), " hook provides the Push Chain client instance, which is used to interact with the Push Chain network."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "usePushWalletContext"
      }), " hook provides the connection status and the Push Universal Wallet instance."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now, on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App"
      }), " component, we'll use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ethers"
      }), " to fetch the ERC-20 token balance from our deployed contract on Push Chain. We'll need:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Contract ABI"
        }), ": This comes from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "artifacts/contracts/MyToken.sol/MyToken.json"
        }), " file that was generated when we compiled our contract with Hardhat"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Contract Address"
        }), ": This is the address we received after deploying our contract to Push Chain (e.g., ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "0x0B86e252B035027028C0d4D3B136d80Da4C98Ec1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Add the following code to fetch the ERC-20 token balance from Push Chain:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "// Function to get token balance\nconst getTokenBalance = async () => {\n  if (!pushChainClient) return;\n\n  try {\n    const userAddress = pushChainClient.universal.account;\n    console.log('Fetching balance for address:', userAddress);\n\n    // Create a read-only provider using the Push Chaintestnet RPC URL\n    const provider = new ethers.JsonRpcProvider('https://evm.rpc-testnet-donut-node1.push.org/');\n\n    // Create contract interface\n    const contract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, TOKEN_ABI, provider);\n\n    // Call balanceOf directly\n    const balance = await contract.balanceOf(userAddress);\n    console.log('Raw balance response:', balance);\n\n    // Convert balance from wei to ether and format it\n    const formattedBalance = ethers.formatUnits(balance, 18);\n    setTokenBalance(formattedBalance);\n  } catch (err) {\n    console.error('Error fetching balance:', err);\n  }\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now, let's create the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "mint"
      }), " function to mint tokens from Push Chain or Sepolia with Universal Transaction."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For enconding the transaction data, we'll use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "encodeTxData"
      }), " function from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PushChain"
      }), " library. This function takes the ABI of the contract, the function name, and the arguments for the function."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "// Function to encode transaction data for minting\nconst getMintTxData = () => {\n  if (!pushChainClient) return null;\n\n  const amount = ethers.parseUnits('1', 18); // Mint 1 token (with 18 decimals)\n  const userAddress = pushChainClient.universal.account;\n\n  return PushChain.utils.helpers.encodeTxData({\n    abi: TOKEN_ABI,\n    functionName: 'mint',\n    args: [userAddress, amount],\n  }) as `0x${string}`;\n};\n\n// Handle mint transaction\nconst handleMint = async () => {\n  if (pushChainClient) {\n    try {\n      setIsLoading(true);\n      const data = getMintTxData();\n\n      if (!data) {\n        throw new Error('Failed to encode transaction data');\n      }\n\n      const tx = await pushChainClient.universal.sendTransaction({\n        to: TOKEN_CONTRACT_ADDRESS,\n        value: BigInt(0),\n        data: data,\n      });\n\n      setTxHash(tx.hash);\n\n      // Wait for transaction to be mined\n      await tx.wait();\n      // Update balance after successful mint\n      await getTokenBalance();\n      setIsLoading(false);\n    } catch (err) {\n      console.error('Mint transaction error:', err);\n      setIsLoading(false);\n    }\n  }\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now, we can add the button and build the UI to mint tokens from Push Chain or Sepolia with Universal Transaction."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Here is the complete ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App.tsx"
      }), " file:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useState } from 'react';\nimport { ethers } from 'ethers';\nimport { PushChain } from '@pushchain/core';\nimport { PushUniversalAccountButton, usePushWalletContext, usePushChainClient, PushUI } from '@pushchain/ui-kit';\nimport './App.css';\nimport React from 'react';\n\n// MyToken contract ABI\nconst TOKEN_ABI = [\n  {\n    inputs: [\n      { name: 'to', type: 'address' },\n      { name: 'amount', type: 'uint256' },\n    ],\n    name: 'mint',\n    outputs: [],\n    stateMutability: 'nonpayable',\n    type: 'function',\n  },\n  {\n    inputs: [{ name: 'account', type: 'address' }],\n    name: 'balanceOf',\n    outputs: [{ name: '', type: 'uint256' }],\n    stateMutability: 'view',\n    type: 'function',\n  },\n];\n\nconst TOKEN_CONTRACT_ADDRESS = '0xA6AEA5b75Af70A4a036F0D2E1265590C168A96fa' as `0x${string}`;\n\nfunction App() {\n  const { connectionStatus } = usePushWalletContext();\n  const { pushChainClient } = usePushChainClient();\n  const [isLoading, setIsLoading] = useState(false);\n  const [txHash, setTxHash] = useState('');\n  const [tokenBalance, setTokenBalance] = useState<string>('0');\n\n  // Function to get token balance\n  const getTokenBalance = async () => {\n    if (!pushChainClient) return;\n\n    try {\n      const userAddress = pushChainClient.universal.account;\n      console.log('Fetching balance for address:', userAddress);\n\n      // Create a read-only provider using the testnet RPC URL\n      const provider = new ethers.JsonRpcProvider('https://evm.rpc-testnet-donut-node1.push.org/');\n\n      // Create contract interface\n      const contract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, TOKEN_ABI, provider);\n\n      // Call balanceOf directly\n      const balance = await contract.balanceOf(userAddress);\n      console.log('Raw balance response:', balance);\n\n      // Convert balance from wei to ether and format it\n      const formattedBalance = ethers.formatUnits(balance, 18);\n      setTokenBalance(formattedBalance);\n    } catch (err) {\n      console.error('Error fetching balance:', err);\n    }\n  };\n\n  // Fetch balance when connection status changes or when pushChainClient changes\n  React.useEffect(() => {\n    if (connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && pushChainClient) {\n      console.log('Connection status changed to connected, fetching balance...');\n      getTokenBalance();\n    } else {\n      console.log('Not connected or no client, setting balance to 0');\n      setTokenBalance('0');\n    }\n  }, [connectionStatus, pushChainClient]);\n\n  // Function to encode transaction data for minting\n  const getMintTxData = () => {\n    if (!pushChainClient) return null;\n\n    const amount = ethers.parseUnits('1', 18); // Mint 1 token (with 18 decimals)\n    const userAddress = pushChainClient.universal.account;\n\n    return PushChain.utils.helpers.encodeTxData({\n      abi: TOKEN_ABI,\n      functionName: 'mint',\n      args: [userAddress, amount],\n    }) as `0x${string}`;\n  };\n\n  // Handle mint transaction\n  const handleMint = async () => {\n    if (pushChainClient) {\n      try {\n        setIsLoading(true);\n        const data = getMintTxData();\n\n        if (!data) {\n          throw new Error('Failed to encode transaction data');\n        }\n\n        const tx = await pushChainClient.universal.sendTransaction({\n          to: TOKEN_CONTRACT_ADDRESS,\n          value: BigInt(0),\n          data: data,\n        });\n\n        setTxHash(tx.hash);\n\n        // Wait for transaction to be mined\n        await tx.wait();\n        // Update balance after successful mint\n        await getTokenBalance();\n        setIsLoading(false);\n      } catch (err) {\n        console.error('Mint transaction error:', err);\n        setIsLoading(false);\n      }\n    }\n  };\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        gap: '20px',\n        padding: '20px',\n      }}\n    >\n      <h1>Push Chain Token Minter</h1>\n\n      <PushUniversalAccountButton />\n\n      {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>\n          <div\n            style={{\n              backgroundColor: '#f3e8ff',\n              padding: '12px 24px',\n              borderRadius: '12px',\n              textAlign: 'center',\n            }}\n          >\n            <p style={{ margin: 0, color: '#581c87' }}>\n              Your Token Balance: <strong>{tokenBalance}</strong>\n            </p>\n          </div>\n\n          <button\n            onClick={handleMint}\n            disabled={isLoading}\n            style={{\n              backgroundColor: '#d946ef',\n              color: 'white',\n              border: 'none',\n              borderRadius: '20px',\n              padding: '12px 24px',\n              fontSize: '16px',\n              cursor: 'pointer',\n              fontWeight: 'bold',\n            }}\n          >\n            {isLoading ? 'Minting...' : 'Mint Token'}\n          </button>\n\n          {txHash && pushChainClient && (\n            <div style={{ textAlign: 'center' }}>\n              <p>\n                Transaction Hash:{' '}\n                <a\n                  href={pushChainClient.explorer.getTransactionUrl(txHash)}\n                  target=\"_blank\"\n                  rel=\"noopener noreferrer\"\n                  style={{ color: '#d946ef', textDecoration: 'underline' }}\n                >\n                  {txHash}\n                </a>\n              </p>\n            </div>\n          )}\n        </div>\n      )}\n\n      {connectionStatus !== PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n        <p>Please connect your wallet to mint tokens.</p>\n      )}\n    </div>\n  );\n}\n\nexport default App;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Congratulations! 🎉 You've successfully built a universal ERC-20 token system on Push Chain that demonstrates the power of cross-chain interactions. Here's what we accomplished:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chain/",
          children: "Intro to Push Chain"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/integrate-push-universal-wallet",
          children: "Push Universal Wallet Integration"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/push-chain-website/pr-preview/pr-1067/docs/chain/setup/smart-contract-environment/configure-hardhat",
          children: "Configure Hardhat"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://donut.push.network/",
          children: "Push Chain Explorer"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Happy building! 🚀"
    })]
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



/***/ }),

/***/ 602999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IFrameModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
function IFrameModal(_ref){let{url,buttonTitle='Load Interactive Demo',maxHeight='600px'}=_ref;const[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const[isIframeVisible,setIsIframeVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const iframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);// Use proxy for push explorer URLs to bypass CSP
const getProxiedUrl=originalUrl=>{if(originalUrl.includes('push.network')||originalUrl.includes('donut.push.network')){// Extract the base URL from the original URL to construct the proxy URL
const urlObj=new URL(originalUrl);const baseUrl=`${urlObj.protocol}//${urlObj.host}`;// Use the push explorer's proxy endpoint if it's publicly accessible
return`${baseUrl}/node-api/iframe-proxy?url=${encodeURIComponent(originalUrl)}`;}return originalUrl;};const proxiedUrl=getProxiedUrl(url);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setIsLoading(true);},[url]);const handleIframeLoad=()=>{setIsLoading(false);};const handleRefresh=()=>{setIsLoading(true);if(iframeRef.current){iframeRef.current.src=proxiedUrl;}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:'flex',flexDirection:'column',width:'100%',height:isIframeVisible?'80vh':'auto',maxHeight,borderRadius:'12px',overflow:'hidden',margin:'20px 0'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #D548EC;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      `}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:'flex',alignItems:'center',gap:'10px',padding:'10px',backgroundColor:'var(--ifm-playground-header-bg)'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{flex:1,padding:'8px 12px',backgroundColor:'var(--ifm-navbar-search-bg)',borderRadius:'12px',color:'var(--ifm-color-title-text-color)',fontSize:'0.875rem',fontFamily:'Fira Code',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'},children:url}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:handleRefresh,style:{display:'flex',alignItems:'center',justifyContent:'center',width:'32px',height:'32px',padding:'6px',borderRadius:'12px',cursor:'pointer',transition:'all 0.2s ease',border:'var(--ifm-playground-button-border)',backgroundColor:'var(--ifm-table-body-bg)'},onMouseEnter:e=>{e.currentTarget.style.opacity='0.8';},onMouseLeave:e=>{e.currentTarget.style.opacity='1';},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M14 8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c1.8 0 3.4.8 4.5 2h-2.5v1h4V1h-1v2.1C11.9 1.8 10 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7h-1z",fill:"var(--ifm-iframe-icon-color)",opacity:"1"})})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:'relative',flex:1,backgroundColor:'var(--ifm-playground-header-bg)',borderRadius:'0 0 12px 12px'},children:!isIframeVisible?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:'flex',alignItems:'center',justifyContent:'center',padding:'40px 20px'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>setIsIframeVisible(true),style:{padding:'12px 24px',fontSize:'0.875rem',fontWeight:'600',backgroundColor:'#D548EC',color:'#fff',border:'none',borderRadius:'12px',cursor:'pointer',transition:'opacity 0.2s ease',opacity:0.9,fontFamily:'DM Sans'},onMouseEnter:e=>{e.currentTarget.style.opacity='1';},onMouseLeave:e=>{e.currentTarget.style.opacity='0.9';},children:buttonTitle})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[isLoading&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%, -50%)',zIndex:1},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"loading-spinner"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{ref:iframeRef,src:proxiedUrl,title:"IFrame Content",onLoad:handleIframeLoad,sandbox:"allow-scripts allow-same-origin allow-forms allow-popups",style:{width:'100%',height:'100%',border:'none'}})]})})]});}

/***/ })

}]);