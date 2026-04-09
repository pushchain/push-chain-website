"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[65203],{

/***/ 837872
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AppKitModal: () => (/* reexport */ AppKitModal),
  W3mListWallet: () => (/* reexport */ W3mListWallet),
  W3mModal: () => (/* reexport */ W3mModal),
  W3mModalBase: () => (/* reexport */ W3mModalBase),
  W3mRouterContainer: () => (/* reexport */ W3mRouterContainer),
  W3mUsageExceededView: () => (/* reexport */ W3mUsageExceededView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var ApiController = __webpack_require__(188249);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js
var SIWXUtil = __webpack_require__(801122);
;// ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ModalUtil.js




const ModalUtil = {
    isUnsupportedChainView() {
        return (RouterController/* RouterController */.I.state.view === 'UnsupportedChain' ||
            (RouterController/* RouterController */.I.state.view === 'SwitchNetwork' &&
                RouterController/* RouterController */.I.state.history.includes('UnsupportedChain')));
    },
    async safeClose() {
        if (this.isUnsupportedChainView()) {
            ModalController/* ModalController */.W.shake();
            return;
        }
        const isSIWXCloseDisabled = await SIWXUtil/* SIWXUtil */.U.isSIWXCloseDisabled();
        if (isSIWXCloseDisabled) {
            ModalController/* ModalController */.W.shake();
            return;
        }
        if (RouterController/* RouterController */.I.state.view === 'DataCapture' ||
            RouterController/* RouterController */.I.state.view === 'DataCaptureOtpConfirm') {
            ConnectionController/* ConnectionController */.x.disconnect();
        }
        ModalController/* ModalController */.W.close();
    }
};
//# sourceMappingURL=ModalUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(568996);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SwapController.js + 1 modules
var SwapController = __webpack_require__(181760);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    border-radius: clamp(0px, ${({ borderRadius }) => borderRadius['8']}, 44px);
    box-shadow: 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    overflow: hidden;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let WuiCard = class WuiCard extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `<slot></slot>`;
    }
};
WuiCard.styles = [ThemeUtil/* resetStyles */.W5, styles];
WuiCard = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-card')
], WuiCard);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-card.js

//# sourceMappingURL=wui-card.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js
var AlertController = __webpack_require__(471655);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var layout_wui_flex = __webpack_require__(293511);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/styles.js

