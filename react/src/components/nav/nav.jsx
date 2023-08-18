import React, { useState } from "react";

export default function nav() {
  const Likes = ({ likes }) => {
    const state = useState(0)
    console.log(state);
    return (
      <button
        onClick={() => {
          likes++;
        }}
      >
        {likes} likes
      </button>
    );
  };

  return (
    <div>
      <Likes likes={12} />
    </div>
  );
}
