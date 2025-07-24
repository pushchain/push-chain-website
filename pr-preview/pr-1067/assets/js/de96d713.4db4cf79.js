(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[21652],{

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/interop-spectrum-106422a36c33aa1ea942a9b199a40b5d.webp");

/***/ }),

/***/ 57403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/knowledge_tokenomics-21a999aac2a05aa234e58392f08294d0.webp");

/***/ }),

/***/ 74775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/knowledge_101-8867c46b0e9c119875d73866749710dc.webp");

/***/ }),

/***/ 96535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/apps-only-possible-with-shared-state-v2-01fbf9b13ffd530ca616e917283d681b.webp");

/***/ }),

/***/ 151109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21532);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(710819);
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61530);
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(452005);
/* harmony import */ var _hooks_useSiteBaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(811494);
/* harmony import */ var _css_SharedStyling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(113490);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(474848);
/* eslint-disable @typescript-eslint/no-explicit-any */// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const ChannelKnowledgeBaseComponentItem=_ref=>{let{item,index}=_ref;// for navigation
const isMobile=(0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_config_globals__WEBPACK_IMPORTED_MODULE_3__/* .device */ .jO.mobileL);const baseURL=(0,_hooks_useSiteBaseUrl__WEBPACK_IMPORTED_MODULE_5__/* .useSiteBaseUrl */ .p)()||'';const openLink=item=>{var _item$url,_item$url2;if(!(item!==null&&item!==void 0&&item.url)&&!(item!==null&&item!==void 0&&item.slug))return;let targetUrl='';if((_item$url=item.url)!==null&&_item$url!==void 0&&_item$url.startsWith('https://')){targetUrl=item.url;}else if((_item$url2=item.url)!==null&&_item$url2!==void 0&&_item$url2.startsWith('/')){targetUrl=`${baseURL}${item.url}`;}else if(item.parentSlug){targetUrl=`${baseURL}/knowledge/${item.parentSlug}/${item.slug}`;}else{targetUrl=`${baseURL}/knowledge/${item.url||item.slug}`;}window.open(targetUrl,!item.target?'_self':item.target);};const getHref=item=>{var _item$url3,_item$url4,_item$url5;if(!(item!==null&&item!==void 0&&item.url)&&!(item!==null&&item!==void 0&&item.slug))return'#';if((_item$url3=item.url)!==null&&_item$url3!==void 0&&_item$url3.startsWith('https://')||(_item$url4=item.url)!==null&&_item$url4!==void 0&&_item$url4.startsWith('http://')){return item.url;}else if((_item$url5=item.url)!==null&&_item$url5!==void 0&&_item$url5.startsWith('/')){return`${baseURL}${item.url}`;}else if(item.parentSlug){return`${baseURL}/knowledge/${item.parentSlug}/${item.slug}`;}else{return`${baseURL}/knowledge/${item.url||item.slug}`;}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Card,{background:"#FFF",padding:"24px",alignItems:"flex-start",borderRadius:"32px",justifyContent:"space-between",href:getHref(item),rel:"noopener noreferrer",onClick:()=>openLink(item),children:[(item===null||item===void 0?void 0:item.image)&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(KnowledgeImage,{src:__webpack_require__(441127)(`./${item===null||item===void 0?void 0:item.image}.webp`).default,alt:item===null||item===void 0?void 0:item.title,title:item===null||item===void 0?void 0:item.title}),(item===null||item===void 0?void 0:item.imageDirectory)&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(KnowledgeImage,{src:item.imageDirectory,alt:item===null||item===void 0?void 0:item.title,title:item===null||item===void 0?void 0:item.title}),!(item!==null&&item!==void 0&&item.image)&&!(item!==null&&item!==void 0&&item.imageDirectory)&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{style:{height:'auto',width:'100%',backgroundColor:'#D9D9D9',borderRadius:'24px',aspectRatio:'16/9'}}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_6__.H3,{margin:"24px 0 0 0",fontSize:"2rem",fontWeight:"500",fontFamily:"N27",lineHeight:isMobile?'100%':'140%',letterSpacing:"-0.64px",children:item===null||item===void 0?void 0:item.title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_6__/* .ItemH */ .Oj,{margin:"0 0 auto 0",alignItems:"flex-start",alignSelf:"flex-start",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_6__.P,{margin:"8px 0 0 0",fontSize:"1.125rem",fontWeight:"400",fontFamily:"N27",lineHeight:"140%",letterSpacing:"-0.64px",color:"#757D8D",children:item===null||item===void 0?void 0:item.subtitle})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_6__/* .ItemH */ .Oj,{alignItems:"center",justifyContent:"space-between",margin:"32px 0 0 0",cursor:"pointer",flex:"0",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .L9,{fontSize:"1.125rem",fontWeight:"500",fontFamily:"N27",lineHeight:isMobile?'100%':'140%',letterSpacing:"-0.64px",color:"#D548EC",children:item!==null&&item!==void 0&&item.ctatitle?item===null||item===void 0?void 0:item.ctatitle:'Read More'}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__/* .TbArrowUpRight */ .V4E,{color:"#D548EC",size:24})]})]},index);};const Card=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.a.withConfig({displayName:"ChannelKnowledgeBaseComponentItem__Card",componentId:"sc-14ixyhi-0"})(["cursor:pointer;background:#fff;padding:24px;border-radius:32px;display:flex;flex-direction:column;&:focus,&:active{outline:none;background:#fff;color:inherit;}user-select:none;*{user-select:none;}"]);const KnowledgeImage=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)(_css_SharedStyling__WEBPACK_IMPORTED_MODULE_6__/* .Image */ ._V).withConfig({displayName:"ChannelKnowledgeBaseComponentItem__KnowledgeImage",componentId:"sc-14ixyhi-1"})(["width:100%;aspect-ratio:16/9;border-radius:24px;"]);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChannelKnowledgeBaseComponentItem);

/***/ }),

/***/ 169646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pcisolatedenv-8d8133cad43a0de8148717945f648b00.webp");

/***/ }),

/***/ 201272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/frequently-asked-questions-34f6ba0497cc743e4879467a47375828.webp");

/***/ }),

/***/ 222054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q4: () => (/* binding */ sendEmailToChainMailingList),
/* harmony export */   d: () => (/* binding */ sendEmailToMailingList),
/* harmony export */   mI: () => (/* binding */ subscribeToSpace)
/* harmony export */ });
/* unused harmony exports loadKPIData, getBlogData, getChannels, getChannelsSearch, getNotifications, getSubscribers */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(494335);
/* eslint-disable @typescript-eslint/no-unused-vars */// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
const awaitTimeout=delay=>new Promise(resolve=>setTimeout(resolve,delay));const BACKEND_API_URL='https://api.analytics.epns.io/apis/analytics';const ANALYTICS_API_BASE='https://backend.epns.io/apis/v1';// const BACKEND_API_URL = 'https://api.analytics.push.org/apis/analytics';
// const ANALYTICS_API_BASE = 'https://backend.push.org/apis/v1';
async function loadKPIData(){return axios.all([axios.post(`${BACKEND_API_URL}/get_notifs_sent`),axios.post(`${BACKEND_API_URL}/get_total_subscribers_count`),axios.post(`${BACKEND_API_URL}/get_total_channel_count`)]).then(axios.spread(function(){for(var _len=arguments.length,responses=new Array(_len),_key=0;_key<_len;_key++){responses[_key]=arguments[_key];}const[totalNotifsSentResponse,totalSubscribersCountResponse,totalChannelCountResponse]=responses||[];return{totalNotifsSent:totalNotifsSentResponse.data,totalSubscribersCount:totalSubscribersCountResponse.data,totalChannelCount:totalChannelCountResponse.data};})).catch(errors=>{throw Error(errors);});}async function getBlogData(limit){if(limit===void 0){limit=4;}const requrl='https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ethereum-push-notification-service/';// await awaitTimeout(50000);
return axios.get(requrl).then(apiResponse=>{const blogs=apiResponse===null||apiResponse===void 0?void 0:apiResponse.data.items;return blogs.slice(0,limit);}).catch(error=>{throw Error(error);});}async function sendEmailToMailingList(_ref){let{email}=_ref;const details={name:'',email:email,list:'YPwxHS892tH8Nhs13wzKqWbQ',api_key:'TdzMcZVNTn1mjtAJHBpB',boolean:true};let formBody=[];for(const property in details){const encodedKey=encodeURIComponent(property);const encodedValue=encodeURIComponent(details[property]);formBody.push(encodedKey+'='+encodedValue);}formBody=formBody.join('&');return fetch('https://tools.push.org/sendy/subscribe',{method:'POST',mode:'cors',headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},body:formBody}).then(response=>{return response.text();});}async function sendEmailToChainMailingList(_ref2){let{email}=_ref2;const details={name:'',email:email,list:'lh9Lq2FicS763EGk8Fhh763zZQ',api_key:'TdzMcZVNTn1mjtAJHBpB',boolean:true};let formBody=[];for(const property in details){const encodedKey=encodeURIComponent(property);const encodedValue=encodeURIComponent(details[property]);formBody.push(encodedKey+'='+encodedValue);}formBody=formBody.join('&');return fetch('https://tools.push.org/sendy/subscribe',{method:'POST',mode:'cors',headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},body:formBody}).then(response=>{return response.text();});}async function getChannels(page){const requrl=`https://backend.push.org/apis/v1/channels?page=${page}&limit=9&sort=subscribers&order=desc`;return axios.get(requrl).then(apiResponse=>{var _apiResponse$data;const channels=apiResponse===null||apiResponse===void 0||(_apiResponse$data=apiResponse.data)===null||_apiResponse$data===void 0?void 0:_apiResponse$data.channels;return channels;}).catch(error=>{throw Error(error);});}const getChannelsSearch=async(page,query)=>{const requrl=`https://backend.push.org/apis/v1/channels/search?page=${page}&limit=9&order=desc&query=${query}`;return axios.get(requrl).then(apiResponse=>{var _apiResponse$data2;const channels=apiResponse===null||apiResponse===void 0||(_apiResponse$data2=apiResponse.data)===null||_apiResponse$data2===void 0?void 0:_apiResponse$data2.channels;return channels;}).catch(error=>{throw Error(error);});};const getNotifications=async _ref3=>{let{startDate,endDate,channel,chain}=_ref3;try{const res=await axios.get(`${ANALYTICS_API_BASE}/analytics/notification`,{params:{startDate,endDate,channel,source:chain}});// console.log('notifications', res.data);
return res.data;}catch(e){console.log('Error occured in notification',e);return null;}};const getSubscribers=async _ref4=>{let{startDate,endDate,channel,chain}=_ref4;try{const res=await axios.get(`${ANALYTICS_API_BASE}/analytics/subscriber`,{params:{startDate,endDate,channel,source:chain}});//console.log('subscribers on chain', chain, res.data);
return res.data;}catch(e){console.log('Error occured in subscribers',e);return null;}};const subscribeToSpace=async formData=>{const requestOptions={'Content-Type':'application/json'};try{const res=await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(`${ANALYTICS_API_BASE}/w2w/waitlist`,formData,requestOptions);return res;}catch(e){// console.log('Error occured in subscribers', e);
// console.log(e?.response.data?.error.info);
return e;}};

