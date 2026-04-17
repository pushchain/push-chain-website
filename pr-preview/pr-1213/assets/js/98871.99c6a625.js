"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[98871],{

/***/ 645839
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ NavigationUtil)
/* harmony export */ });
const NavigationUtil = {
    URLS: {
        FAQ: 'https://walletconnect.com/faq'
    }
};
//# sourceMappingURL=NavigationUtil.js.map

/***/ },

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

/***/ 971801
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Up: () => (/* binding */ executeSocialLogin)
/* harmony export */ });
/* unused harmony exports connectFarcaster, connectSocial */
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(552095);
/* harmony import */ var _reown_appkit_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(824376);
/* harmony import */ var _controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(806056);
/* harmony import */ var _controllers_ConnectorController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(236010);
/* harmony import */ var _controllers_EventsController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(390184);
/* harmony import */ var _controllers_RouterController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(778508);
/* harmony import */ var _controllers_SnackController_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(121871);
/* harmony import */ var _CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(226742);
/* harmony import */ var _StorageUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(127508);









function getPopupWindow() {
    try {
        return _CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__/* .CoreHelperUtil */ .w.returnOpenHref(`${_reown_appkit_common__WEBPACK_IMPORTED_MODULE_1__/* .ConstantsUtil */ .o.SECURE_SITE_SDK_ORIGIN}/loading`, 'popupWindow', 'width=600,height=800,scrollbars=yes');
    }
    catch (error) {
        throw new Error('Could not open social popup');
    }
}
async function connectFarcaster() {
    _controllers_RouterController_js__WEBPACK_IMPORTED_MODULE_5__/* .RouterController */ .I.push('ConnectingFarcaster');
    const authConnector = _controllers_ConnectorController_js__WEBPACK_IMPORTED_MODULE_3__/* .ConnectorController */ .a.getAuthConnector();
    if (authConnector) {
        const accountData = _controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainController */ .W.getAccountData();
        if (!accountData?.farcasterUrl) {
            try {
                const { url } = await authConnector.provider.getFarcasterUri();
                _controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainController */ .W.setAccountProp('farcasterUrl', url, _controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainController */ .W.state.activeChain);
            }
            catch (error) {
                _controllers_RouterController_js__WEBPACK_IMPORTED_MODULE_5__/* .RouterController */ .I.goBack();
                _controllers_SnackController_js__WEBPACK_IMPORTED_MODULE_6__/* .SnackController */ .P.showError(error);
            }
        }
    }
}
async function connectSocial(socialProvider) {
    _controllers_RouterController_js__WEBPACK_IMPORTED_MODULE_5__/* .RouterController */ .I.push('ConnectingSocial');
    const authConnector = _controllers_ConnectorController_js__WEBPACK_IMPORTED_MODULE_3__/* .ConnectorController */ .a.getAuthConnector();
    let popupWindow = null;
    try {
        const timeout = setTimeout(() => {
            throw new Error('Social login timed out. Please try again.');
        }, 45_000);
        if (authConnector && socialProvider) {
            if (!_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__/* .CoreHelperUtil */ .w.isTelegram()) {
                popupWindow = getPopupWindow();
            }
            if (popupWindow) {
                _controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainController */ .W.setAccountProp('socialWindow', (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(popupWindow), _controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainController */ .W.state.activeChain);
            }
            else if (!_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__/* .CoreHelperUtil */ .w.isTelegram()) {
                throw new Error('Could not create social popup');
            }
            const { uri } = await authConnector.provider.getSocialRedirectUri({
                provider: socialProvider
            });
            if (!uri) {
                popupWindow?.close();
                throw new Error('Could not fetch the social redirect uri');
            }
            if (popupWindow) {
                popupWindow.location.href = uri;
            }
            if (_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__/* .CoreHelperUtil */ .w.isTelegram()) {
                _StorageUtil_js__WEBPACK_IMPORTED_MODULE_8__/* .StorageUtil */ .i.setTelegramSocialProvider(socialProvider);
                const parsedUri = _CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__/* .CoreHelperUtil */ .w.formatTelegramSocialLoginUrl(uri);
                _CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__/* .CoreHelperUtil */ .w.openHref(parsedUri, '_top');
            }
            clearTimeout(timeout);
        }
    }
    catch (error) {
        popupWindow?.close();
        const errorMessage = _CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__/* .CoreHelperUtil */ .w.parseError(error);
        _controllers_SnackController_js__WEBPACK_IMPORTED_MODULE_6__/* .SnackController */ .P.showError(errorMessage);
        _controllers_EventsController_js__WEBPACK_IMPORTED_MODULE_4__/* .EventsController */ .E.sendEvent({
            type: 'track',
            event: 'SOCIAL_LOGIN_ERROR',
            properties: { provider: socialProvider, message: errorMessage }
        });
    }
}
async function executeSocialLogin(socialProvider) {
    _controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainController */ .W.setAccountProp('socialProvider', socialProvider, _controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainController */ .W.state.activeChain);
    _controllers_EventsController_js__WEBPACK_IMPORTED_MODULE_4__/* .EventsController */ .E.sendEvent({
        type: 'track',
        event: 'SOCIAL_LOGIN_STARTED',
        properties: { provider: socialProvider }
    });
    if (socialProvider === 'farcaster') {
        await connectFarcaster();
    }
    else {
        await connectSocial(socialProvider);
    }
}
//# sourceMappingURL=SocialsUtil.js.map

/***/ },

/***/ 98871
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AppKitAccountButton: () => (/* reexport */ AppKitAccountButton),
  AppKitButton: () => (/* reexport */ AppKitButton),
  AppKitConnectButton: () => (/* reexport */ AppKitConnectButton),
  AppKitNetworkButton: () => (/* reexport */ AppKitNetworkButton),
  W3mAccountButton: () => (/* reexport */ W3mAccountButton),
  W3mAccountSettingsView: () => (/* reexport */ W3mAccountSettingsView),
  W3mAccountView: () => (/* reexport */ W3mAccountView),
  W3mAllWalletsView: () => (/* reexport */ W3mAllWalletsView),
  W3mButton: () => (/* reexport */ W3mButton),
  W3mChooseAccountNameView: () => (/* reexport */ W3mChooseAccountNameView),
  W3mConnectButton: () => (/* reexport */ W3mConnectButton),
  W3mConnectView: () => (/* reexport */ W3mConnectView),
  W3mConnectWalletsView: () => (/* reexport */ W3mConnectWalletsView),
  W3mConnectingExternalView: () => (/* reexport */ W3mConnectingExternalView),
  W3mConnectingMultiChainView: () => (/* reexport */ W3mConnectingMultiChainView),
  W3mConnectingWcBasicView: () => (/* reexport */ W3mConnectingWcBasicView),
  W3mConnectingWcView: () => (/* reexport */ W3mConnectingWcView),
  W3mDownloadsView: () => (/* reexport */ W3mDownloadsView),
  W3mFooter: () => (/* reexport */ w3m_footer/* W3mFooter */.H),
  W3mFundWalletView: () => (/* reexport */ W3mFundWalletView),
  W3mGetWalletView: () => (/* reexport */ W3mGetWalletView),
  W3mNetworkButton: () => (/* reexport */ W3mNetworkButton),
  W3mNetworkSwitchView: () => (/* reexport */ W3mNetworkSwitchView),
  W3mNetworksView: () => (/* reexport */ W3mNetworksView),
  W3mProfileWalletsView: () => (/* reexport */ W3mProfileWalletsView),
  W3mRouter: () => (/* reexport */ w3m_router/* W3mRouter */.J),
  W3mSIWXSignMessageView: () => (/* reexport */ W3mSIWXSignMessageView),
  W3mSwitchActiveChainView: () => (/* reexport */ W3mSwitchActiveChainView),
  W3mUnsupportedChainView: () => (/* reexport */ W3mUnsupportedChainView),
  W3mWalletCompatibleNetworksView: () => (/* reexport */ W3mWalletCompatibleNetworksView),
  W3mWhatIsANetworkView: () => (/* reexport */ W3mWhatIsANetworkView),
  W3mWhatIsAWalletView: () => (/* reexport */ W3mWhatIsAWalletView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js
var AssetController = __webpack_require__(773337);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(527601);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js + 1 modules
var wui_loading_spinner = __webpack_require__(502378);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var wui_flex = __webpack_require__(293511);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(30387);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-avatar/index.js + 1 modules
var wui_avatar = __webpack_require__(508463);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-account-button/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
  }

  button {
    border-radius: ${({ borderRadius }) => borderRadius['20']};
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    display: flex;
    gap: ${({ spacing }) => spacing[1]};
    padding: ${({ spacing }) => spacing[1]};
    color: ${({ tokens }) => tokens.theme.textSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[16]};
    height: 32px;
    transition: box-shadow ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({ borderRadius }) => borderRadius[16]};
    padding-left: ${({ spacing }) => spacing[1]};
    padding-right: ${({ spacing }) => spacing[1]};
    background: ${({ tokens }) => tokens.theme.foregroundSecondary};
    color: ${({ tokens }) => tokens.theme.textPrimary};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({ tokens }) => tokens.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-account-button/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let WuiAccountButton = class WuiAccountButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.networkSrc = undefined;
        this.avatarSrc = undefined;
        this.balance = undefined;
        this.isUnsupportedChain = undefined;
        this.disabled = false;
        this.loading = false;
        this.address = '';
        this.profileName = '';
        this.charsStart = 4;
        this.charsEnd = 6;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button
        ?disabled=${this.disabled}
        class=${(0,if_defined/* ifDefined */.J)(this.balance ? undefined : 'local-no-balance')}
        data-error=${(0,if_defined/* ifDefined */.J)(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `;
    }
    imageTemplate() {
        const networkElement = this.networkSrc
            ? (0,lit/* html */.qy) `<wui-image src=${this.networkSrc}></wui-image>`
            : (0,lit/* html */.qy) ` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;
        return (0,lit/* html */.qy) `<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${networkElement}</wui-flex>
    </wui-flex>`;
    }
    addressTemplate() {
        return (0,lit/* html */.qy) `<wui-text variant="md-regular" color="inherit">
      ${this.address
            ? UiHelperUtil/* UiHelperUtil */.Z.getTruncateString({
                string: this.profileName || this.address,
                charsStart: this.profileName ? 18 : this.charsStart,
                charsEnd: this.profileName ? 0 : this.charsEnd,
                truncate: this.profileName ? 'end' : 'middle'
            })
            : null}
    </wui-text>`;
    }
    balanceTemplate() {
        if (this.balance) {
            const balanceTemplate = this.loading
                ? (0,lit/* html */.qy) `<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`
                : (0,lit/* html */.qy) `<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;
            return (0,lit/* html */.qy) `<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${balanceTemplate}</wui-flex
      >`;
        }
        return null;
    }
};
WuiAccountButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAccountButton.prototype, "networkSrc", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAccountButton.prototype, "avatarSrc", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAccountButton.prototype, "balance", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiAccountButton.prototype, "isUnsupportedChain", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiAccountButton.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiAccountButton.prototype, "loading", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAccountButton.prototype, "address", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAccountButton.prototype, "profileName", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAccountButton.prototype, "charsStart", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAccountButton.prototype, "charsEnd", void 0);
WuiAccountButton = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-account-button')
], WuiAccountButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-account-button.js

//# sourceMappingURL=wui-account-button.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-account-button/index.js
var w3m_account_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






class W3mAccountButtonBase extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.unsubscribe = [];
        this.disabled = false;
        this.balance = 'show';
        this.charsStart = 4;
        this.charsEnd = 6;
        this.namespace = undefined;
        this.isSupported = OptionsController/* OptionsController */.H.state.allowUnsupportedChain
            ? true
            : ChainController/* ChainController */.W.state.activeChain
                ? ChainController/* ChainController */.W.checkIfSupportedNetwork(ChainController/* ChainController */.W.state.activeChain)
                : true;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAccountData(ChainController/* ChainController */.W.getAccountData(this.namespace));
        this.setNetworkData(ChainController/* ChainController */.W.getNetworkData(this.namespace));
    }
    firstUpdated() {
        const namespace = this.namespace;
        if (namespace) {
            this.unsubscribe.push(ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                this.setAccountData(val);
            }, namespace), ChainController/* ChainController */.W.subscribeChainProp('networkState', val => {
                this.setNetworkData(val);
                this.isSupported = ChainController/* ChainController */.W.checkIfSupportedNetwork(namespace, val?.caipNetwork?.caipNetworkId);
            }, namespace));
        }
        else {
            this.unsubscribe.push(AssetController/* AssetController */.j.subscribeNetworkImages(() => {
                this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
            }), ChainController/* ChainController */.W.subscribeKey('activeCaipAddress', val => {
                this.caipAddress = val;
            }), ChainController/* ChainController */.W.subscribeChainProp('accountState', accountState => {
                this.setAccountData(accountState);
            }), ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => {
                this.network = val;
                this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(val);
                this.isSupported = val?.chainNamespace
                    ? ChainController/* ChainController */.W.checkIfSupportedNetwork(val?.chainNamespace)
                    : true;
                this.fetchNetworkImage(val);
            }));
        }
    }
    updated() {
        this.fetchNetworkImage(this.network);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        if (!ChainController/* ChainController */.W.state.activeChain) {
            return null;
        }
        const shouldShowBalance = this.balance === 'show';
        const shouldShowLoading = typeof this.balanceVal !== 'string';
        const { formattedText } = CoreHelperUtil/* CoreHelperUtil */.w.parseBalance(this.balanceVal, this.balanceSymbol);
        return (0,lit/* html */.qy) `
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${OptionsController/* OptionsController */.H.state.allowUnsupportedChain
            ? false
            : !this.isSupported}
        address=${(0,if_defined/* ifDefined */.J)(CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(this.caipAddress))}
        profileName=${(0,if_defined/* ifDefined */.J)(this.profileName)}
        networkSrc=${(0,if_defined/* ifDefined */.J)(this.networkImage)}
        avatarSrc=${(0,if_defined/* ifDefined */.J)(this.profileImage)}
        balance=${shouldShowBalance ? formattedText : ''}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace ? `-${this.namespace}` : ''}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${shouldShowLoading}
      >
      </wui-account-button>
    `;
    }
    onClick() {
        if (this.isSupported || OptionsController/* OptionsController */.H.state.allowUnsupportedChain) {
            ModalController/* ModalController */.W.open({ namespace: this.namespace });
        }
        else {
            ModalController/* ModalController */.W.open({ view: 'UnsupportedChain' });
        }
    }
    async fetchNetworkImage(network) {
        if (network?.assets?.imageId) {
            this.networkImage = await AssetUtil/* AssetUtil */.$.fetchNetworkImage(network?.assets?.imageId);
        }
    }
    setAccountData(accountState) {
        if (!accountState) {
            return;
        }
        this.caipAddress = accountState.caipAddress;
        this.balanceVal = accountState.balance;
        this.balanceSymbol = accountState.balanceSymbol;
        this.profileName = accountState.profileName;
        this.profileImage = accountState.profileImage;
    }
    setNetworkData(networkState) {
        if (!networkState) {
            return;
        }
        this.network = networkState.caipNetwork;
        this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(networkState.caipNetwork);
    }
}
w3m_account_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mAccountButtonBase.prototype, "disabled", void 0);
w3m_account_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mAccountButtonBase.prototype, "balance", void 0);
w3m_account_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mAccountButtonBase.prototype, "charsStart", void 0);
w3m_account_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mAccountButtonBase.prototype, "charsEnd", void 0);
w3m_account_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mAccountButtonBase.prototype, "namespace", void 0);
w3m_account_button_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountButtonBase.prototype, "caipAddress", void 0);
w3m_account_button_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountButtonBase.prototype, "balanceVal", void 0);
w3m_account_button_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountButtonBase.prototype, "balanceSymbol", void 0);
w3m_account_button_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountButtonBase.prototype, "profileName", void 0);
w3m_account_button_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountButtonBase.prototype, "profileImage", void 0);
w3m_account_button_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountButtonBase.prototype, "network", void 0);
w3m_account_button_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountButtonBase.prototype, "networkImage", void 0);
w3m_account_button_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountButtonBase.prototype, "isSupported", void 0);
let W3mAccountButton = class W3mAccountButton extends W3mAccountButtonBase {
};
W3mAccountButton = w3m_account_button_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-account-button')
], W3mAccountButton);

let AppKitAccountButton = class AppKitAccountButton extends W3mAccountButtonBase {
};
AppKitAccountButton = w3m_account_button_decorate([
    (0,esm_exports/* customElement */.EM)('appkit-account-button')
], AppKitAccountButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-button/styles.js

/* harmony default export */ const w3m_button_styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
    width: max-content;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-button/index.js
var w3m_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






class W3mButtonBase extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.unsubscribe = [];
        this.disabled = false;
        this.balance = undefined;
        this.size = undefined;
        this.label = undefined;
        this.loadingLabel = undefined;
        this.charsStart = 4;
        this.charsEnd = 6;
        this.namespace = undefined;
    }
    firstUpdated() {
        this.caipAddress = this.namespace
            ? ChainController/* ChainController */.W.getAccountData(this.namespace)?.caipAddress
            : ChainController/* ChainController */.W.state.activeCaipAddress;
        if (this.namespace) {
            this.unsubscribe.push(ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                this.caipAddress = val?.caipAddress;
            }, this.namespace));
        }
        else {
            this.unsubscribe.push(ChainController/* ChainController */.W.subscribeKey('activeCaipAddress', val => (this.caipAddress = val)));
        }
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return this.caipAddress
            ? (0,lit/* html */.qy) `
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,if_defined/* ifDefined */.J)(this.balance)}
            .charsStart=${(0,if_defined/* ifDefined */.J)(this.charsStart)}
            .charsEnd=${(0,if_defined/* ifDefined */.J)(this.charsEnd)}
            namespace=${(0,if_defined/* ifDefined */.J)(this.namespace)}
          >
          </appkit-account-button>
        `
            : (0,lit/* html */.qy) `
          <appkit-connect-button
            size=${(0,if_defined/* ifDefined */.J)(this.size)}
            label=${(0,if_defined/* ifDefined */.J)(this.label)}
            loadingLabel=${(0,if_defined/* ifDefined */.J)(this.loadingLabel)}
            namespace=${(0,if_defined/* ifDefined */.J)(this.namespace)}
          ></appkit-connect-button>
        `;
    }
}
W3mButtonBase.styles = w3m_button_styles;
w3m_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mButtonBase.prototype, "disabled", void 0);
w3m_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mButtonBase.prototype, "balance", void 0);
w3m_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mButtonBase.prototype, "size", void 0);
w3m_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mButtonBase.prototype, "label", void 0);
w3m_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mButtonBase.prototype, "loadingLabel", void 0);
w3m_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mButtonBase.prototype, "charsStart", void 0);
w3m_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mButtonBase.prototype, "charsEnd", void 0);
w3m_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mButtonBase.prototype, "namespace", void 0);
w3m_button_decorate([
    (0,decorators/* state */.wk)()
], W3mButtonBase.prototype, "caipAddress", void 0);
let W3mButton = class W3mButton extends W3mButtonBase {
};
W3mButton = w3m_button_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-button')
], W3mButton);

let AppKitButton = class AppKitButton extends W3mButtonBase {
};
AppKitButton = w3m_button_decorate([
    (0,esm_exports/* customElement */.EM)('appkit-button')
], AppKitButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-connect-button/styles.js

/* harmony default export */ const wui_connect_button_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  button[data-size='sm'] {
    padding: ${({ spacing }) => spacing[2]};
  }

  button[data-size='md'] {
    padding: ${({ spacing }) => spacing[3]};
  }

  button[data-size='lg'] {
    padding: ${({ spacing }) => spacing[4]};
  }

  button[data-variant='primary'] {
    background: ${({ tokens }) => tokens.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({ borderRadius }) => borderRadius[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({ borderRadius }) => borderRadius[32]};
    padding: ${({ spacing }) => spacing[2]} ${({ spacing }) => spacing[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({ borderRadius }) => borderRadius[20]};
    padding: ${({ spacing }) => spacing[3]} ${({ spacing }) => spacing[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({ borderRadius }) => borderRadius[16]};
    padding: ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[5]};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-connect-button/index.js
var wui_connect_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiConnectButton = class WuiConnectButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.variant = 'primary';
        this.loading = false;
        this.text = 'Connect Wallet';
    }
    render() {
        return (0,lit/* html */.qy) `
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `;
    }
    contentTemplate() {
        const textVariants = {
            lg: 'lg-regular',
            md: 'md-regular',
            sm: 'sm-regular'
        };
        const colors = {
            primary: 'invert',
            secondary: 'accent-primary'
        };
        if (!this.loading) {
            return (0,lit/* html */.qy) ` <wui-text variant=${textVariants[this.size]} color=${colors[this.variant]}>
        ${this.text}
      </wui-text>`;
        }
        return (0,lit/* html */.qy) `<wui-loading-spinner
      color=${colors[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`;
    }
};
WuiConnectButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_connect_button_styles];
wui_connect_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiConnectButton.prototype, "size", void 0);
wui_connect_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiConnectButton.prototype, "variant", void 0);
wui_connect_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiConnectButton.prototype, "loading", void 0);
wui_connect_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiConnectButton.prototype, "text", void 0);
WuiConnectButton = wui_connect_button_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-connect-button')
], WuiConnectButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-connect-button.js

//# sourceMappingURL=wui-connect-button.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-connect-button/index.js
var w3m_connect_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






class W3mConnectButtonBase extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.size = 'md';
        this.label = 'Connect Wallet';
        this.loadingLabel = 'Connecting...';
        this.open = ModalController/* ModalController */.W.state.open;
        this.loading = this.namespace
            ? ModalController/* ModalController */.W.state.loadingNamespaceMap.get(this.namespace)
            : ModalController/* ModalController */.W.state.loading;
        this.unsubscribe.push(ModalController/* ModalController */.W.subscribe(val => {
            this.open = val.open;
            this.loading = this.namespace ? val.loadingNamespaceMap.get(this.namespace) : val.loading;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-connect-button
        size=${(0,if_defined/* ifDefined */.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace ? `-${this.namespace}` : ''}`}
      >
        ${this.loading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
    }
    onClick() {
        if (this.open) {
            ModalController/* ModalController */.W.close();
        }
        else if (!this.loading) {
            ModalController/* ModalController */.W.open({ view: 'Connect', namespace: this.namespace });
        }
    }
}
w3m_connect_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mConnectButtonBase.prototype, "size", void 0);
w3m_connect_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mConnectButtonBase.prototype, "label", void 0);
w3m_connect_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mConnectButtonBase.prototype, "loadingLabel", void 0);
w3m_connect_button_decorate([
    (0,decorators/* property */.MZ)()
], W3mConnectButtonBase.prototype, "namespace", void 0);
w3m_connect_button_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectButtonBase.prototype, "open", void 0);
w3m_connect_button_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectButtonBase.prototype, "loading", void 0);
let W3mConnectButton = class W3mConnectButton extends W3mConnectButtonBase {
};
W3mConnectButton = w3m_connect_button_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connect-button')
], W3mConnectButton);

let AppKitConnectButton = class AppKitConnectButton extends W3mConnectButtonBase {
};
AppKitConnectButton = w3m_connect_button_decorate([
    (0,esm_exports/* customElement */.EM)('appkit-connect-button')
], AppKitConnectButton);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js + 1 modules
var wui_icon_box = __webpack_require__(42815);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-button/styles.js

/* harmony default export */ const wui_network_button_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
  }

  button {
    border-radius: ${({ borderRadius }) => borderRadius[32]};
    display: flex;
    gap: ${({ spacing }) => spacing[1]};
    padding: ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[2]}
      ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[1]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({ borderRadius }) => borderRadius[32]};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-button/index.js
