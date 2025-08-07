"use strict";
// //khai bao kieu du lieu
// type Subject = {
//     subjectName: string;
//     score: number | string;
// }
// type Student = {
//     id: number;
//     name: string;
//     age: number | string;
//     subject: Subject[];
// };
// //hàm them sinh vien
// const students: Student[] = [];
// const createStudent = (student: Student) => {
//     students.push(student);
// }
// const updateStudent = (id: number, newStudent: Student) => {
//     //tìm kiém sinh vien theo id;
//     const findIndexStudent = students.findIndex((st) => st.id === id);
//     if (findIndexStudent === -1) {
//         console.log('khong tim thay sinh vien');
//     } else {
//         //cap nhat thong tin cho từng truong trong doi tuong Student
//         students[findIndexStudent].name = newStudent.name;
//         students[findIndexStudent].age = newStudent.age;
//         students[findIndexStudent].subject = newStudent.subject;
//     }
// };
// // hàm xoá sinh vien
// const deleteStudent = (id: number): void => {
//     // lay tim sinh vien theo id
//     const findIndexStudent = students.findIndex((st) => st.id === id);
//     if (findIndexStudent != -1) {
//         students.splice(findIndexStudent, 1);
//     } else {
//         console.log('khong tim thay sinh vien');
//     }
// };
// // ap dung type guard để kiểm tra kiểu dữ liệu
// //
// const isNumber = (score: string | number) => {
//     return typeof score === "number"
// };
// // chuyển đổi điểm từ chuỗi thành số
// const convertScore = (score: string): number => {
//     const scoreMap: {[key:string]:number} = {
//         A: 10,
//         B: 8,
//         C: 6,
//         D: 4,
//     };
//     //tra về kết quả sau khi chuyển đổi
// };
// //tính điểm tb của sinh vien
// const calculateAverageScore = (subject: Student) => {
//     let sum = student.subjects.     reduce((total, score) =>{
//          if(isNumber(sujec))
//     })
// }