/***/ }),

/***/ 227602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/understand-proof-of-stake-0e557c865dc3ac84a6be9e2670ebe6cb.webp");

/***/ }),

/***/ 252296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/evolution-of-push-a2b1ee18b9321f0e156cc7243df72278.webp");

/***/ }),

/***/ 282843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/consumer-apps-7bf5847264d951e4def82c229040558b.webp");

/***/ }),

/***/ 340960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pcuniversalapp-1c216014abf254e664cc3969243391ed.webp");

/***/ }),

/***/ 353760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ PageMeta)
/* harmony export */ });
const PageMeta={HOME:{pageTitle:'Home',pageDescription:'Homepage of Push Chain - Any Chain. Any User. Any App'},TOS:{pageTitle:'Terms of Service',pageDescription:'Terms of Service of Push Chain'},PRIVACY:{pageTitle:'Privacy Policy',pageDescription:'Privacy Policy of Push Chain'},PRIVACYFORMOBILE:{pageTitle:'Mobile Apps Privacy Policy',pageDescription:'Mobile Apps Privacy Policy of Push Chain'},FAQS:{pageTitle:'FAQ',pageDescription:'Frequently Asked Questions of Push Chain'},FRENS:{pageTitle:'Frens',pageDescription:'Explore integrations done by our frens'},SPACES:{pageTitle:'Spaces',pageDescription:"Explore Push Spaces and how to get started with it's integration"},CHEAT:{pageTitle:'Cheat Sheet',pageDescription:'Explore Push Cheat Sheet and how to get started with it'},ABOUTUS:{pageTitle:'About Us',pageDescription:"Learn what makes Push Chain tick... it's the team"},BRB:{pageTitle:'Billion Reasons to Build (BRB)',pageDescription:'Solve a Hard Problem from top global web3 projects and earn prize and recognition'},DOCS:{pageTitle:'Documentation Hub',pageDescription:'One stop shop for all your Push Chain documentation needs'},BLOG:{pageTitle:'Push Blog',pageDescription:'Learn about the latest updates and news from Push Chain'},BOOTCAMP:{pageTitle:'BRB Bootcamp Campaign',pageDescription:'BRB Bootcamp is the go-to place to learn every aspect of the web3 ecosystem from fundamentals to shipping your first project'},CHAIN:{pageTitle:'Push Chain | Any Chain. Any Wallet. Any App.',pageDescription:'Push Chain is a shared state L1 blockchain for Universal/Interopable Apps. Capable of doing transactions from any chain, unifying all L1s, L2s and enabling apps from any chain to be accessed by the users of any chain.'},KNOWLEDGE:{pageTitle:'Push Chain | Knowledge Base',pageDescription:'Discover everything for tutorials to code base to what makes Push Chain tick at the knowledge hub.'},PARTNERS:{pageTitle:'Push Chain | Knowledge Base Partners',pageDescription:'Meet our Partners'},ARTICLE:{pageTitle:'Push Chain | Knowledge Base',pageDescription:'Discover everything for tutorials to code base to what makes Push Chain tick at the knowledge hub.'},PUSH101:{pageTitle:'Push Chain | Knowledge Base | Push101',pageDescription:'Learn about basics of Push Chain. The innovations it introduces, what makes it tick and why is it required!'},DEEPDIVES:{pageTitle:'Push Chain | Knowledge Base | Deepdives',pageDescription:'Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you ❤️'},TOKENOMICS:{pageTitle:'Push Chain | Knowledge Base | Tokenomics',pageDescription:`Learn how Push Chain's tokenomics incentivizes all actors and ensures sustainable network that's built to last`},FAQ:{pageTitle:'Push Chain | Knowledge Base | Push Chain FAQ',pageDescription:`The place to find answers to all the popular questions the community has asked. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.`},NEWPAGE:{pageTitle:'Push Chain | Knowledge Base | Deepdives',pageDescription:'Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you ❤️'},TEMPLATE:{pageTitle:'Push Template',pageDescription:'Push Template'}};

/***/ }),

/***/ 360692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,UklGRvIGAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSIcBAAARkKJt27JFzxL+78NJJHcSjRV4c4fmJO3uzri7VHfZgPsM7u72pIH7uWEBETEBcoo7FXc/zsx8vFvhnJC6X/rfX/UnIf6NHvlNPF3GpB5zKoOsdF2PvV5KVbylwK1iotQVha6k0sSNKng0jsR5q/B3DkevGj6nKNi22EkncJbV9JNjN6DGd83C961mo61G1PyMUfSK3UqMzTklPGcSPM8wH2zRqpStFj85fhqUKGkJ7gHLA5jPMsuyD6pGaWtQD3kegjyzPLMeTK4S52I6mDowr5heYWaYZiBJSp2EqOKqQnRzdSNucN1AvOB6gfjC9QXxl+sPYpZrBrHItYhY4FpATHJNIL5zfUO84nqJuMp1BVHOVY5w15nWHYR8YHon0EamWoxs80wKeJCnEyXTLKsCLzngOKjAySOON2Lo+cPwy2MhQSt2s4Fim7hhNZ8g1oGjNqOBYu++OMQdPneFsnwZtVwmrO6VTcTmZVeI3Z7Rw6Mdjva4wu7b9G50fWd/f2d99F2Tr5ziAFZQOCBEBQAAkBcAnQEqQABAAAEAHCWgAzP+TfD+ZjYGpyGMhU7bDzAfsP+uXvaegn/Ab5F6AHlvext/e/+j6YF3Z/Xujb9lSTiPP81uXOSXGkf6LjW7zXCbyAeqX/N/97+1ecT8r/tn/V9wL+N/0L/df27tQ/sz7G/6+nZrcKjRM78yHr67A9/tJl+CJc4/vaCW511QfeuUC059a1f/fMschTKpWACi00DfxGZUvFOuw+qvrCIEsvCeVt0rxbmscRQQrUVCgphAXKh+lwAA/v+CCa/65xiXOh8WOaMkJeaObeyZ5p4Z+IbZOGkS1PWBm0Id8wW+me4deuK7JSzoEW/faXcqmIMWzC5+9K0ylgu1iLwkAuzUOSXH5IIIyN0TsCmdB4G03II/rSQufF/LHnev0TSRuOMoqvvYqbyTOG6Ue6A3BfKzf/w3ILKhbr8XnZr4cu4aN0cnQhFabr0Gtv1hWmMKQ3cwU6o1SxnovWZxL6t9QZPqBtrC0iaP529Qx0dHIqAhNRbraqA1RUK2oBw+DmGj9rGQKMRTGAGai/XON2aWUPxRaaGVXPBisk4rhX0Du846CnTBV3J97HmxxeFhebBf/7CnxExz0wbOVidosMkWHZuVXhisdx9levpDH//+l5Ea6120i8UXkxi07/Zn3O76iHY1EY17nwh9w9tUpv2TUJAU/yhI7T3xMFcU33iZaIR/8CE8o4YK9EFHJKYzgcRORXDVr3hbIYiPvW7c/web+z3TPMpg5NfkDWfippjOjNGxJan8oh8fljMvJ+uTPCn1WBPpKo5h8tisSNau31D1X0qdfASmHG7/UC2IwKwfu8wB6TLtDzfzglJ4ecq7ddx1VVymrBDNJRAq6cEx+IBeEB/OSYZ/91Y/O2R7PvNc5NbvWl1HMfcnzr0fVwXJhYLn/87/N48+DQYsiSYwmNFngvId+4/5478oxyBlY1aKaBO7OaXts3rwbM+L5QkeNOD/z8HFPIl/o1woc24GD9yT4ffq3rqV9pl+bKsB2Gt/eKqmk+mxiC3cSMLUgFv8DmM8TGIhWyN9MnNzLBR1n/6hyNeliew8ZeeZNCq01xDTCD8U39yfyeKL22BTAKSuT+rczKank9yICJVl0jUqxi977gAMRGwcTu8zPqA2TFJ4VkbtOD89rVCfl0PjaVD46xYmZOR2XsXFghpyXYA+28R+Mc72v6hUC3tl7M3knNETy6DugT3e+ihfdtX7l3i5vNAbj61+eZp3Q78KzKgXrgyEIn8e7Kee14COrvqldskSRFHAn6Xg7SUEHncfpgfwU/ESolo14/BcPZNrDhFetXDggrsng644WwiaqHWZLimDh0AQeAQciuLyu7dgjbbftYSQH986D2s2wItyvdIf58Hwc5JWEXSGkQVZSs1G67EVTpp2QZWPw0ZKUVvZTKH2HW7WlGn6uWl9jBoUWV6pN3UcwpsHXeu7iA6labQCfUWelOL7yvgw5NwJlMtA4HEkqzJP3sOklrm5WK5rKoICnWe8yg5XUTPJQ69REX+tXmXi87vN47os1MMwvREiIJWLgIeWkxTHB6FRwRwMiP9fKoJa4xSlSUnrwyqLM6+2+5D7Eu0oPbXQaK/BdkmVAMHr3/apV7rB6npFnZ+4/7ne7r6+rUBAxTtwS34Ws94Y/rbQ2rA/+uEtoVsuZ25KV6/tIvV2B6HzYhCO2+DvMLquqYEnvMGMQ158oMbpD19HHVeNgoY2DNu/x5WpdHHOtAVL87qBPn1rxqHP+P8He+M3OsBH+WXVf2I/x5xv8zRcvJ3FlGJtSAZKEgAAAA==");

