"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[40354],{

/***/ 740354
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mAllWalletsView: () => (/* reexport */ W3mAllWalletsView),
  W3mConnectingWcBasicView: () => (/* reexport */ W3mConnectingWcBasicView),
  W3mDownloadsView: () => (/* reexport */ W3mDownloadsView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(158871);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(823748);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var ApiController = __webpack_require__(24202);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js
var StorageUtil = __webpack_require__(44591);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 3 modules
var esm_exports = __webpack_require__(318718);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(460310);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(900997);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(630301);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 2 modules
var ConnectionController = __webpack_require__(836507);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(63013);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(546181);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js + 4 modules
var wui_list_wallet = __webpack_require__(739033);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-widget/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
__decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsWidget.prototype, "tabIdx", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "connectors", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "count", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "filteredCount", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "isFetchingRecommendedWallets", void 0);
W3mAllWalletsWidget = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-widget')
], W3mAllWalletsWidget);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js
var AssetController = __webpack_require__(432558);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectorUtil.js
var ConnectorUtil = __webpack_require__(531225);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(338062);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js + 3 modules
var ChainController = __webpack_require__(928828);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js
var HelpersUtil = __webpack_require__(823821);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/index.js
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
        const isAlreadyConnected = connectionsByNamespace.some(c => HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(c.connectorId, connector.id));
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
W3mConnectorList.styles = styles;
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
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js
var ErrorUtil = __webpack_require__(451170);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(562084);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js + 1 modules
var ModalController = __webpack_require__(75654);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js + 1 modules
var withErrorBoundary = __webpack_require__(681967);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/MobileWallet.js
var MobileWallet = __webpack_require__(302783);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-utils/dist/esm/src/CaipNetworkUtil.js + 1 modules
var CaipNetworkUtil = __webpack_require__(244255);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 27 modules
var wui_icon = __webpack_require__(660338);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(984206);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(867569);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tab-item/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tab-item/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-tabs.js

//# sourceMappingURL=wui-tabs.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-header/index.js
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
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(22391);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(658461);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var exports_wui_icon = __webpack_require__(51636);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js + 1 modules
var wui_icon_box = __webpack_require__(238436);
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js

//# sourceMappingURL=wui-icon-box.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(526751);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/styles.js

/* harmony default export */ const wui_loading_thumbnail_styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/index.js
var wui_loading_thumbnail_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiLoadingThumbnail.styles = [ThemeUtil/* resetStyles */.W5, wui_loading_thumbnail_styles];
wui_loading_thumbnail_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiLoadingThumbnail.prototype, "radius", void 0);
WuiLoadingThumbnail = wui_loading_thumbnail_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-loading-thumbnail')
], WuiLoadingThumbnail);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js

//# sourceMappingURL=wui-loading-thumbnail.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(945090);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js
var wui_wallet_image = __webpack_require__(641684);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var layout_wui_flex = __webpack_require__(648832);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/index.js + 1 modules
var composites_wui_button = __webpack_require__(114955);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-cta-button.js

//# sourceMappingURL=wui-cta-button.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/styles.js

/* harmony default export */ const w3m_mobile_download_links_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    padding: 0 ${({ spacing }) => spacing['5']} ${({ spacing }) => spacing['5']};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-browser/index.js
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
                error.originalName === ErrorUtil/* ErrorUtil */.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js
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
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectionControllerUtil.js
var ConnectionControllerUtil = __webpack_require__(323180);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js + 1 modules
var utils_ConstantsUtil = __webpack_require__(519755);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(301608);
// EXTERNAL MODULE: ./node_modules/qrcode/lib/browser.js
var browser = __webpack_require__(887583);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/utils/QrCode.js


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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/styles.js

/* harmony default export */ const wui_qr_code_styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/index.js
var wui_qr_code_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiQrCode.styles = [ThemeUtil/* resetStyles */.W5, wui_qr_code_styles];
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "uri", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiQrCode.prototype, "size", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "theme", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "imageSrc", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "alt", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiQrCode.prototype, "arenaClear", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiQrCode.prototype, "farcaster", void 0);
WuiQrCode = wui_qr_code_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-qr-code')
], WuiQrCode);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-qr-code.js

//# sourceMappingURL=wui-qr-code.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js
var wui_shimmer = __webpack_require__(835090);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js + 3 modules
var wui_ux_by_reown = __webpack_require__(158760);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-web/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js
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
                error.originalName === ErrorUtil/* ErrorUtil */.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-basic-view/index.js
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
// EXTERNAL MODULE: ./node_modules/lit/directives/ref.js + 3 modules
var ref = __webpack_require__(791629);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-toggle/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-toggle/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-certified-switch.js

//# sourceMappingURL=wui-certified-switch.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/styles.js

/* harmony default export */ const wui_input_text_styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/index.js
var wui_input_text_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiInputText.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_input_text_styles];
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "icon", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiInputText.prototype, "disabled", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiInputText.prototype, "loading", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "placeholder", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "type", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "value", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "errorText", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "warningText", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "onSubmit", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "size", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)({ attribute: false })
], WuiInputText.prototype, "onKeyDown", void 0);
WuiInputText = wui_input_text_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-input-text')
], WuiInputText);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-search-bar.js

//# sourceMappingURL=wui-search-bar.js.map
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/WalletUtil.js
var WalletUtil = __webpack_require__(764385);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkMd.js
var networkMd = __webpack_require__(727512);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/index.js + 1 modules
var components_wui_shimmer = __webpack_require__(492286);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-card-select-loader.js

//# sourceMappingURL=wui-card-select-loader.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(163612);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/styles.js

/* harmony default export */ const wui_grid_styles = ((0,lit/* css */.AH) `
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-grid.js

//# sourceMappingURL=wui-grid.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/index.js
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js
var wui_loading_spinner = __webpack_require__(793373);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js + 2 modules
var wui_list_item = __webpack_require__(416784);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/basic.js



//# sourceMappingURL=basic.js.map

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
 */const ref_e=()=>new ref_h;class ref_h{}const ref_o=new WeakMap,ref_n=(0,directive/* directive */.u$)(class extends async_directive_f{render(i){return lit_html/* nothing */.s6}update(i,[s]){const e=s!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),lit_html/* nothing */.s6}rt(t){if(void 0!==this.G)if(this.isConnected||(t=void 0),"function"==typeof this.G){const i=this.ht??globalThis;let s=ref_o.get(i);void 0===s&&(s=new WeakMap,ref_o.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ht,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?ref_o.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});
//# sourceMappingURL=ref.js.map

;// ./node_modules/lit/directives/ref.js

//# sourceMappingURL=ref.js.map


/***/ }

}]);