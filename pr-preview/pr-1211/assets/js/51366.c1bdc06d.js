"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[51366],{

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

/***/ 451366
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mApproveTransactionView: () => (/* reexport */ W3mApproveTransactionView),
  W3mRegisterAccountNameSuccess: () => (/* reexport */ W3mRegisterAccountNameSuccess),
  W3mRegisterAccountNameView: () => (/* reexport */ W3mRegisterAccountNameView),
  W3mSmartAccountSettingsView: () => (/* reexport */ W3mSmartAccountSettingsView),
  W3mUpgradeWalletView: () => (/* reexport */ W3mUpgradeWalletView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(323096);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(568996);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-approve-transaction-view/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-approve-transaction-view/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const PAGE_HEIGHT = 600;
const PAGE_WIDTH = 360;
const HEADER_HEIGHT = 64;
let W3mApproveTransactionView = class W3mApproveTransactionView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.bodyObserver = undefined;
        this.unsubscribe = [];
        this.iframe = document.getElementById('w3m-iframe');
        this.ready = false;
        this.unsubscribe.push(...[
            ModalController/* ModalController */.W.subscribeKey('open', isOpen => {
                if (!isOpen) {
                    this.onHideIframe();
                }
            }),
            ModalController/* ModalController */.W.subscribeKey('shake', val => {
                if (val) {
                    this.iframe.style.animation = `w3m-shake 500ms var(--apkt-easings-ease-out-power-2)`;
                }
                else {
                    this.iframe.style.animation = 'none';
                }
            })
        ]);
    }
    disconnectedCallback() {
        this.onHideIframe();
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.bodyObserver?.unobserve(window.document.body);
    }
    async firstUpdated() {
        await this.syncTheme();
        this.iframe.style.display = 'block';
        const container = this?.renderRoot?.querySelector('div');
        this.bodyObserver = new ResizeObserver(entries => {
            const contentBoxSize = entries?.[0]?.contentBoxSize;
            const width = contentBoxSize?.[0]?.inlineSize;
            this.iframe.style.height = `${PAGE_HEIGHT}px`;
            container.style.height = `${PAGE_HEIGHT}px`;
            if (OptionsController/* OptionsController */.H.state.enableEmbedded) {
                this.updateFrameSizeForEmbeddedMode();
            }
            else if (width && width <= 430) {
                this.iframe.style.width = '100%';
                this.iframe.style.left = '0px';
                this.iframe.style.bottom = '0px';
                this.iframe.style.top = 'unset';
                this.onShowIframe();
            }
            else {
                this.iframe.style.width = `${PAGE_WIDTH}px`;
                this.iframe.style.left = `calc(50% - ${PAGE_WIDTH / 2}px)`;
                this.iframe.style.top = `calc(50% - ${PAGE_HEIGHT / 2}px + ${HEADER_HEIGHT / 2}px)`;
                this.iframe.style.bottom = 'unset';
                this.onShowIframe();
            }
        });
        this.bodyObserver.observe(window.document.body);
    }
    render() {
        return (0,lit/* html */.qy) `<div data-ready=${this.ready} id="w3m-frame-container"></div>`;
    }
    onShowIframe() {
        const isMobile = window.innerWidth <= 430;
        this.ready = true;
        this.iframe.style.animation = isMobile
            ? 'w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)'
            : 'w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)';
    }
    onHideIframe() {
        this.iframe.style.display = 'none';
        this.iframe.style.animation = 'w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)';
    }
    async syncTheme() {
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        if (authConnector) {
            const themeMode = ThemeController/* ThemeController */.W.getSnapshot().themeMode;
            const themeVariables = ThemeController/* ThemeController */.W.getSnapshot().themeVariables;
            await authConnector.provider.syncTheme({
                themeVariables,
                w3mThemeVariables: (0,ThemeUtil/* getW3mThemeVariables */.o)(themeVariables, themeMode)
            });
        }
    }
    async updateFrameSizeForEmbeddedMode() {
        const container = this?.renderRoot?.querySelector('div');
        await new Promise(resolve => {
            setTimeout(resolve, 300);
        });
        const rect = this.getBoundingClientRect();
        container.style.width = '100%';
        this.iframe.style.left = `${rect.left}px`;
        this.iframe.style.top = `${rect.top}px`;
        this.iframe.style.width = `${rect.width}px`;
        this.iframe.style.height = `${rect.height}px`;
        this.onShowIframe();
    }
};
W3mApproveTransactionView.styles = styles;
__decorate([
    (0,decorators/* state */.wk)()
], W3mApproveTransactionView.prototype, "ready", void 0);
W3mApproveTransactionView = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-approve-transaction-view')
], W3mApproveTransactionView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(562944);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var utils_ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-semantic-chip/styles.js

