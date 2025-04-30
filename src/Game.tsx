import React from 'react';

type GameProps = {
  title?: string;
  children: React.ReactNode;
};

function Game({ title, children }: GameProps) {
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
      {title && (
        <h1
          style={{
            marginBottom: '1rem',
            fontSize: '1.75rem',
            textAlign: 'center',
          }}
        >
          {title}
        </h1>
      )}
      <div style={{ width: '100%', maxWidth: '500px' }}>{children}</div>
    </div>
  );
}

export default Game;