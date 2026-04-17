"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[36941],{

/***/ 136941
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mBuyInProgressView: () => (/* reexport */ W3mBuyInProgressView),
  W3mOnRampProvidersView: () => (/* reexport */ W3mOnRampProvidersView),
  W3mOnrampFiatSelectView: () => (/* reexport */ W3mOnrampFiatSelectView),
  W3mOnrampTokensView: () => (/* reexport */ W3mOnrampTokensView),
  W3mOnrampWidget: () => (/* reexport */ W3mOnrampWidget),
  W3mWhatIsABuyView: () => (/* reexport */ W3mWhatIsABuyView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OnRampController.js
var OnRampController = __webpack_require__(495884);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js
var AssetController = __webpack_require__(773337);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsStateController.js
var OptionsStateController = __webpack_require__(451454);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js
var ModalController = __webpack_require__(596396);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js + 2 modules
var wui_list_item = __webpack_require__(100703);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-checkbox/index.js + 4 modules
var w3m_legal_checkbox = __webpack_require__(850708);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-fiat-select-view/styles.js

/* harmony default export */ const styles = ((0,esm_exports/* css */.AH) `
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({ easings }) => easings['ease-out-power-1']}
      ${({ durations }) => durations['md']};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-fiat-select-view/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mOnrampFiatSelectView = class W3mOnrampFiatSelectView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.selectedCurrency = OnRampController/* OnRampController */.aG.state.paymentCurrency;
        this.currencies = OnRampController/* OnRampController */.aG.state.paymentCurrencies;
        this.currencyImages = AssetController/* AssetController */.j.state.currencyImages;
        this.checked = OptionsStateController/* OptionsStateController */.o.state.isLegalCheckboxChecked;
        this.unsubscribe.push(...[
            OnRampController/* OnRampController */.aG.subscribe(val => {
                this.selectedCurrency = val.paymentCurrency;
                this.currencies = val.paymentCurrencies;
            }),
            AssetController/* AssetController */.j.subscribeKey('currencyImages', val => (this.currencyImages = val)),
            OptionsStateController/* OptionsStateController */.o.subscribeKey('isLegalCheckboxChecked', val => {
                this.checked = val;
            })
        ]);
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
        return (0,lit/* html */.qy) `
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${['0', '3', '3', '3']}
        gap="2"
        class=${(0,if_defined/* ifDefined */.J)(disabled ? 'disabled' : undefined)}
      >
        ${this.currenciesTemplate(disabled)}
      </wui-flex>
    `;
    }
    currenciesTemplate(disabled = false) {
        return this.currencies.map(currency => (0,lit/* html */.qy) `
        <wui-list-item
          imageSrc=${(0,if_defined/* ifDefined */.J)(this.currencyImages?.[currency.id])}
          @click=${() => this.selectCurrency(currency)}
          variant="image"
          tabIdx=${(0,if_defined/* ifDefined */.J)(disabled ? -1 : undefined)}
        >
          <wui-text variant="md-medium" color="primary">${currency.id}</wui-text>
        </wui-list-item>
      `);
    }
    selectCurrency(currency) {
        if (!currency) {
            return;
        }
        OnRampController/* OnRampController */.aG.setPaymentCurrency(currency);
        ModalController/* ModalController */.W.close();
    }
};
W3mOnrampFiatSelectView.styles = styles;
__decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampFiatSelectView.prototype, "selectedCurrency", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampFiatSelectView.prototype, "currencies", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampFiatSelectView.prototype, "currencyImages", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampFiatSelectView.prototype, "checked", void 0);
W3mOnrampFiatSelectView = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-onramp-fiat-select-view')
], W3mOnrampFiatSelectView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(110152);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(527601);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var wui_icon = __webpack_require__(313163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-image.js
var wui_image = __webpack_require__(637289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js
var wui_loading_spinner = __webpack_require__(103104);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-visual.js + 22 modules
var wui_visual = __webpack_require__(315795);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-provider-item/styles.js

/* harmony default export */ const w3m_onramp_provider_item_styles = ((0,esm_exports/* css */.AH) `
  button {
    padding: ${({ spacing }) => spacing['3']};
    border-radius: ${({ borderRadius }) => borderRadius['4']};
    border: none;
    outline: none;
    background-color: ${({ tokens }) => tokens.core.glass010};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${({ spacing }) => spacing['3']};
    transition: background-color ${({ easings }) => easings['ease-out-power-1']}
      ${({ durations }) => durations['md']};
    will-change: background-color;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .provider-image {
    width: ${({ spacing }) => spacing['10']};
    min-width: ${({ spacing }) => spacing['10']};
    height: ${({ spacing }) => spacing['10']};
    border-radius: calc(
      ${({ borderRadius }) => borderRadius['4']} - calc(${({ spacing }) => spacing['3']} / 2)
    );
    position: relative;
    overflow: hidden;
  }

  .network-icon {
    width: ${({ spacing }) => spacing['3']};
    height: ${({ spacing }) => spacing['3']};
    border-radius: calc(${({ spacing }) => spacing['3']} / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px ${({ tokens }) => tokens.theme.foregroundPrimary},
      0 0 0 3px ${({ tokens }) => tokens.theme.backgroundPrimary};
    transition: box-shadow ${({ easings }) => easings['ease-out-power-1']}
      ${({ durations }) => durations['md']};
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px ${({ tokens }) => tokens.core.glass010},
      0 0 0 3px ${({ tokens }) => tokens.theme.backgroundPrimary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-provider-item/index.js
var w3m_onramp_provider_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let W3mOnRampProviderItem = class W3mOnRampProviderItem extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.color = 'inherit';
        this.label = '';
        this.feeRange = '';
        this.loading = false;
        this.onClick = null;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,if_defined/* ifDefined */.J)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="01">
          <wui-text variant="md-regular" color="primary">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="4">
            <wui-text variant="sm-medium" color="primary">
              <wui-text variant="sm-regular" color="secondary">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="2">
              <wui-icon name="bank" size="sm" color="default"></wui-icon>
              <wui-icon name="card" size="sm" color="default"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading
            ? (0,lit/* html */.qy) `<wui-loading-spinner color="secondary" size="md"></wui-loading-spinner>`
            : (0,lit/* html */.qy) `<wui-icon name="chevronRight" color="default" size="sm"></wui-icon>`}
      </button>
    `;
    }
    networksTemplate() {
        const requestedCaipNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const slicedNetworks = requestedCaipNetworks
            ?.filter(network => network?.assets?.imageId)
            ?.slice(0, 5);
        return (0,lit/* html */.qy) `
      <wui-flex class="networks">
        ${slicedNetworks?.map(network => (0,lit/* html */.qy) `
            <wui-flex class="network-icon">
              <wui-image src=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getNetworkImage(network))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `;
    }
};
W3mOnRampProviderItem.styles = [w3m_onramp_provider_item_styles];
w3m_onramp_provider_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mOnRampProviderItem.prototype, "disabled", void 0);
w3m_onramp_provider_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mOnRampProviderItem.prototype, "color", void 0);
w3m_onramp_provider_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mOnRampProviderItem.prototype, "name", void 0);
w3m_onramp_provider_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mOnRampProviderItem.prototype, "label", void 0);
w3m_onramp_provider_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mOnRampProviderItem.prototype, "feeRange", void 0);
w3m_onramp_provider_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mOnRampProviderItem.prototype, "loading", void 0);
w3m_onramp_provider_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mOnRampProviderItem.prototype, "onClick", void 0);
W3mOnRampProviderItem = w3m_onramp_provider_item_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-onramp-provider-item')
], W3mOnRampProviderItem);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/index.js + 1 modules
var w3m_onramp_providers_footer = __webpack_require__(378306);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-providers-view/index.js
var w3m_onramp_providers_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mOnRampProvidersView = class W3mOnRampProvidersView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.providers = OnRampController/* OnRampController */.aG.state.providers;
        this.unsubscribe.push(...[
            OnRampController/* OnRampController */.aG.subscribeKey('providers', val => {
                this.providers = val;
            })
        ]);
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" .padding=${['0', '3', '3', '3']} gap="2">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
    `;
    }
    onRampProvidersTemplate() {
        return this.providers
            .filter(provider => provider.supportedChains.includes(ChainController/* ChainController */.W.state.activeChain ?? 'eip155'))
            .map(provider => (0,lit/* html */.qy) `
          <w3m-onramp-provider-item
            label=${provider.label}
            name=${provider.name}
            feeRange=${provider.feeRange}
            @click=${() => {
            this.onClickProvider(provider);
        }}
            ?disabled=${!provider.url}
            data-testid=${`onramp-provider-${provider.name}`}
          ></w3m-onramp-provider-item>
        `);
    }
    onClickProvider(provider) {
        OnRampController/* OnRampController */.aG.setSelectedProvider(provider);
        RouterController/* RouterController */.I.push('BuyInProgress');
        CoreHelperUtil/* CoreHelperUtil */.w.openHref(OnRampController/* OnRampController */.aG.state.selectedProvider?.url || provider.url, 'popupWindow', 'width=600,height=800,scrollbars=yes');
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_BUY_PROVIDER',
            properties: {
                provider: provider.name,
                isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                    W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
            }
        });
    }
};
w3m_onramp_providers_view_decorate([
    (0,decorators/* state */.wk)()
], W3mOnRampProvidersView.prototype, "providers", void 0);
W3mOnRampProvidersView = w3m_onramp_providers_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-onramp-providers-view')
], W3mOnRampProvidersView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-footer/index.js + 1 modules
var w3m_legal_footer = __webpack_require__(255743);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-tokens-select-view/styles.js

/* harmony default export */ const w3m_onramp_tokens_select_view_styles = ((0,esm_exports/* css */.AH) `
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({ easings }) => easings['ease-out-power-1']}
      ${({ durations }) => durations['md']};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-tokens-select-view/index.js