/* harmony default export */ const wui_alertbar_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing }) => spacing[2]};
    padding: ${({ spacing }) => spacing[3]};
    border-radius: ${({ borderRadius }) => borderRadius[6]};
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};

      wui-icon {
        color: ${({ tokens }) => tokens.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.core.backgroundSuccess};

      wui-icon {
        color: ${({ tokens }) => tokens.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.core.backgroundWarning};

      wui-icon {
        color: ${({ tokens }) => tokens.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.core.backgroundError};

      wui-icon {
        color: ${({ tokens }) => tokens.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({ borderRadius }) => borderRadius['2']};
    background-color: var(--local-icon-bg-value);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/index.js
var wui_alertbar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const TYPE_ICON_NAME = {
    info: 'info',
    success: 'checkmark',
    warning: 'warningCircle',
    error: 'warning'
};
let WuiAlertBar = class WuiAlertBar extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.message = '';
        this.type = 'info';
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        data-type=${(0,if_defined/* ifDefined */.J)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${TYPE_ICON_NAME[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `;
    }
    onClose() {
        AlertController/* AlertController */.h.close();
    }
};
WuiAlertBar.styles = [ThemeUtil/* resetStyles */.W5, wui_alertbar_styles];
wui_alertbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiAlertBar.prototype, "message", void 0);
wui_alertbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiAlertBar.prototype, "type", void 0);
WuiAlertBar = wui_alertbar_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-alertbar')
], WuiAlertBar);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-alertbar.js

//# sourceMappingURL=wui-alertbar.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/styles.js

/* harmony default export */ const w3m_alertbar_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    position: absolute;
    top: ${({ spacing }) => spacing['3']};
    left: ${({ spacing }) => spacing['4']};
    right: ${({ spacing }) => spacing['4']};
    opacity: 0;
    pointer-events: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/index.js
var w3m_alertbar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const presets = {
    info: {
        backgroundColor: 'fg-350',
        iconColor: 'fg-325',
        icon: 'info'
    },
    success: {
        backgroundColor: 'success-glass-reown-020',
        iconColor: 'success-125',
        icon: 'checkmark'
    },
    warning: {
        backgroundColor: 'warning-glass-reown-020',
        iconColor: 'warning-100',
        icon: 'warningCircle'
    },
    error: {
        backgroundColor: 'error-glass-reown-020',
        iconColor: 'error-125',
        icon: 'warning'
    }
};
let W3mAlertBar = class W3mAlertBar extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.open = AlertController/* AlertController */.h.state.open;
        this.onOpen(true);
        this.unsubscribe.push(AlertController/* AlertController */.h.subscribeKey('open', val => {
            this.open = val;
            this.onOpen(false);
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const { message, variant } = AlertController/* AlertController */.h.state;
        const preset = presets[variant];
        return (0,lit/* html */.qy) `
      <wui-alertbar
        message=${message}
        backgroundColor=${preset?.backgroundColor}
        iconColor=${preset?.iconColor}
        icon=${preset?.icon}
        type=${variant}
      ></wui-alertbar>
    `;
    }
    onOpen(isMounted) {
        if (this.open) {
            this.animate([
                { opacity: 0, transform: 'scale(0.85)' },
                { opacity: 1, transform: 'scale(1)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
            this.style.cssText = `pointer-events: auto`;
        }
        else if (!isMounted) {
            this.animate([
                { opacity: 1, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(0.85)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
            this.style.cssText = `pointer-events: none`;
        }
    }
};
W3mAlertBar.styles = w3m_alertbar_styles;
w3m_alertbar_decorate([
    (0,decorators/* state */.wk)()
], W3mAlertBar.prototype, "open", void 0);
W3mAlertBar = w3m_alertbar_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-alertbar')
], W3mAlertBar);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(527601);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js
var AssetController = __webpack_require__(773337);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-button/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-button/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-button.js

//# sourceMappingURL=wui-icon-button.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/styles.js

/* harmony default export */ const wui_select_styles = ((0,ThemeHelperUtil/* css */.AH) `
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({ spacing }) => spacing[1]};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
    border-radius: ${({ borderRadius }) => borderRadius[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({ spacing }) => spacing[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    opacity: 0.5;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/index.js
var wui_select_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
const ICON_SIZE_BY_SIZE = {
    lg: 'lg',
    md: 'md',
    sm: 'sm'
};
let WuiSelect = class WuiSelect extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.imageSrc = '';
        this.text = '';
        this.size = 'lg';
        this.type = 'text-dropdown';
        this.disabled = false;
    }
    render() {
        return (0,lit/* html */.qy) `<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`;
    }
    textTemplate() {
        const textSize = TEXT_VARIANT_BY_SIZE[this.size];
        if (this.text) {
            return (0,lit/* html */.qy) `<wui-text color="primary" variant=${textSize}>${this.text}</wui-text>`;
        }
        return null;
    }
    imageTemplate() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;
        }
        const iconSize = ICON_SIZE_BY_SIZE[this.size];
        return (0,lit/* html */.qy) ` <wui-flex class="left-icon-container">
      <wui-icon size=${iconSize} name="networkPlaceholder"></wui-icon>
    </wui-flex>`;
    }
};
WuiSelect.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_select_styles];
wui_select_decorate([
    (0,decorators/* property */.MZ)()
], WuiSelect.prototype, "imageSrc", void 0);
wui_select_decorate([
    (0,decorators/* property */.MZ)()
], WuiSelect.prototype, "text", void 0);
wui_select_decorate([
    (0,decorators/* property */.MZ)()
], WuiSelect.prototype, "size", void 0);
wui_select_decorate([
    (0,decorators/* property */.MZ)()
], WuiSelect.prototype, "type", void 0);
wui_select_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiSelect.prototype, "disabled", void 0);
WuiSelect = wui_select_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-select')
], WuiSelect);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-select.js

//# sourceMappingURL=wui-select.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-tag.js
var wui_tag = __webpack_require__(773812);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(841482);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(409526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var exports_wui_icon = __webpack_require__(313163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-link.js
var wui_icon_link = __webpack_require__(651068);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-image.js
var exports_wui_image = __webpack_require__(637289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js + 2 modules
var wui_list_item = __webpack_require__(100703);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js
var wui_loading_spinner = __webpack_require__(103104);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-network-image.js + 4 modules
var wui_network_image = __webpack_require__(646727);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js + 2 modules
var wui_separator = __webpack_require__(802759);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js
var wui_wallet_image = __webpack_require__(797219);
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla.mjs + 1 modules
var vanilla = __webpack_require__(552095);
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla/utils.mjs
var utils = __webpack_require__(427088);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var utils_ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js
var ParseUtil = __webpack_require__(975910);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js
var NumberUtil = __webpack_require__(566580);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/BalanceUtil.js + 2 modules
var BalanceUtil = __webpack_require__(382752);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js
var HelpersUtil = __webpack_require__(335306);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/types/errors.js
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/utils/ConstantsUtil.js
const API_URL = 'https://rpc.walletconnect.org/v1/json-rpc';
const REOWN_TEST_EXCHANGE_ID = 'reown_test';
//# sourceMappingURL=ConstantsUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ContractUtil.js + 3 modules
var ContractUtil = __webpack_require__(653142);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ProviderController.js
var ProviderController = __webpack_require__(870424);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/utils/PaymentUtil.js
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
    if (chainNamespace !== utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM) {
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
        chainNamespace: utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM
    });
    return txResponse ?? undefined;
}
async function processSolanaPayment(chainNamespace, params) {
    if (chainNamespace !== utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA) {
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
            chainNamespace: utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA,
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/utils/ApiUtil.js





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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/utils/AssetUtil.js



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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/controllers/PayController.js











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
        [utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM]: [],
        [utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA]: []
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
                case utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM:
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
                case utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA:
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
            if (namespace === utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM) {
                const { from, to, data, value } = transactionStep.transaction;
                await ConnectionController/* ConnectionController */.x.sendTransaction({
                    address: from,
                    to,
                    data,
                    value: BigInt(value),
                    chainNamespace: namespace
                });
            }
            else if (namespace === utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA) {
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
        if (namespace === utils_ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM) {
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-view/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-view/index.js
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
// EXTERNAL MODULE: ./node_modules/lit/directives/class-map.js + 1 modules
var class_map = __webpack_require__(899605);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-pulse/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-pulse/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-pulse.js

//# sourceMappingURL=wui-pulse.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-loading-view/constants.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-loading-view/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-loading-view/index.js
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-switch.js + 2 modules
var wui_wallet_switch = __webpack_require__(720526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js
var wui_shimmer = __webpack_require__(838215);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees-skeleton/styles.js

/* harmony default export */ const w3m_pay_fees_skeleton_styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees-skeleton/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees/styles.js

/* harmony default export */ const w3m_pay_fees_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-empty/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-empty/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-skeleton/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-skeleton/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-quote-view/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-quote-view/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/client.js
/* unused harmony import specifier */ var client_PayController;
/* unused harmony import specifier */ var client_AppKitPayError;
/* unused harmony import specifier */ var client_AppKitPayErrorCodes;


const PAYMENT_TIMEOUT_MS = 300000;
async function openPay(options) {
    return client_PayController.handleOpenPay(options);
}
async function pay(options, timeoutMs = PAYMENT_TIMEOUT_MS) {
    if (timeoutMs <= 0) {
        throw new client_AppKitPayError(client_AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, 'Timeout must be greater than 0');
    }
    try {
        await openPay(options);
    }
    catch (error) {
        if (error instanceof client_AppKitPayError) {
            throw error;
        }
        throw new client_AppKitPayError(client_AppKitPayErrorCodes.UNABLE_TO_INITIATE_PAYMENT, error.message);
    }
    return new Promise((resolve, reject) => {
        let isSettled = false;
        const timeoutId = setTimeout(() => {
            if (isSettled) {
                return;
            }
            isSettled = true;
            cleanup();
            reject(new client_AppKitPayError(client_AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, 'Payment timeout'));
        }, timeoutMs);
        function checkAndResolve() {
            if (isSettled) {
                return;
            }
            const currentPayment = client_PayController.state.currentPayment;
            const error = client_PayController.state.error;
            const isInProgress = client_PayController.state.isPaymentInProgress;
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
    return client_PayController.getExchanges();
}
function getPayResult() {
    return client_PayController.state.currentPayment?.result;
}
function getPayError() {
    return client_PayController.state.error;
}
function getIsPaymentInProgress() {
    return client_PayController.state.isPaymentInProgress;
}
function subscribeStateKey(key, callback) {
    return client_PayController.subscribeKey(key, callback);
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/src/types/assets.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-pay/dist/esm/exports/index.js






//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-pay-header/styles.js

/* harmony default export */ const w3m_pay_header_styles = ((0,esm_exports/* css */.AH) `
  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }

  .transfers-badge {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border: 1px solid ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-pay-header/index.js
var w3m_pay_header_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mPayHeader = class W3mPayHeader extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.paymentAsset = PayController.state.paymentAsset;
        this.amount = PayController.state.amount;
        this.unsubscribe.push(PayController.subscribeKey('paymentAsset', val => {
            this.paymentAsset = val;
        }), PayController.subscribeKey('amount', val => {
            this.amount = val;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const allNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const targetNetwork = allNetworks.find(net => net.caipNetworkId === this.paymentAsset.network);
        return (0,lit/* html */.qy) `<wui-flex
      alignItems="center"
      gap="1"
      .padding=${['1', '2', '1', '1']}
      class="transfers-badge"
    >
      <wui-image src=${(0,if_defined/* ifDefined */.J)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${targetNetwork?.name ?? 'Unknown'}
      </wui-text>
    </wui-flex>`;
    }
};
W3mPayHeader.styles = [w3m_pay_header_styles];
w3m_pay_header_decorate([
    (0,decorators/* property */.MZ)()
], W3mPayHeader.prototype, "paymentAsset", void 0);
w3m_pay_header_decorate([
    (0,decorators/* property */.MZ)()
], W3mPayHeader.prototype, "amount", void 0);
W3mPayHeader = w3m_pay_header_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-pay-header')
], W3mPayHeader);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/styles.js

/* harmony default export */ const w3m_header_styles = ((0,esm_exports/* css */.AH) `
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({ easings }) => easings['ease-out-power-2']},
      slide-down-in 120ms forwards ${({ easings }) => easings['ease-out-power-2']};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({ easings }) => easings['ease-out-power-2']},
      slide-up-in 120ms forwards ${({ easings }) => easings['ease-out-power-2']};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/index.js
var w3m_header_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const BETA_SCREENS = ['SmartSessionList'];
const BACKGROUND_OVERRIDES = {
    PayWithExchange: esm_exports/* vars */.f.tokens.theme.foregroundPrimary
};
function headings() {
    const connectorName = RouterController/* RouterController */.I.state.data?.connector?.name;
    const walletName = RouterController/* RouterController */.I.state.data?.wallet?.name;
    const networkName = RouterController/* RouterController */.I.state.data?.network?.name;
    const name = walletName ?? connectorName;
    const connectors = ConnectorController/* ConnectorController */.a.getConnectors();
    const isEmail = connectors.length === 1 && connectors[0]?.id === 'w3m-email';
    const socialProvider = ChainController/* ChainController */.W.getAccountData()?.socialProvider;
    const socialTitle = socialProvider
        ? socialProvider.charAt(0).toUpperCase() + socialProvider.slice(1)
        : 'Connect Social';
    return {
        Connect: `Connect ${isEmail ? 'Email' : ''} Wallet`,
        Create: 'Create Wallet',
        ChooseAccountName: undefined,
        Account: undefined,
        AccountSettings: undefined,
        AllWallets: 'All Wallets',
        ApproveTransaction: 'Approve Transaction',
        BuyInProgress: 'Buy',
        UsageExceeded: 'Usage Exceeded',
        ConnectingExternal: name ?? 'Connect Wallet',
        ConnectingWalletConnect: name ?? 'WalletConnect',
        ConnectingWalletConnectBasic: 'WalletConnect',
        ConnectingSiwe: 'Sign In',
        Convert: 'Convert',
        ConvertSelectToken: 'Select token',
        ConvertPreview: 'Preview Convert',
        Downloads: name ? `Get ${name}` : 'Downloads',
        EmailLogin: 'Email Login',
        EmailVerifyOtp: 'Confirm Email',
        EmailVerifyDevice: 'Register Device',
        GetWallet: 'Get a Wallet',
        Networks: 'Choose Network',
        OnRampProviders: 'Choose Provider',
        OnRampActivity: 'Activity',
        OnRampTokenSelect: 'Select Token',
        OnRampFiatSelect: 'Select Currency',
        Pay: 'How you pay',
        ProfileWallets: 'Wallets',
        SwitchNetwork: networkName ?? 'Switch Network',
        Transactions: 'Activity',
        UnsupportedChain: 'Switch Network',
        UpgradeEmailWallet: 'Upgrade Your Wallet',
        UpdateEmailWallet: 'Edit Email',
        UpdateEmailPrimaryOtp: 'Confirm Current Email',
        UpdateEmailSecondaryOtp: 'Confirm New Email',
        WhatIsABuy: 'What is Buy?',
        RegisterAccountName: 'Choose Name',
        RegisterAccountNameSuccess: '',
        WalletReceive: 'Receive',
        WalletCompatibleNetworks: 'Compatible Networks',
        Swap: 'Swap',
        SwapSelectToken: 'Select Token',
        SwapPreview: 'Preview Swap',
        WalletSend: 'Send',
        WalletSendPreview: 'Review Send',
        WalletSendSelectToken: 'Select Token',
        WalletSendConfirmed: 'Confirmed',
        WhatIsANetwork: 'What is a network?',
        WhatIsAWallet: 'What is a Wallet?',
        ConnectWallets: 'Connect Wallet',
        ConnectSocials: 'All Socials',
        ConnectingSocial: socialTitle,
        ConnectingMultiChain: 'Select Chain',
        ConnectingFarcaster: 'Farcaster',
        SwitchActiveChain: 'Switch Chain',
        SmartSessionCreated: undefined,
        SmartSessionList: 'Smart Sessions',
        SIWXSignMessage: 'Sign In',
        PayLoading: 'Processing payment...',
        PayQuote: 'Payment Quote',
        DataCapture: 'Profile',
        DataCaptureOtpConfirm: 'Confirm Email',
        FundWallet: 'Fund Wallet',
        PayWithExchange: 'Deposit from Exchange',
        PayWithExchangeSelectAsset: 'Select Asset',
        SmartAccountSettings: 'Smart Account Settings'
    };
}
let W3mHeader = class W3mHeader extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.heading = headings()[RouterController/* RouterController */.I.state.view];
        this.network = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
        this.showBack = false;
        this.prevHistoryLength = 1;
        this.view = RouterController/* RouterController */.I.state.view;
        this.viewDirection = '';
        this.unsubscribe.push(AssetController/* AssetController */.j.subscribeNetworkImages(() => {
            this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
        }), RouterController/* RouterController */.I.subscribeKey('view', val => {
            setTimeout(() => {
                this.view = val;
                this.heading = headings()[val];
            }, ConstantsUtil/* ConstantsUtil */.o.ANIMATION_DURATIONS.HeaderText);
            this.onViewChange();
            this.onHistoryChange();
        }), ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => {
            this.network = val;
            this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
        }));
    }
    disconnectCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const backgroundColor = BACKGROUND_OVERRIDES[RouterController/* RouterController */.I.state.view] ?? esm_exports/* vars */.f.tokens.theme.backgroundPrimary;
        this.style.setProperty('--local-header-background-color', backgroundColor);
        return (0,lit/* html */.qy) `
      <wui-flex
        .padding=${['0', '4', '0', '4']}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
    }
    onWalletHelp() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_WALLET_HELP' });
        RouterController/* RouterController */.I.push('WhatIsAWallet');
    }
    async onClose() {
        await ModalUtil.safeClose();
    }
    rightHeaderTemplate() {
        const isSmartSessionsEnabled = OptionsController/* OptionsController */.H?.state?.features?.smartSessions;
        if (RouterController/* RouterController */.I.state.view !== 'Account' || !isSmartSessionsEnabled) {
            return this.closeButtonTemplate();
        }
        return (0,lit/* html */.qy) `<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${() => RouterController/* RouterController */.I.push('SmartSessionList')}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `;
    }
    closeButtonTemplate() {
        return (0,lit/* html */.qy) `
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `;
    }
    titleTemplate() {
        if (this.view === 'PayQuote') {
            return (0,lit/* html */.qy) `<w3m-pay-header></w3m-pay-header>`;
        }
        const isBeta = BETA_SCREENS.includes(this.view);
        return (0,lit/* html */.qy) `
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${isBeta ? (0,lit/* html */.qy) `<wui-tag variant="accent" size="md">Beta</wui-tag>` : null}
      </wui-flex>
    `;
    }
    leftHeaderTemplate() {
        const { view } = RouterController/* RouterController */.I.state;
        const isConnectHelp = view === 'Connect';
        const isEmbeddedEnable = OptionsController/* OptionsController */.H.state.enableEmbedded;
        const isApproveTransaction = view === 'ApproveTransaction';
        const isConnectingSIWEView = view === 'ConnectingSiwe';
        const isAccountView = view === 'Account';
        const enableNetworkSwitch = OptionsController/* OptionsController */.H.state.enableNetworkSwitch;
        const shouldHideBack = isApproveTransaction || isConnectingSIWEView || (isConnectHelp && isEmbeddedEnable);
        if (isAccountView && enableNetworkSwitch) {
            return (0,lit/* html */.qy) `<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,if_defined/* ifDefined */.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,if_defined/* ifDefined */.J)(this.networkImage)}
      ></wui-select>`;
        }
        if (this.showBack && !shouldHideBack) {
            return (0,lit/* html */.qy) `<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`;
        }
        return (0,lit/* html */.qy) `<wui-icon-button
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`;
    }
    onNetworks() {
        if (this.isAllowedNetworkSwitch()) {
            EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_NETWORKS' });
            RouterController/* RouterController */.I.push('Networks');
        }
    }
    isAllowedNetworkSwitch() {
        const requestedCaipNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
        const isValidNetwork = requestedCaipNetworks?.find(({ id }) => id === this.network?.id);
        return isMultiNetwork || !isValidNetwork;
    }
    onViewChange() {
        const { history } = RouterController/* RouterController */.I.state;
        let direction = ConstantsUtil/* ConstantsUtil */.o.VIEW_DIRECTION.Next;
        if (history.length < this.prevHistoryLength) {
            direction = ConstantsUtil/* ConstantsUtil */.o.VIEW_DIRECTION.Prev;
        }
        this.prevHistoryLength = history.length;
        this.viewDirection = direction;
    }
    async onHistoryChange() {
        const { history } = RouterController/* RouterController */.I.state;
        const buttonEl = this.shadowRoot?.querySelector('#dynamic');
        if (history.length > 1 && !this.showBack && buttonEl) {
            await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.showBack = true;
            buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
        else if (history.length <= 1 && this.showBack && buttonEl) {
            await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.showBack = false;
            buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    onGoBack() {
        RouterController/* RouterController */.I.goBack();
    }
};
W3mHeader.styles = w3m_header_styles;
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "heading", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "network", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "networkImage", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "showBack", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "prevHistoryLength", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "view", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "viewDirection", void 0);
W3mHeader = w3m_header_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-header')
], W3mHeader);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js + 1 modules
var components_wui_loading_spinner = __webpack_require__(502378);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js + 1 modules
var wui_icon_box = __webpack_require__(42815);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/styles.js

/* harmony default export */ const wui_snackbar_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: flex;
    align-items: center;
    gap: ${({ spacing }) => spacing[1]};
    padding: ${({ spacing }) => spacing[2]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[2]} ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[20]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({ tokens }) => tokens.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({ borderRadius }) => borderRadius.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({ spacing }) => spacing[1]};
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
    border-radius: ${({ borderRadius }) => borderRadius.round} !important;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/index.js
var wui_snackbar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiSnackbar = class WuiSnackbar extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.message = '';
        this.variant = 'success';
    }
    render() {
        return (0,lit/* html */.qy) `
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
    }
    templateIcon() {
        const COLOR = {
            success: 'success',
            error: 'error',
            warning: 'warning',
            info: 'default'
        };
        const ICON = {
            success: 'checkmark',
            error: 'warning',
            warning: 'warningCircle',
            info: 'info'
        };
        if (this.variant === 'loading') {
            return (0,lit/* html */.qy) `<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`;
        }
        return (0,lit/* html */.qy) `<wui-icon-box
      size="md"
      color=${COLOR[this.variant]}
      icon=${ICON[this.variant]}
    ></wui-icon-box>`;
    }
};
WuiSnackbar.styles = [ThemeUtil/* resetStyles */.W5, wui_snackbar_styles];
wui_snackbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSnackbar.prototype, "message", void 0);
wui_snackbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSnackbar.prototype, "variant", void 0);
WuiSnackbar = wui_snackbar_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-snackbar')
], WuiSnackbar);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-snackbar.js

//# sourceMappingURL=wui-snackbar.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/styles.js

/* harmony default export */ const w3m_snackbar_styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/index.js
var w3m_snackbar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mSnackBar = class W3mSnackBar extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.timeout = undefined;
        this.open = SnackController/* SnackController */.P.state.open;
        this.unsubscribe.push(SnackController/* SnackController */.P.subscribeKey('open', val => {
            this.open = val;
            this.onOpen();
        }));
    }
    disconnectedCallback() {
        clearTimeout(this.timeout);
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const { message, variant } = SnackController/* SnackController */.P.state;
        return (0,lit/* html */.qy) ` <wui-snackbar message=${message} variant=${variant}></wui-snackbar> `;
    }
    onOpen() {
        clearTimeout(this.timeout);
        if (this.open) {
            this.animate([
                { opacity: 0, transform: 'translateX(-50%) scale(0.85)' },
                { opacity: 1, transform: 'translateX(-50%) scale(1)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (SnackController/* SnackController */.P.state.autoClose) {
                this.timeout = setTimeout(() => SnackController/* SnackController */.P.hide(), 2500);
            }
        }
        else {
            this.animate([
                { opacity: 1, transform: 'translateX(-50%) scale(1)' },
                { opacity: 0, transform: 'translateX(-50%) scale(0.85)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
};
W3mSnackBar.styles = w3m_snackbar_styles;
w3m_snackbar_decorate([
    (0,decorators/* state */.wk)()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = w3m_snackbar_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-snackbar')
], W3mSnackBar);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip-trigger/index.js + 1 modules
var w3m_tooltip_trigger = __webpack_require__(570146);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/index.js + 1 modules
var w3m_tooltip = __webpack_require__(974625);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/HelpersUtil.js
var utils_HelpersUtil = __webpack_require__(234558);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-footer/index.js + 1 modules
var w3m_footer = __webpack_require__(389056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/index.js + 1 modules
var w3m_router = __webpack_require__(803830);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/styles.js

/* harmony default export */ const w3m_modal_styles = ((0,esm_exports/* css */.AH) `
  :host {
    z-index: ${({ tokens }) => tokens.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({ tokens }) => tokens.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      backdrop-filter ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      border-radius ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-1']},
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-1']},
      box-shadow ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-1']};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    transition-delay: ${({ durations }) => durations['md']};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({ tokens }) => tokens.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      card-background-border var(--apkt-duration-dynamic)
        ${({ easings }) => easings['ease-out-power-2']};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      card-background-default var(--apkt-duration-dynamic)
        ${({ easings }) => easings['ease-out-power-2']};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      w3m-shake ${({ durations }) => durations['xl']}
        ${({ easings }) => easings['ease-out-power-2']};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({ easings }) => easings['ease-out-power-2']};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

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

  @keyframes card-background-border {
    from {
      background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    }
    to {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
    to {
      background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/index.js
var w3m_modal_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















const SCROLL_LOCK = 'scroll-lock';
const PADDING_OVERRIDES = {
    PayWithExchange: '0',
    PayWithExchangeSelectAsset: '0',
    Pay: '0',
    PayQuote: '0',
    PayLoading: '0'
};
class W3mModalBase extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.abortController = undefined;
        this.hasPrefetched = false;
        this.enableEmbedded = OptionsController/* OptionsController */.H.state.enableEmbedded;
        this.open = ModalController/* ModalController */.W.state.open;
        this.caipAddress = ChainController/* ChainController */.W.state.activeCaipAddress;
        this.caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.shake = ModalController/* ModalController */.W.state.shake;
        this.filterByNamespace = ConnectorController/* ConnectorController */.a.state.filterByNamespace;
        this.padding = esm_exports/* vars */.f.spacing[1];
        this.mobileFullScreen = OptionsController/* OptionsController */.H.state.enableMobileFullScreen;
        this.initializeTheming();
        ApiController/* ApiController */.N.prefetchAnalyticsConfig();
        this.unsubscribe.push(...[
            ModalController/* ModalController */.W.subscribeKey('open', val => (val ? this.onOpen() : this.onClose())),
            ModalController/* ModalController */.W.subscribeKey('shake', val => (this.shake = val)),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => this.onNewNetwork(val)),
            ChainController/* ChainController */.W.subscribeKey('activeCaipAddress', val => this.onNewAddress(val)),
            OptionsController/* OptionsController */.H.subscribeKey('enableEmbedded', val => (this.enableEmbedded = val)),
            ConnectorController/* ConnectorController */.a.subscribeKey('filterByNamespace', val => {
                if (this.filterByNamespace !== val && !ChainController/* ChainController */.W.getAccountData(val)?.caipAddress) {
                    ApiController/* ApiController */.N.fetchRecommendedWallets();
                    this.filterByNamespace = val;
                }
            }),
            RouterController/* RouterController */.I.subscribeKey('view', () => {
                this.dataset['border'] = utils_HelpersUtil/* HelpersUtil */.y.hasFooter() ? 'true' : 'false';
                this.padding = PADDING_OVERRIDES[RouterController/* RouterController */.I.state.view] ?? esm_exports/* vars */.f.spacing[1];
            })
        ]);
    }
    firstUpdated() {
        this.dataset['border'] = utils_HelpersUtil/* HelpersUtil */.y.hasFooter() ? 'true' : 'false';
        if (this.mobileFullScreen) {
            this.setAttribute('data-mobile-fullscreen', 'true');
        }
        if (this.caipAddress) {
            if (this.enableEmbedded) {
                ModalController/* ModalController */.W.close();
                this.prefetch();
                return;
            }
            this.onNewAddress(this.caipAddress);
        }
        if (this.open) {
            this.onOpen();
        }
        if (this.enableEmbedded) {
            this.prefetch();
        }
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.onRemoveKeyboardListener();
    }
    render() {
        this.style.setProperty('--local-modal-padding', this.padding);
        if (this.enableEmbedded) {
            return (0,lit/* html */.qy) `${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `;
        }
        return this.open
            ? (0,lit/* html */.qy) `
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
            : null;
    }
    contentTemplate() {
        return (0,lit/* html */.qy) ` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,if_defined/* ifDefined */.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
    }
    async onOverlayClick(event) {
        if (event.target === event.currentTarget) {
            if (this.mobileFullScreen) {
                return;
            }
            await this.handleClose();
        }
    }
    async handleClose() {
        await ModalUtil.safeClose();
    }
    initializeTheming() {
        const { themeVariables, themeMode } = ThemeController/* ThemeController */.W.state;
        const defaultThemeMode = esm_exports/* UiHelperUtil */.Zv.getColorTheme(themeMode);
        (0,esm_exports/* initializeTheming */.RF)(themeVariables, defaultThemeMode);
    }
    onClose() {
        this.open = false;
        this.classList.remove('open');
        this.onScrollUnlock();
        SnackController/* SnackController */.P.hide();
        this.onRemoveKeyboardListener();
    }
    onOpen() {
        this.open = true;
        this.classList.add('open');
        this.onScrollLock();
        this.onAddKeyboardListener();
    }
    onScrollLock() {
        const styleTag = document.createElement('style');
        styleTag.dataset['w3m'] = SCROLL_LOCK;
        styleTag.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `;
        document.head.appendChild(styleTag);
    }
    onScrollUnlock() {
        const styleTag = document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);
        if (styleTag) {
            styleTag.remove();
        }
    }
    onAddKeyboardListener() {
        this.abortController = new AbortController();
        const card = this.shadowRoot?.querySelector('wui-card');
        card?.focus();
        window.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                this.handleClose();
            }
            else if (event.key === 'Tab') {
                const { tagName } = event.target;
                if (tagName && !tagName.includes('W3M-') && !tagName.includes('WUI-')) {
                    card?.focus();
                }
            }
        }, this.abortController);
    }
    onRemoveKeyboardListener() {
        this.abortController?.abort();
        this.abortController = undefined;
    }
    async onNewAddress(caipAddress) {
        const isSwitchingNamespace = ChainController/* ChainController */.W.state.isSwitchingNamespace;
        const isInProfileView = RouterController/* RouterController */.I.state.view === 'ProfileWallets';
        const shouldClose = !caipAddress && !isSwitchingNamespace && !isInProfileView;
        if (shouldClose) {
            ModalController/* ModalController */.W.close();
        }
        await SIWXUtil/* SIWXUtil */.U.initializeIfEnabled(caipAddress);
        this.caipAddress = caipAddress;
        ChainController/* ChainController */.W.setIsSwitchingNamespace(false);
    }
    onNewNetwork(nextCaipNetwork) {
        const prevCaipNetwork = this.caipNetwork;
        const prevCaipNetworkId = prevCaipNetwork?.caipNetworkId?.toString();
        const nextNetworkId = nextCaipNetwork?.caipNetworkId?.toString();
        const didNetworkChange = prevCaipNetworkId !== nextNetworkId;
        const isUnsupportedNetworkScreen = RouterController/* RouterController */.I.state.view === 'UnsupportedChain';
        const isModalOpen = ModalController/* ModalController */.W.state.open;
        let shouldGoBack = false;
        if (this.enableEmbedded && RouterController/* RouterController */.I.state.view === 'SwitchNetwork') {
            shouldGoBack = true;
        }
        if (didNetworkChange) {
            SwapController/* SwapController */.GN.resetState();
        }
        if (isModalOpen && isUnsupportedNetworkScreen) {
            shouldGoBack = true;
        }
        if (shouldGoBack && RouterController/* RouterController */.I.state.view !== 'SIWXSignMessage') {
            RouterController/* RouterController */.I.goBack();
        }
        this.caipNetwork = nextCaipNetwork;
    }
    prefetch() {
        if (!this.hasPrefetched) {
            ApiController/* ApiController */.N.prefetch();
            ApiController/* ApiController */.N.fetchWalletsByPage({ page: 1 });
            this.hasPrefetched = true;
        }
    }
}
W3mModalBase.styles = w3m_modal_styles;
w3m_modal_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mModalBase.prototype, "enableEmbedded", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "open", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "caipAddress", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "caipNetwork", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "shake", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "filterByNamespace", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "padding", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "mobileFullScreen", void 0);
let W3mModal = class W3mModal extends W3mModalBase {
};
W3mModal = w3m_modal_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-modal')
], W3mModal);

