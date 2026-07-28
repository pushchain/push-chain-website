"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[86847],{

/***/ 437740
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ExchangeController)
/* harmony export */ });
/* unused harmony export DEFAULT_STATE */
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(552095);
/* harmony import */ var valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(427088);
/* harmony import */ var _reown_appkit_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566580);
/* harmony import */ var _utils_ChainControllerUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(974496);
/* harmony import */ var _utils_ConstantsUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562944);
/* harmony import */ var _utils_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(226742);
/* harmony import */ var _utils_ExchangeUtil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(101440);
/* harmony import */ var _BlockchainApiController_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(775595);
/* harmony import */ var _ChainController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(806056);
/* harmony import */ var _EventsController_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(390184);
/* harmony import */ var _OptionsController_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(757019);
/* harmony import */ var _SnackController_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(121871);












// -- Constants ----------------------------------------- //
const DEFAULT_PAGE = 0;
const DEFAULT_STATE = {
    paymentAsset: null,
    amount: null,
    tokenAmount: 0,
    priceLoading: false,
    error: null,
    exchanges: [],
    isLoading: false,
    currentPayment: undefined,
    isPaymentInProgress: false,
    paymentId: '',
    assets: []
};
// -- State --------------------------------------------- //
const state = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)(DEFAULT_STATE);
// -- Controller ---------------------------------------- //
const ExchangeController = {
    state,
    // -- Subscriptions ----------------------------------- //
    subscribe(callback) {
        return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state, () => callback(state));
    },
    subscribeKey(key, callback) {
        return (0,valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__/* .subscribeKey */ .u$)(state, key, callback);
    },
    resetState() {
        Object.assign(state, { ...DEFAULT_STATE });
    },
    async getAssetsForNetwork(network) {
        const assets = (0,_utils_ExchangeUtil_js__WEBPACK_IMPORTED_MODULE_6__/* .getPaymentAssetsForNetwork */ .nj)(network);
        const metadata = await ExchangeController.getAssetsImageAndPrice(assets);
        const assetsWithPrice = assets.map(asset => {
            const assetAddress = asset.asset === 'native'
                ? (0,_utils_ChainControllerUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .getActiveNetworkTokenAddress */ .K1)()
                : `${asset.network}:${asset.asset}`;
            const assetMetadata = metadata.find(m => m.fungibles?.[0]?.address?.toLowerCase() === assetAddress.toLowerCase());
            return {
                ...asset,
                price: assetMetadata?.fungibles?.[0]?.price || 1,
                metadata: {
                    ...asset.metadata,
                    iconUrl: assetMetadata?.fungibles?.[0]?.iconUrl
                }
            };
        });
        state.assets = assetsWithPrice;
        return assetsWithPrice;
    },
    async getAssetsImageAndPrice(assets) {
        const addresses = assets.map(asset => asset.asset === 'native' ? (0,_utils_ChainControllerUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .getActiveNetworkTokenAddress */ .K1)() : `${asset.network}:${asset.asset}`);
        const metadata = await Promise.all(addresses.map(address => _BlockchainApiController_js__WEBPACK_IMPORTED_MODULE_7__/* .BlockchainApiController */ .T.fetchTokenPrice({ addresses: [address] })));
        return metadata;
    },
    getTokenAmount() {
        if (!state?.paymentAsset?.price) {
            throw new Error('Cannot get token price');
        }
        const bigAmount = _reown_appkit_common__WEBPACK_IMPORTED_MODULE_2__/* .NumberUtil */ .S.bigNumber(state.amount ?? 0).round(8);
        const bigPrice = _reown_appkit_common__WEBPACK_IMPORTED_MODULE_2__/* .NumberUtil */ .S.bigNumber(state.paymentAsset.price).round(8);
        return bigAmount.div(bigPrice).round(8).toNumber();
    },
    setAmount(amount) {
        state.amount = amount;
        if (state.paymentAsset?.price) {
            state.tokenAmount = ExchangeController.getTokenAmount();
        }
    },
    setPaymentAsset(asset) {
        state.paymentAsset = asset;
    },
    isPayWithExchangeEnabled() {
        return _OptionsController_js__WEBPACK_IMPORTED_MODULE_10__/* .OptionsController */ .H.state.remoteFeatures?.payWithExchange;
    },
    isPayWithExchangeSupported() {
        return (ExchangeController.isPayWithExchangeEnabled() &&
            _ChainController_js__WEBPACK_IMPORTED_MODULE_8__/* .ChainController */ .W.state.activeCaipNetwork &&
            _utils_ConstantsUtil_js__WEBPACK_IMPORTED_MODULE_4__/* .ConstantsUtil */ .oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(_ChainController_js__WEBPACK_IMPORTED_MODULE_8__/* .ChainController */ .W.state.activeCaipNetwork.chainNamespace));
    },
    // -- Getters ----------------------------------------- //
    async fetchExchanges() {
        try {
            const isPayWithExchangeSupported = ExchangeController.isPayWithExchangeSupported();
            if (!state.paymentAsset || !isPayWithExchangeSupported) {
                state.exchanges = [];
                state.isLoading = false;
                return;
            }
            state.isLoading = true;
            const response = await (0,_utils_ExchangeUtil_js__WEBPACK_IMPORTED_MODULE_6__/* .getExchanges */ .ro)({
                page: DEFAULT_PAGE,
                asset: (0,_utils_ExchangeUtil_js__WEBPACK_IMPORTED_MODULE_6__/* .formatCaip19Asset */ .lZ)(state.paymentAsset.network, state.paymentAsset.asset),
                amount: state.amount?.toString() ?? '0'
            });
            // Putting this here in order to maintain backawrds compatibility with the UI when we introduce more exchanges
            state.exchanges = response.exchanges.slice(0, 2);
        }
        catch (error) {
            _SnackController_js__WEBPACK_IMPORTED_MODULE_11__/* .SnackController */ .P.showError('Unable to get exchanges');
            throw new Error('Unable to get exchanges');
        }
        finally {
            state.isLoading = false;
        }
    },
    async getPayUrl(exchangeId, params) {
        try {
            const numericAmount = Number(params.amount);
            const response = await (0,_utils_ExchangeUtil_js__WEBPACK_IMPORTED_MODULE_6__/* .getPayUrl */ .cz)({
                exchangeId,
                asset: (0,_utils_ExchangeUtil_js__WEBPACK_IMPORTED_MODULE_6__/* .formatCaip19Asset */ .lZ)(params.network, params.asset),
                amount: numericAmount.toString(),
                recipient: `${params.network}:${params.recipient}`
            });
            _EventsController_js__WEBPACK_IMPORTED_MODULE_9__/* .EventsController */ .E.sendEvent({
                type: 'track',
                event: 'PAY_EXCHANGE_SELECTED',
                properties: {
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
                    source: 'fund-from-exchange',
                    headless: false
                }
            });
            return response;
        }
        catch (error) {
            if (error instanceof Error && error.message.includes('is not supported')) {
                throw new Error('Asset not supported');
            }
            throw new Error(error.message);
        }
    },
    async handlePayWithExchange(exchangeId) {
        try {
            const address = _ChainController_js__WEBPACK_IMPORTED_MODULE_8__/* .ChainController */ .W.getAccountData()?.address;
            if (!address) {
                throw new Error('No account connected');
            }
            if (!state.paymentAsset) {
                throw new Error('No payment asset selected');
            }
            const popupWindow = _utils_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_5__/* .CoreHelperUtil */ .w.returnOpenHref('', 'popupWindow', 'scrollbar=yes,width=480,height=720');
            if (!popupWindow) {
                throw new Error('Could not create popup window');
            }
            state.isPaymentInProgress = true;
            state.paymentId = crypto.randomUUID();
            state.currentPayment = {
                type: 'exchange',
                exchangeId
            };
            const { network, asset } = state.paymentAsset;
            const payUrlParams = {
                network,
                asset,
                amount: state.tokenAmount,
                recipient: address
            };
            const payUrl = await ExchangeController.getPayUrl(exchangeId, payUrlParams);
            if (!payUrl) {
                try {
                    popupWindow.close();
                }
                catch (err) {
                    // eslint-disable-next-line no-console
                    console.error('Unable to close popup window', err);
                }
                throw new Error('Unable to initiate payment');
            }
            state.currentPayment.sessionId = payUrl.sessionId;
            state.currentPayment.status = 'IN_PROGRESS';
            state.currentPayment.exchangeId = exchangeId;
            popupWindow.location.href = payUrl.url;
        }
        catch (error) {
            state.error = 'Unable to initiate payment';
            _SnackController_js__WEBPACK_IMPORTED_MODULE_11__/* .SnackController */ .P.showError(state.error);
        }
    },
    async waitUntilComplete({ exchangeId, sessionId, paymentId, retries = 20 }) {
        const status = await ExchangeController.getBuyStatus(exchangeId, sessionId, paymentId);
        if (status.status === 'SUCCESS' || status.status === 'FAILED') {
            return status;
        }
        if (retries === 0) {
            throw new Error('Unable to get deposit status');
        }
        // Wait 5 seconds before checking again
        await new Promise(resolve => {
            setTimeout(resolve, 5000);
        });
        return ExchangeController.waitUntilComplete({
            exchangeId,
            sessionId,
            paymentId,
            retries: retries - 1
        });
    },
    async getBuyStatus(exchangeId, sessionId, paymentId) {
        try {
            if (!state.currentPayment) {
                throw new Error('No current payment');
            }
            const status = await (0,_utils_ExchangeUtil_js__WEBPACK_IMPORTED_MODULE_6__/* .getBuyStatus */ .V1)({ sessionId, exchangeId });
            state.currentPayment.status = status.status;
            if (status.status === 'SUCCESS' || status.status === 'FAILED') {
                const address = _ChainController_js__WEBPACK_IMPORTED_MODULE_8__/* .ChainController */ .W.getAccountData()?.address;
                state.currentPayment.result = status.txHash;
                state.isPaymentInProgress = false;
                _EventsController_js__WEBPACK_IMPORTED_MODULE_9__/* .EventsController */ .E.sendEvent({
                    type: 'track',
                    event: status.status === 'SUCCESS' ? 'PAY_SUCCESS' : 'PAY_ERROR',
                    properties: {
                        message: status.status === 'FAILED' ? _utils_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_5__/* .CoreHelperUtil */ .w.parseError(state.error) : undefined,
                        source: 'fund-from-exchange',
                        paymentId,
                        configuration: {
                            network: state.paymentAsset?.network || '',
                            asset: state.paymentAsset?.asset || '',
                            recipient: address || '',
                            amount: state.amount ?? 0
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
            return {
                status: 'UNKNOWN',
                txHash: ''
            };
        }
    },
    reset() {
        state.currentPayment = undefined;
        state.isPaymentInProgress = false;
        state.paymentId = '';
        state.paymentAsset = null;
        state.amount = 0;
        state.tokenAmount = 0;
        state.priceLoading = false;
        state.error = null;
        state.exchanges = [];
        state.isLoading = false;
    }
};
//# sourceMappingURL=ExchangeController.js.map

/***/ },

/***/ 586847
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mDepositFromExchangeSelectAssetView: () => (/* reexport */ W3mDepositFromExchangeSelectAssetView),
  W3mDepositFromExchangeView: () => (/* reexport */ W3mDepositFromExchangeView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ExchangeController.js
var ExchangeController = __webpack_require__(437740);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(527601);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-chip-button/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  button {
    border: none;
    border-radius: ${({ borderRadius }) => borderRadius['20']};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({ spacing }) => spacing[1]};
    transition:
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      box-shadow ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${({ tokens }) => tokens.core.backgroundAccentPrimary};
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  button[data-type='neutral'] {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  /* -- Sizes --------------------------------------------------------------- */
  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='sm'] > wui-image,
  button[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image,
  button[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-image,
  button[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({ spacing }) => spacing[1]};
    padding-right: ${({ spacing }) => spacing[1]};
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-type='accent']:not(:disabled):hover {
      background-color: ${({ tokens }) => tokens.core.foregroundAccent060};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundTertiary};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  button:disabled {
    opacity: 0.5;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-chip-button/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const FONT_BY_SIZE = {
    sm: 'sm-regular',
    md: 'md-regular',
    lg: 'lg-regular'
};
let WuiChipButton = class WuiChipButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.type = 'accent';
        this.size = 'md';
        this.imageSrc = '';
        this.disabled = false;
        this.leftIcon = undefined;
        this.rightIcon = undefined;
        this.text = '';
    }
    render() {
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc ? (0,lit/* html */.qy) `<wui-image src=${this.imageSrc}></wui-image>` : null}
        ${this.leftIcon
            ? (0,lit/* html */.qy) `<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`
            : null}
        <wui-text variant=${FONT_BY_SIZE[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon
            ? (0,lit/* html */.qy) `<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`
            : null}
      </button>
    `;
    }
};
WuiChipButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiChipButton.prototype, "type", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiChipButton.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiChipButton.prototype, "imageSrc", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiChipButton.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiChipButton.prototype, "leftIcon", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiChipButton.prototype, "rightIcon", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiChipButton.prototype, "text", void 0);
WuiChipButton = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-chip-button')
], WuiChipButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-chip-button.js

//# sourceMappingURL=wui-chip-button.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-link.js
var wui_icon_link = __webpack_require__(651068);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-image.js
var exports_wui_image = __webpack_require__(637289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js + 2 modules
var wui_list_item = __webpack_require__(100703);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js
var wui_shimmer = __webpack_require__(838215);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(409526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-input-amount.js + 2 modules
var wui_input_amount = __webpack_require__(777360);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(845198);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-fund-input/index.js
var w3m_fund_input_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mFundInput = class W3mFundInput extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.maxDecimals = undefined;
        this.maxIntegers = undefined;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${(0,if_defined/* ifDefined */.J)(this.maxDecimals)}
          .maxIntegers=${(0,if_defined/* ifDefined */.J)(this.maxIntegers)}
          .value=${this.amount ? String(this.amount) : ''}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `;
    }
};
w3m_fund_input_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], W3mFundInput.prototype, "amount", void 0);
w3m_fund_input_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], W3mFundInput.prototype, "maxDecimals", void 0);
w3m_fund_input_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], W3mFundInput.prototype, "maxIntegers", void 0);
W3mFundInput = w3m_fund_input_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-fund-input')
], W3mFundInput);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-deposit-from-exchange-view/styles.js

