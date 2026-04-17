"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[71845],{

/***/ 771845
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ esm)
});

// UNUSED EXPORTS: MessageFormatter, Methods, Operation, RPC_CALLS, RestrictedMethods, TokenType, TransactionStatus, TransferDirection, getSDKVersion, isObjectEIP712TypedData

;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/version.js
const getSDKVersion = () => '9.1.0';
//# sourceMappingURL=version.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/communication/utils.js
// i.e. 0-255 -> '00'-'ff'
const dec2hex = (dec) => dec.toString(16).padStart(2, '0');
const generateId = (len) => {
    const arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join('');
};
const generateRequestId = () => {
    if (typeof window !== 'undefined') {
        return generateId(10);
    }
    return new Date().getTime().toString(36);
};

//# sourceMappingURL=utils.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/communication/messageFormatter.js


class MessageFormatter {
}
MessageFormatter.makeRequest = (method, params) => {
    const id = generateRequestId();
    return {
        id,
        method,
        params,
        env: {
            sdkVersion: getSDKVersion(),
        },
    };
};
MessageFormatter.makeResponse = (id, data, version) => ({
    id,
    success: true,
    version,
    data,
});
MessageFormatter.makeErrorResponse = (id, error, version) => ({
    id,
    success: false,
    error,
    version,
});

//# sourceMappingURL=messageFormatter.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/communication/methods.js
var Methods;
(function (Methods) {
    Methods["sendTransactions"] = "sendTransactions";
    Methods["rpcCall"] = "rpcCall";
    Methods["getChainInfo"] = "getChainInfo";
    Methods["getSafeInfo"] = "getSafeInfo";
    Methods["getTxBySafeTxHash"] = "getTxBySafeTxHash";
    Methods["getSafeBalances"] = "getSafeBalances";
    Methods["signMessage"] = "signMessage";
    Methods["signTypedMessage"] = "signTypedMessage";
    Methods["getEnvironmentInfo"] = "getEnvironmentInfo";
    Methods["getOffChainSignature"] = "getOffChainSignature";
    Methods["requestAddressBook"] = "requestAddressBook";
    Methods["wallet_getPermissions"] = "wallet_getPermissions";
    Methods["wallet_requestPermissions"] = "wallet_requestPermissions";
})(Methods || (Methods = {}));
var RestrictedMethods;
(function (RestrictedMethods) {
    RestrictedMethods["requestAddressBook"] = "requestAddressBook";
})(RestrictedMethods || (RestrictedMethods = {}));
//# sourceMappingURL=methods.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/communication/index.js

class PostMessageCommunicator {
    constructor(allowedOrigins = null, debugMode = false) {
        this.allowedOrigins = null;
        this.callbacks = new Map();
        this.debugMode = false;
        this.isServer = typeof window === 'undefined';
        this.isValidMessage = ({ origin, data, source }) => {
            const emptyOrMalformed = !data;
            const sentFromParentEl = !this.isServer && source === window.parent;
            const majorVersionNumber = typeof data.version !== 'undefined' && parseInt(data.version.split('.')[0]);
            const allowedSDKVersion = typeof majorVersionNumber === 'number' && majorVersionNumber >= 1;
            let validOrigin = true;
            if (Array.isArray(this.allowedOrigins)) {
                validOrigin = this.allowedOrigins.find((regExp) => regExp.test(origin)) !== undefined;
            }
            return !emptyOrMalformed && sentFromParentEl && allowedSDKVersion && validOrigin;
        };
        this.logIncomingMessage = (msg) => {
            console.info(`Safe Apps SDK v1: A message was received from origin ${msg.origin}. `, msg.data);
        };
        this.onParentMessage = (msg) => {
            if (this.isValidMessage(msg)) {
                this.debugMode && this.logIncomingMessage(msg);
                this.handleIncomingMessage(msg.data);
            }
        };
        this.handleIncomingMessage = (payload) => {
            const { id } = payload;
            const cb = this.callbacks.get(id);
            if (cb) {
                cb(payload);
                this.callbacks.delete(id);
            }
        };
        this.send = (method, params) => {
            const request = MessageFormatter.makeRequest(method, params);
            if (this.isServer) {
                throw new Error("Window doesn't exist");
            }
            window.parent.postMessage(request, '*');
            return new Promise((resolve, reject) => {
                this.callbacks.set(request.id, (response) => {
                    if (!response.success) {
                        reject(new Error(response.error));
                        return;
                    }
                    resolve(response);
                });
            });
        };
        this.allowedOrigins = allowedOrigins;
        this.debugMode = debugMode;
        if (!this.isServer) {
            window.addEventListener('message', this.onParentMessage);
        }
    }
}
/* harmony default export */ const communication = (PostMessageCommunicator);

