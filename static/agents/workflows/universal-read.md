# Universal Read

Requires `@pushchain/core@6.0.25`. Source: https://push.org/docs/chain/build/universal-read/

## Choose the right operation

- Ordinary RPC queries read data directly without signing. Keep using the existing read-blockchain-state workflow for those.
- `read` and `executeReads` submit paid transactions. Require a signer, funded Push account and user authorization to spend.
- `prepareRead` and `trackRead` do not broadcast; tracking works with a read-only client.

## Execute

1. Initialize on `PUSH_NETWORK.TESTNET_DONUT`. The default registry is configured only on Donut.
2. Select subject and chain: holder for balances, contract for view/storage, HTTPS URL for Web2.
3. For custom receivers use `callback: { target, gasLimit, abi, functionName, args? }`. No nested `callback.request`. Result callback gas differs from request-entrypoint gas. Authorize `pushChainClient.universal.account` as the contract requester; for an external signer this is its UEA, not necessarily the deployment EOA.
4. Submit with `waitForCompletion: false` and persist the transaction hash and request ID.
5. Wait and check `status === READ.STATUS.FULFILLED`, `raw.status === READ.RESULT_STATUS.SUCCESS`, `callbackDelivered === true` and no `decodeError`.
6. On `READ_TIMEOUT`, resume the same reference. On sequential batch failure recover `transactionHashes` and inspect `pendingTransactionHash` before retrying.

## Constraints

- No registry helper APIs are exported. The SDK computes keys internally; `PreparedRead.queryKey` remains metadata.
- Registry gas defaults to 500,000, user-adjustable to 1,000,000. Custom target requires explicit gas.
- Default wait = remaining Push blocks × 1,340 ms + 10,000 ms, capped at 180,000 ms. Explicit overrides take precedence.
- `blockNumber` and `minConfirmations` are EVM-only. Solana reads finalized state.
- `CHAIN.WEB2` is not a sendTransaction destination. Never include secrets in URL, headers or body.
- Validators require identical extracted bytes; volatile API values may not reach quorum.
- Callback failures can coexist with lifecycle `FULFILLED`. Protocol fee is never refunded; unused callback budget is pushed to `refundTo` if accepted.
- Nested reads during a callback are unsupported. Vote-count progress is unavailable.
