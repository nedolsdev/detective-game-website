import './App.css'
import CameraScannerWrapper from './CameraScannerWrapper'
import Card from './Card'
import Carousel from './Carousel'
import { GAME_DATA } from './data'
import Game from './Game'



function App() {
  
  return (
    <Game title="Scan Your Code">
      <Carousel>
        <Card clue={GAME_DATA.clues[0]}>
        </Card> 
        <Card clue={GAME_DATA.clues[1]}>
        </Card>
        <Card clue={GAME_DATA.clues[2]}>
        </Card>  
      </Carousel>
      <CameraScannerWrapper onScanComplete={(code) => alert(code)} />
    </Game>
  )
}

export default App