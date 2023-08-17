import { useState } from 'react';
import PrimerCompont from './components/PrimerCompont';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimerCompont/>
    </>
  )
}

export default App
