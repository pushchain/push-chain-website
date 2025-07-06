"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[75416],{

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

/***/ 303547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PushAPIReference)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(944404);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/**
 * PushAPIReference component for rendering API documentation with consistent styling
 *
 * @param children - The content to display within the API reference section
 * @param showRequiredNotice - Whether to show the required notice (default: true)
 * @param className - Additional CSS classes to apply
 */function PushAPIReference(_ref){let{children,showRequiredNotice=true,className=''}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ReferenceContainer,{className:className,children:[showRequiredNotice&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RequiredNotice,{hasNotice:showRequiredNotice,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{children:["These",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"Arguments"}),"are mandatory"]})}),children]});}const ReferenceContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"PushAPIReference__ReferenceContainer",componentId:"sc-1g1yayv-0"})([""]);const RequiredNotice=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"PushAPIReference__RequiredNotice",componentId:"sc-1g1yayv-1"})(["border-radius:var(--ifm-global-radius);margin-bottom:-8px;padding:12px 12px 20px 12px;text-align:end;border-bottom-left-radius:0;border-bottom-right-radius:0px;color:var(--ifm-navbar-dropdown-subtext);font-size:0.875rem;font-weight:400;line-height:188.571%;code{background:transparent;padding:2px 9px;display:inline-block !important;border-radius:12px;border:1px solid var(--ifm-sidebar-activetext-color);color:var(--ifm-color-primary-text);font-family:'Fira Code';font-weight:600;line-height:165%;margin:0px 4px;}"]);

/***/ }),

/***/ 303999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Details_Details)
});

;// ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(198587);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/node_modules/clsx/dist/clsx.mjs
var dist_clsx = __webpack_require__(15066);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(41422);
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
const _excluded=["summary","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){let{summary,children}=_ref,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);const isBrowser=(0,useIsBrowser/* default */.A)();const detailsRef=(0,react.useRef)(null);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open});// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
const[open,setOpen]=(0,react.useState)(props.open);const summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary!==null&&summary!==void 0?summary:'Details'});return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",Object.assign({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,dist_clsx/* default */.A)(styles_module.details,isBrowser&&styles_module.isBrowser,props.className),onMouseDown:e=>{const target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:e=>{e.stopPropagation();// For isolation of multiple nested details/summary
const target=e.target;const shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,disableSSRStyle:true// Allows component to work fine even with JS disabled!
,onCollapseTransitionEnd:newCollapsed=>{setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.collapsibleContent,children:children})})]})));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Details_styles_module = ({"details":"details_b_Ee"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses='alert alert--info';function Details_Details(_ref){let props=Object.assign({},(_objectDestructuringEmpty(_ref),_ref));return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,Object.assign({},props,{className:(0,clsx/* default */.A)(InfimaClasses,Details_styles_module.details,props.className)}));}

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
throw new Error("Docusaurus error: Bad <Tabs> child <"+(// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name)+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.");}))===null||_React$Children$toArr2===void 0?void 0:_React$Children$toArr2.filter(Boolean))!==null&&_React$Children$toArr!==void 0?_React$Children$toArr:[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.X)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(a=>a.value).join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+tabValues.map(a=>a.value).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return"docusaurus.tab."+groupId;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error("Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString=\"my-search-param\".");}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace(Object.assign({},history.location,{search:searchParams.toString()}));},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error("Can't select invalid tab value="+newValue);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
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
 */function TabList(_ref){let{className,block,selectedValue,selectValue,tabValues}=_ref;const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",Object.assign({// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>tabRefs.push(tabControl),onKeyDown:handleKeydown,onClick:handleTabChange},attributes,{className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value}),value);})});}function TabContent(_ref3){let{lazy,children,selectedValue}=_ref3;const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:'margin-top--md'});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,Object.assign({},props,tabs)),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,Object.assign({},props,tabs))]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,Object.assign({},props,{children:sanitizeTabsChildren(props.children)}),String(isBrowser));}

/***/ }),

/***/ 644171:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411470);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119365);
/* harmony import */ var _theme_Details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(303999);
/* harmony import */ var _site_src_components_PushAPIReference_PushAPIReference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(303547);


