"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[5834],{

/***/ 14306
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ InvalidAddressError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345765);

class InvalidAddressError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ address }) {
        super(`Address "${address}" is invalid.`, {
            metaMessages: [
                '- Address must be a hex value of 20 bytes (40 hex characters).',
                '- Address must match its checksum counterpart.',
            ],
            name: 'InvalidAddressError',
        });
    }
}
//# sourceMappingURL=address.js.map

/***/ },

/***/ 24453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J9: () => (/* binding */ solidityPanic),
/* harmony export */   Mc: () => (/* binding */ solidityError),
/* harmony export */   fD: () => (/* binding */ panicReasons)
/* harmony export */ });
// https://docs.soliditylang.org/en/v0.8.16/control-structures.html#panic-via-assert-and-error-via-require
const panicReasons = {
    1: 'An `assert` condition failed.',
    17: 'Arithmetic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.',
};
const solidityError = {
    inputs: [
        {
            name: 'message',
            type: 'string',
        },
    ],
    name: 'Error',
    type: 'error',
};
const solidityPanic = {
    inputs: [
        {
            name: 'reason',
            type: 'uint256',
        },
    ],
    name: 'Panic',
    type: 'error',
};
//# sourceMappingURL=solidity.js.map

/***/ },

/***/ 85504
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* binding */ localBatchGatewayRequest),
  J: () => (/* binding */ localBatchGatewayUrl)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/constants/abis.js
var abis = __webpack_require__(194823);
// EXTERNAL MODULE: ./node_modules/viem/_esm/constants/solidity.js
var solidity = __webpack_require__(24453);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/abi.js
var errors_abi = __webpack_require__(137372);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/slice.js
var slice = __webpack_require__(993577);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/toFunctionSelector.js
var toFunctionSelector = __webpack_require__(122599);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeAbiParameters.js + 1 modules
var decodeAbiParameters = __webpack_require__(541821);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/formatAbiItem.js
var formatAbiItem = __webpack_require__(895167);
;// ./node_modules/viem/_esm/utils/abi/decodeFunctionData.js





function decodeFunctionData(parameters) {
    const { abi, data } = parameters;
    const signature = (0,slice/* slice */.di)(data, 0, 4);
    const description = abi.find((x) => x.type === 'function' &&
        signature === (0,toFunctionSelector/* toFunctionSelector */.V)((0,formatAbiItem/* formatAbiItem */.B)(x)));
    if (!description)
        throw new errors_abi/* AbiFunctionSignatureNotFoundError */.EB(signature, {
            docsPath: '/docs/contract/decodeFunctionData',
        });
    return {
        functionName: description.name,
        args: ('inputs' in description &&
            description.inputs &&
            description.inputs.length > 0
            ? (0,decodeAbiParameters/* decodeAbiParameters */.n)(description.inputs, (0,slice/* slice */.di)(data, 4))
            : undefined),
    };
}
//# sourceMappingURL=decodeFunctionData.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/getAbiItem.js
var getAbiItem = __webpack_require__(284586);
;// ./node_modules/viem/_esm/utils/abi/encodeErrorResult.js






const docsPath = '/docs/contract/encodeErrorResult';
function encodeErrorResult(parameters) {
    const { abi, errorName, args } = parameters;
    let abiItem = abi[0];
    if (errorName) {
        const item = (0,getAbiItem/* getAbiItem */.iY)({ abi, args, name: errorName });
        if (!item)
            throw new errors_abi/* AbiErrorNotFoundError */.yy(errorName, { docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'error')
        throw new errors_abi/* AbiErrorNotFoundError */.yy(undefined, { docsPath });
    const definition = (0,formatAbiItem/* formatAbiItem */.B)(abiItem);
    const signature = (0,toFunctionSelector/* toFunctionSelector */.V)(definition);
    let data = '0x';
    if (args && args.length > 0) {
        if (!abiItem.inputs)
            throw new errors_abi/* AbiErrorInputsNotFoundError */.ZP(abiItem.name, { docsPath });
        data = (0,encodeAbiParameters/* encodeAbiParameters */.h)(abiItem.inputs, args);
    }
    return (0,concat/* concatHex */.aP)([signature, data]);
}
//# sourceMappingURL=encodeErrorResult.js.map
;// ./node_modules/viem/_esm/utils/abi/encodeFunctionResult.js



const encodeFunctionResult_docsPath = '/docs/contract/encodeFunctionResult';
function encodeFunctionResult(parameters) {
    const { abi, functionName, result } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0,getAbiItem/* getAbiItem */.iY)({ abi, name: functionName });
        if (!item)
            throw new errors_abi/* AbiFunctionNotFoundError */.Iz(functionName, { docsPath: encodeFunctionResult_docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'function')
        throw new errors_abi/* AbiFunctionNotFoundError */.Iz(undefined, { docsPath: encodeFunctionResult_docsPath });
    if (!abiItem.outputs)
        throw new errors_abi/* AbiFunctionOutputsNotFoundError */.MR(abiItem.name, { docsPath: encodeFunctionResult_docsPath });
    const values = (() => {
        if (abiItem.outputs.length === 0)
            return [];
        if (abiItem.outputs.length === 1)
            return [result];
        if (Array.isArray(result))
            return result;
        throw new errors_abi/* InvalidArrayError */.dm(result);
    })();
    return (0,encodeAbiParameters/* encodeAbiParameters */.h)(abiItem.outputs, values);
}
//# sourceMappingURL=encodeFunctionResult.js.map
;// ./node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js





const localBatchGatewayUrl = 'x-batch-gateway:true';
async function localBatchGatewayRequest(parameters) {
    const { data, ccipRequest } = parameters;
    const { args: [queries], } = decodeFunctionData({ abi: abis/* batchGatewayAbi */.b2, data });
    const failures = [];
    const responses = [];
    await Promise.all(queries.map(async (query, i) => {
        try {
            responses[i] = query.urls.includes(localBatchGatewayUrl)
                ? await localBatchGatewayRequest({ data: query.data, ccipRequest })
                : await ccipRequest(query);
            failures[i] = false;
        }
        catch (err) {
            failures[i] = true;
            responses[i] = encodeError(err);
        }
    }));
    return encodeFunctionResult({
        abi: abis/* batchGatewayAbi */.b2,
        functionName: 'query',
        result: [failures, responses],
    });
}
function encodeError(error) {
    if (error.name === 'HttpRequestError' && error.status)
        return encodeErrorResult({
            abi: abis/* batchGatewayAbi */.b2,
            errorName: 'HttpError',
            args: [error.status, error.shortMessage],
        });
    return encodeErrorResult({
        abi: [solidity/* solidityError */.Mc],
        errorName: 'Error',
        args: ['shortMessage' in error ? error.shortMessage : error.message],
    });
}
//# sourceMappingURL=localBatchGatewayRequest.js.map

/***/ },

/***/ 122599
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ toFunctionSelector)
/* harmony export */ });
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(993577);
/* harmony import */ var _toSignatureHash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(392246);


/**
 * Returns the function selector for a given function definition.
 *
 * @example
 * const selector = toFunctionSelector('function ownerOf(uint256 tokenId)')
 * // 0x6352211e
 */
const toFunctionSelector = (fn) => (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_0__/* .slice */ .di)((0,_toSignatureHash_js__WEBPACK_IMPORTED_MODULE_1__/* .toSignatureHash */ .k)(fn), 0, 4);
//# sourceMappingURL=toFunctionSelector.js.map

/***/ },

/***/ 136883
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hi: () => (/* binding */ AccountStateConflictError),
/* harmony export */   ft: () => (/* binding */ StateAssignmentConflictError),
/* harmony export */   uj: () => (/* binding */ prettyStateOverride)
/* harmony export */ });
/* unused harmony export prettyStateMapping */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345765);

class AccountStateConflictError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ address }) {
        super(`State for account "${address}" is set multiple times.`, {
            name: 'AccountStateConflictError',
        });
    }
}
class StateAssignmentConflictError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super('state and stateDiff are set on the same account.', {
            name: 'StateAssignmentConflictError',
        });
    }
}
/** @internal */
function prettyStateMapping(stateMapping) {
    return stateMapping.reduce((pretty, { slot, value }) => {
        return `${pretty}        ${slot}: ${value}\n`;
    }, '');
}
function prettyStateOverride(stateOverride) {
    return stateOverride
        .reduce((pretty, { address, ...state }) => {
        let val = `${pretty}    ${address}:\n`;
        if (state.nonce)
            val += `      nonce: ${state.nonce}\n`;
        if (state.balance)
            val += `      balance: ${state.balance}\n`;
        if (state.code)
            val += `      code: ${state.code}\n`;
        if (state.state) {
            val += '      state:\n';
            val += prettyStateMapping(state.state);
        }
        if (state.stateDiff) {
            val += '      stateDiff:\n';
            val += prettyStateMapping(state.stateDiff);
        }
        return val;
    }, '  State Override:\n')
        .slice(0, -1);
}
//# sourceMappingURL=stateOverride.js.map

/***/ },

/***/ 136993
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _o: () => (/* binding */ isSolidityType),
  Pj: () => (/* binding */ parseAbiParameter),
  uT: () => (/* binding */ parseSignature),
  NV: () => (/* binding */ splitParameters)
});

// UNUSED EXPORTS: isSolidityKeyword, isValidDataLocation, parseConstructorSignature, parseErrorSignature, parseEventSignature, parseFallbackSignature, parseFunctionSignature

// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/regex.js
var regex = __webpack_require__(725276);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/errors/abiItem.js
var abiItem = __webpack_require__(206959);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js
var errors_abiParameter = __webpack_require__(697041);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/errors/signature.js
var errors_signature = __webpack_require__(616188);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/errors.js + 1 modules
var errors = __webpack_require__(813440);
;// ./node_modules/abitype/dist/esm/human-readable/errors/splitParameters.js

class InvalidParenthesisError extends errors/* BaseError */.C {
    constructor({ current, depth }) {
        super('Unbalanced parentheses.', {
            metaMessages: [
                `"${current.trim()}" has too many ${depth > 0 ? 'opening' : 'closing'} parentheses.`,
            ],
            details: `Depth "${depth}"`,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParenthesisError'
        });
    }
}
//# sourceMappingURL=splitParameters.js.map
;// ./node_modules/abitype/dist/esm/human-readable/runtime/cache.js
/**
 * Gets {@link parameterCache} cache key namespaced by {@link type} and {@link structs}. This prevents parameters from being accessible to types that don't allow them (e.g. `string indexed foo` not allowed outside of `type: 'event'`) and ensures different struct definitions with the same name are cached separately.
 * @param param ABI parameter string
 * @param type ABI parameter type
 * @param structs Struct definitions to include in cache key
 * @returns Cache key for {@link parameterCache}
 */
function getParameterCacheKey(param, type, structs) {
    let structKey = '';
    if (structs)
        for (const struct of Object.entries(structs)) {
            if (!struct)
                continue;
            let propertyKey = '';
            for (const property of struct[1]) {
                propertyKey += `[${property.type}${property.name ? `:${property.name}` : ''}]`;
            }
            structKey += `(${struct[0]}{${propertyKey}})`;
        }
    if (type)
        return `${type}:${param}${structKey}`;
    return `${param}${structKey}`;
}
/**
 * Basic cache seeded with common ABI parameter strings.
 *
 * **Note: When seeding more parameters, make sure you benchmark performance. The current number is the ideal balance between performance and having an already existing cache.**
 */
const parameterCache = new Map([
    // Unnamed
    ['address', { type: 'address' }],
    ['bool', { type: 'bool' }],
    ['bytes', { type: 'bytes' }],
    ['bytes32', { type: 'bytes32' }],
    ['int', { type: 'int256' }],
    ['int256', { type: 'int256' }],
    ['string', { type: 'string' }],
    ['uint', { type: 'uint256' }],
    ['uint8', { type: 'uint8' }],
    ['uint16', { type: 'uint16' }],
    ['uint24', { type: 'uint24' }],
    ['uint32', { type: 'uint32' }],
    ['uint64', { type: 'uint64' }],
    ['uint96', { type: 'uint96' }],
    ['uint112', { type: 'uint112' }],
    ['uint160', { type: 'uint160' }],
    ['uint192', { type: 'uint192' }],
    ['uint256', { type: 'uint256' }],
    // Named
    ['address owner', { type: 'address', name: 'owner' }],
    ['address to', { type: 'address', name: 'to' }],
    ['bool approved', { type: 'bool', name: 'approved' }],
    ['bytes _data', { type: 'bytes', name: '_data' }],
    ['bytes data', { type: 'bytes', name: 'data' }],
    ['bytes signature', { type: 'bytes', name: 'signature' }],
    ['bytes32 hash', { type: 'bytes32', name: 'hash' }],
    ['bytes32 r', { type: 'bytes32', name: 'r' }],
    ['bytes32 root', { type: 'bytes32', name: 'root' }],
    ['bytes32 s', { type: 'bytes32', name: 's' }],
    ['string name', { type: 'string', name: 'name' }],
    ['string symbol', { type: 'string', name: 'symbol' }],
    ['string tokenURI', { type: 'string', name: 'tokenURI' }],
    ['uint tokenId', { type: 'uint256', name: 'tokenId' }],
    ['uint8 v', { type: 'uint8', name: 'v' }],
    ['uint256 balance', { type: 'uint256', name: 'balance' }],
    ['uint256 tokenId', { type: 'uint256', name: 'tokenId' }],
    ['uint256 value', { type: 'uint256', name: 'value' }],
    // Indexed
    [
        'event:address indexed from',
        { type: 'address', name: 'from', indexed: true },
    ],
    ['event:address indexed to', { type: 'address', name: 'to', indexed: true }],
    [
        'event:uint indexed tokenId',
        { type: 'uint256', name: 'tokenId', indexed: true },
    ],
    [
        'event:uint256 indexed tokenId',
        { type: 'uint256', name: 'tokenId', indexed: true },
    ],
]);
//# sourceMappingURL=cache.js.map
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/runtime/signatures.js
var signatures = __webpack_require__(569508);
;// ./node_modules/abitype/dist/esm/human-readable/runtime/utils.js







function parseSignature(signature, structs = {}) {
    if ((0,signatures/* isFunctionSignature */.Ji)(signature))
        return parseFunctionSignature(signature, structs);
    if ((0,signatures/* isEventSignature */.Rv)(signature))
        return parseEventSignature(signature, structs);
    if ((0,signatures/* isErrorSignature */.pc)(signature))
        return parseErrorSignature(signature, structs);
    if ((0,signatures/* isConstructorSignature */.l9)(signature))
        return parseConstructorSignature(signature, structs);
    if ((0,signatures/* isFallbackSignature */.v8)(signature))
        return parseFallbackSignature(signature);
    if ((0,signatures/* isReceiveSignature */.sP)(signature))
        return {
            type: 'receive',
            stateMutability: 'payable',
        };
    throw new errors_signature/* UnknownSignatureError */.x8({ signature });
}
function parseFunctionSignature(signature, structs = {}) {
    const match = (0,signatures/* execFunctionSignature */.ej)(signature);
    if (!match)
        throw new errors_signature/* InvalidSignatureError */.s7({ signature, type: 'function' });
    const inputParams = splitParameters(match.parameters);
    const inputs = [];
    const inputLength = inputParams.length;
    for (let i = 0; i < inputLength; i++) {
        inputs.push(parseAbiParameter(inputParams[i], {
            modifiers: signatures/* functionModifiers */.v7,
            structs,
            type: 'function',
        }));
    }
    const outputs = [];
    if (match.returns) {
        const outputParams = splitParameters(match.returns);
        const outputLength = outputParams.length;
        for (let i = 0; i < outputLength; i++) {
            outputs.push(parseAbiParameter(outputParams[i], {
                modifiers: signatures/* functionModifiers */.v7,
                structs,
                type: 'function',
            }));
        }
    }
    return {
        name: match.name,
        type: 'function',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs,
        outputs,
    };
}
function parseEventSignature(signature, structs = {}) {
    const match = (0,signatures/* execEventSignature */.iB)(signature);
    if (!match)
        throw new errors_signature/* InvalidSignatureError */.s7({ signature, type: 'event' });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for (let i = 0; i < length; i++)
        abiParameters.push(parseAbiParameter(params[i], {
            modifiers: signatures/* eventModifiers */.fC,
            structs,
            type: 'event',
        }));
    return { name: match.name, type: 'event', inputs: abiParameters };
}
function parseErrorSignature(signature, structs = {}) {
    const match = (0,signatures/* execErrorSignature */.kz)(signature);
    if (!match)
        throw new errors_signature/* InvalidSignatureError */.s7({ signature, type: 'error' });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for (let i = 0; i < length; i++)
        abiParameters.push(parseAbiParameter(params[i], { structs, type: 'error' }));
    return { name: match.name, type: 'error', inputs: abiParameters };
}
function parseConstructorSignature(signature, structs = {}) {
    const match = (0,signatures/* execConstructorSignature */.Yo)(signature);
    if (!match)
        throw new errors_signature/* InvalidSignatureError */.s7({ signature, type: 'constructor' });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for (let i = 0; i < length; i++)
        abiParameters.push(parseAbiParameter(params[i], { structs, type: 'constructor' }));
    return {
        type: 'constructor',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs: abiParameters,
    };
}
function parseFallbackSignature(signature) {
    const match = (0,signatures/* execFallbackSignature */.If)(signature);
    if (!match)
        throw new errors_signature/* InvalidSignatureError */.s7({ signature, type: 'fallback' });
    return {
        type: 'fallback',
        stateMutability: match.stateMutability ?? 'nonpayable',
    };
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    // optional namespace cache by `type`
    const parameterCacheKey = getParameterCacheKey(param, options?.type, options?.structs);
    if (parameterCache.has(parameterCacheKey))
        return parameterCache.get(parameterCacheKey);
    const isTuple = regex/* isTupleRegex */.wj.test(param);
    const match = (0,regex/* execTyped */.Yv)(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match)
        throw new errors_abiParameter/* InvalidParameterError */.dV({ param });
    if (match.name && isSolidityKeyword(match.name))
        throw new errors_abiParameter/* SolidityProtectedKeywordError */.zd({ param, name: match.name });
    const name = match.name ? { name: match.name } : {};
    const indexed = match.modifier === 'indexed' ? { indexed: true } : {};
    const structs = options?.structs ?? {};
    let type;
    let components = {};
    if (isTuple) {
        type = 'tuple';
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for (let i = 0; i < length; i++) {
            // remove `modifiers` from `options` to prevent from being added to tuple components
            components_.push(parseAbiParameter(params[i], { structs }));
        }
        components = { components: components_ };
    }
    else if (match.type in structs) {
        type = 'tuple';
        components = { components: structs[match.type] };
    }
    else if (dynamicIntegerRegex.test(match.type)) {
        type = `${match.type}256`;
    }
    else if (match.type === 'address payable') {
        type = 'address';
    }
    else {
        type = match.type;
        if (!(options?.type === 'struct') && !isSolidityType(type))
            throw new abiItem/* UnknownSolidityTypeError */.UG({ type });
    }
    if (match.modifier) {
        // Check if modifier exists, but is not allowed (e.g. `indexed` in `functionModifiers`)
        if (!options?.modifiers?.has?.(match.modifier))
            throw new errors_abiParameter/* InvalidModifierError */.NO({
                param,
                type: options?.type,
                modifier: match.modifier,
            });
        // Check if resolved `type` is valid if there is a function modifier
        if (signatures/* functionModifiers */.v7.has(match.modifier) &&
            !isValidDataLocation(type, !!match.array))
            throw new errors_abiParameter/* InvalidFunctionModifierError */.Pj({
                param,
                type: options?.type,
                modifier: match.modifier,
            });
    }
    const abiParameter = {
        type: `${type}${match.array ?? ''}`,
        ...name,
        ...indexed,
        ...components,
    };
    parameterCache.set(parameterCacheKey, abiParameter);
    return abiParameter;
}
// s/o latika for this
function splitParameters(params, result = [], current = '', depth = 0) {
    const length = params.trim().length;
    // biome-ignore lint/correctness/noUnreachable: recursive
    for (let i = 0; i < length; i++) {
        const char = params[i];
        const tail = params.slice(i + 1);
        switch (char) {
            case ',':
                return depth === 0
                    ? splitParameters(tail, [...result, current.trim()])
                    : splitParameters(tail, result, `${current}${char}`, depth);
            case '(':
                return splitParameters(tail, result, `${current}${char}`, depth + 1);
            case ')':
                return splitParameters(tail, result, `${current}${char}`, depth - 1);
            default:
                return splitParameters(tail, result, `${current}${char}`, depth);
        }
    }
    if (current === '')
        return result;
    if (depth !== 0)
        throw new InvalidParenthesisError({ current, depth });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return (type === 'address' ||
        type === 'bool' ||
        type === 'function' ||
        type === 'string' ||
        regex/* bytesRegex */.BD.test(type) ||
        regex/* integerRegex */.Ge.test(type));
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
/** @internal */
function isSolidityKeyword(name) {
    return (name === 'address' ||
        name === 'bool' ||
        name === 'function' ||
        name === 'string' ||
        name === 'tuple' ||
        regex/* bytesRegex */.BD.test(name) ||
        regex/* integerRegex */.Ge.test(name) ||
        protectedKeywordsRegex.test(name));
}
/** @internal */
function isValidDataLocation(type, isArray) {
    return isArray || type === 'bytes' || type === 'string' || type === 'tuple';
}
//# sourceMappingURL=utils.js.map

/***/ },

/***/ 137372
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BI: () => (/* binding */ BytesSizeMismatchError),
/* harmony export */   EB: () => (/* binding */ AbiFunctionSignatureNotFoundError),
/* harmony export */   Iy: () => (/* binding */ AbiDecodingDataSizeTooSmallError),
/* harmony export */   Iz: () => (/* binding */ AbiFunctionNotFoundError),
/* harmony export */   MR: () => (/* binding */ AbiFunctionOutputsNotFoundError),
/* harmony export */   M_: () => (/* binding */ AbiEventNotFoundError),
/* harmony export */   Nc: () => (/* binding */ AbiEncodingArrayLengthMismatchError),
/* harmony export */   O: () => (/* binding */ AbiDecodingZeroDataError),
/* harmony export */   Wq: () => (/* binding */ AbiErrorSignatureNotFoundError),
/* harmony export */   YE: () => (/* binding */ AbiEncodingLengthMismatchError),
/* harmony export */   YF: () => (/* binding */ AbiConstructorParamsNotFoundError),
/* harmony export */   YW: () => (/* binding */ AbiConstructorNotFoundError),
/* harmony export */   ZP: () => (/* binding */ AbiErrorInputsNotFoundError),
/* harmony export */   _z: () => (/* binding */ AbiEventSignatureEmptyTopicsError),
/* harmony export */   d_: () => (/* binding */ InvalidDefinitionTypeError),
/* harmony export */   dm: () => (/* binding */ InvalidArrayError),
/* harmony export */   fo: () => (/* binding */ DecodeLogDataMismatch),
/* harmony export */   gH: () => (/* binding */ AbiEncodingBytesSizeMismatchError),
/* harmony export */   j: () => (/* binding */ InvalidAbiDecodingTypeError),
/* harmony export */   kE: () => (/* binding */ AbiEventSignatureNotFoundError),
/* harmony export */   l3: () => (/* binding */ DecodeLogTopicsMismatch),
/* harmony export */   nK: () => (/* binding */ InvalidAbiEncodingTypeError),
/* harmony export */   nM: () => (/* binding */ AbiItemAmbiguityError),
/* harmony export */   yy: () => (/* binding */ AbiErrorNotFoundError)
/* harmony export */ });
/* unused harmony exports AbiDecodingDataSizeInvalidError, UnsupportedPackedAbiType */
/* harmony import */ var _utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(895167);
/* harmony import */ var _utils_data_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(885182);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(345765);



class AbiConstructorNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ docsPath }) {
        super([
            'A constructor was not found on the ABI.',
            'Make sure you are using the correct ABI and that the constructor exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorNotFoundError',
        });
    }
}
class AbiConstructorParamsNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ docsPath }) {
        super([
            'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
            'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.',
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorParamsNotFoundError',
        });
    }
}
class AbiDecodingDataSizeInvalidError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ data, size }) {
        super([
            `Data size of ${size} bytes is invalid.`,
            'Size must be in increments of 32 bytes (size % 32 === 0).',
        ].join('\n'), {
            metaMessages: [`Data: ${data} (${size} bytes)`],
            name: 'AbiDecodingDataSizeInvalidError',
        });
    }
}
class AbiDecodingDataSizeTooSmallError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ data, params, size, }) {
        super([`Data size of ${size} bytes is too small for given parameters.`].join('\n'), {
            metaMessages: [
                `Params: (${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParams */ .A)(params, { includeName: true })})`,
                `Data:   ${data} (${size} bytes)`,
            ],
            name: 'AbiDecodingDataSizeTooSmallError',
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class AbiDecodingZeroDataError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: 'AbiDecodingZeroDataError',
        });
    }
}
class AbiEncodingArrayLengthMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ expectedLength, givenLength, type, }) {
        super([
            `ABI encoding array length mismatch for type ${type}.`,
            `Expected length: ${expectedLength}`,
            `Given length: ${givenLength}`,
        ].join('\n'), { name: 'AbiEncodingArrayLengthMismatchError' });
    }
}
class AbiEncodingBytesSizeMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ expectedSize, value }) {
        super(`Size of bytes "${value}" (bytes${(0,_utils_data_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(value)}) does not match expected size (bytes${expectedSize}).`, { name: 'AbiEncodingBytesSizeMismatchError' });
    }
}
class AbiEncodingLengthMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ expectedLength, givenLength, }) {
        super([
            'ABI encoding params/values length mismatch.',
            `Expected length (params): ${expectedLength}`,
            `Given length (values): ${givenLength}`,
        ].join('\n'), { name: 'AbiEncodingLengthMismatchError' });
    }
}
class AbiErrorInputsNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(errorName, { docsPath }) {
        super([
            `Arguments (\`args\`) were provided to "${errorName}", but "${errorName}" on the ABI does not contain any parameters (\`inputs\`).`,
            'Cannot encode error result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the inputs exist on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorInputsNotFoundError',
        });
    }
}
class AbiErrorNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(errorName, { docsPath } = {}) {
        super([
            `Error ${errorName ? `"${errorName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorNotFoundError',
        });
    }
}
class AbiErrorSignatureNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(signature, { docsPath }) {
        super([
            `Encoded error signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorSignatureNotFoundError',
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
class AbiEventSignatureEmptyTopicsError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ docsPath }) {
        super('Cannot extract event signature from empty topics.', {
            docsPath,
            name: 'AbiEventSignatureEmptyTopicsError',
        });
    }
}
class AbiEventSignatureNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(signature, { docsPath }) {
        super([
            `Encoded event signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
            name: 'AbiEventSignatureNotFoundError',
        });
    }
}
class AbiEventNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(eventName, { docsPath } = {}) {
        super([
            `Event ${eventName ? `"${eventName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiEventNotFoundError',
        });
    }
}
class AbiFunctionNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(functionName, { docsPath } = {}) {
        super([
            `Function ${functionName ? `"${functionName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionNotFoundError',
        });
    }
}
class AbiFunctionOutputsNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(functionName, { docsPath }) {
        super([
            `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
            'Cannot decode function result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the function exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionOutputsNotFoundError',
        });
    }
}
class AbiFunctionSignatureNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(signature, { docsPath }) {
        super([
            `Encoded function signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionSignatureNotFoundError',
        });
    }
}
class AbiItemAmbiguityError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(x, y) {
        super('Found ambiguous types in overloaded ABI items.', {
            metaMessages: [
                `\`${x.type}\` in \`${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiItem */ .B)(x.abiItem)}\`, and`,
                `\`${y.type}\` in \`${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiItem */ .B)(y.abiItem)}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.',
            ],
            name: 'AbiItemAmbiguityError',
        });
    }
}
class BytesSizeMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ expectedSize, givenSize, }) {
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, {
            name: 'BytesSizeMismatchError',
        });
    }
}
class DecodeLogDataMismatch extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ abiItem, data, params, size, }) {
        super([
            `Data size of ${size} bytes is too small for non-indexed event parameters.`,
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParams */ .A)(params, { includeName: true })})`,
                `Data:   ${data} (${size} bytes)`,
            ],
            name: 'DecodeLogDataMismatch',
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class DecodeLogTopicsMismatch extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ abiItem, param, }) {
        super([
            `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ''} on event "${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiItem */ .B)(abiItem, { includeName: true })}".`,
        ].join('\n'), { name: 'DecodeLogTopicsMismatch' });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
    }
}
class InvalidAbiEncodingTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(type, { docsPath }) {
        super([
            `Type "${type}" is not a valid encoding type.`,
            'Please provide a valid ABI type.',
        ].join('\n'), { docsPath, name: 'InvalidAbiEncodingType' });
    }
}
class InvalidAbiDecodingTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(type, { docsPath }) {
        super([
            `Type "${type}" is not a valid decoding type.`,
            'Please provide a valid ABI type.',
        ].join('\n'), { docsPath, name: 'InvalidAbiDecodingType' });
    }
}
class InvalidArrayError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(value) {
        super([`Value "${value}" is not a valid array.`].join('\n'), {
            name: 'InvalidArrayError',
        });
    }
}
class InvalidDefinitionTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(type) {
        super([
            `"${type}" is not a valid definition type.`,
            'Valid types: "function", "event", "error"',
        ].join('\n'), { name: 'InvalidDefinitionTypeError' });
    }
}
class UnsupportedPackedAbiType extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(type) {
        super(`Type "${type}" is not supported for packed encoding.`, {
            name: 'UnsupportedPackedAbiType',
        });
    }
}
//# sourceMappingURL=abi.js.map

/***/ },

/***/ 148990
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $s: () => (/* binding */ TransactionExecutionError),
/* harmony export */   Kc: () => (/* binding */ TransactionReceiptNotFoundError),
/* harmony export */   Kz: () => (/* binding */ TransactionNotFoundError),
/* harmony export */   Sq: () => (/* binding */ TransactionReceiptRevertedError),
/* harmony export */   Vg: () => (/* binding */ InvalidSerializableTransactionError),
/* harmony export */   WA: () => (/* binding */ WaitForTransactionReceiptTimeoutError),
/* harmony export */   aO: () => (/* binding */ prettyPrint)
/* harmony export */ });
/* unused harmony exports FeeConflictError, InvalidLegacyVError, InvalidSerializedTransactionTypeError, InvalidSerializedTransactionError, InvalidStorageKeySizeError */
/* harmony import */ var _utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149436);
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(579670);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(345765);



function prettyPrint(args) {
    const entries = Object.entries(args)
        .map(([key, value]) => {
        if (value === undefined || value === false)
            return null;
        return [key, value];
    })
        .filter(Boolean);
    const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
    return entries
        .map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`)
        .join('\n');
}
class FeeConflictError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor() {
        super([
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
            'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.',
        ].join('\n'), { name: 'FeeConflictError' });
    }
}
class InvalidLegacyVError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ v }) {
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`, {
            name: 'InvalidLegacyVError',
        });
    }
}
class InvalidSerializableTransactionError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ transaction }) {
        super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
                'Provided Transaction:',
                '{',
                prettyPrint(transaction),
                '}',
                '',
                'To infer the type, either provide:',
                '- a `type` to the Transaction, or',
                '- an EIP-1559 Transaction with `maxFeePerGas`, or',
                '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
                '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
                '- an EIP-7702 Transaction with `authorizationList`, or',
                '- a Legacy Transaction with `gasPrice`',
            ],
            name: 'InvalidSerializableTransactionError',
        });
    }
}
class InvalidSerializedTransactionTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ serializedType }) {
        super(`Serialized transaction type "${serializedType}" is invalid.`, {
            name: 'InvalidSerializedTransactionType',
        });
        Object.defineProperty(this, "serializedType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedType = serializedType;
    }
}
class InvalidSerializedTransactionError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ attributes, serializedTransaction, type, }) {
        const missing = Object.entries(attributes)
            .map(([key, value]) => (typeof value === 'undefined' ? key : undefined))
            .filter(Boolean);
        super(`Invalid serialized transaction of type "${type}" was provided.`, {
            metaMessages: [
                `Serialized Transaction: "${serializedTransaction}"`,
                missing.length > 0 ? `Missing Attributes: ${missing.join(', ')}` : '',
            ].filter(Boolean),
            name: 'InvalidSerializedTransactionError',
        });
        Object.defineProperty(this, "serializedTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedTransaction = serializedTransaction;
        this.type = type;
    }
}
class InvalidStorageKeySizeError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ storageKey }) {
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`, { name: 'InvalidStorageKeySizeError' });
    }
}
class TransactionExecutionError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, }) {
        const prettyArgs = prettyPrint({
            chain: chain && `${chain?.name} (id: ${chain?.id})`,
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${(0,_utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_0__/* .formatEther */ .c)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__/* .formatGwei */ .Q)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__/* .formatGwei */ .Q)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__/* .formatGwei */ .Q)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Request Arguments:',
                prettyArgs,
            ].filter(Boolean),
            name: 'TransactionExecutionError',
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class TransactionNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ blockHash, blockNumber, blockTag, hash, index, }) {
        let identifier = 'Transaction';
        if (blockTag && index !== undefined)
            identifier = `Transaction at block time "${blockTag}" at index "${index}"`;
        if (blockHash && index !== undefined)
            identifier = `Transaction at block hash "${blockHash}" at index "${index}"`;
        if (blockNumber && index !== undefined)
            identifier = `Transaction at block number "${blockNumber}" at index "${index}"`;
        if (hash)
            identifier = `Transaction with hash "${hash}"`;
        super(`${identifier} could not be found.`, {
            name: 'TransactionNotFoundError',
        });
    }
}
class TransactionReceiptNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ hash }) {
        super(`Transaction receipt with hash "${hash}" could not be found. The Transaction may not be processed on a block yet.`, {
            name: 'TransactionReceiptNotFoundError',
        });
    }
}
class TransactionReceiptRevertedError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ receipt }) {
        super(`Transaction with hash "${receipt.transactionHash}" reverted.`, {
            metaMessages: [
                'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
                ' ',
                'You can attempt to extract the revert reason by:',
                '- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract',
                '- using the `call` Action with raw `data`',
            ],
            name: 'TransactionReceiptRevertedError',
        });
        Object.defineProperty(this, "receipt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.receipt = receipt;
    }
}
class WaitForTransactionReceiptTimeoutError extends _base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C {
    constructor({ hash }) {
        super(`Timed out while waiting for transaction with hash "${hash}" to be confirmed.`, { name: 'WaitForTransactionReceiptTimeoutError' });
    }
}
//# sourceMappingURL=transaction.js.map

/***/ },

/***/ 149436
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ formatEther)
/* harmony export */ });
/* harmony import */ var _constants_unit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270638);
/* harmony import */ var _formatUnits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(287135);


/**
 * Converts numerical wei to a string representation of ether.
 *
 * - Docs: https://viem.sh/docs/utilities/formatEther
 *
 * @example
 * import { formatEther } from 'viem'
 *
 * formatEther(1000000000000000000n)
 * // '1'
 */
function formatEther(wei, unit = 'wei') {
    return (0,_formatUnits_js__WEBPACK_IMPORTED_MODULE_1__/* .formatUnits */ .J)(wei, _constants_unit_js__WEBPACK_IMPORTED_MODULE_0__/* .etherUnits */ .eL[unit]);
}
//# sourceMappingURL=formatEther.js.map

/***/ },

/***/ 158213
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BD: () => (/* binding */ bytesRegex),
/* harmony export */   Ge: () => (/* binding */ integerRegex)
/* harmony export */ });
/* unused harmony export arrayRegex */
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
// `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
// https://regexr.com/6va55
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
// `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
// https://regexr.com/6v8hp
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
//# sourceMappingURL=regex.js.map

/***/ },

/***/ 197256
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ parseStructs)
});

// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/regex.js
var regex = __webpack_require__(725276);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/errors/abiItem.js
var abiItem = __webpack_require__(206959);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js
var errors_abiParameter = __webpack_require__(697041);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/errors/signature.js
var errors_signature = __webpack_require__(616188);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/errors.js + 1 modules
var errors = __webpack_require__(813440);
;// ./node_modules/abitype/dist/esm/human-readable/errors/struct.js

class CircularReferenceError extends errors/* BaseError */.C {
    constructor({ type }) {
        super('Circular reference detected.', {
            metaMessages: [`Struct "${type}" is a circular reference.`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
}
//# sourceMappingURL=struct.js.map
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/runtime/signatures.js
var runtime_signatures = __webpack_require__(569508);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/runtime/utils.js + 2 modules
var utils = __webpack_require__(136993);
;// ./node_modules/abitype/dist/esm/human-readable/runtime/structs.js







function parseStructs(signatures) {
    // Create "shallow" version of each struct (and filter out non-structs or invalid structs)
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for (let i = 0; i < signaturesLength; i++) {
        const signature = signatures[i];
        if (!(0,runtime_signatures/* isStructSignature */.WL)(signature))
            continue;
        const match = (0,runtime_signatures/* execStructSignature */.FO)(signature);
        if (!match)
            throw new errors_signature/* InvalidSignatureError */.s7({ signature, type: 'struct' });
        const properties = match.properties.split(';');
        const components = [];
        const propertiesLength = properties.length;
        for (let k = 0; k < propertiesLength; k++) {
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed)
                continue;
            const abiParameter = (0,utils/* parseAbiParameter */.Pj)(trimmed, {
                type: 'struct',
            });
            components.push(abiParameter);
        }
        if (!components.length)
            throw new errors_signature/* InvalidStructSignatureError */.X9({ signature });
        shallowStructs[match.name] = components;
    }
    // Resolve nested structs inside each parameter
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for (let i = 0; i < entriesLength; i++) {
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters = [], structs = {}, ancestors = new Set()) {
    const components = [];
    const length = abiParameters.length;
    for (let i = 0; i < length; i++) {
        const abiParameter = abiParameters[i];
        const isTuple = regex/* isTupleRegex */.wj.test(abiParameter.type);
        if (isTuple)
            components.push(abiParameter);
        else {
            const match = (0,regex/* execTyped */.Yv)(typeWithoutTupleRegex, abiParameter.type);
            if (!match?.type)
                throw new errors_abiParameter/* InvalidAbiTypeParameterError */.nx({ abiParameter });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type))
                    throw new CircularReferenceError({ type });
                components.push({
                    ...abiParameter,
                    type: `tuple${array ?? ''}`,
                    components: resolveStructs(structs[type], structs, new Set([...ancestors, type])),
                });
            }
            else {
                if ((0,utils/* isSolidityType */._o)(type))
                    components.push(abiParameter);
                else
                    throw new abiItem/* UnknownTypeError */.zz({ type });
            }
        }
    }
    return components;
}
//# sourceMappingURL=structs.js.map

/***/ },

/***/ 206959
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UG: () => (/* binding */ UnknownSolidityTypeError),
/* harmony export */   xo: () => (/* binding */ InvalidAbiItemError),
/* harmony export */   zz: () => (/* binding */ UnknownTypeError)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(813440);

class InvalidAbiItemError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature }) {
        super('Failed to parse ABI item.', {
            details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
            docsPath: '/api/human#parseabiitem-1',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiItemError'
        });
    }
}
class UnknownTypeError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ type }) {
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownTypeError'
        });
    }
}
class UnknownSolidityTypeError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ type }) {
        super('Unknown type.', {
            metaMessages: [`Type "${type}" is not a valid ABI type.`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSolidityTypeError'
        });
    }
}
//# sourceMappingURL=abiItem.js.map

/***/ },

/***/ 239909
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ formatAbiParameters)
});

// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/regex.js
var regex = __webpack_require__(725276);
;// ./node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js

// https://regexr.com/7f7rv
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
/**
 * Formats {@link AbiParameter} to human-readable ABI parameter.
 *
 * @param abiParameter - ABI parameter
 * @returns Human-readable ABI parameter
 *
 * @example
 * const result = formatAbiParameter({ type: 'address', name: 'from' })
 * //    ^? const result: 'address from'
 */
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for (let i = 0; i < length; i++) {
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1)
                type += ', ';
        }
        const result = (0,regex/* execTyped */.Yv)(tupleRegex, abiParameter.type);
        type += `)${result?.array || ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type,
        });
    }
    // Add `indexed` to type if in `abiParameter`
    if ('indexed' in abiParameter && abiParameter.indexed)
        type = `${type} indexed`;
    // Return human-readable ABI parameter
    if (abiParameter.name)
        return `${type} ${abiParameter.name}`;
    return type;
}
//# sourceMappingURL=formatAbiParameter.js.map
;// ./node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js

/**
 * Formats {@link AbiParameter}s to human-readable ABI parameters.
 *
 * @param abiParameters - ABI parameters
 * @returns Human-readable ABI parameters
 *
 * @example
 * const result = formatAbiParameters([
 *   //  ^? const result: 'address from, uint256 tokenId'
 *   { type: 'address', name: 'from' },
 *   { type: 'uint256', name: 'tokenId' },
 * ])
 */
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for (let i = 0; i < length; i++) {
        const abiParameter = abiParameters[i];
        params += formatAbiParameter(abiParameter);
        if (i !== length - 1)
            params += ', ';
    }
    return params;
}
//# sourceMappingURL=formatAbiParameters.js.map

/***/ },

/***/ 277330
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ encodeFunctionData)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/abi.js
var errors_abi = __webpack_require__(137372);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/toFunctionSelector.js
var toFunctionSelector = __webpack_require__(122599);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/formatAbiItem.js
var formatAbiItem = __webpack_require__(895167);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/getAbiItem.js
var getAbiItem = __webpack_require__(284586);
;// ./node_modules/viem/_esm/utils/abi/prepareEncodeFunctionData.js




const docsPath = '/docs/contract/encodeFunctionData';
function prepareEncodeFunctionData(parameters) {
    const { abi, args, functionName } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0,getAbiItem/* getAbiItem */.iY)({
            abi,
            args,
            name: functionName,
        });
        if (!item)
            throw new errors_abi/* AbiFunctionNotFoundError */.Iz(functionName, { docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'function')
        throw new errors_abi/* AbiFunctionNotFoundError */.Iz(undefined, { docsPath });
    return {
        abi: [abiItem],
        functionName: (0,toFunctionSelector/* toFunctionSelector */.V)((0,formatAbiItem/* formatAbiItem */.B)(abiItem)),
    };
}
//# sourceMappingURL=prepareEncodeFunctionData.js.map
;// ./node_modules/viem/_esm/utils/abi/encodeFunctionData.js



function encodeFunctionData(parameters) {
    const { args } = parameters;
    const { abi, functionName } = (() => {
        if (parameters.abi.length === 1 &&
            parameters.functionName?.startsWith('0x'))
            return parameters;
        return prepareEncodeFunctionData(parameters);
    })();
    const abiItem = abi[0];
    const signature = functionName;
    const data = 'inputs' in abiItem && abiItem.inputs
        ? (0,encodeAbiParameters/* encodeAbiParameters */.h)(abiItem.inputs, args ?? [])
        : undefined;
    return (0,concat/* concatHex */.aP)([signature, data ?? '0x']);
}
//# sourceMappingURL=encodeFunctionData.js.map

/***/ },

/***/ 282040
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ keccak256)
/* harmony export */ });
/* harmony import */ var _noble_hashes_sha3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(977238);
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(646394);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(644706);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(584192);




function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0,_noble_hashes_sha3__WEBPACK_IMPORTED_MODULE_0__/* .keccak_256 */ .lY)((0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_1__/* .isHex */ .q)(value, { strict: false }) ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__/* .toBytes */ .ZJ)(value) : value);
    if (to === 'bytes')
        return bytes;
    return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__/* .toHex */ .nj)(bytes);
}
//# sourceMappingURL=keccak256.js.map

/***/ },

/***/ 284586
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iY: () => (/* binding */ getAbiItem)
/* harmony export */ });
/* unused harmony exports isArgOfType, getAmbiguousTypes */
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137372);
/* harmony import */ var _utils_data_isHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(646394);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(529873);
/* harmony import */ var _hash_toEventSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(809777);
/* harmony import */ var _hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(122599);





function getAbiItem(parameters) {
    const { abi, args = [], name } = parameters;
    const isSelector = (0,_utils_data_isHex_js__WEBPACK_IMPORTED_MODULE_1__/* .isHex */ .q)(name, { strict: false });
    const abiItems = abi.filter((abiItem) => {
        if (isSelector) {
            if (abiItem.type === 'function')
                return (0,_hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_4__/* .toFunctionSelector */ .V)(abiItem) === name;
            if (abiItem.type === 'event')
                return (0,_hash_toEventSelector_js__WEBPACK_IMPORTED_MODULE_3__/* .toEventSelector */ .h)(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0)
        return undefined;
    if (abiItems.length === 1)
        return abiItems[0];
    let matchedAbiItem;
    for (const abiItem of abiItems) {
        if (!('inputs' in abiItem))
            continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0)
                return abiItem;
            continue;
        }
        if (!abiItem.inputs)
            continue;
        if (abiItem.inputs.length === 0)
            continue;
        if (abiItem.inputs.length !== args.length)
            continue;
        const matched = args.every((arg, index) => {
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter)
                return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            // Check for ambiguity against already matched parameters (e.g. `address` vs `bytes20`).
            if (matchedAbiItem &&
                'inputs' in matchedAbiItem &&
                matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes)
                    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiItemAmbiguityError */ .nM({
                        abiItem,
                        type: ambiguousTypes[0],
                    }, {
                        abiItem: matchedAbiItem,
                        type: ambiguousTypes[1],
                    });
            }
            matchedAbiItem = abiItem;
        }
    }
    if (matchedAbiItem)
        return matchedAbiItem;
    return abiItems[0];
}
/** @internal */
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch (abiParameterType) {
        case 'address':
            return (0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .P)(arg, { strict: false });
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default: {
            if (abiParameterType === 'tuple' && 'components' in abiParameter)
                return Object.values(abiParameter.components).every((component, index) => {
                    return (argType === 'object' &&
                        isArgOfType(Object.values(arg)[index], component));
                });
            // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
            // https://regexr.com/6v8hp
            if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
                return argType === 'number' || argType === 'bigint';
            // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
            // https://regexr.com/6va55
            if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
                return argType === 'string' || arg instanceof Uint8Array;
            // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
            // https://regexr.com/6va6i
            if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                return (Array.isArray(arg) &&
                    arg.every((x) => isArgOfType(x, {
                        ...abiParameter,
                        // Pop off `[]` or `[M]` from end of type
                        type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, ''),
                    })));
            }
            return false;
        }
    }
}
/** @internal */
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for (const parameterIndex in sourceParameters) {
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' &&
            targetParameter.type === 'tuple' &&
            'components' in sourceParameter &&
            'components' in targetParameter)
            return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [sourceParameter.type, targetParameter.type];
        const ambiguous = (() => {
            if (types.includes('address') && types.includes('bytes20'))
                return true;
            if (types.includes('address') && types.includes('string'))
                return (0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .P)(args[parameterIndex], { strict: false });
            if (types.includes('address') && types.includes('bytes'))
                return (0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .P)(args[parameterIndex], { strict: false });
            return false;
        })();
        if (ambiguous)
            return types;
    }
    return;
}
//# sourceMappingURL=getAbiItem.js.map

/***/ },

/***/ 392246
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ toSignatureHash)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toBytes.js
var toBytes = __webpack_require__(644706);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/keccak256.js
var keccak256 = __webpack_require__(282040);
;// ./node_modules/viem/_esm/utils/hash/hashSignature.js


const hash = (value) => (0,keccak256/* keccak256 */.S)((0,toBytes/* toBytes */.ZJ)(value));
function hashSignature(sig) {
    return hash(sig);
}
//# sourceMappingURL=hashSignature.js.map
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/formatAbiItem.js
var formatAbiItem = __webpack_require__(449124);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(345765);
;// ./node_modules/viem/_esm/utils/hash/normalizeSignature.js

function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for (let i = 0; i < signature.length; i++) {
        const char = signature[i];
        // If the character is a separator, we want to reactivate.
        if (['(', ')', ','].includes(char))
            active = true;
        // If the character is a "level" token, we want to increment/decrement.
        if (char === '(')
            level++;
        if (char === ')')
            level--;
        // If we aren't active, we don't want to mutate the result.
        if (!active)
            continue;
        // If level === 0, we are at the definition level.
        if (level === 0) {
            if (char === ' ' && ['event', 'function', ''].includes(result))
                result = '';
            else {
                result += char;
                // If we are at the end of the definition, we must be finished.
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        // Ignore spaces
        if (char === ' ') {
            // If the previous character is a separator, and the current section isn't empty, we want to deactivate.
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid)
        throw new base/* BaseError */.C('Unable to normalize signature.');
    return result;
}
//# sourceMappingURL=normalizeSignature.js.map
;// ./node_modules/viem/_esm/utils/hash/toSignature.js


/**
 * Returns the signature for a given function or event definition.
 *
 * @example
 * const signature = toSignature('function ownerOf(uint256 tokenId)')
 * // 'ownerOf(uint256)'
 *
 * @example
 * const signature_3 = toSignature({
 *   name: 'ownerOf',
 *   type: 'function',
 *   inputs: [{ name: 'tokenId', type: 'uint256' }],
 *   outputs: [],
 *   stateMutability: 'view',
 * })
 * // 'ownerOf(uint256)'
 */
const toSignature = (def) => {
    const def_ = (() => {
        if (typeof def === 'string')
            return def;
        return (0,formatAbiItem/* formatAbiItem */.B)(def);
    })();
    return normalizeSignature(def_);
};
//# sourceMappingURL=toSignature.js.map
;// ./node_modules/viem/_esm/utils/hash/toSignatureHash.js


/**
 * Returns the hash (of the function/event signature) for a given event or function definition.
 */
function toSignatureHash(fn) {
    return hashSignature(toSignature(fn));
}
//# sourceMappingURL=toSignatureHash.js.map

/***/ },

/***/ 398703
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YE: () => (/* binding */ ClientChainNotConfiguredError),
/* harmony export */   rj: () => (/* binding */ ChainDoesNotSupportContract)
/* harmony export */ });
/* unused harmony exports ChainMismatchError, ChainNotFoundError, InvalidChainIdError */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345765);

class ChainDoesNotSupportContract extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ blockNumber, chain, contract, }) {
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
            metaMessages: [
                'This could be due to any of the following:',
                ...(blockNumber &&
                    contract.blockCreated &&
                    contract.blockCreated > blockNumber
                    ? [
                        `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`,
                    ]
                    : [
                        `- The chain does not have the contract "${contract.name}" configured.`,
                    ]),
            ],
            name: 'ChainDoesNotSupportContract',
        });
    }
}
class ChainMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ chain, currentChainId, }) {
        super(`The current chain of the wallet (id: ${currentChainId}) does not match the target chain for the transaction (id: ${chain.id} – ${chain.name}).`, {
            metaMessages: [
                `Current Chain ID:  ${currentChainId}`,
                `Expected Chain ID: ${chain.id} – ${chain.name}`,
            ],
            name: 'ChainMismatchError',
        });
    }
}
class ChainNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super([
            'No chain was provided to the request.',
            'Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.',
        ].join('\n'), {
            name: 'ChainNotFoundError',
        });
    }
}
class ClientChainNotConfiguredError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super('No chain was provided to the Client.', {
            name: 'ClientChainNotConfiguredError',
        });
    }
}
class InvalidChainIdError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ chainId }) {
        super(typeof chainId === 'number'
            ? `Chain ID "${chainId}" is invalid.`
            : 'Chain ID is invalid.', { name: 'InvalidChainIdError' });
    }
}
//# sourceMappingURL=chain.js.map

/***/ },

/***/ 399516
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ toBigInt),
/* harmony export */   Ej: () => (/* binding */ size),
/* harmony export */   Fl: () => (/* binding */ SizeExceedsPaddingSizeError),
/* harmony export */   HT: () => (/* binding */ from),
/* harmony export */   Ho: () => (/* binding */ padLeft),
/* harmony export */   M7: () => (/* binding */ padRight),
/* harmony export */   Ro: () => (/* binding */ toNumber),
/* harmony export */   Ty: () => (/* binding */ IntegerOutOfRangeError),
/* harmony export */   di: () => (/* binding */ slice),
/* harmony export */   ii: () => (/* binding */ SliceOffsetOutOfBoundsError),
/* harmony export */   oB: () => (/* binding */ fromNumber),
/* harmony export */   sH: () => (/* binding */ fromString),
/* harmony export */   tf: () => (/* binding */ validate),
/* harmony export */   u: () => (/* binding */ SizeOverflowError),
/* harmony export */   uK: () => (/* binding */ fromBytes),
/* harmony export */   xW: () => (/* binding */ concat),
/* harmony export */   xb: () => (/* binding */ fromBoolean)
/* harmony export */ });
/* unused harmony exports assert, isEqual, random, trimLeft, trimRight, toBoolean, toBytes, toString, InvalidHexBooleanError, InvalidHexTypeError, InvalidHexValueError, InvalidLengthError */
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(643684);
/* harmony import */ var _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(498298);
/* harmony import */ var _Json_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(481295);






const encoder = /*#__PURE__*/ new TextEncoder();
const hexes = /*#__PURE__*/ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, '0'));
/**
 * Asserts if the given value is {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.assert('abc')
 * // @error: InvalidHexValueTypeError:
 * // @error: Value `"abc"` of type `string` is an invalid hex type.
 * // @error: Hex types must be represented as `"0x\${string}"`.
 * ```
 *
 * @param value - The value to assert.
 * @param options - Options.
 */
function assert(value, options = {}) {
    const { strict = false } = options;
    if (!value)
        throw new InvalidHexTypeError(value);
    if (typeof value !== 'string')
        throw new InvalidHexTypeError(value);
    if (strict) {
        if (!/^0x[0-9a-fA-F]*$/.test(value))
            throw new InvalidHexValueError(value);
    }
    if (!value.startsWith('0x'))
        throw new InvalidHexValueError(value);
}
/**
 * Concatenates two or more {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.concat('0x123', '0x456')
 * // @log: '0x123456'
 * ```
 *
 * @param values - The {@link ox#Hex.Hex} values to concatenate.
 * @returns The concatenated {@link ox#Hex.Hex} value.
 */
function concat(...values) {
    return `0x${values.reduce((acc, x) => acc + x.replace('0x', ''), '')}`;
}
/**
 * Instantiates a {@link ox#Hex.Hex} value from a hex string or {@link ox#Bytes.Bytes} value.
 *
 * :::tip
 *
 * To instantiate from a **Boolean**, **String**, or **Number**, use one of the following:
 *
 * - `Hex.fromBoolean`
 *
 * - `Hex.fromString`
 *
 * - `Hex.fromNumber`
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Bytes, Hex } from 'ox'
 *
 * Hex.from('0x48656c6c6f20576f726c6421')
 * // @log: '0x48656c6c6f20576f726c6421'
 *
 * Hex.from(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // @log: '0x48656c6c6f20576f726c6421'
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} value to encode.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function from(value) {
    if (value instanceof Uint8Array)
        return fromBytes(value);
    if (Array.isArray(value))
        return fromBytes(new Uint8Array(value));
    return value;
}
/**
 * Encodes a boolean into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromBoolean(true)
 * // @log: '0x1'
 *
 * Hex.fromBoolean(false)
 * // @log: '0x0'
 *
 * Hex.fromBoolean(true, { size: 32 })
 * // @log: '0x0000000000000000000000000000000000000000000000000000000000000001'
 * ```
 *
 * @param value - The boolean value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromBoolean(value, options = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof options.size === 'number') {
        _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertSize */ .Sl(hex, options.size);
        return padLeft(hex, options.size);
    }
    return hex;
}
/**
 * Encodes a {@link ox#Bytes.Bytes} value into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes, Hex } from 'ox'
 *
 * Hex.fromBytes(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // @log: '0x48656c6c6f20576f726c6421'
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromBytes(value, options = {}) {
    let string = '';
    for (let i = 0; i < value.length; i++)
        string += hexes[value[i]];
    const hex = `0x${string}`;
    if (typeof options.size === 'number') {
        _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertSize */ .Sl(hex, options.size);
        return padRight(hex, options.size);
    }
    return hex;
}
/**
 * Encodes a number or bigint into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromNumber(420)
 * // @log: '0x1a4'
 *
 * Hex.fromNumber(420, { size: 32 })
 * // @log: '0x00000000000000000000000000000000000000000000000000000000000001a4'
 * ```
 *
 * @param value - The number or bigint value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromNumber(value, options = {}) {
    const { signed, size } = options;
    const value_ = BigInt(value);
    let maxValue;
    if (size) {
        if (signed)
            maxValue = (1n << (BigInt(size) * 8n - 1n)) - 1n;
        else
            maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    }
    else if (typeof value === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if ((maxValue && value_ > maxValue) || value_ < minValue) {
        const suffix = typeof value === 'bigint' ? 'n' : '';
        throw new IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value}${suffix}`,
        });
    }
    const stringValue = (signed && value_ < 0 ? BigInt.asUintN(size * 8, BigInt(value_)) : value_).toString(16);
    const hex = `0x${stringValue}`;
    if (size)
        return padLeft(hex, size);
    return hex;
}
/**
 * Encodes a string into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 * Hex.fromString('Hello World!')
 * // '0x48656c6c6f20576f726c6421'
 *
 * Hex.fromString('Hello World!', { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 * ```
 *
 * @param value - The string value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromString(value, options = {}) {
    return fromBytes(encoder.encode(value), options);
}
/**
 * Checks if two {@link ox#Hex.Hex} values are equal.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.isEqual('0xdeadbeef', '0xdeadbeef')
 * // @log: true
 *
 * Hex.isEqual('0xda', '0xba')
 * // @log: false
 * ```
 *
 * @param hexA - The first {@link ox#Hex.Hex} value.
 * @param hexB - The second {@link ox#Hex.Hex} value.
 * @returns `true` if the two {@link ox#Hex.Hex} values are equal, `false` otherwise.
 */
function isEqual(hexA, hexB) {
    return equalBytes(Bytes.fromHex(hexA), Bytes.fromHex(hexB));
}
/**
 * Pads a {@link ox#Hex.Hex} value to the left with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.padLeft('0x1234', 4)
 * // @log: '0x00001234'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to pad.
 * @param size - The size (in bytes) of the output hex value.
 * @returns The padded {@link ox#Hex.Hex} value.
 */
function padLeft(value, size) {
    return _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .pad */ .eV(value, { dir: 'left', size });
}
/**
 * Pads a {@link ox#Hex.Hex} value to the right with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts
 * import { Hex } from 'ox'
 *
 * Hex.padRight('0x1234', 4)
 * // @log: '0x12340000'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to pad.
 * @param size - The size (in bytes) of the output hex value.
 * @returns The padded {@link ox#Hex.Hex} value.
 */
function padRight(value, size) {
    return _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .pad */ .eV(value, { dir: 'right', size });
}
/**
 * Generates a random {@link ox#Hex.Hex} value of the specified length.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * const hex = Hex.random(32)
 * // @log: '0x...'
 * ```
 *
 * @returns Random {@link ox#Hex.Hex} value.
 */
function random(length) {
    return fromBytes(Bytes.random(length));
}
/**
 * Returns a section of a {@link ox#Bytes.Bytes} value given a start/end bytes offset.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.slice('0x0123456789', 1, 4)
 * // @log: '0x234567'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to slice.
 * @param start - The start offset (in bytes).
 * @param end - The end offset (in bytes).
 * @param options - Options.
 * @returns The sliced {@link ox#Hex.Hex} value.
 */
function slice(value, start, end, options = {}) {
    const { strict } = options;
    _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertStartOffset */ .kK(value, start);
    const value_ = `0x${value
        .replace('0x', '')
        .slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
    if (strict)
        _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertEndOffset */ .X(value_, start, end);
    return value_;
}
/**
 * Retrieves the size of a {@link ox#Hex.Hex} value (in bytes).
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.size('0xdeadbeef')
 * // @log: 4
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to get the size of.
 * @returns The size of the {@link ox#Hex.Hex} value (in bytes).
 */
function size(value) {
    return Math.ceil((value.length - 2) / 2);
}
/**
 * Trims leading zeros from a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.trimLeft('0x00000000deadbeef')
 * // @log: '0xdeadbeef'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to trim.
 * @returns The trimmed {@link ox#Hex.Hex} value.
 */
function trimLeft(value) {
    return internal.trim(value, { dir: 'left' });
}
/**
 * Trims trailing zeros from a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.trimRight('0xdeadbeef00000000')
 * // @log: '0xdeadbeef'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to trim.
 * @returns The trimmed {@link ox#Hex.Hex} value.
 */
function trimRight(value) {
    return internal.trim(value, { dir: 'right' });
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a BigInt.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toBigInt('0x1a4')
 * // @log: 420n
 *
 * Hex.toBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // @log: 420n
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded BigInt.
 */
function toBigInt(hex, options = {}) {
    const { signed } = options;
    if (options.size)
        _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertSize */ .Sl(hex, options.size);
    const value = BigInt(hex);
    if (!signed)
        return value;
    const size = (hex.length - 2) / 2;
    const max_unsigned = (1n << (BigInt(size) * 8n)) - 1n;
    const max_signed = max_unsigned >> 1n;
    if (value <= max_signed)
        return value;
    return value - max_unsigned - 1n;
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a boolean.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toBoolean('0x01')
 * // @log: true
 *
 * Hex.toBoolean('0x0000000000000000000000000000000000000000000000000000000000000001', { size: 32 })
 * // @log: true
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded boolean.
 */
function toBoolean(hex, options = {}) {
    if (options.size)
        internal.assertSize(hex, options.size);
    const hex_ = trimLeft(hex);
    if (hex_ === '0x')
        return false;
    if (hex_ === '0x1')
        return true;
    throw new InvalidHexBooleanError(hex);
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * const data = Hex.toBytes('0x48656c6c6f20776f726c6421')
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded {@link ox#Bytes.Bytes}.
 */
function toBytes(hex, options = {}) {
    return Bytes.fromHex(hex, options);
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a number.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toNumber('0x1a4')
 * // @log: 420
 *
 * Hex.toNumber('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // @log: 420
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded number.
 */
function toNumber(hex, options = {}) {
    const { signed, size } = options;
    if (!signed && !size)
        return Number(hex);
    return Number(toBigInt(hex, options));
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a string.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toString('0x48656c6c6f20576f726c6421')
 * // @log: 'Hello world!'
 *
 * Hex.toString('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *  size: 32,
 * })
 * // @log: 'Hello world'
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded string.
 */
function toString(hex, options = {}) {
    const { size } = options;
    let bytes = Bytes.fromHex(hex);
    if (size) {
        internal_bytes.assertSize(bytes, size);
        bytes = Bytes.trimRight(bytes);
    }
    return new TextDecoder().decode(bytes);
}
/**
 * Checks if the given value is {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes, Hex } from 'ox'
 *
 * Hex.validate('0xdeadbeef')
 * // @log: true
 *
 * Hex.validate(Bytes.from([1, 2, 3]))
 * // @log: false
 * ```
 *
 * @param value - The value to check.
 * @param options - Options.
 * @returns `true` if the value is a {@link ox#Hex.Hex}, `false` otherwise.
 */
function validate(value, options = {}) {
    const { strict = false } = options;
    try {
        assert(value, { strict });
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Thrown when the provided integer is out of range, and cannot be represented as a hex value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromNumber(420182738912731283712937129)
 * // @error: Hex.IntegerOutOfRangeError: Number \`4.2018273891273126e+26\` is not in safe unsigned integer range (`0` to `9007199254740991`)
 * ```
 */
class IntegerOutOfRangeError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ max, min, signed, size, value, }) {
        super(`Number \`${value}\` is not in safe${size ? ` ${size * 8}-bit` : ''}${signed ? ' signed' : ' unsigned'} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.IntegerOutOfRangeError'
        });
    }
}
/**
 * Thrown when the provided hex value cannot be represented as a boolean.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toBoolean('0xa')
 * // @error: Hex.InvalidHexBooleanError: Hex value `"0xa"` is not a valid boolean.
 * // @error: The hex value must be `"0x0"` (false) or `"0x1"` (true).
 * ```
 */
class InvalidHexBooleanError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(hex) {
        super(`Hex value \`"${hex}"\` is not a valid boolean.`, {
            metaMessages: [
                'The hex value must be `"0x0"` (false) or `"0x1"` (true).',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexBooleanError'
        });
    }
}
/**
 * Thrown when the provided value is not a valid hex type.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.assert(1)
 * // @error: Hex.InvalidHexTypeError: Value `1` of type `number` is an invalid hex type.
 * ```
 */
class InvalidHexTypeError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(value) {
        super(`Value \`${typeof value === 'object' ? _Json_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .A(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
            metaMessages: ['Hex types must be represented as `"0x${string}"`.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexTypeError'
        });
    }
}
/**
 * Thrown when the provided hex value is invalid.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.assert('0x0123456789abcdefg')
 * // @error: Hex.InvalidHexValueError: Value `0x0123456789abcdefg` is an invalid hex value.
 * // @error: Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).
 * ```
 */
class InvalidHexValueError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(value) {
        super(`Value \`${value}\` is an invalid hex value.`, {
            metaMessages: [
                'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexValueError'
        });
    }
}
/**
 * Thrown when the provided hex value is an odd length.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.fromHex('0xabcde')
 * // @error: Hex.InvalidLengthError: Hex value `"0xabcde"` is an odd length (5 nibbles).
 * ```
 */
class InvalidLengthError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(value) {
        super(`Hex value \`"${value}"\` is an odd length (${value.length - 2} nibbles).`, {
            metaMessages: ['It must be an even length.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidLengthError'
        });
    }
}
/**
 * Thrown when the size of the value exceeds the expected max size.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromString('Hello World!', { size: 8 })
 * // @error: Hex.SizeOverflowError: Size cannot exceed `8` bytes. Given size: `12` bytes.
 * ```
 */
class SizeOverflowError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeOverflowError'
        });
    }
}
/**
 * Thrown when the slice offset exceeds the bounds of the value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.slice('0x0123456789', 6)
 * // @error: Hex.SliceOffsetOutOfBoundsError: Slice starting at offset `6` is out-of-bounds (size: `5`).
 * ```
 */
class SliceOffsetOutOfBoundsError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SliceOffsetOutOfBoundsError'
        });
    }
}
/**
 * Thrown when the size of the value exceeds the pad size.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.padLeft('0x1a4e12a45a21323123aaa87a897a897a898a6567a578a867a98778a667a85a875a87a6a787a65a675a6a9', 32)
 * // @error: Hex.SizeExceedsPaddingSizeError: Hex size (`43`) exceeds padding size (`32`).
 * ```
 */
class SizeExceedsPaddingSizeError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeExceedsPaddingSizeError'
        });
    }
}
//# sourceMappingURL=Hex.js.map

/***/ },

/***/ 407490
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  secp256k1: () => (/* binding */ secp256k1)
});

// UNUSED EXPORTS: encodeToCurve, hashToCurve, schnorr, secp256k1_hasher

// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/sha2.js + 1 modules
var sha2 = __webpack_require__(902265);
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/hmac.js
var hmac = __webpack_require__(621454);
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/utils.js + 1 modules
var utils = __webpack_require__(968279);
;// ./node_modules/viem/node_modules/@noble/curves/esm/abstract/utils.js
/**
 * Hex, bytes and number utilities.
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
function abytes(item) {
    if (!isBytes(item))
        throw new Error('Uint8Array expected');
}
function abool(title, value) {
    if (typeof value !== 'boolean')
        throw new Error(title + ' boolean expected, got ' + value);
}
// Used in weierstrass, der
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? '0' + hex : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    return hex === '' ? _0n : BigInt('0x' + hex); // Big Endian
}
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = 
// @ts-ignore
typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function';
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * Convert byte array to hex string. Uses built-in function, when available.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin)
        return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
        return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F)
        return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f)
        return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * Convert hex string to byte array. Uses built-in function, when available.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin)
        return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
// BE: Big Endian, LE: Little Endian
function utils_bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function utils_bytesToNumberLE(bytes) {
    abytes(bytes);
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function utils_numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function numberToBytesLE(n, len) {
    return utils_numberToBytesBE(n, len).reverse();
}
// Unpadded, rarely used
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */
function utils_ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') {
        try {
            res = hexToBytes(hex);
        }
        catch (e) {
            throw new Error(title + ' must be hex string or Uint8Array, cause: ' + e);
        }
    }
    else if (isBytes(hex)) {
        // Uint8Array.from() instead of hash.slice() because node.js Buffer
        // is instance of Uint8Array, and its slice() creates **mutable** copy
        res = Uint8Array.from(hex);
    }
    else {
        throw new Error(title + ' must be hex string or Uint8Array');
    }
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength)
        throw new Error(title + ' of length ' + expectedLength + ' expected, got ' + len);
    return res;
}
/**
 * Copies several Uint8Arrays into one.
 */
function utils_concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
// Compares 2 u8a-s in kinda constant time
function equalBytes(a, b) {
    if (a.length !== b.length)
        return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++)
        diff |= a[i] ^ b[i];
    return diff === 0;
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
// Is positive bigint
const isPosBig = (n) => typeof n === 'bigint' && _0n <= n;
function utils_inRange(n, min, max) {
    return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
/**
 * Asserts min <= n < max. NOTE: It's < max and not <= max.
 * @example
 * aInRange('x', x, 1n, 256n); // would assume x is in (1n..255n)
 */
function utils_aInRange(title, n, min, max) {
    // Why min <= n < max and not a (min < n < max) OR b (min <= n <= max)?
    // consider P=256n, min=0n, max=P
    // - a for min=0 would require -1:          `inRange('x', x, -1n, P)`
    // - b would commonly require subtraction:  `inRange('x', x, 0n, P - 1n)`
    // - our way is the cleanest:               `inRange('x', x, 0n, P)
    if (!utils_inRange(n, min, max))
        throw new Error('expected valid ' + title + ': ' + min + ' <= n < ' + max + ', got ' + n);
}
// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 * TODO: merge with nLength in modular
 */
function bitLen(n) {
    let len;
    for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
    return len;
}
/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */
function bitGet(n, pos) {
    return (n >> BigInt(pos)) & _1n;
}
/**
 * Sets single bit at position.
 */
function bitSet(n, pos, value) {
    return n | ((value ? _1n : _0n) << BigInt(pos));
}
/**
 * Calculate mask for N bits. Not using ** operator with bigints because of old engines.
 * Same as BigInt(`0b${Array(i).fill('1').join('')}`)
 */
const utils_bitMask = (n) => (_1n << BigInt(n)) - _1n;
// DRBG
const u8n = (len) => new Uint8Array(len); // creates Uint8Array
const u8fr = (arr) => Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2)
        throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2)
        throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function')
        throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n(0)) => {
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([0x00]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0)
            return;
        k = h(u8fr([0x01]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = () => {
        // HMAC-DRBG generate() function
        if (i++ >= 1000)
            throw new Error('drbg: tried 1000 values');
        let len = 0;
        const out = [];
        while (len < qByteLen) {
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return utils_concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while (!(res = pred(gen())))
            reseed();
        reset();
        return res;
    };
    return genUntil;
}
// Validating curves and fields
const validatorFns = {
    bigint: (val) => typeof val === 'bigint',
    function: (val) => typeof val === 'function',
    boolean: (val) => typeof val === 'boolean',
    string: (val) => typeof val === 'string',
    stringOrUint8Array: (val) => typeof val === 'string' || isBytes(val),
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === 'function' && Number.isSafeInteger(val.outputLen),
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function')
            throw new Error('invalid validator function');
        const val = object[fieldName];
        if (isOptional && val === undefined)
            return;
        if (!checkVal(val, object)) {
            throw new Error('param ' + String(fieldName) + ' is invalid. Expected ' + type + ', got ' + val);
        }
    };
    for (const [fieldName, type] of Object.entries(validators))
        checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
        checkField(fieldName, type, true);
    return object;
}
// validate type tests
// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });
/**
 * throws not implemented error
 */
const notImplemented = () => {
    throw new Error('not implemented');
};
/**
 * Memoizes (caches) computation result.
 * Uses WeakMap: the value is going auto-cleaned by GC after last reference is removed.
 */
function memoized(fn) {
    const map = new WeakMap();
    return (arg, ...args) => {
        const val = map.get(arg);
        if (val !== undefined)
            return val;
        const computed = fn(arg, ...args);
        map.set(arg, computed);
        return computed;
    };
}
//# sourceMappingURL=utils.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/abstract/modular.js
/**
 * Utils for modular division and finite fields.
 * A finite field over 11 is integer number operations `mod 11`.
 * There is no division: it is replaced by modular multiplicative inverse.
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */


// prettier-ignore
const modular_0n = BigInt(0), modular_1n = BigInt(1), _2n = /* @__PURE__ */ BigInt(2), _3n = /* @__PURE__ */ BigInt(3);
// prettier-ignore
const _4n = /* @__PURE__ */ BigInt(4), _5n = /* @__PURE__ */ BigInt(5), _8n = /* @__PURE__ */ BigInt(8);
// Calculates a modulo b
function modular_mod(a, b) {
    const result = a % b;
    return result >= modular_0n ? result : b + result;
}
/**
 * Efficiently raise num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * TODO: remove.
 * @example
 * pow(2n, 6n, 11n) // 64n % 11n == 9n
 */
function pow(num, power, modulo) {
    return FpPow(Field(modulo), num, power);
}
/** Does `x^(2^power)` mod p. `pow2(30, 4)` == `30^(2^4)` */
function pow2(x, power, modulo) {
    let res = x;
    while (power-- > modular_0n) {
        res *= res;
        res %= modulo;
    }
    return res;
}
/**
 * Inverses number over modulo.
 * Implemented using [Euclidean GCD](https://brilliant.org/wiki/extended-euclidean-algorithm/).
 */
function invert(number, modulo) {
    if (number === modular_0n)
        throw new Error('invert: expected non-zero number');
    if (modulo <= modular_0n)
        throw new Error('invert: expected positive modulus, got ' + modulo);
    // Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
    let a = modular_mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = modular_0n, y = modular_1n, u = modular_1n, v = modular_0n;
    while (a !== modular_0n) {
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        // prettier-ignore
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== modular_1n)
        throw new Error('invert: does not exist');
    return modular_mod(x, modulo);
}
// Not all roots are possible! Example which will throw:
// const NUM =
// n = 72057594037927816n;
// Fp = Field(BigInt('0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab'));
function sqrt3mod4(Fp, n) {
    const p1div4 = (Fp.ORDER + modular_1n) / _4n;
    const root = Fp.pow(n, p1div4);
    // Throw if root^2 != n
    if (!Fp.eql(Fp.sqr(root), n))
        throw new Error('Cannot find square root');
    return root;
}
function sqrt5mod8(Fp, n) {
    const p5div8 = (Fp.ORDER - _5n) / _8n;
    const n2 = Fp.mul(n, _2n);
    const v = Fp.pow(n2, p5div8);
    const nv = Fp.mul(n, v);
    const i = Fp.mul(Fp.mul(nv, _2n), v);
    const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
    if (!Fp.eql(Fp.sqr(root), n))
        throw new Error('Cannot find square root');
    return root;
}
// TODO: Commented-out for now. Provide test vectors.
// Tonelli is too slow for extension fields Fp2.
// That means we can't use sqrt (c1, c2...) even for initialization constants.
// if (P % _16n === _9n) return sqrt9mod16;
// // prettier-ignore
// function sqrt9mod16<T>(Fp: IField<T>, n: T, p7div16?: bigint) {
//   if (p7div16 === undefined) p7div16 = (Fp.ORDER + BigInt(7)) / _16n;
//   const c1 = Fp.sqrt(Fp.neg(Fp.ONE)); //  1. c1 = sqrt(-1) in F, i.e., (c1^2) == -1 in F
//   const c2 = Fp.sqrt(c1);             //  2. c2 = sqrt(c1) in F, i.e., (c2^2) == c1 in F
//   const c3 = Fp.sqrt(Fp.neg(c1));     //  3. c3 = sqrt(-c1) in F, i.e., (c3^2) == -c1 in F
//   const c4 = p7div16;                 //  4. c4 = (q + 7) / 16        # Integer arithmetic
//   let tv1 = Fp.pow(n, c4);            //  1. tv1 = x^c4
//   let tv2 = Fp.mul(c1, tv1);          //  2. tv2 = c1 * tv1
//   const tv3 = Fp.mul(c2, tv1);        //  3. tv3 = c2 * tv1
//   let tv4 = Fp.mul(c3, tv1);          //  4. tv4 = c3 * tv1
//   const e1 = Fp.eql(Fp.sqr(tv2), n);  //  5.  e1 = (tv2^2) == x
//   const e2 = Fp.eql(Fp.sqr(tv3), n);  //  6.  e2 = (tv3^2) == x
//   tv1 = Fp.cmov(tv1, tv2, e1); //  7. tv1 = CMOV(tv1, tv2, e1)  # Select tv2 if (tv2^2) == x
//   tv2 = Fp.cmov(tv4, tv3, e2); //  8. tv2 = CMOV(tv4, tv3, e2)  # Select tv3 if (tv3^2) == x
//   const e3 = Fp.eql(Fp.sqr(tv2), n);  //  9.  e3 = (tv2^2) == x
//   return Fp.cmov(tv1, tv2, e3); // 10.  z = CMOV(tv1, tv2, e3) # Select the sqrt from tv1 and tv2
// }
/**
 * Tonelli-Shanks square root search algorithm.
 * 1. https://eprint.iacr.org/2012/685.pdf (page 12)
 * 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
 * @param P field order
 * @returns function that takes field Fp (created from P) and number n
 */
function tonelliShanks(P) {
    // Initialization (precomputation).
    if (P < BigInt(3))
        throw new Error('sqrt is not defined for small field');
    // Factor P - 1 = Q * 2^S, where Q is odd
    let Q = P - modular_1n;
    let S = 0;
    while (Q % _2n === modular_0n) {
        Q /= _2n;
        S++;
    }
    // Find the first quadratic non-residue Z >= 2
    let Z = _2n;
    const _Fp = Field(P);
    while (FpLegendre(_Fp, Z) === 1) {
        // Basic primality test for P. After x iterations, chance of
        // not finding quadratic non-residue is 2^x, so 2^1000.
        if (Z++ > 1000)
            throw new Error('Cannot find square root: probably non-prime P');
    }
    // Fast-path; usually done before Z, but we do "primality test".
    if (S === 1)
        return sqrt3mod4;
    // Slow-path
    // TODO: test on Fp2 and others
    let cc = _Fp.pow(Z, Q); // c = z^Q
    const Q1div2 = (Q + modular_1n) / _2n;
    return function tonelliSlow(Fp, n) {
        if (Fp.is0(n))
            return n;
        // Check if n is a quadratic residue using Legendre symbol
        if (FpLegendre(Fp, n) !== 1)
            throw new Error('Cannot find square root');
        // Initialize variables for the main loop
        let M = S;
        let c = Fp.mul(Fp.ONE, cc); // c = z^Q, move cc from field _Fp into field Fp
        let t = Fp.pow(n, Q); // t = n^Q, first guess at the fudge factor
        let R = Fp.pow(n, Q1div2); // R = n^((Q+1)/2), first guess at the square root
        // Main loop
        // while t != 1
        while (!Fp.eql(t, Fp.ONE)) {
            if (Fp.is0(t))
                return Fp.ZERO; // if t=0 return R=0
            let i = 1;
            // Find the smallest i >= 1 such that t^(2^i) ≡ 1 (mod P)
            let t_tmp = Fp.sqr(t); // t^(2^1)
            while (!Fp.eql(t_tmp, Fp.ONE)) {
                i++;
                t_tmp = Fp.sqr(t_tmp); // t^(2^2)...
                if (i === M)
                    throw new Error('Cannot find square root');
            }
            // Calculate the exponent for b: 2^(M - i - 1)
            const exponent = modular_1n << BigInt(M - i - 1); // bigint is important
            const b = Fp.pow(c, exponent); // b = 2^(M - i - 1)
            // Update variables
            M = i;
            c = Fp.sqr(b); // c = b^2
            t = Fp.mul(t, c); // t = (t * b^2)
            R = Fp.mul(R, b); // R = R*b
        }
        return R;
    };
}
/**
 * Square root for a finite field. Will try optimized versions first:
 *
 * 1. P ≡ 3 (mod 4)
 * 2. P ≡ 5 (mod 8)
 * 3. Tonelli-Shanks algorithm
 *
 * Different algorithms can give different roots, it is up to user to decide which one they want.
 * For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
 */
function FpSqrt(P) {
    // P ≡ 3 (mod 4) => √n = n^((P+1)/4)
    if (P % _4n === _3n)
        return sqrt3mod4;
    // P ≡ 5 (mod 8) => Atkin algorithm, page 10 of https://eprint.iacr.org/2012/685.pdf
    if (P % _8n === _5n)
        return sqrt5mod8;
    // P ≡ 9 (mod 16) not implemented, see above
    // Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
// Little-endian check for first LE bit (last BE bit);
const isNegativeLE = (num, modulo) => (modular_mod(num, modulo) & modular_1n) === modular_1n;
// prettier-ignore
const FIELD_FIELDS = [
    'create', 'isValid', 'is0', 'neg', 'inv', 'sqrt', 'sqr',
    'eql', 'add', 'sub', 'mul', 'pow', 'div',
    'addN', 'subN', 'mulN', 'sqrN'
];
function modular_validateField(field) {
    const initial = {
        ORDER: 'bigint',
        MASK: 'bigint',
        BYTES: 'isSafeInteger',
        BITS: 'isSafeInteger',
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = 'function';
        return map;
    }, initial);
    return validateObject(field, opts);
}
// Generic field functions
/**
 * Same as `pow` but for Fp: non-constant-time.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 */
function FpPow(Fp, num, power) {
    if (power < modular_0n)
        throw new Error('invalid exponent, negatives unsupported');
    if (power === modular_0n)
        return Fp.ONE;
    if (power === modular_1n)
        return num;
    let p = Fp.ONE;
    let d = num;
    while (power > modular_0n) {
        if (power & modular_1n)
            p = Fp.mul(p, d);
        d = Fp.sqr(d);
        power >>= modular_1n;
    }
    return p;
}
/**
 * Efficiently invert an array of Field elements.
 * Exception-free. Will return `undefined` for 0 elements.
 * @param passZero map 0 to 0 (instead of undefined)
 */
function modular_FpInvertBatch(Fp, nums, passZero = false) {
    const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : undefined);
    // Walk from first to last, multiply them by each other MOD p
    const multipliedAcc = nums.reduce((acc, num, i) => {
        if (Fp.is0(num))
            return acc;
        inverted[i] = acc;
        return Fp.mul(acc, num);
    }, Fp.ONE);
    // Invert last element
    const invertedAcc = Fp.inv(multipliedAcc);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i) => {
        if (Fp.is0(num))
            return acc;
        inverted[i] = Fp.mul(acc, inverted[i]);
        return Fp.mul(acc, num);
    }, invertedAcc);
    return inverted;
}
// TODO: remove
function FpDiv(Fp, lhs, rhs) {
    return Fp.mul(lhs, typeof rhs === 'bigint' ? invert(rhs, Fp.ORDER) : Fp.inv(rhs));
}
/**
 * Legendre symbol.
 * Legendre constant is used to calculate Legendre symbol (a | p)
 * which denotes the value of a^((p-1)/2) (mod p).
 *
 * * (a | p) ≡ 1    if a is a square (mod p), quadratic residue
 * * (a | p) ≡ -1   if a is not a square (mod p), quadratic non residue
 * * (a | p) ≡ 0    if a ≡ 0 (mod p)
 */
function FpLegendre(Fp, n) {
    // We can use 3rd argument as optional cache of this value
    // but seems unneeded for now. The operation is very fast.
    const p1mod2 = (Fp.ORDER - modular_1n) / _2n;
    const powered = Fp.pow(n, p1mod2);
    const yes = Fp.eql(powered, Fp.ONE);
    const zero = Fp.eql(powered, Fp.ZERO);
    const no = Fp.eql(powered, Fp.neg(Fp.ONE));
    if (!yes && !zero && !no)
        throw new Error('invalid Legendre symbol result');
    return yes ? 1 : zero ? 0 : -1;
}
// This function returns True whenever the value x is a square in the field F.
function FpIsSquare(Fp, n) {
    const l = FpLegendre(Fp, n);
    return l === 1;
}
// CURVE.n lengths
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    if (nBitLength !== undefined)
        (0,utils/* anumber */.Fe)(nBitLength);
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
}
/**
 * Initializes a finite field over prime.
 * Major performance optimizations:
 * * a) denormalized operations like mulN instead of mul
 * * b) same object shape: never add or remove keys
 * * c) Object.freeze
 * Fragile: always run a benchmark on a change.
 * Security note: operations don't check 'isValid' for all elements for performance reasons,
 * it is caller responsibility to check this.
 * This is low-level code, please make sure you know what you're doing.
 * @param ORDER prime positive bigint
 * @param bitLen how many bits the field consumes
 * @param isLE (def: false) if encoding / decoding should be in little-endian
 * @param redef optional faster redefinitions of sqrt and other methods
 */
function Field(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= modular_0n)
        throw new Error('invalid field: expected ORDER > 0, got ' + ORDER);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048)
        throw new Error('invalid field: expected ORDER of <= 2048 bytes');
    let sqrtP; // cached sqrtP
    const f = Object.freeze({
        ORDER,
        isLE,
        BITS,
        BYTES,
        MASK: utils_bitMask(BITS),
        ZERO: modular_0n,
        ONE: modular_1n,
        create: (num) => modular_mod(num, ORDER),
        isValid: (num) => {
            if (typeof num !== 'bigint')
                throw new Error('invalid field element: expected bigint, got ' + typeof num);
            return modular_0n <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num) => num === modular_0n,
        isOdd: (num) => (num & modular_1n) === modular_1n,
        neg: (num) => modular_mod(-num, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num) => modular_mod(num * num, ORDER),
        add: (lhs, rhs) => modular_mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => modular_mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => modular_mod(lhs * rhs, ORDER),
        pow: (num, power) => FpPow(f, num, power),
        div: (lhs, rhs) => modular_mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num) => num * num,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num) => invert(num, ORDER),
        sqrt: redef.sqrt ||
            ((n) => {
                if (!sqrtP)
                    sqrtP = FpSqrt(ORDER);
                return sqrtP(f, n);
            }),
        toBytes: (num) => (isLE ? numberToBytesLE(num, BYTES) : utils_numberToBytesBE(num, BYTES)),
        fromBytes: (bytes) => {
            if (bytes.length !== BYTES)
                throw new Error('Field.fromBytes: expected ' + BYTES + ' bytes, got ' + bytes.length);
            return isLE ? utils_bytesToNumberLE(bytes) : utils_bytesToNumberBE(bytes);
        },
        // TODO: we don't need it here, move out to separate fn
        invertBatch: (lst) => modular_FpInvertBatch(f, lst),
        // We can't move this out because Fp6, Fp12 implement it
        // and it's unclear what to return in there.
        cmov: (a, b, c) => (c ? b : a),
    });
    return Object.freeze(f);
}
function FpSqrtOdd(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error("Field doesn't have isOdd");
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? root : Fp.neg(root);
}
function FpSqrtEven(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error("Field doesn't have isOdd");
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? Fp.neg(root) : root;
}
/**
 * "Constant-time" private key generation utility.
 * Same as mapKeyToField, but accepts less bytes (40 instead of 48 for 32-byte field).
 * Which makes it slightly more biased, less secure.
 * @deprecated use `mapKeyToField` instead
 */
function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = ensureBytes('privateHash', hash);
    const hashLen = hash.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error('hashToPrivateScalar: expected ' + minLen + '-1024 bytes of input, got ' + hashLen);
    const num = isLE ? bytesToNumberLE(hash) : bytesToNumberBE(hash);
    return modular_mod(num, groupOrder - modular_1n) + modular_1n;
}
/**
 * Returns total number of bytes consumed by the field element.
 * For example, 32 bytes for usual 256-bit weierstrass curve.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of field
 */
function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== 'bigint')
        throw new Error('field order must be bigint');
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
}
/**
 * Returns minimal amount of bytes that can be safely reduced
 * by field order.
 * Should be 2^-128 for 128-bit curve such as P256.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of target hash
 */
function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
}
/**
 * "Constant-time" private key generation utility.
 * Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being negligible.
 * Needs at least 48 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
 * RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
 * @param hash hash output from SHA3 or a similar function
 * @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
 * @param isLE interpret hash bytes as LE num
 * @returns valid private scalar
 */
function mapHashToField(key, fieldOrder, isLE = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    // No small numbers: need to understand bias story. No huge numbers: easier to detect JS timings.
    if (len < 16 || len < minLen || len > 1024)
        throw new Error('expected ' + minLen + '-1024 bytes of input, got ' + len);
    const num = isLE ? utils_bytesToNumberLE(key) : utils_bytesToNumberBE(key);
    // `mod(x, 11)` can sometimes produce 0. `mod(x, 10) + 1` is the same, but no 0
    const reduced = modular_mod(num, fieldOrder - modular_1n) + modular_1n;
    return isLE ? numberToBytesLE(reduced, fieldLen) : utils_numberToBytesBE(reduced, fieldLen);
}
//# sourceMappingURL=modular.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/abstract/curve.js
/**
 * Methods for elliptic curve multiplication by scalars.
 * Contains wNAF, pippenger
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */


const curve_0n = BigInt(0);
const curve_1n = BigInt(1);
function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
}
function validateW(W, bits) {
    if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
        throw new Error('invalid window size, expected [1..' + bits + '], got W=' + W);
}
function calcWOpts(W, scalarBits) {
    validateW(W, scalarBits);
    const windows = Math.ceil(scalarBits / W) + 1; // W=8 33. Not 32, because we skip zero
    const windowSize = 2 ** (W - 1); // W=8 128. Not 256, because we skip zero
    const maxNumber = 2 ** W; // W=8 256
    const mask = utils_bitMask(W); // W=8 255 == mask 0b11111111
    const shiftBy = BigInt(W); // W=8 8
    return { windows, windowSize, mask, maxNumber, shiftBy };
}
function calcOffsets(n, window, wOpts) {
    const { windowSize, mask, maxNumber, shiftBy } = wOpts;
    let wbits = Number(n & mask); // extract W bits.
    let nextN = n >> shiftBy; // shift number by W bits.
    // What actually happens here:
    // const highestBit = Number(mask ^ (mask >> 1n));
    // let wbits2 = wbits - 1; // skip zero
    // if (wbits2 & highestBit) { wbits2 ^= Number(mask); // (~);
    // split if bits > max: +224 => 256-32
    if (wbits > windowSize) {
        // we skip zero, which means instead of `>= size-1`, we do `> size`
        wbits -= maxNumber; // -32, can be maxNumber - wbits, but then we need to set isNeg here.
        nextN += curve_1n; // +256 (carry)
    }
    const offsetStart = window * windowSize;
    const offset = offsetStart + Math.abs(wbits) - 1; // -1 because we skip zero
    const isZero = wbits === 0; // is current window slice a 0?
    const isNeg = wbits < 0; // is current window slice negative?
    const isNegF = window % 2 !== 0; // fake random statement for noise
    const offsetF = offsetStart; // fake offset for noise
    return { nextN, offset, isZero, isNeg, isNegF, offsetF };
}
function validateMSMPoints(points, c) {
    if (!Array.isArray(points))
        throw new Error('array expected');
    points.forEach((p, i) => {
        if (!(p instanceof c))
            throw new Error('invalid point at index ' + i);
    });
}
function validateMSMScalars(scalars, field) {
    if (!Array.isArray(scalars))
        throw new Error('array of scalars expected');
    scalars.forEach((s, i) => {
        if (!field.isValid(s))
            throw new Error('invalid scalar at index ' + i);
    });
}
// Since points in different groups cannot be equal (different object constructor),
// we can have single place to store precomputes.
// Allows to make points frozen / immutable.
const pointPrecomputes = new WeakMap();
const pointWindowSizes = new WeakMap();
function getW(P) {
    return pointWindowSizes.get(P) || 1;
}
/**
 * Elliptic curve multiplication of Point by scalar. Fragile.
 * Scalars should always be less than curve order: this should be checked inside of a curve itself.
 * Creates precomputation tables for fast multiplication:
 * - private scalar is split by fixed size windows of W bits
 * - every window point is collected from window's table & added to accumulator
 * - since windows are different, same point inside tables won't be accessed more than once per calc
 * - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
 * - +1 window is neccessary for wNAF
 * - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
 *
 * @todo Research returning 2d JS array of windows, instead of a single window.
 * This would allow windows to be in different memory locations
 */
function wNAF(c, bits) {
    return {
        constTimeNegate,
        hasPrecomputes(elm) {
            return getW(elm) !== 1;
        },
        // non-const time multiplication ladder
        unsafeLadder(elm, n, p = c.ZERO) {
            let d = elm;
            while (n > curve_0n) {
                if (n & curve_1n)
                    p = p.add(d);
                d = d.double();
                n >>= curve_1n;
            }
            return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @param elm Point instance
         * @param W window size
         * @returns precomputed point tables flattened to a single array
         */
        precomputeWindow(elm, W) {
            const { windows, windowSize } = calcWOpts(W, bits);
            const points = [];
            let p = elm;
            let base = p;
            for (let window = 0; window < windows; window++) {
                base = p;
                points.push(base);
                // i=1, bc we skip 0
                for (let i = 1; i < windowSize; i++) {
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */
        wNAF(W, precomputes, n) {
            // Smaller version:
            // https://github.com/paulmillr/noble-secp256k1/blob/47cb1669b6e506ad66b35fe7d76132ae97465da2/index.ts#L502-L541
            // TODO: check the scalar is less than group order?
            // wNAF behavior is undefined otherwise. But have to carefully remove
            // other checks before wNAF. ORDER == bits here.
            // Accumulators
            let p = c.ZERO;
            let f = c.BASE;
            // This code was first written with assumption that 'f' and 'p' will never be infinity point:
            // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
            // there is negate now: it is possible that negated element from low value
            // would be the same as high element, which will create carry into next window.
            // It's not obvious how this can fail, but still worth investigating later.
            const wo = calcWOpts(W, bits);
            for (let window = 0; window < wo.windows; window++) {
                // (n === _0n) is handled and not early-exited. isEven and offsetF are used for noise
                const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window, wo);
                n = nextN;
                if (isZero) {
                    // bits are 0: add garbage to fake point
                    // Important part for const-time getPublicKey: add random "noise" point to f.
                    f = f.add(constTimeNegate(isNegF, precomputes[offsetF]));
                }
                else {
                    // bits are 1: add to result point
                    p = p.add(constTimeNegate(isNeg, precomputes[offset]));
                }
            }
            // Return both real and fake points: JIT won't eliminate f.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return { p, f };
        },
        /**
         * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @param acc accumulator point to add result of multiplication
         * @returns point
         */
        wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
            const wo = calcWOpts(W, bits);
            for (let window = 0; window < wo.windows; window++) {
                if (n === curve_0n)
                    break; // Early-exit, skip 0 value
                const { nextN, offset, isZero, isNeg } = calcOffsets(n, window, wo);
                n = nextN;
                if (isZero) {
                    // Window bits are 0: skip processing.
                    // Move to next window.
                    continue;
                }
                else {
                    const item = precomputes[offset];
                    acc = acc.add(isNeg ? item.negate() : item); // Re-using acc allows to save adds in MSM
                }
            }
            return acc;
        },
        getPrecomputes(W, P, transform) {
            // Calculate precomputes on a first run, reuse them after
            let comp = pointPrecomputes.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1)
                    pointPrecomputes.set(P, transform(comp));
            }
            return comp;
        },
        wNAFCached(P, n, transform) {
            const W = getW(P);
            return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
        },
        wNAFCachedUnsafe(P, n, transform, prev) {
            const W = getW(P);
            if (W === 1)
                return this.unsafeLadder(P, n, prev); // For W=1 ladder is ~x2 faster
            return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
        },
        // We calculate precomputes for elliptic curve point multiplication
        // using windowed method. This specifies window size and
        // stores precomputed values. Usually only base point would be precomputed.
        setWindowSize(P, W) {
            validateW(W, bits);
            pointWindowSizes.set(P, W);
            pointPrecomputes.delete(P);
        },
    };
}
/**
 * Pippenger algorithm for multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
 * 30x faster vs naive addition on L=4096, 10x faster than precomputes.
 * For N=254bit, L=1, it does: 1024 ADD + 254 DBL. For L=5: 1536 ADD + 254 DBL.
 * Algorithmically constant-time (for same L), even when 1 point + scalar, or when scalar = 0.
 * @param c Curve Point constructor
 * @param fieldN field over CURVE.N - important that it's not over CURVE.P
 * @param points array of L curve points
 * @param scalars array of L scalars (aka private keys / bigints)
 */
function pippenger(c, fieldN, points, scalars) {
    // If we split scalars by some window (let's say 8 bits), every chunk will only
    // take 256 buckets even if there are 4096 scalars, also re-uses double.
    // TODO:
    // - https://eprint.iacr.org/2024/750.pdf
    // - https://tches.iacr.org/index.php/TCHES/article/view/10287
    // 0 is accepted in scalars
    validateMSMPoints(points, c);
    validateMSMScalars(scalars, fieldN);
    const plength = points.length;
    const slength = scalars.length;
    if (plength !== slength)
        throw new Error('arrays of points and scalars must have equal length');
    // if (plength === 0) throw new Error('array must be of length >= 2');
    const zero = c.ZERO;
    const wbits = bitLen(BigInt(plength));
    let windowSize = 1; // bits
    if (wbits > 12)
        windowSize = wbits - 3;
    else if (wbits > 4)
        windowSize = wbits - 2;
    else if (wbits > 0)
        windowSize = 2;
    const MASK = utils_bitMask(windowSize);
    const buckets = new Array(Number(MASK) + 1).fill(zero); // +1 for zero array
    const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
    let sum = zero;
    for (let i = lastBits; i >= 0; i -= windowSize) {
        buckets.fill(zero);
        for (let j = 0; j < slength; j++) {
            const scalar = scalars[j];
            const wbits = Number((scalar >> BigInt(i)) & MASK);
            buckets[wbits] = buckets[wbits].add(points[j]);
        }
        let resI = zero; // not using this will do small speed-up, but will lose ct
        // Skip first bucket, because it is zero
        for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
            sumI = sumI.add(buckets[j]);
            resI = resI.add(sumI);
        }
        sum = sum.add(resI);
        if (i !== 0)
            for (let j = 0; j < windowSize; j++)
                sum = sum.double();
    }
    return sum;
}
/**
 * Precomputed multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
 * @param c Curve Point constructor
 * @param fieldN field over CURVE.N - important that it's not over CURVE.P
 * @param points array of L curve points
 * @returns function which multiplies points with scaars
 */
function precomputeMSMUnsafe(c, fieldN, points, windowSize) {
    /**
     * Performance Analysis of Window-based Precomputation
     *
     * Base Case (256-bit scalar, 8-bit window):
     * - Standard precomputation requires:
     *   - 31 additions per scalar × 256 scalars = 7,936 ops
     *   - Plus 255 summary additions = 8,191 total ops
     *   Note: Summary additions can be optimized via accumulator
     *
     * Chunked Precomputation Analysis:
     * - Using 32 chunks requires:
     *   - 255 additions per chunk
     *   - 256 doublings
     *   - Total: (255 × 32) + 256 = 8,416 ops
     *
     * Memory Usage Comparison:
     * Window Size | Standard Points | Chunked Points
     * ------------|-----------------|---------------
     *     4-bit   |     520         |      15
     *     8-bit   |    4,224        |     255
     *    10-bit   |   13,824        |   1,023
     *    16-bit   |  557,056        |  65,535
     *
     * Key Advantages:
     * 1. Enables larger window sizes due to reduced memory overhead
     * 2. More efficient for smaller scalar counts:
     *    - 16 chunks: (16 × 255) + 256 = 4,336 ops
     *    - ~2x faster than standard 8,191 ops
     *
     * Limitations:
     * - Not suitable for plain precomputes (requires 256 constant doublings)
     * - Performance degrades with larger scalar counts:
     *   - Optimal for ~256 scalars
     *   - Less efficient for 4096+ scalars (Pippenger preferred)
     */
    validateW(windowSize, fieldN.BITS);
    validateMSMPoints(points, c);
    const zero = c.ZERO;
    const tableSize = 2 ** windowSize - 1; // table size (without zero)
    const chunks = Math.ceil(fieldN.BITS / windowSize); // chunks of item
    const MASK = bitMask(windowSize);
    const tables = points.map((p) => {
        const res = [];
        for (let i = 0, acc = p; i < tableSize; i++) {
            res.push(acc);
            acc = acc.add(p);
        }
        return res;
    });
    return (scalars) => {
        validateMSMScalars(scalars, fieldN);
        if (scalars.length > points.length)
            throw new Error('array of scalars must be smaller than array of points');
        let res = zero;
        for (let i = 0; i < chunks; i++) {
            // No need to double if accumulator is still zero.
            if (res !== zero)
                for (let j = 0; j < windowSize; j++)
                    res = res.double();
            const shiftBy = BigInt(chunks * windowSize - (i + 1) * windowSize);
            for (let j = 0; j < scalars.length; j++) {
                const n = scalars[j];
                const curr = Number((n >> shiftBy) & MASK);
                if (!curr)
                    continue; // skip zero scalars chunks
                res = res.add(tables[j][curr - 1]);
            }
        }
        return res;
    };
}
function validateBasic(curve) {
    modular_validateField(curve.Fp);
    validateObject(curve, {
        n: 'bigint',
        h: 'bigint',
        Gx: 'field',
        Gy: 'field',
    }, {
        nBitLength: 'isSafeInteger',
        nByteLength: 'isSafeInteger',
    });
    // Set defaults
    return Object.freeze({
        ...nLength(curve.n, curve.nBitLength),
        ...curve,
        ...{ p: curve.Fp.ORDER },
    });
}
//# sourceMappingURL=curve.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/abstract/weierstrass.js
/**
 * Short Weierstrass curve methods. The formula is: y² = x³ + ax + b.
 *
 * ### Parameters
 *
 * To initialize a weierstrass curve, one needs to pass following params:
 *
 * * a: formula param
 * * b: formula param
 * * Fp: finite field of prime characteristic P; may be complex (Fp2). Arithmetics is done in field
 * * n: order of prime subgroup a.k.a total amount of valid curve points
 * * Gx: Base point (x, y) aka generator point. Gx = x coordinate
 * * Gy: ...y coordinate
 * * h: cofactor, usually 1. h*n = curve group order (n is only subgroup order)
 * * lowS: whether to enable (default) or disable "low-s" non-malleable signatures
 *
 * ### Design rationale for types
 *
 * * Interaction between classes from different curves should fail:
 *   `k256.Point.BASE.add(p256.Point.BASE)`
 * * For this purpose we want to use `instanceof` operator, which is fast and works during runtime
 * * Different calls of `curve()` would return different classes -
 *   `curve(params) !== curve(params)`: if somebody decided to monkey-patch their curve,
 *   it won't affect others
 *
 * TypeScript can't infer types for classes created inside a function. Classes is one instance
 * of nominative types in TypeScript and interfaces only check for shape, so it's hard to create
 * unique type for every function call.
 *
 * We can use generic types via some param, like curve opts, but that would:
 *     1. Enable interaction between `curve(params)` and `curve(params)` (curves of same params)
 *     which is hard to debug.
 *     2. Params can be generic and we can't enforce them to be constant value:
 *     if somebody creates curve from non-constant params,
 *     it would be allowed to interact with other curves with non-constant params
 *
 * @todo https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#unique-symbol
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// prettier-ignore

// prettier-ignore

// prettier-ignore

function validateSigVerOpts(opts) {
    if (opts.lowS !== undefined)
        abool('lowS', opts.lowS);
    if (opts.prehash !== undefined)
        abool('prehash', opts.prehash);
}
function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
        a: 'field',
        b: 'field',
    }, {
        allowInfinityPoint: 'boolean',
        allowedPrivateKeyLengths: 'array',
        clearCofactor: 'function',
        fromBytes: 'function',
        isTorsionFree: 'function',
        toBytes: 'function',
        wrapPrivateKey: 'boolean',
    });
    const { endo, Fp, a } = opts;
    if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
            throw new Error('invalid endo: CURVE.a must be 0');
        }
        if (typeof endo !== 'object' ||
            typeof endo.beta !== 'bigint' ||
            typeof endo.splitScalar !== 'function') {
            throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
        }
    }
    return Object.freeze({ ...opts });
}
class DERErr extends Error {
    constructor(m = '') {
        super(m);
    }
}
/**
 * ASN.1 DER encoding utilities. ASN is very complex & fragile. Format:
 *
 *     [0x30 (SEQUENCE), bytelength, 0x02 (INTEGER), intLength, R, 0x02 (INTEGER), intLength, S]
 *
 * Docs: https://letsencrypt.org/docs/a-warm-welcome-to-asn1-and-der/, https://luca.ntop.org/Teaching/Appunti/asn1.html
 */
const DER = {
    // asn.1 DER encoding utils
    Err: DERErr,
    // Basic building block is TLV (Tag-Length-Value)
    _tlv: {
        encode: (tag, data) => {
            const { Err: E } = DER;
            if (tag < 0 || tag > 256)
                throw new E('tlv.encode: wrong tag');
            if (data.length & 1)
                throw new E('tlv.encode: unpadded data');
            const dataLen = data.length / 2;
            const len = numberToHexUnpadded(dataLen);
            if ((len.length / 2) & 128)
                throw new E('tlv.encode: long form length too big');
            // length of length with long form flag
            const lenLen = dataLen > 127 ? numberToHexUnpadded((len.length / 2) | 128) : '';
            const t = numberToHexUnpadded(tag);
            return t + lenLen + len + data;
        },
        // v - value, l - left bytes (unparsed)
        decode(tag, data) {
            const { Err: E } = DER;
            let pos = 0;
            if (tag < 0 || tag > 256)
                throw new E('tlv.encode: wrong tag');
            if (data.length < 2 || data[pos++] !== tag)
                throw new E('tlv.decode: wrong tlv');
            const first = data[pos++];
            const isLong = !!(first & 128); // First bit of first length byte is flag for short/long form
            let length = 0;
            if (!isLong)
                length = first;
            else {
                // Long form: [longFlag(1bit), lengthLength(7bit), length (BE)]
                const lenLen = first & 127;
                if (!lenLen)
                    throw new E('tlv.decode(long): indefinite length not supported');
                if (lenLen > 4)
                    throw new E('tlv.decode(long): byte length is too big'); // this will overflow u32 in js
                const lengthBytes = data.subarray(pos, pos + lenLen);
                if (lengthBytes.length !== lenLen)
                    throw new E('tlv.decode: length bytes not complete');
                if (lengthBytes[0] === 0)
                    throw new E('tlv.decode(long): zero leftmost byte');
                for (const b of lengthBytes)
                    length = (length << 8) | b;
                pos += lenLen;
                if (length < 128)
                    throw new E('tlv.decode(long): not minimal encoding');
            }
            const v = data.subarray(pos, pos + length);
            if (v.length !== length)
                throw new E('tlv.decode: wrong value length');
            return { v, l: data.subarray(pos + length) };
        },
    },
    // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
    // since we always use positive integers here. It must always be empty:
    // - add zero byte if exists
    // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
    _int: {
        encode(num) {
            const { Err: E } = DER;
            if (num < weierstrass_0n)
                throw new E('integer: negative integers are not allowed');
            let hex = numberToHexUnpadded(num);
            // Pad with zero byte if negative flag is present
            if (Number.parseInt(hex[0], 16) & 0b1000)
                hex = '00' + hex;
            if (hex.length & 1)
                throw new E('unexpected DER parsing assertion: unpadded hex');
            return hex;
        },
        decode(data) {
            const { Err: E } = DER;
            if (data[0] & 128)
                throw new E('invalid signature integer: negative');
            if (data[0] === 0x00 && !(data[1] & 128))
                throw new E('invalid signature integer: unnecessary leading zero');
            return utils_bytesToNumberBE(data);
        },
    },
    toSig(hex) {
        // parse DER signature
        const { Err: E, _int: int, _tlv: tlv } = DER;
        const data = utils_ensureBytes('signature', hex);
        const { v: seqBytes, l: seqLeftBytes } = tlv.decode(0x30, data);
        if (seqLeftBytes.length)
            throw new E('invalid signature: left bytes after parsing');
        const { v: rBytes, l: rLeftBytes } = tlv.decode(0x02, seqBytes);
        const { v: sBytes, l: sLeftBytes } = tlv.decode(0x02, rLeftBytes);
        if (sLeftBytes.length)
            throw new E('invalid signature: left bytes after parsing');
        return { r: int.decode(rBytes), s: int.decode(sBytes) };
    },
    hexFromSig(sig) {
        const { _tlv: tlv, _int: int } = DER;
        const rs = tlv.encode(0x02, int.encode(sig.r));
        const ss = tlv.encode(0x02, int.encode(sig.s));
        const seq = rs + ss;
        return tlv.encode(0x30, seq);
    },
};
function numToSizedHex(num, size) {
    return bytesToHex(utils_numberToBytesBE(num, size));
}
// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
const weierstrass_0n = BigInt(0), weierstrass_1n = BigInt(1), weierstrass_2n = BigInt(2), weierstrass_3n = BigInt(3), weierstrass_4n = BigInt(4);
function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp } = CURVE; // All curves has same field / group length as for now, but they can differ
    const Fn = Field(CURVE.n, CURVE.nBitLength);
    const toBytes = CURVE.toBytes ||
        ((_c, point, _isCompressed) => {
            const a = point.toAffine();
            return utils_concatBytes(Uint8Array.from([0x04]), Fp.toBytes(a.x), Fp.toBytes(a.y));
        });
    const fromBytes = CURVE.fromBytes ||
        ((bytes) => {
            // const head = bytes[0];
            const tail = bytes.subarray(1);
            // if (head !== 0x04) throw new Error('Only non-compressed encoding is supported');
            const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
            const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
            return { x, y };
        });
    /**
     * y² = x³ + ax + b: Short weierstrass curve formula. Takes x, returns y².
     * @returns y²
     */
    function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x); // x * x
        const x3 = Fp.mul(x2, x); // x² * x
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b); // x³ + a * x + b
    }
    function isValidXY(x, y) {
        const left = Fp.sqr(y); // y²
        const right = weierstrassEquation(x); // x³ + ax + b
        return Fp.eql(left, right);
    }
    // Validate whether the passed curve params are valid.
    // Test 1: equation y² = x³ + ax + b should work for generator point.
    if (!isValidXY(CURVE.Gx, CURVE.Gy))
        throw new Error('bad curve params: generator point');
    // Test 2: discriminant Δ part should be non-zero: 4a³ + 27b² != 0.
    // Guarantees curve is genus-1, smooth (non-singular).
    const _4a3 = Fp.mul(Fp.pow(CURVE.a, weierstrass_3n), weierstrass_4n);
    const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
    if (Fp.is0(Fp.add(_4a3, _27b2)))
        throw new Error('bad curve params: a or b');
    // Valid group elements reside in range 1..n-1
    function isWithinCurveOrder(num) {
        return utils_inRange(num, weierstrass_1n, CURVE.n);
    }
    // Validates if priv key is valid and converts it to bigint.
    // Supports options allowedPrivateKeyLengths and wrapPrivateKey.
    function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
        if (lengths && typeof key !== 'bigint') {
            if (isBytes(key))
                key = bytesToHex(key);
            // Normalize to hex string, pad. E.g. P521 would norm 130-132 char hex to 132-char bytes
            if (typeof key !== 'string' || !lengths.includes(key.length))
                throw new Error('invalid private key');
            key = key.padStart(nByteLength * 2, '0');
        }
        let num;
        try {
            num =
                typeof key === 'bigint'
                    ? key
                    : utils_bytesToNumberBE(utils_ensureBytes('private key', key, nByteLength));
        }
        catch (error) {
            throw new Error('invalid private key, expected hex or ' + nByteLength + ' bytes, got ' + typeof key);
        }
        if (wrapPrivateKey)
            num = modular_mod(num, N); // disabled by default, enabled for BLS
        utils_aInRange('private key', num, weierstrass_1n, N); // num in range [1..N-1]
        return num;
    }
    function aprjpoint(other) {
        if (!(other instanceof Point))
            throw new Error('ProjectivePoint expected');
    }
    // Memoized toAffine / validity check. They are heavy. Points are immutable.
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (X, Y, Z) ∋ (x=X/Z, y=Y/Z)
    const toAffineMemo = memoized((p, iz) => {
        const { px: x, py: y, pz: z } = p;
        // Fast-path for normalized points
        if (Fp.eql(z, Fp.ONE))
            return { x, y };
        const is0 = p.is0();
        // If invZ was 0, we return zero point. However we still want to execute
        // all operations, so we replace invZ with a random number, 1.
        if (iz == null)
            iz = is0 ? Fp.ONE : Fp.inv(z);
        const ax = Fp.mul(x, iz);
        const ay = Fp.mul(y, iz);
        const zz = Fp.mul(z, iz);
        if (is0)
            return { x: Fp.ZERO, y: Fp.ZERO };
        if (!Fp.eql(zz, Fp.ONE))
            throw new Error('invZ was invalid');
        return { x: ax, y: ay };
    });
    // NOTE: on exception this will crash 'cached' and no value will be set.
    // Otherwise true will be return
    const assertValidMemo = memoized((p) => {
        if (p.is0()) {
            // (0, 1, 0) aka ZERO is invalid in most contexts.
            // In BLS, ZERO can be serialized, so we allow it.
            // (0, 0, 0) is invalid representation of ZERO.
            if (CURVE.allowInfinityPoint && !Fp.is0(p.py))
                return;
            throw new Error('bad point: ZERO');
        }
        // Some 3rd-party test vectors require different wording between here & `fromCompressedHex`
        const { x, y } = p.toAffine();
        // Check if x, y are valid field elements
        if (!Fp.isValid(x) || !Fp.isValid(y))
            throw new Error('bad point: x or y not FE');
        if (!isValidXY(x, y))
            throw new Error('bad point: equation left != right');
        if (!p.isTorsionFree())
            throw new Error('bad point: not in prime-order subgroup');
        return true;
    });
    /**
     * Projective Point works in 3d / projective (homogeneous) coordinates: (X, Y, Z) ∋ (x=X/Z, y=Y/Z)
     * Default Point works in 2d / affine coordinates: (x, y)
     * We're doing calculations in projective, because its operations don't require costly inversion.
     */
    class Point {
        constructor(px, py, pz) {
            if (px == null || !Fp.isValid(px))
                throw new Error('x required');
            if (py == null || !Fp.isValid(py) || Fp.is0(py))
                throw new Error('y required');
            if (pz == null || !Fp.isValid(pz))
                throw new Error('z required');
            this.px = px;
            this.py = py;
            this.pz = pz;
            Object.freeze(this);
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
            const { x, y } = p || {};
            if (!p || !Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('invalid affine point');
            if (p instanceof Point)
                throw new Error('projective point not allowed');
            const is0 = (i) => Fp.eql(i, Fp.ZERO);
            // fromAffine(x:0, y:0) would produce (x:0, y:0, z:1), but we need (x:0, y:1, z:0)
            if (is0(x) && is0(y))
                return Point.ZERO;
            return new Point(x, y, Fp.ONE);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */
        static normalizeZ(points) {
            const toInv = modular_FpInvertBatch(Fp, points.map((p) => p.pz));
            return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */
        static fromHex(hex) {
            const P = Point.fromAffine(fromBytes(utils_ensureBytes('pointHex', hex)));
            P.assertValidity();
            return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
            return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // Multiscalar Multiplication
        static msm(points, scalars) {
            return pippenger(Point, Fn, points, scalars);
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            wnaf.setWindowSize(this, windowSize);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
            assertValidMemo(this);
        }
        hasEvenY() {
            const { y } = this.toAffine();
            if (Fp.isOdd)
                return !Fp.isOdd(y);
            throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */
        equals(other) {
            aprjpoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
            const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
            return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */
        negate() {
            return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
            const { a, b } = CURVE;
            const b3 = Fp.mul(b, weierstrass_3n);
            const { px: X1, py: Y1, pz: Z1 } = this;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            let t0 = Fp.mul(X1, X1); // step 1
            let t1 = Fp.mul(Y1, Y1);
            let t2 = Fp.mul(Z1, Z1);
            let t3 = Fp.mul(X1, Y1);
            t3 = Fp.add(t3, t3); // step 5
            Z3 = Fp.mul(X1, Z1);
            Z3 = Fp.add(Z3, Z3);
            X3 = Fp.mul(a, Z3);
            Y3 = Fp.mul(b3, t2);
            Y3 = Fp.add(X3, Y3); // step 10
            X3 = Fp.sub(t1, Y3);
            Y3 = Fp.add(t1, Y3);
            Y3 = Fp.mul(X3, Y3);
            X3 = Fp.mul(t3, X3);
            Z3 = Fp.mul(b3, Z3); // step 15
            t2 = Fp.mul(a, t2);
            t3 = Fp.sub(t0, t2);
            t3 = Fp.mul(a, t3);
            t3 = Fp.add(t3, Z3);
            Z3 = Fp.add(t0, t0); // step 20
            t0 = Fp.add(Z3, t0);
            t0 = Fp.add(t0, t2);
            t0 = Fp.mul(t0, t3);
            Y3 = Fp.add(Y3, t0);
            t2 = Fp.mul(Y1, Z1); // step 25
            t2 = Fp.add(t2, t2);
            t0 = Fp.mul(t2, t3);
            X3 = Fp.sub(X3, t0);
            Z3 = Fp.mul(t2, t1);
            Z3 = Fp.add(Z3, Z3); // step 30
            Z3 = Fp.add(Z3, Z3);
            return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
            aprjpoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            const a = CURVE.a;
            const b3 = Fp.mul(CURVE.b, weierstrass_3n);
            let t0 = Fp.mul(X1, X2); // step 1
            let t1 = Fp.mul(Y1, Y2);
            let t2 = Fp.mul(Z1, Z2);
            let t3 = Fp.add(X1, Y1);
            let t4 = Fp.add(X2, Y2); // step 5
            t3 = Fp.mul(t3, t4);
            t4 = Fp.add(t0, t1);
            t3 = Fp.sub(t3, t4);
            t4 = Fp.add(X1, Z1);
            let t5 = Fp.add(X2, Z2); // step 10
            t4 = Fp.mul(t4, t5);
            t5 = Fp.add(t0, t2);
            t4 = Fp.sub(t4, t5);
            t5 = Fp.add(Y1, Z1);
            X3 = Fp.add(Y2, Z2); // step 15
            t5 = Fp.mul(t5, X3);
            X3 = Fp.add(t1, t2);
            t5 = Fp.sub(t5, X3);
            Z3 = Fp.mul(a, t4);
            X3 = Fp.mul(b3, t2); // step 20
            Z3 = Fp.add(X3, Z3);
            X3 = Fp.sub(t1, Z3);
            Z3 = Fp.add(t1, Z3);
            Y3 = Fp.mul(X3, Z3);
            t1 = Fp.add(t0, t0); // step 25
            t1 = Fp.add(t1, t0);
            t2 = Fp.mul(a, t2);
            t4 = Fp.mul(b3, t4);
            t1 = Fp.add(t1, t2);
            t2 = Fp.sub(t0, t2); // step 30
            t2 = Fp.mul(a, t2);
            t4 = Fp.add(t4, t2);
            t0 = Fp.mul(t1, t4);
            Y3 = Fp.add(Y3, t0);
            t0 = Fp.mul(t5, t4); // step 35
            X3 = Fp.mul(t3, X3);
            X3 = Fp.sub(X3, t0);
            t0 = Fp.mul(t3, t1);
            Z3 = Fp.mul(t5, Z3);
            Z3 = Fp.add(Z3, t0); // step 40
            return new Point(X3, Y3, Z3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, n, Point.normalizeZ);
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */
        multiplyUnsafe(sc) {
            const { endo, n: N } = CURVE;
            utils_aInRange('scalar', sc, weierstrass_0n, N);
            const I = Point.ZERO;
            if (sc === weierstrass_0n)
                return I;
            if (this.is0() || sc === weierstrass_1n)
                return this;
            // Case a: no endomorphism. Case b: has precomputes.
            if (!endo || wnaf.hasPrecomputes(this))
                return wnaf.wNAFCachedUnsafe(this, sc, Point.normalizeZ);
            // Case c: endomorphism
            /** See docs for {@link EndomorphismOpts} */
            let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
            let k1p = I;
            let k2p = I;
            let d = this;
            while (k1 > weierstrass_0n || k2 > weierstrass_0n) {
                if (k1 & weierstrass_1n)
                    k1p = k1p.add(d);
                if (k2 & weierstrass_1n)
                    k2p = k2p.add(d);
                d = d.double();
                k1 >>= weierstrass_1n;
                k2 >>= weierstrass_1n;
            }
            if (k1neg)
                k1p = k1p.negate();
            if (k2neg)
                k2p = k2p.negate();
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            return k1p.add(k2p);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */
        multiply(scalar) {
            const { endo, n: N } = CURVE;
            utils_aInRange('scalar', scalar, weierstrass_1n, N);
            let point, fake; // Fake point is used to const-time mult
            /** See docs for {@link EndomorphismOpts} */
            if (endo) {
                const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
                let { p: k1p, f: f1p } = this.wNAF(k1);
                let { p: k2p, f: f2p } = this.wNAF(k2);
                k1p = wnaf.constTimeNegate(k1neg, k1p);
                k2p = wnaf.constTimeNegate(k2neg, k2p);
                k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                point = k1p.add(k2p);
                fake = f1p.add(f2p);
            }
            else {
                const { p, f } = this.wNAF(scalar);
                point = p;
                fake = f;
            }
            // Normalize `z` for both points, but return only real one
            return Point.normalizeZ([point, fake])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */
        multiplyAndAddUnsafe(Q, a, b) {
            const G = Point.BASE; // No Strauss-Shamir trick: we have 10% faster G precomputes
            const mul = (P, a // Select faster multiply() method
            ) => (a === weierstrass_0n || a === weierstrass_1n || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a));
            const sum = mul(this, a).add(mul(Q, b));
            return sum.is0() ? undefined : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
            return toAffineMemo(this, iz);
        }
        isTorsionFree() {
            const { h: cofactor, isTorsionFree } = CURVE;
            if (cofactor === weierstrass_1n)
                return true; // No subgroups, always torsion-free
            if (isTorsionFree)
                return isTorsionFree(Point, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
        }
        clearCofactor() {
            const { h: cofactor, clearCofactor } = CURVE;
            if (cofactor === weierstrass_1n)
                return this; // Fast-path
            if (clearCofactor)
                return clearCofactor(Point, this);
            return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
            abool('isCompressed', isCompressed);
            this.assertValidity();
            return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
            abool('isCompressed', isCompressed);
            return bytesToHex(this.toRawBytes(isCompressed));
        }
    }
    // base / generator point
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    // zero / infinity / identity point
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO); // 0, 1, 0
    const { endo, nBitLength } = CURVE;
    const wnaf = wNAF(Point, endo ? Math.ceil(nBitLength / 2) : nBitLength);
    return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder,
    };
}
function validateOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
        hash: 'hash',
        hmac: 'function',
        randomBytes: 'function',
    }, {
        bits2int: 'function',
        bits2int_modN: 'function',
        lowS: 'boolean',
    });
    return Object.freeze({ lowS: true, ...opts });
}
/**
 * Creates short weierstrass curve and ECDSA signature methods for it.
 * @example
 * import { Field } from '@noble/curves/abstract/modular';
 * // Before that, define BigInt-s: a, b, p, n, Gx, Gy
 * const curve = weierstrass({ a, b, Fp: Field(p), n, Gx, Gy, h: 1n })
 */
function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp, n: CURVE_ORDER, nByteLength, nBitLength } = CURVE;
    const compressedLen = Fp.BYTES + 1; // e.g. 33 for 32
    const uncompressedLen = 2 * Fp.BYTES + 1; // e.g. 65 for 32
    function modN(a) {
        return modular_mod(a, CURVE_ORDER);
    }
    function invN(a) {
        return invert(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder, } = weierstrassPoints({
        ...CURVE,
        toBytes(_c, point, isCompressed) {
            const a = point.toAffine();
            const x = Fp.toBytes(a.x);
            const cat = utils_concatBytes;
            abool('isCompressed', isCompressed);
            if (isCompressed) {
                return cat(Uint8Array.from([point.hasEvenY() ? 0x02 : 0x03]), x);
            }
            else {
                return cat(Uint8Array.from([0x04]), x, Fp.toBytes(a.y));
            }
        },
        fromBytes(bytes) {
            const len = bytes.length;
            const head = bytes[0];
            const tail = bytes.subarray(1);
            // this.assertValidity() is done inside of fromHex
            if (len === compressedLen && (head === 0x02 || head === 0x03)) {
                const x = utils_bytesToNumberBE(tail);
                if (!utils_inRange(x, weierstrass_1n, Fp.ORDER))
                    throw new Error('Point is not on curve');
                const y2 = weierstrassEquation(x); // y² = x³ + ax + b
                let y;
                try {
                    y = Fp.sqrt(y2); // y = y² ^ (p+1)/4
                }
                catch (sqrtError) {
                    const suffix = sqrtError instanceof Error ? ': ' + sqrtError.message : '';
                    throw new Error('Point is not on curve' + suffix);
                }
                const isYOdd = (y & weierstrass_1n) === weierstrass_1n;
                // ECDSA
                const isHeadOdd = (head & 1) === 1;
                if (isHeadOdd !== isYOdd)
                    y = Fp.neg(y);
                return { x, y };
            }
            else if (len === uncompressedLen && head === 0x04) {
                const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                return { x, y };
            }
            else {
                const cl = compressedLen;
                const ul = uncompressedLen;
                throw new Error('invalid Point, expected length of ' + cl + ', or uncompressed ' + ul + ', got ' + len);
            }
        },
    });
    function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> weierstrass_1n;
        return number > HALF;
    }
    function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    // slice bytes num
    const slcNum = (b, from, to) => utils_bytesToNumberBE(b.slice(from, to));
    /**
     * ECDSA signature with its (r, s) properties. Supports DER & compact representations.
     */
    class Signature {
        constructor(r, s, recovery) {
            utils_aInRange('r', r, weierstrass_1n, CURVE_ORDER); // r in [1..N]
            utils_aInRange('s', s, weierstrass_1n, CURVE_ORDER); // s in [1..N]
            this.r = r;
            this.s = s;
            if (recovery != null)
                this.recovery = recovery;
            Object.freeze(this);
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
            const l = nByteLength;
            hex = utils_ensureBytes('compactSignature', hex, l * 2);
            return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
            const { r, s } = DER.toSig(utils_ensureBytes('DER', hex));
            return new Signature(r, s);
        }
        /**
         * @todo remove
         * @deprecated
         */
        assertValidity() { }
        addRecoveryBit(recovery) {
            return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
            const { r, s, recovery: rec } = this;
            const h = bits2int_modN(utils_ensureBytes('msgHash', msgHash)); // Truncate hash
            if (rec == null || ![0, 1, 2, 3].includes(rec))
                throw new Error('recovery id invalid');
            const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
            if (radj >= Fp.ORDER)
                throw new Error('recovery id 2 or 3 invalid');
            const prefix = (rec & 1) === 0 ? '02' : '03';
            const R = Point.fromHex(prefix + numToSizedHex(radj, Fp.BYTES));
            const ir = invN(radj); // r^-1
            const u1 = modN(-h * ir); // -hr^-1
            const u2 = modN(s * ir); // sr^-1
            const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2); // (sr^-1)R-(hr^-1)G = -(hr^-1)G + (sr^-1)
            if (!Q)
                throw new Error('point at infinify'); // unsafe is fine: no priv data leaked
            Q.assertValidity();
            return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
            return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
            return hexToBytes(this.toDERHex());
        }
        toDERHex() {
            return DER.hexFromSig(this);
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
            return hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
            const l = nByteLength;
            return numToSizedHex(this.r, l) + numToSizedHex(this.s, l);
        }
    }
    const utils = {
        isValidPrivateKey(privateKey) {
            try {
                normPrivateKeyToScalar(privateKey);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        normPrivateKeyToScalar: normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */
        randomPrivateKey: () => {
            const length = getMinHashLength(CURVE.n);
            return mapHashToField(CURVE.randomBytes(length), CURVE.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */
        precompute(windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3)); // 3 is arbitrary, just need any number here
            return point;
        },
    };
    /**
     * Computes public key for a private key. Checks for validity of the private key.
     * @param privateKey private key
     * @param isCompressed whether to return compact (default), or full key
     * @returns Public key, full when isCompressed=false; short when isCompressed=true
     */
    function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    /**
     * Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
     */
    function isProbPub(item) {
        if (typeof item === 'bigint')
            return false;
        if (item instanceof Point)
            return true;
        const arr = utils_ensureBytes('key', item);
        const len = arr.length;
        const fpl = Fp.BYTES;
        const compLen = fpl + 1; // e.g. 33 for 32
        const uncompLen = 2 * fpl + 1; // e.g. 65 for 32
        if (CURVE.allowedPrivateKeyLengths || nByteLength === compLen) {
            return undefined;
        }
        else {
            return len === compLen || len === uncompLen;
        }
    }
    /**
     * ECDH (Elliptic Curve Diffie Hellman).
     * Computes shared public key from private key and public key.
     * Checks: 1) private key validity 2) shared key is on-curve.
     * Does NOT hash the result.
     * @param privateA private key
     * @param publicB different public key
     * @param isCompressed whether to return compact (default), or full key
     * @returns shared public key
     */
    function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA) === true)
            throw new Error('first arg must be private key');
        if (isProbPub(publicB) === false)
            throw new Error('second arg must be public key');
        const b = Point.fromHex(publicB); // check for being on-curve
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    // RFC6979: ensure ECDSA msg is X bytes and < N. RFC suggests optional truncating via bits2octets.
    // FIPS 186-4 4.6 suggests the leftmost min(nBitLen, outLen) bits, which matches bits2int.
    // bits2int can produce res>N, we can do mod(res, N) since the bitLen is the same.
    // int2octets can't be used; pads small msgs with 0: unacceptatble for trunc as per RFC vectors
    const bits2int = CURVE.bits2int ||
        function (bytes) {
            // Our custom check "just in case", for protection against DoS
            if (bytes.length > 8192)
                throw new Error('input is too large');
            // For curves with nBitLength % 8 !== 0: bits2octets(bits2octets(m)) !== bits2octets(m)
            // for some cases, since bytes.length * 8 is not actual bitLength.
            const num = utils_bytesToNumberBE(bytes); // check for == u8 done here
            const delta = bytes.length * 8 - nBitLength; // truncate to nBitLength leftmost bits
            return delta > 0 ? num >> BigInt(delta) : num;
        };
    const bits2int_modN = CURVE.bits2int_modN ||
        function (bytes) {
            return modN(bits2int(bytes)); // can't use bytesToNumberBE here
        };
    // NOTE: pads output with zero as per spec
    const ORDER_MASK = utils_bitMask(nBitLength);
    /**
     * Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
     */
    function int2octets(num) {
        utils_aInRange('num < 2^' + nBitLength, num, weierstrass_0n, ORDER_MASK);
        // works with order, can have different size than numToField!
        return utils_numberToBytesBE(num, nByteLength);
    }
    // Steps A, D of RFC6979 3.2
    // Creates RFC6979 seed; converts msg/privKey to numbers.
    // Used only in sign, not in verify.
    // NOTE: we cannot assume here that msgHash has same amount of bytes as curve order,
    // this will be invalid at least for P521. Also it can be bigger for P224 + SHA256
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (['recovered', 'canonical'].some((k) => k in opts))
            throw new Error('sign() legacy options not supported');
        const { hash, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts; // generates low-s sigs by default
        if (lowS == null)
            lowS = true; // RFC6979 3.2: we skip step A, because we already provide hash
        msgHash = utils_ensureBytes('msgHash', msgHash);
        validateSigVerOpts(opts);
        if (prehash)
            msgHash = utils_ensureBytes('prehashed msgHash', hash(msgHash));
        // We can't later call bits2octets, since nested bits2int is broken for curves
        // with nBitLength % 8 !== 0. Because of that, we unwrap it here as int2octets call.
        // const bits2octets = (bits) => int2octets(bits2int_modN(bits))
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey); // validate private key, convert to bigint
        const seedArgs = [int2octets(d), int2octets(h1int)];
        // extraEntropy. RFC6979 3.6: additional k' (optional).
        if (ent != null && ent !== false) {
            // K = HMAC_K(V || 0x00 || int2octets(x) || bits2octets(h1) || k')
            const e = ent === true ? randomBytes(Fp.BYTES) : ent; // generate random bytes OR pass as-is
            seedArgs.push(utils_ensureBytes('extraEntropy', e)); // check for being bytes
        }
        const seed = utils_concatBytes(...seedArgs); // Step D of RFC6979 3.2
        const m = h1int; // NOTE: no need to call bits2int second time here, it is inside truncateHash!
        // Converts signature params into point w r/s, checks result for validity.
        function k2sig(kBytes) {
            // RFC 6979 Section 3.2, step 3: k = bits2int(T)
            const k = bits2int(kBytes); // Cannot use fields methods, since it is group element
            if (!isWithinCurveOrder(k))
                return; // Important: all mod() calls here must be done over N
            const ik = invN(k); // k^-1 mod n
            const q = Point.BASE.multiply(k).toAffine(); // q = Gk
            const r = modN(q.x); // r = q.x mod n
            if (r === weierstrass_0n)
                return;
            // Can use scalar blinding b^-1(bm + bdr) where b ∈ [1,q−1] according to
            // https://tches.iacr.org/index.php/TCHES/article/view/7337/6509. We've decided against it:
            // a) dependency on CSPRNG b) 15% slowdown c) doesn't really help since bigints are not CT
            const s = modN(ik * modN(m + r * d)); // Not using blinding here
            if (s === weierstrass_0n)
                return;
            let recovery = (q.x === r ? 0 : 2) | Number(q.y & weierstrass_1n); // recovery bit (2 or 3, when q.x > n)
            let normS = s;
            if (lowS && isBiggerThanHalfOrder(s)) {
                normS = normalizeS(s); // if lowS was passed, ensure s is always
                recovery ^= 1; // // in the bottom half of N
            }
            return new Signature(r, normS, recovery); // use normS, not s
        }
        return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    /**
     * Signs message hash with a private key.
     * ```
     * sign(m, d, k) where
     *   (x, y) = G × k
     *   r = x mod n
     *   s = (m + dr)/k mod n
     * ```
     * @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
     * @param privKey private key
     * @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
     * @returns signature with recovery param
     */
    function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts); // Steps A, D of RFC6979 3.2.
        const C = CURVE;
        const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig); // Steps B, C, D, E, F, G
    }
    // Enable precomputes. Slows down first publicKey computation by 20ms.
    Point.BASE._setWindowSize(8);
    // utils.precompute(8, ProjectivePoint.BASE)
    /**
     * Verifies a signature against message hash and public key.
     * Rejects lowS signatures by default: to override,
     * specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
     *
     * ```
     * verify(r, s, h, P) where
     *   U1 = hs^-1 mod n
     *   U2 = rs^-1 mod n
     *   R = U1⋅G - U2⋅P
     *   mod(R.x, n) == r
     * ```
     */
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        const sg = signature;
        msgHash = utils_ensureBytes('msgHash', msgHash);
        publicKey = utils_ensureBytes('publicKey', publicKey);
        const { lowS, prehash, format } = opts;
        // Verify opts, deduce signature format
        validateSigVerOpts(opts);
        if ('strict' in opts)
            throw new Error('options.strict was renamed to lowS');
        if (format !== undefined && format !== 'compact' && format !== 'der')
            throw new Error('format must be compact or der');
        const isHex = typeof sg === 'string' || isBytes(sg);
        const isObj = !isHex &&
            !format &&
            typeof sg === 'object' &&
            sg !== null &&
            typeof sg.r === 'bigint' &&
            typeof sg.s === 'bigint';
        if (!isHex && !isObj)
            throw new Error('invalid signature, expected Uint8Array, hex string or Signature instance');
        let _sig = undefined;
        let P;
        try {
            if (isObj)
                _sig = new Signature(sg.r, sg.s);
            if (isHex) {
                // Signature can be represented in 2 ways: compact (2*nByteLength) & DER (variable-length).
                // Since DER can also be 2*nByteLength bytes, we check for it first.
                try {
                    if (format !== 'compact')
                        _sig = Signature.fromDER(sg);
                }
                catch (derError) {
                    if (!(derError instanceof DER.Err))
                        throw derError;
                }
                if (!_sig && format !== 'der')
                    _sig = Signature.fromCompact(sg);
            }
            P = Point.fromHex(publicKey);
        }
        catch (error) {
            return false;
        }
        if (!_sig)
            return false;
        if (lowS && _sig.hasHighS())
            return false;
        if (prehash)
            msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash); // Cannot use fields methods, since it is group element
        const is = invN(s); // s^-1
        const u1 = modN(h * is); // u1 = hs^-1 mod n
        const u2 = modN(r * is); // u2 = rs^-1 mod n
        const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine(); // R = u1⋅G + u2⋅P
        if (!R)
            return false;
        const v = modN(R.x);
        return v === r;
    }
    return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils,
    };
}
/**
 * Implementation of the Shallue and van de Woestijne method for any weierstrass curve.
 * TODO: check if there is a way to merge this with uvRatio in Edwards; move to modular.
 * b = True and y = sqrt(u / v) if (u / v) is square in F, and
 * b = False and y = sqrt(Z * (u / v)) otherwise.
 * @param Fp
 * @param Z
 * @returns
 */
function SWUFpSqrtRatio(Fp, Z) {
    // Generic implementation
    const q = Fp.ORDER;
    let l = weierstrass_0n;
    for (let o = q - weierstrass_1n; o % weierstrass_2n === weierstrass_0n; o /= weierstrass_2n)
        l += weierstrass_1n;
    const c1 = l; // 1. c1, the largest integer such that 2^c1 divides q - 1.
    // We need 2n ** c1 and 2n ** (c1-1). We can't use **; but we can use <<.
    // 2n ** c1 == 2n << (c1-1)
    const _2n_pow_c1_1 = weierstrass_2n << (c1 - weierstrass_1n - weierstrass_1n);
    const _2n_pow_c1 = _2n_pow_c1_1 * weierstrass_2n;
    const c2 = (q - weierstrass_1n) / _2n_pow_c1; // 2. c2 = (q - 1) / (2^c1)  # Integer arithmetic
    const c3 = (c2 - weierstrass_1n) / weierstrass_2n; // 3. c3 = (c2 - 1) / 2            # Integer arithmetic
    const c4 = _2n_pow_c1 - weierstrass_1n; // 4. c4 = 2^c1 - 1                # Integer arithmetic
    const c5 = _2n_pow_c1_1; // 5. c5 = 2^(c1 - 1)                  # Integer arithmetic
    const c6 = Fp.pow(Z, c2); // 6. c6 = Z^c2
    const c7 = Fp.pow(Z, (c2 + weierstrass_1n) / weierstrass_2n); // 7. c7 = Z^((c2 + 1) / 2)
    let sqrtRatio = (u, v) => {
        let tv1 = c6; // 1. tv1 = c6
        let tv2 = Fp.pow(v, c4); // 2. tv2 = v^c4
        let tv3 = Fp.sqr(tv2); // 3. tv3 = tv2^2
        tv3 = Fp.mul(tv3, v); // 4. tv3 = tv3 * v
        let tv5 = Fp.mul(u, tv3); // 5. tv5 = u * tv3
        tv5 = Fp.pow(tv5, c3); // 6. tv5 = tv5^c3
        tv5 = Fp.mul(tv5, tv2); // 7. tv5 = tv5 * tv2
        tv2 = Fp.mul(tv5, v); // 8. tv2 = tv5 * v
        tv3 = Fp.mul(tv5, u); // 9. tv3 = tv5 * u
        let tv4 = Fp.mul(tv3, tv2); // 10. tv4 = tv3 * tv2
        tv5 = Fp.pow(tv4, c5); // 11. tv5 = tv4^c5
        let isQR = Fp.eql(tv5, Fp.ONE); // 12. isQR = tv5 == 1
        tv2 = Fp.mul(tv3, c7); // 13. tv2 = tv3 * c7
        tv5 = Fp.mul(tv4, tv1); // 14. tv5 = tv4 * tv1
        tv3 = Fp.cmov(tv2, tv3, isQR); // 15. tv3 = CMOV(tv2, tv3, isQR)
        tv4 = Fp.cmov(tv5, tv4, isQR); // 16. tv4 = CMOV(tv5, tv4, isQR)
        // 17. for i in (c1, c1 - 1, ..., 2):
        for (let i = c1; i > weierstrass_1n; i--) {
            let tv5 = i - weierstrass_2n; // 18.    tv5 = i - 2
            tv5 = weierstrass_2n << (tv5 - weierstrass_1n); // 19.    tv5 = 2^tv5
            let tvv5 = Fp.pow(tv4, tv5); // 20.    tv5 = tv4^tv5
            const e1 = Fp.eql(tvv5, Fp.ONE); // 21.    e1 = tv5 == 1
            tv2 = Fp.mul(tv3, tv1); // 22.    tv2 = tv3 * tv1
            tv1 = Fp.mul(tv1, tv1); // 23.    tv1 = tv1 * tv1
            tvv5 = Fp.mul(tv4, tv1); // 24.    tv5 = tv4 * tv1
            tv3 = Fp.cmov(tv2, tv3, e1); // 25.    tv3 = CMOV(tv2, tv3, e1)
            tv4 = Fp.cmov(tvv5, tv4, e1); // 26.    tv4 = CMOV(tv5, tv4, e1)
        }
        return { isValid: isQR, value: tv3 };
    };
    if (Fp.ORDER % weierstrass_4n === weierstrass_3n) {
        // sqrt_ratio_3mod4(u, v)
        const c1 = (Fp.ORDER - weierstrass_3n) / weierstrass_4n; // 1. c1 = (q - 3) / 4     # Integer arithmetic
        const c2 = Fp.sqrt(Fp.neg(Z)); // 2. c2 = sqrt(-Z)
        sqrtRatio = (u, v) => {
            let tv1 = Fp.sqr(v); // 1. tv1 = v^2
            const tv2 = Fp.mul(u, v); // 2. tv2 = u * v
            tv1 = Fp.mul(tv1, tv2); // 3. tv1 = tv1 * tv2
            let y1 = Fp.pow(tv1, c1); // 4. y1 = tv1^c1
            y1 = Fp.mul(y1, tv2); // 5. y1 = y1 * tv2
            const y2 = Fp.mul(y1, c2); // 6. y2 = y1 * c2
            const tv3 = Fp.mul(Fp.sqr(y1), v); // 7. tv3 = y1^2; 8. tv3 = tv3 * v
            const isQR = Fp.eql(tv3, u); // 9. isQR = tv3 == u
            let y = Fp.cmov(y2, y1, isQR); // 10. y = CMOV(y2, y1, isQR)
            return { isValid: isQR, value: y }; // 11. return (isQR, y) isQR ? y : y*c2
        };
    }
    // No curves uses that
    // if (Fp.ORDER % _8n === _5n) // sqrt_ratio_5mod8
    return sqrtRatio;
}
/**
 * Simplified Shallue-van de Woestijne-Ulas Method
 * https://www.rfc-editor.org/rfc/rfc9380#section-6.6.2
 */
function weierstrass_mapToCurveSimpleSWU(Fp, opts) {
    validateField(Fp);
    if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error('mapToCurveSimpleSWU: invalid opts');
    const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
    if (!Fp.isOdd)
        throw new Error('Fp.isOdd is not implemented!');
    // Input: u, an element of F.
    // Output: (x, y), a point on E.
    return (u) => {
        // prettier-ignore
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u); // 1.  tv1 = u^2
        tv1 = Fp.mul(tv1, opts.Z); // 2.  tv1 = Z * tv1
        tv2 = Fp.sqr(tv1); // 3.  tv2 = tv1^2
        tv2 = Fp.add(tv2, tv1); // 4.  tv2 = tv2 + tv1
        tv3 = Fp.add(tv2, Fp.ONE); // 5.  tv3 = tv2 + 1
        tv3 = Fp.mul(tv3, opts.B); // 6.  tv3 = B * tv3
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO)); // 7.  tv4 = CMOV(Z, -tv2, tv2 != 0)
        tv4 = Fp.mul(tv4, opts.A); // 8.  tv4 = A * tv4
        tv2 = Fp.sqr(tv3); // 9.  tv2 = tv3^2
        tv6 = Fp.sqr(tv4); // 10. tv6 = tv4^2
        tv5 = Fp.mul(tv6, opts.A); // 11. tv5 = A * tv6
        tv2 = Fp.add(tv2, tv5); // 12. tv2 = tv2 + tv5
        tv2 = Fp.mul(tv2, tv3); // 13. tv2 = tv2 * tv3
        tv6 = Fp.mul(tv6, tv4); // 14. tv6 = tv6 * tv4
        tv5 = Fp.mul(tv6, opts.B); // 15. tv5 = B * tv6
        tv2 = Fp.add(tv2, tv5); // 16. tv2 = tv2 + tv5
        x = Fp.mul(tv1, tv3); // 17.   x = tv1 * tv3
        const { isValid, value } = sqrtRatio(tv2, tv6); // 18. (is_gx1_square, y1) = sqrt_ratio(tv2, tv6)
        y = Fp.mul(tv1, u); // 19.   y = tv1 * u  -> Z * u^3 * y1
        y = Fp.mul(y, value); // 20.   y = y * y1
        x = Fp.cmov(x, tv3, isValid); // 21.   x = CMOV(x, tv3, is_gx1_square)
        y = Fp.cmov(y, value, isValid); // 22.   y = CMOV(y, y1, is_gx1_square)
        const e1 = Fp.isOdd(u) === Fp.isOdd(y); // 23.  e1 = sgn0(u) == sgn0(y)
        y = Fp.cmov(Fp.neg(y), y, e1); // 24.   y = CMOV(-y, y, e1)
        const tv4_inv = FpInvertBatch(Fp, [tv4], true)[0];
        x = Fp.mul(x, tv4_inv); // 25.   x = x / tv4
        return { x, y };
    };
}
//# sourceMappingURL=weierstrass.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/_shortw_utils.js
/**
 * Utilities for short weierstrass curves, combined with noble-hashes.
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */



/** connects noble-curves to noble-hashes */
function getHash(hash) {
    return {
        hash,
        hmac: (key, ...msgs) => (0,hmac/* hmac */.w)(hash, key, (0,utils/* concatBytes */.Id)(...msgs)),
        randomBytes: utils/* randomBytes */.po,
    };
}
function createCurve(curveDef, defHash) {
    const create = (hash) => weierstrass({ ...curveDef, ...getHash(hash) });
    return { ...create(defHash), create };
}
//# sourceMappingURL=_shortw_utils.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js
/**
 * NIST secp256k1. See [pdf](https://www.secg.org/sec2-v2.pdf).
 *
 * Seems to be rigid (not backdoored)
 * [as per discussion](https://bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975).
 *
 * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
 * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
 * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
 * [See explanation](https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066).
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */







const secp256k1P = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
const secp256k1N = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
const secp256k1_0n = BigInt(0);
const secp256k1_1n = BigInt(1);
const secp256k1_2n = BigInt(2);
const divNearest = (a, b) => (a + b / secp256k1_2n) / b;
/**
 * √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
 * (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
 */
function sqrtMod(y) {
    const P = secp256k1P;
    // prettier-ignore
    const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    // prettier-ignore
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = (y * y * y) % P; // x^3, 11
    const b3 = (b2 * b2 * y) % P; // x^7
    const b6 = (pow2(b3, _3n, P) * b3) % P;
    const b9 = (pow2(b6, _3n, P) * b3) % P;
    const b11 = (pow2(b9, secp256k1_2n, P) * b2) % P;
    const b22 = (pow2(b11, _11n, P) * b11) % P;
    const b44 = (pow2(b22, _22n, P) * b22) % P;
    const b88 = (pow2(b44, _44n, P) * b44) % P;
    const b176 = (pow2(b88, _88n, P) * b88) % P;
    const b220 = (pow2(b176, _44n, P) * b44) % P;
    const b223 = (pow2(b220, _3n, P) * b3) % P;
    const t1 = (pow2(b223, _23n, P) * b22) % P;
    const t2 = (pow2(t1, _6n, P) * b2) % P;
    const root = pow2(t2, secp256k1_2n, P);
    if (!Fpk1.eql(Fpk1.sqr(root), y))
        throw new Error('Cannot find square root');
    return root;
}
const Fpk1 = Field(secp256k1P, undefined, undefined, { sqrt: sqrtMod });
/**
 * secp256k1 curve, ECDSA and ECDH methods.
 *
 * Field: `2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n`
 *
 * @example
 * ```js
 * import { secp256k1 } from '@noble/curves/secp256k1';
 * const priv = secp256k1.utils.randomPrivateKey();
 * const pub = secp256k1.getPublicKey(priv);
 * const msg = new Uint8Array(32).fill(1); // message hash (not message) in ecdsa
 * const sig = secp256k1.sign(msg, priv); // `{prehash: true}` option is available
 * const isValid = secp256k1.verify(sig, msg, pub) === true;
 * ```
 */
const secp256k1 = createCurve({
    a: secp256k1_0n,
    b: BigInt(7),
    Fp: Fpk1,
    n: secp256k1N,
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    h: BigInt(1),
    lowS: true, // Allow only low-S signatures by default in sign() and verify()
    endo: {
        // Endomorphism, see above
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (k) => {
            const n = secp256k1N;
            const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
            const b1 = -secp256k1_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
            const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
            const b2 = a1;
            const POW_2_128 = BigInt('0x100000000000000000000000000000000'); // (2n**128n).toString(16)
            const c1 = divNearest(b2 * k, n);
            const c2 = divNearest(-b1 * k, n);
            let k1 = modular_mod(k - c1 * a1 - c2 * a2, n);
            let k2 = modular_mod(-c1 * b1 - c2 * b2, n);
            const k1neg = k1 > POW_2_128;
            const k2neg = k2 > POW_2_128;
            if (k1neg)
                k1 = n - k1;
            if (k2neg)
                k2 = n - k2;
            if (k1 > POW_2_128 || k2 > POW_2_128) {
                throw new Error('splitScalar: Endomorphism failed, k=' + k);
            }
            return { k1neg, k1, k2neg, k2 };
        },
    },
}, sha2/* sha256 */.sc);
// Schnorr signatures are superior to ECDSA from above. Below is Schnorr-specific BIP0340 code.
// https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */
const TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === undefined) {
        const tagH = sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
        tagP = concatBytes(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return sha256(concatBytes(tagP, ...messages));
}
// ECDSA compact points are 33-byte. Schnorr is 32: we strip first byte 0x02 or 0x03
const pointToBytes = (point) => point.toRawBytes(true).slice(1);
const numTo32b = (n) => numberToBytesBE(n, 32);
const modP = (x) => mod(x, secp256k1P);
const modN = (x) => mod(x, secp256k1N);
const Point = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => secp256k1.ProjectivePoint)()));
const GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
// Calculate point, scalar and bytes
function schnorrGetExtPubKey(priv) {
    let d_ = secp256k1.utils.normPrivateKeyToScalar(priv); // same method executed in fromPrivateKey
    let p = Point.fromPrivateKey(d_); // P = d'⋅G; 0 < d' < n check is done inside
    const scalar = p.hasEvenY() ? d_ : modN(-d_);
    return { scalar: scalar, bytes: pointToBytes(p) };
}
/**
 * lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
 * @returns valid point checked for being on-curve
 */
function lift_x(x) {
    aInRange('x', x, secp256k1_1n, secp256k1P); // Fail if x ≥ p.
    const xx = modP(x * x);
    const c = modP(xx * x + BigInt(7)); // Let c = x³ + 7 mod p.
    let y = sqrtMod(c); // Let y = c^(p+1)/4 mod p.
    if (y % secp256k1_2n !== secp256k1_0n)
        y = modP(-y); // Return the unique point P such that x(P) = x and
    const p = new Point(x, y, secp256k1_1n); // y(P) = y if y mod 2 = 0 or y(P) = p-y otherwise.
    p.assertValidity();
    return p;
}
const num = (/* unused pure expression or super */ null && (bytesToNumberBE));
/**
 * Create tagged hash, convert it to bigint, reduce modulo-n.
 */
function challenge(...args) {
    return modN(num(taggedHash('BIP0340/challenge', ...args)));
}
/**
 * Schnorr public key is just `x` coordinate of Point as per BIP340.
 */
function schnorrGetPublicKey(privateKey) {
    return schnorrGetExtPubKey(privateKey).bytes; // d'=int(sk). Fail if d'=0 or d'≥n. Ret bytes(d'⋅G)
}
/**
 * Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
 * auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
 */
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
    const m = ensureBytes('message', message);
    const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey); // checks for isWithinCurveOrder
    const a = ensureBytes('auxRand', auxRand, 32); // Auxiliary random data a: a 32-byte array
    const t = numTo32b(d ^ num(taggedHash('BIP0340/aux', a))); // Let t be the byte-wise xor of bytes(d) and hash/aux(a)
    const rand = taggedHash('BIP0340/nonce', t, px, m); // Let rand = hash/nonce(t || bytes(P) || m)
    const k_ = modN(num(rand)); // Let k' = int(rand) mod n
    if (k_ === secp256k1_0n)
        throw new Error('sign failed: k is zero'); // Fail if k' = 0.
    const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_); // Let R = k'⋅G.
    const e = challenge(rx, px, m); // Let e = int(hash/challenge(bytes(R) || bytes(P) || m)) mod n.
    const sig = new Uint8Array(64); // Let sig = bytes(R) || bytes((k + ed) mod n).
    sig.set(rx, 0);
    sig.set(numTo32b(modN(k + e * d)), 32);
    // If Verify(bytes(P), m, sig) (see below) returns failure, abort
    if (!schnorrVerify(sig, m, px))
        throw new Error('sign: Invalid signature produced');
    return sig;
}
/**
 * Verifies Schnorr signature.
 * Will swallow errors & return false except for initial type validation of arguments.
 */
function schnorrVerify(signature, message, publicKey) {
    const sig = ensureBytes('signature', signature, 64);
    const m = ensureBytes('message', message);
    const pub = ensureBytes('publicKey', publicKey, 32);
    try {
        const P = lift_x(num(pub)); // P = lift_x(int(pk)); fail if that fails
        const r = num(sig.subarray(0, 32)); // Let r = int(sig[0:32]); fail if r ≥ p.
        if (!inRange(r, secp256k1_1n, secp256k1P))
            return false;
        const s = num(sig.subarray(32, 64)); // Let s = int(sig[32:64]); fail if s ≥ n.
        if (!inRange(s, secp256k1_1n, secp256k1N))
            return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m); // int(challenge(bytes(r)||bytes(P)||m))%n
        const R = GmulAdd(P, s, modN(-e)); // R = s⋅G - e⋅P
        if (!R || !R.hasEvenY() || R.toAffine().x !== r)
            return false; // -eP == (n-e)P
        return true; // Fail if is_infinite(R) / not has_even_y(R) / x(R) ≠ r.
    }
    catch (error) {
        return false;
    }
}
/**
 * Schnorr signatures over secp256k1.
 * https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
 * @example
 * ```js
 * import { schnorr } from '@noble/curves/secp256k1';
 * const priv = schnorr.utils.randomPrivateKey();
 * const pub = schnorr.getPublicKey(priv);
 * const msg = new TextEncoder().encode('hello');
 * const sig = schnorr.sign(msg, priv);
 * const isValid = schnorr.verify(sig, msg, pub);
 * ```
 */
const schnorr = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => ({
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    utils: {
        randomPrivateKey: secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE,
        bytesToNumberBE,
        taggedHash,
        mod,
    },
}))()));
const isoMap = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => isogenyMap(Fpk1, [
    // xNum
    [
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
        '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
        '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c',
    ],
    // xDen
    [
        '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
        '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
    // yNum
    [
        '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
        '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
        '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
        '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84',
    ],
    // yDen
    [
        '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
        '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
        '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
].map((i) => i.map((j) => BigInt(j)))))()));
const mapSWU = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => mapToCurveSimpleSWU(Fpk1, {
    A: BigInt('0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'),
    B: BigInt('1771'),
    Z: Fpk1.create(BigInt('-11')),
}))()));
/** Hashing / encoding to secp256k1 points / field. RFC 9380 methods. */
const secp256k1_hasher = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => createHasher(secp256k1.ProjectivePoint, (scalars) => {
    const { x, y } = mapSWU(Fpk1.create(scalars[0]));
    return isoMap(x, y);
}, {
    DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
    encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
    p: Fpk1.ORDER,
    m: 1,
    k: 128,
    expand: 'xmd',
    hash: sha256,
}))()));
const hashToCurve = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => secp256k1_hasher.hashToCurve)()));
const encodeToCurve = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => secp256k1_hasher.encodeToCurve)()));
//# sourceMappingURL=secp256k1.js.map

/***/ },

/***/ 413033
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ parseAccount)
/* harmony export */ });
function parseAccount(account) {
    if (typeof account === 'string')
        return { address: account, type: 'json-rpc' };
    return account;
}
//# sourceMappingURL=parseAccount.js.map

/***/ },

/***/ 446652
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ decodeFunctionResult)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137372);
/* harmony import */ var _decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(541821);
/* harmony import */ var _getAbiItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(284586);



const docsPath = '/docs/contract/decodeFunctionResult';
function decodeFunctionResult(parameters) {
    const { abi, args, functionName, data } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0,_getAbiItem_js__WEBPACK_IMPORTED_MODULE_2__/* .getAbiItem */ .iY)({ abi, args, name: functionName });
        if (!item)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiFunctionNotFoundError */ .Iz(functionName, { docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'function')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiFunctionNotFoundError */ .Iz(undefined, { docsPath });
    if (!abiItem.outputs)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiFunctionOutputsNotFoundError */ .MR(abiItem.name, { docsPath });
    const values = (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeAbiParameters */ .n)(abiItem.outputs, data);
    if (values && values.length > 1)
        return values;
    if (values && values.length === 1)
        return values[0];
    return undefined;
}
//# sourceMappingURL=decodeFunctionResult.js.map

/***/ },

/***/ 449124
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ formatAbiItem)
/* harmony export */ });
/* harmony import */ var _formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239909);

/**
 * Formats ABI item (e.g. error, event, function) into human-readable ABI item
 *
 * @param abiItem - ABI item
 * @returns Human-readable ABI item
 */
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function')
        return `function ${abiItem.name}(${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable'
            ? ` ${abiItem.stateMutability}`
            : ''}${abiItem.outputs?.length
            ? ` returns (${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.outputs)})`
            : ''}`;
    if (abiItem.type === 'event')
        return `event ${abiItem.name}(${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.inputs)})`;
    if (abiItem.type === 'error')
        return `error ${abiItem.name}(${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.inputs)})`;
    if (abiItem.type === 'constructor')
        return `constructor(${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    if (abiItem.type === 'fallback')
        return `fallback() external${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    return 'receive() external payable';
}
//# sourceMappingURL=formatAbiItem.js.map

/***/ },

/***/ 453513
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zX: () => (/* binding */ CallExecutionError),
  bG: () => (/* binding */ ContractFunctionExecutionError),
  M: () => (/* binding */ ContractFunctionRevertedError),
  rR: () => (/* binding */ ContractFunctionZeroDataError),
  Po: () => (/* binding */ CounterfactualDeploymentFailedError),
  $S: () => (/* binding */ RawContractError)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/accounts/utils/parseAccount.js
var parseAccount = __webpack_require__(413033);
// EXTERNAL MODULE: ./node_modules/viem/_esm/constants/solidity.js
var solidity = __webpack_require__(24453);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeErrorResult.js
var decodeErrorResult = __webpack_require__(815462);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/formatAbiItem.js
var formatAbiItem = __webpack_require__(895167);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stringify.js
var stringify = __webpack_require__(218463);
;// ./node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js

function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false, }) {
    if (!('name' in abiItem))
        return;
    if (!('inputs' in abiItem))
        return;
    if (!abiItem.inputs)
        return;
    return `${includeFunctionName ? abiItem.name : ''}(${abiItem.inputs
        .map((input, i) => `${includeName && input.name ? `${input.name}: ` : ''}${typeof args[i] === 'object' ? (0,stringify/* stringify */.A)(args[i]) : args[i]}`)
        .join(', ')})`;
}
//# sourceMappingURL=formatAbiItemWithArgs.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/getAbiItem.js
var getAbiItem = __webpack_require__(284586);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/unit/formatEther.js
var formatEther = __webpack_require__(149436);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/unit/formatGwei.js
var formatGwei = __webpack_require__(579670);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/abi.js
var errors_abi = __webpack_require__(137372);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(345765);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/stateOverride.js
var errors_stateOverride = __webpack_require__(136883);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/transaction.js
var transaction = __webpack_require__(148990);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/utils.js
var utils = __webpack_require__(321163);
;// ./node_modules/viem/_esm/errors/contract.js













class CallExecutionError extends base/* BaseError */.C {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, }) {
        const account = account_ ? (0,parseAccount/* parseAccount */.J)(account_) : undefined;
        let prettyArgs = (0,transaction/* prettyPrint */.aO)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${(0,formatEther/* formatEther */.c)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,formatGwei/* formatGwei */.Q)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,formatGwei/* formatGwei */.Q)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,formatGwei/* formatGwei */.Q)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        if (stateOverride) {
            prettyArgs += `\n${(0,errors_stateOverride/* prettyStateOverride */.uj)(stateOverride)}`;
        }
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Raw Call Arguments:',
                prettyArgs,
            ].filter(Boolean),
            name: 'CallExecutionError',
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class ContractFunctionExecutionError extends base/* BaseError */.C {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender, }) {
        const abiItem = (0,getAbiItem/* getAbiItem */.iY)({ abi, args, name: functionName });
        const formattedArgs = abiItem
            ? formatAbiItemWithArgs({
                abiItem,
                args,
                includeFunctionName: false,
                includeName: false,
            })
            : undefined;
        const functionWithParams = abiItem
            ? (0,formatAbiItem/* formatAbiItem */.B)(abiItem, { includeName: true })
            : undefined;
        const prettyArgs = (0,transaction/* prettyPrint */.aO)({
            address: contractAddress && (0,utils/* getContractAddress */.R)(contractAddress),
            function: functionWithParams,
            args: formattedArgs &&
                formattedArgs !== '()' &&
                `${[...Array(functionName?.length ?? 0).keys()]
                    .map(() => ' ')
                    .join('')}${formattedArgs}`,
            sender,
        });
        super(cause.shortMessage ||
            `An unknown error occurred while executing the contract function "${functionName}".`, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                prettyArgs && 'Contract Call:',
                prettyArgs,
            ].filter(Boolean),
            name: 'ContractFunctionExecutionError',
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
class ContractFunctionRevertedError extends base/* BaseError */.C {
    constructor({ abi, data, functionName, message, }) {
        let cause;
        let decodedData;
        let metaMessages;
        let reason;
        if (data && data !== '0x') {
            try {
                decodedData = (0,decodeErrorResult/* decodeErrorResult */.W)({ abi, data });
                const { abiItem, errorName, args: errorArgs } = decodedData;
                if (errorName === 'Error') {
                    reason = errorArgs[0];
                }
                else if (errorName === 'Panic') {
                    const [firstArg] = errorArgs;
                    reason = solidity/* panicReasons */.fD[firstArg];
                }
                else {
                    const errorWithParams = abiItem
                        ? (0,formatAbiItem/* formatAbiItem */.B)(abiItem, { includeName: true })
                        : undefined;
                    const formattedArgs = abiItem && errorArgs
                        ? formatAbiItemWithArgs({
                            abiItem,
                            args: errorArgs,
                            includeFunctionName: false,
                            includeName: false,
                        })
                        : undefined;
                    metaMessages = [
                        errorWithParams ? `Error: ${errorWithParams}` : '',
                        formattedArgs && formattedArgs !== '()'
                            ? `       ${[...Array(errorName?.length ?? 0).keys()]
                                .map(() => ' ')
                                .join('')}${formattedArgs}`
                            : '',
                    ];
                }
            }
            catch (err) {
                cause = err;
            }
        }
        else if (message)
            reason = message;
        let signature;
        if (cause instanceof errors_abi/* AbiErrorSignatureNotFoundError */.Wq) {
            signature = cause.signature;
            metaMessages = [
                `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
                'Make sure you are using the correct ABI and that the error exists on it.',
                `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`,
            ];
        }
        super((reason && reason !== 'execution reverted') || signature
            ? [
                `The contract function "${functionName}" reverted with the following ${signature ? 'signature' : 'reason'}:`,
                reason || signature,
            ].join('\n')
            : `The contract function "${functionName}" reverted.`, {
            cause,
            metaMessages,
            name: 'ContractFunctionRevertedError',
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "raw", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.raw = data;
        this.reason = reason;
        this.signature = signature;
    }
}
class ContractFunctionZeroDataError extends base/* BaseError */.C {
    constructor({ functionName }) {
        super(`The contract function "${functionName}" returned no data ("0x").`, {
            metaMessages: [
                'This could be due to any of the following:',
                `  - The contract does not have the function "${functionName}",`,
                '  - The parameters passed to the contract function may be invalid, or',
                '  - The address is not a contract.',
            ],
            name: 'ContractFunctionZeroDataError',
        });
    }
}
class CounterfactualDeploymentFailedError extends base/* BaseError */.C {
    constructor({ factory }) {
        super(`Deployment for counterfactual contract call failed${factory ? ` for factory "${factory}".` : ''}`, {
            metaMessages: [
                'Please ensure:',
                '- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).',
                '- The `factoryData` is a valid encoded function call for contract deployment function on the factory.',
            ],
            name: 'CounterfactualDeploymentFailedError',
        });
    }
}
class RawContractError extends base/* BaseError */.C {
    constructor({ data, message, }) {
        super(message || '', { name: 'RawContractError' });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
//# sourceMappingURL=contract.js.map

/***/ },

/***/ 477281
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ call)
});

// UNUSED EXPORTS: getRevertErrorData

// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/runtime/signatures.js
var runtime_signatures = __webpack_require__(569508);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/runtime/structs.js + 1 modules
var runtime_structs = __webpack_require__(197256);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/runtime/utils.js + 2 modules
var utils = __webpack_require__(136993);
;// ./node_modules/abitype/dist/esm/human-readable/parseAbi.js



/**
 * Parses human-readable ABI into JSON {@link Abi}
 *
 * @param signatures - Human-Readable ABI
 * @returns Parsed {@link Abi}
 *
 * @example
 * const abi = parseAbi([
 *   //  ^? const abi: readonly [{ name: "balanceOf"; type: "function"; stateMutability:...
 *   'function balanceOf(address owner) view returns (uint256)',
 *   'event Transfer(address indexed from, address indexed to, uint256 amount)',
 * ])
 */
function parseAbi(signatures) {
    const structs = (0,runtime_structs/* parseStructs */.e)(signatures);
    const abi = [];
    const length = signatures.length;
    for (let i = 0; i < length; i++) {
        const signature = signatures[i];
        if ((0,runtime_signatures/* isStructSignature */.WL)(signature))
            continue;
        abi.push((0,utils/* parseSignature */.uT)(signature, structs));
    }
    return abi;
}
//# sourceMappingURL=parseAbi.js.map
// EXTERNAL MODULE: ./node_modules/viem/node_modules/ox/_esm/core/BlockOverrides.js + 1 modules
var BlockOverrides = __webpack_require__(566099);
// EXTERNAL MODULE: ./node_modules/viem/_esm/accounts/utils/parseAccount.js
var parseAccount = __webpack_require__(413033);
// EXTERNAL MODULE: ./node_modules/viem/_esm/constants/abis.js
var abis = __webpack_require__(194823);
;// ./node_modules/viem/_esm/constants/contract.js
const aggregate3Signature = '0x82ad56cb';
//# sourceMappingURL=contract.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/constants/contracts.js
var contracts = __webpack_require__(945945);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(345765);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/chain.js
var chain = __webpack_require__(398703);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/contract.js + 1 modules
var contract = __webpack_require__(453513);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeFunctionResult.js
var decodeFunctionResult = __webpack_require__(446652);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeDeployData.js
var encodeDeployData = __webpack_require__(925842);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeFunctionData.js + 1 modules
var encodeFunctionData = __webpack_require__(277330);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/chain/getChainContractAddress.js
var getChainContractAddress = __webpack_require__(969985);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(584192);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/errors/getCallError.js
var getCallError = __webpack_require__(638684);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/formatters/extract.js
var extract = __webpack_require__(699789);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/formatters/transactionRequest.js
var transactionRequest = __webpack_require__(857671);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/promise/createBatchScheduler.js
var createBatchScheduler = __webpack_require__(552167);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stateOverride.js
var utils_stateOverride = __webpack_require__(865547);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/transaction/assertRequest.js + 1 modules
var assertRequest = __webpack_require__(664055);
;// ./node_modules/viem/_esm/actions/public/call.js




















/**
 * Executes a new message call immediately without submitting a transaction to the network.
 *
 * - Docs: https://viem.sh/docs/actions/public/call
 * - JSON-RPC Methods: [`eth_call`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)
 *
 * @param client - Client to use
 * @param parameters - {@link CallParameters}
 * @returns The call data. {@link CallReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { call } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const data = await call(client, {
 *   account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 *   data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 * })
 */
async function call(client, args) {
    const { account: account_ = client.account, authorizationList, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = client.experimental_blockTag ?? 'latest', accessList, blobs, blockOverrides, code, data: data_, factory, factoryData, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, ...rest } = args;
    const account = account_ ? (0,parseAccount/* parseAccount */.J)(account_) : undefined;
    if (code && (factory || factoryData))
        throw new base/* BaseError */.C('Cannot provide both `code` & `factory`/`factoryData` as parameters.');
    if (code && to)
        throw new base/* BaseError */.C('Cannot provide both `code` & `to` as parameters.');
    // Check if the call is deployless via bytecode.
    const deploylessCallViaBytecode = code && data_;
    // Check if the call is deployless via a factory.
    const deploylessCallViaFactory = factory && factoryData && to && data_;
    const deploylessCall = deploylessCallViaBytecode || deploylessCallViaFactory;
    const data = (() => {
        if (deploylessCallViaBytecode)
            return toDeploylessCallViaBytecodeData({
                code,
                data: data_,
            });
        if (deploylessCallViaFactory)
            return toDeploylessCallViaFactoryData({
                data: data_,
                factory,
                factoryData,
                to,
            });
        return data_;
    })();
    try {
        (0,assertRequest/* assertRequest */.c)(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcBlockOverrides = blockOverrides
            ? BlockOverrides/* toRpc */.J(blockOverrides)
            : undefined;
        const rpcStateOverride = (0,utils_stateOverride/* serializeStateOverride */.yH)(stateOverride);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest/* formatTransactionRequest */.Bv;
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0,extract/* extract */.o)(rest, { format: chainFormat }),
            accessList,
            account,
            authorizationList,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to: deploylessCall ? undefined : to,
            value,
        }, 'call');
        if (batch &&
            shouldPerformMulticall({ request }) &&
            !rpcStateOverride &&
            !rpcBlockOverrides) {
            try {
                return await scheduleMulticall(client, {
                    ...request,
                    blockNumber,
                    blockTag,
                });
            }
            catch (err) {
                if (!(err instanceof chain/* ClientChainNotConfiguredError */.YE) &&
                    !(err instanceof chain/* ChainDoesNotSupportContract */.rj))
                    throw err;
            }
        }
        const params = (() => {
            const base = [
                request,
                block,
            ];
            if (rpcStateOverride && rpcBlockOverrides)
                return [...base, rpcStateOverride, rpcBlockOverrides];
            if (rpcStateOverride)
                return [...base, rpcStateOverride];
            if (rpcBlockOverrides)
                return [...base, {}, rpcBlockOverrides];
            return base;
        })();
        const response = await client.request({
            method: 'eth_call',
            params,
        });
        if (response === '0x')
            return { data: undefined };
        return { data: response };
    }
    catch (err) {
        const data = getRevertErrorData(err);
        // Check for CCIP-Read offchain lookup signature.
        const { offchainLookup, offchainLookupSignature } = await __webpack_require__.e(/* import() */ 1190).then(__webpack_require__.bind(__webpack_require__, 551190));
        if (client.ccipRead !== false &&
            data?.slice(0, 10) === offchainLookupSignature &&
            to)
            return { data: await offchainLookup(client, { data, to }) };
        // Check for counterfactual deployment error.
        if (deploylessCall && data?.slice(0, 10) === '0x101bb98d')
            throw new contract/* CounterfactualDeploymentFailedError */.Po({ factory });
        throw (0,getCallError/* getCallError */.d)(err, {
            ...args,
            account,
            chain: client.chain,
        });
    }
}
// We only want to perform a scheduled multicall if:
// - The request has calldata,
// - The request has a target address,
// - The target address is not already the aggregate3 signature,
// - The request has no other properties (`nonce`, `gas`, etc cannot be sent with a multicall).
function shouldPerformMulticall({ request }) {
    const { data, to, ...request_ } = request;
    if (!data)
        return false;
    if (data.startsWith(aggregate3Signature))
        return false;
    if (!to)
        return false;
    if (Object.values(request_).filter((x) => typeof x !== 'undefined').length > 0)
        return false;
    return true;
}
async function scheduleMulticall(client, args) {
    const { batchSize = 1024, deployless = false, wait = 0, } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const { blockNumber, blockTag = client.experimental_blockTag ?? 'latest', data, to, } = args;
    const multicallAddress = (() => {
        if (deployless)
            return null;
        if (args.multicallAddress)
            return args.multicallAddress;
        if (client.chain) {
            return (0,getChainContractAddress/* getChainContractAddress */.M)({
                blockNumber,
                chain: client.chain,
                contract: 'multicall3',
            });
        }
        throw new chain/* ClientChainNotConfiguredError */.YE();
    })();
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = (0,createBatchScheduler/* createBatchScheduler */.u)({
        id: `${client.uid}.${block}`,
        wait,
        shouldSplitBatch(args) {
            const size = args.reduce((size, { data }) => size + (data.length - 2), 0);
            return size > batchSize * 2;
        },
        fn: async (requests) => {
            const calls = requests.map((request) => ({
                allowFailure: true,
                callData: request.data,
                target: request.to,
            }));
            const calldata = (0,encodeFunctionData/* encodeFunctionData */.p)({
                abi: abis/* multicall3Abi */.v2,
                args: [calls],
                functionName: 'aggregate3',
            });
            const data = await client.request({
                method: 'eth_call',
                params: [
                    {
                        ...(multicallAddress === null
                            ? {
                                data: toDeploylessCallViaBytecodeData({
                                    code: contracts/* multicall3Bytecode */.Ez,
                                    data: calldata,
                                }),
                            }
                            : { to: multicallAddress, data: calldata }),
                    },
                    block,
                ],
            });
            return (0,decodeFunctionResult/* decodeFunctionResult */.e)({
                abi: abis/* multicall3Abi */.v2,
                args: [calls],
                functionName: 'aggregate3',
                data: data || '0x',
            });
        },
    });
    const [{ returnData, success }] = await schedule({ data, to });
    if (!success)
        throw new contract/* RawContractError */.$S({ data: returnData });
    if (returnData === '0x')
        return { data: undefined };
    return { data: returnData };
}
function toDeploylessCallViaBytecodeData(parameters) {
    const { code, data } = parameters;
    return (0,encodeDeployData/* encodeDeployData */.m)({
        abi: parseAbi(['constructor(bytes, bytes)']),
        bytecode: contracts/* deploylessCallViaBytecodeBytecode */.LX,
        args: [code, data],
    });
}
function toDeploylessCallViaFactoryData(parameters) {
    const { data, factory, factoryData, to } = parameters;
    return (0,encodeDeployData/* encodeDeployData */.m)({
        abi: parseAbi(['constructor(address, bytes, address, bytes)']),
        bytecode: contracts/* deploylessCallViaFactoryBytecode */.WN,
        args: [to, data, factory, factoryData],
    });
}
/** @internal */
function getRevertErrorData(err) {
    if (!(err instanceof base/* BaseError */.C))
        return undefined;
    const error = err.walk();
    return typeof error?.data === 'object' ? error.data?.data : error.data;
}
//# sourceMappingURL=call.js.map

/***/ },

/***/ 481295
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ stringify)
/* harmony export */ });
/* unused harmony export parse */
const bigIntSuffix = '#__bigint';
/**
 * Parses a JSON string, with support for `bigint`.
 *
 * @example
 * ```ts twoslash
 * import { Json } from 'ox'
 *
 * const json = Json.parse('{"foo":"bar","baz":"69420694206942069420694206942069420694206942069420#__bigint"}')
 * // @log: {
 * // @log:   foo: 'bar',
 * // @log:   baz: 69420694206942069420694206942069420694206942069420n
 * // @log: }
 * ```
 *
 * @param string - The value to parse.
 * @param reviver - A function that transforms the results.
 * @returns The parsed value.
 */
function parse(string, reviver) {
    return JSON.parse(string, (key, value_) => {
        const value = value_;
        if (typeof value === 'string' && value.endsWith(bigIntSuffix))
            return BigInt(value.slice(0, -bigIntSuffix.length));
        return typeof reviver === 'function' ? reviver(key, value) : value;
    });
}
/**
 * Stringifies a value to its JSON representation, with support for `bigint`.
 *
 * @example
 * ```ts twoslash
 * import { Json } from 'ox'
 *
 * const json = Json.stringify({
 *   foo: 'bar',
 *   baz: 69420694206942069420694206942069420694206942069420n,
 * })
 * // @log: '{"foo":"bar","baz":"69420694206942069420694206942069420694206942069420#__bigint"}'
 * ```
 *
 * @param value - The value to stringify.
 * @param replacer - A function that transforms the results. It is passed the key and value of the property, and must return the value to be used in the JSON string. If this function returns `undefined`, the property is not included in the resulting JSON string.
 * @param space - A string or number that determines the indentation of the JSON string. If it is a number, it indicates the number of spaces to use as indentation; if it is a string (e.g. `'\t'`), it uses the string as the indentation character.
 * @returns The JSON string.
 */
function stringify(value, replacer, space) {
    return JSON.stringify(value, (key, value) => {
        if (typeof replacer === 'function')
            return replacer(key, value);
        if (typeof value === 'bigint')
            return value.toString() + bigIntSuffix;
        return value;
    }, space);
}
//# sourceMappingURL=Json.js.map

/***/ },

/***/ 498298
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sl: () => (/* binding */ assertSize),
/* harmony export */   X: () => (/* binding */ assertEndOffset),
/* harmony export */   eV: () => (/* binding */ pad),
/* harmony export */   kK: () => (/* binding */ assertStartOffset)
/* harmony export */ });
/* unused harmony export trim */
/* harmony import */ var _Hex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399516);

/** @internal */
function assertSize(hex, size_) {
    if (_Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(hex) > size_)
        throw new _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .SizeOverflowError */ .u({
            givenSize: _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(hex),
            maxSize: size_,
        });
}
/** @internal */
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(value) - 1)
        throw new _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .SliceOffsetOutOfBoundsError */ .ii({
            offset: start,
            position: 'start',
            size: _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(value),
        });
}
/** @internal */
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(value) !== end - start) {
        throw new _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .SliceOffsetOutOfBoundsError */ .ii({
            offset: end,
            position: 'end',
            size: _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(value),
        });
    }
}
/** @internal */
function pad(hex_, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0)
        return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2)
        throw new _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .SizeExceedsPaddingSizeError */ .Fl({
            size: Math.ceil(hex.length / 2),
            targetSize: size,
            type: 'Hex',
        });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
/** @internal */
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value.replace('0x', '');
    let sliceLength = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0')
            sliceLength++;
        else
            break;
    }
    data =
        dir === 'left'
            ? data.slice(sliceLength)
            : data.slice(0, data.length - sliceLength);
    if (data === '0')
        return '0x';
    if (dir === 'right' && data.length % 2 === 1)
        return `0x${data}0`;
    return `0x${data}`;
}
//# sourceMappingURL=hex.js.map

/***/ },

/***/ 529873
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ isAddress)
/* harmony export */ });
/* unused harmony export isAddressCache */
/* harmony import */ var _lru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(676447);
/* harmony import */ var _getAddress_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(964569);


const addressRegex = /^0x[a-fA-F0-9]{40}$/;
/** @internal */
const isAddressCache = /*#__PURE__*/ new _lru_js__WEBPACK_IMPORTED_MODULE_0__/* .LruMap */ .A(8192);
function isAddress(address, options) {
    const { strict = true } = options ?? {};
    const cacheKey = `${address}.${strict}`;
    if (isAddressCache.has(cacheKey))
        return isAddressCache.get(cacheKey);
    const result = (() => {
        if (!addressRegex.test(address))
            return false;
        if (address.toLowerCase() === address)
            return true;
        if (strict)
            return (0,_getAddress_js__WEBPACK_IMPORTED_MODULE_1__/* .checksumAddress */ .o)(address) === address;
        return true;
    })();
    isAddressCache.set(cacheKey, result);
    return result;
}
//# sourceMappingURL=isAddress.js.map

/***/ },

/***/ 541821
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ decodeAbiParameters)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/abi.js
var abi = __webpack_require__(137372);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/getAddress.js
var getAddress = __webpack_require__(964569);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/cursor.js
var utils_cursor = __webpack_require__(835834);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/size.js
var size = __webpack_require__(885182);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/slice.js
var slice = __webpack_require__(993577);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/trim.js
var trim = __webpack_require__(38583);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/encoding.js
var encoding = __webpack_require__(94317);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/fromHex.js
var fromHex = __webpack_require__(6675);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(584192);
;// ./node_modules/viem/_esm/utils/encoding/fromBytes.js




/**
 * Decodes a byte array into a UTF-8 string, hex value, number, bigint or boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes
 * - Example: https://viem.sh/docs/utilities/fromBytes#usage
 *
 * @param bytes Byte array to decode.
 * @param toOrOpts Type to convert to or options.
 * @returns Decoded value.
 *
 * @example
 * import { fromBytes } from 'viem'
 * const data = fromBytes(new Uint8Array([1, 164]), 'number')
 * // 420
 *
 * @example
 * import { fromBytes } from 'viem'
 * const data = fromBytes(
 *   new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]),
 *   'string'
 * )
 * // 'Hello world'
 */
function fromBytes(bytes, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? { to: toOrOpts } : toOrOpts;
    const to = opts.to;
    if (to === 'number')
        return bytesToNumber(bytes, opts);
    if (to === 'bigint')
        return bytesToBigInt(bytes, opts);
    if (to === 'boolean')
        return bytesToBool(bytes, opts);
    if (to === 'string')
        return bytesToString(bytes, opts);
    return bytesToHex(bytes, opts);
}
/**
 * Decodes a byte array into a bigint.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestobigint
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns BigInt value.
 *
 * @example
 * import { bytesToBigInt } from 'viem'
 * const data = bytesToBigInt(new Uint8Array([1, 164]))
 * // 420n
 */
function bytesToBigInt(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined')
        (0,fromHex/* assertSize */.Sl)(bytes, { size: opts.size });
    const hex = (0,toHex/* bytesToHex */.My)(bytes, opts);
    return (0,fromHex/* hexToBigInt */.uU)(hex, opts);
}
/**
 * Decodes a byte array into a boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestobool
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns Boolean value.
 *
 * @example
 * import { bytesToBool } from 'viem'
 * const data = bytesToBool(new Uint8Array([1]))
 * // true
 */
function bytesToBool(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0,fromHex/* assertSize */.Sl)(bytes, { size: opts.size });
        bytes = (0,trim/* trim */.B)(bytes);
    }
    if (bytes.length > 1 || bytes[0] > 1)
        throw new encoding/* InvalidBytesBooleanError */.xO(bytes);
    return Boolean(bytes[0]);
}
/**
 * Decodes a byte array into a number.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestonumber
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns Number value.
 *
 * @example
 * import { bytesToNumber } from 'viem'
 * const data = bytesToNumber(new Uint8Array([1, 164]))
 * // 420
 */
function bytesToNumber(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined')
        (0,fromHex/* assertSize */.Sl)(bytes, { size: opts.size });
    const hex = (0,toHex/* bytesToHex */.My)(bytes, opts);
    return (0,fromHex/* hexToNumber */.ME)(hex, opts);
}
/**
 * Decodes a byte array into a UTF-8 string.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestostring
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns String value.
 *
 * @example
 * import { bytesToString } from 'viem'
 * const data = bytesToString(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // 'Hello world'
 */
function bytesToString(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0,fromHex/* assertSize */.Sl)(bytes, { size: opts.size });
        bytes = (0,trim/* trim */.B)(bytes, { dir: 'right' });
    }
    return new TextDecoder().decode(bytes);
}
//# sourceMappingURL=fromBytes.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toBytes.js
var toBytes = __webpack_require__(644706);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
;// ./node_modules/viem/_esm/utils/abi/decodeAbiParameters.js










function decodeAbiParameters(params, data) {
    const bytes = typeof data === 'string' ? (0,toBytes/* hexToBytes */.aT)(data) : data;
    const cursor = (0,utils_cursor/* createCursor */.l)(bytes);
    if ((0,size/* size */.E)(bytes) === 0 && params.length > 0)
        throw new abi/* AbiDecodingZeroDataError */.O();
    if ((0,size/* size */.E)(data) && (0,size/* size */.E)(data) < 32)
        throw new abi/* AbiDecodingDataSizeTooSmallError */.Iy({
            data: typeof data === 'string' ? data : (0,toHex/* bytesToHex */.My)(data),
            params: params,
            size: (0,size/* size */.E)(data),
        });
    let consumed = 0;
    const values = [];
    for (let i = 0; i < params.length; ++i) {
        const param = params[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: 0,
        });
        consumed += consumed_;
        values.push(data);
    }
    return values;
}
function decodeParameter(cursor, param, { staticPosition }) {
    const arrayComponents = (0,encodeAbiParameters/* getArrayComponents */.k)(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, { ...param, type }, { length, staticPosition });
    }
    if (param.type === 'tuple')
        return decodeTuple(cursor, param, { staticPosition });
    if (param.type === 'address')
        return decodeAddress(cursor);
    if (param.type === 'bool')
        return decodeBool(cursor);
    if (param.type.startsWith('bytes'))
        return decodeBytes(cursor, param, { staticPosition });
    if (param.type.startsWith('uint') || param.type.startsWith('int'))
        return decodeNumber(cursor, param);
    if (param.type === 'string')
        return decodeString(cursor, { staticPosition });
    throw new abi/* InvalidAbiDecodingTypeError */.j(param.type, {
        docsPath: '/docs/contract/decodeAbiParameters',
    });
}
////////////////////////////////////////////////////////////////////
// Type Decoders
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor) {
    const value = cursor.readBytes(32);
    return [(0,getAddress/* checksumAddress */.o)((0,toHex/* bytesToHex */.My)((0,slice/* sliceBytes */.A1)(value, -20))), 32];
}
function decodeArray(cursor, param, { length, staticPosition }) {
    // If the length of the array is not known in advance (dynamic array),
    // this means we will need to wonder off to the pointer and decode.
    if (!length) {
        // Dealing with a dynamic type, so get the offset of the array data.
        const offset = bytesToNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        // Get the length of the array from the offset.
        cursor.setPosition(start);
        const length = bytesToNumber(cursor.readBytes(sizeOfLength));
        // Check if the array has any dynamic children.
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for (let i = 0; i < length; ++i) {
            // If any of the children is dynamic, then all elements will be offset pointer, thus size of one slot (32 bytes).
            // Otherwise, elements will be the size of their encoding (consumed bytes).
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                staticPosition: startOfData,
            });
            consumed += consumed_;
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the array data.
        const offset = bytesToNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const value = [];
        for (let i = 0; i < length; ++i) {
            // Move cursor along to the next slot (next offset pointer).
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                staticPosition: start,
            });
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the length of the array is known in advance and the array is deeply static,
    // then we can just decode each element in sequence.
    let consumed = 0;
    const value = [];
    for (let i = 0; i < length; ++i) {
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: staticPosition + consumed,
        });
        consumed += consumed_;
        value.push(data);
    }
    return [value, consumed];
}
function decodeBool(cursor) {
    return [bytesToBool(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        // Dealing with dynamic types, so get the offset of the bytes data.
        const offset = bytesToNumber(cursor.readBytes(32));
        // Set position of the cursor to start of bytes data.
        cursor.setPosition(staticPosition + offset);
        const length = bytesToNumber(cursor.readBytes(32));
        // If there is no length, we have zero data.
        if (length === 0) {
            // As we have gone wondering, restore to the original position + next slot.
            cursor.setPosition(staticPosition + 32);
            return ['0x', 32];
        }
        const data = cursor.readBytes(length);
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [(0,toHex/* bytesToHex */.My)(data), 32];
    }
    const value = (0,toHex/* bytesToHex */.My)(cursor.readBytes(Number.parseInt(size, 10), 32));
    return [value, 32];
}
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith('int');
    const size = Number.parseInt(param.type.split('int')[1] || '256', 10);
    const value = cursor.readBytes(32);
    return [
        size > 48
            ? bytesToBigInt(value, { signed })
            : bytesToNumber(value, { signed }),
        32,
    ];
}
function decodeTuple(cursor, param, { staticPosition }) {
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the tuple data.
        const offset = bytesToNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of referencing slot + offset.
        const start = staticPosition + offset;
        for (let i = 0; i < param.components.length; ++i) {
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                staticPosition: start,
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for (let i = 0; i < param.components.length; ++i) {
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            staticPosition,
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
    // Get offset to start of string data.
    const offset = bytesToNumber(cursor.readBytes(32));
    // Start is the static position of current slot + offset.
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = bytesToNumber(cursor.readBytes(32));
    // If there is no length, we have zero data (empty string).
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return ['', 32];
    }
    const data = cursor.readBytes(length, 32);
    const value = bytesToString((0,trim/* trim */.B)(data));
    // As we have gone wondering, restore to the original position + next slot.
    cursor.setPosition(staticPosition + 32);
    return [value, 32];
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string')
        return true;
    if (type === 'bytes')
        return true;
    if (type.endsWith('[]'))
        return true;
    if (type === 'tuple')
        return param.components?.some(hasDynamicChild);
    const arrayComponents = (0,encodeAbiParameters/* getArrayComponents */.k)(param.type);
    if (arrayComponents &&
        hasDynamicChild({ ...param, type: arrayComponents[1] }))
        return true;
    return false;
}
//# sourceMappingURL=decodeAbiParameters.js.map

/***/ },

/***/ 566099
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ BlockOverrides_toRpc)
});

// UNUSED EXPORTS: fromRpc

// EXTERNAL MODULE: ./node_modules/viem/node_modules/ox/_esm/core/Hex.js
var Hex = __webpack_require__(399516);
;// ./node_modules/viem/node_modules/ox/_esm/core/Withdrawal.js

/**
 * Converts a {@link ox#Withdrawal.Rpc} to an {@link ox#Withdrawal.Withdrawal}.
 *
 * @example
 * ```ts twoslash
 * import { Withdrawal } from 'ox'
 *
 * const withdrawal = Withdrawal.fromRpc({
 *   address: '0x00000000219ab540356cBB839Cbe05303d7705Fa',
 *   amount: '0x620323',
 *   index: '0x0',
 *   validatorIndex: '0x1',
 * })
 * // @log: {
 * // @log:   address: '0x00000000219ab540356cBB839Cbe05303d7705Fa',
 * // @log:   amount: 6423331n,
 * // @log:   index: 0,
 * // @log:   validatorIndex: 1
 * // @log: }
 * ```
 *
 * @param withdrawal - The RPC withdrawal to convert.
 * @returns An instantiated {@link ox#Withdrawal.Withdrawal}.
 */
function fromRpc(withdrawal) {
    return {
        ...withdrawal,
        amount: BigInt(withdrawal.amount),
        index: Number(withdrawal.index),
        validatorIndex: Number(withdrawal.validatorIndex),
    };
}
/**
 * Converts a {@link ox#Withdrawal.Withdrawal} to an {@link ox#Withdrawal.Rpc}.
 *
 * @example
 * ```ts twoslash
 * import { Withdrawal } from 'ox'
 *
 * const withdrawal = Withdrawal.toRpc({
 *   address: '0x00000000219ab540356cBB839Cbe05303d7705Fa',
 *   amount: 6423331n,
 *   index: 0,
 *   validatorIndex: 1,
 * })
 * // @log: {
 * // @log:   address: '0x00000000219ab540356cBB839Cbe05303d7705Fa',
 * // @log:   amount: '0x620323',
 * // @log:   index: '0x0',
 * // @log:   validatorIndex: '0x1',
 * // @log: }
 * ```
 *
 * @param withdrawal - The Withdrawal to convert.
 * @returns An RPC Withdrawal.
 */
function toRpc(withdrawal) {
    return {
        address: withdrawal.address,
        amount: Hex/* fromNumber */.oB(withdrawal.amount),
        index: Hex/* fromNumber */.oB(withdrawal.index),
        validatorIndex: Hex/* fromNumber */.oB(withdrawal.validatorIndex),
    };
}
//# sourceMappingURL=Withdrawal.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/BlockOverrides.js


/**
 * Converts an {@link ox#BlockOverrides.Rpc} to an {@link ox#BlockOverrides.BlockOverrides}.
 *
 * @example
 * ```ts twoslash
 * import { BlockOverrides } from 'ox'
 *
 * const blockOverrides = BlockOverrides.fromRpc({
 *   baseFeePerGas: '0x1',
 *   blobBaseFee: '0x2',
 *   feeRecipient: '0x0000000000000000000000000000000000000000',
 *   gasLimit: '0x4',
 *   number: '0x5',
 *   prevRandao: '0x6',
 *   time: '0x1234567890',
 *   withdrawals: [
 *     {
 *       address: '0x0000000000000000000000000000000000000000',
 *       amount: '0x1',
 *       index: '0x0',
 *       validatorIndex: '0x1',
 *     },
 *   ],
 * })
 * ```
 *
 * @param rpcBlockOverrides - The RPC block overrides to convert.
 * @returns An instantiated {@link ox#BlockOverrides.BlockOverrides}.
 */
function BlockOverrides_fromRpc(rpcBlockOverrides) {
    return {
        ...(rpcBlockOverrides.baseFeePerGas && {
            baseFeePerGas: BigInt(rpcBlockOverrides.baseFeePerGas),
        }),
        ...(rpcBlockOverrides.blobBaseFee && {
            blobBaseFee: BigInt(rpcBlockOverrides.blobBaseFee),
        }),
        ...(rpcBlockOverrides.feeRecipient && {
            feeRecipient: rpcBlockOverrides.feeRecipient,
        }),
        ...(rpcBlockOverrides.gasLimit && {
            gasLimit: BigInt(rpcBlockOverrides.gasLimit),
        }),
        ...(rpcBlockOverrides.number && {
            number: BigInt(rpcBlockOverrides.number),
        }),
        ...(rpcBlockOverrides.prevRandao && {
            prevRandao: BigInt(rpcBlockOverrides.prevRandao),
        }),
        ...(rpcBlockOverrides.time && {
            time: BigInt(rpcBlockOverrides.time),
        }),
        ...(rpcBlockOverrides.withdrawals && {
            withdrawals: rpcBlockOverrides.withdrawals.map(Withdrawal.fromRpc),
        }),
    };
}
/**
 * Converts an {@link ox#BlockOverrides.BlockOverrides} to an {@link ox#BlockOverrides.Rpc}.
 *
 * @example
 * ```ts twoslash
 * import { BlockOverrides } from 'ox'
 *
 * const blockOverrides = BlockOverrides.toRpc({
 *   baseFeePerGas: 1n,
 *   blobBaseFee: 2n,
 *   feeRecipient: '0x0000000000000000000000000000000000000000',
 *   gasLimit: 4n,
 *   number: 5n,
 *   prevRandao: 6n,
 *   time: 78187493520n,
 *   withdrawals: [
 *     {
 *       address: '0x0000000000000000000000000000000000000000',
 *       amount: 1n,
 *       index: 0,
 *       validatorIndex: 1,
 *     },
 *   ],
 * })
 * ```
 *
 * @param blockOverrides - The block overrides to convert.
 * @returns An instantiated {@link ox#BlockOverrides.Rpc}.
 */
function BlockOverrides_toRpc(blockOverrides) {
    return {
        ...(typeof blockOverrides.baseFeePerGas === 'bigint' && {
            baseFeePerGas: Hex/* fromNumber */.oB(blockOverrides.baseFeePerGas),
        }),
        ...(typeof blockOverrides.blobBaseFee === 'bigint' && {
            blobBaseFee: Hex/* fromNumber */.oB(blockOverrides.blobBaseFee),
        }),
        ...(typeof blockOverrides.feeRecipient === 'string' && {
            feeRecipient: blockOverrides.feeRecipient,
        }),
        ...(typeof blockOverrides.gasLimit === 'bigint' && {
            gasLimit: Hex/* fromNumber */.oB(blockOverrides.gasLimit),
        }),
        ...(typeof blockOverrides.number === 'bigint' && {
            number: Hex/* fromNumber */.oB(blockOverrides.number),
        }),
        ...(typeof blockOverrides.prevRandao === 'bigint' && {
            prevRandao: Hex/* fromNumber */.oB(blockOverrides.prevRandao),
        }),
        ...(typeof blockOverrides.time === 'bigint' && {
            time: Hex/* fromNumber */.oB(blockOverrides.time),
        }),
        ...(blockOverrides.withdrawals && {
            withdrawals: blockOverrides.withdrawals.map(toRpc),
        }),
    };
}
//# sourceMappingURL=BlockOverrides.js.map

/***/ },

/***/ 569508
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dv: () => (/* binding */ modifiers),
/* harmony export */   FO: () => (/* binding */ execStructSignature),
/* harmony export */   If: () => (/* binding */ execFallbackSignature),
/* harmony export */   Ji: () => (/* binding */ isFunctionSignature),
/* harmony export */   Rv: () => (/* binding */ isEventSignature),
/* harmony export */   WL: () => (/* binding */ isStructSignature),
/* harmony export */   Yo: () => (/* binding */ execConstructorSignature),
/* harmony export */   ej: () => (/* binding */ execFunctionSignature),
/* harmony export */   fC: () => (/* binding */ eventModifiers),
/* harmony export */   iB: () => (/* binding */ execEventSignature),
/* harmony export */   kz: () => (/* binding */ execErrorSignature),
/* harmony export */   l9: () => (/* binding */ isConstructorSignature),
/* harmony export */   pc: () => (/* binding */ isErrorSignature),
/* harmony export */   sP: () => (/* binding */ isReceiveSignature),
/* harmony export */   v7: () => (/* binding */ functionModifiers),
/* harmony export */   v8: () => (/* binding */ isFallbackSignature)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(725276);

// https://regexr.com/7gmok
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(errorSignatureRegex, signature);
}
// https://regexr.com/7gmoq
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(eventSignatureRegex, signature);
}
// https://regexr.com/7gmot
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(functionSignatureRegex, signature);
}
// https://regexr.com/7gmp3
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(structSignatureRegex, signature);
}
// https://regexr.com/78u01
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(constructorSignatureRegex, signature);
}
// https://regexr.com/7srtn
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
function execFallbackSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(fallbackSignatureRegex, signature);
}
// https://regexr.com/78u1k
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
const modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata',
]);
const eventModifiers = new Set(['indexed']);
const functionModifiers = new Set([
    'calldata',
    'memory',
    'storage',
]);
//# sourceMappingURL=signatures.js.map

/***/ },

/***/ 616188
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X9: () => (/* binding */ InvalidStructSignatureError),
/* harmony export */   s7: () => (/* binding */ InvalidSignatureError),
/* harmony export */   x8: () => (/* binding */ UnknownSignatureError)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(813440);

class InvalidSignatureError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature, type, }) {
        super(`Invalid ${type} signature.`, {
            details: signature,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSignatureError'
        });
    }
}
class UnknownSignatureError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature }) {
        super('Unknown signature.', {
            details: signature,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSignatureError'
        });
    }
}
class InvalidStructSignatureError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature }) {
        super('Invalid struct signature.', {
            details: signature,
            metaMessages: ['No properties exist.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStructSignatureError'
        });
    }
}
//# sourceMappingURL=signature.js.map

/***/ },

/***/ 638684
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ getCallError)
/* harmony export */ });
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(453513);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92592);
/* harmony import */ var _getNodeError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671772);



function getCallError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = (0,_getNodeError_js__WEBPACK_IMPORTED_MODULE_2__/* .getNodeError */ .l)(err, args);
        if (cause instanceof _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .UnknownNodeError */ .RM)
            return err;
        return cause;
    })();
    return new _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__/* .CallExecutionError */ .zX(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getCallError.js.map

/***/ },

/***/ 643684
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ BaseError)
});

;// ./node_modules/viem/node_modules/ox/_esm/core/version.js
/** @internal */
const version = '0.1.1';
//# sourceMappingURL=version.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/internal/errors.js

/** @internal */
function getUrl(url) {
    return url;
}
/** @internal */
function getVersion() {
    return version;
}
/** @internal */
function prettyPrint(args) {
    if (!args)
        return '';
    const entries = Object.entries(args)
        .map(([key, value]) => {
        if (value === undefined || value === false)
            return null;
        return [key, value];
    })
        .filter(Boolean);
    const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
    return entries
        .map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`)
        .join('\n');
}
//# sourceMappingURL=errors.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/Errors.js

/**
 * Base error class inherited by all errors thrown by ox.
 *
 * @example
 * ```ts
 * import { Errors } from 'ox'
 * throw new Errors.BaseError('An error occurred')
 * ```
 */
class BaseError extends Error {
    static setStaticOptions(options) {
        BaseError.prototype.docsOrigin = options.docsOrigin;
        BaseError.prototype.showVersion = options.showVersion;
        BaseError.prototype.version = options.version;
    }
    constructor(shortMessage, options = {}) {
        const details = (() => {
            if (options.cause instanceof BaseError) {
                if (options.cause.details)
                    return options.cause.details;
                if (options.cause.shortMessage)
                    return options.cause.shortMessage;
            }
            if (options.cause &&
                'details' in options.cause &&
                typeof options.cause.details === 'string')
                return options.cause.details;
            if (options.cause?.message)
                return options.cause.message;
            return options.details;
        })();
        const docsPath = (() => {
            if (options.cause instanceof BaseError)
                return options.cause.docsPath || options.docsPath;
            return options.docsPath;
        })();
        const docsBaseUrl = options.docsOrigin ?? BaseError.prototype.docsOrigin;
        const docs = `${docsBaseUrl}${docsPath ?? ''}`;
        const showVersion = Boolean(options.version ?? BaseError.prototype.showVersion);
        const version = options.version ?? BaseError.prototype.version;
        const message = [
            shortMessage || 'An error occurred.',
            ...(options.metaMessages ? ['', ...options.metaMessages] : []),
            ...(details || docsPath || showVersion
                ? [
                    '',
                    details ? `Details: ${details}` : undefined,
                    docsPath ? `See: ${docs}` : undefined,
                    showVersion ? `Version: ${version}` : undefined,
                ]
                : []),
        ]
            .filter((x) => typeof x === 'string')
            .join('\n');
        super(message, options.cause ? { cause: options.cause } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsOrigin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showVersion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        this.cause = options.cause;
        this.details = details;
        this.docs = docs;
        this.docsOrigin = docsBaseUrl;
        this.docsPath = docsPath;
        this.shortMessage = shortMessage;
        this.showVersion = showVersion;
        this.version = version;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
Object.defineProperty(BaseError, "defaultStaticOptions", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        docsOrigin: 'https://oxlib.sh',
        showVersion: false,
        version: `ox@${getVersion()}`,
    }
});
(() => {
    BaseError.setStaticOptions(BaseError.defaultStaticOptions);
})();
/** @internal */
function walk(err, fn) {
    if (fn?.(err))
        return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause)
        return walk(err.cause, fn);
    return fn ? null : err;
}
//# sourceMappingURL=Errors.js.map

/***/ },

/***/ 644706
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Af: () => (/* binding */ stringToBytes),
/* harmony export */   ZJ: () => (/* binding */ toBytes),
/* harmony export */   aT: () => (/* binding */ hexToBytes)
/* harmony export */ });
/* unused harmony exports boolToBytes, numberToBytes */
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345765);
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(646394);
/* harmony import */ var _data_pad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(540586);
/* harmony import */ var _fromHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6675);
/* harmony import */ var _toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(584192);





const encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Encodes a UTF-8 string, hex value, bigint, number or boolean to a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes
 * - Example: https://viem.sh/docs/utilities/toBytes#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes('Hello world')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function toBytes(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToBytes(value, opts);
    if (typeof value === 'boolean')
        return boolToBytes(value, opts);
    if ((0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_1__/* .isHex */ .q)(value))
        return hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
/**
 * Encodes a boolean into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#booltobytes
 *
 * @param value Boolean value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true)
 * // Uint8Array([1])
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true, { size: 32 })
 * // Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
 */
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_3__/* .assertSize */ .Sl)(bytes, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_2__/* .pad */ .eV)(bytes, { size: opts.size });
    }
    return bytes;
}
// We use very optimized technique to convert hex string to byte array
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102,
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine)
        return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F)
        return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f)
        return char - (charCodeMap.a - 10);
    return undefined;
}
/**
 * Encodes a hex string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#hextobytes
 *
 * @param hex Hex string to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_3__/* .assertSize */ .Sl)(hex, { size: opts.size });
        hex = (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_2__/* .pad */ .eV)(hex, { dir: 'right', size: opts.size });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2)
        hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for (let index = 0, j = 0; index < length; index++) {
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
/**
 * Encodes a number into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#numbertobytes
 *
 * @param value Number to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function numberToBytes(value, opts) {
    const hex = (0,_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .numberToHex */ .cK)(value, opts);
    return hexToBytes(hex);
}
/**
 * Encodes a UTF-8 string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#stringtobytes
 *
 * @param value String to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_3__/* .assertSize */ .Sl)(bytes, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_2__/* .pad */ .eV)(bytes, { dir: 'right', size: opts.size });
    }
    return bytes;
}
//# sourceMappingURL=toBytes.js.map

/***/ },

/***/ 664055
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ assertRequest)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/accounts/utils/parseAccount.js
var parseAccount = __webpack_require__(413033);
;// ./node_modules/viem/_esm/constants/number.js
const maxInt8 = (/* unused pure expression or super */ null && (2n ** (8n - 1n) - 1n));
const maxInt16 = (/* unused pure expression or super */ null && (2n ** (16n - 1n) - 1n));
const maxInt24 = (/* unused pure expression or super */ null && (2n ** (24n - 1n) - 1n));
const maxInt32 = (/* unused pure expression or super */ null && (2n ** (32n - 1n) - 1n));
const maxInt40 = (/* unused pure expression or super */ null && (2n ** (40n - 1n) - 1n));
const maxInt48 = (/* unused pure expression or super */ null && (2n ** (48n - 1n) - 1n));
const maxInt56 = (/* unused pure expression or super */ null && (2n ** (56n - 1n) - 1n));
const maxInt64 = (/* unused pure expression or super */ null && (2n ** (64n - 1n) - 1n));
const maxInt72 = (/* unused pure expression or super */ null && (2n ** (72n - 1n) - 1n));
const maxInt80 = (/* unused pure expression or super */ null && (2n ** (80n - 1n) - 1n));
const maxInt88 = (/* unused pure expression or super */ null && (2n ** (88n - 1n) - 1n));
const maxInt96 = (/* unused pure expression or super */ null && (2n ** (96n - 1n) - 1n));
const maxInt104 = (/* unused pure expression or super */ null && (2n ** (104n - 1n) - 1n));
const maxInt112 = (/* unused pure expression or super */ null && (2n ** (112n - 1n) - 1n));
const maxInt120 = (/* unused pure expression or super */ null && (2n ** (120n - 1n) - 1n));
const maxInt128 = (/* unused pure expression or super */ null && (2n ** (128n - 1n) - 1n));
const maxInt136 = (/* unused pure expression or super */ null && (2n ** (136n - 1n) - 1n));
const maxInt144 = (/* unused pure expression or super */ null && (2n ** (144n - 1n) - 1n));
const maxInt152 = (/* unused pure expression or super */ null && (2n ** (152n - 1n) - 1n));
const maxInt160 = (/* unused pure expression or super */ null && (2n ** (160n - 1n) - 1n));
const maxInt168 = (/* unused pure expression or super */ null && (2n ** (168n - 1n) - 1n));
const maxInt176 = (/* unused pure expression or super */ null && (2n ** (176n - 1n) - 1n));
const maxInt184 = (/* unused pure expression or super */ null && (2n ** (184n - 1n) - 1n));
const maxInt192 = (/* unused pure expression or super */ null && (2n ** (192n - 1n) - 1n));
const maxInt200 = (/* unused pure expression or super */ null && (2n ** (200n - 1n) - 1n));
const maxInt208 = (/* unused pure expression or super */ null && (2n ** (208n - 1n) - 1n));
const maxInt216 = (/* unused pure expression or super */ null && (2n ** (216n - 1n) - 1n));
const maxInt224 = (/* unused pure expression or super */ null && (2n ** (224n - 1n) - 1n));
const maxInt232 = (/* unused pure expression or super */ null && (2n ** (232n - 1n) - 1n));
const maxInt240 = (/* unused pure expression or super */ null && (2n ** (240n - 1n) - 1n));
const maxInt248 = (/* unused pure expression or super */ null && (2n ** (248n - 1n) - 1n));
const maxInt256 = (/* unused pure expression or super */ null && (2n ** (256n - 1n) - 1n));
const minInt8 = (/* unused pure expression or super */ null && (-(2n ** (8n - 1n))));
const minInt16 = (/* unused pure expression or super */ null && (-(2n ** (16n - 1n))));
const minInt24 = (/* unused pure expression or super */ null && (-(2n ** (24n - 1n))));
const minInt32 = (/* unused pure expression or super */ null && (-(2n ** (32n - 1n))));
const minInt40 = (/* unused pure expression or super */ null && (-(2n ** (40n - 1n))));
const minInt48 = (/* unused pure expression or super */ null && (-(2n ** (48n - 1n))));
const minInt56 = (/* unused pure expression or super */ null && (-(2n ** (56n - 1n))));
const minInt64 = (/* unused pure expression or super */ null && (-(2n ** (64n - 1n))));
const minInt72 = (/* unused pure expression or super */ null && (-(2n ** (72n - 1n))));
const minInt80 = (/* unused pure expression or super */ null && (-(2n ** (80n - 1n))));
const minInt88 = (/* unused pure expression or super */ null && (-(2n ** (88n - 1n))));
const minInt96 = (/* unused pure expression or super */ null && (-(2n ** (96n - 1n))));
const minInt104 = (/* unused pure expression or super */ null && (-(2n ** (104n - 1n))));
const minInt112 = (/* unused pure expression or super */ null && (-(2n ** (112n - 1n))));
const minInt120 = (/* unused pure expression or super */ null && (-(2n ** (120n - 1n))));
const minInt128 = (/* unused pure expression or super */ null && (-(2n ** (128n - 1n))));
const minInt136 = (/* unused pure expression or super */ null && (-(2n ** (136n - 1n))));
const minInt144 = (/* unused pure expression or super */ null && (-(2n ** (144n - 1n))));
const minInt152 = (/* unused pure expression or super */ null && (-(2n ** (152n - 1n))));
const minInt160 = (/* unused pure expression or super */ null && (-(2n ** (160n - 1n))));
const minInt168 = (/* unused pure expression or super */ null && (-(2n ** (168n - 1n))));
const minInt176 = (/* unused pure expression or super */ null && (-(2n ** (176n - 1n))));
const minInt184 = (/* unused pure expression or super */ null && (-(2n ** (184n - 1n))));
const minInt192 = (/* unused pure expression or super */ null && (-(2n ** (192n - 1n))));
const minInt200 = (/* unused pure expression or super */ null && (-(2n ** (200n - 1n))));
const minInt208 = (/* unused pure expression or super */ null && (-(2n ** (208n - 1n))));
const minInt216 = (/* unused pure expression or super */ null && (-(2n ** (216n - 1n))));
const minInt224 = (/* unused pure expression or super */ null && (-(2n ** (224n - 1n))));
const minInt232 = (/* unused pure expression or super */ null && (-(2n ** (232n - 1n))));
const minInt240 = (/* unused pure expression or super */ null && (-(2n ** (240n - 1n))));
const minInt248 = (/* unused pure expression or super */ null && (-(2n ** (248n - 1n))));
const minInt256 = (/* unused pure expression or super */ null && (-(2n ** (256n - 1n))));
const maxUint8 = (/* unused pure expression or super */ null && (2n ** 8n - 1n));
const maxUint16 = (/* unused pure expression or super */ null && (2n ** 16n - 1n));
const maxUint24 = (/* unused pure expression or super */ null && (2n ** 24n - 1n));
const maxUint32 = (/* unused pure expression or super */ null && (2n ** 32n - 1n));
const maxUint40 = (/* unused pure expression or super */ null && (2n ** 40n - 1n));
const maxUint48 = (/* unused pure expression or super */ null && (2n ** 48n - 1n));
const maxUint56 = (/* unused pure expression or super */ null && (2n ** 56n - 1n));
const maxUint64 = (/* unused pure expression or super */ null && (2n ** 64n - 1n));
const maxUint72 = (/* unused pure expression or super */ null && (2n ** 72n - 1n));
const maxUint80 = (/* unused pure expression or super */ null && (2n ** 80n - 1n));
const maxUint88 = (/* unused pure expression or super */ null && (2n ** 88n - 1n));
const maxUint96 = (/* unused pure expression or super */ null && (2n ** 96n - 1n));
const maxUint104 = (/* unused pure expression or super */ null && (2n ** 104n - 1n));
const maxUint112 = (/* unused pure expression or super */ null && (2n ** 112n - 1n));
const maxUint120 = (/* unused pure expression or super */ null && (2n ** 120n - 1n));
const maxUint128 = (/* unused pure expression or super */ null && (2n ** 128n - 1n));
const maxUint136 = (/* unused pure expression or super */ null && (2n ** 136n - 1n));
const maxUint144 = (/* unused pure expression or super */ null && (2n ** 144n - 1n));
const maxUint152 = (/* unused pure expression or super */ null && (2n ** 152n - 1n));
const maxUint160 = (/* unused pure expression or super */ null && (2n ** 160n - 1n));
const maxUint168 = (/* unused pure expression or super */ null && (2n ** 168n - 1n));
const maxUint176 = (/* unused pure expression or super */ null && (2n ** 176n - 1n));
const maxUint184 = (/* unused pure expression or super */ null && (2n ** 184n - 1n));
const maxUint192 = (/* unused pure expression or super */ null && (2n ** 192n - 1n));
const maxUint200 = (/* unused pure expression or super */ null && (2n ** 200n - 1n));
const maxUint208 = (/* unused pure expression or super */ null && (2n ** 208n - 1n));
const maxUint216 = (/* unused pure expression or super */ null && (2n ** 216n - 1n));
const maxUint224 = (/* unused pure expression or super */ null && (2n ** 224n - 1n));
const maxUint232 = (/* unused pure expression or super */ null && (2n ** 232n - 1n));
const maxUint240 = (/* unused pure expression or super */ null && (2n ** 240n - 1n));
const maxUint248 = (/* unused pure expression or super */ null && (2n ** 248n - 1n));
const maxUint256 = 2n ** 256n - 1n;
//# sourceMappingURL=number.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/address.js
var address = __webpack_require__(14306);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/node.js
var node = __webpack_require__(92592);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/isAddress.js
var isAddress = __webpack_require__(529873);
;// ./node_modules/viem/_esm/utils/transaction/assertRequest.js





function assertRequest(args) {
    const { account: account_, maxFeePerGas, maxPriorityFeePerGas, to } = args;
    const account = account_ ? (0,parseAccount/* parseAccount */.J)(account_) : undefined;
    if (account && !(0,isAddress/* isAddress */.P)(account.address))
        throw new address/* InvalidAddressError */.M({ address: account.address });
    if (to && !(0,isAddress/* isAddress */.P)(to))
        throw new address/* InvalidAddressError */.M({ address: to });
    if (maxFeePerGas && maxFeePerGas > maxUint256)
        throw new node/* FeeCapTooHighError */.BG({ maxFeePerGas });
    if (maxPriorityFeePerGas &&
        maxFeePerGas &&
        maxPriorityFeePerGas > maxFeePerGas)
        throw new node/* TipAboveFeeCapError */.lN({ maxFeePerGas, maxPriorityFeePerGas });
}
//# sourceMappingURL=assertRequest.js.map

/***/ },

/***/ 671772
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ getNodeError)
/* harmony export */ });
/* unused harmony export containsNodeError */
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345765);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92592);




function containsNodeError(err) {
    return (err instanceof TransactionRejectedRpcError ||
        err instanceof InvalidInputRpcError ||
        (err instanceof RpcRequestError && err.code === ExecutionRevertedError.code));
}
function getNodeError(err, args) {
    const message = (err.details || '').toLowerCase();
    const executionRevertedError = err instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C
        ? err.walk((e) => e?.code ===
            _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .ExecutionRevertedError */ .A7.code)
        : err;
    if (executionRevertedError instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C)
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .ExecutionRevertedError */ .A7({
            cause: err,
            message: executionRevertedError.details,
        });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .ExecutionRevertedError */ .A7.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .ExecutionRevertedError */ .A7({
            cause: err,
            message: err.details,
        });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .FeeCapTooHighError */ .BG.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .FeeCapTooHighError */ .BG({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .FeeCapTooLowError */ .jj.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .FeeCapTooLowError */ .jj({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceTooHighError */ .K0.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceTooHighError */ .K0({ cause: err, nonce: args?.nonce });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceTooLowError */ .Oh.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceTooLowError */ .Oh({ cause: err, nonce: args?.nonce });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceMaxValueError */ .vW.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceMaxValueError */ .vW({ cause: err, nonce: args?.nonce });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .InsufficientFundsError */ .k5.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .InsufficientFundsError */ .k5({ cause: err });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .IntrinsicGasTooHighError */ .lY.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .IntrinsicGasTooHighError */ .lY({ cause: err, gas: args?.gas });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .IntrinsicGasTooLowError */ .Fo.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .IntrinsicGasTooLowError */ .Fo({ cause: err, gas: args?.gas });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .TransactionTypeNotSupportedError */ .uC.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .TransactionTypeNotSupportedError */ .uC({ cause: err });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .TipAboveFeeCapError */ .lN.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .TipAboveFeeCapError */ .lN({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
            maxPriorityFeePerGas: args?.maxPriorityFeePerGas,
        });
    return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .UnknownNodeError */ .RM({
        cause: err,
    });
}
//# sourceMappingURL=getNodeError.js.map

/***/ },

/***/ 697041
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A9: () => (/* binding */ InvalidAbiParametersError),
/* harmony export */   NO: () => (/* binding */ InvalidModifierError),
/* harmony export */   Pj: () => (/* binding */ InvalidFunctionModifierError),
/* harmony export */   dV: () => (/* binding */ InvalidParameterError),
/* harmony export */   nx: () => (/* binding */ InvalidAbiTypeParameterError),
/* harmony export */   zd: () => (/* binding */ SolidityProtectedKeywordError)
/* harmony export */ });
/* unused harmony export InvalidAbiParameterError */
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(813440);

class InvalidAbiParameterError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param }) {
        super('Failed to parse ABI parameter.', {
            details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
            docsPath: '/api/human#parseabiparameter-1',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParameterError'
        });
    }
}
class InvalidAbiParametersError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ params }) {
        super('Failed to parse ABI parameters.', {
            details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
            docsPath: '/api/human#parseabiparameters-1',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParametersError'
        });
    }
}
class InvalidParameterError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param }) {
        super('Invalid ABI parameter.', {
            details: param,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParameterError'
        });
    }
}
class SolidityProtectedKeywordError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param, name }) {
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SolidityProtectedKeywordError'
        });
    }
}
class InvalidModifierError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param, type, modifier, }) {
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidModifierError'
        });
    }
}
class InvalidFunctionModifierError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param, type, modifier, }) {
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidFunctionModifierError'
        });
    }
}
class InvalidAbiTypeParameterError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ abiParameter, }) {
        super('Invalid ABI parameter.', {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: ['ABI parameter type is invalid.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiTypeParameterError'
        });
    }
}
//# sourceMappingURL=abiParameter.js.map

/***/ },

/***/ 699789
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ extract)
/* harmony export */ });
/**
 * @description Picks out the keys from `value` that exist in the formatter..
 */
function extract(value_, { format }) {
    if (!format)
        return {};
    const value = {};
    function extract_(formatted) {
        const keys = Object.keys(formatted);
        for (const key of keys) {
            if (key in value_)
                value[key] = value_[key];
            if (formatted[key] &&
                typeof formatted[key] === 'object' &&
                !Array.isArray(formatted[key]))
                extract_(formatted[key]);
        }
    }
    const formatted = format(value_ || {});
    extract_(formatted);
    return value;
}
//# sourceMappingURL=extract.js.map

/***/ },

/***/ 725276
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BD: () => (/* binding */ bytesRegex),
/* harmony export */   Ge: () => (/* binding */ integerRegex),
/* harmony export */   Yv: () => (/* binding */ execTyped),
/* harmony export */   wj: () => (/* binding */ isTupleRegex)
/* harmony export */ });
// TODO: This looks cool. Need to check the performance of `new RegExp` versus defined inline though.
// https://twitter.com/GabrielVergnaud/status/1622906834343366657
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
// `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
// https://regexr.com/6va55
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
// `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
// https://regexr.com/6v8hp
const integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const isTupleRegex = /^\(.+?\).*?$/;
//# sourceMappingURL=regex.js.map

/***/ },

/***/ 732589
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ isAddressEqual)
/* harmony export */ });
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14306);
/* harmony import */ var _isAddress_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(529873);


function isAddressEqual(a, b) {
    if (!(0,_isAddress_js__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .P)(a, { strict: false }))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidAddressError */ .M({ address: a });
    if (!(0,_isAddress_js__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .P)(b, { strict: false }))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidAddressError */ .M({ address: b });
    return a.toLowerCase() === b.toLowerCase();
}
//# sourceMappingURL=isAddressEqual.js.map

/***/ },

/***/ 794531
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ encodeAbiParameters),
/* harmony export */   k: () => (/* binding */ getArrayComponents)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137372);
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14306);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(345765);
/* harmony import */ var _errors_encoding_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94317);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(529873);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(825419);
/* harmony import */ var _data_pad_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(540586);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(885182);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(993577);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(584192);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(158213);











/**
 * @description Encodes a list of primitive values into an ABI-encoded hex value.
 *
 * - Docs: https://viem.sh/docs/abi/encodeAbiParameters#encodeabiparameters
 *
 *   Generates ABI encoded data using the [ABI specification](https://docs.soliditylang.org/en/latest/abi-spec), given a set of ABI parameters (inputs/outputs) and their corresponding values.
 *
 * @param params - a set of ABI Parameters (params), that can be in the shape of the inputs or outputs attribute of an ABI Item.
 * @param values - a set of values (values) that correspond to the given params.
 * @example
 * ```typescript
 * import { encodeAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   [
 *     { name: 'x', type: 'string' },
 *     { name: 'y', type: 'uint' },
 *     { name: 'z', type: 'bool' }
 *   ],
 *   ['wagmi', 420n, true]
 * )
 * ```
 *
 * You can also pass in Human Readable parameters with the parseAbiParameters utility.
 *
 * @example
 * ```typescript
 * import { encodeAbiParameters, parseAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   parseAbiParameters('string x, uint y, bool z'),
 *   ['wagmi', 420n, true]
 * )
 * ```
 */
function encodeAbiParameters(params, values) {
    if (params.length !== values.length)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiEncodingLengthMismatchError */ .YE({
            expectedLength: params.length,
            givenLength: values.length,
        });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParams = prepareParams({
        params: params,
        values: values,
    });
    const data = encodeParams(preparedParams);
    if (data.length === 0)
        return '0x';
    return data;
}
function prepareParams({ params, values, }) {
    const preparedParams = [];
    for (let i = 0; i < params.length; i++) {
        preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
    }
    return preparedParams;
}
function prepareParam({ param, value, }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, { length, param: { ...param, type } });
    }
    if (param.type === 'tuple') {
        return encodeTuple(value, {
            param: param,
        });
    }
    if (param.type === 'address') {
        return encodeAddress(value);
    }
    if (param.type === 'bool') {
        return encodeBool(value);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        const signed = param.type.startsWith('int');
        const [, , size = '256'] = _regex_js__WEBPACK_IMPORTED_MODULE_10__/* .integerRegex */ .Ge.exec(param.type) ?? [];
        return encodeNumber(value, {
            signed,
            size: Number(size),
        });
    }
    if (param.type.startsWith('bytes')) {
        return encodeBytes(value, { param });
    }
    if (param.type === 'string') {
        return encodeString(value);
    }
    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidAbiEncodingTypeError */ .nK(param.type, {
        docsPath: '/docs/contract/encodeAbiParameters',
    });
}
function encodeParams(preparedParams) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for (let i = 0; i < preparedParams.length; i++) {
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic)
            staticSize += 32;
        else
            staticSize += (0,_data_size_js__WEBPACK_IMPORTED_MODULE_7__/* .size */ .E)(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParams = [];
    const dynamicParams = [];
    let dynamicSize = 0;
    for (let i = 0; i < preparedParams.length; i++) {
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) {
            staticParams.push((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_9__/* .numberToHex */ .cK)(staticSize + dynamicSize, { size: 32 }));
            dynamicParams.push(encoded);
            dynamicSize += (0,_data_size_js__WEBPACK_IMPORTED_MODULE_7__/* .size */ .E)(encoded);
        }
        else {
            staticParams.push(encoded);
        }
    }
    // 3. Concatenate static and dynamic parts.
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_5__/* .concat */ .xW)([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
    if (!(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .P)(value))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidAddressError */ .M({ address: value });
    return { dynamic: false, encoded: (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)(value.toLowerCase()) };
}
function encodeArray(value, { length, param, }) {
    const dynamic = length === null;
    if (!Array.isArray(value))
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidArrayError */ .dm(value);
    if (!dynamic && value.length !== length)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiEncodingArrayLengthMismatchError */ .Nc({
            expectedLength: length,
            givenLength: value.length,
            type: `${param.type}[${length}]`,
        });
    let dynamicChild = false;
    const preparedParams = [];
    for (let i = 0; i < value.length; i++) {
        const preparedParam = prepareParam({ param, value: value[i] });
        if (preparedParam.dynamic)
            dynamicChild = true;
        preparedParams.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encodeParams(preparedParams);
        if (dynamic) {
            const length = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_9__/* .numberToHex */ .cK)(preparedParams.length, { size: 32 });
            return {
                dynamic: true,
                encoded: preparedParams.length > 0 ? (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_5__/* .concat */ .xW)([length, data]) : length,
            };
        }
        if (dynamicChild)
            return { dynamic: true, encoded: data };
    }
    return {
        dynamic: false,
        encoded: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_5__/* .concat */ .xW)(preparedParams.map(({ encoded }) => encoded)),
    };
}
function encodeBytes(value, { param }) {
    const [, paramSize] = param.type.split('bytes');
    const bytesSize = (0,_data_size_js__WEBPACK_IMPORTED_MODULE_7__/* .size */ .E)(value);
    if (!paramSize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0)
            value_ = (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)(value_, {
                dir: 'right',
                size: Math.ceil((value.length - 2) / 2 / 32) * 32,
            });
        return {
            dynamic: true,
            encoded: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_5__/* .concat */ .xW)([(0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_9__/* .numberToHex */ .cK)(bytesSize, { size: 32 })), value_]),
        };
    }
    if (bytesSize !== Number.parseInt(paramSize, 10))
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiEncodingBytesSizeMismatchError */ .gH({
            expectedSize: Number.parseInt(paramSize, 10),
            value,
        });
    return { dynamic: false, encoded: (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)(value, { dir: 'right' }) };
}
function encodeBool(value) {
    if (typeof value !== 'boolean')
        throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseError */ .C(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return { dynamic: false, encoded: (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_9__/* .boolToHex */ .$P)(value)) };
}
function encodeNumber(value, { signed, size = 256 }) {
    if (typeof size === 'number') {
        const max = 2n ** (BigInt(size) - (signed ? 1n : 0n)) - 1n;
        const min = signed ? -max - 1n : 0n;
        if (value > max || value < min)
            throw new _errors_encoding_js__WEBPACK_IMPORTED_MODULE_3__/* .IntegerOutOfRangeError */ .Ty({
                max: max.toString(),
                min: min.toString(),
                signed,
                size: size / 8,
                value: value.toString(),
            });
    }
    return {
        dynamic: false,
        encoded: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_9__/* .numberToHex */ .cK)(value, {
            size: 32,
            signed,
        }),
    };
}
function encodeString(value) {
    const hexValue = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_9__/* .stringToHex */ .i3)(value);
    const partsLength = Math.ceil((0,_data_size_js__WEBPACK_IMPORTED_MODULE_7__/* .size */ .E)(hexValue) / 32);
    const parts = [];
    for (let i = 0; i < partsLength; i++) {
        parts.push((0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_8__/* .slice */ .di)(hexValue, i * 32, (i + 1) * 32), {
            dir: 'right',
        }));
    }
    return {
        dynamic: true,
        encoded: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_5__/* .concat */ .xW)([
            (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_9__/* .numberToHex */ .cK)((0,_data_size_js__WEBPACK_IMPORTED_MODULE_7__/* .size */ .E)(hexValue), { size: 32 })),
            ...parts,
        ]),
    };
}
function encodeTuple(value, { param }) {
    let dynamic = false;
    const preparedParams = [];
    for (let i = 0; i < param.components.length; i++) {
        const param_ = param.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParam({
            param: param_,
            value: value[index],
        });
        preparedParams.push(preparedParam);
        if (preparedParam.dynamic)
            dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic
            ? encodeParams(preparedParams)
            : (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_5__/* .concat */ .xW)(preparedParams.map(({ encoded }) => encoded)),
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches
        ? // Return `null` if the array is dynamic.
            [matches[2] ? Number(matches[2]) : null, matches[1]]
        : undefined;
}
//# sourceMappingURL=encodeAbiParameters.js.map

/***/ },

/***/ 809777
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ toEventSelector)
/* harmony export */ });
/* harmony import */ var _toSignatureHash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(392246);

/**
 * Returns the event selector for a given event definition.
 *
 * @example
 * const selector = toEventSelector('Transfer(address indexed from, address indexed to, uint256 amount)')
 * // 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
 */
const toEventSelector = _toSignatureHash_js__WEBPACK_IMPORTED_MODULE_0__/* .toSignatureHash */ .k;
//# sourceMappingURL=toEventSelector.js.map

/***/ },

/***/ 813440
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ BaseError)
});

;// ./node_modules/abitype/dist/esm/version.js
const version = '1.2.3';
//# sourceMappingURL=version.js.map
;// ./node_modules/abitype/dist/esm/errors.js

class BaseError extends Error {
    constructor(shortMessage, args = {}) {
        const details = args.cause instanceof BaseError
            ? args.cause.details
            : args.cause?.message
                ? args.cause.message
                : args.details;
        const docsPath = args.cause instanceof BaseError
            ? args.cause.docsPath || args.docsPath
            : args.docsPath;
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...(args.metaMessages ? [...args.metaMessages, ''] : []),
            ...(docsPath ? [`Docs: https://abitype.dev${docsPath}`] : []),
            ...(details ? [`Details: ${details}`] : []),
            `Version: abitype@${version}`,
        ].join('\n');
        super(message);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiTypeError'
        });
        if (args.cause)
            this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
}
//# sourceMappingURL=errors.js.map

/***/ },

/***/ 815462
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ decodeErrorResult)
/* harmony export */ });
/* harmony import */ var _constants_solidity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24453);
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(137372);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(993577);
/* harmony import */ var _hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(122599);
/* harmony import */ var _decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(541821);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(895167);






function decodeErrorResult(parameters) {
    const { abi, data } = parameters;
    const signature = (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_2__/* .slice */ .di)(data, 0, 4);
    if (signature === '0x')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiDecodingZeroDataError */ .O();
    const abi_ = [...(abi || []), _constants_solidity_js__WEBPACK_IMPORTED_MODULE_0__/* .solidityError */ .Mc, _constants_solidity_js__WEBPACK_IMPORTED_MODULE_0__/* .solidityPanic */ .J9];
    const abiItem = abi_.find((x) => x.type === 'error' && signature === (0,_hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_3__/* .toFunctionSelector */ .V)((0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_5__/* .formatAbiItem */ .B)(x)));
    if (!abiItem)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiErrorSignatureNotFoundError */ .Wq(signature, {
            docsPath: '/docs/contract/decodeErrorResult',
        });
    return {
        abiItem,
        args: 'inputs' in abiItem && abiItem.inputs && abiItem.inputs.length > 0
            ? (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_4__/* .decodeAbiParameters */ .n)(abiItem.inputs, (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_2__/* .slice */ .di)(data, 4))
            : undefined,
        errorName: abiItem.name,
    };
}
//# sourceMappingURL=decodeErrorResult.js.map

/***/ },

/***/ 825419
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aP: () => (/* binding */ concatHex),
/* harmony export */   xW: () => (/* binding */ concat)
/* harmony export */ });
/* unused harmony export concatBytes */
function concat(values) {
    if (typeof values[0] === 'string')
        return concatHex(values);
    return concatBytes(values);
}
function concatBytes(values) {
    let length = 0;
    for (const arr of values) {
        length += arr.length;
    }
    const result = new Uint8Array(length);
    let offset = 0;
    for (const arr of values) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}
function concatHex(values) {
    return `0x${values.reduce((acc, x) => acc + x.replace('0x', ''), '')}`;
}
//# sourceMappingURL=concat.js.map

/***/ },

/***/ 835834
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ createCursor)
/* harmony export */ });
/* harmony import */ var _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(858146);

const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .RecursiveReadLimitExceededError */ .hX({
                count: this.recursiveReadCount + 1,
                limit: this.recursiveReadLimit,
            });
    },
    assertPosition(position) {
        if (position < 0 || position > this.bytes.length - 1)
            throw new _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .PositionOutOfBoundsError */ .SK({
                length: this.bytes.length,
                position,
            });
    },
    decrementPosition(offset) {
        if (offset < 0)
            throw new _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .NegativeOffsetError */ .B4({ offset });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount(position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition(offset) {
        if (offset < 0)
            throw new _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .NegativeOffsetError */ .B4({ offset });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes(length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return ((this.dataView.getUint16(position) << 8) +
            this.dataView.getUint8(position + 2));
    },
    inspectUint32(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte(byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes(bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8(value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16(value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24(value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32(value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes(length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining() {
        return this.bytes.length - this.position;
    },
    setPosition(position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return () => (this.position = oldPosition);
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
            return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0)
            this.recursiveReadCount++;
    },
};
function createCursor(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer ?? bytes, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
}
//# sourceMappingURL=cursor.js.map

/***/ },

/***/ 857671
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bv: () => (/* binding */ formatTransactionRequest)
/* harmony export */ });
/* unused harmony exports rpcTransactionType, defineTransactionRequest */
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(584192);


const rpcTransactionType = {
    legacy: '0x0',
    eip2930: '0x1',
    eip1559: '0x2',
    eip4844: '0x3',
    eip7702: '0x4',
};
function formatTransactionRequest(request, _) {
    const rpcRequest = {};
    if (typeof request.authorizationList !== 'undefined')
        rpcRequest.authorizationList = formatAuthorizationList(request.authorizationList);
    if (typeof request.accessList !== 'undefined')
        rpcRequest.accessList = request.accessList;
    if (typeof request.blobVersionedHashes !== 'undefined')
        rpcRequest.blobVersionedHashes = request.blobVersionedHashes;
    if (typeof request.blobs !== 'undefined') {
        if (typeof request.blobs[0] !== 'string')
            rpcRequest.blobs = request.blobs.map((x) => (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToHex */ .My)(x));
        else
            rpcRequest.blobs = request.blobs;
    }
    if (typeof request.data !== 'undefined')
        rpcRequest.data = request.data;
    if (request.account)
        rpcRequest.from = request.account.address;
    if (typeof request.from !== 'undefined')
        rpcRequest.from = request.from;
    if (typeof request.gas !== 'undefined')
        rpcRequest.gas = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.gas);
    if (typeof request.gasPrice !== 'undefined')
        rpcRequest.gasPrice = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.gasPrice);
    if (typeof request.maxFeePerBlobGas !== 'undefined')
        rpcRequest.maxFeePerBlobGas = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.maxFeePerBlobGas);
    if (typeof request.maxFeePerGas !== 'undefined')
        rpcRequest.maxFeePerGas = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== 'undefined')
        rpcRequest.maxPriorityFeePerGas = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== 'undefined')
        rpcRequest.nonce = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.nonce);
    if (typeof request.to !== 'undefined')
        rpcRequest.to = request.to;
    if (typeof request.type !== 'undefined')
        rpcRequest.type = rpcTransactionType[request.type];
    if (typeof request.value !== 'undefined')
        rpcRequest.value = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.value);
    return rpcRequest;
}
const defineTransactionRequest = /*#__PURE__*/ (/* unused pure expression or super */ null && (defineFormatter('transactionRequest', formatTransactionRequest)));
//////////////////////////////////////////////////////////////////////////////
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization) => ({
        address: authorization.address,
        r: authorization.r
            ? (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(BigInt(authorization.r))
            : authorization.r,
        s: authorization.s
            ? (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(BigInt(authorization.s))
            : authorization.s,
        chainId: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(authorization.chainId),
        nonce: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(authorization.nonce),
        ...(typeof authorization.yParity !== 'undefined'
            ? { yParity: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(authorization.yParity) }
            : {}),
        ...(typeof authorization.v !== 'undefined' &&
            typeof authorization.yParity === 'undefined'
            ? { v: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(authorization.v) }
            : {}),
    }));
}
//# sourceMappingURL=transactionRequest.js.map

/***/ },

/***/ 858146
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B4: () => (/* binding */ NegativeOffsetError),
/* harmony export */   SK: () => (/* binding */ PositionOutOfBoundsError),
/* harmony export */   hX: () => (/* binding */ RecursiveReadLimitExceededError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345765);

class NegativeOffsetError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ offset }) {
        super(`Offset \`${offset}\` cannot be negative.`, {
            name: 'NegativeOffsetError',
        });
    }
}
class PositionOutOfBoundsError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ length, position }) {
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`, { name: 'PositionOutOfBoundsError' });
    }
}
class RecursiveReadLimitExceededError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ count, limit }) {
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`, { name: 'RecursiveReadLimitExceededError' });
    }
}
//# sourceMappingURL=cursor.js.map

/***/ },

/***/ 865547
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   yH: () => (/* binding */ serializeStateOverride)
/* harmony export */ });
/* unused harmony exports serializeStateMapping, serializeAccountStateOverride */
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14306);
/* harmony import */ var _errors_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(836440);
/* harmony import */ var _errors_stateOverride_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136883);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(529873);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(584192);





/** @internal */
function serializeStateMapping(stateMapping) {
    if (!stateMapping || stateMapping.length === 0)
        return undefined;
    return stateMapping.reduce((acc, { slot, value }) => {
        if (slot.length !== 66)
            throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidBytesLengthError */ .NV({
                size: slot.length,
                targetSize: 66,
                type: 'hex',
            });
        if (value.length !== 66)
            throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidBytesLengthError */ .NV({
                size: value.length,
                targetSize: 66,
                type: 'hex',
            });
        acc[slot] = value;
        return acc;
    }, {});
}
/** @internal */
function serializeAccountStateOverride(parameters) {
    const { balance, nonce, state, stateDiff, code } = parameters;
    const rpcAccountStateOverride = {};
    if (code !== undefined)
        rpcAccountStateOverride.code = code;
    if (balance !== undefined)
        rpcAccountStateOverride.balance = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .numberToHex */ .cK)(balance);
    if (nonce !== undefined)
        rpcAccountStateOverride.nonce = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .numberToHex */ .cK)(nonce);
    if (state !== undefined)
        rpcAccountStateOverride.state = serializeStateMapping(state);
    if (stateDiff !== undefined) {
        if (rpcAccountStateOverride.state)
            throw new _errors_stateOverride_js__WEBPACK_IMPORTED_MODULE_2__/* .StateAssignmentConflictError */ .ft();
        rpcAccountStateOverride.stateDiff = serializeStateMapping(stateDiff);
    }
    return rpcAccountStateOverride;
}
/** @internal */
function serializeStateOverride(parameters) {
    if (!parameters)
        return undefined;
    const rpcStateOverride = {};
    for (const { address, ...accountState } of parameters) {
        if (!(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .P)(address, { strict: false }))
            throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidAddressError */ .M({ address });
        if (rpcStateOverride[address])
            throw new _errors_stateOverride_js__WEBPACK_IMPORTED_MODULE_2__/* .AccountStateConflictError */ .Hi({ address: address });
        rpcStateOverride[address] = serializeAccountStateOverride(accountState);
    }
    return rpcStateOverride;
}
//# sourceMappingURL=stateOverride.js.map

/***/ },

/***/ 895167
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formatAbiParams),
/* harmony export */   B: () => (/* binding */ formatAbiItem)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137372);

function formatAbiItem(abiItem, { includeName = false } = {}) {
    if (abiItem.type !== 'function' &&
        abiItem.type !== 'event' &&
        abiItem.type !== 'error')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidDefinitionTypeError */ .d_(abiItem.type);
    return `${abiItem.name}(${formatAbiParams(abiItem.inputs, { includeName })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
    if (!params)
        return '';
    return params
        .map((param) => formatAbiParam(param, { includeName }))
        .join(includeName ? ', ' : ',');
}
function formatAbiParam(param, { includeName }) {
    if (param.type.startsWith('tuple')) {
        return `(${formatAbiParams(param.components, { includeName })})${param.type.slice('tuple'.length)}`;
    }
    return param.type + (includeName && param.name ? ` ${param.name}` : '');
}
//# sourceMappingURL=formatAbiItem.js.map

/***/ },

/***/ 925834
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  createPublicClient: () => (/* reexport */ createPublicClient),
  defineChain: () => (/* reexport */ defineChain),
  http: () => (/* reexport */ http/* http */.L)
});

// UNUSED EXPORTS: AbiConstructorNotFoundError, AbiConstructorParamsNotFoundError, AbiDecodingDataSizeInvalidError, AbiDecodingDataSizeTooSmallError, AbiDecodingZeroDataError, AbiEncodingArrayLengthMismatchError, AbiEncodingBytesSizeMismatchError, AbiEncodingLengthMismatchError, AbiErrorInputsNotFoundError, AbiErrorNotFoundError, AbiErrorSignatureNotFoundError, AbiEventNotFoundError, AbiEventSignatureEmptyTopicsError, AbiEventSignatureNotFoundError, AbiFunctionNotFoundError, AbiFunctionOutputsNotFoundError, AbiFunctionSignatureNotFoundError, AccountStateConflictError, AtomicReadyWalletRejectedUpgradeError, AtomicityNotSupportedError, BaseError, BaseFeeScalarError, BlockNotFoundError, BundleFailedError, BundleTooLargeError, BytesSizeMismatchError, CallExecutionError, ChainDisconnectedError, ChainDoesNotSupportContract, ChainMismatchError, ChainNotFoundError, CircularReferenceError, ClientChainNotConfiguredError, ContractFunctionExecutionError, ContractFunctionRevertedError, ContractFunctionZeroDataError, CounterfactualDeploymentFailedError, DecodeLogDataMismatch, DecodeLogTopicsMismatch, DuplicateIdError, EIP1193ProviderRpcError, Eip1559FeesNotSupportedError, EnsAvatarInvalidNftUriError, EnsAvatarUnsupportedNamespaceError, EnsAvatarUriResolutionError, EnsInvalidChainIdError, EstimateGasExecutionError, ExecutionRevertedError, FeeCapTooHighError, FeeCapTooLowError, FeeConflictError, FilterTypeNotSupportedError, HttpRequestError, InsufficientFundsError, IntegerOutOfRangeError, InternalRpcError, IntrinsicGasTooHighError, IntrinsicGasTooLowError, InvalidAbiDecodingTypeError, InvalidAbiEncodingTypeError, InvalidAbiItemError, InvalidAbiParameterError, InvalidAbiParametersError, InvalidAbiTypeParameterError, InvalidAddressError, InvalidArrayError, InvalidBytesBooleanError, InvalidChainIdError, InvalidDecimalNumberError, InvalidDefinitionTypeError, InvalidDomainError, InvalidFunctionModifierError, InvalidHexBooleanError, InvalidHexValueError, InvalidInputRpcError, InvalidLegacyVError, InvalidModifierError, InvalidParameterError, InvalidParamsRpcError, InvalidParenthesisError, InvalidPrimaryTypeError, InvalidRequestRpcError, InvalidSerializableTransactionError, InvalidSerializedTransactionError, InvalidSerializedTransactionTypeError, InvalidSignatureError, InvalidStorageKeySizeError, InvalidStructSignatureError, InvalidStructTypeError, JsonRpcVersionUnsupportedError, LimitExceededRpcError, MaxFeePerGasTooLowError, MethodNotFoundRpcError, MethodNotSupportedRpcError, NonceMaxValueError, NonceTooHighError, NonceTooLowError, ParseRpcError, ProviderDisconnectedError, ProviderRpcError, RawContractError, ResourceNotFoundRpcError, ResourceUnavailableRpcError, RpcError, RpcRequestError, SizeExceedsPaddingSizeError, SizeOverflowError, SliceOffsetOutOfBoundsError, SocketClosedError, SolidityProtectedKeywordError, StateAssignmentConflictError, SwitchChainError, TimeoutError, TipAboveFeeCapError, TransactionExecutionError, TransactionNotFoundError, TransactionReceiptNotFoundError, TransactionRejectedRpcError, TransactionTypeNotSupportedError, UnauthorizedProviderError, UnknownBundleIdError, UnknownNodeError, UnknownRpcError, UnknownSignatureError, UnknownTypeError, UnsupportedChainIdError, UnsupportedNonOptionalCapabilityError, UnsupportedPackedAbiType, UnsupportedProviderMethodError, UrlRequiredError, UserRejectedRequestError, WaitForCallsStatusTimeoutError, WaitForTransactionReceiptTimeoutError, WebSocketRequestError, assertCurrentChain, assertRequest, assertTransactionEIP1559, assertTransactionEIP2930, assertTransactionLegacy, blobsToCommitments, blobsToProofs, boolToBytes, boolToHex, bytesToBigInt, bytesToBool, bytesToHex, bytesToNumber, bytesToRlp, bytesToString, ccipFetch, ccipRequest, checksumAddress, commitmentToVersionedHash, commitmentsToVersionedHashes, compactSignatureToHex, compactSignatureToSignature, concat, concatBytes, concatHex, createClient, createNonceManager, createTestClient, createTransport, createWalletClient, custom, decodeAbiParameters, decodeDeployData, decodeErrorResult, decodeEventLog, decodeFunctionData, decodeFunctionResult, defineBlock, defineKzg, defineTransaction, defineTransactionReceipt, defineTransactionRequest, deploylessCallViaBytecodeBytecode, deploylessCallViaFactoryBytecode, domainSeparator, encodeAbiParameters, encodeDeployData, encodeErrorResult, encodeEventTopics, encodeFunctionData, encodeFunctionResult, encodePacked, erc1155Abi, erc20Abi, erc20Abi_bytes32, erc4626Abi, erc6492SignatureValidatorAbi, erc6492SignatureValidatorByteCode, erc721Abi, ethAddress, etherUnits, extendSchema, extractChain, fallback, formatBlock, formatEther, formatGwei, formatLog, formatTransaction, formatTransactionReceipt, formatTransactionRequest, formatUnits, fromBlobs, fromBytes, fromHex, fromRlp, getAbiItem, getAddress, getChainContractAddress, getContract, getContractAddress, getContractError, getCreate2Address, getCreateAddress, getEventSelector, getEventSignature, getFunctionSelector, getFunctionSignature, getSerializedTransactionType, getTransactionType, getTypesForEIP712Domain, gweiUnits, hashDomain, hashMessage, hashStruct, hashTypedData, hexToBigInt, hexToBool, hexToBytes, hexToCompactSignature, hexToNumber, hexToRlp, hexToSignature, hexToString, isAddress, isAddressEqual, isBytes, isErc6492Signature, isErc8010Signature, isHash, isHex, keccak256, labelhash, maxInt104, maxInt112, maxInt120, maxInt128, maxInt136, maxInt144, maxInt152, maxInt16, maxInt160, maxInt168, maxInt176, maxInt184, maxInt192, maxInt200, maxInt208, maxInt216, maxInt224, maxInt232, maxInt24, maxInt240, maxInt248, maxInt256, maxInt32, maxInt40, maxInt48, maxInt56, maxInt64, maxInt72, maxInt8, maxInt80, maxInt88, maxInt96, maxUint104, maxUint112, maxUint120, maxUint128, maxUint136, maxUint144, maxUint152, maxUint16, maxUint160, maxUint168, maxUint176, maxUint184, maxUint192, maxUint200, maxUint208, maxUint216, maxUint224, maxUint232, maxUint24, maxUint240, maxUint248, maxUint256, maxUint32, maxUint40, maxUint48, maxUint56, maxUint64, maxUint72, maxUint8, maxUint80, maxUint88, maxUint96, minInt104, minInt112, minInt120, minInt128, minInt136, minInt144, minInt152, minInt16, minInt160, minInt168, minInt176, minInt184, minInt192, minInt200, minInt208, minInt216, minInt224, minInt232, minInt24, minInt240, minInt248, minInt256, minInt32, minInt40, minInt48, minInt56, minInt64, minInt72, minInt8, minInt80, minInt88, minInt96, multicall3Abi, namehash, nonceManager, numberToBytes, numberToHex, offchainLookup, offchainLookupAbiItem, offchainLookupSignature, pad, padBytes, padHex, parseAbi, parseAbiItem, parseAbiParameter, parseAbiParameters, parseCompactSignature, parseErc6492Signature, parseErc8010Signature, parseEther, parseEventLogs, parseGwei, parseSignature, parseTransaction, parseUnits, prepareEncodeFunctionData, presignMessagePrefix, publicActions, recoverAddress, recoverMessageAddress, recoverPublicKey, recoverTransactionAddress, recoverTypedDataAddress, ripemd160, rpcSchema, rpcTransactionType, serializeAccessList, serializeCompactSignature, serializeErc6492Signature, serializeErc8010Signature, serializeSignature, serializeTransaction, serializeTypedData, setErrorConfig, setupKzg, sha256, shouldThrow, sidecarsToVersionedHashes, signatureToCompactSignature, signatureToHex, size, slice, sliceBytes, sliceHex, stringToBytes, stringToHex, stringify, testActions, toBlobSidecars, toBlobs, toBytes, toCoinType, toEventHash, toEventSelector, toEventSignature, toFunctionHash, toFunctionSelector, toFunctionSignature, toHex, toPrefixedMessage, toRlp, transactionType, trim, universalSignatureValidatorAbi, universalSignatureValidatorByteCode, validateTypedData, verifyHash, verifyMessage, verifyTypedData, walletActions, webSocket, weiUnits, withCache, withRetry, withTimeout, zeroAddress, zeroHash

// EXTERNAL MODULE: ./node_modules/viem/_esm/accounts/utils/parseAccount.js
var parseAccount = __webpack_require__(413033);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/uid.js
var uid = __webpack_require__(753204);
;// ./node_modules/viem/_esm/clients/createClient.js


function createClient(parameters) {
    const { batch, chain, ccipRead, key = 'base', name = 'Base Client', type = 'base', } = parameters;
    const experimental_blockTag = parameters.experimental_blockTag ??
        (typeof chain?.experimental_preconfirmationTime === 'number'
            ? 'pending'
            : undefined);
    const blockTime = chain?.blockTime ?? 12_000;
    const defaultPollingInterval = Math.min(Math.max(Math.floor(blockTime / 2), 500), 4_000);
    const pollingInterval = parameters.pollingInterval ?? defaultPollingInterval;
    const cacheTime = parameters.cacheTime ?? pollingInterval;
    const account = parameters.account
        ? (0,parseAccount/* parseAccount */.J)(parameters.account)
        : undefined;
    const { config, request, value } = parameters.transport({
        account,
        chain,
        pollingInterval,
    });
    const transport = { ...config, ...value };
    const client = {
        account,
        batch,
        cacheTime,
        ccipRead,
        chain,
        key,
        name,
        pollingInterval,
        request,
        transport,
        type,
        uid: (0,uid/* uid */.L)(),
        ...(experimental_blockTag ? { experimental_blockTag } : {}),
    };
    function extend(base) {
        return (extendFn) => {
            const extended = extendFn(base);
            for (const key in client)
                delete extended[key];
            const combined = { ...base, ...extended };
            return Object.assign(combined, { extend: extend(combined) });
        };
    }
    return Object.assign(client, { extend: extend(client) });
}
/**
 * Defines a typed JSON-RPC schema for the client.
 * Note: This is a runtime noop function.
 */
function rpcSchema() {
    return null;
}
//# sourceMappingURL=createClient.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/constants/abis.js
var abis = __webpack_require__(194823);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeFunctionResult.js
var decodeFunctionResult = __webpack_require__(446652);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeFunctionData.js + 1 modules
var encodeFunctionData = __webpack_require__(277330);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/chain/getChainContractAddress.js
var getChainContractAddress = __webpack_require__(969985);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/trim.js
var trim = __webpack_require__(38583);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(584192);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(345765);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/contract.js + 1 modules
var contract = __webpack_require__(453513);
;// ./node_modules/viem/_esm/utils/ens/errors.js


/*
 * @description Checks if error is a valid null result UniversalResolver error
 */
function isNullUniversalResolverError(err) {
    if (!(err instanceof base/* BaseError */.C))
        return false;
    const cause = err.walk((e) => e instanceof contract/* ContractFunctionRevertedError */.M);
    if (!(cause instanceof contract/* ContractFunctionRevertedError */.M))
        return false;
    if (cause.data?.errorName === 'HttpError')
        return true;
    if (cause.data?.errorName === 'ResolverError')
        return true;
    if (cause.data?.errorName === 'ResolverNotContract')
        return true;
    if (cause.data?.errorName === 'ResolverNotFound')
        return true;
    if (cause.data?.errorName === 'ReverseAddressMismatch')
        return true;
    if (cause.data?.errorName === 'UnsupportedResolverProfile')
        return true;
    return false;
}
//# sourceMappingURL=errors.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js + 3 modules
var localBatchGatewayRequest = __webpack_require__(85504);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toBytes.js
var toBytes = __webpack_require__(644706);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/keccak256.js
var keccak256 = __webpack_require__(282040);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/isHex.js
var isHex = __webpack_require__(646394);
;// ./node_modules/viem/_esm/utils/ens/encodedLabelToLabelhash.js

function encodedLabelToLabelhash(label) {
    if (label.length !== 66)
        return null;
    if (label.indexOf('[') !== 0)
        return null;
    if (label.indexOf(']') !== 65)
        return null;
    const hash = `0x${label.slice(1, 65)}`;
    if (!(0,isHex/* isHex */.q)(hash))
        return null;
    return hash;
}
//# sourceMappingURL=encodedLabelToLabelhash.js.map
;// ./node_modules/viem/_esm/utils/ens/namehash.js





/**
 * @description Hashes ENS name
 *
 * - Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `namehash`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @example
 * namehash('wevm.eth')
 * '0x08c85f2f4059e930c45a6aeff9dcd3bd95dc3c5c1cddef6a0626b31152248560'
 *
 * @link https://eips.ethereum.org/EIPS/eip-137
 */
function namehash(name) {
    let result = new Uint8Array(32).fill(0);
    if (!name)
        return (0,toHex/* bytesToHex */.My)(result);
    const labels = name.split('.');
    // Iterate in reverse order building up hash
    for (let i = labels.length - 1; i >= 0; i -= 1) {
        const hashFromEncodedLabel = encodedLabelToLabelhash(labels[i]);
        const hashed = hashFromEncodedLabel
            ? (0,toBytes/* toBytes */.ZJ)(hashFromEncodedLabel)
            : (0,keccak256/* keccak256 */.S)((0,toBytes/* stringToBytes */.Af)(labels[i]), 'bytes');
        result = (0,keccak256/* keccak256 */.S)((0,concat/* concat */.xW)([result, hashed]), 'bytes');
    }
    return (0,toHex/* bytesToHex */.My)(result);
}
//# sourceMappingURL=namehash.js.map
;// ./node_modules/viem/_esm/utils/ens/encodeLabelhash.js
function encodeLabelhash(hash) {
    return `[${hash.slice(2)}]`;
}
//# sourceMappingURL=encodeLabelhash.js.map
;// ./node_modules/viem/_esm/utils/ens/labelhash.js




/**
 * @description Hashes ENS label
 *
 * - Since ENS labels prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS labels](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `labelhash`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @example
 * labelhash('eth')
 * '0x4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0'
 */
function labelhash(label) {
    const result = new Uint8Array(32).fill(0);
    if (!label)
        return (0,toHex/* bytesToHex */.My)(result);
    return encodedLabelToLabelhash(label) || (0,keccak256/* keccak256 */.S)((0,toBytes/* stringToBytes */.Af)(label));
}
//# sourceMappingURL=labelhash.js.map
;// ./node_modules/viem/_esm/utils/ens/packetToBytes.js



/*
 * @description Encodes a DNS packet into a ByteArray containing a UDP payload.
 *
 * @example
 * packetToBytes('awkweb.eth')
 * '0x0661776b7765620365746800'
 *
 * @see https://docs.ens.domains/resolution/names#dns
 *
 */
function packetToBytes(packet) {
    // strip leading and trailing `.`
    const value = packet.replace(/^\.|\.$/gm, '');
    if (value.length === 0)
        return new Uint8Array(1);
    const bytes = new Uint8Array((0,toBytes/* stringToBytes */.Af)(value).byteLength + 2);
    let offset = 0;
    const list = value.split('.');
    for (let i = 0; i < list.length; i++) {
        let encoded = (0,toBytes/* stringToBytes */.Af)(list[i]);
        // if the length is > 255, make the encoded label value a labelhash
        // this is compatible with the universal resolver
        if (encoded.byteLength > 255)
            encoded = (0,toBytes/* stringToBytes */.Af)(encodeLabelhash(labelhash(list[i])));
        bytes[offset] = encoded.length;
        bytes.set(encoded, offset + 1);
        offset += encoded.length + 1;
    }
    if (bytes.byteLength !== offset + 1)
        return bytes.slice(0, offset + 1);
    return bytes;
}
//# sourceMappingURL=packetToBytes.js.map
;// ./node_modules/viem/_esm/utils/getAction.js
/**
 * Retrieves and returns an action from the client (if exists), and falls
 * back to the tree-shakable action.
 *
 * Useful for extracting overridden actions from a client (ie. if a consumer
 * wants to override the `sendTransaction` implementation).
 */
function getAction(client, actionFn, 
// Some minifiers drop `Function.prototype.name`, or replace it with short letters,
// meaning that `actionFn.name` will not always work. For that case, the consumer
// needs to pass the name explicitly.
name) {
    const action_implicit = client[actionFn.name];
    if (typeof action_implicit === 'function')
        return action_implicit;
    const action_explicit = client[name];
    if (typeof action_explicit === 'function')
        return action_explicit;
    return (params) => actionFn(client, params);
}
//# sourceMappingURL=getAction.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/abi.js
var errors_abi = __webpack_require__(137372);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/request.js
var request = __webpack_require__(176595);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/rpc.js
var rpc = __webpack_require__(727513);
;// ./node_modules/viem/_esm/utils/errors/getContractError.js





const EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender, }) {
    const error = (err instanceof contract/* RawContractError */.$S
        ? err
        : err instanceof base/* BaseError */.C
            ? err.walk((err) => 'data' in err) || err.walk()
            : {});
    const { code, data, details, message, shortMessage } = error;
    const cause = (() => {
        if (err instanceof errors_abi/* AbiDecodingZeroDataError */.O)
            return new contract/* ContractFunctionZeroDataError */.rR({ functionName });
        if (([EXECUTION_REVERTED_ERROR_CODE, rpc/* InternalRpcError */.bq.code].includes(code) &&
            (data || details || message || shortMessage)) ||
            (code === rpc/* InvalidInputRpcError */.Di.code &&
                details === 'execution reverted' &&
                data)) {
            return new contract/* ContractFunctionRevertedError */.M({
                abi,
                data: typeof data === 'object' ? data.data : data,
                functionName,
                message: error instanceof request/* RpcRequestError */.J8
                    ? details
                    : (shortMessage ?? message),
            });
        }
        return err;
    })();
    return new contract/* ContractFunctionExecutionError */.bG(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender,
    });
}
//# sourceMappingURL=getContractError.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/call.js + 2 modules
var call = __webpack_require__(477281);
;// ./node_modules/viem/_esm/actions/public/readContract.js





/**
 * Calls a read-only function on a contract, and returns the response.
 *
 * - Docs: https://viem.sh/docs/contract/readContract
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_reading-contracts
 *
 * A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).
 *
 * @param client - Client to use
 * @param parameters - {@link ReadContractParameters}
 * @returns The response from the contract. Type is inferred. {@link ReadContractReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { readContract } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const result = await readContract(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
 *   functionName: 'balanceOf',
 *   args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
 * })
 * // 424122n
 */
async function readContract(client, parameters) {
    const { abi, address, args, functionName, ...rest } = parameters;
    const calldata = (0,encodeFunctionData/* encodeFunctionData */.p)({
        abi,
        args,
        functionName,
    });
    try {
        const { data } = await getAction(client, call/* call */.T, 'call')({
            ...rest,
            data: calldata,
            to: address,
        });
        return (0,decodeFunctionResult/* decodeFunctionResult */.e)({
            abi,
            args,
            functionName,
            data: data || '0x',
        });
    }
    catch (error) {
        throw getContractError(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/readContract',
            functionName,
        });
    }
}
//# sourceMappingURL=readContract.js.map
;// ./node_modules/viem/_esm/actions/ens/getEnsAddress.js












/**
 * Gets address for ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsAddress
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsAddressParameters}
 * @returns Address for ENS name or `null` if not found. {@link GetEnsAddressReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsAddress, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensAddress = await getEnsAddress(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // '0xd2135CfB216b74109775236E36d4b433F1DF507B'
 */
async function getEnsAddress(client, parameters) {
    const { blockNumber, blockTag, coinType, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (() => {
        if (parameters.universalResolverAddress)
            return parameters.universalResolverAddress;
        if (!chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0,getChainContractAddress/* getChainContractAddress */.M)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver',
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld) => name.endsWith(tld)))
        return null;
    const args = (() => {
        if (coinType != null)
            return [namehash(name), BigInt(coinType)];
        return [namehash(name)];
    })();
    try {
        const functionData = (0,encodeFunctionData/* encodeFunctionData */.p)({
            abi: abis/* addressResolverAbi */.Rm,
            functionName: 'addr',
            args,
        });
        const readContractParameters = {
            address: universalResolverAddress,
            abi: abis/* universalResolverResolveAbi */.Ag,
            functionName: 'resolveWithGateways',
            args: [
                (0,toHex/* toHex */.nj)(packetToBytes(name)),
                functionData,
                gatewayUrls ?? [localBatchGatewayRequest/* localBatchGatewayUrl */.J],
            ],
            blockNumber,
            blockTag,
        };
        const readContractAction = getAction(client, readContract, 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x')
            return null;
        const address = (0,decodeFunctionResult/* decodeFunctionResult */.e)({
            abi: abis/* addressResolverAbi */.Rm,
            args,
            functionName: 'addr',
            data: res[0],
        });
        if (address === '0x')
            return null;
        if ((0,trim/* trim */.B)(address) === '0x00')
            return null;
        return address;
    }
    catch (err) {
        if (strict)
            throw err;
        if (isNullUniversalResolverError(err))
            return null;
        throw err;
    }
}
//# sourceMappingURL=getEnsAddress.js.map
;// ./node_modules/viem/_esm/errors/ens.js

class EnsAvatarInvalidMetadataError extends base/* BaseError */.C {
    constructor({ data }) {
        super('Unable to extract image from metadata. The metadata may be malformed or invalid.', {
            metaMessages: [
                '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
                '',
                `Provided data: ${JSON.stringify(data)}`,
            ],
            name: 'EnsAvatarInvalidMetadataError',
        });
    }
}
class EnsAvatarInvalidNftUriError extends base/* BaseError */.C {
    constructor({ reason }) {
        super(`ENS NFT avatar URI is invalid. ${reason}`, {
            name: 'EnsAvatarInvalidNftUriError',
        });
    }
}
class EnsAvatarUriResolutionError extends base/* BaseError */.C {
    constructor({ uri }) {
        super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: 'EnsAvatarUriResolutionError' });
    }
}
class EnsAvatarUnsupportedNamespaceError extends base/* BaseError */.C {
    constructor({ namespace }) {
        super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`, { name: 'EnsAvatarUnsupportedNamespaceError' });
    }
}
class EnsInvalidChainIdError extends base/* BaseError */.C {
    constructor({ chainId }) {
        super(`Invalid ENSIP-11 chainId: ${chainId}. Must be between 0 and 0x7fffffff, or 1.`, {
            name: 'EnsInvalidChainIdError',
        });
    }
}
//# sourceMappingURL=ens.js.map
;// ./node_modules/viem/_esm/utils/ens/avatar/utils.js


const networkRegex = /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
const ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
const base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
const dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
/** @internal */
async function isImageUri(uri) {
    try {
        const res = await fetch(uri, { method: 'HEAD' });
        // retrieve content type header to check if content is image
        if (res.status === 200) {
            const contentType = res.headers.get('content-type');
            return contentType?.startsWith('image/');
        }
        return false;
    }
    catch (error) {
        // if error is not cors related then fail
        if (typeof error === 'object' && typeof error.response !== 'undefined') {
            return false;
        }
        // fail in NodeJS, since the error is not cors but any other network issue
        if (!Object.hasOwn(globalThis, 'Image'))
            return false;
        // in case of cors, use image api to validate if given url is an actual image
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                resolve(true);
            };
            img.onerror = () => {
                resolve(false);
            };
            img.src = uri;
        });
    }
}
/** @internal */
function getGateway(custom, defaultGateway) {
    if (!custom)
        return defaultGateway;
    if (custom.endsWith('/'))
        return custom.slice(0, -1);
    return custom;
}
function resolveAvatarUri({ uri, gatewayUrls, }) {
    const isEncoded = base64Regex.test(uri);
    if (isEncoded)
        return { uri, isOnChain: true, isEncoded };
    const ipfsGateway = getGateway(gatewayUrls?.ipfs, 'https://ipfs.io');
    const arweaveGateway = getGateway(gatewayUrls?.arweave, 'https://arweave.net');
    const networkRegexMatch = uri.match(networkRegex);
    const { protocol, subpath, target, subtarget = '', } = networkRegexMatch?.groups || {};
    const isIPNS = protocol === 'ipns:/' || subpath === 'ipns/';
    const isIPFS = protocol === 'ipfs:/' || subpath === 'ipfs/' || ipfsHashRegex.test(uri);
    if (uri.startsWith('http') && !isIPNS && !isIPFS) {
        let replacedUri = uri;
        if (gatewayUrls?.arweave)
            replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
        return { uri: replacedUri, isOnChain: false, isEncoded: false };
    }
    if ((isIPNS || isIPFS) && target) {
        return {
            uri: `${ipfsGateway}/${isIPNS ? 'ipns' : 'ipfs'}/${target}${subtarget}`,
            isOnChain: false,
            isEncoded: false,
        };
    }
    if (protocol === 'ar:/' && target) {
        return {
            uri: `${arweaveGateway}/${target}${subtarget || ''}`,
            isOnChain: false,
            isEncoded: false,
        };
    }
    let parsedUri = uri.replace(dataURIRegex, '');
    if (parsedUri.startsWith('<svg')) {
        // if svg, base64 encode
        parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
    }
    if (parsedUri.startsWith('data:') || parsedUri.startsWith('{')) {
        return {
            uri: parsedUri,
            isOnChain: true,
            isEncoded: false,
        };
    }
    throw new EnsAvatarUriResolutionError({ uri });
}
function getJsonImage(data) {
    // validation check for json data, must include one of theses properties
    if (typeof data !== 'object' ||
        (!('image' in data) && !('image_url' in data) && !('image_data' in data))) {
        throw new EnsAvatarInvalidMetadataError({ data });
    }
    return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri, }) {
    try {
        const res = await fetch(uri).then((res) => res.json());
        const image = await parseAvatarUri({
            gatewayUrls,
            uri: getJsonImage(res),
        });
        return image;
    }
    catch {
        throw new EnsAvatarUriResolutionError({ uri });
    }
}
async function parseAvatarUri({ gatewayUrls, uri, }) {
    const { uri: resolvedURI, isOnChain } = resolveAvatarUri({ uri, gatewayUrls });
    if (isOnChain)
        return resolvedURI;
    // check if resolvedURI is an image, if it is return the url
    const isImage = await isImageUri(resolvedURI);
    if (isImage)
        return resolvedURI;
    throw new EnsAvatarUriResolutionError({ uri });
}
function parseNftUri(uri_) {
    let uri = uri_;
    // parse valid nft spec (CAIP-22/CAIP-29)
    // @see: https://github.com/ChainAgnostic/CAIPs/tree/master/CAIPs
    if (uri.startsWith('did:nft:')) {
        // convert DID to CAIP
        uri = uri.replace('did:nft:', '').replace(/_/g, '/');
    }
    const [reference, asset_namespace, tokenID] = uri.split('/');
    const [eip_namespace, chainID] = reference.split(':');
    const [erc_namespace, contractAddress] = asset_namespace.split(':');
    if (!eip_namespace || eip_namespace.toLowerCase() !== 'eip155')
        throw new EnsAvatarInvalidNftUriError({ reason: 'Only EIP-155 supported' });
    if (!chainID)
        throw new EnsAvatarInvalidNftUriError({ reason: 'Chain ID not found' });
    if (!contractAddress)
        throw new EnsAvatarInvalidNftUriError({
            reason: 'Contract address not found',
        });
    if (!tokenID)
        throw new EnsAvatarInvalidNftUriError({ reason: 'Token ID not found' });
    if (!erc_namespace)
        throw new EnsAvatarInvalidNftUriError({ reason: 'ERC namespace not found' });
    return {
        chainID: Number.parseInt(chainID, 10),
        namespace: erc_namespace.toLowerCase(),
        contractAddress: contractAddress,
        tokenID,
    };
}
async function getNftTokenUri(client, { nft }) {
    if (nft.namespace === 'erc721') {
        return readContract(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'tokenURI',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ name: 'tokenId', type: 'uint256' }],
                    outputs: [{ name: '', type: 'string' }],
                },
            ],
            functionName: 'tokenURI',
            args: [BigInt(nft.tokenID)],
        });
    }
    if (nft.namespace === 'erc1155') {
        return readContract(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'uri',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ name: '_id', type: 'uint256' }],
                    outputs: [{ name: '', type: 'string' }],
                },
            ],
            functionName: 'uri',
            args: [BigInt(nft.tokenID)],
        });
    }
    throw new EnsAvatarUnsupportedNamespaceError({ namespace: nft.namespace });
}
//# sourceMappingURL=utils.js.map
;// ./node_modules/viem/_esm/utils/ens/avatar/parseAvatarRecord.js

/*
 * @description Parses an ENS avatar record.
 *
 * @example
 * parseAvatarRecord('eip155:1/erc1155:0xb32979486938aa9694bfc898f35dbed459f44424/10063')
 * 'https://ipfs.io/ipfs/QmSP4nq9fnN9dAiCj42ug9Wa79rqmQerZXZch82VqpiH7U/image.gif'
 *
 * @see https://docs.ens.domains/web/avatars
 *
 */
async function parseAvatarRecord(client, { gatewayUrls, record, }) {
    if (/eip155:/i.test(record))
        return parseNftAvatarUri(client, { gatewayUrls, record });
    return parseAvatarUri({ uri: record, gatewayUrls });
}
async function parseNftAvatarUri(client, { gatewayUrls, record, }) {
    // parse NFT URI into properties
    const nft = parseNftUri(record);
    // fetch tokenURI from the NFT contract
    const nftUri = await getNftTokenUri(client, { nft });
    // resolve the URI from the fetched tokenURI
    const { uri: resolvedNftUri, isOnChain, isEncoded, } = resolveAvatarUri({ uri: nftUri, gatewayUrls });
    // if the resolved URI is on chain, return the data
    if (isOnChain &&
        (resolvedNftUri.includes('data:application/json;base64,') ||
            resolvedNftUri.startsWith('{'))) {
        const encodedJson = isEncoded
            ? // if it is encoded, decode it
                atob(resolvedNftUri.replace('data:application/json;base64,', ''))
            : // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
                resolvedNftUri;
        const decoded = JSON.parse(encodedJson);
        return parseAvatarUri({ uri: getJsonImage(decoded), gatewayUrls });
    }
    let uriTokenId = nft.tokenID;
    if (nft.namespace === 'erc1155')
        uriTokenId = uriTokenId.replace('0x', '').padStart(64, '0');
    return getMetadataAvatarUri({
        gatewayUrls,
        uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId),
    });
}
//# sourceMappingURL=parseAvatarRecord.js.map
;// ./node_modules/viem/_esm/actions/ens/getEnsText.js











/**
 * Gets a text record for specified ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsResolver
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsTextParameters}
 * @returns Address for ENS resolver. {@link GetEnsTextReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsText, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const twitterRecord = await getEnsText(client, {
 *   name: normalize('wevm.eth'),
 *   key: 'com.twitter',
 * })
 * // 'wevm_dev'
 */
async function getEnsText(client, parameters) {
    const { blockNumber, blockTag, key, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (() => {
        if (parameters.universalResolverAddress)
            return parameters.universalResolverAddress;
        if (!chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0,getChainContractAddress/* getChainContractAddress */.M)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver',
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld) => name.endsWith(tld)))
        return null;
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: abis/* universalResolverResolveAbi */.Ag,
            args: [
                (0,toHex/* toHex */.nj)(packetToBytes(name)),
                (0,encodeFunctionData/* encodeFunctionData */.p)({
                    abi: abis/* textResolverAbi */.SJ,
                    functionName: 'text',
                    args: [namehash(name), key],
                }),
                gatewayUrls ?? [localBatchGatewayRequest/* localBatchGatewayUrl */.J],
            ],
            functionName: 'resolveWithGateways',
            blockNumber,
            blockTag,
        };
        const readContractAction = getAction(client, readContract, 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x')
            return null;
        const record = (0,decodeFunctionResult/* decodeFunctionResult */.e)({
            abi: abis/* textResolverAbi */.SJ,
            functionName: 'text',
            data: res[0],
        });
        return record === '' ? null : record;
    }
    catch (err) {
        if (strict)
            throw err;
        if (isNullUniversalResolverError(err))
            return null;
        throw err;
    }
}
//# sourceMappingURL=getEnsText.js.map
;// ./node_modules/viem/_esm/actions/ens/getEnsAvatar.js



/**
 * Gets the avatar of an ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsAvatar
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls [`getEnsText`](https://viem.sh/docs/ens/actions/getEnsText) with `key` set to `'avatar'`.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsAvatarParameters}
 * @returns Avatar URI or `null` if not found. {@link GetEnsAvatarReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsAvatar, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensAvatar = await getEnsAvatar(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // 'https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio'
 */
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress, }) {
    const record = await getAction(client, getEnsText, 'getEnsText')({
        blockNumber,
        blockTag,
        key: 'avatar',
        name,
        universalResolverAddress,
        gatewayUrls,
        strict,
    });
    if (!record)
        return null;
    try {
        return await parseAvatarRecord(client, {
            record,
            gatewayUrls: assetGatewayUrls,
        });
    }
    catch {
        return null;
    }
}
//# sourceMappingURL=getEnsAvatar.js.map
;// ./node_modules/viem/_esm/actions/ens/getEnsName.js






/**
 * Gets primary name for specified address.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsName
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `reverse(bytes)` on ENS Universal Resolver Contract to "reverse resolve" the address to the primary ENS name.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsNameParameters}
 * @returns Name or `null` if not found. {@link GetEnsNameReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsName } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensName = await getEnsName(client, {
 *   address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 * })
 * // 'wevm.eth'
 */
async function getEnsName(client, parameters) {
    const { address, blockNumber, blockTag, coinType = 60n, gatewayUrls, strict, } = parameters;
    const { chain } = client;
    const universalResolverAddress = (() => {
        if (parameters.universalResolverAddress)
            return parameters.universalResolverAddress;
        if (!chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0,getChainContractAddress/* getChainContractAddress */.M)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver',
        });
    })();
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: abis/* universalResolverReverseAbi */.oX,
            args: [address, coinType, gatewayUrls ?? [localBatchGatewayRequest/* localBatchGatewayUrl */.J]],
            functionName: 'reverseWithGateways',
            blockNumber,
            blockTag,
        };
        const readContractAction = getAction(client, readContract, 'readContract');
        const [name] = await readContractAction(readContractParameters);
        return name || null;
    }
    catch (err) {
        if (strict)
            throw err;
        if (isNullUniversalResolverError(err))
            return null;
        throw err;
    }
}
//# sourceMappingURL=getEnsName.js.map
;// ./node_modules/viem/_esm/actions/ens/getEnsResolver.js





/**
 * Gets resolver for ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsResolver
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `findResolver(bytes)` on ENS Universal Resolver Contract to retrieve the resolver of an ENS name.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsResolverParameters}
 * @returns Address for ENS resolver. {@link GetEnsResolverReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsResolver, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const resolverAddress = await getEnsResolver(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41'
 */
async function getEnsResolver(client, parameters) {
    const { blockNumber, blockTag, name } = parameters;
    const { chain } = client;
    const universalResolverAddress = (() => {
        if (parameters.universalResolverAddress)
            return parameters.universalResolverAddress;
        if (!chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0,getChainContractAddress/* getChainContractAddress */.M)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver',
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld) => name.endsWith(tld)))
        throw new Error(`${name} is not a valid ENS TLD (${tlds?.join(', ')}) for chain "${chain.name}" (id: ${chain.id}).`);
    const [resolverAddress] = await getAction(client, readContract, 'readContract')({
        address: universalResolverAddress,
        abi: [
            {
                inputs: [{ type: 'bytes' }],
                name: 'findResolver',
                outputs: [
                    { type: 'address' },
                    { type: 'bytes32' },
                    { type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
        ],
        functionName: 'findResolver',
        args: [(0,toHex/* toHex */.nj)(packetToBytes(name))],
        blockNumber,
        blockTag,
    });
    return resolverAddress;
}
//# sourceMappingURL=getEnsResolver.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/errors/getCallError.js
var getCallError = __webpack_require__(638684);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/formatters/extract.js
var extract = __webpack_require__(699789);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/formatters/transactionRequest.js
var transactionRequest = __webpack_require__(857671);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/transaction/assertRequest.js + 1 modules
var assertRequest = __webpack_require__(664055);
;// ./node_modules/viem/_esm/actions/public/createAccessList.js






/**
 * Creates an EIP-2930 access list.
 *
 * - Docs: https://viem.sh/docs/actions/public/createAccessList
 * - JSON-RPC Methods: `eth_createAccessList`
 *
 * @param client - Client to use
 * @param parameters - {@link CreateAccessListParameters}
 * @returns The access list. {@link CreateAccessListReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createAccessList } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const data = await createAccessList(client, {
 *   account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 *   data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 * })
 */
async function createAccessList(client, args) {
    const { account: account_ = client.account, blockNumber, blockTag = 'latest', blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value, ...rest } = args;
    const account = account_ ? (0,parseAccount/* parseAccount */.J)(account_) : undefined;
    try {
        (0,assertRequest/* assertRequest */.c)(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest/* formatTransactionRequest */.Bv;
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0,extract/* extract */.o)(rest, { format: chainFormat }),
            account,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            to,
            value,
        }, 'createAccessList');
        const response = await client.request({
            method: 'eth_createAccessList',
            params: [request, block],
        });
        return {
            accessList: response.accessList,
            gasUsed: BigInt(response.gasUsed),
        };
    }
    catch (err) {
        throw (0,getCallError/* getCallError */.d)(err, {
            ...args,
            account,
            chain: client.chain,
        });
    }
}
//# sourceMappingURL=createAccessList.js.map
;// ./node_modules/viem/_esm/utils/filters/createFilterRequestScope.js
/**
 * Scopes `request` to the filter ID. If the client is a fallback, it will
 * listen for responses and scope the child transport `request` function
 * to the successful filter ID.
 */
function createFilterRequestScope(client, { method }) {
    const requestMap = {};
    if (client.transport.type === 'fallback')
        client.transport.onResponse?.(({ method: method_, response: id, status, transport, }) => {
            if (status === 'success' && method === method_)
                requestMap[id] = transport.request;
        });
    return ((id) => requestMap[id] || client.request);
}
//# sourceMappingURL=createFilterRequestScope.js.map
;// ./node_modules/viem/_esm/actions/public/createBlockFilter.js

/**
 * Creates a [`Filter`](https://viem.sh/docs/glossary/types#filter) to listen for new block hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).
 *
 * - Docs: https://viem.sh/docs/actions/public/createBlockFilter
 * - JSON-RPC Methods: [`eth_newBlockFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newBlockFilter)
 *
 * @param client - Client to use
 * @returns [`Filter`](https://viem.sh/docs/glossary/types#filter). {@link CreateBlockFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createBlockFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createBlockFilter(client)
 * // { id: "0x345a6572337856574a76364e457a4366", type: 'block' }
 */
async function createBlockFilter(client) {
    const getRequest = createFilterRequestScope(client, {
        method: 'eth_newBlockFilter',
    });
    const id = await client.request({
        method: 'eth_newBlockFilter',
    });
    return { id, request: getRequest(id), type: 'block' };
}
//# sourceMappingURL=createBlockFilter.js.map
;// ./node_modules/viem/_esm/errors/log.js

class FilterTypeNotSupportedError extends base/* BaseError */.C {
    constructor(type) {
        super(`Filter type "${type}" is not supported.`, {
            name: 'FilterTypeNotSupportedError',
        });
    }
}
//# sourceMappingURL=log.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/toEventSelector.js
var toEventSelector = __webpack_require__(809777);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/formatAbiItem.js
var formatAbiItem = __webpack_require__(895167);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/getAbiItem.js
var getAbiItem = __webpack_require__(284586);
;// ./node_modules/viem/_esm/utils/abi/encodeEventTopics.js








const docsPath = '/docs/contract/encodeEventTopics';
function encodeEventTopics(parameters) {
    const { abi, eventName, args } = parameters;
    let abiItem = abi[0];
    if (eventName) {
        const item = (0,getAbiItem/* getAbiItem */.iY)({ abi, name: eventName });
        if (!item)
            throw new errors_abi/* AbiEventNotFoundError */.M_(eventName, { docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'event')
        throw new errors_abi/* AbiEventNotFoundError */.M_(undefined, { docsPath });
    const definition = (0,formatAbiItem/* formatAbiItem */.B)(abiItem);
    const signature = (0,toEventSelector/* toEventSelector */.h)(definition);
    let topics = [];
    if (args && 'inputs' in abiItem) {
        const indexedInputs = abiItem.inputs?.filter((param) => 'indexed' in param && param.indexed);
        const args_ = Array.isArray(args)
            ? args
            : Object.values(args).length > 0
                ? (indexedInputs?.map((x) => args[x.name]) ?? [])
                : [];
        if (args_.length > 0) {
            topics =
                indexedInputs?.map((param, i) => {
                    if (Array.isArray(args_[i]))
                        return args_[i].map((_, j) => encodeArg({ param, value: args_[i][j] }));
                    return typeof args_[i] !== 'undefined' && args_[i] !== null
                        ? encodeArg({ param, value: args_[i] })
                        : null;
                }) ?? [];
        }
    }
    return [signature, ...topics];
}
function encodeArg({ param, value, }) {
    if (param.type === 'string' || param.type === 'bytes')
        return (0,keccak256/* keccak256 */.S)((0,toBytes/* toBytes */.ZJ)(value));
    if (param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/))
        throw new FilterTypeNotSupportedError(param.type);
    return (0,encodeAbiParameters/* encodeAbiParameters */.h)([param], [value]);
}
//# sourceMappingURL=encodeEventTopics.js.map
;// ./node_modules/viem/_esm/actions/public/createContractEventFilter.js



/**
 * Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs).
 *
 * - Docs: https://viem.sh/docs/contract/createContractEventFilter
 *
 * @param client - Client to use
 * @param parameters - {@link CreateContractEventFilterParameters}
 * @returns [`Filter`](https://viem.sh/docs/glossary/types#filter). {@link CreateContractEventFilterReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createContractEventFilter } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createContractEventFilter(client, {
 *   abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
 * })
 */
async function createContractEventFilter(client, parameters) {
    const { address, abi, args, eventName, fromBlock, strict, toBlock } = parameters;
    const getRequest = createFilterRequestScope(client, {
        method: 'eth_newFilter',
    });
    const topics = eventName
        ? encodeEventTopics({
            abi,
            args,
            eventName,
        })
        : undefined;
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0,toHex/* numberToHex */.cK)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0,toHex/* numberToHex */.cK)(toBlock) : toBlock,
                topics,
            },
        ],
    });
    return {
        abi,
        args,
        eventName,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        type: 'event',
    };
}
//# sourceMappingURL=createContractEventFilter.js.map
;// ./node_modules/viem/_esm/actions/public/createEventFilter.js



/**
 * Creates a [`Filter`](https://viem.sh/docs/glossary/types#filter) to listen for new events that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).
 *
 * - Docs: https://viem.sh/docs/actions/public/createEventFilter
 * - JSON-RPC Methods: [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)
 *
 * @param client - Client to use
 * @param parameters - {@link CreateEventFilterParameters}
 * @returns [`Filter`](https://viem.sh/docs/glossary/types#filter). {@link CreateEventFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xfba3912ca04dd458c843e2ee08967fc04f3579c2',
 * })
 */
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock, } = {}) {
    const events = events_ ?? (event ? [event] : undefined);
    const getRequest = createFilterRequestScope(client, {
        method: 'eth_newFilter',
    });
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event) => encodeEventTopics({
            abi: [event],
            eventName: event.name,
            args,
        }));
        // TODO: Clean up type casting
        topics = [encoded];
        if (event)
            topics = topics[0];
    }
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0,toHex/* numberToHex */.cK)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0,toHex/* numberToHex */.cK)(toBlock) : toBlock,
                ...(topics.length ? { topics } : {}),
            },
        ],
    });
    return {
        abi: events,
        args,
        eventName: event ? event.name : undefined,
        fromBlock,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        toBlock,
        type: 'event',
    };
}
//# sourceMappingURL=createEventFilter.js.map
;// ./node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js

/**
 * Creates a Filter to listen for new pending transaction hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).
 *
 * - Docs: https://viem.sh/docs/actions/public/createPendingTransactionFilter
 * - JSON-RPC Methods: [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter)
 *
 * @param client - Client to use
 * @returns [`Filter`](https://viem.sh/docs/glossary/types#filter). {@link CreateBlockFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createPendingTransactionFilter(client)
 * // { id: "0x345a6572337856574a76364e457a4366", type: 'transaction' }
 */
async function createPendingTransactionFilter(client) {
    const getRequest = createFilterRequestScope(client, {
        method: 'eth_newPendingTransactionFilter',
    });
    const id = await client.request({
        method: 'eth_newPendingTransactionFilter',
    });
    return { id, request: getRequest(id), type: 'transaction' };
}
//# sourceMappingURL=createPendingTransactionFilter.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/getAddress.js
var getAddress = __webpack_require__(964569);
;// ./node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js


/**
 * @description Converts an ECDSA public key to an address.
 *
 * @param publicKey The public key to convert.
 *
 * @returns The address.
 */
function publicKeyToAddress(publicKey) {
    const address = (0,keccak256/* keccak256 */.S)(`0x${publicKey.substring(4)}`).substring(26);
    return (0,getAddress/* checksumAddress */.o)(`0x${address}`);
}
//# sourceMappingURL=publicKeyToAddress.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/size.js
var size = __webpack_require__(885182);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/fromHex.js
var fromHex = __webpack_require__(6675);
;// ./node_modules/viem/_esm/utils/signature/recoverPublicKey.js




async function recoverPublicKey({ hash, signature, }) {
    const hashHex = (0,isHex/* isHex */.q)(hash) ? hash : (0,toHex/* toHex */.nj)(hash);
    const { secp256k1 } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 407490));
    const signature_ = (() => {
        // typeof signature: `Signature`
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) {
            const { r, s, v, yParity } = signature;
            const yParityOrV = Number(yParity ?? v);
            const recoveryBit = toRecoveryBit(yParityOrV);
            return new secp256k1.Signature((0,fromHex/* hexToBigInt */.uU)(r), (0,fromHex/* hexToBigInt */.uU)(s)).addRecoveryBit(recoveryBit);
        }
        // typeof signature: `Hex | ByteArray`
        const signatureHex = (0,isHex/* isHex */.q)(signature) ? signature : (0,toHex/* toHex */.nj)(signature);
        if ((0,size/* size */.E)(signatureHex) !== 65)
            throw new Error('invalid signature length');
        const yParityOrV = (0,fromHex/* hexToNumber */.ME)(`0x${signatureHex.slice(130)}`);
        const recoveryBit = toRecoveryBit(yParityOrV);
        return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
    })();
    const publicKey = signature_
        .recoverPublicKey(hashHex.substring(2))
        .toHex(false);
    return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
    if (yParityOrV === 0 || yParityOrV === 1)
        return yParityOrV;
    if (yParityOrV === 27)
        return 0;
    if (yParityOrV === 28)
        return 1;
    throw new Error('Invalid yParityOrV value');
}
//# sourceMappingURL=recoverPublicKey.js.map
;// ./node_modules/viem/_esm/utils/signature/recoverAddress.js


async function recoverAddress({ hash, signature, }) {
    return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}
//# sourceMappingURL=recoverAddress.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/cursor.js
var utils_cursor = __webpack_require__(835834);
;// ./node_modules/viem/_esm/utils/encoding/toRlp.js




function toRlp(bytes, to = 'hex') {
    const encodable = getEncodable(bytes);
    const cursor = (0,utils_cursor/* createCursor */.l)(new Uint8Array(encodable.length));
    encodable.encode(cursor);
    if (to === 'hex')
        return (0,toHex/* bytesToHex */.My)(cursor.bytes);
    return cursor.bytes;
}
function bytesToRlp(bytes, to = 'bytes') {
    return toRlp(bytes, to);
}
function hexToRlp(hex, to = 'hex') {
    return toRlp(hex, to);
}
function getEncodable(bytes) {
    if (Array.isArray(bytes))
        return getEncodableList(bytes.map((x) => getEncodable(x)));
    return getEncodableBytes(bytes);
}
function getEncodableList(list) {
    const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
    const sizeOfBodyLength = getSizeOfLength(bodyLength);
    const length = (() => {
        if (bodyLength <= 55)
            return 1 + bodyLength;
        return 1 + sizeOfBodyLength + bodyLength;
    })();
    return {
        length,
        encode(cursor) {
            if (bodyLength <= 55) {
                cursor.pushByte(0xc0 + bodyLength);
            }
            else {
                cursor.pushByte(0xc0 + 55 + sizeOfBodyLength);
                if (sizeOfBodyLength === 1)
                    cursor.pushUint8(bodyLength);
                else if (sizeOfBodyLength === 2)
                    cursor.pushUint16(bodyLength);
                else if (sizeOfBodyLength === 3)
                    cursor.pushUint24(bodyLength);
                else
                    cursor.pushUint32(bodyLength);
            }
            for (const { encode } of list) {
                encode(cursor);
            }
        },
    };
}
function getEncodableBytes(bytesOrHex) {
    const bytes = typeof bytesOrHex === 'string' ? (0,toBytes/* hexToBytes */.aT)(bytesOrHex) : bytesOrHex;
    const sizeOfBytesLength = getSizeOfLength(bytes.length);
    const length = (() => {
        if (bytes.length === 1 && bytes[0] < 0x80)
            return 1;
        if (bytes.length <= 55)
            return 1 + bytes.length;
        return 1 + sizeOfBytesLength + bytes.length;
    })();
    return {
        length,
        encode(cursor) {
            if (bytes.length === 1 && bytes[0] < 0x80) {
                cursor.pushBytes(bytes);
            }
            else if (bytes.length <= 55) {
                cursor.pushByte(0x80 + bytes.length);
                cursor.pushBytes(bytes);
            }
            else {
                cursor.pushByte(0x80 + 55 + sizeOfBytesLength);
                if (sizeOfBytesLength === 1)
                    cursor.pushUint8(bytes.length);
                else if (sizeOfBytesLength === 2)
                    cursor.pushUint16(bytes.length);
                else if (sizeOfBytesLength === 3)
                    cursor.pushUint24(bytes.length);
                else
                    cursor.pushUint32(bytes.length);
                cursor.pushBytes(bytes);
            }
        },
    };
}
function getSizeOfLength(length) {
    if (length < 2 ** 8)
        return 1;
    if (length < 2 ** 16)
        return 2;
    if (length < 2 ** 24)
        return 3;
    if (length < 2 ** 32)
        return 4;
    throw new base/* BaseError */.C('Length is too large.');
}
//# sourceMappingURL=toRlp.js.map
;// ./node_modules/viem/_esm/utils/authorization/hashAuthorization.js





/**
 * Computes an Authorization hash in [EIP-7702 format](https://eips.ethereum.org/EIPS/eip-7702): `keccak256('0x05' || rlp([chain_id, address, nonce]))`.
 */
function hashAuthorization(parameters) {
    const { chainId, nonce, to } = parameters;
    const address = parameters.contractAddress ?? parameters.address;
    const hash = (0,keccak256/* keccak256 */.S)((0,concat/* concatHex */.aP)([
        '0x05',
        toRlp([
            chainId ? (0,toHex/* numberToHex */.cK)(chainId) : '0x',
            address,
            nonce ? (0,toHex/* numberToHex */.cK)(nonce) : '0x',
        ]),
    ]));
    if (to === 'bytes')
        return (0,toBytes/* hexToBytes */.aT)(hash);
    return hash;
}
//# sourceMappingURL=hashAuthorization.js.map
;// ./node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js


async function recoverAuthorizationAddress(parameters) {
    const { authorization, signature } = parameters;
    return recoverAddress({
        hash: hashAuthorization(authorization),
        signature: (signature ?? authorization),
    });
}
//# sourceMappingURL=recoverAuthorizationAddress.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/unit/formatEther.js
var formatEther = __webpack_require__(149436);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/unit/formatGwei.js
var formatGwei = __webpack_require__(579670);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/transaction.js
var errors_transaction = __webpack_require__(148990);
;// ./node_modules/viem/_esm/errors/estimateGas.js




class EstimateGasExecutionError extends base/* BaseError */.C {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, }) {
        const prettyArgs = (0,errors_transaction/* prettyPrint */.aO)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${(0,formatEther/* formatEther */.c)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,formatGwei/* formatGwei */.Q)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,formatGwei/* formatGwei */.Q)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,formatGwei/* formatGwei */.Q)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Estimate Gas Arguments:',
                prettyArgs,
            ].filter(Boolean),
            name: 'EstimateGasExecutionError',
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
//# sourceMappingURL=estimateGas.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/node.js
var node = __webpack_require__(92592);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/errors/getNodeError.js
var getNodeError = __webpack_require__(671772);
;// ./node_modules/viem/_esm/utils/errors/getEstimateGasError.js



function getEstimateGasError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = (0,getNodeError/* getNodeError */.l)(err, args);
        if (cause instanceof node/* UnknownNodeError */.RM)
            return err;
        return cause;
    })();
    return new EstimateGasExecutionError(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getEstimateGasError.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stateOverride.js
var utils_stateOverride = __webpack_require__(865547);
;// ./node_modules/viem/_esm/errors/fee.js


class BaseFeeScalarError extends base/* BaseError */.C {
    constructor() {
        super('`baseFeeMultiplier` must be greater than 1.', {
            name: 'BaseFeeScalarError',
        });
    }
}
class Eip1559FeesNotSupportedError extends base/* BaseError */.C {
    constructor() {
        super('Chain does not support EIP-1559 fees.', {
            name: 'Eip1559FeesNotSupportedError',
        });
    }
}
class MaxFeePerGasTooLowError extends base/* BaseError */.C {
    constructor({ maxPriorityFeePerGas }) {
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,formatGwei/* formatGwei */.Q)(maxPriorityFeePerGas)} gwei).`, { name: 'MaxFeePerGasTooLowError' });
    }
}
//# sourceMappingURL=fee.js.map
;// ./node_modules/viem/_esm/errors/block.js

class BlockNotFoundError extends base/* BaseError */.C {
    constructor({ blockHash, blockNumber, }) {
        let identifier = 'Block';
        if (blockHash)
            identifier = `Block at hash "${blockHash}"`;
        if (blockNumber)
            identifier = `Block at number "${blockNumber}"`;
        super(`${identifier} could not be found.`, { name: 'BlockNotFoundError' });
    }
}
//# sourceMappingURL=block.js.map
;// ./node_modules/viem/_esm/utils/formatters/transaction.js


const transactionType = {
    '0x0': 'legacy',
    '0x1': 'eip2930',
    '0x2': 'eip1559',
    '0x3': 'eip4844',
    '0x4': 'eip7702',
};
function formatTransaction(transaction, _) {
    const transaction_ = {
        ...transaction,
        blockHash: transaction.blockHash ? transaction.blockHash : null,
        blockNumber: transaction.blockNumber
            ? BigInt(transaction.blockNumber)
            : null,
        chainId: transaction.chainId ? (0,fromHex/* hexToNumber */.ME)(transaction.chainId) : undefined,
        gas: transaction.gas ? BigInt(transaction.gas) : undefined,
        gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : undefined,
        maxFeePerBlobGas: transaction.maxFeePerBlobGas
            ? BigInt(transaction.maxFeePerBlobGas)
            : undefined,
        maxFeePerGas: transaction.maxFeePerGas
            ? BigInt(transaction.maxFeePerGas)
            : undefined,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
            ? BigInt(transaction.maxPriorityFeePerGas)
            : undefined,
        nonce: transaction.nonce ? (0,fromHex/* hexToNumber */.ME)(transaction.nonce) : undefined,
        to: transaction.to ? transaction.to : null,
        transactionIndex: transaction.transactionIndex
            ? Number(transaction.transactionIndex)
            : null,
        type: transaction.type
            ? transactionType[transaction.type]
            : undefined,
        typeHex: transaction.type ? transaction.type : undefined,
        value: transaction.value ? BigInt(transaction.value) : undefined,
        v: transaction.v ? BigInt(transaction.v) : undefined,
    };
    if (transaction.authorizationList)
        transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
    transaction_.yParity = (() => {
        // If `yParity` is provided, we will use it.
        if (transaction.yParity)
            return Number(transaction.yParity);
        // If no `yParity` provided, try derive from `v`.
        if (typeof transaction_.v === 'bigint') {
            if (transaction_.v === 0n || transaction_.v === 27n)
                return 0;
            if (transaction_.v === 1n || transaction_.v === 28n)
                return 1;
            if (transaction_.v >= 35n)
                return transaction_.v % 2n === 0n ? 1 : 0;
        }
        return undefined;
    })();
    if (transaction_.type === 'legacy') {
        delete transaction_.accessList;
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
        delete transaction_.yParity;
    }
    if (transaction_.type === 'eip2930') {
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
    }
    if (transaction_.type === 'eip1559')
        delete transaction_.maxFeePerBlobGas;
    return transaction_;
}
const defineTransaction = /*#__PURE__*/ (/* unused pure expression or super */ null && (defineFormatter('transaction', formatTransaction)));
//////////////////////////////////////////////////////////////////////////////
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization) => ({
        address: authorization.address,
        chainId: Number(authorization.chainId),
        nonce: Number(authorization.nonce),
        r: authorization.r,
        s: authorization.s,
        yParity: Number(authorization.yParity),
    }));
}
//# sourceMappingURL=transaction.js.map
;// ./node_modules/viem/_esm/utils/formatters/block.js


function formatBlock(block, _) {
    const transactions = (block.transactions ?? []).map((transaction) => {
        if (typeof transaction === 'string')
            return transaction;
        return formatTransaction(transaction);
    });
    return {
        ...block,
        baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
        blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : undefined,
        difficulty: block.difficulty ? BigInt(block.difficulty) : undefined,
        excessBlobGas: block.excessBlobGas
            ? BigInt(block.excessBlobGas)
            : undefined,
        gasLimit: block.gasLimit ? BigInt(block.gasLimit) : undefined,
        gasUsed: block.gasUsed ? BigInt(block.gasUsed) : undefined,
        hash: block.hash ? block.hash : null,
        logsBloom: block.logsBloom ? block.logsBloom : null,
        nonce: block.nonce ? block.nonce : null,
        number: block.number ? BigInt(block.number) : null,
        size: block.size ? BigInt(block.size) : undefined,
        timestamp: block.timestamp ? BigInt(block.timestamp) : undefined,
        transactions,
        totalDifficulty: block.totalDifficulty
            ? BigInt(block.totalDifficulty)
            : null,
    };
}
const defineBlock = /*#__PURE__*/ (/* unused pure expression or super */ null && (defineFormatter('block', formatBlock)));
//# sourceMappingURL=block.js.map
;// ./node_modules/viem/_esm/actions/public/getBlock.js



/**
 * Returns information about a block at a block number, hash, or tag.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlock
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks_fetching-blocks
 * - JSON-RPC Methods:
 *   - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) for `blockNumber` & `blockTag`.
 *   - Calls [`eth_getBlockByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash) for `blockHash`.
 *
 * @param client - Client to use
 * @param parameters - {@link GetBlockParameters}
 * @returns Information about the block. {@link GetBlockReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlock } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const block = await getBlock(client)
 */
async function getBlock_getBlock(client, { blockHash, blockNumber, blockTag = client.experimental_blockTag ?? 'latest', includeTransactions: includeTransactions_, } = {}) {
    const includeTransactions = includeTransactions_ ?? false;
    const blockNumberHex = blockNumber !== undefined ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
    let block = null;
    if (blockHash) {
        block = await client.request({
            method: 'eth_getBlockByHash',
            params: [blockHash, includeTransactions],
        }, { dedupe: true });
    }
    else {
        block = await client.request({
            method: 'eth_getBlockByNumber',
            params: [blockNumberHex || blockTag, includeTransactions],
        }, { dedupe: Boolean(blockNumberHex) });
    }
    if (!block)
        throw new BlockNotFoundError({ blockHash, blockNumber });
    const format = client.chain?.formatters?.block?.format || formatBlock;
    return format(block, 'getBlock');
}
//# sourceMappingURL=getBlock.js.map
;// ./node_modules/viem/_esm/actions/public/getGasPrice.js
/**
 * Returns the current price of gas (in wei).
 *
 * - Docs: https://viem.sh/docs/actions/public/getGasPrice
 * - JSON-RPC Methods: [`eth_gasPrice`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)
 *
 * @param client - Client to use
 * @returns The gas price (in wei). {@link GetGasPriceReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getGasPrice } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gasPrice = await getGasPrice(client)
 */
async function getGasPrice(client) {
    const gasPrice = await client.request({
        method: 'eth_gasPrice',
    });
    return BigInt(gasPrice);
}
//# sourceMappingURL=getGasPrice.js.map
;// ./node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js





/**
 * Returns an estimate for the max priority fee per gas (in wei) for a
 * transaction to be likely included in the next block.
 * Defaults to [`chain.fees.defaultPriorityFee`](/docs/clients/chains#fees-defaultpriorityfee) if set.
 *
 * - Docs: https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas
 *
 * @param client - Client to use
 * @returns An estimate (in wei) for the max priority fee per gas. {@link EstimateMaxPriorityFeePerGasReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateMaxPriorityFeePerGas } from 'viem/actions'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const maxPriorityFeePerGas = await estimateMaxPriorityFeePerGas(client)
 * // 10000000n
 */
async function estimateMaxPriorityFeePerGas(client, args) {
    return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
    const { block: block_, chain = client.chain, request } = args || {};
    try {
        const maxPriorityFeePerGas = chain?.fees?.maxPriorityFeePerGas ?? chain?.fees?.defaultPriorityFee;
        if (typeof maxPriorityFeePerGas === 'function') {
            const block = block_ || (await getAction(client, getBlock_getBlock, 'getBlock')({}));
            const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
                block,
                client,
                request,
            });
            if (maxPriorityFeePerGas_ === null)
                throw new Error();
            return maxPriorityFeePerGas_;
        }
        if (typeof maxPriorityFeePerGas !== 'undefined')
            return maxPriorityFeePerGas;
        const maxPriorityFeePerGasHex = await client.request({
            method: 'eth_maxPriorityFeePerGas',
        });
        return (0,fromHex/* hexToBigInt */.uU)(maxPriorityFeePerGasHex);
    }
    catch {
        // If the RPC Provider does not support `eth_maxPriorityFeePerGas`
        // fall back to calculating it manually via `gasPrice - baseFeePerGas`.
        // See: https://github.com/ethereum/pm/issues/328#:~:text=eth_maxPriorityFeePerGas%20after%20London%20will%20effectively%20return%20eth_gasPrice%20%2D%20baseFee
        const [block, gasPrice] = await Promise.all([
            block_
                ? Promise.resolve(block_)
                : getAction(client, getBlock_getBlock, 'getBlock')({}),
            getAction(client, getGasPrice, 'getGasPrice')({}),
        ]);
        if (typeof block.baseFeePerGas !== 'bigint')
            throw new Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
        if (maxPriorityFeePerGas < 0n)
            return 0n;
        return maxPriorityFeePerGas;
    }
}
//# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map
;// ./node_modules/viem/_esm/actions/public/estimateFeesPerGas.js





/**
 * Returns an estimate for the fees per gas (in wei) for a
 * transaction to be likely included in the next block.
 * Defaults to [`chain.fees.estimateFeesPerGas`](/docs/clients/chains#fees-estimatefeespergas) if set.
 *
 * - Docs: https://viem.sh/docs/actions/public/estimateFeesPerGas
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateFeesPerGasParameters}
 * @returns An estimate (in wei) for the fees per gas. {@link EstimateFeesPerGasReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateFeesPerGas } from 'viem/actions'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const maxPriorityFeePerGas = await estimateFeesPerGas(client)
 * // { maxFeePerGas: ..., maxPriorityFeePerGas: ... }
 */
async function estimateFeesPerGas(client, args) {
    return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
    const { block: block_, chain = client.chain, request, type = 'eip1559', } = args || {};
    const baseFeeMultiplier = await (async () => {
        if (typeof chain?.fees?.baseFeeMultiplier === 'function')
            return chain.fees.baseFeeMultiplier({
                block: block_,
                client,
                request,
            });
        return chain?.fees?.baseFeeMultiplier ?? 1.2;
    })();
    if (baseFeeMultiplier < 1)
        throw new BaseFeeScalarError();
    const decimals = baseFeeMultiplier.toString().split('.')[1]?.length ?? 0;
    const denominator = 10 ** decimals;
    const multiply = (base) => (base * BigInt(Math.ceil(baseFeeMultiplier * denominator))) /
        BigInt(denominator);
    const block = block_
        ? block_
        : await getAction(client, getBlock_getBlock, 'getBlock')({});
    if (typeof chain?.fees?.estimateFeesPerGas === 'function') {
        const fees = (await chain.fees.estimateFeesPerGas({
            block: block_,
            client,
            multiply,
            request,
            type,
        }));
        if (fees !== null)
            return fees;
    }
    if (type === 'eip1559') {
        if (typeof block.baseFeePerGas !== 'bigint')
            throw new Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === 'bigint'
            ? request.maxPriorityFeePerGas
            : await internal_estimateMaxPriorityFeePerGas(client, {
                block: block,
                chain,
                request,
            });
        const baseFeePerGas = multiply(block.baseFeePerGas);
        const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas,
        };
    }
    const gasPrice = request?.gasPrice ??
        multiply(await getAction(client, getGasPrice, 'getGasPrice')({}));
    return {
        gasPrice,
    };
}
//# sourceMappingURL=estimateFeesPerGas.js.map
;// ./node_modules/viem/_esm/actions/public/getTransactionCount.js


/**
 * Returns the number of [Transactions](https://viem.sh/docs/glossary/terms#transaction) an Account has sent.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransactionCount
 * - JSON-RPC Methods: [`eth_getTransactionCount`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionCountParameters}
 * @returns The number of transactions an account has sent. {@link GetTransactionCountReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransactionCount } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transactionCount = await getTransactionCount(client, {
 *   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 */
async function getTransactionCount(client, { address, blockTag = 'latest', blockNumber }) {
    const count = await client.request({
        method: 'eth_getTransactionCount',
        params: [
            address,
            typeof blockNumber === 'bigint' ? (0,toHex/* numberToHex */.cK)(blockNumber) : blockTag,
        ],
    }, {
        dedupe: Boolean(blockNumber),
    });
    return (0,fromHex/* hexToNumber */.ME)(count);
}
//# sourceMappingURL=getTransactionCount.js.map
;// ./node_modules/viem/_esm/utils/blob/blobsToCommitments.js


/**
 * Compute commitments from a list of blobs.
 *
 * @example
 * ```ts
 * import { blobsToCommitments, toBlobs } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * ```
 */
function blobsToCommitments(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = (typeof parameters.blobs[0] === 'string'
        ? parameters.blobs.map((x) => (0,toBytes/* hexToBytes */.aT)(x))
        : parameters.blobs);
    const commitments = [];
    for (const blob of blobs)
        commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
    return (to === 'bytes'
        ? commitments
        : commitments.map((x) => (0,toHex/* bytesToHex */.My)(x)));
}
//# sourceMappingURL=blobsToCommitments.js.map
;// ./node_modules/viem/_esm/utils/blob/blobsToProofs.js


/**
 * Compute the proofs for a list of blobs and their commitments.
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   toBlobs
 * } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * const proofs = blobsToProofs({ blobs, commitments, kzg })
 * ```
 */
function blobsToProofs(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = (typeof parameters.blobs[0] === 'string'
        ? parameters.blobs.map((x) => (0,toBytes/* hexToBytes */.aT)(x))
        : parameters.blobs);
    const commitments = (typeof parameters.commitments[0] === 'string'
        ? parameters.commitments.map((x) => (0,toBytes/* hexToBytes */.aT)(x))
        : parameters.commitments);
    const proofs = [];
    for (let i = 0; i < blobs.length; i++) {
        const blob = blobs[i];
        const commitment = commitments[i];
        proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
    }
    return (to === 'bytes'
        ? proofs
        : proofs.map((x) => (0,toHex/* bytesToHex */.My)(x)));
}
//# sourceMappingURL=blobsToProofs.js.map
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/sha256.js
var sha256 = __webpack_require__(778226);
;// ./node_modules/viem/_esm/utils/hash/sha256.js




function sha256_sha256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0,sha256/* sha256 */.sc)((0,isHex/* isHex */.q)(value, { strict: false }) ? (0,toBytes/* toBytes */.ZJ)(value) : value);
    if (to === 'bytes')
        return bytes;
    return (0,toHex/* toHex */.nj)(bytes);
}
//# sourceMappingURL=sha256.js.map
;// ./node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js


/**
 * Transform a commitment to it's versioned hash.
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   commitmentToVersionedHash,
 *   toBlobs
 * } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const [commitment] = blobsToCommitments({ blobs, kzg })
 * const versionedHash = commitmentToVersionedHash({ commitment })
 * ```
 */
function commitmentToVersionedHash(parameters) {
    const { commitment, version = 1 } = parameters;
    const to = parameters.to ?? (typeof commitment === 'string' ? 'hex' : 'bytes');
    const versionedHash = sha256_sha256(commitment, 'bytes');
    versionedHash.set([version], 0);
    return (to === 'bytes' ? versionedHash : (0,toHex/* bytesToHex */.My)(versionedHash));
}
//# sourceMappingURL=commitmentToVersionedHash.js.map
;// ./node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js

/**
 * Transform a list of commitments to their versioned hashes.
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   commitmentsToVersionedHashes,
 *   toBlobs
 * } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * const versionedHashes = commitmentsToVersionedHashes({ commitments })
 * ```
 */
function commitmentsToVersionedHashes(parameters) {
    const { commitments, version } = parameters;
    const to = parameters.to ?? (typeof commitments[0] === 'string' ? 'hex' : 'bytes');
    const hashes = [];
    for (const commitment of commitments) {
        hashes.push(commitmentToVersionedHash({
            commitment,
            to,
            version,
        }));
    }
    return hashes;
}
//# sourceMappingURL=commitmentsToVersionedHashes.js.map
;// ./node_modules/viem/_esm/constants/blob.js
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4844.md#parameters
/** Blob limit per transaction. */
const blobsPerTransaction = 6;
/** The number of bytes in a BLS scalar field element. */
const bytesPerFieldElement = 32;
/** The number of field elements in a blob. */
const fieldElementsPerBlob = 4096;
/** The number of bytes in a blob. */
const bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
/** Blob bytes limit per transaction. */
const maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction -
    // terminator byte (0x80).
    1 -
    // zero byte (0x00) appended to each field element.
    1 * fieldElementsPerBlob * blobsPerTransaction;
//# sourceMappingURL=blob.js.map
;// ./node_modules/viem/_esm/constants/kzg.js
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4844.md#parameters
const versionedHashVersionKzg = 1;
//# sourceMappingURL=kzg.js.map
;// ./node_modules/viem/_esm/errors/blob.js


class BlobSizeTooLargeError extends base/* BaseError */.C {
    constructor({ maxSize, size }) {
        super('Blob size is too large.', {
            metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size} bytes`],
            name: 'BlobSizeTooLargeError',
        });
    }
}
class EmptyBlobError extends base/* BaseError */.C {
    constructor() {
        super('Blob data must not be empty.', { name: 'EmptyBlobError' });
    }
}
class InvalidVersionedHashSizeError extends base/* BaseError */.C {
    constructor({ hash, size, }) {
        super(`Versioned hash "${hash}" size is invalid.`, {
            metaMessages: ['Expected: 32', `Received: ${size}`],
            name: 'InvalidVersionedHashSizeError',
        });
    }
}
class InvalidVersionedHashVersionError extends base/* BaseError */.C {
    constructor({ hash, version, }) {
        super(`Versioned hash "${hash}" version is invalid.`, {
            metaMessages: [
                `Expected: ${versionedHashVersionKzg}`,
                `Received: ${version}`,
            ],
            name: 'InvalidVersionedHashVersionError',
        });
    }
}
//# sourceMappingURL=blob.js.map
;// ./node_modules/viem/_esm/utils/blob/toBlobs.js






/**
 * Transforms arbitrary data to blobs.
 *
 * @example
 * ```ts
 * import { toBlobs, stringToHex } from 'viem'
 *
 * const blobs = toBlobs({ data: stringToHex('hello world') })
 * ```
 */
function toBlobs(parameters) {
    const to = parameters.to ?? (typeof parameters.data === 'string' ? 'hex' : 'bytes');
    const data = (typeof parameters.data === 'string'
        ? (0,toBytes/* hexToBytes */.aT)(parameters.data)
        : parameters.data);
    const size_ = (0,size/* size */.E)(data);
    if (!size_)
        throw new EmptyBlobError();
    if (size_ > maxBytesPerTransaction)
        throw new BlobSizeTooLargeError({
            maxSize: maxBytesPerTransaction,
            size: size_,
        });
    const blobs = [];
    let active = true;
    let position = 0;
    while (active) {
        const blob = (0,utils_cursor/* createCursor */.l)(new Uint8Array(bytesPerBlob));
        let size = 0;
        while (size < fieldElementsPerBlob) {
            const bytes = data.slice(position, position + (bytesPerFieldElement - 1));
            // Push a zero byte so the field element doesn't overflow the BLS modulus.
            blob.pushByte(0x00);
            // Push the current segment of data bytes.
            blob.pushBytes(bytes);
            // If we detect that the current segment of data bytes is less than 31 bytes,
            // we can stop processing and push a terminator byte to indicate the end of the blob.
            if (bytes.length < 31) {
                blob.pushByte(0x80);
                active = false;
                break;
            }
            size++;
            position += 31;
        }
        blobs.push(blob);
    }
    return (to === 'bytes'
        ? blobs.map((x) => x.bytes)
        : blobs.map((x) => (0,toHex/* bytesToHex */.My)(x.bytes)));
}
//# sourceMappingURL=toBlobs.js.map
;// ./node_modules/viem/_esm/utils/blob/toBlobSidecars.js



/**
 * Transforms arbitrary data (or blobs, commitments, & proofs) into a sidecar array.
 *
 * @example
 * ```ts
 * import { toBlobSidecars, stringToHex } from 'viem'
 *
 * const sidecars = toBlobSidecars({ data: stringToHex('hello world') })
 * ```
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   toBlobs,
 *   blobsToProofs,
 *   toBlobSidecars,
 *   stringToHex
 * } from 'viem'
 *
 * const blobs = toBlobs({ data: stringToHex('hello world') })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * const proofs = blobsToProofs({ blobs, commitments, kzg })
 *
 * const sidecars = toBlobSidecars({ blobs, commitments, proofs })
 * ```
 */
function toBlobSidecars(parameters) {
    const { data, kzg, to } = parameters;
    const blobs = parameters.blobs ?? toBlobs({ data: data, to });
    const commitments = parameters.commitments ?? blobsToCommitments({ blobs, kzg: kzg, to });
    const proofs = parameters.proofs ?? blobsToProofs({ blobs, commitments, kzg: kzg, to });
    const sidecars = [];
    for (let i = 0; i < blobs.length; i++)
        sidecars.push({
            blob: blobs[i],
            commitment: commitments[i],
            proof: proofs[i],
        });
    return sidecars;
}
//# sourceMappingURL=toBlobSidecars.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/lru.js
var lru = __webpack_require__(676447);
;// ./node_modules/viem/_esm/utils/transaction/getTransactionType.js

function getTransactionType(transaction) {
    if (transaction.type)
        return transaction.type;
    if (typeof transaction.authorizationList !== 'undefined')
        return 'eip7702';
    if (typeof transaction.blobs !== 'undefined' ||
        typeof transaction.blobVersionedHashes !== 'undefined' ||
        typeof transaction.maxFeePerBlobGas !== 'undefined' ||
        typeof transaction.sidecars !== 'undefined')
        return 'eip4844';
    if (typeof transaction.maxFeePerGas !== 'undefined' ||
        typeof transaction.maxPriorityFeePerGas !== 'undefined') {
        return 'eip1559';
    }
    if (typeof transaction.gasPrice !== 'undefined') {
        if (typeof transaction.accessList !== 'undefined')
            return 'eip2930';
        return 'legacy';
    }
    throw new errors_transaction/* InvalidSerializableTransactionError */.Vg({ transaction });
}
//# sourceMappingURL=getTransactionType.js.map
;// ./node_modules/viem/_esm/utils/errors/getTransactionError.js



function getTransactionError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = (0,getNodeError/* getNodeError */.l)(err, args);
        if (cause instanceof node/* UnknownNodeError */.RM)
            return err;
        return cause;
    })();
    return new errors_transaction/* TransactionExecutionError */.$s(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getTransactionError.js.map
;// ./node_modules/viem/_esm/actions/public/getChainId.js

/**
 * Returns the chain ID associated with the current network.
 *
 * - Docs: https://viem.sh/docs/actions/public/getChainId
 * - JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)
 *
 * @param client - Client to use
 * @returns The current chain ID. {@link GetChainIdReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getChainId } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const chainId = await getChainId(client)
 * // 1
 */
async function getChainId_getChainId(client) {
    const chainIdHex = await client.request({
        method: 'eth_chainId',
    }, { dedupe: true });
    return (0,fromHex/* hexToNumber */.ME)(chainIdHex);
}
//# sourceMappingURL=getChainId.js.map
;// ./node_modules/viem/_esm/actions/public/fillTransaction.js










/**
 * Fills a transaction request with the necessary fields to be signed over.
 *
 * - Docs: https://viem.sh/docs/actions/public/fillTransaction
 *
 * @param client - Client to use
 * @param parameters - {@link FillTransactionParameters}
 * @returns The filled transaction. {@link FillTransactionReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { fillTransaction } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const result = await fillTransaction(client, {
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *   value: parseEther('1'),
 * })
 */
async function fillTransaction(client, parameters) {
    const { account = client.account, accessList, authorizationList, chain = client.chain, blobVersionedHashes, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce: nonce_, nonceManager, to, type, value, ...rest } = parameters;
    const nonce = await (async () => {
        if (!account)
            return nonce_;
        if (!nonceManager)
            return nonce_;
        if (typeof nonce_ !== 'undefined')
            return nonce_;
        const account_ = (0,parseAccount/* parseAccount */.J)(account);
        const chainId = chain
            ? chain.id
            : await getAction(client, getChainId_getChainId, 'getChainId')({});
        return await nonceManager.consume({
            address: account_.address,
            chainId,
            client,
        });
    })();
    (0,assertRequest/* assertRequest */.c)(parameters);
    const chainFormat = chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || transactionRequest/* formatTransactionRequest */.Bv;
    const request = format({
        // Pick out extra data that might exist on the chain's transaction request type.
        ...(0,extract/* extract */.o)(rest, { format: chainFormat }),
        account: account ? (0,parseAccount/* parseAccount */.J)(account) : undefined,
        accessList,
        authorizationList,
        blobs,
        blobVersionedHashes,
        data,
        gas,
        gasPrice,
        maxFeePerBlobGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        type,
        value,
    }, 'fillTransaction');
    try {
        const response = await client.request({
            method: 'eth_fillTransaction',
            params: [request],
        });
        const format = chain?.formatters?.transaction?.format || formatTransaction;
        const transaction = format(response.tx);
        // Remove unnecessary fields.
        delete transaction.blockHash;
        delete transaction.blockNumber;
        delete transaction.r;
        delete transaction.s;
        delete transaction.transactionIndex;
        delete transaction.v;
        delete transaction.yParity;
        // Rewrite fields.
        transaction.data = transaction.input;
        // Preference supplied fees (some nodes do not take these preferences).
        if (transaction.gas)
            transaction.gas = parameters.gas ?? transaction.gas;
        if (transaction.gasPrice)
            transaction.gasPrice = parameters.gasPrice ?? transaction.gasPrice;
        if (transaction.maxFeePerBlobGas)
            transaction.maxFeePerBlobGas =
                parameters.maxFeePerBlobGas ?? transaction.maxFeePerBlobGas;
        if (transaction.maxFeePerGas)
            transaction.maxFeePerGas =
                parameters.maxFeePerGas ?? transaction.maxFeePerGas;
        if (transaction.maxPriorityFeePerGas)
            transaction.maxPriorityFeePerGas =
                parameters.maxPriorityFeePerGas ?? transaction.maxPriorityFeePerGas;
        if (transaction.nonce)
            transaction.nonce = parameters.nonce ?? transaction.nonce;
        // Build fee multiplier function.
        const feeMultiplier = await (async () => {
            if (typeof chain?.fees?.baseFeeMultiplier === 'function') {
                const block = await getAction(client, getBlock_getBlock, 'getBlock')({});
                return chain.fees.baseFeeMultiplier({
                    block,
                    client,
                    request: parameters,
                });
            }
            return chain?.fees?.baseFeeMultiplier ?? 1.2;
        })();
        if (feeMultiplier < 1)
            throw new BaseFeeScalarError();
        const decimals = feeMultiplier.toString().split('.')[1]?.length ?? 0;
        const denominator = 10 ** decimals;
        const multiplyFee = (base) => (base * BigInt(Math.ceil(feeMultiplier * denominator))) /
            BigInt(denominator);
        // Apply fee multiplier.
        if (transaction.maxFeePerGas && !parameters.maxFeePerGas)
            transaction.maxFeePerGas = multiplyFee(transaction.maxFeePerGas);
        if (transaction.gasPrice && !parameters.gasPrice)
            transaction.gasPrice = multiplyFee(transaction.gasPrice);
        return {
            raw: response.raw,
            transaction: {
                from: request.from,
                ...transaction,
            },
        };
    }
    catch (err) {
        throw getTransactionError(err, {
            ...parameters,
            chain: client.chain,
        });
    }
}
//# sourceMappingURL=fillTransaction.js.map
;// ./node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
















const defaultParameters = [
    'blobVersionedHashes',
    'chainId',
    'fees',
    'gas',
    'nonce',
    'type',
];
/** @internal */
const eip1559NetworkCache = /*#__PURE__*/ new Map();
/** @internal */
const supportsFillTransaction = /*#__PURE__*/ new lru/* LruMap */.A(128);
/**
 * Prepares a transaction request for signing.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest
 *
 * @param args - {@link PrepareTransactionRequestParameters}
 * @returns The transaction request. {@link PrepareTransactionRequestReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { prepareTransactionRequest } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const request = await prepareTransactionRequest(client, {
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   to: '0x0000000000000000000000000000000000000000',
 *   value: 1n,
 * })
 *
 * @example
 * // Account Hoisting
 * import { createWalletClient, http } from 'viem'
 * import { privateKeyToAccount } from 'viem/accounts'
 * import { mainnet } from 'viem/chains'
 * import { prepareTransactionRequest } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   account: privateKeyToAccount('0x…'),
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const request = await prepareTransactionRequest(client, {
 *   to: '0x0000000000000000000000000000000000000000',
 *   value: 1n,
 * })
 */
async function prepareTransactionRequest(client, args) {
    let request = args;
    request.account ??= client.account;
    request.parameters ??= defaultParameters;
    const { account: account_, chain = client.chain, nonceManager, parameters, } = request;
    const prepareTransactionRequest = (() => {
        if (typeof chain?.prepareTransactionRequest === 'function')
            return {
                fn: chain.prepareTransactionRequest,
                runAt: ['beforeFillTransaction'],
            };
        if (Array.isArray(chain?.prepareTransactionRequest))
            return {
                fn: chain.prepareTransactionRequest[0],
                runAt: chain.prepareTransactionRequest[1].runAt,
            };
        return undefined;
    })();
    let chainId;
    async function getChainId() {
        if (chainId)
            return chainId;
        if (typeof request.chainId !== 'undefined')
            return request.chainId;
        if (chain)
            return chain.id;
        const chainId_ = await getAction(client, getChainId_getChainId, 'getChainId')({});
        chainId = chainId_;
        return chainId;
    }
    const account = account_ ? (0,parseAccount/* parseAccount */.J)(account_) : account_;
    let nonce = request.nonce;
    if (parameters.includes('nonce') &&
        typeof nonce === 'undefined' &&
        account &&
        nonceManager) {
        const chainId = await getChainId();
        nonce = await nonceManager.consume({
            address: account.address,
            chainId,
            client,
        });
    }
    if (prepareTransactionRequest?.fn &&
        prepareTransactionRequest.runAt?.includes('beforeFillTransaction')) {
        request = await prepareTransactionRequest.fn({ ...request, chain }, {
            phase: 'beforeFillTransaction',
        });
        nonce ??= request.nonce;
    }
    const attemptFill = (() => {
        // Do not attempt if blobs are provided.
        if ((parameters.includes('blobVersionedHashes') ||
            parameters.includes('sidecars')) &&
            request.kzg &&
            request.blobs)
            return false;
        // Do not attempt if `eth_fillTransaction` is not supported.
        if (supportsFillTransaction.get(client.uid) === false)
            return false;
        // Should attempt `eth_fillTransaction` if "fees" or "gas" are required to be populated,
        // otherwise, can just use the other individual calls.
        const shouldAttempt = ['fees', 'gas'].some((parameter) => parameters.includes(parameter));
        if (!shouldAttempt)
            return false;
        // Check if `eth_fillTransaction` needs to be called.
        if (parameters.includes('chainId') && typeof request.chainId !== 'number')
            return true;
        if (parameters.includes('nonce') && typeof nonce !== 'number')
            return true;
        if (parameters.includes('fees') &&
            typeof request.gasPrice !== 'bigint' &&
            (typeof request.maxFeePerGas !== 'bigint' ||
                typeof request.maxPriorityFeePerGas !== 'bigint'))
            return true;
        if (parameters.includes('gas') && typeof request.gas !== 'bigint')
            return true;
        return false;
    })();
    const fillResult = attemptFill
        ? await getAction(client, fillTransaction, 'fillTransaction')({ ...request, nonce })
            .then((result) => {
            const { chainId, from, gas, gasPrice, nonce, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, type, ...rest } = result.transaction;
            supportsFillTransaction.set(client.uid, true);
            return {
                ...request,
                ...(from ? { from } : {}),
                ...(type ? { type } : {}),
                ...(typeof chainId !== 'undefined' ? { chainId } : {}),
                ...(typeof gas !== 'undefined' ? { gas } : {}),
                ...(typeof gasPrice !== 'undefined' ? { gasPrice } : {}),
                ...(typeof nonce !== 'undefined' ? { nonce } : {}),
                ...(typeof maxFeePerBlobGas !== 'undefined'
                    ? { maxFeePerBlobGas }
                    : {}),
                ...(typeof maxFeePerGas !== 'undefined' ? { maxFeePerGas } : {}),
                ...(typeof maxPriorityFeePerGas !== 'undefined'
                    ? { maxPriorityFeePerGas }
                    : {}),
                ...('nonceKey' in rest && typeof rest.nonceKey !== 'undefined'
                    ? { nonceKey: rest.nonceKey }
                    : {}),
            };
        })
            .catch((e) => {
            const error = e;
            if (error.name !== 'TransactionExecutionError')
                return request;
            const unsupported = error.walk?.((e) => {
                const error = e;
                return (error.name === 'MethodNotFoundRpcError' ||
                    error.name === 'MethodNotSupportedRpcError');
            });
            if (unsupported)
                supportsFillTransaction.set(client.uid, false);
            return request;
        })
        : request;
    nonce ??= fillResult.nonce;
    request = {
        ...fillResult,
        ...(account ? { from: account?.address } : {}),
        ...(nonce ? { nonce } : {}),
    };
    const { blobs, gas, kzg, type } = request;
    if (prepareTransactionRequest?.fn &&
        prepareTransactionRequest.runAt?.includes('beforeFillParameters')) {
        request = await prepareTransactionRequest.fn({ ...request, chain }, {
            phase: 'beforeFillParameters',
        });
    }
    let block;
    async function getBlock() {
        if (block)
            return block;
        block = await getAction(client, getBlock_getBlock, 'getBlock')({ blockTag: 'latest' });
        return block;
    }
    if (parameters.includes('nonce') &&
        typeof nonce === 'undefined' &&
        account &&
        !nonceManager)
        request.nonce = await getAction(client, getTransactionCount, 'getTransactionCount')({
            address: account.address,
            blockTag: 'pending',
        });
    if ((parameters.includes('blobVersionedHashes') ||
        parameters.includes('sidecars')) &&
        blobs &&
        kzg) {
        const commitments = blobsToCommitments({ blobs, kzg });
        if (parameters.includes('blobVersionedHashes')) {
            const versionedHashes = commitmentsToVersionedHashes({
                commitments,
                to: 'hex',
            });
            request.blobVersionedHashes = versionedHashes;
        }
        if (parameters.includes('sidecars')) {
            const proofs = blobsToProofs({ blobs, commitments, kzg });
            const sidecars = toBlobSidecars({
                blobs,
                commitments,
                proofs,
                to: 'hex',
            });
            request.sidecars = sidecars;
        }
    }
    if (parameters.includes('chainId'))
        request.chainId = await getChainId();
    if ((parameters.includes('fees') || parameters.includes('type')) &&
        typeof type === 'undefined') {
        try {
            request.type = getTransactionType(request);
        }
        catch {
            let isEip1559Network = eip1559NetworkCache.get(client.uid);
            if (typeof isEip1559Network === 'undefined') {
                const block = await getBlock();
                isEip1559Network = typeof block?.baseFeePerGas === 'bigint';
                eip1559NetworkCache.set(client.uid, isEip1559Network);
            }
            request.type = isEip1559Network ? 'eip1559' : 'legacy';
        }
    }
    if (parameters.includes('fees')) {
        // TODO(4844): derive blob base fees once https://github.com/ethereum/execution-apis/pull/486 is merged.
        if (request.type !== 'legacy' && request.type !== 'eip2930') {
            // EIP-1559 fees
            if (typeof request.maxFeePerGas === 'undefined' ||
                typeof request.maxPriorityFeePerGas === 'undefined') {
                const block = await getBlock();
                const { maxFeePerGas, maxPriorityFeePerGas } = await internal_estimateFeesPerGas(client, {
                    block: block,
                    chain,
                    request: request,
                });
                if (typeof request.maxPriorityFeePerGas === 'undefined' &&
                    request.maxFeePerGas &&
                    request.maxFeePerGas < maxPriorityFeePerGas)
                    throw new MaxFeePerGasTooLowError({
                        maxPriorityFeePerGas,
                    });
                request.maxPriorityFeePerGas = maxPriorityFeePerGas;
                request.maxFeePerGas = maxFeePerGas;
            }
        }
        else {
            // Legacy fees
            if (typeof request.maxFeePerGas !== 'undefined' ||
                typeof request.maxPriorityFeePerGas !== 'undefined')
                throw new Eip1559FeesNotSupportedError();
            if (typeof request.gasPrice === 'undefined') {
                const block = await getBlock();
                const { gasPrice: gasPrice_ } = await internal_estimateFeesPerGas(client, {
                    block: block,
                    chain,
                    request: request,
                    type: 'legacy',
                });
                request.gasPrice = gasPrice_;
            }
        }
    }
    if (parameters.includes('gas') && typeof gas === 'undefined')
        request.gas = await getAction(client, estimateGas, 'estimateGas')({
            ...request,
            account,
            prepare: account?.type === 'local' ? [] : ['blobVersionedHashes'],
        });
    if (prepareTransactionRequest?.fn &&
        prepareTransactionRequest.runAt?.includes('afterFillParameters'))
        request = await prepareTransactionRequest.fn({ ...request, chain }, {
            phase: 'afterFillParameters',
        });
    (0,assertRequest/* assertRequest */.c)(request);
    delete request.parameters;
    return request;
}
//# sourceMappingURL=prepareTransactionRequest.js.map
;// ./node_modules/viem/_esm/actions/public/estimateGas.js










/**
 * Estimates the gas necessary to complete a transaction without submitting it to the network.
 *
 * - Docs: https://viem.sh/docs/actions/public/estimateGas
 * - JSON-RPC Methods: [`eth_estimateGas`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas)
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateGasParameters}
 * @returns The gas estimate (in gas units). {@link EstimateGasReturnType}
 *
 * @example
 * import { createPublicClient, http, parseEther } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateGas } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gasEstimate = await estimateGas(client, {
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *   value: parseEther('1'),
 * })
 */
async function estimateGas(client, args) {
    const { account: account_ = client.account, prepare = true } = args;
    const account = account_ ? (0,parseAccount/* parseAccount */.J)(account_) : undefined;
    const parameters = (() => {
        if (Array.isArray(prepare))
            return prepare;
        // Some RPC Providers do not compute versioned hashes from blobs. We will need
        // to compute them.
        if (account?.type !== 'local')
            return ['blobVersionedHashes'];
        return undefined;
    })();
    try {
        const to = await (async () => {
            // If `to` exists on the parameters, use that.
            if (args.to)
                return args.to;
            // If no `to` exists, and we are sending a EIP-7702 transaction, use the
            // address of the first authorization in the list.
            if (args.authorizationList && args.authorizationList.length > 0)
                return await recoverAuthorizationAddress({
                    authorization: args.authorizationList[0],
                }).catch(() => {
                    throw new base/* BaseError */.C('`to` is required. Could not infer from `authorizationList`');
                });
            // Otherwise, we are sending a deployment transaction.
            return undefined;
        })();
        const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = prepare
            ? (await prepareTransactionRequest(client, {
                ...args,
                parameters,
                to,
            }))
            : args;
        // If we get `gas` back from the prepared transaction request, which is
        // different from the `gas` we provided, it was likely filled by other means
        // during request preparation (e.g. `eth_fillTransaction` or `chain.transactionRequest.prepare`).
        // (e.g. `eth_fillTransaction` or `chain.transactionRequest.prepare`).
        if (gas && args.gas !== gas)
            return gas;
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcStateOverride = (0,utils_stateOverride/* serializeStateOverride */.yH)(stateOverride);
        (0,assertRequest/* assertRequest */.c)(args);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest/* formatTransactionRequest */.Bv;
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0,extract/* extract */.o)(rest, { format: chainFormat }),
            account,
            accessList,
            authorizationList,
            blobs,
            blobVersionedHashes,
            data,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value,
        }, 'estimateGas');
        return BigInt(await client.request({
            method: 'eth_estimateGas',
            params: rpcStateOverride
                ? [
                    request,
                    block ?? client.experimental_blockTag ?? 'latest',
                    rpcStateOverride,
                ]
                : block
                    ? [request, block]
                    : [request],
        }));
    }
    catch (err) {
        throw getEstimateGasError(err, {
            ...args,
            account,
            chain: client.chain,
        });
    }
}
//# sourceMappingURL=estimateGas.js.map
;// ./node_modules/viem/_esm/actions/public/estimateContractGas.js





/**
 * Estimates the gas required to successfully execute a contract write function call.
 *
 * - Docs: https://viem.sh/docs/contract/estimateContractGas
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`estimateGas` action](https://viem.sh/docs/actions/public/estimateGas) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateContractGasParameters}
 * @returns The gas estimate (in wei). {@link EstimateContractGasReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateContractGas } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gas = await estimateContractGas(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function mint() public']),
 *   functionName: 'mint',
 *   account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 * })
 */
async function estimateContractGas(client, parameters) {
    const { abi, address, args, functionName, dataSuffix, ...request } = parameters;
    const data = (0,encodeFunctionData/* encodeFunctionData */.p)({
        abi,
        args,
        functionName,
    });
    try {
        const gas = await getAction(client, estimateGas, 'estimateGas')({
            data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...request,
        });
        return gas;
    }
    catch (error) {
        const account = request.account ? (0,parseAccount/* parseAccount */.J)(request.account) : undefined;
        throw getContractError(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/estimateContractGas',
            functionName,
            sender: account?.address,
        });
    }
}
//# sourceMappingURL=estimateContractGas.js.map
;// ./node_modules/viem/_esm/actions/public/getBalance.js

/**
 * Returns the balance of an address in wei.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBalance
 * - JSON-RPC Methods: [`eth_getBalance`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)
 *
 * You can convert the balance to ether units with [`formatEther`](https://viem.sh/docs/utilities/formatEther).
 *
 * ```ts
 * const balance = await getBalance(client, {
 *   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   blockTag: 'safe'
 * })
 * const balanceAsEther = formatEther(balance)
 * // "6.942"
 * ```
 *
 * @param client - Client to use
 * @param parameters - {@link GetBalanceParameters}
 * @returns The balance of the address in wei. {@link GetBalanceReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBalance } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const balance = await getBalance(client, {
 *   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 * // 10000000000000000000000n (wei)
 */
async function getBalance(client, { address, blockNumber, blockTag = client.experimental_blockTag ?? 'latest', }) {
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
    const balance = await client.request({
        method: 'eth_getBalance',
        params: [address, blockNumberHex || blockTag],
    });
    return BigInt(balance);
}
//# sourceMappingURL=getBalance.js.map
;// ./node_modules/viem/_esm/actions/public/getBlobBaseFee.js
/**
 * Returns the base fee per blob gas in wei.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlobBaseFee
 * - JSON-RPC Methods: [`eth_blobBaseFee`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blobBaseFee)
 *
 * @param client - Client to use
 * @returns The blob base fee (in wei). {@link GetBlobBaseFeeReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlobBaseFee } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const blobBaseFee = await getBlobBaseFee(client)
 */
async function getBlobBaseFee(client) {
    const baseFee = await client.request({
        method: 'eth_blobBaseFee',
    });
    return BigInt(baseFee);
}
//# sourceMappingURL=getBlobBaseFee.js.map
;// ./node_modules/viem/_esm/utils/promise/withCache.js
/** @internal */
const promiseCache = /*#__PURE__*/ new Map();
/** @internal */
const responseCache = /*#__PURE__*/ new Map();
function withCache_getCache(cacheKey) {
    const buildCache = (cacheKey, cache) => ({
        clear: () => cache.delete(cacheKey),
        get: () => cache.get(cacheKey),
        set: (data) => cache.set(cacheKey, data),
    });
    const promise = buildCache(cacheKey, promiseCache);
    const response = buildCache(cacheKey, responseCache);
    return {
        clear: () => {
            promise.clear();
            response.clear();
        },
        promise,
        response,
    };
}
/**
 * @description Returns the result of a given promise, and caches the result for
 * subsequent invocations against a provided cache key.
 */
async function withCache(fn, { cacheKey, cacheTime = Number.POSITIVE_INFINITY }) {
    const cache = withCache_getCache(cacheKey);
    // If a response exists in the cache, and it's not expired, return it
    // and do not invoke the promise.
    // If the max age is 0, the cache is disabled.
    const response = cache.response.get();
    if (response && cacheTime > 0) {
        const age = Date.now() - response.created.getTime();
        if (age < cacheTime)
            return response.data;
    }
    let promise = cache.promise.get();
    if (!promise) {
        promise = fn();
        // Store the promise in the cache so that subsequent invocations
        // will wait for the same promise to resolve (deduping).
        cache.promise.set(promise);
    }
    try {
        const data = await promise;
        // Store the response in the cache so that subsequent invocations
        // will return the same response.
        cache.response.set({ created: new Date(), data });
        return data;
    }
    finally {
        // Clear the promise cache so that subsequent invocations will
        // invoke the promise again.
        cache.promise.clear();
    }
}
//# sourceMappingURL=withCache.js.map
;// ./node_modules/viem/_esm/actions/public/getBlockNumber.js

const cacheKey = (id) => `blockNumber.${id}`;
/** @internal */
function getBlockNumberCache(id) {
    return getCache(cacheKey(id));
}
/**
 * Returns the number of the most recent block seen.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlockNumber
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks_fetching-blocks
 * - JSON-RPC Methods: [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber)
 *
 * @param client - Client to use
 * @param parameters - {@link GetBlockNumberParameters}
 * @returns The number of the block. {@link GetBlockNumberReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlockNumber } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const blockNumber = await getBlockNumber(client)
 * // 69420n
 */
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
    const blockNumberHex = await withCache(() => client.request({
        method: 'eth_blockNumber',
    }), { cacheKey: cacheKey(client.uid), cacheTime });
    return BigInt(blockNumberHex);
}
//# sourceMappingURL=getBlockNumber.js.map
;// ./node_modules/viem/_esm/actions/public/getBlockTransactionCount.js


/**
 * Returns the number of Transactions at a block number, hash, or tag.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlockTransactionCount
 * - JSON-RPC Methods:
 *   - Calls [`eth_getBlockTransactionCountByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber) for `blockNumber` & `blockTag`.
 *   - Calls [`eth_getBlockTransactionCountByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash) for `blockHash`.
 *
 * @param client - Client to use
 * @param parameters - {@link GetBlockTransactionCountParameters}
 * @returns The block transaction count. {@link GetBlockTransactionCountReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlockTransactionCount } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const count = await getBlockTransactionCount(client)
 */
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = 'latest', } = {}) {
    const blockNumberHex = blockNumber !== undefined ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
    let count;
    if (blockHash) {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByHash',
            params: [blockHash],
        }, { dedupe: true });
    }
    else {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByNumber',
            params: [blockNumberHex || blockTag],
        }, { dedupe: Boolean(blockNumberHex) });
    }
    return (0,fromHex/* hexToNumber */.ME)(count);
}
//# sourceMappingURL=getBlockTransactionCount.js.map
;// ./node_modules/viem/_esm/actions/public/getCode.js

/**
 * Retrieves the bytecode at an address.
 *
 * - Docs: https://viem.sh/docs/contract/getCode
 * - JSON-RPC Methods: [`eth_getCode`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode)
 *
 * @param client - Client to use
 * @param parameters - {@link GetCodeParameters}
 * @returns The contract's bytecode. {@link GetCodeReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getCode } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const code = await getCode(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 * })
 */
async function getCode(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber !== undefined ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
    const hex = await client.request({
        method: 'eth_getCode',
        params: [address, blockNumberHex || blockTag],
    }, { dedupe: Boolean(blockNumberHex) });
    if (hex === '0x')
        return undefined;
    return hex;
}
//# sourceMappingURL=getCode.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/isAddressEqual.js
var isAddressEqual = __webpack_require__(732589);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/cursor.js
var cursor = __webpack_require__(858146);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeAbiParameters.js + 1 modules
var decodeAbiParameters = __webpack_require__(541821);
;// ./node_modules/viem/_esm/utils/abi/decodeEventLog.js






const decodeEventLog_docsPath = '/docs/contract/decodeEventLog';
function decodeEventLog(parameters) {
    const { abi, data, strict: strict_, topics, } = parameters;
    const strict = strict_ ?? true;
    const [signature, ...argTopics] = topics;
    if (!signature)
        throw new errors_abi/* AbiEventSignatureEmptyTopicsError */._z({ docsPath: decodeEventLog_docsPath });
    const abiItem = abi.find((x) => x.type === 'event' &&
        signature === (0,toEventSelector/* toEventSelector */.h)((0,formatAbiItem/* formatAbiItem */.B)(x)));
    if (!(abiItem && 'name' in abiItem) || abiItem.type !== 'event')
        throw new errors_abi/* AbiEventSignatureNotFoundError */.kE(signature, { docsPath: decodeEventLog_docsPath });
    const { name, inputs } = abiItem;
    const isUnnamed = inputs?.some((x) => !('name' in x && x.name));
    const args = isUnnamed ? [] : {};
    // Decode topics (indexed args).
    const indexedInputs = inputs
        .map((x, i) => [x, i])
        .filter(([x]) => 'indexed' in x && x.indexed);
    for (let i = 0; i < indexedInputs.length; i++) {
        const [param, argIndex] = indexedInputs[i];
        const topic = argTopics[i];
        if (!topic)
            throw new errors_abi/* DecodeLogTopicsMismatch */.l3({
                abiItem,
                param: param,
            });
        args[isUnnamed ? argIndex : param.name || argIndex] = decodeTopic({
            param,
            value: topic,
        });
    }
    // Decode data (non-indexed args).
    const nonIndexedInputs = inputs.filter((x) => !('indexed' in x && x.indexed));
    if (nonIndexedInputs.length > 0) {
        if (data && data !== '0x') {
            try {
                const decodedData = (0,decodeAbiParameters/* decodeAbiParameters */.n)(nonIndexedInputs, data);
                if (decodedData) {
                    if (isUnnamed)
                        for (let i = 0; i < inputs.length; i++)
                            args[i] = args[i] ?? decodedData.shift();
                    else
                        for (let i = 0; i < nonIndexedInputs.length; i++)
                            args[nonIndexedInputs[i].name] = decodedData[i];
                }
            }
            catch (err) {
                if (strict) {
                    if (err instanceof errors_abi/* AbiDecodingDataSizeTooSmallError */.Iy ||
                        err instanceof cursor/* PositionOutOfBoundsError */.SK)
                        throw new errors_abi/* DecodeLogDataMismatch */.fo({
                            abiItem,
                            data: data,
                            params: nonIndexedInputs,
                            size: (0,size/* size */.E)(data),
                        });
                    throw err;
                }
            }
        }
        else if (strict) {
            throw new errors_abi/* DecodeLogDataMismatch */.fo({
                abiItem,
                data: '0x',
                params: nonIndexedInputs,
                size: 0,
            });
        }
    }
    return {
        eventName: name,
        args: Object.values(args).length > 0 ? args : undefined,
    };
}
function decodeTopic({ param, value }) {
    if (param.type === 'string' ||
        param.type === 'bytes' ||
        param.type === 'tuple' ||
        param.type.match(/^(.*)\[(\d+)?\]$/))
        return value;
    const decodedArg = (0,decodeAbiParameters/* decodeAbiParameters */.n)([param], value) || [];
    return decodedArg[0];
}
//# sourceMappingURL=decodeEventLog.js.map
;// ./node_modules/viem/_esm/utils/abi/parseEventLogs.js
// TODO(v3): checksum address.





/**
 * Extracts & decodes logs matching the provided signature(s) (`abi` + optional `eventName`)
 * from a set of opaque logs.
 *
 * @param parameters - {@link ParseEventLogsParameters}
 * @returns The logs. {@link ParseEventLogsReturnType}
 *
 * @example
 * import { createClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { parseEventLogs } from 'viem/op-stack'
 *
 * const client = createClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const receipt = await getTransactionReceipt(client, {
 *   hash: '0xec23b2ba4bc59ba61554507c1b1bc91649e6586eb2dd00c728e8ed0db8bb37ea',
 * })
 *
 * const logs = parseEventLogs({ logs: receipt.logs })
 * // [{ args: { ... }, eventName: 'TransactionDeposited', ... }, ...]
 */
function parseEventLogs(parameters) {
    const { abi, args, logs, strict = true } = parameters;
    const eventName = (() => {
        if (!parameters.eventName)
            return undefined;
        if (Array.isArray(parameters.eventName))
            return parameters.eventName;
        return [parameters.eventName];
    })();
    return logs
        .map((log) => {
        // Find all matching ABI items with the same selector.
        // Multiple events can share the same selector but differ in indexed parameters
        // (e.g., ERC20 vs ERC721 Transfer events).
        const abiItems = abi.filter((abiItem) => abiItem.type === 'event' &&
            log.topics[0] === (0,toEventSelector/* toEventSelector */.h)(abiItem));
        if (abiItems.length === 0)
            return null;
        // Try each matching ABI item until one successfully decodes.
        let event;
        let abiItem;
        for (const item of abiItems) {
            try {
                event = decodeEventLog({
                    ...log,
                    abi: [item],
                    strict: true,
                });
                abiItem = item;
                break;
            }
            catch {
                // Try next ABI item
            }
        }
        // If strict decoding failed for all, and we're in non-strict mode,
        // fall back to the first matching ABI item.
        if (!event && !strict) {
            abiItem = abiItems[0];
            try {
                event = decodeEventLog({
                    ...log,
                    abi: [abiItem],
                    strict: false,
                });
            }
            catch {
                // If decoding still fails, return partial log in non-strict mode.
                const isUnnamed = abiItem.inputs?.some((x) => !('name' in x && x.name));
                return {
                    ...log,
                    args: isUnnamed ? [] : {},
                    eventName: abiItem.name,
                };
            }
        }
        // If no event was found, return null.
        if (!event || !abiItem)
            return null;
        // Check that the decoded event name matches the provided event name.
        if (eventName && !eventName.includes(event.eventName))
            return null;
        // Check that the decoded event args match the provided args.
        if (!includesArgs({
            args: event.args,
            inputs: abiItem.inputs,
            matchArgs: args,
        }))
            return null;
        return { ...event, ...log };
    })
        .filter(Boolean);
}
function includesArgs(parameters) {
    const { args, inputs, matchArgs } = parameters;
    if (!matchArgs)
        return true;
    if (!args)
        return false;
    function isEqual(input, value, arg) {
        try {
            if (input.type === 'address')
                return (0,isAddressEqual/* isAddressEqual */.h)(value, arg);
            if (input.type === 'string' || input.type === 'bytes')
                return (0,keccak256/* keccak256 */.S)((0,toBytes/* toBytes */.ZJ)(value)) === arg;
            return value === arg;
        }
        catch {
            return false;
        }
    }
    if (Array.isArray(args) && Array.isArray(matchArgs)) {
        return matchArgs.every((value, index) => {
            if (value === null || value === undefined)
                return true;
            const input = inputs[index];
            if (!input)
                return false;
            const value_ = Array.isArray(value) ? value : [value];
            return value_.some((value) => isEqual(input, value, args[index]));
        });
    }
    if (typeof args === 'object' &&
        !Array.isArray(args) &&
        typeof matchArgs === 'object' &&
        !Array.isArray(matchArgs))
        return Object.entries(matchArgs).every(([key, value]) => {
            if (value === null || value === undefined)
                return true;
            const input = inputs.find((input) => input.name === key);
            if (!input)
                return false;
            const value_ = Array.isArray(value) ? value : [value];
            return value_.some((value) => isEqual(input, value, args[key]));
        });
    return false;
}
//# sourceMappingURL=parseEventLogs.js.map
;// ./node_modules/viem/_esm/utils/formatters/log.js
function formatLog(log, { args, eventName, } = {}) {
    return {
        ...log,
        blockHash: log.blockHash ? log.blockHash : null,
        blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
        blockTimestamp: log.blockTimestamp
            ? BigInt(log.blockTimestamp)
            : log.blockTimestamp === null
                ? null
                : undefined,
        logIndex: log.logIndex ? Number(log.logIndex) : null,
        transactionHash: log.transactionHash ? log.transactionHash : null,
        transactionIndex: log.transactionIndex
            ? Number(log.transactionIndex)
            : null,
        ...(eventName ? { args, eventName } : {}),
    };
}
//# sourceMappingURL=log.js.map
;// ./node_modules/viem/_esm/actions/public/getLogs.js




/**
 * Returns a list of event logs matching the provided parameters.
 *
 * - Docs: https://viem.sh/docs/actions/public/getLogs
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/logs_event-logs
 * - JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)
 *
 * @param client - Client to use
 * @param parameters - {@link GetLogsParameters}
 * @returns A list of event logs. {@link GetLogsReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbiItem } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getLogs } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const logs = await getLogs(client)
 */
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_, } = {}) {
    const strict = strict_ ?? false;
    const events = events_ ?? (event ? [event] : undefined);
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event) => encodeEventTopics({
            abi: [event],
            eventName: event.name,
            args: events_ ? undefined : args,
        }));
        // TODO: Clean up type casting
        topics = [encoded];
        if (event)
            topics = topics[0];
    }
    let logs;
    if (blockHash) {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [{ address, topics, blockHash }],
        });
    }
    else {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    fromBlock: typeof fromBlock === 'bigint' ? (0,toHex/* numberToHex */.cK)(fromBlock) : fromBlock,
                    toBlock: typeof toBlock === 'bigint' ? (0,toHex/* numberToHex */.cK)(toBlock) : toBlock,
                },
            ],
        });
    }
    const formattedLogs = logs.map((log) => formatLog(log));
    if (!events)
        return formattedLogs;
    return parseEventLogs({
        abi: events,
        args: args,
        logs: formattedLogs,
        strict,
    });
}
//# sourceMappingURL=getLogs.js.map
;// ./node_modules/viem/_esm/actions/public/getContractEvents.js



/**
 * Returns a list of event logs emitted by a contract.
 *
 * - Docs: https://viem.sh/docs/contract/getContractEvents#getcontractevents
 * - JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)
 *
 * @param client - Client to use
 * @param parameters - {@link GetContractEventsParameters}
 * @returns A list of event logs. {@link GetContractEventsReturnType}
 *
 * @example
 * import { createClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getContractEvents } from 'viem/public'
 * import { wagmiAbi } from './abi'
 *
 * const client = createClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const logs = await getContractEvents(client, {
 *  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *  abi: wagmiAbi,
 *  eventName: 'Transfer'
 * })
 */
async function getContractEvents(client, parameters) {
    const { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict, } = parameters;
    const event = eventName
        ? (0,getAbiItem/* getAbiItem */.iY)({ abi, name: eventName })
        : undefined;
    const events = !event
        ? abi.filter((x) => x.type === 'event')
        : undefined;
    return getAction(client, getLogs, 'getLogs')({
        address,
        args,
        blockHash,
        event,
        events,
        fromBlock,
        toBlock,
        strict,
    });
}
//# sourceMappingURL=getContractEvents.js.map
;// ./node_modules/viem/_esm/errors/eip712.js

class Eip712DomainNotFoundError extends base/* BaseError */.C {
    constructor({ address }) {
        super(`No EIP-712 domain found on contract "${address}".`, {
            metaMessages: [
                'Ensure that:',
                `- The contract is deployed at the address "${address}".`,
                '- `eip712Domain()` function exists on the contract.',
                '- `eip712Domain()` function matches signature to ERC-5267 specification.',
            ],
            name: 'Eip712DomainNotFoundError',
        });
    }
}
//# sourceMappingURL=eip712.js.map
;// ./node_modules/viem/_esm/actions/public/getEip712Domain.js



/**
 * Reads the EIP-712 domain from a contract, based on the ERC-5267 specification.
 *
 * @param client - A {@link Client} instance.
 * @param parameters - The parameters of the action. {@link GetEip712DomainParameters}
 * @returns The EIP-712 domain, fields, and extensions. {@link GetEip712DomainReturnType}
 *
 * @example
 * ```ts
 * import { createPublicClient, http, getEip712Domain } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const domain = await getEip712Domain(client, {
 *   address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
 * })
 * // {
 * //   domain: {
 * //     name: 'ExampleContract',
 * //     version: '1',
 * //     chainId: 1,
 * //     verifyingContract: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
 * //   },
 * //   fields: '0x0f',
 * //   extensions: [],
 * // }
 * ```
 */
async function getEip712Domain(client, parameters) {
    const { address, factory, factoryData } = parameters;
    try {
        const [fields, name, version, chainId, verifyingContract, salt, extensions,] = await getAction(client, readContract, 'readContract')({
            abi,
            address,
            functionName: 'eip712Domain',
            factory,
            factoryData,
        });
        return {
            domain: {
                name,
                version,
                chainId: Number(chainId),
                verifyingContract,
                salt,
            },
            extensions,
            fields,
        };
    }
    catch (e) {
        const error = e;
        if (error.name === 'ContractFunctionExecutionError' &&
            error.cause.name === 'ContractFunctionZeroDataError') {
            throw new Eip712DomainNotFoundError({ address });
        }
        throw error;
    }
}
const abi = [
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            { name: 'fields', type: 'bytes1' },
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
            { name: 'salt', type: 'bytes32' },
            { name: 'extensions', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=getEip712Domain.js.map
;// ./node_modules/viem/_esm/utils/formatters/feeHistory.js
function formatFeeHistory(feeHistory) {
    return {
        baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
        gasUsedRatio: feeHistory.gasUsedRatio,
        oldestBlock: BigInt(feeHistory.oldestBlock),
        reward: feeHistory.reward?.map((reward) => reward.map((value) => BigInt(value))),
    };
}
//# sourceMappingURL=feeHistory.js.map
;// ./node_modules/viem/_esm/actions/public/getFeeHistory.js


/**
 * Returns a collection of historical gas information.
 *
 * - Docs: https://viem.sh/docs/actions/public/getFeeHistory
 * - JSON-RPC Methods: [`eth_feeHistory`](https://docs.alchemy.com/reference/eth-feehistory)
 *
 * @param client - Client to use
 * @param parameters - {@link GetFeeHistoryParameters}
 * @returns The gas estimate (in wei). {@link GetFeeHistoryReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getFeeHistory } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const feeHistory = await getFeeHistory(client, {
 *   blockCount: 4,
 *   rewardPercentiles: [25, 75],
 * })
 */
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = 'latest', rewardPercentiles, }) {
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
    const feeHistory = await client.request({
        method: 'eth_feeHistory',
        params: [
            (0,toHex/* numberToHex */.cK)(blockCount),
            blockNumberHex || blockTag,
            rewardPercentiles,
        ],
    }, { dedupe: Boolean(blockNumberHex) });
    return formatFeeHistory(feeHistory);
}
//# sourceMappingURL=getFeeHistory.js.map
;// ./node_modules/viem/_esm/actions/public/getFilterChanges.js


/**
 * Returns a list of logs or hashes based on a [Filter](/docs/glossary/terms#filter) since the last time it was called.
 *
 * - Docs: https://viem.sh/docs/actions/public/getFilterChanges
 * - JSON-RPC Methods: [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)
 *
 * A Filter can be created from the following actions:
 *
 * - [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
 * - [`createContractEventFilter`](https://viem.sh/docs/contract/createContractEventFilter)
 * - [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
 * - [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)
 *
 * Depending on the type of filter, the return value will be different:
 *
 * - If the filter was created with `createContractEventFilter` or `createEventFilter`, it returns a list of logs.
 * - If the filter was created with `createPendingTransactionFilter`, it returns a list of transaction hashes.
 * - If the filter was created with `createBlockFilter`, it returns a list of block hashes.
 *
 * @param client - Client to use
 * @param parameters - {@link GetFilterChangesParameters}
 * @returns Logs or hashes. {@link GetFilterChangesReturnType}
 *
 * @example
 * // Blocks
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createBlockFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createBlockFilter(client)
 * const hashes = await getFilterChanges(client, { filter })
 *
 * @example
 * // Contract Events
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createContractEventFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createContractEventFilter(client, {
 *   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 *   abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
 *   eventName: 'Transfer',
 * })
 * const logs = await getFilterChanges(client, { filter })
 *
 * @example
 * // Raw Events
 * import { createPublicClient, http, parseAbiItem } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 *   event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
 * })
 * const logs = await getFilterChanges(client, { filter })
 *
 * @example
 * // Transactions
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createPendingTransactionFilter(client)
 * const hashes = await getFilterChanges(client, { filter })
 */
async function getFilterChanges(_client, { filter, }) {
    const strict = 'strict' in filter && filter.strict;
    const logs = await filter.request({
        method: 'eth_getFilterChanges',
        params: [filter.id],
    });
    if (typeof logs[0] === 'string')
        return logs;
    const formattedLogs = logs.map((log) => formatLog(log));
    if (!('abi' in filter) || !filter.abi)
        return formattedLogs;
    return parseEventLogs({
        abi: filter.abi,
        logs: formattedLogs,
        strict,
    });
}
//# sourceMappingURL=getFilterChanges.js.map
;// ./node_modules/viem/_esm/actions/public/getFilterLogs.js


/**
 * Returns a list of event logs since the filter was created.
 *
 * - Docs: https://viem.sh/docs/actions/public/getFilterLogs
 * - JSON-RPC Methods: [`eth_getFilterLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs)
 *
 * `getFilterLogs` is only compatible with **event filters**.
 *
 * @param client - Client to use
 * @param parameters - {@link GetFilterLogsParameters}
 * @returns A list of event logs. {@link GetFilterLogsReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbiItem } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter, getFilterLogs } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 *   event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
 * })
 * const logs = await getFilterLogs(client, { filter })
 */
async function getFilterLogs(_client, { filter, }) {
    const strict = filter.strict ?? false;
    const logs = await filter.request({
        method: 'eth_getFilterLogs',
        params: [filter.id],
    });
    const formattedLogs = logs.map((log) => formatLog(log));
    if (!filter.abi)
        return formattedLogs;
    return parseEventLogs({
        abi: filter.abi,
        logs: formattedLogs,
        strict,
    });
}
//# sourceMappingURL=getFilterLogs.js.map
;// ./node_modules/viem/_esm/utils/formatters/proof.js

function formatStorageProof(storageProof) {
    return storageProof.map((proof) => ({
        ...proof,
        value: BigInt(proof.value),
    }));
}
function formatProof(proof) {
    return {
        ...proof,
        balance: proof.balance ? BigInt(proof.balance) : undefined,
        nonce: proof.nonce ? (0,fromHex/* hexToNumber */.ME)(proof.nonce) : undefined,
        storageProof: proof.storageProof
            ? formatStorageProof(proof.storageProof)
            : undefined,
    };
}
//# sourceMappingURL=proof.js.map
;// ./node_modules/viem/_esm/actions/public/getProof.js


/**
 * Returns the account and storage values of the specified account including the Merkle-proof.
 *
 * - Docs: https://viem.sh/docs/actions/public/getProof
 * - JSON-RPC Methods:
 *   - Calls [`eth_getProof`](https://eips.ethereum.org/EIPS/eip-1186)
 *
 * @param client - Client to use
 * @param parameters - {@link GetProofParameters}
 * @returns Proof data. {@link GetProofReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getProof } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const block = await getProof(client, {
 *  address: '0x...',
 *  storageKeys: ['0x...'],
 * })
 */
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys, }) {
    const blockTag = blockTag_ ?? 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
    const proof = await client.request({
        method: 'eth_getProof',
        params: [address, storageKeys, blockNumberHex || blockTag],
    });
    return formatProof(proof);
}
//# sourceMappingURL=getProof.js.map
;// ./node_modules/viem/_esm/actions/public/getStorageAt.js

/**
 * Returns the value from a storage slot at a given address.
 *
 * - Docs: https://viem.sh/docs/contract/getStorageAt
 * - JSON-RPC Methods: [`eth_getStorageAt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat)
 *
 * @param client - Client to use
 * @param parameters - {@link GetStorageAtParameters}
 * @returns The value of the storage slot. {@link GetStorageAtReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getStorageAt } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const code = await getStorageAt(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   slot: toHex(0),
 * })
 */
async function getStorageAt(client, { address, blockNumber, blockTag = 'latest', slot }) {
    const blockNumberHex = blockNumber !== undefined ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
    const data = await client.request({
        method: 'eth_getStorageAt',
        params: [address, slot, blockNumberHex || blockTag],
    });
    return data;
}
//# sourceMappingURL=getStorageAt.js.map
;// ./node_modules/viem/_esm/actions/public/getTransaction.js



/**
 * Returns information about a [Transaction](https://viem.sh/docs/glossary/terms#transaction) given a hash or block identifier.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransaction
 * - Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_fetching-transactions
 * - JSON-RPC Methods: [`eth_getTransactionByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionByHash)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionParameters}
 * @returns The transaction information. {@link GetTransactionReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransaction } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transaction = await getTransaction(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index, sender, nonce, }) {
    const blockTag = blockTag_ || 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
    let transaction = null;
    if (hash) {
        transaction = await client.request({
            method: 'eth_getTransactionByHash',
            params: [hash],
        }, { dedupe: true });
    }
    else if (blockHash) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockHashAndIndex',
            params: [blockHash, (0,toHex/* numberToHex */.cK)(index)],
        }, { dedupe: true });
    }
    else if ((blockNumberHex || blockTag) && typeof index === 'number') {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [blockNumberHex || blockTag, (0,toHex/* numberToHex */.cK)(index)],
        }, { dedupe: Boolean(blockNumberHex) });
    }
    else if (sender && typeof nonce === 'number') {
        transaction = await client.request({
            method: 'eth_getTransactionBySenderAndNonce',
            params: [sender, (0,toHex/* numberToHex */.cK)(nonce)],
        }, { dedupe: true });
    }
    if (!transaction)
        throw new errors_transaction/* TransactionNotFoundError */.Kz({
            blockHash,
            blockNumber,
            blockTag,
            hash,
            index,
        });
    const format = client.chain?.formatters?.transaction?.format || formatTransaction;
    return format(transaction, 'getTransaction');
}
//# sourceMappingURL=getTransaction.js.map
;// ./node_modules/viem/_esm/actions/public/getTransactionConfirmations.js



/**
 * Returns the number of blocks passed (confirmations) since the transaction was processed on a block.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransactionConfirmations
 * - Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_fetching-transactions
 * - JSON-RPC Methods: [`eth_getTransactionConfirmations`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionConfirmations)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionConfirmationsParameters}
 * @returns The number of blocks passed since the transaction was processed. If confirmations is 0, then the Transaction has not been confirmed & processed yet. {@link GetTransactionConfirmationsReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransactionConfirmations } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const confirmations = await getTransactionConfirmations(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
    const [blockNumber, transaction] = await Promise.all([
        getAction(client, getBlockNumber, 'getBlockNumber')({}),
        hash
            ? getAction(client, getTransaction, 'getTransaction')({ hash })
            : undefined,
    ]);
    const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
    if (!transactionBlockNumber)
        return 0n;
    return blockNumber - transactionBlockNumber + 1n;
}
//# sourceMappingURL=getTransactionConfirmations.js.map
;// ./node_modules/viem/_esm/utils/formatters/transactionReceipt.js




const receiptStatuses = {
    '0x0': 'reverted',
    '0x1': 'success',
};
function formatTransactionReceipt(transactionReceipt, _) {
    const receipt = {
        ...transactionReceipt,
        blockNumber: transactionReceipt.blockNumber
            ? BigInt(transactionReceipt.blockNumber)
            : null,
        contractAddress: transactionReceipt.contractAddress
            ? transactionReceipt.contractAddress
            : null,
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed
            ? BigInt(transactionReceipt.cumulativeGasUsed)
            : null,
        effectiveGasPrice: transactionReceipt.effectiveGasPrice
            ? BigInt(transactionReceipt.effectiveGasPrice)
            : null,
        gasUsed: transactionReceipt.gasUsed
            ? BigInt(transactionReceipt.gasUsed)
            : null,
        logs: transactionReceipt.logs
            ? transactionReceipt.logs.map((log) => formatLog(log))
            : null,
        to: transactionReceipt.to ? transactionReceipt.to : null,
        transactionIndex: transactionReceipt.transactionIndex
            ? (0,fromHex/* hexToNumber */.ME)(transactionReceipt.transactionIndex)
            : null,
        status: transactionReceipt.status
            ? receiptStatuses[transactionReceipt.status]
            : null,
        type: transactionReceipt.type
            ? transactionType[transactionReceipt.type] || transactionReceipt.type
            : null,
    };
    if (transactionReceipt.blobGasPrice)
        receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
    if (transactionReceipt.blobGasUsed)
        receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
    return receipt;
}
const defineTransactionReceipt = /*#__PURE__*/ (/* unused pure expression or super */ null && (defineFormatter('transactionReceipt', formatTransactionReceipt)));
//# sourceMappingURL=transactionReceipt.js.map
;// ./node_modules/viem/_esm/actions/public/getTransactionReceipt.js


/**
 * Returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms#transaction-receipt) given a [Transaction](https://viem.sh/docs/glossary/terms#transaction) hash.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransactionReceipt
 * - Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_fetching-transactions
 * - JSON-RPC Methods: [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionreceipt)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionReceiptParameters}
 * @returns The transaction receipt. {@link GetTransactionReceiptReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransactionReceipt } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transactionReceipt = await getTransactionReceipt(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getTransactionReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getTransactionReceipt',
        params: [hash],
    }, { dedupe: true });
    if (!receipt)
        throw new errors_transaction/* TransactionReceiptNotFoundError */.Kc({ hash });
    const format = client.chain?.formatters?.transactionReceipt?.format ||
        formatTransactionReceipt;
    return format(receipt, 'getTransactionReceipt');
}
//# sourceMappingURL=getTransactionReceipt.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/constants/contracts.js
var constants_contracts = __webpack_require__(945945);
;// ./node_modules/viem/_esm/actions/public/multicall.js











/**
 * Similar to [`readContract`](https://viem.sh/docs/contract/readContract), but batches up multiple functions on a contract in a single RPC call via the [`multicall3` contract](https://github.com/mds1/multicall).
 *
 * - Docs: https://viem.sh/docs/contract/multicall
 *
 * @param client - Client to use
 * @param parameters - {@link MulticallParameters}
 * @returns An array of results with accompanying status. {@link MulticallReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { multicall } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const abi = parseAbi([
 *   'function balanceOf(address) view returns (uint256)',
 *   'function totalSupply() view returns (uint256)',
 * ])
 * const results = await multicall(client, {
 *   contracts: [
 *     {
 *       address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *       abi,
 *       functionName: 'balanceOf',
 *       args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
 *     },
 *     {
 *       address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *       abi,
 *       functionName: 'totalSupply',
 *     },
 *   ],
 * })
 * // [{ result: 424122n, status: 'success' }, { result: 1000000n, status: 'success' }]
 */
async function multicall(client, parameters) {
    const { account, authorizationList, allowFailure = true, blockNumber, blockOverrides, blockTag, stateOverride, } = parameters;
    const contracts = parameters.contracts;
    const { batchSize = parameters.batchSize ?? 1024, deployless = parameters.deployless ?? false, } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const multicallAddress = (() => {
        if (parameters.multicallAddress)
            return parameters.multicallAddress;
        if (deployless)
            return null;
        if (client.chain) {
            return (0,getChainContractAddress/* getChainContractAddress */.M)({
                blockNumber,
                chain: client.chain,
                contract: 'multicall3',
            });
        }
        throw new Error('client chain not configured. multicallAddress is required.');
    })();
    const chunkedCalls = [[]];
    let currentChunk = 0;
    let currentChunkSize = 0;
    for (let i = 0; i < contracts.length; i++) {
        const { abi, address, args, functionName } = contracts[i];
        try {
            const callData = (0,encodeFunctionData/* encodeFunctionData */.p)({ abi, args, functionName });
            currentChunkSize += (callData.length - 2) / 2;
            // Check to see if we need to create a new chunk.
            if (
            // Check if batching is enabled.
            batchSize > 0 &&
                // Check if the current size of the batch exceeds the size limit.
                currentChunkSize > batchSize &&
                // Check if the current chunk is not already empty.
                chunkedCalls[currentChunk].length > 0) {
                currentChunk++;
                currentChunkSize = (callData.length - 2) / 2;
                chunkedCalls[currentChunk] = [];
            }
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData,
                    target: address,
                },
            ];
        }
        catch (err) {
            const error = getContractError(err, {
                abi,
                address,
                args,
                docsPath: '/docs/contract/multicall',
                functionName,
                sender: account,
            });
            if (!allowFailure)
                throw error;
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData: '0x',
                    target: address,
                },
            ];
        }
    }
    const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => getAction(client, readContract, 'readContract')({
        ...(multicallAddress === null
            ? { code: constants_contracts/* multicall3Bytecode */.Ez }
            : { address: multicallAddress }),
        abi: abis/* multicall3Abi */.v2,
        account,
        args: [calls],
        authorizationList,
        blockNumber,
        blockOverrides,
        blockTag,
        functionName: 'aggregate3',
        stateOverride,
    })));
    const results = [];
    for (let i = 0; i < aggregate3Results.length; i++) {
        const result = aggregate3Results[i];
        // If an error occurred in a `readContract` invocation (ie. network error),
        // then append the failure reason to each contract result.
        if (result.status === 'rejected') {
            if (!allowFailure)
                throw result.reason;
            for (let j = 0; j < chunkedCalls[i].length; j++) {
                results.push({
                    status: 'failure',
                    error: result.reason,
                    result: undefined,
                });
            }
            continue;
        }
        // If the `readContract` call was successful, then decode the results.
        const aggregate3Result = result.value;
        for (let j = 0; j < aggregate3Result.length; j++) {
            // Extract the response from `readContract`
            const { returnData, success } = aggregate3Result[j];
            // Extract the request call data from the original call.
            const { callData } = chunkedCalls[i][j];
            // Extract the contract config for this call from the `contracts` argument
            // for decoding.
            const { abi, address, functionName, args } = contracts[results.length];
            try {
                if (callData === '0x')
                    throw new errors_abi/* AbiDecodingZeroDataError */.O();
                if (!success)
                    throw new contract/* RawContractError */.$S({ data: returnData });
                const result = (0,decodeFunctionResult/* decodeFunctionResult */.e)({
                    abi,
                    args,
                    data: returnData,
                    functionName,
                });
                results.push(allowFailure ? { result, status: 'success' } : result);
            }
            catch (err) {
                const error = getContractError(err, {
                    abi,
                    address,
                    args,
                    docsPath: '/docs/contract/multicall',
                    functionName,
                });
                if (!allowFailure)
                    throw error;
                results.push({ error, result: undefined, status: 'failure' });
            }
        }
    }
    if (results.length !== contracts.length)
        throw new base/* BaseError */.C('multicall results mismatch');
    return results;
}
//# sourceMappingURL=multicall.js.map
// EXTERNAL MODULE: ./node_modules/viem/node_modules/ox/_esm/core/BlockOverrides.js + 1 modules
var BlockOverrides = __webpack_require__(566099);
;// ./node_modules/viem/_esm/actions/public/simulateBlocks.js
















/**
 * Simulates a set of calls on block(s) with optional block and state overrides.
 *
 * @example
 * ```ts
 * import { createClient, http, parseEther } from 'viem'
 * import { simulate } from 'viem/actions'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const result = await simulate(client, {
 *   blocks: [{
 *     blockOverrides: {
 *       number: 69420n,
 *     },
 *     calls: [{
 *       {
 *         account: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
 *         data: '0xdeadbeef',
 *         to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *       },
 *       {
 *         account: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
 *         to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *         value: parseEther('1'),
 *       },
 *     }],
 *     stateOverrides: [{
 *       address: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
 *       balance: parseEther('10'),
 *     }],
 *   }]
 * })
 * ```
 *
 * @param client - Client to use.
 * @param parameters - {@link SimulateBlocksParameters}
 * @returns Simulated blocks. {@link SimulateBlocksReturnType}
 */
async function simulateBlocks(client, parameters) {
    const { blockNumber, blockTag = client.experimental_blockTag ?? 'latest', blocks, returnFullTransactions, traceTransfers, validation, } = parameters;
    try {
        const blockStateCalls = [];
        for (const block of blocks) {
            const blockOverrides = block.blockOverrides
                ? BlockOverrides/* toRpc */.J(block.blockOverrides)
                : undefined;
            const calls = block.calls.map((call_) => {
                const call = call_;
                const account = call.account ? (0,parseAccount/* parseAccount */.J)(call.account) : undefined;
                const data = call.abi ? (0,encodeFunctionData/* encodeFunctionData */.p)(call) : call.data;
                const request = {
                    ...call,
                    account,
                    data: call.dataSuffix
                        ? (0,concat/* concat */.xW)([data || '0x', call.dataSuffix])
                        : data,
                    from: call.from ?? account?.address,
                };
                (0,assertRequest/* assertRequest */.c)(request);
                return (0,transactionRequest/* formatTransactionRequest */.Bv)(request);
            });
            const stateOverrides = block.stateOverrides
                ? (0,utils_stateOverride/* serializeStateOverride */.yH)(block.stateOverrides)
                : undefined;
            blockStateCalls.push({
                blockOverrides,
                calls,
                stateOverrides,
            });
        }
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0,toHex/* numberToHex */.cK)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const result = await client.request({
            method: 'eth_simulateV1',
            params: [
                { blockStateCalls, returnFullTransactions, traceTransfers, validation },
                block,
            ],
        });
        return result.map((block, i) => ({
            ...formatBlock(block),
            calls: block.calls.map((call, j) => {
                const { abi, args, functionName, to } = blocks[i].calls[j];
                const data = call.error?.data ?? call.returnData;
                const gasUsed = BigInt(call.gasUsed);
                const logs = call.logs?.map((log) => formatLog(log));
                const status = call.status === '0x1' ? 'success' : 'failure';
                const result = abi && status === 'success' && data !== '0x'
                    ? (0,decodeFunctionResult/* decodeFunctionResult */.e)({
                        abi,
                        data,
                        functionName,
                    })
                    : null;
                const error = (() => {
                    if (status === 'success')
                        return undefined;
                    let error;
                    if (call.error?.data === '0x')
                        error = new errors_abi/* AbiDecodingZeroDataError */.O();
                    else if (call.error)
                        error = new contract/* RawContractError */.$S(call.error);
                    if (!error)
                        return undefined;
                    return getContractError(error, {
                        abi: (abi ?? []),
                        address: to ?? '0x',
                        args,
                        functionName: functionName ?? '<unknown>',
                    });
                })();
                return {
                    data,
                    gasUsed,
                    logs,
                    status,
                    ...(status === 'success'
                        ? {
                            result,
                        }
                        : {
                            error,
                        }),
                };
            }),
        }));
    }
    catch (e) {
        const cause = e;
        const error = (0,getNodeError/* getNodeError */.l)(cause, {});
        if (error instanceof node/* UnknownNodeError */.RM)
            throw cause;
        throw error;
    }
}
//# sourceMappingURL=simulateBlocks.js.map
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/errors/abiItem.js
var errors_abiItem = __webpack_require__(206959);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/runtime/signatures.js
var signatures = __webpack_require__(569508);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/runtime/structs.js + 1 modules
var runtime_structs = __webpack_require__(197256);
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/runtime/utils.js + 2 modules
var utils = __webpack_require__(136993);
;// ./node_modules/abitype/dist/esm/human-readable/parseAbiItem.js




/**
 * Parses human-readable ABI item (e.g. error, event, function) into {@link Abi} item
 *
 * @param signature - Human-readable ABI item
 * @returns Parsed {@link Abi} item
 *
 * @example
 * const abiItem = parseAbiItem('function balanceOf(address owner) view returns (uint256)')
 * //    ^? const abiItem: { name: "balanceOf"; type: "function"; stateMutability: "view";...
 *
 * @example
 * const abiItem = parseAbiItem([
 *   //  ^? const abiItem: { name: "foo"; type: "function"; stateMutability: "view"; inputs:...
 *   'function foo(Baz bar) view returns (string)',
 *   'struct Baz { string name; }',
 * ])
 */
function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string')
        abiItem = (0,utils/* parseSignature */.uT)(signature);
    else {
        const structs = (0,runtime_structs/* parseStructs */.e)(signature);
        const length = signature.length;
        for (let i = 0; i < length; i++) {
            const signature_ = signature[i];
            if ((0,signatures/* isStructSignature */.WL)(signature_))
                continue;
            abiItem = (0,utils/* parseSignature */.uT)(signature_, structs);
            break;
        }
    }
    if (!abiItem)
        throw new errors_abiItem/* InvalidAbiItemError */.xo({ signature });
    return abiItem;
}
//# sourceMappingURL=parseAbiItem.js.map
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/formatAbiItem.js
var human_readable_formatAbiItem = __webpack_require__(449124);
// EXTERNAL MODULE: ./node_modules/viem/node_modules/ox/_esm/core/Errors.js + 2 modules
var Errors = __webpack_require__(643684);
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/sha3.js
var sha3 = __webpack_require__(977238);
// EXTERNAL MODULE: ./node_modules/viem/node_modules/ox/_esm/core/Hex.js
var core_Hex = __webpack_require__(399516);
;// ./node_modules/viem/node_modules/ox/_esm/core/internal/bytes.js

/** @internal */
function assertSize(bytes, size_) {
    if (Bytes_size(bytes) > size_)
        throw new SizeOverflowError({
            givenSize: Bytes_size(bytes),
            maxSize: size_,
        });
}
/** @internal */
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > Bytes_size(value) - 1)
        throw new SliceOffsetOutOfBoundsError({
            offset: start,
            position: 'start',
            size: Bytes_size(value),
        });
}
/** @internal */
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        Bytes_size(value) !== end - start) {
        throw new SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: Bytes_size(value),
        });
    }
}
/** @internal */
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102,
};
/** @internal */
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine)
        return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F)
        return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f)
        return char - (charCodeMap.a - 10);
    return undefined;
}
/** @internal */
function pad(bytes, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0)
        return bytes;
    if (bytes.length > size)
        throw new SizeExceedsPaddingSizeError({
            size: bytes.length,
            targetSize: size,
            type: 'Bytes',
        });
    const paddedBytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] =
            bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
/** @internal */
function bytes_trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value;
    let sliceLength = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0')
            sliceLength++;
        else
            break;
    }
    data =
        dir === 'left'
            ? data.slice(sliceLength)
            : data.slice(0, data.length - sliceLength);
    return data;
}
//# sourceMappingURL=bytes.js.map
// EXTERNAL MODULE: ./node_modules/viem/node_modules/ox/_esm/core/internal/hex.js
var internal_hex = __webpack_require__(498298);
// EXTERNAL MODULE: ./node_modules/viem/node_modules/ox/_esm/core/Json.js
var Json = __webpack_require__(481295);
;// ./node_modules/viem/node_modules/ox/_esm/core/Bytes.js






const decoder = /*#__PURE__*/ new TextDecoder();
const encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Asserts if the given value is {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.assert('abc')
 * // @error: Bytes.InvalidBytesTypeError:
 * // @error: Value `"abc"` of type `string` is an invalid Bytes value.
 * // @error: Bytes values must be of type `Uint8Array`.
 * ```
 *
 * @param value - Value to assert.
 */
function assert(value) {
    if (value instanceof Uint8Array)
        return;
    if (!value)
        throw new InvalidBytesTypeError(value);
    if (typeof value !== 'object')
        throw new InvalidBytesTypeError(value);
    if (!('BYTES_PER_ELEMENT' in value))
        throw new InvalidBytesTypeError(value);
    if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== 'Uint8Array')
        throw new InvalidBytesTypeError(value);
}
/**
 * Concatenates two or more {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const bytes = Bytes.concat(
 *   Bytes.from([1]),
 *   Bytes.from([69]),
 *   Bytes.from([420, 69]),
 * )
 * // @log: Uint8Array [ 1, 69, 420, 69 ]
 * ```
 *
 * @param values - Values to concatenate.
 * @returns Concatenated {@link ox#Bytes.Bytes}.
 */
function Bytes_concat(...values) {
    let length = 0;
    for (const arr of values) {
        length += arr.length;
    }
    const result = new Uint8Array(length);
    for (let i = 0, index = 0; i < values.length; i++) {
        const arr = values[i];
        result.set(arr, index);
        index += arr.length;
    }
    return result;
}
/**
 * Instantiates a {@link ox#Bytes.Bytes} value from a `Uint8Array`, a hex string, or an array of unsigned 8-bit integers.
 *
 * :::tip
 *
 * To instantiate from a **Boolean**, **String**, or **Number**, use one of the following:
 *
 * - `Bytes.fromBoolean`
 *
 * - `Bytes.fromString`
 *
 * - `Bytes.fromNumber`
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.from([255, 124, 5, 4])
 * // @log: Uint8Array([255, 124, 5, 4])
 *
 * const data = Bytes.from('0xdeadbeef')
 * // @log: Uint8Array([222, 173, 190, 239])
 * ```
 *
 * @param value - Value to convert.
 * @returns A {@link ox#Bytes.Bytes} instance.
 */
function from(value) {
    if (value instanceof Uint8Array)
        return value;
    if (typeof value === 'string')
        return Bytes_fromHex(value);
    return fromArray(value);
}
/**
 * Converts an array of unsigned 8-bit integers into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromArray([255, 124, 5, 4])
 * // @log: Uint8Array([255, 124, 5, 4])
 * ```
 *
 * @param value - Value to convert.
 * @returns A {@link ox#Bytes.Bytes} instance.
 */
function fromArray(value) {
    return value instanceof Uint8Array ? value : new Uint8Array(value);
}
/**
 * Encodes a boolean value into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromBoolean(true)
 * // @log: Uint8Array([1])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromBoolean(true, { size: 32 })
 * // @log: Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
 * ```
 *
 * @param value - Boolean value to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function fromBoolean(value, options = {}) {
    const { size } = options;
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof size === 'number') {
        internal.assertSize(bytes, size);
        return padLeft(bytes, size);
    }
    return bytes;
}
/**
 * Encodes a {@link ox#Hex.Hex} value into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromHex('0x48656c6c6f20776f726c6421')
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromHex('0x48656c6c6f20776f726c6421', { size: 32 })
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 * ```
 *
 * @param value - {@link ox#Hex.Hex} value to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function Bytes_fromHex(value, options = {}) {
    const { size } = options;
    let hex = value;
    if (size) {
        internal_hex/* assertSize */.Sl(value, size);
        hex = core_Hex/* padRight */.M7(value, size);
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2)
        hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for (let index = 0, j = 0; index < length; index++) {
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new Errors/* BaseError */.C(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = (nibbleLeft << 4) | nibbleRight;
    }
    return bytes;
}
/**
 * Encodes a number value into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromNumber(420)
 * // @log: Uint8Array([1, 164])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromNumber(420, { size: 4 })
 * // @log: Uint8Array([0, 0, 1, 164])
 * ```
 *
 * @param value - Number value to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function fromNumber(value, options) {
    const hex = Hex.fromNumber(value, options);
    return Bytes_fromHex(hex);
}
/**
 * Encodes a string into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromString('Hello world!')
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromString('Hello world!', { size: 32 })
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 * ```
 *
 * @param value - String to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function fromString(value, options = {}) {
    const { size } = options;
    const bytes = encoder.encode(value);
    if (typeof size === 'number') {
        assertSize(bytes, size);
        return padRight(bytes, size);
    }
    return bytes;
}
/**
 * Checks if two {@link ox#Bytes.Bytes} values are equal.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.isEqual(Bytes.from([1]), Bytes.from([1]))
 * // @log: true
 *
 * Bytes.isEqual(Bytes.from([1]), Bytes.from([2]))
 * // @log: false
 * ```
 *
 * @param bytesA - First {@link ox#Bytes.Bytes} value.
 * @param bytesB - Second {@link ox#Bytes.Bytes} value.
 * @returns `true` if the two values are equal, otherwise `false`.
 */
function isEqual(bytesA, bytesB) {
    return equalBytes(bytesA, bytesB);
}
/**
 * Pads a {@link ox#Bytes.Bytes} value to the left with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.padLeft(Bytes.from([1]), 4)
 * // @log: Uint8Array([0, 0, 0, 1])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value to pad.
 * @param size - Size to pad the {@link ox#Bytes.Bytes} value to.
 * @returns Padded {@link ox#Bytes.Bytes} value.
 */
function padLeft(value, size) {
    return internal.pad(value, { dir: 'left', size });
}
/**
 * Pads a {@link ox#Bytes.Bytes} value to the right with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.padRight(Bytes.from([1]), 4)
 * // @log: Uint8Array([1, 0, 0, 0])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value to pad.
 * @param size - Size to pad the {@link ox#Bytes.Bytes} value to.
 * @returns Padded {@link ox#Bytes.Bytes} value.
 */
function padRight(value, size) {
    return pad(value, { dir: 'right', size });
}
/**
 * Generates random {@link ox#Bytes.Bytes} of the specified length.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const bytes = Bytes.random(32)
 * // @log: Uint8Array([... x32])
 * ```
 *
 * @param length - Length of the random {@link ox#Bytes.Bytes} to generate.
 * @returns Random {@link ox#Bytes.Bytes} of the specified length.
 */
function random(length) {
    return crypto.getRandomValues(new Uint8Array(length));
}
/**
 * Retrieves the size of a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.size(Bytes.from([1, 2, 3, 4]))
 * // @log: 4
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value.
 * @returns Size of the {@link ox#Bytes.Bytes} value.
 */
function Bytes_size(value) {
    return value.length;
}
/**
 * Returns a section of a {@link ox#Bytes.Bytes} value given a start/end bytes offset.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.slice(
 *   Bytes.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
 *   1,
 *   4,
 * )
 * // @log: Uint8Array([2, 3, 4])
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} value.
 * @param start - Start offset.
 * @param end - End offset.
 * @param options - Slice options.
 * @returns Sliced {@link ox#Bytes.Bytes} value.
 */
function slice(value, start, end, options = {}) {
    const { strict } = options;
    assertStartOffset(value, start);
    const value_ = value.slice(start, end);
    if (strict)
        assertEndOffset(value_, start, end);
    return value_;
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a bigint.
 *
 * @example
 * ```ts
 * import { Bytes } from 'ox'
 *
 * Bytes.toBigInt(Bytes.from([1, 164]))
 * // @log: 420n
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Decoding options.
 * @returns Decoded bigint.
 */
function toBigInt(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined')
        assertSize(bytes, size);
    const hex = core_Hex/* fromBytes */.uK(bytes, options);
    return core_Hex/* toBigInt */.Dg(hex, options);
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a boolean.
 *
 * @example
 * ```ts
 * import { Bytes } from 'ox'
 *
 * Bytes.toBoolean(Bytes.from([1]))
 * // @log: true
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Decoding options.
 * @returns Decoded boolean.
 */
function toBoolean(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        assertSize(bytes_, size);
        bytes_ = trimLeft(bytes_);
    }
    if (bytes_.length > 1 || bytes_[0] > 1)
        throw new InvalidBytesBooleanError(bytes_);
    return Boolean(bytes_[0]);
}
/**
 * Encodes a {@link ox#Bytes.Bytes} value into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.toHex(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // '0x48656c6c6f20576f726c6421'
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Options.
 * @returns Decoded {@link ox#Hex.Hex} value.
 */
function Bytes_toHex(value, options = {}) {
    return Hex.fromBytes(value, options);
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a number.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.toNumber(Bytes.from([1, 164]))
 * // @log: 420
 * ```
 */
function toNumber(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined')
        assertSize(bytes, size);
    const hex = core_Hex/* fromBytes */.uK(bytes, options);
    return core_Hex/* toNumber */.Ro(hex, options);
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a string.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.toString(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // @log: 'Hello world'
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Options.
 * @returns Decoded string.
 */
function Bytes_toString(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        assertSize(bytes_, size);
        bytes_ = trimRight(bytes_);
    }
    return decoder.decode(bytes_);
}
/**
 * Trims leading zeros from a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.trimLeft(Bytes.from([0, 0, 0, 0, 1, 2, 3]))
 * // @log: Uint8Array([1, 2, 3])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value.
 * @returns Trimmed {@link ox#Bytes.Bytes} value.
 */
function trimLeft(value) {
    return bytes_trim(value, { dir: 'left' });
}
/**
 * Trims trailing zeros from a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.trimRight(Bytes.from([1, 2, 3, 0, 0, 0, 0]))
 * // @log: Uint8Array([1, 2, 3])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value.
 * @returns Trimmed {@link ox#Bytes.Bytes} value.
 */
function trimRight(value) {
    return bytes_trim(value, { dir: 'right' });
}
/**
 * Checks if the given value is {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.validate('0x')
 * // @log: false
 *
 * Bytes.validate(Bytes.from([1, 2, 3]))
 * // @log: true
 * ```
 *
 * @param value - Value to check.
 * @returns `true` if the value is {@link ox#Bytes.Bytes}, otherwise `false`.
 */
function validate(value) {
    try {
        assert(value);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Thrown when the bytes value cannot be represented as a boolean.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.toBoolean(Bytes.from([5]))
 * // @error: Bytes.InvalidBytesBooleanError: Bytes value `[5]` is not a valid boolean.
 * // @error: The bytes array must contain a single byte of either a `0` or `1` value.
 * ```
 */
class InvalidBytesBooleanError extends Errors/* BaseError */.C {
    constructor(bytes) {
        super(`Bytes value \`${bytes}\` is not a valid boolean.`, {
            metaMessages: [
                'The bytes array must contain a single byte of either a `0` or `1` value.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesBooleanError'
        });
    }
}
/**
 * Thrown when a value cannot be converted to bytes.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Bytes } from 'ox'
 *
 * Bytes.from('foo')
 * // @error: Bytes.InvalidBytesTypeError: Value `foo` of type `string` is an invalid Bytes value.
 * ```
 */
class InvalidBytesTypeError extends Errors/* BaseError */.C {
    constructor(value) {
        super(`Value \`${typeof value === 'object' ? Json/* stringify */.A(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
            metaMessages: ['Bytes values must be of type `Bytes`.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesTypeError'
        });
    }
}
/**
 * Thrown when a size exceeds the maximum allowed size.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.fromString('Hello World!', { size: 8 })
 * // @error: Bytes.SizeOverflowError: Size cannot exceed `8` bytes. Given size: `12` bytes.
 * ```
 */
class SizeOverflowError extends Errors/* BaseError */.C {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeOverflowError'
        });
    }
}
/**
 * Thrown when a slice offset is out-of-bounds.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.slice(Bytes.from([1, 2, 3]), 4)
 * // @error: Bytes.SliceOffsetOutOfBoundsError: Slice starting at offset `4` is out-of-bounds (size: `3`).
 * ```
 */
class SliceOffsetOutOfBoundsError extends Errors/* BaseError */.C {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SliceOffsetOutOfBoundsError'
        });
    }
}
/**
 * Thrown when a the padding size exceeds the maximum allowed size.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.padLeft(Bytes.fromString('Hello World!'), 8)
 * // @error: [Bytes.SizeExceedsPaddingSizeError: Bytes size (`12`) exceeds padding size (`8`).
 * ```
 */
class SizeExceedsPaddingSizeError extends Errors/* BaseError */.C {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeExceedsPaddingSizeError'
        });
    }
}
//# sourceMappingURL=Bytes.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/Hash.js





/**
 * Calculates the [Keccak256](https://en.wikipedia.org/wiki/SHA-3) hash of a {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 *
 * This function is a re-export of `keccak_256` from [`@noble/hashes`](https://github.com/paulmillr/noble-hashes), an audited & minimal JS hashing library.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.keccak256('0xdeadbeef')
 * // @log: '0xd4fd4e189132273036449fc9e11198c739161b4c0116a9a2dccdfa1c492006f1'
 * ```
 *
 * @example
 * ### Calculate Hash of a String
 *
 * ```ts twoslash
 * import { Hash, Hex } from 'ox'
 *
 * Hash.keccak256(Hex.fromString('hello world'))
 * // @log: '0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0'
 * ```
 *
 * @example
 * ### Configure Return Type
 *
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.keccak256('0xdeadbeef', { as: 'Bytes' })
 * // @log: Uint8Array [...]
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 * @param options - Options.
 * @returns Keccak256 hash.
 */
function Hash_keccak256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0,sha3/* keccak_256 */.lY)(from(value));
    if (as === 'Bytes')
        return bytes;
    return core_Hex/* fromBytes */.uK(bytes);
}
/**
 * Calculates the [Ripemd160](https://en.wikipedia.org/wiki/RIPEMD) hash of a {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 *
 * This function is a re-export of `ripemd160` from [`@noble/hashes`](https://github.com/paulmillr/noble-hashes), an audited & minimal JS hashing library.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.ripemd160('0xdeadbeef')
 * // '0x226821c2f5423e11fe9af68bd285c249db2e4b5a'
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 * @param options - Options.
 * @returns Ripemd160 hash.
 */
function ripemd160(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = noble_ripemd160(Bytes.from(value));
    if (as === 'Bytes')
        return bytes;
    return Hex.fromBytes(bytes);
}
/**
 * Calculates the [Sha256](https://en.wikipedia.org/wiki/SHA-256) hash of a {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 *
 * This function is a re-export of `sha256` from [`@noble/hashes`](https://github.com/paulmillr/noble-hashes), an audited & minimal JS hashing library.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.sha256('0xdeadbeef')
 * // '0x5f78c33274e43fa9de5659265c1d917e25c03722dcb0b8d27db8d5feaa813953'
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 * @param options - Options.
 * @returns Sha256 hash.
 */
function Hash_sha256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = noble_sha256(Bytes.from(value));
    if (as === 'Bytes')
        return bytes;
    return Hex.fromBytes(bytes);
}
/**
 * Checks if a string is a valid hash value.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.validate('0x')
 * // @log: false
 *
 * Hash.validate('0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0')
 * // @log: true
 * ```
 *
 * @param value - Value to check.
 * @returns Whether the value is a valid hash.
 */
function Hash_validate(value) {
    return Hex.validate(value) && Hex.size(value) === 32;
}
//# sourceMappingURL=Hash.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/internal/lru.js
/**
 * @internal
 *
 * Map with a LRU (Least recently used) policy.
 * @see https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */
class LruMap extends Map {
    constructor(size) {
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey)
                this.delete(firstKey);
        }
        return this;
    }
}
//# sourceMappingURL=lru.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/Caches.js

const caches = {
    checksum: /*#__PURE__*/ new LruMap(8192),
};
const checksum = caches.checksum;
/**
 * Clears all global caches.
 *
 * @example
 * ```ts
 * import { Caches } from 'ox'
 * Caches.clear()
 * ```
 */
function clear() {
    for (const cache of Object.values(caches))
        cache.clear();
}
//# sourceMappingURL=Caches.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/Address.js





const addressRegex = /^0x[a-fA-F0-9]{40}$/;
/**
 * Asserts that the given value is a valid {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.assert('0xA0Cf798816D4b9b9866b5330EEa46a18382f251e')
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.assert('0xdeadbeef')
 * // @error: InvalidAddressError: Address "0xdeadbeef" is invalid.
 * ```
 *
 * @param value - Value to assert if it is a valid address.
 * @param options - Assertion options.
 */
function Address_assert(value, options = {}) {
    const { strict = true } = options;
    if (!addressRegex.test(value))
        throw new InvalidAddressError({
            address: value,
            cause: new InvalidInputError(),
        });
    if (strict) {
        if (value.toLowerCase() === value)
            return;
        if (Address_checksum(value) !== value)
            throw new InvalidAddressError({
                address: value,
                cause: new InvalidChecksumError(),
            });
    }
}
/**
 * Computes the checksum address for the given {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.checksum('0xa0cf798816d4b9b9866b5330eea46a18382f251e')
 * // @log: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
 * ```
 *
 * @param address - The address to compute the checksum for.
 * @returns The checksummed address.
 */
function Address_checksum(address) {
    if (checksum.has(address))
        return checksum.get(address);
    Address_assert(address, { strict: false });
    const hexAddress = address.substring(2).toLowerCase();
    const hash = Hash_keccak256(fromString(hexAddress), { as: 'Bytes' });
    const characters = hexAddress.split('');
    for (let i = 0; i < 40; i += 2) {
        if (hash[i >> 1] >> 4 >= 8 && characters[i]) {
            characters[i] = characters[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && characters[i + 1]) {
            characters[i + 1] = characters[i + 1].toUpperCase();
        }
    }
    const result = `0x${characters.join('')}`;
    checksum.set(address, result);
    return result;
}
/**
 * Converts a stringified address to a typed (optionally checksummed) {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.from('0xa0cf798816d4b9b9866b5330eea46a18382f251e')
 * // @log: '0xa0cf798816d4b9b9866b5330eea46a18382f251e'
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.from('0xa0cf798816d4b9b9866b5330eea46a18382f251e', {
 *   checksum: true
 * })
 * // @log: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.from('hello')
 * // @error: InvalidAddressError: Address "0xa" is invalid.
 * ```
 *
 * @param address - An address string to convert to a typed Address.
 * @param options - Conversion options.
 * @returns The typed Address.
 */
function Address_from(address, options = {}) {
    const { checksum: checksumVal = false } = options;
    Address_assert(address);
    if (checksumVal)
        return Address_checksum(address);
    return address;
}
/**
 * Converts an ECDSA public key to an {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address, PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from(
 *   '0x048318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5',
 * )
 * const address = Address.fromPublicKey(publicKey)
 * // @log: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
 * ```
 *
 * @param publicKey - The ECDSA public key to convert to an {@link ox#Address.Address}.
 * @param options - Conversion options.
 * @returns The {@link ox#Address.Address} corresponding to the public key.
 */
function fromPublicKey(publicKey, options = {}) {
    const address = Hash.keccak256(`0x${PublicKey.toHex(publicKey).slice(4)}`).substring(26);
    return Address_from(`0x${address}`, options);
}
/**
 * Checks if two {@link ox#Address.Address} are equal.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.isEqual(
 *   '0xa0cf798816d4b9b9866b5330eea46a18382f251e',
 *   '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
 * )
 * // @log: true
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.isEqual(
 *   '0xa0cf798816d4b9b9866b5330eea46a18382f251e',
 *   '0xA0Cf798816D4b9b9866b5330EEa46a18382f251f'
 * )
 * // @log: false
 * ```
 *
 * @param addressA - The first address to compare.
 * @param addressB - The second address to compare.
 * @returns Whether the addresses are equal.
 */
function Address_isEqual(addressA, addressB) {
    Address_assert(addressA, { strict: false });
    Address_assert(addressB, { strict: false });
    return addressA.toLowerCase() === addressB.toLowerCase();
}
/**
 * Checks if the given address is a valid {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.validate('0xA0Cf798816D4b9b9866b5330EEa46a18382f251e')
 * // @log: true
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.validate('0xdeadbeef')
 * // @log: false
 * ```
 *
 * @param address - Value to check if it is a valid address.
 * @param options - Check options.
 * @returns Whether the address is a valid address.
 */
function Address_validate(address, options = {}) {
    const { strict = true } = options ?? {};
    try {
        Address_assert(address, { strict });
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Thrown when an address is invalid.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.from('0x123')
 * // @error: Address.InvalidAddressError: Address `0x123` is invalid.
 * ```
 */
class InvalidAddressError extends Errors/* BaseError */.C {
    constructor({ address, cause }) {
        super(`Address "${address}" is invalid.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidAddressError'
        });
    }
}
/** Thrown when an address is not a 20 byte (40 hexadecimal character) value. */
class InvalidInputError extends Errors/* BaseError */.C {
    constructor() {
        super('Address is not a 20 byte (40 hexadecimal character) value.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidInputError'
        });
    }
}
/** Thrown when an address does not match its checksum counterpart. */
class InvalidChecksumError extends Errors/* BaseError */.C {
    constructor() {
        super('Address does not match its checksum counterpart.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidChecksumError'
        });
    }
}
//# sourceMappingURL=Address.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/internal/abiItem.js


/** @internal */
function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for (let i = 0; i < signature.length; i++) {
        const char = signature[i];
        // If the character is a separator, we want to reactivate.
        if (['(', ')', ','].includes(char))
            active = true;
        // If the character is a "level" token, we want to increment/decrement.
        if (char === '(')
            level++;
        if (char === ')')
            level--;
        // If we aren't active, we don't want to mutate the result.
        if (!active)
            continue;
        // If level === 0, we are at the definition level.
        if (level === 0) {
            if (char === ' ' && ['event', 'function', 'error', ''].includes(result))
                result = '';
            else {
                result += char;
                // If we are at the end of the definition, we must be finished.
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        // Ignore spaces
        if (char === ' ') {
            // If the previous character is a separator, and the current section isn't empty, we want to deactivate.
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid)
        throw new Errors/* BaseError */.C('Unable to normalize signature.');
    return result;
}
/** @internal */
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch (abiParameterType) {
        case 'address':
            return Address_validate(arg, { strict: false });
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default: {
            if (abiParameterType === 'tuple' && 'components' in abiParameter)
                return Object.values(abiParameter.components).every((component, index) => {
                    return isArgOfType(Object.values(arg)[index], component);
                });
            // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
            // https://regexr.com/6v8hp
            if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
                return argType === 'number' || argType === 'bigint';
            // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
            // https://regexr.com/6va55
            if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
                return argType === 'string' || arg instanceof Uint8Array;
            // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
            // https://regexr.com/6va6i
            if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                return (Array.isArray(arg) &&
                    arg.every((x) => isArgOfType(x, {
                        ...abiParameter,
                        // Pop off `[]` or `[M]` from end of type
                        type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, ''),
                    })));
            }
            return false;
        }
    }
}
/** @internal */
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for (const parameterIndex in sourceParameters) {
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' &&
            targetParameter.type === 'tuple' &&
            'components' in sourceParameter &&
            'components' in targetParameter)
            return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [sourceParameter.type, targetParameter.type];
        const ambiguous = (() => {
            if (types.includes('address') && types.includes('bytes20'))
                return true;
            if (types.includes('address') && types.includes('string'))
                return Address_validate(args[parameterIndex], {
                    strict: false,
                });
            if (types.includes('address') && types.includes('bytes'))
                return Address_validate(args[parameterIndex], {
                    strict: false,
                });
            return false;
        })();
        if (ambiguous)
            return types;
    }
    return;
}
//# sourceMappingURL=abiItem.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/AbiItem.js





/**
 * Formats an {@link ox#AbiItem.AbiItem} into a **Human Readable ABI Item**.
 *
 * @example
 * ```ts twoslash
 * import { AbiItem } from 'ox'
 *
 * const formatted = AbiItem.format({
 *   type: 'function',
 *   name: 'approve',
 *   stateMutability: 'nonpayable',
 *   inputs: [
 *     {
 *       name: 'spender',
 *       type: 'address',
 *     },
 *     {
 *       name: 'amount',
 *       type: 'uint256',
 *     },
 *   ],
 *   outputs: [{ type: 'bool' }],
 * })
 *
 * formatted
 * //    ^?
 *
 *
 * ```
 *
 * @param abiItem - The ABI Item to format.
 * @returns The formatted ABI Item  .
 */
function format(abiItem) {
    return abitype.formatAbiItem(abiItem);
}
/**
 * Parses an arbitrary **JSON ABI Item** or **Human Readable ABI Item** into a typed {@link ox#AbiItem.AbiItem}.
 *
 * @example
 * ### JSON ABIs
 *
 * ```ts twoslash
 * import { AbiItem } from 'ox'
 *
 * const abiItem = AbiItem.from({
 *   type: 'function',
 *   name: 'approve',
 *   stateMutability: 'nonpayable',
 *   inputs: [
 *     {
 *       name: 'spender',
 *       type: 'address',
 *     },
 *     {
 *       name: 'amount',
 *       type: 'uint256',
 *     },
 *   ],
 *   outputs: [{ type: 'bool' }],
 * })
 *
 * abiItem
 * //^?
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 * @example
 * ### Human Readable ABIs
 *
 * A Human Readable ABI can be parsed into a typed ABI object:
 *
 * ```ts twoslash
 * import { AbiItem } from 'ox'
 *
 * const abiItem = AbiItem.from(
 *   'function approve(address spender, uint256 amount) returns (bool)' // [!code hl]
 * )
 *
 * abiItem
 * //^?
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 * @example
 * It is possible to specify `struct`s along with your definitions:
 *
 * ```ts twoslash
 * import { AbiItem } from 'ox'
 *
 * const abiItem = AbiItem.from([
 *   'struct Foo { address spender; uint256 amount; }', // [!code hl]
 *   'function approve(Foo foo) returns (bool)',
 * ])
 *
 * abiItem
 * //^?
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 *
 *
 * @param abiItem - The ABI Item to parse.
 * @returns The typed ABI Item.
 */
function AbiItem_from(abiItem, options = {}) {
    const { prepare = true } = options;
    const item = (() => {
        if (Array.isArray(abiItem))
            return parseAbiItem(abiItem);
        if (typeof abiItem === 'string')
            return parseAbiItem(abiItem);
        return abiItem;
    })();
    return {
        ...item,
        ...(prepare ? { hash: getSignatureHash(item) } : {}),
    };
}
/**
 * Extracts an {@link ox#AbiItem.AbiItem} from an {@link ox#Abi.Abi} given a name and optional arguments.
 *
 * @example
 * ABI Items can be extracted by their name using the `name` option:
 *
 * ```ts twoslash
 * import { Abi, AbiItem } from 'ox'
 *
 * const abi = Abi.from([
 *   'function foo()',
 *   'event Transfer(address owner, address to, uint256 tokenId)',
 *   'function bar(string a) returns (uint256 x)',
 * ])
 *
 * const item = AbiItem.fromAbi(abi, 'Transfer') // [!code focus]
 * //    ^?
 *
 *
 *
 *
 *
 *
 * ```
 *
 * @example
 * ### Extracting by Selector
 *
 * ABI Items can be extract by their selector when {@link ox#Hex.Hex} is provided to `name`.
 *
 * ```ts twoslash
 * import { Abi, AbiItem } from 'ox'
 *
 * const abi = Abi.from([
 *   'function foo()',
 *   'event Transfer(address owner, address to, uint256 tokenId)',
 *   'function bar(string a) returns (uint256 x)',
 * ])
 * const item = AbiItem.fromAbi(abi, '0x095ea7b3') // [!code focus]
 * //    ^?
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 * :::note
 *
 * Extracting via a hex selector is useful when extracting an ABI Item from an `eth_call` RPC response,
 * a Transaction `input`, or from Event Log `topics`.
 *
 * :::
 *
 * @param abi - The ABI to extract from.
 * @param name - The name (or selector) of the ABI item to extract.
 * @param options - Extraction options.
 * @returns The ABI item.
 */
function fromAbi(abi, name, options) {
    const { args = [], prepare = true } = (options ??
        {});
    const isSelector = core_Hex/* validate */.tf(name, { strict: false });
    const abiItems = abi.filter((abiItem) => {
        if (isSelector) {
            if (abiItem.type === 'function' || abiItem.type === 'error')
                return getSelector(abiItem) === core_Hex/* slice */.di(name, 0, 4);
            if (abiItem.type === 'event')
                return getSignatureHash(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0)
        throw new NotFoundError({ name: name });
    if (abiItems.length === 1)
        return {
            ...abiItems[0],
            ...(prepare ? { hash: getSignatureHash(abiItems[0]) } : {}),
        };
    let matchedAbiItem;
    for (const abiItem of abiItems) {
        if (!('inputs' in abiItem))
            continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0)
                return {
                    ...abiItem,
                    ...(prepare ? { hash: getSignatureHash(abiItem) } : {}),
                };
            continue;
        }
        if (!abiItem.inputs)
            continue;
        if (abiItem.inputs.length === 0)
            continue;
        if (abiItem.inputs.length !== args.length)
            continue;
        const matched = args.every((arg, index) => {
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter)
                return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            // Check for ambiguity against already matched parameters (e.g. `address` vs `bytes20`).
            if (matchedAbiItem &&
                'inputs' in matchedAbiItem &&
                matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes)
                    throw new AmbiguityError({
                        abiItem,
                        type: ambiguousTypes[0],
                    }, {
                        abiItem: matchedAbiItem,
                        type: ambiguousTypes[1],
                    });
            }
            matchedAbiItem = abiItem;
        }
    }
    const abiItem = (() => {
        if (matchedAbiItem)
            return matchedAbiItem;
        const [abiItem, ...overloads] = abiItems;
        return { ...abiItem, overloads };
    })();
    if (!abiItem)
        throw new NotFoundError({ name: name });
    return {
        ...abiItem,
        ...(prepare ? { hash: getSignatureHash(abiItem) } : {}),
    };
}
// eslint-disable-next-line jsdoc/require-jsdoc
function getSelector(...parameters) {
    const abiItem = (() => {
        if (Array.isArray(parameters[0])) {
            const [abi, name] = parameters;
            return fromAbi(abi, name);
        }
        return parameters[0];
    })();
    return core_Hex/* slice */.di(getSignatureHash(abiItem), 0, 4);
}
// eslint-disable-next-line jsdoc/require-jsdoc
function getSignature(...parameters) {
    const abiItem = (() => {
        if (Array.isArray(parameters[0])) {
            const [abi, name] = parameters;
            return fromAbi(abi, name);
        }
        return parameters[0];
    })();
    const signature = (() => {
        if (typeof abiItem === 'string')
            return abiItem;
        return human_readable_formatAbiItem/* formatAbiItem */.B(abiItem);
    })();
    return normalizeSignature(signature);
}
// eslint-disable-next-line jsdoc/require-jsdoc
function getSignatureHash(...parameters) {
    const abiItem = (() => {
        if (Array.isArray(parameters[0])) {
            const [abi, name] = parameters;
            return fromAbi(abi, name);
        }
        return parameters[0];
    })();
    if (typeof abiItem !== 'string' && 'hash' in abiItem && abiItem.hash)
        return abiItem.hash;
    return Hash_keccak256(core_Hex/* fromString */.sH(getSignature(abiItem)));
}
/**
 * Throws when ambiguous types are found on overloaded ABI items.
 *
 * @example
 * ```ts twoslash
 * import { Abi, AbiFunction } from 'ox'
 *
 * const foo = Abi.from(['function foo(address)', 'function foo(bytes20)'])
 * AbiFunction.fromAbi(foo, 'foo', {
 *   args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
 * })
 * // @error: AbiItem.AmbiguityError: Found ambiguous types in overloaded ABI Items.
 * // @error: `bytes20` in `foo(bytes20)`, and
 * // @error: `address` in `foo(address)`
 * // @error: These types encode differently and cannot be distinguished at runtime.
 * // @error: Remove one of the ambiguous items in the ABI.
 * ```
 *
 * ### Solution
 *
 * Remove one of the ambiguous types from the ABI.
 *
 * ```ts twoslash
 * import { Abi, AbiFunction } from 'ox'
 *
 * const foo = Abi.from([
 *   'function foo(address)',
 *   'function foo(bytes20)' // [!code --]
 * ])
 * AbiFunction.fromAbi(foo, 'foo', {
 *   args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
 * })
 * // @error: AbiItem.AmbiguityError: Found ambiguous types in overloaded ABI Items.
 * // @error: `bytes20` in `foo(bytes20)`, and
 * // @error: `address` in `foo(address)`
 * // @error: These types encode differently and cannot be distinguished at runtime.
 * // @error: Remove one of the ambiguous items in the ABI.
 * ```
 */
class AmbiguityError extends Errors/* BaseError */.C {
    constructor(x, y) {
        super('Found ambiguous types in overloaded ABI Items.', {
            metaMessages: [
                // TODO: abitype to add support for signature-formatted ABI items.
                `\`${x.type}\` in \`${normalizeSignature(human_readable_formatAbiItem/* formatAbiItem */.B(x.abiItem))}\`, and`,
                `\`${y.type}\` in \`${normalizeSignature(human_readable_formatAbiItem/* formatAbiItem */.B(y.abiItem))}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.AmbiguityError'
        });
    }
}
/**
 * Throws when an ABI item is not found in the ABI.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Abi, AbiFunction } from 'ox'
 *
 * const foo = Abi.from([
 *   'function foo(address)',
 *   'function bar(uint)'
 * ])
 * AbiFunction.fromAbi(foo, 'baz')
 * // @error: AbiItem.NotFoundError: ABI function with name "baz" not found.
 * ```
 *
 * ### Solution
 *
 * Ensure the ABI item exists on the ABI.
 *
 * ```ts twoslash
 * // @noErrors
 * import { Abi, AbiFunction } from 'ox'
 *
 * const foo = Abi.from([
 *   'function foo(address)',
 *   'function bar(uint)',
 *   'function baz(bool)' // [!code ++]
 * ])
 * AbiFunction.fromAbi(foo, 'baz')
 * ```
 */
class NotFoundError extends Errors/* BaseError */.C {
    constructor({ name, data, type = 'item', }) {
        const selector = (() => {
            if (name)
                return ` with name "${name}"`;
            if (data)
                return ` with data "${data}"`;
            return '';
        })();
        super(`ABI ${type}${selector} not found.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.NotFoundError'
        });
    }
}
/**
 * Throws when the selector size is invalid.
 *
 * @example
 * ```ts twoslash
 * import { Abi, AbiFunction } from 'ox'
 *
 * const foo = Abi.from([
 *   'function foo(address)',
 *   'function bar(uint)'
 * ])
 * AbiFunction.fromAbi(foo, '0xaaa')
 * // @error: AbiItem.InvalidSelectorSizeError: Selector size is invalid. Expected 4 bytes. Received 2 bytes ("0xaaa").
 * ```
 *
 * ### Solution
 *
 * Ensure the selector size is 4 bytes.
 *
 * ```ts twoslash
 * // @noErrors
 * import { Abi, AbiFunction } from 'ox'
 *
 * const foo = Abi.from([
 *   'function foo(address)',
 *   'function bar(uint)'
 * ])
 * AbiFunction.fromAbi(foo, '0x7af82b1a')
 * ```
 */
class InvalidSelectorSizeError extends Errors/* BaseError */.C {
    constructor({ data }) {
        super(`Selector size is invalid. Expected 4 bytes. Received ${core_Hex/* size */.Ej(data)} bytes ("${data}").`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.InvalidSelectorSizeError'
        });
    }
}
//# sourceMappingURL=AbiItem.js.map
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js
var abiParameter = __webpack_require__(697041);
;// ./node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js





/**
 * Parses human-readable ABI parameters into {@link AbiParameter}s
 *
 * @param params - Human-readable ABI parameters
 * @returns Parsed {@link AbiParameter}s
 *
 * @example
 * const abiParameters = parseAbiParameters('address from, address to, uint256 amount')
 * //    ^? const abiParameters: [{ type: "address"; name: "from"; }, { type: "address";...
 *
 * @example
 * const abiParameters = parseAbiParameters([
 *   //  ^? const abiParameters: [{ type: "tuple"; components: [{ type: "string"; name:...
 *   'Baz bar',
 *   'struct Baz { string name; }',
 * ])
 */
function parseAbiParameters(params) {
    const abiParameters = [];
    if (typeof params === 'string') {
        const parameters = (0,utils/* splitParameters */.NV)(params);
        const length = parameters.length;
        for (let i = 0; i < length; i++) {
            abiParameters.push((0,utils/* parseAbiParameter */.Pj)(parameters[i], { modifiers: signatures/* modifiers */.Dv }));
        }
    }
    else {
        const structs = (0,runtime_structs/* parseStructs */.e)(params);
        const length = params.length;
        for (let i = 0; i < length; i++) {
            const signature = params[i];
            if ((0,signatures/* isStructSignature */.WL)(signature))
                continue;
            const parameters = (0,utils/* splitParameters */.NV)(signature);
            const length = parameters.length;
            for (let k = 0; k < length; k++) {
                abiParameters.push((0,utils/* parseAbiParameter */.Pj)(parameters[k], { modifiers: signatures/* modifiers */.Dv, structs }));
            }
        }
    }
    if (abiParameters.length === 0)
        throw new abiParameter/* InvalidAbiParametersError */.A9({ params });
    return abiParameters;
}
//# sourceMappingURL=parseAbiParameters.js.map
// EXTERNAL MODULE: ./node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js + 1 modules
var formatAbiParameters = __webpack_require__(239909);
;// ./node_modules/viem/node_modules/ox/_esm/core/Solidity.js
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
// `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
// https://regexr.com/6va55
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
// `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
// https://regexr.com/6v8hp
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const maxInt8 = (/* unused pure expression or super */ null && (2n ** (8n - 1n) - 1n));
const maxInt16 = (/* unused pure expression or super */ null && (2n ** (16n - 1n) - 1n));
const maxInt24 = (/* unused pure expression or super */ null && (2n ** (24n - 1n) - 1n));
const maxInt32 = (/* unused pure expression or super */ null && (2n ** (32n - 1n) - 1n));
const maxInt40 = (/* unused pure expression or super */ null && (2n ** (40n - 1n) - 1n));
const maxInt48 = (/* unused pure expression or super */ null && (2n ** (48n - 1n) - 1n));
const maxInt56 = (/* unused pure expression or super */ null && (2n ** (56n - 1n) - 1n));
const maxInt64 = (/* unused pure expression or super */ null && (2n ** (64n - 1n) - 1n));
const maxInt72 = (/* unused pure expression or super */ null && (2n ** (72n - 1n) - 1n));
const maxInt80 = (/* unused pure expression or super */ null && (2n ** (80n - 1n) - 1n));
const maxInt88 = (/* unused pure expression or super */ null && (2n ** (88n - 1n) - 1n));
const maxInt96 = (/* unused pure expression or super */ null && (2n ** (96n - 1n) - 1n));
const maxInt104 = (/* unused pure expression or super */ null && (2n ** (104n - 1n) - 1n));
const maxInt112 = (/* unused pure expression or super */ null && (2n ** (112n - 1n) - 1n));
const maxInt120 = (/* unused pure expression or super */ null && (2n ** (120n - 1n) - 1n));
const maxInt128 = (/* unused pure expression or super */ null && (2n ** (128n - 1n) - 1n));
const maxInt136 = (/* unused pure expression or super */ null && (2n ** (136n - 1n) - 1n));
const maxInt144 = (/* unused pure expression or super */ null && (2n ** (144n - 1n) - 1n));
const maxInt152 = (/* unused pure expression or super */ null && (2n ** (152n - 1n) - 1n));
const maxInt160 = (/* unused pure expression or super */ null && (2n ** (160n - 1n) - 1n));
const maxInt168 = (/* unused pure expression or super */ null && (2n ** (168n - 1n) - 1n));
const maxInt176 = (/* unused pure expression or super */ null && (2n ** (176n - 1n) - 1n));
const maxInt184 = (/* unused pure expression or super */ null && (2n ** (184n - 1n) - 1n));
const maxInt192 = (/* unused pure expression or super */ null && (2n ** (192n - 1n) - 1n));
const maxInt200 = (/* unused pure expression or super */ null && (2n ** (200n - 1n) - 1n));
const maxInt208 = (/* unused pure expression or super */ null && (2n ** (208n - 1n) - 1n));
const maxInt216 = (/* unused pure expression or super */ null && (2n ** (216n - 1n) - 1n));
const maxInt224 = (/* unused pure expression or super */ null && (2n ** (224n - 1n) - 1n));
const maxInt232 = (/* unused pure expression or super */ null && (2n ** (232n - 1n) - 1n));
const maxInt240 = (/* unused pure expression or super */ null && (2n ** (240n - 1n) - 1n));
const maxInt248 = (/* unused pure expression or super */ null && (2n ** (248n - 1n) - 1n));
const maxInt256 = (/* unused pure expression or super */ null && (2n ** (256n - 1n) - 1n));
const minInt8 = (/* unused pure expression or super */ null && (-(2n ** (8n - 1n))));
const minInt16 = (/* unused pure expression or super */ null && (-(2n ** (16n - 1n))));
const minInt24 = (/* unused pure expression or super */ null && (-(2n ** (24n - 1n))));
const minInt32 = (/* unused pure expression or super */ null && (-(2n ** (32n - 1n))));
const minInt40 = (/* unused pure expression or super */ null && (-(2n ** (40n - 1n))));
const minInt48 = (/* unused pure expression or super */ null && (-(2n ** (48n - 1n))));
const minInt56 = (/* unused pure expression or super */ null && (-(2n ** (56n - 1n))));
const minInt64 = (/* unused pure expression or super */ null && (-(2n ** (64n - 1n))));
const minInt72 = (/* unused pure expression or super */ null && (-(2n ** (72n - 1n))));
const minInt80 = (/* unused pure expression or super */ null && (-(2n ** (80n - 1n))));
const minInt88 = (/* unused pure expression or super */ null && (-(2n ** (88n - 1n))));
const minInt96 = (/* unused pure expression or super */ null && (-(2n ** (96n - 1n))));
const minInt104 = (/* unused pure expression or super */ null && (-(2n ** (104n - 1n))));
const minInt112 = (/* unused pure expression or super */ null && (-(2n ** (112n - 1n))));
const minInt120 = (/* unused pure expression or super */ null && (-(2n ** (120n - 1n))));
const minInt128 = (/* unused pure expression or super */ null && (-(2n ** (128n - 1n))));
const minInt136 = (/* unused pure expression or super */ null && (-(2n ** (136n - 1n))));
const minInt144 = (/* unused pure expression or super */ null && (-(2n ** (144n - 1n))));
const minInt152 = (/* unused pure expression or super */ null && (-(2n ** (152n - 1n))));
const minInt160 = (/* unused pure expression or super */ null && (-(2n ** (160n - 1n))));
const minInt168 = (/* unused pure expression or super */ null && (-(2n ** (168n - 1n))));
const minInt176 = (/* unused pure expression or super */ null && (-(2n ** (176n - 1n))));
const minInt184 = (/* unused pure expression or super */ null && (-(2n ** (184n - 1n))));
const minInt192 = (/* unused pure expression or super */ null && (-(2n ** (192n - 1n))));
const minInt200 = (/* unused pure expression or super */ null && (-(2n ** (200n - 1n))));
const minInt208 = (/* unused pure expression or super */ null && (-(2n ** (208n - 1n))));
const minInt216 = (/* unused pure expression or super */ null && (-(2n ** (216n - 1n))));
const minInt224 = (/* unused pure expression or super */ null && (-(2n ** (224n - 1n))));
const minInt232 = (/* unused pure expression or super */ null && (-(2n ** (232n - 1n))));
const minInt240 = (/* unused pure expression or super */ null && (-(2n ** (240n - 1n))));
const minInt248 = (/* unused pure expression or super */ null && (-(2n ** (248n - 1n))));
const minInt256 = (/* unused pure expression or super */ null && (-(2n ** (256n - 1n))));
const maxUint8 = (/* unused pure expression or super */ null && (2n ** 8n - 1n));
const maxUint16 = (/* unused pure expression or super */ null && (2n ** 16n - 1n));
const maxUint24 = (/* unused pure expression or super */ null && (2n ** 24n - 1n));
const maxUint32 = (/* unused pure expression or super */ null && (2n ** 32n - 1n));
const maxUint40 = (/* unused pure expression or super */ null && (2n ** 40n - 1n));
const maxUint48 = (/* unused pure expression or super */ null && (2n ** 48n - 1n));
const maxUint56 = (/* unused pure expression or super */ null && (2n ** 56n - 1n));
const maxUint64 = (/* unused pure expression or super */ null && (2n ** 64n - 1n));
const maxUint72 = (/* unused pure expression or super */ null && (2n ** 72n - 1n));
const maxUint80 = (/* unused pure expression or super */ null && (2n ** 80n - 1n));
const maxUint88 = (/* unused pure expression or super */ null && (2n ** 88n - 1n));
const maxUint96 = (/* unused pure expression or super */ null && (2n ** 96n - 1n));
const maxUint104 = (/* unused pure expression or super */ null && (2n ** 104n - 1n));
const maxUint112 = (/* unused pure expression or super */ null && (2n ** 112n - 1n));
const maxUint120 = (/* unused pure expression or super */ null && (2n ** 120n - 1n));
const maxUint128 = (/* unused pure expression or super */ null && (2n ** 128n - 1n));
const maxUint136 = (/* unused pure expression or super */ null && (2n ** 136n - 1n));
const maxUint144 = (/* unused pure expression or super */ null && (2n ** 144n - 1n));
const maxUint152 = (/* unused pure expression or super */ null && (2n ** 152n - 1n));
const maxUint160 = (/* unused pure expression or super */ null && (2n ** 160n - 1n));
const maxUint168 = (/* unused pure expression or super */ null && (2n ** 168n - 1n));
const maxUint176 = (/* unused pure expression or super */ null && (2n ** 176n - 1n));
const maxUint184 = (/* unused pure expression or super */ null && (2n ** 184n - 1n));
const maxUint192 = (/* unused pure expression or super */ null && (2n ** 192n - 1n));
const maxUint200 = (/* unused pure expression or super */ null && (2n ** 200n - 1n));
const maxUint208 = (/* unused pure expression or super */ null && (2n ** 208n - 1n));
const maxUint216 = (/* unused pure expression or super */ null && (2n ** 216n - 1n));
const maxUint224 = (/* unused pure expression or super */ null && (2n ** 224n - 1n));
const maxUint232 = (/* unused pure expression or super */ null && (2n ** 232n - 1n));
const maxUint240 = (/* unused pure expression or super */ null && (2n ** 240n - 1n));
const maxUint248 = (/* unused pure expression or super */ null && (2n ** 248n - 1n));
const maxUint256 = 2n ** 256n - 1n;
//# sourceMappingURL=Solidity.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/internal/abiParameters.js






/** @internal */
function decodeParameter(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, { ...param, type }, { checksumAddress, length, staticPosition });
    }
    if (param.type === 'tuple')
        return decodeTuple(cursor, param, {
            checksumAddress,
            staticPosition,
        });
    if (param.type === 'address')
        return decodeAddress(cursor, { checksum: checksumAddress });
    if (param.type === 'bool')
        return decodeBool(cursor);
    if (param.type.startsWith('bytes'))
        return decodeBytes(cursor, param, { staticPosition });
    if (param.type.startsWith('uint') || param.type.startsWith('int'))
        return decodeNumber(cursor, param);
    if (param.type === 'string')
        return decodeString(cursor, { staticPosition });
    throw new InvalidTypeError(param.type);
}
const sizeOfLength = 32;
const sizeOfOffset = 32;
/** @internal */
function decodeAddress(cursor, options = {}) {
    const { checksum = false } = options;
    const value = cursor.readBytes(32);
    const wrap = (address) => checksum ? Address_checksum(address) : address;
    return [wrap(core_Hex/* fromBytes */.uK(slice(value, -20))), 32];
}
/** @internal */
function decodeArray(cursor, param, options) {
    const { checksumAddress, length, staticPosition } = options;
    // If the length of the array is not known in advance (dynamic array),
    // this means we will need to wonder off to the pointer and decode.
    if (!length) {
        // Dealing with a dynamic type, so get the offset of the array data.
        const offset = toNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        // Get the length of the array from the offset.
        cursor.setPosition(start);
        const length = toNumber(cursor.readBytes(sizeOfLength));
        // Check if the array has any dynamic children.
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for (let i = 0; i < length; ++i) {
            // If any of the children is dynamic, then all elements will be offset pointer, thus size of one slot (32 bytes).
            // Otherwise, elements will be the size of their encoding (consumed bytes).
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                checksumAddress,
                staticPosition: startOfData,
            });
            consumed += consumed_;
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the array data.
        const offset = toNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const value = [];
        for (let i = 0; i < length; ++i) {
            // Move cursor along to the next slot (next offset pointer).
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                checksumAddress,
                staticPosition: start,
            });
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the length of the array is known in advance and the array is deeply static,
    // then we can just decode each element in sequence.
    let consumed = 0;
    const value = [];
    for (let i = 0; i < length; ++i) {
        const [data, consumed_] = decodeParameter(cursor, param, {
            checksumAddress,
            staticPosition: staticPosition + consumed,
        });
        consumed += consumed_;
        value.push(data);
    }
    return [value, consumed];
}
/** @internal */
function decodeBool(cursor) {
    return [toBoolean(cursor.readBytes(32), { size: 32 }), 32];
}
/** @internal */
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        // Dealing with dynamic types, so get the offset of the bytes data.
        const offset = toNumber(cursor.readBytes(32));
        // Set position of the cursor to start of bytes data.
        cursor.setPosition(staticPosition + offset);
        const length = toNumber(cursor.readBytes(32));
        // If there is no length, we have zero data.
        if (length === 0) {
            // As we have gone wondering, restore to the original position + next slot.
            cursor.setPosition(staticPosition + 32);
            return ['0x', 32];
        }
        const data = cursor.readBytes(length);
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [core_Hex/* fromBytes */.uK(data), 32];
    }
    const value = core_Hex/* fromBytes */.uK(cursor.readBytes(Number.parseInt(size, 10), 32));
    return [value, 32];
}
/** @internal */
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith('int');
    const size = Number.parseInt(param.type.split('int')[1] || '256', 10);
    const value = cursor.readBytes(32);
    return [
        size > 48
            ? toBigInt(value, { signed })
            : toNumber(value, { signed }),
        32,
    ];
}
/** @internal */
function decodeTuple(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the tuple data.
        const offset = toNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of referencing slot + offset.
        const start = staticPosition + offset;
        for (let i = 0; i < param.components.length; ++i) {
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                checksumAddress,
                staticPosition: start,
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for (let i = 0; i < param.components.length; ++i) {
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            checksumAddress,
            staticPosition,
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [value, consumed];
}
/** @internal */
function decodeString(cursor, { staticPosition }) {
    // Get offset to start of string data.
    const offset = toNumber(cursor.readBytes(32));
    // Start is the static position of current slot + offset.
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = toNumber(cursor.readBytes(32));
    // If there is no length, we have zero data (empty string).
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return ['', 32];
    }
    const data = cursor.readBytes(length, 32);
    const value = Bytes_toString(trimLeft(data));
    // As we have gone wondering, restore to the original position + next slot.
    cursor.setPosition(staticPosition + 32);
    return [value, 32];
}
/** @internal */
function prepareParameters({ checksumAddress, parameters, values, }) {
    const preparedParameters = [];
    for (let i = 0; i < parameters.length; i++) {
        preparedParameters.push(prepareParameter({
            checksumAddress,
            parameter: parameters[i],
            value: values[i],
        }));
    }
    return preparedParameters;
}
/** @internal */
function prepareParameter({ checksumAddress = false, parameter: parameter_, value, }) {
    const parameter = parameter_;
    const arrayComponents = getArrayComponents(parameter.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            checksumAddress,
            length,
            parameter: {
                ...parameter,
                type,
            },
        });
    }
    if (parameter.type === 'tuple') {
        return encodeTuple(value, {
            checksumAddress,
            parameter: parameter,
        });
    }
    if (parameter.type === 'address') {
        return encodeAddress(value, {
            checksum: checksumAddress,
        });
    }
    if (parameter.type === 'bool') {
        return encodeBoolean(value);
    }
    if (parameter.type.startsWith('uint') || parameter.type.startsWith('int')) {
        const signed = parameter.type.startsWith('int');
        const [, , size = '256'] = integerRegex.exec(parameter.type) ?? [];
        return encodeNumber(value, {
            signed,
            size: Number(size),
        });
    }
    if (parameter.type.startsWith('bytes')) {
        return encodeBytes(value, { type: parameter.type });
    }
    if (parameter.type === 'string') {
        return encodeString(value);
    }
    throw new InvalidTypeError(parameter.type);
}
/** @internal */
function encode(preparedParameters) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for (let i = 0; i < preparedParameters.length; i++) {
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic)
            staticSize += 32;
        else
            staticSize += core_Hex/* size */.Ej(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParameters = [];
    const dynamicParameters = [];
    let dynamicSize = 0;
    for (let i = 0; i < preparedParameters.length; i++) {
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic) {
            staticParameters.push(core_Hex/* fromNumber */.oB(staticSize + dynamicSize, { size: 32 }));
            dynamicParameters.push(encoded);
            dynamicSize += core_Hex/* size */.Ej(encoded);
        }
        else {
            staticParameters.push(encoded);
        }
    }
    // 3. Concatenate static and dynamic parts.
    return core_Hex/* concat */.xW(...staticParameters, ...dynamicParameters);
}
/** @internal */
function encodeAddress(value, options) {
    const { checksum = false } = options;
    Address_assert(value, { strict: checksum });
    return {
        dynamic: false,
        encoded: core_Hex/* padLeft */.Ho(value.toLowerCase()),
    };
}
/** @internal */
function encodeArray(value, options) {
    const { checksumAddress, length, parameter } = options;
    const dynamic = length === null;
    if (!Array.isArray(value))
        throw new InvalidArrayError(value);
    if (!dynamic && value.length !== length)
        throw new ArrayLengthMismatchError({
            expectedLength: length,
            givenLength: value.length,
            type: `${parameter.type}[${length}]`,
        });
    let dynamicChild = false;
    const preparedParameters = [];
    for (let i = 0; i < value.length; i++) {
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter,
            value: value[i],
        });
        if (preparedParam.dynamic)
            dynamicChild = true;
        preparedParameters.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encode(preparedParameters);
        if (dynamic) {
            const length = core_Hex/* fromNumber */.oB(preparedParameters.length, { size: 32 });
            return {
                dynamic: true,
                encoded: preparedParameters.length > 0 ? core_Hex/* concat */.xW(length, data) : length,
            };
        }
        if (dynamicChild)
            return { dynamic: true, encoded: data };
    }
    return {
        dynamic: false,
        encoded: core_Hex/* concat */.xW(...preparedParameters.map(({ encoded }) => encoded)),
    };
}
/** @internal */
function encodeBytes(value, { type }) {
    const [, parametersize] = type.split('bytes');
    const bytesSize = core_Hex/* size */.Ej(value);
    if (!parametersize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0)
            value_ = core_Hex/* padRight */.M7(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
        return {
            dynamic: true,
            encoded: core_Hex/* concat */.xW(core_Hex/* padLeft */.Ho(core_Hex/* fromNumber */.oB(bytesSize, { size: 32 })), value_),
        };
    }
    if (bytesSize !== Number.parseInt(parametersize, 10))
        throw new BytesSizeMismatchError({
            expectedSize: Number.parseInt(parametersize, 10),
            value,
        });
    return { dynamic: false, encoded: core_Hex/* padRight */.M7(value) };
}
/** @internal */
function encodeBoolean(value) {
    if (typeof value !== 'boolean')
        throw new Errors/* BaseError */.C(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return { dynamic: false, encoded: core_Hex/* padLeft */.Ho(core_Hex/* fromBoolean */.xb(value)) };
}
/** @internal */
function encodeNumber(value, { signed, size }) {
    if (typeof size === 'number') {
        const max = 2n ** (BigInt(size) - (signed ? 1n : 0n)) - 1n;
        const min = signed ? -max - 1n : 0n;
        if (value > max || value < min)
            throw new core_Hex/* IntegerOutOfRangeError */.Ty({
                max: max.toString(),
                min: min.toString(),
                signed,
                size: size / 8,
                value: value.toString(),
            });
    }
    return {
        dynamic: false,
        encoded: core_Hex/* fromNumber */.oB(value, {
            size: 32,
            signed,
        }),
    };
}
/** @internal */
function encodeString(value) {
    const hexValue = core_Hex/* fromString */.sH(value);
    const partsLength = Math.ceil(core_Hex/* size */.Ej(hexValue) / 32);
    const parts = [];
    for (let i = 0; i < partsLength; i++) {
        parts.push(core_Hex/* padRight */.M7(core_Hex/* slice */.di(hexValue, i * 32, (i + 1) * 32)));
    }
    return {
        dynamic: true,
        encoded: core_Hex/* concat */.xW(core_Hex/* padRight */.M7(core_Hex/* fromNumber */.oB(core_Hex/* size */.Ej(hexValue), { size: 32 })), ...parts),
    };
}
/** @internal */
function encodeTuple(value, options) {
    const { checksumAddress, parameter } = options;
    let dynamic = false;
    const preparedParameters = [];
    for (let i = 0; i < parameter.components.length; i++) {
        const param_ = parameter.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter: param_,
            value: value[index],
        });
        preparedParameters.push(preparedParam);
        if (preparedParam.dynamic)
            dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic
            ? encode(preparedParameters)
            : core_Hex/* concat */.xW(...preparedParameters.map(({ encoded }) => encoded)),
    };
}
/** @internal */
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches
        ? // Return `null` if the array is dynamic.
            [matches[2] ? Number(matches[2]) : null, matches[1]]
        : undefined;
}
/** @internal */
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string')
        return true;
    if (type === 'bytes')
        return true;
    if (type.endsWith('[]'))
        return true;
    if (type === 'tuple')
        return param.components?.some(hasDynamicChild);
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents &&
        hasDynamicChild({
            ...param,
            type: arrayComponents[1],
        }))
        return true;
    return false;
}
//# sourceMappingURL=abiParameters.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/internal/cursor.js

const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new RecursiveReadLimitExceededError({
                count: this.recursiveReadCount + 1,
                limit: this.recursiveReadLimit,
            });
    },
    assertPosition(position) {
        if (position < 0 || position > this.bytes.length - 1)
            throw new PositionOutOfBoundsError({
                length: this.bytes.length,
                position,
            });
    },
    decrementPosition(offset) {
        if (offset < 0)
            throw new NegativeOffsetError({ offset });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount(position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition(offset) {
        if (offset < 0)
            throw new NegativeOffsetError({ offset });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes(length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return ((this.dataView.getUint16(position) << 8) +
            this.dataView.getUint8(position + 2));
    },
    inspectUint32(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte(byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes(bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8(value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16(value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24(value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32(value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes(length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining() {
        return this.bytes.length - this.position;
    },
    setPosition(position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return () => (this.position = oldPosition);
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
            return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0)
            this.recursiveReadCount++;
    },
};
/** @internal */
function create(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
}
/** @internal */
class NegativeOffsetError extends Errors/* BaseError */.C {
    constructor({ offset }) {
        super(`Offset \`${offset}\` cannot be negative.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.NegativeOffsetError'
        });
    }
}
/** @internal */
class PositionOutOfBoundsError extends Errors/* BaseError */.C {
    constructor({ length, position }) {
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.PositionOutOfBoundsError'
        });
    }
}
/** @internal */
class RecursiveReadLimitExceededError extends Errors/* BaseError */.C {
    constructor({ count, limit }) {
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.RecursiveReadLimitExceededError'
        });
    }
}
//# sourceMappingURL=cursor.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/AbiParameters.js








// eslint-disable-next-line jsdoc/require-jsdoc
function decode(parameters, data, options = {}) {
    const { as = 'Array', checksumAddress = false } = options;
    const bytes = typeof data === 'string' ? Bytes_fromHex(data) : data;
    const cursor = create(bytes);
    if (Bytes_size(bytes) === 0 && parameters.length > 0)
        throw new ZeroDataError();
    if (Bytes_size(bytes) && Bytes_size(bytes) < 32)
        throw new DataSizeTooSmallError({
            data: typeof data === 'string' ? data : core_Hex/* fromBytes */.uK(data),
            parameters: parameters,
            size: Bytes_size(bytes),
        });
    let consumed = 0;
    const values = as === 'Array' ? [] : {};
    for (let i = 0; i < parameters.length; ++i) {
        const param = parameters[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = decodeParameter(cursor, param, {
            checksumAddress,
            staticPosition: 0,
        });
        consumed += consumed_;
        if (as === 'Array')
            values.push(data);
        else
            values[param.name ?? i] = data;
    }
    return values;
}
/**
 * Encodes primitive values into ABI encoded data as per the [Application Binary Interface (ABI) Specification](https://docs.soliditylang.org/en/latest/abi-spec).
 *
 * @example
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * const data = AbiParameters.encode(
 *   AbiParameters.from(['string', 'uint', 'bool']),
 *   ['wagmi', 420n, true],
 * )
 * ```
 *
 * @example
 * ### JSON Parameters
 *
 * Specify **JSON ABI** Parameters as schema:
 *
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * const data = AbiParameters.encode(
 *   [
 *     { type: 'string', name: 'name' },
 *     { type: 'uint', name: 'age' },
 *     { type: 'bool', name: 'isOwner' },
 *   ],
 *   ['wagmi', 420n, true],
 * )
 * ```
 *
 * @param parameters - The set of ABI parameters to encode, in the shape of the `inputs` or `outputs` attribute of an ABI Item. These parameters must include valid [ABI types](https://docs.soliditylang.org/en/latest/types.html).
 * @param values - The set of primitive values that correspond to the ABI types defined in `parameters`.
 * @returns ABI encoded data.
 */
function AbiParameters_encode(parameters, values, options) {
    const { checksumAddress = false } = options ?? {};
    if (parameters.length !== values.length)
        throw new LengthMismatchError({
            expectedLength: parameters.length,
            givenLength: values.length,
        });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParameters = prepareParameters({
        checksumAddress,
        parameters: parameters,
        values: values,
    });
    const data = encode(preparedParameters);
    if (data.length === 0)
        return '0x';
    return data;
}
/**
 * Encodes an array of primitive values to a [packed ABI encoding](https://docs.soliditylang.org/en/latest/abi-spec.html#non-standard-packed-mode).
 *
 * @example
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * const encoded = AbiParameters.encodePacked(
 *   ['address', 'string'],
 *   ['0xd8da6bf26964af9d7eed9e03e53415d37aa96045', 'hello world'],
 * )
 * // @log: '0xd8da6bf26964af9d7eed9e03e53415d37aa9604568656c6c6f20776f726c64'
 * ```
 *
 * @param types - Set of ABI types to pack encode.
 * @param values - The set of primitive values that correspond to the ABI types defined in `types`.
 * @returns The encoded packed data.
 */
function encodePacked(types, values) {
    if (types.length !== values.length)
        throw new LengthMismatchError({
            expectedLength: types.length,
            givenLength: values.length,
        });
    const data = [];
    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        const value = values[i];
        data.push(encodePacked.encode(type, value));
    }
    return core_Hex/* concat */.xW(...data);
}
(function (encodePacked) {
    // eslint-disable-next-line jsdoc/require-jsdoc
    function encode(type, value, isArray = false) {
        if (type === 'address') {
            const address = value;
            Address_assert(address);
            return core_Hex/* padLeft */.Ho(address.toLowerCase(), isArray ? 32 : 0);
        }
        if (type === 'string')
            return core_Hex/* fromString */.sH(value);
        if (type === 'bytes')
            return value;
        if (type === 'bool')
            return core_Hex/* padLeft */.Ho(core_Hex/* fromBoolean */.xb(value), isArray ? 32 : 1);
        const intMatch = type.match(integerRegex);
        if (intMatch) {
            const [_type, baseType, bits = '256'] = intMatch;
            const size = Number.parseInt(bits, 10) / 8;
            return core_Hex/* fromNumber */.oB(value, {
                size: isArray ? 32 : size,
                signed: baseType === 'int',
            });
        }
        const bytesMatch = type.match(bytesRegex);
        if (bytesMatch) {
            const [_type, size] = bytesMatch;
            if (Number.parseInt(size, 10) !== (value.length - 2) / 2)
                throw new BytesSizeMismatchError({
                    expectedSize: Number.parseInt(size, 10),
                    value: value,
                });
            return core_Hex/* padRight */.M7(value, isArray ? 32 : 0);
        }
        const arrayMatch = type.match(arrayRegex);
        if (arrayMatch && Array.isArray(value)) {
            const [_type, childType] = arrayMatch;
            const data = [];
            for (let i = 0; i < value.length; i++) {
                data.push(encode(childType, value[i], true));
            }
            if (data.length === 0)
                return '0x';
            return core_Hex/* concat */.xW(...data);
        }
        throw new InvalidTypeError(type);
    }
    encodePacked.encode = encode;
})(encodePacked || (encodePacked = {}));
/**
 * Formats {@link ox#AbiParameters.AbiParameters} into **Human Readable ABI Parameters**.
 *
 * @example
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * const formatted = AbiParameters.format([
 *   {
 *     name: 'spender',
 *     type: 'address',
 *   },
 *   {
 *     name: 'amount',
 *     type: 'uint256',
 *   },
 * ])
 *
 * formatted
 * //    ^?
 *
 *
 * ```
 *
 * @param parameters - The ABI Parameters to format.
 * @returns The formatted ABI Parameters  .
 */
function AbiParameters_format(parameters) {
    return abitype.formatAbiParameters(parameters);
}
/**
 * Parses arbitrary **JSON ABI Parameters** or **Human Readable ABI Parameters** into typed {@link ox#AbiParameters.AbiParameters}.
 *
 * @example
 * ### JSON Parameters
 *
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * const parameters = AbiParameters.from([
 *   {
 *     name: 'spender',
 *     type: 'address',
 *   },
 *   {
 *     name: 'amount',
 *     type: 'uint256',
 *   },
 * ])
 *
 * parameters
 * //^?
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 * @example
 * ### Human Readable Parameters
 *
 * Human Readable ABI Parameters can be parsed into a typed {@link ox#AbiParameters.AbiParameters}:
 *
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * const parameters = AbiParameters.from('address spender, uint256 amount')
 *
 * parameters
 * //^?
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 * @example
 * It is possible to specify `struct`s along with your definitions:
 *
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * const parameters = AbiParameters.from([
 *   'struct Foo { address spender; uint256 amount; }', // [!code hl]
 *   'Foo foo, address bar',
 * ])
 *
 * parameters
 * //^?
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 *
 *
 * @param parameters - The ABI Parameters to parse.
 * @returns The typed ABI Parameters.
 */
function AbiParameters_from(parameters) {
    if (Array.isArray(parameters) && typeof parameters[0] === 'string')
        return parseAbiParameters(parameters);
    if (typeof parameters === 'string')
        return parseAbiParameters(parameters);
    return parameters;
}
/**
 * Throws when the data size is too small for the given parameters.
 *
 * @example
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * AbiParameters.decode([{ type: 'uint256' }], '0x010f')
 * //                                             ↑ ❌ 2 bytes
 * // @error: AbiParameters.DataSizeTooSmallError: Data size of 2 bytes is too small for given parameters.
 * // @error: Params: (uint256)
 * // @error: Data:   0x010f (2 bytes)
 * ```
 *
 * ### Solution
 *
 * Pass a valid data size.
 *
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * AbiParameters.decode([{ type: 'uint256' }], '0x00000000000000000000000000000000000000000000000000000000000010f')
 * //                                             ↑ ✅ 32 bytes
 * ```
 */
class DataSizeTooSmallError extends Errors/* BaseError */.C {
    constructor({ data, parameters, size, }) {
        super(`Data size of ${size} bytes is too small for given parameters.`, {
            metaMessages: [
                `Params: (${formatAbiParameters/* formatAbiParameters */.Q(parameters)})`,
                `Data:   ${data} (${size} bytes)`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.DataSizeTooSmallError'
        });
    }
}
/**
 * Throws when zero data is provided, but data is expected.
 *
 * @example
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * AbiParameters.decode([{ type: 'uint256' }], '0x')
 * //                                           ↑ ❌ zero data
 * // @error: AbiParameters.DataSizeTooSmallError: Data size of 2 bytes is too small for given parameters.
 * // @error: Params: (uint256)
 * // @error: Data:   0x010f (2 bytes)
 * ```
 *
 * ### Solution
 *
 * Pass valid data.
 *
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * AbiParameters.decode([{ type: 'uint256' }], '0x00000000000000000000000000000000000000000000000000000000000010f')
 * //                                             ↑ ✅ 32 bytes
 * ```
 */
class ZeroDataError extends Errors/* BaseError */.C {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ZeroDataError'
        });
    }
}
/**
 * The length of the array value does not match the length specified in the corresponding ABI parameter.
 *
 * ### Example
 *
 * ```ts twoslash
 * // @noErrors
 * import { AbiParameters } from 'ox'
 * // ---cut---
 * AbiParameters.encode(AbiParameters.from('uint256[3]'), [[69n, 420n]])
 * //                                               ↑ expected: 3  ↑ ❌ length: 2
 * // @error: AbiParameters.ArrayLengthMismatchError: ABI encoding array length mismatch
 * // @error: for type `uint256[3]`. Expected: `3`. Given: `2`.
 * ```
 *
 * ### Solution
 *
 * Pass an array of the correct length.
 *
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 * // ---cut---
 * AbiParameters.encode(AbiParameters.from(['uint256[3]']), [[69n, 420n, 69n]])
 * //                                                         ↑ ✅ length: 3
 * ```
 */
class ArrayLengthMismatchError extends Errors/* BaseError */.C {
    constructor({ expectedLength, givenLength, type, }) {
        super(`Array length mismatch for type \`${type}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ArrayLengthMismatchError'
        });
    }
}
/**
 * The size of the bytes value does not match the size specified in the corresponding ABI parameter.
 *
 * ### Example
 *
 * ```ts twoslash
 * // @noErrors
 * import { AbiParameters } from 'ox'
 * // ---cut---
 * AbiParameters.encode(AbiParameters.from('bytes8'), [['0xdeadbeefdeadbeefdeadbeef']])
 * //                                            ↑ expected: 8 bytes  ↑ ❌ size: 12 bytes
 * // @error: BytesSizeMismatchError: Size of bytes "0xdeadbeefdeadbeefdeadbeef"
 * // @error: (bytes12) does not match expected size (bytes8).
 * ```
 *
 * ### Solution
 *
 * Pass a bytes value of the correct size.
 *
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 * // ---cut---
 * AbiParameters.encode(AbiParameters.from(['bytes8']), ['0xdeadbeefdeadbeef'])
 * //                                                       ↑ ✅ size: 8 bytes
 * ```
 */
class BytesSizeMismatchError extends Errors/* BaseError */.C {
    constructor({ expectedSize, value, }) {
        super(`Size of bytes "${value}" (bytes${core_Hex/* size */.Ej(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.BytesSizeMismatchError'
        });
    }
}
/**
 * The length of the values to encode does not match the length of the ABI parameters.
 *
 * ### Example
 *
 * ```ts twoslash
 * // @noErrors
 * import { AbiParameters } from 'ox'
 * // ---cut---
 * AbiParameters.encode(AbiParameters.from(['string', 'uint256']), ['hello'])
 * // @error: LengthMismatchError: ABI encoding params/values length mismatch.
 * // @error: Expected length (params): 2
 * // @error: Given length (values): 1
 * ```
 *
 * ### Solution
 *
 * Pass the correct number of values to encode.
 *
 * ### Solution
 *
 * Pass a [valid ABI type](https://docs.soliditylang.org/en/develop/abi-spec.html#types).
 */
class LengthMismatchError extends Errors/* BaseError */.C {
    constructor({ expectedLength, givenLength, }) {
        super([
            'ABI encoding parameters/values length mismatch.',
            `Expected length (parameters): ${expectedLength}`,
            `Given length (values): ${givenLength}`,
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.LengthMismatchError'
        });
    }
}
/**
 * The value provided is not a valid array as specified in the corresponding ABI parameter.
 *
 * ### Example
 *
 * ```ts twoslash
 * // @noErrors
 * import { AbiParameters } from 'ox'
 * // ---cut---
 * AbiParameters.encode(AbiParameters.from(['uint256[3]']), [69])
 * ```
 *
 * ### Solution
 *
 * Pass an array value.
 */
class InvalidArrayError extends Errors/* BaseError */.C {
    constructor(value) {
        super(`Value \`${value}\` is not a valid array.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidArrayError'
        });
    }
}
/**
 * Throws when the ABI parameter type is invalid.
 *
 * @example
 * ```ts twoslash
 * import { AbiParameters } from 'ox'
 *
 * AbiParameters.decode([{ type: 'lol' }], '0x00000000000000000000000000000000000000000000000000000000000010f')
 * //                             ↑ ❌ invalid type
 * // @error: AbiParameters.InvalidTypeError: Type `lol` is not a valid ABI Type.
 * ```
 */
class InvalidTypeError extends Errors/* BaseError */.C {
    constructor(type) {
        super(`Type \`${type}\` is not a valid ABI Type.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidTypeError'
        });
    }
}
//# sourceMappingURL=AbiParameters.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/AbiConstructor.js




// eslint-disable-next-line jsdoc/require-jsdoc
function AbiConstructor_decode(...parameters) {
    const [abiConstructor, options] = (() => {
        if (Array.isArray(parameters[0])) {
            const [abi, options] = parameters;
            return [AbiConstructor_fromAbi(abi), options];
        }
        return parameters;
    })();
    const { bytecode } = options;
    if (abiConstructor.inputs?.length === 0)
        return undefined;
    const data = options.data.replace(bytecode, '0x');
    return AbiParameters.decode(abiConstructor.inputs, data);
}
// eslint-disable-next-line jsdoc/require-jsdoc
function AbiConstructor_encode(...parameters) {
    const [abiConstructor, options] = (() => {
        if (Array.isArray(parameters[0])) {
            const [abi, options] = parameters;
            return [AbiConstructor_fromAbi(abi), options];
        }
        return parameters;
    })();
    const { bytecode, args } = options;
    return core_Hex/* concat */.xW(bytecode, abiConstructor.inputs?.length && args?.length
        ? AbiParameters_encode(abiConstructor.inputs, args)
        : '0x');
}
/** @internal */
function AbiConstructor_format(abiConstructor) {
    return abitype.formatAbiItem(abiConstructor);
}
/** @internal */
function AbiConstructor_from(abiConstructor) {
    return AbiItem_from(abiConstructor);
}
/** @internal */
function AbiConstructor_fromAbi(abi) {
    const item = abi.find((item) => item.type === 'constructor');
    if (!item)
        throw new NotFoundError({ name: 'constructor' });
    return item;
}
//# sourceMappingURL=AbiConstructor.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/AbiFunction.js




// eslint-disable-next-line jsdoc/require-jsdoc
function decodeData(...parameters) {
    const [abiFunction, data] = (() => {
        if (Array.isArray(parameters[0])) {
            const [abi, name, data] = parameters;
            return [AbiFunction_fromAbi(abi, name), data];
        }
        return parameters;
    })();
    const { overloads } = abiFunction;
    if (Hex.size(data) < 4)
        throw new AbiItem.InvalidSelectorSizeError({ data });
    if (abiFunction.inputs?.length === 0)
        return undefined;
    const item = overloads
        ? AbiFunction_fromAbi([abiFunction, ...overloads], data)
        : abiFunction;
    if (Hex.size(data) <= 4)
        return undefined;
    return AbiParameters.decode(item.inputs, Hex.slice(data, 4));
}
// eslint-disable-next-line jsdoc/require-jsdoc
function decodeResult(...parameters) {
    const [abiFunction, data, options = {}] = (() => {
        if (Array.isArray(parameters[0])) {
            const [abi, name, data, options] = parameters;
            return [AbiFunction_fromAbi(abi, name), data, options];
        }
        return parameters;
    })();
    const values = AbiParameters.decode(abiFunction.outputs, data, options);
    if (values && Object.keys(values).length === 0)
        return undefined;
    if (values && Object.keys(values).length === 1) {
        if (Array.isArray(values))
            return values[0];
        return Object.values(values)[0];
    }
    return values;
}
// eslint-disable-next-line jsdoc/require-jsdoc
function encodeData(...parameters) {
    const [abiFunction, args = []] = (() => {
        if (Array.isArray(parameters[0])) {
            const [abi, name, args] = parameters;
            return [AbiFunction_fromAbi(abi, name, { args }), args];
        }
        const [abiFunction, args] = parameters;
        return [abiFunction, args];
    })();
    const { overloads } = abiFunction;
    const item = overloads
        ? AbiFunction_fromAbi([abiFunction, ...overloads], abiFunction.name, {
            args,
        })
        : abiFunction;
    const selector = AbiFunction_getSelector(item);
    const data = args.length > 0 ? AbiParameters_encode(item.inputs, args) : undefined;
    return data ? core_Hex/* concat */.xW(selector, data) : selector;
}
// eslint-disable-next-line jsdoc/require-jsdoc
function encodeResult(...parameters) {
    const [abiFunction, output, options = {}] = (() => {
        if (Array.isArray(parameters[0])) {
            const [abi, name, output, options] = parameters;
            return [AbiFunction_fromAbi(abi, name), output, options];
        }
        return parameters;
    })();
    const { as = 'Array' } = options;
    const values = (() => {
        if (abiFunction.outputs.length === 1)
            return [output];
        if (Array.isArray(output))
            return output;
        if (as === 'Object')
            return Object.values(output);
        return [output];
    })();
    return AbiParameters.encode(abiFunction.outputs, values);
}
/**
 * Formats an {@link ox#AbiFunction.AbiFunction} into a **Human Readable ABI Function**.
 *
 * @example
 * ```ts twoslash
 * import { AbiFunction } from 'ox'
 *
 * const formatted = AbiFunction.format({
 *   type: 'function',
 *   name: 'approve',
 *   stateMutability: 'nonpayable',
 *   inputs: [
 *     {
 *       name: 'spender',
 *       type: 'address',
 *     },
 *     {
 *       name: 'amount',
 *       type: 'uint256',
 *     },
 *   ],
 *   outputs: [{ type: 'bool' }],
 * })
 *
 * formatted
 * //    ^?
 *
 *
 * ```
 *
 * @param abiFunction - The ABI Function to format.
 * @returns The formatted ABI Function.
 */
function AbiFunction_format(abiFunction) {
    return abitype.formatAbiItem(abiFunction);
}
/**
 * Parses an arbitrary **JSON ABI Function** or **Human Readable ABI Function** into a typed {@link ox#AbiFunction.AbiFunction}.
 *
 * @example
 * ### JSON ABIs
 *
 * ```ts twoslash
 * import { AbiFunction } from 'ox'
 *
 * const approve = AbiFunction.from({
 *   type: 'function',
 *   name: 'approve',
 *   stateMutability: 'nonpayable',
 *   inputs: [
 *     {
 *       name: 'spender',
 *       type: 'address',
 *     },
 *     {
 *       name: 'amount',
 *       type: 'uint256',
 *     },
 *   ],
 *   outputs: [{ type: 'bool' }],
 * })
 *
 * approve
 * //^?
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 * @example
 * ### Human Readable ABIs
 *
 * A Human Readable ABI can be parsed into a typed ABI object:
 *
 * ```ts twoslash
 * import { AbiFunction } from 'ox'
 *
 * const approve = AbiFunction.from(
 *   'function approve(address spender, uint256 amount) returns (bool)' // [!code hl]
 * )
 *
 * approve
 * //^?
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 * @example
 * It is possible to specify `struct`s along with your definitions:
 *
 * ```ts twoslash
 * import { AbiFunction } from 'ox'
 *
 * const approve = AbiFunction.from([
 *   'struct Foo { address spender; uint256 amount; }', // [!code hl]
 *   'function approve(Foo foo) returns (bool)',
 * ])
 *
 * approve
 * //^?
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 *
 *
 * @param abiFunction - The ABI Function to parse.
 * @returns Typed ABI Function.
 */
function AbiFunction_from(abiFunction, options = {}) {
    return AbiItem_from(abiFunction, options);
}
/**
 * Extracts an {@link ox#AbiFunction.AbiFunction} from an {@link ox#Abi.Abi} given a name and optional arguments.
 *
 * @example
 * ### Extracting by Name
 *
 * ABI Functions can be extracted by their name using the `name` option:
 *
 * ```ts twoslash
 * import { Abi, AbiFunction } from 'ox'
 *
 * const abi = Abi.from([
 *   'function foo()',
 *   'event Transfer(address owner, address to, uint256 tokenId)',
 *   'function bar(string a) returns (uint256 x)',
 * ])
 *
 * const item = AbiFunction.fromAbi(abi, 'foo') // [!code focus]
 * //    ^?
 *
 *
 *
 *
 *
 *
 * ```
 *
 * @example
 * ### Extracting by Selector
 *
 * ABI Functions can be extract by their selector when {@link ox#Hex.Hex} is provided to `name`.
 *
 * ```ts twoslash
 * import { Abi, AbiFunction } from 'ox'
 *
 * const abi = Abi.from([
 *   'function foo()',
 *   'event Transfer(address owner, address to, uint256 tokenId)',
 *   'function bar(string a) returns (uint256 x)',
 * ])
 * const item = AbiFunction.fromAbi(abi, '0x095ea7b3') // [!code focus]
 * //    ^?
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ```
 *
 * :::note
 *
 * Extracting via a hex selector is useful when extracting an ABI Function from an `eth_call` RPC response or
 * from a Transaction `input`.
 *
 * :::
 *
 * @param abi - The ABI to extract from.
 * @param name - The name (or selector) of the ABI item to extract.
 * @param options - Extraction options.
 * @returns The ABI item.
 */
function AbiFunction_fromAbi(abi, name, options) {
    const item = fromAbi(abi, name, options);
    if (item.type !== 'function')
        throw new NotFoundError({ name, type: 'function' });
    return item;
}
/**
 * Computes the [4-byte selector](https://solidity-by-example.org/function-selector/) for an {@link ox#AbiFunction.AbiFunction}.
 *
 * Useful for computing function selectors for calldata.
 *
 * @example
 * ```ts twoslash
 * import { AbiFunction } from 'ox'
 *
 * const selector = AbiFunction.getSelector('function ownerOf(uint256 tokenId)')
 * // @log: '0x6352211e'
 * ```
 *
 * @example
 * ```ts twoslash
 * import { AbiFunction } from 'ox'
 *
 * const selector = AbiFunction.getSelector({
 *   inputs: [{ type: 'uint256' }],
 *   name: 'ownerOf',
 *   outputs: [],
 *   stateMutability: 'view',
 *   type: 'function'
 * })
 * // @log: '0x6352211e'
 * ```
 *
 * @param abiItem - The ABI item to compute the selector for.
 * @returns The first 4 bytes of the {@link ox#Hash.(keccak256:function)} hash of the function signature.
 */
function AbiFunction_getSelector(abiItem) {
    return getSelector(abiItem);
}
//# sourceMappingURL=AbiFunction.js.map
;// ./node_modules/viem/_esm/constants/address.js
const ethAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const zeroAddress = '0x0000000000000000000000000000000000000000';
//# sourceMappingURL=address.js.map
;// ./node_modules/viem/_esm/actions/public/simulateCalls.js










const getBalanceCode = '0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033';
/**
 * Simulates execution of a batch of calls.
 *
 * @param client - Client to use
 * @param parameters - {@link SimulateCallsParameters}
 * @returns Results. {@link SimulateCallsReturnType}
 *
 * @example
 * ```ts
 * import { createPublicClient, http, parseEther } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { simulateCalls } from 'viem/actions'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const result = await simulateCalls(client, {
 *   account: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
 *   calls: [{
 *     {
 *       data: '0xdeadbeef',
 *       to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *     },
 *     {
 *       to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *       value: parseEther('1'),
 *     },
 *   ]
 * })
 * ```
 */
async function simulateCalls(client, parameters) {
    const { blockNumber, blockTag, calls, stateOverrides, traceAssetChanges, traceTransfers, validation, } = parameters;
    const account = parameters.account
        ? (0,parseAccount/* parseAccount */.J)(parameters.account)
        : undefined;
    if (traceAssetChanges && !account)
        throw new base/* BaseError */.C('`account` is required when `traceAssetChanges` is true');
    // Derive bytecode to extract ETH balance via a contract call.
    const getBalanceData = account
        ? AbiConstructor_encode(AbiConstructor_from('constructor(bytes, bytes)'), {
            bytecode: constants_contracts/* deploylessCallViaBytecodeBytecode */.LX,
            args: [
                getBalanceCode,
                encodeData(AbiFunction_from('function getBalance(address)'), [account.address]),
            ],
        })
        : undefined;
    // Fetch ERC20/721 addresses that were "touched" from the calls.
    const assetAddresses = traceAssetChanges
        ? await Promise.all(parameters.calls.map(async (call) => {
            if (!call.data && !call.abi)
                return;
            const { accessList } = await createAccessList(client, {
                account: account.address,
                ...call,
                data: call.abi ? (0,encodeFunctionData/* encodeFunctionData */.p)(call) : call.data,
            });
            return accessList.map(({ address, storageKeys }) => storageKeys.length > 0 ? address : null);
        })).then((x) => x.flat().filter(Boolean))
        : [];
    const blocks = await simulateBlocks(client, {
        blockNumber,
        blockTag: blockTag,
        blocks: [
            ...(traceAssetChanges
                ? [
                    // ETH pre balances
                    {
                        calls: [{ data: getBalanceData }],
                        stateOverrides,
                    },
                    // Asset pre balances
                    {
                        calls: assetAddresses.map((address, i) => ({
                            abi: [
                                AbiFunction_from('function balanceOf(address) returns (uint256)'),
                            ],
                            functionName: 'balanceOf',
                            args: [account.address],
                            to: address,
                            from: zeroAddress,
                            nonce: i,
                        })),
                        stateOverrides: [
                            {
                                address: zeroAddress,
                                nonce: 0,
                            },
                        ],
                    },
                ]
                : []),
            {
                calls: [...calls, {}].map((call) => ({
                    ...call,
                    from: account?.address,
                })),
                stateOverrides,
            },
            ...(traceAssetChanges
                ? [
                    // ETH post balances
                    {
                        calls: [{ data: getBalanceData }],
                    },
                    // Asset post balances
                    {
                        calls: assetAddresses.map((address, i) => ({
                            abi: [
                                AbiFunction_from('function balanceOf(address) returns (uint256)'),
                            ],
                            functionName: 'balanceOf',
                            args: [account.address],
                            to: address,
                            from: zeroAddress,
                            nonce: i,
                        })),
                        stateOverrides: [
                            {
                                address: zeroAddress,
                                nonce: 0,
                            },
                        ],
                    },
                    // Decimals
                    {
                        calls: assetAddresses.map((address, i) => ({
                            to: address,
                            abi: [
                                AbiFunction_from('function decimals() returns (uint256)'),
                            ],
                            functionName: 'decimals',
                            from: zeroAddress,
                            nonce: i,
                        })),
                        stateOverrides: [
                            {
                                address: zeroAddress,
                                nonce: 0,
                            },
                        ],
                    },
                    // Token URI
                    {
                        calls: assetAddresses.map((address, i) => ({
                            to: address,
                            abi: [
                                AbiFunction_from('function tokenURI(uint256) returns (string)'),
                            ],
                            functionName: 'tokenURI',
                            args: [0n],
                            from: zeroAddress,
                            nonce: i,
                        })),
                        stateOverrides: [
                            {
                                address: zeroAddress,
                                nonce: 0,
                            },
                        ],
                    },
                    // Symbols
                    {
                        calls: assetAddresses.map((address, i) => ({
                            to: address,
                            abi: [AbiFunction_from('function symbol() returns (string)')],
                            functionName: 'symbol',
                            from: zeroAddress,
                            nonce: i,
                        })),
                        stateOverrides: [
                            {
                                address: zeroAddress,
                                nonce: 0,
                            },
                        ],
                    },
                ]
                : []),
        ],
        traceTransfers,
        validation,
    });
    const block_results = traceAssetChanges ? blocks[2] : blocks[0];
    const [block_ethPre, block_assetsPre, , block_ethPost, block_assetsPost, block_decimals, block_tokenURI, block_symbols,] = traceAssetChanges ? blocks : [];
    // Extract call results from the simulation.
    const { calls: block_calls, ...block } = block_results;
    const results = block_calls.slice(0, -1) ?? [];
    // Extract pre-execution ETH and asset balances.
    const ethPre = block_ethPre?.calls ?? [];
    const assetsPre = block_assetsPre?.calls ?? [];
    const balancesPre = [...ethPre, ...assetsPre].map((call) => call.status === 'success' ? (0,fromHex/* hexToBigInt */.uU)(call.data) : null);
    // Extract post-execution ETH and asset balances.
    const ethPost = block_ethPost?.calls ?? [];
    const assetsPost = block_assetsPost?.calls ?? [];
    const balancesPost = [...ethPost, ...assetsPost].map((call) => call.status === 'success' ? (0,fromHex/* hexToBigInt */.uU)(call.data) : null);
    // Extract asset symbols & decimals.
    const decimals = (block_decimals?.calls ?? []).map((x) => x.status === 'success' ? x.result : null);
    const symbols = (block_symbols?.calls ?? []).map((x) => x.status === 'success' ? x.result : null);
    const tokenURI = (block_tokenURI?.calls ?? []).map((x) => x.status === 'success' ? x.result : null);
    const changes = [];
    for (const [i, balancePost] of balancesPost.entries()) {
        const balancePre = balancesPre[i];
        if (typeof balancePost !== 'bigint')
            continue;
        if (typeof balancePre !== 'bigint')
            continue;
        const decimals_ = decimals[i - 1];
        const symbol_ = symbols[i - 1];
        const tokenURI_ = tokenURI[i - 1];
        const token = (() => {
            if (i === 0)
                return {
                    address: ethAddress,
                    decimals: 18,
                    symbol: 'ETH',
                };
            return {
                address: assetAddresses[i - 1],
                decimals: tokenURI_ || decimals_ ? Number(decimals_ ?? 1) : undefined,
                symbol: symbol_ ?? undefined,
            };
        })();
        if (changes.some((change) => change.token.address === token.address))
            continue;
        changes.push({
            token,
            value: {
                pre: balancePre,
                post: balancePost,
                diff: balancePost - balancePre,
            },
        });
    }
    return {
        assetChanges: changes,
        block,
        results,
    };
}
//# sourceMappingURL=simulateCalls.js.map
;// ./node_modules/viem/_esm/actions/public/simulateContract.js






/**
 * Simulates/validates a contract interaction. This is useful for retrieving **return data** and **revert reasons** of contract write functions.
 *
 * - Docs: https://viem.sh/docs/contract/simulateContract
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_writing-to-contracts
 *
 * This function does not require gas to execute and _**does not**_ change the state of the blockchain. It is almost identical to [`readContract`](https://viem.sh/docs/contract/readContract), but also supports contract write functions.
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).
 *
 * @param client - Client to use
 * @param parameters - {@link SimulateContractParameters}
 * @returns The simulation result and write request. {@link SimulateContractReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { simulateContract } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const result = await simulateContract(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function mint(uint32) view returns (uint32)']),
 *   functionName: 'mint',
 *   args: ['69420'],
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 */
async function simulateContract(client, parameters) {
    const { abi, address, args, dataSuffix, functionName, ...callRequest } = parameters;
    const account = callRequest.account
        ? (0,parseAccount/* parseAccount */.J)(callRequest.account)
        : client.account;
    const calldata = (0,encodeFunctionData/* encodeFunctionData */.p)({ abi, args, functionName });
    try {
        const { data } = await getAction(client, call/* call */.T, 'call')({
            batch: false,
            data: `${calldata}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...callRequest,
            account,
        });
        const result = (0,decodeFunctionResult/* decodeFunctionResult */.e)({
            abi,
            args,
            functionName,
            data: data || '0x',
        });
        const minimizedAbi = abi.filter((abiItem) => 'name' in abiItem && abiItem.name === parameters.functionName);
        return {
            result,
            request: {
                abi: minimizedAbi,
                address,
                args,
                dataSuffix,
                functionName,
                ...callRequest,
                account,
            },
        };
    }
    catch (error) {
        throw getContractError(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/simulateContract',
            functionName,
            sender: account?.address,
        });
    }
}
//# sourceMappingURL=simulateContract.js.map
;// ./node_modules/viem/_esm/actions/public/uninstallFilter.js
/**
 * Destroys a [`Filter`](https://viem.sh/docs/glossary/types#filter).
 *
 * - Docs: https://viem.sh/docs/actions/public/uninstallFilter
 * - JSON-RPC Methods: [`eth_uninstallFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallFilter)
 *
 * Destroys a Filter that was created from one of the following Actions:
 * - [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
 * - [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
 * - [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)
 *
 * @param client - Client to use
 * @param parameters - {@link UninstallFilterParameters}
 * @returns A boolean indicating if the Filter was successfully uninstalled. {@link UninstallFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter, uninstallFilter } from 'viem/public'
 *
 * const filter = await createPendingTransactionFilter(client)
 * const uninstalled = await uninstallFilter(client, { filter })
 * // true
 */
async function uninstallFilter(_client, { filter }) {
    return filter.request({
        method: 'eth_uninstallFilter',
        params: [filter.id],
    });
}
//# sourceMappingURL=uninstallFilter.js.map
;// ./node_modules/viem/node_modules/ox/_esm/erc6492/SignatureErc6492.js



/**
 * Magic bytes used to identify ERC-6492 wrapped signatures.
 */
const magicBytes = '0x6492649264926492649264926492649264926492649264926492649264926492';
/**
 * Deployless ERC-6492 signature verification bytecode.
 */
const universalSignatureValidatorBytecode = '0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572';
/**
 * ABI for the ERC-6492 universal deployless signature validator contract.
 *
 * Constructor return value is `0x1` (valid) or `0x0` (invalid).
 */
const universalSignatureValidatorAbi = [
    {
        inputs: [
            {
                name: '_signer',
                type: 'address',
            },
            {
                name: '_hash',
                type: 'bytes32',
            },
            {
                name: '_signature',
                type: 'bytes',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [
            {
                name: '_signer',
                type: 'address',
            },
            {
                name: '_hash',
                type: 'bytes32',
            },
            {
                name: '_signature',
                type: 'bytes',
            },
        ],
        outputs: [
            {
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        name: 'isValidSig',
    },
];
/**
 * Asserts that the wrapped signature is valid.
 *
 * @example
 * ```ts twoslash
 * import { SignatureErc6492 } from 'ox/erc6492'
 *
 * SignatureErc6492.assert('0xdeadbeef')
 * // @error: InvalidWrappedSignatureError: Value `0xdeadbeef` is an invalid ERC-6492 wrapped signature.
 * ```
 *
 * @param wrapped - The wrapped signature to assert.
 */
function SignatureErc6492_assert(wrapped) {
    if (core_Hex/* slice */.di(wrapped, -32) !== magicBytes)
        throw new InvalidWrappedSignatureError(wrapped);
}
/**
 * Parses an [ERC-6492 wrapped signature](https://eips.ethereum.org/EIPS/eip-6492#specification) into its constituent parts.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Secp256k1 } from 'ox'
 * import { SignatureErc6492 } from 'ox/erc6492' // [!code focus]
 *
 * const signature = Secp256k1.sign({
 *   payload: '0x...',
 *   privateKey: '0x...',
 * })
 *
 * // Instantiate from serialized format. // [!code focus]
 * const wrapped = SignatureErc6492.from('0x...') // [!code focus]
 * // @log: { data: '0x...', signature: { ... }, to: '0x...', } // [!code focus]
 *
 * // Instantiate from constituent parts. // [!code focus]
 * const wrapped = SignatureErc6492.from({ // [!code focus]
 *   data: '0x...', // [!code focus]
 *   signature, // [!code focus]
 *   to: '0x...', // [!code focus]
 * })
 * // @log: { data: '0x...', signature: { ... }, to: '0x...', }
 * ```
 *
 * @param wrapped - Wrapped signature to parse.
 * @returns Wrapped signature.
 */
function SignatureErc6492_from(wrapped) {
    if (typeof wrapped === 'string')
        return unwrap(wrapped);
    return wrapped;
}
/**
 * Parses an [ERC-6492 wrapped signature](https://eips.ethereum.org/EIPS/eip-6492#specification) into its constituent parts.
 *
 * @example
 * ```ts twoslash
 * import { SignatureErc6492 } from 'ox/erc6492'
 *
 * const { data, signature, to } = SignatureErc6492.unwrap('0x...')
 * ```
 *
 * @param wrapped - Wrapped signature to parse.
 * @returns Wrapped signature.
 */
function unwrap(wrapped) {
    SignatureErc6492_assert(wrapped);
    const [to, data, signature] = AbiParameters.decode(AbiParameters.from('address, bytes, bytes'), wrapped);
    return { data, signature, to };
}
/**
 * Serializes an [ERC-6492 wrapped signature](https://eips.ethereum.org/EIPS/eip-6492#specification).
 *
 * @example
 * ```ts twoslash
 * import { Secp256k1, Signature } from 'ox'
 * import { SignatureErc6492 } from 'ox/erc6492' // [!code focus]
 *
 * const signature = Secp256k1.sign({
 *   payload: '0x...',
 *   privateKey: '0x...',
 * })
 *
 * const wrapped = SignatureErc6492.wrap({ // [!code focus]
 *   data: '0xdeadbeef', // [!code focus]
 *   signature: Signature.toHex(signature), // [!code focus]
 *   to: '0x00000000219ab540356cBB839Cbe05303d7705Fa', // [!code focus]
 * }) // [!code focus]
 * ```
 *
 * @param value - Wrapped signature to serialize.
 * @returns Serialized wrapped signature.
 */
function wrap(value) {
    const { data, signature, to } = value;
    return core_Hex/* concat */.xW(AbiParameters_encode(AbiParameters_from('address, bytes, bytes'), [
        to,
        data,
        signature,
    ]), magicBytes);
}
/**
 * Validates a wrapped signature. Returns `true` if the wrapped signature is valid, `false` otherwise.
 *
 * @example
 * ```ts twoslash
 * import { SignatureErc6492 } from 'ox/erc6492'
 *
 * const valid = SignatureErc6492.validate('0xdeadbeef')
 * // @log: false
 * ```
 *
 * @param wrapped - The wrapped signature to validate.
 * @returns `true` if the wrapped signature is valid, `false` otherwise.
 */
function SignatureErc6492_validate(wrapped) {
    try {
        SignatureErc6492_assert(wrapped);
        return true;
    }
    catch {
        return false;
    }
}
/** Thrown when the ERC-6492 wrapped signature is invalid. */
class InvalidWrappedSignatureError extends Errors/* BaseError */.C {
    constructor(wrapped) {
        super(`Value \`${wrapped}\` is an invalid ERC-6492 wrapped signature.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SignatureErc6492.InvalidWrappedSignatureError'
        });
    }
}
//# sourceMappingURL=SignatureErc6492.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/Signature.js






/**
 * Asserts that a Signature is valid.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.assert({
 *   r: -49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 * })
 * // @error: InvalidSignatureRError:
 * // @error: Value `-549...n` is an invalid r value.
 * // @error: r must be a positive integer less than 2^256.
 * ```
 *
 * @param signature - The signature object to assert.
 */
function Signature_assert(signature, options = {}) {
    const { recovered } = options;
    if (typeof signature.r === 'undefined')
        throw new MissingPropertiesError({ signature });
    if (typeof signature.s === 'undefined')
        throw new MissingPropertiesError({ signature });
    if (recovered && typeof signature.yParity === 'undefined')
        throw new MissingPropertiesError({ signature });
    if (signature.r < 0n || signature.r > maxUint256)
        throw new InvalidRError({ value: signature.r });
    if (signature.s < 0n || signature.s > maxUint256)
        throw new InvalidSError({ value: signature.s });
    if (typeof signature.yParity === 'number' &&
        signature.yParity !== 0 &&
        signature.yParity !== 1)
        throw new InvalidYParityError({ value: signature.yParity });
}
/**
 * Deserializes a {@link ox#Bytes.Bytes} signature into a structured {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Signature } from 'ox'
 *
 * Signature.fromBytes(new Uint8Array([128, 3, 131, ...]))
 * // @log: { r: 5231...n, s: 3522...n, yParity: 0 }
 * ```
 *
 * @param signature - The serialized signature.
 * @returns The deserialized {@link ox#Signature.Signature}.
 */
function fromBytes(signature) {
    return Signature_fromHex(core_Hex/* fromBytes */.uK(signature));
}
/**
 * Deserializes a {@link ox#Hex.Hex} signature into a structured {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.fromHex('0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c')
 * // @log: { r: 5231...n, s: 3522...n, yParity: 0 }
 * ```
 *
 * @param serialized - The serialized signature.
 * @returns The deserialized {@link ox#Signature.Signature}.
 */
function Signature_fromHex(signature) {
    if (signature.length !== 130 && signature.length !== 132)
        throw new InvalidSerializedSizeError({ signature });
    const r = BigInt(core_Hex/* slice */.di(signature, 0, 32));
    const s = BigInt(core_Hex/* slice */.di(signature, 32, 64));
    const yParity = (() => {
        const yParity = Number(`0x${signature.slice(130)}`);
        if (Number.isNaN(yParity))
            return undefined;
        try {
            return vToYParity(yParity);
        }
        catch {
            throw new InvalidYParityError({ value: yParity });
        }
    })();
    if (typeof yParity === 'undefined')
        return {
            r,
            s,
        };
    return {
        r,
        s,
        yParity,
    };
}
/**
 * Extracts a {@link ox#Signature.Signature} from an arbitrary object that may include signature properties.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Signature } from 'ox'
 *
 * Signature.extract({
 *   baz: 'barry',
 *   foo: 'bar',
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 *   zebra: 'stripes',
 * })
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log:   yParity: 1
 * // @log: }
 * ```
 *
 * @param value - The arbitrary object to extract the signature from.
 * @returns The extracted {@link ox#Signature.Signature}.
 */
function Signature_extract(value) {
    if (typeof value.r === 'undefined')
        return undefined;
    if (typeof value.s === 'undefined')
        return undefined;
    return Signature_from(value);
}
/**
 * Instantiates a typed {@link ox#Signature.Signature} object from a {@link ox#Signature.Signature}, {@link ox#Signature.Legacy}, {@link ox#Bytes.Bytes}, or {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.from({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 * })
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log:   yParity: 1
 * // @log: }
 * ```
 *
 * @example
 * ### From Serialized
 *
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.from('0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db801')
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log:   yParity: 1,
 * // @log: }
 * ```
 *
 * @example
 * ### From Legacy
 *
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.from({
 *   r: 47323457007453657207889730243826965761922296599680473886588287015755652701072n,
 *   s: 57228803202727131502949358313456071280488184270258293674242124340113824882788n,
 *   v: 27,
 * })
 * // @log: {
 * // @log:   r: 47323457007453657207889730243826965761922296599680473886588287015755652701072n,
 * // @log:   s: 57228803202727131502949358313456071280488184270258293674242124340113824882788n,
 * // @log:   yParity: 0
 * // @log: }
 * ```
 *
 * @param signature - The signature value to instantiate.
 * @returns The instantiated {@link ox#Signature.Signature}.
 */
function Signature_from(signature) {
    const signature_ = (() => {
        if (typeof signature === 'string')
            return Signature_fromHex(signature);
        if (signature instanceof Uint8Array)
            return fromBytes(signature);
        if (typeof signature.r === 'string')
            return fromRpc(signature);
        if (signature.v)
            return fromLegacy(signature);
        return {
            r: signature.r,
            s: signature.s,
            ...(typeof signature.yParity !== 'undefined'
                ? { yParity: signature.yParity }
                : {}),
        };
    })();
    Signature_assert(signature_);
    return signature_;
}
/**
 * Converts a DER-encoded signature to a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromDerBytes(new Uint8Array([132, 51, 23, ...]))
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log: }
 * ```
 *
 * @param signature - The DER-encoded signature to convert.
 * @returns The {@link ox#Signature.Signature}.
 */
function fromDerBytes(signature) {
    return fromDerHex(Hex.fromBytes(signature));
}
/**
 * Converts a DER-encoded signature to a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromDerHex('0x304402206e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf02204a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8')
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log: }
 * ```
 *
 * @param signature - The DER-encoded signature to convert.
 * @returns The {@link ox#Signature.Signature}.
 */
function fromDerHex(signature) {
    const { r, s } = secp256k1.Signature.fromDER(Hex.from(signature).slice(2));
    return { r, s };
}
/**
 * Converts a {@link ox#Signature.Legacy} into a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const legacy = Signature.fromLegacy({ r: 1n, s: 2n, v: 28 })
 * // @log: { r: 1n, s: 2n, yParity: 1 }
 * ```
 *
 * @param signature - The {@link ox#Signature.Legacy} to convert.
 * @returns The converted {@link ox#Signature.Signature}.
 */
function fromLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        yParity: vToYParity(signature.v),
    };
}
/**
 * Converts a {@link ox#Signature.Rpc} into a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromRpc({
 *   r: '0x635dc2033e60185bb36709c29c75d64ea51dfbd91c32ef4be198e4ceb169fb4d',
 *   s: '0x50c2667ac4c771072746acfdcf1f1483336dcca8bd2df47cd83175dbe60f0540',
 *   yParity: '0x0',
 * })
 * ```
 *
 * @param signature - The {@link ox#Signature.Rpc} to convert.
 * @returns The converted {@link ox#Signature.Signature}.
 */
function fromRpc(signature) {
    const yParity = (() => {
        const v = signature.v ? Number(signature.v) : undefined;
        let yParity = signature.yParity ? Number(signature.yParity) : undefined;
        if (typeof v === 'number' && typeof yParity !== 'number')
            yParity = vToYParity(v);
        if (typeof yParity !== 'number')
            throw new InvalidYParityError({ value: signature.yParity });
        return yParity;
    })();
    return {
        r: BigInt(signature.r),
        s: BigInt(signature.s),
        yParity,
    };
}
/**
 * Converts a {@link ox#Signature.Tuple} to a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromTuple(['0x01', '0x7b', '0x1c8'])
 * // @log: {
 * // @log:   r: 123n,
 * // @log:   s: 456n,
 * // @log:   yParity: 1,
 * // @log: }
 * ```
 *
 * @param tuple - The {@link ox#Signature.Tuple} to convert.
 * @returns The {@link ox#Signature.Signature}.
 */
function fromTuple(tuple) {
    const [yParity, r, s] = tuple;
    return Signature_from({
        r: r === '0x' ? 0n : BigInt(r),
        s: s === '0x' ? 0n : BigInt(s),
        yParity: yParity === '0x' ? 0 : Number(yParity),
    });
}
/**
 * Serializes a {@link ox#Signature.Signature} to {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.toBytes({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1
 * })
 * // @log: Uint8Array [102, 16, 10, ...]
 * ```
 *
 * @param signature - The signature to serialize.
 * @returns The serialized signature.
 */
function Signature_toBytes(signature) {
    return Bytes.fromHex(Signature_toHex(signature));
}
/**
 * Serializes a {@link ox#Signature.Signature} to {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.toHex({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1
 * })
 * // @log: '0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c'
 * ```
 *
 * @param signature - The signature to serialize.
 * @returns The serialized signature.
 */
function Signature_toHex(signature) {
    Signature_assert(signature);
    const r = signature.r;
    const s = signature.s;
    const signature_ = Hex.concat(Hex.fromNumber(r, { size: 32 }), Hex.fromNumber(s, { size: 32 }), 
    // If the signature is recovered, add the recovery byte to the signature.
    typeof signature.yParity === 'number'
        ? Hex.fromNumber(yParityToV(signature.yParity), { size: 1 })
        : '0x');
    return signature_;
}
/**
 * Converts a {@link ox#Signature.Signature} to DER-encoded format.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.from({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * })
 *
 * const signature_der = Signature.toDerBytes(signature)
 * // @log: Uint8Array [132, 51, 23, ...]
 * ```
 *
 * @param signature - The signature to convert.
 * @returns The DER-encoded signature.
 */
function toDerBytes(signature) {
    const sig = new secp256k1.Signature(signature.r, signature.s);
    return sig.toDERRawBytes();
}
/**
 * Converts a {@link ox#Signature.Signature} to DER-encoded format.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.from({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * })
 *
 * const signature_der = Signature.toDerHex(signature)
 * // @log: '0x304402206e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf02204a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8'
 * ```
 *
 * @param signature - The signature to convert.
 * @returns The DER-encoded signature.
 */
function toDerHex(signature) {
    const sig = new secp256k1.Signature(signature.r, signature.s);
    return `0x${sig.toDERHex()}`;
}
/**
 * Converts a {@link ox#Signature.Signature} into a {@link ox#Signature.Legacy}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const legacy = Signature.toLegacy({ r: 1n, s: 2n, yParity: 1 })
 * // @log: { r: 1n, s: 2n, v: 28 }
 * ```
 *
 * @param signature - The {@link ox#Signature.Signature} to convert.
 * @returns The converted {@link ox#Signature.Legacy}.
 */
function toLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        v: yParityToV(signature.yParity),
    };
}
/**
 * Converts a {@link ox#Signature.Signature} into a {@link ox#Signature.Rpc}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.toRpc({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1
 * })
 * ```
 *
 * @param signature - The {@link ox#Signature.Signature} to convert.
 * @returns The converted {@link ox#Signature.Rpc}.
 */
function toRpc(signature) {
    const { r, s, yParity } = signature;
    return {
        r: Hex.fromNumber(r, { size: 32 }),
        s: Hex.fromNumber(s, { size: 32 }),
        yParity: yParity === 0 ? '0x0' : '0x1',
    };
}
/**
 * Converts a {@link ox#Signature.Signature} to a serialized {@link ox#Signature.Tuple} to be used for signatures in Transaction Envelopes, EIP-7702 Authorization Lists, etc.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signatureTuple = Signature.toTuple({
 *   r: 123n,
 *   s: 456n,
 *   yParity: 1,
 * })
 * // @log: [yParity: '0x01', r: '0x7b', s: '0x1c8']
 * ```
 *
 * @param signature - The {@link ox#Signature.Signature} to convert.
 * @returns The {@link ox#Signature.Tuple}.
 */
function toTuple(signature) {
    const { r, s, yParity } = signature;
    return [
        yParity ? '0x01' : '0x',
        r === 0n ? '0x' : Hex.trimLeft(Hex.fromNumber(r)),
        s === 0n ? '0x' : Hex.trimLeft(Hex.fromNumber(s)),
    ];
}
/**
 * Validates a Signature. Returns `true` if the signature is valid, `false` otherwise.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const valid = Signature.validate({
 *   r: -49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 * })
 * // @log: false
 * ```
 *
 * @param signature - The signature object to assert.
 */
function Signature_validate(signature, options = {}) {
    try {
        Signature_assert(signature, options);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Converts a ECDSA `v` value to a `yParity` value.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const yParity = Signature.vToYParity(28)
 * // @log: 1
 * ```
 *
 * @param v - The ECDSA `v` value to convert.
 * @returns The `yParity` value.
 */
function vToYParity(v) {
    if (v === 0 || v === 27)
        return 0;
    if (v === 1 || v === 28)
        return 1;
    if (v >= 35)
        return v % 2 === 0 ? 1 : 0;
    throw new InvalidVError({ value: v });
}
/**
 * Converts a ECDSA `v` value to a `yParity` value.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const v = Signature.yParityToV(1)
 * // @log: 28
 * ```
 *
 * @param yParity - The ECDSA `yParity` value to convert.
 * @returns The `v` value.
 */
function yParityToV(yParity) {
    if (yParity === 0)
        return 27;
    if (yParity === 1)
        return 28;
    throw new InvalidYParityError({ value: yParity });
}
/** Thrown when the serialized signature is of an invalid size. */
class InvalidSerializedSizeError extends Errors/* BaseError */.C {
    constructor({ signature }) {
        super(`Value \`${signature}\` is an invalid signature size.`, {
            metaMessages: [
                'Expected: 64 bytes or 65 bytes.',
                `Received ${core_Hex/* size */.Ej(core_Hex/* from */.HT(signature))} bytes.`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSerializedSizeError'
        });
    }
}
/** Thrown when the signature is missing either an `r`, `s`, or `yParity` property. */
class MissingPropertiesError extends Errors/* BaseError */.C {
    constructor({ signature }) {
        super(`Signature \`${Json/* stringify */.A(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.MissingPropertiesError'
        });
    }
}
/** Thrown when the signature has an invalid `r` value. */
class InvalidRError extends Errors/* BaseError */.C {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidRError'
        });
    }
}
/** Thrown when the signature has an invalid `s` value. */
class InvalidSError extends Errors/* BaseError */.C {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSError'
        });
    }
}
/** Thrown when the signature has an invalid `yParity` value. */
class InvalidYParityError extends Errors/* BaseError */.C {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidYParityError'
        });
    }
}
/** Thrown when the signature has an invalid `v` value. */
class InvalidVError extends Errors/* BaseError */.C {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidVError'
        });
    }
}
//# sourceMappingURL=Signature.js.map
;// ./node_modules/viem/node_modules/ox/_esm/core/Authorization.js




/**
 * Converts an [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) Authorization object into a typed {@link ox#Authorization.Authorization}.
 *
 * @example
 * An Authorization can be instantiated from an [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) Authorization tuple in object format.
 *
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorization = Authorization.from({
 *   address: '0x1234567890abcdef1234567890abcdef12345678',
 *   chainId: 1,
 *   nonce: 69n,
 * })
 * ```
 *
 * @example
 * ### Attaching Signatures
 *
 * A {@link ox#Signature.Signature} can be attached with the `signature` option. The example below demonstrates signing
 * an Authorization with {@link ox#Secp256k1.(sign:function)}.
 *
 * ```ts twoslash
 * import { Authorization, Secp256k1 } from 'ox'
 *
 * const authorization = Authorization.from({
 *   address: '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c',
 *   chainId: 1,
 *   nonce: 40n,
 * })
 *
 * const signature = Secp256k1.sign({
 *   payload: Authorization.getSignPayload(authorization),
 *   privateKey: '0x...',
 * })
 *
 * const authorization_signed = Authorization.from(authorization, { signature }) // [!code focus]
 * ```
 *
 * @param authorization - An [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) Authorization tuple in object format.
 * @param options - Authorization options.
 * @returns The {@link ox#Authorization.Authorization}.
 */
function Authorization_from(authorization, options = {}) {
    if (typeof authorization.chainId === 'string')
        return Authorization_fromRpc(authorization);
    return { ...authorization, ...options.signature };
}
/**
 * Converts an {@link ox#Authorization.Rpc} to an {@link ox#Authorization.Authorization}.
 *
 * @example
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorization = Authorization.fromRpc({
 *   address: '0x0000000000000000000000000000000000000000',
 *   chainId: '0x1',
 *   nonce: '0x1',
 *   r: '0x635dc2033e60185bb36709c29c75d64ea51dfbd91c32ef4be198e4ceb169fb4d',
 *   s: '0x50c2667ac4c771072746acfdcf1f1483336dcca8bd2df47cd83175dbe60f0540',
 *   yParity: '0x0',
 * })
 * ```
 *
 * @param authorization - The RPC-formatted Authorization.
 * @returns A signed {@link ox#Authorization.Authorization}.
 */
function Authorization_fromRpc(authorization) {
    const { address, chainId, nonce } = authorization;
    const signature = Signature_extract(authorization);
    return {
        address,
        chainId: Number(chainId),
        nonce: BigInt(nonce),
        ...signature,
    };
}
/**
 * Converts an {@link ox#Authorization.ListRpc} to an {@link ox#Authorization.List}.
 *
 * @example
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorizationList = Authorization.fromRpcList([{
 *   address: '0x0000000000000000000000000000000000000000',
 *   chainId: '0x1',
 *   nonce: '0x1',
 *   r: '0x635dc2033e60185bb36709c29c75d64ea51dfbd91c32ef4be198e4ceb169fb4d',
 *   s: '0x50c2667ac4c771072746acfdcf1f1483336dcca8bd2df47cd83175dbe60f0540',
 *   yParity: '0x0',
 * }])
 * ```
 *
 * @param authorizationList - The RPC-formatted Authorization list.
 * @returns A signed {@link ox#Authorization.List}.
 */
function fromRpcList(authorizationList) {
    return authorizationList.map(Authorization_fromRpc);
}
/**
 * Converts an {@link ox#Authorization.Tuple} to an {@link ox#Authorization.Authorization}.
 *
 * @example
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorization = Authorization.fromTuple([
 *   '0x1',
 *   '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c',
 *   '0x3'
 * ])
 * // @log: {
 * // @log:   address: '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c',
 * // @log:   chainId: 1,
 * // @log:   nonce: 3n
 * // @log: }
 * ```
 *
 * @example
 * It is also possible to append a Signature tuple to the end of an Authorization tuple.
 *
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorization = Authorization.fromTuple([
 *   '0x1',
 *   '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c',
 *   '0x3',
 *   '0x1',
 *   '0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90',
 *   '0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064',
 * ])
 * // @log: {
 * // @log:   address: '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c',
 * // @log:   chainId: 1,
 * // @log:   nonce: 3n
 * // @log:   r: BigInt('0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90'),
 * // @log:   s: BigInt('0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064'),
 * // @log:   yParity: 0,
 * // @log: }
 * ```
 *
 * @param tuple - The [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) Authorization tuple.
 * @returns The {@link ox#Authorization.Authorization}.
 */
function Authorization_fromTuple(tuple) {
    const [chainId, address, nonce, yParity, r, s] = tuple;
    let args = {
        address,
        chainId: chainId === '0x' ? 0 : Number(chainId),
        nonce: nonce === '0x' ? 0n : BigInt(nonce),
    };
    if (yParity && r && s)
        args = { ...args, ...Signature.fromTuple([yParity, r, s]) };
    return Authorization_from(args);
}
/**
 * Converts an {@link ox#Authorization.TupleList} to an {@link ox#Authorization.List}.
 *
 * @example
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorizationList = Authorization.fromTupleList([
 *   ['0x1', '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c', '0x3'],
 *   ['0x3', '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c', '0x14'],
 * ])
 * // @log: [
 * // @log:   {
 * // @log:     address: '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c',
 * // @log:     chainId: 1,
 * // @log:     nonce: 3n,
 * // @log:   },
 * // @log:   {
 * // @log:     address: '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c',
 * // @log:     chainId: 3,
 * // @log:     nonce: 20n,
 * // @log:   },
 * // @log: ]
 * ```
 *
 * @example
 * It is also possible to append a Signature tuple to the end of an Authorization tuple.
 *
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorizationList = Authorization.fromTupleList([
 *   ['0x1', '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c', '0x3', '0x1', '0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90', '0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064'],
 *   ['0x3', '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c', '0x14', '0x1', '0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90', '0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064'],
 * ])
 * // @log: [
 * // @log:   {
 * // @log:     address: '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c',
 * // @log:     chainId: 1,
 * // @log:     nonce: 3n,
 * // @log:     r: BigInt('0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90'),
 * // @log:     s: BigInt('0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064'),
 * // @log:     yParity: 0,
 * // @log:   },
 * // @log:   {
 * // @log:     address: '0xbe95c3f554e9fc85ec51be69a3d807a0d55bcf2c',
 * // @log:     chainId: 3,
 * // @log:     nonce: 20n,
 * // @log:     r: BigInt('0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90'),
 * // @log:     s: BigInt('0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064'),
 * // @log:     yParity: 0,
 * // @log:   },
 * // @log: ]
 * ```
 *
 * @param tupleList - The [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) Authorization tuple list.
 * @returns An {@link ox#Authorization.List}.
 */
function fromTupleList(tupleList) {
    const list = [];
    for (const tuple of tupleList)
        list.push(Authorization_fromTuple(tuple));
    return list;
}
/**
 * Computes the sign payload for an {@link ox#Authorization.Authorization} in [EIP-7702 format](https://eips.ethereum.org/EIPS/eip-7702): `keccak256('0x05' || rlp([chain_id, address, nonce]))`.
 *
 * @example
 * The example below demonstrates computing the sign payload for an {@link ox#Authorization.Authorization}. This payload
 * can then be passed to signing functions like {@link ox#Secp256k1.(sign:function)}.
 *
 * ```ts twoslash
 * import { Authorization, Secp256k1 } from 'ox'
 *
 * const authorization = Authorization.from({
 *   address: '0x1234567890abcdef1234567890abcdef12345678',
 *   chainId: 1,
 *   nonce: 69n,
 * })
 *
 * const payload = Authorization.getSignPayload(authorization) // [!code focus]
 *
 * const signature = Secp256k1.sign({
 *   payload,
 *   privateKey: '0x...',
 * })
 * ```
 *
 * @param authorization - The {@link ox#Authorization.Authorization}.
 * @returns The sign payload.
 */
function getSignPayload(authorization) {
    return hash(authorization, { presign: true });
}
/**
 * Computes the hash for an {@link ox#Authorization.Authorization} in [EIP-7702 format](https://eips.ethereum.org/EIPS/eip-7702): `keccak256('0x05' || rlp([chain_id, address, nonce]))`.
 *
 * @example
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorization = Authorization.from({
 *   address: '0x1234567890abcdef1234567890abcdef12345678',
 *   chainId: 1,
 *   nonce: 69n,
 * })
 *
 * const hash = Authorization.hash(authorization) // [!code focus]
 * ```
 *
 * @param authorization - The {@link ox#Authorization.Authorization}.
 * @returns The hash.
 */
function hash(authorization, options = {}) {
    const { presign } = options;
    return Hash.keccak256(Hex.concat('0x05', Rlp.fromHex(Authorization_toTuple(presign
        ? {
            address: authorization.address,
            chainId: authorization.chainId,
            nonce: authorization.nonce,
        }
        : authorization))));
}
/**
 * Converts an {@link ox#Authorization.Authorization} to an {@link ox#Authorization.Rpc}.
 *
 * @example
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorization = Authorization.toRpc({
 *   address: '0x0000000000000000000000000000000000000000',
 *   chainId: 1,
 *   nonce: 1n,
 *   r: 44944627813007772897391531230081695102703289123332187696115181104739239197517n,
 *   s: 36528503505192438307355164441104001310566505351980369085208178712678799181120n,
 *   yParity: 0,
 * })
 * ```
 *
 * @param authorization - An Authorization.
 * @returns An RPC-formatted Authorization.
 */
function Authorization_toRpc(authorization) {
    const { address, chainId, nonce, ...signature } = authorization;
    return {
        address,
        chainId: Hex.fromNumber(chainId),
        nonce: Hex.fromNumber(nonce),
        ...Signature.toRpc(signature),
    };
}
/**
 * Converts an {@link ox#Authorization.List} to an {@link ox#Authorization.ListRpc}.
 *
 * @example
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorization = Authorization.toRpcList([{
 *   address: '0x0000000000000000000000000000000000000000',
 *   chainId: 1,
 *   nonce: 1n,
 *   r: 44944627813007772897391531230081695102703289123332187696115181104739239197517n,
 *   s: 36528503505192438307355164441104001310566505351980369085208178712678799181120n,
 *   yParity: 0,
 * }])
 * ```
 *
 * @param authorizationList - An Authorization List.
 * @returns An RPC-formatted Authorization List.
 */
function toRpcList(authorizationList) {
    return authorizationList.map(Authorization_toRpc);
}
/**
 * Converts an {@link ox#Authorization.Authorization} to an {@link ox#Authorization.Tuple}.
 *
 * @example
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorization = Authorization.from({
 *   address: '0x1234567890abcdef1234567890abcdef12345678',
 *   chainId: 1,
 *   nonce: 69n,
 * })
 *
 * const tuple = Authorization.toTuple(authorization) // [!code focus]
 * // @log: [
 * // @log:   address: '0x1234567890abcdef1234567890abcdef12345678',
 * // @log:   chainId: 1,
 * // @log:   nonce: 69n,
 * // @log: ]
 * ```
 *
 * @param authorization - The {@link ox#Authorization.Authorization}.
 * @returns An [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) Authorization tuple.
 */
function Authorization_toTuple(authorization) {
    const { address, chainId, nonce } = authorization;
    const signature = Signature.extract(authorization);
    return [
        chainId ? Hex.fromNumber(chainId) : '0x',
        address,
        nonce ? Hex.fromNumber(nonce) : '0x',
        ...(signature ? Signature.toTuple(signature) : []),
    ];
}
/**
 * Converts an {@link ox#Authorization.List} to an {@link ox#Authorization.TupleList}.
 *
 * @example
 * ```ts twoslash
 * import { Authorization } from 'ox'
 *
 * const authorization_1 = Authorization.from({
 *   address: '0x1234567890abcdef1234567890abcdef12345678',
 *   chainId: 1,
 *   nonce: 69n,
 * })
 * const authorization_2 = Authorization.from({
 *   address: '0x1234567890abcdef1234567890abcdef12345678',
 *   chainId: 3,
 *   nonce: 20n,
 * })
 *
 * const tuple = Authorization.toTupleList([authorization_1, authorization_2]) // [!code focus]
 * // @log: [
 * // @log:   [
 * // @log:     address: '0x1234567890abcdef1234567890abcdef12345678',
 * // @log:     chainId: 1,
 * // @log:     nonce: 69n,
 * // @log:   ],
 * // @log:   [
 * // @log:     address: '0x1234567890abcdef1234567890abcdef12345678',
 * // @log:     chainId: 3,
 * // @log:     nonce: 20n,
 * // @log:   ],
 * // @log: ]
 * ```
 *
 * @param list - An {@link ox#Authorization.List}.
 * @returns An [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) Authorization tuple list.
 */
function toTupleList(list) {
    if (!list || list.length === 0)
        return [];
    const tupleList = [];
    for (const authorization of list)
        tupleList.push(Authorization_toTuple(authorization));
    return tupleList;
}
//# sourceMappingURL=Authorization.js.map
;// ./node_modules/viem/node_modules/ox/_esm/erc8010/SignatureErc8010.js






/**
 * Magic bytes used to identify ERC-8010 wrapped signatures.
 */
const SignatureErc8010_magicBytes = '0x8010801080108010801080108010801080108010801080108010801080108010';
/** Suffix ABI parameters for the ERC-8010 wrapped signature. */
const suffixParameters = AbiParameters_from('(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data');
/**
 * Asserts that the wrapped signature is valid.
 *
 * @example
 * ```ts twoslash
 * import { SignatureErc8010 } from 'ox/erc8010'
 *
 * SignatureErc8010.assert('0xdeadbeef')
 * // @error: InvalidWrappedSignatureError: Value `0xdeadbeef` is an invalid ERC-8010 wrapped signature.
 * ```
 *
 * @param value - The value to assert.
 */
function SignatureErc8010_assert(value) {
    if (typeof value === 'string') {
        if (core_Hex/* slice */.di(value, -32) !== SignatureErc8010_magicBytes)
            throw new SignatureErc8010_InvalidWrappedSignatureError(value);
    }
    else
        Signature_assert(value.authorization);
}
/**
 * Parses an [ERC-8010 wrapped signature](https://github.com/jxom/ERCs/blob/16f7e3891fff2e1e9c25dea0485497739db8a816/ERCS/erc-8010.md) into its constituent parts.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Secp256k1 } from 'ox'
 * import { SignatureErc8010 } from 'ox/erc8010' // [!code focus]
 *
 * const signature = Secp256k1.sign({
 *   payload: '0x...',
 *   privateKey: '0x...',
 * })
 *
 * // Instantiate from serialized format. // [!code focus]
 * const wrapped = SignatureErc8010.from('0x...') // [!code focus]
 * // @log: { authorization: { ... }, data: '0x...', signature: { ... } } // [!code focus]
 *
 * // Instantiate from constituent parts. // [!code focus]
 * const wrapped = SignatureErc8010.from({ // [!code focus]
 *   authorization: { ... }, // [!code focus]
 *   data: '0x...', // [!code focus]
 *   signature, // [!code focus]
 * })
 * // @log: { authorization: { ... }, data: '0x...', signature: { ... } }
 * ```
 *
 * @param value - Value to parse.
 * @returns Parsed value.
 */
function SignatureErc8010_from(value) {
    if (typeof value === 'string')
        return SignatureErc8010_unwrap(value);
    return value;
}
/**
 * Unwraps an [ERC-8010 wrapped signature](https://github.com/jxom/ERCs/blob/16f7e3891fff2e1e9c25dea0485497739db8a816/ERCS/erc-8010.md) into its constituent parts.
 *
 * @example
 * ```ts twoslash
 * import { SignatureErc8010 } from 'ox/erc8010'
 *
 * const { authorization, data, signature } = SignatureErc8010.unwrap('0x...')
 * ```
 *
 * @param wrapped - Wrapped signature to unwrap.
 * @returns Unwrapped signature.
 */
function SignatureErc8010_unwrap(wrapped) {
    SignatureErc8010_assert(wrapped);
    const suffixLength = core_Hex/* toNumber */.Ro(core_Hex/* slice */.di(wrapped, -64, -32));
    const suffix = core_Hex/* slice */.di(wrapped, -suffixLength - 64, -64);
    const signature = core_Hex/* slice */.di(wrapped, 0, -suffixLength - 64);
    const [auth, to, data] = decode(suffixParameters, suffix);
    const authorization = Authorization_from({
        address: auth.delegation,
        chainId: Number(auth.chainId),
        nonce: auth.nonce,
        yParity: auth.yParity,
        r: auth.r,
        s: auth.s,
    });
    return {
        authorization,
        signature,
        ...(data && data !== '0x' ? { data, to } : {}),
    };
}
/**
 * Wraps a signature into [ERC-8010 format](https://github.com/jxom/ERCs/blob/16f7e3891fff2e1e9c25dea0485497739db8a816/ERCS/erc-8010.md).
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Secp256k1, Signature } from 'ox'
 * import { SignatureErc8010 } from 'ox/erc8010' // [!code focus]
 *
 * const signature = Secp256k1.sign({
 *   payload: '0x...',
 *   privateKey: '0x...',
 * })
 *
 * const wrapped = SignatureErc8010.wrap({ // [!code focus]
 *   authorization: { ... }, // [!code focus]
 *   data: '0xdeadbeef', // [!code focus]
 *   signature: Signature.toHex(signature), // [!code focus]
 * }) // [!code focus]
 * ```
 *
 * @param value - Values to wrap.
 * @returns Wrapped signature.
 */
function SignatureErc8010_wrap(value) {
    const { data, signature } = value;
    SignatureErc8010_assert(value);
    const self = Secp256k1.recoverAddress({
        payload: Authorization.getSignPayload(value.authorization),
        signature: Signature.from(value.authorization),
    });
    const suffix = AbiParameters.encode(suffixParameters, [
        {
            ...value.authorization,
            delegation: value.authorization.address,
            chainId: BigInt(value.authorization.chainId),
        },
        value.to ?? self,
        data ?? '0x',
    ]);
    const suffixLength = Hex.fromNumber(Hex.size(suffix), { size: 32 });
    return Hex.concat(signature, suffix, suffixLength, SignatureErc8010_magicBytes);
}
/**
 * Validates a wrapped signature. Returns `true` if the wrapped signature is valid, `false` otherwise.
 *
 * @example
 * ```ts twoslash
 * import { SignatureErc8010 } from 'ox/erc8010'
 *
 * const valid = SignatureErc8010.validate('0xdeadbeef')
 * // @log: false
 * ```
 *
 * @param value - The value to validate.
 * @returns `true` if the value is valid, `false` otherwise.
 */
function SignatureErc8010_validate(value) {
    try {
        SignatureErc8010_assert(value);
        return true;
    }
    catch {
        return false;
    }
}
/** Thrown when the ERC-8010 wrapped signature is invalid. */
class SignatureErc8010_InvalidWrappedSignatureError extends Errors/* BaseError */.C {
    constructor(wrapped) {
        super(`Value \`${wrapped}\` is an invalid ERC-8010 wrapped signature.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SignatureErc8010.InvalidWrappedSignatureError'
        });
    }
}
//# sourceMappingURL=SignatureErc8010.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeDeployData.js
var encodeDeployData = __webpack_require__(925842);
;// ./node_modules/viem/_esm/utils/authorization/verifyAuthorization.js



/**
 * Verify that an Authorization object was signed by the provided address.
 *
 * - Docs {@link https://viem.sh/docs/utilities/verifyAuthorization}
 *
 * @param parameters - {@link VerifyAuthorizationParameters}
 * @returns Whether or not the signature is valid. {@link VerifyAuthorizationReturnType}
 */
async function verifyAuthorization({ address, authorization, signature, }) {
    return (0,isAddressEqual/* isAddressEqual */.h)((0,getAddress/* getAddress */.b)(address), await recoverAuthorizationAddress({
        authorization,
        signature,
    }));
}
//# sourceMappingURL=verifyAuthorization.js.map
// EXTERNAL MODULE: ./node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js + 5 modules
var esm_secp256k1 = __webpack_require__(407490);
;// ./node_modules/viem/_esm/utils/signature/serializeSignature.js



/**
 * @description Converts a signature into hex format.
 *
 * @param signature The signature to convert.
 * @returns The signature in hex format.
 *
 * @example
 * serializeSignature({
 *   r: '0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf',
 *   s: '0x4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8',
 *   yParity: 1
 * })
 * // "0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c"
 */
function serializeSignature({ r, s, to = 'hex', v, yParity, }) {
    const yParity_ = (() => {
        if (yParity === 0 || yParity === 1)
            return yParity;
        if (v && (v === 27n || v === 28n || v >= 35n))
            return v % 2n === 0n ? 1 : 0;
        throw new Error('Invalid `v` or `yParity` value');
    })();
    const signature = `0x${new esm_secp256k1.secp256k1.Signature((0,fromHex/* hexToBigInt */.uU)(r), (0,fromHex/* hexToBigInt */.uU)(s)).toCompactHex()}${yParity_ === 0 ? '1b' : '1c'}`;
    if (to === 'hex')
        return signature;
    return (0,toBytes/* hexToBytes */.aT)(signature);
}
//# sourceMappingURL=serializeSignature.js.map
;// ./node_modules/viem/_esm/actions/public/verifyHash.js




















/**
 * Verifies a message hash onchain using ERC-6492.
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyHashParameters}
 * @returns Whether or not the signature is valid. {@link VerifyHashReturnType}
 */
async function verifyHash(client, parameters) {
    const { address, chain = client.chain, hash, erc6492VerifierAddress: verifierAddress = parameters.universalSignatureVerifierAddress ??
        chain?.contracts?.erc6492Verifier?.address, multicallAddress = parameters.multicallAddress ??
        chain?.contracts?.multicall3?.address, } = parameters;
    if (chain?.verifyHash)
        return await chain.verifyHash(client, parameters);
    const signature = (() => {
        const signature = parameters.signature;
        if ((0,isHex/* isHex */.q)(signature))
            return signature;
        if (typeof signature === 'object' && 'r' in signature && 's' in signature)
            return serializeSignature(signature);
        return (0,toHex/* bytesToHex */.My)(signature);
    })();
    try {
        if (SignatureErc8010_validate(signature))
            return await verifyErc8010(client, {
                ...parameters,
                multicallAddress,
                signature,
            });
        return await verifyErc6492(client, {
            ...parameters,
            verifierAddress,
            signature,
        });
    }
    catch (error) {
        // Fallback attempt to verify the signature via ECDSA recovery.
        try {
            const verified = (0,isAddressEqual/* isAddressEqual */.h)((0,getAddress/* getAddress */.b)(address), await recoverAddress({ hash, signature }));
            if (verified)
                return true;
        }
        catch { }
        if (error instanceof VerificationError) {
            // if the execution fails, the signature was not valid and an internal method inside of the validator reverted
            // this can happen for many reasons, for example if signer can not be recovered from the signature
            // or if the signature has no valid format
            return false;
        }
        throw error;
    }
}
/** @internal */
async function verifyErc8010(client, parameters) {
    const { address, blockNumber, blockTag, hash, multicallAddress } = parameters;
    const { authorization: authorization_ox, data: initData, signature, to, } = SignatureErc8010_unwrap(parameters.signature);
    // Check if already delegated
    const code = await getCode(client, {
        address,
        blockNumber,
        blockTag,
    });
    // If already delegated, perform standard ERC-1271 verification.
    if (code === (0,concat/* concatHex */.aP)(['0xef0100', authorization_ox.address]))
        return await verifyErc1271(client, {
            address,
            blockNumber,
            blockTag,
            hash,
            signature,
        });
    const authorization = {
        address: authorization_ox.address,
        chainId: Number(authorization_ox.chainId),
        nonce: Number(authorization_ox.nonce),
        r: (0,toHex/* numberToHex */.cK)(authorization_ox.r, { size: 32 }),
        s: (0,toHex/* numberToHex */.cK)(authorization_ox.s, { size: 32 }),
        yParity: authorization_ox.yParity,
    };
    const valid = await verifyAuthorization({
        address,
        authorization,
    });
    if (!valid)
        throw new VerificationError();
    // Deployless verification.
    const results = await getAction(client, readContract, 'readContract')({
        ...(multicallAddress
            ? { address: multicallAddress }
            : { code: constants_contracts/* multicall3Bytecode */.Ez }),
        authorizationList: [authorization],
        abi: abis/* multicall3Abi */.v2,
        blockNumber,
        blockTag: 'pending',
        functionName: 'aggregate3',
        args: [
            [
                ...(initData
                    ? [
                        {
                            allowFailure: true,
                            target: to ?? address,
                            callData: initData,
                        },
                    ]
                    : []),
                {
                    allowFailure: true,
                    target: address,
                    callData: (0,encodeFunctionData/* encodeFunctionData */.p)({
                        abi: abis/* erc1271Abi */.UW,
                        functionName: 'isValidSignature',
                        args: [hash, signature],
                    }),
                },
            ],
        ],
    });
    const data = results[results.length - 1]?.returnData;
    if (data?.startsWith('0x1626ba7e'))
        return true;
    throw new VerificationError();
}
/** @internal */
// biome-ignore lint/correctness/noUnusedVariables: _
async function verifyErc6492(client, parameters) {
    const { address, factory, factoryData, hash, signature, verifierAddress, ...rest } = parameters;
    const wrappedSignature = await (async () => {
        // If no `factory` or `factoryData` is provided, it is assumed that the
        // address is not a Smart Account, or the Smart Account is already deployed.
        if (!factory && !factoryData)
            return signature;
        // If the signature is already wrapped, return the signature.
        if (SignatureErc6492_validate(signature))
            return signature;
        // If the Smart Account is not deployed, wrap the signature with a 6492 wrapper
        // to perform counterfactual validation.
        return wrap({
            data: factoryData,
            signature,
            to: factory,
        });
    })();
    const args = verifierAddress
        ? {
            to: verifierAddress,
            data: (0,encodeFunctionData/* encodeFunctionData */.p)({
                abi: abis/* erc6492SignatureValidatorAbi */.E5,
                functionName: 'isValidSig',
                args: [address, hash, wrappedSignature],
            }),
            ...rest,
        }
        : {
            data: (0,encodeDeployData/* encodeDeployData */.m)({
                abi: abis/* erc6492SignatureValidatorAbi */.E5,
                args: [address, hash, wrappedSignature],
                bytecode: constants_contracts/* erc6492SignatureValidatorByteCode */.fT,
            }),
            ...rest,
        };
    const { data } = await getAction(client, call/* call */.T, 'call')(args).catch((error) => {
        if (error instanceof contract/* CallExecutionError */.zX)
            throw new VerificationError();
        throw error;
    });
    if ((0,fromHex/* hexToBool */.Nx)(data ?? '0x0'))
        return true;
    throw new VerificationError();
}
/** @internal */
async function verifyErc1271(client, parameters) {
    const { address, blockNumber, blockTag, hash, signature } = parameters;
    const result = await getAction(client, readContract, 'readContract')({
        address,
        abi: abis/* erc1271Abi */.UW,
        args: [hash, signature],
        blockNumber,
        blockTag,
        functionName: 'isValidSignature',
    }).catch((error) => {
        if (error instanceof contract/* ContractFunctionExecutionError */.bG)
            throw new VerificationError();
        throw error;
    });
    if (result.startsWith('0x1626ba7e'))
        return true;
    throw new VerificationError();
}
class VerificationError extends Error {
}
//# sourceMappingURL=verifyHash.js.map
;// ./node_modules/viem/_esm/constants/strings.js
const presignMessagePrefix = '\x19Ethereum Signed Message:\n';
//# sourceMappingURL=strings.js.map
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
;// ./node_modules/viem/_esm/actions/public/verifyMessage.js



/**
 * Verify that a message was signed by the provided address.
 *
 * Compatible with Smart Contract Accounts & Externally Owned Accounts via [ERC-6492](https://eips.ethereum.org/EIPS/eip-6492).
 *
 * - Docs {@link https://viem.sh/docs/actions/public/verifyMessage}
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyMessageParameters}
 * @returns Whether or not the signature is valid. {@link VerifyMessageReturnType}
 */
async function verifyMessage(client, { address, message, factory, factoryData, signature, ...callRequest }) {
    const hash = hashMessage(message);
    return getAction(client, verifyHash, 'verifyHash')({
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest,
    });
}
//# sourceMappingURL=verifyMessage.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/address.js
var address = __webpack_require__(14306);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stringify.js
var utils_stringify = __webpack_require__(218463);
;// ./node_modules/viem/_esm/errors/typedData.js


class InvalidDomainError extends base/* BaseError */.C {
    constructor({ domain }) {
        super(`Invalid domain "${(0,utils_stringify/* stringify */.A)(domain)}".`, {
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
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/regex.js
var regex = __webpack_require__(158213);
;// ./node_modules/viem/_esm/utils/typedData.js









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
    return stringify({ domain, message, primaryType, types });
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
                    throw new errors_abi/* BytesSizeMismatchError */.BI({
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
    const encoded = hashTypedData_encodeData({
        data: data,
        primaryType,
        types: types,
    });
    return (0,keccak256/* keccak256 */.S)(encoded);
}
function hashTypedData_encodeData({ data, primaryType, types, }) {
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
            (0,keccak256/* keccak256 */.S)(hashTypedData_encodeData({ data: value, primaryType: type, types })),
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
;// ./node_modules/viem/_esm/actions/public/verifyTypedData.js



/**
 * Verify that typed data was signed by the provided address.
 *
 * - Docs {@link https://viem.sh/docs/actions/public/verifyTypedData}
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyTypedDataParameters}
 * @returns Whether or not the signature is valid. {@link VerifyTypedDataReturnType}
 */
async function verifyTypedData(client, parameters) {
    const { address, factory, factoryData, signature, message, primaryType, types, domain, ...callRequest } = parameters;
    const hash = hashTypedData({ message, primaryType, types, domain });
    return getAction(client, verifyHash, 'verifyHash')({
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest,
    });
}
//# sourceMappingURL=verifyTypedData.js.map
;// ./node_modules/viem/_esm/utils/observe.js
/** @internal */
const listenersCache = /*#__PURE__*/ new Map();
/** @internal */
const cleanupCache = /*#__PURE__*/ new Map();
let callbackCount = 0;
/**
 * @description Sets up an observer for a given function. If another function
 * is set up under the same observer id, the function will only be called once
 * for both instances of the observer.
 */
function observe(observerId, callbacks, fn) {
    const callbackId = ++callbackCount;
    const getListeners = () => listenersCache.get(observerId) || [];
    const unsubscribe = () => {
        const listeners = getListeners();
        listenersCache.set(observerId, listeners.filter((cb) => cb.id !== callbackId));
    };
    const unwatch = () => {
        const listeners = getListeners();
        if (!listeners.some((cb) => cb.id === callbackId))
            return;
        const cleanup = cleanupCache.get(observerId);
        if (listeners.length === 1 && cleanup) {
            const p = cleanup();
            if (p instanceof Promise)
                p.catch(() => { });
        }
        unsubscribe();
    };
    const listeners = getListeners();
    listenersCache.set(observerId, [
        ...listeners,
        { id: callbackId, fns: callbacks },
    ]);
    if (listeners && listeners.length > 0)
        return unwatch;
    const emit = {};
    for (const key in callbacks) {
        emit[key] = ((...args) => {
            const listeners = getListeners();
            if (listeners.length === 0)
                return;
            for (const listener of listeners)
                listener.fns[key]?.(...args);
        });
    }
    const cleanup = fn(emit);
    if (typeof cleanup === 'function')
        cleanupCache.set(observerId, cleanup);
    return unwatch;
}
//# sourceMappingURL=observe.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/promise/withResolvers.js
var withResolvers = __webpack_require__(9091);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/promise/withRetry.js
var withRetry = __webpack_require__(339910);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/wait.js
var wait = __webpack_require__(150669);
;// ./node_modules/viem/_esm/utils/poll.js

/**
 * @description Polls a function at a specified interval.
 */
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
    let active = true;
    const unwatch = () => (active = false);
    const watch = async () => {
        let data;
        if (emitOnBegin)
            data = await fn({ unpoll: unwatch });
        const initialWait = (await initialWaitTime?.(data)) ?? interval;
        await (0,wait/* wait */.u)(initialWait);
        const poll = async () => {
            if (!active)
                return;
            await fn({ unpoll: unwatch });
            await (0,wait/* wait */.u)(interval);
            poll();
        };
        poll();
    };
    watch();
    return unwatch;
}
//# sourceMappingURL=poll.js.map
;// ./node_modules/viem/_esm/actions/public/watchBlockNumber.js






/**
 * Watches and returns incoming block numbers.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchBlockNumber
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks_watching-blocks
 * - JSON-RPC Methods:
 *   - When `poll: true`, calls [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchBlockNumberParameters}
 * @returns A function that can be invoked to stop watching for new block numbers. {@link WatchBlockNumberReturnType}
 *
 * @example
 * import { createPublicClient, watchBlockNumber, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchBlockNumber(client, {
 *   onBlockNumber: (blockNumber) => console.log(blockNumber),
 * })
 */
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval, }) {
    const enablePolling = (() => {
        if (typeof poll_ !== 'undefined')
            return poll_;
        if (client.transport.type === 'webSocket' ||
            client.transport.type === 'ipc')
            return false;
        if (client.transport.type === 'fallback' &&
            (client.transport.transports[0].config.type === 'webSocket' ||
                client.transport.transports[0].config.type === 'ipc'))
            return false;
        return true;
    })();
    let prevBlockNumber;
    const pollBlockNumber = () => {
        const observerId = (0,utils_stringify/* stringify */.A)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
            pollingInterval,
        ]);
        return observe(observerId, { onBlockNumber, onError }, (emit) => poll(async () => {
            try {
                const blockNumber = await getAction(client, getBlockNumber, 'getBlockNumber')({ cacheTime: 0 });
                if (prevBlockNumber !== undefined) {
                    // If the current block number is the same as the previous,
                    // we can skip.
                    if (blockNumber === prevBlockNumber)
                        return;
                    // If we have missed out on some previous blocks, and the
                    // `emitMissed` flag is truthy, let's emit those blocks.
                    if (blockNumber - prevBlockNumber > 1 && emitMissed) {
                        for (let i = prevBlockNumber + 1n; i < blockNumber; i++) {
                            emit.onBlockNumber(i, prevBlockNumber);
                            prevBlockNumber = i;
                        }
                    }
                }
                // If the next block number is greater than the previous,
                // it is not in the past, and we can emit the new block number.
                if (prevBlockNumber === undefined ||
                    blockNumber > prevBlockNumber) {
                    emit.onBlockNumber(blockNumber, prevBlockNumber);
                    prevBlockNumber = blockNumber;
                }
            }
            catch (err) {
                emit.onError?.(err);
            }
        }, {
            emitOnBegin,
            interval: pollingInterval,
        }));
    };
    const subscribeBlockNumber = () => {
        const observerId = (0,utils_stringify/* stringify */.A)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
        ]);
        return observe(observerId, { onBlockNumber, onError }, (emit) => {
            let active = true;
            let unsubscribe = () => (active = false);
            (async () => {
                try {
                    const transport = (() => {
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport) => transport.config.type === 'webSocket' ||
                                transport.config.type === 'ipc');
                            if (!transport)
                                return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: ['newHeads'],
                        onData(data) {
                            if (!active)
                                return;
                            const blockNumber = (0,fromHex/* hexToBigInt */.uU)(data.result?.number);
                            emit.onBlockNumber(blockNumber, prevBlockNumber);
                            prevBlockNumber = blockNumber;
                        },
                        onError(error) {
                            emit.onError?.(error);
                        },
                    });
                    unsubscribe = unsubscribe_;
                    if (!active)
                        unsubscribe();
                }
                catch (err) {
                    onError?.(err);
                }
            })();
            return () => unsubscribe();
        });
    };
    return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}
//# sourceMappingURL=watchBlockNumber.js.map
;// ./node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js











/**
 * Waits for the [Transaction](https://viem.sh/docs/glossary/terms#transaction) to be included on a [Block](https://viem.sh/docs/glossary/terms#block) (one confirmation), and then returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms#transaction-receipt).
 *
 * - Docs: https://viem.sh/docs/actions/public/waitForTransactionReceipt
 * - Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_sending-transactions
 * - JSON-RPC Methods:
 *   - Polls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt) on each block until it has been processed.
 *   - If a Transaction has been replaced:
 *     - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) and extracts the transactions
 *     - Checks if one of the Transactions is a replacement
 *     - If so, calls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt).
 *
 * The `waitForTransactionReceipt` action additionally supports Replacement detection (e.g. sped up Transactions).
 *
 * Transactions can be replaced when a user modifies their transaction in their wallet (to speed up or cancel). Transactions are replaced when they are sent from the same nonce.
 *
 * There are 3 types of Transaction Replacement reasons:
 *
 * - `repriced`: The gas price has been modified (e.g. different `maxFeePerGas`)
 * - `cancelled`: The Transaction has been cancelled (e.g. `value === 0n`)
 * - `replaced`: The Transaction has been replaced (e.g. different `value` or `data`)
 *
 * @param client - Client to use
 * @param parameters - {@link WaitForTransactionReceiptParameters}
 * @returns The transaction receipt. {@link WaitForTransactionReceiptReturnType}
 *
 * @example
 * import { createPublicClient, waitForTransactionReceipt, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transactionReceipt = await waitForTransactionReceipt(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function waitForTransactionReceipt(client, parameters) {
    const { checkReplacement = true, confirmations = 1, hash, onReplaced, retryCount = 6, retryDelay = ({ count }) => ~~(1 << count) * 200, // exponential backoff
    timeout = 180_000, } = parameters;
    const observerId = (0,utils_stringify/* stringify */.A)(['waitForTransactionReceipt', client.uid, hash]);
    const pollingInterval = (() => {
        if (parameters.pollingInterval)
            return parameters.pollingInterval;
        if (client.chain?.experimental_preconfirmationTime)
            return client.chain.experimental_preconfirmationTime;
        return client.pollingInterval;
    })();
    let transaction;
    let replacedTransaction;
    let receipt;
    let retrying = false;
    let _unobserve;
    let _unwatch;
    const { promise, resolve, reject } = (0,withResolvers/* withResolvers */.Y)();
    const timer = timeout
        ? setTimeout(() => {
            _unwatch?.();
            _unobserve?.();
            reject(new errors_transaction/* WaitForTransactionReceiptTimeoutError */.WA({ hash }));
        }, timeout)
        : undefined;
    _unobserve = observe(observerId, { onReplaced, resolve, reject }, async (emit) => {
        receipt = await getAction(client, getTransactionReceipt, 'getTransactionReceipt')({ hash }).catch(() => undefined);
        if (receipt && confirmations <= 1) {
            clearTimeout(timer);
            emit.resolve(receipt);
            _unobserve?.();
            return;
        }
        _unwatch = getAction(client, watchBlockNumber, 'watchBlockNumber')({
            emitMissed: true,
            emitOnBegin: true,
            poll: true,
            pollingInterval,
            async onBlockNumber(blockNumber_) {
                const done = (fn) => {
                    clearTimeout(timer);
                    _unwatch?.();
                    fn();
                    _unobserve?.();
                };
                let blockNumber = blockNumber_;
                if (retrying)
                    return;
                try {
                    // If we already have a valid receipt, let's check if we have enough
                    // confirmations. If we do, then we can resolve.
                    if (receipt) {
                        if (confirmations > 1 &&
                            (!receipt.blockNumber ||
                                blockNumber - receipt.blockNumber + 1n < confirmations))
                            return;
                        done(() => emit.resolve(receipt));
                        return;
                    }
                    // Get the transaction to check if it's been replaced.
                    // We need to retry as some RPC Providers may be slow to sync
                    // up mined transactions.
                    if (checkReplacement && !transaction) {
                        retrying = true;
                        await (0,withRetry/* withRetry */.b)(async () => {
                            transaction = (await getAction(client, getTransaction, 'getTransaction')({ hash }));
                            if (transaction.blockNumber)
                                blockNumber = transaction.blockNumber;
                        }, {
                            delay: retryDelay,
                            retryCount,
                        });
                        retrying = false;
                    }
                    // Get the receipt to check if it's been processed.
                    receipt = await getAction(client, getTransactionReceipt, 'getTransactionReceipt')({ hash });
                    // Check if we have enough confirmations. If not, continue polling.
                    if (confirmations > 1 &&
                        (!receipt.blockNumber ||
                            blockNumber - receipt.blockNumber + 1n < confirmations))
                        return;
                    done(() => emit.resolve(receipt));
                }
                catch (err) {
                    // If the receipt is not found, the transaction will be pending.
                    // We need to check if it has potentially been replaced.
                    if (err instanceof errors_transaction/* TransactionNotFoundError */.Kz ||
                        err instanceof errors_transaction/* TransactionReceiptNotFoundError */.Kc) {
                        if (!transaction) {
                            retrying = false;
                            return;
                        }
                        try {
                            replacedTransaction = transaction;
                            // Let's retrieve the transactions from the current block.
                            // We need to retry as some RPC Providers may be slow to sync
                            // up mined blocks.
                            retrying = true;
                            const block = await (0,withRetry/* withRetry */.b)(() => getAction(client, getBlock_getBlock, 'getBlock')({
                                blockNumber,
                                includeTransactions: true,
                            }), {
                                delay: retryDelay,
                                retryCount,
                                shouldRetry: ({ error }) => error instanceof BlockNotFoundError,
                            });
                            retrying = false;
                            const replacementTransaction = block.transactions.find(({ from, nonce }) => from === replacedTransaction.from &&
                                nonce === replacedTransaction.nonce);
                            // If we couldn't find a replacement transaction, continue polling.
                            if (!replacementTransaction)
                                return;
                            // If we found a replacement transaction, return it's receipt.
                            receipt = await getAction(client, getTransactionReceipt, 'getTransactionReceipt')({
                                hash: replacementTransaction.hash,
                            });
                            // Check if we have enough confirmations. If not, continue polling.
                            if (confirmations > 1 &&
                                (!receipt.blockNumber ||
                                    blockNumber - receipt.blockNumber + 1n < confirmations))
                                return;
                            let reason = 'replaced';
                            if (replacementTransaction.to === replacedTransaction.to &&
                                replacementTransaction.value === replacedTransaction.value &&
                                replacementTransaction.input === replacedTransaction.input) {
                                reason = 'repriced';
                            }
                            else if (replacementTransaction.from === replacementTransaction.to &&
                                replacementTransaction.value === 0n) {
                                reason = 'cancelled';
                            }
                            done(() => {
                                emit.onReplaced?.({
                                    reason,
                                    replacedTransaction: replacedTransaction,
                                    transaction: replacementTransaction,
                                    transactionReceipt: receipt,
                                });
                                emit.resolve(receipt);
                            });
                        }
                        catch (err_) {
                            done(() => emit.reject(err_));
                        }
                    }
                    else {
                        done(() => emit.reject(err));
                    }
                }
            },
        });
    });
    return promise;
}
//# sourceMappingURL=waitForTransactionReceipt.js.map
;// ./node_modules/viem/_esm/actions/public/watchBlocks.js





/**
 * Watches and returns information for incoming blocks.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchBlocks
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks_watching-blocks
 * - JSON-RPC Methods:
 *   - When `poll: true`, calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getBlockByNumber) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchBlocksParameters}
 * @returns A function that can be invoked to stop watching for new block numbers. {@link WatchBlocksReturnType}
 *
 * @example
 * import { createPublicClient, watchBlocks, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchBlocks(client, {
 *   onBlock: (block) => console.log(block),
 * })
 */
function watchBlocks(client, { blockTag = client.experimental_blockTag ?? 'latest', emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval, }) {
    const enablePolling = (() => {
        if (typeof poll_ !== 'undefined')
            return poll_;
        if (client.transport.type === 'webSocket' ||
            client.transport.type === 'ipc')
            return false;
        if (client.transport.type === 'fallback' &&
            (client.transport.transports[0].config.type === 'webSocket' ||
                client.transport.transports[0].config.type === 'ipc'))
            return false;
        return true;
    })();
    const includeTransactions = includeTransactions_ ?? false;
    let prevBlock;
    const pollBlocks = () => {
        const observerId = (0,utils_stringify/* stringify */.A)([
            'watchBlocks',
            client.uid,
            blockTag,
            emitMissed,
            emitOnBegin,
            includeTransactions,
            pollingInterval,
        ]);
        return observe(observerId, { onBlock, onError }, (emit) => poll(async () => {
            try {
                const block = await getAction(client, getBlock_getBlock, 'getBlock')({
                    blockTag,
                    includeTransactions,
                });
                if (block.number !== null && prevBlock?.number != null) {
                    // If the current block number is the same as the previous,
                    // we can skip.
                    if (block.number === prevBlock.number)
                        return;
                    // If we have missed out on some previous blocks, and the
                    // `emitMissed` flag is truthy, let's emit those blocks.
                    if (block.number - prevBlock.number > 1 && emitMissed) {
                        for (let i = prevBlock?.number + 1n; i < block.number; i++) {
                            const block = (await getAction(client, getBlock_getBlock, 'getBlock')({
                                blockNumber: i,
                                includeTransactions,
                            }));
                            emit.onBlock(block, prevBlock);
                            prevBlock = block;
                        }
                    }
                }
                if (
                // If no previous block exists, emit.
                prevBlock?.number == null ||
                    // If the block tag is "pending" with no block number, emit.
                    (blockTag === 'pending' && block?.number == null) ||
                    // If the next block number is greater than the previous block number, emit.
                    // We don't want to emit blocks in the past.
                    (block.number !== null && block.number > prevBlock.number)) {
                    emit.onBlock(block, prevBlock);
                    prevBlock = block;
                }
            }
            catch (err) {
                emit.onError?.(err);
            }
        }, {
            emitOnBegin,
            interval: pollingInterval,
        }));
    };
    const subscribeBlocks = () => {
        let active = true;
        let emitFetched = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                if (emitOnBegin) {
                    getAction(client, getBlock_getBlock, 'getBlock')({
                        blockTag,
                        includeTransactions,
                    })
                        .then((block) => {
                        if (!active)
                            return;
                        if (!emitFetched)
                            return;
                        onBlock(block, undefined);
                        emitFetched = false;
                    })
                        .catch(onError);
                }
                const transport = (() => {
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport) => transport.config.type === 'webSocket' ||
                            transport.config.type === 'ipc');
                        if (!transport)
                            return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: ['newHeads'],
                    async onData(data) {
                        if (!active)
                            return;
                        const block = (await getAction(client, getBlock_getBlock, 'getBlock')({
                            blockNumber: data.result?.number,
                            includeTransactions,
                        }).catch(() => { }));
                        if (!active)
                            return;
                        onBlock(block, prevBlock);
                        emitFetched = false;
                        prevBlock = block;
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return () => unsubscribe();
    };
    return enablePolling ? pollBlocks() : subscribeBlocks();
}
//# sourceMappingURL=watchBlocks.js.map
;// ./node_modules/viem/_esm/actions/public/watchContractEvent.js














/**
 * Watches and returns emitted contract event logs.
 *
 * - Docs: https://viem.sh/docs/contract/watchContractEvent
 *
 * This Action will batch up all the event logs found within the [`pollingInterval`](https://viem.sh/docs/contract/watchContractEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/contract/watchContractEvent#onLogs).
 *
 * `watchContractEvent` will attempt to create an [Event Filter](https://viem.sh/docs/contract/createContractEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchContractEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchContractEventParameters}
 * @returns A function that can be invoked to stop watching for new event logs. {@link WatchContractEventReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchContractEvent } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchContractEvent(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['event Transfer(address indexed from, address indexed to, uint256 value)']),
 *   eventName: 'Transfer',
 *   args: { from: '0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b' },
 *   onLogs: (logs) => console.log(logs),
 * })
 */
function watchContractEvent(client, parameters) {
    const { abi, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_, } = parameters;
    const enablePolling = (() => {
        if (typeof poll_ !== 'undefined')
            return poll_;
        if (typeof fromBlock === 'bigint')
            return true;
        if (client.transport.type === 'webSocket' ||
            client.transport.type === 'ipc')
            return false;
        if (client.transport.type === 'fallback' &&
            (client.transport.transports[0].config.type === 'webSocket' ||
                client.transport.transports[0].config.type === 'ipc'))
            return false;
        return true;
    })();
    const pollContractEvent = () => {
        const strict = strict_ ?? false;
        const observerId = (0,utils_stringify/* stringify */.A)([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict,
            fromBlock,
        ]);
        return observe(observerId, { onLogs, onError }, (emit) => {
            let previousBlockNumber;
            if (fromBlock !== undefined)
                previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = poll(async () => {
                if (!initialized) {
                    try {
                        filter = (await getAction(client, createContractEventFilter, 'createContractEventFilter')({
                            abi,
                            address,
                            args: args,
                            eventName: eventName,
                            strict: strict,
                            fromBlock,
                        }));
                    }
                    catch { }
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await getAction(client, getFilterChanges, 'getFilterChanges')({ filter });
                    }
                    else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await getAction(client, getBlockNumber, 'getBlockNumber')({});
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber < blockNumber) {
                            logs = await getAction(client, getContractEvents, 'getContractEvents')({
                                abi,
                                address,
                                args,
                                eventName,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                                strict,
                            });
                        }
                        else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0)
                        return;
                    if (batch)
                        emit.onLogs(logs);
                    else
                        for (const log of logs)
                            emit.onLogs([log]);
                }
                catch (err) {
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitialize the filter when this occurs
                    if (filter && err instanceof rpc/* InvalidInputRpcError */.Di)
                        initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return async () => {
                if (filter)
                    await getAction(client, uninstallFilter, 'uninstallFilter')({ filter });
                unwatch();
            };
        });
    };
    const subscribeContractEvent = () => {
        const strict = strict_ ?? false;
        const observerId = (0,utils_stringify/* stringify */.A)([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict,
        ]);
        let active = true;
        let unsubscribe = () => (active = false);
        return observe(observerId, { onLogs, onError }, (emit) => {
            ;
            (async () => {
                try {
                    const transport = (() => {
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport) => transport.config.type === 'webSocket' ||
                                transport.config.type === 'ipc');
                            if (!transport)
                                return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const topics = eventName
                        ? encodeEventTopics({
                            abi: abi,
                            eventName: eventName,
                            args,
                        })
                        : [];
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: ['logs', { address, topics }],
                        onData(data) {
                            if (!active)
                                return;
                            const log = data.result;
                            try {
                                const { eventName, args } = decodeEventLog({
                                    abi: abi,
                                    data: log.data,
                                    topics: log.topics,
                                    strict: strict_,
                                });
                                const formatted = formatLog(log, {
                                    args,
                                    eventName: eventName,
                                });
                                emit.onLogs([formatted]);
                            }
                            catch (err) {
                                let eventName;
                                let isUnnamed;
                                if (err instanceof errors_abi/* DecodeLogDataMismatch */.fo ||
                                    err instanceof errors_abi/* DecodeLogTopicsMismatch */.l3) {
                                    // If strict mode is on, and log data/topics do not match event definition, skip.
                                    if (strict_)
                                        return;
                                    eventName = err.abiItem.name;
                                    isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
                                }
                                // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                                const formatted = formatLog(log, {
                                    args: isUnnamed ? [] : {},
                                    eventName,
                                });
                                emit.onLogs([formatted]);
                            }
                        },
                        onError(error) {
                            emit.onError?.(error);
                        },
                    });
                    unsubscribe = unsubscribe_;
                    if (!active)
                        unsubscribe();
                }
                catch (err) {
                    onError?.(err);
                }
            })();
            return () => unsubscribe();
        });
    };
    return enablePolling ? pollContractEvent() : subscribeContractEvent();
}
//# sourceMappingURL=watchContractEvent.js.map
;// ./node_modules/viem/_esm/actions/public/watchEvent.js














/**
 * Watches and returns emitted [Event Logs](https://viem.sh/docs/glossary/terms#event-log).
 *
 * - Docs: https://viem.sh/docs/actions/public/watchEvent
 * - JSON-RPC Methods:
 *   - **RPC Provider supports `eth_newFilter`:**
 *     - Calls [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter) to create a filter (called on initialize).
 *     - On a polling interval, it will call [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).
 *   - **RPC Provider does not support `eth_newFilter`:**
 *     - Calls [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) for each block between the polling interval.
 *
 * This Action will batch up all the Event Logs found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/actions/public/watchEvent#onLogs).
 *
 * `watchEvent` will attempt to create an [Event Filter](https://viem.sh/docs/actions/public/createEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchEventParameters}
 * @returns A function that can be invoked to stop watching for new Event Logs. {@link WatchEventReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchEvent } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchEvent(client, {
 *   onLogs: (logs) => console.log(logs),
 * })
 */
function watchEvent(client, { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_, }) {
    const enablePolling = (() => {
        if (typeof poll_ !== 'undefined')
            return poll_;
        if (typeof fromBlock === 'bigint')
            return true;
        if (client.transport.type === 'webSocket' ||
            client.transport.type === 'ipc')
            return false;
        if (client.transport.type === 'fallback' &&
            (client.transport.transports[0].config.type === 'webSocket' ||
                client.transport.transports[0].config.type === 'ipc'))
            return false;
        return true;
    })();
    const strict = strict_ ?? false;
    const pollEvent = () => {
        const observerId = (0,utils_stringify/* stringify */.A)([
            'watchEvent',
            address,
            args,
            batch,
            client.uid,
            event,
            pollingInterval,
            fromBlock,
        ]);
        return observe(observerId, { onLogs, onError }, (emit) => {
            let previousBlockNumber;
            if (fromBlock !== undefined)
                previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = poll(async () => {
                if (!initialized) {
                    try {
                        filter = (await getAction(client, createEventFilter, 'createEventFilter')({
                            address,
                            args,
                            event: event,
                            events,
                            strict,
                            fromBlock,
                        }));
                    }
                    catch { }
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await getAction(client, getFilterChanges, 'getFilterChanges')({ filter });
                    }
                    else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await getAction(client, getBlockNumber, 'getBlockNumber')({});
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await getAction(client, getLogs, 'getLogs')({
                                address,
                                args,
                                event: event,
                                events,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                            });
                        }
                        else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0)
                        return;
                    if (batch)
                        emit.onLogs(logs);
                    else
                        for (const log of logs)
                            emit.onLogs([log]);
                }
                catch (err) {
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitialize the filter when this occurs
                    if (filter && err instanceof rpc/* InvalidInputRpcError */.Di)
                        initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return async () => {
                if (filter)
                    await getAction(client, uninstallFilter, 'uninstallFilter')({ filter });
                unwatch();
            };
        });
    };
    const subscribeEvent = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const transport = (() => {
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport) => transport.config.type === 'webSocket' ||
                            transport.config.type === 'ipc');
                        if (!transport)
                            return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const events_ = events ?? (event ? [event] : undefined);
                let topics = [];
                if (events_) {
                    const encoded = events_.flatMap((event) => encodeEventTopics({
                        abi: [event],
                        eventName: event.name,
                        args,
                    }));
                    // TODO: Clean up type casting
                    topics = [encoded];
                    if (event)
                        topics = topics[0];
                }
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: ['logs', { address, topics }],
                    onData(data) {
                        if (!active)
                            return;
                        const log = data.result;
                        try {
                            const { eventName, args } = decodeEventLog({
                                abi: events_ ?? [],
                                data: log.data,
                                topics: log.topics,
                                strict,
                            });
                            const formatted = formatLog(log, { args, eventName });
                            onLogs([formatted]);
                        }
                        catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof errors_abi/* DecodeLogDataMismatch */.fo ||
                                err instanceof errors_abi/* DecodeLogTopicsMismatch */.l3) {
                                // If strict mode is on, and log data/topics do not match event definition, skip.
                                if (strict_)
                                    return;
                                eventName = err.abiItem.name;
                                isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
                            }
                            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                            const formatted = formatLog(log, {
                                args: isUnnamed ? [] : {},
                                eventName,
                            });
                            onLogs([formatted]);
                        }
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return () => unsubscribe();
    };
    return enablePolling ? pollEvent() : subscribeEvent();
}
//# sourceMappingURL=watchEvent.js.map
;// ./node_modules/viem/_esm/actions/public/watchPendingTransactions.js







/**
 * Watches and returns pending transaction hashes.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchPendingTransactions
 * - JSON-RPC Methods:
 *   - When `poll: true`
 *     - Calls [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter) to initialize the filter.
 *     - Calls [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getFilterChanges) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newPendingTransactions"` event.
 *
 * This Action will batch up all the pending transactions found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchPendingTransactions#pollinginterval-optional), and invoke them via [`onTransactions`](https://viem.sh/docs/actions/public/watchPendingTransactions#ontransactions).
 *
 * @param client - Client to use
 * @param parameters - {@link WatchPendingTransactionsParameters}
 * @returns A function that can be invoked to stop watching for new pending transaction hashes. {@link WatchPendingTransactionsReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchPendingTransactions } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = await watchPendingTransactions(client, {
 *   onTransactions: (hashes) => console.log(hashes),
 * })
 */
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval, }) {
    const enablePolling = typeof poll_ !== 'undefined'
        ? poll_
        : client.transport.type !== 'webSocket' && client.transport.type !== 'ipc';
    const pollPendingTransactions = () => {
        const observerId = (0,utils_stringify/* stringify */.A)([
            'watchPendingTransactions',
            client.uid,
            batch,
            pollingInterval,
        ]);
        return observe(observerId, { onTransactions, onError }, (emit) => {
            let filter;
            const unwatch = poll(async () => {
                try {
                    if (!filter) {
                        try {
                            filter = await getAction(client, createPendingTransactionFilter, 'createPendingTransactionFilter')({});
                            return;
                        }
                        catch (err) {
                            unwatch();
                            throw err;
                        }
                    }
                    const hashes = await getAction(client, getFilterChanges, 'getFilterChanges')({ filter });
                    if (hashes.length === 0)
                        return;
                    if (batch)
                        emit.onTransactions(hashes);
                    else
                        for (const hash of hashes)
                            emit.onTransactions([hash]);
                }
                catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return async () => {
                if (filter)
                    await getAction(client, uninstallFilter, 'uninstallFilter')({ filter });
                unwatch();
            };
        });
    };
    const subscribePendingTransactions = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: ['newPendingTransactions'],
                    onData(data) {
                        if (!active)
                            return;
                        const transaction = data.result;
                        onTransactions([transaction]);
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return () => unsubscribe();
    };
    return enablePolling
        ? pollPendingTransactions()
        : subscribePendingTransactions();
}
//# sourceMappingURL=watchPendingTransactions.js.map
;// ./node_modules/viem/_esm/utils/siwe/parseSiweMessage.js
/**
 * @description Parses EIP-4361 formatted message into message fields object.
 *
 * @see https://eips.ethereum.org/EIPS/eip-4361
 *
 * @returns EIP-4361 fields object
 */
function parseSiweMessage(message) {
    const { scheme, statement, ...prefix } = (message.match(prefixRegex)
        ?.groups ?? {});
    const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = (message.match(suffixRegex)?.groups ?? {});
    const resources = message.split('Resources:')[1]?.split('\n- ').slice(1);
    return {
        ...prefix,
        ...suffix,
        ...(chainId ? { chainId: Number(chainId) } : {}),
        ...(expirationTime ? { expirationTime: new Date(expirationTime) } : {}),
        ...(issuedAt ? { issuedAt: new Date(issuedAt) } : {}),
        ...(notBefore ? { notBefore: new Date(notBefore) } : {}),
        ...(requestId ? { requestId } : {}),
        ...(resources ? { resources } : {}),
        ...(scheme ? { scheme } : {}),
        ...(statement ? { statement } : {}),
    };
}
// https://regexr.com/80gdj
const prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
// https://regexr.com/80gf9
const suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
//# sourceMappingURL=parseSiweMessage.js.map
;// ./node_modules/viem/_esm/utils/siwe/validateSiweMessage.js


/**
 * @description Validates EIP-4361 message.
 *
 * @see https://eips.ethereum.org/EIPS/eip-4361
 */
function validateSiweMessage(parameters) {
    const { address, domain, message, nonce, scheme, time = new Date(), } = parameters;
    if (domain && message.domain !== domain)
        return false;
    if (nonce && message.nonce !== nonce)
        return false;
    if (scheme && message.scheme !== scheme)
        return false;
    if (message.expirationTime && time >= message.expirationTime)
        return false;
    if (message.notBefore && time < message.notBefore)
        return false;
    try {
        if (!message.address)
            return false;
        if (!(0,isAddress/* isAddress */.P)(message.address, { strict: false }))
            return false;
        if (address && !(0,isAddressEqual/* isAddressEqual */.h)(message.address, address))
            return false;
    }
    catch {
        return false;
    }
    return true;
}
//# sourceMappingURL=validateSiweMessage.js.map
;// ./node_modules/viem/_esm/actions/siwe/verifySiweMessage.js




/**
 * Verifies [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) formatted message was signed.
 *
 * Compatible with Smart Contract Accounts & Externally Owned Accounts via [ERC-6492](https://eips.ethereum.org/EIPS/eip-6492).
 *
 * - Docs {@link https://viem.sh/docs/siwe/actions/verifySiweMessage}
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifySiweMessageParameters}
 * @returns Whether or not the signature is valid. {@link VerifySiweMessageReturnType}
 */
async function verifySiweMessage(client, parameters) {
    const { address, domain, message, nonce, scheme, signature, time = new Date(), ...callRequest } = parameters;
    const parsed = parseSiweMessage(message);
    if (!parsed.address)
        return false;
    const isValid = validateSiweMessage({
        address,
        domain,
        message: parsed,
        nonce,
        scheme,
        time,
    });
    if (!isValid)
        return false;
    const hash = hashMessage(message);
    return verifyHash(client, {
        address: parsed.address,
        hash,
        signature,
        ...callRequest,
    });
}
//# sourceMappingURL=verifySiweMessage.js.map
;// ./node_modules/viem/_esm/actions/wallet/sendRawTransaction.js
/**
 * Sends a **signed** transaction to the network
 *
 * - Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction
 * - JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)
 *
 * @param client - Client to use
 * @param parameters - {@link SendRawTransactionParameters}
 * @returns The transaction hash. {@link SendRawTransactionReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { sendRawTransaction } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 *
 * const hash = await sendRawTransaction(client, {
 *   serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
 * })
 */
async function sendRawTransaction(client, { serializedTransaction }) {
    return client.request({
        method: 'eth_sendRawTransaction',
        params: [serializedTransaction],
    }, { retryCount: 0 });
}
//# sourceMappingURL=sendRawTransaction.js.map
;// ./node_modules/viem/_esm/actions/wallet/sendRawTransactionSync.js



/**
 * Sends a **signed** transaction to the network synchronously,
 * and waits for the transaction to be included in a block.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/sendRawTransactionSync
 * - JSON-RPC Method: [`eth_sendRawTransactionSync`](https://eips.ethereum.org/EIPS/eip-7966)
 *
 * @param client - Client to use
 * @param parameters - {@link SendRawTransactionParameters}
 * @returns The transaction receipt. {@link SendRawTransactionSyncReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { sendRawTransactionSync } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 *
 * const receipt = await sendRawTransactionSync(client, {
 *   serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
 * })
 */
async function sendRawTransactionSync(client, { serializedTransaction, throwOnReceiptRevert, timeout, }) {
    const receipt = await client.request({
        method: 'eth_sendRawTransactionSync',
        params: timeout
            ? [serializedTransaction, (0,toHex/* numberToHex */.cK)(timeout)]
            : [serializedTransaction],
    }, { retryCount: 0 });
    const format = client.chain?.formatters?.transactionReceipt?.format ||
        formatTransactionReceipt;
    const formatted = format(receipt);
    if (formatted.status === 'reverted' && throwOnReceiptRevert)
        throw new errors_transaction/* TransactionReceiptRevertedError */.Sq({ receipt: formatted });
    return formatted;
}
//# sourceMappingURL=sendRawTransactionSync.js.map
;// ./node_modules/viem/_esm/clients/decorators/public.js























































function publicActions(client) {
    return {
        call: (args) => (0,call/* call */.T)(client, args),
        createAccessList: (args) => createAccessList(client, args),
        createBlockFilter: () => createBlockFilter(client),
        createContractEventFilter: (args) => createContractEventFilter(client, args),
        createEventFilter: (args) => createEventFilter(client, args),
        createPendingTransactionFilter: () => createPendingTransactionFilter(client),
        estimateContractGas: (args) => estimateContractGas(client, args),
        estimateGas: (args) => estimateGas(client, args),
        getBalance: (args) => getBalance(client, args),
        getBlobBaseFee: () => getBlobBaseFee(client),
        getBlock: (args) => getBlock_getBlock(client, args),
        getBlockNumber: (args) => getBlockNumber(client, args),
        getBlockTransactionCount: (args) => getBlockTransactionCount(client, args),
        getBytecode: (args) => getCode(client, args),
        getChainId: () => getChainId_getChainId(client),
        getCode: (args) => getCode(client, args),
        getContractEvents: (args) => getContractEvents(client, args),
        getEip712Domain: (args) => getEip712Domain(client, args),
        getEnsAddress: (args) => getEnsAddress(client, args),
        getEnsAvatar: (args) => getEnsAvatar(client, args),
        getEnsName: (args) => getEnsName(client, args),
        getEnsResolver: (args) => getEnsResolver(client, args),
        getEnsText: (args) => getEnsText(client, args),
        getFeeHistory: (args) => getFeeHistory(client, args),
        estimateFeesPerGas: (args) => estimateFeesPerGas(client, args),
        getFilterChanges: (args) => getFilterChanges(client, args),
        getFilterLogs: (args) => getFilterLogs(client, args),
        getGasPrice: () => getGasPrice(client),
        getLogs: (args) => getLogs(client, args),
        getProof: (args) => getProof(client, args),
        estimateMaxPriorityFeePerGas: (args) => estimateMaxPriorityFeePerGas(client, args),
        fillTransaction: (args) => fillTransaction(client, args),
        getStorageAt: (args) => getStorageAt(client, args),
        getTransaction: (args) => getTransaction(client, args),
        getTransactionConfirmations: (args) => getTransactionConfirmations(client, args),
        getTransactionCount: (args) => getTransactionCount(client, args),
        getTransactionReceipt: (args) => getTransactionReceipt(client, args),
        multicall: (args) => multicall(client, args),
        prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
        readContract: (args) => readContract(client, args),
        sendRawTransaction: (args) => sendRawTransaction(client, args),
        sendRawTransactionSync: (args) => sendRawTransactionSync(client, args),
        simulate: (args) => simulateBlocks(client, args),
        simulateBlocks: (args) => simulateBlocks(client, args),
        simulateCalls: (args) => simulateCalls(client, args),
        simulateContract: (args) => simulateContract(client, args),
        verifyHash: (args) => verifyHash(client, args),
        verifyMessage: (args) => verifyMessage(client, args),
        verifySiweMessage: (args) => verifySiweMessage(client, args),
        verifyTypedData: (args) => verifyTypedData(client, args),
        uninstallFilter: (args) => uninstallFilter(client, args),
        waitForTransactionReceipt: (args) => waitForTransactionReceipt(client, args),
        watchBlocks: (args) => watchBlocks(client, args),
        watchBlockNumber: (args) => watchBlockNumber(client, args),
        watchContractEvent: (args) => watchContractEvent(client, args),
        watchEvent: (args) => watchEvent(client, args),
        watchPendingTransactions: (args) => watchPendingTransactions(client, args),
    };
}
//# sourceMappingURL=public.js.map
;// ./node_modules/viem/_esm/clients/createPublicClient.js


/**
 * Creates a Public Client with a given [Transport](https://viem.sh/docs/clients/intro) configured for a [Chain](https://viem.sh/docs/clients/chains).
 *
 * - Docs: https://viem.sh/docs/clients/public
 *
 * A Public Client is an interface to "public" [JSON-RPC API](https://ethereum.org/en/developers/docs/apis/json-rpc/) methods such as retrieving block numbers, transactions, reading from smart contracts, etc through [Public Actions](/docs/actions/public/introduction).
 *
 * @param config - {@link PublicClientConfig}
 * @returns A Public Client. {@link PublicClient}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 */
function createPublicClient(parameters) {
    const { key = 'public', name = 'Public Client' } = parameters;
    const client = createClient({
        ...parameters,
        key,
        name,
        type: 'publicClient',
    });
    return client.extend(publicActions);
}
//# sourceMappingURL=createPublicClient.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/clients/transports/http.js + 4 modules
var http = __webpack_require__(12406);
;// ./node_modules/viem/_esm/utils/chain/defineChain.js
function defineChain(chain) {
    const chainInstance = {
        formatters: undefined,
        fees: undefined,
        serializers: undefined,
        ...chain,
    };
    function extend(base) {
        return (fnOrExtended) => {
            const properties = (typeof fnOrExtended === 'function' ? fnOrExtended(base) : fnOrExtended);
            const combined = { ...base, ...properties };
            return Object.assign(combined, { extend: extend(combined) });
        };
    }
    return Object.assign(chainInstance, {
        extend: extend(chainInstance),
    });
}
function extendSchema() {
    return {};
}
//# sourceMappingURL=defineChain.js.map
;// ./node_modules/viem/_esm/index.js
// biome-ignore lint/performance/noBarrelFile: entrypoint module

























































































































































//# sourceMappingURL=index.js.map

/***/ },

/***/ 925842
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ encodeDeployData)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137372);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825419);
/* harmony import */ var _encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(794531);



const docsPath = '/docs/contract/encodeDeployData';
function encodeDeployData(parameters) {
    const { abi, args, bytecode } = parameters;
    if (!args || args.length === 0)
        return bytecode;
    const description = abi.find((x) => 'type' in x && x.type === 'constructor');
    if (!description)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiConstructorNotFoundError */ .YW({ docsPath });
    if (!('inputs' in description))
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiConstructorParamsNotFoundError */ .YF({ docsPath });
    if (!description.inputs || description.inputs.length === 0)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiConstructorParamsNotFoundError */ .YF({ docsPath });
    const data = (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__/* .encodeAbiParameters */ .h)(description.inputs, args);
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_1__/* .concatHex */ .aP)([bytecode, data]);
}
//# sourceMappingURL=encodeDeployData.js.map

/***/ },

/***/ 945945
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ez: () => (/* binding */ multicall3Bytecode),
/* harmony export */   LX: () => (/* binding */ deploylessCallViaBytecodeBytecode),
/* harmony export */   WN: () => (/* binding */ deploylessCallViaFactoryBytecode),
/* harmony export */   fT: () => (/* binding */ erc6492SignatureValidatorByteCode)
/* harmony export */ });
const deploylessCallViaBytecodeBytecode = '0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe';
const deploylessCallViaFactoryBytecode = '0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe';
const erc6492SignatureValidatorByteCode = '0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572';
const multicall3Bytecode = '0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033';
//# sourceMappingURL=contracts.js.map

/***/ },

/***/ 964569
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ getAddress),
/* harmony export */   o: () => (/* binding */ checksumAddress)
/* harmony export */ });
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14306);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(644706);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282040);
/* harmony import */ var _lru_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(676447);
/* harmony import */ var _isAddress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(529873);





const checksumAddressCache = /*#__PURE__*/ new _lru_js__WEBPACK_IMPORTED_MODULE_3__/* .LruMap */ .A(8192);
function checksumAddress(address_, 
/**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */
chainId) {
    if (checksumAddressCache.has(`${address_}.${chainId}`))
        return checksumAddressCache.get(`${address_}.${chainId}`);
    const hexAddress = chainId
        ? `${chainId}${address_.toLowerCase()}`
        : address_.substring(2).toLowerCase();
    const hash = (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_2__/* .keccak256 */ .S)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__/* .stringToBytes */ .Af)(hexAddress), 'bytes');
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split('');
    for (let i = 0; i < 40; i += 2) {
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    const result = `0x${address.join('')}`;
    checksumAddressCache.set(`${address_}.${chainId}`, result);
    return result;
}
function getAddress(address, 
/**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */
chainId) {
    if (!(0,_isAddress_js__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .P)(address, { strict: false }))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidAddressError */ .M({ address });
    return checksumAddress(address, chainId);
}
//# sourceMappingURL=getAddress.js.map

/***/ },

/***/ 969985
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ getChainContractAddress)
/* harmony export */ });
/* harmony import */ var _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(398703);

function getChainContractAddress({ blockNumber, chain, contract: name, }) {
    const contract = chain?.contracts?.[name];
    if (!contract)
        throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__/* .ChainDoesNotSupportContract */ .rj({
            chain,
            contract: { name },
        });
    if (blockNumber &&
        contract.blockCreated &&
        contract.blockCreated > blockNumber)
        throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__/* .ChainDoesNotSupportContract */ .rj({
            blockNumber,
            chain,
            contract: {
                name,
                blockCreated: contract.blockCreated,
            },
        });
    return contract.address;
}
//# sourceMappingURL=getChainContractAddress.js.map

/***/ },

/***/ 993577
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A1: () => (/* binding */ sliceBytes),
/* harmony export */   di: () => (/* binding */ slice)
/* harmony export */ });
/* unused harmony export sliceHex */
/* harmony import */ var _errors_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(836440);
/* harmony import */ var _isHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(646394);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(885182);



/**
 * @description Returns a section of the hex or byte array given a start/end bytes offset.
 *
 * @param value The hex or byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function slice(value, start, end, { strict } = {}) {
    if ((0,_isHex_js__WEBPACK_IMPORTED_MODULE_1__/* .isHex */ .q)(value, { strict: false }))
        return sliceHex(value, start, end, {
            strict,
        });
    return sliceBytes(value, start, end, {
        strict,
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > (0,_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(value) - 1)
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_0__/* .SliceOffsetOutOfBoundsError */ .ii({
            offset: start,
            position: 'start',
            size: (0,_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(value),
        });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        (0,_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(value) !== end - start) {
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_0__/* .SliceOffsetOutOfBoundsError */ .ii({
            offset: end,
            position: 'end',
            size: (0,_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(value),
        });
    }
}
/**
 * @description Returns a section of the byte array given a start/end bytes offset.
 *
 * @param value The byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function sliceBytes(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = value_.slice(start, end);
    if (strict)
        assertEndOffset(value, start, end);
    return value;
}
/**
 * @description Returns a section of the hex value given a start/end bytes offset.
 *
 * @param value The hex value to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function sliceHex(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = `0x${value_
        .replace('0x', '')
        .slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
    if (strict)
        assertEndOffset(value, start, end);
    return value;
}
//# sourceMappingURL=slice.js.map

/***/ }

}]);