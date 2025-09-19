"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[35317],{

/***/ 291971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NotFoundContent)
/* harmony export */ });
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(956347);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320053);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(944404);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(721312);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(751107);
/* harmony import */ var _site_src_hooks_useSiteBaseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(811494);
/* harmony import */ var _site_src_segments_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(941398);
/* harmony import */ var _site_static_assets_website_chain_ChainLogoDark_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(360622);
/* harmony import */ var _css_SharedStyling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(113490);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(474848);
/* eslint-disable */// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
function NotFoundContent(_ref){let{className}=_ref;const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__/* .useLocation */ .zy)();const baseURL=(0,_site_src_hooks_useSiteBaseUrl__WEBPACK_IMPORTED_MODULE_6__/* .useSiteBaseUrl */ .p)();// Normalize the pathname by removing the "push-website/pr-preview/pr-XXX" prefix
const normalizedPathname=location!==null&&location!==void 0&&location.pathname.startsWith('/push-chain-website')?location===null||location===void 0?void 0:location.pathname.replace(/^\/push-chain-website\/pr-preview\/pr-\d+/,''):location.pathname;// no old docs redirection now
const oldDocsUrls=[];// Determine if the pathname starts with any of the oldDocsUrls
const isOldDocsPage=oldDocsUrls.some(url=>location===null||location===void 0?void 0:location.pathname.startsWith(baseURL+url));// Determine if the pathname starts with '/docs'
const isDocsOrBlogsPage=(location===null||location===void 0?void 0:location.pathname.startsWith(baseURL+'/docs'))||(location===null||location===void 0?void 0:location.pathname.startsWith(baseURL+'/blog'));// Redirect logic for old docs pages
(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(isOldDocsPage){const externalUrl="https://comms.push.org"+normalizedPathname;window.location.href=externalUrl;// Redirect to external site
}},[isOldDocsPage,location.pathname]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,{children:isOldDocsPage?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Container,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(PushLogoBlackContainer,{className:"headerlogo",flex:"initial",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_site_static_assets_website_chain_ChainLogoDark_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Message,{children:"Redirecting..."})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PageContainer,{isDocsOrBlogsPage:isDocsOrBlogsPage,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_9__/* .Section */ .wn,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_9__/* .Content */ .UC,{className:"skeletonsmall",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("main",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('container margin-vert--xl',className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"row",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"col col--6 col--offset-3",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{as:"h1",className:"hero__title",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})}),isDocsOrBlogsPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_9__/* .ItemH */ .Oj,{background:"var(--ifm-color-neutral-200)",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_site_src_segments_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{showPattern:false})})]})});}const PageContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({displayName:"Content__PageContainer",componentId:"sc-1voh916-0"})(["display:flex;flex-direction:column;",";",";",";"],_ref2=>{let{isDocsOrBlogsPage}=_ref2;return!isDocsOrBlogsPage&&'background: var(--ifm-color-black)';},_ref3=>{let{isDocsOrBlogsPage}=_ref3;return isDocsOrBlogsPage&&'min-height: 100vh;';},_ref4=>{let{isDocsOrBlogsPage}=_ref4;return isDocsOrBlogsPage?'color: var(--ifm-color-primary-text) !important':'color: var(--ifm-color-white) !important';});const Container=styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({displayName:"Content__Container",componentId:"sc-1voh916-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;color:white;text-align:center;"]);const PushLogoBlackContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_9__/* .ItemV */ .y8).withConfig({displayName:"Content__PushLogoBlackContainer",componentId:"sc-1voh916-2"})(["display:flex;flex-direction:row;align-items:center;color:var(--ifm-color-white);"]);const Message=styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({displayName:"Content__Message",componentId:"sc-1voh916-3"})(["font-size:18px;margin-top:8px;"]);

/***/ }),

