# Push Chain — Agent Interface

Push Chain is a universal L1 blockchain that enables applications to deploy smart contracts once and execute transactions across all supported chains. Users sign from their native wallet (Ethereum, Solana, etc.) and the SDK handles:

- **Cross-chain routing**: Transactions execute on Push Chain or external chains based on `tx.to` shape
- **UEA resolution**: Universal Executor Accounts are derived deterministically and deployed lazily
- **Fee abstraction**: Users pay gas in their native token; no PC token acquisition required
- **Wallet abstraction**: Any supported wallet becomes a UniversalSigner with one conversion call

## How to Navigate /agents/

| Your Task | Start Here |
|-----------|------------|
| Understand what Push Chain can do | `agents/capabilities.json` |
| Find the right workflow for a user request | `agents/decision-tree.json` or `agents/task-router.md` |
| Get SDK method signatures | `agents/sdk-capabilities.json` |
| Build a RAG retrieval index | `agents/retrieval-map.json` |
| Handle an error or failure | `agents/errors.json` → `agents/recovery-playbook.md` |
| See all available code examples | `agents/examples/index.json` |
| Check supported chains | `agents/supported-chains.json` |

## Quick Decision Guide

| Agent Task | File to Read |
|------------|--------------|
| "Send tokens from Ethereum wallet to Push Chain" | `agents/workflows/send-universal-transaction.md` |
| "Execute a contract on Ethereum from any wallet" | `agents/workflows/send-multichain-transaction.md` |
| "Connect a wallet in React" | `agents/workflows/connect-wallet-ui-kit.md` |
| "Initialize SDK with Solana keypair" | `agents/examples/initialize-client-solana.md` |
| "Track transaction status" | `agents/workflows/track-transaction.md` |

## Key SDK Entry Points

### PushChain.initialize(universalSigner, options)
Returns `PushChainClient`. The primary entry point for all SDK operations.

```typescript
const pushChainClient = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});
```

### pushChainClient.universal.sendTransaction(tx)
Sends a universal transaction. Route determined by `tx.to` shape:
- `to: "0x..."` → Route 1 (Push Chain)
- `to: { address, chain }` → Route 2 (external chain via CEA)
- `to: "0x..."` + `from: { chain }` → Route 3 (CEA origin to Push Chain)

```typescript
const response = await pushChainClient.universal.sendTransaction({
  to: '0xTargetAddress',
  value: BigInt('100000000000000000'),
});
```

### PushChain.utils.signer.toUniversal(signer)
Converts ethers/viem signer to UniversalSigner.

### PushChain.utils.signer.toUniversalFromKeypair(keypair, options)
Converts Solana keypair to UniversalSigner.

## Terminology Reference

| Term | Full Name | Description |
|------|-----------|-------------|
| UOA | Universal Origin Account | User's actual wallet on source chain (Ethereum EOA, Solana pubkey, etc.). The controller that authorizes execution. |
| UEA | Universal Executor Account | Smart contract account on Push Chain, deterministically derived from UOA. Executes transactions on Push Chain. Lazy-deployed on first use. |
| CEA | Chain Executor Account | Executor account on external chains, derived from UEA or Push Chain account. Enables execution on Ethereum, Solana, etc. |
| UniversalAccount | — | Chain-agnostic address format: `{ address: "0x...", chain: "eip155:11155111" }` |
| UniversalSigner | — | UniversalAccount with signing capabilities. Created via `toUniversal()` or `toUniversalFromKeypair()`. |
| PushChainClient | — | SDK client instance returned by `PushChain.initialize()`. Has `.universal`, `.orchestrator`, `.explorer` namespaces. |

## SDK Packages

| Package | Purpose | Install |
|---------|---------|---------|
| `@pushchain/core` | Backend SDK, scripts, bots | `npm install @pushchain/core` |
| `@pushchain/ui-kit` | React wallet UI components | `npm install @pushchain/ui-kit` |

## File Type Legend

- **discovery**: Entry points and navigation aids
- **capability**: What the SDK can do, method signatures, supported chains
- **decision**: Task routing and workflow selection logic
- **error**: Error codes and recovery procedures
- **workflow**: Step-by-step execution guides
- **schema**: JSON schemas for data structures
- **example**: Runnable code snippets
- **governance**: Source freshness and changelog tracking
- **retrieval**: RAG and semantic search mappings
- **mcp**: Model Context Protocol tool definitions