import { QRCodeSVG } from 'qrcode.react';
import { useRef, useState } from 'react';

function QRCodeGenerator() {
  const [value, setValue] = useState<string>('user-1234');
  const qrRef = useRef<HTMLDivElement>(null);

  function handleDownload(): void {
    const svg = qrRef.current?.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    const img = new Image();
    const padding = 0;

    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2;
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, padding, padding);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = `qrcode-${value}.png`;
      a.click();
    };

    img.src = url;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Generate QR Code</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
        style={{ padding: '8px', fontSize: '16px', marginBottom: '10px', width: '100%' }}
      />

      {value && (
        <>
          <div ref={qrRef} style={{ padding: '20px' }}>
            <QRCodeSVG value={value} size={256} includeMargin={true} />
          </div>
          <button onClick={handleDownload} style={{ marginTop: '10px' }}>
            Download qrcode-{value}.png
          </button>
        </>
      )}
    </div>
  );
}

export default QRCodeGenerator;