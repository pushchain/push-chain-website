"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[8209],{

/***/ 218256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogSidebar)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(224581);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(175489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(721312);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(956347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(299169);
;// ./node_modules/@docusaurus/theme-common/lib/utils/blogUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isVisible(item,pathname){if(item.unlisted&&!(0,routesUtils/* isSamePath */.ys)(item.permalink,pathname)){return false;}return true;}/**
 * Return the visible blog sidebar items to display.
 * Unlisted items are filtered.
 */function useVisibleBlogSidebarItems(items){const{pathname}=(0,react_router/* useLocation */.zy)();return (0,react.useMemo)(()=>items.filter(item=>isVisible(item,pathname)),[items,pathname]);}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"sidebar":"sidebar_re4s","sidebarItemTitle":"sidebarItemTitle_pO2u","sidebarItemList":"sidebarItemList_Yudw","sidebarItem":"sidebarItem__DBe","sidebarItemLink":"sidebarItemLink_mo7H","sidebarItemLinkActive":"sidebarItemLinkActive_I1ZP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarDesktop(_ref){let{sidebar}=_ref;const items=useVisibleBlogSidebarItems(sidebar.items);return/*#__PURE__*/(0,jsx_runtime.jsx)("aside",{className:"col col--3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{className:(0,clsx/* default */.A)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.T)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(styles_module.sidebarItemTitle,'margin-bottom--md'),children:sidebar.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)(styles_module.sidebarItemList,'clean-list'),children:items.map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:styles_module.sidebarItem,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{isNavLink:true,to:item.permalink,className:styles_module.sidebarItemLink,activeClassName:styles_module.sidebarItemLinkActive,children:item.title})},item.permalink))})]})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(475600);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarMobileSecondaryMenu(_ref){let{sidebar}=_ref;const items=useVisibleBlogSidebarItems(sidebar.items);return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"menu__list",children:items.map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"menu__list-item",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{isNavLink:true,to:item.permalink,className:"menu__link",activeClassName:"menu__link--active",children:item.title})},item.permalink))});}function BlogSidebarMobile(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.GX,{component:BlogSidebarMobileSecondaryMenu,props:props});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar(_ref){let{sidebar}=_ref;const windowSize=(0,useWindowSize/* useWindowSize */.l)();if(!(sidebar!==null&&sidebar!==void 0&&sidebar.items.length)){return null;}// Mobile sidebar doesn't need to be server-rendered
if(windowSize==='mobile'){return/*#__PURE__*/(0,jsx_runtime.jsx)(BlogSidebarMobile,{sidebar:sidebar});}return/*#__PURE__*/(0,jsx_runtime.jsx)(BlogSidebarDesktop,{sidebar:sidebar});}

/***/ }),

/***/ 293751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(175489);
;// ./src/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tagRegular":"tagRegular_bmnp","tagWithCount":"tagWithCount_vddX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){let{permalink,label,count}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:permalink,className:(0,clsx_m/* default */.A)(count?styles_module.tagWithCount:styles_module.tagRegular),children:label});}

/***/ }),

/***/ 381418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blogpreview-a0354f504a7d016efc694f4da0f5bac6.png");

/***/ }),