/***/ 360622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
var _path, _path2;
const _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgChainLogoDark = _ref => {
  let {
      title,
      titleId
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 217,
    height: 50,
    fill: "none",
    viewBox: "0 0 217 50",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#D548EC",
    d: "M18.095 44C16.94 44 16 43.074 16 41.944V17.73c0-1.137.94-2.056 2.095-2.056h5.413c1.265 0 2.288-1.008 2.288-2.247V8.056c0-1.137.94-2.056 2.094-2.056h18.015C47.06 6 48 6.919 48 8.056v14.718c0 1.13-.94 2.056-2.095 2.056h-5.413c-1.264 0-2.288 1.007-2.288 2.246v5.31c0 1.13-.94 2.056-2.094 2.056h-8.026c-1.265 0-2.288 1.008-2.288 2.247v5.255c0 1.13-.94 2.056-2.095 2.056zm9.989-28.388c-1.265 0-2.288 1.008-2.288 2.247v4.724c0 1.24 1.023 2.247 2.288 2.247h7.832c1.265 0 2.288-1.008 2.288-2.247V17.86c0-1.24-1.023-2.247-2.288-2.247z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M68.74 16.145a10 10 0 0 0-1.415-.098h-6.918a.406.406 0 0 0-.407.403v17.06c0 .222.182.403.407.403h2.153c.224 0 .407-.181.407-.404V27.86c0-.222.182-.403.407-.403h3.95c.32 0 .96-.024 1.415-.098 3.053-.463 4.518-2.715 4.518-5.6 0-2.887-1.441-5.14-4.518-5.614m-.419 8.45c-.344.097-.788.121-1.12.121h-3.827a.406.406 0 0 1-.407-.403v-5.111c0-.223.182-.404.407-.404h3.828c.332 0 .775.025 1.119.11 1.476.377 1.945 1.728 1.945 2.849 0 1.12-.469 2.471-1.945 2.836zM101.467 23.81l-3.175-.877c-1.194-.317-2.56-.79-2.56-2.094s1.55-2.276 3.324-2.24c1.707.044 3.253.958 3.753 2.596a.41.41 0 0 0 .459.273l2.374-.408a.405.405 0 0 0 .322-.512c-.905-2.98-3.395-4.655-6.873-4.69-3.606-.024-6.473 1.741-6.473 5.125 0 3.093 2.376 4.03 3.95 4.48l4.58 1.34c1.342.402 1.968 1.047 1.968 2.022 0 1.62-1.771 2.521-3.668 2.521-2.025 0-3.73-1.056-4.347-2.932a.41.41 0 0 0-.448-.279l-2.306.348a.405.405 0 0 0-.338.483c.716 3.195 3.539 5.132 7.255 5.132 3.717 0 6.955-1.827 6.955-5.467s-3.028-4.358-4.75-4.821zM89.57 16.154h-2.173a.406.406 0 0 0-.407.403v13.738a.55.55 0 0 1-.559.553h-7.206a.55.55 0 0 1-.559-.554V16.557a.406.406 0 0 0-.407-.404h-2.172a.406.406 0 0 0-.407.404v13.89c0 .222.182.402.407.402h2.019a.551.551 0 0 1 .559.554v2.001c0 .223.182.404.406.404h7.512c.225 0 .407-.181.407-.404v-2a.55.55 0 0 1 .559-.554h2.019c.224 0 .407-.181.407-.404v-13.89a.406.406 0 0 0-.407-.403zM122.794 16.213h-2.142a.406.406 0 0 0-.407.403v6.573a.406.406 0 0 1-.407.403h-7.581a.405.405 0 0 1-.407-.403v-6.573a.406.406 0 0 0-.407-.403h-2.153a.405.405 0 0 0-.407.403v16.728c0 .222.182.403.407.403h2.153c.224 0 .407-.18.407-.403v-6.597c0-.222.182-.403.407-.403h7.581c.224 0 .407.18.407.403v6.597c0 .222.183.403.407.403h2.142c.224 0 .407-.18.407-.403V16.616a.406.406 0 0 0-.407-.403M138.172 17.926c2.982 0 4.834 1.618 5.56 4.219l2.22-.584c-1.006-3.479-3.693-5.704-7.78-5.704-5.289 0-8.246 3.722-8.246 9.121s2.957 9.121 8.246 9.121c4.087 0 6.774-2.225 7.78-5.703l-2.22-.584c-.724 2.602-2.578 4.22-5.56 4.22-3.95 0-5.962-2.858-5.938-7.055s1.988-7.055 5.938-7.055zM159.766 24.253h-9.301v-7.724h-2.184v17.514h2.184v-7.735h9.301v7.735h2.185V16.529h-2.185zM171.518 16.486l3.088 10.466-6.176.003zh-2.106L164.082 34h2.271l1.52-5.01h7.302l1.51 5.01h2.269l-5.346-17.514zM182.992 16.615h-2.183v17.512h2.183zM197.806 16.629v13.683l-9.214-13.683h-2.209v17.513h2.209V20.448l9.214 13.694h2.21V16.63z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgChainLogoDark);

/***/ }),

/***/ 635317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(721312);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(956347);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(445500);
/* harmony import */ var _site_src_hooks_useSiteBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(811494);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(330922);
/* harmony import */ var _theme_NotFound_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(291971);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(474848);
/* eslint-disable */// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
// Internal Components
function Index(){const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .zy)();const pathname=location===null||location===void 0?void 0:location.pathname;const baseURL=(0,_site_src_hooks_useSiteBaseUrl__WEBPACK_IMPORTED_MODULE_4__/* .useSiteBaseUrl */ .p)();const title=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.NotFound.title',message:'Page Not Found'});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .PageMetadata */ .be,{title:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{showNavbar:!pathname.startsWith(baseURL+'/docs')&&!pathname.startsWith(baseURL+'/blog')?'website':'docusaurus',children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_NotFound_Content__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{})})]});}

/***/ })

}]);