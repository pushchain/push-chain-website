"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[42070],{

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

/***/ 426034
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z8: () => (/* reexport */ MathUtil),
  tt: () => (/* reexport */ TransactionUtil),
  Zv: () => (/* reexport */ UiHelperUtil/* UiHelperUtil */.Z),
  AH: () => (/* reexport */ ThemeHelperUtil/* css */.AH),
  EM: () => (/* reexport */ WebComponentsUtil/* customElement */.E),
  RF: () => (/* reexport */ ThemeUtil/* initializeTheming */.RF),
  f: () => (/* reexport */ ThemeHelperUtil/* vars */.f)
});

// UNUSED EXPORTS: borderRadius, colors, setColorTheme, setThemeVariables, spacing

;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/MathUtil.js
const MathUtil = {
    interpolate(inputRange, outputRange, value) {
        if (inputRange.length !== 2 || outputRange.length !== 2) {
            throw new Error('inputRange and outputRange must be an array of length 2');
        }
        const originalRangeMin = inputRange[0] || 0;
        const originalRangeMax = inputRange[1] || 0;
        const newRangeMin = outputRange[0] || 0;
        const newRangeMax = outputRange[1] || 0;
        if (value < originalRangeMin) {
            return newRangeMin;
        }
        if (value > originalRangeMax) {
            return newRangeMax;
        }
        return (((newRangeMax - newRangeMin) / (originalRangeMax - originalRangeMin)) *
            (value - originalRangeMin) +
            newRangeMin);
    }
};
//# sourceMappingURL=MathUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(30387);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/DateUtil.js
var DateUtil = __webpack_require__(148169);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/TransactionUtil.js


const FLOAT_FIXED_VALUE = 3;
const GAS_FEE_THRESHOLD = 0.1;
const plusTypes = ['receive', 'deposit', 'borrow', 'claim'];
const minusTypes = ['withdraw', 'repay', 'burn'];
const TransactionUtil = {
    getTransactionGroupTitle(year, month) {
        const currentYear = DateUtil/* DateUtil */.r.getYear();
        const monthName = DateUtil/* DateUtil */.r.getMonthNameByIndex(month);
        const isCurrentYear = year === currentYear;
        const groupTitle = isCurrentYear ? monthName : `${monthName} ${year}`;
        return groupTitle;
    },
    getTransactionImages(transfers) {
        const [transfer] = transfers;
        const hasMultipleTransfers = transfers?.length > 1;
        if (hasMultipleTransfers) {
            return transfers.map(item => this.getTransactionImage(item));
        }
        return [this.getTransactionImage(transfer)];
    },
    getTransactionImage(transfer) {
        return {
            type: TransactionUtil.getTransactionTransferTokenType(transfer),
            url: TransactionUtil.getTransactionImageURL(transfer)
        };
    },
    getTransactionImageURL(transfer) {
        let imageURL = undefined;
        const isNFT = Boolean(transfer?.nft_info);
        const isFungible = Boolean(transfer?.fungible_info);
        if (transfer && isNFT) {
            imageURL = transfer?.nft_info?.content?.preview?.url;
        }
        else if (transfer && isFungible) {
            imageURL = transfer?.fungible_info?.icon?.url;
        }
        return imageURL;
    },
    getTransactionTransferTokenType(transfer) {
        if (transfer?.fungible_info) {
            return 'FUNGIBLE';
        }
        else if (transfer?.nft_info) {
            return 'NFT';
        }
        return undefined;
    },
    getTransactionDescriptions(transaction, mergedTransfers) {
        const type = transaction?.metadata?.operationType;
        const transfers = mergedTransfers || transaction?.transfers;
        const hasTransfer = transfers && transfers.length > 0;
        const hasMultipleTransfers = transfers && transfers.length > 1;
        const isFungible = hasTransfer && transfers.every(transfer => Boolean(transfer?.fungible_info));
        const [firstTransfer, secondTransfer] = transfers || [];
        let firstDescription = this.getTransferDescription(firstTransfer);
        let secondDescription = this.getTransferDescription(secondTransfer);
        if (!hasTransfer) {
            const isSendOrReceive = type === 'send' || type === 'receive';
            if (isSendOrReceive && isFungible) {
                firstDescription = UiHelperUtil/* UiHelperUtil */.Z.getTruncateString({
                    string: transaction?.metadata.sentFrom,
                    charsStart: 4,
                    charsEnd: 6,
                    truncate: 'middle'
                });
                secondDescription = UiHelperUtil/* UiHelperUtil */.Z.getTruncateString({
                    string: transaction?.metadata.sentTo,
                    charsStart: 4,
                    charsEnd: 6,
                    truncate: 'middle'
                });
                return [firstDescription, secondDescription];
            }
            return [transaction.metadata.status];
        }
        if (hasMultipleTransfers) {
            return transfers?.map(item => this.getTransferDescription(item));
        }
        let prefix = '';
        if (plusTypes.includes(type)) {
            prefix = '+';
        }
        else if (minusTypes.includes(type)) {
            prefix = '-';
        }
        firstDescription = prefix.concat(firstDescription);
        return [firstDescription];
    },
    getTransferDescription(transfer) {
        let description = '';
        if (!transfer) {
            return description;
        }
        if (transfer?.nft_info) {
            description = transfer?.nft_info?.name || '-';
        }
        else if (transfer?.fungible_info) {
            description = this.getFungibleTransferDescription(transfer) || '-';
        }
        return description;
    },
    getFungibleTransferDescription(transfer) {
        if (!transfer) {
            return null;
        }
        const quantity = this.getQuantityFixedValue(transfer?.quantity.numeric);
        const description = [quantity, transfer?.fungible_info?.symbol].join(' ').trim();
        return description;
    },
    mergeTransfers(transfers) {
        if (transfers?.length <= 1) {
            return transfers;
        }
        const filteredTransfers = this.filterGasFeeTransfers(transfers);
        const mergedTransfers = filteredTransfers.reduce((acc, t) => {
            const name = t?.fungible_info?.name;
            const existingTransfer = acc.find(({ fungible_info, direction }) => name && name === fungible_info?.name && direction === t.direction);
            if (existingTransfer) {
                const quantity = Number(existingTransfer.quantity.numeric) + Number(t.quantity.numeric);
                existingTransfer.quantity.numeric = quantity.toString();
                existingTransfer.value = (existingTransfer.value || 0) + (t.value || 0);
            }
            else {
                acc.push(t);
            }
            return acc;
        }, []);
        let finalTransfers = mergedTransfers;
        if (mergedTransfers.length > 2) {
            finalTransfers = mergedTransfers.sort((a, b) => (b.value || 0) - (a.value || 0)).slice(0, 2);
        }
        finalTransfers = finalTransfers.sort((a, b) => {
            if (a.direction === 'out' && b.direction === 'in') {
                return -1;
            }
            if (a.direction === 'in' && b.direction === 'out') {
                return 1;
            }
            return 0;
        });
        return finalTransfers;
    },
    filterGasFeeTransfers(transfers) {
        const tokenGroups = transfers?.reduce((groups, transfer) => {
            const tokenName = transfer?.fungible_info?.name;
            if (tokenName) {
                if (!groups[tokenName]) {
                    groups[tokenName] = [];
                }
                groups[tokenName].push(transfer);
            }
            return groups;
        }, {});
        const filteredTransfers = [];
        Object.values(tokenGroups ?? {}).forEach(tokenTransfers => {
            if (tokenTransfers.length === 1) {
                const firstTransfer = tokenTransfers[0];
                if (firstTransfer) {
                    filteredTransfers.push(firstTransfer);
                }
            }
            else {
                const inTransfers = tokenTransfers.filter(t => t.direction === 'in');
                const outTransfers = tokenTransfers.filter(t => t.direction === 'out');
                if (inTransfers.length === 1 && outTransfers.length === 1) {
                    const inTransfer = inTransfers[0];
                    const outTransfer = outTransfers[0];
                    let didApplyGasFeeFilter = false;
                    if (inTransfer && outTransfer) {
                        const inAmount = Number(inTransfer.quantity.numeric);
                        const outAmount = Number(outTransfer.quantity.numeric);
                        if (outAmount < inAmount * GAS_FEE_THRESHOLD) {
                            filteredTransfers.push(inTransfer);
                            didApplyGasFeeFilter = true;
                        }
                        else if (inAmount < outAmount * GAS_FEE_THRESHOLD) {
                            filteredTransfers.push(outTransfer);
                            didApplyGasFeeFilter = true;
                        }
                    }
                    if (!didApplyGasFeeFilter) {
                        filteredTransfers.push(...tokenTransfers);
                    }
                }
                else {
                    const significantTransfers = this.filterGasFeesFromTokenGroup(tokenTransfers);
                    filteredTransfers.push(...significantTransfers);
                }
            }
        });
        transfers?.forEach(transfer => {
            if (!transfer?.fungible_info?.name) {
                filteredTransfers.push(transfer);
            }
        });
        return filteredTransfers;
    },
    filterGasFeesFromTokenGroup(tokenTransfers) {
        if (tokenTransfers.length <= 1) {
            return tokenTransfers;
        }
        const amounts = tokenTransfers?.map(t => Number(t.quantity.numeric));
        const maxAmount = Math.max(...amounts);
        const minAmount = Math.min(...amounts);
        const extremeGasThreshold = 0.01;
        if (minAmount < maxAmount * extremeGasThreshold) {
            const filtered = tokenTransfers?.filter(t => {
                const amount = Number(t.quantity.numeric);
                return amount >= maxAmount * extremeGasThreshold;
            });
            return filtered;
        }
        const inTransfers = tokenTransfers?.filter(t => t.direction === 'in');
        const outTransfers = tokenTransfers?.filter(t => t.direction === 'out');
        if (inTransfers.length === 1 && outTransfers.length === 1) {
            const inTransfer = inTransfers[0];
            const outTransfer = outTransfers[0];
            if (inTransfer && outTransfer) {
                const inAmount = Number(inTransfer.quantity.numeric);
                const outAmount = Number(outTransfer.quantity.numeric);
                if (outAmount < inAmount * GAS_FEE_THRESHOLD) {
                    return [inTransfer];
                }
                else if (inAmount < outAmount * GAS_FEE_THRESHOLD) {
                    return [outTransfer];
                }
            }
        }
        return tokenTransfers;
    },
    getQuantityFixedValue(value) {
        if (!value) {
            return null;
        }
        const parsedValue = parseFloat(value);
        return parsedValue.toFixed(FLOAT_FIXED_VALUE);
    }
};
//# sourceMappingURL=TransactionUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeConstantsUtil.js
var ThemeConstantsUtil = __webpack_require__(958035);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js







