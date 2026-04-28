"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[47684],{

/***/ 147684
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mEmailLoginView: () => (/* reexport */ W3mEmailLoginView),
  W3mEmailOtpWidget: () => (/* reexport */ w3m_email_otp_widget/* W3mEmailOtpWidget */.H),
  W3mEmailVerifyDeviceView: () => (/* reexport */ W3mEmailVerifyDeviceView),
  W3mEmailVerifyOtpView: () => (/* reexport */ W3mEmailVerifyOtpView),
  W3mUpdateEmailPrimaryOtpView: () => (/* reexport */ W3mUpdateEmailPrimaryOtpView),
  W3mUpdateEmailSecondaryOtpView: () => (/* reexport */ W3mUpdateEmailSecondaryOtpView),
  W3mUpdateEmailWalletView: () => (/* reexport */ W3mUpdateEmailWalletView)
});

// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-email-otp-widget/index.js + 6 modules
var w3m_email_otp_widget = __webpack_require__(576892);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-email-verify-otp-view/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let W3mEmailVerifyOtpView = class W3mEmailVerifyOtpView extends w3m_email_otp_widget/* W3mEmailOtpWidget */.H {
    constructor() {
        super(...arguments);
        this.onOtpSubmit = async (otp) => {
            try {
                if (this.authConnector) {
                    const namespace = ChainController/* ChainController */.W.state.activeChain;
                    const connectionsByNamespace = ConnectionController/* ConnectionController */.x.getConnections(namespace);
                    const isMultiWalletEnabled = OptionsController/* OptionsController */.H.state.remoteFeatures?.multiWallet;
                    const hasConnections = connectionsByNamespace.length > 0;
                    await this.authConnector.provider.connectOtp({ otp });
                    EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_PASS' });
                    if (namespace) {
                        await ConnectionController/* ConnectionController */.x.connectExternal(this.authConnector, namespace);
                    }
                    else {
                        throw new Error('Active chain is not set on ChainController');
                    }
                    if (OptionsController/* OptionsController */.H.state.remoteFeatures?.emailCapture) {
                        return;
                    }
                    if (OptionsController/* OptionsController */.H.state.siwx) {
                        ModalController/* ModalController */.W.close();
                        return;
                    }
                    if (hasConnections && isMultiWalletEnabled) {
                        RouterController/* RouterController */.I.replace('ProfileWallets');
                        SnackController/* SnackController */.P.showSuccess('New Wallet Added');
                        return;
                    }
                    ModalController/* ModalController */.W.close();
                }
            }
            catch (error) {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'EMAIL_VERIFICATION_CODE_FAIL',
                    properties: { message: CoreHelperUtil/* CoreHelperUtil */.w.parseError(error) }
                });
                throw error;
            }
        };
        this.onOtpResend = async (email) => {
            if (this.authConnector) {
                await this.authConnector.provider.connectEmail({ email });
                EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_SENT' });
            }
        };
    }
};
W3mEmailVerifyOtpView = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-email-verify-otp-view')
], W3mEmailVerifyOtpView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var wui_icon_box = __webpack_require__(804019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(845198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var wui_text = __webpack_require__(346709);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-email-verify-device-view/styles.js

/* harmony default export */ const styles = ((0,esm_exports/* css */.AH) `
  wui-icon-box {
    height: ${({ spacing }) => spacing['16']};
    width: ${({ spacing }) => spacing['16']};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-email-verify-device-view/index.js
var w3m_email_verify_device_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mEmailVerifyDeviceView = class W3mEmailVerifyDeviceView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.email = RouterController/* RouterController */.I.state.data?.email;
        this.authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        this.loading = false;
        this.listenForDeviceApproval();
    }
    render() {
        if (!this.email) {
            throw new Error('w3m-email-verify-device-view: No email provided');
        }
        if (!this.authConnector) {
            throw new Error('w3m-email-verify-device-view: No auth connector provided');
        }
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['6', '3', '6', '3']}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
    }
    async listenForDeviceApproval() {
        if (this.authConnector) {
            try {
                await this.authConnector.provider.connectDevice();
                EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'DEVICE_REGISTERED_FOR_EMAIL' });
                EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_SENT' });
                RouterController/* RouterController */.I.replace('EmailVerifyOtp', { email: this.email });
            }
            catch (error) {
                RouterController/* RouterController */.I.goBack();
            }
        }
    }
    async onResendCode() {
        try {
            if (!this.loading) {
                if (!this.authConnector || !this.email) {
                    throw new Error('w3m-email-login-widget: Unable to resend email');
                }
                this.loading = true;
                await this.authConnector.provider.connectEmail({ email: this.email });
                this.listenForDeviceApproval();
                SnackController/* SnackController */.P.showSuccess('Code email resent');
            }
        }
        catch (error) {
            SnackController/* SnackController */.P.showError(error);
        }
        finally {
            this.loading = false;
        }
    }
};
W3mEmailVerifyDeviceView.styles = styles;
w3m_email_verify_device_view_decorate([
    (0,decorators/* state */.wk)()
], W3mEmailVerifyDeviceView.prototype, "loading", void 0);
W3mEmailVerifyDeviceView = w3m_email_verify_device_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-email-verify-device-view')
], W3mEmailVerifyDeviceView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/lit/directives/ref.js + 3 modules
var ref = __webpack_require__(791629);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(409526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-email-input.js + 2 modules
var wui_email_input = __webpack_require__(316854);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-update-email-wallet-view/styles.js

/* harmony default export */ const w3m_update_email_wallet_view_styles = ((0,lit/* css */.AH) `
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-update-email-wallet-view/index.js
var w3m_update_email_wallet_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mUpdateEmailWalletView = class W3mUpdateEmailWalletView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.formRef = (0,ref/* createRef */._)();
        this.initialEmail = RouterController/* RouterController */.I.state.data?.email ?? '';
        this.redirectView = RouterController/* RouterController */.I.state.data?.redirectView;
        this.email = '';
        this.loading = false;
    }
    firstUpdated() {
        this.formRef.value?.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                this.onSubmitEmail(event);
            }
        });
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${(0,ref/* ref */.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `;
    }
    onEmailInputChange(event) {
        this.email = event.detail;
    }
    async onSubmitEmail(event) {
        try {
            if (this.loading) {
                return;
            }
            this.loading = true;
            event.preventDefault();
            const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
            if (!authConnector) {
                throw new Error('w3m-update-email-wallet: Auth connector not found');
            }
            const response = await authConnector.provider.updateEmail({ email: this.email });
            EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_EDIT' });
            if (response.action === 'VERIFY_SECONDARY_OTP') {
                RouterController/* RouterController */.I.push('UpdateEmailSecondaryOtp', {
                    email: this.initialEmail,
                    newEmail: this.email,
                    redirectView: this.redirectView
                });
            }
            else {
                RouterController/* RouterController */.I.push('UpdateEmailPrimaryOtp', {
                    email: this.initialEmail,
                    newEmail: this.email,
                    redirectView: this.redirectView
                });
            }
        }
        catch (error) {
            SnackController/* SnackController */.P.showError(error);
            this.loading = false;
        }
    }
    buttonsTemplate() {
        const showSubmit = !this.loading && this.email.length > 3 && this.email !== this.initialEmail;
        if (!this.redirectView) {
            return (0,lit/* html */.qy) `
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!showSubmit}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `;
        }
        return (0,lit/* html */.qy) `
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${RouterController/* RouterController */.I.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!showSubmit}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `;
    }
};
W3mUpdateEmailWalletView.styles = w3m_update_email_wallet_view_styles;
w3m_update_email_wallet_view_decorate([
    (0,decorators/* state */.wk)()
], W3mUpdateEmailWalletView.prototype, "email", void 0);
w3m_update_email_wallet_view_decorate([
    (0,decorators/* state */.wk)()
], W3mUpdateEmailWalletView.prototype, "loading", void 0);
W3mUpdateEmailWalletView = w3m_update_email_wallet_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-update-email-wallet-view')
], W3mUpdateEmailWalletView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-update-email-primary-otp-view/index.js
var w3m_update_email_primary_otp_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let W3mUpdateEmailPrimaryOtpView = class W3mUpdateEmailPrimaryOtpView extends w3m_email_otp_widget/* W3mEmailOtpWidget */.H {
    constructor() {
        super();
        this.email = RouterController/* RouterController */.I.state.data?.email;
        this.onOtpSubmit = async (otp) => {
            try {
                if (this.authConnector) {
                    await this.authConnector.provider.updateEmailPrimaryOtp({ otp });
                    EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_PASS' });
                    RouterController/* RouterController */.I.replace('UpdateEmailSecondaryOtp', RouterController/* RouterController */.I.state.data);
                }
            }
            catch (error) {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'EMAIL_VERIFICATION_CODE_FAIL',
                    properties: { message: CoreHelperUtil/* CoreHelperUtil */.w.parseError(error) }
                });
                throw error;
            }
        };
        this.onStartOver = () => {
            RouterController/* RouterController */.I.replace('UpdateEmailWallet', RouterController/* RouterController */.I.state.data);
        };
    }
};
W3mUpdateEmailPrimaryOtpView = w3m_update_email_primary_otp_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-update-email-primary-otp-view')
], W3mUpdateEmailPrimaryOtpView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-update-email-secondary-otp-view/index.js
var w3m_update_email_secondary_otp_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let W3mUpdateEmailSecondaryOtpView = class W3mUpdateEmailSecondaryOtpView extends w3m_email_otp_widget/* W3mEmailOtpWidget */.H {
    constructor() {
        super();
        this.email = RouterController/* RouterController */.I.state.data?.newEmail;
        this.redirectView = RouterController/* RouterController */.I.state.data?.redirectView;
        this.onOtpSubmit = async (otp) => {
            try {
                if (this.authConnector) {
                    await this.authConnector.provider.updateEmailSecondaryOtp({ otp });
                    EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_PASS' });
                    if (this.redirectView) {
                        RouterController/* RouterController */.I.reset(this.redirectView);
                    }
                }
            }
            catch (error) {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'EMAIL_VERIFICATION_CODE_FAIL',
                    properties: { message: CoreHelperUtil/* CoreHelperUtil */.w.parseError(error) }
                });
                throw error;
            }
        };
        this.onStartOver = () => {
            RouterController/* RouterController */.I.replace('UpdateEmailWallet', RouterController/* RouterController */.I.state.data);
        };
    }
};
W3mUpdateEmailSecondaryOtpView = w3m_update_email_secondary_otp_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-update-email-secondary-otp-view')
], W3mUpdateEmailSecondaryOtpView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js
var src_ConstantsUtil = __webpack_require__(669510);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-email-login-view/index.js
var w3m_email_login_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mEmailLoginView = class W3mEmailLoginView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        this.isEmailEnabled = OptionsController/* OptionsController */.H.state.remoteFeatures?.email;
        this.isAuthEnabled = this.checkIfAuthEnabled(ConnectorController/* ConnectorController */.a.state.connectors);
        this.connectors = ConnectorController/* ConnectorController */.a.state.connectors;
        ConnectorController/* ConnectorController */.a.subscribeKey('connectors', val => {
            this.connectors = val;
            this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors);
        });
    }
    render() {
        if (!this.isEmailEnabled) {
            throw new Error('w3m-email-login-view: Email is not enabled');
        }
        if (!this.isAuthEnabled) {
            throw new Error('w3m-email-login-view: No auth connector provided');
        }
        return (0,lit/* html */.qy) `<wui-flex flexDirection="column" .padding=${['1', '3', '3', '3']} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `;
    }
    checkIfAuthEnabled(connectors) {
        const namespacesWithAuthConnector = connectors
            .filter(c => c.type === src_ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_TYPE_AUTH)
            .map(i => i.chain);
        const authSupportedNamespaces = ConstantsUtil/* ConstantsUtil */.o.AUTH_CONNECTOR_SUPPORTED_CHAINS;
        return authSupportedNamespaces.some(ns => namespacesWithAuthConnector.includes(ns));
    }
};
w3m_email_login_view_decorate([
    (0,decorators/* state */.wk)()
], W3mEmailLoginView.prototype, "connectors", void 0);
W3mEmailLoginView = w3m_email_login_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-email-login-view')
], W3mEmailLoginView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/email.js







//# sourceMappingURL=email.js.map

/***/ },

/***/ 409526
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_button_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(966456);

//# sourceMappingURL=wui-button.js.map

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

/***/ 804019
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_icon_box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42815);

//# sourceMappingURL=wui-icon-box.js.map

/***/ },

/***/ 966456
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiButton

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiButton.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiButton.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiButton.prototype, "fullWidth", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiButton.prototype, "loading", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiButton.prototype, "variant", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiButton.prototype, "textVariant", void 0);
WuiButton = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-button')
], WuiButton);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 42815
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiIconBox

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiIconBox.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "icon", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "padding", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "color", void 0);
WuiIconBox = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon-box')
], WuiIconBox);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 565760
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiInputText

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({ spacing }) => spacing[3]};
    color: ${({ tokens }) => tokens.theme.textPrimary};
    caret-color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
    caret-color: ${({ tokens }) => tokens.core.textAccentPrimary};
    padding: ${({ spacing }) => spacing[3]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[3]} ${({ spacing }) => spacing[10]};
    font-size: ${({ textSize }) => textSize.large};
    line-height: ${({ typography }) => typography['lg-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['lg-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
  }

  input[data-size='lg'] {
    padding: ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({ spacing }) => spacing[4]};
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing }) => spacing[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({ spacing }) => spacing[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiInputText = class WuiInputText extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.inputElementRef = (0,ref/* createRef */._)();
        this.disabled = false;
        this.loading = false;
        this.placeholder = '';
        this.type = 'text';
        this.value = '';
        this.size = 'md';
    }
    render() {
        return (0,lit/* html */.qy) ` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,ref/* ref */.K)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,if_defined/* ifDefined */.J)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value || ''}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`;
    }
    templateLeftIcon() {
        if (this.icon) {
            return (0,lit/* html */.qy) `<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`;
        }
        return null;
    }
    templateSubmitButton() {
        if (this.onSubmit) {
            return (0,lit/* html */.qy) `<button
        class="wui-input-text-submit-button ${this.loading ? 'loading' : ''}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled || this.loading}
      >
        ${this.loading
                ? (0,lit/* html */.qy) `<wui-icon name="spinner" size="md"></wui-icon>`
                : (0,lit/* html */.qy) `<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`;
        }
        return null;
    }
    templateError() {
        if (this.errorText) {
            return (0,lit/* html */.qy) `<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`;
        }
        return null;
    }
    templateWarning() {
        if (this.warningText) {
            return (0,lit/* html */.qy) `<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`;
        }
        return null;
    }
    dispatchInputChangeEvent() {
        this.dispatchEvent(new CustomEvent('inputChange', {
            detail: this.inputElementRef.value?.value,
            bubbles: true,
            composed: true
        }));
    }
};
WuiInputText.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "icon", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiInputText.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiInputText.prototype, "loading", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "placeholder", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "type", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "value", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "errorText", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "warningText", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "onSubmit", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ attribute: false })
], WuiInputText.prototype, "onKeyDown", void 0);
WuiInputText = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-input-text')
], WuiInputText);

//# sourceMappingURL=index.js.map

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