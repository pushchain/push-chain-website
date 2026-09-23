## Initialize Push Chain Client with Solana Web3.js

## When to Use

Use this when building applications that need to interact with Push Chain from a Solana wallet using Solana Web3.js.

## Code

```typescript
import { PushChain } from '@pushchain/core';
import { Keypair } from '@solana/web3.js';

async function main() {
  // Generate Solana Devnet keypair
  const keypair = Keypair.generate();

  // Convert to Universal Signer
  const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(
    keypair,
    {
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
      library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
    }
  );

  // Initialize Push Chain Client
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  console.log('Origin account:', pushChainClient.universal.origin);
  console.log('Execution account (UEA):', pushChainClient.universal.account);
}

main().catch(console.error);
```

## Key Points

- Use `toUniversalFromKeypair()` for Solana keypairs (not `toUniversal()`)
- Must specify `chain` and `library` in the options object
- The origin chain is `solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1` (Solana Devnet)
- Your UEA on Push Chain is deterministically derived from the Solana public key
- Same wallet can execute on Push Chain without bridging or network switching