/***/ }),

/***/ 428117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/innovations-by-push-chain-d4de94c63723c0248a825a015a1f2c78.webp");

/***/ }),

/***/ 441127:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Easter-Egg-5.webp": 360692,
	"./another-l1.webp": 649585,
	"./apps-only-possible-with-shared-state-v1.webp": 535862,
	"./apps-only-possible-with-shared-state-v2.webp": 96535,
	"./benchmarking-push-chain-nodes.webp": 813788,
	"./consumer-apps.webp": 282843,
	"./evolution-of-push-chain.webp": 512300,
	"./evolution-of-push.webp": 252296,
	"./faq/pcisolatedenv.webp": 169646,
	"./faq/pcoverview.webp": 483587,
	"./faq/pcuniversalapp.webp": 340960,
	"./faq/pcwalletabstraction.webp": 699599,
	"./frequently-asked-questions.webp": 201272,
	"./innovations-by-push-chain.webp": 428117,
	"./interop-spectrum.webp": 75,
	"./knowledge_101.webp": 74775,
	"./knowledge_deepdives.webp": 869790,
	"./knowledge_devdocs.webp": 981851,
	"./knowledge_tokenomics.webp": 57403,
	"./push-chain-partners.webp": 996204,
	"./randomized-parallel.webp": 464487,
	"./tokenomics/appusecases.webp": 503530,
	"./tokenomics/consumerusecases.webp": 572371,
	"./tokenomics/cover-image.webp": 792530,
	"./tokenomics/usecasesmain.webp": 501030,
	"./tokenomics/vestingdetailspc.webp": 974706,
	"./tokenomics/vestingpc.webp": 573930,
	"./understand-proof-of-stake.webp": 227602,
	"./why-push-chain.webp": 786977
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 441127;

/***/ }),

/***/ 447159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChainCanvas)
/* harmony export */ });
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61530);
/* harmony import */ var _site_src_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(452005);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(602046);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(296540);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(185692);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(474848);
const COLORS=['#4B75FF','#FC564A','#2EC780','#E3B92D','#E492FF'];const TAGS=['universal dex','universal defi','unified social','universal ai agents','omni dao','unified gaming','universal marketplace','any chain naming service','any chain chess','universal prediction market','omni chain poker','any chain public funding','omni NFTs','omni governance','omni notifications','unified web3 chat'];function ChainCanvas(){const canvasRef=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);const engineRef=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);const renderRef=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);const[ref,inView]=(0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__/* .useInView */ .Wx)({threshold:1.0});const isMobile=(0,_site_src_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_site_src_config_globals__WEBPACK_IMPORTED_MODULE_0__/* .device */ .jO.mobileL);const isTablet=(0,_site_src_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_site_src_config_globals__WEBPACK_IMPORTED_MODULE_0__/* .device */ .jO.tablet);const isLaptop=(0,_site_src_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_site_src_config_globals__WEBPACK_IMPORTED_MODULE_0__/* .device */ .jO.laptopL);const[displayedTags,setDisplayedTags]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(TAGS);const updateTagsForScreenSize=()=>{if(isMobile){setDisplayedTags(TAGS.slice(0,6));// Show only 6 tags on mobile and tablets
}else{setDisplayedTags(TAGS);// Show all tags on larger screens
}};(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{updateTagsForScreenSize();// Initial update on component mount
// Resize listener
const handleResize=()=>{updateTagsForScreenSize();};window.addEventListener('resize',handleResize);return()=>{window.removeEventListener('resize',handleResize);};},[isMobile]);(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{if(!inView)return;// Exit early if not in view
const Engine=(matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine);const Render=(matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render);const World=(matter_js__WEBPACK_IMPORTED_MODULE_2___default().World);const Bodies=(matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies);const Mouse=(matter_js__WEBPACK_IMPORTED_MODULE_2___default().Mouse);const MouseConstraint=(matter_js__WEBPACK_IMPORTED_MODULE_2___default().MouseConstraint);// Create engine
const engine=Engine.create();engineRef.current=engine;// Create renderer
const render=Render.create({canvas:canvasRef.current,engine:engine,options:{width:window.innerWidth,height:window.innerHeight,wireframes:false,background:'transparent'}});renderRef.current=render;// Create walls
const walls=[Bodies.rectangle(window.innerWidth/2,-10,window.innerWidth,20,{isStatic:true,render:{fillStyle:'transparent'}}),Bodies.rectangle(window.innerWidth/2,window.innerHeight+10,window.innerWidth,20,{isStatic:true,render:{fillStyle:'transparent'}}),Bodies.rectangle(-10,window.innerHeight/2,20,window.innerHeight,{isStatic:true,render:{fillStyle:'transparent'}}),Bodies.rectangle(window.innerWidth+10,window.innerHeight/2,20,window.innerHeight,{isStatic:true,render:{fillStyle:'transparent'}})];const paddingX=isTablet?15:isLaptop?15:28;// Horizontal padding
const paddingY=isTablet?12:isLaptop?16:21;// Vertical padding
const fontSize=isTablet?35:isLaptop?37:50;// Font size
// Create tags
const tags=displayedTags.map((tag,index)=>{const ctx=document.createElement('canvas').getContext('2d');ctx.font=`${fontSize}px N27`;const textWidth=ctx.measureText(tag).width;const width=Math.max(textWidth+paddingX*2);const height=fontSize+paddingY*2;const x=Math.random()*(window.innerWidth-width)+width/2;const y=Math.random()*(window.innerHeight-height)+height/2;return Bodies.rectangle(x,y,width,height,{chamfer:{radius:isTablet?26:isLaptop?28:39},render:{fillStyle:COLORS[index%COLORS.length],strokeStyle:'#000',lineWidth:12},restitution:0.5,friction:0.1,label:tag});});// Add mouse control
const mouse=Mouse.create(render.canvas);const mouseConstraint=MouseConstraint.create(engine,{mouse:mouse,constraint:{stiffness:0.2,render:{visible:false}}});// Add all bodies to the world
World.add(engine.world,[...walls,...tags,mouseConstraint]);// Create the runner
const runner=matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner.create();// Start the engine and renderer
matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner.run(runner,engine);// Use the runner to manage the engine
matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render.run(render);// Start the renderer
// Add text overlay
const canvas=canvasRef.current;const ctx=canvas.getContext('2d');matter_js__WEBPACK_IMPORTED_MODULE_2___default().Events.on(render,'afterRender',()=>{ctx.font=`400 ${fontSize}px N27`;// Font style
ctx.textBaseline='middle';// Vertically align text
ctx.fillStyle='#FFFFFF';const letterSpacing=-1.5;// Adjust letter spacing for tighter characters
tags.forEach(tag=>{ctx.save();ctx.translate(tag.position.x,tag.position.y);// Position tag
ctx.rotate(tag.angle);// Rotate text with tag
// Calculate total width of the text with custom letter spacing
let totalWidth=0;for(const char of tag.label){totalWidth+=ctx.measureText(char).width+letterSpacing;}totalWidth-=letterSpacing;// Remove extra spacing from the last character
// Center the text block by setting initial xOffset
let xOffset=-totalWidth/2;// Start drawing from the center
// Draw each character
for(const char of tag.label){ctx.fillText(char,xOffset,0);// Draw character
xOffset+=ctx.measureText(char).width+letterSpacing;// Increment xOffset
}ctx.restore();// Restore context state
});});// Handle resize
const handleResize=()=>{render.canvas.width=window.innerWidth;render.canvas.height=window.innerHeight;matter_js__WEBPACK_IMPORTED_MODULE_2___default().Body.setPosition(walls[0],matter_js__WEBPACK_IMPORTED_MODULE_2___default().Vector.create(window.innerWidth/2,-10));matter_js__WEBPACK_IMPORTED_MODULE_2___default().Body.setPosition(walls[1],matter_js__WEBPACK_IMPORTED_MODULE_2___default().Vector.create(window.innerWidth/2,window.innerHeight+10));matter_js__WEBPACK_IMPORTED_MODULE_2___default().Body.setPosition(walls[3],matter_js__WEBPACK_IMPORTED_MODULE_2___default().Vector.create(window.innerWidth+10,window.innerHeight/2));};window.addEventListener('resize',handleResize);return()=>{window.removeEventListener('resize',handleResize);Render.stop(render);World.clear(engine.world,false);Engine.clear(engine);};},[inView,displayedTags]);// Only re-run when inView or displayedTags change
return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Wrapper,{ref:ref,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledCanvas,{ref:canvasRef})});}// Styled components
const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.div.withConfig({displayName:"ChainCanvas__Wrapper",componentId:"sc-h9o6x9-0"})(["width:100%;height:100%;overflow:hidden;"]);// Styled canvas element
const StyledCanvas=styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.canvas.withConfig({displayName:"ChainCanvas__StyledCanvas",componentId:"sc-h9o6x9-1"})(["position:absolute;top:0;left:0;width:100%;height:100%;touch-action:none;z-index:10;padding:10px 88px;@media ","{padding:10px 28px;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_0__/* .device */ .jO.mobileL);

/***/ }),

