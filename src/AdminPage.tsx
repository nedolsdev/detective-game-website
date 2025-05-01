import { JSX, useState } from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import RevealPage from './RevealPage';


function AdminPage(): JSX.Element {

  const [revealPage, setRevealPage] = useState(false);

  function handleButtonClick(): void {
    alert('Special Button Clicked!');
    setRevealPage(true);
  }

  return (

    (revealPage ? (
      <RevealPage />
    ) :

    (
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

        {/* go to reveal page */}
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={handleButtonClick}
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
            Go to Reveal Page
          </button>
        </div>

      </div>
    ))
  );
}

export default AdminPage;