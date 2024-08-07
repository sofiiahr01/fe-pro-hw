'use strict';


const hours = +prompt ('Enter hours amount');

const minutes = hours * 60;
const seconds = minutes * 60;

console.log(`${hours} * 60 = ${minutes}`);
console.log(`${minutes} * 60 = ${seconds}`);

if (hours !== null && !isNaN(hours)){
    alert(`${hours} hours is ${seconds} seconds`);
} else {
    alert('Please, enter valid numbers');
}