/***/ 464487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/randomized-parallel-c65e48013a7422b4d8c7bb468b531331.webp");

/***/ }),

/***/ 483587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pcoverview-d33d0ec5feb42f5fea2e83d71ba4f2f1.webp");

/***/ }),

/***/ 501030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/usecasesmain-7bf3f161414466d0fcb388aebc850a92.webp");

/***/ }),

/***/ 503530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/appusecases-9fe86d3d9cad2e692b490a8d75c340da.webp");

/***/ }),

/***/ 512300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/evolution-of-push-chain-aa6dad1374225da472a1f805834ae52f.webp");

/***/ }),

/***/ 535862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/apps-only-possible-with-shared-state-v1-74fde0c917ca61aa3ce1209027888301.webp");

/***/ }),

/***/ 572371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/consumerusecases-fb5a802dd9698e5f6eec1feb441e7bb3.webp");

/***/ }),

/***/ 573930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vestingpc-060f57f17be4b64981eaa404fabe5572.webp");

/***/ }),

/***/ 578013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ ChainEmailSignup)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(154263);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(635504);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(21532);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(222054);
;// ./src/hooks/useEmailValidationAndSend.ts
/* eslint-disable no-useless-escape */// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
// Internal Components
const MESSAGES={SUCCESS:'Thanks for subscribing!',ERROR:'Something went wrong!',REPEAT:'Already subscribed!',INVALID:'Invalid Email!'};const validateEmail=email=>{const re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase());};const useEmailValidationAndSend=chain=>{const[emailSuccess,setEmailSuccess]=(0,react.useState)(false);const[emailError,setEmailError]=(0,react.useState)('');const[isLoading,setIsLoading]=(0,react.useState)(false);const onEmailSubmit=async e=>{e.preventDefault();const formData=Object.fromEntries(new FormData(e.target));if(validateEmail(formData.email)){try{setIsLoading(true);// Dynamically choose the API based on `chain`
const apiToCall=chain?api/* sendEmailToChainMailingList */.Q4:api/* sendEmailToMailingList */.d;const sendyAPIResponse=await apiToCall({email:formData.email,name:formData.email});// check https://sendy.co/api for details
if(sendyAPIResponse.toString()==='1'){setEmailError('');setEmailSuccess(MESSAGES.SUCCESS);}else{setEmailSuccess('');setEmailError(sendyAPIResponse);}}catch(e){setEmailSuccess('');setEmailError(MESSAGES.ERROR);console.log('emailSent error: ',e);}finally{setIsLoading(false);}}else{setEmailSuccess('');setEmailError(MESSAGES.INVALID);}};return[isLoading,emailSuccess,emailError,onEmailSubmit];};/* harmony default export */ const hooks_useEmailValidationAndSend = (useEmailValidationAndSend);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/Chain/ChainEmailSignup.tsx
/* eslint-disable no-useless-escape */// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Configs
// Internal Components
const ChainEmailSignup=props=>{const[isLoading,apiResponse,emailError,onEmailSubmit]=hooks_useEmailValidationAndSend(true);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Box,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper,{background:props.background,border:props.borderColor,onSubmit:onEmailSubmit,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SignupInputField,{type:"text",name:"email",placeholder:"Email Address",background:props.background,inputWidth:props.inputWidth,textColor:props.textColor,tabIndex:0,required:true}),props.showButton&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Button,{tabIndex:0,type:"submit",children:[!isLoading&&/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* AiOutlineArrowRight */.ifP,{size:32,color:"#e492ff"}),isLoading&&/*#__PURE__*/(0,jsx_runtime.jsx)(bi_index_esm/* BiLoaderAlt */.qzG,{size:32,className:"loader",color:"#FFF"})]}),isLoading?/*#__PURE__*/(0,jsx_runtime.jsx)(MaskInput,{}):null]})]}),apiResponse&&/*#__PURE__*/(0,jsx_runtime.jsx)(ResponseSpan,{className:"msg",color:"#000",children:apiResponse}),!apiResponse&&emailError&&/*#__PURE__*/(0,jsx_runtime.jsx)(ResponseSpan,{className:"msg",color:"#000",children:emailError})]});};const Box=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainEmailSignup__Box",componentId:"sc-eq2mx-0"})(["display:flex;flex-direction:column;flex:1;@media ","{& .msg{font-size:18px;margin:10px auto 0px auto;}}"],globals/* device */.jO.tablet);const Wrapper=styled_components_browser_esm/* default */.Ay.form.withConfig({displayName:"ChainEmailSignup__Wrapper",componentId:"sc-eq2mx-1"})(["position:relative;display:flex;flex:1;gap:12px;align-items:center;padding:5px 0px;justify-content:space-between;@media ","{gap:12px;}"],globals/* device */.jO.tablet);const Button=styled_components_browser_esm/* default */.Ay.button.withConfig({displayName:"ChainEmailSignup__Button",componentId:"sc-eq2mx-2"})(["cursor:pointer;background:#000;border-radius:16px;display:flex;justify-content:center;align-items:center;height:72px;width:72px;white-space:nowrap;border:0;@media ","{min-width:auto;font-size:12px;}@media ","{height:48px;width:48px;}& svg{height:1.5rem;width:1.5rem;}@keyframes loadingAnimation{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}& .loader{animation-name:loadingAnimation;animation-duration:1500ms;animation-iteration-count:infinite;animation-timing-function:linear;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const SignupInputField=styled_components_browser_esm/* default */.Ay.input.withConfig({displayName:"ChainEmailSignup__SignupInputField",componentId:"sc-eq2mx-3"})(["all:unset;box-sizing:border-box;color:#a3a7ac;font-family:N27;font-size:24px;font-style:normal;font-weight:400;line-height:100%;letter-spacing:-0.48px;background:",";width:",";padding:24px;flex:1;border-radius:16px;@media ","{min-width:auto;}@media ","{font-size:16px;padding:16px 24px;}&:placeholder{color:#a3a7ac;opacity:1;}"],props=>props.background||'#ffffff',props=>props.inputWidth||'100%',globals/* device */.jO.laptop,globals/* device */.jO.mobileL);const MaskInput=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainEmailSignup__MaskInput",componentId:"sc-eq2mx-4"})(["position:absolute;background:#fff;top:0;left:0;right:0;bottom:0;border-radius:21px;opacity:0.4;z-index:10;"]);const ResponseSpan=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling/* Span */.L9).withConfig({displayName:"ChainEmailSignup__ResponseSpan",componentId:"sc-eq2mx-5"})(["margin:0;padding:0;font-family:FK Grotesk Neue;font-style:normal;font-weight:400;font-size:15px;margin-top:12px;"]);

/***/ }),

