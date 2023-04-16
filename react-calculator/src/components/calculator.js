import React from "react";
import "../css/index.css";
import { useState } from "react";

const Calculator = () => {
  let [entireCalculation, setEntireCalculation] = useState("0");
  let [calculateCompleted, setCalculateCompleted] = useState(false);

  // 입력(숫자)
  const enterNumber = (e) => {
    if (entireCalculation === "0") {
      // 초기 값 삭제 후 계산
      entireCalculation = "";
      entireCalculation += e.target.innerHTML;
    } else {
      // 계산 전 이전 기록 초기화
      if (calculateCompleted) {
        entireCalculation = "";
        setCalculateCompleted(false);
      }

      // 세 자릿 수 이상 입력 방지
      if (entireCalculation.length > 2 && !entireCalculation.includes(" ")) {
        alert("세 자리 숫자까지 입력 가능합니다!");
      } else if (entireCalculation.length > 8) {
        alert("세 자리 숫자까지 입력 가능합니다!");
      } else {
        entireCalculation += e.target.innerHTML;
      }
    }
    setEntireCalculation(entireCalculation);
  };

  // 입력(연산자)
  const enterOperator = (e) => {
    // 계산이 끝난 다음, 숫자가 아닌 연산자가 처음으로 입력되지 못하게 함
    if (calculateCompleted) {
      return false;
    }

    // 가장 처음으로 연산자가 입력되지 못하게 함
    if (entireCalculation === "0") {
      alert("계산할 숫자를 입력해 주세요!");
    } else {
      // 연산자 연속 입력 방지
      if (
        entireCalculation.charAt(entireCalculation.length - 1) === " " ||
        entireCalculation.includes(" ")
      ) {
        alert("연산자는 한 번만 입력 가능합니다.");
      } else {
        entireCalculation += " " + e.target.innerHTML + " ";
        setEntireCalculation(entireCalculation);
      }
    }
  };

  // 계산
  const operateValue = (e) => {
    const [firstNum, operator, secondNum] = entireCalculation.split(" ");

    switch (operator) {
      case "+":
        setEntireCalculation(
          firstNum * 1 + secondNum * 1 !== Infinity
            ? firstNum * 1 + secondNum * 1
            : "오류"
        );
        break;
      case "-":
        setEntireCalculation(
          firstNum * 1 - secondNum * 1 !== Infinity
            ? firstNum * 1 - secondNum * 1
            : "오류"
        );
        break;
      case "X":
        setEntireCalculation(
          firstNum * 1 * (secondNum * 1) !== Infinity
            ? firstNum * 1 * (secondNum * 1)
            : "오류"
        );
        break;
      case "/":
        setEntireCalculation(
          Math.floor((firstNum[0] * 1) / (secondNum * 1)) !== Infinity
            ? Math.floor((firstNum[0] * 1) / (secondNum * 1))
            : "오류"
        );
        break;
    }
    setCalculateCompleted(true);
  };

  // 초기화
  const resetValue = () => {
    setEntireCalculation("0");
    setCalculateCompleted(false);
  };

  return (
    <>
      <div id="app">
        <div className="calculator">
          <h1 id="total">{(entireCalculation + "").replace(/\s/g, "")}</h1>
          <div className="digits flex">
            <button onClick={enterNumber} className="digit">
              9
            </button>
            <button onClick={enterNumber} className="digit">
              8
            </button>
            <button onClick={enterNumber} className="digit">
              7
            </button>
            <button onClick={enterNumber} className="digit">
              6
            </button>
            <button onClick={enterNumber} className="digit">
              5
            </button>
            <button onClick={enterNumber} className="digit">
              4
            </button>
            <button onClick={enterNumber} className="digit">
              3
            </button>
            <button onClick={enterNumber} className="digit">
              2
            </button>
            <button onClick={enterNumber} className="digit">
              1
            </button>
            <button onClick={enterNumber} className="digit">
              0
            </button>
          </div>
          <div className="modifiers subgrid">
            <button onClick={resetValue} className="modifier">
              AC
            </button>
          </div>
          <div className="operations subgrid">
            <button onClick={enterOperator} className="operation">
              /
            </button>
            <button onClick={enterOperator} className="operation">
              X
            </button>
            <button onClick={enterOperator} className="operation">
              -
            </button>
            <button onClick={enterOperator} className="operation">
              +
            </button>
            <button onClick={operateValue} className="operation">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
