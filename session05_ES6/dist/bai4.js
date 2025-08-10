"use strict";
class Vehicles {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng sản xuất: ${this.company}`);
    }
}
const myVehicle = new Vehicles(1, "Toyota Camry", 2023, "Toyota");
myVehicle.displayInfo();