/***/ 648911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Chain_ChainBottomComponent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-icons/tb/index.esm.js
var index_esm = __webpack_require__(710819);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(21532);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./src/hooks/useMediaQuery.ts
var useMediaQuery = __webpack_require__(452005);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(154263);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
// EXTERNAL MODULE: ./src/hooks/useSiteBaseUrl.tsx
var useSiteBaseUrl = __webpack_require__(811494);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/Accordion/index.tsx
/* eslint-disable @docusaurus/no-html-links */// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
// Internal Components
// Internal Configs
const Accordion=_ref=>{let{items,fontFamily,firstOpen,textColor,fontWeight,fontSize}=_ref;const[activeIndex,setActiveIndex]=(0,react.useState)(firstOpen===false?null:0);const isMobile=(0,useMediaQuery/* default */.A)(globals/* device */.jO.mobileL);const toggleAccordion=index=>{setActiveIndex(activeIndex===index?null:index);};const baseUrl=(0,useSiteBaseUrl/* useSiteBaseUrl */.p)()||'';return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:items.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(AccordionSection,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(AccordionParent,{onClick:()=>toggleAccordion(index),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.H2,{color:textColor||'#FFF',fontSize:fontSize?fontSize:isMobile?'20px':'22px',fontFamily:fontFamily,fontWeight:fontWeight||'400',lineHeight:"140%",children:item.title||item.question}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:activeIndex===index?/*#__PURE__*/(0,jsx_runtime.jsx)(ai_index_esm/* AiOutlineMinus */.NIP,{color:textColor||'#FFF',size:22}):/*#__PURE__*/(0,jsx_runtime.jsx)(ai_index_esm/* AiOutlinePlus */.tNe,{color:textColor||'#FFF',size:22})})]}),activeIndex===index&&item.content!==undefined&&/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling.H3,{color:textColor||'#FFF',fontSize:isMobile?'16px':'19px',fontFamily:fontFamily,fontWeight:"400",lineHeight:"150%",padding:"0 0 24px 0",children:[item.content,item.link&&/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{color:"#FFF",fontFamily:fontFamily,fontSize:"16px",fontWeight:"300",lineHeight:"140%",letterSpacing:"normal",target:"_blank",href:item.link,children:[' ',"- Link"]})]})}),activeIndex===index&&item.renderAnswer!==undefined&&item.renderAnswer(baseUrl)]},index))});};const AccordionSection=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"Accordion__AccordionSection",componentId:"sc-fx4kxq-0"})(["border-bottom:1px solid #2a2a39;h3{white-space:pre-wrap;}"]);const AccordionParent=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"Accordion__AccordionParent",componentId:"sc-fx4kxq-1"})(["padding:24px 0;display:flex;flex-direction:row;flex:1;justify-content:space-between;align-items:center;cursor:pointer;gap:24px;"]);/* harmony default export */ const components_Accordion = (Accordion);
// EXTERNAL MODULE: ./static/assets/website/shared/discord.svg
var discord = __webpack_require__(974250);
// EXTERNAL MODULE: ./src/components/Chain/ChainCanvas.tsx
var ChainCanvas = __webpack_require__(447159);
// EXTERNAL MODULE: ./src/components/Chain/ChainEmailSignup.tsx + 1 modules
var ChainEmailSignup = __webpack_require__(578013);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(175489);
;// ./src/components/Chain/config/ChainFAQconfig.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
// Internal Components
// Internal Configs
const General=[{question:'What is Push Chain?',section:'General',renderAnswer:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(Answer,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:["We are building Push Chain, a ",/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"shared state L1"})," blockchain for",' ',/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Universal Apps"}),". Push Chain enables txs from any chain (Eth, Solana, EVM, or non-EVM) enabling apps from any chain to be accessed by the users of any chain (polymarket from any chain, pump.fun from any chain, etc)."]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{children:"It enables apps to be completely interoperable by allowing developers to deploy a single universal smart contract on Push Chain. It also enables new paradigm of apps where users of all chains can come together for shared app experiences (universal AI agents, socials, etc)."})]})},{question:'How does Push Chain work?',section:'General',renderAnswer:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(Answer,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{children:"Push Chain is a Proof-of-Stake (PoS) L1 blockchain that is designed to eliminate fragmentation across all chains."}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{children:"It leverages on several innovations such as specialized validators, off-chain relayers and generalized solvers working in tandem to ensure a user or developer is able to read and write on any chain. This eliminates the silos of different chains, wallet conventions, liquidity fragmentation and more."}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{children:"It introduces some groundbreaking innovations such as:"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Fee and Wallet abstraction"})," - allowing wallets/users of any chain to interact natively while being on the chain of their choice."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Universal Wallet"})," - ensuring user can login via social or email and still have non-custodial wallets created for them for all chains (Ethereum, Bitcoin, Solana, etc)."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Shared State"})," - enabling developers to read the state of any wallet or smart contract of any other blockchain via smart contract on Push Chain."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Programmable Solvers"})," - ensures that a developer can create a basic path for cross chain actions (write actions) based on the shared state."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Universal Smart Contracts"})," - giving developers ability to use shared state and generalized solvers for read and write action in chain agnostic fashion. And enables users to use fees and wallet abstraction to access any app or any chain without any hassle."]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{children:"Push Chain uses all these innovations to enable reading (shared state) or writing to different chains (programmable solvers), all controlled by the universal smart contract. The fee and wallet abstraction further enables a seamless, user centric approach as the learnings for a user is abstracted away no matter from what chain they chose to interact."}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:["This results in ",/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"universal applications"})," for web3. In this paradigm, instead of being a user of \"Uniswap on Ethereum,\" \"Uniswap on Polygon,\" or \"Uniswap on Arbitrum,\" a person simply becomes a",' ',/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"user of Uniswap"}),"."]})]})},{question:'Why is Push Chain unique for users?',section:'General',renderAnswer:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(Answer,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:["Push Chain addresses specific gaps in the existing blockchains, such as interoperability, state access across chains, programmable solvers and wallet abstraction resulting in a ",/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"full stack interop"}),". While existing blockchains are robust, they operate in their own eco-system and an aggregator to unite these chains are needed."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:["Push Chain\u2019s focus is on being a ",/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"shared state chain"})," for universal (interoperable) applications acting as a unifying layer where all chains can come together and use PC as universal hub or do settlement between them."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:["PC offers a new paradigm of web3 that works from ",/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Any Chain."})," For",' ',/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Any Wallet/User."})," And is suitable for ",/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Any App."})]})]})},{question:'How do I get involved with Push Chain Grants?',section:'General',renderAnswer:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(Answer,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{children:"While we are thrilled with the early interest coming from developers to build universal apps, we are still in the governance phase for ratifying our evolution from Push Protocol to Push Chain and hence do not have a grants program now."}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:["This will change very soon once the community approves of Push Chain! Meanwhile, to frontrun other grantees, please drop us an email at",' ',/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:"mailto:team@push.org",children:"team@push.org"})," with the subject line as ",/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Grant MEOW"})," and your app idea. Or, simply follow",' ',/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:"https://x.com/PushChain",target:"_blank",children:"@PushChain"}),' ',"for more updates around the grants program and its release."]})]})},{question:'What will happen to Push Protocol?',section:'General',renderAnswer:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(Answer,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{children:"Today's push notification and chat protocols will benefit significantly from being built on top of Push Chain. A dedicated section of the team will focus on maintaining and enhancing these protocols, ensuring they remain the de-facto standard in their respective domains."}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{children:"By aligning with Push Chain, notifications and chat sent through the protocols will be processed as transactions on the chain. This integration not only enables these protocols to accrue value but also marks the beginning of a new chapter in their evolution, further enhancing their utility and impact within the web3 ecosystem."})]})},{question:'I want to learn more?',section:'General',renderAnswer:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(Answer,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:["That's awesome! you can head to our",' ',/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:"/knowledge",target:"_self",children:"Knowledge Base"}),' ',"section to learn everything in depth."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* Span */.L9,{children:["If you are a FAQ type of a person, then simply head to our",' ',/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:"/blog/faq-push-chain/",target:"_self",children:"Detailed FAQ"}),' ',"for more info."]})]})}];const Answer=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling/* ItemH */.Oj).withConfig({displayName:"ChainFAQconfig__Answer",componentId:"sc-v16j4i-0"})(["align-items:stretch;align-self:stretch;justify-content:flex-start;margin:0px;padding:0 0 24px 0;& ","{color:#000;font-family:N27;font-size:20px;font-style:normal;font-weight:400;line-height:140%;@media ","{font-size:16px;}}& Span:not(:first-child){margin-top:24px;}"],SharedStyling/* Span */.L9,globals/* device */.jO.mobileL);const AMod=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling.A).withConfig({displayName:"ChainFAQconfig__AMod",componentId:"sc-v16j4i-1"})(["color:#e79cff !important;font-weight:400;background:transparent;padding:0px;text-decoration:none;&:hover{text-decoration:underline;}"]);
;// ./src/components/Chain/ChainBottomComponent.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const ChainBottomComponent=_ref=>{let{showFaq}=_ref;const isMobile=(0,useMediaQuery/* default */.A)(globals/* device */.jO.mobileL);const isTablet=(0,useMediaQuery/* default */.A)(globals/* device */.jO.tablet);return/*#__PURE__*/(0,jsx_runtime.jsxs)(ChainBottomComponentWrapper,{showFaq:showFaq,id:"faq",children:[showFaq&&/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* ItemH */.Oj,{flexDirection:isTablet&&'column',alignItems:"flex-start",justifyContent:"space-between",gap:!isMobile&&'70px',children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(FAQHeader,{alignItems:"flex-start",justifyContent:"flex-start",padding:!isMobile&&'23px 0 0 0',children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.H2,{color:"#000",fontSize:isMobile?'36px':'48px',fontFamily:"N27",fontWeight:"500",lineHeight:"120%",children:"Frequently Asked Questions"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(FaqLink,{href:"https://discord.gg/pushprotocol",target:"_blank",title:"Discord",fontSize:"16px",background:"#5865F2",color:"#FFF",fontFamily:"N27",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(discord/* default */.A,{width:24}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Ask us on Discord"}),/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* TbArrowUpRight */.V4E,{className:"anchorSVGlink"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* ItemV */.y8,{alignItems:"flex-start",justifyContent:"flex-start",children:/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionGrid,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(components_Accordion,{items:General,fontFamily:"N27",textColor:"#000 !important",fontWeight:"500",fontSize:"24px"})})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ElevateSection,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* ItemH */.Oj,{maxWidth:"850px",margin:"0 auto",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling.H3,{color:"#FFF",fontSize:isMobile?'36px':'48px',fontFamily:"N27",textAlign:"center",fontWeight:"500",lineHeight:"120%",letterSpacing:"-0.72px",children:["Any Chain. Any Wallet. Any App.",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("hr",{}),"One Push Chain"]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(ChainCanvasItem,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ChainCanvas/* default */.A,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(InputSection,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* ItemH */.Oj,{maxWidth:!isMobile&&'470px',padding:!isMobile&&'0 24px',children:/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Span */.L9,{color:"#000",fontSize:isMobile?'20px':'24px',fontFamily:"N27",fontWeight:"500",lineHeight:"120%",letterSpacing:"-0.48px",children:"To get exclusive updates and be the first to try universal app experiences"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* ItemH */.Oj,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ChainEmailSignup/* ChainEmailSignup */.Q,{showButton:true})})]})]});};/* harmony default export */ const Chain_ChainBottomComponent = (ChainBottomComponent);const ChainBottomComponentWrapper=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainBottomComponent__ChainBottomComponentWrapper",componentId:"sc-892vbk-0"})(["margin:",";@media ","{width:1400px;}@media ","{width:1200px;}@media (max-width:1248px){width:100%;padding:0 24px;}@media ","{padding:0 24px;}@media ","{margin:",";padding:0 16px;}"],props=>props.showFaq?'213px auto 0 auto':'0 auto',globals/* device */.jO.desktopL,globals/* device */.jO.desktop,globals/* device */.jO.tablet,globals/* device */.jO.mobileL,props=>props.showFaq?'153px auto 0 auto':' 0 auto');const FaqLink=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling.A).withConfig({displayName:"ChainBottomComponent__FaqLink",componentId:"sc-892vbk-1"})(["display:flex;flex-direction:row;align-items:center;overflow:inherit;gap:12px;margin:24px 0 0 0;@media ","{margin:24px auto 0 auto;}p{margin:0px !important;}.anchorSVGlink{color:#fff;top:0px;}&:hover{text-decoration:none !important;.anchorSVGlink{color:#fff;}}"],globals/* device */.jO.tablet);const AccordionGrid=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainBottomComponent__AccordionGrid",componentId:"sc-892vbk-2"})(["max-width:800px;min-width:800px;@media ","{max-width:100%;min-width:100%;}@media ","{margin-top:24px;}"],globals/* device */.jO.laptop,globals/* device */.jO.mobileL);const ElevateSection=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainBottomComponent__ElevateSection",componentId:"sc-892vbk-3"})(["width:100%;margin-top:",";border-radius:32px;background:#000;padding:64px 64px 0px 64px;position:relative;overflow:hidden;gap:48px;@media ","{margin-top:200px;padding:64px 24px 0px 24px;}"],props=>props.showFaq?'300px':'200px',globals/* device */.jO.mobileL);const InputSection=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainBottomComponent__InputSection",componentId:"sc-892vbk-4"})(["width:100%;margin-top:24px;margin-bottom:240px;border-radius:32px;background:#e492ff;padding:12px;display:flex;flex-direction:row;align-items:center;gap:33px;@media ","{padding:24px;flex-direction:column;margin-top:24px;margin-bottom:240px;}"],globals/* device */.jO.tablet);const ChainCanvasItem=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainBottomComponent__ChainCanvasItem",componentId:"sc-892vbk-5"})(["height:230px;@media ","{height:300px;}"],globals/* device */.jO.laptop);const FAQHeader=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling/* ItemV */.y8).withConfig({displayName:"ChainBottomComponent__FAQHeader",componentId:"sc-892vbk-6"})(["@media ","{text-align:center;margin:0 auto;}"],globals/* device */.jO.tablet);