let AppKitModal = class AppKitModal extends W3mModalBase {
};
AppKitModal = w3m_modal_decorate([
    (0,esm_exports/* customElement */.EM)('appkit-modal')
], AppKitModal);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-usage-exceeded-view/styles.js

/* harmony default export */ const w3m_usage_exceeded_view_styles = ((0,esm_exports/* css */.AH) `
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    background-color: ${({ colors }) => colors.semanticError010};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-usage-exceeded-view/index.js
var w3m_usage_exceeded_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mUsageExceededView = class W3mUsageExceededView extends lit/* LitElement */.WF {
    constructor() {
        super();
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${['1', '3', '4', '3']}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `;
    }
    onTryAgainClick() {
        RouterController/* RouterController */.I.goBack();
    }
};
W3mUsageExceededView.styles = w3m_usage_exceeded_view_styles;
W3mUsageExceededView = w3m_usage_exceeded_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-usage-exceeded-view')
], W3mUsageExceededView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AdapterController/index.js
var AdapterController = __webpack_require__(883989);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js + 4 modules
var wui_list_wallet = __webpack_require__(84954);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-list-wallet/styles.js

/* harmony default export */ const w3m_list_wallet_styles = ((0,esm_exports/* css */.AH) `
  :host {
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-list-wallet/index.js
var w3m_list_wallet_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mListWallet = class W3mListWallet extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.hasImpressionSent = false;
        this.walletImages = [];
        this.imageSrc = '';
        this.name = '';
        this.size = 'md';
        this.tabIdx = undefined;
        this.disabled = false;
        this.showAllWallets = false;
        this.loading = false;
        this.loadingSpinnerColor = 'accent-100';
        this.rdnsId = '';
        this.displayIndex = undefined;
        this.walletRank = undefined;
        this.namespaces = [];
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.cleanupIntersectionObserver();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('name') ||
            changedProperties.has('imageSrc') ||
            changedProperties.has('walletRank')) {
            this.hasImpressionSent = false;
        }
        const hasWalletRankChanged = changedProperties.has('walletRank') && this.walletRank;
        if (hasWalletRankChanged && !this.intersectionObserver) {
            this.setupIntersectionObserver();
        }
    }
    setupIntersectionObserver() {
        this.intersectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.loading && !this.hasImpressionSent) {
                    this.sendImpressionEvent();
                }
            });
        }, { threshold: 0.1 });
        this.intersectionObserver.observe(this);
    }
    cleanupIntersectionObserver() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = undefined;
        }
    }
    sendImpressionEvent() {
        if (!this.name || this.hasImpressionSent || !this.walletRank) {
            return;
        }
        this.hasImpressionSent = true;
        if (this.rdnsId || this.name) {
            EventsController/* EventsController */.E.sendWalletImpressionEvent({
                name: this.name,
                walletRank: this.walletRank,
                rdnsId: this.rdnsId,
                view: RouterController/* RouterController */.I.state.view,
                displayIndex: this.displayIndex
            });
        }
    }
    handleGetWalletNamespaces() {
        const isMultiChain = Object.keys(AdapterController/* AdapterController */.q.state.adapters).length > 1;
        if (isMultiChain) {
            return this.namespaces;
        }
        return [];
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,if_defined/* ifDefined */.J)(this.imageSrc)}
        name=${this.name}
        size=${(0,if_defined/* ifDefined */.J)(this.size)}
        tagLabel=${(0,if_defined/* ifDefined */.J)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `;
    }
};
W3mListWallet.styles = w3m_list_wallet_styles;
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], W3mListWallet.prototype, "walletImages", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "imageSrc", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "name", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "size", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "tagLabel", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "tagVariant", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "walletIcon", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "tabIdx", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mListWallet.prototype, "disabled", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mListWallet.prototype, "showAllWallets", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mListWallet.prototype, "loading", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], W3mListWallet.prototype, "loadingSpinnerColor", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "rdnsId", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "displayIndex", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)()
], W3mListWallet.prototype, "walletRank", void 0);
w3m_list_wallet_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], W3mListWallet.prototype, "namespaces", void 0);
W3mListWallet = w3m_list_wallet_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-list-wallet')
], W3mListWallet);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-router-container/styles.js

