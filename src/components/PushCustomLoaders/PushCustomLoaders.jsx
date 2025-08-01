import React from 'react';

/**
 * Simple spinner loader with text
 */
export const SimpleLoader = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <div
      style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        border: '3px solid rgba(0, 0, 0, 0.1)',
        borderTopColor: '#6B46C1',
        animation: 'spin 1s linear infinite',
      }}
    />
    <style jsx>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
    <span>Loading wallet...</span>
  </div>
);

/**
 * Push branded dual-ring loader with text
 */
export const PushBrandedLoader = () => {
  // Push brand colors
  const primaryColor = '#6B46C1';
  const secondaryColor = '#E20880';
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      gap: '8px',
      padding: '4px'
    }}>
      <div style={{ 
        position: 'relative',
        width: '32px', 
        height: '32px'
      }}>
        {/* Outer ring */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: `3px solid ${primaryColor}`,
          borderTopColor: 'transparent',
          animation: 'spin 1.2s linear infinite',
        }} />
        
        {/* Inner ring */}
        <div style={{
          position: 'absolute',
          top: '6px',
          left: '6px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: `3px solid ${secondaryColor}`,
          borderBottomColor: 'transparent',
          animation: 'spin 0.8s linear infinite reverse',
        }} />
      </div>
      
      <div style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
        marginTop: '4px',
        textAlign: 'center'
      }}>
        Connecting to Push...
      </div>
      
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

/**
 * Push notification bell-inspired animated loader
 */
export const PushNotificationLoader = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      padding: '8px'
    }}>
      <div style={{ 
        position: 'relative',
        width: '40px', 
        height: '40px',
        marginBottom: '8px'
      }}>
        {/* Push notification bell shape */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50% 50% 5px 5px',
            background: '#E20880',
            position: 'relative',
            transform: 'translateY(5px)',
            animation: 'bellShake 2s ease-in-out infinite',
          }}>
            {/* Bell clapper */}
            <div style={{
              position: 'absolute',
              bottom: '5px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#6B46C1',
            }} />
          </div>
          
          {/* Bell top */}
          <div style={{
            position: 'absolute',
            top: '5px',
            width: '10px',
            height: '5px',
            borderRadius: '5px 5px 0 0',
            background: '#E20880',
          }} />
        </div>
        
        {/* Ripple effects */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '2px solid #E20880',
          opacity: '0.7',
          animation: 'ripple 1.5s linear infinite',
        }} />
        
        <div style={{
          position: 'absolute',
          top: '-5px',
          left: '-5px',
          width: 'calc(100% + 10px)',
          height: 'calc(100% + 10px)',
          borderRadius: '50%',
          border: '2px solid #E20880',
          opacity: '0.5',
          animation: 'ripple 1.5s linear 0.5s infinite',
        }} />
      </div>
      
      <div style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
        animation: 'pulse 1.5s ease-in-out infinite',
      }}>
        Connecting wallet...
      </div>
      
      <style jsx>{`
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        @keyframes bellShake {
          0%, 100% { transform: translateY(5px) rotate(0); }
          25% { transform: translateY(5px) rotate(10deg); }
          75% { transform: translateY(5px) rotate(-10deg); }
        }
      `}</style>
    </div>
  );
};

/**
 * Dot pulse loader - minimal and elegant
 */
export const DotPulseLoader = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      padding: '8px'
    }}>
      <div style={{ 
        display: 'flex',
        gap: '6px',
        marginBottom: '8px'
      }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#6B46C1',
              animation: `dotPulse 1.5s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
      
      <div style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
      }}>
        Connecting...
      </div>
      
      <style jsx>{`
        @keyframes dotPulse {
          0%, 100% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

/**
 * Progress bar loader - shows visual progress indication
 */
export const ProgressLoader = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      width: '100%',
      padding: '8px'
    }}>
      <div style={{ 
        width: '100%',
        height: '4px',
        background: 'rgba(0,0,0,0.1)',
        borderRadius: '2px',
        overflow: 'hidden',
        marginBottom: '8px'
      }}>
        <div style={{
          height: '100%',
          width: '30%',
          background: 'linear-gradient(90deg, #6B46C1, #E20880)',
          borderRadius: '2px',
          animation: 'progress 2s ease-in-out infinite',
        }} />
      </div>
      
      <div style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
      }}>
        Connecting wallet...
      </div>
      
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};
