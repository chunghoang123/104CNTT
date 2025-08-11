abstract class Animal {
  abstract makeSound(): void; 
  eat() { console.log("Eating"); } 
}
class Dog extends Animal {
  makeSound() { console.log("Woof"); }
}
const dog = new Dog();
dog.makeSound(); 
dog.eat();      
