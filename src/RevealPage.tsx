import { JSX, useEffect, useRef, useState } from 'react';

function RevealPage(): JSX.Element {
  const [showReveal, setShowReveal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('./src/assets/drum_roll.mp3');
    audioRef.current = audio;
  
    audio.play().catch((err) => console.error("Audio play failed:", err));
  
    const timeout = setTimeout(() => {
      setShowReveal(true);
    }, 2500);
  
    return () => {
      audio.pause();
      clearTimeout(timeout);
    };
  }, []);

  const crime = {
    suspect: 'Maria Hargraves',
    method: 'Unlabelled Bottle',
    motive: 'Crime of Passion',
  };

  const SUSPECT_URL = "./src/assets/cards/suspect.png";
  const METHOD_URL = "./src/assets/cards/method.png";

  return (
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
        position: 'relative',
      }}
    >
      {!showReveal && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#001a33',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            fontSize: '8rem',
            color: '#00ccff',
            textShadow: '0 0 10px #00ccff',
          }}
        >
          🥁
        </div>
      )}

      {showReveal && (
        <>
          <h1
            style={{
              fontSize: '3rem',
              textAlign: 'center',
              color: '#dddddd',
              marginBottom: '0.5rem',
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

          <h2
            style={{
              fontSize: '2rem',
              color: '#bbbbbb',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            The Crime Was...
          </h2>

          <div
            style={{
              backgroundColor: '#0d1a26',
              border: '1px solid #00ccff',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 0 12px rgba(0, 204, 255, 0.2)',
              textAlign: 'left',
            }}
          >
            <p style={revealLineStyle}>
              <span style={labelStyle}>Suspect:</span> {crime.suspect}
            </p>
            <p style={revealLineStyle}>
              <span style={labelStyle}>Method:</span> {crime.method}
            </p>
            <p style={revealLineStyle}>
              <span style={labelStyle}>Motive:</span> {crime.motive}
            </p>

            <img
              src={SUSPECT_URL}
              alt="Suspect"
              style={{
                width: '100%',
                maxWidth: '200px',
                borderRadius: '8px',
                marginTop: '1rem',
              }}
            />
            <img
              src={METHOD_URL}
              alt="Method"
              style={{
                width: '100%',
                maxWidth: '200px',
                borderRadius: '8px',
                marginTop: '1rem',
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  color: '#00ccff',
  fontWeight: 600,
  display: 'inline-block',
  width: '100px',
};

const revealLineStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  margin: '1rem 0',
  color: '#ffffff',
  lineHeight: 1.6,
};

export default RevealPage;