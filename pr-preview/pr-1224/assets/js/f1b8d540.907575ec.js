"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[30523],{

/***/ 976170
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ useTweetMetrics)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(765251);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(838193);
/* eslint-disable @typescript-eslint/no-explicit-any */async function fetchTweetMetrics(tweetId){const url="https://us-east1-push-prod-apps.cloudfunctions.net/pushpointsrewardsystem/twitter/tweetMetrics?id="+tweetId;const response=await fetch(url);if(!response.ok){throw new Error("Error "+response.status+": "+response.statusText);}return response.json();}function useTweetMetrics(tweetId){if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM){return{data:undefined,isLoading:true,error:null,isError:false,isSuccess:false,refetch:()=>Promise.resolve({})};}return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__/* .useQuery */ .I)({queryKey:['tweetMetrics',tweetId],queryFn:()=>fetchTweetMetrics(tweetId),enabled:!!tweetId,staleTime:1000*60,retry:1,refetchOnWindowFocus:false});}

/***/ },

/***/ 495466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ SPINNER_TYPE),
  A: () => (/* binding */ Spinner)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
;// ./static/assets/src/components/reusables/spinners/checkmark.svg
var _path;
const _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgCheckmark = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    fill: "#30CC8B",
    d: "M19.75 0A19.75 19.75 0 1 0 39.5 19.75 19.79 19.79 0 0 0 19.75 0m9.4 16.294L18.022 26.928c-.288.271-.669.42-1.064.418a1.46 1.46 0 0 1-1.044-.418l-5.564-5.317a1.52 1.52 0 1 1 2.089-2.203l4.52 4.311 10.102-9.628a1.52 1.52 0 0 1 2.09 2.203"
  })));
};
/* harmony default export */ const checkmark = (SvgCheckmark);
;// ./static/assets/src/components/reusables/spinners/error.svg
var error_path;
const error_excluded = ["title", "titleId"];
function error_extends() { return error_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, error_extends.apply(null, arguments); }
function error_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = error_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function error_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgError = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = error_objectWithoutProperties(_ref, error_excluded);
  return /*#__PURE__*/react.createElement("svg", error_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, error_path || (error_path = /*#__PURE__*/react.createElement("path", {
    fill: "#E93636",
    d: "M20 .5c-3.9 0-7.6 1.1-10.8 3.3C6 5.9 3.5 9 2 12.5.5 16.1.1 20 .9 23.8s2.6 7.3 5.3 10 6.2 4.6 10 5.3c3.8.8 7.7.4 11.3-1.1s6.6-4 8.8-7.2c2.1-3.2 3.3-7 3.3-10.8 0-5.2-2.1-10.1-5.7-13.8C30.1 2.6 25.2.5 20 .5M18.5 11c0-.4.2-.8.4-1.1.3-.3.7-.4 1.1-.4s.8.2 1.1.4c.3.3.4.7.4 1.1v10.5c0 .4-.2.8-.4 1.1s-.7.4-1.1.4-.8-.2-1.1-.4c-.3-.3-.4-.7-.4-1.1zM20 30.5c-.4 0-.9-.1-1.2-.4s-.7-.6-.8-1c-.2-.4-.2-.9-.1-1.3q.15-.6.6-1.2.45-.45 1.2-.6c.4-.1.9 0 1.3.1.4.2.8.5 1 .8s.4.8.4 1.2c0 .6-.2 1.2-.7 1.6-.5.6-1.1.8-1.7.8"
  })));
};
/* harmony default export */ const error = (SvgError);
;// ./static/assets/src/components/reusables/spinners/spinner.svg
var spinner_path;
const spinner_excluded = ["title", "titleId"];
function spinner_extends() { return spinner_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, spinner_extends.apply(null, arguments); }
function spinner_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = spinner_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function spinner_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgSpinner = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = spinner_objectWithoutProperties(_ref, spinner_excluded);
  return /*#__PURE__*/react.createElement("svg", spinner_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 42",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, spinner_path || (spinner_path = /*#__PURE__*/react.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.759 5.19v5.19M31.77 9.747l-3.665 3.665M36.327 20.759h-5.19M31.77 31.77l-3.665-3.665M20.759 36.327v-5.19M9.747 31.77l3.665-3.665M5.19 20.759h5.19M9.747 9.747l3.665 3.665"
  })));
};
/* harmony default export */ const spinner = (SvgSpinner);
;// ./static/assets/src/components/reusables/spinners/warning.svg
var warning_path;
const warning_excluded = ["title", "titleId"];
function warning_extends() { return warning_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, warning_extends.apply(null, arguments); }
function warning_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = warning_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function warning_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgWarning = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = warning_objectWithoutProperties(_ref, warning_excluded);
  return /*#__PURE__*/react.createElement("svg", warning_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, warning_path || (warning_path = /*#__PURE__*/react.createElement("path", {
    fill: "#E2B71D",
    d: "M39.1 31.2 23.7 4.6c-.4-.6-.9-1.2-1.5-1.5-.6-.4-1.4-.6-2.1-.6s-1.5.2-2.1.6-1.2.9-1.5 1.5L1 31.2c-.4.6-.6 1.4-.6 2.1s.2 1.5.6 2.1.9 1.2 1.5 1.5c.6.4 1.4.6 2.1.6h30.8c.7 0 1.5-.2 2.1-.6s1.2-.9 1.5-1.5c.4-.6.6-1.4.6-2.1.1-.7-.1-1.4-.5-2.1M18.7 16.5c0-.4.1-.7.4-1s.6-.4 1-.4.7.1 1 .4.4.6.4 1v7c0 .4-.1.7-.4 1s-.6.4-1 .4-.7-.1-1-.4-.4-.6-.4-1zm1.4 15.4c-.4 0-.8-.1-1.2-.4-.3-.2-.6-.6-.8-.9-.2-.4-.2-.8-.1-1.2s.3-.8.6-1.1.7-.5 1.1-.6.8 0 1.2.1c.4.2.7.4.9.8.2.3.4.8.4 1.2q0 .9-.6 1.5c-.4.4-1 .6-1.5.6"
  })));
};
/* harmony default export */ const warning = (SvgWarning);
;// ./static/assets/src/components/reusables/spinners/whitelist.svg
var _style, _defs, _defs2, _defs3, _defs4, _defs5, _defs6, _defs7, _defs8, _defs9, _defs0, _defs1, _defs10, _defs11, _defs12, _defs13, _defs14, _defs15, _defs16, _defs17, _defs18, _defs19, _defs20, _defs21, _defs22, _defs23, _defs24, _defs25, _defs26, _defs27, _defs28, _defs29, _defs30, _defs31, _defs32, _defs33, _defs34, _defs35, _defs36, _defs37, _defs38, _defs39, _defs40, _defs41, _defs42, _defs43, _defs44, whitelist_path, _path2, _path3, _path4, _path5, _ellipse, _ellipse2;
const whitelist_excluded = ["title", "titleId"];
function whitelist_extends() { return whitelist_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, whitelist_extends.apply(null, arguments); }
function whitelist_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = whitelist_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function whitelist_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgWhitelist = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = whitelist_objectWithoutProperties(_ref, whitelist_excluded);
  return /*#__PURE__*/react.createElement("svg", whitelist_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xmlSpace: "preserve",
    id: "Layer_1",
    x: 0,
    y: 0,
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _style || (_style = /*#__PURE__*/react.createElement("style", null, ".st46{fill:#1d1b2b}.st47{fill:#fff}")), _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_1_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000018918372174887251900000015824477832139132297_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_1_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 38.8h40v2.3H0z",
    style: {
      clipPath: "url(#SVGID_00000018918372174887251900000015824477832139132297_)",
      fill: "#fff"
    }
  }), _defs2 || (_defs2 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000061450589948466646510000013504075378911607728_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000055682935648448171650000016603174337301644678_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000061450589948466646510000013504075378911607728_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 37.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000055682935648448171650000016603174337301644678_)",
      fill: "#fff"
    }
  }), _defs3 || (_defs3 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000163034462217135671110000003281837544710597775_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000075864108932851334380000002986285549391122838_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000163034462217135671110000003281837544710597775_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 37h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000075864108932851334380000002986285549391122838_)",
      fill: "#fffeff"
    }
  }), _defs4 || (_defs4 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000006692677491398917330000017482009431168088462_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000003075014919243425030000011766347674950723261_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000006692677491398917330000017482009431168088462_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 36.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000003075014919243425030000011766347674950723261_)",
      fill: "#fffdfe"
    }
  }), _defs5 || (_defs5 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000141442324025079556200000011100813681160334496_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000012438998958180247690000011278953616519101884_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000141442324025079556200000011100813681160334496_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 35.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000012438998958180247690000011278953616519101884_)",
      fill: "#fffcfe"
    }
  }), _defs6 || (_defs6 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000011004148776498408480000017310563633542503075_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000144330688052182505440000016428669231102353283_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000011004148776498408480000017310563633542503075_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 34.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000144330688052182505440000016428669231102353283_)",
      fill: "#fffbfd"
    }
  }), _defs7 || (_defs7 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000155850701760738328060000010413364524085188518_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000048473522845518449670000008113787965347178399_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000155850701760738328060000010413364524085188518_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 33.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000048473522845518449670000008113787965347178399_)",
      fill: "#fffafd"
    }
  }), _defs8 || (_defs8 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000137131541068540407790000016247830109529001619_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000108272877519578440370000001025939932002251165_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000137131541068540407790000016247830109529001619_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 32.7h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000108272877519578440370000001025939932002251165_)",
      fill: "#fff9fd"
    }
  }), _defs9 || (_defs9 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000109720934535134491310000011648451755277933958_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000162318190728897410240000002855588279128880782_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000109720934535134491310000011648451755277933958_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 31.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000162318190728897410240000002855588279128880782_)",
      fill: "#fff8fc"
    }
  }), _defs0 || (_defs0 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000096747640785436913280000001512168473767242389_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000063592068306203697200000018347425271494145700_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000096747640785436913280000001512168473767242389_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 31h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000063592068306203697200000018347425271494145700_)",
      fill: "#fff7fc"
    }
  }), _defs1 || (_defs1 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000013157299449276695760000003349513374129929912_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160167297034968768660000008956667901020093587_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000013157299449276695760000003349513374129929912_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 30.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000160167297034968768660000008956667901020093587_)",
      fill: "#fff6fc"
    }
  }), _defs10 || (_defs10 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000072961236756052102270000006627217966794170288_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000061451857290518586430000006541355441525342346_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000072961236756052102270000006627217966794170288_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 29.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000061451857290518586430000006541355441525342346_)",
      fill: "#fff5fb"
    }
  }), _defs11 || (_defs11 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000120542686423071063450000000505450966208064155_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000133528992170648054940000016960040424049888420_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000120542686423071063450000000505450966208064155_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 28.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000133528992170648054940000016960040424049888420_)",
      fill: "#fff4fb"
    }
  }), _defs12 || (_defs12 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000008119827539101434540000000687617348997178507_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000064331356223243395160000010623984466305916805_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000008119827539101434540000000687617348997178507_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 27.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000064331356223243395160000010623984466305916805_)",
      fill: "#fff3fa"
    }
  }), _defs13 || (_defs13 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000171682524410186990790000005811129307630537647_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000078763078787120445770000007001818294259582600_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000171682524410186990790000005811129307630537647_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 26.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000078763078787120445770000007001818294259582600_)",
      fill: "#fff2fa"
    }
  }), _defs14 || (_defs14 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000065050872124673854550000011491961441940586880_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000057131134804002396060000009557613862229203384_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000065050872124673854550000011491961441940586880_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 25.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000057131134804002396060000009557613862229203384_)",
      fill: "#fff1fa"
    }
  }), _defs15 || (_defs15 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000087385040504023843390000018418788957200632503_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000076563080506624790950000010371028636572745404_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000087385040504023843390000018418788957200632503_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 24.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000076563080506624790950000010371028636572745404_)",
      fill: "#fff0f9"
    }
  }), _defs16 || (_defs16 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000101804543001505160640000015307778896616661144_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000013899847274804831830000000233545883125910147_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000101804543001505160640000015307778896616661144_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 24h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000013899847274804831830000000233545883125910147_)",
      fill: "#ffeff9"
    }
  }), _defs17 || (_defs17 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000117652643455354779510000000732370446844200352_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000155129756036335704530000000175185976145107875_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000117652643455354779510000000732370446844200352_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 23.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000155129756036335704530000000175185976145107875_)",
      fill: "#ffeef9"
    }
  }), _defs18 || (_defs18 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000176745914730401483050000012806336722484400315_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000060733723242332595490000001634423417351642253_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000176745914730401483050000012806336722484400315_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 22.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000060733723242332595490000001634423417351642253_)",
      fill: "#ffedf8"
    }
  }), _defs19 || (_defs19 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000040550745487777584420000000758410058113256618_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000091712846254972437900000013214413499904591794_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000040550745487777584420000000758410058113256618_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 21.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000091712846254972437900000013214413499904591794_)",
      fill: "#ffecf8"
    }
  }), _defs20 || (_defs20 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000050622890411462128450000006918849132186199463_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000134956723128218873730000014747212991663680666_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000050622890411462128450000006918849132186199463_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 20.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000134956723128218873730000014747212991663680666_)",
      fill: "#ffebf7"
    }
  }), _defs21 || (_defs21 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000042013878504789517810000002886984029806200970_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000018227916600075664650000004189574246866099331_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000042013878504789517810000002886984029806200970_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 19.7h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000018227916600075664650000004189574246866099331_)",
      fill: "#ffeaf7"
    }
  }), _defs22 || (_defs22 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000016072037337204008790000009927608052063207089_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000150807696221521878140000004991997934014485179_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000016072037337204008790000009927608052063207089_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 18.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000150807696221521878140000004991997934014485179_)",
      fill: "#ffe9f7"
    }
  }), _defs23 || (_defs23 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000084514207464486415670000003310696959034258854_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000058578791989943792610000012383172789239653264_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000084514207464486415670000003310696959034258854_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 17.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000058578791989943792610000012383172789239653264_)",
      fill: "#ffe8f6"
    }
  }), _defs24 || (_defs24 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000168111191864700588090000007796528425639013510_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000070078952479914823790000004488696996978778007_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000168111191864700588090000007796528425639013510_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 17.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000070078952479914823790000004488696996978778007_)",
      fill: "#ffe7f6"
    }
  }), _defs25 || (_defs25 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000075130085298569226120000004569212675584808839_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000047766726030502953150000010023485457926448316_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000075130085298569226120000004569212675584808839_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 16.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000047766726030502953150000010023485457926448316_)",
      fill: "#ffe6f5"
    }
  }), _defs26 || (_defs26 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000168116181925040745410000002903075994739185055_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000043452126976694784750000012308186940523659704_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000168116181925040745410000002903075994739185055_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 15.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000043452126976694784750000012308186940523659704_)",
      fill: "#ffe5f5"
    }
  }), _defs27 || (_defs27 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000177448109613987390960000011019027865223704209_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000021812416521141934700000002333976695276009393_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000177448109613987390960000011019027865223704209_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 14.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000021812416521141934700000002333976695276009393_)",
      fill: "#ffe4f5"
    }
  }), _defs28 || (_defs28 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000111151405705220863100000001025211950351930558_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000059989357482531445890000017046315160651017109_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000111151405705220863100000001025211950351930558_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 13.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000059989357482531445890000017046315160651017109_)",
      fill: "#ffe2f4"
    }
  }), _defs29 || (_defs29 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000035520961028888308890000003278063309023780273_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160892813641910849680000011144828949471446192_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000035520961028888308890000003278063309023780273_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 12.7h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000160892813641910849680000011144828949471446192_)",
      fill: "#ffe1f4"
    }
  }), _defs30 || (_defs30 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000140728387563177599840000012730772879254337939_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000037688082872228396440000001000391440606982552_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000140728387563177599840000012730772879254337939_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 11.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000037688082872228396440000001000391440606982552_)",
      fill: "#ffe0f4"
    }
  }), _defs31 || (_defs31 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000062902141774892129720000006726931906645007260_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000053539272798156628880000017065418397300399770_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000062902141774892129720000006726931906645007260_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 11h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000053539272798156628880000017065418397300399770_)",
      fill: "#ffdff3"
    }
  }), _defs32 || (_defs32 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000040547372916521375320000005890058930478112652_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160153280092721671810000004859756486784431748_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000040547372916521375320000005890058930478112652_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 10.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000160153280092721671810000004859756486784431748_)",
      fill: "#ffdef3"
    }
  }), _defs33 || (_defs33 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000163059607669502062840000017743019053605817518_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000151511471683653591520000015804692774727439535_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000163059607669502062840000017743019053605817518_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 9.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000151511471683653591520000015804692774727439535_)",
      fill: "#ffddf2"
    }
  }), _defs34 || (_defs34 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000144318015516876581950000010115243927339900334_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000132053964521438257980000004376603876963634310_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000144318015516876581950000010115243927339900334_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 8.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000132053964521438257980000004376603876963634310_)",
      fill: "#ffdcf2"
    }
  }), _defs35 || (_defs35 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000069375009007884915410000012084705223235533990_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000027591519312448932060000002674521480899297195_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000069375009007884915410000012084705223235533990_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 7.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000027591519312448932060000002674521480899297195_)",
      fill: "#ffdbf2"
    }
  }), _defs36 || (_defs36 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000097466014070156734330000018119008136695687863_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000083079768499160939580000002773316710753211056_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000097466014070156734330000018119008136695687863_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 6.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000083079768499160939580000002773316710753211056_)",
      fill: "#ffdaf1"
    }
  }), _defs37 || (_defs37 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000058584356311605613920000016150045757713579408_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000075845908238826625400000012510611160665630597_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000058584356311605613920000016150045757713579408_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 5.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000075845908238826625400000012510611160665630597_)",
      fill: "#ffd9f1"
    }
  }), _defs38 || (_defs38 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000047757054525194763150000002456340682455169461_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000051348588743116802470000001633313117524182157_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000047757054525194763150000002456340682455169461_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 4.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000051348588743116802470000001633313117524182157_)",
      fill: "#ffd8f0"
    }
  }), _defs39 || (_defs39 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000051382489426439920660000003018019370891297153_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000059293702624119336140000001360157132647433360_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000051382489426439920660000003018019370891297153_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000059293702624119336140000001360157132647433360_)",
      fill: "#ffd7f0"
    }
  }), _defs40 || (_defs40 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000170268887129915914900000010352499974422115500_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000123436790536674588720000012719220988143637644_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000170268887129915914900000010352499974422115500_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 3.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000123436790536674588720000012719220988143637644_)",
      fill: "#ffd6f0"
    }
  }), _defs41 || (_defs41 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000003091413043892447630000001266546031989514142_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000103978116915317622890000010407028949154571157_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000003091413043892447630000001266546031989514142_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 2.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000103978116915317622890000010407028949154571157_)",
      fill: "#ffd5ef"
    }
  }), _defs42 || (_defs42 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000176737943936596983000000007461901653307844785_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000168110594437402215340000007824184069559080593_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000176737943936596983000000007461901653307844785_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 1.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000168110594437402215340000007824184069559080593_)",
      fill: "#ffd4ef"
    }
  }), _defs43 || (_defs43 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000018232783389487562290000008517843368293322889_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000045582657913821574560000008704575164935371400_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000018232783389487562290000008517843368293322889_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 .6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000045582657913821574560000008704575164935371400_)",
      fill: "#ffd3ef"
    }
  }), _defs44 || (_defs44 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000051377637767468729150000006262176937780331137_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000178168343591342257400000000584671388335673478_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000051377637767468729150000006262176937780331137_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 .2h40v.4H0z",
    style: {
      clipPath: "url(#SVGID_00000178168343591342257400000000584671388335673478_)",
      fill: "#ffd2ee"
    }
  }), whitelist_path || (whitelist_path = /*#__PURE__*/react.createElement("path", {
    d: "M20 40c-6.3 0-12.6-1.3-18.5-3.9-.6-.3-1.3-.6-1.4-1.4-.2-.9.4-1.5 1-2.1l.5-.5c.8-1 1-2.5 1-3.9.1-1.8.1-3.6.1-5.5v-4.6c.1-3.7.9-7 2.3-9.7-.1-.1 0-.3.1-.5 1.2-2.2 3-4.1 5.2-5.5C13.8.2 18.3 0 20.1 0c3.4 0 8.6 1.1 11.8 4.4 1.8 1.8 3.3 4.1 4.2 6.5 1.3 3.6 1.4 7.6 1.4 11.4v2.8c0 2.7-.1 5.5 1.5 7.4l.1.2c.5.6 1.1 1.4.8 2.2-.2.6-.7.9-1.2 1.1-5.9 2.7-12.3 4-18.7 4M20.1.4c-1.7 0-6.1.2-9.5 2.4Q7.3 4.9 5.5 8.2c-.1.1-.2.3-.3.5-1.4 2.6-2.1 5.9-2.2 9.5v4.5c0 1.9 0 3.6-.1 5.5-.1 1.5-.2 3.1-1.1 4.2-.1.2-.3.4-.5.5-.5.6-1 1.1-.9 1.7.1.5.7.8 1.2 1.1 11.7 5.2 25.2 5.2 36.9-.1.4-.2.9-.4 1-.8.2-.6-.3-1.3-.8-1.8l-.1-.2C37 30.7 37 27.9 37 25.1v-2.8c0-3.8-.1-7.7-1.4-11.3-.9-2.4-2.3-4.6-4.1-6.3-3-3.2-8.1-4.3-11.4-4.3",
    className: "st46"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M21.9 27c-.1 0-.3-.1-.3-.2 0-.5 0-1.2-.2-1.8s-.7-.9-1.4-.9-1.2.3-1.4.9-.2 1.3-.2 1.8c0 .1-.1.2-.3.2-.1 0-.3-.1-.3-.2 0-.5 0-1.3.2-1.9.3-.8 1-1.2 1.9-1.2s1.6.4 1.9 1.2c.2.6.2 1.4.2 1.9.2.1.1.2-.1.2M14.5 22.4h-2.4c-.7 0-1.3-.6-1.3-1.3v-6.7c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3v6.7c0 .7-.6 1.3-1.3 1.3",
    className: "st46"
  })), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M13.3 22.6c-1.5 0-2.7-1.3-2.7-2.8v-4.1c0-1.5 1.2-2.8 2.7-2.8s2.7 1.3 2.7 2.8v4.1c0 1.5-1.2 2.8-2.7 2.8m0-9.3c-1.3 0-2.3 1.1-2.3 2.4v4.1c0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4v-4.1c0-1.3-1-2.4-2.3-2.4M27.6 22.4h-2.4c-.7 0-1.3-.6-1.3-1.3v-6.7c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3v6.7c0 .7-.6 1.3-1.3 1.3",
    className: "st46"
  })), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
    d: "M26.4 22.6c-1.5 0-2.7-1.3-2.7-2.8v-4.1c0-1.5 1.2-2.8 2.7-2.8s2.7 1.3 2.7 2.8v4.1c0 1.5-1.2 2.8-2.7 2.8m0-9.3c-1.3 0-2.3 1.1-2.3 2.4v4.1c0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4v-4.1c0-1.3-1-2.4-2.3-2.4",
    className: "st46"
  })), _path5 || (_path5 = /*#__PURE__*/react.createElement("path", {
    d: "M13.7 14.6c-.2 0-.5.1-.7.2-.3.2-.3.6 0 .8l.3.2c.2.2.3.6 0 .8l-.3.3c-.3.2-.2.7.1.8.2.1.4.2.6.2.8 0 1.4-.7 1.4-1.6 0-1-.7-1.7-1.4-1.7M26.7 14.6c-.2 0-.5.1-.7.2-.3.2-.3.6 0 .8l.3.2c.2.2.3.6 0 .8l-.3.3c-.3.2-.2.7.1.8.2.1.4.2.6.2.8 0 1.4-.7 1.4-1.6 0-1-.6-1.7-1.4-1.7",
    className: "st47"
  })), _ellipse || (_ellipse = /*#__PURE__*/react.createElement("ellipse", {
    cx: 14.6,
    cy: 20.5,
    className: "st47",
    rx: 0.4,
    ry: 0.5
  })), _ellipse2 || (_ellipse2 = /*#__PURE__*/react.createElement("ellipse", {
    cx: 27.7,
    cy: 20.5,
    className: "st47",
    rx: 0.4,
    ry: 0.5
  })));
};
/* harmony default export */ const whitelist = (SvgWhitelist);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/reusables/spinners/SpinnerUnit.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types *//* eslint-disable */// React + Web3 Essentials
// External Packages
// Internal Compoonents
// Import Assets
// Internal Configs
// Interfaces
// Constants
const SPINNER_TYPE={PROCESSING:1,WARNING:2,ERROR:3,COMPLETED:4,WHITELIST:5};// Create Spinner
function Spinner(_ref){let _ref$size=_ref.size,size=_ref$size===void 0?42:_ref$size,_ref$color=_ref.color,color=_ref$color===void 0?globals/* default */.Ay.COLORS.PRIMARY_COLOR:_ref$color,_ref$type=_ref.type,type=_ref$type===void 0?SPINNER_TYPE.PROCESSING:_ref$type;return/*#__PURE__*/(0,jsx_runtime.jsxs)(SpinLoader,{flex:"initial",alignSelf:"center",color:color,width:size+"px",completed:type==SPINNER_TYPE.PROCESSING?false:true,children:[type==SPINNER_TYPE.PROCESSING&&/*#__PURE__*/(0,jsx_runtime.jsx)(spinner,{}),type==SPINNER_TYPE.ERROR&&/*#__PURE__*/(0,jsx_runtime.jsx)(error,{}),type==SPINNER_TYPE.WARNING&&/*#__PURE__*/(0,jsx_runtime.jsx)(warning,{}),type==SPINNER_TYPE.COMPLETED&&/*#__PURE__*/(0,jsx_runtime.jsx)(checkmark,{}),type==SPINNER_TYPE.WHITELIST&&/*#__PURE__*/(0,jsx_runtime.jsx)(whitelist,{})]});}const spinAnimation=(0,styled_components_browser_esm.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);const SpinLoader=(0,styled_components_browser_esm["default"])(SharedStyling/* ItemV */.y8).withConfig({displayName:"SpinnerUnit__SpinLoader",componentId:"sc-red8q7-0"})(["color:",";",""],props=>props.color,props=>!props.completed&&(0,styled_components_browser_esm.css)(["animation-name:",";animation-duration:2500ms;animation-iteration-count:infinite;animation-timing-function:linear;"],spinAnimation));

