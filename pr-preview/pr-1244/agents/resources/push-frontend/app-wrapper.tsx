import {
  PushUI,
  PushUniversalAccountButton,
  PushUniversalWalletProvider,
} from '@pushchain/ui-kit';
import type { ReactNode } from 'react';

/**
 * Root app wrapper — place this at the top of your component tree.
 *
 * PushUniversalWalletProvider: enables wallet connection and provides
 *   the Push Chain client context to all child components.
 * PushUniversalAccountButton: pre-built connect / account / disconnect button.
 *   Place it anywhere inside the Provider.
 *
 * All hooks (usePushChainClient, usePushWalletContext, usePushChain) are
 * available anywhere inside this wrapper.
 */
export default function AppWrapper({ children }: { children: ReactNode }) {
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
    login: { email: true, google: true, wallet: { enabled: true } },
  };

  return (
    <PushUniversalWalletProvider config={walletConfig}>
      <header>
        <PushUniversalAccountButton />
      </header>
      <main>{children}</main>
    </PushUniversalWalletProvider>
  );
}
