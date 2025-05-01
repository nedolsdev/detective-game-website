import { useEffect, useState } from 'react'
import AdminPage from './AdminPage'
import './App.css'
import CameraScannerWrapper from './CameraScannerWrapper'
import Card from './Card'
import Carousel from './Carousel'
import { GAME_DATA } from './data'
import Game from './Game'
import Guess from './Guess'
import { getClueFromCode, getRoleFromCode } from './helpers'
import ProsecutionSelector from './ProsecutionSelector'
import { loadPlayerData, savePlayerData } from './storage'
import { Clue } from './types'



function App() {

  // player data
  const playerData = loadPlayerData();


  const [clues, setClues] = useState<Clue[]>(playerData.cluesFound)
  const [adminMode, setAdminMode] = useState<boolean>(false)

  // ready to guess
  const [readyToGuess, setReadyToGuess] = useState<boolean>(playerData.readyToGuess)

  // made guess
  const [guess, setGuess] = useState<number | null>(playerData.guess)

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


  function makeGuess(guess: number) {
    if (playerData.role) {
      setGuess(guess)
      playerData.guess = guess
      savePlayerData(playerData)
    }
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

      // update ready to guess
      
      // if we have 4 suspects and at least 12 clues total then we are ready to guess
      if (clues.length >= 12 && clues.filter(clue => clue.clueType === "suspect").length >= 4) {
        setReadyToGuess(true)
        playerData.readyToGuess = true
        savePlayerData(playerData)
      }

    } else {
      alert("Clue not found. Please scan a valid clue QR code.")
    }
  }

  useEffect(() => {
    
    window.setAdminMode = setAdminMode;
  }, []);

  return (

    (adminMode) ? (
      <AdminPage />
    ) : (
      <Game>

        {/* role */}
        {playerData.role && (
          <div className="role">
            <h2
              style={{
                fontSize: '1.5rem',
                color: 'white',
                marginBottom: '20px',
                textAlign: 'center',
                fontFamily: 'Arial',
              }}
            >Your Role: {GAME_DATA.roles.find(role => role.id === playerData.role)?.displayName}</h2>
          </div>
        )}

        {/* guess */}
        {playerData.guess ? (
         <Guess guess={guess} playerData={playerData} gameData={GAME_DATA} />
        ) :(
          <>
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

            {/* check if role */}

            {playerData.role && readyToGuess && (
              <ProsecutionSelector gameData={GAME_DATA} playerData={playerData} onSubmit={makeGuess}/>
            )}
          </>
        )}
      </Game>
    )
  )
}

export default App
