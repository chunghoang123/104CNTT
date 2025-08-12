"use strict";
class Vehicle {
    constructor(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    slowDown(num) {
        return this.speed -= num;
    }
    speedUp(num) {
        return this.speed += num;
    }
    showSpeed() {
        console.log(`Tốc độ của xe ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(id, name, speed, gear) {
        super(id, name, speed);
        this.gear = gear;
    }
}
const bicycle = new Bicycle(1, "xe may", 80, 3);
bicycle.showSpeed();
bicycle.speedUp(10);
bicycle.showSpeed();
bicycle.slowDown(80);
bicycle.showSpeed();