/* harmony default export */ const wui_semantic_chip_styles = ((0,ThemeHelperUtil/* css */.AH) `
  a {
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
        ${({ easings }) => easings['ease-out-power-2']},
      border ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
    color: ${({ tokens }) => tokens.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
    color: ${({ tokens }) => tokens.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({ tokens }) => tokens.core.backgroundWarning};
    color: ${({ tokens }) => tokens.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
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
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({ tokens }) => tokens.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({ tokens }) => tokens.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({ tokens }) => tokens.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({ tokens }) => tokens.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({ tokens }) => tokens.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({ tokens }) => tokens.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-semantic-chip/index.js
var wui_semantic_chip_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const TEXT_BY_SIZE = {
    sm: 'md-regular',
    md: 'lg-regular',
    lg: 'lg-regular'
};
const ICON_BY_TYPE = {
    success: 'sealCheck',
    error: 'warning',
    warning: 'exclamationCircle'
};
let WuiSemanticChip = class WuiSemanticChip extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.type = 'success';
        this.size = 'md';
        this.imageSrc = undefined;
        this.disabled = false;
        this.href = '';
        this.text = undefined;
    }
    render() {
        return (0,lit/* html */.qy) `
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled ? 'disabled' : ''}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${TEXT_BY_SIZE[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `;
    }
    imageTemplate() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} size="inherit"></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-icon
      name=${ICON_BY_TYPE[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`;
    }
};
WuiSemanticChip.styles = [utils_ThemeUtil/* resetStyles */.W5, utils_ThemeUtil/* elementStyles */.fD, wui_semantic_chip_styles];
wui_semantic_chip_decorate([
    (0,decorators/* property */.MZ)()
], WuiSemanticChip.prototype, "type", void 0);
wui_semantic_chip_decorate([
    (0,decorators/* property */.MZ)()
], WuiSemanticChip.prototype, "size", void 0);
wui_semantic_chip_decorate([
    (0,decorators/* property */.MZ)()
], WuiSemanticChip.prototype, "imageSrc", void 0);
wui_semantic_chip_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiSemanticChip.prototype, "disabled", void 0);
wui_semantic_chip_decorate([
    (0,decorators/* property */.MZ)()
], WuiSemanticChip.prototype, "href", void 0);
wui_semantic_chip_decorate([
    (0,decorators/* property */.MZ)()
], WuiSemanticChip.prototype, "text", void 0);
WuiSemanticChip = wui_semantic_chip_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-semantic-chip')
], WuiSemanticChip);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-semantic-chip.js

