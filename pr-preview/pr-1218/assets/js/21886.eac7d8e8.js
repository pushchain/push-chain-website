"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[21886],{

/***/ 775694
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export standardProperty */
/* harmony import */ var _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(736124);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:_reactive_element_js__WEBPACK_IMPORTED_MODULE_0__/* .defaultConverter */ .W3,reflect:!1,hasChanged:_reactive_element_js__WEBPACK_IMPORTED_MODULE_0__/* .notEqual */ .Ec},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,!0,r)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,!0,r)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
//# sourceMappingURL=property.js.map


/***/ },

/***/ 44290
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(775694);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .M)({...r,state:!0,attribute:!1})}
//# sourceMappingURL=state.js.map


/***/ },

/***/ 121886
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PayController: () => (/* reexport */ PayController),
  W3mPayLoadingView: () => (/* reexport */ W3mPayLoadingView),
  W3mPayQuoteView: () => (/* reexport */ W3mPayQuoteView),
  W3mPayView: () => (/* reexport */ W3mPayView),
  arbitrumUSDC: () => (/* reexport */ arbitrumUSDC),
  arbitrumUSDT: () => (/* reexport */ arbitrumUSDT),
  baseETH: () => (/* reexport */ baseETH),
  baseSepoliaETH: () => (/* reexport */ baseSepoliaETH),
  baseUSDC: () => (/* reexport */ baseUSDC),
  ethereumUSDC: () => (/* reexport */ ethereumUSDC),
  ethereumUSDT: () => (/* reexport */ ethereumUSDT),
  getExchanges: () => (/* reexport */ client_getExchanges),
  getIsPaymentInProgress: () => (/* reexport */ getIsPaymentInProgress),
  getPayError: () => (/* reexport */ getPayError),
  getPayResult: () => (/* reexport */ getPayResult),
  openPay: () => (/* reexport */ openPay),
  optimismUSDC: () => (/* reexport */ optimismUSDC),
  optimismUSDT: () => (/* reexport */ optimismUSDT),
  pay: () => (/* reexport */ pay),
  polygonUSDC: () => (/* reexport */ polygonUSDC),
  polygonUSDT: () => (/* reexport */ polygonUSDT),
  solanaSOL: () => (/* reexport */ solanaSOL),
  solanaUSDC: () => (/* reexport */ solanaUSDC),
  solanaUSDT: () => (/* reexport */ solanaUSDT)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(527601);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(661144);
// EXTERNAL MODULE: ./node_modules/lit/static-html.js + 1 modules
var static_html = __webpack_require__(34748);
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/app-store.js

const appStoreSvg = (0,lit/* svg */.JW) `<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_87_33)">
    <path d="M23.9367 2.29447e-07H6.05917C5.26333 -0.000218805 4.47526 0.156384 3.73997 0.46086C3.00469 0.765337 2.33661 1.21172 1.77391 1.7745C1.21121 2.33727 0.764917 3.00542 0.460542 3.74074C0.156167 4.47607 -0.000327963 5.26417 5.16031e-07 6.06V23.9433C4.48257e-07 24.7389 0.156744 25.5267 0.461276 26.2617C0.765808 26.9967 1.21216 27.6645 1.77484 28.2269C2.33752 28.7894 3.0055 29.2355 3.74061 29.5397C4.47573 29.8439 5.26358 30.0003 6.05917 30H23.9417C25.5486 29.9996 27.0895 29.3609 28.2257 28.2245C29.3618 27.0881 30 25.5469 30 23.94V6.06C29.9993 4.45241 29.3602 2.91091 28.2232 1.77449C27.0861 0.638064 25.5443 -0.000220881 23.9367 2.29447e-07Z" fill="url(#paint0_linear_87_33)"/>
    <path d="M14.8708 6.89259L15.4783 5.84259C15.5679 5.68703 15.6873 5.55064 15.8296 5.44122C15.9719 5.3318 16.1344 5.25148 16.3078 5.20486C16.4812 5.15824 16.662 5.14622 16.8401 5.1695C17.0181 5.19277 17.1898 5.25088 17.3453 5.34051C17.5009 5.43013 17.6373 5.54952 17.7467 5.69186C17.8561 5.83419 17.9364 5.99669 17.9831 6.17006C18.0297 6.34344 18.0417 6.5243 18.0184 6.70232C17.9952 6.88034 17.9371 7.05203 17.8474 7.20759L11.9949 17.3401H16.2283C17.5999 17.3401 18.3691 18.9526 17.7724 20.0701H5.36159C5.18215 20.0707 5.00436 20.0359 4.83845 19.9675C4.67254 19.8992 4.5218 19.7986 4.39492 19.6718C4.26803 19.5449 4.16751 19.3941 4.09915 19.2282C4.03079 19.0623 3.99593 18.8845 3.99659 18.7051C3.99659 17.9476 4.60492 17.3401 5.36159 17.3401H8.84159L13.2958 9.61926L11.9041 7.20426C11.738 6.89096 11.7 6.52543 11.7982 6.18469C11.8963 5.84395 12.1229 5.5546 12.4301 5.37763C12.7374 5.20065 13.1014 5.14987 13.4454 5.23599C13.7893 5.3221 14.0864 5.53838 14.2741 5.83926L14.8708 6.89259ZM9.60659 21.4759L8.29409 23.7526C8.20446 23.9082 8.08506 24.0446 7.94271 24.1541C7.80035 24.2636 7.63783 24.344 7.46441 24.3906C7.291 24.4373 7.11009 24.4493 6.93202 24.4261C6.75395 24.4028 6.58221 24.3447 6.42659 24.2551C6.27097 24.1655 6.13454 24.0461 6.02506 23.9037C5.91559 23.7613 5.83523 23.5988 5.78857 23.4254C5.74191 23.252 5.72986 23.0711 5.75311 22.893C5.77637 22.715 5.83446 22.5432 5.92409 22.3876L6.89909 20.7001C8.00159 20.3584 8.89742 20.6209 9.60659 21.4759ZM20.9066 17.3476H24.4583C25.2158 17.3476 25.8233 17.9551 25.8233 18.7126C25.8233 19.4701 25.2149 20.0776 24.4583 20.0776H22.4858L23.8166 22.3876C24.1916 23.0443 23.9708 23.8726 23.3149 24.2551C23.0006 24.4359 22.6274 24.4845 22.2772 24.3903C21.927 24.2961 21.6286 24.0667 21.4474 23.7526C19.2058 19.8643 17.5216 16.9534 16.4041 15.0151C15.2608 13.0426 16.0783 11.0626 16.8841 10.3909C17.7799 11.9293 19.1191 14.2501 20.9074 17.3476H20.9066Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_87_33" x1="15" y1="2.29447e-07" x2="15" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB"/>
      <stop offset="1" stop-color="#2072F3"/>
    </linearGradient>
    <clipPath id="clip0_87_33">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>`;
//# sourceMappingURL=app-store.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/apple.js

const appleSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
//# sourceMappingURL=apple.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/bitcoin.js

const bitcoinSvg = (0,lit/* svg */.JW) `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`;
//# sourceMappingURL=bitcoin.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/checkmark.js

const checkmarkSvg = (0,lit/* svg */.JW) `<svg viewBox="0 0 32 32" fill="none">
<path d="M29.0612 10.0613L13.0612 26.0613C12.9218 26.2011 12.7563 26.3121 12.5739 26.3878C12.3916 26.4635 12.1961 26.5024 11.9987 26.5024C11.8013 26.5024 11.6058 26.4635 11.4235 26.3878C11.2411 26.3121 11.0756 26.2011 10.9362 26.0613L3.9362 19.0613C3.79667 18.9217 3.68599 18.7561 3.61047 18.5738C3.53496 18.3915 3.49609 18.1961 3.49609 17.9988C3.49609 17.8014 3.53496 17.606 3.61047 17.4237C3.68599 17.2414 3.79667 17.0758 3.9362 16.9363C4.07573 16.7967 4.24137 16.686 4.42367 16.6105C4.60598 16.535 4.80137 16.4962 4.9987 16.4962C5.19602 16.4962 5.39141 16.535 5.57372 16.6105C5.75602 16.686 5.92167 16.7967 6.0612 16.9363L11.9999 22.875L26.9387 7.93876C27.2205 7.65697 27.6027 7.49866 28.0012 7.49866C28.3997 7.49866 28.7819 7.65697 29.0637 7.93876C29.3455 8.22055 29.5038 8.60274 29.5038 9.00126C29.5038 9.39977 29.3455 9.78197 29.0637 10.0638L29.0612 10.0613Z" fill="currentColor"/>
</svg>
`;
//# sourceMappingURL=checkmark.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/chrome-store.js

const chromeStoreSvg = (0,lit/* svg */.JW) `<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M14.9978 7.80003H27.4668C26.2032 5.61107 24.3857 3.79333 22.1968 2.52955C20.008 1.26577 17.525 0.600485 14.9975 0.600586C12.47 0.600687 9.98712 1.26617 7.79838 2.53012C5.60964 3.79408 3.79221 5.61197 2.52881 7.80103L8.76281 18.599L8.76881 18.598C8.13412 17.5044 7.79906 16.2628 7.79743 14.9983C7.79579 13.7339 8.12764 12.4914 8.7595 11.3961C9.39136 10.3008 10.3009 9.39159 11.3963 8.76005C12.4918 8.12851 13.7344 7.79702 14.9988 7.79903L14.9978 7.80003Z" fill="url(#paint0_linear_87_32)"/>
<path d="M21.237 18.5981L15.003 29.3961C17.5305 29.3961 20.0134 28.7308 22.2022 27.467C24.391 26.2032 26.2086 24.3854 27.4721 22.1965C28.7356 20.0075 29.4006 17.5245 29.4003 14.997C29.3999 12.4695 28.7342 9.9867 27.47 7.7981H15.002L15 7.8041C16.2642 7.80168 17.5067 8.13257 18.6022 8.76342C19.6977 9.39428 20.6076 10.3028 21.2401 11.3974C21.8726 12.492 22.2053 13.734 22.2048 14.9982C22.2042 16.2623 21.8704 17.504 21.237 18.5981Z" fill="url(#paint1_linear_87_32)"/>
<path d="M8.76502 18.601L2.53102 7.80298C1.26664 9.99172 0.600848 12.4748 0.600586 15.0025C0.600324 17.5302 1.2656 20.0134 2.52953 22.2024C3.79345 24.3914 5.61145 26.209 7.80071 27.4725C9.98998 28.736 12.4733 29.4008 15.001 29.4L21.236 18.602L21.232 18.598C20.6022 19.6941 19.6944 20.6049 18.6003 21.2383C17.5062 21.8717 16.2644 22.2055 15.0002 22.2059C13.7359 22.2063 12.4939 21.8733 11.3994 21.2406C10.3049 20.6079 9.39657 19.6977 8.76602 18.602L8.76502 18.601Z" fill="url(#paint2_linear_87_32)"/>
<path d="M14.9998 22.2C16.9094 22.2 18.7407 21.4415 20.091 20.0912C21.4412 18.741 22.1998 16.9096 22.1998 15C22.1998 13.0905 21.4412 11.2591 20.091 9.90888C18.7407 8.55862 16.9094 7.80005 14.9998 7.80005C13.0902 7.80005 11.2589 8.55862 9.90864 9.90888C8.55837 11.2591 7.7998 13.0905 7.7998 15C7.7998 16.9096 8.55837 18.741 9.90864 20.0912C11.2589 21.4415 13.0902 22.2 14.9998 22.2Z" fill="white"/>
<path d="M14.9998 20.7C16.5115 20.7 17.9614 20.0995 19.0303 19.0306C20.0993 17.9616 20.6998 16.5118 20.6998 15C20.6998 13.4883 20.0993 12.0385 19.0303 10.9695C17.9614 9.90058 16.5115 9.30005 14.9998 9.30005C13.4881 9.30005 12.0383 9.90058 10.9693 10.9695C9.90034 12.0385 9.2998 13.4883 9.2998 15C9.2998 16.5118 9.90034 17.9616 10.9693 19.0306C12.0383 20.0995 13.4881 20.7 14.9998 20.7Z" fill="#1A73E8"/>
<defs>
  <linearGradient id="paint0_linear_87_32" x1="3.29381" y1="2.99503" x2="38.0998" y2="2.99503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#D93025"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
  <linearGradient id="paint1_linear_87_32" x1="17.953" y1="29.1431" x2="34.194" y2="-0.298904" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FCC934"/>
    <stop offset="1" stop-color="#FBBC04"/>
  </linearGradient>
  <linearGradient id="paint2_linear_87_32" x1="22.873" y1="28.2" x2="6.63202" y2="-1.24102" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1E8E3E"/>
    <stop offset="1" stop-color="#34A853"/>
  </linearGradient>
</defs>
</svg>`;
//# sourceMappingURL=chrome-store.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/coins.js

const coinsSvg = (0,lit/* svg */.JW) `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M23 11.1962V10.5C23 7.365 18.2712 5 12 5C5.72875 5 1 7.365 1 10.5V15.5C1 18.1112 4.28125 20.1863 9 20.8075V21.5C9 24.635 13.7288 27 20 27C26.2712 27 31 24.635 31 21.5V16.5C31 13.9125 27.8225 11.835 23 11.1962ZM7 18.3587C4.55125 17.675 3 16.5487 3 15.5V13.7413C4.02 14.4637 5.38625 15.0463 7 15.4375V18.3587ZM17 15.4375C18.6138 15.0463 19.98 14.4637 21 13.7413V15.5C21 16.5487 19.4487 17.675 17 18.3587V15.4375ZM15 24.3587C12.5513 23.675 11 22.5487 11 21.5V20.9788C11.3287 20.9913 11.6613 21 12 21C12.485 21 12.9587 20.9837 13.4237 20.9562C13.9403 21.1412 14.4665 21.2981 15 21.4263V24.3587ZM15 18.7812C14.0068 18.928 13.004 19.0011 12 19C10.996 19.0011 9.99324 18.928 9 18.7812V15.8075C9.99472 15.9371 10.9969 16.0014 12 16C13.0031 16.0014 14.0053 15.9371 15 15.8075V18.7812ZM23 24.7812C21.0106 25.0729 18.9894 25.0729 17 24.7812V21.8C17.9944 21.9337 18.9967 22.0005 20 22C21.0031 22.0014 22.0053 21.9371 23 21.8075V24.7812ZM29 21.5C29 22.5487 27.4487 23.675 25 24.3587V21.4375C26.6138 21.0462 27.98 20.4637 29 19.7412V21.5Z" fill="currentColor"/>
</svg>
`;
//# sourceMappingURL=coins.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/cursor.js

const cursorSvg = (0,lit/* svg */.JW) ` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;
//# sourceMappingURL=cursor.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/discord.js

const discordSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`;
//# sourceMappingURL=discord.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/ethereum.js

const ethereumSvg = (0,lit/* svg */.JW) `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`;
//# sourceMappingURL=ethereum.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/etherscan.js

const etherscanSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;
//# sourceMappingURL=etherscan.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/facebook.js

const facebookSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
//# sourceMappingURL=facebook.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/farcaster.js

const farcasterSvg = (0,lit/* svg */.JW) `<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`;
//# sourceMappingURL=farcaster.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/github.js

const githubSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
//# sourceMappingURL=github.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/google.js

const googleSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`;
//# sourceMappingURL=google.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/info.js

const infoSealSvg = (0,lit/* svg */.JW) `<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.875 0C3.91082 0 2.96829 0.285914 2.1666 0.821586C1.36491 1.35726 0.740067 2.11863 0.371089 3.00942C0.00211226 3.90021 -0.094429 4.88041 0.093674 5.82607C0.281777 6.77172 0.746076 7.64036 1.42786 8.32215C2.10964 9.00393 2.97828 9.46823 3.92394 9.65633C4.86959 9.84443 5.84979 9.74789 6.74058 9.37891C7.63137 9.00994 8.39274 8.38509 8.92842 7.5834C9.46409 6.78171 9.75 5.83918 9.75 4.875C9.74864 3.58249 9.23458 2.34331 8.32064 1.42936C7.4067 0.515418 6.16751 0.00136492 4.875 0ZM4.6875 2.25C4.79875 2.25 4.90751 2.28299 5.00001 2.3448C5.09251 2.40661 5.16461 2.49446 5.20718 2.59724C5.24976 2.70002 5.2609 2.81312 5.23919 2.92224C5.21749 3.03135 5.16392 3.13158 5.08525 3.21025C5.00658 3.28891 4.90635 3.34249 4.79724 3.36419C4.68813 3.3859 4.57503 3.37476 4.47224 3.33218C4.36946 3.28961 4.28161 3.21751 4.2198 3.12501C4.15799 3.03251 4.125 2.92375 4.125 2.8125C4.125 2.66332 4.18427 2.52024 4.28975 2.41475C4.39524 2.30926 4.53832 2.25 4.6875 2.25ZM5.25 7.5C5.05109 7.5 4.86032 7.42098 4.71967 7.28033C4.57902 7.13968 4.5 6.94891 4.5 6.75V4.875C4.40055 4.875 4.30516 4.83549 4.23484 4.76516C4.16451 4.69484 4.125 4.59946 4.125 4.5C4.125 4.40054 4.16451 4.30516 4.23484 4.23484C4.30516 4.16451 4.40055 4.125 4.5 4.125C4.69891 4.125 4.88968 4.20402 5.03033 4.34467C5.17098 4.48532 5.25 4.67609 5.25 4.875V6.75C5.34946 6.75 5.44484 6.78951 5.51517 6.85983C5.58549 6.93016 5.625 7.02554 5.625 7.125C5.625 7.22446 5.58549 7.31984 5.51517 7.39017C5.44484 7.46049 5.34946 7.5 5.25 7.5Z" fill="#9A9A9A"/>
</svg>
`;
//# sourceMappingURL=info.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/paper-plane-titl.js

const paperPlaneTitleSvg = (0,lit/* svg */.JW) `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M28.925 5.5425C28.925 5.5425 28.925 5.555 28.925 5.56125L21.65 29.5537C21.5399 29.9434 21.3132 30.2901 21.0004 30.5473C20.6876 30.8045 20.3036 30.9598 19.9 30.9925C19.8425 30.9975 19.785 31 19.7275 31C19.3493 31.0012 18.9786 30.8941 18.6592 30.6915C18.3398 30.4888 18.085 30.199 17.925 29.8563L13.375 20.5187C13.3295 20.4252 13.3143 20.3197 13.3315 20.2171C13.3488 20.1145 13.3976 20.0198 13.4713 19.9463L20.7113 12.7063C20.8909 12.5172 20.9895 12.2654 20.9862 12.0047C20.9829 11.7439 20.8778 11.4948 20.6934 11.3104C20.509 11.126 20.2599 11.0209 19.9991 11.0176C19.7383 11.0142 19.4866 11.1129 19.2975 11.2925L12.0538 18.5325C11.9802 18.6061 11.8855 18.655 11.7829 18.6722C11.6803 18.6895 11.5748 18.6743 11.4813 18.6287L2.13502 14.08C1.76954 13.9047 1.46598 13.6224 1.26454 13.2706C1.06311 12.9189 0.973316 12.5142 1.00707 12.1102C1.04082 11.7063 1.19652 11.3221 1.45354 11.0087C1.71056 10.6952 2.05676 10.4673 2.44627 10.355L26.4388 3.08H26.4575C26.7991 2.98403 27.1601 2.98066 27.5034 3.07025C27.8468 3.15984 28.1601 3.33916 28.4113 3.58981C28.6624 3.84045 28.8424 4.15341 28.9326 4.49656C29.0229 4.83971 29.0203 5.2007 28.925 5.5425Z" fill="currentColor"/>
</svg>
`;
//# sourceMappingURL=paper-plane-titl.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/play-store.js

const playStoreSvg = (0,lit/* svg */.JW) ` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`;
//# sourceMappingURL=play-store.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/reown-logo.js

const reownSvg = (0,lit/* svg */.JW) `<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 5.83334C11.6666 2.61168 14.2783 0 17.5 0H25.8334C29.055 0 31.6666 2.61168 31.6666 5.83334V14.1666C31.6666 17.3883 29.055 20 25.8334 20H17.5C14.2783 20 11.6666 17.3883 11.6666 14.1666V5.83334Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M19.5068 13.7499L22.4309 5.83331H23.2895L20.3654 13.7499H19.5068Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M0 5.41666C0 2.42513 2.42513 0 5.41666 0C8.40821 0 10.8334 2.42513 10.8334 5.41666V14.5833C10.8334 17.5748 8.40821 20 5.41666 20C2.42513 20 0 17.5748 0 14.5833V5.41666Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M4.89581 12.4997V11.458H5.93747V12.4997H4.89581Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M32.5 10C32.5 4.47715 36.6896 0 41.8578 0H65.6422C70.8104 0 75 4.47715 75 10C75 15.5229 70.8104 20 65.6422 20H41.8578C36.6896 20 32.5 15.5229 32.5 10Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M61.7108 12.4475V7.82751H62.5266V8.52418C62.8199 8.01084 63.4157 7.70834 64.0757 7.70834C65.0749 7.70834 65.7715 8.34084 65.7715 9.56918V12.4475H64.9649V9.61503C64.9649 8.80831 64.5066 8.38668 63.8374 8.38668C63.1132 8.38668 62.5266 8.9642 62.5266 9.78001V12.4475H61.7108Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M56.5671 12.4475L55.7147 7.82748H56.4846L57.0896 11.6409L57.8871 9.12916H58.6479L59.4363 11.6134L60.0505 7.82748H60.8204L59.9679 12.4475H59.0513L58.2721 10.0458L57.4838 12.4475H56.5671Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M52.9636 12.5666C51.5611 12.5666 50.7361 11.5217 50.7361 10.1375C50.7361 8.76254 51.5611 7.70834 52.9636 7.70834C54.3661 7.70834 55.1911 8.76254 55.1911 10.1375C55.1911 11.5217 54.3661 12.5666 52.9636 12.5666ZM52.9636 11.8883C53.9719 11.8883 54.357 11.0266 54.357 10.1283C54.357 9.23914 53.9719 8.38668 52.9636 8.38668C51.9552 8.38668 51.5702 9.23914 51.5702 10.1283C51.5702 11.0266 51.9552 11.8883 52.9636 11.8883Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M47.8507 12.5666C46.494 12.5666 45.6415 11.5308 45.6415 10.1375C45.6415 8.75337 46.494 7.70834 47.8507 7.70834C48.9965 7.70834 50.0048 8.35917 49.8948 10.3483H46.4756C46.5398 11.2009 46.934 11.8975 47.8507 11.8975C48.4648 11.8975 48.8681 11.5217 49.0057 11.0908H49.8123C49.684 11.8609 48.9598 12.5666 47.8507 12.5666ZM46.494 9.73416H49.1065C49.0423 8.80831 48.6114 8.37751 47.8507 8.37751C47.0165 8.37751 46.604 8.98254 46.494 9.73416Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M41.7284 12.4475V7.82748H42.5625V8.60665C42.8559 8.09332 43.3601 7.82748 43.8825 7.82748H44.9917V8.60665H43.8184C43.0851 8.60665 42.5625 9.08331 42.5625 10.0092V12.4475H41.7284Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>

`;
//# sourceMappingURL=reown-logo.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/solana.js

const solanaSvg = (0,lit/* svg */.JW) `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`;
//# sourceMappingURL=solana.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/telegram.js

const telegramSvg = (0,lit/* svg */.JW) `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`;
//# sourceMappingURL=telegram.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/ton.js

const tonSvg = (0,lit/* svg */.JW) `
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
  <path d="M8.37651 0H1.62309C0.381381 0 -0.405611 1.33944 0.219059 2.42225L4.38701 9.64649C4.659 10.1182 5.3406 10.1182 5.61259 9.64649L9.78139 2.42225C10.4052 1.34117 9.61822 0 8.37736 0H8.37651ZM4.38362 7.48005L3.47591 5.72329L1.2857 1.80606C1.14121 1.55534 1.31968 1.23405 1.62225 1.23405H4.38278V7.4809L4.38362 7.48005ZM8.71221 1.80521L6.52284 5.72414L5.61513 7.48005V1.2332H8.37566C8.67823 1.2332 8.85669 1.55449 8.71221 1.80521Z" fill="var(--apkt-tokens-theme-textPrimary)" />
</svg>
`;
//# sourceMappingURL=ton.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/tron.js

const tronSvg = (0,lit/* svg */.JW) `
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 64 64">
    <path fill="var(--apkt-tokens-theme-textPrimary)" d="M61.55 19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82 3.82 0 0 0-1.11-.62l0 0C41.56 7 3.63-.09 2.89 0a1.4 1.4 0 0 0-.58.22L2.12.37a2.23 2.23 0 0 0-.52.84l-.05.13v.71l0 .11C5.82 14.05 22.68 53 26 62.14c.2.62.58 1.8 1.29 1.86h.16c.38 0 2-2.14 2-2.14S58.41 26.74 61.34 23a9.46 9.46 0 0 0 1-1.48A2.41 2.41 0 0 0 61.55 19.28ZM36.88 23.37 49.24 13.12l7.25 6.68Zm-4.8-.67L10.8 5.26l34.43 6.35ZM34 27.27l21.78-3.51-24.9 30ZM7.91 7 30.3 26 27.06 53.78Z"/>
  </svg>
