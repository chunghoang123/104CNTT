class Employee{
    public name :string;
    protected company :string;
    private phone:string;

    constructor(name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone  = phone;
    }


    public displayInfo(): void{
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}


const emp  = new Employee('Nguyễn Văn A','FPT','0123456789');



emp.displayInfo();