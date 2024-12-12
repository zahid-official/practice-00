class Animal{
    constructor(animalName, animalWeight, animalColor){
        this.name = animalName;
        this.weight = animalWeight;
        this.color = animalColor;
    }

    details(){
        console.log(`
            This Animal's name is: ${this.name},
            It's color is: ${this.color},
            It's weight is: ${this.weight},`);
    }
}

let lion = new Animal('Lion', '275kg', 'Brown');
lion.details();

// Inheritance 
class Monkey extends Animal{
    behavior(){
        console.log(`            ${this.name}'s behaviour is: Clumbing`);
    }
}

let monkey = new Monkey('Monkey', '120kg', 'Red');
monkey.details()
monkey.behavior()




class Fish extends Animal{
    behavior(){
        console.log(`            ${this.name}'s behaviour is: Swimming`);
    }
}

let fish = new Fish('Fish', '3kg', 'Silver');
fish.details()
fish.behavior()