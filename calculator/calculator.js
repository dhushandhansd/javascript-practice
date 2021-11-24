function __calculate() {
    var calcArr = document.getElementById('calc-input').value.split(" ");
    var arg1 = calcArr[0];
    var arg2 = calcArr[2];
    var ope = calcArr[1];
    var output;
    if (ope === "+") {
        output = Number(arg1) + Number(arg2);
    }
    else if (ope === "-") {
        output = Number(arg1) - Number(arg2);
    }
    else if (ope === "*") {
        output = Number(arg1) * Number(arg2);
    }
    else if (ope === "/") {
        output = Number(arg1) / Number(arg2);
    }
    else {
        console.log("Invalid Inputs");
    }
    console.log(output);
    var inputField = document.getElementById('calc-input');
    inputField.value = output;
}
function __clearInput() {
    var inputField = document.getElementById('calc-input');
    inputField.value = null;
}
function __numberFunction(number) {
    var fieldInput = document.getElementById('calc-ipnut');
    fieldInput.value = number;
}
// function __numbers() {
//   var numbersDiv = document.querySelectorAll('.number')
//   var numbers = [1,2,3,4,5,6,7,8,9,0]
//   numbersDiv.forEach((eachNumber) => {
//     var presNum = eachNumber
//     for(var i = 0 ; i < numbers.length; i++) {
//       presNum.onclick = __numberFunction(numbers[i])
//     }
//   })
// }
function __oneButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "1";
}
function __twoButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "2";
}
function __threeButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "3";
}
function __fourButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "4";
}
function __fiveButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "5";
}
function __sixButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "6";
}
function __sevenButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "7";
}
function __eightButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "8";
}
function __nineButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "9";
}
function __zeroButton() {
    console.log('Click One');
    var inputField = document.getElementById('calc-input');
    inputField.value += "0";
}
function __starFun() {
    var inputField = document.getElementById('calc-input');
    inputField.value += " * ";
}
function __plusFun() {
    var inputField = document.getElementById('calc-input');
    inputField.value += " + ";
}
function __minusFun() {
    var inputField = document.getElementById('calc-input');
    inputField.value += " - ";
}
function __slashFun() {
    var inputField = document.getElementById('calc-input');
    inputField.value += " / ";
}
