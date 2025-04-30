import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { QRCodeSVG } from 'qrcode.react';
import { useRef } from 'react';

const names: string[] = [];

const NUMBER_OF_CLUES = 24;
const NUMBER_OF_SUSPECTS = 12;
const NUMBER_OF_ROLE_CARDS = 3;

for (let i=1; i <= NUMBER_OF_CLUES; i++) {
  names.push(`clue-${i}`);
}

for (let i=1; i <= NUMBER_OF_SUSPECTS; i++) {
  names.push(`suspect-${i}`);
}

for (let i=1; i <= NUMBER_OF_ROLE_CARDS; i++) {
  names.push(`role-${i}`)
}

function QRCodeGenerator() {
  const qrRefs = useRef<(HTMLDivElement | null)[]>([]);

  function getQRCodePngData(index: number): Promise<{ name: string; pngDataUrl: string }> {
    return new Promise((resolve) => {
      const name = names[index];
      const svg = qrRefs.current[index]?.querySelector('svg');
      if (!svg) return resolve({ name, pngDataUrl: '' });

      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) return resolve({ name, pngDataUrl: '' });

      const img = new Image();
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        const pngDataUrl = canvas.toDataURL('image/png');
        resolve({ name, pngDataUrl });
      };

      img.src = url;
    });
  }

  async function handleDownloadZip() {
    const zip = new JSZip();

    for (let i = 0; i < names.length; i++) {
      const { name, pngDataUrl } = await getQRCodePngData(i);
      if (pngDataUrl) {
        const base64Data = pngDataUrl.split(',')[1];
        zip.file(`qrcode-${name}.png`, base64Data, { base64: true });
      }
    }

    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'qr-codes.zip');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Generate QR Codes</h2>
      <button onClick={handleDownloadZip} style={{ marginBottom: '20px' }}>
        Download All as ZIP
      </button>

      {names.map((name, index) => (
        <div key={name} style={{ marginBottom: '40px' }}>
          <div
            ref={(el) => (qrRefs.current[index] = el)}
            style={{ display: 'inline-block' }}
          >
            <QRCodeSVG value={name} size={256} marginSize={2} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>{name}</div>
        </div>
      ))}
    </div>
  );
}

export default QRCodeGenerator;