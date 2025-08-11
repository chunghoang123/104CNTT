class Student {
    constructor(private id: number, private name: string) {}
    getId() { return this.id; }
    getName() { return this.name; }
}

let allStudents: Student[] = [];

class Classroom {
    private students: Student[] = [];
    showStudents() {
        console.log("Danh sách học sinh:");
        this.students.forEach(s => console.log(`ID: ${s.getId()}, Name: ${s.getName()}`));
    }
    addStudent(student: Student) {
        this.students.push(student);
    }
    filterStudent(id: number): Student[] {
        return this.students.filter(s => s.getId() === id);
    }
    addStudentInClass(id: number) {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
}

allStudents.push(
    new Student(1, "An"),
    new Student(2, "Bình"),
    new Student(3, "Chi"),
    new Student(4, "Dũng"),
    new Student(5, "Hà"),
    new Student(6, "Linh")
);

const classA = new Classroom();
const classB = new Classroom();

classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("Lớp A:");
classA.showStudents();
console.log("Lớp B:");
classB.showStudents();