/***/ },

/***/ 392920
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ecosystem)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(705260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(486025);
// EXTERNAL MODULE: ./src/theme/Layout/index.js + 59 modules
var Layout = __webpack_require__(734956);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(777255);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./src/components/reusables/spinners/SpinnerUnit.tsx + 5 modules
var SpinnerUnit = __webpack_require__(495466);
;// ./src/config/EcosystemAppsList.ts
const EcosystemFeaturedListUrls=['https://pusd.push.org/','https://zappi.to/','https://ramenfi.xyz/','https://degenchess.fun/','https://cetra.app/','https://www.thehodl.fun/','https://www.lastone.fun/','https://eon-five.vercel.app','https://www.halofy.ai/','https://catkevin.github.io/OnchainVampireSurvivors/','https://pushninja.fun'];const EcosystemPartnersList=[{nameKey:'components.ecosystem-apps-partners.partners.silence-labs.name',descriptionKey:'components.ecosystem-apps-partners.partners.silence-labs.description',icon:'/assets/ecosystem/silencelabs-icon.png',bgImage:'/assets/ecosystem/silencelabs-bg.png',bgGradientColor:'#000000',tags:['Partners'],twitterId:'2016511466199990733',href:'https://silencelaboratories.com/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.partners.human-tech.name',descriptionKey:'components.ecosystem-apps-partners.partners.human-tech.description',icon:'/assets/ecosystem/humantech-icon.png',bgImage:'/assets/ecosystem/humantech-bg.png',bgGradientColor:'#201D28',tags:['Partners'],href:'https://human.tech/',titleColor:'white'}];const EcosystemAppsList=[{nameKey:'components.ecosystem-apps-partners.apps.pusd.name',descriptionKey:'components.ecosystem-apps-partners.apps.pusd.description',icon:'/assets/ecosystem/pusd-icon.png',bgImage:'/assets/ecosystem/pusd-bg.png',bgGradientColor:'#371243',tags:['DeFi'],href:'https://pusd.push.org/',titleColor:'white',descriptionColor:'white',twitterId:'1993681001076478131',tagsColor:'white'},// {
//   nameKey: 'components.ecosystem-apps-partners.apps.zappi-to.name',
//   descriptionKey:
//     'components.ecosystem-apps-partners.apps.zappi-to.description',
//   icon: '/assets/ecosystem/zappi-to-icon.png',
//   bgImage: '/assets/ecosystem/zappi-to-bg.png',
//   bgGradientColor: '#4A13BB',
//   tags: ['Payments'],
//   href: 'https://zappi.to/',
//   titleColor: 'white',
// },
{nameKey:'components.ecosystem-apps-partners.apps.ramen-swap.name',descriptionKey:'components.ecosystem-apps-partners.apps.ramen-swap.description',icon:'/assets/ecosystem/ramenfi-icon.png',bgImage:'/assets/ecosystem/ramenfi-bg.png',bgGradientColor:'#DB2D33',tags:['DeFi'],href:'https://ramenfi.xyz/',titleColor:'white',descriptionColor:'white',tagsColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.degen-chess.name',descriptionKey:'components.ecosystem-apps-partners.apps.degen-chess.description',icon:'/assets/ecosystem/degen-chess-icon.png',bgImage:'/assets/ecosystem/degen-chess-bg.png',bgGradientColor:'#4F38A8',tags:['Gaming/Streaming'],href:'https://degenchess.fun/',titleColor:'white',descriptionColor:'white',tagsColor:'white',twitterId:'2031754422884487425'},{nameKey:'components.ecosystem-apps-partners.apps.cetra.name',descriptionKey:'components.ecosystem-apps-partners.apps.cetra.description',icon:'/assets/ecosystem/cetra-icon.png',bgImage:'/assets/ecosystem/cetra-bg.png',bgGradientColor:'#000000',tags:['DeFi'],href:'https://cetra.app/',titleColor:'white',descriptionColor:'white',tagsColor:'white',twitterId:'2029168701916774742'},{nameKey:'components.ecosystem-apps-partners.apps.hodl-fun.name',descriptionKey:'components.ecosystem-apps-partners.apps.hodl-fun.description',icon:'/assets/ecosystem/hodl-fun-icon.png',bgImage:'/assets/ecosystem/hodl-fun-bg.png',bgGradientColor:'rgba(0, 0, 0, 0.80)',tags:['DeFi'],twitterId:'1989664475784663041',href:'https://www.thehodl.fun/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.last-one.name',descriptionKey:'components.ecosystem-apps-partners.apps.last-one.description',icon:'/assets/ecosystem/last-one-icon.png',bgImage:'/assets/ecosystem/last-one-bg.png',bgGradientColor:'#E5B92A',tags:['Gaming'],href:'https://www.lastone.fun/',titleColor:'black',descriptionColor:'black',twitterId:'1993681001076478131',tagsColor:'black'},{nameKey:'components.ecosystem-apps-partners.apps.eon-ai-butler.name',descriptionKey:'components.ecosystem-apps-partners.apps.eon-ai-butler.description',icon:'/assets/ecosystem/eon-icon.png',bgImage:'/assets/ecosystem/eon-bg.png',bgGradientColor:'#000000',tags:['Agentic AI'],twitterId:'1989664469484728745',href:'https://eon-five.vercel.app',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.halo.name',descriptionKey:'components.ecosystem-apps-partners.apps.halo.description',icon:'/assets/ecosystem/halo-icon.png',bgImage:'/assets/ecosystem/halo-bg.png',bgGradientColor:'#F3F6EC',tags:['Agentic AI'],href:'https://www.halofy.ai/',titleColor:'black',descriptionColor:'black',tagsColor:'black'},{nameKey:'components.ecosystem-apps-partners.apps.onchain-vampire-survivors.name',descriptionKey:'components.ecosystem-apps-partners.apps.onchain-vampire-survivors.description',icon:'/assets/ecosystem/onchain-vampires-icon.png',bgImage:'/assets/ecosystem/onchain-vampires-bg.png',bgGradientColor:'#5D261E',tags:['Gaming'],twitterId:'2003875166850531341',href:'https://catkevin.github.io/OnchainVampireSurvivors/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.push-ninja.name',descriptionKey:'components.ecosystem-apps-partners.apps.push-ninja.description',icon:'/assets/ecosystem/push-ninja-icon.png',bgImage:'/assets/ecosystem/push-ninja-bg.png',bgGradientColor:'#5D1D51',tags:['Gaming'],twitterId:'2014018188434964672',href:'https://pushninja.fun',titleColor:'white',spotlighttextKey:'components.ecosystem-apps-partners.apps.push-ninja.spotlight-text'},{nameKey:'components.ecosystem-apps-partners.apps.puffles.name',descriptionKey:'components.ecosystem-apps-partners.apps.puffles.description',icon:'/assets/ecosystem/puffles-icon.jpg',bgImage:'/assets/ecosystem/puffles-bg.jpg',bgGradientColor:'#000000',tags:['NFT'],href:'https://puffles.io',titleColor:'white',descriptionColor:'white',tagsColor:'white',twitterId:'2031754422884487425'},{nameKey:'components.ecosystem-apps-partners.apps.pns.name',descriptionKey:'components.ecosystem-apps-partners.apps.pns.description',icon:'/assets/ecosystem/pns-icon.png',bgImage:'/assets/ecosystem/pns-bg.png',bgGradientColor:'#4A1756',tags:['Infra'],twitterId:'1989664489902575819',href:'https://universal-name-service.vercel.app/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.push-x402.name',descriptionKey:'components.ecosystem-apps-partners.apps.push-x402.description',icon:'/assets/ecosystem/push402-icon.png',bgImage:'/assets/ecosystem/push402-bg.png',bgGradientColor:'#010101',tags:['Infra'],href:'https://pushindexer.vercel.app',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.bountive.name',descriptionKey:'components.ecosystem-apps-partners.apps.bountive.description',icon:'/assets/ecosystem/bountive-icon.png',bgImage:'/assets/ecosystem/bountive-bg.png',bgGradientColor:'#000000',tags:['Crowdfunding'],twitterId:'1989664498920403443',href:'https://bountive.vercel.app/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.beat-brawls.name',descriptionKey:'components.ecosystem-apps-partners.apps.beat-brawls.description',icon:'/assets/ecosystem/beatbrawls-icon.png',bgImage:'/assets/ecosystem/beatbrawls-bg.png',bgGradientColor:'#301139',tags:['Gaming'],href:'https://push.beatbrawls.com/',titleColor:'white',twitterId:'2001278428788715678'},{nameKey:'components.ecosystem-apps-partners.apps.apt-casino.name',descriptionKey:'components.ecosystem-apps-partners.apps.apt-casino.description',icon:'/assets/ecosystem/apt-casino-icon.png',bgImage:'/assets/ecosystem/apt-casino-bg.png',bgGradientColor:'#5E1140',tags:['Gaming'],twitterId:'1989664509439713780',href:'https://apt-casino-push-chain.vercel.app/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.tip-up.name',descriptionKey:'components.ecosystem-apps-partners.apps.tip-up.description',icon:'/assets/ecosystem/tip-up-icon.png',bgImage:'/assets/ecosystem/tip-up-bg.png',bgGradientColor:'#000000',tags:['DeFi'],twitterId:'1989664514686783920',href:'https://tip-up-push.vercel.app/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.push-swap.name',descriptionKey:'components.ecosystem-apps-partners.apps.push-swap.description',icon:'/assets/ecosystem/push-swap-icon.png',bgImage:'/assets/ecosystem/push-swap-bg.png',bgGradientColor:'#DD60C4',tags:['DeFi'],twitterId:'1989664440468590639',href:'https://push-swap-sepia.vercel.app/',titleColor:'black',descriptionColor:'black',tagsColor:'black'},{nameKey:'components.ecosystem-apps-partners.apps.chain-circle.name',descriptionKey:'components.ecosystem-apps-partners.apps.chain-circle.description',icon:'/assets/ecosystem/chaincircle-icon.png',bgImage:'/assets/ecosystem/chaincircle-bg.png',bgGradientColor:'#000000',tags:['DeFi'],twitterId:'1989664436433637415',href:'https://www.chaincircle.org/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.push-campus.name',descriptionKey:'components.ecosystem-apps-partners.apps.push-campus.description',icon:'/assets/ecosystem/push-campus-icon.png',bgImage:'/assets/ecosystem/push-campus-bg.png',bgGradientColor:'#000000',tags:['Social'],twitterId:'1989664494503743894',href:'https://push-campus.vercel.app/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.ballsy.name',descriptionKey:'components.ecosystem-apps-partners.apps.ballsy.description',icon:'/assets/ecosystem/ballsy-icon.png',bgImage:'/assets/ecosystem/ballsy-bg.png',bgGradientColor:'rgba(0, 0, 0, 0.80)',tags:['Gaming'],href:'https://ballsy.push.org/',titleColor:'white'},{nameKey:'components.ecosystem-apps-partners.apps.freename.name',descriptionKey:'components.ecosystem-apps-partners.apps.freename.description',icon:'/assets/ecosystem/freename-icon.png',bgImage:'/assets/ecosystem/freename-bg.png',bgGradientColor:'#030303',tags:['Infra'],href:'https://omnihub.xyz/discover/push-testnet',titleColor:'#FFFFFF',comingsoon:true},{nameKey:'components.ecosystem-apps-partners.apps.hang4-fun.name',descriptionKey:'components.ecosystem-apps-partners.apps.hang4-fun.description',icon:'/assets/ecosystem/hangfun-icon.png',bgImage:'/assets/ecosystem/hangfun-bg.png',bgGradientColor:'rgba(148, 163, 184, 0.25)',tags:['TBA'],href:'https://hang4.fun/',titleColor:'white',comingsoon:true},// Doesn't work so disabled
// {
//   name: 'Athera',
//   description: 'Automated crypto inheritance',
//   icon: '/assets/ecosystem/athera-icon.png',
//   bgImage: '/assets/ecosystem/athera-bg.png',
//   bgGradientColor: '#000000',
//   tags: ['DeFi'],
//   twitterId: '1989664503341129977',
//   href: 'https://atherra.vercel.app/',
//   titleColor: 'white',
// },
// --- Secondary (smaller grid) ---
{nameKey:'components.ecosystem-apps-partners.apps.omnihub.name',descriptionKey:'components.ecosystem-apps-partners.apps.omnihub.description',icon:'/assets/ecosystem/omnihub-icon.png',bgImage:'/assets/ecosystem/omnihub-bg.png',bgGradientColor:'#030303',tags:['NFT'],href:'https://omnihub.xyz/discover/push-testnet',titleColor:'#FFFFFF',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.push-dex.name',descriptionKey:'components.ecosystem-apps-partners.apps.push-dex.description',icon:'/assets/ecosystem/pushdex-icon.png',bgImage:'/assets/ecosystem/pushdex-bg.png',bgGradientColor:'#030303',tags:['DeFi'],href:'https://pushdex.lovable.app/',titleColor:'#FFFFFF',twitterId:'2011506398597955757',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.zns.name',descriptionKey:'components.ecosystem-apps-partners.apps.zns.description',icon:'/assets/ecosystem/zns-icon.png',bgImage:'/assets/ecosystem/zns-bg.png',bgGradientColor:'#A9D20A',tags:['Infra'],href:'https://zns.bio/gm-deploy?filter=all&tab=gm&search=push',titleColor:'black',descriptionColor:'black',tagsColor:'black',twitterId:'1998756795859550371',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.star-run.name',descriptionKey:'components.ecosystem-apps-partners.apps.star-run.description',icon:'/assets/ecosystem/star-run-icon.png',bgImage:'/assets/ecosystem/star-run-bg.png',bgGradientColor:'#000000',tags:['Gaming'],twitterId:'1989664445501751672',href:'https://starrun.vercel.app/',titleColor:'white',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.forge-realm.name',descriptionKey:'components.ecosystem-apps-partners.apps.forge-realm.description',icon:'/assets/ecosystem/forge-realm-icon.png',bgImage:'/assets/ecosystem/forge-realm-bg.png',bgGradientColor:'#000000',tags:['NFT'],twitterId:'1989664480616464799',href:'https://forge-realm.vercel.app/',titleColor:'white',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.conft-codomain.name',descriptionKey:'components.ecosystem-apps-partners.apps.conft-codomain.description',icon:'/assets/ecosystem/conft-icon.png',bgImage:'/assets/ecosystem/conft-bg.png',bgGradientColor:'#000',tags:['NFT'],href:'https://conft.app/?chainId=42101',titleColor:'white',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.copet.name',descriptionKey:'components.ecosystem-apps-partners.apps.copet.description',icon:'/assets/ecosystem/copet-icon.png',bgImage:'/assets/ecosystem/copet-bg.png',bgGradientColor:'#010101',tags:['NFT'],href:'https://copet.xyz/?chainId=42101',titleColor:'#FFFFFF',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.surf-layer.name',descriptionKey:'components.ecosystem-apps-partners.apps.surf-layer.description',icon:'/assets/ecosystem/surflayer-icon.png',bgImage:'/assets/ecosystem/surflayer-bg.png',bgGradientColor:'#030303',tags:['DeFi'],href:'https://surflayer.xyz/',titleColor:'#FFFFFF',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.push-name-service.name',descriptionKey:'components.ecosystem-apps-partners.apps.push-name-service.description',icon:'/assets/ecosystem/push-name-service-icon.png',bgImage:'/assets/ecosystem/push-name-service-bg.png',bgGradientColor:'#000000',tags:['Infra'],twitterId:'1989664485427351900',href:'https://push-name-service.vercel.app/',titleColor:'white',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.nfts2me.name',descriptionKey:'components.ecosystem-apps-partners.apps.nfts2me.description',icon:'/assets/ecosystem/nfts-me-icon.png',bgImage:'/assets/ecosystem/nfts-me-bg.png',bgGradientColor:'#010101',tags:['NFT'],href:'https://nfts2me.com/app/push-testnet/',titleColor:'#FFFFFF',secondary:true},{nameKey:'components.ecosystem-apps-partners.apps.tachyon.name',descriptionKey:'components.ecosystem-apps-partners.apps.tachyon.description',icon:'/assets/ecosystem/tachyon-icon.png',bgImage:'/assets/ecosystem/tachyon-bg.png',bgGradientColor:'#0536A0',tags:['Infra'],href:'https://docs.rath.fi/',titleColor:'white',secondary:true}];
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(328774);
// EXTERNAL MODULE: ./src/api/GetTwitterMetrics.ts
var GetTwitterMetrics = __webpack_require__(976170);
// EXTERNAL MODULE: ./src/utils/FormatTwitterCount.tsx
var FormatTwitterCount = __webpack_require__(515874);
;// ./static/assets/ecosystem/star.svg
var _path;
const _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgStar = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 14,
    fill: "none",
    viewBox: "0 0 14 14",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    fill: "#D548EC",
    d: "m13.622 6.515-4.91-1.228L7.486.378a.5.5 0 0 0-.97 0l-1.228 4.91L.378 6.514a.5.5 0 0 0 0 .97l4.91 1.228 1.227 4.909a.5.5 0 0 0 .97 0l1.228-4.91 4.909-1.227a.5.5 0 0 0 0-.97M7.01 7.5a.5.5 0 1 1-.005-1h.005a.5.5 0 0 1 0 1M2.429 3.108a.5.5 0 0 1 .68-.679l1.635.908-.281 1.126-1.126.281zm6.827.229 1.636-.908a.5.5 0 0 1 .679.68l-.908 1.635-1.126-.281zm2.315 7.555a.5.5 0 0 1-.68.679l-1.635-.908.281-1.126 1.126-.281zm-6.827-.229-1.636.908a.5.5 0 0 1-.679-.68l.908-1.635 1.126.281z"
  })));
};
/* harmony default export */ const star = (SvgStar);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(796710);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/Ecosystem/EcosystemCard.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const EcosystemCard=_ref=>{let app=_ref.app;const _useTranslation=(0,es/* useTranslation */.Bd)(),t=_useTranslation.t;const _useTweetMetrics=(0,GetTwitterMetrics/* useTweetMetrics */.k)(app.twitterId||''),twitterData=_useTweetMetrics.data;const _useState=(0,react.useState)(false),isHydrated=_useState[0],setIsHydrated=_useState[1];// Call useBaseUrl hooks unconditionally at the top
const bgImageUrl=(0,useBaseUrl/* default */.Ay)(app.bgImage||'');const iconUrl=(0,useBaseUrl/* default */.Ay)(app.icon||'');(0,react.useEffect)(()=>{setIsHydrated(true);},[]);// Support both old format (name/description) and new format (nameKey/descriptionKey)
const appName=app.nameKey?t(app.nameKey):app.name;const appDescription=app.descriptionKey?t(app.descriptionKey):app.description;const appSpotlightText=app.spotlighttextKey?t(app.spotlighttextKey):app.spotlighttext;const handleAppClick=()=>{// Track app click in Google Analytics
if(typeof window!=='undefined'&&window.gtag&&app.href){const appType=app.secondary?'secondary':'primary';window.gtag('event','ecosystem_app_click',{event_category:'ecosystem',event_label:appName,app_name:appName,app_type:appType,app_url:app.href});}};const hrefProps=app.comingsoon?{onClick:e=>e.preventDefault()}:app.href?{href:app.href,target:'_blank',rel:'noopener',onClick:handleAppClick}:{href:'#',onClick:e=>e.preventDefault()};if(!isHydrated){return/*#__PURE__*/(0,jsx_runtime.jsx)(Card,{as:"div",$secondary:app.secondary,className:app.secondary?'secondary':'',children:/*#__PURE__*/(0,jsx_runtime.jsx)(SkeletonLoader,{$secondary:app.secondary})});}return/*#__PURE__*/(0,jsx_runtime.jsxs)(Card,Object.assign({},hrefProps,{"aria-label":appName,title:appName,$comingsoon:app.comingsoon,appoftheweek:app.appoftheweek,$secondary:app.secondary,className:app.secondary?'secondary':'',children:[app.appoftheweek&&/*#__PURE__*/(0,jsx_runtime.jsxs)(CardTag,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(star,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{children:t('components.ecosystem-apps-partners.app-spotlight')})]}),app.bgImage&&!app.secondary&&/*#__PURE__*/(0,jsx_runtime.jsx)(BackgroundWrapper,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Background,{style:{backgroundImage:"url("+bgImageUrl+")"}})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ContentWrap,{bgGradientColor:app.bgGradientColor,$secondary:app.secondary,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(TopRow,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{src:iconUrl,alt:"",appId:app.id}),/*#__PURE__*/(0,jsx_runtime.jsx)(Name,{titleColor:app.titleColor,children:appName}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.P,{fontSize:"16px",lineHeight:"23px",color:app.descriptionColor||'var(--ifm-color-neutral-300)',margin:"4px 0 0 0",children:appDescription}),app.appoftheweek&&appSpotlightText&&/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.P,{fontSize:"14px",lineHeight:"20px",color:app.descriptionColor||'var(--ifm-color-neutral-300)',margin:"8px 0 0 0",fontStyle:"italic",children:appSpotlightText})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Meta,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Tags,{children:app.tags.map(t=>/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{tagsColor:app.tagsColor,children:t},t))}),(app===null||app===void 0?void 0:app.twitterId)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(Likes,{href:"https://x.com/PushChain/status/"+app.twitterId,target:"_blank",rel:"noopener noreferrer",onClick:()=>{// Track like button click in Google Analytics
if(typeof window!=='undefined'&&window.gtag){window.gtag('event','ecosystem_like_click',{event_category:'engagement',event_label:appName,app_name:appName,twitter_id:app.twitterId,like_count:(twitterData===null||twitterData===void 0?void 0:twitterData.like_count)||0});}},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{tagsColor:app===null||app===void 0?void 0:app.tagsColor,children:(0,FormatTwitterCount/* formatTwitterCount */.Q)(twitterData===null||twitterData===void 0?void 0:twitterData.like_count)}),/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm.BsHeart,{size:22,color:(app===null||app===void 0?void 0:app.tagsColor)||"var(--ifm-ecosystem-tags-color)"})]})]})]}),app.comingsoon&&/*#__PURE__*/(0,jsx_runtime.jsx)(ComingSoonOverlay,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ComingSoonText,{children:t('components.ecosystem-apps-partners.coming-soon')})})]}));};/* harmony default export */ const Ecosystem_EcosystemCard = (EcosystemCard);const Card=styled_components_browser_esm["default"].a.withConfig({displayName:"EcosystemCard__Card",componentId:"sc-ptzhhe-0"})(["position:relative;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;border-radius:16px;text-decoration:none;color:var(--ifm-color-white);border:",";width:100%;height:426px;min-height:426px;transition:transform 0.2s ease,box-shadow 0.2s ease;z-index:6;cursor:",";contain:layout style paint;&.secondary{height:auto !important;min-height:auto !important;}&::before{content:'';position:absolute;inset:0;border-radius:16px;pointer-events:none;opacity:0;transition:opacity 0.2s ease;box-shadow:2.788px 2.598px 12px 0 rgba(255,255,255,0.15) inset,1.858px 1.732px 6px 0 rgba(255,255,255,0.15) inset;z-index:100;}&:hover{transform:",";&::before{opacity:",";}}"],props=>props.$comingsoon?'none':props.appoftheweek?'1px solid #EF46F8':'1px solid rgba(171, 70, 248, 0.4)',props=>props.$comingsoon?'not-allowed':'pointer',props=>props.$comingsoon?'none':'translateY(-2px)',props=>props.$comingsoon?0:1);const CardTag=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemCard__CardTag",componentId:"sc-ptzhhe-1"})(["display:flex;flex-direction:row;align-items:center;position:absolute;top:10px;left:10px;z-index:999999;border-radius:12px;border:1px solid rgba(255,255,255,0.25);background:#000;height:28px;padding:4px 12px;gap:4px;span{color:var(--ifm-color-white);font-size:12px;font-style:normal;font-weight:700;line-height:16px;text-transform:uppercase;}"]);const ContentWrap=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemCard__ContentWrap",componentId:"sc-ptzhhe-2"})(["position:relative;z-index:2;padding:16px;display:flex;flex-direction:column;justify-content:flex-end;height:",";background:",";"],props=>props.$secondary?'100%':'55%',props=>props.$secondary?props.bgGradientColor:"linear-gradient(\n    to bottom,\n    transparent 0%,\n    transparent 10%,\n    "+props.bgGradientColor+" 20%\n  )");const BackgroundWrapper=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemCard__BackgroundWrapper",componentId:"sc-ptzhhe-3"})(["position:absolute;inset:0;z-index:0;"]);const Background=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemCard__Background",componentId:"sc-ptzhhe-4"})(["position:absolute;top:0;left:0;right:0;height:60%;background-size:cover;background-position:top center;"]);const TopRow=(0,styled_components_browser_esm["default"])(SharedStyling/* ItemH */.Oj).withConfig({displayName:"EcosystemCard__TopRow",componentId:"sc-ptzhhe-5"})(["align-items:flex-start;justify-content:flex-start;flex-direction:column;p{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;}"]);const Icon=styled_components_browser_esm["default"].img.withConfig({displayName:"EcosystemCard__Icon",componentId:"sc-ptzhhe-6"})(["width:64px;height:64px;border-radius:16px;background:",";object-fit:cover;.secondary &{margin-top:10px;}"],props=>props.appId===3||props.appId===8?'#000':'transparent');const Name=(0,styled_components_browser_esm["default"])(SharedStyling/* Span */.L9).withConfig({displayName:"EcosystemCard__Name",componentId:"sc-ptzhhe-7"})(["font-weight:600;font-size:26px;line-height:32px;margin-top:12px;color:",";overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-word;"],props=>props.titleColor||'var(--ifm-color-white)');const Meta=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemCard__Meta",componentId:"sc-ptzhhe-8"})(["margin-top:6px;display:flex;align-items:center;justify-content:space-between;"]);const Tags=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemCard__Tags",componentId:"sc-ptzhhe-9"})(["display:flex;gap:8px;flex-wrap:wrap;"]);const Likes=(0,styled_components_browser_esm["default"])(Link/* default */.A).withConfig({displayName:"EcosystemCard__Likes",componentId:"sc-ptzhhe-10"})(["display:flex;align-items:center;gap:8px;flex-wrap:wrap;"]);const Tag=styled_components_browser_esm["default"].span.withConfig({displayName:"EcosystemCard__Tag",componentId:"sc-ptzhhe-11"})(["font-size:16px;font-weight:400;padding:0px;color:",";"],props=>props.tagsColor||'var(--ifm-ecosystem-tags-color)');const ComingSoonOverlay=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemCard__ComingSoonOverlay",componentId:"sc-ptzhhe-12"})(["position:absolute;inset:0;z-index:10;border-radius:var(--radius-sm,16px);border:1px solid rgba(255,255,255,0.1);background:linear-gradient( 180deg,rgba(74,74,74,0.85) 0%,rgba(0,0,0,0.85) 100% );display:flex;justify-content:center;pointer-events:none;"]);const ComingSoonText=styled_components_browser_esm["default"].span.withConfig({displayName:"EcosystemCard__ComingSoonText",componentId:"sc-ptzhhe-13"})(["color:white;text-align:center;font-size:26px;font-style:normal;font-weight:600;line-height:32px;margin-top:50px;"]);const SkeletonLoader=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemCard__SkeletonLoader",componentId:"sc-ptzhhe-14"})(["width:100%;height:",";background:linear-gradient( 90deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0.1) 50%,rgba(255,255,255,0.05) 100% );background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:16px;@keyframes shimmer{0%{background-position:-200% 0;}100%{background-position:200% 0;}}"],props=>props.$secondary?'300px':'426px');
;// ./src/components/Ecosystem/EcosystemBlocks.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
//
const EcosystemBlocks=_ref=>{let apps=_ref.apps;const _useTranslation=(0,es/* useTranslation */.Bd)(),t=_useTranslation.t;const getInitialTab=()=>{if(typeof window==='undefined')return'featured';const params=new URLSearchParams(window.location.search);if(params.get('allapps')==='true')return'all';if(params.get('partners')==='true')return'integration';if(params.get('flagship')==='true')return'featured';return'featured';};const _useState=(0,react.useState)(getInitialTab),activeTab=_useState[0],setActiveTab=_useState[1];const _useState2=(0,react.useState)({left:0,width:0}),underlineStyle=_useState2[0],setUnderlineStyle=_useState2[1];const _useState3=(0,react.useState)(false),isLoading=_useState3[0],setIsLoading=_useState3[1];const tabsRef=(0,react.useRef)([]);const handleTabChange=tab=>{setIsLoading(true);setActiveTab(tab);const params=new URLSearchParams();if(tab==='featured')params.set('flagship','true');else if(tab==='integration')params.set('partners','true');else if(tab==='all')params.set('allapps','true');window.history.pushState({},'',"?"+params.toString());// Track tab change in Google Analytics
if(typeof window!=='undefined'&&window.gtag){const tabNames={featured:'Flagship Apps',integration:'Partners',all:'All Apps'};window.gtag('event','ecosystem_tab_change',{event_category:'ecosystem',event_label:tabNames[tab],tab_type:tab});}setTimeout(()=>setIsLoading(false),300);};const filteredApps=(0,react.useMemo)(()=>{let filtered=[];if(activeTab==='featured'){// Sort featured apps by the order in EcosystemFeaturedListUrls
const featuredApps=apps.filter(a=>a.href&&EcosystemFeaturedListUrls&&EcosystemFeaturedListUrls.includes(a.href));// Sort by the order in EcosystemFeaturedListUrls
filtered=featuredApps.sort((a,b)=>{const indexA=EcosystemFeaturedListUrls.indexOf(a.href);const indexB=EcosystemFeaturedListUrls.indexOf(b.href);return indexA-indexB;});}else if(activeTab==='integration'){filtered=EcosystemPartnersList||[];}else{filtered=apps;}return filtered.sort((a,b)=>{if(a.appoftheweek&&!b.appoftheweek)return-1;if(!a.appoftheweek&&b.appoftheweek)return 1;return 0;});},[apps,activeTab]);const primaryApps=(0,react.useMemo)(()=>{return filteredApps.filter(app=>!app.secondary);},[filteredApps]);const secondaryApps=(0,react.useMemo)(()=>{return filteredApps.filter(app=>app.secondary);},[filteredApps]);(0,react.useEffect)(()=>{const current=tabsRef.current[activeTab==='featured'?0:activeTab==='integration'?1:2];if(current){setUnderlineStyle({left:current.offsetLeft,width:current.offsetWidth});}},[activeTab]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderRow,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Tabs,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabButton,{ref:el=>tabsRef.current[0]=el,$active:activeTab==='featured',onClick:()=>handleTabChange('featured'),children:t('pages.ecosystem.tabs.flagship-apps')}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabButton,{ref:el=>tabsRef.current[1]=el,$active:activeTab==='integration',onClick:()=>handleTabChange('integration'),children:t('pages.ecosystem.tabs.partners')}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabButton,{ref:el=>tabsRef.current[2]=el,$active:activeTab==='all',onClick:()=>handleTabChange('all'),children:t('pages.ecosystem.tabs.all-apps')}),/*#__PURE__*/(0,jsx_runtime.jsx)(ActiveUnderline,{style:{left:underlineStyle.left,width:underlineStyle.width}})]})}),isLoading?/*#__PURE__*/(0,jsx_runtime.jsx)(LoadingContainer,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SpinnerUnit/* default */.A,{size:48,type:SpinnerUnit/* SPINNER_TYPE */.N.PROCESSING})}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{children:primaryApps.map(app=>/*#__PURE__*/(0,jsx_runtime.jsx)(Ecosystem_EcosystemCard,{app:app},app.name))}),secondaryApps.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(SecondaryGrid,{children:secondaryApps.map(app=>/*#__PURE__*/(0,jsx_runtime.jsx)(Ecosystem_EcosystemCard,{app:app},app.name))})]})]});};/* harmony default export */ const Ecosystem_EcosystemBlocks = (EcosystemBlocks);const LoadingContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemBlocks__LoadingContainer",componentId:"sc-1dizk9s-0"})(["display:flex;justify-content:center;align-items:center;min-height:400px;margin-top:32px;"]);const Grid=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemBlocks__Grid",componentId:"sc-1dizk9s-1"})(["position:relative;display:grid;margin-top:32px;gap:clamp(16px,2.5vw,24px);grid-template-columns:repeat(auto-fit,minmax(240px,1fr));@media ","{grid-template-columns:repeat(auto-fit,minmax(220px,1fr));}"],globals/* device */.jO.laptop);const SecondaryGrid=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemBlocks__SecondaryGrid",componentId:"sc-1dizk9s-2"})(["position:relative;display:grid;margin-top:32px;gap:clamp(16px,2.5vw,24px);grid-template-columns:repeat( auto-fill,minmax(200px,calc(33.33% - 16px)) ) !important;@media ","{grid-template-columns:repeat( auto-fill,minmax(160px,calc(50% - 12px)) ) !important;}@media ","{grid-template-columns:repeat(auto-fill,minmax(120px,100%)) !important;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const HeaderRow=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemBlocks__HeaderRow",componentId:"sc-1dizk9s-3"})(["display:flex;flex-direction:column;gap:16px;"]);const Tabs=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemBlocks__Tabs",componentId:"sc-1dizk9s-4"})(["position:relative;display:inline-flex;gap:36px;align-items:center;padding-bottom:12px;border-bottom:1px solid #281e4c;@media ","{gap:20px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;&::-webkit-scrollbar{display:none;}}"],globals/* device */.jO.mobile);const TabButton=styled_components_browser_esm["default"].button.withConfig({displayName:"EcosystemBlocks__TabButton",componentId:"sc-1dizk9s-5"})(["background:transparent;border:0;padding:0;cursor:pointer;font-size:22px;font-weight:600;line-height:1;white-space:nowrap;color:",";&:hover{color:",";}@media ","{font-size:20px;}"],_ref2=>{let $active=_ref2.$active;return $active?'var(--ifm-color-white)':'var(--ifm-color-overlay-white-30)';},_ref3=>{let $active=_ref3.$active;return $active?'var(--ifm-color-white)':'var(--ifm-color-overlay-white-70)';},globals/* device */.jO.laptop);const ActiveUnderline=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemBlocks__ActiveUnderline",componentId:"sc-1dizk9s-6"})(["position:absolute;bottom:0;height:2px;background:var(--ifm-color-custom-pink);transition:all 0.25s ease;"]);
;// ./src/config/EcosystemsPushApps.ts
const EcosystemPushApps=[{nameKey:'components.ecosystem-essentials.apps.pc-faucet.name',descriptionKey:'components.ecosystem-essentials.apps.pc-faucet.description',icon:'/assets/website/ecosystem/pushfaucet.png',href:'https://faucet.push.org/'},{nameKey:'components.ecosystem-essentials.apps.push-bridge.name',descriptionKey:'components.ecosystem-essentials.apps.push-bridge.description',icon:'/assets/website/ecosystem/pushbridge.png',href:'https://bridge.push.org/'},{nameKey:'components.ecosystem-essentials.apps.simulate-tx.name',descriptionKey:'components.ecosystem-essentials.apps.simulate-tx.description',icon:'/assets/website/ecosystem/pushsimulate.png',href:'https://simulate.push.org/'},{nameKey:'components.ecosystem-essentials.apps.push-chain-scan.name',descriptionKey:'components.ecosystem-essentials.apps.push-chain-scan.description',icon:'/assets/website/ecosystem/pushscan.png',href:'https://donut.push.network'}// {
//   nameKey: 'components.ecosystem-essentials.apps.wallet.name',
//   descriptionKey: 'components.ecosystem-essentials.apps.wallet.description',
//   icon: '/assets/website/ecosystem/pushwallet.png',
//   href: 'https://wallet.push.org/',
// },
];
;// ./src/components/Ecosystem/EcosystemEssentials.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const EcosystemEssentials=()=>{const _useTranslation=(0,es/* useTranslation */.Bd)(),t=_useTranslation.t;return/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* ItemV */.y8,{gap:"32px",alignItems:"flex-start",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.H2,{fontSize:"26px",fontWeight:"600",children:t('components.ecosystem-essentials.title')}),/*#__PURE__*/(0,jsx_runtime.jsx)(EssentialGrid,{children:EcosystemPushApps===null||EcosystemPushApps===void 0?void 0:EcosystemPushApps.map(app=>{const handleEssentialAppClick=()=>{// Track essential app click in Google Analytics
if(typeof window!=='undefined'&&window.gtag){window.gtag('event','essential_app_click',{event_category:'ecosystem',event_label:t(app.nameKey),app_name:t(app.nameKey),app_url:app.href});}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(EssentialCard,{href:app.href,target:"_blank",rel:"noopener",bgGradient:app.bgGradient,onClick:handleEssentialAppClick,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(EssentialIcon,{src:(0,useBaseUrl/* default */.Ay)(app.icon),alt:""}),/*#__PURE__*/(0,jsx_runtime.jsxs)(EssentialContent,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(EssentialName,{children:t(app.nameKey)}),/*#__PURE__*/(0,jsx_runtime.jsx)(EssentialDesc,{children:t(app.descriptionKey)})]})]},app.nameKey);})})]});};/* harmony default export */ const Ecosystem_EcosystemEssentials = (EcosystemEssentials);const EssentialGrid=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemEssentials__EssentialGrid",componentId:"sc-1od63f1-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;width:100%;@media ","{grid-template-columns:repeat(2,1fr);}@media ","{grid-template-columns:1fr;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const EssentialCard=styled_components_browser_esm["default"].a.withConfig({displayName:"EcosystemEssentials__EssentialCard",componentId:"sc-1od63f1-1"})(["position:relative;display:flex;align-items:flex-start;flex-direction:column;gap:24px;padding:16px;border-radius:16px;border:1px solid rgba(171,70,248,0.4);background:rgba(0,0,0,0.5);text-decoration:none;transition:transform 0.2s ease;&::before{content:'';position:absolute;inset:0;border-radius:16px;pointer-events:none;opacity:0;transition:opacity 0.2s ease;box-shadow:2.788px 2.598px 12px 0 rgba(255,255,255,0.15) inset,1.858px 1.732px 6px 0 rgba(255,255,255,0.15) inset;}&:hover{transform:translateY(-2px);&::before{opacity:1;}}"]);const EssentialIcon=styled_components_browser_esm["default"].img.withConfig({displayName:"EcosystemEssentials__EssentialIcon",componentId:"sc-1od63f1-2"})(["width:64px;height:64px;border-radius:12px;flex-shrink:0;"]);const EssentialContent=styled_components_browser_esm["default"].div.withConfig({displayName:"EcosystemEssentials__EssentialContent",componentId:"sc-1od63f1-3"})(["display:flex;flex-direction:column;gap:0px;"]);const EssentialName=styled_components_browser_esm["default"].h3.withConfig({displayName:"EcosystemEssentials__EssentialName",componentId:"sc-1od63f1-4"})(["font-size:26px;font-weight:600;color:white;margin:0;"]);const EssentialDesc=styled_components_browser_esm["default"].p.withConfig({displayName:"EcosystemEssentials__EssentialDesc",componentId:"sc-1od63f1-5"})(["font-size:14px;font-weight:400;color:var(--ifm-color-neutral-300);margin:0;"]);
;// ./src/pages-composition/ecosystemComp.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ----- Page -----
const EcosystemComp=()=>{// Localization
const _useTranslation=(0,es/* useTranslation */.Bd)(),t=_useTranslation.t;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Container,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Section */.wn,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Content */.UC,{className:"skeletonsmall",children:/*#__PURE__*/(0,jsx_runtime.jsx)(HeroWrap,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* ItemV */.y8,{alignItems:"flex-start",gap:"12px",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.H1,{margin:"0px 0px",children:t('pages.ecosystem.hero-section.title')}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{fontSize:"20px",lineHeight:"30px",children:t('pages.ecosystem.hero-section.description')})]})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GlowCircle,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Section */.wn,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(AppsContent,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Ecosystem_EcosystemEssentials,{})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Section */.wn,{id:"ecosystem-list",children:/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Content */.UC,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Ecosystem_EcosystemBlocks,{apps:EcosystemAppsList})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Section */.wn,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BodyContent,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(CTAWrap,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.H1,{as:"h3",fontSize:"1.5rem",fontWeight:"600",color:"var(--ifm-color-white)",children:t('pages.ecosystem.cta.title')}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* PrimaryA */.OW,{href:'/docs',title:t('pages.ecosystem.cta.button'),"aria-label":t('pages.ecosystem.cta.button'),zIndex:"2",alignItems:"center",children:[t('pages.ecosystem.cta.button'),/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm.BsArrowRight,{className:"start-svg"})]})]})})})]});};/* harmony default export */ const ecosystemComp = (EcosystemComp);const Container=styled_components_browser_esm["default"].div.withConfig({displayName:"ecosystemComp__Container",componentId:"sc-ilfkcq-0"})(["position:relative;overflow:hidden;"]);const HeroWrap=styled_components_browser_esm["default"].div.withConfig({displayName:"ecosystemComp__HeroWrap",componentId:"sc-ilfkcq-1"})(["max-width:970px;h1{margin-bottom:0px !important;}"]);const AppsContent=(0,styled_components_browser_esm["default"])(SharedStyling/* Content */.UC).withConfig({displayName:"ecosystemComp__AppsContent",componentId:"sc-ilfkcq-2"})(["padding:0px 48px;@media ","{padding:0px 32px;}@media ","{padding:0px 16px;}"],globals/* device */.jO.laptop,globals/* device */.jO.mobileL);const BodyContent=(0,styled_components_browser_esm["default"])(SharedStyling/* Content */.UC).withConfig({displayName:"ecosystemComp__BodyContent",componentId:"sc-ilfkcq-3"})(["padding:0px 48px;@media ","{padding:0px 32px;}@media ","{padding:0px 16px;}"],globals/* device */.jO.laptop,globals/* device */.jO.mobileL);const GlowCircle=styled_components_browser_esm["default"].div.withConfig({displayName:"ecosystemComp__GlowCircle",componentId:"sc-ilfkcq-4"})(["overflow:hidden;position:absolute;border-radius:50%;background:rgba(179,72,236,0.2);filter:blur(125px);pointer-events:none;z-index:2;width:600px;height:600px;left:10%;top:150px;@media ","{left:20%;}@media ","{width:500px;height:500px;left:25%;}@media ","{width:543px;height:538px;left:238px;top:29px;}@media ","{width:395px;height:392px;left:-12px;top:102px;}@media ","{width:295px;height:292px;left:-12px;top:102px;}"],globals/* device */.jO.desktopL,globals/* device */.jO.laptopL,globals/* device */.jO.tablet,globals/* device */.jO.mobileL,globals/* device */.jO.mobileM);const CTAWrap=(0,styled_components_browser_esm["default"])(SharedStyling/* ItemV */.y8).withConfig({displayName:"ecosystemComp__CTAWrap",componentId:"sc-ilfkcq-5"})(["align-items:center;gap:48px;text-align:center;max-width:748px;margin:0 auto;a{display:flex;align-items:center;justify-content:center;}.start-svg{color:var(--ifm-color-white);margin:0px 0 0 8px;}"]);
;// ./src/pages/ecosystem.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Component
// Main
function EcosystemPage(){const _useTranslation=(0,es/* useTranslation */.Bd)(),t=_useTranslation.t;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:t('pages.ecosystem.seo.title'),description:t('pages.ecosystem.seo.description'),showNavbar:'website',children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:url",content:"https://push.org/ecosystem"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:type",content:"website"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:title",content:t('pages.ecosystem.seo.og-title')}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:description",content:t('pages.ecosystem.seo.og-description')}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:image",content:(0,useBaseUrl/* default */.Ay)((__webpack_require__(4108)/* ["default"] */ .A),{absolute:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:site",content:"@PushChain"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:creator",content:"@PushChain"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:title",content:t('pages.ecosystem.seo.twitter-title')}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:description",content:t('pages.ecosystem.seo.twitter-description')}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:image",content:(0,useBaseUrl/* default */.Ay)((__webpack_require__(4108)/* ["default"] */ .A),{absolute:true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* DefaultDarkTheme */.Jr,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ecosystemComp,{})})]});}/* harmony default export */ const ecosystem = (EcosystemPage);

/***/ },

/***/ 515874
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ formatTwitterCount)
/* harmony export */ });
function formatTwitterCount(num){if(num===null||num===undefined)return'';if(num<1000)return num.toString();if(num<1000000)return(num/1000).toFixed(num%1000>=100?1:0)+'K';if(num<1000000000)return(num/1000000).toFixed(num%1000000>=100000?1:0)+'M';return(num/1000000000).toFixed(num%1000000000>=100000000?1:0)+'B';}

/***/ },

/***/ 4108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ecosystemPreview-581ac147026ce8b8c4b475871797ef5f.png");

/***/ }

}]);