var wui_network_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiNetworkButton = class WuiNetworkButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.imageSrc = undefined;
        this.isUnsupportedChain = undefined;
        this.disabled = false;
        this.size = 'lg';
    }
    render() {
        const textVariant = {
            sm: 'sm-regular',
            md: 'md-regular',
            lg: 'lg-regular'
        };
        return (0,lit/* html */.qy) `
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${textVariant[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `;
    }
    visualTemplate() {
        if (this.isUnsupportedChain) {
            return (0,lit/* html */.qy) ` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `;
        }
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc}></wui-image>`;
        }
        return (0,lit/* html */.qy) ` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `;
    }
};
WuiNetworkButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_network_button_styles];
wui_network_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiNetworkButton.prototype, "imageSrc", void 0);
wui_network_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiNetworkButton.prototype, "isUnsupportedChain", void 0);
wui_network_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiNetworkButton.prototype, "disabled", void 0);
wui_network_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiNetworkButton.prototype, "size", void 0);
WuiNetworkButton = wui_network_button_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-network-button')
], WuiNetworkButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-network-button.js

//# sourceMappingURL=wui-network-button.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-network-button/styles.js

/* harmony default export */ const w3m_network_button_styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
    width: max-content;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-network-button/index.js
var w3m_network_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







class W3mNetworkButtonBase extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.disabled = false;
        this.network = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
        this.caipAddress = ChainController/* ChainController */.W.state.activeCaipAddress;
        this.loading = ModalController/* ModalController */.W.state.loading;
        this.isSupported = OptionsController/* OptionsController */.H.state.allowUnsupportedChain
            ? true
            : ChainController/* ChainController */.W.state.activeChain
                ? ChainController/* ChainController */.W.checkIfSupportedNetwork(ChainController/* ChainController */.W.state.activeChain)
                : true;
        this.unsubscribe.push(...[
            AssetController/* AssetController */.j.subscribeNetworkImages(() => {
                this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
            }),
            ChainController/* ChainController */.W.subscribeKey('activeCaipAddress', val => {
                this.caipAddress = val;
            }),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => {
                this.network = val;
                this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(val);
                this.isSupported = val?.chainNamespace
                    ? ChainController/* ChainController */.W.checkIfSupportedNetwork(val.chainNamespace)
                    : true;
                AssetUtil/* AssetUtil */.$.fetchNetworkImage(val?.assets?.imageId);
            }),
            ModalController/* ModalController */.W.subscribeKey('loading', val => (this.loading = val))
        ]);
    }
    firstUpdated() {
        AssetUtil/* AssetUtil */.$.fetchNetworkImage(this.network?.assets?.imageId);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const isSupported = this.network
            ? ChainController/* ChainController */.W.checkIfSupportedNetwork(this.network.chainNamespace)
            : true;
        return (0,lit/* html */.qy) `
      <wui-network-button
        .disabled=${Boolean(this.disabled || this.loading)}
        .isUnsupportedChain=${OptionsController/* OptionsController */.H.state.allowUnsupportedChain ? false : !isSupported}
        imageSrc=${(0,if_defined/* ifDefined */.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `;
    }
    getLabel() {
        if (this.network) {
            if (!this.isSupported && !OptionsController/* OptionsController */.H.state.allowUnsupportedChain) {
                return 'Switch Network';
            }
            return this.network.name;
        }
        if (this.label) {
            return this.label;
        }
        if (this.caipAddress) {
            return 'Unknown Network';
        }
        return 'Select Network';
    }
    onClick() {
        if (!this.loading) {
            EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_NETWORKS' });
            ModalController/* ModalController */.W.open({ view: 'Networks' });
        }
    }
}
W3mNetworkButtonBase.styles = w3m_network_button_styles;
w3m_network_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mNetworkButtonBase.prototype, "disabled", void 0);
w3m_network_button_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], W3mNetworkButtonBase.prototype, "label", void 0);
w3m_network_button_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworkButtonBase.prototype, "network", void 0);
w3m_network_button_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworkButtonBase.prototype, "networkImage", void 0);
w3m_network_button_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworkButtonBase.prototype, "caipAddress", void 0);
w3m_network_button_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworkButtonBase.prototype, "loading", void 0);
w3m_network_button_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworkButtonBase.prototype, "isSupported", void 0);
let W3mNetworkButton = class W3mNetworkButton extends W3mNetworkButtonBase {
};
W3mNetworkButton = w3m_network_button_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-network-button')
], W3mNetworkButton);

let AppKitNetworkButton = class AppKitNetworkButton extends W3mNetworkButtonBase {
};
AppKitNetworkButton = w3m_network_button_decorate([
    (0,esm_exports/* customElement */.EM)('appkit-network-button')
], AppKitNetworkButton);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/index.js + 1 modules
var w3m_router = __webpack_require__(803830);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-footer/index.js + 1 modules
var w3m_footer = __webpack_require__(389056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
var utils_ConstantsUtil = __webpack_require__(562944);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-avatar.js

//# sourceMappingURL=wui-avatar.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var exports_wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-link.js
var wui_icon_link = __webpack_require__(651068);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js + 2 modules
var wui_list_item = __webpack_require__(100703);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/index.js + 1 modules
var wui_button = __webpack_require__(966456);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-notice-card/styles.js

/* harmony default export */ const wui_notice_card_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing }) => spacing[4]};
    padding: ${({ spacing }) => spacing[3]};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({ spacing }) => spacing[2]};
    color: ${({ tokens }) => tokens.theme.textInvert};
    background-color: ${({ tokens }) => tokens.core.backgroundAccentPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    align-items: center;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.foregroundAccent020};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-notice-card/index.js
var wui_notice_card_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiNoticeCard = class WuiNoticeCard extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.label = '';
        this.description = '';
        this.icon = 'wallet';
    }
    render() {
        return (0,lit/* html */.qy) `
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="lg" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `;
    }
};
WuiNoticeCard.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_notice_card_styles];
wui_notice_card_decorate([
    (0,decorators/* property */.MZ)()
], WuiNoticeCard.prototype, "label", void 0);
wui_notice_card_decorate([
    (0,decorators/* property */.MZ)()
], WuiNoticeCard.prototype, "description", void 0);
wui_notice_card_decorate([
    (0,decorators/* property */.MZ)()
], WuiNoticeCard.prototype, "icon", void 0);
WuiNoticeCard = wui_notice_card_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-notice-card')
], WuiNoticeCard);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-notice-card.js

//# sourceMappingURL=wui-notice-card.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js
var StorageUtil = __webpack_require__(127508);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-auth-button/index.js
var w3m_account_auth_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mAccountAuthButton = class W3mAccountAuthButton extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.socialProvider = StorageUtil/* StorageUtil */.i.getConnectedSocialProvider();
        this.socialUsername = StorageUtil/* StorageUtil */.i.getConnectedSocialUsername();
        this.namespace = ChainController/* ChainController */.W.state.activeChain;
        this.unsubscribe.push(ChainController/* ChainController */.W.subscribeKey('activeChain', namespace => {
            this.namespace = namespace;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsub => unsub());
    }
    render() {
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(this.namespace);
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        if (!authConnector || connectorId !== ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH) {
            this.style.cssText = `display: none`;
            return null;
        }
        const email = authConnector.provider.getEmail() ?? '';
        if (!email && !this.socialUsername) {
            this.style.cssText = `display: none`;
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        ?rounded=${true}
        icon=${this.socialProvider ?? 'mail'}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${() => {
            this.onGoToUpdateEmail(email, this.socialProvider);
        }}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(email)}</wui-text>
      </wui-list-item>
    `;
    }
    onGoToUpdateEmail(email, socialProvider) {
        if (!socialProvider) {
            RouterController/* RouterController */.I.push('UpdateEmailWallet', { email, redirectView: 'Account' });
        }
    }
    getAuthName(email) {
        if (this.socialUsername) {
            if (this.socialProvider === 'discord' && this.socialUsername.endsWith('0')) {
                return this.socialUsername.slice(0, -1);
            }
            return this.socialUsername;
        }
        return email.length > 30 ? `${email.slice(0, -3)}...` : email;
    }
};
w3m_account_auth_button_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountAuthButton.prototype, "namespace", void 0);
W3mAccountAuthButton = w3m_account_auth_button_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-account-auth-button')
], W3mAccountAuthButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-account-settings-view/index.js
var w3m_account_settings_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let W3mAccountSettingsView = class W3mAccountSettingsView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.usubscribe = [];
        this.networkImages = AssetController/* AssetController */.j.state.networkImages;
        this.address = ChainController/* ChainController */.W.getAccountData()?.address;
        this.profileImage = ChainController/* ChainController */.W.getAccountData()?.profileImage;
        this.profileName = ChainController/* ChainController */.W.getAccountData()?.profileName;
        this.network = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.disconnecting = false;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.usubscribe.push(...[
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                if (val) {
                    this.address = val.address;
                    this.profileImage = val.profileImage;
                    this.profileName = val.profileName;
                }
            }),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => {
                if (val?.id) {
                    this.network = val;
                }
            }),
            OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => {
                this.remoteFeatures = val;
            })
        ]);
    }
    disconnectedCallback() {
        this.usubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        if (!this.address) {
            throw new Error('w3m-account-settings-view: No account provided');
        }
        const networkImage = this.networkImages[this.network?.assets?.imageId ?? ''];
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${['0', '5', '3', '5']}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,if_defined/* ifDefined */.J)(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${esm_exports/* UiHelperUtil */.Zv.getTruncateString({
            string: this.address,
            charsStart: 4,
            charsEnd: 6,
            truncate: 'middle'
        })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${['6', '4', '3', '4']}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${(0,if_defined/* ifDefined */.J)(networkImage)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${true}
            ?rounded=${true}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name ?? 'Unknown'}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${true}
            icon="power"
            iconColor="error"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    chooseNameButtonTemplate() {
        const namespace = this.network?.chainNamespace;
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(namespace);
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        const hasNetworkSupport = ChainController/* ChainController */.W.checkIfNamesSupported();
        if (!hasNetworkSupport ||
            !authConnector ||
            connectorId !== ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH ||
            this.profileName) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        icon="id"
        ?rounded=${true}
        ?chevron=${true}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `;
    }
    authCardTemplate() {
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(this.network?.chainNamespace);
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        const { origin } = location;
        if (!authConnector ||
            connectorId !== ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH ||
            origin.includes(utils_ConstantsUtil/* ConstantsUtil */.oU.SECURE_SITE)) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
    }
    isAllowedNetworkSwitch() {
        const requestedCaipNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
        const isValidNetwork = requestedCaipNetworks?.find(({ id }) => id === this.network?.id);
        return isMultiNetwork || !isValidNetwork;
    }
    onCopyAddress() {
        try {
            if (this.address) {
                CoreHelperUtil/* CoreHelperUtil */.w.copyToClopboard(this.address);
                SnackController/* SnackController */.P.showSuccess('Address copied');
            }
        }
        catch {
            SnackController/* SnackController */.P.showError('Failed to copy');
        }
    }
    smartAccountSettingsTemplate() {
        const namespace = this.network?.chainNamespace;
        const isNetworkEnabled = ChainController/* ChainController */.W.checkIfSmartAccountEnabled();
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(namespace);
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        if (!authConnector ||
            connectorId !== ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH ||
            !isNetworkEnabled) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        icon="user"
        ?rounded=${true}
        ?chevron=${true}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `;
    }
    onChooseName() {
        RouterController/* RouterController */.I.push('ChooseAccountName');
    }
    onNetworks() {
        if (this.isAllowedNetworkSwitch()) {
            RouterController/* RouterController */.I.push('Networks');
        }
    }
    async onDisconnect() {
        try {
            this.disconnecting = true;
            const namespace = this.network?.chainNamespace;
            const connectionsByNamespace = ConnectionController/* ConnectionController */.x.getConnections(namespace);
            const hasConnections = connectionsByNamespace.length > 0;
            const connectorId = namespace && ConnectorController/* ConnectorController */.a.state.activeConnectorIds[namespace];
            const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
            await ConnectionController/* ConnectionController */.x.disconnect(isMultiWalletEnabled ? { id: connectorId, namespace } : {});
            if (hasConnections && isMultiWalletEnabled) {
                RouterController/* RouterController */.I.push('ProfileWallets');
                SnackController/* SnackController */.P.showSuccess('Wallet deleted');
            }
        }
        catch {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'DISCONNECT_ERROR',
                properties: { message: 'Failed to disconnect' }
            });
            SnackController/* SnackController */.P.showError('Failed to disconnect');
        }
        finally {
            this.disconnecting = false;
        }
    }
    onGoToUpgradeView() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_UPGRADE_FROM_MODAL' });
        RouterController/* RouterController */.I.push('UpgradeEmailWallet');
    }
    onSmartAccountSettings() {
        RouterController/* RouterController */.I.push('SmartAccountSettings');
    }
};
w3m_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountSettingsView.prototype, "address", void 0);
w3m_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountSettingsView.prototype, "profileImage", void 0);
w3m_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountSettingsView.prototype, "profileName", void 0);
w3m_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountSettingsView.prototype, "network", void 0);
w3m_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountSettingsView.prototype, "disconnecting", void 0);
w3m_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountSettingsView.prototype, "remoteFeatures", void 0);
W3mAccountSettingsView = w3m_account_settings_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-account-settings-view')
], W3mAccountSettingsView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ExchangeController.js
var ExchangeController = __webpack_require__(437740);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var exports_wui_button = __webpack_require__(409526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var exports_wui_icon = __webpack_require__(313163);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tab-item/styles.js

/* harmony default export */ const wui_tab_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[2]};
    column-gap: ${({ spacing }) => spacing[1]};
    color: ${({ tokens }) => tokens.theme.textSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[20]};
    background-color: transparent;
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({ tokens }) => tokens.theme.textPrimary};
    background-color: ${({ tokens }) => tokens.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({ tokens }) => tokens.theme.textPrimary};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tab-item/index.js
var wui_tab_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const TEXT_VARIANT_BY_SIZE = {
    lg: 'lg-regular',
    md: 'md-regular',
    sm: 'sm-regular'
};
const ICON_SIZE = {
    lg: 'md',
    md: 'sm',
    sm: 'sm'
};
let WuiTab = class WuiTab extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.icon = 'mobile';
        this.size = 'md';
        this.label = '';
        this.active = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button data-active=${this.active}>
        ${this.icon
            ? (0,lit/* html */.qy) `<wui-icon size=${ICON_SIZE[this.size]} name=${this.icon}></wui-icon>`
            : ''}
        <wui-text variant=${TEXT_VARIANT_BY_SIZE[this.size]}> ${this.label} </wui-text>
      </button>
    `;
    }
};
WuiTab.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_tab_item_styles];
wui_tab_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTab.prototype, "icon", void 0);
wui_tab_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTab.prototype, "size", void 0);
wui_tab_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTab.prototype, "label", void 0);
wui_tab_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiTab.prototype, "active", void 0);
WuiTab = wui_tab_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-tab-item')
], WuiTab);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/styles.js

/* harmony default export */ const wui_tabs_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[32]};
    padding: ${({ spacing }) => spacing['01']};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/index.js
var wui_tabs_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiTabs = class WuiTabs extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.tabs = [];
        this.onTabChange = () => null;
        this.size = 'md';
        this.activeTab = 0;
    }
    render() {
        this.dataset['size'] = this.size;
        return this.tabs.map((tab, index) => {
            const isActive = index === this.activeTab;
            return (0,lit/* html */.qy) `
        <wui-tab-item
          @click=${() => this.onTabClick(index)}
          icon=${tab.icon}
          size=${this.size}
          label=${tab.label}
          ?active=${isActive}
          data-active=${isActive}
          data-testid="tab-${tab.label?.toLowerCase()}"
        ></wui-tab-item>
      `;
        });
    }
    onTabClick(index) {
        this.activeTab = index;
        this.onTabChange(index);
    }
};
WuiTabs.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_tabs_styles];
wui_tabs_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], WuiTabs.prototype, "tabs", void 0);
wui_tabs_decorate([
    (0,decorators/* property */.MZ)()
], WuiTabs.prototype, "onTabChange", void 0);
wui_tabs_decorate([
    (0,decorators/* property */.MZ)()
], WuiTabs.prototype, "size", void 0);
wui_tabs_decorate([
    (0,decorators/* state */.wk)()
], WuiTabs.prototype, "activeTab", void 0);
WuiTabs = wui_tabs_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-tabs')
], WuiTabs);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-tabs.js

//# sourceMappingURL=wui-tabs.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-tag.js
var wui_tag = __webpack_require__(773812);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-switch.js + 2 modules
var wui_wallet_switch = __webpack_require__(720526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(110152);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-default-widget/styles.js

/* harmony default export */ const w3m_account_default_widget_styles = ((0,esm_exports/* css */.AH) `
  wui-icon-link {
    margin-right: calc(${({ spacing }) => spacing['8']} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({ spacing }) => spacing['1']};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing }) => spacing['3']};
    height: 48px;
    padding: ${({ spacing }) => spacing['2']};
    padding-right: ${({ spacing }) => spacing['3']};
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[6]};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
  }

  .account-button:hover {
    background-color: ${({ tokens }) => tokens.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({ tokens }) => tokens.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({ spacing }) => spacing['2']};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({ tokens }) => tokens.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({ durations }) => durations['md']}
        ${({ easings }) => easings['ease-out-power-1']},
      opacity ${({ durations }) => durations['md']} ${({ easings }) => easings['ease-out-power-1']};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-default-widget/index.js
var w3m_account_default_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















let W3mAccountDefaultWidget = class W3mAccountDefaultWidget extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.caipAddress = ChainController/* ChainController */.W.getAccountData()?.caipAddress;
        this.address = CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(ChainController/* ChainController */.W.getAccountData()?.caipAddress);
        this.profileImage = ChainController/* ChainController */.W.getAccountData()?.profileImage;
        this.profileName = ChainController/* ChainController */.W.getAccountData()?.profileName;
        this.disconnecting = false;
        this.balance = ChainController/* ChainController */.W.getAccountData()?.balance;
        this.balanceSymbol = ChainController/* ChainController */.W.getAccountData()?.balanceSymbol;
        this.features = OptionsController/* OptionsController */.H.state.features;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.namespace = ChainController/* ChainController */.W.state.activeChain;
        this.activeConnectorIds = ConnectorController/* ConnectorController */.a.state.activeConnectorIds;
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                this.address = CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(val?.caipAddress);
                this.caipAddress = val?.caipAddress;
                this.balance = val?.balance;
                this.balanceSymbol = val?.balanceSymbol;
                this.profileName = val?.profileName;
                this.profileImage = val?.profileImage;
            }),
            OptionsController/* OptionsController */.H.subscribeKey('features', val => (this.features = val)),
            OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)),
            ConnectorController/* ConnectorController */.a.subscribeKey('activeConnectorIds', newActiveConnectorIds => {
                this.activeConnectorIds = newActiveConnectorIds;
            }),
            ChainController/* ChainController */.W.subscribeKey('activeChain', val => (this.namespace = val)),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => {
                if (val?.chainNamespace) {
                    this.namespace = val?.chainNamespace;
                }
            })
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        if (!this.caipAddress || !this.namespace) {
            return null;
        }
        const connectorId = this.activeConnectorIds[this.namespace];
        const connector = connectorId ? ConnectorController/* ConnectorController */.a.getConnectorById(connectorId) : undefined;
        const connectorImage = AssetUtil/* AssetUtil */.$.getConnectorImage(connector);
        const { value, decimals, symbol } = CoreHelperUtil/* CoreHelperUtil */.w.parseBalance(this.balance, this.balanceSymbol);
        return (0,lit/* html */.qy) `<wui-flex
        flexDirection="column"
        .padding=${['0', '5', '4', '5']}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${(0,if_defined/* ifDefined */.J)(this.caipAddress)}
          address=${(0,if_defined/* ifDefined */.J)(CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(this.caipAddress))}
          imageSrc=${(0,if_defined/* ifDefined */.J)(this.profileImage === null ? undefined : this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${connectorImage}
          alt=${connector?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${value}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${decimals}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${symbol}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${['0', '3', '3', '3']}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${true}
          icon="power"
          iconColor="error"
          ?chevron=${false}
          .loading=${this.disconnecting}
          .rightIcon=${false}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
    }
    fundWalletTemplate() {
        if (!this.namespace) {
            return null;
        }
        const isOnrampSupported = utils_ConstantsUtil/* ConstantsUtil */.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);
        const isReceiveEnabled = Boolean(this.features?.receive);
        const isOnrampEnabled = this.remoteFeatures?.onramp && isOnrampSupported;
        const isPayWithExchangeEnabled = ExchangeController/* ExchangeController */.g.isPayWithExchangeEnabled();
        if (!isOnrampEnabled && !isReceiveEnabled && !isPayWithExchangeEnabled) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        .rounded=${true}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${true}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `;
    }
    orderedFeaturesTemplate() {
        const featuresOrder = this.features?.walletFeaturesOrder || utils_ConstantsUtil/* ConstantsUtil */.oU.DEFAULT_FEATURES.walletFeaturesOrder;
        return featuresOrder.map(feature => {
            switch (feature) {
                case 'onramp':
                    return this.fundWalletTemplate();
                case 'swaps':
                    return this.swapsTemplate();
                case 'send':
                    return this.sendTemplate();
                default:
                    return null;
            }
        });
    }
    activityTemplate() {
        if (!this.namespace) {
            return null;
        }
        const isEnabled = this.remoteFeatures?.activity &&
            utils_ConstantsUtil/* ConstantsUtil */.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace);
        return isEnabled
            ? (0,lit/* html */.qy) ` <wui-list-item
          .rounded=${true}
          icon="clock"
          ?chevron=${true}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`
            : null;
    }
    swapsTemplate() {
        const isSwapsEnabled = this.remoteFeatures?.swaps;
        const isEvm = ChainController/* ChainController */.W.state.activeChain === ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM;
        if (!isSwapsEnabled || !isEvm) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        .rounded=${true}
        icon="recycleHorizontal"
        ?chevron=${true}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `;
    }
    sendTemplate() {
        const isSendEnabled = this.features?.send;
        const namespace = ChainController/* ChainController */.W.state.activeChain;
        if (!namespace) {
            throw new Error('SendController:sendTemplate - namespace is required');
        }
        const isSendSupported = utils_ConstantsUtil/* ConstantsUtil */.oU.SEND_SUPPORTED_NAMESPACES.includes(namespace);
        if (!isSendEnabled || !isSendSupported) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        .rounded=${true}
        icon="send"
        ?chevron=${true}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `;
    }
    authCardTemplate() {
        const namespace = ChainController/* ChainController */.W.state.activeChain;
        if (!namespace) {
            throw new Error('AuthCardTemplate:authCardTemplate - namespace is required');
        }
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(namespace);
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        const { origin } = location;
        if (!authConnector ||
            connectorId !== ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH ||
            origin.includes(utils_ConstantsUtil/* ConstantsUtil */.oU.SECURE_SITE)) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
    }
    handleClickFundWallet() {
        RouterController/* RouterController */.I.push('FundWallet');
    }
    handleClickSwap() {
        RouterController/* RouterController */.I.push('Swap');
    }
    handleClickSend() {
        RouterController/* RouterController */.I.push('WalletSend');
    }
    explorerBtnTemplate() {
        const addressExplorerUrl = ChainController/* ChainController */.W.getAccountData()?.addressExplorerUrl;
        if (!addressExplorerUrl) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `;
    }
    onTransactions() {
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'CLICK_TRANSACTIONS',
            properties: {
                isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                    W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
            }
        });
        RouterController/* RouterController */.I.push('Transactions');
    }
    async onDisconnect() {
        try {
            this.disconnecting = true;
            const connectionsByNamespace = ConnectionController/* ConnectionController */.x.getConnections(this.namespace);
            const hasConnections = connectionsByNamespace.length > 0;
            const connectorId = this.namespace && ConnectorController/* ConnectorController */.a.state.activeConnectorIds[this.namespace];
            const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
            await ConnectionController/* ConnectionController */.x.disconnect(isMultiWalletEnabled ? { id: connectorId, namespace: this.namespace } : {});
            if (hasConnections && isMultiWalletEnabled) {
                RouterController/* RouterController */.I.push('ProfileWallets');
                SnackController/* SnackController */.P.showSuccess('Wallet deleted');
            }
        }
        catch {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'DISCONNECT_ERROR',
                properties: { message: 'Failed to disconnect' }
            });
            SnackController/* SnackController */.P.showError('Failed to disconnect');
        }
        finally {
            this.disconnecting = false;
        }
    }
    onExplorer() {
        const addressExplorerUrl = ChainController/* ChainController */.W.getAccountData()?.addressExplorerUrl;
        if (addressExplorerUrl) {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(addressExplorerUrl, '_blank');
        }
    }
    onGoToUpgradeView() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_UPGRADE_FROM_MODAL' });
        RouterController/* RouterController */.I.push('UpgradeEmailWallet');
    }
    onGoToProfileWalletsView() {
        RouterController/* RouterController */.I.push('ProfileWallets');
    }
};
W3mAccountDefaultWidget.styles = w3m_account_default_widget_styles;
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "caipAddress", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "address", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "profileImage", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "profileName", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "disconnecting", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "balance", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "balanceSymbol", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "features", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "remoteFeatures", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "namespace", void 0);
w3m_account_default_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountDefaultWidget.prototype, "activeConnectorIds", void 0);
W3mAccountDefaultWidget = w3m_account_default_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-account-default-widget')
], W3mAccountDefaultWidget);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectorUtil.js
var ConnectorUtil = __webpack_require__(645110);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-balance/styles.js

/* harmony default export */ const wui_balance_styles = ((0,ThemeHelperUtil/* css */.AH) `
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({ tokens }) => tokens.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-balance/index.js
var wui_balance_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let WuiBalance = class WuiBalance extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.dollars = '0';
        this.pennies = '00';
    }
    render() {
        return (0,lit/* html */.qy) `<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`;
    }
};
WuiBalance.styles = [ThemeUtil/* resetStyles */.W5, wui_balance_styles];
wui_balance_decorate([
    (0,decorators/* property */.MZ)()
], WuiBalance.prototype, "dollars", void 0);
wui_balance_decorate([
    (0,decorators/* property */.MZ)()
], WuiBalance.prototype, "pennies", void 0);
WuiBalance = wui_balance_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-balance')
], WuiBalance);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-balance.js

//# sourceMappingURL=wui-balance.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tooltip/styles.js

/* harmony default export */ const wui_tooltip_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({ colors }) => colors.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({ colors }) => colors.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({ colors }) => colors.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({ colors }) => colors.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({ colors }) => colors.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({ colors }) => colors.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  :host([data-size='md']) {
    padding: ${({ spacing }) => spacing[2]} ${({ spacing }) => spacing[3]};
    border-radius: ${({ borderRadius }) => borderRadius[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tooltip/index.js
var wui_tooltip_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const TEXT_SIZE = {
    sm: 'sm-regular',
    md: 'md-regular'
};
let WuiTooltip = class WuiTooltip extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.placement = 'top';
        this.variant = 'fill';
        this.size = 'md';
        this.message = '';
    }
    render() {
        this.dataset['variant'] = this.variant;
        this.dataset['size'] = this.size;
        return (0,lit/* html */.qy) `<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${TEXT_SIZE[this.size]}>${this.message}</wui-text>`;
    }
};
WuiTooltip.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_tooltip_styles];
wui_tooltip_decorate([
    (0,decorators/* property */.MZ)()
], WuiTooltip.prototype, "placement", void 0);
wui_tooltip_decorate([
    (0,decorators/* property */.MZ)()
], WuiTooltip.prototype, "variant", void 0);
wui_tooltip_decorate([
    (0,decorators/* property */.MZ)()
], WuiTooltip.prototype, "size", void 0);
wui_tooltip_decorate([
    (0,decorators/* property */.MZ)()
], WuiTooltip.prototype, "message", void 0);
WuiTooltip = wui_tooltip_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-tooltip')
], WuiTooltip);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-tooltip.js

//# sourceMappingURL=wui-tooltip.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/HelpersUtil.js
var HelpersUtil = __webpack_require__(234558);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-activity-list/index.js + 12 modules
var w3m_activity_list = __webpack_require__(945665);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-activity-widget/styles.js

/* harmony default export */ const w3m_account_activity_widget_styles = ((0,lit/* css */.AH) `
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-activity-widget/index.js
var w3m_account_activity_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let W3mAccountActivityWidget = class W3mAccountActivityWidget extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `<w3m-activity-list page="account"></w3m-activity-list>`;
    }
};
W3mAccountActivityWidget.styles = w3m_account_activity_widget_styles;
W3mAccountActivityWidget = w3m_account_activity_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-account-activity-widget')
], W3mAccountActivityWidget);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js + 1 modules
var composites_wui_tag = __webpack_require__(46514);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-description/styles.js

/* harmony default export */ const wui_list_description_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ spacing }) => spacing[4]};
    padding: ${({ spacing }) => spacing[4]};
    background-color: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-description/index.js
var wui_list_description_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let WuiListDescription = class WuiListDescription extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.icon = 'card';
        this.text = '';
        this.description = '';
        this.tag = undefined;
        this.disabled = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description
            ? (0,lit/* html */.qy) `<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`
            : null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag ? (0,lit/* html */.qy) `<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>` : null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `;
    }
};
WuiListDescription.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_list_description_styles];
wui_list_description_decorate([
    (0,decorators/* property */.MZ)()
], WuiListDescription.prototype, "icon", void 0);
wui_list_description_decorate([
    (0,decorators/* property */.MZ)()
], WuiListDescription.prototype, "text", void 0);
wui_list_description_decorate([
    (0,decorators/* property */.MZ)()
], WuiListDescription.prototype, "description", void 0);
wui_list_description_decorate([
    (0,decorators/* property */.MZ)()
], WuiListDescription.prototype, "tag", void 0);
wui_list_description_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListDescription.prototype, "disabled", void 0);
WuiListDescription = wui_list_description_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-list-description')
], WuiListDescription);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-description.js

//# sourceMappingURL=wui-list-description.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-token.js + 2 modules
var wui_list_token = __webpack_require__(414798);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-tokens-widget/styles.js

