'use strict';

const number1 = +prompt ('Enter first number');
const number2 = +prompt ('Enter second number');
const number3 = +prompt ('Enter third number');

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert('Please, enter valid numbers');
} else {const average = (number1 + number2 + number3) / 3;
        console.log(`(${number1} + ${number2} + ${number3}) / 3 = ${average}`);
        alert(`Arithmetic mean is ${average}`)}
