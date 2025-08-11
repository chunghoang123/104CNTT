"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name); // truyền tên cho Shape
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Rectangle size is: ${this.width} x ${this.height}`);
    }
}
const rect = new Rectangle("Rectangle", 5, 3);
console.log("Shape name:", rect.getName());
rect.getSize();