`;
//# sourceMappingURL=tron.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/twitch.js

const twitchSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
//# sourceMappingURL=twitch.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/twitterIcon.js

const twitterIconSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;
//# sourceMappingURL=twitterIcon.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/walletconnect.js

const walletConnectSvg = (0,lit/* svg */.JW) `
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`;
const walletConnectInvertSvg = (0,lit/* svg */.JW) `
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`;
const walletConnectLightBrownSvg = (0,lit/* svg */.JW) `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`;
const walletConnectBrownSvg = (0,lit/* svg */.JW) `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`;
//# sourceMappingURL=walletconnect.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/x.js

const xSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;
//# sourceMappingURL=x.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(310982);
// EXTERNAL MODULE: ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(185886);
// EXTERNAL MODULE: ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(15181);
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    height: inherit;
    width: inherit;
    object-fit: contain;
    object-position: center;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































const phosphorIconsMap = {
    add: 'ph-plus',
    allWallets: 'ph-dots-three',
    arrowBottom: 'ph-arrow-down',
    arrowBottomCircle: 'ph-arrow-circle-down',
    arrowClockWise: 'ph-arrow-clockwise',
    arrowLeft: 'ph-arrow-left',
    arrowRight: 'ph-arrow-right',
    arrowTop: 'ph-arrow-up',
    arrowTopRight: 'ph-arrow-up-right',
    bank: 'ph-bank',
    bin: 'ph-trash',
    browser: 'ph-browser',
    card: 'ph-credit-card',
    checkmarkBold: 'ph-check',
    chevronBottom: 'ph-caret-down',
    chevronLeft: 'ph-caret-left',
    chevronRight: 'ph-caret-right',
    chevronTop: 'ph-caret-up',
    clock: 'ph-clock',
    close: 'ph-x',
    coinPlaceholder: 'ph-circle-half',
    compass: 'ph-compass',
    copy: 'ph-copy',
    desktop: 'ph-desktop',
    dollar: 'ph-currency-dollar',
    download: 'ph-vault',
    exclamationCircle: 'ph-warning-circle',
    extension: 'ph-puzzle-piece',
    externalLink: 'ph-arrow-square-out',
    filters: 'ph-funnel-simple',
    helpCircle: 'ph-question',
    id: 'ph-identification-card',
    image: 'ph-image',
    info: 'ph-info',
    lightbulb: 'ph-lightbulb',
    mail: 'ph-envelope',
    mobile: 'ph-device-mobile',
    more: 'ph-dots-three',
    networkPlaceholder: 'ph-globe',
    nftPlaceholder: 'ph-image',
    plus: 'ph-plus',
    power: 'ph-power',
    qrCode: 'ph-qr-code',
    questionMark: 'ph-question',
    refresh: 'ph-arrow-clockwise',
    recycleHorizontal: 'ph-arrows-clockwise',
    search: 'ph-magnifying-glass',
    sealCheck: 'ph-seal-check',
    send: 'ph-paper-plane-right',
    signOut: 'ph-sign-out',
    spinner: 'ph-spinner',
    swapHorizontal: 'ph-arrows-left-right',
    swapVertical: 'ph-arrows-down-up',
    threeDots: 'ph-dots-three',
    user: 'ph-user',
    verify: 'ph-seal-check',
    verifyFilled: 'ph-seal-check',
    wallet: 'ph-wallet',
    warning: 'ph-warning',
    warningCircle: 'ph-warning-circle',
    appStore: '',
    apple: '',
    bitcoin: '',
    coins: '',
    chromeStore: '',
    cursor: '',
    discord: '',
    ethereum: '',
    etherscan: '',
    facebook: '',
    farcaster: '',
    github: '',
    google: '',
    playStore: '',
    paperPlaneTitle: '',
    reown: '',
    solana: '',
    ton: '',
    tron: '',
    telegram: '',
    twitch: '',
    twitterIcon: '',
    twitter: '',
    walletConnect: '',
    walletConnectBrown: '',
    walletConnectLightBrown: '',
    x: '',
    infoSeal: '',
    checkmark: ''
};
const phosphorImports = {
    'ph-arrow-circle-down': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(52866)]).then(__webpack_require__.bind(__webpack_require__, 330485)),
    'ph-arrow-clockwise': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(50134)]).then(__webpack_require__.bind(__webpack_require__, 827753)),
    'ph-arrow-down': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(92038)]).then(__webpack_require__.bind(__webpack_require__, 169657)),
    'ph-arrow-left': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(42057)]).then(__webpack_require__.bind(__webpack_require__, 564438)),
    'ph-arrow-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(66598)]).then(__webpack_require__.bind(__webpack_require__, 644217)),
    'ph-arrow-square-out': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(36915)]).then(__webpack_require__.bind(__webpack_require__, 59296)),
    'ph-arrows-down-up': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(28664)]).then(__webpack_require__.bind(__webpack_require__, 806283)),
    'ph-arrows-left-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(69284)]).then(__webpack_require__.bind(__webpack_require__, 946903)),
    'ph-arrow-up': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(51081)]).then(__webpack_require__.bind(__webpack_require__, 73462)),
    'ph-arrow-up-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(16539)]).then(__webpack_require__.bind(__webpack_require__, 438920)),
    'ph-arrows-clockwise': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(65677)]).then(__webpack_require__.bind(__webpack_require__, 888058)),
    'ph-bank': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(47955)]).then(__webpack_require__.bind(__webpack_require__, 770336)),
    'ph-browser': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(98477)]).then(__webpack_require__.bind(__webpack_require__, 120858)),
    'ph-caret-down': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(6232)]).then(__webpack_require__.bind(__webpack_require__, 983851)),
    'ph-caret-left': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(37931)]).then(__webpack_require__.bind(__webpack_require__, 260312)),
    'ph-caret-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(95584)]).then(__webpack_require__.bind(__webpack_require__, 873203)),
    'ph-caret-up': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(14031)]).then(__webpack_require__.bind(__webpack_require__, 436412)),
    'ph-check': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(64189)]).then(__webpack_require__.bind(__webpack_require__, 286570)),
    'ph-circle-half': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(1610)]).then(__webpack_require__.bind(__webpack_require__, 779229)),
    'ph-clock': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(49611)]).then(__webpack_require__.bind(__webpack_require__, 71992)),
    'ph-compass': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(3501)]).then(__webpack_require__.bind(__webpack_require__, 425882)),
    'ph-copy': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(83730)]).then(__webpack_require__.bind(__webpack_require__, 761349)),
    'ph-credit-card': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(84524)]).then(__webpack_require__.bind(__webpack_require__, 862143)),
    'ph-currency-dollar': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(50970)]).then(__webpack_require__.bind(__webpack_require__, 128589)),
    'ph-desktop': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(44357)]).then(__webpack_require__.bind(__webpack_require__, 266738)),
    'ph-device-mobile': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(33881)]).then(__webpack_require__.bind(__webpack_require__, 556262)),
    'ph-dots-three': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(81257)]).then(__webpack_require__.bind(__webpack_require__, 303638)),
    'ph-vault': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(77074)]).then(__webpack_require__.bind(__webpack_require__, 766598)),
    'ph-envelope': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(90417)]).then(__webpack_require__.bind(__webpack_require__, 612798)),
    'ph-funnel-simple': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(14659)]).then(__webpack_require__.bind(__webpack_require__, 937040)),
    'ph-globe': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(18226)]).then(__webpack_require__.bind(__webpack_require__, 195845)),
    'ph-identification-card': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(63857)]).then(__webpack_require__.bind(__webpack_require__, 886238)),
    'ph-image': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(90186)]).then(__webpack_require__.bind(__webpack_require__, 67805)),
    'ph-info': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(44145)]).then(__webpack_require__.bind(__webpack_require__, 66526)),
    'ph-lightbulb': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(81952)]).then(__webpack_require__.bind(__webpack_require__, 459571)),
    'ph-magnifying-glass': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(78184)]).then(__webpack_require__.bind(__webpack_require__, 655803)),
    'ph-paper-plane-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(82883)]).then(__webpack_require__.bind(__webpack_require__, 105264)),
    'ph-plus': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(79253)]).then(__webpack_require__.bind(__webpack_require__, 601634)),
    'ph-power': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(75998)]).then(__webpack_require__.bind(__webpack_require__, 253617)),
    'ph-puzzle-piece': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(69891)]).then(__webpack_require__.bind(__webpack_require__, 492272)),
    'ph-qr-code': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(67399)]).then(__webpack_require__.bind(__webpack_require__, 189780)),
    'ph-question': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(68273)]).then(__webpack_require__.bind(__webpack_require__, 390654)),
    'ph-question-circle': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(1618)]).then(__webpack_require__.bind(__webpack_require__, 279237)),
    'ph-seal-check': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(57152)]).then(__webpack_require__.bind(__webpack_require__, 134771)),
    'ph-sign-out': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(7280)]).then(__webpack_require__.bind(__webpack_require__, 584899)),
    'ph-spinner': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(75698)]).then(__webpack_require__.bind(__webpack_require__, 553317)),
    'ph-trash': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(99503)]).then(__webpack_require__.bind(__webpack_require__, 521884)),
    'ph-user': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(47576)]).then(__webpack_require__.bind(__webpack_require__, 125195)),
    'ph-wallet': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(14506)]).then(__webpack_require__.bind(__webpack_require__, 92125)),
    'ph-warning': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(17729)]).then(__webpack_require__.bind(__webpack_require__, 23758)),
    'ph-warning-circle': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(61661)]).then(__webpack_require__.bind(__webpack_require__, 384042)),
    'ph-x': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(88245)]).then(__webpack_require__.bind(__webpack_require__, 510626))
};
const svgOptions = {
    appStore: appStoreSvg,
    apple: appleSvg,
    bitcoin: bitcoinSvg,
    coins: coinsSvg,
    chromeStore: chromeStoreSvg,
    cursor: cursorSvg,
    discord: discordSvg,
    ethereum: ethereumSvg,
    etherscan: etherscanSvg,
    facebook: facebookSvg,
    farcaster: farcasterSvg,
    github: githubSvg,
    google: googleSvg,
    playStore: playStoreSvg,
    paperPlaneTitle: paperPlaneTitleSvg,
    reown: reownSvg,
    solana: solanaSvg,
    ton: tonSvg,
    tron: tronSvg,
    telegram: telegramSvg,
    twitch: twitchSvg,
    twitter: xSvg,
    twitterIcon: twitterIconSvg,
    walletConnect: walletConnectSvg,
    walletConnectInvert: walletConnectInvertSvg,
    walletConnectBrown: walletConnectBrownSvg,
    walletConnectLightBrown: walletConnectLightBrownSvg,
    x: xSvg,
    infoSeal: infoSealSvg,
    checkmark: checkmarkSvg
};
const ICON_COLOR = {
    'accent-primary': ThemeHelperUtil/* vars */.f.tokens.core.iconAccentPrimary,
    'accent-certified': ThemeHelperUtil/* vars */.f.tokens.core.iconAccentCertified,
    'foreground-secondary': ThemeHelperUtil/* vars */.f.tokens.theme.foregroundSecondary,
    default: ThemeHelperUtil/* vars */.f.tokens.theme.iconDefault,
    success: ThemeHelperUtil/* vars */.f.tokens.core.iconSuccess,
    error: ThemeHelperUtil/* vars */.f.tokens.core.iconError,
    warning: ThemeHelperUtil/* vars */.f.tokens.core.iconWarning,
    inverse: ThemeHelperUtil/* vars */.f.tokens.theme.iconInverse
};
let WuiIcon = class WuiIcon extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.name = 'copy';
        this.weight = 'bold';
        this.color = 'inherit';
    }
    render() {
        const getSize = {
            xxs: '2',
            xs: '3',
            sm: '3',
            md: '4',
            mdl: '5',
            lg: '5',
            xl: '6',
            xxl: '7',
            inherit: 'inherit'
        };
        this.style.cssText = `
      --local-width: ${this.size === 'inherit' ? 'inherit' : `var(--apkt-spacing-${getSize[this.size]})`};
      --local-color: ${this.color === 'inherit' ? 'inherit' : ICON_COLOR[this.color]}
    `;
        const phosphorIconTag = phosphorIconsMap[this.name];
        if (phosphorIconTag && phosphorIconTag !== '') {
            const importFn = phosphorImports[phosphorIconTag];
            if (importFn) {
                importFn();
            }
            const tag = (0,static_html/* unsafeStatic */.Bk)(phosphorIconTag);
            const getPhosphorSize = {
                xxs: '0.5em',
                xs: '0.75em',
                sm: '0.75em',
                md: '1em',
                mdl: '1.25em',
                lg: '1.25em',
                xl: '1.5em',
                xxl: '1.75em'
            };
            return (0,static_html/* html */.qy) `<${tag} size=${getPhosphorSize[this.size]} weight="${this.weight}"></${tag}>`;
        }
        return svgOptions[this.name] || (0,static_html/* html */.qy) ``;
    }
};
WuiIcon.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIcon.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIcon.prototype, "name", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIcon.prototype, "weight", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIcon.prototype, "color", void 0);
WuiIcon = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon')
], WuiIcon);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/styles.js

/* harmony default export */ const wui_loading_spinner_styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js
var wui_loading_spinner_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiLoadingSpinner = class WuiLoadingSpinner extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.color = 'primary';
        this.size = 'lg';
    }
    render() {
        const VARS_BY_COLOR = {
            primary: ThemeHelperUtil/* vars */.f.tokens.theme.textPrimary,
            secondary: ThemeHelperUtil/* vars */.f.tokens.theme.textSecondary,
            tertiary: ThemeHelperUtil/* vars */.f.tokens.theme.textTertiary,
            invert: ThemeHelperUtil/* vars */.f.tokens.theme.textInvert,
            error: ThemeHelperUtil/* vars */.f.tokens.core.textError,
            warning: ThemeHelperUtil/* vars */.f.tokens.core.textWarning,
            'accent-primary': ThemeHelperUtil/* vars */.f.tokens.core.textAccentPrimary
        };
        this.style.cssText = `
      --local-color: ${this.color === 'inherit' ? 'inherit' : VARS_BY_COLOR[this.color]};
      `;
        this.dataset['size'] = this.size;
        return (0,lit/* html */.qy) `<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`;
    }
};
WuiLoadingSpinner.styles = [ThemeUtil/* resetStyles */.W5, wui_loading_spinner_styles];
wui_loading_spinner_decorate([
    (0,decorators/* property */.MZ)()
], WuiLoadingSpinner.prototype, "color", void 0);
wui_loading_spinner_decorate([
    (0,decorators/* property */.MZ)()
], WuiLoadingSpinner.prototype, "size", void 0);
WuiLoadingSpinner = wui_loading_spinner_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-loading-spinner')
], WuiLoadingSpinner);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/lit/directives/class-map.js + 1 modules
var class_map = __webpack_require__(899605);
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/styles.js

/* harmony default export */ const wui_text_styles = ((0,ThemeHelperUtil/* css */.AH) `
  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /* -- Headings --------------------------------------------------- */
  .wui-font-h1-regular-mono {
    font-size: ${({ textSize }) => textSize.h1};
    line-height: ${({ typography }) => typography['h1-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h1-regular-mono'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-font-h1-regular {
    font-size: ${({ textSize }) => textSize.h1};
    line-height: ${({ typography }) => typography['h1-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h1-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h1-medium {
    font-size: ${({ textSize }) => textSize.h1};
    line-height: ${({ typography }) => typography['h1-medium'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h1-medium'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-regular-mono {
    font-size: ${({ textSize }) => textSize.h2};
    line-height: ${({ typography }) => typography['h2-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h2-regular-mono'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-font-h2-regular {
    font-size: ${({ textSize }) => textSize.h2};
    line-height: ${({ typography }) => typography['h2-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h2-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-medium {
    font-size: ${({ textSize }) => textSize.h2};
    line-height: ${({ typography }) => typography['h2-medium'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h2-medium'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-regular-mono {
    font-size: ${({ textSize }) => textSize.h3};
    line-height: ${({ typography }) => typography['h3-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h3-regular-mono'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-font-h3-regular {
    font-size: ${({ textSize }) => textSize.h3};
    line-height: ${({ typography }) => typography['h3-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h3-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-medium {
    font-size: ${({ textSize }) => textSize.h3};
    line-height: ${({ typography }) => typography['h3-medium'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h3-medium'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-regular-mono {
    font-size: ${({ textSize }) => textSize.h4};
    line-height: ${({ typography }) => typography['h4-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h4-regular-mono'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-font-h4-regular {
    font-size: ${({ textSize }) => textSize.h4};
    line-height: ${({ typography }) => typography['h4-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h4-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-medium {
    font-size: ${({ textSize }) => textSize.h4};
    line-height: ${({ typography }) => typography['h4-medium'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h4-medium'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-regular-mono {
    font-size: ${({ textSize }) => textSize.h5};
    line-height: ${({ typography }) => typography['h5-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h5-regular-mono'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-font-h5-regular {
    font-size: ${({ textSize }) => textSize.h5};
    line-height: ${({ typography }) => typography['h5-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h5-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-medium {
    font-size: ${({ textSize }) => textSize.h5};
    line-height: ${({ typography }) => typography['h5-medium'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h5-medium'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-regular-mono {
    font-size: ${({ textSize }) => textSize.h6};
    line-height: ${({ typography }) => typography['h6-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h6-regular-mono'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-font-h6-regular {
    font-size: ${({ textSize }) => textSize.h6};
    line-height: ${({ typography }) => typography['h6-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h6-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-medium {
    font-size: ${({ textSize }) => textSize.h6};
    line-height: ${({ typography }) => typography['h6-medium'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h6-medium'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-regular-mono {
    font-size: ${({ textSize }) => textSize.large};
    line-height: ${({ typography }) => typography['lg-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['lg-regular-mono'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-font-lg-regular {
    font-size: ${({ textSize }) => textSize.large};
    line-height: ${({ typography }) => typography['lg-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['lg-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-medium {
    font-size: ${({ textSize }) => textSize.large};
    line-height: ${({ typography }) => typography['lg-medium'].lineHeight};
    letter-spacing: ${({ typography }) => typography['lg-medium'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-regular-mono {
    font-size: ${({ textSize }) => textSize.medium};
    line-height: ${({ typography }) => typography['md-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['md-regular-mono'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-font-md-regular {
    font-size: ${({ textSize }) => textSize.medium};
    line-height: ${({ typography }) => typography['md-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['md-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-medium {
    font-size: ${({ textSize }) => textSize.medium};
    line-height: ${({ typography }) => typography['md-medium'].lineHeight};
    letter-spacing: ${({ typography }) => typography['md-medium'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-regular-mono {
    font-size: ${({ textSize }) => textSize.small};
    line-height: ${({ typography }) => typography['sm-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['sm-regular-mono'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-font-sm-regular {
    font-size: ${({ textSize }) => textSize.small};
    line-height: ${({ typography }) => typography['sm-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['sm-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-medium {
    font-size: ${({ textSize }) => textSize.small};
    line-height: ${({ typography }) => typography['sm-medium'].lineHeight};
    letter-spacing: ${({ typography }) => typography['sm-medium'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js
var wui_text_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const TEXT_VARS_BY_COLOR = {
    primary: ThemeHelperUtil/* vars */.f.tokens.theme.textPrimary,
    secondary: ThemeHelperUtil/* vars */.f.tokens.theme.textSecondary,
    tertiary: ThemeHelperUtil/* vars */.f.tokens.theme.textTertiary,
    invert: ThemeHelperUtil/* vars */.f.tokens.theme.textInvert,
    error: ThemeHelperUtil/* vars */.f.tokens.core.textError,
    success: ThemeHelperUtil/* vars */.f.tokens.core.textSuccess,
    warning: ThemeHelperUtil/* vars */.f.tokens.core.textWarning,
    'accent-primary': ThemeHelperUtil/* vars */.f.tokens.core.textAccentPrimary
};
let WuiText = class WuiText extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.variant = 'md-regular';
        this.color = 'inherit';
        this.align = 'left';
        this.lineClamp = undefined;
        this.display = 'inline-flex';
    }
    render() {
        const classes = {
            [`wui-font-${this.variant}`]: true,
            [`wui-line-clamp-${this.lineClamp}`]: this.lineClamp ? true : false
        };
        this.style.cssText = `
      display: ${this.display};
      --local-align: ${this.align};
      --local-color: ${this.color === 'inherit' ? 'inherit' : TEXT_VARS_BY_COLOR[this.color ?? 'primary']};
      `;
        return (0,lit/* html */.qy) `<slot class=${(0,class_map/* classMap */.H)(classes)}></slot>`;
    }
};
WuiText.styles = [ThemeUtil/* resetStyles */.W5, wui_text_styles];
wui_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "variant", void 0);
wui_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "color", void 0);
wui_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "align", void 0);
wui_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "lineClamp", void 0);
wui_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "display", void 0);
WuiText = wui_text_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-text')
], WuiText);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/styles.js

/* harmony default export */ const wui_button_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({ spacing }) => spacing[2]};
    transition:
      scale ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-1']},
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      border-radius ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-1']};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    padding: 0 ${({ spacing }) => spacing[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({ borderRadius }) => borderRadius[3]};
    padding: 0 ${({ spacing }) => spacing[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    padding: 0 ${({ spacing }) => spacing[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({ tokens }) => tokens.core.backgroundAccentPrimary};
    color: ${({ tokens }) => tokens.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({ tokens }) => tokens.theme.backgroundInvert};
    color: ${({ tokens }) => tokens.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({ tokens }) => tokens.core.textError};
    color: ${({ tokens }) => tokens.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
    color: ${({ tokens }) => tokens.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/index.js
var wui_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const TEXT_VARIANT_BY_SIZE = {
    lg: 'lg-regular-mono',
    md: 'md-regular-mono',
    sm: 'sm-regular-mono'
};
const SPINNER_SIZE_BY_SIZE = {
    lg: 'md',
    md: 'md',
    sm: 'sm'
};
let WuiButton = class WuiButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'lg';
        this.disabled = false;
        this.fullWidth = false;
        this.loading = false;
        this.variant = 'accent-primary';
    }
    render() {
        this.style.cssText = `
    --local-width: ${this.fullWidth ? '100%' : 'auto'};
     `;
        const textVariant = this.textVariant ?? TEXT_VARIANT_BY_SIZE[this.size];
        return (0,lit/* html */.qy) `
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${textVariant} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
    }
    loadingTemplate() {
        if (this.loading) {
            const size = SPINNER_SIZE_BY_SIZE[this.size];
            const color = this.variant === 'neutral-primary' || this.variant === 'accent-primary'
                ? 'invert'
                : 'primary';
            return (0,lit/* html */.qy) `<wui-loading-spinner color=${color} size=${size}></wui-loading-spinner>`;
        }
        return null;
    }
};
WuiButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_button_styles];
wui_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiButton.prototype, "size", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiButton.prototype, "disabled", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiButton.prototype, "fullWidth", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiButton.prototype, "loading", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiButton.prototype, "variant", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiButton.prototype, "textVariant", void 0);
WuiButton = wui_button_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-button')
], WuiButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js

//# sourceMappingURL=wui-button.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(975249);
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/styles.js

/* harmony default export */ const wui_flex_styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js
var wui_flex_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiFlex = class WuiFlex extends lit/* LitElement */.WF {
    render() {
        this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 3)};
      width: ${this.width};
    `;
        return (0,lit/* html */.qy) `<slot></slot>`;
    }
};
WuiFlex.styles = [ThemeUtil/* resetStyles */.W5, wui_flex_styles];
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexDirection", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexWrap", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexBasis", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexGrow", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexShrink", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "alignItems", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "justifyContent", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "columnGap", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "rowGap", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "gap", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "padding", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "margin", void 0);
wui_flex_decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "width", void 0);
WuiFlex = wui_flex_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-flex')
], WuiFlex);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js

//# sourceMappingURL=wui-flex.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js

//# sourceMappingURL=wui-icon.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-button/styles.js

/* harmony default export */ const wui_icon_button_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({ spacing }) => spacing[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({ tokens }) => tokens.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({ tokens }) => tokens.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({ tokens }) => tokens.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({ tokens }) => tokens.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-button/index.js
var wui_icon_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiIconButton = class WuiIconButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.icon = 'card';
        this.variant = 'primary';
        this.type = 'accent';
        this.size = 'md';
        this.iconSize = undefined;
        this.fullWidth = false;
        this.disabled = false;
    }
    render() {
        return (0,lit/* html */.qy) `<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,if_defined/* ifDefined */.J)(this.iconSize)}></wui-icon>
    </button>`;
    }
};
WuiIconButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_icon_button_styles];
wui_icon_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconButton.prototype, "icon", void 0);
wui_icon_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconButton.prototype, "variant", void 0);
wui_icon_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconButton.prototype, "type", void 0);
wui_icon_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconButton.prototype, "size", void 0);
wui_icon_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconButton.prototype, "iconSize", void 0);
wui_icon_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiIconButton.prototype, "fullWidth", void 0);
wui_icon_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiIconButton.prototype, "disabled", void 0);
WuiIconButton = wui_icon_button_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon-button')
], WuiIconButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-button.js

//# sourceMappingURL=wui-icon-button.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/styles.js

/* harmony default export */ const wui_icon_link_styles = ((0,ThemeHelperUtil/* css */.AH) `
  button {
    background-color: transparent;
    padding: ${({ spacing }) => spacing[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/index.js
var wui_icon_link_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiIconLink = class WuiIconLink extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.disabled = false;
        this.icon = 'copy';
        this.iconColor = 'default';
        this.variant = 'accent';
    }
    render() {
        const iconColors = {
            accent: 'accent-primary',
            primary: 'inverse',
            secondary: 'default'
        };
        return (0,lit/* html */.qy) `
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${iconColors[this.variant] || this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `;
    }
};
WuiIconLink.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_icon_link_styles];
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "size", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiIconLink.prototype, "disabled", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "icon", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "iconColor", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "variant", void 0);
WuiIconLink = wui_icon_link_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon-link')
], WuiIconLink);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-link.js

//# sourceMappingURL=wui-icon-link.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/styles.js

/* harmony default export */ const wui_image_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js
var wui_image_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiImage = class WuiImage extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.src = './path/to/image.jpg';
        this.alt = 'Image';
        this.size = undefined;
        this.boxed = false;
        this.rounded = false;
        this.fullSize = false;
    }
    render() {
        const getSize = {
            inherit: 'inherit',
            xxs: '2',
            xs: '3',
            sm: '4',
            md: '4',
            mdl: '5',
            lg: '5',
            xl: '6',
            xxl: '7',
            '3xl': '8',
            '4xl': '9',
            '5xl': '10'
        };
        this.style.cssText = `
      --local-width: ${this.size ? `var(--apkt-spacing-${getSize[this.size]});` : '100%'};
      --local-height: ${this.size ? `var(--apkt-spacing-${getSize[this.size]});` : '100%'};
      `;
        this.dataset['boxed'] = this.boxed ? 'true' : 'false';
        this.dataset['rounded'] = this.rounded ? 'true' : 'false';
        this.dataset['full'] = this.fullSize ? 'true' : 'false';
        this.dataset['icon'] = this.iconColor || 'inherit';
        if (this.icon) {
            return (0,lit/* html */.qy) `<wui-icon
        color=${this.iconColor || 'inherit'}
        name=${this.icon}
        size="lg"
      ></wui-icon> `;
        }
        if (this.logo) {
            return (0,lit/* html */.qy) `<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `;
        }
        return (0,lit/* html */.qy) `<img src=${(0,if_defined/* ifDefined */.J)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`;
    }
    handleImageError() {
        this.dispatchEvent(new CustomEvent('onLoadError', { bubbles: true, composed: true }));
    }
};
WuiImage.styles = [ThemeUtil/* resetStyles */.W5, wui_image_styles];
wui_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "src", void 0);
wui_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "logo", void 0);
wui_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "icon", void 0);
wui_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "iconColor", void 0);
wui_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "alt", void 0);
wui_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "size", void 0);
wui_image_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiImage.prototype, "boxed", void 0);
wui_image_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiImage.prototype, "rounded", void 0);
wui_image_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiImage.prototype, "fullSize", void 0);
WuiImage = wui_image_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-image')
], WuiImage);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-image.js

//# sourceMappingURL=wui-image.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-item/styles.js

/* harmony default export */ const wui_list_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing }) => spacing[3]};
    width: 100%;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    transition:
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      scale ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-item/index.js
var wui_list_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiListItem = class WuiListItem extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.type = 'primary';
        this.imageSrc = 'google';
        this.imageSize = undefined;
        this.loading = false;
        this.boxColor = 'foregroundPrimary';
        this.disabled = false;
        this.rightIcon = true;
        this.boxed = true;
        this.rounded = false;
        this.fullSize = false;
    }
    render() {
        this.dataset['rounded'] = this.rounded ? 'true' : 'false';
        this.dataset['type'] = this.type;
        return (0,lit/* html */.qy) `
      <button
        ?disabled=${this.loading ? true : Boolean(this.disabled)}
        data-loading=${this.loading}
        tabindex=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `;
    }
    templateLeftIcon() {
        if (this.icon) {
            return (0,lit/* html */.qy) `<wui-image
        icon=${this.icon}
        iconColor=${(0,if_defined/* ifDefined */.J)(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${(0,if_defined/* ifDefined */.J)(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`;
    }
    templateRightIcon() {
        if (!this.rightIcon) {
            return null;
        }
        if (this.loading) {
            return (0,lit/* html */.qy) `<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`;
        }
        return (0,lit/* html */.qy) `<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`;
    }
};
WuiListItem.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_list_item_styles];
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "type", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "imageSrc", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "imageSize", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "icon", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "iconColor", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "loading", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "tabIdx", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "boxColor", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "disabled", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "rightIcon", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "boxed", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "rounded", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "fullSize", void 0);
WuiListItem = wui_list_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-list-item')
], WuiListItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js

//# sourceMappingURL=wui-list-item.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js

//# sourceMappingURL=wui-loading-spinner.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkLg.js

const networkSvgLg = (0,lit/* svg */.JW) `<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;
//# sourceMappingURL=networkLg.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkMd.js

const networkSvgMd = (0,lit/* svg */.JW) `<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;
//# sourceMappingURL=networkMd.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkSm.js

const networkSvgSm = (0,lit/* svg */.JW) `
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;
//# sourceMappingURL=networkSm.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-image/styles.js

/* harmony default export */ const wui_network_image_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({ tokens }) => tokens.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-image/index.js
var wui_network_image_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let WuiNetworkImage = class WuiNetworkImage extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.name = 'uknown';
        this.networkImagesBySize = {
            sm: networkSvgSm,
            md: networkSvgMd,
            lg: networkSvgLg
        };
        this.selected = false;
        this.round = false;
    }
    render() {
        const getSize = {
            sm: '4',
            md: '6',
            lg: '10'
        };
        if (this.round) {
            this.dataset['round'] = 'true';
            this.style.cssText = `
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `;
        }
        else {
            this.style.cssText = `

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${getSize[this.size]});
    `;
        }
        return (0,lit/* html */.qy) `${this.templateVisual()} ${this.svgTemplate()} `;
    }
    svgTemplate() {
        if (this.round) {
            return null;
        }
        return this.networkImagesBySize[this.size];
    }
    templateVisual() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`;
    }
};
WuiNetworkImage.styles = [ThemeUtil/* resetStyles */.W5, wui_network_image_styles];
wui_network_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiNetworkImage.prototype, "size", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiNetworkImage.prototype, "name", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], WuiNetworkImage.prototype, "networkImagesBySize", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiNetworkImage.prototype, "imageSrc", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiNetworkImage.prototype, "selected", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiNetworkImage.prototype, "round", void 0);
WuiNetworkImage = wui_network_image_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-network-image')
], WuiNetworkImage);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-network-image.js

//# sourceMappingURL=wui-network-image.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-separator/styles.js

/* harmony default export */ const wui_separator_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({ tokens }) => tokens.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-separator/index.js
var wui_separator_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiSeparator = class WuiSeparator extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.text = '';
        this.bgColor = 'primary';
    }
    render() {
        this.dataset['bgColor'] = this.bgColor;
        return (0,lit/* html */.qy) `${this.template()}`;
    }
    template() {
        if (this.text) {
            return (0,lit/* html */.qy) `<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`;
        }
        return null;
    }
};
WuiSeparator.styles = [ThemeUtil/* resetStyles */.W5, wui_separator_styles];
wui_separator_decorate([
    (0,decorators/* property */.MZ)()
], WuiSeparator.prototype, "text", void 0);
wui_separator_decorate([
    (0,decorators/* property */.MZ)()
], WuiSeparator.prototype, "bgColor", void 0);
WuiSeparator = wui_separator_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-separator')
], WuiSeparator);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js

//# sourceMappingURL=wui-separator.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js

//# sourceMappingURL=wui-text.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/styles.js

/* harmony default export */ const wui_icon_box_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    padding: ${({ spacing }) => spacing[1]} !important;
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({ spacing }) => spacing[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({ tokens }) => tokens.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({ tokens }) => tokens.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({ tokens }) => tokens.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({ tokens }) => tokens.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({ tokens }) => tokens.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({ tokens }) => tokens.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js
var wui_icon_box_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiIconBox = class WuiIconBox extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.icon = 'copy';
        this.size = 'md';
        this.padding = '1';
        this.color = 'default';
    }
    render() {
        this.dataset['padding'] = this.padding;
        this.dataset['color'] = this.color;
        return (0,lit/* html */.qy) `
      <wui-icon size=${(0,if_defined/* ifDefined */.J)(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `;
    }
};
WuiIconBox.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_icon_box_styles];
wui_icon_box_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "icon", void 0);
wui_icon_box_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "size", void 0);
wui_icon_box_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "padding", void 0);
wui_icon_box_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "color", void 0);
WuiIconBox = wui_icon_box_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon-box')
], WuiIconBox);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-image/styles.js

/* harmony default export */ const wui_wallet_image_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    background-color: ${({ tokens }) => tokens.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({ colors }) => colors.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({ colors }) => colors.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon {
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  wui-icon[data-parent-size='sm'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='md'] {
    width: 32px;
    height: 32px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
    padding: 1px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-image/index.js
var wui_wallet_image_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiWalletImage = class WuiWalletImage extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.name = '';
        this.installed = false;
        this.badgeSize = 'xs';
    }
    render() {
        let borderRadius = '1';
        if (this.size === 'lg') {
            borderRadius = '4';
        }
        else if (this.size === 'md') {
            borderRadius = '2';
        }
        else if (this.size === 'sm') {
            borderRadius = '1';
        }
        this.style.cssText = `
       --local-border-radius: var(--apkt-borderRadius-${borderRadius});
   `;
        this.dataset['size'] = this.size;
        if (this.imageSrc) {
            this.dataset['image'] = 'true';
        }
        if (this.walletIcon) {
            this.dataset['walletIcon'] = this.walletIcon;
        }
        return (0,lit/* html */.qy) `
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `;
    }
    templateVisual() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`;
        }
        else if (this.walletIcon) {
            return (0,lit/* html */.qy) `<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`;
        }
        return (0,lit/* html */.qy) `<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`;
    }
};
WuiWalletImage.styles = [ThemeUtil/* resetStyles */.W5, wui_wallet_image_styles];
wui_wallet_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletImage.prototype, "size", void 0);
wui_wallet_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletImage.prototype, "name", void 0);
wui_wallet_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletImage.prototype, "imageSrc", void 0);
wui_wallet_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletImage.prototype, "walletIcon", void 0);
wui_wallet_image_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiWalletImage.prototype, "installed", void 0);
wui_wallet_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletImage.prototype, "badgeSize", void 0);
WuiWalletImage = wui_wallet_image_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-wallet-image')
], WuiWalletImage);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js

//# sourceMappingURL=wui-wallet-image.js.map
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla.mjs + 1 modules
var vanilla = __webpack_require__(552095);
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla/utils.mjs
var utils = __webpack_require__(427088);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js
var ParseUtil = __webpack_require__(975910);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js
var NumberUtil = __webpack_require__(566580);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/BalanceUtil.js + 2 modules
var BalanceUtil = __webpack_require__(382752);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js
var HelpersUtil = __webpack_require__(335306);
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/types/errors.js
const AppKitPayErrorCodes = {
    INVALID_PAYMENT_CONFIG: 'INVALID_PAYMENT_CONFIG',
    INVALID_RECIPIENT: 'INVALID_RECIPIENT',
    INVALID_ASSET: 'INVALID_ASSET',
    INVALID_AMOUNT: 'INVALID_AMOUNT',
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
    UNABLE_TO_INITIATE_PAYMENT: 'UNABLE_TO_INITIATE_PAYMENT',
    INVALID_CHAIN_NAMESPACE: 'INVALID_CHAIN_NAMESPACE',
    GENERIC_PAYMENT_ERROR: 'GENERIC_PAYMENT_ERROR',
    UNABLE_TO_GET_EXCHANGES: 'UNABLE_TO_GET_EXCHANGES',
    ASSET_NOT_SUPPORTED: 'ASSET_NOT_SUPPORTED',
    UNABLE_TO_GET_PAY_URL: 'UNABLE_TO_GET_PAY_URL',
    UNABLE_TO_GET_BUY_STATUS: 'UNABLE_TO_GET_BUY_STATUS',
    UNABLE_TO_GET_TOKEN_BALANCES: 'UNABLE_TO_GET_TOKEN_BALANCES',
    UNABLE_TO_GET_QUOTE: 'UNABLE_TO_GET_QUOTE',
    UNABLE_TO_GET_QUOTE_STATUS: 'UNABLE_TO_GET_QUOTE_STATUS',
    INVALID_RECIPIENT_ADDRESS_FOR_ASSET: 'INVALID_RECIPIENT_ADDRESS_FOR_ASSET'
};
const AppKitPayErrorMessages = {
    [AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG]: 'Invalid payment configuration',
    [AppKitPayErrorCodes.INVALID_RECIPIENT]: 'Invalid recipient address',
    [AppKitPayErrorCodes.INVALID_ASSET]: 'Invalid asset specified',
    [AppKitPayErrorCodes.INVALID_AMOUNT]: 'Invalid payment amount',
    [AppKitPayErrorCodes.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]: 'Invalid recipient address for the asset selected',
    [AppKitPayErrorCodes.UNKNOWN_ERROR]: 'Unknown payment error occurred',
    [AppKitPayErrorCodes.UNABLE_TO_INITIATE_PAYMENT]: 'Unable to initiate payment',
    [AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE]: 'Invalid chain namespace',
    [AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR]: 'Unable to process payment',
    [AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES]: 'Unable to get exchanges',
    [AppKitPayErrorCodes.ASSET_NOT_SUPPORTED]: 'Asset not supported by the selected exchange',
    [AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL]: 'Unable to get payment URL',
    [AppKitPayErrorCodes.UNABLE_TO_GET_BUY_STATUS]: 'Unable to get buy status',
    [AppKitPayErrorCodes.UNABLE_TO_GET_TOKEN_BALANCES]: 'Unable to get token balances',
    [AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE]: 'Unable to get quote. Please choose a different token',
    [AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE_STATUS]: 'Unable to get quote status'
};
class AppKitPayError extends Error {
    get message() {
        return AppKitPayErrorMessages[this.code];
    }
    constructor(code, details) {
        super(AppKitPayErrorMessages[code]);
        this.name = 'AppKitPayError';
        this.code = code;
        this.details = details;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AppKitPayError);
        }
    }
}
function createAppKitPayError(code, details) {
    const errorCode = code || AppKitPayErrorCodes.UNKNOWN_ERROR;
    return new AppKitPayError(errorCode, details);
}
//# sourceMappingURL=errors.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/FetchUtil.js
var FetchUtil = __webpack_require__(25905);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/utils/ConstantsUtil.js
const API_URL = 'https://rpc.walletconnect.org/v1/json-rpc';
const REOWN_TEST_EXCHANGE_ID = 'reown_test';
//# sourceMappingURL=ConstantsUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ContractUtil.js + 3 modules
var ContractUtil = __webpack_require__(653142);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ProviderController.js
var ProviderController = __webpack_require__(870424);
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/utils/PaymentUtil.js
/* unused harmony import specifier */ var PaymentUtil_ChainController;
/* unused harmony import specifier */ var PaymentUtil_CoreHelperUtil;
/* unused harmony import specifier */ var PaymentUtil_AppKitPayError;
/* unused harmony import specifier */ var PaymentUtil_AppKitPayErrorCodes;





async function ensureCorrectNetwork(options) {
    const { paymentAssetNetwork, activeCaipNetwork, approvedCaipNetworkIds, requestedCaipNetworks } = options;
    const sortedNetworks = PaymentUtil_CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    const assetCaipNetwork = sortedNetworks.find(network => network.caipNetworkId === paymentAssetNetwork);
    if (!assetCaipNetwork) {
        throw new PaymentUtil_AppKitPayError(PaymentUtil_AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG);
    }
    if (assetCaipNetwork.caipNetworkId === activeCaipNetwork.caipNetworkId) {
        return;
    }
    const isSupportingAllNetworks = PaymentUtil_ChainController.getNetworkProp('supportsAllNetworks', assetCaipNetwork.chainNamespace);
    const isSwitchAllowed = approvedCaipNetworkIds?.includes(assetCaipNetwork.caipNetworkId) || isSupportingAllNetworks;
    if (!isSwitchAllowed) {
        throw new PaymentUtil_AppKitPayError(PaymentUtil_AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG);
    }
    try {
        await PaymentUtil_ChainController.switchActiveNetwork(assetCaipNetwork);
    }
    catch (error) {
        throw new PaymentUtil_AppKitPayError(PaymentUtil_AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, error);
    }
}
function ensureCorrectAddress() {
    const { chainNamespace } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(PayController.state.paymentAsset.network);
    const isAddress = CoreHelperUtil/* CoreHelperUtil */.w.isAddress(PayController.state.recipient, chainNamespace);
    if (!isAddress) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_RECIPIENT_ADDRESS_FOR_ASSET, `Provide valid recipient address for namespace "${chainNamespace}"`);
    }
}
async function processEvmNativePayment(paymentAsset, chainNamespace, params) {
    if (chainNamespace !== ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE);
    }
    if (!params.fromAddress) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, 'fromAddress is required for native EVM payments.');
    }
    const amountValue = typeof params.amount === 'string' ? parseFloat(params.amount) : params.amount;
    if (isNaN(amountValue)) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG);
    }
    const decimals = paymentAsset.metadata?.decimals ?? 18;
    const amountBigInt = ConnectionController/* ConnectionController */.x.parseUnits(amountValue.toString(), decimals);
    if (typeof amountBigInt !== 'bigint') {
        throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR);
    }
    const txResponse = await ConnectionController/* ConnectionController */.x.sendTransaction({
        chainNamespace,
        to: params.recipient,
        address: params.fromAddress,
        value: amountBigInt,
        data: '0x'
    });
    return txResponse ?? undefined;
}
async function processEvmErc20Payment(paymentAsset, params) {
    if (!params.fromAddress) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, 'fromAddress is required for ERC20 EVM payments.');
    }
    const tokenAddress = paymentAsset.asset;
    const recipientAddress = params.recipient;
    const decimals = Number(paymentAsset.metadata.decimals);
    const amountBigInt = ConnectionController/* ConnectionController */.x.parseUnits(params.amount.toString(), decimals);
    if (amountBigInt === undefined) {
        throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR);
    }
    const txResponse = await ConnectionController/* ConnectionController */.x.writeContract({
        fromAddress: params.fromAddress,
        tokenAddress,
        args: [recipientAddress, amountBigInt],
        method: 'transfer',
        abi: ContractUtil/* ContractUtil */.v.getERC20Abi(tokenAddress),
        chainNamespace: ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM
    });
    return txResponse ?? undefined;
}
async function processSolanaPayment(chainNamespace, params) {
    if (chainNamespace !== ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE);
    }
    if (!params.fromAddress) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, 'fromAddress is required for Solana payments.');
    }
    const amountValue = typeof params.amount === 'string' ? parseFloat(params.amount) : params.amount;
    if (isNaN(amountValue) || amountValue <= 0) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, 'Invalid payment amount.');
    }
    try {
        const provider = ProviderController/* ProviderController */.G.getProvider(chainNamespace);
        if (!provider) {
            throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, 'No Solana provider available.');
        }
        const txResponse = await ConnectionController/* ConnectionController */.x.sendTransaction({
            chainNamespace: ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA,
            to: params.recipient,
            value: amountValue,
            tokenMint: params.tokenMint
        });
        if (!txResponse) {
            throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, 'Transaction failed.');
        }
        return txResponse;
    }
    catch (error) {
        if (error instanceof AppKitPayError) {
            throw error;
        }
        throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, `Solana payment failed: ${error}`);
    }
}
async function getDirectTransferQuote({ sourceToken, toToken, amount, recipient }) {
    const originalAmount = ConnectionController/* ConnectionController */.x.parseUnits(amount, sourceToken.metadata.decimals);
    const destinationAmount = ConnectionController/* ConnectionController */.x.parseUnits(amount, toToken.metadata.decimals);
    return Promise.resolve({
        type: DIRECT_TRANSFER_REQUEST_ID,
        origin: {
            amount: originalAmount?.toString() ?? '0',
            currency: sourceToken
        },
        destination: {
            amount: destinationAmount?.toString() ?? '0',
            currency: toToken
        },
        fees: [
            {
                id: 'service',
                label: 'Service Fee',
                amount: '0',
                currency: toToken
            }
        ],
        steps: [
            {
                requestId: DIRECT_TRANSFER_REQUEST_ID,
                type: 'deposit',
                deposit: {
                    amount: originalAmount?.toString() ?? '0',
                    currency: sourceToken.asset,
                    receiver: recipient
                }
            }
        ],
        timeInSeconds: 6
    });
}
function getTransferStep(quote) {
    if (!quote) {
        return null;
    }
    const step = quote.steps[0];
    if (!step || step.type !== DIRECT_TRANSFER_DEPOSIT_TYPE) {
        return null;
    }
    return step;
}
function getTransactionsSteps(quote, completedTransactionsCount = 0) {
    if (!quote) {
        return [];
    }
    const steps = quote.steps.filter(step => step.type === DIRECT_TRANSFER_TRANSACTION_TYPE);
    const stepsToShow = steps.filter((_, idx) => {
        const incrementedIdx = idx + 1;
        return incrementedIdx > completedTransactionsCount;
    });
    return steps.length > 0 && steps.length < 3 ? stepsToShow : [];
}
//# sourceMappingURL=PaymentUtil.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/utils/ApiUtil.js





const api = new FetchUtil/* FetchUtil */.Z({ baseUrl: CoreHelperUtil/* CoreHelperUtil */.w.getApiUrl(), clientId: null });
class JsonRpcError extends Error {
}
function getApiUrl() {
    const projectId = OptionsController/* OptionsController */.H.getSnapshot().projectId;
    return `${API_URL}?projectId=${projectId}`;
}
function getSdkProperties() {
    const { projectId, sdkType, sdkVersion } = OptionsController/* OptionsController */.H.state;
    return {
        projectId,
        st: sdkType || 'appkit',
        sv: sdkVersion || 'html-wagmi-4.2.2'
    };
}
async function sendRequest(method, params) {
    const url = getApiUrl();
    const { sdkType: st, sdkVersion: sv, projectId } = OptionsController/* OptionsController */.H.getSnapshot();
    const requestBody = {
        jsonrpc: '2.0',
        id: 1,
        method,
        params: {
            ...(params || {}),
            st,
            sv,
            projectId
        }
    };
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
    });
    const json = await response.json();
    if (json.error) {
        throw new JsonRpcError(json.error.message);
    }
    return json;
}
async function getExchanges(params) {
    const response = await sendRequest('reown_getExchanges', params);
    return response.result;
}
async function getPayUrl(params) {
    const response = await sendRequest('reown_getExchangePayUrl', params);
    return response.result;
}
async function getBuyStatus(params) {
    const response = await sendRequest('reown_getExchangeBuyStatus', params);
    return response.result;
}
async function getTransfersQuote(params) {
    const amount = NumberUtil/* NumberUtil */.S.bigNumber(params.amount)
        .times(10 ** params.toToken.metadata.decimals)
        .toString();
    const { chainId: originChainId, chainNamespace: originChainNamespace } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(params.sourceToken.network);
    const { chainId: destinationChainId, chainNamespace: destinationChainNamespace } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(params.toToken.network);
    const originCurrency = params.sourceToken.asset === 'native'
        ? (0,ChainControllerUtil/* getNativeTokenAddress */.NH)(originChainNamespace)
        : params.sourceToken.asset;
    const destinationCurrency = params.toToken.asset === 'native'
        ? (0,ChainControllerUtil/* getNativeTokenAddress */.NH)(destinationChainNamespace)
        : params.toToken.asset;
    const response = await api.post({
        path: '/appkit/v1/transfers/quote',
        body: {
            user: params.address,
            originChainId: originChainId.toString(),
            originCurrency,
            destinationChainId: destinationChainId.toString(),
            destinationCurrency,
            recipient: params.recipient,
            amount
        },
        params: getSdkProperties()
    });
    return response;
}
async function getQuote(params) {
    const isSameChain = HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(params.sourceToken.network, params.toToken.network);
    const isSameAsset = HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(params.sourceToken.asset, params.toToken.asset);
    if (isSameChain && isSameAsset) {
        return getDirectTransferQuote(params);
    }
    return getTransfersQuote(params);
}
async function getQuoteStatus(params) {
    const response = await api.get({
        path: '/appkit/v1/transfers/status',
        params: {
            requestId: params.requestId,
            ...getSdkProperties()
        }
    });
    return response;
}
async function getAssetsForExchange(exchangeId) {
    const response = await api.get({
        path: `/appkit/v1/transfers/assets/exchanges/${exchangeId}`,
        params: getSdkProperties()
    });
    return response;
}
//# sourceMappingURL=ApiUtil.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/utils/AssetUtil.js



const SUPPORT_PAY_WITH_WALLET_CHAIN_NAMESPACES = ['eip155', 'solana'];
const CHAIN_ASSET_INFO_MAP = {
    eip155: {
        native: { assetNamespace: 'slip44', assetReference: '60' },
        defaultTokenNamespace: 'erc20'
    },
    solana: {
        native: { assetNamespace: 'slip44', assetReference: '501' },
        defaultTokenNamespace: 'token'
    }
};
const EVM_NATIVE_SLIP44_OVERRIDES = {
    '56': '714',
    '204': '714'
};
function formatCaip19Asset(caipNetworkId, asset) {
    const { chainNamespace, chainId } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(caipNetworkId);
    const chainInfo = CHAIN_ASSET_INFO_MAP[chainNamespace];
    if (!chainInfo) {
        throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${chainNamespace}`);
    }
    let assetNamespace = chainInfo.native.assetNamespace;
    let assetReference = chainInfo.native.assetReference;
    if (asset !== 'native') {
        assetNamespace = chainInfo.defaultTokenNamespace;
        assetReference = asset;
    }
    else if (chainNamespace === 'eip155' && EVM_NATIVE_SLIP44_OVERRIDES[chainId]) {
        assetReference = EVM_NATIVE_SLIP44_OVERRIDES[chainId];
    }
    const networkPart = `${chainNamespace}:${chainId}`;
    return `${networkPart}/${assetNamespace}:${assetReference}`;
}
function isPayWithWalletSupported(networkId) {
    const { chainNamespace } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(networkId);
    return SUPPORT_PAY_WITH_WALLET_CHAIN_NAMESPACES.includes(chainNamespace);
}
function formatBalanceToPaymentAsset(balance) {
    const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
    const targetNetwork = allNetworks.find(net => net.caipNetworkId === balance.chainId);
    let asset = balance.address;
    if (!targetNetwork) {
        throw new Error(`Target network not found for balance chainId "${balance.chainId}"`);
    }
    if (HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(balance.symbol, targetNetwork.nativeCurrency.symbol)) {
        asset = 'native';
    }
    else if (CoreHelperUtil/* CoreHelperUtil */.w.isCaipAddress(asset)) {
        const { address } = ParseUtil/* ParseUtil */.C.parseCaipAddress(asset);
        asset = address;
    }
    else if (!asset) {
        throw new Error(`Balance address not found for balance symbol "${balance.symbol}"`);
    }
    return {
        network: targetNetwork.caipNetworkId,
        asset,
        metadata: {
            name: balance.name,
            symbol: balance.symbol,
            decimals: Number(balance.quantity.decimals),
            logoURI: balance.iconUrl
        },
        amount: balance.quantity.numeric
    };
}
function formatPaymentAssetToBalance(paymentAsset) {
    return {
        chainId: paymentAsset.network,
        address: `${paymentAsset.network}:${paymentAsset.asset}`,
        symbol: paymentAsset.metadata.symbol,
        name: paymentAsset.metadata.name,
        iconUrl: paymentAsset.metadata.logoURI || '',
        price: 0,
        quantity: {
            numeric: '0',
            decimals: paymentAsset.metadata.decimals.toString()
        }
    };
}
function formatAmount(amount) {
    const num = NumberUtil/* NumberUtil */.S.bigNumber(amount, { safe: true });
    if (num.lt(0.001)) {
        return '<0.001';
    }
    return num.round(4).toString();
}
function isTestnetAsset(paymentAsset) {
    const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
    const targetNetwork = allNetworks.find(net => net.caipNetworkId === paymentAsset.network);
    if (!targetNetwork) {
        return false;
    }
    return Boolean(targetNetwork.testnet);
}
//# sourceMappingURL=AssetUtil.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/controllers/PayController.js











const DEFAULT_PAGE = 0;
const DEFAULT_PAYMENT_ID = 'unknown';
const DIRECT_TRANSFER_REQUEST_ID = 'direct-transfer';
const DIRECT_TRANSFER_DEPOSIT_TYPE = 'deposit';
const DIRECT_TRANSFER_TRANSACTION_TYPE = 'transaction';
const state = (0,vanilla/* proxy */.BX)({
    paymentAsset: {
        network: 'eip155:1',
        asset: '0x0',
        metadata: {
            name: '0x0',
            symbol: '0x0',
            decimals: 0
        }
    },
    recipient: '0x0',
    amount: 0,
    isConfigured: false,
    error: null,
    isPaymentInProgress: false,
    exchanges: [],
    isLoading: false,
    openInNewTab: true,
    redirectUrl: undefined,
    payWithExchange: undefined,
    currentPayment: undefined,
    analyticsSet: false,
    paymentId: undefined,
    choice: 'pay',
    tokenBalances: {
        [ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM]: [],
        [ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA]: []
    },
    isFetchingTokenBalances: false,
    selectedPaymentAsset: null,
    quote: undefined,
    quoteStatus: 'waiting',
    quoteError: null,
    isFetchingQuote: false,
    selectedExchange: undefined,
    exchangeUrlForQuote: undefined,
    requestId: undefined
});
const PayController = {
    state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(state, () => callback(state));
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(state, key, callback);
    },
    async handleOpenPay(options) {
        this.resetState();
        this.setPaymentConfig(options);
        this.initializeAnalytics();
        ensureCorrectAddress();
        await this.prepareTokenLogo();
        state.isConfigured = true;
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'PAY_MODAL_OPEN',
            properties: {
                exchanges: state.exchanges,
                configuration: {
                    network: state.paymentAsset.network,
                    asset: state.paymentAsset.asset,
                    recipient: state.recipient,
                    amount: state.amount
                }
            }
        });
        await ModalController/* ModalController */.W.open({
            view: 'Pay'
        });
    },
    resetState() {
        state.paymentAsset = {
            network: 'eip155:1',
            asset: '0x0',
            metadata: { name: '0x0', symbol: '0x0', decimals: 0 }
        };
        state.recipient = '0x0';
        state.amount = 0;
        state.isConfigured = false;
        state.error = null;
        state.isPaymentInProgress = false;
        state.isLoading = false;
        state.currentPayment = undefined;
        state.selectedExchange = undefined;
        state.exchangeUrlForQuote = undefined;
        state.requestId = undefined;
    },
    resetQuoteState() {
        state.quote = undefined;
        state.quoteStatus = 'waiting';
        state.quoteError = null;
        state.isFetchingQuote = false;
        state.requestId = undefined;
    },
    setPaymentConfig(config) {
        if (!config.paymentAsset) {
            throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG);
        }
        try {
            state.choice = config.choice ?? 'pay';
            state.paymentAsset = config.paymentAsset;
            state.recipient = config.recipient;
            state.amount = config.amount;
            state.openInNewTab = config.openInNewTab ?? true;
            state.redirectUrl = config.redirectUrl;
            state.payWithExchange = config.payWithExchange;
            state.error = null;
        }
        catch (error) {
            throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, error.message);
        }
    },
    setSelectedPaymentAsset(paymentAsset) {
        state.selectedPaymentAsset = paymentAsset;
    },
    setSelectedExchange(exchange) {
        state.selectedExchange = exchange;
    },
    setRequestId(requestId) {
        state.requestId = requestId;
    },
    setPaymentInProgress(isPaymentInProgress) {
        state.isPaymentInProgress = isPaymentInProgress;
    },
    getPaymentAsset() {
        return state.paymentAsset;
    },
    getExchanges() {
        return state.exchanges;
    },
    async fetchExchanges() {
        try {
            state.isLoading = true;
            const response = await getExchanges({
                page: DEFAULT_PAGE
            });
            state.exchanges = response.exchanges.slice(0, 2);
        }
        catch (error) {
            SnackController/* SnackController */.P.showError(AppKitPayErrorMessages.UNABLE_TO_GET_EXCHANGES);
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES);
        }
        finally {
            state.isLoading = false;
        }
    },
    async getAvailableExchanges(params) {
        try {
            const asset = params?.asset && params?.network
                ? formatCaip19Asset(params.network, params.asset)
                : undefined;
            const response = await getExchanges({
                page: params?.page ?? DEFAULT_PAGE,
                asset,
                amount: params?.amount?.toString()
            });
            return response;
        }
        catch (error) {
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES);
        }
    },
    async getPayUrl(exchangeId, params, headless = false) {
        try {
            const numericAmount = Number(params.amount);
            const response = await getPayUrl({
                exchangeId,
                asset: formatCaip19Asset(params.network, params.asset),
                amount: numericAmount.toString(),
                recipient: `${params.network}:${params.recipient}`
            });
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'PAY_EXCHANGE_SELECTED',
                properties: {
                    source: 'pay',
                    exchange: {
                        id: exchangeId
                    },
                    configuration: {
                        network: params.network,
                        asset: params.asset,
                        recipient: params.recipient,
                        amount: numericAmount
                    },
                    currentPayment: {
                        type: 'exchange',
                        exchangeId
                    },
                    headless
                }
            });
            if (headless) {
                this.initiatePayment();
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'PAY_INITIATED',
                    properties: {
                        source: 'pay',
                        paymentId: state.paymentId || DEFAULT_PAYMENT_ID,
                        configuration: {
                            network: params.network,
                            asset: params.asset,
                            recipient: params.recipient,
                            amount: numericAmount
                        },
                        currentPayment: {
                            type: 'exchange',
                            exchangeId
                        }
                    }
                });
            }
            return response;
        }
        catch (error) {
            if (error instanceof Error && error.message.includes('is not supported')) {
                throw new AppKitPayError(AppKitPayErrorCodes.ASSET_NOT_SUPPORTED);
            }
            throw new Error(error.message);
        }
    },
    async generateExchangeUrlForQuote({ exchangeId, paymentAsset, amount, recipient }) {
        const response = await getPayUrl({
            exchangeId,
            asset: formatCaip19Asset(paymentAsset.network, paymentAsset.asset),
            amount: amount.toString(),
            recipient
        });
        state.exchangeSessionId = response.sessionId;
        state.exchangeUrlForQuote = response.url;
    },
    async openPayUrl(openParams, params, headless = false) {
        try {
            const payUrl = await this.getPayUrl(openParams.exchangeId, params, headless);
            if (!payUrl) {
                throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL);
            }
            const shouldOpenInNewTab = openParams.openInNewTab ?? true;
            const target = shouldOpenInNewTab ? '_blank' : '_self';
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(payUrl.url, target);
            return payUrl;
        }
        catch (error) {
            if (error instanceof AppKitPayError) {
                state.error = error.message;
            }
            else {
                state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
            }
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL);
        }
    },
    async onTransfer({ chainNamespace, fromAddress, toAddress, amount, paymentAsset }) {
        state.currentPayment = {
            type: 'wallet',
            status: 'IN_PROGRESS'
        };
        if (state.isPaymentInProgress) {
            return;
        }
        try {
            this.initiatePayment();
            const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
            const targetNetwork = allNetworks.find(net => net.caipNetworkId === paymentAsset.network);
            if (!targetNetwork) {
                throw new Error('Target network not found');
            }
            const caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
            if (!HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(caipNetwork?.caipNetworkId, targetNetwork.caipNetworkId)) {
                await ChainController/* ChainController */.W.switchActiveNetwork(targetNetwork);
            }
            switch (chainNamespace) {
                case ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM:
                    if (paymentAsset.asset === 'native') {
                        state.currentPayment.result = await processEvmNativePayment(paymentAsset, chainNamespace, {
                            recipient: toAddress,
                            amount,
                            fromAddress: fromAddress
                        });
                    }
                    if (paymentAsset.asset.startsWith('0x')) {
                        state.currentPayment.result = await processEvmErc20Payment(paymentAsset, {
                            recipient: toAddress,
                            amount,
                            fromAddress: fromAddress
                        });
                    }
                    state.currentPayment.status = 'SUCCESS';
                    break;
                case ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA:
                    state.currentPayment.result = await processSolanaPayment(chainNamespace, {
                        recipient: toAddress,
                        amount,
                        fromAddress,
                        tokenMint: paymentAsset.asset === 'native' ? undefined : paymentAsset.asset
                    });
                    state.currentPayment.status = 'SUCCESS';
                    break;
                default:
                    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE);
            }
        }
        catch (error) {
            if (error instanceof AppKitPayError) {
                state.error = error.message;
            }
            else {
                state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
            }
            state.currentPayment.status = 'FAILED';
            SnackController/* SnackController */.P.showError(state.error);
            throw error;
        }
        finally {
            state.isPaymentInProgress = false;
        }
    },
    async onSendTransaction(params) {
        try {
            const { namespace, transactionStep } = params;
            PayController.initiatePayment();
            const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
            const targetNetwork = allNetworks.find(net => net.caipNetworkId === state.paymentAsset?.network);
            if (!targetNetwork) {
                throw new Error('Target network not found');
            }
            const caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
            if (!HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(caipNetwork?.caipNetworkId, targetNetwork.caipNetworkId)) {
                await ChainController/* ChainController */.W.switchActiveNetwork(targetNetwork);
            }
            if (namespace === ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM) {
                const { from, to, data, value } = transactionStep.transaction;
                await ConnectionController/* ConnectionController */.x.sendTransaction({
                    address: from,
                    to,
                    data,
                    value: BigInt(value),
                    chainNamespace: namespace
                });
            }
            else if (namespace === ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA) {
                const { instructions } = transactionStep.transaction;
                await ConnectionController/* ConnectionController */.x.writeSolanaTransaction({
                    instructions
                });
            }
        }
        catch (error) {
            if (error instanceof AppKitPayError) {
                state.error = error.message;
            }
            else {
                state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
            }
            SnackController/* SnackController */.P.showError(state.error);
            throw error;
        }
        finally {
            state.isPaymentInProgress = false;
        }
    },
    getExchangeById(exchangeId) {
        return state.exchanges.find(exchange => exchange.id === exchangeId);
    },
    validatePayConfig(config) {
        const { paymentAsset, recipient, amount } = config;
        if (!paymentAsset) {
            throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG);
        }
        if (!recipient) {
            throw new AppKitPayError(AppKitPayErrorCodes.INVALID_RECIPIENT);
        }
        if (!paymentAsset.asset) {
            throw new AppKitPayError(AppKitPayErrorCodes.INVALID_ASSET);
        }
        if (amount === undefined || amount === null || amount <= 0) {
            throw new AppKitPayError(AppKitPayErrorCodes.INVALID_AMOUNT);
        }
    },
    async handlePayWithExchange(exchangeId) {
        try {
            state.currentPayment = {
                type: 'exchange',
                exchangeId
            };
            const { network, asset } = state.paymentAsset;
            const payUrlParams = {
                network,
                asset,
                amount: state.amount,
                recipient: state.recipient
            };
            const payUrl = await this.getPayUrl(exchangeId, payUrlParams);
            if (!payUrl) {
                throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_INITIATE_PAYMENT);
            }
            state.currentPayment.sessionId = payUrl.sessionId;
            state.currentPayment.status = 'IN_PROGRESS';
            state.currentPayment.exchangeId = exchangeId;
            this.initiatePayment();
            return {
                url: payUrl.url,
                openInNewTab: state.openInNewTab
            };
        }
        catch (error) {
            if (error instanceof AppKitPayError) {
                state.error = error.message;
            }
            else {
                state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
            }
            state.isPaymentInProgress = false;
            SnackController/* SnackController */.P.showError(state.error);
            return null;
        }
    },
    async getBuyStatus(exchangeId, sessionId) {
        try {
            const status = await getBuyStatus({ sessionId, exchangeId });
            if (status.status === 'SUCCESS' || status.status === 'FAILED') {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: status.status === 'SUCCESS' ? 'PAY_SUCCESS' : 'PAY_ERROR',
                    properties: {
                        message: status.status === 'FAILED' ? CoreHelperUtil/* CoreHelperUtil */.w.parseError(state.error) : undefined,
                        source: 'pay',
                        paymentId: state.paymentId || DEFAULT_PAYMENT_ID,
                        configuration: {
                            network: state.paymentAsset.network,
                            asset: state.paymentAsset.asset,
                            recipient: state.recipient,
                            amount: state.amount
                        },
                        currentPayment: {
                            type: 'exchange',
                            exchangeId: state.currentPayment?.exchangeId,
                            sessionId: state.currentPayment?.sessionId,
                            result: status.txHash
                        }
                    }
                });
            }
            return status;
        }
        catch (error) {
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_BUY_STATUS);
        }
    },
    async fetchTokensFromEOA({ caipAddress, caipNetwork, namespace }) {
        if (!caipAddress) {
            return [];
        }
        const { address } = ParseUtil/* ParseUtil */.C.parseCaipAddress(caipAddress);
        let overideCaipNetwork = caipNetwork;
        if (namespace === ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM) {
            overideCaipNetwork = undefined;
        }
        const balances = await BalanceUtil/* BalanceUtil */.Z.getMyTokensWithBalance({
            address,
            caipNetwork: overideCaipNetwork
        });
        return balances;
    },
    async fetchTokensFromExchange() {
        if (!state.selectedExchange) {
            return [];
        }
        const assets = await getAssetsForExchange(state.selectedExchange.id);
        const allAssets = Object.values(assets.assets).flat();
        const balanceWithImages = await Promise.all(allAssets.map(async (token) => {
            const balance = formatPaymentAssetToBalance(token);
            const { chainNamespace } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(balance.chainId);
            let address = balance.address;
            if (CoreHelperUtil/* CoreHelperUtil */.w.isCaipAddress(address)) {
                const { address: parsedAddress } = ParseUtil/* ParseUtil */.C.parseCaipAddress(address);
                address = parsedAddress;
            }
            const image = await AssetUtil/* AssetUtil */.$.getImageByToken(address ?? '', chainNamespace).catch(() => undefined);
            balance.iconUrl = image ?? '';
            return balance;
        }));
        return balanceWithImages;
    },
    async fetchTokens({ caipAddress, caipNetwork, namespace }) {
        try {
            state.isFetchingTokenBalances = true;
            const isUsingExchange = Boolean(state.selectedExchange);
            const balancesFnPromise = isUsingExchange
                ? this.fetchTokensFromExchange()
                : this.fetchTokensFromEOA({ caipAddress, caipNetwork, namespace });
            const balances = await balancesFnPromise;
            state.tokenBalances = { ...state.tokenBalances, [namespace]: balances };
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Unable to get token balances';
            SnackController/* SnackController */.P.showError(message);
        }
        finally {
            state.isFetchingTokenBalances = false;
        }
    },
    async fetchQuote({ amount, address, sourceToken, toToken, recipient }) {
        try {
            PayController.resetQuoteState();
            state.isFetchingQuote = true;
            const quote = await getQuote({
                amount,
                address: state.selectedExchange ? undefined : address,
                sourceToken,
                toToken,
                recipient
            });
            if (state.selectedExchange) {
                const transferStep = getTransferStep(quote);
                if (transferStep) {
                    const caipDepositAddress = `${sourceToken.network}:${transferStep.deposit.receiver}`;
                    const depositAmount = NumberUtil/* NumberUtil */.S.formatNumber(transferStep.deposit.amount, {
                        decimals: sourceToken.metadata.decimals ?? 0,
                        round: 8
                    });
                    await PayController.generateExchangeUrlForQuote({
                        exchangeId: state.selectedExchange.id,
                        paymentAsset: sourceToken,
                        amount: depositAmount.toString(),
                        recipient: caipDepositAddress
                    });
                }
            }
            state.quote = quote;
        }
        catch (err) {
            let errMessage = AppKitPayErrorMessages.UNABLE_TO_GET_QUOTE;
            if (err instanceof Error && err.cause && err.cause instanceof Response) {
                try {
                    const errorData = await err.cause.json();
                    if (errorData.error && typeof errorData.error === 'string') {
                        errMessage = errorData.error;
                    }
                }
                catch {
                }
            }
            state.quoteError = errMessage;
            SnackController/* SnackController */.P.showError(errMessage);
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE);
        }
        finally {
            state.isFetchingQuote = false;
        }
    },
    async fetchQuoteStatus({ requestId }) {
        try {
            if (requestId === DIRECT_TRANSFER_REQUEST_ID) {
                const selectedExchange = state.selectedExchange;
                const sessionId = state.exchangeSessionId;
                if (selectedExchange && sessionId) {
                    const status = await this.getBuyStatus(selectedExchange.id, sessionId);
                    switch (status.status) {
                        case 'IN_PROGRESS':
                            state.quoteStatus = 'waiting';
                            break;
                        case 'SUCCESS':
                            state.quoteStatus = 'success';
                            state.isPaymentInProgress = false;
                            break;
                        case 'FAILED':
                            state.quoteStatus = 'failure';
                            state.isPaymentInProgress = false;
                            break;
                        case 'UNKNOWN':
                            state.quoteStatus = 'waiting';
                            break;
                        default:
                            state.quoteStatus = 'waiting';
                            break;
                    }
                    return;
                }
                state.quoteStatus = 'success';
                return;
            }
            const { status } = await getQuoteStatus({ requestId });
            state.quoteStatus = status;
        }
        catch {
            state.quoteStatus = 'failure';
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE_STATUS);
        }
    },
    initiatePayment() {
        state.isPaymentInProgress = true;
        state.paymentId = crypto.randomUUID();
    },
    initializeAnalytics() {
        if (state.analyticsSet) {
            return;
        }
        state.analyticsSet = true;
        this.subscribeKey('isPaymentInProgress', _ => {
            if (state.currentPayment?.status && state.currentPayment.status !== 'UNKNOWN') {
                const eventType = {
                    IN_PROGRESS: 'PAY_INITIATED',
                    SUCCESS: 'PAY_SUCCESS',
                    FAILED: 'PAY_ERROR'
                }[state.currentPayment.status];
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: eventType,
                    properties: {
                        message: state.currentPayment.status === 'FAILED'
                            ? CoreHelperUtil/* CoreHelperUtil */.w.parseError(state.error)
                            : undefined,
                        source: 'pay',
                        paymentId: state.paymentId || DEFAULT_PAYMENT_ID,
                        configuration: {
                            network: state.paymentAsset.network,
                            asset: state.paymentAsset.asset,
                            recipient: state.recipient,
                            amount: state.amount
                        },
                        currentPayment: {
                            type: state.currentPayment.type,
                            exchangeId: state.currentPayment.exchangeId,
                            sessionId: state.currentPayment.sessionId,
                            result: state.currentPayment.result
                        }
                    }
                });
            }
        });
    },
    async prepareTokenLogo() {
        if (!state.paymentAsset.metadata.logoURI) {
            try {
                const { chainNamespace } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(state.paymentAsset.network);
                const imageUrl = await AssetUtil/* AssetUtil */.$.getImageByToken(state.paymentAsset.asset, chainNamespace);
                state.paymentAsset.metadata.logoURI = imageUrl;
            }
            catch {
            }
        }
    }
};
//# sourceMappingURL=PayController.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-view/styles.js

/* harmony default export */ const w3m_pay_view_styles = ((0,esm_exports/* css */.AH) `
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-top-right-radius: ${({ borderRadius }) => borderRadius[8]};
    border-top-left-radius: ${({ borderRadius }) => borderRadius[8]};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-view/index.js
var w3m_pay_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























let W3mPayView = class W3mPayView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.amount = PayController.state.amount;
        this.namespace = undefined;
        this.paymentAsset = PayController.state.paymentAsset;
        this.activeConnectorIds = ConnectorController/* ConnectorController */.a.state.activeConnectorIds;
        this.caipAddress = undefined;
        this.exchanges = PayController.state.exchanges;
        this.isLoading = PayController.state.isLoading;
        this.initializeNamespace();
        this.unsubscribe.push(PayController.subscribeKey('amount', val => (this.amount = val)));
        this.unsubscribe.push(ConnectorController/* ConnectorController */.a.subscribeKey('activeConnectorIds', ids => (this.activeConnectorIds = ids)));
        this.unsubscribe.push(PayController.subscribeKey('exchanges', val => (this.exchanges = val)));
        this.unsubscribe.push(PayController.subscribeKey('isLoading', val => (this.isLoading = val)));
        PayController.fetchExchanges();
        PayController.setSelectedExchange(undefined);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `;
    }
    paymentMethodsTemplate() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `;
    }
    initializeNamespace() {
        const namespace = ChainController/* ChainController */.W.state.activeChain;
        this.namespace = namespace;
        this.caipAddress = ChainController/* ChainController */.W.getAccountData(namespace)?.caipAddress;
        this.unsubscribe.push(ChainController/* ChainController */.W.subscribeChainProp('accountState', accountState => {
            this.caipAddress = accountState?.caipAddress;
        }, namespace));
    }
    paymentDetailsTemplate() {
        const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const targetNetwork = allNetworks.find(net => net.caipNetworkId === this.paymentAsset.network);
        return (0,lit/* html */.qy) `
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${['6', '8', '6', '8']}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${formatAmount(this.amount || '0')}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol || 'Unknown'}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${targetNetwork?.name || 'Unknown'}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,if_defined/* ifDefined */.J)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(targetNetwork))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `;
    }
    payWithWalletTemplate() {
        if (!isPayWithWalletSupported(this.paymentAsset.network)) {
            return (0,lit/* html */.qy) ``;
        }
        return this.caipAddress ? this.connectedWalletTemplate() : this.disconnectedWalletTemplate();
    }
    connectedWalletTemplate() {
        const { name, image } = this.getWalletProperties({
            namespace: this.namespace
        });
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${false}
          ?chevron=${true}
          ?fullSize=${false}
          ?rounded=${true}
          data-testid="wallet-payment-option"
          imageSrc=${(0,if_defined/* ifDefined */.J)(image)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${name}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${false}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `;
    }
    disconnectedWalletTemplate() {
        return (0,lit/* html */.qy) `<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${true}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`;
    }
    templateExchangeOptions() {
        if (this.isLoading) {
            return (0,lit/* html */.qy) `<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;
        }
        const exchangesToShow = this.exchanges.filter(exchange => {
            if (isTestnetAsset(this.paymentAsset)) {
                return exchange.id === REOWN_TEST_EXCHANGE_ID;
            }
            return exchange.id !== REOWN_TEST_EXCHANGE_ID;
        });
        if (exchangesToShow.length === 0) {
            return (0,lit/* html */.qy) `<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`;
        }
        return exchangesToShow.map(exchange => (0,lit/* html */.qy) `
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${() => this.onExchangePayment(exchange)}
          data-testid="exchange-option-${exchange.id}"
          ?chevron=${true}
          imageSrc=${(0,if_defined/* ifDefined */.J)(exchange.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${exchange.name}
          </wui-text>
        </wui-list-item>
      `);
    }
    templateSeparator() {
        return (0,lit/* html */.qy) `<wui-separator text="or" bgColor="secondary"></wui-separator>`;
    }
    async onWalletPayment() {
        if (!this.namespace) {
            throw new Error('Namespace not found');
        }
        if (this.caipAddress) {
            RouterController/* RouterController */.I.push('PayQuote');
        }
        else {
            await ConnectorController/* ConnectorController */.a.connect();
            await ModalController/* ModalController */.W.open({ view: 'PayQuote' });
        }
    }
    onExchangePayment(exchange) {
        PayController.setSelectedExchange(exchange);
        RouterController/* RouterController */.I.push('PayQuote');
    }
    async onDisconnect() {
        try {
            await ConnectionController/* ConnectionController */.x.disconnect();
            await ModalController/* ModalController */.W.open({ view: 'Pay' });
        }
        catch {
            console.error('Failed to disconnect');
            SnackController/* SnackController */.P.showError('Failed to disconnect');
        }
    }
    getWalletProperties({ namespace }) {
        if (!namespace) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connectorId = this.activeConnectorIds[namespace];
        if (!connectorId) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connector = ConnectorController/* ConnectorController */.a.getConnector({ id: connectorId, namespace });
        if (!connector) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connectorImage = AssetUtil/* AssetUtil */.$.getConnectorImage(connector);
        return {
            name: connector.name,
            image: connectorImage
        };
    }
};
W3mPayView.styles = w3m_pay_view_styles;
w3m_pay_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayView.prototype, "amount", void 0);
w3m_pay_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayView.prototype, "namespace", void 0);
w3m_pay_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayView.prototype, "paymentAsset", void 0);
w3m_pay_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayView.prototype, "activeConnectorIds", void 0);
w3m_pay_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayView.prototype, "caipAddress", void 0);
w3m_pay_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayView.prototype, "exchanges", void 0);
w3m_pay_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayView.prototype, "isLoading", void 0);
W3mPayView = w3m_pay_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-pay-view')
], W3mPayView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-pulse/styles.js

/* harmony default export */ const wui_pulse_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-pulse/index.js
var wui_pulse_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const DEFAULT_RINGS = 3;
const DEFAULT_DURATION = 2;
const DEFAULT_OPACITY = 0.3;
const DEFAULT_SIZE = '200px';
const COLOR_BY_VARIANT = {
    'accent-primary': ThemeHelperUtil/* vars */.f.tokens.core.backgroundAccentPrimary
};
let WuiPulse = class WuiPulse extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.rings = DEFAULT_RINGS;
        this.duration = DEFAULT_DURATION;
        this.opacity = DEFAULT_OPACITY;
        this.size = DEFAULT_SIZE;
        this.variant = 'accent-primary';
    }
    render() {
        const color = COLOR_BY_VARIANT[this.variant];
        this.style.cssText = `
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${color};
      --pulse-opacity: ${this.opacity};
    `;
        const ringElements = Array.from({ length: this.rings }, (_, i) => this.renderRing(i, this.rings));
        return (0,lit/* html */.qy) `
      <div class="pulse-container">
        <div class="pulse-rings">${ringElements}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `;
    }
    renderRing(index, total) {
        const delay = (index / total) * this.duration;
        const style = `animation-delay: ${delay}s;`;
        return (0,lit/* html */.qy) `<div class="pulse-ring" style=${style}></div>`;
    }
};
WuiPulse.styles = [ThemeUtil/* resetStyles */.W5, wui_pulse_styles];
wui_pulse_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiPulse.prototype, "rings", void 0);
wui_pulse_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiPulse.prototype, "duration", void 0);
wui_pulse_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiPulse.prototype, "opacity", void 0);
wui_pulse_decorate([
    (0,decorators/* property */.MZ)()
], WuiPulse.prototype, "size", void 0);
wui_pulse_decorate([
    (0,decorators/* property */.MZ)()
], WuiPulse.prototype, "variant", void 0);
WuiPulse = wui_pulse_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-pulse')
], WuiPulse);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-pulse.js

//# sourceMappingURL=wui-pulse.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-loading-view/constants.js
const STEPS = [
    {
        id: 'received',
        title: 'Receiving funds',
        icon: 'dollar'
    },
    {
        id: 'processing',
        title: 'Swapping asset',
        icon: 'recycleHorizontal'
    },
    {
        id: 'sending',
        title: 'Sending asset to the recipient address',
        icon: 'send'
    }
];
const TERMINAL_STATES = [
    'success',
    'submitted',
    'failure',
    'timeout',
    'refund'
];
//# sourceMappingURL=constants.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-loading-view/styles.js

/* harmony default export */ const w3m_pay_loading_view_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border: 3px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border: 3px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({ colors }) => colors.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border: 1px solid ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-top-right-radius: ${({ borderRadius }) => borderRadius[6]};
    border-top-left-radius: ${({ borderRadius }) => borderRadius[6]};
  }

  .payment-step-badge {
    padding: ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({ borderRadius }) => borderRadius.round};
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-loading-view/index.js
var w3m_pay_loading_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















const STEP_COMPLETED_STATUSES = {
    received: ['pending', 'success', 'submitted'],
    processing: ['success', 'submitted'],
    sending: ['success', 'submitted']
};
const POLLING_INTERVAL_MS = 3000;
let W3mPayLoadingView = class W3mPayLoadingView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.pollingInterval = null;
        this.paymentAsset = PayController.state.paymentAsset;
        this.quoteStatus = PayController.state.quoteStatus;
        this.quote = PayController.state.quote;
        this.amount = PayController.state.amount;
        this.namespace = undefined;
        this.caipAddress = undefined;
        this.profileName = null;
        this.activeConnectorIds = ConnectorController/* ConnectorController */.a.state.activeConnectorIds;
        this.selectedExchange = PayController.state.selectedExchange;
        this.initializeNamespace();
        this.unsubscribe.push(...[
            PayController.subscribeKey('quoteStatus', val => (this.quoteStatus = val)),
            PayController.subscribeKey('quote', val => (this.quote = val)),
            ConnectorController/* ConnectorController */.a.subscribeKey('activeConnectorIds', ids => (this.activeConnectorIds = ids)),
            PayController.subscribeKey('selectedExchange', val => (this.selectedExchange = val))
        ]);
    }
    connectedCallback() {
        super.connectedCallback();
        this.startPolling();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.stopPolling();
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['3', '0', '0', '0']} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `;
    }
    tokenTemplate() {
        const amount = formatAmount(this.amount || '0');
        const symbol = this.paymentAsset.metadata.symbol ?? 'Unknown';
        const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const targetNetwork = allNetworks.find(net => net.caipNetworkId === this.paymentAsset.network);
        const hasTransactionFailed = this.quoteStatus === 'failure' ||
            this.quoteStatus === 'timeout' ||
            this.quoteStatus === 'refund';
        const hasTransactionSucceeded = this.quoteStatus === 'success' || this.quoteStatus === 'submitted';
        if (hasTransactionSucceeded) {
            return (0,lit/* html */.qy) `<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`;
        }
        if (hasTransactionFailed) {
            return (0,lit/* html */.qy) `<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`;
        }
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(targetNetwork))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${amount} ${symbol}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
    }
    paymentTemplate() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="2" .padding=${['0', '6', '0', '6']}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `;
    }
    paymentLifecycleTemplate() {
        const stepsWithStatus = this.getStepsWithStatus();
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${['2', '0', '2', '0']}>
          ${stepsWithStatus.map(step => this.renderStep(step))}
        </wui-flex>
      </wui-flex>
    `;
    }
    renderPaymentCycleBadge() {
        const hasTransactionFailed = this.quoteStatus === 'failure' ||
            this.quoteStatus === 'timeout' ||
            this.quoteStatus === 'refund';
        const hasTransactionSucceeded = this.quoteStatus === 'success' || this.quoteStatus === 'submitted';
        if (hasTransactionFailed) {
            return (0,lit/* html */.qy) `
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;
        }
        if (hasTransactionSucceeded) {
            return (0,lit/* html */.qy) `
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;
        }
        const timeEstimate = this.quote?.timeInSeconds ?? 0;
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${timeEstimate} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `;
    }
    renderPayment() {
        const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const targetNetwork = allNetworks.find(net => {
            const network = this.quote?.origin.currency.network;
            if (!network) {
                return false;
            }
            const { chainId } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(network);
            return HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(net.id.toString(), chainId.toString());
        });
        const formatBigNumber = NumberUtil/* NumberUtil */.S.formatNumber(this.quote?.origin.amount || '0', {
            decimals: this.quote?.origin.currency.metadata.decimals ?? 0
        }).toString();
        const formattedAmount = formatAmount(formatBigNumber);
        const symbol = this.quote?.origin.currency.metadata.symbol ?? 'Unknown';
        return (0,lit/* html */.qy) `
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${['3', '0', '3', '0']}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${formattedAmount}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${symbol}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(targetNetwork))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${targetNetwork?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
    }
    renderWallet() {
        return (0,lit/* html */.qy) `
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${['3', '0', '3', '0']}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange ? 'Exchange' : 'Wallet'}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `;
    }
    renderWalletText() {
        const { image } = this.getWalletProperties({ namespace: this.namespace });
        const { address } = this.caipAddress ? ParseUtil/* ParseUtil */.C.parseCaipAddress(this.caipAddress) : {};
        const exchangeName = this.selectedExchange?.name;
        if (this.selectedExchange) {
            return (0,lit/* html */.qy) `
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${exchangeName}</wui-text>
          <wui-image src=${(0,if_defined/* ifDefined */.J)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `;
        }
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${esm_exports/* UiHelperUtil */.Zv.getTruncateString({
            string: this.profileName || address || exchangeName || '',
            charsStart: this.profileName ? 16 : 4,
            charsEnd: this.profileName ? 0 : 6,
            truncate: this.profileName ? 'end' : 'middle'
        })}
        </wui-text>

        <wui-image src=${(0,if_defined/* ifDefined */.J)(image)} size="mdl"></wui-image>
      </wui-flex>
    `;
    }
    getStepsWithStatus() {
        const hasTransactionFailed = this.quoteStatus === 'failure' ||
            this.quoteStatus === 'timeout' ||
            this.quoteStatus === 'refund';
        if (hasTransactionFailed) {
            return STEPS.map(step => ({ ...step, status: 'failed' }));
        }
        return STEPS.map(step => {
            const completedStatuses = STEP_COMPLETED_STATUSES[step.id] ?? [];
            const status = completedStatuses.includes(this.quoteStatus) ? 'completed' : 'pending';
            return { ...step, status };
        });
    }
    renderStep({ title, icon, status }) {
        const classes = {
            'step-icon-box': true,
            success: status === 'completed'
        };
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${icon} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,class_map/* classMap */.H)(classes)}>
            ${this.renderStatusIndicator(status)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${title}</wui-text>
      </wui-flex>
    `;
    }
    renderStatusIndicator(status) {
        if (status === 'completed') {
            return (0,lit/* html */.qy) `<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`;
        }
        if (status === 'failed') {
            return (0,lit/* html */.qy) `<wui-icon size="sm" color="error" name="close"></wui-icon>`;
        }
        if (status === 'pending') {
            return (0,lit/* html */.qy) `<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`;
        }
        return null;
    }
    startPolling() {
        if (!this.pollingInterval) {
            this.fetchQuoteStatus();
            this.pollingInterval = setInterval(() => {
                this.fetchQuoteStatus();
            }, POLLING_INTERVAL_MS);
        }
    }
    stopPolling() {
        if (this.pollingInterval) {
            clearInterval(this.pollingInterval);
            this.pollingInterval = null;
        }
    }
    async fetchQuoteStatus() {
        const requestId = PayController.state.requestId;
        if (!requestId || TERMINAL_STATES.includes(this.quoteStatus)) {
            this.stopPolling();
        }
        else {
            try {
                await PayController.fetchQuoteStatus({ requestId });
                if (TERMINAL_STATES.includes(this.quoteStatus)) {
                    this.stopPolling();
                }
            }
            catch {
                this.stopPolling();
            }
        }
    }
    initializeNamespace() {
        const namespace = ChainController/* ChainController */.W.state.activeChain;
        this.namespace = namespace;
        this.caipAddress = ChainController/* ChainController */.W.getAccountData(namespace)?.caipAddress;
        this.profileName = ChainController/* ChainController */.W.getAccountData(namespace)?.profileName ?? null;
        this.unsubscribe.push(ChainController/* ChainController */.W.subscribeChainProp('accountState', accountState => {
            this.caipAddress = accountState?.caipAddress;
            this.profileName = accountState?.profileName ?? null;
        }, namespace));
    }
    getWalletProperties({ namespace }) {
        if (!namespace) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connectorId = this.activeConnectorIds[namespace];
        if (!connectorId) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connector = ConnectorController/* ConnectorController */.a.getConnector({ id: connectorId, namespace });
        if (!connector) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connectorImage = AssetUtil/* AssetUtil */.$.getConnectorImage(connector);
        return {
            name: connector.name,
            image: connectorImage
        };
    }
};
W3mPayLoadingView.styles = w3m_pay_loading_view_styles;
w3m_pay_loading_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayLoadingView.prototype, "paymentAsset", void 0);
w3m_pay_loading_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayLoadingView.prototype, "quoteStatus", void 0);
w3m_pay_loading_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayLoadingView.prototype, "quote", void 0);
w3m_pay_loading_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayLoadingView.prototype, "amount", void 0);
w3m_pay_loading_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayLoadingView.prototype, "namespace", void 0);
w3m_pay_loading_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayLoadingView.prototype, "caipAddress", void 0);
w3m_pay_loading_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayLoadingView.prototype, "profileName", void 0);
w3m_pay_loading_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayLoadingView.prototype, "activeConnectorIds", void 0);
w3m_pay_loading_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayLoadingView.prototype, "selectedExchange", void 0);
W3mPayLoadingView = w3m_pay_loading_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-pay-loading-view')
], W3mPayLoadingView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-switch/styles.js

/* harmony default export */ const wui_wallet_switch_styles = ((0,ThemeHelperUtil/* css */.AH) `
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    column-gap: ${({ spacing }) => spacing[1]};
    background-color: transparent;
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({ spacing }) => spacing[6]};
    height: ${({ spacing }) => spacing[6]};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({ tokens }) => tokens.core.textSuccess};
    box-shadow: 0 0 0 2px ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-switch/index.js
