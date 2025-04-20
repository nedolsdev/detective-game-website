import Quagga, { QuaggaJSResultObject } from '@ericblade/quagga2';
import React, { useEffect, useRef, useState } from 'react';

type BarcodeScannerProps = {
  mode: 'camera' | 'file'; 
};

function BarcodeScanner({ mode }: BarcodeScannerProps) {
  const scannerRef = useRef<HTMLDivElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (mode !== 'camera' || !scannerRef.current) return;

    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        target: scannerRef.current,
        constraints: {
          facingMode: 'environment',
        },
      },
      decoder: {
        readers: ['code_128_reader', 'ean_reader', 'upc_reader'],
      },
    }, (err) => {
      if (err) {
        console.error('Quagga camera init error:', err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected(handleDetected);

    return () => {
      Quagga.stop();
      Quagga.offDetected(handleDetected);
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== 'file' || !imageUrl) return;

    console.log('Decoding image:', imageUrl);

    Quagga.decodeSingle({
      src: imageUrl,
      numOfWorkers: 0,
      inputStream: {
        size: 800,
      },
      decoder: {
        readers: ['code_128_reader', 'ean_reader', 'upc_reader'],
        multiple: false,
      },
    }, (result) => {
      if (result?.codeResult) {
        alert(`Detected from image: ${result.codeResult.code}`);
      } else {
        alert('No barcode detected.');
      }
    });
  }, [imageUrl, mode]);

  function handleDetected(result: QuaggaJSResultObject): void {
    
    if (result?.codeResult?.code) {
      alert(`Scanned: ${result.codeResult.code}`);
      Quagga.stop();
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  }

  return (
    <div>
      <h2>Barcode Scanner ({mode})</h2>
      {mode === 'camera' && (
        <div ref={scannerRef} style={{ width: '100%', height: '300px' }} />
      )}
      {mode === 'file' && (
        <>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded"
              style={{ maxWidth: '100%', marginTop: '10px' }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default BarcodeScanner;