import React, { JSX, useState } from 'react';

import {
  GameData,
} from './types';

import { PlayerData } from './playerData';

type Props = {
  gameData: GameData;
  playerData: PlayerData;
};

function ProsecutionSelector(props: Props): JSX.Element {
  const { gameData, playerData } = props;
  const roleId = playerData.role;

  const [selectedGuess, setSelectedGuess] = useState<number | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedGuess(parseInt(event.target.value, 10));
  }

  function handleSubmit() {
    if (roleId !== null && selectedGuess !== null) {
      const confirmMessage =
        "You can only do this once. Make sure this is your final choice.\n\nAre you sure you want to proceed?";
      const confirmed = window.confirm(confirmMessage);
      if (confirmed) {
        alert(`You have selected ${selectedGuess}.`);
      }
    }
  }

  if (roleId === null) {
    return <div className="prosecution-container">You don't have a role assigned yet.</div>;
  }

  const role = gameData.roles.find(function (r) {
    return r.id === roleId;
  });

  if (!role) {
    return <div className="prosecution-container">Invalid role.</div>;
  }

  let options: JSX.Element[] = [];
  let label = '';

  if (role.id === 1) {
    label = 'Select the Suspect:';
    options = gameData.clues.filter((clue) => clue.clueType == "suspect").map(function (r) {
      return (
        <option key={r.id} value={r.id}>
          {r.name}
        </option>
      );
    });
  } else if (role.id === 2) {
    label = 'Select the Method:';
    options = gameData.causes.map(function (c) {
      return (
        <option key={c.id} value={c.id}>
          {c.cause}
        </option>
      );
    });
  } else if (role.id === 3) {
    label = 'Select the Motive:';
    options = gameData.motives.map(function (m) {
      return (
        <option key={m.id} value={m.id}>
          {m.motive}
        </option>
      );
    });
  } else {
    return <div className="prosecution-container">This role cannot make a prosecution guess.</div>;
  }

  return (
    <div className="prosecution-container" style={containerStyle}>
      <label style={labelStyle}>
        {label}
        <select
          onChange={handleChange}
          value={selectedGuess ?? ''}
          style={selectStyle}
        >
          <option value="" disabled>
            -- Choose an option --
          </option>
          {options}
        </select>
      </label>
      <button
        onClick={handleSubmit}
        disabled={selectedGuess === null}
        style={buttonStyle}
      >
        Confirm Prosecution
      </button>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem',
  maxWidth: '400px',
  margin: '2rem auto',
  backgroundColor: '#f9f9f9',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontFamily: 'sans-serif',
};

const labelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1rem',
  color: '#333',
};

const selectStyle: React.CSSProperties = {
  marginTop: '0.5rem',
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #aaa',
};

const buttonStyle: React.CSSProperties = {
  padding: '0.75rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#b53636',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  opacity: 1,
  textAlign: 'center',
};

export default ProsecutionSelector;