"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[74129],{374129:(e,t,o)=>{o.r(t),o.d(t,{AppKitModal:()=>Ze,W3mListWallet:()=>Ye,W3mModal:()=>_e,W3mModalBase:()=>Ve,W3mRouterContainer:()=>Qe});var i=o(197199),a=o(6357),r=o(535198),n=o(975910),s=o(824376),c=o(757019),l=o(91111),d=o(806056),u=o(236010),p=o(188249),w=o(778508),h=o(14400),m=o(801122);const g={isUnsupportedChainView:()=>"UnsupportedChain"===w.I.state.view||"SwitchNetwork"===w.I.state.view&&w.I.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void l.W.shake();await m.U.isSIWXCloseDisabled()?l.W.shake():("DataCapture"!==w.I.state.view&&"DataCaptureOtpConfirm"!==w.I.state.view||h.x.disconnect(),l.W.close())}};var y=o(568996),v=o(121871),f=o(226742),b=o(552095),k=o(204707),T=o(157679),x=o(110152),S=o(382752),A=o(974496),C=o(562944),P=o(580036);const $={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,o){const i=$.getGasPriceInEther(t,o);return T.S.bigNumber(e).times(i).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:i}){const a=T.S.bigNumber(e).times(t),r=T.S.bigNumber(i).times(o);return a.minus(r).div(a).times(100).toNumber()},getMaxSlippage(e,t){const o=T.S.bigNumber(e).div(100);return T.S.multiply(t,o).toNumber()},getProviderFee:(e,t=.0085)=>T.S.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas(e,t){const o=t||"0";return!!T.S.bigNumber(e).eq(0)||T.S.bigNumber(T.S.bigNumber(o)).gt(e)},isInsufficientSourceTokenForSwap(e,t,o){const i=o?.find(e=>e.address===t)?.quantity?.numeric;return T.S.bigNumber(i||"0").lt(e)}};var I=o(923082),W=o(471655),E=o(775595),N=o(390184);const R=15e4;Error;const O={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:C.oU.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},D=(0,b.BX)({...O}),q={state:D,subscribe:e=>(0,b.B1)(D,()=>e(D)),subscribeKey:(e,t)=>(0,k.u$)(D,e,t),getParams(){const e=d.W.state.activeChain,t=d.W.getAccountData(e)?.caipAddress??d.W.state.activeCaipAddress,o=f.w.getPlainAddress(t),i=(0,A.K1)(),a=u.a.getConnectorId(d.W.state.activeChain);if(!o)throw new Error("No address found to swap the tokens from.");const r=!D.toToken?.address||!D.toToken?.decimals,n=!D.sourceToken?.address||!D.sourceToken?.decimals||!T.S.bigNumber(D.sourceTokenAmount).gt(0),c=!D.sourceTokenAmount;return{networkAddress:i,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:D.sourceToken?.address,toTokenAddress:D.toToken?.address,toTokenAmount:D.toTokenAmount,toTokenDecimals:D.toToken?.decimals,sourceTokenAmount:D.sourceTokenAmount,sourceTokenDecimals:D.sourceToken?.decimals,invalidToToken:r,invalidSourceToken:n,invalidSourceTokenAmount:c,availableToSwap:t&&!r&&!n&&!c,isAuthConnector:a===s.o.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e)return D.sourceToken=e,D.sourceTokenAmount="",void(D.sourceTokenPriceInUSD=0);D.sourceToken=e,await z.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){D.sourceTokenAmount=e},async setToToken(e){if(!e)return D.toToken=e,D.toTokenAmount="",void(D.toTokenPriceInUSD=0);D.toToken=e,await z.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){D.toTokenAmount=e?T.S.toFixed(e,6):""},async setTokenPrice(e,t){let o=D.tokensPriceMap[e]||0;o||(D.loadingPrices=!0,o=await z.getAddressPrice(e)),"sourceToken"===t?D.sourceTokenPriceInUSD=o:"toToken"===t&&(D.toTokenPriceInUSD=o),D.loadingPrices&&(D.loadingPrices=!1),z.getParams().availableToSwap&&!D.switchingTokens&&z.swapTokens()},async switchTokens(){if(!D.initializing&&D.initialized&&!D.switchingTokens){D.switchingTokens=!0;try{const e=D.toToken?{...D.toToken}:void 0,t=D.sourceToken?{...D.sourceToken}:void 0,o=e&&""===D.toTokenAmount?"1":D.toTokenAmount;z.setSourceTokenAmount(o),z.setToTokenAmount(""),await z.setSourceToken(e),await z.setToToken(t),D.switchingTokens=!1,z.swapTokens()}catch(e){throw D.switchingTokens=!1,e}}},resetState(){D.myTokensWithBalance=O.myTokensWithBalance,D.tokensPriceMap=O.tokensPriceMap,D.initialized=O.initialized,D.initializing=O.initializing,D.switchingTokens=O.switchingTokens,D.sourceToken=O.sourceToken,D.sourceTokenAmount=O.sourceTokenAmount,D.sourceTokenPriceInUSD=O.sourceTokenPriceInUSD,D.toToken=O.toToken,D.toTokenAmount=O.toTokenAmount,D.toTokenPriceInUSD=O.toTokenPriceInUSD,D.networkPrice=O.networkPrice,D.networkTokenSymbol=O.networkTokenSymbol,D.networkBalanceInUSD=O.networkBalanceInUSD,D.inputError=O.inputError},resetValues(){const{networkAddress:e}=z.getParams(),t=D.tokens?.find(t=>t.address===e);z.setSourceToken(t),z.setToToken(void 0)},getApprovalLoadingState:()=>D.loadingApprovalTransaction,clearError(){D.transactionError=void 0},async initializeState(){if(!D.initializing){if(D.initializing=!0,!D.initialized)try{await z.fetchTokens(),D.initialized=!0}catch(e){D.initialized=!1,v.P.showError("Failed to initialize swap"),w.I.goBack()}D.initializing=!1}},async fetchTokens(){const{networkAddress:e}=z.getParams();await z.getNetworkTokenPrice(),await z.getMyTokensWithBalance();const t=D.myTokensWithBalance?.find(t=>t.address===e);t&&(D.networkTokenSymbol=t.symbol,z.setSourceToken(t),z.setSourceTokenAmount("0"))},async getTokenList(){const e=d.W.state.activeCaipNetwork?.caipNetworkId;if(D.caipNetworkId!==e||!D.tokens)try{D.tokensLoading=!0;const t=await P.s.getTokenList(e);D.tokens=t,D.caipNetworkId=e,D.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0),D.suggestedTokens=t.filter(e=>!!C.oU.SWAP_SUGGESTED_TOKENS.includes(e.symbol))}catch(t){D.tokens=[],D.popularTokens=[],D.suggestedTokens=[]}finally{D.tokensLoading=!1}},async getAddressPrice(e){const t=D.tokensPriceMap[e];if(t)return t;const o=await E.T.fetchTokenPrice({addresses:[e]}),i=o?.fungibles||[],a=[...D.tokens||[],...D.myTokensWithBalance||[]],r=a?.find(t=>t.address===e)?.symbol,n=i.find(e=>e.symbol.toLowerCase()===r?.toLowerCase())?.price||0,s=parseFloat(n.toString());return D.tokensPriceMap[e]=s,s},async getNetworkTokenPrice(){const{networkAddress:e}=z.getParams(),t=await E.T.fetchTokenPrice({addresses:[e]}).catch(()=>(v.P.showError("Failed to fetch network token price"),{fungibles:[]})),o=t.fungibles?.[0],i=o?.price.toString()||"0";D.tokensPriceMap[e]=parseFloat(i),D.networkTokenSymbol=o?.symbol||"",D.networkPrice=i},async getMyTokensWithBalance(e){const t=await S.Z.getMyTokensWithBalance(e),o=P.s.mapBalancesToSwapTokens(t);o&&(await z.getInitialGasPrice(),z.setBalances(o))},setBalances(e){const{networkAddress:t}=z.getParams(),o=d.W.state.activeCaipNetwork;if(!o)return;const i=e.find(e=>e.address===t);e.forEach(e=>{D.tokensPriceMap[e.address]=e.price||0}),D.myTokensWithBalance=e.filter(e=>e.address.startsWith(o.caipNetworkId)),D.networkBalanceInUSD=i?T.S.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){const e=await P.s.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(d.W.state?.activeCaipNetwork?.chainNamespace){case s.o.CHAIN.SOLANA:return D.gasFee=e.standard??"0",D.gasPriceInUSD=T.S.multiply(e.standard,D.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(D.gasFee),gasPriceInUSD:Number(D.gasPriceInUSD)};case s.o.CHAIN.EVM:default:const t=e.standard??"0",o=BigInt(t),i=BigInt(R),a=$.getGasPriceInUSD(D.networkPrice,i,o);return D.gasFee=t,D.gasPriceInUSD=a,{gasPrice:o,gasPriceInUSD:a}}},async swapTokens(){const e=d.W.getAccountData()?.address,t=D.sourceToken,o=D.toToken,i=T.S.bigNumber(D.sourceTokenAmount).gt(0);if(i||z.setToTokenAmount(""),!o||!t||D.loadingPrices||!i||!e)return;D.loadingQuote=!0;const a=T.S.bigNumber(D.sourceTokenAmount).times(10**t.decimals).round(0);try{const i=await E.T.fetchSwapQuote({userAddress:e,from:t.address,to:o.address,gasPrice:D.gasFee,amount:a.toString()});D.loadingQuote=!1;const r=i?.quotes?.[0]?.toAmount;if(!r)return void W.h.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");const n=T.S.bigNumber(r).div(10**o.decimals).toString();z.setToTokenAmount(n);z.hasInsufficientToken(D.sourceTokenAmount,t.address)?D.inputError="Insufficient balance":(D.inputError=void 0,z.setTransactionDetails())}catch(r){const e=await P.s.handleSwapError(r);D.loadingQuote=!1,D.inputError=e||"Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=z.getParams(),o=D.sourceToken,i=D.toToken;if(e&&t&&o&&i&&!D.loadingQuote)try{D.loadingBuildTransaction=!0;let t;return t=await P.s.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:D.sourceTokenAmount,sourceTokenDecimals:o.decimals})?await z.createSwapTransaction():await z.createAllowanceTransaction(),D.loadingBuildTransaction=!1,D.fetchError=!1,t}catch(a){return w.I.goBack(),v.P.showError("Failed to check allowance"),D.loadingBuildTransaction=!1,D.approvalTransaction=void 0,D.swapTransaction=void 0,void(D.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:o}=z.getParams();if(e&&o){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const i=await E.T.generateApproveCalldata({from:t,to:o,userAddress:e}),a=f.w.getPlainAddress(i.tx.from);if(!a)throw new Error("SwapController:createAllowanceTransaction - address is required");const r={data:i.tx.data,to:a,gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:D.toTokenAmount};return D.swapTransaction=void 0,D.approvalTransaction={data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount},{data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount}}catch(i){return w.I.goBack(),v.P.showError("Failed to create approval transaction"),D.approvalTransaction=void 0,D.swapTransaction=void 0,void(D.fetchError=!0)}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=z.getParams(),i=D.sourceToken,a=D.toToken;if(!(t&&o&&i&&a))return;const r=h.x.parseUnits(o,i.decimals)?.toString();try{const o=await E.T.generateSwapCalldata({userAddress:t,from:i.address,to:a.address,amount:r,disableEstimate:!0}),n=i.address===e,s=BigInt(o.tx.eip155.gas),c=BigInt(o.tx.eip155.gasPrice),l=f.w.getPlainAddress(o.tx.to);if(!l)throw new Error("SwapController:createSwapTransaction - address is required");const d={data:o.tx.data,to:l,gas:s,gasPrice:c,value:n?BigInt(r??"0"):BigInt("0"),toAmount:D.toTokenAmount};return D.gasPriceInUSD=$.getGasPriceInUSD(D.networkPrice,s,c),D.approvalTransaction=void 0,D.swapTransaction=d,d}catch(n){return w.I.goBack(),v.P.showError("Failed to create transaction"),D.approvalTransaction=void 0,D.swapTransaction=void 0,void(D.fetchError=!0)}},onEmbeddedWalletApprovalSuccess(){v.P.showLoading("Approve limit increase in your wallet"),w.I.replace("SwapPreview")},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:o}=z.getParams();D.loadingApprovalTransaction=!0;o?w.I.pushTransactionStack({onSuccess:z.onEmbeddedWalletApprovalSuccess}):v.P.showLoading("Approve limit increase in your wallet");try{await h.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:s.o.CHAIN.EVM}),await z.swapTokens(),await z.getTransaction(),D.approvalTransaction=void 0,D.loadingApprovalTransaction=!1}catch(i){const e=i;D.transactionError=e?.displayMessage,D.loadingApprovalTransaction=!1,v.P.showError(e?.displayMessage||"Transaction error"),N.E.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:d.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:z.state.sourceToken?.symbol||"",swapToToken:z.state.toToken?.symbol||"",swapFromAmount:z.state.sourceTokenAmount||"",swapToAmount:z.state.toTokenAmount||"",isSmartAccount:(0,A.lj)(s.o.CHAIN.EVM)===x.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;const{fromAddress:t,toTokenAmount:o,isAuthConnector:i}=z.getParams();D.loadingTransaction=!0;const a=`Swapping ${D.sourceToken?.symbol} to ${T.S.formatNumberToLocalString(o,3)} ${D.toToken?.symbol}`,r=`Swapped ${D.sourceToken?.symbol} to ${T.S.formatNumberToLocalString(o,3)} ${D.toToken?.symbol}`;i?w.I.pushTransactionStack({onSuccess(){w.I.replace("Account"),v.P.showLoading(a),q.resetState()}}):v.P.showLoading("Confirm transaction in your wallet");try{const o=[D.sourceToken?.address,D.toToken?.address].join(","),a=await h.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:s.o.CHAIN.EVM});return D.loadingTransaction=!1,v.P.showSuccess(r),N.E.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:d.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:z.state.sourceToken?.symbol||"",swapToToken:z.state.toToken?.symbol||"",swapFromAmount:z.state.sourceTokenAmount||"",swapToAmount:z.state.toTokenAmount||"",isSmartAccount:(0,A.lj)(s.o.CHAIN.EVM)===x.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),q.resetState(),i||w.I.replace("Account"),q.getMyTokensWithBalance(o),a}catch(n){const e=n;return D.transactionError=e?.displayMessage,D.loadingTransaction=!1,v.P.showError(e?.displayMessage||"Transaction error"),void N.E.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:d.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:z.state.sourceToken?.symbol||"",swapToToken:z.state.toToken?.symbol||"",swapFromAmount:z.state.sourceTokenAmount||"",swapToAmount:z.state.toTokenAmount||"",isSmartAccount:(0,A.lj)(s.o.CHAIN.EVM)===x.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(e,t)=>$.isInsufficientSourceTokenForSwap(e,t,D.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=z.getParams();e&&t&&(D.gasPriceInUSD=$.getGasPriceInUSD(D.networkPrice,BigInt(D.gasFee),BigInt(R)),D.priceImpact=$.getPriceImpact({sourceTokenAmount:D.sourceTokenAmount,sourceTokenPriceInUSD:D.sourceTokenPriceInUSD,toTokenPriceInUSD:D.toTokenPriceInUSD,toTokenAmount:D.toTokenAmount}),D.maxSlippage=$.getMaxSlippage(D.slippage,D.toTokenAmount),D.providerFee=$.getProviderFee(D.sourceTokenAmount))}},z=(0,I.X)(q);var B=o(441454),F=o(926109),M=o(243494),U=o(867569);const H=U.AH`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var j=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let L=class extends i.WF{render(){return i.qy`<slot></slot>`}};L.styles=[F.W5,H],L=j([(0,M.E)("wui-card")],L);o(460310),o(204694),o(354706),o(648832);const V=U.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
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
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var _=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};const Z={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let K=class extends i.WF{constructor(){super(...arguments),this.message="",this.type="info"}render(){return i.qy`
      <wui-flex
        data-type=${(0,r.J)(this.type)}
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
            <wui-icon color="inherit" size="md" name=${Z[this.type]}></wui-icon>
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
    `}onClose(){W.h.close()}};K.styles=[F.W5,V],_([(0,a.MZ)()],K.prototype,"message",void 0),_([(0,a.MZ)()],K.prototype,"type",void 0),K=_([(0,M.E)("wui-alertbar")],K);const G=B.AH`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var Y=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};const X={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let J=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.open=W.h.state.open,this.onOpen(!0),this.unsubscribe.push(W.h.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=W.h.state,o=X[t];return i.qy`
      <wui-alertbar
        message=${e}
        backgroundColor=${o?.backgroundColor}
        iconColor=${o?.iconColor}
        icon=${o?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};J.styles=G,Y([(0,a.wk)()],J.prototype,"open",void 0),J=Y([(0,B.EM)("w3m-alertbar")],J);var Q=o(527601),ee=o(773337);const te=U.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
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
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
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
`;var oe=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let ie=class extends i.WF{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return i.qy`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,r.J)(this.iconSize)}></wui-icon>
    </button>`}};ie.styles=[F.W5,F.fD,te],oe([(0,a.MZ)()],ie.prototype,"icon",void 0),oe([(0,a.MZ)()],ie.prototype,"variant",void 0),oe([(0,a.MZ)()],ie.prototype,"type",void 0),oe([(0,a.MZ)()],ie.prototype,"size",void 0),oe([(0,a.MZ)()],ie.prototype,"iconSize",void 0),oe([(0,a.MZ)({type:Boolean})],ie.prototype,"fullWidth",void 0),oe([(0,a.MZ)({type:Boolean})],ie.prototype,"disabled",void 0),ie=oe([(0,M.E)("wui-icon-button")],ie);o(301608);const ae=U.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
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
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var re=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};const ne={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},se={lg:"lg",md:"md",sm:"sm"};let ce=class extends i.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return i.qy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const e=ne[this.size];return this.text?i.qy`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return i.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const e=se[this.size];return i.qy` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};ce.styles=[F.W5,F.fD,ae],re([(0,a.MZ)()],ce.prototype,"imageSrc",void 0),re([(0,a.MZ)()],ce.prototype,"text",void 0),re([(0,a.MZ)()],ce.prototype,"size",void 0),re([(0,a.MZ)()],ce.prototype,"type",void 0),re([(0,a.MZ)({type:Boolean})],ce.prototype,"disabled",void 0),ce=re([(0,M.E)("wui-select")],ce);o(481355),o(945090);var le=o(841482);const de=B.AH`
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
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
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
`;var ue=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};const pe=["SmartSessionList"],we={PayWithExchange:B.f.tokens.theme.foregroundPrimary};function he(){const e=w.I.state.data?.connector?.name,t=w.I.state.data?.wallet?.name,o=w.I.state.data?.network?.name,i=t??e,a=u.a.getConnectors(),r=1===a.length&&"w3m-email"===a[0]?.id,n=d.W.getAccountData()?.socialProvider;return{Connect:`Connect ${r?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:i?`Get ${i}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:o??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:n?n.charAt(0).toUpperCase()+n.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset"}}let me=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.heading=he()[w.I.state.view],this.network=d.W.state.activeCaipNetwork,this.networkImage=Q.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=w.I.state.view,this.viewDirection="",this.unsubscribe.push(ee.j.subscribeNetworkImages(()=>{this.networkImage=Q.$.getNetworkImage(this.network)}),w.I.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.heading=he()[e]},le.o.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),d.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=Q.$.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=we[w.I.state.view]??B.f.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",e),i.qy`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){N.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),w.I.push("WhatIsAWallet")}async onClose(){await g.safeClose()}rightHeaderTemplate(){const e=c.H?.state?.features?.smartSessions;return"Account"===w.I.state.view&&e?i.qy`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>w.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return i.qy`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){const e=pe.includes(this.view);return i.qy`
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
        ${e?i.qy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=w.I.state,t="Connect"===e,o=c.H.state.enableEmbedded,a="ApproveTransaction"===e,n="ConnectingSiwe"===e,s="Account"===e,l=c.H.state.enableNetworkSwitch,d=a||n||t&&o;return s&&l?i.qy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,r.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,r.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?i.qy`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:i.qy`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(N.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),w.I.push("Networks"))}isAllowedNetworkSwitch(){const e=d.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,o=e?.find(({id:e})=>e===this.network?.id);return t||!o}onViewChange(){const{history:e}=w.I.state;let t=le.o.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=le.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=w.I.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){w.I.goBack()}};me.styles=de,ue([(0,a.wk)()],me.prototype,"heading",void 0),ue([(0,a.wk)()],me.prototype,"network",void 0),ue([(0,a.wk)()],me.prototype,"networkImage",void 0),ue([(0,a.wk)()],me.prototype,"showBack",void 0),ue([(0,a.wk)()],me.prototype,"prevHistoryLength",void 0),ue([(0,a.wk)()],me.prototype,"view",void 0),ue([(0,a.wk)()],me.prototype,"viewDirection",void 0),me=ue([(0,B.EM)("w3m-header")],me);o(508163),o(238436);const ge=U.AH`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var ye=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let ve=class extends i.WF{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return i.qy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?i.qy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:i.qy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};ve.styles=[F.W5,ge],ye([(0,a.MZ)()],ve.prototype,"message",void 0),ye([(0,a.MZ)()],ve.prototype,"variant",void 0),ve=ye([(0,M.E)("wui-snackbar")],ve);const fe=i.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var be=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let ke=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=v.P.state.open,this.unsubscribe.push(v.P.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=v.P.state;return i.qy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),v.P.state.autoClose&&(this.timeout=setTimeout(()=>v.P.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ke.styles=fe,be([(0,a.wk)()],ke.prototype,"open",void 0),ke=be([(0,B.EM)("w3m-snackbar")],ke);const Te=(0,b.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),xe={state:Te,subscribe:e=>(0,b.B1)(Te,()=>e(Te)),subscribeKey:(e,t)=>(0,k.u$)(Te,e,t),showTooltip({message:e,triggerRect:t,variant:o}){Te.open=!0,Te.message=e,Te.triggerRect=t,Te.variant=o},hide(){Te.open=!1,Te.message="",Te.triggerRect={width:0,height:0,top:0,left:0}}},Se=(0,I.X)(xe);o(51636);const Ae=B.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
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
`;var Ce=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let Pe=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.open=Se.state.open,this.message=Se.state.message,this.triggerRect=Se.state.triggerRect,this.variant=Se.state.variant,this.unsubscribe.push(Se.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,i.qy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};Pe.styles=[Ae],Ce([(0,a.wk)()],Pe.prototype,"open",void 0),Ce([(0,a.wk)()],Pe.prototype,"message",void 0),Ce([(0,a.wk)()],Pe.prototype,"triggerRect",void 0),Ce([(0,a.wk)()],Pe.prototype,"variant",void 0),Pe=Ce([(0,B.EM)("w3m-tooltip")],Pe);const $e={getTabsByNamespace:e=>Boolean(e)&&e===s.o.CHAIN.EVM?!1===c.H.state.remoteFeatures?.activity?le.o.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):le.o.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=w.I.state.view;if(le.o.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:t}=c.H.state,o=c.H.state.features?.legalCheckbox;return!(!e&&!t||o)}return le.o.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};o(158760);const Ie=B.AH`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var We=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let Ee=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=c.H.state.remoteFeatures,this.unsubscribe.push(c.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=c.H.state,o=c.H.state.features?.legalCheckbox;return!e&&!t||o?i.qy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:i.qy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=c.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=c.H.state;return e?i.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=c.H.state;return e?i.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?i.qy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:i.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};Ee.styles=[Ie],We([(0,a.wk)()],Ee.prototype,"remoteFeatures",void 0),Ee=We([(0,B.EM)("w3m-legal-footer")],Ee);o(526751);const Ne=i.AH``;var Re=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let Oe=class extends i.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=c.H.state;return e||t?i.qy`
      <wui-flex
        .padding=${["4","3","3","3"]}
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
    `:null}howDoesItWorkTemplate(){return i.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){N.E.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,A.lj)(d.W.state.activeChain)===x.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.I.push("WhatIsABuy")}};Oe.styles=[Ne],Oe=Re([(0,B.EM)("w3m-onramp-providers-footer")],Oe);const De=B.AH`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var qe=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let ze=class extends i.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=w.I.state.view}firstUpdated(){this.status=$e.hasFooter()?"show":"hide",this.unsubscribe.push(w.I.subscribeKey("view",e=>{if(this.view=e,this.status=$e.hasFooter()?"show":"hide","hide"===this.status){document.documentElement.style.setProperty("--apkt-footer-height","0px")}})),this.resizeObserver=new ResizeObserver(e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return i.qy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return $e.hasFooter()?i.qy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return i.qy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return i.qy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return i.qy` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){N.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),w.I.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};ze.styles=[De],qe([(0,a.wk)()],ze.prototype,"status",void 0),qe([(0,a.wk)()],ze.prototype,"view",void 0),ze=qe([(0,B.EM)("w3m-footer")],ze);const Be=B.AH`
  :host {
    display: block;
    width: inherit;
  }
`;var Fe=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let Me=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.viewState=w.I.state.view,this.history=w.I.state.history.join(","),this.unsubscribe.push(w.I.subscribeKey("view",()=>{this.history=w.I.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return i.qy`${this.templatePageContainer()}`}templatePageContainer(){return i.qy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=w.I.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return i.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return i.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return i.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return i.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return i.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return i.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return i.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return i.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return i.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return i.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return i.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return i.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return i.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return i.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return i.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return i.qy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return i.qy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return i.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return i.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return i.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return i.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return i.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return i.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return i.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return i.qy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return i.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return i.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return i.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return i.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return i.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return i.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return i.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return i.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return i.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return i.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return i.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return i.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return i.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return i.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return i.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return i.qy`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return i.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return i.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return i.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return i.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return i.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return i.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return i.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return i.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return i.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return i.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return i.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return i.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return i.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return i.qy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return i.qy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return i.qy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return i.qy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return i.qy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`}}};Me.styles=[Be],Fe([(0,a.wk)()],Me.prototype,"viewState",void 0),Fe([(0,a.wk)()],Me.prototype,"history",void 0),Me=Fe([(0,B.EM)("w3m-router")],Me);const Ue=B.AH`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
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
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
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
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
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
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
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
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
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
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var He=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};const je="scroll-lock",Le={PayWithExchange:"0",PayWithExchangeSelectAsset:"0"};class Ve extends i.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=c.H.state.enableEmbedded,this.open=l.W.state.open,this.caipAddress=d.W.state.activeCaipAddress,this.caipNetwork=d.W.state.activeCaipNetwork,this.shake=l.W.state.shake,this.filterByNamespace=u.a.state.filterByNamespace,this.padding=B.f.spacing[1],this.mobileFullScreen=c.H.state.enableMobileFullScreen,this.initializeTheming(),p.N.prefetchAnalyticsConfig(),this.unsubscribe.push(l.W.subscribeKey("open",e=>e?this.onOpen():this.onClose()),l.W.subscribeKey("shake",e=>this.shake=e),d.W.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),d.W.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),c.H.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),u.a.subscribeKey("filterByNamespace",e=>{this.filterByNamespace===e||d.W.getAccountData(e)?.caipAddress||(p.N.fetchRecommendedWallets(),this.filterByNamespace=e)}),w.I.subscribeKey("view",()=>{this.dataset.border=$e.hasFooter()?"true":"false",this.padding=Le[w.I.state.view]??B.f.spacing[1]}))}firstUpdated(){if(this.dataset.border=$e.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded)return l.W.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?i.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?i.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return i.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,r.J)(this.enableEmbedded)}"
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
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await g.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=y.W.state,o=B.Zv.getColorTheme(t);(0,B.RF)(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),v.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=je,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${je}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:o}=t.target;!o||o.includes("W3M-")||o.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=d.W.state.isSwitchingNamespace,o="ProfileWallets"===w.I.state.view;e?await this.onConnected({caipAddress:e,isSwitchingNamespace:t,isInProfileView:o}):t||this.enableEmbedded||o||l.W.close(),await m.U.initializeIfEnabled(e),this.caipAddress=e,d.W.setIsSwitchingNamespace(!1)}async onConnected(e){if(e.isInProfileView)return;const{chainNamespace:t,chainId:o,address:i}=n.C.parseCaipAddress(e.caipAddress),a=`${t}:${o}`,r=!f.w.getPlainAddress(this.caipAddress),s=await m.U.getSessions({address:i,caipNetworkId:a}),c=!m.U.getSIWX()||s.some(e=>e.data.accountAddress===i),d=e.isSwitchingNamespace&&c&&!this.enableEmbedded,u=this.enableEmbedded&&r;d?w.I.goBack():u&&l.W.close()}onNewNetwork(e){const t=this.caipNetwork,o=t?.caipNetworkId?.toString(),i=t?.chainNamespace,a=e?.caipNetworkId?.toString(),r=e?.chainNamespace,n=o!==a,c=n&&!(i!==r),u=t?.name===s.o.UNSUPPORTED_NETWORK_NAME,p="ConnectingExternal"===w.I.state.view,h="ProfileWallets"===w.I.state.view,m=!d.W.getAccountData(e?.chainNamespace)?.caipAddress,g="UnsupportedChain"===w.I.state.view,y=l.W.state.open;let v=!1;this.enableEmbedded&&"SwitchNetwork"===w.I.state.view&&(v=!0),n&&z.resetState(),!y||p||h||(m?n&&(v=!0):(g||c&&!u)&&(v=!0)),v&&"SIWXSignMessage"!==w.I.state.view&&w.I.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(p.N.prefetch(),p.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}Ve.styles=Ue,He([(0,a.MZ)({type:Boolean})],Ve.prototype,"enableEmbedded",void 0),He([(0,a.wk)()],Ve.prototype,"open",void 0),He([(0,a.wk)()],Ve.prototype,"caipAddress",void 0),He([(0,a.wk)()],Ve.prototype,"caipNetwork",void 0),He([(0,a.wk)()],Ve.prototype,"shake",void 0),He([(0,a.wk)()],Ve.prototype,"filterByNamespace",void 0),He([(0,a.wk)()],Ve.prototype,"padding",void 0),He([(0,a.wk)()],Ve.prototype,"mobileFullScreen",void 0);let _e=class extends Ve{};_e=He([(0,B.EM)("w3m-modal")],_e);let Ze=class extends Ve{};Ze=He([(0,B.EM)("appkit-modal")],Ze);o(739033);const Ke=B.AH`
  :host {
    width: 100%;
  }
