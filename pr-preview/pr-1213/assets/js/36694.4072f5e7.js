"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[36694],{

/***/ 451454
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ OptionsStateController)
/* harmony export */ });
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(552095);
/* harmony import */ var valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(427088);


// -- State --------------------------------------------- //
const state = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
    isLegalCheckboxChecked: false
});
// -- Controller ---------------------------------------- //
const OptionsStateController = {
    state,
    subscribe(callback) {
        return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state, () => callback(state));
    },
    subscribeKey(key, callback) {
        return (0,valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__/* .subscribeKey */ .u$)(state, key, callback);
    },
    setIsLegalCheckboxChecked(isLegalCheckboxChecked) {
        state.isLegalCheckboxChecked = isLegalCheckboxChecked;
    }
};
//# sourceMappingURL=OptionsStateController.js.map

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

/***/ 636694
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mConnectSocialsView: () => (/* reexport */ W3mConnectSocialsView),
  W3mConnectingFarcasterView: () => (/* reexport */ W3mConnectingFarcasterView),
  W3mConnectingSocialView: () => (/* reexport */ W3mConnectingSocialView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsStateController.js
var OptionsStateController = __webpack_require__(451454);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-checkbox/index.js + 4 modules
var w3m_legal_checkbox = __webpack_require__(850708);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var ApiController = __webpack_require__(188249);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(562944);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js
var AlertController = __webpack_require__(471655);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/SocialsUtil.js
var SocialsUtil = __webpack_require__(971801);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-social.js + 2 modules
var wui_list_social = __webpack_require__(995797);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameProvider.js + 4 modules
var W3mFrameProvider = __webpack_require__(434505);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-social-login-list/styles.js

/* harmony default export */ const styles = ((0,esm_exports/* css */.AH) `
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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-social-login-list/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mSocialLoginList = class W3mSocialLoginList extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = ConnectorController/* ConnectorController */.a.state.connectors;
        this.authConnector = this.connectors.find(c => c.type === 'AUTH');
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.isPwaLoading = false;
        this.hasExceededUsageLimit = ApiController/* ApiController */.N.state.plan.hasExceededUsageLimit;
        this.unsubscribe.push(ConnectorController/* ConnectorController */.a.subscribeKey('connectors', val => {
            this.connectors = val;
            this.authConnector = this.connectors.find(c => c.type === 'AUTH');
        }), OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)));
    }
    connectedCallback() {
        super.connectedCallback();
        this.handlePwaFrameLoad();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        let socials = this.remoteFeatures?.socials || [];
        const isAuthConnectorExist = Boolean(this.authConnector);
        const isSocialsEnabled = socials?.length;
        const isConnectSocialsView = RouterController/* RouterController */.I.state.view === 'ConnectSocials';
        if ((!isAuthConnectorExist || !isSocialsEnabled) && !isConnectSocialsView) {
            return null;
        }
        if (isConnectSocialsView && !isSocialsEnabled) {
            socials = ConstantsUtil/* ConstantsUtil */.oU.DEFAULT_SOCIALS;
        }
        return (0,lit/* html */.qy) ` <wui-flex flexDirection="column" gap="2">
      ${socials.map(social => (0,lit/* html */.qy) `<wui-list-social
            @click=${() => {
            this.onSocialClick(social);
        }}
            data-testid=${`social-selector-${social}`}
            name=${social}
            logo=${social}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`;
    }
    async onSocialClick(socialProvider) {
        if (this.hasExceededUsageLimit) {
            RouterController/* RouterController */.I.push('UsageExceeded');
            return;
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
};
W3mSocialLoginList.styles = styles;
__decorate([
    (0,decorators/* property */.MZ)()
], W3mSocialLoginList.prototype, "tabIdx", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginList.prototype, "connectors", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginList.prototype, "authConnector", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginList.prototype, "remoteFeatures", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginList.prototype, "isPwaLoading", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mSocialLoginList.prototype, "hasExceededUsageLimit", void 0);
W3mSocialLoginList = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-social-login-list')
], W3mSocialLoginList);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-socials-view/styles.js

/* harmony default export */ const w3m_connect_socials_view_styles = ((0,esm_exports/* css */.AH) `
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({ durations }) => durations['md']}
      ${({ easings }) => easings['ease-out-power-1']};
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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-socials-view/index.js
var w3m_connect_socials_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mConnectSocialsView = class W3mConnectSocialsView extends lit/* LitElement */.WF {
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
        .padding=${['0', '3', '3', '3']}
        gap="01"
        class=${(0,if_defined/* ifDefined */.J)(disabled ? 'disabled' : undefined)}
      >
        <w3m-social-login-list tabIdx=${(0,if_defined/* ifDefined */.J)(tabIndex)}></w3m-social-login-list>
      </wui-flex>
    `;
    }
};
W3mConnectSocialsView.styles = w3m_connect_socials_view_styles;
w3m_connect_socials_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectSocialsView.prototype, "checked", void 0);
W3mConnectSocialsView = w3m_connect_socials_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connect-socials-view')
], W3mConnectSocialsView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js
var StorageUtil = __webpack_require__(127508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(568996);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var wui_icon_box = __webpack_require__(804019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js + 2 modules
var wui_loading_thumbnail = __webpack_require__(153448);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo/index.js + 1 modules
var wui_logo = __webpack_require__(385589);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-logo.js

//# sourceMappingURL=wui-logo.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/ErrorUtil.js
var ErrorUtil = __webpack_require__(121785);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js
var utils_ConstantsUtil = __webpack_require__(841482);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-social-view/styles.js

/* harmony default export */ const w3m_connecting_social_view_styles = ((0,esm_exports/* css */.AH) `
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({ borderRadius }) => borderRadius['8']};
  }
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
  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing }) => spacing['1']} * -1);
    bottom: calc(${({ spacing }) => spacing['1']} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({ easings }) => easings['ease-out-power-2']}
      ${({ durations }) => durations['lg']};
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
  .capitalize {
    text-transform: capitalize;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-social-view/index.js
var w3m_connecting_social_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let W3mConnectingSocialView = class W3mConnectingSocialView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.socialProvider = ChainController/* ChainController */.W.getAccountData()?.socialProvider;
        this.socialWindow = ChainController/* ChainController */.W.getAccountData()?.socialWindow;
        this.error = false;
        this.connecting = false;
        this.message = 'Connect in the provider window';
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.address = ChainController/* ChainController */.W.getAccountData()?.address;
        this.connectionsByNamespace = ConnectionController/* ConnectionController */.x.getConnections(ChainController/* ChainController */.W.state.activeChain);
        this.hasMultipleConnections = this.connectionsByNamespace.length > 0;
        this.authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        this.handleSocialConnection = async (event) => {
            if (event.data?.resultUri) {
                if (event.origin === utils_ConstantsUtil/* ConstantsUtil */.o.SECURE_SITE_ORIGIN) {
                    window.removeEventListener('message', this.handleSocialConnection, false);
                    try {
                        if (this.authConnector && !this.connecting) {
                            this.connecting = true;
                            const error = this.parseURLError(event.data.resultUri);
                            if (error) {
                                this.handleSocialError(error);
                                return;
                            }
                            this.closeSocialWindow();
                            this.updateMessage();
                            const uri = event.data.resultUri;
                            if (this.socialProvider) {
                                EventsController/* EventsController */.E.sendEvent({
                                    type: 'track',
                                    event: 'SOCIAL_LOGIN_REQUEST_USER_DATA',
                                    properties: { provider: this.socialProvider }
                                });
                            }
                            await ConnectionController/* ConnectionController */.x.connectExternal({
                                id: this.authConnector.id,
                                type: this.authConnector.type,
                                socialUri: uri
                            }, this.authConnector.chain);
                            if (this.socialProvider) {
                                StorageUtil/* StorageUtil */.i.setConnectedSocialProvider(this.socialProvider);
                                EventsController/* EventsController */.E.sendEvent({
                                    type: 'track',
                                    event: 'SOCIAL_LOGIN_SUCCESS',
                                    properties: { provider: this.socialProvider }
                                });
                            }
                        }
                    }
                    catch (error) {
                        this.error = true;
                        this.updateMessage();
                        if (this.socialProvider) {
                            EventsController/* EventsController */.E.sendEvent({
                                type: 'track',
                                event: 'SOCIAL_LOGIN_ERROR',
                                properties: {
                                    provider: this.socialProvider,
                                    message: CoreHelperUtil/* CoreHelperUtil */.w.parseError(error)
                                }
                            });
                        }
                    }
                }
                else {
                    RouterController/* RouterController */.I.goBack();
                    SnackController/* SnackController */.P.showError('Untrusted Origin');
                    if (this.socialProvider) {
                        EventsController/* EventsController */.E.sendEvent({
                            type: 'track',
                            event: 'SOCIAL_LOGIN_ERROR',
                            properties: {
                                provider: this.socialProvider,
                                message: 'Untrusted Origin'
                            }
                        });
                    }
                }
            }
        };
        const abortController = ErrorUtil/* ErrorUtil */.R.EmbeddedWalletAbortController;
        abortController.signal.addEventListener('abort', () => {
            this.closeSocialWindow();
        });
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                if (val) {
                    this.socialProvider = val.socialProvider;
                    if (val.socialWindow) {
                        this.socialWindow = val.socialWindow;
                    }
                    if (val.address) {
                        const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
                        if (val.address !== this.address) {
                            if (this.hasMultipleConnections && isMultiWalletEnabled) {
                                RouterController/* RouterController */.I.replace('ProfileWallets');
                                SnackController/* SnackController */.P.showSuccess('New Wallet Added');
                                this.address = val.address;
                            }
                            else if (ModalController/* ModalController */.W.state.open || OptionsController/* OptionsController */.H.state.enableEmbedded) {
                                ModalController/* ModalController */.W.close();
                            }
                        }
                    }
                }
            }),
            OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => {
                this.remoteFeatures = val;
            })
        ]);
        if (this.authConnector) {
            this.connectSocial();
        }
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        window.removeEventListener('message', this.handleSocialConnection, false);
        const isConnected = ChainController/* ChainController */.W.state.activeCaipAddress;
        if (!isConnected && this.socialProvider && !this.connecting) {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'SOCIAL_LOGIN_CANCELED',
                properties: { provider: this.socialProvider }
            });
        }
        this.closeSocialWindow();
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        data-error=${(0,if_defined/* ifDefined */.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${['10', '5', '5', '5']}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,if_defined/* ifDefined */.J)(this.socialProvider)}></wui-logo>
          ${this.error ? null : this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider ?? 'Social'}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error ? 'error' : 'secondary'}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `;
    }
    loaderTemplate() {
        const borderRadiusMaster = ThemeController/* ThemeController */.W.state.themeVariables['--w3m-border-radius-master'];
        const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace('px', ''), 10) : 4;
        return (0,lit/* html */.qy) `<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
    }
    parseURLError(uri) {
        try {
            const errorKey = 'error=';
            const errorIndex = uri.indexOf(errorKey);
            if (errorIndex === -1) {
                return null;
            }
            const error = uri.substring(errorIndex + errorKey.length);
            return error;
        }
        catch {
            return null;
        }
    }
    connectSocial() {
        const interval = setInterval(() => {
            if (this.socialWindow?.closed) {
                if (!this.connecting && RouterController/* RouterController */.I.state.view === 'ConnectingSocial') {
                    RouterController/* RouterController */.I.goBack();
                }
                clearInterval(interval);
            }
        }, 1000);
        window.addEventListener('message', this.handleSocialConnection, false);
    }
    updateMessage() {
        if (this.error) {
            this.message = 'Something went wrong';
        }
        else if (this.connecting) {
            this.message = 'Retrieving user data';
        }
        else {
            this.message = 'Connect in the provider window';
        }
    }
    handleSocialError(error) {
        this.error = true;
        this.updateMessage();
        if (this.socialProvider) {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'SOCIAL_LOGIN_ERROR',
                properties: { provider: this.socialProvider, message: error }
            });
        }
        this.closeSocialWindow();
    }
    closeSocialWindow() {
        if (this.socialWindow) {
            this.socialWindow.close();
            ChainController/* ChainController */.W.setAccountProp('socialWindow', undefined, ChainController/* ChainController */.W.state.activeChain);
        }
    }
};
W3mConnectingSocialView.styles = w3m_connecting_social_view_styles;
w3m_connecting_social_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingSocialView.prototype, "socialProvider", void 0);
w3m_connecting_social_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingSocialView.prototype, "socialWindow", void 0);
w3m_connecting_social_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingSocialView.prototype, "error", void 0);
w3m_connecting_social_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingSocialView.prototype, "connecting", void 0);
w3m_connecting_social_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingSocialView.prototype, "message", void 0);
w3m_connecting_social_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingSocialView.prototype, "remoteFeatures", void 0);
W3mConnectingSocialView = w3m_connecting_social_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-social-view')
], W3mConnectingSocialView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(409526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var wui_icon = __webpack_require__(313163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-qr-code.js + 3 modules
var wui_qr_code = __webpack_require__(822571);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js
var wui_shimmer = __webpack_require__(838215);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-farcaster-view/styles.js

/* harmony default export */ const w3m_connecting_farcaster_view_styles = ((0,esm_exports/* css */.AH) `
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

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({ borderRadius }) => borderRadius['8']};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
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
    transition:
      opacity ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      transform ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']};
    will-change: opacity, transform;
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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-farcaster-view/index.js
var w3m_connecting_farcaster_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let W3mConnectingFarcasterView = class W3mConnectingFarcasterView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.timeout = undefined;
        this.socialProvider = ChainController/* ChainController */.W.getAccountData()?.socialProvider;
        this.uri = ChainController/* ChainController */.W.getAccountData()?.farcasterUrl;
        this.ready = false;
        this.loading = false;
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        this.forceUpdate = () => {
            this.requestUpdate();
        };
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                this.socialProvider = val?.socialProvider;
                this.uri = val?.farcasterUrl;
                this.connectFarcaster();
            }),
            OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => {
                this.remoteFeatures = val;
            })
        ]);
        window.addEventListener('resize', this.forceUpdate);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        clearTimeout(this.timeout);
        window.removeEventListener('resize', this.forceUpdate);
        const isConnected = ChainController/* ChainController */.W.state.activeCaipAddress;
        if (!isConnected && this.socialProvider && (this.uri || this.loading)) {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'SOCIAL_LOGIN_CANCELED',
                properties: { provider: this.socialProvider }
            });
        }
    }
    render() {
        this.onRenderProxy();
        return (0,lit/* html */.qy) `${this.platformTemplate()}`;
    }
    platformTemplate() {
        if (CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
            return (0,lit/* html */.qy) `${this.mobileTemplate()}`;
        }
        return (0,lit/* html */.qy) `${this.desktopTemplate()}`;
    }
    desktopTemplate() {
        if (this.loading) {
            return (0,lit/* html */.qy) `${this.loadingTemplate()}`;
        }
        return (0,lit/* html */.qy) `${this.qrTemplate()}`;
    }
    qrTemplate() {
        return (0,lit/* html */.qy) ` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${['0', '5', '5', '5']}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`;
    }
    loadingTemplate() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['5', '5', '5', '5']}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `;
    }
    mobileTemplate() {
        return (0,lit/* html */.qy) ` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${['10', '5', '5', '5']}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`;
    }
    loaderTemplate() {
        const borderRadiusMaster = ThemeController/* ThemeController */.W.state.themeVariables['--w3m-border-radius-master'];
        const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace('px', ''), 10) : 4;
        return (0,lit/* html */.qy) `<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
    }
    async connectFarcaster() {
        if (this.authConnector) {
            try {
                await this.authConnector?.provider.connectFarcaster();
                if (this.socialProvider) {
                    StorageUtil/* StorageUtil */.i.setConnectedSocialProvider(this.socialProvider);
                    EventsController/* EventsController */.E.sendEvent({
                        type: 'track',
                        event: 'SOCIAL_LOGIN_REQUEST_USER_DATA',
                        properties: { provider: this.socialProvider }
                    });
                }
                this.loading = true;
                const connectionsByNamespace = ConnectionController/* ConnectionController */.x.getConnections(this.authConnector.chain);
                const hasConnections = connectionsByNamespace.length > 0;
                await ConnectionController/* ConnectionController */.x.connectExternal(this.authConnector, this.authConnector.chain);
                const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
                if (this.socialProvider) {
                    EventsController/* EventsController */.E.sendEvent({
                        type: 'track',
                        event: 'SOCIAL_LOGIN_SUCCESS',
                        properties: { provider: this.socialProvider }
                    });
                }
                this.loading = false;
                if (hasConnections && isMultiWalletEnabled) {
                    RouterController/* RouterController */.I.replace('ProfileWallets');
                    SnackController/* SnackController */.P.showSuccess('New Wallet Added');
                }
                else {
                    ModalController/* ModalController */.W.close();
                }
            }
            catch (error) {
                if (this.socialProvider) {
                    EventsController/* EventsController */.E.sendEvent({
                        type: 'track',
                        event: 'SOCIAL_LOGIN_ERROR',
                        properties: { provider: this.socialProvider, message: CoreHelperUtil/* CoreHelperUtil */.w.parseError(error) }
                    });
                }
                RouterController/* RouterController */.I.goBack();
                SnackController/* SnackController */.P.showError(error);
            }
        }
    }
    mobileLinkTemplate() {
        return (0,lit/* html */.qy) `<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri || this.loading}
      @click=${() => {
            if (this.uri) {
                CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.uri, '_blank');
            }
        }}
    >
      Open farcaster</wui-button
    >`;
    }
    onRenderProxy() {
        if (!this.ready && this.uri) {
            this.timeout = setTimeout(() => {
                this.ready = true;
            }, 200);
        }
    }
    qrCodeTemplate() {
        if (!this.uri || !this.ready) {
            return null;
        }
        const size = this.getBoundingClientRect().width - 40;
        const qrColor = ThemeController/* ThemeController */.W.state.themeVariables['--apkt-qr-color'] ??
            ThemeController/* ThemeController */.W.state.themeVariables['--w3m-qr-color'];
        return (0,lit/* html */.qy) ` <wui-qr-code
      size=${size}
      theme=${ThemeController/* ThemeController */.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${true}
      data-testid="wui-qr-code"
      color=${(0,if_defined/* ifDefined */.J)(qrColor)}
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
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`;
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
};
W3mConnectingFarcasterView.styles = w3m_connecting_farcaster_view_styles;
w3m_connecting_farcaster_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingFarcasterView.prototype, "socialProvider", void 0);
w3m_connecting_farcaster_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingFarcasterView.prototype, "uri", void 0);
w3m_connecting_farcaster_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingFarcasterView.prototype, "ready", void 0);
w3m_connecting_farcaster_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingFarcasterView.prototype, "loading", void 0);
w3m_connecting_farcaster_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingFarcasterView.prototype, "remoteFeatures", void 0);
W3mConnectingFarcasterView = w3m_connecting_farcaster_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-farcaster-view')
], W3mConnectingFarcasterView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/socials.js



