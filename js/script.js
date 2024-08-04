'use strict';

const name = prompt('Enter your name');
const age = prompt('Enter your age');
let likesProgramming = confirm('Do you like programming?');

console.log(name, age, likesProgramming);

console.log (typeof name);
console.log (typeof age);
console.log (typeof likesProgramming);

let greeting = `Hello, ${name}!`;
alert(greeting);

let numericAge = Number(age);
let nextAge = numericAge + 1;
console.log(nextAge);

let isAdult = age >= 18;
console.log(isAdult);