//# sourceMappingURL=wui-semantic-chip.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(346709);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-upgrade-wallet-view/index.js
var w3m_upgrade_wallet_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mUpgradeWalletView = class W3mUpgradeWalletView extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${ConstantsUtil/* ConstantsUtil */.oU.SECURE_SITE_DASHBOARD}
          href=${ConstantsUtil/* ConstantsUtil */.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${ConstantsUtil/* ConstantsUtil */.oU.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `;
    }
};
W3mUpgradeWalletView = w3m_upgrade_wallet_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-upgrade-wallet-view')
], W3mUpgradeWalletView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var utils_ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SendController.js
var SendController = __webpack_require__(308351);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameStorage.js
var W3mFrameStorage = __webpack_require__(756508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(110152);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-smart-account-settings-view/index.js
var w3m_smart_account_settings_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mSmartAccountSettingsView = class W3mSmartAccountSettingsView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.loading = false;
        this.switched = false;
        this.text = '';
        this.network = ChainController/* ChainController */.W.state.activeCaipNetwork;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="2" .padding=${['6', '4', '3', '4']}>
        ${this.togglePreferredAccountTypeTemplate()} ${this.toggleSmartAccountVersionTemplate()}
      </wui-flex>
    `;
    }
    toggleSmartAccountVersionTemplate() {
        return (0,lit/* html */.qy) `
      <w3m-tooltip-trigger text="Changing the smart account version will reload the page">
        <wui-list-item
          icon=${this.isV6() ? 'arrowTop' : 'arrowBottom'}
          ?rounded=${true}
          ?chevron=${true}
          data-testid="account-toggle-smart-account-version"
          @click=${this.toggleSmartAccountVersion.bind(this)}
        >
          <wui-text variant="lg-regular" color="primary"
            >Force Smart Account Version ${this.isV6() ? '7' : '6'}</wui-text
          >
        </wui-list-item>
      </w3m-tooltip-trigger>
    `;
    }
    isV6() {
        const currentVersion = W3mFrameStorage/* W3mFrameStorage */.o.get('dapp_smart_account_version') || 'v6';
        return currentVersion === 'v6';
    }
    toggleSmartAccountVersion() {
        W3mFrameStorage/* W3mFrameStorage */.o.set('dapp_smart_account_version', this.isV6() ? 'v7' : 'v6');
        if (typeof window !== 'undefined') {
            window?.location?.reload();
        }
    }
    togglePreferredAccountTypeTemplate() {
        const namespace = this.network?.chainNamespace;
        const isNetworkEnabled = ChainController/* ChainController */.W.checkIfSmartAccountEnabled();
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(namespace);
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        if (!authConnector || connectorId !== utils_ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH || !isNetworkEnabled) {
            return null;
        }
        if (!this.switched) {
            this.text =
                (0,ChainControllerUtil/* getPreferredAccountType */.lj)(namespace) === W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                    ? 'Switch to your EOA'
                    : 'Switch to your Smart Account';
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${true}
        ?chevron=${true}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `;
    }
    async changePreferredAccountType() {
        const namespace = this.network?.chainNamespace;
        const isSmartAccountEnabled = ChainController/* ChainController */.W.checkIfSmartAccountEnabled();
        const accountTypeTarget = (0,ChainControllerUtil/* getPreferredAccountType */.lj)(namespace) === W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT ||
            !isSmartAccountEnabled
            ? W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.EOA
            : W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT;
        const authConnector = ConnectorController/* ConnectorController */.a.getAuthConnector();
        if (!authConnector) {
            return;
        }
        this.loading = true;
        await ConnectionController/* ConnectionController */.x.setPreferredAccountType(accountTypeTarget, namespace);
        this.text =
            accountTypeTarget === W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                ? 'Switch to your EOA'
                : 'Switch to your Smart Account';
        this.switched = true;
        SendController/* SendController */.R.resetSend();
        this.loading = false;
        this.requestUpdate();
    }
};
w3m_smart_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSmartAccountSettingsView.prototype, "loading", void 0);
w3m_smart_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSmartAccountSettingsView.prototype, "switched", void 0);
w3m_smart_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSmartAccountSettingsView.prototype, "text", void 0);
w3m_smart_account_settings_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSmartAccountSettingsView.prototype, "network", void 0);
W3mSmartAccountSettingsView = w3m_smart_account_settings_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-smart-account-settings-view')
], W3mSmartAccountSettingsView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/lit/directives/ref.js + 3 modules
var ref = __webpack_require__(791629);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EnsController.js + 1 modules
var EnsController = __webpack_require__(624942);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js + 1 modules
var wui_loading_spinner = __webpack_require__(502378);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js + 1 modules
var wui_tag = __webpack_require__(46514);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-account-name-suggestion-item/styles.js

/* harmony default export */ const wui_account_name_suggestion_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    padding: ${({ spacing }) => spacing[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
      border-radius: ${({ borderRadius }) => borderRadius[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-account-name-suggestion-item/index.js
var wui_account_name_suggestion_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiAccountNameSuggestionItem = class WuiAccountNameSuggestionItem extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.name = '';
        this.registered = false;
        this.loading = false;
        this.disabled = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `;
    }
    templateRightContent() {
        if (this.loading) {
            return (0,lit/* html */.qy) `<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`;
        }
        return this.registered
            ? (0,lit/* html */.qy) `<wui-tag variant="info" size="sm">Registered</wui-tag>`
            : (0,lit/* html */.qy) `<wui-tag variant="success" size="sm">Available</wui-tag>`;
    }
};
WuiAccountNameSuggestionItem.styles = [utils_ThemeUtil/* resetStyles */.W5, utils_ThemeUtil/* elementStyles */.fD, wui_account_name_suggestion_item_styles];
wui_account_name_suggestion_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiAccountNameSuggestionItem.prototype, "name", void 0);
wui_account_name_suggestion_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiAccountNameSuggestionItem.prototype, "registered", void 0);
wui_account_name_suggestion_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiAccountNameSuggestionItem.prototype, "loading", void 0);
wui_account_name_suggestion_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiAccountNameSuggestionItem.prototype, "disabled", void 0);
WuiAccountNameSuggestionItem = wui_account_name_suggestion_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-account-name-suggestion-item')
], WuiAccountNameSuggestionItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-account-name-suggestion-item.js

