import { useReducer } from "react";

import {
  handleDigit,
  handleEqual,
  handleModifier,
  handleOperation,
  Validate,
} from "./domain";
import { ERROR, TYPE } from "./utils/const";
import { initialState, reducer } from "./reducer";
import { useEffect } from "react";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { DIGIT, MODIFIER, OPERATION, EQUAL } = TYPE;

  const handleCalculator = (event) => {
    const input = event.target.textContent;

    switch (Validate.checkPattern(input)) {
      case DIGIT:
        handleDigit(input, state, dispatch);
        break;
      case MODIFIER:
        handleModifier(input, state, dispatch);
        break;
      case OPERATION:
        handleOperation(input, state, dispatch);
        break;
      case EQUAL:
        handleEqual(input, state, dispatch);
        break;
      default:
        new Error(ERROR.PATTERN);
        break;
    }
  };

  return (
    <div className="calculator">
      <h1 id="total">{state?.screen?.value}</h1>
      <div className="digits flex" onClick={handleCalculator}>
        <button className="digit">9</button>
        <button className="digit">8</button>
        <button className="digit">7</button>
        <button className="digit">6</button>
        <button className="digit">5</button>
        <button className="digit">4</button>
        <button className="digit">3</button>
        <button className="digit">2</button>
        <button className="digit">1</button>
        <button className="digit">0</button>
      </div>
      <div className="modifiers subgrid" onClick={handleCalculator}>
        <button className="modifier">AC</button>
      </div>
      <div className="operations subgrid" onClick={handleCalculator}>
        <button className="operation">/</button>
        <button className="operation">X</button>
        <button className="operation">-</button>
        <button className="operation">+</button>
        <button className="operation">=</button>
      </div>
    </div>
  );
};

export default App;
