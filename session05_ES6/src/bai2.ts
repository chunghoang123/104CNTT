class Studentt {
    id: number;
    age: number;
    email: string;



    constructor(id: number,age: number,email: string) {
        this.id = id;
        this.age = age;
        this.email = email;

    }

}
const students:Studentt[]=[]

students.push(new Studentt(1,20,"chung@gmail.com"));
students.push(new Studentt(2,21,"tran@gmail.com"));
students.push(new Studentt(3,26,"tranA@gmail.com"));


for(let i =0;i<students.length;i++){
    console.log(students[i].id,students[i].age,students[i].email);
}


