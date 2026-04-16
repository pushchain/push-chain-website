"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[73436],{

/***/ 699598
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ TooltipController)
/* harmony export */ });
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(552095);
/* harmony import */ var valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(427088);
/* harmony import */ var _utils_withErrorBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(923082);



// -- State --------------------------------------------- //
const state = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
    message: '',
    open: false,
    triggerRect: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
    },
    variant: 'shade'
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe(callback) {
        return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state, () => callback(state));
    },
    subscribeKey(key, callback) {
        return (0,valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__/* .subscribeKey */ .u$)(state, key, callback);
    },
    showTooltip({ message, triggerRect, variant }) {
        state.open = true;
        state.message = message;
        state.triggerRect = triggerRect;
        state.variant = variant;
    },
    hide() {
        state.open = false;
        state.message = '';
        state.triggerRect = {
            width: 0,
            height: 0,
            top: 0,
            left: 0
        };
    }
};
// Export the controller wrapped with our error boundary
const TooltipController = (0,_utils_withErrorBoundary_js__WEBPACK_IMPORTED_MODULE_2__/* .withErrorBoundary */ .X)(controller);
//# sourceMappingURL=TooltipController.js.map

/***/ },

/***/ 473436
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mSwapPreviewView: () => (/* reexport */ W3mSwapPreviewView),
  W3mSwapSelectTokenView: () => (/* reexport */ W3mSwapSelectTokenView),
  W3mSwapView: () => (/* reexport */ W3mSwapView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js
var NumberUtil = __webpack_require__(566580);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SwapController.js + 1 modules
var SwapController = __webpack_require__(181760);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(409526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var wui_icon = __webpack_require__(313163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var wui_icon_box = __webpack_require__(804019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(110152);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(562944);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip-trigger/index.js + 1 modules
var w3m_tooltip_trigger = __webpack_require__(570146);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/index.js + 1 modules
var w3m_tooltip = __webpack_require__(974625);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-details/styles.js

/* harmony default export */ const styles = ((0,esm_exports/* css */.AH) `
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({ spacing }) => spacing['3']};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    cursor: pointer;
  }

  .details-content-container {
    padding: ${({ spacing }) => spacing['2']};
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({ spacing }) => spacing['3']};
    padding-left: ${({ spacing }) => spacing['3']};
    padding-right: ${({ spacing }) => spacing['2']};
    border-radius: calc(
      ${({ borderRadius }) => borderRadius['1']} + ${({ borderRadius }) => borderRadius['1']}
    );
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: ${({ spacing }) => spacing['2']};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-details/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











const slippageRate = ConstantsUtil/* ConstantsUtil */.oU.CONVERT_SLIPPAGE_TOLERANCE;
let WuiSwapDetails = class WuiSwapDetails extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.networkName = ChainController/* ChainController */.W.state.activeCaipNetwork?.name;
        this.detailsOpen = false;
        this.sourceToken = SwapController/* SwapController */.GN.state.sourceToken;
        this.toToken = SwapController/* SwapController */.GN.state.toToken;
        this.toTokenAmount = SwapController/* SwapController */.GN.state.toTokenAmount;
        this.sourceTokenPriceInUSD = SwapController/* SwapController */.GN.state.sourceTokenPriceInUSD;
        this.toTokenPriceInUSD = SwapController/* SwapController */.GN.state.toTokenPriceInUSD;
        this.priceImpact = SwapController/* SwapController */.GN.state.priceImpact;
        this.maxSlippage = SwapController/* SwapController */.GN.state.maxSlippage;
        this.networkTokenSymbol = SwapController/* SwapController */.GN.state.networkTokenSymbol;
        this.inputError = SwapController/* SwapController */.GN.state.inputError;
        this.unsubscribe.push(...[
            SwapController/* SwapController */.GN.subscribe(newState => {
                this.sourceToken = newState.sourceToken;
                this.toToken = newState.toToken;
                this.toTokenAmount = newState.toTokenAmount;
                this.priceImpact = newState.priceImpact;
                this.maxSlippage = newState.maxSlippage;
                this.sourceTokenPriceInUSD = newState.sourceTokenPriceInUSD;
                this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
                this.inputError = newState.inputError;
            })
        ]);
    }
    render() {
        const minReceivedAmount = this.toTokenAmount && this.maxSlippage
            ? NumberUtil/* NumberUtil */.S.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString()
            : null;
        if (!this.sourceToken || !this.toToken || this.inputError) {
            return null;
        }
        const toTokenSwappedAmount = this.sourceTokenPriceInUSD && this.toTokenPriceInUSD
            ? (1 / this.toTokenPriceInUSD) * this.sourceTokenPriceInUSD
            : 0;
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" alignItems="center" gap="01" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${['0', '2', '0', '2']}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="2">
                <wui-text variant="sm-regular" color="primary">
                  1 ${this.sourceToken.symbol} =
                  ${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(toTokenSwappedAmount, 3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="sm-regular" color="secondary">
                  $${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen
            ? (0,lit/* html */.qy) `
                <wui-flex flexDirection="column" gap="2" class="details-content-container">
                  ${this.priceImpact
                ? (0,lit/* html */.qy) ` <wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(this.priceImpact, 3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`
                : null}
                  ${this.maxSlippage && this.sourceToken.symbol
                ? (0,lit/* html */.qy) `<wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${minReceivedAmount
                    ? `Transaction will be reversed if you receive less than ${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(minReceivedAmount, 6)} ${this.toToken.symbol} due to price changes.`
                    : ''}`}
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(this.maxSlippage, 6)}
                              ${this.toToken.symbol} ${slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`
                : null}
                  <wui-flex flexDirection="column" gap="2">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="2">
                        <wui-text class="details-row-title" variant="sm-regular" color="secondary">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="sm-regular" color="secondary">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `
            : null}
        </wui-flex>
      </wui-flex>
    `;
    }
    toggleDetails() {
        this.detailsOpen = !this.detailsOpen;
    }
};
WuiSwapDetails.styles = [styles];
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "networkName", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiSwapDetails.prototype, "detailsOpen", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "sourceToken", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "toToken", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "toTokenAmount", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "sourceTokenPriceInUSD", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "toTokenPriceInUSD", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "priceImpact", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "maxSlippage", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "networkTokenSymbol", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiSwapDetails.prototype, "inputError", void 0);
WuiSwapDetails = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-swap-details')
], WuiSwapDetails);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js
var wui_shimmer = __webpack_require__(838215);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-input-skeleton/styles.js

/* harmony default export */ const w3m_swap_input_skeleton_styles = ((0,esm_exports/* css */.AH) `
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({ borderRadius }) => borderRadius['5']};
    padding: ${({ spacing }) => spacing['5']};
    padding-right: ${({ spacing }) => spacing['3']};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    box-shadow: inset 0px 0px 0px 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill ${({ durations }) => durations['md']}
      ${({ easings }) => easings['ease-out-power-1']};
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: ${({ tokens }) => tokens.core.glass010};
  }

  :host wui-flex .input_mask__background {
    fill: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-input-skeleton/index.js
var w3m_swap_input_skeleton_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mSwapInputSkeleton = class W3mSwapInputSkeleton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.target = 'sourceToken';
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="1"
        >
          <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `;
    }
    templateTokenSelectButton() {
        return (0,lit/* html */.qy) `
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
      </wui-flex>
    `;
    }
};
W3mSwapInputSkeleton.styles = [w3m_swap_input_skeleton_styles];
w3m_swap_input_skeleton_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInputSkeleton.prototype, "target", void 0);
W3mSwapInputSkeleton = w3m_swap_input_skeleton_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-swap-input-skeleton')
], W3mSwapInputSkeleton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-common/dist/esm/src/utils/InputUtil.js
const InputUtil = {
    numericInputKeyDown(event, currentValue, onChange) {
        const allowedKeys = [
            'Backspace',
            'Meta',
            'Ctrl',
            'a',
            'A',
            'c',
            'C',
            'x',
            'X',
            'v',
            'V',
            'ArrowLeft',
            'ArrowRight',
            'Tab'
        ];
        const controlPressed = event.metaKey || event.ctrlKey;
        const eventKey = event.key;
        const lowercaseEventKey = eventKey.toLocaleLowerCase();
        const selectAll = lowercaseEventKey === 'a';
        const copyKey = lowercaseEventKey === 'c';
        const pasteKey = lowercaseEventKey === 'v';
        const cutKey = lowercaseEventKey === 'x';
        const isComma = eventKey === ',';
        const isDot = eventKey === '.';
        const isNumericKey = eventKey >= '0' && eventKey <= '9';
        if (!controlPressed && (selectAll || copyKey || pasteKey || cutKey)) {
            event.preventDefault();
        }
        if (currentValue === '0' && !isComma && !isDot && eventKey === '0') {
            event.preventDefault();
        }
        if (currentValue === '0' && isNumericKey) {
            onChange(eventKey);
            event.preventDefault();
        }
        if (isComma || isDot) {
            if (!currentValue) {
                onChange('0.');
                event.preventDefault();
            }
            if (currentValue?.includes('.') || currentValue?.includes(',')) {
                event.preventDefault();
            }
        }
        if (!isNumericKey && !allowedKeys.includes(eventKey) && !isDot && !isComma) {
            event.preventDefault();
        }
    }
};
//# sourceMappingURL=InputUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-token-button.js + 2 modules
var wui_token_button = __webpack_require__(774948);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-input/styles.js

/* harmony default export */ const w3m_swap_input_styles = ((0,esm_exports/* css */.AH) `
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({ borderRadius }) => borderRadius['5']};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    padding: ${({ spacing }) => spacing['5']};
    padding-right: ${({ spacing }) => spacing['3']};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    position: relative;
    transition: box-shadow ${({ easings }) => easings['ease-out-power-1']}
      ${({ durations }) => durations['lg']};
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px ${({ tokens }) => tokens.core.glass010};
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: ${({ tokens }) => tokens.core.textAccentPrimary};
    color: ${({ tokens }) => tokens.theme.textPrimary};
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ tokens }) => tokens.core.glass010};
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-input/index.js
var w3m_swap_input_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const MINIMUM_USD_VALUE_TO_CONVERT = 0.00005;
let W3mSwapInput = class W3mSwapInput extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.focused = false;
        this.price = 0;
        this.target = 'sourceToken';
        this.onSetAmount = null;
        this.onSetMaxValue = null;
    }
    render() {
        const marketValue = this.marketValue || '0';
        const isMarketValueGreaterThanZero = NumberUtil/* NumberUtil */.S.bigNumber(marketValue).gt('0');
        return (0,lit/* html */.qy) `
      <wui-flex
        class="${this.focused ? 'focus' : ''}"
        justifyContent="space-between"
        alignItems="center"
      >
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${() => this.onFocusChange(true)}
            @focusout=${() => this.onFocusChange(false)}
            ?disabled=${this.disabled}
            value=${this.value || ''}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
            pattern="[0-9,.]*"
          />
          <wui-text class="market-value" variant="sm-regular" color="secondary">
            ${isMarketValueGreaterThanZero
            ? `$${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(this.marketValue, 2)}`
            : null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `;
    }
    handleKeydown(event) {
        return InputUtil.numericInputKeyDown(event, this.value, (value) => this.onSetAmount?.(this.target, value));
    }
    dispatchInputChangeEvent(event) {
        if (!this.onSetAmount) {
            return;
        }
        const value = event.target.value.replace(/[^0-9.]/gu, '');
        if (value === ',' || value === '.') {
            this.onSetAmount(this.target, '0.');
        }
        else if (value.endsWith(',')) {
            this.onSetAmount(this.target, value.replace(',', '.'));
        }
        else {
            this.onSetAmount(this.target, value);
        }
    }
    setMaxValueToInput() {
        this.onSetMaxValue?.(this.target, this.balance);
    }
    templateTokenSelectButton() {
        if (!this.token) {
            return (0,lit/* html */.qy) ` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="neutral-secondary"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;
        }
        return (0,lit/* html */.qy) `
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="1"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `;
    }
    tokenBalanceTemplate() {
        const balanceValueInUSD = NumberUtil/* NumberUtil */.S.multiply(this.balance, this.price);
        const haveBalance = balanceValueInUSD
            ? balanceValueInUSD?.gt(MINIMUM_USD_VALUE_TO_CONVERT)
            : false;
        return (0,lit/* html */.qy) `
      ${haveBalance
            ? (0,lit/* html */.qy) `<wui-text variant="sm-regular" color="secondary">
            ${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(this.balance, 2)}
          </wui-text>`
            : null}
      ${this.target === 'sourceToken' ? this.tokenActionButtonTemplate(haveBalance) : null}
    `;
    }
    tokenActionButtonTemplate(haveBalance) {
        if (haveBalance) {
            return (0,lit/* html */.qy) ` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-primary" variant="sm-medium">Max</wui-text>
      </button>`;
        }
        return (0,lit/* html */.qy) ` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-primary" variant="sm-medium">Buy</wui-text>
    </button>`;
    }
    onFocusChange(state) {
        this.focused = state;
    }
    onSelectToken() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_SELECT_TOKEN_TO_SWAP' });
        RouterController/* RouterController */.I.push('SwapSelectToken', {
            target: this.target
        });
    }
    onBuyToken() {
        RouterController/* RouterController */.I.push('OnRampProviders');
    }
};
W3mSwapInput.styles = [w3m_swap_input_styles];
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "focused", void 0);
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "balance", void 0);
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "value", void 0);
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "price", void 0);
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "marketValue", void 0);
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "disabled", void 0);
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "target", void 0);
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "token", void 0);
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "onSetAmount", void 0);
w3m_swap_input_decorate([
    (0,decorators/* property */.MZ)()
], W3mSwapInput.prototype, "onSetMaxValue", void 0);
W3mSwapInput = w3m_swap_input_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-swap-input')
], W3mSwapInput);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-view/styles.js

/* harmony default export */ const w3m_swap_view_styles = ((0,esm_exports/* css */.AH) `
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: ${({ borderRadius }) => borderRadius['4']};
  }

  .action-button:disabled {
    border-color: 1px solid ${({ tokens }) => tokens.core.glass010};
  }

  .swap-inputs-container {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius }) => borderRadius['10']} !important;
    border: 4px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: ${({ spacing }) => spacing['2']};
    border-radius: ${({ borderRadius }) => borderRadius['4']};
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    padding: ${({ spacing }) => spacing['2']};
  }

  .details-container > wui-flex {
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({ spacing }) => spacing['3']};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    transition: background ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({ spacing }) => spacing['2']};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({ spacing }) => spacing['3']} ${({ spacing }) => spacing['5']};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-view/index.js
var w3m_swap_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let W3mSwapView = class W3mSwapView extends lit/* LitElement */.WF {
    subscribe({ resetSwapState, initializeSwapState }) {
        return () => {
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', newCaipNetwork => this.onCaipNetworkChange({
                newCaipNetwork,
                resetSwapState,
                initializeSwapState
            }));
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                this.onCaipAddressChange({
                    newCaipAddress: val?.caipAddress,
                    resetSwapState,
                    initializeSwapState
                });
            });
        };
    }
    constructor() {
        super();
        this.unsubscribe = [];
        this.initialParams = RouterController/* RouterController */.I.state.data?.swap;
        this.detailsOpen = false;
        this.caipAddress = ChainController/* ChainController */.W.getAccountData()?.caipAddress;
        this.caipNetworkId = ChainController/* ChainController */.W.state.activeCaipNetwork?.caipNetworkId;
        this.initialized = SwapController/* SwapController */.GN.state.initialized;
        this.loadingQuote = SwapController/* SwapController */.GN.state.loadingQuote;
        this.loadingPrices = SwapController/* SwapController */.GN.state.loadingPrices;
        this.loadingTransaction = SwapController/* SwapController */.GN.state.loadingTransaction;
        this.sourceToken = SwapController/* SwapController */.GN.state.sourceToken;
        this.sourceTokenAmount = SwapController/* SwapController */.GN.state.sourceTokenAmount;
        this.sourceTokenPriceInUSD = SwapController/* SwapController */.GN.state.sourceTokenPriceInUSD;
        this.toToken = SwapController/* SwapController */.GN.state.toToken;
        this.toTokenAmount = SwapController/* SwapController */.GN.state.toTokenAmount;
        this.toTokenPriceInUSD = SwapController/* SwapController */.GN.state.toTokenPriceInUSD;
        this.inputError = SwapController/* SwapController */.GN.state.inputError;
        this.fetchError = SwapController/* SwapController */.GN.state.fetchError;
        this.lastTokenPriceUpdate = 0;
        this.minTokenPriceUpdateInterval = 10_000;
        this.visibilityChangeHandler = () => {
            if (document?.hidden) {
                clearInterval(this.interval);
                this.interval = undefined;
            }
            else {
                this.startTokenPriceInterval();
            }
        };
        this.startTokenPriceInterval = () => {
            if (this.interval &&
                Date.now() - this.lastTokenPriceUpdate < this.minTokenPriceUpdateInterval) {
                return;
            }
            if (this.lastTokenPriceUpdate &&
                Date.now() - this.lastTokenPriceUpdate > this.minTokenPriceUpdateInterval) {
                this.fetchTokensAndValues();
            }
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                this.fetchTokensAndValues();
            }, this.minTokenPriceUpdateInterval);
        };
        this.watchTokensAndValues = () => {
            if (!this.sourceToken || !this.toToken) {
                return;
            }
            this.subscribeToVisibilityChange();
            this.startTokenPriceInterval();
        };
        this.onDebouncedGetSwapCalldata = CoreHelperUtil/* CoreHelperUtil */.w.debounce(async () => {
            await SwapController/* SwapController */.GN.swapTokens();
        }, 200);
        this.subscribe({ resetSwapState: true, initializeSwapState: false })();
        this.unsubscribe.push(...[
            this.subscribe({ resetSwapState: false, initializeSwapState: true }),
            ModalController/* ModalController */.W.subscribeKey('open', isOpen => {
                if (!isOpen) {
                    SwapController/* SwapController */.GN.resetState();
                }
            }),
            RouterController/* RouterController */.I.subscribeKey('view', newRoute => {
                if (!newRoute.includes('Swap')) {
                    SwapController/* SwapController */.GN.resetValues();
                }
            }),
            SwapController/* SwapController */.GN.subscribe(newState => {
                this.initialized = newState.initialized;
                this.loadingQuote = newState.loadingQuote;
                this.loadingPrices = newState.loadingPrices;
                this.loadingTransaction = newState.loadingTransaction;
                this.sourceToken = newState.sourceToken;
                this.sourceTokenAmount = newState.sourceTokenAmount;
                this.sourceTokenPriceInUSD = newState.sourceTokenPriceInUSD;
                this.toToken = newState.toToken;
                this.toTokenAmount = newState.toTokenAmount;
                this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
                this.inputError = newState.inputError;
                this.fetchError = newState.fetchError;
                if (newState.sourceToken && newState.toToken) {
                    this.watchTokensAndValues();
                }
            })
        ]);
    }
    async firstUpdated() {
        SwapController/* SwapController */.GN.initializeState();
        this.watchTokensAndValues();
        await this.handleSwapParameters();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe?.());
        clearInterval(this.interval);
        document?.removeEventListener('visibilitychange', this.visibilityChangeHandler);
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['0', '4', '4', '4']} gap="3">
        ${this.initialized ? this.templateSwap() : this.templateLoading()}
      </wui-flex>
    `;
    }
    subscribeToVisibilityChange() {
        document?.removeEventListener('visibilitychange', this.visibilityChangeHandler);
        document?.addEventListener('visibilitychange', this.visibilityChangeHandler);
    }
    fetchTokensAndValues() {
        SwapController/* SwapController */.GN.getNetworkTokenPrice();
        SwapController/* SwapController */.GN.getMyTokensWithBalance();
        SwapController/* SwapController */.GN.swapTokens();
        this.lastTokenPriceUpdate = Date.now();
    }
    templateSwap() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="3">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          ${this.templateTokenInput('sourceToken', this.sourceToken)}
          ${this.templateTokenInput('toToken', this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `;
    }
    actionButtonLabel() {
        const haveNoAmount = !this.sourceTokenAmount || this.sourceTokenAmount === '0';
        if (this.fetchError) {
            return 'Swap';
        }
        if (!this.sourceToken || !this.toToken) {
            return 'Select token';
        }
        if (haveNoAmount) {
            return 'Enter amount';
        }
        if (this.inputError) {
            return this.inputError;
        }
        return 'Review swap';
    }
    templateReplaceTokensButton() {
        return (0,lit/* html */.qy) `
      <wui-flex class="replace-tokens-button-container">
        <wui-icon-box
          @click=${this.onSwitchTokens.bind(this)}
          icon="recycleHorizontal"
          size="md"
          variant="default"
        ></wui-icon-box>
      </wui-flex>
    `;
    }
    templateLoading() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `;
    }
    templateTokenInput(target, token) {
        const myToken = SwapController/* SwapController */.GN.state.myTokensWithBalance?.find(ct => ct?.address === token?.address);
        const amount = target === 'toToken' ? this.toTokenAmount : this.sourceTokenAmount;
        const price = target === 'toToken' ? this.toTokenPriceInUSD : this.sourceTokenPriceInUSD;
        const marketValue = NumberUtil/* NumberUtil */.S.parseLocalStringToNumber(amount) * price;
        return (0,lit/* html */.qy) `<w3m-swap-input
      .value=${target === 'toToken' ? this.toTokenAmount : this.sourceTokenAmount}
      .disabled=${target === 'toToken'}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${target}
      .token=${token}
      .balance=${myToken?.quantity?.numeric}
      .price=${myToken?.price}
      .marketValue=${marketValue}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`;
    }
    onSetMaxValue(target, balance) {
        const maxValue = NumberUtil/* NumberUtil */.S.bigNumber(balance || '0');
        this.handleChangeAmount(target, maxValue.gt(0) ? maxValue.toFixed(20) : '0');
    }
    templateDetails() {
        if (!this.sourceToken || !this.toToken || this.inputError) {
            return null;
        }
        return (0,lit/* html */.qy) `<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`;
    }
    handleChangeAmount(target, value) {
        SwapController/* SwapController */.GN.clearError();
        if (target === 'sourceToken') {
            SwapController/* SwapController */.GN.setSourceTokenAmount(value);
        }
        else {
            SwapController/* SwapController */.GN.setToTokenAmount(value);
        }
        this.onDebouncedGetSwapCalldata();
    }
    templateActionButton() {
        const haveNoTokenSelected = !this.toToken || !this.sourceToken;
        const haveNoAmount = !this.sourceTokenAmount || this.sourceTokenAmount === '0';
        const loading = this.loadingQuote || this.loadingPrices || this.loadingTransaction;
        const disabled = loading || haveNoTokenSelected || haveNoAmount || this.inputError;
        return (0,lit/* html */.qy) ` <wui-flex gap="2">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant="accent-primary"
        ?loading=${Boolean(loading)}
        ?disabled=${Boolean(disabled)}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`;
    }
    async onSwitchTokens() {
        await SwapController/* SwapController */.GN.switchTokens();
    }
    async onSwapPreview() {
        if (this.fetchError) {
            await SwapController/* SwapController */.GN.swapTokens();
        }
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'INITIATE_SWAP',
            properties: {
                network: this.caipNetworkId || '',
                swapFromToken: this.sourceToken?.symbol || '',
                swapToToken: this.toToken?.symbol || '',
                swapFromAmount: this.sourceTokenAmount || '',
                swapToAmount: this.toTokenAmount || '',
                isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                    W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
            }
        });
        RouterController/* RouterController */.I.push('SwapPreview');
    }
    async handleSwapParameters() {
        if (!this.initialParams) {
            return;
        }
        if (!SwapController/* SwapController */.GN.state.initialized) {
            const waitForInitialization = new Promise(resolve => {
                const unsubscribe = SwapController/* SwapController */.GN.subscribeKey('initialized', initialized => {
                    if (initialized) {
                        unsubscribe?.();
                        resolve();
                    }
                });
            });
            await waitForInitialization;
        }
        await this.setSwapParameters(this.initialParams);
    }
    async setSwapParameters({ amount, fromToken, toToken }) {
        if (!SwapController/* SwapController */.GN.state.tokens || !SwapController/* SwapController */.GN.state.myTokensWithBalance) {
            const waitForTokens = new Promise(resolve => {
                const unsubscribe = SwapController/* SwapController */.GN.subscribeKey('myTokensWithBalance', tokens => {
                    if (tokens && tokens.length > 0) {
                        unsubscribe?.();
                        resolve();
                    }
                });
                setTimeout(() => {
                    unsubscribe?.();
                    resolve();
                }, 5000);
            });
            await waitForTokens;
        }
        const allTokens = [
            ...(SwapController/* SwapController */.GN.state.tokens || []),
            ...(SwapController/* SwapController */.GN.state.myTokensWithBalance || [])
        ];
        if (fromToken) {
            const token = allTokens.find(t => t.symbol.toLowerCase() === fromToken.toLowerCase());
            if (token) {
                SwapController/* SwapController */.GN.setSourceToken(token);
            }
        }
        if (toToken) {
            const token = allTokens.find(t => t.symbol.toLowerCase() === toToken.toLowerCase());
            if (token) {
                SwapController/* SwapController */.GN.setToToken(token);
            }
        }
        if (amount && !isNaN(Number(amount))) {
            SwapController/* SwapController */.GN.setSourceTokenAmount(amount);
        }
    }
    onCaipAddressChange({ newCaipAddress, resetSwapState, initializeSwapState }) {
        if (this.caipAddress !== newCaipAddress) {
            this.caipAddress = newCaipAddress;
            if (resetSwapState) {
                SwapController/* SwapController */.GN.resetState();
            }
            if (initializeSwapState) {
                SwapController/* SwapController */.GN.initializeState();
            }
        }
    }
    onCaipNetworkChange({ newCaipNetwork, resetSwapState, initializeSwapState }) {
        if (this.caipNetworkId !== newCaipNetwork?.caipNetworkId) {
            this.caipNetworkId = newCaipNetwork?.caipNetworkId;
            if (resetSwapState) {
                SwapController/* SwapController */.GN.resetState();
            }
            if (initializeSwapState) {
                SwapController/* SwapController */.GN.initializeState();
            }
        }
    }
};
W3mSwapView.styles = w3m_swap_view_styles;
w3m_swap_view_decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], W3mSwapView.prototype, "initialParams", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "interval", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "detailsOpen", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "caipAddress", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "caipNetworkId", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "initialized", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "loadingQuote", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "loadingPrices", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "loadingTransaction", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "sourceToken", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "sourceTokenAmount", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "sourceTokenPriceInUSD", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "toToken", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "toTokenAmount", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "toTokenPriceInUSD", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "inputError", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "fetchError", void 0);
w3m_swap_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapView.prototype, "lastTokenPriceUpdate", void 0);
W3mSwapView = w3m_swap_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-swap-view')
], W3mSwapView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-preview-view/styles.js

/* harmony default export */ const w3m_swap_preview_view_styles = ((0,esm_exports/* css */.AH) `
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px ${({ tokens }) => tokens.core.glass010};
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing }) => spacing['2']};
    padding: ${({ spacing }) => spacing['2']};
    height: 40px;
    border: none;
    border-radius: 80px;
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    cursor: pointer;
    transition: background ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background;
  }

  .token-item:hover {
    background: ${({ tokens }) => tokens.core.glass010};
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({ spacing }) => spacing['3']} ${({ spacing }) => spacing['5']};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .action-buttons-container {
    width: 100%;
    gap: ${({ spacing }) => spacing['2']};
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: ${({ borderRadius }) => borderRadius['4']};
    border: none;
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.core.glass010};
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({ spacing }) => spacing['3']};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    transition: background ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({ spacing }) => spacing['2']};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({ spacing }) => spacing['3']} ${({ spacing }) => spacing['5']};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-preview-view/index.js
var w3m_swap_preview_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let W3mSwapPreviewView = class W3mSwapPreviewView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.detailsOpen = true;
        this.approvalTransaction = SwapController/* SwapController */.GN.state.approvalTransaction;
        this.swapTransaction = SwapController/* SwapController */.GN.state.swapTransaction;
        this.sourceToken = SwapController/* SwapController */.GN.state.sourceToken;
        this.sourceTokenAmount = SwapController/* SwapController */.GN.state.sourceTokenAmount ?? '';
        this.sourceTokenPriceInUSD = SwapController/* SwapController */.GN.state.sourceTokenPriceInUSD;
        this.balanceSymbol = ChainController/* ChainController */.W.getAccountData()?.balanceSymbol;
        this.toToken = SwapController/* SwapController */.GN.state.toToken;
        this.toTokenAmount = SwapController/* SwapController */.GN.state.toTokenAmount ?? '';
        this.toTokenPriceInUSD = SwapController/* SwapController */.GN.state.toTokenPriceInUSD;
        this.caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.inputError = SwapController/* SwapController */.GN.state.inputError;
        this.loadingQuote = SwapController/* SwapController */.GN.state.loadingQuote;
        this.loadingApprovalTransaction = SwapController/* SwapController */.GN.state.loadingApprovalTransaction;
        this.loadingBuildTransaction = SwapController/* SwapController */.GN.state.loadingBuildTransaction;
        this.loadingTransaction = SwapController/* SwapController */.GN.state.loadingTransaction;
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                if (val?.balanceSymbol !== this.balanceSymbol) {
                    RouterController/* RouterController */.I.goBack();
                }
            }),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', newCaipNetwork => {
                if (this.caipNetwork !== newCaipNetwork) {
                    this.caipNetwork = newCaipNetwork;
                }
            }),
            SwapController/* SwapController */.GN.subscribe(newState => {
                this.approvalTransaction = newState.approvalTransaction;
                this.swapTransaction = newState.swapTransaction;
                this.sourceToken = newState.sourceToken;
                this.toToken = newState.toToken;
                this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
                this.sourceTokenAmount = newState.sourceTokenAmount ?? '';
                this.toTokenAmount = newState.toTokenAmount ?? '';
                this.inputError = newState.inputError;
                if (newState.inputError) {
                    RouterController/* RouterController */.I.goBack();
                }
                this.loadingQuote = newState.loadingQuote;
                this.loadingApprovalTransaction = newState.loadingApprovalTransaction;
                this.loadingBuildTransaction = newState.loadingBuildTransaction;
                this.loadingTransaction = newState.loadingTransaction;
            })
        ]);
    }
    firstUpdated() {
        SwapController/* SwapController */.GN.getTransaction();
        this.refreshTransaction();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe?.());
        clearInterval(this.interval);
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['0', '4', '4', '4']} gap="3">
        ${this.templateSwap()}
      </wui-flex>
    `;
    }
    refreshTransaction() {
        this.interval = setInterval(() => {
            if (!SwapController/* SwapController */.GN.getApprovalLoadingState()) {
                SwapController/* SwapController */.GN.getTransaction();
            }
        }, 10_000);
    }
    templateSwap() {
        const sourceTokenText = `${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`;
        const toTokenText = `${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`;
        const sourceTokenValue = parseFloat(this.sourceTokenAmount) * this.sourceTokenPriceInUSD;
        const toTokenValue = parseFloat(this.toTokenAmount) * this.toTokenPriceInUSD;
        const sentPrice = NumberUtil/* NumberUtil */.S.formatNumberToLocalString(sourceTokenValue);
        const receivePrice = NumberUtil/* NumberUtil */.S.formatNumberToLocalString(toTokenValue);
        const loading = this.loadingQuote ||
            this.loadingBuildTransaction ||
            this.loadingTransaction ||
            this.loadingApprovalTransaction;
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="4">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Send</wui-text>
              <wui-text variant="md-regular" color="primary">$${sentPrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${sourceTokenText}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="default" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Receive</wui-text>
              <wui-text variant="md-regular" color="primary">$${receivePrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${toTokenText}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="2">
          <wui-icon size="sm" color="default" name="info"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral-secondary"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="secondary">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="accent-primary"
            ?loading=${loading}
            ?disabled=${loading}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="invert"> ${this.actionButtonLabel()} </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `;
    }
    templateDetails() {
        if (!this.sourceToken || !this.toToken || this.inputError) {
            return null;
        }
        return (0,lit/* html */.qy) `<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`;
    }
    actionButtonLabel() {
        if (this.loadingApprovalTransaction) {
            return 'Approving...';
        }
        if (this.approvalTransaction) {
            return 'Approve';
        }
        return 'Swap';
    }
    onCancelTransaction() {
        RouterController/* RouterController */.I.goBack();
    }
    onSendTransaction() {
        if (this.approvalTransaction) {
            SwapController/* SwapController */.GN.sendTransactionForApproval(this.approvalTransaction);
        }
        else {
            SwapController/* SwapController */.GN.sendTransactionForSwap(this.swapTransaction);
        }
    }
};
W3mSwapPreviewView.styles = w3m_swap_preview_view_styles;
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "interval", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "detailsOpen", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "approvalTransaction", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "swapTransaction", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "sourceToken", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "sourceTokenAmount", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "sourceTokenPriceInUSD", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "balanceSymbol", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "toToken", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "toTokenAmount", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "toTokenPriceInUSD", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "caipNetwork", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "inputError", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "loadingQuote", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "loadingApprovalTransaction", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "loadingBuildTransaction", void 0);
w3m_swap_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapPreviewView.prototype, "loadingTransaction", void 0);
W3mSwapPreviewView = w3m_swap_preview_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-swap-preview-view')
], W3mSwapPreviewView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-input-text.js
var wui_input_text = __webpack_require__(472270);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var components_wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var layout_wui_flex = __webpack_require__(293511);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-token-list-item/styles.js

