class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(
        name: string,
        company: string,
        phone: string
    ) {
        this.name = name
        this.company = company;
        this.phone = phone;
    }
    public displayInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`)
    }
    // getphone (): string {
    //     return this.phone;
    // }
    // setPhone(newPhone:number):void{
    //     this.phone = "0"+newPhone;

    // }
}

class Manage extends Employee {
    teamSize: number;
    constructor(teamSize: number,
        name: string,
        company: string,
        phone: string
    ) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

}


const employee = new Manage(10, "John", "ABC", "1234567890");
employee.displayInfo();