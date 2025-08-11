class Student1 {
    constructor(private id: number, private name: string) {}
    getId() { return this.id; }
    getName() { return this.name; }
    setName(newName: string) { this.name = newName; }
}

let allStudents1: Student1[] = [];

class Classroom1 {
    private students: Student1[] = [];

    showStudents() {
        console.log("Danh sách học sinh:");
        this.students.forEach(s => console.log(`ID: ${s.getId()}, Name: ${s.getName()}`));
    }

    addStudentInClass(id: number) {
        const index = allStudents1.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents1[index]);
            allStudents1.splice(index, 1);
        }
    }

    removeStudent(id: number) {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudents1.push(this.students[index]);
            this.students.splice(index, 1);
        }
    }

    editStudent(id: number, newName: string) {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}

allStudents1.push(
    new Student1(1, "An"),
    new Student1(2, "Bình"),
    new Student1(3, "Chi"),
    new Student1(4, "Dũng"),
    new Student1(5, "Hà"),
    new Student1(6, "Linh")
);

const classA1 = new Classroom1();
classA1.addStudentInClass(1);
classA1.addStudentInClass(2);
classA1.addStudentInClass(3);

console.log("Lớp A ban đầu:");
classA1.showStudents();

classA1.removeStudent(2);
console.log("\nLớp A sau khi xóa học sinh ID=2:");
classA1.showStudents();
console.log("Danh sách tất cả học sinh:", allStudents1.map(s => s.getName()));

classA1.editStudent(3, "Chinh");
console.log("\nLớp A sau khi sửa tên học sinh ID=3:");
classA1.showStudents();
