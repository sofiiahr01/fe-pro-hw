'use strict';

const operand1 = prompt("Введіть перший операнд");
const operand2 = prompt("Введіть другий операнд");

const sum = +operand1 + +operand2;
const difference = operand1 - operand2;
const multiplication = operand1 * operand2;
const division = operand1 / operand2;

console.log(`Результат: ${operand1} + ${operand2} = ${sum}`);
console.log(`Результат: ${operand1} - ${operand2} = ${difference}`);
console.log(`Результат: ${operand1} * ${operand2} = ${multiplication}`);
console.log(`Результат: ${operand1} / ${operand2} = ${division}`);