/***/ }),

/***/ 649585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/another-l1-f4b365f77610bf81ff34771f6320c687.webp");

/***/ }),

/***/ 699599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pcwalletabstraction-a93618ed419bd7d4b1c247c17e247852.webp");

/***/ }),

/***/ 699665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/chainknowledgepreview-f79f389612b786f4b56056e04c165ef0.png");

/***/ }),

/***/ 786977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/why-push-chain-cc026e92debc8378450504a05e2a3ff2.webp");

/***/ }),

/***/ 788250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ChainKnowledgeBase_ChainKnowledgeBaseGrid)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(21532);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./src/hooks/useMediaQuery.ts
var useMediaQuery = __webpack_require__(452005);
// EXTERNAL MODULE: ./src/components/Chain/utils/CreateGridRows.tsx
var CreateGridRows = __webpack_require__(899939);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
;// ./src/components/Chain/config/ChainKnowledgeBaseConfig.ts
/* eslint-disable no-irregular-whitespace */// Knowledge Base Content Configuration:
// - Add a new object with the following fields:
//   - `id`: identifier for the knowledge base item.
//   - `image`, `subtitle`: Metadata for the item.
//   - `title` & `content`: Each object has a title & content, which is in the /content folder. Add the title in the object in this directory and  // Use HTML or Markdown to create the article (similar to the blog section).
//   - `url`: For external links, provide the full URL instead of using `content`.
const knowledgeBaseArticleContent=[{id:'push101',url:'push101',title:'Push 101',ctatitle:'Explore More',target:'_self',image:'knowledge_101',subtitle:'Learn about basics of Push Chain. The innovations it introduces, what makes it tick and why is it required!'},{id:'deepdives',url:'deepdives',title:'Deep Dives',ctatitle:'See it Tick',target:'_self',image:'knowledge_deepdives',subtitle:'Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you ❤️'},{id:'devdocs',image:'knowledge_devdocs',title:'Developer Docs',subtitle:`Let's come straight to the point! I am universal chain... and you are a dev, let's make it official!`,url:'/docs',target:'_self',ctatitle:'Build Now'},{id:'tokenomics',image:'knowledge_tokenomics',title:'Explore Tokenomics',subtitle:`Learn how Push Chain's tokenomics incentivizes all actors and ensures sustainable network that's built to last`,url:'tokenomics',target:'_self',ctatitle:'Learn Token Design'},{id:'faq',image:'frequently-asked-questions',title:'FAQs',subtitle:'The place to find answers to all the popular questions the community has asked. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.',url:'faq',target:'_self',ctatitle:'Read More'}];
// EXTERNAL MODULE: ./src/components/Chain/ChainKnowledgeBase/ChannelKnowledgeBaseComponentItem.tsx
var ChannelKnowledgeBaseComponentItem = __webpack_require__(151109);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/Chain/ChainKnowledgeBase/ChainKnowledgeBaseGrid.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const ChainKnowledgeBaseGrid=_ref=>{let{items,title}=_ref;const isMobile=(0,useMediaQuery/* default */.A)(globals/* device */.jO.mobileL);const isTablet=(0,useMediaQuery/* default */.A)(globals/* device */.jO.tablet);const gridRows=(0,CreateGridRows/* createGridRows */.y)(items!==null&&items!==void 0?items:knowledgeBaseArticleContent);return/*#__PURE__*/(0,jsx_runtime.jsxs)(ChainKnowledgeBaseGridWrapper,{addBottomMargin:items,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* ItemV */.y8,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.H3,{fontSize:"2.5rem",fontWeight:"500",fontFamily:"N27",lineHeight:isMobile?'100%':'140%',letterSpacing:"-0.8px",textAlign:"center",children:title?title:'Hey! Want to learn more about Push Chain?'})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ChainKnowledgeGridWrapper,{children:[!isTablet&&(gridRows===null||gridRows===void 0?void 0:gridRows.map((row,rowIndex)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ChainKnowledgeGrid,{itemsInRow:row.length,children:row.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ChannelKnowledgeBaseComponentItem/* default */.A,{item:item,index:index}))},rowIndex))),/*#__PURE__*/(0,jsx_runtime.jsx)(ChainKnowledgeGrid,{children:isTablet&&(knowledgeBaseArticleContent===null||knowledgeBaseArticleContent===void 0?void 0:knowledgeBaseArticleContent.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ChannelKnowledgeBaseComponentItem/* default */.A,{item:item,index:index})))})]})]});};/* harmony default export */ const ChainKnowledgeBase_ChainKnowledgeBaseGrid = (ChainKnowledgeBaseGrid);const ChainKnowledgeBaseGridWrapper=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainKnowledgeBaseGrid__ChainKnowledgeBaseGridWrapper",componentId:"sc-1rdghi7-0"})(["margin:",";@media ","{margin:",";}"],_ref2=>{let{addBottomMargin}=_ref2;return addBottomMargin?'120px auto':'200px auto 0 auto';},globals/* device */.jO.mobileL,_ref3=>{let{addBottomMargin}=_ref3;return addBottomMargin?'120x auto':'153px auto 0 auto';});const ChainKnowledgeGridWrapper=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainKnowledgeBaseGrid__ChainKnowledgeGridWrapper",componentId:"sc-1rdghi7-1"})(["display:flex;flex-direction:column;gap:24px;margin:48px 0 0 0;"]);const ChainKnowledgeGrid=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainKnowledgeBaseGrid__ChainKnowledgeGrid",componentId:"sc-1rdghi7-2"})(["display:grid;grid-template-columns:",";gap:24px;width:100%;justify-content:center;@media ","{grid-template-columns:repeat(2,1fr);}@media ","{grid-template-columns:1fr;}"],_ref4=>{let{itemsInRow}=_ref4;return itemsInRow===3?'repeat(3, 1fr)':'repeat(2, 1fr)';},globals/* device */.jO.tablet,globals/* device */.jO.mobileL);

/***/ }),

/***/ 792530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-21a999aac2a05aa234e58392f08294d0.webp");

/***/ }),

/***/ 796608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ deepdives)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./src/theme/Layout/index.js + 65 modules
var Layout = __webpack_require__(994160);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(705260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(486025);
// EXTERNAL MODULE: ./src/components/Chain/ChainKnowledgeBaseArticle/ChainKnowledgeBaseArticle.tsx + 2 modules
var ChainKnowledgeBaseArticle = __webpack_require__(842446);
// EXTERNAL MODULE: ./src/config/pageMeta.ts
var pageMeta = __webpack_require__(353760);
;// ./src/components/Chain/content/deepdives.js
const deepDivesContent={title:'Deep Dives',content:[{type:'indexlist',value:[{type:'text',value:`## Curated Reads 👇

            Deep dive into the inner working of Push Chain and how everything comes together to create a universal, fully interoperable chain that unites all L1s 🤝 L2s 🤝 L3s.`}]},{type:'list',items:[{slug:'understand-proof-of-stake-and-push-chain',image:'understand-proof-of-stake',title:'Understand Proof of Stake (POS) and Push Chain PoS',subtitle:'In a globally distributed computing environment, achieving collective agreement on the true state of the system has always been a complex challenge. Fortunately, there are algorithms (specialized instructions) that assist in preserving this ‘single-truth-state’ while...',url:'/blog/understand-proof-of-stake-and-push-chain/',target:'_self'},{slug:'randomized-node-selection-push-chain',image:'randomized-parallel',title:'Node Randomization',subtitle:'One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network.',url:'/blog/randomized-node-selection-push-chain',target:'_self'},{slug:'parallel-validators-and-dynamic-sharding',image:'benchmarking-push-chain-nodes',title:'Benchmark of Push Chain',subtitle:'The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain...',url:'/blog/parallel-validators-and-dynamic-sharding',target:'_self'},{slug:'interop-spectrum',image:'interop-spectrum',title:'Interop as a Spectrum',subtitle:'Understand how Push Chain flips the script on the Interop Trilemma but turning it into a Design Choice Spectrum for Universal App developers.',url:'/blog/interop-spectrum',target:'_self'},{slug:'apps-only-possible-with-shared-state-v1/',image:'apps-only-possible-with-shared-state-v1',title:'Apps Possible Only with Shared State - Vol.1',subtitle:'Learn about 5 super helpful use cases that are only only possible with shared state blockchains like Push Chain',url:'/blog/apps-only-possible-with-shared-state-v1',target:'_self'},{slug:'apps-only-possible-with-shared-state-v2/',image:'apps-only-possible-with-shared-state-v2',title:'Apps Possible Only with Shared State - Vol.2',subtitle:'Welcome to the 2nd Volume of  - Apps that are only possible with Push Chain’s shared state architecture!',url:'/blog/apps-only-possible-with-shared-state-v2',target:'_self'}]}]};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/pages/knowledge/deepdives.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
// Internal Component
// Internal Configs
function Page(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:pageMeta/* PageMeta */.t.DEEPDIVES.pageTitle,description:pageMeta/* PageMeta */.t.DEEPDIVES.pageDescription,showNavbar:'chain',children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:url",content:"https://push.org/chain/knowledge/deepdives"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:type",content:"website"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:title",content:"Push Chain | Knowledge Base | Deepdives"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"og:description",content:"Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you \u2764\uFE0F"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:image",content:(0,useBaseUrl/* default */.A)((__webpack_require__(699665)/* ["default"] */ .A),{absolute:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:site",content:"@PushChain"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:title",content:"Push Chain | Knowledge Base | Deepdives"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:description",content:"Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you \u2764\uFE0F"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:image",content:(0,useBaseUrl/* default */.A)((__webpack_require__(699665)/* ["default"] */ .A),{absolute:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify({'@context':'https://schema.org/','@type':'Organization',name:'Push Chain',description:'Any Chain. Any User. Any App',url:'https://push.org',logo:'/assets/website/favicon.ico',sameAs:['https://x.com/PushChain','https://www.linkedin.com/company/push-protocol/mycompany/']})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(ChainKnowledgeBaseArticle/* default */.A,{item:deepDivesContent})]});}/* harmony default export */ const deepdives = (Page);

/***/ }),

