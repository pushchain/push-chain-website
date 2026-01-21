"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[64212],{

/***/ 13250
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogAuthorsListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(445500);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(117559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/translations/blogTranslations.js
var blogTranslations = __webpack_require__(796461);
// EXTERNAL MODULE: ./src/theme/BlogLayout/index.js
var BlogLayout = __webpack_require__(729520);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(841463);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(751107);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 22 modules
var Author = __webpack_require__(539907);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Pages/BlogAuthorsListPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"authorListItem":"authorListItem_n3yI"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Pages/BlogAuthorsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AuthorListItem(_ref){let{author}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:styles_module.authorListItem,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Author/* default */.A,{as:"h2",author:author,count:author.count})});}function AuthorsList(_ref2){let{authors}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx/* default */.A)('margin-vert--lg',styles_module.authorsListSection),children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{children:authors.map(author=>/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorListItem,{author:author},author.key))})});}function BlogAuthorsListPage(_ref3){let{authors,sidebar}=_ref3;const title=(0,blogTranslations/* translateBlogAuthorsListPageTitle */.uz)();return/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.blogPages,ThemeClassNames/* ThemeClassNames */.G.page.blogAuthorsListPage),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:"blog_authors_list"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogLayout/* default */.A,{sidebar:sidebar,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorsList,{authors:authors})]})]});}

/***/ },

/***/ 381418
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blogpreview-a0354f504a7d016efc694f4da0f5bac6.png");

/***/ },

/***/ 729520
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(428176);
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

/***/ }

}]);