"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const car1 = new Vehicle('Toyota', 2015, 'Toyota');
const car2 = new Vehicle('Honda', 2018, 'Honda');
console.log(car1);
console.log(car2);