//# sourceMappingURL=wui-account-name-suggestion-item.js.map
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/index.js + 1 modules
var wui_input_text = __webpack_require__(565760);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ens-input/styles.js

/* harmony default export */ const wui_ens_input_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({ spacing }) => spacing[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({ spacing }) => spacing[1]};
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ens-input/index.js
var wui_ens_input_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiEnsInput = class WuiEnsInput extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.loading = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-input-text
        value=${(0,if_defined/* ifDefined */.J)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value || ''}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `;
    }
};
WuiEnsInput.styles = [utils_ThemeUtil/* resetStyles */.W5, wui_ens_input_styles];
wui_ens_input_decorate([
    (0,decorators/* property */.MZ)()
], WuiEnsInput.prototype, "errorMessage", void 0);
wui_ens_input_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiEnsInput.prototype, "disabled", void 0);
wui_ens_input_decorate([
    (0,decorators/* property */.MZ)()
], WuiEnsInput.prototype, "value", void 0);
wui_ens_input_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiEnsInput.prototype, "loading", void 0);
wui_ens_input_decorate([
    (0,decorators/* property */.MZ)({ attribute: false })
], WuiEnsInput.prototype, "onKeyDown", void 0);
WuiEnsInput = wui_ens_input_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-ens-input')
], WuiEnsInput);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-ens-input.js

//# sourceMappingURL=wui-ens-input.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var exports_wui_icon = __webpack_require__(313163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-link.js
var wui_icon_link = __webpack_require__(651068);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js
var exports_wui_loading_spinner = __webpack_require__(103104);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/HelpersUtil.js
var HelpersUtil = __webpack_require__(234558);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-register-account-name-view/styles.js

/* harmony default export */ const w3m_register_account_name_view_styles = ((0,esm_exports/* css */.AH) `
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[6]};
    padding: ${({ spacing }) => spacing[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-register-account-name-view/index.js
var w3m_register_account_name_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















let W3mRegisterAccountNameView = class W3mRegisterAccountNameView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.formRef = (0,ref/* createRef */._)();
        this.usubscribe = [];
        this.name = '';
        this.error = '';
        this.loading = EnsController/* EnsController */.f.state.loading;
        this.suggestions = EnsController/* EnsController */.f.state.suggestions;
        this.profileName = ChainController/* ChainController */.W.getAccountData()?.profileName;
        this.onDebouncedNameInputChange = CoreHelperUtil/* CoreHelperUtil */.w.debounce((value) => {
            if (value.length < 4) {
                this.error = 'Name must be at least 4 characters long';
            }
            else if (!HelpersUtil/* HelpersUtil */.y.isValidReownName(value)) {
                this.error = 'The value is not a valid username';
            }
            else {
                this.error = '';
                EnsController/* EnsController */.f.getSuggestions(value);
            }
        });
        this.usubscribe.push(...[
            EnsController/* EnsController */.f.subscribe(val => {
                this.suggestions = val.suggestions;
                this.loading = val.loading;
            }),
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                this.profileName = val?.profileName;
                if (val?.profileName) {
                    this.error = 'You already own a name';
                }
            })
        ]);
    }
    firstUpdated() {
        this.formRef.value?.addEventListener('keydown', this.onEnterKey.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.usubscribe.forEach(unsub => unsub());
        this.formRef.value?.removeEventListener('keydown', this.onEnterKey.bind(this));
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${['1', '3', '4', '3']}
      >
        <form ${(0,ref/* ref */.K)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `;
    }
    submitButtonTemplate() {
        const isRegistered = this.suggestions.find(s => s.name?.split('.')?.[0] === this.name && s.registered);
        if (this.loading) {
            return (0,lit/* html */.qy) `<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;
        }
        const reownName = `${this.name}${utils_ConstantsUtil/* ConstantsUtil */.o.WC_NAME_SUFFIX}`;
        return (0,lit/* html */.qy) `
      <wui-icon-link
        ?disabled=${Boolean(isRegistered)}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${isRegistered ? 'default' : 'accent-primary'}
        @click=${() => this.onSubmitName(reownName)}
      >
      </wui-icon-link>
    `;
    }
    onNameInputChange(event) {
        const value = HelpersUtil/* HelpersUtil */.y.validateReownName(event.detail || '');
        this.name = value;
        this.onDebouncedNameInputChange(value);
    }
    onKeyDown(event) {
        if (event.key.length === 1 && !HelpersUtil/* HelpersUtil */.y.isValidReownName(event.key)) {
            event.preventDefault();
        }
    }
    templateSuggestions() {
        if (!this.name || this.name.length < 4 || this.error) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(suggestion => (0,lit/* html */.qy) `<wui-account-name-suggestion-item
            name=${suggestion.name}
            ?registered=${suggestion.registered}
            ?loading=${this.loading}
            ?disabled=${suggestion.registered || this.loading}
            data-testid="account-name-suggestion"
            @click=${() => this.onSubmitName(suggestion.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`;
    }
    isAllowedToSubmit(name) {
        const pureName = name.split('.')?.[0];
        const isRegistered = this.suggestions.find(s => s.name?.split('.')?.[0] === pureName && s.registered);
        return (!this.loading &&
            !this.error &&
            !this.profileName &&
            pureName &&
            EnsController/* EnsController */.f.validateName(pureName) &&
            !isRegistered);
    }
    async onSubmitName(name) {
        try {
            if (!this.isAllowedToSubmit(name)) {
                return;
            }
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'REGISTER_NAME_INITIATED',
                properties: {
                    isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                        W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                    ensName: name
                }
            });
            await EnsController/* EnsController */.f.registerName(name);
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'REGISTER_NAME_SUCCESS',
                properties: {
                    isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                        W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                    ensName: name
                }
            });
        }
        catch (error) {
            SnackController/* SnackController */.P.showError(error.message);
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'REGISTER_NAME_ERROR',
                properties: {
                    isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                        W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                    ensName: name,
                    error: CoreHelperUtil/* CoreHelperUtil */.w.parseError(error)
                }
            });
        }
    }
    onEnterKey(event) {
        if (event.key === 'Enter' && this.name && this.isAllowedToSubmit(this.name)) {
            const reownName = `${this.name}${utils_ConstantsUtil/* ConstantsUtil */.o.WC_NAME_SUFFIX}`;
            this.onSubmitName(reownName);
        }
    }
};
W3mRegisterAccountNameView.styles = w3m_register_account_name_view_styles;
w3m_register_account_name_view_decorate([
    (0,decorators/* property */.MZ)()
], W3mRegisterAccountNameView.prototype, "errorMessage", void 0);
w3m_register_account_name_view_decorate([
    (0,decorators/* state */.wk)()
], W3mRegisterAccountNameView.prototype, "name", void 0);
w3m_register_account_name_view_decorate([
    (0,decorators/* state */.wk)()
], W3mRegisterAccountNameView.prototype, "error", void 0);
w3m_register_account_name_view_decorate([
    (0,decorators/* state */.wk)()
], W3mRegisterAccountNameView.prototype, "loading", void 0);
w3m_register_account_name_view_decorate([
    (0,decorators/* state */.wk)()
], W3mRegisterAccountNameView.prototype, "suggestions", void 0);
w3m_register_account_name_view_decorate([
    (0,decorators/* state */.wk)()
], W3mRegisterAccountNameView.prototype, "profileName", void 0);
W3mRegisterAccountNameView = w3m_register_account_name_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-register-account-name-view')
], W3mRegisterAccountNameView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/NavigationUtil.js
var NavigationUtil = __webpack_require__(645839);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(409526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var wui_icon_box = __webpack_require__(804019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(845198);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-register-account-name-success-view/styles.js

/* harmony default export */ const w3m_register_account_name_success_view_styles = ((0,lit/* css */.AH) `
  .continue-button-container {
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-register-account-name-success-view/index.js
var w3m_register_account_name_success_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let W3mRegisterAccountNameSuccess = class W3mRegisterAccountNameSuccess extends lit/* LitElement */.WF {
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
          Learn more
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
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`;
    }
    buttonsTemplate() {
        return (0,lit/* html */.qy) `<wui-flex
      .padding=${['0', '4', '0', '4']}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`;
    }
    redirectToAccount() {
        RouterController/* RouterController */.I.replace('Account');
    }
};
W3mRegisterAccountNameSuccess.styles = w3m_register_account_name_success_view_styles;
W3mRegisterAccountNameSuccess = w3m_register_account_name_success_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-register-account-name-success-view')
], W3mRegisterAccountNameSuccess);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/embedded-wallet.js





