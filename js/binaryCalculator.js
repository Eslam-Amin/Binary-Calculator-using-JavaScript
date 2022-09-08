/**
  I know I could Use parstInt(binaryNum,2);
  to get the Decimal Value,
  and decimal.toString(2);
  to get the binary Value.
  BUT I loved this problem, 
  and I wanted to get the most out of if.
 */


  
var res = document.getElementById("res");
function btnAddTextlick(obj){
    res.innerHTML += obj.innerHTML;
}
function btnClearClick(){
    res.innerHTML='';
}

function btnEqulClick(){
    let re = /\d(\+|\-|\*|\/)\d/;
    let innerRes = res.innerHTML;
    let resultDecimalNum;
    let resultBinaryNum;
    if(re.test(innerRes)){
        resultDecimalNum = convertToDecimal(innerRes);
        resultBinaryNum = converToBinary(resultDecimalNum);
        res.innerHTML = resultBinaryNum;
    }
    else{
        alert("This is invalid");
    }
}
function convertToDecimal(innerRes){
    let splitRe = /[\+|\/|\*|\-]/;
    let arr = innerRes.split(splitRe);
    let sign= innerRes.charAt(arr[0].length);
    let firstDecimalNum = loopingThroughStr(arr[0]);
    let seconDecimalNum = loopingThroughStr(arr[1]);

    return getResult(firstDecimalNum, seconDecimalNum, sign);
}

function loopingThroughStr(str){
    let decimalNum = 0;
    for(let i=0,j=str.length-1;i<str.length;j--,i++){
        decimalNum += parseInt(str[j]*(2**i));
    }
    return decimalNum;
}
function getResult(firstNum, secondNum, sign){
    switch(sign){
        case '+':
            return firstNum+secondNum;
        case '-':
            return firstNum-secondNum;
        case '*':
            return firstNum*secondNum;
        case '/':
            if(secondNum!=0)
                return firstNum/secondNum;
    }

}

function converToBinary(decimalNum){
    let binaryNum=["0"];
    while(decimalNum > 0){
        binaryNum=[];
        if(decimalNum % 2 == 0)
            binaryNum.unshift("0");
        else
        binaryNum.unshift("1");
    decimalNum = parseInt(decimalNum / 2);
    }
    return binaryNum.join("");
}