/* harmony default export */ const w3m_router_container_styles = ((0,esm_exports/* css */.AH) `
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({ durations }) => durations['lg']};
    --local-transition: ${({ easings }) => easings['ease-out-power-2']};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({ durations }) => durations['lg']});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({ durations }) => durations['lg']});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-router-container/index.js
var w3m_router_container_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const HEADER_HEIGHT = 60;
let W3mRouterContainer = class W3mRouterContainer extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.resizeObserver = undefined;
        this.transitionDuration = '0.15s';
        this.transitionFunction = '';
        this.history = '';
        this.view = '';
        this.setView = undefined;
        this.viewDirection = '';
        this.historyState = '';
        this.previousHeight = '0px';
        this.mobileFullScreen = OptionsController/* OptionsController */.H.state.enableMobileFullScreen;
        this.onViewportResize = () => {
            this.updateContainerHeight();
        };
    }
    updated(changedProps) {
        if (changedProps.has('history')) {
            const newHistory = this.history;
            if (this.historyState !== '' && this.historyState !== newHistory) {
                this.onViewChange(newHistory);
            }
        }
        if (changedProps.has('transitionDuration')) {
            this.style.setProperty('--local-duration', this.transitionDuration);
        }
        if (changedProps.has('transitionFunction')) {
            this.style.setProperty('--local-transition', this.transitionFunction);
        }
    }
    firstUpdated() {
        if (this.transitionFunction) {
            this.style.setProperty('--local-transition', this.transitionFunction);
        }
        this.style.setProperty('--local-duration', this.transitionDuration);
        this.historyState = this.history;
        this.resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry.target === this.getWrapper()) {
                    let newHeight = entry.contentRect.height;
                    const footerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--apkt-footer-height') ||
                        '0');
                    if (this.mobileFullScreen) {
                        const viewportHeight = window.visualViewport?.height || window.innerHeight;
                        const headerHeight = this.getHeaderHeight();
                        newHeight = viewportHeight - headerHeight - footerHeight;
                        this.style.setProperty('--local-border-bottom-radius', '0px');
                    }
                    else {
                        const totalHeight = newHeight + footerHeight;
                        newHeight = totalHeight;
                        this.style.setProperty('--local-border-bottom-radius', footerHeight ? 'var(--apkt-borderRadius-5)' : '0px');
                    }
                    this.style.setProperty('--local-container-height', `${newHeight}px`);
                    if (this.previousHeight !== '0px') {
                        this.style.setProperty('--local-duration-height', this.transitionDuration);
                    }
                    this.previousHeight = `${newHeight}px`;
                }
            }
        });
        this.resizeObserver.observe(this.getWrapper());
        this.updateContainerHeight();
        window.addEventListener('resize', this.onViewportResize);
        window.visualViewport?.addEventListener('resize', this.onViewportResize);
    }
    disconnectedCallback() {
        const wrapper = this.getWrapper();
        if (wrapper && this.resizeObserver) {
            this.resizeObserver.unobserve(wrapper);
        }
        window.removeEventListener('resize', this.onViewportResize);
        window.visualViewport?.removeEventListener('resize', this.onViewportResize);
    }
    render() {
        return (0,lit/* html */.qy) `
      <div class="container" data-mobile-fullscreen="${(0,if_defined/* ifDefined */.J)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,if_defined/* ifDefined */.J)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    }
    onViewChange(history) {
        const historyArr = history.split(',').filter(Boolean);
        const prevArr = this.historyState.split(',').filter(Boolean);
        const prevLength = prevArr.length;
        const newLength = historyArr.length;
        const newView = historyArr[historyArr.length - 1] || '';
        const duration = esm_exports/* UiHelperUtil */.Zv.cssDurationToNumber(this.transitionDuration);
        let direction = '';
        if (newLength > prevLength) {
            direction = 'next';
        }
        else if (newLength < prevLength) {
            direction = 'prev';
        }
        else if (newLength === prevLength && historyArr[newLength - 1] !== prevArr[prevLength - 1]) {
            direction = 'next';
        }
        this.viewDirection = `${direction}-${newView}`;
        setTimeout(() => {
            this.historyState = history;
            this.setView?.(newView);
        }, duration);
        setTimeout(() => {
            this.viewDirection = '';
        }, duration * 2);
    }
    getWrapper() {
        return this.shadowRoot?.querySelector('div.page');
    }
    updateContainerHeight() {
        const wrapper = this.getWrapper();
        if (!wrapper) {
            return;
        }
        const footerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--apkt-footer-height') || '0');
        let newHeight = 0;
        if (this.mobileFullScreen) {
            const viewportHeight = window.visualViewport?.height || window.innerHeight;
            const headerHeight = this.getHeaderHeight();
            newHeight = viewportHeight - headerHeight - footerHeight;
            this.style.setProperty('--local-border-bottom-radius', '0px');
        }
        else {
            newHeight = wrapper.getBoundingClientRect().height + footerHeight;
            this.style.setProperty('--local-border-bottom-radius', footerHeight ? 'var(--apkt-borderRadius-5)' : '0px');
        }
        this.style.setProperty('--local-container-height', `${newHeight}px`);
        if (this.previousHeight !== '0px') {
            this.style.setProperty('--local-duration-height', this.transitionDuration);
        }
        this.previousHeight = `${newHeight}px`;
    }
    getHeaderHeight() {
        return HEADER_HEIGHT;
    }
};
W3mRouterContainer.styles = [w3m_router_container_styles];
w3m_router_container_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], W3mRouterContainer.prototype, "transitionDuration", void 0);
w3m_router_container_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], W3mRouterContainer.prototype, "transitionFunction", void 0);
w3m_router_container_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], W3mRouterContainer.prototype, "history", void 0);
w3m_router_container_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], W3mRouterContainer.prototype, "view", void 0);
w3m_router_container_decorate([
    (0,decorators/* property */.MZ)({ attribute: false })
], W3mRouterContainer.prototype, "setView", void 0);
w3m_router_container_decorate([
    (0,decorators/* state */.wk)()
], W3mRouterContainer.prototype, "viewDirection", void 0);
w3m_router_container_decorate([
    (0,decorators/* state */.wk)()
], W3mRouterContainer.prototype, "historyState", void 0);
w3m_router_container_decorate([
    (0,decorators/* state */.wk)()
], W3mRouterContainer.prototype, "previousHeight", void 0);
w3m_router_container_decorate([
    (0,decorators/* state */.wk)()
], W3mRouterContainer.prototype, "mobileFullScreen", void 0);
W3mRouterContainer = w3m_router_container_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-router-container')
], W3mRouterContainer);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/w3m-modal.js




