## Convert Origin to Executor Account (REMOVED in SDK v6)

> This example documented `PushChain.utils.account.convertOriginToExecutor`, which was **removed in `@pushchain/core@6.0.0`**.

Use [`deriveExecutorAccount`](./utility-derive-executor-account.md) instead.

### Migration

| Old API                                                       | New API                                                                            |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `convertOriginToExecutor(account, { onlyCompute: true })`     | `deriveExecutorAccount(account, { skipNetworkCheck: true })`                       |
| `convertOriginToExecutor(account, { onlyCompute: false })`    | `deriveExecutorAccount(account)` (default behavior also checks deployment status)  |
| `convertOriginToExecutor(account, { chain: <externalChain> })`| `deriveExecutorAccount(account, { chain: <externalChain> })`                       |

The function signature is otherwise identical. The replacement parameter `skipNetworkCheck` mirrors the inverted semantics of the old `onlyCompute` flag.
