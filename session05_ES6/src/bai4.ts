class Vehicles {
    public name: string;
    protected year: number;
    private company: string;
    public readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    public displayInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng sản xuất: ${this.company}`);
    }
}

const myVehicle = new Vehicles(1, "Toyota Camry", 2023, "Toyota");
myVehicle.displayInfo();