var wui_wallet_switch_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let WuiWalletSwitch = class WuiWalletSwitch extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.address = '';
        this.profileName = '';
        this.alt = '';
        this.imageSrc = '';
        this.icon = undefined;
        this.iconSize = 'md';
        this.enableGreenCircle = true;
        this.loading = false;
        this.charsStart = 4;
        this.charsEnd = 6;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `;
    }
    leftImageTemplate() {
        const imageOrIconContent = this.icon
            ? (0,lit/* html */.qy) `<wui-icon
          size=${(0,if_defined/* ifDefined */.J)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`
            : (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;
        return (0,lit/* html */.qy) `
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${imageOrIconContent}
        ${this.enableGreenCircle ? (0,lit/* html */.qy) `<wui-flex class="circle"></wui-flex>` : null}
      </wui-flex>
    `;
    }
    textTemplate() {
        return (0,lit/* html */.qy) `
      <wui-text variant="lg-regular" color="primary">
        ${UiHelperUtil/* UiHelperUtil */.Z.getTruncateString({
            string: this.profileName || this.address,
            charsStart: this.profileName ? 16 : this.charsStart,
            charsEnd: this.profileName ? 0 : this.charsEnd,
            truncate: this.profileName ? 'end' : 'middle'
        })}
      </wui-text>
    `;
    }
    rightImageTemplate() {
        return (0,lit/* html */.qy) `<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`;
    }
};
WuiWalletSwitch.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_wallet_switch_styles];
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "address", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "profileName", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "alt", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "imageSrc", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "icon", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "iconSize", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiWalletSwitch.prototype, "enableGreenCircle", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiWalletSwitch.prototype, "loading", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiWalletSwitch.prototype, "charsStart", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiWalletSwitch.prototype, "charsEnd", void 0);
WuiWalletSwitch = wui_wallet_switch_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-wallet-switch')
], WuiWalletSwitch);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-switch.js

//# sourceMappingURL=wui-wallet-switch.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/styles.js

/* harmony default export */ const wui_shimmer_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({ tokens }) => tokens.theme.foregroundPrimary} 0%,
      ${({ tokens }) => tokens.theme.foregroundSecondary} 50%,
      ${({ tokens }) => tokens.theme.foregroundPrimary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/index.js
var wui_shimmer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let WuiShimmer = class WuiShimmer extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.width = '';
        this.height = '';
        this.variant = 'default';
        this.rounded = false;
    }
    render() {
        this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
    `;
        this.dataset['rounded'] = this.rounded ? 'true' : 'false';
        return (0,lit/* html */.qy) `<slot></slot>`;
    }
};
WuiShimmer.styles = [wui_shimmer_styles];
wui_shimmer_decorate([
    (0,decorators/* property */.MZ)()
], WuiShimmer.prototype, "width", void 0);
wui_shimmer_decorate([
    (0,decorators/* property */.MZ)()
], WuiShimmer.prototype, "height", void 0);
wui_shimmer_decorate([
    (0,decorators/* property */.MZ)()
], WuiShimmer.prototype, "variant", void 0);
wui_shimmer_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiShimmer.prototype, "rounded", void 0);
WuiShimmer = wui_shimmer_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-shimmer')
], WuiShimmer);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js

