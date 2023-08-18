import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
