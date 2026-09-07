"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[32658],{

/***/ 104277
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ ReownAuthentication)
});

// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js
var SafeLocalStorage = __webpack_require__(46036);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var ApiController = __webpack_require__(188249);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js
var BlockchainApiController = __webpack_require__(775595);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/NetworkUtil.js
var NetworkUtil = __webpack_require__(173495);
;// ./node_modules/@reown/appkit-controllers/dist/esm/src/features/siwx/reown-authentication/ReownAuthenticationMessenger.js


class ReownAuthenticationMessenger {
    constructor(params) {
        this.getNonce = params.getNonce;
    }
    async createMessage(input) {
        const params = {
            accountAddress: input.accountAddress,
            chainId: input.chainId,
            version: '1',
            domain: typeof document === 'undefined' ? 'Unknown Domain' : document.location.host,
            uri: typeof document === 'undefined' ? 'Unknown URI' : document.location.href,
            resources: this.resources,
            nonce: await this.getNonce(input),
            issuedAt: this.stringifyDate(new Date()),
            statement: undefined,
            expirationTime: undefined,
            notBefore: undefined
        };
        const methods = {
            toString: () => this.stringify(params)
        };
        return Object.assign(params, methods);
    }
    stringify(params) {
        const networkName = this.getNetworkName(params.chainId);
        return [
            `${params.domain} wants you to sign in with your ${networkName} account:`,
            params.accountAddress,
            params.statement ? `\n${params.statement}\n` : '',
            `URI: ${params.uri}`,
            `Version: ${params.version}`,
            `Chain ID: ${params.chainId}`,
            `Nonce: ${params.nonce}`,
            params.issuedAt && `Issued At: ${params.issuedAt}`,
            params.expirationTime && `Expiration Time: ${params.expirationTime}`,
            params.notBefore && `Not Before: ${params.notBefore}`,
            params.requestId && `Request ID: ${params.requestId}`,
            params.resources?.length &&
                params.resources.reduce((acc, resource) => `${acc}\n- ${resource}`, 'Resources:')
        ]
            .filter(line => typeof line === 'string')
            .join('\n')
            .trim();
    }
    getNetworkName(chainId) {
        const requestedNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        return NetworkUtil/* NetworkUtil */.L.getNetworkNameByCaipNetworkId(requestedNetworks, chainId);
    }
    stringifyDate(date) {
        return date.toISOString();
    }
}
//# sourceMappingURL=ReownAuthenticationMessenger.js.map
;// ./node_modules/@reown/appkit-controllers/dist/esm/src/features/siwx/reown-authentication/ReownAuthentication.js
//






/**
 * This is the configuration for using SIWX with Reown Authentication service.
 * It allows you to authenticate and capture user sessions through the Cloud Dashboard.
 */
