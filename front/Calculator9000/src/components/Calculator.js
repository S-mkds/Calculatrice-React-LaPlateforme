import React from 'react'
import { useState } from "react";
import "./Calculator.css";
import AmazingNumberButton from './AmazingNumberButton';
import BeautifulScreen from './BeautifulScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import ItsOverNineThousand from './ItsOverNineThousand';
import * as math from 'mathjs';

//Calculator set

  const Calculator = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
  
    const addTotext = (val) => {
      setText((text) => [...text, val + ""]);
    };
  
    const resetInput = () => {
      setText('')
      setResult('')
    };

    const calculateResult = () => {
      const input = text.join("");
      try { 
      setResult(math.evaluate(input));
    }
    catch(err) {
      setResult("Error")
    }
    }

    const backspace = () => {
      setResult(text.slice(0, text.length - 1));
    }

  return (
    <div className="container"> 
        <div className='show-value'>
        <BeautifulScreen text={text} result={result} />

{/* //Condition It's over9000 */}
     { 
     result > 9000 && setResult (<ItsOverNineThousand id="over-hit" Over="It’s Over 9000 !!!"/>)
     }
      </div>
      <div className="keypad">
        <GreatOperationButton operator="Clear" Onclick={resetInput} funcOperator={resetInput} id="clear"/>
        <GreatOperationButton operator="C" funcOperator={backspace} id="backspace"/>
        <GreatOperationButton operator="/"  funcOperator={addTotext}/>
        <GreatOperationButton operator="*" funcOperator={addTotext}/>
       
        <AmazingNumberButton buttonNumber="7" foo={addTotext}/>
        <AmazingNumberButton buttonNumber="8" foo={addTotext}/>
        <AmazingNumberButton buttonNumber="9" foo={addTotext}/>
       
        <GreatOperationButton operator="-" funcOperator={addTotext}/>
        <AmazingNumberButton buttonNumber="4" foo={addTotext}/>
        <AmazingNumberButton buttonNumber="5" foo={addTotext}/>
        <AmazingNumberButton buttonNumber="6" foo={addTotext}/>
       
        <GreatOperationButton operator="+" funcOperator={addTotext}/>
        <AmazingNumberButton buttonNumber="1" foo={addTotext}/>
        <AmazingNumberButton buttonNumber="2" foo={addTotext}/>
        <AmazingNumberButton buttonNumber="3" foo={addTotext}/>
        
        <GreatOperationButton operator="." funcOperator={addTotext}/>
        <AmazingNumberButton buttonNumber="0" foo={addTotext}/>
        <button id="save">Save</button>
        <MagnificientEqualButton Equal="=" funcEqual={calculateResult} Onclick={calculateResult} id="result"/>
      </div> 
    
    </div>
   
  )
}

export default Calculator