//# sourceMappingURL=index.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/types/sdk.js
const isObjectEIP712TypedData = (obj) => {
    return typeof obj === 'object' && obj != null && 'domain' in obj && 'types' in obj && 'message' in obj;
};
//# sourceMappingURL=sdk.js.map
// EXTERNAL MODULE: ./node_modules/@safe-global/safe-gateway-typescript-sdk/dist/index.js
var dist = __webpack_require__(81611);
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/types/gateway.js

//# sourceMappingURL=gateway.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/types/messaging.js

//# sourceMappingURL=messaging.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/types/index.js




//# sourceMappingURL=index.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/txs/index.js


class TXs {
    constructor(communicator) {
        this.communicator = communicator;
    }
    async getBySafeTxHash(safeTxHash) {
        if (!safeTxHash) {
            throw new Error('Invalid safeTxHash');
        }
        const response = await this.communicator.send(Methods.getTxBySafeTxHash, { safeTxHash });
        return response.data;
    }
    async signMessage(message) {
        const messagePayload = {
            message,
        };
        const response = await this.communicator.send(Methods.signMessage, messagePayload);
        return response.data;
    }
    async signTypedMessage(typedData) {
        if (!isObjectEIP712TypedData(typedData)) {
            throw new Error('Invalid typed data');
        }
        const response = await this.communicator.send(Methods.signTypedMessage, { typedData });
        return response.data;
    }
    async send({ txs, params }) {
        if (!txs || !txs.length) {
            throw new Error('No transactions were passed');
        }
        const messagePayload = {
            txs,
            params,
        };
        const response = await this.communicator.send(Methods.sendTransactions, messagePayload);
        return response.data;
    }
}

//# sourceMappingURL=index.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/eth/constants.js
const RPC_CALLS = {
    eth_call: 'eth_call',
    eth_gasPrice: 'eth_gasPrice',
    eth_getLogs: 'eth_getLogs',
    eth_getBalance: 'eth_getBalance',
    eth_getCode: 'eth_getCode',
    eth_getBlockByHash: 'eth_getBlockByHash',
    eth_getBlockByNumber: 'eth_getBlockByNumber',
    eth_getStorageAt: 'eth_getStorageAt',
    eth_getTransactionByHash: 'eth_getTransactionByHash',
    eth_getTransactionReceipt: 'eth_getTransactionReceipt',
    eth_getTransactionCount: 'eth_getTransactionCount',
    eth_estimateGas: 'eth_estimateGas',
    safe_setSettings: 'safe_setSettings',
};
//# sourceMappingURL=constants.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/eth/index.js