//# sourceMappingURL=wui-shimmer.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees-skeleton/styles.js

/* harmony default export */ const w3m_pay_fees_skeleton_styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees-skeleton/index.js
var w3m_pay_fees_skeleton_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mPayFeesSkeleton = class W3mPayFeesSkeleton extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `;
    }
};
W3mPayFeesSkeleton.styles = [w3m_pay_fees_skeleton_styles];
W3mPayFeesSkeleton = w3m_pay_fees_skeleton_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-pay-fees-skeleton')
], W3mPayFeesSkeleton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees/styles.js

/* harmony default export */ const w3m_pay_fees_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees/index.js
var w3m_pay_fees_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let W3mPayFees = class W3mPayFees extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.quote = PayController.state.quote;
        this.unsubscribe.push(PayController.subscribeKey('quote', val => (this.quote = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const amount = NumberUtil/* NumberUtil */.S.formatNumber(this.quote?.origin.amount || '0', {
            decimals: this.quote?.origin.currency.metadata.decimals ?? 0,
            round: 6
        }).toString();
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${amount} ${this.quote?.origin.currency.metadata.symbol || 'Unknown'}
          </wui-text>
        </wui-flex>

        ${this.quote && this.quote.fees.length > 0
            ? this.quote.fees.map(fee => this.renderFee(fee))
            : null}
      </wui-flex>
    `;
    }
    renderFee(fee) {
        const isNetworkFee = fee.id === 'network';
        const feeAmount = NumberUtil/* NumberUtil */.S.formatNumber(fee.amount || '0', {
            decimals: fee.currency.metadata.decimals ?? 0,
            round: 6
        }).toString();
        if (isNetworkFee) {
            const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
            const targetNetwork = allNetworks.find(net => HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(net.caipNetworkId, fee.currency.network));
            return (0,lit/* html */.qy) `
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${fee.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${feeAmount} ${fee.currency.metadata.symbol || 'Unknown'}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(targetNetwork))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${targetNetwork?.name || 'Unknown'}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `;
        }
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${fee.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${feeAmount} ${fee.currency.metadata.symbol || 'Unknown'}
        </wui-text>
      </wui-flex>
    `;
    }
};
W3mPayFees.styles = [w3m_pay_fees_styles];
w3m_pay_fees_decorate([
    (0,decorators/* state */.wk)()
], W3mPayFees.prototype, "quote", void 0);
W3mPayFees = w3m_pay_fees_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-pay-fees')
], W3mPayFees);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-empty/styles.js

/* harmony default export */ const w3m_pay_options_empty_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({ spacing }) => spacing[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({ spacing }) => spacing[8]};
    height: ${({ spacing }) => spacing[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-empty/index.js
var w3m_pay_options_empty_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mPayOptionsEmpty = class W3mPayOptionsEmpty extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.selectedExchange = PayController.state.selectedExchange;
        this.unsubscribe.push(PayController.subscribeKey('selectedExchange', val => (this.selectedExchange = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const isUsingExchange = Boolean(this.selectedExchange);
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${isUsingExchange
            ? null
            : (0,lit/* html */.qy) `<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `;
    }
    dispatchConnectOtherWalletEvent() {
        this.dispatchEvent(new CustomEvent('connectOtherWallet', {
            detail: true,
            bubbles: true,
            composed: true
        }));
    }
};
W3mPayOptionsEmpty.styles = [w3m_pay_options_empty_styles];
w3m_pay_options_empty_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], W3mPayOptionsEmpty.prototype, "selectedExchange", void 0);
W3mPayOptionsEmpty = w3m_pay_options_empty_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-pay-options-empty')
], W3mPayOptionsEmpty);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-skeleton/styles.js

/* harmony default export */ const w3m_pay_options_skeleton_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    padding: ${({ spacing }) => spacing[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({ tokens }) => tokens.theme.foregroundSecondary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-skeleton/index.js
var w3m_pay_options_skeleton_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let W3mPayOptionsSkeleton = class W3mPayOptionsSkeleton extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `;
    }
    renderOptionEntry() {
        return (0,lit/* html */.qy) `
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
    }
};
W3mPayOptionsSkeleton.styles = [w3m_pay_options_skeleton_styles];
W3mPayOptionsSkeleton = w3m_pay_options_skeleton_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-pay-options-skeleton')
], W3mPayOptionsSkeleton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options/styles.js

/* harmony default export */ const w3m_pay_options_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    padding: ${({ spacing }) => spacing[3]};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-1']};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options/index.js
var w3m_pay_options_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









const SCROLL_THRESHOLD = 300;
let W3mPayOptions = class W3mPayOptions extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.options = [];
        this.selectedPaymentAsset = null;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.resizeObserver?.disconnect();
        const optionsEl = this.shadowRoot?.querySelector('.pay-options-container');
        optionsEl?.removeEventListener('scroll', this.handleOptionsListScroll.bind(this));
    }
    firstUpdated() {
        const optionsEl = this.shadowRoot?.querySelector('.pay-options-container');
        if (optionsEl) {
            requestAnimationFrame(this.handleOptionsListScroll.bind(this));
            optionsEl?.addEventListener('scroll', this.handleOptionsListScroll.bind(this));
            this.resizeObserver = new ResizeObserver(() => {
                this.handleOptionsListScroll();
            });
            this.resizeObserver?.observe(optionsEl);
            this.handleOptionsListScroll();
        }
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(option => this.payOptionTemplate(option))}
      </wui-flex>
    `;
    }
    payOptionTemplate(paymentAsset) {
        const { network, metadata, asset, amount = '0' } = paymentAsset;
        const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const targetNetwork = allNetworks.find(net => net.caipNetworkId === network);
        const paymentCaipAddress = `${network}:${asset}`;
        const selectedPaymentCaipAddress = `${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`;
        const isSelected = paymentCaipAddress === selectedPaymentCaipAddress;
        const bigAmount = NumberUtil/* NumberUtil */.S.bigNumber(amount, { safe: true });
        const hasEnoughBalance = bigAmount.gt(0);
        return (0,lit/* html */.qy) `
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${() => this.onSelect?.(paymentAsset)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,if_defined/* ifDefined */.J)(metadata.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(targetNetwork))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${metadata.symbol}</wui-text>
            ${hasEnoughBalance
            ? (0,lit/* html */.qy) `<wui-text variant="sm-regular" color="secondary">
                  ${bigAmount.round(6).toString()} ${metadata.symbol}
                </wui-text>`
            : null}
          </wui-flex>
        </wui-flex>

        ${isSelected
            ? (0,lit/* html */.qy) `<wui-icon name="checkmark" size="md" color="success"></wui-icon>`
            : null}
      </wui-flex>
    `;
    }
    handleOptionsListScroll() {
        const optionsEl = this.shadowRoot?.querySelector('.pay-options-container');
        if (!optionsEl) {
            return;
        }
        const shouldApplyMask = optionsEl.scrollHeight > SCROLL_THRESHOLD;
        if (shouldApplyMask) {
            optionsEl.style.setProperty('--options-mask-image', `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`);
            optionsEl.style.setProperty('--options-scroll--top-opacity', esm_exports/* MathUtil */.z8.interpolate([0, 50], [0, 1], optionsEl.scrollTop).toString());
            optionsEl.style.setProperty('--options-scroll--bottom-opacity', esm_exports/* MathUtil */.z8.interpolate([0, 50], [0, 1], optionsEl.scrollHeight - optionsEl.scrollTop - optionsEl.offsetHeight).toString());
        }
        else {
            optionsEl.style.setProperty('--options-mask-image', 'none');
            optionsEl.style.setProperty('--options-scroll--top-opacity', '0');
            optionsEl.style.setProperty('--options-scroll--bottom-opacity', '0');
        }
    }
};
W3mPayOptions.styles = [w3m_pay_options_styles];
w3m_pay_options_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], W3mPayOptions.prototype, "options", void 0);
w3m_pay_options_decorate([
    (0,decorators/* property */.MZ)()
], W3mPayOptions.prototype, "selectedPaymentAsset", void 0);
w3m_pay_options_decorate([
    (0,decorators/* property */.MZ)()
], W3mPayOptions.prototype, "onSelect", void 0);
W3mPayOptions = w3m_pay_options_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-pay-options')
], W3mPayOptions);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-quote-view/styles.js