var w3m_onramp_tokens_select_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mOnrampTokensView = class W3mOnrampTokensView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.selectedCurrency = OnRampController/* OnRampController */.aG.state.purchaseCurrencies;
        this.tokens = OnRampController/* OnRampController */.aG.state.purchaseCurrencies;
        this.tokenImages = AssetController/* AssetController */.j.state.tokenImages;
        this.checked = OptionsStateController/* OptionsStateController */.o.state.isLegalCheckboxChecked;
        this.unsubscribe.push(...[
            OnRampController/* OnRampController */.aG.subscribe(val => {
                this.selectedCurrency = val.purchaseCurrencies;
                this.tokens = val.purchaseCurrencies;
            }),
            AssetController/* AssetController */.j.subscribeKey('tokenImages', val => (this.tokenImages = val)),
            OptionsStateController/* OptionsStateController */.o.subscribeKey('isLegalCheckboxChecked', val => {
                this.checked = val;
            })
        ]);
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
        return (0,lit/* html */.qy) `
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${['0', '3', '3', '3']}
        gap="2"
        class=${(0,if_defined/* ifDefined */.J)(disabled ? 'disabled' : undefined)}
      >
        ${this.currenciesTemplate(disabled)}
      </wui-flex>
    `;
    }
    currenciesTemplate(disabled = false) {
        return this.tokens.map(token => (0,lit/* html */.qy) `
        <wui-list-item
          imageSrc=${(0,if_defined/* ifDefined */.J)(this.tokenImages?.[token.symbol])}
          @click=${() => this.selectToken(token)}
          variant="image"
          tabIdx=${(0,if_defined/* ifDefined */.J)(disabled ? -1 : undefined)}
        >
          <wui-flex gap="1" alignItems="center">
            <wui-text variant="md-medium" color="primary">${token.name}</wui-text>
            <wui-text variant="sm-regular" color="secondary">${token.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `);
    }
    selectToken(currency) {
        if (!currency) {
            return;
        }
        OnRampController/* OnRampController */.aG.setPurchaseCurrency(currency);
        ModalController/* ModalController */.W.close();
    }
};
W3mOnrampTokensView.styles = w3m_onramp_tokens_select_view_styles;
w3m_onramp_tokens_select_view_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampTokensView.prototype, "selectedCurrency", void 0);
w3m_onramp_tokens_select_view_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampTokensView.prototype, "tokens", void 0);
w3m_onramp_tokens_select_view_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampTokensView.prototype, "tokenImages", void 0);
w3m_onramp_tokens_select_view_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampTokensView.prototype, "checked", void 0);
W3mOnrampTokensView = w3m_onramp_tokens_select_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-onramp-token-select-view')
], W3mOnrampTokensView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(568996);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(409526);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var wui_icon_box = __webpack_require__(804019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(845198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js + 2 modules
var wui_loading_thumbnail = __webpack_require__(153448);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-buy-in-progress-view/styles.js

/* harmony default export */ const w3m_buy_in_progress_view_styles = ((0,esm_exports/* css */.AH) `
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
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-buy-in-progress-view/index.js
var w3m_buy_in_progress_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let W3mBuyInProgressView = class W3mBuyInProgressView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.selectedOnRampProvider = OnRampController/* OnRampController */.aG.state.selectedProvider;
        this.uri = ConnectionController/* ConnectionController */.x.state.wcUri;
        this.ready = false;
        this.showRetry = false;
        this.buffering = false;
        this.error = false;
        this.isMobile = false;
        this.onRetry = undefined;
        this.unsubscribe.push(...[
            OnRampController/* OnRampController */.aG.subscribeKey('selectedProvider', val => {
                this.selectedOnRampProvider = val;
            })
        ]);
    }
    disconnectedCallback() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
    render() {
        let label = 'Continue in external window';
        if (this.error) {
            label = 'Buy failed';
        }
        else if (this.selectedOnRampProvider) {
            label = `Buy in ${this.selectedOnRampProvider?.label}`;
        }
        const subLabel = this.error
            ? 'Buy can be declined from your side or due to and error on the provider app'
            : `We’ll notify you once your Buy is processed`;
        return (0,lit/* html */.qy) `
      <wui-flex
        data-error=${(0,if_defined/* ifDefined */.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${['10', '5', '5', '5']}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,if_defined/* ifDefined */.J)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${['4', '0', '0', '0']}
        >
          <wui-text variant="md-medium" color=${this.error ? 'error' : 'primary'}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="sm-medium" color="secondary">${subLabel}</wui-text>
        </wui-flex>

        ${this.error ? this.tryAgainTemplate() : null}
      </wui-flex>

      <wui-flex .padding=${['0', '5', '5', '5']} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="secondary">
          <wui-icon size="sm" color="default" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `;
    }
    onTryAgain() {
        if (!this.selectedOnRampProvider) {
            return;
        }
        this.error = false;
        CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.selectedOnRampProvider.url, 'popupWindow', 'width=600,height=800,scrollbars=yes');
    }
    tryAgainTemplate() {
        if (!this.selectedOnRampProvider?.url) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`;
    }
    loaderTemplate() {
        const borderRadiusMaster = ThemeController/* ThemeController */.W.state.themeVariables['--w3m-border-radius-master'];
        const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace('px', ''), 10) : 4;
        return (0,lit/* html */.qy) `<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
    }
    onCopyUri() {
        if (!this.selectedOnRampProvider?.url) {
            SnackController/* SnackController */.P.showError('No link found');
            RouterController/* RouterController */.I.goBack();
            return;
        }
        try {
            CoreHelperUtil/* CoreHelperUtil */.w.copyToClopboard(this.selectedOnRampProvider.url);
            SnackController/* SnackController */.P.showSuccess('Link copied');
        }
        catch {
            SnackController/* SnackController */.P.showError('Failed to copy');
        }
    }
};
W3mBuyInProgressView.styles = w3m_buy_in_progress_view_styles;
w3m_buy_in_progress_view_decorate([
    (0,decorators/* state */.wk)()
], W3mBuyInProgressView.prototype, "intervalId", void 0);
w3m_buy_in_progress_view_decorate([
    (0,decorators/* state */.wk)()
], W3mBuyInProgressView.prototype, "selectedOnRampProvider", void 0);
w3m_buy_in_progress_view_decorate([
    (0,decorators/* state */.wk)()
], W3mBuyInProgressView.prototype, "uri", void 0);
w3m_buy_in_progress_view_decorate([
    (0,decorators/* state */.wk)()
], W3mBuyInProgressView.prototype, "ready", void 0);
w3m_buy_in_progress_view_decorate([
    (0,decorators/* state */.wk)()
], W3mBuyInProgressView.prototype, "showRetry", void 0);
w3m_buy_in_progress_view_decorate([
    (0,decorators/* state */.wk)()
], W3mBuyInProgressView.prototype, "buffering", void 0);
w3m_buy_in_progress_view_decorate([
    (0,decorators/* state */.wk)()
], W3mBuyInProgressView.prototype, "error", void 0);
w3m_buy_in_progress_view_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mBuyInProgressView.prototype, "isMobile", void 0);
w3m_buy_in_progress_view_decorate([
    (0,decorators/* property */.MZ)()
], W3mBuyInProgressView.prototype, "onRetry", void 0);
W3mBuyInProgressView = w3m_buy_in_progress_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-buy-in-progress-view')
], W3mBuyInProgressView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-what-is-a-buy-view/index.js
var w3m_what_is_a_buy_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mWhatIsABuyView = class W3mWhatIsABuyView extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        .padding=${['6', '10', '5', '10']}
        alignItems="center"
        gap="5"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="2" alignItems="center">
          <wui-text align="center" variant="md-medium" color="primary">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${RouterController/* RouterController */.I.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `;
    }
};
W3mWhatIsABuyView = w3m_what_is_a_buy_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-what-is-a-buy-view')
], W3mWhatIsABuyView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-input-text.js
var wui_input_text = __webpack_require__(472270);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-input/styles.js

