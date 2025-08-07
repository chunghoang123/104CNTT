interface Student {
  name: string;
  age: number;
  email: string;
}

const introduceStudent = (student: Student): void => {
  console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
};

const student1: Student = {
  name: "Trần Thị B",
  age: 22,
  email: "tranthib@example.com"
};

introduceStudent(student1);
