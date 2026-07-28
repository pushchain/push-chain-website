"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[45665],{

/***/ 945665
(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: W3mActivityList

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(925707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/DateUtil.js
var DateUtil = __webpack_require__(148169);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TransactionsController.js
var TransactionsController = __webpack_require__(586360);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 2 modules
var esm_exports = __webpack_require__(426034);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(540289);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var wui_icon_box = __webpack_require__(804019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(845198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var wui_text = __webpack_require__(346709);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var components_wui_text = __webpack_require__(667329);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(366312);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/TypeUtil.js
var TransactionTypePastTense;
(function (TransactionTypePastTense) {
    TransactionTypePastTense["approve"] = "approved";
    TransactionTypePastTense["bought"] = "bought";
    TransactionTypePastTense["borrow"] = "borrowed";
    TransactionTypePastTense["burn"] = "burnt";
    TransactionTypePastTense["cancel"] = "canceled";
    TransactionTypePastTense["claim"] = "claimed";
    TransactionTypePastTense["deploy"] = "deployed";
    TransactionTypePastTense["deposit"] = "deposited";
    TransactionTypePastTense["execute"] = "executed";
    TransactionTypePastTense["mint"] = "minted";
    TransactionTypePastTense["receive"] = "received";
    TransactionTypePastTense["repay"] = "repaid";
    TransactionTypePastTense["send"] = "sent";
    TransactionTypePastTense["sell"] = "sold";
    TransactionTypePastTense["stake"] = "staked";
    TransactionTypePastTense["trade"] = "swapped";
    TransactionTypePastTense["unstake"] = "unstaked";
    TransactionTypePastTense["withdraw"] = "withdrawn";
})(TransactionTypePastTense || (TransactionTypePastTense = {}));
//# sourceMappingURL=TypeUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(464551);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(778935);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(617381);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js + 1 modules
var composites_wui_icon_box = __webpack_require__(42815);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(585836);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-visual/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.core.glass010};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  .swap-fallback-container {
    position: absolute;
    inset: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swap-fallback-container.first {
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-fallback-container.last {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({ tokens }) => tokens.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-visual/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiTransactionVisual = class WuiTransactionVisual extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.images = [];
        this.secondImage = {
            type: undefined,
            url: ''
        };
        this.failedImageUrls = new Set();
    }
    handleImageError(url) {
        return (event) => {
            event.stopPropagation();
            this.failedImageUrls.add(url);
            this.requestUpdate();
        };
    }
    render() {
        const [firstImage, secondImage] = this.images;
        if (!this.images.length) {
            this.dataset['noImages'] = 'true';
        }
        const isLeftNFT = firstImage?.type === 'NFT';
        const isRightNFT = secondImage?.url ? secondImage.type === 'NFT' : isLeftNFT;
        const leftRadius = isLeftNFT ? 'var(--apkt-borderRadius-3)' : 'var(--apkt-borderRadius-5)';
        const rightRadius = isRightNFT ? 'var(--apkt-borderRadius-3)' : 'var(--apkt-borderRadius-5)';
        this.style.cssText = `
    --local-left-border-radius: ${leftRadius};
    --local-right-border-radius: ${rightRadius};
    `;
        return (0,lit/* html */.qy) `<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`;
    }
    templateVisual() {
        const [firstImage, secondImage] = this.images;
        const hasTwoImages = this.images.length === 2;
        if (hasTwoImages && (firstImage?.url || secondImage?.url)) {
            return this.renderSwapImages(firstImage, secondImage);
        }
        if (firstImage?.url && !this.failedImageUrls.has(firstImage.url)) {
            return this.renderSingleImage(firstImage);
        }
        if (firstImage?.type === 'NFT') {
            return this.renderPlaceholderIcon('nftPlaceholder');
        }
        return this.renderPlaceholderIcon('coinPlaceholder');
    }
    renderSwapImages(firstImage, secondImage) {
        return (0,lit/* html */.qy) `<div class="swap-images-container">
      ${firstImage?.url ? this.renderImageOrFallback(firstImage, 'first', true) : null}
      ${secondImage?.url ? this.renderImageOrFallback(secondImage, 'last', true) : null}
    </div>`;
    }
    renderSingleImage(image) {
        return this.renderImageOrFallback(image, undefined, false);
    }
    renderImageOrFallback(image, position, isInSwapContainer = false) {
        if (!image.url) {
            return null;
        }
        if (this.failedImageUrls.has(image.url)) {
            if (isInSwapContainer && position) {
                return this.renderFallbackIconInContainer(position);
            }
            return this.renderFallbackIcon();
        }
        return (0,lit/* html */.qy) `<wui-image
      src=${image.url}
      alt="Transaction image"
      @onLoadError=${this.handleImageError(image.url)}
    ></wui-image>`;
    }
    renderFallbackIconInContainer(position) {
        return (0,lit/* html */.qy) `<div class="swap-fallback-container ${position}">${this.renderFallbackIcon()}</div>`;
    }
    renderFallbackIcon() {
        return (0,lit/* html */.qy) `<wui-icon
      size="xl"
      weight="regular"
      color="default"
      name="networkPlaceholder"
    ></wui-icon>`;
    }
    renderPlaceholderIcon(iconName) {
        return (0,lit/* html */.qy) `<wui-icon size="xl" weight="regular" color="default" name=${iconName}></wui-icon>`;
    }
    templateIcon() {
        let color = 'accent-primary';
        let icon = undefined;
        icon = this.getIcon();
        if (this.status) {
            color = this.getStatusColor();
        }
        if (!icon) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${color} icon=${icon}></wui-icon-box>
      </wui-flex>
    `;
    }
    getDirectionIcon() {
        switch (this.direction) {
            case 'in':
                return 'arrowBottom';
            case 'out':
                return 'arrowTop';
            default:
                return undefined;
        }
    }
    getIcon() {
        if (this.onlyDirectionIcon) {
            return this.getDirectionIcon();
        }
        if (this.type === 'trade') {
            return 'swapHorizontal';
        }
        else if (this.type === 'approve') {
            return 'checkmark';
        }
        else if (this.type === 'cancel') {
            return 'close';
        }
        return this.getDirectionIcon();
    }
    getStatusColor() {
        switch (this.status) {
            case 'confirmed':
                return 'success';
            case 'failed':
                return 'error';
            case 'pending':
                return 'inverse';
            default:
                return 'accent-primary';
        }
    }
};
WuiTransactionVisual.styles = [styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionVisual.prototype, "type", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionVisual.prototype, "status", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionVisual.prototype, "direction", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiTransactionVisual.prototype, "onlyDirectionIcon", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], WuiTransactionVisual.prototype, "images", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], WuiTransactionVisual.prototype, "secondImage", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], WuiTransactionVisual.prototype, "failedImageUrls", void 0);
WuiTransactionVisual = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-transaction-visual')
], WuiTransactionVisual);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-list-item/styles.js

/* harmony default export */ const wui_transaction_list_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({ spacing }) => spacing[2]};
    padding: ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-list-item/index.js
var wui_transaction_list_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiTransactionListItem = class WuiTransactionListItem extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.type = 'approve';
        this.onlyDirectionIcon = false;
        this.images = [];
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,if_defined/* ifDefined */.J)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${TransactionTypePastTense[this.type] || this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `;
    }
    templateDescription() {
        const description = this.descriptions?.[0];
        return description
            ? (0,lit/* html */.qy) `
          <wui-text variant="md-regular" color="secondary">
            <span>${description}</span>
          </wui-text>
        `
            : null;
    }
    templateSecondDescription() {
        const description = this.descriptions?.[1];
        return description
            ? (0,lit/* html */.qy) `
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${description}</span>
          </wui-text>
        `
            : null;
    }
};
WuiTransactionListItem.styles = [ThemeUtil/* resetStyles */.W5, wui_transaction_list_item_styles];
wui_transaction_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionListItem.prototype, "type", void 0);
wui_transaction_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], WuiTransactionListItem.prototype, "descriptions", void 0);
wui_transaction_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionListItem.prototype, "date", void 0);
wui_transaction_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiTransactionListItem.prototype, "onlyDirectionIcon", void 0);
wui_transaction_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionListItem.prototype, "status", void 0);
wui_transaction_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionListItem.prototype, "direction", void 0);
wui_transaction_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], WuiTransactionListItem.prototype, "images", void 0);
WuiTransactionListItem = wui_transaction_list_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-transaction-list-item')
], WuiTransactionListItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-transaction-list-item.js

