import React from 'react'
import "./BeautifulScreen.css"

const BeautifulScreen = ({ result }) => {
  return (
    <form>
        <input type="text" value= {result}/>
    </form>
  )
}

export default BeautifulScreen