/* harmony default export */ const w3m_account_tokens_widget_styles = ((0,lit/* css */.AH) `
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-tokens-widget/index.js
var w3m_account_tokens_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mAccountTokensWidget = class W3mAccountTokensWidget extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.tokenBalance = ChainController/* ChainController */.W.getAccountData()?.tokenBalance;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                this.tokenBalance = val?.tokenBalance;
            }),
            OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => {
                this.remoteFeatures = val;
            })
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `${this.tokenTemplate()}`;
    }
    tokenTemplate() {
        if (this.tokenBalance && this.tokenBalance?.length > 0) {
            return (0,lit/* html */.qy) `<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`;
        }
        return (0,lit/* html */.qy) ` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`;
    }
    onRampTemplate() {
        if (this.remoteFeatures?.onramp) {
            return (0,lit/* html */.qy) `<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`;
        }
        return (0,lit/* html */.qy) ``;
    }
    tokenItemTemplate() {
        return this.tokenBalance?.map(token => (0,lit/* html */.qy) `<wui-list-token
          tokenName=${token.name}
          tokenImageUrl=${token.iconUrl}
          tokenAmount=${token.quantity.numeric}
          tokenValue=${token.value}
          tokenCurrency=${token.symbol}
        ></wui-list-token>`);
    }
    onReceiveClick() {
        RouterController/* RouterController */.I.push('WalletReceive');
    }
    onBuyClick() {
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_BUY_CRYPTO',
            properties: {
                isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                    W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
            }
        });
        RouterController/* RouterController */.I.push('OnRampProviders');
    }
};
W3mAccountTokensWidget.styles = w3m_account_tokens_widget_styles;
w3m_account_tokens_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountTokensWidget.prototype, "tokenBalance", void 0);
w3m_account_tokens_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountTokensWidget.prototype, "remoteFeatures", void 0);
W3mAccountTokensWidget = w3m_account_tokens_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-account-tokens-widget')
], W3mAccountTokensWidget);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip-trigger/index.js + 1 modules
var w3m_tooltip_trigger = __webpack_require__(570146);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/index.js + 1 modules
var w3m_tooltip = __webpack_require__(974625);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-wallet-features-widget/styles.js

/* harmony default export */ const w3m_account_wallet_features_widget_styles = ((0,esm_exports/* css */.AH) `
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({ spacing }) => spacing['4']});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({ spacing }) => spacing['4']};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius }) => borderRadius['3']};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-wallet-features-widget/index.js
var w3m_account_wallet_features_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let W3mAccountWalletFeaturesWidget = class W3mAccountWalletFeaturesWidget extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.unsubscribe = [];
        this.network = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.profileName = ChainController/* ChainController */.W.getAccountData()?.profileName;
        this.address = ChainController/* ChainController */.W.getAccountData()?.address;
        this.currentTab = ChainController/* ChainController */.W.getAccountData()?.currentTab;
        this.tokenBalance = ChainController/* ChainController */.W.getAccountData()?.tokenBalance;
        this.features = OptionsController/* OptionsController */.H.state.features;
        this.namespace = ChainController/* ChainController */.W.state.activeChain;
        this.activeConnectorIds = ConnectorController/* ConnectorController */.a.state.activeConnectorIds;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
    }
    firstUpdated() {
        ChainController/* ChainController */.W.fetchTokenBalance();
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                if (val?.address) {
                    this.address = val.address;
                    this.profileName = val.profileName;
                    this.currentTab = val.currentTab;
                    this.tokenBalance = val.tokenBalance;
                }
                else {
                    ModalController/* ModalController */.W.close();
                }
            })
        ], ConnectorController/* ConnectorController */.a.subscribeKey('activeConnectorIds', newActiveConnectorIds => {
            this.activeConnectorIds = newActiveConnectorIds;
        }), ChainController/* ChainController */.W.subscribeKey('activeChain', val => (this.namespace = val)), ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => (this.network = val)), OptionsController/* OptionsController */.H.subscribeKey('features', val => (this.features = val)), OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)));
        this.watchSwapValues();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        clearInterval(this.watchTokenBalance);
    }
    render() {
        if (!this.address) {
            throw new Error('w3m-account-features-widget: No account provided');
        }
        if (!this.namespace) {
            return null;
        }
        const connectorId = this.activeConnectorIds[this.namespace];
        const connector = connectorId ? ConnectorController/* ConnectorController */.a.getConnectorById(connectorId) : undefined;
        const { icon, iconSize } = this.getAuthData();
        return (0,lit/* html */.qy) `<wui-flex
      flexDirection="column"
      .padding=${['0', '3', '4', '3']}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${icon}
          iconSize=${iconSize}
          alt=${connector?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`;
    }
    orderedWalletFeatures() {
        const walletFeaturesOrder = this.features?.walletFeaturesOrder || utils_ConstantsUtil/* ConstantsUtil */.oU.DEFAULT_FEATURES.walletFeaturesOrder;
        const isAllDisabled = walletFeaturesOrder.every(feature => {
            if (feature === 'send' || feature === 'receive') {
                return !this.features?.[feature];
            }
            if (feature === 'swaps' || feature === 'onramp') {
                return !this.remoteFeatures?.[feature];
            }
            return true;
        });
        if (isAllDisabled) {
            return null;
        }
        const mergedFeaturesOrder = walletFeaturesOrder.map(feature => {
            if (feature === 'receive' || feature === 'onramp') {
                return 'fund';
            }
            return feature;
        });
        const deduplicatedFeaturesOrder = [...new Set(mergedFeaturesOrder)];
        return (0,lit/* html */.qy) `<wui-flex gap="2">
      ${deduplicatedFeaturesOrder.map(feature => {
            switch (feature) {
                case 'fund':
                    return this.fundWalletTemplate();
                case 'swaps':
                    return this.swapsTemplate();
                case 'send':
                    return this.sendTemplate();
                default:
                    return null;
            }
        })}
    </wui-flex>`;
    }
    fundWalletTemplate() {
        if (!this.namespace) {
            return null;
        }
        const isOnrampSupported = utils_ConstantsUtil/* ConstantsUtil */.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);
        const isReceiveEnabled = this.features?.receive;
        const isOnrampEnabled = this.remoteFeatures?.onramp && isOnrampSupported;
        const isPayWithExchangeEnabled = ExchangeController/* ExchangeController */.g.isPayWithExchangeEnabled();
        if (!isOnrampEnabled && !isReceiveEnabled && !isPayWithExchangeEnabled) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
    }
    swapsTemplate() {
        const isSwapsEnabled = this.remoteFeatures?.swaps;
        const isEvm = ChainController/* ChainController */.W.state.activeChain === ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM;
        if (!isSwapsEnabled || !isEvm) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
    }
    sendTemplate() {
        const isSendEnabled = this.features?.send;
        const activeNamespace = ChainController/* ChainController */.W.state.activeChain;
        const isSendSupported = utils_ConstantsUtil/* ConstantsUtil */.oU.SEND_SUPPORTED_NAMESPACES.includes(activeNamespace);
        if (!isSendEnabled || !isSendSupported) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
    }
    watchSwapValues() {
        this.watchTokenBalance = setInterval(() => ChainController/* ChainController */.W.fetchTokenBalance(error => this.onTokenBalanceError(error)), 10_000);
    }
    onTokenBalanceError(error) {
        if (error instanceof Error && error.cause instanceof Response) {
            const statusCode = error.cause.status;
            if (statusCode === ConstantsUtil/* ConstantsUtil */.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE) {
                clearInterval(this.watchTokenBalance);
            }
        }
    }
    listContentTemplate() {
        if (this.currentTab === 0) {
            return (0,lit/* html */.qy) `<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
        }
        if (this.currentTab === 1) {
            return (0,lit/* html */.qy) `<w3m-account-activity-widget></w3m-account-activity-widget>`;
        }
        return (0,lit/* html */.qy) `<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
    }
    tokenBalanceTemplate() {
        if (this.tokenBalance && this.tokenBalance?.length >= 0) {
            const value = CoreHelperUtil/* CoreHelperUtil */.w.calculateBalance(this.tokenBalance);
            const { dollars = '0', pennies = '00' } = CoreHelperUtil/* CoreHelperUtil */.w.formatTokenBalance(value);
            return (0,lit/* html */.qy) `<wui-balance dollars=${dollars} pennies=${pennies}></wui-balance>`;
        }
        return (0,lit/* html */.qy) `<wui-balance dollars="0" pennies="00"></wui-balance>`;
    }
    tabsTemplate() {
        const tabsByNamespace = HelpersUtil/* HelpersUtil */.y.getTabsByNamespace(ChainController/* ChainController */.W.state.activeChain);
        if (tabsByNamespace.length === 0) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${tabsByNamespace}
    ></wui-tabs>`;
    }
    onTabChange(index) {
        ChainController/* ChainController */.W.setAccountProp('currentTab', index, this.namespace);
    }
    onFundWalletClick() {
        RouterController/* RouterController */.I.push('FundWallet');
    }
    onSwapClick() {
        if (this.network?.caipNetworkId &&
            !utils_ConstantsUtil/* ConstantsUtil */.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)) {
            RouterController/* RouterController */.I.push('UnsupportedChain', {
                swapUnsupportedChain: true
            });
        }
        else {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'OPEN_SWAP',
                properties: {
                    network: this.network?.caipNetworkId || '',
                    isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                        W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                }
            });
            RouterController/* RouterController */.I.push('Swap');
        }
    }
    getAuthData() {
        const socialProvider = StorageUtil/* StorageUtil */.i.getConnectedSocialProvider();
        const socialUsername = StorageUtil/* StorageUtil */.i.getConnectedSocialUsername();
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        const email = authConnector?.provider.getEmail() ?? '';
        return {
            name: ConnectorUtil/* ConnectorUtil */.g.getAuthName({
                email,
                socialUsername,
                socialProvider
            }),
            icon: socialProvider ?? 'mail',
            iconSize: socialProvider ? 'xl' : 'md'
        };
    }
    onGoToProfileWalletsView() {
        RouterController/* RouterController */.I.push('ProfileWallets');
    }
    onSendClick() {
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'OPEN_SEND',
            properties: {
                network: this.network?.caipNetworkId || '',
                isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                    W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
            }
        });
        RouterController/* RouterController */.I.push('WalletSend');
    }
};
W3mAccountWalletFeaturesWidget.styles = w3m_account_wallet_features_widget_styles;
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "watchTokenBalance", void 0);
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "network", void 0);
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "profileName", void 0);
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "address", void 0);
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "currentTab", void 0);
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "tokenBalance", void 0);
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "features", void 0);
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "namespace", void 0);
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "activeConnectorIds", void 0);
w3m_account_wallet_features_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountWalletFeaturesWidget.prototype, "remoteFeatures", void 0);
W3mAccountWalletFeaturesWidget = w3m_account_wallet_features_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-account-wallet-features-widget')
], W3mAccountWalletFeaturesWidget);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-account-view/index.js
var w3m_account_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mAccountView = class W3mAccountView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.namespace = ChainController/* ChainController */.W.state.activeChain;
        this.unsubscribe.push(ChainController/* ChainController */.W.subscribeKey('activeChain', namespace => {
            this.namespace = namespace;
        }));
    }
    render() {
        if (!this.namespace) {
            return null;
        }
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(this.namespace);
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        return (0,lit/* html */.qy) `
      ${authConnector && connectorId === ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH
            ? this.walletFeaturesTemplate()
            : this.defaultTemplate()}
    `;
    }
    walletFeaturesTemplate() {
        return (0,lit/* html */.qy) `<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
    }
    defaultTemplate() {
        return (0,lit/* html */.qy) `<w3m-account-default-widget></w3m-account-default-widget>`;
    }
};
w3m_account_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAccountView.prototype, "namespace", void 0);
W3mAccountView = w3m_account_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-account-view')
], W3mAccountView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/lit/directives/class-map.js + 1 modules
var class_map = __webpack_require__(899605);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js
var ParseUtil = __webpack_require__(975910);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectionControllerUtil.js
var ConnectionControllerUtil = __webpack_require__(808577);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/index.js + 1 modules
var composites_wui_icon_link = __webpack_require__(869618);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-image/index.js + 1 modules
var wui_wallet_image = __webpack_require__(96771);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-active-profile-wallet-item/styles.js

/* harmony default export */ const wui_active_profile_wallet_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({ spacing }) => spacing['01']};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-active-profile-wallet-item/index.js
var wui_active_profile_wallet_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let WuiActiveProfileWalletItem = class WuiActiveProfileWalletItem extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.address = '';
        this.profileName = '';
        this.content = [];
        this.alt = '';
        this.imageSrc = '';
        this.icon = undefined;
        this.iconSize = 'md';
        this.iconBadge = undefined;
        this.iconBadgeSize = 'md';
        this.buttonVariant = 'neutral-primary';
        this.enableMoreButton = false;
        this.charsStart = 4;
        this.charsEnd = 6;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `;
    }
    topTemplate() {
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton
            ? (0,lit/* html */.qy) `<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`
            : null}
      </wui-flex>
    `;
    }
    bottomTemplate() {
        return (0,lit/* html */.qy) ` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `;
    }
    imageOrIconTemplate() {
        if (this.icon) {
            return (0,lit/* html */.qy) `
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge
                ? (0,lit/* html */.qy) `<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`
                : null}
          </wui-flex>
        </wui-flex>
      `;
        }
        return (0,lit/* html */.qy) `
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `;
    }
    contentTemplate() {
        if (this.content.length === 0) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(item => this.labelAndTagTemplate(item))}
      </wui-flex>
    `;
    }
    labelAndTagTemplate({ address, profileName, label, description, enableButton, buttonType, buttonLabel, buttonVariant, tagVariant, tagLabel, alignItems = 'flex-end' }) {
        return (0,lit/* html */.qy) `
      <wui-flex justifyContent="space-between" alignItems=${alignItems} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${label
            ? (0,lit/* html */.qy) `<wui-text variant="sm-medium" color="secondary">${label}</wui-text>`
            : null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${UiHelperUtil/* UiHelperUtil */.Z.getTruncateString({
            string: profileName || address,
            charsStart: profileName ? 16 : this.charsStart,
            charsEnd: profileName ? 0 : this.charsEnd,
            truncate: profileName ? 'end' : 'middle'
        })}
            </wui-text>

            ${tagVariant && tagLabel
            ? (0,lit/* html */.qy) `<wui-tag variant=${tagVariant} size="sm">${tagLabel}</wui-tag>`
            : null}
          </wui-flex>

          ${description
            ? (0,lit/* html */.qy) `<wui-text variant="sm-regular" color="secondary">${description}</wui-text>`
            : null}
        </wui-flex>

        ${enableButton ? this.buttonTemplate({ buttonType, buttonLabel, buttonVariant }) : null}
      </wui-flex>
    `;
    }
    buttonTemplate({ buttonType, buttonLabel, buttonVariant }) {
        return (0,lit/* html */.qy) `
      <wui-button
        size="sm"
        variant=${buttonVariant}
        @click=${buttonType === 'disconnect'
            ? this.dispatchDisconnectEvent.bind(this)
            : this.dispatchSwitchEvent.bind(this)}
        data-testid=${buttonType === 'disconnect'
            ? 'wui-active-profile-wallet-item-disconnect-button'
            : 'wui-active-profile-wallet-item-switch-button'}
      >
        ${buttonLabel}
      </wui-button>
    `;
    }
    dispatchDisconnectEvent() {
        this.dispatchEvent(new CustomEvent('disconnect', { bubbles: true, composed: true }));
    }
    dispatchSwitchEvent() {
        this.dispatchEvent(new CustomEvent('switch', { bubbles: true, composed: true }));
    }
    dispatchExternalLinkEvent() {
        this.dispatchEvent(new CustomEvent('externalLink', { bubbles: true, composed: true }));
    }
    dispatchMoreButtonEvent() {
        this.dispatchEvent(new CustomEvent('more', { bubbles: true, composed: true }));
    }
    dispatchCopyEvent() {
        this.dispatchEvent(new CustomEvent('copy', { bubbles: true, composed: true }));
    }
};
WuiActiveProfileWalletItem.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_active_profile_wallet_item_styles];
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiActiveProfileWalletItem.prototype, "address", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiActiveProfileWalletItem.prototype, "profileName", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], WuiActiveProfileWalletItem.prototype, "content", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiActiveProfileWalletItem.prototype, "alt", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiActiveProfileWalletItem.prototype, "imageSrc", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiActiveProfileWalletItem.prototype, "icon", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiActiveProfileWalletItem.prototype, "iconSize", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiActiveProfileWalletItem.prototype, "iconBadge", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiActiveProfileWalletItem.prototype, "iconBadgeSize", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiActiveProfileWalletItem.prototype, "buttonVariant", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiActiveProfileWalletItem.prototype, "enableMoreButton", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiActiveProfileWalletItem.prototype, "charsStart", void 0);
wui_active_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiActiveProfileWalletItem.prototype, "charsEnd", void 0);
WuiActiveProfileWalletItem = wui_active_profile_wallet_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-active-profile-wallet-item')
], WuiActiveProfileWalletItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-active-profile-wallet-item.js

//# sourceMappingURL=wui-active-profile-wallet-item.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var exports_wui_icon_box = __webpack_require__(804019);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-inactive-profile-wallet-item/styles.js

/* harmony default export */ const wui_inactive_profile_wallet_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({ spacing }) => spacing['01']};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-inactive-profile-wallet-item/index.js
var wui_inactive_profile_wallet_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let WuiInactiveProfileWalletItem = class WuiInactiveProfileWalletItem extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.address = '';
        this.profileName = '';
        this.alt = '';
        this.buttonLabel = '';
        this.buttonVariant = 'accent-primary';
        this.imageSrc = '';
        this.icon = undefined;
        this.iconSize = 'md';
        this.iconBadgeSize = 'md';
        this.rightIcon = 'signOut';
        this.rightIconSize = 'md';
        this.loading = false;
        this.charsStart = 4;
        this.charsEnd = 6;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `;
    }
    imageOrIconTemplate() {
        if (this.icon) {
            return (0,lit/* html */.qy) `
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge
                ? (0,lit/* html */.qy) `<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`
                : null}
          </wui-flex>
        </wui-flex>
      `;
        }
        return (0,lit/* html */.qy) `<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`;
    }
    labelAndDescriptionTemplate() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${UiHelperUtil/* UiHelperUtil */.Z.getTruncateString({
            string: this.profileName || this.address,
            charsStart: this.profileName ? 16 : this.charsStart,
            charsEnd: this.profileName ? 0 : this.charsEnd,
            truncate: this.profileName ? 'end' : 'middle'
        })}
        </wui-text>
      </wui-flex>
    `;
    }
    buttonActionTemplate() {
        return (0,lit/* html */.qy) `
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${(0,if_defined/* ifDefined */.J)(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `;
    }
    handleButtonClick() {
        this.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true, composed: true }));
    }
    handleIconClick() {
        this.dispatchEvent(new CustomEvent('iconClick', { bubbles: true, composed: true }));
    }
};
WuiInactiveProfileWalletItem.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_inactive_profile_wallet_item_styles];
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "address", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "profileName", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "alt", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "buttonLabel", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "buttonVariant", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "imageSrc", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "icon", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "iconSize", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "iconBadge", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "iconBadgeSize", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "rightIcon", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiInactiveProfileWalletItem.prototype, "rightIconSize", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiInactiveProfileWalletItem.prototype, "loading", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiInactiveProfileWalletItem.prototype, "charsStart", void 0);
wui_inactive_profile_wallet_item_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiInactiveProfileWalletItem.prototype, "charsEnd", void 0);
WuiInactiveProfileWalletItem = wui_inactive_profile_wallet_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-inactive-profile-wallet-item')
], WuiInactiveProfileWalletItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-inactive-profile-wallet-item.js

//# sourceMappingURL=wui-inactive-profile-wallet-item.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js + 2 modules
var wui_separator = __webpack_require__(802759);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js
var src_HelpersUtil = __webpack_require__(335306);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectionUtil.js


const ConnectionUtil = {
    getAuthData(connection) {
        const isAuth = connection.connectorId === ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH;
        if (!isAuth) {
            return { isAuth: false, icon: undefined, iconSize: undefined, name: undefined };
        }
        const socialProvider = (connection?.auth?.name ??
            StorageUtil/* StorageUtil */.i.getConnectedSocialProvider());
        const socialUsername = (connection?.auth?.username ??
            StorageUtil/* StorageUtil */.i.getConnectedSocialUsername());
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        const email = authConnector?.provider.getEmail() ?? '';
        return {
            isAuth: true,
            icon: socialProvider ?? 'mail',
            iconSize: socialProvider ? 'xl' : 'md',
            name: isAuth
                ? ConnectorUtil/* ConnectorUtil */.g.getAuthName({ email, socialUsername, socialProvider })
                : undefined
        };
    }
};
//# sourceMappingURL=ConnectionUtil.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-profile-wallets-view/styles.js

/* harmony default export */ const w3m_profile_wallets_view_styles = ((0,esm_exports/* css */.AH) `
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ easings }) => easings['ease-out-power-1']}
      ${({ durations }) => durations['md']};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius['4']};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({ spacing }) => spacing['4']};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius['4']};
  }

  wui-separator {
    margin: ${({ spacing }) => spacing['2']} 0 ${({ spacing }) => spacing['2']} 0;
  }

  .active-connection {
    padding: ${({ spacing }) => spacing['2']};
  }

  .recent-connection {
    padding: ${({ spacing }) => spacing['2']} 0 ${({ spacing }) => spacing['2']} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-profile-wallets-view/index.js
var w3m_profile_wallets_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















const UI_CONFIG = {
    ADDRESS_DISPLAY: { START: 4, END: 6 },
    BADGE: { SIZE: 'md', ICON: 'lightbulb' },
    SCROLL_THRESHOLD: 50,
    OPACITY_RANGE: [0, 1]
};
const NAMESPACE_ICONS = {
    eip155: 'ethereum',
    solana: 'solana',
    bip122: 'bitcoin',
    ton: 'ton',
    tron: 'tron'
};
const NAMESPACE_TABS = [
    { namespace: 'eip155', icon: NAMESPACE_ICONS.eip155, label: 'EVM' },
    { namespace: 'solana', icon: NAMESPACE_ICONS.solana, label: 'Solana' },
    { namespace: 'bip122', icon: NAMESPACE_ICONS.bip122, label: 'Bitcoin' },
    { namespace: 'ton', icon: NAMESPACE_ICONS.ton, label: 'Ton' },
    { namespace: 'tron', icon: NAMESPACE_ICONS.tron, label: 'Tron' }
];
const CHAIN_LABELS = {
    eip155: { title: 'Add EVM Wallet', description: 'Add your first EVM wallet' },
    solana: { title: 'Add Solana Wallet', description: 'Add your first Solana wallet' },
    bip122: { title: 'Add Bitcoin Wallet', description: 'Add your first Bitcoin wallet' },
    ton: { title: 'Add TON Wallet', description: 'Add your first TON wallet' },
    tron: { title: 'Add TRON Wallet', description: 'Add your first TRON wallet' }
};
let W3mProfileWalletsView = class W3mProfileWalletsView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribers = [];
        this.currentTab = 0;
        this.namespace = ChainController/* ChainController */.W.state.activeChain;
        this.namespaces = Array.from(ChainController/* ChainController */.W.state.chains.keys());
        this.caipAddress = undefined;
        this.profileName = undefined;
        this.activeConnectorIds = ConnectorController/* ConnectorController */.a.state.activeConnectorIds;
        this.lastSelectedAddress = '';
        this.lastSelectedConnectorId = '';
        this.isSwitching = false;
        this.caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.user = ChainController/* ChainController */.W.getAccountData()?.user;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.currentTab = this.namespace ? this.namespaces.indexOf(this.namespace) : 0;
        this.caipAddress = ChainController/* ChainController */.W.getAccountData(this.namespace)?.caipAddress;
        this.profileName = ChainController/* ChainController */.W.getAccountData(this.namespace)?.profileName;
        this.unsubscribers.push(...[
            ConnectionController/* ConnectionController */.x.subscribeKey('connections', () => this.onConnectionsChange()),
            ConnectionController/* ConnectionController */.x.subscribeKey('recentConnections', () => this.requestUpdate()),
            ConnectorController/* ConnectorController */.a.subscribeKey('activeConnectorIds', ids => {
                this.activeConnectorIds = ids;
            }),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => (this.caipNetwork = val)),
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                this.user = val?.user;
            }),
            OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val))
        ]);
        this.chainListener = ChainController/* ChainController */.W.subscribeChainProp('accountState', accountState => {
            this.caipAddress = accountState?.caipAddress;
            this.profileName = accountState?.profileName;
        }, this.namespace);
    }
    disconnectedCallback() {
        this.unsubscribers.forEach(unsubscribe => unsubscribe());
        this.resizeObserver?.disconnect();
        this.removeScrollListener();
        this.chainListener?.();
    }
    firstUpdated() {
        const walletListEl = this.shadowRoot?.querySelector('.wallet-list');
        if (!walletListEl) {
            return;
        }
        const handleScroll = () => this.updateScrollOpacity(walletListEl);
        requestAnimationFrame(handleScroll);
        walletListEl.addEventListener('scroll', handleScroll);
        this.resizeObserver = new ResizeObserver(handleScroll);
        this.resizeObserver.observe(walletListEl);
        handleScroll();
    }
    render() {
        const namespace = this.namespace;
        if (!namespace) {
            throw new Error('Namespace is not set');
        }
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['0', '4', '4', '4']} gap="4">
        ${this.renderTabs()} ${this.renderHeader(namespace)} ${this.renderConnections(namespace)}
        ${this.renderAddConnectionButton(namespace)}
      </wui-flex>
    `;
    }
    renderTabs() {
        const availableTabs = this.namespaces
            .map(namespace => NAMESPACE_TABS.find(tab => tab.namespace === namespace))
            .filter(Boolean);
        const tabCount = availableTabs.length;
        if (tabCount > 1) {
            return (0,lit/* html */.qy) `
        <wui-tabs
          .onTabChange=${(index) => this.handleTabChange(index)}
          .activeTab=${this.currentTab}
          .tabs=${availableTabs}
        ></wui-tabs>
      `;
        }
        return null;
    }
    renderHeader(namespace) {
        const connections = this.getActiveConnections(namespace);
        const totalConnections = connections.flatMap(({ accounts }) => accounts).length + (this.caipAddress ? 1 : 0);
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${NAMESPACE_ICONS[namespace] ??
            NAMESPACE_ICONS.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${totalConnections > 1 ? 'Wallets' : 'Wallet'}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${totalConnections}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${() => ConnectionController/* ConnectionController */.x.disconnect({ namespace })}
          ?disabled=${!this.hasAnyConnections(namespace)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `;
    }
    renderConnections(namespace) {
        const hasConnections = this.hasAnyConnections(namespace);
        const classes = {
            'wallet-list': true,
            'active-wallets-box': hasConnections,
            'empty-wallet-list-box': !hasConnections
        };
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" class=${(0,class_map/* classMap */.H)(classes)} rowgap="3">
        ${hasConnections
            ? this.renderActiveConnections(namespace)
            : this.renderEmptyState(namespace)}
      </wui-flex>
    `;
    }
    renderActiveConnections(namespace) {
        const connections = this.getActiveConnections(namespace);
        const connectorId = this.activeConnectorIds[namespace];
        const plainAddress = this.getPlainAddress();
        return (0,lit/* html */.qy) `
      ${plainAddress || connectorId || connections.length > 0
            ? (0,lit/* html */.qy) `<wui-flex
            flexDirection="column"
            .padding=${['4', '0', '4', '0']}
            class="active-wallets"
          >
            ${this.renderActiveProfile(namespace)} ${this.renderActiveConnectionsList(namespace)}
          </wui-flex>`
            : null}
      ${this.renderRecentConnections(namespace)}
    `;
    }
    renderActiveProfile(namespace) {
        const connectorId = this.activeConnectorIds[namespace];
        if (!connectorId) {
            return null;
        }
        const { connections } = ConnectionControllerUtil/* ConnectionControllerUtil */.b.getConnectionsData(namespace);
        const connector = ConnectorController/* ConnectorController */.a.getConnectorById(connectorId);
        const connectorImage = AssetUtil/* AssetUtil */.$.getConnectorImage(connector);
        const plainAddress = this.getPlainAddress();
        if (!plainAddress) {
            return null;
        }
        const isBitcoin = namespace === ConstantsUtil/* ConstantsUtil */.o.CHAIN.BITCOIN;
        const authData = ConnectionUtil.getAuthData({ connectorId, accounts: [] });
        const shouldShowSeparator = this.getActiveConnections(namespace).flatMap(connection => connection.accounts).length > 0;
        const connection = connections.find(c => c.connectorId === connectorId);
        const account = connection?.accounts.filter(a => !src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(a.address, plainAddress));
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['0', '4', '0', '4']}>
        <wui-active-profile-wallet-item
          address=${plainAddress}
          alt=${connector?.name}
          .content=${this.getProfileContent({
            address: plainAddress,
            connections,
            connectorId,
            namespace
        })}
          .charsStart=${UI_CONFIG.ADDRESS_DISPLAY.START}
          .charsEnd=${UI_CONFIG.ADDRESS_DISPLAY.END}
          .icon=${authData.icon}
          .iconSize=${authData.iconSize}
          .iconBadge=${this.isSmartAccount(plainAddress) ? UI_CONFIG.BADGE.ICON : undefined}
          .iconBadgeSize=${this.isSmartAccount(plainAddress) ? UI_CONFIG.BADGE.SIZE : undefined}
          imageSrc=${connectorImage}
          ?enableMoreButton=${authData.isAuth}
          @copy=${() => this.handleCopyAddress(plainAddress)}
          @disconnect=${() => this.handleDisconnect(namespace, connectorId)}
          @switch=${() => {
            if (isBitcoin && connection && account?.[0]) {
                this.handleSwitchWallet(connection, account[0].address, namespace);
            }
        }}
          @externalLink=${() => this.handleExternalLink(plainAddress)}
          @more=${() => this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${shouldShowSeparator ? (0,lit/* html */.qy) `<wui-separator></wui-separator>` : null}
      </wui-flex>
    `;
    }
    renderActiveConnectionsList(namespace) {
        const connections = this.getActiveConnections(namespace);
        if (connections.length === 0) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['0', '2', '0', '2']}>
        ${this.renderConnectionList(connections, false, namespace)}
      </wui-flex>
    `;
    }
    renderRecentConnections(namespace) {
        const { recentConnections } = ConnectionControllerUtil/* ConnectionControllerUtil */.b.getConnectionsData(namespace);
        const allAccounts = recentConnections.flatMap(connection => connection.accounts);
        if (allAccounts.length === 0) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['0', '2', '0', '2']} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${['0', '2', '0', '2']}>
          ${this.renderConnectionList(recentConnections, true, namespace)}
        </wui-flex>
      </wui-flex>
    `;
    }
    renderConnectionList(connections, isRecentConnections, namespace) {
        return connections
            .filter(connection => connection.accounts.length > 0)
            .map((connection, connectionIdx) => {
            const connector = ConnectorController/* ConnectorController */.a.getConnectorById(connection.connectorId);
            const connectorImage = AssetUtil/* AssetUtil */.$.getConnectorImage(connector) ?? '';
            const authData = ConnectionUtil.getAuthData(connection);
            return connection.accounts.map((account, accountIdx) => {
                const shouldShowSeparator = connectionIdx !== 0 || accountIdx !== 0;
                const isLoading = this.isAccountLoading(connection.connectorId, account.address);
                return (0,lit/* html */.qy) `
            <wui-flex flexDirection="column">
              ${shouldShowSeparator ? (0,lit/* html */.qy) `<wui-separator></wui-separator>` : null}
              <wui-inactive-profile-wallet-item
                address=${account.address}
                alt=${connection.connectorId}
                buttonLabel=${isRecentConnections ? 'Connect' : 'Switch'}
                buttonVariant=${isRecentConnections ? 'neutral-secondary' : 'accent-secondary'}
                rightIcon=${isRecentConnections ? 'bin' : 'power'}
                rightIconSize="sm"
                class=${isRecentConnections ? 'recent-connection' : 'active-connection'}
                data-testid=${isRecentConnections ? 'recent-connection' : 'active-connection'}
                imageSrc=${connectorImage}
                .iconBadge=${this.isSmartAccount(account.address)
                    ? UI_CONFIG.BADGE.ICON
                    : undefined}
                .iconBadgeSize=${this.isSmartAccount(account.address)
                    ? UI_CONFIG.BADGE.SIZE
                    : undefined}
                .icon=${authData.icon}
                .iconSize=${authData.iconSize}
                .loading=${isLoading}
                .showBalance=${false}
                .charsStart=${UI_CONFIG.ADDRESS_DISPLAY.START}
                .charsEnd=${UI_CONFIG.ADDRESS_DISPLAY.END}
                @buttonClick=${() => this.handleSwitchWallet(connection, account.address, namespace)}
                @iconClick=${() => this.handleWalletAction({
                    connection,
                    address: account.address,
                    isRecentConnection: isRecentConnections,
                    namespace
                })}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `;
            });
        });
    }
    renderAddConnectionButton(namespace) {
        if (!this.isMultiWalletEnabled() && this.caipAddress) {
            return null;
        }
        if (!this.hasAnyConnections(namespace)) {
            return null;
        }
        const { title } = this.getChainLabelInfo(namespace);
        return (0,lit/* html */.qy) `
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${true}
        @click=${() => this.handleAddConnection(namespace)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${title}</wui-text>
      </wui-list-item>
    `;
    }
    renderEmptyState(namespace) {
        const { title, description } = this.getChainLabelInfo(namespace);
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${description}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${() => this.handleAddConnection(namespace)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${title}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
    }
    handleTabChange(index) {
        const nextNamespace = this.namespaces[index];
        if (nextNamespace) {
            this.chainListener?.();
            this.currentTab = this.namespaces.indexOf(nextNamespace);
            this.namespace = nextNamespace;
            this.caipAddress = ChainController/* ChainController */.W.getAccountData(nextNamespace)?.caipAddress;
            this.profileName = ChainController/* ChainController */.W.getAccountData(nextNamespace)?.profileName;
            this.chainListener = ChainController/* ChainController */.W.subscribeChainProp('accountState', accountState => {
                this.caipAddress = accountState?.caipAddress;
            }, nextNamespace);
        }
    }
    async handleSwitchWallet(connection, address, namespace) {
        try {
            this.isSwitching = true;
            this.lastSelectedConnectorId = connection.connectorId;
            this.lastSelectedAddress = address;
            const isDifferentNamespace = this.caipNetwork?.chainNamespace !== namespace;
            if (isDifferentNamespace && connection?.caipNetwork) {
                ConnectorController/* ConnectorController */.a.setFilterByNamespace(namespace);
                await ChainController/* ChainController */.W.switchActiveNetwork(connection?.caipNetwork);
            }
            await ConnectionController/* ConnectionController */.x.switchConnection({
                connection,
                address,
                namespace,
                closeModalOnConnect: false,
                onChange({ hasSwitchedAccount, hasSwitchedWallet }) {
                    if (hasSwitchedWallet) {
                        SnackController/* SnackController */.P.showSuccess('Wallet switched');
                    }
                    else if (hasSwitchedAccount) {
                        SnackController/* SnackController */.P.showSuccess('Account switched');
                    }
                }
            });
        }
        catch (error) {
            SnackController/* SnackController */.P.showError('Failed to switch wallet');
        }
        finally {
            this.isSwitching = false;
        }
    }
    handleWalletAction(params) {
        const { connection, address, isRecentConnection, namespace } = params;
        if (isRecentConnection) {
            StorageUtil/* StorageUtil */.i.deleteAddressFromConnection({
                connectorId: connection.connectorId,
                address,
                namespace
            });
            ConnectionController/* ConnectionController */.x.syncStorageConnections();
            SnackController/* SnackController */.P.showSuccess('Wallet deleted');
        }
        else {
            this.handleDisconnect(namespace, connection.connectorId);
        }
    }
    async handleDisconnect(namespace, id) {
        try {
            await ConnectionController/* ConnectionController */.x.disconnect({ id, namespace });
            SnackController/* SnackController */.P.showSuccess('Wallet disconnected');
        }
        catch {
            SnackController/* SnackController */.P.showError('Failed to disconnect wallet');
        }
    }
    handleCopyAddress(address) {
        CoreHelperUtil/* CoreHelperUtil */.w.copyToClopboard(address);
        SnackController/* SnackController */.P.showSuccess('Address copied');
    }
    handleMore() {
        RouterController/* RouterController */.I.push('AccountSettings');
    }
    handleExternalLink(address) {
        const explorerUrl = this.caipNetwork?.blockExplorers?.default.url;
        if (explorerUrl) {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(`${explorerUrl}/address/${address}`, '_blank');
        }
    }
    handleAddConnection(namespace) {
        ConnectorController/* ConnectorController */.a.setFilterByNamespace(namespace);
        RouterController/* RouterController */.I.push('Connect', {
            addWalletForNamespace: namespace
        });
    }
    getChainLabelInfo(namespace) {
        return (CHAIN_LABELS[namespace] ?? {
            title: 'Add Wallet',
            description: 'Add your first wallet'
        });
    }
    isSmartAccount(address) {
        if (!this.namespace) {
            return false;
        }
        const smartAccount = this.user?.accounts?.find(account => account.type === 'smartAccount');
        if (smartAccount && address) {
            return src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(smartAccount.address, address);
        }
        return false;
    }
    getPlainAddress() {
        return this.caipAddress ? CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(this.caipAddress) : undefined;
    }
    getActiveConnections(namespace) {
        const connectorId = this.activeConnectorIds[namespace];
        const { connections } = ConnectionControllerUtil/* ConnectionControllerUtil */.b.getConnectionsData(namespace);
        const [connectedConnection] = connections.filter(connection => src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(connection.connectorId, connectorId));
        if (!connectorId) {
            return connections;
        }
        const isBitcoin = namespace === ConstantsUtil/* ConstantsUtil */.o.CHAIN.BITCOIN;
        const { address } = this.caipAddress ? ParseUtil/* ParseUtil */.C.parseCaipAddress(this.caipAddress) : {};
        let addresses = [...(address ? [address] : [])];
        if (isBitcoin && connectedConnection) {
            addresses = connectedConnection.accounts.map(account => account.address) || [];
        }
        return ConnectionControllerUtil/* ConnectionControllerUtil */.b.excludeConnectorAddressFromConnections({
            connectorId,
            addresses,
            connections
        });
    }
    hasAnyConnections(namespace) {
        const connections = this.getActiveConnections(namespace);
        const { recentConnections } = ConnectionControllerUtil/* ConnectionControllerUtil */.b.getConnectionsData(namespace);
        return Boolean(this.caipAddress) || connections.length > 0 || recentConnections.length > 0;
    }
    isAccountLoading(connectorId, address) {
        return (src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(this.lastSelectedConnectorId, connectorId) &&
            src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(this.lastSelectedAddress, address) &&
            this.isSwitching);
    }
    getProfileContent(params) {
        const { address, connections, connectorId, namespace } = params;
        const [connectedConnection] = connections.filter(connection => src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(connection.connectorId, connectorId));
        if (namespace === ConstantsUtil/* ConstantsUtil */.o.CHAIN.BITCOIN &&
            connectedConnection?.accounts.every(account => typeof account.type === 'string')) {
            return this.getBitcoinProfileContent(connectedConnection.accounts, address);
        }
        const authData = ConnectionUtil.getAuthData({ connectorId, accounts: [] });
        return [
            {
                address,
                tagLabel: 'Active',
                tagVariant: 'success',
                enableButton: true,
                profileName: this.profileName,
                buttonType: 'disconnect',
                buttonLabel: 'Disconnect',
                buttonVariant: 'neutral-secondary',
                ...(authData.isAuth
                    ? { description: this.isSmartAccount(address) ? 'Smart Account' : 'EOA Account' }
                    : {})
            }
        ];
    }
    getBitcoinProfileContent(accounts, address) {
        const hasMultipleAccounts = accounts.length > 1;
        const plainAddress = this.getPlainAddress();
        return accounts.map(account => {
            const isConnected = src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(account.address, plainAddress);
            let label = 'PAYMENT';
            if (account.type === 'ordinal') {
                label = 'ORDINALS';
            }
            return {
                address: account.address,
                tagLabel: src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(account.address, address) ? 'Active' : undefined,
                tagVariant: src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(account.address, address) ? 'success' : undefined,
                enableButton: true,
                ...(hasMultipleAccounts
                    ? {
                        label,
                        alignItems: 'flex-end',
                        buttonType: isConnected ? 'disconnect' : 'switch',
                        buttonLabel: isConnected ? 'Disconnect' : 'Switch',
                        buttonVariant: isConnected ? 'neutral-secondary' : 'accent-secondary'
                    }
                    : {
                        alignItems: 'center',
                        buttonType: 'disconnect',
                        buttonLabel: 'Disconnect',
                        buttonVariant: 'neutral-secondary'
                    })
            };
        });
    }
    removeScrollListener() {
        const connectEl = this.shadowRoot?.querySelector('.wallet-list');
        if (connectEl) {
            connectEl.removeEventListener('scroll', () => this.handleConnectListScroll());
        }
    }
    handleConnectListScroll() {
        const walletListEl = this.shadowRoot?.querySelector('.wallet-list');
        if (walletListEl) {
            this.updateScrollOpacity(walletListEl);
        }
    }
    isMultiWalletEnabled() {
        return Boolean(this.remoteFeatures?.multiWallet);
    }
    updateScrollOpacity(element) {
        element.style.setProperty('--connect-scroll--top-opacity', esm_exports/* MathUtil */.z8.interpolate([0, UI_CONFIG.SCROLL_THRESHOLD], UI_CONFIG.OPACITY_RANGE, element.scrollTop).toString());
        element.style.setProperty('--connect-scroll--bottom-opacity', esm_exports/* MathUtil */.z8.interpolate([0, UI_CONFIG.SCROLL_THRESHOLD], UI_CONFIG.OPACITY_RANGE, element.scrollHeight - element.scrollTop - element.offsetHeight).toString());
    }
    onConnectionsChange() {
        if (this.isMultiWalletEnabled()) {
            if (this.namespace) {
                const { connections } = ConnectionControllerUtil/* ConnectionControllerUtil */.b.getConnectionsData(this.namespace);
                if (connections.length === 0) {
                    RouterController/* RouterController */.I.reset('ProfileWallets');
                }
            }
        }
        this.requestUpdate();
    }
};
W3mProfileWalletsView.styles = w3m_profile_wallets_view_styles;
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "currentTab", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "namespace", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "namespaces", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "caipAddress", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "profileName", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "activeConnectorIds", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "lastSelectedAddress", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "lastSelectedConnectorId", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "isSwitching", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "caipNetwork", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "user", void 0);
w3m_profile_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mProfileWalletsView.prototype, "remoteFeatures", void 0);
W3mProfileWalletsView = w3m_profile_wallets_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-profile-wallets-view')
], W3mProfileWalletsView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-fund-wallet-view/index.js
var w3m_fund_wallet_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mFundWalletView = class W3mFundWalletView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.activeCaipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.features = OptionsController/* OptionsController */.H.state.features;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.exchangesLoading = ExchangeController/* ExchangeController */.g.state.isLoading;
        this.exchanges = ExchangeController/* ExchangeController */.g.state.exchanges;
        this.unsubscribe.push(...[
            OptionsController/* OptionsController */.H.subscribeKey('features', val => (this.features = val)),
            OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => {
                this.activeCaipNetwork = val;
                this.setDefaultPaymentAsset();
            }),
            ExchangeController/* ExchangeController */.g.subscribeKey('isLoading', val => (this.exchangesLoading = val)),
            ExchangeController/* ExchangeController */.g.subscribeKey('exchanges', val => (this.exchanges = val))
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    async firstUpdated() {
        const isPayWithExchangeSupported = ExchangeController/* ExchangeController */.g.isPayWithExchangeSupported();
        if (isPayWithExchangeSupported) {
            await this.setDefaultPaymentAsset();
            await ExchangeController/* ExchangeController */.g.fetchExchanges();
        }
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['1', '3', '3', '3']} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `;
    }
    async setDefaultPaymentAsset() {
        if (!this.activeCaipNetwork) {
            return;
        }
        const assets = await ExchangeController/* ExchangeController */.g.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId);
        const usdc = assets.find(asset => asset.metadata.symbol === 'USDC') || assets[0];
        if (usdc) {
            ExchangeController/* ExchangeController */.g.setPaymentAsset(usdc);
        }
    }
    onrampTemplate() {
        if (!this.activeCaipNetwork) {
            return null;
        }
        const isOnrampEnabled = this.remoteFeatures?.onramp;
        const hasNetworkSupport = utils_ConstantsUtil/* ConstantsUtil */.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);
        if (!isOnrampEnabled || !hasNetworkSupport) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `;
    }
    depositFromExchangeTemplate() {
        if (!this.activeCaipNetwork) {
            return null;
        }
        const isPayWithExchangeSupported = ExchangeController/* ExchangeController */.g.isPayWithExchangeSupported();
        if (!isPayWithExchangeSupported) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading || !this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `;
    }
    receiveTemplate() {
        const isReceiveEnabled = Boolean(this.features?.receive);
        if (!isReceiveEnabled) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `;
    }
    onBuyCrypto() {
        RouterController/* RouterController */.I.push('OnRampProviders');
    }
    onReceive() {
        RouterController/* RouterController */.I.push('WalletReceive');
    }
    onDepositFromExchange() {
        ExchangeController/* ExchangeController */.g.reset();
        RouterController/* RouterController */.I.push('PayWithExchange', {
            redirectView: RouterController/* RouterController */.I.state.data?.redirectView
        });
    }
};
w3m_fund_wallet_view_decorate([
    (0,decorators/* state */.wk)()
], W3mFundWalletView.prototype, "activeCaipNetwork", void 0);
w3m_fund_wallet_view_decorate([
    (0,decorators/* state */.wk)()
], W3mFundWalletView.prototype, "features", void 0);
w3m_fund_wallet_view_decorate([
    (0,decorators/* state */.wk)()
], W3mFundWalletView.prototype, "remoteFeatures", void 0);
w3m_fund_wallet_view_decorate([
    (0,decorators/* state */.wk)()
], W3mFundWalletView.prototype, "exchangesLoading", void 0);
w3m_fund_wallet_view_decorate([
    (0,decorators/* state */.wk)()
], W3mFundWalletView.prototype, "exchanges", void 0);
W3mFundWalletView = w3m_fund_wallet_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-fund-wallet-view')
], W3mFundWalletView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/lit/directives/ref.js + 3 modules
var ref = __webpack_require__(791629);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-toggle/styles.js

