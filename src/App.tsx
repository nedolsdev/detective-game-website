import './App.css'
import BarcodeGenerator from './BarcodeGenerator'
import BarcodeScanner from './BarcodeScanner'
import QRCodeGenerator from './QRCodeGenerator'
import QRCodeScanner from './QRCodeScanner'

function App() {

  return (
    <>
      <div>
        <p>Hello World!</p>

        <QRCodeScanner mode="file" />

        <QRCodeGenerator />

        <BarcodeScanner mode="file" />

        <BarcodeGenerator />

      </div>
    </>
  )
}

export default App
