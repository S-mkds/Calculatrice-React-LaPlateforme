import React from 'react'


const GreatOperationButton = ( {  operator, funcOperator }) => {
  return (
    <button 
			onClick={() => funcOperator(operator)}
			className="highlight"
		>
			{operator}
		</button>
  )
}

export default GreatOperationButton