//# sourceMappingURL=w3m-modal.js.map

/***/ },

/***/ 255743
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: W3mLegalFooter

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js + 3 modules
var wui_ux_by_reown = __webpack_require__(890823);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-footer/styles.js

/* harmony default export */ const styles = ((0,esm_exports/* css */.AH) `
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({ spacing }) => spacing['3']};
  }

  a {
    text-decoration: none;
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
    font-weight: 500;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-footer/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mLegalFooter = class W3mLegalFooter extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.unsubscribe.push(OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const { termsConditionsUrl, privacyPolicyUrl } = OptionsController/* OptionsController */.H.state;
        const legalCheckbox = OptionsController/* OptionsController */.H.state.features?.legalCheckbox;
        const showOnlyBranding = (!termsConditionsUrl && !privacyPolicyUrl) || legalCheckbox;
        if (showOnlyBranding) {
            return (0,lit/* html */.qy) `
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(true)} </wui-flex>
      `;
        }
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column">
        <wui-flex .padding=${['4', '3', '3', '3']} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
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
        return (0,lit/* html */.qy) `<a href=${termsConditionsUrl} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`;
    }
    privacyTemplate() {
        const { privacyPolicyUrl } = OptionsController/* OptionsController */.H.state;
        if (!privacyPolicyUrl) {
            return null;
        }
        return (0,lit/* html */.qy) `<a href=${privacyPolicyUrl} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`;
    }
    reownBrandingTemplate(showOnlyBranding = false) {
        if (!this.remoteFeatures?.reownBranding) {
            return null;
        }
        if (showOnlyBranding) {
            return (0,lit/* html */.qy) `<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`;
        }
        return (0,lit/* html */.qy) `<wui-ux-by-reown></wui-ux-by-reown>`;
    }
};
W3mLegalFooter.styles = [styles];
__decorate([
    (0,decorators/* state */.wk)()
], W3mLegalFooter.prototype, "remoteFeatures", void 0);
W3mLegalFooter = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-legal-footer')
], W3mLegalFooter);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 378306
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: W3mOnRampProvidersFooter

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var wui_icon = __webpack_require__(313163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(845198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(110152);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) ``);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let W3mOnRampProvidersFooter = class W3mOnRampProvidersFooter extends lit/* LitElement */.WF {
    render() {
        const { termsConditionsUrl, privacyPolicyUrl } = OptionsController/* OptionsController */.H.state;
        if (!termsConditionsUrl && !privacyPolicyUrl) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-flex
        .padding=${['4', '3', '3', '3']}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `;
    }
    howDoesItWorkTemplate() {
        return (0,lit/* html */.qy) ` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`;
    }
    onWhatIsBuy() {
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WHAT_IS_A_BUY',
            properties: {
                isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                    W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
            }
        });
        RouterController/* RouterController */.I.push('WhatIsABuy');
    }
};
W3mOnRampProvidersFooter.styles = [styles];
W3mOnRampProvidersFooter = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-onramp-providers-footer')
], W3mOnRampProvidersFooter);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 637289
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_components_wui_image_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617381);

//# sourceMappingURL=wui-image.js.map

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

/***/ 103104
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_components_wui_loading_spinner_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502378);

//# sourceMappingURL=wui-loading-spinner.js.map

/***/ },

/***/ 802759
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiSeparator

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-separator/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-separator/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiSeparator.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiSeparator.prototype, "text", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiSeparator.prototype, "bgColor", void 0);
WuiSeparator = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-separator')
], WuiSeparator);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js

//# sourceMappingURL=wui-separator.js.map

/***/ },

/***/ 890823
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiUxByReown

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var wui_flex = __webpack_require__(293511);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ConstantsUtil.js
const REOWN_URL = 'https://reown.com';
//# sourceMappingURL=ConstantsUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ux-by-reown/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ux-by-reown/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiUxByReown = class WuiUxByReown extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <a
        data-testid="ux-branding-reown"
        href=${REOWN_URL}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${['01', '0', '3', '0']}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `;
    }
};
WuiUxByReown.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
WuiUxByReown = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-ux-by-reown')
], WuiUxByReown);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js

//# sourceMappingURL=wui-ux-by-reown.js.map

/***/ }

}]);