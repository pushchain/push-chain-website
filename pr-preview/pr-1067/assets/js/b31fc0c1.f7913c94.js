"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[66294],{

/***/ 353760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ PageMeta)
/* harmony export */ });
const PageMeta={HOME:{pageTitle:'Home',pageDescription:'Homepage of Push Chain - Any Chain. Any User. Any App'},TOS:{pageTitle:'Terms of Service',pageDescription:'Terms of Service of Push Chain'},PRIVACY:{pageTitle:'Privacy Policy',pageDescription:'Privacy Policy of Push Chain'},PRIVACYFORMOBILE:{pageTitle:'Mobile Apps Privacy Policy',pageDescription:'Mobile Apps Privacy Policy of Push Chain'},FAQS:{pageTitle:'FAQ',pageDescription:'Frequently Asked Questions of Push Chain'},FRENS:{pageTitle:'Frens',pageDescription:'Explore integrations done by our frens'},SPACES:{pageTitle:'Spaces',pageDescription:"Explore Push Spaces and how to get started with it's integration"},CHEAT:{pageTitle:'Cheat Sheet',pageDescription:'Explore Push Cheat Sheet and how to get started with it'},ABOUTUS:{pageTitle:'About Us',pageDescription:"Learn what makes Push Chain tick... it's the team"},BRB:{pageTitle:'Billion Reasons to Build (BRB)',pageDescription:'Solve a Hard Problem from top global web3 projects and earn prize and recognition'},DOCS:{pageTitle:'Documentation Hub',pageDescription:'One stop shop for all your Push Chain documentation needs'},BLOG:{pageTitle:'Push Blog',pageDescription:'Learn about the latest updates and news from Push Chain'},BOOTCAMP:{pageTitle:'BRB Bootcamp Campaign',pageDescription:'BRB Bootcamp is the go-to place to learn every aspect of the web3 ecosystem from fundamentals to shipping your first project'},CHAIN:{pageTitle:'Push Chain | Any Chain. Any Wallet. Any App.',pageDescription:'Push Chain is a shared state L1 blockchain for Universal/Interopable Apps. Capable of doing transactions from any chain, unifying all L1s, L2s and enabling apps from any chain to be accessed by the users of any chain.'},KNOWLEDGE:{pageTitle:'Push Chain | Knowledge Base',pageDescription:'Discover everything for tutorials to code base to what makes Push Chain tick at the knowledge hub.'},PARTNERS:{pageTitle:'Push Chain | Knowledge Base Partners',pageDescription:'Meet our Partners'},ARTICLE:{pageTitle:'Push Chain | Knowledge Base',pageDescription:'Discover everything for tutorials to code base to what makes Push Chain tick at the knowledge hub.'},PUSH101:{pageTitle:'Push Chain | Knowledge Base | Push101',pageDescription:'Learn about basics of Push Chain. The innovations it introduces, what makes it tick and why is it required!'},DEEPDIVES:{pageTitle:'Push Chain | Knowledge Base | Deepdives',pageDescription:'Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you ❤️'},TOKENOMICS:{pageTitle:'Push Chain | Knowledge Base | Tokenomics',pageDescription:`Learn how Push Chain's tokenomics incentivizes all actors and ensures sustainable network that's built to last`},FAQ:{pageTitle:'Push Chain | Knowledge Base | Push Chain FAQ',pageDescription:`The place to find answers to all the popular questions the community has asked. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.`},NEWPAGE:{pageTitle:'Push Chain | Knowledge Base | Deepdives',pageDescription:'Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you ❤️'},TEMPLATE:{pageTitle:'Push Template',pageDescription:'Push Template'}};

/***/ }),

/***/ 384705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Poker@3x-1746f4cd080f2eb128dee39f39626c35.png");

/***/ }),

