'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits[1]);

// 3. looping over an array
for(let val of fruits){
    console.log(val)
}
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addtion, deletion, copy
// push: add an item to the end
// pop: remove an item from the end
// unshift: add an item to the benigging
// shift: remove an item from the benigging
// splice: remove an item by index position
const a = ['1', '2', '3', '4'];
a.splice(1, 2); // ['1', '4'];

// concat : combine two arrays
const a = ['1', '2'];
const b = ['3', '4'];
const c = a.concat(b); // ['1', '2', '3', '4'];

// Seraching : find the index
const a = ['1', '2', '3', '4'];
console.log(a.indexOf('2')) // 1
console.log(a.includes('2')) // true
