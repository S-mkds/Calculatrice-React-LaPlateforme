import React from 'react'
import "./AmazingNumberButton.css"

const AmazingNumberButton = ( { buttonNumber, foo }) => {
  return (
    <button id='show-value' onClick={()=>foo(buttonNumber)}>
      {buttonNumber}
    </button>
  )
}

export default AmazingNumberButton