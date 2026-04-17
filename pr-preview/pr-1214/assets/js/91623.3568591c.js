"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[91623],{

/***/ 791623
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mWalletReceiveView: () => (/* reexport */ W3mWalletReceiveView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(527601);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(568996);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
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
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-compatible-network/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing }) => spacing[4]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[3]};
    border: none;
    padding: ${({ spacing }) => spacing[3]};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({ spacing }) => spacing['01']};
  }

  wui-icon {
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.core.glass010};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-compatible-network/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiCompatibleNetwork = class WuiCompatibleNetwork extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.networkImages = [''];
        this.text = '';
    }
    render() {
        return (0,lit/* html */.qy) `
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `;
    }
    networksTemplate() {
        const slicedNetworks = this.networkImages.slice(0, 5);
        return (0,lit/* html */.qy) ` <wui-flex class="networks">
      ${slicedNetworks?.map(network => (0,lit/* html */.qy) ` <wui-flex class="network-icon"> <wui-image src=${network}></wui-image> </wui-flex>`)}
    </wui-flex>`;
    }
};
WuiCompatibleNetwork.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], WuiCompatibleNetwork.prototype, "networkImages", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiCompatibleNetwork.prototype, "text", void 0);
WuiCompatibleNetwork = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-compatible-network')
], WuiCompatibleNetwork);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-compatible-network.js

//# sourceMappingURL=wui-compatible-network.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var exports_wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-qr-code.js + 3 modules
var wui_qr_code = __webpack_require__(822571);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(110152);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-receive-view/styles.js

/* harmony default export */ const w3m_wallet_receive_view_styles = ((0,esm_exports/* css */.AH) `
  wui-compatible-network {
    margin-top: ${({ spacing }) => spacing['4']};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-receive-view/index.js
var w3m_wallet_receive_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let W3mWalletReceiveView = class W3mWalletReceiveView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.address = ChainController/* ChainController */.W.getAccountData()?.address;
        this.profileName = ChainController/* ChainController */.W.getAccountData()?.profileName;
        this.network = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeChainProp('accountState', val => {
                if (val) {
                    this.address = val.address;
                    this.profileName = val.profileName;
                }
                else {
                    SnackController/* SnackController */.P.showError('Account not found');
                }
            })
        ], ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => {
            if (val?.id) {
                this.network = val;
            }
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        if (!this.address) {
            throw new Error('w3m-wallet-receive-view: No account provided');
        }
        const networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
        return (0,lit/* html */.qy) ` <wui-flex
      flexDirection="column"
      .padding=${['0', '4', '4', '4']}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${esm_exports/* UiHelperUtil */.Zv.getTruncateString({
            string: this.profileName || this.address || '',
            charsStart: this.profileName ? 18 : 4,
            charsEnd: this.profileName ? 0 : 4,
            truncate: this.profileName ? 'end' : 'middle'
        })}
        icon="copy"
        size="sm"
        imageSrc=${networkImage ? networkImage : ''}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${['4', '0', '0', '0']}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${ThemeController/* ThemeController */.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${true}
          color=${(0,if_defined/* ifDefined */.J)(ThemeController/* ThemeController */.W.state.themeVariables['--apkt-qr-color'] ??
            ThemeController/* ThemeController */.W.state.themeVariables['--w3m-qr-color'])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`;
    }
    networkTemplate() {
        const requestedCaipNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const isNetworkEnabledForSmartAccounts = ChainController/* ChainController */.W.checkIfSmartAccountEnabled();
        const caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
        const namespaceNetworks = requestedCaipNetworks.filter(network => network?.chainNamespace === caipNetwork?.chainNamespace);
        if ((0,ChainControllerUtil/* getPreferredAccountType */.lj)(caipNetwork?.chainNamespace) ===
            W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT &&
            isNetworkEnabledForSmartAccounts) {
            if (!caipNetwork) {
                return null;
            }
            return (0,lit/* html */.qy) `<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[AssetUtil/* AssetUtil */.$.getNetworkImage(caipNetwork) ?? '']}
      ></wui-compatible-network>`;
        }
        const slicedNetworks = namespaceNetworks
            ?.filter(network => network?.assets?.imageId)
            ?.slice(0, 5);
        const imagesArray = slicedNetworks.map(AssetUtil/* AssetUtil */.$.getNetworkImage).filter(Boolean);
        return (0,lit/* html */.qy) `<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${imagesArray}
    ></wui-compatible-network>`;
    }
    onReceiveClick() {
        RouterController/* RouterController */.I.push('WalletCompatibleNetworks');
    }
    onCopyClick() {
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
};
W3mWalletReceiveView.styles = w3m_wallet_receive_view_styles;
w3m_wallet_receive_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletReceiveView.prototype, "address", void 0);
w3m_wallet_receive_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletReceiveView.prototype, "profileName", void 0);
w3m_wallet_receive_view_decorate([
    (0,decorators/* state */.wk)()
], W3mWalletReceiveView.prototype, "network", void 0);
W3mWalletReceiveView = w3m_wallet_receive_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-wallet-receive-view')
], W3mWalletReceiveView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/receive.js

//# sourceMappingURL=receive.js.map

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

/***/ 617381
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: WuiImage

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiImage = class WuiImage extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.src = './path/to/image.jpg';
        this.alt = 'Image';
        this.size = undefined;
        this.boxed = false;
        this.rounded = false;
        this.fullSize = false;
    }
    render() {
        const getSize = {
            inherit: 'inherit',
            xxs: '2',
            xs: '3',
            sm: '4',
            md: '4',
            mdl: '5',
            lg: '5',
            xl: '6',
            xxl: '7',
            '3xl': '8',
            '4xl': '9',
            '5xl': '10'
        };
        this.style.cssText = `
      --local-width: ${this.size ? `var(--apkt-spacing-${getSize[this.size]});` : '100%'};
      --local-height: ${this.size ? `var(--apkt-spacing-${getSize[this.size]});` : '100%'};
      `;
        this.dataset['boxed'] = this.boxed ? 'true' : 'false';
        this.dataset['rounded'] = this.rounded ? 'true' : 'false';
        this.dataset['full'] = this.fullSize ? 'true' : 'false';
        this.dataset['icon'] = this.iconColor || 'inherit';
        if (this.icon) {
            return (0,lit/* html */.qy) `<wui-icon
        color=${this.iconColor || 'inherit'}
        name=${this.icon}
        size="lg"
      ></wui-icon> `;
        }
        if (this.logo) {
            return (0,lit/* html */.qy) `<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `;
        }
        return (0,lit/* html */.qy) `<img src=${(0,if_defined/* ifDefined */.J)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`;
    }
    handleImageError() {
        this.dispatchEvent(new CustomEvent('onLoadError', { bubbles: true, composed: true }));
    }
};
WuiImage.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "src", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "logo", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "icon", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "iconColor", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "alt", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiImage.prototype, "boxed", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiImage.prototype, "rounded", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiImage.prototype, "fullSize", void 0);
WuiImage = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-image')
], WuiImage);

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


/***/ }

}]);