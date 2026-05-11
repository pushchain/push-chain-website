"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[80362],{

/***/ 181760
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GN: () => (/* binding */ SwapController)
});

// UNUSED EXPORTS: INITIAL_GAS_LIMIT, TO_AMOUNT_DECIMALS

// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla.mjs + 1 modules
var vanilla = __webpack_require__(552095);
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla/utils.mjs
var utils = __webpack_require__(427088);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js
var NumberUtil = __webpack_require__(566580);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = __webpack_require__(110152);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/BalanceUtil.js + 2 modules
var BalanceUtil = __webpack_require__(382752);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js
var ChainControllerUtil = __webpack_require__(974496);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
var utils_ConstantsUtil = __webpack_require__(562944);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
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
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 1 modules
var ConnectionController = __webpack_require__(418121);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
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