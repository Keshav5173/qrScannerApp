import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Scanner } from '@yudiel/react-qr-scanner';

function App() {


  return (
    <>
      <h2>QR Scanner Active</h2>
      <Scanner
        onScan={(result) => {
          if (Array.isArray(result) && result.length > 0) {
            console.log("Raw Value:", result[0].rawValue);
          }
        }}
        onError={(error) => {
          console.error("QR Scanner error:", error);
        }}
        paused={false}
        torch={true}
        zoom={true}
        finder={true}
        onOff={true}
        style={{ width: '50%', maxWidth: '500px' }}
      />

    </>
  );
}


export default App