//# sourceMappingURL=index.js.map

/***/ },

/***/ 540289
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_layout_wui_flex_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(293511);

//# sourceMappingURL=wui-flex.js.map

/***/ },

/***/ 346709
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_components_wui_text_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(667329);

//# sourceMappingURL=wui-text.js.map

/***/ },

/***/ 614153
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ tonSvg)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197199);

const tonSvg = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .svg */ .JW) `
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
  <path d="M8.37651 0H1.62309C0.381381 0 -0.405611 1.33944 0.219059 2.42225L4.38701 9.64649C4.659 10.1182 5.3406 10.1182 5.61259 9.64649L9.78139 2.42225C10.4052 1.34117 9.61822 0 8.37736 0H8.37651ZM4.38362 7.48005L3.47591 5.72329L1.2857 1.80606C1.14121 1.55534 1.31968 1.23405 1.62225 1.23405H4.38278V7.4809L4.38362 7.48005ZM8.71221 1.80521L6.52284 5.72414L5.61513 7.48005V1.2332H8.37566C8.67823 1.2332 8.85669 1.55449 8.71221 1.80521Z" fill="var(--apkt-tokens-theme-textPrimary)" />
</svg>
`;
//# sourceMappingURL=ton.js.map

/***/ },

/***/ 778935
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: ICON_COLOR, WuiIcon

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/static-html.js + 1 modules
var static_html = __webpack_require__(34748);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/app-store.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/apple.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/bitcoin.js

const bitcoinSvg = (0,lit/* svg */.JW) `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`;
//# sourceMappingURL=bitcoin.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/checkmark.js

const checkmarkSvg = (0,lit/* svg */.JW) `<svg viewBox="0 0 32 32" fill="none">
<path d="M29.0612 10.0613L13.0612 26.0613C12.9218 26.2011 12.7563 26.3121 12.5739 26.3878C12.3916 26.4635 12.1961 26.5024 11.9987 26.5024C11.8013 26.5024 11.6058 26.4635 11.4235 26.3878C11.2411 26.3121 11.0756 26.2011 10.9362 26.0613L3.9362 19.0613C3.79667 18.9217 3.68599 18.7561 3.61047 18.5738C3.53496 18.3915 3.49609 18.1961 3.49609 17.9988C3.49609 17.8014 3.53496 17.606 3.61047 17.4237C3.68599 17.2414 3.79667 17.0758 3.9362 16.9363C4.07573 16.7967 4.24137 16.686 4.42367 16.6105C4.60598 16.535 4.80137 16.4962 4.9987 16.4962C5.19602 16.4962 5.39141 16.535 5.57372 16.6105C5.75602 16.686 5.92167 16.7967 6.0612 16.9363L11.9999 22.875L26.9387 7.93876C27.2205 7.65697 27.6027 7.49866 28.0012 7.49866C28.3997 7.49866 28.7819 7.65697 29.0637 7.93876C29.3455 8.22055 29.5038 8.60274 29.5038 9.00126C29.5038 9.39977 29.3455 9.78197 29.0637 10.0638L29.0612 10.0613Z" fill="currentColor"/>
</svg>
`;
//# sourceMappingURL=checkmark.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/chrome-store.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/coins.js

const coinsSvg = (0,lit/* svg */.JW) `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M23 11.1962V10.5C23 7.365 18.2712 5 12 5C5.72875 5 1 7.365 1 10.5V15.5C1 18.1112 4.28125 20.1863 9 20.8075V21.5C9 24.635 13.7288 27 20 27C26.2712 27 31 24.635 31 21.5V16.5C31 13.9125 27.8225 11.835 23 11.1962ZM7 18.3587C4.55125 17.675 3 16.5487 3 15.5V13.7413C4.02 14.4637 5.38625 15.0463 7 15.4375V18.3587ZM17 15.4375C18.6138 15.0463 19.98 14.4637 21 13.7413V15.5C21 16.5487 19.4487 17.675 17 18.3587V15.4375ZM15 24.3587C12.5513 23.675 11 22.5487 11 21.5V20.9788C11.3287 20.9913 11.6613 21 12 21C12.485 21 12.9587 20.9837 13.4237 20.9562C13.9403 21.1412 14.4665 21.2981 15 21.4263V24.3587ZM15 18.7812C14.0068 18.928 13.004 19.0011 12 19C10.996 19.0011 9.99324 18.928 9 18.7812V15.8075C9.99472 15.9371 10.9969 16.0014 12 16C13.0031 16.0014 14.0053 15.9371 15 15.8075V18.7812ZM23 24.7812C21.0106 25.0729 18.9894 25.0729 17 24.7812V21.8C17.9944 21.9337 18.9967 22.0005 20 22C21.0031 22.0014 22.0053 21.9371 23 21.8075V24.7812ZM29 21.5C29 22.5487 27.4487 23.675 25 24.3587V21.4375C26.6138 21.0462 27.98 20.4637 29 19.7412V21.5Z" fill="currentColor"/>
</svg>
`;
//# sourceMappingURL=coins.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/cursor.js