//# sourceMappingURL=wui-transaction-list-item.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/index.js + 1 modules
var wui_shimmer = __webpack_require__(797607);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var layout_wui_flex = __webpack_require__(293511);
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-thumbnail/styles.js

/* harmony default export */ const wui_transaction_thumbnail_styles = ((0,ThemeHelperUtil/* css */.AH) `
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius[128]};
  }

  .fallback-icon {
    color: ${({ tokens }) => tokens.theme.iconInverse};
    border-radius: ${({ borderRadius }) => borderRadius[3]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({ borderRadius }) => borderRadius[128]};
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({ spacing }) => spacing['01']};
    color: ${({ tokens }) => tokens.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({ tokens }) => tokens.core.textSuccess} 30%,
      ${({ tokens }) => tokens.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({ spacing }) => spacing[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({ spacing }) => spacing[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-thumbnail/index.js
var wui_transaction_thumbnail_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const ICON_SIZE = {
    sm: 'xxs',
    lg: 'md'
};
let WuiTransactionThumbnail = class WuiTransactionThumbnail extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.type = 'approve';
        this.size = 'lg';
        this.statusImageUrl = '';
        this.images = [];
    }
    render() {
        return (0,lit/* html */.qy) `<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`;
    }
    templateVisual() {
        this.dataset['size'] = this.size;
        switch (this.type) {
            case 'trade':
                return this.swapTemplate();
            case 'fiat':
                return this.fiatTemplate();
            case 'unknown':
                return this.unknownTemplate();
            default:
                return this.tokenTemplate();
        }
    }
    swapTemplate() {
        const [firstImageUrl, secondImageUrl] = this.images;
        const twoImages = this.images.length === 2 && (firstImageUrl || secondImageUrl);
        if (twoImages) {
            return (0,lit/* html */.qy) `
        <wui-image class="swap-crop-left-image" src=${firstImageUrl} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${secondImageUrl} alt="Swap image"></wui-image>
      `;
        }
        if (firstImageUrl) {
            return (0,lit/* html */.qy) `<wui-image src=${firstImageUrl} alt="Swap image"></wui-image>`;
        }
        return null;
    }
    fiatTemplate() {
        return (0,lit/* html */.qy) `<wui-icon
      class="fallback-icon"
      size=${ICON_SIZE[this.size]}
      name="dollar"
    ></wui-icon>`;
    }
    unknownTemplate() {
        return (0,lit/* html */.qy) `<wui-icon
      class="fallback-icon"
      size=${ICON_SIZE[this.size]}
      name="questionMark"
    ></wui-icon>`;
    }
    tokenTemplate() {
        const [imageUrl] = this.images;
        if (imageUrl) {
            return (0,lit/* html */.qy) `<wui-image src=${imageUrl} alt="Token image"></wui-image> `;
        }
        return (0,lit/* html */.qy) `<wui-icon
      class="fallback-icon"
      name=${this.type === 'nft' ? 'image' : 'coinPlaceholder'}
    ></wui-icon>`;
    }
    templateIcon() {
        if (this.statusImageUrl) {
            return (0,lit/* html */.qy) `<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-icon
      class="direction-icon"
      size=${ICON_SIZE[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`;
    }
    getTemplateIcon() {
        if (this.type === 'trade') {
            return 'arrowClockWise';
        }
        return 'arrowBottom';
    }
};
WuiTransactionThumbnail.styles = [wui_transaction_thumbnail_styles];
wui_transaction_thumbnail_decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionThumbnail.prototype, "type", void 0);
wui_transaction_thumbnail_decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionThumbnail.prototype, "size", void 0);
wui_transaction_thumbnail_decorate([
    (0,decorators/* property */.MZ)()
], WuiTransactionThumbnail.prototype, "statusImageUrl", void 0);
wui_transaction_thumbnail_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], WuiTransactionThumbnail.prototype, "images", void 0);
WuiTransactionThumbnail = wui_transaction_thumbnail_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-transaction-thumbnail')
], WuiTransactionThumbnail);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-list-item-loader/styles.js

/* harmony default export */ const wui_transaction_list_item_loader_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host > wui-flex:first-child {
    gap: ${({ spacing }) => spacing[2]};
    padding: ${({ spacing }) => spacing[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-list-item-loader/index.js
var wui_transaction_list_item_loader_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiTransactionListItemLoader = class WuiTransactionListItemLoader extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex alignItems="center" .padding=${['1', '2', '1', '2']}>
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `;
    }
};
WuiTransactionListItemLoader.styles = [ThemeUtil/* resetStyles */.W5, wui_transaction_list_item_loader_styles];
WuiTransactionListItemLoader = wui_transaction_list_item_loader_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-transaction-list-item-loader')
], WuiTransactionListItemLoader);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/node_modules/@reown/appkit-ui/dist/esm/exports/wui-transaction-list-item-loader.js

