'use strict';

let operand1 = prompt("Введіть перший операнд");
let operand2 = prompt("Введіть другий операнд");

let sum = +operand1 + +operand2;
let difference = operand1 - operand2;
let multiplication = operand1 * operand2;
let division = operand1 / operand2;

console.log(`Результат: ${operand1} + ${operand2} = ${sum}`);
console.log(`Результат: ${operand1} - ${operand2} = ${difference}`);
console.log(`Результат: ${operand1} * ${operand2} = ${multiplication}`);
console.log(`Результат: ${operand1} / ${operand2} = ${division}`);