const cursorSvg = (0,lit/* svg */.JW) ` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;
//# sourceMappingURL=cursor.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/discord.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/ethereum.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/etherscan.js

const etherscanSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;
//# sourceMappingURL=etherscan.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/facebook.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/farcaster.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/github.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/google.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/info.js

const infoSealSvg = (0,lit/* svg */.JW) `<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.875 0C3.91082 0 2.96829 0.285914 2.1666 0.821586C1.36491 1.35726 0.740067 2.11863 0.371089 3.00942C0.00211226 3.90021 -0.094429 4.88041 0.093674 5.82607C0.281777 6.77172 0.746076 7.64036 1.42786 8.32215C2.10964 9.00393 2.97828 9.46823 3.92394 9.65633C4.86959 9.84443 5.84979 9.74789 6.74058 9.37891C7.63137 9.00994 8.39274 8.38509 8.92842 7.5834C9.46409 6.78171 9.75 5.83918 9.75 4.875C9.74864 3.58249 9.23458 2.34331 8.32064 1.42936C7.4067 0.515418 6.16751 0.00136492 4.875 0ZM4.6875 2.25C4.79875 2.25 4.90751 2.28299 5.00001 2.3448C5.09251 2.40661 5.16461 2.49446 5.20718 2.59724C5.24976 2.70002 5.2609 2.81312 5.23919 2.92224C5.21749 3.03135 5.16392 3.13158 5.08525 3.21025C5.00658 3.28891 4.90635 3.34249 4.79724 3.36419C4.68813 3.3859 4.57503 3.37476 4.47224 3.33218C4.36946 3.28961 4.28161 3.21751 4.2198 3.12501C4.15799 3.03251 4.125 2.92375 4.125 2.8125C4.125 2.66332 4.18427 2.52024 4.28975 2.41475C4.39524 2.30926 4.53832 2.25 4.6875 2.25ZM5.25 7.5C5.05109 7.5 4.86032 7.42098 4.71967 7.28033C4.57902 7.13968 4.5 6.94891 4.5 6.75V4.875C4.40055 4.875 4.30516 4.83549 4.23484 4.76516C4.16451 4.69484 4.125 4.59946 4.125 4.5C4.125 4.40054 4.16451 4.30516 4.23484 4.23484C4.30516 4.16451 4.40055 4.125 4.5 4.125C4.69891 4.125 4.88968 4.20402 5.03033 4.34467C5.17098 4.48532 5.25 4.67609 5.25 4.875V6.75C5.34946 6.75 5.44484 6.78951 5.51517 6.85983C5.58549 6.93016 5.625 7.02554 5.625 7.125C5.625 7.22446 5.58549 7.31984 5.51517 7.39017C5.44484 7.46049 5.34946 7.5 5.25 7.5Z" fill="#9A9A9A"/>
</svg>
`;
//# sourceMappingURL=info.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/paper-plane-titl.js

const paperPlaneTitleSvg = (0,lit/* svg */.JW) `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M28.925 5.5425C28.925 5.5425 28.925 5.555 28.925 5.56125L21.65 29.5537C21.5399 29.9434 21.3132 30.2901 21.0004 30.5473C20.6876 30.8045 20.3036 30.9598 19.9 30.9925C19.8425 30.9975 19.785 31 19.7275 31C19.3493 31.0012 18.9786 30.8941 18.6592 30.6915C18.3398 30.4888 18.085 30.199 17.925 29.8563L13.375 20.5187C13.3295 20.4252 13.3143 20.3197 13.3315 20.2171C13.3488 20.1145 13.3976 20.0198 13.4713 19.9463L20.7113 12.7063C20.8909 12.5172 20.9895 12.2654 20.9862 12.0047C20.9829 11.7439 20.8778 11.4948 20.6934 11.3104C20.509 11.126 20.2599 11.0209 19.9991 11.0176C19.7383 11.0142 19.4866 11.1129 19.2975 11.2925L12.0538 18.5325C11.9802 18.6061 11.8855 18.655 11.7829 18.6722C11.6803 18.6895 11.5748 18.6743 11.4813 18.6287L2.13502 14.08C1.76954 13.9047 1.46598 13.6224 1.26454 13.2706C1.06311 12.9189 0.973316 12.5142 1.00707 12.1102C1.04082 11.7063 1.19652 11.3221 1.45354 11.0087C1.71056 10.6952 2.05676 10.4673 2.44627 10.355L26.4388 3.08H26.4575C26.7991 2.98403 27.1601 2.98066 27.5034 3.07025C27.8468 3.15984 28.1601 3.33916 28.4113 3.58981C28.6624 3.84045 28.8424 4.15341 28.9326 4.49656C29.0229 4.83971 29.0203 5.2007 28.925 5.5425Z" fill="currentColor"/>
</svg>
`;
//# sourceMappingURL=paper-plane-titl.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/play-store.js

const playStoreSvg = (0,lit/* svg */.JW) ` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`;
//# sourceMappingURL=play-store.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/reown-logo.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/solana.js

const solanaSvg = (0,lit/* svg */.JW) `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`;
//# sourceMappingURL=solana.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/telegram.js

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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/ton.js
var ton = __webpack_require__(614153);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/tron.js

const tronSvg = (0,lit/* svg */.JW) `
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 64 64">
    <path fill="var(--apkt-tokens-theme-textPrimary)" d="M61.55 19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82 3.82 0 0 0-1.11-.62l0 0C41.56 7 3.63-.09 2.89 0a1.4 1.4 0 0 0-.58.22L2.12.37a2.23 2.23 0 0 0-.52.84l-.05.13v.71l0 .11C5.82 14.05 22.68 53 26 62.14c.2.62.58 1.8 1.29 1.86h.16c.38 0 2-2.14 2-2.14S58.41 26.74 61.34 23a9.46 9.46 0 0 0 1-1.48A2.41 2.41 0 0 0 61.55 19.28ZM36.88 23.37 49.24 13.12l7.25 6.68Zm-4.8-.67L10.8 5.26l34.43 6.35ZM34 27.27l21.78-3.51-24.9 30ZM7.91 7 30.3 26 27.06 53.78Z"/>
  </svg>
`;
//# sourceMappingURL=tron.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/twitch.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/twitterIcon.js

const twitterIconSvg = (0,lit/* svg */.JW) `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;
//# sourceMappingURL=twitterIcon.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/walletconnect.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/x.js

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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js
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
    'ph-arrow-circle-down': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(30485)]).then(__webpack_require__.bind(__webpack_require__, 330485)),
    'ph-arrow-clockwise': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(27753)]).then(__webpack_require__.bind(__webpack_require__, 827753)),
    'ph-arrow-down': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(69657)]).then(__webpack_require__.bind(__webpack_require__, 169657)),
    'ph-arrow-left': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(64438)]).then(__webpack_require__.bind(__webpack_require__, 564438)),
    'ph-arrow-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(44217)]).then(__webpack_require__.bind(__webpack_require__, 644217)),
    'ph-arrow-square-out': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(59296)]).then(__webpack_require__.bind(__webpack_require__, 59296)),
    'ph-arrows-down-up': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(6283)]).then(__webpack_require__.bind(__webpack_require__, 806283)),
    'ph-arrows-left-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(46903)]).then(__webpack_require__.bind(__webpack_require__, 946903)),
    'ph-arrow-up': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(73462)]).then(__webpack_require__.bind(__webpack_require__, 73462)),
    'ph-arrow-up-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(38920)]).then(__webpack_require__.bind(__webpack_require__, 438920)),
    'ph-arrows-clockwise': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(88058)]).then(__webpack_require__.bind(__webpack_require__, 888058)),
    'ph-bank': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(70336)]).then(__webpack_require__.bind(__webpack_require__, 770336)),
    'ph-browser': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(20858)]).then(__webpack_require__.bind(__webpack_require__, 120858)),
    'ph-caret-down': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(83851)]).then(__webpack_require__.bind(__webpack_require__, 983851)),
    'ph-caret-left': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(60312)]).then(__webpack_require__.bind(__webpack_require__, 260312)),
    'ph-caret-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(73203)]).then(__webpack_require__.bind(__webpack_require__, 873203)),
    'ph-caret-up': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(36412)]).then(__webpack_require__.bind(__webpack_require__, 436412)),
    'ph-check': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(86570)]).then(__webpack_require__.bind(__webpack_require__, 286570)),
    'ph-circle-half': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(79229)]).then(__webpack_require__.bind(__webpack_require__, 779229)),
    'ph-clock': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(71992)]).then(__webpack_require__.bind(__webpack_require__, 71992)),
    'ph-compass': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(25882)]).then(__webpack_require__.bind(__webpack_require__, 425882)),
    'ph-copy': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(61349)]).then(__webpack_require__.bind(__webpack_require__, 761349)),
    'ph-credit-card': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(62143)]).then(__webpack_require__.bind(__webpack_require__, 862143)),
    'ph-currency-dollar': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(28589)]).then(__webpack_require__.bind(__webpack_require__, 128589)),
    'ph-desktop': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(66738)]).then(__webpack_require__.bind(__webpack_require__, 266738)),
    'ph-device-mobile': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(56262)]).then(__webpack_require__.bind(__webpack_require__, 556262)),
    'ph-dots-three': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(3638)]).then(__webpack_require__.bind(__webpack_require__, 303638)),
    'ph-vault': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(11360)]).then(__webpack_require__.bind(__webpack_require__, 766598)),
    'ph-envelope': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(12798)]).then(__webpack_require__.bind(__webpack_require__, 612798)),
    'ph-funnel-simple': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(37040)]).then(__webpack_require__.bind(__webpack_require__, 937040)),
    'ph-globe': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(95845)]).then(__webpack_require__.bind(__webpack_require__, 195845)),
    'ph-identification-card': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(86238)]).then(__webpack_require__.bind(__webpack_require__, 886238)),
    'ph-image': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(67805)]).then(__webpack_require__.bind(__webpack_require__, 67805)),
    'ph-info': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(66526)]).then(__webpack_require__.bind(__webpack_require__, 66526)),
    'ph-lightbulb': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(59571)]).then(__webpack_require__.bind(__webpack_require__, 459571)),
    'ph-magnifying-glass': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(55803)]).then(__webpack_require__.bind(__webpack_require__, 655803)),
    'ph-paper-plane-right': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(5264)]).then(__webpack_require__.bind(__webpack_require__, 105264)),
    'ph-plus': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(1634)]).then(__webpack_require__.bind(__webpack_require__, 601634)),
    'ph-power': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(53617)]).then(__webpack_require__.bind(__webpack_require__, 253617)),
    'ph-puzzle-piece': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(92272)]).then(__webpack_require__.bind(__webpack_require__, 492272)),
    'ph-qr-code': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(89780)]).then(__webpack_require__.bind(__webpack_require__, 189780)),
    'ph-question': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(90654)]).then(__webpack_require__.bind(__webpack_require__, 390654)),
    'ph-question-circle': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(79237)]).then(__webpack_require__.bind(__webpack_require__, 279237)),
    'ph-seal-check': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(34771)]).then(__webpack_require__.bind(__webpack_require__, 134771)),
    'ph-sign-out': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(84899)]).then(__webpack_require__.bind(__webpack_require__, 584899)),
    'ph-spinner': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(53317)]).then(__webpack_require__.bind(__webpack_require__, 553317)),
    'ph-trash': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(21884)]).then(__webpack_require__.bind(__webpack_require__, 521884)),
    'ph-user': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(25195)]).then(__webpack_require__.bind(__webpack_require__, 125195)),
    'ph-wallet': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(92125)]).then(__webpack_require__.bind(__webpack_require__, 92125)),
    'ph-warning': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(23758)]).then(__webpack_require__.bind(__webpack_require__, 23758)),
    'ph-warning-circle': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(84042)]).then(__webpack_require__.bind(__webpack_require__, 384042)),
    'ph-x': () => Promise.all(/* import() */[__webpack_require__.e(72076), __webpack_require__.e(10626)]).then(__webpack_require__.bind(__webpack_require__, 510626))
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
    ton: ton/* tonSvg */._,
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