/***/ 390536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogTagsListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(721312);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const translateTagsPageTitle=()=>(0,Translate/* translate */.T)({id:'theme.tags.tagsPageTitle',message:'Tags',description:'The title of the tag list page'});function getTagLetter(tag){return tag[0].toUpperCase();}/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */function listTagsByLetters(tags){const groups={};Object.values(tags).forEach(tag=>{var _groups$initial;const initial=getTagLetter(tag.label);(_groups$initial=groups[initial])!==null&&_groups$initial!==void 0?_groups$initial:groups[initial]=[];groups[initial].push(tag);});return Object.entries(groups)// Sort letters
.sort((_ref,_ref2)=>{let[letter1]=_ref;let[letter2]=_ref2;return letter1.localeCompare(letter2);}).map(_ref3=>{let[letter,letterTags]=_ref3;// Sort tags inside a letter
const sortedTags=letterTags.sort((tag1,tag2)=>tag1.label.localeCompare(tag2.label));return{letter,tags:sortedTags};});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(169024);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(117559);
// EXTERNAL MODULE: ./src/theme/BlogLayout/index.js
var BlogLayout = __webpack_require__(729520);
// EXTERNAL MODULE: ./src/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(293751);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(21532);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// import styles from "./styles.module.css";
// Internal Configs
function TagLetterEntryItem(_ref){let{letterEntry}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TagSection,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:letterEntry.letter}),/*#__PURE__*/(0,jsx_runtime.jsx)(Ul,{children:letterEntry.tags.map(tag=>/*#__PURE__*/(0,jsx_runtime.jsx)(Li,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* default */.A,Object.assign({},tag))},tag.permalink))})]});}function TagsListByLetter(_ref2){let{tags}=_ref2;const letterList=listTagsByLetters(tags);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{children:letterList.map(letterEntry=>/*#__PURE__*/(0,jsx_runtime.jsx)(TagLetterEntryItem,{letterEntry:letterEntry},letterEntry.letter))});}const Li=styled_components_browser_esm/* default */.Ay.li.withConfig({displayName:"TagsListByLetter__Li",componentId:"sc-oi5ks4-0"})(["list-style:none;display:flex !important;margin:1rem 0.4rem 0.5rem 0;"]);const Ul=styled_components_browser_esm/* default */.Ay.ul.withConfig({displayName:"TagsListByLetter__Ul",componentId:"sc-oi5ks4-1"})(["margin:0 0;padding:0 0;display:grid !important;grid-template-columns:repeat(4,minmax(0,1fr));@media ","{grid-template-columns:repeat(2,minmax(0,1fr));}@media ","{grid-template-columns:repeat(1,minmax(0,1fr));}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const TagSection=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"TagsListByLetter__TagSection",componentId:"sc-oi5ks4-2"})(["margin:25px 0;&.h2{color:var(--ifm-color-secondary-blog);}"]);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(841463);
;// ./src/theme/BlogTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// import styles from "./styles.module.css";
// Internal Configs
function BlogTagsListPage(_ref){let{tags,sidebar}=_ref;const title=translateTagsPageTitle();return/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.blogPages,ThemeClassNames/* ThemeClassNames */.G.page.blogTagsListPage),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:"blog_tags_list"}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogLayout/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogTagsListPage_TagSection,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListByLetter,{tags:tags})]})]});}const BlogTagsListPage_TagSection=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"BlogTagsListPage__TagSection",componentId:"sc-1nmnnuz-0"})(["width:1120px !important;margin:50px auto;&.h1{color:var(--ifm-color-secondary-blog);}@media ","{width:90% !important;}"],globals/* device */.jO.laptopL);

/***/ }),

/***/ 729520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogLayout)
/* harmony export */ });
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(705260);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(956347);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296540);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(777255);
/* harmony import */ var _site_src_components_SEO_SchemaMarkup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(172619);
/* harmony import */ var _theme_BlogSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(218256);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(957631);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21532);
/* harmony import */ var _segments_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(523296);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// External Components
function BlogLayout(props){const{sidebar,toc,children}=props;// Internationalization
const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .Bd)();const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();const pathname=location===null||location===void 0?void 0:location.pathname;const isBlogMainPage=pathname.includes('/page/')||pathname=='/blog/'||pathname=='/blog';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{title:isBlogMainPage?t('pages.blog.seo.title'):'',description:isBlogMainPage?t('pages.blog.seo.description'):'',children:[isBlogMainPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{property:"og:url",content:"https://push.org/blog"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{property:"og:type",content:"website"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{property:"og:title",content:t('pages.blog.seo.og-title')}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{property:"og:description",content:t('pages.blog.seo.og-description')}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{property:"og:image",content:(__webpack_require__(381418)/* ["default"] */ .A)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{name:"twitter:site",content:"@PushChain"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{name:"twitter:creator",content:"@PushChain"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{name:"twitter:title",content:t('pages.blog.seo.twitter-title')}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{name:"twitter:description",content:t('pages.blog.seo.twitter-description')}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta",{name:"twitter:image",content:(__webpack_require__(381418)/* ["default"] */ .A)})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_site_src_components_SEO_SchemaMarkup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{type:"Blog",pageDescription:t('pages.blog.seo.description'),pageUrl:"https://push.org/blog"})]}),toc?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(BlogItem,{className:"blog-section",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BlogMain,{className:"mainItem",itemScope:true,itemType:"http://schema.org/Blog",children:children}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TOC,{className:"",children:toc})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"container blog-section",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_theme_BlogSidebar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{sidebar:sidebar}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BlogMain,{className:"mainItem",itemScope:true,itemType:"http://schema.org/Blog",children:children})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_segments_Footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{})]});}const BlogItem=styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay.div.withConfig({displayName:"BlogLayout__BlogItem",componentId:"sc-1ij6avm-0"})(["width:calc(100% - 68px);max-width:1356px !important;margin:0 auto !important;@media (min-width:1200px){display:flex;flex-direction:row;justify-content:space-between;gap:clamp(64px,6vw,128px);}"]);const BlogMain=styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay.main.withConfig({displayName:"BlogLayout__BlogMain",componentId:"sc-1ij6avm-1"})(["margin:0 auto;@media (min-width:1200px){width:75%;}@media (min-width:820px){margin:0 24px;}"]);const TOC=styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay.div.withConfig({displayName:"BlogLayout__TOC",componentId:"sc-1ij6avm-2"})(["display:none;@media (min-width:1200px){max-width:250px;display:block;margin-top:100px;}"]);

/***/ })

}]);