/***/ 965202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Chain_ChainAlertBar)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(796710);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(944404);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
;// ./static/assets/website/illustrations/starColoredIcon.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SvgStarColoredIcon = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M5.864 8.556 5.005 9l.86.444a6.283 6.283 0 0 1 2.69 2.692l.445.858.444-.858a6.288 6.288 0 0 1 2.692-2.692L12.994 9l-.858-.444a6.288 6.288 0 0 1-2.692-2.692L9 5.006l-.444.858a6.289 6.289 0 0 1-2.692 2.692ZM3 8.75A5.752 5.752 0 0 0 8.75 3a.25.25 0 0 1 .5 0A5.752 5.752 0 0 0 15 8.75a.25.25 0 0 1 0 .5A5.752 5.752 0 0 0 9.25 15a.25.25 0 0 1-.5 0A5.752 5.752 0 0 0 3 9.25a.25.25 0 0 1 0-.5Z",
    fill: "#CA37ED",
    stroke: "#CA37ED"
  })));
};
/* harmony default export */ const starColoredIcon = (SvgStarColoredIcon);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/Chain/ChainAlertBar.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
// Internal Components
// Import Assets
// Internal Configs
const ChainAlertBar=_ref=>{let{text,url,textColor='#000',// Default text color
backgroundColor='#fff',// Default background color
borderColor='#f19aff',// Default border color
iconColor='#D548EC',// Default icon color
showStarIcon=true,// Default: show the star icon
center=false// Default: no centering
}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(HeroButton,{href:url,target:"_blank",rel:"noopener noreferrer",textColor:textColor,backgroundColor:backgroundColor,borderColor:borderColor,center:center,children:[showStarIcon&&/*#__PURE__*/(0,jsx_runtime.jsx)(starColoredIcon,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.H2,{fontWeight:"400",fontFamily:"FK Grotesk Neue",children:text}),/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm.BsArrowRight,{color:iconColor})]});};const HeroButton=(0,styled_components_browser_esm["default"])(SharedStyling.A).withConfig({displayName:"ChainAlertBar__HeroButton",componentId:"sc-mkqygu-0"})(["font-family:FK Grotesk Neue;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:12px 16px;gap:8px;width:fit-content;"," border-radius:16px;border:1.5px solid ",";background:",";@media ","{gap:4px;}@media ","{gap:2px;padding:12px 6px;width:calc(100vw - 32px);box-sizing:border-box;}&:hover{background:rgba(255,255,255,0.15);border:1.5px solid rgba(255,255,255,0.1);}h2{color:",";font-family:N27;font-size:16px;font-style:normal;font-weight:400;line-height:140%;@media ","{font-size:12px;}@media ","{font-size:11px;}}"],props=>props.center?'margin: 0 auto;':'margin: 0;',props=>props.borderColor,props=>props.backgroundColor,globals/* device */.jO.mobileM,globals/* device */.jO.mobileS,props=>props.textColor,globals/* device */.jO.mobileL,globals/* device */.jO.mobileM);/* harmony default export */ const Chain_ChainAlertBar = (ChainAlertBar);

/***/ }),