/***/ },

/***/ 667329
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: TEXT_VARS_BY_COLOR, WuiText

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/class-map.js + 1 modules
var class_map = __webpack_require__(899605);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiText.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "variant", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "color", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "align", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "lineClamp", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "display", void 0);
WuiText = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-text')
], WuiText);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 293511
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiFlex

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(30387);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiFlex.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexDirection", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexWrap", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexBasis", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexGrow", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexShrink", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "alignItems", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "justifyContent", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "columnGap", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "rowGap", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "gap", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "padding", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "margin", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "width", void 0);
WuiFlex = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-flex')
], WuiFlex);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 958035
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LU: () => (/* binding */ tokens),
/* harmony export */   R7: () => (/* binding */ styles)
/* harmony export */ });
/* unused harmony exports colors, borderRadius, spacing */
const colors = {
    black: '#202020',
    white: '#FFFFFF',
    white010: 'rgba(255, 255, 255, 0.1)',
    accent010: 'rgba(9, 136, 240, 0.1)',
    accent020: 'rgba(9, 136, 240, 0.2)',
    accent030: 'rgba(9, 136, 240, 0.3)',
    accent040: 'rgba(9, 136, 240, 0.4)',
    accent050: 'rgba(9, 136, 240, 0.5)',
    accent060: 'rgba(9, 136, 240, 0.6)',
    accent070: 'rgba(9, 136, 240, 0.7)',
    accent080: 'rgba(9, 136, 240, 0.8)',
    accent090: 'rgba(9, 136, 240, 0.9)',
    accent100: 'rgba(9, 136, 240, 1.0)',
    accentSecondary010: 'rgba(199, 185, 148, 0.1)',
    accentSecondary020: 'rgba(199, 185, 148, 0.2)',
    accentSecondary030: 'rgba(199, 185, 148, 0.3)',
    accentSecondary040: 'rgba(199, 185, 148, 0.4)',
    accentSecondary050: 'rgba(199, 185, 148, 0.5)',
    accentSecondary060: 'rgba(199, 185, 148, 0.6)',
    accentSecondary070: 'rgba(199, 185, 148, 0.7)',
    accentSecondary080: 'rgba(199, 185, 148, 0.8)',
    accentSecondary090: 'rgba(199, 185, 148, 0.9)',
    accentSecondary100: 'rgba(199, 185, 148, 1.0)',
    productWalletKit: '#FFB800',
    productAppKit: '#FF573B',
    productCloud: '#0988F0',
    productDocumentation: '#008847',
    neutrals050: '#F6F6F6',
    neutrals100: '#F3F3F3',
    neutrals200: '#E9E9E9',
    neutrals300: '#D0D0D0',
    neutrals400: '#BBB',
    neutrals500: '#9A9A9A',
    neutrals600: '#6C6C6C',
    neutrals700: '#4F4F4F',
    neutrals800: '#363636',
    neutrals900: '#2A2A2A',
    neutrals1000: '#252525',
    semanticSuccess010: 'rgba(48, 164, 107, 0.1)',
    semanticSuccess020: 'rgba(48, 164, 107, 0.2)',
    semanticSuccess030: 'rgba(48, 164, 107, 0.3)',
    semanticSuccess040: 'rgba(48, 164, 107, 0.4)',
    semanticSuccess050: 'rgba(48, 164, 107, 0.5)',
    semanticSuccess060: 'rgba(48, 164, 107, 0.6)',
    semanticSuccess070: 'rgba(48, 164, 107, 0.7)',
    semanticSuccess080: 'rgba(48, 164, 107, 0.8)',
    semanticSuccess090: 'rgba(48, 164, 107, 0.9)',
    semanticSuccess100: 'rgba(48, 164, 107, 1.0)',
    semanticError010: 'rgba(223, 74, 52, 0.1)',
    semanticError020: 'rgba(223, 74, 52, 0.2)',
    semanticError030: 'rgba(223, 74, 52, 0.3)',
    semanticError040: 'rgba(223, 74, 52, 0.4)',
    semanticError050: 'rgba(223, 74, 52, 0.5)',
    semanticError060: 'rgba(223, 74, 52, 0.6)',
    semanticError070: 'rgba(223, 74, 52, 0.7)',
    semanticError080: 'rgba(223, 74, 52, 0.8)',
    semanticError090: 'rgba(223, 74, 52, 0.9)',
    semanticError100: 'rgba(223, 74, 52, 1.0)',
    semanticWarning010: 'rgba(243, 161, 63, 0.1)',
    semanticWarning020: 'rgba(243, 161, 63, 0.2)',
    semanticWarning030: 'rgba(243, 161, 63, 0.3)',
    semanticWarning040: 'rgba(243, 161, 63, 0.4)',
    semanticWarning050: 'rgba(243, 161, 63, 0.5)',
    semanticWarning060: 'rgba(243, 161, 63, 0.6)',
    semanticWarning070: 'rgba(243, 161, 63, 0.7)',
    semanticWarning080: 'rgba(243, 161, 63, 0.8)',
    semanticWarning090: 'rgba(243, 161, 63, 0.9)',
    semanticWarning100: 'rgba(243, 161, 63, 1.0)'
};
const tokens = {
    core: {
        backgroundAccentPrimary: '#0988F0',
        backgroundAccentCertified: '#C7B994',
        backgroundWalletKit: '#FFB800',
        backgroundAppKit: '#FF573B',
        backgroundCloud: '#0988F0',
        backgroundDocumentation: '#008847',
        backgroundSuccess: 'rgba(48, 164, 107, 0.20)',
        backgroundError: 'rgba(223, 74, 52, 0.20)',
        backgroundWarning: 'rgba(243, 161, 63, 0.20)',
        textAccentPrimary: '#0988F0',
        textAccentCertified: '#C7B994',
        textWalletKit: '#FFB800',
        textAppKit: '#FF573B',
        textCloud: '#0988F0',
        textDocumentation: '#008847',
        textSuccess: '#30A46B',
        textError: '#DF4A34',
        textWarning: '#F3A13F',
        borderAccentPrimary: '#0988F0',
        borderSecondary: '#C7B994',
        borderSuccess: '#30A46B',
        borderError: '#DF4A34',
        borderWarning: '#F3A13F',
        foregroundAccent010: 'rgba(9, 136, 240, 0.1)',
        foregroundAccent020: 'rgba(9, 136, 240, 0.2)',
        foregroundAccent040: 'rgba(9, 136, 240, 0.4)',
        foregroundAccent060: 'rgba(9, 136, 240, 0.6)',
        foregroundSecondary020: 'rgba(199, 185, 148, 0.2)',
        foregroundSecondary040: 'rgba(199, 185, 148, 0.4)',
        foregroundSecondary060: 'rgba(199, 185, 148, 0.6)',
        iconAccentPrimary: '#0988F0',
        iconAccentCertified: '#C7B994',
        iconSuccess: '#30A46B',
        iconError: '#DF4A34',
        iconWarning: '#F3A13F',
        glass010: 'rgba(255, 255, 255, 0.1)',
        zIndex: '9999'
    },
    dark: {
        overlay: 'rgba(0, 0, 0, 0.50)',
        backgroundPrimary: '#202020',
        backgroundInvert: '#FFFFFF',
        textPrimary: '#FFFFFF',
        textSecondary: '#9A9A9A',
        textTertiary: '#BBBBBB',
        textInvert: '#202020',
        borderPrimary: '#2A2A2A',
        borderPrimaryDark: '#363636',
        borderSecondary: '#4F4F4F',
        foregroundPrimary: '#252525',
        foregroundSecondary: '#2A2A2A',
        foregroundTertiary: '#363636',
        iconDefault: '#9A9A9A',
        iconInverse: '#FFFFFF'
    },
    light: {
        overlay: 'rgba(230 , 230, 230, 0.5)',
        backgroundPrimary: '#FFFFFF',
        borderPrimaryDark: '#E9E9E9',
        backgroundInvert: '#202020',
        textPrimary: '#202020',
        textSecondary: '#9A9A9A',
        textTertiary: '#6C6C6C',
        textInvert: '#FFFFFF',
        borderPrimary: '#E9E9E9',
        borderSecondary: '#D0D0D0',
        foregroundPrimary: '#F3F3F3',
        foregroundSecondary: '#E9E9E9',
        foregroundTertiary: '#D0D0D0',
        iconDefault: '#9A9A9A',
        iconInverse: '#202020'
    }
};
const borderRadius = {
    '1': '4px',
    '2': '8px',
    '10': '10px',
    '3': '12px',
    '4': '16px',
    '6': '24px',
    '5': '20px',
    '8': '32px',
    '16': '64px',
    '20': '80px',
    '32': '128px',
    '64': '256px',
    '128': '512px',
    round: '9999px'
};
const spacing = {
    '0': '0px',
    '01': '2px',
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '7': '28px',
    '8': '32px',
    '9': '36px',
    '10': '40px',
    '12': '48px',
    '14': '56px',
    '16': '64px',
    '20': '80px',
    '32': '128px',
    '64': '256px'
};
const fontFamily = {
    regular: 'KHTeka',
    mono: 'KHTekaMono'
};
const fontWeight = {
    regular: '400',
    medium: '500'
};
const textSize = {
    h1: '50px',
    h2: '44px',
    h3: '38px',
    h4: '32px',
    h5: '26px',
    h6: '20px',
    large: '16px',
    medium: '14px',
    small: '12px'
};
const typography = {
    'h1-regular-mono': { lineHeight: '50px', letterSpacing: '-3px' },
    'h1-regular': { lineHeight: '50px', letterSpacing: '-1px' },
    'h1-medium': { lineHeight: '50px', letterSpacing: '-0.84px' },
    'h2-regular-mono': { lineHeight: '44px', letterSpacing: '-2.64px' },
    'h2-regular': { lineHeight: '44px', letterSpacing: '-0.88px' },
    'h2-medium': { lineHeight: '44px', letterSpacing: '-0.88px' },
    'h3-regular-mono': { lineHeight: '38px', letterSpacing: '-2.28px' },
    'h3-regular': { lineHeight: '38px', letterSpacing: '-0.76px' },
    'h3-medium': { lineHeight: '38px', letterSpacing: '-0.76px' },
    'h4-regular-mono': { lineHeight: '32px', letterSpacing: '-1.92px' },
    'h4-regular': { lineHeight: '32px', letterSpacing: '-0.32px' },
    'h4-medium': { lineHeight: '32px', letterSpacing: '-0.32px' },
    'h5-regular-mono': { lineHeight: '26px', letterSpacing: '-1.56px' },
    'h5-regular': { lineHeight: '26px', letterSpacing: '-0.26px' },
    'h5-medium': { lineHeight: '26px', letterSpacing: '-0.26px' },
    'h6-regular-mono': { lineHeight: '20px', letterSpacing: '-1.2px' },
    'h6-regular': { lineHeight: '20px', letterSpacing: '-0.6px' },
    'h6-medium': { lineHeight: '20px', letterSpacing: '-0.6px' },
    'lg-regular-mono': { lineHeight: '16px', letterSpacing: '-0.96px' },
    'lg-regular': { lineHeight: '18px', letterSpacing: '-0.16px' },
    'lg-medium': { lineHeight: '18px', letterSpacing: '-0.16px' },
    'md-regular-mono': { lineHeight: '14px', letterSpacing: '-0.84px' },
    'md-regular': { lineHeight: '16px', letterSpacing: '-0.14px' },
    'md-medium': { lineHeight: '16px', letterSpacing: '-0.14px' },
    'sm-regular-mono': { lineHeight: '12px', letterSpacing: '-0.72px' },
    'sm-regular': { lineHeight: '14px', letterSpacing: '-0.12px' },
    'sm-medium': { lineHeight: '14px', letterSpacing: '-0.12px' }
};
const easings = {
    'ease-out-power-2': 'cubic-bezier(0.23, 0.09, 0.08, 1.13)',
    'ease-out-power-1': 'cubic-bezier(0.12, 0.04, 0.2, 1.06)',
    'ease-in-power-2': 'cubic-bezier(0.92, -0.13, 0.77, 0.91)',
    'ease-in-power-1': 'cubic-bezier(0.88, -0.06, 0.8, 0.96)',
    'ease-inout-power-2': 'cubic-bezier(0.77, 0.09, 0.23, 1.13)',
    'ease-inout-power-1': 'cubic-bezier(0.88, 0.04, 0.12, 1.06)'
};
const durations = {
    xl: '400ms',
    lg: '200ms',
    md: '125ms',
    sm: '75ms'
};
const styles = {
    colors,
    fontFamily,
    fontWeight,
    textSize,
    typography,
    tokens: {
        core: tokens.core,
        theme: tokens.dark
    },
    borderRadius,
    spacing,
    durations,
    easings
};
//# sourceMappingURL=ThemeConstantsUtil.js.map

