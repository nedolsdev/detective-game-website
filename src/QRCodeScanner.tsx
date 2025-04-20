import { Html5Qrcode } from 'html5-qrcode';
import React, { useEffect, useRef, useState } from 'react';

type QRCodeScannerProps = {
  mode: 'camera' | 'file';
};

function QRCodeScanner({ mode }: QRCodeScannerProps) {
  const scannerRef = useRef<HTMLDivElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [qrFile, setQrFile] = useState<File | null>(null);
  const [qrInstance, setQrInstance] = useState<Html5Qrcode | null>(null);

  useEffect(() => {
    if (mode !== 'camera' || !scannerRef.current || qrInstance) return;

    const startScanner = () => {
      // Check if the DOM element exists before initializing
      if (!scannerRef.current) {
        console.error('Scanner element not found.');
        return;
      }

      const html5QrCode = new Html5Qrcode(scannerRef.current.id);
      setQrInstance(html5QrCode);

      html5QrCode
        .start(
          { facingMode: 'environment' }, 
          { fps: 10, qrbox: { width: 1000, height: 1000 } },
          (decodedText: string) => {
            alert(`Scanned QR Code: ${decodedText}`);
            html5QrCode.stop().then(() => console.log('Camera stopped'));
          },
          (error) => {
            console.log('QR code scan error:', error);
          }
        )
        .catch((err) => {
          console.error('Failed to start camera:', err);
          alert('Failed to access camera. Please check permissions.');
        });
    };

    const timeout = setTimeout(startScanner, 100);

    return () => {
      clearTimeout(timeout);
      if (qrInstance) {
        qrInstance.stop().then(() => qrInstance.clear());
      }
    };
  }, [mode, qrInstance]);

  useEffect(() => {
    if (mode !== 'file' || !qrFile) return;

    const html5QrCode = new Html5Qrcode('qr-image-decode');

    html5QrCode
      .scanFile(qrFile, true)
      .then((decodedText) => {
        alert(`Detected from image: ${decodedText}`);
      })
      .catch(() => {
        alert('No QR code detected.');
      });

    return () => {
      html5QrCode.clear();
    };
  }, [qrFile, mode]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0];
    if (file) {
      setQrFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  }

  return (
    <div>
      <h2>QR Code Scanner ({mode})</h2>
      {mode === 'camera' && (
        <div
          id="qr-reader"
          ref={scannerRef}
          style={{ width: '100%', height: '500px' }}
        />
      )}
      {mode === 'file' && (
        <>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {imageUrl && (
            <>
              <img
                src={imageUrl}
                alt="Uploaded"
                style={{ maxWidth: '100%', marginTop: '10px' }}
              />
              <div id="qr-image-decode" style={{ display: 'none' }} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default QRCodeScanner;