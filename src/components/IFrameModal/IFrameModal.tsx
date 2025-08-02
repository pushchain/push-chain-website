import React, { useEffect, useRef, useState } from 'react';

interface IFrameModalProps {
  url: string;
  buttonTitle?: string;
  maxHeight?: string;
}

export default function IFrameModal({
  url,
  buttonTitle = 'Load Interactive Demo',
  maxHeight = '600px',
}: IFrameModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Use proxy for push explorer URLs to bypass CSP
  const getProxiedUrl = (originalUrl: string) => {
    if (
      originalUrl.includes('push.network') ||
      originalUrl.includes('donut.push.network')
    ) {
      // Extract the base URL from the original URL to construct the proxy URL
      const urlObj = new URL(originalUrl);
      const baseUrl = `${urlObj.protocol}//${urlObj.host}`;

      // Use the push explorer's proxy endpoint if it's publicly accessible
      return `${baseUrl}/node-api/iframe-proxy?url=${encodeURIComponent(originalUrl)}`;
    }
    return originalUrl;
  };

  const proxiedUrl = getProxiedUrl(url);

  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    if (iframeRef.current) {
      iframeRef.current.src = proxiedUrl;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: isIframeVisible ? '80vh' : 'auto',
        maxHeight,
        borderRadius: '12px',
        overflow: 'hidden',
        margin: '20px 0',
      }}
    >
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #D548EC;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      `}</style>

      {/* URL Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px',
          backgroundColor: 'var(--ifm-playground-header-bg)',
        }}
      >
        <div
          style={{
            flex: 1,
            padding: '8px 12px',
            backgroundColor: 'var(--ifm-navbar-search-bg)',
            borderRadius: '12px',
            color: 'var(--ifm-color-title-text-color)',
            fontSize: '0.875rem',
            fontFamily: 'Fira Code',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {url}
        </div>

        <button
          onClick={handleRefresh}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            padding: '6px',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: 'var(--ifm-playground-button-border)',
            backgroundColor: 'var(--ifm-table-body-bg)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14 8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c1.8 0 3.4.8 4.5 2h-2.5v1h4V1h-1v2.1C11.9 1.8 10 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7h-1z'
              fill='var(--ifm-iframe-icon-color)'
              opacity='1'
            />
          </svg>
        </button>
      </div>

      {/* Content Area */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          backgroundColor: 'var(--ifm-playground-header-bg)',
          borderRadius: '0 0 12px 12px',
        }}
      >
        {!isIframeVisible ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px',
            }}
          >
            <button
              onClick={() => setIsIframeVisible(true)}
              style={{
                padding: '12px 24px',
                fontSize: '0.875rem',
                fontWeight: '600',
                backgroundColor: '#D548EC',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
                opacity: 0.9,
                fontFamily: 'DM Sans',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              {buttonTitle}
            </button>
          </div>
        ) : (
          <>
            {/* Loading Spinner */}
            {isLoading && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                }}
              >
                <div className='loading-spinner' />
              </div>
            )}

            <iframe
              ref={iframeRef}
              src={proxiedUrl}
              title='IFrame Content'
              onLoad={handleIframeLoad}
              sandbox='allow-scripts allow-same-origin allow-forms allow-popups'
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
