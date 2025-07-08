"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[33971],{

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

/***/ 162334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175489);
/* harmony import */ var _site_src_components_AddChainToWallet_AddChainToWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(954537);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(751107);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(119365);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(411470);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(474848);
const TESTNET_CONFIG={chainId:42101,chainName:'Push Chain Testnet',nativeCurrency:{name:'Push Chain',symbol:'PC',decimals:18},rpcUrls:['https://evm.rpc-testnet-donut-node1.push.org/','https://evm.rpc-testnet-donut-node1.push.org/'],iconUrls:[],blockExplorerUrls:['https://donut.push.network']};const PushChainSpecs=()=>{const tabValues=[{value:'testnet_donut',label:'🍩 Donut Testnet',default:true},{value:'mainnet',label:'Mainnet - Coming Soon 🚀'}];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{groupId:"chain-network",values:tabValues,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{value:"testnet_donut",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th",{children:"Field"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th",{children:"Value"})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Network Name"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"Push Chain Donut Testnet"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"RPC URL"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"https://evm.rpc-testnet-donut-node1.push.org/"}),', ',/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"https://evm.rpc-testnet-donut-node2.push.org/"})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Chain ID"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"42101"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Currency Symbol"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"PC"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Block Explorer URL"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"https://donut.push.network"})})]})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_site_src_components_AddChainToWallet_AddChainToWallet__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{title:"Add to Wallet (Testnet Donut)",config:TESTNET_CONFIG})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{value:"mainnet",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"admonition admonition-info alert alert--info",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"admonition-heading",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{as:"h5",children:"Coming Soon!"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"admonition-content",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Push Chain Mainnet is currently in development. Stay tuned for updates!"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{children:["Follow us on ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{to:"https://x.com/pushchain",children:"X"})," for announcements"]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{children:["Join our",' ',/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{to:"https://discord.gg/pushprotocol",children:"Discord"})," to be part of the community"]})]})]})]})})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PushChainSpecs);

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

/***/ 454841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/Static/PushChainSpecs.tsx
var PushChainSpecs = __webpack_require__(162334);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(175489);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(796710);
;// ./src/components/RemixIDE/RemixIDE.tsx
function RemixIDE(_ref){var _examplesObj$selected,_examplesObj$selected2;let{examples}=_ref;// Force examples to be treated as a plain object to ensure proper key extraction
const examplesObj={...examples};// Extract keys directly from the examples object
const exampleKeys=Object.keys(examplesObj);const defaultRemixURL='https://remix.push.org';// Initialize state with the first key from our extracted keys
const[selected,setSelected]=(0,react.useState)(exampleKeys.length>0?exampleKeys[0]:null);// Force update selected if it doesn't match any key in examples
(0,react.useEffect)(()=>{if(exampleKeys.length>0&&(!selected||!exampleKeys.includes(selected))){setSelected(exampleKeys[0]);}},[exampleKeys,selected]);const[isFullScreen,setIsFullScreen]=(0,react.useState)(false);const[isLoading,setIsLoading]=(0,react.useState)(true);const getRemixURL=()=>{if(!selected||!examplesObj[selected]||!examplesObj[selected].absoluteFileURL){return defaultRemixURL;}try{const githubUrl=examplesObj[selected].absoluteFileURL;const remixUrl=new URL(defaultRemixURL);remixUrl.hash=`url=${githubUrl}`;return remixUrl.toString();}catch(error){return defaultRemixURL;}};(0,react.useEffect)(()=>{document.body.style.overflow=isFullScreen?'hidden':'auto';return()=>{document.body.style.overflow='auto';};},[isFullScreen]);const arrowIcon={color:'var(--ifm-header-caret-color)',marginTop:'-6px'};const repoButton={display:'flex',alignItems:'center',gap:'4px',fontSize:'0.875rem',color:'var(--ifm-playground-buttontext-color)',cursor:'pointer',fontWeight:'600'};const repoUrlDiv={display:'flex',flex:'none',flexDirection:'row',alignItems:'center',gap:'12px',padding:'8.5px 13px 8.59px 13px'};const selectButton={borderRadius:'12px',border:'var(--ifm-playground-button-border)',display:'flex',padding:'12.55px 13px 13.04px 13px',justifyContent:'center',alignItems:'center',backgroundColor:'transparent',fontSize:'0.875rem',fontWeight:'600',color:'var(--ifm-playground-buttontextcolor)',cursor:'pointer'};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{width:'100%',backgroundColor:'var(--ifm-table-header-bg)',borderRadius:'12px',border:'none',overflow:'hidden',position:isFullScreen?'fixed':'relative',top:isFullScreen?0:'auto',left:isFullScreen?0:'auto',right:isFullScreen?0:'auto',bottom:isFullScreen?0:'auto',zIndex:isFullScreen?9999:1},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 15px',gap:'16px'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:'16px',fontWeight:500,color:'var(--ifm-color-title-text-color)'},children:"Remix IDE"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'10px',alignItems:'center',flex:'1',flexWrap:'wrap',justifyContent:'flex-end'},children:[exampleKeys.length>0&&selected&&((_examplesObj$selected=examplesObj[selected])===null||_examplesObj$selected===void 0?void 0:_examplesObj$selected.ctaURL)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:repoUrlDiv,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:examplesObj[selected].ctaURL,target:"_blank",rel:"noopener noreferrer",style:repoButton,children:((_examplesObj$selected2=examplesObj[selected])===null||_examplesObj$selected2===void 0?void 0:_examplesObj$selected2.ctaTitle)||'View Code'}),/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm.BsBoxArrowUpRight,{style:arrowIcon})]}),exampleKeys.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("select",{value:selected!==null&&selected!==void 0?selected:'',onChange:e=>setSelected(e.target.value),style:selectButton,children:exampleKeys.map(key=>/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:key,children:key},key))}),/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm.BsArrowsAngleExpand,{size:27,style:{color:'var(--ifm-header-caret-color)',cursor:'pointer',transition:'color 0.2s',padding:'2px'},onClick:()=>setIsFullScreen(!isFullScreen)}),/*#__PURE__*/(0,jsx_runtime.jsx)("style",{children:`
            .topbar-btn {
              padding: 8px 12px;
              height: 35px;
              font-size: 14px;
              border-radius: 6px;
              border: 1px solid #e2e8f0;
              background-color: #fff;
              color: #475569;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 6px;
              transition: background-color 0.2s, border-color 0.2s;
            }
            .topbar-btn:hover {
              background-color: #dd44b9;
              border-color: #dd44b9;
              color: #fff;
            }
          `})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{width:'100%',height:isFullScreen?'calc(100vh - 56px)':'600px',position:'relative'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("iframe",{src:getRemixURL(),title:"Remix IDE",style:{width:'100%',height:'100%',border:'none',position:'relative',zIndex:1},allowFullScreen:true,onLoad:()=>setIsLoading(false)}),isLoading&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{position:'absolute',top:0,left:0,right:0,bottom:0,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(255, 255, 255, 0.8)',zIndex:2},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:'40px',height:'40px',border:'3px solid #D548EC',borderTop:'3px solid transparent',borderRadius:'50%',animation:'spin 1s linear infinite'}})})]})]});}
;// ./docs/chain/02-setup/02-smart-contract-environment/01-Configure-Remix.mdx


const frontMatter = {
	id: 'docs-chain-setup-tooling-configure-remix',
	title: 'Remix IDE',
	hide_title: false,
	slug: './configure-remix',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_setup_tooling_configure_remix--remix_ide.png'
};
const contentTitle = undefined;
const metadata = {
  "id": "chain/setup/smart-contract-environment/docs-chain-setup-tooling-configure-remix",
  "title": "Remix IDE",
  "description": "Remix IDE | Smart Contract Environment | Setup | Push Chain Docs",
  "source": "@site/docs/chain/02-setup/02-smart-contract-environment/01-Configure-Remix.mdx",
  "sourceDirName": "chain/02-setup/02-smart-contract-environment",
  "slug": "/chain/setup/smart-contract-environment/configure-remix",
  "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/setup/smart-contract-environment/configure-remix",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/pushchain/push-chain-website/blob/main/docs/chain/02-setup/02-smart-contract-environment/01-Configure-Remix.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "id": "docs-chain-setup-tooling-configure-remix",
    "title": "Remix IDE",
    "hide_title": false,
    "slug": "./configure-remix",
    "displayed_sidebar": "pushChainSidebar",
    "sidebar_position": 1,
    "image": "/assets/docs/previews/docs_chain_setup_tooling_configure_remix--remix_ide.png"
  },
  "sidebar": "pushChainSidebar",
  "previous": {
    "title": "Smart Contract Environment",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/setup/smart-contract-environment"
  },
  "next": {
    "title": "Configure Foundry",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/setup/smart-contract-environment/configure-foundry"
  }
};
const assets = {

};





const toc = [{
  "value": "Deploy Smart Contracts with Remix",
  "id": "deploy-smart-contracts-with-remix",
  "level": 2
}, {
  "value": "1. Add Push Chain to Your Wallet",
  "id": "1-add-push-chain-to-your-wallet",
  "level": 3
}, {
  "value": "2. Launch Remix",
  "id": "2-launch-remix",
  "level": 3
}, {
  "value": "3. Configure “Deploy &amp; Run Transactions”",
  "id": "3-configure-deploy--run-transactions",
  "level": 3
}, {
  "value": "4. Compile Your Contract",
  "id": "4-compile-your-contract",
  "level": 3
}, {
  "value": "5. Deploy Your Contract",
  "id": "5-deploy-your-contract",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Remix IDE | Smart Contract Environment | Setup | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remix is a browser-based Solidity IDE that lets you write, compile, test and deploy smart contracts directly in your browser, no local setup required."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's use Remix to compile, deploy, and test smart contracts on Push Chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-smart-contracts-with-remix",
      children: "Deploy Smart Contracts with Remix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-add-push-chain-to-your-wallet",
      children: "1. Add Push Chain to Your Wallet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you haven’t yet, follow ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/tooling/wallet-setup",
          children: "Wallet Setup"
        }), " to add Push Chain as a custom network in your wallet."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(PushChainSpecs/* default */.A, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-launch-remix",
      children: "2. Launch Remix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://remix.ethereum.org",
        children: "Remix IDE"
      }), " or use the embedded IDE below."]
    }), "\n", (0,jsx_runtime.jsx)(RemixIDE, {
      examples: {
        'Counter.sol': {
          absoluteFileURL: 'https://github.com/pushchain/push-remix-solidity-ide/blob/master/libs/remix-ws-templates/src/templates/playground/contracts/HelloWorld.sol',
          ctaTitle: 'View on GitHub',
          ctaURL: 'https://github.com/pushchain/push-remix-solidity-ide/blob/master/libs/remix-ws-templates/src/templates/playground/contracts/HelloWorld.sol'
        }
      }
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-configure-deploy--run-transactions",
      children: "3. Configure “Deploy & Run Transactions”"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deploy & Run Transactions"
        }), " plugin in the left sidebar"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Under ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment"
        }), ", choose ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Injected Provider - Web3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Approve the connection in your wallet, making sure it’s set to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Push Chain Donut Testnet (42101)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-compile-your-contract",
      children: "4. Compile Your Contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solidity Compiler"
        }), " plugin"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select compiler version ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0.8.22"
        }), " (or match your ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pragma"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Compile"
        }), " next to your contract file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-deploy-your-contract",
      children: "5. Deploy Your Contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deploy & Run Transactions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select your contract from the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Contract"
        }), " dropdown"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deploy"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm the transaction in your wallet"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy from the console with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/smart-contract-environment/configure-foundry",
          children: "Foundry"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Script deployments with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/smart-contract-environment/configure-hardhat",
          children: "Hardhat"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call your contract from code via the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build",
          children: "Push Chain SDK"
        })]
      }), "\n"]
    })]
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



/***/ }),

/***/ 954537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(978478);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(474848);
const AddChainToWallet=_ref=>{let{title='Add to Wallet',config}=_ref;const addNetwork=async()=>{try{if(typeof window==='undefined'||!window.ethereum){alert('Please install MetaMask first!');return;}const chainIdHex=`0x${config.chainId.toString(16)}`;try{await window.ethereum.request({method:'wallet_switchEthereumChain',params:[{chainId:chainIdHex}]});alert('Network already exists.');return;}catch(switchError){// Step 2: If the error code is 4902, the chain doesn't exist
if(switchError.code===4902){try{await window.ethereum.request({method:'wallet_addEthereumChain',params:[{chainId:chainIdHex,chainName:config.chainName,nativeCurrency:config.nativeCurrency,iconUrls:config.iconUrls,rpcUrls:config.rpcUrls,blockExplorerUrls:config.blockExplorerUrls}]});}catch(addError){console.error('Error adding network:',addError);alert('Failed to add network to MetaMask');}}else{console.error('Error switching network:',switchError);alert('Failed to switch network');}}}catch(error){console.error('Unexpected error:',error);alert('Something went wrong while adding the network');}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'20px 0'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n,{onClick:addNetwork,style:{backgroundColor:'#D548EC',border:'none',padding:'12px 24px',cursor:'pointer',transition:'all 0.2s ease',fontFamily:'DM Sans'},children:title})});};function Wrapper(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{children:()=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AddChainToWallet,{...props})});}

/***/ }),

/***/ 978478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BrowserOnly)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(992303);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly(_ref){let{children,fallback}=_ref;const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();if(isBrowser){if(typeof children!=='function'&&"production"==='development')// removed by dead control flow
{}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:children===null||children===void 0?void 0:children()});}return fallback!==null&&fallback!==void 0?fallback:null;}

/***/ })

}]);