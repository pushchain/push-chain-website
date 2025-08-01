"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[8559],{

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

/***/ }),

/***/ 841190:
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
	id: 'docs-chain-tutorials-universal-counter',
	title: 'Universal Counter App',
	hide_title: false,
	slug: './tutorial-universal-counter',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_chain_tutorials_universal_counter--universal_counter_app.png'
};
const contentTitle = undefined;
const metadata = {
  "id": "chain/tutorials/docs-chain-tutorials-universal-counter",
  "title": "Universal Counter App",
  "description": "Universal Counter | Tutorials | Push Chain Docs",
  "source": "@site/docs/chain/01-tutorials/02-Tutorial-Universal-Counter.mdx",
  "sourceDirName": "chain/01-tutorials",
  "slug": "/chain/tutorials/tutorial-universal-counter",
  "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-counter",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/02-Tutorial-Universal-Counter.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "id": "docs-chain-tutorials-universal-counter",
    "title": "Universal Counter App",
    "hide_title": false,
    "slug": "./tutorial-universal-counter",
    "displayed_sidebar": "pushChainSidebar",
    "sidebar_position": 2,
    "image": "/assets/docs/previews/docs_chain_tutorials_universal_counter--universal_counter_app.png"
  },
  "sidebar": "pushChainSidebar",
  "previous": {
    "title": "Simple Counter App",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-simple-counter"
  },
  "next": {
    "title": "Mint Universal ERC-20 Tokens",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-mint-erc-20-tokens"
  }
};
const assets = {

};







