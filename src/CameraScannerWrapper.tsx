import { useState } from "react";
import QRCodeScanner from "./QRCodeScanner";

type CameraScannerWrapperProps = {
  onScanComplete: (result: string) => void;
};

function CameraScannerWrapper({ onScanComplete }: CameraScannerWrapperProps) {
  const [isScanning, setIsScanning] = useState(false);

  const completed_scan = (result: string) => {
    if (onScanComplete) {
      onScanComplete(result);
    }
    setIsScanning(false);
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        Scan a QR Code
      </h2>

      <div
        style={{
          height: '300px',
          border: '2px solid #ccc',
          borderRadius: '8px',
          marginBottom: '1rem',
          overflow: 'hidden',
          backgroundColor: '#f8f9fa',
        }}
      >
        {isScanning ? (
          <div style={{ width: '100%', height: '100%' }}>
            <QRCodeScanner mode="camera" onScanComplete={completed_scan} />
          </div>
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aaa',
            }}
          >
            Camera preview will appear here
          </div>
        )}
      </div>

      {!isScanning ? (
        <button
          onClick={() => setIsScanning(true)}
          style={{
            padding: '0.75rem 1.25rem',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Start Scanning
        </button>
      ) : (
        <button
          onClick={() => setIsScanning(false)}
          style={{
            padding: '0.75rem 1.25rem',
            fontSize: '1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      )}
    </div>
  );
}

export default CameraScannerWrapper;