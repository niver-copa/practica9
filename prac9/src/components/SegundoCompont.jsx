import React, { useState } from 'react'

function SegundoCompont() {
    const [color, setColor] = useState(false)

    const changeColor = () => {
    setColor (!color)
}


  return (
    <div>
        <h1 style={{color: color ? 'red':'black'}} >Tercer Commit</h1>
        <button onClick={changeColor}>click-Me</button>
    </div>
  )
}

export default SegundoCompont