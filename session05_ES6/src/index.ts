class Student {

    //properties(thuộc tính)
    name:string;
    dateOfBirth:string;
    email:string

    constructor(name:string,dateOfBirth:string,email:string){
        this.name = name
        this.dateOfBirth = dateOfBirth
        this.email = email
    }
    ///atributes (phuong thức)

    study():string{
        return "I am studying";
    }
}


const student1 = new Student("nguyen van a","12/21/2025","nva@gmail.com")