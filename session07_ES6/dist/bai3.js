"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log('gâu gâu!');
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log('mèo mèo!');
    }
}
const dog = new Dog('mèo');
dog.printName();
dog.makeNoise();
const cat = new Cat('chó');
cat.printName();
cat.makeNoise();