`;var Ge=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let Ye=class extends i.WF{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1);e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&N.E.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:w.I.state.view,displayIndex:this.displayIndex}))}render(){return i.qy`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,r.J)(this.imageSrc)}
        name=${this.name}
        size=${(0,r.J)(this.size)}
        tagLabel=${(0,r.J)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `}};Ye.styles=Ke,Ge([(0,a.MZ)({type:Array})],Ye.prototype,"walletImages",void 0),Ge([(0,a.MZ)()],Ye.prototype,"imageSrc",void 0),Ge([(0,a.MZ)()],Ye.prototype,"name",void 0),Ge([(0,a.MZ)()],Ye.prototype,"size",void 0),Ge([(0,a.MZ)()],Ye.prototype,"tagLabel",void 0),Ge([(0,a.MZ)()],Ye.prototype,"tagVariant",void 0),Ge([(0,a.MZ)()],Ye.prototype,"walletIcon",void 0),Ge([(0,a.MZ)()],Ye.prototype,"tabIdx",void 0),Ge([(0,a.MZ)({type:Boolean})],Ye.prototype,"disabled",void 0),Ge([(0,a.MZ)({type:Boolean})],Ye.prototype,"showAllWallets",void 0),Ge([(0,a.MZ)({type:Boolean})],Ye.prototype,"loading",void 0),Ge([(0,a.MZ)({type:String})],Ye.prototype,"loadingSpinnerColor",void 0),Ge([(0,a.MZ)()],Ye.prototype,"rdnsId",void 0),Ge([(0,a.MZ)()],Ye.prototype,"displayIndex",void 0),Ge([(0,a.MZ)()],Ye.prototype,"walletRank",void 0),Ye=Ge([(0,B.EM)("w3m-list-wallet")],Ye);const Xe=B.AH`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
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
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
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
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
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
`;var Je=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let Qe=class extends i.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=c.H.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(e=>{for(const t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height;const o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-o,this.style.setProperty("--local-border-bottom-radius","0px")}else{e=e+o,this.style.setProperty("--local-border-bottom-radius",o?"var(--apkt-borderRadius-5)":"0px")}this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){const e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return i.qy`
      <div class="container" data-mobile-fullscreen="${(0,r.J)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,r.J)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),o=this.historyState.split(",").filter(Boolean),i=o.length,a=t.length,r=t[t.length-1]||"",n=B.Zv.cssDurationToNumber(this.transitionDuration);let s="";a>i?s="next":a<i?s="prev":a===i&&t[a-1]!==o[i-1]&&(s="next"),this.viewDirection=`${s}-${r}`,setTimeout(()=>{this.historyState=e,this.setView?.(r)},n),setTimeout(()=>{this.viewDirection=""},2*n)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){const e=this.getWrapper();if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let o=0;if(this.mobileFullScreen){o=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")}else o=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${o}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${o}px`}getHeaderHeight(){return 60}};Qe.styles=[Xe],Je([(0,a.MZ)({type:String})],Qe.prototype,"transitionDuration",void 0),Je([(0,a.MZ)({type:String})],Qe.prototype,"transitionFunction",void 0),Je([(0,a.MZ)({type:String})],Qe.prototype,"history",void 0),Je([(0,a.MZ)({type:String})],Qe.prototype,"view",void 0),Je([(0,a.MZ)({attribute:!1})],Qe.prototype,"setView",void 0),Je([(0,a.wk)()],Qe.prototype,"viewDirection",void 0),Je([(0,a.wk)()],Qe.prototype,"historyState",void 0),Je([(0,a.wk)()],Qe.prototype,"previousHeight",void 0),Je([(0,a.wk)()],Qe.prototype,"mobileFullScreen",void 0),Qe=Je([(0,B.EM)("w3m-router-container")],Qe)}}]);