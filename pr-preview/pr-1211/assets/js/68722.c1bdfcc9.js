"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[68722],{

/***/ 468722
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mSendConfirmedView: () => (/* reexport */ W3mSendConfirmedView),
  W3mSendSelectTokenView: () => (/* reexport */ W3mSendSelectTokenView),
  W3mWalletSendPreviewView: () => (/* reexport */ W3mWalletSendPreviewView),
  W3mWalletSendView: () => (/* reexport */ W3mWalletSendView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SendController.js
var SendController = __webpack_require__(308351);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SwapController.js + 1 modules
var SwapController = __webpack_require__(181760);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(562944);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(527601);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/BalanceUtil.js + 2 modules
var BalanceUtil = __webpack_require__(382752);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(409526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var wui_icon_box = __webpack_require__(804019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js + 2 modules
var wui_separator = __webpack_require__(802759);
// EXTERNAL MODULE: ./node_modules/lit/directives/ref.js + 3 modules
var ref = __webpack_require__(791629);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var wui_icon = __webpack_require__(313163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var wui_text = __webpack_require__(346709);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-input-address/styles.js

/* harmony default export */ const styles = ((0,esm_exports/* css */.AH) `
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({ borderRadius }) => borderRadius['5']};
    border: 1px solid ${({ tokens }) => tokens.theme.foregroundPrimary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-1']};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({ tokens }) => tokens.theme.textPrimary};
    margin: 0 ${({ spacing }) => spacing['2']};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({ fontFamily }) => fontFamily.regular};
    font-style: normal;
    font-size: ${({ textSize }) => textSize.large};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    line-height: ${({ typography }) => typography['lg-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['lg-regular'].letterSpacing};
    color: ${({ tokens }) => tokens.theme.textPrimary};
    caret-color: ${({ tokens }) => tokens.core.backgroundAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-input-address/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mInputAddress = class W3mInputAddress extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.inputElementRef = (0,ref/* createRef */._)();
        this.instructionElementRef = (0,ref/* createRef */._)();
        this.readOnly = false;
        this.instructionHidden = Boolean(this.value);
        this.pasting = false;
        this.onDebouncedSearch = CoreHelperUtil/* CoreHelperUtil */.w.debounce(async (value) => {
            if (!value.length) {
                this.setReceiverAddress('');
                return;
            }
            const activeChain = ChainController/* ChainController */.W.state.activeChain;
            const isValidAddress = CoreHelperUtil/* CoreHelperUtil */.w.isAddress(value, activeChain);
            if (isValidAddress) {
                this.setReceiverAddress(value);
                return;
            }
            try {
                const resolvedAddress = await ConnectionController/* ConnectionController */.x.getEnsAddress(value);
                if (resolvedAddress) {
                    SendController/* SendController */.R.setReceiverProfileName(value);
                    SendController/* SendController */.R.setReceiverAddress(resolvedAddress);
                    const avatar = await ConnectionController/* ConnectionController */.x.getEnsAvatar(value);
                    SendController/* SendController */.R.setReceiverProfileImageUrl(avatar || undefined);
                }
            }
            catch (error) {
                this.setReceiverAddress(value);
            }
            finally {
                SendController/* SendController */.R.setLoading(false);
            }
        });
    }
    firstUpdated() {
        if (this.value) {
            this.instructionHidden = true;
        }
        this.checkHidden();
    }
    render() {
        if (this.readOnly) {
            return (0,lit/* html */.qy) ` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${['8', '4', '5', '4']}
      >
        <textarea
          spellcheck="false"
          ?disabled=${true}
          autocomplete="off"
          .value=${this.value ?? ''}
        >
           ${this.value ?? ''}</textarea
        >
      </wui-flex>`;
        }
        return (0,lit/* html */.qy) ` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${['8', '4', '5', '4']}
    >
      <wui-text
        ${(0,ref/* ref */.K)(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0,ref/* ref */.K)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value ?? ''}
        autocomplete="off"
      >
${this.value ?? ''}</textarea
      >
    </wui-flex>`;
    }
    async focusInput() {
        if (this.instructionElementRef.value) {
            this.instructionHidden = true;
            await this.toggleInstructionFocus(false);
            this.instructionElementRef.value.style.pointerEvents = 'none';
            this.inputElementRef.value?.focus();
            if (this.inputElementRef.value) {
                this.inputElementRef.value.selectionStart = this.inputElementRef.value.selectionEnd =
                    this.inputElementRef.value.value.length;
            }
        }
    }
    async focusInstruction() {
        if (this.instructionElementRef.value) {
            this.instructionHidden = false;
            await this.toggleInstructionFocus(true);
            this.instructionElementRef.value.style.pointerEvents = 'auto';
            this.inputElementRef.value?.blur();
        }
    }
    async toggleInstructionFocus(focus) {
        if (this.instructionElementRef.value) {
            await this.instructionElementRef.value.animate([{ opacity: focus ? 0 : 1 }, { opacity: focus ? 1 : 0 }], {
                duration: 100,
                easing: 'ease',
                fill: 'forwards'
            }).finished;
        }
    }
    onBoxClick() {
        if (!this.value && !this.instructionHidden) {
            this.focusInput();
        }
    }
    onBlur() {
        if (!this.value && this.instructionHidden && !this.pasting) {
            this.focusInstruction();
        }
    }
    checkHidden() {
        if (this.instructionHidden) {
            this.focusInput();
        }
    }
    async onPasteClick() {
        this.pasting = true;
        const text = await navigator.clipboard.readText();
        SendController/* SendController */.R.setReceiverAddress(text);
        this.focusInput();
    }
    onInputChange(e) {
        const element = e.target;
        this.pasting = false;
        this.value = e.target?.value;
        if (element.value && !this.instructionHidden) {
            this.focusInput();
        }
        SendController/* SendController */.R.setLoading(true);
        this.onDebouncedSearch(element.value);
    }
    setReceiverAddress(address) {
        SendController/* SendController */.R.setReceiverAddress(address);
        SendController/* SendController */.R.setReceiverProfileName(undefined);
        SendController/* SendController */.R.setReceiverProfileImageUrl(undefined);
        SendController/* SendController */.R.setLoading(false);
    }
};
W3mInputAddress.styles = styles;
__decorate([
    (0,decorators/* property */.MZ)()
], W3mInputAddress.prototype, "value", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mInputAddress.prototype, "readOnly", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mInputAddress.prototype, "instructionHidden", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mInputAddress.prototype, "pasting", void 0);
W3mInputAddress = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-input-address')
], W3mInputAddress);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js
var NumberUtil = __webpack_require__(566580);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-input-amount.js + 2 modules
var wui_input_amount = __webpack_require__(777360);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(845198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-token-button.js + 2 modules
var wui_token_button = __webpack_require__(774948);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-input-token/styles.js

/* harmony default export */ const w3m_input_token_styles = ((0,esm_exports/* css */.AH) `
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({ borderRadius }) => borderRadius['5']};
    border: 1px solid ${({ tokens }) => tokens.theme.foregroundPrimary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-1']};
    will-change: background-color;
    transition: all ${({ easings }) => easings['ease-out-power-1']}
      ${({ durations }) => durations['lg']};
  }

  :host(:hover) {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
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

  .totalValue {
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-input-token/index.js
var w3m_input_token_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let W3mInputToken = class W3mInputToken extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.readOnly = false;
        this.isInsufficientBalance = false;
    }
    render() {
        const isDisabled = this.readOnly || !this.token;
        return (0,lit/* html */.qy) ` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${['5', '3', '4', '3']}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${isDisabled}
          .value=${this.sendTokenAmount ? String(this.sendTokenAmount) : ''}
          ?error=${Boolean(this.isInsufficientBalance)}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`;
    }
    buttonTemplate() {
        if (this.token) {
            return (0,lit/* html */.qy) `<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`;
        }
        return (0,lit/* html */.qy) `<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`;
    }
    handleSelectButtonClick() {
        if (!this.readOnly) {
            RouterController/* RouterController */.I.push('WalletSendSelectToken');
        }
    }
    sendValueTemplate() {
        if (!this.readOnly && this.token && this.sendTokenAmount) {
            const price = this.token.price;
            const totalValue = price * this.sendTokenAmount;
            return (0,lit/* html */.qy) `<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${totalValue
                ? `$${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(totalValue, 2)}`
                : 'Incorrect value'}</wui-text
      >`;
        }
        return null;
    }
    maxAmountTemplate() {
        if (this.token) {
            return (0,lit/* html */.qy) ` <wui-text variant="sm-regular" color="secondary">
        ${esm_exports/* UiHelperUtil */.Zv.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
      </wui-text>`;
        }
        return null;
    }
    actionTemplate() {
        if (this.token) {
            return (0,lit/* html */.qy) `<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`;
        }
        return null;
    }
    bottomTemplate() {
        if (this.readOnly) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`;
    }
    onInputChange(event) {
        SendController/* SendController */.R.setTokenAmount(event.detail);
    }
    onMaxClick() {
        if (this.token) {
            const maxValue = NumberUtil/* NumberUtil */.S.bigNumber(this.token.quantity.numeric);
            SendController/* SendController */.R.setTokenAmount(Number(maxValue.toFixed(20)));
        }
    }
};
W3mInputToken.styles = w3m_input_token_styles;
w3m_input_token_decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], W3mInputToken.prototype, "token", void 0);
w3m_input_token_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mInputToken.prototype, "readOnly", void 0);
w3m_input_token_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], W3mInputToken.prototype, "sendTokenAmount", void 0);
w3m_input_token_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mInputToken.prototype, "isInsufficientBalance", void 0);
W3mInputToken = w3m_input_token_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-input-token')
], W3mInputToken);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-view/styles.js

/* harmony default export */ const w3m_wallet_send_view_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
  }

  wui-flex {
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

  wui-button {
    --local-border-radius: ${({ borderRadius }) => borderRadius['4']} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-view/index.js
var w3m_wallet_send_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const SEND_BUTTON_MESSAGE = {
    INSUFFICIENT_FUNDS: 'Insufficient Funds',
    INCORRECT_VALUE: 'Incorrect Value',
    INVALID_ADDRESS: 'Invalid Address',
    ADD_ADDRESS: 'Add Address',
    ADD_AMOUNT: 'Add Amount',
    SELECT_TOKEN: 'Select Token',
    PREVIEW_SEND: 'Preview Send'
};
let W3mWalletSendView = class W3mWalletSendView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.isTryingToChooseDifferentWallet = false;
        this.token = SendController/* SendController */.R.state.token;
        this.sendTokenAmount = SendController/* SendController */.R.state.sendTokenAmount;
        this.receiverAddress = SendController/* SendController */.R.state.receiverAddress;
        this.receiverProfileName = SendController/* SendController */.R.state.receiverProfileName;
        this.loading = SendController/* SendController */.R.state.loading;
        this.params = RouterController/* RouterController */.I.state.data?.send;
        this.caipAddress = ChainController/* ChainController */.W.getAccountData()?.caipAddress;
        this.message = SEND_BUTTON_MESSAGE.PREVIEW_SEND;
        this.disconnecting = false;
        if (this.token && !this.params) {
            this.fetchBalances();
            this.fetchNetworkPrice();
        }
        const unsubscribe = ChainController/* ChainController */.W.subscribeKey('activeCaipAddress', val => {
            if (!val && this.isTryingToChooseDifferentWallet) {
                this.isTryingToChooseDifferentWallet = false;
                ModalController/* ModalController */.W.open({
                    view: 'Connect',
                    data: {
                        redirectView: 'WalletSend'
                    }
                }).catch(() => null);
                unsubscribe();
            }
        });
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeAccountStateProp('caipAddress', val => {
                this.caipAddress = val;
            }),
            SendController/* SendController */.R.subscribe(val => {
                this.token = val.token;
                this.sendTokenAmount = val.sendTokenAmount;
                this.receiverAddress = val.receiverAddress;
                this.receiverProfileName = val.receiverProfileName;
                this.loading = val.loading;
            })
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    async firstUpdated() {
        await this.handleSendParameters();
    }
    render() {
        this.getMessage();
        const isReadOnly = Boolean(this.params);
        return (0,lit/* html */.qy) ` <wui-flex flexDirection="column" .padding=${['0', '4', '4', '4']}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          ?readOnly=${isReadOnly}
          ?isInsufficientBalance=${this.message === SEND_BUTTON_MESSAGE.INSUFFICIENT_FUNDS}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${isReadOnly}
          .value=${this.receiverProfileName ? this.receiverProfileName : this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      ${this.buttonTemplate()}
    </wui-flex>`;
    }
    async fetchBalances() {
        await SendController/* SendController */.R.fetchTokenBalance();
        SendController/* SendController */.R.fetchNetworkBalance();
    }
    async fetchNetworkPrice() {
        await SwapController/* SwapController */.GN.getNetworkTokenPrice();
    }
    onButtonClick() {
        RouterController/* RouterController */.I.push('WalletSendPreview', {
            send: this.params
        });
    }
    onFundWalletClick() {
        RouterController/* RouterController */.I.push('FundWallet', {
            redirectView: 'WalletSend'
        });
    }
    async onConnectDifferentWalletClick() {
        try {
            this.isTryingToChooseDifferentWallet = true;
            this.disconnecting = true;
            await ConnectionController/* ConnectionController */.x.disconnect();
        }
        finally {
            this.disconnecting = false;
        }
    }
    getMessage() {
        this.message = SEND_BUTTON_MESSAGE.PREVIEW_SEND;
        if (this.receiverAddress &&
            !CoreHelperUtil/* CoreHelperUtil */.w.isAddress(this.receiverAddress, ChainController/* ChainController */.W.state.activeChain)) {
            this.message = SEND_BUTTON_MESSAGE.INVALID_ADDRESS;
        }
        if (!this.receiverAddress) {
            this.message = SEND_BUTTON_MESSAGE.ADD_ADDRESS;
        }
        if (this.sendTokenAmount &&
            this.token &&
            this.sendTokenAmount > Number(this.token.quantity.numeric)) {
            this.message = SEND_BUTTON_MESSAGE.INSUFFICIENT_FUNDS;
        }
        if (!this.sendTokenAmount) {
            this.message = SEND_BUTTON_MESSAGE.ADD_AMOUNT;
        }
        if (this.sendTokenAmount && this.token?.price) {
            const value = this.sendTokenAmount * this.token.price;
            if (!value) {
                this.message = SEND_BUTTON_MESSAGE.INCORRECT_VALUE;
            }
        }
        if (!this.token) {
            this.message = SEND_BUTTON_MESSAGE.SELECT_TOKEN;
        }
    }
    buttonTemplate() {
        const isDisabled = !this.message.startsWith(SEND_BUTTON_MESSAGE.PREVIEW_SEND);
        const isInsufficientBalance = this.message === SEND_BUTTON_MESSAGE.INSUFFICIENT_FUNDS;
        const isReadOnly = Boolean(this.params);
        if (isInsufficientBalance && !isReadOnly) {
            return (0,lit/* html */.qy) `
        <wui-flex .margin=${['4', '0', '0', '0']} flexDirection="column" gap="4">
          <wui-button
            @click=${this.onFundWalletClick.bind(this)}
            size="lg"
            variant="accent-secondary"
            fullWidth
          >
            Fund Wallet
          </wui-button>

          <wui-separator data-testid="wui-separator" text="or"></wui-separator>

          <wui-button
            @click=${this.onConnectDifferentWalletClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
            fullWidth
            ?loading=${this.disconnecting}
          >
            Connect a different wallet
          </wui-button>
        </wui-flex>
      `;
        }
        return (0,lit/* html */.qy) `<wui-flex .margin=${['4', '0', '0', '0']}>
      <wui-button
        @click=${this.onButtonClick.bind(this)}
        ?disabled=${isDisabled}
        size="lg"
        variant="accent-primary"
        ?loading=${this.loading}
        fullWidth
      >
        ${this.message}
      </wui-button>
    </wui-flex>`;
    }
    async handleSendParameters() {
        this.loading = true;
        if (!this.params) {
            this.loading = false;
            return;
        }
        const amount = Number(this.params.amount);
        if (isNaN(amount)) {
            SnackController/* SnackController */.P.showError('Invalid amount');
            this.loading = false;
            return;
        }
        const { namespace, chainId, assetAddress } = this.params;
        if (!ConstantsUtil/* ConstantsUtil */.oU.SEND_PARAMS_SUPPORTED_CHAINS.includes(namespace)) {
            SnackController/* SnackController */.P.showError(`Chain "${namespace}" is not supported for send parameters`);
            this.loading = false;
            return;
        }
        const caipNetwork = ChainController/* ChainController */.W.getCaipNetworkById(chainId, namespace);
        if (!caipNetwork) {
            SnackController/* SnackController */.P.showError(`Network with id "${chainId}" not found`);
            this.loading = false;
            return;
        }
        try {
            const { balance, name, symbol, decimals } = await BalanceUtil/* BalanceUtil */.Z.fetchERC20Balance({
                caipAddress: this.caipAddress,
                assetAddress,
                caipNetwork
            });
            if (!name || !symbol || !decimals || !balance) {
                SnackController/* SnackController */.P.showError('Token not found');
                return;
            }
            SendController/* SendController */.R.setToken({
                name,
                symbol,
                chainId: caipNetwork.id.toString(),
                address: `${caipNetwork.chainNamespace}:${caipNetwork.id}:${assetAddress}`,
                value: 0,
                price: 0,
                quantity: {
                    decimals: decimals.toString(),
                    numeric: balance.toString()
                },
                iconUrl: AssetUtil/* AssetUtil */.$.getTokenImage(symbol) ?? ''
            });
            SendController/* SendController */.R.setTokenAmount(amount);
            SendController/* SendController */.R.setReceiverAddress(this.params.to);
        }
        catch (err) {
            console.error('Failed to load token information:', err);
            SnackController/* SnackController */.P.showError('Failed to load token information');
        }
        finally {
            this.loading = false;
        }
    }
};
W3mWalletSendView.styles = w3m_wallet_send_view_styles;
w3m_wallet_send_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendView.prototype, "token", void 0);
w3m_wallet_send_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendView.prototype, "sendTokenAmount", void 0);
w3m_wallet_send_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendView.prototype, "receiverAddress", void 0);
w3m_wallet_send_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendView.prototype, "receiverProfileName", void 0);
w3m_wallet_send_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendView.prototype, "loading", void 0);
w3m_wallet_send_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendView.prototype, "params", void 0);
w3m_wallet_send_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendView.prototype, "caipAddress", void 0);
w3m_wallet_send_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendView.prototype, "message", void 0);
w3m_wallet_send_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendView.prototype, "disconnecting", void 0);
W3mWalletSendView = w3m_wallet_send_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-wallet-send-view')
], W3mWalletSendView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-input-text.js
var wui_input_text = __webpack_require__(472270);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-token.js + 2 modules
var wui_list_token = __webpack_require__(414798);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-select-token-view/styles.js

/* harmony default export */ const w3m_wallet_send_select_token_view_styles = ((0,esm_exports/* css */.AH) `
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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-select-token-view/index.js
var w3m_wallet_send_select_token_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let W3mSendSelectTokenView = class W3mSendSelectTokenView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.tokenBalances = SendController/* SendController */.R.state.tokenBalances;
        this.search = '';
        this.onDebouncedSearch = CoreHelperUtil/* CoreHelperUtil */.w.debounce((value) => {
            this.search = value;
        });
        this.fetchBalancesAndNetworkPrice();
        this.unsubscribe.push(...[
            SendController/* SendController */.R.subscribe(val => {
                this.tokenBalances = val.tokenBalances;
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
    async fetchBalancesAndNetworkPrice() {
        if (!this.tokenBalances || this.tokenBalances?.length === 0) {
            await this.fetchBalances();
            await this.fetchNetworkPrice();
        }
    }
    async fetchBalances() {
        await SendController/* SendController */.R.fetchTokenBalance();
        SendController/* SendController */.R.fetchNetworkBalance();
    }
    async fetchNetworkPrice() {
        await SwapController/* SwapController */.GN.getNetworkTokenPrice();
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
        this.tokens = this.tokenBalances?.filter(token => token.chainId === ChainController/* ChainController */.W.state.activeCaipNetwork?.caipNetworkId);
        if (this.search) {
            this.filteredTokens = this.tokenBalances?.filter(token => token.name.toLowerCase().includes(this.search.toLowerCase()));
        }
        else {
            this.filteredTokens = this.tokens;
        }
        return (0,lit/* html */.qy) `
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${['0', '3', '0', '3']}
      >
        <wui-flex justifyContent="flex-start" .padding=${['4', '3', '3', '3']}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens && this.filteredTokens.length > 0
            ? this.filteredTokens.map(token => (0,lit/* html */.qy) `<wui-list-token
                    @click=${this.handleTokenClick.bind(this, token)}
                    ?clickable=${true}
                    tokenName=${token.name}
                    tokenImageUrl=${token.iconUrl}
                    tokenAmount=${token.quantity.numeric}
                    tokenValue=${token.value}
                    tokenCurrency=${token.symbol}
                  ></wui-list-token>`)
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
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
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
    handleTokenClick(token) {
        SendController/* SendController */.R.setToken(token);
        SendController/* SendController */.R.setTokenAmount(undefined);
        RouterController/* RouterController */.I.goBack();
    }
};
W3mSendSelectTokenView.styles = w3m_wallet_send_select_token_view_styles;
w3m_wallet_send_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSendSelectTokenView.prototype, "tokenBalances", void 0);
w3m_wallet_send_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSendSelectTokenView.prototype, "tokens", void 0);
w3m_wallet_send_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSendSelectTokenView.prototype, "filteredTokens", void 0);
w3m_wallet_send_select_token_view_decorate([
    (0,decorators/* state */.wk)()
], W3mSendSelectTokenView.prototype, "search", void 0);
W3mSendSelectTokenView = w3m_wallet_send_select_token_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-wallet-send-select-token-view')
], W3mSendSelectTokenView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js
var ErrorUtil = __webpack_require__(136875);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js + 1 modules
var withErrorBoundary = __webpack_require__(923082);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var components_wui_icon = __webpack_require__(778935);
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-avatar/index.js + 1 modules
var wui_avatar = __webpack_require__(508463);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-preview-item/styles.js

/* harmony default export */ const wui_preview_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({ spacing }) => spacing[1]};
    border-radius: ${({ borderRadius }) => borderRadius[32]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    padding: ${({ spacing }) => spacing[1]};
    padding-left: ${({ spacing }) => spacing[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }

  wui-icon {
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-preview-item/index.js
var wui_preview_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let WuiPreviewItem = class WuiPreviewItem extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.text = '';
    }
    render() {
        return (0,lit/* html */.qy) `<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`;
    }
    imageTemplate() {
        if (this.address) {
            return (0,lit/* html */.qy) `<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`;
        }
        else if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc}></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`;
    }
};
WuiPreviewItem.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_preview_item_styles];
wui_preview_item_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], WuiPreviewItem.prototype, "text", void 0);
wui_preview_item_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], WuiPreviewItem.prototype, "address", void 0);
wui_preview_item_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], WuiPreviewItem.prototype, "imageSrc", void 0);
WuiPreviewItem = wui_preview_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-preview-item')
], WuiPreviewItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-preview-item.js

//# sourceMappingURL=wui-preview-item.js.map
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-content/styles.js

/* harmony default export */ const wui_list_content_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: flex;
    padding: ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[3]};
    width: 100%;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-content/index.js
var wui_list_content_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiListContent = class WuiListContent extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.imageSrc = undefined;
        this.textTitle = '';
        this.textValue = undefined;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `;
    }
    templateContent() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`;
        }
        else if (this.textValue) {
            return (0,lit/* html */.qy) ` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`;
        }
        return (0,lit/* html */.qy) `<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`;
    }
};
WuiListContent.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_list_content_styles];
wui_list_content_decorate([
    (0,decorators/* property */.MZ)()
], WuiListContent.prototype, "imageSrc", void 0);
wui_list_content_decorate([
    (0,decorators/* property */.MZ)()
], WuiListContent.prototype, "textTitle", void 0);
wui_list_content_decorate([
    (0,decorators/* property */.MZ)()
], WuiListContent.prototype, "textValue", void 0);
WuiListContent = wui_list_content_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-list-content')
], WuiListContent);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-content.js