//# sourceMappingURL=socials.js.map

/***/ },

/***/ 850708
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: W3mLegalCheckbox

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsStateController.js
var OptionsStateController = __webpack_require__(451454);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/lit/directives/ref.js + 3 modules
var ref = __webpack_require__(791629);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-checkbox/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({ spacing }) => spacing[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({ colors }) => colors.neutrals400};
    color: ${({ colors }) => colors.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({ colors }) => colors.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({ colors }) => colors.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({ borderRadius }) => borderRadius[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({ tokens }) => tokens.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({ tokens }) => tokens.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({ colors }) => colors.neutrals700};
    background-color: ${({ colors }) => colors.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({ colors }) => colors.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({ colors }) => colors.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-checkbox/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const ICON_SIZE = {
    lg: 'md',
    md: 'sm',
    sm: 'sm'
};
let WuiCheckBox = class WuiCheckBox extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.inputElementRef = (0,ref/* createRef */._)();
        this.checked = undefined;
        this.disabled = false;
        this.size = 'md';
    }
    render() {
        const iconSize = ICON_SIZE[this.size];
        return (0,lit/* html */.qy) `
      <label data-size=${this.size}>
        <input
          ${(0,ref/* ref */.K)(this.inputElementRef)}
          ?checked=${(0,if_defined/* ifDefined */.J)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${iconSize}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `;
    }
    dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent('checkboxChange', {
            detail: this.inputElementRef.value?.checked,
            bubbles: true,
            composed: true
        }));
    }
};
WuiCheckBox.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiCheckBox.prototype, "checked", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiCheckBox.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiCheckBox.prototype, "size", void 0);
WuiCheckBox = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-checkbox')
], WuiCheckBox);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-checkbox.js