const frontMatter = {
	id: 'docs-chain-ui-components-integrate-push-universal-wallet',
	title: 'Integrate Push Universal Wallet',
	hide_title: false,
	slug: './integrate-push-universal-wallet',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_ui_components--integrate_push_universal_wallet.png'
};
const contentTitle = undefined;
const metadata = {
  "id": "chain/ui-kit/docs-chain-ui-components-integrate-push-universal-wallet",
  "title": "Integrate Push Universal Wallet",
  "description": "Integrate Push Universal Wallet | Customizations | UI Kit | Push Chain Docs",
  "source": "@site/docs/chain/04-ui-kit/01-Integrate-Push-Universal-Wallet.mdx",
  "sourceDirName": "chain/04-ui-kit",
  "slug": "/chain/ui-kit/integrate-push-universal-wallet",
  "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/integrate-push-universal-wallet",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-ui-kit/01-Integrate-Push-Universal-Wallet.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "id": "docs-chain-ui-components-integrate-push-universal-wallet",
    "title": "Integrate Push Universal Wallet",
    "hide_title": false,
    "slug": "./integrate-push-universal-wallet",
    "displayed_sidebar": "pushChainSidebar",
    "sidebar_position": 1,
    "image": "/assets/docs/previews/docs_chain_ui_components--integrate_push_universal_wallet.png"
  },
  "sidebar": "pushChainSidebar",
  "previous": {
    "title": "UI Kit",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit"
  },
  "next": {
    "title": "Customizations",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/customizations"
  }
};
const assets = {

};







