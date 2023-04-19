import warningWindow from './warnig.jsx';

const setNumbers = (isFirst, variable, num, setTotal, setNums) => {
    if(!variable && num !== "0"){
    if(isFirst){
        setTotal(num);
        setNums(num);
    }else{
        setTotal((current)=> current + num);
        setNums(num);
    }
    }else if(variable.length < 3){
    setTotal((current)=> current + num);
    setNums((current)=> current + num);
    }else if(variable.length >= 3){
    warningWindow("numberWarning");
    }
}

export default setNumbers;