/***/ 813788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/benchmarking-push-chain-nodes-6113608a2ad3b73e9016d5eb7c399257.webp");

/***/ }),

/***/ 842446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ChainKnowledgeBaseArticle_ChainKnowledgeBaseArticle)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(21532);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
// EXTERNAL MODULE: ./src/components/Chain/ChainBottomComponent.tsx + 2 modules
var ChainBottomComponent = __webpack_require__(648911);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(175489);
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 4 modules
var lib = __webpack_require__(866903);
// EXTERNAL MODULE: ./node_modules/rehype-raw/lib/index.js + 45 modules
var rehype_raw_lib = __webpack_require__(366816);
// EXTERNAL MODULE: ./node_modules/rehype-sanitize/lib/index.js + 2 modules
var rehype_sanitize_lib = __webpack_require__(221911);
// EXTERNAL MODULE: ./node_modules/rehype-slug/lib/index.js + 4 modules
var rehype_slug_lib = __webpack_require__(409012);
// EXTERNAL MODULE: ./node_modules/remark-gfm/lib/index.js + 55 modules
var remark_gfm_lib = __webpack_require__(356959);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./src/hooks/useMediaQuery.ts
var useMediaQuery = __webpack_require__(452005);
// EXTERNAL MODULE: ./node_modules/unified/lib/index.js + 4 modules
var unified_lib = __webpack_require__(650756);
// EXTERNAL MODULE: ./node_modules/remark-parse/lib/index.js + 40 modules
var remark_parse_lib = __webpack_require__(418972);
// EXTERNAL MODULE: ./node_modules/remark-rehype/lib/index.js + 30 modules
var remark_rehype_lib = __webpack_require__(118185);
// EXTERNAL MODULE: ./node_modules/rehype-stringify/lib/index.js + 21 modules
var rehype_stringify_lib = __webpack_require__(693614);
// EXTERNAL MODULE: ./node_modules/unist-util-visit/lib/index.js
var unist_util_visit_lib = __webpack_require__(147970);
;// ./src/components/Chain/utils/ExtractTableOfContent.tsx
/* eslint-disable @docusaurus/no-html-links *//* eslint-disable @typescript-eslint/no-unused-vars */// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable no-useless-escape */const generateIdFromText=text=>{return'user-content-'+text.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+$/,'');};const extractText=node=>{if(!node)return'';if(typeof node==='string')return node;if(Array.isArray(node.children)){return node.children.map(extractText).join('');}if(typeof node.value==='string')return node.value;return node.children?extractText(node.children):'';};// Normalize whitespace and remove indentation
const normalizeMarkdown=str=>str.split('\n').map(line=>line.trimStart()).join('\n').trim();const flattenTextContent=contentArray=>{const result=[];contentArray.forEach(item=>{if(item.type==='text'&&typeof item.value==='string'){result.push(normalizeMarkdown(item.value));}else if(item.type==='indexlist'&&Array.isArray(item.value)){result.push(...flattenTextContent(item.value));}});return result;};const cleanHeadingText=text=>{return text.replace(/^\d+[\.\)]\s*/,'');// Remove "1. ", "2) ", etc.
};const extractTOC=contentArray=>{if(!Array.isArray(contentArray)){console.error('❌ extractTOC received invalid contentArray:',contentArray);return[];}const markdownContent=flattenTextContent(contentArray).filter(str=>str.trim()!=='').join('\n\n');if(!markdownContent.trim()){console.warn('⚠️ No markdown content available.');return[];}const toc=[];let insideCodeBlock=false;const processor=(0,unified_lib/* unified */.l)().use(remark_parse_lib/* default */.A).use(remark_rehype_lib/* default */.A).use(rehype_slug_lib/* default */.A).use(rehype_stringify_lib/* default */.A);const tree=processor.runSync(processor.parse(markdownContent));(0,unist_util_visit_lib/* visit */.YR)(tree,'element',node=>{if(node.tagName==='pre'){insideCodeBlock=true;}else if(insideCodeBlock&&node.tagName!=='code'){insideCodeBlock=false;}if(node.tagName&&/^h[1-6]$/.test(node.tagName)&&!insideCodeBlock){const rawText=extractText(node).trim();const text=cleanHeadingText(rawText);const id=generateIdFromText(text);const level=parseInt(node.tagName.charAt(1),10);if(text){toc.push({text,id,level});}}});return toc;};
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(796710);
// EXTERNAL MODULE: ./src/hooks/useSiteBaseUrl.tsx
var useSiteBaseUrl = __webpack_require__(811494);
// EXTERNAL MODULE: ./src/components/Chain/ChainKnowledgeBase/ChainKnowledgeBaseGrid.tsx + 1 modules
var ChainKnowledgeBaseGrid = __webpack_require__(788250);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/Chain/ChainKnowledgeBaseArticle/ChainKnowledgeBaseArticleContent.tsx
/* eslint-disable @docusaurus/no-html-links, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */// @ts-nocheck
const ChainKnowledgeBaseArticleContent=_ref=>{var _item$content;let{item}=_ref;const[showFullMobileTOC,setShowFullMobileTOC]=react.useState(false);const isMobile=(0,useMediaQuery/* default */.A)(globals/* device */.jO.mobileL);const isTablet=(0,useMediaQuery/* default */.A)(globals/* device */.jO.tablet);const baseUrl=(0,useSiteBaseUrl/* useSiteBaseUrl */.p)();if(!item||!item.content){return/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Loading..."});// or some fallback UI
}// Cleans up markdown text by removing leading spaces from each line,
// except for lines that contain only '---', which are preserved as-is.
// Also trims leading and trailing whitespace from the final output.
const cleanMarkdown=text=>{return text.split('\n').map(line=>{if(line.trim()!=='---'){return line.replace(/^\s+/gm,'');}return line;}).join('\n').trim();};// Resolve images by adding the base url to the srs provided from content file
function resolveImageUrls(md){return md.replace(/!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,(_match,alt,src)=>{return`![${alt}](${baseUrl}${src})`;});}// Removes emojis, numbering and spaces from header texts
// so it can generates an id for the header
function generateIdFromHeadingText(text){const plain=String(text).replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu,'').replace(/^\d+\.\s*/,'');return'user-content-'+plain.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+$/,'');}return/*#__PURE__*/(0,jsx_runtime.jsxs)(ChainKnowledgeBaseArticleWrapper,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* ItemV */.y8,{alignItems:"flex-start",gap:"0px",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(BreadcrumbList,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.LI,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbLink,{to:"/",children:"Home"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.LI,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:'>'})}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.LI,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbLink,{to:"/knowledge",children:"Knowledge Base"})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.H1,{fontSize:"3.375rem",fontWeight:"500",fontFamily:"N27",lineHeight:"120%",letterSpacing:"-1.04px",color:"#000",children:item===null||item===void 0?void 0:item.title})]}),(_item$content=item.content)===null||_item$content===void 0?void 0:_item$content.map((block,blockIndex)=>{if(block.type==='indexlist'){const texts=block===null||block===void 0?void 0:block.value.filter(v=>v.type==='text');const rawMarkdown=texts===null||texts===void 0?void 0:texts.map(t=>t.value).join('\n\n');const toc=extractTOC(block===null||block===void 0?void 0:block.value);return/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* ItemH */.Oj,{flexDirection:isTablet?'column':'row',gap:isTablet?'32px':'165px',alignItems:"flex-start",margin:"16px 0 32px 0",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* ItemV */.y8,{maxWidth:isTablet?'100%':'300px',minWidth:isTablet?'100%':'300px',alignItems:"flex-start",alignSelf:"flex-start",flexShrink:0,margin:!isMobile?'12px 0 0 0':'',children:[isTablet&&(toc===null||toc===void 0?void 0:toc.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(MobileTOCWrapper,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling.UL,{children:[(showFullMobileTOC?toc:toc.slice(0,2)).map((item,index)=>{const highestLevel=Math.min(...toc.map(t=>t.level));return/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.LI,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem,{href:`#${item.id}`,level:item.level,highestLevel:highestLevel,children:item.text},index)});}),toc.length>2&&/*#__PURE__*/(0,jsx_runtime.jsx)(ToggleIcon,{onClick:()=>setShowFullMobileTOC(!showFullMobileTOC),children:showFullMobileTOC?/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm.BsChevronUp,{}):/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm.BsChevronDown,{})})]})}),!isTablet&&toc.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(DesktopTOC,{background:"#FFF",padding:"32px",borderRadius:"32px",alignItems:"flex-start",margin:"0",children:/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.UL,{children:toc===null||toc===void 0?void 0:toc.map((item,index)=>{const highestLevel=Math.min(...toc.map(t=>t.level));return/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling.LI,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem,{href:`#${item.id}`,level:item.level,highestLevel:highestLevel,children:item.text},index)});})})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* ItemV */.y8,{flex:1,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextItem,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{remarkPlugins:[remark_gfm_lib/* default */.A],rehypePlugins:[rehype_slug_lib/* default */.A,rehype_raw_lib/* default */.A,rehype_sanitize_lib/* default */.A],components:{a:_ref2=>{let{node,...props}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("a",{...props,target:"_blank",rel:"noopener noreferrer",children:props.children});},...Object.fromEntries(['h1','h2','h3','h4','h5','h6'].map(tag=>[tag,_ref3=>{let{node,...props}=_ref3;const id=generateIdFromHeadingText(props.children);return/*#__PURE__*/react.createElement(tag,{id,className:`${tag}-text`},props.children);}]))},children:resolveImageUrls(cleanMarkdown(rawMarkdown))})})})]},blockIndex);}if(block.type==='list'){return/*#__PURE__*/(0,jsx_runtime.jsx)(ChainKnowledgeBaseGrid/* default */.A,{items:block===null||block===void 0?void 0:block.items,title:block===null||block===void 0?void 0:block.title});}return null;})]});};/* harmony default export */ const ChainKnowledgeBaseArticle_ChainKnowledgeBaseArticleContent = (ChainKnowledgeBaseArticleContent);const ChainKnowledgeBaseArticleWrapper=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainKnowledgeBaseArticleContent__ChainKnowledgeBaseArticleWrapper",componentId:"sc-1lcaqjq-0"})(["margin:213px auto 0 auto;width:100%;position:relative;@media ","{margin:153px auto 0 auto;}"],globals/* device */.jO.mobileL);const BreadcrumbList=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling.UL).withConfig({displayName:"ChainKnowledgeBaseArticleContent__BreadcrumbList",componentId:"sc-1lcaqjq-1"})(["display:flex;gap:8px;list-style:none;padding:0;margin:0;align-items:center;color:#000;"]);const BreadcrumbLink=(0,styled_components_browser_esm/* default */.Ay)(Link/* default */.A).withConfig({displayName:"ChainKnowledgeBaseArticleContent__BreadcrumbLink",componentId:"sc-1lcaqjq-2"})(["text-decoration:none;font-size:1.25em;font-weight:400;font-family:'N27',sans-serif;line-height:140%;color:#000;@media ","{font-size:1em;}&:hover{color:#cf59e2;}"],globals/* device */.jO.tablet);const TextItem=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainKnowledgeBaseArticleContent__TextItem",componentId:"sc-1lcaqjq-3"})(["width:inherit;color:#000;&:not(:first-of-type){margin:12px 0 0 auto;}*{font-size:1.25rem;}h1{color:#000;font-family:N27;font-size:3rem;font-style:normal;font-weight:500;line-height:120%;letter-spacing:-0.8px;margin:64px 0 24px 0;}h2{color:#000;font-family:N27;font-size:2.5rem;font-style:normal;font-weight:500;line-height:120%;letter-spacing:-0.8px;margin:64px 0 24px 0;}h3{color:#000;font-family:N27;font-size:2rem;font-style:normal;font-weight:500;line-height:140%;letter-spacing:-0.64px;margin:0 0 16px 0;}h4{color:#000;font-family:N27;font-size:1.5rem;font-style:normal;font-weight:500;line-height:140%;letter-spacing:-0.64px;margin:0 0 16px 0;}h5{color:#000;font-family:N27;font-size:1.25rem;font-style:normal;font-weight:500;line-height:140%;letter-spacing:-0.64px;margin:0 0 16px 0;}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,h6:first-child{margin-top:0;}blockquote{border-left:6px solid #d548ec;background:#fff;color:#000;border-radius:12px;padding:15px;box-sizing:border-box;margin:10px 0;}ol li{list-style-type:decimal;}ul li{list-style-type:disc;}p{margin:0;padding:0;line-height:170%;}p img,img{border-radius:32px;margin:16px 0;}@media ","{max-width:100%;}"],globals/* device */.jO.tablet);const ListItem=styled_components_browser_esm/* default */.Ay.a.withConfig({displayName:"ChainKnowledgeBaseArticleContent__ListItem",componentId:"sc-1lcaqjq-4"})(["display:block;color:#757d8d;font-family:N27;font-size:",";margin-left:",";font-style:normal;font-weight:500;line-height:120%;letter-spacing:-0.4px;&:hover{color:#cf59e2;}"],_ref4=>{let{level}=_ref4;return level===1?'1.25em':level===2?'1.125em':'1em';},_ref5=>{let{level,highestLevel}=_ref5;return level===highestLevel?'0':`${(level-highestLevel)*15}px`;});const MobileTOCWrapper=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainKnowledgeBaseArticleContent__MobileTOCWrapper",componentId:"sc-1lcaqjq-5"})(["margin-top:16px;padding:20px;border-radius:24px;background:#f8f8f8;width:100%;box-shadow:0px 2px 4px rgba(0,0,0,0.05);ul{padding:0;margin:0;list-style-type:none;}"]);const DesktopTOC=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling/* ItemV */.y8).withConfig({displayName:"ChainKnowledgeBaseArticleContent__DesktopTOC",componentId:"sc-1lcaqjq-6"})(["ul{padding:0;margin:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;}li{margin:0 !important;}"]);const ToggleIcon=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"ChainKnowledgeBaseArticleContent__ToggleIcon",componentId:"sc-1lcaqjq-7"})(["font-size:1.5em;text-align:center;margin-top:12px;cursor:pointer;color:#757d8d;font-weight:bold;"]);
;// ./src/components/Chain/ChainKnowledgeBaseArticle/ChainKnowledgeBaseArticle.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const ChainKnowledgeBaseArticle=_ref=>{let{item}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(ChainWrapper,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(ChainInnerWrapper,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ChainKnowledgeBaseArticle_ChainKnowledgeBaseArticleContent,{item:item}),/*#__PURE__*/(0,jsx_runtime.jsx)(ChainBottomComponent/* default */.A,{})]})});};/* harmony default export */ const ChainKnowledgeBaseArticle_ChainKnowledgeBaseArticle = (ChainKnowledgeBaseArticle);const ChainWrapper=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling/* ItemV */.y8).withConfig({displayName:"ChainKnowledgeBaseArticle__ChainWrapper",componentId:"sc-nubohc-0"})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background:#e8eff8;font-family:N27,sans-serif;"]);const ChainInnerWrapper=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling/* ItemV */.y8).withConfig({displayName:"ChainKnowledgeBaseArticle__ChainInnerWrapper",componentId:"sc-nubohc-1"})(["width:1200px;margin:0 auto;@media ","{width:1400px;}@media ","{width:1200px;}@media (max-width:1248px){width:100%;padding:0 24px;}@media ","{padding:0 24px;}@media ","{padding:0 16px;}"],globals/* device */.jO.desktopL,globals/* device */.jO.desktop,globals/* device */.jO.tablet,globals/* device */.jO.mobileL);

