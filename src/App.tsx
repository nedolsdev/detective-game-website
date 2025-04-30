import './App.css'
import CameraScannerWrapper from './CameraScannerWrapper'
import Game from './Game'



function App() {
  

  return (
      <Game title="Scan Your Code">
      <CameraScannerWrapper onScanComplete={(code) => alert(code)} />
    </Game>
  )
}

export default App