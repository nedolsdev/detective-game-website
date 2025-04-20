import { useState } from 'react'
import './App.css'
import BarcodeGenerator from './BarcodeGenerator'
import BarcodeScanner from './BarcodeScanner'
import QRCodeGenerator from './QRCodeGenerator'
import QRCodeScanner from './QRCodeScanner'

type Mode = 'file' | 'camera'
type Type = 'qr' | 'barcode'

function App() {
  const [mode, setMode] = useState<Mode>('file')
  const [type, setType] = useState<Type>('qr')

  const toggleMode = () => {
    setMode(prev => (prev === 'file' ? 'camera' : 'file'))
  }

  const toggleType = () => {
    setType(prev => (prev === 'qr' ? 'barcode' : 'qr'))
  }

  return (
    <div>
      <p>Hello World!</p>

      <button onClick={toggleMode}>
        Switch to {mode === 'file' ? 'Camera' : 'File'} Mode
      </button>

      <button onClick={toggleType} style={{ marginLeft: '10px' }}>
        Switch to {type === 'qr' ? 'Barcode' : 'QR'} View
      </button>

      <p>Current Mode: {mode}</p>
      <p>Current Type: {type}</p>

      {type === 'qr' ? (
        <>
          <QRCodeScanner mode={mode} />
          <QRCodeGenerator />
        </>
      ) : (
        <>
          <BarcodeScanner mode={mode} />
          <BarcodeGenerator />
        </>
      )}
    </div>
  )
}

export default App