/* harmony default export */ const w3m_onramp_input_styles = ((0,esm_exports/* css */.AH) `
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing }) => spacing['2']};
    height: 40px;
    padding: ${({ spacing }) => spacing['2']} ${({ spacing }) => spacing['2']}
      ${({ spacing }) => spacing['2']} ${({ spacing }) => spacing['2']};
    min-width: 95px;
    border-radius: ${({ borderRadius }) => borderRadius['round']};
    border: 1px solid ${({ tokens }) => tokens.theme.foregroundPrimary};
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-input/index.js
var w3m_onramp_input_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let W3mInputCurrency = class W3mInputCurrency extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.type = 'Token';
        this.value = 0;
        this.currencies = [];
        this.selectedCurrency = this.currencies?.[0];
        this.currencyImages = AssetController/* AssetController */.j.state.currencyImages;
        this.tokenImages = AssetController/* AssetController */.j.state.tokenImages;
        this.unsubscribe.push(OnRampController/* OnRampController */.aG.subscribeKey('purchaseCurrency', val => {
            if (!val || this.type === 'Fiat') {
                return;
            }
            this.selectedCurrency = this.formatPurchaseCurrency(val);
        }), OnRampController/* OnRampController */.aG.subscribeKey('paymentCurrency', val => {
            if (!val || this.type === 'Token') {
                return;
            }
            this.selectedCurrency = this.formatPaymentCurrency(val);
        }), OnRampController/* OnRampController */.aG.subscribe(val => {
            if (this.type === 'Fiat') {
                this.currencies = val.purchaseCurrencies.map(this.formatPurchaseCurrency);
            }
            else {
                this.currencies = val.paymentCurrencies.map(this.formatPaymentCurrency);
            }
        }), AssetController/* AssetController */.j.subscribe(val => {
            this.currencyImages = { ...val.currencyImages };
            this.tokenImages = { ...val.tokenImages };
        }));
    }
    firstUpdated() {
        OnRampController/* OnRampController */.aG.getAvailableCurrencies();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const symbol = this.selectedCurrency?.symbol || '';
        const image = this.currencyImages[symbol] || this.tokenImages[symbol];
        return (0,lit/* html */.qy) `<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency
            ? (0,lit/* html */.qy) ` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="1"
            @click=${() => ModalController/* ModalController */.W.open({ view: `OnRamp${this.type}Select` })}
          >
            <wui-image src=${(0,if_defined/* ifDefined */.J)(image)}></wui-image>
            <wui-text color="primary">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`
            : (0,lit/* html */.qy) `<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`;
    }
    formatPaymentCurrency(currency) {
        return {
            name: currency.id,
            symbol: currency.id
        };
    }
    formatPurchaseCurrency(currency) {
        return {
            name: currency.name,
            symbol: currency.symbol
        };
    }
};
W3mInputCurrency.styles = w3m_onramp_input_styles;
w3m_onramp_input_decorate([
    (0,decorators/* property */.MZ)({ type: String })
], W3mInputCurrency.prototype, "type", void 0);
w3m_onramp_input_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], W3mInputCurrency.prototype, "value", void 0);
w3m_onramp_input_decorate([
    (0,decorators/* state */.wk)()
], W3mInputCurrency.prototype, "currencies", void 0);
w3m_onramp_input_decorate([
    (0,decorators/* state */.wk)()
], W3mInputCurrency.prototype, "selectedCurrency", void 0);
w3m_onramp_input_decorate([
    (0,decorators/* state */.wk)()
], W3mInputCurrency.prototype, "currencyImages", void 0);
w3m_onramp_input_decorate([
    (0,decorators/* state */.wk)()
], W3mInputCurrency.prototype, "tokenImages", void 0);
W3mInputCurrency = w3m_onramp_input_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-onramp-input')
], W3mInputCurrency);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-onramp-widget/styles.js

