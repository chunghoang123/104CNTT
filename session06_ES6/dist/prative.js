"use strict";
// interface Animal {
//     name: string;
//     age: number;
//     category: string;
//     sound(): string;
//     getDetails(): string;
//     move(): void;
//     feed(): void;
// }
// abstract class Animal implements Animal {
//     name: string;
//     age: number;
//     category: string;
//     footType: string;
//     constructor(name: string, age: number, category: string, footType: string) {
//         this.name = name;
//         this.age = age;
//         this.category = category;
//         this.footType = footType;
//     }
//     getDetails(): string {
//         return `Name: ${this.name}, Age: ${this.age}, Category: ${this.category}- fooType: ${this.footType}`;
//     }
//     abstract sound(): string;
//     abstract move(): void;
//     abstract feed(): void {
//         console.log(`Name: ${this.name}, eatting: ${this.footType}`);
//     }
// }
// class Mammal extends Animal {
//     furColor: string;
//     constructor(name: string, age: number, category: string, footType: string, furColor: string) {
//         super(name, age, "Mammal", "Mâmmal FootType");
//         this.furColor = furColor;
//     }
//     move(): void {
//         console.log("phạch phạch")
//     }
// }
// class Bird extends Animal {
//     wingSpan: number;
//     constructor(name: string, age: number, category: string, footType: string, wingSpan: number) {
//         super(name, age, category, 'Bird');
//         this.wingSpan = wingSpan;
//     }
//     move(): void {
//         console.log("Flying....")
//     }
// }
// class RepTile extends Animal {
//     venomous: boolean;
//     constructor(name: string, age: number, category: string, footType: string, venomous: boolean) {
//         super(name, age, category, 'Reptile');
//         this.venomous = venomous;
//     }
//     move(): void {
//         console.log("Đang bò");
//     }
// }
// const animal: Animal[] = [
//     new Mammal('Mam', 1, 'Black'),
//     new Bird('Bird', 2, 'White'),
// ]
