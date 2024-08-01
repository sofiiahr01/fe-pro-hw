'use strict';

let x = prompt("Введіть перший операнд");
let y = prompt("Введіть другий операнд");

let sum = +x + +y;
let difference = x - y;
let multiplication = x * y;
let division = x / y;

console.log(`Результат: ${x} + ${y} = ${sum}`);
console.log(`Результат: ${x} - ${y} = ${difference}`);
console.log(`Результат: ${x} * ${y} = ${multiplication}`);
console.log(`Результат: ${x} / ${y} = ${division}`);