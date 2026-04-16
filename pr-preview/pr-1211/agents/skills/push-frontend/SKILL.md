---
id: push-frontend
intent: Enable universal transactions in a React frontend app
package: '@pushchain/ui-kit'
entry: 'usePushChainClient'
resources: 'https://push.org/agents/resources/push-frontend/index.json'
references:
  - references/ui-components.md
---

# Skill: Universal Transactions — Frontend (React)

**Intent**: Enable users to connect their wallet and execute universal transactions from a React app.
**Package**: `@pushchain/ui-kit` — bundles `@pushchain/core`, no separate install needed.
**Quickstart**: `npx create-universal-dapp` — bootstraps a React app with UI Kit pre-integrated.

## Install

```bash
npm install @pushchain/ui-kit
# or
npx create-universal-dapp
```

## Setup — Wrap Your App

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';

const walletConfig = { network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET };

export default function App() {
  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <PushUniversalAccountButton /> {/* pre-built connect/disconnect button */}
      <YourApp />
    </PushUniversalWalletProvider>
  );
}
```

Provider customization (theme, network, wallet options): https://push.org/agents/workflows/use-universal-wallet-provider.md

## Send a Universal Transaction

```tsx
import { usePushChainClient } from '@pushchain/ui-kit';
import { PushChain } from '@pushchain/core';

function MyComponent() {
  const { pushChainClient } = usePushChainClient(); // null before wallet connects

  const send = async () => {
    if (!pushChainClient) return; // guard: null before wallet connects

    const tx = await pushChainClient.universal.sendTransaction({
      to: '0xRecipientAddress',
      value: PushChain.utils.helpers.parseUnits('0.01', 18),
    });
    await tx.wait();
  };

  return <button onClick={send}>Send</button>;
}
```

## Send to an External Chain (Route 2 — via CEA)

```tsx
const tx = await pushChainClient.universal.sendTransaction({
  to: {
    address: '0xContractOnEthereum',
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  },
  data: encodedCalldata,
  funds: {
    amount: PushChain.utils.helpers.parseUnits('1', 6), // 1 USDT
    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
  },
});
```

## Prepare + Execute (Cascade Pattern)

Use when you need ordered multi-hop execution across chains in one user signature.

```tsx
const prepared = await pushChainClient.universal.prepareTransaction({
  to: {
    address: '0xContract',
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  },
  data: '0x',
});
const result = await pushChainClient.universal.executeTransactions([prepared]);
await result.waitForAll();
```

## Sign a Message

```tsx
const signature =
  await pushChainClient.universal.signMessage('Hello Push Chain');
```

## Hooks Reference

| Hook                     | Returns                                        | Purpose                                     |
| ------------------------ | ---------------------------------------------- | ------------------------------------------- |
| `usePushChainClient()`   | `{ pushChainClient: PushChainClient \| null }` | Full client for tx execution — primary hook |
| `usePushWalletContext()` | wallet state + actions                         | Connection status, address, disconnect      |
| `usePushChain()`         | combined state + actions                       | Push Chain state and actions                |

## Notes

- `usePushChainClient()` returns `{ pushChainClient }` — destructure and guard for `null` before calling tx methods.
- Reading blockchain state (no transactions) can use ethers.js or viem with the RPC URL directly — the Push SDK is only required for execution and signing.
- RPC URL: `https://evm.donut.rpc.push.org/`

## Downloadable Resources

Copy these files into your project — self-contained and ready to run:

| File                                                                                             | Purpose                                                     |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`package.json`](https://push.org/agents/resources/push-frontend/package.json)                   | Dependencies: @pushchain/ui-kit, React 18, Vite, TypeScript |
| [`app-wrapper.tsx`](https://push.org/agents/resources/push-frontend/app-wrapper.tsx)             | Provider + AccountButton root setup                         |
| [`send-universal-tx.tsx`](https://push.org/agents/resources/push-frontend/send-universal-tx.tsx) | Complete component: Route 1, Route 2, cascade pattern       |

> [Resource index](https://push.org/agents/resources/push-frontend/index.json) — machine-readable file list

## Extended Reference

- [Full wallet connection workflow](https://push.org/agents/workflows/connect-wallet-ui-kit.md)
- [Provider customization](https://push.org/agents/workflows/use-universal-wallet-provider.md)
- [Send universal transaction (all routes, advanced args)](https://push.org/agents/workflows/send-universal-transaction.md)
- [Send multichain transaction](https://push.org/agents/workflows/send-multichain-transaction.md)
- [Track transaction lifecycle](https://push.org/agents/workflows/track-transaction.md)
- [Sign universal message](https://push.org/agents/workflows/sign-universal-message.md)
- [Wallet provider React example](https://push.org/agents/examples/wallet-provider-react.md)
- [Execute transaction examples](https://push.org/agents/examples/execute-transactions.md)
