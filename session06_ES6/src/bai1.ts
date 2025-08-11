abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public abstract getSize(): void;
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name); // truyền tên cho Shape
        this.width = width;
        this.height = height;
    }

    public getSize(): void {
        console.log(`Rectangle size is: ${this.width} x ${this.height}`);
    }
}

const rect = new Rectangle("Rectangle", 5, 3);
console.log("Shape name:", rect.getName());
rect.getSize();
