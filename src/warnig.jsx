const warningWindow = (state) => {
    if(state === "numberWarning"){
        alert("숫자는 세자리 까지만 입력 가능합니다!")
    }
    
    if(state === "operationWarning"){
        alert("숫자를 먼저 입력한 후 연산자를 입력해주세요!");
    }
}

export default warningWindow;