/***/ },

/***/ 585836
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AH: () => (/* binding */ css),
/* harmony export */   CV: () => (/* binding */ ThemeHelperUtil),
/* harmony export */   f: () => (/* binding */ vars)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197199);
/* harmony import */ var _ThemeConstantsUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(958035);


const PREFIX_VAR = '--apkt';
function normalizeThemeVariables(themeVariables) {
    if (!themeVariables) {
        return {};
    }
    const normalized = {};
    normalized['font-family'] =
        themeVariables['--apkt-font-family'] ?? themeVariables['--w3m-font-family'] ?? 'KHTeka';
    normalized['accent'] =
        themeVariables['--apkt-accent'] ?? themeVariables['--w3m-accent'] ?? '#0988F0';
    normalized['color-mix'] =
        themeVariables['--apkt-color-mix'] ?? themeVariables['--w3m-color-mix'] ?? '#000';
    normalized['color-mix-strength'] =
        themeVariables['--apkt-color-mix-strength'] ?? themeVariables['--w3m-color-mix-strength'] ?? 0;
    normalized['font-size-master'] =
        themeVariables['--apkt-font-size-master'] ?? themeVariables['--w3m-font-size-master'] ?? '10px';
    normalized['border-radius-master'] =
        themeVariables['--apkt-border-radius-master'] ??
            themeVariables['--w3m-border-radius-master'] ??
            '4px';
    if (themeVariables['--apkt-z-index'] !== undefined) {
        normalized['z-index'] = themeVariables['--apkt-z-index'];
    }
    else if (themeVariables['--w3m-z-index'] !== undefined) {
        normalized['z-index'] = themeVariables['--w3m-z-index'];
    }
    return normalized;
}
const ThemeHelperUtil = {
    createCSSVariables(styles) {
        const cssVariables = {};
        const cssVariablesVarPrefix = {};
        function createVars(_styles, parent, currentVar = '') {
            for (const [styleKey, styleValue] of Object.entries(_styles)) {
                const variable = currentVar ? `${currentVar}-${styleKey}` : styleKey;
                if (styleValue && typeof styleValue === 'object' && Object.keys(styleValue).length) {
                    parent[styleKey] = {};
                    createVars(styleValue, parent[styleKey], variable);
                }
                else if (typeof styleValue === 'string') {
                    parent[styleKey] = `${PREFIX_VAR}-${variable}`;
                }
            }
        }
        function addVarsPrefix(_styles, parent) {
            for (const [key, value] of Object.entries(_styles)) {
                if (value && typeof value === 'object') {
                    parent[key] = {};
                    addVarsPrefix(value, parent[key]);
                }
                else if (typeof value === 'string') {
                    parent[key] = `var(${value})`;
                }
            }
        }
        createVars(styles, cssVariables);
        addVarsPrefix(cssVariables, cssVariablesVarPrefix);
        return { cssVariables, cssVariablesVarPrefix };
    },
    assignCSSVariables(vars, styles) {
        const assignedCSSVariables = {};
        function assignVars(_vars, _styles, variable) {
            for (const [varKey, varValue] of Object.entries(_vars)) {
                const nextVariable = variable ? `${variable}-${varKey}` : varKey;
                const styleValues = _styles[varKey];
                if (varValue && typeof varValue === 'object') {
                    assignVars(varValue, styleValues, nextVariable);
                }
                else if (typeof styleValues === 'string') {
                    assignedCSSVariables[`${PREFIX_VAR}-${nextVariable}`] = styleValues;
                }
            }
        }
        assignVars(vars, styles);
        return assignedCSSVariables;
    },
    createRootStyles(theme, themeVariables) {
        const styles = {
            ..._ThemeConstantsUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .R7,
            tokens: { ..._ThemeConstantsUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .R7.tokens, theme: theme === 'light' ? _ThemeConstantsUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .tokens */ .LU.light : _ThemeConstantsUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .tokens */ .LU.dark }
        };
        const { cssVariables } = ThemeHelperUtil.createCSSVariables(styles);
        const assignedCSSVariables = ThemeHelperUtil.assignCSSVariables(cssVariables, styles);
        const w3mVariables = ThemeHelperUtil.generateW3MVariables(themeVariables);
        const w3mOverrides = ThemeHelperUtil.generateW3MOverrides(themeVariables);
        const scaledVariables = ThemeHelperUtil.generateScaledVariables(themeVariables);
        const baseVariables = ThemeHelperUtil.generateBaseVariables(assignedCSSVariables);
        const allVariables = {
            ...assignedCSSVariables,
            ...baseVariables,
            ...w3mVariables,
            ...w3mOverrides,
            ...scaledVariables
        };
        const colorMixVariables = ThemeHelperUtil.applyColorMixToVariables(themeVariables, allVariables);
        const finalVariables = {
            ...allVariables,
            ...colorMixVariables
        };
        const rootStyles = Object.entries(finalVariables)
            .map(([key, style]) => `${key}:${style.replace('/[:;{}</>]/g', '')};`)
            .join('');
        return `:root {${rootStyles}}`;
    },
    generateW3MVariables(themeVariables) {
        if (!themeVariables) {
            return {};
        }
        const normalized = normalizeThemeVariables(themeVariables);
        const variables = {};
        variables['--w3m-font-family'] = normalized['font-family'];
        variables['--w3m-accent'] = normalized['accent'];
        variables['--w3m-color-mix'] = normalized['color-mix'];
        variables['--w3m-color-mix-strength'] = `${normalized['color-mix-strength']}%`;
        variables['--w3m-font-size-master'] = normalized['font-size-master'];
        variables['--w3m-border-radius-master'] = normalized['border-radius-master'];
        return variables;
    },
    generateW3MOverrides(themeVariables) {
        if (!themeVariables) {
            return {};
        }
        const normalized = normalizeThemeVariables(themeVariables);
        const overrides = {};
        if (themeVariables['--apkt-accent'] || themeVariables['--w3m-accent']) {
            const accentColor = normalized['accent'];
            overrides['--apkt-tokens-core-iconAccentPrimary'] = accentColor;
            overrides['--apkt-tokens-core-borderAccentPrimary'] = accentColor;
            overrides['--apkt-tokens-core-textAccentPrimary'] = accentColor;
            overrides['--apkt-tokens-core-backgroundAccentPrimary'] = accentColor;
        }
        if (themeVariables['--apkt-font-family'] || themeVariables['--w3m-font-family']) {
            overrides['--apkt-fontFamily-regular'] = normalized['font-family'];
        }
        if (normalized['z-index'] !== undefined) {
            overrides['--apkt-tokens-core-zIndex'] = `${normalized['z-index']}`;
        }
        return overrides;
    },
    generateScaledVariables(themeVariables) {
        if (!themeVariables) {
            return {};
        }
        const normalized = normalizeThemeVariables(themeVariables);
        const scaledVars = {};
        if (themeVariables['--apkt-font-size-master'] || themeVariables['--w3m-font-size-master']) {
            const masterSize = parseFloat(normalized['font-size-master'].replace('px', ''));
            scaledVars['--apkt-textSize-h1'] = `${Number(masterSize) * 5}px`;
            scaledVars['--apkt-textSize-h2'] = `${Number(masterSize) * 4.4}px`;
            scaledVars['--apkt-textSize-h3'] = `${Number(masterSize) * 3.8}px`;
            scaledVars['--apkt-textSize-h4'] = `${Number(masterSize) * 3.2}px`;
            scaledVars['--apkt-textSize-h5'] = `${Number(masterSize) * 2.6}px`;
            scaledVars['--apkt-textSize-h6'] = `${Number(masterSize) * 2}px`;
            scaledVars['--apkt-textSize-large'] = `${Number(masterSize) * 1.6}px`;
            scaledVars['--apkt-textSize-medium'] = `${Number(masterSize) * 1.4}px`;
            scaledVars['--apkt-textSize-small'] = `${Number(masterSize) * 1.2}px`;
        }
        if (themeVariables['--apkt-border-radius-master'] ||
            themeVariables['--w3m-border-radius-master']) {
            const masterRadius = parseFloat(normalized['border-radius-master'].replace('px', ''));
            scaledVars['--apkt-borderRadius-1'] = `${Number(masterRadius)}px`;
            scaledVars['--apkt-borderRadius-2'] = `${Number(masterRadius) * 2}px`;
            scaledVars['--apkt-borderRadius-3'] = `${Number(masterRadius) * 3}px`;
            scaledVars['--apkt-borderRadius-4'] = `${Number(masterRadius) * 4}px`;
            scaledVars['--apkt-borderRadius-5'] = `${Number(masterRadius) * 5}px`;
            scaledVars['--apkt-borderRadius-6'] = `${Number(masterRadius) * 6}px`;
            scaledVars['--apkt-borderRadius-8'] = `${Number(masterRadius) * 8}px`;
            scaledVars['--apkt-borderRadius-16'] = `${Number(masterRadius) * 16}px`;
            scaledVars['--apkt-borderRadius-20'] = `${Number(masterRadius) * 20}px`;
            scaledVars['--apkt-borderRadius-32'] = `${Number(masterRadius) * 32}px`;
            scaledVars['--apkt-borderRadius-64'] = `${Number(masterRadius) * 64}px`;
            scaledVars['--apkt-borderRadius-128'] = `${Number(masterRadius) * 128}px`;
        }
        return scaledVars;
    },
    generateColorMixCSS(themeVariables, allVariables) {
        if (!themeVariables?.['--w3m-color-mix'] || !themeVariables['--w3m-color-mix-strength']) {
            return '';
        }
        const colorMix = themeVariables['--w3m-color-mix'];
        const strength = themeVariables['--w3m-color-mix-strength'];
        if (!strength || strength === 0) {
            return '';
        }
        const colorVariables = Object.keys(allVariables || {}).filter(key => {
            const isColorToken = key.includes('-tokens-core-background') ||
                key.includes('-tokens-core-text') ||
                key.includes('-tokens-core-border') ||
                key.includes('-tokens-core-foreground') ||
                key.includes('-tokens-core-icon') ||
                key.includes('-tokens-theme-background') ||
                key.includes('-tokens-theme-text') ||
                key.includes('-tokens-theme-border') ||
                key.includes('-tokens-theme-foreground') ||
                key.includes('-tokens-theme-icon');
            const isDimensional = key.includes('-borderRadius-') ||
                key.includes('-spacing-') ||
                key.includes('-textSize-') ||
                key.includes('-fontFamily-') ||
                key.includes('-fontWeight-') ||
                key.includes('-typography-') ||
                key.includes('-duration-') ||
                key.includes('-ease-') ||
                key.includes('-path-') ||
                key.includes('-width-') ||
                key.includes('-height-') ||
                key.includes('-visual-size-') ||
                key.includes('-modal-width') ||
                key.includes('-cover');
            return isColorToken && !isDimensional;
        });
        if (colorVariables.length === 0) {
            return '';
        }
        const colorMixVariables = colorVariables
            .map(key => {
            const originalValue = allVariables?.[key] || '';
            if (originalValue.includes('color-mix') ||
                originalValue.startsWith('#') ||
                originalValue.startsWith('rgb')) {
                return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue});`;
            }
            return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}));`;
        })
            .join('');
        return ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${colorMixVariables}
      }
    }`;
    },
    generateBaseVariables(assignedCSSVariables) {
        const baseVariables = {};
        const themeBackgroundPrimary = assignedCSSVariables['--apkt-tokens-theme-backgroundPrimary'];
        if (themeBackgroundPrimary) {
            baseVariables['--apkt-tokens-theme-backgroundPrimary-base'] = themeBackgroundPrimary;
        }
        const coreBackgroundAccentPrimary = assignedCSSVariables['--apkt-tokens-core-backgroundAccentPrimary'];
        if (coreBackgroundAccentPrimary) {
            baseVariables['--apkt-tokens-core-backgroundAccentPrimary-base'] = coreBackgroundAccentPrimary;
        }
        return baseVariables;
    },
    applyColorMixToVariables(themeVariables, allVariables) {
        const colorMixVariables = {};
        if (allVariables?.['--apkt-tokens-theme-backgroundPrimary']) {
            colorMixVariables['--apkt-tokens-theme-backgroundPrimary'] =
                'var(--apkt-tokens-theme-backgroundPrimary-base)';
        }
        if (allVariables?.['--apkt-tokens-core-backgroundAccentPrimary']) {
            colorMixVariables['--apkt-tokens-core-backgroundAccentPrimary'] =
                'var(--apkt-tokens-core-backgroundAccentPrimary-base)';
        }
        const normalized = normalizeThemeVariables(themeVariables);
        const colorMix = normalized['color-mix'];
        const strength = normalized['color-mix-strength'];
        if (!strength || strength === 0) {
            return colorMixVariables;
        }
        const colorVariables = Object.keys(allVariables || {}).filter(key => {
            const isColorToken = key.includes('-tokens-core-background') ||
                key.includes('-tokens-core-text') ||
                key.includes('-tokens-core-border') ||
                key.includes('-tokens-core-foreground') ||
                key.includes('-tokens-core-icon') ||
                key.includes('-tokens-theme-background') ||
                key.includes('-tokens-theme-text') ||
                key.includes('-tokens-theme-border') ||
                key.includes('-tokens-theme-foreground') ||
                key.includes('-tokens-theme-icon') ||
                key.includes('-tokens-theme-overlay');
            const isDimensional = key.includes('-borderRadius-') ||
                key.includes('-spacing-') ||
                key.includes('-textSize-') ||
                key.includes('-fontFamily-') ||
                key.includes('-fontWeight-') ||
                key.includes('-typography-') ||
                key.includes('-duration-') ||
                key.includes('-ease-') ||
                key.includes('-path-') ||
                key.includes('-width-') ||
                key.includes('-height-') ||
                key.includes('-visual-size-') ||
                key.includes('-modal-width') ||
                key.includes('-cover');
            return isColorToken && !isDimensional;
        });
        if (colorVariables.length === 0) {
            return colorMixVariables;
        }
        colorVariables.forEach(key => {
            const originalValue = allVariables?.[key] || '';
            if (key.endsWith('-base')) {
                return;
            }
            if (key === '--apkt-tokens-theme-backgroundPrimary' ||
                key === '--apkt-tokens-core-backgroundAccentPrimary') {
                colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base))`;
            }
            else if (originalValue.includes('color-mix') ||
                originalValue.startsWith('#') ||
                originalValue.startsWith('rgb')) {
                colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue})`;
            }
            else {
                colorMixVariables[key] =
                    `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}))`;
            }
        });
        return colorMixVariables;
    }
};
const { cssVariablesVarPrefix: vars } = ThemeHelperUtil.createCSSVariables(_ThemeConstantsUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .R7);
function css(strings, ...values) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)(strings, ...values.map(value => typeof value === 'function' ? (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(value(vars)) : (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(value)));
}

//# sourceMappingURL=ThemeHelperUtil.js.map

/***/ },

/***/ 366312
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RF: () => (/* binding */ initializeTheming),
/* harmony export */   W5: () => (/* binding */ resetStyles),
/* harmony export */   fD: () => (/* binding */ elementStyles)
/* harmony export */ });
/* unused harmony exports setColorTheme, setThemeVariables, createRootStyles */
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197199);
/* harmony import */ var _ThemeHelperUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(585836);


let apktTag = undefined;
let themeTag = undefined;
let darkModeTag = undefined;
let lightModeTag = undefined;
let currentThemeVariables = undefined;
const fonts = {
    'KHTeka-500-woff2': 'https://fonts.reown.com/KHTeka-Medium.woff2',
    'KHTeka-400-woff2': 'https://fonts.reown.com/KHTeka-Regular.woff2',
    'KHTeka-300-woff2': 'https://fonts.reown.com/KHTeka-Light.woff2',
    'KHTekaMono-400-woff2': 'https://fonts.reown.com/KHTekaMono-Regular.woff2',
    'KHTeka-500-woff': 'https://fonts.reown.com/KHTeka-Light.woff',
    'KHTeka-400-woff': 'https://fonts.reown.com/KHTeka-Regular.woff',
    'KHTeka-300-woff': 'https://fonts.reown.com/KHTeka-Light.woff',
    'KHTekaMono-400-woff': 'https://fonts.reown.com/KHTekaMono-Regular.woff'
};
function createAppKitTheme(themeVariables, theme = 'dark') {
    if (apktTag) {
        document.head.removeChild(apktTag);
    }
    apktTag = document.createElement('style');
    apktTag.textContent = _ThemeHelperUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .ThemeHelperUtil */ .CV.createRootStyles(theme, themeVariables);
    document.head.appendChild(apktTag);
}
function initializeTheming(themeVariables, themeMode = 'dark') {
    currentThemeVariables = themeVariables;
    themeTag = document.createElement('style');
    darkModeTag = document.createElement('style');
    lightModeTag = document.createElement('style');
    themeTag.textContent = createRootStyles(themeVariables).core.cssText;
    darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
    lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
    document.head.appendChild(themeTag);
    document.head.appendChild(darkModeTag);
    document.head.appendChild(lightModeTag);
    createAppKitTheme(themeVariables, themeMode);
    setColorTheme(themeMode);
    const hasCustomFont = themeVariables?.['--apkt-font-family'] || themeVariables?.['--w3m-font-family'];
    if (!hasCustomFont) {
        for (const [key, url] of Object.entries(fonts)) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = url;
            link.as = 'font';
            link.type = key.includes('woff2') ? 'font/woff2' : 'font/woff';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        }
    }
    setColorTheme(themeMode);
}
function setColorTheme(themeMode = 'dark') {
    if (darkModeTag && lightModeTag && apktTag) {
        if (themeMode === 'light') {
            createAppKitTheme(currentThemeVariables, themeMode);
            darkModeTag.removeAttribute('media');
            lightModeTag.media = 'enabled';
        }
        else {
            createAppKitTheme(currentThemeVariables, themeMode);
            lightModeTag.removeAttribute('media');
            darkModeTag.media = 'enabled';
        }
    }
}
function setThemeVariables(_themeVariables) {
    currentThemeVariables = _themeVariables;
    if (themeTag && darkModeTag && lightModeTag) {
        themeTag.textContent = createRootStyles(_themeVariables).core.cssText;
        darkModeTag.textContent = createRootStyles(_themeVariables).dark.cssText;
        lightModeTag.textContent = createRootStyles(_themeVariables).light.cssText;
        const fontFamily = _themeVariables?.['--apkt-font-family'] || _themeVariables?.['--w3m-font-family'];
        if (fontFamily) {
            themeTag.textContent = themeTag.textContent?.replace('font-family: KHTeka', `font-family: ${fontFamily}`);
            darkModeTag.textContent = darkModeTag.textContent?.replace('font-family: KHTeka', `font-family: ${fontFamily}`);
            lightModeTag.textContent = lightModeTag.textContent?.replace('font-family: KHTeka', `font-family: ${fontFamily}`);
        }
    }
    if (apktTag) {
        const currentMode = lightModeTag?.media === 'enabled' ? 'light' : 'dark';
        createAppKitTheme(_themeVariables, currentMode);
    }
}
function createRootStyles(_themeVariables) {
    const hasCustomFontFamily = Boolean(_themeVariables?.['--apkt-font-family'] || _themeVariables?.['--w3m-font-family']);
    return {
        core: (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH) `
      ${hasCustomFontFamily
            ? (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH) ``
            : (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH) `
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${(0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(fonts['KHTeka-400-woff2'])}) format('woff2'),
                url(${(0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(fonts['KHTeka-400-woff'])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${(0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(fonts['KHTeka-300-woff2'])}) format('woff2'),
                url(${(0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(fonts['KHTeka-300-woff'])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${(0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(fonts['KHTekaMono-400-woff2'])}) format('woff2'),
                url(${(0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(fonts['KHTekaMono-400-woff'])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${(0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(fonts['KHTeka-400-woff2'])}) format('woff2'),
                url(${(0,lit__WEBPACK_IMPORTED_MODULE_0__/* .unsafeCSS */ .iz)(fonts['KHTeka-400-woff'])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,
        dark: (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH) `
      :root {
      }
    `,
        light: (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH) `
      :root {
      }
    `
    };
}
const resetStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH) `
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`;
const elementStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH) `
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;
//# sourceMappingURL=ThemeUtil.js.map

/***/ },