//# sourceMappingURL=wui-transaction-list-item-loader.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(110152);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-activity-list/styles.js

/* harmony default export */ const w3m_activity_list_styles = ((0,esm_exports/* css */.AH) `
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({ spacing }) => spacing['3']};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius }) => borderRadius['3']};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-activity-list/index.js
var w3m_activity_list_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const PAGINATOR_ID = 'last-transaction';
const LOADING_ITEM_COUNT = 7;
let W3mActivityList = class W3mActivityList extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.paginationObserver = undefined;
        this.page = 'activity';
        this.caipAddress = ChainController/* ChainController */.W.state.activeCaipAddress;
        this.transactionsByYear = TransactionsController/* TransactionsController */.W.state.transactionsByYear;
        this.loading = TransactionsController/* TransactionsController */.W.state.loading;
        this.empty = TransactionsController/* TransactionsController */.W.state.empty;
        this.next = TransactionsController/* TransactionsController */.W.state.next;
        TransactionsController/* TransactionsController */.W.clearCursor();
        this.unsubscribe.push(...[
            ChainController/* ChainController */.W.subscribeKey('activeCaipAddress', val => {
                if (val) {
                    if (this.caipAddress !== val) {
                        TransactionsController/* TransactionsController */.W.resetTransactions();
                        TransactionsController/* TransactionsController */.W.fetchTransactions(val);
                    }
                }
                this.caipAddress = val;
            }),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', () => {
                this.updateTransactionView();
            }),
            TransactionsController/* TransactionsController */.W.subscribe(val => {
                this.transactionsByYear = val.transactionsByYear;
                this.loading = val.loading;
                this.empty = val.empty;
                this.next = val.next;
            })
        ]);
    }
    firstUpdated() {
        this.updateTransactionView();
        this.createPaginationObserver();
    }
    updated() {
        this.setPaginationObserver();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) ` ${this.empty ? null : this.templateTransactionsByYear()}
    ${this.loading ? this.templateLoading() : null}
    ${!this.loading && this.empty ? this.templateEmpty() : null}`;
    }
    updateTransactionView() {
        TransactionsController/* TransactionsController */.W.resetTransactions();
        if (this.caipAddress) {
            TransactionsController/* TransactionsController */.W.fetchTransactions(CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(this.caipAddress));
        }
    }
    templateTransactionsByYear() {
        const sortedYearKeys = Object.keys(this.transactionsByYear).sort().reverse();
        return sortedYearKeys.map(year => {
            const yearInt = parseInt(year, 10);
            const sortedMonthIndexes = new Array(12)
                .fill(null)
                .map((_, idx) => {
                const groupTitle = esm_exports/* TransactionUtil */.tt.getTransactionGroupTitle(yearInt, idx);
                const transactions = this.transactionsByYear[yearInt]?.[idx];
                return {
                    groupTitle,
                    transactions
                };
            })
                .filter(({ transactions }) => transactions)
                .reverse();
            return sortedMonthIndexes.map(({ groupTitle, transactions }, index) => {
                const isLastGroup = index === sortedMonthIndexes.length - 1;
                if (!transactions) {
                    return null;
                }
                return (0,lit/* html */.qy) `
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${isLastGroup ? 'true' : 'false'}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${['2', '3', '3', '3']}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${groupTitle}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(transactions, isLastGroup)}
            </wui-flex>
          </wui-flex>
        `;
            });
        });
    }
    templateRenderTransaction(transaction, isLastTransaction) {
        const { date, descriptions, direction, images, status, type, transfers, isAllNFT } = this.getTransactionListItemProps(transaction);
        return (0,lit/* html */.qy) `
      <wui-transaction-list-item
        date=${date}
        .direction=${direction}
        id=${isLastTransaction && this.next ? PAGINATOR_ID : ''}
        status=${status}
        type=${type}
        .images=${images}
        .onlyDirectionIcon=${isAllNFT || transfers.length === 1}
        .descriptions=${descriptions}
      ></wui-transaction-list-item>
    `;
    }
    templateTransactions(transactions, isLastGroup) {
        return transactions.map((transaction, index) => {
            const isLastTransaction = isLastGroup && index === transactions.length - 1;
            return (0,lit/* html */.qy) `${this.templateRenderTransaction(transaction, isLastTransaction)}`;
        });
    }
    emptyStateActivity() {
        return (0,lit/* html */.qy) `<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${['10', '5', '10', '5']}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`;
    }
    emptyStateAccount() {
        return (0,lit/* html */.qy) `<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`;
    }
    templateEmpty() {
        if (this.page === 'account') {
            return (0,lit/* html */.qy) `${this.emptyStateAccount()}`;
        }
        return (0,lit/* html */.qy) `${this.emptyStateActivity()}`;
    }
    templateLoading() {
        if (this.page === 'activity') {
            return (0,lit/* html */.qy) ` <wui-flex flexDirection="column" width="100%">
        <wui-flex .padding=${['2', '3', '3', '3']}>
          <wui-shimmer width="70px" height="16px" rounded></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2" width="100%">
          ${Array(LOADING_ITEM_COUNT)
                .fill((0,lit/* html */.qy) ` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `)
                .map(item => item)}
        </wui-flex>
      </wui-flex>`;
        }
        return null;
    }
    onReceiveClick() {
        RouterController/* RouterController */.I.push('WalletReceive');
    }
    createPaginationObserver() {
        const { projectId } = OptionsController/* OptionsController */.H.state;
        this.paginationObserver = new IntersectionObserver(([element]) => {
            if (element?.isIntersecting && !this.loading) {
                TransactionsController/* TransactionsController */.W.fetchTransactions(CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(this.caipAddress));
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'LOAD_MORE_TRANSACTIONS',
                    properties: {
                        address: CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(this.caipAddress),
                        projectId,
                        cursor: this.next,
                        isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ChainController/* ChainController */.W.state.activeChain) ===
                            W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                    }
                });
            }
        }, {});
        this.setPaginationObserver();
    }
    setPaginationObserver() {
        this.paginationObserver?.disconnect();
        const lastItem = this.shadowRoot?.querySelector(`#${PAGINATOR_ID}`);
        if (lastItem) {
            this.paginationObserver?.observe(lastItem);
        }
    }
    getTransactionListItemProps(transaction) {
        const date = DateUtil/* DateUtil */.r.formatDate(transaction?.metadata?.minedAt);
        const transfers = esm_exports/* TransactionUtil */.tt.mergeTransfers(transaction?.transfers || []);
        const descriptions = esm_exports/* TransactionUtil */.tt.getTransactionDescriptions(transaction, transfers);
        const transfer = transfers?.[0];
        const isAllNFT = Boolean(transfer) && transfers?.every(item => Boolean(item.nft_info));
        const images = esm_exports/* TransactionUtil */.tt.getTransactionImages(transfers);
        return {
            date,
            direction: transfer?.direction,
            descriptions,
            isAllNFT,
            images,
            status: transaction.metadata?.status,
            transfers,
            type: transaction.metadata?.operationType
        };
    }
};
W3mActivityList.styles = w3m_activity_list_styles;
w3m_activity_list_decorate([
    (0,decorators/* property */.MZ)()
], W3mActivityList.prototype, "page", void 0);
w3m_activity_list_decorate([
    (0,decorators/* state */.wk)()
], W3mActivityList.prototype, "caipAddress", void 0);
w3m_activity_list_decorate([
    (0,decorators/* state */.wk)()
], W3mActivityList.prototype, "transactionsByYear", void 0);
w3m_activity_list_decorate([
    (0,decorators/* state */.wk)()
], W3mActivityList.prototype, "loading", void 0);
w3m_activity_list_decorate([
    (0,decorators/* state */.wk)()
], W3mActivityList.prototype, "empty", void 0);
w3m_activity_list_decorate([
    (0,decorators/* state */.wk)()
], W3mActivityList.prototype, "next", void 0);
W3mActivityList = w3m_activity_list_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-activity-list')
], W3mActivityList);

//# sourceMappingURL=index.js.map

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

/***/ }

}]);