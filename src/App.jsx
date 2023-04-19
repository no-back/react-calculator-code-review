import { useState } from 'react'
import setNumbers from './setNumbers.jsx';
import {setResult , setValues} from './setResult.jsx';
import checkTotalNums from './setOperation.jsx';

function App(){
  const [previousNumber, setPreviousNumber] = useState(0);
  const [operation, setOperations] = useState();
  const [currentNumber, setCurrentNumber] = useState(0);
  const [totalCalculation, setTotalCalculation] = useState(0);

  
  const handleNumber = (event) => {
    operation === undefined ?
    setNumbers(true,previousNumber, event.target.textContent, setTotalCalculation, setPreviousNumber):
    setNumbers(false,currentNumber, event.target.textContent, setTotalCalculation, setCurrentNumber);
  }

  const handleOperations = (event) => {
    checkTotalNums(totalCalculation, operation, event.target.textContent, setOperations, setTotalCalculation);
  }

  const handleEqual = () => {
    const result = setResult(previousNumber, operation, currentNumber);
    result === Infinity ?
    setValues(setPreviousNumber, setOperations, setCurrentNumber, setTotalCalculation, "error") :
    setValues(setPreviousNumber, setOperations, setCurrentNumber, setTotalCalculation, result);
  }

  const handleReset = () => {
    setValues(setPreviousNumber, setOperations, setCurrentNumber, setTotalCalculation, 0);
  }

  return (
  <div className="calculator" >
    <h1 id="total">{totalCalculation}</h1>
    <div className="digits flex">
      <button className="digit" onClick={handleNumber}>9</button>
      <button className="digit" onClick={handleNumber}>8</button>
      <button className="digit" onClick={handleNumber}>7</button>
      <button className="digit" onClick={handleNumber}>6</button>
      <button className="digit" onClick={handleNumber}>5</button>
      <button className="digit" onClick={handleNumber}>4</button>
      <button className="digit" onClick={handleNumber}>3</button>
      <button className="digit" onClick={handleNumber}>2</button>
      <button className="digit" onClick={handleNumber}>1</button>
      <button className="digit" onClick={handleNumber}>0</button>
    </div>
    <div className="modifiers subgrid">
      <button className="modifier" onClick={handleReset}>AC</button>
    </div>
    <div className="operations subgrid">
      <button className="operation" onClick={handleOperations}>/</button>
      <button className="operation" onClick={handleOperations}>X</button>
      <button className="operation" onClick={handleOperations}>-</button>
      <button className="operation" onClick={handleOperations}>+</button>
      <button className="operation" onClick={handleEqual}>=</button>
    </div>
  </div>
  )
}

export default App