/***/ 30387
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UiHelperUtil)
/* harmony export */ });
const DECIMAL_POINT = '.';
const UiHelperUtil = {
    getSpacingStyles(spacing, index) {
        if (Array.isArray(spacing)) {
            return spacing[index] ? `var(--apkt-spacing-${spacing[index]})` : undefined;
        }
        else if (typeof spacing === 'string') {
            return `var(--apkt-spacing-${spacing})`;
        }
        return undefined;
    },
    getFormattedDate(date) {
        return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
    },
    formatCurrency(amount = 0, options = {}) {
        const numericAmount = Number(amount);
        if (isNaN(numericAmount)) {
            return '$0.00';
        }
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            ...options
        });
        return formatter.format(numericAmount);
    },
    getHostName(url) {
        try {
            const newUrl = new URL(url);
            return newUrl.hostname;
        }
        catch (error) {
            return '';
        }
    },
    getTruncateString({ string, charsStart, charsEnd, truncate }) {
        if (string.length <= charsStart + charsEnd) {
            return string;
        }
        if (truncate === 'end') {
            return `${string.substring(0, charsStart)}...`;
        }
        else if (truncate === 'start') {
            return `...${string.substring(string.length - charsEnd)}`;
        }
        return `${string.substring(0, Math.floor(charsStart))}...${string.substring(string.length - Math.floor(charsEnd))}`;
    },
    generateAvatarColors(address) {
        const hash = address
            .toLowerCase()
            .replace(/^0x/iu, '')
            .replace(/[^a-f0-9]/gu, '');
        const baseColor = hash.substring(0, 6).padEnd(6, '0');
        const rgbColor = this.hexToRgb(baseColor);
        const masterBorderRadius = getComputedStyle(document.documentElement).getPropertyValue('--w3m-border-radius-master');
        const radius = Number(masterBorderRadius?.replace('px', ''));
        const edge = 100 - 3 * radius;
        const gradientCircle = `${edge}% ${edge}% at 65% 40%`;
        const colors = [];
        for (let i = 0; i < 5; i += 1) {
            const tintedColor = this.tintColor(rgbColor, 0.15 * i);
            colors.push(`rgb(${tintedColor[0]}, ${tintedColor[1]}, ${tintedColor[2]})`);
        }
        return `
    --local-color-1: ${colors[0]};
    --local-color-2: ${colors[1]};
    --local-color-3: ${colors[2]};
    --local-color-4: ${colors[3]};
    --local-color-5: ${colors[4]};
    --local-radial-circle: ${gradientCircle}
   `;
    },
    hexToRgb(hex) {
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    },
    tintColor(rgb, tint) {
        const [r, g, b] = rgb;
        const tintedR = Math.round(r + (255 - r) * tint);
        const tintedG = Math.round(g + (255 - g) * tint);
        const tintedB = Math.round(b + (255 - b) * tint);
        return [tintedR, tintedG, tintedB];
    },
    isNumber(character) {
        const regex = {
            number: /^[0-9]+$/u
        };
        return regex.number.test(character);
    },
    getColorTheme(theme) {
        if (theme) {
            return theme;
        }
        else if (typeof window !== 'undefined' &&
            window.matchMedia &&
            typeof window.matchMedia === 'function') {
            if (window.matchMedia('(prefers-color-scheme: dark)')?.matches) {
                return 'dark';
            }
            return 'light';
        }
        return 'dark';
    },
    splitBalance(input) {
        const parts = input.split('.');
        if (parts.length === 2) {
            return [parts[0], parts[1]];
        }
        return ['0', '00'];
    },
    roundNumber(number, threshold, fixed) {
        const roundedNumber = number.toString().length >= threshold ? Number(number).toFixed(fixed) : number;
        return roundedNumber;
    },
    cssDurationToNumber(duration) {
        if (duration.endsWith('s')) {
            return Number(duration.replace('s', '')) * 1000;
        }
        else if (duration.endsWith('ms')) {
            return Number(duration.replace('ms', ''));
        }
        return 0;
    },
    maskInput({ value, decimals, integers }) {
        value = value.replace(',', '.');
        if (value === DECIMAL_POINT) {
            return `0${DECIMAL_POINT}`;
        }
        const [integerPart = '', decimalsPart] = value
            .split(DECIMAL_POINT)
            .map(p => p.replace(/[^0-9]/gu, ''));
        const limitedInteger = integers ? integerPart.substring(0, integers) : integerPart;
        const cleanIntegerPart = limitedInteger.length === 2 ? String(Number(limitedInteger)) : limitedInteger;
        const cleanDecimalsPart = typeof decimals === 'number' ? decimalsPart?.substring(0, decimals) : decimalsPart;
        const canIncludeDecimals = typeof decimals !== 'number' || decimals > 0;
        const maskValue = typeof cleanDecimalsPart === 'string' && canIncludeDecimals
            ? [cleanIntegerPart, cleanDecimalsPart].join(DECIMAL_POINT)
            : cleanIntegerPart;
        return maskValue ?? '';
    },
    capitalize(value) {
        if (!value) {
            return '';
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
};
//# sourceMappingURL=UiHelperUtil.js.map

/***/ },

/***/ 464551
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ customElement)
/* harmony export */ });
function standardCustomElement(tagName, descriptor) {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        finisher(clazz) {
            if (!customElements.get(tagName)) {
                customElements.define(tagName, clazz);
            }
        }
    };
}
function legacyCustomElement(tagName, clazz) {
    if (!customElements.get(tagName)) {
        customElements.define(tagName, clazz);
    }
    return clazz;
}
function customElement(tagName) {
    return function create(classOrDescriptor) {
        return typeof classOrDescriptor === 'function'
            ? legacyCustomElement(tagName, classOrDescriptor)
            : standardCustomElement(tagName, classOrDescriptor);
    };
}
//# sourceMappingURL=WebComponentsUtil.js.map

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