//# sourceMappingURL=wui-list-content.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-send-details/styles.js

/* harmony default export */ const w3m_wallet_send_details_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({ spacing }) => spacing['1']};
    border-radius: ${({ borderRadius }) => borderRadius['5']};
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    padding: ${({ spacing }) => spacing['3']} ${({ spacing }) => spacing['2']}
      ${({ spacing }) => spacing['2']} ${({ spacing }) => spacing['2']};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({ spacing }) => spacing['2']};
  }

  wui-flex {
    margin-top: ${({ spacing }) => spacing['2']};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-1']};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({ tokens }) => tokens.core.textAccentPrimary};
    background-color: ${({ tokens }) => tokens.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({ tokens }) => tokens.core.glass010};
  }

  .network:active {
    background-color: ${({ tokens }) => tokens.core.glass010};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-send-details/index.js
var w3m_wallet_send_details_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mWalletSendDetails = class W3mWalletSendDetails extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.params = RouterController/* RouterController */.I.state.data?.send;
    }
    render() {
        return (0,lit/* html */.qy) ` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${esm_exports/* UiHelperUtil */.Zv.getTruncateString({
            string: this.receiverAddress ?? '',
            charsStart: 4,
            charsEnd: 4,
            truncate: 'middle'
        })}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`;
    }
    networkTemplate() {
        if (this.caipNetwork?.name) {
            return (0,lit/* html */.qy) ` <wui-list-content
        @click=${() => this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`;
        }
        return null;
    }
    onNetworkClick(network) {
        if (network && !this.params) {
            RouterController/* RouterController */.I.push('Networks', { network });
        }
    }
};
W3mWalletSendDetails.styles = w3m_wallet_send_details_styles;
w3m_wallet_send_details_decorate([
    (0,decorators/* property */.MZ)()
], W3mWalletSendDetails.prototype, "receiverAddress", void 0);
w3m_wallet_send_details_decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], W3mWalletSendDetails.prototype, "caipNetwork", void 0);
w3m_wallet_send_details_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendDetails.prototype, "params", void 0);
W3mWalletSendDetails = w3m_wallet_send_details_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-wallet-send-details')
], W3mWalletSendDetails);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-preview-view/styles.js

