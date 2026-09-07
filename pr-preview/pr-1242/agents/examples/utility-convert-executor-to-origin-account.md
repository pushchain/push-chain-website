## Convert Executor Address to Origin Account (REMOVED in SDK v6)

> This example documented `PushChain.utils.account.convertExecutorToOriginAccount`, which was **removed in `@pushchain/core@6.0.0`**.

Use [`resolveControllerAccount`](./utility-resolve-controller-account.md) instead.

### Migration

| Old API                                       | New API                                          |
| --------------------------------------------- | ------------------------------------------------ |
| `convertExecutorToOriginAccount(pushAddress)` | `resolveControllerAccount(pushAddress)`          |

Both calls take a Push-side address and return the origin `UniversalAccount` plus an `exists` flag. The new name unifies UEA-to-origin and CEA-to-origin resolution under a single function.