/* harmony default export */ const w3m_onramp_widget_styles = ((0,esm_exports/* css */.AH) `
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: ${({ borderRadius }) => borderRadius['8']};
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-onramp-widget/index.js
var w3m_onramp_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const PAYMENT_CURRENCY_SYMBOLS = {
    USD: '$',
    EUR: '€',
    GBP: '£'
};
const BUY_PRESET_AMOUNTS = [100, 250, 500, 1000];
let W3mOnrampWidget = class W3mOnrampWidget extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.disabled = false;
        this.caipAddress = ChainController/* ChainController */.W.state.activeCaipAddress;
        this.loading = ModalController/* ModalController */.W.state.loading;
        this.paymentCurrency = OnRampController/* OnRampController */.aG.state.paymentCurrency;
        this.paymentAmount = OnRampController/* OnRampController */.aG.state.paymentAmount;
        this.purchaseAmount = OnRampController/* OnRampController */.aG.state.purchaseAmount;
        this.quoteLoading = OnRampController/* OnRampController */.aG.state.quotesLoading;
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeKey('activeCaipAddress', val => (this.caipAddress = val)),
            ModalController/* ModalController */.W.subscribeKey('loading', val => {
                this.loading = val;
            }),
            OnRampController/* OnRampController */.aG.subscribe(val => {
                this.paymentCurrency = val.paymentCurrency;
                this.paymentAmount = val.paymentAmount;
                this.purchaseAmount = val.purchaseAmount;
                this.quoteLoading = val.quotesLoading;
            })
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount || 0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount || 0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="2">
            ${BUY_PRESET_AMOUNTS.map(amount => (0,lit/* html */.qy) `<wui-button
                  variant=${this.paymentAmount === amount
            ? 'accent-secondary'
            : 'neutral-secondary'}
                  size="md"
                  textVariant="md-medium"
                  fullWidth
                  @click=${() => this.selectPresetAmount(amount)}
                  >${`${PAYMENT_CURRENCY_SYMBOLS[this.paymentCurrency?.id || 'USD']} ${amount}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `;
    }
    templateButton() {
        return this.caipAddress
            ? (0,lit/* html */.qy) `<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="accent-primary"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`
            : (0,lit/* html */.qy) `<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`;
    }
    getQuotes() {
        if (!this.loading) {
            ModalController/* ModalController */.W.open({ view: 'OnRampProviders' });
        }
    }
    openModal() {
        ModalController/* ModalController */.W.open({ view: 'Connect' });
    }
    async onPaymentAmountChange(event) {
        OnRampController/* OnRampController */.aG.setPaymentAmount(Number(event.detail));
        await OnRampController/* OnRampController */.aG.getQuote();
    }
    async selectPresetAmount(amount) {
        OnRampController/* OnRampController */.aG.setPaymentAmount(amount);
        await OnRampController/* OnRampController */.aG.getQuote();
    }
};
W3mOnrampWidget.styles = w3m_onramp_widget_styles;
w3m_onramp_widget_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mOnrampWidget.prototype, "disabled", void 0);
w3m_onramp_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampWidget.prototype, "caipAddress", void 0);
w3m_onramp_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampWidget.prototype, "loading", void 0);
w3m_onramp_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampWidget.prototype, "paymentCurrency", void 0);
w3m_onramp_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampWidget.prototype, "paymentAmount", void 0);
w3m_onramp_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampWidget.prototype, "purchaseAmount", void 0);
w3m_onramp_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mOnrampWidget.prototype, "quoteLoading", void 0);
W3mOnrampWidget = w3m_onramp_widget_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-onramp-widget')
], W3mOnrampWidget);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/onramp.js






//# sourceMappingURL=onramp.js.map

/***/ },

/***/ 804019
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_icon_box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42815);

//# sourceMappingURL=wui-icon-box.js.map

/***/ },

/***/ 637289
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_components_wui_image_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617381);

//# sourceMappingURL=wui-image.js.map

/***/ },

/***/ 472270
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _src_composites_wui_input_text_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(565760);

//# sourceMappingURL=wui-input-text.js.map

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