const inputFormatters = {
    defaultBlockParam: (arg = 'latest') => arg,
    returnFullTxObjectParam: (arg = false) => arg,
    blockNumberToHex: (arg) => Number.isInteger(arg) ? `0x${arg.toString(16)}` : arg,
};
class Eth {
    constructor(communicator) {
        this.communicator = communicator;
        this.call = this.buildRequest({
            call: RPC_CALLS.eth_call,
            formatters: [null, inputFormatters.defaultBlockParam],
        });
        this.getBalance = this.buildRequest({
            call: RPC_CALLS.eth_getBalance,
            formatters: [null, inputFormatters.defaultBlockParam],
        });
        this.getCode = this.buildRequest({
            call: RPC_CALLS.eth_getCode,
            formatters: [null, inputFormatters.defaultBlockParam],
        });
        this.getStorageAt = this.buildRequest({
            call: RPC_CALLS.eth_getStorageAt,
            formatters: [null, inputFormatters.blockNumberToHex, inputFormatters.defaultBlockParam],
        });
        this.getPastLogs = this.buildRequest({
            call: RPC_CALLS.eth_getLogs,
        });
        this.getBlockByHash = this.buildRequest({
            call: RPC_CALLS.eth_getBlockByHash,
            formatters: [null, inputFormatters.returnFullTxObjectParam],
        });
        this.getBlockByNumber = this.buildRequest({
            call: RPC_CALLS.eth_getBlockByNumber,
            formatters: [inputFormatters.blockNumberToHex, inputFormatters.returnFullTxObjectParam],
        });
        this.getTransactionByHash = this.buildRequest({
            call: RPC_CALLS.eth_getTransactionByHash,
        });
        this.getTransactionReceipt = this.buildRequest({
            call: RPC_CALLS.eth_getTransactionReceipt,
        });
        this.getTransactionCount = this.buildRequest({
            call: RPC_CALLS.eth_getTransactionCount,
            formatters: [null, inputFormatters.defaultBlockParam],
        });
        this.getGasPrice = this.buildRequest({
            call: RPC_CALLS.eth_gasPrice,
        });
        this.getEstimateGas = (transaction) => this.buildRequest({
            call: RPC_CALLS.eth_estimateGas,
        })([transaction]);
        this.setSafeSettings = this.buildRequest({
            call: RPC_CALLS.safe_setSettings,
        });
    }
    buildRequest(args) {
        const { call, formatters } = args;
        return async (params) => {
            if (formatters && Array.isArray(params)) {
                formatters.forEach((formatter, i) => {
                    if (formatter) {
                        params[i] = formatter(params[i]);
                    }
                });
            }
            const payload = {
                call,
                params: params || [],
            };
            const response = await this.communicator.send(Methods.rpcCall, payload);
            return response.data;
        };
    }
}

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeFunctionData.js + 1 modules
var encodeFunctionData = __webpack_require__(277330);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/signature/hashMessage.js + 2 modules
var hashMessage = __webpack_require__(170881);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/signature/hashTypedData.js + 2 modules
var hashTypedData = __webpack_require__(776431);
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/safe/signatures.js
const MAGIC_VALUE = '0x1626ba7e';
const MAGIC_VALUE_BYTES = '0x20c13b0b';

//# sourceMappingURL=signatures.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/types/permissions.js
const PERMISSIONS_REQUEST_REJECTED = 4001;
class PermissionsError extends Error {
    constructor(message, code, data) {
        super(message);
        this.code = code;
        this.data = data;
        // Should adjust prototype manually because how TS handles the type extension compilation
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, PermissionsError.prototype);
    }
}
//# sourceMappingURL=permissions.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/wallet/index.js


class Wallet {
    constructor(communicator) {
        this.communicator = communicator;
    }
    async getPermissions() {
        const response = await this.communicator.send(Methods.wallet_getPermissions, undefined);
        return response.data;
    }
    async requestPermissions(permissions) {
        if (!this.isPermissionRequestValid(permissions)) {
            throw new PermissionsError('Permissions request is invalid', PERMISSIONS_REQUEST_REJECTED);
        }
        try {
            const response = await this.communicator.send(Methods.wallet_requestPermissions, permissions);
            return response.data;
        }
        catch {
            throw new PermissionsError('Permissions rejected', PERMISSIONS_REQUEST_REJECTED);
        }
    }
    isPermissionRequestValid(permissions) {
        return permissions.every((pr) => {
            if (typeof pr === 'object') {
                return Object.keys(pr).every((method) => {
                    if (Object.values(RestrictedMethods).includes(method)) {
                        return true;
                    }
                    return false;
                });
            }
            return false;
        });
    }
}

//# sourceMappingURL=index.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/decorators/requirePermissions.js


const hasPermission = (required, permissions) => permissions.some((permission) => permission.parentCapability === required);
const requirePermission = () => (_, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async function () {
        // @ts-expect-error accessing private property from decorator. 'this' context is the class instance
        const wallet = new Wallet(this.communicator);
        let currentPermissions = await wallet.getPermissions();
        if (!hasPermission(propertyKey, currentPermissions)) {
            currentPermissions = await wallet.requestPermissions([{ [propertyKey]: {} }]);
        }
        if (!hasPermission(propertyKey, currentPermissions)) {
            throw new PermissionsError('Permissions rejected', PERMISSIONS_REQUEST_REJECTED);
        }
        return originalMethod.apply(this);
    };
    return descriptor;
};
/* harmony default export */ const requirePermissions = (requirePermission);
//# sourceMappingURL=requirePermissions.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/safe/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






