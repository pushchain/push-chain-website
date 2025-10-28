"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[74129],{

/***/ 596510:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AppKitModal: () => (/* reexport */ AppKitModal),
  W3mListWallet: () => (/* reexport */ W3mListWallet),
  W3mModal: () => (/* reexport */ W3mModal),
  W3mModalBase: () => (/* reexport */ W3mModalBase),
  W3mRouterContainer: () => (/* reexport */ W3mRouterContainer)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(6357);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js
var ParseUtil = __webpack_require__(975910);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(979400);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js + 1 modules
var ModalController = __webpack_require__(91111);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var ApiController = __webpack_require__(188249);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 2 modules
var ConnectionController = __webpack_require__(14400);
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla.mjs + 1 modules
var vanilla = __webpack_require__(552095);
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla/utils.mjs
var utils = __webpack_require__(427088);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js + 1 modules
var NumberUtil = __webpack_require__(157679);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(110152);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/BalanceUtil.js + 2 modules
var BalanceUtil = __webpack_require__(382752);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
var utils_ConstantsUtil = __webpack_require__(562944);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/SwapApiUtil.js
var SwapApiUtil = __webpack_require__(580036);
;// ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/SwapCalculationUtil.js
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js + 1 modules
var withErrorBoundary = __webpack_require__(923082);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js
var AlertController = __webpack_require__(471655);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js
var BlockchainApiController = __webpack_require__(775595);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
;// ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SwapController.js




















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
            state.suggestedTokens = tokens.filter(token => {
                if (utils_ConstantsUtil/* ConstantsUtil */.oU.SWAP_SUGGESTED_TOKENS.includes(token.symbol)) {
                    return true;
                }
                return false;
            });
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
        const balances = await BalanceUtil/* BalanceUtil */.Z.getMyTokensWithBalance(forceUpdate);
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
            .round(0);
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
var esm_exports = __webpack_require__(441454);
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 24 modules
var wui_icon = __webpack_require__(204694);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 3 modules
var wui_text = __webpack_require__(354706);
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
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-alertbar.js

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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js
var src_utils_ConstantsUtil = __webpack_require__(841482);
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
        PayLoading: 'Payment in Progress',
        DataCapture: 'Profile',
        DataCaptureOtpConfirm: 'Confirm Email',
        FundWallet: 'Fund Wallet',
        PayWithExchange: 'Deposit from Exchange',
        PayWithExchangeSelectAsset: 'Select Asset'
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
            }, src_utils_ConstantsUtil/* ConstantsUtil */.o.ANIMATION_DURATIONS.HeaderText);
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
        let direction = src_utils_ConstantsUtil/* ConstantsUtil */.o.VIEW_DIRECTION.Next;
        if (history.length < this.prevHistoryLength) {
            direction = src_utils_ConstantsUtil/* ConstantsUtil */.o.VIEW_DIRECTION.Prev;
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
var wui_loading_spinner = __webpack_require__(508163);
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
;// ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TooltipController.js



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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var exports_wui_icon = __webpack_require__(51636);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/styles.js

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
    background-color: ${({ tokens }) => tokens.theme.textPrimary};
    border: none;
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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/HelpersUtil.js



const HelpersUtil = {
    getTabsByNamespace(namespace) {
        const isEVM = Boolean(namespace) && namespace === ConstantsUtil/* ConstantsUtil */.o.CHAIN.EVM;
        if (!isEVM) {
            return [];
        }
        if (OptionsController/* OptionsController */.H.state.remoteFeatures?.activity === false) {
            return src_utils_ConstantsUtil/* ConstantsUtil */.o.ACCOUNT_TABS.filter(tab => tab.label !== 'Activity');
        }
        return src_utils_ConstantsUtil/* ConstantsUtil */.o.ACCOUNT_TABS;
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
        if (src_utils_ConstantsUtil/* ConstantsUtil */.o.VIEWS_WITH_LEGAL_FOOTER.includes(view)) {
            const { termsConditionsUrl, privacyPolicyUrl } = OptionsController/* OptionsController */.H.state;
            const legalCheckbox = OptionsController/* OptionsController */.H.state.features?.legalCheckbox;
            const showOnlyBranding = (!termsConditionsUrl && !privacyPolicyUrl) || legalCheckbox;
            if (showOnlyBranding) {
                return false;
            }
            return true;
        }
        return src_utils_ConstantsUtil/* ConstantsUtil */.o.VIEWS_WITH_DEFAULT_FOOTER.includes(view);
    }
};
//# sourceMappingURL=HelpersUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js + 3 modules
var wui_ux_by_reown = __webpack_require__(158760);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-footer/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-footer/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/styles.js

/* harmony default export */ const w3m_onramp_providers_footer_styles = ((0,lit/* css */.AH) ``);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/index.js
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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-footer/styles.js

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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-footer/index.js
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
        this.status = HelpersUtil.hasFooter() ? 'show' : 'hide';
        this.unsubscribe.push(RouterController/* RouterController */.I.subscribeKey('view', val => {
            this.view = val;
            this.status = HelpersUtil.hasFooter() ? 'show' : 'hide';
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
        if (HelpersUtil.hasFooter()) {
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
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/styles.js

/* harmony default export */ const w3m_router_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    width: inherit;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/index.js
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
            case 'FundWallet':
                return (0,lit/* html */.qy) `<w3m-fund-wallet-view></w3m-fund-wallet-view>`;
            case 'PayWithExchange':
                return (0,lit/* html */.qy) `<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;
            case 'PayWithExchangeSelectAsset':
                return (0,lit/* html */.qy) `<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;
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
    PayWithExchangeSelectAsset: '0'
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
                this.dataset['border'] = HelpersUtil.hasFooter() ? 'true' : 'false';
                this.padding = PADDING_OVERRIDES[RouterController/* RouterController */.I.state.view] ?? esm_exports/* vars */.f.spacing[1];
            })
        ]);
    }
    firstUpdated() {
        this.dataset['border'] = HelpersUtil.hasFooter() ? 'true' : 'false';
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
        if (caipAddress) {
            await this.onConnected({
                caipAddress,
                isSwitchingNamespace,
                isInProfileView
            });
        }
        else if (!isSwitchingNamespace && !this.enableEmbedded && !isInProfileView) {
            ModalController/* ModalController */.W.close();
        }
        await SIWXUtil/* SIWXUtil */.U.initializeIfEnabled(caipAddress);
        this.caipAddress = caipAddress;
        ChainController/* ChainController */.W.setIsSwitchingNamespace(false);
    }
    async onConnected(args) {
        if (args.isInProfileView) {
            return;
        }
        const { chainNamespace, chainId, address: newAddress } = ParseUtil/* ParseUtil */.C.parseCaipAddress(args.caipAddress);
        const caipNetworkId = `${chainNamespace}:${chainId}`;
        const wasPreviouslyDisconnected = !CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(this.caipAddress);
        const sessions = await SIWXUtil/* SIWXUtil */.U.getSessions({ address: newAddress, caipNetworkId });
        const isAuthenticated = SIWXUtil/* SIWXUtil */.U.getSIWX()
            ? sessions.some(s => s.data.accountAddress === newAddress)
            : true;
        const shouldGoBack = args.isSwitchingNamespace && isAuthenticated && !this.enableEmbedded;
        const shouldCloseEmbeddedModal = this.enableEmbedded && wasPreviouslyDisconnected;
        if (shouldGoBack) {
            RouterController/* RouterController */.I.goBack();
        }
        else if (shouldCloseEmbeddedModal) {
            ModalController/* ModalController */.W.close();
        }
    }
    onNewNetwork(nextCaipNetwork) {
        const prevCaipNetwork = this.caipNetwork;
        const prevCaipNetworkId = prevCaipNetwork?.caipNetworkId?.toString();
        const prevChainNamespace = prevCaipNetwork?.chainNamespace;
        const nextNetworkId = nextCaipNetwork?.caipNetworkId?.toString();
        const nextChainNamespace = nextCaipNetwork?.chainNamespace;
        const networkIdChanged = prevCaipNetworkId !== nextNetworkId;
        const namespaceChanged = prevChainNamespace !== nextChainNamespace;
        const isNetworkChangedInSameNamespace = networkIdChanged && !namespaceChanged;
        const wasUnsupportedNetwork = prevCaipNetwork?.name === ConstantsUtil/* ConstantsUtil */.o.UNSUPPORTED_NETWORK_NAME;
        const isConnectingExternal = RouterController/* RouterController */.I.state.view === 'ConnectingExternal';
        const isInProfileWalletsView = RouterController/* RouterController */.I.state.view === 'ProfileWallets';
        const isNotConnected = !ChainController/* ChainController */.W.getAccountData(nextCaipNetwork?.chainNamespace)
            ?.caipAddress;
        const isUnsupportedNetworkScreen = RouterController/* RouterController */.I.state.view === 'UnsupportedChain';
        const isModalOpen = ModalController/* ModalController */.W.state.open;
        let shouldGoBack = false;
        if (this.enableEmbedded && RouterController/* RouterController */.I.state.view === 'SwitchNetwork') {
            shouldGoBack = true;
        }
        if (networkIdChanged) {
            SwapController.resetState();
        }
        if (isModalOpen && !isConnectingExternal && !isInProfileWalletsView) {
            if (isNotConnected) {
                if (networkIdChanged) {
                    shouldGoBack = true;
                }
            }
            else if (isUnsupportedNetworkScreen) {
                shouldGoBack = true;
            }
            else if (isNetworkChangedInSameNamespace && !wasUnsupportedNetwork) {
                shouldGoBack = true;
            }
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js + 4 modules
var wui_list_wallet = __webpack_require__(739033);
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

/***/ })

}]);