/***/ }),

/***/ 869790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/knowledge_deepdives-dbc1371a907c2f2f0cd5bc6df888509f.webp");

/***/ }),

/***/ 899939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ createGridRows)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const createGridRows=items=>{const rows=[];let index=0;while(index<(items===null||items===void 0?void 0:items.length)){const remainingItems=items.length-index;if(remainingItems===7){// Special case for 7: [3, 2, 2]
rows.push(items.slice(index,index+3));rows.push(items.slice(index+3,index+5));rows.push(items.slice(index+5,index+7));index+=7;}else if(remainingItems===5){// Special case for 5: [3, 2]
rows.push(items.slice(index,index+3));rows.push(items.slice(index+3,index+5));index+=5;}else if(remainingItems===4){// Prevent 4 in a row by adjusting previous rows
if(rows.length>0&&rows[rows.length-1].length===2){rows[rows.length-1].push(items[index]);rows.push(items.slice(index+1,index+4));index+=4;}else{rows.push(items.slice(index,index+2));rows.push(items.slice(index+2,index+4));index+=4;}}else if(rows.length>=2&&rows[rows.length-1].length===2&&rows[rows.length-2].length===2&&remainingItems>2){// Avoid more than 2 consecutive rows of 2
rows.push(items.slice(index,index+3));index+=3;}else{// Default case: Create a row of 3 or 2
const rowSize=remainingItems>=3?3:2;rows.push(items.slice(index,index+rowSize));index+=rowSize;}}return rows;};

/***/ }),

/***/ 974706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vestingdetailspc-0db680646d1f04029a57322e8dfc830d.webp");

/***/ }),

/***/ 981851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/knowledge_devdocs-0eaaa3af8d6d2cf200ada06310b9294f.webp");

/***/ }),

/***/ 996204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/push-chain-partners-9f3263ce9f6639641df28ee718fc835a.webp");

/***/ })

}]);