class ReownAuthentication {
    constructor(params = {}) {
        this.otpUuid = null;
        this.listeners = {
            sessionChanged: []
        };
        this.localAuthStorageKey =
            params.localAuthStorageKey ||
                SafeLocalStorage/* SafeLocalStorageKeys */.Ws.SIWX_AUTH_TOKEN;
        this.localNonceStorageKey =
            params.localNonceStorageKey ||
                SafeLocalStorage/* SafeLocalStorageKeys */.Ws.SIWX_NONCE_TOKEN;
        this.required = params.required ?? true;
        this.messenger = new ReownAuthenticationMessenger({
            getNonce: this.getNonce.bind(this)
        });
    }
    async createMessage(input) {
        return this.messenger.createMessage(input);
    }
    async addSession(session) {
        const response = await this.request({
            method: 'POST',
            key: 'authenticate',
            body: {
                data: session.data,
                message: session.message,
                signature: session.signature,
                clientId: this.getClientId(),
                walletInfo: this.getWalletInfo()
            },
            headers: ['nonce', 'otp']
        });
        this.setStorageToken(response.token, this.localAuthStorageKey);
        this.emit('sessionChanged', session);
        this.setAppKitAccountUser(jwtDecode(response.token));
        this.otpUuid = null;
    }
    async getSessions(chainId, address) {
        try {
            if (!this.getStorageToken(this.localAuthStorageKey)) {
                return [];
            }
            const account = await this.request({
                method: 'GET',
                key: 'me',
                query: {},
                headers: ['auth']
            });
            if (!account) {
                return [];
            }
            const isSameAddress = account.address.toLowerCase() === address.toLowerCase();
            const isSameNetwork = account.caip2Network === chainId;
            if (!isSameAddress || !isSameNetwork) {
                return [];
            }
            const session = {
                data: {
                    accountAddress: account.address,
                    chainId: account.caip2Network
                },
                message: '',
                signature: ''
            };
            this.emit('sessionChanged', session);
            this.setAppKitAccountUser(account);
            return [session];
        }
        catch {
            return [];
        }
    }
    async revokeSession(_chainId, _address) {
        return Promise.resolve(this.clearStorageTokens());
    }
    async setSessions(sessions) {
        if (sessions.length === 0) {
            this.clearStorageTokens();
        }
        else {
            const session = (sessions.find(s => s.data.chainId === (0,ChainControllerUtil/* getActiveCaipNetwork */.kg)()?.caipNetworkId) || sessions[0]);
            await this.addSession(session);
        }
    }
    getRequired() {
        return this.required;
    }
    async getSessionAccount() {
        if (!this.getStorageToken(this.localAuthStorageKey)) {
            throw new Error('Not authenticated');
        }
        return this.request({
            method: 'GET',
            key: 'me',
            body: undefined,
            query: {
                includeAppKitAccount: true
            },
            headers: ['auth']
        });
    }
    async setSessionAccountMetadata(metadata = null) {
        if (!this.getStorageToken(this.localAuthStorageKey)) {
            throw new Error('Not authenticated');
        }
        return this.request({
            method: 'PUT',
            key: 'account-metadata',
            body: { metadata },
            headers: ['auth']
        });
    }
    on(event, callback) {
        this.listeners[event].push(callback);
        return () => {
            this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
        };
    }
    removeAllListeners() {
        const keys = Object.keys(this.listeners);
        keys.forEach(key => {
            this.listeners[key] = [];
        });
    }
    async requestEmailOtp({ email, account }) {
        const otp = await this.request({
            method: 'POST',
            key: 'otp',
            body: { email, account }
        });
        this.otpUuid = otp.uuid;
        this.messenger.resources = [`email:${email}`];
        return otp;
    }
    confirmEmailOtp({ code }) {
        return this.request({
            method: 'PUT',
            key: 'otp',
            body: { code },
            headers: ['otp']
        });
    }
    async request({ method, key, query, body, headers }) {
        const { projectId, st, sv } = this.getSDKProperties();
        const url = new URL(`${ConstantsUtil/* ConstantsUtil */.o.W3M_API_URL}/auth/v1/${String(key)}`);
        url.searchParams.set('projectId', projectId);
        url.searchParams.set('st', st);
        url.searchParams.set('sv', sv);
        if (query) {
            Object.entries(query).forEach(([queryKey, queryValue]) => url.searchParams.set(queryKey, String(queryValue)));
        }
        const response = await fetch(url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: Array.isArray(headers)
                ? headers.reduce((acc, header) => {
                    switch (header) {
                        case 'nonce':
                            acc['x-nonce-jwt'] = `Bearer ${this.getStorageToken(this.localNonceStorageKey)}`;
                            break;
                        case 'auth':
                            acc['Authorization'] = `Bearer ${this.getStorageToken(this.localAuthStorageKey)}`;
                            break;
                        case 'otp':
                            if (this.otpUuid) {
                                acc['x-otp'] = this.otpUuid;
                            }
                            break;
                        default:
                            break;
                    }
                    return acc;
                }, {})
                : undefined
        });
        if (!response.ok) {
            throw new Error(await response.text());
        }
        if (response.headers.get('content-type')?.includes('application/json')) {
            return response.json();
        }
        return null;
    }
    getStorageToken(key) {
        return SafeLocalStorage/* SafeLocalStorage */.Ud.getItem(key);
    }
    setStorageToken(token, key) {
        SafeLocalStorage/* SafeLocalStorage */.Ud.setItem(key, token);
    }
    clearStorageTokens() {
        this.otpUuid = null;
        SafeLocalStorage/* SafeLocalStorage */.Ud.removeItem(this.localAuthStorageKey);
        SafeLocalStorage/* SafeLocalStorage */.Ud.removeItem(this.localNonceStorageKey);
        this.emit('sessionChanged', undefined);
    }
    async getNonce() {
        const { nonce, token } = await this.request({
            method: 'GET',
            key: 'nonce'
        });
        this.setStorageToken(token, this.localNonceStorageKey);
        return nonce;
    }
    getClientId() {
        return BlockchainApiController/* BlockchainApiController */.T.state.clientId;
    }
    getWalletInfo() {
        const walletInfo = ChainController/* ChainController */.W.getAccountData()?.connectedWalletInfo;
        if (!walletInfo) {
            return undefined;
        }
        if ('social' in walletInfo && 'identifier' in walletInfo) {
            const social = walletInfo['social'];
            const identifier = walletInfo['identifier'];
            return { type: 'social', social, identifier };
        }
        const { name, icon } = walletInfo;
        let type = 'unknown';
        switch (walletInfo.type) {
            case 'EXTERNAL':
            case 'INJECTED':
            case 'ANNOUNCED':
                type = 'extension';
                break;
            case 'WALLET_CONNECT':
                type = 'walletconnect';
                break;
            default:
                type = 'unknown';
        }
        return {
            type,
            name,
            icon
        };
    }
    getSDKProperties() {
        return ApiController/* ApiController */.N._getSdkProperties();
    }
    emit(event, data) {
        this.listeners[event].forEach(listener => listener(data));
    }
    setAppKitAccountUser(session) {
        const { email } = session;
        if (email) {
            Object.values(ConstantsUtil/* ConstantsUtil */.o.CHAIN).forEach(chainNamespace => {
                ChainController/* ChainController */.W.setAccountProp('user', { email }, chainNamespace);
            });
        }
    }
}
/**
 * Decodes a JWT token and returns its payload
 * @param token - The JWT token to decode
 * @returns The decoded payload or null if invalid
 */
