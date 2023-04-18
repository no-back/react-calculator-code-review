import warningWindow from './warnig.jsx';

const setTotal = (setOperation, setTotalCalculation, operation) => {
    setTotalCalculation((current)=> current + operation);
    setOperation(operation);
}

const checkTotalNums = (total, status, operation, setOperation, setTotalCalculation) => {
    status === undefined ?
    (
        !!total ? 
        setTotal(setOperation, setTotalCalculation, operation) : 
        warningWindow("operationWarning")
        ):
    warningWindow("operationWarning");
}

export default checkTotalNums;