/* harmony default export */ const wui_token_list_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: ${({ spacing }) => spacing['3']};
    padding: ${({ spacing }) => spacing['2']};
    padding-right: ${({ spacing }) => spacing['4']};
    width: 100%;
    background-color: transparent;
    border-radius: ${({ borderRadius }) => borderRadius['4']};
    color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    transition:
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      opacity ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }

    :host > wui-flex:active {
      background-color: ${({ tokens }) => tokens.core.glass010};
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius }) => borderRadius['20']};
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.core.glass010};
    border-radius: ${({ borderRadius }) => borderRadius['8']};
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: ${({ borderRadius }) => borderRadius['2']};
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-token-list-item/index.js
var wui_token_list_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiTokenListItem = class WuiTokenListItem extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.observer = new IntersectionObserver(() => undefined);
        this.imageSrc = undefined;
        this.name = undefined;
        this.symbol = undefined;
        this.price = undefined;
        this.amount = undefined;
        this.visible = false;
        this.imageError = false;
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.visible = true;
                }
                else {
                    this.visible = false;
                }
            });
        }, { threshold: 0.1 });
    }
    firstUpdated() {
        this.observer.observe(this);
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    render() {
        if (!this.visible) {
            return null;
        }
        const value = this.amount && this.price ? NumberUtil/* NumberUtil */.S.multiply(this.price, this.amount)?.toFixed(3) : null;
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="1">
          <wui-flex justifyContent="space-between">
            <wui-text variant="md-medium" color="primary" lineClamp="1">${this.name}</wui-text>
            ${value
            ? (0,lit/* html */.qy) `
                  <wui-text variant="md-medium" color="primary">
                    $${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(value, 3)}
                  </wui-text>
                `
            : null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="sm-regular" color="secondary" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount
            ? (0,lit/* html */.qy) `<wui-text variant="sm-regular" color="secondary">
                  ${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(this.amount, 5)}
                </wui-text>`
            : null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
    }
    visualTemplate() {
        if (this.imageError) {
            return (0,lit/* html */.qy) `<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`;
        }
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`;
        }
        return null;
    }
    imageLoadError() {
        this.imageError = true;
    }
};
WuiTokenListItem.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_token_list_item_styles];
wui_token_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTokenListItem.prototype, "imageSrc", void 0);
wui_token_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTokenListItem.prototype, "name", void 0);
wui_token_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTokenListItem.prototype, "symbol", void 0);
wui_token_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTokenListItem.prototype, "price", void 0);
wui_token_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTokenListItem.prototype, "amount", void 0);
wui_token_list_item_decorate([
    (0,decorators/* state */.wk)()
], WuiTokenListItem.prototype, "visible", void 0);
wui_token_list_item_decorate([
    (0,decorators/* state */.wk)()
], WuiTokenListItem.prototype, "imageError", void 0);
WuiTokenListItem = wui_token_list_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-token-list-item')
], WuiTokenListItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-token-list-item.js

//# sourceMappingURL=wui-token-list-item.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/index.js + 1 modules
var components_wui_shimmer = __webpack_require__(797607);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-token-list-item-loader/styles.js

/* harmony default export */ const wui_token_list_item_loader_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    column-gap: ${({ spacing }) => spacing['3']};
    padding: ${({ spacing }) => spacing['2']};
    padding-right: ${({ spacing }) => spacing['4']};
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-token-list-item-loader/index.js
var wui_token_list_item_loader_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiTokenListItemLoader = class WuiTokenListItemLoader extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="1" alignItems="flex-end">
          <wui-shimmer width="24px" height="12px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="32px" height="12px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `;
    }
};
WuiTokenListItemLoader.styles = [ThemeUtil/* resetStyles */.W5, wui_token_list_item_loader_styles];
WuiTokenListItemLoader = wui_token_list_item_loader_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-token-list-item-loader')
], WuiTokenListItemLoader);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-token-list-item-loader.js

