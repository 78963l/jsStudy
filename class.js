'use strict';

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const sm = new Person('sm', 29);

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firestName = this.firestName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('kim', 'sungmin', -1);

// 3. public, private, static

// 4. Inheritance
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`shape color = ${this.olor}`);
    }
}
class Rectange extends Shape { 
    draw() { // overiding
        super.draw();
        console.log(`Rectange color = ${this.olor}`);
    }
}

// 5. class checking : instanceOf
console.log(Rectange instanceof Shape);