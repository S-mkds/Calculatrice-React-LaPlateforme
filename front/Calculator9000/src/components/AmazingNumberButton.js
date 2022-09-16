import React from 'react'
import "./AmazingNumberButton.css"

const AmazingNumberButton = ( { buttonNumber, foo }) => {
  return (
    <button onClick={()=>foo(buttonNumber)}>
      {buttonNumber}
    </button>
  )
}

export default AmazingNumberButton
