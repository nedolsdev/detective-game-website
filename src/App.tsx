import './App.css'
import BarcodeGenerator from './BarcodeGenerator'
import BarcodeScanner from './BarcodeScanner'

function App() {

  return (
    <>
      <div>
        <p>Hello World!</p>

        <BarcodeScanner mode="file" />

        <BarcodeGenerator />
      </div>
    </>
  )
}

export default App
