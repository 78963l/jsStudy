'use strict';

// Objects
// object = {key : value};
// 1. Literals and properties
const obj1 = {}; // 'object literal'
const obj2 = new Object(); // 'object constructor'

// 2. Computed properties
console.log(obj1.name);
console.log(obj1['name']);

// 3. Property value shorthand
const person1 = {name='t1', age= 1 };
function makePerson(name, age){
    return {
        name,
        age,
    }
}
const person2 = makePerson('t2', 2);

// 4. in operator
console.log('name' in person2);

// 5. for..in vs for..of
// for (key in obj)
for (key in person1){};
// for (value of iterable)
const array = [1,2,3,4,5];
for (val of array){}

// 6. cloning
// Object.assign(dest, [obj1, obj2...])
const user = {name:'sm', age:'9'};
const user2 = user;
Object.assign(user4, user);

