'use strict';

// Function
// fundamental building block in the program

// 1. Function declartaion
// naming: doSomething, command, verb
function setName(){} // default
let setName = function(){} // anonymous
let setName = () => {} // arrow

// 2. Parameters
function changeName(obj){
    obj.name == 'test';
}
const sm = {name:'sm'};
changeName(sm);

// 3. Defualt parameters
function showMs(ms, from ='unknown'){}
showMs('test');

// 4. Rest parameters : ...args -> array
function printAll(...args){}

// 5. Callback function
function test(answer, yes, no){
    if(answer==='test'){yes();}
    else{no();}
}