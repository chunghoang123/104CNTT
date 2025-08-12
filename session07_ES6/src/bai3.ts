abstract class Animal{
    name:string;

    constructor(name:string){
        this.name=name;
    }

    abstract makeNoise():void;
        
    printName():void{
        console.log(this.name);
    }
}

class Dog extends Animal{
    makeNoise():void{
        console.log('gâu gâu!');
    }
}
class Cat extends Animal{
    makeNoise():void{
        console.log('mèo mèo!');
    }
}



const dog = new Dog('mèo');
dog.printName();
dog.makeNoise();

const cat = new Cat('chó');
cat.printName();
cat.makeNoise(); 