class Safe {
    constructor(communicator) {
        this.communicator = communicator;
    }
    async getChainInfo() {
        const response = await this.communicator.send(Methods.getChainInfo, undefined);
        return response.data;
    }
    async getInfo() {
        const response = await this.communicator.send(Methods.getSafeInfo, undefined);
        return response.data;
    }
    // There is a possibility that this method will change because we may add pagination to the endpoint
    async experimental_getBalances({ currency = 'usd' } = {}) {
        const response = await this.communicator.send(Methods.getSafeBalances, {
            currency,
        });
        return response.data;
    }
    async check1271Signature(messageHash, signature = '0x') {
        const safeInfo = await this.getInfo();
        const encodedIsValidSignatureCall = (0,encodeFunctionData/* encodeFunctionData */.p)({
            abi: [
                {
                    constant: false,
                    inputs: [
                        {
                            name: '_dataHash',
                            type: 'bytes32',
                        },
                        {
                            name: '_signature',
                            type: 'bytes',
                        },
                    ],
                    name: 'isValidSignature',
                    outputs: [
                        {
                            name: '',
                            type: 'bytes4',
                        },
                    ],
                    payable: false,
                    stateMutability: 'nonpayable',
                    type: 'function',
                },
            ],
            functionName: 'isValidSignature',
            args: [messageHash, signature],
        });
        const payload = {
            call: RPC_CALLS.eth_call,
            params: [
                {
                    to: safeInfo.safeAddress,
                    data: encodedIsValidSignatureCall,
                },
                'latest',
            ],
        };
        try {
            const response = await this.communicator.send(Methods.rpcCall, payload);
            return response.data.slice(0, 10).toLowerCase() === MAGIC_VALUE;
        }
        catch (err) {
            return false;
        }
    }
    async check1271SignatureBytes(messageHash, signature = '0x') {
        const safeInfo = await this.getInfo();
        const encodedIsValidSignatureCall = (0,encodeFunctionData/* encodeFunctionData */.p)({
            abi: [
                {
                    constant: false,
                    inputs: [
                        {
                            name: '_data',
                            type: 'bytes',
                        },
                        {
                            name: '_signature',
                            type: 'bytes',
                        },
                    ],
                    name: 'isValidSignature',
                    outputs: [
                        {
                            name: '',
                            type: 'bytes4',
                        },
                    ],
                    payable: false,
                    stateMutability: 'nonpayable',
                    type: 'function',
                },
            ],
            functionName: 'isValidSignature',
            args: [messageHash, signature],
        });
        const payload = {
            call: RPC_CALLS.eth_call,
            params: [
                {
                    to: safeInfo.safeAddress,
                    data: encodedIsValidSignatureCall,
                },
                'latest',
            ],
        };
        try {
            const response = await this.communicator.send(Methods.rpcCall, payload);
            return response.data.slice(0, 10).toLowerCase() === MAGIC_VALUE_BYTES;
        }
        catch (err) {
            return false;
        }
    }
    calculateMessageHash(message) {
        return (0,hashMessage/* hashMessage */.A)(message);
    }
    calculateTypedMessageHash(typedMessage) {
        const chainId = typeof typedMessage.domain.chainId === 'object'
            ? typedMessage.domain.chainId.toNumber()
            : Number(typedMessage.domain.chainId);
        let primaryType = typedMessage.primaryType;
        if (!primaryType) {
            const fields = Object.values(typedMessage.types);
            // We try to infer primaryType (simplified ether's version)
            const primaryTypes = Object.keys(typedMessage.types).filter((typeName) => fields.every((dataTypes) => dataTypes.every(({ type }) => type.replace('[', '').replace(']', '') !== typeName)));
            if (primaryTypes.length === 0 || primaryTypes.length > 1)
                throw new Error('Please specify primaryType');
            primaryType = primaryTypes[0];
        }
        return (0,hashTypedData/* hashTypedData */.Zh)({
            message: typedMessage.message,
            domain: {
                ...typedMessage.domain,
                chainId,
                verifyingContract: typedMessage.domain.verifyingContract,
                salt: typedMessage.domain.salt,
            },
            types: typedMessage.types,
            primaryType,
        });
    }
    async getOffChainSignature(messageHash) {
        const response = await this.communicator.send(Methods.getOffChainSignature, messageHash);
        return response.data;
    }
    async isMessageSigned(message, signature = '0x') {
        let check;
        if (typeof message === 'string') {
            check = async () => {
                const messageHash = this.calculateMessageHash(message);
                const messageHashSigned = await this.isMessageHashSigned(messageHash, signature);
                return messageHashSigned;
            };
        }
        if (isObjectEIP712TypedData(message)) {
            check = async () => {
                const messageHash = this.calculateTypedMessageHash(message);
                const messageHashSigned = await this.isMessageHashSigned(messageHash, signature);
                return messageHashSigned;
            };
        }
        if (check) {
            const isValid = await check();
            return isValid;
        }
        throw new Error('Invalid message type');
    }
    async isMessageHashSigned(messageHash, signature = '0x') {
        const checks = [this.check1271Signature.bind(this), this.check1271SignatureBytes.bind(this)];
        for (const check of checks) {
            const isValid = await check(messageHash, signature);
            if (isValid) {
                return true;
            }
        }
        return false;
    }
    async getEnvironmentInfo() {
        const response = await this.communicator.send(Methods.getEnvironmentInfo, undefined);
        return response.data;
    }
    async requestAddressBook() {
        const response = await this.communicator.send(Methods.requestAddressBook, undefined);
        return response.data;
    }
}
__decorate([
    requirePermissions()
], Safe.prototype, "requestAddressBook", null);

