import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compo1 from './componets/compo1/Compo1'
import Compo2 from './componets/compo2/Compo2'
import Compo3 from './componets/compo3/Compo3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Compo1></Compo1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Compo2></Compo2>
      <h1>Practica 9 Jose Gregorio Perez Montilla</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Compo3></Compo3>
    </>
  )
}

export default App