/* harmony default export */ const wui_toggle_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      color ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      border ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      box-shadow ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      width ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      height ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      transform ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      opacity ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ colors }) => colors.neutrals300};
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      color ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      border ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      box-shadow ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      width ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      height ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      transform ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      opacity ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({ colors }) => colors.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({ tokens }) => tokens.core.iconAccentPrimary};
    background-color: ${({ tokens }) => tokens.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({ tokens }) => tokens.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({ tokens }) => tokens.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({ colors }) => colors.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({ colors }) => colors.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({ colors }) => colors.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({ colors }) => colors.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({ colors }) => colors.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({ tokens }) => tokens.theme.textTertiary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-toggle/index.js
var wui_toggle_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiToggle = class WuiToggle extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.inputElementRef = (0,ref/* createRef */._)();
        this.checked = false;
        this.disabled = false;
        this.size = 'md';
    }
    render() {
        return (0,lit/* html */.qy) `
      <label data-size=${this.size}>
        <input
          ${(0,ref/* ref */.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
    }
    dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent('switchChange', {
            detail: this.inputElementRef.value?.checked,
            bubbles: true,
            composed: true
        }));
    }
};
WuiToggle.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_toggle_styles];
wui_toggle_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiToggle.prototype, "checked", void 0);
wui_toggle_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiToggle.prototype, "disabled", void 0);
wui_toggle_decorate([
    (0,decorators/* property */.MZ)()
], WuiToggle.prototype, "size", void 0);
WuiToggle = wui_toggle_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-toggle')
], WuiToggle);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/styles.js

/* harmony default export */ const wui_certified_switch_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ spacing }) => spacing['2']};
    padding: ${({ spacing }) => spacing['2']} ${({ spacing }) => spacing['3']};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius['4']};
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/index.js
var wui_certified_switch_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiCertifiedSwitch = class WuiCertifiedSwitch extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.checked = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `;
    }
    handleToggleChange(event) {
        event.stopPropagation();
        this.checked = event.detail;
        this.dispatchSwitchEvent();
    }
    dispatchSwitchEvent() {
        this.dispatchEvent(new CustomEvent('certifiedSwitchChange', {
            detail: this.checked,
            bubbles: true,
            composed: true
        }));
    }
};
WuiCertifiedSwitch.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_certified_switch_styles];
wui_certified_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiCertifiedSwitch.prototype, "checked", void 0);
WuiCertifiedSwitch = wui_certified_switch_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-certified-switch')
], WuiCertifiedSwitch);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-certified-switch.js

//# sourceMappingURL=wui-certified-switch.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/index.js + 1 modules
var wui_input_text = __webpack_require__(565760);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/styles.js

/* harmony default export */ const wui_search_bar_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing }) => spacing[3]};
    color: ${({ tokens }) => tokens.theme.iconDefault};
    cursor: pointer;
    padding: ${({ spacing }) => spacing[2]};
    background-color: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/index.js
var wui_search_bar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiSearchBar = class WuiSearchBar extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.inputComponentRef = (0,ref/* createRef */._)();
        this.inputValue = '';
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-input-text
        ${(0,ref/* ref */.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue
            ? (0,lit/* html */.qy) `<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`
            : null}
      </wui-input-text>
    `;
    }
    onInputChange(event) {
        this.inputValue = event.detail || '';
    }
    clearValue() {
        const component = this.inputComponentRef.value;
        const inputElement = component?.inputElementRef.value;
        if (inputElement) {
            inputElement.value = '';
            this.inputValue = '';
            inputElement.focus();
            inputElement.dispatchEvent(new Event('input'));
        }
    }
};
WuiSearchBar.styles = [ThemeUtil/* resetStyles */.W5, wui_search_bar_styles];
wui_search_bar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSearchBar.prototype, "inputValue", void 0);
WuiSearchBar = wui_search_bar_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-search-bar')
], WuiSearchBar);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-search-bar.js

//# sourceMappingURL=wui-search-bar.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var ApiController = __webpack_require__(188249);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/WalletUtil.js
var WalletUtil = __webpack_require__(165400);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkMd.js
var networkMd = __webpack_require__(752267);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/index.js + 1 modules
var wui_shimmer = __webpack_require__(797607);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/styles.js

/* harmony default export */ const wui_card_select_loader_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({ spacing }) => spacing[2]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({ tokens }) => tokens.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/index.js
var wui_card_select_loader_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiCardSelectLoader = class WuiCardSelectLoader extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.type = 'wallet';
    }
    render() {
        return (0,lit/* html */.qy) `
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `;
    }
    shimmerTemplate() {
        if (this.type === 'network') {
            return (0,lit/* html */.qy) ` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${networkMd/* networkSvgMd */.a}`;
        }
        return (0,lit/* html */.qy) `<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
    }
};
WuiCardSelectLoader.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_card_select_loader_styles];
wui_card_select_loader_decorate([
    (0,decorators/* property */.MZ)()
], WuiCardSelectLoader.prototype, "type", void 0);
WuiCardSelectLoader = wui_card_select_loader_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-card-select-loader')
], WuiCardSelectLoader);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-card-select-loader.js

//# sourceMappingURL=wui-card-select-loader.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/styles.js

/* harmony default export */ const wui_grid_styles = ((0,lit/* css */.AH) `
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/index.js
var wui_grid_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiGrid = class WuiGrid extends lit/* LitElement */.WF {
    render() {
        this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
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
    `;
        return (0,lit/* html */.qy) `<slot></slot>`;
    }
};
WuiGrid.styles = [ThemeUtil/* resetStyles */.W5, wui_grid_styles];
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "gridTemplateRows", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "gridTemplateColumns", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "justifyItems", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "alignItems", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "justifyContent", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "alignContent", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "columnGap", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "rowGap", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "gap", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "padding", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "margin", void 0);
WuiGrid = wui_grid_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-grid')
], WuiGrid);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-grid.js

//# sourceMappingURL=wui-grid.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js
var exports_wui_shimmer = __webpack_require__(838215);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js
var exports_wui_wallet_image = __webpack_require__(797219);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/styles.js

/* harmony default export */ const w3m_all_wallets_list_item_styles = ((0,esm_exports/* css */.AH) `
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({ spacing }) => spacing['2']};
    padding: ${({ spacing }) => spacing['3']} ${({ spacing }) => spacing['0']};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({ borderRadius }) => borderRadius['4']}, 20px);
    transition:
      color ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-1']},
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-1']},
      border-radius ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-1']};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({ colors }) => colors.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({ colors }) => colors.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({ colors }) => colors.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/index.js
var w3m_all_wallets_list_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let W3mAllWalletsListItem = class W3mAllWalletsListItem extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.observer = new IntersectionObserver(() => undefined);
        this.visible = false;
        this.imageSrc = undefined;
        this.imageLoading = false;
        this.isImpressed = false;
        this.explorerId = '';
        this.walletQuery = '';
        this.certified = false;
        this.displayIndex = 0;
        this.wallet = undefined;
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.visible = true;
                    this.fetchImageSrc();
                    this.sendImpressionEvent();
                }
                else {
                    this.visible = false;
                }
            });
        }, { threshold: 0.01 });
    }
    firstUpdated() {
        this.observer.observe(this);
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    render() {
        const certified = this.wallet?.badge_type === 'certified';
        return (0,lit/* html */.qy) `
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,if_defined/* ifDefined */.J)(certified ? 'certified' : undefined)}
            >${this.wallet?.name}</wui-text
          >
          ${certified ? (0,lit/* html */.qy) `<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
    }
    imageTemplate() {
        if ((!this.visible && !this.imageSrc) || this.imageLoading) {
            return this.shimmerTemplate();
        }
        return (0,lit/* html */.qy) `
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,if_defined/* ifDefined */.J)(this.imageSrc)}
        name=${(0,if_defined/* ifDefined */.J)(this.wallet?.name)}
        .installed=${this.wallet?.installed ?? false}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
    }
    shimmerTemplate() {
        return (0,lit/* html */.qy) `<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
    }
    async fetchImageSrc() {
        if (!this.wallet) {
            return;
        }
        this.imageSrc = AssetUtil/* AssetUtil */.$.getWalletImage(this.wallet);
        if (this.imageSrc) {
            return;
        }
        this.imageLoading = true;
        this.imageSrc = await AssetUtil/* AssetUtil */.$.fetchWalletImage(this.wallet.image_id);
        this.imageLoading = false;
    }
    sendImpressionEvent() {
        if (!this.wallet || this.isImpressed) {
            return;
        }
        this.isImpressed = true;
        EventsController/* EventsController */.E.sendWalletImpressionEvent({
            name: this.wallet.name,
            walletRank: this.wallet.order,
            explorerId: this.explorerId,
            view: RouterController/* RouterController */.I.state.view,
            query: this.walletQuery,
            certified: this.certified,
            displayIndex: this.displayIndex
        });
    }
};
W3mAllWalletsListItem.styles = w3m_all_wallets_list_item_styles;
w3m_all_wallets_list_item_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsListItem.prototype, "visible", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsListItem.prototype, "imageSrc", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsListItem.prototype, "imageLoading", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsListItem.prototype, "isImpressed", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsListItem.prototype, "explorerId", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsListItem.prototype, "walletQuery", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsListItem.prototype, "certified", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsListItem.prototype, "displayIndex", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], W3mAllWalletsListItem.prototype, "wallet", void 0);
W3mAllWalletsListItem = w3m_all_wallets_list_item_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-list-item')
], W3mAllWalletsListItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/styles.js

/* harmony default export */ const w3m_all_wallets_list_styles = ((0,esm_exports/* css */.AH) `
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({ durations }) => durations['xl']};
    animation-timing-function: ${({ easings }) => easings['ease-inout-power-2']};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({ spacing }) => spacing['4']};
    padding-bottom: ${({ spacing }) => spacing['4']};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/index.js
var w3m_all_wallets_list_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









const PAGINATOR_ID = 'local-paginator';
let W3mAllWalletsList = class W3mAllWalletsList extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.paginationObserver = undefined;
        this.loading = !ApiController/* ApiController */.N.state.wallets.length;
        this.wallets = ApiController/* ApiController */.N.state.wallets;
        this.mobileFullScreen = OptionsController/* OptionsController */.H.state.enableMobileFullScreen;
        this.unsubscribe.push(...[ApiController/* ApiController */.N.subscribeKey('wallets', val => (this.wallets = val))]);
    }
    firstUpdated() {
        this.initialFetch();
        this.createPaginationObserver();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.paginationObserver?.disconnect();
    }
    render() {
        if (this.mobileFullScreen) {
            this.setAttribute('data-mobile-fullscreen', 'true');
        }
        return (0,lit/* html */.qy) `
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${['0', '3', '3', '3']}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
    }
    async initialFetch() {
        this.loading = true;
        const gridEl = this.shadowRoot?.querySelector('wui-grid');
        if (gridEl) {
            await ApiController/* ApiController */.N.fetchWalletsByPage({ page: 1 });
            await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.loading = false;
            gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    shimmerTemplate(items, id) {
        return [...Array(items)].map(() => (0,lit/* html */.qy) `
        <wui-card-select-loader type="wallet" id=${(0,if_defined/* ifDefined */.J)(id)}></wui-card-select-loader>
      `);
    }
    walletsTemplate() {
        return WalletUtil/* WalletUtil */.A.getWalletConnectWallets(this.wallets).map((wallet, index) => (0,lit/* html */.qy) `
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${wallet.id}"
          @click=${() => this.onConnectWallet(wallet)}
          .wallet=${wallet}
          explorerId=${wallet.id}
          certified=${this.badge === 'certified'}
          displayIndex=${index}
        ></w3m-all-wallets-list-item>
      `);
    }
    paginationLoaderTemplate() {
        const { wallets, recommended, featured, count, mobileFilteredOutWalletsLength } = ApiController/* ApiController */.N.state;
        const columns = window.innerWidth < 352 ? 3 : 4;
        const currentWallets = wallets.length + recommended.length;
        const minimumRows = Math.ceil(currentWallets / columns);
        let shimmerCount = minimumRows * columns - currentWallets + columns;
        shimmerCount -= wallets.length ? featured.length % columns : 0;
        if (count === 0 && featured.length > 0) {
            return null;
        }
        if (count === 0 ||
            [...featured, ...wallets, ...recommended].length <
                count - (mobileFilteredOutWalletsLength ?? 0)) {
            return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
        }
        return null;
    }
    createPaginationObserver() {
        const loaderEl = this.shadowRoot?.querySelector(`#${PAGINATOR_ID}`);
        if (loaderEl) {
            this.paginationObserver = new IntersectionObserver(([element]) => {
                if (element?.isIntersecting && !this.loading) {
                    const { page, count, wallets } = ApiController/* ApiController */.N.state;
                    if (wallets.length < count) {
                        ApiController/* ApiController */.N.fetchWalletsByPage({ page: page + 1 });
                    }
                }
            });
            this.paginationObserver.observe(loaderEl);
        }
    }
    onConnectWallet(wallet) {
        ConnectorController/* ConnectorController */.a.selectWalletConnector(wallet);
    }
};
W3mAllWalletsList.styles = w3m_all_wallets_list_styles;
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "loading", void 0);
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "wallets", void 0);
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "badge", void 0);
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "mobileFullScreen", void 0);
W3mAllWalletsList = w3m_all_wallets_list_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-list')
], W3mAllWalletsList);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js
var exports_wui_loading_spinner = __webpack_require__(103104);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/styles.js

