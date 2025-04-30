import './App.css'
import CameraScannerWrapper from './CameraScannerWrapper'
import Card from './Card'
import Carousel from './Carousel'
import { GAME_DATA } from './data'
import Game from './Game'



function App() {
  
  return (
    <Game title="Scan Your Code">

      <CameraScannerWrapper onScanComplete={(code) => alert(code)} />

      <Carousel>
        <Card clue={GAME_DATA.clues[0]}>
        </Card> 
        <Card clue={GAME_DATA.clues[1]}>
        </Card>
        <Card clue={GAME_DATA.clues[25]}>
        </Card>  
      </Carousel>

    </Game>
  )
}

export default App