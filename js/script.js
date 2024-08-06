'use strict';

const hours = +prompt ('Enter hours amount');

const minutes = hours * 60;
const seconds = minutes * 60;

alert(`${hours} hours is ${seconds} seconds`);