/* harmony default export */ const w3m_all_wallets_search_styles = ((0,lit/* css */.AH) `
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/index.js
var w3m_all_wallets_search_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let W3mAllWalletsSearch = class W3mAllWalletsSearch extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.prevQuery = '';
        this.prevBadge = undefined;
        this.loading = true;
        this.mobileFullScreen = OptionsController/* OptionsController */.H.state.enableMobileFullScreen;
        this.query = '';
    }
    render() {
        if (this.mobileFullScreen) {
            this.setAttribute('data-mobile-fullscreen', 'true');
        }
        this.onSearch();
        return this.loading
            ? (0,lit/* html */.qy) `<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`
            : this.walletsTemplate();
    }
    async onSearch() {
        if (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) {
            this.prevQuery = this.query;
            this.prevBadge = this.badge;
            this.loading = true;
            await ApiController/* ApiController */.N.searchWallet({ search: this.query, badge: this.badge });
            this.loading = false;
        }
    }
    walletsTemplate() {
        const { search } = ApiController/* ApiController */.N.state;
        const markedInstalledWallets = WalletUtil/* WalletUtil */.A.markWalletsAsInstalled(search);
        const walletsByWcSupport = WalletUtil/* WalletUtil */.A.filterWalletsByWcSupport(markedInstalledWallets);
        if (!walletsByWcSupport.length) {
            return (0,lit/* html */.qy) `
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
        }
        return (0,lit/* html */.qy) `
      <wui-grid
        data-testid="wallet-list"
        .padding=${['0', '3', '3', '3']}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${walletsByWcSupport.map((wallet, index) => (0,lit/* html */.qy) `
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(wallet)}
              .wallet=${wallet}
              data-testid="wallet-search-item-${wallet.id}"
              explorerId=${wallet.id}
              certified=${this.badge === 'certified'}
              walletQuery=${this.query}
              displayIndex=${index}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `;
    }
    onConnectWallet(wallet) {
        ConnectorController/* ConnectorController */.a.selectWalletConnector(wallet);
    }
};
W3mAllWalletsSearch.styles = w3m_all_wallets_search_styles;
w3m_all_wallets_search_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsSearch.prototype, "loading", void 0);
w3m_all_wallets_search_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsSearch.prototype, "mobileFullScreen", void 0);
w3m_all_wallets_search_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsSearch.prototype, "query", void 0);
w3m_all_wallets_search_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsSearch.prototype, "badge", void 0);
W3mAllWalletsSearch = w3m_all_wallets_search_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-search')
], W3mAllWalletsSearch);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js
var w3m_all_wallets_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mAllWalletsView = class W3mAllWalletsView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.search = '';
        this.badge = undefined;
        this.onDebouncedSearch = CoreHelperUtil/* CoreHelperUtil */.w.debounce((value) => {
            this.search = value;
        });
    }
    render() {
        const isSearch = this.search.length >= 2;
        return (0,lit/* html */.qy) `
      <wui-flex .padding=${['1', '3', '3', '3']} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge === 'certified'}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch || this.badge
            ? (0,lit/* html */.qy) `<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`
            : (0,lit/* html */.qy) `<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `;
    }
    onInputChange(event) {
        this.onDebouncedSearch(event.detail);
    }
    onCertifiedSwitchChange(event) {
        if (event.detail) {
            this.badge = 'certified';
            SnackController/* SnackController */.P.showSvg('Only WalletConnect certified', {
                icon: 'walletConnectBrown',
                iconColor: 'accent-100'
            });
        }
        else {
            this.badge = undefined;
        }
    }
    qrButtonTemplate() {
        if (CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
            return (0,lit/* html */.qy) `
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
        }
        return null;
    }
    onWalletConnectQr() {
        RouterController/* RouterController */.I.push('ConnectingWalletConnect');
    }
};
w3m_all_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsView.prototype, "search", void 0);
w3m_all_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsView.prototype, "badge", void 0);
W3mAllWalletsView = w3m_all_wallets_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-view')
], W3mAllWalletsView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@lit/reactive-element/decorators/state.js
var state = __webpack_require__(44290);
;// ./node_modules/lit/decorators/state.js

//# sourceMappingURL=state.js.map

// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsStateController.js
var OptionsStateController = __webpack_require__(451454);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-button/styles.js

/* harmony default export */ const wui_list_button_styles = ((0,ThemeHelperUtil/* css */.AH) `
  button {
    display: flex;
    gap: ${({ spacing }) => spacing[1]};
    padding: ${({ spacing }) => spacing[4]};
    width: 100%;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  :host([data-size='md']) button {
    padding: ${({ spacing }) => spacing[3]};
    border-radius: ${({ borderRadius }) => borderRadius[3]};
  }

  button:hover {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-button/index.js
var wui_list_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiListButton = class WuiListButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.text = '';
        this.disabled = false;
        this.size = 'lg';
        this.icon = 'copy';
        this.tabIdx = undefined;
    }
    render() {
        this.dataset['size'] = this.size;
        const textVariant = `${this.size}-regular`;
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled} tabindex=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${textVariant} color="primary">${this.text}</wui-text>
      </button>
    `;
    }
};
WuiListButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_list_button_styles];
wui_list_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiListButton.prototype, "text", void 0);
wui_list_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListButton.prototype, "disabled", void 0);
wui_list_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiListButton.prototype, "size", void 0);
wui_list_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiListButton.prototype, "icon", void 0);
wui_list_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiListButton.prototype, "tabIdx", void 0);
WuiListButton = wui_list_button_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-list-button')
], WuiListButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-button.js

//# sourceMappingURL=wui-list-button.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js + 3 modules
var wui_ux_by_reown = __webpack_require__(890823);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js
var src_ConstantsUtil = __webpack_require__(669510);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js
var AlertController = __webpack_require__(471655);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-email-input.js + 2 modules
var wui_email_input = __webpack_require__(316854);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/ErrorUtil.js
var ErrorUtil = __webpack_require__(121785);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-email-login-widget/styles.js

/* harmony default export */ const w3m_email_login_widget_styles = ((0,esm_exports/* css */.AH) `
  wui-separator {
    margin: ${({ spacing }) => spacing['3']} calc(${({ spacing }) => spacing['3']} * -1);
    width: calc(100% + ${({ spacing }) => spacing['3']} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({ spacing }) => spacing['2']};
  }

  wui-loading-spinner {
    right: ${({ spacing }) => spacing['3']};
  }

  wui-text {
    margin: ${({ spacing }) => spacing['2']} ${({ spacing }) => spacing['3']}
      ${({ spacing }) => spacing['0']} ${({ spacing }) => spacing['3']};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-email-login-widget/index.js
var w3m_email_login_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let W3mEmailLoginWidget = class W3mEmailLoginWidget extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.formRef = (0,ref/* createRef */._)();
        this.email = '';
        this.loading = false;
        this.error = '';
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.hasExceededUsageLimit = ApiController/* ApiController */.N.state.plan.hasExceededUsageLimit;
        this.unsubscribe.push(OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => {
            this.remoteFeatures = val;
        }), ApiController/* ApiController */.N.subscribeKey('plan', val => (this.hasExceededUsageLimit = val.hasExceededUsageLimit)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    firstUpdated() {
        this.formRef.value?.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                this.onSubmitEmail(event);
            }
        });
    }
    render() {
        const hasConnection = ConnectionController/* ConnectionController */.x.hasAnyConnection(ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH);
        return (0,lit/* html */.qy) `
      <form ${(0,ref/* ref */.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
          ?disabled=${hasConnection || this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `;
    }
    submitButtonTemplate() {
        const showSubmit = !this.loading && this.email.length > 3;
        return showSubmit
            ? (0,lit/* html */.qy) `
          <wui-icon-link
            size="lg"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `
            : null;
    }
    loadingTemplate() {
        return this.loading
            ? (0,lit/* html */.qy) `<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`
            : null;
    }
    templateError() {
        if (this.error) {
            return (0,lit/* html */.qy) `<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`;
        }
        return null;
    }
    onEmailInputChange(event) {
        this.email = event.detail.trim();
        this.error = '';
    }
    async onSubmitEmail(event) {
        if (!HelpersUtil/* HelpersUtil */.y.isValidEmail(this.email)) {
            AlertController/* AlertController */.h.open({
                displayMessage: ErrorUtil/* ErrorUtil */.R.ALERT_WARNINGS.INVALID_EMAIL.displayMessage
            }, 'warning');
            return;
        }
        const isAvailableChain = ConstantsUtil/* ConstantsUtil */.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(chain => chain === ChainController/* ChainController */.W.state.activeChain);
        if (!isAvailableChain) {
            const caipNetwork = ChainController/* ChainController */.W.getFirstCaipNetworkSupportsAuthConnector();
            if (caipNetwork) {
                RouterController/* RouterController */.I.push('SwitchNetwork', { network: caipNetwork });
                return;
            }
        }
        try {
            if (this.loading) {
                return;
            }
            this.loading = true;
            event.preventDefault();
            const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
            if (!authConnector) {
                throw new Error('w3m-email-login-widget: Auth connector not found');
            }
            const { action } = await authConnector.provider.connectEmail({ email: this.email });
            EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_SUBMITTED' });
            if (action === 'VERIFY_OTP') {
                EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_SENT' });
                RouterController/* RouterController */.I.push('EmailVerifyOtp', { email: this.email });
            }
            else if (action === 'VERIFY_DEVICE') {
                RouterController/* RouterController */.I.push('EmailVerifyDevice', { email: this.email });
            }
            else if (action === 'CONNECT') {
                const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
                await ConnectionController/* ConnectionController */.x.connectExternal(authConnector, ChainController/* ChainController */.W.state.activeChain);
                if (isMultiWalletEnabled) {
                    RouterController/* RouterController */.I.replace('ProfileWallets');
                    SnackController/* SnackController */.P.showSuccess('New Wallet Added');
                }
                else {
                    RouterController/* RouterController */.I.replace('Account');
                }
            }
        }
        catch (error) {
            const parsedError = CoreHelperUtil/* CoreHelperUtil */.w.parseError(error);
            if (parsedError?.includes('Invalid email')) {
                this.error = 'Invalid email. Try again.';
            }
            else {
                SnackController/* SnackController */.P.showError(error);
            }
        }
        finally {
            this.loading = false;
        }
    }
    onFocusEvent() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_LOGIN_SELECTED' });
    }
};
W3mEmailLoginWidget.styles = w3m_email_login_widget_styles;
w3m_email_login_widget_decorate([
    (0,decorators/* property */.MZ)()
], W3mEmailLoginWidget.prototype, "tabIdx", void 0);
w3m_email_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mEmailLoginWidget.prototype, "email", void 0);
w3m_email_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mEmailLoginWidget.prototype, "loading", void 0);
w3m_email_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mEmailLoginWidget.prototype, "error", void 0);
w3m_email_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mEmailLoginWidget.prototype, "remoteFeatures", void 0);
w3m_email_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mEmailLoginWidget.prototype, "hasExceededUsageLimit", void 0);
W3mEmailLoginWidget = w3m_email_login_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-email-login-widget')
], W3mEmailLoginWidget);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-checkbox/index.js + 4 modules
var w3m_legal_checkbox = __webpack_require__(850708);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/SocialsUtil.js
var SocialsUtil = __webpack_require__(971801);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-social.js + 2 modules
var wui_list_social = __webpack_require__(995797);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo/index.js + 1 modules
var wui_logo = __webpack_require__(385589);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo-select/styles.js

/* harmony default export */ const wui_logo_select_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo-select/index.js
var wui_logo_select_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiLogoSelect = class WuiLogoSelect extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.logo = 'google';
        this.disabled = false;
        this.tabIdx = undefined;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled} tabindex=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `;
    }
};
WuiLogoSelect.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_logo_select_styles];
wui_logo_select_decorate([
    (0,decorators/* property */.MZ)()
], WuiLogoSelect.prototype, "logo", void 0);
wui_logo_select_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiLogoSelect.prototype, "disabled", void 0);
wui_logo_select_decorate([
    (0,decorators/* property */.MZ)()
], WuiLogoSelect.prototype, "tabIdx", void 0);
WuiLogoSelect = wui_logo_select_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-logo-select')
], WuiLogoSelect);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-logo-select.js

//# sourceMappingURL=wui-logo-select.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameProvider.js + 4 modules
var W3mFrameProvider = __webpack_require__(434505);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-social-login-widget/styles.js

/* harmony default export */ const w3m_social_login_widget_styles = ((0,esm_exports/* css */.AH) `
  wui-separator {
    margin: ${({ spacing }) => spacing['3']} calc(${({ spacing }) => spacing['3']} * -1)
      ${({ spacing }) => spacing['3']} calc(${({ spacing }) => spacing['3']} * -1);
    width: calc(100% + ${({ spacing }) => spacing['3']} * 2);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-social-login-widget/index.js
var w3m_social_login_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const MAX_TOP_VIEW = 2;
const MAXIMUM_LENGTH = 6;
let W3mSocialLoginWidget = class W3mSocialLoginWidget extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.walletGuide = 'get-started';
        this.tabIdx = undefined;
        this.connectors = ConnectorController/* ConnectorController */.a.state.connectors;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.authConnector = this.connectors.find(c => c.type === 'AUTH');
        this.isPwaLoading = false;
        this.hasExceededUsageLimit = ApiController/* ApiController */.N.state.plan.hasExceededUsageLimit;
        this.unsubscribe.push(ConnectorController/* ConnectorController */.a.subscribeKey('connectors', val => {
            this.connectors = val;
            this.authConnector = this.connectors.find(c => c.type === 'AUTH');
        }), OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)), ApiController/* ApiController */.N.subscribeKey('plan', val => (this.hasExceededUsageLimit = val.hasExceededUsageLimit)));
    }
    connectedCallback() {
        super.connectedCallback();
        this.handlePwaFrameLoad();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `;
    }
    topViewTemplate() {
        const isCreateWalletPage = this.walletGuide === 'explore';
        let socials = this.remoteFeatures?.socials;
        if (!socials && isCreateWalletPage) {
            socials = utils_ConstantsUtil/* ConstantsUtil */.oU.DEFAULT_SOCIALS;
            return this.renderTopViewContent(socials);
        }
        if (!socials) {
            return null;
        }
        return this.renderTopViewContent(socials);
    }
    renderTopViewContent(socials) {
        if (socials.length === 2) {
            return (0,lit/* html */.qy) ` <wui-flex gap="2">
        ${socials.slice(0, MAX_TOP_VIEW).map(social => (0,lit/* html */.qy) `<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${() => {
                this.onSocialClick(social);
            }}
              logo=${social}
              tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
              ?disabled=${this.isPwaLoading || this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`;
        }
        return (0,lit/* html */.qy) ` <wui-list-button
      data-testid=${`social-selector-${socials[0]}`}
      @click=${() => {
            this.onSocialClick(socials[0]);
        }}
      size="lg"
      icon=${(0,if_defined/* ifDefined */.J)(socials[0])}
      text=${`Continue with ${esm_exports/* UiHelperUtil */.Zv.capitalize(socials[0])}`}
      tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
      ?disabled=${this.isPwaLoading || this.hasConnection()}
    ></wui-list-button>`;
    }
    bottomViewTemplate() {
        let socials = this.remoteFeatures?.socials;
        const isCreateWalletPage = this.walletGuide === 'explore';
        const isSocialDisabled = !this.authConnector || !socials || socials.length === 0;
        if (isSocialDisabled && isCreateWalletPage) {
            socials = utils_ConstantsUtil/* ConstantsUtil */.oU.DEFAULT_SOCIALS;
        }
        if (!socials) {
            return null;
        }
        if (socials.length <= MAX_TOP_VIEW) {
            return null;
        }
        if (socials && socials.length > MAXIMUM_LENGTH) {
            return (0,lit/* html */.qy) `<wui-flex gap="2">
        ${socials.slice(1, MAXIMUM_LENGTH - 1).map(social => (0,lit/* html */.qy) `<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${() => {
                this.onSocialClick(social);
            }}
              logo=${social}
              tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
              ?focusable=${this.tabIdx !== undefined && this.tabIdx >= 0}
              ?disabled=${this.isPwaLoading || this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading || this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`;
        }
        if (!socials) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-flex gap="2">
      ${socials.slice(1, socials.length).map(social => (0,lit/* html */.qy) `<wui-logo-select
            data-testid=${`social-selector-${social}`}
            @click=${() => {
            this.onSocialClick(social);
        }}
            logo=${social}
            tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
            ?focusable=${this.tabIdx !== undefined && this.tabIdx >= 0}
            ?disabled=${this.isPwaLoading || this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`;
    }
    onMoreSocialsClick() {
        RouterController/* RouterController */.I.push('ConnectSocials');
    }
    async onSocialClick(socialProvider) {
        if (this.hasExceededUsageLimit) {
            RouterController/* RouterController */.I.push('UsageExceeded');
            return;
        }
        const isAvailableChain = ConstantsUtil/* ConstantsUtil */.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(chain => chain === ChainController/* ChainController */.W.state.activeChain);
        if (!isAvailableChain) {
            const caipNetwork = ChainController/* ChainController */.W.getFirstCaipNetworkSupportsAuthConnector();
            if (caipNetwork) {
                RouterController/* RouterController */.I.push('SwitchNetwork', { network: caipNetwork });
                return;
            }
        }
        if (socialProvider) {
            await (0,SocialsUtil/* executeSocialLogin */.Up)(socialProvider);
        }
    }
    async handlePwaFrameLoad() {
        if (CoreHelperUtil/* CoreHelperUtil */.w.isPWA()) {
            this.isPwaLoading = true;
            try {
                if (this.authConnector?.provider instanceof W3mFrameProvider/* W3mFrameProvider */.Y) {
                    await this.authConnector.provider.init();
                }
            }
            catch (error) {
                AlertController/* AlertController */.h.open({
                    displayMessage: 'Error loading embedded wallet in PWA',
                    debugMessage: error.message
                }, 'error');
            }
            finally {
                this.isPwaLoading = false;
            }
        }
    }
    hasConnection() {
        return ConnectionController/* ConnectionController */.x.hasAnyConnection(ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH);
    }
};
W3mSocialLoginWidget.styles = w3m_social_login_widget_styles;
w3m_social_login_widget_decorate([
    (0,decorators/* property */.MZ)()
], W3mSocialLoginWidget.prototype, "walletGuide", void 0);
w3m_social_login_widget_decorate([
    (0,decorators/* property */.MZ)()
], W3mSocialLoginWidget.prototype, "tabIdx", void 0);
w3m_social_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginWidget.prototype, "connectors", void 0);
w3m_social_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginWidget.prototype, "remoteFeatures", void 0);
w3m_social_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginWidget.prototype, "authConnector", void 0);
w3m_social_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginWidget.prototype, "isPwaLoading", void 0);
w3m_social_login_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginWidget.prototype, "hasExceededUsageLimit", void 0);
W3mSocialLoginWidget = w3m_social_login_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-social-login-widget')
], W3mSocialLoginWidget);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js + 4 modules
var wui_list_wallet = __webpack_require__(84954);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-widget/index.js
var w3m_all_wallets_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mAllWalletsWidget = class W3mAllWalletsWidget extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = ConnectorController/* ConnectorController */.a.state.connectors;
        this.count = ApiController/* ApiController */.N.state.count;
        this.filteredCount = ApiController/* ApiController */.N.state.filteredWallets.length;
        this.isFetchingRecommendedWallets = ApiController/* ApiController */.N.state.isFetchingRecommendedWallets;
        this.unsubscribe.push(ConnectorController/* ConnectorController */.a.subscribeKey('connectors', val => (this.connectors = val)), ApiController/* ApiController */.N.subscribeKey('count', val => (this.count = val)), ApiController/* ApiController */.N.subscribeKey('filteredWallets', val => (this.filteredCount = val.length)), ApiController/* ApiController */.N.subscribeKey('isFetchingRecommendedWallets', val => (this.isFetchingRecommendedWallets = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const wcConnector = this.connectors.find(c => c.id === 'walletConnect');
        const { allWallets } = OptionsController/* OptionsController */.H.state;
        if (!wcConnector || allWallets === 'HIDE') {
            return null;
        }
        if (allWallets === 'ONLY_MOBILE' && !CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
            return null;
        }
        const featuredCount = ApiController/* ApiController */.N.state.featured.length;
        const rawCount = this.count + featuredCount;
        const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
        const count = this.filteredCount > 0 ? this.filteredCount : roundedCount;
        let tagLabel = `${count}`;
        if (this.filteredCount > 0) {
            tagLabel = `${this.filteredCount}`;
        }
        else if (count < rawCount) {
            tagLabel = `${count}+`;
        }
        const hasWcConnection = ConnectionController/* ConnectionController */.x.hasAnyConnection(ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.WALLET_CONNECT);
        return (0,lit/* html */.qy) `
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${hasWcConnection}
        size="sm"
      ></wui-list-wallet>
    `;
    }
    onAllWallets() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_ALL_WALLETS' });
        RouterController/* RouterController */.I.push('AllWallets', { redirectView: RouterController/* RouterController */.I.state.data?.redirectView });
    }
};
w3m_all_wallets_widget_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsWidget.prototype, "tabIdx", void 0);
w3m_all_wallets_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "connectors", void 0);
w3m_all_wallets_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "count", void 0);
w3m_all_wallets_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "filteredCount", void 0);
w3m_all_wallets_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "isFetchingRecommendedWallets", void 0);
W3mAllWalletsWidget = w3m_all_wallets_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-widget')
], W3mAllWalletsWidget);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/styles.js

/* harmony default export */ const w3m_connector_list_styles = ((0,esm_exports/* css */.AH) `
  :host {
    margin-top: ${({ spacing }) => spacing['1']};
  }
  wui-separator {
    margin: ${({ spacing }) => spacing['3']} calc(${({ spacing }) => spacing['3']} * -1)
      ${({ spacing }) => spacing['2']} calc(${({ spacing }) => spacing['3']} * -1);
    width: calc(100% + ${({ spacing }) => spacing['3']} * 2);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/index.js
var w3m_connector_list_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mConnectorList = class W3mConnectorList extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.explorerWallets = ApiController/* ApiController */.N.state.explorerWallets;
        this.connections = ConnectionController/* ConnectionController */.x.state.connections;
        this.connectorImages = AssetController/* AssetController */.j.state.connectorImages;
        this.loadingTelegram = false;
        this.unsubscribe.push(ConnectionController/* ConnectionController */.x.subscribeKey('connections', val => (this.connections = val)), AssetController/* AssetController */.j.subscribeKey('connectorImages', val => (this.connectorImages = val)), ApiController/* ApiController */.N.subscribeKey('explorerFilteredWallets', val => {
            this.explorerWallets = val?.length ? val : ApiController/* ApiController */.N.state.explorerWallets;
        }), ApiController/* ApiController */.N.subscribeKey('explorerWallets', val => {
            if (!this.explorerWallets?.length) {
                this.explorerWallets = val;
            }
        }));
        if (CoreHelperUtil/* CoreHelperUtil */.w.isTelegram() && CoreHelperUtil/* CoreHelperUtil */.w.isIos()) {
            this.loadingTelegram = !ConnectionController/* ConnectionController */.x.state.wcUri;
            this.unsubscribe.push(ConnectionController/* ConnectionController */.x.subscribeKey('wcUri', val => (this.loadingTelegram = !val)));
        }
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `;
    }
    connectorListTemplate() {
        return ConnectorUtil/* ConnectorUtil */.g.connectorList().map((item, displayIndex) => {
            if (item.kind === 'connector') {
                return this.renderConnector(item, displayIndex);
            }
            return this.renderWallet(item, displayIndex);
        });
    }
    getConnectorNamespaces(item) {
        if (item.subtype === 'walletConnect') {
            return [];
        }
        if (item.subtype === 'multiChain') {
            return item.connector.connectors?.map(c => c.chain) || [];
        }
        return [item.connector.chain];
    }
    renderConnector(item, index) {
        const connector = item.connector;
        const imageSrc = AssetUtil/* AssetUtil */.$.getConnectorImage(connector) || this.connectorImages[connector?.imageId ?? ''];
        const connectionsByNamespace = this.connections.get(connector.chain) ?? [];
        const isAlreadyConnected = connectionsByNamespace.some(c => src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(c.connectorId, connector.id));
        let tagLabel = undefined;
        let tagVariant = undefined;
        if (item.subtype === 'walletConnect') {
            tagLabel = 'qr code';
            tagVariant = 'accent';
        }
        else if (item.subtype === 'injected' || item.subtype === 'announced') {
            tagLabel = isAlreadyConnected ? 'connected' : 'installed';
            tagVariant = isAlreadyConnected ? 'info' : 'success';
        }
        else {
            tagLabel = undefined;
            tagVariant = undefined;
        }
        const hasWcConnection = ConnectionController/* ConnectionController */.x.hasAnyConnection(ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.WALLET_CONNECT);
        const disabled = item.subtype === 'walletConnect' || item.subtype === 'external' ? hasWcConnection : false;
        return (0,lit/* html */.qy) `
      <w3m-list-wallet
        displayIndex=${index}
        imageSrc=${(0,if_defined/* ifDefined */.J)(imageSrc)}
        .installed=${true}
        name=${connector.name ?? 'Unknown'}
        .tagVariant=${tagVariant}
        tagLabel=${(0,if_defined/* ifDefined */.J)(tagLabel)}
        data-testid=${`wallet-selector-${connector.id.toLowerCase()}`}
        size="sm"
        @click=${() => this.onClickConnector(item)}
        tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
        ?disabled=${disabled}
        rdnsId=${(0,if_defined/* ifDefined */.J)(connector.explorerWallet?.rdns || undefined)}
        walletRank=${(0,if_defined/* ifDefined */.J)(connector.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(item)}
      >
      </w3m-list-wallet>
    `;
    }
    onClickConnector(item) {
        const redirectView = RouterController/* RouterController */.I.state.data?.redirectView;
        if (item.subtype === 'walletConnect') {
            ConnectorController/* ConnectorController */.a.setActiveConnector(item.connector);
            if (CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
                RouterController/* RouterController */.I.push('AllWallets');
            }
            else {
                RouterController/* RouterController */.I.push('ConnectingWalletConnect', { redirectView });
            }
            return;
        }
        if (item.subtype === 'multiChain') {
            ConnectorController/* ConnectorController */.a.setActiveConnector(item.connector);
            RouterController/* RouterController */.I.push('ConnectingMultiChain', { redirectView });
            return;
        }
        if (item.subtype === 'injected') {
            ConnectorController/* ConnectorController */.a.setActiveConnector(item.connector);
            RouterController/* RouterController */.I.push('ConnectingExternal', {
                connector: item.connector,
                redirectView,
                wallet: item.connector.explorerWallet
            });
            return;
        }
        if (item.subtype === 'announced') {
            if (item.connector.id === 'walletConnect') {
                if (CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
                    RouterController/* RouterController */.I.push('AllWallets');
                }
                else {
                    RouterController/* RouterController */.I.push('ConnectingWalletConnect', { redirectView });
                }
                return;
            }
            RouterController/* RouterController */.I.push('ConnectingExternal', {
                connector: item.connector,
                redirectView,
                wallet: item.connector.explorerWallet
            });
            return;
        }
        RouterController/* RouterController */.I.push('ConnectingExternal', {
            connector: item.connector,
            redirectView
        });
    }
    renderWallet(item, index) {
        const wallet = item.wallet;
        const imageSrc = AssetUtil/* AssetUtil */.$.getWalletImage(wallet);
        const hasWcConnection = ConnectionController/* ConnectionController */.x.hasAnyConnection(ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.WALLET_CONNECT);
        const disabled = hasWcConnection;
        const loading = this.loadingTelegram;
        const tagLabel = item.subtype === 'recent' ? 'recent' : undefined;
        const tagVariant = item.subtype === 'recent' ? 'info' : undefined;
        return (0,lit/* html */.qy) `
      <w3m-list-wallet
        displayIndex=${index}
        imageSrc=${(0,if_defined/* ifDefined */.J)(imageSrc)}
        name=${wallet.name ?? 'Unknown'}
        @click=${() => this.onClickWallet(item)}
        size="sm"
        data-testid=${`wallet-selector-${wallet.id}`}
        tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
        ?loading=${loading}
        ?disabled=${disabled}
        rdnsId=${(0,if_defined/* ifDefined */.J)(wallet.rdns || undefined)}
        walletRank=${(0,if_defined/* ifDefined */.J)(wallet.order)}
        tagLabel=${(0,if_defined/* ifDefined */.J)(tagLabel)}
        .tagVariant=${tagVariant}
      >
      </w3m-list-wallet>
    `;
    }
    onClickWallet(item) {
        const redirectView = RouterController/* RouterController */.I.state.data?.redirectView;
        const namespace = ChainController/* ChainController */.W.state.activeChain;
        if (item.subtype === 'featured') {
            ConnectorController/* ConnectorController */.a.selectWalletConnector(item.wallet);
            return;
        }
        if (item.subtype === 'recent') {
            if (this.loadingTelegram) {
                return;
            }
            ConnectorController/* ConnectorController */.a.selectWalletConnector(item.wallet);
            return;
        }
        if (item.subtype === 'custom') {
            if (this.loadingTelegram) {
                return;
            }
            RouterController/* RouterController */.I.push('ConnectingWalletConnect', { wallet: item.wallet, redirectView });
            return;
        }
        if (this.loadingTelegram) {
            return;
        }
        const connector = namespace
            ? ConnectorController/* ConnectorController */.a.getConnector({ id: item.wallet.id, namespace })
            : undefined;
        if (connector) {
            RouterController/* RouterController */.I.push('ConnectingExternal', { connector, redirectView });
        }
        else {
            RouterController/* RouterController */.I.push('ConnectingWalletConnect', { wallet: item.wallet, redirectView });
        }
    }
};
W3mConnectorList.styles = w3m_connector_list_styles;
w3m_connector_list_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], W3mConnectorList.prototype, "tabIdx", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "explorerWallets", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "connections", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "connectorImages", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "loadingTelegram", void 0);
W3mConnectorList = w3m_connector_list_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connector-list')
], W3mConnectorList);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-login-list/index.js
var w3m_wallet_login_list_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mWalletLoginList = class W3mWalletLoginList extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.tabIdx = undefined;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `;
    }
};
w3m_wallet_login_list_decorate([
    (0,decorators/* property */.MZ)()
], W3mWalletLoginList.prototype, "tabIdx", void 0);
W3mWalletLoginList = w3m_wallet_login_list_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-wallet-login-list')
], W3mWalletLoginList);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-view/styles.js

/* harmony default export */ const w3m_connect_view_styles = ((0,esm_exports/* css */.AH) `
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({ spacing }) => spacing['3']} calc(${({ spacing }) => spacing['3']} * -1);
    width: calc(100% + ${({ spacing }) => spacing['3']} * 2);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-view/index.js
var w3m_connect_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















const SCROLL_THRESHOLD = 470;
let W3mConnectView = class W3mConnectView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.connectors = ConnectorController/* ConnectorController */.a.state.connectors;
        this.authConnector = this.connectors.find(c => c.type === 'AUTH');
        this.features = OptionsController/* OptionsController */.H.state.features;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.enableWallets = OptionsController/* OptionsController */.H.state.enableWallets;
        this.noAdapters = ChainController/* ChainController */.W.state.noAdapters;
        this.walletGuide = 'get-started';
        this.checked = OptionsStateController/* OptionsStateController */.o.state.isLegalCheckboxChecked;
        this.isEmailEnabled = this.remoteFeatures?.email && !ChainController/* ChainController */.W.state.noAdapters;
        this.isSocialEnabled = this.remoteFeatures?.socials &&
            this.remoteFeatures.socials.length > 0 &&
            !ChainController/* ChainController */.W.state.noAdapters;
        this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors);
        this.unsubscribe.push(ConnectorController/* ConnectorController */.a.subscribeKey('connectors', val => {
            this.connectors = val;
            this.authConnector = this.connectors.find(c => c.type === 'AUTH');
            this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors);
        }), OptionsController/* OptionsController */.H.subscribeKey('features', val => {
            this.features = val;
        }), OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => {
            this.remoteFeatures = val;
            this.setEmailAndSocialEnableCheck(this.noAdapters, this.remoteFeatures);
        }), OptionsController/* OptionsController */.H.subscribeKey('enableWallets', val => (this.enableWallets = val)), ChainController/* ChainController */.W.subscribeKey('noAdapters', val => this.setEmailAndSocialEnableCheck(val, this.remoteFeatures)), OptionsStateController/* OptionsStateController */.o.subscribeKey('isLegalCheckboxChecked', val => (this.checked = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.resizeObserver?.disconnect();
        const connectEl = this.shadowRoot?.querySelector('.connect');
        connectEl?.removeEventListener('scroll', this.handleConnectListScroll.bind(this));
    }
    firstUpdated() {
        const connectEl = this.shadowRoot?.querySelector('.connect');
        if (connectEl) {
            requestAnimationFrame(this.handleConnectListScroll.bind(this));
            connectEl?.addEventListener('scroll', this.handleConnectListScroll.bind(this));
            this.resizeObserver = new ResizeObserver(() => {
                this.handleConnectListScroll();
            });
            this.resizeObserver?.observe(connectEl);
            this.handleConnectListScroll();
        }
    }
    render() {
        const { termsConditionsUrl, privacyPolicyUrl } = OptionsController/* OptionsController */.H.state;
        const isLegalCheckbox = OptionsController/* OptionsController */.H.state.features?.legalCheckbox;
        const legalUrl = termsConditionsUrl || privacyPolicyUrl;
        const isShowLegalCheckbox = Boolean(legalUrl) && Boolean(isLegalCheckbox) && this.walletGuide === 'get-started';
        const isDisabled = isShowLegalCheckbox && !this.checked;
        const classes = {
            connect: true,
            disabled: isDisabled
        };
        const isEnableWalletGuide = OptionsController/* OptionsController */.H.state.enableWalletGuide;
        const isEnableWallets = this.enableWallets;
        const socialOrEmailLoginEnabled = this.isSocialEnabled || this.authConnector;
        const tabIndex = isDisabled ? -1 : undefined;
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${['0', '0', '4', '0']}
          class=${(0,class_map/* classMap */.H)(classes)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${socialOrEmailLoginEnabled &&
            isEnableWallets &&
            isEnableWalletGuide &&
            this.walletGuide === 'get-started'
            ? ['0', '3', '0', '3']
            : ['0', '3', '3', '3']}
          >
            ${this.renderConnectMethod(tabIndex)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `;
    }
    reownBrandingTemplate() {
        if (HelpersUtil/* HelpersUtil */.y.hasFooter()) {
            return null;
        }
        if (!this.remoteFeatures?.reownBranding) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-ux-by-reown></wui-ux-by-reown>`;
    }
    setEmailAndSocialEnableCheck(noAdapters, remoteFeatures) {
        this.isEmailEnabled = remoteFeatures?.email && !noAdapters;
        this.isSocialEnabled =
            remoteFeatures?.socials && remoteFeatures.socials.length > 0 && !noAdapters;
        this.remoteFeatures = remoteFeatures;
        this.noAdapters = noAdapters;
    }
    checkIfAuthEnabled(connectors) {
        const namespacesWithAuthConnector = connectors
            .filter(c => c.type === src_ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_TYPE_AUTH)
            .map(i => i.chain);
        const authSupportedNamespaces = ConstantsUtil/* ConstantsUtil */.o.AUTH_CONNECTOR_SUPPORTED_CHAINS;
        return authSupportedNamespaces.some(ns => namespacesWithAuthConnector.includes(ns));
    }
    renderConnectMethod(tabIndex) {
        const connectMethodsOrder = WalletUtil/* WalletUtil */.A.getConnectOrderMethod(this.features, this.connectors);
        return (0,lit/* html */.qy) `${connectMethodsOrder.map((method, index) => {
            switch (method) {
                case 'email':
                    return (0,lit/* html */.qy) `${this.emailTemplate(tabIndex)} ${this.separatorTemplate(index, 'email')}`;
                case 'social':
                    return (0,lit/* html */.qy) `${this.socialListTemplate(tabIndex)}
          ${this.separatorTemplate(index, 'social')}`;
                case 'wallet':
                    return (0,lit/* html */.qy) `${this.walletListTemplate(tabIndex)}
          ${this.separatorTemplate(index, 'wallet')}`;
                default:
                    return null;
            }
        })}`;
    }
    checkMethodEnabled(name) {
        switch (name) {
            case 'wallet':
                return this.enableWallets;
            case 'social':
                return this.isSocialEnabled && this.isAuthEnabled;
            case 'email':
                return this.isEmailEnabled && this.isAuthEnabled;
            default:
                return null;
        }
    }
    checkIsThereNextMethod(currentIndex) {
        const connectMethodsOrder = WalletUtil/* WalletUtil */.A.getConnectOrderMethod(this.features, this.connectors);
        const nextMethod = connectMethodsOrder[currentIndex + 1];
        if (!nextMethod) {
            return undefined;
        }
        const isNextMethodEnabled = this.checkMethodEnabled(nextMethod);
        if (isNextMethodEnabled) {
            return nextMethod;
        }
        return this.checkIsThereNextMethod(currentIndex + 1);
    }
    separatorTemplate(index, type) {
        const nextEnabledMethod = this.checkIsThereNextMethod(index);
        const isExplore = this.walletGuide === 'explore';
        switch (type) {
            case 'wallet': {
                const isWalletEnable = this.enableWallets;
                return isWalletEnable && nextEnabledMethod && !isExplore
                    ? (0,lit/* html */.qy) `<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
                    : null;
            }
            case 'email': {
                const isNextMethodSocial = nextEnabledMethod === 'social';
                return this.isAuthEnabled && this.isEmailEnabled && !isNextMethodSocial && nextEnabledMethod
                    ? (0,lit/* html */.qy) `<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`
                    : null;
            }
            case 'social': {
                const isNextMethodEmail = nextEnabledMethod === 'email';
                return this.isAuthEnabled && this.isSocialEnabled && !isNextMethodEmail && nextEnabledMethod
                    ? (0,lit/* html */.qy) `<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
                    : null;
            }
            default:
                return null;
        }
    }
    emailTemplate(tabIndex) {
        if (!this.isEmailEnabled || !this.isAuthEnabled) {
            return null;
        }
        return (0,lit/* html */.qy) `<w3m-email-login-widget tabIdx=${(0,if_defined/* ifDefined */.J)(tabIndex)}></w3m-email-login-widget>`;
    }
    socialListTemplate(tabIndex) {
        if (!this.isSocialEnabled || !this.isAuthEnabled) {
            return null;
        }
        return (0,lit/* html */.qy) `<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,if_defined/* ifDefined */.J)(tabIndex)}
    ></w3m-social-login-widget>`;
    }
    walletListTemplate(tabIndex) {
        const isEnableWallets = this.enableWallets;
        const isCollapseWalletsOldProp = this.features?.emailShowWallets === false;
        const isCollapseWallets = this.features?.collapseWallets;
        const shouldCollapseWallets = isCollapseWalletsOldProp || isCollapseWallets;
        if (!isEnableWallets) {
            return null;
        }
        if (CoreHelperUtil/* CoreHelperUtil */.w.isTelegram() && (CoreHelperUtil/* CoreHelperUtil */.w.isSafari() || CoreHelperUtil/* CoreHelperUtil */.w.isIos())) {
            ConnectionController/* ConnectionController */.x.connectWalletConnect().catch(_e => ({}));
        }
        if (this.walletGuide === 'explore') {
            return null;
        }
        const hasOtherMethods = this.isAuthEnabled && (this.isEmailEnabled || this.isSocialEnabled);
        if (hasOtherMethods && shouldCollapseWallets) {
            return (0,lit/* html */.qy) `<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,if_defined/* ifDefined */.J)(tabIndex)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
        icon="wallet"
      ></wui-list-button>`;
        }
        return (0,lit/* html */.qy) `<w3m-wallet-login-list tabIdx=${(0,if_defined/* ifDefined */.J)(tabIndex)}></w3m-wallet-login-list>`;
    }
    legalCheckboxTemplate() {
        if (this.walletGuide === 'explore') {
            return null;
        }
        return (0,lit/* html */.qy) `<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`;
    }
    handleConnectListScroll() {
        const connectEl = this.shadowRoot?.querySelector('.connect');
        if (!connectEl) {
            return;
        }
        const shouldApplyMask = connectEl.scrollHeight > SCROLL_THRESHOLD;
        if (shouldApplyMask) {
            connectEl.style.setProperty('--connect-mask-image', `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`);
            connectEl.style.setProperty('--connect-scroll--top-opacity', esm_exports/* MathUtil */.z8.interpolate([0, 50], [0, 1], connectEl.scrollTop).toString());
            connectEl.style.setProperty('--connect-scroll--bottom-opacity', esm_exports/* MathUtil */.z8.interpolate([0, 50], [0, 1], connectEl.scrollHeight - connectEl.scrollTop - connectEl.offsetHeight).toString());
        }
        else {
            connectEl.style.setProperty('--connect-mask-image', 'none');
            connectEl.style.setProperty('--connect-scroll--top-opacity', '0');
            connectEl.style.setProperty('--connect-scroll--bottom-opacity', '0');
        }
    }
    onContinueWalletClick() {
        RouterController/* RouterController */.I.push('ConnectWallets');
    }
};
W3mConnectView.styles = w3m_connect_view_styles;
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "connectors", void 0);
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "authConnector", void 0);
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "features", void 0);
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "remoteFeatures", void 0);
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "enableWallets", void 0);
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "noAdapters", void 0);
w3m_connect_view_decorate([
    (0,decorators/* property */.MZ)()
], W3mConnectView.prototype, "walletGuide", void 0);
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "checked", void 0);
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "isEmailEnabled", void 0);
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "isSocialEnabled", void 0);
w3m_connect_view_decorate([
    (0,state/* state */.w)()
], W3mConnectView.prototype, "isAuthEnabled", void 0);
W3mConnectView = w3m_connect_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connect-view')
], W3mConnectView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js
var utils_ErrorUtil = __webpack_require__(136875);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js + 1 modules
var withErrorBoundary = __webpack_require__(923082);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(568996);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(845198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js + 2 modules
var wui_loading_thumbnail = __webpack_require__(153448);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/styles.js

/* harmony default export */ const wui_cta_button_styles = ((0,ThemeHelperUtil/* css */.AH) `
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    padding-left: ${({ spacing }) => spacing[3]};
    padding-right: ${({ spacing }) => spacing[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing }) => spacing[6]};
  }

  wui-text {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/index.js
var wui_cta_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiCtaButton = class WuiCtaButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.label = '';
        this.buttonLabel = '';
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
    }
};
WuiCtaButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_cta_button_styles];
wui_cta_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiCtaButton.prototype, "disabled", void 0);
wui_cta_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiCtaButton.prototype, "label", void 0);
wui_cta_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiCtaButton.prototype, "buttonLabel", void 0);
WuiCtaButton = wui_cta_button_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-cta-button')
], WuiCtaButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-cta-button.js

