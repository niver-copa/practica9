import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className='container'> 
      <Header></Header>
      <div>
      <Body></Body>
      </div>
      <Footer></Footer>
      </body>
    </>
  )
}

export default App
