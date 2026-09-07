## Convert Executor to Origin Account (REMOVED in SDK v6)

> This example documented `PushChain.utils.account.convertExecutorToOrigin`, which was **removed in `@pushchain/core@6.0.0`**.

Use [`resolveControllerAccount`](./utility-resolve-controller-account.md) instead.

### Migration

| Old API                                                          | New API                                                                  |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `convertExecutorToOrigin(executorAddress)`                       | `resolveControllerAccount(executorAddress)`                              |
| `convertExecutorToOrigin(executorAddress, { chain, network })`   | `resolveControllerAccount(executorAddress, { chain, skipNetworkCheck })` |

Behavior is equivalent: both reverse-map a UEA (Push-side executor) or CEA (external-chain executor) back to the controlling origin account. The new name better reflects the identity-resolution role.
