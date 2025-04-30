import { useState } from "react";
import QRCodeScanner from "./QRCodeScanner";

type CameraScannerWrapperProps = {
  onScanComplete: (result: string) => void;
  scanText?: string;
};

function CameraScannerWrapper({ onScanComplete, scanText }: CameraScannerWrapperProps) {
  const [isScanning, setIsScanning] = useState(false);

  const completed_scan = (result: string) => {
    if (onScanComplete) {
      onScanComplete(result);
    }
    setIsScanning(false);
  };

  const handleCancel = () => {
    setIsScanning(false);
    alert("Due to a bug with the QR code scanner, you need to refresh the page or new scans will not work. Sorry about this.");
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
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
          {scanText || 'Start Scanning'}
        </button>
      ) : (
        <button
          onClick={handleCancel}
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

      {isScanning && (
        <div
          style={{
            height: '300px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            marginTop: '2rem',
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
      )}

     
    </div>
  );
}

export default CameraScannerWrapper;