//# sourceMappingURL=wui-cta-button.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/styles.js

/* harmony default export */ const w3m_mobile_download_links_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    padding: 0 ${({ spacing }) => spacing['5']} ${({ spacing }) => spacing['5']};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js
var w3m_mobile_download_links_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mMobileDownloadLinks = class W3mMobileDownloadLinks extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.wallet = undefined;
    }
    render() {
        if (!this.wallet) {
            this.style.display = 'none';
            return null;
        }
        const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
        const isMobile = CoreHelperUtil/* CoreHelperUtil */.w.isMobile();
        const isIos = CoreHelperUtil/* CoreHelperUtil */.w.isIos();
        const isAndroid = CoreHelperUtil/* CoreHelperUtil */.w.isAndroid();
        const isMultiple = [app_store, play_store, homepage, chrome_store].filter(Boolean).length > 1;
        const shortName = esm_exports/* UiHelperUtil */.Zv.getTruncateString({
            string: name,
            charsStart: 12,
            charsEnd: 0,
            truncate: 'end'
        });
        if (isMultiple && !isMobile) {
            return (0,lit/* html */.qy) `
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController/* RouterController */.I.push('Downloads', { wallet: this.wallet })}
        ></wui-cta-button>
      `;
        }
        if (!isMultiple && homepage) {
            return (0,lit/* html */.qy) `
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
        }
        if (app_store && isIos) {
            return (0,lit/* html */.qy) `
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
        }
        if (play_store && isAndroid) {
            return (0,lit/* html */.qy) `
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
        }
        this.style.display = 'none';
        return null;
    }
    onAppStore() {
        if (this.wallet?.app_store) {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.wallet.app_store, '_blank');
        }
    }
    onPlayStore() {
        if (this.wallet?.play_store) {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.wallet.play_store, '_blank');
        }
    }
    onHomePage() {
        if (this.wallet?.homepage) {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.wallet.homepage, '_blank');
        }
    }
};
W3mMobileDownloadLinks.styles = [w3m_mobile_download_links_styles];
w3m_mobile_download_links_decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = w3m_mobile_download_links_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-mobile-download-links')
], W3mMobileDownloadLinks);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js

/* harmony default export */ const w3m_connecting_widget_styles = ((0,esm_exports/* css */.AH) `
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing }) => spacing['1']} * -1);
    bottom: calc(${({ spacing }) => spacing['1']} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({ durations }) => durations['lg']};
    transition-timing-function: ${({ easings }) => easings['ease-out-power-2']};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing }) => spacing['4']};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings }) => easings['ease-out-power-2']} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js
var w3m_connecting_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














