---
title: "Author Agent Permissions"
url: "https://pushchain.github.io/docs/chain/build/agentic-rules/"
section: "build"
lastUpdated: "2026-11-01T17:05:31+05:30"
description: "Author Agent Permissions | Build | Push Chain Docs"
---

# Author Agent Permissions

SDK version

These examples use `@pushchain/core@6.0.27-alpha.9` with AGW v6 on Push Donut. They do not execute automatically.

## Pins and zero defaults

An equality pin fixes an argument; a maximum pin bounds it. For EVM signatures, `arg` is a zero-based static argument position. With a raw four-byte selector, it is a 32-byte ABI head-word position. Reads return a raw selector and these word positions. For full signatures, a path such as `arg: [0, 3]` selects a field within a static tuple or fixed array. Dynamic layouts fail explicitly. Reads retain exact word positions rather than guessing missing ABI metadata.

`PushChain.CONSTANTS.AGENTIC.WALLET` resolves to the AGW on Push, its CEA on an EVM destination, or its CEA/selected token ATA on Solana. Deployment addresses and encoding helpers are internal.

For directly authored rules, omitted `maxValue`, `assets[].maxTotal`, and `maxGasPerCall` default to **zero**. Presets supply explicit policy values as described below. Asset totals meter tokens sent from Push; they do not meter trading or lending using capital already in the destination CEA. Specify positive caps for sends that need value, tokens or destination gas. Native value is limited per call; there is no public native lifetime-total cap.

## EVM destinations

```ts
import { PushChain, type Rule } from '@pushchain/core';
import { parseEther, type Address } from 'viem';
const SEPOLIA = PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA;
const ETH = PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH;
function evmRule(agent: Address, target: Address): Rule {
  return {
    agent,
    chainNamespace: SEPOLIA,
    validUntil: Math.floor(Date.now() / 1000) + 3600,
    assets: [{ token: ETH, maxPerCall: 1_000n, maxTotal: 10_000n }],
    maxGasPerCall: parseEther('20'),
    allowedCalls: [{
      target,
      selector: 'deposit(address,uint256)',
      pins: [{ arg: 0, expected: PushChain.CONSTANTS.AGENTIC.WALLET }],
    }],
  };
}
```

The deployed v6 policy supports up to eight EQ/MAX pins per EVM destination call and 32 across the rule. Multiple entries for the same target/function are alternatives; every constraint in one entry must pass. The SDK rejects a bare alternative beside a pinned one because it would bypass the pins.

When the caller omits destination `gasLimit`, a fresh EVM CEA gets a 2,000,000 gas default to cover first-use deployment. An existing CEA uses the normal quote default. An explicit caller value is preserved. The rule's gas/value caps still apply.

## Solana destinations

Rules use fixed-width signatures and numeric positions, without an IDL:

```ts
function solanaRule(agent: Address, program: string): Rule {
  return {
    agent,
    chainNamespace: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
    validUntil: Math.floor(Date.now() / 1000) + 3600,
    maxGasPerCall: parseEther('20'),
    allowedCalls: [{
      target: program,
      selector: 'receive_sol(u64)',
      pins: [
        { account: 2, expected: PushChain.CONSTANTS.AGENTIC.WALLET },
        { arg: 0, max: 1_000n },
      ],
    }],
  };
}
```

Use the program's actual account positions. `{ account, expected: WALLET, token: mint }` pins the wallet's ATA, using the verified mint/token-program context. Fixed integer, bool, pubkey and fixed-array layouts are supported; dynamic or undefined layouts fail before signing. Raw eight-byte discriminators support account pins; argument pins also need argument types. A nonzero per-call EVM `maxValue` has no Solana encoding.

Solana reads return `format: 'decoded'` with exact stored discriminators, offsets and constraints. This raw form is accepted by `rules.update`, preserving restrictions without inventing an IDL. Reusing it for another wallet/gateway is rejected. A decoded rule with a data pin counted from the end of the instruction data (`fromEnd: true`) is refused on create/add/update (`INVALID_RULE`, `details.reason = 'FROM_END_PIN_UNSUPPORTED'`): the deployed SvmRulebook does not tie the instruction-data length to the rule, so appended bytes could shift such a pin. Existing rules with these pins still read normally. Send-data encoding still uses the existing `utils.helpers.encodeTxData` IDL helper; rule authoring and transaction encoding are separate operations.

## Rule parameters

| Field | Type | Default / meaning |
| --- | --- | --- |
| `agent` | Push Address | Required, different from owner. |
| `validUntil` | number | Required Unix seconds. |
| `chainNamespace` | CAIP-2 | Omitted for Push; explicit for destination. |
| `allowedCalls` | RuleCall array | Targets, selectors and pins defining authority. |
| `allowedCalls[].maxValue` | bigint | Zero native-value allowance when omitted; per call. |
| `assets` | RuleAsset array | No outbound assets when omitted or empty. |
| `assets[].maxPerCall` | bigint | Required raw-unit outbound cap. |
| `assets[].maxTotal` | bigint | Zero when omitted; cumulative Push outbound cap. |
| `maxGasPerCall` | bigint | Zero when omitted; PC wei ceiling per outbound, not gas units. |

Gas limits passed to a transaction and PC policy ceilings are different. A fresh EVM CEA can require more deployment gas; a caller-supplied limit is retained and must satisfy SDK minimums. There is no cumulative PC gas cap: monitor the wallet balance and revoke grants when necessary.
