import React from 'react';
import { PLAYER_DATA } from './playerData';
import { Clue } from './types';

type CardProps = {
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
  clue: Clue;
};

const Card: React.FC<CardProps> = ({
  backgroundColor = 'lightblue',
  borderRadius = '8px',
  padding = '16px',
  width = '200px',
  height = '100%',
  boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)',
  clue,
}) => {

    // filter clues for the role you have

  let role = PLAYER_DATA.role;

  if (role === null) {
    // err
    console.error('Player role is null');
    role = 1;
  }

  const filteredClue = clue.info.filter((entry) => entry.foundBy.includes(role));
  
  return (
    <div
      style={{
        backgroundColor,
        borderRadius,
        padding,
        width,
        height,
        boxShadow,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 4px 0' }}>{clue.name}</h3>
        <p style={{ margin: '0 0 8px 0', fontStyle: 'italic' }}>{clue.clueType.toUpperCase()}</p>
        {filteredClue.map((entry, index) => (
          <div key={index} style={{ marginBottom: '6px' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;