const toc = [{
  "value": "What’s Unique About This App?",
  "id": "whats-unique-about-this-app",
  "level": 2
}, {
  "value": "Example Behavior",
  "id": "example-behavior",
  "level": 3
}, {
  "value": "Let&#39;s Build",
  "id": "lets-build",
  "level": 2
}, {
  "value": "Understanding the Universal Counter App",
  "id": "understanding-the-universal-counter-app",
  "level": 2
}, {
  "value": "Using the UEAFactory Interface",
  "id": "using-the-ueafactory-interface",
  "level": 3
}, {
  "value": "Designing the Increment Function",
  "id": "designing-the-increment-function",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Interact with UniversalCounter App",
  "id": "interact-with-universalcounter-app",
  "level": 2
}, {
  "value": "Let&#39;s Test our UniversalCounter App",
  "id": "lets-test-our-universalcounter-app",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
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
  }, {Details, Head} = _components;
  if (!Details) _missingMdxReference("Details", true);
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: "Universal Counter | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Welcome to the first tutorial of building a truly universal smart contract. The smart contract we are going to build here is the popular ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Counter app"
      }), ", that all Solidity developers are familiar with. This counter app, however, is going to be ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We will first understand what we are building and why it is a unique (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "one-of-a-kind"
      }), ") counter app. Let’s dive in 🤿."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "whats-unique-about-this-app",
      children: "What’s Unique About This App?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A typical Solidity counter app allows you to increment a specific variable when a caller (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "msg.sender"
      }), ") calls it."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "However, the counter app we will build now will be a sophisticated version of the simple counter contract."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "UniversalCounter"
      }), " app we are going to build includes:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Different ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "uint256"
        }), " counter variables for different chains (e.g., ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "countETH"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "countPC"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "countSOL"
        }), ", etc)."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["A check on the caller (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "msg.sender"
        }), ") who invokes the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "increment()"
        }), " function."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Native identification of the origin chain of the caller."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Increment logic that updates only the counter specific to the caller’s origin chain."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "example-behavior",
      children: "Example Behavior"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Bob is an Ethereum user → Bob calls ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "increment()"
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "countETH"
        }), " variable is incremented."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Dan is a Push Chain user → Dan calls ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "increment()"
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "countPC"
        }), " variable is incremented."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "🚀 The Best Part:"
        }), "\nYou’ll be able to build this cross-chain functionality ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "without"
        }), " using oracles, message passing systems, or third-party interoperability providers."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["It’s all ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "natively supported on Push Chain"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "lets-build",
      children: "Let's Build"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here is the solidity code for our Universal Counter smart contract."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity 0.8.22;\n\n// Universal Account ID Struct and IUEAFactory Interface\n\nstruct UniversalAccountId {\n    string chainNamespace;\n    string chainId;\n    bytes owner;\n}\n\ninterface IUEAFactory {\n    function getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);\n}\n\ncontract UniversalCounter {\n    uint256 public countEth;\n    uint256 public countSol;\n    uint256 public countPC;\n\n    event CountIncremented(\n        uint256 newCount,\n        address indexed caller,\n        string chainNamespace,\n        string chainId\n    );\n\n    constructor() {}\n\n    function increment() public {\n        address caller = msg.sender;\n        (UniversalAccountId memory originAccount, bool isUEA) =\n            IUEAFactory(0x00000000000000000000000000000000000000eA).getOriginForUEA(caller);\n\n        if (!isUEA) {\n            // If it's a native Push Chain EOA (isUEA = false)\n            countPC += 1;\n        } else {\n            bytes32 chainHash = keccak256(abi.encodePacked(originAccount.chainNamespace, originAccount.chainId));\n\n            if (chainHash == keccak256(abi.encodePacked(\"solana\",\"EtWTRABZaYq6iMfeYKouRu166VU2xqa1\"))) {\n                countSol += 1;\n            } else if (chainHash == keccak256(abi.encodePacked(\"eip155\",\"11155111\"))) {\n                countEth += 1;\n            } else {\n                revert(\"Invalid chain\");\n            }\n        }\n\n        emit CountIncremented(getCount(), caller, originAccount.chainNamespace, originAccount.chainId);\n    }\n\n    function reset() public {\n        countEth = 0;\n        countSol = 0;\n        countPC = 0;\n    }\n\n    function getCount() public view returns (uint256) {\n        return countEth + countSol + countPC;\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "understanding-the-universal-counter-app",
      children: "Understanding the Universal Counter App"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The unique aspect of this smart contract is its ability to determine all imperative details of the user ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "( msg.sender )"
      }), " instantly and natively."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In simpler terms, for any given ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "msg.sender"
      }), " address, the contract is able to quickly identify:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "the actual source chain of the caller"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "the chain id of the source chain of the caller."
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "the address of the caller on the source chain."
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["These details are natively available for any smart contract built on Push Chain.\nThis is enabled via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/pushchain/push-chain-core-contracts/blob/main/src/Interfaces/IUEAFactory.sol",
          children: "UEAFactory Interface"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "using-the-ueafactory-interface",
      children: "Using the UEAFactory Interface"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The first step is to achieve the universal functionality is to use the UEAFactory interface in our contract.\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "This can either be imported or directly included in your contract."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This interfaces provides you with the function - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getOriginForUEA()"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-solidity",
        children: "    /**\n     * @dev Returns the owner key (UOA) for a given UEA address\n     * @param addr Any given address ( msg.sender ) on push chain\n     * @return account The Universal Account information associated with this UEA\n     * @return isUEA True if the address addr is a UEA contract. Else it is a native EOA of PUSH chain (i.e., isUEA = false)\n     */\n    function getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This function plays the critical role of fetching and returning the information about the caller ( ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "msg.sender"
      }), " )."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The function mainly returns 2 crucial values:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "UniversalAccountId"
        }), " of the user, and"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A boolean that indicates whether or not this caller is a UEA."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "designing-the-increment-function",
      children: "Designing the Increment Function"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "increment"
      }), " function is the main logic of this contract that updates the count variables based on user’s origin type."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In order to achieve this, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "increment"
      }), " function does the following:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["calls the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getOriginForUEA()"
        }), " with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "msg.sender"
        }), " as argument"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["this provides us with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "isUEA and UniversalAccountId"
        }), " for the caller."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["then we check if ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "isUEA is false,"
        }), " this means the caller is a native Push User."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["for such users, the function increments ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "countPC"
        }), " variable by 1"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Details, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
          children: "Why isUEA = false means native Push User?"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: "1. Every external chain user (ETH, Solana, etc) in Push Chain has a UEA account deployed for them."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: "2. These UEA accounts represent the external chain users on Push Chain and are directly controlled by their signatures."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: "3. UEAs allow external users to interact and use Push Chain apps without natively being on Push Chain."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: ["4. Therefore, for a given ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "msg.sender"
        }), ":"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
            children: "isUEA = false"
          }), " → the caller is a native Push Chain account and not an external chain user."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
            children: "isUEA = true"
          }), " → the caller is an external chain user interacting via a UEA. For such a user, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "UniversalAccountId"
          }), " shall provide all information like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", {
            children: "{ chainName, chainId, ownerAddress }"
          }), "."]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["however, if ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "isUEA is true,"
        }), " this indicates the user is a external chain user."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["for such users the function checks the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "UniversalAccountId.chainNamespace and UniversalAccountId.chainId"
        }), " of the user and identifies if the user is a Solana or Ethereum user and updates the countSol or countEth variable accordingly."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With this, we have simply achieved:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "a contract that natively identifies the caller of ANY chain."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "allows devs to build logic specific to the users for a particular chain."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "simplifies developer experience for building multi-chain universal apps."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "eliminates any use of third-party tooling, oracles, to achieve universal behavior."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This makes our Counter smart contract ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "truly universal"
      }), " with just a few lines of solidity codes."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "interact-with-universalcounter-app",
      children: "Interact with UniversalCounter App"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A easier way to interact with the contract is to use the LivePlayground below.\nThe UniversalCounter app is already deployed on Push Chain Testnet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "UniversalCounter Contract Address:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://donut.push.network/address/0x5A59a5Ac94d5190553821307F98e4673BF3c4a1D?tab=contract",
          children: "0x5A59a5Ac94d5190553821307F98e4673BF3c4a1D"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Note:"
      }), " Push Chain easily allows you to interact with the UniversalCounter from any chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Follow the steps below to interact with the UniversalCounter:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Connect your wallet to the LivePlayground."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "You can connect wallet of any supported chain ( Push Chain, Ethereum or Solana)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Click on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Increment Counter"
        }), " button to increment the counter."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Click on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Refresh Counter Values"
        }), " button to refresh the counter values."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Click on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "View in Explorer"
        }), " button to view the transaction in the explorer."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "lets-test-our-universalcounter-app",
      children: "Let's Test our UniversalCounter App"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "import React, { useState, useEffect } from 'react';\nimport { ethers } from 'ethers';\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction UniversalCounterExample() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  // Define Universal Counter ABI, taking minimal ABI for the demo\n  const UCABI = [\n    {\n      inputs: [],\n      name: 'increment',\n      outputs: [],\n      stateMutability: 'nonpayable',\n      type: 'function',\n    },\n    {\n      inputs: [],\n      name: 'countEth',\n      outputs: [\n        {\n          internalType: 'uint256',\n          name: '',\n          type: 'uint256',\n        },\n      ],\n      stateMutability: 'view',\n      type: 'function',\n    },\n    {\n      inputs: [],\n      name: 'countPC',\n      outputs: [\n        {\n          internalType: 'uint256',\n          name: '',\n          type: 'uint256',\n        },\n      ],\n      stateMutability: 'view',\n      type: 'function',\n    },\n    {\n      inputs: [],\n      name: 'countSol',\n      outputs: [\n        {\n          internalType: 'uint256',\n          name: '',\n          type: 'uint256',\n        },\n      ],\n      stateMutability: 'view',\n      type: 'function',\n    },\n  ];\n\n  // Contract address for the Universal Counter\n  const CONTRACT_ADDRESS = '0x5A59a5Ac94d5190553821307F98e4673BF3c4a1D';\n\n  function Component() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n\n    // State to store counter values\n    const [countEth, setCountEth] = useState(-1);\n    const [countSol, setCountSol] = useState(-1);\n    const [countPC, setCountPC] = useState(-1);\n    const [isLoading, setIsLoading] = useState(false);\n    const [txHash, setTxHash] = useState('');\n\n    // Function to encode transaction data\n    const getTxData = () => {\n      return PushChain.utils.helpers.encodeTxData({\n        abi: UCABI,\n        functionName: 'increment',\n      });\n    };\n\n    // Function to fetch counter values\n    const fetchCounters = async () => {\n      if (!pushChainClient) return;\n\n      try {\n        // Create a contract instance for read operations\n        const provider = new ethers.JsonRpcProvider(\n          'https://evm.rpc-testnet-donut-node1.push.org/'\n        );\n        const contract = new ethers.Contract(CONTRACT_ADDRESS, UCABI, provider);\n\n        // Fetch counter values\n        const ethCount = await contract.countEth();\n        const solCount = await contract.countSol();\n        const pcCount = await contract.countPC();\n\n        // Update state\n        setCountEth(Number(ethCount));\n        setCountSol(Number(solCount));\n        setCountPC(Number(pcCount));\n      } catch (err) {\n        console.error('Error fetching counter values:', err);\n      }\n    };\n\n    // Fetch counter values on component mount and when connection status changes\n    useEffect(() => {\n      if (connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED) {\n        fetchCounters();\n      }\n    }, [connectionStatus, pushChainClient]);\n\n    // Handle transaction to increment counter\n    const handleSendTransaction = async () => {\n      if (pushChainClient) {\n        try {\n          setIsLoading(true);\n          const data = getTxData();\n\n          const tx = await pushChainClient.universal.sendTransaction({\n            to: CONTRACT_ADDRESS,\n            value: BigInt(0),\n            data: data,\n          });\n\n          setTxHash(tx.hash);\n\n          // Wait for transaction to be mined\n          await tx.wait();\n\n          // Refresh counter values\n          await fetchCounters();\n          setIsLoading(false);\n        } catch (err) {\n          console.error('Transaction error:', err);\n          setIsLoading(false);\n        }\n      }\n    };\n\n    // Function to determine which chain is winning\n    const getWinningChain = () => {\n      if (countEth === -1 || countSol === -1 || countPC === -1) return null;\n\n      if (countEth > countSol && countEth > countPC) {\n        return `Ethereum is winning with ${countEth} counts`;\n      } else if (countSol > countEth && countSol > countPC) {\n        return `Solana is winning with ${countSol} counts`;\n      } else if (countPC > countEth && countPC > countSol) {\n        return `Push Chain is winning with ${countPC} counts`;\n      } else {\n        // Handle ties\n        if (countEth === countSol && countEth === countPC && countEth > 0) {\n          return `It's a three-way tie with ${countEth} counts each`;\n        } else if (countEth === countSol && countEth > countPC) {\n          return `Ethereum and Solana are tied with ${countEth} counts each`;\n        } else if (countEth === countPC && countEth > countSol) {\n          return `Ethereum and Push Chain are tied with ${countEth} counts each`;\n        } else if (countSol === countPC && countSol > countEth) {\n          return `Solana and Push Chain are tied with ${countSol} counts each`;\n        } else {\n          return null; // No winner yet or all zeros\n        }\n      }\n    };\n\n    const winningMessage = getWinningChain();\n\n    return (\n      <div\n        style={{\n          display: 'flex',\n          flexDirection: 'column',\n          alignItems: 'center',\n          gap: '12px',\n        }}\n      >\n        <h2>Universal Counter Example</h2>\n\n        <PushUniversalAccountButton />\n\n        {connectionStatus !== PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <p>Please connect your wallet to interact with the counter.</p>\n        )}\n\n        <div\n          style={{\n            display: 'flex',\n            flexDirection: 'column',\n            alignItems: 'center',\n            gap: '12px',\n            width: '100%',\n            flexWrap: 'nowrap',\n          }}\n        >\n          <h3>\n            Total Universal Count:{' '}\n            {countEth == -1 ? '...' : countEth + countSol + countPC}\n          </h3>\n\n          <div\n            style={{\n              display: 'flex',\n              flexDirection: 'row',\n              alignItems: 'center',\n              justifyContent: 'space-around',\n              gap: '12px',\n              width: '100%',\n            }}\n          >\n            <div className='counter-box'>\n              <h3>ETH Counter: {countEth == -1 ? '...' : countEth}</h3>\n            </div>\n\n            <div className='counter-box'>\n              <h3>Sol Counter: {countSol == -1 ? '...' : countSol}</h3>\n            </div>\n\n            <div className='counter-box'>\n              <h3>PC Counter: {countPC == -1 ? '...' : countPC}</h3>\n            </div>\n          </div>\n        </div>\n\n        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <div className='counter-container' style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>\n            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>\n              <button\n                className='increment-button'\n                onClick={handleSendTransaction}\n                disabled={isLoading}\n                style={{\n                  backgroundColor: '#d946ef',\n                  color: 'white',\n                  border: 'none',\n                  borderRadius: '20px',\n                  padding: '8px 16px',\n                  fontSize: '14px',\n                  cursor: 'pointer',\n                  fontWeight: 'bold'\n                }}\n              >\n                {isLoading ? 'Processing...' : 'Increment Counter'}\n              </button>\n\n              <button\n                className='refresh-button'\n                onClick={fetchCounters}\n                style={{\n                  backgroundColor: '#d946ef',\n                  color: 'white',\n                  border: 'none',\n                  borderRadius: '20px',\n                  padding: '8px 16px',\n                  fontSize: '14px',\n                  cursor: 'pointer',\n                  fontWeight: 'bold'\n                }}\n              >\n                Refresh Counter Values\n              </button>\n            </div>\n\n            {winningMessage && (\n              <div style={{ margin: '10px 0', fontWeight: 'bold', color: '#d946ef' }}>\n                {winningMessage}\n              </div>\n            )}\n\n            {txHash && pushChainClient && (\n              <div className='transaction-info' style={{ textAlign: 'center' }}>\n                <p>\n                  Transaction Hash:{' '}\n                  <a\n                    href={pushChainClient.explorer.getTransactionUrl(txHash)}\n                    target='_blank'\n                    style={{ color: '#d946ef', textDecoration: 'underline' }}\n                  >\n                    {txHash}\n                  </a>\n                </p>\n              </div>\n            )}\n          </div>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
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



/***/ })

}]);