//# sourceMappingURL=embedded-wallet.js.map

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

/***/ 234558
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ HelpersUtil)
/* harmony export */ });
/* harmony import */ var _reown_appkit_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(824376);
/* harmony import */ var _reown_appkit_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(778508);
/* harmony import */ var _reown_appkit_controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(757019);
/* harmony import */ var _ConstantsUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(841482);



const HelpersUtil = {
    getTabsByNamespace(namespace) {
        const isEVM = Boolean(namespace) && namespace === _reown_appkit_common__WEBPACK_IMPORTED_MODULE_0__/* .ConstantsUtil */ .o.CHAIN.EVM;
        if (!isEVM) {
            return [];
        }
        if (_reown_appkit_controllers__WEBPACK_IMPORTED_MODULE_2__/* .OptionsController */ .H.state.remoteFeatures?.activity === false) {
            return _ConstantsUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsUtil */ .o.ACCOUNT_TABS.filter(tab => tab.label !== 'Activity');
        }
        return _ConstantsUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsUtil */ .o.ACCOUNT_TABS;
    },
    isValidReownName(name) {
        return /^[a-zA-Z0-9]+$/gu.test(name);
    },
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(email);
    },
    validateReownName(name) {
        const sanitizedName = name.replace(/\^/gu, '').toLowerCase();
        return sanitizedName.replace(/[^a-zA-Z0-9]/gu, '');
    },
    hasFooter() {
        const view = _reown_appkit_controllers__WEBPACK_IMPORTED_MODULE_1__/* .RouterController */ .I.state.view;
        if (_ConstantsUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsUtil */ .o.VIEWS_WITH_LEGAL_FOOTER.includes(view)) {
            const { termsConditionsUrl, privacyPolicyUrl } = _reown_appkit_controllers__WEBPACK_IMPORTED_MODULE_2__/* .OptionsController */ .H.state;
            const legalCheckbox = _reown_appkit_controllers__WEBPACK_IMPORTED_MODULE_2__/* .OptionsController */ .H.state.features?.legalCheckbox;
            const showOnlyBranding = (!termsConditionsUrl && !privacyPolicyUrl) || legalCheckbox;
            if (showOnlyBranding) {
                return false;
            }
            return true;
        }
        return _ConstantsUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsUtil */ .o.VIEWS_WITH_DEFAULT_FOOTER.includes(view);
    }
};
//# sourceMappingURL=HelpersUtil.js.map

