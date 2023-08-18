import React, { useState } from 'react'

export default function nav() {

    const Likes = ({ likes }) => {
        return <button onClick={()=> {
          likes++; console.log(likes);
        }}
        >
          {likes} likes</button>;
    }

  return (
    <div>
       <Likes likes={12}/>
    </div>
  )
}