/* harmony default export */ const w3m_pay_quote_view_styles = ((0,esm_exports/* css */.AH) `
  .payment-methods-container {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-top-right-radius: ${({ borderRadius }) => borderRadius[5]};
    border-top-left-radius: ${({ borderRadius }) => borderRadius[5]};
  }

  .pay-options-container {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    padding: ${({ spacing }) => spacing[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-quote-view/index.js
var w3m_pay_quote_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















const NAMESPACE_ICONS = {
    eip155: 'ethereum',
    solana: 'solana',
    bip122: 'bitcoin',
    ton: 'ton'
};
const NAMESPACE_LABELS = {
    eip155: { icon: NAMESPACE_ICONS.eip155, label: 'EVM' },
    solana: { icon: NAMESPACE_ICONS.solana, label: 'Solana' },
    bip122: { icon: NAMESPACE_ICONS.bip122, label: 'Bitcoin' },
    ton: { icon: NAMESPACE_ICONS.ton, label: 'Ton' }
};
let W3mPayQuoteView = class W3mPayQuoteView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.profileName = null;
        this.paymentAsset = PayController.state.paymentAsset;
        this.namespace = undefined;
        this.caipAddress = undefined;
        this.amount = PayController.state.amount;
        this.recipient = PayController.state.recipient;
        this.activeConnectorIds = ConnectorController/* ConnectorController */.a.state.activeConnectorIds;
        this.selectedPaymentAsset = PayController.state.selectedPaymentAsset;
        this.selectedExchange = PayController.state.selectedExchange;
        this.isFetchingQuote = PayController.state.isFetchingQuote;
        this.quoteError = PayController.state.quoteError;
        this.quote = PayController.state.quote;
        this.isFetchingTokenBalances = PayController.state.isFetchingTokenBalances;
        this.tokenBalances = PayController.state.tokenBalances;
        this.isPaymentInProgress = PayController.state.isPaymentInProgress;
        this.exchangeUrlForQuote = PayController.state.exchangeUrlForQuote;
        this.completedTransactionsCount = 0;
        this.unsubscribe.push(PayController.subscribeKey('paymentAsset', val => (this.paymentAsset = val)));
        this.unsubscribe.push(PayController.subscribeKey('tokenBalances', val => this.onTokenBalancesChanged(val)));
        this.unsubscribe.push(PayController.subscribeKey('isFetchingTokenBalances', val => (this.isFetchingTokenBalances = val)));
        this.unsubscribe.push(ConnectorController/* ConnectorController */.a.subscribeKey('activeConnectorIds', newActiveConnectorIds => (this.activeConnectorIds = newActiveConnectorIds)));
        this.unsubscribe.push(PayController.subscribeKey('selectedPaymentAsset', val => (this.selectedPaymentAsset = val)));
        this.unsubscribe.push(PayController.subscribeKey('isFetchingQuote', val => (this.isFetchingQuote = val)));
        this.unsubscribe.push(PayController.subscribeKey('quoteError', val => (this.quoteError = val)));
        this.unsubscribe.push(PayController.subscribeKey('quote', val => (this.quote = val)));
        this.unsubscribe.push(PayController.subscribeKey('amount', val => (this.amount = val)));
        this.unsubscribe.push(PayController.subscribeKey('recipient', val => (this.recipient = val)));
        this.unsubscribe.push(PayController.subscribeKey('isPaymentInProgress', val => (this.isPaymentInProgress = val)));
        this.unsubscribe.push(PayController.subscribeKey('selectedExchange', val => (this.selectedExchange = val)));
        this.unsubscribe.push(PayController.subscribeKey('exchangeUrlForQuote', val => (this.exchangeUrlForQuote = val)));
        this.resetQuoteState();
        this.initializeNamespace();
        this.fetchTokens();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.resetAssetsState();
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const shouldFetchQuote = changedProperties.has('selectedPaymentAsset');
        if (shouldFetchQuote) {
            this.fetchQuote();
        }
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${['4', '4', '5', '4']}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${['1', '0', '1', '0']}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `;
    }
    profileTemplate() {
        if (this.selectedExchange) {
            const amount = NumberUtil/* NumberUtil */.S.formatNumber(this.quote?.origin.amount, {
                decimals: this.quote?.origin.currency.metadata.decimals ?? 0
            }).toString();
            return (0,lit/* html */.qy) `
        <wui-flex
          .padding=${['4', '3', '4', '3']}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote
                ? (0,lit/* html */.qy) `<wui-text variant="lg-regular" color="primary">
                ${NumberUtil/* NumberUtil */.S.bigNumber(amount, { safe: true }).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`
                : (0,lit/* html */.qy) `<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `;
        }
        const address = CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(this.caipAddress) ?? '';
        const { name, image } = this.getWalletProperties({ namespace: this.namespace });
        const { icon: chainIcon, label: chainLabel } = NAMESPACE_LABELS[this.namespace] ?? {};
        return (0,lit/* html */.qy) `
      <wui-flex
        .padding=${['4', '3', '4', '3']}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,if_defined/* ifDefined */.J)(this.profileName)}
          address=${(0,if_defined/* ifDefined */.J)(address)}
          imageSrc=${(0,if_defined/* ifDefined */.J)(image)}
          alt=${(0,if_defined/* ifDefined */.J)(name)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,if_defined/* ifDefined */.J)(chainLabel)}
          address=${(0,if_defined/* ifDefined */.J)(address)}
          icon=${(0,if_defined/* ifDefined */.J)(chainIcon)}
          iconSize="xs"
          .enableGreenCircle=${false}
          alt=${(0,if_defined/* ifDefined */.J)(chainLabel)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `;
    }
    initializeNamespace() {
        const namespace = ChainController/* ChainController */.W.state.activeChain;
        this.namespace = namespace;
        this.caipAddress = ChainController/* ChainController */.W.getAccountData(namespace)?.caipAddress;
        this.profileName = ChainController/* ChainController */.W.getAccountData(namespace)?.profileName ?? null;
        this.unsubscribe.push(ChainController/* ChainController */.W.subscribeChainProp('accountState', accountState => this.onAccountStateChanged(accountState), namespace));
    }
    async fetchTokens() {
        if (this.namespace) {
            let caipNetwork = undefined;
            if (this.caipAddress) {
                const { chainId, chainNamespace } = ParseUtil/* ParseUtil */.C.parseCaipAddress(this.caipAddress);
                const caipNetworkId = `${chainNamespace}:${chainId}`;
                const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
                caipNetwork = allNetworks.find(net => net.caipNetworkId === caipNetworkId);
            }
            await PayController.fetchTokens({
                caipAddress: this.caipAddress,
                caipNetwork,
                namespace: this.namespace
            });
        }
    }
    fetchQuote() {
        if (this.amount && this.recipient && this.selectedPaymentAsset && this.paymentAsset) {
            const { address } = this.caipAddress ? ParseUtil/* ParseUtil */.C.parseCaipAddress(this.caipAddress) : {};
            PayController.fetchQuote({
                amount: this.amount.toString(),
                address,
                sourceToken: this.selectedPaymentAsset,
                toToken: this.paymentAsset,
                recipient: this.recipient
            });
        }
    }
    getWalletProperties({ namespace }) {
        if (!namespace) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connectorId = this.activeConnectorIds[namespace];
        if (!connectorId) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connector = ConnectorController/* ConnectorController */.a.getConnector({ id: connectorId, namespace });
        if (!connector) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connectorImage = AssetUtil/* AssetUtil */.$.getConnectorImage(connector);
        return {
            name: connector.name,
            image: connectorImage
        };
    }
    paymentOptionsViewTemplate() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `;
    }
    paymentOptionsTemplate() {
        const paymentAssets = this.getPaymentAssetFromTokenBalances();
        if (this.isFetchingTokenBalances) {
            return (0,lit/* html */.qy) `<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;
        }
        if (paymentAssets.length === 0) {
            return (0,lit/* html */.qy) `<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;
        }
        const classes = {
            disabled: this.isFetchingQuote
        };
        return (0,lit/* html */.qy) `<w3m-pay-options
      class=${(0,class_map/* classMap */.H)(classes)}
      .options=${paymentAssets}
      .selectedPaymentAsset=${(0,if_defined/* ifDefined */.J)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`;
    }
    amountWithFeeTemplate() {
        if (this.isFetchingQuote || !this.selectedPaymentAsset || this.quoteError) {
            return (0,lit/* html */.qy) `<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`;
        }
        return (0,lit/* html */.qy) `<w3m-pay-fees></w3m-pay-fees>`;
    }
    paymentActionsTemplate() {
        const isLoading = this.isFetchingQuote || this.isFetchingTokenBalances;
        const isDisabled = this.isFetchingQuote ||
            this.isFetchingTokenBalances ||
            !this.selectedPaymentAsset ||
            Boolean(this.quoteError);
        const amount = NumberUtil/* NumberUtil */.S.formatNumber(this.quote?.origin.amount ?? 0, {
            decimals: this.quote?.origin.currency.metadata.decimals ?? 0
        }).toString();
        if (this.selectedExchange) {
            if (isLoading || isDisabled) {
                return (0,lit/* html */.qy) `
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${true}></wui-shimmer>
        `;
            }
            return (0,lit/* html */.qy) `<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`;
        }
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${isLoading || isDisabled
            ? (0,lit/* html */.qy) `<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`
            : (0,lit/* html */.qy) `<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${formatAmount(amount)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol || 'Unknown'}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({ isLoading, isDisabled })}
      </wui-flex>
    `;
    }
    actionButtonTemplate(params) {
        const allTransactionSteps = getTransactionsSteps(this.quote);
        const { isLoading, isDisabled } = params;
        let label = 'Pay';
        const isApprovalRequired = allTransactionSteps.length > 1 && this.completedTransactionsCount === 0;
        if (isApprovalRequired) {
            label = 'Approve';
        }
        return (0,lit/* html */.qy) `
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${isLoading || this.isPaymentInProgress}
        ?disabled=${isDisabled || this.isPaymentInProgress}
        @click=${() => {
            if (allTransactionSteps.length > 0) {
                this.onSendTransactions();
            }
            else {
                this.onTransfer();
            }
        }}
      >
        ${label}
        ${isLoading
            ? null
            : (0,lit/* html */.qy) `<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `;
    }
    getPaymentAssetFromTokenBalances() {
        if (!this.namespace) {
            return [];
        }
        const balances = this.tokenBalances[this.namespace] ?? [];
        const paymentOptionsWithFormattedBalances = balances
            .map(balance => {
            try {
                return formatBalanceToPaymentAsset(balance);
            }
            catch (err) {
                return null;
            }
        })
            .filter((option) => Boolean(option));
        const paymentOptionsToShow = paymentOptionsWithFormattedBalances.filter(option => {
            const { chainId: optionChainId } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(option.network);
            const { chainId: paymentAssetChainId } = ParseUtil/* ParseUtil */.C.parseCaipNetworkId(this.paymentAsset.network);
            if (HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(option.asset, this.paymentAsset.asset)) {
                return true;
            }
            if (this.selectedExchange) {
                return !HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(optionChainId.toString(), paymentAssetChainId.toString());
            }
            return true;
        });
        return paymentOptionsToShow;
    }
    onTokenBalancesChanged(tokenBalances) {
        this.tokenBalances = tokenBalances;
        const [paymentAsset] = this.getPaymentAssetFromTokenBalances();
        if (paymentAsset) {
            PayController.setSelectedPaymentAsset(paymentAsset);
        }
    }
    async onConnectOtherWallet() {
        await ConnectorController/* ConnectorController */.a.connect();
        await ModalController/* ModalController */.W.open({ view: 'PayQuote' });
    }
    onAccountStateChanged(accountState) {
        const { address: oldAddress } = this.caipAddress
            ? ParseUtil/* ParseUtil */.C.parseCaipAddress(this.caipAddress)
            : {};
        this.caipAddress = accountState?.caipAddress;
        this.profileName = accountState?.profileName ?? null;
        if (oldAddress) {
            const { address: newAddress } = this.caipAddress
                ? ParseUtil/* ParseUtil */.C.parseCaipAddress(this.caipAddress)
                : {};
            if (!newAddress) {
                ModalController/* ModalController */.W.close();
            }
            else if (!HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(newAddress, oldAddress)) {
                this.resetAssetsState();
                this.resetQuoteState();
                this.fetchTokens();
            }
        }
    }
    onSelectedPaymentAssetChanged(paymentAsset) {
        if (!this.isFetchingQuote) {
            PayController.setSelectedPaymentAsset(paymentAsset);
        }
    }
    async onTransfer() {
        const transferStep = getTransferStep(this.quote);
        if (transferStep) {
            const isQuoteAssetSameAsSelectedPaymentAsset = HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(this.selectedPaymentAsset?.asset, transferStep.deposit.currency);
            if (!isQuoteAssetSameAsSelectedPaymentAsset) {
                throw new Error('Quote asset is not the same as the selected payment asset');
            }
            const currentAmount = this.selectedPaymentAsset?.amount ?? '0';
            const amountToTransfer = NumberUtil/* NumberUtil */.S.formatNumber(transferStep.deposit.amount, {
                decimals: this.selectedPaymentAsset?.metadata.decimals ?? 0
            }).toString();
            const hasEnoughFunds = NumberUtil/* NumberUtil */.S.bigNumber(currentAmount).gte(amountToTransfer);
            if (!hasEnoughFunds) {
                SnackController/* SnackController */.P.showError('Insufficient funds');
                return;
            }
            if (this.quote && this.selectedPaymentAsset && this.caipAddress && this.namespace) {
                const { address: fromAddress } = ParseUtil/* ParseUtil */.C.parseCaipAddress(this.caipAddress);
                await PayController.onTransfer({
                    chainNamespace: this.namespace,
                    fromAddress,
                    toAddress: transferStep.deposit.receiver,
                    amount: amountToTransfer,
                    paymentAsset: this.selectedPaymentAsset
                });
                PayController.setRequestId(transferStep.requestId);
                RouterController/* RouterController */.I.push('PayLoading');
            }
        }
    }
    async onSendTransactions() {
        const currentAmount = this.selectedPaymentAsset?.amount ?? '0';
        const amountToSwap = NumberUtil/* NumberUtil */.S.formatNumber(this.quote?.origin.amount ?? 0, {
            decimals: this.selectedPaymentAsset?.metadata.decimals ?? 0
        }).toString();
        const hasEnoughFunds = NumberUtil/* NumberUtil */.S.bigNumber(currentAmount).gte(amountToSwap);
        if (!hasEnoughFunds) {
            SnackController/* SnackController */.P.showError('Insufficient funds');
            return;
        }
        const allTransactionSteps = getTransactionsSteps(this.quote);
        const [transactionStep] = getTransactionsSteps(this.quote, this.completedTransactionsCount);
        if (transactionStep && this.namespace) {
            await PayController.onSendTransaction({
                namespace: this.namespace,
                transactionStep
            });
            this.completedTransactionsCount += 1;
            const hasCompletedAllTransactions = this.completedTransactionsCount === allTransactionSteps.length;
            if (hasCompletedAllTransactions) {
                PayController.setRequestId(transactionStep.requestId);
                RouterController/* RouterController */.I.push('PayLoading');
            }
        }
    }
    onPayWithExchange() {
        if (this.exchangeUrlForQuote) {
            const popupWindow = CoreHelperUtil/* CoreHelperUtil */.w.returnOpenHref('', 'popupWindow', 'scrollbar=yes,width=480,height=720');
            if (!popupWindow) {
                throw new Error('Could not create popup window');
            }
            popupWindow.location.href = this.exchangeUrlForQuote;
            const transactionStep = getTransferStep(this.quote);
            if (transactionStep) {
                PayController.setRequestId(transactionStep.requestId);
            }
            PayController.initiatePayment();
            RouterController/* RouterController */.I.push('PayLoading');
        }
    }
    resetAssetsState() {
        PayController.setSelectedPaymentAsset(null);
    }
    resetQuoteState() {
        PayController.resetQuoteState();
    }
};
W3mPayQuoteView.styles = w3m_pay_quote_view_styles;
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "profileName", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "paymentAsset", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "namespace", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "caipAddress", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "amount", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "recipient", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "activeConnectorIds", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "selectedPaymentAsset", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "selectedExchange", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "isFetchingQuote", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "quoteError", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "quote", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "isFetchingTokenBalances", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "tokenBalances", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "isPaymentInProgress", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "exchangeUrlForQuote", void 0);
w3m_pay_quote_view_decorate([
    (0,decorators/* state */.wk)()
], W3mPayQuoteView.prototype, "completedTransactionsCount", void 0);
W3mPayQuoteView = w3m_pay_quote_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-pay-quote-view')
], W3mPayQuoteView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/client.js
/* unused harmony import specifier */ var client_PayController;


const PAYMENT_TIMEOUT_MS = 300000;
async function openPay(options) {
    return PayController.handleOpenPay(options);
}
async function pay(options, timeoutMs = PAYMENT_TIMEOUT_MS) {
    if (timeoutMs <= 0) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, 'Timeout must be greater than 0');
    }
    try {
        await openPay(options);
    }
    catch (error) {
        if (error instanceof AppKitPayError) {
            throw error;
        }
        throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_INITIATE_PAYMENT, error.message);
    }
    return new Promise((resolve, reject) => {
        let isSettled = false;
        const timeoutId = setTimeout(() => {
            if (isSettled) {
                return;
            }
            isSettled = true;
            cleanup();
            reject(new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, 'Payment timeout'));
        }, timeoutMs);
        function checkAndResolve() {
            if (isSettled) {
                return;
            }
            const currentPayment = PayController.state.currentPayment;
            const error = PayController.state.error;
            const isInProgress = PayController.state.isPaymentInProgress;
            if (currentPayment?.status === 'SUCCESS') {
                isSettled = true;
                cleanup();
                clearTimeout(timeoutId);
                resolve({
                    success: true,
                    result: currentPayment.result
                });
                return;
            }
            if (currentPayment?.status === 'FAILED') {
                isSettled = true;
                cleanup();
                clearTimeout(timeoutId);
                resolve({
                    success: false,
                    error: error || 'Payment failed'
                });
                return;
            }
            if (error && !isInProgress && !currentPayment) {
                isSettled = true;
                cleanup();
                clearTimeout(timeoutId);
                resolve({
                    success: false,
                    error
                });
            }
        }
        const unsubscribePayment = subscribeStateKey('currentPayment', checkAndResolve);
        const unsubscribeError = subscribeStateKey('error', checkAndResolve);
        const unsubscribeProgress = subscribeStateKey('isPaymentInProgress', checkAndResolve);
        const cleanup = createCleanupHandler([
            unsubscribePayment,
            unsubscribeError,
            unsubscribeProgress
        ]);
        checkAndResolve();
    });
}
function getAvailableExchanges(params) {
    return client_PayController.getAvailableExchanges(params);
}
function client_getPayUrl(exchangeId, params) {
    return client_PayController.getPayUrl(exchangeId, params, true);
}
function openPayUrl(exchangeId, params, openInNewTab) {
    return client_PayController.openPayUrl({ exchangeId, openInNewTab }, params, true);
}
function client_getExchanges() {
    return PayController.getExchanges();
}
function getPayResult() {
    return PayController.state.currentPayment?.result;
}
function getPayError() {
    return PayController.state.error;
}
function getIsPaymentInProgress() {
    return PayController.state.isPaymentInProgress;
}
function subscribeStateKey(key, callback) {
    return PayController.subscribeKey(key, callback);
}
function createCleanupHandler(unsubscribeFunctions) {
    return () => {
        unsubscribeFunctions.forEach(unsubscribe => {
            try {
                unsubscribe();
            }
            catch {
            }
        });
    };
}
//# sourceMappingURL=client.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/src/types/assets.js
const baseETH = {
    network: 'eip155:8453',
    asset: 'native',
    metadata: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18
    }
};
const baseUSDC = {
    network: 'eip155:8453',
    asset: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    metadata: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6
    }
};
const baseSepoliaETH = {
    network: 'eip155:84532',
    asset: 'native',
    metadata: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18
    }
};
const ethereumUSDC = {
    network: 'eip155:1',
    asset: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    metadata: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6
    }
};
const optimismUSDC = {
    network: 'eip155:10',
    asset: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
    metadata: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6
    }
};
const arbitrumUSDC = {
    network: 'eip155:42161',
    asset: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    metadata: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6
    }
};
const polygonUSDC = {
    network: 'eip155:137',
    asset: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
    metadata: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6
    }
};
const solanaUSDC = {
    network: 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    asset: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    metadata: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6
    }
};
const ethereumUSDT = {
    network: 'eip155:1',
    asset: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    metadata: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6
    }
};
const optimismUSDT = {
    network: 'eip155:10',
    asset: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    metadata: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6
    }
};
const arbitrumUSDT = {
    network: 'eip155:42161',
    asset: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    metadata: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6
    }
};
const polygonUSDT = {
    network: 'eip155:137',
    asset: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    metadata: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6
    }
};
const solanaUSDT = {
    network: 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    asset: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    metadata: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6
    }
};
const solanaSOL = {
    network: 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    asset: 'native',
    metadata: {
        name: 'Solana',
        symbol: 'SOL',
        decimals: 9
    }
};
//# sourceMappingURL=assets.js.map
;// ./node_modules/@reown/appkit/node_modules/@reown/appkit-pay/dist/esm/exports/index.js






//# sourceMappingURL=index.js.map

/***/ },

/***/ 207804
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OA: () => (/* binding */ t),
/* harmony export */   WL: () => (/* binding */ i),
/* harmony export */   u$: () => (/* binding */ e)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map


/***/ },

/***/ 925707
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MZ: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   wk: () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_1__.w)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(775694);
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44290);

//# sourceMappingURL=decorators.js.map


/***/ },

/***/ 899605
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* reexport */ e)
});

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(836752);
// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(207804);
;// ./node_modules/lit-html/directives/class-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=(0,directive/* directive */.u$)(class extends directive/* Directive */.WL{constructor(t){if(super(t),t.type!==directive/* PartType */.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(s=>t[s]).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return lit_html/* noChange */.c0}});
//# sourceMappingURL=class-map.js.map

;// ./node_modules/lit/directives/class-map.js

//# sourceMappingURL=class-map.js.map


/***/ },

/***/ 535198
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* reexport */ o)
});

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(836752);
;// ./node_modules/lit-html/directives/if-defined.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=o=>o??lit_html/* nothing */.s6;
//# sourceMappingURL=if-defined.js.map

;// ./node_modules/lit/directives/if-defined.js

//# sourceMappingURL=if-defined.js.map


/***/ },

/***/ 34748
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qy: () => (/* reexport */ u),
  Bk: () => (/* reexport */ s)
});

// UNUSED EXPORTS: literal, mathml, svg, withStatic

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(836752);
;// ./node_modules/lit-html/static.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=Symbol.for(""),o=t=>{if(t?.r===a)return t?._$litStatic$},s=t=>({_$litStatic$:t,r:a}),i=(t,...r)=>({_$litStatic$:r.reduce((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1],t[0]),r:a}),l=new Map,n=t=>(r,...e)=>{const a=e.length;let s,i;const n=[],u=[];let c,$=0,f=!1;for(;$<a;){for(c=r[$];$<a&&void 0!==(i=e[$],s=o(i));)c+=s+r[++$],f=!0;$!==a&&u.push(i),n.push(c),$++}if($===a&&n.push(r[a]),f){const t=n.join("$$lit$$");void 0===(r=l.get(t))&&(n.raw=n,l.set(t,r=n)),e=u}return t(r,...e)},u=n(lit_html/* html */.qy),c=n(lit_html/* svg */.JW),$=n(lit_html/* mathml */.ej);
//# sourceMappingURL=static.js.map

;// ./node_modules/lit/static-html.js

//# sourceMappingURL=static-html.js.map


/***/ }

}]);