//# sourceMappingURL=index.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/sdk.js





class SafeAppsSDK {
    constructor(opts = {}) {
        const { allowedDomains = null, debug = false } = opts;
        this.communicator = new communication(allowedDomains, debug);
        this.eth = new Eth(this.communicator);
        this.txs = new TXs(this.communicator);
        this.safe = new Safe(this.communicator);
        this.wallet = new Wallet(this.communicator);
    }
}
/* harmony default export */ const sdk = (SafeAppsSDK);
//# sourceMappingURL=sdk.js.map
;// ./node_modules/@safe-global/safe-apps-sdk/dist/esm/index.js

/* harmony default export */ const esm = (sdk);






//# sourceMappingURL=index.js.map

/***/ },

/***/ 170881
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ hashMessage)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/keccak256.js
var keccak256 = __webpack_require__(282040);
;// ./node_modules/viem/_esm/constants/strings.js
const presignMessagePrefix = '\x19Ethereum Signed Message:\n';
//# sourceMappingURL=strings.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/size.js
var size = __webpack_require__(885182);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(584192);
;// ./node_modules/viem/_esm/utils/signature/toPrefixedMessage.js




function toPrefixedMessage(message_) {
    const message = (() => {
        if (typeof message_ === 'string')
            return (0,toHex/* stringToHex */.i3)(message_);
        if (typeof message_.raw === 'string')
            return message_.raw;
        return (0,toHex/* bytesToHex */.My)(message_.raw);
    })();
    const prefix = (0,toHex/* stringToHex */.i3)(`${presignMessagePrefix}${(0,size/* size */.E)(message)}`);
    return (0,concat/* concat */.xW)([prefix, message]);
}
//# sourceMappingURL=toPrefixedMessage.js.map
;// ./node_modules/viem/_esm/utils/signature/hashMessage.js


function hashMessage(message, to_) {
    return (0,keccak256/* keccak256 */.S)(toPrefixedMessage(message), to_);
}
//# sourceMappingURL=hashMessage.js.map

/***/ },

/***/ 776431
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Zh: () => (/* binding */ hashTypedData)
});

// UNUSED EXPORTS: encodeType, hashDomain, hashStruct

// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(584192);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/keccak256.js
var keccak256 = __webpack_require__(282040);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/abi.js
var abi = __webpack_require__(137372);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/address.js
var address = __webpack_require__(14306);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stringify.js
var stringify = __webpack_require__(218463);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(345765);
;// ./node_modules/viem/_esm/errors/typedData.js


