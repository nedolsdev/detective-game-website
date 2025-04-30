import './App.css'
import CameraScannerWrapper from './CameraScannerWrapper'


function onScanComplete(result: string) {
  console.log("sheesh", result)
}

function App() {
  

  return (
      <CameraScannerWrapper onScanComplete={onScanComplete} />
  )
}

export default App