import { PushChain } from '@pushchain/core';
import { usePushChainClient } from '@pushchain/ui-kit';
import { useState } from 'react';

type Status = 'idle' | 'pending' | 'confirmed' | 'error';

/**
 * SendUniversalTx — complete example component covering three patterns:
 *  1. Route 1: Send to Push Chain
 *  2. Route 2: Send to an external chain (via CEA)
 *  3. Cascade: prepareTransaction + executeTransactions (multi-hop)
 *
 * Must be rendered inside <PushUniversalWalletProvider>.
 */
export function SendUniversalTx() {
  const { pushChainClient, isInitialized } = usePushChainClient();
  const [txHash, setTxHash] = useState<string | null>(null); // eslint-disable-line
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  // ── Route 1: Push Chain target ───────────────────────────────────────────
  const sendToPushChain = async () => {
    if (!pushChainClient) return; // always guard — null before wallet connects
    setStatus('pending');
    setError(null);
    try {
      const tx = await pushChainClient.universal.sendTransaction({
        to: '0xRecipientAddress', // replace with actual address
        value: PushChain.utils.helpers.parseUnits('0.01', 18),
      });
      setTxHash(tx.hash);
      await tx.wait();
      setStatus('confirmed');
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : String(err));
      setStatus('error');
    }
  };

  // ── Route 2: External chain target (via CEA) ──────────────────────────────
  const sendToExternalChain = async () => {
    if (!pushChainClient) return;
    setStatus('pending');
    setError(null);
    try {
      const tx = await pushChainClient.universal.sendTransaction({
        to: {
          address: '0xContractOnEthereum', // replace with target contract
          chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
        },
        data: '0x', // replace with abi.encodeFunctionData(...)
        funds: {
          amount: PushChain.utils.helpers.parseUnits('1', 6), // 1 USDT
          token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
        },
      });
      setTxHash(tx.hash);
      await tx.wait();
      setStatus('confirmed');
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : String(err));
      setStatus('error');
    }
  };

  // ── Cascade: prepare + execute (ordered multi-hop) ───────────────────────
  const cascade = async () => {
    if (!pushChainClient) return;
    setStatus('pending');
    setError(null);
    try {
      const prepared = await pushChainClient.universal.prepareTransaction({
        to: {
          address: '0xContractOnEthereum',
          chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
        },
        data: '0x',
      });
      const result = await pushChainClient.universal.executeTransactions([
        prepared,
      ]);
      await result.waitForAll();
      setStatus('confirmed');
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : String(err));
      setStatus('error');
    }
  };

  const disabled = !isInitialized || !pushChainClient || status === 'pending';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <button onClick={sendToPushChain} disabled={disabled}>
        {!pushChainClient
          ? 'Connect wallet first'
          : status === 'pending'
            ? 'Sending…'
            : 'Send 0.01 PC (Push Chain)'}
      </button>
      <button onClick={sendToExternalChain} disabled={disabled}>
        Send to Ethereum Sepolia (Route 2)
      </button>
      <button onClick={cascade} disabled={disabled}>
        Cascade (prepare + execute)
      </button>

      {status === 'pending' && <p>Sending…</p>}
      {txHash && <p>Tx hash: {txHash}</p>}
      {status === 'confirmed' && <p>✓ Confirmed</p>}
      {status === 'error' && <p>Error: {error}</p>}
    </div>
  );
}
