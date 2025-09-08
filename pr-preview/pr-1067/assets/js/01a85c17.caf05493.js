"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[8209],{

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
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(328774);
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
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(445500);
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
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(777255);
/* harmony import */ var _site_src_components_SEO_SchemaMarkup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(172619);
/* harmony import */ var _site_src_segments_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(941398);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(330922);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Internal Components
// External Components
function BlogLayout(props){const{children}=props;// Internationalization
const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .Bd)();const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();const pathname=location===null||location===void 0?void 0:location.pathname;const isBlogMainPage=pathname.includes('/page/')||pathname=='/blog/'||pathname=='/blog';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{title:isBlogMainPage?t('pages.blog.seo.title'):'',description:isBlogMainPage?t('pages.blog.seo.description'):'',children:[isBlogMainPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{property:"og:url",content:"https://push.org/blog"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{property:"og:type",content:"website"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{property:"og:title",content:t('pages.blog.seo.og-title')}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{property:"og:description",content:t('pages.blog.seo.og-description')}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{property:"og:image",content:(__webpack_require__(381418)/* ["default"] */ .A)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{name:"twitter:site",content:"@PushChain"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{name:"twitter:creator",content:"@PushChain"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{name:"twitter:title",content:t('pages.blog.seo.twitter-title')}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{name:"twitter:description",content:t('pages.blog.seo.twitter-description')}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta",{name:"twitter:image",content:(__webpack_require__(381418)/* ["default"] */ .A)})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_site_src_components_SEO_SchemaMarkup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{type:"Blog",pageDescription:t('pages.blog.seo.description'),pageUrl:"https://push.org/blog"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__/* .Section */ .wn,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .UC,{className:"skeletonextrasmall blog clip",children:children})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_site_src_segments_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{})]});}

/***/ })

}]);