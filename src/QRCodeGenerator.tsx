import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';

function QRCodeGenerator() {
  const [text, setText] = useState('hello-world');

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          fontSize: '16px',
          padding: '12px',
          width: '100%',
          marginBottom: '30px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          boxSizing: 'border-box',
        }}
        placeholder="Enter text for QR code"
      />

      <div
        style={{
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <QRCodeSVG value={text} size={256} />
      </div>
    </div>
  );
}

export default QRCodeGenerator;