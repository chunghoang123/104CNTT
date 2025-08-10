"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    displayInfo() {
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}
const emp = new Employee('Nguyễn Văn A', 'FPT', '0123456789');
emp.displayInfo();