/***/ },

/***/ 804019
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_icon_box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42815);

//# sourceMappingURL=wui-icon-box.js.map

/***/ },

/***/ 651068
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_icon_link_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(869618);

//# sourceMappingURL=wui-icon-link.js.map

/***/ },

/***/ 845198
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiLink

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-link/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({ spacing }) => spacing[2]};
    column-gap: ${({ spacing }) => spacing[1]};
    border-radius: ${({ borderRadius }) => borderRadius[1]};
    padding: 0 ${({ spacing }) => spacing[1]};
    border-radius: ${({ spacing }) => spacing[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-link/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const TEXT_VARIANT_BY_SIZE = {
    sm: 'sm-medium',
    md: 'md-medium'
};
const TEXT_COLOR_BY_VARIANT = {
    accent: 'accent-primary',
    secondary: 'secondary'
};
let WuiLink = class WuiLink extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.disabled = false;
        this.variant = 'accent';
        this.icon = undefined;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${TEXT_COLOR_BY_VARIANT[this.variant]}
          variant=${TEXT_VARIANT_BY_SIZE[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `;
    }
    iconTemplate() {
        if (!this.icon) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-icon name=${this.icon} size="sm"></wui-icon>`;
    }
};
WuiLink.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiLink.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiLink.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiLink.prototype, "variant", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiLink.prototype, "icon", void 0);
WuiLink = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-link')
], WuiLink);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js

//# sourceMappingURL=wui-link.js.map

/***/ },

/***/ 103104
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_components_wui_loading_spinner_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502378);

//# sourceMappingURL=wui-loading-spinner.js.map

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

/***/ 46514
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiTag

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ spacing }) => spacing[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
    color: ${({ tokens }) => tokens.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({ tokens }) => tokens.core.backgroundWarning};
    color: ${({ tokens }) => tokens.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
    color: ${({ tokens }) => tokens.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({ spacing }) => spacing[1]};
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiTag = class WuiTag extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.variant = 'accent';
        this.size = 'md';
        this.icon = undefined;
    }
    render() {
        this.dataset['variant'] = this.variant;
        this.dataset['size'] = this.size;
        const textVariant = this.size === 'md' ? 'md-medium' : 'sm-medium';
        const iconSize = this.size === 'md' ? 'md' : 'sm';
        return (0,lit/* html */.qy) `
      ${this.icon ? (0,lit/* html */.qy) `<wui-icon size=${iconSize} name=${this.icon}></wui-icon>` : null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${textVariant}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `;
    }
};
WuiTag.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTag.prototype, "variant", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTag.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTag.prototype, "icon", void 0);
WuiTag = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-tag')
], WuiTag);

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