class W3mConnectingWidget extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.wallet = RouterController/* RouterController */.I.state.data?.wallet;
        this.connector = RouterController/* RouterController */.I.state.data?.connector;
        this.timeout = undefined;
        this.secondaryBtnIcon = 'refresh';
        this.onConnect = undefined;
        this.onRender = undefined;
        this.onAutoConnect = undefined;
        this.isWalletConnect = true;
        this.unsubscribe = [];
        this.imageSrc = AssetUtil/* AssetUtil */.$.getConnectorImage(this.connector) ?? AssetUtil/* AssetUtil */.$.getWalletImage(this.wallet);
        this.name = this.wallet?.name ?? this.connector?.name ?? 'Wallet';
        this.isRetrying = false;
        this.uri = ConnectionController/* ConnectionController */.x.state.wcUri;
        this.error = ConnectionController/* ConnectionController */.x.state.wcError;
        this.ready = false;
        this.showRetry = false;
        this.label = undefined;
        this.secondaryBtnLabel = 'Try again';
        this.secondaryLabel = 'Accept connection request in the wallet';
        this.isLoading = false;
        this.isMobile = false;
        this.onRetry = undefined;
        this.unsubscribe.push(...[
            ConnectionController/* ConnectionController */.x.subscribeKey('wcUri', val => {
                this.uri = val;
                if (this.isRetrying && this.onRetry) {
                    this.isRetrying = false;
                    this.onConnect?.();
                }
            }),
            ConnectionController/* ConnectionController */.x.subscribeKey('wcError', val => (this.error = val))
        ]);
        if ((CoreHelperUtil/* CoreHelperUtil */.w.isTelegram() || CoreHelperUtil/* CoreHelperUtil */.w.isSafari()) &&
            CoreHelperUtil/* CoreHelperUtil */.w.isIos() &&
            ConnectionController/* ConnectionController */.x.state.wcUri) {
            this.onConnect?.();
        }
    }
    firstUpdated() {
        this.onAutoConnect?.();
        this.showRetry = !this.onAutoConnect;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        ConnectionController/* ConnectionController */.x.setWcError(false);
        clearTimeout(this.timeout);
    }
    render() {
        this.onRender?.();
        this.onShowRetry();
        const subLabel = this.error
            ? 'Connection can be declined if a previous request is still active'
            : this.secondaryLabel;
        let label = '';
        if (this.label) {
            label = this.label;
        }
        else {
            label = `Continue in ${this.name}`;
            if (this.error) {
                label = 'Connection declined';
            }
        }
        return (0,lit/* html */.qy) `
      <wui-flex
        data-error=${(0,if_defined/* ifDefined */.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${['10', '5', '5', '5']}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,if_defined/* ifDefined */.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${['2', '0', '0', '0']}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error ? 'error' : 'primary'}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${subLabel}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel
            ? (0,lit/* html */.qy) `
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying || this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `
            : null}
      </wui-flex>

      ${this.isWalletConnect
            ? (0,lit/* html */.qy) `
              <wui-flex .padding=${['0', '5', '5', '5']} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `
            : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `;
    }
    onShowRetry() {
        if (this.error && !this.showRetry) {
            this.showRetry = true;
            const retryButton = this.shadowRoot?.querySelector('wui-button');
            retryButton?.animate([{ opacity: 0 }, { opacity: 1 }], {
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    onTryAgain() {
        ConnectionController/* ConnectionController */.x.setWcError(false);
        if (this.onRetry) {
            this.isRetrying = true;
            this.onRetry?.();
        }
        else {
            this.onConnect?.();
        }
    }
    loaderTemplate() {
        const borderRadiusMaster = ThemeController/* ThemeController */.W.state.themeVariables['--w3m-border-radius-master'];
        const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace('px', ''), 10) : 4;
        return (0,lit/* html */.qy) `<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
    }
    onCopyUri() {
        try {
            if (this.uri) {
                CoreHelperUtil/* CoreHelperUtil */.w.copyToClopboard(this.uri);
                SnackController/* SnackController */.P.showSuccess('Link copied');
            }
        }
        catch {
            SnackController/* SnackController */.P.showError('Failed to copy');
        }
    }
}
W3mConnectingWidget.styles = w3m_connecting_widget_styles;
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "isRetrying", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "uri", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "error", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "ready", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "showRetry", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "label", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "secondaryBtnLabel", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "secondaryLabel", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "isLoading", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mConnectingWidget.prototype, "isMobile", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* property */.MZ)()
], W3mConnectingWidget.prototype, "onRetry", void 0);
//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-external-view/index.js
var w3m_connecting_external_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let W3mConnectingExternalView = class W3mConnectingExternalView extends W3mConnectingWidget {
    constructor() {
        super();
        this.externalViewUnsubscribe = [];
        this.connectionsByNamespace = ConnectionController/* ConnectionController */.x.getConnections(this.connector?.chain);
        this.hasMultipleConnections = this.connectionsByNamespace.length > 0;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.currentActiveConnectorId = ConnectorController/* ConnectorController */.a.state.activeConnectorIds[this.connector?.chain];
        if (!this.connector) {
            throw new Error('w3m-connecting-view: No connector provided');
        }
        const namespace = this.connector?.chain;
        if (this.isAlreadyConnected(this.connector)) {
            this.secondaryBtnLabel = undefined;
            this.label = `This account is already linked, change your account in ${this.connector.name}`;
            this.secondaryLabel = `To link a new account, open ${this.connector.name} and switch to the account you want to link`;
        }
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.connector.name ?? 'Unknown',
                platform: 'browser',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet?.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
        this.onConnect = this.onConnectProxy.bind(this);
        this.onAutoConnect = this.onConnectProxy.bind(this);
        this.isWalletConnect = false;
        this.externalViewUnsubscribe.push(ConnectorController/* ConnectorController */.a.subscribeKey('activeConnectorIds', val => {
            const newActiveConnectorId = val[namespace];
            const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
            const { redirectView } = RouterController/* RouterController */.I.state.data ?? {};
            if (newActiveConnectorId !== this.currentActiveConnectorId) {
                if (this.hasMultipleConnections && isMultiWalletEnabled) {
                    RouterController/* RouterController */.I.replace('ProfileWallets');
                    SnackController/* SnackController */.P.showSuccess('New Wallet Added');
                }
                else if (redirectView) {
                    RouterController/* RouterController */.I.replace(redirectView);
                }
                else {
                    ModalController/* ModalController */.W.close();
                }
            }
        }), ConnectionController/* ConnectionController */.x.subscribeKey('connections', this.onConnectionsChange.bind(this)));
    }
    disconnectedCallback() {
        this.externalViewUnsubscribe.forEach(unsubscribe => unsubscribe());
    }
    async onConnectProxy() {
        try {
            this.error = false;
            if (this.connector) {
                if (this.isAlreadyConnected(this.connector)) {
                    return;
                }
                if (this.connector.id !== ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.COINBASE_SDK || !this.error) {
                    await ConnectionController/* ConnectionController */.x.connectExternal(this.connector, this.connector.chain);
                }
            }
        }
        catch (error) {
            const isUserRejectedRequestError = error instanceof withErrorBoundary/* AppKitError */.A &&
                error.originalName === utils_ErrorUtil/* ErrorUtil */.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
            if (isUserRejectedRequestError) {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'USER_REJECTED',
                    properties: { message: error.message }
                });
            }
            else {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'CONNECT_ERROR',
                    properties: { message: error?.message ?? 'Unknown' }
                });
            }
            this.error = true;
        }
    }
    onConnectionsChange(connections) {
        if (this.connector?.chain &&
            connections.get(this.connector.chain) &&
            this.isAlreadyConnected(this.connector)) {
            const newConnections = connections.get(this.connector.chain) ?? [];
            const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
            if (newConnections.length === 0) {
                RouterController/* RouterController */.I.replace('Connect');
            }
            else {
                const accounts = ConnectionControllerUtil/* ConnectionControllerUtil */.b.getConnectionsByConnectorId(this.connectionsByNamespace, this.connector.id).flatMap(c => c.accounts);
                const newAccounts = ConnectionControllerUtil/* ConnectionControllerUtil */.b.getConnectionsByConnectorId(newConnections, this.connector.id).flatMap(c => c.accounts);
                if (newAccounts.length === 0) {
                    if (this.hasMultipleConnections && isMultiWalletEnabled) {
                        RouterController/* RouterController */.I.replace('ProfileWallets');
                        SnackController/* SnackController */.P.showSuccess('Wallet deleted');
                    }
                    else {
                        ModalController/* ModalController */.W.close();
                    }
                }
                else {
                    const isAllAccountsSame = accounts.every(a => newAccounts.some(b => src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(a.address, b.address)));
                    if (!isAllAccountsSame && isMultiWalletEnabled) {
                        RouterController/* RouterController */.I.replace('ProfileWallets');
                    }
                }
            }
        }
    }
    isAlreadyConnected(connector) {
        return (Boolean(connector) &&
            this.connectionsByNamespace.some(c => src_HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(c.connectorId, connector.id)));
    }
};
W3mConnectingExternalView = w3m_connecting_external_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-external-view')
], W3mConnectingExternalView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-multi-chain-view/styles.js

/* harmony default export */ const w3m_connecting_multi_chain_view_styles = ((0,lit/* css */.AH) `
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-multi-chain-view/index.js
var w3m_connecting_multi_chain_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mConnectingMultiChainView = class W3mConnectingMultiChainView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.activeConnector = ConnectorController/* ConnectorController */.a.state.activeConnector;
        this.unsubscribe.push(...[ConnectorController/* ConnectorController */.a.subscribeKey('activeConnector', val => (this.activeConnector = val))]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['3', '5', '5', '5']}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${['0', '3', '0', '3']}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${['2', '0', '2', '0']}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `;
    }
    networksTemplate() {
        return this.activeConnector?.connectors?.map((connector, index) => connector.name
            ? (0,lit/* html */.qy) `
            <w3m-list-wallet
              displayIndex=${index}
              imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getChainImage(connector.chain))}
              name=${ConstantsUtil/* ConstantsUtil */.o.CHAIN_NAME_MAP[connector.chain]}
              @click=${() => this.onConnector(connector)}
              size="sm"
              data-testid="wui-list-chain-${connector.chain}"
              rdnsId=${connector.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `
            : null);
    }
    onConnector(provider) {
        const connector = this.activeConnector?.connectors?.find(p => p.chain === provider.chain);
        const redirectView = RouterController/* RouterController */.I.state.data?.redirectView;
        if (!connector) {
            SnackController/* SnackController */.P.showError('Failed to find connector');
            return;
        }
        if (connector.id === 'walletConnect') {
            if (CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
                RouterController/* RouterController */.I.push('AllWallets');
            }
            else {
                RouterController/* RouterController */.I.push('ConnectingWalletConnect', { redirectView });
            }
        }
        else {
            RouterController/* RouterController */.I.push('ConnectingExternal', {
                connector,
                redirectView,
                wallet: this.activeConnector?.explorerWallet
            });
        }
    }
};
W3mConnectingMultiChainView.styles = w3m_connecting_multi_chain_view_styles;
w3m_connecting_multi_chain_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingMultiChainView.prototype, "activeConnector", void 0);
W3mConnectingMultiChainView = w3m_connecting_multi_chain_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-multi-chain-view')
], W3mConnectingMultiChainView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/MobileWallet.js
var MobileWallet = __webpack_require__(725574);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/CaipNetworkUtil.js
var CaipNetworkUtil = __webpack_require__(974154);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-header/index.js
var w3m_connecting_header_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let W3mConnectingHeader = class W3mConnectingHeader extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.platformTabs = [];
        this.unsubscribe = [];
        this.platforms = [];
        this.onSelectPlatfrom = undefined;
    }
    disconnectCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const tabs = this.generateTabs();
        return (0,lit/* html */.qy) `
      <wui-flex justifyContent="center" .padding=${['0', '0', '4', '0']}>
        <wui-tabs .tabs=${tabs} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `;
    }
    generateTabs() {
        const tabs = this.platforms.map(platform => {
            if (platform === 'browser') {
                return { label: 'Browser', icon: 'extension', platform: 'browser' };
            }
            else if (platform === 'mobile') {
                return { label: 'Mobile', icon: 'mobile', platform: 'mobile' };
            }
            else if (platform === 'qrcode') {
                return { label: 'Mobile', icon: 'mobile', platform: 'qrcode' };
            }
            else if (platform === 'web') {
                return { label: 'Webapp', icon: 'browser', platform: 'web' };
            }
            else if (platform === 'desktop') {
                return { label: 'Desktop', icon: 'desktop', platform: 'desktop' };
            }
            return { label: 'Browser', icon: 'extension', platform: 'unsupported' };
        });
        this.platformTabs = tabs.map(({ platform }) => platform);
        return tabs;
    }
    onTabChange(index) {
        const tab = this.platformTabs[index];
        if (tab) {
            this.onSelectPlatfrom?.(tab);
        }
    }
};
w3m_connecting_header_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], W3mConnectingHeader.prototype, "platforms", void 0);
w3m_connecting_header_decorate([
    (0,decorators/* property */.MZ)()
], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
W3mConnectingHeader = w3m_connecting_header_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-header')
], W3mConnectingHeader);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-browser/index.js
var w3m_connecting_wc_browser_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let W3mConnectingWcBrowser = class W3mConnectingWcBrowser extends W3mConnectingWidget {
    constructor() {
        super();
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-browser: No wallet provided');
        }
        this.onConnect = this.onConnectProxy.bind(this);
        this.onAutoConnect = this.onConnectProxy.bind(this);
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'browser',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    async onConnectProxy() {
        try {
            this.error = false;
            const { connectors } = ConnectorController/* ConnectorController */.a.state;
            const connector = connectors.find(c => (c.type === 'ANNOUNCED' && c.info?.rdns === this.wallet?.rdns) ||
                c.type === 'INJECTED' ||
                c.name === this.wallet?.name);
            if (connector) {
                await ConnectionController/* ConnectionController */.x.connectExternal(connector, connector.chain);
            }
            else {
                throw new Error('w3m-connecting-wc-browser: No connector found');
            }
            ModalController/* ModalController */.W.close();
        }
        catch (error) {
            const isUserRejectedRequestError = error instanceof withErrorBoundary/* AppKitError */.A &&
                error.originalName === utils_ErrorUtil/* ErrorUtil */.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
            if (isUserRejectedRequestError) {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'USER_REJECTED',
                    properties: { message: error.message }
                });
            }
            else {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'CONNECT_ERROR',
                    properties: { message: error?.message ?? 'Unknown' }
                });
            }
            this.error = true;
        }
    }
};
W3mConnectingWcBrowser = w3m_connecting_wc_browser_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-browser')
], W3mConnectingWcBrowser);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js
var w3m_connecting_wc_desktop_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let W3mConnectingWcDesktop = class W3mConnectingWcDesktop extends W3mConnectingWidget {
    constructor() {
        super();
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-desktop: No wallet provided');
        }
        this.onConnect = this.onConnectProxy.bind(this);
        this.onRender = this.onRenderProxy.bind(this);
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'desktop',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    onRenderProxy() {
        if (!this.ready && this.uri) {
            this.ready = true;
            this.onConnect?.();
        }
    }
    onConnectProxy() {
        if (this.wallet?.desktop_link && this.uri) {
            try {
                this.error = false;
                const { desktop_link, name } = this.wallet;
                const { redirect, href } = CoreHelperUtil/* CoreHelperUtil */.w.formatNativeUrl(desktop_link, this.uri);
                ConnectionController/* ConnectionController */.x.setWcLinking({ name, href });
                ConnectionController/* ConnectionController */.x.setRecentWallet(this.wallet);
                CoreHelperUtil/* CoreHelperUtil */.w.openHref(redirect, '_blank');
            }
            catch {
                this.error = true;
            }
        }
    }
};
W3mConnectingWcDesktop = w3m_connecting_wc_desktop_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-desktop')
], W3mConnectingWcDesktop);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js
var w3m_connecting_wc_mobile_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let W3mConnectingWcMobile = class W3mConnectingWcMobile extends W3mConnectingWidget {
    constructor() {
        super();
        this.btnLabelTimeout = undefined;
        this.redirectDeeplink = undefined;
        this.redirectUniversalLink = undefined;
        this.target = undefined;
        this.preferUniversalLinks = OptionsController/* OptionsController */.H.state.experimental_preferUniversalLinks;
        this.isLoading = true;
        this.onConnect = () => {
            ConnectionControllerUtil/* ConnectionControllerUtil */.b.onConnectMobile(this.wallet);
        };
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-mobile: No wallet provided');
        }
        this.secondaryBtnLabel = 'Open';
        this.secondaryLabel = utils_ConstantsUtil/* ConstantsUtil */.oU.CONNECT_LABELS.MOBILE;
        this.secondaryBtnIcon = 'externalLink';
        this.onHandleURI();
        this.unsubscribe.push(ConnectionController/* ConnectionController */.x.subscribeKey('wcUri', () => {
            this.onHandleURI();
        }));
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'mobile',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        clearTimeout(this.btnLabelTimeout);
    }
    onHandleURI() {
        this.isLoading = !this.uri;
        if (!this.ready && this.uri) {
            this.ready = true;
            this.onConnect?.();
        }
    }
    onTryAgain() {
        ConnectionController/* ConnectionController */.x.setWcError(false);
        this.onConnect?.();
    }
};
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "redirectDeeplink", void 0);
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "redirectUniversalLink", void 0);
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "target", void 0);
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "preferUniversalLinks", void 0);
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "isLoading", void 0);
W3mConnectingWcMobile = w3m_connecting_wc_mobile_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-mobile')
], W3mConnectingWcMobile);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-qr-code.js + 3 modules
var wui_qr_code = __webpack_require__(822571);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js

/* harmony default export */ const w3m_connecting_wc_qrcode_styles = ((0,esm_exports/* css */.AH) `
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({ durations }) => durations['xl']};
    animation-timing-function: ${({ easings }) => easings['ease-out-power-2']};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js
var w3m_connecting_wc_qrcode_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let W3mConnectingWcQrcode = class W3mConnectingWcQrcode extends W3mConnectingWidget {
    constructor() {
        super();
        this.basic = false;
    }
    firstUpdated() {
        if (!this.basic) {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'SELECT_WALLET',
                properties: {
                    name: this.wallet?.name ?? 'WalletConnect',
                    platform: 'qrcode',
                    displayIndex: this.wallet?.display_index,
                    walletRank: this.wallet?.order,
                    view: RouterController/* RouterController */.I.state.view
                }
            });
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.forEach(unsub => unsub());
    }
    render() {
        this.onRenderProxy();
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['0', '5', '5', '5']}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
    }
    onRenderProxy() {
        if (!this.ready && this.uri) {
            this.ready = true;
        }
    }
    qrCodeTemplate() {
        if (!this.uri || !this.ready) {
            return null;
        }
        const alt = this.wallet ? this.wallet.name : undefined;
        ConnectionController/* ConnectionController */.x.setWcLinking(undefined);
        ConnectionController/* ConnectionController */.x.setRecentWallet(this.wallet);
        const qrColor = ThemeController/* ThemeController */.W.state.themeVariables['--apkt-qr-color'] ??
            ThemeController/* ThemeController */.W.state.themeVariables['--w3m-qr-color'];
        return (0,lit/* html */.qy) ` <wui-qr-code
      theme=${ThemeController/* ThemeController */.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getWalletImage(this.wallet))}
      color=${(0,if_defined/* ifDefined */.J)(qrColor)}
      alt=${(0,if_defined/* ifDefined */.J)(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
    }
    copyTemplate() {
        const inactive = !this.uri || !this.ready;
        return (0,lit/* html */.qy) `<wui-button
      .disabled=${inactive}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`;
    }
};
W3mConnectingWcQrcode.styles = w3m_connecting_wc_qrcode_styles;
w3m_connecting_wc_qrcode_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mConnectingWcQrcode.prototype, "basic", void 0);
W3mConnectingWcQrcode = w3m_connecting_wc_qrcode_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-qrcode')
], W3mConnectingWcQrcode);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js
var w3m_connecting_wc_unsupported_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.wallet = RouterController/* RouterController */.I.state.data?.wallet;
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-unsupported: No wallet provided');
        }
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'browser',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet?.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['10', '5', '5', '5']}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
    }
};
W3mConnectingWcUnsupported = w3m_connecting_wc_unsupported_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-unsupported')
], W3mConnectingWcUnsupported);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-web/index.js
var w3m_connecting_wc_web_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let W3mConnectingWcWeb = class W3mConnectingWcWeb extends W3mConnectingWidget {
    constructor() {
        super();
        this.isLoading = true;
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-web: No wallet provided');
        }
        this.onConnect = this.onConnectProxy.bind(this);
        this.secondaryBtnLabel = 'Open';
        this.secondaryLabel = utils_ConstantsUtil/* ConstantsUtil */.oU.CONNECT_LABELS.MOBILE;
        this.secondaryBtnIcon = 'externalLink';
        this.updateLoadingState();
        this.unsubscribe.push(ConnectionController/* ConnectionController */.x.subscribeKey('wcUri', () => {
            this.updateLoadingState();
        }));
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'web',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet?.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    updateLoadingState() {
        this.isLoading = !this.uri;
    }
    onConnectProxy() {
        if (this.wallet?.webapp_link && this.uri) {
            try {
                this.error = false;
                const { webapp_link, name } = this.wallet;
                const { redirect, href } = CoreHelperUtil/* CoreHelperUtil */.w.formatUniversalUrl(webapp_link, this.uri);
                ConnectionController/* ConnectionController */.x.setWcLinking({ name, href });
                ConnectionController/* ConnectionController */.x.setRecentWallet(this.wallet);
                CoreHelperUtil/* CoreHelperUtil */.w.openHref(redirect, '_blank');
            }
            catch {
                this.error = true;
            }
        }
    }
};
w3m_connecting_wc_web_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcWeb.prototype, "isLoading", void 0);
W3mConnectingWcWeb = w3m_connecting_wc_web_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-web')
], W3mConnectingWcWeb);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/styles.js

/* harmony default export */ const w3m_connecting_wc_view_styles = ((0,esm_exports/* css */.AH) `
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js
var w3m_connecting_wc_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let W3mConnectingWcView = class W3mConnectingWcView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.wallet = RouterController/* RouterController */.I.state.data?.wallet;
        this.unsubscribe = [];
        this.platform = undefined;
        this.platforms = [];
        this.isSiwxEnabled = Boolean(OptionsController/* OptionsController */.H.state.siwx);
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.displayBranding = true;
        this.basic = false;
        this.determinePlatforms();
        this.initializeConnection();
        this.unsubscribe.push(OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        if (OptionsController/* OptionsController */.H.state.enableMobileFullScreen) {
            this.setAttribute('data-mobile-fullscreen', 'true');
        }
        return (0,lit/* html */.qy) `
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `;
    }
    reownBrandingTemplate() {
        if (!this.remoteFeatures?.reownBranding || !this.displayBranding) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-ux-by-reown></wui-ux-by-reown>`;
    }
    async initializeConnection(retry = false) {
        if (this.platform === 'browser' || (OptionsController/* OptionsController */.H.state.manualWCControl && !retry)) {
            return;
        }
        try {
            const { wcPairingExpiry, status } = ConnectionController/* ConnectionController */.x.state;
            const { redirectView } = RouterController/* RouterController */.I.state.data ?? {};
            if (retry ||
                OptionsController/* OptionsController */.H.state.enableEmbedded ||
                CoreHelperUtil/* CoreHelperUtil */.w.isPairingExpired(wcPairingExpiry) ||
                status === 'connecting') {
                const connectionsByNamespace = ConnectionController/* ConnectionController */.x.getConnections(ChainController/* ChainController */.W.state.activeChain);
                const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
                const hasConnections = connectionsByNamespace.length > 0;
                await ConnectionController/* ConnectionController */.x.connectWalletConnect({ cache: 'never' });
                if (!this.isSiwxEnabled) {
                    if (hasConnections && isMultiWalletEnabled) {
                        RouterController/* RouterController */.I.replace('ProfileWallets');
                        SnackController/* SnackController */.P.showSuccess('New Wallet Added');
                    }
                    else if (redirectView) {
                        RouterController/* RouterController */.I.replace(redirectView);
                    }
                    else {
                        ModalController/* ModalController */.W.close();
                    }
                }
            }
        }
        catch (error) {
            if (error instanceof Error &&
                error.message.includes('An error occurred when attempting to switch chain') &&
                !OptionsController/* OptionsController */.H.state.enableNetworkSwitch) {
                if (ChainController/* ChainController */.W.state.activeChain) {
                    ChainController/* ChainController */.W.setActiveCaipNetwork(CaipNetworkUtil/* CaipNetworksUtil */.R.getUnsupportedNetwork(`${ChainController/* ChainController */.W.state.activeChain}:${ChainController/* ChainController */.W.state.activeCaipNetwork?.id}`));
                    ChainController/* ChainController */.W.showUnsupportedChainUI();
                    return;
                }
            }
            const isUserRejectedRequestError = error instanceof withErrorBoundary/* AppKitError */.A &&
                error.originalName === utils_ErrorUtil/* ErrorUtil */.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
            if (isUserRejectedRequestError) {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'USER_REJECTED',
                    properties: { message: error.message }
                });
            }
            else {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'CONNECT_ERROR',
                    properties: { message: error?.message ?? 'Unknown' }
                });
            }
            ConnectionController/* ConnectionController */.x.setWcError(true);
            SnackController/* SnackController */.P.showError(error.message ?? 'Connection error');
            ConnectionController/* ConnectionController */.x.resetWcConnection();
            RouterController/* RouterController */.I.goBack();
        }
    }
    determinePlatforms() {
        if (!this.wallet) {
            this.platforms.push('qrcode');
            this.platform = 'qrcode';
            return;
        }
        if (this.platform) {
            return;
        }
        const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
        const injectedIds = injected?.map(({ injected_id }) => injected_id).filter(Boolean);
        const browserIds = [...(rdns ? [rdns] : (injectedIds ?? []))];
        const isBrowser = OptionsController/* OptionsController */.H.state.isUniversalProvider ? false : browserIds.length;
        const hasMobileWCLink = mobile_link;
        const isWebWc = webapp_link;
        const isBrowserInstalled = ConnectionController/* ConnectionController */.x.checkInstalled(browserIds);
        const isBrowserWc = isBrowser && isBrowserInstalled;
        const isDesktopWc = desktop_link && !CoreHelperUtil/* CoreHelperUtil */.w.isMobile();
        if (isBrowserWc && !ChainController/* ChainController */.W.state.noAdapters) {
            this.platforms.push('browser');
        }
        if (hasMobileWCLink) {
            this.platforms.push(CoreHelperUtil/* CoreHelperUtil */.w.isMobile() ? 'mobile' : 'qrcode');
        }
        if (isWebWc) {
            this.platforms.push('web');
        }
        if (isDesktopWc) {
            this.platforms.push('desktop');
        }
        const isCustomDeeplinkWallet = MobileWallet/* MobileWalletUtil */.W.isCustomDeeplinkWallet(this.wallet.id, ChainController/* ChainController */.W.state.activeChain);
        if (!isBrowserWc && isBrowser && !ChainController/* ChainController */.W.state.noAdapters && !isCustomDeeplinkWallet) {
            this.platforms.push('unsupported');
        }
        this.platform = this.platforms[0];
    }
    platformTemplate() {
        switch (this.platform) {
            case 'browser':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
            case 'web':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
            case 'desktop':
                return (0,lit/* html */.qy) `
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
            case 'mobile':
                return (0,lit/* html */.qy) `
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
            case 'qrcode':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;
            default:
                return (0,lit/* html */.qy) `<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
        }
    }
    headerTemplate() {
        const multiPlatform = this.platforms.length > 1;
        if (!multiPlatform) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
    }
    async onSelectPlatform(platform) {
        const container = this.shadowRoot?.querySelector('div');
        if (container) {
            await container.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.platform = platform;
            container.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
};
W3mConnectingWcView.styles = w3m_connecting_wc_view_styles;
w3m_connecting_wc_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcView.prototype, "platform", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcView.prototype, "platforms", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcView.prototype, "isSiwxEnabled", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcView.prototype, "remoteFeatures", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mConnectingWcView.prototype, "displayBranding", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mConnectingWcView.prototype, "basic", void 0);
W3mConnectingWcView = w3m_connecting_wc_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-view')
], W3mConnectingWcView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-basic-view/index.js
var w3m_connecting_wc_basic_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mConnectingWcBasicView = class W3mConnectingWcBasicView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.isMobile = CoreHelperUtil/* CoreHelperUtil */.w.isMobile();
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.unsubscribe.push(OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        if (this.isMobile) {
            const { featured, recommended } = ApiController/* ApiController */.N.state;
            const { customWallets } = OptionsController/* OptionsController */.H.state;
            const recent = StorageUtil/* StorageUtil */.i.getRecentWallets();
            const showConnectors = featured.length || recommended.length || customWallets?.length || recent.length;
            return (0,lit/* html */.qy) `<wui-flex flexDirection="column" gap="2" .margin=${['1', '3', '3', '3']}>
        ${showConnectors ? (0,lit/* html */.qy) `<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
        }
        return (0,lit/* html */.qy) `<wui-flex flexDirection="column" .padding=${['0', '0', '4', '0']}>
        <w3m-connecting-wc-view ?basic=${true} .displayBranding=${false}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${['0', '3', '0', '3']}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `;
    }
    reownBrandingTemplate() {
        if (!this.remoteFeatures?.reownBranding) {
            return null;
        }
        return (0,lit/* html */.qy) ` <wui-flex flexDirection="column" .padding=${['1', '0', '1', '0']}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`;
    }
};
w3m_connecting_wc_basic_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcBasicView.prototype, "isMobile", void 0);
w3m_connecting_wc_basic_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcBasicView.prototype, "remoteFeatures", void 0);
W3mConnectingWcBasicView = w3m_connecting_wc_basic_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-basic-view')
], W3mConnectingWcBasicView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/NavigationUtil.js
var NavigationUtil = __webpack_require__(645839);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-choose-account-name-view/styles.js

/* harmony default export */ const w3m_choose_account_name_view_styles = ((0,lit/* css */.AH) `
  .continue-button-container {
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-choose-account-name-view/index.js
var w3m_choose_account_name_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let W3mChooseAccountNameView = class W3mChooseAccountNameView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.loading = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${['0', '0', '4', '0']}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(NavigationUtil/* NavigationUtil */.T.URLS.FAQ, '_blank');
        }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
    }
    onboardingTemplate() {
        return (0,lit/* html */.qy) ` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${['0', '6', '0', '6']}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`;
    }
    buttonsTemplate() {
        return (0,lit/* html */.qy) `<wui-flex
      .padding=${['0', '8', '0', '8']}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`;
    }
    handleContinue() {
        RouterController/* RouterController */.I.push('RegisterAccountName');
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'OPEN_ENS_FLOW',
            properties: {
                isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                    W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
            }
        });
    }
};
W3mChooseAccountNameView.styles = w3m_choose_account_name_view_styles;
w3m_choose_account_name_view_decorate([
    (0,decorators/* state */.wk)()
], W3mChooseAccountNameView.prototype, "loading", void 0);
W3mChooseAccountNameView = w3m_choose_account_name_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-choose-account-name-view')
], W3mChooseAccountNameView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js
var w3m_downloads_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mDownloadsView = class W3mDownloadsView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.wallet = RouterController/* RouterController */.I.state.data?.wallet;
    }
    render() {
        if (!this.wallet) {
            throw new Error('w3m-downloads-view');
        }
        return (0,lit/* html */.qy) `
      <wui-flex gap="2" flexDirection="column" .padding=${['3', '3', '4', '3']}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
    }
    chromeTemplate() {
        if (!this.wallet?.chrome_store) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`;
    }
    iosTemplate() {
        if (!this.wallet?.app_store) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`;
    }
    androidTemplate() {
        if (!this.wallet?.play_store) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`;
    }
    homepageTemplate() {
        if (!this.wallet?.homepage) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `;
    }
    openStore(params) {
        if (params.href && this.wallet) {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'GET_WALLET',
                properties: {
                    name: this.wallet.name,
                    walletRank: this.wallet.order,
                    explorerId: this.wallet.id,
                    type: params.type
                }
            });
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(params.href, '_blank');
        }
    }
    onChromeStore() {
        if (this.wallet?.chrome_store) {
            this.openStore({ href: this.wallet.chrome_store, type: 'chrome_store' });
        }
    }
    onAppStore() {
        if (this.wallet?.app_store) {
            this.openStore({ href: this.wallet.app_store, type: 'app_store' });
        }
    }
    onPlayStore() {
        if (this.wallet?.play_store) {
            this.openStore({ href: this.wallet.play_store, type: 'play_store' });
        }
    }
    onHomePage() {
        if (this.wallet?.homepage) {
            this.openStore({ href: this.wallet.homepage, type: 'homepage' });
        }
    }
};
W3mDownloadsView = w3m_downloads_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-downloads-view')
], W3mDownloadsView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-get-wallet-view/index.js
var w3m_get_wallet_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const EXPLORER = 'https://walletconnect.com/explorer';
let W3mGetWalletView = class W3mGetWalletView extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['0', '3', '3', '3']} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${() => {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref('https://walletconnect.com/explorer?type=wallet', '_blank');
        }}
        ></w3m-list-wallet>
      </wui-flex>
    `;
    }
    recommendedWalletsTemplate() {
        const { recommended, featured } = ApiController/* ApiController */.N.state;
        const { customWallets } = OptionsController/* OptionsController */.H.state;
        const wallets = [...featured, ...(customWallets ?? []), ...recommended].slice(0, 4);
        return wallets.map((wallet, index) => (0,lit/* html */.qy) `
        <w3m-list-wallet
          displayIndex=${index}
          name=${wallet.name ?? 'Unknown'}
          tagVariant="accent"
          size="sm"
          imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getWalletImage(wallet))}
          @click=${() => {
            this.onWalletClick(wallet);
        }}
        ></w3m-list-wallet>
      `);
    }
    onWalletClick(wallet) {
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'GET_WALLET',
            properties: {
                name: wallet.name,
                walletRank: undefined,
                explorerId: wallet.id,
                type: 'homepage'
            }
        });
        CoreHelperUtil/* CoreHelperUtil */.w.openHref(wallet.homepage ?? EXPLORER, '_blank');
    }
};
W3mGetWalletView = w3m_get_wallet_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-get-wallet-view')
], W3mGetWalletView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-visual.js + 22 modules
var wui_visual = __webpack_require__(315795);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-help-widget/index.js
var w3m_help_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mHelpWidget = class W3mHelpWidget extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(item => (0,lit/* html */.qy) `
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${item.images.map(image => (0,lit/* html */.qy) `<wui-visual size="sm" name=${image}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${item.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${item.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `;
    }
};
w3m_help_widget_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], W3mHelpWidget.prototype, "data", void 0);
W3mHelpWidget = w3m_help_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-help-widget')
], W3mHelpWidget);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-what-is-a-wallet-view/index.js
var w3m_what_is_a_wallet_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const data = [
    {
        images: ['login', 'profile', 'lock'],
        title: 'One login for all of web3',
        text: 'Log in to any app by connecting your wallet. Say goodbye to countless passwords!'
    },
    {
        images: ['defi', 'nft', 'eth'],
        title: 'A home for your digital assets',
        text: 'A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.'
    },
    {
        images: ['browser', 'noun', 'dao'],
        title: 'Your gateway to a new web',
        text: 'With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.'
    }
];
let W3mWhatIsAWalletView = class W3mWhatIsAWalletView extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        .padding=${['6', '5', '5', '5']}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
    }
    onGetWallet() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_GET_WALLET_HELP' });
        RouterController/* RouterController */.I.push('GetWallet');
    }
};
W3mWhatIsAWalletView = w3m_what_is_a_wallet_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-what-is-a-wallet-view')
], W3mWhatIsAWalletView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-wallets-view/styles.js

/* harmony default export */ const w3m_connect_wallets_view_styles = ((0,esm_exports/* css */.AH) `
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-wallets-view/index.js
var w3m_connect_wallets_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mConnectWalletsView = class W3mConnectWalletsView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.checked = OptionsStateController/* OptionsStateController */.o.state.isLegalCheckboxChecked;
        this.unsubscribe.push(OptionsStateController/* OptionsStateController */.o.subscribeKey('isLegalCheckboxChecked', val => {
            this.checked = val;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const { termsConditionsUrl, privacyPolicyUrl } = OptionsController/* OptionsController */.H.state;
        const legalCheckbox = OptionsController/* OptionsController */.H.state.features?.legalCheckbox;
        const legalUrl = termsConditionsUrl || privacyPolicyUrl;
        const showLegalCheckbox = Boolean(legalUrl) && Boolean(legalCheckbox);
        const disabled = showLegalCheckbox && !this.checked;
        const tabIndex = disabled ? -1 : undefined;
        return (0,lit/* html */.qy) `
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${showLegalCheckbox ? ['0', '3', '3', '3'] : '3'}
        gap="2"
        class=${(0,if_defined/* ifDefined */.J)(disabled ? 'disabled' : undefined)}
      >
        <w3m-wallet-login-list tabIdx=${(0,if_defined/* ifDefined */.J)(tabIndex)}></w3m-wallet-login-list>
      </wui-flex>
    `;
    }
};
W3mConnectWalletsView.styles = w3m_connect_wallets_view_styles;
w3m_connect_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectWalletsView.prototype, "checked", void 0);
W3mConnectWalletsView = w3m_connect_wallets_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connect-wallets-view')
], W3mConnectWalletsView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js
var SIWXUtil = __webpack_require__(801122);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-hexagon/styles.js

/* harmony default export */ const wui_loading_hexagon_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${tokens => tokens.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-hexagon/index.js
var wui_loading_hexagon_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let WuiLoadingHexagon = class WuiLoadingHexagon extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `;
    }
};
WuiLoadingHexagon.styles = [ThemeUtil/* resetStyles */.W5, wui_loading_hexagon_styles];
WuiLoadingHexagon = wui_loading_hexagon_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-loading-hexagon')
], WuiLoadingHexagon);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-hexagon.js

//# sourceMappingURL=wui-loading-hexagon.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-network-image.js + 4 modules
var wui_network_image = __webpack_require__(646727);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-network-switch-view/styles.js