/* harmony default export */ const w3m_wallet_send_preview_view_styles = ((0,esm_exports/* css */.AH) `
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius }) => borderRadius['20']};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({ borderRadius }) => borderRadius['4']} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({ borderRadius }) => borderRadius['4']} !important;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-preview-view/index.js
var w3m_wallet_send_preview_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let W3mWalletSendPreviewView = class W3mWalletSendPreviewView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.token = SendController/* SendController */.R.state.token;
        this.sendTokenAmount = SendController/* SendController */.R.state.sendTokenAmount;
        this.receiverAddress = SendController/* SendController */.R.state.receiverAddress;
        this.receiverProfileName = SendController/* SendController */.R.state.receiverProfileName;
        this.receiverProfileImageUrl = SendController/* SendController */.R.state.receiverProfileImageUrl;
        this.caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.loading = SendController/* SendController */.R.state.loading;
        this.params = RouterController/* RouterController */.I.state.data?.send;
        this.unsubscribe.push(...[
            SendController/* SendController */.R.subscribe(val => {
                this.token = val.token;
                this.sendTokenAmount = val.sendTokenAmount;
                this.receiverAddress = val.receiverAddress;
                this.receiverProfileName = val.receiverProfileName;
                this.receiverProfileImageUrl = val.receiverProfileImageUrl;
                this.loading = val.loading;
            }),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => (this.caipNetwork = val))
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) ` <wui-flex flexDirection="column" .padding=${['0', '4', '4', '4']}>
      <wui-flex gap="2" flexDirection="column" .padding=${['0', '2', '0', '2']}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount
            ? esm_exports/* UiHelperUtil */.Zv.roundNumber(this.sendTokenAmount, 6, 5)
            : 'unknown'} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName
            ? esm_exports/* UiHelperUtil */.Zv.getTruncateString({
                string: this.receiverProfileName,
                charsStart: 20,
                charsEnd: 0,
                truncate: 'end'
            })
            : esm_exports/* UiHelperUtil */.Zv.getTruncateString({
                string: this.receiverAddress ? this.receiverAddress : '',
                charsStart: 4,
                charsEnd: 4,
                truncate: 'middle'
            })}"
            address=${this.receiverAddress ?? ''}
            .imageSrc=${this.receiverProfileImageUrl ?? undefined}
            .isAddress=${true}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${['6', '0', '0', '0']}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${['3', '0', '0', '0']}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${['4', '0', '0', '0']}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`;
    }
    sendValueTemplate() {
        if (!this.params && this.token && this.sendTokenAmount) {
            const price = this.token.price;
            const totalValue = price * this.sendTokenAmount;
            return (0,lit/* html */.qy) `<wui-text variant="md-regular" color="primary"
        >$${totalValue.toFixed(2)}</wui-text
      >`;
        }
        return null;
    }
    async onSendClick() {
        if (!this.sendTokenAmount || !this.receiverAddress) {
            SnackController/* SnackController */.P.showError('Please enter a valid amount and receiver address');
            return;
        }
        try {
            await SendController/* SendController */.R.sendToken();
            if (this.params) {
                RouterController/* RouterController */.I.reset('WalletSendConfirmed');
            }
            else {
                SnackController/* SnackController */.P.showSuccess('Transaction started');
                RouterController/* RouterController */.I.replace('Account');
            }
        }
        catch (error) {
            let errMessage = 'Failed to send transaction';
            const isUserRejectedRequestError = error instanceof withErrorBoundary/* AppKitError */.A &&
                error.originalName === ErrorUtil/* ErrorUtil */.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
            const isSendTransactionError = error instanceof withErrorBoundary/* AppKitError */.A &&
                error.originalName === ErrorUtil/* ErrorUtil */.RQ.PROVIDER_RPC_ERROR_NAME.SEND_TRANSACTION_ERROR;
            if (isUserRejectedRequestError || isSendTransactionError) {
                errMessage = error.message;
            }
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: isUserRejectedRequestError ? 'SEND_REJECTED' : 'SEND_ERROR',
                properties: SendController/* SendController */.R.getSdkEventProperties(error)
            });
            SnackController/* SnackController */.P.showError(errMessage);
        }
    }
    onCancelClick() {
        RouterController/* RouterController */.I.goBack();
    }
};
W3mWalletSendPreviewView.styles = w3m_wallet_send_preview_view_styles;
w3m_wallet_send_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendPreviewView.prototype, "token", void 0);
w3m_wallet_send_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendPreviewView.prototype, "sendTokenAmount", void 0);
w3m_wallet_send_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendPreviewView.prototype, "receiverAddress", void 0);
w3m_wallet_send_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendPreviewView.prototype, "receiverProfileName", void 0);
w3m_wallet_send_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendPreviewView.prototype, "receiverProfileImageUrl", void 0);
w3m_wallet_send_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendPreviewView.prototype, "caipNetwork", void 0);
w3m_wallet_send_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendPreviewView.prototype, "loading", void 0);
w3m_wallet_send_preview_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletSendPreviewView.prototype, "params", void 0);
W3mWalletSendPreviewView = w3m_wallet_send_preview_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-wallet-send-preview-view')
], W3mWalletSendPreviewView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-send-confirmed-view/styles.js

/* harmony default export */ const w3m_send_confirmed_view_styles = ((0,esm_exports/* css */.AH) `
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${({ spacing }) => spacing[16]};
    border: 8px solid ${({ tokens }) => tokens.theme.borderPrimary};
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-send-confirmed-view/index.js
var w3m_send_confirmed_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mSendConfirmedView = class W3mSendConfirmedView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.unsubscribe.push(...[]);
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
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `;
    }
    onCloseClick() {
        ModalController/* ModalController */.W.close();
    }
};
W3mSendConfirmedView.styles = w3m_send_confirmed_view_styles;
W3mSendConfirmedView = w3m_send_confirmed_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-send-confirmed-view')
], W3mSendConfirmedView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/send.js




//# sourceMappingURL=send.js.map

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

/***/ }

}]);