//# sourceMappingURL=wui-token-list-item-loader.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-select-token-view/styles.js

/* harmony default export */ const w3m_swap_select_token_view_styles = ((0,esm_exports/* css */.AH) `
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid ${({ tokens }) => tokens.core.glass010};
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing }) => spacing['2']};
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.core.glass010};
    background-color: transparent;
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    padding: ${({ spacing }) => spacing['2']};
    align-items: center;
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
  }

  .select-network-button:hover {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: ${({ borderRadius }) => borderRadius['4']};
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.core.glass010};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-select-token-view/index.js
var w3m_swap_select_token_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let W3mSwapSelectTokenView = class W3mSwapSelectTokenView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.targetToken = RouterController/* RouterController */.I.state.data?.target;
        this.sourceToken = SwapController/* SwapController */.GN.state.sourceToken;
        this.sourceTokenAmount = SwapController/* SwapController */.GN.state.sourceTokenAmount;
        this.toToken = SwapController/* SwapController */.GN.state.toToken;
        this.myTokensWithBalance = SwapController/* SwapController */.GN.state.myTokensWithBalance;
        this.popularTokens = SwapController/* SwapController */.GN.state.popularTokens;
        this.suggestedTokens = SwapController/* SwapController */.GN.state.suggestedTokens;
        this.tokensLoading = SwapController/* SwapController */.GN.state.tokensLoading;
        this.searchValue = '';
        this.unsubscribe.push(SwapController/* SwapController */.GN.subscribe(newState => {
            this.sourceToken = newState.sourceToken;
            this.toToken = newState.toToken;
            this.myTokensWithBalance = newState.myTokensWithBalance;
            this.popularTokens = newState.popularTokens;
            this.suggestedTokens = newState.suggestedTokens;
            this.tokensLoading = newState.tokensLoading;
        }));
    }
    async firstUpdated() {
        await SwapController/* SwapController */.GN.getTokenList();
    }
    updated() {
        const suggestedTokensContainer = this.renderRoot?.querySelector('.suggested-tokens-container');
        suggestedTokensContainer?.addEventListener('scroll', this.handleSuggestedTokensScroll.bind(this));
        const tokensList = this.renderRoot?.querySelector('.tokens');
        tokensList?.addEventListener('scroll', this.handleTokenListScroll.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const suggestedTokensContainer = this.renderRoot?.querySelector('.suggested-tokens-container');
        const tokensList = this.renderRoot?.querySelector('.tokens');
        suggestedTokensContainer?.removeEventListener('scroll', this.handleSuggestedTokensScroll.bind(this));
        tokensList?.removeEventListener('scroll', this.handleTokenListScroll.bind(this));
        clearInterval(this.interval);
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="3">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `;
    }
    onSelectToken(token) {
        if (this.targetToken === 'sourceToken') {
            SwapController/* SwapController */.GN.setSourceToken(token);
        }
        else {
            SwapController/* SwapController */.GN.setToToken(token);
            if (this.sourceToken && this.sourceTokenAmount) {
                SwapController/* SwapController */.GN.swapTokens();
            }
        }
        RouterController/* RouterController */.I.goBack();
    }
    templateSearchInput() {
        return (0,lit/* html */.qy) `
      <wui-flex .padding=${['1', '3', '0', '3']} gap="2">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `;
    }
    templateMyTokens() {
        const yourTokens = this.myTokensWithBalance ? Object.values(this.myTokensWithBalance) : [];
        const filteredYourTokens = this.filterTokensWithText(yourTokens, this.searchValue);
        if (filteredYourTokens?.length > 0) {
            return (0,lit/* html */.qy) `<wui-flex justifyContent="flex-start" padding="2">
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        ${filteredYourTokens.map(token => {
                const selected = token.symbol === this.sourceToken?.symbol || token.symbol === this.toToken?.symbol;
                return (0,lit/* html */.qy) `
            <wui-token-list-item
              data-testid="swap-select-token-item-${token.symbol}"
              name=${token.name}
              ?disabled=${selected}
              symbol=${token.symbol}
              price=${token?.price}
              amount=${token?.quantity?.numeric}
              imageSrc=${token.logoUri}
              @click=${() => {
                    if (!selected) {
                        this.onSelectToken(token);
                    }
                }}
            >
            </wui-token-list-item>
          `;
            })}`;
        }
        return null;
    }
    templateAllTokens() {
        const tokens = this.popularTokens ? this.popularTokens : [];
        const filteredTokens = this.filterTokensWithText(tokens, this.searchValue);
        if (this.tokensLoading) {
            return (0,lit/* html */.qy) `
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
      `;
        }
        if (filteredTokens?.length > 0) {
            return (0,lit/* html */.qy) `
        ${filteredTokens.map(token => (0,lit/* html */.qy) `
            <wui-token-list-item
              data-testid="swap-select-token-item-${token.symbol}"
              name=${token.name}
              symbol=${token.symbol}
              imageSrc=${token.logoUri}
              @click=${() => this.onSelectToken(token)}
            >
            </wui-token-list-item>
          `)}
      `;
        }
        return null;
    }
    templateTokens() {
        return (0,lit/* html */.qy) `
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${['0', '2', '2', '2']} flexDirection="column">
          ${this.templateMyTokens()}
          <wui-flex justifyContent="flex-start" padding="3">
            <wui-text variant="md-medium" color="secondary">Tokens</wui-text>
          </wui-flex>
          ${this.templateAllTokens()}
        </wui-flex>
      </wui-flex>
    `;
    }
    templateSuggestedTokens() {
        const tokens = this.suggestedTokens ? this.suggestedTokens.slice(0, 8) : null;
        if (this.tokensLoading) {
            return (0,lit/* html */.qy) `
        <wui-flex
          class="suggested-tokens-container"
          .padding=${['0', '3', '0', '3']}
          gap="2"
        >
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
        </wui-flex>
      `;
        }
        if (!tokens) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-flex
        class="suggested-tokens-container"
        .padding=${['0', '3', '0', '3']}
        gap="2"
      >
        ${tokens.map(token => (0,lit/* html */.qy) `
            <wui-token-button
              text=${token.symbol}
              imageSrc=${token.logoUri}
              @click=${() => this.onSelectToken(token)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `;
    }
    onSearchInputChange(event) {
        this.searchValue = event.detail;
    }
    handleSuggestedTokensScroll() {
        const container = this.renderRoot?.querySelector('.suggested-tokens-container');
        if (!container) {
            return;
        }
        container.style.setProperty('--suggested-tokens-scroll--left-opacity', esm_exports/* MathUtil */.z8.interpolate([0, 100], [0, 1], container.scrollLeft).toString());
        container.style.setProperty('--suggested-tokens-scroll--right-opacity', esm_exports/* MathUtil */.z8.interpolate([0, 100], [0, 1], container.scrollWidth - container.scrollLeft - container.offsetWidth).toString());
    }
    handleTokenListScroll() {
        const container = this.renderRoot?.querySelector('.tokens');
        if (!container) {
            return;
        }
        container.style.setProperty('--tokens-scroll--top-opacity', esm_exports/* MathUtil */.z8.interpolate([0, 100], [0, 1], container.scrollTop).toString());
        container.style.setProperty('--tokens-scroll--bottom-opacity', esm_exports/* MathUtil */.z8.interpolate([0, 100], [0, 1], container.scrollHeight - container.scrollTop - container.offsetHeight).toString());
    }
    filterTokensWithText(tokens, text) {
        return tokens
            .filter(token => `${token.symbol} ${token.name} ${token.address}`.toLowerCase().includes(text.toLowerCase()))
            .sort((a, b) => {
            const aText = `${a.symbol} ${a.name} ${a.address}`.toLowerCase();
            const bText = `${b.symbol} ${b.name} ${b.address}`.toLowerCase();
            const aIndex = aText.indexOf(text.toLowerCase());
            const bIndex = bText.indexOf(text.toLowerCase());
            return aIndex - bIndex;
        });
    }
};
W3mSwapSelectTokenView.styles = w3m_swap_select_token_view_styles;
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "interval", void 0);
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "targetToken", void 0);
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "sourceToken", void 0);
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "sourceTokenAmount", void 0);
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "toToken", void 0);
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "myTokensWithBalance", void 0);
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "popularTokens", void 0);
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "suggestedTokens", void 0);
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "tokensLoading", void 0);
w3m_swap_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSwapSelectTokenView.prototype, "searchValue", void 0);
W3mSwapSelectTokenView = w3m_swap_select_token_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-swap-select-token-view')
], W3mSwapSelectTokenView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/swaps.js




