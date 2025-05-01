import React from 'react';

type GameProps = {
  children: React.ReactNode;
};

function Game({ children }: GameProps) {
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
            marginBottom: '1rem',
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

      <div style={{ width: '100%', maxWidth: '500px' }}>{children}</div>
    </div>
  );
}

export default Game;