/* harmony default export */ const w3m_deposit_from_exchange_view_styles = ((0,esm_exports/* css */.AH) `
  .amount-input-container {
    border-radius: ${({ borderRadius }) => borderRadius['6']};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    padding: ${({ spacing }) => spacing[1]};
  }

  .container {
    border-radius: 30px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-deposit-from-exchange-view/index.js
var w3m_deposit_from_exchange_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














const PRESET_AMOUNTS = [10, 50, 100];
const MAX_DECIMALS = 6;
const MAX_INTEGERS = 10;
let W3mDepositFromExchangeView = class W3mDepositFromExchangeView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.network = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.exchanges = ExchangeController/* ExchangeController */.g.state.exchanges;
        this.isLoading = ExchangeController/* ExchangeController */.g.state.isLoading;
        this.amount = ExchangeController/* ExchangeController */.g.state.amount;
        this.tokenAmount = ExchangeController/* ExchangeController */.g.state.tokenAmount;
        this.priceLoading = ExchangeController/* ExchangeController */.g.state.priceLoading;
        this.isPaymentInProgress = ExchangeController/* ExchangeController */.g.state.isPaymentInProgress;
        this.currentPayment = ExchangeController/* ExchangeController */.g.state.currentPayment;
        this.paymentId = ExchangeController/* ExchangeController */.g.state.paymentId;
        this.paymentAsset = ExchangeController/* ExchangeController */.g.state.paymentAsset;
        this.unsubscribe.push(ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => {
            this.network = val;
            this.setDefaultPaymentAsset();
        }), ExchangeController/* ExchangeController */.g.subscribe(exchangeState => {
            this.exchanges = exchangeState.exchanges;
            this.isLoading = exchangeState.isLoading;
            this.amount = exchangeState.amount;
            this.tokenAmount = exchangeState.tokenAmount;
            this.priceLoading = exchangeState.priceLoading;
            this.paymentId = exchangeState.paymentId;
            this.isPaymentInProgress = exchangeState.isPaymentInProgress;
            this.currentPayment = exchangeState.currentPayment;
            this.paymentAsset = exchangeState.paymentAsset;
            const shouldHandlePaymentInProgress = exchangeState.isPaymentInProgress &&
                exchangeState.currentPayment?.exchangeId &&
                exchangeState.currentPayment?.sessionId &&
                exchangeState.paymentId;
            if (shouldHandlePaymentInProgress) {
                this.handlePaymentInProgress();
            }
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        const isInProgress = ExchangeController/* ExchangeController */.g.state.isPaymentInProgress;
        if (!isInProgress) {
            ExchangeController/* ExchangeController */.g.reset();
        }
    }
    async firstUpdated() {
        await this.getPaymentAssets();
        if (!this.paymentAsset) {
            await this.setDefaultPaymentAsset();
        }
        ExchangeController/* ExchangeController */.g.setAmount(PRESET_AMOUNTS[0]);
        await ExchangeController/* ExchangeController */.g.fetchExchanges();
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `;
    }
    exchangesLoadingTemplate() {
        return Array.from({ length: 2 }).map(() => (0,lit/* html */.qy) `<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`);
    }
    _exchangesTemplate() {
        return this.exchanges.length > 0
            ? this.exchanges.map(exchange => (0,lit/* html */.qy) `<wui-list-item
              @click=${() => this.onExchangeClick(exchange)}
              chevron
              variant="image"
              imageSrc=${exchange.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${exchange.name}
              </wui-text>
            </wui-list-item>`)
            : (0,lit/* html */.qy) `<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`;
    }
    exchangesTemplate() {
        return (0,lit/* html */.qy) `<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${['3', '3', '3', '3']}
      class="exchanges-container"
    >
      ${this.isLoading ? this.exchangesLoadingTemplate() : this._exchangesTemplate()}
    </wui-flex>`;
    }
    amountInputTemplate() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        .padding=${['0', '3', '3', '3']}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${['0', '0', '6', '0']}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${this.paymentAsset?.metadata.symbol || ''}
            imageSrc=${this.paymentAsset?.metadata.iconUrl || ''}
            @click=${() => RouterController/* RouterController */.I.push('PayWithExchangeSelectAsset')}
            size="lg"
            .chainImageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(this.network))}
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${['0', '0', '4', '0']}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${MAX_DECIMALS}
            .maxIntegers=${MAX_INTEGERS}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="center" gap="2">
          ${PRESET_AMOUNTS.map(amount => (0,lit/* html */.qy) `<wui-chip-button
                @click=${() => ExchangeController/* ExchangeController */.g.setAmount(amount)}
                type="neutral"
                size="lg"
                text=${`$${amount}`}
              ></wui-chip-button>`)}
        </wui-flex>
      </wui-flex>
    `;
    }
    tokenAmountTemplate() {
        if (this.priceLoading) {
            return (0,lit/* html */.qy) `<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`;
        }
        return (0,lit/* html */.qy) `
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `;
    }
    async onExchangeClick(exchange) {
        if (!this.amount) {
            SnackController/* SnackController */.P.showError('Please enter an amount');
            return;
        }
        await ExchangeController/* ExchangeController */.g.handlePayWithExchange(exchange.id);
    }
    handlePaymentInProgress() {
        const namespace = ChainController/* ChainController */.W.state.activeChain;
        const { redirectView = 'Account' } = RouterController/* RouterController */.I.state.data ?? {};
        if (this.isPaymentInProgress &&
            this.currentPayment?.exchangeId &&
            this.currentPayment?.sessionId &&
            this.paymentId) {
            ExchangeController/* ExchangeController */.g.waitUntilComplete({
                exchangeId: this.currentPayment.exchangeId,
                sessionId: this.currentPayment.sessionId,
                paymentId: this.paymentId
            }).then(status => {
                if (status.status === 'SUCCESS') {
                    SnackController/* SnackController */.P.showSuccess('Deposit completed');
                    ExchangeController/* ExchangeController */.g.reset();
                    if (namespace) {
                        ChainController/* ChainController */.W.fetchTokenBalance();
                        ConnectionController/* ConnectionController */.x.updateBalance(namespace);
                    }
                    RouterController/* RouterController */.I.replace('Transactions');
                }
                else if (status.status === 'FAILED') {
                    SnackController/* SnackController */.P.showError('Deposit failed');
                }
            });
            SnackController/* SnackController */.P.showLoading('Deposit in progress...');
            RouterController/* RouterController */.I.replace(redirectView);
        }
    }
    onAmountChange({ detail }) {
        ExchangeController/* ExchangeController */.g.setAmount(detail ? Number(detail) : null);
    }
    async getPaymentAssets() {
        if (this.network) {
            await ExchangeController/* ExchangeController */.g.getAssetsForNetwork(this.network.caipNetworkId);
        }
    }
    async setDefaultPaymentAsset() {
        if (this.network) {
            const paymentAssets = await ExchangeController/* ExchangeController */.g.getAssetsForNetwork(this.network.caipNetworkId);
            if (paymentAssets[0]) {
                ExchangeController/* ExchangeController */.g.setPaymentAsset(paymentAssets[0]);
            }
        }
    }
};
W3mDepositFromExchangeView.styles = w3m_deposit_from_exchange_view_styles;
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "network", void 0);
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "exchanges", void 0);
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "isLoading", void 0);
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "amount", void 0);
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "tokenAmount", void 0);
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "priceLoading", void 0);
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "isPaymentInProgress", void 0);
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "currentPayment", void 0);
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "paymentId", void 0);
w3m_deposit_from_exchange_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeView.prototype, "paymentAsset", void 0);
W3mDepositFromExchangeView = w3m_deposit_from_exchange_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-deposit-from-exchange-view')
], W3mDepositFromExchangeView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var exports_wui_icon = __webpack_require__(313163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var wui_icon_box = __webpack_require__(804019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-input-text.js
var wui_input_text = __webpack_require__(472270);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-token.js + 2 modules
var wui_list_token = __webpack_require__(414798);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js + 2 modules
var wui_separator = __webpack_require__(802759);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-deposit-from-exchange-select-asset-view/styles.js

/* harmony default export */ const w3m_deposit_from_exchange_select_asset_view_styles = ((0,esm_exports/* css */.AH) `
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius }) => borderRadius['3']};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-deposit-from-exchange-select-asset-view/index.js
var w3m_deposit_from_exchange_select_asset_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let W3mDepositFromExchangeSelectAssetView = class W3mDepositFromExchangeSelectAssetView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.assets = ExchangeController/* ExchangeController */.g.state.assets;
        this.search = '';
        this.onDebouncedSearch = CoreHelperUtil/* CoreHelperUtil */.w.debounce((value) => {
            this.search = value;
        });
        this.unsubscribe.push(...[
            ExchangeController/* ExchangeController */.g.subscribe(val => {
                this.assets = val.assets;
            })
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `;
    }
    templateSearchInput() {
        return (0,lit/* html */.qy) `
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
    }
    templateTokens() {
        const filteredAssets = this.assets.filter(asset => asset.metadata.name.toLowerCase().includes(this.search.toLowerCase()));
        const hasAssets = filteredAssets.length > 0;
        return (0,lit/* html */.qy) `
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${['0', '3', '0', '3']}
      >
        <wui-flex justifyContent="flex-start" .padding=${['4', '3', '3', '3']}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${hasAssets
            ? filteredAssets.map(asset => (0,lit/* html */.qy) `<wui-list-item
                    .imageSrc=${asset.metadata.iconUrl}
                    ?clickable=${true}
                    @click=${this.handleTokenClick.bind(this, asset)}
                  >
                    <wui-text variant="md-medium" color="primary">${asset.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${asset.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`)
            : (0,lit/* html */.qy) `<wui-flex
                .padding=${['20', '0', '0', '0']}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `;
    }
    onBuyClick() {
        RouterController/* RouterController */.I.push('OnRampProviders');
    }
    onInputChange(event) {
        this.onDebouncedSearch(event.detail);
    }
    handleTokenClick(asset) {
        ExchangeController/* ExchangeController */.g.setPaymentAsset(asset);
        RouterController/* RouterController */.I.goBack();
    }
};
W3mDepositFromExchangeSelectAssetView.styles = w3m_deposit_from_exchange_select_asset_view_styles;
w3m_deposit_from_exchange_select_asset_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeSelectAssetView.prototype, "assets", void 0);
w3m_deposit_from_exchange_select_asset_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDepositFromExchangeSelectAssetView.prototype, "search", void 0);
W3mDepositFromExchangeSelectAssetView = w3m_deposit_from_exchange_select_asset_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-deposit-from-exchange-select-asset-view')
], W3mDepositFromExchangeSelectAssetView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/pay-with-exchange.js


//# sourceMappingURL=pay-with-exchange.js.map

/***/ },

/***/ 651068
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_icon_link_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(869618);

//# sourceMappingURL=wui-icon-link.js.map

/***/ },

/***/ 637289
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_components_wui_image_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617381);

//# sourceMappingURL=wui-image.js.map

/***/ },

/***/ 777360
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiInputAmount

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/ref.js + 3 modules
var ref = __webpack_require__(791629);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(30387);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-amount/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    display: inline-block;
  }

  :host([data-error='true']) > input {
    color: ${({ tokens }) => tokens.core.textError};
  }

  :host([data-error='false']) > input {
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  input {
    background: transparent;
    height: auto;
    box-sizing: border-box;
    color: ${({ tokens }) => tokens.theme.textPrimary};
    font-feature-settings: 'case' on;
    font-size: ${({ textSize }) => textSize.h4};
    caret-color: ${({ tokens }) => tokens.core.backgroundAccentPrimary};
    line-height: ${({ typography }) => typography['h4-regular-mono'].lineHeight};
    letter-spacing: ${({ typography }) => typography['h4-regular-mono'].letterSpacing};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  :host([data-width-variant='auto']) input {
    width: 100%;
  }

  :host([data-width-variant='fit']) input {
    width: 1ch;
  }

  .wui-input-amount-fit-mirror {
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font-size: var(--local-font-size);
    line-height: 130%;
    letter-spacing: -1.28px;
    font-family: ${({ fontFamily }) => fontFamily.mono};
  }

  .wui-input-amount-fit-width {
    display: inline-block;
    position: relative;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-amount/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiInputAmount = class WuiInputAmount extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.inputElementRef = (0,ref/* createRef */._)();
        this.disabled = false;
        this.value = '';
        this.placeholder = '0';
        this.widthVariant = 'auto';
        this.maxDecimals = undefined;
        this.maxIntegers = undefined;
        this.fontSize = 'h4';
        this.error = false;
    }
    firstUpdated() {
        this.resizeInput();
    }
    updated() {
        this.style.setProperty('--local-font-size', ThemeHelperUtil/* vars */.f.textSize[this.fontSize]);
        this.resizeInput();
    }
    render() {
        this.dataset['widthVariant'] = this.widthVariant;
        this.dataset['error'] = String(this.error);
        if (this.inputElementRef?.value && this.value) {
            this.inputElementRef.value.value = this.value;
        }
        if (this.widthVariant === 'auto') {
            return this.inputTemplate();
        }
        return (0,lit/* html */.qy) `
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `;
    }
    inputTemplate() {
        return (0,lit/* html */.qy) `<input
      ${(0,ref/* ref */.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value ?? ''}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`;
    }
    dispatchInputChangeEvent() {
        if (this.inputElementRef.value) {
            this.inputElementRef.value.value = UiHelperUtil/* UiHelperUtil */.Z.maskInput({
                value: this.inputElementRef.value.value,
                decimals: this.maxDecimals,
                integers: this.maxIntegers
            });
            this.dispatchEvent(new CustomEvent('inputChange', {
                detail: this.inputElementRef.value.value,
                bubbles: true,
                composed: true
            }));
            this.resizeInput();
        }
    }
    resizeInput() {
        if (this.widthVariant === 'fit') {
            const inputElement = this.inputElementRef.value;
            if (inputElement) {
                const mirror = inputElement.previousElementSibling;
                if (mirror) {
                    mirror.textContent = inputElement.value || '0';
                    inputElement.style.width = `${mirror.offsetWidth}px`;
                }
            }
        }
    }
};
WuiInputAmount.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiInputAmount.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: String })
], WuiInputAmount.prototype, "value", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: String })
], WuiInputAmount.prototype, "placeholder", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: String })
], WuiInputAmount.prototype, "widthVariant", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiInputAmount.prototype, "maxDecimals", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiInputAmount.prototype, "maxIntegers", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: String })
], WuiInputAmount.prototype, "fontSize", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiInputAmount.prototype, "error", void 0);
WuiInputAmount = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-input-amount')
], WuiInputAmount);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-input-amount.js

//# sourceMappingURL=wui-input-amount.js.map

/***/ },

/***/ 100703
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiListItem

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js + 1 modules
var wui_loading_spinner = __webpack_require__(502378);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-item/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-item/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiListItem.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "type", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "imageSrc", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "imageSize", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "icon", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "iconColor", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "loading", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "tabIdx", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "boxColor", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "rightIcon", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "boxed", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "rounded", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "fullSize", void 0);
WuiListItem = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-list-item')
], WuiListItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js

//# sourceMappingURL=wui-list-item.js.map

/***/ },

/***/ 838215
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_components_wui_shimmer_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(797607);

//# sourceMappingURL=wui-shimmer.js.map

/***/ },

/***/ 797607
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiShimmer

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiShimmer.styles = [styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiShimmer.prototype, "width", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiShimmer.prototype, "height", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiShimmer.prototype, "variant", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiShimmer.prototype, "rounded", void 0);
WuiShimmer = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-shimmer')
], WuiShimmer);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 869618
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiIconLink

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiIconLink.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiIconLink.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "icon", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "iconColor", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "variant", void 0);
WuiIconLink = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon-link')
], WuiIconLink);

//# sourceMappingURL=index.js.map

/***/ }

}]);