/***/ 974718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ template)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./src/theme/Layout/index.js + 65 modules
var Layout = __webpack_require__(994160);
// EXTERNAL MODULE: ./src/config/pageMeta.ts
var pageMeta = __webpack_require__(353760);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(944404);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./src/hooks/useMediaQuery.ts
var useMediaQuery = __webpack_require__(452005);
// EXTERNAL MODULE: ./src/components/Chain/ChainAlertBar.tsx + 1 modules
var ChainAlertBar = __webpack_require__(965202);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/Template/Template.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const Template=()=>{const isTablet=(0,useMediaQuery/* default */.A)(globals/* device */.jO.tablet);const featuresCard=[{text:'Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk handango.'},{text:'Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk handango.'},{text:'Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk handango.'}];const StarIcon=()=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"29",viewBox:"0 0 28 29",fill:"none",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.3524 1.31893C14.8155 0.0899936 13.0473 0.103007 12.529 1.33972L10.7439 5.59859C9.57977 8.37604 7.3245 10.5676 4.49458 11.6714L0.970016 13.0461C-0.32334 13.5506 -0.323339 15.3593 0.970021 15.8637L4.52088 17.2487C7.33613 18.3468 9.58332 20.5217 10.7527 23.2801L12.5313 27.4753C13.0524 28.7044 14.8101 28.7175 15.3498 27.4962L17.2695 23.1523C18.4543 20.4715 20.6628 18.3617 23.4143 17.2823L27.0328 15.8626C28.3224 15.3567 28.3224 13.5532 27.0328 13.0473L23.4411 11.6382C20.6746 10.5528 18.4576 8.42604 17.2778 5.72569L15.3524 1.31893Z",fill:"white"})});};return/*#__PURE__*/(0,jsx_runtime.jsx)(TemplateWrapper,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TemplateContent,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(ItemContainer,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(TextContainer,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ChainAlertBar/* default */.A,{text:"Push Chain Governance is live",backgroundColor:"transparent",textColor:"#FFF",borderColor:"#D42D2D",iconColor:"#FFF",showStarIcon:false,center:isTablet&&true}),/*#__PURE__*/(0,jsx_runtime.jsx)(TemplateImage,{src:(__webpack_require__(384705)/* ["default"] */ .A),alt:`Poker Image`}),/*#__PURE__*/(0,jsx_runtime.jsx)(MobileImageItem,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextSpan,{children:"Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk handango empressr."}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button,{children:"Launch App"}),featuresCard.map(item=>/*#__PURE__*/(0,jsx_runtime.jsxs)(Features,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(StarIcon,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(FeaturesSpan,{children:item.text})]}))]}),/*#__PURE__*/(0,jsx_runtime.jsx)(DesktopImageItem,{})]})})});};/* harmony default export */ const Template_Template = (Template);const TemplateWrapper=styled_components_browser_esm["default"].div.withConfig({displayName:"Template__TemplateWrapper",componentId:"sc-1dlrt9t-0"})(["height:100vh;background:#000;@media (max-width:768px){min-height:100vh;height:auto;}"]);const TemplateContent=styled_components_browser_esm["default"].div.withConfig({displayName:"Template__TemplateContent",componentId:"sc-1dlrt9t-1"})(["margin:auto auto;height:100%;display:flex;align-items:center;@media (max-width:2560px){width:1400px;}@media (max-width:2000px){width:1200px;}@media (max-width:1548px){width:100%;padding:0 48px;}@media (max-width:768px){padding:0 24px;margin:24px auto;}@media (max-width:470px){padding:0 16px;}"]);const ItemContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"Template__ItemContainer",componentId:"sc-1dlrt9t-2"})(["display:flex;flex-direction:row;align-items:center;gap:150px;width:100%;@media (max-width:768px){flex-direction:column;}"]);const TextContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"Template__TextContainer",componentId:"sc-1dlrt9t-3"})(["display:flex;flex-direction:column;align-items:flex-start;"]);const TextSpan=styled_components_browser_esm["default"].span.withConfig({displayName:"Template__TextSpan",componentId:"sc-1dlrt9t-4"})(["color:#fff;font-family:N27;font-size:20px;font-style:normal;font-weight:400;line-height:140%;@media (max-width:768px){margin-top:16px;}@media (max-width:470px){font-size:17px;}"]);const TemplateImage=styled_components_browser_esm["default"].img.withConfig({displayName:"Template__TemplateImage",componentId:"sc-1dlrt9t-5"})(["width:300px;margin:24px 0;@media (max-width:768px){margin:24px auto;}"]);const Features=styled_components_browser_esm["default"].div.withConfig({displayName:"Template__Features",componentId:"sc-1dlrt9t-6"})(["display:flex;border-bottom:1px solid #fff;padding:24px 0;gap:24px;align-items:center;width:100%;"]);const FeaturesSpan=styled_components_browser_esm["default"].span.withConfig({displayName:"Template__FeaturesSpan",componentId:"sc-1dlrt9t-7"})(["color:#fff;font-family:N27;font-size:18px;font-style:normal;font-weight:400;line-height:140%;@media (max-width:470px){font-size:15px;}"]);const Button=styled_components_browser_esm["default"].button.withConfig({displayName:"Template__Button",componentId:"sc-1dlrt9t-8"})(["background:#d42d2d;width:100%;margin:48px 0 32px 0;height:58px;padding:16px 32px;justify-content:center;align-items:center;align-self:stretch;color:#fff;font-family:N27;font-size:18px;font-style:normal;font-weight:500;border-radius:16px;border:none;line-height:16px;cursor:pointer;"]);const DesktopImageItem=styled_components_browser_esm["default"].div.withConfig({displayName:"Template__DesktopImageItem",componentId:"sc-1dlrt9t-9"})(["height:700px;background:#202020;border-radius:32px;width:500px;display:block;@media (max-width:768px){display:none;}"]);const MobileImageItem=styled_components_browser_esm["default"].div.withConfig({displayName:"Template__MobileImageItem",componentId:"sc-1dlrt9t-10"})(["height:200px;background:#202020;border-radius:32px;width:100%;display:none;@media (max-width:768px){display:block;}"]);
;// ./src/pages/template.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
// Internal Component
// Internal Configs
function TemplatePage(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:pageMeta/* PageMeta */.t.TEMPLATE.pageTitle,description:pageMeta/* PageMeta */.t.TEMPLATE.pageDescription,showNavbar:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Template_Template,{})});}/* harmony default export */ const template = (TemplatePage);

/***/ })

}]);