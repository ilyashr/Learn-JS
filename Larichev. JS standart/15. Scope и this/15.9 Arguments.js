'use strict'

// let, var, const, func, arguments
// scope chain
// this

function sumNum(num1, num2) {
    console.log(this);
    console.log(arguments[0]);
    return num1 + num2;
}
console.log(sumNum(1, 4, 3, 7));

// в стрелочной функции аргкменты недоступны
const sumNumArr = (num1, num2) => {
    console.log(this);
    console.log(arguments[0]);
    return num1 + num2;
}
console.log(sumNumArr(1, 4, 3, 7));