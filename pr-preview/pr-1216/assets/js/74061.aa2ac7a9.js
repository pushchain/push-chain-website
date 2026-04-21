"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[74061],{

/***/ 974061
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
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(823748);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js + 1 modules
var ModalController = __webpack_require__(75654);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js + 3 modules
var ChainController = __webpack_require__(928828);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(630301);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var ApiController = __webpack_require__(24202);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(546181);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 2 modules
var ConnectionController = __webpack_require__(836507);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js
var SIWXUtil = __webpack_require__(384387);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ModalUtil.js




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
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(22391);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(562084);
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla.mjs + 1 modules
var vanilla = __webpack_require__(552095);
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla/utils.mjs
var utils = __webpack_require__(427088);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js
var NumberUtil = __webpack_require__(628567);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(900997);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(466641);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/BalanceUtil.js + 2 modules
var BalanceUtil = __webpack_require__(273929);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(365663);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js + 1 modules
var utils_ConstantsUtil = __webpack_require__(519755);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(158871);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SwapApiUtil.js
var SwapApiUtil = __webpack_require__(548987);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SwapCalculationUtil.js
// -- Types --------------------------------------------- //

// -- Util ---------------------------------------- //
const SwapCalculationUtil = {
    getGasPriceInEther(gas, gasPrice) {
        const totalGasCostInWei = gasPrice * gas;
        const totalGasCostInEther = Number(totalGasCostInWei) / 1e18;
        return totalGasCostInEther;
    },
    getGasPriceInUSD(networkPrice, gas, gasPrice) {
        const totalGasCostInEther = SwapCalculationUtil.getGasPriceInEther(gas, gasPrice);
        const networkPriceInUSD = NumberUtil/* NumberUtil */.S.bigNumber(networkPrice);
        const gasCostInUSD = networkPriceInUSD.times(totalGasCostInEther);
        return gasCostInUSD.toNumber();
    },
    getPriceImpact({ sourceTokenAmount, sourceTokenPriceInUSD, toTokenPriceInUSD, toTokenAmount }) {
        const inputValue = NumberUtil/* NumberUtil */.S.bigNumber(sourceTokenAmount).times(sourceTokenPriceInUSD);
        const outputValue = NumberUtil/* NumberUtil */.S.bigNumber(toTokenAmount).times(toTokenPriceInUSD);
        const priceImpact = inputValue.minus(outputValue).div(inputValue).times(100);
        return priceImpact.toNumber();
    },
    getMaxSlippage(slippage, toTokenAmount) {
        const slippageToleranceDecimal = NumberUtil/* NumberUtil */.S.bigNumber(slippage).div(100);
        const maxSlippageAmount = NumberUtil/* NumberUtil */.S.multiply(toTokenAmount, slippageToleranceDecimal);
        return maxSlippageAmount.toNumber();
    },
    getProviderFee(sourceTokenAmount, feePercentage = 0.0085) {
        const providerFee = NumberUtil/* NumberUtil */.S.bigNumber(sourceTokenAmount).times(feePercentage);
        return providerFee.toString();
    },
    isInsufficientNetworkTokenForGas(networkBalanceInUSD, gasPriceInUSD) {
        const gasPrice = gasPriceInUSD || '0';
        if (NumberUtil/* NumberUtil */.S.bigNumber(networkBalanceInUSD).eq(0)) {
            return true;
        }
        return NumberUtil/* NumberUtil */.S.bigNumber(NumberUtil/* NumberUtil */.S.bigNumber(gasPrice)).gt(networkBalanceInUSD);
    },
    isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, balance) {
        const sourceTokenBalance = balance?.find(token => token.address === sourceTokenAddress)
            ?.quantity?.numeric;
        const isInSufficientBalance = NumberUtil/* NumberUtil */.S.bigNumber(sourceTokenBalance || '0').lt(sourceTokenAmount);
        return isInSufficientBalance;
    }
};
//# sourceMappingURL=SwapCalculationUtil.js.map
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js + 1 modules
var withErrorBoundary = __webpack_require__(681967);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js
var AlertController = __webpack_require__(28708);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js
var BlockchainApiController = __webpack_require__(213348);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(63013);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SwapController.js




















// -- Constants ---------------------------------------- //
const INITIAL_GAS_LIMIT = 150000;
const TO_AMOUNT_DECIMALS = 6;
class TransactionError extends Error {
    constructor(message, displayMessage) {
        super(message);
        this.name = 'TransactionError';
        this.displayMessage = displayMessage;
    }
}
// -- State --------------------------------------------- //
const initialState = {
    // Loading states
    initializing: false,
    initialized: false,
    loadingPrices: false,
    loadingQuote: false,
    loadingApprovalTransaction: false,
    loadingBuildTransaction: false,
    loadingTransaction: false,
    // Control states
    switchingTokens: false,
    // Error states
    fetchError: false,
    // Approval & Swap transaction states
    approvalTransaction: undefined,
    swapTransaction: undefined,
    transactionError: undefined,
    // Input values
    sourceToken: undefined,
    sourceTokenAmount: '',
    sourceTokenPriceInUSD: 0,
    toToken: undefined,
    toTokenAmount: '',
    toTokenPriceInUSD: 0,
    networkPrice: '0',
    networkBalanceInUSD: '0',
    networkTokenSymbol: '',
    inputError: undefined,
    // Request values
    slippage: utils_ConstantsUtil/* ConstantsUtil */.oU.CONVERT_SLIPPAGE_TOLERANCE,
    // Tokens
    tokens: undefined,
    popularTokens: undefined,
    suggestedTokens: undefined,
    foundTokens: undefined,
    myTokensWithBalance: undefined,
    tokensPriceMap: {},
    // Calculations
    gasFee: '0',
    gasPriceInUSD: 0,
    priceImpact: undefined,
    maxSlippage: undefined,
    providerFee: undefined
};
const state = (0,vanilla/* proxy */.BX)({ ...initialState });
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(state, () => callback(state));
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(state, key, callback);
    },
    getParams() {
        const namespace = ChainController/* ChainController */.W.state.activeChain;
        const caipAddress = ChainController/* ChainController */.W.getAccountData(namespace)?.caipAddress ??
            ChainController/* ChainController */.W.state.activeCaipAddress;
        const address = CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(caipAddress);
        const networkAddress = (0,ChainControllerUtil/* getActiveNetworkTokenAddress */.K1)();
        const connectorId = ConnectorController/* ConnectorController */.a.getConnectorId(ChainController/* ChainController */.W.state.activeChain);
        if (!address) {
            throw new Error('No address found to swap the tokens from.');
        }
        const invalidToToken = !state.toToken?.address || !state.toToken?.decimals;
        const invalidSourceToken = !state.sourceToken?.address ||
            !state.sourceToken?.decimals ||
            !NumberUtil/* NumberUtil */.S.bigNumber(state.sourceTokenAmount).gt(0);
        const invalidSourceTokenAmount = !state.sourceTokenAmount;
        return {
            networkAddress,
            fromAddress: address,
            fromCaipAddress: caipAddress,
            sourceTokenAddress: state.sourceToken?.address,
            toTokenAddress: state.toToken?.address,
            toTokenAmount: state.toTokenAmount,
            toTokenDecimals: state.toToken?.decimals,
            sourceTokenAmount: state.sourceTokenAmount,
            sourceTokenDecimals: state.sourceToken?.decimals,
            invalidToToken,
            invalidSourceToken,
            invalidSourceTokenAmount,
            availableToSwap: caipAddress && !invalidToToken && !invalidSourceToken && !invalidSourceTokenAmount,
            isAuthConnector: connectorId === ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.AUTH
        };
    },
    async setSourceToken(sourceToken) {
        if (!sourceToken) {
            state.sourceToken = sourceToken;
            state.sourceTokenAmount = '';
            state.sourceTokenPriceInUSD = 0;
            return;
        }
        state.sourceToken = sourceToken;
        await SwapController.setTokenPrice(sourceToken.address, 'sourceToken');
    },
    setSourceTokenAmount(amount) {
        state.sourceTokenAmount = amount;
    },
    async setToToken(toToken) {
        if (!toToken) {
            state.toToken = toToken;
            state.toTokenAmount = '';
            state.toTokenPriceInUSD = 0;
            return;
        }
        state.toToken = toToken;
        await SwapController.setTokenPrice(toToken.address, 'toToken');
    },
    setToTokenAmount(amount) {
        state.toTokenAmount = amount ? NumberUtil/* NumberUtil */.S.toFixed(amount, TO_AMOUNT_DECIMALS) : '';
    },
    async setTokenPrice(address, target) {
        let price = state.tokensPriceMap[address] || 0;
        if (!price) {
            state.loadingPrices = true;
            price = await SwapController.getAddressPrice(address);
        }
        if (target === 'sourceToken') {
            state.sourceTokenPriceInUSD = price;
        }
        else if (target === 'toToken') {
            state.toTokenPriceInUSD = price;
        }
        if (state.loadingPrices) {
            state.loadingPrices = false;
        }
        if (SwapController.getParams().availableToSwap && !state.switchingTokens) {
            SwapController.swapTokens();
        }
    },
    async switchTokens() {
        if (state.initializing || !state.initialized || state.switchingTokens) {
            return;
        }
        state.switchingTokens = true;
        try {
            const newSourceToken = state.toToken ? { ...state.toToken } : undefined;
            const newToToken = state.sourceToken ? { ...state.sourceToken } : undefined;
            const newSourceTokenAmount = newSourceToken && state.toTokenAmount === '' ? '1' : state.toTokenAmount;
            SwapController.setSourceTokenAmount(newSourceTokenAmount);
            SwapController.setToTokenAmount('');
            await SwapController.setSourceToken(newSourceToken);
            await SwapController.setToToken(newToToken);
            state.switchingTokens = false;
            SwapController.swapTokens();
        }
        catch (error) {
            state.switchingTokens = false;
            throw error;
        }
    },
    resetState() {
        state.myTokensWithBalance = initialState.myTokensWithBalance;
        state.tokensPriceMap = initialState.tokensPriceMap;
        state.initialized = initialState.initialized;
        state.initializing = initialState.initializing;
        state.switchingTokens = initialState.switchingTokens;
        state.sourceToken = initialState.sourceToken;
        state.sourceTokenAmount = initialState.sourceTokenAmount;
        state.sourceTokenPriceInUSD = initialState.sourceTokenPriceInUSD;
        state.toToken = initialState.toToken;
        state.toTokenAmount = initialState.toTokenAmount;
        state.toTokenPriceInUSD = initialState.toTokenPriceInUSD;
        state.networkPrice = initialState.networkPrice;
        state.networkTokenSymbol = initialState.networkTokenSymbol;
        state.networkBalanceInUSD = initialState.networkBalanceInUSD;
        state.inputError = initialState.inputError;
    },
    resetValues() {
        const { networkAddress } = SwapController.getParams();
        const networkToken = state.tokens?.find(token => token.address === networkAddress);
        SwapController.setSourceToken(networkToken);
        SwapController.setToToken(undefined);
    },
    getApprovalLoadingState() {
        return state.loadingApprovalTransaction;
    },
    clearError() {
        state.transactionError = undefined;
    },
    async initializeState() {
        if (state.initializing) {
            return;
        }
        state.initializing = true;
        if (!state.initialized) {
            try {
                await SwapController.fetchTokens();
                state.initialized = true;
            }
            catch (error) {
                state.initialized = false;
                SnackController/* SnackController */.P.showError('Failed to initialize swap');
                RouterController/* RouterController */.I.goBack();
            }
        }
        state.initializing = false;
    },
    async fetchTokens() {
        const { networkAddress } = SwapController.getParams();
        await SwapController.getNetworkTokenPrice();
        await SwapController.getMyTokensWithBalance();
        const networkToken = state.myTokensWithBalance?.find(token => token.address === networkAddress);
        if (networkToken) {
            state.networkTokenSymbol = networkToken.symbol;
            SwapController.setSourceToken(networkToken);
            SwapController.setSourceTokenAmount('0');
        }
    },
    async getTokenList() {
        const activeCaipNetworkId = ChainController/* ChainController */.W.state.activeCaipNetwork?.caipNetworkId;
        if (state.caipNetworkId === activeCaipNetworkId && state.tokens) {
            return;
        }
        try {
            state.tokensLoading = true;
            const tokens = await SwapApiUtil/* SwapApiUtil */.s.getTokenList(activeCaipNetworkId);
            state.tokens = tokens;
            state.caipNetworkId = activeCaipNetworkId;
            state.popularTokens = tokens.sort((aTokenInfo, bTokenInfo) => {
                if (aTokenInfo.symbol < bTokenInfo.symbol) {
                    return -1;
                }
                if (aTokenInfo.symbol > bTokenInfo.symbol) {
                    return 1;
                }
                return 0;
            });
            const suggestedTokensByChain = (activeCaipNetworkId &&
                utils_ConstantsUtil/* ConstantsUtil */.oU.SUGGESTED_TOKENS_BY_CHAIN?.[activeCaipNetworkId]) ||
                [];
            const suggestedTokenObjects = suggestedTokensByChain
                .map(symbol => tokens.find(t => t.symbol === symbol))
                .filter((t) => Boolean(t));
            const allSuggestedTokens = utils_ConstantsUtil/* ConstantsUtil */.oU.SWAP_SUGGESTED_TOKENS || [];
            const allSuggestedTokenObjects = allSuggestedTokens
                .map(symbol => tokens.find(t => t.symbol === symbol))
                .filter((t) => Boolean(t))
                .filter(t => !suggestedTokenObjects.some(ct => ct.address === t.address));
            state.suggestedTokens = [...suggestedTokenObjects, ...allSuggestedTokenObjects];
        }
        catch (error) {
            state.tokens = [];
            state.popularTokens = [];
            state.suggestedTokens = [];
        }
        finally {
            state.tokensLoading = false;
        }
    },
    async getAddressPrice(address) {
        const existPrice = state.tokensPriceMap[address];
        if (existPrice) {
            return existPrice;
        }
        const response = await BlockchainApiController/* BlockchainApiController */.T.fetchTokenPrice({
            addresses: [address]
        });
        const fungibles = response?.fungibles || [];
        const allTokens = [...(state.tokens || []), ...(state.myTokensWithBalance || [])];
        const symbol = allTokens?.find(token => token.address === address)?.symbol;
        const price = fungibles.find(p => p.symbol.toLowerCase() === symbol?.toLowerCase())?.price || 0;
        const priceAsFloat = parseFloat(price.toString());
        state.tokensPriceMap[address] = priceAsFloat;
        return priceAsFloat;
    },
    async getNetworkTokenPrice() {
        const { networkAddress } = SwapController.getParams();
        const response = await BlockchainApiController/* BlockchainApiController */.T.fetchTokenPrice({
            addresses: [networkAddress]
        }).catch(() => {
            SnackController/* SnackController */.P.showError('Failed to fetch network token price');
            return { fungibles: [] };
        });
        const token = response.fungibles?.[0];
        const price = token?.price.toString() || '0';
        state.tokensPriceMap[networkAddress] = parseFloat(price);
        state.networkTokenSymbol = token?.symbol || '';
        state.networkPrice = price;
    },
    async getMyTokensWithBalance(forceUpdate) {
        const balances = await BalanceUtil/* BalanceUtil */.Z.getMyTokensWithBalance({
            forceUpdate,
            caipNetwork: ChainController/* ChainController */.W.state.activeCaipNetwork,
            address: ChainController/* ChainController */.W.getAccountData()?.address
        });
        const swapBalances = SwapApiUtil/* SwapApiUtil */.s.mapBalancesToSwapTokens(balances);
        if (!swapBalances) {
            return;
        }
        await SwapController.getInitialGasPrice();
        SwapController.setBalances(swapBalances);
    },
    setBalances(balances) {
        const { networkAddress } = SwapController.getParams();
        const caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
        if (!caipNetwork) {
            return;
        }
        const networkToken = balances.find(token => token.address === networkAddress);
        balances.forEach(token => {
            state.tokensPriceMap[token.address] = token.price || 0;
        });
        state.myTokensWithBalance = balances.filter(token => token.address.startsWith(caipNetwork.caipNetworkId));
        state.networkBalanceInUSD = networkToken
            ? NumberUtil/* NumberUtil */.S.multiply(networkToken.quantity.numeric, networkToken.price).toString()
            : '0';
    },
    async getInitialGasPrice() {
        const res = await SwapApiUtil/* SwapApiUtil */.s.fetchGasPrice();
        if (!res) {
            return { gasPrice: null, gasPriceInUSD: null };
        }
        switch (ChainController/* ChainController */.W.state?.activeCaipNetwork?.chainNamespace) {
            case ConstantsUtil/* ConstantsUtil */.o.CHAIN.SOLANA:
                state.gasFee = res.standard ?? '0';
                state.gasPriceInUSD = NumberUtil/* NumberUtil */.S.multiply(res.standard, state.networkPrice)
                    .div(1e9)
                    .toNumber();
                return {
                    gasPrice: BigInt(state.gasFee),
                    gasPriceInUSD: Number(state.gasPriceInUSD)
                };
            case ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM:
            default:
                // eslint-disable-next-line no-case-declarations
                const value = res.standard ?? '0';
                // eslint-disable-next-line no-case-declarations
                const gasFee = BigInt(value);
                // eslint-disable-next-line no-case-declarations
                const gasLimit = BigInt(INITIAL_GAS_LIMIT);
                // eslint-disable-next-line no-case-declarations
                const gasPrice = SwapCalculationUtil.getGasPriceInUSD(state.networkPrice, gasLimit, gasFee);
                state.gasFee = value;
                state.gasPriceInUSD = gasPrice;
                return { gasPrice: gasFee, gasPriceInUSD: gasPrice };
        }
    },
    // -- Swap -------------------------------------- //
    async swapTokens() {
        const address = ChainController/* ChainController */.W.getAccountData()?.address;
        const sourceToken = state.sourceToken;
        const toToken = state.toToken;
        const haveSourceTokenAmount = NumberUtil/* NumberUtil */.S.bigNumber(state.sourceTokenAmount).gt(0);
        if (!haveSourceTokenAmount) {
            SwapController.setToTokenAmount('');
        }
        if (!toToken || !sourceToken || state.loadingPrices || !haveSourceTokenAmount || !address) {
            return;
        }
        state.loadingQuote = true;
        const amountDecimal = NumberUtil/* NumberUtil */.S.bigNumber(state.sourceTokenAmount)
            .times(10 ** sourceToken.decimals)
            .round(0)
            .toFixed(0);
        try {
            const quoteResponse = await BlockchainApiController/* BlockchainApiController */.T.fetchSwapQuote({
                userAddress: address,
                from: sourceToken.address,
                to: toToken.address,
                gasPrice: state.gasFee,
                amount: amountDecimal.toString()
            });
            state.loadingQuote = false;
            const quoteToAmount = quoteResponse?.quotes?.[0]?.toAmount;
            if (!quoteToAmount) {
                AlertController/* AlertController */.h.open({
                    displayMessage: 'Incorrect amount',
                    debugMessage: 'Please enter a valid amount'
                }, 'error');
                return;
            }
            const toTokenAmount = NumberUtil/* NumberUtil */.S.bigNumber(quoteToAmount)
                .div(10 ** toToken.decimals)
                .toString();
            SwapController.setToTokenAmount(toTokenAmount);
            const isInsufficientToken = SwapController.hasInsufficientToken(state.sourceTokenAmount, sourceToken.address);
            if (isInsufficientToken) {
                state.inputError = 'Insufficient balance';
            }
            else {
                state.inputError = undefined;
                SwapController.setTransactionDetails();
            }
        }
        catch (error) {
            const response = await SwapApiUtil/* SwapApiUtil */.s.handleSwapError(error);
            state.loadingQuote = false;
            state.inputError = response || 'Insufficient balance';
        }
    },
    // -- Create Transactions -------------------------------------- //
    async getTransaction() {
        const { fromCaipAddress, availableToSwap } = SwapController.getParams();
        const sourceToken = state.sourceToken;
        const toToken = state.toToken;
        if (!fromCaipAddress || !availableToSwap || !sourceToken || !toToken || state.loadingQuote) {
            return undefined;
        }
        try {
            state.loadingBuildTransaction = true;
            const hasAllowance = await SwapApiUtil/* SwapApiUtil */.s.fetchSwapAllowance({
                userAddress: fromCaipAddress,
                tokenAddress: sourceToken.address,
                sourceTokenAmount: state.sourceTokenAmount,
                sourceTokenDecimals: sourceToken.decimals
            });
            let transaction = undefined;
            if (hasAllowance) {
                transaction = await SwapController.createSwapTransaction();
            }
            else {
                transaction = await SwapController.createAllowanceTransaction();
            }
            state.loadingBuildTransaction = false;
            state.fetchError = false;
            return transaction;
        }
        catch (error) {
            RouterController/* RouterController */.I.goBack();
            SnackController/* SnackController */.P.showError('Failed to check allowance');
            state.loadingBuildTransaction = false;
            state.approvalTransaction = undefined;
            state.swapTransaction = undefined;
            state.fetchError = true;
            return undefined;
        }
    },
    async createAllowanceTransaction() {
        const { fromCaipAddress, sourceTokenAddress, toTokenAddress } = SwapController.getParams();
        if (!fromCaipAddress || !toTokenAddress) {
            return undefined;
        }
        if (!sourceTokenAddress) {
            throw new Error('createAllowanceTransaction - No source token address found.');
        }
        try {
            const response = await BlockchainApiController/* BlockchainApiController */.T.generateApproveCalldata({
                from: sourceTokenAddress,
                to: toTokenAddress,
                userAddress: fromCaipAddress
            });
            const address = CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(response.tx.from);
            if (!address) {
                throw new Error('SwapController:createAllowanceTransaction - address is required');
            }
            const transaction = {
                data: response.tx.data,
                to: address,
                gasPrice: BigInt(response.tx.eip155.gasPrice),
                value: BigInt(response.tx.value),
                toAmount: state.toTokenAmount
            };
            state.swapTransaction = undefined;
            state.approvalTransaction = {
                data: transaction.data,
                to: transaction.to,
                gasPrice: transaction.gasPrice,
                value: transaction.value,
                toAmount: transaction.toAmount
            };
            return {
                data: transaction.data,
                to: transaction.to,
                gasPrice: transaction.gasPrice,
                value: transaction.value,
                toAmount: transaction.toAmount
            };
        }
        catch (error) {
            RouterController/* RouterController */.I.goBack();
            SnackController/* SnackController */.P.showError('Failed to create approval transaction');
            state.approvalTransaction = undefined;
            state.swapTransaction = undefined;
            state.fetchError = true;
            return undefined;
        }
    },
    async createSwapTransaction() {
        const { networkAddress, fromCaipAddress, sourceTokenAmount } = SwapController.getParams();
        const sourceToken = state.sourceToken;
        const toToken = state.toToken;
        if (!fromCaipAddress || !sourceTokenAmount || !sourceToken || !toToken) {
            return undefined;
        }
        const amount = ConnectionController/* ConnectionController */.x.parseUnits(sourceTokenAmount, sourceToken.decimals)?.toString();
        try {
            const response = await BlockchainApiController/* BlockchainApiController */.T.generateSwapCalldata({
                userAddress: fromCaipAddress,
                from: sourceToken.address,
                to: toToken.address,
                amount: amount,
                disableEstimate: true
            });
            const isSourceTokenIsNetworkToken = sourceToken.address === networkAddress;
            const gas = BigInt(response.tx.eip155.gas);
            const gasPrice = BigInt(response.tx.eip155.gasPrice);
            const address = CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(response.tx.to);
            if (!address) {
                throw new Error('SwapController:createSwapTransaction - address is required');
            }
            const transaction = {
                data: response.tx.data,
                to: address,
                gas,
                gasPrice,
                value: isSourceTokenIsNetworkToken ? BigInt(amount ?? '0') : BigInt('0'),
                toAmount: state.toTokenAmount
            };
            state.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state.networkPrice, gas, gasPrice);
            state.approvalTransaction = undefined;
            state.swapTransaction = transaction;
            return transaction;
        }
        catch (error) {
            RouterController/* RouterController */.I.goBack();
            SnackController/* SnackController */.P.showError('Failed to create transaction');
            state.approvalTransaction = undefined;
            state.swapTransaction = undefined;
            state.fetchError = true;
            return undefined;
        }
    },
    onEmbeddedWalletApprovalSuccess() {
        SnackController/* SnackController */.P.showLoading('Approve limit increase in your wallet');
        RouterController/* RouterController */.I.replace('SwapPreview');
    },
    // -- Send Transactions --------------------------------- //
    async sendTransactionForApproval(data) {
        const { fromAddress, isAuthConnector } = SwapController.getParams();
        state.loadingApprovalTransaction = true;
        const approveLimitMessage = `Approve limit increase in your wallet`;
        if (isAuthConnector) {
            RouterController/* RouterController */.I.pushTransactionStack({
                onSuccess: SwapController.onEmbeddedWalletApprovalSuccess
            });
        }
        else {
            SnackController/* SnackController */.P.showLoading(approveLimitMessage);
        }
        try {
            await ConnectionController/* ConnectionController */.x.sendTransaction({
                address: fromAddress,
                to: data.to,
                data: data.data,
                value: data.value,
                chainNamespace: ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM
            });
            await SwapController.swapTokens();
            await SwapController.getTransaction();
            state.approvalTransaction = undefined;
            state.loadingApprovalTransaction = false;
        }
        catch (err) {
            const error = err;
            state.transactionError = error?.displayMessage;
            state.loadingApprovalTransaction = false;
            SnackController/* SnackController */.P.showError(error?.displayMessage || 'Transaction error');
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'SWAP_APPROVAL_ERROR',
                properties: {
                    message: error?.displayMessage || error?.message || 'Unknown',
                    network: ChainController/* ChainController */.W.state.activeCaipNetwork?.caipNetworkId || '',
                    swapFromToken: SwapController.state.sourceToken?.symbol || '',
                    swapToToken: SwapController.state.toToken?.symbol || '',
                    swapFromAmount: SwapController.state.sourceTokenAmount || '',
                    swapToAmount: SwapController.state.toTokenAmount || '',
                    isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM) ===
                        W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                }
            });
        }
    },
    async sendTransactionForSwap(data) {
        if (!data) {
            return undefined;
        }
        const { fromAddress, toTokenAmount, isAuthConnector } = SwapController.getParams();
        state.loadingTransaction = true;
        const snackbarPendingMessage = `Swapping ${state.sourceToken?.symbol} to ${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(toTokenAmount, 3)} ${state.toToken?.symbol}`;
        const snackbarSuccessMessage = `Swapped ${state.sourceToken?.symbol} to ${NumberUtil/* NumberUtil */.S.formatNumberToLocalString(toTokenAmount, 3)} ${state.toToken?.symbol}`;
        if (isAuthConnector) {
            RouterController/* RouterController */.I.pushTransactionStack({
                onSuccess() {
                    RouterController/* RouterController */.I.replace('Account');
                    SnackController/* SnackController */.P.showLoading(snackbarPendingMessage);
                    controller.resetState();
                }
            });
        }
        else {
            SnackController/* SnackController */.P.showLoading('Confirm transaction in your wallet');
        }
        try {
            const forceUpdateAddresses = [state.sourceToken?.address, state.toToken?.address].join(',');
            const transactionHash = await ConnectionController/* ConnectionController */.x.sendTransaction({
                address: fromAddress,
                to: data.to,
                data: data.data,
                value: data.value,
                chainNamespace: ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM
            });
            state.loadingTransaction = false;
            SnackController/* SnackController */.P.showSuccess(snackbarSuccessMessage);
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'SWAP_SUCCESS',
                properties: {
                    network: ChainController/* ChainController */.W.state.activeCaipNetwork?.caipNetworkId || '',
                    swapFromToken: SwapController.state.sourceToken?.symbol || '',
                    swapToToken: SwapController.state.toToken?.symbol || '',
                    swapFromAmount: SwapController.state.sourceTokenAmount || '',
                    swapToAmount: SwapController.state.toTokenAmount || '',
                    isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM) ===
                        W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                }
            });
            controller.resetState();
            if (!isAuthConnector) {
                RouterController/* RouterController */.I.replace('Account');
            }
            controller.getMyTokensWithBalance(forceUpdateAddresses);
            return transactionHash;
        }
        catch (err) {
            const error = err;
            state.transactionError = error?.displayMessage;
            state.loadingTransaction = false;
            SnackController/* SnackController */.P.showError(error?.displayMessage || 'Transaction error');
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'SWAP_ERROR',
                properties: {
                    message: error?.displayMessage || error?.message || 'Unknown',
                    network: ChainController/* ChainController */.W.state.activeCaipNetwork?.caipNetworkId || '',
                    swapFromToken: SwapController.state.sourceToken?.symbol || '',
                    swapToToken: SwapController.state.toToken?.symbol || '',
                    swapFromAmount: SwapController.state.sourceTokenAmount || '',
                    swapToAmount: SwapController.state.toTokenAmount || '',
                    isSmartAccount: (0,ChainControllerUtil/* getPreferredAccountType */.lj)(ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM) ===
                        W3mFrameConstants/* W3mFrameRpcConstants */.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                }
            });
            return undefined;
        }
    },
    // -- Checks -------------------------------------------- //
    hasInsufficientToken(sourceTokenAmount, sourceTokenAddress) {
        const isInsufficientSourceTokenForSwap = SwapCalculationUtil.isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, state.myTokensWithBalance);
        return isInsufficientSourceTokenForSwap;
    },
    // -- Calculations -------------------------------------- //
    setTransactionDetails() {
        const { toTokenAddress, toTokenDecimals } = SwapController.getParams();
        if (!toTokenAddress || !toTokenDecimals) {
            return;
        }
        state.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state.networkPrice, BigInt(state.gasFee), BigInt(INITIAL_GAS_LIMIT));
        state.priceImpact = SwapCalculationUtil.getPriceImpact({
            sourceTokenAmount: state.sourceTokenAmount,
            sourceTokenPriceInUSD: state.sourceTokenPriceInUSD,
            toTokenPriceInUSD: state.toTokenPriceInUSD,
            toTokenAmount: state.toTokenAmount
        });
        state.maxSlippage = SwapCalculationUtil.getMaxSlippage(state.slippage, state.toTokenAmount);
        state.providerFee = SwapCalculationUtil.getProviderFee(state.sourceTokenAmount);
    }
};
// Export the controller wrapped with our error boundary
const SwapController = (0,withErrorBoundary/* withErrorBoundary */.X)(controller);
//# sourceMappingURL=SwapController.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 3 modules
var esm_exports = __webpack_require__(318718);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(867569);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/styles.js

/* harmony default export */ const styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    border-radius: clamp(0px, ${({ borderRadius }) => borderRadius['8']}, 44px);
    box-shadow: 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    overflow: hidden;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-card.js

//# sourceMappingURL=wui-card.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(460310);
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
/* provided dependency */ var process = __webpack_require__(365606);
const ConstantsUtil_ConstantsUtil = {
    WC_NAME_SUFFIX: '.reown.id',
    WC_NAME_SUFFIX_LEGACY: '.wcn.id',
    BLOCKCHAIN_API_RPC_URL: 'https://rpc.walletconnect.org',
    PULSE_API_URL: 'https://pulse.walletconnect.org',
    W3M_API_URL: 'https://api.web3modal.org',
    CONNECTOR_ID: {
        WALLET_CONNECT: 'walletConnect',
        INJECTED: 'injected',
        WALLET_STANDARD: 'announced',
        COINBASE: 'coinbaseWallet',
        COINBASE_SDK: 'coinbaseWalletSDK',
        BASE_ACCOUNT: 'baseAccount',
        SAFE: 'safe',
        LEDGER: 'ledger',
        OKX: 'okx',
        EIP6963: 'eip6963',
        AUTH: 'AUTH'
    },
    CONNECTOR_NAMES: {
        AUTH: 'Auth'
    },
    AUTH_CONNECTOR_SUPPORTED_CHAINS: ['eip155', 'solana'],
    LIMITS: {
        PENDING_TRANSACTIONS: 99
    },
    CHAIN: {
        EVM: 'eip155',
        SOLANA: 'solana',
        POLKADOT: 'polkadot',
        BITCOIN: 'bip122',
        TON: 'ton'
    },
    CHAIN_NAME_MAP: {
        eip155: 'EVM Networks',
        solana: 'Solana',
        polkadot: 'Polkadot',
        bip122: 'Bitcoin',
        cosmos: 'Cosmos',
        sui: 'Sui',
        stacks: 'Stacks',
        ton: 'TON'
    },
    ADAPTER_TYPES: {
        BITCOIN: 'bitcoin',
        SOLANA: 'solana',
        WAGMI: 'wagmi',
        ETHERS: 'ethers',
        ETHERS5: 'ethers5',
        TON: 'ton'
    },
    USDT_CONTRACT_ADDRESSES: [
        '0xdac17f958d2ee523a2206206994597c13d831ec7',
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
        '0x919C1c267BC06a7039e03fcc2eF738525769109c',
        '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
        '0x55d398326f99059fF775485246999027B3197955',
        '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
    ],
    SOLANA_SPL_TOKEN_ADDRESSES: {
        SOL: 'So11111111111111111111111111111111111111112'
    },
    NATIVE_IMAGE_IDS_BY_NAMESPACE: {
        eip155: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
        solana: '3e8119e5-2a6f-4818-c50c-1937011d5900',
        bip122: '0b4838db-0161-4ffe-022d-532bf03dba00'
    },
    TOKEN_SYMBOLS_BY_ADDRESS: {
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 'USDC',
        '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913': 'USDC',
        '0x0b2c639c533813f4aa9d7837caf62653d097ff85': 'USDC',
        '0xaf88d065e77c8cc2239327c5edb3a432268e5831': 'USDC',
        '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359': 'USDC',
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174': 'USDC',
        EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: 'USDC',
        '0xdac17f958d2ee523a2206206994597c13d831ec7': 'USDT',
        '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58': 'USDT',
        '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9': 'USDT',
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f': 'USDT',
        Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: 'USDT'
    },
    HTTP_STATUS_CODES: {
        SERVER_ERROR: 500,
        TOO_MANY_REQUESTS: 429,
        SERVICE_UNAVAILABLE: 503,
        FORBIDDEN: 403
    },
    UNSUPPORTED_NETWORK_NAME: 'Unknown Network',
    SECURE_SITE_SDK_ORIGIN: (typeof process !== 'undefined' && typeof process.env !== 'undefined'
        ? process.env['NEXT_PUBLIC_SECURE_SITE_ORIGIN']
        : undefined) || 'https://secure.walletconnect.org',
    REMOTE_FEATURES_ALERTS: {
        MULTI_WALLET_NOT_ENABLED: {
            DEFAULT: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com.'
            },
            CONNECTIONS_HOOK: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook.'
            },
            CONNECTION_HOOK: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook.'
            }
        },
        HEADLESS_NOT_ENABLED: {
            DEFAULT: {
                displayMessage: '',
                debugMessage: 'Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it.'
            }
        }
    },
    IS_DEVELOPMENT: typeof process !== 'undefined' && "production" === 'development',
    DEFAULT_ALLOWED_ANCESTORS: [
        'http://localhost:*',
        'https://localhost:*',
        'http://127.0.0.1:*',
        'https://127.0.0.1:*',
        'https://*.pages.dev',
        'https://*.vercel.app',
        'https://*.ngrok-free.app',
        'https://secure-mobile.walletconnect.com',
        'https://secure-mobile.walletconnect.org'
    ],
    METMASK_CONNECTOR_NAME: 'MetaMask',
    TRUST_CONNECTOR_NAME: 'Trust Wallet',
    SOLFLARE_CONNECTOR_NAME: 'Solflare',
    PHANTOM_CONNECTOR_NAME: 'Phantom',
    COIN98_CONNECTOR_NAME: 'Coin98',
    MAGIC_EDEN_CONNECTOR_NAME: 'Magic Eden',
    BACKPACK_CONNECTOR_NAME: 'Backpack',
    BITGET_CONNECTOR_NAME: 'Bitget Wallet',
    FRONTIER_CONNECTOR_NAME: 'Frontier',
    XVERSE_CONNECTOR_NAME: 'Xverse Wallet',
    LEATHER_CONNECTOR_NAME: 'Leather',
    OKX_CONNECTOR_NAME: 'OKX Wallet',
    BINANCE_CONNECTOR_NAME: 'Binance Wallet',
    EIP155: 'eip155',
    ADD_CHAIN_METHOD: 'wallet_addEthereumChain',
    EIP6963_ANNOUNCE_EVENT: 'eip6963:announceProvider',
    EIP6963_REQUEST_EVENT: 'eip6963:requestProvider',
    CONNECTOR_RDNS_MAP: {
        coinbaseWallet: 'com.coinbase.wallet',
        coinbaseWalletSDK: 'com.coinbase.wallet'
    },
    CONNECTOR_TYPE_EXTERNAL: 'EXTERNAL',
    CONNECTOR_TYPE_WALLET_CONNECT: 'WALLET_CONNECT',
    CONNECTOR_TYPE_INJECTED: 'INJECTED',
    CONNECTOR_TYPE_ANNOUNCED: 'ANNOUNCED',
    CONNECTOR_TYPE_AUTH: 'AUTH',
    CONNECTOR_TYPE_MULTI_CHAIN: 'MULTI_CHAIN',
    CONNECTOR_TYPE_W3M_AUTH: 'AUTH'
};
//# sourceMappingURL=ConstantsUtil.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-common/dist/esm/src/utils/PresetsUtil.js

const PresetsUtil = {
    ConnectorExplorerIds: {
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.SAFE]: '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.LEDGER]: '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.OKX]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        [ConstantsUtil_ConstantsUtil.METMASK_CONNECTOR_NAME]: 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        [ConstantsUtil_ConstantsUtil.TRUST_CONNECTOR_NAME]: '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        [ConstantsUtil_ConstantsUtil.SOLFLARE_CONNECTOR_NAME]: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        [ConstantsUtil_ConstantsUtil.PHANTOM_CONNECTOR_NAME]: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        [ConstantsUtil_ConstantsUtil.COIN98_CONNECTOR_NAME]: '2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01',
        [ConstantsUtil_ConstantsUtil.MAGIC_EDEN_CONNECTOR_NAME]: '8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6',
        [ConstantsUtil_ConstantsUtil.BACKPACK_CONNECTOR_NAME]: '2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0',
        [ConstantsUtil_ConstantsUtil.BITGET_CONNECTOR_NAME]: '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662',
        [ConstantsUtil_ConstantsUtil.FRONTIER_CONNECTOR_NAME]: '85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041',
        [ConstantsUtil_ConstantsUtil.XVERSE_CONNECTOR_NAME]: '2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b',
        [ConstantsUtil_ConstantsUtil.LEATHER_CONNECTOR_NAME]: '483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13',
        [ConstantsUtil_ConstantsUtil.OKX_CONNECTOR_NAME]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        [ConstantsUtil_ConstantsUtil.BINANCE_CONNECTOR_NAME]: '2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25'
    },
    NetworkImageIds: {
        1: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
        42161: '3bff954d-5cb0-47a0-9a23-d20192e74600',
        43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
        56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
        250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
        10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
        137: '41d04d42-da3b-4453-8506-668cc0727900',
        5000: 'e86fae9b-b770-4eea-e520-150e12c81100',
        295: '6a97d510-cac8-4e58-c7ce-e8681b044c00',
        11_155_111: 'e909ea0a-f92a-4512-c8fc-748044ea6800',
        84532: 'a18a7ecd-e307-4360-4746-283182228e00',
        1301: '4eeea7ef-0014-4649-5d1d-07271a80f600',
        130: '2257980a-3463-48c6-cbac-a42d2a956e00',
        10_143: '0a728e83-bacb-46db-7844-948f05434900',
        100: '02b53f6a-e3d4-479e-1cb4-21178987d100',
        9001: 'f926ff41-260d-4028-635e-91913fc28e00',
        324: 'b310f07f-4ef7-49f3-7073-2a0a39685800',
        314: '5a73b3dd-af74-424e-cae0-0de859ee9400',
        4689: '34e68754-e536-40da-c153-6ef2e7188a00',
        1088: '3897a66d-40b9-4833-162f-a2c90531c900',
        1284: '161038da-44ae-4ec7-1208-0ea569454b00',
        1285: 'f1d73bb6-5450-4e18-38f7-fb6484264a00',
        7777777: '845c60df-d429-4991-e687-91ae45791600',
        42220: 'ab781bbc-ccc6-418d-d32d-789b15da1f00',
        8453: '7289c336-3981-4081-c5f4-efc26ac64a00',
        1313161554: '3ff73439-a619-4894-9262-4470c773a100',
        2020: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        2021: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        80094: 'e329c2c9-59b0-4a02-83e4-212ff3779900',
        2741: 'fc2427d1-5af9-4a9c-8da5-6f94627cd900',
        '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        EtWTRABZaYq6iMfeYKouRu166VU2xqa1: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        '000000000019d6689c085ae165831e93': '0b4838db-0161-4ffe-022d-532bf03dba00',
        '000000000933ea01ad0ee984209779ba': '39354064-d79b-420b-065d-f980c4b78200',
        '00000008819873e925422c1ff0f99f7c': 'b3406e4a-bbfc-44fb-e3a6-89673c78b700',
        '-239': '20f673c0-095e-49b2-07cf-eb5049dcf600',
        '-3': '20f673c0-095e-49b2-07cf-eb5049dcf600'
    },
    ConnectorImageIds: {
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: 'bba2c8be-7fd1-463e-42b1-796ecb0ad200',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.SAFE]: '461db637-8616-43ce-035a-d89b8a1d5800',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.LEDGER]: '54a1aa77-d202-4f8d-0fb2-5d2bb6db0300',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: 'ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.INJECTED]: '07ba87ed-43aa-4adf-4540-9e6a2b9cae00'
    },
    ConnectorNamesMap: {
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.INJECTED]: 'Browser Wallet',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: 'WalletConnect',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE]: 'Coinbase',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: 'Coinbase',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: 'Base Account',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.LEDGER]: 'Ledger',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.SAFE]: 'Safe'
    },
    ConnectorTypesMap: {
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.INJECTED]: 'INJECTED',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: 'WALLET_CONNECT',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.EIP6963]: 'ANNOUNCED',
        [ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH]: 'AUTH'
    },
    WalletConnectRpcChainIds: [
        1,
        5,
        11155111,
        10,
        420,
        42161,
        421613,
        137,
        80001,
        42220,
        1313161554,
        1313161555,
        56,
        97,
        43114,
        43113,
        100,
        8453,
        84531,
        7777777,
        999,
        324,
        280
    ]
};
//# sourceMappingURL=PresetsUtil.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
/* provided dependency */ var ConstantsUtil_process = __webpack_require__(365606);


const SECURE_SITE = 
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
(typeof ConstantsUtil_process !== 'undefined' && typeof ConstantsUtil_process.env !== 'undefined'
    ? ConstantsUtil_process.env['NEXT_PUBLIC_SECURE_SITE_ORIGIN']
    : undefined) || 'https://secure.walletconnect.org';
const ONRAMP_PROVIDERS = [
    {
        label: 'Meld.io',
        name: 'meld',
        feeRange: '1-2%',
        url: 'https://meldcrypto.com',
        supportedChains: ['eip155', 'solana']
    }
];
const MELD_PUBLIC_KEY = 'WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU';
const utils_ConstantsUtil_ConstantsUtil = {
    FOUR_MINUTES_MS: 240_000,
    TEN_SEC_MS: 10_000,
    FIVE_SEC_MS: 5_000,
    THREE_SEC_MS: 3_000,
    ONE_SEC_MS: 1_000,
    SECURE_SITE,
    SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,
    SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,
    SOLANA_NATIVE_TOKEN_ADDRESS: 'So11111111111111111111111111111111111111111',
    RESTRICTED_TIMEZONES: [
        'ASIA/SHANGHAI',
        'ASIA/URUMQI',
        'ASIA/CHONGQING',
        'ASIA/HARBIN',
        'ASIA/KASHGAR',
        'ASIA/MACAU',
        'ASIA/HONG_KONG',
        'ASIA/MACAO',
        'ASIA/BEIJING',
        'ASIA/HARBIN'
    ],
    SWAP_SUGGESTED_TOKENS: [
        'ETH',
        'UNI',
        '1INCH',
        'AAVE',
        'SOL',
        'ADA',
        'AVAX',
        'DOT',
        'LINK',
        'NITRO',
        'GAIA',
        'MILK',
        'TRX',
        'NEAR',
        'GNO',
        'WBTC',
        'DAI',
        'WETH',
        'USDC',
        'USDT',
        'ARB',
        'BAL',
        'BICO',
        'CRV',
        'ENS',
        'MATIC',
        'OP'
    ],
    SWAP_POPULAR_TOKENS: [
        'ETH',
        'UNI',
        '1INCH',
        'AAVE',
        'SOL',
        'ADA',
        'AVAX',
        'DOT',
        'LINK',
        'NITRO',
        'GAIA',
        'MILK',
        'TRX',
        'NEAR',
        'GNO',
        'WBTC',
        'DAI',
        'WETH',
        'USDC',
        'USDT',
        'ARB',
        'BAL',
        'BICO',
        'CRV',
        'ENS',
        'MATIC',
        'OP',
        'METAL',
        'DAI',
        'CHAMP',
        'WOLF',
        'SALE',
        'BAL',
        'BUSD',
        'MUST',
        'BTCpx',
        'ROUTE',
        'HEX',
        'WELT',
        'amDAI',
        'VSQ',
        'VISION',
        'AURUM',
        'pSP',
        'SNX',
        'VC',
        'LINK',
        'CHP',
        'amUSDT',
        'SPHERE',
        'FOX',
        'GIDDY',
        'GFC',
        'OMEN',
        'OX_OLD',
        'DE',
        'WNT'
    ],
    SUGGESTED_TOKENS_BY_CHAIN: {
        // Arbitrum One
        'eip155:42161': ['USD₮0']
    },
    BALANCE_SUPPORTED_CHAINS: [
        ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        ConstantsUtil_ConstantsUtil.CHAIN.SOLANA
    ],
    SEND_PARAMS_SUPPORTED_CHAINS: [ConstantsUtil_ConstantsUtil.CHAIN.EVM],
    SWAP_SUPPORTED_NETWORKS: [
        // Ethereum'
        'eip155:1',
        // Arbitrum One'
        'eip155:42161',
        // Optimism'
        'eip155:10',
        // ZKSync Era'
        'eip155:324',
        // Base'
        'eip155:8453',
        // BNB Smart Chain'
        'eip155:56',
        // Polygon'
        'eip155:137',
        // Gnosis'
        'eip155:100',
        // Avalanche'
        'eip155:43114',
        // Fantom'
        'eip155:250',
        // Klaytn'
        'eip155:8217',
        // Aurora
        'eip155:1313161554'
    ],
    NAMES_SUPPORTED_CHAIN_NAMESPACES: [ConstantsUtil_ConstantsUtil.CHAIN.EVM],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
        ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        ConstantsUtil_ConstantsUtil.CHAIN.SOLANA
    ],
    PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
        ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        ConstantsUtil_ConstantsUtil.CHAIN.SOLANA
    ],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
        ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        ConstantsUtil_ConstantsUtil.CHAIN.TON
    ],
    NATIVE_TOKEN_ADDRESS: {
        eip155: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        solana: 'So11111111111111111111111111111111111111111',
        polkadot: '0x',
        bip122: '0x',
        cosmos: '0x',
        sui: '0x',
        stacks: '0x',
        ton: '0x'
    },
    CONVERT_SLIPPAGE_TOLERANCE: 1,
    CONNECT_LABELS: {
        MOBILE: 'Open and continue in the wallet app',
        WEB: 'Open and continue in the wallet app'
    },
    SEND_SUPPORTED_NAMESPACES: [
        ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        ConstantsUtil_ConstantsUtil.CHAIN.SOLANA
    ],
    DEFAULT_REMOTE_FEATURES: {
        swaps: ['1inch'],
        onramp: ['meld'],
        email: true,
        socials: [
            'google',
            'x',
            'discord',
            'farcaster',
            'github',
            'apple',
            'facebook'
        ],
        activity: true,
        reownBranding: true,
        multiWallet: false,
        emailCapture: false,
        payWithExchange: false,
        payments: false,
        reownAuthentication: false,
        headless: false
    },
    DEFAULT_REMOTE_FEATURES_DISABLED: {
        email: false,
        socials: false,
        swaps: false,
        onramp: false,
        activity: false,
        reownBranding: false,
        emailCapture: false,
        reownAuthentication: false,
        headless: false
    },
    DEFAULT_FEATURES: {
        receive: true,
        send: true,
        emailShowWallets: true,
        connectorTypeOrder: [
            'walletConnect',
            'recent',
            'injected',
            'featured',
            'custom',
            'external',
            'recommended'
        ],
        analytics: true,
        allWallets: true,
        legalCheckbox: false,
        smartSessions: false,
        collapseWallets: false,
        walletFeaturesOrder: ['onramp', 'swaps', 'receive', 'send'],
        connectMethodsOrder: undefined,
        pay: false,
        reownAuthentication: false,
        headless: false
    },
    DEFAULT_SOCIALS: [
        'google',
        'x',
        'farcaster',
        'discord',
        'apple',
        'github',
        'facebook'
    ],
    DEFAULT_ACCOUNT_TYPES: {
        bip122: 'payment',
        eip155: 'smartAccount',
        polkadot: 'eoa',
        solana: 'eoa',
        ton: 'eoa'
    },
    ADAPTER_TYPES: {
        UNIVERSAL: 'universal',
        SOLANA: 'solana',
        WAGMI: 'wagmi',
        ETHERS: 'ethers',
        ETHERS5: 'ethers5',
        BITCOIN: 'bitcoin'
    },
    SIWX_DEFAULTS: {
        signOutOnDisconnect: true
    },
    MANDATORY_WALLET_IDS_ON_MOBILE: [
        PresetsUtil.ConnectorExplorerIds[ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE],
        PresetsUtil.ConnectorExplorerIds[ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK],
        PresetsUtil.ConnectorExplorerIds[ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT],
        PresetsUtil.ConnectorExplorerIds[ConstantsUtil_ConstantsUtil.SOLFLARE_CONNECTOR_NAME],
        PresetsUtil.ConnectorExplorerIds[ConstantsUtil_ConstantsUtil.PHANTOM_CONNECTOR_NAME],
        PresetsUtil.ConnectorExplorerIds[ConstantsUtil_ConstantsUtil.BINANCE_CONNECTOR_NAME]
    ],
    DEFAULT_CONNECT_METHOD_ORDER: ['email', 'social', 'wallet']
};
//# sourceMappingURL=ConstantsUtil.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js
const SafeLocalStorageKeys = {
    WALLET_ID: '@appkit/wallet_id',
    WALLET_NAME: '@appkit/wallet_name',
    SOLANA_WALLET: '@appkit/solana_wallet',
    SOLANA_CAIP_CHAIN: '@appkit/solana_caip_chain',
    ACTIVE_CAIP_NETWORK_ID: '@appkit/active_caip_network_id',
    CONNECTED_SOCIAL: '@appkit/connected_social',
    CONNECTED_SOCIAL_USERNAME: '@appkit-wallet/SOCIAL_USERNAME',
    RECENT_WALLETS: '@appkit/recent_wallets',
    RECENT_WALLET: '@appkit/recent_wallet',
    DEEPLINK_CHOICE: 'WALLETCONNECT_DEEPLINK_CHOICE',
    ACTIVE_NAMESPACE: '@appkit/active_namespace',
    CONNECTED_NAMESPACES: '@appkit/connected_namespaces',
    CONNECTION_STATUS: '@appkit/connection_status',
    SIWX_AUTH_TOKEN: '@appkit/siwx-auth-token',
    SIWX_NONCE_TOKEN: '@appkit/siwx-nonce-token',
    TELEGRAM_SOCIAL_PROVIDER: '@appkit/social_provider',
    NATIVE_BALANCE_CACHE: '@appkit/native_balance_cache',
    PORTFOLIO_CACHE: '@appkit/portfolio_cache',
    ENS_CACHE: '@appkit/ens_cache',
    IDENTITY_CACHE: '@appkit/identity_cache',
    PREFERRED_ACCOUNT_TYPES: '@appkit/preferred_account_types',
    CONNECTIONS: '@appkit/connections',
    DISCONNECTED_CONNECTOR_IDS: '@appkit/disconnected_connector_ids',
    HISTORY_TRANSACTIONS_CACHE: '@appkit/history_transactions_cache',
    TOKEN_PRICE_CACHE: '@appkit/token_price_cache',
    RECENT_EMAILS: '@appkit/recent_emails',
    LATEST_APPKIT_VERSION: '@appkit/latest_version',
    TON_WALLETS_CACHE: '@appkit/ton_wallets_cache'
};
function getSafeConnectorIdKey(namespace) {
    if (!namespace) {
        throw new Error('Namespace is required for CONNECTED_CONNECTOR_ID');
    }
    return `@appkit/${namespace}:connected_connector_id`;
}
const SafeLocalStorage = {
    setItem(key, value) {
        if (isSafe() && value !== undefined) {
            localStorage.setItem(key, value);
        }
    },
    getItem(key) {
        if (isSafe()) {
            return localStorage.getItem(key) || undefined;
        }
        return undefined;
    },
    removeItem(key) {
        if (isSafe()) {
            localStorage.removeItem(key);
        }
    },
    clear() {
        if (isSafe()) {
            localStorage.clear();
        }
    }
};
function isSafe() {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}
//# sourceMappingURL=SafeLocalStorage.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js
/* eslint-disable no-console */

// -- Utility -----------------------------------------------------------------
const StorageUtil = {
    // Cache expiry in milliseconds
    cacheExpiry: {
        portfolio: 30000,
        nativeBalance: 30000,
        ens: 300000,
        identity: 300000,
        transactionsHistory: 15000,
        tokenPrice: 15000,
        // 7 Days
        latestAppKitVersion: 604_800_000,
        // 1 Day
        tonWallets: 86_400_000
    },
    isCacheExpired(timestamp, cacheExpiry) {
        return Date.now() - timestamp > cacheExpiry;
    },
    getActiveNetworkProps() {
        const namespace = StorageUtil.getActiveNamespace();
        const caipNetworkId = StorageUtil.getActiveCaipNetworkId();
        const stringChainId = caipNetworkId ? caipNetworkId.split(':')[1] : undefined;
        // eslint-disable-next-line no-nested-ternary
        const chainId = stringChainId
            ? isNaN(Number(stringChainId))
                ? stringChainId
                : Number(stringChainId)
            : undefined;
        return {
            namespace,
            caipNetworkId,
            chainId
        };
    },
    setWalletConnectDeepLink({ name, href }) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.DEEPLINK_CHOICE, JSON.stringify({ href, name }));
        }
        catch {
            console.info('Unable to set WalletConnect deep link');
        }
    },
    getWalletConnectDeepLink() {
        try {
            const deepLink = SafeLocalStorage.getItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
            if (deepLink) {
                return JSON.parse(deepLink);
            }
        }
        catch {
            console.info('Unable to get WalletConnect deep link');
        }
        return undefined;
    },
    deleteWalletConnectDeepLink() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
        }
        catch {
            console.info('Unable to delete WalletConnect deep link');
        }
    },
    setActiveNamespace(namespace) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE, namespace);
        }
        catch {
            console.info('Unable to set active namespace');
        }
    },
    setActiveCaipNetworkId(caipNetworkId) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID, caipNetworkId);
            StorageUtil.setActiveNamespace(caipNetworkId.split(':')[0]);
        }
        catch {
            console.info('Unable to set active caip network id');
        }
    },
    getActiveCaipNetworkId() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
        }
        catch {
            console.info('Unable to get active caip network id');
            return undefined;
        }
    },
    deleteActiveCaipNetworkId() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
        }
        catch {
            console.info('Unable to delete active caip network id');
        }
    },
    deleteConnectedConnectorId(namespace) {
        try {
            const key = getSafeConnectorIdKey(namespace);
            SafeLocalStorage.removeItem(key);
        }
        catch {
            console.info('Unable to delete connected connector id');
        }
    },
    setAppKitRecent(wallet) {
        try {
            const recentWallets = StorageUtil.getRecentWallets();
            const exists = recentWallets.find(w => w.id === wallet.id);
            if (!exists) {
                recentWallets.unshift(wallet);
                if (recentWallets.length > 2) {
                    recentWallets.pop();
                }
                SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLETS, JSON.stringify(recentWallets));
                SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLET, JSON.stringify(wallet));
            }
        }
        catch {
            console.info('Unable to set AppKit recent');
        }
    },
    getRecentWallets() {
        try {
            const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLETS);
            return recent ? JSON.parse(recent) : [];
        }
        catch {
            console.info('Unable to get AppKit recent');
        }
        return [];
    },
    getRecentWallet() {
        try {
            const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLET);
            return recent ? JSON.parse(recent) : null;
        }
        catch {
            console.info('Unable to get AppKit recent');
        }
        return null;
    },
    deleteRecentWallet() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.RECENT_WALLET);
        }
        catch {
            console.info('Unable to delete AppKit recent');
        }
    },
    setConnectedConnectorId(namespace, connectorId) {
        try {
            const key = getSafeConnectorIdKey(namespace);
            SafeLocalStorage.setItem(key, connectorId);
        }
        catch {
            console.info('Unable to set Connected Connector Id');
        }
    },
    getActiveNamespace() {
        try {
            const activeNamespace = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE);
            return activeNamespace;
        }
        catch {
            console.info('Unable to get active namespace');
        }
        return undefined;
    },
    getConnectedConnectorId(namespace) {
        if (!namespace) {
            return undefined;
        }
        try {
            const key = getSafeConnectorIdKey(namespace);
            return SafeLocalStorage.getItem(key);
        }
        catch (e) {
            console.info('Unable to get connected connector id in namespace', namespace);
        }
        return undefined;
    },
    setConnectedSocialProvider(socialProvider) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_SOCIAL, socialProvider);
        }
        catch {
            console.info('Unable to set connected social provider');
        }
    },
    getConnectedSocialProvider() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
        }
        catch {
            console.info('Unable to get connected social provider');
        }
        return undefined;
    },
    deleteConnectedSocialProvider() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
        }
        catch {
            console.info('Unable to delete connected social provider');
        }
    },
    getConnectedSocialUsername() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL_USERNAME);
        }
        catch {
            console.info('Unable to get connected social username');
        }
        return undefined;
    },
    getStoredActiveCaipNetworkId() {
        const storedCaipNetworkId = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
        const networkId = storedCaipNetworkId?.split(':')?.[1];
        return networkId;
    },
    setConnectionStatus(status) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTION_STATUS, status);
        }
        catch {
            console.info('Unable to set connection status');
        }
    },
    getConnectionStatus() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTION_STATUS);
        }
        catch {
            return undefined;
        }
    },
    getConnectedNamespaces() {
        try {
            const namespaces = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES);
            if (!namespaces?.length) {
                return [];
            }
            return namespaces.split(',');
        }
        catch {
            return [];
        }
    },
    setConnectedNamespaces(namespaces) {
        try {
            const uniqueNamespaces = Array.from(new Set(namespaces));
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES, uniqueNamespaces.join(','));
        }
        catch {
            console.info('Unable to set namespaces in storage');
        }
    },
    addConnectedNamespace(namespace) {
        try {
            const namespaces = StorageUtil.getConnectedNamespaces();
            if (!namespaces.includes(namespace)) {
                namespaces.push(namespace);
                StorageUtil.setConnectedNamespaces(namespaces);
            }
        }
        catch {
            console.info('Unable to add connected namespace');
        }
    },
    removeConnectedNamespace(namespace) {
        try {
            const namespaces = StorageUtil.getConnectedNamespaces();
            const index = namespaces.indexOf(namespace);
            if (index > -1) {
                namespaces.splice(index, 1);
                StorageUtil.setConnectedNamespaces(namespaces);
            }
        }
        catch {
            console.info('Unable to remove connected namespace');
        }
    },
    getTelegramSocialProvider() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
        }
        catch {
            console.info('Unable to get telegram social provider');
            return null;
        }
    },
    setTelegramSocialProvider(socialProvider) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER, socialProvider);
        }
        catch {
            console.info('Unable to set telegram social provider');
        }
    },
    removeTelegramSocialProvider() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
        }
        catch {
            console.info('Unable to remove telegram social provider');
        }
    },
    getBalanceCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get balance cache');
        }
        return cache;
    },
    removeAddressFromBalanceCache(caipAddress) {
        try {
            const cache = StorageUtil.getBalanceCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify({ ...cache, [caipAddress]: undefined }));
        }
        catch {
            console.info('Unable to remove address from balance cache', caipAddress);
        }
    },
    getBalanceCacheForCaipAddress(caipAddress) {
        try {
            const cache = StorageUtil.getBalanceCache();
            const balanceCache = cache[caipAddress];
            // We want to discard cache if it's older than the cache expiry
            if (balanceCache &&
                !this.isCacheExpired(balanceCache.timestamp, this.cacheExpiry.portfolio)) {
                return balanceCache.balance;
            }
            StorageUtil.removeAddressFromBalanceCache(caipAddress);
        }
        catch {
            console.info('Unable to get balance cache for address', caipAddress);
        }
        return undefined;
    },
    updateBalanceCache(params) {
        try {
            const cache = StorageUtil.getBalanceCache();
            cache[params.caipAddress] = params;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update balance cache', params);
        }
    },
    getNativeBalanceCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get balance cache');
        }
        return cache;
    },
    removeAddressFromNativeBalanceCache(caipAddress) {
        try {
            const cache = StorageUtil.getBalanceCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify({ ...cache, [caipAddress]: undefined }));
        }
        catch {
            console.info('Unable to remove address from balance cache', caipAddress);
        }
    },
    getNativeBalanceCacheForCaipAddress(caipAddress) {
        try {
            const cache = StorageUtil.getNativeBalanceCache();
            const nativeBalanceCache = cache[caipAddress];
            // We want to discard cache if it's older than the cache expiry
            if (nativeBalanceCache &&
                !this.isCacheExpired(nativeBalanceCache.timestamp, this.cacheExpiry.nativeBalance)) {
                return nativeBalanceCache;
            }
            console.info('Discarding cache for address', caipAddress);
            StorageUtil.removeAddressFromBalanceCache(caipAddress);
        }
        catch {
            console.info('Unable to get balance cache for address', caipAddress);
        }
        return undefined;
    },
    updateNativeBalanceCache(params) {
        try {
            const cache = StorageUtil.getNativeBalanceCache();
            cache[params.caipAddress] = params;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update balance cache', params);
        }
    },
    getEnsCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.ENS_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get ens name cache');
        }
        return cache;
    },
    getEnsFromCacheForAddress(address) {
        try {
            const cache = StorageUtil.getEnsCache();
            const ensCache = cache[address];
            // We want to discard cache if it's older than the cache expiry
            if (ensCache && !this.isCacheExpired(ensCache.timestamp, this.cacheExpiry.ens)) {
                return ensCache.ens;
            }
            StorageUtil.removeEnsFromCache(address);
        }
        catch {
            console.info('Unable to get ens name from cache', address);
        }
        return undefined;
    },
    updateEnsCache(params) {
        try {
            const cache = StorageUtil.getEnsCache();
            cache[params.address] = params;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update ens name cache', params);
        }
    },
    removeEnsFromCache(address) {
        try {
            const cache = StorageUtil.getEnsCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify({ ...cache, [address]: undefined }));
        }
        catch {
            console.info('Unable to remove ens name from cache', address);
        }
    },
    getIdentityCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.IDENTITY_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get identity cache');
        }
        return cache;
    },
    getIdentityFromCacheForAddress(address) {
        try {
            const cache = StorageUtil.getIdentityCache();
            const identityCache = cache[address];
            // We want to discard cache if it's older than the cache expiry
            if (identityCache &&
                !this.isCacheExpired(identityCache.timestamp, this.cacheExpiry.identity)) {
                return identityCache.identity;
            }
            StorageUtil.removeIdentityFromCache(address);
        }
        catch {
            console.info('Unable to get identity from cache', address);
        }
        return undefined;
    },
    updateIdentityCache(params) {
        try {
            const cache = StorageUtil.getIdentityCache();
            cache[params.address] = {
                identity: params.identity,
                timestamp: params.timestamp
            };
            SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update identity cache', params);
        }
    },
    removeIdentityFromCache(address) {
        try {
            const cache = StorageUtil.getIdentityCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify({ ...cache, [address]: undefined }));
        }
        catch {
            console.info('Unable to remove identity from cache', address);
        }
    },
    getTonWalletsCache() {
        try {
            const cache = SafeLocalStorage.getItem(SafeLocalStorageKeys.TON_WALLETS_CACHE);
            const parsedCache = cache ? JSON.parse(cache) : undefined;
            if (parsedCache && !this.isCacheExpired(parsedCache.timestamp, this.cacheExpiry.tonWallets)) {
                return parsedCache;
            }
            StorageUtil.removeTonWalletsCache();
        }
        catch {
            console.info('Unable to get ton wallets cache');
        }
        return undefined;
    },
    updateTonWalletsCache(wallets) {
        try {
            const cache = StorageUtil.getTonWalletsCache() || { timestamp: 0, wallets: [] };
            cache.timestamp = new Date().getTime();
            cache.wallets = wallets;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.TON_WALLETS_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update ton wallets cache', wallets);
        }
    },
    removeTonWalletsCache() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.TON_WALLETS_CACHE);
        }
        catch {
            console.info('Unable to remove ton wallets cache');
        }
    },
    clearAddressCache() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.ENS_CACHE);
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.IDENTITY_CACHE);
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
        }
        catch {
            console.info('Unable to clear address cache');
        }
    },
    setPreferredAccountTypes(accountTypes) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES, JSON.stringify(accountTypes));
        }
        catch {
            console.info('Unable to set preferred account types', accountTypes);
        }
    },
    getPreferredAccountTypes() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES);
            if (!result) {
                return {};
            }
            return JSON.parse(result);
        }
        catch {
            console.info('Unable to get preferred account types');
        }
        return {};
    },
    setConnections(connections, chainNamespace) {
        try {
            const existingConnections = StorageUtil.getConnections();
            const existing = existingConnections[chainNamespace] ?? [];
            const connectorConnectionMap = new Map();
            for (const conn of existing) {
                connectorConnectionMap.set(conn.connectorId, { ...conn });
            }
            for (const conn of connections) {
                const existingConn = connectorConnectionMap.get(conn.connectorId);
                const isAuth = conn.connectorId === ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH;
                if (existingConn && !isAuth) {
                    const existingAddrs = new Set(existingConn.accounts.map(a => a.address.toLowerCase()));
                    const newAccounts = conn.accounts.filter(a => !existingAddrs.has(a.address.toLowerCase()));
                    existingConn.accounts.push(...newAccounts);
                }
                else {
                    connectorConnectionMap.set(conn.connectorId, { ...conn });
                }
            }
            const dedupedConnections = {
                ...existingConnections,
                [chainNamespace]: Array.from(connectorConnectionMap.values())
            };
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify(dedupedConnections));
        }
        catch (error) {
            console.error('Unable to sync connections to storage', error);
        }
    },
    getConnections() {
        try {
            const connectionsStorage = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTIONS);
            if (!connectionsStorage) {
                return {};
            }
            return JSON.parse(connectionsStorage);
        }
        catch (error) {
            console.error('Unable to get connections from storage', error);
            return {};
        }
    },
    deleteAddressFromConnection({ connectorId, address, namespace }) {
        try {
            const connections = StorageUtil.getConnections();
            const namespaceConnections = connections[namespace] ?? [];
            const connectionMap = new Map(namespaceConnections.map(conn => [conn.connectorId, conn]));
            const connector = connectionMap.get(connectorId);
            if (connector) {
                const updatedAccounts = connector.accounts.filter(acc => acc.address.toLowerCase() !== address.toLowerCase());
                if (updatedAccounts.length === 0) {
                    connectionMap.delete(connectorId);
                }
                else {
                    connectionMap.set(connectorId, {
                        ...connector,
                        accounts: connector.accounts.filter(acc => acc.address.toLowerCase() !== address.toLowerCase())
                    });
                }
            }
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify({
                ...connections,
                [namespace]: Array.from(connectionMap.values())
            }));
        }
        catch {
            console.error(`Unable to remove address "${address}" from connector "${connectorId}" in namespace "${namespace}"`);
        }
    },
    getDisconnectedConnectorIds() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS);
            if (!result) {
                return {};
            }
            return JSON.parse(result);
        }
        catch {
            console.info('Unable to get disconnected connector ids');
        }
        return {};
    },
    addDisconnectedConnectorId(connectorId, chainNamespace) {
        try {
            const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
            const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
            disconnectedConnectorIdsByNamespace.push(connectorId);
            SafeLocalStorage.setItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
                ...currentDisconnectedConnectorIds,
                [chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
            }));
        }
        catch {
            console.error(`Unable to set disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
        }
    },
    removeDisconnectedConnectorId(connectorId, chainNamespace) {
        try {
            const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
            let disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
            disconnectedConnectorIdsByNamespace = disconnectedConnectorIdsByNamespace.filter(id => id.toLowerCase() !== connectorId.toLowerCase());
            SafeLocalStorage.setItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
                ...currentDisconnectedConnectorIds,
                [chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
            }));
        }
        catch {
            console.error(`Unable to remove disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
        }
    },
    isConnectorDisconnected(connectorId, chainNamespace) {
        try {
            const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
            const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
            return disconnectedConnectorIdsByNamespace.some(id => id.toLowerCase() === connectorId.toLowerCase());
        }
        catch {
            console.info(`Unable to get disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
        }
        return false;
    },
    getTransactionsCache() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
            return result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get transactions cache');
        }
        return {};
    },
    getTransactionsCacheForAddress({ address, chainId = '' }) {
        try {
            const cache = StorageUtil.getTransactionsCache();
            const transactionsCache = cache[address]?.[chainId];
            // We want to discard cache if it's older than the cache expiry
            if (transactionsCache &&
                !this.isCacheExpired(transactionsCache.timestamp, this.cacheExpiry.transactionsHistory)) {
                return transactionsCache.transactions;
            }
            StorageUtil.removeTransactionsCache({ address, chainId });
        }
        catch {
            console.info('Unable to get transactions cache');
        }
        return undefined;
    },
    updateTransactionsCache({ address, chainId = '', timestamp, transactions }) {
        try {
            const cache = StorageUtil.getTransactionsCache();
            cache[address] = {
                ...cache[address],
                [chainId]: {
                    timestamp,
                    transactions
                }
            };
            SafeLocalStorage.setItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update transactions cache', {
                address,
                chainId,
                timestamp,
                transactions
            });
        }
    },
    removeTransactionsCache({ address, chainId }) {
        try {
            const cache = StorageUtil.getTransactionsCache();
            const addressCache = cache?.[address] || {};
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [chainId]: _removed, ...updatedChainData } = addressCache;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
                ...cache,
                [address]: updatedChainData
            }));
        }
        catch {
            console.info('Unable to remove transactions cache', { address, chainId });
        }
    },
    getTokenPriceCache() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE);
            return result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get token price cache');
        }
        return {};
    },
    getTokenPriceCacheForAddresses(addresses) {
        try {
            const cache = StorageUtil.getTokenPriceCache();
            const tokenPriceCache = cache[addresses.join(',')];
            if (tokenPriceCache &&
                !this.isCacheExpired(tokenPriceCache.timestamp, this.cacheExpiry.tokenPrice)) {
                return tokenPriceCache.tokenPrice;
            }
            StorageUtil.removeTokenPriceCache(addresses);
        }
        catch {
            console.info('Unable to get token price cache for addresses', addresses);
        }
        return undefined;
    },
    updateTokenPriceCache(params) {
        try {
            const cache = StorageUtil.getTokenPriceCache();
            cache[params.addresses.join(',')] = {
                timestamp: params.timestamp,
                tokenPrice: params.tokenPrice
            };
            SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update token price cache', params);
        }
    },
    removeTokenPriceCache(addresses) {
        try {
            const cache = StorageUtil.getTokenPriceCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify({ ...cache, [addresses.join(',')]: undefined }));
        }
        catch {
            console.info('Unable to remove token price cache', addresses);
        }
    },
    /* ----- AppKit Latest Version ------------------------- */
    getLatestAppKitVersion() {
        try {
            const result = this.getLatestAppKitVersionCache();
            const version = result?.version;
            if (version && !this.isCacheExpired(result.timestamp, this.cacheExpiry.latestAppKitVersion)) {
                return version;
            }
            return undefined;
        }
        catch {
            console.info('Unable to get latest AppKit version');
        }
        return undefined;
    },
    getLatestAppKitVersionCache() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION);
            return result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get latest AppKit version cache');
        }
        return {};
    },
    updateLatestAppKitVersion(params) {
        try {
            const cache = StorageUtil.getLatestAppKitVersionCache();
            cache.timestamp = params.timestamp;
            cache.version = params.version;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update latest AppKit version on local storage', params);
        }
    }
};
//# sourceMappingURL=StorageUtil.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js



const CoreHelperUtil_CoreHelperUtil = {
    getWindow() {
        if (typeof window === 'undefined') {
            return undefined;
        }
        return window;
    },
    isMobile() {
        if (this.isClient()) {
            return Boolean((window?.matchMedia &&
                typeof window.matchMedia === 'function' &&
                window.matchMedia('(pointer:coarse)')?.matches) ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
        }
        return false;
    },
    checkCaipNetwork(network, networkName = '') {
        return network?.caipNetworkId.toLocaleLowerCase().includes(networkName.toLowerCase());
    },
    isAndroid() {
        if (!this.isMobile()) {
            return false;
        }
        const ua = window?.navigator.userAgent.toLowerCase();
        return CoreHelperUtil_CoreHelperUtil.isMobile() && ua.includes('android');
    },
    isIos() {
        if (!this.isMobile()) {
            return false;
        }
        const ua = window?.navigator.userAgent.toLowerCase();
        return ua.includes('iphone') || ua.includes('ipad');
    },
    isSafari() {
        if (!this.isClient()) {
            return false;
        }
        const ua = window?.navigator.userAgent.toLowerCase();
        return ua.includes('safari');
    },
    isClient() {
        return typeof window !== 'undefined';
    },
    isPairingExpired(expiry) {
        return expiry ? expiry - Date.now() <= utils_ConstantsUtil_ConstantsUtil.TEN_SEC_MS : true;
    },
    isAllowedRetry(lastRetry, differenceMs = utils_ConstantsUtil_ConstantsUtil.ONE_SEC_MS) {
        return Date.now() - lastRetry >= differenceMs;
    },
    copyToClopboard(text) {
        navigator.clipboard.writeText(text);
    },
    isIframe() {
        try {
            return window?.self !== window?.top;
        }
        catch (e) {
            return false;
        }
    },
    isSafeApp() {
        if (CoreHelperUtil_CoreHelperUtil.isClient() && window.self !== window.top) {
            try {
                const ancestor = window?.location?.ancestorOrigins?.[0];
                const safeAppUrl = 'https://app.safe.global';
                if (ancestor) {
                    const ancestorUrl = new URL(ancestor);
                    const safeUrl = new URL(safeAppUrl);
                    return ancestorUrl.hostname === safeUrl.hostname;
                }
            }
            catch {
                return false;
            }
        }
        return false;
    },
    getPairingExpiry() {
        return Date.now() + utils_ConstantsUtil_ConstantsUtil.FOUR_MINUTES_MS;
    },
    getNetworkId(caipAddress) {
        return caipAddress?.split(':')[1];
    },
    getPlainAddress(caipAddress) {
        return caipAddress?.split(':')[2];
    },
    async wait(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    debounce(func, timeout = 500) {
        let timer = undefined;
        return (...args) => {
            function next() {
                func(...args);
            }
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(next, timeout);
        };
    },
    isHttpUrl(url) {
        return url.startsWith('http://') || url.startsWith('https://');
    },
    formatNativeUrl(appUrl, wcUri, universalLink = null) {
        if (CoreHelperUtil_CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatUniversalUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        let safeUniversalLink = universalLink;
        if (!safeAppUrl.includes('://')) {
            safeAppUrl = appUrl.replaceAll('/', '').replaceAll(':', '');
            safeAppUrl = `${safeAppUrl}://`;
        }
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = `${safeAppUrl}/`;
        }
        if (safeUniversalLink && !safeUniversalLink?.endsWith('/')) {
            safeUniversalLink = `${safeUniversalLink}/`;
        }
        // Android deeplinks in tg context require the uri to be encoded twice
        if (this.isTelegram() && this.isAndroid()) {
            // eslint-disable-next-line no-param-reassign
            wcUri = encodeURIComponent(wcUri);
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            redirectUniversalLink: safeUniversalLink
                ? `${safeUniversalLink}wc?uri=${encodedWcUrl}`
                : undefined,
            href: safeAppUrl
        };
    },
    formatUniversalUrl(appUrl, wcUri) {
        if (!CoreHelperUtil_CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatNativeUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = `${safeAppUrl}/`;
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            href: safeAppUrl
        };
    },
    getOpenTargetForPlatform(target) {
        if (target === 'popupWindow') {
            return target;
        }
        // Only '_blank' deeplinks work in Telegram context
        if (this.isTelegram()) {
            // But for social login, we need to load the page in the same context
            if (StorageUtil.getTelegramSocialProvider()) {
                return '_top';
            }
            return '_blank';
        }
        return target;
    },
    openHref(href, target, features) {
        window?.open(href, this.getOpenTargetForPlatform(target), features || 'noreferrer noopener');
    },
    returnOpenHref(href, target, features) {
        return window?.open(href, this.getOpenTargetForPlatform(target), features || 'noreferrer noopener');
    },
    isTelegram() {
        return (typeof window !== 'undefined' &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (Boolean(window.TelegramWebviewProxy) ||
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Boolean(window.Telegram) ||
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Boolean(window.TelegramWebviewProxyProto)));
    },
    isPWA() {
        if (typeof window === 'undefined') {
            return false;
        }
        const isStandaloneDisplayMode = window?.matchMedia && typeof window.matchMedia === 'function'
            ? window.matchMedia('(display-mode: standalone)')?.matches
            : false;
        const isIOSStandalone = window?.navigator?.standalone;
        return Boolean(isStandaloneDisplayMode || isIOSStandalone);
    },
    async preloadImage(src) {
        const imagePromise = new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.crossOrigin = 'anonymous';
            image.src = src;
        });
        return Promise.race([imagePromise, CoreHelperUtil_CoreHelperUtil.wait(2000)]);
    },
    parseBalance(balance, symbol) {
        let formattedBalance = '0.000';
        if (typeof balance === 'string') {
            const number = Number(balance);
            if (!isNaN(number)) {
                const formattedValue = (Math.floor(number * 1000) / 1000).toFixed(3);
                if (formattedValue) {
                    formattedBalance = formattedValue;
                }
            }
        }
        const [valueString, decimalsString] = formattedBalance.split('.');
        const value = valueString || '0';
        const decimals = decimalsString || '000';
        const formattedText = `${value}.${decimals}${symbol ? ` ${symbol}` : ''}`;
        return {
            formattedText,
            value,
            decimals,
            symbol
        };
    },
    getApiUrl() {
        return ConstantsUtil_ConstantsUtil.W3M_API_URL;
    },
    getBlockchainApiUrl() {
        return ConstantsUtil_ConstantsUtil.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
        return ConstantsUtil_ConstantsUtil.PULSE_API_URL;
    },
    getUUID() {
        if (crypto?.randomUUID) {
            return crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, c => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseError(error) {
        if (typeof error === 'string') {
            return error;
        }
        else if (typeof error?.issues?.[0]?.message === 'string') {
            return error.issues[0].message;
        }
        else if (error instanceof Error) {
            return error.message;
        }
        return 'Unknown error';
    },
    sortRequestedNetworks(approvedIds, requestedNetworks = []) {
        const approvedIndexMap = {};
        if (requestedNetworks && approvedIds) {
            approvedIds.forEach((id, index) => {
                approvedIndexMap[id] = index;
            });
            requestedNetworks.sort((a, b) => {
                const indexA = approvedIndexMap[a.id];
                const indexB = approvedIndexMap[b.id];
                if (indexA !== undefined && indexB !== undefined) {
                    return indexA - indexB;
                }
                else if (indexA !== undefined) {
                    return -1;
                }
                else if (indexB !== undefined) {
                    return 1;
                }
                return 0;
            });
        }
        return requestedNetworks;
    },
    calculateBalance(array) {
        let sum = 0;
        for (const item of array) {
            sum += item.value ?? 0;
        }
        return sum;
    },
    formatTokenBalance(number) {
        const roundedNumber = number.toFixed(2);
        const [dollars, pennies] = roundedNumber.split('.');
        return { dollars, pennies };
    },
    isAddress(address, chain = 'eip155') {
        switch (chain) {
            case 'eip155':
                if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
                    return false;
                }
                else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) ||
                    /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
                    return true;
                }
                return false;
            case 'solana':
                return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(address);
            case 'bip122': {
                const isP2PKH = /^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(address);
                const isP2SH = /^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(address);
                const isBech32 = /^bc1[a-z0-9]{39,87}$/u.test(address);
                const isBech32m = /^bc1p[a-z0-9]{58}$/u.test(address);
                return isP2PKH || isP2SH || isBech32 || isBech32m;
            }
            default:
                return false;
        }
    },
    uniqueBy(arr, key) {
        const set = new Set();
        return arr.filter(item => {
            const keyValue = item[key];
            if (set.has(keyValue)) {
                return false;
            }
            set.add(keyValue);
            return true;
        });
    },
    generateSdkVersion(adapters, platform, version) {
        const hasNoAdapters = adapters.length === 0;
        const adapterNames = (hasNoAdapters
            ? utils_ConstantsUtil_ConstantsUtil.ADAPTER_TYPES.UNIVERSAL
            : adapters.map(adapter => adapter.adapterType).join(','));
        return `${platform}-${adapterNames}-${version}`;
    },
    // eslint-disable-next-line max-params
    createAccount(namespace, address, type, publicKey, path) {
        return {
            namespace,
            address,
            type,
            publicKey,
            path
        };
    },
    isCaipAddress(address) {
        if (typeof address !== 'string') {
            return false;
        }
        const sections = address.split(':');
        const namespace = sections[0];
        return (sections.filter(Boolean).length === 3 &&
            namespace in ConstantsUtil_ConstantsUtil.CHAIN_NAME_MAP);
    },
    getAccount(account) {
        if (!account) {
            return {
                address: undefined,
                chainId: undefined
            };
        }
        if (typeof account === 'string') {
            return {
                address: account,
                chainId: undefined
            };
        }
        return {
            address: account.address,
            chainId: account.chainId
        };
    },
    isMac() {
        const ua = window?.navigator.userAgent.toLowerCase();
        return ua.includes('macintosh') && !ua.includes('safari');
    },
    formatTelegramSocialLoginUrl(url) {
        const valueToInject = `--${encodeURIComponent(window?.location.href)}`;
        const paramToInject = 'state=';
        const parsedUrl = new URL(url);
        if (parsedUrl.host === 'auth.magic.link') {
            const providerParam = 'provider_authorization_url=';
            const providerUrl = url.substring(url.indexOf(providerParam) + providerParam.length);
            const resultUrl = this.injectIntoUrl(decodeURIComponent(providerUrl), paramToInject, valueToInject);
            return url.replace(providerUrl, encodeURIComponent(resultUrl));
        }
        return this.injectIntoUrl(url, paramToInject, valueToInject);
    },
    injectIntoUrl(url, key, appendString) {
        // Find the position of "key" e.g. "state=" in the URL
        const keyIndex = url.indexOf(key);
        if (keyIndex === -1) {
            throw new Error(`${key} parameter not found in the URL: ${url}`);
        }
        // Find the position of the next "&" after "key"
        const keyEndIndex = url.indexOf('&', keyIndex);
        const keyLength = key.length;
        // If there is no "&" after key, it means "key" is the last parameter
        // eslint-disable-next-line no-negated-condition
        const keyParamEnd = keyEndIndex !== -1 ? keyEndIndex : url.length;
        // Extract the part of the URL before the key value
        const beforeKeyValue = url.substring(0, keyIndex + keyLength);
        // Extract the current key value
        const currentKeyValue = url.substring(keyIndex + keyLength, keyParamEnd);
        // Extract the part of the URL after the key value
        const afterKeyValue = url.substring(keyEndIndex);
        // Append the new string to the key value
        const newKeyValue = currentKeyValue + appendString;
        // Reconstruct the URL with the appended key value
        const newUrl = beforeKeyValue + newKeyValue + afterKeyValue;
        return newUrl;
    },
    isNumber(value) {
        if (typeof value !== 'number' && typeof value !== 'string') {
            return false;
        }
        return !isNaN(Number(value));
    }
};
//# sourceMappingURL=CoreHelperUtil.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-controllers/dist/esm/src/utils/FetchUtil.js
async function fetchData(...args) {
    const response = await fetch(...args);
    if (!response.ok) {
        // Create error object and reject if not a 2xx response code
        const err = new Error(`HTTP status code: ${response.status}`, {
            cause: response
        });
        throw err;
    }
    return response;
}
// -- Utility --------------------------------------------------------------------
class FetchUtil {
    constructor({ baseUrl, clientId }) {
        this.baseUrl = baseUrl;
        this.clientId = clientId;
    }
    async get({ headers, signal, cache, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, { method: 'GET', headers, signal, cache });
        return response.json();
    }
    async getBlob({ headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, { method: 'GET', headers, signal });
        return response.blob();
    }
    async post({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'POST',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async put({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'PUT',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async delete({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'DELETE',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    createUrl({ path, params }) {
        const url = new URL(path, this.baseUrl);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value) {
                    url.searchParams.append(key, value);
                }
            });
        }
        if (this.clientId) {
            url.searchParams.append('clientId', this.clientId);
        }
        return url;
    }
    sendBeacon({ body, ...args }) {
        const url = this.createUrl(args);
        return navigator.sendBeacon(url.toString(), body ? JSON.stringify(body) : undefined);
    }
}
//# sourceMappingURL=FetchUtil.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-controllers/dist/esm/src/utils/OptionsUtil.js



const OptionsUtil = {
    getFeatureValue(key, features) {
        const optionValue = features?.[key];
        if (optionValue === undefined) {
            return utils_ConstantsUtil_ConstantsUtil.DEFAULT_FEATURES[key];
        }
        return optionValue;
    },
    filterSocialsByPlatform(socials) {
        if (!socials || !socials.length) {
            return socials;
        }
        let filteredSocials = socials;
        if (CoreHelperUtil_CoreHelperUtil.isTelegram()) {
            if (CoreHelperUtil_CoreHelperUtil.isIos()) {
                filteredSocials = filteredSocials.filter(s => s !== 'google');
            }
            if (CoreHelperUtil_CoreHelperUtil.isMac()) {
                filteredSocials = filteredSocials.filter(s => s !== 'x');
            }
            if (CoreHelperUtil_CoreHelperUtil.isAndroid()) {
                filteredSocials = filteredSocials.filter(s => !['facebook', 'x'].includes(s));
            }
        }
        if (CoreHelperUtil_CoreHelperUtil.isMobile()) {
            filteredSocials = filteredSocials.filter(s => s !== 'facebook');
        }
        return filteredSocials;
    },
    isSocialsEnabled() {
        return ((Array.isArray(OptionsController_OptionsController.state.features?.socials) &&
            OptionsController_OptionsController.state.features?.socials.length > 0) ||
            (Array.isArray(OptionsController_OptionsController.state.remoteFeatures?.socials) &&
                OptionsController_OptionsController.state.remoteFeatures?.socials.length > 0));
    },
    isEmailEnabled() {
        return Boolean(OptionsController_OptionsController.state.features?.email || OptionsController_OptionsController.state.remoteFeatures?.email);
    }
};
//# sourceMappingURL=OptionsUtil.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js





// -- State --------------------------------------------- //
const OptionsController_state = (0,vanilla/* proxy */.BX)({
    features: utils_ConstantsUtil_ConstantsUtil.DEFAULT_FEATURES,
    projectId: '',
    sdkType: 'appkit',
    sdkVersion: 'html-wagmi-undefined',
    defaultAccountTypes: utils_ConstantsUtil_ConstantsUtil.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {},
    enableMobileFullScreen: false,
    coinbasePreference: 'all'
});
// -- Controller ---------------------------------------- //
const OptionsController_OptionsController = {
    state: OptionsController_state,
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(OptionsController_state, key, callback);
    },
    setOptions(options) {
        Object.assign(OptionsController_state, options);
    },
    setRemoteFeatures(remoteFeatures) {
        if (!remoteFeatures) {
            return;
        }
        const newRemoteFeatures = { ...OptionsController_state.remoteFeatures, ...remoteFeatures };
        OptionsController_state.remoteFeatures = newRemoteFeatures;
        if (OptionsController_state.remoteFeatures?.socials) {
            OptionsController_state.remoteFeatures.socials = OptionsUtil.filterSocialsByPlatform(OptionsController_state.remoteFeatures.socials);
        }
        if (OptionsController_state.features?.pay) {
            OptionsController_state.remoteFeatures.email = false;
            OptionsController_state.remoteFeatures.socials = false;
        }
    },
    setFeatures(features) {
        if (!features) {
            return;
        }
        if (!OptionsController_state.features) {
            OptionsController_state.features = utils_ConstantsUtil_ConstantsUtil.DEFAULT_FEATURES;
        }
        const newFeatures = { ...OptionsController_state.features, ...features };
        OptionsController_state.features = newFeatures;
        if (OptionsController_state.features?.pay && OptionsController_state.remoteFeatures) {
            OptionsController_state.remoteFeatures.email = false;
            OptionsController_state.remoteFeatures.socials = false;
        }
    },
    setProjectId(projectId) {
        OptionsController_state.projectId = projectId;
    },
    setCustomRpcUrls(customRpcUrls) {
        OptionsController_state.customRpcUrls = customRpcUrls;
    },
    setAllWallets(allWallets) {
        OptionsController_state.allWallets = allWallets;
    },
    setIncludeWalletIds(includeWalletIds) {
        OptionsController_state.includeWalletIds = includeWalletIds;
    },
    setExcludeWalletIds(excludeWalletIds) {
        OptionsController_state.excludeWalletIds = excludeWalletIds;
    },
    setFeaturedWalletIds(featuredWalletIds) {
        OptionsController_state.featuredWalletIds = featuredWalletIds;
    },
    setTokens(tokens) {
        OptionsController_state.tokens = tokens;
    },
    setTermsConditionsUrl(termsConditionsUrl) {
        OptionsController_state.termsConditionsUrl = termsConditionsUrl;
    },
    setPrivacyPolicyUrl(privacyPolicyUrl) {
        OptionsController_state.privacyPolicyUrl = privacyPolicyUrl;
    },
    setCustomWallets(customWallets) {
        OptionsController_state.customWallets = customWallets;
    },
    setIsSiweEnabled(isSiweEnabled) {
        OptionsController_state.isSiweEnabled = isSiweEnabled;
    },
    setIsUniversalProvider(isUniversalProvider) {
        OptionsController_state.isUniversalProvider = isUniversalProvider;
    },
    setSdkVersion(sdkVersion) {
        OptionsController_state.sdkVersion = sdkVersion;
    },
    setMetadata(metadata) {
        OptionsController_state.metadata = metadata;
    },
    setDisableAppend(disableAppend) {
        OptionsController_state.disableAppend = disableAppend;
    },
    setEIP6963Enabled(enableEIP6963) {
        OptionsController_state.enableEIP6963 = enableEIP6963;
    },
    setDebug(debug) {
        OptionsController_state.debug = debug;
    },
    setEnableWalletGuide(enableWalletGuide) {
        OptionsController_state.enableWalletGuide = enableWalletGuide;
    },
    setEnableAuthLogger(enableAuthLogger) {
        OptionsController_state.enableAuthLogger = enableAuthLogger;
    },
    setEnableWallets(enableWallets) {
        OptionsController_state.enableWallets = enableWallets;
    },
    setPreferUniversalLinks(preferUniversalLinks) {
        OptionsController_state.experimental_preferUniversalLinks = preferUniversalLinks;
    },
    setSIWX(siwx) {
        if (siwx) {
            for (const [key, isVal] of Object.entries(utils_ConstantsUtil_ConstantsUtil.SIWX_DEFAULTS)) {
                /*
                 * Only writes when siwx[key] is null or undefined
                 * (use ||= if you only want to check “falsy”, not recommended here)
                 */
                siwx[key] ??= isVal;
            }
        }
        OptionsController_state.siwx = siwx;
    },
    setConnectMethodsOrder(connectMethodsOrder) {
        OptionsController_state.features = {
            ...OptionsController_state.features,
            connectMethodsOrder
        };
    },
    setWalletFeaturesOrder(walletFeaturesOrder) {
        OptionsController_state.features = {
            ...OptionsController_state.features,
            walletFeaturesOrder
        };
    },
    setSocialsOrder(socialsOrder) {
        OptionsController_state.remoteFeatures = {
            ...OptionsController_state.remoteFeatures,
            socials: socialsOrder
        };
    },
    setCollapseWallets(collapseWallets) {
        OptionsController_state.features = {
            ...OptionsController_state.features,
            collapseWallets
        };
    },
    setEnableEmbedded(enableEmbedded) {
        OptionsController_state.enableEmbedded = enableEmbedded;
    },
    setAllowUnsupportedChain(allowUnsupportedChain) {
        OptionsController_state.allowUnsupportedChain = allowUnsupportedChain;
    },
    setManualWCControl(manualWCControl) {
        OptionsController_state.manualWCControl = manualWCControl;
    },
    setEnableNetworkSwitch(enableNetworkSwitch) {
        OptionsController_state.enableNetworkSwitch = enableNetworkSwitch;
    },
    setEnableMobileFullScreen(enableMobileFullScreen) {
        OptionsController_state.enableMobileFullScreen = CoreHelperUtil_CoreHelperUtil.isMobile() && enableMobileFullScreen;
    },
    setEnableReconnect(enableReconnect) {
        OptionsController_state.enableReconnect = enableReconnect;
    },
    setCoinbasePreference(coinbasePreference) {
        OptionsController_state.coinbasePreference = coinbasePreference;
    },
    setDefaultAccountTypes(defaultAccountType = {}) {
        Object.entries(defaultAccountType).forEach(([namespace, accountType]) => {
            if (accountType) {
                // @ts-expect-error - Keys are validated by the param type
                OptionsController_state.defaultAccountTypes[namespace] = accountType;
            }
        });
    },
    setUniversalProviderConfigOverride(universalProviderConfigOverride) {
        OptionsController_state.universalProviderConfigOverride = universalProviderConfigOverride;
    },
    getUniversalProviderConfigOverride() {
        return OptionsController_state.universalProviderConfigOverride;
    },
    getSnapshot() {
        return (0,vanilla/* snapshot */.P9)(OptionsController_state);
    }
};
//# sourceMappingURL=OptionsController.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TelemetryController.js





// -- Constants ----------------------------------------- //
const DEFAULT_STATE = Object.freeze({
    enabled: true,
    events: []
});
const api = new FetchUtil({ baseUrl: CoreHelperUtil_CoreHelperUtil.getAnalyticsUrl(), clientId: null });
// Rate limiting constants
const MAX_ERRORS_PER_MINUTE = 5;
const ONE_MINUTE_MS = 60 * 1000;
// -- State --------------------------------------------- //
const TelemetryController_state = (0,vanilla/* proxy */.BX)({
    ...DEFAULT_STATE
});
// -- Controller ---------------------------------------- //
const TelemetryController = {
    state: TelemetryController_state,
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(TelemetryController_state, key, callback);
    },
    async sendError(error, category) {
        if (!TelemetryController_state.enabled) {
            return;
        }
        // Check rate limiting using events array
        const now = Date.now();
        const recentErrors = TelemetryController_state.events.filter(event => {
            const eventTime = new Date(event.properties.timestamp || '').getTime();
            return now - eventTime < ONE_MINUTE_MS;
        });
        if (recentErrors.length >= MAX_ERRORS_PER_MINUTE) {
            // Exit silently
            return;
        }
        const errorEvent = {
            type: 'error',
            event: category,
            properties: {
                errorType: error.name,
                errorMessage: error.message,
                stackTrace: error.stack,
                timestamp: new Date().toISOString()
            }
        };
        TelemetryController_state.events.push(errorEvent);
        try {
            if (typeof window === 'undefined') {
                return;
            }
            const { projectId, sdkType, sdkVersion } = OptionsController_OptionsController.state;
            await api.post({
                path: '/e',
                params: {
                    projectId,
                    st: sdkType,
                    sv: sdkVersion || 'html-wagmi-4.2.2'
                },
                body: {
                    eventId: CoreHelperUtil_CoreHelperUtil.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: new Date().toISOString(),
                    props: {
                        type: 'error',
                        event: category,
                        errorType: error.name,
                        errorMessage: error.message,
                        stackTrace: error.stack
                    }
                }
            });
        }
        catch {
            // Do nothing
        }
    },
    enable() {
        TelemetryController_state.enabled = true;
    },
    disable() {
        TelemetryController_state.enabled = false;
    },
    clearEvents() {
        TelemetryController_state.events = [];
    }
};
//# sourceMappingURL=TelemetryController.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js

class AppKitError extends Error {
    constructor(message, category, originalError) {
        super(message);
        this.originalName = 'AppKitError';
        this.name = 'AppKitError';
        this.category = category;
        this.originalError = originalError;
        if (originalError && originalError instanceof Error) {
            this.originalName = originalError.name;
        }
        // Ensure `this instanceof AppKitError` is true, important for custom errors.
        Object.setPrototypeOf(this, AppKitError.prototype);
        let isStackConstructedFromOriginal = false;
        if (originalError instanceof Error &&
            typeof originalError.stack === 'string' &&
            originalError.stack) {
            const originalErrorStack = originalError.stack;
            /**
             * Most error stacks start with "ErrorName: ErrorMessage\n...frames..."
             * We want to take the "...frames..." part.
             */
            const firstNewlineIndex = originalErrorStack.indexOf('\n');
            if (firstNewlineIndex > -1) {
                const originalFrames = originalErrorStack.substring(firstNewlineIndex + 1);
                this.stack = `${this.name}: ${this.message}\n${originalFrames}`;
                isStackConstructedFromOriginal = true;
            }
        }
        if (!isStackConstructedFromOriginal) {
            /**
             * If stack was not (or could not be) constructed from originalError,
             * generate a standard stack trace for this AppKitError instance.
             * This will point to where `new AppKitError()` was called.
             */
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, AppKitError);
            }
            else if (!this.stack) {
                /**
                 * Fallback for environments without Error.captureStackTrace.
                 * `super(message)` might have set a stack.
                 * If `this.stack` is still undefined/empty, provide a minimal one.
                 * Node.js and modern browsers typically set `this.stack` from `super(message)`.
                 */
                this.stack = `${this.name}: ${this.message}`;
            }
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function errorHandler(err, defaultCategory) {
    let errMessage = '';
    try {
        if (err instanceof Error) {
            errMessage = err.message;
        }
        else if (typeof err === 'string') {
            errMessage = err;
        }
        else if (typeof err === 'object' && err !== null) {
            if (Object.keys(err).length === 0) {
                errMessage = 'Unknown error';
            }
            else {
                errMessage = err?.message || JSON.stringify(err);
            }
        }
        else {
            errMessage = String(err);
        }
    }
    catch (_error) {
        errMessage = 'Unknown error';
        // eslint-disable-next-line no-console
        console.error('Error parsing error message', _error);
    }
    const error = err instanceof AppKitError ? err : new AppKitError(errMessage, defaultCategory, err);
    TelemetryController.sendError(error, error.category);
    throw error;
}
function withErrorBoundary_withErrorBoundary(controller, defaultCategory = 'INTERNAL_SDK_ERROR') {
    const newController = {};
    Object.keys(controller).forEach(key => {
        const original = controller[key];
        if (typeof original === 'function') {
            let wrapped = original;
            if (original.constructor.name === 'AsyncFunction') {
                wrapped = async (...args) => {
                    try {
                        return await original(...args);
                    }
                    catch (err) {
                        return errorHandler(err, defaultCategory);
                    }
                };
            }
            else {
                wrapped = (...args) => {
                    try {
                        return original(...args);
                    }
                    catch (err) {
                        return errorHandler(err, defaultCategory);
                    }
                };
            }
            newController[key] = wrapped;
        }
        else {
            newController[key] = original;
        }
    });
    return newController;
}
//# sourceMappingURL=withErrorBoundary.js.map
;// ./node_modules/@reown/appkit-ui/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js





// -- State --------------------------------------------- //
const AlertController_state = (0,vanilla/* proxy */.BX)({
    message: '',
    variant: 'info',
    open: false
});
// -- Controller ---------------------------------------- //
const AlertController_controller = {
    state: AlertController_state,
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(AlertController_state, key, callback);
    },
    open(message, variant) {
        const { debug } = OptionsController_OptionsController.state;
        const { code, displayMessage, debugMessage } = message;
        if (displayMessage && debug) {
            AlertController_state.message = displayMessage;
            AlertController_state.variant = variant;
            AlertController_state.open = true;
        }
        if (debugMessage) {
            if (!ConstantsUtil_ConstantsUtil.IS_DEVELOPMENT) {
                return;
            }
            const resolved = typeof debugMessage === 'function' ? debugMessage() : debugMessage;
            const meta = code ? { code } : undefined;
            if (variant === 'error') {
                // eslint-disable-next-line no-console
                console.error(resolved, meta);
            }
            else if (variant === 'warning') {
                // eslint-disable-next-line no-console
                console.warn(resolved, meta);
            }
            else {
                // eslint-disable-next-line no-console
                console.info(resolved, meta);
            }
        }
    },
    warn(title, description, code) {
        AlertController_state.open = true;
        AlertController_state.message = title;
        AlertController_state.variant = 'warning';
        if (description) {
            console.warn(description, code);
        }
    },
    close() {
        AlertController_state.open = false;
        AlertController_state.message = '';
        AlertController_state.variant = 'info';
    }
};
// Export the controller wrapped with our error boundary
const AlertController_AlertController = withErrorBoundary_withErrorBoundary(AlertController_controller);
//# sourceMappingURL=AlertController.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 26 modules
var wui_icon = __webpack_require__(332012);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(984206);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var layout_wui_flex = __webpack_require__(648832);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/index.js
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
        AlertController_AlertController.close();
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-alertbar.js

//# sourceMappingURL=wui-alertbar.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/index.js
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
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(338062);
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js
var AssetController = __webpack_require__(432558);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-button/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-button/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-button.js

//# sourceMappingURL=wui-icon-button.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(301608);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-select.js

//# sourceMappingURL=wui-select.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js + 1 modules
var wui_tag = __webpack_require__(481355);
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-tag.js

//# sourceMappingURL=wui-tag.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(945090);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js
/* provided dependency */ var utils_ConstantsUtil_process = __webpack_require__(365606);
const src_utils_ConstantsUtil_ConstantsUtil = {
    ACCOUNT_TABS: [{ label: 'Tokens' }, { label: 'Activity' }],
    SECURE_SITE_ORIGIN: (typeof utils_ConstantsUtil_process !== 'undefined' && typeof utils_ConstantsUtil_process.env !== 'undefined'
        ? utils_ConstantsUtil_process.env['NEXT_PUBLIC_SECURE_SITE_ORIGIN']
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
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
/* provided dependency */ var src_utils_ConstantsUtil_process = __webpack_require__(365606);
const esm_src_utils_ConstantsUtil_ConstantsUtil = {
    WC_NAME_SUFFIX: '.reown.id',
    WC_NAME_SUFFIX_LEGACY: '.wcn.id',
    BLOCKCHAIN_API_RPC_URL: 'https://rpc.walletconnect.org',
    PULSE_API_URL: 'https://pulse.walletconnect.org',
    W3M_API_URL: 'https://api.web3modal.org',
    CONNECTOR_ID: {
        WALLET_CONNECT: 'walletConnect',
        INJECTED: 'injected',
        WALLET_STANDARD: 'announced',
        COINBASE: 'coinbaseWallet',
        COINBASE_SDK: 'coinbaseWalletSDK',
        BASE_ACCOUNT: 'baseAccount',
        SAFE: 'safe',
        LEDGER: 'ledger',
        OKX: 'okx',
        EIP6963: 'eip6963',
        AUTH: 'AUTH'
    },
    CONNECTOR_NAMES: {
        AUTH: 'Auth'
    },
    AUTH_CONNECTOR_SUPPORTED_CHAINS: ['eip155', 'solana'],
    LIMITS: {
        PENDING_TRANSACTIONS: 99
    },
    CHAIN: {
        EVM: 'eip155',
        SOLANA: 'solana',
        POLKADOT: 'polkadot',
        BITCOIN: 'bip122',
        TON: 'ton'
    },
    CHAIN_NAME_MAP: {
        eip155: 'EVM Networks',
        solana: 'Solana',
        polkadot: 'Polkadot',
        bip122: 'Bitcoin',
        cosmos: 'Cosmos',
        sui: 'Sui',
        stacks: 'Stacks',
        ton: 'TON'
    },
    ADAPTER_TYPES: {
        BITCOIN: 'bitcoin',
        SOLANA: 'solana',
        WAGMI: 'wagmi',
        ETHERS: 'ethers',
        ETHERS5: 'ethers5',
        TON: 'ton'
    },
    USDT_CONTRACT_ADDRESSES: [
        '0xdac17f958d2ee523a2206206994597c13d831ec7',
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
        '0x919C1c267BC06a7039e03fcc2eF738525769109c',
        '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
        '0x55d398326f99059fF775485246999027B3197955',
        '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
    ],
    SOLANA_SPL_TOKEN_ADDRESSES: {
        SOL: 'So11111111111111111111111111111111111111112'
    },
    NATIVE_IMAGE_IDS_BY_NAMESPACE: {
        eip155: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
        solana: '3e8119e5-2a6f-4818-c50c-1937011d5900',
        bip122: '0b4838db-0161-4ffe-022d-532bf03dba00'
    },
    TOKEN_SYMBOLS_BY_ADDRESS: {
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 'USDC',
        '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913': 'USDC',
        '0x0b2c639c533813f4aa9d7837caf62653d097ff85': 'USDC',
        '0xaf88d065e77c8cc2239327c5edb3a432268e5831': 'USDC',
        '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359': 'USDC',
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174': 'USDC',
        EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: 'USDC',
        '0xdac17f958d2ee523a2206206994597c13d831ec7': 'USDT',
        '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58': 'USDT',
        '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9': 'USDT',
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f': 'USDT',
        Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: 'USDT'
    },
    HTTP_STATUS_CODES: {
        SERVER_ERROR: 500,
        TOO_MANY_REQUESTS: 429,
        SERVICE_UNAVAILABLE: 503,
        FORBIDDEN: 403
    },
    UNSUPPORTED_NETWORK_NAME: 'Unknown Network',
    SECURE_SITE_SDK_ORIGIN: (typeof src_utils_ConstantsUtil_process !== 'undefined' && typeof src_utils_ConstantsUtil_process.env !== 'undefined'
        ? src_utils_ConstantsUtil_process.env['NEXT_PUBLIC_SECURE_SITE_ORIGIN']
        : undefined) || 'https://secure.walletconnect.org',
    REMOTE_FEATURES_ALERTS: {
        MULTI_WALLET_NOT_ENABLED: {
            DEFAULT: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com.'
            },
            CONNECTIONS_HOOK: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook.'
            },
            CONNECTION_HOOK: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook.'
            }
        },
        HEADLESS_NOT_ENABLED: {
            DEFAULT: {
                displayMessage: '',
                debugMessage: 'Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it.'
            }
        }
    },
    IS_DEVELOPMENT: typeof src_utils_ConstantsUtil_process !== 'undefined' && "production" === 'development',
    DEFAULT_ALLOWED_ANCESTORS: [
        'http://localhost:*',
        'https://localhost:*',
        'http://127.0.0.1:*',
        'https://127.0.0.1:*',
        'https://*.pages.dev',
        'https://*.vercel.app',
        'https://*.ngrok-free.app',
        'https://secure-mobile.walletconnect.com',
        'https://secure-mobile.walletconnect.org'
    ],
    METMASK_CONNECTOR_NAME: 'MetaMask',
    TRUST_CONNECTOR_NAME: 'Trust Wallet',
    SOLFLARE_CONNECTOR_NAME: 'Solflare',
    PHANTOM_CONNECTOR_NAME: 'Phantom',
    COIN98_CONNECTOR_NAME: 'Coin98',
    MAGIC_EDEN_CONNECTOR_NAME: 'Magic Eden',
    BACKPACK_CONNECTOR_NAME: 'Backpack',
    BITGET_CONNECTOR_NAME: 'Bitget Wallet',
    FRONTIER_CONNECTOR_NAME: 'Frontier',
    XVERSE_CONNECTOR_NAME: 'Xverse Wallet',
    LEATHER_CONNECTOR_NAME: 'Leather',
    OKX_CONNECTOR_NAME: 'OKX Wallet',
    BINANCE_CONNECTOR_NAME: 'Binance Wallet',
    EIP155: 'eip155',
    ADD_CHAIN_METHOD: 'wallet_addEthereumChain',
    EIP6963_ANNOUNCE_EVENT: 'eip6963:announceProvider',
    EIP6963_REQUEST_EVENT: 'eip6963:requestProvider',
    CONNECTOR_RDNS_MAP: {
        coinbaseWallet: 'com.coinbase.wallet',
        coinbaseWalletSDK: 'com.coinbase.wallet'
    },
    CONNECTOR_TYPE_EXTERNAL: 'EXTERNAL',
    CONNECTOR_TYPE_WALLET_CONNECT: 'WALLET_CONNECT',
    CONNECTOR_TYPE_INJECTED: 'INJECTED',
    CONNECTOR_TYPE_ANNOUNCED: 'ANNOUNCED',
    CONNECTOR_TYPE_AUTH: 'AUTH',
    CONNECTOR_TYPE_MULTI_CHAIN: 'MULTI_CHAIN',
    CONNECTOR_TYPE_W3M_AUTH: 'AUTH'
};
//# sourceMappingURL=ConstantsUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/NetworkUtil.js

const NetworkUtil = {
    caipNetworkIdToNumber(caipnetworkId) {
        return caipnetworkId ? Number(caipnetworkId.split(':')[1]) : undefined;
    },
    parseEvmChainId(chainId) {
        return typeof chainId === 'string'
            ? this.caipNetworkIdToNumber(chainId)
            : chainId;
    },
    getNetworksByNamespace(networks, namespace) {
        return networks?.filter(network => network.chainNamespace === namespace) || [];
    },
    getFirstNetworkByNamespace(networks, namespace) {
        return this.getNetworksByNamespace(networks, namespace)[0];
    },
    getNetworkNameByCaipNetworkId(caipNetworks, caipNetworkId) {
        if (!caipNetworkId) {
            return undefined;
        }
        const caipNetwork = caipNetworks.find(network => network.caipNetworkId === caipNetworkId);
        if (caipNetwork) {
            return caipNetwork.name;
        }
        const [namespace] = caipNetworkId.split(':');
        return esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN_NAME_MAP?.[namespace] || undefined;
    }
};
const AVAILABLE_NAMESPACES = [
    'eip155',
    'solana',
    'polkadot',
    'bip122',
    'cosmos',
    'sui',
    'stacks'
];
//# sourceMappingURL=NetworkUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js
function getW3mThemeVariables(themeVariables, themeType) {
    const accent = themeVariables?.['--apkt-accent'] ?? themeVariables?.['--w3m-accent'];
    if (themeType === 'light') {
        return {
            '--w3m-accent': accent || 'hsla(231, 100%, 70%, 1)',
            '--w3m-background': '#fff'
        };
    }
    return {
        '--w3m-accent': accent || 'hsla(230, 100%, 67%, 1)',
        '--w3m-background': '#202020'
    };
}
//# sourceMappingURL=ThemeUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
/* provided dependency */ var W3mFrameConstants_process = __webpack_require__(365606);
const DEFAULT_SDK_URL = 'https://secure.walletconnect.org/sdk';
const SECURE_SITE_SDK = (typeof W3mFrameConstants_process !== 'undefined' && typeof W3mFrameConstants_process.env !== 'undefined'
    ? W3mFrameConstants_process.env['NEXT_PUBLIC_SECURE_SITE_SDK_URL']
    : undefined) || DEFAULT_SDK_URL;
const DEFAULT_LOG_LEVEL = (typeof W3mFrameConstants_process !== 'undefined' && typeof W3mFrameConstants_process.env !== 'undefined'
    ? W3mFrameConstants_process.env['NEXT_PUBLIC_DEFAULT_LOG_LEVEL']
    : undefined) || 'error';
const SECURE_SITE_SDK_VERSION = (typeof W3mFrameConstants_process !== 'undefined' && typeof W3mFrameConstants_process.env !== 'undefined'
    ? W3mFrameConstants_process.env['NEXT_PUBLIC_SECURE_SITE_SDK_VERSION']
    : undefined) || '4';
const W3mFrameConstants_W3mFrameConstants = {
    APP_EVENT_KEY: '@w3m-app/',
    FRAME_EVENT_KEY: '@w3m-frame/',
    RPC_METHOD_KEY: 'RPC_',
    STORAGE_KEY: '@appkit-wallet/',
    SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
    EMAIL_LOGIN_USED_KEY: 'EMAIL_LOGIN_USED_KEY',
    LAST_USED_CHAIN_KEY: 'LAST_USED_CHAIN_KEY',
    LAST_EMAIL_LOGIN_TIME: 'LAST_EMAIL_LOGIN_TIME',
    EMAIL: 'EMAIL',
    PREFERRED_ACCOUNT_TYPE: 'PREFERRED_ACCOUNT_TYPE',
    SMART_ACCOUNT_ENABLED: 'SMART_ACCOUNT_ENABLED',
    SMART_ACCOUNT_ENABLED_NETWORKS: 'SMART_ACCOUNT_ENABLED_NETWORKS',
    SOCIAL_USERNAME: 'SOCIAL_USERNAME',
    APP_SWITCH_NETWORK: '@w3m-app/SWITCH_NETWORK',
    APP_CONNECT_EMAIL: '@w3m-app/CONNECT_EMAIL',
    APP_CONNECT_DEVICE: '@w3m-app/CONNECT_DEVICE',
    APP_CONNECT_OTP: '@w3m-app/CONNECT_OTP',
    APP_CONNECT_SOCIAL: '@w3m-app/CONNECT_SOCIAL',
    APP_GET_SOCIAL_REDIRECT_URI: '@w3m-app/GET_SOCIAL_REDIRECT_URI',
    APP_GET_USER: '@w3m-app/GET_USER',
    APP_SIGN_OUT: '@w3m-app/SIGN_OUT',
    APP_IS_CONNECTED: '@w3m-app/IS_CONNECTED',
    APP_GET_CHAIN_ID: '@w3m-app/GET_CHAIN_ID',
    APP_RPC_REQUEST: '@w3m-app/RPC_REQUEST',
    APP_UPDATE_EMAIL: '@w3m-app/UPDATE_EMAIL',
    APP_UPDATE_EMAIL_PRIMARY_OTP: '@w3m-app/UPDATE_EMAIL_PRIMARY_OTP',
    APP_UPDATE_EMAIL_SECONDARY_OTP: '@w3m-app/UPDATE_EMAIL_SECONDARY_OTP',
    APP_AWAIT_UPDATE_EMAIL: '@w3m-app/AWAIT_UPDATE_EMAIL',
    APP_SYNC_THEME: '@w3m-app/SYNC_THEME',
    APP_SYNC_DAPP_DATA: '@w3m-app/SYNC_DAPP_DATA',
    APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS: '@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS',
    APP_INIT_SMART_ACCOUNT: '@w3m-app/INIT_SMART_ACCOUNT',
    APP_SET_PREFERRED_ACCOUNT: '@w3m-app/SET_PREFERRED_ACCOUNT',
    APP_CONNECT_FARCASTER: '@w3m-app/CONNECT_FARCASTER',
    APP_GET_FARCASTER_URI: '@w3m-app/GET_FARCASTER_URI',
    APP_RELOAD: '@w3m-app/RELOAD',
    APP_RPC_ABORT: '@w3m-app/RPC_ABORT',
    FRAME_SWITCH_NETWORK_ERROR: '@w3m-frame/SWITCH_NETWORK_ERROR',
    FRAME_SWITCH_NETWORK_SUCCESS: '@w3m-frame/SWITCH_NETWORK_SUCCESS',
    FRAME_CONNECT_EMAIL_ERROR: '@w3m-frame/CONNECT_EMAIL_ERROR',
    FRAME_CONNECT_EMAIL_SUCCESS: '@w3m-frame/CONNECT_EMAIL_SUCCESS',
    FRAME_CONNECT_DEVICE_ERROR: '@w3m-frame/CONNECT_DEVICE_ERROR',
    FRAME_CONNECT_DEVICE_SUCCESS: '@w3m-frame/CONNECT_DEVICE_SUCCESS',
    FRAME_CONNECT_OTP_SUCCESS: '@w3m-frame/CONNECT_OTP_SUCCESS',
    FRAME_CONNECT_OTP_ERROR: '@w3m-frame/CONNECT_OTP_ERROR',
    FRAME_CONNECT_SOCIAL_SUCCESS: '@w3m-frame/CONNECT_SOCIAL_SUCCESS',
    FRAME_CONNECT_SOCIAL_ERROR: '@w3m-frame/CONNECT_SOCIAL_ERROR',
    FRAME_CONNECT_FARCASTER_SUCCESS: '@w3m-frame/CONNECT_FARCASTER_SUCCESS',
    FRAME_CONNECT_FARCASTER_ERROR: '@w3m-frame/CONNECT_FARCASTER_ERROR',
    FRAME_GET_FARCASTER_URI_SUCCESS: '@w3m-frame/GET_FARCASTER_URI_SUCCESS',
    FRAME_GET_FARCASTER_URI_ERROR: '@w3m-frame/GET_FARCASTER_URI_ERROR',
    FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS: '@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS',
    FRAME_GET_SOCIAL_REDIRECT_URI_ERROR: '@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR',
    FRAME_GET_USER_SUCCESS: '@w3m-frame/GET_USER_SUCCESS',
    FRAME_GET_USER_ERROR: '@w3m-frame/GET_USER_ERROR',
    FRAME_SIGN_OUT_SUCCESS: '@w3m-frame/SIGN_OUT_SUCCESS',
    FRAME_SIGN_OUT_ERROR: '@w3m-frame/SIGN_OUT_ERROR',
    FRAME_IS_CONNECTED_SUCCESS: '@w3m-frame/IS_CONNECTED_SUCCESS',
    FRAME_IS_CONNECTED_ERROR: '@w3m-frame/IS_CONNECTED_ERROR',
    FRAME_GET_CHAIN_ID_SUCCESS: '@w3m-frame/GET_CHAIN_ID_SUCCESS',
    FRAME_GET_CHAIN_ID_ERROR: '@w3m-frame/GET_CHAIN_ID_ERROR',
    FRAME_RPC_REQUEST_SUCCESS: '@w3m-frame/RPC_REQUEST_SUCCESS',
    FRAME_RPC_REQUEST_ERROR: '@w3m-frame/RPC_REQUEST_ERROR',
    FRAME_SESSION_UPDATE: '@w3m-frame/SESSION_UPDATE',
    FRAME_UPDATE_EMAIL_SUCCESS: '@w3m-frame/UPDATE_EMAIL_SUCCESS',
    FRAME_UPDATE_EMAIL_ERROR: '@w3m-frame/UPDATE_EMAIL_ERROR',
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS: '@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS',
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR: '@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR',
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS: '@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS',
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR: '@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR',
    FRAME_SYNC_THEME_SUCCESS: '@w3m-frame/SYNC_THEME_SUCCESS',
    FRAME_SYNC_THEME_ERROR: '@w3m-frame/SYNC_THEME_ERROR',
    FRAME_SYNC_DAPP_DATA_SUCCESS: '@w3m-frame/SYNC_DAPP_DATA_SUCCESS',
    FRAME_SYNC_DAPP_DATA_ERROR: '@w3m-frame/SYNC_DAPP_DATA_ERROR',
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS: '@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS',
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR: '@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR',
    FRAME_INIT_SMART_ACCOUNT_SUCCESS: '@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS',
    FRAME_INIT_SMART_ACCOUNT_ERROR: '@w3m-frame/INIT_SMART_ACCOUNT_ERROR',
    FRAME_SET_PREFERRED_ACCOUNT_SUCCESS: '@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS',
    FRAME_SET_PREFERRED_ACCOUNT_ERROR: '@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR',
    FRAME_READY: '@w3m-frame/READY',
    FRAME_RELOAD_SUCCESS: '@w3m-frame/RELOAD_SUCCESS',
    FRAME_RELOAD_ERROR: '@w3m-frame/RELOAD_ERROR',
    FRAME_RPC_ABORT_SUCCESS: '@w3m-frame/RPC_ABORT_SUCCESS',
    FRAME_RPC_ABORT_ERROR: '@w3m-frame/RPC_ABORT_ERROR',
    RPC_RESPONSE_TYPE_ERROR: 'RPC_RESPONSE_ERROR',
    RPC_RESPONSE_TYPE_TX: 'RPC_RESPONSE_TRANSACTION_HASH',
    RPC_RESPONSE_TYPE_OBJECT: 'RPC_RESPONSE_OBJECT'
};
const W3mFrameRpcConstants = {
    SAFE_RPC_METHODS: [
        'eth_accounts',
        'eth_blockNumber',
        'eth_call',
        'eth_chainId',
        'eth_estimateGas',
        'eth_feeHistory',
        'eth_gasPrice',
        'eth_getAccount',
        'eth_getBalance',
        'eth_getBlockByHash',
        'eth_getBlockByNumber',
        'eth_getBlockReceipts',
        'eth_getBlockTransactionCountByHash',
        'eth_getBlockTransactionCountByNumber',
        'eth_getCode',
        'eth_getFilterChanges',
        'eth_getFilterLogs',
        'eth_getLogs',
        'eth_getProof',
        'eth_getStorageAt',
        'eth_getTransactionByBlockHashAndIndex',
        'eth_getTransactionByBlockNumberAndIndex',
        'eth_getTransactionByHash',
        'eth_getTransactionCount',
        'eth_getTransactionReceipt',
        'eth_getUncleCountByBlockHash',
        'eth_getUncleCountByBlockNumber',
        'eth_maxPriorityFeePerGas',
        'eth_newBlockFilter',
        'eth_newFilter',
        'eth_newPendingTransactionFilter',
        'eth_sendRawTransaction',
        'eth_syncing',
        'eth_uninstallFilter',
        'wallet_getCapabilities',
        'wallet_getCallsStatus',
        'eth_getUserOperationReceipt',
        'eth_estimateUserOperationGas',
        'eth_getUserOperationByHash',
        'eth_supportedEntryPoints',
        'wallet_getAssets'
    ],
    NOT_SAFE_RPC_METHODS: [
        'personal_sign',
        'eth_signTypedData_v4',
        'eth_sendTransaction',
        'solana_signMessage',
        'solana_signTransaction',
        'solana_signAllTransactions',
        'solana_signAndSendTransaction',
        'wallet_sendCalls',
        'wallet_grantPermissions',
        'wallet_revokePermissions',
        'eth_sendUserOperation'
    ],
    GET_CHAIN_ID: 'eth_chainId',
    RPC_METHOD_NOT_ALLOWED_MESSAGE: 'Requested RPC call is not allowed',
    RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: 'Action not allowed',
    ACCOUNT_TYPES: {
        EOA: 'eoa',
        SMART_ACCOUNT: 'smartAccount'
    }
};
//# sourceMappingURL=W3mFrameConstants.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js
const ParseUtil = {
    validateCaipAddress(address) {
        if (address.split(':')?.length !== 3) {
            throw new Error('Invalid CAIP Address');
        }
        return address;
    },
    parseCaipAddress(caipAddress) {
        const parts = caipAddress.split(':');
        if (parts.length !== 3) {
            throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
        }
        const [chainNamespace, chainId, address] = parts;
        if (!chainNamespace || !chainId || !address) {
            throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId,
            address
        };
    },
    parseCaipNetworkId(caipNetworkId) {
        const parts = caipNetworkId.split(':');
        if (parts.length !== 2) {
            throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
        }
        const [chainNamespace, chainId] = parts;
        if (!chainNamespace || !chainId) {
            throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId
        };
    }
};
//# sourceMappingURL=ParseUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-wallet/dist/esm/src/RegexUtil.js
const RegexUtil = {
    address: /^0x(?:[A-Fa-f0-9]{40})$/u,
    transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
    signedMessage: /^0x(?:[a-fA-F0-9]{62,})$/u
};
//# sourceMappingURL=RegexUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameHelpers.js



const EMAIL_MINIMUM_TIMEOUT = 30 * 1000;
const W3mFrameHelpers = {
    checkIfAllowedToTriggerEmail() {
        const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants_W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
        if (lastEmailLoginTime) {
            const difference = Date.now() - Number(lastEmailLoginTime);
            if (difference < EMAIL_MINIMUM_TIMEOUT) {
                const cooldownSec = Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1000);
                throw new Error(`Please try again after ${cooldownSec} seconds`);
            }
        }
    },
    getTimeToNextEmailLogin() {
        const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants_W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
        if (lastEmailLoginTime) {
            const difference = Date.now() - Number(lastEmailLoginTime);
            if (difference < EMAIL_MINIMUM_TIMEOUT) {
                return Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1000);
            }
        }
        return 0;
    },
    checkIfRequestExists(request) {
        return (W3mFrameRpcConstants.NOT_SAFE_RPC_METHODS.includes(request.method) ||
            W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(request.method));
    },
    getResponseType(response) {
        const isPayloadString = typeof response === 'string';
        const isTransactionHash = isPayloadString &&
            (response?.match(RegexUtil.transactionHash) || response?.match(RegexUtil.signedMessage));
        if (isTransactionHash) {
            return W3mFrameConstants_W3mFrameConstants.RPC_RESPONSE_TYPE_TX;
        }
        return W3mFrameConstants_W3mFrameConstants.RPC_RESPONSE_TYPE_OBJECT;
    },
    checkIfRequestIsSafe(request) {
        return W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(request.method);
    },
    isClient: typeof window !== 'undefined'
};
//# sourceMappingURL=W3mFrameHelpers.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameStorage.js


const W3mFrameStorage = {
    set(key, value) {
        if (W3mFrameHelpers.isClient) {
            localStorage.setItem(`${W3mFrameConstants_W3mFrameConstants.STORAGE_KEY}${key}`, value);
        }
    },
    get(key) {
        if (W3mFrameHelpers.isClient) {
            return localStorage.getItem(`${W3mFrameConstants_W3mFrameConstants.STORAGE_KEY}${key}`);
        }
        return null;
    },
    delete(key, social) {
        if (W3mFrameHelpers.isClient) {
            if (social) {
                localStorage.removeItem(key);
            }
            else {
                localStorage.removeItem(`${W3mFrameConstants_W3mFrameConstants.STORAGE_KEY}${key}`);
            }
        }
    }
};
//# sourceMappingURL=W3mFrameStorage.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/constants/abis.js
var abis = __webpack_require__(194823);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/unit/formatUnits.js
var formatUnits = __webpack_require__(287135);
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/PresetsUtil.js

const PresetsUtil_PresetsUtil = {
    ConnectorExplorerIds: {
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.SAFE]: '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.LEDGER]: '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.OKX]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.METMASK_CONNECTOR_NAME]: 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.TRUST_CONNECTOR_NAME]: '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.SOLFLARE_CONNECTOR_NAME]: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.PHANTOM_CONNECTOR_NAME]: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.COIN98_CONNECTOR_NAME]: '2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.MAGIC_EDEN_CONNECTOR_NAME]: '8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.BACKPACK_CONNECTOR_NAME]: '2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.BITGET_CONNECTOR_NAME]: '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.FRONTIER_CONNECTOR_NAME]: '85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.XVERSE_CONNECTOR_NAME]: '2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.LEATHER_CONNECTOR_NAME]: '483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.OKX_CONNECTOR_NAME]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.BINANCE_CONNECTOR_NAME]: '2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25'
    },
    NetworkImageIds: {
        1: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
        42161: '3bff954d-5cb0-47a0-9a23-d20192e74600',
        43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
        56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
        250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
        10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
        137: '41d04d42-da3b-4453-8506-668cc0727900',
        5000: 'e86fae9b-b770-4eea-e520-150e12c81100',
        295: '6a97d510-cac8-4e58-c7ce-e8681b044c00',
        11_155_111: 'e909ea0a-f92a-4512-c8fc-748044ea6800',
        84532: 'a18a7ecd-e307-4360-4746-283182228e00',
        1301: '4eeea7ef-0014-4649-5d1d-07271a80f600',
        130: '2257980a-3463-48c6-cbac-a42d2a956e00',
        10_143: '0a728e83-bacb-46db-7844-948f05434900',
        100: '02b53f6a-e3d4-479e-1cb4-21178987d100',
        9001: 'f926ff41-260d-4028-635e-91913fc28e00',
        324: 'b310f07f-4ef7-49f3-7073-2a0a39685800',
        314: '5a73b3dd-af74-424e-cae0-0de859ee9400',
        4689: '34e68754-e536-40da-c153-6ef2e7188a00',
        1088: '3897a66d-40b9-4833-162f-a2c90531c900',
        1284: '161038da-44ae-4ec7-1208-0ea569454b00',
        1285: 'f1d73bb6-5450-4e18-38f7-fb6484264a00',
        7777777: '845c60df-d429-4991-e687-91ae45791600',
        42220: 'ab781bbc-ccc6-418d-d32d-789b15da1f00',
        8453: '7289c336-3981-4081-c5f4-efc26ac64a00',
        1313161554: '3ff73439-a619-4894-9262-4470c773a100',
        2020: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        2021: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        80094: 'e329c2c9-59b0-4a02-83e4-212ff3779900',
        2741: 'fc2427d1-5af9-4a9c-8da5-6f94627cd900',
        '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        EtWTRABZaYq6iMfeYKouRu166VU2xqa1: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        '000000000019d6689c085ae165831e93': '0b4838db-0161-4ffe-022d-532bf03dba00',
        '000000000933ea01ad0ee984209779ba': '39354064-d79b-420b-065d-f980c4b78200',
        '00000008819873e925422c1ff0f99f7c': 'b3406e4a-bbfc-44fb-e3a6-89673c78b700',
        '-239': '20f673c0-095e-49b2-07cf-eb5049dcf600',
        '-3': '20f673c0-095e-49b2-07cf-eb5049dcf600'
    },
    ConnectorImageIds: {
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: 'bba2c8be-7fd1-463e-42b1-796ecb0ad200',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.SAFE]: '461db637-8616-43ce-035a-d89b8a1d5800',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.LEDGER]: '54a1aa77-d202-4f8d-0fb2-5d2bb6db0300',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: 'ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.INJECTED]: '07ba87ed-43aa-4adf-4540-9e6a2b9cae00'
    },
    ConnectorNamesMap: {
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.INJECTED]: 'Browser Wallet',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: 'WalletConnect',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE]: 'Coinbase',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: 'Coinbase',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: 'Base Account',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.LEDGER]: 'Ledger',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.SAFE]: 'Safe'
    },
    ConnectorTypesMap: {
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.INJECTED]: 'INJECTED',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: 'WALLET_CONNECT',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.EIP6963]: 'ANNOUNCED',
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH]: 'AUTH'
    },
    WalletConnectRpcChainIds: [
        1,
        5,
        11155111,
        10,
        420,
        42161,
        421613,
        137,
        80001,
        42220,
        1313161554,
        1313161555,
        56,
        97,
        43114,
        43113,
        100,
        8453,
        84531,
        7777777,
        999,
        324,
        280
    ]
};
//# sourceMappingURL=PresetsUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
/* provided dependency */ var esm_src_utils_ConstantsUtil_process = __webpack_require__(365606);


const ConstantsUtil_SECURE_SITE = 
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
(typeof esm_src_utils_ConstantsUtil_process !== 'undefined' && typeof esm_src_utils_ConstantsUtil_process.env !== 'undefined'
    ? esm_src_utils_ConstantsUtil_process.env['NEXT_PUBLIC_SECURE_SITE_ORIGIN']
    : undefined) || 'https://secure.walletconnect.org';
const ConstantsUtil_ONRAMP_PROVIDERS = [
    {
        label: 'Meld.io',
        name: 'meld',
        feeRange: '1-2%',
        url: 'https://meldcrypto.com',
        supportedChains: ['eip155', 'solana']
    }
];
const ConstantsUtil_MELD_PUBLIC_KEY = 'WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU';
const dist_esm_src_utils_ConstantsUtil_ConstantsUtil = {
    FOUR_MINUTES_MS: 240_000,
    TEN_SEC_MS: 10_000,
    FIVE_SEC_MS: 5_000,
    THREE_SEC_MS: 3_000,
    ONE_SEC_MS: 1_000,
    SECURE_SITE: ConstantsUtil_SECURE_SITE,
    SECURE_SITE_DASHBOARD: `${ConstantsUtil_SECURE_SITE}/dashboard`,
    SECURE_SITE_FAVICON: `${ConstantsUtil_SECURE_SITE}/images/favicon.png`,
    SOLANA_NATIVE_TOKEN_ADDRESS: 'So11111111111111111111111111111111111111111',
    RESTRICTED_TIMEZONES: [
        'ASIA/SHANGHAI',
        'ASIA/URUMQI',
        'ASIA/CHONGQING',
        'ASIA/HARBIN',
        'ASIA/KASHGAR',
        'ASIA/MACAU',
        'ASIA/HONG_KONG',
        'ASIA/MACAO',
        'ASIA/BEIJING',
        'ASIA/HARBIN'
    ],
    SWAP_SUGGESTED_TOKENS: [
        'ETH',
        'UNI',
        '1INCH',
        'AAVE',
        'SOL',
        'ADA',
        'AVAX',
        'DOT',
        'LINK',
        'NITRO',
        'GAIA',
        'MILK',
        'TRX',
        'NEAR',
        'GNO',
        'WBTC',
        'DAI',
        'WETH',
        'USDC',
        'USDT',
        'ARB',
        'BAL',
        'BICO',
        'CRV',
        'ENS',
        'MATIC',
        'OP'
    ],
    SWAP_POPULAR_TOKENS: [
        'ETH',
        'UNI',
        '1INCH',
        'AAVE',
        'SOL',
        'ADA',
        'AVAX',
        'DOT',
        'LINK',
        'NITRO',
        'GAIA',
        'MILK',
        'TRX',
        'NEAR',
        'GNO',
        'WBTC',
        'DAI',
        'WETH',
        'USDC',
        'USDT',
        'ARB',
        'BAL',
        'BICO',
        'CRV',
        'ENS',
        'MATIC',
        'OP',
        'METAL',
        'DAI',
        'CHAMP',
        'WOLF',
        'SALE',
        'BAL',
        'BUSD',
        'MUST',
        'BTCpx',
        'ROUTE',
        'HEX',
        'WELT',
        'amDAI',
        'VSQ',
        'VISION',
        'AURUM',
        'pSP',
        'SNX',
        'VC',
        'LINK',
        'CHP',
        'amUSDT',
        'SPHERE',
        'FOX',
        'GIDDY',
        'GFC',
        'OMEN',
        'OX_OLD',
        'DE',
        'WNT'
    ],
    SUGGESTED_TOKENS_BY_CHAIN: {
        // Arbitrum One
        'eip155:42161': ['USD₮0']
    },
    BALANCE_SUPPORTED_CHAINS: [
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA
    ],
    SEND_PARAMS_SUPPORTED_CHAINS: [esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM],
    SWAP_SUPPORTED_NETWORKS: [
        // Ethereum'
        'eip155:1',
        // Arbitrum One'
        'eip155:42161',
        // Optimism'
        'eip155:10',
        // ZKSync Era'
        'eip155:324',
        // Base'
        'eip155:8453',
        // BNB Smart Chain'
        'eip155:56',
        // Polygon'
        'eip155:137',
        // Gnosis'
        'eip155:100',
        // Avalanche'
        'eip155:43114',
        // Fantom'
        'eip155:250',
        // Klaytn'
        'eip155:8217',
        // Aurora
        'eip155:1313161554'
    ],
    NAMES_SUPPORTED_CHAIN_NAMESPACES: [esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA
    ],
    PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA
    ],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.TON
    ],
    NATIVE_TOKEN_ADDRESS: {
        eip155: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        solana: 'So11111111111111111111111111111111111111111',
        polkadot: '0x',
        bip122: '0x',
        cosmos: '0x',
        sui: '0x',
        stacks: '0x',
        ton: '0x'
    },
    CONVERT_SLIPPAGE_TOLERANCE: 1,
    CONNECT_LABELS: {
        MOBILE: 'Open and continue in the wallet app',
        WEB: 'Open and continue in the wallet app'
    },
    SEND_SUPPORTED_NAMESPACES: [
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM,
        esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA
    ],
    DEFAULT_REMOTE_FEATURES: {
        swaps: ['1inch'],
        onramp: ['meld'],
        email: true,
        socials: [
            'google',
            'x',
            'discord',
            'farcaster',
            'github',
            'apple',
            'facebook'
        ],
        activity: true,
        reownBranding: true,
        multiWallet: false,
        emailCapture: false,
        payWithExchange: false,
        payments: false,
        reownAuthentication: false,
        headless: false
    },
    DEFAULT_REMOTE_FEATURES_DISABLED: {
        email: false,
        socials: false,
        swaps: false,
        onramp: false,
        activity: false,
        reownBranding: false,
        emailCapture: false,
        reownAuthentication: false,
        headless: false
    },
    DEFAULT_FEATURES: {
        receive: true,
        send: true,
        emailShowWallets: true,
        connectorTypeOrder: [
            'walletConnect',
            'recent',
            'injected',
            'featured',
            'custom',
            'external',
            'recommended'
        ],
        analytics: true,
        allWallets: true,
        legalCheckbox: false,
        smartSessions: false,
        collapseWallets: false,
        walletFeaturesOrder: ['onramp', 'swaps', 'receive', 'send'],
        connectMethodsOrder: undefined,
        pay: false,
        reownAuthentication: false,
        headless: false
    },
    DEFAULT_SOCIALS: [
        'google',
        'x',
        'farcaster',
        'discord',
        'apple',
        'github',
        'facebook'
    ],
    DEFAULT_ACCOUNT_TYPES: {
        bip122: 'payment',
        eip155: 'smartAccount',
        polkadot: 'eoa',
        solana: 'eoa',
        ton: 'eoa'
    },
    ADAPTER_TYPES: {
        UNIVERSAL: 'universal',
        SOLANA: 'solana',
        WAGMI: 'wagmi',
        ETHERS: 'ethers',
        ETHERS5: 'ethers5',
        BITCOIN: 'bitcoin'
    },
    SIWX_DEFAULTS: {
        signOutOnDisconnect: true
    },
    MANDATORY_WALLET_IDS_ON_MOBILE: [
        PresetsUtil_PresetsUtil.ConnectorExplorerIds[esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE],
        PresetsUtil_PresetsUtil.ConnectorExplorerIds[esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK],
        PresetsUtil_PresetsUtil.ConnectorExplorerIds[esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT],
        PresetsUtil_PresetsUtil.ConnectorExplorerIds[esm_src_utils_ConstantsUtil_ConstantsUtil.SOLFLARE_CONNECTOR_NAME],
        PresetsUtil_PresetsUtil.ConnectorExplorerIds[esm_src_utils_ConstantsUtil_ConstantsUtil.PHANTOM_CONNECTOR_NAME],
        PresetsUtil_PresetsUtil.ConnectorExplorerIds[esm_src_utils_ConstantsUtil_ConstantsUtil.BINANCE_CONNECTOR_NAME]
    ],
    DEFAULT_CONNECT_METHOD_ORDER: ['email', 'social', 'wallet']
};
//# sourceMappingURL=ConstantsUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js
const SafeLocalStorage_SafeLocalStorageKeys = {
    WALLET_ID: '@appkit/wallet_id',
    WALLET_NAME: '@appkit/wallet_name',
    SOLANA_WALLET: '@appkit/solana_wallet',
    SOLANA_CAIP_CHAIN: '@appkit/solana_caip_chain',
    ACTIVE_CAIP_NETWORK_ID: '@appkit/active_caip_network_id',
    CONNECTED_SOCIAL: '@appkit/connected_social',
    CONNECTED_SOCIAL_USERNAME: '@appkit-wallet/SOCIAL_USERNAME',
    RECENT_WALLETS: '@appkit/recent_wallets',
    RECENT_WALLET: '@appkit/recent_wallet',
    DEEPLINK_CHOICE: 'WALLETCONNECT_DEEPLINK_CHOICE',
    ACTIVE_NAMESPACE: '@appkit/active_namespace',
    CONNECTED_NAMESPACES: '@appkit/connected_namespaces',
    CONNECTION_STATUS: '@appkit/connection_status',
    SIWX_AUTH_TOKEN: '@appkit/siwx-auth-token',
    SIWX_NONCE_TOKEN: '@appkit/siwx-nonce-token',
    TELEGRAM_SOCIAL_PROVIDER: '@appkit/social_provider',
    NATIVE_BALANCE_CACHE: '@appkit/native_balance_cache',
    PORTFOLIO_CACHE: '@appkit/portfolio_cache',
    ENS_CACHE: '@appkit/ens_cache',
    IDENTITY_CACHE: '@appkit/identity_cache',
    PREFERRED_ACCOUNT_TYPES: '@appkit/preferred_account_types',
    CONNECTIONS: '@appkit/connections',
    DISCONNECTED_CONNECTOR_IDS: '@appkit/disconnected_connector_ids',
    HISTORY_TRANSACTIONS_CACHE: '@appkit/history_transactions_cache',
    TOKEN_PRICE_CACHE: '@appkit/token_price_cache',
    RECENT_EMAILS: '@appkit/recent_emails',
    LATEST_APPKIT_VERSION: '@appkit/latest_version',
    TON_WALLETS_CACHE: '@appkit/ton_wallets_cache'
};
function SafeLocalStorage_getSafeConnectorIdKey(namespace) {
    if (!namespace) {
        throw new Error('Namespace is required for CONNECTED_CONNECTOR_ID');
    }
    return `@appkit/${namespace}:connected_connector_id`;
}
const SafeLocalStorage_SafeLocalStorage = {
    setItem(key, value) {
        if (SafeLocalStorage_isSafe() && value !== undefined) {
            localStorage.setItem(key, value);
        }
    },
    getItem(key) {
        if (SafeLocalStorage_isSafe()) {
            return localStorage.getItem(key) || undefined;
        }
        return undefined;
    },
    removeItem(key) {
        if (SafeLocalStorage_isSafe()) {
            localStorage.removeItem(key);
        }
    },
    clear() {
        if (SafeLocalStorage_isSafe()) {
            localStorage.clear();
        }
    }
};
function SafeLocalStorage_isSafe() {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}
//# sourceMappingURL=SafeLocalStorage.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js
/* eslint-disable no-console */

// -- Utility -----------------------------------------------------------------
const StorageUtil_StorageUtil = {
    // Cache expiry in milliseconds
    cacheExpiry: {
        portfolio: 30000,
        nativeBalance: 30000,
        ens: 300000,
        identity: 300000,
        transactionsHistory: 15000,
        tokenPrice: 15000,
        // 7 Days
        latestAppKitVersion: 604_800_000,
        // 1 Day
        tonWallets: 86_400_000
    },
    isCacheExpired(timestamp, cacheExpiry) {
        return Date.now() - timestamp > cacheExpiry;
    },
    getActiveNetworkProps() {
        const namespace = StorageUtil_StorageUtil.getActiveNamespace();
        const caipNetworkId = StorageUtil_StorageUtil.getActiveCaipNetworkId();
        const stringChainId = caipNetworkId ? caipNetworkId.split(':')[1] : undefined;
        // eslint-disable-next-line no-nested-ternary
        const chainId = stringChainId
            ? isNaN(Number(stringChainId))
                ? stringChainId
                : Number(stringChainId)
            : undefined;
        return {
            namespace,
            caipNetworkId,
            chainId
        };
    },
    setWalletConnectDeepLink({ name, href }) {
        try {
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.DEEPLINK_CHOICE, JSON.stringify({ href, name }));
        }
        catch {
            console.info('Unable to set WalletConnect deep link');
        }
    },
    getWalletConnectDeepLink() {
        try {
            const deepLink = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.DEEPLINK_CHOICE);
            if (deepLink) {
                return JSON.parse(deepLink);
            }
        }
        catch {
            console.info('Unable to get WalletConnect deep link');
        }
        return undefined;
    },
    deleteWalletConnectDeepLink() {
        try {
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.DEEPLINK_CHOICE);
        }
        catch {
            console.info('Unable to delete WalletConnect deep link');
        }
    },
    setActiveNamespace(namespace) {
        try {
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.ACTIVE_NAMESPACE, namespace);
        }
        catch {
            console.info('Unable to set active namespace');
        }
    },
    setActiveCaipNetworkId(caipNetworkId) {
        try {
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID, caipNetworkId);
            StorageUtil_StorageUtil.setActiveNamespace(caipNetworkId.split(':')[0]);
        }
        catch {
            console.info('Unable to set active caip network id');
        }
    },
    getActiveCaipNetworkId() {
        try {
            return SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
        }
        catch {
            console.info('Unable to get active caip network id');
            return undefined;
        }
    },
    deleteActiveCaipNetworkId() {
        try {
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
        }
        catch {
            console.info('Unable to delete active caip network id');
        }
    },
    deleteConnectedConnectorId(namespace) {
        try {
            const key = SafeLocalStorage_getSafeConnectorIdKey(namespace);
            SafeLocalStorage_SafeLocalStorage.removeItem(key);
        }
        catch {
            console.info('Unable to delete connected connector id');
        }
    },
    setAppKitRecent(wallet) {
        try {
            const recentWallets = StorageUtil_StorageUtil.getRecentWallets();
            const exists = recentWallets.find(w => w.id === wallet.id);
            if (!exists) {
                recentWallets.unshift(wallet);
                if (recentWallets.length > 2) {
                    recentWallets.pop();
                }
                SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.RECENT_WALLETS, JSON.stringify(recentWallets));
                SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.RECENT_WALLET, JSON.stringify(wallet));
            }
        }
        catch {
            console.info('Unable to set AppKit recent');
        }
    },
    getRecentWallets() {
        try {
            const recent = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.RECENT_WALLETS);
            return recent ? JSON.parse(recent) : [];
        }
        catch {
            console.info('Unable to get AppKit recent');
        }
        return [];
    },
    getRecentWallet() {
        try {
            const recent = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.RECENT_WALLET);
            return recent ? JSON.parse(recent) : null;
        }
        catch {
            console.info('Unable to get AppKit recent');
        }
        return null;
    },
    deleteRecentWallet() {
        try {
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.RECENT_WALLET);
        }
        catch {
            console.info('Unable to delete AppKit recent');
        }
    },
    setConnectedConnectorId(namespace, connectorId) {
        try {
            const key = SafeLocalStorage_getSafeConnectorIdKey(namespace);
            SafeLocalStorage_SafeLocalStorage.setItem(key, connectorId);
        }
        catch {
            console.info('Unable to set Connected Connector Id');
        }
    },
    getActiveNamespace() {
        try {
            const activeNamespace = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.ACTIVE_NAMESPACE);
            return activeNamespace;
        }
        catch {
            console.info('Unable to get active namespace');
        }
        return undefined;
    },
    getConnectedConnectorId(namespace) {
        if (!namespace) {
            return undefined;
        }
        try {
            const key = SafeLocalStorage_getSafeConnectorIdKey(namespace);
            return SafeLocalStorage_SafeLocalStorage.getItem(key);
        }
        catch (e) {
            console.info('Unable to get connected connector id in namespace', namespace);
        }
        return undefined;
    },
    setConnectedSocialProvider(socialProvider) {
        try {
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTED_SOCIAL, socialProvider);
        }
        catch {
            console.info('Unable to set connected social provider');
        }
    },
    getConnectedSocialProvider() {
        try {
            return SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTED_SOCIAL);
        }
        catch {
            console.info('Unable to get connected social provider');
        }
        return undefined;
    },
    deleteConnectedSocialProvider() {
        try {
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTED_SOCIAL);
        }
        catch {
            console.info('Unable to delete connected social provider');
        }
    },
    getConnectedSocialUsername() {
        try {
            return SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTED_SOCIAL_USERNAME);
        }
        catch {
            console.info('Unable to get connected social username');
        }
        return undefined;
    },
    getStoredActiveCaipNetworkId() {
        const storedCaipNetworkId = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
        const networkId = storedCaipNetworkId?.split(':')?.[1];
        return networkId;
    },
    setConnectionStatus(status) {
        try {
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTION_STATUS, status);
        }
        catch {
            console.info('Unable to set connection status');
        }
    },
    getConnectionStatus() {
        try {
            return SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTION_STATUS);
        }
        catch {
            return undefined;
        }
    },
    getConnectedNamespaces() {
        try {
            const namespaces = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTED_NAMESPACES);
            if (!namespaces?.length) {
                return [];
            }
            return namespaces.split(',');
        }
        catch {
            return [];
        }
    },
    setConnectedNamespaces(namespaces) {
        try {
            const uniqueNamespaces = Array.from(new Set(namespaces));
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTED_NAMESPACES, uniqueNamespaces.join(','));
        }
        catch {
            console.info('Unable to set namespaces in storage');
        }
    },
    addConnectedNamespace(namespace) {
        try {
            const namespaces = StorageUtil_StorageUtil.getConnectedNamespaces();
            if (!namespaces.includes(namespace)) {
                namespaces.push(namespace);
                StorageUtil_StorageUtil.setConnectedNamespaces(namespaces);
            }
        }
        catch {
            console.info('Unable to add connected namespace');
        }
    },
    removeConnectedNamespace(namespace) {
        try {
            const namespaces = StorageUtil_StorageUtil.getConnectedNamespaces();
            const index = namespaces.indexOf(namespace);
            if (index > -1) {
                namespaces.splice(index, 1);
                StorageUtil_StorageUtil.setConnectedNamespaces(namespaces);
            }
        }
        catch {
            console.info('Unable to remove connected namespace');
        }
    },
    getTelegramSocialProvider() {
        try {
            return SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
        }
        catch {
            console.info('Unable to get telegram social provider');
            return null;
        }
    },
    setTelegramSocialProvider(socialProvider) {
        try {
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER, socialProvider);
        }
        catch {
            console.info('Unable to set telegram social provider');
        }
    },
    removeTelegramSocialProvider() {
        try {
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
        }
        catch {
            console.info('Unable to remove telegram social provider');
        }
    },
    getBalanceCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.PORTFOLIO_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get balance cache');
        }
        return cache;
    },
    removeAddressFromBalanceCache(caipAddress) {
        try {
            const cache = StorageUtil_StorageUtil.getBalanceCache();
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify({ ...cache, [caipAddress]: undefined }));
        }
        catch {
            console.info('Unable to remove address from balance cache', caipAddress);
        }
    },
    getBalanceCacheForCaipAddress(caipAddress) {
        try {
            const cache = StorageUtil_StorageUtil.getBalanceCache();
            const balanceCache = cache[caipAddress];
            // We want to discard cache if it's older than the cache expiry
            if (balanceCache &&
                !this.isCacheExpired(balanceCache.timestamp, this.cacheExpiry.portfolio)) {
                return balanceCache.balance;
            }
            StorageUtil_StorageUtil.removeAddressFromBalanceCache(caipAddress);
        }
        catch {
            console.info('Unable to get balance cache for address', caipAddress);
        }
        return undefined;
    },
    updateBalanceCache(params) {
        try {
            const cache = StorageUtil_StorageUtil.getBalanceCache();
            cache[params.caipAddress] = params;
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update balance cache', params);
        }
    },
    getNativeBalanceCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get balance cache');
        }
        return cache;
    },
    removeAddressFromNativeBalanceCache(caipAddress) {
        try {
            const cache = StorageUtil_StorageUtil.getBalanceCache();
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify({ ...cache, [caipAddress]: undefined }));
        }
        catch {
            console.info('Unable to remove address from balance cache', caipAddress);
        }
    },
    getNativeBalanceCacheForCaipAddress(caipAddress) {
        try {
            const cache = StorageUtil_StorageUtil.getNativeBalanceCache();
            const nativeBalanceCache = cache[caipAddress];
            // We want to discard cache if it's older than the cache expiry
            if (nativeBalanceCache &&
                !this.isCacheExpired(nativeBalanceCache.timestamp, this.cacheExpiry.nativeBalance)) {
                return nativeBalanceCache;
            }
            console.info('Discarding cache for address', caipAddress);
            StorageUtil_StorageUtil.removeAddressFromBalanceCache(caipAddress);
        }
        catch {
            console.info('Unable to get balance cache for address', caipAddress);
        }
        return undefined;
    },
    updateNativeBalanceCache(params) {
        try {
            const cache = StorageUtil_StorageUtil.getNativeBalanceCache();
            cache[params.caipAddress] = params;
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update balance cache', params);
        }
    },
    getEnsCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.ENS_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get ens name cache');
        }
        return cache;
    },
    getEnsFromCacheForAddress(address) {
        try {
            const cache = StorageUtil_StorageUtil.getEnsCache();
            const ensCache = cache[address];
            // We want to discard cache if it's older than the cache expiry
            if (ensCache && !this.isCacheExpired(ensCache.timestamp, this.cacheExpiry.ens)) {
                return ensCache.ens;
            }
            StorageUtil_StorageUtil.removeEnsFromCache(address);
        }
        catch {
            console.info('Unable to get ens name from cache', address);
        }
        return undefined;
    },
    updateEnsCache(params) {
        try {
            const cache = StorageUtil_StorageUtil.getEnsCache();
            cache[params.address] = params;
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.ENS_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update ens name cache', params);
        }
    },
    removeEnsFromCache(address) {
        try {
            const cache = StorageUtil_StorageUtil.getEnsCache();
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.ENS_CACHE, JSON.stringify({ ...cache, [address]: undefined }));
        }
        catch {
            console.info('Unable to remove ens name from cache', address);
        }
    },
    getIdentityCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.IDENTITY_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get identity cache');
        }
        return cache;
    },
    getIdentityFromCacheForAddress(address) {
        try {
            const cache = StorageUtil_StorageUtil.getIdentityCache();
            const identityCache = cache[address];
            // We want to discard cache if it's older than the cache expiry
            if (identityCache &&
                !this.isCacheExpired(identityCache.timestamp, this.cacheExpiry.identity)) {
                return identityCache.identity;
            }
            StorageUtil_StorageUtil.removeIdentityFromCache(address);
        }
        catch {
            console.info('Unable to get identity from cache', address);
        }
        return undefined;
    },
    updateIdentityCache(params) {
        try {
            const cache = StorageUtil_StorageUtil.getIdentityCache();
            cache[params.address] = {
                identity: params.identity,
                timestamp: params.timestamp
            };
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update identity cache', params);
        }
    },
    removeIdentityFromCache(address) {
        try {
            const cache = StorageUtil_StorageUtil.getIdentityCache();
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify({ ...cache, [address]: undefined }));
        }
        catch {
            console.info('Unable to remove identity from cache', address);
        }
    },
    getTonWalletsCache() {
        try {
            const cache = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.TON_WALLETS_CACHE);
            const parsedCache = cache ? JSON.parse(cache) : undefined;
            if (parsedCache && !this.isCacheExpired(parsedCache.timestamp, this.cacheExpiry.tonWallets)) {
                return parsedCache;
            }
            StorageUtil_StorageUtil.removeTonWalletsCache();
        }
        catch {
            console.info('Unable to get ton wallets cache');
        }
        return undefined;
    },
    updateTonWalletsCache(wallets) {
        try {
            const cache = StorageUtil_StorageUtil.getTonWalletsCache() || { timestamp: 0, wallets: [] };
            cache.timestamp = new Date().getTime();
            cache.wallets = wallets;
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.TON_WALLETS_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update ton wallets cache', wallets);
        }
    },
    removeTonWalletsCache() {
        try {
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.TON_WALLETS_CACHE);
        }
        catch {
            console.info('Unable to remove ton wallets cache');
        }
    },
    clearAddressCache() {
        try {
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.PORTFOLIO_CACHE);
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.ENS_CACHE);
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.IDENTITY_CACHE);
            SafeLocalStorage_SafeLocalStorage.removeItem(SafeLocalStorage_SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
        }
        catch {
            console.info('Unable to clear address cache');
        }
    },
    setPreferredAccountTypes(accountTypes) {
        try {
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES, JSON.stringify(accountTypes));
        }
        catch {
            console.info('Unable to set preferred account types', accountTypes);
        }
    },
    getPreferredAccountTypes() {
        try {
            const result = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES);
            if (!result) {
                return {};
            }
            return JSON.parse(result);
        }
        catch {
            console.info('Unable to get preferred account types');
        }
        return {};
    },
    setConnections(connections, chainNamespace) {
        try {
            const existingConnections = StorageUtil_StorageUtil.getConnections();
            const existing = existingConnections[chainNamespace] ?? [];
            const connectorConnectionMap = new Map();
            for (const conn of existing) {
                connectorConnectionMap.set(conn.connectorId, { ...conn });
            }
            for (const conn of connections) {
                const existingConn = connectorConnectionMap.get(conn.connectorId);
                const isAuth = conn.connectorId === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH;
                if (existingConn && !isAuth) {
                    const existingAddrs = new Set(existingConn.accounts.map(a => a.address.toLowerCase()));
                    const newAccounts = conn.accounts.filter(a => !existingAddrs.has(a.address.toLowerCase()));
                    existingConn.accounts.push(...newAccounts);
                }
                else {
                    connectorConnectionMap.set(conn.connectorId, { ...conn });
                }
            }
            const dedupedConnections = {
                ...existingConnections,
                [chainNamespace]: Array.from(connectorConnectionMap.values())
            };
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTIONS, JSON.stringify(dedupedConnections));
        }
        catch (error) {
            console.error('Unable to sync connections to storage', error);
        }
    },
    getConnections() {
        try {
            const connectionsStorage = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTIONS);
            if (!connectionsStorage) {
                return {};
            }
            return JSON.parse(connectionsStorage);
        }
        catch (error) {
            console.error('Unable to get connections from storage', error);
            return {};
        }
    },
    deleteAddressFromConnection({ connectorId, address, namespace }) {
        try {
            const connections = StorageUtil_StorageUtil.getConnections();
            const namespaceConnections = connections[namespace] ?? [];
            const connectionMap = new Map(namespaceConnections.map(conn => [conn.connectorId, conn]));
            const connector = connectionMap.get(connectorId);
            if (connector) {
                const updatedAccounts = connector.accounts.filter(acc => acc.address.toLowerCase() !== address.toLowerCase());
                if (updatedAccounts.length === 0) {
                    connectionMap.delete(connectorId);
                }
                else {
                    connectionMap.set(connectorId, {
                        ...connector,
                        accounts: connector.accounts.filter(acc => acc.address.toLowerCase() !== address.toLowerCase())
                    });
                }
            }
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.CONNECTIONS, JSON.stringify({
                ...connections,
                [namespace]: Array.from(connectionMap.values())
            }));
        }
        catch {
            console.error(`Unable to remove address "${address}" from connector "${connectorId}" in namespace "${namespace}"`);
        }
    },
    getDisconnectedConnectorIds() {
        try {
            const result = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS);
            if (!result) {
                return {};
            }
            return JSON.parse(result);
        }
        catch {
            console.info('Unable to get disconnected connector ids');
        }
        return {};
    },
    addDisconnectedConnectorId(connectorId, chainNamespace) {
        try {
            const currentDisconnectedConnectorIds = StorageUtil_StorageUtil.getDisconnectedConnectorIds();
            const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
            disconnectedConnectorIdsByNamespace.push(connectorId);
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
                ...currentDisconnectedConnectorIds,
                [chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
            }));
        }
        catch {
            console.error(`Unable to set disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
        }
    },
    removeDisconnectedConnectorId(connectorId, chainNamespace) {
        try {
            const currentDisconnectedConnectorIds = StorageUtil_StorageUtil.getDisconnectedConnectorIds();
            let disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
            disconnectedConnectorIdsByNamespace = disconnectedConnectorIdsByNamespace.filter(id => id.toLowerCase() !== connectorId.toLowerCase());
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
                ...currentDisconnectedConnectorIds,
                [chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
            }));
        }
        catch {
            console.error(`Unable to remove disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
        }
    },
    isConnectorDisconnected(connectorId, chainNamespace) {
        try {
            const currentDisconnectedConnectorIds = StorageUtil_StorageUtil.getDisconnectedConnectorIds();
            const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
            return disconnectedConnectorIdsByNamespace.some(id => id.toLowerCase() === connectorId.toLowerCase());
        }
        catch {
            console.info(`Unable to get disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
        }
        return false;
    },
    getTransactionsCache() {
        try {
            const result = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
            return result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get transactions cache');
        }
        return {};
    },
    getTransactionsCacheForAddress({ address, chainId = '' }) {
        try {
            const cache = StorageUtil_StorageUtil.getTransactionsCache();
            const transactionsCache = cache[address]?.[chainId];
            // We want to discard cache if it's older than the cache expiry
            if (transactionsCache &&
                !this.isCacheExpired(transactionsCache.timestamp, this.cacheExpiry.transactionsHistory)) {
                return transactionsCache.transactions;
            }
            StorageUtil_StorageUtil.removeTransactionsCache({ address, chainId });
        }
        catch {
            console.info('Unable to get transactions cache');
        }
        return undefined;
    },
    updateTransactionsCache({ address, chainId = '', timestamp, transactions }) {
        try {
            const cache = StorageUtil_StorageUtil.getTransactionsCache();
            cache[address] = {
                ...cache[address],
                [chainId]: {
                    timestamp,
                    transactions
                }
            };
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update transactions cache', {
                address,
                chainId,
                timestamp,
                transactions
            });
        }
    },
    removeTransactionsCache({ address, chainId }) {
        try {
            const cache = StorageUtil_StorageUtil.getTransactionsCache();
            const addressCache = cache?.[address] || {};
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [chainId]: _removed, ...updatedChainData } = addressCache;
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
                ...cache,
                [address]: updatedChainData
            }));
        }
        catch {
            console.info('Unable to remove transactions cache', { address, chainId });
        }
    },
    getTokenPriceCache() {
        try {
            const result = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.TOKEN_PRICE_CACHE);
            return result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get token price cache');
        }
        return {};
    },
    getTokenPriceCacheForAddresses(addresses) {
        try {
            const cache = StorageUtil_StorageUtil.getTokenPriceCache();
            const tokenPriceCache = cache[addresses.join(',')];
            if (tokenPriceCache &&
                !this.isCacheExpired(tokenPriceCache.timestamp, this.cacheExpiry.tokenPrice)) {
                return tokenPriceCache.tokenPrice;
            }
            StorageUtil_StorageUtil.removeTokenPriceCache(addresses);
        }
        catch {
            console.info('Unable to get token price cache for addresses', addresses);
        }
        return undefined;
    },
    updateTokenPriceCache(params) {
        try {
            const cache = StorageUtil_StorageUtil.getTokenPriceCache();
            cache[params.addresses.join(',')] = {
                timestamp: params.timestamp,
                tokenPrice: params.tokenPrice
            };
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update token price cache', params);
        }
    },
    removeTokenPriceCache(addresses) {
        try {
            const cache = StorageUtil_StorageUtil.getTokenPriceCache();
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify({ ...cache, [addresses.join(',')]: undefined }));
        }
        catch {
            console.info('Unable to remove token price cache', addresses);
        }
    },
    /* ----- AppKit Latest Version ------------------------- */
    getLatestAppKitVersion() {
        try {
            const result = this.getLatestAppKitVersionCache();
            const version = result?.version;
            if (version && !this.isCacheExpired(result.timestamp, this.cacheExpiry.latestAppKitVersion)) {
                return version;
            }
            return undefined;
        }
        catch {
            console.info('Unable to get latest AppKit version');
        }
        return undefined;
    },
    getLatestAppKitVersionCache() {
        try {
            const result = SafeLocalStorage_SafeLocalStorage.getItem(SafeLocalStorage_SafeLocalStorageKeys.LATEST_APPKIT_VERSION);
            return result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get latest AppKit version cache');
        }
        return {};
    },
    updateLatestAppKitVersion(params) {
        try {
            const cache = StorageUtil_StorageUtil.getLatestAppKitVersionCache();
            cache.timestamp = params.timestamp;
            cache.version = params.version;
            SafeLocalStorage_SafeLocalStorage.setItem(SafeLocalStorage_SafeLocalStorageKeys.LATEST_APPKIT_VERSION, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update latest AppKit version on local storage', params);
        }
    }
};
//# sourceMappingURL=StorageUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js



const utils_CoreHelperUtil_CoreHelperUtil = {
    getWindow() {
        if (typeof window === 'undefined') {
            return undefined;
        }
        return window;
    },
    isMobile() {
        if (this.isClient()) {
            return Boolean((window?.matchMedia &&
                typeof window.matchMedia === 'function' &&
                window.matchMedia('(pointer:coarse)')?.matches) ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
        }
        return false;
    },
    checkCaipNetwork(network, networkName = '') {
        return network?.caipNetworkId.toLocaleLowerCase().includes(networkName.toLowerCase());
    },
    isAndroid() {
        if (!this.isMobile()) {
            return false;
        }
        const ua = window?.navigator.userAgent.toLowerCase();
        return utils_CoreHelperUtil_CoreHelperUtil.isMobile() && ua.includes('android');
    },
    isIos() {
        if (!this.isMobile()) {
            return false;
        }
        const ua = window?.navigator.userAgent.toLowerCase();
        return ua.includes('iphone') || ua.includes('ipad');
    },
    isSafari() {
        if (!this.isClient()) {
            return false;
        }
        const ua = window?.navigator.userAgent.toLowerCase();
        return ua.includes('safari');
    },
    isClient() {
        return typeof window !== 'undefined';
    },
    isPairingExpired(expiry) {
        return expiry ? expiry - Date.now() <= dist_esm_src_utils_ConstantsUtil_ConstantsUtil.TEN_SEC_MS : true;
    },
    isAllowedRetry(lastRetry, differenceMs = dist_esm_src_utils_ConstantsUtil_ConstantsUtil.ONE_SEC_MS) {
        return Date.now() - lastRetry >= differenceMs;
    },
    copyToClopboard(text) {
        navigator.clipboard.writeText(text);
    },
    isIframe() {
        try {
            return window?.self !== window?.top;
        }
        catch (e) {
            return false;
        }
    },
    isSafeApp() {
        if (utils_CoreHelperUtil_CoreHelperUtil.isClient() && window.self !== window.top) {
            try {
                const ancestor = window?.location?.ancestorOrigins?.[0];
                const safeAppUrl = 'https://app.safe.global';
                if (ancestor) {
                    const ancestorUrl = new URL(ancestor);
                    const safeUrl = new URL(safeAppUrl);
                    return ancestorUrl.hostname === safeUrl.hostname;
                }
            }
            catch {
                return false;
            }
        }
        return false;
    },
    getPairingExpiry() {
        return Date.now() + dist_esm_src_utils_ConstantsUtil_ConstantsUtil.FOUR_MINUTES_MS;
    },
    getNetworkId(caipAddress) {
        return caipAddress?.split(':')[1];
    },
    getPlainAddress(caipAddress) {
        return caipAddress?.split(':')[2];
    },
    async wait(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    debounce(func, timeout = 500) {
        let timer = undefined;
        return (...args) => {
            function next() {
                func(...args);
            }
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(next, timeout);
        };
    },
    isHttpUrl(url) {
        return url.startsWith('http://') || url.startsWith('https://');
    },
    formatNativeUrl(appUrl, wcUri, universalLink = null) {
        if (utils_CoreHelperUtil_CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatUniversalUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        let safeUniversalLink = universalLink;
        if (!safeAppUrl.includes('://')) {
            safeAppUrl = appUrl.replaceAll('/', '').replaceAll(':', '');
            safeAppUrl = `${safeAppUrl}://`;
        }
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = `${safeAppUrl}/`;
        }
        if (safeUniversalLink && !safeUniversalLink?.endsWith('/')) {
            safeUniversalLink = `${safeUniversalLink}/`;
        }
        // Android deeplinks in tg context require the uri to be encoded twice
        if (this.isTelegram() && this.isAndroid()) {
            // eslint-disable-next-line no-param-reassign
            wcUri = encodeURIComponent(wcUri);
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            redirectUniversalLink: safeUniversalLink
                ? `${safeUniversalLink}wc?uri=${encodedWcUrl}`
                : undefined,
            href: safeAppUrl
        };
    },
    formatUniversalUrl(appUrl, wcUri) {
        if (!utils_CoreHelperUtil_CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatNativeUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = `${safeAppUrl}/`;
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            href: safeAppUrl
        };
    },
    getOpenTargetForPlatform(target) {
        if (target === 'popupWindow') {
            return target;
        }
        // Only '_blank' deeplinks work in Telegram context
        if (this.isTelegram()) {
            // But for social login, we need to load the page in the same context
            if (StorageUtil_StorageUtil.getTelegramSocialProvider()) {
                return '_top';
            }
            return '_blank';
        }
        return target;
    },
    openHref(href, target, features) {
        window?.open(href, this.getOpenTargetForPlatform(target), features || 'noreferrer noopener');
    },
    returnOpenHref(href, target, features) {
        return window?.open(href, this.getOpenTargetForPlatform(target), features || 'noreferrer noopener');
    },
    isTelegram() {
        return (typeof window !== 'undefined' &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (Boolean(window.TelegramWebviewProxy) ||
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Boolean(window.Telegram) ||
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Boolean(window.TelegramWebviewProxyProto)));
    },
    isPWA() {
        if (typeof window === 'undefined') {
            return false;
        }
        const isStandaloneDisplayMode = window?.matchMedia && typeof window.matchMedia === 'function'
            ? window.matchMedia('(display-mode: standalone)')?.matches
            : false;
        const isIOSStandalone = window?.navigator?.standalone;
        return Boolean(isStandaloneDisplayMode || isIOSStandalone);
    },
    async preloadImage(src) {
        const imagePromise = new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.crossOrigin = 'anonymous';
            image.src = src;
        });
        return Promise.race([imagePromise, utils_CoreHelperUtil_CoreHelperUtil.wait(2000)]);
    },
    parseBalance(balance, symbol) {
        let formattedBalance = '0.000';
        if (typeof balance === 'string') {
            const number = Number(balance);
            if (!isNaN(number)) {
                const formattedValue = (Math.floor(number * 1000) / 1000).toFixed(3);
                if (formattedValue) {
                    formattedBalance = formattedValue;
                }
            }
        }
        const [valueString, decimalsString] = formattedBalance.split('.');
        const value = valueString || '0';
        const decimals = decimalsString || '000';
        const formattedText = `${value}.${decimals}${symbol ? ` ${symbol}` : ''}`;
        return {
            formattedText,
            value,
            decimals,
            symbol
        };
    },
    getApiUrl() {
        return esm_src_utils_ConstantsUtil_ConstantsUtil.W3M_API_URL;
    },
    getBlockchainApiUrl() {
        return esm_src_utils_ConstantsUtil_ConstantsUtil.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
        return esm_src_utils_ConstantsUtil_ConstantsUtil.PULSE_API_URL;
    },
    getUUID() {
        if (crypto?.randomUUID) {
            return crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, c => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseError(error) {
        if (typeof error === 'string') {
            return error;
        }
        else if (typeof error?.issues?.[0]?.message === 'string') {
            return error.issues[0].message;
        }
        else if (error instanceof Error) {
            return error.message;
        }
        return 'Unknown error';
    },
    sortRequestedNetworks(approvedIds, requestedNetworks = []) {
        const approvedIndexMap = {};
        if (requestedNetworks && approvedIds) {
            approvedIds.forEach((id, index) => {
                approvedIndexMap[id] = index;
            });
            requestedNetworks.sort((a, b) => {
                const indexA = approvedIndexMap[a.id];
                const indexB = approvedIndexMap[b.id];
                if (indexA !== undefined && indexB !== undefined) {
                    return indexA - indexB;
                }
                else if (indexA !== undefined) {
                    return -1;
                }
                else if (indexB !== undefined) {
                    return 1;
                }
                return 0;
            });
        }
        return requestedNetworks;
    },
    calculateBalance(array) {
        let sum = 0;
        for (const item of array) {
            sum += item.value ?? 0;
        }
        return sum;
    },
    formatTokenBalance(number) {
        const roundedNumber = number.toFixed(2);
        const [dollars, pennies] = roundedNumber.split('.');
        return { dollars, pennies };
    },
    isAddress(address, chain = 'eip155') {
        switch (chain) {
            case 'eip155':
                if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
                    return false;
                }
                else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) ||
                    /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
                    return true;
                }
                return false;
            case 'solana':
                return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(address);
            case 'bip122': {
                const isP2PKH = /^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(address);
                const isP2SH = /^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(address);
                const isBech32 = /^bc1[a-z0-9]{39,87}$/u.test(address);
                const isBech32m = /^bc1p[a-z0-9]{58}$/u.test(address);
                return isP2PKH || isP2SH || isBech32 || isBech32m;
            }
            default:
                return false;
        }
    },
    uniqueBy(arr, key) {
        const set = new Set();
        return arr.filter(item => {
            const keyValue = item[key];
            if (set.has(keyValue)) {
                return false;
            }
            set.add(keyValue);
            return true;
        });
    },
    generateSdkVersion(adapters, platform, version) {
        const hasNoAdapters = adapters.length === 0;
        const adapterNames = (hasNoAdapters
            ? dist_esm_src_utils_ConstantsUtil_ConstantsUtil.ADAPTER_TYPES.UNIVERSAL
            : adapters.map(adapter => adapter.adapterType).join(','));
        return `${platform}-${adapterNames}-${version}`;
    },
    // eslint-disable-next-line max-params
    createAccount(namespace, address, type, publicKey, path) {
        return {
            namespace,
            address,
            type,
            publicKey,
            path
        };
    },
    isCaipAddress(address) {
        if (typeof address !== 'string') {
            return false;
        }
        const sections = address.split(':');
        const namespace = sections[0];
        return (sections.filter(Boolean).length === 3 &&
            namespace in esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN_NAME_MAP);
    },
    getAccount(account) {
        if (!account) {
            return {
                address: undefined,
                chainId: undefined
            };
        }
        if (typeof account === 'string') {
            return {
                address: account,
                chainId: undefined
            };
        }
        return {
            address: account.address,
            chainId: account.chainId
        };
    },
    isMac() {
        const ua = window?.navigator.userAgent.toLowerCase();
        return ua.includes('macintosh') && !ua.includes('safari');
    },
    formatTelegramSocialLoginUrl(url) {
        const valueToInject = `--${encodeURIComponent(window?.location.href)}`;
        const paramToInject = 'state=';
        const parsedUrl = new URL(url);
        if (parsedUrl.host === 'auth.magic.link') {
            const providerParam = 'provider_authorization_url=';
            const providerUrl = url.substring(url.indexOf(providerParam) + providerParam.length);
            const resultUrl = this.injectIntoUrl(decodeURIComponent(providerUrl), paramToInject, valueToInject);
            return url.replace(providerUrl, encodeURIComponent(resultUrl));
        }
        return this.injectIntoUrl(url, paramToInject, valueToInject);
    },
    injectIntoUrl(url, key, appendString) {
        // Find the position of "key" e.g. "state=" in the URL
        const keyIndex = url.indexOf(key);
        if (keyIndex === -1) {
            throw new Error(`${key} parameter not found in the URL: ${url}`);
        }
        // Find the position of the next "&" after "key"
        const keyEndIndex = url.indexOf('&', keyIndex);
        const keyLength = key.length;
        // If there is no "&" after key, it means "key" is the last parameter
        // eslint-disable-next-line no-negated-condition
        const keyParamEnd = keyEndIndex !== -1 ? keyEndIndex : url.length;
        // Extract the part of the URL before the key value
        const beforeKeyValue = url.substring(0, keyIndex + keyLength);
        // Extract the current key value
        const currentKeyValue = url.substring(keyIndex + keyLength, keyParamEnd);
        // Extract the part of the URL after the key value
        const afterKeyValue = url.substring(keyEndIndex);
        // Append the new string to the key value
        const newKeyValue = currentKeyValue + appendString;
        // Reconstruct the URL with the appended key value
        const newUrl = beforeKeyValue + newKeyValue + afterKeyValue;
        return newUrl;
    },
    isNumber(value) {
        if (typeof value !== 'number' && typeof value !== 'string') {
            return false;
        }
        return !isNaN(Number(value));
    }
};
//# sourceMappingURL=CoreHelperUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/FetchUtil.js
async function FetchUtil_fetchData(...args) {
    const response = await fetch(...args);
    if (!response.ok) {
        // Create error object and reject if not a 2xx response code
        const err = new Error(`HTTP status code: ${response.status}`, {
            cause: response
        });
        throw err;
    }
    return response;
}
// -- Utility --------------------------------------------------------------------
class FetchUtil_FetchUtil {
    constructor({ baseUrl, clientId }) {
        this.baseUrl = baseUrl;
        this.clientId = clientId;
    }
    async get({ headers, signal, cache, ...args }) {
        const url = this.createUrl(args);
        const response = await FetchUtil_fetchData(url, { method: 'GET', headers, signal, cache });
        return response.json();
    }
    async getBlob({ headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await FetchUtil_fetchData(url, { method: 'GET', headers, signal });
        return response.blob();
    }
    async post({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await FetchUtil_fetchData(url, {
            method: 'POST',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async put({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await FetchUtil_fetchData(url, {
            method: 'PUT',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async delete({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await FetchUtil_fetchData(url, {
            method: 'DELETE',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    createUrl({ path, params }) {
        const url = new URL(path, this.baseUrl);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value) {
                    url.searchParams.append(key, value);
                }
            });
        }
        if (this.clientId) {
            url.searchParams.append('clientId', this.clientId);
        }
        return url;
    }
    sendBeacon({ body, ...args }) {
        const url = this.createUrl(args);
        return navigator.sendBeacon(url.toString(), body ? JSON.stringify(body) : undefined);
    }
}
//# sourceMappingURL=FetchUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/OptionsUtil.js



const OptionsUtil_OptionsUtil = {
    getFeatureValue(key, features) {
        const optionValue = features?.[key];
        if (optionValue === undefined) {
            return dist_esm_src_utils_ConstantsUtil_ConstantsUtil.DEFAULT_FEATURES[key];
        }
        return optionValue;
    },
    filterSocialsByPlatform(socials) {
        if (!socials || !socials.length) {
            return socials;
        }
        let filteredSocials = socials;
        if (utils_CoreHelperUtil_CoreHelperUtil.isTelegram()) {
            if (utils_CoreHelperUtil_CoreHelperUtil.isIos()) {
                filteredSocials = filteredSocials.filter(s => s !== 'google');
            }
            if (utils_CoreHelperUtil_CoreHelperUtil.isMac()) {
                filteredSocials = filteredSocials.filter(s => s !== 'x');
            }
            if (utils_CoreHelperUtil_CoreHelperUtil.isAndroid()) {
                filteredSocials = filteredSocials.filter(s => !['facebook', 'x'].includes(s));
            }
        }
        if (utils_CoreHelperUtil_CoreHelperUtil.isMobile()) {
            filteredSocials = filteredSocials.filter(s => s !== 'facebook');
        }
        return filteredSocials;
    },
    isSocialsEnabled() {
        return ((Array.isArray(controllers_OptionsController_OptionsController.state.features?.socials) &&
            controllers_OptionsController_OptionsController.state.features?.socials.length > 0) ||
            (Array.isArray(controllers_OptionsController_OptionsController.state.remoteFeatures?.socials) &&
                controllers_OptionsController_OptionsController.state.remoteFeatures?.socials.length > 0));
    },
    isEmailEnabled() {
        return Boolean(controllers_OptionsController_OptionsController.state.features?.email || controllers_OptionsController_OptionsController.state.remoteFeatures?.email);
    }
};
//# sourceMappingURL=OptionsUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js





// -- State --------------------------------------------- //
const controllers_OptionsController_state = (0,vanilla/* proxy */.BX)({
    features: dist_esm_src_utils_ConstantsUtil_ConstantsUtil.DEFAULT_FEATURES,
    projectId: '',
    sdkType: 'appkit',
    sdkVersion: 'html-wagmi-undefined',
    defaultAccountTypes: dist_esm_src_utils_ConstantsUtil_ConstantsUtil.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {},
    enableMobileFullScreen: false,
    coinbasePreference: 'all'
});
// -- Controller ---------------------------------------- //
const controllers_OptionsController_OptionsController = {
    state: controllers_OptionsController_state,
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(controllers_OptionsController_state, key, callback);
    },
    setOptions(options) {
        Object.assign(controllers_OptionsController_state, options);
    },
    setRemoteFeatures(remoteFeatures) {
        if (!remoteFeatures) {
            return;
        }
        const newRemoteFeatures = { ...controllers_OptionsController_state.remoteFeatures, ...remoteFeatures };
        controllers_OptionsController_state.remoteFeatures = newRemoteFeatures;
        if (controllers_OptionsController_state.remoteFeatures?.socials) {
            controllers_OptionsController_state.remoteFeatures.socials = OptionsUtil_OptionsUtil.filterSocialsByPlatform(controllers_OptionsController_state.remoteFeatures.socials);
        }
        if (controllers_OptionsController_state.features?.pay) {
            controllers_OptionsController_state.remoteFeatures.email = false;
            controllers_OptionsController_state.remoteFeatures.socials = false;
        }
    },
    setFeatures(features) {
        if (!features) {
            return;
        }
        if (!controllers_OptionsController_state.features) {
            controllers_OptionsController_state.features = dist_esm_src_utils_ConstantsUtil_ConstantsUtil.DEFAULT_FEATURES;
        }
        const newFeatures = { ...controllers_OptionsController_state.features, ...features };
        controllers_OptionsController_state.features = newFeatures;
        if (controllers_OptionsController_state.features?.pay && controllers_OptionsController_state.remoteFeatures) {
            controllers_OptionsController_state.remoteFeatures.email = false;
            controllers_OptionsController_state.remoteFeatures.socials = false;
        }
    },
    setProjectId(projectId) {
        controllers_OptionsController_state.projectId = projectId;
    },
    setCustomRpcUrls(customRpcUrls) {
        controllers_OptionsController_state.customRpcUrls = customRpcUrls;
    },
    setAllWallets(allWallets) {
        controllers_OptionsController_state.allWallets = allWallets;
    },
    setIncludeWalletIds(includeWalletIds) {
        controllers_OptionsController_state.includeWalletIds = includeWalletIds;
    },
    setExcludeWalletIds(excludeWalletIds) {
        controllers_OptionsController_state.excludeWalletIds = excludeWalletIds;
    },
    setFeaturedWalletIds(featuredWalletIds) {
        controllers_OptionsController_state.featuredWalletIds = featuredWalletIds;
    },
    setTokens(tokens) {
        controllers_OptionsController_state.tokens = tokens;
    },
    setTermsConditionsUrl(termsConditionsUrl) {
        controllers_OptionsController_state.termsConditionsUrl = termsConditionsUrl;
    },
    setPrivacyPolicyUrl(privacyPolicyUrl) {
        controllers_OptionsController_state.privacyPolicyUrl = privacyPolicyUrl;
    },
    setCustomWallets(customWallets) {
        controllers_OptionsController_state.customWallets = customWallets;
    },
    setIsSiweEnabled(isSiweEnabled) {
        controllers_OptionsController_state.isSiweEnabled = isSiweEnabled;
    },
    setIsUniversalProvider(isUniversalProvider) {
        controllers_OptionsController_state.isUniversalProvider = isUniversalProvider;
    },
    setSdkVersion(sdkVersion) {
        controllers_OptionsController_state.sdkVersion = sdkVersion;
    },
    setMetadata(metadata) {
        controllers_OptionsController_state.metadata = metadata;
    },
    setDisableAppend(disableAppend) {
        controllers_OptionsController_state.disableAppend = disableAppend;
    },
    setEIP6963Enabled(enableEIP6963) {
        controllers_OptionsController_state.enableEIP6963 = enableEIP6963;
    },
    setDebug(debug) {
        controllers_OptionsController_state.debug = debug;
    },
    setEnableWalletGuide(enableWalletGuide) {
        controllers_OptionsController_state.enableWalletGuide = enableWalletGuide;
    },
    setEnableAuthLogger(enableAuthLogger) {
        controllers_OptionsController_state.enableAuthLogger = enableAuthLogger;
    },
    setEnableWallets(enableWallets) {
        controllers_OptionsController_state.enableWallets = enableWallets;
    },
    setPreferUniversalLinks(preferUniversalLinks) {
        controllers_OptionsController_state.experimental_preferUniversalLinks = preferUniversalLinks;
    },
    setSIWX(siwx) {
        if (siwx) {
            for (const [key, isVal] of Object.entries(dist_esm_src_utils_ConstantsUtil_ConstantsUtil.SIWX_DEFAULTS)) {
                /*
                 * Only writes when siwx[key] is null or undefined
                 * (use ||= if you only want to check “falsy”, not recommended here)
                 */
                siwx[key] ??= isVal;
            }
        }
        controllers_OptionsController_state.siwx = siwx;
    },
    setConnectMethodsOrder(connectMethodsOrder) {
        controllers_OptionsController_state.features = {
            ...controllers_OptionsController_state.features,
            connectMethodsOrder
        };
    },
    setWalletFeaturesOrder(walletFeaturesOrder) {
        controllers_OptionsController_state.features = {
            ...controllers_OptionsController_state.features,
            walletFeaturesOrder
        };
    },
    setSocialsOrder(socialsOrder) {
        controllers_OptionsController_state.remoteFeatures = {
            ...controllers_OptionsController_state.remoteFeatures,
            socials: socialsOrder
        };
    },
    setCollapseWallets(collapseWallets) {
        controllers_OptionsController_state.features = {
            ...controllers_OptionsController_state.features,
            collapseWallets
        };
    },
    setEnableEmbedded(enableEmbedded) {
        controllers_OptionsController_state.enableEmbedded = enableEmbedded;
    },
    setAllowUnsupportedChain(allowUnsupportedChain) {
        controllers_OptionsController_state.allowUnsupportedChain = allowUnsupportedChain;
    },
    setManualWCControl(manualWCControl) {
        controllers_OptionsController_state.manualWCControl = manualWCControl;
    },
    setEnableNetworkSwitch(enableNetworkSwitch) {
        controllers_OptionsController_state.enableNetworkSwitch = enableNetworkSwitch;
    },
    setEnableMobileFullScreen(enableMobileFullScreen) {
        controllers_OptionsController_state.enableMobileFullScreen = utils_CoreHelperUtil_CoreHelperUtil.isMobile() && enableMobileFullScreen;
    },
    setEnableReconnect(enableReconnect) {
        controllers_OptionsController_state.enableReconnect = enableReconnect;
    },
    setCoinbasePreference(coinbasePreference) {
        controllers_OptionsController_state.coinbasePreference = coinbasePreference;
    },
    setDefaultAccountTypes(defaultAccountType = {}) {
        Object.entries(defaultAccountType).forEach(([namespace, accountType]) => {
            if (accountType) {
                // @ts-expect-error - Keys are validated by the param type
                controllers_OptionsController_state.defaultAccountTypes[namespace] = accountType;
            }
        });
    },
    setUniversalProviderConfigOverride(universalProviderConfigOverride) {
        controllers_OptionsController_state.universalProviderConfigOverride = universalProviderConfigOverride;
    },
    getUniversalProviderConfigOverride() {
        return controllers_OptionsController_state.universalProviderConfigOverride;
    },
    getSnapshot() {
        return (0,vanilla/* snapshot */.P9)(controllers_OptionsController_state);
    }
};
//# sourceMappingURL=OptionsController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js



// -- Constants ----------------------------------------- //
const SnackController_DEFAULT_STATE = Object.freeze({
    message: '',
    variant: 'success',
    svg: undefined,
    open: false,
    autoClose: true
});
// -- State --------------------------------------------- //
const SnackController_state = (0,vanilla/* proxy */.BX)({
    ...SnackController_DEFAULT_STATE
});
// -- Controller ---------------------------------------- //
const SnackController_controller = {
    state: SnackController_state,
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(SnackController_state, key, callback);
    },
    showLoading(message, options = {}) {
        this._showMessage({ message, variant: 'loading', ...options });
    },
    showSuccess(message) {
        this._showMessage({ message, variant: 'success' });
    },
    showSvg(message, svg) {
        this._showMessage({ message, svg });
    },
    showError(message) {
        const errorMessage = utils_CoreHelperUtil_CoreHelperUtil.parseError(message);
        this._showMessage({ message: errorMessage, variant: 'error' });
    },
    hide() {
        SnackController_state.message = SnackController_DEFAULT_STATE.message;
        SnackController_state.variant = SnackController_DEFAULT_STATE.variant;
        SnackController_state.svg = SnackController_DEFAULT_STATE.svg;
        SnackController_state.open = SnackController_DEFAULT_STATE.open;
        SnackController_state.autoClose = SnackController_DEFAULT_STATE.autoClose;
    },
    _showMessage({ message, svg, variant = 'success', autoClose = SnackController_DEFAULT_STATE.autoClose }) {
        if (SnackController_state.open) {
            SnackController_state.open = false;
            setTimeout(() => {
                SnackController_state.message = message;
                SnackController_state.variant = variant;
                SnackController_state.svg = svg;
                SnackController_state.open = true;
                SnackController_state.autoClose = autoClose;
            }, 150);
        }
        else {
            SnackController_state.message = message;
            SnackController_state.variant = variant;
            SnackController_state.svg = svg;
            SnackController_state.open = true;
            SnackController_state.autoClose = autoClose;
        }
    }
};
const SnackController_SnackController = SnackController_controller;
//# sourceMappingURL=SnackController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js








const DEFAULT_OPTIONS = {
    purchaseCurrencies: [
        {
            id: '2b92315d-eab7-5bef-84fa-089a131333f5',
            name: 'USD Coin',
            symbol: 'USDC',
            networks: [
                {
                    name: 'ethereum-mainnet',
                    display_name: 'Ethereum',
                    chain_id: '1',
                    contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
                },
                {
                    name: 'polygon-mainnet',
                    display_name: 'Polygon',
                    chain_id: '137',
                    contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
                }
            ]
        },
        {
            id: '2b92315d-eab7-5bef-84fa-089a131333f5',
            name: 'Ether',
            symbol: 'ETH',
            networks: [
                {
                    name: 'ethereum-mainnet',
                    display_name: 'Ethereum',
                    chain_id: '1',
                    contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
                },
                {
                    name: 'polygon-mainnet',
                    display_name: 'Polygon',
                    chain_id: '137',
                    contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
                }
            ]
        }
    ],
    paymentCurrencies: [
        {
            id: 'USD',
            payment_method_limits: [
                {
                    id: 'card',
                    min: '10.00',
                    max: '7500.00'
                },
                {
                    id: 'ach_bank_account',
                    min: '10.00',
                    max: '25000.00'
                }
            ]
        },
        {
            id: 'EUR',
            payment_method_limits: [
                {
                    id: 'card',
                    min: '10.00',
                    max: '7500.00'
                },
                {
                    id: 'ach_bank_account',
                    min: '10.00',
                    max: '25000.00'
                }
            ]
        }
    ]
};
// -- Helpers ------------------------------------------- //
const baseUrl = utils_CoreHelperUtil_CoreHelperUtil.getBlockchainApiUrl();
// -- State --------------------------------------------- //
const BlockchainApiController_state = (0,vanilla/* proxy */.BX)({
    clientId: null,
    api: new FetchUtil_FetchUtil({ baseUrl, clientId: null }),
    supportedChains: { http: [], ws: [] }
});
// -- Controller ---------------------------------------- //
const BlockchainApiController_BlockchainApiController = {
    state: BlockchainApiController_state,
    async get(request) {
        const { st, sv } = BlockchainApiController_BlockchainApiController.getSdkProperties();
        const projectId = controllers_OptionsController_OptionsController.state.projectId;
        const params = {
            ...(request.params || {}),
            st,
            sv,
            projectId
        };
        return BlockchainApiController_state.api.get({
            ...request,
            params
        });
    },
    getSdkProperties() {
        const { sdkType, sdkVersion } = controllers_OptionsController_OptionsController.state;
        return {
            st: sdkType || 'unknown',
            sv: sdkVersion || 'unknown'
        };
    },
    async isNetworkSupported(networkId) {
        if (!networkId) {
            return false;
        }
        try {
            if (!BlockchainApiController_state.supportedChains.http.length) {
                await BlockchainApiController_BlockchainApiController.getSupportedNetworks();
            }
        }
        catch (e) {
            return false;
        }
        return BlockchainApiController_state.supportedChains.http.includes(networkId);
    },
    async getSupportedNetworks() {
        try {
            const supportedChains = await BlockchainApiController_BlockchainApiController.get({
                path: 'v1/supported-chains'
            });
            BlockchainApiController_state.supportedChains = supportedChains;
            return supportedChains;
        }
        catch {
            return BlockchainApiController_state.supportedChains;
        }
    },
    async fetchIdentity({ address }) {
        const identityCache = StorageUtil_StorageUtil.getIdentityFromCacheForAddress(address);
        if (identityCache) {
            return identityCache;
        }
        const result = await BlockchainApiController_BlockchainApiController.get({
            path: `/v1/identity/${address}`,
            params: {
                sender: ChainController_ChainController.state.activeCaipAddress
                    ? utils_CoreHelperUtil_CoreHelperUtil.getPlainAddress(ChainController_ChainController.state.activeCaipAddress)
                    : undefined
            }
        });
        StorageUtil_StorageUtil.updateIdentityCache({
            address,
            identity: result,
            timestamp: Date.now()
        });
        return result;
    },
    async fetchTransactions({ account, cursor, signal, cache, chainId }) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { data: [], next: undefined };
        }
        const transactionsCache = StorageUtil_StorageUtil.getTransactionsCacheForAddress({
            address: account,
            chainId
        });
        if (transactionsCache) {
            return transactionsCache;
        }
        const result = await BlockchainApiController_BlockchainApiController.get({
            path: `/v1/account/${account}/history`,
            params: {
                cursor,
                chainId
            },
            signal,
            cache
        });
        StorageUtil_StorageUtil.updateTransactionsCache({
            address: account,
            chainId,
            timestamp: Date.now(),
            transactions: result
        });
        return result;
    },
    async fetchSwapQuote({ amount, userAddress, from, to, gasPrice }) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { quotes: [] };
        }
        return BlockchainApiController_BlockchainApiController.get({
            path: `/v1/convert/quotes`,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                amount,
                userAddress,
                from,
                to,
                gasPrice
            }
        });
    },
    async fetchSwapTokens({ chainId }) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { tokens: [] };
        }
        return BlockchainApiController_BlockchainApiController.get({
            path: `/v1/convert/tokens`,
            params: { chainId }
        });
    },
    async getAddressBalance({ caipNetworkId, address }) {
        return BlockchainApiController_state.api
            .post({
            path: `/v1?chainId=${caipNetworkId}&projectId=${controllers_OptionsController_OptionsController.state.projectId}`,
            body: {
                id: '1',
                jsonrpc: '2.0',
                method: 'getAddressBalance',
                params: { address }
            }
        })
            .then(result => result.result);
    },
    async fetchTokenPrice({ addresses, caipNetworkId = ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId }) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(caipNetworkId);
        if (!isSupported) {
            return { fungibles: [] };
        }
        const tokenPriceCache = StorageUtil_StorageUtil.getTokenPriceCacheForAddresses(addresses);
        if (tokenPriceCache) {
            return tokenPriceCache;
        }
        const result = await BlockchainApiController_state.api.post({
            path: '/v1/fungible/price',
            body: {
                currency: 'usd',
                addresses,
                projectId: controllers_OptionsController_OptionsController.state.projectId
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        StorageUtil_StorageUtil.updateTokenPriceCache({
            addresses,
            timestamp: Date.now(),
            tokenPrice: result
        });
        return result;
    },
    async fetchSwapAllowance({ tokenAddress, userAddress }) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { allowance: '0' };
        }
        return BlockchainApiController_BlockchainApiController.get({
            path: `/v1/convert/allowance`,
            params: {
                tokenAddress,
                userAddress
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    async fetchGasPrice({ chainId }) {
        const { st, sv } = BlockchainApiController_BlockchainApiController.getSdkProperties();
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            throw new Error('Network not supported for Gas Price');
        }
        return BlockchainApiController_BlockchainApiController.get({
            path: `/v1/convert/gas-price`,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                chainId,
                st,
                sv
            }
        });
    },
    async generateSwapCalldata({ amount, from, to, userAddress, disableEstimate }) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            throw new Error('Network not supported for Swaps');
        }
        return BlockchainApiController_state.api.post({
            path: '/v1/convert/build-transaction',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                amount,
                eip155: {
                    slippage: dist_esm_src_utils_ConstantsUtil_ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE
                },
                projectId: controllers_OptionsController_OptionsController.state.projectId,
                from,
                to,
                userAddress,
                disableEstimate
            }
        });
    },
    async generateApproveCalldata({ from, to, userAddress }) {
        const { st, sv } = BlockchainApiController_BlockchainApiController.getSdkProperties();
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            throw new Error('Network not supported for Swaps');
        }
        return BlockchainApiController_BlockchainApiController.get({
            path: `/v1/convert/build-approve`,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                userAddress,
                from,
                to,
                st,
                sv
            }
        });
    },
    async getBalance(address, chainId, forceUpdate) {
        const { st, sv } = BlockchainApiController_BlockchainApiController.getSdkProperties();
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            SnackController_SnackController.showError('Token Balance Unavailable');
            return { balances: [] };
        }
        const caipAddress = `${chainId}:${address}`;
        const cachedBalance = StorageUtil_StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
        if (cachedBalance) {
            return cachedBalance;
        }
        const balance = await BlockchainApiController_BlockchainApiController.get({
            path: `/v1/account/${address}/balance`,
            params: {
                currency: 'usd',
                chainId,
                forceUpdate,
                st,
                sv
            }
        });
        StorageUtil_StorageUtil.updateBalanceCache({
            caipAddress,
            balance,
            timestamp: Date.now()
        });
        return balance;
    },
    async lookupEnsName(name) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { addresses: {}, attributes: [] };
        }
        return BlockchainApiController_BlockchainApiController.get({
            path: `/v1/profile/account/${name}`,
            params: { apiVersion: '2' }
        });
    },
    async reverseLookupEnsName({ address }) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return [];
        }
        const sender = ChainController_ChainController.getAccountData()?.address;
        return BlockchainApiController_BlockchainApiController.get({
            path: `/v1/profile/reverse/${address}`,
            params: {
                sender,
                apiVersion: '2'
            }
        });
    },
    async getEnsNameSuggestions(name) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { suggestions: [] };
        }
        return BlockchainApiController_BlockchainApiController.get({
            path: `/v1/profile/suggestions/${name}`,
            params: { zone: 'reown.id' }
        });
    },
    async registerEnsName({ coinType, address, message, signature }) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { success: false };
        }
        return BlockchainApiController_state.api.post({
            path: `/v1/profile/account`,
            body: { coin_type: coinType, address, message, signature },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    async generateOnRampURL({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return '';
        }
        const response = await BlockchainApiController_state.api.post({
            path: `/v1/generators/onrampurl`,
            params: {
                projectId: controllers_OptionsController_OptionsController.state.projectId
            },
            body: {
                destinationWallets,
                defaultNetwork,
                partnerUserId,
                defaultExperience: 'buy',
                presetCryptoAmount: purchaseAmount,
                presetFiatAmount: paymentAmount
            }
        });
        return response.url;
    },
    async getOnrampOptions() {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { paymentCurrencies: [], purchaseCurrencies: [] };
        }
        try {
            const response = await BlockchainApiController_BlockchainApiController.get({
                path: `/v1/onramp/options`
            });
            return response;
        }
        catch (e) {
            return DEFAULT_OPTIONS;
        }
    },
    async getOnrampQuote({ purchaseCurrency, paymentCurrency, amount, network }) {
        try {
            const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
            if (!isSupported) {
                return null;
            }
            const response = await BlockchainApiController_state.api.post({
                path: `/v1/onramp/quote`,
                params: {
                    projectId: controllers_OptionsController_OptionsController.state.projectId
                },
                body: {
                    purchaseCurrency,
                    paymentCurrency,
                    amount,
                    network
                }
            });
            return response;
        }
        catch (e) {
            // Mocking response as 1:1 until endpoint is ready
            return {
                networkFee: { amount, currency: paymentCurrency.id },
                paymentSubtotal: { amount, currency: paymentCurrency.id },
                paymentTotal: { amount, currency: paymentCurrency.id },
                purchaseAmount: { amount, currency: paymentCurrency.id },
                quoteId: 'mocked-quote-id'
            };
        }
    },
    async getSmartSessions(caipAddress) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return [];
        }
        return BlockchainApiController_BlockchainApiController.get({
            path: `/v1/sessions/${caipAddress}`
        });
    },
    async revokeSmartSession(address, pci, signature) {
        const isSupported = await BlockchainApiController_BlockchainApiController.isNetworkSupported(ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { success: false };
        }
        return BlockchainApiController_state.api.post({
            path: `/v1/sessions/${address}/revoke`,
            params: {
                projectId: controllers_OptionsController_OptionsController.state.projectId
            },
            body: {
                pci,
                signature
            }
        });
    },
    setClientId(clientId) {
        BlockchainApiController_state.clientId = clientId;
        BlockchainApiController_state.api = new FetchUtil_FetchUtil({ baseUrl, clientId });
    }
};
//# sourceMappingURL=BlockchainApiController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js





// -- Helpers ------------------------------------------- //
const EventsController_baseUrl = utils_CoreHelperUtil_CoreHelperUtil.getAnalyticsUrl();
const EventsController_api = new FetchUtil_FetchUtil({ baseUrl: EventsController_baseUrl, clientId: null });
const excluded = ['MODAL_CREATED'];
// SendBeacon payload limit is 64KB, using 45KB for a safe margin, also 45KB is approx ~200 events which is plenty
const MAX_PENDING_EVENTS_KB = 45;
// Flush events every 10 seconds
const FLUSH_EVENTS_INTERVAL_MS = 1000 * 10;
// -- State --------------------------------------------- //
const EventsController_state = (0,vanilla/* proxy */.BX)({
    timestamp: Date.now(),
    lastFlush: Date.now(),
    reportedErrors: {},
    data: {
        type: 'track',
        event: 'MODAL_CREATED'
    },
    pendingEvents: [],
    subscribedToVisibilityChange: false,
    walletImpressions: []
});
// -- Controller ---------------------------------------- //
const EventsController_EventsController = {
    state: EventsController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(EventsController_state, () => callback(EventsController_state));
    },
    getSdkProperties() {
        const { projectId, sdkType, sdkVersion } = controllers_OptionsController_OptionsController.state;
        return {
            projectId,
            st: sdkType,
            sv: sdkVersion || 'html-wagmi-4.2.2'
        };
    },
    shouldFlushEvents() {
        const isOverMaxSize = JSON.stringify(EventsController_state.pendingEvents).length / 1024 > MAX_PENDING_EVENTS_KB;
        const isExpired = EventsController_state.lastFlush + FLUSH_EVENTS_INTERVAL_MS < Date.now();
        return isOverMaxSize || isExpired;
    },
    _setPendingEvent(payload) {
        try {
            let address = ChainController_ChainController.getAccountData()?.address;
            if ('address' in payload.data && payload.data.address) {
                address = payload.data.address;
            }
            if (excluded.includes(payload.data.event) || typeof window === 'undefined') {
                return;
            }
            const caipNetworkId = ChainController_ChainController.getActiveCaipNetwork()?.caipNetworkId;
            this.state.pendingEvents.push({
                eventId: utils_CoreHelperUtil_CoreHelperUtil.getUUID(),
                url: window.location.href,
                domain: window.location.hostname,
                timestamp: payload.timestamp,
                props: {
                    ...payload.data,
                    address,
                    properties: {
                        ...('properties' in payload.data ? payload.data.properties : {}),
                        caipNetworkId
                    }
                }
            });
            EventsController_state.reportedErrors['FORBIDDEN'] = false;
            const shouldFlush = EventsController_EventsController.shouldFlushEvents();
            // If the pending events are too large, submit them as sendBeacon has a limit of 64KB
            if (shouldFlush) {
                EventsController_EventsController._submitPendingEvents();
            }
        }
        catch (err) {
            console.warn('_setPendingEvent', err);
        }
    },
    sendEvent(data) {
        EventsController_state.timestamp = Date.now();
        EventsController_state.data = data;
        const MANDATORY_EVENTS = [
            'INITIALIZE',
            'CONNECT_SUCCESS',
            'SOCIAL_LOGIN_SUCCESS'
        ];
        if (controllers_OptionsController_OptionsController.state.features?.analytics || MANDATORY_EVENTS.includes(data.event)) {
            EventsController_EventsController._setPendingEvent(EventsController_state);
        }
        // Calling this function here to make sure document is ready and defined before subscribing to visibility change
        this.subscribeToFlushTriggers();
    },
    /**
     * Adds a wallet impression item to the aggregated list. These are flushed as a single
     * WALLET_IMPRESSION_V2 batch in _submitPendingEvents.
     */
    sendWalletImpressionEvent(item) {
        EventsController_state.walletImpressions.push(item);
    },
    _transformPendingEventsForBatch(events) {
        try {
            return events.filter(evt => {
                const eventName = evt.props.event;
                return eventName !== 'WALLET_IMPRESSION_V2';
            });
        }
        catch {
            return events;
        }
    },
    _submitPendingEvents() {
        EventsController_state.lastFlush = Date.now();
        if (EventsController_state.pendingEvents.length === 0 && EventsController_state.walletImpressions.length === 0) {
            return;
        }
        try {
            const batch = EventsController_EventsController._transformPendingEventsForBatch(EventsController_state.pendingEvents);
            if (EventsController_state.walletImpressions.length) {
                batch.push({
                    eventId: utils_CoreHelperUtil_CoreHelperUtil.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: Date.now(),
                    props: {
                        type: 'track',
                        event: 'WALLET_IMPRESSION_V2',
                        items: [...EventsController_state.walletImpressions]
                    }
                });
            }
            EventsController_api.sendBeacon({
                path: '/batch',
                params: EventsController_EventsController.getSdkProperties(),
                body: batch
            });
            EventsController_state.reportedErrors['FORBIDDEN'] = false;
            EventsController_state.pendingEvents = [];
            EventsController_state.walletImpressions = [];
        }
        catch (err) {
            EventsController_state.reportedErrors['FORBIDDEN'] = true;
        }
    },
    subscribeToFlushTriggers() {
        if (EventsController_state.subscribedToVisibilityChange) {
            return;
        }
        if (typeof document === 'undefined') {
            return;
        }
        EventsController_state.subscribedToVisibilityChange = true;
        // Submit pending events when the document is hidden
        document?.addEventListener?.('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                EventsController_EventsController._submitPendingEvents();
            }
        });
        // Submit pending events when the document is frozen (triggered on mobile)
        document?.addEventListener?.('freeze', () => {
            EventsController_EventsController._submitPendingEvents();
        });
        // Submit pending events when the window is hidden
        window?.addEventListener?.('pagehide', () => {
            EventsController_EventsController._submitPendingEvents();
        });
        // Submit pending events every 10 seconds
        setInterval(() => {
            EventsController_EventsController._submitPendingEvents();
        }, FLUSH_EVENTS_INTERVAL_MS);
    }
};
//# sourceMappingURL=EventsController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectionControllerUtil.js






// -- Utils ------------------------------------------ //
const ConnectionControllerUtil = {
    getConnectionStatus(connection, namespace) {
        const connectedConnectorId = ConnectorController_ConnectorController.state.activeConnectorIds[namespace];
        const connections = ConnectionController_ConnectionController.getConnections(namespace);
        const isConnectorConnected = Boolean(connectedConnectorId) && connection.connectorId === connectedConnectorId;
        if (isConnectorConnected) {
            return 'connected';
        }
        const isConnectionConnected = connections.some(c => c.connectorId.toLowerCase() === connection.connectorId.toLowerCase());
        if (isConnectionConnected) {
            return 'active';
        }
        return 'disconnected';
    },
    excludeConnectorAddressFromConnections({ connections, connectorId, addresses }) {
        return connections.map(connection => {
            const isConnectorMatch = connectorId
                ? connection.connectorId.toLowerCase() === connectorId.toLowerCase()
                : false;
            if (isConnectorMatch && addresses) {
                const filteredAccounts = connection.accounts.filter(account => {
                    const isAddressIncluded = addresses.some(address => address.toLowerCase() === account.address.toLowerCase());
                    return !isAddressIncluded;
                });
                return { ...connection, accounts: filteredAccounts };
            }
            return connection;
        });
    },
    excludeExistingConnections(connectorIds, newConnections) {
        const existingConnectorIds = new Set(connectorIds);
        return newConnections.filter(c => !existingConnectorIds.has(c.connectorId));
    },
    getConnectionsByConnectorId(connections, connectorId) {
        return connections.filter(c => c.connectorId.toLowerCase() === connectorId.toLowerCase());
    },
    getConnectionsData(namespace) {
        const isMultiWalletEnabled = Boolean(controllers_OptionsController_OptionsController.state.remoteFeatures?.multiWallet);
        const activeConnectorId = ConnectorController_ConnectorController.state.activeConnectorIds[namespace];
        const connections = ConnectionController_ConnectionController.getConnections(namespace);
        const recentConnections = ConnectionController_ConnectionController.state.recentConnections.get(namespace) ?? [];
        const recentConnectionsWithCurrentActiveConnectors = recentConnections.filter(connection => ConnectorController_ConnectorController.getConnectorById(connection.connectorId));
        const dedupedRecentConnections = ConnectionControllerUtil.excludeExistingConnections([...connections.map(c => c.connectorId), ...(activeConnectorId ? [activeConnectorId] : [])], recentConnectionsWithCurrentActiveConnectors);
        if (!isMultiWalletEnabled) {
            return {
                connections: connections.filter(c => c.connectorId.toLowerCase() === activeConnectorId?.toLowerCase()),
                recentConnections: []
            };
        }
        return {
            connections,
            recentConnections: dedupedRecentConnections
        };
    },
    onConnectMobile(wallet) {
        const wcUri = ConnectionController_ConnectionController.state.wcUri;
        if (wallet?.mobile_link && wcUri) {
            try {
                ConnectionController_ConnectionController.setWcError(false);
                const { mobile_link, link_mode, name } = wallet;
                const { redirect, redirectUniversalLink, href } = utils_CoreHelperUtil_CoreHelperUtil.formatNativeUrl(mobile_link, wcUri, link_mode);
                const deepLink = redirect;
                const universalLink = redirectUniversalLink;
                const target = utils_CoreHelperUtil_CoreHelperUtil.isIframe() ? '_top' : '_self';
                ConnectionController_ConnectionController.setWcLinking({ name, href });
                ConnectionController_ConnectionController.setRecentWallet(wallet);
                if (controllers_OptionsController_OptionsController.state.experimental_preferUniversalLinks && universalLink) {
                    utils_CoreHelperUtil_CoreHelperUtil.openHref(universalLink, target);
                }
                else {
                    utils_CoreHelperUtil_CoreHelperUtil.openHref(deepLink, target);
                }
            }
            catch (e) {
                EventsController_EventsController.sendEvent({
                    type: 'track',
                    event: 'CONNECT_PROXY_ERROR',
                    properties: {
                        message: e instanceof Error ? e.message : 'Error parsing the deep link',
                        uri: wcUri,
                        mobile_link: wallet.mobile_link,
                        name: wallet.name
                    }
                });
                ConnectionController_ConnectionController.setWcError(true);
            }
        }
    }
};
//# sourceMappingURL=ConnectionControllerUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TelemetryController.js





// -- Constants ----------------------------------------- //
const TelemetryController_DEFAULT_STATE = Object.freeze({
    enabled: true,
    events: []
});
const TelemetryController_api = new FetchUtil_FetchUtil({ baseUrl: utils_CoreHelperUtil_CoreHelperUtil.getAnalyticsUrl(), clientId: null });
// Rate limiting constants
const TelemetryController_MAX_ERRORS_PER_MINUTE = 5;
const TelemetryController_ONE_MINUTE_MS = 60 * 1000;
// -- State --------------------------------------------- //
const controllers_TelemetryController_state = (0,vanilla/* proxy */.BX)({
    ...TelemetryController_DEFAULT_STATE
});
// -- Controller ---------------------------------------- //
const TelemetryController_TelemetryController = {
    state: controllers_TelemetryController_state,
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(controllers_TelemetryController_state, key, callback);
    },
    async sendError(error, category) {
        if (!controllers_TelemetryController_state.enabled) {
            return;
        }
        // Check rate limiting using events array
        const now = Date.now();
        const recentErrors = controllers_TelemetryController_state.events.filter(event => {
            const eventTime = new Date(event.properties.timestamp || '').getTime();
            return now - eventTime < TelemetryController_ONE_MINUTE_MS;
        });
        if (recentErrors.length >= TelemetryController_MAX_ERRORS_PER_MINUTE) {
            // Exit silently
            return;
        }
        const errorEvent = {
            type: 'error',
            event: category,
            properties: {
                errorType: error.name,
                errorMessage: error.message,
                stackTrace: error.stack,
                timestamp: new Date().toISOString()
            }
        };
        controllers_TelemetryController_state.events.push(errorEvent);
        try {
            if (typeof window === 'undefined') {
                return;
            }
            const { projectId, sdkType, sdkVersion } = controllers_OptionsController_OptionsController.state;
            await TelemetryController_api.post({
                path: '/e',
                params: {
                    projectId,
                    st: sdkType,
                    sv: sdkVersion || 'html-wagmi-4.2.2'
                },
                body: {
                    eventId: utils_CoreHelperUtil_CoreHelperUtil.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: new Date().toISOString(),
                    props: {
                        type: 'error',
                        event: category,
                        errorType: error.name,
                        errorMessage: error.message,
                        stackTrace: error.stack
                    }
                }
            });
        }
        catch {
            // Do nothing
        }
    },
    enable() {
        controllers_TelemetryController_state.enabled = true;
    },
    disable() {
        controllers_TelemetryController_state.enabled = false;
    },
    clearEvents() {
        controllers_TelemetryController_state.events = [];
    }
};
//# sourceMappingURL=TelemetryController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js

class withErrorBoundary_AppKitError extends Error {
    constructor(message, category, originalError) {
        super(message);
        this.originalName = 'AppKitError';
        this.name = 'AppKitError';
        this.category = category;
        this.originalError = originalError;
        if (originalError && originalError instanceof Error) {
            this.originalName = originalError.name;
        }
        // Ensure `this instanceof AppKitError` is true, important for custom errors.
        Object.setPrototypeOf(this, withErrorBoundary_AppKitError.prototype);
        let isStackConstructedFromOriginal = false;
        if (originalError instanceof Error &&
            typeof originalError.stack === 'string' &&
            originalError.stack) {
            const originalErrorStack = originalError.stack;
            /**
             * Most error stacks start with "ErrorName: ErrorMessage\n...frames..."
             * We want to take the "...frames..." part.
             */
            const firstNewlineIndex = originalErrorStack.indexOf('\n');
            if (firstNewlineIndex > -1) {
                const originalFrames = originalErrorStack.substring(firstNewlineIndex + 1);
                this.stack = `${this.name}: ${this.message}\n${originalFrames}`;
                isStackConstructedFromOriginal = true;
            }
        }
        if (!isStackConstructedFromOriginal) {
            /**
             * If stack was not (or could not be) constructed from originalError,
             * generate a standard stack trace for this AppKitError instance.
             * This will point to where `new AppKitError()` was called.
             */
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, withErrorBoundary_AppKitError);
            }
            else if (!this.stack) {
                /**
                 * Fallback for environments without Error.captureStackTrace.
                 * `super(message)` might have set a stack.
                 * If `this.stack` is still undefined/empty, provide a minimal one.
                 * Node.js and modern browsers typically set `this.stack` from `super(message)`.
                 */
                this.stack = `${this.name}: ${this.message}`;
            }
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withErrorBoundary_errorHandler(err, defaultCategory) {
    let errMessage = '';
    try {
        if (err instanceof Error) {
            errMessage = err.message;
        }
        else if (typeof err === 'string') {
            errMessage = err;
        }
        else if (typeof err === 'object' && err !== null) {
            if (Object.keys(err).length === 0) {
                errMessage = 'Unknown error';
            }
            else {
                errMessage = err?.message || JSON.stringify(err);
            }
        }
        else {
            errMessage = String(err);
        }
    }
    catch (_error) {
        errMessage = 'Unknown error';
        // eslint-disable-next-line no-console
        console.error('Error parsing error message', _error);
    }
    const error = err instanceof withErrorBoundary_AppKitError ? err : new withErrorBoundary_AppKitError(errMessage, defaultCategory, err);
    TelemetryController_TelemetryController.sendError(error, error.category);
    throw error;
}
function utils_withErrorBoundary_withErrorBoundary(controller, defaultCategory = 'INTERNAL_SDK_ERROR') {
    const newController = {};
    Object.keys(controller).forEach(key => {
        const original = controller[key];
        if (typeof original === 'function') {
            let wrapped = original;
            if (original.constructor.name === 'AsyncFunction') {
                wrapped = async (...args) => {
                    try {
                        return await original(...args);
                    }
                    catch (err) {
                        return withErrorBoundary_errorHandler(err, defaultCategory);
                    }
                };
            }
            else {
                wrapped = (...args) => {
                    try {
                        return original(...args);
                    }
                    catch (err) {
                        return withErrorBoundary_errorHandler(err, defaultCategory);
                    }
                };
            }
            newController[key] = wrapped;
        }
        else {
            newController[key] = original;
        }
    });
    return newController;
}
//# sourceMappingURL=withErrorBoundary.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js



// -- State --------------------------------------------- //
const AssetController_state = (0,vanilla/* proxy */.BX)({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
});
// -- Controller ---------------------------------------- //
const AssetController_controller = {
    state: AssetController_state,
    subscribeNetworkImages(callback) {
        return (0,vanilla/* subscribe */.B1)(AssetController_state.networkImages, () => callback(AssetController_state.networkImages));
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(AssetController_state, key, callback);
    },
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(AssetController_state, () => callback(AssetController_state));
    },
    setWalletImage(key, value) {
        AssetController_state.walletImages[key] = value;
    },
    setNetworkImage(key, value) {
        AssetController_state.networkImages[key] = value;
    },
    setChainImage(key, value) {
        AssetController_state.chainImages[key] = value;
    },
    setConnectorImage(key, value) {
        AssetController_state.connectorImages = { ...AssetController_state.connectorImages, [key]: value };
    },
    setTokenImage(key, value) {
        AssetController_state.tokenImages[key] = value;
    },
    setCurrencyImage(key, value) {
        AssetController_state.currencyImages[key] = value;
    }
};
// Export the controller wrapped with our error boundary
const AssetController_AssetController = utils_withErrorBoundary_withErrorBoundary(AssetController_controller);
//# sourceMappingURL=AssetController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js





const namespaceImageIds = {
    // Ethereum
    eip155: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
    // Solana
    solana: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
    // Polkadot
    polkadot: '',
    // Bitcoin
    bip122: '0b4838db-0161-4ffe-022d-532bf03dba00',
    // Cosmos
    cosmos: '',
    // Sui
    sui: '',
    // Stacks
    stacks: '',
    // TON
    ton: '20f673c0-095e-49b2-07cf-eb5049dcf600'
};
// -- State --------------------------------------------- //
const AssetUtil_state = (0,vanilla/* proxy */.BX)({
    networkImagePromises: {},
    tokenImagePromises: {}
});
// -- Util ---------------------------------------- //
const AssetUtil_AssetUtil = {
    async fetchWalletImage(imageId) {
        if (!imageId) {
            return undefined;
        }
        await ApiController_ApiController._fetchWalletImage(imageId);
        return this.getWalletImageById(imageId);
    },
    async fetchNetworkImage(imageId) {
        if (!imageId) {
            return undefined;
        }
        const existingImage = this.getNetworkImageById(imageId);
        // Check if the image already exists
        if (existingImage) {
            return existingImage;
        }
        // Check if the promise is already created
        if (!AssetUtil_state.networkImagePromises[imageId]) {
            AssetUtil_state.networkImagePromises[imageId] = ApiController_ApiController._fetchNetworkImage(imageId);
        }
        await AssetUtil_state.networkImagePromises[imageId];
        return this.getNetworkImageById(imageId);
    },
    /**
     * Fetches the token image for the given image ID.
     * @param imageId - The image id of the token.
     * @returns The token image.
     */
    async fetchTokenImage(imageId) {
        if (!imageId) {
            return undefined;
        }
        if (!AssetUtil_state.tokenImagePromises[imageId]) {
            AssetUtil_state.tokenImagePromises[imageId] = ApiController_ApiController._fetchTokenImage(imageId);
        }
        await AssetUtil_state.tokenImagePromises[imageId];
        return this.getTokenImage(imageId);
    },
    getWalletImageById(imageId) {
        if (!imageId) {
            return undefined;
        }
        return AssetController_AssetController.state.walletImages[imageId];
    },
    getWalletImage(wallet) {
        if (wallet?.image_url) {
            return wallet?.image_url;
        }
        if (wallet?.image_id) {
            return AssetController_AssetController.state.walletImages[wallet.image_id];
        }
        return undefined;
    },
    getNetworkImage(network) {
        if (network?.assets?.imageUrl) {
            return network?.assets?.imageUrl;
        }
        if (network?.assets?.imageId) {
            return AssetController_AssetController.state.networkImages[network.assets.imageId];
        }
        return undefined;
    },
    getNetworkImageById(imageId) {
        if (!imageId) {
            return undefined;
        }
        return AssetController_AssetController.state.networkImages[imageId];
    },
    getConnectorImage(connector) {
        if (connector?.imageUrl) {
            return connector.imageUrl;
        }
        if (connector?.info?.icon) {
            return connector.info.icon;
        }
        if (connector?.imageId) {
            return AssetController_AssetController.state.connectorImages[connector.imageId];
        }
        return undefined;
    },
    getChainImage(chain) {
        return AssetController_AssetController.state.networkImages[namespaceImageIds[chain]];
    },
    getTokenImage(symbol) {
        if (!symbol) {
            return undefined;
        }
        return AssetController_AssetController.state.tokenImages[symbol];
    },
    /**
     * Get the explorer wallet's image URL for the given image ID.
     * @param imageId - The image id of the wallet.
     * @returns The image URL for the wallet.
     */
    getWalletImageUrl(imageId) {
        if (!imageId) {
            return '';
        }
        const { projectId, sdkType, sdkVersion } = controllers_OptionsController_OptionsController.state;
        const url = new URL(`${esm_src_utils_ConstantsUtil_ConstantsUtil.W3M_API_URL}/getWalletImage/${imageId}`);
        url.searchParams.set('projectId', projectId);
        url.searchParams.set('st', sdkType);
        url.searchParams.set('sv', sdkVersion);
        return url.toString();
    },
    /**
     * Get the public asset's image URL with the given image ID.
     * @param imageId - The image id of the asset.
     * @returns The image URL for the asset.
     */
    getAssetImageUrl(imageId) {
        if (!imageId) {
            return '';
        }
        const { projectId, sdkType, sdkVersion } = controllers_OptionsController_OptionsController.state;
        const url = new URL(`${esm_src_utils_ConstantsUtil_ConstantsUtil.W3M_API_URL}/public/getAssetImage/${imageId}`);
        url.searchParams.set('projectId', projectId);
        url.searchParams.set('st', sdkType);
        url.searchParams.set('sv', sdkVersion);
        return url.toString();
    },
    /**
     * Get the image URL for the given chain namespace.
     * @param chainNamespace - The chain namespace to get the image URL for.
     * @returns The image URL for the chain namespace.
     */
    getChainNamespaceImageUrl(chainNamespace) {
        return this.getAssetImageUrl(namespaceImageIds[chainNamespace]);
    },
    /**
     * Get the image id for the given token and namespace.
     * @param token - The token address or 'native' to get the image id for.
     * @param namespace - The namespace to get the image id for.
     * @returns The image URL for the token.
     */
    async getImageByToken(token, namespace) {
        if (token === 'native') {
            const imageId = esm_src_utils_ConstantsUtil_ConstantsUtil.NATIVE_IMAGE_IDS_BY_NAMESPACE[namespace] ?? null;
            if (!imageId) {
                return undefined;
            }
            return AssetUtil_AssetUtil.fetchNetworkImage(imageId);
        }
        const [, symbol] = Object.entries(esm_src_utils_ConstantsUtil_ConstantsUtil.TOKEN_SYMBOLS_BY_ADDRESS).find(([address]) => address.toLowerCase() === token.toLowerCase()) ?? [];
        if (!symbol) {
            return undefined;
        }
        return AssetUtil_AssetUtil.fetchTokenImage(symbol);
    }
};
//# sourceMappingURL=AssetUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/MobileWallet.js


/*
 * Exclude wallets that do not support relay connections but have custom deeplink mechanisms
 * Excludes:
 * - Phantom
 * - Coinbase
 */
const CUSTOM_DEEPLINK_WALLETS = {
    PHANTOM: {
        id: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        url: 'https://phantom.app'
    },
    SOLFLARE: {
        id: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        url: 'https://solflare.com'
    },
    COINBASE: {
        id: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        url: 'https://go.cb-w.com'
    },
    /*
     * Got details from their npm package:
     * https://www.npmjs.com/package/@binance/w3w-utils?activeTab=code
     * https://developers.binance.com/docs/binance-w3w/evm-compatible-provider#getdeeplink
     */
    BINANCE: {
        id: '2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25',
        appId: 'yFK5FCqYprrXDiVFbhyRx7',
        deeplink: 'bnc://app.binance.com/mp/app',
        url: 'https://app.binance.com/en/download'
    }
};
const MobileWalletUtil = {
    /**
     * Handles mobile wallet redirection for wallets that have Universal Links and doesn't support WalletConnect Deep Links.
     *
     * @param {string} id - The id of the wallet.
     * @param {ChainNamespace} namespace - The namespace of the chain.
     */
    handleMobileDeeplinkRedirect(id, namespace) {
        /**
         * Universal Links requires explicit user interaction to open the wallet app.
         * Previously we've been calling this with the life-cycle methods in the Solana clients by listening the SELECT_WALLET event of EventController.
         * But this breaks the UL functionality for some wallets like Phantom.
         */
        const href = window.location.href;
        const encodedHref = encodeURIComponent(href);
        if (id === CUSTOM_DEEPLINK_WALLETS.PHANTOM.id && !('phantom' in window)) {
            const protocol = href.startsWith('https') ? 'https' : 'http';
            const host = href.split('/')[2];
            const encodedRef = encodeURIComponent(`${protocol}://${host}`);
            window.location.href = `${CUSTOM_DEEPLINK_WALLETS.PHANTOM.url}/ul/browse/${encodedHref}?ref=${encodedRef}`;
        }
        if (id === CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id && !('solflare' in window)) {
            window.location.href = `${CUSTOM_DEEPLINK_WALLETS.SOLFLARE.url}/ul/v1/browse/${encodedHref}?ref=${encodedHref}`;
        }
        if (namespace === esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA) {
            if (id === CUSTOM_DEEPLINK_WALLETS.COINBASE.id && !('coinbaseSolana' in window)) {
                window.location.href = `${CUSTOM_DEEPLINK_WALLETS.COINBASE.url}/dapp?cb_url=${encodedHref}`;
            }
        }
        /*
         * Binance Web3 Wallet doesn't support WalletConnect for Bitcoin.
         * For now we use their deeplink to open the in-app browser instead.
         */
        if (namespace === esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.BITCOIN) {
            if (id === CUSTOM_DEEPLINK_WALLETS.BINANCE.id && !('binancew3w' in window)) {
                const activeCaipNetwork = ChainController_ChainController.state.activeCaipNetwork;
                const startPagePath = window.btoa('/pages/browser/index');
                const startPageQuery = window.btoa(`url=${encodedHref}&defaultChainId=${activeCaipNetwork?.id ?? 1}`);
                const deeplink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.deeplink);
                deeplink.searchParams.set('appId', CUSTOM_DEEPLINK_WALLETS.BINANCE.appId);
                deeplink.searchParams.set('startPagePath', startPagePath);
                deeplink.searchParams.set('startPageQuery', startPageQuery);
                const universalLink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.url);
                universalLink.searchParams.set('_dp', window.btoa(deeplink.toString()));
                window.location.href = universalLink.toString();
            }
        }
    }
};
//# sourceMappingURL=MobileWallet.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js













// -- Helpers ------------------------------------------- //
const ApiController_baseUrl = utils_CoreHelperUtil_CoreHelperUtil.getApiUrl();
const ApiController_api = new FetchUtil_FetchUtil({
    baseUrl: ApiController_baseUrl,
    clientId: null
});
const entries = 40;
const recommendedEntries = 4;
const imageCountToFetch = 20;
// -- State --------------------------------------------- //
const ApiController_state = (0,vanilla/* proxy */.BX)({
    promises: {},
    page: 1,
    count: 0,
    featured: [],
    allFeatured: [],
    recommended: [],
    allRecommended: [],
    wallets: [],
    filteredWallets: [],
    search: [],
    isAnalyticsEnabled: false,
    excludedWallets: [],
    isFetchingRecommendedWallets: false,
    explorerWallets: [],
    explorerFilteredWallets: [],
    plan: {
        tier: 'none',
        hasExceededUsageLimit: false,
        limits: {
            isAboveRpcLimit: false,
            isAboveMauLimit: false
        }
    }
});
// -- Controller ---------------------------------------- //
const ApiController_ApiController = {
    state: ApiController_state,
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(ApiController_state, key, callback);
    },
    _getSdkProperties() {
        const { projectId, sdkType, sdkVersion } = controllers_OptionsController_OptionsController.state;
        return {
            projectId,
            st: sdkType || 'appkit',
            sv: sdkVersion || 'html-wagmi-4.2.2'
        };
    },
    _filterOutExtensions(wallets) {
        if (controllers_OptionsController_OptionsController.state.isUniversalProvider) {
            return wallets.filter(w => Boolean(w.mobile_link || w.desktop_link || w.webapp_link));
        }
        return wallets;
    },
    async _fetchWalletImage(imageId) {
        const imageUrl = `${ApiController_api.baseUrl}/getWalletImage/${imageId}`;
        const blob = await ApiController_api.getBlob({ path: imageUrl, params: ApiController_ApiController._getSdkProperties() });
        AssetController_AssetController.setWalletImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchNetworkImage(imageId) {
        const imageUrl = `${ApiController_api.baseUrl}/public/getAssetImage/${imageId}`;
        const blob = await ApiController_api.getBlob({ path: imageUrl, params: ApiController_ApiController._getSdkProperties() });
        AssetController_AssetController.setNetworkImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchConnectorImage(imageId) {
        const imageUrl = `${ApiController_api.baseUrl}/public/getAssetImage/${imageId}`;
        const blob = await ApiController_api.getBlob({ path: imageUrl, params: ApiController_ApiController._getSdkProperties() });
        AssetController_AssetController.setConnectorImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchCurrencyImage(countryCode) {
        const imageUrl = `${ApiController_api.baseUrl}/public/getCurrencyImage/${countryCode}`;
        const blob = await ApiController_api.getBlob({ path: imageUrl, params: ApiController_ApiController._getSdkProperties() });
        AssetController_AssetController.setCurrencyImage(countryCode, URL.createObjectURL(blob));
    },
    async _fetchTokenImage(symbol) {
        const imageUrl = `${ApiController_api.baseUrl}/public/getTokenImage/${symbol}`;
        const blob = await ApiController_api.getBlob({ path: imageUrl, params: ApiController_ApiController._getSdkProperties() });
        AssetController_AssetController.setTokenImage(symbol, URL.createObjectURL(blob));
    },
    _filterWalletsByPlatform(wallets) {
        const walletsLength = wallets.length;
        const filteredWallets = utils_CoreHelperUtil_CoreHelperUtil.isMobile()
            ? wallets?.filter(w => {
                if (w.mobile_link || w.webapp_link) {
                    return true;
                }
                const customDeeplinkWalletIds = Object.values(CUSTOM_DEEPLINK_WALLETS).map(wallet => wallet.id);
                return customDeeplinkWalletIds.includes(w.id);
            })
            : wallets;
        const mobileFilteredOutWalletsLength = walletsLength - filteredWallets.length;
        return { filteredWallets, mobileFilteredOutWalletsLength };
    },
    async fetchProjectConfig() {
        const response = await ApiController_api.get({
            path: '/appkit/v1/config',
            params: ApiController_ApiController._getSdkProperties()
        });
        return response.features;
    },
    async fetchUsage() {
        try {
            const response = await ApiController_api.get({
                path: '/appkit/v1/project-limits',
                params: ApiController_ApiController._getSdkProperties()
            });
            const { tier, isAboveMauLimit, isAboveRpcLimit } = response.planLimits;
            const isStarterPlan = tier === 'starter';
            const isAboveUsageLimit = isAboveMauLimit || isAboveRpcLimit;
            ApiController_ApiController.state.plan = {
                tier,
                hasExceededUsageLimit: isStarterPlan && isAboveUsageLimit,
                limits: {
                    isAboveRpcLimit,
                    isAboveMauLimit
                }
            };
        }
        catch (e) {
            console.warn('Failed to fetch usage', e);
        }
    },
    async fetchAllowedOrigins() {
        try {
            const { allowedOrigins } = await ApiController_api.get({
                path: '/projects/v1/origins',
                params: ApiController_ApiController._getSdkProperties()
            });
            return allowedOrigins;
        }
        catch (error) {
            if (error instanceof Error && error.cause instanceof Response) {
                const status = error.cause.status;
                if (status === esm_src_utils_ConstantsUtil_ConstantsUtil.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) {
                    throw new Error('RATE_LIMITED', { cause: error });
                }
                if (status >= esm_src_utils_ConstantsUtil_ConstantsUtil.HTTP_STATUS_CODES.SERVER_ERROR && status < 600) {
                    throw new Error('SERVER_ERROR', { cause: error });
                }
                return [];
            }
            return [];
        }
    },
    async fetchNetworkImages() {
        const requestedCaipNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
        const ids = requestedCaipNetworks
            ?.map(({ assets }) => assets?.imageId)
            .filter(Boolean)
            .filter(imageId => !AssetUtil_AssetUtil.getNetworkImageById(imageId));
        if (ids) {
            await Promise.allSettled(ids.map(id => ApiController_ApiController._fetchNetworkImage(id)));
        }
    },
    async fetchConnectorImages() {
        const { connectors } = ConnectorController_ConnectorController.state;
        const ids = connectors.map(({ imageId }) => imageId).filter(Boolean);
        await Promise.allSettled(ids.map(id => ApiController_ApiController._fetchConnectorImage(id)));
    },
    async fetchCurrencyImages(currencies = []) {
        await Promise.allSettled(currencies.map(currency => ApiController_ApiController._fetchCurrencyImage(currency)));
    },
    async fetchTokenImages(tokens = []) {
        await Promise.allSettled(tokens.map(token => ApiController_ApiController._fetchTokenImage(token)));
    },
    async fetchWallets(params) {
        const exclude = params.exclude ?? [];
        const sdkProperties = ApiController_ApiController._getSdkProperties();
        if (sdkProperties.sv.startsWith('html-core-')) {
            exclude.push(...Object.values(CUSTOM_DEEPLINK_WALLETS).map(w => w.id));
        }
        const wallets = await ApiController_api.get({
            path: '/getWallets',
            params: {
                ...ApiController_ApiController._getSdkProperties(),
                ...params,
                page: String(params.page),
                entries: String(params.entries),
                include: params.include?.join(','),
                exclude: exclude.join(',')
            }
        });
        const { filteredWallets, mobileFilteredOutWalletsLength } = ApiController_ApiController._filterWalletsByPlatform(wallets?.data);
        return {
            data: filteredWallets || [],
            // Keep original count for display on main page
            count: wallets?.count,
            mobileFilteredOutWalletsLength
        };
    },
    async prefetchWalletRanks() {
        const connectors = ConnectorController_ConnectorController.state.connectors;
        if (!connectors?.length) {
            return;
        }
        const params = {
            page: 1,
            entries: 20,
            badge: 'certified'
        };
        params.names = connectors.map(c => c.name).join(',');
        if (ChainController_ChainController.state.activeChain === esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM) {
            const rdnsCandidates = [
                ...connectors.flatMap(c => c.connectors?.map(sc => sc.info?.rdns) || []),
                ...connectors.map(c => c.info?.rdns)
            ].filter((val) => typeof val === 'string' && val.length > 0);
            if (rdnsCandidates.length) {
                params.rdns = rdnsCandidates.join(',');
            }
        }
        const { data } = await ApiController_ApiController.fetchWallets(params);
        ApiController_state.explorerWallets = data;
        ConnectorController_ConnectorController.extendConnectorsWithExplorerWallets(data);
        const caipNetworkIds = ChainController_ChainController.getRequestedCaipNetworkIds().join(',');
        ApiController_state.explorerFilteredWallets = data.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
    },
    async fetchFeaturedWallets() {
        const { featuredWalletIds } = controllers_OptionsController_OptionsController.state;
        if (featuredWalletIds?.length) {
            const params = {
                ...ApiController_ApiController._getSdkProperties(),
                page: 1,
                entries: featuredWalletIds?.length ?? recommendedEntries,
                include: featuredWalletIds
            };
            const { data } = await ApiController_ApiController.fetchWallets(params);
            const sortedData = [...data].sort((a, b) => featuredWalletIds.indexOf(a.id) - featuredWalletIds.indexOf(b.id));
            const images = sortedData.map(d => d.image_id).filter(Boolean);
            await Promise.allSettled(images.map(id => ApiController_ApiController._fetchWalletImage(id)));
            ApiController_state.featured = sortedData;
            ApiController_state.allFeatured = sortedData;
        }
    },
    async fetchRecommendedWallets() {
        try {
            ApiController_state.isFetchingRecommendedWallets = true;
            const { includeWalletIds, excludeWalletIds, featuredWalletIds } = controllers_OptionsController_OptionsController.state;
            const exclude = [...(excludeWalletIds ?? []), ...(featuredWalletIds ?? [])].filter(Boolean);
            const chains = ChainController_ChainController.getRequestedCaipNetworkIds().join(',');
            const params = {
                page: 1,
                entries: recommendedEntries,
                include: includeWalletIds,
                exclude,
                chains
            };
            const { data, count } = await ApiController_ApiController.fetchWallets(params);
            const recent = StorageUtil_StorageUtil.getRecentWallets();
            const recommendedImages = data.map(d => d.image_id).filter(Boolean);
            const recentImages = recent.map(r => r.image_id).filter(Boolean);
            await Promise.allSettled([...recommendedImages, ...recentImages].map(id => ApiController_ApiController._fetchWalletImage(id)));
            ApiController_state.recommended = data;
            ApiController_state.allRecommended = data;
            ApiController_state.count = count ?? 0;
        }
        catch {
            // Catch silently
        }
        finally {
            ApiController_state.isFetchingRecommendedWallets = false;
        }
    },
    async fetchWalletsByPage({ page }) {
        const { includeWalletIds, excludeWalletIds, featuredWalletIds } = controllers_OptionsController_OptionsController.state;
        const chains = ChainController_ChainController.getRequestedCaipNetworkIds().join(',');
        const exclude = [
            ...ApiController_state.recommended.map(({ id }) => id),
            ...(excludeWalletIds ?? []),
            ...(featuredWalletIds ?? [])
        ].filter(Boolean);
        const params = {
            page,
            entries,
            include: includeWalletIds,
            exclude,
            chains
        };
        const { data, count, mobileFilteredOutWalletsLength } = await ApiController_ApiController.fetchWallets(params);
        ApiController_state.mobileFilteredOutWalletsLength =
            mobileFilteredOutWalletsLength + (ApiController_state.mobileFilteredOutWalletsLength ?? 0);
        const images = data
            .slice(0, imageCountToFetch)
            .map(w => w.image_id)
            .filter(Boolean);
        await Promise.allSettled(images.map(id => ApiController_ApiController._fetchWalletImage(id)));
        ApiController_state.wallets = utils_CoreHelperUtil_CoreHelperUtil.uniqueBy([...ApiController_state.wallets, ...ApiController_ApiController._filterOutExtensions(data)], 'id').filter(w => w.chains?.some(chain => chains.includes(chain)));
        ApiController_state.count = count > ApiController_state.count ? count : ApiController_state.count;
        ApiController_state.page = page;
    },
    async initializeExcludedWallets({ ids }) {
        const params = {
            page: 1,
            entries: ids.length,
            include: ids
        };
        const { data } = await ApiController_ApiController.fetchWallets(params);
        if (data) {
            data.forEach(wallet => {
                ApiController_state.excludedWallets.push({ rdns: wallet.rdns, name: wallet.name });
            });
        }
    },
    async searchWallet({ search, badge }) {
        const { includeWalletIds, excludeWalletIds } = controllers_OptionsController_OptionsController.state;
        const chains = ChainController_ChainController.getRequestedCaipNetworkIds().join(',');
        ApiController_state.search = [];
        const params = {
            page: 1,
            entries: 100,
            search: search?.trim(),
            badge_type: badge,
            include: includeWalletIds,
            exclude: excludeWalletIds,
            chains
        };
        const { data } = await ApiController_ApiController.fetchWallets(params);
        EventsController_EventsController.sendEvent({
            type: 'track',
            event: 'SEARCH_WALLET',
            properties: { badge: badge ?? '', search: search ?? '' }
        });
        const images = data.map(w => w.image_id).filter(Boolean);
        await Promise.allSettled([
            ...images.map(id => ApiController_ApiController._fetchWalletImage(id)),
            utils_CoreHelperUtil_CoreHelperUtil.wait(300)
        ]);
        ApiController_state.search = ApiController_ApiController._filterOutExtensions(data);
    },
    initPromise(key, fetchFn) {
        const existingPromise = ApiController_state.promises[key];
        if (existingPromise) {
            return existingPromise;
        }
        return (ApiController_state.promises[key] = fetchFn());
    },
    prefetch({ fetchConnectorImages = true, fetchFeaturedWallets = true, fetchRecommendedWallets = true, fetchNetworkImages = true, fetchWalletRanks = true } = {}) {
        const promises = [
            fetchConnectorImages &&
                ApiController_ApiController.initPromise('connectorImages', ApiController_ApiController.fetchConnectorImages),
            fetchFeaturedWallets &&
                ApiController_ApiController.initPromise('featuredWallets', ApiController_ApiController.fetchFeaturedWallets),
            fetchRecommendedWallets &&
                ApiController_ApiController.initPromise('recommendedWallets', ApiController_ApiController.fetchRecommendedWallets),
            fetchNetworkImages &&
                ApiController_ApiController.initPromise('networkImages', ApiController_ApiController.fetchNetworkImages),
            fetchWalletRanks &&
                ApiController_ApiController.initPromise('walletRanks', ApiController_ApiController.prefetchWalletRanks)
        ].filter(Boolean);
        return Promise.allSettled(promises);
    },
    prefetchAnalyticsConfig() {
        if (controllers_OptionsController_OptionsController.state.features?.analytics) {
            ApiController_ApiController.fetchAnalyticsConfig();
        }
    },
    async fetchAnalyticsConfig() {
        try {
            const { isAnalyticsEnabled } = await ApiController_api.get({
                path: '/getAnalyticsConfig',
                params: ApiController_ApiController._getSdkProperties()
            });
            controllers_OptionsController_OptionsController.setFeatures({ analytics: isAnalyticsEnabled });
        }
        catch (error) {
            controllers_OptionsController_OptionsController.setFeatures({ analytics: false });
        }
    },
    filterByNamespaces(namespaces) {
        if (!namespaces?.length) {
            ApiController_state.featured = ApiController_state.allFeatured;
            ApiController_state.recommended = ApiController_state.allRecommended;
            return;
        }
        const caipNetworkIds = ChainController_ChainController.getRequestedCaipNetworkIds().join(',');
        ApiController_state.featured = ApiController_state.allFeatured.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
        ApiController_state.recommended = ApiController_state.allRecommended.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
        ApiController_state.filteredWallets = ApiController_state.wallets.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
    },
    clearFilterByNamespaces() {
        ApiController_state.filteredWallets = [];
    },
    setFilterByNamespace(namespace) {
        if (!namespace) {
            ApiController_state.featured = ApiController_state.allFeatured;
            ApiController_state.recommended = ApiController_state.allRecommended;
            return;
        }
        const caipNetworkIds = ChainController_ChainController.getRequestedCaipNetworkIds().join(',');
        ApiController_state.featured = ApiController_state.allFeatured.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
        ApiController_state.recommended = ApiController_state.allRecommended.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
        ApiController_state.filteredWallets = ApiController_state.wallets.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
    }
};
//# sourceMappingURL=ApiController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js








// -- Constants --------------------------------------------- //
const RESTRICTED_VIEWS_BASED_ON_USAGE = [
    'ConnectingExternal',
    'ConnectingMultiChain',
    'ConnectingSocial',
    'ConnectingFarcaster'
];
// -- State --------------------------------------------- //
const RouterController_state = (0,vanilla/* proxy */.BX)({
    view: 'Connect',
    history: ['Connect'],
    transactionStack: []
});
// -- Controller ---------------------------------------- //
const RouterController_controller = {
    state: RouterController_state,
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(RouterController_state, key, callback);
    },
    pushTransactionStack(action) {
        RouterController_state.transactionStack.push(action);
    },
    popTransactionStack(status) {
        const action = RouterController_state.transactionStack.pop();
        if (!action) {
            return;
        }
        const { onSuccess, onError, onCancel } = action;
        switch (status) {
            case 'success':
                onSuccess?.();
                break;
            case 'error':
                onError?.();
                RouterController_RouterController.goBack();
                break;
            case 'cancel':
                onCancel?.();
                RouterController_RouterController.goBack();
                break;
            default:
        }
    },
    push(view, data) {
        let finalView = view;
        let finalData = data;
        if (ApiController_ApiController.state.plan.hasExceededUsageLimit &&
            RESTRICTED_VIEWS_BASED_ON_USAGE.includes(view)) {
            finalView = 'UsageExceeded';
            finalData = undefined;
        }
        if (finalView !== RouterController_state.view) {
            RouterController_state.view = finalView;
            RouterController_state.history.push(finalView);
            RouterController_state.data = finalData;
        }
    },
    reset(view, data) {
        RouterController_state.view = view;
        RouterController_state.history = [view];
        RouterController_state.data = data;
    },
    replace(view, data) {
        const lastView = RouterController_state.history.at(-1);
        const isSameView = lastView === view;
        if (!isSameView) {
            RouterController_state.view = view;
            RouterController_state.history[RouterController_state.history.length - 1] = view;
            RouterController_state.data = data;
        }
    },
    goBack() {
        const isConnected = ChainController_ChainController.state.activeCaipAddress;
        const isFarcasterView = RouterController_RouterController.state.view === 'ConnectingFarcaster';
        const shouldReload = !isConnected && isFarcasterView;
        if (RouterController_state.history.length > 1) {
            RouterController_state.history.pop();
            const [last] = RouterController_state.history.slice(-1);
            if (last) {
                const isConnectView = last === 'Connect';
                if (isConnected && isConnectView) {
                    RouterController_state.view = 'Account';
                }
                else {
                    RouterController_state.view = last;
                }
            }
        }
        else {
            ModalController_ModalController.close();
        }
        if (RouterController_state.data?.wallet) {
            RouterController_state.data.wallet = undefined;
        }
        if (RouterController_state.data?.redirectView) {
            RouterController_state.data.redirectView = undefined;
        }
        // Reloading the iframe contentwindow and doing the view animation in the modal causes a small freeze in the transition. Doing these separately fixes that.
        setTimeout(() => {
            if (shouldReload) {
                ChainController_ChainController.setAccountProp('farcasterUrl', undefined, ChainController_ChainController.state.activeChain);
                const authConnector = ConnectorController_ConnectorController.getAuthConnector();
                authConnector?.provider?.reload();
                const optionsState = (0,vanilla/* snapshot */.P9)(controllers_OptionsController_OptionsController.state);
                authConnector?.provider?.syncDappData?.({
                    metadata: optionsState.metadata,
                    sdkVersion: optionsState.sdkVersion,
                    projectId: optionsState.projectId,
                    sdkType: optionsState.sdkType
                });
            }
        }, 100);
    },
    goBackToIndex(historyIndex) {
        if (RouterController_state.history.length > 1) {
            RouterController_state.history = RouterController_state.history.slice(0, historyIndex + 1);
            const [last] = RouterController_state.history.slice(-1);
            if (last) {
                RouterController_state.view = last;
            }
        }
    },
    goBackOrCloseModal() {
        if (RouterController_RouterController.state.history.length > 1) {
            RouterController_RouterController.goBack();
        }
        else {
            ModalController_ModalController.close();
        }
    }
};
// Export the controller wrapped with our error boundary
const RouterController_RouterController = utils_withErrorBoundary_withErrorBoundary(RouterController_controller);
//# sourceMappingURL=RouterController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/NetworkUtil.js




const NetworkUtil_NetworkUtil = {
    /**
     * Function to handle the network switch.
     * This function has variety of conditions to handle the network switch depending on the connectors or namespace's connection states.
     * @param args.network - The network to switch to.
     * @param args.shouldConfirmSwitch - Whether to confirm the switch. If true, the user will be asked to confirm the switch if necessary.
     * @returns void
     */
    onSwitchNetwork({ network, ignoreSwitchConfirmation = false }) {
        const currentNetwork = ChainController_ChainController.state.activeCaipNetwork;
        const currentNamespace = ChainController_ChainController.state.activeChain;
        const routerData = RouterController_RouterController.state.data;
        const isSameNetwork = network.id === currentNetwork?.id;
        if (isSameNetwork) {
            return;
        }
        const isCurrentNamespaceConnected = Boolean(ChainController_ChainController.getAccountData(currentNamespace)?.address);
        const isNextNamespaceConnected = Boolean(ChainController_ChainController.getAccountData(network.chainNamespace)?.address);
        const isDifferentNamespace = network.chainNamespace !== currentNamespace;
        const connectorId = ConnectorController_ConnectorController.getConnectorId(currentNamespace);
        /**
         * If the network is supported by the auth connector, we don't need to show switch active chain view.
         * But there are some cases like switching from Ethereum to Bitcoin where Bitcoin is not supported by the auth connector and users should connect with another connector.
         */
        const isConnectedWithAuth = connectorId === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH;
        const isSupportedForAuthConnector = esm_src_utils_ConstantsUtil_ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(c => c === network.chainNamespace);
        /**
         * 1. If the ignoreSwitchConfirmation is set to true, we should switch to the network,
         * 2. If user connected with auth connector and the next network is supported by the auth connector,
         * we should switch to the network without confirmation screen.
         */
        if (ignoreSwitchConfirmation || (isConnectedWithAuth && isSupportedForAuthConnector)) {
            RouterController_RouterController.push('SwitchNetwork', { ...routerData, network });
        }
        else if (
        /**
         * If user switching to a different namespace and next namespace is not connected, we need to show switch active chain view for confirmation first.
         */
        isCurrentNamespaceConnected &&
            isDifferentNamespace &&
            !isNextNamespaceConnected) {
            RouterController_RouterController.push('SwitchActiveChain', {
                switchToChain: network.chainNamespace,
                navigateTo: 'Connect',
                navigateWithReplace: true,
                network
            });
        }
        else {
            RouterController_RouterController.push('SwitchNetwork', { ...routerData, network });
        }
    }
};
//# sourceMappingURL=NetworkUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/PublicStateController.js


// -- State --------------------------------------------- //
const PublicStateController_state = (0,vanilla/* proxy */.BX)({
    loading: false,
    open: false,
    selectedNetworkId: undefined,
    activeChain: undefined,
    initialized: false,
    connectingWallet: undefined
});
// -- Controller ---------------------------------------- //
const PublicStateController = {
    state: PublicStateController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(PublicStateController_state, () => callback(PublicStateController_state));
    },
    subscribeOpen(callback) {
        return (0,utils/* subscribeKey */.u$)(PublicStateController_state, 'open', callback);
    },
    set(newState) {
        Object.assign(PublicStateController_state, { ...PublicStateController_state, ...newState });
    }
};
//# sourceMappingURL=PublicStateController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js














// -- State --------------------------------------------- //
const ModalController_state = (0,vanilla/* proxy */.BX)({
    loading: false,
    loadingNamespaceMap: new Map(),
    open: false,
    shake: false,
    namespace: undefined
});
// -- Controller ---------------------------------------- //
const ModalController_controller = {
    state: ModalController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(ModalController_state, () => callback(ModalController_state));
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(ModalController_state, key, callback);
    },
    async open(options) {
        const namespace = options?.namespace;
        const currentNamespace = ChainController_ChainController.state.activeChain;
        const isSwitchingNamespace = namespace && namespace !== currentNamespace;
        const caipAddress = ChainController_ChainController.getAccountData(options?.namespace)?.caipAddress;
        const hasNoAdapters = ChainController_ChainController.state.noAdapters;
        if (ConnectionController_ConnectionController.state.wcBasic) {
            // No need to add an await here if we are use basic
            ApiController_ApiController.prefetch({
                fetchNetworkImages: false,
                fetchConnectorImages: false,
                fetchWalletRanks: false
            });
        }
        else {
            await ApiController_ApiController.prefetch();
        }
        ConnectorController_ConnectorController.setFilterByNamespace(options?.namespace);
        ModalController_ModalController.setLoading(true, namespace);
        if (namespace && isSwitchingNamespace) {
            const namespaceNetwork = ChainController_ChainController.getNetworkData(namespace)?.caipNetwork ||
                ChainController_ChainController.getRequestedCaipNetworks(namespace)[0];
            if (namespaceNetwork) {
                if (hasNoAdapters) {
                    await ChainController_ChainController.switchActiveNetwork(namespaceNetwork);
                    RouterController_RouterController.push('ConnectingWalletConnectBasic');
                }
                else {
                    NetworkUtil_NetworkUtil.onSwitchNetwork({ network: namespaceNetwork, ignoreSwitchConfirmation: true });
                }
            }
        }
        else if (controllers_OptionsController_OptionsController.state.manualWCControl || (hasNoAdapters && !caipAddress)) {
            if (utils_CoreHelperUtil_CoreHelperUtil.isMobile()) {
                RouterController_RouterController.reset('AllWallets');
            }
            else {
                RouterController_RouterController.reset('ConnectingWalletConnectBasic');
            }
        }
        else if (options?.view) {
            RouterController_RouterController.reset(options.view, options.data);
        }
        else if (caipAddress) {
            RouterController_RouterController.reset('Account');
        }
        else {
            RouterController_RouterController.reset('Connect');
        }
        ModalController_state.open = true;
        PublicStateController.set({ open: true });
        EventsController_EventsController.sendEvent({
            type: 'track',
            event: 'MODAL_OPEN',
            properties: { connected: Boolean(caipAddress) }
        });
    },
    close() {
        const isEmbeddedEnabled = controllers_OptionsController_OptionsController.state.enableEmbedded;
        const isConnected = Boolean(ChainController_ChainController.state.activeCaipAddress);
        // Only send the event if the modal is open and is about to be closed
        if (ModalController_state.open) {
            EventsController_EventsController.sendEvent({
                type: 'track',
                event: 'MODAL_CLOSE',
                properties: { connected: isConnected }
            });
        }
        ModalController_state.open = false;
        RouterController_RouterController.reset('Connect');
        ModalController_ModalController.clearLoading();
        if (isEmbeddedEnabled) {
            if (isConnected) {
                RouterController_RouterController.replace('Account');
            }
            else {
                RouterController_RouterController.push('Connect');
            }
        }
        else {
            PublicStateController.set({ open: false });
        }
        ConnectionController_ConnectionController.resetUri();
    },
    setLoading(loading, namespace) {
        if (namespace) {
            ModalController_state.loadingNamespaceMap.set(namespace, loading);
        }
        ModalController_state.loading = loading;
        PublicStateController.set({ loading });
    },
    clearLoading() {
        ModalController_state.loadingNamespaceMap.clear();
        ModalController_state.loading = false;
        PublicStateController.set({ loading: false });
    },
    shake() {
        if (ModalController_state.shake) {
            return;
        }
        ModalController_state.shake = true;
        setTimeout(() => {
            ModalController_state.shake = false;
        }, 500);
    }
};
// Export the controller wrapped with our error boundary
const ModalController_ModalController = utils_withErrorBoundary_withErrorBoundary(ModalController_controller);
//# sourceMappingURL=ModalController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectorControllerUtil.js
/* eslint-disable max-depth */













// -- Constants ------------------------------------------ //
const UPDATE_EMAIL_INTERVAL_MS = 1_000;
const ConnectorControllerUtil = {
    checkNamespaceConnectorId(namespace, connectorId) {
        return ConnectorController_ConnectorController.getConnectorId(namespace) === connectorId;
    },
    isSocialProvider(socialProvider) {
        return dist_esm_src_utils_ConstantsUtil_ConstantsUtil.DEFAULT_REMOTE_FEATURES.socials.includes(socialProvider);
    },
    connectWalletConnect({ walletConnect, connector, closeModalOnConnect = true, redirectViewOnModalClose = 'Connect', onOpen, onConnect }) {
        return new Promise((resolve, reject) => {
            if (walletConnect) {
                ConnectorController_ConnectorController.setActiveConnector(connector);
            }
            onOpen?.(utils_CoreHelperUtil_CoreHelperUtil.isMobile() && walletConnect);
            if (redirectViewOnModalClose) {
                const unsubscribeModalController = ModalController_ModalController.subscribeKey('open', val => {
                    if (!val) {
                        if (RouterController_RouterController.state.view !== redirectViewOnModalClose) {
                            RouterController_RouterController.replace(redirectViewOnModalClose);
                        }
                        unsubscribeModalController();
                        reject(new Error('Modal closed'));
                    }
                });
            }
            const unsubscribeChainController = ChainController_ChainController.subscribeKey('activeCaipAddress', val => {
                if (val) {
                    onConnect?.();
                    if (closeModalOnConnect) {
                        ModalController_ModalController.close();
                    }
                    unsubscribeChainController();
                    resolve(ParseUtil.parseCaipAddress(val));
                }
            });
        });
    },
    connectExternal(connector) {
        return new Promise((resolve, reject) => {
            const unsubscribeChainController = ChainController_ChainController.subscribeKey('activeCaipAddress', val => {
                if (val) {
                    ModalController_ModalController.close();
                    unsubscribeChainController();
                    resolve(ParseUtil.parseCaipAddress(val));
                }
            });
            ConnectionController_ConnectionController.connectExternal(connector, connector.chain).catch(() => {
                unsubscribeChainController();
                reject(new Error('Connection rejected'));
            });
        });
    },
    connectSocial({ social: socialProvider, namespace, closeModalOnConnect = true, onOpenFarcaster, onConnect }) {
        let socialWindow = undefined;
        let isConnectingSocial = false;
        let popupWindow = null;
        const namespaceToUse = namespace || ChainController_ChainController.state.activeChain;
        const unsubscribeChainController = ChainController_ChainController.subscribeKey('activeCaipAddress', val => {
            if (val) {
                if (closeModalOnConnect) {
                    ModalController_ModalController.close();
                }
                unsubscribeChainController();
            }
        });
        return new Promise((resolve, reject) => {
            async function handleSocialConnection(event) {
                if (event.data?.resultUri) {
                    if (event.origin === esm_src_utils_ConstantsUtil_ConstantsUtil.SECURE_SITE_SDK_ORIGIN) {
                        window.removeEventListener('message', handleSocialConnection, false);
                        try {
                            const authConnector = ConnectorController_ConnectorController.getAuthConnector(namespaceToUse);
                            if (authConnector && !isConnectingSocial) {
                                if (socialWindow) {
                                    socialWindow.close();
                                }
                                isConnectingSocial = true;
                                const uri = event.data.resultUri;
                                EventsController_EventsController.sendEvent({
                                    type: 'track',
                                    event: 'SOCIAL_LOGIN_REQUEST_USER_DATA',
                                    properties: { provider: socialProvider }
                                });
                                StorageUtil_StorageUtil.setConnectedSocialProvider(socialProvider);
                                await ConnectionController_ConnectionController.connectExternal({
                                    id: authConnector.id,
                                    type: authConnector.type,
                                    socialUri: uri
                                }, authConnector.chain);
                                const caipAddress = ChainController_ChainController.state.activeCaipAddress;
                                if (!caipAddress) {
                                    reject(new Error('Failed to connect'));
                                    return;
                                }
                                resolve(ParseUtil.parseCaipAddress(caipAddress));
                                EventsController_EventsController.sendEvent({
                                    type: 'track',
                                    event: 'SOCIAL_LOGIN_SUCCESS',
                                    properties: { provider: socialProvider }
                                });
                            }
                        }
                        catch (err) {
                            EventsController_EventsController.sendEvent({
                                type: 'track',
                                event: 'SOCIAL_LOGIN_ERROR',
                                properties: { provider: socialProvider, message: utils_CoreHelperUtil_CoreHelperUtil.parseError(err) }
                            });
                            reject(new Error('Failed to connect'));
                        }
                    }
                    else {
                        EventsController_EventsController.sendEvent({
                            type: 'track',
                            event: 'SOCIAL_LOGIN_ERROR',
                            properties: { provider: socialProvider, message: 'Untrusted Origin' }
                        });
                    }
                }
            }
            async function connectSocial() {
                EventsController_EventsController.sendEvent({
                    type: 'track',
                    event: 'SOCIAL_LOGIN_STARTED',
                    properties: { provider: socialProvider }
                });
                if (socialProvider === 'farcaster') {
                    onOpenFarcaster?.();
                    const unsubscribeModalController = ModalController_ModalController.subscribeKey('open', val => {
                        if (!val && socialProvider === 'farcaster') {
                            reject(new Error('Popup closed'));
                            onConnect?.();
                            unsubscribeModalController();
                        }
                    });
                    const authConnector = ConnectorController_ConnectorController.getAuthConnector();
                    if (authConnector) {
                        const _accountData = ChainController_ChainController.getAccountData(namespaceToUse);
                        if (!_accountData?.farcasterUrl) {
                            try {
                                const { url } = await authConnector.provider.getFarcasterUri();
                                ChainController_ChainController.setAccountProp('farcasterUrl', url, namespaceToUse);
                            }
                            catch {
                                reject(new Error('Failed to connect to farcaster'));
                            }
                        }
                    }
                }
                else {
                    const authConnector = ConnectorController_ConnectorController.getAuthConnector();
                    popupWindow = utils_CoreHelperUtil_CoreHelperUtil.returnOpenHref(`${esm_src_utils_ConstantsUtil_ConstantsUtil.SECURE_SITE_SDK_ORIGIN}/loading`, 'popupWindow', 'width=600,height=800,scrollbars=yes');
                    try {
                        if (authConnector) {
                            const { uri } = await authConnector.provider.getSocialRedirectUri({
                                provider: socialProvider
                            });
                            if (popupWindow && uri) {
                                popupWindow.location.href = uri;
                                socialWindow = popupWindow;
                                const interval = setInterval(() => {
                                    if (socialWindow?.closed && !isConnectingSocial) {
                                        reject(new Error('Popup closed'));
                                        clearInterval(interval);
                                    }
                                }, 1000);
                                window.addEventListener('message', handleSocialConnection, false);
                            }
                            else {
                                popupWindow?.close();
                                reject(new Error('Failed to initiate social connection'));
                            }
                        }
                    }
                    catch {
                        reject(new Error('Failed to initiate social connection'));
                        popupWindow?.close();
                    }
                }
            }
            connectSocial();
        });
    },
    connectEmail({ closeModalOnConnect = true, redirectViewOnModalClose = 'Connect', onOpen, onConnect }) {
        return new Promise((resolve, reject) => {
            onOpen?.();
            if (redirectViewOnModalClose) {
                const unsubscribeModalController = ModalController_ModalController.subscribeKey('open', val => {
                    if (!val) {
                        if (RouterController_RouterController.state.view !== redirectViewOnModalClose) {
                            RouterController_RouterController.replace(redirectViewOnModalClose);
                        }
                        unsubscribeModalController();
                        reject(new Error('Modal closed'));
                    }
                });
            }
            const unsubscribeChainController = ChainController_ChainController.subscribeKey('activeCaipAddress', val => {
                if (val) {
                    onConnect?.();
                    if (closeModalOnConnect) {
                        ModalController_ModalController.close();
                    }
                    unsubscribeChainController();
                    resolve(ParseUtil.parseCaipAddress(val));
                }
            });
        });
    },
    async updateEmail() {
        const connectorId = StorageUtil_StorageUtil.getConnectedConnectorId(ChainController_ChainController.state.activeChain);
        const authConnector = ConnectorController_ConnectorController.getAuthConnector();
        if (!authConnector) {
            throw new Error('No auth connector found');
        }
        if (connectorId !== esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH) {
            throw new Error('Not connected to email or social');
        }
        const initialEmail = authConnector.provider.getEmail() ?? '';
        await ModalController_ModalController.open({
            view: 'UpdateEmailWallet',
            data: {
                email: initialEmail,
                redirectView: undefined
            }
        });
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                const newEmail = authConnector.provider.getEmail() ?? '';
                if (newEmail !== initialEmail) {
                    ModalController_ModalController.close();
                    clearInterval(interval);
                    unsubscribeModalController();
                    resolve({ email: newEmail });
                }
            }, UPDATE_EMAIL_INTERVAL_MS);
            const unsubscribeModalController = ModalController_ModalController.subscribeKey('open', val => {
                if (!val) {
                    if (RouterController_RouterController.state.view !== 'Connect') {
                        RouterController_RouterController.push('Connect');
                    }
                    clearInterval(interval);
                    unsubscribeModalController();
                    reject(new Error('Modal closed'));
                }
            });
        });
    },
    canSwitchToSmartAccount(namespace) {
        const isSmartAccountEnabled = ChainController_ChainController.checkIfSmartAccountEnabled();
        return (isSmartAccountEnabled &&
            getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA);
    }
};
//# sourceMappingURL=ConnectorControllerUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TransactionsController.js









// -- State --------------------------------------------- //
const TransactionsController_state = (0,vanilla/* proxy */.BX)({
    transactions: [],
    transactionsByYear: {},
    lastNetworkInView: undefined,
    loading: false,
    empty: false,
    next: undefined
});
// -- Controller ---------------------------------------- //
const TransactionsController_controller = {
    state: TransactionsController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(TransactionsController_state, () => callback(TransactionsController_state));
    },
    setLastNetworkInView(lastNetworkInView) {
        TransactionsController_state.lastNetworkInView = lastNetworkInView;
    },
    async fetchTransactions(accountAddress) {
        if (!accountAddress) {
            throw new Error("Transactions can't be fetched without an accountAddress");
        }
        TransactionsController_state.loading = true;
        try {
            const response = await BlockchainApiController_BlockchainApiController.fetchTransactions({
                account: accountAddress,
                cursor: TransactionsController_state.next,
                chainId: ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId
            });
            const nonSpamTransactions = TransactionsController.filterSpamTransactions(response.data);
            const sameChainTransactions = TransactionsController.filterByConnectedChain(nonSpamTransactions);
            const filteredTransactions = [...TransactionsController_state.transactions, ...sameChainTransactions];
            TransactionsController_state.loading = false;
            TransactionsController_state.transactions = filteredTransactions;
            TransactionsController_state.transactionsByYear = TransactionsController.groupTransactionsByYearAndMonth(TransactionsController_state.transactionsByYear, sameChainTransactions);
            TransactionsController_state.empty = filteredTransactions.length === 0;
            TransactionsController_state.next = response.next ? response.next : undefined;
        }
        catch (error) {
            const activeChainNamespace = ChainController_ChainController.state.activeChain;
            EventsController_EventsController.sendEvent({
                type: 'track',
                event: 'ERROR_FETCH_TRANSACTIONS',
                properties: {
                    address: accountAddress,
                    projectId: controllers_OptionsController_OptionsController.state.projectId,
                    cursor: TransactionsController_state.next,
                    isSmartAccount: getPreferredAccountType(activeChainNamespace) ===
                        W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
                }
            });
            SnackController_SnackController.showError('Failed to fetch transactions');
            TransactionsController_state.loading = false;
            TransactionsController_state.empty = true;
            TransactionsController_state.next = undefined;
        }
    },
    groupTransactionsByYearAndMonth(transactionsMap = {}, transactions = []) {
        const grouped = transactionsMap;
        transactions.forEach(transaction => {
            const year = new Date(transaction.metadata.minedAt).getFullYear();
            const month = new Date(transaction.metadata.minedAt).getMonth();
            const yearTransactions = grouped[year] ?? {};
            const monthTransactions = yearTransactions[month] ?? [];
            // If there's a transaction with the same id, remove the old one
            const newMonthTransactions = monthTransactions.filter(tx => tx.id !== transaction.id);
            grouped[year] = {
                ...yearTransactions,
                [month]: [...newMonthTransactions, transaction].sort((a, b) => new Date(b.metadata.minedAt).getTime() - new Date(a.metadata.minedAt).getTime())
            };
        });
        return grouped;
    },
    filterSpamTransactions(transactions) {
        return transactions.filter(transaction => {
            const isAllSpam = transaction.transfers?.every(transfer => transfer.nft_info?.flags.is_spam === true);
            return !isAllSpam;
        });
    },
    filterByConnectedChain(transactions) {
        const chainId = ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId;
        const filteredTransactions = transactions.filter(transaction => transaction.metadata.chain === chainId);
        return filteredTransactions;
    },
    clearCursor() {
        TransactionsController_state.next = undefined;
    },
    resetTransactions() {
        TransactionsController_state.transactions = [];
        TransactionsController_state.transactionsByYear = {};
        TransactionsController_state.lastNetworkInView = undefined;
        TransactionsController_state.loading = false;
        TransactionsController_state.empty = false;
        TransactionsController_state.next = undefined;
    }
};
// Export the controller wrapped with our error boundary
const TransactionsController = utils_withErrorBoundary_withErrorBoundary(TransactionsController_controller, 'API_ERROR');
//# sourceMappingURL=TransactionsController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js
/* eslint-disable no-console */
















// -- State --------------------------------------------- //
const ConnectionController_state = (0,vanilla/* proxy */.BX)({
    connections: new Map(),
    recentConnections: new Map(),
    isSwitchingConnection: false,
    wcError: false,
    wcFetchingUri: false,
    buffering: false,
    status: 'disconnected'
});
// eslint-disable-next-line init-declarations
let wcConnectionPromise;
// -- Controller ---------------------------------------- //
const ConnectionController_controller = {
    state: ConnectionController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(ConnectionController_state, () => callback(ConnectionController_state));
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(ConnectionController_state, key, callback);
    },
    _getClient() {
        return ConnectionController_state._client;
    },
    setClient(client) {
        ConnectionController_state._client = (0,vanilla/* ref */.KR)(client);
    },
    initialize(adapters) {
        const namespaces = adapters
            .filter((a) => Boolean(a.namespace))
            .map(a => a.namespace);
        ConnectionController_ConnectionController.syncStorageConnections(namespaces);
    },
    syncStorageConnections(namespaces) {
        const storageConnections = StorageUtil_StorageUtil.getConnections();
        const namespacesToSync = namespaces ?? Array.from(ChainController_ChainController.state.chains.keys());
        for (const namespace of namespacesToSync) {
            const storageConnectionsByNamespace = storageConnections[namespace] ?? [];
            const recentConnectionsMap = new Map(ConnectionController_state.recentConnections);
            recentConnectionsMap.set(namespace, storageConnectionsByNamespace);
            ConnectionController_state.recentConnections = recentConnectionsMap;
        }
    },
    getConnections(namespace) {
        return namespace ? (ConnectionController_state.connections.get(namespace) ?? []) : [];
    },
    hasAnyConnection(connectorId) {
        const connections = ConnectionController_ConnectionController.state.connections;
        return Array.from(connections.values())
            .flatMap(_connections => _connections)
            .some(({ connectorId: _connectorId }) => _connectorId === connectorId);
    },
    async connectWalletConnect({ cache = 'auto' } = {}) {
        ConnectionController_state.wcFetchingUri = true;
        const isInTelegramOrSafariIos = utils_CoreHelperUtil_CoreHelperUtil.isTelegram() || (utils_CoreHelperUtil_CoreHelperUtil.isSafari() && utils_CoreHelperUtil_CoreHelperUtil.isIos());
        if (cache === 'always' || (cache === 'auto' && isInTelegramOrSafariIos)) {
            if (wcConnectionPromise) {
                await wcConnectionPromise;
                wcConnectionPromise = undefined;
                return;
            }
            if (!utils_CoreHelperUtil_CoreHelperUtil.isPairingExpired(ConnectionController_state?.wcPairingExpiry)) {
                const link = ConnectionController_state.wcUri;
                ConnectionController_state.wcUri = link;
                return;
            }
            wcConnectionPromise = ConnectionController_ConnectionController._getClient()
                ?.connectWalletConnect?.()
                .catch(() => undefined);
            ConnectionController_ConnectionController.state.status = 'connecting';
            await wcConnectionPromise;
            wcConnectionPromise = undefined;
            ConnectionController_state.wcPairingExpiry = undefined;
            ConnectionController_ConnectionController.state.status = 'connected';
        }
        else {
            await ConnectionController_ConnectionController._getClient()?.connectWalletConnect?.();
        }
    },
    async connectExternal(options, chain, setChain = true) {
        const connectData = await ConnectionController_ConnectionController._getClient()?.connectExternal?.(options);
        if (setChain) {
            ChainController_ChainController.setActiveNamespace(chain);
        }
        const connector = ConnectorController_ConnectorController.state.allConnectors.find(c => c.id === options?.id);
        const connectSuccessEventMethod = options.type === 'AUTH' ? 'email' : 'browser';
        EventsController_EventsController.sendEvent({
            type: 'track',
            event: 'CONNECT_SUCCESS',
            properties: {
                method: connectSuccessEventMethod,
                name: connector?.name || 'Unknown',
                view: RouterController_RouterController.state.view,
                walletRank: connector?.explorerWallet?.order
            }
        });
        return connectData;
    },
    async reconnectExternal(options) {
        await ConnectionController_ConnectionController._getClient()?.reconnectExternal?.(options);
        const namespace = options.chain || ChainController_ChainController.state.activeChain;
        if (namespace) {
            ConnectorController_ConnectorController.setConnectorId(options.id, namespace);
        }
    },
    async setPreferredAccountType(accountType, namespace) {
        if (!namespace) {
            return;
        }
        ModalController_ModalController.setLoading(true, ChainController_ChainController.state.activeChain);
        const authConnector = ConnectorController_ConnectorController.getAuthConnector();
        if (!authConnector) {
            return;
        }
        ChainController_ChainController.setAccountProp('preferredAccountType', accountType, namespace);
        await authConnector.provider.setPreferredAccount(accountType);
        StorageUtil_StorageUtil.setPreferredAccountTypes(Object.entries(ChainController_ChainController.state.chains).reduce((acc, [key, _]) => {
            const namespace = key;
            const accountType = getPreferredAccountType(namespace);
            if (accountType !== undefined) {
                ;
                acc[namespace] = accountType;
            }
            return acc;
        }, {}));
        await ConnectionController_ConnectionController.reconnectExternal(authConnector);
        ModalController_ModalController.setLoading(false, ChainController_ChainController.state.activeChain);
        EventsController_EventsController.sendEvent({
            type: 'track',
            event: 'SET_PREFERRED_ACCOUNT_TYPE',
            properties: {
                accountType,
                network: ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId || ''
            }
        });
    },
    async signMessage(message) {
        return ConnectionController_ConnectionController._getClient()?.signMessage(message);
    },
    parseUnits(value, decimals) {
        return ConnectionController_ConnectionController._getClient()?.parseUnits(value, decimals);
    },
    formatUnits(value, decimals) {
        return ConnectionController_ConnectionController._getClient()?.formatUnits(value, decimals);
    },
    updateBalance(namespace) {
        return ConnectionController_ConnectionController._getClient()?.updateBalance(namespace);
    },
    async sendTransaction(args) {
        return ConnectionController_ConnectionController._getClient()?.sendTransaction(args);
    },
    async getCapabilities(params) {
        return ConnectionController_ConnectionController._getClient()?.getCapabilities(params);
    },
    async grantPermissions(params) {
        return ConnectionController_ConnectionController._getClient()?.grantPermissions(params);
    },
    async walletGetAssets(params) {
        return ConnectionController_ConnectionController._getClient()?.walletGetAssets(params) ?? {};
    },
    async estimateGas(args) {
        return ConnectionController_ConnectionController._getClient()?.estimateGas(args);
    },
    async writeContract(args) {
        return ConnectionController_ConnectionController._getClient()?.writeContract(args);
    },
    async writeSolanaTransaction(args) {
        return ConnectionController_ConnectionController._getClient()?.writeSolanaTransaction(args);
    },
    async getEnsAddress(value) {
        return ConnectionController_ConnectionController._getClient()?.getEnsAddress(value);
    },
    async getEnsAvatar(value) {
        return ConnectionController_ConnectionController._getClient()?.getEnsAvatar(value);
    },
    checkInstalled(ids) {
        return ConnectionController_ConnectionController._getClient()?.checkInstalled?.(ids) || false;
    },
    resetWcConnection() {
        ConnectionController_state.wcUri = undefined;
        ConnectionController_state.wcPairingExpiry = undefined;
        ConnectionController_state.wcLinking = undefined;
        ConnectionController_state.recentWallet = undefined;
        ConnectionController_state.wcFetchingUri = false;
        ConnectionController_state.status = 'disconnected';
        TransactionsController.resetTransactions();
        StorageUtil_StorageUtil.deleteWalletConnectDeepLink();
        StorageUtil_StorageUtil.deleteRecentWallet();
        PublicStateController.set({ connectingWallet: undefined });
    },
    resetUri() {
        ConnectionController_state.wcUri = undefined;
        ConnectionController_state.wcPairingExpiry = undefined;
        wcConnectionPromise = undefined;
        ConnectionController_state.wcFetchingUri = false;
        PublicStateController.set({ connectingWallet: undefined });
    },
    finalizeWcConnection(address) {
        const { wcLinking, recentWallet } = ConnectionController_ConnectionController.state;
        if (wcLinking) {
            StorageUtil_StorageUtil.setWalletConnectDeepLink(wcLinking);
        }
        if (recentWallet) {
            StorageUtil_StorageUtil.setAppKitRecent(recentWallet);
        }
        if (address) {
            EventsController_EventsController.sendEvent({
                type: 'track',
                event: 'CONNECT_SUCCESS',
                address,
                properties: {
                    method: wcLinking ? 'mobile' : 'qrcode',
                    name: RouterController_RouterController.state.data?.wallet?.name || 'Unknown',
                    view: RouterController_RouterController.state.view,
                    walletRank: recentWallet?.order
                }
            });
        }
    },
    setWcBasic(wcBasic) {
        ConnectionController_state.wcBasic = wcBasic;
    },
    setUri(uri) {
        ConnectionController_state.wcUri = uri;
        ConnectionController_state.wcFetchingUri = false;
        ConnectionController_state.wcPairingExpiry = utils_CoreHelperUtil_CoreHelperUtil.getPairingExpiry();
    },
    setWcLinking(wcLinking) {
        ConnectionController_state.wcLinking = wcLinking;
    },
    setWcError(wcError) {
        ConnectionController_state.wcError = wcError;
        ConnectionController_state.wcFetchingUri = false;
        ConnectionController_state.buffering = false;
    },
    setRecentWallet(wallet) {
        ConnectionController_state.recentWallet = wallet;
    },
    setBuffering(buffering) {
        ConnectionController_state.buffering = buffering;
    },
    setStatus(status) {
        ConnectionController_state.status = status;
    },
    setIsSwitchingConnection(isSwitchingConnection) {
        ConnectionController_state.isSwitchingConnection = isSwitchingConnection;
    },
    async disconnect({ id, namespace, initialDisconnect } = {}) {
        try {
            await ConnectionController_ConnectionController._getClient()?.disconnect({
                id,
                chainNamespace: namespace,
                initialDisconnect
            });
        }
        catch (error) {
            throw new withErrorBoundary_AppKitError('Failed to disconnect', 'INTERNAL_SDK_ERROR', error);
        }
    },
    async disconnectConnector({ id, namespace }) {
        try {
            await ConnectionController_ConnectionController._getClient()?.disconnectConnector({ id, namespace });
        }
        catch (error) {
            throw new withErrorBoundary_AppKitError('Failed to disconnect connector', 'INTERNAL_SDK_ERROR', error);
        }
    },
    setConnections(connections, chainNamespace) {
        const connectionsMap = new Map(ConnectionController_state.connections);
        connectionsMap.set(chainNamespace, connections);
        ConnectionController_state.connections = connectionsMap;
    },
    async handleAuthAccountSwitch({ address, namespace }) {
        const accountData = ChainController_ChainController.getAccountData(namespace);
        const smartAccount = accountData?.user?.accounts?.find(c => c.type === 'smartAccount');
        const accountType = smartAccount &&
            smartAccount.address.toLowerCase() === address.toLowerCase() &&
            ConnectorControllerUtil.canSwitchToSmartAccount(namespace)
            ? 'smartAccount'
            : 'eoa';
        await ConnectionController_ConnectionController.setPreferredAccountType(accountType, namespace);
    },
    async handleActiveConnection({ connection, namespace, address }) {
        const connector = ConnectorController_ConnectorController.getConnectorById(connection.connectorId);
        const isAuthConnector = connection.connectorId === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH;
        if (!connector) {
            throw new Error(`No connector found for connection: ${connection.connectorId}`);
        }
        if (!isAuthConnector) {
            const connectData = await ConnectionController_ConnectionController.connectExternal({
                id: connector.id,
                type: connector.type,
                provider: connector.provider,
                address,
                chain: namespace
            }, namespace);
            return connectData?.address;
        }
        else if (address) {
            await ConnectionController_ConnectionController.handleAuthAccountSwitch({ address, namespace });
        }
        return address;
    },
    async handleDisconnectedConnection({ connection, namespace, address, closeModalOnConnect }) {
        const connector = ConnectorController_ConnectorController.getConnectorById(connection.connectorId);
        const authName = connection.auth?.name?.toLowerCase();
        const isAuthConnector = connection.connectorId === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH;
        const isWCConnector = connection.connectorId === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
        if (!connector) {
            throw new Error(`No connector found for connection: ${connection.connectorId}`);
        }
        let newAddress = undefined;
        if (isAuthConnector) {
            if (authName && ConnectorControllerUtil.isSocialProvider(authName)) {
                const { address: socialAddress } = await ConnectorControllerUtil.connectSocial({
                    social: authName,
                    closeModalOnConnect,
                    onOpenFarcaster() {
                        ModalController_ModalController.open({ view: 'ConnectingFarcaster' });
                    },
                    onConnect() {
                        RouterController_RouterController.replace('ProfileWallets');
                    }
                });
                newAddress = socialAddress;
            }
            else {
                const { address: emailAddress } = await ConnectorControllerUtil.connectEmail({
                    closeModalOnConnect,
                    onOpen() {
                        ModalController_ModalController.open({ view: 'EmailLogin' });
                    },
                    onConnect() {
                        RouterController_RouterController.replace('ProfileWallets');
                    }
                });
                newAddress = emailAddress;
            }
        }
        else if (isWCConnector) {
            const { address: wcAddress } = await ConnectorControllerUtil.connectWalletConnect({
                walletConnect: true,
                connector,
                closeModalOnConnect,
                onOpen(isMobile) {
                    const view = isMobile ? 'AllWallets' : 'ConnectingWalletConnect';
                    if (ModalController_ModalController.state.open) {
                        RouterController_RouterController.push(view);
                    }
                    else {
                        ModalController_ModalController.open({ view });
                    }
                },
                onConnect() {
                    RouterController_RouterController.replace('ProfileWallets');
                }
            });
            newAddress = wcAddress;
        }
        else {
            const connectData = await ConnectionController_ConnectionController.connectExternal({
                id: connector.id,
                type: connector.type,
                provider: connector.provider,
                chain: namespace
            }, namespace);
            if (connectData) {
                newAddress = connectData.address;
            }
        }
        if (isAuthConnector && address) {
            await ConnectionController_ConnectionController.handleAuthAccountSwitch({ address, namespace });
        }
        return newAddress;
    },
    async switchConnection({ connection, address, namespace, closeModalOnConnect, onChange }) {
        let currentAddress = undefined;
        const caipAddress = ChainController_ChainController.getAccountData(namespace)?.caipAddress;
        if (caipAddress) {
            const { address: currentAddressParsed } = ParseUtil.parseCaipAddress(caipAddress);
            currentAddress = currentAddressParsed;
        }
        const status = ConnectionControllerUtil.getConnectionStatus(connection, namespace);
        switch (status) {
            case 'connected':
            case 'active': {
                const newAddress = await ConnectionController_ConnectionController.handleActiveConnection({
                    connection,
                    namespace,
                    address
                });
                if (currentAddress && newAddress) {
                    const hasSwitchedAccount = newAddress.toLowerCase() !== currentAddress.toLowerCase();
                    onChange?.({
                        address: newAddress,
                        namespace,
                        hasSwitchedAccount,
                        hasSwitchedWallet: status === 'active'
                    });
                }
                break;
            }
            case 'disconnected': {
                const newAddress = await ConnectionController_ConnectionController.handleDisconnectedConnection({
                    connection,
                    namespace,
                    address,
                    closeModalOnConnect
                });
                if (newAddress) {
                    onChange?.({
                        address: newAddress,
                        namespace,
                        hasSwitchedAccount: true,
                        hasSwitchedWallet: true
                    });
                }
                break;
            }
            default:
                throw new Error(`Invalid connection status: ${status}`);
        }
    }
};
// Export the controller wrapped with our error boundary
const ConnectionController_ConnectionController = utils_withErrorBoundary_withErrorBoundary(ConnectionController_controller);
//# sourceMappingURL=ConnectionController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ERC7811Util.js

const ERC7811Utils = {
    /**
     * Creates a Balance object from an ERC7811 Asset object
     * @param asset - Asset object to convert
     * @param chainId - Chain ID in CAIP-2 format
     * @returns Balance object
     */
    createBalance(asset, chainId) {
        const metadata = {
            name: (asset.metadata['name'] || ''),
            symbol: (asset.metadata['symbol'] || ''),
            decimals: (asset.metadata['decimals'] || 0),
            value: (asset.metadata['value'] || 0),
            price: (asset.metadata['price'] || 0),
            iconUrl: (asset.metadata['iconUrl'] || '')
        };
        return {
            name: metadata.name,
            symbol: metadata.symbol,
            chainId,
            address: asset.address === 'native'
                ? undefined
                : this.convertAddressToCAIP10Address(asset.address, chainId),
            value: metadata.value,
            price: metadata.price,
            quantity: {
                decimals: metadata.decimals.toString(),
                numeric: this.convertHexToBalance({
                    hex: asset.balance,
                    decimals: metadata.decimals
                })
            },
            iconUrl: metadata.iconUrl
        };
    },
    /**
     * Converts a hex string to a Balance object
     * @param hex - Hex string to convert
     * @param decimals - Number of decimals to use
     * @returns Balance object
     */
    convertHexToBalance({ hex, decimals }) {
        return (0,formatUnits/* formatUnits */.J)(BigInt(hex), decimals);
    },
    /**
     * Converts an address to a CAIP-10 address
     * @param address - Address to convert
     * @param chainId - Chain ID in CAIP-2 format
     * @returns CAIP-10 address
     */
    convertAddressToCAIP10Address(address, chainId) {
        return `${chainId}:${address}`;
    },
    /**
     *  Creates a CAIP-2 Chain ID from a chain ID and namespace
     * @param chainId  - Chain ID in hex format
     * @param namespace  - Chain namespace
     * @returns
     */
    createCAIP2ChainId(chainId, namespace) {
        return `${namespace}:${parseInt(chainId, 16)}`;
    },
    /**
     * Gets the chain ID in hex format from a CAIP-2 Chain ID
     * @param caip2ChainId - CAIP-2 Chain ID
     * @returns Chain ID in hex format
     */
    getChainIdHexFromCAIP2ChainId(caip2ChainId) {
        const parts = caip2ChainId.split(':');
        if (parts.length < 2 || !parts[1]) {
            return '0x0';
        }
        const chainPart = parts[1];
        const parsed = parseInt(chainPart, 10);
        return isNaN(parsed) ? '0x0' : `0x${parsed.toString(16)}`;
    },
    /**
     * Checks if a response is a valid WalletGetAssetsResponse
     * @param response - The response to check
     * @returns True if the response is a valid WalletGetAssetsResponse, false otherwise
     */
    isWalletGetAssetsResponse(response) {
        // Check if response is an object and has the expected structure
        if (typeof response !== 'object' || response === null) {
            return false;
        }
        // Check if all values are arrays and conform to the expected asset structure
        return Object.values(response).every(value => Array.isArray(value) && value.every(asset => this.isValidAsset(asset)));
    },
    /**
     * Checks if an asset object is valid.
     * @param asset - The asset object to check.
     * @returns True if the asset is valid, false otherwise.
     */
    isValidAsset(asset) {
        return (typeof asset === 'object' &&
            asset !== null &&
            typeof asset.address === 'string' &&
            typeof asset.balance === 'string' &&
            (asset.type === 'ERC20' || asset.type === 'NATIVE') &&
            typeof asset.metadata === 'object' &&
            asset.metadata !== null &&
            typeof asset.metadata['name'] === 'string' &&
            typeof asset.metadata['symbol'] === 'string' &&
            typeof asset.metadata['decimals'] === 'number' &&
            typeof asset.metadata['price'] === 'number' &&
            typeof asset.metadata['iconUrl'] === 'string');
    }
};
//# sourceMappingURL=ERC7811Util.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ViemUtil.js



// -- Constants ----------------------------------------------------------------
let cachedViemUtils = undefined;
// -- Helpers ------------------------------------------------------------------
async function loadViemUtils() {
    if (!cachedViemUtils) {
        const { createPublicClient, http, defineChain } = await Promise.all(/* import() */[__webpack_require__.e(38094), __webpack_require__.e(48694)]).then(__webpack_require__.bind(__webpack_require__, 893456));
        cachedViemUtils = {
            createPublicClient,
            http,
            defineChain
        };
    }
    return cachedViemUtils;
}
// -- Utils --------------------------------------------------------------------
const ViemUtil = {
    getBlockchainApiRpcUrl(caipNetworkId, projectId) {
        const url = new URL('https://rpc.walletconnect.org/v1/');
        url.searchParams.set('chainId', caipNetworkId);
        url.searchParams.set('projectId', projectId);
        return url.toString();
    },
    async getViemChain(caipNetwork) {
        const { defineChain } = await loadViemUtils();
        const { chainId } = ParseUtil.parseCaipNetworkId(caipNetwork.caipNetworkId);
        return defineChain({ ...caipNetwork, id: Number(chainId) });
    },
    async createViemPublicClient(caipNetwork) {
        const { createPublicClient, http } = await loadViemUtils();
        const projectId = controllers_OptionsController_OptionsController.state.projectId;
        const viemChain = await ViemUtil.getViemChain(caipNetwork);
        if (!viemChain) {
            throw new Error(`Chain ${caipNetwork.caipNetworkId} not found in viem/chains`);
        }
        return createPublicClient({
            chain: viemChain,
            transport: http(ViemUtil.getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId))
        });
    }
};
//# sourceMappingURL=ViemUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/BalanceUtil.js









// -- Controller ---------------------------------------- //
const BalanceUtil_BalanceUtil = {
    /**
     * Get the balances of the user's tokens. If user connected with Auth provider or and on the EIP155 network,
     * it'll use the `wallet_getAssets` and `wallet_getCapabilities` calls to fetch the balance rather than Blockchain API
     * @param forceUpdate - If true, the balances will be fetched from the server
     * @returns The balances of the user's tokens
     */
    async getMyTokensWithBalance(params = {
        forceUpdate: undefined,
        caipNetwork: ChainController_ChainController.state.activeCaipNetwork,
        address: ChainController_ChainController.getAccountData()?.address
    }) {
        const { forceUpdate, caipNetwork, address } = params;
        const isAuthConnector = ConnectorController_ConnectorController.getConnectorId('eip155') === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH;
        if (!address) {
            return [];
        }
        const caipAddress = caipNetwork ? `${caipNetwork.caipNetworkId}:${address}` : address;
        const cachedBalance = StorageUtil_StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
        if (cachedBalance) {
            return cachedBalance.balances;
        }
        // Extract EIP-155 specific logic
        if (caipNetwork && caipNetwork.chainNamespace === esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM && isAuthConnector) {
            const eip155Balances = await this.getEIP155Balances(address, caipNetwork);
            if (eip155Balances) {
                return this.filterLowQualityTokens(eip155Balances);
            }
        }
        // Fallback to 1Inch API
        const response = await BlockchainApiController_BlockchainApiController.getBalance(address, caipNetwork?.caipNetworkId, forceUpdate);
        return this.filterLowQualityTokens(response.balances);
    },
    /**
     * Get the balances of the user's tokens on the EIP155 network using native `wallet_getAssets` and `wallet_getCapabilities` calls
     * @param address - The address of the user
     * @param caipNetwork - The CAIP network
     * @returns The balances of the user's tokens on the EIP155 network
     */
    async getEIP155Balances(address, caipNetwork) {
        try {
            const chainIdHex = ERC7811Utils.getChainIdHexFromCAIP2ChainId(caipNetwork.caipNetworkId);
            const walletCapabilities = (await ConnectionController_ConnectionController.getCapabilities(address));
            if (!walletCapabilities?.[chainIdHex]?.['assetDiscovery']?.supported) {
                return null;
            }
            const walletGetAssetsResponse = await ConnectionController_ConnectionController.walletGetAssets({
                account: address,
                chainFilter: [chainIdHex]
            });
            if (!ERC7811Utils.isWalletGetAssetsResponse(walletGetAssetsResponse)) {
                return null;
            }
            const assets = walletGetAssetsResponse[chainIdHex] || [];
            const filteredAssets = assets.map(asset => ERC7811Utils.createBalance(asset, caipNetwork.caipNetworkId));
            StorageUtil_StorageUtil.updateBalanceCache({
                caipAddress: `${caipNetwork.caipNetworkId}:${address}`,
                balance: { balances: filteredAssets },
                timestamp: Date.now()
            });
            return filteredAssets;
        }
        catch (error) {
            return null;
        }
    },
    /**
     * The 1Inch API includes many low-quality tokens in the balance response,
     * which appear inconsistently. This filter prevents them from being displayed.
     */
    filterLowQualityTokens(balances) {
        return balances.filter(balance => balance.quantity.decimals !== '0');
    },
    async fetchERC20Balance({ caipAddress, assetAddress, caipNetwork }) {
        const publicClient = await ViemUtil.createViemPublicClient(caipNetwork);
        const { address } = ParseUtil.parseCaipAddress(caipAddress);
        const [{ result: name }, { result: symbol }, { result: balance }, { result: decimals }] = await publicClient.multicall({
            contracts: [
                {
                    address: assetAddress,
                    functionName: 'name',
                    args: [],
                    abi: abis/* erc20Abi */.xw
                },
                {
                    address: assetAddress,
                    functionName: 'symbol',
                    args: [],
                    abi: abis/* erc20Abi */.xw
                },
                {
                    address: assetAddress,
                    functionName: 'balanceOf',
                    args: [address],
                    abi: abis/* erc20Abi */.xw
                },
                {
                    address: assetAddress,
                    functionName: 'decimals',
                    args: [],
                    abi: abis/* erc20Abi */.xw
                }
            ]
        });
        return {
            name,
            symbol,
            decimals,
            balance: balance && decimals ? (0,formatUnits/* formatUnits */.J)(balance, decimals) : '0'
        };
    }
};
//# sourceMappingURL=BalanceUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AdapterController/index.js
const AdapterController_state = {
    adapters: {}
};
const AdapterController = {
    state: AdapterController_state,
    initialize(adapters) {
        AdapterController_state.adapters = { ...adapters };
    },
    get(namespace) {
        return AdapterController_state.adapters[namespace];
    }
};
//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ProviderController.js


const CLEAN_PROVIDERS_STATE = {
    eip155: undefined,
    solana: undefined,
    polkadot: undefined,
    bip122: undefined,
    cosmos: undefined,
    sui: undefined,
    stacks: undefined,
    ton: undefined
};
const ProviderController_state = (0,vanilla/* proxy */.BX)({
    providers: { ...CLEAN_PROVIDERS_STATE },
    providerIds: { ...CLEAN_PROVIDERS_STATE }
});
const ProviderController = {
    state: ProviderController_state,
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(ProviderController_state, key, callback);
    },
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(ProviderController_state, () => {
            callback(ProviderController_state);
        });
    },
    subscribeProviders(callback) {
        return (0,vanilla/* subscribe */.B1)(ProviderController_state.providers, () => callback(ProviderController_state.providers));
    },
    setProvider(chainNamespace, provider) {
        if (chainNamespace && provider) {
            ProviderController_state.providers[chainNamespace] = (0,vanilla/* ref */.KR)(provider);
        }
    },
    getProvider(chainNamespace) {
        if (!chainNamespace) {
            return undefined;
        }
        return ProviderController_state.providers[chainNamespace];
    },
    setProviderId(chainNamespace, providerId) {
        if (providerId) {
            ProviderController_state.providerIds[chainNamespace] = providerId;
        }
    },
    getProviderId(chainNamespace) {
        if (!chainNamespace) {
            return undefined;
        }
        return ProviderController_state.providerIds[chainNamespace];
    },
    reset() {
        ProviderController_state.providers = { ...CLEAN_PROVIDERS_STATE };
        ProviderController_state.providerIds = { ...CLEAN_PROVIDERS_STATE };
    },
    resetChain(chainNamespace) {
        ProviderController_state.providers[chainNamespace] = undefined;
        ProviderController_state.providerIds[chainNamespace] = undefined;
    }
};
//# sourceMappingURL=ProviderController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js
const ErrorUtil = {
    RPC_ERROR_CODE: {
        USER_REJECTED_REQUEST: 4001,
        USER_REJECTED_METHODS: 5002,
        USER_REJECTED: 5000,
        SEND_TRANSACTION_ERROR: 5001
    },
    PROVIDER_RPC_ERROR_NAME: {
        PROVIDER_RPC: 'ProviderRpcError',
        USER_REJECTED_REQUEST: 'UserRejectedRequestError',
        SEND_TRANSACTION_ERROR: 'SendTransactionError'
    },
    isRpcProviderError(error) {
        try {
            if (typeof error === 'object' && error !== null) {
                const objErr = error;
                const hasMessage = typeof objErr['message'] === 'string';
                const hasCode = typeof objErr['code'] === 'number';
                return hasMessage && hasCode;
            }
            return false;
        }
        catch {
            return false;
        }
    },
    isUserRejectedMessage(message) {
        return (message.toLowerCase().includes('user rejected') ||
            message.toLowerCase().includes('user cancelled') ||
            message.toLowerCase().includes('user canceled'));
    },
    isUserRejectedRequestError(error) {
        if (ErrorUtil.isRpcProviderError(error)) {
            const isUserRejectedCode = error.code === ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_REQUEST;
            const isUserRejectedMethodsCode = error.code === ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_METHODS;
            return (isUserRejectedCode ||
                isUserRejectedMethodsCode ||
                ErrorUtil.isUserRejectedMessage(error.message));
        }
        if (error instanceof Error) {
            return ErrorUtil.isUserRejectedMessage(error.message);
        }
        return false;
    }
};
class ProviderRpcError extends Error {
    constructor(cause, options) {
        super(options.message, { cause });
        this.name = ErrorUtil.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC;
        this.code = options.code;
    }
}
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
            message: 'User rejected the request'
        });
        this.name = ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
    }
}
class SendTransactionError extends ProviderRpcError {
    constructor(message) {
        super(undefined, {
            code: ErrorUtil.RPC_ERROR_CODE.SEND_TRANSACTION_ERROR,
            message
        });
        this.name = ErrorUtil.PROVIDER_RPC_ERROR_NAME.SEND_TRANSACTION_ERROR;
    }
}
//# sourceMappingURL=ErrorUtil.js.map
// EXTERNAL MODULE: ./node_modules/big.js/big.mjs
var big = __webpack_require__(315192);
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js

const NumberUtil_NumberUtil = {
    bigNumber(value, params = {
        safe: false
    }) {
        try {
            if (!value) {
                return new big/* default */.A(0);
            }
            return new big/* default */.A(value);
        }
        catch (err) {
            if (params.safe) {
                return new big/* default */.A(0);
            }
            throw err;
        }
    },
    formatNumber(value, params) {
        const { decimals, round = 8, safe = true } = params;
        const bigNumber = NumberUtil_NumberUtil.bigNumber(value, { safe });
        return bigNumber.div(new big/* default */.A(10).pow(decimals)).round(round);
    },
    multiply(a, b) {
        if (a === undefined || b === undefined) {
            return new big/* default */.A(0);
        }
        const aBigNumber = new big/* default */.A(a);
        const bBigNumber = new big/* default */.A(b);
        return aBigNumber.times(bBigNumber);
    },
    toFixed(value, decimals = 2) {
        if (value === undefined || value === '') {
            return new big/* default */.A(0).toFixed(decimals);
        }
        return new big/* default */.A(value).toFixed(decimals);
    },
    formatNumberToLocalString(value, decimals = 2) {
        if (value === undefined || value === '') {
            return '0.00';
        }
        if (typeof value === 'number') {
            return value.toLocaleString('en-US', {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals,
                roundingMode: 'floor'
            });
        }
        return parseFloat(value).toLocaleString('en-US', {
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals,
            roundingMode: 'floor'
        });
    },
    parseLocalStringToNumber(value) {
        if (value === undefined || value === '') {
            return 0;
        }
        const sanitizedValue = value.replace(/,/gu, '');
        return new big/* default */.A(sanitizedValue).toNumber();
    }
};
//# sourceMappingURL=NumberUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js
const erc20ABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_from',
                type: 'address'
            },
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
];
//# sourceMappingURL=erc20.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js
const swapABI = [
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            { name: 'spender', type: 'address' },
            { name: 'amount', type: 'uint256' }
        ],
        outputs: [{ type: 'bool' }]
    }
];
//# sourceMappingURL=swap.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js
const usdtABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
];
//# sourceMappingURL=usdt.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/ContractUtil.js




const ContractUtil = {
    getERC20Abi: (tokenAddress) => {
        if (esm_src_utils_ConstantsUtil_ConstantsUtil.USDT_CONTRACT_ADDRESSES.includes(tokenAddress)) {
            return usdtABI;
        }
        return erc20ABI;
    },
    getSwapAbi: () => swapABI
};
//# sourceMappingURL=ContractUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SwapApiUtil.js





// -- Controller ---------------------------------------- //
const SwapApiUtil_SwapApiUtil = {
    async getTokenList(caipNetworkId) {
        const response = await BlockchainApiController_BlockchainApiController.fetchSwapTokens({
            chainId: caipNetworkId
        });
        const tokens = response?.tokens?.map(token => ({
            ...token,
            eip2612: false,
            quantity: {
                decimals: '0',
                numeric: '0'
            },
            price: 0,
            value: 0
        })) || [];
        return tokens;
    },
    async fetchGasPrice() {
        const caipNetwork = ChainController_ChainController.state.activeCaipNetwork;
        if (!caipNetwork) {
            return null;
        }
        try {
            switch (caipNetwork.chainNamespace) {
                case 'solana':
                    // eslint-disable-next-line no-case-declarations
                    const lamportsPerSignature = (await ConnectionController_ConnectionController?.estimateGas({ chainNamespace: 'solana' }))?.toString();
                    return {
                        standard: lamportsPerSignature,
                        fast: lamportsPerSignature,
                        instant: lamportsPerSignature
                    };
                case 'eip155':
                default:
                    return await BlockchainApiController_BlockchainApiController.fetchGasPrice({
                        chainId: caipNetwork.caipNetworkId
                    });
            }
        }
        catch {
            return null;
        }
    },
    async fetchSwapAllowance({ tokenAddress, userAddress, sourceTokenAmount, sourceTokenDecimals }) {
        const response = await BlockchainApiController_BlockchainApiController.fetchSwapAllowance({
            tokenAddress,
            userAddress
        });
        if (response?.allowance && sourceTokenAmount && sourceTokenDecimals) {
            const parsedValue = ConnectionController_ConnectionController.parseUnits(sourceTokenAmount, sourceTokenDecimals) || 0;
            const hasAllowance = BigInt(response.allowance) >= parsedValue;
            return hasAllowance;
        }
        return false;
    },
    async getMyTokensWithBalance(forceUpdate) {
        const balances = await BalanceUtil_BalanceUtil.getMyTokensWithBalance({
            forceUpdate,
            caipNetwork: ChainController_ChainController.state.activeCaipNetwork,
            address: ChainController_ChainController.getAccountData()?.address
        });
        ChainController_ChainController.setAccountProp('tokenBalance', balances, ChainController_ChainController.state.activeChain);
        return this.mapBalancesToSwapTokens(balances);
    },
    /**
     * Maps the balances from Blockchain API to SwapTokenWithBalance array
     * @param balances
     * @returns SwapTokenWithBalance[]
     */
    mapBalancesToSwapTokens(balances) {
        return (balances?.map(token => ({
            ...token,
            address: token?.address ? token.address : getActiveNetworkTokenAddress(),
            decimals: parseInt(token.quantity.decimals, 10),
            logoUri: token.iconUrl,
            eip2612: false
        })) || []);
    },
    async handleSwapError(error) {
        try {
            const cause = error?.cause;
            if (!cause?.json) {
                return undefined;
            }
            const response = await cause.json();
            const reason = response?.reasons?.[0]?.description;
            if (reason?.includes('insufficient liquidity')) {
                return 'Insufficient liquidity';
            }
            return undefined;
        }
        catch {
            return undefined;
        }
    }
};
//# sourceMappingURL=SwapApiUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SendController.js
















// -- State --------------------------------------------- //
const SendController_state = (0,vanilla/* proxy */.BX)({
    tokenBalances: [],
    loading: false
});
// -- Controller ---------------------------------------- //
const SendController_controller = {
    state: SendController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(SendController_state, () => callback(SendController_state));
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(SendController_state, key, callback);
    },
    setToken(token) {
        if (token) {
            SendController_state.token = (0,vanilla/* ref */.KR)(token);
        }
    },
    setTokenAmount(sendTokenAmount) {
        SendController_state.sendTokenAmount = sendTokenAmount;
    },
    setReceiverAddress(receiverAddress) {
        SendController_state.receiverAddress = receiverAddress;
    },
    setReceiverProfileImageUrl(receiverProfileImageUrl) {
        SendController_state.receiverProfileImageUrl = receiverProfileImageUrl;
    },
    setReceiverProfileName(receiverProfileName) {
        SendController_state.receiverProfileName = receiverProfileName;
    },
    setNetworkBalanceInUsd(networkBalanceInUSD) {
        SendController_state.networkBalanceInUSD = networkBalanceInUSD;
    },
    setLoading(loading) {
        SendController_state.loading = loading;
    },
    getSdkEventProperties(error) {
        return {
            message: utils_CoreHelperUtil_CoreHelperUtil.parseError(error),
            isSmartAccount: getPreferredAccountType(ChainController_ChainController.state.activeChain) ===
                W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: SendController_state.token?.symbol || '',
            amount: SendController_state.sendTokenAmount ?? 0,
            network: ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId || ''
        };
    },
    async sendToken() {
        try {
            SendController.setLoading(true);
            switch (ChainController_ChainController.state.activeCaipNetwork?.chainNamespace) {
                case 'eip155':
                    await SendController.sendEvmToken();
                    return;
                case 'solana':
                    await SendController.sendSolanaToken();
                    return;
                default:
                    throw new Error('Unsupported chain');
            }
        }
        catch (err) {
            if (ErrorUtil.isUserRejectedRequestError(err)) {
                throw new UserRejectedRequestError(err);
            }
            throw err;
        }
        finally {
            SendController.setLoading(false);
        }
    },
    async sendEvmToken() {
        const activeChainNamespace = ChainController_ChainController.state.activeChain;
        if (!activeChainNamespace) {
            throw new Error('SendController:sendEvmToken - activeChainNamespace is required');
        }
        const activeAccountType = getPreferredAccountType(activeChainNamespace);
        if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
            throw new Error('An amount and receiver address are required');
        }
        if (!SendController.state.token) {
            throw new Error('A token is required');
        }
        if (SendController.state.token?.address) {
            EventsController_EventsController.sendEvent({
                type: 'track',
                event: 'SEND_INITIATED',
                properties: {
                    isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: SendController.state.token.address,
                    amount: SendController.state.sendTokenAmount,
                    network: ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId || ''
                }
            });
            const { hash } = await SendController.sendERC20Token({
                receiverAddress: SendController.state.receiverAddress,
                tokenAddress: SendController.state.token.address,
                sendTokenAmount: SendController.state.sendTokenAmount,
                decimals: SendController.state.token.quantity.decimals
            });
            if (hash) {
                SendController_state.hash = hash;
            }
        }
        else {
            EventsController_EventsController.sendEvent({
                type: 'track',
                event: 'SEND_INITIATED',
                properties: {
                    isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: SendController.state.token.symbol || '',
                    amount: SendController.state.sendTokenAmount,
                    network: ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId || ''
                }
            });
            const { hash } = await SendController.sendNativeToken({
                receiverAddress: SendController.state.receiverAddress,
                sendTokenAmount: SendController.state.sendTokenAmount,
                decimals: SendController.state.token.quantity.decimals
            });
            if (hash) {
                SendController_state.hash = hash;
            }
        }
    },
    async fetchTokenBalance(onError) {
        SendController_state.loading = true;
        const namespace = ChainController_ChainController.state.activeChain;
        const chainId = ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId;
        const chain = ChainController_ChainController.state.activeCaipNetwork?.chainNamespace;
        const caipAddress = ChainController_ChainController.getAccountData(namespace)?.caipAddress ??
            ChainController_ChainController.state.activeCaipAddress;
        const address = caipAddress ? utils_CoreHelperUtil_CoreHelperUtil.getPlainAddress(caipAddress) : undefined;
        if (SendController_state.lastRetry &&
            !utils_CoreHelperUtil_CoreHelperUtil.isAllowedRetry(SendController_state.lastRetry, 30 * dist_esm_src_utils_ConstantsUtil_ConstantsUtil.ONE_SEC_MS)) {
            SendController_state.loading = false;
            return [];
        }
        try {
            if (address && chainId && chain) {
                const balances = await BalanceUtil_BalanceUtil.getMyTokensWithBalance();
                SendController_state.tokenBalances = balances;
                SendController_state.lastRetry = undefined;
                return balances;
            }
        }
        catch (error) {
            SendController_state.lastRetry = Date.now();
            onError?.(error);
            SnackController_SnackController.showError('Token Balance Unavailable');
        }
        finally {
            SendController_state.loading = false;
        }
        return [];
    },
    fetchNetworkBalance() {
        if (SendController_state.tokenBalances.length === 0) {
            return;
        }
        const networkTokenBalances = SwapApiUtil_SwapApiUtil.mapBalancesToSwapTokens(SendController_state.tokenBalances);
        if (!networkTokenBalances) {
            return;
        }
        const networkToken = networkTokenBalances.find(token => token.address === getActiveNetworkTokenAddress());
        if (!networkToken) {
            return;
        }
        SendController_state.networkBalanceInUSD = networkToken
            ? NumberUtil_NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString()
            : '0';
    },
    async sendNativeToken(params) {
        RouterController_RouterController.pushTransactionStack({});
        const to = params.receiverAddress;
        const address = ChainController_ChainController.getAccountData()?.address;
        const value = ConnectionController_ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
        const data = '0x';
        const hash = await ConnectionController_ConnectionController.sendTransaction({
            chainNamespace: esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM,
            to,
            address,
            data,
            value: value ?? BigInt(0)
        });
        EventsController_EventsController.sendEvent({
            type: 'track',
            event: 'SEND_SUCCESS',
            properties: {
                isSmartAccount: getPreferredAccountType('eip155') === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                token: SendController.state.token?.symbol || '',
                amount: params.sendTokenAmount,
                network: ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId || '',
                hash: hash || ''
            }
        });
        ConnectionController_ConnectionController._getClient()?.updateBalance('eip155');
        SendController.resetSend();
        return { hash };
    },
    async sendERC20Token(params) {
        RouterController_RouterController.pushTransactionStack({
            onSuccess() {
                RouterController_RouterController.replace('Account');
            }
        });
        const amount = ConnectionController_ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
        const address = ChainController_ChainController.getAccountData()?.address;
        if (address && params.sendTokenAmount && params.receiverAddress && params.tokenAddress) {
            const tokenAddress = utils_CoreHelperUtil_CoreHelperUtil.getPlainAddress(params.tokenAddress);
            if (!tokenAddress) {
                throw new Error('SendController:sendERC20Token - tokenAddress is required');
            }
            const hash = await ConnectionController_ConnectionController.writeContract({
                fromAddress: address,
                tokenAddress,
                args: [params.receiverAddress, amount ?? BigInt(0)],
                method: 'transfer',
                abi: ContractUtil.getERC20Abi(tokenAddress),
                chainNamespace: esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM
            });
            EventsController_EventsController.sendEvent({
                type: 'track',
                event: 'SEND_SUCCESS',
                properties: {
                    isSmartAccount: getPreferredAccountType('eip155') === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: SendController.state.token?.symbol || '',
                    amount: params.sendTokenAmount,
                    network: ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId || '',
                    hash: hash || ''
                }
            });
            SendController.resetSend();
            return { hash };
        }
        return { hash: undefined };
    },
    async sendSolanaToken() {
        if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
            throw new Error('An amount and receiver address are required');
        }
        RouterController_RouterController.pushTransactionStack({
            onSuccess() {
                RouterController_RouterController.replace('Account');
            }
        });
        let tokenMint = undefined;
        if (SendController.state.token &&
            SendController.state.token.address !== dist_esm_src_utils_ConstantsUtil_ConstantsUtil.SOLANA_NATIVE_TOKEN_ADDRESS) {
            if (utils_CoreHelperUtil_CoreHelperUtil.isCaipAddress(SendController.state.token.address)) {
                tokenMint = utils_CoreHelperUtil_CoreHelperUtil.getPlainAddress(SendController.state.token.address);
            }
            else {
                tokenMint = SendController.state.token.address;
            }
        }
        const hash = await ConnectionController_ConnectionController.sendTransaction({
            chainNamespace: 'solana',
            tokenMint,
            to: SendController.state.receiverAddress,
            value: SendController.state.sendTokenAmount
        });
        if (hash) {
            SendController_state.hash = hash;
        }
        ConnectionController_ConnectionController._getClient()?.updateBalance('solana');
        EventsController_EventsController.sendEvent({
            type: 'track',
            event: 'SEND_SUCCESS',
            properties: {
                isSmartAccount: false,
                token: SendController.state.token?.symbol || '',
                amount: SendController.state.sendTokenAmount,
                network: ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId || '',
                hash: hash || ''
            }
        });
        SendController.resetSend();
    },
    resetSend() {
        SendController_state.token = undefined;
        SendController_state.sendTokenAmount = undefined;
        SendController_state.receiverAddress = undefined;
        SendController_state.receiverProfileImageUrl = undefined;
        SendController_state.receiverProfileName = undefined;
        SendController_state.loading = false;
        SendController_state.tokenBalances = [];
    }
};
// Export the controller wrapped with our error boundary
const SendController = utils_withErrorBoundary_withErrorBoundary(SendController_controller);
//# sourceMappingURL=SendController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js



















// -- Constants ----------------------------------------- //
const defaultAccountState = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: new Map(),
    user: undefined,
    preferredAccountType: undefined
};
const networkState = {
    caipNetwork: undefined,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
};
// -- State --------------------------------------------- //
const ChainController_state = (0,vanilla/* proxy */.BX)({
    chains: (0,utils/* proxyMap */.zC)(),
    activeCaipAddress: undefined,
    activeChain: undefined,
    activeCaipNetwork: undefined,
    noAdapters: false,
    universalAdapter: {
        connectionControllerClient: undefined
    },
    isSwitchingNamespace: false
});
// -- Controller ---------------------------------------- //
const ChainController_controller = {
    state: ChainController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(ChainController_state, () => {
            callback(ChainController_state);
        });
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(ChainController_state, key, callback);
    },
    subscribeAccountStateProp(property, callback, chain) {
        const activeChain = chain || ChainController_state.activeChain;
        if (!activeChain) {
            return () => undefined;
        }
        return (0,utils/* subscribeKey */.u$)(ChainController_state.chains.get(activeChain)?.accountState || {}, property, callback);
    },
    subscribeChainProp(property, callback, chain) {
        let prev = undefined;
        return (0,vanilla/* subscribe */.B1)(ChainController_state.chains, () => {
            const activeChain = chain || ChainController_state.activeChain;
            if (activeChain) {
                const nextValue = ChainController_state.chains.get(activeChain)?.[property];
                if (prev !== nextValue) {
                    prev = nextValue;
                    callback(nextValue);
                }
            }
        });
    },
    initialize(adapters, caipNetworks, clients) {
        const { chainId: activeChainId, namespace: activeNamespace } = StorageUtil_StorageUtil.getActiveNetworkProps();
        const activeCaipNetwork = caipNetworks?.find(network => network.id.toString() === activeChainId?.toString());
        const defaultAdapter = adapters.find(adapter => adapter?.namespace === activeNamespace);
        const adapterToActivate = defaultAdapter || adapters?.[0];
        const namespacesFromAdapters = adapters.map(a => a.namespace).filter(n => n !== undefined);
        /**
         * If the AppKit is in embedded mode (for Demo app), we should get the available namespaces from the adapters.
         */
        const namespaces = controllers_OptionsController_OptionsController.state.enableEmbedded
            ? new Set([...namespacesFromAdapters])
            : new Set([...(caipNetworks?.map(network => network.chainNamespace) ?? [])]);
        if (adapters?.length === 0 || !adapterToActivate) {
            ChainController_state.noAdapters = true;
        }
        if (!ChainController_state.noAdapters) {
            ChainController_state.activeChain = adapterToActivate?.namespace;
            ChainController_state.activeCaipNetwork = activeCaipNetwork;
            ChainController_ChainController.setChainNetworkData(adapterToActivate?.namespace, {
                caipNetwork: activeCaipNetwork
            });
            if (ChainController_state.activeChain) {
                PublicStateController.set({ activeChain: adapterToActivate?.namespace });
            }
        }
        namespaces.forEach(namespace => {
            const namespaceNetworks = caipNetworks?.filter(network => network.chainNamespace === namespace);
            const storedAccountTypes = StorageUtil_StorageUtil.getPreferredAccountTypes() || {};
            const defaultTypes = { ...controllers_OptionsController_OptionsController.state.defaultAccountTypes, ...storedAccountTypes };
            ChainController_ChainController.state.chains.set(namespace, {
                namespace,
                networkState: (0,vanilla/* proxy */.BX)({ ...networkState, caipNetwork: namespaceNetworks?.[0] }),
                accountState: (0,vanilla/* proxy */.BX)({
                    ...defaultAccountState,
                    preferredAccountType: defaultTypes[namespace]
                }),
                caipNetworks: namespaceNetworks ?? [],
                ...clients
            });
            ChainController_ChainController.setRequestedCaipNetworks(namespaceNetworks ?? [], namespace);
        });
    },
    removeAdapter(namespace) {
        if (ChainController_state.activeChain === namespace) {
            const nextAdapter = Array.from(ChainController_state.chains.entries()).find(([chainNamespace]) => chainNamespace !== namespace);
            if (nextAdapter) {
                const caipNetwork = nextAdapter[1]?.caipNetworks?.[0];
                if (caipNetwork) {
                    ChainController_ChainController.setActiveCaipNetwork(caipNetwork);
                }
            }
        }
        ChainController_state.chains.delete(namespace);
    },
    addAdapter(adapter, { connectionControllerClient }, caipNetworks) {
        if (!adapter.namespace) {
            throw new Error('ChainController:addAdapter - adapter must have a namespace');
        }
        ChainController_state.chains.set(adapter.namespace, {
            namespace: adapter.namespace,
            networkState: { ...networkState, caipNetwork: caipNetworks[0] },
            accountState: { ...defaultAccountState },
            caipNetworks,
            connectionControllerClient
        });
        ChainController_ChainController.setRequestedCaipNetworks(caipNetworks?.filter(caipNetwork => caipNetwork.chainNamespace === adapter.namespace) ?? [], adapter.namespace);
    },
    addNetwork(network) {
        const chainAdapter = ChainController_state.chains.get(network.chainNamespace);
        if (chainAdapter) {
            const newNetworks = [...(chainAdapter.caipNetworks || [])];
            if (!chainAdapter.caipNetworks?.find(caipNetwork => caipNetwork.id === network.id)) {
                newNetworks.push(network);
            }
            ChainController_state.chains.set(network.chainNamespace, { ...chainAdapter, caipNetworks: newNetworks });
            ChainController_ChainController.setRequestedCaipNetworks(newNetworks, network.chainNamespace);
            ConnectorController_ConnectorController.filterByNamespace(network.chainNamespace, true);
        }
    },
    removeNetwork(namespace, networkId) {
        const chainAdapter = ChainController_state.chains.get(namespace);
        if (chainAdapter) {
            // Check if network being removed is active network
            const isActiveNetwork = ChainController_state.activeCaipNetwork?.id === networkId;
            // Filter out the network being removed
            const newCaipNetworksOfAdapter = [
                ...(chainAdapter.caipNetworks?.filter(network => network.id !== networkId) || [])
            ];
            // If active network was removed and there are other networks available, switch to first one
            if (isActiveNetwork && chainAdapter?.caipNetworks?.[0]) {
                ChainController_ChainController.setActiveCaipNetwork(chainAdapter.caipNetworks[0]);
            }
            ChainController_state.chains.set(namespace, { ...chainAdapter, caipNetworks: newCaipNetworksOfAdapter });
            ChainController_ChainController.setRequestedCaipNetworks(newCaipNetworksOfAdapter || [], namespace);
            if (newCaipNetworksOfAdapter.length === 0) {
                ConnectorController_ConnectorController.filterByNamespace(namespace, false);
            }
        }
    },
    setAdapterNetworkState(chain, props) {
        const chainAdapter = ChainController_state.chains.get(chain);
        if (chainAdapter) {
            chainAdapter.networkState = {
                ...(chainAdapter.networkState || networkState),
                ...props
            };
            ChainController_state.chains.set(chain, chainAdapter);
        }
    },
    setChainAccountData(chain, accountProps, _unknown = true) {
        if (!chain) {
            throw new Error('Chain is required to update chain account data');
        }
        const chainAdapter = ChainController_state.chains.get(chain);
        if (chainAdapter) {
            const newAccountState = {
                ...(chainAdapter.accountState || defaultAccountState),
                ...accountProps
            };
            ChainController_state.chains.set(chain, { ...chainAdapter, accountState: newAccountState });
            if (ChainController_state.chains.size === 1 || ChainController_state.activeChain === chain) {
                if (accountProps.caipAddress) {
                    ChainController_state.activeCaipAddress = accountProps.caipAddress;
                }
            }
        }
    },
    setChainNetworkData(chain, networkProps) {
        if (!chain) {
            return;
        }
        const chainAdapter = ChainController_state.chains.get(chain);
        if (chainAdapter) {
            const newNetworkState = { ...(chainAdapter.networkState || networkState), ...networkProps };
            ChainController_state.chains.set(chain, { ...chainAdapter, networkState: newNetworkState });
        }
    },
    // eslint-disable-next-line max-params
    setAccountProp(prop, value, chain, replaceState = true) {
        ChainController_ChainController.setChainAccountData(chain, { [prop]: value }, replaceState);
    },
    setActiveNamespace(chain) {
        ChainController_state.activeChain = chain;
        const newAdapter = chain ? ChainController_state.chains.get(chain) : undefined;
        const caipNetwork = newAdapter?.networkState?.caipNetwork;
        if (caipNetwork?.id && chain) {
            ChainController_state.activeCaipAddress = newAdapter?.accountState?.caipAddress;
            ChainController_state.activeCaipNetwork = caipNetwork;
            ChainController_ChainController.setChainNetworkData(chain, { caipNetwork });
            StorageUtil_StorageUtil.setActiveCaipNetworkId(caipNetwork?.caipNetworkId);
            PublicStateController.set({
                activeChain: chain,
                selectedNetworkId: caipNetwork?.caipNetworkId
            });
        }
    },
    setActiveCaipNetwork(caipNetwork) {
        if (!caipNetwork) {
            return;
        }
        const isSameNamespace = ChainController_state.activeChain === caipNetwork.chainNamespace;
        if (!isSameNamespace) {
            ChainController_ChainController.setIsSwitchingNamespace(true);
        }
        const newAdapter = ChainController_state.chains.get(caipNetwork.chainNamespace);
        ChainController_state.activeChain = caipNetwork.chainNamespace;
        ChainController_state.activeCaipNetwork = caipNetwork;
        ChainController_ChainController.setChainNetworkData(caipNetwork.chainNamespace, { caipNetwork });
        let address = newAdapter?.accountState?.address;
        if (address) {
            ChainController_state.activeCaipAddress = `${caipNetwork.chainNamespace}:${caipNetwork.id}:${address}`;
        }
        else if (isSameNamespace && ChainController_state.activeCaipAddress) {
            const { address: parsedAddress } = ParseUtil.parseCaipAddress(ChainController_state.activeCaipAddress);
            address = parsedAddress;
            ChainController_state.activeCaipAddress = `${caipNetwork.caipNetworkId}:${address}`;
        }
        else {
            ChainController_state.activeCaipAddress = undefined;
        }
        ChainController_ChainController.setChainAccountData(caipNetwork.chainNamespace, {
            address,
            caipAddress: ChainController_state.activeCaipAddress
        });
        // Reset send state when switching networks
        SendController.resetSend();
        PublicStateController.set({
            activeChain: ChainController_state.activeChain,
            selectedNetworkId: ChainController_state.activeCaipNetwork?.caipNetworkId
        });
        StorageUtil_StorageUtil.setActiveCaipNetworkId(caipNetwork.caipNetworkId);
        const isSupported = ChainController_ChainController.checkIfSupportedNetwork(caipNetwork.chainNamespace);
        if (!isSupported &&
            controllers_OptionsController_OptionsController.state.enableNetworkSwitch &&
            !controllers_OptionsController_OptionsController.state.allowUnsupportedChain &&
            !ConnectionController_ConnectionController.state.wcBasic) {
            ChainController_ChainController.showUnsupportedChainUI();
        }
    },
    addCaipNetwork(caipNetwork) {
        if (!caipNetwork) {
            return;
        }
        const chain = ChainController_state.chains.get(caipNetwork.chainNamespace);
        if (chain) {
            chain?.caipNetworks?.push(caipNetwork);
        }
    },
    async switchActiveNamespace(namespace) {
        if (!namespace) {
            return;
        }
        const isDifferentChain = namespace !== ChainController_ChainController.state.activeChain;
        const caipNetworkOfNamespace = ChainController_ChainController.getNetworkData(namespace)?.caipNetwork;
        const firstNetworkWithChain = ChainController_ChainController.getCaipNetworkByNamespace(namespace, caipNetworkOfNamespace?.id);
        if (isDifferentChain && firstNetworkWithChain) {
            await ChainController_ChainController.switchActiveNetwork(firstNetworkWithChain);
        }
    },
    async switchActiveNetwork(network, { throwOnFailure = false } = {}) {
        const namespace = ChainController_ChainController.state.activeChain;
        if (!namespace) {
            throw new Error('ChainController:switchActiveNetwork - namespace is required');
        }
        const isAuthProvider = ProviderController.getProviderId(ChainController_state.activeChain) === 'AUTH';
        const namespaceAddress = ChainController_ChainController.getAccountData(namespace)?.address;
        const isAuthSupported = esm_src_utils_ConstantsUtil_ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(network.chainNamespace);
        try {
            // If connected to the namespace and switching on same namespace, we should notify the wallet
            if ((namespaceAddress && network.chainNamespace === namespace) ||
                (isAuthProvider && isAuthSupported)) {
                const adapter = AdapterController.get(network.chainNamespace);
                if (!adapter) {
                    throw new Error('Adapter not found');
                }
                await adapter.switchNetwork({ caipNetwork: network });
            }
            ChainController_ChainController.setActiveCaipNetwork(network);
        }
        catch (error) {
            if (throwOnFailure) {
                throw error;
            }
        }
        EventsController_EventsController.sendEvent({
            type: 'track',
            event: 'SWITCH_NETWORK',
            properties: { network: network.caipNetworkId }
        });
    },
    getConnectionControllerClient(_chain) {
        const chain = _chain || ChainController_state.activeChain;
        if (!chain) {
            throw new Error('Chain is required to get connection controller client');
        }
        const chainAdapter = ChainController_state.chains.get(chain);
        if (!chainAdapter?.connectionControllerClient) {
            throw new Error('ConnectionController client not set');
        }
        return chainAdapter.connectionControllerClient;
    },
    getNetworkProp(key, namespace) {
        const chainNetworkState = ChainController_state.chains.get(namespace)?.networkState;
        if (!chainNetworkState) {
            return undefined;
        }
        return chainNetworkState[key];
    },
    getRequestedCaipNetworks(chainToFilter) {
        const adapter = ChainController_state.chains.get(chainToFilter);
        const { approvedCaipNetworkIds = [], requestedCaipNetworks = [] } = adapter?.networkState || {};
        const sortedNetworks = utils_CoreHelperUtil_CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        const filteredNetworks = sortedNetworks.filter(network => network?.id);
        return filteredNetworks;
    },
    getAllRequestedCaipNetworks() {
        const requestedCaipNetworks = [];
        ChainController_state.chains.forEach(chainAdapter => {
            if (!chainAdapter.namespace) {
                throw new Error('ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace');
            }
            const caipNetworks = ChainController_ChainController.getRequestedCaipNetworks(chainAdapter.namespace);
            requestedCaipNetworks.push(...caipNetworks);
        });
        return requestedCaipNetworks;
    },
    setRequestedCaipNetworks(caipNetworks, chain) {
        ChainController_ChainController.setAdapterNetworkState(chain, { requestedCaipNetworks: caipNetworks });
        const allRequestedCaipNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
        const namespaces = allRequestedCaipNetworks.map(network => network.chainNamespace);
        const uniqueNamespaces = Array.from(new Set(namespaces));
        ConnectorController_ConnectorController.filterByNamespaces(uniqueNamespaces);
    },
    getAllApprovedCaipNetworkIds() {
        const approvedCaipNetworkIds = [];
        ChainController_state.chains.forEach(chainAdapter => {
            if (!chainAdapter.namespace) {
                throw new Error('ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace');
            }
            const approvedIds = ChainController_ChainController.getApprovedCaipNetworkIds(chainAdapter.namespace);
            approvedCaipNetworkIds.push(...approvedIds);
        });
        return approvedCaipNetworkIds;
    },
    getActiveCaipNetwork(chainNamespace) {
        if (chainNamespace) {
            return ChainController_state.chains.get(chainNamespace)?.networkState?.caipNetwork;
        }
        return ChainController_state.activeCaipNetwork;
    },
    getActiveCaipAddress() {
        return ChainController_state.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(namespace) {
        const adapter = ChainController_state.chains.get(namespace);
        const approvedCaipNetworkIds = adapter?.networkState?.approvedCaipNetworkIds || [];
        return approvedCaipNetworkIds;
    },
    setApprovedCaipNetworksData(namespace, params) {
        ChainController_ChainController.setAdapterNetworkState(namespace, params);
    },
    checkIfSupportedNetwork(namespace, caipNetworkId) {
        const activeCaipNetworkId = caipNetworkId || ChainController_state.activeCaipNetwork?.caipNetworkId;
        const requestedCaipNetworks = ChainController_ChainController.getRequestedCaipNetworks(namespace);
        if (!requestedCaipNetworks.length) {
            return true;
        }
        return requestedCaipNetworks?.some(network => network.caipNetworkId === activeCaipNetworkId);
    },
    checkIfSupportedChainId(chainId) {
        if (!ChainController_state.activeChain) {
            return true;
        }
        const requestedCaipNetworks = ChainController_ChainController.getRequestedCaipNetworks(ChainController_state.activeChain);
        return requestedCaipNetworks?.some(network => network.id === chainId);
    },
    checkIfSmartAccountEnabled() {
        const networkId = NetworkUtil.caipNetworkIdToNumber(ChainController_state.activeCaipNetwork?.caipNetworkId);
        const activeChain = ChainController_state.activeChain;
        if (!activeChain || !networkId) {
            return false;
        }
        const smartAccountEnabledNetworks = W3mFrameStorage.get(W3mFrameConstants_W3mFrameConstants.SMART_ACCOUNT_ENABLED_NETWORKS)?.split(',') || [];
        return Boolean(smartAccountEnabledNetworks?.includes(networkId.toString()));
    },
    showUnsupportedChainUI() {
        ModalController_ModalController.open({ view: 'UnsupportedChain' });
    },
    checkIfNamesSupported() {
        const activeCaipNetwork = ChainController_state.activeCaipNetwork;
        return Boolean(activeCaipNetwork?.chainNamespace &&
            dist_esm_src_utils_ConstantsUtil_ConstantsUtil.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(activeCaipNetwork.chainNamespace));
    },
    resetNetwork(namespace) {
        ChainController_ChainController.setAdapterNetworkState(namespace, {
            approvedCaipNetworkIds: undefined,
            supportsAllNetworks: true
        });
    },
    resetAccount(chain) {
        const chainToWrite = chain;
        if (!chainToWrite) {
            throw new Error('Chain is required to set account prop');
        }
        const currentAccountType = ChainController_ChainController.state.chains.get(chainToWrite)?.accountState?.preferredAccountType;
        const optionsAccountType = controllers_OptionsController_OptionsController.state.defaultAccountTypes[chainToWrite];
        ChainController_state.activeCaipAddress = undefined;
        ChainController_ChainController.setChainAccountData(chainToWrite, {
            smartAccountDeployed: false,
            currentTab: 0,
            caipAddress: undefined,
            address: undefined,
            balance: undefined,
            balanceSymbol: undefined,
            profileName: undefined,
            profileImage: undefined,
            addressExplorerUrl: undefined,
            tokenBalance: [],
            connectedWalletInfo: undefined,
            preferredAccountType: optionsAccountType || currentAccountType,
            socialProvider: undefined,
            socialWindow: undefined,
            farcasterUrl: undefined,
            user: undefined,
            status: 'disconnected'
        });
        ConnectorController_ConnectorController.removeConnectorId(chainToWrite);
    },
    setIsSwitchingNamespace(isSwitchingNamespace) {
        ChainController_state.isSwitchingNamespace = isSwitchingNamespace;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
        const availableChains = [];
        let firstCaipNetwork = undefined;
        ChainController_state.chains.forEach(chain => {
            if (esm_src_utils_ConstantsUtil_ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(ns => ns === chain.namespace)) {
                if (chain.namespace) {
                    availableChains.push(chain.namespace);
                }
            }
        });
        if (availableChains.length > 0) {
            const firstAvailableChain = availableChains[0];
            firstCaipNetwork = firstAvailableChain
                ? ChainController_state.chains.get(firstAvailableChain)?.caipNetworks?.[0]
                : undefined;
            return firstCaipNetwork;
        }
        return undefined;
    },
    getAccountData(chainNamespace) {
        const namespace = chainNamespace || ChainController_state.activeChain;
        if (!namespace) {
            return undefined;
        }
        return ChainController_ChainController.state.chains.get(namespace)?.accountState;
    },
    getNetworkData(chainNamespace) {
        const namespace = chainNamespace || ChainController_state.activeChain;
        if (!namespace) {
            return undefined;
        }
        return ChainController_ChainController.state.chains.get(namespace)?.networkState;
    },
    getCaipNetworkByNamespace(chainNamespace, chainId) {
        if (!chainNamespace) {
            return undefined;
        }
        const chain = ChainController_ChainController.state.chains.get(chainNamespace);
        const byChainId = chain?.caipNetworks?.find(network => network.id.toString() === chainId?.toString());
        if (byChainId) {
            return byChainId;
        }
        return chain?.networkState?.caipNetwork || chain?.caipNetworks?.[0];
    },
    /**
     * Get the requested CaipNetwork IDs for a given namespace. If namespace is not provided, all requested CaipNetwork IDs will be returned
     * @param namespace - The namespace to get the requested CaipNetwork IDs for
     * @returns The requested CaipNetwork IDs
     */
    getRequestedCaipNetworkIds() {
        const namespace = ConnectorController_ConnectorController.state.filterByNamespace;
        const chains = namespace ? [ChainController_state.chains.get(namespace)] : Array.from(ChainController_state.chains.values());
        return chains
            .flatMap(chain => chain?.caipNetworks || [])
            .map(caipNetwork => caipNetwork.caipNetworkId);
    },
    getCaipNetworks(namespace) {
        if (namespace) {
            return ChainController_ChainController.getRequestedCaipNetworks(namespace);
        }
        return ChainController_ChainController.getAllRequestedCaipNetworks();
    },
    getCaipNetworkById(id, namespace) {
        return ChainController_controller
            .getCaipNetworks(namespace)
            .find(n => n.id.toString() === id.toString() || n.caipNetworkId.toString() === id.toString());
    },
    setLastConnectedSIWECaipNetwork(network) {
        ChainController_state.lastConnectedSIWECaipNetwork = network;
    },
    getLastConnectedSIWECaipNetwork() {
        return ChainController_state.lastConnectedSIWECaipNetwork;
    },
    async fetchTokenBalance(onError) {
        const accountState = ChainController_ChainController.getAccountData();
        if (!accountState) {
            return [];
        }
        const chainId = ChainController_ChainController.state.activeCaipNetwork?.caipNetworkId;
        const chain = ChainController_ChainController.state.activeCaipNetwork?.chainNamespace;
        const caipAddress = ChainController_ChainController.state.activeCaipAddress;
        const address = caipAddress ? utils_CoreHelperUtil_CoreHelperUtil.getPlainAddress(caipAddress) : undefined;
        ChainController_ChainController.setAccountProp('balanceLoading', true, chain);
        if (accountState.lastRetry &&
            !utils_CoreHelperUtil_CoreHelperUtil.isAllowedRetry(accountState.lastRetry, 30 * dist_esm_src_utils_ConstantsUtil_ConstantsUtil.ONE_SEC_MS)) {
            ChainController_ChainController.setAccountProp('balanceLoading', false, chain);
            return [];
        }
        try {
            if (address && chainId && chain) {
                const balance = await BalanceUtil_BalanceUtil.getMyTokensWithBalance();
                ChainController_ChainController.setAccountProp('tokenBalance', balance, chain);
                ChainController_ChainController.setAccountProp('lastRetry', undefined, chain);
                ChainController_ChainController.setAccountProp('balanceLoading', false, chain);
                return balance;
            }
        }
        catch (error) {
            ChainController_ChainController.setAccountProp('lastRetry', Date.now(), chain);
            onError?.(error);
            SnackController_SnackController.showError('Token Balance Unavailable');
        }
        finally {
            ChainController_ChainController.setAccountProp('balanceLoading', false, chain);
        }
        return [];
    },
    isCaipNetworkDisabled(network) {
        const networkNamespace = network.chainNamespace;
        const isNextNamespaceConnected = Boolean(ChainController_ChainController.getAccountData(networkNamespace)?.caipAddress);
        const approvedCaipNetworkIds = ChainController_ChainController.getAllApprovedCaipNetworkIds();
        const shouldSupportAllNetworks = ChainController_ChainController.getNetworkProp('supportsAllNetworks', networkNamespace) !== false;
        const connectorId = ConnectorController_ConnectorController.getConnectorId(networkNamespace);
        const authConnector = ConnectorController_ConnectorController.getAuthConnector();
        const isConnectedWithAuth = connectorId === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH && authConnector;
        if (!isNextNamespaceConnected || shouldSupportAllNetworks || isConnectedWithAuth) {
            return false;
        }
        return !approvedCaipNetworkIds?.includes(network.caipNetworkId);
    }
};
// Export the controller wrapped with our error boundary
const ChainController_ChainController = utils_withErrorBoundary_withErrorBoundary(ChainController_controller);
//# sourceMappingURL=ChainController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
/* unused harmony import specifier */ var CommonConstantsUtil;
/* unused harmony import specifier */ var ChainControllerUtil_ChainController;
/* unused harmony import specifier */ var ChainControllerUtil_ConnectorControllerUtil;




/**
 * Returns the array of chains to disconnect from the connector with the given namespace.
 * If no namespace is provided, it returns all chains.
 * @param namespace - The namespace of the connector to disconnect from.
 * @returns An array of chains to disconnect.
 */
function getChainsToDisconnect(namespace) {
    const namespaces = Array.from(ChainControllerUtil_ChainController.state.chains.keys());
    let chains = [];
    if (namespace) {
        chains.push([namespace, ChainControllerUtil_ChainController.state.chains.get(namespace)]);
        if (ChainControllerUtil_ConnectorControllerUtil.checkNamespaceConnectorId(namespace, CommonConstantsUtil.CONNECTOR_ID.WALLET_CONNECT)) {
            namespaces.forEach(ns => {
                if (ns !== namespace &&
                    ChainControllerUtil_ConnectorControllerUtil.checkNamespaceConnectorId(ns, CommonConstantsUtil.CONNECTOR_ID.WALLET_CONNECT)) {
                    chains.push([ns, ChainControllerUtil_ChainController.state.chains.get(ns)]);
                }
            });
        }
        else if (ChainControllerUtil_ConnectorControllerUtil.checkNamespaceConnectorId(namespace, CommonConstantsUtil.CONNECTOR_ID.AUTH)) {
            namespaces.forEach(ns => {
                if (ns !== namespace &&
                    ChainControllerUtil_ConnectorControllerUtil.checkNamespaceConnectorId(ns, CommonConstantsUtil.CONNECTOR_ID.AUTH)) {
                    chains.push([ns, ChainControllerUtil_ChainController.state.chains.get(ns)]);
                }
            });
        }
    }
    else {
        chains = Array.from(ChainControllerUtil_ChainController.state.chains.entries());
    }
    return chains;
}
/**
 * Get the active network token address
 * @returns The active network token address
 */
function getActiveNetworkTokenAddress() {
    const namespace = ChainController_ChainController.state.activeCaipNetwork?.chainNamespace || 'eip155';
    const chainId = ChainController_ChainController.state.activeCaipNetwork?.id || 1;
    const address = dist_esm_src_utils_ConstantsUtil_ConstantsUtil.NATIVE_TOKEN_ADDRESS[namespace];
    return `${namespace}:${chainId}:${address}`;
}
/**
 * Get the native token address for a given namespace
 * @param namespace - The namespace of the native token
 * @returns The native token address
 */
function getNativeTokenAddress(namespace) {
    return dist_esm_src_utils_ConstantsUtil_ConstantsUtil.NATIVE_TOKEN_ADDRESS[namespace];
}
/**
 * Get the preferred account type for a given namespace
 * @param namespace - The namespace of the account
 * @returns The preferred account type
 */
function getPreferredAccountType(namespace) {
    const preferredAccountType = ChainController_ChainController.getAccountData(namespace)?.preferredAccountType;
    return preferredAccountType;
}
/**
 * Get the active CAIP network for a given chain namespace, if no namespace is provided, it returns the active CAIP network
 * @param chainNamespace - The chain namespace to get the active CAIP network for
 * @returns The active CAIP network
 */
function getActiveCaipNetwork(chainNamespace) {
    if (chainNamespace) {
        return ChainControllerUtil_ChainController.state.chains.get(chainNamespace)?.networkState?.caipNetwork;
    }
    return ChainControllerUtil_ChainController.state.activeCaipNetwork;
}
//# sourceMappingURL=ChainControllerUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-common/dist/esm/src/utils/HelpersUtil.js
const HelpersUtil = {
    isLowerCaseMatch(str1, str2) {
        return str1?.toLowerCase() === str2?.toLowerCase();
    }
};
//# sourceMappingURL=HelpersUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/WalletUtil.js









const WalletUtil = {
    filterOutDuplicatesByRDNS(wallets) {
        const connectors = controllers_OptionsController_OptionsController.state.enableEIP6963
            ? ConnectorController_ConnectorController.state.connectors
            : [];
        const recent = StorageUtil_StorageUtil.getRecentWallets();
        const connectorRDNSs = connectors
            .map(connector => connector.info?.rdns)
            .filter(Boolean);
        const recentRDNSs = recent.map(wallet => wallet.rdns).filter(Boolean);
        const allRDNSs = connectorRDNSs.concat(recentRDNSs);
        if (allRDNSs.includes('io.metamask.mobile') && utils_CoreHelperUtil_CoreHelperUtil.isMobile()) {
            const index = allRDNSs.indexOf('io.metamask.mobile');
            allRDNSs[index] = 'io.metamask';
        }
        const filtered = wallets.filter(wallet => {
            // Check RDNS match first
            if (wallet?.rdns && allRDNSs.includes(String(wallet.rdns))) {
                return false;
            }
            // Some wallets don't have RDNS, so we need to check if the name matches a connector name
            if (!wallet?.rdns) {
                const hasMatchingConnectorName = connectors.some(connector => connector.name === wallet.name);
                if (hasMatchingConnectorName) {
                    return false;
                }
            }
            return true;
        });
        return filtered;
    },
    filterOutDuplicatesByIds(wallets) {
        const connectors = ConnectorController_ConnectorController.state.connectors.filter(connector => connector.type === 'ANNOUNCED' ||
            connector.type === 'INJECTED' ||
            connector.type === 'MULTI_CHAIN');
        const recent = StorageUtil_StorageUtil.getRecentWallets();
        const connectorIds = connectors.map(connector => connector.explorerId || connector.explorerWallet?.id || connector.id);
        const recentIds = recent.map(wallet => wallet.id);
        const allIds = connectorIds.concat(recentIds);
        const filtered = wallets.filter(wallet => !allIds.includes(wallet?.id));
        return filtered;
    },
    filterOutDuplicateWallets(wallets) {
        const uniqueByRDNS = this.filterOutDuplicatesByRDNS(wallets);
        const uniqueWallets = this.filterOutDuplicatesByIds(uniqueByRDNS);
        return uniqueWallets;
    },
    /**
     * Marks wallets as installed based on available connectors and sorts them
     * according to both installation status and featuredWalletIds order.
     *
     * @param wallets - Array of wallets to process
     * @returns Array of wallets marked as installed and sorted by priority
     */
    markWalletsAsInstalled(wallets) {
        const { connectors } = ConnectorController_ConnectorController.state;
        const { featuredWalletIds } = controllers_OptionsController_OptionsController.state;
        const installedWalletRdnsMap = connectors
            .filter(connector => connector.type === 'ANNOUNCED')
            .reduce((rdnsMap, connector) => {
            if (!connector.info?.rdns) {
                return rdnsMap;
            }
            rdnsMap[connector.info.rdns] = true;
            return rdnsMap;
        }, {});
        // Mark each wallet as installed if its RDNS exists in the installed connectors
        const walletsWithInstallationStatus = wallets.map(wallet => ({
            ...wallet,
            installed: Boolean(wallet.rdns) && Boolean(installedWalletRdnsMap[wallet.rdns ?? ''])
        }));
        const sortedWallets = walletsWithInstallationStatus.sort((walletA, walletB) => {
            const installationComparison = Number(walletB.installed) - Number(walletA.installed);
            if (installationComparison !== 0) {
                return installationComparison;
            }
            if (featuredWalletIds?.length) {
                const walletAFeaturedIndex = featuredWalletIds.indexOf(walletA.id);
                const walletBFeaturedIndex = featuredWalletIds.indexOf(walletB.id);
                if (walletAFeaturedIndex !== -1 && walletBFeaturedIndex !== -1) {
                    return walletAFeaturedIndex - walletBFeaturedIndex;
                }
                // WalletA is featured, place it first
                if (walletAFeaturedIndex !== -1) {
                    return -1;
                }
                // WalletB is featured, place it first
                if (walletBFeaturedIndex !== -1) {
                    return 1;
                }
            }
            return 0;
        });
        return sortedWallets;
    },
    getConnectOrderMethod(_features, _connectors) {
        const connectMethodOrder = _features?.connectMethodsOrder || controllers_OptionsController_OptionsController.state.features?.connectMethodsOrder;
        const connectors = _connectors || ConnectorController_ConnectorController.state.connectors;
        if (connectMethodOrder) {
            return connectMethodOrder;
        }
        const { injected, announced } = ConnectorUtil.getConnectorsByType(connectors, ApiController_ApiController.state.recommended, ApiController_ApiController.state.featured);
        const shownInjected = injected.filter(ConnectorUtil.showConnector);
        const shownAnnounced = announced.filter(ConnectorUtil.showConnector);
        if (shownInjected.length || shownAnnounced.length) {
            return ['wallet', 'email', 'social'];
        }
        return dist_esm_src_utils_ConstantsUtil_ConstantsUtil.DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded(wallet) {
        const isRDNSExcluded = Boolean(wallet.rdns) && ApiController_ApiController.state.excludedWallets.some(w => w.rdns === wallet.rdns);
        const isNameExcluded = Boolean(wallet.name) &&
            ApiController_ApiController.state.excludedWallets.some(w => HelpersUtil.isLowerCaseMatch(w.name, wallet.name));
        return isRDNSExcluded || isNameExcluded;
    },
    markWalletsWithDisplayIndex(wallets) {
        return wallets.map((w, index) => ({ ...w, display_index: index }));
    },
    /**
     * Filters wallets based on WalletConnect support and platform requirements.
     *
     * On mobile only wallets with WalletConnect support and some mandatory wallets are shown.
     * On desktop with Appkit Core only wallets with WalletConnect support are shown.
     * On desktop with Appkit all wallets are shown.
     *
     * @param wallets - Array of wallets to filter
     * @returns Filtered array of wallets based on WalletConnect support and platform
     */
    filterWalletsByWcSupport(wallets) {
        if (ConnectionController_ConnectionController.state.wcBasic) {
            return wallets.filter(wallet => wallet.supports_wc);
        }
        if (utils_CoreHelperUtil_CoreHelperUtil.isMobile()) {
            return wallets.filter(wallet => wallet.supports_wc || dist_esm_src_utils_ConstantsUtil_ConstantsUtil.MANDATORY_WALLET_IDS_ON_MOBILE.includes(wallet.id));
        }
        return wallets;
    },
    getWalletConnectWallets(allWallets) {
        const wallets = [...ApiController_ApiController.state.featured, ...ApiController_ApiController.state.recommended];
        if (ApiController_ApiController.state.filteredWallets?.length > 0) {
            wallets.push(...ApiController_ApiController.state.filteredWallets);
        }
        else {
            wallets.push(...allWallets);
        }
        const uniqueWallets = utils_CoreHelperUtil_CoreHelperUtil.uniqueBy(wallets, 'id');
        const walletsWithInstalled = WalletUtil.markWalletsAsInstalled(uniqueWallets);
        const walletsByWcSupport = WalletUtil.filterWalletsByWcSupport(walletsWithInstalled);
        return WalletUtil.markWalletsWithDisplayIndex(walletsByWcSupport);
    }
};
//# sourceMappingURL=WalletUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectorUtil.js










const ConnectorUtil = {
    getConnectorsByType(connectors, recommended, featured) {
        const { customWallets } = controllers_OptionsController_OptionsController.state;
        const recent = StorageUtil_StorageUtil.getRecentWallets();
        const filteredRecommended = WalletUtil.filterOutDuplicateWallets(recommended);
        const filteredFeatured = WalletUtil.filterOutDuplicateWallets(featured);
        const multiChain = connectors.filter(connector => connector.type === 'MULTI_CHAIN');
        const announced = connectors.filter(connector => connector.type === 'ANNOUNCED');
        const injected = connectors.filter(connector => connector.type === 'INJECTED');
        const external = connectors.filter(connector => connector.type === 'EXTERNAL');
        return {
            custom: customWallets,
            recent,
            external,
            multiChain,
            announced,
            injected,
            recommended: filteredRecommended,
            featured: filteredFeatured
        };
    },
    showConnector(connector) {
        const rdns = connector.info?.rdns;
        const isRDNSExcluded = Boolean(rdns) &&
            ApiController_ApiController.state.excludedWallets.some(wallet => Boolean(wallet.rdns) && wallet.rdns === rdns);
        const isNameExcluded = Boolean(connector.name) &&
            ApiController_ApiController.state.excludedWallets.some(wallet => HelpersUtil.isLowerCaseMatch(wallet.name, connector.name));
        if (connector.type === 'INJECTED') {
            const isBrowserWallet = connector.name === 'Browser Wallet';
            if (isBrowserWallet) {
                if (!utils_CoreHelperUtil_CoreHelperUtil.isMobile()) {
                    return false;
                }
                if (utils_CoreHelperUtil_CoreHelperUtil.isMobile() && !rdns && !ConnectionController_ConnectionController.checkInstalled()) {
                    return false;
                }
            }
            if (isRDNSExcluded || isNameExcluded) {
                return false;
            }
        }
        if ((connector.type === 'ANNOUNCED' || connector.type === 'EXTERNAL') &&
            (isRDNSExcluded || isNameExcluded)) {
            return false;
        }
        return true;
    },
    /**
     * Returns true if the user is connected to a WalletConnect connector in the any of the available namespaces.
     * @returns boolean
     */
    getIsConnectedWithWC() {
        const chains = Array.from(ChainController_ChainController.state.chains.values());
        const isConnectedWithWC = chains.some(chain => {
            const connectorId = ConnectorController_ConnectorController.getConnectorId(chain.namespace);
            return connectorId === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
        });
        return isConnectedWithWC;
    },
    /**
     * Returns the connector positions in the order of the user's preference.
     * @returns ConnectorTypeOrder[]
     */
    getConnectorTypeOrder({ recommended, featured, custom, recent, announced, injected, multiChain, external, overriddenConnectors = controllers_OptionsController_OptionsController.state.features?.connectorTypeOrder ?? [] }) {
        const allConnectors = [
            { type: 'walletConnect', isEnabled: true },
            { type: 'recent', isEnabled: recent.length > 0 },
            { type: 'injected', isEnabled: [...injected, ...announced, ...multiChain].length > 0 },
            { type: 'featured', isEnabled: featured.length > 0 },
            { type: 'custom', isEnabled: custom && custom.length > 0 },
            { type: 'external', isEnabled: external.length > 0 },
            { type: 'recommended', isEnabled: recommended.length > 0 }
        ];
        const enabledConnectors = allConnectors.filter(option => option.isEnabled);
        const enabledConnectorTypes = new Set(enabledConnectors.map(option => option.type));
        const prioritizedConnectors = overriddenConnectors
            .filter(type => enabledConnectorTypes.has(type))
            .map(type => ({ type, isEnabled: true }));
        const remainingConnectors = enabledConnectors.filter(({ type: enabledConnectorType }) => {
            const hasPrioritizedConnector = prioritizedConnectors.some(({ type: prioritizedConnectorType }) => prioritizedConnectorType === enabledConnectorType);
            return !hasPrioritizedConnector;
        });
        return Array.from(new Set([...prioritizedConnectors, ...remainingConnectors].map(({ type }) => type)));
    },
    sortConnectorsByExplorerWallet(connectors) {
        return [...connectors].sort((a, b) => {
            if (a.explorerWallet && b.explorerWallet) {
                return (a.explorerWallet.order ?? 0) - (b.explorerWallet.order ?? 0);
            }
            if (a.explorerWallet) {
                return -1;
            }
            if (b.explorerWallet) {
                return 1;
            }
            return 0;
        });
    },
    /**
     * Returns the priority of a connector. Base Account has highest priority, followed by Coinbase then the rest.
     *
     * This is needed because Base Account and Coinbase share the same explorer wallet ID.
     * Without prioritization, selecting Base Account could incorrectly trigger the Coinbase Wallet extension.
     *
     * @param connector - The connector to get the priority of.
     * @returns The priority of the connector.
     */
    getPriority(connector) {
        if (connector.id === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT) {
            return 0;
        }
        if (connector.id === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE ||
            connector.id === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK) {
            return 1;
        }
        return 2;
    },
    /**
     * Sorts connectors by priority.
     * @param connectors - The connectors to sort.
     * @returns Sorted connectors.
     */
    sortConnectorsByPriority(connectors) {
        return [...connectors].sort((a, b) => ConnectorUtil.getPriority(a) - ConnectorUtil.getPriority(b));
    },
    getAuthName({ email, socialUsername, socialProvider }) {
        if (socialUsername) {
            if (socialProvider && socialProvider === 'discord' && socialUsername.endsWith('0')) {
                return socialUsername.slice(0, -1);
            }
            return socialUsername;
        }
        return email.length > 30 ? `${email.slice(0, -3)}...` : email;
    },
    async fetchProviderData(connector) {
        try {
            if (connector.name === 'Browser Wallet' && !utils_CoreHelperUtil_CoreHelperUtil.isMobile()) {
                return { accounts: [], chainId: undefined };
            }
            if (connector.id === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH) {
                return { accounts: [], chainId: undefined };
            }
            const [accounts, chainId] = await Promise.all([
                connector.provider?.request({ method: 'eth_accounts' }),
                connector.provider
                    ?.request({ method: 'eth_chainId' })
                    .then(hexChainId => Number(hexChainId))
            ]);
            return { accounts, chainId };
        }
        catch (err) {
            // eslint-disable-next-line no-console
            console.warn(`Failed to fetch provider data for ${connector.name}`, err);
            return { accounts: [], chainId: undefined };
        }
    },
    /**
     * Filter out duplicate custom wallets by RDNS
     * @param wallets
     */
    getFilteredCustomWallets(wallets) {
        const recent = StorageUtil_StorageUtil.getRecentWallets();
        const connectorRDNSs = ConnectorController_ConnectorController.state.connectors
            .map(connector => connector.info?.rdns)
            .filter(Boolean);
        const recentRDNSs = recent.map(wallet => wallet.rdns).filter(Boolean);
        const allRDNSs = connectorRDNSs.concat(recentRDNSs);
        if (allRDNSs.includes('io.metamask.mobile') && utils_CoreHelperUtil_CoreHelperUtil.isMobile()) {
            const index = allRDNSs.indexOf('io.metamask.mobile');
            allRDNSs[index] = 'io.metamask';
        }
        const filtered = wallets.filter(wallet => !allRDNSs.includes(String(wallet?.rdns)));
        return filtered;
    },
    hasWalletConnector(wallet) {
        return ConnectorController_ConnectorController.state.connectors.some(connector => connector.id === wallet.id || connector.name === wallet.name);
    },
    isWalletCompatibleWithCurrentChain(wallet) {
        const currentNamespace = ChainController_ChainController.state.activeChain;
        if (currentNamespace && wallet.chains) {
            return wallet.chains.some(c => {
                const chainNamespace = c.split(':')[0];
                return currentNamespace === chainNamespace;
            });
        }
        return true;
    },
    getFilteredRecentWallets() {
        const recentWallets = StorageUtil_StorageUtil.getRecentWallets();
        const filteredRecentWallets = recentWallets
            .filter(wallet => !WalletUtil.isExcluded(wallet))
            .filter(wallet => !this.hasWalletConnector(wallet))
            .filter(wallet => this.isWalletCompatibleWithCurrentChain(wallet));
        return filteredRecentWallets;
    },
    getCappedRecommendedWallets(wallets) {
        const { connectors } = ConnectorController_ConnectorController.state;
        const { customWallets, featuredWalletIds } = controllers_OptionsController_OptionsController.state;
        const wcConnector = connectors.find(c => c.id === 'walletConnect');
        const injectedConnectors = connectors.filter(c => c.type === 'INJECTED' || c.type === 'ANNOUNCED' || c.type === 'MULTI_CHAIN');
        if (!wcConnector && !injectedConnectors.length && !customWallets?.length) {
            return [];
        }
        const isEmailEnabled = OptionsUtil_OptionsUtil.isEmailEnabled();
        const isSocialsEnabled = OptionsUtil_OptionsUtil.isSocialsEnabled();
        const injectedWallets = injectedConnectors.filter(i => i.name !== 'Browser Wallet' && i.name !== 'WalletConnect');
        const featuredWalletAmount = featuredWalletIds?.length || 0;
        const customWalletAmount = customWallets?.length || 0;
        const injectedWalletAmount = injectedWallets.length || 0;
        const emailWalletAmount = isEmailEnabled ? 1 : 0;
        const socialWalletAmount = isSocialsEnabled ? 1 : 0;
        const walletsDisplayed = featuredWalletAmount +
            customWalletAmount +
            injectedWalletAmount +
            emailWalletAmount +
            socialWalletAmount;
        const DISPLAYED_WALLETS_AMOUNT = 4;
        const sliceAmount = Math.max(0, DISPLAYED_WALLETS_AMOUNT - walletsDisplayed);
        if (sliceAmount <= 0) {
            return [];
        }
        const filtered = WalletUtil.filterOutDuplicateWallets(wallets);
        return filtered.slice(0, sliceAmount);
    },
    processConnectorsByType(connectors, shouldFilter = true) {
        const sorted = ConnectorUtil.sortConnectorsByExplorerWallet([...connectors]);
        return shouldFilter ? sorted.filter(ConnectorUtil.showConnector) : sorted;
    },
    connectorList() {
        const byType = ConnectorUtil.getConnectorsByType(ConnectorController_ConnectorController.state.connectors, ApiController_ApiController.state.recommended, ApiController_ApiController.state.featured);
        // Build per-type lists with existing filtering/sorting rules
        const announced = this.processConnectorsByType(byType.announced.filter(c => c.id !== 'walletConnect'));
        const injected = this.processConnectorsByType(byType.injected);
        const multiChain = this.processConnectorsByType(byType.multiChain.filter(c => c.name !== 'WalletConnect'), false);
        const custom = byType.custom;
        const recent = byType.recent;
        const external = this.processConnectorsByType(byType.external.filter(c => c.id !== esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.COINBASE_SDK &&
            c.id !== esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT));
        const recommended = byType.recommended;
        const featured = byType.featured;
        const connectorTypeOrder = ConnectorUtil.getConnectorTypeOrder({
            custom,
            recent,
            announced,
            injected,
            multiChain,
            recommended,
            featured,
            external
        });
        const wcConnector = ConnectorController_ConnectorController.state.connectors.find(c => c.id === 'walletConnect');
        const isMobile = utils_CoreHelperUtil_CoreHelperUtil.isMobile();
        const items = [];
        for (const type of connectorTypeOrder) {
            switch (type) {
                case 'walletConnect': {
                    if (!isMobile && wcConnector) {
                        items.push({ kind: 'connector', subtype: 'walletConnect', connector: wcConnector });
                    }
                    break;
                }
                case 'recent': {
                    const filteredRecent = ConnectorUtil.getFilteredRecentWallets();
                    filteredRecent.forEach(w => items.push({ kind: 'wallet', subtype: 'recent', wallet: w }));
                    break;
                }
                case 'injected': {
                    multiChain.forEach(c => items.push({ kind: 'connector', subtype: 'multiChain', connector: c }));
                    announced.forEach(c => items.push({ kind: 'connector', subtype: 'announced', connector: c }));
                    injected.forEach(c => items.push({ kind: 'connector', subtype: 'injected', connector: c }));
                    break;
                }
                case 'featured': {
                    featured.forEach(w => items.push({ kind: 'wallet', subtype: 'featured', wallet: w }));
                    break;
                }
                case 'custom': {
                    const filteredCustom = ConnectorUtil.getFilteredCustomWallets(custom ?? []);
                    filteredCustom.forEach(w => items.push({ kind: 'wallet', subtype: 'custom', wallet: w }));
                    break;
                }
                case 'external': {
                    external.forEach(c => items.push({ kind: 'connector', subtype: 'external', connector: c }));
                    break;
                }
                case 'recommended': {
                    const cappedRecommended = ConnectorUtil.getCappedRecommendedWallets(recommended);
                    cappedRecommended.forEach(w => items.push({ kind: 'wallet', subtype: 'recommended', wallet: w }));
                    break;
                }
                default:
                    // eslint-disable-next-line no-console
                    console.warn(`Unknown connector type: ${type}`);
            }
        }
        return items;
    },
    hasInjectedConnectors() {
        return ConnectorController_ConnectorController.state.connectors.filter(c => (c.type === 'INJECTED' || c.type === 'ANNOUNCED' || c.type === 'MULTI_CHAIN') &&
            c.name !== 'Browser Wallet' &&
            c.name !== 'WalletConnect').length;
    }
};
//# sourceMappingURL=ConnectorUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js




// -- State --------------------------------------------- //
const ThemeController_state = (0,vanilla/* proxy */.BX)({
    themeMode: 'dark',
    themeVariables: {},
    w3mThemeVariables: undefined
});
// -- Controller ---------------------------------------- //
const ThemeController_controller = {
    state: ThemeController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(ThemeController_state, () => callback(ThemeController_state));
    },
    setThemeMode(themeMode) {
        ThemeController_state.themeMode = themeMode;
        try {
            const authConnector = ConnectorController_ConnectorController.getAuthConnector();
            if (authConnector) {
                const themeVariables = ThemeController_controller.getSnapshot().themeVariables;
                authConnector.provider.syncTheme({
                    themeMode,
                    themeVariables,
                    w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
                });
            }
        }
        catch {
            // eslint-disable-next-line no-console
            console.info('Unable to sync theme to auth connector');
        }
    },
    setThemeVariables(themeVariables) {
        ThemeController_state.themeVariables = { ...ThemeController_state.themeVariables, ...themeVariables };
        try {
            const authConnector = ConnectorController_ConnectorController.getAuthConnector();
            if (authConnector) {
                const themeVariablesSnapshot = ThemeController_controller.getSnapshot().themeVariables;
                authConnector.provider.syncTheme({
                    themeVariables: themeVariablesSnapshot,
                    w3mThemeVariables: getW3mThemeVariables(ThemeController_state.themeVariables, ThemeController_state.themeMode)
                });
            }
        }
        catch {
            // eslint-disable-next-line no-console
            console.info('Unable to sync theme to auth connector');
        }
    },
    getSnapshot() {
        return (0,vanilla/* snapshot */.P9)(ThemeController_state);
    }
};
// Export the controller wrapped with our error boundary
const ThemeController_ThemeController = utils_withErrorBoundary_withErrorBoundary(ThemeController_controller);
//# sourceMappingURL=ThemeController.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js















const defaultActiveConnectors = Object.fromEntries(AVAILABLE_NAMESPACES.map(namespace => [namespace, undefined]));
const defaultFilterByNamespaceMap = Object.fromEntries(AVAILABLE_NAMESPACES.map(namespace => [namespace, true]));
// -- State --------------------------------------------- //
const ConnectorController_state = (0,vanilla/* proxy */.BX)({
    allConnectors: [],
    connectors: [],
    activeConnector: undefined,
    filterByNamespace: undefined,
    activeConnectorIds: defaultActiveConnectors,
    filterByNamespaceMap: defaultFilterByNamespaceMap
});
// -- Controller ---------------------------------------- //
const ConnectorController_controller = {
    state: ConnectorController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(ConnectorController_state, () => {
            callback(ConnectorController_state);
        });
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(ConnectorController_state, key, callback);
    },
    initialize(namespaces) {
        namespaces.forEach(namespace => {
            const connectorId = StorageUtil_StorageUtil.getConnectedConnectorId(namespace);
            if (connectorId) {
                ConnectorController_ConnectorController.setConnectorId(connectorId, namespace);
            }
        });
    },
    setActiveConnector(connector) {
        if (connector) {
            ConnectorController_state.activeConnector = (0,vanilla/* ref */.KR)(connector);
        }
    },
    setConnectors(connectors) {
        const newConnectors = connectors.filter(newConnector => !ConnectorController_state.allConnectors.some(existingConnector => existingConnector.id === newConnector.id &&
            ConnectorController_ConnectorController.getConnectorName(existingConnector.name) ===
                ConnectorController_ConnectorController.getConnectorName(newConnector.name) &&
            existingConnector.chain === newConnector.chain));
        /**
         * We are reassigning the state of the proxy to a new array of new objects, ConnectorController can cause issues. So it is better to use ref in ConnectorController case.
         * Check more about proxy on https://valtio.dev/docs/api/basic/proxy#Gotchas
         * Check more about ref on https://valtio.dev/docs/api/basic/ref
         */
        newConnectors.forEach(connector => {
            if (connector.type !== 'MULTI_CHAIN') {
                ConnectorController_state.allConnectors.push((0,vanilla/* ref */.KR)(connector));
            }
        });
        const enabledNamespaces = ConnectorController_ConnectorController.getEnabledNamespaces();
        const connectorsFilteredByNamespaces = ConnectorController_ConnectorController.getEnabledConnectors(enabledNamespaces);
        ConnectorController_state.connectors = ConnectorController_ConnectorController.mergeMultiChainConnectors(connectorsFilteredByNamespaces);
    },
    filterByNamespaces(enabledNamespaces) {
        Object.keys(ConnectorController_state.filterByNamespaceMap).forEach(namespace => {
            ConnectorController_state.filterByNamespaceMap[namespace] = false;
        });
        enabledNamespaces.forEach(namespace => {
            ConnectorController_state.filterByNamespaceMap[namespace] = true;
        });
        ConnectorController_ConnectorController.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(namespace, enabled) {
        ConnectorController_state.filterByNamespaceMap[namespace] = enabled;
        ConnectorController_ConnectorController.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
        const enabledNamespaces = ConnectorController_ConnectorController.getEnabledNamespaces();
        const enabledConnectors = ConnectorController_ConnectorController.getEnabledConnectors(enabledNamespaces);
        const areAllNamespacesEnabled = ConnectorController_ConnectorController.areAllNamespacesEnabled();
        ConnectorController_state.connectors = ConnectorController_ConnectorController.mergeMultiChainConnectors(enabledConnectors);
        if (areAllNamespacesEnabled) {
            ApiController_ApiController.clearFilterByNamespaces();
        }
        else {
            ApiController_ApiController.filterByNamespaces(enabledNamespaces);
        }
    },
    getEnabledNamespaces() {
        return Object.entries(ConnectorController_state.filterByNamespaceMap)
            .filter(([_, enabled]) => enabled)
            .map(([namespace]) => namespace);
    },
    getEnabledConnectors(enabledNamespaces) {
        return ConnectorController_state.allConnectors.filter(connector => enabledNamespaces.includes(connector.chain));
    },
    areAllNamespacesEnabled() {
        return Object.values(ConnectorController_state.filterByNamespaceMap).every(enabled => enabled);
    },
    mergeMultiChainConnectors(connectors) {
        const connectorsByNameMap = ConnectorController_ConnectorController.generateConnectorMapByName(connectors);
        const mergedConnectors = [];
        connectorsByNameMap.forEach(keyConnectors => {
            const firstItem = keyConnectors[0];
            const isAuthConnector = firstItem?.id === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH;
            if (keyConnectors.length > 1 && firstItem) {
                mergedConnectors.push({
                    name: firstItem.name,
                    imageUrl: firstItem.imageUrl,
                    imageId: firstItem.imageId,
                    connectors: [...keyConnectors],
                    type: isAuthConnector ? 'AUTH' : 'MULTI_CHAIN',
                    // These values are just placeholders, we don't use them in multi-chain connector select screen
                    chain: 'eip155',
                    id: firstItem?.id || ''
                });
            }
            else if (firstItem) {
                mergedConnectors.push(firstItem);
            }
        });
        return mergedConnectors;
    },
    generateConnectorMapByName(connectors) {
        const connectorsByNameMap = new Map();
        connectors.forEach(connector => {
            const { name } = connector;
            const connectorName = ConnectorController_ConnectorController.getConnectorName(name);
            if (!connectorName) {
                return;
            }
            const connectorsByName = connectorsByNameMap.get(connectorName) || [];
            const haveSameConnector = connectorsByName.find(c => c.chain === connector.chain);
            if (!haveSameConnector) {
                connectorsByName.push(connector);
            }
            connectorsByNameMap.set(connectorName, connectorsByName);
        });
        return connectorsByNameMap;
    },
    getConnectorName(name) {
        if (!name) {
            return name;
        }
        const nameOverrideMap = {
            'Trust Wallet': 'Trust'
        };
        return nameOverrideMap[name] || name;
    },
    getUniqueConnectorsByName(connectors) {
        const uniqueConnectors = [];
        connectors.forEach(c => {
            if (!uniqueConnectors.find(uc => uc.chain === c.chain)) {
                uniqueConnectors.push(c);
            }
        });
        return uniqueConnectors;
    },
    addConnector(connector) {
        if (connector.id === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH) {
            const authConnector = connector;
            const optionsState = (0,vanilla/* snapshot */.P9)(controllers_OptionsController_OptionsController.state);
            const themeMode = ThemeController_ThemeController.getSnapshot().themeMode;
            const themeVariables = ThemeController_ThemeController.getSnapshot().themeVariables;
            authConnector?.provider?.syncDappData?.({
                metadata: optionsState.metadata,
                sdkVersion: optionsState.sdkVersion,
                projectId: optionsState.projectId,
                sdkType: optionsState.sdkType
            });
            authConnector?.provider?.syncTheme({
                themeMode,
                themeVariables,
                w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
            });
            ConnectorController_ConnectorController.setConnectors([connector]);
        }
        else {
            ConnectorController_ConnectorController.setConnectors([connector]);
        }
    },
    getAuthConnector(chainNamespace) {
        const activeNamespace = chainNamespace || ChainController_ChainController.state.activeChain;
        const authConnector = ConnectorController_state.connectors.find(c => c.id === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH);
        if (!authConnector) {
            return undefined;
        }
        if (authConnector?.connectors?.length) {
            const connector = authConnector.connectors.find(c => c.chain === activeNamespace);
            return connector;
        }
        return authConnector;
    },
    getAnnouncedConnectorRdns() {
        return ConnectorController_state.connectors.filter(c => c.type === 'ANNOUNCED').map(c => c.info?.rdns);
    },
    getConnectorById(id) {
        const sortedConnectors = ConnectorUtil.sortConnectorsByPriority(ConnectorController_state.allConnectors);
        return sortedConnectors.find(c => c.id === id);
    },
    getConnector({ id, namespace }) {
        const namespaceToUse = namespace || ChainController_ChainController.state.activeChain;
        const connectorsByNamespace = ConnectorController_state.allConnectors.filter(c => c.chain === namespaceToUse);
        const sortedConnectorsByNamespace = ConnectorUtil.sortConnectorsByPriority(connectorsByNamespace);
        const connector = sortedConnectorsByNamespace.find(c => c.id === id || c.explorerId === id);
        return connector;
    },
    syncIfAuthConnector(connector) {
        if (connector.id !== 'AUTH') {
            return;
        }
        const authConnector = connector;
        const optionsState = (0,vanilla/* snapshot */.P9)(controllers_OptionsController_OptionsController.state);
        const themeMode = ThemeController_ThemeController.getSnapshot().themeMode;
        const themeVariables = ThemeController_ThemeController.getSnapshot().themeVariables;
        authConnector?.provider?.syncDappData?.({
            metadata: optionsState.metadata,
            sdkVersion: optionsState.sdkVersion,
            sdkType: optionsState.sdkType,
            projectId: optionsState.projectId
        });
        authConnector.provider.syncTheme({
            themeMode,
            themeVariables,
            w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
        });
    },
    /**
     * Returns the connectors filtered by namespace.
     * @param namespace - The namespace to filter the connectors by.
     * @returns ConnectorWithProviders[].
     */
    getConnectorsByNamespace(namespace) {
        const namespaceConnectors = ConnectorController_state.allConnectors.filter(connector => connector.chain === namespace);
        return ConnectorController_ConnectorController.mergeMultiChainConnectors(namespaceConnectors);
    },
    canSwitchToSmartAccount(namespace) {
        const isSmartAccountEnabled = ChainController_ChainController.checkIfSmartAccountEnabled();
        return (isSmartAccountEnabled &&
            getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA);
    },
    selectWalletConnector(wallet) {
        const redirectView = RouterController_RouterController.state.data?.redirectView;
        const namespace = ChainController_ChainController.state.activeChain;
        const connector = namespace
            ? ConnectorController_ConnectorController.getConnector({ id: wallet.id, namespace })
            : undefined;
        MobileWalletUtil.handleMobileDeeplinkRedirect(connector?.explorerId || wallet.id, ChainController_ChainController.state.activeChain);
        if (connector) {
            RouterController_RouterController.push('ConnectingExternal', { connector, wallet, redirectView });
        }
        else {
            RouterController_RouterController.push('ConnectingWalletConnect', { wallet, redirectView });
        }
    },
    /**
     * Returns the connectors. If a namespace is provided, the connectors are filtered by namespace.
     * @param namespace - The namespace to filter the connectors by. If not provided, all connectors are returned.
     * @returns ConnectorWithProviders[].
     */
    getConnectors(namespace) {
        if (namespace) {
            return ConnectorController_ConnectorController.getConnectorsByNamespace(namespace);
        }
        return ConnectorController_ConnectorController.mergeMultiChainConnectors(ConnectorController_state.allConnectors);
    },
    /**
     * Sets the filter by namespace and updates the connectors.
     * @param namespace - The namespace to filter the connectors by.
     */
    setFilterByNamespace(namespace) {
        ConnectorController_state.filterByNamespace = namespace;
        ConnectorController_state.connectors = ConnectorController_ConnectorController.getConnectors(namespace);
        ApiController_ApiController.setFilterByNamespace(namespace);
    },
    setConnectorId(connectorId, namespace) {
        if (connectorId) {
            ConnectorController_state.activeConnectorIds = {
                ...ConnectorController_state.activeConnectorIds,
                [namespace]: connectorId
            };
            StorageUtil_StorageUtil.setConnectedConnectorId(namespace, connectorId);
        }
    },
    removeConnectorId(namespace) {
        ConnectorController_state.activeConnectorIds = {
            ...ConnectorController_state.activeConnectorIds,
            [namespace]: undefined
        };
        StorageUtil_StorageUtil.deleteConnectedConnectorId(namespace);
    },
    getConnectorId(namespace) {
        if (!namespace) {
            return undefined;
        }
        return ConnectorController_state.activeConnectorIds[namespace];
    },
    isConnected(namespace) {
        if (!namespace) {
            return Object.values(ConnectorController_state.activeConnectorIds).some(id => Boolean(id));
        }
        return Boolean(ConnectorController_state.activeConnectorIds[namespace]);
    },
    resetConnectorIds() {
        ConnectorController_state.activeConnectorIds = { ...defaultActiveConnectors };
    },
    extendConnectorsWithExplorerWallets(explorerWallets) {
        ConnectorController_state.allConnectors.forEach(connector => {
            const explorerWallet = explorerWallets.find(wallet => wallet.id === connector.id || (wallet.rdns && wallet.rdns === connector.info?.rdns));
            if (explorerWallet) {
                connector.explorerWallet = explorerWallet;
            }
        });
        const enabledNamespaces = ConnectorController_ConnectorController.getEnabledNamespaces();
        const enabledConnectors = ConnectorController_ConnectorController.getEnabledConnectors(enabledNamespaces);
        ConnectorController_state.connectors = ConnectorController_ConnectorController.mergeMultiChainConnectors(enabledConnectors);
    },
    /**
     * Opens the connect modal and waits until the user connects their wallet.
     * @param params - Connection parameters.
     * @returns Promise resolving to the connected wallet's CAIP address.
     */
    async connect(params = {}) {
        const { namespace } = params;
        ConnectorController_ConnectorController.setFilterByNamespace(namespace);
        RouterController_RouterController.push('Connect', {
            addWalletForNamespace: namespace
        });
        return new Promise((resolve, reject) => {
            if (namespace) {
                const unsubscribeChainController = ChainController_ChainController.subscribeChainProp('accountState', val => {
                    if (val?.caipAddress) {
                        resolve({ caipAddress: val?.caipAddress });
                        unsubscribeChainController();
                    }
                }, namespace);
                const unsubscribeModalController = ModalController_ModalController.subscribeKey('open', val => {
                    if (!val) {
                        reject(new Error('Modal closed'));
                        unsubscribeModalController();
                    }
                });
            }
            else {
                const unsubscribeChainController = ChainController_ChainController.subscribeKey('activeCaipAddress', val => {
                    if (val) {
                        resolve({ caipAddress: val });
                        unsubscribeChainController();
                    }
                });
                const unsubscribeModalController = ModalController_ModalController.subscribeKey('open', val => {
                    if (!val) {
                        reject(new Error('Modal closed'));
                        unsubscribeModalController();
                    }
                });
            }
        });
    }
};
// Export the controller wrapped with our error boundary
const ConnectorController_ConnectorController = utils_withErrorBoundary_withErrorBoundary(ConnectorController_controller);
//# sourceMappingURL=ConnectorController.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var wui_button = __webpack_require__(658461);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var exports_wui_icon = __webpack_require__(51636);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/styles.js

/* harmony default export */ const wui_icon_link_styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/index.js
var wui_icon_link_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiIconLink.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_icon_link_styles];
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "size", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiIconLink.prototype, "disabled", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "icon", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "iconColor", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "variant", void 0);
WuiIconLink = wui_icon_link_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon-link')
], WuiIconLink);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-link.js

//# sourceMappingURL=wui-icon-link.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-image.js

//# sourceMappingURL=wui-image.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js + 2 modules
var wui_list_item = __webpack_require__(416784);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js
var wui_loading_spinner = __webpack_require__(793373);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkLg.js

const networkSvgLg = (0,lit/* svg */.JW) `<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;
//# sourceMappingURL=networkLg.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkMd.js
var networkMd = __webpack_require__(727512);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkSm.js

const networkSvgSm = (0,lit/* svg */.JW) `
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;
//# sourceMappingURL=networkSm.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-image/styles.js

/* harmony default export */ const wui_network_image_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({ tokens }) => tokens.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-image/index.js
var wui_network_image_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let WuiNetworkImage = class WuiNetworkImage extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.name = 'uknown';
        this.networkImagesBySize = {
            sm: networkSvgSm,
            md: networkMd/* networkSvgMd */.a,
            lg: networkSvgLg
        };
        this.selected = false;
        this.round = false;
    }
    render() {
        const getSize = {
            sm: '4',
            md: '6',
            lg: '10'
        };
        if (this.round) {
            this.dataset['round'] = 'true';
            this.style.cssText = `
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `;
        }
        else {
            this.style.cssText = `

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${getSize[this.size]});
    `;
        }
        return (0,lit/* html */.qy) `${this.templateVisual()} ${this.svgTemplate()} `;
    }
    svgTemplate() {
        if (this.round) {
            return null;
        }
        return this.networkImagesBySize[this.size];
    }
    templateVisual() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`;
    }
};
WuiNetworkImage.styles = [ThemeUtil/* resetStyles */.W5, wui_network_image_styles];
wui_network_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiNetworkImage.prototype, "size", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiNetworkImage.prototype, "name", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], WuiNetworkImage.prototype, "networkImagesBySize", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)()
], WuiNetworkImage.prototype, "imageSrc", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiNetworkImage.prototype, "selected", void 0);
wui_network_image_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiNetworkImage.prototype, "round", void 0);
WuiNetworkImage = wui_network_image_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-network-image')
], WuiNetworkImage);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-network-image.js

//# sourceMappingURL=wui-network-image.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-separator/styles.js

/* harmony default export */ const wui_separator_styles = ((0,ThemeHelperUtil/* css */.AH) `
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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-separator/index.js
var wui_separator_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
WuiSeparator.styles = [ThemeUtil/* resetStyles */.W5, wui_separator_styles];
wui_separator_decorate([
    (0,decorators/* property */.MZ)()
], WuiSeparator.prototype, "text", void 0);
wui_separator_decorate([
    (0,decorators/* property */.MZ)()
], WuiSeparator.prototype, "bgColor", void 0);
WuiSeparator = wui_separator_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-separator')
], WuiSeparator);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js

//# sourceMappingURL=wui-separator.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js
var wui_wallet_image = __webpack_require__(641684);
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js

const src_ConstantsUtil_ConstantsUtil = {
    /* Connector names */
    METMASK_CONNECTOR_NAME: 'MetaMask',
    TRUST_CONNECTOR_NAME: 'Trust Wallet',
    SOLFLARE_CONNECTOR_NAME: 'Solflare',
    PHANTOM_CONNECTOR_NAME: 'Phantom',
    COIN98_CONNECTOR_NAME: 'Coin98',
    MAGIC_EDEN_CONNECTOR_NAME: 'Magic Eden',
    BACKPACK_CONNECTOR_NAME: 'Backpack',
    BITGET_CONNECTOR_NAME: 'Bitget Wallet',
    FRONTIER_CONNECTOR_NAME: 'Frontier',
    XVERSE_CONNECTOR_NAME: 'Xverse Wallet',
    LEATHER_CONNECTOR_NAME: 'Leather',
    OKX_CONNECTOR_NAME: 'OKX Wallet',
    BINANCE_CONNECTOR_NAME: 'Binance Wallet',
    EIP155: esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM,
    ADD_CHAIN_METHOD: 'wallet_addEthereumChain',
    EIP6963_ANNOUNCE_EVENT: 'eip6963:announceProvider',
    EIP6963_REQUEST_EVENT: 'eip6963:requestProvider',
    CONNECTOR_RDNS_MAP: {
        coinbaseWallet: 'com.coinbase.wallet',
        coinbaseWalletSDK: 'com.coinbase.wallet'
    },
    CONNECTOR_TYPE_EXTERNAL: 'EXTERNAL',
    CONNECTOR_TYPE_WALLET_CONNECT: 'WALLET_CONNECT',
    CONNECTOR_TYPE_INJECTED: 'INJECTED',
    CONNECTOR_TYPE_ANNOUNCED: 'ANNOUNCED',
    CONNECTOR_TYPE_AUTH: 'AUTH',
    CONNECTOR_TYPE_MULTI_CHAIN: 'MULTI_CHAIN',
    CONNECTOR_TYPE_W3M_AUTH: 'AUTH',
    getSDKVersionWarningMessage(currentVersion, latestVersion) {
        return `
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${currentVersion} is outdated. Latest version is ${latestVersion}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`;
    }
};
//# sourceMappingURL=ConstantsUtil.js.map
;// ./node_modules/@reown/appkit-pay/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js



const HelpersUtil_HelpersUtil = {
    getCaipTokens(tokens) {
        if (!tokens) {
            return undefined;
        }
        const caipTokens = {};
        Object.entries(tokens).forEach(([id, token]) => {
            caipTokens[`${src_ConstantsUtil_ConstantsUtil.EIP155}:${id}`] = token;
        });
        return caipTokens;
    },
    isLowerCaseMatch(str1, str2) {
        return str1?.toLowerCase() === str2?.toLowerCase();
    },
    /**
     * Iterates the Auth connector supported chains and returns the namespace that is last connected to the active chain.
     * @returns ChainNamespace | undefined
     */
    getActiveNamespaceConnectedToAuth() {
        const activeChain = ChainController_ChainController.state.activeChain;
        return esm_src_utils_ConstantsUtil_ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(chain => ConnectorController_ConnectorController.getConnectorId(chain) === esm_src_utils_ConstantsUtil_ConstantsUtil.CONNECTOR_ID.AUTH &&
            chain === activeChain);
    },
    /**
     * Runs a condition function again and again until it returns true or the max number of tries is reached.
     *
     * @param conditionFn - A function (can be async) that returns true when the condition is met.
     * @param intervalMs - Time to wait between tries, in milliseconds.
     * @param maxRetries - Maximum number of times to try before stopping.
     * @returns A Promise that resolves to true if the condition becomes true in time, or false if it doesn't.
     */
    withRetry({ conditionFn, intervalMs, maxRetries }) {
        let attempts = 0;
        return new Promise(resolve => {
            async function tryCheck() {
                attempts += 1;
                const isConditionMet = await conditionFn();
                if (isConditionMet) {
                    return resolve(true);
                }
                if (attempts >= maxRetries) {
                    return resolve(false);
                }
                setTimeout(tryCheck, intervalMs);
                return null;
            }
            tryCheck();
        });
    },
    /**
     * Returns the chain namespace from user's chainId which is returned from Auth provider.
     * @param chainId - The chainId to parse.
     * @returns The chain namespace.
     */
    userChainIdToChainNamespace(chainId) {
        if (typeof chainId === 'number') {
            return esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM;
        }
        const [namespace] = chainId.split(':');
        return namespace;
    },
    /**
     * Get all auth namespaces except the active one
     * @param activeNamespace - The active namespace
     * @returns All auth namespaces except the active one
     */
    getOtherAuthNamespaces(activeNamespace) {
        if (!activeNamespace) {
            return [];
        }
        const authNamespaces = esm_src_utils_ConstantsUtil_ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS;
        const otherAuthNamespaces = authNamespaces.filter(ns => ns !== activeNamespace);
        return otherAuthNamespaces;
    },
    /**
     * Gets the storage info for a connector
     * @param connectorId - The ID of the connector
     * @param namespace - The namespace of the connector
     * @returns
     */
    getConnectorStorageInfo(connectorId, namespace) {
        const storageConnectionsByNamespace = StorageUtil_StorageUtil.getConnections();
        const storageConnections = storageConnectionsByNamespace[namespace] ?? [];
        return {
            hasDisconnected: StorageUtil_StorageUtil.isConnectorDisconnected(connectorId, namespace),
            hasConnected: storageConnections.some(c => HelpersUtil_HelpersUtil.isLowerCaseMatch(c.connectorId, connectorId))
        };
    }
};
//# sourceMappingURL=HelpersUtil.js.map
;// ./node_modules/@reown/appkit-pay/dist/esm/src/types/errors.js
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/utils/ConstantsUtil.js
const API_URL = 'https://rpc.walletconnect.org/v1/json-rpc';
const REOWN_TEST_EXCHANGE_ID = 'reown_test';
//# sourceMappingURL=ConstantsUtil.js.map
;// ./node_modules/@reown/appkit-pay/dist/esm/src/utils/PaymentUtil.js
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
    const { chainNamespace } = ParseUtil.parseCaipNetworkId(PayController.state.paymentAsset.network);
    const isAddress = utils_CoreHelperUtil_CoreHelperUtil.isAddress(PayController.state.recipient, chainNamespace);
    if (!isAddress) {
        throw new AppKitPayError(AppKitPayErrorCodes.INVALID_RECIPIENT_ADDRESS_FOR_ASSET, `Provide valid recipient address for namespace "${chainNamespace}"`);
    }
}
async function processEvmNativePayment(paymentAsset, chainNamespace, params) {
    if (chainNamespace !== esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM) {
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
    const amountBigInt = ConnectionController_ConnectionController.parseUnits(amountValue.toString(), decimals);
    if (typeof amountBigInt !== 'bigint') {
        throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR);
    }
    const txResponse = await ConnectionController_ConnectionController.sendTransaction({
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
    const amountBigInt = ConnectionController_ConnectionController.parseUnits(params.amount.toString(), decimals);
    if (amountBigInt === undefined) {
        throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR);
    }
    const txResponse = await ConnectionController_ConnectionController.writeContract({
        fromAddress: params.fromAddress,
        tokenAddress,
        args: [recipientAddress, amountBigInt],
        method: 'transfer',
        abi: ContractUtil.getERC20Abi(tokenAddress),
        chainNamespace: esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM
    });
    return txResponse ?? undefined;
}
async function processSolanaPayment(chainNamespace, params) {
    if (chainNamespace !== esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA) {
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
        const provider = ProviderController.getProvider(chainNamespace);
        if (!provider) {
            throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, 'No Solana provider available.');
        }
        const txResponse = await ConnectionController_ConnectionController.sendTransaction({
            chainNamespace: esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA,
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
    const originalAmount = ConnectionController_ConnectionController.parseUnits(amount, sourceToken.metadata.decimals);
    const destinationAmount = ConnectionController_ConnectionController.parseUnits(amount, toToken.metadata.decimals);
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/utils/ApiUtil.js





const ApiUtil_api = new FetchUtil_FetchUtil({ baseUrl: utils_CoreHelperUtil_CoreHelperUtil.getApiUrl(), clientId: null });
class JsonRpcError extends Error {
}
function getApiUrl() {
    const projectId = controllers_OptionsController_OptionsController.getSnapshot().projectId;
    return `${API_URL}?projectId=${projectId}`;
}
function getSdkProperties() {
    const { projectId, sdkType, sdkVersion } = controllers_OptionsController_OptionsController.state;
    return {
        projectId,
        st: sdkType || 'appkit',
        sv: sdkVersion || 'html-wagmi-4.2.2'
    };
}
async function sendRequest(method, params) {
    const url = getApiUrl();
    const { sdkType: st, sdkVersion: sv, projectId } = controllers_OptionsController_OptionsController.getSnapshot();
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
    const amount = NumberUtil_NumberUtil.bigNumber(params.amount)
        .times(10 ** params.toToken.metadata.decimals)
        .toString();
    const { chainId: originChainId, chainNamespace: originChainNamespace } = ParseUtil.parseCaipNetworkId(params.sourceToken.network);
    const { chainId: destinationChainId, chainNamespace: destinationChainNamespace } = ParseUtil.parseCaipNetworkId(params.toToken.network);
    const originCurrency = params.sourceToken.asset === 'native'
        ? getNativeTokenAddress(originChainNamespace)
        : params.sourceToken.asset;
    const destinationCurrency = params.toToken.asset === 'native'
        ? getNativeTokenAddress(destinationChainNamespace)
        : params.toToken.asset;
    const response = await ApiUtil_api.post({
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
    const isSameChain = HelpersUtil_HelpersUtil.isLowerCaseMatch(params.sourceToken.network, params.toToken.network);
    const isSameAsset = HelpersUtil_HelpersUtil.isLowerCaseMatch(params.sourceToken.asset, params.toToken.asset);
    if (isSameChain && isSameAsset) {
        return getDirectTransferQuote(params);
    }
    return getTransfersQuote(params);
}
async function getQuoteStatus(params) {
    const response = await ApiUtil_api.get({
        path: '/appkit/v1/transfers/status',
        params: {
            requestId: params.requestId,
            ...getSdkProperties()
        }
    });
    return response;
}
async function getAssetsForExchange(exchangeId) {
    const response = await ApiUtil_api.get({
        path: `/appkit/v1/transfers/assets/exchanges/${exchangeId}`,
        params: getSdkProperties()
    });
    return response;
}
//# sourceMappingURL=ApiUtil.js.map
;// ./node_modules/@reown/appkit-pay/dist/esm/src/utils/AssetUtil.js



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
function formatCaip19Asset(caipNetworkId, asset) {
    const { chainNamespace, chainId } = ParseUtil.parseCaipNetworkId(caipNetworkId);
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
    const networkPart = `${chainNamespace}:${chainId}`;
    return `${networkPart}/${assetNamespace}:${assetReference}`;
}
function isPayWithWalletSupported(networkId) {
    const { chainNamespace } = ParseUtil.parseCaipNetworkId(networkId);
    return SUPPORT_PAY_WITH_WALLET_CHAIN_NAMESPACES.includes(chainNamespace);
}
function formatBalanceToPaymentAsset(balance) {
    const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
    const targetNetwork = allNetworks.find(net => net.caipNetworkId === balance.chainId);
    let asset = balance.address;
    if (!targetNetwork) {
        throw new Error(`Target network not found for balance chainId "${balance.chainId}"`);
    }
    if (HelpersUtil_HelpersUtil.isLowerCaseMatch(balance.symbol, targetNetwork.nativeCurrency.symbol)) {
        asset = 'native';
    }
    else if (utils_CoreHelperUtil_CoreHelperUtil.isCaipAddress(asset)) {
        const { address } = ParseUtil.parseCaipAddress(asset);
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
    const num = NumberUtil_NumberUtil.bigNumber(amount, { safe: true });
    if (num.lt(0.001)) {
        return '<0.001';
    }
    return num.round(4).toString();
}
function isTestnetAsset(paymentAsset) {
    const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
    const targetNetwork = allNetworks.find(net => net.caipNetworkId === paymentAsset.network);
    if (!targetNetwork) {
        return false;
    }
    return Boolean(targetNetwork.testnet);
}
//# sourceMappingURL=AssetUtil.js.map
;// ./node_modules/@reown/appkit-pay/dist/esm/src/controllers/PayController.js











const DEFAULT_PAGE = 0;
const DEFAULT_PAYMENT_ID = 'unknown';
const DIRECT_TRANSFER_REQUEST_ID = 'direct-transfer';
const DIRECT_TRANSFER_DEPOSIT_TYPE = 'deposit';
const DIRECT_TRANSFER_TRANSACTION_TYPE = 'transaction';
const PayController_state = (0,vanilla/* proxy */.BX)({
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
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM]: [],
        [esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA]: []
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
    state: PayController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(PayController_state, () => callback(PayController_state));
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(PayController_state, key, callback);
    },
    async handleOpenPay(options) {
        this.resetState();
        this.setPaymentConfig(options);
        this.initializeAnalytics();
        ensureCorrectAddress();
        await this.prepareTokenLogo();
        PayController_state.isConfigured = true;
        EventsController_EventsController.sendEvent({
            type: 'track',
            event: 'PAY_MODAL_OPEN',
            properties: {
                exchanges: PayController_state.exchanges,
                configuration: {
                    network: PayController_state.paymentAsset.network,
                    asset: PayController_state.paymentAsset.asset,
                    recipient: PayController_state.recipient,
                    amount: PayController_state.amount
                }
            }
        });
        await ModalController_ModalController.open({
            view: 'Pay'
        });
    },
    resetState() {
        PayController_state.paymentAsset = {
            network: 'eip155:1',
            asset: '0x0',
            metadata: { name: '0x0', symbol: '0x0', decimals: 0 }
        };
        PayController_state.recipient = '0x0';
        PayController_state.amount = 0;
        PayController_state.isConfigured = false;
        PayController_state.error = null;
        PayController_state.isPaymentInProgress = false;
        PayController_state.isLoading = false;
        PayController_state.currentPayment = undefined;
        PayController_state.selectedExchange = undefined;
        PayController_state.exchangeUrlForQuote = undefined;
        PayController_state.requestId = undefined;
    },
    resetQuoteState() {
        PayController_state.quote = undefined;
        PayController_state.quoteStatus = 'waiting';
        PayController_state.quoteError = null;
        PayController_state.isFetchingQuote = false;
        PayController_state.requestId = undefined;
    },
    setPaymentConfig(config) {
        if (!config.paymentAsset) {
            throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG);
        }
        try {
            PayController_state.choice = config.choice ?? 'pay';
            PayController_state.paymentAsset = config.paymentAsset;
            PayController_state.recipient = config.recipient;
            PayController_state.amount = config.amount;
            PayController_state.openInNewTab = config.openInNewTab ?? true;
            PayController_state.redirectUrl = config.redirectUrl;
            PayController_state.payWithExchange = config.payWithExchange;
            PayController_state.error = null;
        }
        catch (error) {
            throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, error.message);
        }
    },
    setSelectedPaymentAsset(paymentAsset) {
        PayController_state.selectedPaymentAsset = paymentAsset;
    },
    setSelectedExchange(exchange) {
        PayController_state.selectedExchange = exchange;
    },
    setRequestId(requestId) {
        PayController_state.requestId = requestId;
    },
    setPaymentInProgress(isPaymentInProgress) {
        PayController_state.isPaymentInProgress = isPaymentInProgress;
    },
    getPaymentAsset() {
        return PayController_state.paymentAsset;
    },
    getExchanges() {
        return PayController_state.exchanges;
    },
    async fetchExchanges() {
        try {
            PayController_state.isLoading = true;
            const response = await getExchanges({
                page: DEFAULT_PAGE
            });
            PayController_state.exchanges = response.exchanges.slice(0, 2);
        }
        catch (error) {
            SnackController_SnackController.showError(AppKitPayErrorMessages.UNABLE_TO_GET_EXCHANGES);
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES);
        }
        finally {
            PayController_state.isLoading = false;
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
            EventsController_EventsController.sendEvent({
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
                EventsController_EventsController.sendEvent({
                    type: 'track',
                    event: 'PAY_INITIATED',
                    properties: {
                        source: 'pay',
                        paymentId: PayController_state.paymentId || DEFAULT_PAYMENT_ID,
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
        PayController_state.exchangeSessionId = response.sessionId;
        PayController_state.exchangeUrlForQuote = response.url;
    },
    async openPayUrl(openParams, params, headless = false) {
        try {
            const payUrl = await this.getPayUrl(openParams.exchangeId, params, headless);
            if (!payUrl) {
                throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL);
            }
            const shouldOpenInNewTab = openParams.openInNewTab ?? true;
            const target = shouldOpenInNewTab ? '_blank' : '_self';
            utils_CoreHelperUtil_CoreHelperUtil.openHref(payUrl.url, target);
            return payUrl;
        }
        catch (error) {
            if (error instanceof AppKitPayError) {
                PayController_state.error = error.message;
            }
            else {
                PayController_state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
            }
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL);
        }
    },
    async onTransfer({ chainNamespace, fromAddress, toAddress, amount, paymentAsset }) {
        PayController_state.currentPayment = {
            type: 'wallet',
            status: 'IN_PROGRESS'
        };
        if (PayController_state.isPaymentInProgress) {
            return;
        }
        try {
            this.initiatePayment();
            const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
            const targetNetwork = allNetworks.find(net => net.caipNetworkId === paymentAsset.network);
            if (!targetNetwork) {
                throw new Error('Target network not found');
            }
            const caipNetwork = ChainController_ChainController.state.activeCaipNetwork;
            if (!HelpersUtil_HelpersUtil.isLowerCaseMatch(caipNetwork?.caipNetworkId, targetNetwork.caipNetworkId)) {
                await ChainController_ChainController.switchActiveNetwork(targetNetwork);
            }
            switch (chainNamespace) {
                case esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM:
                    if (paymentAsset.asset === 'native') {
                        PayController_state.currentPayment.result = await processEvmNativePayment(paymentAsset, chainNamespace, {
                            recipient: toAddress,
                            amount,
                            fromAddress: fromAddress
                        });
                    }
                    if (paymentAsset.asset.startsWith('0x')) {
                        PayController_state.currentPayment.result = await processEvmErc20Payment(paymentAsset, {
                            recipient: toAddress,
                            amount,
                            fromAddress: fromAddress
                        });
                    }
                    PayController_state.currentPayment.status = 'SUCCESS';
                    break;
                case esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA:
                    PayController_state.currentPayment.result = await processSolanaPayment(chainNamespace, {
                        recipient: toAddress,
                        amount,
                        fromAddress,
                        tokenMint: paymentAsset.asset === 'native' ? undefined : paymentAsset.asset
                    });
                    PayController_state.currentPayment.status = 'SUCCESS';
                    break;
                default:
                    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE);
            }
        }
        catch (error) {
            if (error instanceof AppKitPayError) {
                PayController_state.error = error.message;
            }
            else {
                PayController_state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
            }
            PayController_state.currentPayment.status = 'FAILED';
            SnackController_SnackController.showError(PayController_state.error);
            throw error;
        }
        finally {
            PayController_state.isPaymentInProgress = false;
        }
    },
    async onSendTransaction(params) {
        try {
            const { namespace, transactionStep } = params;
            PayController.initiatePayment();
            const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
            const targetNetwork = allNetworks.find(net => net.caipNetworkId === PayController_state.paymentAsset?.network);
            if (!targetNetwork) {
                throw new Error('Target network not found');
            }
            const caipNetwork = ChainController_ChainController.state.activeCaipNetwork;
            if (!HelpersUtil_HelpersUtil.isLowerCaseMatch(caipNetwork?.caipNetworkId, targetNetwork.caipNetworkId)) {
                await ChainController_ChainController.switchActiveNetwork(targetNetwork);
            }
            if (namespace === esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM) {
                const { from, to, data, value } = transactionStep.transaction;
                await ConnectionController_ConnectionController.sendTransaction({
                    address: from,
                    to,
                    data,
                    value: BigInt(value),
                    chainNamespace: namespace
                });
            }
            else if (namespace === esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.SOLANA) {
                const { instructions } = transactionStep.transaction;
                await ConnectionController_ConnectionController.writeSolanaTransaction({
                    instructions
                });
            }
        }
        catch (error) {
            if (error instanceof AppKitPayError) {
                PayController_state.error = error.message;
            }
            else {
                PayController_state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
            }
            SnackController_SnackController.showError(PayController_state.error);
            throw error;
        }
        finally {
            PayController_state.isPaymentInProgress = false;
        }
    },
    getExchangeById(exchangeId) {
        return PayController_state.exchanges.find(exchange => exchange.id === exchangeId);
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
            PayController_state.currentPayment = {
                type: 'exchange',
                exchangeId
            };
            const { network, asset } = PayController_state.paymentAsset;
            const payUrlParams = {
                network,
                asset,
                amount: PayController_state.amount,
                recipient: PayController_state.recipient
            };
            const payUrl = await this.getPayUrl(exchangeId, payUrlParams);
            if (!payUrl) {
                throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_INITIATE_PAYMENT);
            }
            PayController_state.currentPayment.sessionId = payUrl.sessionId;
            PayController_state.currentPayment.status = 'IN_PROGRESS';
            PayController_state.currentPayment.exchangeId = exchangeId;
            this.initiatePayment();
            return {
                url: payUrl.url,
                openInNewTab: PayController_state.openInNewTab
            };
        }
        catch (error) {
            if (error instanceof AppKitPayError) {
                PayController_state.error = error.message;
            }
            else {
                PayController_state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
            }
            PayController_state.isPaymentInProgress = false;
            SnackController_SnackController.showError(PayController_state.error);
            return null;
        }
    },
    async getBuyStatus(exchangeId, sessionId) {
        try {
            const status = await getBuyStatus({ sessionId, exchangeId });
            if (status.status === 'SUCCESS' || status.status === 'FAILED') {
                EventsController_EventsController.sendEvent({
                    type: 'track',
                    event: status.status === 'SUCCESS' ? 'PAY_SUCCESS' : 'PAY_ERROR',
                    properties: {
                        message: status.status === 'FAILED' ? utils_CoreHelperUtil_CoreHelperUtil.parseError(PayController_state.error) : undefined,
                        source: 'pay',
                        paymentId: PayController_state.paymentId || DEFAULT_PAYMENT_ID,
                        configuration: {
                            network: PayController_state.paymentAsset.network,
                            asset: PayController_state.paymentAsset.asset,
                            recipient: PayController_state.recipient,
                            amount: PayController_state.amount
                        },
                        currentPayment: {
                            type: 'exchange',
                            exchangeId: PayController_state.currentPayment?.exchangeId,
                            sessionId: PayController_state.currentPayment?.sessionId,
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
        const { address } = ParseUtil.parseCaipAddress(caipAddress);
        let overideCaipNetwork = caipNetwork;
        if (namespace === esm_src_utils_ConstantsUtil_ConstantsUtil.CHAIN.EVM) {
            overideCaipNetwork = undefined;
        }
        const balances = await BalanceUtil_BalanceUtil.getMyTokensWithBalance({
            address,
            caipNetwork: overideCaipNetwork
        });
        return balances;
    },
    async fetchTokensFromExchange() {
        if (!PayController_state.selectedExchange) {
            return [];
        }
        const assets = await getAssetsForExchange(PayController_state.selectedExchange.id);
        const allAssets = Object.values(assets.assets).flat();
        const balanceWithImages = await Promise.all(allAssets.map(async (token) => {
            const balance = formatPaymentAssetToBalance(token);
            const { chainNamespace } = ParseUtil.parseCaipNetworkId(balance.chainId);
            let address = balance.address;
            if (utils_CoreHelperUtil_CoreHelperUtil.isCaipAddress(address)) {
                const { address: parsedAddress } = ParseUtil.parseCaipAddress(address);
                address = parsedAddress;
            }
            const image = await AssetUtil_AssetUtil.getImageByToken(address ?? '', chainNamespace).catch(() => undefined);
            balance.iconUrl = image ?? '';
            return balance;
        }));
        return balanceWithImages;
    },
    async fetchTokens({ caipAddress, caipNetwork, namespace }) {
        try {
            PayController_state.isFetchingTokenBalances = true;
            const isUsingExchange = Boolean(PayController_state.selectedExchange);
            const balancesFnPromise = isUsingExchange
                ? this.fetchTokensFromExchange()
                : this.fetchTokensFromEOA({ caipAddress, caipNetwork, namespace });
            const balances = await balancesFnPromise;
            PayController_state.tokenBalances = { ...PayController_state.tokenBalances, [namespace]: balances };
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Unable to get token balances';
            SnackController_SnackController.showError(message);
        }
        finally {
            PayController_state.isFetchingTokenBalances = false;
        }
    },
    async fetchQuote({ amount, address, sourceToken, toToken, recipient }) {
        try {
            PayController.resetQuoteState();
            PayController_state.isFetchingQuote = true;
            const quote = await getQuote({
                amount,
                address: PayController_state.selectedExchange ? undefined : address,
                sourceToken,
                toToken,
                recipient
            });
            if (PayController_state.selectedExchange) {
                const transferStep = getTransferStep(quote);
                if (transferStep) {
                    const caipDepositAddress = `${sourceToken.network}:${transferStep.deposit.receiver}`;
                    const depositAmount = NumberUtil_NumberUtil.formatNumber(transferStep.deposit.amount, {
                        decimals: sourceToken.metadata.decimals ?? 0,
                        round: 8
                    });
                    await PayController.generateExchangeUrlForQuote({
                        exchangeId: PayController_state.selectedExchange.id,
                        paymentAsset: sourceToken,
                        amount: depositAmount.toString(),
                        recipient: caipDepositAddress
                    });
                }
            }
            PayController_state.quote = quote;
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
            PayController_state.quoteError = errMessage;
            SnackController_SnackController.showError(errMessage);
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE);
        }
        finally {
            PayController_state.isFetchingQuote = false;
        }
    },
    async fetchQuoteStatus({ requestId }) {
        try {
            if (requestId === DIRECT_TRANSFER_REQUEST_ID) {
                const selectedExchange = PayController_state.selectedExchange;
                const sessionId = PayController_state.exchangeSessionId;
                if (selectedExchange && sessionId) {
                    const status = await this.getBuyStatus(selectedExchange.id, sessionId);
                    switch (status.status) {
                        case 'IN_PROGRESS':
                            PayController_state.quoteStatus = 'waiting';
                            break;
                        case 'SUCCESS':
                            PayController_state.quoteStatus = 'success';
                            PayController_state.isPaymentInProgress = false;
                            break;
                        case 'FAILED':
                            PayController_state.quoteStatus = 'failure';
                            PayController_state.isPaymentInProgress = false;
                            break;
                        case 'UNKNOWN':
                            PayController_state.quoteStatus = 'waiting';
                            break;
                        default:
                            PayController_state.quoteStatus = 'waiting';
                            break;
                    }
                    return;
                }
                PayController_state.quoteStatus = 'success';
                return;
            }
            const { status } = await getQuoteStatus({ requestId });
            PayController_state.quoteStatus = status;
        }
        catch {
            PayController_state.quoteStatus = 'failure';
            throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE_STATUS);
        }
    },
    initiatePayment() {
        PayController_state.isPaymentInProgress = true;
        PayController_state.paymentId = crypto.randomUUID();
    },
    initializeAnalytics() {
        if (PayController_state.analyticsSet) {
            return;
        }
        PayController_state.analyticsSet = true;
        this.subscribeKey('isPaymentInProgress', _ => {
            if (PayController_state.currentPayment?.status && PayController_state.currentPayment.status !== 'UNKNOWN') {
                const eventType = {
                    IN_PROGRESS: 'PAY_INITIATED',
                    SUCCESS: 'PAY_SUCCESS',
                    FAILED: 'PAY_ERROR'
                }[PayController_state.currentPayment.status];
                EventsController_EventsController.sendEvent({
                    type: 'track',
                    event: eventType,
                    properties: {
                        message: PayController_state.currentPayment.status === 'FAILED'
                            ? utils_CoreHelperUtil_CoreHelperUtil.parseError(PayController_state.error)
                            : undefined,
                        source: 'pay',
                        paymentId: PayController_state.paymentId || DEFAULT_PAYMENT_ID,
                        configuration: {
                            network: PayController_state.paymentAsset.network,
                            asset: PayController_state.paymentAsset.asset,
                            recipient: PayController_state.recipient,
                            amount: PayController_state.amount
                        },
                        currentPayment: {
                            type: PayController_state.currentPayment.type,
                            exchangeId: PayController_state.currentPayment.exchangeId,
                            sessionId: PayController_state.currentPayment.sessionId,
                            result: PayController_state.currentPayment.result
                        }
                    }
                });
            }
        });
    },
    async prepareTokenLogo() {
        if (!PayController_state.paymentAsset.metadata.logoURI) {
            try {
                const { chainNamespace } = ParseUtil.parseCaipNetworkId(PayController_state.paymentAsset.network);
                const imageUrl = await AssetUtil_AssetUtil.getImageByToken(PayController_state.paymentAsset.asset, chainNamespace);
                PayController_state.paymentAsset.metadata.logoURI = imageUrl;
            }
            catch {
            }
        }
    }
};
//# sourceMappingURL=PayController.js.map
;// ./node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-view/styles.js

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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-view/index.js
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
        this.activeConnectorIds = ConnectorController_ConnectorController.state.activeConnectorIds;
        this.caipAddress = undefined;
        this.exchanges = PayController.state.exchanges;
        this.isLoading = PayController.state.isLoading;
        this.initializeNamespace();
        this.unsubscribe.push(PayController.subscribeKey('amount', val => (this.amount = val)));
        this.unsubscribe.push(ConnectorController_ConnectorController.subscribeKey('activeConnectorIds', ids => (this.activeConnectorIds = ids)));
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
        const namespace = ChainController_ChainController.state.activeChain;
        this.namespace = namespace;
        this.caipAddress = ChainController_ChainController.getAccountData(namespace)?.caipAddress;
        this.unsubscribe.push(ChainController_ChainController.subscribeChainProp('accountState', accountState => {
            this.caipAddress = accountState?.caipAddress;
        }, namespace));
    }
    paymentDetailsTemplate() {
        const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
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
            src=${(0,if_defined/* ifDefined */.J)(AssetUtil_AssetUtil.getNetworkImage(targetNetwork))}
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
            RouterController_RouterController.push('PayQuote');
        }
        else {
            await ConnectorController_ConnectorController.connect();
            await ModalController_ModalController.open({ view: 'PayQuote' });
        }
    }
    onExchangePayment(exchange) {
        PayController.setSelectedExchange(exchange);
        RouterController_RouterController.push('PayQuote');
    }
    async onDisconnect() {
        try {
            await ConnectionController_ConnectionController.disconnect();
            await ModalController_ModalController.open({ view: 'Pay' });
        }
        catch {
            console.error('Failed to disconnect');
            SnackController_SnackController.showError('Failed to disconnect');
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
        const connector = ConnectorController_ConnectorController.getConnector({ id: connectorId, namespace });
        if (!connector) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connectorImage = AssetUtil_AssetUtil.getConnectorImage(connector);
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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-pulse/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-pulse/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-pulse.js

//# sourceMappingURL=wui-pulse.js.map
;// ./node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-loading-view/constants.js
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-loading-view/styles.js

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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-loading-view/index.js
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
        this.activeConnectorIds = ConnectorController_ConnectorController.state.activeConnectorIds;
        this.selectedExchange = PayController.state.selectedExchange;
        this.initializeNamespace();
        this.unsubscribe.push(...[
            PayController.subscribeKey('quoteStatus', val => (this.quoteStatus = val)),
            PayController.subscribeKey('quote', val => (this.quote = val)),
            ConnectorController_ConnectorController.subscribeKey('activeConnectorIds', ids => (this.activeConnectorIds = ids)),
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
        const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
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
                src=${(0,if_defined/* ifDefined */.J)(AssetUtil_AssetUtil.getNetworkImage(targetNetwork))}
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
        const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
        const targetNetwork = allNetworks.find(net => {
            const network = this.quote?.origin.currency.network;
            if (!network) {
                return false;
            }
            const { chainId } = ParseUtil.parseCaipNetworkId(network);
            return HelpersUtil_HelpersUtil.isLowerCaseMatch(net.id.toString(), chainId.toString());
        });
        const formatBigNumber = NumberUtil_NumberUtil.formatNumber(this.quote?.origin.amount || '0', {
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
              src=${(0,if_defined/* ifDefined */.J)(AssetUtil_AssetUtil.getNetworkImage(targetNetwork))}
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
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `;
    }
    renderWalletText() {
        const { image } = this.getWalletProperties({ namespace: this.namespace });
        const { address } = this.caipAddress ? ParseUtil.parseCaipAddress(this.caipAddress) : {};
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
        const namespace = ChainController_ChainController.state.activeChain;
        this.namespace = namespace;
        this.caipAddress = ChainController_ChainController.getAccountData(namespace)?.caipAddress;
        this.profileName = ChainController_ChainController.getAccountData(namespace)?.profileName ?? null;
        this.unsubscribe.push(ChainController_ChainController.subscribeChainProp('accountState', accountState => {
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
        const connector = ConnectorController_ConnectorController.getConnector({ id: connectorId, namespace });
        if (!connector) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connectorImage = AssetUtil_AssetUtil.getConnectorImage(connector);
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(163612);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-switch/styles.js

/* harmony default export */ const wui_wallet_switch_styles = ((0,ThemeHelperUtil/* css */.AH) `
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    column-gap: ${({ spacing }) => spacing[1]};
    background-color: transparent;
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({ spacing }) => spacing[6]};
    height: ${({ spacing }) => spacing[6]};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({ tokens }) => tokens.core.textSuccess};
    box-shadow: 0 0 0 2px ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-switch/index.js
var wui_wallet_switch_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let WuiWalletSwitch = class WuiWalletSwitch extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.address = '';
        this.profileName = '';
        this.alt = '';
        this.imageSrc = '';
        this.icon = undefined;
        this.iconSize = 'md';
        this.enableGreenCircle = true;
        this.loading = false;
        this.charsStart = 4;
        this.charsEnd = 6;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `;
    }
    leftImageTemplate() {
        const imageOrIconContent = this.icon
            ? (0,lit/* html */.qy) `<wui-icon
          size=${(0,if_defined/* ifDefined */.J)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`
            : (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;
        return (0,lit/* html */.qy) `
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${imageOrIconContent}
        ${this.enableGreenCircle ? (0,lit/* html */.qy) `<wui-flex class="circle"></wui-flex>` : null}
      </wui-flex>
    `;
    }
    textTemplate() {
        return (0,lit/* html */.qy) `
      <wui-text variant="lg-regular" color="primary">
        ${UiHelperUtil/* UiHelperUtil */.Z.getTruncateString({
            string: this.profileName || this.address,
            charsStart: this.profileName ? 16 : this.charsStart,
            charsEnd: this.profileName ? 0 : this.charsEnd,
            truncate: this.profileName ? 'end' : 'middle'
        })}
      </wui-text>
    `;
    }
    rightImageTemplate() {
        return (0,lit/* html */.qy) `<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`;
    }
};
WuiWalletSwitch.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_wallet_switch_styles];
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "address", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "profileName", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "alt", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "imageSrc", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "icon", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)()
], WuiWalletSwitch.prototype, "iconSize", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiWalletSwitch.prototype, "enableGreenCircle", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiWalletSwitch.prototype, "loading", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiWalletSwitch.prototype, "charsStart", void 0);
wui_wallet_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiWalletSwitch.prototype, "charsEnd", void 0);
WuiWalletSwitch = wui_wallet_switch_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-wallet-switch')
], WuiWalletSwitch);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-switch.js

//# sourceMappingURL=wui-wallet-switch.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js
var wui_shimmer = __webpack_require__(835090);
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees-skeleton/styles.js

/* harmony default export */ const w3m_pay_fees_skeleton_styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees-skeleton/index.js
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees/styles.js

/* harmony default export */ const w3m_pay_fees_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-fees/index.js
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
        const amount = NumberUtil_NumberUtil.formatNumber(this.quote?.origin.amount || '0', {
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
        const feeAmount = NumberUtil_NumberUtil.formatNumber(fee.amount || '0', {
            decimals: fee.currency.metadata.decimals ?? 0,
            round: 6
        }).toString();
        if (isNetworkFee) {
            const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
            const targetNetwork = allNetworks.find(net => HelpersUtil_HelpersUtil.isLowerCaseMatch(net.caipNetworkId, fee.currency.network));
            return (0,lit/* html */.qy) `
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${fee.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${feeAmount} ${fee.currency.metadata.symbol || 'Unknown'}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,if_defined/* ifDefined */.J)(AssetUtil_AssetUtil.getNetworkImage(targetNetwork))}
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-empty/styles.js

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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-empty/index.js
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-skeleton/styles.js

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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options-skeleton/index.js
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options/styles.js

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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/partials/w3m-pay-options/index.js
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
        const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
        const targetNetwork = allNetworks.find(net => net.caipNetworkId === network);
        const paymentCaipAddress = `${network}:${asset}`;
        const selectedPaymentCaipAddress = `${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`;
        const isSelected = paymentCaipAddress === selectedPaymentCaipAddress;
        const bigAmount = NumberUtil_NumberUtil.bigNumber(amount, { safe: true });
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
              src=${(0,if_defined/* ifDefined */.J)(AssetUtil_AssetUtil.getNetworkImage(targetNetwork))}
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-quote-view/styles.js

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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/ui/w3m-pay-quote-view/index.js
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
        this.activeConnectorIds = ConnectorController_ConnectorController.state.activeConnectorIds;
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
        this.unsubscribe.push(ConnectorController_ConnectorController.subscribeKey('activeConnectorIds', newActiveConnectorIds => (this.activeConnectorIds = newActiveConnectorIds)));
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
            const amount = NumberUtil_NumberUtil.formatNumber(this.quote?.origin.amount, {
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
                ${NumberUtil_NumberUtil.bigNumber(amount, { safe: true }).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`
                : (0,lit/* html */.qy) `<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `;
        }
        const address = utils_CoreHelperUtil_CoreHelperUtil.getPlainAddress(this.caipAddress) ?? '';
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
        const namespace = ChainController_ChainController.state.activeChain;
        this.namespace = namespace;
        this.caipAddress = ChainController_ChainController.getAccountData(namespace)?.caipAddress;
        this.profileName = ChainController_ChainController.getAccountData(namespace)?.profileName ?? null;
        this.unsubscribe.push(ChainController_ChainController.subscribeChainProp('accountState', accountState => this.onAccountStateChanged(accountState), namespace));
    }
    async fetchTokens() {
        if (this.namespace) {
            let caipNetwork = undefined;
            if (this.caipAddress) {
                const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(this.caipAddress);
                const caipNetworkId = `${chainNamespace}:${chainId}`;
                const allNetworks = ChainController_ChainController.getAllRequestedCaipNetworks();
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
            const { address } = this.caipAddress ? ParseUtil.parseCaipAddress(this.caipAddress) : {};
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
        const connector = ConnectorController_ConnectorController.getConnector({ id: connectorId, namespace });
        if (!connector) {
            return {
                name: undefined,
                image: undefined
            };
        }
        const connectorImage = AssetUtil_AssetUtil.getConnectorImage(connector);
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
        const amount = NumberUtil_NumberUtil.formatNumber(this.quote?.origin.amount ?? 0, {
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
            const { chainId: optionChainId } = ParseUtil.parseCaipNetworkId(option.network);
            const { chainId: paymentAssetChainId } = ParseUtil.parseCaipNetworkId(this.paymentAsset.network);
            if (HelpersUtil_HelpersUtil.isLowerCaseMatch(option.asset, this.paymentAsset.asset)) {
                return true;
            }
            if (this.selectedExchange) {
                return !HelpersUtil_HelpersUtil.isLowerCaseMatch(optionChainId.toString(), paymentAssetChainId.toString());
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
        await ConnectorController_ConnectorController.connect();
        await ModalController_ModalController.open({ view: 'PayQuote' });
    }
    onAccountStateChanged(accountState) {
        const { address: oldAddress } = this.caipAddress
            ? ParseUtil.parseCaipAddress(this.caipAddress)
            : {};
        this.caipAddress = accountState?.caipAddress;
        this.profileName = accountState?.profileName ?? null;
        if (oldAddress) {
            const { address: newAddress } = this.caipAddress
                ? ParseUtil.parseCaipAddress(this.caipAddress)
                : {};
            if (!newAddress) {
                ModalController_ModalController.close();
            }
            else if (!HelpersUtil_HelpersUtil.isLowerCaseMatch(newAddress, oldAddress)) {
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
            const isQuoteAssetSameAsSelectedPaymentAsset = HelpersUtil_HelpersUtil.isLowerCaseMatch(this.selectedPaymentAsset?.asset, transferStep.deposit.currency);
            if (!isQuoteAssetSameAsSelectedPaymentAsset) {
                throw new Error('Quote asset is not the same as the selected payment asset');
            }
            const currentAmount = this.selectedPaymentAsset?.amount ?? '0';
            const amountToTransfer = NumberUtil_NumberUtil.formatNumber(transferStep.deposit.amount, {
                decimals: this.selectedPaymentAsset?.metadata.decimals ?? 0
            }).toString();
            const hasEnoughFunds = NumberUtil_NumberUtil.bigNumber(currentAmount).gte(amountToTransfer);
            if (!hasEnoughFunds) {
                SnackController_SnackController.showError('Insufficient funds');
                return;
            }
            if (this.quote && this.selectedPaymentAsset && this.caipAddress && this.namespace) {
                const { address: fromAddress } = ParseUtil.parseCaipAddress(this.caipAddress);
                await PayController.onTransfer({
                    chainNamespace: this.namespace,
                    fromAddress,
                    toAddress: transferStep.deposit.receiver,
                    amount: amountToTransfer,
                    paymentAsset: this.selectedPaymentAsset
                });
                PayController.setRequestId(transferStep.requestId);
                RouterController_RouterController.push('PayLoading');
            }
        }
    }
    async onSendTransactions() {
        const currentAmount = this.selectedPaymentAsset?.amount ?? '0';
        const amountToSwap = NumberUtil_NumberUtil.formatNumber(this.quote?.origin.amount ?? 0, {
            decimals: this.selectedPaymentAsset?.metadata.decimals ?? 0
        }).toString();
        const hasEnoughFunds = NumberUtil_NumberUtil.bigNumber(currentAmount).gte(amountToSwap);
        if (!hasEnoughFunds) {
            SnackController_SnackController.showError('Insufficient funds');
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
                RouterController_RouterController.push('PayLoading');
            }
        }
    }
    onPayWithExchange() {
        if (this.exchangeUrlForQuote) {
            const popupWindow = utils_CoreHelperUtil_CoreHelperUtil.returnOpenHref('', 'popupWindow', 'scrollbar=yes,width=480,height=720');
            if (!popupWindow) {
                throw new Error('Could not create popup window');
            }
            popupWindow.location.href = this.exchangeUrlForQuote;
            const transactionStep = getTransferStep(this.quote);
            if (transactionStep) {
                PayController.setRequestId(transactionStep.requestId);
            }
            PayController.initiatePayment();
            RouterController_RouterController.push('PayLoading');
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/client.js
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
;// ./node_modules/@reown/appkit-pay/dist/esm/src/types/assets.js
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
;// ./node_modules/@reown/appkit-pay/dist/esm/exports/index.js






//# sourceMappingURL=index.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-pay-header/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-pay-header/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/index.js
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
            }, src_utils_ConstantsUtil_ConstantsUtil.ANIMATION_DURATIONS.HeaderText);
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
        let direction = src_utils_ConstantsUtil_ConstantsUtil.VIEW_DIRECTION.Next;
        if (history.length < this.prevHistoryLength) {
            direction = src_utils_ConstantsUtil_ConstantsUtil.VIEW_DIRECTION.Prev;
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js + 1 modules
var components_wui_loading_spinner = __webpack_require__(508163);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js + 1 modules
var wui_icon_box = __webpack_require__(238436);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/styles.js

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
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/index.js
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-snackbar.js

//# sourceMappingURL=wui-snackbar.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TooltipController.js



// -- State --------------------------------------------- //
const TooltipController_state = (0,vanilla/* proxy */.BX)({
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
const TooltipController_controller = {
    state: TooltipController_state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(TooltipController_state, () => callback(TooltipController_state));
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(TooltipController_state, key, callback);
    },
    showTooltip({ message, triggerRect, variant }) {
        TooltipController_state.open = true;
        TooltipController_state.message = message;
        TooltipController_state.triggerRect = triggerRect;
        TooltipController_state.variant = variant;
    },
    hide() {
        TooltipController_state.open = false;
        TooltipController_state.message = '';
        TooltipController_state.triggerRect = {
            width: 0,
            height: 0,
            top: 0,
            left: 0
        };
    }
};
// Export the controller wrapped with our error boundary
const TooltipController = (0,withErrorBoundary/* withErrorBoundary */.X)(TooltipController_controller);
//# sourceMappingURL=TooltipController.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip-trigger/styles.js

/* harmony default export */ const w3m_tooltip_trigger_styles = ((0,lit/* css */.AH) `
  :host {
    width: 100%;
    display: block;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip-trigger/index.js
var w3m_tooltip_trigger_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        this.open = TooltipController.state.open;
        this.unsubscribe.push(RouterController/* RouterController */.I.subscribeKey('view', () => {
            TooltipController.hide();
        }), ModalController/* ModalController */.W.subscribeKey('open', modalOpen => {
            if (!modalOpen) {
                TooltipController.hide();
            }
        }), TooltipController.subscribeKey('open', tooltipOpen => {
            this.open = tooltipOpen;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        TooltipController.hide();
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
            TooltipController.showTooltip({
                message: this.text,
                triggerRect,
                variant: 'shade'
            });
        }
    }
    onMouseLeave(event) {
        if (!this.contains(event.relatedTarget)) {
            TooltipController.hide();
        }
    }
};
WuiTooltipTrigger.styles = [w3m_tooltip_trigger_styles];
w3m_tooltip_trigger_decorate([
    (0,decorators/* property */.MZ)()
], WuiTooltipTrigger.prototype, "text", void 0);
w3m_tooltip_trigger_decorate([
    (0,decorators/* state */.wk)()
], WuiTooltipTrigger.prototype, "open", void 0);
WuiTooltipTrigger = w3m_tooltip_trigger_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-tooltip-trigger')
], WuiTooltipTrigger);

//# sourceMappingURL=index.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/styles.js

/* harmony default export */ const w3m_tooltip_styles = ((0,esm_exports/* css */.AH) `
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/index.js
var w3m_tooltip_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mTooltip = class W3mTooltip extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.open = TooltipController.state.open;
        this.message = TooltipController.state.message;
        this.triggerRect = TooltipController.state.triggerRect;
        this.variant = TooltipController.state.variant;
        this.unsubscribe.push(...[
            TooltipController.subscribe(newState => {
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
W3mTooltip.styles = [w3m_tooltip_styles];
w3m_tooltip_decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "open", void 0);
w3m_tooltip_decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "message", void 0);
w3m_tooltip_decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "triggerRect", void 0);
w3m_tooltip_decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "variant", void 0);
W3mTooltip = w3m_tooltip_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-tooltip')
], W3mTooltip);

//# sourceMappingURL=index.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/HelpersUtil.js



const utils_HelpersUtil_HelpersUtil = {
    getTabsByNamespace(namespace) {
        const isEVM = Boolean(namespace) && namespace === ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM;
        if (!isEVM) {
            return [];
        }
        if (OptionsController/* OptionsController */.H.state.remoteFeatures?.activity === false) {
            return src_utils_ConstantsUtil_ConstantsUtil.ACCOUNT_TABS.filter(tab => tab.label !== 'Activity');
        }
        return src_utils_ConstantsUtil_ConstantsUtil.ACCOUNT_TABS;
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
        const view = RouterController/* RouterController */.I.state.view;
        if (src_utils_ConstantsUtil_ConstantsUtil.VIEWS_WITH_LEGAL_FOOTER.includes(view)) {
            const { termsConditionsUrl, privacyPolicyUrl } = OptionsController/* OptionsController */.H.state;
            const legalCheckbox = OptionsController/* OptionsController */.H.state.features?.legalCheckbox;
            const showOnlyBranding = (!termsConditionsUrl && !privacyPolicyUrl) || legalCheckbox;
            if (showOnlyBranding) {
                return false;
            }
            return true;
        }
        return src_utils_ConstantsUtil_ConstantsUtil.VIEWS_WITH_DEFAULT_FOOTER.includes(view);
    }
};
//# sourceMappingURL=HelpersUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js + 3 modules
var wui_ux_by_reown = __webpack_require__(158760);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-footer/styles.js

/* harmony default export */ const w3m_legal_footer_styles = ((0,esm_exports/* css */.AH) `
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-footer/index.js
var w3m_legal_footer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
W3mLegalFooter.styles = [w3m_legal_footer_styles];
w3m_legal_footer_decorate([
    (0,decorators/* state */.wk)()
], W3mLegalFooter.prototype, "remoteFeatures", void 0);
W3mLegalFooter = w3m_legal_footer_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-legal-footer')
], W3mLegalFooter);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(526751);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/styles.js

/* harmony default export */ const w3m_onramp_providers_footer_styles = ((0,lit/* css */.AH) ``);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/index.js
var w3m_onramp_providers_footer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
W3mOnRampProvidersFooter.styles = [w3m_onramp_providers_footer_styles];
W3mOnRampProvidersFooter = w3m_onramp_providers_footer_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-onramp-providers-footer')
], W3mOnRampProvidersFooter);

//# sourceMappingURL=index.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-footer/styles.js

/* harmony default export */ const w3m_footer_styles = ((0,esm_exports/* css */.AH) `
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
    animation-timing-function: ${({ easings }) => easings['ease-out-power-2']};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({ easings }) => easings['ease-out-power-2']};
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
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-footer/index.js
var w3m_footer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mFooter = class W3mFooter extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.resizeObserver = undefined;
        this.unsubscribe = [];
        this.status = 'hide';
        this.view = RouterController/* RouterController */.I.state.view;
    }
    firstUpdated() {
        this.status = utils_HelpersUtil_HelpersUtil.hasFooter() ? 'show' : 'hide';
        this.unsubscribe.push(RouterController/* RouterController */.I.subscribeKey('view', val => {
            this.view = val;
            this.status = utils_HelpersUtil_HelpersUtil.hasFooter() ? 'show' : 'hide';
            if (this.status === 'hide') {
                const globalStyles = document.documentElement.style;
                globalStyles.setProperty('--apkt-footer-height', '0px');
            }
        }));
        this.resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry.target === this.getWrapper()) {
                    const newHeight = `${entry.contentRect.height}px`;
                    const globalStyles = document.documentElement.style;
                    globalStyles.setProperty('--apkt-footer-height', newHeight);
                }
            }
        });
        this.resizeObserver.observe(this.getWrapper());
    }
    render() {
        return (0,lit/* html */.qy) `
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `;
    }
    templatePageContainer() {
        if (utils_HelpersUtil_HelpersUtil.hasFooter()) {
            return (0,lit/* html */.qy) ` ${this.templateFooter()}`;
        }
        return null;
    }
    templateFooter() {
        switch (this.view) {
            case 'Networks':
                return this.templateNetworksFooter();
            case 'Connect':
            case 'ConnectWallets':
            case 'OnRampFiatSelect':
            case 'OnRampTokenSelect':
                return (0,lit/* html */.qy) `<w3m-legal-footer></w3m-legal-footer>`;
            case 'OnRampProviders':
                return (0,lit/* html */.qy) `<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;
            default:
                return null;
        }
    }
    templateNetworksFooter() {
        return (0,lit/* html */.qy) ` <wui-flex
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
    </wui-flex>`;
    }
    onNetworkHelp() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_NETWORK_HELP' });
        RouterController/* RouterController */.I.push('WhatIsANetwork');
    }
    getWrapper() {
        return this.shadowRoot?.querySelector('div.container');
    }
};
W3mFooter.styles = [w3m_footer_styles];
w3m_footer_decorate([
    (0,decorators/* state */.wk)()
], W3mFooter.prototype, "status", void 0);
w3m_footer_decorate([
    (0,decorators/* state */.wk)()
], W3mFooter.prototype, "view", void 0);
W3mFooter = w3m_footer_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-footer')
], W3mFooter);

//# sourceMappingURL=index.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/styles.js

/* harmony default export */ const w3m_router_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    width: inherit;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/index.js
var w3m_router_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mRouter = class W3mRouter extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.viewState = RouterController/* RouterController */.I.state.view;
        this.history = RouterController/* RouterController */.I.state.history.join(',');
        this.unsubscribe.push(RouterController/* RouterController */.I.subscribeKey('view', () => {
            this.history = RouterController/* RouterController */.I.state.history.join(',');
            document.documentElement.style.setProperty('--apkt-duration-dynamic', 'var(--apkt-durations-lg)');
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        document.documentElement.style.setProperty('--apkt-duration-dynamic', '0s');
    }
    render() {
        return (0,lit/* html */.qy) `${this.templatePageContainer()}`;
    }
    templatePageContainer() {
        return (0,lit/* html */.qy) `<w3m-router-container
      history=${this.history}
      .setView=${() => {
            this.viewState = RouterController/* RouterController */.I.state.view;
        }}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`;
    }
    viewTemplate(view) {
        switch (view) {
            case 'AccountSettings':
                return (0,lit/* html */.qy) `<w3m-account-settings-view></w3m-account-settings-view>`;
            case 'Account':
                return (0,lit/* html */.qy) `<w3m-account-view></w3m-account-view>`;
            case 'AllWallets':
                return (0,lit/* html */.qy) `<w3m-all-wallets-view></w3m-all-wallets-view>`;
            case 'ApproveTransaction':
                return (0,lit/* html */.qy) `<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
            case 'BuyInProgress':
                return (0,lit/* html */.qy) `<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
            case 'ChooseAccountName':
                return (0,lit/* html */.qy) `<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
            case 'Connect':
                return (0,lit/* html */.qy) `<w3m-connect-view></w3m-connect-view>`;
            case 'Create':
                return (0,lit/* html */.qy) `<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;
            case 'ConnectingWalletConnect':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
            case 'ConnectingWalletConnectBasic':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;
            case 'ConnectingExternal':
                return (0,lit/* html */.qy) `<w3m-connecting-external-view></w3m-connecting-external-view>`;
            case 'ConnectingSiwe':
                return (0,lit/* html */.qy) `<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
            case 'ConnectWallets':
                return (0,lit/* html */.qy) `<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
            case 'ConnectSocials':
                return (0,lit/* html */.qy) `<w3m-connect-socials-view></w3m-connect-socials-view>`;
            case 'ConnectingSocial':
                return (0,lit/* html */.qy) `<w3m-connecting-social-view></w3m-connecting-social-view>`;
            case 'DataCapture':
                return (0,lit/* html */.qy) `<w3m-data-capture-view></w3m-data-capture-view>`;
            case 'DataCaptureOtpConfirm':
                return (0,lit/* html */.qy) `<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;
            case 'Downloads':
                return (0,lit/* html */.qy) `<w3m-downloads-view></w3m-downloads-view>`;
            case 'EmailLogin':
                return (0,lit/* html */.qy) `<w3m-email-login-view></w3m-email-login-view>`;
            case 'EmailVerifyOtp':
                return (0,lit/* html */.qy) `<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
            case 'EmailVerifyDevice':
                return (0,lit/* html */.qy) `<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
            case 'GetWallet':
                return (0,lit/* html */.qy) `<w3m-get-wallet-view></w3m-get-wallet-view>`;
            case 'Networks':
                return (0,lit/* html */.qy) `<w3m-networks-view></w3m-networks-view>`;
            case 'SwitchNetwork':
                return (0,lit/* html */.qy) `<w3m-network-switch-view></w3m-network-switch-view>`;
            case 'ProfileWallets':
                return (0,lit/* html */.qy) `<w3m-profile-wallets-view></w3m-profile-wallets-view>`;
            case 'Transactions':
                return (0,lit/* html */.qy) `<w3m-transactions-view></w3m-transactions-view>`;
            case 'OnRampProviders':
                return (0,lit/* html */.qy) `<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
            case 'OnRampTokenSelect':
                return (0,lit/* html */.qy) `<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
            case 'OnRampFiatSelect':
                return (0,lit/* html */.qy) `<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
            case 'UpgradeEmailWallet':
                return (0,lit/* html */.qy) `<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
            case 'UpdateEmailWallet':
                return (0,lit/* html */.qy) `<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
            case 'UpdateEmailPrimaryOtp':
                return (0,lit/* html */.qy) `<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
            case 'UpdateEmailSecondaryOtp':
                return (0,lit/* html */.qy) `<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
            case 'UnsupportedChain':
                return (0,lit/* html */.qy) `<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
            case 'Swap':
                return (0,lit/* html */.qy) `<w3m-swap-view></w3m-swap-view>`;
            case 'SwapSelectToken':
                return (0,lit/* html */.qy) `<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
            case 'SwapPreview':
                return (0,lit/* html */.qy) `<w3m-swap-preview-view></w3m-swap-preview-view>`;
            case 'WalletSend':
                return (0,lit/* html */.qy) `<w3m-wallet-send-view></w3m-wallet-send-view>`;
            case 'WalletSendSelectToken':
                return (0,lit/* html */.qy) `<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
            case 'WalletSendPreview':
                return (0,lit/* html */.qy) `<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
            case 'WalletSendConfirmed':
                return (0,lit/* html */.qy) `<w3m-send-confirmed-view></w3m-send-confirmed-view>`;
            case 'WhatIsABuy':
                return (0,lit/* html */.qy) `<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
            case 'WalletReceive':
                return (0,lit/* html */.qy) `<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
            case 'WalletCompatibleNetworks':
                return (0,lit/* html */.qy) `<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
            case 'WhatIsAWallet':
                return (0,lit/* html */.qy) `<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
            case 'ConnectingMultiChain':
                return (0,lit/* html */.qy) `<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;
            case 'WhatIsANetwork':
                return (0,lit/* html */.qy) `<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
            case 'ConnectingFarcaster':
                return (0,lit/* html */.qy) `<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;
            case 'SwitchActiveChain':
                return (0,lit/* html */.qy) `<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;
            case 'RegisterAccountName':
                return (0,lit/* html */.qy) `<w3m-register-account-name-view></w3m-register-account-name-view>`;
            case 'RegisterAccountNameSuccess':
                return (0,lit/* html */.qy) `<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
            case 'SmartSessionCreated':
                return (0,lit/* html */.qy) `<w3m-smart-session-created-view></w3m-smart-session-created-view>`;
            case 'SmartSessionList':
                return (0,lit/* html */.qy) `<w3m-smart-session-list-view></w3m-smart-session-list-view>`;
            case 'SIWXSignMessage':
                return (0,lit/* html */.qy) `<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;
            case 'Pay':
                return (0,lit/* html */.qy) `<w3m-pay-view></w3m-pay-view>`;
            case 'PayLoading':
                return (0,lit/* html */.qy) `<w3m-pay-loading-view></w3m-pay-loading-view>`;
            case 'PayQuote':
                return (0,lit/* html */.qy) `<w3m-pay-quote-view></w3m-pay-quote-view>`;
            case 'FundWallet':
                return (0,lit/* html */.qy) `<w3m-fund-wallet-view></w3m-fund-wallet-view>`;
            case 'PayWithExchange':
                return (0,lit/* html */.qy) `<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;
            case 'PayWithExchangeSelectAsset':
                return (0,lit/* html */.qy) `<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;
            case 'UsageExceeded':
                return (0,lit/* html */.qy) `<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;
            case 'SmartAccountSettings':
                return (0,lit/* html */.qy) `<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`;
            default:
                return (0,lit/* html */.qy) `<w3m-connect-view></w3m-connect-view>`;
        }
    }
};
W3mRouter.styles = [w3m_router_styles];
w3m_router_decorate([
    (0,decorators/* state */.wk)()
], W3mRouter.prototype, "viewState", void 0);
w3m_router_decorate([
    (0,decorators/* state */.wk)()
], W3mRouter.prototype, "history", void 0);
W3mRouter = w3m_router_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-router')
], W3mRouter);

//# sourceMappingURL=index.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/index.js
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
                this.dataset['border'] = utils_HelpersUtil_HelpersUtil.hasFooter() ? 'true' : 'false';
                this.padding = PADDING_OVERRIDES[RouterController/* RouterController */.I.state.view] ?? esm_exports/* vars */.f.spacing[1];
            })
        ]);
    }
    firstUpdated() {
        this.dataset['border'] = utils_HelpersUtil_HelpersUtil.hasFooter() ? 'true' : 'false';
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
            SwapController.resetState();
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-usage-exceeded-view/styles.js

/* harmony default export */ const w3m_usage_exceeded_view_styles = ((0,esm_exports/* css */.AH) `
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    background-color: ${({ colors }) => colors.semanticError010};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-usage-exceeded-view/index.js
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
// EXTERNAL MODULE: ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AdapterController/index.js
var controllers_AdapterController = __webpack_require__(266306);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js + 4 modules
var wui_list_wallet = __webpack_require__(739033);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-list-wallet/styles.js

/* harmony default export */ const w3m_list_wallet_styles = ((0,esm_exports/* css */.AH) `
  :host {
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-list-wallet/index.js
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
        const isMultiChain = Object.keys(controllers_AdapterController/* AdapterController */.q.state.adapters).length > 1;
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-router-container/styles.js

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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-router-container/index.js
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
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/w3m-modal.js




//# sourceMappingURL=w3m-modal.js.map

/***/ }

}]);