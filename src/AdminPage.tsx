import React, { JSX } from 'react';
import QRCodeGenerator from './QRCodeGenerator';

function AdminPage(): JSX.Element {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0056b3',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box',
      }}
    >
      
        <h1
          style={{
            fontSize: '2.75rem',
            textAlign: 'center',
            color: '#ccc',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Prose<em style={
            { fontSize: '2.75rem', fontWeight: 'bold', color: 'black' }
          }>QR</em>ution
        </h1>

      <div style={{ width: '100%', maxWidth: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

          <QRCodeGenerator />

      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  padding: '2rem',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
};

const headingStyle: React.CSSProperties = {
  fontSize: '2rem',
  color: '#2a2a2a',
  fontFamily: 'Arial, sans-serif',
};

export default AdminPage;