class InvalidDomainError extends base/* BaseError */.C {
    constructor({ domain }) {
        super(`Invalid domain "${(0,stringify/* stringify */.A)(domain)}".`, {
            metaMessages: ['Must be a valid EIP-712 domain.'],
        });
    }
}
class InvalidPrimaryTypeError extends base/* BaseError */.C {
    constructor({ primaryType, types, }) {
        super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
            docsPath: '/api/glossary/Errors#typeddatainvalidprimarytypeerror',
            metaMessages: ['Check that the primary type is a key in `types`.'],
        });
    }
}
class InvalidStructTypeError extends base/* BaseError */.C {
    constructor({ type }) {
        super(`Struct type "${type}" is invalid.`, {
            metaMessages: ['Struct type must not be a Solidity type.'],
            name: 'InvalidStructTypeError',
        });
    }
}
//# sourceMappingURL=typedData.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/isAddress.js
var isAddress = __webpack_require__(529873);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/size.js
var size = __webpack_require__(885182);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/regex.js
var regex = __webpack_require__(158213);
;// ./node_modules/viem/_esm/utils/typedData.js
/* unused harmony import specifier */ var hashDomain;
/* unused harmony import specifier */ var typedData_stringify;









function serializeTypedData(parameters) {
    const { domain: domain_, message: message_, primaryType, types, } = parameters;
    const normalizeData = (struct, data_) => {
        const data = { ...data_ };
        for (const param of struct) {
            const { name, type } = param;
            if (type === 'address')
                data[name] = data[name].toLowerCase();
        }
        return data;
    };
    const domain = (() => {
        if (!types.EIP712Domain)
            return {};
        if (!domain_)
            return {};
        return normalizeData(types.EIP712Domain, domain_);
    })();
    const message = (() => {
        if (primaryType === 'EIP712Domain')
            return undefined;
        return normalizeData(types[primaryType], message_);
    })();
    return typedData_stringify({ domain, message, primaryType, types });
}
function validateTypedData(parameters) {
    const { domain, message, primaryType, types } = parameters;
    const validateData = (struct, data) => {
        for (const param of struct) {
            const { name, type } = param;
            const value = data[name];
            const integerMatch = type.match(regex/* integerRegex */.Ge);
            if (integerMatch &&
                (typeof value === 'number' || typeof value === 'bigint')) {
                const [_type, base, size_] = integerMatch;
                // If number cannot be cast to a sized hex value, it is out of range
                // and will throw.
                (0,toHex/* numberToHex */.cK)(value, {
                    signed: base === 'int',
                    size: Number.parseInt(size_, 10) / 8,
                });
            }
            if (type === 'address' && typeof value === 'string' && !(0,isAddress/* isAddress */.P)(value))
                throw new address/* InvalidAddressError */.M({ address: value });
            const bytesMatch = type.match(regex/* bytesRegex */.BD);
            if (bytesMatch) {
                const [_type, size_] = bytesMatch;
                if (size_ && (0,size/* size */.E)(value) !== Number.parseInt(size_, 10))
                    throw new abi/* BytesSizeMismatchError */.BI({
                        expectedSize: Number.parseInt(size_, 10),
                        givenSize: (0,size/* size */.E)(value),
                    });
            }
            const struct = types[type];
            if (struct) {
                validateReference(type);
                validateData(struct, value);
            }
        }
    };
    // Validate domain types.
    if (types.EIP712Domain && domain) {
        if (typeof domain !== 'object')
            throw new InvalidDomainError({ domain });
        validateData(types.EIP712Domain, domain);
    }
    // Validate message types.
    if (primaryType !== 'EIP712Domain') {
        if (types[primaryType])
            validateData(types[primaryType], message);
        else
            throw new InvalidPrimaryTypeError({ primaryType, types });
    }
}
function getTypesForEIP712Domain({ domain, }) {
    return [
        typeof domain?.name === 'string' && { name: 'name', type: 'string' },
        domain?.version && { name: 'version', type: 'string' },
        (typeof domain?.chainId === 'number' ||
            typeof domain?.chainId === 'bigint') && {
            name: 'chainId',
            type: 'uint256',
        },
        domain?.verifyingContract && {
            name: 'verifyingContract',
            type: 'address',
        },
        domain?.salt && { name: 'salt', type: 'bytes32' },
    ].filter(Boolean);
}
function domainSeparator({ domain }) {
    return hashDomain({
        domain: domain,
        types: {
            EIP712Domain: getTypesForEIP712Domain({ domain }),
        },
    });
}
/** @internal */
function validateReference(type) {
    // Struct type must not be a Solidity type.
    if (type === 'address' ||
        type === 'bool' ||
        type === 'string' ||
        type.startsWith('bytes') ||
        type.startsWith('uint') ||
        type.startsWith('int'))
        throw new InvalidStructTypeError({ type });
}
//# sourceMappingURL=typedData.js.map
;// ./node_modules/viem/_esm/utils/signature/hashTypedData.js
// Implementation forked and adapted from https://github.com/MetaMask/eth-sig-util/blob/main/src/sign-typed-data.ts