//# sourceMappingURL=wui-checkbox.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(346709);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-checkbox/styles.js

/* harmony default export */ const w3m_legal_checkbox_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({ spacing }) => spacing['3']};
  }
  a {
    text-decoration: none;
    color: ${({ tokens }) => tokens.theme.textSecondary};
    font-weight: 500;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-checkbox/index.js
var w3m_legal_checkbox_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mLegalCheckbox = class W3mLegalCheckbox extends lit/* LitElement */.WF {
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
        if (!termsConditionsUrl && !privacyPolicyUrl) {
            return null;
        }
        if (!legalCheckbox) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `;
    }
    andTemplate() {
        const { termsConditionsUrl, privacyPolicyUrl } = OptionsController/* OptionsController */.H.state;
        return termsConditionsUrl && privacyPolicyUrl ? 'and' : '';
    }
    termsTemplate() {
        const { termsConditionsUrl } = OptionsController/* OptionsController */.H.state;
        if (!termsConditionsUrl) {
            return null;
        }
        return (0,lit/* html */.qy) `<a rel="noreferrer" target="_blank" href=${termsConditionsUrl}>terms of service</a>`;
    }
    privacyTemplate() {
        const { privacyPolicyUrl } = OptionsController/* OptionsController */.H.state;
        if (!privacyPolicyUrl) {
            return null;
        }
        return (0,lit/* html */.qy) `<a rel="noreferrer" target="_blank" href=${privacyPolicyUrl}>privacy policy</a>`;
    }
    onCheckboxChange() {
        OptionsStateController/* OptionsStateController */.o.setIsLegalCheckboxChecked(!this.checked);
    }
};
W3mLegalCheckbox.styles = [w3m_legal_checkbox_styles];
w3m_legal_checkbox_decorate([
    (0,decorators/* state */.wk)()
], W3mLegalCheckbox.prototype, "checked", void 0);
W3mLegalCheckbox = w3m_legal_checkbox_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-legal-checkbox')
], W3mLegalCheckbox);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 841482
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ ConstantsUtil)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(365606);
const ConstantsUtil = {
    ACCOUNT_TABS: [{ label: 'Tokens' }, { label: 'Activity' }],
    SECURE_SITE_ORIGIN: (typeof process !== 'undefined' && typeof process.env !== 'undefined'
        ? process.env['NEXT_PUBLIC_SECURE_SITE_ORIGIN']
        : undefined) || 'https://secure.walletconnect.org',
    VIEW_DIRECTION: {
        Next: 'next',
        Prev: 'prev'
    },
    ANIMATION_DURATIONS: {
        HeaderText: 120,
        ModalHeight: 150,
        ViewTransition: 150
    },
    VIEWS_WITH_LEGAL_FOOTER: [
        'Connect',
        'ConnectWallets',
        'OnRampTokenSelect',
        'OnRampFiatSelect',
        'OnRampProviders'
    ],
    VIEWS_WITH_DEFAULT_FOOTER: ['Networks']
};
//# sourceMappingURL=ConstantsUtil.js.map

/***/ },

/***/ 804019
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_icon_box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42815);

//# sourceMappingURL=wui-icon-box.js.map

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

/***/ 153448
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiLoadingThumbnail

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${tokens => tokens.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let WuiLoadingThumbnail = class WuiLoadingThumbnail extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.radius = 36;
    }
    render() {
        return this.svgLoaderTemplate();
    }
    svgLoaderTemplate() {
        const radius = this.radius > 50 ? 50 : this.radius;
        const standardValue = 36;
        const radiusFactor = standardValue - radius;
        const dashArrayStart = 116 + radiusFactor;
        const dashArrayEnd = 245 + radiusFactor;
        const dashOffset = 360 + radiusFactor * 1.75;
        return (0,lit/* html */.qy) `
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${radius}
          stroke-dasharray="${dashArrayStart} ${dashArrayEnd}"
          stroke-dashoffset=${dashOffset}
        />
      </svg>
    `;
    }
};
WuiLoadingThumbnail.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiLoadingThumbnail.prototype, "radius", void 0);
WuiLoadingThumbnail = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-loading-thumbnail')
], WuiLoadingThumbnail);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js

//# sourceMappingURL=wui-loading-thumbnail.js.map

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

/***/ },

/***/ 791629
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* reexport */ ref_e),
  K: () => (/* reexport */ ref_n)
});

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(836752);
;// ./node_modules/lit-html/directive-helpers.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:t}=lit_html/* _$LH */.ge,i=o=>o,n=o=>null===o||"object"!=typeof o&&"function"!=typeof o,e={HTML:1,SVG:2,MATHML:3},l=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,d=o=>null!=o?._$litType$?.h,c=o=>void 0!==o?._$litDirective$,f=o=>o?._$litDirective$,r=o=>void 0===o.strings,s=()=>document.createComment(""),v=(o,n,e)=>{const l=o._$AA.parentNode,d=void 0===n?o._$AB:n._$AA;if(void 0===e){const i=l.insertBefore(s(),d),n=l.insertBefore(s(),d);e=new t(i,n,o,o.options)}else{const t=e._$AB.nextSibling,n=e._$AM,c=n!==o;if(c){let t;e._$AQ?.(o),e._$AM=o,void 0!==e._$AP&&(t=o._$AU)!==n._$AU&&e._$AP(t)}if(t!==d||c){let o=e._$AA;for(;o!==t;){const t=i(o).nextSibling;i(l).insertBefore(o,d),o=t}}}return e},u=(o,t,i=o)=>(o._$AI(t,i),o),m={},p=(o,t=m)=>o._$AH=t,M=o=>o._$AH,h=o=>{o._$AR(),o._$AA.remove()},j=o=>{o._$AR()};
//# sourceMappingURL=directive-helpers.js.map

// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(207804);
;// ./node_modules/lit-html/async-directive.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const async_directive_s=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),async_directive_s(i,t);return!0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},async_directive_r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),async_directive_c(t)}};function async_directive_h(i){void 0!==this._$AN?(o(this),this._$AM=i,async_directive_r(this)):this._$AM=i}function async_directive_n(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)async_directive_s(r[i],!1),o(r[i]);else null!=r&&(async_directive_s(r,!1),o(r));else async_directive_s(this,i)}const async_directive_c=i=>{i.type==directive/* PartType */.OA.CHILD&&(i._$AP??=async_directive_n,i._$AQ??=async_directive_h)};class async_directive_f extends directive/* Directive */.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),async_directive_r(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(async_directive_s(this,i),o(this))}setValue(t){if(r(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
//# sourceMappingURL=async-directive.js.map

;// ./node_modules/lit-html/directives/ref.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ref_e=()=>new ref_h;class ref_h{}const ref_o=new WeakMap,ref_n=(0,directive/* directive */.u$)(class extends async_directive_f{render(i){return lit_html/* nothing */.s6}update(i,[s]){const e=s!==this.G;return e&&void 0!==this.G&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),lit_html/* nothing */.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const i=this.ht??globalThis;let s=ref_o.get(i);void 0===s&&(s=new WeakMap,ref_o.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ht,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?ref_o.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});
//# sourceMappingURL=ref.js.map

;// ./node_modules/lit/directives/ref.js

//# sourceMappingURL=ref.js.map


/***/ }

}]);