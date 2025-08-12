"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("Name: " + this.name);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log("Student ID: " + this.id);
    }
}
class Teacher extends Person {
    constructor(name, suject) {
        super(name);
        this.suject = suject;
    }
    displayInfo() {
        super.displayInfo();
        console.log("Subject: " + this.suject);
    }
}
const stu = new Student("chung", 1);
stu.displayInfo();
const tea = new Teacher("chung", "math");
tea.displayInfo();