/* harmony default export */ const w3m_network_switch_view_styles = ((0,lit/* css */.AH) `
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-network-switch-view/index.js
var w3m_network_switch_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let W3mNetworkSwitchView = class W3mNetworkSwitchView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.network = RouterController/* RouterController */.I.state.data?.network;
        this.unsubscribe = [];
        this.showRetry = false;
        this.error = false;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    firstUpdated() {
        this.onSwitchNetwork();
    }
    render() {
        if (!this.network) {
            throw new Error('w3m-network-switch-view: No network provided');
        }
        this.onShowRetry();
        const label = this.getLabel();
        const subLabel = this.getSubLabel();
        return (0,lit/* html */.qy) `
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${['10', '5', '10', '5']}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : (0,lit/* html */.qy) `<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${label}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
    }
    getSubLabel() {
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(ChainController/* ChainController */.W.state.activeChain);
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        if (authConnector && connectorId === ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH) {
            return '';
        }
        return this.error
            ? 'Switch can be declined if chain is not supported by a wallet or previous request is still active'
            : 'Accept connection request in your wallet';
    }
    getLabel() {
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(ChainController/* ChainController */.W.state.activeChain);
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        if (authConnector && connectorId === ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH) {
            return `Switching to ${this.network?.name ?? 'Unknown'} network...`;
        }
        return this.error ? 'Switch declined' : 'Approve in wallet';
    }
    onShowRetry() {
        if (this.error && !this.showRetry) {
            this.showRetry = true;
            const retryButton = this.shadowRoot?.querySelector('wui-button');
            retryButton?.animate([{ opacity: 0 }, { opacity: 1 }], {
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    async onSwitchNetwork() {
        try {
            this.error = false;
            if (ChainController/* ChainController */.W.state.activeChain !== this.network?.chainNamespace) {
                ChainController/* ChainController */.W.setIsSwitchingNamespace(true);
            }
            if (this.network) {
                await ChainController/* ChainController */.W.switchActiveNetwork(this.network);
                const isAuthenticated = await SIWXUtil/* SIWXUtil */.U.isAuthenticated();
                if (isAuthenticated) {
                    RouterController/* RouterController */.I.goBack();
                }
            }
        }
        catch (error) {
            this.error = true;
        }
    }
};
W3mNetworkSwitchView.styles = w3m_network_switch_view_styles;
w3m_network_switch_view_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworkSwitchView.prototype, "showRetry", void 0);
w3m_network_switch_view_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworkSwitchView.prototype, "error", void 0);
W3mNetworkSwitchView = w3m_network_switch_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-network-switch-view')
], W3mNetworkSwitchView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/NetworkUtil.js
var NetworkUtil = __webpack_require__(458751);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-input-text.js
var exports_wui_input_text = __webpack_require__(472270);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-network/styles.js

/* harmony default export */ const wui_list_network_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing }) => spacing[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-network/index.js
var wui_list_network_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiListNetwork = class WuiListNetwork extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.imageSrc = undefined;
        this.name = 'Ethereum';
        this.disabled = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled} tabindex=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `;
    }
    imageTemplate() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image ?boxed=${true} src=${this.imageSrc}></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-image
      ?boxed=${true}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`;
    }
};
WuiListNetwork.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_list_network_styles];
wui_list_network_decorate([
    (0,decorators/* property */.MZ)()
], WuiListNetwork.prototype, "imageSrc", void 0);
wui_list_network_decorate([
    (0,decorators/* property */.MZ)()
], WuiListNetwork.prototype, "name", void 0);
wui_list_network_decorate([
    (0,decorators/* property */.MZ)()
], WuiListNetwork.prototype, "tabIdx", void 0);
wui_list_network_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListNetwork.prototype, "disabled", void 0);
WuiListNetwork = wui_list_network_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-list-network')
], WuiListNetwork);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-network.js

//# sourceMappingURL=wui-list-network.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-networks-view/styles.js

/* harmony default export */ const w3m_networks_view_styles = ((0,lit/* css */.AH) `
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-networks-view/index.js
var w3m_networks_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let W3mNetworksView = class W3mNetworksView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.network = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.requestedCaipNetworks = ChainController/* ChainController */.W.getCaipNetworks();
        this.search = '';
        this.onDebouncedSearch = CoreHelperUtil/* CoreHelperUtil */.w.debounce((value) => {
            this.search = value;
        }, 100);
        this.unsubscribe.push(AssetController/* AssetController */.j.subscribeNetworkImages(() => this.requestUpdate()), ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => (this.network = val)), ChainController/* ChainController */.W.subscribe(() => {
            this.requestedCaipNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${['0', '3', '3', '3']}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `;
    }
    templateSearchInput() {
        return (0,lit/* html */.qy) `
      <wui-flex gap="2" .padding=${['0', '3', '3', '3']}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
    }
    onInputChange(event) {
        this.onDebouncedSearch(event.detail);
    }
    networksTemplate() {
        const approvedCaipNetworkIds = ChainController/* ChainController */.W.getAllApprovedCaipNetworkIds();
        const sortedNetworks = CoreHelperUtil/* CoreHelperUtil */.w.sortRequestedNetworks(approvedCaipNetworkIds, this.requestedCaipNetworks);
        if (this.search) {
            this.filteredNetworks = sortedNetworks?.filter(network => network?.name?.toLowerCase().includes(this.search.toLowerCase()));
        }
        else {
            this.filteredNetworks = sortedNetworks;
        }
        return this.filteredNetworks?.map(network => (0,lit/* html */.qy) `
        <wui-list-network
          .selected=${this.network?.id === network.id}
          imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(network))}
          type="network"
          name=${network.name ?? network.id}
          @click=${() => this.onSwitchNetwork(network)}
          .disabled=${ChainController/* ChainController */.W.isCaipNetworkDisabled(network)}
          data-testid=${`w3m-network-switch-${network.name ?? network.id}`}
        ></wui-list-network>
      `);
    }
    onSwitchNetwork(network) {
        NetworkUtil/* NetworkUtil */.L.onSwitchNetwork({ network });
    }
};
W3mNetworksView.styles = w3m_networks_view_styles;
w3m_networks_view_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworksView.prototype, "network", void 0);
w3m_networks_view_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworksView.prototype, "requestedCaipNetworks", void 0);
w3m_networks_view_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworksView.prototype, "filteredNetworks", void 0);
w3m_networks_view_decorate([
    (0,decorators/* state */.wk)()
], W3mNetworksView.prototype, "search", void 0);
W3mNetworksView = w3m_networks_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-networks-view')
], W3mNetworksView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-switch-active-chain-view/styles.js

/* harmony default export */ const w3m_switch_active_chain_view_styles = ((0,esm_exports/* css */.AH) `
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({ borderRadius }) => borderRadius['1']} * 9 - ${({ borderRadius }) => borderRadius['3']}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({ borderRadius }) => borderRadius['1']} * 9 - ${({ borderRadius }) => borderRadius['3']}
    );
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing }) => spacing['1']} * -1);
    bottom: calc(${({ spacing }) => spacing['1']} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      transform ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing }) => spacing['4']};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings }) => easings['ease-out-power-2']} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({ spacing }) => spacing['01']} ${({ spacing }) => spacing['2']};
  }

  .capitalize {
    text-transform: capitalize;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-switch-active-chain-view/index.js
var w3m_switch_active_chain_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const chainIconNameMap = {
    eip155: 'eth',
    solana: 'solana',
    bip122: 'bitcoin',
    polkadot: undefined
};
let W3mSwitchActiveChainView = class W3mSwitchActiveChainView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.unsubscribe = [];
        this.switchToChain = RouterController/* RouterController */.I.state.data?.switchToChain;
        this.caipNetwork = RouterController/* RouterController */.I.state.data?.network;
        this.activeChain = ChainController/* ChainController */.W.state.activeChain;
    }
    firstUpdated() {
        this.unsubscribe.push(ChainController/* ChainController */.W.subscribeKey('activeChain', val => (this.activeChain = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const switchedChainNameString = this.switchToChain
            ? ConstantsUtil/* ConstantsUtil */.o.CHAIN_NAME_MAP[this.switchToChain]
            : 'supported';
        if (!this.switchToChain) {
            return null;
        }
        const nextChainName = ConstantsUtil/* ConstantsUtil */.o.CHAIN_NAME_MAP[this.switchToChain];
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['4', '2', '2', '2']}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${(0,if_defined/* ifDefined */.J)(chainIconNameMap[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${nextChainName}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${nextChainName}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${switchedChainNameString} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `;
    }
    async switchActiveChain() {
        if (!this.switchToChain) {
            return;
        }
        ChainController/* ChainController */.W.setIsSwitchingNamespace(true);
        ConnectorController/* ConnectorController */.a.setFilterByNamespace(this.switchToChain);
        if (this.caipNetwork) {
            await ChainController/* ChainController */.W.switchActiveNetwork(this.caipNetwork);
        }
        else {
            ChainController/* ChainController */.W.setActiveNamespace(this.switchToChain);
        }
        RouterController/* RouterController */.I.reset('Connect');
    }
};
W3mSwitchActiveChainView.styles = w3m_switch_active_chain_view_styles;
w3m_switch_active_chain_view_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwitchActiveChainView.prototype, "activeChain", void 0);
W3mSwitchActiveChainView = w3m_switch_active_chain_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-switch-active-chain-view')
], W3mSwitchActiveChainView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-what-is-a-network-view/index.js
var w3m_what_is_a_network_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const w3m_what_is_a_network_view_data = [
    {
        images: ['network', 'layers', 'system'],
        title: 'The system’s nuts and bolts',
        text: 'A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.'
    },
    {
        images: ['noun', 'defiAlt', 'dao'],
        title: 'Designed for different uses',
        text: 'Each network is designed differently, and may therefore suit certain apps and experiences.'
    }
];
let W3mWhatIsANetworkView = class W3mWhatIsANetworkView extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        .padding=${['6', '5', '5', '5']}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${w3m_what_is_a_network_view_data}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${() => {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref('https://ethereum.org/en/developers/docs/networks/', '_blank');
        }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
    }
};
W3mWhatIsANetworkView = w3m_what_is_a_network_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-what-is-a-network-view')
], W3mWhatIsANetworkView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-unsupported-chain-view/styles.js

/* harmony default export */ const w3m_unsupported_chain_view_styles = ((0,lit/* css */.AH) `
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-unsupported-chain-view/index.js
var w3m_unsupported_chain_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let W3mUnsupportedChainView = class W3mUnsupportedChainView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.swapUnsupportedChain = RouterController/* RouterController */.I.state.data?.swapUnsupportedChain;
        this.unsubscribe = [];
        this.disconnecting = false;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.unsubscribe.push(AssetController/* AssetController */.j.subscribeNetworkImages(() => this.requestUpdate()), OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => {
            this.remoteFeatures = val;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${['3', '5', '2', '5']}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    descriptionTemplate() {
        if (this.swapUnsupportedChain) {
            return (0,lit/* html */.qy) `
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `;
        }
        return (0,lit/* html */.qy) `
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
    }
    networksTemplate() {
        const requestedCaipNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const approvedCaipNetworkIds = ChainController/* ChainController */.W.getAllApprovedCaipNetworkIds();
        const sortedNetworks = CoreHelperUtil/* CoreHelperUtil */.w.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        const filteredNetworks = this.swapUnsupportedChain
            ? sortedNetworks.filter(network => utils_ConstantsUtil/* ConstantsUtil */.oU.SWAP_SUPPORTED_NETWORKS.includes(network.caipNetworkId))
            : sortedNetworks;
        return filteredNetworks.map(network => (0,lit/* html */.qy) `
        <wui-list-network
          imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(network))}
          name=${network.name ?? 'Unknown'}
          @click=${() => this.onSwitchNetwork(network)}
        >
        </wui-list-network>
      `);
    }
    async onDisconnect() {
        try {
            this.disconnecting = true;
            const namespace = ChainController/* ChainController */.W.state.activeChain;
            const connectionsByNamespace = ConnectionController/* ConnectionController */.x.getConnections(namespace);
            const hasConnections = connectionsByNamespace.length > 0;
            const connectorId = namespace && ConnectorController/* ConnectorController */.a.state.activeConnectorIds[namespace];
            const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
            await ConnectionController/* ConnectionController */.x.disconnect(isMultiWalletEnabled ? { id: connectorId, namespace } : {});
            if (hasConnections && isMultiWalletEnabled) {
                RouterController/* RouterController */.I.push('ProfileWallets');
                SnackController/* SnackController */.P.showSuccess('Wallet deleted');
            }
        }
        catch {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'DISCONNECT_ERROR',
                properties: { message: 'Failed to disconnect' }
            });
            SnackController/* SnackController */.P.showError('Failed to disconnect');
        }
        finally {
            this.disconnecting = false;
        }
    }
    async onSwitchNetwork(network) {
        const caipAddress = ChainController/* ChainController */.W.getActiveCaipAddress();
        const approvedCaipNetworkIds = ChainController/* ChainController */.W.getAllApprovedCaipNetworkIds();
        const shouldSupportAllNetworks = ChainController/* ChainController */.W.getNetworkProp('supportsAllNetworks', network.chainNamespace);
        const routerData = RouterController/* RouterController */.I.state.data;
        if (caipAddress) {
            if (approvedCaipNetworkIds?.includes(network.caipNetworkId)) {
                await ChainController/* ChainController */.W.switchActiveNetwork(network);
            }
            else if (shouldSupportAllNetworks) {
                RouterController/* RouterController */.I.push('SwitchNetwork', { ...routerData, network });
            }
            else {
                RouterController/* RouterController */.I.push('SwitchNetwork', { ...routerData, network });
            }
        }
        else if (!caipAddress) {
            ChainController/* ChainController */.W.setActiveCaipNetwork(network);
            RouterController/* RouterController */.I.push('Connect');
        }
    }
};
W3mUnsupportedChainView.styles = w3m_unsupported_chain_view_styles;
w3m_unsupported_chain_view_decorate([
    (0,decorators/* state */.wk)()
], W3mUnsupportedChainView.prototype, "disconnecting", void 0);
w3m_unsupported_chain_view_decorate([
    (0,decorators/* state */.wk)()
], W3mUnsupportedChainView.prototype, "remoteFeatures", void 0);
W3mUnsupportedChainView = w3m_unsupported_chain_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-unsupported-chain-view')
], W3mUnsupportedChainView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-banner/styles.js

/* harmony default export */ const wui_banner_styles = ((0,ThemeHelperUtil/* css */.AH) `
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    padding: ${({ spacing }) => spacing[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({ tokens }) => tokens.theme.textSecondary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({ tokens }) => tokens.core.textSuccess};
    background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({ tokens }) => tokens.core.textError};
    background-color: ${({ tokens }) => tokens.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({ tokens }) => tokens.core.textWarning};
    background-color: ${({ tokens }) => tokens.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({ tokens }) => tokens.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-banner/index.js
var wui_banner_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiBanner = class WuiBanner extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.icon = 'externalLink';
        this.text = '';
        this.type = 'info';
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `;
    }
};
WuiBanner.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_banner_styles];
wui_banner_decorate([
    (0,decorators/* property */.MZ)()
], WuiBanner.prototype, "icon", void 0);
wui_banner_decorate([
    (0,decorators/* property */.MZ)()
], WuiBanner.prototype, "text", void 0);
wui_banner_decorate([
    (0,decorators/* property */.MZ)()
], WuiBanner.prototype, "type", void 0);
WuiBanner = wui_banner_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-banner')
], WuiBanner);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-banner.js

//# sourceMappingURL=wui-banner.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-compatible-networks-view/styles.js

/* harmony default export */ const w3m_wallet_compatible_networks_view_styles = ((0,lit/* css */.AH) `
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-compatible-networks-view/index.js
var w3m_wallet_compatible_networks_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mWalletCompatibleNetworksView = class W3mWalletCompatibleNetworksView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) ` <wui-flex flexDirection="column" .padding=${['2', '3', '3', '3']} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
    }
    networkTemplate() {
        const requestedCaipNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const approvedCaipNetworkIds = ChainController/* ChainController */.W.getAllApprovedCaipNetworkIds();
        const caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
        const isNetworkEnabledForSmartAccounts = ChainController/* ChainController */.W.checkIfSmartAccountEnabled();
        let sortedNetworks = CoreHelperUtil/* CoreHelperUtil */.w.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        if (isNetworkEnabledForSmartAccounts &&
            (0,ChainControllerUtil/* getPreferredAccountType */.lj)(caipNetwork?.chainNamespace) ===
                W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT) {
            if (!caipNetwork) {
                return null;
            }
            sortedNetworks = [caipNetwork];
        }
        const namespaceNetworks = sortedNetworks.filter(network => network.chainNamespace === caipNetwork?.chainNamespace);
        return namespaceNetworks.map(network => (0,lit/* html */.qy) `
        <wui-list-network
          imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(network))}
          name=${network.name ?? 'Unknown'}
          ?transparent=${true}
        >
        </wui-list-network>
      `);
    }
};
W3mWalletCompatibleNetworksView.styles = w3m_wallet_compatible_networks_view_styles;
W3mWalletCompatibleNetworksView = w3m_wallet_compatible_networks_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-wallet-compatible-networks-view')
], W3mWalletCompatibleNetworksView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-visual-thumbnail/styles.js

/* harmony default export */ const wui_visual_thumbnail_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({ tokens }) => tokens.theme.borderPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-visual-thumbnail/index.js
var wui_visual_thumbnail_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiVisualThumbnail = class WuiVisualThumbnail extends lit/* LitElement */.WF {
    render() {
        this.dataset['borderRadiusFull'] = this.borderRadiusFull ? 'true' : 'false';
        return (0,lit/* html */.qy) `${this.templateVisual()}`;
    }
    templateVisual() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.alt ?? ''}></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`;
    }
};
WuiVisualThumbnail.styles = [ThemeUtil/* resetStyles */.W5, wui_visual_thumbnail_styles];
wui_visual_thumbnail_decorate([
    (0,decorators/* property */.MZ)()
], WuiVisualThumbnail.prototype, "imageSrc", void 0);
wui_visual_thumbnail_decorate([
    (0,decorators/* property */.MZ)()
], WuiVisualThumbnail.prototype, "alt", void 0);
wui_visual_thumbnail_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiVisualThumbnail.prototype, "borderRadiusFull", void 0);
WuiVisualThumbnail = wui_visual_thumbnail_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-visual-thumbnail')
], WuiVisualThumbnail);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-visual-thumbnail.js

//# sourceMappingURL=wui-visual-thumbnail.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-siwx-sign-message-thumbnails/styles.js

/* harmony default export */ const w3m_siwx_sign_message_thumbnails_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: flex;
    justify-content: center;
    gap: ${({ spacing }) => spacing['4']};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-siwx-sign-message-thumbnails/index.js
var w3m_siwx_sign_message_thumbnails_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let W3mSIWXSignMessageThumbnails = class W3mSIWXSignMessageThumbnails extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.dappImageUrl = OptionsController/* OptionsController */.H.state.metadata?.icons;
        this.walletImageUrl = ChainController/* ChainController */.W.getAccountData()?.connectedWalletInfo?.icon;
    }
    firstUpdated() {
        const visuals = this.shadowRoot?.querySelectorAll('wui-visual-thumbnail');
        if (visuals?.[0]) {
            this.createAnimation(visuals[0], 'translate(18px)');
        }
        if (visuals?.[1]) {
            this.createAnimation(visuals[1], 'translate(-18px)');
        }
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-visual-thumbnail
        ?borderRadiusFull=${true}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `;
    }
    createAnimation(element, translation) {
        element.animate([{ transform: 'translateX(0px)' }, { transform: translation }], {
            duration: 1600,
            easing: 'cubic-bezier(0.56, 0, 0.48, 1)',
            direction: 'alternate',
            iterations: Infinity
        });
    }
};
W3mSIWXSignMessageThumbnails.styles = w3m_siwx_sign_message_thumbnails_styles;
W3mSIWXSignMessageThumbnails = w3m_siwx_sign_message_thumbnails_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-siwx-sign-message-thumbnails')
], W3mSIWXSignMessageThumbnails);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-siwx-sign-message-view/index.js
var w3m_siwx_sign_message_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mSIWXSignMessageView = class W3mSIWXSignMessageView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.dappName = OptionsController/* OptionsController */.H.state.metadata?.name;
        this.isCancelling = false;
        this.isSigning = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex justifyContent="center" .padding=${['8', '0', '6', '0']}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${['0', '20', '5', '20']} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName ?? 'Dapp'} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${['0', '10', '4', '10']} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${['4', '5', '5', '5']} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling ? 'Cancelling...' : 'Cancel'}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? 'Signing...' : 'Sign'}
        </wui-button>
      </wui-flex>
    `;
    }
    async onSign() {
        this.isSigning = true;
        try {
            await SIWXUtil/* SIWXUtil */.U.requestSignMessage();
        }
        catch (error) {
            if (error instanceof Error && error.message.includes('OTP is required')) {
                SnackController/* SnackController */.P.showError({
                    message: 'Something went wrong. We need to verify your account again.'
                });
                RouterController/* RouterController */.I.replace('DataCapture');
                return;
            }
            throw error;
        }
        finally {
            this.isSigning = false;
        }
    }
    async onCancel() {
        this.isCancelling = true;
        await SIWXUtil/* SIWXUtil */.U.cancelSignMessage().finally(() => (this.isCancelling = false));
    }
};
w3m_siwx_sign_message_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSIWXSignMessageView.prototype, "isCancelling", void 0);
w3m_siwx_sign_message_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSIWXSignMessageView.prototype, "isSigning", void 0);
W3mSIWXSignMessageView = w3m_siwx_sign_message_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-siwx-sign-message-view')
], W3mSIWXSignMessageView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/index.js




























//# sourceMappingURL=index.js.map

/***/ },

/***/ 316854
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiEmailInput

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/index.js + 1 modules
var wui_input_text = __webpack_require__(565760);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-email-input/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-email-input/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiEmailInput = class WuiEmailInput extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `;
    }
    templateError() {
        if (this.errorMessage) {
            return (0,lit/* html */.qy) `<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`;
        }
        return null;
    }
};
WuiEmailInput.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiEmailInput.prototype, "errorMessage", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiEmailInput.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiEmailInput.prototype, "value", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiEmailInput.prototype, "tabIdx", void 0);
WuiEmailInput = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-email-input')
], WuiEmailInput);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-email-input.js

//# sourceMappingURL=wui-email-input.js.map

/***/ },

/***/ 995797
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiListSocial

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo/index.js + 1 modules
var wui_logo = __webpack_require__(385589);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-social/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing }) => spacing[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-social/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiListSocial = class WuiListSocial extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.logo = 'google';
        this.name = 'Continue with google';
        this.disabled = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled} tabindex=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${true} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `;
    }
};
WuiListSocial.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListSocial.prototype, "logo", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListSocial.prototype, "name", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiListSocial.prototype, "tabIdx", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListSocial.prototype, "disabled", void 0);
WuiListSocial = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-list-social')
], WuiListSocial);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-social.js

//# sourceMappingURL=wui-list-social.js.map

/***/ },

/***/ 822571
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiQrCode

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var wui_flex = __webpack_require__(293511);
// EXTERNAL MODULE: ./node_modules/qrcode/lib/browser.js
var browser = __webpack_require__(887583);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/QrCode.js


const CONNECTING_ERROR_MARGIN = 0.1;
const CIRCLE_SIZE_MODIFIER = 2.5;
const QRCODE_MATRIX_MARGIN = 7;
function isAdjecentDots(cy, otherCy, cellSize) {
    if (cy === otherCy) {
        return false;
    }
    const diff = cy - otherCy < 0 ? otherCy - cy : cy - otherCy;
    return diff <= cellSize + CONNECTING_ERROR_MARGIN;
}
function getMatrix(value, errorCorrectionLevel) {
    const arr = Array.prototype.slice.call(browser.create(value, { errorCorrectionLevel }).modules.data, 0);
    const sqrt = Math.sqrt(arr.length);
    return arr.reduce((rows, key, index) => (index % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
}
const QrCodeUtil = {
    generate({ uri, size, logoSize, padding = 8, dotColor = 'var(--apkt-colors-black)' }) {
        const strokeWidth = 10;
        const dots = [];
        const matrix = getMatrix(uri, 'Q');
        const cellSize = (size - 2 * padding) / matrix.length;
        const qrList = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 }
        ];
        qrList.forEach(({ x, y }) => {
            const x1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * x + padding;
            const y1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * y + padding;
            const borderRadius = 0.45;
            for (let i = 0; i < qrList.length; i += 1) {
                const dotSize = cellSize * (QRCODE_MATRIX_MARGIN - i * 2);
                dots.push((0,lit/* svg */.JW) `
            <rect
              fill=${i === 2 ? 'var(--apkt-colors-black)' : 'var(--apkt-colors-white)'}
              width=${i === 0 ? dotSize - strokeWidth : dotSize}
              rx= ${i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              ry= ${i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              stroke=${dotColor}
              stroke-width=${i === 0 ? strokeWidth : 0}
              height=${i === 0 ? dotSize - strokeWidth : dotSize}
              x= ${i === 0 ? y1 + cellSize * i + strokeWidth / 2 : y1 + cellSize * i}
              y= ${i === 0 ? x1 + cellSize * i + strokeWidth / 2 : x1 + cellSize * i}
            />
          `);
            }
        });
        const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
        const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
        const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
        const circles = [];
        matrix.forEach((row, i) => {
            row.forEach((_, j) => {
                if (matrix[i][j]) {
                    if (!((i < QRCODE_MATRIX_MARGIN && j < QRCODE_MATRIX_MARGIN) ||
                        (i > matrix.length - (QRCODE_MATRIX_MARGIN + 1) && j < QRCODE_MATRIX_MARGIN) ||
                        (i < QRCODE_MATRIX_MARGIN && j > matrix.length - (QRCODE_MATRIX_MARGIN + 1)))) {
                        if (!(i > matrixMiddleStart &&
                            i < matrixMiddleEnd &&
                            j > matrixMiddleStart &&
                            j < matrixMiddleEnd)) {
                            const cx = i * cellSize + cellSize / 2 + padding;
                            const cy = j * cellSize + cellSize / 2 + padding;
                            circles.push([cx, cy]);
                        }
                    }
                }
            });
        });
        const circlesToConnect = {};
        circles.forEach(([cx, cy]) => {
            if (circlesToConnect[cx]) {
                circlesToConnect[cx]?.push(cy);
            }
            else {
                circlesToConnect[cx] = [cy];
            }
        });
        Object.entries(circlesToConnect)
            .map(([cx, cys]) => {
            const newCys = cys.filter(cy => cys.every(otherCy => !isAdjecentDots(cy, otherCy, cellSize)));
            return [Number(cx), newCys];
        })
            .forEach(([cx, cys]) => {
            cys.forEach(cy => {
                dots.push((0,lit/* svg */.JW) `<circle cx=${cx} cy=${cy} fill=${dotColor} r=${cellSize / CIRCLE_SIZE_MODIFIER} />`);
            });
        });
        Object.entries(circlesToConnect)
            .filter(([_, cys]) => cys.length > 1)
            .map(([cx, cys]) => {
            const newCys = cys.filter(cy => cys.some(otherCy => isAdjecentDots(cy, otherCy, cellSize)));
            return [Number(cx), newCys];
        })
            .map(([cx, cys]) => {
            cys.sort((a, b) => (a < b ? -1 : 1));
            const groups = [];
            for (const cy of cys) {
                const group = groups.find(item => item.some(otherCy => isAdjecentDots(cy, otherCy, cellSize)));
                if (group) {
                    group.push(cy);
                }
                else {
                    groups.push([cy]);
                }
            }
            return [cx, groups.map(item => [item[0], item[item.length - 1]])];
        })
            .forEach(([cx, groups]) => {
            groups.forEach(([y1, y2]) => {
                dots.push((0,lit/* svg */.JW) `
              <line
                x1=${cx}
                x2=${cx}
                y1=${y1}
                y2=${y2}
                stroke=${dotColor}
                stroke-width=${cellSize / (CIRCLE_SIZE_MODIFIER / 2)}
                stroke-linecap="round"
              />
            `);
            });
        });
        return dots;
    }
};
//# sourceMappingURL=QrCode.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({ colors }) => colors.white};
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  :host {
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiQrCode = class WuiQrCode extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.uri = '';
        this.size = 500;
        this.theme = 'dark';
        this.imageSrc = undefined;
        this.alt = undefined;
        this.arenaClear = undefined;
        this.farcaster = undefined;
    }
    render() {
        this.dataset['theme'] = this.theme;
        this.dataset['clear'] = String(this.arenaClear);
        return (0,lit/* html */.qy) `<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`;
    }
    templateSvg() {
        return (0,lit/* svg */.JW) `
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${QrCodeUtil.generate({
            uri: this.uri,
            size: this.size,
            logoSize: this.arenaClear ? 0 : this.size / 4
        })}
      </svg>
    `;
    }
    templateVisual() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.alt ?? 'logo'}></wui-image>`;
        }
        if (this.farcaster) {
            return (0,lit/* html */.qy) `<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`;
        }
        return (0,lit/* html */.qy) `<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
    }
};
WuiQrCode.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "uri", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiQrCode.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "theme", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "imageSrc", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "alt", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiQrCode.prototype, "arenaClear", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiQrCode.prototype, "farcaster", void 0);
WuiQrCode = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-qr-code')
], WuiQrCode);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-qr-code.js

//# sourceMappingURL=wui-qr-code.js.map

/***/ },

/***/ 508463
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiAvatar

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(30387);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-avatar/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({ borderRadius }) => borderRadius[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-avatar/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiAvatar = class WuiAvatar extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.imageSrc = undefined;
        this.alt = undefined;
        this.address = undefined;
        this.size = 'xl';
    }
    render() {
        const getSize = {
            inherit: 'inherit',
            xxs: '3',
            xs: '5',
            sm: '6',
            md: '8',
            mdl: '8',
            lg: '10',
            xl: '16',
            xxl: '20'
        };
        this.style.cssText = `
    --local-width: var(--apkt-spacing-${getSize[this.size ?? 'xl']});
    --local-height: var(--apkt-spacing-${getSize[this.size ?? 'xl']});
    `;
        return (0,lit/* html */.qy) `${this.visualTemplate()}`;
    }
    visualTemplate() {
        if (this.imageSrc) {
            this.dataset['variant'] = 'image';
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.alt ?? 'avatar'}></wui-image>`;
        }
        else if (this.address) {
            this.dataset['variant'] = 'generated';
            const cssColors = UiHelperUtil/* UiHelperUtil */.Z.generateAvatarColors(this.address);
            this.style.cssText += `\n ${cssColors}`;
            return null;
        }
        this.dataset['variant'] = 'default';
        return null;
    }
};
WuiAvatar.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAvatar.prototype, "imageSrc", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAvatar.prototype, "alt", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAvatar.prototype, "address", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiAvatar.prototype, "size", void 0);
WuiAvatar = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-avatar')
], WuiAvatar);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 385589
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiLogo

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius }) => borderRadius['20']};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiLogo = class WuiLogo extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.logo = 'google';
    }
    render() {
        return (0,lit/* html */.qy) `<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `;
    }
};
WuiLogo.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiLogo.prototype, "logo", void 0);
WuiLogo = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-logo')
], WuiLogo);

//# sourceMappingURL=index.js.map

/***/ }

}]);