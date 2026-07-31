"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[51190],{

/***/ 464705
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ decodeFunctionData)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137372);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(993577);
/* harmony import */ var _hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(122599);
/* harmony import */ var _decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(541821);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895167);





function decodeFunctionData(parameters) {
    const { abi, data } = parameters;
    const signature = (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_1__/* .slice */ .di)(data, 0, 4);
    const description = abi.find((x) => x.type === 'function' &&
        signature === (0,_hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_2__/* .toFunctionSelector */ .V)((0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_4__/* .formatAbiItem */ .B)(x)));
    if (!description)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiFunctionSignatureNotFoundError */ .EB(signature, {
            docsPath: '/docs/contract/decodeFunctionData',
        });
    return {
        functionName: description.name,
        args: ('inputs' in description &&
            description.inputs &&
            description.inputs.length > 0
            ? (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeAbiParameters */ .n)(description.inputs, (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_1__/* .slice */ .di)(data, 4))
            : undefined),
    };
}
//# sourceMappingURL=decodeFunctionData.js.map

/***/ },

/***/ 551190
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  offchainLookup: () => (/* binding */ offchainLookup),
  offchainLookupSignature: () => (/* binding */ offchainLookupSignature)
});

// UNUSED EXPORTS: ccipRequest, offchainLookupAbiItem

// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/call.js + 1 modules
var call = __webpack_require__(223125);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stringify.js
var stringify = __webpack_require__(218463);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(345765);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/utils.js
var utils = __webpack_require__(321163);
;// ./node_modules/viem/_esm/errors/ccip.js



class OffchainLookupError extends base/* BaseError */.C {
    constructor({ callbackSelector, cause, data, extraData, sender, urls, }) {
        super(cause.shortMessage ||
            'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...(cause.metaMessages || []),
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url) => `    ${(0,utils/* getUrl */.ID)(url)}`),
                ],
                `  Sender: ${sender}`,
                `  Data: ${data}`,
                `  Callback selector: ${callbackSelector}`,
                `  Extra data: ${extraData}`,
            ].flat(),
            name: 'OffchainLookupError',
        });
    }
}
class OffchainLookupResponseMalformedError extends base/* BaseError */.C {
    constructor({ result, url }) {
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0,utils/* getUrl */.ID)(url)}`,
                `Response: ${(0,stringify/* stringify */.A)(result)}`,
            ],
            name: 'OffchainLookupResponseMalformedError',
        });
    }
}
class OffchainLookupSenderMismatchError extends base/* BaseError */.C {
    constructor({ sender, to }) {
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`,
            ],
            name: 'OffchainLookupSenderMismatchError',
        });
    }
}
//# sourceMappingURL=ccip.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/request.js
var request = __webpack_require__(176595);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeErrorResult.js
var decodeErrorResult = __webpack_require__(815462);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/isAddressEqual.js
var isAddressEqual = __webpack_require__(732589);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/isHex.js
var isHex = __webpack_require__(646394);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js + 2 modules
var localBatchGatewayRequest = __webpack_require__(712925);
;// ./node_modules/viem/_esm/utils/ccip.js











const offchainLookupSignature = '0x556f1830';
const offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address',
        },
        {
            name: 'urls',
            type: 'string[]',
        },
        {
            name: 'callData',
            type: 'bytes',
        },
        {
            name: 'callbackFunction',
            type: 'bytes4',
        },
        {
            name: 'extraData',
            type: 'bytes',
        },
    ],
};
async function offchainLookup(client, { blockNumber, blockTag, data, requestOptions, to, }) {
    const { args } = (0,decodeErrorResult/* decodeErrorResult */.W)({
        data,
        abi: [offchainLookupAbiItem],
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    const { ccipRead } = client;
    const ccipRequest_ = ccipRead && typeof ccipRead?.request === 'function'
        ? ccipRead.request
        : ccipRequest;
    try {
        if (!(0,isAddressEqual/* isAddressEqual */.h)(to, sender))
            throw new OffchainLookupSenderMismatchError({ sender, to });
        const result = urls.includes(localBatchGatewayRequest/* localBatchGatewayUrl */.J)
            ? await (0,localBatchGatewayRequest/* localBatchGatewayRequest */.X)({
                data: callData,
                ccipRequest: (parameters) => ccipRequest_({ ...parameters, requestOptions }),
            })
            : await ccipRequest_({ data: callData, requestOptions, sender, urls });
        const { data: data_ } = await (0,call/* call */.T)(client, {
            blockNumber,
            blockTag,
            data: (0,concat/* concat */.xW)([
                callbackSelector,
                (0,encodeAbiParameters/* encodeAbiParameters */.h)([{ type: 'bytes' }, { type: 'bytes' }], [result, extraData]),
            ]),
            requestOptions,
            to,
        });
        return data_;
    }
    catch (err) {
        if (requestOptions?.signal?.aborted)
            throw (0,utils/* getAbortError */.TY)(requestOptions.signal);
        if ((0,utils/* isAbortError */.zf)(err))
            throw err;
        throw new OffchainLookupError({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls,
        });
    }
}
async function ccipRequest({ data, requestOptions, sender, urls, }) {
    let error = new Error('An unknown error occurred.');
    for (let i = 0; i < urls.length; i++) {
        if (requestOptions?.signal?.aborted)
            throw (0,utils/* getAbortError */.TY)(requestOptions.signal);
        const url = urls[i];
        const method = url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? { data, sender } : undefined;
        const headers = method === 'POST' ? { 'Content-Type': 'application/json' } : {};
        try {
            const response = await fetch(url.replace('{sender}', sender.toLowerCase()).replace('{data}', data), {
                body: JSON.stringify(body),
                headers,
                method,
                ...(requestOptions?.signal ? { signal: requestOptions.signal } : {}),
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            }
            else {
                result = (await response.text());
            }
            if (!response.ok) {
                error = new request/* HttpRequestError */.Ci({
                    body,
                    details: result?.error
                        ? (0,stringify/* stringify */.A)(result.error)
                        : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url,
                });
                continue;
            }
            if (!(0,isHex/* isHex */.q)(result)) {
                error = new OffchainLookupResponseMalformedError({
                    result,
                    url,
                });
                continue;
            }
            return result;
        }
        catch (err) {
            if (requestOptions?.signal?.aborted)
                throw (0,utils/* getAbortError */.TY)(requestOptions.signal);
            if ((0,utils/* isAbortError */.zf)(err))
                throw err;
            error = new request/* HttpRequestError */.Ci({
                body,
                details: err.message,
                url,
            });
        }
    }
    throw error;
}
//# sourceMappingURL=ccip.js.map

/***/ },

/***/ 712925
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
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeFunctionData.js
var decodeFunctionData = __webpack_require__(464705);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/abi.js
var errors_abi = __webpack_require__(137372);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/toFunctionSelector.js
var toFunctionSelector = __webpack_require__(122599);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/formatAbiItem.js
var formatAbiItem = __webpack_require__(895167);
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
    const { args: [queries], } = (0,decodeFunctionData/* decodeFunctionData */.J)({ abi: abis/* batchGatewayAbi */.b2, data });
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

/***/ }

}]);