function jwtDecode(token) {
    // Split the token into parts
    const parts = token.split('.');
    // Check if the token has the correct format (header.payload.signature)
    if (parts.length !== 3) {
        throw new Error('Invalid token');
    }
    // Decode the payload (second part)
    const payload = parts[1];
    if (typeof payload !== 'string') {
        throw new Error('Invalid token');
    }
    // Convert base64url to base64
    const base64 = payload.replace(/-/gu, '+').replace(/_/gu, '/');
    // Add padding if needed
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
    // Decode and parse the JSON
    const decoded = JSON.parse(atob(padded));
    return decoded;
}
//# sourceMappingURL=ReownAuthentication.js.map

/***/ },

/***/ 732658
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mDataCaptureOtpConfirmView: () => (/* reexport */ W3mDataCaptureOtpConfirmView),
  W3mDataCaptureView: () => (/* reexport */ W3mDataCaptureView),
  W3mEmailSuffixesWidget: () => (/* reexport */ W3mEmailSuffixesWidget),
  W3mRecentEmailsWidget: () => (/* reexport */ W3mRecentEmailsWidget)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-email-suffixes-widget/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  .email-sufixes {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-3xs);
    overflow-x: auto;
    max-width: 100%;
    margin-top: var(--wui-spacing-s);
    margin-bottom: calc(-1 * var(--wui-spacing-m));
    padding-bottom: var(--wui-spacing-m);
    margin-left: calc(-1 * var(--wui-spacing-m));
    margin-right: calc(-1 * var(--wui-spacing-m));
    padding-left: var(--wui-spacing-m);
    padding-right: var(--wui-spacing-m);

    &::-webkit-scrollbar {
      display: none;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-email-suffixes-widget/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const options = [
    '@gmail.com',
    '@outlook.com',
    '@yahoo.com',
    '@hotmail.com',
    '@aol.com',
    '@icloud.com',
    '@zoho.com'
];
let W3mEmailSuffixesWidget = class W3mEmailSuffixesWidget extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.email = '';
    }
    render() {
        const items = options.filter(this.filter.bind(this)).map(this.item.bind(this));
        if (items.length === 0) {
            return null;
        }
        return (0,lit/* html */.qy) `<div class="email-sufixes">${items}</div>`;
    }
    filter(option) {
        if (!this.email) {
            return false;
        }
        const pieces = this.email.split('@');
        if (pieces.length < 2) {
            return true;
        }
        const host = pieces.pop();
        return option.includes(host) && option !== `@${host}`;
    }
    item(option) {
        const handleClick = () => {
            const pieces = this.email.split('@');
            if (pieces.length > 1) {
                pieces.pop();
            }
            const newEmail = pieces[0] + option;
            this.dispatchEvent(new CustomEvent('change', {
                detail: newEmail,
                bubbles: true,
                composed: true
            }));
        };
        return (0,lit/* html */.qy) `<wui-button variant="neutral" size="sm" @click=${handleClick}
      >${option}</wui-button
    >`;
    }
};
W3mEmailSuffixesWidget.styles = [styles];
__decorate([
    (0,decorators/* property */.MZ)()
], W3mEmailSuffixesWidget.prototype, "email", void 0);
W3mEmailSuffixesWidget = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-email-suffixes-widget')
], W3mEmailSuffixesWidget);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-recent-emails-widget/styles.js

