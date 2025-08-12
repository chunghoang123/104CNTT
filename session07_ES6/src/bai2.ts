class Vehicle {
    id: number;
    name: string;
    speed: number;
    constructor(
        id: number,
        name: string,
        speed: number
    ) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }

    slowDown(num:number): number {
        return this.speed -=num;
    }
    speedUp(num:number): number {
        return this.speed += num;
    }

    showSpeed(): void {
        console.log(`Tốc độ của xe ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    private gear: number;
    constructor(
        id: number,
        name: string,
        speed: number,
        gear:number,
    ){
        super(id, name, speed);
        this.gear = gear;
    }
}


const bicycle = new Bicycle(1,"xe may",80,3);
bicycle.showSpeed();
bicycle.speedUp(10);
bicycle.showSpeed();
bicycle.slowDown(80);
bicycle.showSpeed();