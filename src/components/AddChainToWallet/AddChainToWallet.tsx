import BrowserOnly from '@docusaurus/BrowserOnly';
import { Button } from '@site/src/css/SharedStyling';
import React from 'react';

declare global {
  interface Window {
    ethereum?: {
      request: (args: unknown) => Promise<void>;
    };
  }
}

interface NetworkConfig {
  chainId: number;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  iconUrls: string[];
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

interface AddChainToWalletProps {
  config: NetworkConfig;
  title?: string;
}

const AddChainToWallet: React.FC<AddChainToWalletProps> = ({
  title = 'Add to Wallet',
  config,
}) => {
  const addNetwork = async () => {
    try {
      if (typeof window === 'undefined' || !window.ethereum) {
        alert('Please install MetaMask first!');
        return;
      }

      const chainIdHex = `0x${config.chainId.toString(16)}`;

      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainIdHex }],
        });
        alert('Network already exists.');
        return;
      } catch (switchError) {
        // Step 2: If the error code is 4902, the chain doesn't exist
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: chainIdHex,
                  chainName: config.chainName,
                  nativeCurrency: config.nativeCurrency,
                  iconUrls: config.iconUrls,
                  rpcUrls: config.rpcUrls,
                  blockExplorerUrls: config.blockExplorerUrls,
                },
              ],
            });
          } catch (addError) {
            console.error('Error adding network:', addError);
            alert('Failed to add network to MetaMask');
          }
        } else {
          console.error('Error switching network:', switchError);
          alert('Failed to switch network');
        }
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('Something went wrong while adding the network');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '20px 0',
      }}
    >
      <Button
        onClick={addNetwork}
        style={{
          backgroundColor: '#D548EC',
          border: 'none',
          padding: '12px 24px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontFamily: 'DM Sans',
        }}
      >
        {title}
      </Button>
    </div>
  );
};

export default function Wrapper(props: AddChainToWalletProps) {
  return <BrowserOnly>{() => <AddChainToWallet {...props} />}</BrowserOnly>;
}
