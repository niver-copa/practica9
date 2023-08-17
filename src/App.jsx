import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Body from './components/body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
      <Header></Header>
      <div>
      <Body>
        
      </Body>
      
      </div>
      
      
      </body>
    </>
  )
}

export default App
