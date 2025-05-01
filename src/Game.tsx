import React from 'react';

type GameProps = {
  children: React.ReactNode;
};

function Game({ children }: GameProps) {
  const BLANK_CARD = "./src/assets/cards/blank.png"; // or import blankCard from './assets/cards/blank.png';

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url(${BLANK_CARD})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        overflow: 'hidden', // ensures overlay fits
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)', // black with 50% opacity
          backdropFilter: 'blur(2px)', // optional blur effect
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <h1
          style={{
            marginBottom: '1rem',
            fontSize: '2.75rem',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            padding: '1rem'
          }}
        >
          Prose<em style={{
            fontSize: '2.75rem',
            fontWeight: 'bold',
            color: 'blue',
          }}>QR</em>ution
        </h1>

        <div style={{ width: '100%', maxWidth: '500px' }}>{children}</div>
      </div>
    </div>
  );
}

export default Game;