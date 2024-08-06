'use strict';

const number1 = +prompt ('Enter first number');
const number2 = +prompt ('Enter second number');
const number3 = +prompt ('Enter third number');

const average = (number1 + number2 + number3) / 3;

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert('Please, enter valid numbers');
} else {
        alert(`Arithmetic mean is ${average}`);
        console.log(`(${number1} + ${number2} + ${number3}) / 3 = ${average}`);
}
