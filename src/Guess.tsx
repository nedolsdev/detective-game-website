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
  
    const role = playerData.role;
  
    function getGuessTitle(): string {
        // if role 1 = suspect, role 2 = method, role 3 = motive
        if (role === 1) {
            return 'Chosen Suspect';
        } else if (role === 2) {
            return 'Chosen Method';
        } else if (role === 3) {
            return 'Chosen Motive';
        }
        return 'Unknown Role';
    }

    function getGuessText(guess: number): string {

        // role 1 = suspect, role 2 = method, role 3 = motive

        // role 1 get suspect name from clues
        if (role === 1) {
            const suspect = gameData.clues.find((clue) => clue.id === guess);
            return suspect ? suspect.name : 'Unknown Suspect';
        }

        // role 2 get method name from causes
        if (role === 2) {
            const method = gameData.causes.find((cause) => cause.id === guess);
            return method ? method.cause : 'Unknown Method';
        }

        // role 3 get motive name from motives
        if (role === 3) {
            const motive = gameData.motives.find((motive) => motive.id === guess);
            return motive ? motive.motive : 'Unknown Motive';
        }

        return 'Unknown Guess';
    }
  
  
    return (
    <div style={guessContainerStyle}>
      <div style={guessBoxStyle}>
        <h2 style={guessTitleStyle}>{getGuessTitle()}</h2>
        <p style={guessTextStyle}>{getGuessText(guess)}</p>
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