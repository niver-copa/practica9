import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/Component-1'
import Component2 from './components/Component-2'
import Component3 from './components/Component-3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Component1></Component1>
    <Component2></Component2>
    
    
    </>
  )
}

export default App
