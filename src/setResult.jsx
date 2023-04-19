const setResult= (previousNum, operation, currentNum) => {
    let totalNumber = 0;
    currentNum === undefined ? currentNum = 0 : currentNum;
    if(!!previousNum && !!operation){
        switch (operation) {
        case "+": totalNumber = Number(previousNum) + Number(currentNum);
            break;
        case "-": totalNumber = Number(previousNum) - Number(currentNum);
            break;
        case "X": totalNumber = Number(previousNum) * Number(currentNum);
            break;
        case "/": totalNumber = Math.floor(Number(previousNum) / Number(currentNum));
            break;
        }
        return totalNumber;
    }
}

const setValues = (setPreviousNum, setOperations, setCurrentNum, setTotalCalculation, value) => {
    setTotalCalculation(value);
    setPreviousNum(value);
    setOperations();
    setCurrentNum(0);
}

export {setResult , setValues};