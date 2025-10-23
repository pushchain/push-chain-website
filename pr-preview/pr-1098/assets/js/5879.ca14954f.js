/*! For license information please see 5879.ca14954f.js.LICENSE.txt */
(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[5879],{74764:(e,t,i)=>{const o=i(364713);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=o.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const i=o.mod(t,this.genPoly),n=this.degree-i.length;if(n>0){const e=new Uint8Array(this.degree);return e.set(i,n),e}return i},e.exports=n},76320:e=>{"use strict";var t={single_source_shortest_paths:function(e,i,o){var n={},r={};r[i]=0;var s,a,l,c,d,u,h,p=t.PriorityQueue.make();for(p.push(i,0);!p.empty();)for(l in a=(s=p.pop()).value,c=s.cost,d=e[a]||{})d.hasOwnProperty(l)&&(u=c+d[l],h=r[l],(void 0===r[l]||h>u)&&(r[l]=u,p.push(l,u),n[l]=a));if(void 0!==o&&void 0===r[o]){var g=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(g)}return n},extract_shortest_path_from_predecessor_list:function(e,t){for(var i=[],o=t;o;)i.push(o),e[o],o=e[o];return i.reverse(),i},find_path:function(e,i,o){var n=t.single_source_shortest_paths(e,i,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(e){var i,o=t.PriorityQueue,n={};for(i in e=e||{},o)o.hasOwnProperty(i)&&(n[i]=o[i]);return n.queue=[],n.sorter=e.sorter||o.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var i={value:e,cost:t};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},91333:e=>{e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},102731:(e,t)=>{const i=new Uint8Array(512),o=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)i[t]=e,o[e]=t,e<<=1,256&e&&(e^=285);for(let t=255;t<512;t++)i[t]=i[t-255]}(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return o[e]},t.exp=function(e){return i[e]},t.mul=function(e,t){return 0===e||0===t?0:i[o[e]+o[t]]}},130208:(e,t,i)=>{const o=i(821878),n=i(767044);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!o.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,i){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(o){return i}}},208820:e=>{function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,i,o){const n=e*this.size+t;this.data[n]=i,o&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},247899:(e,t,i)=>{const o=i(592726);t.render=function(e,t,i){let n=i,r=t;void 0!==n||t&&t.getContext||(n=t,t=void 0),t||(r=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),n=o.getOptions(n);const s=o.getImageWidth(e.modules.size,n),a=r.getContext("2d"),l=a.createImageData(s,s);return o.qrToImageData(l.data,e,n),function(e,t,i){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=i,t.width=i,t.style.height=i+"px",t.style.width=i+"px"}(a,r,s),a.putImageData(l,0,0),r},t.renderToDataURL=function(e,i,o){let n=o;void 0!==n||i&&i.getContext||(n=i,i=void 0),n||(n={});const r=t.render(e,i,n),s=n.type||"image/png",a=n.rendererOpts||{};return r.toDataURL(s,a.quality)}},256886:(e,t)=>{let i;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return o[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');i=e},t.isKanjiModeEnabled=function(){return void 0!==i},t.toSJIS=function(e){return i(e)}},307756:(e,t,i)=>{const o=i(256886).getSymbolSize;t.getPositions=function(e){const t=o(e);return[[0,0],[t-7,0],[0,t-7]]}},325822:(e,t,i)=>{const o=i(969049),n=i(130208);function r(e){this.mode=n.BYTE,"string"==typeof e&&(e=o(e)),this.data=new Uint8Array(e)}r.getBitsLength=function(e){return 8*e},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)},e.exports=r},364713:(e,t,i)=>{const o=i(102731);t.mul=function(e,t){const i=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let r=0;r<t.length;r++)i[n+r]^=o.mul(e[n],t[r]);return i},t.mod=function(e,t){let i=new Uint8Array(e);for(;i.length-t.length>=0;){const e=i[0];for(let r=0;r<t.length;r++)i[r]^=o.mul(t[r],e);let n=0;for(;n<i.length&&0===i[n];)n++;i=i.slice(n)}return i},t.generateECPolynomial=function(e){let i=new Uint8Array([1]);for(let n=0;n<e;n++)i=t.mul(i,new Uint8Array([1,o.exp(n)]));return i}},405879:(e,t,i)=>{"use strict";i.r(t),i.d(t,{W3mAllWalletsView:()=>Tt,W3mConnectingWcBasicView:()=>Ne,W3mDownloadsView:()=>Wt});var o=i(197199),n=i(6357),r=i(226742),s=i(757019),a=i(188249),l=i(127508),c=i(441454),d=(i(460310),i(535198)),u=i(824376),h=i(236010),p=i(14400),g=i(390184),f=i(778508),w=(i(739033),function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s});let m=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.a.state.connectors,this.count=a.N.state.count,this.filteredCount=a.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=a.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(h.a.subscribeKey("connectors",e=>this.connectors=e),a.N.subscribeKey("count",e=>this.count=e),a.N.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),a.N.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=s.H.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!r.w.isMobile())return null;const i=a.N.state.featured.length,n=this.count+i,l=n<10?n:10*Math.floor(n/10),c=this.filteredCount>0?this.filteredCount:l;let h=`${c}`;this.filteredCount>0?h=`${this.filteredCount}`:c<n&&(h=`${c}+`);const g=p.x.hasAnyConnection(u.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${h}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,d.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${g}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){g.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),f.I.push("AllWallets",{redirectView:f.I.state.data?.redirectView})}};w([(0,n.MZ)()],m.prototype,"tabIdx",void 0),w([(0,n.wk)()],m.prototype,"connectors",void 0),w([(0,n.wk)()],m.prototype,"count",void 0),w([(0,n.wk)()],m.prototype,"filteredCount",void 0),w([(0,n.wk)()],m.prototype,"isFetchingRecommendedWallets",void 0),m=w([(0,c.EM)("w3m-all-wallets-widget")],m);var b=i(773337),y=i(527601),v=i(335306),x=i(56092);const $=c.AH`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var k=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let C=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=h.a.state.connectors,this.recommended=a.N.state.recommended,this.featured=a.N.state.featured,this.explorerWallets=a.N.state.explorerWallets,this.connections=p.x.state.connections,this.connectorImages=b.j.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(h.a.subscribeKey("connectors",e=>this.connectors=e),p.x.subscribeKey("connections",e=>this.connections=e),b.j.subscribeKey("connectorImages",e=>this.connectorImages=e),a.N.subscribeKey("recommended",e=>this.recommended=e),a.N.subscribeKey("featured",e=>this.featured=e),a.N.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:a.N.state.explorerWallets}),a.N.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),r.w.isTelegram()&&r.w.isIos()&&(this.loadingTelegram=!p.x.state.wcUri,this.unsubscribe.push(p.x.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(e,t){return e.map(e=>{if("MULTI_CHAIN"===e.type&&e.connectors){const i=e.connectors.map(e=>e.id),o=e.connectors.map(e=>e.name),n=e.connectors.map(e=>e.info?.rdns),r=t?.find(e=>i.includes(e.id)||o.includes(e.name)||e.rdns&&(n.includes(e.rdns)||i.includes(e.rdns)));return e.explorerWallet=r??e.explorerWallet,e}const i=t?.find(t=>t.id===e.id||t.rdns===e.info?.rdns||t.name===e.name);return e.explorerWallet=i??e.explorerWallet,e})}processConnectorsByType(e,t=!0){const i=x.g.sortConnectorsByExplorerWallet([...e]);return t?i.filter(x.g.showConnector):i}connectorListTemplate(){const e=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),t=x.g.getConnectorsByType(e,this.recommended,this.featured),i=this.processConnectorsByType(t.announced.filter(e=>"walletConnect"!==e.id)),o=this.processConnectorsByType(t.injected),n=this.processConnectorsByType(t.multiChain.filter(e=>"WalletConnect"!==e.name),!1),s=t.custom,a=t.recent,l=this.processConnectorsByType(t.external.filter(e=>e.id!==u.o.CONNECTOR_ID.COINBASE_SDK)),c=t.recommended,d=t.featured,h=x.g.getConnectorTypeOrder({custom:s,recent:a,announced:i,injected:o,multiChain:n,recommended:c,featured:d,external:l}),p=this.connectors.find(e=>"walletConnect"===e.id),g=r.w.isMobile(),f=[];for(const r of h)switch(r){case"walletConnect":!g&&p&&f.push({kind:"connector",subtype:"walletConnect",connector:p});break;case"recent":x.g.getFilteredRecentWallets().forEach(e=>f.push({kind:"wallet",subtype:"recent",wallet:e}));break;case"injected":n.forEach(e=>f.push({kind:"connector",subtype:"multiChain",connector:e})),i.forEach(e=>f.push({kind:"connector",subtype:"announced",connector:e})),o.forEach(e=>f.push({kind:"connector",subtype:"injected",connector:e}));break;case"featured":d.forEach(e=>f.push({kind:"wallet",subtype:"featured",wallet:e}));break;case"custom":x.g.getFilteredCustomWallets(s??[]).forEach(e=>f.push({kind:"wallet",subtype:"custom",wallet:e}));break;case"external":l.forEach(e=>f.push({kind:"connector",subtype:"external",connector:e}));break;case"recommended":x.g.getCappedRecommendedWallets(c).forEach(e=>f.push({kind:"wallet",subtype:"recommended",wallet:e}));break;default:console.warn(`Unknown connector type: ${r}`)}return f.map((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t))}renderConnector(e,t){const i=e.connector,n=y.$.getConnectorImage(i)||this.connectorImages[i?.imageId??""],r=(this.connections.get(i.chain)??[]).some(e=>v.y.isLowerCaseMatch(e.connectorId,i.id));let s,a;"multiChain"===e.subtype?(s="multichain",a="info"):"walletConnect"===e.subtype?(s="qr code",a="accent"):"injected"===e.subtype||"announced"===e.subtype?(s=r?"connected":"installed",a=r?"info":"success"):(s=void 0,a=void 0);const l=p.x.hasAnyConnection(u.o.CONNECTOR_ID.WALLET_CONNECT),c=("walletConnect"===e.subtype||"external"===e.subtype)&&l;return o.qy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.J)(n)}
        .installed=${!0}
        name=${i.name??"Unknown"}
        .tagVariant=${a}
        tagLabel=${(0,d.J)(s)}
        data-testid=${`wallet-selector-${i.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,d.J)(this.tabIdx)}
        ?disabled=${c}
        rdnsId=${(0,d.J)(i.explorerWallet?.rdns||void 0)}
        walletRank=${(0,d.J)(i.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){const t=f.I.state.data?.redirectView;return"walletConnect"===e.subtype?(h.a.setActiveConnector(e.connector),void(r.w.isMobile()?f.I.push("AllWallets"):f.I.push("ConnectingWalletConnect",{redirectView:t}))):"multiChain"===e.subtype?(h.a.setActiveConnector(e.connector),void f.I.push("ConnectingMultiChain",{redirectView:t})):"injected"===e.subtype?(h.a.setActiveConnector(e.connector),void f.I.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet})):"announced"===e.subtype?"walletConnect"===e.connector.id?void(r.w.isMobile()?f.I.push("AllWallets"):f.I.push("ConnectingWalletConnect",{redirectView:t})):void f.I.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet}):void f.I.push("ConnectingExternal",{connector:e.connector,redirectView:t})}renderWallet(e,t){const i=e.wallet,n=y.$.getWalletImage(i),r=p.x.hasAnyConnection(u.o.CONNECTOR_ID.WALLET_CONNECT),s=this.loadingTelegram,a="recent"===e.subtype?"recent":void 0,l="recent"===e.subtype?"info":void 0;return o.qy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.J)(n)}
        name=${i.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${i.id}`}
        tabIdx=${(0,d.J)(this.tabIdx)}
        ?loading=${s}
        ?disabled=${r}
        rdnsId=${(0,d.J)(i.rdns||void 0)}
        walletRank=${(0,d.J)(i.order)}
        tagLabel=${(0,d.J)(a)}
        .tagVariant=${l}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){const t=f.I.state.data?.redirectView;if("featured"===e.subtype)return void h.a.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;return void h.a.selectWalletConnector(e.wallet)}if("custom"===e.subtype){if(this.loadingTelegram)return;return void f.I.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}if(this.loadingTelegram)return;const i=h.a.getConnector({id:e.wallet.id,rdns:e.wallet.rdns});i?f.I.push("ConnectingExternal",{connector:i,redirectView:t}):f.I.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}};C.styles=$,k([(0,n.MZ)({type:Number})],C.prototype,"tabIdx",void 0),k([(0,n.wk)()],C.prototype,"connectors",void 0),k([(0,n.wk)()],C.prototype,"recommended",void 0),k([(0,n.wk)()],C.prototype,"featured",void 0),k([(0,n.wk)()],C.prototype,"explorerWallets",void 0),k([(0,n.wk)()],C.prototype,"connections",void 0),k([(0,n.wk)()],C.prototype,"connectorImages",void 0),k([(0,n.wk)()],C.prototype,"loadingTelegram",void 0),C=k([(0,c.EM)("w3m-connector-list")],C);var E=i(136875),R=i(806056),I=i(121871),T=i(91111),A=i(923082),M=i(973723),P=i(926109),S=i(243494),W=(i(204694),i(354706),i(867569));const L=W.AH`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var N=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};const B={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},O={lg:"md",md:"sm",sm:"sm"};let j=class extends o.WF{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return o.qy`
      <button data-active=${this.active}>
        ${this.icon?o.qy`<wui-icon size=${O[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${B[this.size]}> ${this.label} </wui-text>
      </button>
    `}};j.styles=[P.W5,P.fD,L],N([(0,n.MZ)()],j.prototype,"icon",void 0),N([(0,n.MZ)()],j.prototype,"size",void 0),N([(0,n.MZ)()],j.prototype,"label",void 0),N([(0,n.MZ)({type:Boolean})],j.prototype,"active",void 0),j=N([(0,S.E)("wui-tab-item")],j);const z=W.AH`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var _=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let q=class extends o.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{const i=t===this.activeTab;return o.qy`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};q.styles=[P.W5,P.fD,z],_([(0,n.MZ)({type:Array})],q.prototype,"tabs",void 0),_([(0,n.MZ)()],q.prototype,"onTabChange",void 0),_([(0,n.MZ)()],q.prototype,"size",void 0),_([(0,n.wk)()],q.prototype,"activeTab",void 0),q=_([(0,S.E)("wui-tabs")],q);var D=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let U=class extends o.WF{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return o.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};D([(0,n.MZ)({type:Array})],U.prototype,"platforms",void 0),D([(0,n.MZ)()],U.prototype,"onSelectPlatfrom",void 0),U=D([(0,c.EM)("w3m-connecting-header")],U);var Z=i(568996);i(508163);const F=W.AH`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
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
`;var H=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};const V={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},J={lg:"md",md:"md",sm:"sm"};let K=class extends o.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n     `;const e=this.textVariant??V[this.size];return o.qy`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const e=J[this.size],t="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return o.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return null}};K.styles=[P.W5,P.fD,F],H([(0,n.MZ)()],K.prototype,"size",void 0),H([(0,n.MZ)({type:Boolean})],K.prototype,"disabled",void 0),H([(0,n.MZ)({type:Boolean})],K.prototype,"fullWidth",void 0),H([(0,n.MZ)({type:Boolean})],K.prototype,"loading",void 0),H([(0,n.MZ)()],K.prototype,"variant",void 0),H([(0,n.MZ)()],K.prototype,"textVariant",void 0),K=H([(0,S.E)("wui-button")],K);i(51636),i(238436),i(526751);const Y=W.AH`
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
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Q=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let G=class extends o.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,i=116+t,n=245+t,r=360+1.75*t;return o.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${n}"
          stroke-dashoffset=${r}
        />
      </svg>
    `}};G.styles=[P.W5,Y],Q([(0,n.MZ)({type:Number})],G.prototype,"radius",void 0),G=Q([(0,S.E)("wui-loading-thumbnail")],G);i(945090),i(907336),i(648832);const X=W.AH`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var ee=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let te=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};te.styles=[P.W5,P.fD,X],ee([(0,n.MZ)({type:Boolean})],te.prototype,"disabled",void 0),ee([(0,n.MZ)()],te.prototype,"label",void 0),ee([(0,n.MZ)()],te.prototype,"buttonLabel",void 0),te=ee([(0,S.E)("wui-cta-button")],te);const ie=c.AH`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var oe=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ne=class extends o.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:n,homepage:s}=this.wallet,a=r.w.isMobile(),l=r.w.isIos(),d=r.w.isAndroid(),u=[t,i,s,n].filter(Boolean).length>1,h=c.Zv.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return u&&!a?o.qy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>f.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&s?o.qy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&l?o.qy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&d?o.qy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&r.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&r.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&r.w.openHref(this.wallet.homepage,"_blank")}};ne.styles=[ie],oe([(0,n.MZ)({type:Object})],ne.prototype,"wallet",void 0),ne=oe([(0,c.EM)("w3m-mobile-download-links")],ne);const re=c.AH`
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
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
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
`;var se=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};class ae extends o.WF{constructor(){super(),this.wallet=f.I.state.data?.wallet,this.connector=f.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=y.$.getConnectorImage(this.connector)??y.$.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=p.x.state.wcUri,this.error=p.x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(p.x.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),p.x.subscribeKey("wcError",e=>this.error=e)),(r.w.isTelegram()||r.w.isSafari())&&r.w.isIos()&&p.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),p.x.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),o.qy`
      <wui-flex
        data-error=${(0,d.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,d.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

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
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.qy`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
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
              `:null}
      </wui-flex>

      ${this.isWalletConnect?o.qy`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){p.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=Z.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(r.w.copyToClopboard(this.uri),I.P.showSuccess("Link copied"))}catch{I.P.showError("Failed to copy")}}}ae.styles=re,se([(0,n.wk)()],ae.prototype,"isRetrying",void 0),se([(0,n.wk)()],ae.prototype,"uri",void 0),se([(0,n.wk)()],ae.prototype,"error",void 0),se([(0,n.wk)()],ae.prototype,"ready",void 0),se([(0,n.wk)()],ae.prototype,"showRetry",void 0),se([(0,n.wk)()],ae.prototype,"label",void 0),se([(0,n.wk)()],ae.prototype,"secondaryBtnLabel",void 0),se([(0,n.wk)()],ae.prototype,"secondaryLabel",void 0),se([(0,n.wk)()],ae.prototype,"isLoading",void 0),se([(0,n.MZ)({type:Boolean})],ae.prototype,"isMobile",void 0),se([(0,n.MZ)()],ae.prototype,"onRetry",void 0);var le=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ce=class extends ae{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:f.I.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=h.a.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await p.x.connectExternal(t,t.chain),T.W.close(),g.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:f.I.state.view,walletRank:this.wallet?.order}})}catch(e){e instanceof A.A&&e.originalName===E.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?g.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):g.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ce=le([(0,c.EM)("w3m-connecting-wc-browser")],ce);var de=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ue=class extends ae{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:f.I.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=r.w.formatNativeUrl(e,this.uri);p.x.setWcLinking({name:t,href:o}),p.x.setRecentWallet(this.wallet),r.w.openHref(i,"_blank")}catch{this.error=!0}}};ue=de([(0,c.EM)("w3m-connecting-wc-desktop")],ue);var he=i(562944),pe=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ge=class extends ae{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=s.H.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:n,href:s}=r.w.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=n,this.target=r.w.isIframe()?"_top":"_self",p.x.setWcLinking({name:i,href:s}),p.x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?r.w.openHref(this.redirectUniversalLink,this.target):r.w.openHref(this.redirectDeeplink,this.target)}catch(e){g.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=he.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(p.x.subscribeKey("wcUri",()=>{this.onHandleURI()})),g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:f.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){p.x.setWcError(!1),this.onConnect?.()}};pe([(0,n.wk)()],ge.prototype,"redirectDeeplink",void 0),pe([(0,n.wk)()],ge.prototype,"redirectUniversalLink",void 0),pe([(0,n.wk)()],ge.prototype,"target",void 0),pe([(0,n.wk)()],ge.prototype,"preferUniversalLinks",void 0),pe([(0,n.wk)()],ge.prototype,"isLoading",void 0),ge=pe([(0,c.EM)("w3m-connecting-wc-mobile")],ge);i(301608);var fe=i(887583);function we(e,t,i){if(e===t)return!1;return(e-t<0?t-e:e-t)<=i+.1}const me={generate({uri:e,size:t,logoSize:i,padding:n=8,dotColor:r="var(--apkt-colors-black)"}){const s=10,a=[],l=function(e,t){const i=Array.prototype.slice.call(fe.create(e,{errorCorrectionLevel:t}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((e,t,i)=>(i%o===0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,"Q"),c=(t-2*n)/l.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:e,y:t})=>{const i=(l.length-7)*c*e+n,u=(l.length-7)*c*t+n,h=.45;for(let n=0;n<d.length;n+=1){const e=c*(7-2*n);a.push(o.JW`
            <rect
              fill=${2===n?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===n?e-s:e}
              rx= ${0===n?(e-s)*h:e*h}
              ry= ${0===n?(e-s)*h:e*h}
              stroke=${r}
              stroke-width=${0===n?s:0}
              height=${0===n?e-s:e}
              x= ${0===n?u+c*n+5:u+c*n}
              y= ${0===n?i+c*n+5:i+c*n}
            />
          `)}});const u=Math.floor((i+25)/c),h=l.length/2-u/2,p=l.length/2+u/2-1,g=[];l.forEach((e,t)=>{e.forEach((e,i)=>{if(l[t][i]&&!(t<7&&i<7||t>l.length-8&&i<7||t<7&&i>l.length-8||t>h&&t<p&&i>h&&i<p)){const e=t*c+c/2+n,o=i*c+c/2+n;g.push([e,o])}})});const f={};return g.forEach(([e,t])=>{f[e]?f[e]?.push(t):f[e]=[t]}),Object.entries(f).map(([e,t])=>{const i=t.filter(e=>t.every(t=>!we(e,t,c)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{a.push(o.JW`<circle cx=${e} cy=${t} fill=${r} r=${c/2.5} />`)})}),Object.entries(f).filter(([e,t])=>t.length>1).map(([e,t])=>{const i=t.filter(e=>t.some(t=>we(e,t,c)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);const i=[];for(const o of t){const e=i.find(e=>e.some(e=>we(o,e,c)));e?e.push(o):i.push([o])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{a.push(o.JW`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${r}
                stroke-width=${c/1.25}
                stroke-linecap="round"
              />
            `)})}),a}},be=W.AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
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
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
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
`;var ye=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ve=class extends o.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,o.qy`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return o.JW`
      <svg height=${this.size} width=${this.size}>
        ${me.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?o.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:o.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ve.styles=[P.W5,be],ye([(0,n.MZ)()],ve.prototype,"uri",void 0),ye([(0,n.MZ)({type:Number})],ve.prototype,"size",void 0),ye([(0,n.MZ)()],ve.prototype,"theme",void 0),ye([(0,n.MZ)()],ve.prototype,"imageSrc",void 0),ye([(0,n.MZ)()],ve.prototype,"alt",void 0),ye([(0,n.MZ)({type:Boolean})],ve.prototype,"arenaClear",void 0),ye([(0,n.MZ)({type:Boolean})],ve.prototype,"farcaster",void 0),ve=ye([(0,S.E)("wui-qr-code")],ve);const xe=W.AH`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var $e=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ke=class extends o.WF{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",o.qy`<slot></slot>`}};ke.styles=[xe],$e([(0,n.MZ)()],ke.prototype,"width",void 0),$e([(0,n.MZ)()],ke.prototype,"height",void 0),$e([(0,n.MZ)()],ke.prototype,"variant",void 0),$e([(0,n.MZ)({type:Boolean})],ke.prototype,"rounded",void 0),ke=$e([(0,S.E)("wui-shimmer")],ke);i(158760);const Ce=c.AH`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
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
`;var Ee=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Re=class extends ae{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){this.basic||g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:f.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;p.x.setWcLinking(void 0),p.x.setRecentWallet(this.wallet);let i=this.uri;if(this.wallet?.mobile_link){const{redirect:e}=r.w.formatNativeUrl(this.wallet?.mobile_link,this.uri,null);i=e}return o.qy` <wui-qr-code
      size=${e}
      theme=${Z.W.state.themeMode}
      uri=${i}
      imageSrc=${(0,d.J)(y.$.getWalletImage(this.wallet))}
      color=${(0,d.J)(Z.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,d.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.qy`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};Re.styles=Ce,Ee([(0,n.MZ)({type:Boolean})],Re.prototype,"basic",void 0),Re=Ee([(0,c.EM)("w3m-connecting-wc-qrcode")],Re);var Ie=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Te=class extends o.WF{constructor(){if(super(),this.wallet=f.I.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:f.I.state.view}})}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,d.J)(y.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Te=Ie([(0,c.EM)("w3m-connecting-wc-unsupported")],Te);var Ae=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Me=class extends ae{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=he.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(p.x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:f.I.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=r.w.formatUniversalUrl(e,this.uri);p.x.setWcLinking({name:t,href:o}),p.x.setRecentWallet(this.wallet),r.w.openHref(i,"_blank")}catch{this.error=!0}}};Ae([(0,n.wk)()],Me.prototype,"isLoading",void 0),Me=Ae([(0,c.EM)("w3m-connecting-wc-web")],Me);const Pe=c.AH`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var Se=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let We=class extends o.WF{constructor(){super(),this.wallet=f.I.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(s.H.state.siwx),this.remoteFeatures=s.H.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(s.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return s.H.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),o.qy`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!s.H.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:i}=p.x.state,{redirectView:o}=f.I.state.data??{};if(e||s.H.state.enableEmbedded||r.w.isPairingExpired(t)||"connecting"===i){const e=p.x.getConnections(R.W.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await p.x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(f.I.replace("ProfileWallets"),I.P.showSuccess("New Wallet Added")):o?f.I.replace(o):T.W.close())}}catch(t){if(t instanceof Error&&t.message.includes("An error occurred when attempting to switch chain")&&!s.H.state.enableNetworkSwitch&&R.W.state.activeChain)return R.W.setActiveCaipNetwork(M.R.getUnsupportedNetwork(`${R.W.state.activeChain}:${R.W.state.activeCaipNetwork?.id}`)),void R.W.showUnsupportedChainUI();t instanceof A.A&&t.originalName===E.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?g.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):g.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),p.x.setWcError(!0),I.P.showError(t.message??"Connection error"),p.x.resetWcConnection(),f.I.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:n}=this.wallet,a=o?.map(({injected_id:e})=>e).filter(Boolean),l=[...n?[n]:a??[]],c=!s.H.state.isUniversalProvider&&l.length,d=e,u=i,h=p.x.checkInstalled(l),g=c&&h,f=t&&!r.w.isMobile();g&&!R.W.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(r.w.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),f&&this.platforms.push("desktop"),g||!c||R.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.qy`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return o.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};We.styles=Pe,Se([(0,n.wk)()],We.prototype,"platform",void 0),Se([(0,n.wk)()],We.prototype,"platforms",void 0),Se([(0,n.wk)()],We.prototype,"isSiwxEnabled",void 0),Se([(0,n.wk)()],We.prototype,"remoteFeatures",void 0),Se([(0,n.MZ)({type:Boolean})],We.prototype,"displayBranding",void 0),Se([(0,n.MZ)({type:Boolean})],We.prototype,"basic",void 0),We=Se([(0,c.EM)("w3m-connecting-wc-view")],We);var Le=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Ne=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.isMobile=r.w.isMobile(),this.remoteFeatures=s.H.state.remoteFeatures,this.unsubscribe.push(s.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:t}=a.N.state,{customWallets:i}=s.H.state,n=l.i.getRecentWallets(),r=e.length||t.length||i?.length||n.length;return o.qy`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${r?o.qy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return o.qy`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?o.qy` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Le([(0,n.wk)()],Ne.prototype,"isMobile",void 0),Le([(0,n.wk)()],Ne.prototype,"remoteFeatures",void 0),Ne=Le([(0,c.EM)("w3m-connecting-wc-basic-view")],Ne);var Be=i(836752);const{I:Oe}=Be.ge;var je=i(207804);const ze=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const o of i)o._$AO?.(t,!1),ze(o,t);return!0},_e=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},qe=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Ze(t)}};function De(e){void 0!==this._$AN?(_e(this),this._$AM=e,qe(this)):this._$AM=e}function Ue(e,t=!1,i=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(o))for(let r=i;r<o.length;r++)ze(o[r],!1),_e(o[r]);else null!=o&&(ze(o,!1),_e(o));else ze(this,e)}const Ze=e=>{e.type==je.OA.CHILD&&(e._$AP??=Ue,e._$AQ??=De)};class Fe extends je.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),qe(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ze(this,e),_e(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const He=()=>new Ve;class Ve{}const Je=new WeakMap,Ke=(0,je.u$)(class extends Fe{render(e){return Be.s6}update(e,[t]){const i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Be.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let i=Je.get(t);void 0===i&&(i=new WeakMap,Je.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?Je.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ye=W.AH`
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
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
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
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
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
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
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
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var Qe=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Ge=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=He(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return o.qy`
      <label data-size=${this.size}>
        <input
          ${Ke(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Ge.styles=[P.W5,P.fD,Ye],Qe([(0,n.MZ)({type:Boolean})],Ge.prototype,"checked",void 0),Qe([(0,n.MZ)({type:Boolean})],Ge.prototype,"disabled",void 0),Qe([(0,n.MZ)()],Ge.prototype,"size",void 0),Ge=Qe([(0,S.E)("wui-toggle")],Ge);const Xe=W.AH`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var et=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let tt=class extends o.WF{constructor(){super(...arguments),this.checked=!1}render(){return o.qy`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};tt.styles=[P.W5,P.fD,Xe],et([(0,n.MZ)({type:Boolean})],tt.prototype,"checked",void 0),tt=et([(0,S.E)("wui-certified-switch")],tt);const it=W.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
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
`;var ot=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let nt=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=He(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return o.qy` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${Ke(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,d.J)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?o.qy`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?o.qy`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?o.qy`<wui-icon name="spinner" size="md"></wui-icon>`:o.qy`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?o.qy`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?o.qy`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};nt.styles=[P.W5,P.fD,it],ot([(0,n.MZ)()],nt.prototype,"icon",void 0),ot([(0,n.MZ)({type:Boolean})],nt.prototype,"disabled",void 0),ot([(0,n.MZ)({type:Boolean})],nt.prototype,"loading",void 0),ot([(0,n.MZ)()],nt.prototype,"placeholder",void 0),ot([(0,n.MZ)()],nt.prototype,"type",void 0),ot([(0,n.MZ)()],nt.prototype,"value",void 0),ot([(0,n.MZ)()],nt.prototype,"errorText",void 0),ot([(0,n.MZ)()],nt.prototype,"warningText",void 0),ot([(0,n.MZ)()],nt.prototype,"onSubmit",void 0),ot([(0,n.MZ)()],nt.prototype,"size",void 0),ot([(0,n.MZ)({attribute:!1})],nt.prototype,"onKeyDown",void 0),nt=ot([(0,S.E)("wui-input-text")],nt);const rt=W.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var st=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let at=class extends o.WF{constructor(){super(...arguments),this.inputComponentRef=He(),this.inputValue=""}render(){return o.qy`
      <wui-input-text
        ${Ke(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?o.qy`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};at.styles=[P.W5,rt],st([(0,n.MZ)()],at.prototype,"inputValue",void 0),at=st([(0,S.E)("wui-search-bar")],at);const lt=o.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,ct=W.AH`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
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
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var dt=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ut=class extends o.WF{constructor(){super(...arguments),this.type="wallet"}render(){return o.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.qy` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${lt}`:o.qy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};ut.styles=[P.W5,P.fD,ct],dt([(0,n.MZ)()],ut.prototype,"type",void 0),ut=dt([(0,S.E)("wui-card-select-loader")],ut);var ht=i(163612);const pt=o.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var gt=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ft=class extends o.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&ht.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&ht.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&ht.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&ht.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&ht.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&ht.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&ht.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&ht.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};ft.styles=[P.W5,pt],gt([(0,n.MZ)()],ft.prototype,"gridTemplateRows",void 0),gt([(0,n.MZ)()],ft.prototype,"gridTemplateColumns",void 0),gt([(0,n.MZ)()],ft.prototype,"justifyItems",void 0),gt([(0,n.MZ)()],ft.prototype,"alignItems",void 0),gt([(0,n.MZ)()],ft.prototype,"justifyContent",void 0),gt([(0,n.MZ)()],ft.prototype,"alignContent",void 0),gt([(0,n.MZ)()],ft.prototype,"columnGap",void 0),gt([(0,n.MZ)()],ft.prototype,"rowGap",void 0),gt([(0,n.MZ)()],ft.prototype,"gap",void 0),gt([(0,n.MZ)()],ft.prototype,"padding",void 0),gt([(0,n.MZ)()],ft.prototype,"margin",void 0),ft=gt([(0,S.E)("wui-grid")],ft);var wt=i(665042);const mt=c.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
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
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var bt=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let yt=class extends o.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return o.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,d.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?o.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():o.qy`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,d.J)(this.imageSrc)}
        name=${(0,d.J)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return o.qy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=y.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await y.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,g.E.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:f.I.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};yt.styles=mt,bt([(0,n.wk)()],yt.prototype,"visible",void 0),bt([(0,n.wk)()],yt.prototype,"imageSrc",void 0),bt([(0,n.wk)()],yt.prototype,"imageLoading",void 0),bt([(0,n.wk)()],yt.prototype,"isImpressed",void 0),bt([(0,n.MZ)()],yt.prototype,"explorerId",void 0),bt([(0,n.MZ)()],yt.prototype,"walletQuery",void 0),bt([(0,n.MZ)()],yt.prototype,"certified",void 0),bt([(0,n.MZ)()],yt.prototype,"displayIndex",void 0),bt([(0,n.MZ)({type:Object})],yt.prototype,"wallet",void 0),yt=bt([(0,c.EM)("w3m-all-wallets-list-item")],yt);const vt=c.AH`
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
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
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
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var xt=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};const $t="local-paginator";let kt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!a.N.state.wallets.length,this.wallets=a.N.state.wallets,this.recommended=a.N.state.recommended,this.featured=a.N.state.featured,this.filteredWallets=a.N.state.filteredWallets,this.mobileFullScreen=s.H.state.enableMobileFullScreen,this.unsubscribe.push(a.N.subscribeKey("wallets",e=>this.wallets=e),a.N.subscribeKey("recommended",e=>this.recommended=e),a.N.subscribeKey("featured",e=>this.featured=e),a.N.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),o.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await a.N.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>o.qy`
        <wui-card-select-loader type="wallet" id=${(0,d.J)(t)}></wui-card-select-loader>
      `)}getWallets(){const e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);const t=r.w.uniqueBy(e,"id"),i=wt.A.markWalletsAsInstalled(t);return wt.A.markWalletsWithDisplayIndex(i)}walletsTemplate(){return this.getWallets().map((e,t)=>o.qy`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o,mobileFilteredOutWalletsLength:n}=a.N.state,r=window.innerWidth<352?3:4,s=e.length+t.length;let l=Math.ceil(s/r)*r-s+r;return l-=e.length?i.length%r:0,0===o&&i.length>0?null:0===o||[...i,...e,...t].length<o-(n??0)?this.shimmerTemplate(l,$t):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${$t}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=a.N.state;i.length<t&&a.N.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){h.a.selectWalletConnector(e)}};kt.styles=vt,xt([(0,n.wk)()],kt.prototype,"loading",void 0),xt([(0,n.wk)()],kt.prototype,"wallets",void 0),xt([(0,n.wk)()],kt.prototype,"recommended",void 0),xt([(0,n.wk)()],kt.prototype,"featured",void 0),xt([(0,n.wk)()],kt.prototype,"filteredWallets",void 0),xt([(0,n.wk)()],kt.prototype,"badge",void 0),xt([(0,n.wk)()],kt.prototype,"mobileFullScreen",void 0),kt=xt([(0,c.EM)("w3m-all-wallets-list")],kt);const Ct=o.AH`
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
`;var Et=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Rt=class extends o.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=s.H.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?o.qy`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await a.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=a.N.state,t=wt.A.markWalletsAsInstalled(e);return e.length?o.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${t.map((e,t)=>o.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:o.qy`
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
      `}onConnectWallet(e){h.a.selectWalletConnector(e)}};Rt.styles=Ct,Et([(0,n.wk)()],Rt.prototype,"loading",void 0),Et([(0,n.wk)()],Rt.prototype,"mobileFullScreen",void 0),Et([(0,n.MZ)()],Rt.prototype,"query",void 0),Et([(0,n.MZ)()],Rt.prototype,"badge",void 0),Rt=Et([(0,c.EM)("w3m-all-wallets-search")],Rt);var It=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Tt=class extends o.WF{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=r.w.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return o.qy`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?o.qy`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:o.qy`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",I.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return r.w.isMobile()?o.qy`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){f.I.push("ConnectingWalletConnect")}};It([(0,n.wk)()],Tt.prototype,"search",void 0),It([(0,n.wk)()],Tt.prototype,"badge",void 0),Tt=It([(0,c.EM)("w3m-all-wallets-view")],Tt);const At=W.AH`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Mt=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Pt=class extends o.WF{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",o.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        tabindex=${(0,d.J)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?o.qy`<wui-image
        icon=${this.icon}
        iconColor=${(0,d.J)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:o.qy`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?o.qy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:o.qy`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};Pt.styles=[P.W5,P.fD,At],Mt([(0,n.MZ)()],Pt.prototype,"imageSrc",void 0),Mt([(0,n.MZ)()],Pt.prototype,"icon",void 0),Mt([(0,n.MZ)()],Pt.prototype,"iconColor",void 0),Mt([(0,n.MZ)({type:Boolean})],Pt.prototype,"loading",void 0),Mt([(0,n.MZ)()],Pt.prototype,"tabIdx",void 0),Mt([(0,n.MZ)({type:Boolean})],Pt.prototype,"disabled",void 0),Mt([(0,n.MZ)({type:Boolean})],Pt.prototype,"rightIcon",void 0),Mt([(0,n.MZ)({type:Boolean})],Pt.prototype,"rounded",void 0),Mt([(0,n.MZ)({type:Boolean})],Pt.prototype,"fullSize",void 0),Pt=Mt([(0,S.E)("wui-list-item")],Pt);var St=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Wt=class extends o.WF{constructor(){super(...arguments),this.wallet=f.I.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return o.qy`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(g.E.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),r.w.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};Wt=St([(0,c.EM)("w3m-downloads-view")],Wt)},424357:(e,t,i)=>{const o=i(130208);function n(e){this.mode=o.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,i,o;for(t=0;t+3<=this.data.length;t+=3)i=this.data.substr(t,3),o=parseInt(i,10),e.put(o,10);const n=this.data.length-t;n>0&&(i=this.data.substr(t),o=parseInt(i,10),e.put(o,3*n+1))},e.exports=n},424861:(e,t,i)=>{const o=i(130208),n=i(256886);function r(e){this.mode=o.KANJI,this.data=e}r.getBitsLength=function(e){return 13*e},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=n.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else{if(!(i>=57408&&i<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");i-=49472}i=192*(i>>>8&255)+(255&i),e.put(i,13)}},e.exports=r},497518:(e,t,i)=>{const o=i(549953),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case o.L:return n[4*(e-1)+0];case o.M:return n[4*(e-1)+1];case o.Q:return n[4*(e-1)+2];case o.H:return n[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case o.L:return r[4*(e-1)+0];case o.M:return r[4*(e-1)+1];case o.Q:return r[4*(e-1)+2];case o.H:return r[4*(e-1)+3];default:return}}},549953:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,i){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(o){return i}}},581332:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const i=3,o=3,n=40,r=10;function s(e,i,o){switch(e){case t.Patterns.PATTERN000:return(i+o)%2==0;case t.Patterns.PATTERN001:return i%2==0;case t.Patterns.PATTERN010:return o%3==0;case t.Patterns.PATTERN011:return(i+o)%3==0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2==0;case t.Patterns.PATTERN101:return i*o%2+i*o%3==0;case t.Patterns.PATTERN110:return(i*o%2+i*o%3)%2==0;case t.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const t=e.size;let o=0,n=0,r=0,s=null,a=null;for(let l=0;l<t;l++){n=r=0,s=a=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===s?n++:(n>=5&&(o+=i+(n-5)),s=t,n=1),t=e.get(c,l),t===a?r++:(r>=5&&(o+=i+(r-5)),a=t,r=1)}n>=5&&(o+=i+(n-5)),r>=5&&(o+=i+(r-5))}return o},t.getPenaltyN2=function(e){const t=e.size;let i=0;for(let o=0;o<t-1;o++)for(let n=0;n<t-1;n++){const t=e.get(o,n)+e.get(o,n+1)+e.get(o+1,n)+e.get(o+1,n+1);4!==t&&0!==t||i++}return i*o},t.getPenaltyN3=function(e){const t=e.size;let i=0,o=0,r=0;for(let n=0;n<t;n++){o=r=0;for(let s=0;s<t;s++)o=o<<1&2047|e.get(n,s),s>=10&&(1488===o||93===o)&&i++,r=r<<1&2047|e.get(s,n),s>=10&&(1488===r||93===r)&&i++}return i*n},t.getPenaltyN4=function(e){let t=0;const i=e.data.length;for(let o=0;o<i;o++)t+=e.data[o];return Math.abs(Math.ceil(100*t/i/5)-10)*r},t.applyMask=function(e,t){const i=t.size;for(let o=0;o<i;o++)for(let n=0;n<i;n++)t.isReserved(n,o)||t.xor(n,o,s(e,n,o))},t.getBestMask=function(e,i){const o=Object.keys(t.Patterns).length;let n=0,r=1/0;for(let s=0;s<o;s++){i(s),t.applyMask(s,e);const o=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),o<r&&(r=o,n=s)}return n}},592726:(e,t)=>{function i(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");const i=parseInt(t.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,o=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:o,scale:o?4:n,margin:t,color:{dark:i(e.color.dark||"#000000ff"),light:i(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,i){const o=t.getScale(e,i);return Math.floor((e+2*i.margin)*o)},t.qrToImageData=function(e,i,o){const n=i.modules.size,r=i.modules.data,s=t.getScale(n,o),a=Math.floor((n+2*o.margin)*s),l=o.margin*s,c=[o.color.light,o.color.dark];for(let t=0;t<a;t++)for(let i=0;i<a;i++){let d=4*(t*a+i),u=o.color.light;if(t>=l&&i>=l&&t<a-l&&i<a-l){u=c[r[Math.floor((t-l)/s)*n+Math.floor((i-l)/s)]?1:0]}e[d++]=u.r,e[d++]=u.g,e[d++]=u.b,e[d]=u.a}}},599899:e=>{function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){const t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let i=0;i<t;i++)this.putBit(1==(e>>>t-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},611433:(e,t,i)=>{const o=i(130208),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function r(e){this.mode=o.ALPHANUMERIC,this.data=e}r.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let i=45*n.indexOf(this.data[t]);i+=n.indexOf(this.data[t+1]),e.put(i,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=r},684565:(e,t,i)=>{const o=i(256886),n=o.getBCHDigit(1335);t.getEncodedBits=function(e,t){const i=e.bit<<3|t;let r=i<<10;for(;o.getBCHDigit(r)-n>=0;)r^=1335<<o.getBCHDigit(r)-n;return 21522^(i<<10|r)}},729801:(e,t,i)=>{const o=i(130208),n=i(424357),r=i(611433),s=i(325822),a=i(424861),l=i(767044),c=i(256886),d=i(76320);function u(e){return unescape(encodeURIComponent(e)).length}function h(e,t,i){const o=[];let n;for(;null!==(n=e.exec(i));)o.push({data:n[0],index:n.index,mode:t,length:n[0].length});return o}function p(e){const t=h(l.NUMERIC,o.NUMERIC,e),i=h(l.ALPHANUMERIC,o.ALPHANUMERIC,e);let n,r;c.isKanjiModeEnabled()?(n=h(l.BYTE,o.BYTE,e),r=h(l.KANJI,o.KANJI,e)):(n=h(l.BYTE_KANJI,o.BYTE,e),r=[]);return t.concat(i,n,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function g(e,t){switch(t){case o.NUMERIC:return n.getBitsLength(e);case o.ALPHANUMERIC:return r.getBitsLength(e);case o.KANJI:return a.getBitsLength(e);case o.BYTE:return s.getBitsLength(e)}}function f(e,t){let i;const l=o.getBestModeForData(e);if(i=o.from(t,l),i!==o.BYTE&&i.bit<l.bit)throw new Error('"'+e+'" cannot be encoded with mode '+o.toString(i)+".\n Suggested mode is: "+o.toString(l));switch(i!==o.KANJI||c.isKanjiModeEnabled()||(i=o.BYTE),i){case o.NUMERIC:return new n(e);case o.ALPHANUMERIC:return new r(e);case o.KANJI:return new a(e);case o.BYTE:return new s(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(f(t,null)):t.data&&e.push(f(t.data,t.mode)),e},[])},t.fromString=function(e,i){const n=function(e){const t=[];for(let i=0;i<e.length;i++){const n=e[i];switch(n.mode){case o.NUMERIC:t.push([n,{data:n.data,mode:o.ALPHANUMERIC,length:n.length},{data:n.data,mode:o.BYTE,length:n.length}]);break;case o.ALPHANUMERIC:t.push([n,{data:n.data,mode:o.BYTE,length:n.length}]);break;case o.KANJI:t.push([n,{data:n.data,mode:o.BYTE,length:u(n.data)}]);break;case o.BYTE:t.push([{data:n.data,mode:o.BYTE,length:u(n.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),r=function(e,t){const i={},n={start:{}};let r=["start"];for(let s=0;s<e.length;s++){const a=e[s],l=[];for(let e=0;e<a.length;e++){const c=a[e],d=""+s+e;l.push(d),i[d]={node:c,lastCount:0},n[d]={};for(let e=0;e<r.length;e++){const s=r[e];i[s]&&i[s].node.mode===c.mode?(n[s][d]=g(i[s].lastCount+c.length,c.mode)-g(i[s].lastCount,c.mode),i[s].lastCount+=c.length):(i[s]&&(i[s].lastCount=c.length),n[s][d]=g(c.length,c.mode)+4+o.getCharCountIndicator(c.mode,t))}}r=l}for(let o=0;o<r.length;o++)n[r[o]].end=0;return{map:n,table:i}}(n,i),s=d.find_path(r.map,"start","end"),a=[];for(let t=1;t<s.length-1;t++)a.push(r.table[s[t]].node);return t.fromArray(function(e){return e.reduce(function(e,t){const i=e.length-1>=0?e[e.length-1]:null;return i&&i.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}(a))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},731427:(e,t,i)=>{const o=i(256886),n=i(497518),r=i(549953),s=i(130208),a=i(821878),l=o.getBCHDigit(7973);function c(e,t){return s.getCharCountIndicator(e,t)+4}function d(e,t){let i=0;return e.forEach(function(e){const o=c(e.mode,t);i+=o+e.getBitsLength()}),i}t.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,i){if(!a.isValid(e))throw new Error("Invalid QR Code version");void 0===i&&(i=s.BYTE);const r=8*(o.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t));if(i===s.MIXED)return r;const l=r-c(i,e);switch(i){case s.NUMERIC:return Math.floor(l/10*3);case s.ALPHANUMERIC:return Math.floor(l/11*2);case s.KANJI:return Math.floor(l/13);case s.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,i){let o;const n=r.from(i,r.M);if(Array.isArray(e)){if(e.length>1)return function(e,i){for(let o=1;o<=40;o++)if(d(e,o)<=t.getCapacity(o,i,s.MIXED))return o}(e,n);if(0===e.length)return 1;o=e[0]}else o=e;return function(e,i,o){for(let n=1;n<=40;n++)if(i<=t.getCapacity(n,o,e))return n}(o.mode,o.getLength(),n)},t.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;o.getBCHDigit(t)-l>=0;)t^=7973<<o.getBCHDigit(t)-l;return e<<12|t}},756756:(e,t,i)=>{const o=i(592726);function n(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function r(e,t,i){let o=e+t;return void 0!==i&&(o+=" "+i),o}t.render=function(e,t,i){const s=o.getOptions(t),a=e.modules.size,l=e.modules.data,c=a+2*s.margin,d=s.color.light.a?"<path "+n(s.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+n(s.color.dark,"stroke")+' d="'+function(e,t,i){let o="",n=0,s=!1,a=0;for(let l=0;l<e.length;l++){const c=Math.floor(l%t),d=Math.floor(l/t);c||s||(s=!0),e[l]?(a++,l>0&&c>0&&e[l-1]||(o+=s?r("M",c+i,.5+d+i):r("m",n,0),n=0,s=!1),c+1<t&&e[l+1]||(o+=r("h",a),a=0)):n++}return o}(l,a,s.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+h+' shape-rendering="crispEdges">'+d+u+"</svg>\n";return"function"==typeof i&&i(null,p),p}},767044:(e,t)=>{const i="[0-9]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";t.KANJI=new RegExp(o,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(n,"g"),t.NUMERIC=new RegExp(i,"g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const r=new RegExp("^"+o+"$"),s=new RegExp("^"+i+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return r.test(e)},t.testNumeric=function(e){return s.test(e)},t.testAlphanumeric=function(e){return a.test(e)}},806421:(e,t,i)=>{const o=i(256886).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,i=o(e),n=145===i?26:2*Math.ceil((i-13)/(2*t-2)),r=[i-7];for(let o=1;o<t-1;o++)r[o]=r[o-1]-n;return r.push(6),r.reverse()},t.getPositions=function(e){const i=[],o=t.getRowColCoords(e),n=o.length;for(let t=0;t<n;t++)for(let e=0;e<n;e++)0===t&&0===e||0===t&&e===n-1||t===n-1&&0===e||i.push([o[t],o[e]]);return i}},821878:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},887583:(e,t,i)=>{const o=i(91333),n=i(890157),r=i(247899),s=i(756756);function a(e,t,i,r,s){const a=[].slice.call(arguments,1),l=a.length,c="function"==typeof a[l-1];if(!c&&!o())throw new Error("Callback required as last argument");if(!c){if(l<1)throw new Error("Too few arguments provided");return 1===l?(i=t,t=r=void 0):2!==l||t.getContext||(r=i,i=t,t=void 0),new Promise(function(o,s){try{const s=n.create(i,r);o(e(s,t,r))}catch(a){s(a)}})}if(l<2)throw new Error("Too few arguments provided");2===l?(s=i,i=t,t=r=void 0):3===l&&(t.getContext&&void 0===s?(s=r,r=void 0):(s=r,r=i,i=t,t=void 0));try{const o=n.create(i,r);s(null,e(o,t,r))}catch(d){s(d)}}t.create=n.create,t.toCanvas=a.bind(null,r.render),t.toDataURL=a.bind(null,r.renderToDataURL),t.toString=a.bind(null,function(e,t,i){return s.render(e,i)})},890157:(e,t,i)=>{const o=i(256886),n=i(549953),r=i(599899),s=i(208820),a=i(806421),l=i(307756),c=i(581332),d=i(497518),u=i(74764),h=i(731427),p=i(684565),g=i(130208),f=i(729801);function w(e,t,i){const o=e.size,n=p.getEncodedBits(t,i);let r,s;for(r=0;r<15;r++)s=1==(n>>r&1),r<6?e.set(r,8,s,!0):r<8?e.set(r+1,8,s,!0):e.set(o-15+r,8,s,!0),r<8?e.set(8,o-r-1,s,!0):r<9?e.set(8,15-r-1+1,s,!0):e.set(8,15-r-1,s,!0);e.set(o-8,8,1,!0)}function m(e,t,i){const n=new r;i.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(n)});const s=8*(o.getSymbolTotalCodewords(e)-d.getTotalCodewordsCount(e,t));for(n.getLengthInBits()+4<=s&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);const a=(s-n.getLengthInBits())/8;for(let o=0;o<a;o++)n.put(o%2?17:236,8);return function(e,t,i){const n=o.getSymbolTotalCodewords(t),r=d.getTotalCodewordsCount(t,i),s=n-r,a=d.getBlocksCount(t,i),l=n%a,c=a-l,h=Math.floor(n/a),p=Math.floor(s/a),g=p+1,f=h-p,w=new u(f);let m=0;const b=new Array(a),y=new Array(a);let v=0;const x=new Uint8Array(e.buffer);for(let o=0;o<a;o++){const e=o<c?p:g;b[o]=x.slice(m,m+e),y[o]=w.encode(b[o]),m+=e,v=Math.max(v,e)}const $=new Uint8Array(n);let k,C,E=0;for(k=0;k<v;k++)for(C=0;C<a;C++)k<b[C].length&&($[E++]=b[C][k]);for(k=0;k<f;k++)for(C=0;C<a;C++)$[E++]=y[C][k];return $}(n,e,t)}function b(e,t,i,n){let r;if(Array.isArray(e))r=f.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let o=t;if(!o){const t=f.rawSplit(e);o=h.getBestVersionForData(t,i)}r=f.fromString(e,o||40)}}const d=h.getBestVersionForData(r,i);if(!d)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<d)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+d+".\n")}else t=d;const u=m(t,i,r),p=o.getSymbolSize(t),g=new s(p);return function(e,t){const i=e.size,o=l.getPositions(t);for(let n=0;n<o.length;n++){const t=o[n][0],r=o[n][1];for(let o=-1;o<=7;o++)if(!(t+o<=-1||i<=t+o))for(let n=-1;n<=7;n++)r+n<=-1||i<=r+n||(o>=0&&o<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===o||6===o)||o>=2&&o<=4&&n>=2&&n<=4?e.set(t+o,r+n,!0,!0):e.set(t+o,r+n,!1,!0))}}(g,t),function(e){const t=e.size;for(let i=8;i<t-8;i++){const t=i%2==0;e.set(i,6,t,!0),e.set(6,i,t,!0)}}(g),function(e,t){const i=a.getPositions(t);for(let o=0;o<i.length;o++){const t=i[o][0],n=i[o][1];for(let i=-2;i<=2;i++)for(let o=-2;o<=2;o++)-2===i||2===i||-2===o||2===o||0===i&&0===o?e.set(t+i,n+o,!0,!0):e.set(t+i,n+o,!1,!0)}}(g,t),w(g,i,0),t>=7&&function(e,t){const i=e.size,o=h.getEncodedBits(t);let n,r,s;for(let a=0;a<18;a++)n=Math.floor(a/3),r=a%3+i-8-3,s=1==(o>>a&1),e.set(n,r,s,!0),e.set(r,n,s,!0)}(g,t),function(e,t){const i=e.size;let o=-1,n=i-1,r=7,s=0;for(let a=i-1;a>0;a-=2)for(6===a&&a--;;){for(let i=0;i<2;i++)if(!e.isReserved(n,a-i)){let o=!1;s<t.length&&(o=1==(t[s]>>>r&1)),e.set(n,a-i,o),r--,-1===r&&(s++,r=7)}if(n+=o,n<0||i<=n){n-=o,o=-o;break}}}(g,u),isNaN(n)&&(n=c.getBestMask(g,w.bind(null,g,i))),c.applyMask(n,g),w(g,i,n),{modules:g,version:t,errorCorrectionLevel:i,maskPattern:n,segments:r}}t.create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");let i,r,s=n.M;return void 0!==t&&(s=n.from(t.errorCorrectionLevel,n.M),i=h.from(t.version),r=c.from(t.maskPattern),t.toSJISFunc&&o.setToSJISFunction(t.toSJISFunc)),b(e,i,s,r)}},969049:e=>{"use strict";e.exports=function(e){for(var t=[],i=e.length,o=0;o<i;o++){var n=e.charCodeAt(o);if(n>=55296&&n<=56319&&i>o+1){var r=e.charCodeAt(o+1);r>=56320&&r<=57343&&(n=1024*(n-55296)+r-56320+65536,o+=1)}n<128?t.push(n):n<2048?(t.push(n>>6|192),t.push(63&n|128)):n<55296||n>=57344&&n<65536?(t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128)):n>=65536&&n<=1114111?(t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}}}]);