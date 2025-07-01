import React, { useState } from 'react';
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';
import {
  SimpleLoader,
  PushBrandedLoader,
  PushNotificationLoader,
  DotPulseLoader,
  ProgressLoader
} from '../../../components/PushCustomLoaders/PushCustomLoaders';

/**
 * Example component demonstrating how to use custom loaders with PushUniversalAccountButton
 */
const CustomLoaderExample = () => {
  // State to track which loader to display
  const [selectedLoader, setSelectedLoader] = useState('branded');
  
  // Map of available loaders
  const loaders = {
    simple: <SimpleLoader />,
    branded: <PushBrandedLoader />,
    notification: <PushNotificationLoader />,
    dots: <DotPulseLoader />,
    progress: <ProgressLoader />
  };
  
  // Theme colors for each loader style
  const themes = {
    simple: {
      '--pw-core-bg-primary-color': '#6B46C1',
      '--pw-core-text-primary-color': '#FFFFFF',
    },
    branded: {
      '--pw-core-bg-primary-color': '#6B46C1',
      '--pw-core-text-primary-color': '#FFFFFF',
    },
    notification: {
      '--pw-core-bg-primary-color': '#E20880',
      '--pw-core-text-primary-color': '#FFFFFF',
    },
    dots: {
      '--pw-core-bg-primary-color': '#6B46C1',
      '--pw-core-text-primary-color': '#FFFFFF',
    },
    progress: {
      '--pw-core-bg-primary-color': '#6B46C1',
      '--pw-core-text-primary-color': '#FFFFFF',
    }
  };
  
  // Button text for each style
  const buttonText = {
    simple: 'Connect with Simple Loader',
    branded: 'Connect with Push Branded Loader',
    notification: 'Connect with Notification Loader',
    dots: 'Connect with Dot Pulse Loader',
    progress: 'Connect with Progress Loader'
  };
  
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Select a Loading Style</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {Object.keys(loaders).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedLoader(key)}
              style={{
                padding: '8px 12px',
                background: selectedLoader === key ? '#6B46C1' : '#f0f0f0',
                color: selectedLoader === key ? 'white' : 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: selectedLoader === key ? 'bold' : 'normal',
              }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div style={{ maxWidth: '300px' }}>
        <PushUniversalWalletProvider
          config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}
        >
          <PushUniversalAccountButton 
            loadingComponent={loaders[selectedLoader]}
            connectButtonText={buttonText[selectedLoader]}
            themeOverrides={themes[selectedLoader]}
          />
        </PushUniversalWalletProvider>
      </div>
    </div>
  );
};

export default CustomLoaderExample;
