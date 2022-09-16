import React from 'react'
import "./BeautifulScreen.css"

const BeautifulScreen = ({  text, result  }) => {
  return (
    <div>
    <div className="result">
				<h2>
					{result}
				</h2>
			</div>
			<div className="text">
				<h3>{text}</h3>
			</div>
      </div>
  )
}

export default BeautifulScreen
