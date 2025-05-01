import { JSX, useEffect, useRef, useState } from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import RevealPage from './RevealPage';

function AdminPage(): JSX.Element {
  const [revealPage, setRevealPage] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const SPY_MUSIC = "./src/assets/spy_music.mp3";

  useEffect(() => {
    const audio = new Audio(SPY_MUSIC);
    audio.loop = true;
    audio.volume = 0.6; 
    audio.play().catch(err => {
      console.error("Autoplay failed. User interaction may be required.", err);
    });
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  function handleButtonClick(): void {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setRevealPage(true);
  }

  return (
    revealPage ? (
      <RevealPage />
    ) : (
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          background: 'radial-gradient(circle at top, #003366 0%, #001a33 100%)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem',
          boxSizing: 'border-box',
          fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            color: '#dddddd',
            marginBottom: '1rem',
            letterSpacing: '1px',
          }}
        >
          Prose
          <em
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#00ccff',
              textShadow: '0 0 3px #00ccff',
              marginLeft: '0.25rem',
            }}
          >
            QR
          </em>
          ution
        </h1>

        <div
          style={{
            backgroundColor: '#0d1a26',
            border: '1px solid #00ccff',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 0 12px rgba(0, 204, 255, 0.2)',
            textAlign: 'center',
          }}
        >
          <QRCodeGenerator />

          <button
            onClick={handleButtonClick}
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#00ccff',
              color: '#001a33',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 0 10px rgba(0, 204, 255, 0.3)',
              transition: 'background-color 0.3s',
            }}
          >
            Go to Reveal Page
          </button>
        </div>
      </div>
    )
  );
}

export default AdminPage;