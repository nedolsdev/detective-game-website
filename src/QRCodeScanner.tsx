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

    const timeout = setTimeout(() => {
      const html5QrCode = new Html5Qrcode('qr-reader');
      setQrInstance(html5QrCode);

      html5QrCode
        .start(
          { facingMode: 'environment' },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          (decodedText: string) => {
            alert(`Scanned QR Code: ${decodedText}`);
            html5QrCode.stop().then(() => {
              console.log('Camera stopped');
            });
          },
          (error) => {
            console.log('QR code scan error:', error);
          }
        )
        .catch((err) => {
          console.error('QR code scanner error:', err);
        });
    }, 100); // short delay ensures DOM is ready

    return () => {
      clearTimeout(timeout);

        // hack just to type check
        const potentialQrInstance = qrInstance as unknown as Html5Qrcode;

        potentialQrInstance?.stop();
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
      html5QrCode.clear()
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
          style={{ width: '100%', height: '300px' }}
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