---
title: "Upgrade Universal Account"
url: "https://pushchain.github.io/docs/chain/build/advanced/upgrade-universal-account/"
section: "build"
lastUpdated: "2026-07-28T15:25:29+04:00"
description: "Upgrade Universal Account | Advanced | Build | Push Chain Docs"
---

# Upgrade Universal Account

## Overview

Upgrades the UEA (Universal Executor Account) to the latest required implementation version. This is a gasless, signature-based operation and is done **automatically** via the SDK without requiring gas.

You only need to call this when `getAccountStatus()` reports `uea.requiresUpgrade === true`. Sending universal transactions on an outdated UEA will fail.

> **Note**: `upgradeAccount()` is a no-op if the UEA is already at or above the minimum required version.

## Upgrade Universal Account

**_`pushChainClient.upgradeAccount({options?}): Promise<void>`_**

```typescript
await pushChainClient.upgradeAccount({
  progressHook: (progress) => {
    console.log(`${progress.id}: ${progress.message}`);
  },
});
```

These`Arguments`are mandatory

| **Arguments** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| `options.progressHook` | `(event: ProgressEvent) => void` | `undefined` | Callback invoked at each upgrade step showing progress. |

## Progress Hook Type and Response

ProgressHook Type and Response

| Field | Type | Description |
| --- | --- | --- |
| `progress` | `Object` | The progress of the upgrade operation. |
| `progress.id` | `string` | Unique identifier for the progress event. |
| `progress.title` | `string` | Brief title of the progress event. |
| `progress.message` | `string` | Detailed message describing the event. |
| `progress.level` | `INFO` | `SUCCESS` | `ERROR` | Severity level of the event. |
| `progress.response` | `object` | `null` | Additional data object for the event, or `null` if not applicable. |
| `progress.timestamp` | `string` | ISO-8601 timestamp when the event occurred. |

| ID | Title | Message | Level | Response |
| --- | --- | --- | --- | --- |
| `UEA-MIG-01` | Checking UEA | Checking status for migration. | INFO | null |
| `UEA-MIG-02` | Awaiting Migration Signature | Awaiting wallet signature for upgrading account. | INFO | null |
| `UEA-MIG-03` | Broadcasting Migration TX | Broadcasting upgrade transaction to Push Chain... | INFO | null |
| `UEA-MIG-9901` | UEA Migration Successful | UEA migration is successful. UEA is now version `<newVersion>`. | SUCCESS | `{ version }` |
| `UEA-MIG-9902` | UEA Migration Failed | UEA migration failed. Check transaction on explorer. | ERROR | `{ error }` |
| `UEA-MIG-9903` | UEA Migration Skipped | UEA migration skipped. | INFO | null |

## Recommended Usage Pattern

Always check `getAccountStatus()` before calling `upgradeAccount()` to avoid unnecessary prompts:

```typescript
const status = await pushChainClient.getAccountStatus();

if (status.uea.requiresUpgrade) {
  await pushChainClient.upgradeAccount({
    progressHook: (progress) => {
      console.log(`${progress.id}: ${progress.message}`);
    },
  });
}
```

## Live Playground

VIRTUAL NODE IDE

Copy playground link

Copy code

## Next Steps

-   Check UEA state before upgrading with [Get Account Status](/push-chain-website/pr-preview/pr-1230/docs/chain/build/initialize-push-chain-client/#get-account-status)
-   Send your first universal transaction after upgrading with [Send Universal Transaction](/push-chain-website/pr-preview/pr-1230/docs/chain/build/send-universal-transaction/)