const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 2
}, {
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Quickstart",
  "id": "quickstart",
  "level": 2
}, {
  "value": "Customization Parameters",
  "id": "customization-parameters",
  "level": 2
}, {
  "value": "PushUniversalWalletProvider",
  "id": "pushuniversalwalletprovider",
  "level": 3
}, {
  "value": "PushUniversalAccountButton",
  "id": "pushuniversalaccountbutton",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: "Integrate Push Universal Wallet | Customizations | UI Kit | Push Chain Docs"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Universal Wallet gives your app:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Seamless cross-chain"
        }), " wallet integration (EVM, Solana, etc.)"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Provider/consumer"
        }), " hook API for global state"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Built-in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "UI components"
        }), " for connect buttons and modals"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Eliminates the need"
        }), " to manage complex blockchain connections, authentication states, and cross-chain interactions manually"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push Universal Wallet operates on a simple provider-consumer pattern:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Provider Setup"
        }), ": Wrap your application with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "PushUniversalWalletProvider"
        }), " to initialize wallet functionality"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Button Integration"
        }), ": Add ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "PushUniversalAccountButton"
        }), " components where users should connect"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "State Management"
        }), ": Use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "usePushWalletContext"
        }), " hook to access wallet state and methods throughout your app"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push Universal Wallet provides a unified interface for connecting to multiple blockchains, automatically handling authentication and cross-chain interactions without complex blockchain-specific implementations."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      className: "codetabs",
      groupId: "frontend-installation",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "npm",
        attributes: {
          className: "codetab npm"
        },
        default: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @pushchain/ui-kit\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "yarn",
        attributes: {
          className: "codetab yarn"
        },
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @pushchain/ui-kit\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "quickstart",
      children: "Quickstart"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      className: "liveplaytab",
      groupId: "integrate-push-wallet",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "basic",
        label: "Quickstart",
        default: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\\s\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <PushUniversalAccountButton />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "with_hooks",
        label: "With Hooks",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\\s\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  function WalletUI() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n\n    return (\n      <div>\n        <PushUniversalAccountButton />\n        {connectionStatus == 'connected' && (\n          <p>\n            LFG! Push Chain Executor Account (UEA): $\n            {pushChainClient.universal.account}\n          </p>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <WalletUI />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "with_customizations",
        label: "With Customizations",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\\s\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n    login: {\n      email: true,\n      google: true,\n      wallet: {\n        enabled: true,\n      },\n      appPreview: true,\n    },\n    modal: {\n      loginLayout: PushUI.CONSTANTS.LOGIN.SPLIT,\n      connectedLayout: PushUI.CONSTANTS.CONNECTED.HOVER,\n      appPreview: true,\n    },\n  };\n\n  // Define Your App Preview\n  const appMetadata = {\n    logoUrl:\n      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\n    title: 'Test App Title',\n    description: 'Test App Description',\n  };\n\n  function WalletUI() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n\n    return (\n      <div>\n        <PushUniversalAccountButton />\n        {connectionStatus == 'connected' && (\n          <p>LFG! Push Chain Executor Account (UEA): ${pushChainClient.universal.account}</p>\n        )}\n      </div>\n    };\n\n    return (\n      <div>\n        <PushUniversalAccountButton />\n        {connectionStatus == 'connected' && (\n          <p>LFG! Push Chain Executor Account (UEA): ${pushChainClient.universal.account}</p>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>\n      <WalletUI />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "with_pushchainclient_interaction",
        label: "With pushChainClient Interaction",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\\s\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n    login: {\n      email: true,\n      google: true,\n      wallet: {\n        enabled: true,\n      },\n      appPreview: true,\n    },\n    modal: {\n      loginLayout: PushUI.CONSTANTS.LOGIN.SPLIT,\n      connectedLayout: PushUI.CONSTANTS.CONNECTED.HOVER,\n      appPreview: true,\n    },\n  };\n\n  // Define Your App Preview\n  const appMetadata = {\n    logoUrl:\n      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\n    title: 'Test App Title',\n    description: 'Test App Description',\n  };\n\n  function WalletUI() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n\n    const handleSendTransaction = async () => {\n      if (pushChainClient) {\n        try {\n          await pushChainClient.universal.sendTransaction({\n            to: '0xFaE3594C68EDFc2A61b7527164BDAe80bC302108',\n            value: PushChain.utils.helpers.parseUnits('1', 18), // 1 PC\n          });\n        } catch (err) {\n          console.log(err);\n        }\n      }\n    };\n\n    return (\n      <div>\n        <PushUniversalAccountButton />\n        {connectionStatus == 'connected' && (\n          <button onClick={handleSendTransaction}>Send Transaction</button>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>\n      <WalletUI />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "customization-parameters",
      children: "Customization Parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Customize the parameters as per your need and the wallet functionality being used."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "pushuniversalwalletprovider",
      children: "PushUniversalWalletProvider"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Below is a list of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "minimum parameters"
      }), " required to customize the Push Universal Wallet Provider. Check out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/chain/ui-kit/customizations/push-universal-wallet-provider/",
        children: "PushUniversalWalletProvider"
      }), " for more information on how to use and customize the Push Universal Wallet Provider."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_PushAPIReference_PushAPIReference__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Arguments"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Type"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Default"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "config"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "PushUniversalWalletProviderConfig"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "-"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Core configuration object for wallet connections."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "config.network"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "PushUI.CONSTANTS.PUSH_NETWORK.TESTNET"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "-"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["Push Chain network to conenct to. For example: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "PushUI.CONSTANTS.PUSH_NETWORK.TESTNET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                summary: "PushUI.CONSTANTS.PUSH_NETWORK",
                className: "alert alert--minimal-api-table",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.PUSH_NETWORK.TESTNET"
                }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT"
                }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.PUSH_NETWORK.LOCALNET"
                })]
              })]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "config.app"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "{ title, description, logoUrl }"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "—"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "(Optional) app metadata for login/preview in the modal."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "config.login"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "{ email, google, wallet, appPreview }"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "—"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Toggle login methods."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "config.modal"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "{ loginLayout, connectedLayout, appPreview }"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "—"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Customize the modal layout."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "themeMode"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "'light'"
              }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "'dark'"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "light"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Force a particular theme."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "themeOverrides"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Record<string,string> & { light, dark }"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "—"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Override CSS vars globally or per theme."
            })]
          })]
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "pushuniversalaccountbutton",
      children: "PushUniversalAccountButton"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Check out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/chain/ui-kit/customizations/push-universal-account-button/",
        children: "PushUniversalAccountButton"
      }), " for more information on how to use and customize the Push Universal Account Button."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Customize the provider in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/push-universal-wallet-provider/",
          children: "PushUniversalWalletProvider"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Style your connect button in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/push-universal-account-button/",
          children: "PushUniversalAccountButton"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Master hooks with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/use-push-wallet-context/",
          children: "usePushWalletContext"
        })]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
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