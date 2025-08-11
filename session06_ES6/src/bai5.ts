interface ChangeSpeed {
    speedUp(amount: number): void;
    slowDown(amount: number): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed = 0;

    speedUp(amount: number) {
        this.speed += amount;
        console.log(`Tăng ${amount} km/h → Tốc độ: ${this.speed} km/h`);
    }

    slowDown(amount: number) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Giảm ${amount} km/h → Tốc độ: ${this.speed} km/h`);
    }

    stop() {
        this.speed = 0;
        console.log(`Dừng xe → Tốc độ: ${this.speed} km/h`);
    }
}

const car = new Vehicle();
car.speedUp(50);
car.slowDown(20);
car.speedUp(30);
car.stop();
