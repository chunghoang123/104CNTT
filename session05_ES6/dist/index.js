"use strict";
class Student {
    constructor(name, dateOfBirth, email) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
    }
    ///atributes (phuong thức)
    study() {
        return "I am studying";
    }
}
const student1 = new Student("nguyen van a", "12/21/2025", "nva@gmail.com");
