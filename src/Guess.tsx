// components/GuessBox.tsx
import React, { JSX } from 'react';
import { PlayerData } from './playerData';
import { GameData } from './types';

type Props = {
  guess: number;
  playerData: PlayerData;
  gameData: GameData;
};

function Guess({ guess, playerData, gameData }: Props): JSX.Element {
  return (
    <div style={guessContainerStyle}>
      <div style={guessBoxStyle}>
        <h2 style={guessTitleStyle}>Your Guess</h2>
        <p style={guessTextStyle}>{guess ?? 'No guess yet'}</p>
      </div>
    </div>
  );
}

const guessContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem 0',
};

const guessBoxStyle: React.CSSProperties = {
  backgroundColor: '#fff8f6',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  border: '2px solid #e0b4b4',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',
};

const guessTitleStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  color: '#b82f2a',
  fontFamily: 'Arial, sans-serif',
  marginBottom: '1rem',
};

const guessTextStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#4a1d1d',
  fontFamily: 'Arial, sans-serif',
};

export default Guess;