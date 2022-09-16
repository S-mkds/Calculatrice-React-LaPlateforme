import React from 'react'
import { useState } from "react";
import "./Style.css"
import AmazingNumberButton from './AmazingNumberButton';
// import BeautifulScreen from './BeautifulScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import ItsOverNineThousand from './ItsOverNineThousand';

const ButtonCalculator = () => {

    const [result, setResult] = useState("");

    const handleClick = (e) => {
      setResult(result.concat(e.target.ButtonNumber));
    }
    console.log(handleClick)
  
    const clear = () => {
      setResult("");
    }
  
    const backspace = () => {
      setResult(result.slice(0, result.length - 1));
    }
  
    const calculate = () => { 
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(result).toString());
      } 
      catch(err) {
        setResult("Error")
      }
    }
  return (
    
    <div className="container"> 
          <form>
        <input type="text" value= {result}/>
    </form>

      <div className="keypad">
        <GreatOperationButton className="highlight" Operator="Clear" Onclick={clear} id="clear">Clear</GreatOperationButton>
        <GreatOperationButton className="highlight" Operator="C" Onclick={backspace} id="backspace">C</GreatOperationButton>
        <GreatOperationButton className="highlight" Operator="/"  onClick={handleClick}>&divide;</GreatOperationButton>
        <GreatOperationButton className="highlight" Operator="*" onClick={handleClick}>&times;</GreatOperationButton>
       
        <AmazingNumberButton ButtonNumber="7" onClick={handleClick}>7</AmazingNumberButton>
        <AmazingNumberButton ButtonNumber="8" onClick={handleClick}>8</AmazingNumberButton>
        <AmazingNumberButton ButtonNumber="9" onClick={handleClick}>9</AmazingNumberButton>
       
        <GreatOperationButton className="highlight" Operator="-" onClick={handleClick}>&ndash;</GreatOperationButton>
        <AmazingNumberButton ButtonNumber="4" onClick={handleClick}>4</AmazingNumberButton>
        <AmazingNumberButton ButtonNumber="5" onClick={handleClick}>5</AmazingNumberButton>
        <AmazingNumberButton ButtonNumber="6" onClick={handleClick}>6</AmazingNumberButton>
       
        <GreatOperationButton className="highlight" Operator="+" onClick={handleClick}>+</GreatOperationButton>
        <AmazingNumberButton ButtonNumber="1" onClick={handleClick}>1</AmazingNumberButton>
        <AmazingNumberButton ButtonNumber="2" onClick={handleClick}>2</AmazingNumberButton>
        <AmazingNumberButton ButtonNumber="3" onClick={handleClick}>3</AmazingNumberButton>
        
        <GreatOperationButton Operator="." onClick={handleClick}>.</GreatOperationButton>
        <AmazingNumberButton ButtonNumber="0" onClick={handleClick}>0</AmazingNumberButton>
        <button className="highlight"  id="save">Save</button>
        <MagnificientEqualButton Equal="="  onClick={calculate} id="result">=</MagnificientEqualButton>
      </div> 
      <ItsOverNineThousand Over="It’s Over 9000 !!!"/>
    </div>
   
  )
}

export default ButtonCalculator
