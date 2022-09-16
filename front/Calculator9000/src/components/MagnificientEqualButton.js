import React from 'react'
import "./MagnificientEqualButton.css"

const MagnificientEqualButton = ({ equal, funcEqual }) => {
  return (
    <button onClick={() => funcEqual(equal)} id="result">=
    {equal}
  </button>
  )
}

export default MagnificientEqualButton
