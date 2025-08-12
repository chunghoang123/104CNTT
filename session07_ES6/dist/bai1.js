"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
class Manage extends Employee {
    constructor(teamSize, name, company, phone) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
const employee = new Manage(10, "John", "ABC", "1234567890");
employee.displayInfo();