function hashTypedData(parameters) {
    const { domain = {}, message, primaryType, } = parameters;
    const types = {
        EIP712Domain: getTypesForEIP712Domain({ domain }),
        ...parameters.types,
    };
    // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
    // as we can't statically check this with TypeScript.
    validateTypedData({
        domain,
        message,
        primaryType,
        types,
    });
    const parts = ['0x1901'];
    if (domain)
        parts.push(hashTypedData_hashDomain({
            domain,
            types: types,
        }));
    if (primaryType !== 'EIP712Domain')
        parts.push(hashStruct({
            data: message,
            primaryType,
            types: types,
        }));
    return (0,keccak256/* keccak256 */.S)((0,concat/* concat */.xW)(parts));
}
function hashTypedData_hashDomain({ domain, types, }) {
    return hashStruct({
        data: domain,
        primaryType: 'EIP712Domain',
        types: types,
    });
}
function hashStruct({ data, primaryType, types, }) {
    const encoded = encodeData({
        data: data,
        primaryType,
        types: types,
    });
    return (0,keccak256/* keccak256 */.S)(encoded);
}
function encodeData({ data, primaryType, types, }) {
    const encodedTypes = [{ type: 'bytes32' }];
    const encodedValues = [hashType({ primaryType, types })];
    for (const field of types[primaryType]) {
        const [type, value] = encodeField({
            types,
            name: field.name,
            type: field.type,
            value: data[field.name],
        });
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0,encodeAbiParameters/* encodeAbiParameters */.h)(encodedTypes, encodedValues);
}
function hashType({ primaryType, types, }) {
    const encodedHashType = (0,toHex/* toHex */.nj)(encodeType({ primaryType, types }));
    return (0,keccak256/* keccak256 */.S)(encodedHashType);
}
function encodeType({ primaryType, types, }) {
    let result = '';
    const unsortedDeps = findTypeDependencies({ primaryType, types });
    unsortedDeps.delete(primaryType);
    const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
    for (const type of deps) {
        result += `${type}(${types[type]
            .map(({ name, type: t }) => `${t} ${name}`)
            .join(',')})`;
    }
    return result;
}
function findTypeDependencies({ primaryType: primaryType_, types, }, results = new Set()) {
    const match = primaryType_.match(/^\w*/u);
    const primaryType = match?.[0];
    if (results.has(primaryType) || types[primaryType] === undefined) {
        return results;
    }
    results.add(primaryType);
    for (const field of types[primaryType]) {
        findTypeDependencies({ primaryType: field.type, types }, results);
    }
    return results;
}
function encodeField({ types, name, type, value, }) {
    if (types[type] !== undefined) {
        return [
            { type: 'bytes32' },
            (0,keccak256/* keccak256 */.S)(encodeData({ data: value, primaryType: type, types })),
        ];
    }
    if (type === 'bytes')
        return [{ type: 'bytes32' }, (0,keccak256/* keccak256 */.S)(value)];
    if (type === 'string')
        return [{ type: 'bytes32' }, (0,keccak256/* keccak256 */.S)((0,toHex/* toHex */.nj)(value))];
    if (type.lastIndexOf(']') === type.length - 1) {
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item) => encodeField({
            name,
            type: parsedType,
            types,
            value: item,
        }));
        return [
            { type: 'bytes32' },
            (0,keccak256/* keccak256 */.S)((0,encodeAbiParameters/* encodeAbiParameters */.h)(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v))),
        ];
    }
    return [{ type }, value];
}
//# sourceMappingURL=hashTypedData.js.map

/***/ }

}]);