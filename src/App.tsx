import { useEffect, useState } from 'react'
import './App.css'
import CameraScannerWrapper from './CameraScannerWrapper'
import Card from './Card'
import Carousel from './Carousel'
import { GAME_DATA } from './data'
import Game from './Game'
import { getClueFromCode, getRoleFromCode } from './helpers'
import ProsecutionSelector from './ProsecutionSelector'
import { loadPlayerData, savePlayerData } from './storage'
import { Clue } from './types'



function App() {

  // player data
  const playerData = loadPlayerData();

  playerData.role = 1
  savePlayerData(playerData);

  const [clues, setClues] = useState<Clue[]>(playerData.cluesFound)
  const [adminMode, setAdminMode] = useState<boolean>(false)

  // state for scanText
  const [scanText, setScanText] = useState<string>(playerData.role ? "Scan a clue QR code" : "Scan your role QR code")

  function handleScan(result: string) {
  
    // check if we have a role
    if (!playerData.role) {
      
      // check if the result is a role
      const role = getRoleFromCode(result)

      if (role) {
        alert(`Role found: ${role.name}`)
        playerData.role = role.id

        savePlayerData(playerData)
        setScanText("Scan a clue QR code")
      } else {
        alert("Role not found. Please scan a valid role QR code.")
      }

      return;
    }
  
    // check if we have a clue
    addClue(result)
  }


  function addClue(clue_code: string) {
    const clue = getClueFromCode(clue_code)

    if (!clue) {
      alert("Clue not found. Please scan a valid clue QR code.")
      return
    }

    // check if clue already exists
    if (clues.some(existingClue => existingClue.id === clue.id)) {
      alert("Clue already found")
      return
    }

    if (clue) {
      alert(`Clue found: ${clue.name}`)
      setClues(prev => [...prev, clue])

      // update player data
      playerData.cluesFound.push(clue)

      // save player data
      savePlayerData(playerData)
    } else {
      alert("Clue not found. Please scan a valid clue QR code.")
    }
  }

  useEffect(() => {
    
    window.setAdminMode = setAdminMode;
  }, []);

  return (

    (adminMode) ? (
      <div style={{ padding: '20px' }}>
        <h2>Hello Admin</h2>
      </div>
    ) : (
      <Game>

        {/* Prosecution */}
        <ProsecutionSelector gameData={GAME_DATA} playerData={playerData}/>

        <CameraScannerWrapper onScanComplete={handleScan} scanText={
          scanText
        }  />

        <Carousel>
          {clues.map((clue) => (
            <Card
              key={clue.id}
              clue={clue}
              role={playerData.role}
            />
          ))}
        </Carousel>
      </Game>
    )
  )
}

export default App