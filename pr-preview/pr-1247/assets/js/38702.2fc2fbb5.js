"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[38702],{

/***/ 838702
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  createBaseAccountSDK: () => (/* reexport */ createBaseAccountSDK)
});

// UNUSED EXPORTS: CHAIN_IDS, TOKENS, VERSION, base, getCryptoKeyAccount, getPaymentStatus, getSubscriptionStatus, pay, prepareCharge, removeCryptoKey, subscribe

;// ./node_modules/@base-org/account/package.json
const package_namespaceObject = /*#__PURE__*/JSON.parse('{"UU":"@base-org/account","rE":"2.4.0"}');
;// ./node_modules/@base-org/account/dist/core/constants.js

const CB_KEYS_URL = 'https://keys.coinbase.com/connect';
const CB_WALLET_RPC_URL = 'https://rpc.wallet.coinbase.com';
const PACKAGE_NAME = package_namespaceObject.UU;
const PACKAGE_VERSION = package_namespaceObject.rE;
//# sourceMappingURL=constants.js.map
// EXTERNAL MODULE: ./node_modules/zustand/esm/middleware.mjs
var middleware = __webpack_require__(587134);
// EXTERNAL MODULE: ./node_modules/zustand/esm/vanilla.mjs
var vanilla = __webpack_require__(997283);
;// ./node_modules/@base-org/account/dist/store/store.js



const createChainSlice = () => {
    return {
        chains: [],
    };
};
const createKeysSlice = () => {
    return {
        keys: {},
    };
};
const createAccountSlice = () => {
    return {
        account: {},
    };
};
const createSubAccountSlice = () => {
    return {
        subAccount: undefined,
    };
};
const createSubAccountConfigSlice = () => {
    return {
        subAccountConfig: {},
    };
};
const createSpendPermissionsSlice = () => {
    return {
        spendPermissions: [],
    };
};
const createConfigSlice = () => {
    return {
        config: {
            version: PACKAGE_VERSION,
        },
    };
};
const sdkstore = (0,vanilla/* createStore */.y)((0,middleware/* persist */.Zr)((...args) => ({
    ...createChainSlice(...args),
    ...createKeysSlice(...args),
    ...createAccountSlice(...args),
    ...createSubAccountSlice(...args),
    ...createSpendPermissionsSlice(...args),
    ...createConfigSlice(...args),
    ...createSubAccountConfigSlice(...args),
}), {
    name: 'base-acc-sdk.store',
    storage: (0,middleware/* createJSONStorage */.KU)(() => localStorage),
    partialize: (state) => {
        // Explicitly select only the data properties we want to persist
        // (not the methods)
        return {
            chains: state.chains,
            keys: state.keys,
            account: state.account,
            subAccount: state.subAccount,
            spendPermissions: state.spendPermissions,
            config: state.config,
        };
    },
}));
// Non-persisted subaccount configuration
const subAccountsConfig = {
    get: () => sdkstore.getState().subAccountConfig,
    set: (subAccountConfig) => {
        sdkstore.setState((state) => ({
            subAccountConfig: { ...state.subAccountConfig, ...subAccountConfig },
        }));
    },
    clear: () => {
        sdkstore.setState({
            subAccountConfig: {},
        });
    },
};
const subAccounts = {
    get: () => sdkstore.getState().subAccount,
    set: (subAccount) => {
        sdkstore.setState((state) => ({
            subAccount: state.subAccount
                ? { ...state.subAccount, ...subAccount }
                : { address: subAccount.address, ...subAccount },
        }));
    },
    clear: () => {
        sdkstore.setState({
            subAccount: undefined,
        });
    },
};
const spendPermissions = {
    get: () => sdkstore.getState().spendPermissions,
    set: (spendPermissions) => {
        sdkstore.setState({ spendPermissions });
    },
    clear: () => {
        sdkstore.setState({
            spendPermissions: [],
        });
    },
};
const account = {
    get: () => sdkstore.getState().account,
    set: (account) => {
        sdkstore.setState((state) => ({
            account: { ...state.account, ...account },
        }));
    },
    clear: () => {
        sdkstore.setState({
            account: {},
        });
    },
};
const chains = {
    get: () => sdkstore.getState().chains,
    set: (chains) => {
        sdkstore.setState({ chains });
    },
    clear: () => {
        sdkstore.setState({
            chains: [],
        });
    },
};
const keys = {
    get: (key) => sdkstore.getState().keys[key],
    set: (key, value) => {
        sdkstore.setState((state) => ({ keys: { ...state.keys, [key]: value } }));
    },
    clear: () => {
        sdkstore.setState({
            keys: {},
        });
    },
};
const config = {
    get: () => sdkstore.getState().config,
    set: (config) => {
        sdkstore.setState((state) => ({ config: { ...state.config, ...config } }));
    },
};
const actions = {
    subAccounts,
    subAccountsConfig,
    spendPermissions,
    account,
    chains,
    keys,
    config,
};
const store = {
    ...sdkstore,
    ...actions,
};
//# sourceMappingURL=store.js.map
;// ./node_modules/@base-org/account/dist/core/telemetry/telemetry-content.js
// This file is auto-generated by compile-assets.cjs
// Do not edit manually - changes will be overwritten
const TELEMETRY_SCRIPT_CONTENT = `!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClientAnalytics=t():e.ClientAnalytics=t()}(this,(function(){return(()=>{var e={792:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},562:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],a=0;a<4;a++)8*r+6*a<=8*e.length?n.push(t.charAt(i>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\\/]/gi,"");for(var n=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(r))>>>6-2*i);return n}},e.exports=n},335:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},762:(e,t,n)=>{var r,i,a,o,s;r=n(562),i=n(792).utf8,a=n(335),o=n(792).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):i.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=r.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,d=-1732584194,p=271733878,m=0;m<n.length;m++)n[m]=16711935&(n[m]<<8|n[m]>>>24)|4278255360&(n[m]<<24|n[m]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var f=s._ff,v=s._gg,g=s._hh,b=s._ii;for(m=0;m<n.length;m+=16){var h=u,w=l,y=d,T=p;u=f(u,l,d,p,n[m+0],7,-680876936),p=f(p,u,l,d,n[m+1],12,-389564586),d=f(d,p,u,l,n[m+2],17,606105819),l=f(l,d,p,u,n[m+3],22,-1044525330),u=f(u,l,d,p,n[m+4],7,-176418897),p=f(p,u,l,d,n[m+5],12,1200080426),d=f(d,p,u,l,n[m+6],17,-1473231341),l=f(l,d,p,u,n[m+7],22,-45705983),u=f(u,l,d,p,n[m+8],7,1770035416),p=f(p,u,l,d,n[m+9],12,-1958414417),d=f(d,p,u,l,n[m+10],17,-42063),l=f(l,d,p,u,n[m+11],22,-1990404162),u=f(u,l,d,p,n[m+12],7,1804603682),p=f(p,u,l,d,n[m+13],12,-40341101),d=f(d,p,u,l,n[m+14],17,-1502002290),u=v(u,l=f(l,d,p,u,n[m+15],22,1236535329),d,p,n[m+1],5,-165796510),p=v(p,u,l,d,n[m+6],9,-1069501632),d=v(d,p,u,l,n[m+11],14,643717713),l=v(l,d,p,u,n[m+0],20,-373897302),u=v(u,l,d,p,n[m+5],5,-701558691),p=v(p,u,l,d,n[m+10],9,38016083),d=v(d,p,u,l,n[m+15],14,-660478335),l=v(l,d,p,u,n[m+4],20,-405537848),u=v(u,l,d,p,n[m+9],5,568446438),p=v(p,u,l,d,n[m+14],9,-1019803690),d=v(d,p,u,l,n[m+3],14,-187363961),l=v(l,d,p,u,n[m+8],20,1163531501),u=v(u,l,d,p,n[m+13],5,-1444681467),p=v(p,u,l,d,n[m+2],9,-51403784),d=v(d,p,u,l,n[m+7],14,1735328473),u=g(u,l=v(l,d,p,u,n[m+12],20,-1926607734),d,p,n[m+5],4,-378558),p=g(p,u,l,d,n[m+8],11,-2022574463),d=g(d,p,u,l,n[m+11],16,1839030562),l=g(l,d,p,u,n[m+14],23,-35309556),u=g(u,l,d,p,n[m+1],4,-1530992060),p=g(p,u,l,d,n[m+4],11,1272893353),d=g(d,p,u,l,n[m+7],16,-155497632),l=g(l,d,p,u,n[m+10],23,-1094730640),u=g(u,l,d,p,n[m+13],4,681279174),p=g(p,u,l,d,n[m+0],11,-358537222),d=g(d,p,u,l,n[m+3],16,-722521979),l=g(l,d,p,u,n[m+6],23,76029189),u=g(u,l,d,p,n[m+9],4,-640364487),p=g(p,u,l,d,n[m+12],11,-421815835),d=g(d,p,u,l,n[m+15],16,530742520),u=b(u,l=g(l,d,p,u,n[m+2],23,-995338651),d,p,n[m+0],6,-198630844),p=b(p,u,l,d,n[m+7],10,1126891415),d=b(d,p,u,l,n[m+14],15,-1416354905),l=b(l,d,p,u,n[m+5],21,-57434055),u=b(u,l,d,p,n[m+12],6,1700485571),p=b(p,u,l,d,n[m+3],10,-1894986606),d=b(d,p,u,l,n[m+10],15,-1051523),l=b(l,d,p,u,n[m+1],21,-2054922799),u=b(u,l,d,p,n[m+8],6,1873313359),p=b(p,u,l,d,n[m+15],10,-30611744),d=b(d,p,u,l,n[m+6],15,-1560198380),l=b(l,d,p,u,n[m+13],21,1309151649),u=b(u,l,d,p,n[m+4],6,-145523070),p=b(p,u,l,d,n[m+11],10,-1120210379),d=b(d,p,u,l,n[m+2],15,718787259),l=b(l,d,p,u,n[m+9],21,-343485551),u=u+h>>>0,l=l+w>>>0,d=d+y>>>0,p=p+T>>>0}return r.endian([u,l,d,p])})._ff=function(e,t,n,r,i,a,o){var s=e+(t&n|~t&r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._gg=function(e,t,n,r,i,a,o){var s=e+(t&r|n&~r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._hh=function(e,t,n,r,i,a,o){var s=e+(t^n^r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._ii=function(e,t,n,r,i,a,o){var s=e+(n^(t|~r))+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?o.bytesToString(n):r.bytesToHex(n)}},2:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Perfume:()=>ze,incrementUjNavigation:()=>Le,markStep:()=>Re,markStepOnce:()=>qe});var r,i,a={isResourceTiming:!1,isElementTiming:!1,maxTime:3e4,reportOptions:{},enableNavigationTracking:!0},o=window,s=o.console,c=o.navigator,u=o.performance,l=function(){return c.deviceMemory},d=function(){return c.hardwareConcurrency},p="mark.",m=function(){return u&&!!u.getEntriesByType&&!!u.now&&!!u.mark},f="4g",v=!1,g={},b={value:0},h={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},w={value:0},y={value:0},T={},k={isHidden:!1,didChange:!1},_=function(){k.isHidden=!1,document.hidden&&(k.isHidden=document.hidden,k.didChange=!0)},S=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){s.warn("Perfume.js:",e)}return null},E=function(){return!!(d()&&d()<=4)||!!(l()&&l()<=4)},x=function(e,t){switch(e){case"slow-2g":case"2g":case"3g":return!0;default:return E()||t}},O=function(e){return parseFloat(e.toFixed(4))},j=function(e){return"number"!=typeof e?null:O(e/Math.pow(1024,2))},N=function(e,t,n,r,i){var s,u=function(){a.analyticsTracker&&(k.isHidden&&!["CLS","INP"].includes(e)||a.analyticsTracker({attribution:r,metricName:e,data:t,navigatorInformation:c?{deviceMemory:l()||0,hardwareConcurrency:d()||0,serviceWorkerStatus:"serviceWorker"in c?c.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:E(),isLowEndExperience:x(f,v)}:{},rating:n,navigationType:i}))};["CLS","INP"].includes(e)?u():(s=u,"requestIdleCallback"in o?o.requestIdleCallback(s,{timeout:3e3}):s())},I=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<b.value)){var t=e.duration-50;t>0&&(w.value+=t,y.value+=t)}}))};!function(e){e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable"}(r||(r={}));var P,M,B,C,D,A=((i={})[r.instant]={vitalsThresholds:[100,200],maxOutlierThreshold:1e4},i[r.quick]={vitalsThresholds:[200,500],maxOutlierThreshold:1e4},i[r.moderate]={vitalsThresholds:[500,1e3],maxOutlierThreshold:1e4},i[r.slow]={vitalsThresholds:[1e3,2e3],maxOutlierThreshold:1e4},i[r.unavoidable]={vitalsThresholds:[2e3,5e3],maxOutlierThreshold:2e4},i),L={RT:[100,200],TBT:[200,600],NTBT:[200,600]},U=function(e,t){return L[e]?t<=L[e][0]?"good":t<=L[e][1]?"needsImprovement":"poor":null},R=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=O(t[e]))})),N(e,t,null,n||{})},q=function(e){var t=e.attribution,n=e.name,r=e.rating,i=e.value,o=e.navigationType;"FCP"===n&&(b.value=i),["FCP","LCP"].includes(n)&&!T[0]&&(T[0]=S("longtask",I)),"FID"===n&&setTimeout((function(){k.didChange||(q({attribution:t,name:"TBT",rating:U("TBT",w.value),value:w.value,navigationType:o}),R("dataConsumption",h.value))}),1e4);var s=O(i);s<=a.maxTime&&s>=0&&N(n,s,r,t,o)},F=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},z=function(e){if("loading"===document.readyState)return"loading";var t=F();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},K=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},$=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:K(r)+(r.className&&r.className.length?"."+r.className.replace(/\\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},Q=-1,W=function(){return Q},H=function(e){addEventListener("pageshow",(function(t){t.persisted&&(Q=t.timeStamp,e(t))}),!0)},V=function(){var e=F();return e&&e.activationStart||0},J=function(e,t){var n=F(),r="navigate";return W()>=0?r="back-forward-cache":n&&(r=document.prerendering||V()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},X=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},G=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Z=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},Y=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},ee=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},te=-1,ne=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},re=function(e){"hidden"===document.visibilityState&&te>-1&&(te="visibilitychange"===e.type?e.timeStamp:0,ae())},ie=function(){addEventListener("visibilitychange",re,!0),addEventListener("prerenderingchange",re,!0)},ae=function(){removeEventListener("visibilitychange",re,!0),removeEventListener("prerenderingchange",re,!0)},oe=function(){return te<0&&(te=ne(),ie(),H((function(){setTimeout((function(){te=ne(),ie()}),0)}))),{get firstHiddenTime(){return te}}},se=function(e,t){t=t||{},ee((function(){var n,r=[1800,3e3],i=oe(),a=J("FCP"),o=X("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=Math.max(e.startTime-V(),0),a.entries.push(e),n(!0)))}))}));o&&(n=Z(e,a,r,t.reportAllChanges),H((function(i){a=J("FCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,n(!0)}))})))}))},ce={passive:!0,capture:!0},ue=new Date,le=function(e,t){P||(P=t,M=e,B=new Date,me(removeEventListener),de())},de=function(){if(M>=0&&M<B-ue){var e={entryType:"first-input",name:P.type,target:P.target,cancelable:P.cancelable,startTime:P.timeStamp,processingStart:P.timeStamp+M};C.forEach((function(t){t(e)})),C=[]}},pe=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){le(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,ce),removeEventListener("pointercancel",r,ce)};addEventListener("pointerup",n,ce),addEventListener("pointercancel",r,ce)}(t,e):le(t,e)}},me=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,pe,ce)}))},fe=0,ve=1/0,ge=0,be=function(e){e.forEach((function(e){e.interactionId&&(ve=Math.min(ve,e.interactionId),ge=Math.max(ge,e.interactionId),fe=ge?(ge-ve)/7+1:0)}))},he=function(){return D?fe:performance.interactionCount||0},we=0,ye=function(){return he()-we},Te=[],ke={},_e=function(e){var t=Te[Te.length-1],n=ke[e.interactionId];if(n||Te.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};ke[r.id]=r,Te.push(r)}Te.sort((function(e,t){return t.latency-e.latency})),Te.splice(10).forEach((function(e){delete ke[e.id]}))}},Se={},Ee=function e(t){document.prerendering?ee((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},xe=function(e,t){t=t||{};var n=[800,1800],r=J("TTFB"),i=Z(e,r,n,t.reportAllChanges);Ee((function(){var a=F();if(a){var o=a.responseStart;if(o<=0||o>performance.now())return;r.value=Math.max(o-V(),0),r.entries=[a],i(!0),H((function(){r=J("TTFB",0),(i=Z(e,r,n,t.reportAllChanges))(!0)}))}}))},Oe=function(e){e.forEach((function(e){e.identifier&&q({attribution:{identifier:e.identifier},name:"ET",rating:null,value:e.startTime})}))},je=function(e){e.forEach((function(e){if(a.isResourceTiming&&R("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;h.value[e.initiatorType]+=t,h.value.total+=t}}))},Ne=function(){!function(e,t){xe((function(e){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(e),function(e){e.value>0&&q(e)}(e)}),t)}(0,a.reportOptions.ttfb),function(e,t){!function(e,t){t=t||{},ee((function(){var e,n=[.1,.25],r=J("CLS"),i=-1,a=0,o=[],s=function(e){i>-1&&function(e){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:$(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:z(t.startTime)})}}var r;e.attribution={}}(e),function(e){q(e)}(e)}(e)},c=function(t){t.forEach((function(t){if(!t.hadRecentInput){var n=o[0],i=o[o.length-1];a&&t.startTime-i.startTime<1e3&&t.startTime-n.startTime<5e3?(a+=t.value,o.push(t)):(a=t.value,o=[t]),a>r.value&&(r.value=a,r.entries=o,e())}}))},u=X("layout-shift",c);u&&(e=Z(s,r,n,t.reportAllChanges),se((function(t){i=t.value,r.value<0&&(r.value=0,e())})),G((function(){c(u.takeRecords()),e(!0)})),H((function(){a=0,i=-1,r=J("CLS",0),e=Z(s,r,n,t.reportAllChanges),Y((function(){return e()}))})))}))}(0,t)}(0,a.reportOptions.cls),function(e,t){se((function(e){!function(e){if(e.entries.length){var t=F(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:z(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:z(W())}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[100,300],i=oe(),a=J("FID"),o=function(e){e.startTime<i.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},s=function(e){e.forEach(o)},c=X("first-input",s);n=Z(e,a,r,t.reportAllChanges),c&&G((function(){s(c.takeRecords()),c.disconnect()}),!0),c&&H((function(){var i;a=J("FID"),n=Z(e,a,r,t.reportAllChanges),C=[],M=-1,P=null,me(addEventListener),i=o,C.push(i),de()}))}))}((function(e){!function(e){var t=e.entries[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fid),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[2500,4e3],i=oe(),a=J("LCP"),o=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-V(),0);r<i.firstHiddenTime&&(a.value=r,a.entries=[t],n())}},s=X("largest-contentful-paint",o);if(s){n=Z(e,a,r,t.reportAllChanges);var c=function(){Se[a.id]||(o(s.takeRecords()),s.disconnect(),Se[a.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),G(c,!0),H((function(i){a=J("LCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,Se[a.id]=!0,n(!0)}))}))}}))}((function(e){!function(e){if(e.entries.length){var t=F();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],a=Math.max(0,t.responseStart-n),o=Math.max(a,i?(i.requestStart||i.startTime)-n:0),s=Math.max(o,i?i.responseEnd-n:0),c=Math.max(s,r?r.startTime-n:0),u={element:$(r.element),timeToFirstByte:a,resourceLoadDelay:o-a,resourceLoadTime:s-o,elementRenderDelay:c-s,navigationEntry:t,lcpEntry:r};return r.url&&(u.url=r.url),i&&(u.lcpResourceEntry=i),void(e.attribution=u)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.lcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n=[200,500];"interactionCount"in performance||D||(D=X("event",be,{type:"event",buffered:!0,durationThreshold:0}));var r,i=J("INP"),a=function(e){e.forEach((function(e){e.interactionId&&_e(e),"first-input"===e.entryType&&!Te.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&_e(e)}));var t,n=(t=Math.min(Te.length-1,Math.floor(ye()/50)),Te[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},o=X("event",a,{durationThreshold:t.durationThreshold||40});r=Z(e,i,n,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),G((function(){a(o.takeRecords()),i.value<0&&ye()>0&&(i.value=0,i.entries=[]),r(!0)})),H((function(){Te=[],we=he(),i=J("INP"),r=Z(e,i,n,t.reportAllChanges)})))}))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}else e.attribution={}}(t),e(t)}),t)}((function(e){return q(e)}),a.reportOptions.inp),a.isResourceTiming&&S("resource",je),a.isElementTiming&&S("element",Oe)},Ie=function(e){var t="usageDetails"in e?e.usageDetails:{};R("storageEstimate",{quota:j(e.quota),usage:j(e.usage),caches:j(t.caches),indexedDB:j(t.indexedDB),serviceWorker:j(t.serviceWorkerRegistrations)})},Pe={finalMarkToStepsMap:{},startMarkToStepsMap:{},active:{},navigationSteps:{}},Me=function(e){delete Pe.active[e]},Be=function(){return Pe.navigationSteps},Ce=function(e){var t;return null!==(t=Be()[e])&&void 0!==t?t:{}},De=function(e,t,n){var r="step."+e,i=u.getEntriesByName(p+t).length>0;if(u.getEntriesByName(p+n).length>0&&a.steps){var o=A[a.steps[e].threshold],s=o.maxOutlierThreshold,c=o.vitalsThresholds;if(i){var l=u.measure(r,p+t,p+n),d=l.duration;if(d<=s){var m=function(e,t){return e<=t[0]?"good":e<=t[1]?"needsImprovement":"poor"}(d,c);d>=0&&(N("userJourneyStep",d,m,{stepName:e},void 0),u.measure("step.".concat(e,"_vitals_").concat(m),{start:l.startTime+l.duration,end:l.startTime+l.duration,detail:{type:"stepVital",duration:d}}))}}}},Ae=function(){var e=Be(),t=Pe.startMarkToStepsMap,n=Object.keys(e).length;if(0===n)return{};var r={},i=n-1,a=Ce(i);if(Object.keys(a).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))})),n>1){var o=Ce(i-1);Object.keys(o).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))}))}return r},Le=function(){var e,t=Object.keys(Pe.navigationSteps).length;Pe.navigationSteps[t]={};var n=Ae();null===(e=a.onMarkStep)||void 0===e||e.call(a,"",Object.keys(n))},Ue=function(e){var t,n,r,i,o,s,c;if(Pe.finalMarkToStepsMap[e]){!function(e){var t=Pe.navigationSteps,n=Pe.finalMarkToStepsMap,r=Object.keys(t).length;if(0!==r){var i=r-1,a=Ce(i);if(a&&n[e]){var o=n[e];o&&Object.keys(o).forEach((function(e){if(a[e]){var n=Ce(i)||{};n[e]=!1,t[i]=n}if(r>1){var o=i-1,s=Ce(o);s[e]&&(s[e]=!1,t[o]=s)}}))}}}(e);var u=Pe.finalMarkToStepsMap[e];Object.keys(u).forEach((function(t){var n=u[t];n.forEach(Me),Promise.all(n.map((function(n){return function(e,t,n,r){return new(n||(n=Promise))((function(e,t){function i(e){try{o(r.next(e))}catch(e){t(e)}}function a(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}o((r=r.apply(undefined,[])).next())}))}(0,0,void 0,(function(){return function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(r){switch(r.label){case 0:return[4,De(n,t,e)];case 1:return r.sent(),[2]}}))}))}))).catch((function(){}))}))}else r=e,i=Pe.navigationSteps,o=Object.keys(i).length,(c=Ce(s=(o>0?o:1)-1)||[])[r]=!0,i[s]=c,function(e){var t,n=null!==(t=Pe.startMarkToStepsMap[e])&&void 0!==t?t:[];Object.keys(n).forEach((function(e){Pe.active[e]||(Pe.active[e]=!0)}))}(e);if(a.enableNavigationTracking){var l=Ae();null===(t=a.onMarkStep)||void 0===t||t.call(a,e,Object.keys(l))}else null===(n=a.onMarkStep)||void 0===n||n.call(a,e,Object.keys(Pe.active))},Re=function(e){u.mark(p+e),Ue(e)},qe=function(e){0===u.getEntriesByName(p+e).length&&(u.mark(p+e),Ue(e))},Fe=0,ze=function(){function e(e){if(void 0===e&&(e={}),this.v="9.0.0-rc.3",a.analyticsTracker=e.analyticsTracker,a.isResourceTiming=!!e.resourceTiming,a.isElementTiming=!!e.elementTiming,a.maxTime=e.maxMeasureTime||a.maxTime,a.reportOptions=e.reportOptions||a.reportOptions,a.steps=e.steps,a.onMarkStep=e.onMarkStep,a.enableNavigationTracking=e.enableNavigationTracking,m()){"PerformanceObserver"in o&&Ne(),void 0!==document.hidden&&document.addEventListener("visibilitychange",_);var t=function(){if(!m())return{};var e=u.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart,redirectTime:e.redirectEnd-e.redirectStart}}();R("navigationTiming",t),t.redirectTime&&q({attribution:{},name:"RT",rating:U("RT",t.redirectTime),value:t.redirectTime}),R("networkInformation",function(){if("connection"in c){var e=c.connection;return"object"!=typeof e?{}:(f=e.effectiveType,v=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),c&&c.storage&&"function"==typeof c.storage.estimate&&c.storage.estimate().then(Ie),a.steps&&a.steps&&(Pe.startMarkToStepsMap={},Pe.finalMarkToStepsMap={},Pe.active={},Pe.navigationSteps={},Object.entries(a.steps).forEach((function(e){var t,n,r=e[0],i=e[1].marks,a=i[0],o=i[1],s=null!==(n=Pe.startMarkToStepsMap[a])&&void 0!==n?n:{};if(s[r]=!0,Pe.startMarkToStepsMap[a]=s,Pe.finalMarkToStepsMap[o]){var c=Pe.finalMarkToStepsMap[o][a]||[];c.push(r),Pe.finalMarkToStepsMap[o][a]=c}else Pe.finalMarkToStepsMap[o]=((t={})[a]=[r],t)})))}}return e.prototype.start=function(e){m()&&!g[e]&&(g[e]=!0,u.mark("mark_".concat(e,"_start")))},e.prototype.end=function(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n=!0),m()&&g[e]){u.mark("mark_".concat(e,"_end")),delete g[e];var r=function(e){u.measure(e,"mark_".concat(e,"_start"),"mark_".concat(e,"_end"));var t=u.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e);n&&R(e,O(r),t)}},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete g[e],u.clearMarks&&(u.clearMarks("mark_".concat(e,"_start")),u.clearMarks("mark_".concat(e,"_end")))},e.prototype.markNTBT=function(){var e=this;this.start("ntbt"),y.value=0,clearTimeout(Fe),Fe=setTimeout((function(){e.end("ntbt",{},!1),q({attribution:{},name:"NTBT",rating:U("NTBT",y.value),value:y.value}),y.value=0}),2e3)},e}()},426:(e,t)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,i={};function a(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}function o(){}function s(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=a.prototype;var c=s.prototype=new o;c.constructor=s,r(c,a.prototype),c.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;var u={current:null};t.useCallback=function(e,t){return u.current.useCallback(e,t)},t.useEffect=function(e,t){return u.current.useEffect(e,t)},t.useRef=function(e){return u.current.useRef(e)}},784:(e,t,n)=>{"use strict";e.exports=n(426)},353:function(e,t,n){var r;!function(i,a){"use strict";var o="function",s="undefined",c="object",u="string",l="major",d="model",p="name",m="type",f="vendor",v="version",g="architecture",b="console",h="mobile",w="tablet",y="smarttv",T="wearable",k="embedded",_="Amazon",S="Apple",E="ASUS",x="BlackBerry",O="Browser",j="Chrome",N="Firefox",I="Google",P="Huawei",M="LG",B="Microsoft",C="Motorola",D="Opera",A="Samsung",L="Sharp",U="Sony",R="Xiaomi",q="Zebra",F="Facebook",z="Chromium OS",K="Mac OS",$=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},Q=function(e,t){return typeof e===u&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===u)return e=e.replace(/^\\s\\s*/,""),typeof t===s?e:e.substring(0,350)},V=function(e,t){for(var n,r,i,s,u,l,d=0;d<t.length&&!u;){var p=t[d],m=t[d+1];for(n=r=0;n<p.length&&!u&&p[n];)if(u=p[n++].exec(e))for(i=0;i<m.length;i++)l=u[++r],typeof(s=m[i])===c&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):a:this[s[0]]=l?s[1].call(this,l,s[2]):a:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):a):this[s]=l||a;d+=2}},J=function(e,t){for(var n in t)if(typeof t[n]===c&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(Q(t[n][r],e))return"?"===n?a:n}else if(Q(t[n],e))return"?"===n?a:n;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\\b(?:crmo|crios)\\/([\\w\\.]+)/i],[v,[p,"Chrome"]],[/edg(?:e|ios|a)?\\/([\\w\\.]+)/i],[v,[p,"Edge"]],[/(opera mini)\\/([-\\w\\.]+)/i,/(opera [mobiletab]{3,6})\\b.+version\\/([-\\w\\.]+)/i,/(opera)(?:.+version\\/|[\\/ ]+)([\\w\\.]+)/i],[p,v],[/opios[\\/ ]+([\\w\\.]+)/i],[v,[p,D+" Mini"]],[/\\bopr\\/([\\w\\.]+)/i],[v,[p,D]],[/(kindle)\\/([\\w\\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\\/ ]?([\\w\\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\\/ ]?([\\w\\.]*)/i,/(ba?idubrowser)[\\/ ]?([\\w\\.]+)/i,/(?:ms|\\()(ie) ([\\w\\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\\/([-\\w\\.]+)/i,/(heytap|ovi)browser\\/([\\d\\.]+)/i,/(weibo)__([\\d\\.]+)/i],[p,v],[/(?:\\buc? ?browser|(?:juc.+)ucweb)[\\/ ]?([\\w\\.]+)/i],[v,[p,"UC"+O]],[/microm.+\\bqbcore\\/([\\w\\.]+)/i,/\\bqbcore\\/([\\w\\.]+).+microm/i],[v,[p,"WeChat(Win) Desktop"]],[/micromessenger\\/([\\w\\.]+)/i],[v,[p,"WeChat"]],[/konqueror\\/([\\w\\.]+)/i],[v,[p,"Konqueror"]],[/trident.+rv[: ]([\\w\\.]{1,9})\\b.+like gecko/i],[v,[p,"IE"]],[/ya(?:search)?browser\\/([\\w\\.]+)/i],[v,[p,"Yandex"]],[/(avast|avg)\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 Secure "+O],v],[/\\bfocus\\/([\\w\\.]+)/i],[v,[p,N+" Focus"]],[/\\bopt\\/([\\w\\.]+)/i],[v,[p,D+" Touch"]],[/coc_coc\\w+\\/([\\w\\.]+)/i],[v,[p,"Coc Coc"]],[/dolfin\\/([\\w\\.]+)/i],[v,[p,"Dolphin"]],[/coast\\/([\\w\\.]+)/i],[v,[p,D+" Coast"]],[/miuibrowser\\/([\\w\\.]+)/i],[v,[p,"MIUI "+O]],[/fxios\\/([-\\w\\.]+)/i],[v,[p,N]],[/\\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 "+O],v],[/(comodo_dragon)\\/([\\w\\.]+)/i],[[p,/_/g," "],v],[/(electron)\\/([\\w\\.]+) safari/i,/(tesla)(?: qtcarbrowser|\\/(20\\d\\d\\.[-\\w\\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\\/ ]?([\\w\\.]+)/i],[p,v],[/(metasr)[\\/ ]?([\\w\\.]+)/i,/(lbbrowser)/i,/\\[(linkedin)app\\]/i],[p],[/((?:fban\\/fbios|fb_iab\\/fb4a)(?!.+fbav)|;fbav\\/([\\w\\.]+);)/i],[[p,F],v],[/(kakao(?:talk|story))[\\/ ]([\\w\\.]+)/i,/(naver)\\(.*?(\\d+\\.[\\w\\.]+).*\\)/i,/safari (line)\\/([\\w\\.]+)/i,/\\b(line)\\/([\\w\\.]+)\\/iab/i,/(chromium|instagram)[\\/ ]([-\\w\\.]+)/i],[p,v],[/\\bgsa\\/([\\w\\.]+) .*safari\\//i],[v,[p,"GSA"]],[/musical_ly(?:.+app_?version\\/|_)([\\w\\.]+)/i],[v,[p,"TikTok"]],[/headlesschrome(?:\\/([\\w\\.]+)| )/i],[v,[p,j+" Headless"]],[/ wv\\).+(chrome)\\/([\\w\\.]+)/i],[[p,j+" WebView"],v],[/droid.+ version\\/([\\w\\.]+)\\b.+(?:mobile safari|safari)/i],[v,[p,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\\/v?([\\w\\.]+)/i],[p,v],[/version\\/([\\w\\.\\,]+) .*mobile\\/\\w+ (safari)/i],[v,[p,"Mobile Safari"]],[/version\\/([\\w(\\.|\\,)]+) .*(mobile ?safari|safari)/i],[v,p],[/webkit.+?(mobile ?safari|safari)(\\/[\\w\\.]+)/i],[p,[v,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\\/([\\w\\.]+)/i],[p,v],[/(navigator|netscape\\d?)\\/([-\\w\\.]+)/i],[[p,"Netscape"],v],[/mobile vr; rv:([\\w\\.]+)\\).+firefox/i],[v,[p,N+" Reality"]],[/ekiohf.+(flow)\\/([\\w\\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\\/ ]?([\\w\\.\\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\\/([-\\w\\.]+)$/i,/(firefox)\\/([\\w\\.]+)/i,/(mozilla)\\/([\\w\\.]+) .+rv\\:.+gecko\\/\\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\\. ]?browser)[-\\/ ]?v?([\\w\\.]+)/i,/(links) \\(([\\w\\.]+)/i,/panasonic;(viera)/i],[p,v],[/(cobalt)\\/([\\w\\.]+)/i],[p,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,W]],[/((?:i[346]|x)86)[;\\)]/i],[[g,"ia32"]],[/\\b(aarch64|arm(v?8e?l?|_?64))\\b/i],[[g,"arm64"]],[/\\b(arm(?:v[67])?ht?n?[fl]p?)\\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\\))/i],[[g,/ower/,"",W]],[/(sun4\\w)[;\\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\\))|\\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\\b|pa-risc)/i],[[g,W]]],device:[[/\\b(sch-i[89]0\\d|shw-m380s|sm-[ptx]\\w{2,4}|gt-[pn]\\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[f,A],[m,w]],[/\\b((?:s[cgp]h|gt|sm)-\\w+|sc[g-]?[\\d]+a?|galaxy nexus)/i,/samsung[- ]([-\\w]+)/i,/sec-(sgh\\w+)/i],[d,[f,A],[m,h]],[/(?:\\/|\\()(ip(?:hone|od)[\\w, ]*)(?:\\/|;)/i],[d,[f,S],[m,h]],[/\\((ipad);[-\\w\\),; ]+apple/i,/applecoremedia\\/[\\w\\.]+ \\((ipad)/i,/\\b(ipad)\\d\\d?,\\d\\d?[;\\]].+ios/i],[d,[f,S],[m,w]],[/(macintosh);/i],[d,[f,S]],[/\\b(sh-?[altvz]?\\d\\d[a-ekm]?)/i],[d,[f,L],[m,h]],[/\\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\\d{2})\\b(?!.+d\\/s)/i],[d,[f,P],[m,w]],[/(?:huawei|honor)([-\\w ]+)[;\\)]/i,/\\b(nexus 6p|\\w{2,4}e?-[atu]?[ln][\\dx][012359c][adn]?)\\b(?!.+d\\/s)/i],[d,[f,P],[m,h]],[/\\b(poco[\\w ]+)(?: bui|\\))/i,/\\b; (\\w+) build\\/hm\\1/i,/\\b(hm[-_ ]?note?[_ ]?(?:\\d\\w)?) bui/i,/\\b(redmi[\\-_ ]?(?:note|k)?[\\w_ ]+)(?: bui|\\))/i,/\\b(mi[-_ ]?(?:a\\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\\d?\\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,h]],[/\\b(mi[-_ ]?(?:pad)(?:[\\w_ ]+))(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,w]],[/; (\\w+) bui.+ oppo/i,/\\b(cph[12]\\d{3}|p(?:af|c[al]|d\\w|e[ar])[mt]\\d0|x9007|a101op)\\b/i],[d,[f,"OPPO"],[m,h]],[/vivo (\\w+)(?: bui|\\))/i,/\\b(v[12]\\d{3}\\w?[at])(?: bui|;)/i],[d,[f,"Vivo"],[m,h]],[/\\b(rmx[12]\\d{3})(?: bui|;|\\))/i],[d,[f,"Realme"],[m,h]],[/\\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\\b[\\w ]+build\\//i,/\\bmot(?:orola)?[- ](\\w*)/i,/((?:moto[\\w\\(\\) ]+|xt\\d{3,4}|nexus 6)(?= bui|\\)))/i],[d,[f,C],[m,h]],[/\\b(mz60\\d|xoom[2 ]{0,2}) build\\//i],[d,[f,C],[m,w]],[/((?=lg)?[vl]k\\-?\\d{3}) bui| 3\\.[-\\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[f,M],[m,w]],[/(lm(?:-?f100[nv]?|-[\\w\\.]+)(?= bui|\\))|nexus [45])/i,/\\blg[-e;\\/ ]+((?!browser|netcast|android tv)\\w+)/i,/\\blg-?([\\d\\w]+) bui/i],[d,[f,M],[m,h]],[/(ideatab[-\\w ]+)/i,/lenovo ?(s[56]000[-\\w]+|tab(?:[\\w ]+)|yt[-\\d\\w]{6}|tb[-\\d\\w]{6})/i],[d,[f,"Lenovo"],[m,w]],[/(?:maemo|nokia).*(n900|lumia \\d+)/i,/nokia[-_ ]?([-\\w\\.]*)/i],[[d,/_/g," "],[f,"Nokia"],[m,h]],[/(pixel c)\\b/i],[d,[f,I],[m,w]],[/droid.+; (pixel[\\daxl ]{0,6})(?: bui|\\))/i],[d,[f,I],[m,h]],[/droid.+ (a?\\d[0-2]{2}so|[c-g]\\d{4}|so[-gl]\\w+|xq-a\\w[4-7][12])(?= bui|\\).+chrome\\/(?![1-6]{0,1}\\d\\.))/i],[d,[f,U],[m,h]],[/sony tablet [ps]/i,/\\b(?:sony)?sgp\\w+(?: bui|\\))/i],[[d,"Xperia Tablet"],[f,U],[m,w]],[/ (kb2005|in20[12]5|be20[12][59])\\b/i,/(?:one)?(?:plus)? (a\\d0\\d\\d)(?: b|\\))/i],[d,[f,"OnePlus"],[m,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\\))/i,/(kf[a-z]+)( bui|\\)).+silk\\//i],[d,[f,_],[m,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\\)).+silk\\//i],[[d,/(.+)/g,"Fire Phone $1"],[f,_],[m,h]],[/(playbook);[-\\w\\),; ]+(rim)/i],[d,f,[m,w]],[/\\b((?:bb[a-f]|st[hv])100-\\d)/i,/\\(bb10; (\\w+)/i],[d,[f,x],[m,h]],[/(?:\\b|asus_)(transfo[prime ]{4,10} \\w+|eeepc|slider \\w+|nexus 7|padfone|p00[cj])/i],[d,[f,E],[m,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \\d\\w?)\\b/i],[d,[f,E],[m,h]],[/(nexus 9)/i],[d,[f,"HTC"],[m,w]],[/(htc)[-;_ ]{1,2}([\\w ]+(?=\\)| bui)|\\w+)/i,/(zte)[- ]([\\w ]+?)(?: bui|\\/|\\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\\.))|sony(?!-bra))[-_ ]?([-\\w]*)/i],[f,[d,/_/g," "],[m,h]],[/droid.+; ([ab][1-7]-?[0178a]\\d\\d?)/i],[d,[f,"Acer"],[m,w]],[/droid.+; (m[1-5] note) bui/i,/\\bmz-([-\\w]{2,})/i],[d,[f,"Meizu"],[m,h]],[/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\\w]*)/i,/(hp) ([\\w ]+\\w)/i,/(asus)-?(\\w+)/i,/(microsoft); (lumia[\\w ]+)/i,/(lenovo)[-_ ]?([-\\w]+)/i,/(jolla)/i,/(oppo) ?([\\w ]+) bui/i],[f,d,[m,h]],[/(kobo)\\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\\/([\\w\\.]+)/i,/(nook)[\\w ]+build\\/(\\w+)/i,/(dell) (strea[kpr\\d ]*[\\dko])/i,/(le[- ]+pan)[- ]+(\\w{1,9}) bui/i,/(trinity)[- ]*(t\\d{3}) bui/i,/(gigaset)[- ]+(q\\w{1,9}) bui/i,/(vodafone) ([\\w ]+)(?:\\)| bui)/i],[f,d,[m,w]],[/(surface duo)/i],[d,[f,B],[m,w]],[/droid [\\d\\.]+; (fp\\du?)(?: b|\\))/i],[d,[f,"Fairphone"],[m,h]],[/(u304aa)/i],[d,[f,"AT&T"],[m,h]],[/\\bsie-(\\w*)/i],[d,[f,"Siemens"],[m,h]],[/\\b(rct\\w+) b/i],[d,[f,"RCA"],[m,w]],[/\\b(venue[\\d ]{2,7}) b/i],[d,[f,"Dell"],[m,w]],[/\\b(q(?:mv|ta)\\w+) b/i],[d,[f,"Verizon"],[m,w]],[/\\b(?:barnes[& ]+noble |bn[rt])([\\w\\+ ]*) b/i],[d,[f,"Barnes & Noble"],[m,w]],[/\\b(tm\\d{3}\\w+) b/i],[d,[f,"NuVision"],[m,w]],[/\\b(k88) b/i],[d,[f,"ZTE"],[m,w]],[/\\b(nx\\d{3}j) b/i],[d,[f,"ZTE"],[m,h]],[/\\b(gen\\d{3}) b.+49h/i],[d,[f,"Swiss"],[m,h]],[/\\b(zur\\d{3}) b/i],[d,[f,"Swiss"],[m,w]],[/\\b((zeki)?tb.*\\b) b/i],[d,[f,"Zeki"],[m,w]],[/\\b([yr]\\d{2}) b/i,/\\b(dragon[- ]+touch |dt)(\\w{5}) b/i],[[f,"Dragon Touch"],d,[m,w]],[/\\b(ns-?\\w{0,9}) b/i],[d,[f,"Insignia"],[m,w]],[/\\b((nxa|next)-?\\w{0,9}) b/i],[d,[f,"NextBook"],[m,w]],[/\\b(xtreme\\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],d,[m,h]],[/\\b(lvtel\\-)?(v1[12]) b/i],[[f,"LvTel"],d,[m,h]],[/\\b(ph-1) /i],[d,[f,"Essential"],[m,h]],[/\\b(v(100md|700na|7011|917g).*\\b) b/i],[d,[f,"Envizen"],[m,w]],[/\\b(trio[-\\w\\. ]+) b/i],[d,[f,"MachSpeed"],[m,w]],[/\\btu_(1491) b/i],[d,[f,"Rotor"],[m,w]],[/(shield[\\w ]+) b/i],[d,[f,"Nvidia"],[m,w]],[/(sprint) (\\w+)/i],[f,d,[m,h]],[/(kin\\.[onetw]{3})/i],[[d,/\\./g," "],[f,B],[m,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\\)/i],[d,[f,q],[m,w]],[/droid.+; (ec30|ps20|tc[2-8]\\d[kx])\\)/i],[d,[f,q],[m,h]],[/smart-tv.+(samsung)/i],[f,[m,y]],[/hbbtv.+maple;(\\d+)/i],[[d,/^/,"SmartTV"],[f,A],[m,y]],[/(nux; netcast.+smarttv|lg (netcast\\.tv-201\\d|android tv))/i],[[f,M],[m,y]],[/(apple) ?tv/i],[f,[d,S+" TV"],[m,y]],[/crkey/i],[[d,j+"cast"],[f,I],[m,y]],[/droid.+aft(\\w)( bui|\\))/i],[d,[f,_],[m,y]],[/\\(dtv[\\);].+(aquos)/i,/(aquos-tv[\\w ]+)\\)/i],[d,[f,L],[m,y]],[/(bravia[\\w ]+)( bui|\\))/i],[d,[f,U],[m,y]],[/(mitv-\\w{5}) bui/i],[d,[f,R],[m,y]],[/Hbbtv.*(technisat) (.*);/i],[f,d,[m,y]],[/\\b(roku)[\\dx]*[\\)\\/]((?:dvp-)?[\\d\\.]*)/i,/hbbtv\\/\\d+\\.\\d+\\.\\d+ +\\([\\w\\+ ]*; *([\\w\\d][^;]*);([^;]*)/i],[[f,H],[d,H],[m,y]],[/\\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\\b/i],[[m,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,d,[m,b]],[/droid.+; (shield) bui/i],[d,[f,"Nvidia"],[m,b]],[/(playstation [345portablevi]+)/i],[d,[f,U],[m,b]],[/\\b(xbox(?: one)?(?!; xbox))[\\); ]/i],[d,[f,B],[m,b]],[/((pebble))app/i],[f,d,[m,T]],[/(watch)(?: ?os[,\\/]|\\d,\\d\\/)[\\d\\.]+/i],[d,[f,S],[m,T]],[/droid.+; (glass) \\d/i],[d,[f,I],[m,T]],[/droid.+; (wt63?0{2,3})\\)/i],[d,[f,q],[m,T]],[/(quest( 2| pro)?)/i],[d,[f,F],[m,T]],[/(tesla)(?: qtcarbrowser|\\/[-\\w\\.]+)/i],[f,[m,k]],[/(aeobc)\\b/i],[d,[f,_],[m,k]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+? mobile safari/i],[d,[m,h]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+?(?! mobile) safari/i],[d,[m,w]],[/\\b((tablet|tab)[;\\/]|focus\\/\\d(?!.+mobile))/i],[[m,w]],[/(phone|mobile(?:[;\\/]| [ \\w\\/\\.]*safari)|pda(?=.+windows ce))/i],[[m,h]],[/(android[-\\w\\. ]{0,9});.+buil/i],[d,[f,"Generic"]]],engine:[[/windows.+ edge\\/([\\w\\.]+)/i],[v,[p,"EdgeHTML"]],[/webkit\\/537\\.36.+chrome\\/(?!27)([\\w\\.]+)/i],[v,[p,"Blink"]],[/(presto)\\/([\\w\\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\\/([\\w\\.]+)/i,/ekioh(flow)\\/([\\w\\.]+)/i,/(khtml|tasman|links)[\\/ ]\\(?([\\w\\.]+)/i,/(icab)[\\/ ]([23]\\.[\\d\\.]+)/i,/\\b(libweb)/i],[p,v],[/rv\\:([\\w\\.]{1,9})\\b.+(gecko)/i],[v,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,v],[/(windows) nt 6\\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\\/ ]?([\\d\\.\\w ]*)/i,/(windows)[\\/ ]?([ntce\\d\\. ]+\\w)(?!.+xbox)/i],[p,[v,J,X]],[/(win(?=3|9|n)|win 9x )([nt\\d\\.]+)/i],[[p,"Windows"],[v,J,X]],[/ip[honead]{2,4}\\b(?:.*os ([\\w]+) like mac|; opera)/i,/ios;fbsv\\/([\\d\\.]+)/i,/cfnetwork\\/.+darwin/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\\w\\. ]*)/i,/(macintosh|mac_powerpc\\b)(?!.+haiku)/i],[[p,K],[v,/_/g,"."]],[/droid ([\\w\\.]+)\\b.+(android[- ]x86|harmonyos)/i],[v,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\\/ ]?([\\w\\.]*)/i,/(blackberry)\\w*\\/([\\w\\.]*)/i,/(tizen|kaios)[\\/ ]([\\w\\.]+)/i,/\\((series40);/i],[p,v],[/\\(bb(10);/i],[v,[p,x]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\\/ ]?([\\w\\.]*)/i],[v,[p,"Symbian"]],[/mozilla\\/[\\d\\.]+ \\((?:mobile|tablet|tv|mobile; [\\w ]+); rv:.+ gecko\\/([\\w\\.]+)/i],[v,[p,N+" OS"]],[/web0s;.+rt(tv)/i,/\\b(?:hp)?wos(?:browser)?\\/([\\w\\.]+)/i],[v,[p,"webOS"]],[/watch(?: ?os[,\\/]|\\d,\\d\\/)([\\d\\.]+)/i],[v,[p,"watchOS"]],[/crkey\\/([\\d\\.]+)/i],[v,[p,j+"cast"]],[/(cros) [\\w]+(?:\\)| ([\\w\\.]+)\\b)/i],[[p,z],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\\/(\\d+\\.[\\w\\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\\);]+)/i,/\\b(joli|palm)\\b ?(?:os)?\\/?([\\w\\.]*)/i,/(mint)[\\/\\(\\) ]?(\\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\\/ ]?(?!chrom|package)([-\\w\\.]*)/i,/(hurd|linux) ?([\\w\\.]*)/i,/(gnu) ?([\\w\\.]*)/i,/\\b([-frentopcghs]{0,5}bsd|dragonfly)[\\/ ]?(?!amd|[ix346]{1,2}86)([\\w\\.]*)/i,/(haiku) (\\w+)/i],[p,v],[/(sunos) ?([\\w\\.\\d]*)/i],[[p,"Solaris"],v],[/((?:open)?solaris)[-\\/ ]?([\\w\\.]*)/i,/(aix) ((\\d)(?=\\.|\\)| )[\\w\\.])*/i,/\\b(beos|os\\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\\w\\.]*)/i],[p,v]]},Z=function(e,t){if(typeof e===c&&(t=e,e=a),!(this instanceof Z))return new Z(e,t).getResult();var n=typeof i!==s&&i.navigator?i.navigator:a,r=e||(n&&n.userAgent?n.userAgent:""),b=n&&n.userAgentData?n.userAgentData:a,y=t?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(G,t):G,T=n&&n.userAgent==r;return this.getBrowser=function(){var e,t={};return t[p]=a,t[v]=a,V.call(t,r,y.browser),t[l]=typeof(e=t[v])===u?e.replace(/[^\\d\\.]/g,"").split(".")[0]:a,T&&n&&n.brave&&typeof n.brave.isBrave==o&&(t[p]="Brave"),t},this.getCPU=function(){var e={};return e[g]=a,V.call(e,r,y.cpu),e},this.getDevice=function(){var e={};return e[f]=a,e[d]=a,e[m]=a,V.call(e,r,y.device),T&&!e[m]&&b&&b.mobile&&(e[m]=h),T&&"Macintosh"==e[d]&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[d]="iPad",e[m]=w),e},this.getEngine=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.engine),e},this.getOS=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.os),T&&!e[p]&&b&&"Unknown"!=b.platform&&(e[p]=b.platform.replace(/chrome os/i,z).replace(/macos/i,K)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===u&&e.length>350?H(e,350):e,this},this.setUA(r),this};Z.VERSION="1.0.35",Z.BROWSER=$([p,v,l]),Z.CPU=$([g]),Z.DEVICE=$([d,f,m,b,h,y,w,T,k]),Z.ENGINE=Z.OS=$([p,v]),typeof t!==s?(e.exports&&(t=e.exports=Z),t.UAParser=Z):n.amdO?(r=function(){return Z}.call(t,n,t,e))===a||(e.exports=r):typeof i!==s&&(i.UAParser=Z);var Y=typeof i!==s&&(i.jQuery||i.Zepto);if(Y&&!Y.ua){var ee=new Z;Y.ua=ee.getResult(),Y.ua.get=function(){return ee.getUA()},Y.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var n in t)Y.ua[n]=t[n]}}}("object"==typeof window?window:this)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionType:()=>f,AmplitudePlatformName:()=>g,AnalyticsEventImportance:()=>l,AnalyticsQueries:()=>e,AuthStatus:()=>b,ComponentType:()=>m,IThresholdTier:()=>Jt,MetricType:()=>d,PlatformName:()=>v,SessionActions:()=>h,SessionAutomatedEvents:()=>w,SessionRank:()=>y,SubjectType:()=>p,UserTypeCommerce:()=>c,UserTypeInsto:()=>i,UserTypeRetail:()=>t,UserTypeRetailBusinessBanking:()=>s,UserTypeRetailEmployeeInternal:()=>a,UserTypeRetailEmployeePersonal:()=>o,UserTypeWallet:()=>u,automatedEvents:()=>xn,automatedMappingConfig:()=>In,clearMarkEntry:()=>Vn,clearPerformanceMarkEntries:()=>Xn,config:()=>A,createEventConfig:()=>On,createNewSpan:()=>Ln,createNewTrace:()=>Un,device:()=>W,endPerfMark:()=>Jn,exposeExperiment:()=>wn,flushQueue:()=>or,generateUUID:()=>V,getAnalyticsHeaders:()=>sr,getReferrerData:()=>le,getTracingHeaders:()=>An,getTracingId:()=>Dn,getUrlHostname:()=>pe,getUrlParams:()=>me,getUrlPathname:()=>fe,getUserContext:()=>ar,identify:()=>Tn,identifyFlow:()=>xe,identity:()=>H,identityFlow:()=>Se,incrementUjNavigation:()=>an,init:()=>yn,initNextJsTrackPageview:()=>_n,initTrackPageview:()=>kn,isEventKeyFormatValid:()=>we,isSessionEnded:()=>pt,location:()=>re,logEvent:()=>$t,logMetric:()=>Ht,logPageView:()=>on,logTrace:()=>Rn,markNTBT:()=>tn,markStep:()=>nn,markStepOnce:()=>rn,onVisibilityChange:()=>ln,optIn:()=>En,optOut:()=>Sn,perfMark:()=>Wn,persistentData:()=>oe,postMessage:()=>K,recordSessionDuration:()=>pn,removeFromIdentifyFlow:()=>Ee,savePersistentData:()=>st,sendScheduledEvents:()=>Bt,setBreadcrumbs:()=>ie,setConfig:()=>U,setLocation:()=>ae,setPagePath:()=>ve,setPageview:()=>Kt,setPersistentData:()=>se,setSessionStart:()=>dt,setTime:()=>Ue,startPerfMark:()=>Hn,timeStone:()=>Le,useEventLogger:()=>Yn,useLogEventOnMount:()=>tr,usePerformanceMarks:()=>rr});let e=function(e){return e.fbclid="fbclid",e.gclid="gclid",e.msclkid="msclkid",e.ptclid="ptclid",e.ttclid="ttclid",e.utm_source="utm_source",e.utm_medium="utm_medium",e.utm_campaign="utm_campaign",e.utm_term="utm_term",e.utm_content="utm_content",e}({});const t=0,i=1,a=2,o=3,s=4,c=5,u=6;let l=function(e){return e.low="low",e.high="high",e}({}),d=function(e){return e.count="count",e.rate="rate",e.gauge="gauge",e.distribution="distribution",e.histogram="histogram",e}({}),p=function(e){return e.commerce_merchant="commerce_merchant",e.device="device",e.edp_fingerprint_id="edp_fingerprint_id",e.nft_user="nft_user",e.user="user",e.wallet_user="wallet_user",e.uuid="user_uuid",e}({}),m=function(e){return e.unknown="unknown",e.banner="banner",e.button="button",e.card="card",e.chart="chart",e.content_script="content_script",e.dropdown="dropdown",e.link="link",e.page="page",e.modal="modal",e.table="table",e.search_bar="search_bar",e.service_worker="service_worker",e.text="text",e.text_input="text_input",e.tray="tray",e.checkbox="checkbox",e.icon="icon",e}({}),f=function(e){return e.unknown="unknown",e.blur="blur",e.click="click",e.change="change",e.dismiss="dismiss",e.focus="focus",e.hover="hover",e.select="select",e.measurement="measurement",e.move="move",e.process="process",e.render="render",e.scroll="scroll",e.view="view",e.search="search",e.keyPress="keyPress",e}({}),v=function(e){return e.unknown="unknown",e.web="web",e.android="android",e.ios="ios",e.mobile_web="mobile_web",e.tablet_web="tablet_web",e.server="server",e.windows="windows",e.macos="macos",e.extension="extension",e}({}),g=function(e){return e.web="Web",e.ios="iOS",e.android="Android",e}({}),b=function(e){return e[e.notLoggedIn=0]="notLoggedIn",e[e.loggedIn=1]="loggedIn",e}({}),h=function(e){return e.ac="ac",e.af="af",e.ah="ah",e.al="al",e.am="am",e.ar="ar",e.as="as",e}({}),w=function(e){return e.pv="pv",e}({}),y=function(e){return e.xs="xs",e.s="s",e.m="m",e.l="l",e.xl="xl",e.xxl="xxl",e}({});const T="https://analytics-service-dev.cbhq.net",k=3e5,_=5e3,S="analytics-db",E="experiment-exposure-db",x="Analytics SDK:",O=Object.values(e),j="pageview",N="session_duration",I={navigationTiming:{eventName:"perf_navigation_timing"},redirectTime:{eventName:"perf_redirect_time"},RT:{eventName:"perf_redirect_time"},TTFB:{eventName:"perf_time_to_first_byte"},networkInformation:{eventName:"perf_network_information"},storageEstimate:{eventName:"perf_storage_estimate"},FCP:{eventName:"perf_first_contentful_paint"},FID:{eventName:"perf_first_input_delay"},LCP:{eventName:"perf_largest_contentful_paint"},CLS:{eventName:"perf_cumulative_layout_shift"},TBT:{eventName:"perf_total_blocking_time"},NTBT:{eventName:"perf_navigation_total_blocking_time"},INP:{eventName:"perf_interact_to_next_paint"},ET:{eventName:"perf_element_timing"},userJourneyStep:{eventName:"perf_user_journey_step"}},P="1",M="web";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const C=/^(https?:\\/\\/)/;function D(e){return{eventsEndpoint:e+"/amp",metricsEndPoint:e+"/metrics",exposureEndpoint:e+"/track-exposures",tracesEndpoint:e+"/traces"}}const A=B({authCookie:"logged_in",amplitudeApiKey:"",batchEventsPeriod:_,batchEventsThreshold:30,batchMetricsPeriod:_,batchMetricsThreshold:30,batchTracesPeriod:_,batchTracesThreshold:30,headers:{},interactionManager:null,isAlwaysAuthed:!1,isProd:!1,isInternalApplication:!1,onError:(e,t)=>{console.error(x,e,t)},platform:v.unknown,projectName:"",ricTimeoutScheduleEvent:1e3,ricTimeoutSetDevice:500,showDebugLogging:!1,trackUserId:!1,version:null,apiEndpoint:T},D(T),{steps:{}}),L=[].reduce(((e,t)=>n=>e(t(n))),(e=>{if(!e.isProd)return e.isInternalApplication?(e.apiEndpoint="https://analytics-service-internal-dev.cbhq.net",B({},e,D(e.apiEndpoint))):e;const t=(e=>e.apiEndpoint?C.test(e.apiEndpoint)?e.apiEndpoint:\`https://\${e.apiEndpoint}\`:e.isInternalApplication?"https://analytics-service-internal.cbhq.net":"https://as.coinbase.com")(e);return B({},e,{apiEndpoint:t},D(t))})),U=e=>{const{batchEventsThreshold:t,batchMetricsThreshold:n,batchTracesThreshold:r}=e,i=[t,n,r];for(const e of i)if((e||0)>30){console.warn("You are setting the threshhold for the batch limit to be greater than 30. This may cause request overload.");break}Object.assign(A,L(e))},R=[v.web,v.mobile_web,v.tablet_web];function q(){return"android"===A.platform}function F(){return"ios"===A.platform}function z(){return R.includes(A.platform)}function K(e){if(z()&&navigator&&"serviceWorker"in navigator&&navigator.serviceWorker.controller)try{navigator.serviceWorker.controller.postMessage(e)}catch(e){e instanceof Error&&A.onError(e)}}var $=n(353),Q=n.n($);const W={amplitudeOSName:null,amplitudeOSVersion:null,amplitudeDeviceModel:null,amplitudePlatform:null,browserName:null,browserMajor:null,osName:null,userAgent:null,width:null,height:null},H={countryCode:null,deviceId:null,device_os:null,isOptOut:!1,languageCode:null,locale:null,jwt:null,session_lcc_id:null,userAgent:null,userId:null},V=e=>e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,V),J=()=>A.isAlwaysAuthed||!!H.userId,X=()=>{const e={};return H.countryCode&&(e.country_code=H.countryCode),e},G=()=>{const{platform:e}=A;if(e===v.web)switch(!0){case window.matchMedia("(max-width: 560px)").matches:return v.mobile_web;case window.matchMedia("(max-width: 1024px, min-width: 561px)").matches:return v.tablet_web}return e},Z=()=>{var e,t,n,r,i;z()?("requestIdleCallback"in window?window.requestIdleCallback(ne,{timeout:A.ricTimeoutSetDevice}):ne(),W.amplitudePlatform=g.web,W.userAgent=(null==(e=window)||null==(e=e.navigator)?void 0:e.userAgent)||null,ee({height:null!=(t=null==(n=window)?void 0:n.innerHeight)?t:null,width:null!=(r=null==(i=window)?void 0:i.innerWidth)?r:null})):F()?(W.amplitudePlatform=g.ios,W.userAgent=H.userAgent,W.userAgent&&ne()):q()&&(W.userAgent=H.userAgent,W.amplitudePlatform=g.android,W.userAgent&&ne())},Y=e=>{Object.assign(H,e),z()&&K({identity:{isAuthed:!!H.userId,locale:H.locale||null}})},ee=e=>{W.height=e.height,W.width=e.width},te=()=>{U({platform:G()}),z()&&K({config:{platform:A.platform}})},ne=()=>{var e;performance.mark&&performance.mark("ua_parser_start");const t=new(Q())(null!=(e=W.userAgent)?e:"").getResult();W.browserName=t.browser.name||null,W.browserMajor=t.browser.major||null,W.osName=t.os.name||null,W.amplitudeOSName=W.browserName,W.amplitudeOSVersion=W.browserMajor,W.amplitudeDeviceModel=W.osName,K({device:{browserName:W.browserName,osName:W.osName}}),performance.mark&&(performance.mark("ua_parser_end"),performance.measure("ua_parser","ua_parser_start","ua_parser_end"))},re={breadcrumbs:[],initialUAAData:{},pageKey:"",pageKeyRegex:{},pagePath:"",prevPageKey:"",prevPagePath:""};function ie(e){Object.assign(re,{breadcrumbs:e})}function ae(e){Object.assign(re,e)}const oe={eventId:0,sequenceNumber:0,sessionId:0,lastEventTime:0,sessionStart:0,sessionUUID:null,userId:null,ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0};function se(e){Object.assign(oe,e)}function ce(){var e,t;return null!=(e=null==(t=document)?void 0:t.referrer)?e:""}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}const le=()=>{const e=ce();if(!e)return{};const t=new URL(e);return t.hostname===pe()?{}:{referrer:e,referring_domain:t.hostname}},de=()=>{const e=new URLSearchParams(me()),t={};return O.forEach((n=>{e.has(n)&&(t[n]=(e.get(n)||"").toLowerCase())})),t},pe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.hostname)||""},me=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.search)||""},fe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.pathname)||""},ve=()=>{const e=A.overrideWindowLocation?re.pagePath:fe()+me();e&&e!==re.pagePath&&(e!==re.pagePath&&ge(),re.pagePath=e,re.pageKeyRegex&&Object.keys(re.pageKeyRegex).some((e=>{if(re.pageKeyRegex[e].test(re.pagePath))return re.pageKey=e,!0})))},ge=()=>{if(z()){const e=ce();if(!re.prevPagePath&&e){const t=new URL(e);if(t.hostname===pe())return void(re.prevPagePath=t.pathname)}}re.prevPagePath=re.pagePath,re.prevPageKey=re.pageKey},be=e=>{z()&&Object.assign(e,z()?(Object.keys(re.initialUAAData).length>0||(new URLSearchParams(me()),re.initialUAAData=ue({},(()=>{const e={};return O.forEach((t=>{oe[t]&&(e[t]=oe[t])})),e})(),de(),le())),re.initialUAAData):re.initialUAAData)},he=/^[a-zd]+(_[a-zd]+)*$/;function we(e){return he.test(e)}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}const Te=["action","component_type","component_name","context","logging_id"],ke=["num_non_hardware_accounts","ujs"],_e="ujs_",Se={};function Ee(e){e.forEach((e=>{ke.includes(e)&&delete Se[e]}))}function xe(e){var t;const n=Object.entries(e).reduce(((e,t)=>{const[n,r]=t;return!Te.includes(n)&&ke.includes(n)?we(n)?ye({},e,{[n]:r}):(A.onError(new Error("IdentityFlow property names must have snake case format"),{[n]:r}),e):e}),{});null!=(t=n.ujs)&&t.length&&(n.ujs=n.ujs.map((e=>\`\${_e}\${e}\`))),Object.assign(Se,n)}function Oe(){return A.platform!==v.unknown||(A.onError(new Error("SDK platform not initialized")),!1)}const je={eventsQueue:[],eventsScheduled:!1,metricsQueue:[],metricsScheduled:!1,tracesQueue:[],tracesScheduled:!1};function Ne(e){Object.assign(je,e)}const Ie={ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0},Pe={ac:20,af:5,ah:1,al:1,am:0,ar:10,as:20},Me={pv:25},Be={xs:0,s:1,m:1,l:2,xl:2,xxl:2},Ce=e=>e<15?y.xs:e<60?y.s:e<240?y.m:e<960?y.l:e<3840?y.xl:y.xxl,De=e=>{Object.assign(Ie,e)};function Ae(){return(new Date).getTime()}const Le={timeStart:Ae(),timeOnPagePath:0,timeOnPageKey:0,prevTimeOnPagePath:0,prevTimeOnPageKey:0,sessionDuration:0,sessionEnd:0,sessionStart:0,prevSessionDuration:0};function Ue(e){Object.assign(Le,e)}const Re=(e,t)=>t.some((t=>e instanceof t));let qe,Fe;const ze=new WeakMap,Ke=new WeakMap,$e=new WeakMap,Qe=new WeakMap,We=new WeakMap;let He={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ke.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ve(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Xe(this),e),Je(ze.get(this))}:function(...e){return Je(t.apply(Xe(this),e))}:function(e,...n){const r=t.call(Xe(this),e,...n);return $e.set(r,e.sort?e.sort():[e]),Je(r)}:(e instanceof IDBTransaction&&function(e){if(Ke.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ke.set(e,t)}(e),Re(e,qe||(qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,He):e);var t}function Je(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(Je(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&ze.set(t,e)})).catch((()=>{})),We.set(t,e),t}(e);if(Qe.has(e))return Qe.get(e);const t=Ve(e);return t!==e&&(Qe.set(e,t),We.set(t,e)),t}const Xe=e=>We.get(e),Ge=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],Ye=new Map;function et(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ye.get(t))return Ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ge.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Ye.set(t,a),a}var tt;tt=He,He={...tt,get:(e,t,n)=>et(e,t)||tt.get(e,t,n),has:(e,t)=>!!et(e,t)||tt.has(e,t)};const nt={isReady:!1,idbKeyval:null};function rt(e){Object.assign(nt,e)}const it={},at=async e=>{if(!nt.idbKeyval)return Promise.resolve(null);try{return await nt.idbKeyval.get(e)}catch(e){return A.onError(new Error("IndexedDB:Get:InternalError")),Promise.resolve(null)}},ot=async(e,t)=>{if(nt.idbKeyval)try{await nt.idbKeyval.set(e,t)}catch(e){A.onError(new Error("IndexedDB:Set:InternalError"))}},st=()=>{"server"!==A.platform&&(se({sessionStart:Le.sessionStart,ac:Ie.ac,af:Ie.af,ah:Ie.ah,al:Ie.al,am:Ie.am,ar:Ie.ar,as:Ie.as,pv:Ie.pv}),H.userId&&se({userId:H.userId}),ot(S,oe))},ct="rgb(5,177,105)",ut=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=\`%c \${x}\`,a=\`color:\${ct};font-size:11px;\`,o=\`Importance: \${r}\`;console.group(i,a,t,o),n.forEach((e=>{e.event_type?console.log(e.event_type,e):console.log(e)})),console.groupEnd()},lt=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=\`color:\${ct};font-size:11px;\`,a=\`%c \${x}\`,o=\`Importance: \${r}\`;console.log(a,i,t,n,o)},dt=()=>{const e=Ae();oe.sessionId&&oe.lastEventTime&&oe.sessionUUID&&!pt(e)||(oe.sessionId=e,oe.sessionUUID=V(),Ue({sessionStart:e}),lt({metricName:"Started new session:",data:{persistentData:oe,timeStone:Le}})),oe.lastEventTime=e},pt=e=>e-oe.lastEventTime>18e5;function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}const ft=e=>{var t;(e=>{switch(e.action){case f.click:Ie.ac+=1;break;case f.focus:Ie.af+=1;break;case f.hover:Ie.ah+=1;break;case f.move:Ie.am+=1;break;case f.scroll:Ie.al+=1;break;case f.search:Ie.ar+=1;break;case f.select:Ie.as+=1}})(t=e),t.event_type!==j?t.event_type===N&&((e=>{if(!e.session_rank)return;const t=e.session_rank;Object.values(h).forEach((e=>{Ie.sqs+=Ie[e]*Pe[e]})),Object.values(w).forEach((e=>{Ie.sqs+=Ie[e]*Me[e]})),Ie.sqs*=Be[t]})(t),Object.assign(t,Ie),De({ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0})):Ie.pv+=1;const n=e.event_type;delete e.event_type;const r=e.deviceId?e.deviceId:null,i=e.timestamp;return delete e.timestamp,se({eventId:oe.eventId+1}),se({sequenceNumber:oe.sequenceNumber+1}),dt(),st(),{device_id:H.deviceId||r||null,user_id:H.userId,timestamp:i,event_id:oe.eventId,session_id:oe.sessionId||-1,event_type:n,version_name:A.version||null,platform:W.amplitudePlatform,os_name:W.amplitudeOSName,os_version:W.amplitudeOSVersion,device_model:W.amplitudeDeviceModel,language:H.languageCode,event_properties:mt({},e,{session_uuid:oe.sessionUUID,height:W.height,width:W.width}),user_properties:X(),uuid:V(),library:{name:"@cbhq/client-analytics",version:"10.6.0"},sequence_number:oe.sequenceNumber,user_agent:W.userAgent||H.userAgent}},vt=e=>e.map((e=>ft(e)));function gt(){return gt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gt.apply(this,arguments)}const bt=e=>e.map((e=>(e=>{const t=e.tags||{},n=gt({authed:J()?"true":"false",platform:A.platform},t,{project_name:A.projectName,version_name:A.version||null});return{metric_name:e.metricName,page_path:e.pagePath||null,value:e.value,tags:n,type:e.metricType}})(e))),ht=e=>0!==je.metricsQueue.length&&(je.metricsQueue.length>=A.batchMetricsThreshold||(je.metricsScheduled||(je.metricsScheduled=!0,setTimeout((()=>{je.metricsScheduled=!1,e(bt(je.metricsQueue)),je.metricsQueue=[]}),A.batchMetricsPeriod)),!1)),wt=e=>0!==je.tracesQueue.length&&(je.tracesQueue.length>=A.batchTracesThreshold||(je.tracesScheduled||(je.tracesScheduled=!0,setTimeout((()=>{je.tracesScheduled=!1,e(je.tracesQueue),je.tracesQueue=[]}),A.batchTracesPeriod)),!1)),yt=e=>{var t;z()&&null!=(t=window)&&t.requestIdleCallback?window.requestIdleCallback(e,{timeout:A.ricTimeoutScheduleEvent}):(q()||F())&&A.interactionManager?A.interactionManager.runAfterInteractions(e):e()};function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}const kt="application/x-www-form-urlencoded; charset=UTF-8",_t=e=>{const{data:t,importance:n,isJSON:r,onError:i,url:a}=e,o=r?"application/json":kt,s=n||l.low,c=r?JSON.stringify(t):new URLSearchParams(t).toString();function u(){const e=new XMLHttpRequest;e.open("POST",a,!0),Object.keys(A.headers||{}).forEach((t=>{e.setRequestHeader(t,A.headers[t])})),e.setRequestHeader("Content-Type",kt),H.jwt&&e.setRequestHeader("authorization",\`Bearer \${H.jwt}\`),e.send(c)}if(!z()||r||!("sendBeacon"in navigator)||s!==l.low||A.headers&&0!==Object.keys(A.headers).length)if(z()&&!r)u();else{const e=Tt({},A.headers,{"Content-Type":o});H.jwt&&(e.Authorization=\`Bearer \${H.jwt}\`),fetch(a,{method:"POST",mode:"no-cors",headers:e,body:c}).catch((e=>{i(e,{context:"AnalyticsSDKApiError"})}))}else{const e=new Blob([c],{type:kt});try{navigator.sendBeacon.bind(navigator)(a,e)||u()}catch(e){console.error(e),u()}}};var St=n(762),Et=n.n(St);const xt=(e,t,n)=>{const r=e||"";return Et()("2"+r+t+n)};function Ot(){return Ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ot.apply(this,arguments)}class jt extends Error{constructor(e){super(e),this.name="CircularJsonReference",this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class Nt extends jt{constructor(...e){super(...e),this.name="DomReferenceInAnalyticsEvent"}}function It(){return It=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},It.apply(this,arguments)}const Pt=(e,t=l.low)=>{var n;e&&je.eventsQueue.push(e),nt.isReady&&(!A.trackUserId||H.userId?(t===l.high||(n=Mt,0!==je.eventsQueue.length&&(je.eventsQueue.length>=A.batchEventsThreshold||(je.eventsScheduled||(je.eventsScheduled=!0,setTimeout((()=>{je.eventsScheduled=!1,n(vt(je.eventsQueue)),je.eventsQueue=[]}),A.batchEventsPeriod)),0))))&&Bt():je.eventsQueue.length>10&&(A.trackUserId=!1,A.onError(new Error("userId not set in Logged-in"))))},Mt=(e,t=l.low)=>{if(H.isOptOut||0===e.length)return;let n;try{n=JSON.stringify(e)}catch(t){const r=e.map((e=>e.event_type)).join(", "),[i,a]=(e=>{try{const n=[];for(const r of e){const e=Ot({},r);r.event_properties&&(e.event_properties=Ot({},e.event_properties,{currentTarget:null,target:null,relatedTarget:null,_dispatchInstances:null,_targetInst:null,view:(t=r.event_properties.view,["string","number","boolean"].includes(typeof t)?r.event_properties.view:null)})),n.push(e)}return[!0,JSON.stringify(n)]}catch(e){return[!1,""]}var t})(e);if(!i)return void A.onError(new jt(t instanceof Error?t.message:"unknown"),{listEventType:r});n=a,A.onError(new Nt("Found DOM element reference"),{listEventType:r,stringifiedEventData:n})}const r=Ae().toString(),i=It({},{e:n,v:"2",upload_time:r},{client:A.amplitudeApiKey,checksum:xt(A.amplitudeApiKey,n,r)});_t({url:A.eventsEndpoint,data:i,importance:t,onError:A.onError}),ut({metricName:"Batch Events",data:e,importance:t})},Bt=()=>{Mt(vt(je.eventsQueue)),Ne({eventsQueue:[]})};function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ct.apply(this,arguments)}const Dt=Object.values(f),At=Object.values(m),Lt=e=>Dt.includes(e)?e:f.unknown,Ut=e=>At.includes(e)?e:m.unknown,Rt=(e,t,n)=>{const r={auth:J()?b.loggedIn:b.notLoggedIn,action:Lt(e),component_type:Ut(t),logging_id:n,platform:A.platform,project_name:A.projectName};return"number"==typeof H.userTypeEnum&&(r.user_type_enum=H.userTypeEnum),r},qt=e=>{const t=Ae();if(!e)return A.onError(new Error("missing logData")),Ct({},Rt(f.unknown,m.unknown),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});const n=Ct({},e,Rt(e.action,e.componentType,e.loggingId),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});return delete n.componentType,delete n.loggingId,n},Ft={blacklistRegex:[],isEnabled:!1};function zt(){return{page_key:re.pageKey,page_path:re.pagePath,prev_page_key:re.prevPageKey,prev_page_path:re.prevPagePath}}function Kt(e){Object.assign(Ft,e)}function $t(e,t,n=l.low){if(H.isOptOut)return;if(!Oe())return;const r=qt(t);!function(e){Ft.isEnabled&&(ve(),Object.assign(e,zt()))}(r),be(r),function(e){Object.keys(Se).length>0&&Object.assign(e,Se)}(r),r.has_double_fired=!1,r.event_type=e,n===l.high?Pt(r,n):yt((()=>{Pt(r)}))}function Qt(e,t=!1){t?_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Metrics",data:e})}function Wt(){return Wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wt.apply(this,arguments)}function Ht(e){if(!Oe())return;v.server!==A.platform&&!e.pagePath&&re.pagePath&&(e.pagePath=re.pagePath);const t=Object.keys(Se).length?Wt({},e.tags,Se):e.tags;t&&Object.assign(e,{tags:t}),je.metricsQueue.push(e),ht(Qt)&&(Qt(bt(je.metricsQueue)),je.metricsQueue=[])}function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vt.apply(this,arguments)}let Jt=function(e){return e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable",e}({});function Xt(e){return e.toLowerCase()}let Gt={};const Zt=(e,t)=>{null!=A&&A.onMarkStep&&A.onMarkStep(e,t),xe({ujs:t})};let Yt;const en={Perfume:()=>{},markStep:e=>{},markStepOnce:e=>{},incrementUjNavigation:()=>{}},tn=()=>{z()&&Yt&&Yt.markNTBT&&Yt.markNTBT()},nn=e=>{z()&&Yt&&en.markStep&&en.markStep(e)},rn=e=>{z()&&Yt&&en.markStepOnce&&en.markStepOnce(e)},an=()=>{z()&&Yt&&en.incrementUjNavigation&&en.incrementUjNavigation()};function on(e={callMarkNTBT:!0}){"unknown"!==A.platform&&(Ft.blacklistRegex.some((e=>e.test(fe())))||($t(j,{action:f.render,componentType:m.page}),e.callMarkNTBT&&tn()))}let sn=!1,cn=!1;const un=e=>{sn=!e.persisted},ln=(e,t="hidden",n=!1)=>{cn||(addEventListener("pagehide",un),addEventListener("beforeunload",(()=>{})),cn=!0),addEventListener("visibilitychange",(({timeStamp:n})=>{document.visibilityState===t&&e({timeStamp:n,isUnloading:sn})}),{capture:!0,once:n})},dn=36e3;function pn(){const e=pt(Ae());if(e&&(O.forEach((e=>{oe[e]&&delete oe[e]})),st()),!oe.lastEventTime||!Le.sessionStart||!e)return;const t=Math.round((oe.lastEventTime-Le.sessionStart)/1e3);if(t<1||t>dn)return;const n=Ce(t);$t(N,{action:f.measurement,componentType:m.page,session_duration:t,session_end:oe.lastEventTime,session_start:Le.sessionStart,session_rank:n})}function mn(){return mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mn.apply(this,arguments)}const fn=[],vn=[],gn=()=>{const e=fn.shift();e&&e()},bn=()=>{const e=vn.shift();e&&e()};let hn={};function wn(e){const t=function(e){return{test_name:e.testName,group_name:e.group,subject_id:e.subjectId,exposed_at:Ae(),subject_type:e.subjectType,platform:A.platform}}(e);hn[e.testName]=hn[e.testName]||0,hn[e.testName]+k>Ae()?lt({metricName:\`Event: exposeExperiment \${e.testName} not sent\`,data:t}):(hn[e.testName]=Ae(),ot(E,hn),lt({metricName:\`Event: exposeExperiment \${e.testName} sent\`,data:t}),_t({url:A.exposureEndpoint,data:[t],onError:(t,n)=>{hn[e.testName]=0,ot(E,hn),A.onError(t,n)},isJSON:!0,importance:l.high}))}const yn=e=>{var t,r,i;U(e),z()&&(H.languageCode=(null==(t=navigator)?void 0:t.languages[0])||(null==(r=navigator)?void 0:r.language)||""),te(),(()=>{var e;if(z()&&null!=(e=window)&&e.indexedDB){const e=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Je(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Je(o.result),e.oldVersion,e.newVersion,Je(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}});rt({idbKeyval:{get:async t=>(await e).get("keyval",t),set:async(t,n)=>(await e).put("keyval",n,t),delete:async t=>(await e).delete("keyval",t),keys:async()=>(await e).getAllKeys("keyval")}})}else rt({idbKeyval:{get:async e=>new Promise((t=>{t(it[e])})),set:async(e,t)=>new Promise((n=>{it[e]=t,n(e)})),delete:async e=>new Promise((()=>{delete it[e]})),keys:async()=>new Promise((e=>{e(Object.keys(it))}))}})})(),lt({metricName:"Initialized Analytics:",data:{deviceId:H.deviceId}}),fn.push((()=>{Pt()})),(async()=>{const e=await at(S);rt({isReady:!0}),gn(),e&&(bn(),se({eventId:e.eventId||oe.eventId,sequenceNumber:e.sequenceNumber||oe.sequenceNumber,sessionId:e.sessionId||oe.sessionId,lastEventTime:e.lastEventTime||oe.lastEventTime,sessionUUID:e.sessionUUID||oe.sessionUUID}),function(e){se(mn({},function(e){const t={};return O.forEach((n=>{e[n]&&(t[n]=e[n])})),t}(e),de()))}(e),Ue({sessionStart:e.sessionStart||oe.sessionStart}),De({ac:e.ac||Ie.ac,af:e.af||Ie.af,ah:e.ah||Ie.ah,al:e.al||Ie.al,am:e.am||Ie.am,ar:e.ar||Ie.ar,as:e.as||Ie.as,pv:e.pv||Ie.pv}),A.trackUserId&&Y({userId:e.userId||H.userId}),pn(),lt({metricName:"Initialized Analytics IndexedDB:",data:e}))})(),async function(){at(E).then((e=>{hn=null!=e?e:{}})).catch((e=>{e instanceof Error&&A.onError(e)}))}(),Z(),z()&&(ln((()=>{se({lastEventTime:Ae()}),st(),Bt()}),"hidden"),ln((()=>{pn()}),"visible")),z()&&(i=()=>{var e,t,n,r;te(),ee({width:null!=(e=null==(t=window)?void 0:t.innerWidth)?e:null,height:null!=(n=null==(r=window)?void 0:r.innerHeight)?n:null})},addEventListener("resize",(()=>{requestAnimationFrame((()=>{i()}))}))),(()=>{if(z())try{const e=n(2);en.markStep=e.markStep,en.markStepOnce=e.markStepOnce,en.incrementUjNavigation=e.incrementUjNavigation,Yt=new e.Perfume({analyticsTracker:e=>{const{data:t,attribution:n,metricName:r,navigatorInformation:i,rating:a}=e,o=I[r],s=(null==n?void 0:n.category)||null;if(!o&&!s)return;const c=(null==i?void 0:i.deviceMemory)||0,u=(null==i?void 0:i.hardwareConcurrency)||0,l=(null==i?void 0:i.isLowEndDevice)||!1,p=(null==i?void 0:i.isLowEndExperience)||!1,v=(null==i?void 0:i.serviceWorkerStatus)||"unsupported",g=Vt({deviceMemory:c,hardwareConcurrency:u,isLowEndDevice:l,isLowEndExperience:p,serviceWorkerStatus:v},Gt),b={is_low_end_device:l,is_low_end_experience:p,page_key:re.pageKey||"",save_data:t.saveData||!1,service_worker:v,is_perf_metric:!0};if("navigationTiming"===r)t&&"number"==typeof t.redirectTime&&Ht({metricName:I.redirectTime.eventName,metricType:d.histogram,tags:b,value:t.redirectTime||0});else if("TTFB"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),Ht({metricName:I.TTFB.eventName,metricType:d.histogram,tags:Vt({},b),value:t}),a&&Ht({metricName:\`perf_web_vitals_ttfb_\${a}\`,metricType:d.count,tags:b,value:1});else if("networkInformation"===r)null!=t&&t.effectiveType&&(Gt=t,$t(o.eventName,{action:f.measurement,componentType:m.page,networkInformationDownlink:t.downlink,networkInformationEffectiveType:t.effectiveType,networkInformationRtt:t.rtt,networkInformationSaveData:t.saveData,navigatorDeviceMemory:c,navigatorHardwareConcurrency:u}));else if("storageEstimate"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page},t,g)),Ht({metricName:"perf_storage_estimate_caches",metricType:d.histogram,tags:b,value:t.caches}),Ht({metricName:"perf_storage_estimate_indexed_db",metricType:d.histogram,tags:b,value:t.indexedDB});else if("CLS"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,score:100*t||null,vitalsScore:a||null},g)),a&&Ht({metricName:\`perf_web_vitals_cls_\${a}\`,metricType:d.count,tags:b,value:1});else if("FID"===r){const e=(null==n?void 0:n.performanceEntry)||null,r=parseInt((null==e?void 0:e.processingStart)||"");$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,processingStart:null!=e&&e.processingStart?r:null,startTime:null!=e&&e.startTime?parseInt(e.startTime):null,vitalsScore:a||null},g)),a&&Ht({metricName:\`perf_web_vitals_fidVitals_\${a}\`,metricType:d.count,tags:b,value:1})}else"userJourneyStep"===r?($t("perf_user_journey_step",Vt({action:f.measurement,componentType:m.page,duration:t||null,rating:null!=a?a:null,step_name:(null==n?void 0:n.stepName)||""},g)),Ht({metricName:\`user_journey_step.\${A.projectName}.\${A.platform}.\${(null==n?void 0:n.stepName)||""}_vitals_\${a}\`,metricType:d.count,tags:b,value:1}),Ht({metricName:\`user_journey_step.\${A.projectName}.\${A.platform}.\${(null==n?void 0:n.stepName)||""}\`,metricType:d.distribution,tags:b,value:t||null})):I[r]&&t&&($t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),a&&(Ht({metricName:\`perf_web_vitals_\${Xt(r)}_\${a}\`,metricType:d.count,tags:b,value:1}),"LCP"===r&&Ht({metricName:\`perf_web_vitals_\${Xt(r)}\`,metricType:d.distribution,tags:b,value:t})))},maxMeasureTime:3e4,steps:A.steps,onMarkStep:Zt})}catch(e){e instanceof Error&&A.onError(e)}})()},Tn=e=>{Y(e),e.userAgent&&Z(),lt({metricName:"Identify:",data:{countryCode:H.countryCode,deviceId:H.deviceId,userId:H.userId}})},kn=({blacklistRegex:e,pageKeyRegex:t,browserHistory:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.listen((()=>{on()}))},_n=({blacklistRegex:e,pageKeyRegex:t,nextJsRouter:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.events.on("routeChangeComplete",(()=>{on()}))},Sn=()=>{Y({isOptOut:!0}),ot(S,{})},En=()=>{Y({isOptOut:!1})},xn={Button:{label:"cb_button",uuid:"e921a074-40e6-4371-8700-134d5cd633e6",componentType:m.button}};function On(e,t,n){return{componentName:e,actions:t,data:n}}function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)}function Nn(e,t,n){const{componentName:r,data:i}=n;$t(e.label,jn({componentType:e.componentType,action:t,loggingId:e.uuid,component_name:r},i))}const In={actionMapping:{onPress:f.click,onHover:f.hover},handlers:{Button:{[f.click]:e=>Nn(xn.Button,f.click,e),[f.hover]:e=>Nn(xn.Button,f.hover,e)}}};function Pn(e,t=!1){t?_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Traces",data:e})}function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mn.apply(this,arguments)}const Bn=1e6;function Cn(e){return e*Bn}function Dn(e=function(){var e;return null==(e=window)?void 0:e.crypto}()){const t=new Uint32Array(2);return null==e||e.getRandomValues(t),((BigInt(t[0])<<BigInt(32))+BigInt(t[1])).toString()}function An(e,t){return{"x-datadog-origin":"rum","x-datadog-parent-id":t,"x-datadog-sampling-priority":"1","x-datadog-trace-id":e}}function Ln(e){var t;const{name:n,traceId:r,spanId:i,start:a,duration:o,resource:s,meta:c}=e;return{duration:o?Cn(o):0,name:n,resource:s,service:A.projectName,span_id:null!=i?i:Dn(),start:a?Cn(a):0,trace_id:null!=r?r:Dn(),parent_id:P,type:M,meta:Mn({platform:A.platform},re.pageKey?{page_key:re.pageKey}:{},null!=(t=Se.ujs)&&t.length?{last_ujs:Se.ujs[Se.ujs.length-1]}:{},null!=c?c:{})}}function Un(e){return[Ln(e)]}function Rn(e,t){Oe()&&function(e){return e.length>0}(e)&&(t&&function(e,t){e.forEach((e=>function(e,t){const n=Mn({},e.meta,t.meta),r={start:t.start?Cn(t.start):e.start,duration:t.duration?Cn(t.duration):e.duration};Object.assign(e,t,Mn({meta:n},r))}(e,t)))}(e,t),je.tracesQueue.push(e),wt(Pn)&&(Pn(je.tracesQueue),je.tracesQueue=[]))}function qn(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}function Fn(){return Fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fn.apply(this,arguments)}function zn(){return void 0!==typeof window&&"performance"in window&&"mark"in performance&&"getEntriesByName"in performance}function Kn(e,t){return\`perf_\${e}\${null!=t&&t.label?\`_\${t.label}\`:""}\`}function $n(e,t,n){return\`\${Kn(e,n)}__\${t}\`}let Qn={};function Wn(e,t,n){if(!zn())return;const r=$n(e,t,n);if(performance.mark(r),"end"===t){const t=Kn(e,n);!function(e,t,n){try{performance.measure(e,t,n)}catch(e){A.onError(e)}}(t,$n(e,"start",n),r);const i=performance.getEntriesByName(t).pop();i&&Ht(Fn({metricName:e,metricType:d.distribution,value:i.duration},null!=n&&n.tags?{tags:n.tags}:{}))}}function Hn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]||(Wn(e,"start",t),Qn[n]=!0)}function Vn(e,t){const n=$n(e,"start",t),r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(Qn,[n].map(qn));Qn=r}function Jn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]&&(Wn(e,"end",t),Vn(e,t))}function Xn(){zn()&&(performance.clearMarks(),Qn={})}var Gn=n(784);function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zn.apply(this,arguments)}function Yn(e,t,n=l.low){const r=(0,Gn.useRef)(t);return(0,Gn.useEffect)((()=>{r.current=t}),[t]),(0,Gn.useCallback)((t=>{$t(e,Zn({},r.current,t),n)}),[e,n])}function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(this,arguments)}function tr(e,t,n=l.low){(0,Gn.useEffect)((()=>{const r=er({},t,{action:f.render});$t(e,r,n)}),[])}function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}const rr=function(e,t){return{markStartPerf:(0,Gn.useCallback)((()=>Hn(e,t)),[e,t]),markEndPerf:(0,Gn.useCallback)((n=>Jn(e,nr({},t,n))),[e,t])}};function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}function ar(){return Object.entries(ir({},Se,zt(),{sessionUUID:oe.sessionUUID,userId:oe.userId})).reduce(((e,t)=>{return null!=(n=t[1])&&""!==n?ir({},e,{[t[0]]:t[1]}):e;var n}),{})}async function or(){return new Promise((e=>{Mt(vt(je.eventsQueue)),Qt(bt(je.metricsQueue),!0),Pn(je.tracesQueue,!0),Ne({eventsQueue:[],metricsQueue:[],tracesQueue:[]}),e()}))}function sr(){return{"X-CB-Device-ID":H.deviceId||"unknown","X-CB-Is-Logged-In":H.userId?"true":"false","X-CB-Pagekey":re.pageKey||"unknown","X-CB-UJS":(e=Se.ujs,void 0===e||0===e.length?"":e.join(",")),"X-CB-Platform":A.platform||"unknown","X-CB-Project-Name":A.projectName||"unknown","X-CB-Session-UUID":oe.sessionUUID||"unknown","X-CB-Version-Name":A.version?String(A.version):"unknown"};var e}})(),r})()}));`;
//# sourceMappingURL=telemetry-content.js.map
;// ./node_modules/@base-org/account/dist/core/telemetry/initCCA.js


const loadTelemetryScript = () => {
    return new Promise((resolve, reject) => {
        if (typeof window === 'undefined') {
            reject(new Error('Telemetry is not supported in non-browser environments'));
            return;
        }
        if (window.ClientAnalytics) {
            return resolve();
        }
        try {
            const script = document.createElement('script');
            script.textContent = TELEMETRY_SCRIPT_CONTENT;
            script.type = 'text/javascript';
            document.head.appendChild(script);
            initCCA();
            document.head.removeChild(script);
            resolve();
        }
        catch {
            console.error('Failed to execute inlined telemetry script');
            reject();
        }
    });
};
const initCCA = () => {
    if (typeof window !== 'undefined') {
        const deviceId = store.config.get().deviceId ?? crypto?.randomUUID() ?? '';
        if (window.ClientAnalytics) {
            const { init, identify, PlatformName } = window.ClientAnalytics;
            init({
                isProd: true,
                amplitudeApiKey: 'c66737ad47ec354ced777935b0af822e',
                platform: PlatformName.web,
                projectName: 'base_account_sdk',
                showDebugLogging: false,
                version: '1.0.0',
                apiEndpoint: 'https://cca-lite.coinbase.com',
            });
            identify({ deviceId });
            store.config.set({ deviceId });
        }
    }
};
//# sourceMappingURL=initCCA.js.map
;// ./node_modules/@base-org/account/dist/sign/base-account/utils/constants.js
/**********************************************************************
 * Constants
 **********************************************************************/
const factoryAddress = '0xba5ed110efdba3d005bfc882d75358acbbb85842';
const spendPermissionManagerAddress = '0xf85210B21cC50302F477BA56686d2019dC9b67Ad';
const abi = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
        inputs: [{ name: 'owner', type: 'bytes' }],
        name: 'AlreadyOwner',
        type: 'error',
    },
    { inputs: [], name: 'Initialized', type: 'error' },
    {
        inputs: [{ name: 'owner', type: 'bytes' }],
        name: 'InvalidEthereumAddressOwner',
        type: 'error',
    },
    {
        inputs: [{ name: 'key', type: 'uint256' }],
        name: 'InvalidNonceKey',
        type: 'error',
    },
    {
        inputs: [{ name: 'owner', type: 'bytes' }],
        name: 'InvalidOwnerBytesLength',
        type: 'error',
    },
    { inputs: [], name: 'LastOwner', type: 'error' },
    {
        inputs: [{ name: 'index', type: 'uint256' }],
        name: 'NoOwnerAtIndex',
        type: 'error',
    },
    {
        inputs: [{ name: 'ownersRemaining', type: 'uint256' }],
        name: 'NotLastOwner',
        type: 'error',
    },
    {
        inputs: [{ name: 'selector', type: 'bytes4' }],
        name: 'SelectorNotAllowed',
        type: 'error',
    },
    { inputs: [], name: 'Unauthorized', type: 'error' },
    { inputs: [], name: 'UnauthorizedCallContext', type: 'error' },
    { inputs: [], name: 'UpgradeFailed', type: 'error' },
    {
        inputs: [
            { name: 'index', type: 'uint256' },
            { name: 'expectedOwner', type: 'bytes' },
            { name: 'actualOwner', type: 'bytes' },
        ],
        name: 'WrongOwnerAtIndex',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'index',
                type: 'uint256',
            },
            { indexed: false, name: 'owner', type: 'bytes' },
        ],
        name: 'AddOwner',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'index',
                type: 'uint256',
            },
            { indexed: false, name: 'owner', type: 'bytes' },
        ],
        name: 'RemoveOwner',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'implementation',
                type: 'address',
            },
        ],
        name: 'Upgraded',
        type: 'event',
    },
    { stateMutability: 'payable', type: 'fallback' },
    {
        inputs: [],
        name: 'REPLAYABLE_NONCE_KEY',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'owner', type: 'address' }],
        name: 'addOwnerAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { name: 'x', type: 'bytes32' },
            { name: 'y', type: 'bytes32' },
        ],
        name: 'addOwnerPublicKey',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ name: 'functionSelector', type: 'bytes4' }],
        name: 'canSkipChainIdValidation',
        outputs: [{ name: '', type: 'bool' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'domainSeparator',
        outputs: [{ name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            { name: 'fields', type: 'bytes1' },
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
            { name: 'salt', type: 'bytes32' },
            { name: 'extensions', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'entryPoint',
        outputs: [{ name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { name: 'target', type: 'address' },
            { name: 'value', type: 'uint256' },
            { name: 'data', type: 'bytes' },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'target', type: 'address' },
                    { name: 'value', type: 'uint256' },
                    { name: 'data', type: 'bytes' },
                ],
                name: 'calls',
                type: 'tuple[]',
            },
        ],
        name: 'executeBatch',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ name: 'calls', type: 'bytes[]' }],
        name: 'executeWithoutChainIdValidation',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'sender', type: 'address' },
                    { name: 'nonce', type: 'uint256' },
                    { name: 'initCode', type: 'bytes' },
                    { name: 'callData', type: 'bytes' },
                    { name: 'callGasLimit', type: 'uint256' },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256',
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { name: 'maxFeePerGas', type: 'uint256' },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256',
                    },
                    { name: 'paymasterAndData', type: 'bytes' },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'userOp',
                type: 'tuple',
            },
        ],
        name: 'getUserOpHashWithoutChainId',
        outputs: [{ name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'implementation',
        outputs: [{ name: '$', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'owners', type: 'bytes[]' }],
        name: 'initialize',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'isOwnerAddress',
        outputs: [{ name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'account', type: 'bytes' }],
        name: 'isOwnerBytes',
        outputs: [{ name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { name: 'x', type: 'bytes32' },
            { name: 'y', type: 'bytes32' },
        ],
        name: 'isOwnerPublicKey',
        outputs: [{ name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { name: 'hash', type: 'bytes32' },
            { name: 'signature', type: 'bytes' },
        ],
        name: 'isValidSignature',
        outputs: [{ name: 'result', type: 'bytes4' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'nextOwnerIndex',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'index', type: 'uint256' }],
        name: 'ownerAtIndex',
        outputs: [{ name: '', type: 'bytes' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'ownerCount',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { name: 'index', type: 'uint256' },
            { name: 'owner', type: 'bytes' },
        ],
        name: 'removeLastOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { name: 'index', type: 'uint256' },
            { name: 'owner', type: 'bytes' },
        ],
        name: 'removeOwnerAtIndex',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'removedOwnersCount',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'hash', type: 'bytes32' }],
        name: 'replaySafeHash',
        outputs: [{ name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { name: 'newImplementation', type: 'address' },
            { name: 'data', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'sender', type: 'address' },
                    { name: 'nonce', type: 'uint256' },
                    { name: 'initCode', type: 'bytes' },
                    { name: 'callData', type: 'bytes' },
                    { name: 'callGasLimit', type: 'uint256' },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256',
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { name: 'maxFeePerGas', type: 'uint256' },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256',
                    },
                    { name: 'paymasterAndData', type: 'bytes' },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'userOp',
                type: 'tuple',
            },
            { name: 'userOpHash', type: 'bytes32' },
            { name: 'missingAccountFunds', type: 'uint256' },
        ],
        name: 'validateUserOp',
        outputs: [{ name: 'validationData', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    { stateMutability: 'payable', type: 'receive' },
];
const factoryAbi = [
    {
        inputs: [{ name: 'implementation_', type: 'address' }],
        stateMutability: 'payable',
        type: 'constructor',
    },
    { inputs: [], name: 'OwnerRequired', type: 'error' },
    {
        inputs: [
            { name: 'owners', type: 'bytes[]' },
            { name: 'nonce', type: 'uint256' },
        ],
        name: 'createAccount',
        outputs: [
            {
                name: 'account',
                type: 'address',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            { name: 'owners', type: 'bytes[]' },
            { name: 'nonce', type: 'uint256' },
        ],
        name: 'getAddress',
        outputs: [{ name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'implementation',
        outputs: [{ name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'initCodeHash',
        outputs: [{ name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
];
const spendPermissionManagerAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: 'publicERC6492Validator',
                type: 'address',
                internalType: 'contract PublicERC6492Validator',
            },
            { name: 'magicSpend', type: 'address', internalType: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'receive', stateMutability: 'payable' },
    {
        type: 'function',
        name: 'MAGIC_SPEND',
        inputs: [],
        outputs: [{ name: '', type: 'address', internalType: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'NATIVE_TOKEN',
        inputs: [],
        outputs: [{ name: '', type: 'address', internalType: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'PERMISSION_DETAILS_TYPEHASH',
        inputs: [],
        outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'PUBLIC_ERC6492_VALIDATOR',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'address',
                internalType: 'contract PublicERC6492Validator',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'SPEND_PERMISSION_BATCH_TYPEHASH',
        inputs: [],
        outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'SPEND_PERMISSION_TYPEHASH',
        inputs: [],
        outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'approve',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'approveBatchWithSignature',
        inputs: [
            {
                name: 'spendPermissionBatch',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermissionBatch',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    {
                        name: 'permissions',
                        type: 'tuple[]',
                        internalType: 'struct SpendPermissionManager.PermissionDetails[]',
                        components: [
                            {
                                name: 'spender',
                                type: 'address',
                                internalType: 'address',
                            },
                            {
                                name: 'token',
                                type: 'address',
                                internalType: 'address',
                            },
                            {
                                name: 'allowance',
                                type: 'uint160',
                                internalType: 'uint160',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                internalType: 'uint256',
                            },
                            {
                                name: 'extraData',
                                type: 'bytes',
                                internalType: 'bytes',
                            },
                        ],
                    },
                ],
            },
            { name: 'signature', type: 'bytes', internalType: 'bytes' },
        ],
        outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'approveWithRevoke',
        inputs: [
            {
                name: 'permissionToApprove',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
            {
                name: 'permissionToRevoke',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
            {
                name: 'expectedLastUpdatedPeriod',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.PeriodSpend',
                components: [
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'spend', type: 'uint160', internalType: 'uint160' },
                ],
            },
        ],
        outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'approveWithSignature',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
            { name: 'signature', type: 'bytes', internalType: 'bytes' },
        ],
        outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'eip712Domain',
        inputs: [],
        outputs: [
            { name: 'fields', type: 'bytes1', internalType: 'bytes1' },
            { name: 'name', type: 'string', internalType: 'string' },
            { name: 'version', type: 'string', internalType: 'string' },
            { name: 'chainId', type: 'uint256', internalType: 'uint256' },
            {
                name: 'verifyingContract',
                type: 'address',
                internalType: 'address',
            },
            { name: 'salt', type: 'bytes32', internalType: 'bytes32' },
            {
                name: 'extensions',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getBatchHash',
        inputs: [
            {
                name: 'spendPermissionBatch',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermissionBatch',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    {
                        name: 'permissions',
                        type: 'tuple[]',
                        internalType: 'struct SpendPermissionManager.PermissionDetails[]',
                        components: [
                            {
                                name: 'spender',
                                type: 'address',
                                internalType: 'address',
                            },
                            {
                                name: 'token',
                                type: 'address',
                                internalType: 'address',
                            },
                            {
                                name: 'allowance',
                                type: 'uint160',
                                internalType: 'uint160',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                internalType: 'uint256',
                            },
                            {
                                name: 'extraData',
                                type: 'bytes',
                                internalType: 'bytes',
                            },
                        ],
                    },
                ],
            },
        ],
        outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getCurrentPeriod',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [
            {
                name: '',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.PeriodSpend',
                components: [
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'spend', type: 'uint160', internalType: 'uint160' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getHash',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getLastUpdatedPeriod',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [
            {
                name: '',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.PeriodSpend',
                components: [
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'spend', type: 'uint160', internalType: 'uint160' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'isApproved',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'isRevoked',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'isValid',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'revoke',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'revokeAsSpender',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'spend',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
            { name: 'value', type: 'uint160', internalType: 'uint160' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'spendWithWithdraw',
        inputs: [
            {
                name: 'spendPermission',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
            { name: 'value', type: 'uint160', internalType: 'uint160' },
            {
                name: 'withdrawRequest',
                type: 'tuple',
                internalType: 'struct MagicSpend.WithdrawRequest',
                components: [
                    { name: 'signature', type: 'bytes', internalType: 'bytes' },
                    { name: 'asset', type: 'address', internalType: 'address' },
                    { name: 'amount', type: 'uint256', internalType: 'uint256' },
                    { name: 'nonce', type: 'uint256', internalType: 'uint256' },
                    { name: 'expiry', type: 'uint48', internalType: 'uint48' },
                ],
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        name: 'SpendPermissionApproved',
        inputs: [
            {
                name: 'hash',
                type: 'bytes32',
                indexed: true,
                internalType: 'bytes32',
            },
            {
                name: 'spendPermission',
                type: 'tuple',
                indexed: false,
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'SpendPermissionRevoked',
        inputs: [
            {
                name: 'hash',
                type: 'bytes32',
                indexed: true,
                internalType: 'bytes32',
            },
            {
                name: 'spendPermission',
                type: 'tuple',
                indexed: false,
                internalType: 'struct SpendPermissionManager.SpendPermission',
                components: [
                    { name: 'account', type: 'address', internalType: 'address' },
                    { name: 'spender', type: 'address', internalType: 'address' },
                    { name: 'token', type: 'address', internalType: 'address' },
                    {
                        name: 'allowance',
                        type: 'uint160',
                        internalType: 'uint160',
                    },
                    { name: 'period', type: 'uint48', internalType: 'uint48' },
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'salt', type: 'uint256', internalType: 'uint256' },
                    { name: 'extraData', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'SpendPermissionUsed',
        inputs: [
            {
                name: 'hash',
                type: 'bytes32',
                indexed: true,
                internalType: 'bytes32',
            },
            {
                name: 'account',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'spender',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'token',
                type: 'address',
                indexed: false,
                internalType: 'address',
            },
            {
                name: 'periodSpend',
                type: 'tuple',
                indexed: false,
                internalType: 'struct SpendPermissionManager.PeriodSpend',
                components: [
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'spend', type: 'uint160', internalType: 'uint160' },
                ],
            },
        ],
        anonymous: false,
    },
    {
        type: 'error',
        name: 'AfterSpendPermissionEnd',
        inputs: [
            {
                name: 'currentTimestamp',
                type: 'uint48',
                internalType: 'uint48',
            },
            { name: 'end', type: 'uint48', internalType: 'uint48' },
        ],
    },
    {
        type: 'error',
        name: 'BeforeSpendPermissionStart',
        inputs: [
            {
                name: 'currentTimestamp',
                type: 'uint48',
                internalType: 'uint48',
            },
            { name: 'start', type: 'uint48', internalType: 'uint48' },
        ],
    },
    {
        type: 'error',
        name: 'ERC721TokenNotSupported',
        inputs: [{ name: 'token', type: 'address', internalType: 'address' }],
    },
    { type: 'error', name: 'EmptySpendPermissionBatch', inputs: [] },
    {
        type: 'error',
        name: 'ExceededSpendPermission',
        inputs: [
            { name: 'value', type: 'uint256', internalType: 'uint256' },
            { name: 'allowance', type: 'uint256', internalType: 'uint256' },
        ],
    },
    {
        type: 'error',
        name: 'InvalidLastUpdatedPeriod',
        inputs: [
            {
                name: 'actualLastUpdatedPeriod',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.PeriodSpend',
                components: [
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'spend', type: 'uint160', internalType: 'uint160' },
                ],
            },
            {
                name: 'expectedLastUpdatedPeriod',
                type: 'tuple',
                internalType: 'struct SpendPermissionManager.PeriodSpend',
                components: [
                    { name: 'start', type: 'uint48', internalType: 'uint48' },
                    { name: 'end', type: 'uint48', internalType: 'uint48' },
                    { name: 'spend', type: 'uint160', internalType: 'uint160' },
                ],
            },
        ],
    },
    {
        type: 'error',
        name: 'InvalidSender',
        inputs: [
            { name: 'sender', type: 'address', internalType: 'address' },
            { name: 'expected', type: 'address', internalType: 'address' },
        ],
    },
    { type: 'error', name: 'InvalidSignature', inputs: [] },
    {
        type: 'error',
        name: 'InvalidStartEnd',
        inputs: [
            { name: 'start', type: 'uint48', internalType: 'uint48' },
            { name: 'end', type: 'uint48', internalType: 'uint48' },
        ],
    },
    {
        type: 'error',
        name: 'InvalidWithdrawRequestNonce',
        inputs: [
            {
                name: 'noncePostfix',
                type: 'uint128',
                internalType: 'uint128',
            },
            {
                name: 'permissionHashPostfix',
                type: 'uint128',
                internalType: 'uint128',
            },
        ],
    },
    {
        type: 'error',
        name: 'MismatchedAccounts',
        inputs: [
            {
                name: 'firstAccount',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'secondAccount',
                type: 'address',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'error',
        name: 'SafeERC20FailedOperation',
        inputs: [{ name: 'token', type: 'address', internalType: 'address' }],
    },
    {
        type: 'error',
        name: 'SpendTokenWithdrawAssetMismatch',
        inputs: [
            { name: 'spendToken', type: 'address', internalType: 'address' },
            {
                name: 'withdrawAsset',
                type: 'address',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'error',
        name: 'SpendValueOverflow',
        inputs: [{ name: 'value', type: 'uint256', internalType: 'uint256' }],
    },
    {
        type: 'error',
        name: 'SpendValueWithdrawAmountMismatch',
        inputs: [
            { name: 'spendValue', type: 'uint256', internalType: 'uint256' },
            {
                name: 'withdrawAmount',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
    },
    { type: 'error', name: 'UnauthorizedSpendPermission', inputs: [] },
    {
        type: 'error',
        name: 'UnexpectedReceiveAmount',
        inputs: [
            { name: 'received', type: 'uint256', internalType: 'uint256' },
            { name: 'expected', type: 'uint256', internalType: 'uint256' },
        ],
    },
    { type: 'error', name: 'ZeroAllowance', inputs: [] },
    { type: 'error', name: 'ZeroPeriod', inputs: [] },
    { type: 'error', name: 'ZeroSpender', inputs: [] },
    { type: 'error', name: 'ZeroToken', inputs: [] },
    { type: 'error', name: 'ZeroValue', inputs: [] },
];
//# sourceMappingURL=constants.js.map
;// ./node_modules/@base-org/account/dist/core/error/constants.js
const standardErrorCodes = {
    rpc: {
        invalidInput: -32000,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603,
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
        unsupportedChain: 4902,
    },
};
const errorValues = {
    '-32700': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
    },
    '-32600': {
        standard: 'JSON RPC 2.0',
        message: 'The JSON sent is not a valid Request object.',
    },
    '-32601': {
        standard: 'JSON RPC 2.0',
        message: 'The method does not exist / is not available.',
    },
    '-32602': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid method parameter(s).',
    },
    '-32603': {
        standard: 'JSON RPC 2.0',
        message: 'Internal JSON-RPC error.',
    },
    '-32000': {
        standard: 'EIP-1474',
        message: 'Invalid input.',
    },
    '-32001': {
        standard: 'EIP-1474',
        message: 'Resource not found.',
    },
    '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.',
    },
    '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.',
    },
    '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.',
    },
    '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.',
    },
    '4001': {
        standard: 'EIP-1193',
        message: 'User rejected the request.',
    },
    '4100': {
        standard: 'EIP-1193',
        message: 'The requested account and/or method has not been authorized by the user.',
    },
    '4200': {
        standard: 'EIP-1193',
        message: 'The requested method is not supported by this Ethereum provider.',
    },
    '4900': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from all chains.',
    },
    '4901': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from the specified chain.',
    },
    '4902': {
        standard: 'EIP-3085',
        message: 'Unrecognized chain ID.',
    },
};
//# sourceMappingURL=constants.js.map
;// ./node_modules/@base-org/account/dist/core/error/utils.js

const FALLBACK_MESSAGE = 'Unspecified error message.';
const JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 */
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (code && Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(errorValues, codeString)) {
            return errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
            return JSON_RPC_SERVER_ERROR_MESSAGE;
        }
    }
    return fallbackMessage;
}
/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 */
function isValidCode(code) {
    if (!Number.isInteger(code)) {
        return false;
    }
    const codeString = code.toString();
    if (errorValues[codeString]) {
        return true;
    }
    if (isJsonRpcServerError(code)) {
        return true;
    }
    return false;
}
/**
 * Returns the error code from an error object.
 */
function getErrorCode(error) {
    if (typeof error === 'number') {
        return error;
    }
    if (isErrorWithCode(error)) {
        return error.code ?? error.errorCode;
    }
    return undefined;
}
function isErrorWithCode(error) {
    return (typeof error === 'object' &&
        error !== null &&
        (typeof error.code === 'number' ||
            typeof error.errorCode === 'number'));
}
function serialize(error, { shouldIncludeStack = false } = {}) {
    const serialized = {};
    if (error &&
        typeof error === 'object' &&
        !Array.isArray(error) &&
        hasKey(error, 'code') &&
        isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === 'string') {
            serialized.message = _error.message;
            if (hasKey(_error, 'data')) {
                serialized.data = _error.data;
            }
        }
        else {
            serialized.message = getMessageFromCode(serialized.code);
            serialized.data = { originalError: assignOriginalError(error) };
        }
    }
    else {
        serialized.code = standardErrorCodes.rpc.internal;
        serialized.message = hasStringProperty(error, 'message') ? error.message : FALLBACK_MESSAGE;
        serialized.data = { originalError: assignOriginalError(error) };
    }
    if (shouldIncludeStack) {
        serialized.stack = hasStringProperty(error, 'stack') ? error.stack : undefined;
    }
    return serialized;
}
// Internal
function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32000;
}
function assignOriginalError(error) {
    if (error && typeof error === 'object' && !Array.isArray(error)) {
        return Object.assign({}, error);
    }
    return error;
}
function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function hasStringProperty(obj, prop) {
    return (typeof obj === 'object' && obj !== null && prop in obj && typeof obj[prop] === 'string');
}
//# sourceMappingURL=utils.js.map
;// ./node_modules/@base-org/account/dist/core/error/errors.js


const standardErrors = {
    rpc: {
        parse: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.parse, arg),
        invalidRequest: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidRequest, arg),
        invalidParams: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidParams, arg),
        methodNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotFound, arg),
        internal: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.internal, arg),
        server: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum RPC Server errors must provide single object argument.');
            }
            const { code } = opts;
            if (!Number.isInteger(code) || code > -32005 || code < -32099) {
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            }
            return getEthJsonRpcError(code, opts);
        },
        invalidInput: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidInput, arg),
        resourceNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceNotFound, arg),
        resourceUnavailable: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceUnavailable, arg),
        transactionRejected: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.transactionRejected, arg),
        methodNotSupported: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotSupported, arg),
        limitExceeded: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.limitExceeded, arg),
    },
    provider: {
        userRejectedRequest: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.userRejectedRequest, arg);
        },
        unauthorized: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.unauthorized, arg);
        },
        unsupportedMethod: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.unsupportedMethod, arg);
        },
        disconnected: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.disconnected, arg);
        },
        chainDisconnected: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.chainDisconnected, arg);
        },
        unsupportedChain: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.unsupportedChain, arg);
        },
        custom: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum Provider custom errors must provide single object argument.');
            }
            const { code, message, data } = opts;
            if (!message || typeof message !== 'string') {
                throw new Error('"message" must be a nonempty string');
            }
            return new EthereumProviderError(code, message, data);
        },
    },
};
// Internal
function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new EthereumRpcError(code, message || getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new EthereumProviderError(code, message || getMessageFromCode(code), data);
}
function parseOpts(arg) {
    if (arg) {
        if (typeof arg === 'string') {
            return [arg];
        }
        if (typeof arg === 'object' && !Array.isArray(arg)) {
            const { message, data } = arg;
            if (message && typeof message !== 'string') {
                throw new Error('Must specify string message.');
            }
            return [message || undefined, data];
        }
    }
    return [];
}
class EthereumRpcError extends Error {
    code;
    data;
    constructor(code, message, data) {
        if (!Number.isInteger(code)) {
            throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== 'string') {
            throw new Error('"message" must be a nonempty string.');
        }
        super(message);
        this.code = code;
        if (data !== undefined) {
            this.data = data;
        }
    }
}
class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
    }
}
class ActionableInsufficientBalanceError extends (/* unused pure expression or super */ null && (EthereumRpcError)) {
}
function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1000 && code <= 4999;
}
function isActionableHttpRequestError(errorObject) {
    return (typeof errorObject === 'object' &&
        errorObject !== null &&
        'code' in errorObject &&
        'data' in errorObject &&
        errorObject.code === -32090 &&
        typeof errorObject.data === 'object' &&
        errorObject.data !== null &&
        'type' in errorObject.data &&
        errorObject.data.type === 'INSUFFICIENT_FUNDS');
}
function isViemError(error) {
    // Check if object and has code, message, and details
    return typeof error === 'object' && error !== null && 'details' in error;
}
function viemHttpErrorToProviderError(error) {
    try {
        const details = JSON.parse(error.details);
        return new EthereumRpcError(details.code, details.message, details.data);
    }
    catch (_) {
        return null;
    }
}
//# sourceMappingURL=errors.js.map
;// ./node_modules/@base-org/account/dist/util/assertPresence.js

function assertPresence(value, error, message) {
    if (value === null || value === undefined) {
        throw (error ??
            standardErrors.rpc.invalidParams({
                message: message ?? 'value must be present',
                data: value,
            }));
    }
}
function assertArrayPresence(value, message) {
    if (!Array.isArray(value)) {
        throw standardErrors.rpc.invalidParams({
            message: message ?? 'value must be an array',
            data: value,
        });
    }
}
//# sourceMappingURL=assertPresence.js.map
;// ./node_modules/@base-org/account/dist/util/checkCrossOriginOpenerPolicy.js
const COOP_ERROR_MESSAGE = `Base Account SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Base Account app.

Please see https://docs.base.org/smart-wallet/quickstart#cross-origin-opener-policy for more information.`;
/**
 * Creates a checker for the Cross-Origin-Opener-Policy (COOP).
 *
 * @returns An object with methods to get and check the Cross-Origin-Opener-Policy.
 *
 * @method getCrossOriginOpenerPolicy
 * Retrieves current Cross-Origin-Opener-Policy.
 * @throws Will throw an error if the policy has not been checked yet.
 *
 * @method checkCrossOriginOpenerPolicy
 * Checks the Cross-Origin-Opener-Policy of the current environment.
 * If in a non-browser environment, sets the policy to 'non-browser-env'.
 * If in a browser environment, fetches the policy from the current origin.
 * Logs an error if the policy is 'same-origin'.
 */
const createCoopChecker = () => {
    let crossOriginOpenerPolicy;
    return {
        getCrossOriginOpenerPolicy: () => {
            if (crossOriginOpenerPolicy === undefined) {
                return 'undefined';
            }
            return crossOriginOpenerPolicy;
        },
        checkCrossOriginOpenerPolicy: async () => {
            if (typeof window === 'undefined') {
                // Non-browser environment
                crossOriginOpenerPolicy = 'non-browser-env';
                return;
            }
            try {
                const url = `${window.location.origin}${window.location.pathname}`;
                const response = await fetch(url, {
                    method: 'HEAD',
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = response.headers.get('Cross-Origin-Opener-Policy');
                crossOriginOpenerPolicy = result ?? 'null';
                if (crossOriginOpenerPolicy === 'same-origin') {
                    console.error(COOP_ERROR_MESSAGE);
                }
            }
            catch (error) {
                console.error('Error checking Cross-Origin-Opener-Policy:', error.message);
                crossOriginOpenerPolicy = 'error';
            }
        },
    };
};
const { checkCrossOriginOpenerPolicy, getCrossOriginOpenerPolicy } = createCoopChecker();
//# sourceMappingURL=checkCrossOriginOpenerPolicy.js.map
;// ./node_modules/@base-org/account/dist/util/validatePreferences.js
/**
 * Validates user supplied preferences. Throws if keys are not valid.
 * @param preference
 */
function validatePreferences(preference) {
    if (!preference) {
        return;
    }
    if (preference.attribution) {
        if (preference.attribution.auto !== undefined &&
            preference.attribution.dataSuffix !== undefined) {
            throw new Error(`Attribution cannot contain both auto and dataSuffix properties`);
        }
    }
    if (preference.telemetry) {
        if (typeof preference.telemetry !== 'boolean') {
            throw new Error(`Telemetry must be a boolean`);
        }
    }
}
/**
 * Validates user supplied toSubAccountSigner function. Throws if keys are not valid.
 * @param toAccount
 */
function validateSubAccount(toAccount) {
    if (typeof toAccount !== 'function') {
        throw new Error(`toAccount is not a function`);
    }
}
//# sourceMappingURL=validatePreferences.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeAbiParameters.js + 1 modules
var decodeAbiParameters = __webpack_require__(541821);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeFunctionData.js + 1 modules
var encodeFunctionData = __webpack_require__(277330);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(584192);
;// ./node_modules/@base-org/account/dist/core/telemetry/logEvent.js


var ComponentType;
(function (ComponentType) {
    ComponentType["unknown"] = "unknown";
    ComponentType["banner"] = "banner";
    ComponentType["button"] = "button";
    ComponentType["card"] = "card";
    ComponentType["chart"] = "chart";
    ComponentType["content_script"] = "content_script";
    ComponentType["dropdown"] = "dropdown";
    ComponentType["link"] = "link";
    ComponentType["page"] = "page";
    ComponentType["modal"] = "modal";
    ComponentType["table"] = "table";
    ComponentType["search_bar"] = "search_bar";
    ComponentType["service_worker"] = "service_worker";
    ComponentType["text"] = "text";
    ComponentType["text_input"] = "text_input";
    ComponentType["tray"] = "tray";
    ComponentType["checkbox"] = "checkbox";
    ComponentType["icon"] = "icon";
})(ComponentType || (ComponentType = {}));
var ActionType;
(function (ActionType) {
    ActionType["unknown"] = "unknown";
    ActionType["blur"] = "blur";
    ActionType["click"] = "click";
    ActionType["change"] = "change";
    ActionType["dismiss"] = "dismiss";
    ActionType["focus"] = "focus";
    ActionType["hover"] = "hover";
    ActionType["select"] = "select";
    ActionType["measurement"] = "measurement";
    ActionType["move"] = "move";
    ActionType["process"] = "process";
    ActionType["render"] = "render";
    ActionType["scroll"] = "scroll";
    ActionType["view"] = "view";
    ActionType["search"] = "search";
    ActionType["keyPress"] = "keyPress";
    ActionType["error"] = "error";
})(ActionType || (ActionType = {}));
var AnalyticsEventImportance;
(function (AnalyticsEventImportance) {
    AnalyticsEventImportance["low"] = "low";
    AnalyticsEventImportance["high"] = "high";
})(AnalyticsEventImportance || (AnalyticsEventImportance = {}));
function logEvent(name, event, importance) {
    // ClientAnalytics only works in the browser environment
    if (typeof window !== 'undefined' && window.ClientAnalytics) {
        window.ClientAnalytics?.logEvent(name, {
            ...event,
            sdkVersion: PACKAGE_VERSION,
            sdkName: PACKAGE_NAME,
            appName: store.config.get().metadata?.appName ?? '',
            appOrigin: window.location.origin,
        }, importance);
    }
}
function identify(event) {
    if (window.ClientAnalytics) {
        window.ClientAnalytics?.identify(event);
    }
}

//# sourceMappingURL=logEvent.js.map
;// ./node_modules/@base-org/account/dist/core/telemetry/events/communicator.js

const logPopupSetupStarted = () => {
    logEvent('communicator.popup_setup.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
    }, AnalyticsEventImportance.high);
};
const logPopupSetupCompleted = () => {
    logEvent('communicator.popup_setup.completed', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
    }, AnalyticsEventImportance.high);
};
const logPopupUnloadReceived = () => {
    logEvent('communicator.popup_unload.received', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
    }, AnalyticsEventImportance.high);
};
//# sourceMappingURL=communicator.js.map
;// ./node_modules/@base-org/account/dist/core/telemetry/events/dialog.js

const logDialogShown = ({ dialogContext }) => {
    logEvent(`dialog.${dialogContext}.shown`, {
        action: ActionType.render,
        componentType: ComponentType.modal,
        dialogContext,
    }, AnalyticsEventImportance.high);
};
const logDialogDismissed = ({ dialogContext }) => {
    logEvent(`dialog.${dialogContext}.dismissed`, {
        action: ActionType.dismiss,
        componentType: ComponentType.modal,
        dialogContext,
    }, AnalyticsEventImportance.high);
};
const logDialogActionClicked = ({ dialogContext, dialogAction, }) => {
    logEvent(`dialog.${dialogContext}.action_clicked`, {
        action: ActionType.click,
        componentType: ComponentType.button,
        dialogContext,
        dialogAction,
    }, AnalyticsEventImportance.high);
};
//# sourceMappingURL=dialog.js.map
;// ./node_modules/@base-org/account/dist/ui/assets/fontFaceCSS.js
const FONT_FACE_CSS = `
@font-face {
  font-family: "BaseSans-Regular";
  src: url("data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAJigAA8AAAACCywAAJg8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGoIuG4L7BhzCdAZgAJIGEQgKg+k0gv4NC4p0AAE2AiQDlWQEIAWGfgeublsIz5EGVeP2TiXfSAJ0G0LBr7Zlqf6pcAA3dwBbquuITJr6o7y2YrpNHoSyAwBKe/rZ//////+/IlmMMf8PuQcEUUitMtva1oSQhGamQkxJxpSLWVScqgQ1RW16VovNJTZ2uagkVSeuNje11QubnvZpYVB7yUGi4thNqJYBdoegR2V9jiA4dEhCOgf3Va7muEqhcRKz0dDNOVV47+hxPO9qkzFCUg5glpCZxKbOGFxehX5nYwGEBZOQwyRFIY5oljSrLwkSIj35dugPRJKk8G3GwUgw06hpknM0qqcUdO/UkzLvviWielabhCp59zPCaOnnqLtK3qXfP4Jz+vAum7Q0/NuZGXK9lUJKTpCEJ7ENfKrSzrLJy8uqLLgUD5sssqscpk8OS7HhGv36H+Ct59wJukpOmwpgFOqL6vCNd0ISNjq/nA5E/OXNVV0dR7EKTAKiB1ZvW+tSlyr7EWdJ3qxDtA8codE8WQY4xkT9EJF26FGP+iQKnwv66klyovCkLwlr8Lxu3nv/5/MNMUKMiAhhDtdkGsM0RAwRI8QYaRhCUNgOUAO4Bi0u3DhL0aZoKaLFsXHublwTFwWef9oP2rlv3sxftRCxRCOKSDVvItZINGlFPFkmbqay38SW9hmQLI2pME5qCPQ47vfu8GC3f2SvxM2MUAmZO8ThjH049p2ZcUbGnTPWOHudo8vMLNEQRUvt3y9qA6U5Uu9ZONvHHhBR/BdN1Kcsoz6KD7j59iAmJA4eESNxvpq3Y6fp1ru163hU2GRzm8rmg0BhMJKgMIaf9nO3qg2ztI6m8ncflWgaGnQInYUqlufvbIecf9zg3KdoiqIpiqLnHzctBAhpSGNI+CSBCoxSmdVel2WMzJgqpdvlRLu9sTnXnnhOLGfKTLCJOTM9UWa8ezmfeyz//739L9vet2xVfdv8v/dtfXvfXldd46q+pW+rqhpVVXVV1biGGqPGGGOMMSIiRkSEOCIiIiIiIiKOIyJEHBHHETH/+Nz8/5kozOTkkPZ9M9uZRYC0pVwIQS5XK0nOJvA8lOVX3YrZypBnvvvmw25iURRFUTRNURRFURRFURRFURRF0TRNUzRN0TRN0/zRttoUsFC40OU9euRGFjGNjc8DAIWhNhWIqEFFnL7nFu2CjlFaJxxJRqf6Ung+Jvp73GVuoRtcHv8zeSKBU33dLOlWLJ0kBS4NEvIIaJvcM3ZuaDO0PkAHB26nUXSKoiiKorCiM7PySCWqIBxaeL2g/EBoVNGFPYv0QhLD6BUFa7FVDM8hh4gg8ggWk0GkW3K9iQBYnQnPTdjg3A60rt4SpU4u7oiFDsrYvgxqdHDejpIzYZgbzk8QuuLh/8fU3Bf+KRCpqkoCWRYOgAZ6Z5rQmDGR2/bhWlmYKohLc8ntExu5JXwnk4LxI3Dc4OHi4/9eZ9m+b3l93mMfUbzJKYRFQ1QlXco0TebrSbL0JXsjyd5bw4HXPtI6YPvIcDe3DiFVQLb3iLxBgC4dNk2KLk2ZpkxREncp6io8fL/sm+2zzdT+IY9D0m6/Y4Tb+s6iqZrfMxvuf9tUfXJvk9JjSEMeYnYhCoOwOIYhfWJUUa2kkNlJpML5EP/eVKu0P5sQZjyxnCmOds/xprjWpqAZcY3TaO585D3x+jeeuj+aGBIYUWAPxDGOwjgjW4Pf//+GJyFLEJQZZ5xG63XOmMhaQ53VznlFa3y22daGl256F+cXhBeFxoYXXhZfePD8O32lcfRutrIm2gQ7oUjxl7L8lWnl5GWsjrVZocNaAAtYi4twUQmBxeWB71Q+jf0X4QkWtlmSCs9F9QVYKjgMPC1YEQfHiQ1IA75IGACGQSXDpvfmW2GhW4TDy9KXWhTKEVQViiAk0uAR7iVCIrxEwlP9Tf+zRMPFdQxv5oIEg///pmZK8yodlcqgE4BywtDq/vc9azWnlY7kGdlbOg4NZKEs8O+WPP07CTSbOoxcSiiOX6QEN+t/J+H/fye5TqG9dlWtqrVWRESMyIsRI0bEWhVH3///6xjuE3wV5isP2bQlhMJa/PCAB7e9XrJlnx4vRqoCxJEeHtsI0x9/s5owdGxp17TXIikE8RSCxh6y+31+b1Pbj1sa9nZsapXA6RS3w2leokH/w4wAP/6mRgHw09uiJICffvQeEZQY/BH8E+WJYYuQkGD11BMhJcNy5oJw5Yrlxg3hzh3LQxgiXDhWhAjEGGOw5BSISJFYUWIQsWKx4oxHJEjAmiARoaHBmqgMMc8ClDkxSGKjw2RK5iCZm1JsyrIcyYqswGZl9iDZmxNoTuYrkm/pRNNFvZHyqUC0gupnpCx1EFOHqhHBggLBgJnAPGAJFElsNCDYJGVStElG0cRmItSr1aA7AqYxnAnd7KY4NcTHPZpvggwLTE5jQFCdzRz7ZK4J0n+yOBxfPLubEYQhClMafQx9v+JB6UbImj03AQYbTS6OWrJUJhSP0p/2es1yt0Omr7Egj5366fr4ua6v3dbt9Ruc/3R947/ZvnkHjg3y7lUgoL2UBP/MNpUuiyQu8YoquufZv6iCKqyOV+sY2sKGZqwbj8bn9uvFkxPI5wJN4YqTdR3cr39S/T4cB2JUjhcpltUvgRzIldzOJ3mQJ8XXdymUZumXYxErv47qa0tRnWmroa07s59NsWk3Q2f+HEC/bJfPh/PLFdHXxHmv5nfeueJkzg3Zs+zvMTCTf967JdTaNjTKjk5xsRvd5QGPed4r3vZnH/nrwvoTeZY4lfsvixW3mtfjU+A83xeuevacM9d5qon6fOTg/79PrhPLMWMcwa3bv3J36RZlxnBgAJ2KMoyFYTREKn+ZKsvGlEcUkroTk15wKDTCoMoIwHgRFQNDXIa8HgfEacoFAzxuOQ7CC3jkglmPV3om8ky0iIPACWPlXBxA16FBIDBeeJaRPVKUYhqoHSvO1VEgVUajSwqlmlIalK25HF6e7le5QsHuVNO9EEUGvScieDTMCFZkT4wSprN3PWQynglxJhmiQBMhZVkvQGCuhy3sGznDAIAvIckysxSNLSamjH8rL/iQ6kCmCWULlOP5La5Cs7pTIL3W4dKITAHf4EO4q5DGYsYTJxAmKicRJgvAnGZ4X3BH3jdqsaKPhrAlcd9II/pGQ57oVzQUSmFQLm+lopVwjzel0YxGq1ZiNdKcpfuGqsZq1tfw2zUtj7I82jLYr2C4PWYaWZ7sU0shbvISKvr5PPYncRCxIBcTsIcjEmiZi+j6+xZjUG3QSJJkOZ0oBjriBHZXeDFRTOILE8ls/Z1QmBmC1XFrmI7FjqdMACayJ1Eg7HQJdDV0dWgN4VgRHHE5ABPlwkwJvi3SNGU/lasiDqPyamkvpWzzBjsBryYXJNXRm2tksf66FHEGdBmprXMO/1yFsdTx4ATRRPEkkcqIE5HnoBB2PKcIq8ZzlSN8HCKVJBHWJzP1NxSViSkoDNOJZpubo9BJtAXOIPRT0X9kVclq8tUZa+iMJY1nT2BPZE5i7yWMRBxEHkXREryFuA1pTeFkz16JKs2eU2cambRkOYZ51DBJkZdkdOBO1AQu0xoxEcLlwSSBqtBzWJOQp2j/YPUah4IrAyPcIIRHuRyjYm79IrehQq6t9gjOo6A5WAlDn6G/Slwapo9gn6z1M9KX/NyrefcT219m/6T9N1+VuBqwus3JnHV46zL3MhVy1okYqZS3Xcm8i7xvbUEzwFWV2XeQ5F6iBJcLUUfaS0gcx2wRFtPjKKVzUzgM0nCXr5JMDXgZL8jbNiPYm2wRUCU4+QQoQ91iwHod68TgjVRIY/cPoxKynq70EPJKDlY+WP8/iJENKyo2DdZO0RFCRWl8qYaUyVu2HuXo8nyFlO7UrXuhigi9UUMhCoNpZKOmo7sejsnhitMeFwkw4jbF6eKNCUQeE6I3hF/ZyCJFXdBcy2HclbkniyIr5XDCacLlCrDJrYNzhmcQdHmIRFtGVnnvci45/f5axEx9ZsTly7CRjYpavpZsBLBW4871xpXwuoQwsnGRf67JdGbERWSYIk+XT4QhBZrEundut/S4Oy7OUn2eBVcfMACKZwtZ7vfPkikU8liT8fgJ5pPMqQKnI5sNt3bV9WYXwYCRCmnsJx3RJ0l+6/QvNvRMxawtzC4Ve/pNF9wma6m7xmLp3uXhEaPZS1FUrC1TzWgWUWglgRYfAJF3xGHMqRcDDrmxOBMSnoPnyRB33z8pwsi4oobUmtOoPmfI6dsqlqf6FaTnHQrVMCiFey0ybwY8BcJphGVwiQEUb5+AImiIJCpVoEz+stnFThmZ5E4N86YgEtlZrpMAyaHS6KGQgEAbv7A3kKrhuJCjbuekZkO95mq0dxThTHgj4YjVXu1K1PWIIag9EYMgwH0ZijiLLKJU4NcXx1Mn0CaKJlGNAIcDCHic5Z4StDNOHDZbv7+bRDOSrhiJiqUFgdtxi51Q7pTJTgfRP3jnYS57EIs1CW8ysRQSOk7m7p9jnJzgFFd83PHxxGcIp4ThMwUXE6dU7Um6wBbQywdbvtjyw5Y/tgKwFYjFERNm1a5XNt/KwddMfBXgEfF6P19vBIZYb/EKsmGvtlsHs+XFXT+ugvmLV07hpJyoQKWFFlnspNPOvvt2rlm7l9m0J0S8iAXrI96AQ2JiYmJiYmLiEdmal3VYUVKSJGl/JWzgCM7bBzojlGUlYKF0vU265E+2EO5klB3PUFBWMSOTWolpoaFoor5MkPQ+o6HQ6Cn1jcK8p1zf/YRhp1TgHVfurATSOreWKNSiPbLa8byeBD23wXWgdW5KdhHedfE2EVhUMJNDKaHcdLor9Imh3DvtcFL4Y17E00B5ZStaY9uaXDZpgKZvEZQWWXJKPeq0IL6r24RivS9KJYVHJYSovb2ndPFvOUyxNC5yeXqLW8iJswKBh0zx3z52tby6PyMqltMpj0zteLz4NqK7DmHRrSN3WD3G46yxswltmY2NwFA2nSDKgZ0E5DEBoia2rObDAAy4OTgcRC0G2k3EcdVx6veK9H6BhqHA7y3odv5qPTAUKppb7vWymulmK8NNz9UZ5jiQJkwI7CAgGWfJEzgo9yDmmkgT4PNBHqF2vDigI4wa1Xv17/28Vbquyn7/PLcDQ2HYy7B08iq8MdA4eUgQlpf5zvZaqBf15lCE0M6cNvZpEiAZ2F45nOBqF+dUbKHUUI6ne4MAYbiTVO3lqVfKb1ayIi5FXpcDlGlyjhzkw/MZmPmoh5QQiZDYcpOgDpXi/1NnChbIDPU5wLQ8scKEcyYn50pPz42BgbtUaTxkyOAjWzZfOXL4yZXLX74iAWabrb8yZQYwMxtoo40GOeywwYlIhCGZk0WGZllWGJNV+Z4i1dkqNtuzgyY7s0tSbuYmbe7mgcmlLKUppSoVfU2oCabWxNIxlKGMMiujZsip3MpVVPmVr7gKa5aSKq1SpTW/Fiir8qowv6qqihnd6DqwsPbVo8IQKQ1qjbIrwYlZoLkRJG+6WZugMZshWKeMxCutGYpJve3Mw28xpYiLzi/bdEFwn1ZxmiUMnnpvH8aVtrQW0e6ZDVGIx3ato8cXg9yY3yVwTMWfoZlZasK15xoRJu19atJdVE3aaQooW7py90yx2b0cRnPzQLBQ9HYIGRn2cTuDUU7mqC7QMta7GWFHwDrFdMaTcOwsxz9wFp3hDa95kR4xMURdxCne5kuXVot3fK/AUBFTYyTNwCHho0m3WELrjocfdeK8R76XC8sKb0xtLZNbrPCKR+W4yRFYr8cdWSVxbPijn5fJ7dmOHZjFHoTyqEnGo/iRX/s9m7fejl9nco980fKEe9ZO25rQGIkA8mLmLDUilOb3hTSBN5ZhC0Ppw8fWDJvl6bLWs0om0vNerrzWNo7vz22ZHyX5BJRxLb61CbxsxLC/f5mvCpm9CxpgTGm0mMU2ZFnhZmZoe6P4i3wiNZ1xall2cbaXQ86Jfv1ui0W+Kk5xF7+1CfzDjUdlRyiYgjb1nopTbRc0MOZlydBSGxnHwAhJUwDznPM7XDt5mXHPiztGft91q4ufPGYV8ntnHuOxMKEus9qnCt4NAkC+2EOcjJKkrO8V9zTVQBEfQC4jeS/RQnV12bAEfNhtdUrQOHvFgfxCMpQbaavfRzKKxDFTDhQebuPIyrNyoFCxIqVGLXIygcMhw8uTcy82JZhpiA9XPjuXa+2v0tRpHrJVh8XK5SMI2G7k5DKT7ct2NPJACAlHBetq03f4yQjYWor/KH89NyFNy6aAZfcCPXd/KIF6JBZmc5T156XLzGXJ6MrrokXOWYTZ8OxwfvkjfV6609pkows0w3++aaoWq81hGOyO+h91VBj9Q4+GbwdWiL4yGuSCYyG/BJvVEvDPNPPUi95/VtmyVu0ZmtjUTqqtrR1eiucax2SM5Dze5puIrOflYNPzPKDLhEOv3R+QCE6s+kYtThtQN9QWNv4pwg7GeX2ZlZuQjUN0+tJo0EhUQYT74ymt1oWww35CO+AP+pL6ZgkTZ3Wao8595eNLZjMLXf7QO+Lga81u4TXJUfseAUH/HUsQlPWkQjsn53QV0IokfPU5gcVDN5ey+5t/vund2zM6bridM6h2XdYc2rWHOxatInPllyuGRjh9IZYZl58tA2aPqPK1Vr4jdOa288nZZpQ7JVr4H9lus4hh34OJSGzsgMM+54OzceTY8RNo+nDGutrGPteGPgeE/1zbksih71QDck2qru1lzrsO3fCRj3u9a7IvUWQeivblx00HrgguaQaOhFNG90eTaTPiE1hZsmZF3DoqkHkvm96X74dPYlNQzL1amVzbtptuuJlbeG4gNT2/YNDl+QW7XZ5fkHRZPkP5+kcReN5h0kWyvX/e6p5gc8+NRL07spHCH+2Qx+WzOq7LbDniVvfiXkpoeJQHO8Z8SBxht2BXAhj2Jzm3n1Im7V6xn69XYgk4QIRv5rxFPj8O0co68Vyf//bCf8Fdw3aZ8cS8HAX5tR4zee2G0yXLKziJFiw3a1ETRLImUkmXNb/o1KSR2LTx660Fb7pEx70N2SQQlMaVbODmgGOQwr/lRE1Naqc4ZRbi6VjvlJin37FoOqdevRtc19fpT1/qnqn9a7tHFY9UqzpDo4lLkicwxZgdbr9cQCcL1RYpOzfhViLum2j+Hnr7rNbUcezQpcv7btFZt8+vKrMfwG8XH9DENOGzsdKbtETTVWkl6BjpCUxSzIwsRFY+FBM7HQcNJx2XKLdBHj1eA2j9GG2sFk4fnkLQJKZdoRCW0eXQY6bw6Be3zWpH2S6bfVUHeKfKLuRdIdxWSx49aXgT8KHhi8rvIQzms9Wgl3JkmrVAPwXDALqp6NfGsA66abA76rEfTJLcIyD2OFRj6qpzORp7s0x9OhT37VXoWOfVutBNcpUfkaoEq8FVJ1bjYKkZTRvzQ4rFHwcVj707OBPwdhdXInSbuJNg2oJsG3U7kO2ibo9sh5H7jLb0UDpluIKgmT4x+uSJAOBQmWiNQQRgp2FnNM+socVkyhyrmnpmqXIthgZ8WW3FNxaLAtcGHLOJ0KEdPfjPSVqMTgKwC5BtUnQpWD2btmzZtGnRIsWirkXLJP2yfHL8AkYsiAL6FAAAACwAgAmAGgBkAAAQFAQAwAwgCOAAAJDmvbEQSgEE221AWyelstEKZQgqgS17Ej9CG6DoT/ltRouXPH2bsuOGbsfK9G09wEGh4y1CwT5bvHuo4CIDCMJTw/imZd1CkGbc0X+fJB8VfwstEHU8nbbw/prowT8+QDElmOTENPMhPIH9OQwAY8EO+eTC1Th7grqzUhB/I1P+/I3cdwFOBijV1cHNzpc6XwlnuwudrXY2QLDwulnjduhXzAMbOs1tlEOFU1xSlYtN8eoOA+w8CNgeIvGjEgKjpnY+hnqUGC5KXJEuF23bJdl3IFBvylAZLiNltIyViTJZpsq0zCt1ZKeNV9uDOlFOm+lumh2D4PCme846TPbB1MXXp3yFqIH4JP8RF11Bj434iCvhEOiRndy7bVvxImrlRTeGPuoGbPiNuBXvhXvfwIzyVM/q0ZzssNlH5Vcqb+SwNJ2pDLqSJ5+Hc/lXeG4XoQ7qsBXatFHt2dGdHRtzHAKuLkEVuXdjU/sV4SF9YE4eRKDEp+LMDkVJ4f1PoJ05MGcPtuP3oN9kGHGc2FGjN9Wg2Mhtt2HbxjUPPOE2DFtBYFdh27IrOa97qTg45+w4N67GmJ2NPCR+O0x/mXMr0ZNELM3b1MpG1Fl31zhRqA4lMITwfGI9ewFaNvwzZrtnHbH8exZX+Lvw9NW3LWYvzO2H9S5cCgamDlK9FTIzok2VzzHx/kQbCYZI0Mr3sN4rIdGlYuJTlb8ScvMb59MEnj7zfC6chza9q1d/Hvky/H30h3/umz/OpVwXd+FEPVKVRRliMamNSkN9LpaDbA2WRweqpS6Yy9p0D8ORZ/l/4NsJ40YQ8nSWzTI8aDIqSy659mEfsseNVcQrJJwGjBxsL0R3XUw1ejDUQYu83qwQRIIkDC4y0IGUaE8HhEIkhYM8EQRFTlPBbx+BWhn+tSyXCpUNlx+gquaWmKKCHh7suwwjoEiFYNYLUCDaN7J7C6vmUgFUnIqg4gvR349ExWJcCTbVyzSJJCiVWFoiU3CsDfPyxG/ho23WoejWZMFlH14J+MbuKdOgjMrPh+CrCtNwxfZkUXRnqkyp2wzVszCYMSfzZIud10vRzY1qXpiOvBgHn3NT64jZwVZ5kySmxqOgbzXvdVjvs+9D9aFHrHYun+nXgMm0OvpteB/2jJaVtkzUmKTw870LUPiqSwL0d1/xEAke1Q06jlw3zEYA61w2Ir3G7KQ4JYNugXpEpR2YwArLWQ/wYz8s5CkFI0leRyjairkhOrLH821NEizyjCVWLXXTMg2rPGqNh631pFTjSgMyiWUb0jqr1vurjf5sk4bNHrbHjn2ec8CaY5ac8miK4nxWFz3setysXvs7f/SrxQBdieVDKnqGnjwUOgNpC8+faj7452LYUnbKOQkPjtCu12aD/tW0ZkvOIz0TYz3ObsDK3HBpPoS7iNmi/ri4taWB5TyzXussUmqZYFm1Qqg7anpwGCzUZj0dZcruDQ4JVsGlAEy51TgJQcmj4Ofqr1kE3xzWDpkbLmGoIy7VNk0myZJqQmmhTFRBGL95ptCU7lRXEUePHfRUmJs4Q80q8dJEPGFZc3viyQyl2U7JUVJVoLS4YbPfiAMDeQiEnz1VkZEpI47g7AB5bFN4xoH3Q6JY7VTT5eIiCW0dUXXC1EAa6HOapEqqIaXVsgXLEW0lMNgEhg7WZSLepw1qXp+/G112mm4fEqbzM6q7qtPVtLfH5YrWMLdA8wJ1VJ/Gl8RJNaM0VbbIuCxTbilV1KKHEOizScXw5VxEECO1Ahq9DlxEjwwnI9hKFQQNMSa7l1xGKMryIZn1IsSRazKku35uq48KArOpuFsizFNpYXXzQpJ19VSjyiQUzYTwZk4j6VWW9YnPGhl9QjBXj12TgQ/C0i5j2iqz6Ni9YiLUoFvGVPHmZc8ygVeJvpRtBDhCQdSjgp0H5cMgPI2v5kSIhBUek11XqFDo4mFsOUigHZHDdfWsbj1mjHds0eTdhqHqvA90JAyFA2h4IdOtFuXCdGjBnBzrhytcHpxG7EPsDGq6ajZKOMgLPwvseVivwsGprWFci0EgWSNXm2D4KZPRGsxfO/qiYWLnUrWQj+1EeAb9l9Yh3vF7Jaoo60gWWsO8XVO1ZWWLqxyKmimiCkSUjt0qKmsk6MeTa+M6LvPikN21Tbur9GYGjxhqRfZ4dPHzoNRF22K37yMi2L5ybdg8LCFAgy9qGrCVgV/d+RouxrozXm+C/kTDSfpKEDRy8rpYeEC1Dnr1KgPZeDLVrjsQ+f3TtIJ0wszCrDYpJu2atbhuyr/+88fyAGJhnCK8tnBpMIkmAxw8tCQ6QWZBlEUhfygkuxi3Nj0NMv5uf8my9FrKiujULNoLEkkpuACFOsdLy0VHmPmwVjJKVMg0hWxXy60qzvgT93/zDASBgCVgtcBgG1jZnHjySL/3ZzfjYxEpJJKwKZn9XSrqMalXd3QKM0aady60NbvEV2VaqBXKCmUFs55Fe0yGh78QlMvhliIGqsuC7PVcFiqeN5opodCSHG31djSKAfni6uKLWywMFItABqchMUzVGFio2Ad6cAjHfTh5OFu4nGSv05+FeRAtSJKBLFOW0opy+kOt2rTr0Kmr6j79rh69+vTn0dO7jWE8JjCJipbnT3+3cBKLackdy7FKrLu7NmNrrataPMh4ZHZiF0/tox256Ts/+Om6v2XyN1yIm5lHWMXOVXkgyicgFJE1YkhIycjN5y0qqCqmEhyR59AWsBQrFavW5hmoA7BDyAHQmX8EzQTjmWFhZWPn4OTiHvYhpgXhhYRFRMXEJSSlpKuMfFk5eQVFJThCj97hJjQKHB1bFDunKhGNT/69RdwlJKiy7icdSERzFqFwoQizItXka1Jy8xoU1fCoRsQ0MqZRUY2OSilRvDqypmQ1bJnSkpGtdkf1i9+6QjcFS9xD0R/06q+o/i3+7w+pS3cvudth65kq91eN1shK0tQs2jPnQajzio9fYFhs3ikFDxTqI4XytRoCkEFMCCzwMwg13CKih/oycDtOgcMxcEzqwb7JaAND0R2sT1PQwgq6gtxl+/IrNLbI8cknFDopKXsILgtvOG+kcfl6LTk2Ja54rWjUqFGpRuUse0rggAr1ehnLRfDMVn0jzkfeD1Th1KJBU9fyyPD1QR8rt+xqJWtzNmh0+iOv4xqK+DDjI/nYJz6tG6f45iR2VWOPV4dxjjruZOTNDbd878dJk1Va2Q25vMYvWOUXKcLTZBWdXWnaWTMZq6t6bLhmsAS339Wo7Z2130MJPb/l3W2TtpN2bwrIHst6ab2cp0kYBRuLZbmBiIjKYDfEMONMyJPUpmBqKLVuhjALsagei2WJpZZZbkW1UmWV1dZYa70NNtpks6222W6HndU+xAGH4giOOeGUM84676LLrsZ13PSdH/w0IclskQdW+RAQqhLqUjJyVa+qfoOGjaZxHlSr1XWda8sYbnSg6FBYRYzWGooyIKVmtInOiCOGHwlngtXMLKxs7BycXNzLRflkKSPitEqURLUIzygCOj1XQragBIvj9frEeBDeD1rDdH4QxAJlV0ENCCP2lpf7BdQf3yys/2ZT8q6dcGL1B8J9l/kA8jK0xzG+YrPE61KZS74wXRyoAtQCGgBNgJZgA70hommwpiGahgKGaRqBGIkYY8tYW8ZpGm/LBE0TbZlkx2SKKXZEfaVVS8xNbfZN1fAQoJ1lhoNGPz/jyItzvCQve8WrXjvjdaBkAQAAgAZ0CNo3LDZLuqXe7RLE8hErrFqpaZXV1lj77lJFStNk6lG2UOtsWb+LDdhok822Vtvs2G6HndUu+/bM73VgnzfsTwccdGj4MOCIpqOOOe6Ek07FGWouibMW581Fl111PW5U3Ixb5jvf+8GPfrpdh8KMRVL3EEUb/uD6es39batbEeYRVrFzzbshyAObeZ2PX0BQKCLfy2P6JeyUslemwzHYL58LlIqmNOl4mLY79XsMmmGjxvOkVtMneU6jBeUle614rNr8GiXSRnViwzUzoxlXzQe+6hDyMPB4HUsdLX7koMeOgv8HQ1SZYHNmFlY2dg5OLu5hH8Jd0MZCwjmiu2hGDHEJSanhNGYZzWXl5BUUleAIPXqrPmD9BgwaMlw1HYxCn7Gly93bunW1PtWkTPOBSYdeyGO+4Js/Y8Vcgdc3g0zMAxp/aaFuK8bjtm8J2Yl8vBZKtUgmS/XXpuSHmc4Sh3Qy6tLThb8JIzBnwLC0yxn7xJ1qvy89S0echGytnerg/JiPTcSUpqGwbuNxRkzdcGygjsGu7nFMfL/DENmeLkHp1fynBiH0ynteEoxFXT9I+Vr+B5anb3EBJlGoBIZn0nV3zUtD9IatheS/H5dgdFZWEGyiMvAXCjawqQm1N73m4sVrqbPOevVinyb2eZsb09bZkZlzoutt361x6dOnz4rCezI8zIQNHxzY3u1t6nh48qaDvxdMIP8vJ6J3rUFd4aW3U6uSiOXsZFZ4Nhuac7DT6hMtx/L9LnxCcKmZgcSuLeU8q+JBSq0l8u8kfro7GwBYuk05Y6HhN7TPOsF5nAFRc2sLiWIfOTpRNJsQdqYmwRmnG4HUEUvkLmgnjF2NdbtsygZEX2AmglWeVUQBR+CSuS0PvJUeVIJa90Ku8pkJmHzUUMrG4M17auJ2czdRWGMLxcCLBJIICx5dcMChQ8N7rXTnRvwVj4dewe7Esnx+gWtUFdQfLuxjoT6r5keqifKmEJrFY0N16Aomg6XLMaD9PBy1IhGP8cmxxE6kFKMT8U90oFSHPoXPrMhaI2684f4UD6/jqfNWgiZS6lSfUdS2t0dnH7XBDTWVci2LmYQIIqiABtkywWquj6Hu0VlRv6Yu44ghDjR8Fu841TSWaBg5fmUC3iDEQoxUUoe49WfKcYxkChEYhz5xhw6zwoL7GTHSKVRV3zZtMOUq79yxmfNhOAszMrOsFo/7XR/rNa+thcgfPexJnnnquozk2OZKmdas5POZW/UdvA6oMoaNlrXMad0vW/LWcl2vkC9Sb8ZfCsYRd/mxLUp4qQICWjPJSqkk9Whi3pADZ5Rad3S7OWSTUZuLM39Tzg3dVOBBZDGHPkhuoVdQOZyi5vRKO+a1gFK7X0RQTFbxqiQ7onb0A86RzqgPVUhwrcvyk4wBISNOfIK2bKn4KC9475hNcCxRU4tRxSp+5fzwiBlEtjuxqDn8nN9hP+9MdHtV0zKBn2v7YbL5JvaafwUtKcnIitUrwtoFbrXZE2KnN9Itxs8W9/Uc07Z2/MDjfutJH5kve9dCZYXLXoyegoRZ5nZtVnIpZ7tZwhjjbnE3V2wwPQhyDhwIgTtmBEXlxRnTnDR0yB56ft1jdaYtg34ykR4qjo4FqCNMmjkUJbFiL1Q1dK+PZJSKFpSDx7p4WkhYjLq5S0uKU4ncgXZcEgLETSTAcVEzVXU3hjAolG6dNu0Ol0+65WKwinN7trbxHLdxNEnQeCDpK6eycMoLpT1QTb1patlVYlyRP+WKnbli9nOuuvYcRWIvulGSsZaT1BWPhGYYvgw+myFRcv1KfKSBAhmLk8llXmKeR4d9YIGo2jaIxkw18YrAD0GzvcbK5CHpSCYlqlhmUL7l2VySneUSBHI9PCuTospHSSLtKXer+hiKJOohWaacxc1TfwkksrENmoHAzS1mt+u4ICa+hwJW3XRVXp4h0zKcagHxR10Z38irUa6Br8uZhCdMvqZUGcu9vyEw7n30XQ3DWT73UJsRLMrClf06BSU6xDWYdFOhH8MA3d41bQziQ5Ep04pQtpehdhAd8Y6BTP85SNLDv6Y6/IwjJ15jK4XQ1ODsGRucRNsLmeXdUBQPVC3Hr2MpVXgNiobDPpOkitgn3lwaLkAx0zke6ofyp5INMlU8IGpKfOHtQmhkaruTMC7gcWfpQQwgdGOmSI2rSYAMkdmcDPzCojyQUkhxZH8QXuzxXk/FrUEvtC7PMqahRBKXZIAjPLGiC1K+srkjJY/9SwXdbiw8EccNzYR3ZM64ccyP9WVy6JTCVXycajLWzzMdODwSC3tk/LhBmzWqjZnnsQ1bQvyPvKfZ0ON5UqvDZpjJuW12mUSf61q5CnkspBdpWypdrJYEjKwK3X7ZanYjAaIo4L1UmEgqLv5P8k3GKDkjQ0Fe0jbGbDcvGqs1EEKTB9eTvkT/ZsnpiZ4Izp5YEfh8sjSXotXrE6d2GBF7tbp+e8Vp9wmXzJ4fIy9qk5Cc2NrNM3n7dIGLOrZYs1pnoK6rDLquD6NltTMrqR00iRjsVR6xZ0zyhB6wEYboNuNfXOhESlibm02RZQ+wyyY641qIpyaBMCwMBgIQyKoljZFogNeXyoAcOFIVtbu77mZyjK7kqltvHlx4FpBZ3ikDm60Cphpu6EMf26Ps+N/SYVfpy2DkmEwJx9vttsCQXqk0kk31RX+AC0vY9soc8Dsgp05VC9MzAQfa4SyCeyEeQIDOkCHyL2ZOYQCiQq0kP5iB6xDabQ9c/ZjAW+raaBa06pTAvKyPcU6iEZ+jR2ol+fmQatsfh7BmjO0xXCxYX6CD5F4yH9Dye8RFsEsCPWgvBS92iUd7Q84vm1sSGH1okwRxlPC4pUNJD2bZwEwzwd4dkbhMJaYYIbD9W2EyMxnp8BTZGMq1z7Pbi9bgYF2XaEJjvyYhFKWBxRHZuXSEmZxemyKm2f4sAyStAyKQr67qXutE11TfDvZJq+OzTk3UrQ8rWcLqWQCcIhU21QWXEtazl18N5p7IzkQZNQdSgL2BQELveSwRlOVBvxsHI0bmKPlioCYAiDDxA0jNiKxR43ZYLBEI51wqIiXK5JnevaxKOc5DtEaWbWeWkd7tRX3iSGzMinwUCUZX9+NvfnHgzotYrvykZQjMkbvFEKaiDorBLBhPa429dkDk8sqGTas9e+2IfCgJYe1gjko47PQXI6kmT13UNTv+9cFXiyEC6Y/k9fGZ8y++YYigsbSDkkVtyraImbyL2f0C9tdg71A/jOA/5K6/Z7XVw1bNlKIdcyLKaFZLtnsScr2jm6r8Epa4VgSOvK/tBsCUex7TFGXzDXazqFWbduPoHZM8xvMm/rjllPiRtMYzv1M4mbRyr1Vdk87EjrGkCmq571UZ50RWA+a3RZU0HrXaZSNLsQm5BDF3b9WKVerXfWKRXx7HswZfuIqYDWJ5qw0vLEkPrsthb5DxajQuXeOL2NPEmqQKpfyQSyTDgHcXUw4zvkW+3D6T4CCpPRJIZCOStZ3ze8lrfW+Hb5E8mRbD3FHEfPExn9GNHW1PXlj3/qSvpOk5iL/hgdMbpBYK1hE4VNzUm/qZ3wJw1xqMEVJxxGc4XtIhIfWOX8QQlfBWK7uKXyh7L7nPKxVbzpXsGn1DYW9neWF3Dk4d3aGeowbag+tWTOxtdK9qLY9dCZzjKbIgmNpUhJGRgZRv345AUnFQ03xBWkhD47i+Iu2LbmbhYeVFsTmvm8bi8EQSRoCvt/rxAt9qhrAYYVExcXlJBSlpf7areSI2HKJCUEFAY5P4EdoAA8tbTXHLodtEHDHgs7OA0AaExFMpbLQA9PQELkQS3mSeiji9GrOjRqC9L6BN6fhJ6/FABJu3RmC4DhmEAEK4RmGY3iTaYhabsUWcfjxnpWixSUcdx8rnL+AE9OAfH8yJFoJtNNNmtu7i+vBQipl3S0ZQj3SeYJI/eGyWYqatKtJVpaGCQy6r3MumX1COw1ktFr33B9TELSqLiigpmhIzZ07PnzdJtoIAfuhi1Q3XBqRJquJ0u7R8FOJJZOiIOsMoeksZGIc1cpNhMmpRRvTfnZzcPKq8xtHaAEAEuAAyQQkm7RQ21rLpYOlVc9I8Qb4MrINSAEGiDSCoU1orrVAHQSowYofxI7QBFE+KNhwtMt30BGrHFfqOqekJRsBBoeMRUod9Nnr3UMFRBhCEp4bxJKduUXHPWM1znxpeWnRLQzvqeDqNsPlrogf/+GBLSYFgkhOtWIfY2LWewyEL/EE1M9GicHnubCKIl6k5FcoyQNCZPjjcebPzsXDDRgLfc2VGwCABYoUboD/UkyLfch+z2e3mXjNZUx8l2T7Cal6k9vkVMtO6miH95X9GXFgZ/9oECBUZpHFmJCMbD56jQsqIPk5tpPZdtT8SZayFKCax0UL2SzKb+qUa2OqJUCLUCC1CjzAishC5iGJEKaIcsQSxClEN7gOPgKfAC4gGRBOSdw0kRVD/9qsAUfg94hBiCAsl7SW9N+mcToMKPiutrqb7xgsqqCH/OmYwHm1CZ5hDlO7sUOjr9YiOamWroe/T+jZ2VudCP6tLoV/WS3pVV3dNb4f+FPQXuqGbuqVPd2tfg/5N6N+H/lPov4b+x27vjkkFPDBmAMZswwHGQsNrBIyBY/gIgbHZjJmqqZnJ0wDjqGma+XMWjItgXAHjOhi3wLgLxgMwHoPxDIyXYLwB4715fJ6F8RUYX4XxbRg/hPFzGL+F8WcY/5ydi20E9+4DAAgIMBCgMMEMDDgIkKBAgwELDvyFi5AgQ4EKDRZYYbv9OhxwwoALbnjuve8E8RVwQinokIVH+EX/GBqjIyKiKKlp6RllyVWsVLlshcrVatahzwgqukVr7nscj+KfeBZvoj06hDMyjmyeL6vPiKlRyZrt0dgRo6NUY6A21ldi6LF+pIxd48A4NtLGWQk5Fa3ZPBgPx49OUhfNbuje/sDg0PDI6FduTgobn5icmp6ZnZtfWFxaXlld27IVbWhHHR3oRANdu/dMaz5/J+ffAuaMVqYXD504d+XmylErV69dv/Gsc3PxpZeffeHl1+btd+T6R6bmlhdfy9d+/LP8z+//ktvvEGD3TGxdP4lPsEl6UpiUJvVJdzKeLEIbU5dL7aeMmIpzWdVN2/XTnWlj2p6eTAfT4fRx+jr9nJrRH9rrB4KhcCTa1ByLJ5KpdCabyxeKpXKlWmtpbWuvd3Q2urp7evu6kozh3Ye/LGaIz1vOilb9atDvNLe10XY1xv4OdaTjnGyis13octe62a4We5CqmhVIc9XrnLnbMFatCzmxF3eI00YfVulA4nCWyxB/tyeWvbPabsuretVtnpu6Xxu8GZIKlFFQBf26zV0yMxMc3EHylA49G6K93h5o9vRwFhZIvYiyWYMDmDcM2zxcCUuT9kuqzk2Hw34HhwvOKf0K7Q1SNv0mh0u7eq9qEz5ZzRFh1SV66tkJxamGU489rswd2Jv49DfWCzDRAKyZRW8W6MBu27KbkH/7qaezYDMbBYK3AUttq/OwdWmYGoIaE3hgnIHoMAPGm+m1AFiRZqHweA8SHqFzjNdUlQhWSKmIwZ6ZB5YMr0c6dNspeEgQMdsNsFU1VHcDZTGHHJUx/5A+2TeAQXokjRHS0ezFzJnHAiZ69Q1f9o16MJvFz9h3Q2qi9bYivfmSA5oicO8C9w2oRHd2HpyNMsp2mzCh01OepYCrSul1am2HRpbnHhMF7oWXhafrBv1vXV1EXUgYdzyVz1C3NEBtt108GDTzgH5uqLA4Ka0l37TY2DrNNqPTz+mcvmFow+L32Dl6EYPJplvnqy7KT1XtOoy3CUtr2LJU33oH6eAZ2uRCVmClFwztmy/22GLQF+u39Zu9wcWJfFNp6KaCCDMojpVb291NCEOxTNt87m3P1P1p33gqgG0WD08jYnGChImoo7PrJBaDHDV5pPjWI/LvR6AfK66OZrCs8dQBqLzJfDXbx90Izo3GVMKgAJdgL1a1YqtqLEk36gAobM0X9wyrYmbbME1VaVV/Gt/bBGDmgTX60BP0BJKgBETtly34FrsFVW5x7HmGYKl/30YEGIA1yGBCQ40kMtpotkKEklBQkIoSo5c449hTGc/BBIkcTZTMmc4Unspt4K3GNiFq/ULuoCZqzY7ROuENvXc+WKE93bA61kRiZ6QJ91P0yXA/02PybzFUhKclpt7et82LAAAAAAAAAIIgCEB8NsTlJ51/HEK8INJLgIGGCyEXQ0UjmUE6k3yzzFNpmTXW2awWSVkD6YZwd1Mjva+Ne1GDU2aWfuvHSKPhjM94s+JtPxPoZYBo4yWa5Lqbvunwv05dDCAhlLjGPZ4JiyHTELQsdRAF04CZEJl+yHXoZzDT9eqJiDhw4ZWC/UirmNXZbs9N8hLZ8Hvqz4WIRBsnEfEH6qnnmVpi2oPalC2CJAUBUyBh2KmReMTsUf38xVCjRYiipKalZ5QlV7FS5ZZYpVqN7fao16BJi9NaETUNrV+cJtWvh12MdOH7/dbrvYmE3Qk03AcCTHjSDWysiTW4klQfVuVU3nqkJzDRzOBUSiGWmkM5YtIblVLiZ576vR6c8Tp0BqTINN8BnVmC/6Bst4YSaQ+IpLvmjkf+8cwb7TpCdxPkeFh8REhRoEabfgawEHGYUB4BgUmKZliOh4BDwSIgo2GC0ow+UZ9fIBSJJVInZ5lcoVSpNVqd3mA0mS1Wm4urm7vdw9Ph5e3j6+fl2wwwUzAiRtLsm6x5NL/Wvw1to5EhBen1IFkK0raCtDaQJgYk2SD1FWwVnuBJDI9HlkIwMezSti6IH49kPx71NTmkIP1O9npQAX6DURbPVoHlUmZMwZjWV8WjG6XUpJ9PynqVLnbV/i+yzG5QNzXSDIVZMRZQmqOdHCvlFuMtU0Vsk63s1NrLQZ1fuDiihY+TzglwywMDPfLYCC98NCpeGWBspifL+EqeCRxCSmvydL1gR3byuSPYWhqzzfPEL4Y/YE+VaC4t8MbFauyiFUp/2WYiYjIe/PRn8DuSd0yfgmf92688ROH3iENIaliQdLOJO510Qkfmwy+b9ytlefRL59XjYINDDW2jnbQHin8atR84BBwFTgCngXPAReAKcB24RaTwYuTCYRqvauAX2AfDAlL8nno8/dJzwc9RbUn0JD3UXSez6bVqF8jvjI9zQf598eMeP93BsuNeI8lfu9ZtAbsQ9/YOjQYZvlrL/UaO8gOlvr64cFCNDQ0KAG1YfBgO9Py/EegDQ/9Z2Bs8DA3zDQV7MO8L/A1cJHgbFllIgc/h/6wDHEUF4f3B76goAtt/AIGFBhIuNIiIQoOJZPwQYv+/GXALItNm9HmcdnCzxA8EUHHBCkxeRz2CoCSETzuBmWI50/t+F95POAQ4IsPZDvrbVZDdBNidnz342BPoQ9+hbLj8GYD896WANCAdA6TKUmyBZb5Xo1adQ/7zSrvOcERM7CKLV4IyNCFRRBlNdDHGlMKUpjKrsi5bsycH0piWnM2V3MkfeZZ3+VqUCqmkHDAgOYpjg0757IAIMAWoqdymisKBmlp7cB4KMnUNAjK1BQcy9UksyNRvcKCm+XzYCwdmP6w9/OJI6VG2+5JjrLj02Ivj2uPNJ2Q2+bbzY7XV2WtO3iuUbCBJdSzBgsxyFQ5k1nMWHpNv29nm4xj5lJ19GbnPzjFPcE1zrgPyXTvXNUPvIPyWv8p/7dxzlQvBg5p7qT5xm3iEkk/ZefbhMvnz1LwHgY133LK/t/A78x1HhumHEDb6EkSG+BbwEZ/ic3xJfv0X558BpB/3a/JTnDlZkMosyYqsSXVqsicNaUlr7uSfvElH8VRa9uVYLuVVfqLryeEVUhGV/JmHogId6h6Y0MAIDY2OuLiTEhmRHVoc5aH10RxZl44FNXQ2FkM34n7ceRIH8Sr0Y3wJ/RwdoSJDL4RCJYCFyqIQByqoxz8GfYwxxwoUaJxxBwOWQEIJJwYCyaSRQTb5FFNONfU000YXfYwwAQ0689xhjXts85g9DnjFWz7yhQ98pkOQlDp0SUhikhBM5yUrBSlKRerSlr6MZS4roYSWs9wPUWeChVf0lNKUoaWqjObV1CjKVPVo4H9HnhCt7xCYyCq0sSM5QgMXFRFULN+1PEdWK59mHE6ur6IXLocz61V2RzFc2Kyqe1fCFWrV083Dje1qZliEO7vVzrQMD/arm2UVntCrn20dXhzWMMemqI+aqCskISif0xm9FHKFh7GQJyJ2Fp11BnQHYiCJnuklHMIpfYYpZkdO1MbUWFhYgYlFsTLmxLwojB0xP7ZFWVlpAvlGURhiffCABRwQAStgDewLG1jhFrJwCdfoBgRACGyiB5BG77CLXtEn+oZjFpyFZKFZWHiHRziHV7iHZ/wSDXEwbCMzpkdq/BDFUVJYio4lsSyWR2UsiH3xY9TFT7EutkdNbI0thWpmjAl5jA1FREZUREdMxEZEDI8RMTJGxegIjpAIjbAIj/rYHwfi59RMLdRKbdROHdRJXdRNPUiP/CgIc1ab9uiAytm2Ylvp2fZsR9F+RelQ7GHtqY7dpM+i/+vTALtHg9TPHrD7dMvu0gVt04Io2Zt+y1cuVam6muo01Fqn/YRva7ce/e6g4TN1/xNx1px5C7alEGmcBBOoTaSVQm8qg2m+Y5QmXYZM2XLMkKvALLOVMduo1k677LbHXgcddsRRv2txyhnnPPV8oKIKSsoqmr284PNH48l0Nr9+/Ub5UNaycvMam5pbKK2LOEGqpmU7rucHYRQnaZYXXT+M07ys236cV8dD3AKIMKGMexEpSpIMHJ5AJJEpVBqXxxcIRWKJVCZXKFVqjbZsGRA1SG1SBnFJK/8ZIRLG9quuuq6sgCRi2VRkvVQs0i8bOZ1NGn4WHst23C4pef99+U9YWzt7B0cnZxc0BovDE4gkMoVKozOYLDaHy+MLhGKJVCZXKP1hCBQGRyBRaAwWhycQSWQKlUZn8NWR737645+hT1ZeUVKlRp3D5aFZXvQFQpFYIpXJFUqVqtxodbYrtcZtinZQs9Nb0jF50MasQB0EtEgTduekMlQs5fNDMh5B00WBIsYmOCEJTRiCpfFCCB4hziyZzTjGIAOoDsFy4IVCCJZ9/3eyItXfSOtsd88LDJ4NuzRjSLiHRSGH2ZhQ9rH1B4qQHRc++hsujEKcBEk5iiVxmHMUs2ybuaRUawLjEdKCCp80Cs+tM7epNCcSpCH04ymOOGKyTmcivzvaY5ZtM5eUsiM+9CMNR4zYC0S4RRuXsOKmua7CjSl5IzvEAYIzjztZPkOkoCxcK4NXpqFkNpY944MMtiYkT2DpvX7vNNZ8DDSagopWKlNjcAjhBjpMOilfGIQxUJYbpo0PjSvkRcx/DJdTSmKQpdA8hAvc+JSU4YJjY0GwYd14CDJchDgaepnyEaN5nbyxl5SFntxBGd9s39pQYWKo6aQ356ZxssVYwjHcZAy0Pisu/AwWIkqCZN4pwC33sRR1CDF5vNdyZEyx1gh79DzmIvZ+c+1xSMCxeGsIO5T+Yyuw85UbL2mWQ0HBGtH4hSFP6u6nY5ph38vKkwRVCxWXuChbMyoRxhE23sU+HRs7GQtRXS5/hdDfvZ6xIuWiUo1mZz1CsPkNkxXspcuDR1FJos+PkY+MnV7ZZ+PK0rA0O2Vvs2MszX1T3+xgXnOf1DXbm9/aO42oTXUy++2S+clsiqu0fQ76dQ74aVxgYHR+3lJn55CV/gvra9R/JU4pqhcpmK8X52Ro4QqpOSpjngXwPRjHZbI3v2EpxGipCewZ+TIMBce0HYZhZO/qXobssdyrflf3WONAULlU7v57h7Rz0kDBf24D1ZGxEmjK99wHHe+CryRr0WjG3X8E9dx0q89rJdece+7R1PdwxCYJo7X80qt77pFNNKIiW59rXntzV0c58ZiqxuO56Z0fd3XE3g194WErkbM2vralVHMt0690nqvBiWUxgG1NYfMtvNfffNQhbWUv3Llf4YyZs2bPsV+acAgfZiLDiK69R9GIZfP4CVs4Jlwz3P27yS1qz4Hyti3vr91h+w73VN3O+uy/gd/eBvXHR8Wu2+24sG1BKsoK0lzGp5VUa2sKsHuvjWXz9EN+KZJo1JbqGU2l6Km5ErHTNszylW7lV8ZNwx3Mcuv6lkMLtjuSgxduEWf1CrkOIc3FdyGG8pSlHBVRK2pNu1EBFUKp5c4l7VZ+akeTOiulYiph4yZwqeBRphyFpFIsJweAwwvw8eqikh+dOnuo8BP/2QkV9EC53qfzQMCMBkjqR35kkiAYVMJBI909PL2Y3j6+fnSGTu8G39ipSsNmzdt36sqT/wnL+6bxp11QV6IeQb3qaovGNdWPMROmzJi7xoIlQ+pa9CLqTdJHSF8GRbFHe8sqyO/TzhphQPBYQi6Gisr/hMZTi6M2iU6iGO7pIBRJIUmMBAoTqbinE288tSgqWonc8w0viYbWrMUY5UhcP2rCTCHBuYhH6qVsmdggAUY10sD+3QYKFmCtjqtUObgFwqkbDj+OZ7ebdrYP/k6mnC622X82fuAn2hc2PqFsJXiC9Us5cuNTfhixxpfvMqwsf/QiAT1ryAd1CQJM4rY4wVYgatLeTVFC1PuEI7eEeA7Jn9iPhDV54RKz32EvB4T0xD4qHFlnRWlqYiXVpNLW5EqulNLVFBQhJQOL90fpK67GlbLiS1XjK6EmlLoSUZRmAcRId3MfJqUPAON4YMMU1Nh+L6sIYKzaL0JWXe4EbRo0VjLUtBxDp8+s7Fb4w3Wo9k2wFLDx9S4uaIHJqZX/E8CUj5QRBOgEl4OFdAcDNLAc6FB/RIAp/otB9poZwptj6yR4yjyc//fe9Erjn5AkprT61rA6XGfq4YHpq5Kezb35tGGtJfzLpCBqEBKkHjIN+QbjhNnChGDiMAgMAZOGKcKUYZowY1g4LB6WBaPAemBU2DTsFlwUjoBLwy/BveBZ8Cp4F3wYPg6fgi/CjxGMCA7RAyFBiCMgCHmEOQKD8EMsnA88//78abhJalXqrkyyDFmmWJ7/gOkP7ew6/ecUAOXNwUAjwyViwJDEaH9xF+njM3dE2ENImrnaeh6iCklZHw3yFQZgfDBBmBhMAga7NCvBNGYUDUshqEcshHfCB+BjcCoRhNsSrI4JNUqt3FqMTIpMljzPAflDLv9nUsyp7rV5s+hmTv2nxm/hSdIJ7sTyxOLk2onxydUT5ROZf5dqZpdeu+9frL3o335hhRRcQP755ZNLztlnETQ+p38de3twePD6IF8HsMeFomocJzsGisj+vf2N/bX9+f25fdr+5H7vftE+YT92X+xp8t6/vXd71/bge5AncU88Abj1Dv6bpZOh1NYCEFPLDDCB/PxAqp9IbdunC999z9He6R+6hVxgnIeuLBsOg6zQG4A/Qja2u9jLBfccUHPNvMP61rSmjb3rXZv4jM/a1Dd9rzeHBlq3rSlMZSfTmM6uZjGrPSxqUXtZwlL2tro17bcfQeRAgE12fqSAoUqNjxQkWPXqBaOZFuKrb40DwAUAuHAKw4dfAkFCkogRd5MEiDQwCCTSpGVSpCiLEmXZNGjKZcxYvnDhCkSLVyhFlnIUFI169GhCRdVs2rSWvQVJKAC4ioIHrRAQ2kiT1u6SSzqgeOmUJcukQlWoOnWZN2DYojHjVlBNWbNo0cYeQ5K7AG6M4ME9zFhs4sVrCz8B28SJewgC4hF58h4zZ24HBsYTWH52dwGC3fI9WOyReQbfd9FFv7Db+5ew+Lew+Hd+5We/+M3+AZHfwZKv/O8A+T3e86nv+9znfu6L/cr8LXvM+iSQf8AP0w3kP/CfnCJ6WybA/++vAkz+3UcVyJ8OsyMYv1i4EgIEmr+vFtTj34WEeY6wLP4qFtNpZy6Ceo178DxExvMDKbmxziKH6LgxYj++AVkDd5JgqYNonl6SSbQmS5ZCZ8opA4Zj6A/+Usv9YIOtdqq1yx677fWjn9Spt9/P38HxhfGgXx3SqMlvjjridzcEPVLR+RdQCHKEWkSG01ZcoZ6UrbZH3bBrr6Di3bNti5fH4UsOYB+adH6Fexggwv3CuikzbERkVQkICsMNSZPuppSm+tBcqvlg2nZW4b3bRUGuMDvzU57FKq1QYaVlB+ls1SG6C3ccoP8yYJP3GZNoeRkbRSLNSUyiIgeZdEWBehsYp8BYGba6DDj2ewB7AZqwmt/mDAEGyacLoSEGja50GmAEKkC7SqiJ94eg5FgKOAKUsEIAHWIxYElnwgZpHrPw5mJkN59cddZcybgSRqRBCWbOEh8OWQsAE+iVymLsFldeV0L5WDC4AJmcB9S4J+UqoBduVfMuTlOc3GUmWd/jGFY0564i8uOG5hlftgDwCnNA8BZBsYhOswIQwhWF6dt8OALaYSwedKH7ODOW3cHE8IN+0E6nfF5xJfRNCE86capKMYhKsFEI3cRbBu1TKtGVrpDcceKfMJ4EBDz5VqvSlNEcgZU0Q/md2J4sBIi/OSuuRUiEeZqejHxEAabquj14d3ZCXWknVh0SBfQc/xJD0hMm2uUpMNfQBydaWoaaHrVoDJbLlPFWXvjkc7Wd1IPvAEfG1c6s2uRxV7mVjbzAxfU9vsjzwRrwV4A4Ot6873uQJcEILvfYBkDN+l7hnSLW07szHQYINAavQA2BE1DXZWI4ZMDEyGwTRAMEqQrbklKBrgoKYWB6uoCLINAYvGpq/iE+YwdBIFJdkjXpKXfNDBgEKQMZU1XrTI2YfBygIN8IzbjIvsebn2DGicziVGOSaoi8GrtJMe+yyMZ2o7DL+KUcvIXcM19CRxAT7YoNTQcEp9IrYLaD4pIR67lELxDHGlifUAER6tFtYs+phQwZ31TKbsO5SUUKVNEzySPu8Ch337aiQvNaYi1NJyDZUuPrgfjlZQjCJmOGA5ExiFi2XaniIpKhFn0eKA2ZKaOQRsVESFodpNZvmaIjP/01266JYZx/nxRjtcNKScAA8dhU8O5sdV1oa0JED/fhukPe+8t2nE5TYphEQy/WtFe19cAymvH7FXcWTt1nD4Z3Wkg3/QyoF8rSfWKmnXm6mtilee+apxT3tJYb5vn83NP23KeE6wEDbClbr6+rQuFl1AYWuPd6V8az0Mp4iEZVF0oTI9j3yijllD6kLBDKAqGMhDK2QpVBylR27vdVnLQ9KnCWe7y6msGEF3g02EWCoUYLa7RoIYFWK6ro0bZylTBCssCuwzRv6jurXd3gCvVe7NVR5nZ/Lyw0nKGxxH14F2exhmiFrkkHVRkWdh+ADs4Ca9yiUWBouV+pjZyFceDFlLRVkhcXqoXrtf9rfW998zlFsA1DST4M+snX29OUFjnYtcjD+7ZPz+31tioL3AUhPioWfFFUVXg558jr6/5aQbUejIEJO1A+d9wt5eWFVG4e+mE0QDA/P4gLzprIoA54jwWvFztN6hKJLtzs4jtsnFBLFzc05DUJ9Jf/y4xFyBBQaR/VXvanlgkl+FCUeekryLdbnJ0uIK1GOJO8EFDycBF9v1AFUJJ9xVku500rusFrT9AyZqyT6iyTbJFviRInXD2LxoOVeLDOtjj2/xFPHjKvv+AVh1IE6kHjulPayttxNgonYXwu6ra52QsOW367pzsodNYEOForJl1ozRglsFtLoDj7L+O2a+V2SW6d8z8tpbrkDVUcylydDrHHOWPa6liftrZ3glbgH4KEaWUWx89jCRG6JWyxCNbMn1jqLiphMZB2RZg0rISoOFQeuE3essXR3IKgEEl4sdzicHQ/A+vah1u6PFbooidTGW6QsoTy6qC9gyqKHJ1FQllTDPE1zN3KT3syUUa0AmD5UBI0LFbCmWJjIB1/tnyFqtAVXILLnW4FnBvhVbyCuZZW5xG967u1PyxX+LevfHthAe0/Na+0zUHAdL8epNilHrYtEHGSk72IkY2yc5y8Diut3tucMg5WY1xG5NR2mx1xQLNfzrlxr8YBmnLS0UzxMpycfF36/ZzGHJRrkIh45UpqeiAmv0eCBEL1GisPGiXB1TzU4QaMwe92I1EHZfmKrNiQJudkugYXzp+GFwU1rHOtBCIFfCqOjp0TQtGahAmIk5i0TplTUC1MX2o59XUkzhWensTqnvuWe9IKZx2KI55yDuQYhRDp6wyKeF/QByer1ebuEMoMw3iRLKV+dqKkctIejQctap+V1FC6Q4NheBhbZnapibToTUHwCCxSybqDu5za9CzoNlu7RnBnMXei4JwVZ0QTFKfWkYwnYzHiCQ9HzpiGQi9Yzs40RoWNHQWgtt4aQJkJ02oDVO5gmLBTmSPCLMjfUYUi6B6VMduod9gIywWtXAL6RIoyf3sgBvqTNj1eFtDC43sf/hoZc3KjhdNGtDQ6eVcwlSgfRyvgzcQGhSqBawnm6Mm5tKAxV8geHMvqNtuEXC3MAlbzKQMwkNVCuRiijnWqJNap45HQx5LUrq+HKQIGmWJZMLjOtQIZmtjI+wiDQrEKFqfcH9GANAl3TRNwb0vL70oz+w61y+M/mp+7qWlqieSrGTNIVdCCRI2zdTVw3OPyaJR7A3N8LUQZvtE0aPuk+0m+qaQ3EvmXCm7ogk1C1lljIKOsMMM0HmSjUdHdf3CsstIBtziejYltarbw8ajuS6Jik6xWxHj6XLYegYSkRn32bAuOtEV5SCvhzfDrNSrIMLQU52qGhABmgGGRwwp6+G34m68OvUhV9L2v/0HTb1Zu5BR9ZEoj3/O6708zMs0flqpMclIxEE7xB0f5ZUq1ZWyPmKCQMZhBxgpTLYeE/PinUCa/JnHXrqYYCHBelC0hCqPNtR5eYEAvj1XUGuHqXTPuGXpNuMBJ0EEes8ZJx5OZjtYx2chAuzwrSqH/Rs9LXElbfXf+2opglvwHzE1P/wJh6qd9fTYyuAbef20xw61zfs99S3u7Fb8U6pa56FXLLumMBZOqUBztxx0eq8cwJZDRuGwXk6pByv3EvctSeiNee/TA6W7aN+8gR4S6J84LAgo/kyaIxEs4+4ophRL+Pwwk7uPQp5wcPVcCh6Mr7MEAX5hi+yBg8otaHjsFBIgn9YnlBtjFqEj4LbV9dWtVK14vgbWp6cJvhWWRk6I81oWWxNxUJvkYsfVvhkiWnMJi0jgdcNLnu0DMQh9/Bpx56OCEDQaCgdCpWb//xFlsKuluyldPj1r9t3+r/NuRk4ym7Mi9f3jNu7ZbXPc+R41mW8+ctfQWJ6UUnUvMLQp/F1f0nRuqEG36cfnvWPMixWtYkeWVV/JR/f8fnNl4CYsWtzarHpSEGKldP443V0NjOM2JMAkanKIfczMQOGURiuDt1iPhX0j1fxx737DP8PIAD8hpwYEG8/fUlAvt7wMgsbU4Bg46jcskoIEZmKSZJZkIqdeT4Hnpn4/Dv6hBP0wHUZIG/SSvsE/RBthg7vZwoYkcDhdf4mw9LovKTCagCBOeqGH6E0iLkcTeo1bA4jN4VRMg7JqWFn/QupgY/AAW2TOmcw2A3wlhDANfkEGZCakZ0vSQzneKuNO8TlGCT+f0OGL7uleP8ia+10EUFQK1kHZcURuaBZfEu8FBDEEa9DE/1RD4pUksRnek0V/xHvZxcjKAkA55QDFICoSdkXjSg4j/9ybe4MMw2oTR+h29wF/f+jcNCzstcBouomHJOv6nkP6n8fTa9M9JRDp6wJ+Pfp8OrUV1Yi5+h9JRhf3e4vuR/ro9kyYCTC4SNaAEEkpiR3EgOoADIRpRiL1gEpMk6F1Ny+GV0tlNqtkwtcrgHVvZuYyQP121Bp7CKyU8fbY8lodukc+RSIl8BWBt7wL8rEC01uAsl2Qje96JRAWfDIsgp6PQoMKL204CU5ISXjVkuIAGlXJ2mwNfZvNESeLshKPE5NNTS/3ZIh9IcLwQ7sLaqgdUk+ERxiyPBNOUlnBklrJZC/63WcRcPBGFuc66xM0MQ2PrQUqW3xDB9cQuN7ivwdUY89bf9mMq1mcwPQDfKU6vCNN6xGpZIXM1+ZADMClVZfIT54NkbgerD3r1keGXYYVVy1Q/IqYR8dWdKWKf4UjNhJ3iYxJ0fyFCduRmBp4DbIlu3UkLcEAMALiU0wF/KlVPgXu/BDI8sMTeRRJiD9tY2gZr/RuyubYhYUIpl87wUhBkCk0HXiTP+HBHieZ5Yk4IP/BZxtj+RPMHRdGPLXXWaDYSUxJ4MD7Ej0ST+d6zyRS5WQBRA3ObPkYmGz041CS8OXEEvpGqgDohwIBKjgr7JsK0nsemHRQj6VOskHPEy8iLFuLLJomavW8JdHmKo0x5xGtZGWqJy7IlhDqRNBU+Xi+F4nyjagJXFoddRj16yNj9Oy/L7rGG+ecPjA0ZGETn+SKgshQ7V0246IgZetQ7PGb2zBLCgMQcdAElMSX5lbeGTnzJSQKbT3JNK+8Tpv/9wpCA+HICNr9KHEUfTiZt9CsAaEl4fBtJQzKlF+OGQjMTQqeD4MQ2ygYd2eCGAasoPpexzoKgXIpJpG4ClCAKNQI23hMLOPgmkaB3SivgF5AFKqJ6LRBEjTfhUJENX/2S+wFT0Y14VrNn9t3cxFJVmDMx33knNwIqM97hvhiC/nN5fHjLk6ZHBk9RuvU47LPloMGLP9ikja5/04UKEWXi3PkxVZM1R4/DHdMI8h4AAi5BPoRdBxvx4IcUcIk6CIjc4cVsRY62PkroGG5KuwNAxXTIJpCLqTPUEgdcORx1ew4W8vrQVo8fvAr5NN2/Y5FNuOsBB63WBotLqKShinMJbJGmp8jqJ6Rc+RLSoo7M3JCymzXFXux9gSm6FapRfcbY0wdeKMX5aYhMWYjnJVIezYlVVtMC8YZ3A4QsQ77Tz8QbUFADDQBArPXNvFJI9o0cS4xGd6BbV6UM1rr6bzw3Ptspzdh8sCSrxRwpfIeUSNntozq8ZxBmPdkRVZ6cI1KcTfC9pBz2pKGTj5vOiz827EhwfP4iPzeiZDX+2Cdmks5X7fM2JLd8nbgShuoujeX9Rv8l8Waodi4GM2+fTTMr7HREX+KkRCklv41dTpIWpyUHKtmSAdHDNEmKJadKknxpl8iZga1Oki770+LMVK3uM+6geBWZYMLn2PvfD+ZV8KR9xFqw7e342fQ4jy9992OonFNxh5djiymPhXCfOms9OISUtpCpPe1R7iFGQiNhitQwksIOgDmaZYrzAvNShO8Y31KEBE7PS1zzrCLxdEDRCeYdn5q8zx02yKQ9OiDD9U0oYT9GgXMHthQMQfnv7+JWGtUimMiz5eRiz8kdp6MFq3sKT88HTr3oyPLjLkciLxuehPm7nGlN9iDtXWNL46FkTPU9uuHtGIjqe4mUCWq9cngqdw1JfXhEQg2fljC9GmwleeiCbKq3bpVcBOdXMHzEfjIEH/NNTFhsqmfP99g6O83G/5RmI4U+0xe4gg1vMzQk/slp0AdpUz88PfYHZHU8HETHR2GKDV7SpMHRSZTwRS+Nu9cTO5LL1xrrt7Aa02OhTmifbM8FOI7CUzyP3qIOqWM+YKuRKZ6o4AguQmPjPe4N0sAHmagmQtXIdC4EKozQbfNCDMARQ+J+8sSzHQj8G5KWIPsd6zPu7Ci23OuGUNr3EnNtleF0AI6C/kACzEZTFgmyf5VcF73JQhJaYSdheeaLFGJqkSkhBCW0fo+jdi3z30UaFBMGStvMW4HTT5OQsWtHMBKjO9lNSvquTX6YJhIlKwsrbrPFXYlQPuOuPC699mSUljyqwrlQNLnAZzqOuFMce95rhSwoUYQKKCfl5i2cjHFXw2gIng56kgNCsT/8S/Qqei2cKPo8fkHY+lxGGn02PfOtVxyFlCkfLZl9q8gPpFRDNVRANxCcqUOiKm56mBtFhIJrbEwajuL4AlwfgPq+Og9TrRHvYbyIFzDXMvSk8r468F86rbl8dbiwWsLOfb18Wtwb3S+q3soLQTPKUcizoPjSVE+uF/NW9o79QWk8KN8u2VLz1KhciCZ7U48QYWjqY2Pl4PwYhagGk7z/rIX1Ao7t88el3Xrad3PfmdJaXo71n9HMqOjj3bBV560dHppOD6VuQk3SdmbiXYRESIR8mYYYT8RoGPJkTLkmiF5w4fRqvsC2vIjORQR8qdei27yoWOSqUmvF2Oo0KkqxWSdF5PykQLFv9Ro3R3lWb3Mc02WUZpdwgALXuD5k757oK9ZhSFGl7FnG+xJWmaaa0kSfVlpwka9cnOLR0+4K8goTOEqAENi55IAAv1gurQ9/YT99BpRpvkBPBBks58t8sHw4ON6cBVUHmoh1JhGjLpK0iX3ioZ6ySJt7d1nbae2SoOVtC3XYCYssL9ZDSJlcD1+NrHKnJxUnEDqJnWXUvPJ4KHFWwUD+lcI7ECApRbUnStANoSbvEZWmIzPOC4HgUcWzrCrX1tRPAPdmoQLQqmKwIWLQIvu8wJIjc3aeOGaeel5Lt5BbfDxF7J2cqgxgF5SSBpS+0KBSTfF7kwsrRGWOfEgVElWQZuEw2x/twehokNrhb4wxnmNiIuwZt6Jo60bbIsiSfGldKCu0K7iPyoWOtArE/pxz9CyOCkTiQjtTqC223x8lXNZHKUbIsorGibLFmfCmYXFyZcrDsz0qItomoK+yLXdo15hzhEauTMjybjuf20dvopwMJObw+pPTapzTxwsCiuusVXoZwSjs19WuCXhWNDdN72FTFw+eg8kR+O+Y08kHgd52cpY3li+W901elrebiiXCVbe8/ZiWt52flsivuiU97OcrUN07Vqasu2zFyvrwqZJlA/CucFk8tcpX8adOCbL+kSpk3f2lEBUy6tRSTle453C5l8dlOyJd0V8xUUaVdLmdI9Dl5jqZwhzBLq+VHCnnSlfSQNxp7Nf6J6EAvaKUf6+u9grsTMt0Wlw4agFipWqlVm1HF/JYWCsPy3B746Xgs1GCEG+8gu5S/PhNZmXdtZWK6yqdYAlwdPkvKAR7FZne3H9v7s9W+JV23bn1g/nxErr89MLnZeryBzsYHZnLLaPxuwC16INVBghGoUTMZAcza3OtgiIgcwDR+OgIPwhADvRwgh+/5/1jeygkVoPVldogNTUdwdbH5sYCQ0uE8uvtEAvZD42qxMUFmjY73HinqqI5q7FcIKMsbH2Gpn6QWy1nJlpnmTdRRpZ76NuJFZU+5E7J9yeU8NqhkhXediXcbHsD02DRQMVS7tSN7QQ1sqFsVm2hr/ra3RGe7sSxlPxMXT0oFmsaknOVL3zHIkLTa7YAX5OFy0u324kSc9O3dc3lyCXLk7BaWdyiLey5ggx7yL25o99XtqZR7XUeChfD1gFR1du1PucsU7Ep4I92Rj7+d1lH3iWUBjLBL5mE83gfqwoOfuEGHiL5SnRTj+hmH5yMhZO9eK6UniRSH7q0W51UdGMIm3spyBoO8Xqoh11UPiizgCKtTazeG1wtbfBTeJD7VORDsAevVQYoKypulqKogKQiHiZ4IahuBEGHrab+HM5gCScGuhtv0F+hGBg4T8MuMsr/QiE/GAhE1JqqDK/QrsOtprsxi+6XAMxnHS06XUGWCZgRP+INmgCW9xvaDBUHhvuOABapBjhRdFozTUw+kRkTY4tMw8yyg/kmRsG/fzK8//tJ08nfTrBFxXNbXxZzHszXdrk7J0B8NLoczTqayW0Hk5EKy3mEbaJoADQ96B/F4vEyj64VQxuqoMG/yQa60PuHQk3rwu4pQe68NzMineXqnj8c52smUfr5NxYkapevdDVKzqwY8GbJBhiaouXirnX+d7DAWSdsvGLvjQ2F1GO4snHCRov+nLOjHV2D/OIQoOWwfZpx7SKNoaNtEmysTTK2Vri4thcUuba5uLu1FRXKgj4my5tEjMpLRaiEC7XTGNic7dvE0Fr+EgQ2kKIXmHRaMpDOhhqZmmfalj9Y6B6Ym88KJzYWm0pKnJcJmlxl41b3QhD8Gdmdnaeb6T4EAjHoij/R1a8pK/heyMXAUGMLVzdLC2/Pa6q62DG719BiYhJ1ho4N3+2YqV5+/6n6Tgcd8PpRjCOZGHnYbkRq6VUtROWnqqpnzHXujZHPeG1ddUaNEoW8Zvi9TZI1h+1dnwlW4mfOg7cVOeQhctZ0FmmIlAPCRVJEElgoN08EBMzT7eggiYVykOiWZkHNcv8hAaUUqN0xLd6IEm94PGV3NBVnSIkzUmdQ3Sjxo0n/XR45sKZO8vg7nKOQrBXrJtM0wOwPgh9Qk/MJ0T3egWlJ2JDym1x5+4ILIv8tz/95e0sPFqXm7RXs62qhLfAa0nwbuEG2IPfObbwRi6wPioquTArBZ0fFpfeEhBOCvX1T4/ywxcFCfgcSVP5Hc3d+bvZu3bdB3BDN6SDfzJx65g6+a1EOpc6YSBEeDD7QGvtw2AKfTwG+kHWWbZfB52JO+Th8YjUl+WZJcyo+K0r0+kNWxioN09lSwRaYvFmLU/jcR46Nm+f4QBwkfNgyLtV2FLkWbS+X85t2SD/XtiNoEeXuWXKbnfGj+wXsAC6KuJ6E205bFxV6OBNT00ZIqm6Mja9pTCLUtYG7SJV0+NZs1yP4dgEIgHwRftafUkiJRyJ9YQmVEU0nT/fwozoxgfrZ1yMIlVgYMhZe2JbSL/zs8wypKTUA20wipjeSsIENKekxNwoSaYXJ0VH5ybT8RHD+NSl82CIuFdUvyO32+jbn4XTjNlYhJvhwOqbWXdPkrm6C2oybLJQjXz4WiHdjbMr5FzvT8EuldpEPE/y9X//B7P7pDCJfDC8Oa3unDi0OgbSKjeMz7h+ZL46O8GFCON3frtBRC9vzkiBqIu+bFhvgXxbO77d/dkLoYGnh98G46floY4fv3cZWKhrutjt8DSe/O6H+ZWvgYtjuauKlseE0jaePLyZ2VLPYTueTbhnsxcYYzOISsgyv2flacsrhcKMca9eejd9ThMCN0Vi8faLRBMyHEuZobhM/1pDh8LKx8zemNvc4qH8cC0rudF6Ub7i9W+djFE2NOyceQq4j3MioCQxJqYkl3KwBAhASSU9ylPQy0s/1ht8wZP9xixQYAswkzOqnid43e5ZwdjXp6K/lZc7p8PQbgVhSJL5x1C8Knx62SAzDRQElPuiS8RTV9n4dToA2yxJWdjrzrNK7Q7n8z73Nj7guP6uMPXqal9/wvvEy+a3GQTCP2tvCSOHwHxz3OqlcazEymtmRph/z9H3zHyfbZ8qS2vk8K5zdRe8aQ869fqwfzZ5kl8+Wx4IrX6BlLLgpeih/Q32oAG2WDV/5y41t2F9vLpEf19Y+5r38rDLuaD+vYO54h7NnfKI86fbohat14vaO413HXWfsLu4u7p0AiwDC8z+VZhQD92jeYTjvqkW4Sym4sSwZbr93VtVLCvMxNPuqF/nxIkx9SBFsH47aS30yIkQAY72vIRICn/fZKrn5wfCjPqk+oBQOrWQPm74dKlC3RUWZ0lYr2PHTdJxAfR3RE3p6HZCL4vsF8Uflh3zKPfzKh+XxRyqefqkLP3YJv17MdVgBI64NYemR2KD0uLBqoDbo7oz1cSFzndeUIurxAtN0dnx5GRv+Fh0vUA+1LWGXHmdlWd3jcOZ6T9VX5YTj/Tyx/byE4/IyCu4XKP0nd3P+Db336IUlPFTE5wZjGnfLffYKRizWPaDWFRgJkSLSov380yPDSSAZ8p/8c+jUU0QUNTQlrTnOE5PmXwBtl7bkS9IIddHOchwUfD/EfM9rclf37vuUkmgX53jPLGirrD5PpkyggZm9PMGCKvEJsMw9nx2a/TgHHkJYLw7i8dm1Hul50t3VuztsvevD4zcIvJQgkT6IqszKiJbOvpR4QAKBAsyklzzRszK8lFlrPuysFA96dk/AgeTFx9R1nhfbBbj+XToYZXHhh3vw/3zW++Mha5giMk4RfD9yTi/66dWLdOt9B7UvOgLWX5WiRpDctJOvA42GkMozjrjK9a6/gLn8bxdItNc956VFjgGXolRONKoJeH80/hCsMqu6s6rCYZuURQLi50m/TvnaT6HDkOrVjgJ73dhoU5KUM1s/FzWXmIAQ30RHAetlgbIPU9OL+7MjR5F1TGsSNFLOgmLx28gK7+RMamrDO36QSOFOuQ5WIP4dDgpOiIJNwEzalEQouPS7B22zKTz7JKTxm5rdt1xd1b+SRR5Y1ExWDtwg+5cUXj0G+1Psax79dyFuhb5BGUO3GlsG6eTgkkCI5yZigGsLcpAt1otPaxL/PsvPCmx3vugME1M8XRHsskO/iwpV0cuYnN2zrNK7DFwgnyQUjj7DL72qepV/46gGeZm5ZHCIvKpf+EC+kHHkfaYrd1F9YVxsZy54iaE2Uh85eHqieWr7pJVka382fseAb8QeNV0jLXmkgtegZ8gjdvg/hxKKO9gmJwUXZMl8dVRcbAzPyEXDtxWHb2Xm9s2WVYgFaofySLAhAm2qbL0aaMu9HfcCw3CZ4fjMIv9AUAs2AbfKrv0H+8Ce2Eaxsi7aXHfyxjgx7JKPS2KL0EEUjP989Ok//pOmacQMEgAv7st0hIJ1pZ03tsJB1kYqqHWzc2G9v3kThw8ihoVkZ2JiNwPxIVlhwRn5PmG0u2cAad6Qw4vKD0fv4evLKtsre0XLHl5U9Wbn9S+on2ngIho6wSqS9qxZ/hGsBRs0pDSGGkrgfcxcXtbX3vQZcEN+/9krUnZX2DrbyssjydpI30/HlydfsE6sMzs9/3nvSPdBFbRw+XLGoCveMsbxqi9vnpAlZ54cxkQJZ17+YRhksqKcXO2p9MZ5oSWhv42/E6T5ZAfagBFk/cO7TewmJiomPwIfnR+F2cTef/MWRAgbg6d8SDSc7wz6kTARAE+eeWxxItVIzm9qPWBIuso1XhUYcp6geNkAoZjTkNP//gHwzwGv/H8QWN92hSP/hQMDYkefZq8bzE2MIrrHh2RE2JQw7sjO7yA8oq+HAutH1zzgql3IB9e8oN49gGhi7uJuibQwc6Q7mplLWTm5WVxpmzA1XTHQcafD6DpuRstV/kQbGCQCVo77aCxEWin0xNxlPmDSxHTV4bYyd6M7piaTT5RaUQ8qWs24g1+yCnbNxgfNJ0IRlGjtm8i1u6F+NbPHRPaymQ3GXlCwTUyktXcChHowMn9/Yvgbfv+JEZ9smBc7DVFPffNiDaS6Vr7DO7DGu+LWERhbzmY77gLfs7ab0Kb3dzv46iKnstPGgsVHgs6mjwIsVRCXGRKkxHJ2wrMBygnED5WaOrvsdeP2ySOhuR3B4LRIbwW0xDV1BV99Q2FzEZOEAWMbfv2rBCd9eDkVPGkICMjN9E1G+SbnZgYEZufedGtozsAUFgUGlhS6JjY3uSaWFAUGFBYSvSgNN90gLkmdgyedg0mJHYMnHYPgo7wKSSVHJfNtXPOnK7YwDdunic3vMpVzlEnK8mDwgLJL4R7xt16VQIk4ftQr0bSk2LTuFe9qaepjnyQTLV3sKu2mrW0mhdXx9i5yFYcbSlkQ3UpezI72v2qXbKJfqplzD3exMvFGJ8rGSDc7S7traZpJBejO0w2gJbYTZe9mozauR7tY24Y7pV4g7cCvxzra2kc6pF1wYIcURbeZOZQFyl+gtYIR83MR/CpszM9ON7/2Lpo+Z1s7Z4emJ+BdJSkt0L50zJvW1kNMaq9kSzPUHW+ZLcjg16/NU0df95c+pkCzetSKu4Pzqj/n1QS36eZ3QEiPKEB3zTsV5zH2S5guAFU01NJWM7vSXcPpW5OYlFqaFKNjlcy2yVRUzWV5W27/ipWbh558OrcFW6Q8UDwIhPfBm1/JNsv2ZT/dAqBmK9DFPbXkB0Ln6bZ0IMuw1J3z1GkujrMQPn2Ka85Pqdl6UFd/f7sWPXz1dfcf8BesPTe20NWysxARMOKk4WcWBTIUyGv6DrEFiX84K/pBPAjwoGcoVhQAK9H5OzKafHNk+C/P92ay0jl9N1c9fVdXAz0XV300HxA7tDikL4YmDZFQNJTwKkQDppfCDtbHyZYoP00dMzMNbXtzlvBhPvJkFTm9vfqmG64o2rOKIFJaDMqOjW9AMfq6eJboSfG0PEO0qbaWtYGpy01zAzMdvLmRuoatXu2YYNp4YQa5lYzLTFcSMeOd6I9OnskDfERS+yn94xRsJNqrt3hgWFAmLoRU7Be4KSoHk9dqi7F3NGWLRiha1rq5xRup1QOxtZMn3J8PT3N9vP8csNhlAeZHlwHzIyQ/Y2Hk4EYcFG+zFQfc34RHRNoxtfcTq24AvRXZpYXyisVFucXFivJOhVovnIOTZ1i9Z5iTA7APkOuTa36JaEQMzD1lgl9/mkXbvcp+xatv+P6RN4kYkZeKgM51tcZyXQ/MJGXODZsJpov+CWXZ588Jc6OvbcMQX+aqREuLQPthvYHO+ifW57w+u1Vk4shpSqLgd/Jb+TyH/SFxPJlEnhs5tBbdKEBbK5wHnf440dRZ5/UA466wP0fY4TrPfAjKPQg7CcZw7H4jf5wKKX+NMRvZ7pEPdxgeFVdFVbFuPW3+kQrpyBgUDVEyuySPCspiNZSOCrS6fslMUsnikhwqkMxqKBUVYCXx8qVQP9TRMVtmMBGHMRfpAwMTfj4UG9YVGzEUE9F1DKy+SEn/b8Xg5cm+bWD8di/y8muSxeyjbDwdP/ZmjhbxcSFcVjarWiqaSHZMW2MeKUMSOTZlXlVJqbbR8kJ7KI9N0kkVVUVX1c86u/gpMWZIcrZJxnc29xJoNKKjnGtje0I+jjtIM2v6GTLkEPNvZPAZ10xvdma8HzbYorZW6cVy4DYHjpICnf06AbpAT0yxgjCW+fI77rhO88/f/3XK33bK5/LeuHbmfqMahtp7U+S36J7QkZWR0OQ2kexvc87Nf5ulW9Hg67K1RdmmpKDuevpUcoo1XR9Q+gJ9PZbsEfRp4UXnxrlo7AbY8GUfRpLdgj4vbptWJetA9vdaZYt5BwUJx2WDrgVygkzxTtbioy7ZckjGRKfK3P08wnFidA0J+1/4dcrffkpyRR0vjLkUqpHKkJlWKYo0p7/FWXqnT9Vct/Rkzo5UR0w6JFN2+OPnmyfBP+a6pJSKzPibGSkxhc0BiTF4TwwhJpSc093YvDKRZEEnRnVoYJc+3q3DReW5SiDj4eTxXH+L+nTfXqXAZMo9U07Zd/Vcgpi4ymc1LnM+5dONsYgRqhGkNNvZtcs+p5P2pZAjv/aSBQR+7fKFPb52Id+cu0iz5C+YtrXLZZ+q6KmwsrOHYsK6YsKHYsO7vlt87f+6nHO31T4Ta5C2e+2FRhcCTIwDL+PPGrMECTtHBwRjEj4dlb+jTiV3OUqjkKrWI87hJU/y8Uc1SB7mHzoH0qk6hQ9kCv6OduRsxV4MQCoFrsdoG2Zxx1QURUQ15QomdBtb4Z0c0xracY5vJRJb8iOJdg67EZX42OXDUnblQFI8TlaidwXQFD0doQxUAyM2792VMy0mkmbBLmjzwKFWaaTXLmcpacjGq5240aS2xh8150rTuzE+DDBEh+q/OhoAqf2en/GjMj/h215Rhi1ZFQt3JlamCbpJx93SddKylN5RuX6pi9lBOpqm21y2dOP2qZTum4lc6nJ13eRKXv70am319HLSvUpiKkmbfAebwEyVxHyfM1ttPy2CCo3L8K1tt6ugA7nsX+/qsQrbWuXf2u/5HO5tfpy/aSIRQ4tDbb3RKJSmBsom2tpGQ8u6/c0dg6zOYXzR/AcF5cORDJ9r11f1a+EKFz5c1EbXbXo9rTVn+E5NiJz1wqGV6mNf9xpafGWhHpQzdCfmTwow2VIpUlLwyD5KoWoEk82TopjFJmRfFDIDB7Dt4miLPm6CleOSE1LBZdA9KOey7ychjftHKcdACl2F5fRmTrQ+rU9eXlwIbnmFpguztstbLFvgWKlA1F8jd9X4jp5SLCnIqCqT5hlafweB9FW6t5IhuS3BxtzEzM7MncKQjFQJ7a4+R3mupLpSyOed36gFvC8kMzwwJcUz3I139npz86O2YZf2r8j8yOlWjlr/16dmy3RUnC+pykPAWvpIBJ+y5Cwt5X7H/kL364TdfxfaT6nvp+Y5KZnfiv52Ue3RHgj50VK1K5P59fmszpvT5s+fPv9hzTH668dYW/ZWvIfYza+Mq3z0mGGLnmjEV5LF1FiPNXv0Uch8Hbh8ButAnM8gznNEZL808HCt5ErYTKguqE4g7jVL678ifT8r9Y3Hk9x+SrGiuNj3i14EMsKkr9J9DYygdFslcrWM6Fx83W65omuIp6QyLmyz4nDhAuaeP3veovH0RTfa7AvNDPI2QGGrkHBicDc23b0i+42QAJ70hmYFeevouS1CX4NzsntBaxf1/vU8EndOKUTLYS6jfbUV6bd88bHki/HEN+THxHZmCybF1ZVmYSt/PVYpwfnbNSuvc8SSC7ldNWyxwfqudKjh8l3vx3MRgzqM5fwVq7X4noz6/FvjrDsX8ekXKGcrvscgxfDyVaVchPnluMrboGn/g90Dv+lwv7gZz1x+7DcTFTzjty+P7WeoFr5od0mxvKxoiXNjfJU73eLKGcpZ2lm6u7S7lDeUx0Xma8flu0/vglr/ysLKgs0CnkKedy/Ik5nFGCNMKdOGgwAD4rmMpUmXLAd6HcqyC54OPB8ZcJ3gUcS+G7dYtfhJiL0S+d6oeG8oORRLzMYA5qTcD0Q6/7ht2MUDRSm1nG7wpzc0C+ebWeb+cxOMda1wT45jP4QWOSW4Y1oNCA4vkw+Z5dfaLsFnqdFmcOa7P6/qruVV8BTi3k7Etg5WbU3DVPNJ57BQJZ4cY6UCzV+kmssEsWZOB9AIvCucsEdlelJrjGOGkrwkt+PQD13jOkHg0dqJ0igR43iyr4ADcSGD+Ggz/4fMH3R0ocl+a7y3rB0xWOnWgz96OQc+Xmx32hom3TvX7uyUruSvJfmkhR6yExaXTU1yFvsdOLXcI5LHOLHwxMdq3jaGK/v+2mH9YN5l2MurjMPZYG61VUiL//7dff8W8IdI/an2XDlQntgjFd68zohvNCnaOmDZ324YPgB4E7uK5VTkv91YuBnkeX3DxcvTWaCWYkrkugwqM6EUOwV2TfwmXB+6TWXQShO3pb+82xr7nqV5vr/ffortXX12tUrWrqxlfN+0n1o9aiiw4G+MBeNpqt3m/Sk7k6mlwkOshRuyueO9+n/bkNaeH/1SFzU6DucBeamg/HD84eR16v1gHS+Ehtfd4JSX3FdeIi8zFw8OZ6zrFz6QKzwzMkDeClXxQGh4boXcTMiXscJVN57ipoKY+E5wiMvBCQfpVdhjLRGh1NplEKrAUSJVzV5Zu1ck41uAs0rThxR/E3YYdFNcUZYL929ulexJwRHOzmRIUo2UqcxwJbcxq4a/mr9MhsQlX/mJyHKarFcUk35D4q224lVZlSHDBHNrVAupDGIRxOQEqTMlYBWJg0QXxKzhUeUpVgZ/nezzJgfSQgYJnMN63Pao/1hqoQ/17rfdsaAOdz6BucY5tttbF/CN/Gn8xfZp648taVBFipufZo2BK0ME4xNEMiKaFWQSEjdLRZlCPPS92aWI9kOjeSVyyV26I//USYrIMs684oBIkUxzPIT6safgBNFSZF1WdALuWxE+FBPedSyX3WOUX2g/xTY2LpftPhVKgSn7V8/Azb6QzGCMuj76O+Irp3QAY5CLPLwl2as0YI0f/bndIHMu98Wgbuj4HTYocOc1PejFGjMfJF/otgue+alB56qZ/Md0auCeGtYbZpmot2qo+hyLbFlBADfAXBmmKJAB8F256qmzl5RR7XC8dIaScHT/IsBlIqNjL6tPhZIgsHrLO5+6j3cYvMdH+ppN4vFDv8vbkezpu3fgP32cJf923IhsJv5snCxzGnA4HZDyw/wbAKJlpBThBFZqZU8I2LHp1dkvzlQAgTz3wgiu0RW0NtAE91GxuvLb7o3GU+UzCOJ6+YuHtf0XEKM4pTmgGyga8/tlZ1vjeIQqGhYCMFFHhY+pOjkTfCOdDg6kJJUh73jxRTTI+6piitsUNIOdhwVrFdriv7+xOX4LsLx2sHUAVuYFqB0jUTw/nIuMN5IbAQv2e0FsAfDb3oKJbwGNAzY7J1f7ClOdTR3K3OW5Fncpfhnr5pk0Ow1HegZt57ri9Mm+eoYndg8ptSOGBgThV2IgSTZ1qakRS7Ifzv3UUJIl9d5XQwPCi4J/peMcAeO2FuiHX01WmmFKASEqIv9GqnBXXCiSww4dtjPhFYzz9Pxgbwm/6lZ7JdbLqNon+FpzGrZHOUB4WOEiOENNmEhlv0I+A6IBPgHemjc7TXL8p5+iwJKTHJXVR5eymF8xWT7ozsTqxMX5wcAEECExhjGsUYFLIZqjRX41X15wDv5Ns/a5AI8eiAa1zeDPDY08xnUE+QdSPjQf0g7Jl+YrBbYPSD4zPi8uaCQ0mKkBGBV7paXNpKV6eaakzqSkAVI51gkRVSPA36ZFSWO0Giucl6cyrLdSwU0tfBJwRTMD5rmSOM6Lqzl/GMOxdpdVnCAgADxYAmQLgq2wvVcjQOcxMHqmQAesc4zewiKXVlfSOot2ABHkmNvXFsepR9YwbCaQLvInoOI4qz9fILpn315X19zR3czc3uOaro3BXgubeA+ZqkbOT/bTfsoGyWXd6Tmj/aD12DXLzC5ZtsFrd+lP282qNH5cx4qh0lV0VCkjWXQpRNs4vaErhTQ5+KA4083D2NzFzdjUzd3MGLApC53WhGklwSXXn4OK44aR/AiUU5CFiMh3C2/T4I7ckoLuvCBzK+8jEUtRxyCbiOH82mwL5+s6Wi7W1yzcbDR13a1YK9NszENRFvoGqGtqqiD5OKUqVQDf1YWGO0aVgEyoTxCpQ7lx7JV0obFc+ZyZq7uZsYuHqZFkG5s7uoFOs5xSqkmpUsWYrg08U6KJtHvBCi/vulIH6+MUSxssPJIP6pmL1tzU045ycr6uC/XbusxM6thgmF+DpqRv0Ew+OFCa7WqL47oeRCaRZ4dNBYgVM8WsA53XYhW3kSkNfmzIbTTTG0PJ1el1z3kGmXcbelCimxG33dOU+N6FaKXBpdcPgmaaKMGQPC3/MEuMvpAoasjRNTu11szC0wi5vVYgucP5b7QsqiCOHBIkfO4qWfBi1msyVdjBKDV19o6ec1jqTWsLmueTfeWy1MlnRQUOWtmnGS069AgvqfVuKWNAREFcZ4i0rPMGJ/n/b6OAyqtd+bwPvU3NXwdVKkIVic46YqI6MkqkRyplX4eaG9/UXyI9VXuCZYOyxYZl3sjKvx4udB0RnpEPrex3c/PCyY+2/3CwFy4zFPp+He3lwlDAyUl1V3lB+UD5zS8LP3enaT/3F+BZoV2hJ59FIlIi/ILT4sJEwBBg9me6aF7PZFmv2M2VbBgghYRVBiOQN8VyWtJKbs3XiD8gr+euk9Zh0+HpEf7exOAwFAWNDCOGeGNIwXgkUIEI3/vmVkPd5oMzH/cvDBys9E3dzS2DB9jw4n+U/ojjweKHqv/jxAVjxd9XJYgLEc4uJZ8VEFeS2E+yTtqXABE0CclsVD5X1zLNyHK0Er+ynzFa7ixgz0VLQmkJd4fPH0Dn9s5d6BO/sDe/LzF6fhNchUEr+aJm5yP5Kqsi+ebmeCMV+SLn5yL5qoREmjucHN54ptf9jXMINdXyIcAzZez582ucnT/6koiHHk4OerR5A3RX6odTrVK4UBMnkbqI3hDPa4sKFhFx1ZyEpOJlTXqFjASZtURsrkqhkHvxVf80dow+78U0MzDXVVU7aCIxDQi63+sPE1nECoXV0DE3V4cMI5pXEYI2sDU3rq/UgyVF/WE1jcpfba9IHIgND7kuHH+jSLslTLimnM3qD3Jyz0d7sm3dmpCz99HA9bHPNNYqR9rYyHgnVWuyHQIHhEilvSI5pZvA0ZiX6u8gRXrm6/CenU7y1Z9WNhRIzqBdYFp4zrWoV5pyY9LFxTukQhfqekrd6SEDwTtMDD4MOF/qoOwwc6AgWi13P4FDeYeoSKF5D4iRsEcmrhIJTyoKMf9tAy1JO+lpsNKsGgKn1mVbuBBX4trgpqGILbHJdalCMjQ+fbgjiwbL1WxWrn3KSY6OKF8eELcO3W+34Y/TmtB0aUjp9QOGwm2nX2DZvwqRFBpg/dOOYckNgdbDYY3kcLXXoRUTrueAIyK5N2LMw/n+8vrCKGYm5WlGQrYVg4cGQ6pktzmPpFHMw/L0Jjy4MZUZl8eZoRLm61v6Yfh4sFXMdah5pkoUU4GvYnr8DzChc7oHqjqTVc4N5HNKavi2QJ3LuCnmibXLuKeM4g3t6IKRsArL00dJWz9XwgDYTU5DTVdqUz05xNPUDO7YFuXTaBDHlqHKyepe8PanZiRNd0bU/tnV+9thII/EPyuYmoKyPWtVT1Z68Q/yqai7v7s3OW58GHqZUFXxsaqSsLA4t83HdeccH/t2IGR8EBinSCYmjg9CLm/zsJ87y8t1/cTiHKG68mN1BeEydHw4Ma63F+QgJ6Djg8mJAamEOA8o6Q3ArrwhQScGEwm9fbg/MRHp0CmgPiqwfqJK/ggnx3XTPPuTE8aHJCaAiIkAYhIyMbSU/HITNVi0oG6WtBASKijJD6D9o4Tk3hwjMTnWBt15wMZ57So71w31OsCtordZua5eDxl3Jc+FPLW7bz82eWhU4kFyOSUhvpQCCHhY6GoDg6r00boL2c6EuiCDsJ20DQGh1WVewcsvajKRZxANrn497xgkW6bP0vtUrw4AFX3oLUenh5kucYt27j1DD9Z1iAHhWk1+eZdb8MIKn9BGGm4n0IBQl+1cd2GUPqiqNgCYZdeUFhclJjbUiLPc5iS3VD47yLx11edY6MamKsynqAz40yQGhwmE/t7uXittWJKm/EVypsfp/aPitHWapHtWERKBGWSbW+xuRsjjzdSchOEgWQxSiMlzjDxwg1Cpd5K6/CgicSyhqTsnt6knIa6uJzenrhuowKCHw4m5DcTwwpbueYl1qoXJxOKbi5WTIgua2hfO3ixL48mFxdxnWfGfS/pdsmu+xdtacza4ZdYcx9pXH90z2YT/gAXkKgkFuUHSC7/9VESI7zyQIwIW0+V5B30wvwJYTJ8A4Xk4QDjx02HVYdknPpoU8r+W/9qRUjTgixhaGgL/iN+Om7tQrz7IQE0dV5BqHODen4qVfUMuWzEfPaWPtIubpJWvrSluXrlfqYuutzXM2gBb6OjUjrNNVHVRdUKl4a1DkkcS/+dvhjVut6xqThou1xOBPbGxUUZIFjCHObp7oJm2LDgpcJsBqAvU2karKS9L5Lwd5/raR6s5UFzrkZX/2OM8wZ2g/B+vhyzjNuaH5fO/j4zhN8PXKbw4dPEoDxjd+67tfUEM0leOdhBHD+dQeREkHq8fP0Qc76xoRyRbkdAimYfT/1o2KG11FCraGqWuTecKdDFQxbEkiZgnf1VlJN/8fJtAP7ytXXp4BGXhrf3E994dHT6fycOrbESb38K0WOvKL6jYiwg0xy2s4jp+5mbqa9/2KuJVpgaNo6He+rp41k5QLxi9gS04mvqmyGNmpNaZNpLGRSHjMlPQYMqbFGC/V0XYvLcwz1eWjO1VQS24dzCzL18ouu+enY6emaOHqdnoKmFjONUqIFjh+3rOj3akEib2spxqO5jPak2pShPEDfo3XLWpsHiAHzAe8O9VITYhFqYfYLMXEbD6Bzt0h+25iOgLW/gINIgVCXugLS1dW1yt2DW70boadXXl4Bypa1FNS3/KNJcWE2f3HIWYdhy05jk9Q+3U0+M/72AX946CQrc2Vzf3tsKC+ZhgCqLIFzVPtGl+jq+JN3Kuge/UzM5b1t96J4METW191UZVLX3NAk2tn5r2yQGO18Jr8wZKqChbK6s4Ktue/N7B76rZqtuMPdVXUCXDMrI8st1l/LhTqZIKlbcB1yE2pYK14glDrEiFwNgM1LMbFaLL2BxiKSreV1ZzPdtQS1VOWIPaGzZ/FayxptQ3cRXyY5NX34zfL8wLkgtUaP9wXGJ3b39vYmLvMOS7J0AvuX+TPJidmDygZ3fHJce9oFRg+cpddD8yAv0aZObETwKJDi/nHZb85g7UdHQyxj6SrmXr/jEbMHNmGjyC2bsrtegU4OwmD4DvjHTposMBop8+wwHlAeiCY5lULAACEmCUCrJptHTbAHLvP/FrMb4uKu/Lzqrsf1/aLV7abap4WLnWnW+vFRdmnibtwBYg0zAOtPVwDjaV/C5Q8f/04vJ7+tiSgd/yj92VztsSi+hxBZUBygfiwZzTjA113U0twm/PngwLV/y1ide3sQ7QU1NxveTBO52/6VxnIbHs3QB16GUdtPC7TFD5dU8txcsW8s7c0/mtuYoVfMyV8eaN/41HfIJe+PG/t/ybd9xX317kYptdU4zvUg1n8V7DPmFRwuObH+0TUBbJ71c0Y6IPsqYFztAoyK5ZYiRFCqflc+24WyvOUvwlBrO6X8uRrMEmhmGsSku8lYuTJfFbEFT5bFoKDVgyfarLbt+4aL2i8s2rRNr7c0o2gda+NhG4c9pV1/SueHTPDH+Q9vp3Q33BrS04iX8313D4voMr+OcrzUvhUjj6d3KZWz5I4vyzBlm3PaTZg3rwPljxvhml7jleSgX6zgIaj9WKWUVMzGc/KxH3sWJWrOSlbJOqot+bJDE7J1eHRgcnV7vwYVl+aTZpW9n2Svsv2j+UkxsadY9JBjJ5Vvrehf6WEJPXIRc6smwF+ALsvigHR1c7SgzuFLXJJG0rE2+1aRUvyy/NdM/hoe2d3G0u2Di7268GkZVfTfZS0VuQ9BVXgQrIuVdLt2Epcsd4om6x3Gk1PYWSSuB4bsSuYnkV+QIfWWQOlXTx9nQuHDd75KyT53nS2lhL2tNuCeEryPJc/YMBe+cgNad5UfeYpG1ljWUZXpS3eTXpR8xFKbel+4Q2fDm86v70la9yGHtMb72j5VyT1sSmK2UlHhEhYDv1t52WyGH0/TV9mkHnS8u4iIY2vlnIF662yo8dfC+H7ilKywWzbL1bI5XDHQhIpAUp8IygA7Gj/iD2SRlEb3IyK5gIjBc9dSpvbb/0TVqBTUw8ZhVzE6MtpHPhB0FnoZ/KXScncCko0JFiUNjUM5CFAfmQ9k/j0YaPd6INPo52tEuPf8Z2rvEu/jlTXnzuZ7P22wyyX0XJuR8/MRd8prmOb+f5KMbT010mNDBG0hvLiHBnf8ML+95WkIasUHB4QiDtTd2XmOJ72MSn1XbjSBMk4dHgI63RD29aEF9azRTWUFhiFSl+fdnRolYaPNCsiXdrS9BRm2/MbywIEvQbU+OrsFBS0E6INJFGEh0seJLKlIlnpfuqYkWswSKCySzx6IpHRgbNeOTs3FCrFLvWOYtl3G2ImAvnhGKfdRRGROaCBD0tUGJi7qV5xjlg4bVdksTeauW3ReZ+mgOoXkSIVGjjErFfslRkzkcqPbU+EBGXoKNEYGnIPKNKZnlsDuK8Mo5E5njEuUsuYrL15YgisBUSvAsblMUeq6Eo+JsClQMYgp85pEdl3NUXFDykTmUya0fa9zetKpOeQDbqkHKVb1pTUum/6Vg9nWNi9Juqld80MaRx9dSNdctvileOZO2cV/5N/xV2gjby9nW3iljvbtdwrX0mPVUuiBBxyHm+PxuvVVexIIQAUXcI5qfrbTUKdhKIknKtVsEaJUFAnYrcGVDwTwuw/IOwEhmkHypVihiVeqbpwYEBlI1pdIiVAij8T/cfkkPBe2U0XnT45T8B+Lok93LB367IUcu3+zhY1FhBCKPxar9uP8OAhXK4fuCVmjaTqjF7JJitNAtqbr9jO/lnwzxL2aWRNeDeVKT3bbvbIMZvcnXy6y35wcAkaBk0iTpDNtGfcmcLf7UCFpMsJYiDO7I+4DUzx9uOZmbNE6YmDL6JKzHZB4i0qXkKISzMp5g/5qQJbN2aGRwELO/2ZCZl4+DSan9yiXLXTczd3C0Bc7Wls8u50jVmbg6YWdKisS4gckwxd72+HitnNwulrnEz02y8hHPQVQVmXVgju35Xc1WJCNHcFZ+fg/fCW17Jtsj2Zv+cO7ARl+uVa3mJaEL0zz0cNwgQdz0FUP8Ssa/7sJ1Lie3rf+q02ggbJ/5thFylhdRUh2/pJj0ThX5Pa7xJPakm1Xm1YHAWsHLehyQ4kbVbv5KAXAAbV9U20ADMoMULRRVNB6oz2hrVbfn5IWl2wgZwhEmutXN0b4zzPGHqFXOHbaLRBNKnSSM/XlP3msVzZeUQZeUiFWU7PtCgOAtCsusIMZnVQXvJf9MBD8ih5Mf7ZZOrZNGW63bmZOey/r5qcmljCyli2dHIxFrP0dTc0lhByv6hULdDXr1sSN8KG1tCj4SsYFqm1fUDl661lOaikkksIaXUWyCcCC6t/eXIjIzF5eMibwR/2GFUg/dT+1LQd6WpRV65onOlZ8rWDVI+3zjw/9fmqa9f95c9pkCyelSK+zaMTaGjLc4ZPd+n4JMsRAj+AMoAfa5r8MRAV9uJezH3Ta7F3FFnRW6Kns3Erz03ttTVsrMUETDe0NURBD7OwHggoP933QbKebjVF4MK/4sJ+6Iq8ekKAzCHwnfab5SNnfe15LmK2EulSJlr9NQTbvhK++kTSOW19Q4CPhduk6cZsqbIkwxBjDNMRpLDKVpeU5+2BGd3+AJjwtyVHSDmBtIxDCqGxAJy3pmsLDKZxxLpBoX/pgI31YEpphXiTUeSwlsdT/q6KTtOeuZQ6UAhYyn2Yn5Rlak8tj5BwOfMfjAHnd3YZJLTCQo2LkQUAVy2XIaTjTwB+6HYs6h7jggSpIq5wwGebZpsFBXNay8udCFQWlwIxYcnoAjt72t/LYXr25TvXIYhH5Q7Q0z3M7i5I7rvyeIcem3UVvk5oX6Nqk+KxF1YM3SpzqtZC/XNqb2cGgfNVAFcJqh6qwUU1pe2Mg0hyzyyT381sti+2elEQxiEQdhGhHU6l/Xfwq+9uF9mT1wXziV60omCgv2sF3hBXpmknKOc+Sau+bOiLVx9Q+q692NBApWHVnvSyTQPlTyhUB35WLezOxFEu6lndtuHgoaUDBQwcL+d3sHHv3q9SoihO0MeDn9/dnz6ZJaBG4wpLD4xqi4qSYQNhMX9hLgKts//hhESouqjCCkET1F7bELY9WKbGhO0SY3NWcs9Y7TxnqV5xF+b7ljfbhux0Tr3CnT+7AIMUw6hKcU/Et13PPouqt8rCX3U8v8xWj3E5pBA8V/b6J1wKE13t1NiK38VEbNBktvY571aNpvRERsB9uXHeSHofjG8NKwdkUpGP9VEAivHwspGC76/HbaGJSjY5/i/S5loiqnUTvUCXKn178zu7WfQq5MUM/3y/YwqdeWQFsbDuX1kCXRJfoOdsp3TR0xNSbfKYVPXtmd5/NADmnCBLq6pRT+gdmVrea37r0q4Au0I9QcRPTCvdl5COrWqOm0yITF9srpqrpSQi126g/W+s8TpHctRSR9PTEgbV7kr3sucX12eXwbctRU6+y8PeSpBleV6rXJxtpdHu7ig0uPXkQta3t7FGaWZcsVf/qlCwBWeS0UKT+ViL50XvOGl5768v6mokTrkqAjUh3alBGQioOODiYm9/b29iTqS2lP1SJbaKvBfU1PHVNuFTgwmE7p7u/uToZLJCBkG6ddLoYZ2drPd1ZmkF4s4jQJfVSm4TARkYigxgZxr4l1YARevCji4O6EEZOKfQo8Mn4zwIkAvCUnzyXYpxg0B1FvdQTlOLwh/6XsK4mEYOthDQQmoyWfskuWTFloCXNubxCzAL5SeTwcsWC6LCx0MrbR017h8b/r53i69DTZq8pPHu3oyROSRF+/oj2zWPP4fRuWdYP797K3HmnoRXnbIsaL8++62AjDXNR/uL4tjgphWWW/3/yx61zNC+d7jV742tH14KZk3jGqz4O2G0LlTUlqU1Hq6Wq9v2wvt5Qx5bebwkJ5v5g4dp/7GWP8KbDN1H6DsfyV0vZw+zdhi9OsrDH2aoYALS4iytjB2nby2MLeM58YjaQaSzCSWJaGd11imEJY+yrJ8aGcbSwWz1GuS/sTSi1m2QSzzIcsaRzvdFtDdK32bvNv0nXttn1J9N4uo6UXUj+6LPktZJ1nwCkRCO7qWO4RmPLans1jHBO7rpZSVduq1VHWUb38b6dvUFI8NSnTVtQ9Q3NsI3Ev0SUoX98R9OGRqxv9Cq41rV1jaYjitfCPakbQpJKONsl5TVGgcqRHTS0naO7KIqt5E06elTqm83sHb/JpoLV0P0LZKJY1+kjuSok9KH4GyO566W/077CV1g6IhxIjhZsi4HZ69raYtBuR/Zd2c5KJwHUlUHUm95hu1WozadKLaxoiU79Yjua3ewzxwQgVu85kKnni29Oz3mGI6xOUgqn7rObKXXlQexgD4bQaztEVNypPq4BaIIgdjapZLXU3eWzdssPd/dyuligP0uvOSbx7aCrA8VzROQkUX4iZ0J2X0vDOHKvY7wE5UXeVaDZWhUweVV3ptR7ft3FwUD7EVPB4V31VNr97z+CDvQ+B6lrImhbeF2FAWj4vt2lMa0NMe5WJzvW7Jqobm3eetEqqOPGekLapzNeve5JA0RpeDB/UHt/uUG5R3VZSUHvTvpChLKw1Xv02JfgNYlRLkZSqKkqasAGBQ2pRXdImGJUXw16NuVa0jp8b7M93qceR+qlQU7Bb+BE9BpgLckXr1M/BpP7jlLyC3gh9t/d8Rthv+ImQ/yOWmwZyWI9TYbjIit0peGmti2NVl/GxQRxclvqkBUwHlrqdJrSJ7wJhvQf+BAHsA8DM+VtZbZG5ey5D79DmvKB8VjBlyhmHUjzn6J95elryqYFgs5h4eIDQPJY8xNrC2Udwydc7uJvEUY5hhw1HcGEBRBziPfuSmyfeRYxQO2j02j2A/p11baPpPqf239P7G0un0a4RBa7WZa6O89daoddeIgz5GrEYjth/ErdOZv5NyWy9ia/iC+6vYdohZD1n9ynaOVb42ql+KuWUR8y3djCef76XOCRTbJ8lzMf0ErlfDAdNHdsOeFSmhYWa/pg9sWOx1y04BK2xfBgUpvbx1tK7kG5fZ7Fkv5iti6D/PIiulzu0rV7KcMZZ6DjGfdyJNirT9mFsHXFxb5LRfsJ6zrMfq+yP9luw+gFsgb9pLniKok8SlR833vp6Wxn1qwn1BY2X9A9/eUQRM/SVDOGuPwmq6RU3vBdbaufc0m5vq3gGBKlCgRz1vTN/ucWj4wnc9hMc+rOYMxeOoYgWvbGWWaZfVDlk8y08KjYQFdnG9L5RGm2Yew6xRNuwgZgwirD7po8xaZ8vIS4yFtV72yOVq7zPnYjEf/v8IM0xeNyraQhXJrn3qLYVcAOkS8dbQaravN3jZu8dQ0KqqjRS2Sk5FUcuHWi3d5qif9bR9XBSl9h2Hzc2Uiz5J7+eSp6MTqFZksYXymFVYKdXsKxeUxd2u/zrGtoP2UBttv9hmHzTNulen0Wb1zZ6tvKYa1BVJJ5d4f2rs13Sl6K3px/rWBlq3gC/LdYS79U9g3oN/gUC9bR0eUCAI2AgAc8ULAbCYmDcfVAFfiDl8E+ge39GI+aF7AodPwSYpawjMUNF80Lt68gVxbpBWt7t6B595GKR3A+KSgSdYOTxFFfMMrVKexYbnBRxiO5zjklFrIMB85c8TBOVvnsIxhwhTt7h2FjYxSWTyojIpZxjnIXIhhW3oCbt9B1LefcM/DAU5BWWDLj4dFS/KXAwWGoThHdLC6GQxUN7mCZHxRWRAWk46KBErrVTOIStnGcHjUx+lADnYnOeJFbOfJTkqIZBnmbmgKq0iLZsGzmypFOaONJQyOV+daXLDHlpZs02FeGuhmq6khWsrlL54JGIFz4wZ8qLgrwB47wtfyeS4EYIp6w0zNVEfLuvMTA4GbCdHGhTmKzHDd6AiW1Tcmw3samYlXGNbmYmOymaQww8mXWXO3G4YTXk8T8l5ObKcjehz4ZZBgJWlZ9mZKcsdFeR9aEi5pLd7sveY9uTWDEIXk8EkTVaNLP8Fs0ronlOBX1iDH7zMVKD8fNMmYRZK1tufwr9DhxIGDJbcz75hsYNu7kMeUe2JSiv+/rzJXrURYIl7zKrCESssD49FTniUbthsn48+aLfdT845o57BNKukuuA7Z513WauLLnnK6LorrtovzRur3XLDTemee2mxTBmmy5bFZKscM82QK0+BfIWKPFNslhKzzTVHo23KlJpnvhdeafoIDWMd1+tfnYKdg7MfQ+XmQfhoDBaHJxBJfPwCHX1xKSQsIiomLiEpJS0jK9fVbaigqKSsoqpGVtfQ1CrK/lhEj6JPP2GgvQ0bET56xozHlnaZNGXajFlz5u/T98dfr7zOgSMnWvKOG8G1z3xeMLz58IXlx1+AQEGCmypEKBx8h94UJlyESFGie+y5XXueOrBjvxtixIoTjyBBIimizE0pUqkRrZ+IJANZZjVlyZazGZevgAzfN4lyFSpVqVajVp16DYSPDYJHZOxz77wRoxakmUXWbbE27c24hVaHTl269ejVp9+AQUOGjRg1ZtyESVRTaKbNlNstdLfNmjNvgRbd9w0rVq1Zt+Guezbdt2XbAw898phucl+VwvfMd1Wr8p9WxWq1K1CqrPc++OgTHeVkk5uPQbfH6zM5AFGSFVXTjfCmmJb99R8YhPRu3sXNw4vGYCnohQTiEX38AoISCX/JRsXEJSSlpGn5CQneLcONCp6QNpyQcNx6PABEmGRT1GYeFTugbZeKJS+WEaoDSnZurSFod3O9wWgyW+jupdKkv0qT6DiDcWkWK1GqjJozJcYXJc2Ha900DlHE+3Njxk2YRDWFZtqMW+g+f7qfc/yci0+Wxt4RBFjS2yQYvVHba6TtmT0MT2CGWmu3B7h0NxsJz34tgTeuVhfa2bGiBWe1qnCerixYGhQz8mJLLC9hSVheaf1fDjm+gYbx2iDhhmoVXko7ufdBBCEHX1lJ/+vVtUB5J7dudxqtPkEi61uevxXMuU8WbhBVwVXehdvSCy0Cb5PYreziuXWQS7yf5m4/cp5fvasw5/sGE5t15IuAI7+gAZi/EfAAIjUE4TLExzTWuhvfYhNW8JQtHyfRxZqRN0y8Vn1QMPDn4uuJS3keO3mSxJ5Fj/IlkGcjz+vPbnrv/v0ijUJMTV16Knhr1CgH34hRFbyHlPp/vfp+BJbUycg65iY/8HOWR4tdwz/qrUcSyDFBPJZWAnM8bgZXRrvm8b+rIpB80XGyg5cqHr+b89HXp06+lcsrq905U9So/fZaojghbITFohKSPezfZ5ZnpNAzJGS0KVdYmI3oNc42pt3+IhDFwnAKQUpnke7xghOjpMHPSoxUEgQlViMkGb5xPJBAtEADR978daOC3UPz+0iZ3Y/lb/Zo5uXsl3c7X6Sqw5PNxfESfnOX/w9FRMGlYliAEIygGE6hEpIWocKGAcQmqMHQIzkAQTE8NICnAgAhGEExnPJ0vQo9hQWlT/tAygC9GYcR/YxsqppEj6QAEIIRFMMp1HsxlTEpNHHPrSkN0TsLump727KmLMWwCkWClG+VOoVcyR3XhyU7HKVJZb2h0vqYQg2IflGwiBjLaSorzh+reFQqdTMsCZsAQjCGE5KxSzoadcLA4pEms9omODzkxLDR2MCJGFggBCMohkvpGeJ4HMsMOB5t5D5wQwMbXTrxd83uiEZ/M+J45t4iSDp6M/QmyGgRWjHyjyAcDr+24qsVHF8uAS/f2sLld2UOfYA7DNjChs1d32q+6yvoGzwbPYBQL05R3KXh23B5Bv2+p6bHFC43+P84NW4xncptt3AzzpuvXgxmSltF/7O4mo+wKtKeRhWj6TUUZ+z10CDBLZrIfpmZ5dV85JSjJ8XtrbLKjfAsXYA2P6dpVSlbwGbajXkuWjhyuFo4TrNKxVsiv7q0LbsIV/68zaUw71X59WXD5jnGZ9/PIGNaHjWNLEsDQC4XjFFIFgwCJB3T3t527K03IHYWlrvsV6U3c3HwLqfxS3JoOBFCM1GUp0bjZnGUIfGARIkqkS8OkzYRZrInSqUjcSzadAtfvW5T8KozAYu2LVH+0IXgc/FDcZc8IAgdAkHeUIKLGlBOpeSbmRiW+qc9coGyIpCZZVkSOyCCstC0wWqVbY0pFfUYVD3f7wTQHgAHpsBBAEBZBODgEQhlQ9M02rp3srA5pxUvYzSOoIlKTVvxlCFQdXmtrIU6M23TVHXnxpybFR2q0n0oGtxUtrZLDQrx9VX8xWL2MQ1TqQ/dLnEbObO+tMox40BUNWblCpOi7bKmbV0AFHbZirNFCzOtBwGZTd32dTB53RcxFFjyCLV2PEsIu915+ZmaNkSyxlHXLzOkKfTNxHHI38JVhtawdFurteI9E7eSVO9nK4gSUgx3msEz1qCOpAhB0ZjbF6w5z7RVvThX0nYhtKQon2eZu1hmrcOB8RrPzrLotXhZc9RU2dTMaVVWSycJnKNhUUqOPNeC2PX6ployg2P53yvWtdRW18JNkgT08wtzVXM2OBXqyg9VnhwPGOw07JshDKrapPfl/JZ9U1UQv8muyogzfjq3zcXfBk5dUaandemo1Lpu+gfxRS0quGhm0MTixgxyGUTXdZZIb8fSeJ5iIbyL6xxlDU1z1Ondoq5WK/TiBmGFViZDOT9TXHjq9J/1n/df9F/2X2XX2eLqMYT6Bda7m7tPU7tesjePu86yzG/3v77fxWK6k+sviyhq2vJhA9bGk3/X5eN/AAAA")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;
//# sourceMappingURL=fontFaceCSS.js.map
;// ./node_modules/@base-org/account/dist/ui/assets/injectFontStyle.js

const FONT_NAME = 'BaseSans-Regular';
function injectFontStyle() {
    const existing = document.head.querySelector(`style[base-sdk-font="${FONT_NAME}"]`);
    if (existing)
        return;
    const style = document.createElement('style');
    style.setAttribute('base-sdk-font', FONT_NAME);
    style.textContent = FONT_FACE_CSS;
    document.head.appendChild(style);
}
//# sourceMappingURL=injectFontStyle.js.map
// EXTERNAL MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module = __webpack_require__(950172);
;// ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
/* unused harmony import specifier */ var e;
/* unused harmony import specifier */ var r;
var t=/["&<]/;function n(r){if(0===r.length||!1===t.test(r))return r;for(var e=0,n=0,o="",f="";n<r.length;n++){switch(r.charCodeAt(n)){case 34:f="&quot;";break;case 38:f="&amp;";break;case 60:f="&lt;";break;default:continue}n!==e&&(o+=r.slice(e,n)),o+=f,e=n+1}return n!==e&&(o+=r.slice(e,n)),o}var o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,f=0,i=Array.isArray;function u(e,t,n,o,i,u){t||(t={});var a,c,l=t;"ref"in t&&(a=t.ref,delete t.ref);var p={type:e,props:l,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===l[c]&&(l[c]=a[c]);return preact_module/* options */.fF.vnode&&preact_module/* options */.fF.vnode(p),p}function a(r){var t=u(e,{tpl:r,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var c={},l=/[A-Z]/g;function p(e,t){if(r.attr){var f=r.attr(e,t);if("string"==typeof f)return f}if("ref"===e||"key"===e)return"";if("style"===e&&"object"==typeof t){var i="";for(var u in t){var a=t[u];if(null!=a&&""!==a){var p="-"==u[0]?u:c[u]||(c[u]=u.replace(l,"-$&").toLowerCase()),_=";";"number"!=typeof a||p.startsWith("--")||o.test(p)||(_="px;"),i=i+p+":"+a+_}}return e+'="'+i+'"'}return null==t||!1===t||"function"==typeof t||"object"==typeof t?"":!0===t?e:e+'="'+n(t)+'"'}function _(r){if(null==r||"boolean"==typeof r||"function"==typeof r)return null;if("object"==typeof r){if(void 0===r.constructor)return r;if(i(r)){for(var e=0;e<r.length;e++)r[e]=_(r[e]);return r}}return n(""+r)}
//# sourceMappingURL=jsxRuntime.module.js.map

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
;// ./node_modules/@base-org/account/dist/core/username/getDisplayableUsername.js
async function getDisplayableUsername(address) {
    return truncateAddress(address);
}
function truncateAddress(address, length = 4) {
    return `${address.slice(0, 2 + length)}...${address.slice(-length)}`;
}
//# sourceMappingURL=getDisplayableUsername.js.map
;// ./node_modules/@base-org/account/dist/ui/assets/colors.js
const WHITE = '#FFF';
const BLACK = '#000';
const BRAND_BLUE = '#0000FF';
const LIGHT_MODE_BOARDER = '#1E2025';
const DARK_MODE_BOARDER = '#282B31';
// Button hover and active colors
const BUTTON_HOVER_LIGHT_SOLID = '#2A2A2A';
const BUTTON_HOVER_DARK_SOLID = '#F5F5F5';
const BUTTON_HOVER_LIGHT_TRANSPARENT = 'rgba(0, 0, 0, 0.02)';
const BUTTON_HOVER_DARK_TRANSPARENT = 'rgba(255, 255, 255, 0.05)';
const BUTTON_ACTIVE_LIGHT_SOLID = '#3A3A3A';
const BUTTON_ACTIVE_DARK_SOLID = '#EEEEEE';
const BUTTON_ACTIVE_LIGHT_TRANSPARENT = 'rgba(0, 0, 0, 0.04)';
const BUTTON_ACTIVE_DARK_TRANSPARENT = 'rgba(255, 255, 255, 0.08)';
const BUTTON_HOVER_BORDER_LIGHT = '#1A1A1A';
const BUTTON_HOVER_BORDER_DARK = '#FFFFFF';
const BUTTON_ACTIVE_BORDER_LIGHT = '#2A2A2A';
const BUTTON_ACTIVE_BORDER_DARK = '#FFFFFF';
//# sourceMappingURL=colors.js.map
;// ./node_modules/@base-org/account/dist/ui/assets/BaseLogo.js


const BaseLogo = ({ fill }) => {
    const fillColor = fill === 'blue' ? BRAND_BLUE : WHITE;
    return (u("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: u("path", { d: "M0 2.014C0 1.58105 0 1.36457 0.0815779 1.19805C0.159686 1.03861 0.288611 0.909686 0.448049 0.831578C0.61457 0.75 0.831047 0.75 1.264 0.75H14.736C15.169 0.75 15.3854 0.75 15.552 0.831578C15.7114 0.909686 15.8403 1.03861 15.9184 1.19805C16 1.36457 16 1.58105 16 2.014V15.486C16 15.919 16 16.1354 15.9184 16.302C15.8403 16.4614 15.7114 16.5903 15.552 16.6684C15.3854 16.75 15.169 16.75 14.736 16.75H1.264C0.831047 16.75 0.61457 16.75 0.448049 16.6684C0.288611 16.5903 0.159686 16.4614 0.0815779 16.302C0 16.1354 0 15.919 0 15.486V2.014Z", fill: fillColor }) }));
};
//# sourceMappingURL=BaseLogo.js.map
// EXTERNAL MODULE: ./node_modules/preact/hooks/dist/hooks.module.js
var hooks_module = __webpack_require__(45994);
;// ./node_modules/@base-org/account/dist/ui/Dialog/Dialog-css.js
/* harmony default export */ const Dialog_css = ((() => `.-base-acc-sdk-css-reset{-webkit-font-smoothing:antialiased;pointer-events:auto !important}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-container *{user-select:none;box-sizing:border-box}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:20px}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-backdrop{align-items:flex-end;justify-content:stretch;padding:0}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog{position:relative;z-index:2147483648}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog{width:100%}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance{background:#fff;border-radius:12px;box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);width:380px;max-height:90vh;overflow:hidden;transform:scale(0.95);opacity:0;transition:all .2s ease-in-out}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance{touch-action:pan-y;user-select:none}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-hidden{transform:scale(0.9);opacity:0}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-hidden{transform:translateY(100%)}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance:not(.-base-acc-sdk-dialog-instance-hidden){transform:scale(1);opacity:1}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance:not(.-base-acc-sdk-dialog-instance-hidden){transform:translateY(0)}}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance{width:100%;max-width:100%;border-radius:20px 20px 0 0;box-shadow:0 -10px 25px rgba(0,0,0,.15);max-height:80vh;transform:translateY(0)}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-hidden{transform:translateY(100%);opacity:1}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance:not(.-base-acc-sdk-dialog-instance-hidden){transform:translateY(0);opacity:1}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px 0 20px}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header{padding:16px 20px 12px 20px}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-icon-and-title{display:flex;align-items:center;gap:8px}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-icon-and-title-title{font-family:"BaseSans-Regular",sans-serif;font-size:14px;font-weight:400;color:#5b616e}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-cblogo{width:32px;height:32px}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-close{display:flex;align-items:center;justify-content:center;width:32px;height:32px;cursor:pointer;border-radius:6px;transition:background-color .2s}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-close:hover{background-color:#f5f7f8}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-close-icon{width:14px;height:14px}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-close-icon{display:none}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-content{padding:20px 20px 16px 20px;font-family:"BaseSans-Regular",sans-serif}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-content{padding:8px 20px 12px 20px}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-content-title{font-size:20px;font-weight:600;line-height:28px;color:#0a0b0d;margin-bottom:10px}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-content-message{font-size:16px;font-weight:400;line-height:24px;color:#5b616e;margin-bottom:0}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-actions{display:flex;padding:16px 20px 20px 20px;flex-direction:column}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-actions{padding:16px 20px calc(20px + env(safe-area-inset-bottom)) 20px;gap:6px}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button{font-family:"BaseSans-Regular",sans-serif;font-size:16px;font-weight:500;line-height:24px;border:none;border-radius:12px;padding:16px 24px;cursor:pointer;transition:all .2s ease-in-out;width:100%;margin:4px 0}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button:disabled{opacity:.5;cursor:not-allowed}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-primary{background-color:#0a0b0d;color:#fff}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-primary:hover:not(:disabled){background-color:#1c1e20}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-primary:active:not(:disabled){background-color:#2a2d31}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-secondary{background-color:#eef0f3;color:#0a0b0d}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-secondary:hover:not(:disabled){background-color:#e1e4e8}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-secondary:active:not(:disabled){background-color:#d4d8dd}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-handle-bar{position:absolute;top:-16px;left:50%;transform:translateX(-50%);width:64px;height:4px;background-color:#d1d5db;border-radius:2px;opacity:0;animation:handleBarFadeIn .2s ease-in-out .2s forwards}@keyframes handleBarFadeIn{from{opacity:0}to{opacity:1}}`)());
//# sourceMappingURL=Dialog-css.js.map
;// ./node_modules/@base-org/account/dist/ui/Dialog/Dialog.js


// Copyright (c) 2018-2025 Coinbase, Inc. <https://www.coinbase.com/>







const closeIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzIDFMMSAxM20wLTEyTDEzIDEzIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+`;
// Helper function to detect phone portrait mode
function isPhonePortrait() {
    return window.innerWidth <= 600 && window.innerHeight > window.innerWidth;
}
// Handle bar component for mobile bottom sheet
const DialogHandleBar = () => {
    const [showHandleBar, setShowHandleBar] = (0,hooks_module/* useState */.J0)(false);
    (0,hooks_module/* useEffect */.vJ)(() => {
        // Only show handle bar on phone portrait mode
        const checkOrientation = () => {
            setShowHandleBar(isPhonePortrait());
        };
        // Initial check
        checkOrientation();
        // Listen for orientation/resize changes
        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);
        return () => {
            window.removeEventListener('resize', checkOrientation);
            window.removeEventListener('orientationchange', checkOrientation);
        };
    }, []);
    if (!showHandleBar) {
        return null;
    }
    return u("div", { class: "-base-acc-sdk-dialog-handle-bar" });
};
class Dialog {
    items = new Map();
    nextItemKey = 0;
    root = null;
    constructor() { }
    attach(el) {
        this.root = document.createElement('div');
        this.root.className = '-base-acc-sdk-dialog-root';
        el.appendChild(this.root);
        this.render();
    }
    presentItem(itemProps) {
        const key = this.nextItemKey++;
        this.items.set(key, itemProps);
        this.render();
    }
    clear() {
        this.items.clear();
        if (this.root) {
            (0,preact_module/* render */.XX)(null, this.root);
        }
    }
    render() {
        if (this.root) {
            (0,preact_module/* render */.XX)(u("div", { children: u(DialogContainer, { children: Array.from(this.items.entries()).map(([key, itemProps]) => ((0,preact_module/* createElement */.n)(DialogInstance, { ...itemProps, key: key, handleClose: () => {
                            this.clear();
                            itemProps.onClose?.();
                        } }))) }) }), this.root);
        }
    }
}
const DialogContainer = (props) => {
    const [dragY, setDragY] = (0,hooks_module/* useState */.J0)(0);
    const [isDragging, setIsDragging] = (0,hooks_module/* useState */.J0)(false);
    const [startY, setStartY] = (0,hooks_module/* useState */.J0)(0);
    // Touch event handlers for drag-to-dismiss (entire dialog area)
    const handleTouchStart = (e) => {
        // Only enable drag on mobile portrait mode
        if (!isPhonePortrait())
            return;
        const touch = e.touches[0];
        setStartY(touch.clientY);
        setIsDragging(true);
    };
    const handleTouchMove = (e) => {
        if (!isDragging)
            return;
        const touch = e.touches[0];
        const deltaY = touch.clientY - startY;
        // Only allow dragging down (positive deltaY)
        if (deltaY > 0) {
            setDragY(deltaY);
            e.preventDefault(); // Prevent scrolling
        }
    };
    const handleTouchEnd = () => {
        if (!isDragging)
            return;
        setIsDragging(false);
        // Dismiss if dragged down more than 100px
        if (dragY > 100) {
            // Find the dialog instance and trigger its close handler
            const closeButton = document.querySelector('.-base-acc-sdk-dialog-instance-header-close');
            if (closeButton) {
                closeButton.click();
            }
        }
        else {
            // Animate back to original position
            setDragY(0);
        }
    };
    return (u("div", { class: (0,clsx_m/* clsx */.$)('-base-acc-sdk-dialog-container'), children: [u("style", { children: Dialog_css }), u("div", { class: "-base-acc-sdk-dialog-backdrop", onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, children: u("div", { class: "-base-acc-sdk-dialog", style: {
                        transform: `translateY(${dragY}px)`,
                        transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                    }, children: [u(DialogHandleBar, {}), props.children] }) })] }));
};
const DialogInstance = ({ title, message, actionItems, handleClose, }) => {
    const [hidden, setHidden] = (0,hooks_module/* useState */.J0)(true);
    const [isLoadingUsername, setIsLoadingUsername] = (0,hooks_module/* useState */.J0)(true);
    const [username, setUsername] = (0,hooks_module/* useState */.J0)(null);
    (0,hooks_module/* useEffect */.vJ)(() => {
        const timer = window.setTimeout(() => {
            setHidden(false);
        }, 1);
        return () => {
            window.clearTimeout(timer);
        };
    }, []);
    (0,hooks_module/* useEffect */.vJ)(() => {
        const fetchEnsName = async () => {
            const address = store.account.get().accounts?.[0];
            if (address) {
                const username = await getDisplayableUsername(address);
                setUsername(username);
            }
            setIsLoadingUsername(false);
        };
        fetchEnsName();
    }, []);
    const headerTitle = (0,hooks_module/* useMemo */.Kr)(() => {
        return username ? `Signed in as ${username}` : 'Base Account';
    }, [username]);
    const shouldShowHeaderTitle = !isLoadingUsername;
    return (u("div", { class: (0,clsx_m/* clsx */.$)('-base-acc-sdk-dialog-instance', hidden && '-base-acc-sdk-dialog-instance-hidden'), children: [u("div", { class: "-base-acc-sdk-dialog-instance-header", children: [u("div", { class: "-base-acc-sdk-dialog-instance-header-icon-and-title", children: [u(BaseLogo, { fill: "blue" }), shouldShowHeaderTitle && (u("div", { class: "-base-acc-sdk-dialog-instance-header-icon-and-title-title", children: headerTitle }))] }), u("div", { class: "-base-acc-sdk-dialog-instance-header-close", onClick: handleClose, children: u("img", { src: closeIcon, class: "-base-acc-sdk-dialog-instance-header-close-icon" }) })] }), u("div", { class: "-base-acc-sdk-dialog-instance-content", children: [u("div", { class: "-base-acc-sdk-dialog-instance-content-title", children: title }), u("div", { class: "-base-acc-sdk-dialog-instance-content-message", children: message })] }), actionItems && actionItems.length > 0 && (u("div", { class: "-base-acc-sdk-dialog-instance-actions", children: actionItems.map((action, i) => (u("button", { class: (0,clsx_m/* clsx */.$)('-base-acc-sdk-dialog-instance-button', action.variant === 'primary' && '-base-acc-sdk-dialog-instance-button-primary', action.variant === 'secondary' && '-base-acc-sdk-dialog-instance-button-secondary'), onClick: action.onClick, children: action.text }, i))) }))] }));
};
//# sourceMappingURL=Dialog.js.map
;// ./node_modules/@base-org/account/dist/ui/Dialog/index.js


let dialog = null;
function initDialog() {
    if (!dialog) {
        const root = document.createElement('div');
        root.className = '-base-acc-sdk-css-reset';
        document.body.appendChild(root);
        dialog = new Dialog();
        dialog.attach(root);
    }
    injectFontStyle();
    return dialog;
}
//# sourceMappingURL=index.js.map
;// ./node_modules/@base-org/account/dist/util/web.js






const POPUP_WIDTH = 420;
const POPUP_HEIGHT = 700;
const POPUP_BLOCKED_TITLE = '{app} wants to continue in Base Account';
const POPUP_BLOCKED_MESSAGE = 'This action requires your permission to open a new window.';
function openPopup(url) {
    const left = (window.innerWidth - POPUP_WIDTH) / 2 + window.screenX;
    const top = (window.innerHeight - POPUP_HEIGHT) / 2 + window.screenY;
    appendAppInfoQueryParams(url);
    function tryOpenPopup() {
        const popupId = `wallet_${crypto.randomUUID()}`;
        const popup = window.open(url, popupId, `width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`);
        popup?.focus();
        if (!popup) {
            return null;
        }
        return popup;
    }
    const popup = tryOpenPopup();
    // If the popup was blocked, show a snackbar with a retry button
    if (!popup) {
        return openPopupWithDialog(tryOpenPopup);
    }
    return Promise.resolve(popup);
}
function closePopup(popup) {
    if (popup && !popup.closed) {
        popup.close();
    }
}
function appendAppInfoQueryParams(url) {
    const params = {
        sdkName: PACKAGE_NAME,
        sdkVersion: PACKAGE_VERSION,
        origin: window.location.origin,
        coop: getCrossOriginOpenerPolicy(),
    };
    for (const [key, value] of Object.entries(params)) {
        if (!url.searchParams.has(key)) {
            url.searchParams.append(key, value.toString());
        }
    }
}
function openPopupWithDialog(tryOpenPopup) {
    const dappName = store.config.get().metadata?.appName ?? 'App';
    const dialog = initDialog();
    return new Promise((resolve, reject) => {
        logDialogShown({ dialogContext: 'popup_blocked' });
        dialog.presentItem({
            title: POPUP_BLOCKED_TITLE.replace('{app}', dappName),
            message: POPUP_BLOCKED_MESSAGE,
            onClose: () => {
                logDialogActionClicked({
                    dialogContext: 'popup_blocked',
                    dialogAction: 'cancel',
                });
                reject(standardErrors.rpc.internal('Popup window was blocked'));
            },
            actionItems: [
                {
                    text: 'Try again',
                    variant: 'primary',
                    onClick: () => {
                        logDialogActionClicked({
                            dialogContext: 'popup_blocked',
                            dialogAction: 'confirm',
                        });
                        const popup = tryOpenPopup();
                        if (popup) {
                            resolve(popup);
                        }
                        else {
                            reject(standardErrors.rpc.internal('Popup window was blocked'));
                        }
                        dialog.clear();
                    },
                },
                {
                    text: 'Cancel',
                    variant: 'secondary',
                    onClick: () => {
                        logDialogActionClicked({
                            dialogContext: 'popup_blocked',
                            dialogAction: 'cancel',
                        });
                        reject(standardErrors.rpc.internal('Popup window was blocked'));
                        dialog.clear();
                    },
                },
            ],
        });
    });
}
//# sourceMappingURL=web.js.map
;// ./node_modules/@base-org/account/dist/core/communicator/Communicator.js




/**
 * Communicates with a popup window for specific Base Account environment
 * to send and receive messages.
 *
 * This class is responsible for opening a popup window, posting messages to it,
 * and listening for responses.
 *
 * It also handles cleanup of event listeners and the popup window itself when necessary.
 */
class Communicator {
    metadata;
    preference;
    url;
    popup = null;
    listeners = new Map();
    constructor({ url = CB_KEYS_URL, metadata, preference }) {
        this.url = new URL(url);
        this.metadata = metadata;
        this.preference = preference;
    }
    /**
     * Posts a message to the popup window
     */
    postMessage = async (message) => {
        const popup = await this.waitForPopupLoaded();
        popup.postMessage(message, this.url.origin);
    };
    /**
     * Posts a request to the popup window and waits for a response
     */
    postRequestAndWaitForResponse = async (request) => {
        const responsePromise = this.onMessage(({ requestId }) => requestId === request.id);
        this.postMessage(request);
        return await responsePromise;
    };
    /**
     * Listens for messages from the popup window that match a given predicate.
     */
    onMessage = async (predicate) => {
        return new Promise((resolve, reject) => {
            const listener = (event) => {
                if (event.origin !== this.url.origin)
                    return; // origin validation
                const message = event.data;
                if (predicate(message)) {
                    resolve(message);
                    window.removeEventListener('message', listener);
                    this.listeners.delete(listener);
                }
            };
            window.addEventListener('message', listener);
            this.listeners.set(listener, { reject });
        });
    };
    /**
     * Closes the popup, rejects all requests and clears the listeners
     */
    disconnect = () => {
        // Note: keys popup handles closing itself. this is a fallback.
        closePopup(this.popup);
        this.popup = null;
        this.listeners.forEach(({ reject }, listener) => {
            reject(standardErrors.provider.userRejectedRequest('Request rejected'));
            window.removeEventListener('message', listener);
        });
        this.listeners.clear();
    };
    /**
     * Waits for the popup window to fully load and then sends a version message.
     */
    waitForPopupLoaded = async () => {
        if (this.popup && !this.popup.closed) {
            // In case the user un-focused the popup between requests, focus it again
            this.popup.focus();
            return this.popup;
        }
        logPopupSetupStarted();
        this.popup = await openPopup(this.url);
        this.onMessage(({ event }) => event === 'PopupUnload')
            .then(() => {
            this.disconnect();
            logPopupUnloadReceived();
        })
            .catch(() => { });
        return this.onMessage(({ event }) => event === 'PopupLoaded')
            .then((message) => {
            this.postMessage({
                requestId: message.id,
                data: {
                    version: PACKAGE_VERSION,
                    sdkName: PACKAGE_NAME,
                    metadata: this.metadata,
                    preference: this.preference,
                    location: window.location.toString(),
                },
            });
        })
            .then(() => {
            if (!this.popup)
                throw standardErrors.rpc.internal();
            logPopupSetupCompleted();
            return this.popup;
        });
    };
}
//# sourceMappingURL=Communicator.js.map
;// ./node_modules/@base-org/account/dist/core/error/serialize.js



/**
 * Serializes an error to a format that is compatible with the Ethereum JSON RPC error format.
 * See https://docs.cloud.coinbase.com/wallet-sdk/docs/errors
 * for more information.
 */
function serializeError(error) {
    const serialized = serialize(getErrorObject(error), {
        shouldIncludeStack: true,
    });
    const docUrl = new URL('https://docs.cloud.coinbase.com/wallet-sdk/docs/errors');
    docUrl.searchParams.set('version', PACKAGE_VERSION);
    docUrl.searchParams.set('code', serialized.code.toString());
    docUrl.searchParams.set('message', serialized.message);
    return {
        ...serialized,
        docUrl: docUrl.href,
    };
}
function isErrorResponse(response) {
    return response.errorMessage !== undefined;
}
/**
 * Converts an error to a serializable object.
 */
function getErrorObject(error) {
    if (typeof error === 'string') {
        return {
            message: error,
            code: standardErrorCodes.rpc.internal,
        };
    }
    if (isErrorResponse(error)) {
        const message = error.errorMessage;
        const code = error.errorCode ??
            (message.match(/(denied|rejected)/i)
                ? standardErrorCodes.provider.userRejectedRequest
                : undefined);
        return {
            ...error,
            message,
            code,
            data: { method: error.method },
        };
    }
    return error;
}
//# sourceMappingURL=serialize.js.map
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.mjs
var eventemitter3 = __webpack_require__(974486);
;// ./node_modules/@base-org/account/dist/core/provider/interface.js

class ProviderEventEmitter extends eventemitter3/* EventEmitter */.b {
}
//# sourceMappingURL=interface.js.map
;// ./node_modules/@base-org/account/dist/core/telemetry/events/provider.js

const logRequestStarted = ({ method, correlationId, }) => {
    logEvent('provider.request.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        signerType: 'base-account',
        correlationId,
    }, AnalyticsEventImportance.high);
};
const logRequestError = ({ method, correlationId, errorMessage, }) => {
    logEvent('provider.request.error', {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        method,
        signerType: 'base-account',
        correlationId,
        errorMessage,
    }, AnalyticsEventImportance.high);
};
const logRequestResponded = ({ method, correlationId, }) => {
    logEvent('provider.request.responded', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        signerType: 'base-account',
        correlationId,
    }, AnalyticsEventImportance.high);
};
//# sourceMappingURL=provider.js.map
;// ./node_modules/@base-org/account/dist/core/telemetry/utils.js
// biome-ignore lint/suspicious/noExplicitAny: this is used in a catch block
const parseErrorMessageFromAny = (errorOrAny) => {
    return 'message' in errorOrAny && typeof errorOrAny.message === 'string'
        ? errorOrAny.message
        : '';
};
//# sourceMappingURL=utils.js.map
;// ./node_modules/@base-org/account/dist/core/type/index.js
function OpaqueType() {
    return (value) => value;
}
const HexString = OpaqueType();
const BigIntString = OpaqueType();
function IntNumber(num) {
    return Math.floor(num);
}
const RegExpString = OpaqueType();
//# sourceMappingURL=index.js.map
;// ./node_modules/@base-org/account/dist/core/type/util.js
/* unused harmony import specifier */ var util_standardErrors;
/* unused harmony import specifier */ var util_HexString;
/* unused harmony import specifier */ var util_BigIntString;
/* unused harmony import specifier */ var util_IntNumber;
/* unused harmony import specifier */ var util_RegExpString;
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>


const INT_STRING_REGEX = /^[0-9]*$/;
const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
/**
 * @param length number of bytes
 */
function randomBytesHex(length) {
    return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
function uint8ArrayToHex(value) {
    return [...value].map((b) => b.toString(16).padStart(2, '0')).join('');
}
function hexStringToUint8Array(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16)));
}
function hexStringFromBuffer(buf, includePrefix = false) {
    const hex = buf.toString('hex');
    return util_HexString(includePrefix ? `0x${hex}` : hex);
}
function encodeToHexString(str) {
    return hexStringFromBuffer(ensureBuffer(str), true);
}
function bigIntStringFromBigInt(bi) {
    return util_BigIntString(bi.toString(10));
}
function intNumberFromHexString(hex) {
    return util_IntNumber(Number(BigInt(ensureEvenLengthHexString(hex, true))));
}
function hexStringFromNumber(num) {
    return HexString(`0x${BigInt(num).toString(16)}`);
}
function has0xPrefix(str) {
    return str.startsWith('0x') || str.startsWith('0X');
}
function strip0x(hex) {
    if (has0xPrefix(hex)) {
        return hex.slice(2);
    }
    return hex;
}
function prepend0x(hex) {
    if (has0xPrefix(hex)) {
        return `0x${hex.slice(2)}`;
    }
    return `0x${hex}`;
}
function isHexString(hex) {
    if (typeof hex !== 'string') {
        return false;
    }
    const s = strip0x(hex).toLowerCase();
    return HEXADECIMAL_STRING_REGEX.test(s);
}
function ensureHexString(hex, includePrefix = false) {
    if (typeof hex === 'string') {
        const s = strip0x(hex).toLowerCase();
        if (HEXADECIMAL_STRING_REGEX.test(s)) {
            return HexString(includePrefix ? `0x${s}` : s);
        }
    }
    throw standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
}
function ensureEvenLengthHexString(hex, includePrefix = false) {
    let h = ensureHexString(hex, false);
    if (h.length % 2 === 1) {
        h = HexString(`0${h}`);
    }
    return includePrefix ? HexString(`0x${h}`) : h;
}
function ensureAddressString(str) {
    if (typeof str === 'string') {
        const s = strip0x(str).toLowerCase();
        if (isHexString(s) && s.length === 40) {
            return prepend0x(s);
        }
    }
    throw util_standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
}
function ensureBuffer(str) {
    if (Buffer.isBuffer(str)) {
        return str;
    }
    if (typeof str === 'string') {
        if (isHexString(str)) {
            const s = ensureEvenLengthHexString(str, false);
            return Buffer.from(s, 'hex');
        }
        return Buffer.from(str, 'utf8');
    }
    throw util_standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
}
function ensureIntNumber(num) {
    if (typeof num === 'number' && Number.isInteger(num)) {
        return IntNumber(num);
    }
    if (typeof num === 'string') {
        if (INT_STRING_REGEX.test(num)) {
            return IntNumber(Number(num));
        }
        if (isHexString(num)) {
            return IntNumber(Number(BigInt(ensureEvenLengthHexString(num, true))));
        }
    }
    throw standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
}
function ensureRegExpString(regExp) {
    if (regExp instanceof RegExp) {
        return util_RegExpString(regExp.toString());
    }
    throw util_standardErrors.rpc.invalidParams(`Not a RegExp: ${String(regExp)}`);
}
function ensureBigInt(val) {
    if (val !== null && (typeof val === 'bigint' || isBigNumber(val))) {
        // biome-ignore lint/suspicious/noExplicitAny: force cast to any to avoid type error
        return BigInt(val.toString(10));
    }
    if (typeof val === 'number') {
        return BigInt(ensureIntNumber(val));
    }
    if (typeof val === 'string') {
        if (INT_STRING_REGEX.test(val)) {
            return BigInt(val);
        }
        if (isHexString(val)) {
            return BigInt(ensureEvenLengthHexString(val, true));
        }
    }
    throw util_standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
}
function ensureParsedJSONObject(val) {
    if (typeof val === 'string') {
        return JSON.parse(val);
    }
    if (typeof val === 'object') {
        return val;
    }
    throw util_standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
}
function isBigNumber(val) {
    // biome-ignore lint/suspicious/noExplicitAny: force cast to any to avoid type error
    if (val == null || typeof val.constructor !== 'function') {
        return false;
    }
    // biome-ignore lint/suspicious/noExplicitAny: force cast to any to avoid type error
    const { constructor: constructor_ } = val;
    return typeof constructor_.config === 'function' && typeof constructor_.EUCLID === 'number';
}
function range(start, stop) {
    return Array.from({ length: stop - start }, (_, i) => start + i);
}
function areAddressArraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}
//# sourceMappingURL=util.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/fromHex.js
var fromHex = __webpack_require__(6675);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/isAddressEqual.js
var isAddressEqual = __webpack_require__(732589);
;// ./node_modules/@base-org/account/dist/core/telemetry/events/scw-signer.js


const logHandshakeStarted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_signer.handshake.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logHandshakeError = ({ method, correlationId, errorMessage, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_signer.handshake.error', {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        errorMessage,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logHandshakeCompleted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_signer.handshake.completed', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const scw_signer_logRequestStarted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_signer.request.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const scw_signer_logRequestError = ({ method, correlationId, errorMessage, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_signer.request.error', {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        errorMessage,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logRequestCompleted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_signer.request.completed', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
//# sourceMappingURL=scw-signer.js.map
;// ./node_modules/@base-org/account/dist/core/telemetry/events/scw-sub-account.js


const logSubAccountRequestStarted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.request.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logSubAccountRequestCompleted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.request.completed', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logSubAccountRequestError = ({ method, correlationId, errorMessage, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.request.error', {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        errorMessage,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logAddOwnerStarted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.add_owner.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logAddOwnerCompleted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.add_owner.completed', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logAddOwnerError = ({ method, correlationId, errorMessage, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.add_owner.error', {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        errorMessage,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logInsufficientBalanceErrorHandlingStarted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.insufficient_balance.error_handling.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logInsufficientBalanceErrorHandlingCompleted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.insufficient_balance.error_handling.completed', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
const logInsufficientBalanceErrorHandlingError = ({ method, correlationId, errorMessage, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.insufficient_balance.error_handling.error', {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        errorMessage,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
//# sourceMappingURL=scw-sub-account.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/chain/defineChain.js
var defineChain = __webpack_require__(854676);
// EXTERNAL MODULE: ./node_modules/viem/_esm/clients/createPublicClient.js + 65 modules
var createPublicClient = __webpack_require__(449463);
// EXTERNAL MODULE: ./node_modules/viem/_esm/clients/transports/http.js + 4 modules
var http = __webpack_require__(12406);
// EXTERNAL MODULE: ./node_modules/viem/_esm/account-abstraction/clients/createBundlerClient.js + 19 modules
var createBundlerClient = __webpack_require__(380032);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/base.js
var base = __webpack_require__(549857);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/avalanche.js
var avalanche = __webpack_require__(382927);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/arbitrum.js
var arbitrum = __webpack_require__(877242);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/polygon.js
var polygon = __webpack_require__(249288);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/mainnet.js
var mainnet = __webpack_require__(26118);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/bsc.js
var bsc = __webpack_require__(776170);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/zora.js
var zora = __webpack_require__(906722);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/optimism.js
var optimism = __webpack_require__(362978);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/baseSepolia.js
var baseSepolia = __webpack_require__(162808);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/sepolia.js
var sepolia = __webpack_require__(570323);
// EXTERNAL MODULE: ./node_modules/viem/_esm/chains/definitions/optimismSepolia.js
var optimismSepolia = __webpack_require__(287873);
;// ./node_modules/@base-org/account/dist/store/chain-clients/store.js

const ChainClients = (0,vanilla/* createStore */.y)(() => ({}));
//# sourceMappingURL=store.js.map
;// ./node_modules/@base-org/account/dist/store/chain-clients/utils.js
/* unused harmony import specifier */ var utils_ChainClients;




const SUPPORTED_MAINNET_CHAINS = [
    base/* base */.E,
    avalanche/* avalanche */.m,
    arbitrum/* arbitrum */.D,
    polygon/* polygon */.n,
    mainnet/* mainnet */.r,
    bsc/* bsc */.N,
    zora/* zora */.L,
    optimism/* optimism */.R,
];
const SUPPORTED_TESTNET_CHAINS = [
    baseSepolia/* baseSepolia */.Z,
    sepolia/* sepolia */.G,
    optimismSepolia/* optimismSepolia */.i,
];
const SUPPORTED_CHAINS_BY_ID = [
    ...SUPPORTED_MAINNET_CHAINS,
    ...SUPPORTED_TESTNET_CHAINS,
].reduce((acc, chain) => {
    acc.set(chain.id, chain);
    return acc;
}, new Map());
// Get fallback chain data from supported chain list
function getSupportedChainById(chainId) {
    return SUPPORTED_CHAINS_BY_ID.get(chainId);
}
// Get fallback RPC URL from viem's chain definitions
function getFallbackRpcUrl(chainId) {
    const viemChain = getSupportedChainById(chainId);
    if (viemChain?.rpcUrls?.default?.http?.[0]) {
        return viemChain.rpcUrls.default.http[0];
    }
    return undefined;
}
function defineChainConfig(chainId, rpcUrl, options) {
    const viemChain = options?.viemChain;
    const nativeCurrency = options?.nativeCurrency;
    const name = nativeCurrency?.name ?? viemChain?.name ?? '';
    const symbol = nativeCurrency?.symbol ?? viemChain?.nativeCurrency?.symbol ?? '';
    const decimals = nativeCurrency?.decimal ?? viemChain?.nativeCurrency?.decimals ?? 18;
    return (0,defineChain/* defineChain */.x)({
        id: chainId,
        name,
        nativeCurrency: {
            name,
            symbol,
            decimals,
        },
        rpcUrls: {
            default: {
                http: [rpcUrl],
            },
        },
    });
}
function createClients(chains) {
    chains.forEach((c) => {
        // Use fallback RPC URL from viem if wallet hasn't provided one
        let rpcUrl = c.rpcUrl;
        if (!rpcUrl) {
            rpcUrl = getFallbackRpcUrl(c.id);
        }
        // Skip if still no RPC URL available
        if (!rpcUrl) {
            return;
        }
        const viemChain = getSupportedChainById(c.id);
        const clients = createClientPair({
            chainId: c.id,
            rpcUrl,
            nativeCurrency: c.nativeCurrency,
            viemChain,
        });
        storeClientPair(c.id, clients);
    });
}
function createClientPair(options) {
    const { chainId, rpcUrl, nativeCurrency, viemChain } = options;
    const chain = defineChainConfig(chainId, rpcUrl, {
        viemChain,
        nativeCurrency,
    });
    const client = (0,createPublicClient/* createPublicClient */.l)({
        chain,
        transport: (0,http/* http */.L)(rpcUrl),
    });
    const bundlerClient = (0,createBundlerClient/* createBundlerClient */.M)({
        client,
        transport: (0,http/* http */.L)(rpcUrl),
    });
    return { client, bundlerClient };
}
function createFallbackClientPair(chainId) {
    const rpcUrl = getFallbackRpcUrl(chainId);
    const viemChain = getSupportedChainById(chainId);
    if (!rpcUrl) {
        return undefined;
    }
    return createClientPair({
        chainId,
        rpcUrl,
        viemChain,
    });
}
function storeClientPair(chainId, pair) {
    ChainClients.setState((state) => ({
        ...state,
        [chainId]: {
            client: pair.client,
            bundlerClient: pair.bundlerClient,
        },
    }));
}
function getClient(chainId) {
    // First check if client exists in storage
    const storedClient = ChainClients.getState()[chainId]?.client;
    if (storedClient) {
        return storedClient;
    }
    // If not in storage, try to create a fallback client
    const fallbackPair = createFallbackClientPair(chainId);
    // If we successfully created fallback clients, store them for future use
    if (fallbackPair) {
        storeClientPair(chainId, fallbackPair);
        return fallbackPair.client;
    }
    return undefined;
}
function getBundlerClient(chainId) {
    // First check if bundler client exists in storage
    const storedBundlerClient = utils_ChainClients.getState()[chainId]?.bundlerClient;
    if (storedBundlerClient) {
        return storedBundlerClient;
    }
    // If not in storage, try to create a fallback bundler client
    const fallbackPair = createFallbackClientPair(chainId);
    // If we successfully created fallback clients, store them for future use
    if (fallbackPair) {
        storeClientPair(chainId, fallbackPair);
        return fallbackPair.bundlerClient;
    }
    return undefined;
}
//# sourceMappingURL=utils.js.map
;// ./node_modules/@base-org/account/dist/store/correlation-ids/store.js

const correlationIdsStore = (0,vanilla/* createStore */.y)(() => ({
    correlationIds: new Map(),
}));
const correlationIds = {
    get: (key) => {
        const correlationId = correlationIdsStore.getState().correlationIds.get(key);
        return correlationId;
    },
    set: (key, correlationId) => {
        correlationIdsStore.setState((state) => {
            const newMap = new Map(state.correlationIds);
            newMap.set(key, correlationId);
            return { correlationIds: newMap };
        });
    },
    delete: (key) => {
        correlationIdsStore.setState((state) => {
            const newMap = new Map(state.correlationIds);
            newMap.delete(key);
            return { correlationIds: newMap };
        });
    },
    clear: () => {
        correlationIdsStore.setState({
            correlationIds: new Map(),
        });
    },
};
//# sourceMappingURL=store.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/isAddress.js
var isAddress = __webpack_require__(529873);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/isHex.js
var isHex = __webpack_require__(646394);
;// ./node_modules/@base-org/account/dist/util/assertSubAccount.js


function assertSubAccount(info) {
    if (typeof info !== 'object' || info === null) {
        throw standardErrors.rpc.internal('sub account info is not an object');
    }
    if (!('address' in info)) {
        throw standardErrors.rpc.internal('sub account is invalid');
    }
    if ('address' in info && typeof info.address === 'string' && !(0,isAddress/* isAddress */.P)(info.address)) {
        throw standardErrors.rpc.internal('sub account address is invalid');
    }
    if ('factory' in info && typeof info.factory === 'string' && !(0,isAddress/* isAddress */.P)(info.factory)) {
        throw standardErrors.rpc.internal('sub account factory address is invalid');
    }
    if ('factoryData' in info && typeof info.factoryData === 'string' && !(0,isHex/* isHex */.q)(info.factoryData)) {
        throw standardErrors.rpc.internal('sub account factory data is invalid');
    }
}
//# sourceMappingURL=assertSubAccount.js.map
;// ./node_modules/@base-org/account/dist/util/cipher.js

async function generateKeyPair() {
    return crypto.subtle.generateKey({
        name: 'ECDH',
        namedCurve: 'P-256',
    }, true, ['deriveKey']);
}
async function deriveSharedSecret(ownPrivateKey, peerPublicKey) {
    return crypto.subtle.deriveKey({
        name: 'ECDH',
        public: peerPublicKey,
    }, ownPrivateKey, {
        name: 'AES-GCM',
        length: 256,
    }, false, ['encrypt', 'decrypt']);
}
async function encrypt(sharedSecret, plainText) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const cipherText = await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv,
    }, sharedSecret, new TextEncoder().encode(plainText));
    return { iv, cipherText };
}
async function decrypt(sharedSecret, { iv, cipherText }) {
    const plainText = await crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv,
    }, sharedSecret, cipherText);
    return new TextDecoder().decode(plainText);
}
function getFormat(keyType) {
    switch (keyType) {
        case 'public':
            return 'spki';
        case 'private':
            return 'pkcs8';
    }
}
async function exportKeyToHexString(type, key) {
    const format = getFormat(type);
    const exported = await crypto.subtle.exportKey(format, key);
    return uint8ArrayToHex(new Uint8Array(exported));
}
async function importKeyFromHexString(type, hexString) {
    const format = getFormat(type);
    const arrayBuffer = hexStringToUint8Array(hexString).buffer;
    return await crypto.subtle.importKey(format, new Uint8Array(arrayBuffer), {
        name: 'ECDH',
        namedCurve: 'P-256',
    }, true, type === 'private' ? ['deriveKey'] : []);
}
async function encryptContent(content, sharedSecret) {
    const serialized = JSON.stringify(content, (_, value) => {
        if (!(value instanceof Error))
            return value;
        const error = value;
        return {
            ...(error.code ? { code: error.code } : {}),
            message: error.message,
        };
    });
    return encrypt(sharedSecret, serialized);
}
async function decryptContent(encryptedData, sharedSecret) {
    return JSON.parse(await decrypt(sharedSecret, encryptedData));
}
//# sourceMappingURL=cipher.js.map
;// ./node_modules/@base-org/account/dist/util/provider.js


async function fetchRPCRequest(request, rpcUrl) {
    const requestBody = {
        ...request,
        jsonrpc: '2.0',
        id: crypto.randomUUID(),
    };
    const res = await fetch(rpcUrl, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'X-Cbw-Sdk-Version': PACKAGE_VERSION,
            'X-Cbw-Sdk-Platform': PACKAGE_NAME,
        },
    });
    const { result, error } = await res.json();
    if (error)
        throw error;
    return result;
}
/**
 * Validates the arguments for an invalid request and returns an error if any validation fails.
 * Valid request args are defined here: https://eips.ethereum.org/EIPS/eip-1193#request
 * @param args The request arguments to validate.
 * @returns An error object if the arguments are invalid, otherwise undefined.
 */
function checkErrorForInvalidRequestArgs(args) {
    if (!args || typeof args !== 'object' || Array.isArray(args)) {
        throw standardErrors.rpc.invalidParams({
            message: 'Expected a single, non-array, object argument.',
            data: args,
        });
    }
    const { method, params } = args;
    if (typeof method !== 'string' || method.length === 0) {
        throw standardErrors.rpc.invalidParams({
            message: "'args.method' must be a non-empty string.",
            data: args,
        });
    }
    if (params !== undefined &&
        !Array.isArray(params) &&
        (typeof params !== 'object' || params === null)) {
        throw standardErrors.rpc.invalidParams({
            message: "'args.params' must be an object or array if provided.",
            data: args,
        });
    }
    switch (method) {
        case 'eth_sign':
        case 'eth_signTypedData_v2':
        case 'eth_subscribe':
        case 'eth_unsubscribe':
            throw standardErrors.provider.unsupportedMethod();
    }
}
//# sourceMappingURL=provider.js.map
// EXTERNAL MODULE: ./node_modules/@noble/curves/esm/p256.js + 1 modules
var p256 = __webpack_require__(101635);
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/version.js
/** @internal */
const version = '0.1.1';
//# sourceMappingURL=version.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/internal/errors.js

/** @internal */
function getUrl(url) {
    return url;
}
/** @internal */
function getVersion() {
    return version;
}
/** @internal */
function prettyPrint(args) {
    if (!args)
        return '';
    const entries = Object.entries(args)
        .map(([key, value]) => {
        if (value === undefined || value === false)
            return null;
        return [key, value];
    })
        .filter(Boolean);
    const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
    return entries
        .map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`)
        .join('\n');
}
//# sourceMappingURL=errors.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/Errors.js

/**
 * Base error class inherited by all errors thrown by ox.
 *
 * @example
 * ```ts
 * import { Errors } from 'ox'
 * throw new Errors.BaseError('An error occurred')
 * ```
 */
class BaseError extends Error {
    constructor(shortMessage, options = {}) {
        const details = (() => {
            if (options.cause instanceof BaseError) {
                if (options.cause.details)
                    return options.cause.details;
                if (options.cause.shortMessage)
                    return options.cause.shortMessage;
            }
            if (options.cause?.message)
                return options.cause.message;
            return options.details;
        })();
        const docsPath = (() => {
            if (options.cause instanceof BaseError)
                return options.cause.docsPath || options.docsPath;
            return options.docsPath;
        })();
        const docsBaseUrl = 'https://oxlib.sh';
        const docs = `${docsBaseUrl}${docsPath ?? ''}`;
        const message = [
            shortMessage || 'An error occurred.',
            ...(options.metaMessages ? ['', ...options.metaMessages] : []),
            ...(details || docsPath
                ? [
                    '',
                    details ? `Details: ${details}` : undefined,
                    docsPath ? `See: ${docs}` : undefined,
                ]
                : []),
        ]
            .filter((x) => typeof x === 'string')
            .join('\n');
        super(message, options.cause ? { cause: options.cause } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: `ox@${getVersion()}`
        });
        this.cause = options.cause;
        this.details = details;
        this.docs = docs;
        this.docsPath = docsPath;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
/** @internal */
function walk(err, fn) {
    if (fn?.(err))
        return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause)
        return walk(err.cause, fn);
    return fn ? null : err;
}
//# sourceMappingURL=Errors.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/Json.js
const bigIntSuffix = '#__bigint';
/**
 * Parses a JSON string, with support for `bigint`.
 *
 * @example
 * ```ts twoslash
 * import { Json } from 'ox'
 *
 * const json = Json.parse('{"foo":"bar","baz":"69420694206942069420694206942069420694206942069420#__bigint"}')
 * // @log: {
 * // @log:   foo: 'bar',
 * // @log:   baz: 69420694206942069420694206942069420694206942069420n
 * // @log: }
 * ```
 *
 * @param string - The value to parse.
 * @param reviver - A function that transforms the results.
 * @returns The parsed value.
 */
function parse(string, reviver) {
    return JSON.parse(string, (key, value_) => {
        const value = value_;
        if (typeof value === 'string' && value.endsWith(bigIntSuffix))
            return BigInt(value.slice(0, -bigIntSuffix.length));
        return typeof reviver === 'function' ? reviver(key, value) : value;
    });
}
/**
 * Stringifies a value to its JSON representation, with support for `bigint`.
 *
 * @example
 * ```ts twoslash
 * import { Json } from 'ox'
 *
 * const json = Json.stringify({
 *   foo: 'bar',
 *   baz: 69420694206942069420694206942069420694206942069420n,
 * })
 * // @log: '{"foo":"bar","baz":"69420694206942069420694206942069420694206942069420#__bigint"}'
 * ```
 *
 * @param value - The value to stringify.
 * @param replacer - A function that transforms the results. It is passed the key and value of the property, and must return the value to be used in the JSON string. If this function returns `undefined`, the property is not included in the resulting JSON string.
 * @param space - A string or number that determines the indentation of the JSON string. If it is a number, it indicates the number of spaces to use as indentation; if it is a string (e.g. `'\t'`), it uses the string as the indentation character.
 * @returns The JSON string.
 */
function stringify(value, replacer, space) {
    return JSON.stringify(value, (key, value) => {
        if (typeof replacer === 'function')
            return replacer(key, value);
        if (typeof value === 'bigint')
            return value.toString() + bigIntSuffix;
        return value;
    }, space);
}
//# sourceMappingURL=Json.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/internal/hex.js

/** @internal */
function assertSize(hex, size_) {
    if (size(hex) > size_)
        throw new SizeOverflowError({
            givenSize: size(hex),
            maxSize: size_,
        });
}
/** @internal */
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > size(value) - 1)
        throw new SliceOffsetOutOfBoundsError({
            offset: start,
            position: 'start',
            size: size(value),
        });
}
/** @internal */
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        size(value) !== end - start) {
        throw new SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: size(value),
        });
    }
}
/** @internal */
function pad(hex_, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0)
        return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2)
        throw new SizeExceedsPaddingSizeError({
            size: Math.ceil(hex.length / 2),
            targetSize: size,
            type: 'Hex',
        });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
/** @internal */
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value.replace('0x', '');
    let sliceLength = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0')
            sliceLength++;
        else
            break;
    }
    data =
        dir === 'left'
            ? data.slice(sliceLength)
            : data.slice(0, data.length - sliceLength);
    if (data === '0')
        return '0x';
    if (dir === 'right' && data.length % 2 === 1)
        return `0x${data}0`;
    return `0x${data}`;
}
//# sourceMappingURL=hex.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/Hex.js
/* unused harmony import specifier */ var equalBytes;
/* unused harmony import specifier */ var Bytes;
/* unused harmony import specifier */ var internal_bytes;
/* unused harmony import specifier */ var internal;






const encoder = /*#__PURE__*/ new TextEncoder();
const hexes = /*#__PURE__*/ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, '0'));
/**
 * Asserts if the given value is {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.assert('abc')
 * // @error: InvalidHexValueTypeError:
 * // @error: Value `"abc"` of type `string` is an invalid hex type.
 * // @error: Hex types must be represented as `"0x\${string}"`.
 * ```
 *
 * @param value - The value to assert.
 * @param options - Options.
 */
function assert(value, options = {}) {
    const { strict = false } = options;
    if (!value)
        throw new InvalidHexTypeError(value);
    if (typeof value !== 'string')
        throw new InvalidHexTypeError(value);
    if (strict) {
        if (!/^0x[0-9a-fA-F]*$/.test(value))
            throw new InvalidHexValueError(value);
    }
    if (!value.startsWith('0x'))
        throw new InvalidHexValueError(value);
}
/**
 * Concatenates two or more {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.concat('0x123', '0x456')
 * // @log: '0x123456'
 * ```
 *
 * @param values - The {@link ox#Hex.Hex} values to concatenate.
 * @returns The concatenated {@link ox#Hex.Hex} value.
 */
function concat(...values) {
    return `0x${values.reduce((acc, x) => acc + x.replace('0x', ''), '')}`;
}
/**
 * Instantiates a {@link ox#Hex.Hex} value from a hex string or {@link ox#Bytes.Bytes} value.
 *
 * :::tip
 *
 * To instantiate from a **Boolean**, **String**, or **Number**, use one of the following:
 *
 * - `Hex.fromBoolean`
 *
 * - `Hex.fromString`
 *
 * - `Hex.fromNumber`
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Bytes, Hex } from 'ox'
 *
 * Hex.from('0x48656c6c6f20576f726c6421')
 * // @log: '0x48656c6c6f20576f726c6421'
 *
 * Hex.from(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // @log: '0x48656c6c6f20576f726c6421'
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} value to encode.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function from(value) {
    if (value instanceof Uint8Array)
        return fromBytes(value);
    if (Array.isArray(value))
        return fromBytes(new Uint8Array(value));
    return value;
}
/**
 * Encodes a boolean into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromBoolean(true)
 * // @log: '0x1'
 *
 * Hex.fromBoolean(false)
 * // @log: '0x0'
 *
 * Hex.fromBoolean(true, { size: 32 })
 * // @log: '0x0000000000000000000000000000000000000000000000000000000000000001'
 * ```
 *
 * @param value - The boolean value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromBoolean(value, options = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof options.size === 'number') {
        internal.assertSize(hex, options.size);
        return padLeft(hex, options.size);
    }
    return hex;
}
/**
 * Encodes a {@link ox#Bytes.Bytes} value into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes, Hex } from 'ox'
 *
 * Hex.fromBytes(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // @log: '0x48656c6c6f20576f726c6421'
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromBytes(value, options = {}) {
    let string = '';
    for (let i = 0; i < value.length; i++)
        string += hexes[value[i]];
    const hex = `0x${string}`;
    if (typeof options.size === 'number') {
        assertSize(hex, options.size);
        return padRight(hex, options.size);
    }
    return hex;
}
/**
 * Encodes a number or bigint into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromNumber(420)
 * // @log: '0x1a4'
 *
 * Hex.fromNumber(420, { size: 32 })
 * // @log: '0x00000000000000000000000000000000000000000000000000000000000001a4'
 * ```
 *
 * @param value - The number or bigint value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromNumber(value, options = {}) {
    const { signed, size } = options;
    const value_ = BigInt(value);
    let maxValue;
    if (size) {
        if (signed)
            maxValue = (1n << (BigInt(size) * 8n - 1n)) - 1n;
        else
            maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    }
    else if (typeof value === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if ((maxValue && value_ > maxValue) || value_ < minValue) {
        const suffix = typeof value === 'bigint' ? 'n' : '';
        throw new IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value}${suffix}`,
        });
    }
    const stringValue = (signed && value_ < 0 ? (1n << BigInt(size * 8)) + BigInt(value_) : value_).toString(16);
    const hex = `0x${stringValue}`;
    if (size)
        return padLeft(hex, size);
    return hex;
}
/**
 * Encodes a string into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 * Hex.fromString('Hello World!')
 * // '0x48656c6c6f20576f726c6421'
 *
 * Hex.fromString('Hello World!', { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 * ```
 *
 * @param value - The string value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromString(value, options = {}) {
    return fromBytes(encoder.encode(value), options);
}
/**
 * Checks if two {@link ox#Hex.Hex} values are equal.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.isEqual('0xdeadbeef', '0xdeadbeef')
 * // @log: true
 *
 * Hex.isEqual('0xda', '0xba')
 * // @log: false
 * ```
 *
 * @param hexA - The first {@link ox#Hex.Hex} value.
 * @param hexB - The second {@link ox#Hex.Hex} value.
 * @returns `true` if the two {@link ox#Hex.Hex} values are equal, `false` otherwise.
 */
function isEqual(hexA, hexB) {
    return equalBytes(Bytes.fromHex(hexA), Bytes.fromHex(hexB));
}
/**
 * Pads a {@link ox#Hex.Hex} value to the left with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.padLeft('0x1234', 4)
 * // @log: '0x00001234'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to pad.
 * @param size - The size (in bytes) of the output hex value.
 * @returns The padded {@link ox#Hex.Hex} value.
 */
function padLeft(value, size) {
    return pad(value, { dir: 'left', size });
}
/**
 * Pads a {@link ox#Hex.Hex} value to the right with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts
 * import { Hex } from 'ox'
 *
 * Hex.padRight('0x1234', 4)
 * // @log: '0x12340000'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to pad.
 * @param size - The size (in bytes) of the output hex value.
 * @returns The padded {@link ox#Hex.Hex} value.
 */
function padRight(value, size) {
    return pad(value, { dir: 'right', size });
}
/**
 * Generates a random {@link ox#Hex.Hex} value of the specified length.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * const hex = Hex.random(32)
 * // @log: '0x...'
 * ```
 *
 * @returns Random {@link ox#Hex.Hex} value.
 */
function random(length) {
    return fromBytes(Bytes.random(length));
}
/**
 * Returns a section of a {@link ox#Bytes.Bytes} value given a start/end bytes offset.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.slice('0x0123456789', 1, 4)
 * // @log: '0x234567'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to slice.
 * @param start - The start offset (in bytes).
 * @param end - The end offset (in bytes).
 * @param options - Options.
 * @returns The sliced {@link ox#Hex.Hex} value.
 */
function slice(value, start, end, options = {}) {
    const { strict } = options;
    assertStartOffset(value, start);
    const value_ = `0x${value
        .replace('0x', '')
        .slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
    if (strict)
        assertEndOffset(value_, start, end);
    return value_;
}
/**
 * Retrieves the size of a {@link ox#Hex.Hex} value (in bytes).
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.size('0xdeadbeef')
 * // @log: 4
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to get the size of.
 * @returns The size of the {@link ox#Hex.Hex} value (in bytes).
 */
function size(value) {
    return Math.ceil((value.length - 2) / 2);
}
/**
 * Trims leading zeros from a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.trimLeft('0x00000000deadbeef')
 * // @log: '0xdeadbeef'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to trim.
 * @returns The trimmed {@link ox#Hex.Hex} value.
 */
function trimLeft(value) {
    return internal.trim(value, { dir: 'left' });
}
/**
 * Trims trailing zeros from a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.trimRight('0xdeadbeef00000000')
 * // @log: '0xdeadbeef'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to trim.
 * @returns The trimmed {@link ox#Hex.Hex} value.
 */
function trimRight(value) {
    return internal.trim(value, { dir: 'right' });
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a BigInt.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toBigInt('0x1a4')
 * // @log: 420n
 *
 * Hex.toBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // @log: 420n
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded BigInt.
 */
function toBigInt(hex, options = {}) {
    const { signed } = options;
    if (options.size)
        assertSize(hex, options.size);
    const value = BigInt(hex);
    if (!signed)
        return value;
    const size = (hex.length - 2) / 2;
    const max_unsigned = (1n << (BigInt(size) * 8n)) - 1n;
    const max_signed = max_unsigned >> 1n;
    if (value <= max_signed)
        return value;
    return value - max_unsigned - 1n;
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a boolean.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toBoolean('0x01')
 * // @log: true
 *
 * Hex.toBoolean('0x0000000000000000000000000000000000000000000000000000000000000001', { size: 32 })
 * // @log: true
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded boolean.
 */
function toBoolean(hex, options = {}) {
    if (options.size)
        internal.assertSize(hex, options.size);
    const hex_ = trimLeft(hex);
    if (hex_ === '0x')
        return false;
    if (hex_ === '0x1')
        return true;
    throw new InvalidHexBooleanError(hex);
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * const data = Hex.toBytes('0x48656c6c6f20776f726c6421')
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded {@link ox#Bytes.Bytes}.
 */
function toBytes(hex, options = {}) {
    return Bytes.fromHex(hex, options);
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a number.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toNumber('0x1a4')
 * // @log: 420
 *
 * Hex.toNumber('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // @log: 420
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded number.
 */
function toNumber(hex, options = {}) {
    const { signed, size } = options;
    if (!signed && !size)
        return Number(hex);
    return Number(toBigInt(hex, options));
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a string.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toString('0x48656c6c6f20576f726c6421')
 * // @log: 'Hello world!'
 *
 * Hex.toString('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *  size: 32,
 * })
 * // @log: 'Hello world'
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded string.
 */
function Hex_toString(hex, options = {}) {
    const { size } = options;
    let bytes = Bytes.fromHex(hex);
    if (size) {
        internal_bytes.assertSize(bytes, size);
        bytes = Bytes.trimRight(bytes);
    }
    return new TextDecoder().decode(bytes);
}
/**
 * Checks if the given value is {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes, Hex } from 'ox'
 *
 * Hex.validate('0xdeadbeef')
 * // @log: true
 *
 * Hex.validate(Bytes.from([1, 2, 3]))
 * // @log: false
 * ```
 *
 * @param value - The value to check.
 * @param options - Options.
 * @returns `true` if the value is a {@link ox#Hex.Hex}, `false` otherwise.
 */
function validate(value, options = {}) {
    const { strict = false } = options;
    try {
        assert(value, { strict });
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Thrown when the provided integer is out of range, and cannot be represented as a hex value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromNumber(420182738912731283712937129)
 * // @error: Hex.IntegerOutOfRangeError: Number \`4.2018273891273126e+26\` is not in safe unsigned integer range (`0` to `9007199254740991`)
 * ```
 */
class IntegerOutOfRangeError extends BaseError {
    constructor({ max, min, signed, size, value, }) {
        super(`Number \`${value}\` is not in safe${size ? ` ${size * 8}-bit` : ''}${signed ? ' signed' : ' unsigned'} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.IntegerOutOfRangeError'
        });
    }
}
/**
 * Thrown when the provided hex value cannot be represented as a boolean.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toBoolean('0xa')
 * // @error: Hex.InvalidHexBooleanError: Hex value `"0xa"` is not a valid boolean.
 * // @error: The hex value must be `"0x0"` (false) or `"0x1"` (true).
 * ```
 */
class InvalidHexBooleanError extends BaseError {
    constructor(hex) {
        super(`Hex value \`"${hex}"\` is not a valid boolean.`, {
            metaMessages: [
                'The hex value must be `"0x0"` (false) or `"0x1"` (true).',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexBooleanError'
        });
    }
}
/**
 * Thrown when the provided value is not a valid hex type.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.assert(1)
 * // @error: Hex.InvalidHexTypeError: Value `1` of type `number` is an invalid hex type.
 * ```
 */
class InvalidHexTypeError extends BaseError {
    constructor(value) {
        super(`Value \`${typeof value === 'object' ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
            metaMessages: ['Hex types must be represented as `"0x${string}"`.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexTypeError'
        });
    }
}
/**
 * Thrown when the provided hex value is invalid.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.assert('0x0123456789abcdefg')
 * // @error: Hex.InvalidHexValueError: Value `0x0123456789abcdefg` is an invalid hex value.
 * // @error: Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).
 * ```
 */
class InvalidHexValueError extends BaseError {
    constructor(value) {
        super(`Value \`${value}\` is an invalid hex value.`, {
            metaMessages: [
                'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexValueError'
        });
    }
}
/**
 * Thrown when the provided hex value is an odd length.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.fromHex('0xabcde')
 * // @error: Hex.InvalidLengthError: Hex value `"0xabcde"` is an odd length (5 nibbles).
 * ```
 */
class InvalidLengthError extends BaseError {
    constructor(value) {
        super(`Hex value \`"${value}"\` is an odd length (${value.length - 2} nibbles).`, {
            metaMessages: ['It must be an even length.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidLengthError'
        });
    }
}
/**
 * Thrown when the size of the value exceeds the expected max size.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromString('Hello World!', { size: 8 })
 * // @error: Hex.SizeOverflowError: Size cannot exceed `8` bytes. Given size: `12` bytes.
 * ```
 */
class SizeOverflowError extends BaseError {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeOverflowError'
        });
    }
}
/**
 * Thrown when the slice offset exceeds the bounds of the value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.slice('0x0123456789', 6)
 * // @error: Hex.SliceOffsetOutOfBoundsError: Slice starting at offset `6` is out-of-bounds (size: `5`).
 * ```
 */
class SliceOffsetOutOfBoundsError extends BaseError {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SliceOffsetOutOfBoundsError'
        });
    }
}
/**
 * Thrown when the size of the value exceeds the pad size.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.padLeft('0x1a4e12a45a21323123aaa87a897a897a898a6567a578a867a98778a667a85a875a87a6a787a65a675a6a9', 32)
 * // @error: Hex.SizeExceedsPaddingSizeError: Hex size (`43`) exceeds padding size (`32`).
 * ```
 */
class SizeExceedsPaddingSizeError extends BaseError {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeExceedsPaddingSizeError'
        });
    }
}
//# sourceMappingURL=Hex.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/internal/bytes.js
/* unused harmony import specifier */ var bytes_Bytes;

/** @internal */
function bytes_assertSize(bytes, size_) {
    if (Bytes_size(bytes) > size_)
        throw new Bytes_SizeOverflowError({
            givenSize: Bytes_size(bytes),
            maxSize: size_,
        });
}
/** @internal */
function bytes_assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > Bytes_size(value) - 1)
        throw new Bytes_SliceOffsetOutOfBoundsError({
            offset: start,
            position: 'start',
            size: Bytes_size(value),
        });
}
/** @internal */
function bytes_assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        Bytes_size(value) !== end - start) {
        throw new Bytes_SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: Bytes_size(value),
        });
    }
}
/** @internal */
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102,
};
/** @internal */
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine)
        return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F)
        return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f)
        return char - (charCodeMap.a - 10);
    return undefined;
}
/** @internal */
function bytes_pad(bytes, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0)
        return bytes;
    if (bytes.length > size)
        throw new bytes_Bytes.SizeExceedsPaddingSizeError({
            size: bytes.length,
            targetSize: size,
            type: 'Bytes',
        });
    const paddedBytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] =
            bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
/** @internal */
function bytes_trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value;
    let sliceLength = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0')
            sliceLength++;
        else
            break;
    }
    data =
        dir === 'left'
            ? data.slice(sliceLength)
            : data.slice(0, data.length - sliceLength);
    return data;
}
//# sourceMappingURL=bytes.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/Bytes.js
/* unused harmony import specifier */ var Bytes_equalBytes;
/* unused harmony import specifier */ var Hex;
/* unused harmony import specifier */ var Bytes_internal;






const decoder = /*#__PURE__*/ new TextDecoder();
const Bytes_encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Asserts if the given value is {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.assert('abc')
 * // @error: Bytes.InvalidBytesTypeError:
 * // @error: Value `"abc"` of type `string` is an invalid Bytes value.
 * // @error: Bytes values must be of type `Uint8Array`.
 * ```
 *
 * @param value - Value to assert.
 */
function Bytes_assert(value) {
    if (value instanceof Uint8Array)
        return;
    if (!value)
        throw new InvalidBytesTypeError(value);
    if (typeof value !== 'object')
        throw new InvalidBytesTypeError(value);
    if (!('BYTES_PER_ELEMENT' in value))
        throw new InvalidBytesTypeError(value);
    if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== 'Uint8Array')
        throw new InvalidBytesTypeError(value);
}
/**
 * Concatenates two or more {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const bytes = Bytes.concat(
 *   Bytes.from([1]),
 *   Bytes.from([69]),
 *   Bytes.from([420, 69]),
 * )
 * // @log: Uint8Array [ 1, 69, 420, 69 ]
 * ```
 *
 * @param values - Values to concatenate.
 * @returns Concatenated {@link ox#Bytes.Bytes}.
 */
function Bytes_concat(...values) {
    let length = 0;
    for (const arr of values) {
        length += arr.length;
    }
    const result = new Uint8Array(length);
    for (let i = 0, index = 0; i < values.length; i++) {
        const arr = values[i];
        result.set(arr, index);
        index += arr.length;
    }
    return result;
}
/**
 * Instantiates a {@link ox#Bytes.Bytes} value from a `Uint8Array`, a hex string, or an array of unsigned 8-bit integers.
 *
 * :::tip
 *
 * To instantiate from a **Boolean**, **String**, or **Number**, use one of the following:
 *
 * - `Bytes.fromBoolean`
 *
 * - `Bytes.fromString`
 *
 * - `Bytes.fromNumber`
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.from([255, 124, 5, 4])
 * // @log: Uint8Array([255, 124, 5, 4])
 *
 * const data = Bytes.from('0xdeadbeef')
 * // @log: Uint8Array([222, 173, 190, 239])
 * ```
 *
 * @param value - Value to convert.
 * @returns A {@link ox#Bytes.Bytes} instance.
 */
function Bytes_from(value) {
    if (value instanceof Uint8Array)
        return value;
    if (typeof value === 'string')
        return Bytes_fromHex(value);
    return fromArray(value);
}
/**
 * Converts an array of unsigned 8-bit integers into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromArray([255, 124, 5, 4])
 * // @log: Uint8Array([255, 124, 5, 4])
 * ```
 *
 * @param value - Value to convert.
 * @returns A {@link ox#Bytes.Bytes} instance.
 */
function fromArray(value) {
    return value instanceof Uint8Array ? value : new Uint8Array(value);
}
/**
 * Encodes a boolean value into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromBoolean(true)
 * // @log: Uint8Array([1])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromBoolean(true, { size: 32 })
 * // @log: Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
 * ```
 *
 * @param value - Boolean value to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function Bytes_fromBoolean(value, options = {}) {
    const { size } = options;
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof size === 'number') {
        Bytes_internal.assertSize(bytes, size);
        return Bytes_padLeft(bytes, size);
    }
    return bytes;
}
/**
 * Encodes a {@link ox#Hex.Hex} value into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromHex('0x48656c6c6f20776f726c6421')
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromHex('0x48656c6c6f20776f726c6421', { size: 32 })
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 * ```
 *
 * @param value - {@link ox#Hex.Hex} value to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function Bytes_fromHex(value, options = {}) {
    const { size } = options;
    let hex = value;
    if (size) {
        assertSize(value, size);
        hex = padRight(value, size);
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2)
        hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for (let index = 0, j = 0; index < length; index++) {
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
/**
 * Encodes a number value into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromNumber(420)
 * // @log: Uint8Array([1, 164])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromNumber(420, { size: 4 })
 * // @log: Uint8Array([0, 0, 1, 164])
 * ```
 *
 * @param value - Number value to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function Bytes_fromNumber(value, options) {
    const hex = Hex.fromNumber(value, options);
    return Bytes_fromHex(hex);
}
/**
 * Encodes a string into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromString('Hello world!')
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromString('Hello world!', { size: 32 })
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 * ```
 *
 * @param value - String to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function Bytes_fromString(value, options = {}) {
    const { size } = options;
    const bytes = Bytes_encoder.encode(value);
    if (typeof size === 'number') {
        Bytes_internal.assertSize(bytes, size);
        return Bytes_padRight(bytes, size);
    }
    return bytes;
}
/**
 * Checks if two {@link ox#Bytes.Bytes} values are equal.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.isEqual(Bytes.from([1]), Bytes.from([1]))
 * // @log: true
 *
 * Bytes.isEqual(Bytes.from([1]), Bytes.from([2]))
 * // @log: false
 * ```
 *
 * @param bytesA - First {@link ox#Bytes.Bytes} value.
 * @param bytesB - Second {@link ox#Bytes.Bytes} value.
 * @returns `true` if the two values are equal, otherwise `false`.
 */
function Bytes_isEqual(bytesA, bytesB) {
    return Bytes_equalBytes(bytesA, bytesB);
}
/**
 * Pads a {@link ox#Bytes.Bytes} value to the left with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.padLeft(Bytes.from([1]), 4)
 * // @log: Uint8Array([0, 0, 0, 1])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value to pad.
 * @param size - Size to pad the {@link ox#Bytes.Bytes} value to.
 * @returns Padded {@link ox#Bytes.Bytes} value.
 */
function Bytes_padLeft(value, size) {
    return Bytes_internal.pad(value, { dir: 'left', size });
}
/**
 * Pads a {@link ox#Bytes.Bytes} value to the right with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.padRight(Bytes.from([1]), 4)
 * // @log: Uint8Array([1, 0, 0, 0])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value to pad.
 * @param size - Size to pad the {@link ox#Bytes.Bytes} value to.
 * @returns Padded {@link ox#Bytes.Bytes} value.
 */
function Bytes_padRight(value, size) {
    return Bytes_internal.pad(value, { dir: 'right', size });
}
/**
 * Generates random {@link ox#Bytes.Bytes} of the specified length.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const bytes = Bytes.random(32)
 * // @log: Uint8Array([... x32])
 * ```
 *
 * @param length - Length of the random {@link ox#Bytes.Bytes} to generate.
 * @returns Random {@link ox#Bytes.Bytes} of the specified length.
 */
function Bytes_random(length) {
    return crypto.getRandomValues(new Uint8Array(length));
}
/**
 * Retrieves the size of a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.size(Bytes.from([1, 2, 3, 4]))
 * // @log: 4
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value.
 * @returns Size of the {@link ox#Bytes.Bytes} value.
 */
function Bytes_size(value) {
    return value.length;
}
/**
 * Returns a section of a {@link ox#Bytes.Bytes} value given a start/end bytes offset.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.slice(
 *   Bytes.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
 *   1,
 *   4,
 * )
 * // @log: Uint8Array([2, 3, 4])
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} value.
 * @param start - Start offset.
 * @param end - End offset.
 * @param options - Slice options.
 * @returns Sliced {@link ox#Bytes.Bytes} value.
 */
function Bytes_slice(value, start, end, options = {}) {
    const { strict } = options;
    bytes_assertStartOffset(value, start);
    const value_ = value.slice(start, end);
    if (strict)
        bytes_assertEndOffset(value_, start, end);
    return value_;
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a bigint.
 *
 * @example
 * ```ts
 * import { Bytes } from 'ox'
 *
 * Bytes.toBigInt(Bytes.from([1, 164]))
 * // @log: 420n
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Decoding options.
 * @returns Decoded bigint.
 */
function Bytes_toBigInt(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined')
        bytes_assertSize(bytes, size);
    const hex = fromBytes(bytes, options);
    return toBigInt(hex, options);
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a boolean.
 *
 * @example
 * ```ts
 * import { Bytes } from 'ox'
 *
 * Bytes.toBoolean(Bytes.from([1]))
 * // @log: true
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Decoding options.
 * @returns Decoded boolean.
 */
function Bytes_toBoolean(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        Bytes_internal.assertSize(bytes_, size);
        bytes_ = Bytes_trimLeft(bytes_);
    }
    if (bytes_.length > 1 || bytes_[0] > 1)
        throw new InvalidBytesBooleanError(bytes_);
    return Boolean(bytes_[0]);
}
/**
 * Encodes a {@link ox#Bytes.Bytes} value into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.toHex(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // '0x48656c6c6f20576f726c6421'
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Options.
 * @returns Decoded {@link ox#Hex.Hex} value.
 */
function Bytes_toHex(value, options = {}) {
    return Hex.fromBytes(value, options);
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a number.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.toNumber(Bytes.from([1, 164]))
 * // @log: 420
 * ```
 */
function Bytes_toNumber(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined')
        Bytes_internal.assertSize(bytes, size);
    const hex = Hex.fromBytes(bytes, options);
    return Hex.toNumber(hex, options);
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a string.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.toString(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // @log: 'Hello world'
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Options.
 * @returns Decoded string.
 */
function Bytes_toString(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        Bytes_internal.assertSize(bytes_, size);
        bytes_ = Bytes_trimRight(bytes_);
    }
    return decoder.decode(bytes_);
}
/**
 * Trims leading zeros from a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.trimLeft(Bytes.from([0, 0, 0, 0, 1, 2, 3]))
 * // @log: Uint8Array([1, 2, 3])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value.
 * @returns Trimmed {@link ox#Bytes.Bytes} value.
 */
function Bytes_trimLeft(value) {
    return Bytes_internal.trim(value, { dir: 'left' });
}
/**
 * Trims trailing zeros from a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.trimRight(Bytes.from([1, 2, 3, 0, 0, 0, 0]))
 * // @log: Uint8Array([1, 2, 3])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value.
 * @returns Trimmed {@link ox#Bytes.Bytes} value.
 */
function Bytes_trimRight(value) {
    return Bytes_internal.trim(value, { dir: 'right' });
}
/**
 * Checks if the given value is {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.validate('0x')
 * // @log: false
 *
 * Bytes.validate(Bytes.from([1, 2, 3]))
 * // @log: true
 * ```
 *
 * @param value - Value to check.
 * @returns `true` if the value is {@link ox#Bytes.Bytes}, otherwise `false`.
 */
function Bytes_validate(value) {
    try {
        Bytes_assert(value);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Thrown when the bytes value cannot be represented as a boolean.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.toBoolean(Bytes.from([5]))
 * // @error: Bytes.InvalidBytesBooleanError: Bytes value `[5]` is not a valid boolean.
 * // @error: The bytes array must contain a single byte of either a `0` or `1` value.
 * ```
 */
class InvalidBytesBooleanError extends BaseError {
    constructor(bytes) {
        super(`Bytes value \`${bytes}\` is not a valid boolean.`, {
            metaMessages: [
                'The bytes array must contain a single byte of either a `0` or `1` value.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesBooleanError'
        });
    }
}
/**
 * Thrown when a value cannot be converted to bytes.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Bytes } from 'ox'
 *
 * Bytes.from('foo')
 * // @error: Bytes.InvalidBytesTypeError: Value `foo` of type `string` is an invalid Bytes value.
 * ```
 */
class InvalidBytesTypeError extends BaseError {
    constructor(value) {
        super(`Value \`${typeof value === 'object' ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
            metaMessages: ['Bytes values must be of type `Bytes`.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesTypeError'
        });
    }
}
/**
 * Thrown when a size exceeds the maximum allowed size.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.fromString('Hello World!', { size: 8 })
 * // @error: Bytes.SizeOverflowError: Size cannot exceed `8` bytes. Given size: `12` bytes.
 * ```
 */
class Bytes_SizeOverflowError extends BaseError {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeOverflowError'
        });
    }
}
/**
 * Thrown when a slice offset is out-of-bounds.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.slice(Bytes.from([1, 2, 3]), 4)
 * // @error: Bytes.SliceOffsetOutOfBoundsError: Slice starting at offset `4` is out-of-bounds (size: `3`).
 * ```
 */
class Bytes_SliceOffsetOutOfBoundsError extends BaseError {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SliceOffsetOutOfBoundsError'
        });
    }
}
/**
 * Thrown when a the padding size exceeds the maximum allowed size.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.padLeft(Bytes.fromString('Hello World!'), 8)
 * // @error: [Bytes.SizeExceedsPaddingSizeError: Bytes size (`12`) exceeds padding size (`8`).
 * ```
 */
class Bytes_SizeExceedsPaddingSizeError extends BaseError {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeExceedsPaddingSizeError'
        });
    }
}
//# sourceMappingURL=Bytes.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/PublicKey.js
/* unused harmony import specifier */ var PublicKey_Bytes;




/**
 * Asserts that a {@link ox#PublicKey.PublicKey} is valid.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * PublicKey.assert({
 *   prefix: 4,
 *   y: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * })
 * // @error: PublicKey.InvalidError: Value \`{"y":"1"}\` is not a valid public key.
 * // @error: Public key must contain:
 * // @error: - an `x` and `prefix` value (compressed)
 * // @error: - an `x`, `y`, and `prefix` value (uncompressed)
 * ```
 *
 * @param publicKey - The public key object to assert.
 */
function PublicKey_assert(publicKey, options = {}) {
    const { compressed } = options;
    const { prefix, x, y } = publicKey;
    // Uncompressed
    if (compressed === false ||
        (typeof x === 'bigint' && typeof y === 'bigint')) {
        if (prefix !== 4)
            throw new InvalidPrefixError({
                prefix,
                cause: new InvalidUncompressedPrefixError(),
            });
        return;
    }
    // Compressed
    if (compressed === true ||
        (typeof x === 'bigint' && typeof y === 'undefined')) {
        if (prefix !== 3 && prefix !== 2)
            throw new InvalidPrefixError({
                prefix,
                cause: new InvalidCompressedPrefixError(),
            });
        return;
    }
    // Unknown/invalid
    throw new InvalidError({ publicKey });
}
/**
 * Compresses a {@link ox#PublicKey.PublicKey}.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from({
 *   prefix: 4,
 *   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 *   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * })
 *
 * const compressed = PublicKey.compress(publicKey) // [!code focus]
 * // @log: {
 * // @log:   prefix: 3,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log: }
 * ```
 *
 * @param publicKey - The public key to compress.
 * @returns The compressed public key.
 */
function compress(publicKey) {
    const { x, y } = publicKey;
    return {
        prefix: y % 2n === 0n ? 2 : 3,
        x,
    };
}
/**
 * Instantiates a typed {@link ox#PublicKey.PublicKey} object from a {@link ox#PublicKey.PublicKey}, {@link ox#Bytes.Bytes}, or {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from({
 *   prefix: 4,
 *   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 *   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * })
 * // @log: {
 * // @log:   prefix: 4,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log:   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * // @log: }
 * ```
 *
 * @example
 * ### From Serialized
 *
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from('0x048318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5')
 * // @log: {
 * // @log:   prefix: 4,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log:   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * // @log: }
 * ```
 *
 * @param value - The public key value to instantiate.
 * @returns The instantiated {@link ox#PublicKey.PublicKey}.
 */
function PublicKey_from(value) {
    const publicKey = (() => {
        if (validate(value))
            return PublicKey_fromHex(value);
        if (Bytes_validate(value))
            return PublicKey_fromBytes(value);
        const { prefix, x, y } = value;
        if (typeof x === 'bigint' && typeof y === 'bigint')
            return { prefix: prefix ?? 0x04, x, y };
        return { prefix, x };
    })();
    PublicKey_assert(publicKey);
    return publicKey;
}
/**
 * Deserializes a {@link ox#PublicKey.PublicKey} from a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.fromBytes(new Uint8Array([128, 3, 131, ...]))
 * // @log: {
 * // @log:   prefix: 4,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log:   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * // @log: }
 * ```
 *
 * @param publicKey - The serialized public key.
 * @returns The deserialized public key.
 */
function PublicKey_fromBytes(publicKey) {
    return PublicKey_fromHex(fromBytes(publicKey));
}
/**
 * Deserializes a {@link ox#PublicKey.PublicKey} from a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.fromHex('0x8318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5')
 * // @log: {
 * // @log:   prefix: 4,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log:   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * // @log: }
 * ```
 *
 * @example
 * ### Deserializing a Compressed Public Key
 *
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.fromHex('0x038318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed75')
 * // @log: {
 * // @log:   prefix: 3,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log: }
 * ```
 *
 * @param publicKey - The serialized public key.
 * @returns The deserialized public key.
 */
function PublicKey_fromHex(publicKey) {
    if (publicKey.length !== 132 &&
        publicKey.length !== 130 &&
        publicKey.length !== 68)
        throw new InvalidSerializedSizeError({ publicKey });
    if (publicKey.length === 130) {
        const x = BigInt(slice(publicKey, 0, 32));
        const y = BigInt(slice(publicKey, 32, 64));
        return {
            prefix: 4,
            x,
            y,
        };
    }
    if (publicKey.length === 132) {
        const prefix = Number(slice(publicKey, 0, 1));
        const x = BigInt(slice(publicKey, 1, 33));
        const y = BigInt(slice(publicKey, 33, 65));
        return {
            prefix,
            x,
            y,
        };
    }
    const prefix = Number(slice(publicKey, 0, 1));
    const x = BigInt(slice(publicKey, 1, 33));
    return {
        prefix,
        x,
    };
}
/**
 * Serializes a {@link ox#PublicKey.PublicKey} to {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from({
 *   prefix: 4,
 *   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 *   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * })
 *
 * const bytes = PublicKey.toBytes(publicKey) // [!code focus]
 * // @log: Uint8Array [128, 3, 131, ...]
 * ```
 *
 * @param publicKey - The public key to serialize.
 * @returns The serialized public key.
 */
function PublicKey_toBytes(publicKey, options = {}) {
    return PublicKey_Bytes.fromHex(PublicKey_toHex(publicKey, options));
}
/**
 * Serializes a {@link ox#PublicKey.PublicKey} to {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from({
 *   prefix: 4,
 *   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 *   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * })
 *
 * const hex = PublicKey.toHex(publicKey) // [!code focus]
 * // @log: '0x048318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5'
 * ```
 *
 * @param publicKey - The public key to serialize.
 * @returns The serialized public key.
 */
function PublicKey_toHex(publicKey, options = {}) {
    PublicKey_assert(publicKey);
    const { prefix, x, y } = publicKey;
    const { includePrefix = true } = options;
    const publicKey_ = concat(includePrefix ? fromNumber(prefix, { size: 1 }) : '0x', fromNumber(x, { size: 32 }), 
    // If the public key is not compressed, add the y coordinate.
    typeof y === 'bigint' ? fromNumber(y, { size: 32 }) : '0x');
    return publicKey_;
}
/**
 * Validates a {@link ox#PublicKey.PublicKey}. Returns `true` if valid, `false` otherwise.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const valid = PublicKey.validate({
 *   prefix: 4,
 *   y: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * })
 * // @log: false
 * ```
 *
 * @param publicKey - The public key object to assert.
 */
function PublicKey_validate(publicKey, options = {}) {
    try {
        PublicKey_assert(publicKey, options);
        return true;
    }
    catch (error) {
        return false;
    }
}
/**
 * Thrown when a public key is invalid.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * PublicKey.assert({ y: 1n })
 * // @error: PublicKey.InvalidError: Value `{"y":1n}` is not a valid public key.
 * // @error: Public key must contain:
 * // @error: - an `x` and `prefix` value (compressed)
 * // @error: - an `x`, `y`, and `prefix` value (uncompressed)
 * ```
 */
class InvalidError extends BaseError {
    constructor({ publicKey }) {
        super(`Value \`${stringify(publicKey)}\` is not a valid public key.`, {
            metaMessages: [
                'Public key must contain:',
                '- an `x` and `prefix` value (compressed)',
                '- an `x`, `y`, and `prefix` value (uncompressed)',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidError'
        });
    }
}
/** Thrown when a public key has an invalid prefix. */
class InvalidPrefixError extends BaseError {
    constructor({ prefix, cause }) {
        super(`Prefix "${prefix}" is invalid.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidPrefixError'
        });
    }
}
/** Thrown when the public key has an invalid prefix for a compressed public key. */
class InvalidCompressedPrefixError extends BaseError {
    constructor() {
        super('Prefix must be 2 or 3 for compressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidCompressedPrefixError'
        });
    }
}
/** Thrown when the public key has an invalid prefix for an uncompressed public key. */
class InvalidUncompressedPrefixError extends BaseError {
    constructor() {
        super('Prefix must be 4 for uncompressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidUncompressedPrefixError'
        });
    }
}
/** Thrown when the public key has an invalid serialized size. */
class InvalidSerializedSizeError extends BaseError {
    constructor({ publicKey }) {
        super(`Value \`${publicKey}\` is an invalid public key size.`, {
            metaMessages: [
                'Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).',
                `Received ${size(from(publicKey))} bytes.`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidSerializedSizeError'
        });
    }
}
//# sourceMappingURL=PublicKey.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/WebCryptoP256.js
/* unused harmony import specifier */ var WebCryptoP256_Bytes;
/* unused harmony import specifier */ var PublicKey;



/**
 * Generates an ECDSA P256 key pair that includes:
 *
 * - a `privateKey` of type [`CryptoKey`](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey)
 *
 * - a `publicKey` of type {@link ox#Hex.Hex} or {@link ox#Bytes.Bytes}
 *
 * @example
 * ```ts twoslash
 * import { WebCryptoP256 } from 'ox'
 *
 * const { publicKey, privateKey } = await WebCryptoP256.createKeyPair()
 * // @log: {
 * // @log:   privateKey: CryptoKey {},
 * // @log:   publicKey: {
 * // @log:     x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log:     y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * // @log:     prefix: 4,
 * // @log:   },
 * // @log: }
 * ```
 *
 * @param options - Options for creating the key pair.
 * @returns The key pair.
 */
async function createKeyPair(options = {}) {
    const { extractable = false } = options;
    const keypair = await globalThis.crypto.subtle.generateKey({
        name: 'ECDSA',
        namedCurve: 'P-256',
    }, extractable, ['sign', 'verify']);
    const publicKey_raw = await globalThis.crypto.subtle.exportKey('raw', keypair.publicKey);
    const publicKey = PublicKey_from(new Uint8Array(publicKey_raw));
    return {
        privateKey: keypair.privateKey,
        publicKey,
    };
}
/**
 * Signs a payload with the provided `CryptoKey` private key and returns a P256 signature.
 *
 * @example
 * ```ts twoslash
 * import { WebCryptoP256 } from 'ox'
 *
 * const { privateKey } = await WebCryptoP256.createKeyPair()
 *
 * const signature = await WebCryptoP256.sign({ // [!code focus]
 *   payload: '0xdeadbeef', // [!code focus]
 *   privateKey, // [!code focus]
 * }) // [!code focus]
 * // @log: {
 * // @log:   r: 151231...4423n,
 * // @log:   s: 516123...5512n,
 * // @log: }
 * ```
 *
 * @param options - Options for signing the payload.
 * @returns The P256 ECDSA {@link ox#Signature.Signature}.
 */
async function WebCryptoP256_sign(options) {
    const { payload, privateKey } = options;
    const signature = await globalThis.crypto.subtle.sign({
        name: 'ECDSA',
        hash: 'SHA-256',
    }, privateKey, Bytes_from(payload));
    const signature_bytes = fromArray(new Uint8Array(signature));
    const r = Bytes_toBigInt(Bytes_slice(signature_bytes, 0, 32));
    let s = Bytes_toBigInt(Bytes_slice(signature_bytes, 32, 64));
    if (s > p256/* p256 */.s9.CURVE.n / 2n)
        s = p256/* p256 */.s9.CURVE.n - s;
    return { r, s };
}
/**
 * Verifies a payload was signed by the provided public key.
 *
 * @example
 *
 * ```ts twoslash
 * import { WebCryptoP256 } from 'ox'
 *
 * const { privateKey, publicKey } = await WebCryptoP256.createKeyPair()
 * const signature = await WebCryptoP256.sign({ payload: '0xdeadbeef', privateKey })
 *
 * const verified = await WebCryptoP256.verify({ // [!code focus]
 *   payload: '0xdeadbeef', // [!code focus]
 *   publicKey, // [!code focus]
 *   signature, // [!code focus]
 * }) // [!code focus]
 * // @log: true
 * ```
 *
 * @param options - The verification options.
 * @returns Whether the payload was signed by the provided public key.
 */
async function verify(options) {
    const { payload, signature } = options;
    const publicKey = await globalThis.crypto.subtle.importKey('raw', PublicKey.toBytes(options.publicKey), { name: 'ECDSA', namedCurve: 'P-256' }, true, ['verify']);
    return await globalThis.crypto.subtle.verify({
        name: 'ECDSA',
        hash: 'SHA-256',
    }, publicKey, WebCryptoP256_Bytes.concat(WebCryptoP256_Bytes.fromNumber(signature.r), WebCryptoP256_Bytes.fromNumber(signature.s)), WebCryptoP256_Bytes.from(payload));
}
//# sourceMappingURL=WebCryptoP256.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/Base64.js
/* unused harmony import specifier */ var Base64_Bytes;
/* unused harmony import specifier */ var Base64_Hex;


const Base64_encoder = /*#__PURE__*/ new TextEncoder();
const Base64_decoder = /*#__PURE__*/ new TextDecoder();
const integerToCharacter = /*#__PURE__*/ Object.fromEntries(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/').map((a, i) => [i, a.charCodeAt(0)]));
const characterToInteger = /*#__PURE__*/ {
    ...Object.fromEntries(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/').map((a, i) => [a.charCodeAt(0), i])),
    ['='.charCodeAt(0)]: 0,
    ['-'.charCodeAt(0)]: 62,
    ['_'.charCodeAt(0)]: 63,
};
/**
 * Encodes a {@link ox#Bytes.Bytes} to a Base64-encoded string (with optional padding and/or URL-safe characters).
 *
 * @example
 * ```ts twoslash
 * import { Base64, Bytes } from 'ox'
 *
 * const value = Base64.fromBytes(Bytes.fromString('hello world'))
 * // @log: 'aGVsbG8gd29ybGQ='
 * ```
 *
 * @example
 * ### No Padding
 *
 * Turn off [padding of encoded data](https://datatracker.ietf.org/doc/html/rfc4648#section-3.2) with the `pad` option:
 *
 * ```ts twoslash
 * import { Base64, Bytes } from 'ox'
 *
 * const value = Base64.fromBytes(Bytes.fromString('hello world'), { pad: false })
 * // @log: 'aGVsbG8gd29ybGQ'
 * ```
 *
 * ### URL-safe Encoding
 *
 * Turn on [URL-safe encoding](https://datatracker.ietf.org/doc/html/rfc4648#section-5) (Base64 URL) with the `url` option:
 *
 * ```ts twoslash
 * import { Base64, Bytes } from 'ox'
 *
 * const value = Base64.fromBytes(Bytes.fromString('hello wod'), { url: true })
 * // @log: 'aGVsbG8gd29_77-9ZA=='
 * ```
 *
 * @param value - The byte array to encode.
 * @param options - Encoding options.
 * @returns The Base64 encoded string.
 */
function Base64_fromBytes(value, options = {}) {
    const { pad = true, url = false } = options;
    const encoded = new Uint8Array(Math.ceil(value.length / 3) * 4);
    for (let i = 0, j = 0; j < value.length; i += 4, j += 3) {
        const y = (value[j] << 16) + (value[j + 1] << 8) + (value[j + 2] | 0);
        encoded[i] = integerToCharacter[y >> 18];
        encoded[i + 1] = integerToCharacter[(y >> 12) & 0x3f];
        encoded[i + 2] = integerToCharacter[(y >> 6) & 0x3f];
        encoded[i + 3] = integerToCharacter[y & 0x3f];
    }
    const k = value.length % 3;
    const end = Math.floor(value.length / 3) * 4 + (k && k + 1);
    let base64 = Base64_decoder.decode(new Uint8Array(encoded.buffer, 0, end));
    if (pad && k === 1)
        base64 += '==';
    if (pad && k === 2)
        base64 += '=';
    if (url)
        base64 = base64.replaceAll('+', '-').replaceAll('/', '_');
    return base64;
}
/**
 * Encodes a {@link ox#Hex.Hex} to a Base64-encoded string (with optional padding and/or URL-safe characters).
 *
 * @example
 * ```ts twoslash
 * import { Base64, Hex } from 'ox'
 *
 * const value = Base64.fromHex(Hex.fromString('hello world'))
 * // @log: 'aGVsbG8gd29ybGQ='
 * ```
 *
 * @example
 * ### No Padding
 *
 * Turn off [padding of encoded data](https://datatracker.ietf.org/doc/html/rfc4648#section-3.2) with the `pad` option:
 *
 * ```ts twoslash
 * import { Base64, Hex } from 'ox'
 *
 * const value = Base64.fromHex(Hex.fromString('hello world'), { pad: false })
 * // @log: 'aGVsbG8gd29ybGQ'
 * ```
 *
 * ### URL-safe Encoding
 *
 * Turn on [URL-safe encoding](https://datatracker.ietf.org/doc/html/rfc4648#section-5) (Base64 URL) with the `url` option:
 *
 * ```ts twoslash
 * import { Base64, Hex } from 'ox'
 *
 * const value = Base64.fromHex(Hex.fromString('hello wod'), { url: true })
 * // @log: 'aGVsbG8gd29_77-9ZA=='
 * ```
 *
 * @param value - The hex value to encode.
 * @param options - Encoding options.
 * @returns The Base64 encoded string.
 */
function Base64_fromHex(value, options = {}) {
    return Base64_fromBytes(Bytes_fromHex(value), options);
}
/**
 * Encodes a string to a Base64-encoded string (with optional padding and/or URL-safe characters).
 *
 * @example
 * ```ts twoslash
 * import { Base64 } from 'ox'
 *
 * const value = Base64.fromString('hello world')
 * // @log: 'aGVsbG8gd29ybGQ='
 * ```
 *
 * @example
 * ### No Padding
 *
 * Turn off [padding of encoded data](https://datatracker.ietf.org/doc/html/rfc4648#section-3.2) with the `pad` option:
 *
 * ```ts twoslash
 * import { Base64 } from 'ox'
 *
 * const value = Base64.fromString('hello world', { pad: false })
 * // @log: 'aGVsbG8gd29ybGQ'
 * ```
 *
 * ### URL-safe Encoding
 *
 * Turn on [URL-safe encoding](https://datatracker.ietf.org/doc/html/rfc4648#section-5) (Base64 URL) with the `url` option:
 *
 * ```ts twoslash
 * import { Base64 } from 'ox'
 *
 * const value = Base64.fromString('hello wod', { url: true })
 * // @log: 'aGVsbG8gd29_77-9ZA=='
 * ```
 *
 * @param value - The string to encode.
 * @param options - Encoding options.
 * @returns The Base64 encoded string.
 */
function Base64_fromString(value, options = {}) {
    return Base64_fromBytes(Base64_Bytes.fromString(value), options);
}
/**
 * Decodes a Base64-encoded string (with optional padding and/or URL-safe characters) to {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Base64, Bytes } from 'ox'
 *
 * const value = Base64.toBytes('aGVsbG8gd29ybGQ=')
 * // @log: Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100])
 * ```
 *
 * @param value - The string, hex value, or byte array to encode.
 * @returns The Base64 decoded {@link ox#Bytes.Bytes}.
 */
function Base64_toBytes(value) {
    const base64 = value.replace(/=+$/, '');
    const size = base64.length;
    const decoded = new Uint8Array(size + 3);
    Base64_encoder.encodeInto(base64 + '===', decoded);
    for (let i = 0, j = 0; i < base64.length; i += 4, j += 3) {
        const x = (characterToInteger[decoded[i]] << 18) +
            (characterToInteger[decoded[i + 1]] << 12) +
            (characterToInteger[decoded[i + 2]] << 6) +
            characterToInteger[decoded[i + 3]];
        decoded[j] = x >> 16;
        decoded[j + 1] = (x >> 8) & 0xff;
        decoded[j + 2] = x & 0xff;
    }
    const decodedSize = (size >> 2) * 3 + (size % 4 && (size % 4) - 1);
    return new Uint8Array(decoded.buffer, 0, decodedSize);
}
/**
 * Decodes a Base64-encoded string (with optional padding and/or URL-safe characters) to {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Base64, Hex } from 'ox'
 *
 * const value = Base64.toHex('aGVsbG8gd29ybGQ=')
 * // @log: 0x68656c6c6f20776f726c64
 * ```
 *
 * @param value - The string, hex value, or byte array to encode.
 * @returns The Base64 decoded {@link ox#Hex.Hex}.
 */
function Base64_toHex(value) {
    return Base64_Hex.fromBytes(Base64_toBytes(value));
}
/**
 * Decodes a Base64-encoded string (with optional padding and/or URL-safe characters) to a string.
 *
 * @example
 * ```ts twoslash
 * import { Base64 } from 'ox'
 *
 * const value = Base64.toString('aGVsbG8gd29ybGQ=')
 * // @log: 'hello world'
 * ```
 *
 * @param value - The string, hex value, or byte array to encode.
 * @returns The Base64 decoded string.
 */
function Base64_toString(value) {
    return Base64_Bytes.toString(Base64_toBytes(value));
}
//# sourceMappingURL=Base64.js.map
;// ./node_modules/@base-org/account/node_modules/ox/node_modules/@noble/hashes/esm/utils.js
/* unused harmony import specifier */ var utils_crypto;
/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.

/** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
/** Asserts something is positive integer. */
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error('positive integer expected, got ' + n);
}
/** Asserts something is Uint8Array. */
function abytes(b, ...lengths) {
    if (!isBytes(b))
        throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function')
        throw new Error('Hash should be wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */
function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
/** Cast u8 / u16 / u32 to u8. */
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** Cast u8 / u16 / u32 to u32. */
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
/** Zeroize a byte array. Warning: JS provides no guarantees. */
function clean(...arrays) {
    for (let i = 0; i < arrays.length; i++) {
        arrays[i].fill(0);
    }
}
/** Create DataView of an array for easy byte-level manipulation. */
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */
function rotr(word, shift) {
    return (word << (32 - shift)) | (word >>> shift);
}
/** The rotate left (circular left shift) operation for uint32 */
function rotl(word, shift) {
    return (word << shift) | ((word >>> (32 - shift)) >>> 0);
}
/** Is current platform little-endian? Most are. Big-Endian platform: IBM */
const isLE = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44)()));
/** The byte swap operation for uint32 */
function byteSwap(word) {
    return (((word << 24) & 0xff000000) |
        ((word << 8) & 0xff0000) |
        ((word >>> 8) & 0xff00) |
        ((word >>> 24) & 0xff));
}
/** Conditionally byte swap if on a big-endian platform */
const swap8IfBE = (/* unused pure expression or super */ null && (isLE
    ? (n) => n
    : (n) => byteSwap(n)));
/** @deprecated */
const byteSwapIfBE = (/* unused pure expression or super */ null && (swap8IfBE));
/** In place byte swap for Uint32Array */
function byteSwap32(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
const swap32IfBE = (/* unused pure expression or super */ null && (isLE
    ? (u) => u
    : byteSwap32));
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => 
// @ts-ignore
typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')()));
// Array where index 0xf0 (240) is mapped to string 'f0'
const utils_hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * Convert byte array to hex string. Uses built-in function, when available.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin)
        return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += utils_hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
        return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F)
        return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f)
        return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * Convert hex string to byte array. Uses built-in function, when available.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin)
        return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
/**
 * There is no setImmediate in browser and setTimeout is slow.
 * Call of async fn will return Promise, which will be fullfiled only on
 * next scheduler queue processing step and this is exactly what we need.
 */
const nextTick = async () => { };
/** Returns control to thread each 'tick' ms to avoid blocking. */
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
            continue;
        await nextTick();
        ts += diff;
    }
}
/**
 * Converts string to bytes using UTF8 encoding.
 * @example utf8ToBytes('abc') // Uint8Array.from([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Converts bytes to string using UTF8 encoding.
 * @example bytesToUtf8(Uint8Array.from([97, 98, 99])) // 'abc'
 */
function bytesToUtf8(bytes) {
    return new TextDecoder().decode(bytes);
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function utils_toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    abytes(data);
    return data;
}
/**
 * Helper for KDFs: consumes uint8array or string.
 * When string is passed, does utf8 decoding, using TextDecoder.
 */
function kdfInputToBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    abytes(data);
    return data;
}
/** Copies several Uint8Arrays into one. */
function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
function checkOpts(defaults, opts) {
    if (opts !== undefined && {}.toString.call(opts) !== '[object Object]')
        throw new Error('options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
/** For runtime check if class implements interface */
class Hash {
}
/** Wraps hash function, creating an interface on top of it */
function createHasher(hashCons) {
    const hashC = (msg) => hashCons().update(utils_toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
}
function createOptHasher(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(utils_toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
function createXOFer(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(utils_toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
const wrapConstructor = (/* unused pure expression or super */ null && (createHasher));
const wrapConstructorWithOpts = (/* unused pure expression or super */ null && (createOptHasher));
const wrapXOFConstructorWithOpts = (/* unused pure expression or super */ null && (createXOFer));
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
function randomBytes(bytesLength = 32) {
    if (utils_crypto && typeof utils_crypto.getRandomValues === 'function') {
        return utils_crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (utils_crypto && typeof utils_crypto.randomBytes === 'function') {
        return Uint8Array.from(utils_crypto.randomBytes(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
}
//# sourceMappingURL=utils.js.map
;// ./node_modules/@base-org/account/node_modules/ox/node_modules/@noble/hashes/esm/_md.js
/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */

/** Polyfill for Safari 14. https://caniuse.com/mdn-javascript_builtins_dataview_setbiguint64 */
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function')
        return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number((value >> _32n) & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
/** Choice: a ? b : c */
function Chi(a, b, c) {
    return (a & b) ^ (~a & c);
}
/** Majority function, true if any two inputs is true. */
function Maj(a, b, c) {
    return (a & b) ^ (a & c) ^ (b & c);
}
/**
 * Merkle-Damgard hash construction base class.
 * Could be used to create MD5, RIPEMD, SHA1, SHA2.
 */
class HashMD extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.buffer = new Uint8Array(blockLen);
        this.view = createView(this.buffer);
    }
    update(data) {
        aexists(this);
        data = utils_toBytes(data);
        abytes(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = createView(data);
                for (; blockLen <= len - pos; pos += blockLen)
                    this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        aexists(this);
        aoutput(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        clean(this.buffer.subarray(pos));
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for (let i = pos; i < blockLen; i++)
            buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = createView(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
            throw new Error('_sha2: outputLen bigger than state');
        for (let i = 0; i < outLen; i++)
            oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        if (length % blockLen)
            to.buffer.set(buffer);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
}
/**
 * Initial SHA-2 state: fractional parts of square roots of first 16 primes 2..53.
 * Check out `test/misc/sha2-gen-iv.js` for recomputation guide.
 */
/** Initial SHA256 state. Bits 0..32 of frac part of sqrt of primes 2..19 */
const SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
]);
/** Initial SHA224 state. Bits 32..64 of frac part of sqrt of primes 23..53 */
const SHA224_IV = /* @__PURE__ */ Uint32Array.from([
    0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4,
]);
/** Initial SHA384 state. Bits 0..64 of frac part of sqrt of primes 23..53 */
const SHA384_IV = /* @__PURE__ */ Uint32Array.from([
    0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939,
    0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4,
]);
/** Initial SHA512 state. Bits 0..64 of frac part of sqrt of primes 2..19 */
const SHA512_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1,
    0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179,
]);
//# sourceMappingURL=_md.js.map
;// ./node_modules/@base-org/account/node_modules/ox/node_modules/@noble/hashes/esm/_u64.js
/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for (let i = 0; i < len; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s) => h >>> s;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l) => l;
const rotr32L = (h, _l) => h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
// prettier-ignore

// prettier-ignore
const u64 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};
/* harmony default export */ const _u64 = ((/* unused pure expression or super */ null && (u64)));
//# sourceMappingURL=_u64.js.map
;// ./node_modules/@base-org/account/node_modules/ox/node_modules/@noble/hashes/esm/sha2.js
/* unused harmony import specifier */ var sha2_createHasher;
/**
 * SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
 * SHA256 is the fastest hash implementable in JS, even faster than Blake3.
 * Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
 * [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 */



/**
 * Round constants:
 * First 32 bits of fractional parts of the cube roots of the first 64 primes 2..311)
 */
// prettier-ignore
const SHA256_K = /* @__PURE__ */ Uint32Array.from([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
/** Reusable temporary buffer. "W" comes straight from spec. */
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends HashMD {
    constructor(outputLen = 32) {
        super(64, outputLen, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = SHA256_IV[0] | 0;
        this.B = SHA256_IV[1] | 0;
        this.C = SHA256_IV[2] | 0;
        this.D = SHA256_IV[3] | 0;
        this.E = SHA256_IV[4] | 0;
        this.F = SHA256_IV[5] | 0;
        this.G = SHA256_IV[6] | 0;
        this.H = SHA256_IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ (W15 >>> 3);
            const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ (W2 >>> 10);
            SHA256_W[i] = (s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16]) | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
            const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
            const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
            const T2 = (sigma0 + Maj(A, B, C)) | 0;
            H = G;
            G = F;
            F = E;
            E = (D + T1) | 0;
            D = C;
            C = B;
            B = A;
            A = (T1 + T2) | 0;
        }
        // Add the compressed chunk to the current hash value
        A = (A + this.A) | 0;
        B = (B + this.B) | 0;
        C = (C + this.C) | 0;
        D = (D + this.D) | 0;
        E = (E + this.E) | 0;
        F = (F + this.F) | 0;
        G = (G + this.G) | 0;
        H = (H + this.H) | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        clean(SHA256_W);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        clean(this.buffer);
    }
}
class SHA224 extends SHA256 {
    constructor() {
        super(28);
        this.A = SHA224_IV[0] | 0;
        this.B = SHA224_IV[1] | 0;
        this.C = SHA224_IV[2] | 0;
        this.D = SHA224_IV[3] | 0;
        this.E = SHA224_IV[4] | 0;
        this.F = SHA224_IV[5] | 0;
        this.G = SHA224_IV[6] | 0;
        this.H = SHA224_IV[7] | 0;
    }
}
// SHA2-512 is slower than sha256 in js because u64 operations are slow.
// Round contants
// First 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409
// prettier-ignore
const K512 = /* @__PURE__ */ (() => split([
    '0x428a2f98d728ae22', '0x7137449123ef65cd', '0xb5c0fbcfec4d3b2f', '0xe9b5dba58189dbbc',
    '0x3956c25bf348b538', '0x59f111f1b605d019', '0x923f82a4af194f9b', '0xab1c5ed5da6d8118',
    '0xd807aa98a3030242', '0x12835b0145706fbe', '0x243185be4ee4b28c', '0x550c7dc3d5ffb4e2',
    '0x72be5d74f27b896f', '0x80deb1fe3b1696b1', '0x9bdc06a725c71235', '0xc19bf174cf692694',
    '0xe49b69c19ef14ad2', '0xefbe4786384f25e3', '0x0fc19dc68b8cd5b5', '0x240ca1cc77ac9c65',
    '0x2de92c6f592b0275', '0x4a7484aa6ea6e483', '0x5cb0a9dcbd41fbd4', '0x76f988da831153b5',
    '0x983e5152ee66dfab', '0xa831c66d2db43210', '0xb00327c898fb213f', '0xbf597fc7beef0ee4',
    '0xc6e00bf33da88fc2', '0xd5a79147930aa725', '0x06ca6351e003826f', '0x142929670a0e6e70',
    '0x27b70a8546d22ffc', '0x2e1b21385c26c926', '0x4d2c6dfc5ac42aed', '0x53380d139d95b3df',
    '0x650a73548baf63de', '0x766a0abb3c77b2a8', '0x81c2c92e47edaee6', '0x92722c851482353b',
    '0xa2bfe8a14cf10364', '0xa81a664bbc423001', '0xc24b8b70d0f89791', '0xc76c51a30654be30',
    '0xd192e819d6ef5218', '0xd69906245565a910', '0xf40e35855771202a', '0x106aa07032bbd1b8',
    '0x19a4c116b8d2d0c8', '0x1e376c085141ab53', '0x2748774cdf8eeb99', '0x34b0bcb5e19b48a8',
    '0x391c0cb3c5c95a63', '0x4ed8aa4ae3418acb', '0x5b9cca4f7763e373', '0x682e6ff3d6b2b8a3',
    '0x748f82ee5defb2fc', '0x78a5636f43172f60', '0x84c87814a1f0ab72', '0x8cc702081a6439ec',
    '0x90befffa23631e28', '0xa4506cebde82bde9', '0xbef9a3f7b2c67915', '0xc67178f2e372532b',
    '0xca273eceea26619c', '0xd186b8c721c0c207', '0xeada7dd6cde0eb1e', '0xf57d4f7fee6ed178',
    '0x06f067aa72176fba', '0x0a637dc5a2c898a6', '0x113f9804bef90dae', '0x1b710b35131c471b',
    '0x28db77f523047d84', '0x32caab7b40c72493', '0x3c9ebe0a15c9bebc', '0x431d67c49c100d4c',
    '0x4cc5d4becb3e42b6', '0x597f299cfc657e2a', '0x5fcb6fab3ad6faec', '0x6c44198c4a475817'
].map(n => BigInt(n))))();
const SHA512_Kh = /* @__PURE__ */ (() => K512[0])();
const SHA512_Kl = /* @__PURE__ */ (() => K512[1])();
// Reusable temporary buffers
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA512 extends HashMD {
    constructor(outputLen = 64) {
        super(128, outputLen, 16, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = SHA512_IV[0] | 0;
        this.Al = SHA512_IV[1] | 0;
        this.Bh = SHA512_IV[2] | 0;
        this.Bl = SHA512_IV[3] | 0;
        this.Ch = SHA512_IV[4] | 0;
        this.Cl = SHA512_IV[5] | 0;
        this.Dh = SHA512_IV[6] | 0;
        this.Dl = SHA512_IV[7] | 0;
        this.Eh = SHA512_IV[8] | 0;
        this.El = SHA512_IV[9] | 0;
        this.Fh = SHA512_IV[10] | 0;
        this.Fl = SHA512_IV[11] | 0;
        this.Gh = SHA512_IV[12] | 0;
        this.Gl = SHA512_IV[13] | 0;
        this.Hh = SHA512_IV[14] | 0;
        this.Hl = SHA512_IV[15] | 0;
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4) {
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32((offset += 4));
        }
        for (let i = 16; i < 80; i++) {
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = rotrSH(W15h, W15l, 1) ^ rotrSH(W15h, W15l, 8) ^ shrSH(W15h, W15l, 7);
            const s0l = rotrSL(W15h, W15l, 1) ^ rotrSL(W15h, W15l, 8) ^ shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = rotrSH(W2h, W2l, 19) ^ rotrBH(W2h, W2l, 61) ^ shrSH(W2h, W2l, 6);
            const s1l = rotrSL(W2h, W2l, 19) ^ rotrBL(W2h, W2l, 61) ^ shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for (let i = 0; i < 80; i++) {
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = rotrSH(Eh, El, 14) ^ rotrSH(Eh, El, 18) ^ rotrBH(Eh, El, 41);
            const sigma1l = rotrSL(Eh, El, 14) ^ rotrSL(Eh, El, 18) ^ rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = (Eh & Fh) ^ (~Eh & Gh);
            const CHIl = (El & Fl) ^ (~El & Gl);
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = rotrSH(Ah, Al, 28) ^ rotrBH(Ah, Al, 34) ^ rotrBH(Ah, Al, 39);
            const sigma0l = rotrSL(Ah, Al, 28) ^ rotrBL(Ah, Al, 34) ^ rotrBL(Ah, Al, 39);
            const MAJh = (Ah & Bh) ^ (Ah & Ch) ^ (Bh & Ch);
            const MAJl = (Al & Bl) ^ (Al & Cl) ^ (Bl & Cl);
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = add3L(T1l, sigma0l, MAJl);
            Ah = add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        clean(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        clean(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
class SHA384 extends SHA512 {
    constructor() {
        super(48);
        this.Ah = SHA384_IV[0] | 0;
        this.Al = SHA384_IV[1] | 0;
        this.Bh = SHA384_IV[2] | 0;
        this.Bl = SHA384_IV[3] | 0;
        this.Ch = SHA384_IV[4] | 0;
        this.Cl = SHA384_IV[5] | 0;
        this.Dh = SHA384_IV[6] | 0;
        this.Dl = SHA384_IV[7] | 0;
        this.Eh = SHA384_IV[8] | 0;
        this.El = SHA384_IV[9] | 0;
        this.Fh = SHA384_IV[10] | 0;
        this.Fl = SHA384_IV[11] | 0;
        this.Gh = SHA384_IV[12] | 0;
        this.Gl = SHA384_IV[13] | 0;
        this.Hh = SHA384_IV[14] | 0;
        this.Hl = SHA384_IV[15] | 0;
    }
}
/**
 * Truncated SHA512/256 and SHA512/224.
 * SHA512_IV is XORed with 0xa5a5a5a5a5a5a5a5, then used as "intermediary" IV of SHA512/t.
 * Then t hashes string to produce result IV.
 * See `test/misc/sha2-gen-iv.js`.
 */
/** SHA512/224 IV */
const T224_IV = /* @__PURE__ */ Uint32Array.from([
    0x8c3d37c8, 0x19544da2, 0x73e19966, 0x89dcd4d6, 0x1dfab7ae, 0x32ff9c82, 0x679dd514, 0x582f9fcf,
    0x0f6d2b69, 0x7bd44da8, 0x77e36f73, 0x04c48942, 0x3f9d85a8, 0x6a1d36c8, 0x1112e6ad, 0x91d692a1,
]);
/** SHA512/256 IV */
const T256_IV = /* @__PURE__ */ Uint32Array.from([
    0x22312194, 0xfc2bf72c, 0x9f555fa3, 0xc84c64c2, 0x2393b86b, 0x6f53b151, 0x96387719, 0x5940eabd,
    0x96283ee2, 0xa88effe3, 0xbe5e1e25, 0x53863992, 0x2b0199fc, 0x2c85b8aa, 0x0eb72ddc, 0x81c52ca2,
]);
class SHA512_224 extends SHA512 {
    constructor() {
        super(28);
        this.Ah = T224_IV[0] | 0;
        this.Al = T224_IV[1] | 0;
        this.Bh = T224_IV[2] | 0;
        this.Bl = T224_IV[3] | 0;
        this.Ch = T224_IV[4] | 0;
        this.Cl = T224_IV[5] | 0;
        this.Dh = T224_IV[6] | 0;
        this.Dl = T224_IV[7] | 0;
        this.Eh = T224_IV[8] | 0;
        this.El = T224_IV[9] | 0;
        this.Fh = T224_IV[10] | 0;
        this.Fl = T224_IV[11] | 0;
        this.Gh = T224_IV[12] | 0;
        this.Gl = T224_IV[13] | 0;
        this.Hh = T224_IV[14] | 0;
        this.Hl = T224_IV[15] | 0;
    }
}
class SHA512_256 extends SHA512 {
    constructor() {
        super(32);
        this.Ah = T256_IV[0] | 0;
        this.Al = T256_IV[1] | 0;
        this.Bh = T256_IV[2] | 0;
        this.Bl = T256_IV[3] | 0;
        this.Ch = T256_IV[4] | 0;
        this.Cl = T256_IV[5] | 0;
        this.Dh = T256_IV[6] | 0;
        this.Dl = T256_IV[7] | 0;
        this.Eh = T256_IV[8] | 0;
        this.El = T256_IV[9] | 0;
        this.Fh = T256_IV[10] | 0;
        this.Fl = T256_IV[11] | 0;
        this.Gh = T256_IV[12] | 0;
        this.Gl = T256_IV[13] | 0;
        this.Hh = T256_IV[14] | 0;
        this.Hl = T256_IV[15] | 0;
    }
}
/**
 * SHA2-256 hash function from RFC 4634.
 *
 * It is the fastest JS hash, even faster than Blake3.
 * To break sha256 using birthday attack, attackers need to try 2^128 hashes.
 * BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
 */
const sha256 = /* @__PURE__ */ createHasher(() => new SHA256());
/** SHA2-224 hash function from RFC 4634 */
const sha224 = /* @__PURE__ */ (/* unused pure expression or super */ null && (sha2_createHasher(() => new SHA224())));
/** SHA2-512 hash function from RFC 4634. */
const sha512 = /* @__PURE__ */ (/* unused pure expression or super */ null && (sha2_createHasher(() => new SHA512())));
/** SHA2-384 hash function from RFC 4634. */
const sha384 = /* @__PURE__ */ (/* unused pure expression or super */ null && (sha2_createHasher(() => new SHA384())));
/**
 * SHA2-512/256 "truncated" hash function, with improved resistance to length extension attacks.
 * See the paper on [truncated SHA512](https://eprint.iacr.org/2010/548.pdf).
 */
const sha512_256 = /* @__PURE__ */ (/* unused pure expression or super */ null && (sha2_createHasher(() => new SHA512_256())));
/**
 * SHA2-512/224 "truncated" hash function, with improved resistance to length extension attacks.
 * See the paper on [truncated SHA512](https://eprint.iacr.org/2010/548.pdf).
 */
const sha512_224 = /* @__PURE__ */ (/* unused pure expression or super */ null && (sha2_createHasher(() => new SHA512_224())));
//# sourceMappingURL=sha2.js.map
;// ./node_modules/@base-org/account/node_modules/ox/node_modules/@noble/hashes/esm/sha256.js
/* unused harmony import specifier */ var SHA256n;
/* unused harmony import specifier */ var SHA224n;
/* unused harmony import specifier */ var sha224n;
/**
 * SHA2-256 a.k.a. sha256. In JS, it is the fastest hash, even faster than Blake3.
 *
 * To break sha256 using birthday attack, attackers need to try 2^128 hashes.
 * BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
 *
 * Check out [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 * @deprecated
 */

/** @deprecated Use import from `noble/hashes/sha2` module */
const sha256_SHA256 = (/* unused pure expression or super */ null && (SHA256n));
/** @deprecated Use import from `noble/hashes/sha2` module */
const sha256_sha256 = sha256;
/** @deprecated Use import from `noble/hashes/sha2` module */
const sha256_SHA224 = (/* unused pure expression or super */ null && (SHA224n));
/** @deprecated Use import from `noble/hashes/sha2` module */
const sha256_sha224 = (/* unused pure expression or super */ null && (sha224n));
//# sourceMappingURL=sha256.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/Hash.js
/* unused harmony import specifier */ var noble_ripemd160;
/* unused harmony import specifier */ var noble_keccak256;
/* unused harmony import specifier */ var Hash_Bytes;
/* unused harmony import specifier */ var Hash_Hex;





/**
 * Calculates the [Keccak256](https://en.wikipedia.org/wiki/SHA-3) hash of a {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 *
 * This function is a re-export of `keccak_256` from [`@noble/hashes`](https://github.com/paulmillr/noble-hashes), an audited & minimal JS hashing library.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.keccak256('0xdeadbeef')
 * // @log: '0xd4fd4e189132273036449fc9e11198c739161b4c0116a9a2dccdfa1c492006f1'
 * ```
 *
 * @example
 * ### Calculate Hash of a String
 *
 * ```ts twoslash
 * import { Hash, Hex } from 'ox'
 *
 * Hash.keccak256(Hex.fromString('hello world'))
 * // @log: '0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0'
 * ```
 *
 * @example
 * ### Configure Return Type
 *
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.keccak256('0xdeadbeef', { as: 'Bytes' })
 * // @log: Uint8Array [...]
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 * @param options - Options.
 * @returns Keccak256 hash.
 */
function keccak256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = noble_keccak256(Hash_Bytes.from(value));
    if (as === 'Bytes')
        return bytes;
    return Hash_Hex.fromBytes(bytes);
}
/**
 * Calculates the [Ripemd160](https://en.wikipedia.org/wiki/RIPEMD) hash of a {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 *
 * This function is a re-export of `ripemd160` from [`@noble/hashes`](https://github.com/paulmillr/noble-hashes), an audited & minimal JS hashing library.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.ripemd160('0xdeadbeef')
 * // '0x226821c2f5423e11fe9af68bd285c249db2e4b5a'
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 * @param options - Options.
 * @returns Ripemd160 hash.
 */
function ripemd160(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = noble_ripemd160(Hash_Bytes.from(value));
    if (as === 'Bytes')
        return bytes;
    return Hash_Hex.fromBytes(bytes);
}
/**
 * Calculates the [Sha256](https://en.wikipedia.org/wiki/SHA-256) hash of a {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 *
 * This function is a re-export of `sha256` from [`@noble/hashes`](https://github.com/paulmillr/noble-hashes), an audited & minimal JS hashing library.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.sha256('0xdeadbeef')
 * // '0x5f78c33274e43fa9de5659265c1d917e25c03722dcb0b8d27db8d5feaa813953'
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 * @param options - Options.
 * @returns Sha256 hash.
 */
function Hash_sha256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = sha256_sha256(Bytes_from(value));
    if (as === 'Bytes')
        return bytes;
    return fromBytes(bytes);
}
/**
 * Checks if a string is a valid hash value.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.validate('0x')
 * // @log: false
 *
 * Hash.validate('0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0')
 * // @log: true
 * ```
 *
 * @param value - Value to check.
 * @returns Whether the value is a valid hash.
 */
function Hash_validate(value) {
    return Hash_Hex.validate(value) && Hash_Hex.size(value) === 32;
}
//# sourceMappingURL=Hash.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/WebAuthnP256.js
/* unused harmony import specifier */ var Base64;
/* unused harmony import specifier */ var WebAuthnP256_Bytes;
/* unused harmony import specifier */ var WebAuthnP256_Hash;
/* unused harmony import specifier */ var WebAuthnP256_Hex;
/* unused harmony import specifier */ var P256;
/* unused harmony import specifier */ var WebAuthnP256_internal;







const createChallenge = Uint8Array.from([
    105, 171, 180, 181, 160, 222, 75, 198, 42, 42, 32, 31, 141, 37, 186, 233,
]);
/**
 * Creates a new WebAuthn P256 Credential, which can be stored and later used for signing.
 *
 * @example
 * ```ts twoslash
 * import { WebAuthnP256 } from 'ox'
 *
 * const credential = await WebAuthnP256.createCredential({ name: 'Example' }) // [!code focus]
 * // @log: {
 * // @log:   id: 'oZ48...',
 * // @log:   publicKey: { x: 51421...5123n, y: 12345...6789n },
 * // @log:   raw: PublicKeyCredential {},
 * // @log: }
 *
 * const { metadata, signature } = await WebAuthnP256.sign({
 *   credentialId: credential.id,
 *   challenge: '0xdeadbeef',
 * })
 * ```
 *
 * @param options - Credential creation options.
 * @returns A WebAuthn P256 credential.
 */
async function createCredential(options) {
    const { createFn = window.navigator.credentials.create.bind(window.navigator.credentials), ...rest } = options;
    const creationOptions = getCredentialCreationOptions(rest);
    try {
        const credential = (await createFn(creationOptions));
        if (!credential)
            throw new CredentialCreationFailedError();
        const response = credential.response;
        const publicKey = await WebAuthnP256_internal.parseCredentialPublicKey(response);
        return {
            id: credential.id,
            publicKey,
            raw: credential,
        };
    }
    catch (error) {
        throw new CredentialCreationFailedError({
            cause: error,
        });
    }
}
/**
 * Gets the authenticator data which contains information about the
 * processing of an authenticator request (ie. from `WebAuthnP256.sign`).
 *
 * :::warning
 *
 * This function is mainly for testing purposes or for manually constructing
 * autenticator data. In most cases you will not need this function.
 * `authenticatorData` is typically returned as part of the
 * {@link ox#WebAuthnP256.(sign:function)} response (ie. an authenticator response).
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { WebAuthnP256 } from 'ox'
 *
 * const authenticatorData = WebAuthnP256.getAuthenticatorData({
 *   rpId: 'example.com',
 *   signCount: 420,
 * })
 * // @log: "0xa379a6f6eeafb9a55e378c118034e2751e682fab9f2d30ab13d2125586ce194705000001a4"
 * ```
 *
 * @param options - Options to construct the authenticator data.
 * @returns The authenticator data.
 */
function getAuthenticatorData(options = {}) {
    const { flag = 5, rpId = window.location.hostname, signCount = 0 } = options;
    const rpIdHash = Hash_sha256(fromString(rpId));
    const flag_bytes = fromNumber(flag, { size: 1 });
    const signCount_bytes = fromNumber(signCount, { size: 4 });
    return concat(rpIdHash, flag_bytes, signCount_bytes);
}
/**
 * Constructs the Client Data in stringified JSON format which represents client data that
 * was passed to `credentials.get()` in {@link ox#WebAuthnP256.(sign:function)}.
 *
 * :::warning
 *
 * This function is mainly for testing purposes or for manually constructing
 * client data. In most cases you will not need this function.
 * `clientDataJSON` is typically returned as part of the
 * {@link ox#WebAuthnP256.(sign:function)} response (ie. an authenticator response).
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { WebAuthnP256 } from 'ox'
 *
 * const clientDataJSON = WebAuthnP256.getClientDataJSON({
 *   challenge: '0xdeadbeef',
 *   origin: 'https://example.com',
 * })
 * // @log: "{"type":"webauthn.get","challenge":"3q2-7w","origin":"https://example.com","crossOrigin":false}"
 * ```
 *
 * @param options - Options to construct the client data.
 * @returns The client data.
 */
function getClientDataJSON(options) {
    const { challenge, crossOrigin = false, extraClientData, origin = window.location.origin, } = options;
    return JSON.stringify({
        type: 'webauthn.get',
        challenge: Base64_fromHex(challenge, { url: true, pad: false }),
        origin,
        crossOrigin,
        ...extraClientData,
    });
}
/**
 * Returns the creation options for a P256 WebAuthn Credential to be used with
 * the Web Authentication API.
 *
 * @example
 * ```ts twoslash
 * import { WebAuthnP256 } from 'ox'
 *
 * const options = WebAuthnP256.getCredentialCreationOptions({ name: 'Example' })
 *
 * const credential = await window.navigator.credentials.create(options)
 * ```
 *
 * @param options - Options.
 * @returns The credential creation options.
 */
function getCredentialCreationOptions(options) {
    const { attestation = 'none', authenticatorSelection = {
        residentKey: 'preferred',
        requireResidentKey: false,
        userVerification: 'required',
    }, challenge = createChallenge, excludeCredentialIds, name: name_, rp = {
        id: window.location.hostname,
        name: window.document.title,
    }, user, extensions, } = options;
    const name = (user?.name ?? name_);
    return {
        publicKey: {
            attestation,
            authenticatorSelection,
            challenge,
            ...(excludeCredentialIds
                ? {
                    excludeCredentials: excludeCredentialIds?.map((id) => ({
                        id: Base64.toBytes(id),
                        type: 'public-key',
                    })),
                }
                : {}),
            pubKeyCredParams: [
                {
                    type: 'public-key',
                    alg: -7, // p256
                },
            ],
            rp,
            user: {
                id: user?.id ?? WebAuthnP256_Hash.keccak256(WebAuthnP256_Bytes.fromString(name), { as: 'Bytes' }),
                name,
                displayName: user?.displayName ?? name,
            },
            extensions,
        },
    };
}
/**
 * Returns the request options to sign a challenge with the Web Authentication API.
 *
 * @example
 * ```ts twoslash
 * import { WebAuthnP256 } from 'ox'
 *
 * const options = WebAuthnP256.getCredentialRequestOptions({
 *   challenge: '0xdeadbeef',
 * })
 *
 * const credential = await window.navigator.credentials.get(options)
 * ```
 *
 * @param options - Options.
 * @returns The credential request options.
 */
function getCredentialRequestOptions(options) {
    const { credentialId, challenge, rpId = window.location.hostname, userVerification = 'required', } = options;
    return {
        publicKey: {
            ...(credentialId
                ? {
                    allowCredentials: [
                        {
                            id: Base64.toBytes(credentialId),
                            type: 'public-key',
                        },
                    ],
                }
                : {}),
            challenge: WebAuthnP256_Bytes.fromHex(challenge),
            rpId,
            userVerification,
        },
    };
}
/**
 * Constructs the final digest that was signed and computed by the authenticator. This payload includes
 * the cryptographic `challenge`, as well as authenticator metadata (`authenticatorData` + `clientDataJSON`).
 * This value can be also used with raw P256 verification (such as {@link ox#P256.(verify:function)} or
 * {@link ox#WebCryptoP256.(verify:function)}).
 *
 * :::warning
 *
 * This function is mainly for testing purposes or for manually constructing
 * signing payloads. In most cases you will not need this function and
 * instead use {@link ox#WebAuthnP256.(sign:function)}.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { WebAuthnP256, WebCryptoP256 } from 'ox'
 *
 * const { metadata, payload } = WebAuthnP256.getSignPayload({ // [!code focus]
 *   challenge: '0xdeadbeef', // [!code focus]
 * }) // [!code focus]
 * // @log: {
 * // @log:   metadata: {
 * // @log:     authenticatorData: "0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000",
 * // @log:     challengeIndex: 23,
 * // @log:     clientDataJSON: "{"type":"webauthn.get","challenge":"9jEFijuhEWrM4SOW-tChJbUEHEP44VcjcJ-Bqo1fTM8","origin":"http://localhost:5173","crossOrigin":false}",
 * // @log:     typeIndex: 1,
 * // @log:     userVerificationRequired: true,
 * // @log:   },
 * // @log:   payload: "0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d9763050000000045086dcb06a5f234db625bcdc94e657f86b76b6fd3eb9c30543eabc1e577a4b0",
 * // @log: }
 *
 * const { publicKey, privateKey } = await WebCryptoP256.createKeyPair()
 *
 * const signature = await WebCryptoP256.sign({
 *   payload,
 *   privateKey,
 * })
 * ```
 *
 * @param options - Options to construct the signing payload.
 * @returns The signing payload.
 */
function getSignPayload(options) {
    const { challenge, crossOrigin, extraClientData, flag, origin, rpId, signCount, userVerification = 'required', } = options;
    const authenticatorData = getAuthenticatorData({
        flag,
        rpId,
        signCount,
    });
    const clientDataJSON = getClientDataJSON({
        challenge,
        crossOrigin,
        extraClientData,
        origin,
    });
    const clientDataJSONHash = Hash_sha256(fromString(clientDataJSON));
    const challengeIndex = clientDataJSON.indexOf('"challenge"');
    const typeIndex = clientDataJSON.indexOf('"type"');
    const metadata = {
        authenticatorData,
        clientDataJSON,
        challengeIndex,
        typeIndex,
        userVerificationRequired: userVerification === 'required',
    };
    const payload = concat(authenticatorData, clientDataJSONHash);
    return { metadata, payload };
}
/**
 * Signs a challenge using a stored WebAuthn P256 Credential. If no Credential is provided,
 * a prompt will be displayed for the user to select an existing Credential
 * that was previously registered.
 *
 * @example
 * ```ts twoslash
 * import { WebAuthnP256 } from 'ox'
 *
 * const credential = await WebAuthnP256.createCredential({
 *   name: 'Example',
 * })
 *
 * const { metadata, signature } = await WebAuthnP256.sign({ // [!code focus]
 *   credentialId: credential.id, // [!code focus]
 *   challenge: '0xdeadbeef', // [!code focus]
 * }) // [!code focus]
 * // @log: {
 * // @log:   metadata: {
 * // @log:     authenticatorData: '0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000',
 * // @log:     clientDataJSON: '{"type":"webauthn.get","challenge":"9jEFijuhEWrM4SOW-tChJbUEHEP44VcjcJ-Bqo1fTM8","origin":"http://localhost:5173","crossOrigin":false}',
 * // @log:     challengeIndex: 23,
 * // @log:     typeIndex: 1,
 * // @log:     userVerificationRequired: true,
 * // @log:   },
 * // @log:   signature: { r: 51231...4215n, s: 12345...6789n },
 * // @log: }
 * ```
 *
 * @param options - Options.
 * @returns The signature.
 */
async function sign(options) {
    const { getFn = window.navigator.credentials.get.bind(window.navigator.credentials), ...rest } = options;
    const requestOptions = getCredentialRequestOptions(rest);
    try {
        const credential = (await getFn(requestOptions));
        if (!credential)
            throw new CredentialRequestFailedError();
        const response = credential.response;
        const clientDataJSON = String.fromCharCode(...new Uint8Array(response.clientDataJSON));
        const challengeIndex = clientDataJSON.indexOf('"challenge"');
        const typeIndex = clientDataJSON.indexOf('"type"');
        const signature = WebAuthnP256_internal.parseAsn1Signature(new Uint8Array(response.signature));
        return {
            metadata: {
                authenticatorData: WebAuthnP256_Hex.fromBytes(new Uint8Array(response.authenticatorData)),
                clientDataJSON,
                challengeIndex,
                typeIndex,
                userVerificationRequired: requestOptions.publicKey.userVerification === 'required',
            },
            signature,
            raw: credential,
        };
    }
    catch (error) {
        throw new CredentialRequestFailedError({
            cause: error,
        });
    }
}
/**
 * Verifies a signature using the Credential's public key and the challenge which was signed.
 *
 * @example
 * ```ts twoslash
 * import { WebAuthnP256 } from 'ox'
 *
 * const credential = await WebAuthnP256.createCredential({
 *   name: 'Example',
 * })
 *
 * const { metadata, signature } = await WebAuthnP256.sign({
 *   credentialId: credential.id,
 *   challenge: '0xdeadbeef',
 * })
 *
 * const result = await WebAuthnP256.verify({ // [!code focus]
 *   metadata, // [!code focus]
 *   challenge: '0xdeadbeef', // [!code focus]
 *   publicKey: credential.publicKey, // [!code focus]
 *   signature, // [!code focus]
 * }) // [!code focus]
 * // @log: true
 * ```
 *
 * @param options - Options.
 * @returns Whether the signature is valid.
 */
function WebAuthnP256_verify(options) {
    const { challenge, hash = true, metadata, publicKey, signature } = options;
    const { authenticatorData, challengeIndex, clientDataJSON, typeIndex, userVerificationRequired, } = metadata;
    const authenticatorDataBytes = WebAuthnP256_Bytes.fromHex(authenticatorData);
    // Check length of `authenticatorData`.
    if (authenticatorDataBytes.length < 37)
        return false;
    const flag = authenticatorDataBytes[32];
    // Verify that the UP bit of the flags in authData is set.
    if ((flag & 0x01) !== 0x01)
        return false;
    // If user verification was determined to be required, verify that
    // the UV bit of the flags in authData is set. Otherwise, ignore the
    // value of the UV flag.
    if (userVerificationRequired && (flag & 0x04) !== 0x04)
        return false;
    // If the BE bit of the flags in authData is not set, verify that
    // the BS bit is not set.
    if ((flag & 0x08) !== 0x08 && (flag & 0x10) === 0x10)
        return false;
    // Check that response is for an authentication assertion
    const type = '"type":"webauthn.get"';
    if (type !== clientDataJSON.slice(Number(typeIndex), type.length + 1))
        return false;
    // Check that hash is in the clientDataJSON.
    const match = clientDataJSON
        .slice(Number(challengeIndex))
        .match(/^"challenge":"(.*?)"/);
    if (!match)
        return false;
    // Validate the challenge in the clientDataJSON.
    const [_, challenge_extracted] = match;
    if (WebAuthnP256_Hex.fromBytes(Base64.toBytes(challenge_extracted)) !== challenge)
        return false;
    const clientDataJSONHash = WebAuthnP256_Hash.sha256(WebAuthnP256_Bytes.fromString(clientDataJSON), {
        as: 'Bytes',
    });
    const payload = WebAuthnP256_Bytes.concat(authenticatorDataBytes, clientDataJSONHash);
    return P256.verify({
        hash,
        payload,
        publicKey,
        signature,
    });
}
/** Thrown when a WebAuthn P256 credential creation fails. */
class CredentialCreationFailedError extends BaseError {
    constructor({ cause } = {}) {
        super('Failed to create credential.', {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WebAuthnP256.CredentialCreationFailedError'
        });
    }
}
/** Thrown when a WebAuthn P256 credential request fails. */
class CredentialRequestFailedError extends BaseError {
    constructor({ cause } = {}) {
        super('Failed to request credential.', {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WebAuthnP256.CredentialRequestFailedError'
        });
    }
}
//# sourceMappingURL=WebAuthnP256.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/Solidity.js
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
// `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
// https://regexr.com/6va55
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
// `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
// https://regexr.com/6v8hp
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const maxInt8 = (/* unused pure expression or super */ null && (2n ** (8n - 1n) - 1n));
const maxInt16 = (/* unused pure expression or super */ null && (2n ** (16n - 1n) - 1n));
const maxInt24 = (/* unused pure expression or super */ null && (2n ** (24n - 1n) - 1n));
const maxInt32 = (/* unused pure expression or super */ null && (2n ** (32n - 1n) - 1n));
const maxInt40 = (/* unused pure expression or super */ null && (2n ** (40n - 1n) - 1n));
const maxInt48 = (/* unused pure expression or super */ null && (2n ** (48n - 1n) - 1n));
const maxInt56 = (/* unused pure expression or super */ null && (2n ** (56n - 1n) - 1n));
const maxInt64 = (/* unused pure expression or super */ null && (2n ** (64n - 1n) - 1n));
const maxInt72 = (/* unused pure expression or super */ null && (2n ** (72n - 1n) - 1n));
const maxInt80 = (/* unused pure expression or super */ null && (2n ** (80n - 1n) - 1n));
const maxInt88 = (/* unused pure expression or super */ null && (2n ** (88n - 1n) - 1n));
const maxInt96 = (/* unused pure expression or super */ null && (2n ** (96n - 1n) - 1n));
const maxInt104 = (/* unused pure expression or super */ null && (2n ** (104n - 1n) - 1n));
const maxInt112 = (/* unused pure expression or super */ null && (2n ** (112n - 1n) - 1n));
const maxInt120 = (/* unused pure expression or super */ null && (2n ** (120n - 1n) - 1n));
const maxInt128 = (/* unused pure expression or super */ null && (2n ** (128n - 1n) - 1n));
const maxInt136 = (/* unused pure expression or super */ null && (2n ** (136n - 1n) - 1n));
const maxInt144 = (/* unused pure expression or super */ null && (2n ** (144n - 1n) - 1n));
const maxInt152 = (/* unused pure expression or super */ null && (2n ** (152n - 1n) - 1n));
const maxInt160 = (/* unused pure expression or super */ null && (2n ** (160n - 1n) - 1n));
const maxInt168 = (/* unused pure expression or super */ null && (2n ** (168n - 1n) - 1n));
const maxInt176 = (/* unused pure expression or super */ null && (2n ** (176n - 1n) - 1n));
const maxInt184 = (/* unused pure expression or super */ null && (2n ** (184n - 1n) - 1n));
const maxInt192 = (/* unused pure expression or super */ null && (2n ** (192n - 1n) - 1n));
const maxInt200 = (/* unused pure expression or super */ null && (2n ** (200n - 1n) - 1n));
const maxInt208 = (/* unused pure expression or super */ null && (2n ** (208n - 1n) - 1n));
const maxInt216 = (/* unused pure expression or super */ null && (2n ** (216n - 1n) - 1n));
const maxInt224 = (/* unused pure expression or super */ null && (2n ** (224n - 1n) - 1n));
const maxInt232 = (/* unused pure expression or super */ null && (2n ** (232n - 1n) - 1n));
const maxInt240 = (/* unused pure expression or super */ null && (2n ** (240n - 1n) - 1n));
const maxInt248 = (/* unused pure expression or super */ null && (2n ** (248n - 1n) - 1n));
const maxInt256 = (/* unused pure expression or super */ null && (2n ** (256n - 1n) - 1n));
const minInt8 = (/* unused pure expression or super */ null && (-(2n ** (8n - 1n))));
const minInt16 = (/* unused pure expression or super */ null && (-(2n ** (16n - 1n))));
const minInt24 = (/* unused pure expression or super */ null && (-(2n ** (24n - 1n))));
const minInt32 = (/* unused pure expression or super */ null && (-(2n ** (32n - 1n))));
const minInt40 = (/* unused pure expression or super */ null && (-(2n ** (40n - 1n))));
const minInt48 = (/* unused pure expression or super */ null && (-(2n ** (48n - 1n))));
const minInt56 = (/* unused pure expression or super */ null && (-(2n ** (56n - 1n))));
const minInt64 = (/* unused pure expression or super */ null && (-(2n ** (64n - 1n))));
const minInt72 = (/* unused pure expression or super */ null && (-(2n ** (72n - 1n))));
const minInt80 = (/* unused pure expression or super */ null && (-(2n ** (80n - 1n))));
const minInt88 = (/* unused pure expression or super */ null && (-(2n ** (88n - 1n))));
const minInt96 = (/* unused pure expression or super */ null && (-(2n ** (96n - 1n))));
const minInt104 = (/* unused pure expression or super */ null && (-(2n ** (104n - 1n))));
const minInt112 = (/* unused pure expression or super */ null && (-(2n ** (112n - 1n))));
const minInt120 = (/* unused pure expression or super */ null && (-(2n ** (120n - 1n))));
const minInt128 = (/* unused pure expression or super */ null && (-(2n ** (128n - 1n))));
const minInt136 = (/* unused pure expression or super */ null && (-(2n ** (136n - 1n))));
const minInt144 = (/* unused pure expression or super */ null && (-(2n ** (144n - 1n))));
const minInt152 = (/* unused pure expression or super */ null && (-(2n ** (152n - 1n))));
const minInt160 = (/* unused pure expression or super */ null && (-(2n ** (160n - 1n))));
const minInt168 = (/* unused pure expression or super */ null && (-(2n ** (168n - 1n))));
const minInt176 = (/* unused pure expression or super */ null && (-(2n ** (176n - 1n))));
const minInt184 = (/* unused pure expression or super */ null && (-(2n ** (184n - 1n))));
const minInt192 = (/* unused pure expression or super */ null && (-(2n ** (192n - 1n))));
const minInt200 = (/* unused pure expression or super */ null && (-(2n ** (200n - 1n))));
const minInt208 = (/* unused pure expression or super */ null && (-(2n ** (208n - 1n))));
const minInt216 = (/* unused pure expression or super */ null && (-(2n ** (216n - 1n))));
const minInt224 = (/* unused pure expression or super */ null && (-(2n ** (224n - 1n))));
const minInt232 = (/* unused pure expression or super */ null && (-(2n ** (232n - 1n))));
const minInt240 = (/* unused pure expression or super */ null && (-(2n ** (240n - 1n))));
const minInt248 = (/* unused pure expression or super */ null && (-(2n ** (248n - 1n))));
const minInt256 = (/* unused pure expression or super */ null && (-(2n ** (256n - 1n))));
const maxUint8 = (/* unused pure expression or super */ null && (2n ** 8n - 1n));
const maxUint16 = (/* unused pure expression or super */ null && (2n ** 16n - 1n));
const maxUint24 = (/* unused pure expression or super */ null && (2n ** 24n - 1n));
const maxUint32 = (/* unused pure expression or super */ null && (2n ** 32n - 1n));
const maxUint40 = (/* unused pure expression or super */ null && (2n ** 40n - 1n));
const maxUint48 = (/* unused pure expression or super */ null && (2n ** 48n - 1n));
const maxUint56 = (/* unused pure expression or super */ null && (2n ** 56n - 1n));
const maxUint64 = (/* unused pure expression or super */ null && (2n ** 64n - 1n));
const maxUint72 = (/* unused pure expression or super */ null && (2n ** 72n - 1n));
const maxUint80 = (/* unused pure expression or super */ null && (2n ** 80n - 1n));
const maxUint88 = (/* unused pure expression or super */ null && (2n ** 88n - 1n));
const maxUint96 = (/* unused pure expression or super */ null && (2n ** 96n - 1n));
const maxUint104 = (/* unused pure expression or super */ null && (2n ** 104n - 1n));
const maxUint112 = (/* unused pure expression or super */ null && (2n ** 112n - 1n));
const maxUint120 = (/* unused pure expression or super */ null && (2n ** 120n - 1n));
const maxUint128 = (/* unused pure expression or super */ null && (2n ** 128n - 1n));
const maxUint136 = (/* unused pure expression or super */ null && (2n ** 136n - 1n));
const maxUint144 = (/* unused pure expression or super */ null && (2n ** 144n - 1n));
const maxUint152 = (/* unused pure expression or super */ null && (2n ** 152n - 1n));
const maxUint160 = (/* unused pure expression or super */ null && (2n ** 160n - 1n));
const maxUint168 = (/* unused pure expression or super */ null && (2n ** 168n - 1n));
const maxUint176 = (/* unused pure expression or super */ null && (2n ** 176n - 1n));
const maxUint184 = (/* unused pure expression or super */ null && (2n ** 184n - 1n));
const maxUint192 = (/* unused pure expression or super */ null && (2n ** 192n - 1n));
const maxUint200 = (/* unused pure expression or super */ null && (2n ** 200n - 1n));
const maxUint208 = (/* unused pure expression or super */ null && (2n ** 208n - 1n));
const maxUint216 = (/* unused pure expression or super */ null && (2n ** 216n - 1n));
const maxUint224 = (/* unused pure expression or super */ null && (2n ** 224n - 1n));
const maxUint232 = (/* unused pure expression or super */ null && (2n ** 232n - 1n));
const maxUint240 = (/* unused pure expression or super */ null && (2n ** 240n - 1n));
const maxUint248 = (/* unused pure expression or super */ null && (2n ** 248n - 1n));
const maxUint256 = 2n ** 256n - 1n;
//# sourceMappingURL=Solidity.js.map
;// ./node_modules/@base-org/account/node_modules/ox/_esm/core/Signature.js
/* unused harmony import specifier */ var secp256k1;
/* unused harmony import specifier */ var Signature_Bytes;
/* unused harmony import specifier */ var Signature_Hex;






/**
 * Asserts that a Signature is valid.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.assert({
 *   r: -49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 * })
 * // @error: InvalidSignatureRError:
 * // @error: Value `-549...n` is an invalid r value.
 * // @error: r must be a positive integer less than 2^256.
 * ```
 *
 * @param signature - The signature object to assert.
 */
function Signature_assert(signature, options = {}) {
    const { recovered } = options;
    if (typeof signature.r === 'undefined')
        throw new MissingPropertiesError({ signature });
    if (typeof signature.s === 'undefined')
        throw new MissingPropertiesError({ signature });
    if (recovered && typeof signature.yParity === 'undefined')
        throw new MissingPropertiesError({ signature });
    if (signature.r < 0n || signature.r > maxUint256)
        throw new InvalidRError({ value: signature.r });
    if (signature.s < 0n || signature.s > maxUint256)
        throw new InvalidSError({ value: signature.s });
    if (typeof signature.yParity === 'number' &&
        signature.yParity !== 0 &&
        signature.yParity !== 1)
        throw new InvalidYParityError({ value: signature.yParity });
}
/**
 * Deserializes a {@link ox#Bytes.Bytes} signature into a structured {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Signature } from 'ox'
 *
 * Signature.fromBytes(new Uint8Array([128, 3, 131, ...]))
 * // @log: { r: 5231...n, s: 3522...n, yParity: 0 }
 * ```
 *
 * @param signature - The serialized signature.
 * @returns The deserialized {@link ox#Signature.Signature}.
 */
function Signature_fromBytes(signature) {
    return Signature_fromHex(Signature_Hex.fromBytes(signature));
}
/**
 * Deserializes a {@link ox#Hex.Hex} signature into a structured {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.fromHex('0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c')
 * // @log: { r: 5231...n, s: 3522...n, yParity: 0 }
 * ```
 *
 * @param serialized - The serialized signature.
 * @returns The deserialized {@link ox#Signature.Signature}.
 */
function Signature_fromHex(signature) {
    if (signature.length !== 130 && signature.length !== 132)
        throw new Signature_InvalidSerializedSizeError({ signature });
    const r = BigInt(slice(signature, 0, 32));
    const s = BigInt(slice(signature, 32, 64));
    const yParity = (() => {
        const yParity = Number(`0x${signature.slice(130)}`);
        if (Number.isNaN(yParity))
            return undefined;
        try {
            return vToYParity(yParity);
        }
        catch {
            throw new InvalidYParityError({ value: yParity });
        }
    })();
    if (typeof yParity === 'undefined')
        return {
            r,
            s,
        };
    return {
        r,
        s,
        yParity,
    };
}
/**
 * Extracts a {@link ox#Signature.Signature} from an arbitrary object that may include signature properties.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Signature } from 'ox'
 *
 * Signature.extract({
 *   baz: 'barry',
 *   foo: 'bar',
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 *   zebra: 'stripes',
 * })
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log:   yParity: 1
 * // @log: }
 * ```
 *
 * @param value - The arbitrary object to extract the signature from.
 * @returns The extracted {@link ox#Signature.Signature}.
 */
function extract(value) {
    if (typeof value.r === 'undefined')
        return undefined;
    if (typeof value.s === 'undefined')
        return undefined;
    return Signature_from(value);
}
/**
 * Instantiates a typed {@link ox#Signature.Signature} object from a {@link ox#Signature.Signature}, {@link ox#Signature.Legacy}, {@link ox#Bytes.Bytes}, or {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.from({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 * })
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log:   yParity: 1
 * // @log: }
 * ```
 *
 * @example
 * ### From Serialized
 *
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.from('0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db801')
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log:   yParity: 1,
 * // @log: }
 * ```
 *
 * @example
 * ### From Legacy
 *
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.from({
 *   r: 47323457007453657207889730243826965761922296599680473886588287015755652701072n,
 *   s: 57228803202727131502949358313456071280488184270258293674242124340113824882788n,
 *   v: 27,
 * })
 * // @log: {
 * // @log:   r: 47323457007453657207889730243826965761922296599680473886588287015755652701072n,
 * // @log:   s: 57228803202727131502949358313456071280488184270258293674242124340113824882788n,
 * // @log:   yParity: 0
 * // @log: }
 * ```
 *
 * @param signature - The signature value to instantiate.
 * @returns The instantiated {@link ox#Signature.Signature}.
 */
function Signature_from(signature) {
    const signature_ = (() => {
        if (typeof signature === 'string')
            return Signature_fromHex(signature);
        if (signature instanceof Uint8Array)
            return Signature_fromBytes(signature);
        if (typeof signature.r === 'string')
            return fromRpc(signature);
        if (signature.v)
            return fromLegacy(signature);
        return {
            r: signature.r,
            s: signature.s,
            ...(typeof signature.yParity !== 'undefined'
                ? { yParity: signature.yParity }
                : {}),
        };
    })();
    Signature_assert(signature_);
    return signature_;
}
/**
 * Converts a DER-encoded signature to a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromDerBytes(new Uint8Array([132, 51, 23, ...]))
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log: }
 * ```
 *
 * @param signature - The DER-encoded signature to convert.
 * @returns The {@link ox#Signature.Signature}.
 */
function fromDerBytes(signature) {
    return fromDerHex(Signature_Hex.fromBytes(signature));
}
/**
 * Converts a DER-encoded signature to a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromDerHex('0x304402206e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf02204a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8')
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log: }
 * ```
 *
 * @param signature - The DER-encoded signature to convert.
 * @returns The {@link ox#Signature.Signature}.
 */
function fromDerHex(signature) {
    const { r, s } = secp256k1.Signature.fromDER(Signature_Hex.from(signature).slice(2));
    return { r, s };
}
/**
 * Converts a {@link ox#Signature.Legacy} into a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const legacy = Signature.fromLegacy({ r: 1n, s: 2n, v: 28 })
 * // @log: { r: 1n, s: 2n, yParity: 1 }
 * ```
 *
 * @param signature - The {@link ox#Signature.Legacy} to convert.
 * @returns The converted {@link ox#Signature.Signature}.
 */
function fromLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        yParity: vToYParity(signature.v),
    };
}
/**
 * Converts a {@link ox#Signature.Rpc} into a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromRpc({
 *   r: '0x635dc2033e60185bb36709c29c75d64ea51dfbd91c32ef4be198e4ceb169fb4d',
 *   s: '0x50c2667ac4c771072746acfdcf1f1483336dcca8bd2df47cd83175dbe60f0540',
 *   yParity: '0x0',
 * })
 * ```
 *
 * @param signature - The {@link ox#Signature.Rpc} to convert.
 * @returns The converted {@link ox#Signature.Signature}.
 */
function fromRpc(signature) {
    const yParity = (() => {
        const v = signature.v ? Number(signature.v) : undefined;
        let yParity = signature.yParity ? Number(signature.yParity) : undefined;
        if (typeof v === 'number' && typeof yParity !== 'number')
            yParity = vToYParity(v);
        if (typeof yParity !== 'number')
            throw new InvalidYParityError({ value: signature.yParity });
        return yParity;
    })();
    return {
        r: BigInt(signature.r),
        s: BigInt(signature.s),
        yParity,
    };
}
/**
 * Converts a {@link ox#Signature.Tuple} to a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromTuple(['0x01', '0x7b', '0x1c8'])
 * // @log: {
 * // @log:   r: 123n,
 * // @log:   s: 456n,
 * // @log:   yParity: 1,
 * // @log: }
 * ```
 *
 * @param tuple - The {@link ox#Signature.Tuple} to convert.
 * @returns The {@link ox#Signature.Signature}.
 */
function fromTuple(tuple) {
    const [yParity, r, s] = tuple;
    return Signature_from({
        r: r === '0x' ? 0n : BigInt(r),
        s: s === '0x' ? 0n : BigInt(s),
        yParity: yParity === '0x' ? 0 : Number(yParity),
    });
}
/**
 * Serializes a {@link ox#Signature.Signature} to {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.toBytes({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1
 * })
 * // @log: Uint8Array [102, 16, 10, ...]
 * ```
 *
 * @param signature - The signature to serialize.
 * @returns The serialized signature.
 */
function Signature_toBytes(signature) {
    return Signature_Bytes.fromHex(Signature_toHex(signature));
}
/**
 * Serializes a {@link ox#Signature.Signature} to {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.toHex({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1
 * })
 * // @log: '0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c'
 * ```
 *
 * @param signature - The signature to serialize.
 * @returns The serialized signature.
 */
function Signature_toHex(signature) {
    Signature_assert(signature);
    const r = signature.r;
    const s = signature.s;
    const signature_ = concat(fromNumber(r, { size: 32 }), fromNumber(s, { size: 32 }), 
    // If the signature is recovered, add the recovery byte to the signature.
    typeof signature.yParity === 'number'
        ? fromNumber(yParityToV(signature.yParity), { size: 1 })
        : '0x');
    return signature_;
}
/**
 * Converts a {@link ox#Signature.Signature} to DER-encoded format.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.from({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * })
 *
 * const signature_der = Signature.toDerBytes(signature)
 * // @log: Uint8Array [132, 51, 23, ...]
 * ```
 *
 * @param signature - The signature to convert.
 * @returns The DER-encoded signature.
 */
function toDerBytes(signature) {
    const sig = new secp256k1.Signature(signature.r, signature.s);
    return sig.toDERRawBytes();
}
/**
 * Converts a {@link ox#Signature.Signature} to DER-encoded format.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.from({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * })
 *
 * const signature_der = Signature.toDerHex(signature)
 * // @log: '0x304402206e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf02204a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8'
 * ```
 *
 * @param signature - The signature to convert.
 * @returns The DER-encoded signature.
 */
function toDerHex(signature) {
    const sig = new secp256k1.Signature(signature.r, signature.s);
    return `0x${sig.toDERHex()}`;
}
/**
 * Converts a {@link ox#Signature.Signature} into a {@link ox#Signature.Legacy}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const legacy = Signature.toLegacy({ r: 1n, s: 2n, yParity: 1 })
 * // @log: { r: 1n, s: 2n, v: 28 }
 * ```
 *
 * @param signature - The {@link ox#Signature.Signature} to convert.
 * @returns The converted {@link ox#Signature.Legacy}.
 */
function toLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        v: yParityToV(signature.yParity),
    };
}
/**
 * Converts a {@link ox#Signature.Signature} into a {@link ox#Signature.Rpc}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.toRpc({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1
 * })
 * ```
 *
 * @param signature - The {@link ox#Signature.Signature} to convert.
 * @returns The converted {@link ox#Signature.Rpc}.
 */
function toRpc(signature) {
    const { r, s, yParity } = signature;
    return {
        r: Signature_Hex.fromNumber(r, { size: 32 }),
        s: Signature_Hex.fromNumber(s, { size: 32 }),
        yParity: yParity === 0 ? '0x0' : '0x1',
    };
}
/**
 * Converts a {@link ox#Signature.Signature} to a serialized {@link ox#Signature.Tuple} to be used for signatures in Transaction Envelopes, EIP-7702 Authorization Lists, etc.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signatureTuple = Signature.toTuple({
 *   r: 123n,
 *   s: 456n,
 *   yParity: 1,
 * })
 * // @log: [yParity: '0x01', r: '0x7b', s: '0x1c8']
 * ```
 *
 * @param signature - The {@link ox#Signature.Signature} to convert.
 * @returns The {@link ox#Signature.Tuple}.
 */
function toTuple(signature) {
    const { r, s, yParity } = signature;
    return [
        yParity ? '0x01' : '0x',
        r === 0n ? '0x' : Signature_Hex.trimLeft(Signature_Hex.fromNumber(r)),
        s === 0n ? '0x' : Signature_Hex.trimLeft(Signature_Hex.fromNumber(s)),
    ];
}
/**
 * Validates a Signature. Returns `true` if the signature is valid, `false` otherwise.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const valid = Signature.validate({
 *   r: -49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 * })
 * // @log: false
 * ```
 *
 * @param signature - The signature object to assert.
 */
function Signature_validate(signature, options = {}) {
    try {
        Signature_assert(signature, options);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Converts a ECDSA `v` value to a `yParity` value.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const yParity = Signature.vToYParity(28)
 * // @log: 1
 * ```
 *
 * @param v - The ECDSA `v` value to convert.
 * @returns The `yParity` value.
 */
function vToYParity(v) {
    if (v === 0 || v === 27)
        return 0;
    if (v === 1 || v === 28)
        return 1;
    if (v >= 35)
        return v % 2 === 0 ? 1 : 0;
    throw new InvalidVError({ value: v });
}
/**
 * Converts a ECDSA `v` value to a `yParity` value.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const v = Signature.yParityToV(1)
 * // @log: 28
 * ```
 *
 * @param yParity - The ECDSA `yParity` value to convert.
 * @returns The `v` value.
 */
function yParityToV(yParity) {
    if (yParity === 0)
        return 27;
    if (yParity === 1)
        return 28;
    throw new InvalidYParityError({ value: yParity });
}
/** Thrown when the serialized signature is of an invalid size. */
class Signature_InvalidSerializedSizeError extends BaseError {
    constructor({ signature }) {
        super(`Value \`${signature}\` is an invalid signature size.`, {
            metaMessages: [
                'Expected: 64 bytes or 65 bytes.',
                `Received ${size(from(signature))} bytes.`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSerializedSizeError'
        });
    }
}
/** Thrown when the signature is missing either an `r`, `s`, or `yParity` property. */
class MissingPropertiesError extends BaseError {
    constructor({ signature }) {
        super(`Signature \`${stringify(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.MissingPropertiesError'
        });
    }
}
/** Thrown when the signature has an invalid `r` value. */
class InvalidRError extends BaseError {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidRError'
        });
    }
}
/** Thrown when the signature has an invalid `s` value. */
class InvalidSError extends BaseError {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSError'
        });
    }
}
/** Thrown when the signature has an invalid `yParity` value. */
class InvalidYParityError extends BaseError {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidYParityError'
        });
    }
}
/** Thrown when the signature has an invalid `v` value. */
class InvalidVError extends BaseError {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidVError'
        });
    }
}
//# sourceMappingURL=Signature.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/signature/hashMessage.js + 2 modules
var hashMessage = __webpack_require__(170881);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/signature/hashTypedData.js + 2 modules
var hashTypedData = __webpack_require__(776431);
;// ./node_modules/@base-org/account/node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    const dbp = promisifyRequest(request);
    return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function set(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function delMany(keys, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        keys.forEach((key) => store.delete(key));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function () {
        if (!this.result)
            return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function dist_keys(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAllKeys) {
            return promisifyRequest(store.getAllKeys());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAll) {
            return promisifyRequest(store.getAll());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) {
            return Promise.all([
                promisifyRequest(store.getAllKeys()),
                promisifyRequest(store.getAll()),
            ]).then(([keys, values]) => keys.map((key, i) => [key, values[i]]));
        }
        const items = [];
        return customStore('readonly', (store) => eachCursor(store, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
    });
}



;// ./node_modules/@base-org/account/dist/kms/crypto-key/storage.js

function createStorage(scope, name) {
    const store = typeof indexedDB !== 'undefined' ? createStore(scope, name) : undefined;
    return {
        getItem: async (key) => {
            const value = await get(key, store);
            if (!value) {
                return null;
            }
            return value;
        },
        removeItem: async (key) => {
            return del(key, store);
        },
        setItem: async (key, value) => {
            return set(key, value, store);
        },
    };
}
//# sourceMappingURL=storage.js.map
;// ./node_modules/@base-org/account/dist/kms/crypto-key/index.js
/* unused harmony import specifier */ var crypto_key_Hex;
/* unused harmony import specifier */ var crypto_key_PublicKey;



// *****************************************************************
// Constants
// *****************************************************************
const STORAGE_SCOPE = 'base-acc-sdk';
const STORAGE_NAME = 'keys';
const ACTIVE_ID_KEY = 'activeId';
// *****************************************************************
// Storage
// *****************************************************************
const storage = createStorage(STORAGE_SCOPE, STORAGE_NAME);
// *****************************************************************
// Functions
// *****************************************************************
async function crypto_key_generateKeyPair() {
    const keypair = await createKeyPair({ extractable: false });
    const publicKey = slice(PublicKey_toHex(keypair.publicKey), 1);
    await storage.setItem(publicKey, keypair);
    await storage.setItem(ACTIVE_ID_KEY, publicKey);
    return keypair;
}
async function getKeypair() {
    const id = await storage.getItem(ACTIVE_ID_KEY);
    if (!id) {
        return null;
    }
    const keypair = await storage.getItem(id);
    if (!keypair) {
        return null;
    }
    return keypair;
}
async function getOrCreateKeypair() {
    const keypair = await getKeypair();
    if (!keypair) {
        const kp = await crypto_key_generateKeyPair();
        const pubKey = slice(PublicKey_toHex(kp.publicKey), 1);
        await storage.setItem(pubKey, kp);
        await storage.setItem(ACTIVE_ID_KEY, pubKey);
        return kp;
    }
    return keypair;
}
async function getAccount() {
    const keypair = await getOrCreateKeypair();
    /**
     * public key / address
     */
    const publicKey = slice(PublicKey_toHex(keypair.publicKey), 1);
    const sign = async (payload) => {
        const { payload: message, metadata } = getSignPayload({
            challenge: payload,
            origin: 'https://keys.coinbase.com',
            userVerification: 'preferred',
        });
        const signature = await WebCryptoP256_sign({
            payload: message,
            privateKey: keypair.privateKey,
        });
        return {
            signature: Signature_toHex(signature),
            raw: {}, // type changed in viem
            webauthn: metadata,
        };
    };
    return {
        id: publicKey,
        publicKey,
        async sign({ hash }) {
            return sign(hash);
        },
        async signMessage({ message }) {
            return sign((0,hashMessage/* hashMessage */.A)(message));
        },
        async signTypedData(parameters) {
            return sign((0,hashTypedData/* hashTypedData */.Zh)(parameters));
        },
        type: 'webAuthn',
    };
}
async function getCryptoKeyAccount() {
    const account = await getAccount();
    return {
        account,
    };
}
async function removeCryptoKey() {
    const keypair = await getKeypair();
    if (!keypair) {
        return;
    }
    await storage.removeItem(crypto_key_Hex.slice(crypto_key_PublicKey.toHex(keypair.publicKey), 1));
    await storage.removeItem(ACTIVE_ID_KEY);
}
//# sourceMappingURL=index.js.map
;// ./node_modules/@base-org/account/dist/sign/base-account/SCWKeyManager.js


const OWN_PRIVATE_KEY = {
    storageKey: 'ownPrivateKey',
    keyType: 'private',
};
const OWN_PUBLIC_KEY = {
    storageKey: 'ownPublicKey',
    keyType: 'public',
};
const PEER_PUBLIC_KEY = {
    storageKey: 'peerPublicKey',
    keyType: 'public',
};
class SCWKeyManager {
    ownPrivateKey = null;
    ownPublicKey = null;
    peerPublicKey = null;
    sharedSecret = null;
    async getOwnPublicKey() {
        await this.loadKeysIfNeeded();
        return this.ownPublicKey;
    }
    // returns null if the shared secret is not yet derived
    async getSharedSecret() {
        await this.loadKeysIfNeeded();
        return this.sharedSecret;
    }
    async setPeerPublicKey(key) {
        this.sharedSecret = null;
        this.peerPublicKey = key;
        await this.storeKey(PEER_PUBLIC_KEY, key);
        await this.loadKeysIfNeeded();
    }
    async clear() {
        this.ownPrivateKey = null;
        this.ownPublicKey = null;
        this.peerPublicKey = null;
        this.sharedSecret = null;
        store.keys.clear();
    }
    async generateKeyPair() {
        const newKeyPair = await generateKeyPair();
        this.ownPrivateKey = newKeyPair.privateKey;
        this.ownPublicKey = newKeyPair.publicKey;
        await this.storeKey(OWN_PRIVATE_KEY, newKeyPair.privateKey);
        await this.storeKey(OWN_PUBLIC_KEY, newKeyPair.publicKey);
    }
    async loadKeysIfNeeded() {
        if (this.ownPrivateKey === null) {
            this.ownPrivateKey = await this.loadKey(OWN_PRIVATE_KEY);
        }
        if (this.ownPublicKey === null) {
            this.ownPublicKey = await this.loadKey(OWN_PUBLIC_KEY);
        }
        if (this.ownPrivateKey === null || this.ownPublicKey === null) {
            await this.generateKeyPair();
        }
        if (this.peerPublicKey === null) {
            this.peerPublicKey = await this.loadKey(PEER_PUBLIC_KEY);
        }
        if (this.sharedSecret === null) {
            if (this.ownPrivateKey === null || this.peerPublicKey === null)
                return;
            this.sharedSecret = await deriveSharedSecret(this.ownPrivateKey, this.peerPublicKey);
        }
    }
    // storage methods
    async loadKey(item) {
        const key = store.keys.get(item.storageKey);
        if (!key)
            return null;
        return importKeyFromHexString(item.keyType, key);
    }
    async storeKey(item, key) {
        const hexString = await exportKeyToHexString(item.keyType, key);
        store.keys.set(item.storageKey, hexString);
    }
}
//# sourceMappingURL=SCWKeyManager.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/slice.js
var data_slice = __webpack_require__(993577);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/keccak256.js
var hash_keccak256 = __webpack_require__(282040);
;// ./node_modules/@base-org/account/dist/util/get.js
function get_get(obj, path) {
    if (typeof obj !== 'object' || obj === null)
        return undefined;
    return path
        .split(/[.[\]]+/)
        .filter(Boolean)
        .reduce((value, key) => {
        if (typeof value === 'object' && value !== null) {
            return value[key];
        }
        return undefined;
    }, obj);
}
//# sourceMappingURL=get.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/wallet/waitForCallsStatus.js + 3 modules
var waitForCallsStatus = __webpack_require__(396207);
;// ./node_modules/@base-org/account/dist/sign/base-account/utils.js
/* unused harmony import specifier */ var hexToBigInt;
/* unused harmony import specifier */ var utils_store;
/* unused harmony import specifier */ var utils_spendPermissionManagerAddress;










// ***************************************************************
// Utility
// ***************************************************************
function getSenderFromRequest(request) {
    if (!Array.isArray(request.params)) {
        return null;
    }
    switch (request.method) {
        case 'personal_sign':
            return request.params[1];
        case 'eth_signTypedData_v4':
            return request.params[0];
        case 'eth_signTransaction':
        case 'eth_sendTransaction':
        case 'wallet_sendCalls':
            return request.params[0]?.from;
        default:
            return null;
    }
}
function addSenderToRequest(request, sender) {
    if (!Array.isArray(request.params)) {
        throw standardErrors.rpc.invalidParams();
    }
    const params = [...request.params];
    switch (request.method) {
        case 'eth_signTransaction':
        case 'eth_sendTransaction':
        case 'wallet_sendCalls':
            params[0].from = sender;
            break;
        case 'eth_signTypedData_v4':
            params[0] = sender;
            break;
        case 'personal_sign':
            params[1] = sender;
            break;
        default:
            break;
    }
    return { ...request, params };
}
function assertParamsChainId(params) {
    if (!params || !Array.isArray(params) || !params[0]?.chainId) {
        throw standardErrors.rpc.invalidParams();
    }
    if (typeof params[0].chainId !== 'string' && typeof params[0].chainId !== 'number') {
        throw standardErrors.rpc.invalidParams();
    }
}
function assertGetCapabilitiesParams(params) {
    if (!params || !Array.isArray(params) || (params.length !== 1 && params.length !== 2)) {
        throw standardErrors.rpc.invalidParams();
    }
    if (typeof params[0] !== 'string' || !(0,isAddress/* isAddress */.P)(params[0])) {
        throw standardErrors.rpc.invalidParams();
    }
    if (params.length === 2) {
        if (!Array.isArray(params[1])) {
            throw standardErrors.rpc.invalidParams();
        }
        for (const param of params[1]) {
            if (typeof param !== 'string' || !param.startsWith('0x')) {
                throw standardErrors.rpc.invalidParams();
            }
        }
    }
}
function injectRequestCapabilities(request, capabilities) {
    // Modify request to include auto sub account capabilities
    const modifiedRequest = { ...request };
    if (capabilities && request.method.startsWith('wallet_')) {
        let requestCapabilities = get_get(modifiedRequest, 'params.0.capabilities');
        if (typeof requestCapabilities === 'undefined') {
            requestCapabilities = {};
        }
        if (typeof requestCapabilities !== 'object') {
            throw standardErrors.rpc.invalidParams();
        }
        // Merge capabilities: injected capabilities first, then request capabilities
        // This ensures that if the request doesn't have a capability (e.g., addSubAccount),
        // it gets injected. If the request already has it, the request's version takes precedence.
        requestCapabilities = {
            ...capabilities,
            ...requestCapabilities,
        };
        if (modifiedRequest.params && Array.isArray(modifiedRequest.params)) {
            modifiedRequest.params[0] = {
                ...modifiedRequest.params[0],
                capabilities: requestCapabilities,
            };
        }
    }
    return modifiedRequest;
}
/**
 * Initializes the `subAccountConfig` store with the owner account function and capabilities
 * @returns void
 */
async function initSubAccountConfig() {
    const config = store.subAccountsConfig.get() ?? {};
    const capabilities = {};
    if (config.creation === 'on-connect') {
        // Get the owner account
        const { account: owner } = config.toOwnerAccount
            ? await config.toOwnerAccount()
            : await getCryptoKeyAccount();
        if (!owner) {
            throw standardErrors.provider.unauthorized('No owner account found');
        }
        capabilities.addSubAccount = {
            account: {
                type: 'create',
                keys: [
                    {
                        type: owner.address ? 'address' : 'webauthn-p256',
                        publicKey: owner.address || owner.publicKey,
                    },
                ],
            },
        };
    }
    // Merge capabilities with existing config (don't overwrite the other properties!)
    store.subAccountsConfig.set({
        ...config,
        capabilities,
    });
}
function assertFetchPermissionsRequest(request) {
    if (request.method === 'coinbase_fetchPermissions' && request.params === undefined) {
        return;
    }
    if (request.method === 'coinbase_fetchPermissions' &&
        Array.isArray(request.params) &&
        request.params.length === 1 &&
        typeof request.params[0] === 'object') {
        if (typeof request.params[0].account !== 'string' ||
            !request.params[0].chainId.startsWith('0x')) {
            throw standardErrors.rpc.invalidParams('FetchPermissions - Invalid params: params[0].account must be a hex string');
        }
        if (typeof request.params[0].chainId !== 'string' ||
            !request.params[0].chainId.startsWith('0x')) {
            throw standardErrors.rpc.invalidParams('FetchPermissions - Invalid params: params[0].chainId must be a hex string');
        }
        if (typeof request.params[0].spender !== 'string' ||
            !request.params[0].spender.startsWith('0x')) {
            throw standardErrors.rpc.invalidParams('FetchPermissions - Invalid params: params[0].spender must be a hex string');
        }
        return;
    }
    throw standardErrors.rpc.invalidParams();
}
function fillMissingParamsForFetchPermissions(request) {
    if (request.params !== undefined) {
        return request;
    }
    // this is based on the assumption that the first account is the active account
    // it could change in the context of multi-(universal)-account
    const accountFromStore = store.getState().account.accounts?.[0];
    const chainId = store.getState().account.chain?.id;
    const subAccountFromStore = store.getState().subAccount?.address;
    if (!accountFromStore || !subAccountFromStore || !chainId) {
        throw standardErrors.rpc.invalidParams('FetchPermissions - one or more of account, sub account, or chain id is missing, connect to sub account via wallet_connect first');
    }
    return {
        method: 'coinbase_fetchPermissions',
        params: [
            {
                account: accountFromStore,
                chainId: (0,toHex/* numberToHex */.cK)(chainId),
                spender: subAccountFromStore,
            },
        ],
    };
}
function createSpendPermissionMessage({ spendPermission, chainId, }) {
    return {
        domain: {
            name: 'Spend Permission Manager',
            version: '1',
            chainId: chainId,
            verifyingContract: utils_spendPermissionManagerAddress,
        },
        types: {
            SpendPermission: [
                { name: 'account', type: 'address' },
                { name: 'spender', type: 'address' },
                { name: 'token', type: 'address' },
                { name: 'allowance', type: 'uint160' },
                { name: 'period', type: 'uint48' },
                { name: 'start', type: 'uint48' },
                { name: 'end', type: 'uint48' },
                { name: 'salt', type: 'uint256' },
                { name: 'extraData', type: 'bytes' },
            ],
        },
        primaryType: 'SpendPermission',
        message: {
            account: spendPermission.account,
            spender: spendPermission.spender,
            token: spendPermission.token,
            allowance: spendPermission.allowance,
            period: spendPermission.period,
            start: spendPermission.start,
            end: spendPermission.end,
            salt: spendPermission.salt,
            extraData: spendPermission.extraData,
        },
    };
}
function createSpendPermissionBatchMessage({ spendPermissionBatch, chainId, }) {
    return {
        domain: {
            name: 'Spend Permission Manager',
            version: '1',
            chainId,
            verifyingContract: utils_spendPermissionManagerAddress,
        },
        types: {
            SpendPermissionBatch: [
                { name: 'account', type: 'address' },
                { name: 'period', type: 'uint48' },
                { name: 'start', type: 'uint48' },
                { name: 'end', type: 'uint48' },
                { name: 'permissions', type: 'PermissionDetails[]' },
            ],
            PermissionDetails: [
                { name: 'spender', type: 'address' },
                { name: 'token', type: 'address' },
                { name: 'allowance', type: 'uint160' },
                { name: 'salt', type: 'uint256' },
                { name: 'extraData', type: 'bytes' },
            ],
        },
        primaryType: 'SpendPermissionBatch',
        message: {
            account: spendPermissionBatch.account,
            period: spendPermissionBatch.period,
            start: spendPermissionBatch.start,
            end: spendPermissionBatch.end,
            permissions: spendPermissionBatch.permissions.map((p) => ({
                spender: p.spender,
                token: p.token,
                allowance: p.allowance,
                salt: p.salt,
                extraData: p.extraData,
            })),
        },
    };
}
async function waitForCallsTransactionHash({ client, id, }) {
    const result = await (0,waitForCallsStatus/* waitForCallsStatus */.c)(client, {
        id,
    });
    if (result.status === 'success') {
        return result.receipts?.[0].transactionHash;
    }
    throw standardErrors.rpc.internal('failed to send transaction');
}
function createWalletSendCallsRequest({ calls, from, chainId, capabilities, }) {
    const paymasterUrls = config.get().paymasterUrls;
    let request = {
        method: 'wallet_sendCalls',
        params: [
            {
                version: '1.0',
                calls,
                chainId: (0,toHex/* numberToHex */.cK)(chainId),
                from,
                atomicRequired: true,
                capabilities,
            },
        ],
    };
    if (paymasterUrls?.[chainId]) {
        request = injectRequestCapabilities(request, {
            paymasterService: { url: paymasterUrls?.[chainId] },
        });
    }
    return request;
}
async function presentSubAccountFundingDialog() {
    const dialog = initDialog();
    const userChoice = await new Promise((resolve, reject) => {
        logDialogShown({ dialogContext: 'sub_account_insufficient_balance' });
        dialog.presentItem({
            title: 'Insufficient spend permission',
            message: "Your spend permission's remaining balance cannot cover this transaction. Please use your primary account to complete this transaction.",
            onClose: () => {
                logDialogDismissed({ dialogContext: 'sub_account_insufficient_balance' });
                dialog.clear();
                reject(new Error('User cancelled funding'));
            },
            actionItems: [
                {
                    text: 'Use primary account',
                    variant: 'primary',
                    onClick: () => {
                        logDialogActionClicked({
                            dialogContext: 'sub_account_insufficient_balance',
                            dialogAction: 'continue_in_popup',
                        });
                        dialog.clear();
                        resolve('continue_popup');
                    },
                },
                {
                    text: 'Cancel',
                    variant: 'secondary',
                    onClick: () => {
                        logDialogActionClicked({
                            dialogContext: 'sub_account_insufficient_balance',
                            dialogAction: 'cancel',
                        });
                        dialog.clear();
                        reject(new Error('User cancelled funding'));
                    },
                },
            ],
        });
    });
    return userChoice;
}
function parseFundingOptions({ errorData, sourceAddress, }) {
    const spendPermissionRequests = [];
    for (const [token, { amount, sources }] of Object.entries(errorData?.required ?? {})) {
        const sourcesWithSufficientBalance = sources.filter((source) => {
            return (hexToBigInt(source.balance) >= hexToBigInt(amount) &&
                source.address.toLowerCase() === sourceAddress?.toLowerCase());
        });
        if (sourcesWithSufficientBalance.length === 0) {
            throw new Error('Source address has insufficient balance for a token');
        }
        spendPermissionRequests.push({
            token: token,
            requiredAmount: hexToBigInt(amount),
        });
    }
    return spendPermissionRequests;
}
function isSendCallsParams(params) {
    return (typeof params === 'object' &&
        params !== null &&
        Array.isArray(params) &&
        params.length > 0 &&
        typeof params[0] === 'object' &&
        params[0] !== null &&
        'calls' in params[0]);
}
function isEthSendTransactionParams(params) {
    return (Array.isArray(params) &&
        params.length === 1 &&
        typeof params[0] === 'object' &&
        params[0] !== null &&
        'to' in params[0]);
}
function compute16ByteHash(input) {
    return (0,data_slice/* slice */.di)((0,hash_keccak256/* keccak256 */.S)((0,toHex/* toHex */.nj)(input)), 0, 16);
}
function makeDataSuffix({ attribution, dappOrigin, }) {
    if (!attribution) {
        return;
    }
    if ('auto' in attribution && attribution.auto && dappOrigin) {
        return compute16ByteHash(dappOrigin);
    }
    if ('dataSuffix' in attribution) {
        return attribution.dataSuffix;
    }
    return;
}
/**
 * Checks if a specific capability is present in a request's params
 * @param request The request object to check
 * @param capabilityName The name of the capability to check for
 * @returns boolean indicating if the capability is present
 */
function requestHasCapability(request, capabilityName) {
    if (!Array.isArray(request?.params))
        return false;
    const capabilities = request.params[0]?.capabilities;
    if (!capabilities || typeof capabilities !== 'object')
        return false;
    return capabilityName in capabilities;
}
/**
 * Prepends an item to an array without duplicates
 * @param array The array to prepend to
 * @param item The item to prepend
 * @returns The array with the item prepended
 */
function prependWithoutDuplicates(array, item) {
    const filtered = array.filter((i) => i !== item);
    return [item, ...filtered];
}
/**
 * Appends an item to an array without duplicates
 * @param array The array to append to
 * @param item The item to append
 * @returns The array with the item appended
 */
function appendWithoutDuplicates(array, item) {
    const filtered = array.filter((i) => i !== item);
    return [...filtered, item];
}
async function getCachedWalletConnectResponse() {
    const spendPermissions = utils_store.spendPermissions.get();
    const subAccount = utils_store.subAccounts.get();
    const accounts = utils_store.account.get().accounts;
    if (!accounts) {
        return null;
    }
    const walletConnectAccounts = accounts?.map((account) => ({
        address: account,
        capabilities: {
            subAccounts: subAccount ? [subAccount] : undefined,
            spendPermissions: spendPermissions.length > 0 ? { permissions: spendPermissions } : undefined,
        },
    }));
    return {
        accounts: walletConnectAccounts,
    };
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toBytes.js
var encoding_toBytes = __webpack_require__(644706);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/trim.js
var data_trim = __webpack_require__(38583);
;// ./node_modules/@base-org/account/dist/util/encoding.js


function base64ToBase64Url(base64) {
    return base64.replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}
function arrayBufferToBase64Url(buffer) {
    // First convert to regular base64
    const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer)));
    // Then convert to base64url
    return base64ToBase64Url(base64String);
}
function convertCredentialToJSON({ webauthn, signature, id, }) {
    const signatureRaw = Signature_fromHex(signature);
    return {
        id,
        rawId: arrayBufferToBase64Url((0,encoding_toBytes/* stringToBytes */.Af)(id)),
        response: {
            authenticatorData: arrayBufferToBase64Url((0,encoding_toBytes/* hexToBytes */.aT)(webauthn.authenticatorData)),
            clientDataJSON: arrayBufferToBase64Url((0,encoding_toBytes/* stringToBytes */.Af)(webauthn.clientDataJSON)),
            signature: arrayBufferToBase64Url(asn1EncodeSignature(signatureRaw.r, signatureRaw.s)),
        },
        type: JSON.parse(webauthn.clientDataJSON).type,
    };
}
function asn1EncodeSignature(r, s) {
    // Convert r and s to byte arrays and remove any leading zeros
    const rBytes = (0,encoding_toBytes/* hexToBytes */.aT)((0,data_trim/* trim */.B)((0,toHex/* numberToHex */.cK)(r)));
    const sBytes = (0,encoding_toBytes/* hexToBytes */.aT)((0,data_trim/* trim */.B)((0,toHex/* numberToHex */.cK)(s)));
    // Calculate lengths
    const rLength = rBytes.length;
    const sLength = sBytes.length;
    const totalLength = rLength + sLength + 4; // 4 additional bytes for type and length fields
    // Create the signature buffer
    const signature = new Uint8Array(totalLength + 2); // +2 for sequence header
    // Sequence header
    signature[0] = 0x30; // ASN.1 sequence tag
    signature[1] = totalLength;
    // Encode r value
    signature[2] = 0x02; // ASN.1 integer tag
    signature[3] = rLength;
    signature.set(rBytes, 4);
    // Encode s value
    signature[rLength + 4] = 0x02; // ASN.1 integer tag
    signature[rLength + 5] = sLength;
    signature.set(sBytes, rLength + 6);
    return signature;
}
//# sourceMappingURL=encoding.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeFunctionData.js
var decodeFunctionData = __webpack_require__(464705);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var errors_base = __webpack_require__(345765);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/size.js
var data_size = __webpack_require__(885182);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/signature/parseSignature.js
var parseSignature = __webpack_require__(906304);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodePacked.js
var encodePacked = __webpack_require__(610005);
// EXTERNAL MODULE: ./node_modules/viem/_esm/account-abstraction/constants/abis.js
var abis = __webpack_require__(432544);
// EXTERNAL MODULE: ./node_modules/viem/_esm/account-abstraction/constants/address.js
var constants_address = __webpack_require__(878811);
// EXTERNAL MODULE: ./node_modules/viem/_esm/account-abstraction/accounts/toSmartAccount.js + 3 modules
var toSmartAccount = __webpack_require__(274756);
// EXTERNAL MODULE: ./node_modules/viem/_esm/account-abstraction/utils/userOperation/getUserOperationHash.js + 3 modules
var getUserOperationHash = __webpack_require__(483838);
;// ./node_modules/@base-org/account/dist/sign/base-account/utils/createSmartAccount.js




/**
 * @description Create a Coinbase Smart Account.
 *
 * @param parameters - {@link CreateSmartAccountParameters}
 * @returns Coinbase Smart Account. {@link CreateSmartAccountReturnType}
 *
 * @example
 *
 * const account = createSmartAccount({
 *   client,
 *   owner: privateKeyToAccount('0x...'),
 *   ownerIndex: 0,
 *   address: '0x...',
 *   factoryData: '0x...',
 * })
 */
async function createSmartAccount(parameters) {
    const { owner, ownerIndex, address, client, factoryData } = parameters;
    const entryPoint = {
        abi: abis/* entryPoint06Abi */.hw,
        address: constants_address/* entryPoint06Address */.B9,
        version: '0.6',
    };
    const factory = {
        abi: factoryAbi,
        address: factoryAddress,
    };
    return (0,toSmartAccount/* toSmartAccount */.q)({
        client,
        entryPoint,
        extend: { abi: abi, factory },
        async decodeCalls(data) {
            const result = (0,decodeFunctionData/* decodeFunctionData */.J)({
                abi: abi,
                data,
            });
            if (result.functionName === 'execute')
                return [{ to: result.args[0], value: result.args[1], data: result.args[2] }];
            if (result.functionName === 'executeBatch')
                return result.args[0].map((arg) => ({
                    to: arg.target,
                    value: arg.value,
                    data: arg.data,
                }));
            throw new errors_base/* BaseError */.C(`unable to decode calls for "${result.functionName}"`);
        },
        async encodeCalls(calls) {
            if (calls.length === 1) {
                return (0,encodeFunctionData/* encodeFunctionData */.p)({
                    abi: abi,
                    functionName: 'execute',
                    args: [calls[0].to, calls[0].value ?? BigInt(0), calls[0].data ?? '0x'],
                });
            }
            return (0,encodeFunctionData/* encodeFunctionData */.p)({
                abi: abi,
                functionName: 'executeBatch',
                args: [
                    calls.map((call) => ({
                        data: call.data ?? '0x',
                        target: call.to,
                        value: call.value ?? BigInt(0),
                    })),
                ],
            });
        },
        async getAddress() {
            return address;
        },
        async getFactoryArgs() {
            if (factoryData)
                return { factory: factory.address, factoryData };
            // TODO: support creating factory data
            return { factory: factory.address, factoryData };
        },
        async getStubSignature() {
            if (owner.type === 'webAuthn')
                return '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000';
            return wrapSignature({
                ownerIndex,
                signature: '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c',
            });
        },
        async sign(parameters) {
            const address = await this.getAddress();
            const hash = toReplaySafeHash({
                address,
                chainId: client.chain.id,
                hash: parameters.hash,
            });
            const signature = await createSmartAccount_sign({ hash, owner });
            return wrapSignature({
                ownerIndex,
                signature,
            });
        },
        async signMessage(parameters) {
            const { message } = parameters;
            const address = await this.getAddress();
            const hash = toReplaySafeHash({
                address,
                chainId: client.chain.id,
                hash: (0,hashMessage/* hashMessage */.A)(message),
            });
            const signature = await createSmartAccount_sign({ hash, owner });
            return wrapSignature({
                ownerIndex,
                signature,
            });
        },
        async signTypedData(parameters) {
            const { domain, types, primaryType, message } = parameters;
            const address = await this.getAddress();
            const hash = toReplaySafeHash({
                address,
                chainId: client.chain.id,
                hash: (0,hashTypedData/* hashTypedData */.Zh)({
                    domain,
                    message,
                    primaryType,
                    types,
                }),
            });
            const signature = await createSmartAccount_sign({ hash, owner });
            return wrapSignature({
                ownerIndex,
                signature,
            });
        },
        async signUserOperation(parameters) {
            const { chainId = client.chain.id, ...userOperation } = parameters;
            const address = await this.getAddress();
            const hash = (0,getUserOperationHash/* getUserOperationHash */.Z)({
                chainId,
                entryPointAddress: entryPoint.address,
                entryPointVersion: entryPoint.version,
                userOperation: {
                    ...userOperation,
                    sender: address,
                },
            });
            const signature = await createSmartAccount_sign({ hash, owner });
            return wrapSignature({
                ownerIndex,
                signature,
            });
        },
        userOperation: {
            async estimateGas(userOperation) {
                if (owner.type !== 'webAuthn')
                    return;
                // Accounts with WebAuthn owner require a minimum verification gas limit of 800,000.
                return {
                    verificationGasLimit: BigInt(Math.max(Number(userOperation.verificationGasLimit ?? BigInt(0)), 800_000)),
                };
            },
        },
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////
// Utilities
/////////////////////////////////////////////////////////////////////////////////////////////
/** @internal */
async function createSmartAccount_sign({ hash, owner, }) {
    // WebAuthn Account (Passkey)
    if (owner.type === 'webAuthn') {
        const { signature, webauthn } = await owner.sign({
            hash,
        });
        return toWebAuthnSignature({ signature, webauthn });
    }
    if (owner.sign)
        return owner.sign({ hash });
    throw new errors_base/* BaseError */.C('`owner` does not support raw sign.');
}
/** @internal */
function toReplaySafeHash({ address, chainId, hash, }) {
    return (0,hashTypedData/* hashTypedData */.Zh)({
        domain: {
            chainId,
            name: 'Coinbase Smart Wallet',
            verifyingContract: address,
            version: '1',
        },
        types: {
            CoinbaseSmartWalletMessage: [
                {
                    name: 'hash',
                    type: 'bytes32',
                },
            ],
        },
        primaryType: 'CoinbaseSmartWalletMessage',
        message: {
            hash,
        },
    });
}
/** @internal */
function toWebAuthnSignature({ webauthn, signature, }) {
    const { r, s } = Signature_fromHex(signature);
    return (0,encodeAbiParameters/* encodeAbiParameters */.h)([
        {
            components: [
                {
                    name: 'authenticatorData',
                    type: 'bytes',
                },
                { name: 'clientDataJSON', type: 'bytes' },
                { name: 'challengeIndex', type: 'uint256' },
                { name: 'typeIndex', type: 'uint256' },
                {
                    name: 'r',
                    type: 'uint256',
                },
                {
                    name: 's',
                    type: 'uint256',
                },
            ],
            type: 'tuple',
        },
    ], [
        {
            authenticatorData: webauthn.authenticatorData,
            clientDataJSON: (0,toHex/* stringToHex */.i3)(webauthn.clientDataJSON),
            challengeIndex: BigInt(webauthn.challengeIndex),
            typeIndex: BigInt(webauthn.typeIndex),
            r,
            s,
        },
    ]);
}
/** @internal */
function wrapSignature(parameters) {
    const { ownerIndex = 0 } = parameters;
    const signatureData = (() => {
        if ((0,data_size/* size */.E)(parameters.signature) !== 65)
            return parameters.signature;
        const signature = (0,parseSignature/* parseSignature */.u)(parameters.signature);
        return (0,encodePacked/* encodePacked */.P)(['bytes32', 'bytes32', 'uint8'], [signature.r, signature.s, signature.yParity === 0 ? 27 : 28]);
    })();
    return (0,encodeAbiParameters/* encodeAbiParameters */.h)([
        {
            components: [
                {
                    name: 'ownerIndex',
                    type: 'uint8',
                },
                {
                    name: 'signatureData',
                    type: 'bytes',
                },
            ],
            type: 'tuple',
        },
    ], [
        {
            ownerIndex,
            signatureData,
        },
    ]);
}
//# sourceMappingURL=createSmartAccount.js.map
;// ./node_modules/@base-org/account/dist/sign/base-account/utils/createSubAccountSigner.js








async function createSubAccountSigner({ address, client, factory, factoryData, owner, ownerIndex, parentAddress, attribution, }) {
    const subAccount = {
        address,
        factory,
        factoryData,
    };
    const chainId = client.chain?.id;
    if (!chainId) {
        throw standardErrors.rpc.internal('chainId not found');
    }
    const account = await createSmartAccount({
        owner,
        ownerIndex: ownerIndex ?? 1,
        address,
        client,
        factoryData,
    });
    const request = async (args) => {
        try {
            switch (args.method) {
                case 'wallet_addSubAccount':
                    return subAccount;
                case 'eth_accounts':
                    return [subAccount.address];
                case 'eth_coinbase':
                    return subAccount.address;
                case 'net_version':
                    return chainId.toString();
                case 'eth_chainId':
                    return (0,toHex/* numberToHex */.cK)(chainId);
                case 'eth_sendTransaction': {
                    assertArrayPresence(args.params);
                    const rawParams = args.params[0];
                    assertPresence(rawParams.to, standardErrors.rpc.invalidParams('to is required'));
                    const params = {
                        to: rawParams.to,
                        data: ensureHexString(rawParams.data ?? '0x', true),
                        value: ensureHexString(rawParams.value ?? '0x', true),
                        from: rawParams.from ?? subAccount.address,
                    };
                    // Transform into wallet_sendCalls request
                    const sendCallsRequest = createWalletSendCallsRequest({
                        calls: [params],
                        chainId,
                        from: params.from,
                    });
                    const response = (await request(sendCallsRequest));
                    return waitForCallsTransactionHash({
                        client,
                        id: response,
                    });
                }
                case 'wallet_sendCalls': {
                    assertArrayPresence(args.params);
                    // Get the client for the chain
                    const chainId = get_get(args.params[0], 'chainId');
                    if (!chainId) {
                        throw standardErrors.rpc.invalidParams('chainId is required');
                    }
                    if (!(0,isHex/* isHex */.q)(chainId)) {
                        throw standardErrors.rpc.invalidParams('chainId must be a hex encoded integer');
                    }
                    if (!args.params[0]) {
                        throw standardErrors.rpc.invalidParams('params are required');
                    }
                    if (!('calls' in args.params[0])) {
                        throw standardErrors.rpc.invalidParams('calls are required');
                    }
                    let prepareCallsRequest = {
                        method: 'wallet_prepareCalls',
                        params: [
                            {
                                version: '1.0',
                                calls: args.params[0].calls,
                                chainId: chainId,
                                from: subAccount.address,
                                capabilities: 'capabilities' in args.params[0]
                                    ? args.params[0].capabilities
                                    : {},
                            },
                        ],
                    };
                    if (parentAddress) {
                        prepareCallsRequest = injectRequestCapabilities(prepareCallsRequest, {
                            funding: [
                                {
                                    type: 'spendPermission',
                                    data: {
                                        autoApply: true,
                                        sources: [parentAddress],
                                        preference: 'PREFER_DIRECT_BALANCE',
                                    },
                                },
                            ],
                        });
                    }
                    let prepareCallsResponse = (await request(prepareCallsRequest));
                    const signResponse = await owner.sign?.({
                        // Hash returned from wallet_prepareCalls is double hex encoded
                        hash: (0,fromHex/* hexToString */.IQ)(prepareCallsResponse.signatureRequest.hash),
                    });
                    let signatureData;
                    if (!signResponse) {
                        throw standardErrors.rpc.internal('signature not found');
                    }
                    if ((0,isHex/* isHex */.q)(signResponse)) {
                        signatureData = {
                            type: 'secp256k1',
                            data: {
                                address: owner.address,
                                signature: signResponse,
                            },
                        };
                    }
                    else {
                        signatureData = {
                            type: 'webauthn',
                            data: {
                                signature: JSON.stringify(convertCredentialToJSON({
                                    id: owner.id ?? '1',
                                    ...signResponse,
                                })),
                                publicKey: owner.publicKey,
                            },
                        };
                    }
                    const sendPreparedCallsResponse = (await request({
                        method: 'wallet_sendPreparedCalls',
                        params: [
                            {
                                version: '1.0',
                                type: prepareCallsResponse.type,
                                data: prepareCallsResponse.userOp,
                                chainId: prepareCallsResponse.chainId,
                                signature: signatureData,
                            },
                        ],
                    }));
                    return sendPreparedCallsResponse[0];
                }
                case 'wallet_sendPreparedCalls': {
                    assertArrayPresence(args.params);
                    // Get the client for the chain
                    const chainId = get_get(args.params[0], 'chainId');
                    if (!chainId) {
                        throw standardErrors.rpc.invalidParams('chainId is required');
                    }
                    if (!(0,isHex/* isHex */.q)(chainId)) {
                        throw standardErrors.rpc.invalidParams('chainId must be a hex encoded integer');
                    }
                    const sendPreparedCallsResponse = await client.request({
                        method: 'wallet_sendPreparedCalls',
                        params: args.params,
                    });
                    return sendPreparedCallsResponse;
                }
                case 'wallet_prepareCalls': {
                    assertArrayPresence(args.params);
                    // Get the client for the chain
                    const chainId = get_get(args.params[0], 'chainId');
                    if (!chainId) {
                        throw standardErrors.rpc.invalidParams('chainId is required');
                    }
                    if (!(0,isHex/* isHex */.q)(chainId)) {
                        throw standardErrors.rpc.invalidParams('chainId must be a hex encoded integer');
                    }
                    if (!args.params[0]) {
                        throw standardErrors.rpc.invalidParams('params are required');
                    }
                    if (!get_get(args.params[0], 'calls')) {
                        throw standardErrors.rpc.invalidParams('calls are required');
                    }
                    const prepareCallsParams = args.params[0];
                    if (attribution &&
                        prepareCallsParams.capabilities &&
                        !('attribution' in prepareCallsParams.capabilities)) {
                        prepareCallsParams.capabilities.attribution = attribution;
                    }
                    const prepareCallsResponse = await client.request({
                        method: 'wallet_prepareCalls',
                        params: [{ ...args.params[0], chainId: chainId }],
                    });
                    return prepareCallsResponse;
                }
                case 'personal_sign': {
                    assertArrayPresence(args.params);
                    // Param is expected to be a hex encoded string
                    if (!(0,isHex/* isHex */.q)(args.params[0])) {
                        throw standardErrors.rpc.invalidParams('message must be a hex encoded string');
                    }
                    // signMessage expects the unencoded message
                    const message = (0,fromHex/* hexToString */.IQ)(args.params[0]);
                    return account.signMessage({ message });
                }
                case 'eth_signTypedData_v4': {
                    assertArrayPresence(args.params);
                    const typedData = typeof args.params[1] === 'string' ? JSON.parse(args.params[1]) : args.params[1];
                    return account.signTypedData(typedData);
                }
                case 'eth_signTypedData_v1':
                case 'eth_signTypedData_v3':
                case 'wallet_addEthereumChain':
                case 'wallet_switchEthereumChain':
                default:
                    throw standardErrors.rpc.methodNotSupported();
            }
        }
        catch (error) {
            // Convert error to RPC error if possible
            if (isViemError(error)) {
                const newError = viemHttpErrorToProviderError(error);
                if (newError) {
                    throw newError;
                }
            }
            throw error;
        }
    };
    return { request };
}
//# sourceMappingURL=createSubAccountSigner.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/pad.js
var data_pad = __webpack_require__(540586);
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/getCode.js
var getCode = __webpack_require__(67309);
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/readContract.js
var readContract = __webpack_require__(426724);
;// ./node_modules/@base-org/account/dist/sign/base-account/utils/findOwnerIndex.js




async function findOwnerIndex({ address, client, publicKey, factory, factoryData, }) {
    const code = await (0,getCode/* getCode */.Q)(client, {
        address,
    });
    // Check index of owner in the factoryData
    // Note: importing an undeployed contract might need to be handled differently
    // The implemention will likely require the signer to tell us the index
    if (!code && factory && factoryData) {
        const initData = (0,decodeFunctionData/* decodeFunctionData */.J)({
            abi: factoryAbi,
            data: factoryData,
        });
        if (initData.functionName !== 'createAccount') {
            throw standardErrors.rpc.internal('unknown factory function');
        }
        const [owners] = initData.args;
        return owners.findIndex((owner) => {
            return owner.toLowerCase() === formatPublicKey(publicKey).toLowerCase();
        });
    }
    const ownerCount = await (0,readContract/* readContract */.J)(client, {
        address,
        abi: abi,
        functionName: 'ownerCount',
    });
    // Iterate from highest index down and return early when found
    for (let i = Number(ownerCount) - 1; i >= 0; i--) {
        const owner = await (0,readContract/* readContract */.J)(client, {
            address,
            abi: abi,
            functionName: 'ownerAtIndex',
            args: [BigInt(i)],
        });
        const formatted = formatPublicKey(publicKey);
        if (owner.toLowerCase() === formatted.toLowerCase()) {
            return i;
        }
    }
    return -1;
}
/**
 * Formats 20 byte addresses to 32 byte public keys. Contract uses 32 byte keys for owners.
 * @param publicKey - The public key to format
 * @returns The formatted public key
 */
function formatPublicKey(publicKey) {
    if ((0,isAddress/* isAddress */.P)(publicKey)) {
        return (0,data_pad/* pad */.eV)(publicKey);
    }
    return publicKey;
}
//# sourceMappingURL=findOwnerIndex.js.map
;// ./node_modules/@base-org/account/dist/sign/base-account/utils/presentAddOwnerDialog.js



async function presentAddOwnerDialog() {
    const appName = store.config.get().metadata?.appName ?? 'App';
    const dialog = initDialog();
    return new Promise((resolve) => {
        logDialogShown({ dialogContext: 'sub_account_add_owner' });
        dialog.presentItem({
            title: `Re-authorize ${appName}`,
            message: `${appName} has lost access to your account. Please sign at the next step to re-authorize ${appName}`,
            onClose: () => {
                logDialogDismissed({ dialogContext: 'sub_account_add_owner' });
                resolve('cancel');
            },
            actionItems: [
                {
                    text: 'Continue',
                    variant: 'primary',
                    onClick: () => {
                        logDialogActionClicked({
                            dialogContext: 'sub_account_add_owner',
                            dialogAction: 'confirm',
                        });
                        dialog.clear();
                        resolve('authenticate');
                    },
                },
                {
                    text: 'Not now',
                    variant: 'secondary',
                    onClick: () => {
                        logDialogActionClicked({
                            dialogContext: 'sub_account_add_owner',
                            dialogAction: 'cancel',
                        });
                        dialog.clear();
                        resolve('cancel');
                    },
                },
            ],
        });
    });
}
//# sourceMappingURL=presentAddOwnerDialog.js.map
;// ./node_modules/@base-org/account/dist/sign/base-account/utils/handleAddSubAccountOwner.js









async function handleAddSubAccountOwner({ ownerAccount, globalAccountRequest, chainId, }) {
    const account = store.account.get();
    const subAccount = store.subAccounts.get();
    const globalAccount = account.accounts?.find((account) => account.toLowerCase() !== subAccount?.address.toLowerCase());
    assertPresence(globalAccount, standardErrors.provider.unauthorized('no global account'));
    assertPresence(account.chain?.id, standardErrors.provider.unauthorized('no chain id'));
    assertPresence(subAccount?.address, standardErrors.provider.unauthorized('no sub account'));
    const calls = [];
    if (ownerAccount.type === 'local' && ownerAccount.address) {
        calls.push({
            to: subAccount.address,
            data: (0,encodeFunctionData/* encodeFunctionData */.p)({
                abi: abi,
                functionName: 'addOwnerAddress',
                args: [ownerAccount.address],
            }),
            value: (0,toHex/* toHex */.nj)(0),
        });
    }
    if (ownerAccount.publicKey) {
        const [x, y] = (0,decodeAbiParameters/* decodeAbiParameters */.n)([{ type: 'bytes32' }, { type: 'bytes32' }], ownerAccount.publicKey);
        calls.push({
            to: subAccount.address,
            data: (0,encodeFunctionData/* encodeFunctionData */.p)({
                abi: abi,
                functionName: 'addOwnerPublicKey',
                args: [x, y],
            }),
            value: (0,toHex/* toHex */.nj)(0),
        });
    }
    const request = {
        method: 'wallet_sendCalls',
        params: [
            {
                version: '1',
                calls,
                chainId: (0,toHex/* numberToHex */.cK)(chainId),
                from: globalAccount,
            },
        ],
    };
    const selection = await presentAddOwnerDialog();
    if (selection === 'cancel') {
        throw standardErrors.provider.unauthorized('user cancelled');
    }
    const callsId = (await globalAccountRequest(request));
    const client = getClient(account.chain.id);
    assertPresence(client, standardErrors.rpc.internal(`client not found for chainId ${account.chain.id}`));
    const callsResult = await (0,waitForCallsStatus/* waitForCallsStatus */.c)(client, {
        id: callsId,
    });
    if (callsResult.status !== 'success') {
        throw standardErrors.rpc.internal('add owner call failed');
    }
    const ownerIndex = await findOwnerIndex({
        address: subAccount.address,
        publicKey: ownerAccount.type === 'local' && ownerAccount.address
            ? ownerAccount.address
            : ownerAccount.publicKey,
        client,
    });
    if (ownerIndex === -1) {
        throw standardErrors.rpc.internal('failed to find owner index');
    }
    return ownerIndex;
}
//# sourceMappingURL=handleAddSubAccountOwner.js.map
;// ./node_modules/@base-org/account/dist/sign/base-account/utils/routeThroughGlobalAccount.js




/**
 * This function is used to send a request to the global account.
 * It is used to execute a request that requires a spend permission through the global account.
 * @returns The result of the request.
 */
async function routeThroughGlobalAccount({ request, globalAccountAddress, subAccountAddress, client, globalAccountRequest, chainId, prependCalls, }) {
    // Construct call to execute the original calls using executeBatch
    let originalSendCallsParams;
    if (request.method === 'wallet_sendCalls' && isSendCallsParams(request.params)) {
        originalSendCallsParams = request.params[0];
    }
    else if (request.method === 'eth_sendTransaction' &&
        isEthSendTransactionParams(request.params)) {
        const sendCallsRequest = createWalletSendCallsRequest({
            calls: [request.params[0]],
            chainId,
            from: request.params[0].from,
        });
        originalSendCallsParams = sendCallsRequest.params[0];
    }
    else {
        throw new Error(`Could not get original call from ${request.method} request`);
    }
    const subAccountCallData = (0,encodeFunctionData/* encodeFunctionData */.p)({
        abi: abi,
        functionName: 'executeBatch',
        args: [
            originalSendCallsParams.calls.map((call) => ({
                target: call.to,
                value: (0,fromHex/* hexToBigInt */.uU)(call.value ?? '0x0'),
                data: call.data ?? '0x',
            })),
        ],
    });
    // Send using wallet_sendCalls
    const calls = [
        ...(prependCalls ?? []),
        { data: subAccountCallData, to: subAccountAddress, value: '0x0' },
    ];
    const requestToParent = injectRequestCapabilities({
        method: 'wallet_sendCalls',
        params: [
            {
                ...originalSendCallsParams,
                calls,
                from: globalAccountAddress,
                version: '2.0.0',
                atomicRequired: true,
            },
        ],
    }, {
        spendPermissions: {
            request: {
                spender: subAccountAddress,
            },
        },
    });
    const result = (await globalAccountRequest(requestToParent));
    let callsId = result.id;
    // Cache returned spend permissions
    if (result.capabilities?.spendPermissions) {
        spendPermissions.set(result.capabilities.spendPermissions.permissions);
    }
    // Wait for transaction hash if sending a transaction
    if (request.method === 'eth_sendTransaction') {
        return waitForCallsTransactionHash({
            client,
            id: callsId,
        });
    }
    return result;
}
//# sourceMappingURL=routeThroughGlobalAccount.js.map
;// ./node_modules/@base-org/account/dist/sign/base-account/utils/handleInsufficientBalance.js




async function handleInsufficientBalanceError({ globalAccountAddress, subAccountAddress, client, request, globalAccountRequest, }) {
    const chainId = client.chain?.id;
    assertPresence(chainId, standardErrors.rpc.internal(`invalid chainId`));
    try {
        await presentSubAccountFundingDialog();
    }
    catch {
        throw standardErrors.provider.userRejectedRequest({
            message: 'User cancelled funding',
        });
    }
    const result = await routeThroughGlobalAccount({
        request,
        globalAccountAddress,
        subAccountAddress,
        client,
        globalAccountRequest,
        chainId,
    });
    return result;
}
//# sourceMappingURL=handleInsufficientBalance.js.map
;// ./node_modules/@base-org/account/dist/sign/base-account/Signer.js






















class Signer {
    communicator;
    keyManager;
    callback;
    accounts;
    chain;
    constructor(params) {
        this.communicator = params.communicator;
        this.callback = params.callback;
        this.keyManager = new SCWKeyManager();
        const { account, chains } = store.getState();
        this.accounts = account.accounts ?? [];
        this.chain = account.chain ?? {
            id: params.metadata.appChainIds?.[0] ?? 1,
        };
        // Initialize chain clients if chains are provided
        if (chains) {
            createClients(chains);
        }
        // Note: getClient will automatically create fallback clients when needed
    }
    get isConnected() {
        return this.accounts.length > 0;
    }
    async handshake(args) {
        const correlationId = correlationIds.get(args);
        logHandshakeStarted({ method: args.method, correlationId });
        try {
            // Open the popup before constructing the request message.
            // This is to ensure that the popup is not blocked by some browsers (i.e. Safari)
            await this.communicator.waitForPopupLoaded?.();
            const handshakeMessage = await this.createRequestMessage({
                handshake: {
                    method: args.method,
                    params: args.params ?? [],
                },
            }, correlationId);
            const response = await this.communicator.postRequestAndWaitForResponse(handshakeMessage);
            // store peer's public key
            if ('failure' in response.content) {
                throw response.content.failure;
            }
            const peerPublicKey = await importKeyFromHexString('public', response.sender);
            await this.keyManager.setPeerPublicKey(peerPublicKey);
            const decrypted = await this.decryptResponseMessage(response);
            this.handleResponse(args, decrypted);
            logHandshakeCompleted({ method: args.method, correlationId });
        }
        catch (error) {
            logHandshakeError({
                method: args.method,
                correlationId,
                errorMessage: parseErrorMessageFromAny(error),
            });
            throw error;
        }
    }
    async request(request) {
        const correlationId = correlationIds.get(request);
        scw_signer_logRequestStarted({ method: request.method, correlationId });
        try {
            const result = await this._request(request);
            logRequestCompleted({ method: request.method, correlationId });
            return result;
        }
        catch (error) {
            scw_signer_logRequestError({
                method: request.method,
                correlationId,
                errorMessage: parseErrorMessageFromAny(error),
            });
            throw error;
        }
    }
    async _request(request) {
        if (this.accounts.length === 0) {
            switch (request.method) {
                case 'wallet_switchEthereumChain': {
                    assertParamsChainId(request.params);
                    this.chain.id = Number(request.params[0].chainId);
                    return;
                }
                case 'wallet_connect': {
                    // Wait for the popup to be loaded before making async calls
                    await this.communicator.waitForPopupLoaded?.();
                    await initSubAccountConfig();
                    const subAccountsConfig = store.subAccountsConfig.get();
                    // Inject capabilities from config (e.g., addSubAccount when creation: 'on-connect')
                    const modifiedRequest = injectRequestCapabilities(request, subAccountsConfig?.capabilities ?? {});
                    return this.sendRequestToPopup(modifiedRequest);
                }
                case 'wallet_sendCalls':
                case 'wallet_sign': {
                    return this.sendRequestToPopup(request);
                }
                default:
                    throw standardErrors.provider.unauthorized();
            }
        }
        if (this.shouldRequestUseSubAccountSigner(request)) {
            const correlationId = correlationIds.get(request);
            logSubAccountRequestStarted({ method: request.method, correlationId });
            try {
                const result = await this.sendRequestToSubAccountSigner(request);
                logSubAccountRequestCompleted({ method: request.method, correlationId });
                return result;
            }
            catch (error) {
                logSubAccountRequestError({
                    method: request.method,
                    correlationId,
                    errorMessage: parseErrorMessageFromAny(error),
                });
                throw error;
            }
        }
        switch (request.method) {
            case 'eth_requestAccounts':
            case 'eth_accounts': {
                const subAccount = store.subAccounts.get();
                const subAccountsConfig = store.subAccountsConfig.get();
                if (subAccount?.address) {
                    // if defaultAccount is 'sub' and we have a sub account, we need to return it as the first account
                    // otherwise, we just append it to the accounts array
                    this.accounts =
                        subAccountsConfig?.defaultAccount === 'sub'
                            ? prependWithoutDuplicates(this.accounts, subAccount.address)
                            : appendWithoutDuplicates(this.accounts, subAccount.address);
                }
                this.callback?.('connect', { chainId: (0,toHex/* numberToHex */.cK)(this.chain.id) });
                return this.accounts;
            }
            case 'eth_coinbase':
                return this.accounts[0];
            case 'net_version':
                return this.chain.id;
            case 'eth_chainId':
                return (0,toHex/* numberToHex */.cK)(this.chain.id);
            case 'wallet_getCapabilities':
                return this.handleGetCapabilitiesRequest(request);
            case 'wallet_switchEthereumChain':
                return this.handleSwitchChainRequest(request);
            case 'eth_ecRecover':
            case 'personal_sign':
            case 'wallet_sign':
            case 'personal_ecRecover':
            case 'eth_signTransaction':
            case 'eth_sendTransaction':
            case 'eth_signTypedData_v1':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
            case 'wallet_addEthereumChain':
            case 'wallet_watchAsset':
            case 'wallet_sendCalls':
            case 'wallet_showCallsStatus':
            case 'wallet_grantPermissions':
                return this.sendRequestToPopup(request);
            case 'wallet_connect': {
                // Wait for the popup to be loaded before making async calls
                await this.communicator.waitForPopupLoaded?.();
                await initSubAccountConfig();
                const subAccountsConfig = store.subAccountsConfig.get();
                const modifiedRequest = injectRequestCapabilities(request, subAccountsConfig?.capabilities ?? {});
                const result = await this.sendRequestToPopup(modifiedRequest);
                this.callback?.('connect', { chainId: (0,toHex/* numberToHex */.cK)(this.chain.id) });
                return result;
            }
            // Sub Account Support
            case 'wallet_getSubAccounts': {
                const subAccount = store.subAccounts.get();
                if (subAccount?.address) {
                    return {
                        subAccounts: [subAccount],
                    };
                }
                if (!this.chain.rpcUrl) {
                    throw standardErrors.rpc.internal('No RPC URL set for chain');
                }
                const response = (await fetchRPCRequest(request, this.chain.rpcUrl));
                assertArrayPresence(response.subAccounts, 'subAccounts');
                if (response.subAccounts.length > 0) {
                    // cache the sub account
                    assertSubAccount(response.subAccounts[0]);
                    const subAccount = response.subAccounts[0];
                    store.subAccounts.set({
                        address: subAccount.address,
                        factory: subAccount.factory,
                        factoryData: subAccount.factoryData,
                    });
                }
                return response;
            }
            case 'wallet_addSubAccount':
                return this.addSubAccount(request);
            case 'coinbase_fetchPermissions': {
                assertFetchPermissionsRequest(request);
                const completeRequest = fillMissingParamsForFetchPermissions(request);
                const permissions = (await fetchRPCRequest(completeRequest, CB_WALLET_RPC_URL));
                const requestedChainId = (0,fromHex/* hexToNumber */.ME)(completeRequest.params?.[0].chainId);
                store.spendPermissions.set(permissions.permissions.map((permission) => ({
                    ...permission,
                    chainId: requestedChainId,
                })));
                return permissions;
            }
            case 'coinbase_fetchPermission': {
                const fetchPermissionRequest = request;
                const response = (await fetchRPCRequest(fetchPermissionRequest, CB_WALLET_RPC_URL));
                // Store the single permission if it has a chainId
                if (response.permission && response.permission.chainId) {
                    store.spendPermissions.set([response.permission]);
                }
                return response;
            }
            default:
                if (!this.chain.rpcUrl) {
                    throw standardErrors.rpc.internal('No RPC URL set for chain');
                }
                return fetchRPCRequest(request, this.chain.rpcUrl);
        }
    }
    async sendRequestToPopup(request) {
        // Open the popup before constructing the request message.
        // This is to ensure that the popup is not blocked by some browsers (i.e. Safari)
        await this.communicator.waitForPopupLoaded?.();
        const response = await this.sendEncryptedRequest(request);
        const decrypted = await this.decryptResponseMessage(response);
        return this.handleResponse(request, decrypted);
    }
    async handleResponse(request, decrypted) {
        const result = decrypted.result;
        if ('error' in result)
            throw result.error;
        switch (request.method) {
            case 'eth_requestAccounts': {
                const accounts = result.value;
                this.accounts = accounts;
                store.account.set({
                    accounts,
                    chain: this.chain,
                });
                this.callback?.('accountsChanged', accounts);
                break;
            }
            case 'wallet_connect': {
                const response = result.value;
                const accounts = response.accounts.map((account) => account.address);
                this.accounts = accounts;
                store.account.set({
                    accounts,
                });
                const account = response.accounts.at(0);
                const capabilities = account?.capabilities;
                if (capabilities?.subAccounts) {
                    const capabilityResponse = capabilities?.subAccounts;
                    assertArrayPresence(capabilityResponse, 'subAccounts');
                    assertSubAccount(capabilityResponse[0]);
                    store.subAccounts.set({
                        address: capabilityResponse[0].address,
                        factory: capabilityResponse[0].factory,
                        factoryData: capabilityResponse[0].factoryData,
                    });
                }
                const subAccount = store.subAccounts.get();
                const subAccountsConfig = store.subAccountsConfig.get();
                if (subAccount?.address) {
                    // Sub account should be returned as the default account if defaultAccount is 'sub'
                    this.accounts =
                        subAccountsConfig?.defaultAccount === 'sub'
                            ? prependWithoutDuplicates(this.accounts, subAccount.address)
                            : appendWithoutDuplicates(this.accounts, subAccount.address);
                }
                const spendPermissions = response?.accounts?.[0].capabilities?.spendPermissions;
                if (spendPermissions && 'permissions' in spendPermissions) {
                    store.spendPermissions.set(spendPermissions?.permissions);
                }
                this.callback?.('accountsChanged', this.accounts);
                break;
            }
            case 'wallet_addSubAccount': {
                assertSubAccount(result.value);
                const subAccount = result.value;
                store.subAccounts.set(subAccount);
                const subAccountsConfig = store.subAccountsConfig.get();
                this.accounts =
                    subAccountsConfig?.defaultAccount === 'sub'
                        ? prependWithoutDuplicates(this.accounts, subAccount.address)
                        : appendWithoutDuplicates(this.accounts, subAccount.address);
                this.callback?.('accountsChanged', this.accounts);
                break;
            }
            default:
                break;
        }
        return result.value;
    }
    async cleanup() {
        const metadata = store.config.get().metadata;
        await this.keyManager.clear();
        // clear the store
        store.account.clear();
        store.subAccounts.clear();
        store.spendPermissions.clear();
        store.chains.clear();
        // reset the signer
        this.accounts = [];
        this.chain = {
            id: metadata?.appChainIds?.[0] ?? 1,
        };
    }
    /**
     * @returns `null` if the request was successful.
     * https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain
     */
    async handleSwitchChainRequest(request) {
        assertParamsChainId(request.params);
        const chainId = ensureIntNumber(request.params[0].chainId);
        const localResult = this.updateChain(chainId);
        if (localResult)
            return null;
        const popupResult = await this.sendRequestToPopup(request);
        if (popupResult === null) {
            this.updateChain(chainId);
        }
        return popupResult;
    }
    async handleGetCapabilitiesRequest(request) {
        assertGetCapabilitiesParams(request.params);
        const requestedAccount = request.params[0];
        const filterChainIds = request.params[1]; // Optional second parameter
        if (!this.accounts.some((account) => (0,isAddressEqual/* isAddressEqual */.h)(account, requestedAccount))) {
            throw standardErrors.provider.unauthorized('no active account found when getting capabilities');
        }
        const capabilities = store.getState().account.capabilities;
        // Return empty object if capabilities is undefined
        if (!capabilities) {
            return {};
        }
        // If no filter is provided, return all capabilities
        if (!filterChainIds || filterChainIds.length === 0) {
            return capabilities;
        }
        // Convert filter chain IDs to numbers once for efficient lookup
        const filterChainNumbers = new Set(filterChainIds.map((chainId) => (0,fromHex/* hexToNumber */.ME)(chainId)));
        // Filter capabilities
        const filteredCapabilities = Object.fromEntries(Object.entries(capabilities).filter(([capabilityKey]) => {
            try {
                const capabilityChainNumber = (0,fromHex/* hexToNumber */.ME)(capabilityKey);
                return filterChainNumbers.has(capabilityChainNumber);
            }
            catch {
                // If capabilityKey is not a valid hex string, exclude it
                return false;
            }
        }));
        return filteredCapabilities;
    }
    async sendEncryptedRequest(request) {
        const sharedSecret = await this.keyManager.getSharedSecret();
        if (!sharedSecret) {
            throw standardErrors.provider.unauthorized('No shared secret found when encrypting request');
        }
        const encrypted = await encryptContent({
            action: request,
            chainId: this.chain.id,
        }, sharedSecret);
        const correlationId = correlationIds.get(request);
        const message = await this.createRequestMessage({ encrypted }, correlationId);
        return this.communicator.postRequestAndWaitForResponse(message);
    }
    async createRequestMessage(content, correlationId) {
        const publicKey = await exportKeyToHexString('public', await this.keyManager.getOwnPublicKey());
        return {
            id: crypto.randomUUID(),
            correlationId,
            sender: publicKey,
            content,
            timestamp: new Date(),
        };
    }
    async decryptResponseMessage(message) {
        const content = message.content;
        // throw protocol level error
        if ('failure' in content) {
            throw content.failure;
        }
        const sharedSecret = await this.keyManager.getSharedSecret();
        if (!sharedSecret) {
            throw standardErrors.provider.unauthorized('Invalid session: no shared secret found when decrypting response');
        }
        const response = await decryptContent(content.encrypted, sharedSecret);
        const availableChains = response.data?.chains;
        if (availableChains) {
            const nativeCurrencies = response.data?.nativeCurrencies;
            const chains = Object.entries(availableChains).map(([id, rpcUrl]) => {
                const nativeCurrency = nativeCurrencies?.[Number(id)];
                return {
                    id: Number(id),
                    rpcUrl,
                    ...(nativeCurrency ? { nativeCurrency } : {}),
                };
            });
            store.chains.set(chains);
            this.updateChain(this.chain.id, chains);
            createClients(chains);
        }
        const walletCapabilities = response.data?.capabilities;
        if (walletCapabilities) {
            store.account.set({
                capabilities: walletCapabilities,
            });
        }
        return response;
    }
    updateChain(chainId, newAvailableChains) {
        const state = store.getState();
        const chains = newAvailableChains ?? state.chains;
        const chain = chains?.find((chain) => chain.id === chainId);
        if (!chain)
            return false;
        if (chain !== this.chain) {
            this.chain = chain;
            store.account.set({
                chain,
            });
            this.callback?.('chainChanged', hexStringFromNumber(chain.id));
        }
        return true;
    }
    async addSubAccount(request) {
        const state = store.getState();
        const subAccount = state.subAccount;
        const subAccountsConfig = store.subAccountsConfig.get();
        if (subAccount?.address) {
            this.accounts =
                subAccountsConfig?.defaultAccount === 'sub'
                    ? prependWithoutDuplicates(this.accounts, subAccount.address)
                    : appendWithoutDuplicates(this.accounts, subAccount.address);
            this.callback?.('accountsChanged', this.accounts);
            return subAccount;
        }
        // Wait for the popup to be loaded before sending the request
        await this.communicator.waitForPopupLoaded?.();
        if (Array.isArray(request.params) &&
            request.params.length > 0 &&
            request.params[0].account &&
            request.params[0].account.type === 'create') {
            let keys;
            if (request.params[0].account.keys && request.params[0].account.keys.length > 0) {
                keys = request.params[0].account.keys;
            }
            else {
                const config = store.subAccountsConfig.get() ?? {};
                const { account: ownerAccount } = config.toOwnerAccount
                    ? await config.toOwnerAccount()
                    : await getCryptoKeyAccount();
                if (!ownerAccount) {
                    throw standardErrors.provider.unauthorized('could not get subaccount owner account when adding sub account');
                }
                keys = [
                    {
                        type: ownerAccount.address ? 'address' : 'webauthn-p256',
                        publicKey: ownerAccount.address || ownerAccount.publicKey,
                    },
                ];
            }
            request.params[0].account.keys = keys;
        }
        const response = await this.sendRequestToPopup(request);
        assertSubAccount(response);
        return response;
    }
    shouldRequestUseSubAccountSigner(request) {
        const sender = getSenderFromRequest(request);
        const subAccount = store.subAccounts.get();
        if (sender) {
            return sender.toLowerCase() === subAccount?.address.toLowerCase();
        }
        return false;
    }
    async sendRequestToSubAccountSigner(request) {
        const subAccount = store.subAccounts.get();
        const subAccountsConfig = store.subAccountsConfig.get();
        const config = store.config.get();
        assertPresence(subAccount?.address, standardErrors.provider.unauthorized('no active sub account when sending request to sub account signer'));
        // Get the owner account from the config
        const ownerAccount = subAccountsConfig?.toOwnerAccount
            ? await subAccountsConfig.toOwnerAccount()
            : await getCryptoKeyAccount();
        assertPresence(ownerAccount?.account, standardErrors.provider.unauthorized('no active sub account owner when sending request to sub account signer'));
        const sender = getSenderFromRequest(request);
        // if sender is undefined, we inject the active sub account
        // address into the params for the supported request methods
        if (sender === undefined) {
            request = addSenderToRequest(request, subAccount.address);
        }
        const globalAccountAddress = this.accounts.find((account) => account.toLowerCase() !== subAccount.address.toLowerCase());
        assertPresence(globalAccountAddress, standardErrors.provider.unauthorized('no global account found when sending request to sub account signer'));
        const dataSuffix = makeDataSuffix({
            attribution: config.preference?.attribution,
            dappOrigin: window.location.origin,
        });
        // Determine effective chainId - use request chainId for wallet_sendCalls, default otherwise
        const walletSendCallsChainId = request.method === 'wallet_sendCalls' &&
            request.params?.[0]?.chainId;
        const chainId = walletSendCallsChainId ? (0,fromHex/* hexToNumber */.ME)(walletSendCallsChainId) : this.chain.id;
        const client = getClient(chainId);
        assertPresence(client, standardErrors.rpc.internal(`client not found for chainId ${chainId} when sending request to sub account signer`));
        if (['eth_sendTransaction', 'wallet_sendCalls'].includes(request.method)) {
            // If we have never had a spend permission, we need to do this tx through the global account
            // Only perform this check if funding mode is 'spend-permissions'
            const subAccountsConfig = store.subAccountsConfig.get();
            if (subAccountsConfig?.funding === 'spend-permissions') {
                const storedSpendPermissions = spendPermissions.get();
                if (storedSpendPermissions.length === 0) {
                    const result = await routeThroughGlobalAccount({
                        request,
                        globalAccountAddress,
                        subAccountAddress: subAccount.address,
                        client,
                        globalAccountRequest: this.sendRequestToPopup.bind(this),
                        chainId,
                    });
                    return result;
                }
            }
        }
        const publicKey = ownerAccount.account.type === 'local'
            ? ownerAccount.account.address
            : ownerAccount.account.publicKey;
        let ownerIndex = await findOwnerIndex({
            address: subAccount.address,
            factory: subAccount.factory,
            factoryData: subAccount.factoryData,
            publicKey,
            client,
        });
        if (ownerIndex === -1) {
            const correlationId = correlationIds.get(request);
            logAddOwnerStarted({ method: request.method, correlationId });
            try {
                ownerIndex = await handleAddSubAccountOwner({
                    ownerAccount: ownerAccount.account,
                    globalAccountRequest: this.sendRequestToPopup.bind(this),
                    chainId: chainId,
                });
                logAddOwnerCompleted({ method: request.method, correlationId });
            }
            catch (error) {
                logAddOwnerError({
                    method: request.method,
                    correlationId,
                    errorMessage: parseErrorMessageFromAny(error),
                });
                return standardErrors.provider.unauthorized('failed to add sub account owner when sending request to sub account signer');
            }
        }
        const { request: subAccountRequest } = await createSubAccountSigner({
            address: subAccount.address,
            owner: ownerAccount.account,
            client: client,
            factory: subAccount.factory,
            factoryData: subAccount.factoryData,
            parentAddress: globalAccountAddress,
            attribution: dataSuffix ? { suffix: dataSuffix } : undefined,
            ownerIndex,
        });
        try {
            const result = await subAccountRequest(request);
            return result;
        }
        catch (error) {
            // Skip insufficient balance error handling if funding mode is 'manual'
            const subAccountsConfig = store.subAccountsConfig.get();
            if (subAccountsConfig?.funding === 'manual') {
                throw error;
            }
            let errorObject;
            if (isViemError(error)) {
                errorObject = JSON.parse(error.details);
            }
            else if (isActionableHttpRequestError(error)) {
                errorObject = error;
            }
            else {
                throw error;
            }
            if (!(isActionableHttpRequestError(errorObject) && errorObject.data)) {
                throw error;
            }
            if (!errorObject.data) {
                throw error;
            }
            const correlationId = correlationIds.get(request);
            logInsufficientBalanceErrorHandlingStarted({ method: request.method, correlationId });
            try {
                const result = await handleInsufficientBalanceError({
                    errorData: errorObject.data,
                    globalAccountAddress,
                    subAccountAddress: subAccount.address,
                    client,
                    request,
                    globalAccountRequest: this.request.bind(this),
                });
                logInsufficientBalanceErrorHandlingCompleted({ method: request.method, correlationId });
                return result;
            }
            catch (handlingError) {
                console.error(handlingError);
                logInsufficientBalanceErrorHandlingError({
                    method: request.method,
                    correlationId,
                    errorMessage: parseErrorMessageFromAny(handlingError),
                });
                throw error;
            }
        }
    }
}
//# sourceMappingURL=Signer.js.map
;// ./node_modules/@base-org/account/dist/interface/builder/core/BaseAccountProvider.js














class BaseAccountProvider extends ProviderEventEmitter {
    communicator;
    signer;
    constructor({ metadata, preference: { walletUrl, ...preference }, }) {
        super();
        this.communicator = new Communicator({
            url: walletUrl,
            metadata,
            preference,
        });
        this.signer = new Signer({
            metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
        });
    }
    async request(args) {
        // correlation id across the entire request lifecycle
        const correlationId = crypto.randomUUID();
        correlationIds.set(args, correlationId);
        logRequestStarted({ method: args.method, correlationId });
        try {
            const result = await this._request(args);
            logRequestResponded({
                method: args.method,
                correlationId,
            });
            return result;
        }
        catch (error) {
            logRequestError({
                method: args.method,
                correlationId,
                errorMessage: parseErrorMessageFromAny(error),
            });
            throw error;
        }
        finally {
            correlationIds.delete(args);
        }
    }
    async _request(args) {
        try {
            checkErrorForInvalidRequestArgs(args);
            if (!this.signer.isConnected) {
                switch (args.method) {
                    case 'eth_requestAccounts': {
                        await this.signer.handshake({ method: 'handshake' });
                        // We are translating eth_requestAccounts to wallet_connect always
                        await initSubAccountConfig();
                        await this.signer.request({
                            method: 'wallet_connect',
                            params: [
                                {
                                    version: '1',
                                    capabilities: {
                                        ...(store.subAccountsConfig.get()?.capabilities ?? {}),
                                    },
                                },
                            ],
                        });
                        // wallet_connect will retrieve and save the account info in the store
                        // continue to requesting it again at L130 for emitting the connect event +
                        // returning the accounts
                        break;
                    }
                    case 'wallet_connect': {
                        await this.signer.handshake({ method: 'handshake' }); // exchange session keys
                        const result = await this.signer.request(args); // send diffie-hellman encrypted request
                        return result;
                    }
                    case 'wallet_switchEthereumChain': {
                        // wallet_switchEthereumChain does not need to be sent to the popup
                        // it is handled by the base account signer
                        // so we just return the result
                        const result = await this.signer.request(args);
                        return result;
                    }
                    case 'wallet_sendCalls':
                    case 'wallet_sign': {
                        try {
                            await this.signer.handshake({ method: 'handshake' }); // exchange session keys
                            const result = await this.signer.request(args); // send diffie-hellman encrypted request
                            return result;
                        }
                        finally {
                            await this.signer.cleanup(); // clean up (rotate) the ephemeral session keys
                        }
                    }
                    case 'wallet_getCallsStatus': {
                        const result = await fetchRPCRequest(args, CB_WALLET_RPC_URL);
                        return result;
                    }
                    case 'eth_accounts': {
                        return [];
                    }
                    case 'net_version': {
                        const result = 1; // default value
                        return result;
                    }
                    case 'eth_chainId': {
                        const result = hexStringFromNumber(1); // default value
                        return result;
                    }
                    default: {
                        throw standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
                    }
                }
            }
            const result = await this.signer.request(args);
            return result;
        }
        catch (error) {
            const { code } = error;
            if (code === standardErrorCodes.provider.unauthorized) {
                await this.disconnect();
            }
            return Promise.reject(serializeError(error));
        }
    }
    async disconnect() {
        await this.signer.cleanup();
        correlationIds.clear();
        this.emit('disconnect', standardErrors.provider.disconnected('User initiated disconnection'));
    }
    isBaseAccount = true;
}
//# sourceMappingURL=BaseAccountProvider.js.map
;// ./node_modules/@base-org/account/dist/interface/builder/core/getInjectedProvider.js
const TBA_PROVIDER_IDENTIFIER = 'isCoinbaseBrowser';
function getInjectedProvider() {
    const injectedProvider = window.top?.ethereum ?? window.ethereum;
    if (injectedProvider?.[TBA_PROVIDER_IDENTIFIER]) {
        return injectedProvider;
    }
    return null;
}
//# sourceMappingURL=getInjectedProvider.js.map
;// ./node_modules/@base-org/account/dist/interface/builder/core/createBaseAccountSDK.js









/**
 * Create Base AccountSDK instance with EIP-1193 compliant provider
 * @param params - Options to create a base account SDK instance.
 * @returns An SDK object with a getProvider method that returns an EIP-1193 compliant provider.
 */
function createBaseAccountSDK(params) {
    const options = {
        metadata: {
            appName: params.appName || 'App',
            appLogoUrl: params.appLogoUrl || '',
            appChainIds: params.appChainIds || [],
        },
        preference: params.preference ?? {},
        paymasterUrls: params.paymasterUrls,
    };
    //  ====================================================================
    //  If we have a toOwnerAccount function, set it in the non-persisted config
    //  ====================================================================
    if (params.subAccounts?.toOwnerAccount) {
        validateSubAccount(params.subAccounts.toOwnerAccount);
    }
    store.subAccountsConfig.set({
        toOwnerAccount: params.subAccounts?.toOwnerAccount,
        creation: params.subAccounts?.creation ?? 'manual',
        defaultAccount: params.subAccounts?.defaultAccount ?? 'universal',
        funding: params.subAccounts?.funding ?? 'spend-permissions',
    });
    //  ====================================================================
    //  Set the options in the store and rehydrate the store from storage
    //  ====================================================================
    store.config.set(options);
    void store.persist.rehydrate();
    //  ====================================================================
    //  Validation and telemetry
    //  ====================================================================
    void checkCrossOriginOpenerPolicy();
    validatePreferences(options.preference);
    if (options.preference.telemetry !== false) {
        void loadTelemetryScript();
    }
    //  ====================================================================
    //  Return the provider
    //  ====================================================================
    let provider = null;
    const sdk = {
        getProvider: () => {
            if (!provider) {
                provider = getInjectedProvider() ?? new BaseAccountProvider(options);
            }
            return provider;
        },
        subAccount: {
            async create(accountParam) {
                return (await sdk.getProvider()?.request({
                    method: 'wallet_addSubAccount',
                    params: [
                        {
                            version: '1',
                            account: accountParam,
                        },
                    ],
                }));
            },
            async get() {
                const subAccount = store.subAccounts.get();
                if (subAccount?.address) {
                    return subAccount;
                }
                const response = (await sdk.getProvider()?.request({
                    method: 'wallet_connect',
                    params: [
                        {
                            version: '1',
                            capabilities: {},
                        },
                    ],
                }));
                const subAccounts = response.accounts[0].capabilities?.subAccounts;
                if (!Array.isArray(subAccounts)) {
                    return null;
                }
                return subAccounts[0];
            },
            addOwner: async ({ address, publicKey, chainId, }) => {
                const subAccount = store.subAccounts.get();
                const account = store.account.get();
                assertPresence(account, new Error('account does not exist'));
                assertPresence(subAccount?.address, new Error('subaccount does not exist'));
                const calls = [];
                if (publicKey) {
                    const [x, y] = (0,decodeAbiParameters/* decodeAbiParameters */.n)([{ type: 'bytes32' }, { type: 'bytes32' }], publicKey);
                    calls.push({
                        to: subAccount.address,
                        data: (0,encodeFunctionData/* encodeFunctionData */.p)({
                            abi: abi,
                            functionName: 'addOwnerPublicKey',
                            args: [x, y],
                        }),
                        value: (0,toHex/* toHex */.nj)(0),
                    });
                }
                if (address) {
                    calls.push({
                        to: subAccount.address,
                        data: (0,encodeFunctionData/* encodeFunctionData */.p)({
                            abi: abi,
                            functionName: 'addOwnerAddress',
                            args: [address],
                        }),
                        value: (0,toHex/* toHex */.nj)(0),
                    });
                }
                return (await sdk.getProvider()?.request({
                    method: 'wallet_sendCalls',
                    params: [
                        {
                            calls,
                            chainId: (0,toHex/* toHex */.nj)(chainId),
                            from: account.accounts?.[0],
                            version: '1',
                        },
                    ],
                }));
            },
            setToOwnerAccount(toSubAccountOwner) {
                validateSubAccount(toSubAccountOwner);
                store.subAccountsConfig.set({
                    toOwnerAccount: toSubAccountOwner,
                });
            },
        },
    };
    return sdk;
}
//# sourceMappingURL=createBaseAccountSDK.js.map
;// ./node_modules/@base-org/account/dist/index.js




//# sourceMappingURL=index.js.map

/***/ }

}]);