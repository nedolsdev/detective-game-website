import { useState } from 'react'
import './App.css'
import CameraScannerWrapper from './CameraScannerWrapper'
import Card from './Card'
import Carousel from './Carousel'
import Game from './Game'
import getClueFromCode from './helpers'
import { loadPlayerData, savePlayerData } from './storage'
import { Clue } from './types'

function App() {

  // player data
  const playerData = loadPlayerData();

  const [clues, setClues] = useState<Clue[]>(playerData.cluesFound)

  function addClue(clue_code: string) {
    const clue = getClueFromCode(clue_code)

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
      console.error("Clue not found")
    }
  }

  return (
    <Game title="Scan Your Code">
      <CameraScannerWrapper onScanComplete={addClue} />

      <Carousel>
        {clues.map((clue) => (
          <Card
            key={clue.id}
            clue={clue}
            backgroundColor="lightblue"
          />
        ))}
      </Carousel>
    </Game>
  )
}

export default App