/* harmony default export */ const w3m_recent_emails_widget_styles = ((0,lit/* css */.AH) `
  .recent-emails {
    display: flex;
    flex-direction: column;
    padding: var(--wui-spacing-s) 0;
    border-top: 1px solid var(--wui-color-gray-glass-005);
    border-bottom: 1px solid var(--wui-color-gray-glass-005);
  }

  .recent-emails-heading {
    margin-bottom: var(--wui-spacing-s);
  }

  .recent-emails-list-item {
    --wui-color-gray-glass-002: transparent;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-recent-emails-widget/index.js
var w3m_recent_emails_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let W3mRecentEmailsWidget = class W3mRecentEmailsWidget extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.emails = [];
    }
    render() {
        if (this.emails.length === 0) {
            return null;
        }
        return (0,lit/* html */.qy) `<div class="recent-emails">
      <wui-text variant="micro-600" color="fg-200" class="recent-emails-heading"
        >Recently used emails</wui-text
      >
      ${this.emails.map(this.item.bind(this))}
    </div>`;
    }
    item(email) {
        const handleClick = () => {
            this.dispatchEvent(new CustomEvent('select', {
                detail: email,
                bubbles: true,
                composed: true
            }));
        };
        return (0,lit/* html */.qy) `<wui-list-item
      @click=${handleClick}
      ?chevron=${true}
      icon="mail"
      iconVariant="overlay"
      class="recent-emails-list-item"
    >
      <wui-text variant="paragraph-500" color="fg-100">${email}</wui-text>
    </wui-list-item>`;
    }
};
W3mRecentEmailsWidget.styles = [w3m_recent_emails_widget_styles];
w3m_recent_emails_widget_decorate([
    (0,decorators/* property */.MZ)()
], W3mRecentEmailsWidget.prototype, "emails", void 0);
W3mRecentEmailsWidget = w3m_recent_emails_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-recent-emails-widget')
], W3mRecentEmailsWidget);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/features/siwx/reown-authentication/ReownAuthentication.js + 1 modules
var ReownAuthentication = __webpack_require__(104277);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-email-otp-widget/index.js + 6 modules
var w3m_email_otp_widget = __webpack_require__(576892);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-data-capture-otp-confirm-view/index.js
var w3m_data_capture_otp_confirm_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let W3mDataCaptureOtpConfirmView = class W3mDataCaptureOtpConfirmView extends w3m_email_otp_widget/* W3mEmailOtpWidget */.H {
    constructor() {
        super(...arguments);
        this.siwx = OptionsController/* OptionsController */.H.state.siwx;
        this.onOtpSubmit = async (otp) => {
            await this.siwx.confirmEmailOtp({ code: otp });
            RouterController/* RouterController */.I.replace('SIWXSignMessage');
        };
        this.onOtpResend = async (email) => {
            const accountData = ChainController/* ChainController */.W.getAccountData();
            if (!accountData?.caipAddress) {
                throw new Error('No account data found');
            }
            await this.siwx.requestEmailOtp({
                email,
                account: accountData.caipAddress
            });
        };
    }
    connectedCallback() {
        if (!this.siwx || !(this.siwx instanceof ReownAuthentication/* ReownAuthentication */.u)) {
            SnackController/* SnackController */.P.showError('ReownAuthentication is not initialized.');
        }
        super.connectedCallback();
    }
    shouldSubmitOnOtpChange() {
        return this.otp.length === w3m_email_otp_widget/* W3mEmailOtpWidget */.H.OTP_LENGTH;
    }
};
w3m_data_capture_otp_confirm_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDataCaptureOtpConfirmView.prototype, "siwx", void 0);
W3mDataCaptureOtpConfirmView = w3m_data_capture_otp_confirm_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-data-capture-otp-confirm-view')
], W3mDataCaptureOtpConfirmView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js
var SafeLocalStorage = __webpack_require__(46036);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-data-capture-view/styles.js

/* harmony default export */ const w3m_data_capture_view_styles = ((0,lit/* css */.AH) `
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);

    transition-property: margin, height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    margin-top: -100px;

    &[data-state='loading'] {
      margin-top: 0px;
    }

    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 252px;
      width: 360px;
      background: radial-gradient(
        96.11% 53.95% at 50% 51.28%,
        transparent 0%,
        color-mix(in srgb, var(--wui-color-bg-100) 5%, transparent) 49%,
        color-mix(in srgb, var(--wui-color-bg-100) 65%, transparent) 99.43%
      );
    }
  }

  .hero-main-icon {
    width: 176px;
    transition-property: background-color;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      width: 56px;
    }
  }

  .hero-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
    flex-wrap: nowrap;
    min-width: fit-content;

    &:nth-child(1) {
      transform: translateX(-30px);
    }

    &:nth-child(2) {
      transform: translateX(30px);
    }

    &:nth-child(4) {
      transform: translateX(40px);
    }

    transition-property: height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    height: 68px;

    &[data-state='loading'] {
      height: 0px;
    }
  }

  .hero-row-icon {
    opacity: 0.1;
    transition-property: opacity;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      opacity: 0;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-data-capture-view/index.js
var w3m_data_capture_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mDataCaptureView = class W3mDataCaptureView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.email = RouterController/* RouterController */.I.state.data?.email ?? ChainController/* ChainController */.W.getAccountData()?.user?.email ?? '';
        this.address = ChainController/* ChainController */.W.getAccountData()?.address ?? '';
        this.loading = false;
        this.appName = OptionsController/* OptionsController */.H.state.metadata?.name ?? 'AppKit';
        this.siwx = OptionsController/* OptionsController */.H.state.siwx;
        this.isRequired = Array.isArray(OptionsController/* OptionsController */.H.state.remoteFeatures?.emailCapture) &&
            OptionsController/* OptionsController */.H.state.remoteFeatures?.emailCapture.includes('required');
        this.recentEmails = this.getRecentEmails();
    }
    connectedCallback() {
        if (!this.siwx || !(this.siwx instanceof ReownAuthentication/* ReownAuthentication */.u)) {
            SnackController/* SnackController */.P.showError('ReownAuthentication is not initialized. Please contact support.');
        }
        super.connectedCallback();
    }
    firstUpdated() {
        this.loading = false;
        this.recentEmails = this.getRecentEmails();
        if (this.email) {
            this.onSubmit();
        }
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['3xs', 'm', 'm', 'm']} gap="l">
        ${this.hero()} ${this.paragraph()} ${this.emailInput()} ${this.recentEmailsWidget()}
        ${this.footerActions()}
      </wui-flex>
    `;
    }
    hero() {
        return (0,lit/* html */.qy) `
      <div class="hero" data-state=${this.loading ? 'loading' : 'default'}>
        ${this.heroRow(['id', 'mail', 'wallet', 'x', 'solana', 'qrCode'])}
        ${this.heroRow(['mail', 'farcaster', 'wallet', 'discord', 'mobile', 'qrCode'])}
        <div class="hero-row">
          ${this.heroIcon('github')} ${this.heroIcon('bank')}
          <wui-icon-box
            size="xl"
            iconSize="xxl"
            iconColor=${this.loading ? 'fg-100' : 'accent-100'}
            backgroundColor=${this.loading ? 'fg-100' : 'accent-100'}
            icon=${this.loading ? 'id' : 'user'}
            isOpaque
            class="hero-main-icon"
            data-state=${this.loading ? 'loading' : 'default'}
          >
          </wui-icon-box>
          ${this.heroIcon('id')} ${this.heroIcon('card')}
        </div>
        ${this.heroRow(['google', 'id', 'github', 'verify', 'apple', 'mobile'])}
      </div>
    `;
    }
    heroRow(icons) {
        return (0,lit/* html */.qy) `
      <div class="hero-row" data-state=${this.loading ? 'loading' : 'default'}>
        ${icons.map(this.heroIcon.bind(this))}
      </div>
    `;
    }
    heroIcon(icon) {
        return (0,lit/* html */.qy) `
      <wui-icon-box
        size="xl"
        iconSize="xxl"
        iconColor="fg-100"
        backgroundColor="fg-100"
        icon=${icon}
        data-state=${this.loading ? 'loading' : 'default'}
        isOpaque
        class="hero-row-icon"
      >
      </wui-icon-box>
    `;
    }
    paragraph() {
        if (this.loading) {
            return (0,lit/* html */.qy) `
        <wui-text variant="paragraph-400" color="fg-200" align="center"
          >We are verifying your account with email
          <wui-text variant="paragraph-600" color="accent-100">${this.email}</wui-text> and address
          <wui-text variant="paragraph-600" color="fg-100">
            ${esm_exports/* UiHelperUtil */.Zv.getTruncateString({
                string: this.address,
                charsEnd: 4,
                charsStart: 4,
                truncate: 'middle'
            })} </wui-text
          >, please wait a moment.</wui-text
        >
      `;
        }
        if (this.isRequired) {
            return (0,lit/* html */.qy) `
        <wui-text variant="paragraph-600" color="fg-100" align="center">
          ${this.appName} requires your email for authentication.
        </wui-text>
      `;
        }
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="xs" alignItems="center">
        <wui-text variant="paragraph-600" color="fg-100" align="center" size>
          ${this.appName} would like to collect your email.
        </wui-text>

        <wui-text variant="small-400" color="fg-200" align="center">
          Don't worry, it's optional&mdash;you can skip this step.
        </wui-text>
      </wui-flex>
    `;
    }
    emailInput() {
        if (this.loading) {
            return null;
        }
        const keydownHandler = (event) => {
            if (event.key === 'Enter') {
                this.onSubmit();
            }
        };
        const changeHandler = (event) => {
            this.email = event.detail;
        };
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column">
        <wui-email-input
          .value=${this.email}
          .disabled=${this.loading}
          @inputChange=${changeHandler}
          @keydown=${keydownHandler}
        ></wui-email-input>

        <w3m-email-suffixes-widget
          .email=${this.email}
          @change=${changeHandler}
        ></w3m-email-suffixes-widget>
      </wui-flex>
    `;
    }
    recentEmailsWidget() {
        if (this.recentEmails.length === 0 || this.loading) {
            return null;
        }
        const recentEmailSelectHandler = (event) => {
            this.email = event.detail;
            this.onSubmit();
        };
        return (0,lit/* html */.qy) `
      <w3m-recent-emails-widget
        .emails=${this.recentEmails}
        @select=${recentEmailSelectHandler}
      ></w3m-recent-emails-widget>
    `;
    }
    footerActions() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="row" fullWidth gap="s">
        ${this.isRequired
            ? null
            : (0,lit/* html */.qy) `<wui-button
              size="lg"
              variant="neutral"
              fullWidth
              .disabled=${this.loading}
              @click=${this.onSkip.bind(this)}
              >Skip this step</wui-button
            >`}

        <wui-button
          size="lg"
          variant="main"
          type="submit"
          fullWidth
          .disabled=${!this.email || !this.isValidEmail(this.email)}
          .loading=${this.loading}
          @click=${this.onSubmit.bind(this)}
        >
          Continue
        </wui-button>
      </wui-flex>
    `;
    }
    async onSubmit() {
        if (!(this.siwx instanceof ReownAuthentication/* ReownAuthentication */.u)) {
            SnackController/* SnackController */.P.showError('ReownAuthentication is not initialized. Please contact support.');
            return;
        }
        const account = ChainController/* ChainController */.W.getActiveCaipAddress();
        if (!account) {
            throw new Error('Account is not connected.');
        }
        if (!this.isValidEmail(this.email)) {
            SnackController/* SnackController */.P.showError('Please provide a valid email.');
            return;
        }
        try {
            this.loading = true;
            const otp = await this.siwx.requestEmailOtp({
                email: this.email,
                account
            });
            this.pushRecentEmail(this.email);
            if (otp.uuid === null) {
                RouterController/* RouterController */.I.replace('SIWXSignMessage');
            }
            else {
                RouterController/* RouterController */.I.replace('DataCaptureOtpConfirm', { email: this.email });
            }
        }
        catch (error) {
            SnackController/* SnackController */.P.showError('Failed to send email OTP');
            this.loading = false;
        }
    }
    onSkip() {
        RouterController/* RouterController */.I.replace('SIWXSignMessage');
    }
    getRecentEmails() {
        const recentEmails = SafeLocalStorage/* SafeLocalStorage */.Ud.getItem(SafeLocalStorage/* SafeLocalStorageKeys */.Ws.RECENT_EMAILS);
        const parsedEmails = recentEmails ? recentEmails.split(',') : [];
        return parsedEmails.filter(this.isValidEmail.bind(this)).slice(0, 3);
    }
    pushRecentEmail(email) {
        const recentEmails = this.getRecentEmails();
        const newEmails = Array.from(new Set([email, ...recentEmails])).slice(0, 3);
        SafeLocalStorage/* SafeLocalStorage */.Ud.setItem(SafeLocalStorage/* SafeLocalStorageKeys */.Ws.RECENT_EMAILS, newEmails.join(','));
    }
    isValidEmail(email) {
        return /^\S+@\S+\.\S+$/u.test(email);
    }
};
W3mDataCaptureView.styles = [w3m_data_capture_view_styles];
w3m_data_capture_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDataCaptureView.prototype, "email", void 0);
w3m_data_capture_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDataCaptureView.prototype, "address", void 0);
w3m_data_capture_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDataCaptureView.prototype, "loading", void 0);
w3m_data_capture_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDataCaptureView.prototype, "appName", void 0);
w3m_data_capture_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDataCaptureView.prototype, "siwx", void 0);
w3m_data_capture_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDataCaptureView.prototype, "isRequired", void 0);
w3m_data_capture_view_decorate([
    (0,decorators/* state */.wk)()
], W3mDataCaptureView.prototype, "recentEmails", void 0);
W3mDataCaptureView = w3m_data_capture_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-data-capture-view')
], W3mDataCaptureView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/reown-authentication/data-capture.js




//# sourceMappingURL=data-capture.js.map

/***/ }

}]);