//# sourceMappingURL=swaps.js.map

/***/ },

/***/ 570146
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiTooltipTrigger

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TooltipController.js
var TooltipController = __webpack_require__(699598);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip-trigger/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    width: 100%;
    display: block;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip-trigger/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let WuiTooltipTrigger = class WuiTooltipTrigger extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.text = '';
        this.open = TooltipController/* TooltipController */.I.state.open;
        this.unsubscribe.push(RouterController/* RouterController */.I.subscribeKey('view', () => {
            TooltipController/* TooltipController */.I.hide();
        }), ModalController/* ModalController */.W.subscribeKey('open', modalOpen => {
            if (!modalOpen) {
                TooltipController/* TooltipController */.I.hide();
            }
        }), TooltipController/* TooltipController */.I.subscribeKey('open', tooltipOpen => {
            this.open = tooltipOpen;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        TooltipController/* TooltipController */.I.hide();
    }
    render() {
        return (0,lit/* html */.qy) `
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `;
    }
    renderChildren() {
        return (0,lit/* html */.qy) `<slot></slot> `;
    }
    onMouseEnter() {
        const rect = this.getBoundingClientRect();
        if (!this.open) {
            const modalContainer = document.querySelector('w3m-modal');
            const triggerRect = {
                width: rect.width,
                height: rect.height,
                left: rect.left,
                top: rect.top
            };
            if (modalContainer) {
                const containerRect = modalContainer.getBoundingClientRect();
                triggerRect.left = rect.left - (window.innerWidth - containerRect.width) / 2;
                triggerRect.top = rect.top - (window.innerHeight - containerRect.height) / 2;
            }
            TooltipController/* TooltipController */.I.showTooltip({
                message: this.text,
                triggerRect,
                variant: 'shade'
            });
        }
    }
    onMouseLeave(event) {
        if (!this.contains(event.relatedTarget)) {
            TooltipController/* TooltipController */.I.hide();
        }
    }
};
WuiTooltipTrigger.styles = [styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTooltipTrigger.prototype, "text", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiTooltipTrigger.prototype, "open", void 0);
WuiTooltipTrigger = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-tooltip-trigger')
], WuiTooltipTrigger);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 974625
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: W3mTooltip

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TooltipController.js
var TooltipController = __webpack_require__(699598);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var wui_icon = __webpack_require__(313163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var wui_text = __webpack_require__(346709);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/styles.js

/* harmony default export */ const styles = ((0,esm_exports/* css */.AH) `
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({ spacing }) => spacing['3']} 10px ${({ spacing }) => spacing['3']};
    border-radius: ${({ borderRadius }) => borderRadius['3']};
    color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({ spacing }) => spacing['5']});
    transition: opacity ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({ durations }) => durations['xl']};
    animation-timing-function: ${({ easings }) => easings['ease-out-power-2']};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mTooltip = class W3mTooltip extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.open = TooltipController/* TooltipController */.I.state.open;
        this.message = TooltipController/* TooltipController */.I.state.message;
        this.triggerRect = TooltipController/* TooltipController */.I.state.triggerRect;
        this.variant = TooltipController/* TooltipController */.I.state.variant;
        this.unsubscribe.push(...[
            TooltipController/* TooltipController */.I.subscribe(newState => {
                this.open = newState.open;
                this.message = newState.message;
                this.triggerRect = newState.triggerRect;
                this.variant = newState.variant;
            })
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        this.dataset['variant'] = this.variant;
        const topValue = this.triggerRect.top;
        const leftValue = this.triggerRect.left;
        this.style.cssText = `
    --w3m-tooltip-top: ${topValue}px;
    --w3m-tooltip-left: ${leftValue}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? 'flex' : 'none'};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `;
        return (0,lit/* html */.qy) `<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`;
    }
};
W3mTooltip.styles = [styles];
__decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "open", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "message", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "triggerRect", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "variant", void 0);
W3mTooltip = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-tooltip')
], W3mTooltip);

//# sourceMappingURL=index.js.map

/***/ },

/***/ 804019
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_icon_box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42815);

//# sourceMappingURL=wui-icon-box.js.map

/***/ },

/***/ 472270
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_input_text_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(565760);

//# sourceMappingURL=wui-input-text.js.map

/***/ },

/***/ 838215
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_components_wui_shimmer_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(797607);

//# sourceMappingURL=wui-shimmer.js.map

/***/ },

/***/ 774948
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiTokenButton

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/index.js + 1 modules
var wui_shimmer = __webpack_require__(797607);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var wui_flex = __webpack_require__(293511);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-token-button/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({ spacing }) => spacing[1]};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[32]};
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius[32]};
  }

  wui-text {
    padding-left: ${({ spacing }) => spacing[1]};
    padding-right: ${({ spacing }) => spacing[1]};
  }

  .left-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    border: 1px solid ${({ tokens }) => tokens.theme.foregroundPrimary};
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

  button[data-size='lg'] .token-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .token-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .token-image {
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

  button[data-size='lg'] .chain-image {
    width: 12px;
    height: 12px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='md'] .chain-image {
    width: 10px;
    height: 10px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='sm'] .chain-image {
    width: 8px;
    height: 8px;
    bottom: 2px;
    right: -3px;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-token-button/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const TEXT_VARIANT_BY_SIZE = {
    lg: 'lg-regular',
    md: 'lg-regular',
    sm: 'md-regular'
};
const ICON_SIZE_BY_SIZE = {
    lg: 'lg',
    md: 'md',
    sm: 'sm'
};
let WuiTokenButton = class WuiTokenButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.disabled = false;
        this.text = '';
        this.loading = false;
    }
    render() {
        if (this.loading) {
            return (0,lit/* html */.qy) ` <wui-flex alignItems="center" gap="01" padding="01">
        <wui-shimmer width="20px" height="20px"></wui-shimmer>
        <wui-shimmer width="32px" height="18px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`;
        }
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled} data-size=${this.size}>
        ${this.imageTemplate()} ${this.textTemplate()}
      </button>
    `;
    }
    imageTemplate() {
        if (this.imageSrc && this.chainImageSrc) {
            return (0,lit/* html */.qy) `<wui-flex class="left-image-container">
        <wui-image src=${this.imageSrc} class="token-image"></wui-image>
        <wui-image src=${this.chainImageSrc} class="chain-image"></wui-image>
      </wui-flex>`;
        }
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} class="token-image"></wui-image>`;
        }
        const iconSize = ICON_SIZE_BY_SIZE[this.size];
        return (0,lit/* html */.qy) `<wui-flex class="left-icon-container">
      <wui-icon size=${iconSize} name="networkPlaceholder"></wui-icon>
    </wui-flex>`;
    }
    textTemplate() {
        const textVariant = TEXT_VARIANT_BY_SIZE[this.size];
        return (0,lit/* html */.qy) `<wui-text color="primary" variant=${textVariant}
      >${this.text}</wui-text
    >`;
    }
};
WuiTokenButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTokenButton.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTokenButton.prototype, "imageSrc", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTokenButton.prototype, "chainImageSrc", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiTokenButton.prototype, "disabled", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTokenButton.prototype, "text", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiTokenButton.prototype, "loading", void 0);
WuiTokenButton = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-token-button')
], WuiTokenButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-token-button.js

//# sourceMappingURL=wui-token-button.js.map

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