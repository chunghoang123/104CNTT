"use strict";
class Animal {
    eat() { console.log("Eating"); }
}
class Dog extends Animal {
    makeSound() { console.log("Woof"); }
}
const dog = new Dog();
dog.makeSound();
dog.eat();
