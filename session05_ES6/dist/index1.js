"use strict";
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    }
    get getAge() {
        return this.age;
    }
    set setAge(newAge) {
        this.age = newAge;
    }
    speak() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    //ghi đè phương thức Override
    speak() {
        console.log("meo meo");
    }
}
// triển khai
const dog = new Dog("Bella", 3, "Chó", "husky");
