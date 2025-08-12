abstract class Person {
    name:string;

    constructor(name:string){
        this.name=name;
    }

    displayInfo():void{
        console.log("Name: "+this.name);
    }
}
class Student extends Person {
    id:number;
    constructor(name:string,id:number){
        super(name);
        this.id=id;
    }
    displayInfo(): void {
        super.displayInfo();
        console.log("Student ID: "+this.id);
    }

}

class Teacher extends Person {
    suject:string;
    constructor(name:string,suject:string){
        super(name);
        this.suject=suject;
    }
    displayInfo(): void {
        super.displayInfo();
        console.log("Subject: "+this.suject);
    }
}

const stu = new Student("chung",1);
stu.displayInfo();
const tea = new Teacher("chung","math");
tea.displayInfo();